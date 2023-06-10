"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4064],{7423:(te,H,c)=>{c.d(H,{Uw:()=>u,fo:()=>A});var l=c(5861);typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"&&global;var P=(()=>((P=P||{}).Unimplemented="UNIMPLEMENTED",P.Unavailable="UNAVAILABLE",P))();class y extends Error{constructor(e,t,o){super(e),this.message=e,this.code=t,this.data=o}}const Y=n=>{var e,t,o,s,r;const d=n.CapacitorCustomPlatform||null,i=n.Capacitor||{},v=i.Plugins=i.Plugins||{},f=n.CapacitorPlatforms,k=(null===(e=f?.currentPlatform)||void 0===e?void 0:e.getPlatform)||(()=>null!==d?d.name:(n=>{var e,t;return n?.androidBridge?"android":null!==(t=null===(e=n?.webkit)||void 0===e?void 0:e.messageHandlers)&&void 0!==t&&t.bridge?"ios":"web"})(n)),le=(null===(t=f?.currentPlatform)||void 0===t?void 0:t.isNativePlatform)||(()=>"web"!==k()),de=(null===(o=f?.currentPlatform)||void 0===o?void 0:o.isPluginAvailable)||(m=>{const h=K.get(m);return!(!h?.platforms.has(k())&&!q(m))}),q=(null===(s=f?.currentPlatform)||void 0===s?void 0:s.getPluginHeader)||(m=>{var h;return null===(h=i.PluginHeaders)||void 0===h?void 0:h.find(S=>S.name===m)}),K=new Map,he=(null===(r=f?.currentPlatform)||void 0===r?void 0:r.registerPlugin)||((m,h={})=>{const S=K.get(m);if(S)return console.warn(`Capacitor plugin "${m}" already registered. Cannot register plugins twice.`),S.proxy;const U=k(),j=q(m);let O;const ve=function(){var b=(0,l.Z)(function*(){return!O&&U in h?O=O="function"==typeof h[U]?yield h[U]():h[U]:null!==d&&!O&&"web"in h&&(O=O="function"==typeof h.web?yield h.web():h.web),O});return function(){return b.apply(this,arguments)}}(),z=b=>{let p;const C=(...T)=>{const E=ve().then(w=>{const $=((b,p)=>{var C,T;if(!j){if(b)return null===(T=b[p])||void 0===T?void 0:T.bind(b);throw new y(`"${m}" plugin is not implemented on ${U}`,P.Unimplemented)}{const E=j?.methods.find(w=>p===w.name);if(E)return"promise"===E.rtype?w=>i.nativePromise(m,p.toString(),w):(w,$)=>i.nativeCallback(m,p.toString(),w,$);if(b)return null===(C=b[p])||void 0===C?void 0:C.bind(b)}})(w,b);if($){const B=$(...T);return p=B?.remove,B}throw new y(`"${m}.${b}()" is not implemented on ${U}`,P.Unimplemented)});return"addListener"===b&&(E.remove=(0,l.Z)(function*(){return p()})),E};return C.toString=()=>`${b.toString()}() { [capacitor code] }`,Object.defineProperty(C,"name",{value:b,writable:!1,configurable:!1}),C},_=z("addListener"),ee=z("removeListener"),Pe=(b,p)=>{const C=_({eventName:b},p),T=function(){var w=(0,l.Z)(function*(){const $=yield C;ee({eventName:b,callbackId:$},p)});return function(){return w.apply(this,arguments)}}(),E=new Promise(w=>C.then(()=>w({remove:T})));return E.remove=(0,l.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield T()}),E},J=new Proxy({},{get(b,p){switch(p){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return j?Pe:_;case"removeListener":return ee;default:return z(p)}}});return v[m]=J,K.set(m,{name:m,proxy:J,platforms:new Set([...Object.keys(h),...j?[U]:[]])}),J});return i.convertFileSrc||(i.convertFileSrc=m=>m),i.getPlatform=k,i.handleError=m=>n.console.error(m),i.isNativePlatform=le,i.isPluginAvailable=de,i.pluginMethodNoop=(m,h,S)=>Promise.reject(`${S} does not have an implementation of "${h}".`),i.registerPlugin=he,i.Exception=y,i.DEBUG=!!i.DEBUG,i.isLoggingEnabled=!!i.isLoggingEnabled,i.platform=i.getPlatform(),i.isNative=i.isNativePlatform(),i},Z=(n=>n.Capacitor=Y(n))(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),A=Z.registerPlugin;class u{constructor(e){this.listeners={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){var o=this;this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t);const r=this.windowListeners[e];r&&!r.registered&&this.addWindowListener(r);const d=function(){var v=(0,l.Z)(function*(){return o.removeListener(e,t)});return function(){return v.apply(this,arguments)}}(),i=Promise.resolve({remove:d});return Object.defineProperty(i,"remove",{value:(v=(0,l.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield d()}),function(){return v.apply(this,arguments)})}),i;var v}removeAllListeners(){var e=this;return(0,l.Z)(function*(){e.listeners={};for(const t in e.windowListeners)e.removeWindowListener(e.windowListeners[t]);e.windowListeners={}})()}notifyListeners(e,t){const o=this.listeners[e];o&&o.forEach(s=>s(t))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:o=>{this.notifyListeners(t,o)}}}unimplemented(e="not implemented"){return new Z.Exception(e,P.Unimplemented)}unavailable(e="not available"){return new Z.Exception(e,P.Unavailable)}removeListener(e,t){var o=this;return(0,l.Z)(function*(){const s=o.listeners[e];if(!s)return;const r=s.indexOf(t);o.listeners[e].splice(r,1),o.listeners[e].length||o.removeWindowListener(o.windowListeners[e])})()}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}}const R=n=>encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),X=n=>n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class ne extends u{getCookies(){return(0,l.Z)(function*(){const e=document.cookie,t={};return e.split(";").forEach(o=>{if(o.length<=0)return;let[s,r]=o.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");s=X(s).trim(),r=X(r).trim(),t[s]=r}),t})()}setCookie(e){return(0,l.Z)(function*(){try{const t=R(e.key),o=R(e.value),s=`; expires=${(e.expires||"").replace("expires=","")}`,r=(e.path||"/").replace("path=",""),d=null!=e.url&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${o||""}${s}; path=${r}; ${d};`}catch(t){return Promise.reject(t)}})()}deleteCookie(e){return(0,l.Z)(function*(){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}})()}clearCookies(){return(0,l.Z)(function*(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(e){return Promise.reject(e)}})()}clearAllCookies(){var e=this;return(0,l.Z)(function*(){try{yield e.clearCookies()}catch(t){return Promise.reject(t)}})()}}A("CapacitorCookies",{web:()=>new ne});const re=function(){var n=(0,l.Z)(function*(e){return new Promise((t,o)=>{const s=new FileReader;s.onload=()=>{const r=s.result;t(r.indexOf(",")>=0?r.split(",")[1]:r)},s.onerror=r=>o(r),s.readAsDataURL(e)})});return function(t){return n.apply(this,arguments)}}();class ae extends u{request(e){return(0,l.Z)(function*(){const t=((n,e={})=>{const t=Object.assign({method:n.method||"GET",headers:n.headers},e),s=((n={})=>{const e=Object.keys(n);return Object.keys(n).map(s=>s.toLocaleLowerCase()).reduce((s,r,d)=>(s[r]=n[e[d]],s),{})})(n.headers)["content-type"]||"";if("string"==typeof n.data)t.body=n.data;else if(s.includes("application/x-www-form-urlencoded")){const r=new URLSearchParams;for(const[d,i]of Object.entries(n.data||{}))r.set(d,i);t.body=r.toString()}else if(s.includes("multipart/form-data")){const r=new FormData;if(n.data instanceof FormData)n.data.forEach((i,v)=>{r.append(v,i)});else for(const i of Object.keys(n.data))r.append(i,n.data[i]);t.body=r;const d=new Headers(t.headers);d.delete("content-type"),t.headers=d}else(s.includes("application/json")||"object"==typeof n.data)&&(t.body=JSON.stringify(n.data));return t})(e,e.webFetchExtra),o=((n,e=!0)=>n?Object.entries(n).reduce((o,s)=>{const[r,d]=s;let i,v;return Array.isArray(d)?(v="",d.forEach(f=>{i=e?encodeURIComponent(f):f,v+=`${r}=${i}&`}),v.slice(0,-1)):(i=e?encodeURIComponent(d):d,v=`${r}=${i}`),`${o}&${v}`},"").substr(1):null)(e.params,e.shouldEncodeUrlParams),s=o?`${e.url}?${o}`:e.url,r=yield fetch(s,t),d=r.headers.get("content-type")||"";let v,f,{responseType:i="text"}=r.ok?e:{};switch(d.includes("application/json")&&(i="json"),i){case"arraybuffer":case"blob":f=yield r.blob(),v=yield re(f);break;case"json":v=yield r.json();break;default:v=yield r.text()}const I={};return r.headers.forEach((k,N)=>{I[N]=k}),{data:v,headers:I,status:r.status,url:r.url}})()}get(e){var t=this;return(0,l.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"GET"}))})()}post(e){var t=this;return(0,l.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"POST"}))})()}put(e){var t=this;return(0,l.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PUT"}))})()}patch(e){var t=this;return(0,l.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PATCH"}))})()}delete(e){var t=this;return(0,l.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"DELETE"}))})()}}A("CapacitorHttp",{web:()=>new ae})},4064:(te,H,c)=>{c.r(H),c.d(H,{TabsPageModule:()=>A});var l=c(712),F=c(4755),V=c(5030),W=c(8834),g=c(3020),x=c(5861);const P=(0,c(7423).fo)("Network",{web:()=>c.e(4203).then(c.bind(c,4203)).then(a=>new a.NetworkWeb)});var y=(()=>((y=y||{})[y.Online=1]="Online",y[y.Offline=0]="Offline",y))();let G=(()=>{class a{constructor(){this.event=new g.vpe}init(){var u=this;return(0,x.Z)(function*(){const M=yield P.getStatus();u.event.emit(M.connected),P.addListener("networkStatusChange",R=>{u.event.emit(R.connected)})})()}isOnline(){return(0,x.Z)(function*(){return(yield P.getStatus()).connected})()}isOffline(){return(0,x.Z)(function*(){return!(yield P.getStatus()).connected})()}getNetworkStatus(){return(0,x.Z)(function*(){return(yield P.getStatus()).connected?y.Online:y.Offline})()}}return a.\u0275fac=function(u){return new(u||a)},a.\u0275prov=g.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();const Q=[{path:"tabs",component:(()=>{class a{constructor(u,M){this.networkHandlingService=u,this.toastController=M}ngOnInit(){this.networkHandlingService.init(),this.networkHandlingService.event.subscribe(u=>{console.log(u?"Network is online":"Network is offline")})}}return a.\u0275fac=function(u){return new(u||a)(g.Y36(G),g.Y36(l.yF))},a.\u0275cmp=g.Xpm({type:a,selectors:[["app-tabs"]],decls:10,vars:0,consts:[["slot","bottom"],["tab","tab1"],["aria-hidden","true","name","triangle"],["tab","tab2"],["aria-hidden","true","name","ellipse"]],template:function(u,M){1&u&&(g.TgZ(0,"ion-tabs")(1,"ion-tab-bar",0)(2,"ion-tab-button",1),g._UZ(3,"ion-icon",2),g.TgZ(4,"ion-label"),g._uU(5,"Input"),g.qZA()(),g.TgZ(6,"ion-tab-button",3),g._UZ(7,"ion-icon",4),g.TgZ(8,"ion-label"),g._uU(9,"History"),g.qZA()()()())},dependencies:[l.gu,l.Q$,l.yq,l.ZU,l.UN]}),a})(),children:[{path:"tab1",loadChildren:()=>Promise.all([c.e(8592),c.e(1219)]).then(c.bind(c,1219)).then(a=>a.Tab1PageModule)},{path:"tab2",loadChildren:()=>Promise.all([c.e(8592),c.e(7667)]).then(c.bind(c,7667)).then(a=>a.Tab2PageModule)},{path:"tab3",loadChildren:()=>Promise.all([c.e(8592),c.e(6866)]).then(c.bind(c,6866)).then(a=>a.Tab3PageModule)},{path:"",redirectTo:"/tabs/tab1",pathMatch:"full"}]},{path:"",redirectTo:"/tabs/tab1",pathMatch:"full"}];let Z=(()=>{class a{}return a.\u0275fac=function(u){return new(u||a)},a.\u0275mod=g.oAB({type:a}),a.\u0275inj=g.cJS({imports:[W.Bz.forChild(Q)]}),a})(),A=(()=>{class a{}return a.\u0275fac=function(u){return new(u||a)},a.\u0275mod=g.oAB({type:a}),a.\u0275inj=g.cJS({imports:[l.Pc,F.ez,V.u5,Z]}),a})()}}]);