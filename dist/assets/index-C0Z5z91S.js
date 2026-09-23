import{r as ue,a as Oe,g as $e}from"./vendor-C8w-UNLI.js";import{L as Be,_ as ee,C as te,r as ze,E as Ue,i as he,b as qe,D as M,g as Fe,a as me,c as He,d as Ke,e as We,f as Ve,h as Ge,s as Je,G as Xe,j as Ye,k as Qe,o as Ze,l as et,m as tt,n as O,p as T,q as rt,t as at,u as nt,v as st}from"./firebase--qj1hQPJ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();var q={exports:{}},A={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var re;function ot(){if(re)return A;re=1;var e=ue(),t=Symbol.for("react.element"),a=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(i,l,d){var u,h={},b=null,k=null;d!==void 0&&(b=""+d),l.key!==void 0&&(b=""+l.key),l.ref!==void 0&&(k=l.ref);for(u in l)r.call(l,u)&&!o.hasOwnProperty(u)&&(h[u]=l[u]);if(i&&i.defaultProps)for(u in l=i.defaultProps,l)h[u]===void 0&&(h[u]=l[u]);return{$$typeof:t,type:i,key:b,ref:k,props:h,_owner:s.current}}return A.Fragment=a,A.jsx=c,A.jsxs=c,A}var ae;function it(){return ae||(ae=1,q.exports=ot()),q.exports}var n=it(),P={},ne;function ct(){if(ne)return P;ne=1;var e=Oe();return P.createRoot=e.createRoot,P.hydrateRoot=e.hydrateRoot,P}var lt=ct();const dt=$e(lt);var f=ue();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K=new Map,fe={activated:!1,tokenObservers:[]},ut={initialized:!1,enabled:!1};function p(e){return K.get(e)||{...fe}}function ht(e,t){return K.set(e,t),K.get(e)}function $(){return ut}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge="https://content-firebaseappcheck.googleapis.com/v1",mt="exchangeRecaptchaEnterpriseToken",ft="exchangeDebugToken",se={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:960*1e3},gt=1440*60*1e3;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t,a,r,s,o){if(this.operation=t,this.retryPolicy=a,this.getWaitDuration=r,this.lowerBound=s,this.upperBound=o,this.pending=null,this.nextErrorWaitInterval=s,s>o)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(t){this.stop();try{this.pending=new M,this.pending.promise.catch(a=>{}),await xt(this.getNextRun(t)),this.pending.resolve(),await this.pending.promise,this.pending=new M,this.pending.promise.catch(a=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(a){this.retryPolicy(a)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(t){if(t)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const a=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),a}}}function xt(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","already-internally-initialized":"App Check has already been automatically initialized by {$initializerName} with default options. If you want to initialize App Check with custom options, call initializeAppCheck() with those options before initializing {$initializerName}.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","no-provider":"No attestation provider was passed to initializeAppCheck() and no ReCAPTCHA Enterprise site key was found in the Firebase config.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},x=new Ue("appCheck","AppCheck",bt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e=!1){var t;return e?(t=self.grecaptcha)==null?void 0:t.enterprise:self.grecaptcha}function V(e){if(!p(e).activated)throw x.create("use-before-activation",{appName:e.name})}function pe(e){const t=Math.round(e/1e3),a=Math.floor(t/(3600*24)),r=Math.floor((t-a*3600*24)/3600),s=Math.floor((t-a*3600*24-r*3600)/60),o=t-a*3600*24-r*3600-s*60;let c="";return a&&(c+=S(a)+"d:"),r&&(c+=S(r)+"h:"),c+=S(s)+"m:"+S(o)+"s",c}function S(e){return e===0?"00":e>=10?e.toString():"0"+e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G({url:e,body:t},a){const r={"Content-Type":"application/json"},s=a.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&(r["X-Firebase-Client"]=h)}const o={method:"POST",body:JSON.stringify(t),headers:r};let c;try{c=await fetch(e,o)}catch(h){throw x.create("fetch-network-error",{originalErrorMessage:h==null?void 0:h.message})}if(c.status!==200)throw x.create("fetch-status-error",{httpStatus:c.status});let i;try{i=await c.json()}catch(h){throw x.create("fetch-parse-error",{originalErrorMessage:h==null?void 0:h.message})}const l=i.ttl.match(/^([\d.]+)(s)$/);if(!l||!l[2]||isNaN(Number(l[1])))throw x.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${i.ttl}`});const d=Number(l[1])*1e3,u=Date.now();return{token:i.token,expireTimeMillis:u+d,issuedAtTimeMillis:u}}function yt(e,t){const{projectId:a,appId:r,apiKey:s}=e.options;return{url:`${ge}/projects/${a}/apps/${r}:${mt}?key=${s}`,body:{recaptcha_enterprise_token:t}}}function xe(e,t){const{projectId:a,appId:r,apiKey:s}=e.options;return{url:`${ge}/projects/${a}/apps/${r}:${ft}?key=${s}`,body:{debug_token:t}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt="firebase-app-check-database",wt=1,R="firebase-app-check-store",be="debug-token";let I=null;function ye(){return I||(I=new Promise((e,t)=>{try{const a=indexedDB.open(kt,wt);a.onsuccess=r=>{e(r.target.result)},a.onerror=r=>{var s;t(x.create("storage-open",{originalErrorMessage:(s=r.target.error)==null?void 0:s.message}))},a.onupgradeneeded=r=>{const s=r.target.result;switch(r.oldVersion){case 0:s.createObjectStore(R,{keyPath:"compositeKey"})}}}catch(a){t(x.create("storage-open",{originalErrorMessage:a==null?void 0:a.message}))}}),I)}function vt(e){return we(ve(e))}function jt(e,t){return ke(ve(e),t)}function Nt(e){return ke(be,e)}function Ct(){return we(be)}async function ke(e,t){const r=(await ye()).transaction(R,"readwrite"),o=r.objectStore(R).put({compositeKey:e,value:t});return new Promise((c,i)=>{o.onsuccess=l=>{c()},r.onerror=l=>{var d;i(x.create("storage-set",{originalErrorMessage:(d=l.target.error)==null?void 0:d.message}))}})}async function we(e){const a=(await ye()).transaction(R,"readonly"),s=a.objectStore(R).get(e);return new Promise((o,c)=>{s.onsuccess=i=>{const l=i.target.result;o(l?l.value:void 0)},a.onerror=i=>{var l;c(x.create("storage-get",{originalErrorMessage:(l=i.target.error)==null?void 0:l.message}))}})}function ve(e){return`${e.options.appId}-${e.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j=new Be("@firebase/app-check");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Et(e){if(he()){let t;try{t=await vt(e)}catch(a){j.warn(`Failed to read token from IndexedDB. Error: ${a}`)}return t}}function F(e,t){return he()?jt(e,t).catch(a=>{j.warn(`Failed to write token to IndexedDB. Error: ${a}`)}):Promise.resolve()}async function _t(){let e;try{e=await Ct()}catch{}if(e)return e;{const t=crypto.randomUUID();return Nt(t).catch(a=>j.warn(`Failed to persist debug token to IndexedDB. Error: ${a}`)),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(){return $().enabled}async function X(){const e=$();if(e.enabled&&e.token)return e.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function Tt(){const e=Ke(),t=$();if(t.initialized=!0,typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&e.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;t.enabled=!0;const a=new M;t.token=a,typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?a.resolve(e.FIREBASE_APPCHECK_DEBUG_TOKEN):a.resolve(_t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At={error:"UNKNOWN_ERROR"};function Rt(e){return qe.encodeString(JSON.stringify(e),!1)}async function W(e,t=!1,a=!1){const r=e.app;V(r);const s=p(r);let o=s.token,c;if(o&&!_(o)&&(s.token=void 0,o=void 0),!o){const d=await s.cachedTokenPromise;d&&(_(d)?o=d:await F(r,void 0))}if(!t&&o&&_(o))return{token:o.token};let i=!1;if(J())try{const d=await X();s.exchangeTokenPromise||(s.exchangeTokenPromise=G(xe(r,d),e.heartbeatServiceProvider).finally(()=>{s.exchangeTokenPromise=void 0}),i=!0);const u=await s.exchangeTokenPromise;return await F(r,u),s.token=u,{token:u.token}}catch(d){return d.code==="appCheck/throttled"||d.code==="appCheck/initial-throttle"?j.warn(d.message):a&&j.error(d),H(d)}try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),i=!0),o=await p(r).exchangeTokenPromise}catch(d){d.code==="appCheck/throttled"||d.code==="appCheck/initial-throttle"?j.warn(d.message):a&&j.error(d),c=d}let l;return o?c?_(o)?l={token:o.token,internalError:c}:l=H(c):(l={token:o.token},s.token=o,await F(r,o)):l=H(c),i&&Ce(r,l),l}async function Pt(e){const t=e.app;V(t);const{provider:a}=p(t);if(J()){const r=await X(),s=xe(t,r);s.body.limited_use=!0;const{token:o}=await G(s,e.heartbeatServiceProvider);return{token:o}}else{const{token:r}=await a.getToken(!0);return{token:r}}}function je(e,t,a,r){const{app:s}=e,o=p(s),c={next:a,error:r,type:t};if(o.tokenObservers=[...o.tokenObservers,c],o.token&&_(o.token)){const i=o.token;Promise.resolve().then(()=>{a({token:i.token}),ie(e)}).catch(()=>{})}o.cachedTokenPromise.then(()=>ie(e))}function Ne(e,t){const a=p(e),r=a.tokenObservers.filter(s=>s.next!==t);r.length===0&&a.tokenRefresher&&a.tokenRefresher.isRunning()&&a.tokenRefresher.stop(),a.tokenObservers=r}function ie(e){const{app:t}=e,a=p(t);let r=a.tokenRefresher;r||(r=St(e),a.tokenRefresher=r),!r.isRunning()&&a.isTokenAutoRefreshEnabled&&r.start()}function St(e){const{app:t}=e;return new pt(async()=>{const a=p(t);let r;if(a.token?r=await W(e,!0):r=await W(e),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const a=p(t);if(a.token){let r=a.token.issuedAtTimeMillis+(a.token.expireTimeMillis-a.token.issuedAtTimeMillis)*.5+3e5;const s=a.token.expireTimeMillis-300*1e3;return r=Math.min(r,s),Math.max(0,r-Date.now())}else return 0},se.RETRIAL_MIN_WAIT,se.RETRIAL_MAX_WAIT)}function Ce(e,t){const a=p(e).tokenObservers;for(const r of a)try{r.type==="EXTERNAL"&&t.error!=null?r.error(t.error):r.next(t)}catch{}}function _(e){return e.expireTimeMillis-Date.now()>0}function H(e){return{token:Rt(At),error:e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t,a){this.app=t,this.heartbeatServiceProvider=a}_delete(){const{tokenObservers:t}=p(this.app);for(const a of t)Ne(this.app,a.next);return Promise.resolve()}}function Dt(e,t){return new It(e,t)}function Lt(e){return{getToken:t=>W(e,t),getLimitedUseToken:()=>Pt(e),addTokenListener:t=>je(e,"INTERNAL",t),removeTokenListener:t=>Ne(e.app,t)}}const Mt="@firebase/app-check",Ot="0.12.0",$t="https://www.google.com/recaptcha/enterprise.js";function Bt(e,t){const a=new M,r=p(e);r.reCAPTCHAState={initialized:a};const s=zt(e),o=oe(!0);return o?ce(e,t,o,s,a):Ft(()=>{const c=oe(!0);if(!c)throw new Error("no recaptcha");ce(e,t,c,s,a)}),a.promise}function ce(e,t,a,r,s){a.ready(()=>{qt(e,t,a,r),s.resolve(a)})}function zt(e){const t=`fire_app_check_${e.name}`,a=document.createElement("div");return a.id=t,a.style.display="none",document.body.appendChild(a),t}async function Ut(e){V(e);const a=await p(e).reCAPTCHAState.initialized.promise;return new Promise((r,s)=>{const o=p(e).reCAPTCHAState;a.ready(()=>{r(a.execute(o.widgetId,{action:"fire_app_check"}))})})}function qt(e,t,a,r){const s=a.render(r,{sitekey:t,size:"invisible",callback:()=>{p(e).reCAPTCHAState.succeeded=!0},"error-callback":()=>{p(e).reCAPTCHAState.succeeded=!1}}),o=p(e);o.reCAPTCHAState={...o.reCAPTCHAState,widgetId:s}}function Ft(e){const t=document.createElement("script");t.src=$t+"?render=explicit",t.onload=e,document.head.appendChild(t)}class B{constructor(t){this._siteKey=t,this._throttleData=null}async getToken(t=!1){var s,o,c;Kt(this._throttleData);const a=await Ut(this._app).catch(i=>{throw x.create("recaptcha-error")});if(!((s=p(this._app).reCAPTCHAState)!=null&&s.succeeded))throw x.create("recaptcha-error");let r;try{const i=yt(this._app,a);t&&(i.body.limited_use=!0),r=await G(i,this._heartbeatServiceProvider)}catch(i){throw(o=i.code)!=null&&o.includes("fetch-status-error")?(this._throttleData=Ht(Number((c=i.customData)==null?void 0:c.httpStatus),this._throttleData),x.create("initial-throttle",{time:pe(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):i}return this._throttleData=null,r}initialize(t){this._app=t,this._heartbeatServiceProvider=me(t,"heartbeat"),Bt(t,this._siteKey).catch(()=>{})}isEqual(t){return t instanceof B?this._siteKey===t._siteKey:!1}}function Ht(e,t){if(e===404||e===403)return{backoffCount:1,allowRequestsAfter:Date.now()+gt,httpStatus:e};{const a=t?t.backoffCount:0,r=We(a,1e3,2);return{backoffCount:a+1,allowRequestsAfter:Date.now()+r,httpStatus:e}}}function Kt(e){if(e&&Date.now()-e.allowRequestsAfter<=0)throw x.create("throttled",{time:pe(e.allowRequestsAfter-Date.now()),httpStatus:e.httpStatus})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(e=He(),t){var c;e=Fe(e),$().initialized||Tt(),J()&&X().then(i=>console.log(`App Check debug token: ${i}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`));let a;if(!(t!=null&&t.provider)&&e.options.recaptchaSiteKey&&(a=new B(e.options.recaptchaSiteKey)),!(t!=null&&t.provider)&&!a)throw x.create("no-provider");const r={...t,provider:(t==null?void 0:t.provider)||a},s=me(e,"app-check");if(s.isInitialized()){const i=s.getImmediate(),l=s.getOptions();if(l.isTokenAutoRefreshEnabled===r.isTokenAutoRefreshEnabled&&((c=l.provider)!=null&&c.isEqual(r.provider)))return i;throw typeof p(e).internallyInitializedBy=="string"?x.create("already-internally-initialized",{initializerName:p(e).internallyInitializedBy}):x.create("already-initialized",{appName:e.name})}const o=s.initialize({options:r});return Vt(e,r.provider,r.isTokenAutoRefreshEnabled),p(e).isTokenAutoRefreshEnabled&&je(o,"INTERNAL",()=>{}),o}function Vt(e,t,a=!1){const r=ht(e,{...fe});r.activated=!0,r.provider=t,r.cachedTokenPromise=Et(e).then(s=>(s&&_(s)&&(r.token=s,Ce(e,{token:s.token})),s)),r.isTokenAutoRefreshEnabled=a&&e.automaticDataCollectionEnabled,!e.automaticDataCollectionEnabled&&a&&j.warn("`isTokenAutoRefreshEnabled` is true but `automaticDataCollectionEnabled` was set to false during `initializeApp()`. This blocks automatic token refresh."),r.provider.initialize(e)}const Gt="app-check",le="app-check-internal";function Jt(){ee(new te(Gt,e=>{const t=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat");return Dt(t,a)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,a)=>{e.getProvider(le).initialize()})),ee(new te(le,e=>{const t=e.getProvider("app-check").getImmediate();return Lt(t)},"PUBLIC").setInstantiationMode("EXPLICIT")),ze(Mt,Ot)}Jt();const Ee={apiKey:"AIzaSyBN-jgFWi10Onb0atB7ty24IhfRSMMxulU",authDomain:"lista-de-compras-pwa-64fac.firebaseapp.com",projectId:"lista-de-compras-pwa-64fac",storageBucket:"lista-de-compras-pwa-64fac.firebasestorage.app",messagingSenderId:"922020197463",appId:"1:922020197463:web:41e9aa3c04bf76c7941f12"};console.log("Firebase API Key carregada:",Ee.apiKey?"Sim":"Nao");const Y=Ve(Ee),Xt=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1");if(typeof window<"u"&&!Xt){const e="6LcPX80sAAAAADDR6FC6ZFr_Wb_-bdwCbCD1tnfr";Wt(Y,{provider:new B(e),isTokenAutoRefreshEnabled:!0}),console.log("App Check inicializado com ReCaptcha Enterprise")}const D=Ge(Y);Je(D,Qe);const _e=new Xe;_e.setCustomParameters({prompt:"select_account"});const N=Ye(Y);function Te(){const[e,t]=f.useState(null),[a,r]=f.useState(!0),s=async i=>{if(i)try{await O(T(N,"users",i.uid),{nome:i.displayName||"Usuario",email:i.email||"",foto:i.photoURL||"",ultimoLogin:new Date().toISOString()},{merge:!0})}catch(l){console.error("Erro ao salvar usuario:",l)}};return f.useEffect(()=>{let i=!0;const l=Ze(D,d=>{if(!i)return;t(d||null),(async()=>{if(!d){r(!1);return}try{await s(d)}catch(h){console.error(h)}i&&r(!1)})()});return()=>{i=!1,l()}},[]),{usuario:e,loading:a,entrarComGoogle:async()=>{try{await tt(D,_e)}catch(i){console.error("Erro login Google:",i)}},sair:async()=>{try{await et(D)}catch(i){console.error("Erro logout:",i)}}}}function Yt(e){const[t,a]=f.useState(null),[r,s]=f.useState(!0),o=f.useRef(null),c=e==null?void 0:e.uid;return f.useEffect(()=>{let i=!0;if(!c){a({modo:"planejamento",estabelecimento:"",tema:"claro",itens:[]}),s(!1);return}return(async()=>{try{const d=T(N,"users",c,"lista","dados"),u=await rt(d);if(!i)return;if(u.exists()){const h=u.data(),b={modo:String(h.modo||"planejamento").toLowerCase(),estabelecimento:h.estabelecimento||"",tema:h.tema||"claro",itens:(h.itens||[]).map(k=>({...k,precoUnitario:Number(k.precoUnitario||0),quantidade:Number(k.quantidade||1)}))};a(b),o.current=b}else{const h={modo:"planejamento",estabelecimento:"",tema:"claro",itens:[]};a(h),o.current=h}}catch(d){if(console.error(d),!i)return;const u={modo:"planejamento",estabelecimento:"",tema:"claro",itens:[]};a(u),o.current=u}finally{i&&s(!1)}})(),()=>{i=!1}},[c]),f.useEffect(()=>{if(!c||!t||r||JSON.stringify(o.current)===JSON.stringify(t))return;const i=setTimeout(async()=>{try{await O(T(N,"users",c,"lista","dados"),{modo:t.modo,estabelecimento:t.estabelecimento,itens:t.itens,tema:t.tema||"claro"}),o.current=t}catch(l){console.error(l)}},400);return()=>clearTimeout(i)},[t,c,r]),{lista:t,setLista:a,loading:r}}function Qt(e){const[t,a]=f.useState([]),[r,s]=f.useState(!0);return f.useEffect(()=>{if(!(e!=null&&e.uid))return;(async()=>{try{s(!0);const l=at(N,"users",e.uid,"compras"),u=(await nt(l)).docs.map(h=>({id:h.id,...h.data()}));u.sort((h,b)=>new Date(b.data)-new Date(h.data)),a(u)}catch(l){console.error("Erro historico:",l)}finally{s(!1)}})()},[e==null?void 0:e.uid]),{historico:t,carregando:r,deletarCompra:async i=>{try{await st(T(N,"users",e.uid,"compras",i)),a(l=>l.filter(d=>d.id!==i))}catch(l){console.error("Erro ao deletar compra:",l)}},adicionarCompraLocal:i=>{a(l=>[i,...l].sort((d,u)=>new Date(u.data)-new Date(d.data)))}}}function Zt(){f.useEffect(()=>{const e=async()=>{try{const a=await fetch("/Lista-de-compras-PWA/version.json",{cache:"no-store"});if(!a.ok)return;const r=await a.json(),s=typeof __APP_VERSION__<"u"?__APP_VERSION__:"dev";if(r.version!==s&&s!=="dev"){if(console.log(`Nova versao detectada: ${s} -> ${r.version}`),"caches"in window){const o=await caches.keys();await Promise.all(o.map(c=>caches.delete(c))),console.log("Cache limpo")}if("serviceWorker"in navigator){const o=await navigator.serviceWorker.getRegistrations();await Promise.all(o.map(c=>c.unregister())),console.log("Service Workers desregistrados")}window.location.reload(!0)}}catch{console.log("Verificacao de versao: ignorado em dev")}};e();const t=setInterval(e,300*1e3);return()=>clearInterval(t)},[])}/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),tr=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,r)=>r?r.toUpperCase():a.toLowerCase()),de=e=>{const t=tr(e);return t.charAt(0).toUpperCase()+t.slice(1)},Ae=(...e)=>e.filter((t,a,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===a).join(" ").trim(),rr=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ar={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nr=f.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:a=2,absoluteStrokeWidth:r,className:s="",children:o,iconNode:c,...i},l)=>f.createElement("svg",{ref:l,...ar,width:t,height:t,stroke:e,strokeWidth:r?Number(a)*24/Number(t):a,className:Ae("lucide",s),...!o&&!rr(i)&&{"aria-hidden":"true"},...i},[...c.map(([d,u])=>f.createElement(d,u)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=(e,t)=>{const a=f.forwardRef(({className:r,...s},o)=>f.createElement(nr,{ref:o,iconNode:t,className:Ae(`lucide-${er(de(e))}`,`lucide-${e}`,r),...s}));return a.displayName=de(e),a};/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],or=v("circle-check-big",sr);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],cr=v("clock",ir);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lr=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],dr=v("dollar-sign",lr);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ur=[["rect",{x:"3",y:"5",width:"6",height:"6",rx:"1",key:"1defrl"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]],hr=v("list-todo",ur);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],fr=v("log-out",mr);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],pr=v("package",gr);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],Re=v("shopping-cart",xr);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],z=v("trash-2",br);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Pe=v("user",yr);function kr(){const{usuario:e,entrarComGoogle:t,sair:a}=Te();return e?n.jsx("div",{className:"flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-500 to-green-700 p-4",children:n.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-xl dark:bg-slate-800",children:[e.photoURL?n.jsx("img",{src:e.photoURL,alt:"Usuario",className:"mx-auto h-20 w-20 rounded-full border-4 border-emerald-500 object-cover"}):n.jsx("div",{className:"mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-emerald-500 bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400",children:n.jsx(Pe,{size:40})}),n.jsx("h2",{className:"mt-4 text-lg font-bold text-gray-800 dark:text-white",children:e.displayName}),n.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Bem-vindo de volta"}),n.jsx("button",{onClick:a,className:"mt-6 w-full rounded-xl bg-red-500 py-2.5 font-medium text-white transition hover:bg-red-600 active:scale-[0.98]",children:"Sair"})]})}):n.jsx("div",{className:"flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-500 to-green-700 p-4",children:n.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-xl dark:bg-slate-800",children:[n.jsx("div",{className:"mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-50/50 p-2 shadow-inner dark:bg-slate-700/50",children:n.jsx("img",{src:"./pwa-192x192.png",alt:"Ícone Lista de Compras",className:"h-full w-full object-contain"})}),n.jsx("h1",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:"Lista de Compras"}),n.jsx("p",{className:"mt-2 text-sm text-gray-500 dark:text-gray-400",children:"Organize suas compras com facilidade"}),n.jsxs("button",{onClick:t,className:"mt-6 flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white py-2.5 px-4 font-medium text-gray-700 shadow-sm transition hover:bg-gray-50 hover:shadow active:scale-[0.98] dark:border-slate-700 dark:bg-slate-900 dark:text-gray-200 dark:hover:bg-slate-800",children:[n.jsxs("svg",{className:"h-5 w-5",viewBox:"0 0 24 24",children:[n.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),n.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),n.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"}),n.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"})]}),"Entrar com Google"]})]})})}function wr(){const e=typeof __APP_VERSION__<"u"?__APP_VERSION__:"dev",t=typeof __BUILD_TIME__<"u"&&__BUILD_TIME__?new Date(__BUILD_TIME__).toLocaleDateString("pt-BR",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"dev";return n.jsxs("div",{title:`Versao ${e} - ${t}`,className:"text-xs text-gray-400 dark:text-gray-500 cursor-help",children:["v",e]})}function vr({estabelecimento:e,aoDefinirEstabelecimento:t,aoLimpar:a,usuario:r,aoLogout:s,tema:o,aoDefinirTema:c}){const i=o||"claro";return n.jsx("header",{className:"w-full bg-emerald-600 text-white shadow-lg",children:n.jsxs("div",{className:"w-full px-4 pt-6 pb-6",children:[n.jsxs("div",{className:"mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"rounded-2xl bg-emerald-700 p-3 shadow-md",children:n.jsx(Re,{size:30})}),n.jsxs("div",{children:[n.jsx("h1",{className:"text-3xl font-bold leading-tight",children:"Lista de Compras"}),n.jsx("p",{className:"text-sm text-emerald-100",children:"Organize suas compras"})]})]}),n.jsxs("div",{className:"flex items-center justify-end gap-2 sm:gap-3 sm:ml-auto w-full sm:w-auto",children:[n.jsx("button",{onClick:()=>{const l=i==="escuro"?"claro":"escuro";c==null||c(l)},className:"rounded-xl bg-emerald-700 p-3 transition hover:bg-emerald-800",title:"Tema",children:i==="escuro"?"☀️":"🌙"}),n.jsx("div",{className:"h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center overflow-hidden rounded-full border-2 border-white bg-emerald-700",children:r!=null&&r.photoURL?n.jsx("img",{src:r.photoURL,alt:"Usuario",className:"h-full w-full object-cover",referrerPolicy:"no-referrer"}):n.jsx(Pe,{size:18})}),n.jsx("button",{onClick:s,className:"rounded-xl bg-emerald-700 p-3 transition hover:bg-emerald-800",title:"Sair",children:n.jsx(fr,{size:18})}),n.jsx("button",{onClick:a,className:"rounded-xl bg-emerald-700 p-3 transition hover:bg-emerald-800",title:"Limpar lista",children:n.jsx(z,{size:18})})]})]}),n.jsxs("div",{className:"flex gap-3 items-end",children:[n.jsx("input",{type:"text",value:e,onChange:l=>t(l.target.value),placeholder:"Nome do mercado...",className:`\r
              flex-1 rounded-2xl border border-emerald-500\r
              bg-emerald-700 px-4 py-4 text-white\r
              placeholder-emerald-200\r
              focus:outline-none focus:ring-2 focus:ring-emerald-300\r
            `}),n.jsx(wr,{})]})]})})}function jr({modo:e,aoAlternar:t}){return n.jsx("div",{className:"rounded-xl shadow-md p-2 mb-4 bg-white dark:bg-slate-800",children:n.jsxs("div",{className:"flex gap-2",children:[n.jsxs("button",{onClick:()=>t("planejamento"),className:`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${e==="planejamento"?"bg-emerald-500 text-white shadow-md":"bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-slate-600"}`,children:[n.jsx(hr,{size:20}),n.jsx("span",{children:"Planejamento"})]}),n.jsxs("button",{onClick:()=>t("feira"),className:`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${e==="feira"?"bg-emerald-500 text-white shadow-md":"bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-slate-600"}`,children:[n.jsx(Re,{size:20}),n.jsx("span",{children:"Na Feira"})]})]})})}function L(e){return Number(e||0).toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}function Nr(e){return e?String(e).trim().toLowerCase().split(/\s+/).map(t=>t?t[0].toUpperCase()+t.slice(1):"").join(" "):""}function Cr({aoAdicionar:e}){const[t,a]=f.useState(""),[r,s]=f.useState(1);function o(c){c.preventDefault();const i=t.trim().slice(0,80),l=Math.max(1,Math.min(999,Number(r)||1));i&&(e({nome:Nr(i),quantidade:l}),a(""),s(1))}return n.jsxs("form",{onSubmit:o,className:"mb-4 flex gap-2",children:[n.jsx("input",{type:"text",maxLength:80,value:t,onChange:c=>a(c.target.value),placeholder:"Produto",className:"flex-1 rounded border p-2"}),n.jsx("input",{type:"number",min:"1",max:"999",value:r,onChange:c=>s(c.target.value),className:"w-20 rounded border p-2"}),n.jsx("button",{className:"rounded bg-green-500 px-4 text-white",children:"+"})]})}function Er({item:e={},onAtualizar:t,onRemover:a,onToggleComprado:r}){const[s,o]=f.useState((e==null?void 0:e.quantidade)||1),[c,i]=f.useState("");f.useEffect(()=>{o((e==null?void 0:e.quantidade)||1),i((e==null?void 0:e.precoUnitario)!=null?String(Math.round(e.precoUnitario*100)):"")},[e]);const l=w=>{const C=w.target.value.replace(/\D/g,"");i(C)},d=()=>{const w=Number(c||0);t==null||t((e==null?void 0:e.id)||(e==null?void 0:e._id),{precoUnitario:w/100})},u=w=>{const C=Number(w.target.value);o(C),t==null||t((e==null?void 0:e.id)||(e==null?void 0:e._id),{quantidade:C||1})},h=Number(c||0)/100,k=(s*h).toLocaleString("pt-BR",{minimumFractionDigits:2});return n.jsx("div",{className:"rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 shadow-sm",children:n.jsxs("div",{className:"flex flex-wrap items-center gap-3 md:flex-nowrap",children:[n.jsx("input",{type:"checkbox",checked:e==null?void 0:e.comprado,onChange:()=>r==null?void 0:r((e==null?void 0:e.id)||(e==null?void 0:e._id)),className:"h-5 w-5 accent-emerald-500"}),n.jsx("span",{className:"flex-1 font-medium text-gray-800 dark:text-gray-100",children:e==null?void 0:e.nome}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"number",min:"1",value:s,onChange:u,className:"w-16 rounded border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-2 py-1 text-center text-gray-900 dark:text-white"}),n.jsx("span",{children:"x"}),n.jsx("span",{children:"R$"}),n.jsx("input",{type:"text",inputMode:"numeric",placeholder:"0,00",value:c?(Number(c)/100).toLocaleString("pt-BR",{minimumFractionDigits:2}):"",onChange:l,onBlur:d,className:"w-24 rounded border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-2 py-1 text-right"})]}),n.jsxs("div",{className:"min-w-[110px] text-right",children:[n.jsx("span",{className:"text-xs text-gray-500 block",children:"Total"}),n.jsxs("span",{className:"font-bold block",children:["R$ ",k]})]}),n.jsx("button",{onClick:()=>a==null?void 0:a((e==null?void 0:e.id)||(e==null?void 0:e._id)),className:"text-red-500 p-2",children:n.jsx(z,{size:18})})]})})}function _r({itens:e,modo:t,aoRemover:a,aoAtualizar:r,aoAlternarComprado:s}){return e.length?n.jsx("div",{className:"space-y-4",children:e.map(o=>n.jsx("div",{children:t==="feira"?n.jsx(Er,{item:o,onAtualizar:r,onRemover:a,onToggleComprado:s}):n.jsx("div",{className:"rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 shadow-sm",children:n.jsxs("div",{className:"flex items-center justify-between gap-3",children:[n.jsxs("div",{className:"flex flex-1 items-center gap-3",children:[n.jsx("p",{className:"font-medium text-gray-800 dark:text-gray-100",children:o.nome}),n.jsxs("div",{className:"ml-6 flex items-center gap-2",children:[n.jsx("label",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Quantidade:"}),n.jsx("input",{type:"text",inputMode:"numeric",value:o.quantidade,onChange:c=>{const i=c.target.value;(i===""||/^\d+$/.test(i))&&r(o.id,{quantidade:i===""?"":Number(i)})},onBlur:c=>{const i=Number(c.target.value);(!i||i<1)&&r(o.id,{quantidade:1})},className:"w-20 rounded border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-2 py-1 text-center text-gray-900 dark:text-white focus:border-emerald-500 focus:outline-none"})]})]}),n.jsx("button",{onClick:()=>a(o.id),className:"rounded-lg p-2 text-red-500 transition-colors hover:bg-red-50 dark:hover:bg-slate-700 hover:text-red-700",title:"Remover item",children:n.jsx(z,{size:18})})]})})},o.id))}):n.jsx("div",{className:"rounded-lg bg-white dark:bg-slate-800 p-6 text-center shadow",children:n.jsx("p",{className:"text-gray-500 dark:text-gray-300",children:"Nenhum item adicionado ainda."})})}function Tr({totais:e}){const{total:t=0,quantidadeItens:a=0,itensComprados:r=0}=e||{},s=a>0?r/a*100:0;return n.jsxs("div",{className:"rounded-xl shadow-md p-4 mt-4 bg-white dark:bg-slate-800",children:[n.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-5 gap-4",children:[n.jsxs("div",{className:"rounded-lg p-3 col-span-2 md:col-span-1 bg-emerald-50 dark:bg-slate-700",children:[n.jsxs("div",{className:"flex items-center gap-2 text-emerald-600 dark:text-emerald-300 mb-1",children:[n.jsx(dr,{size:18}),n.jsx("span",{className:"text-sm font-medium",children:"Total"})]}),n.jsx("p",{className:"text-2xl font-bold text-emerald-700 dark:text-emerald-200",children:L(t)}),n.jsx("p",{className:"text-xs text-emerald-500 dark:text-emerald-300 mt-1",children:"Valor total da compra"})]}),n.jsxs("div",{className:"rounded-lg p-3 bg-blue-50 dark:bg-slate-700",children:[n.jsxs("div",{className:"flex items-center gap-2 text-blue-600 dark:text-blue-300 mb-1",children:[n.jsx(pr,{size:18}),n.jsx("span",{className:"text-sm font-medium",children:"Itens"})]}),n.jsx("p",{className:"text-2xl font-bold text-blue-700 dark:text-blue-200",children:a})]}),n.jsxs("div",{className:"rounded-lg p-3 bg-green-50 dark:bg-slate-700",children:[n.jsxs("div",{className:"flex items-center gap-2 text-green-600 dark:text-green-300 mb-1",children:[n.jsx(or,{size:18}),n.jsx("span",{className:"text-sm font-medium",children:"Comprados"})]}),n.jsx("p",{className:"text-2xl font-bold text-green-700 dark:text-green-200",children:r})]}),n.jsxs("div",{className:"rounded-lg p-3 bg-orange-50 dark:bg-slate-700",children:[n.jsxs("div",{className:"flex items-center gap-2 text-orange-600 dark:text-orange-300 mb-1",children:[n.jsx(cr,{size:18}),n.jsx("span",{className:"text-sm font-medium",children:"Restantes"})]}),n.jsx("p",{className:"text-2xl font-bold text-orange-700 dark:text-orange-200",children:a-r})]})]}),a>0&&n.jsxs("div",{className:"mt-4",children:[n.jsxs("div",{className:"flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2",children:[n.jsx("span",{children:"Progresso"}),n.jsxs("span",{children:[Math.round(s),"%"]})]}),n.jsx("div",{className:"w-full bg-gray-200 dark:bg-slate-700 rounded-full h-3",children:n.jsx("div",{className:"bg-emerald-500 h-3 rounded-full transition-all duration-500",style:{width:`${s}%`}})}),n.jsxs("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-2 text-center",children:[r," de ",a," itens"]})]})]})}function Ar({historico:e,carregando:t,deletarCompra:a}){const[r,s]=f.useState(null);return t?n.jsx("div",{className:"mt-6 text-center text-gray-600 dark:text-gray-300",children:"Carregando historico..."}):e!=null&&e.length?n.jsx("div",{className:"mt-6 space-y-4",children:e.map(o=>{var i;const c=Number(o.total||0);return n.jsxs("div",{className:"rounded-xl bg-white dark:bg-slate-800 p-4 shadow",children:[n.jsxs("div",{className:"flex items-start justify-between",children:[n.jsxs("div",{className:"flex-1 cursor-pointer",onClick:()=>s(r===o.id?null:o.id),children:[n.jsx("h3",{className:"font-bold text-gray-900 dark:text-white",children:o.estabelecimento}),n.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:new Date(o.data).toLocaleDateString("pt-BR")}),n.jsx("p",{className:"font-bold text-green-600 dark:text-green-400",children:L(c)}),n.jsx("p",{className:"mt-1 text-xs text-gray-400 dark:text-gray-500",children:"Clique para ver os detalhes"})]}),n.jsx("button",{onClick:()=>a(o.id),className:"text-red-500 hover:text-red-700",children:n.jsx(z,{size:18})})]}),r===o.id&&n.jsxs("div",{className:"mt-3 space-y-2 border-t border-gray-200 dark:border-slate-700 pt-3",children:[n.jsxs("div",{className:"flex justify-between text-xs text-gray-500 dark:text-gray-400",children:[n.jsx("span",{children:"Item"}),n.jsx("span",{children:"Total"})]}),(i=o.itens)==null?void 0:i.map(l=>{const d=Number(l.quantidade||0)*Number(l.precoUnitario||0);return n.jsxs("div",{className:"flex justify-between text-sm text-gray-700 dark:text-gray-200",children:[n.jsxs("span",{children:[l.quantidade,"x ",l.nome]}),n.jsx("span",{children:L(d)})]},l.id)}),n.jsxs("div",{className:"flex justify-between border-t border-gray-200 dark:border-slate-700 pt-2 font-bold text-gray-900 dark:text-white",children:[n.jsx("span",{children:"Total"}),n.jsx("span",{children:L(c)})]})]})]},o.id)})}):n.jsx("div",{className:"mt-6 text-center text-gray-500 dark:text-gray-400",children:"Nenhuma compra encontrada"})}function Rr(){Zt();const{usuario:e,loading:t,sair:a}=Te(),{lista:r,setLista:s,loading:o}=Yt(e),{historico:c,carregando:i,deletarCompra:l,adicionarCompraLocal:d}=Qt(e),[u,h]=f.useState("compras"),[b,k]=f.useState("claro"),w=(r==null?void 0:r.itens)||[];f.useEffect(()=>{r!=null&&r.tema&&k(r.tema)},[r==null?void 0:r.tema]),f.useEffect(()=>{document.documentElement.classList.toggle("dark",b==="escuro")},[b]);const C=async()=>{await a()},Ie=async()=>{var Q;if(!(e!=null&&e.uid)||!((Q=r==null?void 0:r.itens)!=null&&Q.length))return;const g=r.itens||[],m=g.reduce((U,Z)=>U+(Z.quantidade||0)*(Z.precoUnitario||0),0),y=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID()||Math.random().toString(36).substring(2),E={id:y,estabelecimento:(r==null?void 0:r.estabelecimento)||"",itens:g,total:m,data:new Date().toISOString()};try{await O(T(N,"users",e.uid,"compras",y),E),d(E),await O(T(N,"users",e.uid,"lista","dados"),{modo:"planejamento",estabelecimento:"",tema:b,itens:[]}),s({modo:"planejamento",estabelecimento:"",tema:b,itens:[]}),h("historico")}catch(U){console.error("Erro finalizar compra:",U)}},De=g=>{s(m=>m&&{...m,itens:(m.itens||[]).filter(y=>y.id!==g)})},Le=(g,m)=>{s(y=>y&&{...y,itens:(y.itens||[]).map(E=>E.id===g?{...E,...m}:E)})},Me=g=>{s(m=>m&&{...m,itens:(m.itens||[]).map(y=>y.id===g?{...y,comprado:!y.comprado}:y)})};return t||o?n.jsx("div",{className:"flex min-h-screen items-center justify-center",children:n.jsx("p",{children:"Carregando..."})}):e?r?n.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-slate-900",children:[n.jsx(vr,{usuario:e,estabelecimento:r.estabelecimento||"",aoDefinirEstabelecimento:g=>s(m=>m&&{...m,estabelecimento:g}),aoLimpar:()=>s(g=>g&&{...g,itens:[]}),aoLogout:C,tema:b,aoDefinirTema:g=>{k(g),s(m=>m&&{...m,tema:g})}}),n.jsxs("main",{className:"mx-auto max-w-4xl space-y-6 px-4 py-6",children:[n.jsxs("div",{className:"flex gap-2",children:[n.jsx("button",{onClick:()=>h("compras"),className:`flex-1 rounded-lg p-3 font-semibold ${u==="compras"?"bg-emerald-600 text-white":"bg-white text-gray-700 dark:bg-slate-800 dark:text-white"}`,children:"Compras"}),n.jsx("button",{onClick:()=>h("historico"),className:`flex-1 rounded-lg p-3 font-semibold ${u==="historico"?"bg-emerald-600 text-white":"bg-white text-gray-700 dark:bg-slate-800 dark:text-white"}`,children:"Historico"})]}),u==="compras"&&n.jsxs(n.Fragment,{children:[n.jsx(jr,{modo:r.modo,aoAlternar:g=>s(m=>m&&{...m,modo:g})}),n.jsx(Cr,{aoAdicionar:g=>s(m=>m&&{...m,itens:[...m.itens,{id:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID()||Math.random().toString(36).substring(2),nome:g.nome,quantidade:g.quantidade,precoUnitario:0,comprado:!1}]})}),n.jsx(_r,{itens:w,modo:r.modo,aoRemover:De,aoAtualizar:Le,aoAlternarComprado:Me}),n.jsx(Tr,{totais:{total:w.reduce((g,m)=>g+(m.quantidade||0)*(m.precoUnitario||0),0),quantidadeItens:w.length,itensComprados:w.filter(g=>g.comprado).length}}),r.modo==="feira"&&w.length>0&&n.jsx("button",{onClick:Ie,className:"w-full rounded-lg bg-emerald-600 p-3 text-white font-semibold",children:"Finalizar compra"})]}),u==="historico"&&n.jsx(Ar,{historico:c,carregando:i,deletarCompra:l})]})]}):n.jsx("div",{className:"flex min-h-screen items-center justify-center",children:n.jsx("p",{children:"Carregando lista..."})}):n.jsx(kr,{})}const Se=document.getElementById("root");if(!Se)throw new Error("Elemento #root nao encontrado no index.html");const Pr=dt.createRoot(Se);Pr.render(n.jsx(Rr,{}));
