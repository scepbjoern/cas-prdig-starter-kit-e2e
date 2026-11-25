import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';

export const hashPolicy = 'sha256-lf-text-v1';
const textExtensions = new Set(['.md','.json','.svg','.mjs','.js','.ts','.tsx','.css','.html','.yml','.yaml','.txt']);
const rawHash = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
export function canonicalBytes(file, bytes) {
  if (!textExtensions.has(path.extname(file).toLowerCase())) return bytes;
  // Strict decoding prevents silently changing binary or invalid UTF-8 data.
  const text = new TextDecoder('utf-8', {fatal:true, ignoreBOM:true}).decode(bytes);
  return Buffer.from(text.replace(/\r\n/g, '\n'), 'utf8');
}
export const courseHash = (file, bytes) => rawHash(canonicalBytes(file, bytes));
export function matchesRecorded(file, bytes, expected, policy) {
  if (!expected) return false;
  if (policy === hashPolicy) return courseHash(file, bytes) === expected;
  if (policy) throw Error('Unbekannte Hash-Regel: ' + policy);
  // Preview <=3 used raw working-tree bytes. Accept only exact LF/CRLF variants.
  const normalized = canonicalBytes(file, bytes);
  return [bytes, normalized,
    ...(textExtensions.has(path.extname(file).toLowerCase())
      ? [Buffer.from(normalized.toString('utf8').replace(/\n/g, '\r\n'))] : [])
  ].some(candidate => rawHash(candidate) === expected);
}
export function verifyCourse(target) {
  target = path.resolve(target);
  const manifest = JSON.parse(fs.readFileSync(path.join(target,'course-manifest.json'),'utf8'));
  if (manifest.hashPolicy && manifest.hashPolicy !== hashPolicy) throw Error('Unbekannte Hash-Regel');
  const mismatches = [];
  for (const [file, expected] of Object.entries(manifest.files)) {
    const resolved = path.resolve(target, file);
    if (!resolved.startsWith(target + path.sep)) throw Error('Pfad ausserhalb des Projekts: '+file);
    if (!fs.existsSync(resolved) || !matchesRecorded(file,fs.readFileSync(resolved),expected,manifest.hashPolicy))
      mismatches.push(file);
  }
  return {version:manifest.version, files:Object.keys(manifest.files).length, mismatches};
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const result = verifyCourse(process.argv[2] || '.');
  console.log(JSON.stringify(result, null, 2));
  if (result.mismatches.length) process.exitCode = 1;
}
