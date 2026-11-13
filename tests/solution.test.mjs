import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';import os from 'node:os';import path from 'node:path';import net from 'node:net';import {loadManifest,start,prepare,freePort} from '../tools/solution.mjs';
async function port(){return new Promise(r=>{const s=net.createServer();s.listen(0,'127.0.0.1',()=>{const n=s.address().port;s.close(()=>r(n));});});}
function fixture(systems){
 const base=fs.mkdtempSync(path.join(os.tmpdir(),'prdig-e2e-')),file=path.join(base,'solution.json');
 for(const s of systems){const d=path.join(base,s.id);fs.mkdirSync(d);fs.writeFileSync(path.join(d,'server.mjs'),'import http from "node:http";http.createServer((q,r)=>{r.setHeader("Content-Type","application/json");r.end(JSON.stringify({systemId:process.env.IDENTITY}));}).listen(Number(process.env.PORT),"127.0.0.1");');}
 const body={schemaVersion:1,mode:'development',systems:systems.map(s=>({path:s.id,ref:null,start:[process.execPath,'server.mjs'],healthPath:'/health',env:{IDENTITY:s.id},...s}))};
 fs.writeFileSync(file,JSON.stringify(body));return {base,file,body,save(){fs.writeFileSync(file,JSON.stringify(body));}};
}
test('Doppelte Ports und zyklische Abhängigkeiten werden vor Start abgewiesen',()=>{
 const f=fixture([{id:'one',port:3211},{id:'two',port:3211}]);assert.throws(()=>loadManifest(f.file),/Port/);
 f.body.systems[1].port=3212;f.body.systems[0].dependsOn=['two'];f.body.systems[1].dependsOn=['one'];f.save();assert.throws(()=>loadManifest(f.file),/Abhängigkeit/);
});
test('Verbund startet mit Identitätsprüfung; Stop gibt beide Ports frei',async()=>{
 const p1=await port(),p2=await port();const f=fixture([{id:'one',port:p1},{id:'two',port:p2,dependsOn:['one']}]);
 const r=await start(loadManifest(f.file),{timeoutMs:5000});
 try{assert.equal((await(await fetch('http://127.0.0.1:'+p2+'/health')).json()).systemId,'two');}finally{r.stop();}
 await new Promise(r=>setTimeout(r,350));await freePort(p1);await freePort(p2);
});
test('Falsche Systemidentität scheitert und beendet den gestarteten Prozess',async()=>{
 const p=await port(),f=fixture([{id:'one',port:p,env:{IDENTITY:'falsch'}}]);
 await assert.rejects(start(loadManifest(f.file),{timeoutMs:800}),/Bereitschaft/);
 await new Promise(r=>setTimeout(r,300));await freePort(p);
});
test('Belegter Port wird nicht übernommen oder beendet',async()=>{
 const server=net.createServer();await new Promise(r=>server.listen(0,'127.0.0.1',r));const p=server.address().port;
 try{const f=fixture([{id:'one',port:p}]);await assert.rejects(start(loadManifest(f.file)),/belegt/);assert.equal(server.listening,true);}finally{server.close();}
});
test('Downloadvorschau verändert vorhandene Arbeit nicht; Release verlangt konkrete Stände',()=>{
 const f=fixture([{id:'one',port:3217}]);const sentinel=path.join(f.base,'one','eigene-arbeit.txt');fs.writeFileSync(sentinel,'Behalten');
 assert.equal(prepare(loadManifest(f.file))[0].action,'vorhandenen Checkout erhalten');assert.equal(fs.readFileSync(sentinel,'utf8'),'Behalten');
 f.body.mode='release';f.save();assert.throws(()=>loadManifest(f.file),/Commits/);
});
