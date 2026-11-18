import http from 'node:http'; import { readFileSync, existsSync } from 'node:fs';
const html = readFileSync(new URL('./index.html', import.meta.url));
const head = { 'x-content-type-options': 'nosniff', 'referrer-policy': 'no-referrer', 'x-robots-tag': 'noindex' };
http.createServer((req, res) => {
  const m = /^\/shots\/([a-z0-9-]+\.jpg)$/.exec(req.url.split('?')[0]);
  if (m) { const f = new URL('./shots/' + m[1], import.meta.url); if (existsSync(f)) { res.writeHead(200, { ...head, 'content-type': 'image/jpeg', 'cache-control': 'public, max-age=3600' }); return res.end(readFileSync(f)); } res.writeHead(404, head); return res.end(); }
  res.writeHead(200, { ...head, 'content-type': 'text/html; charset=utf-8' }); res.end(req.method === 'HEAD' ? undefined : html);
}).listen(process.env.PORT || 8080, '0.0.0.0');
