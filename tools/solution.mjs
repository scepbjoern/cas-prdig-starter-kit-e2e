import fs from 'node:fs';import path from 'node:path';import net from 'node:net';import {spawn,execFileSync} from 'node:child_process';import {fileURLToPath} from 'node:url';
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
export function loadManifest(file){
 const m=JSON.parse(fs.readFileSync(file,'utf8'));m.base=path.dirname(path.resolve(file));
 if(m.schemaVersion!==1||!Array.isArray(m.systems)||!m.systems.length)throw Error('Manifest benötigt schemaVersion 1 und mindestens ein System.');
 if(!['development','release'].includes(m.mode))throw Error('mode muss development oder release sein.');
 const ids=new Set(),ports=new Set();
 for(const s of m.systems){
  if(!/^[a-z][a-z0-9-]*$/.test(s.id)||ids.has(s.id))throw Error('Doppelte/ungültige System-ID');ids.add(s.id);
  if(!Number.isInteger(s.port)||s.port<1024||s.port>65535||ports.has(s.port))throw Error('Doppelter/ungültiger Port');ports.add(s.port);
  if(typeof s.path!=='string'||!s.path.trim())throw Error('Lokaler Systempfad fehlt');
  s.absolutePath=path.resolve(m.base,s.path);
  if(!Array.isArray(s.start)||s.start.length<1||s.start.some(a=>typeof a!=='string'||!a)||/\.(cmd|bat)$/i.test(s.start[0]))throw Error('Start benötigt Programm und Argumente, keine Shell-/Batchdatei.');
  if(!s.healthPath?.startsWith('/'))throw Error('Health-Pfad fehlt');
  if(s.ref!==null&&!/^[a-f0-9]{40}$/.test(s.ref))throw Error('ref muss konkreter Commit oder null für Entwicklung sein.');
  if(m.mode==='release'&&s.ref===null)throw Error('Release benötigt konkrete Commits.');
 }
 const sorted=[],done=new Set();
 while(sorted.length<m.systems.length){
  const next=m.systems.find(s=>!done.has(s.id)&&(s.dependsOn??[]).every(x=>done.has(x)));
  if(!next)throw Error('Fehlende oder zyklische Abhängigkeit');
  done.add(next.id);sorted.push(next);
 }
 if(m.mode==='release'&&(!/^[a-f0-9]{40}$/.test(m.contractRevision)||!m.testDataRevision||!m.evidence))throw Error('Release benötigt Vertrags-, Testdaten- und Prüfnachweise.');
 return {...m,systems:sorted};
}
const git=(cwd,args)=>execFileSync('git',['-C',cwd,...args],{encoding:'utf8',stdio:['ignore','pipe','pipe']}).trim();
export function verifyCheckouts(m){
 for(const s of m.systems){
  if(!fs.existsSync(s.absolutePath))throw Error('Repository fehlt: '+s.id);
  if(s.ref&&git(s.absolutePath,['rev-parse','HEAD'])!==s.ref)throw Error('Commit stimmt nicht: '+s.id);
  if(m.mode==='release'&&git(s.absolutePath,['status','--porcelain']))throw Error('Release-Checkout ist verändert: '+s.id);
 }
}
export function prepare(m,{apply=false}={}){
 const actions=[];
 for(const s of m.systems){
  if(fs.existsSync(s.absolutePath)){actions.push({id:s.id,action:'vorhandenen Checkout erhalten'});continue;}
  if(!/^https:\/\/github\.com\/[\w.-]+\/[\w.-]+(?:\.git)?$/.test(s.repository??''))throw Error('Für Download gültige GitHub-HTTPS-Adresse erforderlich.');
  if(!s.ref)throw Error('Download benötigt festgelegten Commit: '+s.id);
  actions.push({id:s.id,action:'neu klonen',path:s.absolutePath,ref:s.ref});
 }
 if(apply)for(const s of m.systems.filter(s=>!fs.existsSync(s.absolutePath))){
  fs.mkdirSync(path.dirname(s.absolutePath),{recursive:true});
  execFileSync('git',['clone','--no-checkout','--',s.repository,s.absolutePath],{stdio:'inherit'});
  git(s.absolutePath,['checkout','--detach',s.ref]);
 }
 return actions;
}
export function freePort(port){return new Promise((resolve,reject)=>{const server=net.createServer();server.once('error',()=>reject(Error('Port bereits belegt: '+port)));server.listen(port,'127.0.0.1',()=>server.close(resolve));});}
export async function ready(s,child,timeoutMs){
 const deadline=Date.now()+timeoutMs;
 while(Date.now()<deadline){
  if(child.exitCode!==null||child.signalCode!==null)throw Error('Prozess vorzeitig beendet: '+s.id);
  try{const response=await fetch('http://127.0.0.1:'+s.port+s.healthPath,{signal:AbortSignal.timeout(1000)});if(response.ok&&(await response.json()).systemId===s.id)return;}catch{}
  await sleep(200);
 }
 throw Error('Bereitschaft nicht erreicht: '+s.id);
}
export async function start(m,{signal,timeoutMs=60000}={}){
 verifyCheckouts(m);
 for(const s of m.systems)await freePort(s.port);
 const children=[],logdir=path.join(m.base,'.local/logs');fs.mkdirSync(logdir,{recursive:true});
 const stop=()=>{
  for(const c of children)if(c.exitCode===null&&c.signalCode===null){
   if(process.platform==='win32'){try{execFileSync('taskkill',['/PID',String(c.pid),'/T','/F'],{stdio:'ignore'});}catch{}}
   else {try{process.kill(-c.pid,'SIGTERM');}catch{}}
  }
 };
 const aborted=()=>{stop();};
 signal?.addEventListener('abort',aborted,{once:true});
 try{
  for(const s of m.systems){
   if(signal?.aborted)throw Error('Start abgebrochen');
   const fd=fs.openSync(path.join(logdir,s.id+'.log'),'a');
   const child=spawn(s.start[0],s.start.slice(1),{cwd:s.absolutePath,env:{...process.env,...s.env,PORT:String(s.port)},shell:false,windowsHide:true,detached:process.platform!=='win32',stdio:['ignore',fd,fd]});
   fs.closeSync(fd);children.push(child);
   let spawnError;child.on('error',e=>{spawnError=e;});
   await ready(s,child,timeoutMs);
   if(spawnError)throw spawnError;
   console.log('Bereit: '+s.id+' http://127.0.0.1:'+s.port);
  }
  return {stop,children};
 }catch(e){stop();signal?.removeEventListener('abort',aborted);throw e;}
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 const [action='check',file='solution.json',flag]=process.argv.slice(2),m=loadManifest(file);
 if(action==='prepare')console.log(JSON.stringify(prepare(m,{apply:flag==='--apply'}),null,2));
 else if(action==='check'){verifyCheckouts(m);console.log('Manifest und Checkouts gültig.');}
 else if(action==='start'){
  const controller=new AbortController();process.on('SIGINT',()=>controller.abort());process.on('SIGTERM',()=>controller.abort());
  const running=await start(m,{signal:controller.signal});
  console.log('Alle Systeme bereit. Mit Strg+C nur die hier gestarteten Prozesse beenden.');
  if(!controller.signal.aborted)await Promise.race([new Promise(r=>controller.signal.addEventListener('abort',r,{once:true})),...running.children.map(c=>new Promise(r=>c.exitCode!==null||c.signalCode!==null?r():c.once('exit',r)))]);
  if(!controller.signal.aborted)process.exitCode=1;
  running.stop();
 }else throw Error('Aktionen: check, prepare [--apply], start');
}
