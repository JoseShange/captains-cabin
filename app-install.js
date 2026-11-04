/* "Download the app" buttons for the website, the table-QR menu and the loyalty card.
   Any element with data-install becomes the button. Android (Chrome, Edge, Samsung):
   one tap opens the phone's own install prompt. iPhone/iPad: Apple doesn't allow websites to
   install themselves, so the button opens a short Share > Add to Home Screen guide.
   Inside Instagram/Facebook/WhatsApp's own browsers nothing can install, so it says to open
   the page in Chrome or Safari. Already opened from the home-screen icon: buttons hide. */
(function () {
  var ua = navigator.userAgent || "";
  var standalone = (window.matchMedia && matchMedia("(display-mode: standalone)").matches) || navigator.standalone === true;
  var ios = /iPhone|iPad|iPod/i.test(ua) || (/Macintosh/i.test(ua) && navigator.maxTouchPoints > 1);
  var inApp = /FBAN|FBAV|FB_IAB|Instagram|Line\/|Snapchat|TikTok|WhatsApp|; wv\)/i.test(ua);
  var deferred = null;

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () { navigator.serviceWorker.register("/sw.js").catch(function () {}); });
  }

  window.addEventListener("beforeinstallprompt", function (e) { e.preventDefault(); deferred = e; });
  window.addEventListener("appinstalled", function () { deferred = null; hideAll(); });

  function hideAll() { document.querySelectorAll("[data-install]").forEach(function (b) { b.hidden = true; b.style.display = "none"; }); }

  var css =
    ".cc-sheet{position:fixed;inset:0;z-index:9999;display:flex;align-items:flex-end;justify-content:center;background:rgba(0,0,0,.6)}" +
    ".cc-sheet .in{width:100%;max-width:480px;background:#0b0d10;color:#f4efe6;border-top:3px solid #e3121b;padding:22px 20px calc(22px + env(safe-area-inset-bottom));font:16px/1.5 Barlow,system-ui,sans-serif}" +
    ".cc-sheet h2{margin:0 0 4px;font:400 1.6rem/1.1 Anton,Impact,sans-serif;letter-spacing:.03em;text-transform:uppercase}" +
    ".cc-sheet p{margin:0 0 12px;color:#cfc8bc}" +
    ".cc-sheet ol{margin:0 0 16px;padding:0;list-style:none;counter-reset:s}" +
    ".cc-sheet li{counter-increment:s;display:flex;gap:12px;align-items:center;padding:9px 0;border-bottom:1px solid rgba(244,239,230,.12)}" +
    ".cc-sheet li:before{content:counter(s);flex:none;width:28px;height:28px;display:grid;place-items:center;border-radius:50%;background:#e3121b;color:#fff;font-weight:700}" +
    ".cc-sheet svg{width:22px;height:22px;vertical-align:-5px;fill:none;stroke:#5fb4d3;stroke-width:2}" +
    ".cc-sheet button{width:100%;padding:13px;border:1.5px solid #f4efe6;border-radius:2px;background:transparent;color:#f4efe6;font:700 .95rem 'Barlow Condensed',system-ui;letter-spacing:.14em;text-transform:uppercase}";
  var SHARE = '<svg viewBox="0 0 24 24" aria-label="Share"><path d="M12 3v12M7.5 7.5L12 3l4.5 4.5"/><path d="M5 11v9h14v-9"/></svg>';
  var PLUS = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M12 8v8M8 12h8"/></svg>';
  var DOTS = '<svg viewBox="0 0 24 24" aria-label="menu"><circle cx="12" cy="5" r="1.4" fill="#5fb4d3"/><circle cx="12" cy="12" r="1.4" fill="#5fb4d3"/><circle cx="12" cy="19" r="1.4" fill="#5fb4d3"/></svg>';

  function sheet(title, intro, steps) {
    if (!document.getElementById("cc-sheet-css")) { var s = document.createElement("style"); s.id = "cc-sheet-css"; s.textContent = css; document.head.appendChild(s); }
    var d = document.createElement("div"); d.className = "cc-sheet"; d.setAttribute("role", "dialog"); d.setAttribute("aria-modal", "true");
    d.innerHTML = '<div class="in"><h2>' + title + "</h2><p>" + intro + "</p><ol>" +
      steps.map(function (x) { return "<li><span>" + x + "</span></li>"; }).join("") + '</ol><button type="button">Got it</button></div>';
    d.addEventListener("click", function (e) { if (e.target === d || e.target.tagName === "BUTTON") d.remove(); });
    document.body.appendChild(d);
  }

  function install() {
    if (inApp) return sheet("Open in your browser", "This app is open inside another app, which can't install it.",
      [ios ? "Tap " + DOTS + " or the share button, then <b>Open in Safari</b>" : "Tap " + DOTS + " at the top, then <b>Open in Chrome</b>",
       "Tap <b>Download the app</b> again"]);
    if (deferred) { deferred.prompt(); deferred.userChoice.finally(function () { deferred = null; }); return; }
    if (ios) return sheet("Add to your iPhone", "Two taps puts the Captain&rsquo;s Cabin icon on your home screen.",
      ["Tap the Share button " + SHARE + " at the bottom (or top) of the screen",
       "Scroll down and tap <b>Add to Home Screen</b> " + PLUS,
       "Tap <b>Add</b>, then open the new icon and sign in once with your email and PIN"]);
    sheet("Add to your phone", "Use your browser&rsquo;s menu to add the Captain&rsquo;s Cabin icon.",
      ["Tap " + DOTS + " (top right in Chrome, bottom in Samsung Internet)",
       "Tap <b>Install app</b> or <b>Add to Home screen</b>",
       "Tap <b>Install</b> or <b>Add</b>"]);
  }

  function wire() {
    if (standalone) return hideAll();
    document.querySelectorAll("[data-install]").forEach(function (b) {
      if (b.__cc) return; b.__cc = true;
      b.addEventListener("click", function (e) { e.preventDefault(); install(); });
    });
  }
  window.ccInstallWire = wire; // the card page redraws itself, so it calls this again
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", wire); else wire();
})();
