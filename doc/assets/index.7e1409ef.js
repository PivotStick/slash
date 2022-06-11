const Ee=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}};Ee();function y(){}const de=e=>e;function Ce(e){return e&&typeof e=="object"&&typeof e.then=="function"}function pe(e){return e()}function te(){return Object.create(null)}function H(e){e.forEach(pe)}function me(e){return typeof e=="function"}function _e(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Le(e){return Object.keys(e).length===0}function ne(e){return e==null?"":e}const ve=typeof window!="undefined";let xe=ve?()=>window.performance.now():()=>Date.now(),Y=ve?e=>requestAnimationFrame(e):y;const N=new Set;function ge(e){N.forEach(t=>{t.c(e)||(N.delete(t),t.f())}),N.size!==0&&Y(ge)}function ze(e){let t;return N.size===0&&Y(ge),{promise:new Promise(n=>{N.add(t={c:e,f:n})}),abort(){N.delete(t)}}}function w(e,t){e.appendChild(t)}function be(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function Oe(e){const t=C("style");return Pe(be(e),t),t.sheet}function Pe(e,t){w(e.head||e,t)}function x(e,t,n){e.insertBefore(t,n||null)}function E(e){e.parentNode.removeChild(e)}function Se(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function C(e){return document.createElement(e)}function T(e){return document.createTextNode(e)}function S(){return T(" ")}function Me(){return T("")}function Ne(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function O(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Te(e){return Array.from(e.childNodes)}function J(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function G(e,t,n,l){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,l?"important":"")}function le(e,t,n){e.classList[n?"add":"remove"](t)}function je(e,t,{bubbles:n=!1,cancelable:l=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(e,n,l,t),o}const Q=new Map;let V=0;function Ae(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function Re(e,t){const n={stylesheet:Oe(t),rules:{}};return Q.set(e,n),n}function De(e,t,n,l,o,r,i,_=0){const a=16.666/l;let u=`{
`;for(let g=0;g<=1;g+=a){const k=t+(n-t)*r(g);u+=g*100+`%{${i(k,1-k)}}
`}const v=u+`100% {${i(n,1-n)}}
}`,p=`__svelte_${Ae(v)}_${_}`,d=be(e),{stylesheet:m,rules:f}=Q.get(d)||Re(d,e);f[p]||(f[p]=!0,m.insertRule(`@keyframes ${p} ${v}`,m.cssRules.length));const L=e.style.animation||"";return e.style.animation=`${L?`${L}, `:""}${p} ${l}ms linear ${o}ms 1 both`,V+=1,p}function oe(e,t){const n=(e.style.animation||"").split(", "),l=n.filter(t?r=>r.indexOf(t)<0:r=>r.indexOf("__svelte")===-1),o=n.length-l.length;o&&(e.style.animation=l.join(", "),V-=o,V||Be())}function Be(){Y(()=>{V||(Q.forEach(e=>{const{stylesheet:t}=e;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.rules={}}),Q.clear())})}let B;function P(e){B=e}function Fe(){if(!B)throw new Error("Function called outside component initialization");return B}const D=[],re=[],K=[],se=[],He=Promise.resolve();let X=!1;function qe(){X||(X=!0,He.then(Z))}function F(e){K.push(e)}const W=new Set;let I=0;function Z(){const e=B;do{for(;I<D.length;){const t=D[I];I++,P(t),Ge(t.$$)}for(P(null),D.length=0,I=0;re.length;)re.pop()();for(let t=0;t<K.length;t+=1){const n=K[t];W.has(n)||(W.add(n),n())}K.length=0}while(D.length);for(;se.length;)se.pop()();X=!1,W.clear(),P(e)}function Ge(e){if(e.fragment!==null){e.update(),H(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(F)}}let R;function Ie(){return R||(R=Promise.resolve(),R.then(()=>{R=null})),R}function ie(e,t,n){e.dispatchEvent(je(`${t?"intro":"outro"}${n}`))}const U=new Set;let M;function Ke(){M={r:0,c:[],p:M}}function Ue(){M.r||H(M.c),M=M.p}function j(e,t){e&&e.i&&(U.delete(e),e.i(t))}function ee(e,t,n,l){if(e&&e.o){if(U.has(e))return;U.add(e),M.c.push(()=>{U.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}}const Je={duration:0};function Qe(e,t,n){let l=t(e,n),o=!1,r,i,_=0;function a(){r&&oe(e,r)}function u(){const{delay:p=0,duration:d=300,easing:m=de,tick:f=y,css:L}=l||Je;L&&(r=De(e,0,1,d,p,m,L,_++)),f(0,1);const g=xe()+p,k=g+d;i&&i.abort(),o=!0,F(()=>ie(e,!0,"start")),i=ze(b=>{if(o){if(b>=k)return f(1,0),ie(e,!0,"end"),a(),o=!1;if(b>=g){const z=m((b-g)/d);f(z,1-z)}}return o})}let v=!1;return{start(){v||(v=!0,oe(e),me(l)?(l=l(),Ie().then(u)):u())},invalidate(){v=!1},end(){o&&(a(),o=!1)}}}function Ve(e,t){const n=t.token={};function l(o,r,i,_){if(t.token!==n)return;t.resolved=_;let a=t.ctx;i!==void 0&&(a=a.slice(),a[i]=_);const u=o&&(t.current=o)(a);let v=!1;t.block&&(t.blocks?t.blocks.forEach((p,d)=>{d!==r&&p&&(Ke(),ee(p,1,1,()=>{t.blocks[d]===p&&(t.blocks[d]=null)}),Ue())}):t.block.d(1),u.c(),j(u,1),u.m(t.mount(),t.anchor),v=!0),t.block=u,t.blocks&&(t.blocks[r]=u),v&&Z()}if(Ce(e)){const o=Fe();if(e.then(r=>{P(o),l(t.then,1,t.value,r),P(null)},r=>{if(P(o),l(t.catch,2,t.error,r),P(null),!t.hasCatch)throw r}),t.current!==t.pending)return l(t.pending,0),!0}else{if(t.current!==t.then)return l(t.then,1,t.value,e),!0;t.resolved=e}}function We(e,t,n){const l=t.slice(),{resolved:o}=e;e.current===e.then&&(l[e.value]=o),e.current===e.catch&&(l[e.error]=o),e.block.p(l,n)}function Xe(e,t){e.d(1),t.delete(e.key)}function Ye(e,t,n,l,o,r,i,_,a,u,v,p){let d=e.length,m=r.length,f=d;const L={};for(;f--;)L[e[f].key]=f;const g=[],k=new Map,b=new Map;for(f=m;f--;){const c=p(o,r,f),h=n(c);let $=i.get(h);$?l&&$.p(c,t):($=u(h,c),$.c()),k.set(h,g[f]=$),h in L&&b.set(h,Math.abs(f-L[h]))}const z=new Set,A=new Set;function s(c){j(c,1),c.m(_,v),i.set(c.key,c),v=c.first,m--}for(;d&&m;){const c=g[m-1],h=e[d-1],$=c.key,q=h.key;c===h?(v=c.first,d--,m--):k.has(q)?!i.has($)||z.has($)?s(c):A.has(q)?d--:b.get($)>b.get(q)?(A.add($),s(c)):(z.add(q),d--):(a(h,i),d--)}for(;d--;){const c=e[d];k.has(c.key)||a(c,i)}for(;m;)s(g[m-1]);return g}function Ze(e){e&&e.c()}function ye(e,t,n,l){const{fragment:o,on_mount:r,on_destroy:i,after_update:_}=e.$$;o&&o.m(t,n),l||F(()=>{const a=r.map(pe).filter(me);i?i.push(...a):H(a),e.$$.on_mount=[]}),_.forEach(F)}function ke(e,t){const n=e.$$;n.fragment!==null&&(H(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function et(e,t){e.$$.dirty[0]===-1&&(D.push(e),qe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function we(e,t,n,l,o,r,i,_=[-1]){const a=B;P(e);const u=e.$$={fragment:null,ctx:null,props:r,update:y,not_equal:o,bound:te(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:te(),dirty:_,skip_bound:!1,root:t.target||a.$$.root};i&&i(u.root);let v=!1;if(u.ctx=n?n(e,t.props||{},(p,d,...m)=>{const f=m.length?m[0]:d;return u.ctx&&o(u.ctx[p],u.ctx[p]=f)&&(!u.skip_bound&&u.bound[p]&&u.bound[p](f),v&&et(e,p)),d}):[],u.update(),v=!0,H(u.before_update),u.fragment=l?l(u.ctx):!1,t.target){if(t.hydrate){const p=Te(t.target);u.fragment&&u.fragment.l(p),p.forEach(E)}else u.fragment&&u.fragment.c();t.intro&&j(e.$$.fragment),ye(e,t.target,t.anchor,t.customElement),Z()}P(a)}class $e{$destroy(){ke(this,1),this.$destroy=y}$on(t,n){const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const o=l.indexOf(n);o!==-1&&l.splice(o,1)}}$set(t){this.$$set&&!Le(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function tt(e,{delay:t=0,duration:n=400,easing:l=de}={}){const o=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:l,css:r=>`opacity: ${r*o}`}}function ce(e,t,n){const l=e.slice();return l[4]=t[n],l[6]=n,l}function ue(e,t,n){const l=e.slice();return l[7]=t[n],l[6]=n,l}function ae(e){let t,n=e[0].description+"";return{c(){t=C("p"),O(t,"class","svelte-hp0tl2")},m(l,o){x(l,t,o),t.innerHTML=n},p(l,o){o&1&&n!==(n=l[0].description+"")&&(t.innerHTML=n)},d(l){l&&E(t)}}}function fe(e){let t,n=e[7].name+"",l,o,r,i;function _(){return e[3](e[6])}return{c(){t=C("li"),l=T(n),o=S(),O(t,"class","svelte-hp0tl2"),le(t,"current",e[1]===e[6])},m(a,u){x(a,t,u),w(t,l),w(t,o),r||(i=Ne(t,"click",_),r=!0)},p(a,u){e=a,u&1&&n!==(n=e[7].name+"")&&J(l,n),u&2&&le(t,"current",e[1]===e[6])},d(a){a&&E(t),r=!1,i()}}}function he(e,t){let n,l,o=t[4].method+"",r,i,_,a=t[4].path+"",u,v,p,d;return{key:e,first:null,c(){n=C("li"),l=C("span"),r=T(o),i=S(),_=C("span"),u=T(a),v=S(),O(l,"class","svelte-hp0tl2"),O(_,"class","svelte-hp0tl2"),O(n,"class",p=ne(t[4].method)+" svelte-hp0tl2"),this.first=n},m(m,f){x(m,n,f),w(n,l),w(l,r),w(n,i),w(n,_),w(_,u),w(n,v)},p(m,f){t=m,f&4&&o!==(o=t[4].method+"")&&J(r,o),f&4&&a!==(a=t[4].path+"")&&J(u,a),f&4&&p!==(p=ne(t[4].method)+" svelte-hp0tl2")&&O(n,"class",p)},i(m){m&&(d||F(()=>{d=Qe(n,tt,{delay:t[6]*100}),d.start()}))},o:y,d(m){m&&E(n)}}}function nt(e){let t,n,l,o,r=e[0].title+"",i,_,a,u,v,p,d,m,f=[],L=new Map;document.title=t=e[0].title+" - "+e[2].name;let g=e[0].description&&ae(e),k=e[0].routes,b=[];for(let s=0;s<k.length;s+=1)b[s]=fe(ue(e,k,s));let z=e[2].endpoints;const A=s=>s[4].method+s[4].path+s[6];for(let s=0;s<z.length;s+=1){let c=ce(e,z,s),h=A(c);L.set(h,f[s]=he(h,c))}return{c(){n=S(),l=C("header"),o=C("h1"),i=T(r),_=S(),g&&g.c(),a=S(),u=C("nav"),v=C("ul");for(let s=0;s<b.length;s+=1)b[s].c();p=S(),d=C("main"),m=C("ul");for(let s=0;s<f.length;s+=1)f[s].c();O(l,"class","svelte-hp0tl2"),G(v,"--i",e[1]),G(v,"--length",e[0].routes.length),O(v,"class","svelte-hp0tl2"),O(u,"class","svelte-hp0tl2"),O(m,"class","svelte-hp0tl2"),O(d,"class","svelte-hp0tl2")},m(s,c){x(s,n,c),x(s,l,c),w(l,o),w(o,i),w(l,_),g&&g.m(l,null),x(s,a,c),x(s,u,c),w(u,v);for(let h=0;h<b.length;h+=1)b[h].m(v,null);x(s,p,c),x(s,d,c),w(d,m);for(let h=0;h<f.length;h+=1)f[h].m(m,null)},p(s,[c]){if(c&5&&t!==(t=s[0].title+" - "+s[2].name)&&(document.title=t),c&1&&r!==(r=s[0].title+"")&&J(i,r),s[0].description?g?g.p(s,c):(g=ae(s),g.c(),g.m(l,null)):g&&(g.d(1),g=null),c&3){k=s[0].routes;let h;for(h=0;h<k.length;h+=1){const $=ue(s,k,h);b[h]?b[h].p($,c):(b[h]=fe($),b[h].c(),b[h].m(v,null))}for(;h<b.length;h+=1)b[h].d(1);b.length=k.length}c&2&&G(v,"--i",s[1]),c&1&&G(v,"--length",s[0].routes.length),c&4&&(z=s[2].endpoints,f=Ye(f,c,A,1,s,z,L,m,Xe,he,null,ce))},i(s){for(let c=0;c<z.length;c+=1)j(f[c])},o:y,d(s){s&&E(n),s&&E(l),g&&g.d(),s&&E(a),s&&E(u),Se(b,s),s&&E(p),s&&E(d);for(let c=0;c<f.length;c+=1)f[c].d()}}}function lt(e,t,n){let l,{doc:o}=t,r=0;const i=_=>n(1,r=_);return e.$$set=_=>{"doc"in _&&n(0,o=_.doc)},e.$$.update=()=>{e.$$.dirty&3&&n(2,l=o.routes[r])},[o,r,l,i]}class ot extends $e{constructor(t){super(),we(this,t,lt,nt,_e,{doc:0})}}function rt(e){return{c:y,m:y,p:y,i:y,o:y,d:y}}function st(e){let t,n;return t=new ot({props:{doc:e[0]}}),{c(){Ze(t.$$.fragment)},m(l,o){ye(t,l,o),n=!0},p:y,i(l){n||(j(t.$$.fragment,l),n=!0)},o(l){ee(t.$$.fragment,l),n=!1},d(l){ke(t,l)}}}function it(e){let t;return{c(){t=C("p"),t.textContent="..."},m(n,l){x(n,t,l)},p:y,i:y,o:y,d(n){n&&E(t)}}}function ct(e){let t,n,l,o={ctx:e,current:null,token:null,hasCatch:!1,pending:it,then:st,catch:rt,value:0,blocks:[,,,]};return Ve(fetch("/doc.json").then(ut),o),{c(){t=S(),n=Me(),o.block.c(),document.title="..."},m(r,i){x(r,t,i),x(r,n,i),o.block.m(r,o.anchor=i),o.mount=()=>n.parentNode,o.anchor=n,l=!0},p(r,[i]){e=r,We(o,e,i)},i(r){l||(j(o.block),l=!0)},o(r){for(let i=0;i<3;i+=1){const _=o.blocks[i];ee(_)}l=!1},d(r){r&&E(t),r&&E(n),o.block.d(r),o.token=null,o=null}}}const ut=e=>e.json();class at extends $e{constructor(t){super(),we(this,t,null,ct,_e,{})}}new at({target:document.body});
