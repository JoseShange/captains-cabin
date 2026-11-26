/* v7 26 Nov 2026: illustrated look (wood, chairs, plank floor, waves). v6: area order deck, restaurant, bar, conference, upper deck. v5: restaurant turned (sushi bar top, bay view window), balcony, bay view labels */
/* Captain's Cabin floor plan for function seating (shared by /navy and /navy/staff).
   Table shapes come from the booking floor plan (/book, Jose's walk-through Nov 2026).
   For functions the upper-deck open seating is split into six set-up tables, U5-U10. */
(function(){
  'use strict';
  var AREAS = {
    restaurant:{ name:'Restaurant', vb:'0 0 360 470', draw:
      '<rect class="wall" x="10" y="10" width="340" height="450" rx="6"/>'+
      '<rect class="feature" x="214" y="20" width="130" height="62" rx="4"/><text class="ftxt" x="279" y="55" text-anchor="middle">Sushi bar</text>'+
      '<rect class="feature" x="16" y="84" width="10" height="330" rx="2"/><text class="ftxt" x="38" y="249" transform="rotate(90 38 249)" text-anchor="middle">Bar windows</text>'+
      '<rect class="sea" x="336" y="84" width="10" height="330" rx="2"/><text class="ftxt bayt" x="326" y="150" transform="rotate(90 326 150)" text-anchor="middle">Bay view window</text>'+
      '<rect class="door" x="334" y="214" width="16" height="44" rx="2"/><text class="ftxt" x="326" y="240" text-anchor="end">Door · deck</text>'+
      '<rect class="feature" x="258" y="428" width="86" height="26" rx="3"/><text class="ftxt" x="301" y="445" text-anchor="middle">Kids play</text>'+
      '<rect class="feature" x="130" y="428" width="100" height="26" rx="3"/><text class="ftxt" x="180" y="445" text-anchor="middle">Fireplace</text>',
      tables:[
        {id:'3',x:216,y:350,w:100,h:58},{id:'2',x:240,y:278,w:76,h:56},{id:'1',x:216,y:140,w:100,h:58},
        {id:'4',x:54,y:354,w:80,h:54},{id:'5',x:54,y:292,w:80,h:54},{id:'6',x:54,y:200,w:80,h:54},{id:'7',x:54,y:138,w:80,h:54}]},
    deck:{ name:'Front deck', vb:'0 0 360 600', draw:
      '<rect class="sea" x="326" y="0" width="34" height="600"/>'+
      '<text class="seatxt" x="343" y="420" transform="rotate(90 343 420)" text-anchor="middle">BAY VIEW</text>'+
      '<path class="wall" d="M324 64 H10 V592 H324"/>'+
      '<rect class="door" x="4" y="204" width="14" height="78" rx="2"/><text class="ftxt" x="26" y="246">Door · restaurant</text>'+
      '<rect class="door" x="318" y="194" width="14" height="90" rx="2"/><text class="ftxt" x="310" y="243" text-anchor="end">Front door</text>',
      tables:[
        {id:'26',x:30,y:76,w:48,h:62},{id:'25',x:30,y:148,w:50,h:54},{id:'13',x:194,y:84,w:118,h:36},
        {id:'14',x:288,y:132,w:30,h:56},{id:'24',x:24,y:290,w:120,h:50},{id:'23',x:24,y:346,w:120,h:48},
        {id:'22',x:24,y:408,w:120,h:48},{id:'21',x:24,y:466,w:124,h:38},{id:'20',x:24,y:514,w:120,h:58},
        {id:'15',x:212,y:304,w:106,h:42},{id:'16',x:208,y:358,w:110,h:44},{id:'17',x:208,y:416,w:110,h:46},
        {id:'18',x:276,y:474,w:42,h:34},{id:'19',x:200,y:518,w:118,h:52}]},
    upper:{ name:'Upper deck', vb:'0 0 360 346', draw:
      '<rect class="sea" x="10" y="0" width="340" height="26"/>'+
      '<text class="seatxt" x="180" y="17" text-anchor="middle">OCEAN VIEW</text>'+
      '<path class="wall" d="M10 28 H350 V198 H266 V338 H10 Z"/>'+
      '<rect class="door" x="342" y="56" width="16" height="112" rx="2"/><text class="ftxt" x="350" y="112" transform="rotate(90 350 112)" text-anchor="middle" style="fill:#fff">Door</text>',
      tables:[
        {id:'U4',x:18,y:40,w:70,h:56},{id:'U3',x:18,y:110,w:70,h:56},{id:'U2',x:18,y:194,w:70,h:56},{id:'U1',x:18,y:268,w:70,h:56},
        {id:'U8',x:116,y:38,w:70,h:62},{id:'U9',x:194,y:38,w:70,h:62},{id:'U10',x:272,y:38,w:66,h:62},
        {id:'U7',x:116,y:122,w:70,h:62},{id:'U6',x:194,y:122,w:70,h:62},{id:'U5',x:272,y:122,w:66,h:62},
        {id:'TIKI',x:150,y:206,w:110,h:126,label:'Tiki-Bar',col:true}]},
    bar:{ name:'Bar', vb:'0 0 360 556', draw:
      '<path class="wall" d="M10 10 H322 V462 H202 V546 H10 Z"/>'+
      '<path class="feature" d="M14 14 H318 V72 H84 V190 H14 Z"/><path class="glowline" d="M318 72 H84 V190"/><text class="ftxt" x="200" y="47" text-anchor="middle">Bar counter</text>'+
      '<rect class="feature" x="326" y="12" width="24" height="448" rx="2"/><text class="ftxt" x="338" y="236" transform="rotate(90 338 236)" text-anchor="middle">Window · restaurant</text>'+
      '<rect class="feature" x="288" y="200" width="30" height="112" rx="3"/><text class="ftxt" x="303" y="256" transform="rotate(90 303 256)" text-anchor="middle">Wheel</text>',
      tables:[
        {id:'R1',x:198,y:118,w:62,h:62,round:true},{id:'R3',x:194,y:240,w:62,h:62,round:true},
        {id:'B1',x:44,y:278,w:70,h:70},{id:'B2',x:40,y:380,w:70,h:64},
        {id:'R2',x:120,y:460,w:62,h:62,round:true}]},
    conf:{ name:'Conference room', vb:'0 0 360 300', draw:
      '<rect class="sea" x="70" y="0" width="220" height="22"/>'+
      '<text class="seatxt" x="180" y="15" text-anchor="middle">BAY VIEW</text>'+
      '<rect class="balc" x="70" y="24" width="220" height="24" rx="2"/>'+
      '<text class="ftxt balct" x="180" y="40" text-anchor="middle">Balcony</text>'+
      '<rect class="wall" x="10" y="50" width="340" height="240" rx="6"/>'+
      '<rect class="feature" x="320" y="110" width="12" height="90" rx="2"/><text class="ftxt" x="314" y="155" transform="rotate(90 314 155)" text-anchor="middle">TV screen</text>',
      tables:[{id:'CONF',x:70,y:110,w:200,h:90,label:'Conference'}]}
  };
  var ORDER=['deck','restaurant','bar','conf','upper'];

  // Seat dots sit just inside the table edge, numbered clockwise from the top-left.
  function seatPos(t,n){
    var out=[], i, r=7;
    if(t.round){
      var cx=t.x+t.w/2, cy=t.y+t.h/2, R=t.w/2-9;
      var a0=n===2?Math.PI:-Math.PI/2;
      for(i=0;i<n;i++){ var a=a0+i*2*Math.PI/n; out.push({x:cx+R*Math.cos(a),y:cy+R*Math.sin(a)}); }
      return {pts:out,r:Math.min(7,Math.PI*R/n-1),lx:cx,ly:cy+4,inside:true};
    }
    if(t.col){ // a bar counter with stools down its left side
      for(i=0;i<n;i++) out.push({x:t.x+15,y:t.y+t.h*(i+1)/(n+1)});
      return {pts:out,r:9,lx:t.x+t.w/2+12,ly:t.y+t.h/2+5,inside:true};
    }
    if(t.row){ // a bar counter: stools in one row along the top
      for(i=0;i<n;i++) out.push({x:t.x+t.w*(i+1)/(n+1),y:t.y+14});
      return {pts:out,r:8,lx:t.x+t.w/2,ly:t.y+t.h/2+6,inside:true};
    }
    var horiz=t.w>=t.h, long=horiz?t.w:t.h, short=horiz?t.h:t.w;
    if(short>=44){
      var ends=n>=9?1:0, sides=n-2*ends, a1=Math.ceil(sides/2), a2=sides-a1, m=10;
      function along(k,j){ return (horiz?t.x:t.y)+long*(j+1)/(k+1); }
      for(i=0;i<a1;i++) out.push(horiz?{x:along(a1,i),y:t.y+m}:{x:t.x+t.w-m,y:along(a1,i)});
      if(ends) out.push(horiz?{x:t.x+t.w-m,y:t.y+t.h/2}:{x:t.x+t.w/2,y:t.y+t.h-m});
      for(i=a2-1;i>=0;i--) out.push(horiz?{x:along(a2,i),y:t.y+t.h-m}:{x:t.x+m,y:along(a2,i)});
      if(ends) out.push(horiz?{x:t.x+m,y:t.y+t.h/2}:{x:t.x+t.w/2,y:t.y+m});
      var sp=long/(Math.max(a1,1)+1);
      return {pts:out,r:Math.min(r,sp/2-1),lx:t.x+t.w/2,ly:t.y+t.h/2+5,inside:true};
    }
    // thin table or counter: one line of seats, number shown outside
    if(horiz && long>=90){ // long thin table: number inside on the left, seats after it
      var x0=t.x+30, L=t.w-34;
      for(i=0;i<n;i++) out.push({x:x0+L*(i+0.5)/n,y:t.y+t.h/2});
      return {pts:out,r:Math.min(r,L/n/2-1),lx:t.x+15,ly:t.y+t.h/2+5,inside:true};
    }
    for(i=0;i<n;i++) out.push(horiz?{x:t.x+t.w*(i+1)/(n+1),y:t.y+t.h/2}:{x:t.x+t.w/2,y:t.y+t.h*(i+1)/(n+1)});
    var sp2=long/(n+1);
    return {pts:out,r:Math.min(r,sp2/2-1),lx:horiz?t.x+t.w/2:t.x-4,ly:horiz?t.y-5:t.y+t.h/2+4,inside:false,anchor:horiz?'middle':'end'};
  }

  /* svg(areaId, opt)
     opt.tables: {tableId: {seats}} — only these tables are drawn as usable
     opt.tableClass(id) -> extra class for the table
     opt.seat(id, n) -> {fill, stroke, text} for each seat dot
     opt.big: bigger table numbers */
  // Illustrated style (Nov 2026, from Jose's concept art): plank floor, wooden tables, chairs, wavy sea.
  var DEFS='<defs>'+
    '<pattern id="floorP" width="44" height="12" patternUnits="userSpaceOnUse"><rect width="44" height="12" fill="#1c1814"/>'+
      '<path d="M0 11.5H44M22 0V11.5" stroke="#28211b" stroke-width="1"/></pattern>'+
    '<pattern id="seaP" width="36" height="14" patternUnits="userSpaceOnUse"><rect width="36" height="14" fill="#14617c"/>'+
      '<path d="M0 9 Q9 4 18 9 T36 9" fill="none" stroke="#3fa7c9" stroke-width="1.4" opacity=".7"/>'+
      '<path d="M-9 3 Q0 -1 9 3 T27 3 T45 3" fill="none" stroke="#7fd3ec" stroke-width=".8" opacity=".45"/></pattern>'+
    '<linearGradient id="woodG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8a542a"/><stop offset=".5" stop-color="#a86a3a"/><stop offset="1" stop-color="#6a3c1c"/></linearGradient>'+
    '<radialGradient id="woodR" cx=".45" cy=".4" r=".7"><stop offset="0" stop-color="#b0743f"/><stop offset="1" stop-color="#6a3c1c"/></radialGradient>'+
    '<linearGradient id="counterG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a3029"/><stop offset="1" stop-color="#241e1a"/></linearGradient>'+
    '<filter id="tGlow" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="1.5" stdDeviation="2.2" flood-color="#ff9a3c" flood-opacity=".28"/></filter>'+
    '<filter id="sGlow" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="0" stdDeviation="2" flood-color="#fff" flood-opacity=".55"/></filter>'+
    '</defs>';
  function svg(areaId,opt){
    var a=AREAS[areaId], g=DEFS+a.draw;
    a.tables.forEach(function(t){
      var info=opt.tables[t.id]; if(!info) return;
      var cls=opt.tableClass?opt.tableClass(t.id):'', sp=seatPos(t,info.seats), name=t.label||t.id;
      var shape=t.round?'<circle class="tb rd" cx="'+(t.x+t.w/2)+'" cy="'+(t.y+t.h/2)+'" r="'+(t.w/2)+'"/>':'<rect class="tb" x="'+t.x+'" y="'+t.y+'" width="'+t.w+'" height="'+t.h+'" rx="5"/>';
      var fs=sp.inside?(name.length>3?12:(t.w<60||t.h<60?14:18)):12;
      g+='<g class="t '+cls+'" data-t="'+t.id+'" role="button" aria-label="Table '+name+'">'+shape;
      sp.pts.forEach(function(p,i){
        var s=opt.seat(t.id,i+1)||{}, r=sp.r, x=p.x-r, y=p.y-r, hl=s.fill&&s.fill!=='none'&&s.hl;
        // a chair: rounded seat with a darker backrest edge
        g+='<rect class="st'+(hl?' hl':'')+'" data-n="'+(i+1)+'" x="'+x.toFixed(1)+'" y="'+y.toFixed(1)+'" width="'+(2*r).toFixed(1)+'" height="'+(2*r).toFixed(1)+'" rx="'+(r*.45).toFixed(1)+'" fill="'+(s.fill&&s.fill!=='none'?s.fill:'#4a3324')+'" stroke="'+(s.stroke||'#c89a6a')+'"/>';
        if(r>=5.5) g+='<text class="sn" x="'+p.x.toFixed(1)+'" y="'+(p.y+r*.42).toFixed(1)+'" text-anchor="middle" font-size="'+Math.min(9,r*1.15).toFixed(1)+'" fill="'+(s.text||'#f3dcc0')+'">'+(i+1)+'</text>';
      });
      g+='<text class="tn" x="'+sp.lx+'" y="'+sp.ly+'" text-anchor="'+(sp.anchor||'middle')+'" font-size="'+fs+'">'+name+'</text></g>';
    });
    return g;
  }
  var CSS='.fp{width:100%;height:auto;display:block}'+
    '.fp .wall{fill:url(#floorP);stroke:#cdbfa9;stroke-width:3;stroke-linejoin:round}.fp .feature{fill:url(#counterG);stroke:#7a6248}'+
    '.fp .zone{fill:rgba(255,190,120,.04);stroke:#6b5a45;stroke-dasharray:6 5}'+
    '.fp .ftxt{fill:#e2cba8;font:600 10px "Barlow Condensed",sans-serif;letter-spacing:1.4px;text-transform:uppercase}'+
    '.fp .sea{fill:url(#seaP)}.fp .seatxt{fill:#eafaff;font:700 10px "Barlow Condensed",sans-serif;letter-spacing:2.4px}'+
    '.fp .door{fill:#c8202a;stroke:#ff6a6a;stroke-width:.8}.fp .balc{fill:#f4efe6;stroke:#cdbfa9}.fp .balct{fill:#3a2a1a}.fp .bayt{fill:#7fd3ec}'+
    '.fp .glowline{fill:none;stroke:#ffb15c;stroke-width:2;opacity:.75;filter:url(#tGlow)}'+
    '.fp .t{cursor:pointer}.fp .tb{fill:url(#woodG);stroke:#2b180a;stroke-width:1.4;filter:url(#tGlow)}.fp .tb.rd{fill:url(#woodR)}'+
    '.fp .t.full .tb{opacity:.4;filter:none}.fp .t.full .tn{fill:#9a8d7c}'+
    '.fp .t.sel .tb{stroke:#ffd27a;stroke-width:2.6}'+
    '.fp .tn{fill:#fff4e2;font-family:Anton,Impact,sans-serif;pointer-events:none;paint-order:stroke;stroke:#2b180a;stroke-width:2.4px;stroke-linejoin:round}'+
    '.fp .st{stroke-width:1.1;pointer-events:none}.fp .st.hl{filter:url(#sGlow);stroke-width:1.6}.fp .sn{font-family:Barlow,sans-serif;font-weight:700;pointer-events:none}';
  // viewBox that frames one table with room around it (for the zoomed seat picker)
  function frame(areaId,tableId){
    var t=AREAS[areaId].tables.filter(function(x){return x.id===tableId;})[0]; if(!t) return AREAS[areaId].vb;
    var pad=Math.max(14,Math.max(t.w,t.h)*.14), w=Math.max(t.w+2*pad,110), h=Math.max(t.h+2*pad,80);
    if(w/h>1.6) h=w/1.6; if(h/w>1.4) w=h/1.4;
    var cx=t.x+t.w/2, cy=t.y+t.h/2;
    return (cx-w/2).toFixed(1)+' '+(cy-h/2).toFixed(1)+' '+w.toFixed(1)+' '+h.toFixed(1);
  }
  /* Full-width area switcher with arrows. list = [{id, sub}] in display order. */
  function switcher(list,cur){
    var i=Math.max(0,list.map(function(x){return x.id;}).indexOf(cur)), a=list[i];
    return '<button type="button" class="asw-b" data-step="-1" aria-label="Previous area"><svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true"><path d="M15 4 7 12l8 8" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>'+
      '<div class="asw-c" aria-live="polite"><b>'+AREAS[a.id].name+'</b><small>'+(a.sub||'')+'</small>'+
      '<span class="asw-d" title="Area '+(i+1)+' of '+list.length+'">'+list.map(function(x,j){return '<i class="'+(j===i?'on':'')+'"></i>';}).join('')+'</span></div>'+
      '<button type="button" class="asw-b" data-step="1" aria-label="Next area"><svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true"><path d="M9 4l8 8-8 8" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>';
  }
  function step(list,cur,d){ var ids=list.map(function(x){return x.id;}), i=ids.indexOf(cur); return ids[(i+d+ids.length)%ids.length]; }
  // swipe left/right on an element calls fn(+1 / -1)
  function swipe(el,fn){
    var x0=null,y0=null;
    el.addEventListener('touchstart',function(e){ x0=e.touches[0].clientX; y0=e.touches[0].clientY; },{passive:true});
    el.addEventListener('touchend',function(e){ if(x0===null) return; var dx=e.changedTouches[0].clientX-x0, dy=e.changedTouches[0].clientY-y0; x0=null;
      if(Math.abs(dx)>60 && Math.abs(dx)>Math.abs(dy)*1.5) fn(dx<0?1:-1); },{passive:true});
  }
  CSS+='.fp.zoom .st{pointer-events:all;cursor:pointer;stroke-width:.8}.fp.zoom .tb{stroke-width:1}'+
    '.fp.zoom .t{cursor:default}';
  CSS+='.asw{display:grid;grid-template-columns:56px minmax(0,1fr) 56px;gap:8px;margin-top:12px;align-items:stretch}'+
    '.asw-b{display:grid;place-items:center;border:2px solid rgba(245,241,234,.35);border-radius:8px;background:#12161b;color:#f5f1ea;cursor:pointer;min-height:68px}.asw-b svg{pointer-events:none}'+
    '.asw-b:active{background:#e3121b;border-color:#e3121b}'+
    '.asw-c{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:8px;border-radius:8px;background:#e3121b;color:#fff;text-align:center}'+
    '.asw-c b{font:400 1.5rem/1.05 Anton,Impact,sans-serif;text-transform:uppercase;letter-spacing:.02em}'+
    '.asw-c small{font:600 .82rem "Barlow Condensed",sans-serif;letter-spacing:.12em;text-transform:uppercase;opacity:.9;margin-top:2px}'+
    '.asw-d{display:flex;gap:6px;margin-top:6px}.asw-d i{width:7px;height:7px;border-radius:50%;background:rgba(255,255,255,.4)}.asw-d i.on{background:#fff}';
  window.CabinFloor={AREAS:AREAS,ORDER:ORDER,svg:svg,CSS:CSS,frame:frame,switcher:switcher,step:step,swipe:swipe};
})();
