/* v3 26 Nov 2026: zoomed table seat picker */
/* Captain's Cabin floor plan for function seating (shared by /navy and /navy/staff).
   Table shapes come from the booking floor plan (/book, Jose's walk-through Nov 2026).
   For functions the upper-deck open seating is split into six set-up tables, U5-U10. */
(function(){
  'use strict';
  var AREAS = {
    restaurant:{ name:'Restaurant', vb:'0 0 360 470', draw:
      '<rect class="wall" x="10" y="10" width="340" height="450" rx="6"/>'+
      '<rect class="feature" x="16" y="16" width="86" height="26" rx="3"/><text class="ftxt" x="59" y="33" text-anchor="middle">Kids play</text>'+
      '<rect class="feature" x="130" y="16" width="100" height="26" rx="3"/><text class="ftxt" x="180" y="33" text-anchor="middle">Fireplace</text>'+
      '<rect class="door" x="10" y="212" width="16" height="44" rx="2"/><text class="ftxt" x="32" y="238">Door · deck</text>'+
      '<rect class="feature" x="334" y="56" width="10" height="330" rx="2"/><text class="ftxt" x="326" y="220" transform="rotate(90 326 220)" text-anchor="middle">Bar windows</text>'+
      '<rect class="feature" x="16" y="388" width="130" height="62" rx="4"/><text class="ftxt" x="81" y="423" text-anchor="middle">Sushi bar</text>',
      tables:[
        {id:'3',x:44,y:62,w:100,h:58},{id:'2',x:44,y:136,w:76,h:56},{id:'1',x:44,y:272,w:100,h:58},
        {id:'4',x:226,y:62,w:80,h:54},{id:'5',x:226,y:124,w:80,h:54},{id:'6',x:226,y:216,w:80,h:54},{id:'7',x:226,y:278,w:80,h:54}]},
    deck:{ name:'Front deck', vb:'0 0 360 600', draw:
      '<rect class="sea" x="326" y="0" width="34" height="600"/>'+
      '<text class="seatxt" x="343" y="420" transform="rotate(90 343 420)" text-anchor="middle">SALDANHA BAY · RAILING</text>'+
      '<path class="wall" d="M324 64 H10 V592 H324"/>'+
      '<rect class="door" x="4" y="204" width="14" height="78" rx="2"/><text class="ftxt" x="26" y="246">Door · restaurant</text>'+
      '<rect class="door" x="318" y="194" width="14" height="90" rx="2"/><text class="ftxt" x="310" y="243" text-anchor="end">Front door</text>',
      tables:[
        {id:'26',x:30,y:76,w:48,h:62},{id:'25',x:30,y:148,w:50,h:54},{id:'13',x:194,y:84,w:118,h:36},
        {id:'14',x:288,y:132,w:30,h:56},{id:'24',x:24,y:290,w:120,h:50},{id:'23',x:24,y:346,w:120,h:48},
        {id:'22',x:24,y:408,w:120,h:48},{id:'21',x:24,y:466,w:124,h:38},{id:'20',x:24,y:514,w:120,h:58},
        {id:'15',x:212,y:304,w:106,h:42},{id:'16',x:208,y:358,w:110,h:44},{id:'17',x:208,y:416,w:110,h:46},
        {id:'18',x:276,y:474,w:42,h:34},{id:'19',x:200,y:518,w:118,h:52}]},
    upper:{ name:'Upper deck', vb:'0 0 360 440', draw:
      '<rect class="sea" x="10" y="0" width="340" height="30"/>'+
      '<text class="seatxt" x="180" y="20" text-anchor="middle">OCEAN · GLASS RAILING</text>'+
      '<path class="wall" d="M10 32 V430 H350 V32"/>'+
      '<path class="zone" d="M22 104 H330 V186 H160 V418 H22 Z"/>'+
      '<text class="ftxt" x="92" y="412" text-anchor="middle">Open seating</text>'+
      '<rect class="door" x="344" y="100" width="12" height="70" rx="2"/><text class="ftxt" x="338" y="135" transform="rotate(90 338 135)" text-anchor="middle">Stairs</text>',
      tables:[
        {id:'U1',x:22,y:40,w:70,h:56},{id:'U2',x:104,y:40,w:70,h:56},{id:'U3',x:186,y:40,w:70,h:56},{id:'U4',x:268,y:40,w:70,h:56},
        {id:'U5',x:32,y:114,w:84,h:62},{id:'U6',x:132,y:114,w:84,h:62},{id:'U7',x:232,y:114,w:84,h:62},
        {id:'U8',x:40,y:198,w:100,h:56},{id:'U9',x:40,y:268,w:100,h:56},{id:'U10',x:40,y:338,w:100,h:56},
        {id:'TIKI',x:176,y:204,w:160,h:210,label:'Tiki-Bar',row:true}]},
    bar:{ name:'Bar', vb:'0 0 360 400', draw:
      '<rect class="wall" x="10" y="10" width="340" height="380" rx="6"/>'+
      '<path class="feature" d="M16 16 H344 V48 H48 V172 H16 Z"/><text class="ftxt" x="196" y="36" text-anchor="middle">Bar counter</text>'+
      '<rect class="feature" x="334" y="206" width="10" height="130" rx="2"/><text class="ftxt" x="326" y="290" transform="rotate(90 326 290)" text-anchor="middle">Window · restaurant</text>'+
      '<circle cx="324" cy="180" r="20" class="feature"/><text class="ftxt" x="324" y="184" text-anchor="middle">Wheel</text>'+
      '<rect class="feature" x="16" y="346" width="110" height="34" rx="3"/><text class="ftxt" x="71" y="367" text-anchor="middle">Captain mural</text>',
      tables:[
        {id:'B1',x:22,y:186,w:66,h:62},{id:'R1',x:196,y:146,w:56,h:56,round:true},{id:'B2',x:20,y:272,w:66,h:62},
        {id:'R2',x:96,y:276,w:54,h:54,round:true},{id:'Q',x:164,y:272,w:66,h:62}]},
    conf:{ name:'Conference room', vb:'0 0 360 300', draw:
      '<rect class="sea" x="70" y="0" width="220" height="26"/>'+
      '<text class="seatxt" x="180" y="17" text-anchor="middle">SLIDING DOOR · BAY VIEW</text>'+
      '<rect class="wall" x="10" y="28" width="340" height="262" rx="6"/>'+
      '<rect class="feature" x="320" y="110" width="12" height="90" rx="2"/><text class="ftxt" x="314" y="155" transform="rotate(90 314 155)" text-anchor="middle">TV screen</text>',
      tables:[{id:'CONF',x:70,y:110,w:200,h:90,label:'Conference'}]}
  };
  var ORDER=['restaurant','deck','upper','bar','conf'];

  // Seat dots sit just inside the table edge, numbered clockwise from the top-left.
  function seatPos(t,n){
    var out=[], i, r=7;
    if(t.round){
      var cx=t.x+t.w/2, cy=t.y+t.h/2, R=t.w/2-9;
      var a0=n===2?Math.PI:-Math.PI/2;
      for(i=0;i<n;i++){ var a=a0+i*2*Math.PI/n; out.push({x:cx+R*Math.cos(a),y:cy+R*Math.sin(a)}); }
      return {pts:out,r:Math.min(7,Math.PI*R/n-1),lx:cx,ly:cy+4,inside:true};
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
  function svg(areaId,opt){
    var a=AREAS[areaId], g='<defs><linearGradient id="seaG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1c5f78"/><stop offset="1" stop-color="#5DB6D8"/></linearGradient></defs>'+a.draw;
    a.tables.forEach(function(t){
      var info=opt.tables[t.id]; if(!info) return;
      var cls=opt.tableClass?opt.tableClass(t.id):'', sp=seatPos(t,info.seats), name=t.label||t.id;
      var shape=t.round?'<circle class="tb" cx="'+(t.x+t.w/2)+'" cy="'+(t.y+t.h/2)+'" r="'+(t.w/2)+'"/>':'<rect class="tb" x="'+t.x+'" y="'+t.y+'" width="'+t.w+'" height="'+t.h+'" rx="6"/>';
      var fs=sp.inside?(name.length>3?12:(t.w<60||t.h<60?14:18)):12;
      g+='<g class="t '+cls+'" data-t="'+t.id+'" role="button" aria-label="Table '+name+'">'+shape+
        '<text class="tn" x="'+sp.lx+'" y="'+sp.ly+'" text-anchor="'+(sp.anchor||'middle')+'" font-size="'+fs+'">'+name+'</text>';
      sp.pts.forEach(function(p,i){
        var s=opt.seat(t.id,i+1)||{};
        g+='<circle class="st" data-n="'+(i+1)+'" cx="'+p.x.toFixed(1)+'" cy="'+p.y.toFixed(1)+'" r="'+sp.r.toFixed(1)+'" fill="'+(s.fill||'none')+'" stroke="'+(s.stroke||'#cfd6de')+'"/>';
        if(sp.r>=6) g+='<text class="sn" x="'+p.x.toFixed(1)+'" y="'+(p.y+3).toFixed(1)+'" text-anchor="middle" fill="'+(s.text||'#cfd6de')+'">'+(i+1)+'</text>';
      });
      g+='</g>';
    });
    return g;
  }
  var CSS='.fp{width:100%;height:auto;display:block}'+
    '.fp .wall{fill:none;stroke:#4a4a58;stroke-width:3}.fp .feature{fill:#24242e;stroke:#3a3a48}'+
    '.fp .zone{fill:rgba(95,179,207,.05);stroke:#3a4a55;stroke-dasharray:6 5}'+
    '.fp .ftxt{fill:#8d8b99;font:600 10px "Barlow Condensed",sans-serif;letter-spacing:1.2px;text-transform:uppercase}'+
    '.fp .sea{fill:url(#seaG)}.fp .seatxt{fill:#cfeefa;font:600 10px "Barlow Condensed",sans-serif;letter-spacing:2px}'+
    '.fp .door{fill:#D9202A;opacity:.85}'+
    '.fp .t{cursor:pointer}.fp .tb{fill:#1d2630;stroke:#5a6776;stroke-width:2}'+
    '.fp .t.full .tb{fill:#15191e;stroke:#2c333b}.fp .t.full .tn{fill:#56606b}'+
    '.fp .t.sel .tb{stroke:#fff;stroke-width:3;fill:#2a3644}'+
    '.fp .tn{fill:#f5f1ea;font-family:Anton,Impact,sans-serif;pointer-events:none}'+
    '.fp .st{stroke-width:1.6;pointer-events:none}.fp .sn{font:700 8px Barlow,sans-serif;pointer-events:none}';
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
  CSS+='.fp.zoom .st{pointer-events:all;cursor:pointer;stroke-width:1}.fp.zoom .sn{font-size:6.5px}.fp.zoom .tb{stroke-width:1.2}'+
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
