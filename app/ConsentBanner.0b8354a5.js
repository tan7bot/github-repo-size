function w(){}function K(e){return e()}function P(){return Object.create(null)}function A(e){e.forEach(K)}function Q(e){return typeof e=="function"}function ee(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function te(e){return Object.keys(e).length===0}let j=!1;function ne(){j=!0}function ie(){j=!1}function le(e,t,n,i){for(;e<t;){const l=e+(t-e>>1);n(l)<=i?e=l+1:t=l}return e}function re(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const c=[];for(let o=0;o<t.length;o++){const u=t[o];u.claim_order!==void 0&&c.push(u)}t=c}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let l=0;for(let c=0;c<t.length;c++){const o=t[c].claim_order,u=(l>0&&t[n[l]].claim_order<=o?l+1:le(1,l,m=>t[n[m]].claim_order,o))-1;i[c]=n[u]+1;const s=u+1;n[s]=c,l=Math.max(s,l)}const f=[],r=[];let a=t.length-1;for(let c=n[l]+1;c!=0;c=i[c-1]){for(f.push(t[c-1]);a>=c;a--)r.push(t[a]);a--}for(;a>=0;a--)r.push(t[a]);f.reverse(),r.sort((c,o)=>c.claim_order-o.claim_order);for(let c=0,o=0;c<r.length;c++){for(;o<f.length&&r[c].claim_order>=f[o].claim_order;)o++;const u=o<f.length?f[o]:null;e.insertBefore(r[c],u)}}function d(e,t){if(j){for(re(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function X(e,t,n){j&&!n?d(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function g(e){e.parentNode&&e.parentNode.removeChild(e)}function h(e){return document.createElement(e)}function q(e){return document.createTextNode(e)}function M(){return q(" ")}function R(){return q("")}function V(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function _(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function L(e){return e.dataset.svelteH}function E(e){return Array.from(e.childNodes)}function ce(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function Y(e,t,n,i,l=!1){ce(e);const f=(()=>{for(let r=e.claim_info.last_index;r<e.length;r++){const a=e[r];if(t(a)){const c=n(a);return c===void 0?e.splice(r,1):e[r]=c,l||(e.claim_info.last_index=r),a}}for(let r=e.claim_info.last_index-1;r>=0;r--){const a=e[r];if(t(a)){const c=n(a);return c===void 0?e.splice(r,1):e[r]=c,l?c===void 0&&e.claim_info.last_index--:e.claim_info.last_index=r,a}}return i()})();return f.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,f}function ae(e,t,n,i){return Y(e,l=>l.nodeName===t,l=>{const f=[];for(let r=0;r<l.attributes.length;r++){const a=l.attributes[r];n[a.name]||f.push(a.name)}f.forEach(r=>l.removeAttribute(r))},()=>i(t))}function p(e,t,n){return ae(e,t,n,h)}function oe(e,t){return Y(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>q(t),!0)}function W(e){return oe(e," ")}let H;function N(e){H=e}const $=[],z=[];let v=[];const G=[],fe=Promise.resolve();let B=!1;function se(){B||(B=!0,fe.then(Z))}function O(e){v.push(e)}const I=new Set;let x=0;function Z(){if(x!==0)return;const e=H;do{try{for(;x<$.length;){const t=$[x];x++,N(t),ue(t.$$)}}catch(t){throw $.length=0,x=0,t}for(N(null),$.length=0,x=0;z.length;)z.pop()();for(let t=0;t<v.length;t+=1){const n=v[t];I.has(n)||(I.add(n),n())}v.length=0}while($.length);for(;G.length;)G.pop()();B=!1,I.clear(),N(e)}function ue(e){if(e.fragment!==null){e.update(),A(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(O)}}function de(e){const t=[],n=[];v.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),v=t}const _e=new Set;function he(e,t){e&&e.i&&(_e.delete(e),e.i(t))}function me(e,t,n){const{fragment:i,after_update:l}=e.$$;i&&i.m(t,n),O(()=>{const f=e.$$.on_mount.map(K).filter(Q);e.$$.on_destroy?e.$$.on_destroy.push(...f):A(f),e.$$.on_mount=[]}),l.forEach(O)}function pe(e,t){const n=e.$$;n.fragment!==null&&(de(n.after_update),A(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ge(e,t){e.$$.dirty[0]===-1&&($.push(e),se(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ye(e,t,n,i,l,f,r=null,a=[-1]){const c=H;N(e);const o=e.$$={fragment:null,ctx:[],props:f,update:w,not_equal:l,bound:P(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:P(),dirty:a,skip_bound:!1,root:t.target||c.$$.root};r&&r(o.root);let u=!1;if(o.ctx=n?n(e,t.props||{},(s,m,...y)=>{const k=y.length?y[0]:m;return o.ctx&&l(o.ctx[s],o.ctx[s]=k)&&(!o.skip_bound&&o.bound[s]&&o.bound[s](k),u&&ge(e,s)),m}):[],o.update(),u=!0,A(o.before_update),o.fragment=i?i(o.ctx):!1,t.target){if(t.hydrate){ne();const s=E(t.target);o.fragment&&o.fragment.l(s),s.forEach(g)}else o.fragment&&o.fragment.c();t.intro&&he(e.$$.fragment),me(e,t.target,t.anchor),ie(),Z()}N(c)}class be{$$=void 0;$$set=void 0;$destroy(){pe(this,1),this.$destroy=w}$on(t,n){if(!Q(n))return w;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(t){this.$$set&&!te(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const xe="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(xe);function F(e){let t,n,i="Allow Stats Collection?",l,f,r,a,c="Accept",o,u,s,m="Reject",y,k;return{c(){t=h("div"),n=h("p"),n.textContent=i,l=M(),f=h("ul"),r=h("li"),a=h("button"),a.textContent=c,o=M(),u=h("li"),s=h("button"),s.textContent=m,this.h()},l(C){t=p(C,"DIV",{class:!0});var b=E(t);n=p(b,"P",{"data-svelte-h":!0}),L(n)!=="svelte-1am1tvb"&&(n.textContent=i),l=W(b),f=p(b,"UL",{class:!0});var S=E(f);r=p(S,"LI",{class:!0});var U=E(r);a=p(U,"BUTTON",{class:!0,id:!0,"data-svelte-h":!0}),L(a)!=="svelte-7wgmkq"&&(a.textContent=c),U.forEach(g),o=W(S),u=p(S,"LI",{class:!0});var D=E(u);s=p(D,"BUTTON",{class:!0,id:!0,"data-svelte-h":!0}),L(s)!=="svelte-1dkq3ql"&&(s.textContent=m),D.forEach(g),S.forEach(g),b.forEach(g),this.h()},h(){_(a,"class","hover:text-ctp-green"),_(a,"id","accept-button"),_(r,"class","flex"),_(s,"class","hover:text-ctp-red"),_(s,"id","reject-button"),_(u,"class","flex"),_(f,"class","flex gap-4"),_(t,"class","bg-ctp-crust fixed bottom-0 flex w-full justify-center py-2 gap-4")},m(C,b){X(C,t,b),d(t,n),d(t,l),d(t,f),d(f,r),d(r,a),d(f,o),d(f,u),d(u,s),y||(k=[V(a,"click",e[2]),V(s,"click",e[3])],y=!0)},p:w,d(C){C&&g(t),y=!1,A(k)}}}function $e(e){let t,n=e[0]===null&&F(e);return{c(){n&&n.c(),t=R()},l(i){n&&n.l(i),t=R()},m(i,l){n&&n.m(i,l),X(i,t,l)},p(i,[l]){i[0]===null?n?n.p(i,l):(n=F(i),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},i:w,o:w,d(i){i&&g(t),n&&n.d(i)}}}function T(...e){window.dataLayer&&window.dataLayer.push(e)}function J(){T("js",new Date),T("config","AW-11351674171")}function ve(e,t,n){let i=localStorage.getItem("grsHasConsent");window.dataLayer=window?.dataLayer||[];function l(a){localStorage.setItem("grsHasConsent",a?"true":"false"),n(0,i=a?"true":"false"),T("consent","update",{ad_storage:a?"granted":"denied"}),a&&J()}return i==="true"&&J(),[i,l,()=>l(!0),()=>l(!1)]}class we extends be{constructor(t){super(),ye(this,t,ve,$e,ee,{})}}export{we as default};