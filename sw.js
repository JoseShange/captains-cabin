/* Captain's Cabin app: makes the site installable as a phone app.
   Nothing is cached, so customers always see today's menu, prices and points.
   With no signal, page loads show a short "you're offline" note instead of a browser error. */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", (e) => {
  if (e.request.mode !== "navigate") return;
  e.respondWith(fetch(e.request).catch(() => new Response(
    '<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1"><title>Offline</title>' +
    '<body style="margin:0;min-height:100vh;display:grid;place-items:center;background:#0b0d10;color:#f4efe6;font:16px system-ui;text-align:center;padding:24px">' +
    '<div><h1 style="font-size:22px">You\'re offline</h1><p>Captain\'s Cabin needs a connection. Check your signal and try again.</p>' +
    '<button onclick="location.reload()" style="font:600 15px system-ui;padding:12px 22px;background:#e3121b;color:#fff;border:0;border-radius:2px">Try again</button></div></body>',
    { headers: { "Content-Type": "text/html; charset=utf-8" } })));
});
