"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{7324:(C,m,r)=>{r.d(m,{c:()=>o});var u=r(661),i=r(7864),d=r(1898);const o=(s,n)=>{let e,t;const a=(g,w,p)=>{if(typeof document>"u")return;const E=document.elementFromPoint(g,w);E&&n(E)?E!==e&&(v(),c(E,p)):v()},c=(g,w)=>{e=g,t||(t=e);const p=e;(0,u.w)(()=>p.classList.add("ion-activated")),w()},v=(g=!1)=>{if(!e)return;const w=e;(0,u.w)(()=>w.classList.remove("ion-activated")),g&&t!==e&&e.click(),e=void 0};return(0,d.createGesture)({el:s,gestureName:"buttonActiveDrag",threshold:0,onStart:g=>a(g.currentX,g.currentY,i.a),onMove:g=>a(g.currentX,g.currentY,i.b),onEnd:()=>{v(!0),(0,i.h)(),t=void 0}})}},2225:(C,m,r)=>{r.d(m,{g:()=>u});const u=(n,e,t,a,c)=>d(n[1],e[1],t[1],a[1],c).map(v=>i(n[0],e[0],t[0],a[0],v)),i=(n,e,t,a,c)=>c*(3*e*Math.pow(c-1,2)+c*(-3*t*c+3*t+a*c))-n*Math.pow(c-1,3),d=(n,e,t,a,c)=>s((a-=c)-3*(t-=c)+3*(e-=c)-(n-=c),3*t-6*e+3*n,3*e-3*n,n).filter(g=>g>=0&&g<=1),s=(n,e,t,a)=>{if(0===n)return((n,e,t)=>{const a=e*e-4*n*t;return a<0?[]:[(-e+Math.sqrt(a))/(2*n),(-e-Math.sqrt(a))/(2*n)]})(e,t,a);const c=(3*(t/=n)-(e/=n)*e)/3,v=(2*e*e*e-9*e*t+27*(a/=n))/27;if(0===c)return[Math.pow(-v,1/3)];if(0===v)return[Math.sqrt(-c),-Math.sqrt(-c)];const g=Math.pow(v/2,2)+Math.pow(c/3,3);if(0===g)return[Math.pow(v/2,.5)-e/3];if(g>0)return[Math.pow(-v/2+Math.sqrt(g),1/3)-Math.pow(v/2+Math.sqrt(g),1/3)-e/3];const w=Math.sqrt(Math.pow(-c/3,3)),p=Math.acos(-v/(2*Math.sqrt(Math.pow(-c/3,3)))),E=2*Math.pow(w,1/3);return[E*Math.cos(p/3)-e/3,E*Math.cos((p+2*Math.PI)/3)-e/3,E*Math.cos((p+4*Math.PI)/3)-e/3]}},5062:(C,m,r)=>{r.d(m,{i:()=>u});const u=i=>i&&""!==i.dir?"rtl"===i.dir.toLowerCase():"rtl"===document?.dir.toLowerCase()},5321:(C,m,r)=>{r.r(m),r.d(m,{startFocusVisible:()=>o});const u="ion-focused",d=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],o=s=>{let n=[],e=!0;const t=s?s.shadowRoot:document,a=s||document.body,c=y=>{n.forEach(h=>h.classList.remove(u)),y.forEach(h=>h.classList.add(u)),n=y},v=()=>{e=!1,c([])},g=y=>{e=d.includes(y.key),e||c([])},w=y=>{if(e&&void 0!==y.composedPath){const h=y.composedPath().filter(_=>!!_.classList&&_.classList.contains("ion-focusable"));c(h)}},p=()=>{t.activeElement===a&&c([])};return t.addEventListener("keydown",g),t.addEventListener("focusin",w),t.addEventListener("focusout",p),t.addEventListener("touchstart",v,{passive:!0}),t.addEventListener("mousedown",v),{destroy:()=>{t.removeEventListener("keydown",g),t.removeEventListener("focusin",w),t.removeEventListener("focusout",p),t.removeEventListener("touchstart",v),t.removeEventListener("mousedown",v)},setFocus:c}}},6555:(C,m,r)=>{r.d(m,{c:()=>i});var u=r(6655);const i=n=>{const e=n;let t;return{hasLegacyControl:()=>{if(void 0===t){const c=void 0!==e.label||d(e),v=e.hasAttribute("aria-label")||e.hasAttribute("aria-labelledby")&&null===e.shadowRoot,g=(0,u.h)(e);t=!0===e.legacy||!c&&!v&&null!==g}return t}}},d=n=>null!==n.shadowRoot&&!!(o.includes(n.tagName)&&null!==n.querySelector('[slot="label"]')||s.includes(n.tagName)&&""!==n.textContent),o=["ION-RANGE"],s=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},7864:(C,m,r)=>{r.d(m,{a:()=>o,b:()=>s,c:()=>d,d:()=>e,h:()=>n});const u={getEngine(){var t;const a=window;return a.TapticEngine||(null===(t=a.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&a.Capacitor.Plugins.Haptics},available(){var t;const a=window;return!!this.getEngine()&&("web"!==(null===(t=a.Capacitor)||void 0===t?void 0:t.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const a=this.getEngine();if(!a)return;const c=this.isCapacitor()?t.style.toUpperCase():t.style;a.impact({style:c})},notification(t){const a=this.getEngine();if(!a)return;const c=this.isCapacitor()?t.style.toUpperCase():t.style;a.notification({style:c})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},i=()=>u.available(),d=()=>{i()&&u.selection()},o=()=>{i()&&u.selectionStart()},s=()=>{i()&&u.selectionChanged()},n=()=>{i()&&u.selectionEnd()},e=t=>{i()&&u.impact(t)}},7366:(C,m,r)=>{r.d(m,{a:()=>u,b:()=>w,c:()=>e,d:()=>p,e:()=>D,f:()=>n,g:()=>E,h:()=>d,i:()=>i,j:()=>M,k:()=>l,l:()=>t,m:()=>v,n:()=>y,o:()=>c,p:()=>s,q:()=>o,r:()=>f,s:()=>O,t:()=>g,u:()=>h,v:()=>_,w:()=>a});const u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},4862:(C,m,r)=>{r.d(m,{I:()=>n,a:()=>c,b:()=>s,c:()=>w,d:()=>E,f:()=>v,g:()=>a,i:()=>t,p:()=>p,r:()=>y,s:()=>g});var u=r(5861),i=r(6655),d=r(1178);const s="ion-content",n=".ion-content-scroll-host",e=`${s}, ${n}`,t=h=>"ION-CONTENT"===h.tagName,a=function(){var h=(0,u.Z)(function*(_){return t(_)?(yield new Promise(f=>(0,i.c)(_,f)),_.getScrollElement()):_});return function(f){return h.apply(this,arguments)}}(),c=h=>h.querySelector(n)||h.querySelector(e),v=h=>h.closest(e),g=(h,_)=>t(h)?h.scrollToTop(_):Promise.resolve(h.scrollTo({top:0,left:0,behavior:_>0?"smooth":"auto"})),w=(h,_,f,M)=>t(h)?h.scrollByPoint(_,f,M):Promise.resolve(h.scrollBy({top:f,left:_,behavior:M>0?"smooth":"auto"})),p=h=>(0,d.b)(h,s),E=h=>{if(t(h)){const f=h.scrollY;return h.scrollY=!1,f}return h.style.setProperty("overflow","hidden"),!0},y=(h,_)=>{t(h)?h.scrollY=_:h.style.removeProperty("overflow")}},9240:(C,m,r)=>{r.d(m,{g:()=>i});var u=r(1178);const i=(o,s,n)=>{const e=null==o?0:o.toString().length,t=d(e,s);if(void 0===n)return t;try{return n(e,s)}catch(a){return(0,u.a)("Exception in provided `counterFormatter`.",a),t}},d=(o,s)=>`${o} / ${s}`},5699:(C,m,r)=>{r.r(m),r.d(m,{KEYBOARD_DID_CLOSE:()=>o,KEYBOARD_DID_OPEN:()=>d,copyVisualViewport:()=>M,keyboardDidClose:()=>y,keyboardDidOpen:()=>p,keyboardDidResize:()=>E,resetKeyboardAssist:()=>a,setKeyboardClose:()=>w,setKeyboardOpen:()=>g,startKeyboardAssist:()=>c,trackViewportChanges:()=>f});var u=r(4963);r(4110);const d="ionKeyboardDidShow",o="ionKeyboardDidHide";let n={},e={},t=!1;const a=()=>{n={},e={},t=!1},c=l=>{if(void 0!==u.K.getEngine())v(l);else{if(!l.visualViewport)return;e=M(l.visualViewport),l.visualViewport.onresize=()=>{f(l),p()||E(l)?g(l):y(l)&&w(l)}}},v=l=>{l.addEventListener("keyboardDidShow",O=>g(l,O)),l.addEventListener("keyboardDidHide",()=>w(l))},g=(l,O)=>{h(l,O),t=!0},w=l=>{_(l),t=!1},p=()=>!t&&n.width===e.width&&(n.height-e.height)*e.scale>150,E=l=>t&&!y(l),y=l=>t&&e.height===l.innerHeight,h=(l,O)=>{const L=new CustomEvent(d,{detail:{keyboardHeight:O?O.keyboardHeight:l.innerHeight-e.height}});l.dispatchEvent(L)},_=l=>{const O=new CustomEvent(o);l.dispatchEvent(O)},f=l=>{n=Object.assign({},e),e=M(l.visualViewport)},M=l=>({width:Math.round(l.width),height:Math.round(l.height),offsetTop:l.offsetTop,offsetLeft:l.offsetLeft,pageTop:l.pageTop,pageLeft:l.pageLeft,scale:l.scale})},4963:(C,m,r)=>{r.d(m,{K:()=>d,a:()=>i});var u=r(4110),i=(()=>((i=i||{}).Body="body",i.Ionic="ionic",i.Native="native",i.None="none",i))();const d={getEngine(){var o;return(null===(o=null==u.w?void 0:u.w.Capacitor)||void 0===o?void 0:o.isPluginAvailable("Keyboard"))&&(null==u.w?void 0:u.w.Capacitor.Plugins.Keyboard)},getResizeMode(){const o=this.getEngine();return o?.getResizeMode?o.getResizeMode().catch(s=>{if("UNIMPLEMENTED"!==s.code)throw s}):Promise.resolve(void 0)}}},2952:(C,m,r)=>{r.d(m,{c:()=>n});var u=r(5861),i=r(4110),d=r(4963);const o=e=>void 0===i.d||e===d.a.None||void 0===e?null:i.d.querySelector("ion-app")??i.d.body,s=e=>{const t=o(e);return null===t?0:t.clientHeight},n=function(){var e=(0,u.Z)(function*(t){let a,c,v,g;const w=function(){var _=(0,u.Z)(function*(){const f=yield d.K.getResizeMode(),M=void 0===f?void 0:f.mode;a=()=>{void 0===g&&(g=s(M)),v=!0,p(v,M)},c=()=>{v=!1,p(v,M)},null==i.w||i.w.addEventListener("keyboardWillShow",a),null==i.w||i.w.addEventListener("keyboardWillHide",c)});return function(){return _.apply(this,arguments)}}(),p=(_,f)=>{t&&t(_,E(f))},E=_=>{if(0===g||g===s(_))return;const f=o(_);return null!==f?new Promise(M=>{const O=new ResizeObserver(()=>{f.clientHeight===g&&(O.disconnect(),M())});O.observe(f)}):void 0};return yield w(),{init:w,destroy:()=>{null==i.w||i.w.removeEventListener("keyboardWillShow",a),null==i.w||i.w.removeEventListener("keyboardWillHide",c),a=c=void 0},isKeyboardVisible:()=>v}});return function(a){return e.apply(this,arguments)}}()},6690:(C,m,r)=>{r.d(m,{S:()=>i});const i={bubbles:{dur:1e3,circles:9,fn:(d,o,s)=>{const n=d*o/s-d+"ms",e=2*Math.PI*o/s;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(d,o,s)=>{const n=o/s,e=d*n-d+"ms",t=2*Math.PI*n;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(d,o)=>({r:6,style:{left:32-32*o+"%","animation-delay":-110*o+"ms"}})},lines:{dur:1e3,lines:8,fn:(d,o,s)=>({y1:14,y2:26,style:{transform:`rotate(${360/s*o+(o<s/2?180:-180)}deg)`,"animation-delay":d*o/s-d+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(d,o,s)=>({y1:12,y2:20,style:{transform:`rotate(${360/s*o+(o<s/2?180:-180)}deg)`,"animation-delay":d*o/s-d+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(d,o,s)=>({y1:17,y2:29,style:{transform:`rotate(${30*o+(o<6?180:-180)}deg)`,"animation-delay":d*o/s-d+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(d,o,s)=>({y1:12,y2:20,style:{transform:`rotate(${30*o+(o<6?180:-180)}deg)`,"animation-delay":d*o/s-d+"ms"}})}}},4805:(C,m,r)=>{r.r(m),r.d(m,{createSwipeBackGesture:()=>s});var u=r(6655),i=r(5062),d=r(1898);r(4349);const s=(n,e,t,a,c)=>{const v=n.ownerDocument.defaultView;let g=(0,i.i)(n);const p=f=>g?-f.deltaX:f.deltaX;return(0,d.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:f=>(g=(0,i.i)(n),(f=>{const{startX:l}=f;return g?l>=v.innerWidth-50:l<=50})(f)&&e()),onStart:t,onMove:f=>{const l=p(f)/v.innerWidth;a(l)},onEnd:f=>{const M=p(f),l=v.innerWidth,O=M/l,D=(f=>g?-f.velocityX:f.velocityX)(f),S=D>=0&&(D>.2||M>l/2),b=(S?1-O:O)*l;let x=0;if(b>5){const P=b/Math.abs(D);x=Math.min(P,540)}c(S,O<=0?.01:(0,u.l)(0,O,.9999),x)}})}},9467:(C,m,r)=>{r.d(m,{w:()=>u});const u=(o,s,n)=>{if(typeof MutationObserver>"u")return;const e=new MutationObserver(t=>{n(i(t,s))});return e.observe(o,{childList:!0,subtree:!0}),e},i=(o,s)=>{let n;return o.forEach(e=>{for(let t=0;t<e.addedNodes.length;t++)n=d(e.addedNodes[t],s)||n}),n},d=(o,s)=>1!==o.nodeType?void 0:(o.tagName===s.toUpperCase()?[o]:Array.from(o.querySelectorAll(s))).find(e=>e.value===o.value)},581:(C,m,r)=>{r.d(m,{e:()=>s});var u=r(4755),i=r(5030),d=r(712),o=r(3020);let s=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[u.ez,i.u5,d.Pc]}),n})()},368:(C,m,r)=>{r.d(m,{p:()=>d});var u=r(5861),i=r(3020);let d=(()=>{class o{constructor(){}getAllData(){return(0,u.Z)(function*(){const n=localStorage.getItem("data");return n?JSON.parse(n):[]})()}getDataById(n){return(0,u.Z)(function*(){const e=localStorage.getItem("data");e||localStorage.setItem("data",JSON.stringify([]));const t=JSON.parse(e),a=t.findIndex(c=>c.id===n);return-1!==a?t[a]:null})()}addData(n){return(0,u.Z)(function*(){const e=localStorage.getItem("data")??"[]",t=JSON.parse(e);t.push(n),localStorage.setItem("data",JSON.stringify(t))})()}updateData(n,e){return(0,u.Z)(function*(){const t=localStorage.getItem("data");t||localStorage.setItem("data",JSON.stringify([]));const a=JSON.parse(t),c=a.findIndex(v=>v.id===n);return c?(a[c]=e,localStorage.setItem("data",JSON.stringify(a)),a[c]):null})()}deleteData(n){return(0,u.Z)(function*(){const e=localStorage.getItem("data");e||localStorage.setItem("data",JSON.stringify([]));const t=JSON.parse(e),a=t.findIndex(c=>c.id===n);return a?(t.splice(a,1),localStorage.setItem("data",JSON.stringify(t)),!0):null})()}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275prov=i.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()}}]);