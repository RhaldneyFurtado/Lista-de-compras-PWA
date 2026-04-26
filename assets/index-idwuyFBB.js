(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function fw(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Gh={exports:{}},Ca={},Kh={exports:{}},Ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fm;function pw(){if(Fm)return Ie;Fm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),A=Symbol.iterator;function V(D){return D===null||typeof D!="object"?null:(D=A&&D[A]||D["@@iterator"],typeof D=="function"?D:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,Q={};function G(D,q,Ee){this.props=D,this.context=q,this.refs=Q,this.updater=Ee||z}G.prototype.isReactComponent={},G.prototype.setState=function(D,q){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,q,"setState")},G.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function _e(){}_e.prototype=G.prototype;function ve(D,q,Ee){this.props=D,this.context=q,this.refs=Q,this.updater=Ee||z}var Te=ve.prototype=new _e;Te.constructor=ve,K(Te,G.prototype),Te.isPureReactComponent=!0;var Ne=Array.isArray,je=Object.prototype.hasOwnProperty,Oe={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function I(D,q,Ee){var we,Se={},Ae=null,be=null;if(q!=null)for(we in q.ref!==void 0&&(be=q.ref),q.key!==void 0&&(Ae=""+q.key),q)je.call(q,we)&&!P.hasOwnProperty(we)&&(Se[we]=q[we]);var De=arguments.length-2;if(De===1)Se.children=Ee;else if(1<De){for(var ze=Array(De),jt=0;jt<De;jt++)ze[jt]=arguments[jt+2];Se.children=ze}if(D&&D.defaultProps)for(we in De=D.defaultProps,De)Se[we]===void 0&&(Se[we]=De[we]);return{$$typeof:i,type:D,key:Ae,ref:be,props:Se,_owner:Oe.current}}function R(D,q){return{$$typeof:i,type:D.type,key:q,ref:D.ref,props:D.props,_owner:D._owner}}function x(D){return typeof D=="object"&&D!==null&&D.$$typeof===i}function k(D){var q={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(Ee){return q[Ee]})}var O=/\/+/g;function S(D,q){return typeof D=="object"&&D!==null&&D.key!=null?k(""+D.key):q.toString(36)}function $e(D,q,Ee,we,Se){var Ae=typeof D;(Ae==="undefined"||Ae==="boolean")&&(D=null);var be=!1;if(D===null)be=!0;else switch(Ae){case"string":case"number":be=!0;break;case"object":switch(D.$$typeof){case i:case e:be=!0}}if(be)return be=D,Se=Se(be),D=we===""?"."+S(be,0):we,Ne(Se)?(Ee="",D!=null&&(Ee=D.replace(O,"$&/")+"/"),$e(Se,q,Ee,"",function(jt){return jt})):Se!=null&&(x(Se)&&(Se=R(Se,Ee+(!Se.key||be&&be.key===Se.key?"":(""+Se.key).replace(O,"$&/")+"/")+D)),q.push(Se)),1;if(be=0,we=we===""?".":we+":",Ne(D))for(var De=0;De<D.length;De++){Ae=D[De];var ze=we+S(Ae,De);be+=$e(Ae,q,Ee,ze,Se)}else if(ze=V(D),typeof ze=="function")for(D=ze.call(D),De=0;!(Ae=D.next()).done;)Ae=Ae.value,ze=we+S(Ae,De++),be+=$e(Ae,q,Ee,ze,Se);else if(Ae==="object")throw q=String(D),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return be}function _t(D,q,Ee){if(D==null)return D;var we=[],Se=0;return $e(D,we,"","",function(Ae){return q.call(Ee,Ae,Se++)}),we}function Nt(D){if(D._status===-1){var q=D._result;q=q(),q.then(function(Ee){(D._status===0||D._status===-1)&&(D._status=1,D._result=Ee)},function(Ee){(D._status===0||D._status===-1)&&(D._status=2,D._result=Ee)}),D._status===-1&&(D._status=0,D._result=q)}if(D._status===1)return D._result.default;throw D._result}var Ye={current:null},Z={transition:null},ue={ReactCurrentDispatcher:Ye,ReactCurrentBatchConfig:Z,ReactCurrentOwner:Oe};function re(){throw Error("act(...) is not supported in production builds of React.")}return Ie.Children={map:_t,forEach:function(D,q,Ee){_t(D,function(){q.apply(this,arguments)},Ee)},count:function(D){var q=0;return _t(D,function(){q++}),q},toArray:function(D){return _t(D,function(q){return q})||[]},only:function(D){if(!x(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Ie.Component=G,Ie.Fragment=t,Ie.Profiler=o,Ie.PureComponent=ve,Ie.StrictMode=s,Ie.Suspense=y,Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,Ie.act=re,Ie.cloneElement=function(D,q,Ee){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var we=K({},D.props),Se=D.key,Ae=D.ref,be=D._owner;if(q!=null){if(q.ref!==void 0&&(Ae=q.ref,be=Oe.current),q.key!==void 0&&(Se=""+q.key),D.type&&D.type.defaultProps)var De=D.type.defaultProps;for(ze in q)je.call(q,ze)&&!P.hasOwnProperty(ze)&&(we[ze]=q[ze]===void 0&&De!==void 0?De[ze]:q[ze])}var ze=arguments.length-2;if(ze===1)we.children=Ee;else if(1<ze){De=Array(ze);for(var jt=0;jt<ze;jt++)De[jt]=arguments[jt+2];we.children=De}return{$$typeof:i,type:D.type,key:Se,ref:Ae,props:we,_owner:be}},Ie.createContext=function(D){return D={$$typeof:h,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:u,_context:D},D.Consumer=D},Ie.createElement=I,Ie.createFactory=function(D){var q=I.bind(null,D);return q.type=D,q},Ie.createRef=function(){return{current:null}},Ie.forwardRef=function(D){return{$$typeof:m,render:D}},Ie.isValidElement=x,Ie.lazy=function(D){return{$$typeof:w,_payload:{_status:-1,_result:D},_init:Nt}},Ie.memo=function(D,q){return{$$typeof:_,type:D,compare:q===void 0?null:q}},Ie.startTransition=function(D){var q=Z.transition;Z.transition={};try{D()}finally{Z.transition=q}},Ie.unstable_act=re,Ie.useCallback=function(D,q){return Ye.current.useCallback(D,q)},Ie.useContext=function(D){return Ye.current.useContext(D)},Ie.useDebugValue=function(){},Ie.useDeferredValue=function(D){return Ye.current.useDeferredValue(D)},Ie.useEffect=function(D,q){return Ye.current.useEffect(D,q)},Ie.useId=function(){return Ye.current.useId()},Ie.useImperativeHandle=function(D,q,Ee){return Ye.current.useImperativeHandle(D,q,Ee)},Ie.useInsertionEffect=function(D,q){return Ye.current.useInsertionEffect(D,q)},Ie.useLayoutEffect=function(D,q){return Ye.current.useLayoutEffect(D,q)},Ie.useMemo=function(D,q){return Ye.current.useMemo(D,q)},Ie.useReducer=function(D,q,Ee){return Ye.current.useReducer(D,q,Ee)},Ie.useRef=function(D){return Ye.current.useRef(D)},Ie.useState=function(D){return Ye.current.useState(D)},Ie.useSyncExternalStore=function(D,q,Ee){return Ye.current.useSyncExternalStore(D,q,Ee)},Ie.useTransition=function(){return Ye.current.useTransition()},Ie.version="18.3.1",Ie}var Um;function Ld(){return Um||(Um=1,Kh.exports=pw()),Kh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jm;function mw(){if(jm)return Ca;jm=1;var i=Ld(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,y,_){var w,A={},V=null,z=null;_!==void 0&&(V=""+_),y.key!==void 0&&(V=""+y.key),y.ref!==void 0&&(z=y.ref);for(w in y)s.call(y,w)&&!u.hasOwnProperty(w)&&(A[w]=y[w]);if(m&&m.defaultProps)for(w in y=m.defaultProps,y)A[w]===void 0&&(A[w]=y[w]);return{$$typeof:e,type:m,key:V,ref:z,props:A,_owner:o.current}}return Ca.Fragment=t,Ca.jsx=h,Ca.jsxs=h,Ca}var zm;function gw(){return zm||(zm=1,Gh.exports=mw()),Gh.exports}var F=gw(),rt=Ld(),vu={},Qh={exports:{}},Qt={},Yh={exports:{}},Jh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bm;function yw(){return Bm||(Bm=1,(function(i){function e(Z,ue){var re=Z.length;Z.push(ue);e:for(;0<re;){var D=re-1>>>1,q=Z[D];if(0<o(q,ue))Z[D]=ue,Z[re]=q,re=D;else break e}}function t(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var ue=Z[0],re=Z.pop();if(re!==ue){Z[0]=re;e:for(var D=0,q=Z.length,Ee=q>>>1;D<Ee;){var we=2*(D+1)-1,Se=Z[we],Ae=we+1,be=Z[Ae];if(0>o(Se,re))Ae<q&&0>o(be,Se)?(Z[D]=be,Z[Ae]=re,D=Ae):(Z[D]=Se,Z[we]=re,D=we);else if(Ae<q&&0>o(be,re))Z[D]=be,Z[Ae]=re,D=Ae;else break e}}return ue}function o(Z,ue){var re=Z.sortIndex-ue.sortIndex;return re!==0?re:Z.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var y=[],_=[],w=1,A=null,V=3,z=!1,K=!1,Q=!1,G=typeof setTimeout=="function"?setTimeout:null,_e=typeof clearTimeout=="function"?clearTimeout:null,ve=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Te(Z){for(var ue=t(_);ue!==null;){if(ue.callback===null)s(_);else if(ue.startTime<=Z)s(_),ue.sortIndex=ue.expirationTime,e(y,ue);else break;ue=t(_)}}function Ne(Z){if(Q=!1,Te(Z),!K)if(t(y)!==null)K=!0,Nt(je);else{var ue=t(_);ue!==null&&Ye(Ne,ue.startTime-Z)}}function je(Z,ue){K=!1,Q&&(Q=!1,_e(I),I=-1),z=!0;var re=V;try{for(Te(ue),A=t(y);A!==null&&(!(A.expirationTime>ue)||Z&&!k());){var D=A.callback;if(typeof D=="function"){A.callback=null,V=A.priorityLevel;var q=D(A.expirationTime<=ue);ue=i.unstable_now(),typeof q=="function"?A.callback=q:A===t(y)&&s(y),Te(ue)}else s(y);A=t(y)}if(A!==null)var Ee=!0;else{var we=t(_);we!==null&&Ye(Ne,we.startTime-ue),Ee=!1}return Ee}finally{A=null,V=re,z=!1}}var Oe=!1,P=null,I=-1,R=5,x=-1;function k(){return!(i.unstable_now()-x<R)}function O(){if(P!==null){var Z=i.unstable_now();x=Z;var ue=!0;try{ue=P(!0,Z)}finally{ue?S():(Oe=!1,P=null)}}else Oe=!1}var S;if(typeof ve=="function")S=function(){ve(O)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,_t=$e.port2;$e.port1.onmessage=O,S=function(){_t.postMessage(null)}}else S=function(){G(O,0)};function Nt(Z){P=Z,Oe||(Oe=!0,S())}function Ye(Z,ue){I=G(function(){Z(i.unstable_now())},ue)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(Z){Z.callback=null},i.unstable_continueExecution=function(){K||z||(K=!0,Nt(je))},i.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<Z?Math.floor(1e3/Z):5},i.unstable_getCurrentPriorityLevel=function(){return V},i.unstable_getFirstCallbackNode=function(){return t(y)},i.unstable_next=function(Z){switch(V){case 1:case 2:case 3:var ue=3;break;default:ue=V}var re=V;V=ue;try{return Z()}finally{V=re}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(Z,ue){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var re=V;V=Z;try{return ue()}finally{V=re}},i.unstable_scheduleCallback=function(Z,ue,re){var D=i.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?D+re:D):re=D,Z){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=re+q,Z={id:w++,callback:ue,priorityLevel:Z,startTime:re,expirationTime:q,sortIndex:-1},re>D?(Z.sortIndex=re,e(_,Z),t(y)===null&&Z===t(_)&&(Q?(_e(I),I=-1):Q=!0,Ye(Ne,re-D))):(Z.sortIndex=q,e(y,Z),K||z||(K=!0,Nt(je))),Z},i.unstable_shouldYield=k,i.unstable_wrapCallback=function(Z){var ue=V;return function(){var re=V;V=ue;try{return Z.apply(this,arguments)}finally{V=re}}}})(Jh)),Jh}var $m;function _w(){return $m||($m=1,Yh.exports=yw()),Yh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qm;function vw(){if(qm)return Qt;qm=1;var i=Ld(),e=_w();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},A={};function V(n){return y.call(A,n)?!0:y.call(w,n)?!1:_.test(n)?A[n]=!0:(w[n]=!0,!1)}function z(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function K(n,r,a,c){if(r===null||typeof r>"u"||z(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Q(n,r,a,c,d,f,v){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=f,this.removeEmptyString=v}var G={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){G[n]=new Q(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];G[r]=new Q(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){G[n]=new Q(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){G[n]=new Q(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){G[n]=new Q(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){G[n]=new Q(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){G[n]=new Q(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){G[n]=new Q(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){G[n]=new Q(n,5,!1,n.toLowerCase(),null,!1,!1)});var _e=/[\-:]([a-z])/g;function ve(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(_e,ve);G[r]=new Q(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(_e,ve);G[r]=new Q(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(_e,ve);G[r]=new Q(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){G[n]=new Q(n,1,!1,n.toLowerCase(),null,!1,!1)}),G.xlinkHref=new Q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){G[n]=new Q(n,1,!1,n.toLowerCase(),null,!0,!0)});function Te(n,r,a,c){var d=G.hasOwnProperty(r)?G[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(K(r,a,d,c)&&(a=null),c||d===null?V(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var Ne=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,je=Symbol.for("react.element"),Oe=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),k=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),$e=Symbol.for("react.suspense_list"),_t=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),Ye=Symbol.for("react.offscreen"),Z=Symbol.iterator;function ue(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,D;function q(n){if(D===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);D=r&&r[1]||""}return`
`+D+n}var Ee=!1;function we(n,r){if(!n||Ee)return"";Ee=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(U){var c=U}Reflect.construct(n,[],r)}else{try{r.call()}catch(U){c=U}n.call(r.prototype)}else{try{throw Error()}catch(U){c=U}n()}}catch(U){if(U&&c&&typeof U.stack=="string"){for(var d=U.stack.split(`
`),f=c.stack.split(`
`),v=d.length-1,T=f.length-1;1<=v&&0<=T&&d[v]!==f[T];)T--;for(;1<=v&&0<=T;v--,T--)if(d[v]!==f[T]){if(v!==1||T!==1)do if(v--,T--,0>T||d[v]!==f[T]){var C=`
`+d[v].replace(" at new "," at ");return n.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",n.displayName)),C}while(1<=v&&0<=T);break}}}finally{Ee=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?q(n):""}function Se(n){switch(n.tag){case 5:return q(n.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return n=we(n.type,!1),n;case 11:return n=we(n.type.render,!1),n;case 1:return n=we(n.type,!0),n;default:return""}}function Ae(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case P:return"Fragment";case Oe:return"Portal";case R:return"Profiler";case I:return"StrictMode";case S:return"Suspense";case $e:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case k:return(n.displayName||"Context")+".Consumer";case x:return(n._context.displayName||"Context")+".Provider";case O:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case _t:return r=n.displayName||null,r!==null?r:Ae(n.type)||"Memo";case Nt:r=n._payload,n=n._init;try{return Ae(n(r))}catch{}}return null}function be(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ae(r);case 8:return r===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function De(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ze(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function jt(n){var r=ze(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,f=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,f.call(this,v)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function gs(n){n._valueTracker||(n._valueTracker=jt(n))}function Vo(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=ze(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function Lr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ys(n,r){var a=r.checked;return re({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function il(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=De(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function _s(n,r){r=r.checked,r!=null&&Te(n,"checked",r,!1)}function ki(n,r){_s(n,r);var a=De(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?ut(n,r.type,a):r.hasOwnProperty("defaultValue")&&ut(n,r.type,De(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Oo(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ut(n,r,a){(r!=="number"||Lr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var it=Array.isArray;function _n(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+De(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function Lo(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Mo(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(it(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:De(a)}}function sl(n,r){var a=De(r.value),c=De(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Mr(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function bo(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vs(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?bo(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var br,ol=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(br=br||document.createElement("div"),br.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=br.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Ni(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var Fr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},al=["Webkit","ms","Moz","O"];Object.keys(Fr).forEach(function(n){al.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Fr[r]=Fr[n]})});function Ur(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Fr.hasOwnProperty(n)&&Fr[n]?(""+r).trim():r+"px"}function Es(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Ur(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Fo=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vn(n,r){if(r){if(Fo[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function ws(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jr=null;function Ts(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var sr=null,or=null,tt=null;function Uo(n){if(n=da(n)){if(typeof sr!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Ol(r),sr(n.stateNode,n.type,r))}}function zr(n){or?tt?tt.push(n):tt=[n]:or=n}function Br(){if(or){var n=or,r=tt;if(tt=or=null,Uo(n),r)for(n=0;n<r.length;n++)Uo(r[n])}}function ll(n,r){return n(r)}function ul(){}var On=!1;function cl(n,r,a){if(On)return n(r,a);On=!0;try{return ll(n,r,a)}finally{On=!1,(or!==null||tt!==null)&&(ul(),Br())}}function xi(n,r){var a=n.stateNode;if(a===null)return null;var c=Ol(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var $r=!1;if(m)try{var qr={};Object.defineProperty(qr,"passive",{get:function(){$r=!0}}),window.addEventListener("test",qr,qr),window.removeEventListener("test",qr,qr)}catch{$r=!1}function hl(n,r,a,c,d,f,v,T,C){var U=Array.prototype.slice.call(arguments,3);try{r.apply(a,U)}catch(W){this.onError(W)}}var ar=!1,Ln=null,Is=!1,ln=null,dl={onError:function(n){ar=!0,Ln=n}};function fl(n,r,a,c,d,f,v,T,C){ar=!1,Ln=null,hl.apply(dl,arguments)}function jo(n,r,a,c,d,f,v,T,C){if(fl.apply(this,arguments),ar){if(ar){var U=Ln;ar=!1,Ln=null}else throw Error(t(198));Is||(Is=!0,ln=U)}}function En(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function zo(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function pl(n){if(En(n)!==n)throw Error(t(188))}function ml(n){var r=n.alternate;if(!r){if(r=En(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var f=d.alternate;if(f===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===a)return pl(d),n;if(f===c)return pl(d),r;f=f.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=f;else{for(var v=!1,T=d.child;T;){if(T===a){v=!0,a=d,c=f;break}if(T===c){v=!0,c=d,a=f;break}T=T.sibling}if(!v){for(T=f.child;T;){if(T===a){v=!0,a=f,c=d;break}if(T===c){v=!0,c=f,a=d;break}T=T.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function gl(n){return n=ml(n),n!==null?Di(n):null}function Di(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Di(n);if(r!==null)return r;n=n.sibling}return null}var Bo=e.unstable_scheduleCallback,Ss=e.unstable_cancelCallback,Vi=e.unstable_shouldYield,lr=e.unstable_requestPaint,Ge=e.unstable_now,Sc=e.unstable_getCurrentPriorityLevel,As=e.unstable_ImmediatePriority,$o=e.unstable_UserBlockingPriority,Oi=e.unstable_NormalPriority,qo=e.unstable_LowPriority,Rs=e.unstable_IdlePriority,Li=null,Jt=null;function yl(n){if(Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(Li,n,void 0,(n.current.flags&128)===128)}catch{}}var Xt=Math.clz32?Math.clz32:Mi,Mn=Math.log,un=Math.LN2;function Mi(n){return n>>>=0,n===0?32:31-(Mn(n)/un|0)|0}var bn=64,Hr=4194304;function Me(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ur(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,f=n.pingedLanes,v=a&268435455;if(v!==0){var T=v&~d;T!==0?c=Me(T):(f&=v,f!==0&&(c=Me(f)))}else v=a&~d,v!==0?c=Me(v):f!==0&&(c=Me(f));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,f=r&-r,d>=f||d===16&&(f&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-Xt(r),d=1<<a,c|=n[a],r&=~d;return c}function bi(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fi(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,f=n.pendingLanes;0<f;){var v=31-Xt(f),T=1<<v,C=d[v];C===-1?((T&a)===0||(T&c)!==0)&&(d[v]=bi(T,r)):C<=r&&(n.expiredLanes|=T),f&=~T}}function Ho(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Wo(){var n=bn;return bn<<=1,(bn&4194240)===0&&(bn=64),n}function Go(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Ui(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Xt(r),n[r]=a}function Ac(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Xt(a),f=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~f}}function Ko(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-Xt(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var ke=0;function Fn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Qo,Cs,Yo,Jo,Xo,Un=!1,Ps=[],jn=null,zn=null,At=null,ji=new Map,cr=new Map,Zt=[],_l="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wr(n,r){switch(n){case"focusin":case"focusout":jn=null;break;case"dragenter":case"dragleave":zn=null;break;case"mouseover":case"mouseout":At=null;break;case"pointerover":case"pointerout":ji.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":cr.delete(r.pointerId)}}function wn(n,r,a,c,d,f){return n===null||n.nativeEvent!==f?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:f,targetContainers:[d]},r!==null&&(r=da(r),r!==null&&Cs(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function vl(n,r,a,c,d){switch(r){case"focusin":return jn=wn(jn,n,r,a,c,d),!0;case"dragenter":return zn=wn(zn,n,r,a,c,d),!0;case"mouseover":return At=wn(At,n,r,a,c,d),!0;case"pointerover":var f=d.pointerId;return ji.set(f,wn(ji.get(f)||null,n,r,a,c,d)),!0;case"gotpointercapture":return f=d.pointerId,cr.set(f,wn(cr.get(f)||null,n,r,a,c,d)),!0}return!1}function ks(n){var r=qi(n.target);if(r!==null){var a=En(r);if(a!==null){if(r=a.tag,r===13){if(r=zo(a),r!==null){n.blockedOn=r,Xo(n.priority,function(){Yo(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Be(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=Ns(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);jr=c,a.target.dispatchEvent(c),jr=null}else return r=da(a),r!==null&&Cs(r),n.blockedOn=a,!1;r.shift()}return!0}function El(n,r,a){Be(n)&&a.delete(r)}function Rc(){Un=!1,jn!==null&&Be(jn)&&(jn=null),zn!==null&&Be(zn)&&(zn=null),At!==null&&Be(At)&&(At=null),ji.forEach(El),cr.forEach(El)}function Gr(n,r){n.blockedOn===r&&(n.blockedOn=null,Un||(Un=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Rc)))}function Kr(n){function r(d){return Gr(d,n)}if(0<Ps.length){Gr(Ps[0],n);for(var a=1;a<Ps.length;a++){var c=Ps[a];c.blockedOn===n&&(c.blockedOn=null)}}for(jn!==null&&Gr(jn,n),zn!==null&&Gr(zn,n),At!==null&&Gr(At,n),ji.forEach(r),cr.forEach(r),a=0;a<Zt.length;a++)c=Zt[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Zt.length&&(a=Zt[0],a.blockedOn===null);)ks(a),a.blockedOn===null&&Zt.shift()}var hr=Ne.ReactCurrentBatchConfig,dr=!0;function Bn(n,r,a,c){var d=ke,f=hr.transition;hr.transition=null;try{ke=1,Zo(n,r,a,c)}finally{ke=d,hr.transition=f}}function wl(n,r,a,c){var d=ke,f=hr.transition;hr.transition=null;try{ke=4,Zo(n,r,a,c)}finally{ke=d,hr.transition=f}}function Zo(n,r,a,c){if(dr){var d=Ns(n,r,a,c);if(d===null)bc(n,r,c,$n,a),Wr(n,c);else if(vl(d,n,r,a,c))c.stopPropagation();else if(Wr(n,c),r&4&&-1<_l.indexOf(n)){for(;d!==null;){var f=da(d);if(f!==null&&Qo(f),f=Ns(n,r,a,c),f===null&&bc(n,r,c,$n,a),f===d)break;d=f}d!==null&&c.stopPropagation()}else bc(n,r,c,null,a)}}var $n=null;function Ns(n,r,a,c){if($n=null,n=Ts(c),n=qi(n),n!==null)if(r=En(n),r===null)n=null;else if(a=r.tag,a===13){if(n=zo(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return $n=n,null}function xs(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sc()){case As:return 1;case $o:return 4;case Oi:case qo:return 16;case Rs:return 536870912;default:return 16}default:return 16}}var en=null,Ds=null,fr=null;function Tl(){if(fr)return fr;var n,r=Ds,a=r.length,c,d="value"in en?en.value:en.textContent,f=d.length;for(n=0;n<a&&r[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&r[a-c]===d[f-c];c++);return fr=d.slice(n,1<c?1-c:void 0)}function zi(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function qn(){return!0}function ea(){return!1}function xt(n){function r(a,c,d,f,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?qn:ea,this.isPropagationStopped=ea,this}return re(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=qn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=qn)},persist:function(){},isPersistent:qn}),r}var Hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bi=xt(Hn),Qr=re({},Hn,{view:0,detail:0}),Vs=xt(Qr),Os,Ls,tn,$i=re({},Qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ge,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==tn&&(tn&&n.type==="mousemove"?(Os=n.screenX-tn.screenX,Ls=n.screenY-tn.screenY):Ls=Os=0,tn=n),Os)},movementY:function(n){return"movementY"in n?n.movementY:Ls}}),ta=xt($i),Il=re({},$i,{dataTransfer:0}),Sl=xt(Il),Ms=re({},Qr,{relatedTarget:0}),Rt=xt(Ms),Al=re({},Hn,{animationName:0,elapsedTime:0,pseudoElement:0}),Rl=xt(Al),Yr=re({},Hn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),l=xt(Yr),p=re({},Hn,{data:0}),g=xt(p),E={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=j[n])?!!r[n]:!1}function ge(){return X}var st=re({},Qr,{key:function(n){if(n.key){var r=E[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=zi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?M[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ge,charCode:function(n){return n.type==="keypress"?zi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?zi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Ue=xt(st),ct=re({},$i,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nn=xt(ct),pr=re({},Qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ge}),Wn=xt(pr),Gn=re({},Hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),bs=xt(Gn),na=re({},$i,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),aE=xt(na),lE=[9,13,27,32],Cc=m&&"CompositionEvent"in window,ra=null;m&&"documentMode"in document&&(ra=document.documentMode);var uE=m&&"TextEvent"in window&&!ra,Nf=m&&(!Cc||ra&&8<ra&&11>=ra),xf=" ",Df=!1;function Vf(n,r){switch(n){case"keyup":return lE.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Of(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Fs=!1;function cE(n,r){switch(n){case"compositionend":return Of(r);case"keypress":return r.which!==32?null:(Df=!0,xf);case"textInput":return n=r.data,n===xf&&Df?null:n;default:return null}}function hE(n,r){if(Fs)return n==="compositionend"||!Cc&&Vf(n,r)?(n=Tl(),fr=Ds=en=null,Fs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Nf&&r.locale!=="ko"?null:r.data;default:return null}}var dE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!dE[n.type]:r==="textarea"}function Mf(n,r,a,c){zr(c),r=xl(r,"onChange"),0<r.length&&(a=new Bi("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var ia=null,sa=null;function fE(n){ep(n,0)}function Cl(n){var r=$s(n);if(Vo(r))return n}function pE(n,r){if(n==="change")return r}var bf=!1;if(m){var Pc;if(m){var kc="oninput"in document;if(!kc){var Ff=document.createElement("div");Ff.setAttribute("oninput","return;"),kc=typeof Ff.oninput=="function"}Pc=kc}else Pc=!1;bf=Pc&&(!document.documentMode||9<document.documentMode)}function Uf(){ia&&(ia.detachEvent("onpropertychange",jf),sa=ia=null)}function jf(n){if(n.propertyName==="value"&&Cl(sa)){var r=[];Mf(r,sa,n,Ts(n)),cl(fE,r)}}function mE(n,r,a){n==="focusin"?(Uf(),ia=r,sa=a,ia.attachEvent("onpropertychange",jf)):n==="focusout"&&Uf()}function gE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Cl(sa)}function yE(n,r){if(n==="click")return Cl(r)}function _E(n,r){if(n==="input"||n==="change")return Cl(r)}function vE(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Tn=typeof Object.is=="function"?Object.is:vE;function oa(n,r){if(Tn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!y.call(r,d)||!Tn(n[d],r[d]))return!1}return!0}function zf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Bf(n,r){var a=zf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=zf(a)}}function $f(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?$f(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function qf(){for(var n=window,r=Lr();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Lr(n.document)}return r}function Nc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function EE(n){var r=qf(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&$f(a.ownerDocument.documentElement,a)){if(c!==null&&Nc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,f=Math.min(c.start,d);c=c.end===void 0?f:Math.min(c.end,d),!n.extend&&f>c&&(d=c,c=f,f=d),d=Bf(a,f);var v=Bf(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),f>c?(n.addRange(r),n.extend(v.node,v.offset)):(r.setEnd(v.node,v.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var wE=m&&"documentMode"in document&&11>=document.documentMode,Us=null,xc=null,aa=null,Dc=!1;function Hf(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Dc||Us==null||Us!==Lr(c)||(c=Us,"selectionStart"in c&&Nc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),aa&&oa(aa,c)||(aa=c,c=xl(xc,"onSelect"),0<c.length&&(r=new Bi("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=Us)))}function Pl(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var js={animationend:Pl("Animation","AnimationEnd"),animationiteration:Pl("Animation","AnimationIteration"),animationstart:Pl("Animation","AnimationStart"),transitionend:Pl("Transition","TransitionEnd")},Vc={},Wf={};m&&(Wf=document.createElement("div").style,"AnimationEvent"in window||(delete js.animationend.animation,delete js.animationiteration.animation,delete js.animationstart.animation),"TransitionEvent"in window||delete js.transitionend.transition);function kl(n){if(Vc[n])return Vc[n];if(!js[n])return n;var r=js[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Wf)return Vc[n]=r[a];return n}var Gf=kl("animationend"),Kf=kl("animationiteration"),Qf=kl("animationstart"),Yf=kl("transitionend"),Jf=new Map,Xf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jr(n,r){Jf.set(n,r),u(r,[n])}for(var Oc=0;Oc<Xf.length;Oc++){var Lc=Xf[Oc],TE=Lc.toLowerCase(),IE=Lc[0].toUpperCase()+Lc.slice(1);Jr(TE,"on"+IE)}Jr(Gf,"onAnimationEnd"),Jr(Kf,"onAnimationIteration"),Jr(Qf,"onAnimationStart"),Jr("dblclick","onDoubleClick"),Jr("focusin","onFocus"),Jr("focusout","onBlur"),Jr(Yf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var la="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),SE=new Set("cancel close invalid load scroll toggle".split(" ").concat(la));function Zf(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,jo(c,r,void 0,n),n.currentTarget=null}function ep(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var f=void 0;if(r)for(var v=c.length-1;0<=v;v--){var T=c[v],C=T.instance,U=T.currentTarget;if(T=T.listener,C!==f&&d.isPropagationStopped())break e;Zf(d,T,U),f=C}else for(v=0;v<c.length;v++){if(T=c[v],C=T.instance,U=T.currentTarget,T=T.listener,C!==f&&d.isPropagationStopped())break e;Zf(d,T,U),f=C}}}if(Is)throw n=ln,Is=!1,ln=null,n}function Ke(n,r){var a=r[$c];a===void 0&&(a=r[$c]=new Set);var c=n+"__bubble";a.has(c)||(tp(r,n,2,!1),a.add(c))}function Mc(n,r,a){var c=0;r&&(c|=4),tp(a,n,c,r)}var Nl="_reactListening"+Math.random().toString(36).slice(2);function ua(n){if(!n[Nl]){n[Nl]=!0,s.forEach(function(a){a!=="selectionchange"&&(SE.has(a)||Mc(a,!1,n),Mc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Nl]||(r[Nl]=!0,Mc("selectionchange",!1,r))}}function tp(n,r,a,c){switch(xs(r)){case 1:var d=Bn;break;case 4:d=wl;break;default:d=Zo}a=d.bind(null,r,a,n),d=void 0,!$r||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function bc(n,r,a,c,d){var f=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var T=c.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var C=v.tag;if((C===3||C===4)&&(C=v.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;v=v.return}for(;T!==null;){if(v=qi(T),v===null)return;if(C=v.tag,C===5||C===6){c=f=v;continue e}T=T.parentNode}}c=c.return}cl(function(){var U=f,W=Ts(a),Y=[];e:{var H=Jf.get(n);if(H!==void 0){var te=Bi,se=n;switch(n){case"keypress":if(zi(a)===0)break e;case"keydown":case"keyup":te=Ue;break;case"focusin":se="focus",te=Rt;break;case"focusout":se="blur",te=Rt;break;case"beforeblur":case"afterblur":te=Rt;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=ta;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=Sl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=Wn;break;case Gf:case Kf:case Qf:te=Rl;break;case Yf:te=bs;break;case"scroll":te=Vs;break;case"wheel":te=aE;break;case"copy":case"cut":case"paste":te=l;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=nn}var oe=(r&4)!==0,ot=!oe&&n==="scroll",L=oe?H!==null?H+"Capture":null:H;oe=[];for(var N=U,b;N!==null;){b=N;var J=b.stateNode;if(b.tag===5&&J!==null&&(b=J,L!==null&&(J=xi(N,L),J!=null&&oe.push(ca(N,J,b)))),ot)break;N=N.return}0<oe.length&&(H=new te(H,se,null,a,W),Y.push({event:H,listeners:oe}))}}if((r&7)===0){e:{if(H=n==="mouseover"||n==="pointerover",te=n==="mouseout"||n==="pointerout",H&&a!==jr&&(se=a.relatedTarget||a.fromElement)&&(qi(se)||se[mr]))break e;if((te||H)&&(H=W.window===W?W:(H=W.ownerDocument)?H.defaultView||H.parentWindow:window,te?(se=a.relatedTarget||a.toElement,te=U,se=se?qi(se):null,se!==null&&(ot=En(se),se!==ot||se.tag!==5&&se.tag!==6)&&(se=null)):(te=null,se=U),te!==se)){if(oe=ta,J="onMouseLeave",L="onMouseEnter",N="mouse",(n==="pointerout"||n==="pointerover")&&(oe=nn,J="onPointerLeave",L="onPointerEnter",N="pointer"),ot=te==null?H:$s(te),b=se==null?H:$s(se),H=new oe(J,N+"leave",te,a,W),H.target=ot,H.relatedTarget=b,J=null,qi(W)===U&&(oe=new oe(L,N+"enter",se,a,W),oe.target=b,oe.relatedTarget=ot,J=oe),ot=J,te&&se)t:{for(oe=te,L=se,N=0,b=oe;b;b=zs(b))N++;for(b=0,J=L;J;J=zs(J))b++;for(;0<N-b;)oe=zs(oe),N--;for(;0<b-N;)L=zs(L),b--;for(;N--;){if(oe===L||L!==null&&oe===L.alternate)break t;oe=zs(oe),L=zs(L)}oe=null}else oe=null;te!==null&&np(Y,H,te,oe,!1),se!==null&&ot!==null&&np(Y,ot,se,oe,!0)}}e:{if(H=U?$s(U):window,te=H.nodeName&&H.nodeName.toLowerCase(),te==="select"||te==="input"&&H.type==="file")var ae=pE;else if(Lf(H))if(bf)ae=_E;else{ae=gE;var ce=mE}else(te=H.nodeName)&&te.toLowerCase()==="input"&&(H.type==="checkbox"||H.type==="radio")&&(ae=yE);if(ae&&(ae=ae(n,U))){Mf(Y,ae,a,W);break e}ce&&ce(n,H,U),n==="focusout"&&(ce=H._wrapperState)&&ce.controlled&&H.type==="number"&&ut(H,"number",H.value)}switch(ce=U?$s(U):window,n){case"focusin":(Lf(ce)||ce.contentEditable==="true")&&(Us=ce,xc=U,aa=null);break;case"focusout":aa=xc=Us=null;break;case"mousedown":Dc=!0;break;case"contextmenu":case"mouseup":case"dragend":Dc=!1,Hf(Y,a,W);break;case"selectionchange":if(wE)break;case"keydown":case"keyup":Hf(Y,a,W)}var he;if(Cc)e:{switch(n){case"compositionstart":var fe="onCompositionStart";break e;case"compositionend":fe="onCompositionEnd";break e;case"compositionupdate":fe="onCompositionUpdate";break e}fe=void 0}else Fs?Vf(n,a)&&(fe="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(fe="onCompositionStart");fe&&(Nf&&a.locale!=="ko"&&(Fs||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&Fs&&(he=Tl()):(en=W,Ds="value"in en?en.value:en.textContent,Fs=!0)),ce=xl(U,fe),0<ce.length&&(fe=new g(fe,n,null,a,W),Y.push({event:fe,listeners:ce}),he?fe.data=he:(he=Of(a),he!==null&&(fe.data=he)))),(he=uE?cE(n,a):hE(n,a))&&(U=xl(U,"onBeforeInput"),0<U.length&&(W=new g("onBeforeInput","beforeinput",null,a,W),Y.push({event:W,listeners:U}),W.data=he))}ep(Y,r)})}function ca(n,r,a){return{instance:n,listener:r,currentTarget:a}}function xl(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,f=d.stateNode;d.tag===5&&f!==null&&(d=f,f=xi(n,a),f!=null&&c.unshift(ca(n,f,d)),f=xi(n,r),f!=null&&c.push(ca(n,f,d))),n=n.return}return c}function zs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function np(n,r,a,c,d){for(var f=r._reactName,v=[];a!==null&&a!==c;){var T=a,C=T.alternate,U=T.stateNode;if(C!==null&&C===c)break;T.tag===5&&U!==null&&(T=U,d?(C=xi(a,f),C!=null&&v.unshift(ca(a,C,T))):d||(C=xi(a,f),C!=null&&v.push(ca(a,C,T)))),a=a.return}v.length!==0&&n.push({event:r,listeners:v})}var AE=/\r\n?/g,RE=/\u0000|\uFFFD/g;function rp(n){return(typeof n=="string"?n:""+n).replace(AE,`
`).replace(RE,"")}function Dl(n,r,a){if(r=rp(r),rp(n)!==r&&a)throw Error(t(425))}function Vl(){}var Fc=null,Uc=null;function jc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var zc=typeof setTimeout=="function"?setTimeout:void 0,CE=typeof clearTimeout=="function"?clearTimeout:void 0,ip=typeof Promise=="function"?Promise:void 0,PE=typeof queueMicrotask=="function"?queueMicrotask:typeof ip<"u"?function(n){return ip.resolve(null).then(n).catch(kE)}:zc;function kE(n){setTimeout(function(){throw n})}function Bc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Kr(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Kr(r)}function Xr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function sp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var Bs=Math.random().toString(36).slice(2),Kn="__reactFiber$"+Bs,ha="__reactProps$"+Bs,mr="__reactContainer$"+Bs,$c="__reactEvents$"+Bs,NE="__reactListeners$"+Bs,xE="__reactHandles$"+Bs;function qi(n){var r=n[Kn];if(r)return r;for(var a=n.parentNode;a;){if(r=a[mr]||a[Kn]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=sp(n);n!==null;){if(a=n[Kn])return a;n=sp(n)}return r}n=a,a=n.parentNode}return null}function da(n){return n=n[Kn]||n[mr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function $s(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ol(n){return n[ha]||null}var qc=[],qs=-1;function Zr(n){return{current:n}}function Qe(n){0>qs||(n.current=qc[qs],qc[qs]=null,qs--)}function qe(n,r){qs++,qc[qs]=n.current,n.current=r}var ei={},Dt=Zr(ei),qt=Zr(!1),Hi=ei;function Hs(n,r){var a=n.type.contextTypes;if(!a)return ei;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},f;for(f in a)d[f]=r[f];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Ht(n){return n=n.childContextTypes,n!=null}function Ll(){Qe(qt),Qe(Dt)}function op(n,r,a){if(Dt.current!==ei)throw Error(t(168));qe(Dt,r),qe(qt,a)}function ap(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,be(n)||"Unknown",d));return re({},a,c)}function Ml(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ei,Hi=Dt.current,qe(Dt,n),qe(qt,qt.current),!0}function lp(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=ap(n,r,Hi),c.__reactInternalMemoizedMergedChildContext=n,Qe(qt),Qe(Dt),qe(Dt,n)):Qe(qt),qe(qt,a)}var gr=null,bl=!1,Hc=!1;function up(n){gr===null?gr=[n]:gr.push(n)}function DE(n){bl=!0,up(n)}function ti(){if(!Hc&&gr!==null){Hc=!0;var n=0,r=ke;try{var a=gr;for(ke=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}gr=null,bl=!1}catch(d){throw gr!==null&&(gr=gr.slice(n+1)),Bo(As,ti),d}finally{ke=r,Hc=!1}}return null}var Ws=[],Gs=0,Fl=null,Ul=0,cn=[],hn=0,Wi=null,yr=1,_r="";function Gi(n,r){Ws[Gs++]=Ul,Ws[Gs++]=Fl,Fl=n,Ul=r}function cp(n,r,a){cn[hn++]=yr,cn[hn++]=_r,cn[hn++]=Wi,Wi=n;var c=yr;n=_r;var d=32-Xt(c)-1;c&=~(1<<d),a+=1;var f=32-Xt(r)+d;if(30<f){var v=d-d%5;f=(c&(1<<v)-1).toString(32),c>>=v,d-=v,yr=1<<32-Xt(r)+d|a<<d|c,_r=f+n}else yr=1<<f|a<<d|c,_r=n}function Wc(n){n.return!==null&&(Gi(n,1),cp(n,1,0))}function Gc(n){for(;n===Fl;)Fl=Ws[--Gs],Ws[Gs]=null,Ul=Ws[--Gs],Ws[Gs]=null;for(;n===Wi;)Wi=cn[--hn],cn[hn]=null,_r=cn[--hn],cn[hn]=null,yr=cn[--hn],cn[hn]=null}var rn=null,sn=null,Je=!1,In=null;function hp(n,r){var a=mn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function dp(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,rn=n,sn=Xr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,rn=n,sn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Wi!==null?{id:yr,overflow:_r}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=mn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,rn=n,sn=null,!0):!1;default:return!1}}function Kc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Qc(n){if(Je){var r=sn;if(r){var a=r;if(!dp(n,r)){if(Kc(n))throw Error(t(418));r=Xr(a.nextSibling);var c=rn;r&&dp(n,r)?hp(c,a):(n.flags=n.flags&-4097|2,Je=!1,rn=n)}}else{if(Kc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Je=!1,rn=n}}}function fp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;rn=n}function jl(n){if(n!==rn)return!1;if(!Je)return fp(n),Je=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!jc(n.type,n.memoizedProps)),r&&(r=sn)){if(Kc(n))throw pp(),Error(t(418));for(;r;)hp(n,r),r=Xr(r.nextSibling)}if(fp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){sn=Xr(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}sn=null}}else sn=rn?Xr(n.stateNode.nextSibling):null;return!0}function pp(){for(var n=sn;n;)n=Xr(n.nextSibling)}function Ks(){sn=rn=null,Je=!1}function Yc(n){In===null?In=[n]:In.push(n)}var VE=Ne.ReactCurrentBatchConfig;function fa(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,f=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===f?r.ref:(r=function(v){var T=d.refs;v===null?delete T[f]:T[f]=v},r._stringRef=f,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function zl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function mp(n){var r=n._init;return r(n._payload)}function gp(n){function r(L,N){if(n){var b=L.deletions;b===null?(L.deletions=[N],L.flags|=16):b.push(N)}}function a(L,N){if(!n)return null;for(;N!==null;)r(L,N),N=N.sibling;return null}function c(L,N){for(L=new Map;N!==null;)N.key!==null?L.set(N.key,N):L.set(N.index,N),N=N.sibling;return L}function d(L,N){return L=ui(L,N),L.index=0,L.sibling=null,L}function f(L,N,b){return L.index=b,n?(b=L.alternate,b!==null?(b=b.index,b<N?(L.flags|=2,N):b):(L.flags|=2,N)):(L.flags|=1048576,N)}function v(L){return n&&L.alternate===null&&(L.flags|=2),L}function T(L,N,b,J){return N===null||N.tag!==6?(N=zh(b,L.mode,J),N.return=L,N):(N=d(N,b),N.return=L,N)}function C(L,N,b,J){var ae=b.type;return ae===P?W(L,N,b.props.children,J,b.key):N!==null&&(N.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===Nt&&mp(ae)===N.type)?(J=d(N,b.props),J.ref=fa(L,N,b),J.return=L,J):(J=hu(b.type,b.key,b.props,null,L.mode,J),J.ref=fa(L,N,b),J.return=L,J)}function U(L,N,b,J){return N===null||N.tag!==4||N.stateNode.containerInfo!==b.containerInfo||N.stateNode.implementation!==b.implementation?(N=Bh(b,L.mode,J),N.return=L,N):(N=d(N,b.children||[]),N.return=L,N)}function W(L,N,b,J,ae){return N===null||N.tag!==7?(N=ts(b,L.mode,J,ae),N.return=L,N):(N=d(N,b),N.return=L,N)}function Y(L,N,b){if(typeof N=="string"&&N!==""||typeof N=="number")return N=zh(""+N,L.mode,b),N.return=L,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case je:return b=hu(N.type,N.key,N.props,null,L.mode,b),b.ref=fa(L,null,N),b.return=L,b;case Oe:return N=Bh(N,L.mode,b),N.return=L,N;case Nt:var J=N._init;return Y(L,J(N._payload),b)}if(it(N)||ue(N))return N=ts(N,L.mode,b,null),N.return=L,N;zl(L,N)}return null}function H(L,N,b,J){var ae=N!==null?N.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return ae!==null?null:T(L,N,""+b,J);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case je:return b.key===ae?C(L,N,b,J):null;case Oe:return b.key===ae?U(L,N,b,J):null;case Nt:return ae=b._init,H(L,N,ae(b._payload),J)}if(it(b)||ue(b))return ae!==null?null:W(L,N,b,J,null);zl(L,b)}return null}function te(L,N,b,J,ae){if(typeof J=="string"&&J!==""||typeof J=="number")return L=L.get(b)||null,T(N,L,""+J,ae);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case je:return L=L.get(J.key===null?b:J.key)||null,C(N,L,J,ae);case Oe:return L=L.get(J.key===null?b:J.key)||null,U(N,L,J,ae);case Nt:var ce=J._init;return te(L,N,b,ce(J._payload),ae)}if(it(J)||ue(J))return L=L.get(b)||null,W(N,L,J,ae,null);zl(N,J)}return null}function se(L,N,b,J){for(var ae=null,ce=null,he=N,fe=N=0,wt=null;he!==null&&fe<b.length;fe++){he.index>fe?(wt=he,he=null):wt=he.sibling;var Le=H(L,he,b[fe],J);if(Le===null){he===null&&(he=wt);break}n&&he&&Le.alternate===null&&r(L,he),N=f(Le,N,fe),ce===null?ae=Le:ce.sibling=Le,ce=Le,he=wt}if(fe===b.length)return a(L,he),Je&&Gi(L,fe),ae;if(he===null){for(;fe<b.length;fe++)he=Y(L,b[fe],J),he!==null&&(N=f(he,N,fe),ce===null?ae=he:ce.sibling=he,ce=he);return Je&&Gi(L,fe),ae}for(he=c(L,he);fe<b.length;fe++)wt=te(he,L,fe,b[fe],J),wt!==null&&(n&&wt.alternate!==null&&he.delete(wt.key===null?fe:wt.key),N=f(wt,N,fe),ce===null?ae=wt:ce.sibling=wt,ce=wt);return n&&he.forEach(function(ci){return r(L,ci)}),Je&&Gi(L,fe),ae}function oe(L,N,b,J){var ae=ue(b);if(typeof ae!="function")throw Error(t(150));if(b=ae.call(b),b==null)throw Error(t(151));for(var ce=ae=null,he=N,fe=N=0,wt=null,Le=b.next();he!==null&&!Le.done;fe++,Le=b.next()){he.index>fe?(wt=he,he=null):wt=he.sibling;var ci=H(L,he,Le.value,J);if(ci===null){he===null&&(he=wt);break}n&&he&&ci.alternate===null&&r(L,he),N=f(ci,N,fe),ce===null?ae=ci:ce.sibling=ci,ce=ci,he=wt}if(Le.done)return a(L,he),Je&&Gi(L,fe),ae;if(he===null){for(;!Le.done;fe++,Le=b.next())Le=Y(L,Le.value,J),Le!==null&&(N=f(Le,N,fe),ce===null?ae=Le:ce.sibling=Le,ce=Le);return Je&&Gi(L,fe),ae}for(he=c(L,he);!Le.done;fe++,Le=b.next())Le=te(he,L,fe,Le.value,J),Le!==null&&(n&&Le.alternate!==null&&he.delete(Le.key===null?fe:Le.key),N=f(Le,N,fe),ce===null?ae=Le:ce.sibling=Le,ce=Le);return n&&he.forEach(function(dw){return r(L,dw)}),Je&&Gi(L,fe),ae}function ot(L,N,b,J){if(typeof b=="object"&&b!==null&&b.type===P&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case je:e:{for(var ae=b.key,ce=N;ce!==null;){if(ce.key===ae){if(ae=b.type,ae===P){if(ce.tag===7){a(L,ce.sibling),N=d(ce,b.props.children),N.return=L,L=N;break e}}else if(ce.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===Nt&&mp(ae)===ce.type){a(L,ce.sibling),N=d(ce,b.props),N.ref=fa(L,ce,b),N.return=L,L=N;break e}a(L,ce);break}else r(L,ce);ce=ce.sibling}b.type===P?(N=ts(b.props.children,L.mode,J,b.key),N.return=L,L=N):(J=hu(b.type,b.key,b.props,null,L.mode,J),J.ref=fa(L,N,b),J.return=L,L=J)}return v(L);case Oe:e:{for(ce=b.key;N!==null;){if(N.key===ce)if(N.tag===4&&N.stateNode.containerInfo===b.containerInfo&&N.stateNode.implementation===b.implementation){a(L,N.sibling),N=d(N,b.children||[]),N.return=L,L=N;break e}else{a(L,N);break}else r(L,N);N=N.sibling}N=Bh(b,L.mode,J),N.return=L,L=N}return v(L);case Nt:return ce=b._init,ot(L,N,ce(b._payload),J)}if(it(b))return se(L,N,b,J);if(ue(b))return oe(L,N,b,J);zl(L,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,N!==null&&N.tag===6?(a(L,N.sibling),N=d(N,b),N.return=L,L=N):(a(L,N),N=zh(b,L.mode,J),N.return=L,L=N),v(L)):a(L,N)}return ot}var Qs=gp(!0),yp=gp(!1),Bl=Zr(null),$l=null,Ys=null,Jc=null;function Xc(){Jc=Ys=$l=null}function Zc(n){var r=Bl.current;Qe(Bl),n._currentValue=r}function eh(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function Js(n,r){$l=n,Jc=Ys=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Wt=!0),n.firstContext=null)}function dn(n){var r=n._currentValue;if(Jc!==n)if(n={context:n,memoizedValue:r,next:null},Ys===null){if($l===null)throw Error(t(308));Ys=n,$l.dependencies={lanes:0,firstContext:n}}else Ys=Ys.next=n;return r}var Ki=null;function th(n){Ki===null?Ki=[n]:Ki.push(n)}function _p(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,th(r)):(a.next=d.next,d.next=a),r.interleaved=a,vr(n,c)}function vr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ni=!1;function nh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Er(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function ri(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ve&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,vr(n,a)}return d=c.interleaved,d===null?(r.next=r,th(c)):(r.next=d.next,d.next=r),c.interleaved=r,vr(n,a)}function ql(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Ko(n,a)}}function Ep(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};f===null?d=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?d=f=r:f=f.next=r}else d=f=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function Hl(n,r,a,c){var d=n.updateQueue;ni=!1;var f=d.firstBaseUpdate,v=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var C=T,U=C.next;C.next=null,v===null?f=U:v.next=U,v=C;var W=n.alternate;W!==null&&(W=W.updateQueue,T=W.lastBaseUpdate,T!==v&&(T===null?W.firstBaseUpdate=U:T.next=U,W.lastBaseUpdate=C))}if(f!==null){var Y=d.baseState;v=0,W=U=C=null,T=f;do{var H=T.lane,te=T.eventTime;if((c&H)===H){W!==null&&(W=W.next={eventTime:te,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var se=n,oe=T;switch(H=r,te=a,oe.tag){case 1:if(se=oe.payload,typeof se=="function"){Y=se.call(te,Y,H);break e}Y=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=oe.payload,H=typeof se=="function"?se.call(te,Y,H):se,H==null)break e;Y=re({},Y,H);break e;case 2:ni=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,H=d.effects,H===null?d.effects=[T]:H.push(T))}else te={eventTime:te,lane:H,tag:T.tag,payload:T.payload,callback:T.callback,next:null},W===null?(U=W=te,C=Y):W=W.next=te,v|=H;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;H=T,T=H.next,H.next=null,d.lastBaseUpdate=H,d.shared.pending=null}}while(!0);if(W===null&&(C=Y),d.baseState=C,d.firstBaseUpdate=U,d.lastBaseUpdate=W,r=d.shared.interleaved,r!==null){d=r;do v|=d.lane,d=d.next;while(d!==r)}else f===null&&(d.shared.lanes=0);Ji|=v,n.lanes=v,n.memoizedState=Y}}function wp(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var pa={},Qn=Zr(pa),ma=Zr(pa),ga=Zr(pa);function Qi(n){if(n===pa)throw Error(t(174));return n}function rh(n,r){switch(qe(ga,r),qe(ma,n),qe(Qn,pa),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:vs(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=vs(r,n)}Qe(Qn),qe(Qn,r)}function Xs(){Qe(Qn),Qe(ma),Qe(ga)}function Tp(n){Qi(ga.current);var r=Qi(Qn.current),a=vs(r,n.type);r!==a&&(qe(ma,n),qe(Qn,a))}function ih(n){ma.current===n&&(Qe(Qn),Qe(ma))}var Xe=Zr(0);function Wl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var sh=[];function oh(){for(var n=0;n<sh.length;n++)sh[n]._workInProgressVersionPrimary=null;sh.length=0}var Gl=Ne.ReactCurrentDispatcher,ah=Ne.ReactCurrentBatchConfig,Yi=0,Ze=null,mt=null,vt=null,Kl=!1,ya=!1,_a=0,OE=0;function Vt(){throw Error(t(321))}function lh(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!Tn(n[a],r[a]))return!1;return!0}function uh(n,r,a,c,d,f){if(Yi=f,Ze=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Gl.current=n===null||n.memoizedState===null?FE:UE,n=a(c,d),ya){f=0;do{if(ya=!1,_a=0,25<=f)throw Error(t(301));f+=1,vt=mt=null,r.updateQueue=null,Gl.current=jE,n=a(c,d)}while(ya)}if(Gl.current=Jl,r=mt!==null&&mt.next!==null,Yi=0,vt=mt=Ze=null,Kl=!1,r)throw Error(t(300));return n}function ch(){var n=_a!==0;return _a=0,n}function Yn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?Ze.memoizedState=vt=n:vt=vt.next=n,vt}function fn(){if(mt===null){var n=Ze.alternate;n=n!==null?n.memoizedState:null}else n=mt.next;var r=vt===null?Ze.memoizedState:vt.next;if(r!==null)vt=r,mt=n;else{if(n===null)throw Error(t(310));mt=n,n={memoizedState:mt.memoizedState,baseState:mt.baseState,baseQueue:mt.baseQueue,queue:mt.queue,next:null},vt===null?Ze.memoizedState=vt=n:vt=vt.next=n}return vt}function va(n,r){return typeof r=="function"?r(n):r}function hh(n){var r=fn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=mt,d=c.baseQueue,f=a.pending;if(f!==null){if(d!==null){var v=d.next;d.next=f.next,f.next=v}c.baseQueue=d=f,a.pending=null}if(d!==null){f=d.next,c=c.baseState;var T=v=null,C=null,U=f;do{var W=U.lane;if((Yi&W)===W)C!==null&&(C=C.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),c=U.hasEagerState?U.eagerState:n(c,U.action);else{var Y={lane:W,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};C===null?(T=C=Y,v=c):C=C.next=Y,Ze.lanes|=W,Ji|=W}U=U.next}while(U!==null&&U!==f);C===null?v=c:C.next=T,Tn(c,r.memoizedState)||(Wt=!0),r.memoizedState=c,r.baseState=v,r.baseQueue=C,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do f=d.lane,Ze.lanes|=f,Ji|=f,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function dh(n){var r=fn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,f=r.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do f=n(f,v.action),v=v.next;while(v!==d);Tn(f,r.memoizedState)||(Wt=!0),r.memoizedState=f,r.baseQueue===null&&(r.baseState=f),a.lastRenderedState=f}return[f,c]}function Ip(){}function Sp(n,r){var a=Ze,c=fn(),d=r(),f=!Tn(c.memoizedState,d);if(f&&(c.memoizedState=d,Wt=!0),c=c.queue,fh(Cp.bind(null,a,c,n),[n]),c.getSnapshot!==r||f||vt!==null&&vt.memoizedState.tag&1){if(a.flags|=2048,Ea(9,Rp.bind(null,a,c,d,r),void 0,null),Et===null)throw Error(t(349));(Yi&30)!==0||Ap(a,r,d)}return d}function Ap(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Ze.updateQueue,r===null?(r={lastEffect:null,stores:null},Ze.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function Rp(n,r,a,c){r.value=a,r.getSnapshot=c,Pp(r)&&kp(n)}function Cp(n,r,a){return a(function(){Pp(r)&&kp(n)})}function Pp(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!Tn(n,a)}catch{return!0}}function kp(n){var r=vr(n,1);r!==null&&Cn(r,n,1,-1)}function Np(n){var r=Yn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:n},r.queue=n,n=n.dispatch=bE.bind(null,Ze,n),[r.memoizedState,n]}function Ea(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=Ze.updateQueue,r===null?(r={lastEffect:null,stores:null},Ze.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function xp(){return fn().memoizedState}function Ql(n,r,a,c){var d=Yn();Ze.flags|=n,d.memoizedState=Ea(1|r,a,void 0,c===void 0?null:c)}function Yl(n,r,a,c){var d=fn();c=c===void 0?null:c;var f=void 0;if(mt!==null){var v=mt.memoizedState;if(f=v.destroy,c!==null&&lh(c,v.deps)){d.memoizedState=Ea(r,a,f,c);return}}Ze.flags|=n,d.memoizedState=Ea(1|r,a,f,c)}function Dp(n,r){return Ql(8390656,8,n,r)}function fh(n,r){return Yl(2048,8,n,r)}function Vp(n,r){return Yl(4,2,n,r)}function Op(n,r){return Yl(4,4,n,r)}function Lp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Mp(n,r,a){return a=a!=null?a.concat([n]):null,Yl(4,4,Lp.bind(null,r,n),a)}function ph(){}function bp(n,r){var a=fn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&lh(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function Fp(n,r){var a=fn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&lh(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function Up(n,r,a){return(Yi&21)===0?(n.baseState&&(n.baseState=!1,Wt=!0),n.memoizedState=a):(Tn(a,r)||(a=Wo(),Ze.lanes|=a,Ji|=a,n.baseState=!0),r)}function LE(n,r){var a=ke;ke=a!==0&&4>a?a:4,n(!0);var c=ah.transition;ah.transition={};try{n(!1),r()}finally{ke=a,ah.transition=c}}function jp(){return fn().memoizedState}function ME(n,r,a){var c=ai(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},zp(n))Bp(r,a);else if(a=_p(n,r,a,c),a!==null){var d=Bt();Cn(a,n,c,d),$p(a,r,c)}}function bE(n,r,a){var c=ai(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(zp(n))Bp(r,d);else{var f=n.alternate;if(n.lanes===0&&(f===null||f.lanes===0)&&(f=r.lastRenderedReducer,f!==null))try{var v=r.lastRenderedState,T=f(v,a);if(d.hasEagerState=!0,d.eagerState=T,Tn(T,v)){var C=r.interleaved;C===null?(d.next=d,th(r)):(d.next=C.next,C.next=d),r.interleaved=d;return}}catch{}finally{}a=_p(n,r,d,c),a!==null&&(d=Bt(),Cn(a,n,c,d),$p(a,r,c))}}function zp(n){var r=n.alternate;return n===Ze||r!==null&&r===Ze}function Bp(n,r){ya=Kl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function $p(n,r,a){if((a&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Ko(n,a)}}var Jl={readContext:dn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},FE={readContext:dn,useCallback:function(n,r){return Yn().memoizedState=[n,r===void 0?null:r],n},useContext:dn,useEffect:Dp,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,Ql(4194308,4,Lp.bind(null,r,n),a)},useLayoutEffect:function(n,r){return Ql(4194308,4,n,r)},useInsertionEffect:function(n,r){return Ql(4,2,n,r)},useMemo:function(n,r){var a=Yn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=Yn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=ME.bind(null,Ze,n),[c.memoizedState,n]},useRef:function(n){var r=Yn();return n={current:n},r.memoizedState=n},useState:Np,useDebugValue:ph,useDeferredValue:function(n){return Yn().memoizedState=n},useTransition:function(){var n=Np(!1),r=n[0];return n=LE.bind(null,n[1]),Yn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=Ze,d=Yn();if(Je){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),Et===null)throw Error(t(349));(Yi&30)!==0||Ap(c,r,a)}d.memoizedState=a;var f={value:a,getSnapshot:r};return d.queue=f,Dp(Cp.bind(null,c,f,n),[n]),c.flags|=2048,Ea(9,Rp.bind(null,c,f,a,r),void 0,null),a},useId:function(){var n=Yn(),r=Et.identifierPrefix;if(Je){var a=_r,c=yr;a=(c&~(1<<32-Xt(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=_a++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=OE++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},UE={readContext:dn,useCallback:bp,useContext:dn,useEffect:fh,useImperativeHandle:Mp,useInsertionEffect:Vp,useLayoutEffect:Op,useMemo:Fp,useReducer:hh,useRef:xp,useState:function(){return hh(va)},useDebugValue:ph,useDeferredValue:function(n){var r=fn();return Up(r,mt.memoizedState,n)},useTransition:function(){var n=hh(va)[0],r=fn().memoizedState;return[n,r]},useMutableSource:Ip,useSyncExternalStore:Sp,useId:jp,unstable_isNewReconciler:!1},jE={readContext:dn,useCallback:bp,useContext:dn,useEffect:fh,useImperativeHandle:Mp,useInsertionEffect:Vp,useLayoutEffect:Op,useMemo:Fp,useReducer:dh,useRef:xp,useState:function(){return dh(va)},useDebugValue:ph,useDeferredValue:function(n){var r=fn();return mt===null?r.memoizedState=n:Up(r,mt.memoizedState,n)},useTransition:function(){var n=dh(va)[0],r=fn().memoizedState;return[n,r]},useMutableSource:Ip,useSyncExternalStore:Sp,useId:jp,unstable_isNewReconciler:!1};function Sn(n,r){if(n&&n.defaultProps){r=re({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function mh(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:re({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Xl={isMounted:function(n){return(n=n._reactInternals)?En(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=Bt(),d=ai(n),f=Er(c,d);f.payload=r,a!=null&&(f.callback=a),r=ri(n,f,d),r!==null&&(Cn(r,n,d,c),ql(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=Bt(),d=ai(n),f=Er(c,d);f.tag=1,f.payload=r,a!=null&&(f.callback=a),r=ri(n,f,d),r!==null&&(Cn(r,n,d,c),ql(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Bt(),c=ai(n),d=Er(a,c);d.tag=2,r!=null&&(d.callback=r),r=ri(n,d,c),r!==null&&(Cn(r,n,c,a),ql(r,n,c))}};function qp(n,r,a,c,d,f,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,f,v):r.prototype&&r.prototype.isPureReactComponent?!oa(a,c)||!oa(d,f):!0}function Hp(n,r,a){var c=!1,d=ei,f=r.contextType;return typeof f=="object"&&f!==null?f=dn(f):(d=Ht(r)?Hi:Dt.current,c=r.contextTypes,f=(c=c!=null)?Hs(n,d):ei),r=new r(a,f),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Xl,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=f),r}function Wp(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&Xl.enqueueReplaceState(r,r.state,null)}function gh(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},nh(n);var f=r.contextType;typeof f=="object"&&f!==null?d.context=dn(f):(f=Ht(r)?Hi:Dt.current,d.context=Hs(n,f)),d.state=n.memoizedState,f=r.getDerivedStateFromProps,typeof f=="function"&&(mh(n,r,f,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Xl.enqueueReplaceState(d,d.state,null),Hl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Zs(n,r){try{var a="",c=r;do a+=Se(c),c=c.return;while(c);var d=a}catch(f){d=`
Error generating stack: `+f.message+`
`+f.stack}return{value:n,source:r,stack:d,digest:null}}function yh(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function _h(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var zE=typeof WeakMap=="function"?WeakMap:Map;function Gp(n,r,a){a=Er(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){su||(su=!0,Vh=c),_h(n,r)},a}function Kp(n,r,a){a=Er(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){_h(n,r)}}var f=n.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(a.callback=function(){_h(n,r),typeof c!="function"&&(si===null?si=new Set([this]):si.add(this));var v=r.stack;this.componentDidCatch(r.value,{componentStack:v!==null?v:""})}),a}function Qp(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new zE;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=tw.bind(null,n,r,a),r.then(n,n))}function Yp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Jp(n,r,a,c,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=Er(-1,1),r.tag=2,ri(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var BE=Ne.ReactCurrentOwner,Wt=!1;function zt(n,r,a,c){r.child=n===null?yp(r,null,a,c):Qs(r,n.child,a,c)}function Xp(n,r,a,c,d){a=a.render;var f=r.ref;return Js(r,d),c=uh(n,r,a,c,f,d),a=ch(),n!==null&&!Wt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,wr(n,r,d)):(Je&&a&&Wc(r),r.flags|=1,zt(n,r,c,d),r.child)}function Zp(n,r,a,c,d){if(n===null){var f=a.type;return typeof f=="function"&&!jh(f)&&f.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=f,em(n,r,f,c,d)):(n=hu(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(f=n.child,(n.lanes&d)===0){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:oa,a(v,c)&&n.ref===r.ref)return wr(n,r,d)}return r.flags|=1,n=ui(f,c),n.ref=r.ref,n.return=r,r.child=n}function em(n,r,a,c,d){if(n!==null){var f=n.memoizedProps;if(oa(f,c)&&n.ref===r.ref)if(Wt=!1,r.pendingProps=c=f,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Wt=!0);else return r.lanes=n.lanes,wr(n,r,d)}return vh(n,r,a,c,d)}function tm(n,r,a){var c=r.pendingProps,d=c.children,f=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},qe(to,on),on|=a;else{if((a&1073741824)===0)return n=f!==null?f.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,qe(to,on),on|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=f!==null?f.baseLanes:a,qe(to,on),on|=c}else f!==null?(c=f.baseLanes|a,r.memoizedState=null):c=a,qe(to,on),on|=c;return zt(n,r,d,a),r.child}function nm(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function vh(n,r,a,c,d){var f=Ht(a)?Hi:Dt.current;return f=Hs(r,f),Js(r,d),a=uh(n,r,a,c,f,d),c=ch(),n!==null&&!Wt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,wr(n,r,d)):(Je&&c&&Wc(r),r.flags|=1,zt(n,r,a,d),r.child)}function rm(n,r,a,c,d){if(Ht(a)){var f=!0;Ml(r)}else f=!1;if(Js(r,d),r.stateNode===null)eu(n,r),Hp(r,a,c),gh(r,a,c,d),c=!0;else if(n===null){var v=r.stateNode,T=r.memoizedProps;v.props=T;var C=v.context,U=a.contextType;typeof U=="object"&&U!==null?U=dn(U):(U=Ht(a)?Hi:Dt.current,U=Hs(r,U));var W=a.getDerivedStateFromProps,Y=typeof W=="function"||typeof v.getSnapshotBeforeUpdate=="function";Y||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(T!==c||C!==U)&&Wp(r,v,c,U),ni=!1;var H=r.memoizedState;v.state=H,Hl(r,c,v,d),C=r.memoizedState,T!==c||H!==C||qt.current||ni?(typeof W=="function"&&(mh(r,a,W,c),C=r.memoizedState),(T=ni||qp(r,a,T,c,H,C,U))?(Y||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(r.flags|=4194308)):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=C),v.props=c,v.state=C,v.context=U,c=T):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{v=r.stateNode,vp(n,r),T=r.memoizedProps,U=r.type===r.elementType?T:Sn(r.type,T),v.props=U,Y=r.pendingProps,H=v.context,C=a.contextType,typeof C=="object"&&C!==null?C=dn(C):(C=Ht(a)?Hi:Dt.current,C=Hs(r,C));var te=a.getDerivedStateFromProps;(W=typeof te=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(T!==Y||H!==C)&&Wp(r,v,c,C),ni=!1,H=r.memoizedState,v.state=H,Hl(r,c,v,d);var se=r.memoizedState;T!==Y||H!==se||qt.current||ni?(typeof te=="function"&&(mh(r,a,te,c),se=r.memoizedState),(U=ni||qp(r,a,U,c,H,se,C)||!1)?(W||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,se,C),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,se,C)),typeof v.componentDidUpdate=="function"&&(r.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof v.componentDidUpdate!="function"||T===n.memoizedProps&&H===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&H===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=se),v.props=c,v.state=se,v.context=C,c=U):(typeof v.componentDidUpdate!="function"||T===n.memoizedProps&&H===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&H===n.memoizedState||(r.flags|=1024),c=!1)}return Eh(n,r,a,c,f,d)}function Eh(n,r,a,c,d,f){nm(n,r);var v=(r.flags&128)!==0;if(!c&&!v)return d&&lp(r,a,!1),wr(n,r,f);c=r.stateNode,BE.current=r;var T=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&v?(r.child=Qs(r,n.child,null,f),r.child=Qs(r,null,T,f)):zt(n,r,T,f),r.memoizedState=c.state,d&&lp(r,a,!0),r.child}function im(n){var r=n.stateNode;r.pendingContext?op(n,r.pendingContext,r.pendingContext!==r.context):r.context&&op(n,r.context,!1),rh(n,r.containerInfo)}function sm(n,r,a,c,d){return Ks(),Yc(d),r.flags|=256,zt(n,r,a,c),r.child}var wh={dehydrated:null,treeContext:null,retryLane:0};function Th(n){return{baseLanes:n,cachePool:null,transitions:null}}function om(n,r,a){var c=r.pendingProps,d=Xe.current,f=!1,v=(r.flags&128)!==0,T;if((T=v)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(f=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),qe(Xe,d&1),n===null)return Qc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(v=c.children,n=c.fallback,f?(c=r.mode,f=r.child,v={mode:"hidden",children:v},(c&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=v):f=du(v,c,0,null),n=ts(n,c,a,null),f.return=r,n.return=r,f.sibling=n,r.child=f,r.child.memoizedState=Th(a),r.memoizedState=wh,n):Ih(r,v));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return $E(n,r,v,c,T,d,a);if(f){f=c.fallback,v=r.mode,d=n.child,T=d.sibling;var C={mode:"hidden",children:c.children};return(v&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=C,r.deletions=null):(c=ui(d,C),c.subtreeFlags=d.subtreeFlags&14680064),T!==null?f=ui(T,f):(f=ts(f,v,a,null),f.flags|=2),f.return=r,c.return=r,c.sibling=f,r.child=c,c=f,f=r.child,v=n.child.memoizedState,v=v===null?Th(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},f.memoizedState=v,f.childLanes=n.childLanes&~a,r.memoizedState=wh,c}return f=n.child,n=f.sibling,c=ui(f,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function Ih(n,r){return r=du({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Zl(n,r,a,c){return c!==null&&Yc(c),Qs(r,n.child,null,a),n=Ih(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function $E(n,r,a,c,d,f,v){if(a)return r.flags&256?(r.flags&=-257,c=yh(Error(t(422))),Zl(n,r,v,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(f=c.fallback,d=r.mode,c=du({mode:"visible",children:c.children},d,0,null),f=ts(f,d,v,null),f.flags|=2,c.return=r,f.return=r,c.sibling=f,r.child=c,(r.mode&1)!==0&&Qs(r,n.child,null,v),r.child.memoizedState=Th(v),r.memoizedState=wh,f);if((r.mode&1)===0)return Zl(n,r,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;return c=T,f=Error(t(419)),c=yh(f,c,void 0),Zl(n,r,v,c)}if(T=(v&n.childLanes)!==0,Wt||T){if(c=Et,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==f.retryLane&&(f.retryLane=d,vr(n,d),Cn(c,n,d,-1))}return Uh(),c=yh(Error(t(421))),Zl(n,r,v,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=nw.bind(null,n),d._reactRetry=r,null):(n=f.treeContext,sn=Xr(d.nextSibling),rn=r,Je=!0,In=null,n!==null&&(cn[hn++]=yr,cn[hn++]=_r,cn[hn++]=Wi,yr=n.id,_r=n.overflow,Wi=r),r=Ih(r,c.children),r.flags|=4096,r)}function am(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),eh(n.return,r,a)}function Sh(n,r,a,c,d){var f=n.memoizedState;f===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(f.isBackwards=r,f.rendering=null,f.renderingStartTime=0,f.last=c,f.tail=a,f.tailMode=d)}function lm(n,r,a){var c=r.pendingProps,d=c.revealOrder,f=c.tail;if(zt(n,r,c.children,a),c=Xe.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&am(n,a,r);else if(n.tag===19)am(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(qe(Xe,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&Wl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),Sh(r,!1,d,a,f);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Wl(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Sh(r,!0,a,null,f);break;case"together":Sh(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function eu(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function wr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Ji|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=ui(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=ui(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function qE(n,r,a){switch(r.tag){case 3:im(r),Ks();break;case 5:Tp(r);break;case 1:Ht(r.type)&&Ml(r);break;case 4:rh(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;qe(Bl,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(qe(Xe,Xe.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?om(n,r,a):(qe(Xe,Xe.current&1),n=wr(n,r,a),n!==null?n.sibling:null);qe(Xe,Xe.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(n.flags&128)!==0){if(c)return lm(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),qe(Xe,Xe.current),c)break;return null;case 22:case 23:return r.lanes=0,tm(n,r,a)}return wr(n,r,a)}var um,Ah,cm,hm;um=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Ah=function(){},cm=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,Qi(Qn.current);var f=null;switch(a){case"input":d=ys(n,d),c=ys(n,c),f=[];break;case"select":d=re({},d,{value:void 0}),c=re({},c,{value:void 0}),f=[];break;case"textarea":d=Lo(n,d),c=Lo(n,c),f=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Vl)}vn(a,c);var v;a=null;for(U in d)if(!c.hasOwnProperty(U)&&d.hasOwnProperty(U)&&d[U]!=null)if(U==="style"){var T=d[U];for(v in T)T.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(o.hasOwnProperty(U)?f||(f=[]):(f=f||[]).push(U,null));for(U in c){var C=c[U];if(T=d!=null?d[U]:void 0,c.hasOwnProperty(U)&&C!==T&&(C!=null||T!=null))if(U==="style")if(T){for(v in T)!T.hasOwnProperty(v)||C&&C.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in C)C.hasOwnProperty(v)&&T[v]!==C[v]&&(a||(a={}),a[v]=C[v])}else a||(f||(f=[]),f.push(U,a)),a=C;else U==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,T=T?T.__html:void 0,C!=null&&T!==C&&(f=f||[]).push(U,C)):U==="children"?typeof C!="string"&&typeof C!="number"||(f=f||[]).push(U,""+C):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(o.hasOwnProperty(U)?(C!=null&&U==="onScroll"&&Ke("scroll",n),f||T===C||(f=[])):(f=f||[]).push(U,C))}a&&(f=f||[]).push("style",a);var U=f;(r.updateQueue=U)&&(r.flags|=4)}},hm=function(n,r,a,c){a!==c&&(r.flags|=4)};function wa(n,r){if(!Je)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Ot(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function HE(n,r,a){var c=r.pendingProps;switch(Gc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(r),null;case 1:return Ht(r.type)&&Ll(),Ot(r),null;case 3:return c=r.stateNode,Xs(),Qe(qt),Qe(Dt),oh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(jl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,In!==null&&(Mh(In),In=null))),Ah(n,r),Ot(r),null;case 5:ih(r);var d=Qi(ga.current);if(a=r.type,n!==null&&r.stateNode!=null)cm(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Ot(r),null}if(n=Qi(Qn.current),jl(r)){c=r.stateNode,a=r.type;var f=r.memoizedProps;switch(c[Kn]=r,c[ha]=f,n=(r.mode&1)!==0,a){case"dialog":Ke("cancel",c),Ke("close",c);break;case"iframe":case"object":case"embed":Ke("load",c);break;case"video":case"audio":for(d=0;d<la.length;d++)Ke(la[d],c);break;case"source":Ke("error",c);break;case"img":case"image":case"link":Ke("error",c),Ke("load",c);break;case"details":Ke("toggle",c);break;case"input":il(c,f),Ke("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!f.multiple},Ke("invalid",c);break;case"textarea":Mo(c,f),Ke("invalid",c)}vn(a,f),d=null;for(var v in f)if(f.hasOwnProperty(v)){var T=f[v];v==="children"?typeof T=="string"?c.textContent!==T&&(f.suppressHydrationWarning!==!0&&Dl(c.textContent,T,n),d=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(f.suppressHydrationWarning!==!0&&Dl(c.textContent,T,n),d=["children",""+T]):o.hasOwnProperty(v)&&T!=null&&v==="onScroll"&&Ke("scroll",c)}switch(a){case"input":gs(c),Oo(c,f,!0);break;case"textarea":gs(c),Mr(c);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(c.onclick=Vl)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=bo(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[Kn]=r,n[ha]=c,um(n,r,!1,!1),r.stateNode=n;e:{switch(v=ws(a,c),a){case"dialog":Ke("cancel",n),Ke("close",n),d=c;break;case"iframe":case"object":case"embed":Ke("load",n),d=c;break;case"video":case"audio":for(d=0;d<la.length;d++)Ke(la[d],n);d=c;break;case"source":Ke("error",n),d=c;break;case"img":case"image":case"link":Ke("error",n),Ke("load",n),d=c;break;case"details":Ke("toggle",n),d=c;break;case"input":il(n,c),d=ys(n,c),Ke("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=re({},c,{value:void 0}),Ke("invalid",n);break;case"textarea":Mo(n,c),d=Lo(n,c),Ke("invalid",n);break;default:d=c}vn(a,d),T=d;for(f in T)if(T.hasOwnProperty(f)){var C=T[f];f==="style"?Es(n,C):f==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&ol(n,C)):f==="children"?typeof C=="string"?(a!=="textarea"||C!=="")&&Ni(n,C):typeof C=="number"&&Ni(n,""+C):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(o.hasOwnProperty(f)?C!=null&&f==="onScroll"&&Ke("scroll",n):C!=null&&Te(n,f,C,v))}switch(a){case"input":gs(n),Oo(n,c,!1);break;case"textarea":gs(n),Mr(n);break;case"option":c.value!=null&&n.setAttribute("value",""+De(c.value));break;case"select":n.multiple=!!c.multiple,f=c.value,f!=null?_n(n,!!c.multiple,f,!1):c.defaultValue!=null&&_n(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Vl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Ot(r),null;case 6:if(n&&r.stateNode!=null)hm(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=Qi(ga.current),Qi(Qn.current),jl(r)){if(c=r.stateNode,a=r.memoizedProps,c[Kn]=r,(f=c.nodeValue!==a)&&(n=rn,n!==null))switch(n.tag){case 3:Dl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Dl(c.nodeValue,a,(n.mode&1)!==0)}f&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Kn]=r,r.stateNode=c}return Ot(r),null;case 13:if(Qe(Xe),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Je&&sn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)pp(),Ks(),r.flags|=98560,f=!1;else if(f=jl(r),c!==null&&c.dehydrated!==null){if(n===null){if(!f)throw Error(t(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(t(317));f[Kn]=r}else Ks(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Ot(r),f=!1}else In!==null&&(Mh(In),In=null),f=!0;if(!f)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Xe.current&1)!==0?gt===0&&(gt=3):Uh())),r.updateQueue!==null&&(r.flags|=4),Ot(r),null);case 4:return Xs(),Ah(n,r),n===null&&ua(r.stateNode.containerInfo),Ot(r),null;case 10:return Zc(r.type._context),Ot(r),null;case 17:return Ht(r.type)&&Ll(),Ot(r),null;case 19:if(Qe(Xe),f=r.memoizedState,f===null)return Ot(r),null;if(c=(r.flags&128)!==0,v=f.rendering,v===null)if(c)wa(f,!1);else{if(gt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(v=Wl(n),v!==null){for(r.flags|=128,wa(f,!1),c=v.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)f=a,n=c,f.flags&=14680066,v=f.alternate,v===null?(f.childLanes=0,f.lanes=n,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=v.childLanes,f.lanes=v.lanes,f.child=v.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=v.memoizedProps,f.memoizedState=v.memoizedState,f.updateQueue=v.updateQueue,f.type=v.type,n=v.dependencies,f.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return qe(Xe,Xe.current&1|2),r.child}n=n.sibling}f.tail!==null&&Ge()>no&&(r.flags|=128,c=!0,wa(f,!1),r.lanes=4194304)}else{if(!c)if(n=Wl(v),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),wa(f,!0),f.tail===null&&f.tailMode==="hidden"&&!v.alternate&&!Je)return Ot(r),null}else 2*Ge()-f.renderingStartTime>no&&a!==1073741824&&(r.flags|=128,c=!0,wa(f,!1),r.lanes=4194304);f.isBackwards?(v.sibling=r.child,r.child=v):(a=f.last,a!==null?a.sibling=v:r.child=v,f.last=v)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=Ge(),r.sibling=null,a=Xe.current,qe(Xe,c?a&1|2:a&1),r):(Ot(r),null);case 22:case 23:return Fh(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(on&1073741824)!==0&&(Ot(r),r.subtreeFlags&6&&(r.flags|=8192)):Ot(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function WE(n,r){switch(Gc(r),r.tag){case 1:return Ht(r.type)&&Ll(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Xs(),Qe(qt),Qe(Dt),oh(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return ih(r),null;case 13:if(Qe(Xe),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ks()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Qe(Xe),null;case 4:return Xs(),null;case 10:return Zc(r.type._context),null;case 22:case 23:return Fh(),null;case 24:return null;default:return null}}var tu=!1,Lt=!1,GE=typeof WeakSet=="function"?WeakSet:Set,ie=null;function eo(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){nt(n,r,c)}else a.current=null}function Rh(n,r,a){try{a()}catch(c){nt(n,r,c)}}var dm=!1;function KE(n,r){if(Fc=dr,n=qf(),Nc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,f=c.focusNode;c=c.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,T=-1,C=-1,U=0,W=0,Y=n,H=null;t:for(;;){for(var te;Y!==a||d!==0&&Y.nodeType!==3||(T=v+d),Y!==f||c!==0&&Y.nodeType!==3||(C=v+c),Y.nodeType===3&&(v+=Y.nodeValue.length),(te=Y.firstChild)!==null;)H=Y,Y=te;for(;;){if(Y===n)break t;if(H===a&&++U===d&&(T=v),H===f&&++W===c&&(C=v),(te=Y.nextSibling)!==null)break;Y=H,H=Y.parentNode}Y=te}a=T===-1||C===-1?null:{start:T,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(Uc={focusedElem:n,selectionRange:a},dr=!1,ie=r;ie!==null;)if(r=ie,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,ie=n;else for(;ie!==null;){r=ie;try{var se=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(se!==null){var oe=se.memoizedProps,ot=se.memoizedState,L=r.stateNode,N=L.getSnapshotBeforeUpdate(r.elementType===r.type?oe:Sn(r.type,oe),ot);L.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var b=r.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(J){nt(r,r.return,J)}if(n=r.sibling,n!==null){n.return=r.return,ie=n;break}ie=r.return}return se=dm,dm=!1,se}function Ta(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var f=d.destroy;d.destroy=void 0,f!==void 0&&Rh(r,a,f)}d=d.next}while(d!==c)}}function nu(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function Ch(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function fm(n){var r=n.alternate;r!==null&&(n.alternate=null,fm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Kn],delete r[ha],delete r[$c],delete r[NE],delete r[xE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function pm(n){return n.tag===5||n.tag===3||n.tag===4}function mm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||pm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ph(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Vl));else if(c!==4&&(n=n.child,n!==null))for(Ph(n,r,a),n=n.sibling;n!==null;)Ph(n,r,a),n=n.sibling}function kh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(kh(n,r,a),n=n.sibling;n!==null;)kh(n,r,a),n=n.sibling}var Ct=null,An=!1;function ii(n,r,a){for(a=a.child;a!==null;)gm(n,r,a),a=a.sibling}function gm(n,r,a){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(Li,a)}catch{}switch(a.tag){case 5:Lt||eo(a,r);case 6:var c=Ct,d=An;Ct=null,ii(n,r,a),Ct=c,An=d,Ct!==null&&(An?(n=Ct,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Ct.removeChild(a.stateNode));break;case 18:Ct!==null&&(An?(n=Ct,a=a.stateNode,n.nodeType===8?Bc(n.parentNode,a):n.nodeType===1&&Bc(n,a),Kr(n)):Bc(Ct,a.stateNode));break;case 4:c=Ct,d=An,Ct=a.stateNode.containerInfo,An=!0,ii(n,r,a),Ct=c,An=d;break;case 0:case 11:case 14:case 15:if(!Lt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var f=d,v=f.destroy;f=f.tag,v!==void 0&&((f&2)!==0||(f&4)!==0)&&Rh(a,r,v),d=d.next}while(d!==c)}ii(n,r,a);break;case 1:if(!Lt&&(eo(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(T){nt(a,r,T)}ii(n,r,a);break;case 21:ii(n,r,a);break;case 22:a.mode&1?(Lt=(c=Lt)||a.memoizedState!==null,ii(n,r,a),Lt=c):ii(n,r,a);break;default:ii(n,r,a)}}function ym(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new GE),r.forEach(function(c){var d=rw.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Rn(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var f=n,v=r,T=v;e:for(;T!==null;){switch(T.tag){case 5:Ct=T.stateNode,An=!1;break e;case 3:Ct=T.stateNode.containerInfo,An=!0;break e;case 4:Ct=T.stateNode.containerInfo,An=!0;break e}T=T.return}if(Ct===null)throw Error(t(160));gm(f,v,d),Ct=null,An=!1;var C=d.alternate;C!==null&&(C.return=null),d.return=null}catch(U){nt(d,r,U)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)_m(r,n),r=r.sibling}function _m(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Rn(r,n),Jn(n),c&4){try{Ta(3,n,n.return),nu(3,n)}catch(oe){nt(n,n.return,oe)}try{Ta(5,n,n.return)}catch(oe){nt(n,n.return,oe)}}break;case 1:Rn(r,n),Jn(n),c&512&&a!==null&&eo(a,a.return);break;case 5:if(Rn(r,n),Jn(n),c&512&&a!==null&&eo(a,a.return),n.flags&32){var d=n.stateNode;try{Ni(d,"")}catch(oe){nt(n,n.return,oe)}}if(c&4&&(d=n.stateNode,d!=null)){var f=n.memoizedProps,v=a!==null?a.memoizedProps:f,T=n.type,C=n.updateQueue;if(n.updateQueue=null,C!==null)try{T==="input"&&f.type==="radio"&&f.name!=null&&_s(d,f),ws(T,v);var U=ws(T,f);for(v=0;v<C.length;v+=2){var W=C[v],Y=C[v+1];W==="style"?Es(d,Y):W==="dangerouslySetInnerHTML"?ol(d,Y):W==="children"?Ni(d,Y):Te(d,W,Y,U)}switch(T){case"input":ki(d,f);break;case"textarea":sl(d,f);break;case"select":var H=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!f.multiple;var te=f.value;te!=null?_n(d,!!f.multiple,te,!1):H!==!!f.multiple&&(f.defaultValue!=null?_n(d,!!f.multiple,f.defaultValue,!0):_n(d,!!f.multiple,f.multiple?[]:"",!1))}d[ha]=f}catch(oe){nt(n,n.return,oe)}}break;case 6:if(Rn(r,n),Jn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,f=n.memoizedProps;try{d.nodeValue=f}catch(oe){nt(n,n.return,oe)}}break;case 3:if(Rn(r,n),Jn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Kr(r.containerInfo)}catch(oe){nt(n,n.return,oe)}break;case 4:Rn(r,n),Jn(n);break;case 13:Rn(r,n),Jn(n),d=n.child,d.flags&8192&&(f=d.memoizedState!==null,d.stateNode.isHidden=f,!f||d.alternate!==null&&d.alternate.memoizedState!==null||(Dh=Ge())),c&4&&ym(n);break;case 22:if(W=a!==null&&a.memoizedState!==null,n.mode&1?(Lt=(U=Lt)||W,Rn(r,n),Lt=U):Rn(r,n),Jn(n),c&8192){if(U=n.memoizedState!==null,(n.stateNode.isHidden=U)&&!W&&(n.mode&1)!==0)for(ie=n,W=n.child;W!==null;){for(Y=ie=W;ie!==null;){switch(H=ie,te=H.child,H.tag){case 0:case 11:case 14:case 15:Ta(4,H,H.return);break;case 1:eo(H,H.return);var se=H.stateNode;if(typeof se.componentWillUnmount=="function"){c=H,a=H.return;try{r=c,se.props=r.memoizedProps,se.state=r.memoizedState,se.componentWillUnmount()}catch(oe){nt(c,a,oe)}}break;case 5:eo(H,H.return);break;case 22:if(H.memoizedState!==null){wm(Y);continue}}te!==null?(te.return=H,ie=te):wm(Y)}W=W.sibling}e:for(W=null,Y=n;;){if(Y.tag===5){if(W===null){W=Y;try{d=Y.stateNode,U?(f=d.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(T=Y.stateNode,C=Y.memoizedProps.style,v=C!=null&&C.hasOwnProperty("display")?C.display:null,T.style.display=Ur("display",v))}catch(oe){nt(n,n.return,oe)}}}else if(Y.tag===6){if(W===null)try{Y.stateNode.nodeValue=U?"":Y.memoizedProps}catch(oe){nt(n,n.return,oe)}}else if((Y.tag!==22&&Y.tag!==23||Y.memoizedState===null||Y===n)&&Y.child!==null){Y.child.return=Y,Y=Y.child;continue}if(Y===n)break e;for(;Y.sibling===null;){if(Y.return===null||Y.return===n)break e;W===Y&&(W=null),Y=Y.return}W===Y&&(W=null),Y.sibling.return=Y.return,Y=Y.sibling}}break;case 19:Rn(r,n),Jn(n),c&4&&ym(n);break;case 21:break;default:Rn(r,n),Jn(n)}}function Jn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(pm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Ni(d,""),c.flags&=-33);var f=mm(n);kh(n,f,d);break;case 3:case 4:var v=c.stateNode.containerInfo,T=mm(n);Ph(n,T,v);break;default:throw Error(t(161))}}catch(C){nt(n,n.return,C)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function QE(n,r,a){ie=n,vm(n)}function vm(n,r,a){for(var c=(n.mode&1)!==0;ie!==null;){var d=ie,f=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||tu;if(!v){var T=d.alternate,C=T!==null&&T.memoizedState!==null||Lt;T=tu;var U=Lt;if(tu=v,(Lt=C)&&!U)for(ie=d;ie!==null;)v=ie,C=v.child,v.tag===22&&v.memoizedState!==null?Tm(d):C!==null?(C.return=v,ie=C):Tm(d);for(;f!==null;)ie=f,vm(f),f=f.sibling;ie=d,tu=T,Lt=U}Em(n)}else(d.subtreeFlags&8772)!==0&&f!==null?(f.return=d,ie=f):Em(n)}}function Em(n){for(;ie!==null;){var r=ie;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Lt||nu(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Lt)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:Sn(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var f=r.updateQueue;f!==null&&wp(r,f,c);break;case 3:var v=r.updateQueue;if(v!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}wp(r,v,a)}break;case 5:var T=r.stateNode;if(a===null&&r.flags&4){a=T;var C=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&a.focus();break;case"img":C.src&&(a.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var U=r.alternate;if(U!==null){var W=U.memoizedState;if(W!==null){var Y=W.dehydrated;Y!==null&&Kr(Y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Lt||r.flags&512&&Ch(r)}catch(H){nt(r,r.return,H)}}if(r===n){ie=null;break}if(a=r.sibling,a!==null){a.return=r.return,ie=a;break}ie=r.return}}function wm(n){for(;ie!==null;){var r=ie;if(r===n){ie=null;break}var a=r.sibling;if(a!==null){a.return=r.return,ie=a;break}ie=r.return}}function Tm(n){for(;ie!==null;){var r=ie;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{nu(4,r)}catch(C){nt(r,a,C)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(C){nt(r,d,C)}}var f=r.return;try{Ch(r)}catch(C){nt(r,f,C)}break;case 5:var v=r.return;try{Ch(r)}catch(C){nt(r,v,C)}}}catch(C){nt(r,r.return,C)}if(r===n){ie=null;break}var T=r.sibling;if(T!==null){T.return=r.return,ie=T;break}ie=r.return}}var YE=Math.ceil,ru=Ne.ReactCurrentDispatcher,Nh=Ne.ReactCurrentOwner,pn=Ne.ReactCurrentBatchConfig,Ve=0,Et=null,ht=null,Pt=0,on=0,to=Zr(0),gt=0,Ia=null,Ji=0,iu=0,xh=0,Sa=null,Gt=null,Dh=0,no=1/0,Tr=null,su=!1,Vh=null,si=null,ou=!1,oi=null,au=0,Aa=0,Oh=null,lu=-1,uu=0;function Bt(){return(Ve&6)!==0?Ge():lu!==-1?lu:lu=Ge()}function ai(n){return(n.mode&1)===0?1:(Ve&2)!==0&&Pt!==0?Pt&-Pt:VE.transition!==null?(uu===0&&(uu=Wo()),uu):(n=ke,n!==0||(n=window.event,n=n===void 0?16:xs(n.type)),n)}function Cn(n,r,a,c){if(50<Aa)throw Aa=0,Oh=null,Error(t(185));Ui(n,a,c),((Ve&2)===0||n!==Et)&&(n===Et&&((Ve&2)===0&&(iu|=a),gt===4&&li(n,Pt)),Kt(n,c),a===1&&Ve===0&&(r.mode&1)===0&&(no=Ge()+500,bl&&ti()))}function Kt(n,r){var a=n.callbackNode;Fi(n,r);var c=ur(n,n===Et?Pt:0);if(c===0)a!==null&&Ss(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&Ss(a),r===1)n.tag===0?DE(Sm.bind(null,n)):up(Sm.bind(null,n)),PE(function(){(Ve&6)===0&&ti()}),a=null;else{switch(Fn(c)){case 1:a=As;break;case 4:a=$o;break;case 16:a=Oi;break;case 536870912:a=Rs;break;default:a=Oi}a=Dm(a,Im.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function Im(n,r){if(lu=-1,uu=0,(Ve&6)!==0)throw Error(t(327));var a=n.callbackNode;if(ro()&&n.callbackNode!==a)return null;var c=ur(n,n===Et?Pt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=cu(n,c);else{r=c;var d=Ve;Ve|=2;var f=Rm();(Et!==n||Pt!==r)&&(Tr=null,no=Ge()+500,Zi(n,r));do try{ZE();break}catch(T){Am(n,T)}while(!0);Xc(),ru.current=f,Ve=d,ht!==null?r=0:(Et=null,Pt=0,r=gt)}if(r!==0){if(r===2&&(d=Ho(n),d!==0&&(c=d,r=Lh(n,d))),r===1)throw a=Ia,Zi(n,0),li(n,c),Kt(n,Ge()),a;if(r===6)li(n,c);else{if(d=n.current.alternate,(c&30)===0&&!JE(d)&&(r=cu(n,c),r===2&&(f=Ho(n),f!==0&&(c=f,r=Lh(n,f))),r===1))throw a=Ia,Zi(n,0),li(n,c),Kt(n,Ge()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:es(n,Gt,Tr);break;case 3:if(li(n,c),(c&130023424)===c&&(r=Dh+500-Ge(),10<r)){if(ur(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Bt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=zc(es.bind(null,n,Gt,Tr),r);break}es(n,Gt,Tr);break;case 4:if(li(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var v=31-Xt(c);f=1<<v,v=r[v],v>d&&(d=v),c&=~f}if(c=d,c=Ge()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*YE(c/1960))-c,10<c){n.timeoutHandle=zc(es.bind(null,n,Gt,Tr),c);break}es(n,Gt,Tr);break;case 5:es(n,Gt,Tr);break;default:throw Error(t(329))}}}return Kt(n,Ge()),n.callbackNode===a?Im.bind(null,n):null}function Lh(n,r){var a=Sa;return n.current.memoizedState.isDehydrated&&(Zi(n,r).flags|=256),n=cu(n,r),n!==2&&(r=Gt,Gt=a,r!==null&&Mh(r)),n}function Mh(n){Gt===null?Gt=n:Gt.push.apply(Gt,n)}function JE(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],f=d.getSnapshot;d=d.value;try{if(!Tn(f(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function li(n,r){for(r&=~xh,r&=~iu,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-Xt(r),c=1<<a;n[a]=-1,r&=~c}}function Sm(n){if((Ve&6)!==0)throw Error(t(327));ro();var r=ur(n,0);if((r&1)===0)return Kt(n,Ge()),null;var a=cu(n,r);if(n.tag!==0&&a===2){var c=Ho(n);c!==0&&(r=c,a=Lh(n,c))}if(a===1)throw a=Ia,Zi(n,0),li(n,r),Kt(n,Ge()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,es(n,Gt,Tr),Kt(n,Ge()),null}function bh(n,r){var a=Ve;Ve|=1;try{return n(r)}finally{Ve=a,Ve===0&&(no=Ge()+500,bl&&ti())}}function Xi(n){oi!==null&&oi.tag===0&&(Ve&6)===0&&ro();var r=Ve;Ve|=1;var a=pn.transition,c=ke;try{if(pn.transition=null,ke=1,n)return n()}finally{ke=c,pn.transition=a,Ve=r,(Ve&6)===0&&ti()}}function Fh(){on=to.current,Qe(to)}function Zi(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,CE(a)),ht!==null)for(a=ht.return;a!==null;){var c=a;switch(Gc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ll();break;case 3:Xs(),Qe(qt),Qe(Dt),oh();break;case 5:ih(c);break;case 4:Xs();break;case 13:Qe(Xe);break;case 19:Qe(Xe);break;case 10:Zc(c.type._context);break;case 22:case 23:Fh()}a=a.return}if(Et=n,ht=n=ui(n.current,null),Pt=on=r,gt=0,Ia=null,xh=iu=Ji=0,Gt=Sa=null,Ki!==null){for(r=0;r<Ki.length;r++)if(a=Ki[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,f=a.pending;if(f!==null){var v=f.next;f.next=d,c.next=v}a.pending=c}Ki=null}return n}function Am(n,r){do{var a=ht;try{if(Xc(),Gl.current=Jl,Kl){for(var c=Ze.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Kl=!1}if(Yi=0,vt=mt=Ze=null,ya=!1,_a=0,Nh.current=null,a===null||a.return===null){gt=1,Ia=r,ht=null;break}e:{var f=n,v=a.return,T=a,C=r;if(r=Pt,T.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var U=C,W=T,Y=W.tag;if((W.mode&1)===0&&(Y===0||Y===11||Y===15)){var H=W.alternate;H?(W.updateQueue=H.updateQueue,W.memoizedState=H.memoizedState,W.lanes=H.lanes):(W.updateQueue=null,W.memoizedState=null)}var te=Yp(v);if(te!==null){te.flags&=-257,Jp(te,v,T,f,r),te.mode&1&&Qp(f,U,r),r=te,C=U;var se=r.updateQueue;if(se===null){var oe=new Set;oe.add(C),r.updateQueue=oe}else se.add(C);break e}else{if((r&1)===0){Qp(f,U,r),Uh();break e}C=Error(t(426))}}else if(Je&&T.mode&1){var ot=Yp(v);if(ot!==null){(ot.flags&65536)===0&&(ot.flags|=256),Jp(ot,v,T,f,r),Yc(Zs(C,T));break e}}f=C=Zs(C,T),gt!==4&&(gt=2),Sa===null?Sa=[f]:Sa.push(f),f=v;do{switch(f.tag){case 3:f.flags|=65536,r&=-r,f.lanes|=r;var L=Gp(f,C,r);Ep(f,L);break e;case 1:T=C;var N=f.type,b=f.stateNode;if((f.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(si===null||!si.has(b)))){f.flags|=65536,r&=-r,f.lanes|=r;var J=Kp(f,T,r);Ep(f,J);break e}}f=f.return}while(f!==null)}Pm(a)}catch(ae){r=ae,ht===a&&a!==null&&(ht=a=a.return);continue}break}while(!0)}function Rm(){var n=ru.current;return ru.current=Jl,n===null?Jl:n}function Uh(){(gt===0||gt===3||gt===2)&&(gt=4),Et===null||(Ji&268435455)===0&&(iu&268435455)===0||li(Et,Pt)}function cu(n,r){var a=Ve;Ve|=2;var c=Rm();(Et!==n||Pt!==r)&&(Tr=null,Zi(n,r));do try{XE();break}catch(d){Am(n,d)}while(!0);if(Xc(),Ve=a,ru.current=c,ht!==null)throw Error(t(261));return Et=null,Pt=0,gt}function XE(){for(;ht!==null;)Cm(ht)}function ZE(){for(;ht!==null&&!Vi();)Cm(ht)}function Cm(n){var r=xm(n.alternate,n,on);n.memoizedProps=n.pendingProps,r===null?Pm(n):ht=r,Nh.current=null}function Pm(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=HE(a,r,on),a!==null){ht=a;return}}else{if(a=WE(a,r),a!==null){a.flags&=32767,ht=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{gt=6,ht=null;return}}if(r=r.sibling,r!==null){ht=r;return}ht=r=n}while(r!==null);gt===0&&(gt=5)}function es(n,r,a){var c=ke,d=pn.transition;try{pn.transition=null,ke=1,ew(n,r,a,c)}finally{pn.transition=d,ke=c}return null}function ew(n,r,a,c){do ro();while(oi!==null);if((Ve&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var f=a.lanes|a.childLanes;if(Ac(n,f),n===Et&&(ht=Et=null,Pt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ou||(ou=!0,Dm(Oi,function(){return ro(),null})),f=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||f){f=pn.transition,pn.transition=null;var v=ke;ke=1;var T=Ve;Ve|=4,Nh.current=null,KE(n,a),_m(a,n),EE(Uc),dr=!!Fc,Uc=Fc=null,n.current=a,QE(a),lr(),Ve=T,ke=v,pn.transition=f}else n.current=a;if(ou&&(ou=!1,oi=n,au=d),f=n.pendingLanes,f===0&&(si=null),yl(a.stateNode),Kt(n,Ge()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(su)throw su=!1,n=Vh,Vh=null,n;return(au&1)!==0&&n.tag!==0&&ro(),f=n.pendingLanes,(f&1)!==0?n===Oh?Aa++:(Aa=0,Oh=n):Aa=0,ti(),null}function ro(){if(oi!==null){var n=Fn(au),r=pn.transition,a=ke;try{if(pn.transition=null,ke=16>n?16:n,oi===null)var c=!1;else{if(n=oi,oi=null,au=0,(Ve&6)!==0)throw Error(t(331));var d=Ve;for(Ve|=4,ie=n.current;ie!==null;){var f=ie,v=f.child;if((ie.flags&16)!==0){var T=f.deletions;if(T!==null){for(var C=0;C<T.length;C++){var U=T[C];for(ie=U;ie!==null;){var W=ie;switch(W.tag){case 0:case 11:case 15:Ta(8,W,f)}var Y=W.child;if(Y!==null)Y.return=W,ie=Y;else for(;ie!==null;){W=ie;var H=W.sibling,te=W.return;if(fm(W),W===U){ie=null;break}if(H!==null){H.return=te,ie=H;break}ie=te}}}var se=f.alternate;if(se!==null){var oe=se.child;if(oe!==null){se.child=null;do{var ot=oe.sibling;oe.sibling=null,oe=ot}while(oe!==null)}}ie=f}}if((f.subtreeFlags&2064)!==0&&v!==null)v.return=f,ie=v;else e:for(;ie!==null;){if(f=ie,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:Ta(9,f,f.return)}var L=f.sibling;if(L!==null){L.return=f.return,ie=L;break e}ie=f.return}}var N=n.current;for(ie=N;ie!==null;){v=ie;var b=v.child;if((v.subtreeFlags&2064)!==0&&b!==null)b.return=v,ie=b;else e:for(v=N;ie!==null;){if(T=ie,(T.flags&2048)!==0)try{switch(T.tag){case 0:case 11:case 15:nu(9,T)}}catch(ae){nt(T,T.return,ae)}if(T===v){ie=null;break e}var J=T.sibling;if(J!==null){J.return=T.return,ie=J;break e}ie=T.return}}if(Ve=d,ti(),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(Li,n)}catch{}c=!0}return c}finally{ke=a,pn.transition=r}}return!1}function km(n,r,a){r=Zs(a,r),r=Gp(n,r,1),n=ri(n,r,1),r=Bt(),n!==null&&(Ui(n,1,r),Kt(n,r))}function nt(n,r,a){if(n.tag===3)km(n,n,a);else for(;r!==null;){if(r.tag===3){km(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(si===null||!si.has(c))){n=Zs(a,n),n=Kp(r,n,1),r=ri(r,n,1),n=Bt(),r!==null&&(Ui(r,1,n),Kt(r,n));break}}r=r.return}}function tw(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=Bt(),n.pingedLanes|=n.suspendedLanes&a,Et===n&&(Pt&a)===a&&(gt===4||gt===3&&(Pt&130023424)===Pt&&500>Ge()-Dh?Zi(n,0):xh|=a),Kt(n,r)}function Nm(n,r){r===0&&((n.mode&1)===0?r=1:(r=Hr,Hr<<=1,(Hr&130023424)===0&&(Hr=4194304)));var a=Bt();n=vr(n,r),n!==null&&(Ui(n,r,a),Kt(n,a))}function nw(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),Nm(n,a)}function rw(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),Nm(n,a)}var xm;xm=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||qt.current)Wt=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return Wt=!1,qE(n,r,a);Wt=(n.flags&131072)!==0}else Wt=!1,Je&&(r.flags&1048576)!==0&&cp(r,Ul,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;eu(n,r),n=r.pendingProps;var d=Hs(r,Dt.current);Js(r,a),d=uh(null,r,c,n,d,a);var f=ch();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Ht(c)?(f=!0,Ml(r)):f=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,nh(r),d.updater=Xl,r.stateNode=d,d._reactInternals=r,gh(r,c,n,a),r=Eh(null,r,c,!0,f,a)):(r.tag=0,Je&&f&&Wc(r),zt(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(eu(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=sw(c),n=Sn(c,n),d){case 0:r=vh(null,r,c,n,a);break e;case 1:r=rm(null,r,c,n,a);break e;case 11:r=Xp(null,r,c,n,a);break e;case 14:r=Zp(null,r,c,Sn(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Sn(c,d),vh(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Sn(c,d),rm(n,r,c,d,a);case 3:e:{if(im(r),n===null)throw Error(t(387));c=r.pendingProps,f=r.memoizedState,d=f.element,vp(n,r),Hl(r,c,null,a);var v=r.memoizedState;if(c=v.element,f.isDehydrated)if(f={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},r.updateQueue.baseState=f,r.memoizedState=f,r.flags&256){d=Zs(Error(t(423)),r),r=sm(n,r,c,a,d);break e}else if(c!==d){d=Zs(Error(t(424)),r),r=sm(n,r,c,a,d);break e}else for(sn=Xr(r.stateNode.containerInfo.firstChild),rn=r,Je=!0,In=null,a=yp(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ks(),c===d){r=wr(n,r,a);break e}zt(n,r,c,a)}r=r.child}return r;case 5:return Tp(r),n===null&&Qc(r),c=r.type,d=r.pendingProps,f=n!==null?n.memoizedProps:null,v=d.children,jc(c,d)?v=null:f!==null&&jc(c,f)&&(r.flags|=32),nm(n,r),zt(n,r,v,a),r.child;case 6:return n===null&&Qc(r),null;case 13:return om(n,r,a);case 4:return rh(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Qs(r,null,c,a):zt(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Sn(c,d),Xp(n,r,c,d,a);case 7:return zt(n,r,r.pendingProps,a),r.child;case 8:return zt(n,r,r.pendingProps.children,a),r.child;case 12:return zt(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,f=r.memoizedProps,v=d.value,qe(Bl,c._currentValue),c._currentValue=v,f!==null)if(Tn(f.value,v)){if(f.children===d.children&&!qt.current){r=wr(n,r,a);break e}}else for(f=r.child,f!==null&&(f.return=r);f!==null;){var T=f.dependencies;if(T!==null){v=f.child;for(var C=T.firstContext;C!==null;){if(C.context===c){if(f.tag===1){C=Er(-1,a&-a),C.tag=2;var U=f.updateQueue;if(U!==null){U=U.shared;var W=U.pending;W===null?C.next=C:(C.next=W.next,W.next=C),U.pending=C}}f.lanes|=a,C=f.alternate,C!==null&&(C.lanes|=a),eh(f.return,a,r),T.lanes|=a;break}C=C.next}}else if(f.tag===10)v=f.type===r.type?null:f.child;else if(f.tag===18){if(v=f.return,v===null)throw Error(t(341));v.lanes|=a,T=v.alternate,T!==null&&(T.lanes|=a),eh(v,a,r),v=f.sibling}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===r){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}zt(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,Js(r,a),d=dn(d),c=c(d),r.flags|=1,zt(n,r,c,a),r.child;case 14:return c=r.type,d=Sn(c,r.pendingProps),d=Sn(c.type,d),Zp(n,r,c,d,a);case 15:return em(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Sn(c,d),eu(n,r),r.tag=1,Ht(c)?(n=!0,Ml(r)):n=!1,Js(r,a),Hp(r,c,d),gh(r,c,d,a),Eh(null,r,c,!0,n,a);case 19:return lm(n,r,a);case 22:return tm(n,r,a)}throw Error(t(156,r.tag))};function Dm(n,r){return Bo(n,r)}function iw(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(n,r,a,c){return new iw(n,r,a,c)}function jh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function sw(n){if(typeof n=="function")return jh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===_t)return 14}return 2}function ui(n,r){var a=n.alternate;return a===null?(a=mn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function hu(n,r,a,c,d,f){var v=2;if(c=n,typeof n=="function")jh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case P:return ts(a.children,d,f,r);case I:v=8,d|=8;break;case R:return n=mn(12,a,r,d|2),n.elementType=R,n.lanes=f,n;case S:return n=mn(13,a,r,d),n.elementType=S,n.lanes=f,n;case $e:return n=mn(19,a,r,d),n.elementType=$e,n.lanes=f,n;case Ye:return du(a,d,f,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case x:v=10;break e;case k:v=9;break e;case O:v=11;break e;case _t:v=14;break e;case Nt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=mn(v,a,r,d),r.elementType=n,r.type=c,r.lanes=f,r}function ts(n,r,a,c){return n=mn(7,n,c,r),n.lanes=a,n}function du(n,r,a,c){return n=mn(22,n,c,r),n.elementType=Ye,n.lanes=a,n.stateNode={isHidden:!1},n}function zh(n,r,a){return n=mn(6,n,null,r),n.lanes=a,n}function Bh(n,r,a){return r=mn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function ow(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Go(0),this.expirationTimes=Go(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Go(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function $h(n,r,a,c,d,f,v,T,C){return n=new ow(n,r,a,T,C),r===1?(r=1,f===!0&&(r|=8)):r=0,f=mn(3,null,null,r),n.current=f,f.stateNode=n,f.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},nh(f),n}function aw(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Oe,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function Vm(n){if(!n)return ei;n=n._reactInternals;e:{if(En(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Ht(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Ht(a))return ap(n,a,r)}return r}function Om(n,r,a,c,d,f,v,T,C){return n=$h(a,c,!0,n,d,f,v,T,C),n.context=Vm(null),a=n.current,c=Bt(),d=ai(a),f=Er(c,d),f.callback=r??null,ri(a,f,d),n.current.lanes=d,Ui(n,d,c),Kt(n,c),n}function fu(n,r,a,c){var d=r.current,f=Bt(),v=ai(d);return a=Vm(a),r.context===null?r.context=a:r.pendingContext=a,r=Er(f,v),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=ri(d,r,v),n!==null&&(Cn(n,d,v,f),ql(n,d,v)),v}function pu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Lm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function qh(n,r){Lm(n,r),(n=n.alternate)&&Lm(n,r)}function lw(){return null}var Mm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Hh(n){this._internalRoot=n}mu.prototype.render=Hh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));fu(n,r,null,null)},mu.prototype.unmount=Hh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Xi(function(){fu(null,n,null,null)}),r[mr]=null}};function mu(n){this._internalRoot=n}mu.prototype.unstable_scheduleHydration=function(n){if(n){var r=Jo();n={blockedOn:null,target:n,priority:r};for(var a=0;a<Zt.length&&r!==0&&r<Zt[a].priority;a++);Zt.splice(a,0,n),a===0&&ks(n)}};function Wh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function gu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function bm(){}function uw(n,r,a,c,d){if(d){if(typeof c=="function"){var f=c;c=function(){var U=pu(v);f.call(U)}}var v=Om(r,c,n,0,null,!1,!1,"",bm);return n._reactRootContainer=v,n[mr]=v.current,ua(n.nodeType===8?n.parentNode:n),Xi(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var T=c;c=function(){var U=pu(C);T.call(U)}}var C=$h(n,0,!1,null,null,!1,!1,"",bm);return n._reactRootContainer=C,n[mr]=C.current,ua(n.nodeType===8?n.parentNode:n),Xi(function(){fu(r,C,a,c)}),C}function yu(n,r,a,c,d){var f=a._reactRootContainer;if(f){var v=f;if(typeof d=="function"){var T=d;d=function(){var C=pu(v);T.call(C)}}fu(r,v,n,d)}else v=uw(a,r,n,d,c);return pu(v)}Qo=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Me(r.pendingLanes);a!==0&&(Ko(r,a|1),Kt(r,Ge()),(Ve&6)===0&&(no=Ge()+500,ti()))}break;case 13:Xi(function(){var c=vr(n,1);if(c!==null){var d=Bt();Cn(c,n,1,d)}}),qh(n,1)}},Cs=function(n){if(n.tag===13){var r=vr(n,134217728);if(r!==null){var a=Bt();Cn(r,n,134217728,a)}qh(n,134217728)}},Yo=function(n){if(n.tag===13){var r=ai(n),a=vr(n,r);if(a!==null){var c=Bt();Cn(a,n,r,c)}qh(n,r)}},Jo=function(){return ke},Xo=function(n,r){var a=ke;try{return ke=n,r()}finally{ke=a}},sr=function(n,r,a){switch(r){case"input":if(ki(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=Ol(c);if(!d)throw Error(t(90));Vo(c),ki(c,d)}}}break;case"textarea":sl(n,a);break;case"select":r=a.value,r!=null&&_n(n,!!a.multiple,r,!1)}},ll=bh,ul=Xi;var cw={usingClientEntryPoint:!1,Events:[da,$s,Ol,zr,Br,bh]},Ra={findFiberByHostInstance:qi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hw={bundleType:Ra.bundleType,version:Ra.version,rendererPackageName:Ra.rendererPackageName,rendererConfig:Ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ne.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=gl(n),n===null?null:n.stateNode},findFiberByHostInstance:Ra.findFiberByHostInstance||lw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _u=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_u.isDisabled&&_u.supportsFiber)try{Li=_u.inject(hw),Jt=_u}catch{}}return Qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cw,Qt.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wh(r))throw Error(t(200));return aw(n,r,null,a)},Qt.createRoot=function(n,r){if(!Wh(n))throw Error(t(299));var a=!1,c="",d=Mm;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=$h(n,1,!1,null,null,a,!1,c,d),n[mr]=r.current,ua(n.nodeType===8?n.parentNode:n),new Hh(r)},Qt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=gl(r),n=n===null?null:n.stateNode,n},Qt.flushSync=function(n){return Xi(n)},Qt.hydrate=function(n,r,a){if(!gu(r))throw Error(t(200));return yu(null,n,r,!0,a)},Qt.hydrateRoot=function(n,r,a){if(!Wh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,f="",v=Mm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),r=Om(r,null,n,1,a??null,d,!1,f,v),n[mr]=r.current,ua(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new mu(r)},Qt.render=function(n,r,a){if(!gu(r))throw Error(t(200));return yu(null,n,r,!1,a)},Qt.unmountComponentAtNode=function(n){if(!gu(n))throw Error(t(40));return n._reactRootContainer?(Xi(function(){yu(null,null,n,!1,function(){n._reactRootContainer=null,n[mr]=null})}),!0):!1},Qt.unstable_batchedUpdates=bh,Qt.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!gu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return yu(n,r,a,!1,c)},Qt.version="18.3.1-next-f1338f8080-20240426",Qt}var Hm;function Ew(){if(Hm)return Qh.exports;Hm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Qh.exports=vw(),Qh.exports}var Wm;function ww(){if(Wm)return vu;Wm=1;var i=Ew();return vu.createRoot=i.createRoot,vu.hydrateRoot=i.hydrateRoot,vu}var Tw=ww();const Iw=fw(Tw),Sw="modulepreload",Aw=function(i){return"/Lista-de-compras-PWA/"+i},Gm={},Km=function(e,t,s){let o=Promise.resolve();if(t&&t.length>0){let h=function(_){return Promise.all(_.map(w=>Promise.resolve(w).then(A=>({status:"fulfilled",value:A}),A=>({status:"rejected",reason:A}))))};document.getElementsByTagName("link");const m=document.querySelector("meta[property=csp-nonce]"),y=(m==null?void 0:m.nonce)||(m==null?void 0:m.getAttribute("nonce"));o=h(t.map(_=>{if(_=Aw(_),_ in Gm)return;Gm[_]=!0;const w=_.endsWith(".css"),A=w?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${_}"]${A}`))return;const V=document.createElement("link");if(V.rel=w?"stylesheet":Sw,w||(V.as="script"),V.crossOrigin="",V.href=_,y&&V.setAttribute("nonce",y),document.head.appendChild(V),w)return new Promise((z,K)=>{V.addEventListener("load",z),V.addEventListener("error",()=>K(new Error(`Unable to preload CSS for ${_}`)))})}))}function u(h){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=h,window.dispatchEvent(m),!m.defaultPrevented)throw h}return o.then(h=>{for(const m of h||[])m.status==="rejected"&&u(m.reason);return e().catch(u)})},Rw=()=>{};var Qm={};/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Ty=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},Cw=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],y=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},Iy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,y=o+2<i.length,_=y?i[o+2]:0,w=u>>2,A=(u&3)<<4|m>>4;let V=(m&15)<<2|_>>6,z=_&63;y||(z=64,h||(V=64)),s.push(t[w],t[A],t[V],t[z])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Ty(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):Cw(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const _=o<i.length?t[i.charAt(o)]:64;++o;const A=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||_==null||A==null)throw new Pw;const V=u<<2|m>>4;if(s.push(V),_!==64){const z=m<<4&240|_>>2;if(s.push(z),A!==64){const K=_<<6&192|A;s.push(K)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Pw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kw=function(i){const e=Ty(i);return Iy.encodeByteArray(e,!0)},Lu=function(i){return kw(i).replace(/\./g,"")},Sy=function(i){try{return Iy.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
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
 */function Nw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const xw=()=>Nw().__FIREBASE_DEFAULTS__,Dw=()=>{if(typeof process>"u"||typeof Qm>"u")return;const i=Qm.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Vw=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Sy(i[1]);return e&&JSON.parse(e)},ec=()=>{try{return Rw()||xw()||Dw()||Vw()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Ay=i=>{var e,t;return(t=(e=ec())==null?void 0:e.emulatorHosts)==null?void 0:t[i]},Ow=i=>{const e=Ay(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Ry=()=>{var i;return(i=ec())==null?void 0:i.config},Cy=i=>{var e;return(e=ec())==null?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Lw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function Mw(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...i};return[Lu(JSON.stringify(t)),Lu(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ut())}function Fw(){var e;const i=(e=ec())==null?void 0:e.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Uw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function jw(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function zw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Bw(){const i=Ut();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function $w(){return!Fw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function qw(){try{return typeof indexedDB=="object"}catch{return!1}}function Hw(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)==null?void 0:u.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Ww="FirebaseError";class Vr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Ww,Object.setPrototypeOf(this,Vr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ga.prototype.create)}}class Ga{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?Gw(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Vr(o,m,s)}}function Gw(i,e){return i.replace(Kw,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const Kw=/\{\$([^}]+)}/g;function Qw(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function as(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(Ym(u)&&Ym(h)){if(!as(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Ym(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Ka(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Yw(i,e){const t=new Jw(i,e);return t.subscribe.bind(t)}class Jw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Xw(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Xh),o.error===void 0&&(o.error=Xh),o.complete===void 0&&(o.complete=Xh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Xw(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Xh(){}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function $t(i){return i&&i._delegate?i._delegate:i}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Qa(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Py(i){return(await fetch(i,{credentials:"include"})).ok}class ls{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const ns="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Zw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Lw;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(t0(e))try{this.getOrInitializeService({instanceIdentifier:ns})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=ns){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ns){return this.instances.has(e)}getOptions(e=ns){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:e0(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ns){return this.component?this.component.multipleInstances?e:ns:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function e0(i){return i===ns?void 0:i}function t0(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class n0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Zw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var Re;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Re||(Re={}));const r0={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},i0=Re.INFO,s0={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},o0=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=s0[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Md{constructor(e){this.name=e,this._logLevel=i0,this._logHandler=o0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?r0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}const a0=(i,e)=>e.some(t=>i instanceof t);let Jm,Xm;function l0(){return Jm||(Jm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u0(){return Xm||(Xm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ky=new WeakMap,cd=new WeakMap,Ny=new WeakMap,Zh=new WeakMap,bd=new WeakMap;function c0(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(gi(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&ky.set(t,i)}).catch(()=>{}),bd.set(e,i),e}function h0(i){if(cd.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});cd.set(i,e)}let hd={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return cd.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Ny.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return gi(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function d0(i){hd=i(hd)}function f0(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(ed(this),e,...t);return Ny.set(s,e.sort?e.sort():[e]),gi(s)}:u0().includes(i)?function(...e){return i.apply(ed(this),e),gi(ky.get(this))}:function(...e){return gi(i.apply(ed(this),e))}}function p0(i){return typeof i=="function"?f0(i):(i instanceof IDBTransaction&&h0(i),a0(i,l0())?new Proxy(i,hd):i)}function gi(i){if(i instanceof IDBRequest)return c0(i);if(Zh.has(i))return Zh.get(i);const e=p0(i);return e!==i&&(Zh.set(i,e),bd.set(e,i)),e}const ed=i=>bd.get(i);function m0(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=gi(h);return s&&h.addEventListener("upgradeneeded",y=>{s(gi(h.result),y.oldVersion,y.newVersion,gi(h.transaction),y)}),t&&h.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),m.then(y=>{u&&y.addEventListener("close",()=>u()),o&&y.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}const g0=["get","getKey","getAll","getAllKeys","count"],y0=["put","add","delete","clear"],td=new Map;function Zm(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(td.get(e))return td.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=y0.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||g0.includes(t)))return;const u=async function(h,...m){const y=this.transaction(h,o?"readwrite":"readonly");let _=y.store;return s&&(_=_.index(m.shift())),(await Promise.all([_[t](...m),o&&y.done]))[0]};return td.set(e,u),u}d0(i=>({...i,get:(e,t,s)=>Zm(e,t)||i.get(e,t,s),has:(e,t)=>!!Zm(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
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
 */class _0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(v0(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function v0(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const dd="@firebase/app",eg="0.14.11";/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Pr=new Md("@firebase/app"),E0="@firebase/app-compat",w0="@firebase/analytics-compat",T0="@firebase/analytics",I0="@firebase/app-check-compat",S0="@firebase/app-check",A0="@firebase/auth",R0="@firebase/auth-compat",C0="@firebase/database",P0="@firebase/data-connect",k0="@firebase/database-compat",N0="@firebase/functions",x0="@firebase/functions-compat",D0="@firebase/installations",V0="@firebase/installations-compat",O0="@firebase/messaging",L0="@firebase/messaging-compat",M0="@firebase/performance",b0="@firebase/performance-compat",F0="@firebase/remote-config",U0="@firebase/remote-config-compat",j0="@firebase/storage",z0="@firebase/storage-compat",B0="@firebase/firestore",$0="@firebase/ai",q0="@firebase/firestore-compat",H0="firebase",W0="12.12.0";/**
 * @license
 * Copyright 2019 Google LLC
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
 */const fd="[DEFAULT]",G0={[dd]:"fire-core",[E0]:"fire-core-compat",[T0]:"fire-analytics",[w0]:"fire-analytics-compat",[S0]:"fire-app-check",[I0]:"fire-app-check-compat",[A0]:"fire-auth",[R0]:"fire-auth-compat",[C0]:"fire-rtdb",[P0]:"fire-data-connect",[k0]:"fire-rtdb-compat",[N0]:"fire-fn",[x0]:"fire-fn-compat",[D0]:"fire-iid",[V0]:"fire-iid-compat",[O0]:"fire-fcm",[L0]:"fire-fcm-compat",[M0]:"fire-perf",[b0]:"fire-perf-compat",[F0]:"fire-rc",[U0]:"fire-rc-compat",[j0]:"fire-gcs",[z0]:"fire-gcs-compat",[B0]:"fire-fst",[q0]:"fire-fst-compat",[$0]:"fire-vertex","fire-js":"fire-js",[H0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Mu=new Map,K0=new Map,pd=new Map;function tg(i,e){try{i.container.addComponent(e)}catch(t){Pr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function go(i){const e=i.name;if(pd.has(e))return Pr.debug(`There were multiple attempts to register component ${e}.`),!1;pd.set(e,i);for(const t of Mu.values())tg(t,i);for(const t of K0.values())tg(t,i);return!0}function Fd(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function Pn(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Q0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yi=new Ga("app","Firebase",Q0);/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Y0{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ls("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Ao=W0;function xy(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s={name:fd,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw yi.create("bad-app-name",{appName:String(o)});if(t||(t=Ry()),!t)throw yi.create("no-options");const u=Mu.get(o);if(u){if(as(t,u.options)&&as(s,u.config))return u;throw yi.create("duplicate-app",{appName:o})}const h=new n0(o);for(const y of pd.values())h.addComponent(y);const m=new Y0(t,s,h);return Mu.set(o,m),m}function Dy(i=fd){const e=Mu.get(i);if(!e&&i===fd&&Ry())return xy();if(!e)throw yi.create("no-app",{appName:i});return e}function _i(i,e,t){let s=G0[i]??i;t&&(s+=`-${t}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pr.warn(h.join(" "));return}go(new ls(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const J0="firebase-heartbeat-database",X0=1,Fa="firebase-heartbeat-store";let nd=null;function Vy(){return nd||(nd=m0(J0,X0,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Fa)}catch(t){console.warn(t)}}}}).catch(i=>{throw yi.create("idb-open",{originalErrorMessage:i.message})})),nd}async function Z0(i){try{const t=(await Vy()).transaction(Fa),s=await t.objectStore(Fa).get(Oy(i));return await t.done,s}catch(e){if(e instanceof Vr)Pr.warn(e.message);else{const t=yi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pr.warn(t.message)}}}async function ng(i,e){try{const s=(await Vy()).transaction(Fa,"readwrite");await s.objectStore(Fa).put(e,Oy(i)),await s.done}catch(t){if(t instanceof Vr)Pr.warn(t.message);else{const s=yi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Pr.warn(s.message)}}}function Oy(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const eT=1024,tT=30;class nT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new iT(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=rg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>tT){const h=sT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Pr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=rg(),{heartbeatsToSend:s,unsentEntries:o}=rT(this._heartbeatsCache.heartbeats),u=Lu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Pr.warn(t),""}}}function rg(){return new Date().toISOString().substring(0,10)}function rT(i,e=eT){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),ig(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),ig(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class iT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qw()?Hw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Z0(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return ng(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return ng(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ig(i){return Lu(JSON.stringify({version:2,heartbeats:i})).length}function sT(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
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
 */function oT(i){go(new ls("platform-logger",e=>new _0(e),"PRIVATE")),go(new ls("heartbeat",e=>new nT(e),"PRIVATE")),_i(dd,eg,i),_i(dd,eg,"esm2020"),_i("fire-js","")}oT("");function Ly(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const aT=Ly,My=new Ga("auth","Firebase",Ly());/**
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
 */const bu=new Md("@firebase/auth");function lT(i,...e){bu.logLevel<=Re.WARN&&bu.warn(`Auth (${Ao}): ${i}`,...e)}function Ru(i,...e){bu.logLevel<=Re.ERROR&&bu.error(`Auth (${Ao}): ${i}`,...e)}/**
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
 */function rr(i,...e){throw jd(i,...e)}function xn(i,...e){return jd(i,...e)}function Ud(i,e,t){const s={...aT(),[e]:t};return new Ga("auth","Firebase",s).create(e,{appName:i.name})}function ss(i){return Ud(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function uT(i,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&rr(i,"argument-error"),Ud(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function jd(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return My.create(i,...e)}function pe(i,e,...t){if(!i)throw jd(e,...t)}function Sr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Ru(e),new Error(e)}function kr(i,e){i||Sr(e)}/**
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
 */function md(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.href)||""}function cT(){return sg()==="http:"||sg()==="https:"}function sg(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
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
 */function hT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cT()||jw()||"connection"in navigator)?navigator.onLine:!0}function dT(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class Ya{constructor(e,t){this.shortDelay=e,this.longDelay=t,kr(t>e,"Short delay should be less than long delay!"),this.isMobile=bw()||zw()}get(){return hT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function zd(i,e){kr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class by{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Sr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Sr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Sr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const fT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const pT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],mT=new Ya(3e4,6e4);function Bd(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function Ro(i,e,t,s,o={}){return Fy(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=Ka({key:i.config.apiKey,...h}).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const _={method:e,headers:y,...u};return Uw()||(_.referrerPolicy="no-referrer"),i.emulatorConfig&&Qa(i.emulatorConfig.host)&&(_.credentials="include"),by.fetch()(await Uy(i,i.config.apiHost,t,m),_)})}async function Fy(i,e,t){i._canInitEmulator=!1;const s={...fT,...e};try{const o=new yT(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Eu(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[y,_]=m.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw Eu(i,"credential-already-in-use",h);if(y==="EMAIL_EXISTS")throw Eu(i,"email-already-in-use",h);if(y==="USER_DISABLED")throw Eu(i,"user-disabled",h);const w=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw Ud(i,w,_);rr(i,w)}}catch(o){if(o instanceof Vr)throw o;rr(i,"network-request-failed",{message:String(o)})}}async function gT(i,e,t,s,o={}){const u=await Ro(i,e,t,s,o);return"mfaPendingCredential"in u&&rr(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function Uy(i,e,t,s){const o=`${e}${t}?${s}`,u=i,h=u.config.emulator?zd(i.config,o):`${i.config.apiScheme}://${o}`;return pT.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}class yT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(xn(this.auth,"network-request-failed")),mT.get())})}}function Eu(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=xn(i,e,s);return o.customData._tokenResponse=t,o}/**
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
 */async function _T(i,e){return Ro(i,"POST","/v1/accounts:delete",e)}async function Fu(i,e){return Ro(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function Da(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vT(i,e=!1){const t=$t(i),s=await t.getIdToken(e),o=$d(s);pe(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Da(rd(o.auth_time)),issuedAtTime:Da(rd(o.iat)),expirationTime:Da(rd(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function rd(i){return Number(i)*1e3}function $d(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return Ru("JWT malformed, contained fewer than 3 sections"),null;try{const o=Sy(t);return o?JSON.parse(o):(Ru("Failed to decode base64 JWT payload"),null)}catch(o){return Ru("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function og(i){const e=$d(i);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ua(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Vr&&ET(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function ET({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class wT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class gd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Da(this.lastLoginAt),this.creationTime=Da(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function Uu(i){var A;const e=i.auth,t=await i.getIdToken(),s=await Ua(i,Fu(e,{idToken:t}));pe(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];i._notifyReloadListener(o);const u=(A=o.providerUserInfo)!=null&&A.length?jy(o.providerUserInfo):[],h=IT(i.providerData,u),m=i.isAnonymous,y=!(i.email&&o.passwordHash)&&!(h!=null&&h.length),_=m?y:!1,w={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new gd(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(i,w)}async function TT(i){const e=$t(i);await Uu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function IT(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function jy(i){return i.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function ST(i,e){const t=await Fy(i,{},async()=>{const s=Ka({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=await Uy(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:m,body:s};return i.emulatorConfig&&Qa(i.emulatorConfig.host)&&(y.credentials="include"),by.fetch()(h,y)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function AT(i,e){return Ro(i,"POST","/v2/accounts:revokeToken",Bd(i,e))}/**
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
 */class uo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):og(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){pe(e.length!==0,"internal-error");const t=og(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(pe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await ST(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new uo;return s&&(pe(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(pe(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(pe(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new uo,this.toJSON())}_performRefresh(){return Sr("not implemented")}}/**
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
 */function hi(i,e){pe(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class kn{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new wT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new gd(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Ua(this,this.stsTokenManager.getToken(this.auth,e));return pe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return vT(this,e)}reload(){return TT(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new kn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Uu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pn(this.auth.app))return Promise.reject(ss(this.auth));const e=await this.getIdToken();return await Ua(this,_T(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,u=t.phoneNumber??void 0,h=t.photoURL??void 0,m=t.tenantId??void 0,y=t._redirectEventId??void 0,_=t.createdAt??void 0,w=t.lastLoginAt??void 0,{uid:A,emailVerified:V,isAnonymous:z,providerData:K,stsTokenManager:Q}=t;pe(A&&Q,e,"internal-error");const G=uo.fromJSON(this.name,Q);pe(typeof A=="string",e,"internal-error"),hi(s,e.name),hi(o,e.name),pe(typeof V=="boolean",e,"internal-error"),pe(typeof z=="boolean",e,"internal-error"),hi(u,e.name),hi(h,e.name),hi(m,e.name),hi(y,e.name),hi(_,e.name),hi(w,e.name);const _e=new kn({uid:A,auth:e,email:o,emailVerified:V,displayName:s,isAnonymous:z,photoURL:h,phoneNumber:u,tenantId:m,stsTokenManager:G,createdAt:_,lastLoginAt:w});return K&&Array.isArray(K)&&(_e.providerData=K.map(ve=>({...ve}))),y&&(_e._redirectEventId=y),_e}static async _fromIdTokenResponse(e,t,s=!1){const o=new uo;o.updateFromServerResponse(t);const u=new kn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Uu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];pe(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?jy(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new uo;m.updateFromIdToken(s);const y=new kn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new gd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(y,_),y}}/**
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
 */const ag=new Map;function Ar(i){kr(i instanceof Function,"Expected a class definition");let e=ag.get(i);return e?(kr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,ag.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class zy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}zy.type="NONE";const lg=zy;/**
 * @license
 * Copyright 2019 Google LLC
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
 */function Cu(i,e,t){return`firebase:${i}:${e}:${t}`}class co{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Cu(this.userKey,o.apiKey,u),this.fullPersistenceKey=Cu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Fu(this.auth,{idToken:e}).catch(()=>{});return t?kn._fromGetAccountInfoResponse(this.auth,t,e):null}return kn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new co(Ar(lg),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||Ar(lg);const h=Cu(s,e.config.apiKey,e.name);let m=null;for(const _ of t)try{const w=await _._get(h);if(w){let A;if(typeof w=="string"){const V=await Fu(e,{idToken:w}).catch(()=>{});if(!V)break;A=await kn._fromGetAccountInfoResponse(e,V,w)}else A=kn._fromJSON(e,w);_!==u&&(m=A),u=_;break}}catch{}const y=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new co(u,e,s):(u=y[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async _=>{if(_!==u)try{await _._remove(h)}catch{}})),new co(u,e,s))}}/**
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
 */function ug(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Hy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(By(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gy(e))return"Blackberry";if(Ky(e))return"Webos";if($y(e))return"Safari";if((e.includes("chrome/")||qy(e))&&!e.includes("edge/"))return"Chrome";if(Wy(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function By(i=Ut()){return/firefox\//i.test(i)}function $y(i=Ut()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qy(i=Ut()){return/crios\//i.test(i)}function Hy(i=Ut()){return/iemobile/i.test(i)}function Wy(i=Ut()){return/android/i.test(i)}function Gy(i=Ut()){return/blackberry/i.test(i)}function Ky(i=Ut()){return/webos/i.test(i)}function qd(i=Ut()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function RT(i=Ut()){var e;return qd(i)&&!!((e=window.navigator)!=null&&e.standalone)}function CT(){return Bw()&&document.documentMode===10}function Qy(i=Ut()){return qd(i)||Wy(i)||Ky(i)||Gy(i)||/windows phone/i.test(i)||Hy(i)}/**
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
 */function Yy(i,e=[]){let t;switch(i){case"Browser":t=ug(Ut());break;case"Worker":t=`${ug(Ut())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ao}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class PT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const y=e(u);h(y)}catch(y){m(y)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function kT(i,e={}){return Ro(i,"GET","/v2/passwordPolicy",Bd(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const NT=6;class xT{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??NT,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class DT{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cg(this),this.idTokenSubscription=new cg(this),this.beforeStateQueue=new PT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=My,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ar(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await co.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Fu(this,{idToken:e}),s=await kn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(Pn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(u=this.redirectUser)==null?void 0:u._redirectEventId,m=s==null?void 0:s._redirectEventId,y=await this.tryRedirectSignIn(e);(!h||h===m)&&(y!=null&&y.user)&&(s=y.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(h){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Uu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Pn(this.app))return Promise.reject(ss(this));const t=e?$t(e):null;return t&&pe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Pn(this.app)?Promise.reject(ss(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Pn(this.app)?Promise.reject(ss(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ar(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await kT(this),t=new xT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ga("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await AT(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ar(e)||this._popupRedirectResolver;pe(t,this,"argument-error"),this.redirectPersistenceManager=await co.create(this,[Ar(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(pe(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,s,o);return()=>{h=!0,y()}}else{const y=e.addObserver(t);return()=>{h=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Yy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Pn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&lT(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function tc(i){return $t(i)}class cg{constructor(e){this.auth=e,this.observer=null,this.addObserver=Yw(t=>this.observer=t)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Hd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function VT(i){Hd=i}function OT(i){return Hd.loadJS(i)}function LT(){return Hd.gapiScript}function MT(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
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
 */function bT(i,e){const t=Fd(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(as(u,e??{}))return o;rr(o,"already-initialized")}return t.initialize({options:e})}function FT(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Ar);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function UT(i,e,t){const s=tc(i);pe(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=Jy(e),{host:h,port:m}=jT(e),y=m===null?"":`:${m}`,_={url:`${u}//${h}${y}/`},w=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){pe(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),pe(as(_,s.config.emulator)&&as(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,Qa(h)?Py(`${u}//${h}${y}`):zT()}function Jy(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function jT(i){const e=Jy(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:hg(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:hg(h)}}}function hg(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function zT(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class Xy{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Sr("not implemented")}_getIdTokenResponse(e){return Sr("not implemented")}_linkToIdToken(e,t){return Sr("not implemented")}_getReauthenticationResolver(e){return Sr("not implemented")}}/**
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
 */async function ho(i,e){return gT(i,"POST","/v1/accounts:signInWithIdp",Bd(i,e))}/**
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
 */const BT="http://localhost";class us extends Xy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new us(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):rr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=t;if(!s||!o)return null;const h=new us(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return ho(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,ho(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ho(e,t)}buildRequest(){const e={requestUri:BT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ka(t)}return e}}/**
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
 */class Wd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Ja extends Wd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class di extends Ja{constructor(){super("facebook.com")}static credential(e){return us._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return di.credential(e.oauthAccessToken)}catch{return null}}}di.FACEBOOK_SIGN_IN_METHOD="facebook.com";di.PROVIDER_ID="facebook.com";/**
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
 */class Ir extends Ja{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return us._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Ir.credential(t,s)}catch{return null}}}Ir.GOOGLE_SIGN_IN_METHOD="google.com";Ir.PROVIDER_ID="google.com";/**
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
 */class fi extends Ja{constructor(){super("github.com")}static credential(e){return us._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fi.credentialFromTaggedObject(e)}static credentialFromError(e){return fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fi.credential(e.oauthAccessToken)}catch{return null}}}fi.GITHUB_SIGN_IN_METHOD="github.com";fi.PROVIDER_ID="github.com";/**
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
 */class pi extends Ja{constructor(){super("twitter.com")}static credential(e,t){return us._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return pi.credentialFromTaggedObject(e)}static credentialFromError(e){return pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return pi.credential(t,s)}catch{return null}}}pi.TWITTER_SIGN_IN_METHOD="twitter.com";pi.PROVIDER_ID="twitter.com";/**
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
 */class yo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await kn._fromIdTokenResponse(e,s,o),h=dg(s);return new yo({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=dg(s);return new yo({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function dg(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class ju extends Vr{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,ju.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new ju(e,t,s,o)}}function Zy(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?ju._fromErrorAndOperation(i,u,e,s):u})}async function $T(i,e,t=!1){const s=await Ua(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return yo._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function qT(i,e,t=!1){const{auth:s}=i;if(Pn(s.app))return Promise.reject(ss(s));const o="reauthenticate";try{const u=await Ua(i,Zy(s,o,e,i),t);pe(u.idToken,s,"internal-error");const h=$d(u.idToken);pe(h,s,"internal-error");const{sub:m}=h;return pe(i.uid===m,s,"user-mismatch"),yo._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&rr(s,"user-mismatch"),u}}/**
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
 */async function HT(i,e,t=!1){if(Pn(i.app))return Promise.reject(ss(i));const s="signIn",o=await Zy(i,s,e),u=await yo._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}/**
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
 */function WT(i,e){return $t(i).setPersistence(e)}function GT(i,e,t,s){return $t(i).onIdTokenChanged(e,t,s)}function KT(i,e,t){return $t(i).beforeAuthStateChanged(e,t)}function QT(i,e,t,s){return $t(i).onAuthStateChanged(e,t,s)}function e_(i){return $t(i).signOut()}const zu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
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
 */class t_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(zu,"1"),this.storage.removeItem(zu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const YT=1e3,JT=10;class n_ extends t_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Qy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,y)=>{this.notifyListeners(h,y)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);CT()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,JT):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},YT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}n_.type="LOCAL";const r_=n_;/**
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
 */class i_ extends t_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}i_.type="SESSION";const s_=i_;/**
 * @license
 * Copyright 2019 Google LLC
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
 */function XT(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class nc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new nc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async _=>_(t.origin,u)),y=await XT(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:y})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nc.receivers=[];/**
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
 */function Gd(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class ZT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,y)=>{const _=Gd("",20);o.port1.start();const w=setTimeout(()=>{y(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(A){const V=A;if(V.data.eventId===_)switch(V.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(V.data.response);break;default:clearTimeout(w),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function Zn(){return window}function eI(i){Zn().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function o_(){return typeof Zn().WorkerGlobalScope<"u"&&typeof Zn().importScripts=="function"}async function tI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nI(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)==null?void 0:i.controller)||null}function rI(){return o_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const a_="firebaseLocalStorageDb",iI=1,Bu="firebaseLocalStorage",l_="fbase_key";class Xa{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function rc(i,e){return i.transaction([Bu],e?"readwrite":"readonly").objectStore(Bu)}function sI(){const i=indexedDB.deleteDatabase(a_);return new Xa(i).toPromise()}function yd(){const i=indexedDB.open(a_,iI);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Bu,{keyPath:l_})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Bu)?e(s):(s.close(),await sI(),e(await yd()))})})}async function fg(i,e,t){const s=rc(i,!0).put({[l_]:e,value:t});return new Xa(s).toPromise()}async function oI(i,e){const t=rc(i,!1).get(e),s=await new Xa(t).toPromise();return s===void 0?null:s.value}function pg(i,e){const t=rc(i,!0).delete(e);return new Xa(t).toPromise()}const aI=800,lI=3;class u_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>lI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return o_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nc._getInstance(rI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await tI(),!this.activeServiceWorker)return;this.sender=new ZT(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yd();return await fg(e,zu,"1"),await pg(e,zu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>fg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>oI(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>pg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=rc(o,!1).getAll();return new Xa(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}u_.type="LOCAL";const uI=u_;new Ya(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
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
 */function c_(i,e){return e?Ar(e):(pe(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Kd extends Xy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ho(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ho(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ho(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function cI(i){return HT(i.auth,new Kd(i),i.bypassAuthState)}function hI(i){const{auth:e,user:t}=i;return pe(t,e,"internal-error"),qT(t,new Kd(i),i.bypassAuthState)}async function dI(i){const{auth:e,user:t}=i;return pe(t,e,"internal-error"),$T(t,new Kd(i),i.bypassAuthState)}/**
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
 */class h_{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const y={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(y))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cI;case"linkViaPopup":case"linkViaRedirect":return dI;case"reauthViaPopup":case"reauthViaRedirect":return hI;default:rr(this.auth,"internal-error")}}resolve(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const fI=new Ya(2e3,1e4);async function pI(i,e,t){if(Pn(i.app))return Promise.reject(xn(i,"operation-not-supported-in-this-environment"));const s=tc(i);uT(i,e,Wd);const o=c_(s,t);return new rs(s,"signInViaPopup",e,o).executeNotNull()}class rs extends h_{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,rs.currentPopupAction&&rs.currentPopupAction.cancel(),rs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pe(e,this.auth,"internal-error"),e}async onExecution(){kr(this.filter.length===1,"Popup operations only handle one event");const e=Gd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(xn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(xn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,fI.get())};e()}}rs.currentPopupAction=null;/**
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
 */const mI="pendingRedirect",Pu=new Map;class gI extends h_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Pu.get(this.auth._key());if(!e){try{const s=await yI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Pu.set(this.auth._key(),e)}return this.bypassAuthState||Pu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yI(i,e){const t=EI(e),s=vI(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function _I(i,e){Pu.set(i._key(),e)}function vI(i){return Ar(i._redirectPersistence)}function EI(i){return Cu(mI,i.config.apiKey,i.name)}async function wI(i,e,t=!1){if(Pn(i.app))return Promise.reject(ss(i));const s=tc(i),o=c_(s,e),h=await new gI(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const TI=600*1e3;class II{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!SI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!d_(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(xn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=TI&&this.cachedEventUids.clear(),this.cachedEventUids.has(mg(e))}saveEventToCache(e){this.cachedEventUids.add(mg(e)),this.lastProcessedEventTime=Date.now()}}function mg(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function d_({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function SI(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return d_(i);default:return!1}}/**
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
 */async function AI(i,e={}){return Ro(i,"GET","/v1/projects",e)}/**
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
 */const RI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,CI=/^https?/;async function PI(i){if(i.config.emulator)return;const{authorizedDomains:e}=await AI(i);for(const t of e)try{if(kI(t))return}catch{}rr(i,"unauthorized-domain")}function kI(i){const e=md(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!CI.test(t))return!1;if(RI.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const NI=new Ya(3e4,6e4);function gg(){const i=Zn().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function xI(i){return new Promise((e,t)=>{var o,u,h;function s(){gg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gg(),t(xn(i,"network-request-failed"))},timeout:NI.get()})}if((u=(o=Zn().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((h=Zn().gapi)!=null&&h.load)s();else{const m=MT("iframefcb");return Zn()[m]=()=>{gapi.load?s():t(xn(i,"network-request-failed"))},OT(`${LT()}?onload=${m}`).catch(y=>t(y))}}).catch(e=>{throw ku=null,e})}let ku=null;function DI(i){return ku=ku||xI(i),ku}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const VI=new Ya(5e3,15e3),OI="__/auth/iframe",LI="emulator/auth/iframe",MI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function FI(i){const e=i.config;pe(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?zd(e,LI):`https://${i.config.authDomain}/${OI}`,s={apiKey:e.apiKey,appName:i.name,v:Ao},o=bI.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Ka(s).slice(1)}`}async function UI(i){const e=await DI(i),t=Zn().gapi;return pe(t,i,"internal-error"),e.open({where:document.body,url:FI(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:MI,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=xn(i,"network-request-failed"),m=Zn().setTimeout(()=>{u(h)},VI.get());function y(){Zn().clearTimeout(m),o(s)}s.ping(y).then(y,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const jI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zI=500,BI=600,$I="_blank",qI="http://localhost";class yg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function HI(i,e,t,s=zI,o=BI){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const y={...jI,width:s.toString(),height:o.toString(),top:u,left:h},_=Ut().toLowerCase();t&&(m=qy(_)?$I:t),By(_)&&(e=e||qI,y.scrollbars="yes");const w=Object.entries(y).reduce((V,[z,K])=>`${V}${z}=${K},`,"");if(RT(_)&&m!=="_self")return WI(e||"",m),new yg(null);const A=window.open(e||"",m,w);pe(A,i,"popup-blocked");try{A.focus()}catch{}return new yg(A)}function WI(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const GI="__/auth/handler",KI="emulator/auth/handler",QI=encodeURIComponent("fac");async function _g(i,e,t,s,o,u){pe(i.config.authDomain,i,"auth-domain-config-required"),pe(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:Ao,eventId:o};if(e instanceof Wd){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",Qw(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,A]of Object.entries({}))h[w]=A}if(e instanceof Ja){const w=e.getScopes().filter(A=>A!=="");w.length>0&&(h.scopes=w.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const y=await i._getAppCheckToken(),_=y?`#${QI}=${encodeURIComponent(y)}`:"";return`${YI(i)}?${Ka(m).slice(1)}${_}`}function YI({config:i}){return i.emulator?zd(i,KI):`https://${i.authDomain}/${GI}`}/**
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
 */const id="webStorageSupport";class JI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=s_,this._completeRedirectFn=wI,this._overrideRedirectResult=_I}async _openPopup(e,t,s,o){var h;kr((h=this.eventManagers[e._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const u=await _g(e,t,s,md(),o);return HI(e,u,Gd())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await _g(e,t,s,md(),o);return eI(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(kr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await UI(e),s=new II(e);return t.register("authEvent",o=>(pe(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(id,{type:id},o=>{var h;const u=(h=o==null?void 0:o[0])==null?void 0:h[id];u!==void 0&&t(!!u),rr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=PI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Qy()||$y()||qd()}}const XI=JI;var vg="@firebase/auth",Eg="1.13.0";/**
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
 */class ZI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function eS(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function tS(i){go(new ls("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;pe(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yy(i)},_=new DT(s,o,u,y);return FT(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),go(new ls("auth-internal",e=>{const t=tc(e.getProvider("auth").getImmediate());return(s=>new ZI(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),_i(vg,Eg,eS(i)),_i(vg,Eg,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const nS=300,rS=Cy("authIdTokenMaxAge")||nS;let wg=null;const iS=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>rS)return;const o=t==null?void 0:t.token;wg!==o&&(wg=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function sS(i=Dy()){const e=Fd(i,"auth");if(e.isInitialized())return e.getImmediate();const t=bT(i,{popupRedirectResolver:XI,persistence:[uI,r_,s_]}),s=Cy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=iS(u.toString());KT(t,h,()=>h(t.currentUser)),GT(t,m=>h(m))}}const o=Ay("auth");return o&&UT(t,`http://${o}`),t}function oS(){var i;return((i=document.getElementsByTagName("head"))==null?void 0:i[0])??document}VT({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=xn("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",oS().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});tS("Browser");var Tg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vi,f_;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,I){function R(){}R.prototype=I.prototype,P.F=I.prototype,P.prototype=new R,P.prototype.constructor=P,P.D=function(x,k,O){for(var S=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)S[$e-2]=arguments[$e];return I.prototype[k].apply(x,S)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(P,I,R){R||(R=0);const x=Array(16);if(typeof I=="string")for(var k=0;k<16;++k)x[k]=I.charCodeAt(R++)|I.charCodeAt(R++)<<8|I.charCodeAt(R++)<<16|I.charCodeAt(R++)<<24;else for(k=0;k<16;++k)x[k]=I[R++]|I[R++]<<8|I[R++]<<16|I[R++]<<24;I=P.g[0],R=P.g[1],k=P.g[2];let O=P.g[3],S;S=I+(O^R&(k^O))+x[0]+3614090360&4294967295,I=R+(S<<7&4294967295|S>>>25),S=O+(k^I&(R^k))+x[1]+3905402710&4294967295,O=I+(S<<12&4294967295|S>>>20),S=k+(R^O&(I^R))+x[2]+606105819&4294967295,k=O+(S<<17&4294967295|S>>>15),S=R+(I^k&(O^I))+x[3]+3250441966&4294967295,R=k+(S<<22&4294967295|S>>>10),S=I+(O^R&(k^O))+x[4]+4118548399&4294967295,I=R+(S<<7&4294967295|S>>>25),S=O+(k^I&(R^k))+x[5]+1200080426&4294967295,O=I+(S<<12&4294967295|S>>>20),S=k+(R^O&(I^R))+x[6]+2821735955&4294967295,k=O+(S<<17&4294967295|S>>>15),S=R+(I^k&(O^I))+x[7]+4249261313&4294967295,R=k+(S<<22&4294967295|S>>>10),S=I+(O^R&(k^O))+x[8]+1770035416&4294967295,I=R+(S<<7&4294967295|S>>>25),S=O+(k^I&(R^k))+x[9]+2336552879&4294967295,O=I+(S<<12&4294967295|S>>>20),S=k+(R^O&(I^R))+x[10]+4294925233&4294967295,k=O+(S<<17&4294967295|S>>>15),S=R+(I^k&(O^I))+x[11]+2304563134&4294967295,R=k+(S<<22&4294967295|S>>>10),S=I+(O^R&(k^O))+x[12]+1804603682&4294967295,I=R+(S<<7&4294967295|S>>>25),S=O+(k^I&(R^k))+x[13]+4254626195&4294967295,O=I+(S<<12&4294967295|S>>>20),S=k+(R^O&(I^R))+x[14]+2792965006&4294967295,k=O+(S<<17&4294967295|S>>>15),S=R+(I^k&(O^I))+x[15]+1236535329&4294967295,R=k+(S<<22&4294967295|S>>>10),S=I+(k^O&(R^k))+x[1]+4129170786&4294967295,I=R+(S<<5&4294967295|S>>>27),S=O+(R^k&(I^R))+x[6]+3225465664&4294967295,O=I+(S<<9&4294967295|S>>>23),S=k+(I^R&(O^I))+x[11]+643717713&4294967295,k=O+(S<<14&4294967295|S>>>18),S=R+(O^I&(k^O))+x[0]+3921069994&4294967295,R=k+(S<<20&4294967295|S>>>12),S=I+(k^O&(R^k))+x[5]+3593408605&4294967295,I=R+(S<<5&4294967295|S>>>27),S=O+(R^k&(I^R))+x[10]+38016083&4294967295,O=I+(S<<9&4294967295|S>>>23),S=k+(I^R&(O^I))+x[15]+3634488961&4294967295,k=O+(S<<14&4294967295|S>>>18),S=R+(O^I&(k^O))+x[4]+3889429448&4294967295,R=k+(S<<20&4294967295|S>>>12),S=I+(k^O&(R^k))+x[9]+568446438&4294967295,I=R+(S<<5&4294967295|S>>>27),S=O+(R^k&(I^R))+x[14]+3275163606&4294967295,O=I+(S<<9&4294967295|S>>>23),S=k+(I^R&(O^I))+x[3]+4107603335&4294967295,k=O+(S<<14&4294967295|S>>>18),S=R+(O^I&(k^O))+x[8]+1163531501&4294967295,R=k+(S<<20&4294967295|S>>>12),S=I+(k^O&(R^k))+x[13]+2850285829&4294967295,I=R+(S<<5&4294967295|S>>>27),S=O+(R^k&(I^R))+x[2]+4243563512&4294967295,O=I+(S<<9&4294967295|S>>>23),S=k+(I^R&(O^I))+x[7]+1735328473&4294967295,k=O+(S<<14&4294967295|S>>>18),S=R+(O^I&(k^O))+x[12]+2368359562&4294967295,R=k+(S<<20&4294967295|S>>>12),S=I+(R^k^O)+x[5]+4294588738&4294967295,I=R+(S<<4&4294967295|S>>>28),S=O+(I^R^k)+x[8]+2272392833&4294967295,O=I+(S<<11&4294967295|S>>>21),S=k+(O^I^R)+x[11]+1839030562&4294967295,k=O+(S<<16&4294967295|S>>>16),S=R+(k^O^I)+x[14]+4259657740&4294967295,R=k+(S<<23&4294967295|S>>>9),S=I+(R^k^O)+x[1]+2763975236&4294967295,I=R+(S<<4&4294967295|S>>>28),S=O+(I^R^k)+x[4]+1272893353&4294967295,O=I+(S<<11&4294967295|S>>>21),S=k+(O^I^R)+x[7]+4139469664&4294967295,k=O+(S<<16&4294967295|S>>>16),S=R+(k^O^I)+x[10]+3200236656&4294967295,R=k+(S<<23&4294967295|S>>>9),S=I+(R^k^O)+x[13]+681279174&4294967295,I=R+(S<<4&4294967295|S>>>28),S=O+(I^R^k)+x[0]+3936430074&4294967295,O=I+(S<<11&4294967295|S>>>21),S=k+(O^I^R)+x[3]+3572445317&4294967295,k=O+(S<<16&4294967295|S>>>16),S=R+(k^O^I)+x[6]+76029189&4294967295,R=k+(S<<23&4294967295|S>>>9),S=I+(R^k^O)+x[9]+3654602809&4294967295,I=R+(S<<4&4294967295|S>>>28),S=O+(I^R^k)+x[12]+3873151461&4294967295,O=I+(S<<11&4294967295|S>>>21),S=k+(O^I^R)+x[15]+530742520&4294967295,k=O+(S<<16&4294967295|S>>>16),S=R+(k^O^I)+x[2]+3299628645&4294967295,R=k+(S<<23&4294967295|S>>>9),S=I+(k^(R|~O))+x[0]+4096336452&4294967295,I=R+(S<<6&4294967295|S>>>26),S=O+(R^(I|~k))+x[7]+1126891415&4294967295,O=I+(S<<10&4294967295|S>>>22),S=k+(I^(O|~R))+x[14]+2878612391&4294967295,k=O+(S<<15&4294967295|S>>>17),S=R+(O^(k|~I))+x[5]+4237533241&4294967295,R=k+(S<<21&4294967295|S>>>11),S=I+(k^(R|~O))+x[12]+1700485571&4294967295,I=R+(S<<6&4294967295|S>>>26),S=O+(R^(I|~k))+x[3]+2399980690&4294967295,O=I+(S<<10&4294967295|S>>>22),S=k+(I^(O|~R))+x[10]+4293915773&4294967295,k=O+(S<<15&4294967295|S>>>17),S=R+(O^(k|~I))+x[1]+2240044497&4294967295,R=k+(S<<21&4294967295|S>>>11),S=I+(k^(R|~O))+x[8]+1873313359&4294967295,I=R+(S<<6&4294967295|S>>>26),S=O+(R^(I|~k))+x[15]+4264355552&4294967295,O=I+(S<<10&4294967295|S>>>22),S=k+(I^(O|~R))+x[6]+2734768916&4294967295,k=O+(S<<15&4294967295|S>>>17),S=R+(O^(k|~I))+x[13]+1309151649&4294967295,R=k+(S<<21&4294967295|S>>>11),S=I+(k^(R|~O))+x[4]+4149444226&4294967295,I=R+(S<<6&4294967295|S>>>26),S=O+(R^(I|~k))+x[11]+3174756917&4294967295,O=I+(S<<10&4294967295|S>>>22),S=k+(I^(O|~R))+x[2]+718787259&4294967295,k=O+(S<<15&4294967295|S>>>17),S=R+(O^(k|~I))+x[9]+3951481745&4294967295,P.g[0]=P.g[0]+I&4294967295,P.g[1]=P.g[1]+(k+(S<<21&4294967295|S>>>11))&4294967295,P.g[2]=P.g[2]+k&4294967295,P.g[3]=P.g[3]+O&4294967295}s.prototype.v=function(P,I){I===void 0&&(I=P.length);const R=I-this.blockSize,x=this.C;let k=this.h,O=0;for(;O<I;){if(k==0)for(;O<=R;)o(this,P,O),O+=this.blockSize;if(typeof P=="string"){for(;O<I;)if(x[k++]=P.charCodeAt(O++),k==this.blockSize){o(this,x),k=0;break}}else for(;O<I;)if(x[k++]=P[O++],k==this.blockSize){o(this,x),k=0;break}}this.h=k,this.o+=I},s.prototype.A=function(){var P=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);P[0]=128;for(var I=1;I<P.length-8;++I)P[I]=0;I=this.o*8;for(var R=P.length-8;R<P.length;++R)P[R]=I&255,I/=256;for(this.v(P),P=Array(16),I=0,R=0;R<4;++R)for(let x=0;x<32;x+=8)P[I++]=this.g[R]>>>x&255;return P};function u(P,I){var R=m;return Object.prototype.hasOwnProperty.call(R,P)?R[P]:R[P]=I(P)}function h(P,I){this.h=I;const R=[];let x=!0;for(let k=P.length-1;k>=0;k--){const O=P[k]|0;x&&O==I||(R[k]=O,x=!1)}this.g=R}var m={};function y(P){return-128<=P&&P<128?u(P,function(I){return new h([I|0],I<0?-1:0)}):new h([P|0],P<0?-1:0)}function _(P){if(isNaN(P)||!isFinite(P))return A;if(P<0)return G(_(-P));const I=[];let R=1;for(let x=0;P>=R;x++)I[x]=P/R|0,R*=4294967296;return new h(I,0)}function w(P,I){if(P.length==0)throw Error("number format error: empty string");if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(P.charAt(0)=="-")return G(w(P.substring(1),I));if(P.indexOf("-")>=0)throw Error('number format error: interior "-" character');const R=_(Math.pow(I,8));let x=A;for(let O=0;O<P.length;O+=8){var k=Math.min(8,P.length-O);const S=parseInt(P.substring(O,O+k),I);k<8?(k=_(Math.pow(I,k)),x=x.j(k).add(_(S))):(x=x.j(R),x=x.add(_(S)))}return x}var A=y(0),V=y(1),z=y(16777216);i=h.prototype,i.m=function(){if(Q(this))return-G(this).m();let P=0,I=1;for(let R=0;R<this.g.length;R++){const x=this.i(R);P+=(x>=0?x:4294967296+x)*I,I*=4294967296}return P},i.toString=function(P){if(P=P||10,P<2||36<P)throw Error("radix out of range: "+P);if(K(this))return"0";if(Q(this))return"-"+G(this).toString(P);const I=_(Math.pow(P,6));var R=this;let x="";for(;;){const k=Ne(R,I).g;R=_e(R,k.j(I));let O=((R.g.length>0?R.g[0]:R.h)>>>0).toString(P);if(R=k,K(R))return O+x;for(;O.length<6;)O="0"+O;x=O+x}},i.i=function(P){return P<0?0:P<this.g.length?this.g[P]:this.h};function K(P){if(P.h!=0)return!1;for(let I=0;I<P.g.length;I++)if(P.g[I]!=0)return!1;return!0}function Q(P){return P.h==-1}i.l=function(P){return P=_e(this,P),Q(P)?-1:K(P)?0:1};function G(P){const I=P.g.length,R=[];for(let x=0;x<I;x++)R[x]=~P.g[x];return new h(R,~P.h).add(V)}i.abs=function(){return Q(this)?G(this):this},i.add=function(P){const I=Math.max(this.g.length,P.g.length),R=[];let x=0;for(let k=0;k<=I;k++){let O=x+(this.i(k)&65535)+(P.i(k)&65535),S=(O>>>16)+(this.i(k)>>>16)+(P.i(k)>>>16);x=S>>>16,O&=65535,S&=65535,R[k]=S<<16|O}return new h(R,R[R.length-1]&-2147483648?-1:0)};function _e(P,I){return P.add(G(I))}i.j=function(P){if(K(this)||K(P))return A;if(Q(this))return Q(P)?G(this).j(G(P)):G(G(this).j(P));if(Q(P))return G(this.j(G(P)));if(this.l(z)<0&&P.l(z)<0)return _(this.m()*P.m());const I=this.g.length+P.g.length,R=[];for(var x=0;x<2*I;x++)R[x]=0;for(x=0;x<this.g.length;x++)for(let k=0;k<P.g.length;k++){const O=this.i(x)>>>16,S=this.i(x)&65535,$e=P.i(k)>>>16,_t=P.i(k)&65535;R[2*x+2*k]+=S*_t,ve(R,2*x+2*k),R[2*x+2*k+1]+=O*_t,ve(R,2*x+2*k+1),R[2*x+2*k+1]+=S*$e,ve(R,2*x+2*k+1),R[2*x+2*k+2]+=O*$e,ve(R,2*x+2*k+2)}for(P=0;P<I;P++)R[P]=R[2*P+1]<<16|R[2*P];for(P=I;P<2*I;P++)R[P]=0;return new h(R,0)};function ve(P,I){for(;(P[I]&65535)!=P[I];)P[I+1]+=P[I]>>>16,P[I]&=65535,I++}function Te(P,I){this.g=P,this.h=I}function Ne(P,I){if(K(I))throw Error("division by zero");if(K(P))return new Te(A,A);if(Q(P))return I=Ne(G(P),I),new Te(G(I.g),G(I.h));if(Q(I))return I=Ne(P,G(I)),new Te(G(I.g),I.h);if(P.g.length>30){if(Q(P)||Q(I))throw Error("slowDivide_ only works with positive integers.");for(var R=V,x=I;x.l(P)<=0;)R=je(R),x=je(x);var k=Oe(R,1),O=Oe(x,1);for(x=Oe(x,2),R=Oe(R,2);!K(x);){var S=O.add(x);S.l(P)<=0&&(k=k.add(R),O=S),x=Oe(x,1),R=Oe(R,1)}return I=_e(P,k.j(I)),new Te(k,I)}for(k=A;P.l(I)>=0;){for(R=Math.max(1,Math.floor(P.m()/I.m())),x=Math.ceil(Math.log(R)/Math.LN2),x=x<=48?1:Math.pow(2,x-48),O=_(R),S=O.j(I);Q(S)||S.l(P)>0;)R-=x,O=_(R),S=O.j(I);K(O)&&(O=V),k=k.add(O),P=_e(P,S)}return new Te(k,P)}i.B=function(P){return Ne(this,P).h},i.and=function(P){const I=Math.max(this.g.length,P.g.length),R=[];for(let x=0;x<I;x++)R[x]=this.i(x)&P.i(x);return new h(R,this.h&P.h)},i.or=function(P){const I=Math.max(this.g.length,P.g.length),R=[];for(let x=0;x<I;x++)R[x]=this.i(x)|P.i(x);return new h(R,this.h|P.h)},i.xor=function(P){const I=Math.max(this.g.length,P.g.length),R=[];for(let x=0;x<I;x++)R[x]=this.i(x)^P.i(x);return new h(R,this.h^P.h)};function je(P){const I=P.g.length+1,R=[];for(let x=0;x<I;x++)R[x]=P.i(x)<<1|P.i(x-1)>>>31;return new h(R,P.h)}function Oe(P,I){const R=I>>5;I%=32;const x=P.g.length-R,k=[];for(let O=0;O<x;O++)k[O]=I>0?P.i(O+R)>>>I|P.i(O+R+1)<<32-I:P.i(O+R);return new h(k,P.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,f_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=w,vi=h}).apply(typeof Tg<"u"?Tg:typeof self<"u"?self:typeof window<"u"?window:{});var wu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var p_,ka,m_,Nu,_d,g_,y_,__;(function(){var i,e=Object.defineProperty;function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof wu=="object"&&wu];for(var p=0;p<l.length;++p){var g=l[p];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=t(this);function o(l,p){if(p)e:{var g=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var M=l[E];if(!(M in g))break e;g=g[M]}l=l[l.length-1],E=g[l],p=p(E),p!=E&&p!=null&&e(g,l,{configurable:!0,writable:!0,value:p})}}o("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(l){return l||function(p){var g=[],E;for(E in p)Object.prototype.hasOwnProperty.call(p,E)&&g.push([E,p[E]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function m(l){var p=typeof l;return p=="object"&&l!=null||p=="function"}function y(l,p,g){return l.call.apply(l.bind,arguments)}function _(l,p,g){return _=y,_.apply(null,arguments)}function w(l,p){var g=Array.prototype.slice.call(arguments,1);return function(){var E=g.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function A(l,p){function g(){}g.prototype=p.prototype,l.Z=p.prototype,l.prototype=new g,l.prototype.constructor=l,l.Ob=function(E,M,j){for(var X=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)X[ge-2]=arguments[ge];return p.prototype[M].apply(E,X)}}var V=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function z(l){const p=l.length;if(p>0){const g=Array(p);for(let E=0;E<p;E++)g[E]=l[E];return g}return[]}function K(l,p){for(let E=1;E<arguments.length;E++){const M=arguments[E];var g=typeof M;if(g=g!="object"?g:M?Array.isArray(M)?"array":g:"null",g=="array"||g=="object"&&typeof M.length=="number"){g=l.length||0;const j=M.length||0;l.length=g+j;for(let X=0;X<j;X++)l[g+X]=M[X]}else l.push(M)}}class Q{constructor(p,g){this.i=p,this.j=g,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function G(l){h.setTimeout(()=>{throw l},0)}function _e(){var l=P;let p=null;return l.g&&(p=l.g,l.g=l.g.next,l.g||(l.h=null),p.next=null),p}class ve{constructor(){this.h=this.g=null}add(p,g){const E=Te.get();E.set(p,g),this.h?this.h.next=E:this.g=E,this.h=E}}var Te=new Q(()=>new Ne,l=>l.reset());class Ne{constructor(){this.next=this.g=this.h=null}set(p,g){this.h=p,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let je,Oe=!1,P=new ve,I=()=>{const l=Promise.resolve(void 0);je=()=>{l.then(R)}};function R(){for(var l;l=_e();){try{l.h.call(l.g)}catch(g){G(g)}var p=Te;p.j(l),p.h<100&&(p.h++,l.next=p.g,p.g=l)}Oe=!1}function x(){this.u=this.u,this.C=this.C}x.prototype.u=!1,x.prototype.dispose=function(){this.u||(this.u=!0,this.N())},x.prototype[Symbol.dispose]=function(){this.dispose()},x.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function k(l,p){this.type=l,this.g=this.target=p,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var O=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var l=!1,p=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};h.addEventListener("test",g,p),h.removeEventListener("test",g,p)}catch{}return l})();function S(l){return/^[\s\xa0]*$/.test(l)}function $e(l,p){k.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,p)}A($e,k),$e.prototype.init=function(l,p){const g=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=p,p=l.relatedTarget,p||(g=="mouseover"?p=l.fromElement:g=="mouseout"&&(p=l.toElement)),this.relatedTarget=p,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&$e.Z.h.call(this)},$e.prototype.h=function(){$e.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var _t="closure_listenable_"+(Math.random()*1e6|0),Nt=0;function Ye(l,p,g,E,M){this.listener=l,this.proxy=null,this.src=p,this.type=g,this.capture=!!E,this.ha=M,this.key=++Nt,this.da=this.fa=!1}function Z(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function ue(l,p,g){for(const E in l)p.call(g,l[E],E,l)}function re(l,p){for(const g in l)p.call(void 0,l[g],g,l)}function D(l){const p={};for(const g in l)p[g]=l[g];return p}const q="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ee(l,p){let g,E;for(let M=1;M<arguments.length;M++){E=arguments[M];for(g in E)l[g]=E[g];for(let j=0;j<q.length;j++)g=q[j],Object.prototype.hasOwnProperty.call(E,g)&&(l[g]=E[g])}}function we(l){this.src=l,this.g={},this.h=0}we.prototype.add=function(l,p,g,E,M){const j=l.toString();l=this.g[j],l||(l=this.g[j]=[],this.h++);const X=Ae(l,p,E,M);return X>-1?(p=l[X],g||(p.fa=!1)):(p=new Ye(p,this.src,j,!!E,M),p.fa=g,l.push(p)),p};function Se(l,p){const g=p.type;if(g in l.g){var E=l.g[g],M=Array.prototype.indexOf.call(E,p,void 0),j;(j=M>=0)&&Array.prototype.splice.call(E,M,1),j&&(Z(p),l.g[g].length==0&&(delete l.g[g],l.h--))}}function Ae(l,p,g,E){for(let M=0;M<l.length;++M){const j=l[M];if(!j.da&&j.listener==p&&j.capture==!!g&&j.ha==E)return M}return-1}var be="closure_lm_"+(Math.random()*1e6|0),De={};function ze(l,p,g,E,M){if(Array.isArray(p)){for(let j=0;j<p.length;j++)ze(l,p[j],g,E,M);return null}return g=Oo(g),l&&l[_t]?l.J(p,g,m(E)?!!E.capture:!1,M):jt(l,p,g,!1,E,M)}function jt(l,p,g,E,M,j){if(!p)throw Error("Invalid event type");const X=m(M)?!!M.capture:!!M;let ge=_s(l);if(ge||(l[be]=ge=new we(l)),g=ge.add(p,g,E,X,j),g.proxy)return g;if(E=gs(),g.proxy=E,E.src=l,E.listener=g,l.addEventListener)O||(M=X),M===void 0&&(M=!1),l.addEventListener(p.toString(),E,M);else if(l.attachEvent)l.attachEvent(ys(p.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return g}function gs(){function l(g){return p.call(l.src,l.listener,g)}const p=il;return l}function Vo(l,p,g,E,M){if(Array.isArray(p))for(var j=0;j<p.length;j++)Vo(l,p[j],g,E,M);else E=m(E)?!!E.capture:!!E,g=Oo(g),l&&l[_t]?(l=l.i,j=String(p).toString(),j in l.g&&(p=l.g[j],g=Ae(p,g,E,M),g>-1&&(Z(p[g]),Array.prototype.splice.call(p,g,1),p.length==0&&(delete l.g[j],l.h--)))):l&&(l=_s(l))&&(p=l.g[p.toString()],l=-1,p&&(l=Ae(p,g,E,M)),(g=l>-1?p[l]:null)&&Lr(g))}function Lr(l){if(typeof l!="number"&&l&&!l.da){var p=l.src;if(p&&p[_t])Se(p.i,l);else{var g=l.type,E=l.proxy;p.removeEventListener?p.removeEventListener(g,E,l.capture):p.detachEvent?p.detachEvent(ys(g),E):p.addListener&&p.removeListener&&p.removeListener(E),(g=_s(p))?(Se(g,l),g.h==0&&(g.src=null,p[be]=null)):Z(l)}}}function ys(l){return l in De?De[l]:De[l]="on"+l}function il(l,p){if(l.da)l=!0;else{p=new $e(p,this);const g=l.listener,E=l.ha||l.src;l.fa&&Lr(l),l=g.call(E,p)}return l}function _s(l){return l=l[be],l instanceof we?l:null}var ki="__closure_events_fn_"+(Math.random()*1e9>>>0);function Oo(l){return typeof l=="function"?l:(l[ki]||(l[ki]=function(p){return l.handleEvent(p)}),l[ki])}function ut(){x.call(this),this.i=new we(this),this.M=this,this.G=null}A(ut,x),ut.prototype[_t]=!0,ut.prototype.removeEventListener=function(l,p,g,E){Vo(this,l,p,g,E)};function it(l,p){var g,E=l.G;if(E)for(g=[];E;E=E.G)g.push(E);if(l=l.M,E=p.type||p,typeof p=="string")p=new k(p,l);else if(p instanceof k)p.target=p.target||l;else{var M=p;p=new k(E,l),Ee(p,M)}M=!0;let j,X;if(g)for(X=g.length-1;X>=0;X--)j=p.g=g[X],M=_n(j,E,!0,p)&&M;if(j=p.g=l,M=_n(j,E,!0,p)&&M,M=_n(j,E,!1,p)&&M,g)for(X=0;X<g.length;X++)j=p.g=g[X],M=_n(j,E,!1,p)&&M}ut.prototype.N=function(){if(ut.Z.N.call(this),this.i){var l=this.i;for(const p in l.g){const g=l.g[p];for(let E=0;E<g.length;E++)Z(g[E]);delete l.g[p],l.h--}}this.G=null},ut.prototype.J=function(l,p,g,E){return this.i.add(String(l),p,!1,g,E)},ut.prototype.K=function(l,p,g,E){return this.i.add(String(l),p,!0,g,E)};function _n(l,p,g,E){if(p=l.i.g[String(p)],!p)return!0;p=p.concat();let M=!0;for(let j=0;j<p.length;++j){const X=p[j];if(X&&!X.da&&X.capture==g){const ge=X.listener,st=X.ha||X.src;X.fa&&Se(l.i,X),M=ge.call(st,E)!==!1&&M}}return M&&!E.defaultPrevented}function Lo(l,p){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=_(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:h.setTimeout(l,p||0)}function Mo(l){l.g=Lo(()=>{l.g=null,l.i&&(l.i=!1,Mo(l))},l.l);const p=l.h;l.h=null,l.m.apply(null,p)}class sl extends x{constructor(p,g){super(),this.m=p,this.l=g,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Mo(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Mr(l){x.call(this),this.h=l,this.g={}}A(Mr,x);var bo=[];function vs(l){ue(l.g,function(p,g){this.g.hasOwnProperty(g)&&Lr(p)},l),l.g={}}Mr.prototype.N=function(){Mr.Z.N.call(this),vs(this)},Mr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var br=h.JSON.stringify,ol=h.JSON.parse,Ni=class{stringify(l){return h.JSON.stringify(l,void 0)}parse(l){return h.JSON.parse(l,void 0)}};function Fr(){}function al(){}var Ur={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Es(){k.call(this,"d")}A(Es,k);function Fo(){k.call(this,"c")}A(Fo,k);var vn={},ws=null;function jr(){return ws=ws||new ut}vn.Ia="serverreachability";function Ts(l){k.call(this,vn.Ia,l)}A(Ts,k);function sr(l){const p=jr();it(p,new Ts(p))}vn.STAT_EVENT="statevent";function or(l,p){k.call(this,vn.STAT_EVENT,l),this.stat=p}A(or,k);function tt(l){const p=jr();it(p,new or(p,l))}vn.Ja="timingevent";function Uo(l,p){k.call(this,vn.Ja,l),this.size=p}A(Uo,k);function zr(l,p){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){l()},p)}function Br(){this.g=!0}Br.prototype.ua=function(){this.g=!1};function ll(l,p,g,E,M,j){l.info(function(){if(l.g)if(j){var X="",ge=j.split("&");for(let Ue=0;Ue<ge.length;Ue++){var st=ge[Ue].split("=");if(st.length>1){const ct=st[0];st=st[1];const nn=ct.split("_");X=nn.length>=2&&nn[1]=="type"?X+(ct+"="+st+"&"):X+(ct+"=redacted&")}}}else X=null;else X=j;return"XMLHTTP REQ ("+E+") [attempt "+M+"]: "+p+`
`+g+`
`+X})}function ul(l,p,g,E,M,j,X){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+M+"]: "+p+`
`+g+`
`+j+" "+X})}function On(l,p,g,E){l.info(function(){return"XMLHTTP TEXT ("+p+"): "+xi(l,g)+(E?" "+E:"")})}function cl(l,p){l.info(function(){return"TIMEOUT: "+p})}Br.prototype.info=function(){};function xi(l,p){if(!l.g)return p;if(!p)return null;try{const j=JSON.parse(p);if(j){for(l=0;l<j.length;l++)if(Array.isArray(j[l])){var g=j[l];if(!(g.length<2)){var E=g[1];if(Array.isArray(E)&&!(E.length<1)){var M=E[0];if(M!="noop"&&M!="stop"&&M!="close")for(let X=1;X<E.length;X++)E[X]=""}}}}return br(j)}catch{return p}}var $r={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},qr={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},hl;function ar(){}A(ar,Fr),ar.prototype.g=function(){return new XMLHttpRequest},hl=new ar;function Ln(l){return encodeURIComponent(String(l))}function Is(l){var p=1;l=l.split(":");const g=[];for(;p>0&&l.length;)g.push(l.shift()),p--;return l.length&&g.push(l.join(":")),g}function ln(l,p,g,E){this.j=l,this.i=p,this.l=g,this.S=E||1,this.V=new Mr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new dl}function dl(){this.i=null,this.g="",this.h=!1}var fl={},jo={};function En(l,p,g){l.M=1,l.A=ur(un(p)),l.u=g,l.R=!0,zo(l,null)}function zo(l,p){l.F=Date.now(),Di(l),l.B=un(l.A);var g=l.B,E=l.S;Array.isArray(E)||(E=[String(E)]),Jo(g.i,"t",E),l.C=0,g=l.j.L,l.h=new dl,l.g=Il(l.j,g?p:null,!l.u),l.P>0&&(l.O=new sl(_(l.Y,l,l.g),l.P)),p=l.V,g=l.g,E=l.ba;var M="readystatechange";Array.isArray(M)||(M&&(bo[0]=M.toString()),M=bo);for(let j=0;j<M.length;j++){const X=ze(g,M[j],E||p.handleEvent,!1,p.h||p);if(!X)break;p.g[X.key]=X}p=l.J?D(l.J):{},l.u?(l.v||(l.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,p)):(l.v="GET",l.g.ea(l.B,l.v,null,p)),sr(),ll(l.i,l.v,l.B,l.l,l.S,l.u)}ln.prototype.ba=function(l){l=l.target;const p=this.O;p&&Bn(l)==3?p.j():this.Y(l)},ln.prototype.Y=function(l){try{if(l==this.g)e:{const ge=Bn(this.g),st=this.g.ya(),Ue=this.g.ca();if(!(ge<3)&&(ge!=3||this.g&&(this.h.h||this.g.la()||wl(this.g)))){this.K||ge!=4||st==7||(st==8||Ue<=0?sr(3):sr(2)),Ss(this);var p=this.g.ca();this.X=p;var g=pl(this);if(this.o=p==200,ul(this.i,this.v,this.B,this.l,this.S,ge,p),this.o){if(this.U&&!this.L){t:{if(this.g){var E,M=this.g;if((E=M.g?M.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(E)){var j=E;break t}}j=null}if(l=j)On(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ge(this,l);else{this.o=!1,this.m=3,tt(12),lr(this),Vi(this);break e}}if(this.R){l=!0;let ct;for(;!this.K&&this.C<g.length;)if(ct=gl(this,g),ct==jo){ge==4&&(this.m=4,tt(14),l=!1),On(this.i,this.l,null,"[Incomplete Response]");break}else if(ct==fl){this.m=4,tt(15),On(this.i,this.l,g,"[Invalid Chunk]"),l=!1;break}else On(this.i,this.l,ct,null),Ge(this,ct);if(ml(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ge!=4||g.length!=0||this.h.h||(this.m=1,tt(16),l=!1),this.o=this.o&&l,!l)On(this.i,this.l,g,"[Invalid Chunked Response]"),lr(this),Vi(this);else if(g.length>0&&!this.W){this.W=!0;var X=this.j;X.g==this&&X.aa&&!X.P&&(X.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),Bi(X),X.P=!0,tt(11))}}else On(this.i,this.l,g,null),Ge(this,g);ge==4&&lr(this),this.o&&!this.K&&(ge==4?Os(this.j,this):(this.o=!1,Di(this)))}else Zo(this.g),p==400&&g.indexOf("Unknown SID")>0?(this.m=3,tt(12)):(this.m=0,tt(13)),lr(this),Vi(this)}}}catch{}finally{}};function pl(l){if(!ml(l))return l.g.la();const p=wl(l.g);if(p==="")return"";let g="";const E=p.length,M=Bn(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return lr(l),Vi(l),"";l.h.i=new h.TextDecoder}for(let j=0;j<E;j++)l.h.h=!0,g+=l.h.i.decode(p[j],{stream:!(M&&j==E-1)});return p.length=0,l.h.g+=g,l.C=0,l.h.g}function ml(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function gl(l,p){var g=l.C,E=p.indexOf(`
`,g);return E==-1?jo:(g=Number(p.substring(g,E)),isNaN(g)?fl:(E+=1,E+g>p.length?jo:(p=p.slice(E,E+g),l.C=E+g,p)))}ln.prototype.cancel=function(){this.K=!0,lr(this)};function Di(l){l.T=Date.now()+l.H,Bo(l,l.H)}function Bo(l,p){if(l.D!=null)throw Error("WatchDog timer not null");l.D=zr(_(l.aa,l),p)}function Ss(l){l.D&&(h.clearTimeout(l.D),l.D=null)}ln.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(cl(this.i,this.B),this.M!=2&&(sr(),tt(17)),lr(this),this.m=2,Vi(this)):Bo(this,this.T-l)};function Vi(l){l.j.I==0||l.K||Os(l.j,l)}function lr(l){Ss(l);var p=l.O;p&&typeof p.dispose=="function"&&p.dispose(),l.O=null,vs(l.V),l.g&&(p=l.g,l.g=null,p.abort(),p.dispose())}function Ge(l,p){try{var g=l.j;if(g.I!=0&&(g.g==l||qo(g.h,l))){if(!l.L&&qo(g.h,l)&&g.I==3){try{var E=g.Ba.g.parse(p)}catch{E=null}if(Array.isArray(E)&&E.length==3){var M=E;if(M[0]==0){e:if(!g.v){if(g.g)if(g.g.F+3e3<l.F)Vs(g),en(g);else break e;Hn(g),tt(18)}}else g.xa=M[1],0<g.xa-g.K&&M[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=zr(_(g.Va,g),6e3));Oi(g.h)<=1&&g.ta&&(g.ta=void 0)}else tn(g,11)}else if((l.L||g.g==l)&&Vs(g),!S(p))for(M=g.Ba.g.parse(p),p=0;p<M.length;p++){let Ue=M[p];const ct=Ue[0];if(!(ct<=g.K))if(g.K=ct,Ue=Ue[1],g.I==2)if(Ue[0]=="c"){g.M=Ue[1],g.ba=Ue[2];const nn=Ue[3];nn!=null&&(g.ka=nn,g.j.info("VER="+g.ka));const pr=Ue[4];pr!=null&&(g.za=pr,g.j.info("SVER="+g.za));const Wn=Ue[5];Wn!=null&&typeof Wn=="number"&&Wn>0&&(E=1.5*Wn,g.O=E,g.j.info("backChannelRequestTimeoutMs_="+E)),E=g;const Gn=l.g;if(Gn){const bs=Gn.g?Gn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(bs){var j=E.h;j.g||bs.indexOf("spdy")==-1&&bs.indexOf("quic")==-1&&bs.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(Rs(j,j.h),j.h=null))}if(E.G){const na=Gn.g?Gn.g.getResponseHeader("X-HTTP-Session-Id"):null;na&&(E.wa=na,Me(E.J,E.G,na))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-l.F,g.j.info("Handshake RTT: "+g.T+"ms")),E=g;var X=l;if(E.na=ta(E,E.L?E.ba:null,E.W),X.L){Li(E.h,X);var ge=X,st=E.O;st&&(ge.H=st),ge.D&&(Ss(ge),Di(ge)),E.g=X}else xt(E);g.i.length>0&&fr(g)}else Ue[0]!="stop"&&Ue[0]!="close"||tn(g,7);else g.I==3&&(Ue[0]=="stop"||Ue[0]=="close"?Ue[0]=="stop"?tn(g,7):xs(g):Ue[0]!="noop"&&g.l&&g.l.qa(Ue),g.A=0)}}sr(4)}catch{}}var Sc=class{constructor(l,p){this.g=l,this.map=p}};function As(l){this.l=l||10,h.PerformanceNavigationTiming?(l=h.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function $o(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Oi(l){return l.h?1:l.g?l.g.size:0}function qo(l,p){return l.h?l.h==p:l.g?l.g.has(p):!1}function Rs(l,p){l.g?l.g.add(p):l.h=p}function Li(l,p){l.h&&l.h==p?l.h=null:l.g&&l.g.has(p)&&l.g.delete(p)}As.prototype.cancel=function(){if(this.i=Jt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Jt(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let p=l.i;for(const g of l.g.values())p=p.concat(g.G);return p}return z(l.i)}var yl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Xt(l,p){if(l){l=l.split("&");for(let g=0;g<l.length;g++){const E=l[g].indexOf("=");let M,j=null;E>=0?(M=l[g].substring(0,E),j=l[g].substring(E+1)):M=l[g],p(M,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function Mn(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;l instanceof Mn?(this.l=l.l,Mi(this,l.j),this.o=l.o,this.g=l.g,bn(this,l.u),this.h=l.h,Hr(this,Xo(l.i)),this.m=l.m):l&&(p=String(l).match(yl))?(this.l=!1,Mi(this,p[1]||"",!0),this.o=bi(p[2]||""),this.g=bi(p[3]||"",!0),bn(this,p[4]),this.h=bi(p[5]||"",!0),Hr(this,p[6]||"",!0),this.m=bi(p[7]||"")):(this.l=!1,this.i=new ke(null,this.l))}Mn.prototype.toString=function(){const l=[];var p=this.j;p&&l.push(Fi(p,Wo,!0),":");var g=this.g;return(g||p=="file")&&(l.push("//"),(p=this.o)&&l.push(Fi(p,Wo,!0),"@"),l.push(Ln(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&l.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(Fi(g,g.charAt(0)=="/"?Ui:Go,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",Fi(g,Ko)),l.join("")},Mn.prototype.resolve=function(l){const p=un(this);let g=!!l.j;g?Mi(p,l.j):g=!!l.o,g?p.o=l.o:g=!!l.g,g?p.g=l.g:g=l.u!=null;var E=l.h;if(g)bn(p,l.u);else if(g=!!l.h){if(E.charAt(0)!="/")if(this.g&&!this.h)E="/"+E;else{var M=p.h.lastIndexOf("/");M!=-1&&(E=p.h.slice(0,M+1)+E)}if(M=E,M==".."||M==".")E="";else if(M.indexOf("./")!=-1||M.indexOf("/.")!=-1){E=M.lastIndexOf("/",0)==0,M=M.split("/");const j=[];for(let X=0;X<M.length;){const ge=M[X++];ge=="."?E&&X==M.length&&j.push(""):ge==".."?((j.length>1||j.length==1&&j[0]!="")&&j.pop(),E&&X==M.length&&j.push("")):(j.push(ge),E=!0)}E=j.join("/")}else E=M}return g?p.h=E:g=l.i.toString()!=="",g?Hr(p,Xo(l.i)):g=!!l.m,g&&(p.m=l.m),p};function un(l){return new Mn(l)}function Mi(l,p,g){l.j=g?bi(p,!0):p,l.j&&(l.j=l.j.replace(/:$/,""))}function bn(l,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);l.u=p}else l.u=null}function Hr(l,p,g){p instanceof ke?(l.i=p,Ps(l.i,l.l)):(g||(p=Fi(p,Ac)),l.i=new ke(p,l.l))}function Me(l,p,g){l.i.set(p,g)}function ur(l){return Me(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function bi(l,p){return l?p?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Fi(l,p,g){return typeof l=="string"?(l=encodeURI(l).replace(p,Ho),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Ho(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Wo=/[#\/\?@]/g,Go=/[#\?:]/g,Ui=/[#\?]/g,Ac=/[#\?@]/g,Ko=/#/g;function ke(l,p){this.h=this.g=null,this.i=l||null,this.j=!!p}function Fn(l){l.g||(l.g=new Map,l.h=0,l.i&&Xt(l.i,function(p,g){l.add(decodeURIComponent(p.replace(/\+/g," ")),g)}))}i=ke.prototype,i.add=function(l,p){Fn(this),this.i=null,l=Un(this,l);let g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(p),this.h+=1,this};function Qo(l,p){Fn(l),p=Un(l,p),l.g.has(p)&&(l.i=null,l.h-=l.g.get(p).length,l.g.delete(p))}function Cs(l,p){return Fn(l),p=Un(l,p),l.g.has(p)}i.forEach=function(l,p){Fn(this),this.g.forEach(function(g,E){g.forEach(function(M){l.call(p,M,E,this)},this)},this)};function Yo(l,p){Fn(l);let g=[];if(typeof p=="string")Cs(l,p)&&(g=g.concat(l.g.get(Un(l,p))));else for(l=Array.from(l.g.values()),p=0;p<l.length;p++)g=g.concat(l[p]);return g}i.set=function(l,p){return Fn(this),this.i=null,l=Un(this,l),Cs(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[p]),this.h+=1,this},i.get=function(l,p){return l?(l=Yo(this,l),l.length>0?String(l[0]):p):p};function Jo(l,p,g){Qo(l,p),g.length>0&&(l.i=null,l.g.set(Un(l,p),z(g)),l.h+=g.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],p=Array.from(this.g.keys());for(let E=0;E<p.length;E++){var g=p[E];const M=Ln(g);g=Yo(this,g);for(let j=0;j<g.length;j++){let X=M;g[j]!==""&&(X+="="+Ln(g[j])),l.push(X)}}return this.i=l.join("&")};function Xo(l){const p=new ke;return p.i=l.i,l.g&&(p.g=new Map(l.g),p.h=l.h),p}function Un(l,p){return p=String(p),l.j&&(p=p.toLowerCase()),p}function Ps(l,p){p&&!l.j&&(Fn(l),l.i=null,l.g.forEach(function(g,E){const M=E.toLowerCase();E!=M&&(Qo(this,E),Jo(this,M,g))},l)),l.j=p}function jn(l,p){const g=new Br;if(h.Image){const E=new Image;E.onload=w(At,g,"TestLoadImage: loaded",!0,p,E),E.onerror=w(At,g,"TestLoadImage: error",!1,p,E),E.onabort=w(At,g,"TestLoadImage: abort",!1,p,E),E.ontimeout=w(At,g,"TestLoadImage: timeout",!1,p,E),h.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else p(!1)}function zn(l,p){const g=new Br,E=new AbortController,M=setTimeout(()=>{E.abort(),At(g,"TestPingServer: timeout",!1,p)},1e4);fetch(l,{signal:E.signal}).then(j=>{clearTimeout(M),j.ok?At(g,"TestPingServer: ok",!0,p):At(g,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(M),At(g,"TestPingServer: error",!1,p)})}function At(l,p,g,E,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),E(g)}catch{}}function ji(){this.g=new Ni}function cr(l){this.i=l.Sb||null,this.h=l.ab||!1}A(cr,Fr),cr.prototype.g=function(){return new Zt(this.i,this.h)};function Zt(l,p){ut.call(this),this.H=l,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}A(Zt,ut),i=Zt.prototype,i.open=function(l,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=p,this.readyState=1,wn(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(p.body=l),(this.H||h).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Wr(this)),this.readyState=0},i.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,wn(this)),this.g&&(this.readyState=3,wn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;_l(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function _l(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}i.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var p=l.value?l.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!l.done}))&&(this.response=this.responseText+=p)}l.done?Wr(this):wn(this),this.readyState==3&&_l(this)}},i.Oa=function(l){this.g&&(this.response=this.responseText=l,Wr(this))},i.Na=function(l){this.g&&(this.response=l,Wr(this))},i.ga=function(){this.g&&Wr(this)};function Wr(l){l.readyState=4,l.l=null,l.j=null,l.B=null,wn(l)}i.setRequestHeader=function(l,p){this.A.append(l,p)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],p=this.h.entries();for(var g=p.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=p.next();return l.join(`\r
`)};function wn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Zt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function vl(l){let p="";return ue(l,function(g,E){p+=E,p+=":",p+=g,p+=`\r
`}),p}function ks(l,p,g){e:{for(E in g){var E=!1;break e}E=!0}E||(g=vl(g),typeof l=="string"?g!=null&&Ln(g):Me(l,p,g))}function Be(l){ut.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}A(Be,ut);var El=/^https?$/i,Rc=["POST","PUT"];i=Be.prototype,i.Fa=function(l){this.H=l},i.ea=function(l,p,g,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);p=p?p.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():hl.g(),this.g.onreadystatechange=V(_(this.Ca,this));try{this.B=!0,this.g.open(p,String(l),!0),this.B=!1}catch(j){Gr(this,j);return}if(l=g||"",g=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var M in E)g.set(M,E[M]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const j of E.keys())g.set(j,E.get(j));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(g.keys()).find(j=>j.toLowerCase()=="content-type"),M=h.FormData&&l instanceof h.FormData,!(Array.prototype.indexOf.call(Rc,p,void 0)>=0)||E||M||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,X]of g)this.g.setRequestHeader(j,X);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(j){Gr(this,j)}};function Gr(l,p){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=p,l.o=5,Kr(l),dr(l)}function Kr(l){l.A||(l.A=!0,it(l,"complete"),it(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,it(this,"complete"),it(this,"abort"),dr(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),dr(this,!0)),Be.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?hr(this):this.Xa())},i.Xa=function(){hr(this)};function hr(l){if(l.h&&typeof u<"u"){if(l.v&&Bn(l)==4)setTimeout(l.Ca.bind(l),0);else if(it(l,"readystatechange"),Bn(l)==4){l.h=!1;try{const j=l.ca();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var g;if(!(g=p)){var E;if(E=j===0){let X=String(l.D).match(yl)[1]||null;!X&&h.self&&h.self.location&&(X=h.self.location.protocol.slice(0,-1)),E=!El.test(X?X.toLowerCase():"")}g=E}if(g)it(l,"complete"),it(l,"success");else{l.o=6;try{var M=Bn(l)>2?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.ca()+"]",Kr(l)}}finally{dr(l)}}}}function dr(l,p){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const g=l.g;l.g=null,p||it(l,"ready");try{g.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function Bn(l){return l.g?l.g.readyState:0}i.ca=function(){try{return Bn(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(l){if(this.g){var p=this.g.responseText;return l&&p.indexOf(l)==0&&(p=p.substring(l.length)),ol(p)}};function wl(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Zo(l){const p={};l=(l.g&&Bn(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(S(l[E]))continue;var g=Is(l[E]);const M=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const j=p[M]||[];p[M]=j,j.push(g)}re(p,function(E){return E.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function $n(l,p,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||p}function Ns(l){this.za=0,this.i=[],this.j=new Br,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=$n("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=$n("baseRetryDelayMs",5e3,l),this.Za=$n("retryDelaySeedMs",1e4,l),this.Ta=$n("forwardChannelMaxRetries",2,l),this.va=$n("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new As(l&&l.concurrentRequestLimit),this.Ba=new ji,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=Ns.prototype,i.ka=8,i.I=1,i.connect=function(l,p,g,E){tt(0),this.W=l,this.H=p||{},g&&E!==void 0&&(this.H.OSID=g,this.H.OAID=E),this.F=this.X,this.J=ta(this,null,this.W),fr(this)};function xs(l){if(Ds(l),l.I==3){var p=l.V++,g=un(l.J);if(Me(g,"SID",l.M),Me(g,"RID",p),Me(g,"TYPE","terminate"),qn(l,g),p=new ln(l,l.j,p),p.M=2,p.A=ur(un(g)),g=!1,h.navigator&&h.navigator.sendBeacon)try{g=h.navigator.sendBeacon(p.A.toString(),"")}catch{}!g&&h.Image&&(new Image().src=p.A,g=!0),g||(p.g=Il(p.j,null),p.g.ea(p.A)),p.F=Date.now(),Di(p)}$i(l)}function en(l){l.g&&(Bi(l),l.g.cancel(),l.g=null)}function Ds(l){en(l),l.v&&(h.clearTimeout(l.v),l.v=null),Vs(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&h.clearTimeout(l.m),l.m=null)}function fr(l){if(!$o(l.h)&&!l.m){l.m=!0;var p=l.Ea;je||I(),Oe||(je(),Oe=!0),P.add(p,l),l.D=0}}function Tl(l,p){return Oi(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=p.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=zr(_(l.Ea,l,p),Ls(l,l.D)),l.D++,!0)}i.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const M=new ln(this,this.j,l);let j=this.o;if(this.U&&(j?(j=D(j),Ee(j,this.U)):j=this.U),this.u!==null||this.R||(M.J=j,j=null),this.S)e:{for(var p=0,g=0;g<this.i.length;g++){t:{var E=this.i[g];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(p+=E,p>4096){p=g;break e}if(p===4096||g===this.i.length-1){p=g+1;break e}}p=1e3}else p=1e3;p=ea(this,M,p),g=un(this.J),Me(g,"RID",l),Me(g,"CVER",22),this.G&&Me(g,"X-HTTP-Session-Id",this.G),qn(this,g),j&&(this.R?p="headers="+Ln(vl(j))+"&"+p:this.u&&ks(g,this.u,j)),Rs(this.h,M),this.Ra&&Me(g,"TYPE","init"),this.S?(Me(g,"$req",p),Me(g,"SID","null"),M.U=!0,En(M,g,null)):En(M,g,p),this.I=2}}else this.I==3&&(l?zi(this,l):this.i.length==0||$o(this.h)||zi(this))};function zi(l,p){var g;p?g=p.l:g=l.V++;const E=un(l.J);Me(E,"SID",l.M),Me(E,"RID",g),Me(E,"AID",l.K),qn(l,E),l.u&&l.o&&ks(E,l.u,l.o),g=new ln(l,l.j,g,l.D+1),l.u===null&&(g.J=l.o),p&&(l.i=p.G.concat(l.i)),p=ea(l,g,1e3),g.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),Rs(l.h,g),En(g,E,p)}function qn(l,p){l.H&&ue(l.H,function(g,E){Me(p,E,g)}),l.l&&ue({},function(g,E){Me(p,E,g)})}function ea(l,p,g){g=Math.min(l.i.length,g);const E=l.l?_(l.l.Ka,l.l,l):null;e:{var M=l.i;let ge=-1;for(;;){const st=["count="+g];ge==-1?g>0?(ge=M[0].g,st.push("ofs="+ge)):ge=0:st.push("ofs="+ge);let Ue=!0;for(let ct=0;ct<g;ct++){var j=M[ct].g;const nn=M[ct].map;if(j-=ge,j<0)ge=Math.max(0,M[ct].g-100),Ue=!1;else try{j="req"+j+"_"||"";try{var X=nn instanceof Map?nn:Object.entries(nn);for(const[pr,Wn]of X){let Gn=Wn;m(Wn)&&(Gn=br(Wn)),st.push(j+pr+"="+encodeURIComponent(Gn))}}catch(pr){throw st.push(j+"type="+encodeURIComponent("_badmap")),pr}}catch{E&&E(nn)}}if(Ue){X=st.join("&");break e}}X=void 0}return l=l.i.splice(0,g),p.G=l,X}function xt(l){if(!l.g&&!l.v){l.Y=1;var p=l.Da;je||I(),Oe||(je(),Oe=!0),P.add(p,l),l.A=0}}function Hn(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=zr(_(l.Da,l),Ls(l,l.A)),l.A++,!0)}i.Da=function(){if(this.v=null,Qr(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=zr(_(this.Wa,this),l)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,tt(10),en(this),Qr(this))};function Bi(l){l.B!=null&&(h.clearTimeout(l.B),l.B=null)}function Qr(l){l.g=new ln(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var p=un(l.na);Me(p,"RID","rpc"),Me(p,"SID",l.M),Me(p,"AID",l.K),Me(p,"CI",l.F?"0":"1"),!l.F&&l.ia&&Me(p,"TO",l.ia),Me(p,"TYPE","xmlhttp"),qn(l,p),l.u&&l.o&&ks(p,l.u,l.o),l.O&&(l.g.H=l.O);var g=l.g;l=l.ba,g.M=1,g.A=ur(un(p)),g.u=null,g.R=!0,zo(g,l)}i.Va=function(){this.C!=null&&(this.C=null,en(this),Hn(this),tt(19))};function Vs(l){l.C!=null&&(h.clearTimeout(l.C),l.C=null)}function Os(l,p){var g=null;if(l.g==p){Vs(l),Bi(l),l.g=null;var E=2}else if(qo(l.h,p))g=p.G,Li(l.h,p),E=1;else return;if(l.I!=0){if(p.o)if(E==1){g=p.u?p.u.length:0,p=Date.now()-p.F;var M=l.D;E=jr(),it(E,new Uo(E,g)),fr(l)}else xt(l);else if(M=p.m,M==3||M==0&&p.X>0||!(E==1&&Tl(l,p)||E==2&&Hn(l)))switch(g&&g.length>0&&(p=l.h,p.i=p.i.concat(g)),M){case 1:tn(l,5);break;case 4:tn(l,10);break;case 3:tn(l,6);break;default:tn(l,2)}}}function Ls(l,p){let g=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(g*=2),g*p}function tn(l,p){if(l.j.info("Error code "+p),p==2){var g=_(l.bb,l),E=l.Ua;const M=!E;E=new Mn(E||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Mi(E,"https"),ur(E),M?jn(E.toString(),g):zn(E.toString(),g)}else tt(2);l.I=0,l.l&&l.l.pa(p),$i(l),Ds(l)}i.bb=function(l){l?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function $i(l){if(l.I=0,l.ja=[],l.l){const p=Jt(l.h);(p.length!=0||l.i.length!=0)&&(K(l.ja,p),K(l.ja,l.i),l.h.i.length=0,z(l.i),l.i.length=0),l.l.oa()}}function ta(l,p,g){var E=g instanceof Mn?un(g):new Mn(g);if(E.g!="")p&&(E.g=p+"."+E.g),bn(E,E.u);else{var M=h.location;E=M.protocol,p=p?p+"."+M.hostname:M.hostname,M=+M.port;const j=new Mn(null);E&&Mi(j,E),p&&(j.g=p),M&&bn(j,M),g&&(j.h=g),E=j}return g=l.G,p=l.wa,g&&p&&Me(E,g,p),Me(E,"VER",l.ka),qn(l,E),E}function Il(l,p,g){if(p&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=l.Aa&&!l.ma?new Be(new cr({ab:g})):new Be(l.ma),p.Fa(l.L),p}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Sl(){}i=Sl.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function Ms(){}Ms.prototype.g=function(l,p){return new Rt(l,p)};function Rt(l,p){ut.call(this),this.g=new Ns(p),this.l=l,this.h=p&&p.messageUrlParams||null,l=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(l?l["X-WebChannel-Content-Type"]=p.messageContentType:l={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(l?l["X-WebChannel-Client-Profile"]=p.sa:l={"X-WebChannel-Client-Profile":p.sa}),this.g.U=l,(l=p&&p.Qb)&&!S(l)&&(this.g.u=l),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!S(p)&&(this.g.G=p,l=this.h,l!==null&&p in l&&(l=this.h,p in l&&delete l[p])),this.j=new Yr(this)}A(Rt,ut),Rt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){xs(this.g)},Rt.prototype.o=function(l){var p=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.v&&(g={},g.__data__=br(l),l=g);p.i.push(new Sc(p.Ya++,l)),p.I==3&&fr(p)},Rt.prototype.N=function(){this.g.l=null,delete this.j,xs(this.g),delete this.g,Rt.Z.N.call(this)};function Al(l){Es.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var p=l.__sm__;if(p){e:{for(const g in p){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,p=p!==null&&l in p?p[l]:void 0),this.data=p}else this.data=l}A(Al,Es);function Rl(){Fo.call(this),this.status=1}A(Rl,Fo);function Yr(l){this.g=l}A(Yr,Sl),Yr.prototype.ra=function(){it(this.g,"a")},Yr.prototype.qa=function(l){it(this.g,new Al(l))},Yr.prototype.pa=function(l){it(this.g,new Rl)},Yr.prototype.oa=function(){it(this.g,"b")},Ms.prototype.createWebChannel=Ms.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,__=function(){return new Ms},y_=function(){return jr()},g_=vn,_d={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},$r.NO_ERROR=0,$r.TIMEOUT=8,$r.HTTP_ERROR=6,Nu=$r,qr.COMPLETE="complete",m_=qr,al.EventType=Ur,Ur.OPEN="a",Ur.CLOSE="b",Ur.ERROR="c",Ur.MESSAGE="d",ut.prototype.listen=ut.prototype.J,ka=al,Be.prototype.listenOnce=Be.prototype.K,Be.prototype.getLastError=Be.prototype.Ha,Be.prototype.getLastErrorCode=Be.prototype.ya,Be.prototype.getStatus=Be.prototype.ca,Be.prototype.getResponseJson=Be.prototype.La,Be.prototype.getResponseText=Be.prototype.la,Be.prototype.send=Be.prototype.ea,Be.prototype.setWithCredentials=Be.prototype.Fa,p_=Be}).apply(typeof wu<"u"?wu:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
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
 */let bt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};bt.UNAUTHENTICATED=new bt(null),bt.GOOGLE_CREDENTIALS=new bt("google-credentials-uid"),bt.FIRST_PARTY=new bt("first-party-uid"),bt.MOCK_USER=new bt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
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
 */let Co="12.12.0";function aS(i){Co=i}/**
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
 *//**
 * @license
 * Copyright 2017 Google LLC
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
 */const cs=new Md("@firebase/firestore");function io(){return cs.logLevel}function ne(i,...e){if(cs.logLevel<=Re.DEBUG){const t=e.map(Qd);cs.debug(`Firestore (${Co}): ${i}`,...t)}}function Nr(i,...e){if(cs.logLevel<=Re.ERROR){const t=e.map(Qd);cs.error(`Firestore (${Co}): ${i}`,...t)}}function wi(i,...e){if(cs.logLevel<=Re.WARN){const t=e.map(Qd);cs.warn(`Firestore (${Co}): ${i}`,...t)}}function Qd(i){if(typeof i=="string")return i;try{return(function(t){return JSON.stringify(t)})(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function de(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,v_(i,s,t)}function v_(i,e,t){let s=`FIRESTORE (${Co}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Nr(s),new Error(s)}function Fe(i,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,i||v_(e,o,s)}function ye(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends Vr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Rr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class E_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class w_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(bt.UNAUTHENTICATED)))}shutdown(){}}class lS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class uS{constructor(e){this.t=e,this.currentUser=bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Fe(this.o===void 0,42304);let s=this.i;const o=y=>this.i!==s?(s=this.i,t(y)):Promise.resolve();let u=new Rr;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Rr,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const y=u;e.enqueueRetryable((async()=>{await y.promise,await o(this.currentUser)}))},m=y=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((y=>m(y))),setTimeout((()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Rr)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Fe(typeof s.accessToken=="string",31837,{l:s}),new E_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string",2055,{h:e}),new bt(e)}}class cS{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=bt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class hS{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new cS(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(bt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ig{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dS{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Pn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Fe(this.o===void 0,3512);const s=u=>{u.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,ne("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ig(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Fe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ig(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function fS(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ic{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=fS(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Ce(i,e){return i<e?-1:i>e?1:0}function vd(i,e){const t=Math.min(i.length,e.length);for(let s=0;s<t;s++){const o=i.charAt(s),u=e.charAt(s);if(o!==u)return sd(o)===sd(u)?Ce(o,u):sd(o)?1:-1}return Ce(i.length,e.length)}const pS=55296,mS=57343;function sd(i){const e=i.charCodeAt(0);return e>=pS&&e<=mS}function _o(i,e,t){return i.length===e.length&&i.every(((s,o)=>t(s,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Sg="__name__";class Xn{constructor(e,t,s){t===void 0?t=0:t>e.length&&de(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&de(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Xn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Xn?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Xn.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Ce(e.length,t.length)}static compareSegments(e,t){const s=Xn.isNumericId(e),o=Xn.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Xn.extractNumericId(e).compare(Xn.extractNumericId(t)):vd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return vi.fromString(e.substring(4,e.length-2))}}class He extends Xn{construct(e,t,s){return new He(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ee(B.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new He(t)}static emptyPath(){return new He([])}}const gS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class It extends Xn{construct(e,t,s){return new It(e,t,s)}static isValidIdentifier(e){return gS.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),It.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Sg}static keyField(){return new It([Sg])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ee(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new ee(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[o+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new ee(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new ee(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new It(t)}static emptyPath(){return new It([])}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class le{constructor(e){this.path=e}static fromPath(e){return new le(He.fromString(e))}static fromName(e){return new le(He.fromString(e).popFirst(5))}static empty(){return new le(He.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&He.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return He.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new le(new He(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function T_(i,e,t){if(!t)throw new ee(B.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function I_(i,e,t,s){if(e===!0&&s===!0)throw new ee(B.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function Ag(i){if(!le.isDocumentKey(i))throw new ee(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Rg(i){if(le.isDocumentKey(i))throw new ee(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function S_(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function sc(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":de(12329,{type:typeof i})}function xr(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ee(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=sc(i);throw new ee(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function pt(i,e){const t={typeString:i};return e&&(t.value=e),t}function Za(i,e){if(!S_(i))throw new ee(B.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const h=i[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new ee(B.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Cg=-62135596800,Pg=1e6;class We{static now(){return We.fromMillis(Date.now())}static fromDate(e){return We.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Pg);return new We(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ee(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ee(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Cg)throw new ee(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Pg}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:We._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Za(e,We._jsonSchema))return new We(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Cg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}We._jsonSchemaVersion="firestore/timestamp/1.0",We._jsonSchema={type:pt("string",We._jsonSchemaVersion),seconds:pt("number"),nanoseconds:pt("number")};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class me{static fromTimestamp(e){return new me(e)}static min(){return new me(new We(0,0))}static max(){return new me(new We(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const ja=-1;function yS(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=me.fromTimestamp(s===1e9?new We(t+1,0):new We(t,s));return new Ti(o,le.empty(),e)}function _S(i){return new Ti(i.readTime,i.key,ja)}class Ti{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ti(me.min(),le.empty(),ja)}static max(){return new Ti(me.max(),le.empty(),ja)}}function vS(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=le.comparator(i.documentKey,e.documentKey),t!==0?t:Ce(i.largestBatchId,e.largestBatchId))}/**
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
 */const ES="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */async function Po(i){if(i.code!==B.FAILED_PRECONDITION||i.message!==ES)throw i;ne("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&de(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof $?t:$.resolve(t)}catch(t){return $.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):$.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):$.reject(t)}static resolve(e){return new $(((t,s)=>{t(e)}))}static reject(e){return new $(((t,s)=>{s(e)}))}static waitFor(e){return new $(((t,s)=>{let o=0,u=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++u,h&&u===o&&t()}),(y=>s(y)))})),h=!0,u===o&&t()}))}static or(e){let t=$.resolve(!1);for(const s of e)t=t.next((o=>o?$.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,u)=>{s.push(t.call(this,o,u))})),this.waitFor(s)}static mapArray(e,t){return new $(((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let y=0;y<u;y++){const _=y;t(e[_]).next((w=>{h[_]=w,++m,m===u&&s(h)}),(w=>o(w)))}}))}static doWhile(e,t){return new $(((s,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):s()};u()}))}}function TS(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ko(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class oc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}oc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Yd=-1;function ac(i){return i==null}function $u(i){return i===0&&1/i==-1/0}function IS(i){return typeof i=="number"&&Number.isInteger(i)&&!$u(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const A_="";function SS(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=kg(e)),e=AS(i.get(t),e);return kg(e)}function AS(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case A_:t+="";break;default:t+=u}}return t}function kg(i){return i+A_+""}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Ng(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function ds(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function R_(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class et{constructor(e,t){this.comparator=e,this.root=t||kt.EMPTY}insert(e,t){return new et(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,kt.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,kt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Tu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Tu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Tu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Tu(this.root,e,this.comparator,!0)}}class Tu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class kt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??kt.RED,this.left=o??kt.EMPTY,this.right=u??kt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new kt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return kt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return kt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,kt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,kt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw de(43730,{key:this.key,value:this.value});if(this.right.isRed())throw de(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw de(27949);return e+(this.isRed()?0:1)}}kt.EMPTY=null,kt.RED=!0,kt.BLACK=!1;kt.EMPTY=new class{constructor(){this.size=0}get key(){throw de(57766)}get value(){throw de(16141)}get color(){throw de(16727)}get left(){throw de(29726)}get right(){throw de(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new kt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class yt{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new xg(this.data.getIterator())}getIteratorFrom(e){return new xg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof yt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new yt(this.comparator);return t.data=e,t}}class xg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Nn{constructor(e){this.fields=e,e.sort(It.comparator)}static empty(){return new Nn([])}unionWith(e){let t=new yt(It.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Nn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return _o(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class C_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class St{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new C_("Invalid base64 string: "+u):u}})(e);return new St(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u})(e);return new St(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}St.EMPTY_BYTE_STRING=new St("");const RS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ii(i){if(Fe(!!i,39018),typeof i=="string"){let e=0;const t=RS.exec(i);if(Fe(!!t,46558,{timestamp:i}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:at(i.seconds),nanos:at(i.nanos)}}function at(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Si(i){return typeof i=="string"?St.fromBase64String(i):St.fromUint8Array(i)}/**
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
 */const P_="server_timestamp",k_="__type__",N_="__previous_value__",x_="__local_write_time__";function Jd(i){var t,s;return((s=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[k_])==null?void 0:s.stringValue)===P_}function lc(i){const e=i.mapValue.fields[N_];return Jd(e)?lc(e):e}function za(i){const e=Ii(i.mapValue.fields[x_].timestampValue);return new We(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class CS{constructor(e,t,s,o,u,h,m,y,_,w,A){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=_,this.isUsingEmulator=w,this.apiKey=A}}const qu="(default)";class vo{constructor(e,t){this.projectId=e,this.database=t||qu}static empty(){return new vo("","")}get isDefaultDatabase(){return this.database===qu}isEqual(e){return e instanceof vo&&e.projectId===this.projectId&&e.database===this.database}}function PS(i,e){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new ee(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vo(i.options.projectId,e)}/**
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
 */const D_="__type__",kS="__max__",Iu={mapValue:{}},V_="__vector__",Hu="value";function Ai(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Jd(i)?4:xS(i)?9007199254740991:NS(i)?10:11:de(28295,{value:i})}function ir(i,e){if(i===e)return!0;const t=Ai(i);if(t!==Ai(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return za(i).isEqual(za(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=Ii(o.timestampValue),m=Ii(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(o,u){return Si(o.bytesValue).isEqual(Si(u.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(o,u){return at(o.geoPointValue.latitude)===at(u.geoPointValue.latitude)&&at(o.geoPointValue.longitude)===at(u.geoPointValue.longitude)})(i,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return at(o.integerValue)===at(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=at(o.doubleValue),m=at(u.doubleValue);return h===m?$u(h)===$u(m):isNaN(h)&&isNaN(m)}return!1})(i,e);case 9:return _o(i.arrayValue.values||[],e.arrayValue.values||[],ir);case 10:case 11:return(function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Ng(h)!==Ng(m))return!1;for(const y in h)if(h.hasOwnProperty(y)&&(m[y]===void 0||!ir(h[y],m[y])))return!1;return!0})(i,e);default:return de(52216,{left:i})}}function Ba(i,e){return(i.values||[]).find((t=>ir(t,e)))!==void 0}function Eo(i,e){if(i===e)return 0;const t=Ai(i),s=Ai(e);if(t!==s)return Ce(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ce(i.booleanValue,e.booleanValue);case 2:return(function(u,h){const m=at(u.integerValue||u.doubleValue),y=at(h.integerValue||h.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1})(i,e);case 3:return Dg(i.timestampValue,e.timestampValue);case 4:return Dg(za(i),za(e));case 5:return vd(i.stringValue,e.stringValue);case 6:return(function(u,h){const m=Si(u),y=Si(h);return m.compareTo(y)})(i.bytesValue,e.bytesValue);case 7:return(function(u,h){const m=u.split("/"),y=h.split("/");for(let _=0;_<m.length&&_<y.length;_++){const w=Ce(m[_],y[_]);if(w!==0)return w}return Ce(m.length,y.length)})(i.referenceValue,e.referenceValue);case 8:return(function(u,h){const m=Ce(at(u.latitude),at(h.latitude));return m!==0?m:Ce(at(u.longitude),at(h.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return Vg(i.arrayValue,e.arrayValue);case 10:return(function(u,h){var V,z,K,Q;const m=u.fields||{},y=h.fields||{},_=(V=m[Hu])==null?void 0:V.arrayValue,w=(z=y[Hu])==null?void 0:z.arrayValue,A=Ce(((K=_==null?void 0:_.values)==null?void 0:K.length)||0,((Q=w==null?void 0:w.values)==null?void 0:Q.length)||0);return A!==0?A:Vg(_,w)})(i.mapValue,e.mapValue);case 11:return(function(u,h){if(u===Iu.mapValue&&h===Iu.mapValue)return 0;if(u===Iu.mapValue)return 1;if(h===Iu.mapValue)return-1;const m=u.fields||{},y=Object.keys(m),_=h.fields||{},w=Object.keys(_);y.sort(),w.sort();for(let A=0;A<y.length&&A<w.length;++A){const V=vd(y[A],w[A]);if(V!==0)return V;const z=Eo(m[y[A]],_[w[A]]);if(z!==0)return z}return Ce(y.length,w.length)})(i.mapValue,e.mapValue);default:throw de(23264,{he:t})}}function Dg(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Ce(i,e);const t=Ii(i),s=Ii(e),o=Ce(t.seconds,s.seconds);return o!==0?o:Ce(t.nanos,s.nanos)}function Vg(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=Eo(t[o],s[o]);if(u)return u}return Ce(t.length,s.length)}function wo(i){return Ed(i)}function Ed(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const s=Ii(t);return`time(${s.seconds},${s.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return Si(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return le.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=Ed(u);return s+"]"})(i.arrayValue):"mapValue"in i?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${Ed(t.fields[h])}`;return o+"}"})(i.mapValue):de(61005,{value:i})}function xu(i){switch(Ai(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=lc(i);return e?16+xu(e):16;case 5:return 2*i.stringValue.length;case 6:return Si(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+xu(u)),0)})(i.arrayValue);case 10:case 11:return(function(s){let o=0;return ds(s.fields,((u,h)=>{o+=u.length+xu(h)})),o})(i.mapValue);default:throw de(13486,{value:i})}}function Og(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function wd(i){return!!i&&"integerValue"in i}function Xd(i){return!!i&&"arrayValue"in i}function Lg(i){return!!i&&"nullValue"in i}function Mg(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Du(i){return!!i&&"mapValue"in i}function NS(i){var t,s;return((s=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[D_])==null?void 0:s.stringValue)===V_}function Va(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const e={mapValue:{fields:{}}};return ds(i.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Va(s))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Va(i.arrayValue.values[t]);return e}return{...i}}function xS(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===kS}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class gn{constructor(e){this.value=e}static empty(){return new gn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Du(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Va(t)}setAll(e){let t=It.emptyPath(),s={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const y=this.getFieldsMap(t);this.applyChanges(y,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Va(h):o.push(m.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Du(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ir(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Du(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){ds(t,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new gn(Va(this.value))}}function O_(i){const e=[];return ds(i.fields,((t,s)=>{const o=new It([t]);if(Du(s)){const u=O_(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)})),new Nn(e)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ft{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Ft(e,0,me.min(),me.min(),me.min(),gn.empty(),0)}static newFoundDocument(e,t,s,o){return new Ft(e,1,t,me.min(),s,o,0)}static newNoDocument(e,t){return new Ft(e,2,t,me.min(),me.min(),gn.empty(),0)}static newUnknownDocument(e,t){return new Ft(e,3,t,me.min(),me.min(),gn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(me.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=me.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Wu{constructor(e,t){this.position=e,this.inclusive=t}}function bg(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=le.comparator(le.fromName(h.referenceValue),t.key):s=Eo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Fg(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!ir(i.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class $a{constructor(e,t="asc"){this.field=e,this.dir=t}}function DS(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class L_{}class ft extends L_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new OS(e,t,s):t==="array-contains"?new bS(e,s):t==="in"?new FS(e,s):t==="not-in"?new US(e,s):t==="array-contains-any"?new jS(e,s):new ft(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new LS(e,s):new MS(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Eo(t,this.value)):t!==null&&Ai(this.value)===Ai(t)&&this.matchesComparison(Eo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return de(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vn extends L_{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Vn(e,t)}matches(e){return M_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function M_(i){return i.op==="and"}function b_(i){return VS(i)&&M_(i)}function VS(i){for(const e of i.filters)if(e instanceof Vn)return!1;return!0}function Td(i){if(i instanceof ft)return i.field.canonicalString()+i.op.toString()+wo(i.value);if(b_(i))return i.filters.map((e=>Td(e))).join(",");{const e=i.filters.map((t=>Td(t))).join(",");return`${i.op}(${e})`}}function F_(i,e){return i instanceof ft?(function(s,o){return o instanceof ft&&s.op===o.op&&s.field.isEqual(o.field)&&ir(s.value,o.value)})(i,e):i instanceof Vn?(function(s,o){return o instanceof Vn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,h,m)=>u&&F_(h,o.filters[m])),!0):!1})(i,e):void de(19439)}function U_(i){return i instanceof ft?(function(t){return`${t.field.canonicalString()} ${t.op} ${wo(t.value)}`})(i):i instanceof Vn?(function(t){return t.op.toString()+" {"+t.getFilters().map(U_).join(" ,")+"}"})(i):"Filter"}class OS extends ft{constructor(e,t,s){super(e,t,s),this.key=le.fromName(s.referenceValue)}matches(e){const t=le.comparator(e.key,this.key);return this.matchesComparison(t)}}class LS extends ft{constructor(e,t){super(e,"in",t),this.keys=j_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class MS extends ft{constructor(e,t){super(e,"not-in",t),this.keys=j_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function j_(i,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>le.fromName(s.referenceValue)))}class bS extends ft{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Xd(t)&&Ba(t.arrayValue,this.value)}}class FS extends ft{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ba(this.value.arrayValue,t)}}class US extends ft{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ba(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ba(this.value.arrayValue,t)}}class jS extends ft{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Xd(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Ba(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class zS{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Te=null}}function Ug(i,e=null,t=[],s=[],o=null,u=null,h=null){return new zS(i,e,t,s,o,u,h)}function Zd(i){const e=ye(i);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Td(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),ac(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>wo(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>wo(s))).join(",")),e.Te=t}return e.Te}function ef(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!DS(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!F_(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!Fg(i.startAt,e.startAt)&&Fg(i.endAt,e.endAt)}function Id(i){return le.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class No{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=y,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function BS(i,e,t,s,o,u,h,m){return new No(i,e,t,s,o,u,h,m)}function tf(i){return new No(i)}function jg(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function $S(i){return le.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}function z_(i){return i.collectionGroup!==null}function Oa(i){const e=ye(i);if(e.Ee===null){e.Ee=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ee.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new yt(It.comparator);return h.filters.forEach((y=>{y.getFlattenedFilters().forEach((_=>{_.isInequality()&&(m=m.add(_.field))}))})),m})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ee.push(new $a(u,s))})),t.has(It.keyField().canonicalString())||e.Ee.push(new $a(It.keyField(),s))}return e.Ee}function er(i){const e=ye(i);return e.Ie||(e.Ie=qS(e,Oa(i))),e.Ie}function qS(i,e){if(i.limitType==="F")return Ug(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new $a(o.field,u)}));const t=i.endAt?new Wu(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Wu(i.startAt.position,i.startAt.inclusive):null;return Ug(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function Sd(i,e){const t=i.filters.concat([e]);return new No(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function HS(i,e){const t=i.explicitOrderBy.concat([e]);return new No(i.path,i.collectionGroup,t,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}function Ad(i,e,t){return new No(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function uc(i,e){return ef(er(i),er(e))&&i.limitType===e.limitType}function B_(i){return`${Zd(er(i))}|lt:${i.limitType}`}function so(i){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>U_(o))).join(", ")}]`),ac(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>wo(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>wo(o))).join(",")),`Target(${s})`})(er(i))}; limitType=${i.limitType})`}function cc(i,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):le.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(i,e)&&(function(s,o){for(const u of Oa(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(i,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(i,e)&&(function(s,o){return!(s.startAt&&!(function(h,m,y){const _=bg(h,m,y);return h.inclusive?_<=0:_<0})(s.startAt,Oa(s),o)||s.endAt&&!(function(h,m,y){const _=bg(h,m,y);return h.inclusive?_>=0:_>0})(s.endAt,Oa(s),o))})(i,e)}function WS(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function $_(i){return(e,t)=>{let s=!1;for(const o of Oa(i)){const u=GS(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function GS(i,e,t){const s=i.field.isKeyField()?le.comparator(e.key,t.key):(function(u,h,m){const y=h.data.field(u),_=m.data.field(u);return y!==null&&_!==null?Eo(y,_):de(42886)})(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return de(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class fs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ds(this.inner,((t,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return R_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const KS=new et(le.comparator);function Dr(){return KS}const q_=new et(le.comparator);function Na(...i){let e=q_;for(const t of i)e=e.insert(t.key,t);return e}function H_(i){let e=q_;return i.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function is(){return La()}function W_(){return La()}function La(){return new fs((i=>i.toString()),((i,e)=>i.isEqual(e)))}const QS=new et(le.comparator),YS=new yt(le.comparator);function Pe(...i){let e=YS;for(const t of i)e=e.add(t);return e}const JS=new yt(Ce);function XS(){return JS}/**
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
 */function nf(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$u(e)?"-0":e}}function G_(i){return{integerValue:""+i}}function ZS(i,e){return IS(e)?G_(e):nf(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class hc{constructor(){this._=void 0}}function eA(i,e,t){return i instanceof Gu?(function(o,u){const h={fields:{[k_]:{stringValue:P_},[x_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Jd(u)&&(u=lc(u)),u&&(h.fields[N_]=u),{mapValue:h}})(t,e):i instanceof qa?Q_(i,e):i instanceof Ha?Y_(i,e):(function(o,u){const h=K_(o,u),m=zg(h)+zg(o.Ae);return wd(h)&&wd(o.Ae)?G_(m):nf(o.serializer,m)})(i,e)}function tA(i,e,t){return i instanceof qa?Q_(i,e):i instanceof Ha?Y_(i,e):t}function K_(i,e){return i instanceof Ku?(function(s){return wd(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class Gu extends hc{}class qa extends hc{constructor(e){super(),this.elements=e}}function Q_(i,e){const t=J_(e);for(const s of i.elements)t.some((o=>ir(o,s)))||t.push(s);return{arrayValue:{values:t}}}class Ha extends hc{constructor(e){super(),this.elements=e}}function Y_(i,e){let t=J_(e);for(const s of i.elements)t=t.filter((o=>!ir(o,s)));return{arrayValue:{values:t}}}class Ku extends hc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function zg(i){return at(i.integerValue||i.doubleValue)}function J_(i){return Xd(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function nA(i,e){return i.field.isEqual(e.field)&&(function(s,o){return s instanceof qa&&o instanceof qa||s instanceof Ha&&o instanceof Ha?_o(s.elements,o.elements,ir):s instanceof Ku&&o instanceof Ku?ir(s.Ae,o.Ae):s instanceof Gu&&o instanceof Gu})(i.transform,e.transform)}class rA{constructor(e,t){this.version=e,this.transformResults=t}}class tr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new tr}static exists(e){return new tr(void 0,e)}static updateTime(e){return new tr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class dc{}function X_(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new rf(i.key,tr.none()):new el(i.key,i.data,tr.none());{const t=i.data,s=gn.empty();let o=new yt(It.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new ps(i.key,s,new Nn(o.toArray()),tr.none())}}function iA(i,e,t){i instanceof el?(function(o,u,h){const m=o.value.clone(),y=$g(o.fieldTransforms,u,h.transformResults);m.setAll(y),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(i,e,t):i instanceof ps?(function(o,u,h){if(!Vu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=$g(o.fieldTransforms,u,h.transformResults),y=u.data;y.setAll(Z_(o)),y.setAll(m),u.convertToFoundDocument(h.version,y).setHasCommittedMutations()})(i,e,t):(function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Ma(i,e,t,s){return i instanceof el?(function(u,h,m,y){if(!Vu(u.precondition,h))return m;const _=u.value.clone(),w=qg(u.fieldTransforms,y,h);return _.setAll(w),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(i,e,t,s):i instanceof ps?(function(u,h,m,y){if(!Vu(u.precondition,h))return m;const _=qg(u.fieldTransforms,y,h),w=h.data;return w.setAll(Z_(u)),w.setAll(_),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((A=>A.field)))})(i,e,t,s):(function(u,h,m){return Vu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(i,e,t)}function sA(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=K_(s.transform,o||null);u!=null&&(t===null&&(t=gn.empty()),t.set(s.field,u))}return t||null}function Bg(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&_o(s,o,((u,h)=>nA(u,h)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class el extends dc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ps extends dc{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function Z_(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}})),e}function $g(i,e,t){const s=new Map;Fe(i.length===t.length,32656,{Ve:t.length,de:i.length});for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,tA(h,m,t[o]))}return s}function qg(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,eA(u,h,e))}return s}class rf extends dc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class oA extends dc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class aA{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&iA(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ma(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ma(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=W_();return this.mutations.forEach((o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const y=X_(h,m);y!==null&&s.set(o.key,y),h.isValidDocument()||h.convertToNoDocument(me.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Pe())}isEqual(e){return this.batchId===e.batchId&&_o(this.mutations,e.mutations,((t,s)=>Bg(t,s)))&&_o(this.baseMutations,e.baseMutations,((t,s)=>Bg(t,s)))}}class sf{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Fe(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return QS})();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new sf(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class lA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class uA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var dt,xe;function cA(i){switch(i){case B.OK:return de(64938);case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0;default:return de(15467,{code:i})}}function ev(i){if(i===void 0)return Nr("GRPC error has no .code"),B.UNKNOWN;switch(i){case dt.OK:return B.OK;case dt.CANCELLED:return B.CANCELLED;case dt.UNKNOWN:return B.UNKNOWN;case dt.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case dt.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case dt.INTERNAL:return B.INTERNAL;case dt.UNAVAILABLE:return B.UNAVAILABLE;case dt.UNAUTHENTICATED:return B.UNAUTHENTICATED;case dt.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case dt.NOT_FOUND:return B.NOT_FOUND;case dt.ALREADY_EXISTS:return B.ALREADY_EXISTS;case dt.PERMISSION_DENIED:return B.PERMISSION_DENIED;case dt.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case dt.ABORTED:return B.ABORTED;case dt.OUT_OF_RANGE:return B.OUT_OF_RANGE;case dt.UNIMPLEMENTED:return B.UNIMPLEMENTED;case dt.DATA_LOSS:return B.DATA_LOSS;default:return de(39323,{code:i})}}(xe=dt||(dt={}))[xe.OK=0]="OK",xe[xe.CANCELLED=1]="CANCELLED",xe[xe.UNKNOWN=2]="UNKNOWN",xe[xe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",xe[xe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",xe[xe.NOT_FOUND=5]="NOT_FOUND",xe[xe.ALREADY_EXISTS=6]="ALREADY_EXISTS",xe[xe.PERMISSION_DENIED=7]="PERMISSION_DENIED",xe[xe.UNAUTHENTICATED=16]="UNAUTHENTICATED",xe[xe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",xe[xe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",xe[xe.ABORTED=10]="ABORTED",xe[xe.OUT_OF_RANGE=11]="OUT_OF_RANGE",xe[xe.UNIMPLEMENTED=12]="UNIMPLEMENTED",xe[xe.INTERNAL=13]="INTERNAL",xe[xe.UNAVAILABLE=14]="UNAVAILABLE",xe[xe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function hA(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const dA=new vi([4294967295,4294967295],0);function Hg(i){const e=hA().encode(i),t=new f_;return t.update(e),new Uint8Array(t.digest())}function Wg(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new vi([t,s],0),new vi([o,u],0)]}class of{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new xa(`Invalid padding: ${t}`);if(s<0)throw new xa(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new xa(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new xa(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=vi.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(vi.fromNumber(s)));return o.compare(dA)===1&&(o=new vi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Hg(e),[s,o]=Wg(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);if(!this.we(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new of(u,o,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.ge===0)return;const t=Hg(e),[s,o]=Wg(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class xa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class fc{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,tl.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new fc(me.min(),o,new et(Ce),Dr(),Pe())}}class tl{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new tl(s,t,Pe(),Pe(),Pe())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ou{constructor(e,t,s,o){this.be=e,this.removedTargetIds=t,this.key=s,this.De=o}}class tv{constructor(e,t){this.targetId=e,this.Ce=t}}class nv{constructor(e,t,s=St.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Gg{constructor(){this.ve=0,this.Fe=Kg(),this.Me=St.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Pe(),t=Pe(),s=Pe();return this.Fe.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:de(38017,{changeType:u})}})),new tl(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=Kg()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Fe(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class fA{constructor(e){this.Ge=e,this.ze=new Map,this.je=Dr(),this.Je=Su(),this.He=Su(),this.Ze=new et(Ce)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:de(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const u=o.target;if(Id(u))if(s===0){const h=new le(u.path);this.et(t,h,Ft.newNoDocument(h,me.min()))}else Fe(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const m=this.ut(e),y=m?this.ct(m,e,h):1;if(y!==0){this.it(t);const _=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,_)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=Si(s).toUint8Array()}catch(y){if(y instanceof C_)return wi("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new of(h,o,u)}catch(y){return wi(y instanceof xa?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.ge===0?null:m}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach((u=>{const h=this.Ge.ht(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.et(t,u,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((u,h)=>{const m=this.ot(h);if(m){if(u.current&&Id(m.target)){const y=new le(m.target.path);this.Et(y).has(h)||this.It(h,y)||this.et(h,y,Ft.newNoDocument(y,e))}u.Be&&(t.set(h,u.ke()),u.qe())}}));let s=Pe();this.He.forEach(((u,h)=>{let m=!0;h.forEachWhile((y=>{const _=this.ot(y);return!_||_.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.je.forEach(((u,h)=>h.setReadTime(e)));const o=new fc(e,t,this.Ze,this.je,s);return this.je=Dr(),this.Je=Su(),this.He=Su(),this.Ze=new et(Ce),o}Ye(e,t){if(!this.rt(e))return;const s=this.It(e,t.key)?2:0;this.nt(e).Ke(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.It(e,t)?o.Ke(t,1):o.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Gg,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new yt(Ce),this.He=this.He.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new yt(Ce),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ne("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Gg),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Su(){return new et(le.comparator)}function Kg(){return new et(le.comparator)}const pA={asc:"ASCENDING",desc:"DESCENDING"},mA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},gA={and:"AND",or:"OR"};class yA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Rd(i,e){return i.useProto3Json||ac(e)?e:{value:e}}function Qu(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rv(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function _A(i,e){return Qu(i,e.toTimestamp())}function nr(i){return Fe(!!i,49232),me.fromTimestamp((function(t){const s=Ii(t);return new We(s.seconds,s.nanos)})(i))}function af(i,e){return Cd(i,e).canonicalString()}function Cd(i,e){const t=(function(o){return new He(["projects",o.projectId,"databases",o.database])})(i).child("documents");return e===void 0?t:t.child(e)}function iv(i){const e=He.fromString(i);return Fe(uv(e),10190,{key:e.toString()}),e}function Pd(i,e){return af(i.databaseId,e.path)}function od(i,e){const t=iv(e);if(t.get(1)!==i.databaseId.projectId)throw new ee(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new ee(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new le(ov(t))}function sv(i,e){return af(i.databaseId,e)}function vA(i){const e=iv(i);return e.length===4?He.emptyPath():ov(e)}function kd(i){return new He(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function ov(i){return Fe(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function Qg(i,e,t){return{name:Pd(i,e),fields:t.value.mapValue.fields}}function EA(i,e){let t;if("targetChange"in e){e.targetChange;const s=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:de(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(_,w){return _.useProto3Json?(Fe(w===void 0||typeof w=="string",58123),St.fromBase64String(w||"")):(Fe(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),St.fromUint8Array(w||new Uint8Array))})(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(_){const w=_.code===void 0?B.UNKNOWN:ev(_.code);return new ee(w,_.message||"")})(h);t=new nv(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=od(i,s.document.name),u=nr(s.document.updateTime),h=s.document.createTime?nr(s.document.createTime):me.min(),m=new gn({mapValue:{fields:s.document.fields}}),y=Ft.newFoundDocument(o,u,h,m),_=s.targetIds||[],w=s.removedTargetIds||[];t=new Ou(_,w,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=od(i,s.document),u=s.readTime?nr(s.readTime):me.min(),h=Ft.newNoDocument(o,u),m=s.removedTargetIds||[];t=new Ou([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=od(i,s.document),u=s.removedTargetIds||[];t=new Ou([],u,o,null)}else{if(!("filter"in e))return de(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new uA(o,u),m=s.targetId;t=new tv(m,h)}}return t}function wA(i,e){let t;if(e instanceof el)t={update:Qg(i,e.key,e.value)};else if(e instanceof rf)t={delete:Pd(i,e.key)};else if(e instanceof ps)t={update:Qg(i,e.key,e.data),updateMask:NA(e.fieldMask)};else{if(!(e instanceof oA))return de(16599,{dt:e.type});t={verify:Pd(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(u,h){const m=h.transform;if(m instanceof Gu)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof qa)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Ha)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Ku)return{fieldPath:h.field.canonicalString(),increment:m.Ae};throw de(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:_A(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:de(27497)})(i,e.precondition)),t}function TA(i,e){return i&&i.length>0?(Fe(e!==void 0,14353),i.map((t=>(function(o,u){let h=o.updateTime?nr(o.updateTime):nr(u);return h.isEqual(me.min())&&(h=nr(u)),new rA(h,o.transformResults||[])})(t,e)))):[]}function IA(i,e){return{documents:[sv(i,e.path)]}}function SA(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=sv(i,o);const u=(function(_){if(_.length!==0)return lv(Vn.create(_,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const h=(function(_){if(_.length!==0)return _.map((w=>(function(V){return{field:oo(V.field),direction:CA(V.dir)}})(w)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Rd(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{ft:t,parent:o}}function AA(i){let e=vA(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Fe(s===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=(function(A){const V=av(A);return V instanceof Vn&&b_(V)?V.getFilters():[V]})(t.where));let h=[];t.orderBy&&(h=(function(A){return A.map((V=>(function(K){return new $a(ao(K.field),(function(G){switch(G){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(K.direction))})(V)))})(t.orderBy));let m=null;t.limit&&(m=(function(A){let V;return V=typeof A=="object"?A.value:A,ac(V)?null:V})(t.limit));let y=null;t.startAt&&(y=(function(A){const V=!!A.before,z=A.values||[];return new Wu(z,V)})(t.startAt));let _=null;return t.endAt&&(_=(function(A){const V=!A.before,z=A.values||[];return new Wu(z,V)})(t.endAt)),BS(e,o,h,u,m,"F",y,_)}function RA(i,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return de(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function av(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=ao(t.unaryFilter.field);return ft.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=ao(t.unaryFilter.field);return ft.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=ao(t.unaryFilter.field);return ft.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=ao(t.unaryFilter.field);return ft.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return de(61313);default:return de(60726)}})(i):i.fieldFilter!==void 0?(function(t){return ft.create(ao(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return de(58110);default:return de(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return Vn.create(t.compositeFilter.filters.map((s=>av(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return de(1026)}})(t.compositeFilter.op))})(i):de(30097,{filter:i})}function CA(i){return pA[i]}function PA(i){return mA[i]}function kA(i){return gA[i]}function oo(i){return{fieldPath:i.canonicalString()}}function ao(i){return It.fromServerFormat(i.fieldPath)}function lv(i){return i instanceof ft?(function(t){if(t.op==="=="){if(Mg(t.value))return{unaryFilter:{field:oo(t.field),op:"IS_NAN"}};if(Lg(t.value))return{unaryFilter:{field:oo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Mg(t.value))return{unaryFilter:{field:oo(t.field),op:"IS_NOT_NAN"}};if(Lg(t.value))return{unaryFilter:{field:oo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:oo(t.field),op:PA(t.op),value:t.value}}})(i):i instanceof Vn?(function(t){const s=t.getFilters().map((o=>lv(o)));return s.length===1?s[0]:{compositeFilter:{op:kA(t.op),filters:s}}})(i):de(54877,{filter:i})}function NA(i){const e=[];return i.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function uv(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}function cv(i){return!!i&&typeof i._toProto=="function"&&i._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class mi{constructor(e,t,s,o,u=me.min(),h=me.min(),m=St.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=y}withSequenceNumber(e){return new mi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new mi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new mi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new mi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class xA{constructor(e){this.yt=e}}function DA(i){const e=AA({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Ad(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class VA{constructor(){this.bn=new OA}addToCollectionParentIndex(e,t){return this.bn.add(t),$.resolve()}getCollectionParents(e,t){return $.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return $.resolve()}deleteFieldIndex(e,t){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,t){return $.resolve()}getDocumentsMatchingTarget(e,t){return $.resolve(null)}getIndexType(e,t){return $.resolve(0)}getFieldIndexes(e,t){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,t){return $.resolve(Ti.min())}getMinOffsetFromCollectionGroup(e,t){return $.resolve(Ti.min())}updateCollectionGroup(e,t,s){return $.resolve()}updateIndexEntries(e,t){return $.resolve()}}class OA{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new yt(He.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new yt(He.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Yg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},hv=41943040;class Yt{static withCacheSize(e){return new Yt(e,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */Yt.DEFAULT_COLLECTION_PERCENTILE=10,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Yt.DEFAULT=new Yt(hv,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Yt.DISABLED=new Yt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
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
 */class To{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new To(0)}static ar(){return new To(-1)}}/**
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
 */const Jg="LruGarbageCollector",LA=1048576;function Xg([i,e],[t,s]){const o=Ce(i,t);return o===0?Ce(e,s):o}class MA{constructor(e){this.Pr=e,this.buffer=new yt(Xg),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Xg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class bA{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){ne(Jg,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ko(t)?ne(Jg,"Ignoring IndexedDB error during garbage collection: ",t):await Po(t)}await this.Ar(3e5)}))}}class FA{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return $.resolve(oc.ce);const s=new MA(t);return this.Vr.forEachTarget(e,(o=>s.Ir(o.sequenceNumber))).next((()=>this.Vr.mr(e,(o=>s.Ir(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(Yg)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Yg):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,o,u,h,m,y,_;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((A=>(A>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),o=this.params.maximumSequenceNumbersToCollect):o=A,h=Date.now(),this.nthSequenceNumber(e,o)))).next((A=>(s=A,m=Date.now(),this.removeTargets(e,s,t)))).next((A=>(u=A,y=Date.now(),this.removeOrphanedDocuments(e,s)))).next((A=>(_=Date.now(),io()<=Re.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(y-m)+`ms
	Removed ${A} documents in `+(_-y)+`ms
Total Duration: ${_-w}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:A}))))}}function UA(i,e){return new FA(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class jA{constructor(){this.changes=new fs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ft.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?$.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
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
 *//**
 * @license
 * Copyright 2022 Google LLC
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
 */class zA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class BA{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&Ma(s.mutation,o,Nn.empty(),We.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Pe()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Pe()){const o=is();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((u=>{let h=Na();return u.forEach(((m,y)=>{h=h.insert(m,y.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=is();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Pe())))}populateOverlays(e,t,s){const o=[];return s.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,o){let u=Dr();const h=La(),m=(function(){return La()})();return t.forEach(((y,_)=>{const w=s.get(_.key);o.has(_.key)&&(w===void 0||w.mutation instanceof ps)?u=u.insert(_.key,_):w!==void 0?(h.set(_.key,w.mutation.getFieldMask()),Ma(w.mutation,_,w.mutation.getFieldMask(),We.now())):h.set(_.key,Nn.empty())})),this.recalculateAndSaveOverlays(e,u).next((y=>(y.forEach(((_,w)=>h.set(_,w))),t.forEach(((_,w)=>m.set(_,new zA(w,h.get(_)??null)))),m)))}recalculateAndSaveOverlays(e,t){const s=La();let o=new et(((h,m)=>h-m)),u=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((y=>{const _=t.get(y);if(_===null)return;let w=s.get(y)||Nn.empty();w=m.applyToLocalView(_,w),s.set(y,w);const A=(o.get(m.batchId)||Pe()).add(y);o=o.insert(m.batchId,A)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),_=y.key,w=y.value,A=W_();w.forEach((V=>{if(!u.has(V)){const z=X_(t.get(V),s.get(V));z!==null&&A.set(V,z),u=u.add(V)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,A))}return $.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return $S(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):z_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):$.resolve(is());let m=ja,y=u;return h.next((_=>$.forEach(_,((w,A)=>(m<A.largestBatchId&&(m=A.largestBatchId),u.get(w)?$.resolve():this.remoteDocumentCache.getEntry(e,w).next((V=>{y=y.insert(w,V)}))))).next((()=>this.populateOverlays(e,_,u))).next((()=>this.computeViews(e,y,_,Pe()))).next((w=>({batchId:m,changes:H_(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new le(t)).next((s=>{let o=Na();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Na();return this.indexManager.getCollectionParents(e,u).next((m=>$.forEach(m,(y=>{const _=(function(A,V){return new No(V,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)})(t,y.child(u));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next((w=>{w.forEach(((A,V)=>{h=h.insert(A,V)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o)))).next((h=>{u.forEach(((y,_)=>{const w=_.getKey();h.get(w)===null&&(h=h.insert(w,Ft.newInvalidDocument(w)))}));let m=Na();return h.forEach(((y,_)=>{const w=u.get(y);w!==void 0&&Ma(w.mutation,_,Nn.empty(),We.now()),cc(t,_)&&(m=m.insert(y,_))})),m}))}}/**
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
 */class $A{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return $.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:nr(o.createTime)}})(t)),$.resolve()}getNamedQuery(e,t){return $.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(o){return{name:o.name,query:DA(o.bundledQuery),readTime:nr(o.readTime)}})(t)),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class qA{constructor(){this.overlays=new et(le.comparator),this.Lr=new Map}getOverlay(e,t){return $.resolve(this.overlays.get(t))}getOverlays(e,t){const s=is();return $.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,u)=>{this.St(e,t,u)})),$.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Lr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.Lr.delete(s)),$.resolve()}getOverlaysForCollection(e,t,s){const o=is(),u=t.length+1,h=new le(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const y=m.getNext().value,_=y.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===u&&y.largestBatchId>s&&o.set(y.getKey(),y)}return $.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new et(((_,w)=>_-w));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let w=u.get(_.largestBatchId);w===null&&(w=is(),u=u.insert(_.largestBatchId,w)),w.set(_.getKey(),_)}}const m=is(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach(((_,w)=>m.set(_,w))),!(m.size()>=o)););return $.resolve(m)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Lr.get(o.largestBatchId).delete(s.key);this.Lr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new lA(t,s));let u=this.Lr.get(t);u===void 0&&(u=Pe(),this.Lr.set(t,u)),this.Lr.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class HA{constructor(){this.sessionToken=St.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class lf{constructor(){this.kr=new yt(Tt.qr),this.Kr=new yt(Tt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new Tt(e,t);this.kr=this.kr.add(s),this.Kr=this.Kr.add(s)}$r(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new Tt(e,t))}Qr(e,t){e.forEach((s=>this.removeReference(s,t)))}Gr(e){const t=new le(new He([])),s=new Tt(t,e),o=new Tt(t,e+1),u=[];return this.Kr.forEachInRange([s,o],(h=>{this.Wr(h),u.push(h.key)})),u}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new le(new He([])),s=new Tt(t,e),o=new Tt(t,e+1);let u=Pe();return this.Kr.forEachInRange([s,o],(h=>{u=u.add(h.key)})),u}containsKey(e){const t=new Tt(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Tt{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return le.comparator(e.key,t.key)||Ce(e.Jr,t.Jr)}static Ur(e,t){return Ce(e.Jr,t.Jr)||le.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class WA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new yt(Tt.qr)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new aA(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Hr=this.Hr.add(new Tt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return $.resolve(h)}lookupMutationBatch(e,t){return $.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),u=o<0?0:o;return $.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?Yd:this.Yn-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Tt(t,0),o=new Tt(t,Number.POSITIVE_INFINITY),u=[];return this.Hr.forEachInRange([s,o],(h=>{const m=this.Zr(h.Jr);u.push(m)})),$.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new yt(Ce);return t.forEach((o=>{const u=new Tt(o,0),h=new Tt(o,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([u,h],(m=>{s=s.add(m.Jr)}))})),$.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;le.isDocumentKey(u)||(u=u.child(""));const h=new Tt(new le(u),0);let m=new yt(Ce);return this.Hr.forEachWhile((y=>{const _=y.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(m=m.add(y.Jr)),!0)}),h),$.resolve(this.Yr(m))}Yr(e){const t=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Fe(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Hr;return $.forEach(t.mutations,(o=>{const u=new Tt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Hr=s}))}nr(e){}containsKey(e,t){const s=new Tt(t,0),o=this.Hr.firstAfterOrEqual(s);return $.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class GA{constructor(e){this.ti=e,this.docs=(function(){return new et(le.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return $.resolve(s?s.document.mutableCopy():Ft.newInvalidDocument(t))}getEntries(e,t){let s=Dr();return t.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Ft.newInvalidDocument(o))})),$.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Dr();const h=t.path,m=new le(h.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:_,value:{document:w}}=y.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||vS(_S(w),s)<=0||(o.has(w.key)||cc(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return $.resolve(u)}getAllFromCollectionGroup(e,t,s,o){de(9500)}ni(e,t){return $.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new KA(this)}getSize(e){return $.resolve(this.size)}}class KA extends jA{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Mr.addEntry(e,o)):this.Mr.removeEntry(s)})),$.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class QA{constructor(e){this.persistence=e,this.ri=new fs((t=>Zd(t)),ef),this.lastRemoteSnapshotVersion=me.min(),this.highestTargetId=0,this.ii=0,this.si=new lf,this.targetCount=0,this.oi=To._r()}forEachTarget(e,t){return this.ri.forEach(((s,o)=>t(o))),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),$.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new To(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,$.resolve()}updateTargetData(e,t){return this.lr(t),$.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.ri.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.ri.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),$.waitFor(u).next((()=>o))}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return $.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),$.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((h=>{u.push(o.markPotentiallyOrphaned(e,h))})),$.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),$.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return $.resolve(s)}containsKey(e,t){return $.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class dv{constructor(e,t){this._i={},this.overlays={},this.ai=new oc(0),this.ui=!1,this.ui=!0,this.ci=new HA,this.referenceDelegate=e(this),this.li=new QA(this),this.indexManager=new VA,this.remoteDocumentCache=(function(o){return new GA(o)})((s=>this.referenceDelegate.hi(s))),this.serializer=new xA(t),this.Pi=new $A(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new qA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new WA(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){ne("MemoryPersistence","Starting transaction:",e);const o=new YA(this.ai.next());return this.referenceDelegate.Ti(),s(o).next((u=>this.referenceDelegate.Ei(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ii(e,t){return $.or(Object.values(this._i).map((s=>()=>s.containsKey(e,t))))}}class YA extends wS{constructor(e){super(),this.currentSequenceNumber=e}}class uf{constructor(e){this.persistence=e,this.Ri=new lf,this.Ai=null}static Vi(e){return new uf(e)}get di(){if(this.Ai)return this.Ai;throw de(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),$.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),$.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),$.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((o=>this.di.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.di.add(u.toString())))})).next((()=>s.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.di,(s=>{const o=le.fromPath(s);return this.mi(e,o).next((u=>{u||t.removeEntry(o,me.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return $.or([()=>$.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class Yu{constructor(e,t){this.persistence=e,this.fi=new fs((s=>SS(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=UA(this,t)}static Vi(e,t){return new Yu(e,t)}Ti(){}Ei(e){return $.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}pr(e){let t=0;return this.mr(e,(s=>{t++})).next((()=>t))}mr(e,t){return $.forEach(this.fi,((s,o)=>this.wr(e,s,o).next((u=>u?$.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ni(e,(h=>this.wr(e,h,t).next((m=>{m||(s++,u.removeEntry(h,me.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),$.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),$.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),$.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=xu(e.data.value)),t}wr(e,t,s){return $.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.fi.get(t);return $.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class cf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Ts=s,this.Es=o}static Is(e,t){let s=Pe(),o=Pe();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new cf(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class JA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class XA{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return $w()?8:TS(Ut())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.gs(e,t).next((h=>{u.result=h})).next((()=>{if(!u.result)return this.ps(e,t,o,s).next((h=>{u.result=h}))})).next((()=>{if(u.result)return;const h=new JA;return this.ys(e,t,h).next((m=>{if(u.result=m,this.As)return this.ws(e,t,h,m.size)}))})).next((()=>u.result))}ws(e,t,s,o){return s.documentReadCount<this.Vs?(io()<=Re.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",so(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),$.resolve()):(io()<=Re.DEBUG&&ne("QueryEngine","Query:",so(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ds*o?(io()<=Re.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",so(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,er(t))):$.resolve())}gs(e,t){if(jg(t))return $.resolve(null);let s=er(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Ad(t,null,"F"),s=er(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const h=Pe(...u);return this.fs.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((y=>{const _=this.Ss(t,m);return this.bs(t,_,h,y.readTime)?this.gs(e,Ad(t,null,"F")):this.Ds(e,_,t,y)}))))})))))}ps(e,t,s,o){return jg(t)||o.isEqual(me.min())?$.resolve(null):this.fs.getDocuments(e,s).next((u=>{const h=this.Ss(t,u);return this.bs(t,h,s,o)?$.resolve(null):(io()<=Re.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),so(t)),this.Ds(e,h,t,yS(o,ja)).next((m=>m)))}))}Ss(e,t){let s=new yt($_(e));return t.forEach(((o,u)=>{cc(e,u)&&(s=s.add(u))})),s}bs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ys(e,t,s){return io()<=Re.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",so(t)),this.fs.getDocumentsMatchingQuery(e,t,Ti.min(),s)}Ds(e,t,s,o){return this.fs.getDocumentsMatchingQuery(e,s,o).next((u=>(t.forEach((h=>{u=u.insert(h.key,h)})),u)))}}/**
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
 */const hf="LocalStore",ZA=3e8;class eR{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.vs=new et(Ce),this.Fs=new fs((u=>Zd(u)),ef),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new BA(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function tR(i,e,t,s){return new eR(i,e,t,s)}async function fv(i,e){const t=ye(i);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,t.Os(e),t.mutationQueue.getAllMutationBatches(s)))).next((u=>{const h=[],m=[];let y=Pe();for(const _ of o){h.push(_.batchId);for(const w of _.mutations)y=y.add(w.key)}for(const _ of u){m.push(_.batchId);for(const w of _.mutations)y=y.add(w.key)}return t.localDocuments.getDocuments(s,y).next((_=>({Ns:_,removedBatchIds:h,addedBatchIds:m})))}))}))}function nR(i,e){const t=ye(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),u=t.xs.newChangeBuffer({trackRemovals:!0});return(function(m,y,_,w){const A=_.batch,V=A.keys();let z=$.resolve();return V.forEach((K=>{z=z.next((()=>w.getEntry(y,K))).next((Q=>{const G=_.docVersions.get(K);Fe(G!==null,48541),Q.version.compareTo(G)<0&&(A.applyToRemoteDocument(Q,_),Q.isValidDocument()&&(Q.setReadTime(_.commitVersion),w.addEntry(Q)))}))})),z.next((()=>m.mutationQueue.removeMutationBatch(y,A)))})(t,s,e,u).next((()=>u.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let y=Pe();for(let _=0;_<m.mutationResults.length;++_)m.mutationResults[_].transformResults.length>0&&(y=y.add(m.batch.mutations[_].key));return y})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function pv(i){const e=ye(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function rR(i,e){const t=ye(i),s=e.snapshotVersion;let o=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const h=t.xs.newChangeBuffer({trackRemovals:!0});o=t.vs;const m=[];e.targetChanges.forEach(((w,A)=>{const V=o.get(A);if(!V)return;m.push(t.li.removeMatchingKeys(u,w.removedDocuments,A).next((()=>t.li.addMatchingKeys(u,w.addedDocuments,A))));let z=V.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(A)!==null?z=z.withResumeToken(St.EMPTY_BYTE_STRING,me.min()).withLastLimboFreeSnapshotVersion(me.min()):w.resumeToken.approximateByteSize()>0&&(z=z.withResumeToken(w.resumeToken,s)),o=o.insert(A,z),(function(Q,G,_e){return Q.resumeToken.approximateByteSize()===0||G.snapshotVersion.toMicroseconds()-Q.snapshotVersion.toMicroseconds()>=ZA?!0:_e.addedDocuments.size+_e.modifiedDocuments.size+_e.removedDocuments.size>0})(V,z,w)&&m.push(t.li.updateTargetData(u,z))}));let y=Dr(),_=Pe();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))})),m.push(iR(u,h,e.documentUpdates).next((w=>{y=w.Bs,_=w.Ls}))),!s.isEqual(me.min())){const w=t.li.getLastRemoteSnapshotVersion(u).next((A=>t.li.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(w)}return $.waitFor(m).next((()=>h.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,y,_))).next((()=>y))})).then((u=>(t.vs=o,u)))}function iR(i,e,t){let s=Pe(),o=Pe();return t.forEach((u=>s=s.add(u))),e.getEntries(i,s).next((u=>{let h=Dr();return t.forEach(((m,y)=>{const _=u.get(m);y.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(m)),y.isNoDocument()&&y.version.isEqual(me.min())?(e.removeEntry(m,y.readTime),h=h.insert(m,y)):!_.isValidDocument()||y.version.compareTo(_.version)>0||y.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(y),h=h.insert(m,y)):ne(hf,"Ignoring outdated watch update for ",m,". Current version:",_.version," Watch version:",y.version)})),{Bs:h,Ls:o}}))}function sR(i,e){const t=ye(i);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Yd),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function oR(i,e){const t=ye(i);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.li.getTargetData(s,e).next((u=>u?(o=u,$.resolve(o)):t.li.allocateTargetId(s).next((h=>(o=new mi(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.vs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s}))}async function Nd(i,e,t){const s=ye(i),o=s.vs.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!ko(h))throw h;ne(hf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.vs=s.vs.remove(e),s.Fs.delete(o.target)}function Zg(i,e,t){const s=ye(i);let o=me.min(),u=Pe();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(y,_,w){const A=ye(y),V=A.Fs.get(w);return V!==void 0?$.resolve(A.vs.get(V)):A.li.getTargetData(_,w)})(s,h,er(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(h,m.targetId).next((y=>{u=y}))})).next((()=>s.Cs.getDocumentsMatchingQuery(h,e,t?o:me.min(),t?u:Pe()))).next((m=>(aR(s,WS(e),m),{documents:m,ks:u})))))}function aR(i,e,t){let s=i.Ms.get(e)||me.min();t.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),i.Ms.set(e,s)}class ey{constructor(){this.activeTargetIds=XS()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lR{constructor(){this.vo=new ey,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new ey,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class uR{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const ty="ConnectivityMonitor";class ny{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){ne(ty,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){ne(ty,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Au=null;function xd(){return Au===null?Au=(function(){return 268435456+Math.round(2147483648*Math.random())})():Au++,"0x"+Au.toString(16)}/**
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
 */const ad="RestConnection",cR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class hR{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.$o=this.databaseId.database===qu?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,u){const h=xd(),m=this.Qo(e,t.toUriEncodedString());ne(ad,`Sending RPC '${e}' ${h}:`,m,s);const y={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(y,o,u);const{host:_}=new URL(m),w=Qa(_);return this.zo(e,m,y,s,w).then((A=>(ne(ad,`Received RPC '${e}' ${h}: `,A),A)),(A=>{throw wi(ad,`RPC '${e}' ${h} failed with error: `,A,"url: ",m,"request:",s),A}))}jo(e,t,s,o,u,h){return this.Wo(e,t,s,o,u)}Go(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Co})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,u)=>e[u]=o)),s&&s.headers.forEach(((o,u)=>e[u]=o))}Qo(e,t){const s=cR[e];let o=`${this.Ko}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(o=`${o}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),o}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class dR{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Mt="WebChannelConnection",Pa=(i,e,t)=>{i.listen(e,(s=>{try{t(s)}catch(o){setTimeout((()=>{throw o}),0)}}))};class fo extends hR{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!fo.c_){const e=y_();Pa(e,g_.STAT_EVENT,(t=>{t.stat===_d.PROXY?ne(Mt,"STAT_EVENT: detected buffering proxy"):t.stat===_d.NOPROXY&&ne(Mt,"STAT_EVENT: detected no buffering proxy")})),fo.c_=!0}}zo(e,t,s,o,u){const h=xd();return new Promise(((m,y)=>{const _=new p_;_.setWithCredentials(!0),_.listenOnce(m_.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case Nu.NO_ERROR:const A=_.getResponseJson();ne(Mt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(A)),m(A);break;case Nu.TIMEOUT:ne(Mt,`RPC '${e}' ${h} timed out`),y(new ee(B.DEADLINE_EXCEEDED,"Request time out"));break;case Nu.HTTP_ERROR:const V=_.getStatus();if(ne(Mt,`RPC '${e}' ${h} failed with status:`,V,"response text:",_.getResponseText()),V>0){let z=_.getResponseJson();Array.isArray(z)&&(z=z[0]);const K=z==null?void 0:z.error;if(K&&K.status&&K.message){const Q=(function(_e){const ve=_e.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(ve)>=0?ve:B.UNKNOWN})(K.status);y(new ee(Q,K.message))}else y(new ee(B.UNKNOWN,"Server responded with status "+_.getStatus()))}else y(new ee(B.UNAVAILABLE,"Connection failed."));break;default:de(9055,{l_:e,streamId:h,h_:_.getLastErrorCode(),P_:_.getLastError()})}}finally{ne(Mt,`RPC '${e}' ${h} completed.`)}}));const w=JSON.stringify(o);ne(Mt,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",w,s,15)}))}T_(e,t,s){const o=xd(),u=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=this.createWebChannelTransport(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(m.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(m.useFetchStreams=!0),this.Go(m.initMessageHeaders,t,s),m.encodeInitMessageHeaders=!0;const _=u.join("");ne(Mt,`Creating RPC '${e}' stream ${o}: ${_}`,m);const w=h.createWebChannel(_,m);this.E_(w);let A=!1,V=!1;const z=new dR({Jo:K=>{V?ne(Mt,`Not sending because RPC '${e}' stream ${o} is closed:`,K):(A||(ne(Mt,`Opening RPC '${e}' stream ${o} transport.`),w.open(),A=!0),ne(Mt,`RPC '${e}' stream ${o} sending:`,K),w.send(K))},Ho:()=>w.close()});return Pa(w,ka.EventType.OPEN,(()=>{V||(ne(Mt,`RPC '${e}' stream ${o} transport opened.`),z.i_())})),Pa(w,ka.EventType.CLOSE,(()=>{V||(V=!0,ne(Mt,`RPC '${e}' stream ${o} transport closed`),z.o_(),this.I_(w))})),Pa(w,ka.EventType.ERROR,(K=>{V||(V=!0,wi(Mt,`RPC '${e}' stream ${o} transport errored. Name:`,K.name,"Message:",K.message),z.o_(new ee(B.UNAVAILABLE,"The operation could not be completed")))})),Pa(w,ka.EventType.MESSAGE,(K=>{var Q;if(!V){const G=K.data[0];Fe(!!G,16349);const _e=G,ve=(_e==null?void 0:_e.error)||((Q=_e[0])==null?void 0:Q.error);if(ve){ne(Mt,`RPC '${e}' stream ${o} received error:`,ve);const Te=ve.status;let Ne=(function(P){const I=dt[P];if(I!==void 0)return ev(I)})(Te),je=ve.message;Te==="NOT_FOUND"&&je.includes("database")&&je.includes("does not exist")&&je.includes(this.databaseId.database)&&wi(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Ne===void 0&&(Ne=B.INTERNAL,je="Unknown error status: "+Te+" with message "+ve.message),V=!0,z.o_(new ee(Ne,je)),w.close()}else ne(Mt,`RPC '${e}' stream ${o} received:`,G),z.__(G)}})),fo.u_(),setTimeout((()=>{z.s_()}),0),z}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return __()}}/**
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
 */function fR(i){return new fo(i)}function ld(){return typeof document<"u"?document:null}/**
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
 */function pc(i){return new yA(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */fo.c_=!1;class mv{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=o,this.V_=u,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&ne("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const ry="PersistentStream";class gv{constructor(e,t,s,o,u,h,m,y){this.Ci=e,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new mv(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===B.RESOURCE_EXHAUSTED?(Nr(t.toString()),Nr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===t&&this.G_(s,o)}),(s=>{e((()=>{const o=new ee(B.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ne(ry,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(ne(ry,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class pR extends gv{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=EA(this.serializer,e),s=(function(u){if(!("targetChange"in u))return me.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?me.min():h.readTime?nr(h.readTime):me.min()})(e);return this.listener.H_(t,s)}Z_(e){const t={};t.database=kd(this.serializer),t.addTarget=(function(u,h){let m;const y=h.target;if(m=Id(y)?{documents:IA(u,y)}:{query:SA(u,y).ft},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=rv(u,h.resumeToken);const _=Rd(u,h.expectedCount);_!==null&&(m.expectedCount=_)}else if(h.snapshotVersion.compareTo(me.min())>0){m.readTime=Qu(u,h.snapshotVersion.toTimestamp());const _=Rd(u,h.expectedCount);_!==null&&(m.expectedCount=_)}return m})(this.serializer,e);const s=RA(this.serializer,e);s&&(t.labels=s),this.q_(t)}X_(e){const t={};t.database=kd(this.serializer),t.removeTarget=e,this.q_(t)}}class mR extends gv{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=TA(e.writeResults,e.commitTime),s=nr(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=kd(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>wA(this.serializer,s)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class gR{}class yR extends gR{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ee(B.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Wo(e,Cd(t,s),o,u,h))).catch((u=>{throw u.name==="FirebaseError"?(u.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ee(B.UNKNOWN,u.toString())}))}jo(e,t,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.jo(e,Cd(t,s),o,h,m,u))).catch((h=>{throw h.name==="FirebaseError"?(h.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ee(B.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function _R(i,e,t,s){return new yR(i,e,t,s)}class vR{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Nr(t),this.aa=!1):ne("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const hs="RemoteStore";class ER{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=u,this.Aa.Mo((h=>{s.enqueueAndForget((async()=>{ms(this)&&(ne(hs,"Restarting streams for network reachability change."),await(async function(y){const _=ye(y);_.Ia.add(4),await nl(_),_.Va.set("Unknown"),_.Ia.delete(4),await mc(_)})(this))}))})),this.Va=new vR(s,o)}}async function mc(i){if(ms(i))for(const e of i.Ra)await e(!0)}async function nl(i){for(const e of i.Ra)await e(!1)}function yv(i,e){const t=ye(i);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),mf(t)?pf(t):xo(t).O_()&&ff(t,e))}function df(i,e){const t=ye(i),s=xo(t);t.Ea.delete(e),s.O_()&&_v(t,e),t.Ea.size===0&&(s.O_()?s.L_():ms(t)&&t.Va.set("Unknown"))}function ff(i,e){if(i.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(me.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}xo(i).Z_(e)}function _v(i,e){i.da.$e(e),xo(i).X_(e)}function pf(i){i.da=new fA({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),At:e=>i.Ea.get(e)||null,ht:()=>i.datastore.serializer.databaseId}),xo(i).start(),i.Va.ua()}function mf(i){return ms(i)&&!xo(i).x_()&&i.Ea.size>0}function ms(i){return ye(i).Ia.size===0}function vv(i){i.da=void 0}async function wR(i){i.Va.set("Online")}async function TR(i){i.Ea.forEach(((e,t)=>{ff(i,e)}))}async function IR(i,e){vv(i),mf(i)?(i.Va.ha(e),pf(i)):i.Va.set("Unknown")}async function SR(i,e,t){if(i.Va.set("Online"),e instanceof nv&&e.state===2&&e.cause)try{await(async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Ea.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ea.delete(m),o.da.removeTarget(m))})(i,e)}catch(s){ne(hs,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ju(i,s)}else if(e instanceof Ou?i.da.Xe(e):e instanceof tv?i.da.st(e):i.da.tt(e),!t.isEqual(me.min()))try{const s=await pv(i.localStore);t.compareTo(s)>=0&&await(function(u,h){const m=u.da.Tt(h);return m.targetChanges.forEach(((y,_)=>{if(y.resumeToken.approximateByteSize()>0){const w=u.Ea.get(_);w&&u.Ea.set(_,w.withResumeToken(y.resumeToken,h))}})),m.targetMismatches.forEach(((y,_)=>{const w=u.Ea.get(y);if(!w)return;u.Ea.set(y,w.withResumeToken(St.EMPTY_BYTE_STRING,w.snapshotVersion)),_v(u,y);const A=new mi(w.target,y,_,w.sequenceNumber);ff(u,A)})),u.remoteSyncer.applyRemoteEvent(m)})(i,t)}catch(s){ne(hs,"Failed to raise snapshot:",s),await Ju(i,s)}}async function Ju(i,e,t){if(!ko(e))throw e;i.Ia.add(1),await nl(i),i.Va.set("Offline"),t||(t=()=>pv(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{ne(hs,"Retrying IndexedDB access"),await t(),i.Ia.delete(1),await mc(i)}))}function Ev(i,e){return e().catch((t=>Ju(i,t,e)))}async function gc(i){const e=ye(i),t=Ri(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Yd;for(;AR(e);)try{const o=await sR(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,RR(e,o)}catch(o){await Ju(e,o)}wv(e)&&Tv(e)}function AR(i){return ms(i)&&i.Ta.length<10}function RR(i,e){i.Ta.push(e);const t=Ri(i);t.O_()&&t.Y_&&t.ea(e.mutations)}function wv(i){return ms(i)&&!Ri(i).x_()&&i.Ta.length>0}function Tv(i){Ri(i).start()}async function CR(i){Ri(i).ra()}async function PR(i){const e=Ri(i);for(const t of i.Ta)e.ea(t.mutations)}async function kR(i,e,t){const s=i.Ta.shift(),o=sf.from(s,e,t);await Ev(i,(()=>i.remoteSyncer.applySuccessfulWrite(o))),await gc(i)}async function NR(i,e){e&&Ri(i).Y_&&await(async function(s,o){if((function(h){return cA(h)&&h!==B.ABORTED})(o.code)){const u=s.Ta.shift();Ri(s).B_(),await Ev(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await gc(s)}})(i,e),wv(i)&&Tv(i)}async function iy(i,e){const t=ye(i);t.asyncQueue.verifyOperationInProgress(),ne(hs,"RemoteStore received new credentials");const s=ms(t);t.Ia.add(3),await nl(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await mc(t)}async function xR(i,e){const t=ye(i);e?(t.Ia.delete(2),await mc(t)):e||(t.Ia.add(2),await nl(t),t.Va.set("Unknown"))}function xo(i){return i.ma||(i.ma=(function(t,s,o){const u=ye(t);return u.sa(),new pR(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Zo:wR.bind(null,i),Yo:TR.bind(null,i),t_:IR.bind(null,i),H_:SR.bind(null,i)}),i.Ra.push((async e=>{e?(i.ma.B_(),mf(i)?pf(i):i.Va.set("Unknown")):(await i.ma.stop(),vv(i))}))),i.ma}function Ri(i){return i.fa||(i.fa=(function(t,s,o){const u=ye(t);return u.sa(),new mR(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Zo:()=>Promise.resolve(),Yo:CR.bind(null,i),t_:NR.bind(null,i),ta:PR.bind(null,i),na:kR.bind(null,i)}),i.Ra.push((async e=>{e?(i.fa.B_(),await gc(i)):(await i.fa.stop(),i.Ta.length>0&&(ne(hs,`Stopping write stream with ${i.Ta.length} pending writes`),i.Ta=[]))}))),i.fa}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class gf{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Rr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new gf(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yf(i,e){if(Nr("AsyncQueue",`${e}: ${i}`),ko(i))return new ee(B.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class po{static emptySet(e){return new po(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||le.comparator(t.key,s.key):(t,s)=>le.comparator(t.key,s.key),this.keyedMap=Na(),this.sortedSet=new et(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof po)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new po;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class sy{constructor(){this.ga=new et(le.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):de(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Io{constructor(e,t,s,o,u,h,m,y,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new Io(e,t,po.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&uc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class DR{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class VR{constructor(){this.queries=oy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=ye(t),u=o.queries;o.queries=oy(),u.forEach(((h,m)=>{for(const y of m.Sa)y.onError(s)}))})(this,new ee(B.ABORTED,"Firestore shutting down"))}}function oy(){return new fs((i=>B_(i)),uc)}async function Iv(i,e){const t=ye(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.ba()&&e.Da()&&(s=2):(u=new DR,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await t.onListen(o,!0);break;case 1:u.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=yf(h,`Initialization of query '${so(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.Sa.push(e),e.va(t.onlineState),u.wa&&e.Fa(u.wa)&&_f(t)}async function Sv(i,e){const t=ye(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.Sa.indexOf(e);h>=0&&(u.Sa.splice(h,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function OR(i,e){const t=ye(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.Sa)m.Fa(o)&&(s=!0);h.wa=o}}s&&_f(t)}function LR(i,e,t){const s=ye(i),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(t);s.queries.delete(e)}function _f(i){i.Ca.forEach((e=>{e.next()}))}var Dd,ay;(ay=Dd||(Dd={})).Ma="default",ay.Cache="cache";class Av{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Io(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Io.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Dd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Rv{constructor(e){this.key=e}}class Cv{constructor(e){this.key=e}}class MR{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Pe(),this.mutatedKeys=Pe(),this.eu=$_(e),this.tu=new po(this.eu)}get nu(){return this.Za}ru(e,t){const s=t?t.iu:new sy,o=t?t.tu:this.tu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const y=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((w,A)=>{const V=o.get(w),z=cc(this.query,A)?A:null,K=!!V&&this.mutatedKeys.has(V.key),Q=!!z&&(z.hasLocalMutations||this.mutatedKeys.has(z.key)&&z.hasCommittedMutations);let G=!1;V&&z?V.data.isEqual(z.data)?K!==Q&&(s.track({type:3,doc:z}),G=!0):this.su(V,z)||(s.track({type:2,doc:z}),G=!0,(y&&this.eu(z,y)>0||_&&this.eu(z,_)<0)&&(m=!0)):!V&&z?(s.track({type:0,doc:z}),G=!0):V&&!z&&(s.track({type:1,doc:V}),G=!0,(y||_)&&(m=!0)),G&&(z?(h=h.add(z),u=Q?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{tu:h,iu:s,bs:m,mutatedKeys:u}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((w,A)=>(function(z,K){const Q=G=>{switch(G){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return de(20277,{Vt:G})}};return Q(z)-Q(K)})(w.type,A.type)||this.eu(w.doc,A.doc))),this.ou(s),o=o??!1;const m=t&&!o?this._u():[],y=this.Ya.size===0&&this.current&&!o?1:0,_=y!==this.Xa;return this.Xa=y,h.length!==0||_?{snapshot:new Io(this.query,e.tu,u,h,e.mutatedKeys,y===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new sy,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=Pe(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))}));const t=[];return e.forEach((s=>{this.Ya.has(s)||t.push(new Cv(s))})),this.Ya.forEach((s=>{e.has(s)||t.push(new Rv(s))})),t}cu(e){this.Za=e.ks,this.Ya=Pe();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Io.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const vf="SyncEngine";class bR{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class FR{constructor(e){this.key=e,this.hu=!1}}class UR{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new fs((m=>B_(m)),uc),this.Eu=new Map,this.Iu=new Set,this.Ru=new et(le.comparator),this.Au=new Map,this.Vu=new lf,this.du={},this.mu=new Map,this.fu=To.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function jR(i,e,t=!0){const s=Vv(i);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await Pv(s,e,t,!0),o}async function zR(i,e){const t=Vv(i);await Pv(t,e,!0,!1)}async function Pv(i,e,t,s){const o=await oR(i.localStore,er(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await BR(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&yv(i.remoteStore,o),m}async function BR(i,e,t,s,o){i.pu=(A,V,z)=>(async function(Q,G,_e,ve){let Te=G.view.ru(_e);Te.bs&&(Te=await Zg(Q.localStore,G.query,!1).then((({documents:P})=>G.view.ru(P,Te))));const Ne=ve&&ve.targetChanges.get(G.targetId),je=ve&&ve.targetMismatches.get(G.targetId)!=null,Oe=G.view.applyChanges(Te,Q.isPrimaryClient,Ne,je);return uy(Q,G.targetId,Oe.au),Oe.snapshot})(i,A,V,z);const u=await Zg(i.localStore,e,!0),h=new MR(e,u.ks),m=h.ru(u.documents),y=tl.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),_=h.applyChanges(m,i.isPrimaryClient,y);uy(i,t,_.au);const w=new bR(e,t,h);return i.Tu.set(e,w),i.Eu.has(t)?i.Eu.get(t).push(e):i.Eu.set(t,[e]),_.snapshot}async function $R(i,e,t){const s=ye(i),o=s.Tu.get(e),u=s.Eu.get(o.targetId);if(u.length>1)return s.Eu.set(o.targetId,u.filter((h=>!uc(h,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Nd(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&df(s.remoteStore,o.targetId),Vd(s,o.targetId)})).catch(Po)):(Vd(s,o.targetId),await Nd(s.localStore,o.targetId,!0))}async function qR(i,e){const t=ye(i),s=t.Tu.get(e),o=t.Eu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),df(t.remoteStore,s.targetId))}async function HR(i,e,t){const s=XR(i);try{const o=await(function(h,m){const y=ye(h),_=We.now(),w=m.reduce(((z,K)=>z.add(K.key)),Pe());let A,V;return y.persistence.runTransaction("Locally write mutations","readwrite",(z=>{let K=Dr(),Q=Pe();return y.xs.getEntries(z,w).next((G=>{K=G,K.forEach(((_e,ve)=>{ve.isValidDocument()||(Q=Q.add(_e))}))})).next((()=>y.localDocuments.getOverlayedDocuments(z,K))).next((G=>{A=G;const _e=[];for(const ve of m){const Te=sA(ve,A.get(ve.key).overlayedDocument);Te!=null&&_e.push(new ps(ve.key,Te,O_(Te.value.mapValue),tr.exists(!0)))}return y.mutationQueue.addMutationBatch(z,_,_e,m)})).next((G=>{V=G;const _e=G.applyToLocalDocumentSet(A,Q);return y.documentOverlayCache.saveOverlays(z,G.batchId,_e)}))})).then((()=>({batchId:V.batchId,changes:H_(A)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,m,y){let _=h.du[h.currentUser.toKey()];_||(_=new et(Ce)),_=_.insert(m,y),h.du[h.currentUser.toKey()]=_})(s,o.batchId,t),await rl(s,o.changes),await gc(s.remoteStore)}catch(o){const u=yf(o,"Failed to persist write");t.reject(u)}}async function kv(i,e){const t=ye(i);try{const s=await rR(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const h=t.Au.get(u);h&&(Fe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?Fe(h.hu,14607):o.removedDocuments.size>0&&(Fe(h.hu,42227),h.hu=!1))})),await rl(t,s,e)}catch(s){await Po(s)}}function ly(i,e,t){const s=ye(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach(((u,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const y=ye(h);y.onlineState=m;let _=!1;y.queries.forEach(((w,A)=>{for(const V of A.Sa)V.va(m)&&(_=!0)})),_&&_f(y)})(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function WR(i,e,t){const s=ye(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),u=o&&o.key;if(u){let h=new et(le.comparator);h=h.insert(u,Ft.newNoDocument(u,me.min()));const m=Pe().add(u),y=new fc(me.min(),new Map,new et(Ce),h,m);await kv(s,y),s.Ru=s.Ru.remove(u),s.Au.delete(e),Ef(s)}else await Nd(s.localStore,e,!1).then((()=>Vd(s,e,t))).catch(Po)}async function GR(i,e){const t=ye(i),s=e.batch.batchId;try{const o=await nR(t.localStore,e);xv(t,s,null),Nv(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await rl(t,o)}catch(o){await Po(o)}}async function KR(i,e,t){const s=ye(i);try{const o=await(function(h,m){const y=ye(h);return y.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let w;return y.mutationQueue.lookupMutationBatch(_,m).next((A=>(Fe(A!==null,37113),w=A.keys(),y.mutationQueue.removeMutationBatch(_,A)))).next((()=>y.mutationQueue.performConsistencyCheck(_))).next((()=>y.documentOverlayCache.removeOverlaysForBatchId(_,w,m))).next((()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,w))).next((()=>y.localDocuments.getDocuments(_,w)))}))})(s.localStore,e);xv(s,e,t),Nv(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await rl(s,o)}catch(o){await Po(o)}}function Nv(i,e){(i.mu.get(e)||[]).forEach((t=>{t.resolve()})),i.mu.delete(e)}function xv(i,e,t){const s=ye(i);let o=s.du[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.du[s.currentUser.toKey()]=o}}function Vd(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Eu.get(e))i.Tu.delete(s),t&&i.Pu.yu(s,t);i.Eu.delete(e),i.isPrimaryClient&&i.Vu.Gr(e).forEach((s=>{i.Vu.containsKey(s)||Dv(i,s)}))}function Dv(i,e){i.Iu.delete(e.path.canonicalString());const t=i.Ru.get(e);t!==null&&(df(i.remoteStore,t),i.Ru=i.Ru.remove(e),i.Au.delete(t),Ef(i))}function uy(i,e,t){for(const s of t)s instanceof Rv?(i.Vu.addReference(s.key,e),QR(i,s)):s instanceof Cv?(ne(vf,"Document no longer in limbo: "+s.key),i.Vu.removeReference(s.key,e),i.Vu.containsKey(s.key)||Dv(i,s.key)):de(19791,{wu:s})}function QR(i,e){const t=e.key,s=t.path.canonicalString();i.Ru.get(t)||i.Iu.has(s)||(ne(vf,"New document in limbo: "+t),i.Iu.add(s),Ef(i))}function Ef(i){for(;i.Iu.size>0&&i.Ru.size<i.maxConcurrentLimboResolutions;){const e=i.Iu.values().next().value;i.Iu.delete(e);const t=new le(He.fromString(e)),s=i.fu.next();i.Au.set(s,new FR(t)),i.Ru=i.Ru.insert(t,s),yv(i.remoteStore,new mi(er(tf(t.path)),s,"TargetPurposeLimboResolution",oc.ce))}}async function rl(i,e,t){const s=ye(i),o=[],u=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach(((m,y)=>{h.push(s.pu(y,e,t).then((_=>{var w;if((_||t)&&s.isPrimaryClient){const A=_?!_.fromCache:(w=t==null?void 0:t.targetChanges.get(y.targetId))==null?void 0:w.current;s.sharedClientState.updateQueryState(y.targetId,A?"current":"not-current")}if(_){o.push(_);const A=cf.Is(y.targetId,_);u.push(A)}})))})),await Promise.all(h),s.Pu.H_(o),await(async function(y,_){const w=ye(y);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(A=>$.forEach(_,(V=>$.forEach(V.Ts,(z=>w.persistence.referenceDelegate.addReference(A,V.targetId,z))).next((()=>$.forEach(V.Es,(z=>w.persistence.referenceDelegate.removeReference(A,V.targetId,z)))))))))}catch(A){if(!ko(A))throw A;ne(hf,"Failed to update sequence numbers: "+A)}for(const A of _){const V=A.targetId;if(!A.fromCache){const z=w.vs.get(V),K=z.snapshotVersion,Q=z.withLastLimboFreeSnapshotVersion(K);w.vs=w.vs.insert(V,Q)}}})(s.localStore,u))}async function YR(i,e){const t=ye(i);if(!t.currentUser.isEqual(e)){ne(vf,"User change. New user:",e.toKey());const s=await fv(t.localStore,e);t.currentUser=e,(function(u,h){u.mu.forEach((m=>{m.forEach((y=>{y.reject(new ee(B.CANCELLED,h))}))})),u.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await rl(t,s.Ns)}}function JR(i,e){const t=ye(i),s=t.Au.get(e);if(s&&s.hu)return Pe().add(s.key);{let o=Pe();const u=t.Eu.get(e);if(!u)return o;for(const h of u){const m=t.Tu.get(h);o=o.unionWith(m.view.nu)}return o}}function Vv(i){const e=ye(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=kv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=JR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=WR.bind(null,e),e.Pu.H_=OR.bind(null,e.eventManager),e.Pu.yu=LR.bind(null,e.eventManager),e}function XR(i){const e=ye(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=GR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=KR.bind(null,e),e}class Xu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=pc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return tR(this.persistence,new XA,e.initialUser,this.serializer)}Cu(e){return new dv(uf.Vi,this.serializer)}Du(e){return new lR}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Xu.provider={build:()=>new Xu};class ZR extends Xu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Fe(this.persistence.referenceDelegate instanceof Yu,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new bA(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Yt.withCacheSize(this.cacheSizeBytes):Yt.DEFAULT;return new dv((s=>Yu.Vi(s,t)),this.serializer)}}class Od{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ly(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=YR.bind(null,this.syncEngine),await xR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new VR})()}createDatastore(e){const t=pc(e.databaseInfo.databaseId),s=fR(e.databaseInfo);return _R(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,u,h,m){return new ER(s,o,u,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>ly(this.syncEngine,t,0)),(function(){return ny.v()?new ny:new uR})())}createSyncEngine(e,t){return(function(o,u,h,m,y,_,w){const A=new UR(o,u,h,m,y,_);return w&&(A.gu=!0),A})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const u=ye(o);ne(hs,"RemoteStore shutting down."),u.Ia.add(5),await nl(u),u.Aa.shutdown(),u.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Od.provider={build:()=>new Od};/**
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
 *//**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ov{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Nr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Ci="FirestoreClient";class e1{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=o,this.user=bt.UNAUTHENTICATED,this.clientId=ic.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async h=>{ne(Ci,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(ne(Ci,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Rr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=yf(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function ud(i,e){i.asyncQueue.verifyOperationInProgress(),ne(Ci,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener((async o=>{s.isEqual(o)||(await fv(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>i.terminate())),i._offlineComponents=e}async function cy(i,e){i.asyncQueue.verifyOperationInProgress();const t=await t1(i);ne(Ci,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((s=>iy(e.remoteStore,s))),i.setAppCheckTokenChangeListener(((s,o)=>iy(e.remoteStore,o))),i._onlineComponents=e}async function t1(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ne(Ci,"Using user provided OfflineComponentProvider");try{await ud(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===B.FAILED_PRECONDITION||o.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;wi("Error using user provided cache. Falling back to memory cache: "+t),await ud(i,new Xu)}}else ne(Ci,"Using default OfflineComponentProvider"),await ud(i,new ZR(void 0));return i._offlineComponents}async function Lv(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ne(Ci,"Using user provided OnlineComponentProvider"),await cy(i,i._uninitializedComponentsProvider._online)):(ne(Ci,"Using default OnlineComponentProvider"),await cy(i,new Od))),i._onlineComponents}function n1(i){return Lv(i).then((e=>e.syncEngine))}async function Mv(i){const e=await Lv(i),t=e.eventManager;return t.onListen=jR.bind(null,e.syncEngine),t.onUnlisten=$R.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=zR.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=qR.bind(null,e.syncEngine),t}function r1(i,e,t={}){const s=new Rr;return i.asyncQueue.enqueueAndForget((async()=>(function(u,h,m,y,_){const w=new Ov({next:V=>{w.Nu(),h.enqueueAndForget((()=>Sv(u,A)));const z=V.docs.has(m);!z&&V.fromCache?_.reject(new ee(B.UNAVAILABLE,"Failed to get document because the client is offline.")):z&&V.fromCache&&y&&y.source==="server"?_.reject(new ee(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(V)},error:V=>_.reject(V)}),A=new Av(tf(m.path),w,{includeMetadataChanges:!0,qa:!0});return Iv(u,A)})(await Mv(i),i.asyncQueue,e,t,s))),s.promise}function i1(i,e,t={}){const s=new Rr;return i.asyncQueue.enqueueAndForget((async()=>(function(u,h,m,y,_){const w=new Ov({next:V=>{w.Nu(),h.enqueueAndForget((()=>Sv(u,A))),V.fromCache&&y.source==="server"?_.reject(new ee(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(V)},error:V=>_.reject(V)}),A=new Av(m,w,{includeMetadataChanges:!0,qa:!0});return Iv(u,A)})(await Mv(i),i.asyncQueue,e,t,s))),s.promise}function s1(i,e){const t=new Rr;return i.asyncQueue.enqueueAndForget((async()=>HR(await n1(i),e,t))),t.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function bv(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const o1="ComponentProvider",hy=new Map;function a1(i,e,t,s,o){return new CS(i,e,t,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,bv(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator,s)}/**
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
 */const Fv="firestore.googleapis.com",dy=!0;class fy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ee(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Fv,this.ssl=dy}else this.host=e.host,this.ssl=e.ssl??dy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=hv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<LA)throw new ee(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}I_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=bv(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ee(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ee(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ee(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class yc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new w_;switch(s.type){case"firstParty":return new hS(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ee(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=hy.get(t);s&&(ne(o1,"Removing Datastore"),hy.delete(t),s.terminate())})(this),Promise.resolve()}}function Uv(i,e,t,s={}){var _;i=xr(i,yc);const o=Qa(e),u=i._getSettings(),h={...u,emulatorOptions:i._getEmulatorOptions()},m=`${e}:${t}`;o&&Py(`https://${m}`),u.host!==Fv&&u.host!==m&&wi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y={...u,host:m,ssl:o,emulatorOptions:s};if(!as(y,h)&&(i._setSettings(y),s.mockUserToken)){let w,A;if(typeof s.mockUserToken=="string")w=s.mockUserToken,A=bt.MOCK_USER;else{w=Mw(s.mockUserToken,(_=i._app)==null?void 0:_.options.projectId);const V=s.mockUserToken.sub||s.mockUserToken.user_id;if(!V)throw new ee(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new bt(V)}i._authCredentials=new lS(new E_(w,A))}}/**
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
 */class Pi{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Pi(this.firestore,e,this._query)}}class lt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new lt(this.firestore,e,this._key)}toJSON(){return{type:lt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Za(t,lt._jsonSchema))return new lt(e,s||null,new le(He.fromString(t.referencePath)))}}lt._jsonSchemaVersion="firestore/documentReference/1.0",lt._jsonSchema={type:pt("string",lt._jsonSchemaVersion),referencePath:pt("string")};class Cr extends Pi{constructor(e,t,s){super(e,t,tf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new lt(this.firestore,null,new le(e))}withConverter(e){return new Cr(this.firestore,e,this._path)}}function jv(i,e,...t){if(i=$t(i),T_("collection","path",e),i instanceof yc){const s=He.fromString(e,...t);return Rg(s),new Cr(i,null,s)}{if(!(i instanceof lt||i instanceof Cr))throw new ee(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(He.fromString(e,...t));return Rg(s),new Cr(i.firestore,null,s)}}function Wa(i,e,...t){if(i=$t(i),arguments.length===1&&(e=ic.newId()),T_("doc","path",e),i instanceof yc){const s=He.fromString(e,...t);return Ag(s),new lt(i,null,new le(s))}{if(!(i instanceof lt||i instanceof Cr))throw new ee(B.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(He.fromString(e,...t));return Ag(s),new lt(i.firestore,i instanceof Cr?i.converter:null,new le(s))}}/**
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
 */const py="AsyncQueue";class my{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new mv(this,"async_queue_retry"),this._c=()=>{const s=ld();s&&ne(py,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=ld();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=ld();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Rr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!ko(e))throw e;ne(py,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Nr("INTERNAL UNHANDLED ERROR: ",gy(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=gf.createAndSchedule(this,e,t,s,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&de(47125,{Pc:gy(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function gy(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class Do extends yc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new my,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new my(e),this._firestoreClient=void 0,await e}}}function zv(i,e){const t=typeof i=="object"?i:Dy(),s=typeof i=="string"?i:qu,o=Fd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=Ow("firestore");u&&Uv(o,...u)}return o}function _c(i){if(i._terminated)throw new ee(B.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||l1(i),i._firestoreClient}function l1(i){var s,o,u,h;const e=i._freezeSettings(),t=a1(i._databaseId,((s=i._app)==null?void 0:s.options.appId)||"",i._persistenceKey,(o=i._app)==null?void 0:o.options.apiKey,e);i._componentsProvider||(u=e.localCache)!=null&&u._offlineComponentProvider&&((h=e.localCache)!=null&&h._onlineComponentProvider)&&(i._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),i._firestoreClient=new e1(i._authCredentials,i._appCheckCredentials,i._queue,t,i._componentsProvider&&(function(y){const _=y==null?void 0:y._online.build();return{_offline:y==null?void 0:y._offline.build(_),_online:_}})(i._componentsProvider))}/**
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
 */class an{constructor(e){this._byteString=e}static fromBase64String(e){try{return new an(St.fromBase64String(e))}catch(t){throw new ee(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new an(St.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:an._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Za(e,an._jsonSchema))return an.fromBase64String(e.bytes)}}an._jsonSchemaVersion="firestore/bytes/1.0",an._jsonSchema={type:pt("string",an._jsonSchemaVersion),bytes:pt("string")};/**
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
 */class wf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ee(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new It(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Tf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Dn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ee(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ee(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Dn._jsonSchemaVersion}}static fromJSON(e){if(Za(e,Dn._jsonSchema))return new Dn(e.latitude,e.longitude)}}Dn._jsonSchemaVersion="firestore/geoPoint/1.0",Dn._jsonSchema={type:pt("string",Dn._jsonSchemaVersion),latitude:pt("number"),longitude:pt("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class yn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:yn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Za(e,yn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new yn(e.vectorValues);throw new ee(B.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}yn._jsonSchemaVersion="firestore/vectorValue/1.0",yn._jsonSchema={type:pt("string",yn._jsonSchemaVersion),vectorValues:pt("object")};/**
 * @license
 * Copyright 2017 Google LLC
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
 */const u1=/^__.*__$/;class c1{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new ps(e,this.data,this.fieldMask,t,this.fieldTransforms):new el(e,this.data,t,this.fieldTransforms)}}function Bv(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw de(40011,{dataSource:i})}}class If{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Ac(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new If({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.i({path:t,arrayElement:!1});return s.mc(e),s}fc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.i({path:t,arrayElement:!1});return s.Ac(),s}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return Zu(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(Bv(this.dataSource)&&u1.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class h1{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||pc(e)}I(e,t,s,o=!1){return new If({dataSource:e,methodName:t,targetDoc:s,path:It.emptyPath(),arrayElement:!1,hasConverter:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $v(i){const e=i._freezeSettings(),t=pc(i._databaseId);return new h1(i._databaseId,!!e.ignoreUndefinedProperties,t)}function d1(i,e,t,s,o,u={}){const h=i.I(u.merge||u.mergeFields?2:0,e,t,o);Wv("Data must be an object, but it was:",h,s);const m=qv(s,h);let y,_;if(u.merge)y=new Nn(h.fieldMask),_=h.fieldTransforms;else if(u.mergeFields){const w=[];for(const A of u.mergeFields){const V=vc(e,A,t);if(!h.contains(V))throw new ee(B.INVALID_ARGUMENT,`Field '${V}' is specified in your field mask but missing from your input data.`);g1(w,V)||w.push(V)}y=new Nn(w),_=h.fieldTransforms.filter((A=>y.covers(A.field)))}else y=null,_=h.fieldTransforms;return new c1(new gn(m),y,_)}function f1(i,e,t,s=!1){return Sf(t,i.I(s?4:3,e))}function Sf(i,e){if(Hv(i=$t(i)))return Wv("Unsupported field value:",e,i),qv(i,e);if(i instanceof Tf)return(function(s,o){if(!Bv(o.dataSource))throw o.yc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.yc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return(function(s,o){const u=[];let h=0;for(const m of s){let y=Sf(m,o.gc(h));y==null&&(y={nullValue:"NULL_VALUE"}),u.push(y),h++}return{arrayValue:{values:u}}})(i,e)}return(function(s,o){if((s=$t(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return ZS(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=We.fromDate(s);return{timestampValue:Qu(o.serializer,u)}}if(s instanceof We){const u=new We(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Qu(o.serializer,u)}}if(s instanceof Dn)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof an)return{bytesValue:rv(o.serializer,s._byteString)};if(s instanceof lt){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.yc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:af(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof yn)return(function(h,m){const y=h instanceof yn?h.toArray():h;return{mapValue:{fields:{[D_]:{stringValue:V_},[Hu]:{arrayValue:{values:y.map((w=>{if(typeof w!="number")throw m.yc("VectorValues must only contain numeric values.");return nf(m.serializer,w)}))}}}}}})(s,o);if(cv(s))return s._toProto(o.serializer);throw o.yc(`Unsupported field value: ${sc(s)}`)})(i,e)}function qv(i,e){const t={};return R_(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ds(i,((s,o)=>{const u=Sf(o,e.dc(s));u!=null&&(t[s]=u)})),{mapValue:{fields:t}}}function Hv(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof We||i instanceof Dn||i instanceof an||i instanceof lt||i instanceof Tf||i instanceof yn||cv(i))}function Wv(i,e,t){if(!Hv(t)||!S_(t)){const s=sc(t);throw s==="an object"?e.yc(i+" a custom object"):e.yc(i+" "+s)}}function vc(i,e,t){if((e=$t(e))instanceof wf)return e._internalPath;if(typeof e=="string")return m1(i,e);throw Zu("Field path arguments must be of type string or ",i,!1,void 0,t)}const p1=new RegExp("[~\\*/\\[\\]]");function m1(i,e,t){if(e.search(p1)>=0)throw Zu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new wf(...e.split("."))._internalPath}catch{throw Zu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Zu(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let y="";return(u||h)&&(y+=" (found",u&&(y+=` in field ${s}`),h&&(y+=` in document ${o}`),y+=")"),new ee(B.INVALID_ARGUMENT,m+i+y)}function g1(i,e){return i.some((t=>t.isEqual(e)))}/**
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
 */class Gv{convertValue(e,t="none"){switch(Ai(e)){case 0:return null;case 1:return e.booleanValue;case 2:return at(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Si(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw de(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return ds(e,((o,u)=>{s[o]=this.convertValue(u,t)})),s}convertVectorValue(e){var s,o,u;const t=(u=(o=(s=e.fields)==null?void 0:s[Hu].arrayValue)==null?void 0:o.values)==null?void 0:u.map((h=>at(h.doubleValue)));return new yn(t)}convertGeoPoint(e){return new Dn(at(e.latitude),at(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=lc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(za(e));default:return null}}convertTimestamp(e){const t=Ii(e);return new We(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=He.fromString(e);Fe(uv(s),9688,{name:e});const o=new vo(s.get(1),s.get(3)),u=new le(s.popFirst(5));return o.isEqual(t)||Nr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Kv extends Gv{constructor(e){super(),this.firestore=e}convertBytes(e){return new an(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new lt(this.firestore,null,t)}}const yy="@firebase/firestore",_y="4.14.0";/**
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
 */class Qv{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new y1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(vc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class y1 extends Qv{data(){return super.data()}}/**
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
 */function _1(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new ee(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Af{}class Rf extends Af{}function Yv(i,e,...t){let s=[];e instanceof Af&&s.push(e),s=s.concat(t),(function(u){const h=u.filter((y=>y instanceof wc)).length,m=u.filter((y=>y instanceof Ec)).length;if(h>1||h>0&&m>0)throw new ee(B.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)i=o._apply(i);return i}class Ec extends Rf{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Ec(e,t,s)}_apply(e){const t=this._parse(e);return Xv(e._query,t),new Pi(e.firestore,e.converter,Sd(e._query,t))}_parse(e){const t=$v(e.firestore);return(function(u,h,m,y,_,w,A){let V;if(_.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new ee(B.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){Ey(A,w);const K=[];for(const Q of A)K.push(vy(y,u,Q));V={arrayValue:{values:K}}}else V=vy(y,u,A)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||Ey(A,w),V=f1(m,h,A,w==="in"||w==="not-in");return ft.create(_,w,V)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class wc extends Af{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new wc(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:Vn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,u){let h=o;const m=u.getFlattenedFilters();for(const y of m)Xv(h,y),h=Sd(h,y)})(e._query,t),new Pi(e.firestore,e.converter,Sd(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Tc extends Rf{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Tc(e,t)}_apply(e){const t=(function(o,u,h){if(o.startAt!==null)throw new ee(B.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ee(B.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new $a(u,h)})(e._query,this._field,this._direction);return new Pi(e.firestore,e.converter,HS(e._query,t))}}function Jv(i,e="asc"){const t=e,s=vc("orderBy",i);return Tc._create(s,t)}function vy(i,e,t){if(typeof(t=$t(t))=="string"){if(t==="")throw new ee(B.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!z_(e)&&t.indexOf("/")!==-1)throw new ee(B.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(He.fromString(t));if(!le.isDocumentKey(s))throw new ee(B.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Og(i,new le(s))}if(t instanceof lt)return Og(i,t._key);throw new ee(B.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${sc(t)}.`)}function Ey(i,e){if(!Array.isArray(i)||i.length===0)throw new ee(B.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Xv(i,e){const t=(function(o,u){for(const h of o)for(const m of h.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null})(i.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ee(B.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ee(B.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function v1(i,e,t){let s;return s=i?t&&(t.merge||t.mergeFields)?i.toFirestore(e,t):i.toFirestore(e):e,s}class lo{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ei extends Qv{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ba(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(vc("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(B.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ei._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ei._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ei._jsonSchema={type:pt("string",Ei._jsonSchemaVersion),bundleSource:pt("string","DocumentSnapshot"),bundleName:pt("string"),bundle:pt("string")};class ba extends Ei{data(e={}){return super.data(e)}}class os{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new lo(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new ba(this._firestore,this._userDataWriter,s.key,s,new lo(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ee(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const y=new ba(o._firestore,o._userDataWriter,m.doc.key,m.doc,new lo(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:y,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const y=new ba(o._firestore,o._userDataWriter,m.doc.key,m.doc,new lo(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,w=-1;return m.type!==0&&(_=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:E1(m.type),doc:y,oldIndex:_,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(B.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=os._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ic.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function E1(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return de(61501,{type:i})}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */os._jsonSchemaVersion="firestore/querySnapshot/1.0",os._jsonSchema={type:pt("string",os._jsonSchemaVersion),bundleSource:pt("string","QuerySnapshot"),bundleName:pt("string"),bundle:pt("string")};/**
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
 */function Zv(i){i=xr(i,lt);const e=xr(i.firestore,Do),t=_c(e);return r1(t,i._key).then((s=>w1(e,i,s)))}function eE(i){i=xr(i,Pi);const e=xr(i.firestore,Do),t=_c(e),s=new Kv(e);return _1(i._query),i1(t,i._query).then((o=>new os(e,s,i,o)))}function Cf(i,e,t){i=xr(i,lt);const s=xr(i.firestore,Do),o=v1(i.converter,e,t),u=$v(s);return Pf(s,[d1(u,"setDoc",i._key,o,i.converter!==null,t).toMutation(i._key,tr.none())])}function tE(i){return Pf(xr(i.firestore,Do),[new rf(i._key,tr.none())])}function Pf(i,e){const t=_c(i);return s1(t,e)}function w1(i,e,t){const s=t.docs.get(e._key),o=new Kv(i);return new Ei(i,o,e._key,s,new lo(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){aS(Ao),go(new ls("firestore",((s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new Do(new uS(s.getProvider("auth-internal")),new dS(h,s.getProvider("app-check-internal")),PS(h,o),h);return u={useFetchStreams:t,...u},m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),_i(yy,_y,e),_i(yy,_y,"esm2020")})();const T1=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:Gv,Bytes:an,CollectionReference:Cr,DocumentReference:lt,DocumentSnapshot:Ei,FieldPath:wf,FieldValue:Tf,Firestore:Do,FirestoreError:ee,GeoPoint:Dn,Query:Pi,QueryCompositeFilterConstraint:wc,QueryConstraint:Rf,QueryDocumentSnapshot:ba,QueryFieldFilterConstraint:Ec,QueryOrderByConstraint:Tc,QuerySnapshot:os,SnapshotMetadata:lo,Timestamp:We,VectorValue:yn,_AutoId:ic,_ByteString:St,_DatabaseId:vo,_DocumentKey:le,_EmptyAuthCredentialsProvider:w_,_FieldPath:It,_cast:xr,_logWarn:wi,_validateIsNotUsedTogether:I_,collection:jv,connectFirestoreEmulator:Uv,deleteDoc:tE,doc:Wa,ensureFirestoreConfigured:_c,executeWrite:Pf,getDoc:Zv,getDocs:eE,getFirestore:zv,orderBy:Jv,query:Yv,setDoc:Cf},Symbol.toStringTag,{value:"Module"}));var I1="firebase",S1="12.12.1";/**
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
 */_i(I1,S1,"app");const A1={apiKey:"AIzaSyBN-jgFWi10Onb0atB7ty24IhfRSMMxulU",authDomain:"lista-de-compras-pwa-64fac.firebaseapp.com",projectId:"lista-de-compras-pwa-64fac",storageBucket:"lista-de-compras-pwa-64fac.appspot.com",messagingSenderId:"922020197463",appId:"1:922020197463:web:41e9aa3c04bf76c7941f12"},nE=xy(A1),mo=sS(nE);WT(mo,r_);const kf=new Ir;kf.setCustomParameters({prompt:"select_account"});const So=zv(nE),R1=Object.freeze(Object.defineProperty({__proto__:null,auth:mo,db:So,googleProvider:kf},Symbol.toStringTag,{value:"Module"}));function rE(){const[i,e]=rt.useState(null),[t,s]=rt.useState(!0),o=async m=>{if(m)try{await Cf(Wa(So,"users",m.uid),{nome:m.displayName||"Usuário",email:m.email||"",foto:m.photoURL||"",ultimoLogin:new Date().toISOString()},{merge:!0})}catch(y){console.error("Erro ao salvar usuário:",y)}};return rt.useEffect(()=>{const m=QT(mo,async y=>{e(y||null),y&&await o(y),s(!1)});return()=>m()},[]),{usuario:i,loading:t,entrarComGoogle:async()=>{try{await pI(mo,kf)}catch(m){console.error("Erro login Google:",m)}},sair:async()=>{try{await e_(mo)}catch(m){console.error("Erro logout:",m)}}}}function C1(i){const[e,t]=rt.useState(null),[s,o]=rt.useState(!0),u=i==null?void 0:i.uid;return rt.useEffect(()=>{if(!u)return;(async()=>{o(!0);try{const m=Wa(So,"users",u,"lista","dados"),y=await Zv(m);if(y.exists()){const _=y.data();t({modo:String(_.modo||"planejamento").toLowerCase().trim(),estabelecimento:_.estabelecimento||"",itens:(_.itens||[]).map(w=>({...w,precoUnitario:Number(w.precoUnitario||0),quantidade:Number(w.quantidade||1)}))})}else t({modo:"planejamento",estabelecimento:"",itens:[]})}catch(m){console.error("Erro ao carregar lista:",m),t({modo:"planejamento",estabelecimento:"",itens:[]})}finally{o(!1)}})()},[u]),rt.useEffect(()=>{if(!u||!e||s)return;const h=setTimeout(async()=>{try{const m=Wa(So,"users",u,"lista","dados");await Cf(m,{...e,modo:String(e.modo||"planejamento").toLowerCase().trim()})}catch(m){console.error("Erro ao salvar lista:",m)}},300);return()=>clearTimeout(h)},[e,u,s]),{lista:e,setLista:t,loading:s}}function P1(i){const[e,t]=rt.useState([]),[s,o]=rt.useState(!0),u=i==null?void 0:i.uid;return rt.useEffect(()=>{if(!u){t([]),o(!1);return}(async()=>{try{o(!0);const y=jv(So,"users",u,"compras"),_=Yv(y,Jv("data","desc")),A=(await eE(_)).docs.map(V=>({id:V.id,...V.data()}));t(A)}catch(y){console.error("Erro histórico:",y)}finally{o(!1)}})()},[u]),{historico:e,carregando:s,deletarCompra:async m=>{try{await tE(Wa(So,"users",u,"compras",m)),t(y=>y.filter(_=>_.id!==m))}catch(y){console.error("Erro ao deletar compra:",y)}}}}/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),N1=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),wy=i=>{const e=N1(i);return e.charAt(0).toUpperCase()+e.slice(1)},iE=(...i)=>i.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim(),x1=i=>{for(const e in i)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var D1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=rt.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:u,iconNode:h,...m},y)=>rt.createElement("svg",{ref:y,...D1,width:e,height:e,stroke:i,strokeWidth:s?Number(t)*24/Number(e):t,className:iE("lucide",o),...!u&&!x1(m)&&{"aria-hidden":"true"},...m},[...h.map(([_,w])=>rt.createElement(_,w)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Or=(i,e)=>{const t=rt.forwardRef(({className:s,...o},u)=>rt.createElement(V1,{ref:u,iconNode:e,className:iE(`lucide-${k1(wy(i))}`,`lucide-${i}`,s),...o}));return t.displayName=wy(i),t};/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],L1=Or("circle-check-big",O1);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],b1=Or("clock",M1);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],U1=Or("dollar-sign",F1);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=[["rect",{x:"3",y:"5",width:"6",height:"6",rx:"1",key:"1defrl"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]],z1=Or("list-todo",j1);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],$1=Or("log-out",B1);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],H1=Or("package",q1);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],sE=Or("shopping-cart",W1);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],Ic=Or("trash-2",G1);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Q1=Or("user",K1);function Y1({estabelecimento:i,aoDefinirEstabelecimento:e,aoLimpar:t,usuario:s,aoLogout:o}){return F.jsx("header",{className:"bg-emerald-600 text-white shadow-lg",children:F.jsxs("div",{className:"mx-auto max-w-4xl px-4 py-4",children:[F.jsxs("div",{className:"mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",children:[F.jsxs("div",{className:"flex items-center gap-3",children:[F.jsx("div",{className:"rounded-lg bg-white p-2",children:F.jsx(sE,{className:"text-emerald-600",size:28})}),F.jsxs("div",{children:[F.jsx("h1",{className:"text-2xl font-bold",children:"Lista de Compras"}),F.jsx("p",{className:"text-sm text-emerald-100",children:"Organize suas compras"})]})]}),F.jsxs("div",{className:"flex items-center gap-3 sm:ml-auto",children:[F.jsx("div",{className:"flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-emerald-700",children:s!=null&&s.photoURL?F.jsx("img",{src:s.photoURL,alt:"Usuário",className:"h-full w-full object-cover",referrerPolicy:"no-referrer"}):F.jsx(Q1,{size:20})}),F.jsxs("div",{className:"hidden sm:block",children:[F.jsx("p",{className:"max-w-[160px] truncate text-sm font-medium",children:(s==null?void 0:s.displayName)||"Usuário"}),F.jsx("p",{className:"text-xs text-emerald-100",children:"Conectado"})]}),F.jsx("button",{onClick:o,className:"rounded-lg bg-emerald-700 p-2 hover:bg-emerald-800",title:"Sair",children:F.jsx($1,{size:20})}),F.jsx("button",{onClick:t,className:"rounded-lg bg-emerald-700 p-2 hover:bg-emerald-800",title:"Limpar lista",children:F.jsx(Ic,{size:20})})]})]}),F.jsx("input",{type:"text",value:i,onChange:u=>e(u.target.value),placeholder:"Nome do mercado...",className:"w-full rounded-lg bg-emerald-700 px-3 py-2 text-white placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-300"})]})})}function J1({modo:i,aoAlternar:e}){return F.jsx("div",{className:"bg-white rounded-xl shadow-md p-2 mb-4",children:F.jsxs("div",{className:"flex gap-2",children:[F.jsxs("button",{onClick:()=>e("planejamento"),className:`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${i==="planejamento"?"bg-emerald-500 text-white shadow-md":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:[F.jsx(z1,{size:20})," ",F.jsx("span",{children:"Planejamento"})," "]}),F.jsxs("button",{onClick:()=>e("feira"),className:`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${i==="feira"?"bg-emerald-500 text-white shadow-md":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:[F.jsx(sE,{size:20})," ",F.jsx("span",{children:"Na Feira"})," "]})]})})}function X1({aoAdicionar:i}){const[e,t]=rt.useState(""),[s,o]=rt.useState(1);function u(h){h.preventDefault(),e.trim()&&(i({nome:e,quantidade:s}),t(""),o(1))}return F.jsxs("form",{onSubmit:u,className:"flex gap-2 mb-4",children:[F.jsx("input",{value:e,onChange:h=>t(h.target.value),placeholder:"Produto",className:"flex-1 border p-2 rounded"}),F.jsx("input",{type:"number",value:s,onChange:h=>o(h.target.value),className:"w-20 border p-2 rounded"}),F.jsx("button",{className:"bg-green-500 text-white px-4 rounded",children:"+"})]})}function Z1({item:i,onAtualizar:e,onRemover:t,onToggleComprado:s}){const[o,u]=rt.useState(i.quantidade||1),[h,m]=rt.useState("");rt.useEffect(()=>{i.quantidade!==void 0&&u(i.quantidade),i.precoUnitario!==void 0&&i.precoUnitario!==null&&m(String(Math.round(i.precoUnitario*100)))},[i.quantidade,i.precoUnitario]);const y=Q=>(Number(Q||0)/100).toLocaleString("pt-BR",{minimumFractionDigits:2}),_=Q=>{const G=Q.target.value.replace(/\D/g,"");m(G)},w=()=>{const Q=Number(h||0);e(i.id,{precoUnitario:Q/100})},A=Q=>{const G=Number(Q.target.value);u(G),e(i.id,{quantidade:G||1})},V=Number(h||0)/100,K=(o*V).toLocaleString("pt-BR",{minimumFractionDigits:2});return F.jsx("div",{className:"rounded-lg border p-4 shadow-sm transition-all",children:F.jsxs("div",{className:"flex flex-wrap items-center gap-3 md:flex-nowrap",children:[F.jsx("input",{type:"checkbox",checked:i.comprado,onChange:()=>s(i.id),className:"h-5 w-5 accent-emerald-500"}),F.jsx("span",{className:"flex-1 font-medium",children:i.nome}),F.jsxs("div",{className:"flex items-center gap-2",children:[F.jsx("input",{type:"number",min:"1",value:o,onChange:A,className:"w-16 rounded border px-2 py-1 text-center"}),F.jsx("span",{children:"×"}),F.jsx("span",{children:"R$"}),F.jsx("input",{type:"text",inputMode:"numeric",value:h?y(h):"",onChange:_,onBlur:w,className:"w-24 rounded border px-2 py-1 text-right",placeholder:"0,00"})]}),F.jsxs("div",{className:"min-w-[110px] text-right",children:[F.jsx("span",{className:"block text-xs text-gray-500",children:"Total"}),F.jsxs("span",{className:"font-bold",children:["R$ ",K]})]}),F.jsx("button",{onClick:()=>t(i.id),className:"text-red-500",children:F.jsx(Ic,{size:18})})]})})}function eC({itens:i,modo:e,aoRemover:t,aoAtualizar:s,aoAlternarComprado:o}){return i.length?F.jsx("div",{className:"space-y-4",children:i.map(u=>F.jsx("div",{children:e==="feira"?F.jsx(Z1,{item:u,onAtualizar:s,onRemover:t,onToggleComprado:o}):F.jsx("div",{className:"rounded-lg border border-gray-200 bg-white p-4 shadow-sm",children:F.jsxs("div",{className:"flex items-center justify-between gap-3",children:[F.jsxs("div",{className:"flex flex-1 items-center gap-3",children:[F.jsxs("div",{className:"flex items-center gap-3",children:[F.jsx("input",{type:"checkbox",checked:u.comprado,onChange:()=>o(u.id),className:"h-5 w-5 accent-emerald-500"}),F.jsx("p",{className:`font-medium ${u.comprado?"text-gray-400 line-through":"text-gray-800"}`,children:u.nome})]}),F.jsxs("div",{className:"ml-6 flex items-center gap-2",children:[F.jsx("label",{className:"text-sm text-gray-500",children:"Quantidade:"}),F.jsx("input",{type:"number",min:"1",value:u.quantidade,onChange:h=>s(u.id,{quantidade:Number(h.target.value)||1}),className:"w-20 rounded border border-gray-300 px-2 py-1 text-center focus:border-emerald-500 focus:outline-none"})]})]}),F.jsx("button",{onClick:()=>t(u.id),className:"rounded-lg p-2 text-red-500 transition-colors hover:bg-red-50 hover:text-red-700",title:"Remover item",children:F.jsx(Ic,{size:18})})]})})},u.id))}):F.jsx("div",{className:"rounded-lg bg-white p-6 text-center shadow",children:F.jsx("p",{className:"text-gray-500",children:"Nenhum item adicionado ainda."})})}function tC(i){return Number(i||0).toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})}function nC({totais:i,modo:e}){const{total:t=0,quantidadeItens:s=0,itensComprados:o=0}=i||{},u=s>0?o/s*100:0;return F.jsxs("div",{className:"bg-white rounded-xl shadow-md p-4 mt-4",children:[F.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-5 gap-4",children:[F.jsxs("div",{className:"bg-emerald-50 rounded-lg p-3 col-span-2 md:col-span-1",children:[F.jsxs("div",{className:"flex items-center gap-2 text-emerald-600 mb-1",children:[F.jsx(U1,{size:18}),F.jsx("span",{className:"text-sm font-medium",children:"Total"})]}),F.jsx("p",{className:"text-2xl font-bold text-emerald-700",children:tC(t)}),F.jsx("p",{className:"text-xs text-emerald-500 mt-1",children:"Valor total da compra"})]}),F.jsxs("div",{className:"bg-blue-50 rounded-lg p-3",children:[F.jsxs("div",{className:"flex items-center gap-2 text-blue-600 mb-1",children:[F.jsx(H1,{size:18}),F.jsx("span",{className:"text-sm font-medium",children:"Itens"})]}),F.jsx("p",{className:"text-2xl font-bold text-blue-700",children:s})]}),F.jsxs("div",{className:"bg-green-50 rounded-lg p-3",children:[F.jsxs("div",{className:"flex items-center gap-2 text-green-600 mb-1",children:[F.jsx(L1,{size:18}),F.jsx("span",{className:"text-sm font-medium",children:"Comprados"})]}),F.jsx("p",{className:"text-2xl font-bold text-green-700",children:o})]}),F.jsxs("div",{className:"bg-orange-50 rounded-lg p-3",children:[F.jsxs("div",{className:"flex items-center gap-2 text-orange-600 mb-1",children:[F.jsx(b1,{size:18}),F.jsx("span",{className:"text-sm font-medium",children:"Restantes"})]}),F.jsx("p",{className:"text-2xl font-bold text-orange-700",children:s-o})]})]}),s>0&&F.jsxs("div",{className:"mt-4",children:[F.jsxs("div",{className:"flex justify-between text-sm text-gray-600 mb-2",children:[F.jsx("span",{children:"Progresso"}),F.jsxs("span",{children:[Math.round(u),"%"]})]}),F.jsx("div",{className:"w-full bg-gray-200 rounded-full h-3",children:F.jsx("div",{className:"bg-emerald-500 h-3 rounded-full transition-all duration-500",style:{width:`${u}%`}})}),F.jsxs("p",{className:"text-xs text-gray-500 mt-2 text-center",children:[o," de ",s," itens"]})]})]})}function rC(){const{usuario:i,entrarComGoogle:e,sair:t}=rE();return i?F.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-500 to-green-700 p-4",children:F.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm text-center",children:[F.jsx("img",{src:i.photoURL,alt:"Usuário",className:"w-20 h-20 rounded-full mx-auto border-4 border-emerald-500"}),F.jsx("h2",{className:"mt-4 text-lg font-bold text-gray-800",children:i.displayName}),F.jsx("p",{className:"text-sm text-gray-500",children:"Bem-vindo de volta 👋"}),F.jsx("button",{onClick:t,className:"mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl transition",children:"Sair"})]})}):F.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-500 to-green-700 p-4",children:F.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm text-center",children:[F.jsx("div",{className:"text-5xl mb-4",children:"🛒"}),F.jsx("h1",{className:"text-2xl font-bold text-gray-800",children:"Lista de Compras"}),F.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Organize suas compras com facilidade"}),F.jsxs("button",{onClick:e,className:"mt-6 w-full flex items-center justify-center gap-2 bg-white border hover:bg-gray-50 text-gray-700 font-medium py-2 rounded-xl shadow transition",children:[F.jsx("img",{src:"https://www.svgrepo.com/show/475656/google-color.svg",className:"w-5 h-5",alt:"Google"}),"Entrar com Google"]})]})})}function iC({historico:i,carregando:e,deletarCompra:t}){const[s,o]=rt.useState(null);return e?F.jsx("div",{className:"mt-6 text-center text-gray-600",children:"Carregando histórico..."}):i!=null&&i.length?F.jsx("div",{className:"mt-6 space-y-4",children:i.map(u=>{var m;const h=Number(u.total||0);return F.jsxs("div",{className:"rounded-xl bg-white p-4 shadow",children:[F.jsxs("div",{className:"flex items-start justify-between",children:[F.jsxs("div",{className:"flex-1 cursor-pointer",onClick:()=>o(s===u.id?null:u.id),children:[F.jsx("h3",{className:"font-bold",children:u.estabelecimento}),F.jsx("p",{className:"text-sm text-gray-500",children:new Date(u.data).toLocaleDateString("pt-BR")}),F.jsxs("p",{className:"font-bold text-green-600",children:["R$ ",h.toFixed(2)]}),F.jsx("p",{className:"mt-1 text-xs text-gray-400",children:"Clique para ver os detalhes"})]}),F.jsx("button",{onClick:()=>t(u.id),className:"text-red-500 hover:text-red-700",children:F.jsx(Ic,{size:18})})]}),s===u.id&&F.jsxs("div",{className:"mt-3 space-y-2 border-t pt-3",children:[F.jsxs("div",{className:"flex justify-between text-xs text-gray-500",children:[F.jsx("span",{children:"Item"}),F.jsx("span",{children:"Total"})]}),(m=u.itens)==null?void 0:m.map(y=>{const _=Number(y.quantidade||0)*Number(y.precoUnitario||0);return F.jsxs("div",{className:"flex justify-between text-sm",children:[F.jsxs("span",{children:[y.quantidade,"x ",y.nome]}),F.jsxs("span",{children:["R$ ",_.toFixed(2)]})]},y.id)}),F.jsxs("div",{className:"flex justify-between border-t pt-2 font-bold",children:[F.jsx("span",{children:"Total"}),F.jsxs("span",{children:["R$ ",h.toFixed(2)]})]})]})]},u.id)})}):F.jsx("div",{className:"mt-6 text-center text-gray-500",children:"Nenhuma compra encontrada"})}function sC(i){return i?i.trim().toLowerCase().replace(/(^|\s)\S/g,e=>e.toUpperCase()):""}function oC(){const{usuario:i,loading:e}=rE(),t=C1(i),s=t==null?void 0:t.lista,o=t==null?void 0:t.setLista,{historico:u,carregando:h,deletarCompra:m}=P1(i),[y,_]=rt.useState("compras");if(e)return F.jsx("div",{className:"flex min-h-screen items-center justify-center",children:F.jsx("p",{children:"Carregando..."})});if(!i)return F.jsx(rC,{});if(!s||!o)return F.jsx("div",{className:"flex min-h-screen items-center justify-center",children:F.jsx("p",{children:"Carregando lista..."})});const w=s.itens||[],A=async()=>{await e_(mo)},V=async()=>{if(!w.length)return;const z=w.reduce((Te,Ne)=>Te+(Ne.quantidade||0)*(Ne.precoUnitario||0),0),K=Date.now().toString(),Q={id:K,estabelecimento:s.estabelecimento,itens:w,total:z,data:new Date().toISOString()},{doc:G,setDoc:_e}=await Km(async()=>{const{doc:Te,setDoc:Ne}=await Promise.resolve().then(()=>T1);return{doc:Te,setDoc:Ne}},void 0),{db:ve}=await Km(async()=>{const{db:Te}=await Promise.resolve().then(()=>R1);return{db:Te}},void 0);await _e(G(ve,"users",i.uid,"compras",K),Q),await _e(G(ve,"users",i.uid,"lista","dados"),{modo:"planejamento",estabelecimento:"",itens:[]}),o({modo:"planejamento",estabelecimento:"",itens:[]}),_("historico")};return F.jsxs("div",{className:"min-h-screen bg-gray-50",children:[F.jsx(Y1,{usuario:i,estabelecimento:s.estabelecimento||"",aoDefinirEstabelecimento:z=>o(K=>({...K,estabelecimento:z})),aoLimpar:()=>o(z=>({...z,itens:[]})),aoLogout:A}),F.jsxs("main",{className:"mx-auto max-w-4xl space-y-6 px-4 py-6",children:[F.jsxs("div",{className:"flex gap-2",children:[F.jsx("button",{onClick:()=>_("compras"),className:`flex-1 p-3 rounded-lg font-semibold ${y==="compras"?"bg-emerald-600 text-white":"bg-white text-gray-700"}`,children:"Compras"}),F.jsx("button",{onClick:()=>_("historico"),className:`flex-1 p-3 rounded-lg font-semibold ${y==="historico"?"bg-emerald-600 text-white":"bg-white text-gray-700"}`,children:"Histórico"})]}),y==="compras"&&F.jsxs(F.Fragment,{children:[F.jsx(J1,{modo:s.modo,aoAlternar:z=>o(K=>({...K,modo:z}))}),F.jsx(X1,{aoAdicionar:z=>o(K=>({...K,itens:[...K.itens,{id:Date.now().toString(),nome:sC(z.nome),quantidade:z.quantidade,precoUnitario:0,comprado:!1}]}))}),F.jsx(eC,{itens:w,modo:s.modo,aoAtualizar:(z,K)=>o(Q=>({...Q,itens:Q.itens.map(G=>G.id===z?{...G,...K}:G)})),aoRemover:z=>o(K=>({...K,itens:K.itens.filter(Q=>Q.id!==z)})),aoAlternarComprado:z=>o(K=>({...K,itens:K.itens.map(Q=>Q.id===z?{...Q,comprado:!Q.comprado}:Q)}))}),F.jsx(nC,{totais:{total:w.reduce((z,K)=>z+(K.quantidade||0)*(K.precoUnitario||0),0),quantidadeItens:w.length,itensComprados:w.filter(z=>z.comprado).length}}),w.length>0&&F.jsx("button",{onClick:V,className:"w-full bg-emerald-600 text-white p-4 rounded-lg",children:"Finalizar Compra"})]}),y==="historico"&&F.jsx(iC,{historico:u,carregando:h,deletarCompra:m})]})]})}const oE=document.getElementById("root");if(!oE)throw new Error("Elemento #root não encontrado no index.html");const aC=Iw.createRoot(oE);aC.render(F.jsx(oC,{}));
//# sourceMappingURL=index-idwuyFBB.js.map
