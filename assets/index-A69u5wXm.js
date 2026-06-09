(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function cE(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Yh={exports:{}},Sa={},Zh={exports:{}},Ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bm;function hE(){if(Bm)return Ie;Bm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),I=Symbol.iterator;function L(D){return D===null||typeof D!="object"?null:(D=I&&D[I]||D["@@iterator"],typeof D=="function"?D:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J=Object.assign,X={};function G(D,H,Ee){this.props=D,this.context=H,this.refs=X,this.updater=Ee||z}G.prototype.isReactComponent={},G.prototype.setState=function(D,H){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,H,"setState")},G.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function re(){}re.prototype=G.prototype;function te(D,H,Ee){this.props=D,this.context=H,this.refs=X,this.updater=Ee||z}var pe=te.prototype=new re;pe.constructor=te,J(pe,G.prototype),pe.isPureReactComponent=!0;var Ne=Array.isArray,Me=Object.prototype.hasOwnProperty,ke={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function S(D,H,Ee){var Te,Re={},Ce=null,Fe=null;if(H!=null)for(Te in H.ref!==void 0&&(Fe=H.ref),H.key!==void 0&&(Ce=""+H.key),H)Me.call(H,Te)&&!C.hasOwnProperty(Te)&&(Re[Te]=H[Te]);var Ve=arguments.length-2;if(Ve===1)Re.children=Ee;else if(1<Ve){for(var ze=Array(Ve),jt=0;jt<Ve;jt++)ze[jt]=arguments[jt+2];Re.children=ze}if(D&&D.defaultProps)for(Te in Ve=D.defaultProps,Ve)Re[Te]===void 0&&(Re[Te]=Ve[Te]);return{$$typeof:r,type:D,key:Ce,ref:Fe,props:Re,_owner:ke.current}}function k(D,H){return{$$typeof:r,type:D.type,key:H,ref:D.ref,props:D.props,_owner:D._owner}}function x(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function P(D){var H={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(Ee){return H[Ee]})}var V=/\/+/g;function A(D,H){return typeof D=="object"&&D!==null&&D.key!=null?P(""+D.key):H.toString(36)}function $e(D,H,Ee,Te,Re){var Ce=typeof D;(Ce==="undefined"||Ce==="boolean")&&(D=null);var Fe=!1;if(D===null)Fe=!0;else switch(Ce){case"string":case"number":Fe=!0;break;case"object":switch(D.$$typeof){case r:case e:Fe=!0}}if(Fe)return Fe=D,Re=Re(Fe),D=Te===""?"."+A(Fe,0):Te,Ne(Re)?(Ee="",D!=null&&(Ee=D.replace(V,"$&/")+"/"),$e(Re,H,Ee,"",function(jt){return jt})):Re!=null&&(x(Re)&&(Re=k(Re,Ee+(!Re.key||Fe&&Fe.key===Re.key?"":(""+Re.key).replace(V,"$&/")+"/")+D)),H.push(Re)),1;if(Fe=0,Te=Te===""?".":Te+":",Ne(D))for(var Ve=0;Ve<D.length;Ve++){Ce=D[Ve];var ze=Te+A(Ce,Ve);Fe+=$e(Ce,H,Ee,ze,Re)}else if(ze=L(D),typeof ze=="function")for(D=ze.call(D),Ve=0;!(Ce=D.next()).done;)Ce=Ce.value,ze=Te+A(Ce,Ve++),Fe+=$e(Ce,H,Ee,ze,Re);else if(Ce==="object")throw H=String(D),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return Fe}function _t(D,H,Ee){if(D==null)return D;var Te=[],Re=0;return $e(D,Te,"","",function(Ce){return H.call(Ee,Ce,Re++)}),Te}function Nt(D){if(D._status===-1){var H=D._result;H=H(),H.then(function(Ee){(D._status===0||D._status===-1)&&(D._status=1,D._result=Ee)},function(Ee){(D._status===0||D._status===-1)&&(D._status=2,D._result=Ee)}),D._status===-1&&(D._status=0,D._result=H)}if(D._status===1)return D._result.default;throw D._result}var Je={current:null},Z={transition:null},ce={ReactCurrentDispatcher:Je,ReactCurrentBatchConfig:Z,ReactCurrentOwner:ke};function ie(){throw Error("act(...) is not supported in production builds of React.")}return Ie.Children={map:_t,forEach:function(D,H,Ee){_t(D,function(){H.apply(this,arguments)},Ee)},count:function(D){var H=0;return _t(D,function(){H++}),H},toArray:function(D){return _t(D,function(H){return H})||[]},only:function(D){if(!x(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Ie.Component=G,Ie.Fragment=t,Ie.Profiler=o,Ie.PureComponent=te,Ie.StrictMode=s,Ie.Suspense=g,Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,Ie.act=ie,Ie.cloneElement=function(D,H,Ee){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var Te=J({},D.props),Re=D.key,Ce=D.ref,Fe=D._owner;if(H!=null){if(H.ref!==void 0&&(Ce=H.ref,Fe=ke.current),H.key!==void 0&&(Re=""+H.key),D.type&&D.type.defaultProps)var Ve=D.type.defaultProps;for(ze in H)Me.call(H,ze)&&!C.hasOwnProperty(ze)&&(Te[ze]=H[ze]===void 0&&Ve!==void 0?Ve[ze]:H[ze])}var ze=arguments.length-2;if(ze===1)Te.children=Ee;else if(1<ze){Ve=Array(ze);for(var jt=0;jt<ze;jt++)Ve[jt]=arguments[jt+2];Te.children=Ve}return{$$typeof:r,type:D.type,key:Re,ref:Ce,props:Te,_owner:Fe}},Ie.createContext=function(D){return D={$$typeof:h,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:u,_context:D},D.Consumer=D},Ie.createElement=S,Ie.createFactory=function(D){var H=S.bind(null,D);return H.type=D,H},Ie.createRef=function(){return{current:null}},Ie.forwardRef=function(D){return{$$typeof:m,render:D}},Ie.isValidElement=x,Ie.lazy=function(D){return{$$typeof:E,_payload:{_status:-1,_result:D},_init:Nt}},Ie.memo=function(D,H){return{$$typeof:_,type:D,compare:H===void 0?null:H}},Ie.startTransition=function(D){var H=Z.transition;Z.transition={};try{D()}finally{Z.transition=H}},Ie.unstable_act=ie,Ie.useCallback=function(D,H){return Je.current.useCallback(D,H)},Ie.useContext=function(D){return Je.current.useContext(D)},Ie.useDebugValue=function(){},Ie.useDeferredValue=function(D){return Je.current.useDeferredValue(D)},Ie.useEffect=function(D,H){return Je.current.useEffect(D,H)},Ie.useId=function(){return Je.current.useId()},Ie.useImperativeHandle=function(D,H,Ee){return Je.current.useImperativeHandle(D,H,Ee)},Ie.useInsertionEffect=function(D,H){return Je.current.useInsertionEffect(D,H)},Ie.useLayoutEffect=function(D,H){return Je.current.useLayoutEffect(D,H)},Ie.useMemo=function(D,H){return Je.current.useMemo(D,H)},Ie.useReducer=function(D,H,Ee){return Je.current.useReducer(D,H,Ee)},Ie.useRef=function(D){return Je.current.useRef(D)},Ie.useState=function(D){return Je.current.useState(D)},Ie.useSyncExternalStore=function(D,H,Ee){return Je.current.useSyncExternalStore(D,H,Ee)},Ie.useTransition=function(){return Je.current.useTransition()},Ie.version="18.3.1",Ie}var $m;function Bd(){return $m||($m=1,Zh.exports=hE()),Zh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hm;function dE(){if(Hm)return Sa;Hm=1;var r=Bd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,g,_){var E,I={},L=null,z=null;_!==void 0&&(L=""+_),g.key!==void 0&&(L=""+g.key),g.ref!==void 0&&(z=g.ref);for(E in g)s.call(g,E)&&!u.hasOwnProperty(E)&&(I[E]=g[E]);if(m&&m.defaultProps)for(E in g=m.defaultProps,g)I[E]===void 0&&(I[E]=g[E]);return{$$typeof:e,type:m,key:L,ref:z,props:I,_owner:o.current}}return Sa.Fragment=t,Sa.jsx=h,Sa.jsxs=h,Sa}var qm;function fE(){return qm||(qm=1,Yh.exports=dE()),Yh.exports}var j=fE(),Eu={},ed={exports:{}},Gt={},td={exports:{}},nd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm;function pE(){return Wm||(Wm=1,(function(r){function e(Z,ce){var ie=Z.length;Z.push(ce);e:for(;0<ie;){var D=ie-1>>>1,H=Z[D];if(0<o(H,ce))Z[D]=ce,Z[ie]=H,ie=D;else break e}}function t(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var ce=Z[0],ie=Z.pop();if(ie!==ce){Z[0]=ie;e:for(var D=0,H=Z.length,Ee=H>>>1;D<Ee;){var Te=2*(D+1)-1,Re=Z[Te],Ce=Te+1,Fe=Z[Ce];if(0>o(Re,ie))Ce<H&&0>o(Fe,Re)?(Z[D]=Fe,Z[Ce]=ie,D=Ce):(Z[D]=Re,Z[Te]=ie,D=Te);else if(Ce<H&&0>o(Fe,ie))Z[D]=Fe,Z[Ce]=ie,D=Ce;else break e}}return ce}function o(Z,ce){var ie=Z.sortIndex-ce.sortIndex;return ie!==0?ie:Z.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();r.unstable_now=function(){return h.now()-m}}var g=[],_=[],E=1,I=null,L=3,z=!1,J=!1,X=!1,G=typeof setTimeout=="function"?setTimeout:null,re=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function pe(Z){for(var ce=t(_);ce!==null;){if(ce.callback===null)s(_);else if(ce.startTime<=Z)s(_),ce.sortIndex=ce.expirationTime,e(g,ce);else break;ce=t(_)}}function Ne(Z){if(X=!1,pe(Z),!J)if(t(g)!==null)J=!0,Nt(Me);else{var ce=t(_);ce!==null&&Je(Ne,ce.startTime-Z)}}function Me(Z,ce){J=!1,X&&(X=!1,re(S),S=-1),z=!0;var ie=L;try{for(pe(ce),I=t(g);I!==null&&(!(I.expirationTime>ce)||Z&&!P());){var D=I.callback;if(typeof D=="function"){I.callback=null,L=I.priorityLevel;var H=D(I.expirationTime<=ce);ce=r.unstable_now(),typeof H=="function"?I.callback=H:I===t(g)&&s(g),pe(ce)}else s(g);I=t(g)}if(I!==null)var Ee=!0;else{var Te=t(_);Te!==null&&Je(Ne,Te.startTime-ce),Ee=!1}return Ee}finally{I=null,L=ie,z=!1}}var ke=!1,C=null,S=-1,k=5,x=-1;function P(){return!(r.unstable_now()-x<k)}function V(){if(C!==null){var Z=r.unstable_now();x=Z;var ce=!0;try{ce=C(!0,Z)}finally{ce?A():(ke=!1,C=null)}}else ke=!1}var A;if(typeof te=="function")A=function(){te(V)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,_t=$e.port2;$e.port1.onmessage=V,A=function(){_t.postMessage(null)}}else A=function(){G(V,0)};function Nt(Z){C=Z,ke||(ke=!0,A())}function Je(Z,ce){S=G(function(){Z(r.unstable_now())},ce)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Z){Z.callback=null},r.unstable_continueExecution=function(){J||z||(J=!0,Nt(Me))},r.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<Z?Math.floor(1e3/Z):5},r.unstable_getCurrentPriorityLevel=function(){return L},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(Z){switch(L){case 1:case 2:case 3:var ce=3;break;default:ce=L}var ie=L;L=ce;try{return Z()}finally{L=ie}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(Z,ce){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var ie=L;L=Z;try{return ce()}finally{L=ie}},r.unstable_scheduleCallback=function(Z,ce,ie){var D=r.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?D+ie:D):ie=D,Z){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=ie+H,Z={id:E++,callback:ce,priorityLevel:Z,startTime:ie,expirationTime:H,sortIndex:-1},ie>D?(Z.sortIndex=ie,e(_,Z),t(g)===null&&Z===t(_)&&(X?(re(S),S=-1):X=!0,Je(Ne,ie-D))):(Z.sortIndex=H,e(g,Z),J||z||(J=!0,Nt(Me))),Z},r.unstable_shouldYield=P,r.unstable_wrapCallback=function(Z){var ce=L;return function(){var ie=L;L=ce;try{return Z.apply(this,arguments)}finally{L=ie}}}})(nd)),nd}var Km;function mE(){return Km||(Km=1,td.exports=pE()),td.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gm;function gE(){if(Gm)return Gt;Gm=1;var r=Bd(),e=mE();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},I={};function L(n){return g.call(I,n)?!0:g.call(E,n)?!1:_.test(n)?I[n]=!0:(E[n]=!0,!1)}function z(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function J(n,i,a,c){if(i===null||typeof i>"u"||z(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function X(n,i,a,c,d,f,v){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=f,this.removeEmptyString=v}var G={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){G[n]=new X(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];G[i]=new X(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){G[n]=new X(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){G[n]=new X(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){G[n]=new X(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){G[n]=new X(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){G[n]=new X(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){G[n]=new X(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){G[n]=new X(n,5,!1,n.toLowerCase(),null,!1,!1)});var re=/[\-:]([a-z])/g;function te(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(re,te);G[i]=new X(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(re,te);G[i]=new X(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(re,te);G[i]=new X(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){G[n]=new X(n,1,!1,n.toLowerCase(),null,!1,!1)}),G.xlinkHref=new X("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){G[n]=new X(n,1,!1,n.toLowerCase(),null,!0,!0)});function pe(n,i,a,c){var d=G.hasOwnProperty(i)?G[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(J(i,a,d,c)&&(a=null),c||d===null?L(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var Ne=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Me=Symbol.for("react.element"),ke=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),P=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),$e=Symbol.for("react.suspense_list"),_t=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),Je=Symbol.for("react.offscreen"),Z=Symbol.iterator;function ce(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var ie=Object.assign,D;function H(n){if(D===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);D=i&&i[1]||""}return`
`+D+n}var Ee=!1;function Te(n,i){if(!n||Ee)return"";Ee=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(F){var c=F}Reflect.construct(n,[],i)}else{try{i.call()}catch(F){c=F}n.call(i.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),f=c.stack.split(`
`),v=d.length-1,T=f.length-1;1<=v&&0<=T&&d[v]!==f[T];)T--;for(;1<=v&&0<=T;v--,T--)if(d[v]!==f[T]){if(v!==1||T!==1)do if(v--,T--,0>T||d[v]!==f[T]){var R=`
`+d[v].replace(" at new "," at ");return n.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",n.displayName)),R}while(1<=v&&0<=T);break}}}finally{Ee=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?H(n):""}function Re(n){switch(n.tag){case 5:return H(n.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return n=Te(n.type,!1),n;case 11:return n=Te(n.type.render,!1),n;case 1:return n=Te(n.type,!0),n;default:return""}}function Ce(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case C:return"Fragment";case ke:return"Portal";case k:return"Profiler";case S:return"StrictMode";case A:return"Suspense";case $e:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case P:return(n.displayName||"Context")+".Consumer";case x:return(n._context.displayName||"Context")+".Provider";case V:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case _t:return i=n.displayName||null,i!==null?i:Ce(n.type)||"Memo";case Nt:i=n._payload,n=n._init;try{return Ce(n(i))}catch{}}return null}function Fe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ce(i);case 8:return i===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ve(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ze(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function jt(n){var i=ze(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,f=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,f.call(this,v)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function _s(n){n._valueTracker||(n._valueTracker=jt(n))}function No(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=ze(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Fr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function vs(n,i){var a=i.checked;return ie({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function ol(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Ve(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ws(n,i){i=i.checked,i!=null&&pe(n,"checked",i,!1)}function xi(n,i){ws(n,i);var a=Ve(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?lt(n,i.type,a):i.hasOwnProperty("defaultValue")&&lt(n,i.type,Ve(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function xo(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function lt(n,i,a){(i!=="number"||Fr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var it=Array.isArray;function yn(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Ve(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Do(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ie({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Vo(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(it(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Ve(a)}}function al(n,i){var a=Ve(i.value),c=Ve(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Ur(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Oo(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Es(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Oo(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var jr,ll=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(jr=jr||document.createElement("div"),jr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=jr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Di(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var zr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ul=["Webkit","ms","Moz","O"];Object.keys(zr).forEach(function(n){ul.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),zr[i]=zr[n]})});function Br(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||zr.hasOwnProperty(n)&&zr[n]?(""+i).trim():i+"px"}function Ts(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Br(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Lo=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _n(n,i){if(i){if(Lo[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Is(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $r=null;function Ss(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ar=null,lr=null,nt=null;function Mo(n){if(n=ua(n)){if(typeof ar!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ml(i),ar(n.stateNode,n.type,i))}}function Hr(n){lr?nt?nt.push(n):nt=[n]:lr=n}function qr(){if(lr){var n=lr,i=nt;if(nt=lr=null,Mo(n),i)for(n=0;n<i.length;n++)Mo(i[n])}}function cl(n,i){return n(i)}function hl(){}var Vn=!1;function dl(n,i,a){if(Vn)return n(i,a);Vn=!0;try{return cl(n,i,a)}finally{Vn=!1,(lr!==null||nt!==null)&&(hl(),qr())}}function Vi(n,i){var a=n.stateNode;if(a===null)return null;var c=Ml(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Wr=!1;if(m)try{var Kr={};Object.defineProperty(Kr,"passive",{get:function(){Wr=!0}}),window.addEventListener("test",Kr,Kr),window.removeEventListener("test",Kr,Kr)}catch{Wr=!1}function fl(n,i,a,c,d,f,v,T,R){var F=Array.prototype.slice.call(arguments,3);try{i.apply(a,F)}catch(W){this.onError(W)}}var ur=!1,On=null,As=!1,an=null,pl={onError:function(n){ur=!0,On=n}};function ml(n,i,a,c,d,f,v,T,R){ur=!1,On=null,fl.apply(pl,arguments)}function bo(n,i,a,c,d,f,v,T,R){if(ml.apply(this,arguments),ur){if(ur){var F=On;ur=!1,On=null}else throw Error(t(198));As||(As=!0,an=F)}}function vn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Fo(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function gl(n){if(vn(n)!==n)throw Error(t(188))}function yl(n){var i=n.alternate;if(!i){if(i=vn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var f=d.alternate;if(f===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===a)return gl(d),n;if(f===c)return gl(d),i;f=f.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=f;else{for(var v=!1,T=d.child;T;){if(T===a){v=!0,a=d,c=f;break}if(T===c){v=!0,c=d,a=f;break}T=T.sibling}if(!v){for(T=f.child;T;){if(T===a){v=!0,a=f,c=d;break}if(T===c){v=!0,c=f,a=d;break}T=T.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function _l(n){return n=yl(n),n!==null?Oi(n):null}function Oi(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Oi(n);if(i!==null)return i;n=n.sibling}return null}var Uo=e.unstable_scheduleCallback,ks=e.unstable_cancelCallback,Li=e.unstable_shouldYield,cr=e.unstable_requestPaint,We=e.unstable_now,Pc=e.unstable_getCurrentPriorityLevel,Rs=e.unstable_ImmediatePriority,jo=e.unstable_UserBlockingPriority,Mi=e.unstable_NormalPriority,zo=e.unstable_LowPriority,Cs=e.unstable_IdlePriority,bi=null,Jt=null;function vl(n){if(Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(bi,n,void 0,(n.current.flags&128)===128)}catch{}}var Yt=Math.clz32?Math.clz32:Fi,Ln=Math.log,ln=Math.LN2;function Fi(n){return n>>>=0,n===0?32:31-(Ln(n)/ln|0)|0}var Mn=64,Gr=4194304;function be(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function hr(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,f=n.pingedLanes,v=a&268435455;if(v!==0){var T=v&~d;T!==0?c=be(T):(f&=v,f!==0&&(c=be(f)))}else v=a&~d,v!==0?c=be(v):f!==0&&(c=be(f));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,f=i&-i,d>=f||d===16&&(f&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Yt(i),d=1<<a,c|=n[a],i&=~d;return c}function Ui(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ji(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,f=n.pendingLanes;0<f;){var v=31-Yt(f),T=1<<v,R=d[v];R===-1?((T&a)===0||(T&c)!==0)&&(d[v]=Ui(T,i)):R<=i&&(n.expiredLanes|=T),f&=~T}}function Bo(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function $o(){var n=Mn;return Mn<<=1,(Mn&4194240)===0&&(Mn=64),n}function Ho(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function zi(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Yt(i),n[i]=a}function Nc(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Yt(a),f=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~f}}function qo(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Yt(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var xe=0;function bn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Wo,Ps,Ko,Go,Qo,Fn=!1,Ns=[],Un=null,jn=null,It=null,Bi=new Map,dr=new Map,Zt=[],wl="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qr(n,i){switch(n){case"focusin":case"focusout":Un=null;break;case"dragenter":case"dragleave":jn=null;break;case"mouseover":case"mouseout":It=null;break;case"pointerover":case"pointerout":Bi.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":dr.delete(i.pointerId)}}function wn(n,i,a,c,d,f){return n===null||n.nativeEvent!==f?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:f,targetContainers:[d]},i!==null&&(i=ua(i),i!==null&&Ps(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function El(n,i,a,c,d){switch(i){case"focusin":return Un=wn(Un,n,i,a,c,d),!0;case"dragenter":return jn=wn(jn,n,i,a,c,d),!0;case"mouseover":return It=wn(It,n,i,a,c,d),!0;case"pointerover":var f=d.pointerId;return Bi.set(f,wn(Bi.get(f)||null,n,i,a,c,d)),!0;case"gotpointercapture":return f=d.pointerId,dr.set(f,wn(dr.get(f)||null,n,i,a,c,d)),!0}return!1}function xs(n){var i=Wi(n.target);if(i!==null){var a=vn(i);if(a!==null){if(i=a.tag,i===13){if(i=Fo(a),i!==null){n.blockedOn=i,Qo(n.priority,function(){Ko(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Be(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Ds(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);$r=c,a.target.dispatchEvent(c),$r=null}else return i=ua(a),i!==null&&Ps(i),n.blockedOn=a,!1;i.shift()}return!0}function Tl(n,i,a){Be(n)&&a.delete(i)}function xc(){Fn=!1,Un!==null&&Be(Un)&&(Un=null),jn!==null&&Be(jn)&&(jn=null),It!==null&&Be(It)&&(It=null),Bi.forEach(Tl),dr.forEach(Tl)}function Xr(n,i){n.blockedOn===i&&(n.blockedOn=null,Fn||(Fn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,xc)))}function Jr(n){function i(d){return Xr(d,n)}if(0<Ns.length){Xr(Ns[0],n);for(var a=1;a<Ns.length;a++){var c=Ns[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Un!==null&&Xr(Un,n),jn!==null&&Xr(jn,n),It!==null&&Xr(It,n),Bi.forEach(i),dr.forEach(i),a=0;a<Zt.length;a++)c=Zt[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Zt.length&&(a=Zt[0],a.blockedOn===null);)xs(a),a.blockedOn===null&&Zt.shift()}var fr=Ne.ReactCurrentBatchConfig,pr=!0;function zn(n,i,a,c){var d=xe,f=fr.transition;fr.transition=null;try{xe=1,Xo(n,i,a,c)}finally{xe=d,fr.transition=f}}function Il(n,i,a,c){var d=xe,f=fr.transition;fr.transition=null;try{xe=4,Xo(n,i,a,c)}finally{xe=d,fr.transition=f}}function Xo(n,i,a,c){if(pr){var d=Ds(n,i,a,c);if(d===null)Bc(n,i,c,Bn,a),Qr(n,c);else if(El(d,n,i,a,c))c.stopPropagation();else if(Qr(n,c),i&4&&-1<wl.indexOf(n)){for(;d!==null;){var f=ua(d);if(f!==null&&Wo(f),f=Ds(n,i,a,c),f===null&&Bc(n,i,c,Bn,a),f===d)break;d=f}d!==null&&c.stopPropagation()}else Bc(n,i,c,null,a)}}var Bn=null;function Ds(n,i,a,c){if(Bn=null,n=Ss(c),n=Wi(n),n!==null)if(i=vn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Fo(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Bn=n,null}function Vs(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Pc()){case Rs:return 1;case jo:return 4;case Mi:case zo:return 16;case Cs:return 536870912;default:return 16}default:return 16}}var en=null,Os=null,mr=null;function Sl(){if(mr)return mr;var n,i=Os,a=i.length,c,d="value"in en?en.value:en.textContent,f=d.length;for(n=0;n<a&&i[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&i[a-c]===d[f-c];c++);return mr=d.slice(n,1<c?1-c:void 0)}function $i(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function $n(){return!0}function Jo(){return!1}function xt(n){function i(a,c,d,f,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?$n:Jo,this.isPropagationStopped=Jo,this}return ie(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=$n)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=$n)},persist:function(){},isPersistent:$n}),i}var Hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hi=xt(Hn),Yr=ie({},Hn,{view:0,detail:0}),Ls=xt(Yr),Ms,bs,tn,qi=ie({},Yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ve,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==tn&&(tn&&n.type==="mousemove"?(Ms=n.screenX-tn.screenX,bs=n.screenY-tn.screenY):bs=Ms=0,tn=n),Ms)},movementY:function(n){return"movementY"in n?n.movementY:bs}}),Yo=xt(qi),Al=ie({},qi,{dataTransfer:0}),kl=xt(Al),Fs=ie({},Yr,{relatedTarget:0}),St=xt(Fs),Rl=ie({},Hn,{animationName:0,elapsedTime:0,pseudoElement:0}),Cl=xt(Rl),Zr=ie({},Hn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),l=xt(Zr),p=ie({},Hn,{data:0}),y=xt(p),w={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},U={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Y(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=U[n])?!!i[n]:!1}function ve(){return Y}var st=ie({},Yr,{key:function(n){if(n.key){var i=w[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=$i(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?M[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ve,charCode:function(n){return n.type==="keypress"?$i(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?$i(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),je=xt(st),ut=ie({},qi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nn=xt(ut),gr=ie({},Yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ve}),qn=xt(gr),Wn=ie({},Hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Us=xt(Wn),Zo=ie({},qi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),iw=xt(Zo),sw=[9,13,27,32],Dc=m&&"CompositionEvent"in window,ea=null;m&&"documentMode"in document&&(ea=document.documentMode);var ow=m&&"TextEvent"in window&&!ea,Of=m&&(!Dc||ea&&8<ea&&11>=ea),Lf=" ",Mf=!1;function bf(n,i){switch(n){case"keyup":return sw.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ff(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var js=!1;function aw(n,i){switch(n){case"compositionend":return Ff(i);case"keypress":return i.which!==32?null:(Mf=!0,Lf);case"textInput":return n=i.data,n===Lf&&Mf?null:n;default:return null}}function lw(n,i){if(js)return n==="compositionend"||!Dc&&bf(n,i)?(n=Sl(),mr=Os=en=null,js=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Of&&i.locale!=="ko"?null:i.data;default:return null}}var uw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!uw[n.type]:i==="textarea"}function jf(n,i,a,c){Hr(c),i=Vl(i,"onChange"),0<i.length&&(a=new Hi("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var ta=null,na=null;function cw(n){ip(n,0)}function Pl(n){var i=qs(n);if(No(i))return n}function hw(n,i){if(n==="change")return i}var zf=!1;if(m){var Vc;if(m){var Oc="oninput"in document;if(!Oc){var Bf=document.createElement("div");Bf.setAttribute("oninput","return;"),Oc=typeof Bf.oninput=="function"}Vc=Oc}else Vc=!1;zf=Vc&&(!document.documentMode||9<document.documentMode)}function $f(){ta&&(ta.detachEvent("onpropertychange",Hf),na=ta=null)}function Hf(n){if(n.propertyName==="value"&&Pl(na)){var i=[];jf(i,na,n,Ss(n)),dl(cw,i)}}function dw(n,i,a){n==="focusin"?($f(),ta=i,na=a,ta.attachEvent("onpropertychange",Hf)):n==="focusout"&&$f()}function fw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Pl(na)}function pw(n,i){if(n==="click")return Pl(i)}function mw(n,i){if(n==="input"||n==="change")return Pl(i)}function gw(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var En=typeof Object.is=="function"?Object.is:gw;function ra(n,i){if(En(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(i,d)||!En(n[d],i[d]))return!1}return!0}function qf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Wf(n,i){var a=qf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=qf(a)}}function Kf(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Kf(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Gf(){for(var n=window,i=Fr();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Fr(n.document)}return i}function Lc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function yw(n){var i=Gf(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Kf(a.ownerDocument.documentElement,a)){if(c!==null&&Lc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,f=Math.min(c.start,d);c=c.end===void 0?f:Math.min(c.end,d),!n.extend&&f>c&&(d=c,c=f,f=d),d=Wf(a,f);var v=Wf(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),f>c?(n.addRange(i),n.extend(v.node,v.offset)):(i.setEnd(v.node,v.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var _w=m&&"documentMode"in document&&11>=document.documentMode,zs=null,Mc=null,ia=null,bc=!1;function Qf(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;bc||zs==null||zs!==Fr(c)||(c=zs,"selectionStart"in c&&Lc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ia&&ra(ia,c)||(ia=c,c=Vl(Mc,"onSelect"),0<c.length&&(i=new Hi("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=zs)))}function Nl(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Bs={animationend:Nl("Animation","AnimationEnd"),animationiteration:Nl("Animation","AnimationIteration"),animationstart:Nl("Animation","AnimationStart"),transitionend:Nl("Transition","TransitionEnd")},Fc={},Xf={};m&&(Xf=document.createElement("div").style,"AnimationEvent"in window||(delete Bs.animationend.animation,delete Bs.animationiteration.animation,delete Bs.animationstart.animation),"TransitionEvent"in window||delete Bs.transitionend.transition);function xl(n){if(Fc[n])return Fc[n];if(!Bs[n])return n;var i=Bs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Xf)return Fc[n]=i[a];return n}var Jf=xl("animationend"),Yf=xl("animationiteration"),Zf=xl("animationstart"),ep=xl("transitionend"),tp=new Map,np="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ei(n,i){tp.set(n,i),u(i,[n])}for(var Uc=0;Uc<np.length;Uc++){var jc=np[Uc],vw=jc.toLowerCase(),ww=jc[0].toUpperCase()+jc.slice(1);ei(vw,"on"+ww)}ei(Jf,"onAnimationEnd"),ei(Yf,"onAnimationIteration"),ei(Zf,"onAnimationStart"),ei("dblclick","onDoubleClick"),ei("focusin","onFocus"),ei("focusout","onBlur"),ei(ep,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ew=new Set("cancel close invalid load scroll toggle".split(" ").concat(sa));function rp(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,bo(c,i,void 0,n),n.currentTarget=null}function ip(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var f=void 0;if(i)for(var v=c.length-1;0<=v;v--){var T=c[v],R=T.instance,F=T.currentTarget;if(T=T.listener,R!==f&&d.isPropagationStopped())break e;rp(d,T,F),f=R}else for(v=0;v<c.length;v++){if(T=c[v],R=T.instance,F=T.currentTarget,T=T.listener,R!==f&&d.isPropagationStopped())break e;rp(d,T,F),f=R}}}if(As)throw n=an,As=!1,an=null,n}function Ke(n,i){var a=i[Gc];a===void 0&&(a=i[Gc]=new Set);var c=n+"__bubble";a.has(c)||(sp(i,n,2,!1),a.add(c))}function zc(n,i,a){var c=0;i&&(c|=4),sp(a,n,c,i)}var Dl="_reactListening"+Math.random().toString(36).slice(2);function oa(n){if(!n[Dl]){n[Dl]=!0,s.forEach(function(a){a!=="selectionchange"&&(Ew.has(a)||zc(a,!1,n),zc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Dl]||(i[Dl]=!0,zc("selectionchange",!1,i))}}function sp(n,i,a,c){switch(Vs(i)){case 1:var d=zn;break;case 4:d=Il;break;default:d=Xo}a=d.bind(null,i,a,n),d=void 0,!Wr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Bc(n,i,a,c,d){var f=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var T=c.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var R=v.tag;if((R===3||R===4)&&(R=v.stateNode.containerInfo,R===d||R.nodeType===8&&R.parentNode===d))return;v=v.return}for(;T!==null;){if(v=Wi(T),v===null)return;if(R=v.tag,R===5||R===6){c=f=v;continue e}T=T.parentNode}}c=c.return}dl(function(){var F=f,W=Ss(a),K=[];e:{var q=tp.get(n);if(q!==void 0){var ne=Hi,oe=n;switch(n){case"keypress":if($i(a)===0)break e;case"keydown":case"keyup":ne=je;break;case"focusin":oe="focus",ne=St;break;case"focusout":oe="blur",ne=St;break;case"beforeblur":case"afterblur":ne=St;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=Yo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=kl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=qn;break;case Jf:case Yf:case Zf:ne=Cl;break;case ep:ne=Us;break;case"scroll":ne=Ls;break;case"wheel":ne=iw;break;case"copy":case"cut":case"paste":ne=l;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=nn}var ae=(i&4)!==0,ot=!ae&&n==="scroll",O=ae?q!==null?q+"Capture":null:q;ae=[];for(var N=F,b;N!==null;){b=N;var Q=b.stateNode;if(b.tag===5&&Q!==null&&(b=Q,O!==null&&(Q=Vi(N,O),Q!=null&&ae.push(aa(N,Q,b)))),ot)break;N=N.return}0<ae.length&&(q=new ne(q,oe,null,a,W),K.push({event:q,listeners:ae}))}}if((i&7)===0){e:{if(q=n==="mouseover"||n==="pointerover",ne=n==="mouseout"||n==="pointerout",q&&a!==$r&&(oe=a.relatedTarget||a.fromElement)&&(Wi(oe)||oe[yr]))break e;if((ne||q)&&(q=W.window===W?W:(q=W.ownerDocument)?q.defaultView||q.parentWindow:window,ne?(oe=a.relatedTarget||a.toElement,ne=F,oe=oe?Wi(oe):null,oe!==null&&(ot=vn(oe),oe!==ot||oe.tag!==5&&oe.tag!==6)&&(oe=null)):(ne=null,oe=F),ne!==oe)){if(ae=Yo,Q="onMouseLeave",O="onMouseEnter",N="mouse",(n==="pointerout"||n==="pointerover")&&(ae=nn,Q="onPointerLeave",O="onPointerEnter",N="pointer"),ot=ne==null?q:qs(ne),b=oe==null?q:qs(oe),q=new ae(Q,N+"leave",ne,a,W),q.target=ot,q.relatedTarget=b,Q=null,Wi(W)===F&&(ae=new ae(O,N+"enter",oe,a,W),ae.target=b,ae.relatedTarget=ot,Q=ae),ot=Q,ne&&oe)t:{for(ae=ne,O=oe,N=0,b=ae;b;b=$s(b))N++;for(b=0,Q=O;Q;Q=$s(Q))b++;for(;0<N-b;)ae=$s(ae),N--;for(;0<b-N;)O=$s(O),b--;for(;N--;){if(ae===O||O!==null&&ae===O.alternate)break t;ae=$s(ae),O=$s(O)}ae=null}else ae=null;ne!==null&&op(K,q,ne,ae,!1),oe!==null&&ot!==null&&op(K,ot,oe,ae,!0)}}e:{if(q=F?qs(F):window,ne=q.nodeName&&q.nodeName.toLowerCase(),ne==="select"||ne==="input"&&q.type==="file")var ue=hw;else if(Uf(q))if(zf)ue=mw;else{ue=fw;var de=dw}else(ne=q.nodeName)&&ne.toLowerCase()==="input"&&(q.type==="checkbox"||q.type==="radio")&&(ue=pw);if(ue&&(ue=ue(n,F))){jf(K,ue,a,W);break e}de&&de(n,q,F),n==="focusout"&&(de=q._wrapperState)&&de.controlled&&q.type==="number"&&lt(q,"number",q.value)}switch(de=F?qs(F):window,n){case"focusin":(Uf(de)||de.contentEditable==="true")&&(zs=de,Mc=F,ia=null);break;case"focusout":ia=Mc=zs=null;break;case"mousedown":bc=!0;break;case"contextmenu":case"mouseup":case"dragend":bc=!1,Qf(K,a,W);break;case"selectionchange":if(_w)break;case"keydown":case"keyup":Qf(K,a,W)}var fe;if(Dc)e:{switch(n){case"compositionstart":var ge="onCompositionStart";break e;case"compositionend":ge="onCompositionEnd";break e;case"compositionupdate":ge="onCompositionUpdate";break e}ge=void 0}else js?bf(n,a)&&(ge="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ge="onCompositionStart");ge&&(Of&&a.locale!=="ko"&&(js||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&js&&(fe=Sl()):(en=W,Os="value"in en?en.value:en.textContent,js=!0)),de=Vl(F,ge),0<de.length&&(ge=new y(ge,n,null,a,W),K.push({event:ge,listeners:de}),fe?ge.data=fe:(fe=Ff(a),fe!==null&&(ge.data=fe)))),(fe=ow?aw(n,a):lw(n,a))&&(F=Vl(F,"onBeforeInput"),0<F.length&&(W=new y("onBeforeInput","beforeinput",null,a,W),K.push({event:W,listeners:F}),W.data=fe))}ip(K,i)})}function aa(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Vl(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,f=d.stateNode;d.tag===5&&f!==null&&(d=f,f=Vi(n,a),f!=null&&c.unshift(aa(n,f,d)),f=Vi(n,i),f!=null&&c.push(aa(n,f,d))),n=n.return}return c}function $s(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function op(n,i,a,c,d){for(var f=i._reactName,v=[];a!==null&&a!==c;){var T=a,R=T.alternate,F=T.stateNode;if(R!==null&&R===c)break;T.tag===5&&F!==null&&(T=F,d?(R=Vi(a,f),R!=null&&v.unshift(aa(a,R,T))):d||(R=Vi(a,f),R!=null&&v.push(aa(a,R,T)))),a=a.return}v.length!==0&&n.push({event:i,listeners:v})}var Tw=/\r\n?/g,Iw=/\u0000|\uFFFD/g;function ap(n){return(typeof n=="string"?n:""+n).replace(Tw,`
`).replace(Iw,"")}function Ol(n,i,a){if(i=ap(i),ap(n)!==i&&a)throw Error(t(425))}function Ll(){}var $c=null,Hc=null;function qc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Wc=typeof setTimeout=="function"?setTimeout:void 0,Sw=typeof clearTimeout=="function"?clearTimeout:void 0,lp=typeof Promise=="function"?Promise:void 0,Aw=typeof queueMicrotask=="function"?queueMicrotask:typeof lp<"u"?function(n){return lp.resolve(null).then(n).catch(kw)}:Wc;function kw(n){setTimeout(function(){throw n})}function Kc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Jr(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Jr(i)}function ti(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function up(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Hs=Math.random().toString(36).slice(2),Kn="__reactFiber$"+Hs,la="__reactProps$"+Hs,yr="__reactContainer$"+Hs,Gc="__reactEvents$"+Hs,Rw="__reactListeners$"+Hs,Cw="__reactHandles$"+Hs;function Wi(n){var i=n[Kn];if(i)return i;for(var a=n.parentNode;a;){if(i=a[yr]||a[Kn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=up(n);n!==null;){if(a=n[Kn])return a;n=up(n)}return i}n=a,a=n.parentNode}return null}function ua(n){return n=n[Kn]||n[yr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function qs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ml(n){return n[la]||null}var Qc=[],Ws=-1;function ni(n){return{current:n}}function Ge(n){0>Ws||(n.current=Qc[Ws],Qc[Ws]=null,Ws--)}function He(n,i){Ws++,Qc[Ws]=n.current,n.current=i}var ri={},Dt=ni(ri),$t=ni(!1),Ki=ri;function Ks(n,i){var a=n.type.contextTypes;if(!a)return ri;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},f;for(f in a)d[f]=i[f];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Ht(n){return n=n.childContextTypes,n!=null}function bl(){Ge($t),Ge(Dt)}function cp(n,i,a){if(Dt.current!==ri)throw Error(t(168));He(Dt,i),He($t,a)}function hp(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,Fe(n)||"Unknown",d));return ie({},a,c)}function Fl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ri,Ki=Dt.current,He(Dt,n),He($t,$t.current),!0}function dp(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=hp(n,i,Ki),c.__reactInternalMemoizedMergedChildContext=n,Ge($t),Ge(Dt),He(Dt,n)):Ge($t),He($t,a)}var _r=null,Ul=!1,Xc=!1;function fp(n){_r===null?_r=[n]:_r.push(n)}function Pw(n){Ul=!0,fp(n)}function ii(){if(!Xc&&_r!==null){Xc=!0;var n=0,i=xe;try{var a=_r;for(xe=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}_r=null,Ul=!1}catch(d){throw _r!==null&&(_r=_r.slice(n+1)),Uo(Rs,ii),d}finally{xe=i,Xc=!1}}return null}var Gs=[],Qs=0,jl=null,zl=0,un=[],cn=0,Gi=null,vr=1,wr="";function Qi(n,i){Gs[Qs++]=zl,Gs[Qs++]=jl,jl=n,zl=i}function pp(n,i,a){un[cn++]=vr,un[cn++]=wr,un[cn++]=Gi,Gi=n;var c=vr;n=wr;var d=32-Yt(c)-1;c&=~(1<<d),a+=1;var f=32-Yt(i)+d;if(30<f){var v=d-d%5;f=(c&(1<<v)-1).toString(32),c>>=v,d-=v,vr=1<<32-Yt(i)+d|a<<d|c,wr=f+n}else vr=1<<f|a<<d|c,wr=n}function Jc(n){n.return!==null&&(Qi(n,1),pp(n,1,0))}function Yc(n){for(;n===jl;)jl=Gs[--Qs],Gs[Qs]=null,zl=Gs[--Qs],Gs[Qs]=null;for(;n===Gi;)Gi=un[--cn],un[cn]=null,wr=un[--cn],un[cn]=null,vr=un[--cn],un[cn]=null}var rn=null,sn=null,Ye=!1,Tn=null;function mp(n,i){var a=pn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function gp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,rn=n,sn=ti(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,rn=n,sn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Gi!==null?{id:vr,overflow:wr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=pn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,rn=n,sn=null,!0):!1;default:return!1}}function Zc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function eh(n){if(Ye){var i=sn;if(i){var a=i;if(!gp(n,i)){if(Zc(n))throw Error(t(418));i=ti(a.nextSibling);var c=rn;i&&gp(n,i)?mp(c,a):(n.flags=n.flags&-4097|2,Ye=!1,rn=n)}}else{if(Zc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ye=!1,rn=n}}}function yp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;rn=n}function Bl(n){if(n!==rn)return!1;if(!Ye)return yp(n),Ye=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!qc(n.type,n.memoizedProps)),i&&(i=sn)){if(Zc(n))throw _p(),Error(t(418));for(;i;)mp(n,i),i=ti(i.nextSibling)}if(yp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){sn=ti(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}sn=null}}else sn=rn?ti(n.stateNode.nextSibling):null;return!0}function _p(){for(var n=sn;n;)n=ti(n.nextSibling)}function Xs(){sn=rn=null,Ye=!1}function th(n){Tn===null?Tn=[n]:Tn.push(n)}var Nw=Ne.ReactCurrentBatchConfig;function ca(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,f=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===f?i.ref:(i=function(v){var T=d.refs;v===null?delete T[f]:T[f]=v},i._stringRef=f,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function $l(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function vp(n){var i=n._init;return i(n._payload)}function wp(n){function i(O,N){if(n){var b=O.deletions;b===null?(O.deletions=[N],O.flags|=16):b.push(N)}}function a(O,N){if(!n)return null;for(;N!==null;)i(O,N),N=N.sibling;return null}function c(O,N){for(O=new Map;N!==null;)N.key!==null?O.set(N.key,N):O.set(N.index,N),N=N.sibling;return O}function d(O,N){return O=di(O,N),O.index=0,O.sibling=null,O}function f(O,N,b){return O.index=b,n?(b=O.alternate,b!==null?(b=b.index,b<N?(O.flags|=2,N):b):(O.flags|=2,N)):(O.flags|=1048576,N)}function v(O){return n&&O.alternate===null&&(O.flags|=2),O}function T(O,N,b,Q){return N===null||N.tag!==6?(N=Wh(b,O.mode,Q),N.return=O,N):(N=d(N,b),N.return=O,N)}function R(O,N,b,Q){var ue=b.type;return ue===C?W(O,N,b.props.children,Q,b.key):N!==null&&(N.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===Nt&&vp(ue)===N.type)?(Q=d(N,b.props),Q.ref=ca(O,N,b),Q.return=O,Q):(Q=fu(b.type,b.key,b.props,null,O.mode,Q),Q.ref=ca(O,N,b),Q.return=O,Q)}function F(O,N,b,Q){return N===null||N.tag!==4||N.stateNode.containerInfo!==b.containerInfo||N.stateNode.implementation!==b.implementation?(N=Kh(b,O.mode,Q),N.return=O,N):(N=d(N,b.children||[]),N.return=O,N)}function W(O,N,b,Q,ue){return N===null||N.tag!==7?(N=rs(b,O.mode,Q,ue),N.return=O,N):(N=d(N,b),N.return=O,N)}function K(O,N,b){if(typeof N=="string"&&N!==""||typeof N=="number")return N=Wh(""+N,O.mode,b),N.return=O,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Me:return b=fu(N.type,N.key,N.props,null,O.mode,b),b.ref=ca(O,null,N),b.return=O,b;case ke:return N=Kh(N,O.mode,b),N.return=O,N;case Nt:var Q=N._init;return K(O,Q(N._payload),b)}if(it(N)||ce(N))return N=rs(N,O.mode,b,null),N.return=O,N;$l(O,N)}return null}function q(O,N,b,Q){var ue=N!==null?N.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return ue!==null?null:T(O,N,""+b,Q);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Me:return b.key===ue?R(O,N,b,Q):null;case ke:return b.key===ue?F(O,N,b,Q):null;case Nt:return ue=b._init,q(O,N,ue(b._payload),Q)}if(it(b)||ce(b))return ue!==null?null:W(O,N,b,Q,null);$l(O,b)}return null}function ne(O,N,b,Q,ue){if(typeof Q=="string"&&Q!==""||typeof Q=="number")return O=O.get(b)||null,T(N,O,""+Q,ue);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case Me:return O=O.get(Q.key===null?b:Q.key)||null,R(N,O,Q,ue);case ke:return O=O.get(Q.key===null?b:Q.key)||null,F(N,O,Q,ue);case Nt:var de=Q._init;return ne(O,N,b,de(Q._payload),ue)}if(it(Q)||ce(Q))return O=O.get(b)||null,W(N,O,Q,ue,null);$l(N,Q)}return null}function oe(O,N,b,Q){for(var ue=null,de=null,fe=N,ge=N=0,Et=null;fe!==null&&ge<b.length;ge++){fe.index>ge?(Et=fe,fe=null):Et=fe.sibling;var Le=q(O,fe,b[ge],Q);if(Le===null){fe===null&&(fe=Et);break}n&&fe&&Le.alternate===null&&i(O,fe),N=f(Le,N,ge),de===null?ue=Le:de.sibling=Le,de=Le,fe=Et}if(ge===b.length)return a(O,fe),Ye&&Qi(O,ge),ue;if(fe===null){for(;ge<b.length;ge++)fe=K(O,b[ge],Q),fe!==null&&(N=f(fe,N,ge),de===null?ue=fe:de.sibling=fe,de=fe);return Ye&&Qi(O,ge),ue}for(fe=c(O,fe);ge<b.length;ge++)Et=ne(fe,O,ge,b[ge],Q),Et!==null&&(n&&Et.alternate!==null&&fe.delete(Et.key===null?ge:Et.key),N=f(Et,N,ge),de===null?ue=Et:de.sibling=Et,de=Et);return n&&fe.forEach(function(fi){return i(O,fi)}),Ye&&Qi(O,ge),ue}function ae(O,N,b,Q){var ue=ce(b);if(typeof ue!="function")throw Error(t(150));if(b=ue.call(b),b==null)throw Error(t(151));for(var de=ue=null,fe=N,ge=N=0,Et=null,Le=b.next();fe!==null&&!Le.done;ge++,Le=b.next()){fe.index>ge?(Et=fe,fe=null):Et=fe.sibling;var fi=q(O,fe,Le.value,Q);if(fi===null){fe===null&&(fe=Et);break}n&&fe&&fi.alternate===null&&i(O,fe),N=f(fi,N,ge),de===null?ue=fi:de.sibling=fi,de=fi,fe=Et}if(Le.done)return a(O,fe),Ye&&Qi(O,ge),ue;if(fe===null){for(;!Le.done;ge++,Le=b.next())Le=K(O,Le.value,Q),Le!==null&&(N=f(Le,N,ge),de===null?ue=Le:de.sibling=Le,de=Le);return Ye&&Qi(O,ge),ue}for(fe=c(O,fe);!Le.done;ge++,Le=b.next())Le=ne(fe,O,ge,Le.value,Q),Le!==null&&(n&&Le.alternate!==null&&fe.delete(Le.key===null?ge:Le.key),N=f(Le,N,ge),de===null?ue=Le:de.sibling=Le,de=Le);return n&&fe.forEach(function(uE){return i(O,uE)}),Ye&&Qi(O,ge),ue}function ot(O,N,b,Q){if(typeof b=="object"&&b!==null&&b.type===C&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Me:e:{for(var ue=b.key,de=N;de!==null;){if(de.key===ue){if(ue=b.type,ue===C){if(de.tag===7){a(O,de.sibling),N=d(de,b.props.children),N.return=O,O=N;break e}}else if(de.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===Nt&&vp(ue)===de.type){a(O,de.sibling),N=d(de,b.props),N.ref=ca(O,de,b),N.return=O,O=N;break e}a(O,de);break}else i(O,de);de=de.sibling}b.type===C?(N=rs(b.props.children,O.mode,Q,b.key),N.return=O,O=N):(Q=fu(b.type,b.key,b.props,null,O.mode,Q),Q.ref=ca(O,N,b),Q.return=O,O=Q)}return v(O);case ke:e:{for(de=b.key;N!==null;){if(N.key===de)if(N.tag===4&&N.stateNode.containerInfo===b.containerInfo&&N.stateNode.implementation===b.implementation){a(O,N.sibling),N=d(N,b.children||[]),N.return=O,O=N;break e}else{a(O,N);break}else i(O,N);N=N.sibling}N=Kh(b,O.mode,Q),N.return=O,O=N}return v(O);case Nt:return de=b._init,ot(O,N,de(b._payload),Q)}if(it(b))return oe(O,N,b,Q);if(ce(b))return ae(O,N,b,Q);$l(O,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,N!==null&&N.tag===6?(a(O,N.sibling),N=d(N,b),N.return=O,O=N):(a(O,N),N=Wh(b,O.mode,Q),N.return=O,O=N),v(O)):a(O,N)}return ot}var Js=wp(!0),Ep=wp(!1),Hl=ni(null),ql=null,Ys=null,nh=null;function rh(){nh=Ys=ql=null}function ih(n){var i=Hl.current;Ge(Hl),n._currentValue=i}function sh(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Zs(n,i){ql=n,nh=Ys=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(qt=!0),n.firstContext=null)}function hn(n){var i=n._currentValue;if(nh!==n)if(n={context:n,memoizedValue:i,next:null},Ys===null){if(ql===null)throw Error(t(308));Ys=n,ql.dependencies={lanes:0,firstContext:n}}else Ys=Ys.next=n;return i}var Xi=null;function oh(n){Xi===null?Xi=[n]:Xi.push(n)}function Tp(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,oh(i)):(a.next=d.next,d.next=a),i.interleaved=a,Er(n,c)}function Er(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var si=!1;function ah(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ip(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Tr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function oi(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Oe&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Er(n,a)}return d=c.interleaved,d===null?(i.next=i,oh(c)):(i.next=d.next,d.next=i),c.interleaved=i,Er(n,a)}function Wl(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,qo(n,a)}}function Sp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};f===null?d=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?d=f=i:f=f.next=i}else d=f=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Kl(n,i,a,c){var d=n.updateQueue;si=!1;var f=d.firstBaseUpdate,v=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var R=T,F=R.next;R.next=null,v===null?f=F:v.next=F,v=R;var W=n.alternate;W!==null&&(W=W.updateQueue,T=W.lastBaseUpdate,T!==v&&(T===null?W.firstBaseUpdate=F:T.next=F,W.lastBaseUpdate=R))}if(f!==null){var K=d.baseState;v=0,W=F=R=null,T=f;do{var q=T.lane,ne=T.eventTime;if((c&q)===q){W!==null&&(W=W.next={eventTime:ne,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var oe=n,ae=T;switch(q=i,ne=a,ae.tag){case 1:if(oe=ae.payload,typeof oe=="function"){K=oe.call(ne,K,q);break e}K=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=ae.payload,q=typeof oe=="function"?oe.call(ne,K,q):oe,q==null)break e;K=ie({},K,q);break e;case 2:si=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,q=d.effects,q===null?d.effects=[T]:q.push(T))}else ne={eventTime:ne,lane:q,tag:T.tag,payload:T.payload,callback:T.callback,next:null},W===null?(F=W=ne,R=K):W=W.next=ne,v|=q;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;q=T,T=q.next,q.next=null,d.lastBaseUpdate=q,d.shared.pending=null}}while(!0);if(W===null&&(R=K),d.baseState=R,d.firstBaseUpdate=F,d.lastBaseUpdate=W,i=d.shared.interleaved,i!==null){d=i;do v|=d.lane,d=d.next;while(d!==i)}else f===null&&(d.shared.lanes=0);Zi|=v,n.lanes=v,n.memoizedState=K}}function Ap(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ha={},Gn=ni(ha),da=ni(ha),fa=ni(ha);function Ji(n){if(n===ha)throw Error(t(174));return n}function lh(n,i){switch(He(fa,i),He(da,n),He(Gn,ha),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Es(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Es(i,n)}Ge(Gn),He(Gn,i)}function eo(){Ge(Gn),Ge(da),Ge(fa)}function kp(n){Ji(fa.current);var i=Ji(Gn.current),a=Es(i,n.type);i!==a&&(He(da,n),He(Gn,a))}function uh(n){da.current===n&&(Ge(Gn),Ge(da))}var et=ni(0);function Gl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ch=[];function hh(){for(var n=0;n<ch.length;n++)ch[n]._workInProgressVersionPrimary=null;ch.length=0}var Ql=Ne.ReactCurrentDispatcher,dh=Ne.ReactCurrentBatchConfig,Yi=0,tt=null,ft=null,vt=null,Xl=!1,pa=!1,ma=0,xw=0;function Vt(){throw Error(t(321))}function fh(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!En(n[a],i[a]))return!1;return!0}function ph(n,i,a,c,d,f){if(Yi=f,tt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ql.current=n===null||n.memoizedState===null?Lw:Mw,n=a(c,d),pa){f=0;do{if(pa=!1,ma=0,25<=f)throw Error(t(301));f+=1,vt=ft=null,i.updateQueue=null,Ql.current=bw,n=a(c,d)}while(pa)}if(Ql.current=Zl,i=ft!==null&&ft.next!==null,Yi=0,vt=ft=tt=null,Xl=!1,i)throw Error(t(300));return n}function mh(){var n=ma!==0;return ma=0,n}function Qn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?tt.memoizedState=vt=n:vt=vt.next=n,vt}function dn(){if(ft===null){var n=tt.alternate;n=n!==null?n.memoizedState:null}else n=ft.next;var i=vt===null?tt.memoizedState:vt.next;if(i!==null)vt=i,ft=n;else{if(n===null)throw Error(t(310));ft=n,n={memoizedState:ft.memoizedState,baseState:ft.baseState,baseQueue:ft.baseQueue,queue:ft.queue,next:null},vt===null?tt.memoizedState=vt=n:vt=vt.next=n}return vt}function ga(n,i){return typeof i=="function"?i(n):i}function gh(n){var i=dn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=ft,d=c.baseQueue,f=a.pending;if(f!==null){if(d!==null){var v=d.next;d.next=f.next,f.next=v}c.baseQueue=d=f,a.pending=null}if(d!==null){f=d.next,c=c.baseState;var T=v=null,R=null,F=f;do{var W=F.lane;if((Yi&W)===W)R!==null&&(R=R.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var K={lane:W,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};R===null?(T=R=K,v=c):R=R.next=K,tt.lanes|=W,Zi|=W}F=F.next}while(F!==null&&F!==f);R===null?v=c:R.next=T,En(c,i.memoizedState)||(qt=!0),i.memoizedState=c,i.baseState=v,i.baseQueue=R,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do f=d.lane,tt.lanes|=f,Zi|=f,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function yh(n){var i=dn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,f=i.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do f=n(f,v.action),v=v.next;while(v!==d);En(f,i.memoizedState)||(qt=!0),i.memoizedState=f,i.baseQueue===null&&(i.baseState=f),a.lastRenderedState=f}return[f,c]}function Rp(){}function Cp(n,i){var a=tt,c=dn(),d=i(),f=!En(c.memoizedState,d);if(f&&(c.memoizedState=d,qt=!0),c=c.queue,_h(xp.bind(null,a,c,n),[n]),c.getSnapshot!==i||f||vt!==null&&vt.memoizedState.tag&1){if(a.flags|=2048,ya(9,Np.bind(null,a,c,d,i),void 0,null),wt===null)throw Error(t(349));(Yi&30)!==0||Pp(a,i,d)}return d}function Pp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=tt.updateQueue,i===null?(i={lastEffect:null,stores:null},tt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Np(n,i,a,c){i.value=a,i.getSnapshot=c,Dp(i)&&Vp(n)}function xp(n,i,a){return a(function(){Dp(i)&&Vp(n)})}function Dp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!En(n,a)}catch{return!0}}function Vp(n){var i=Er(n,1);i!==null&&kn(i,n,1,-1)}function Op(n){var i=Qn();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:n},i.queue=n,n=n.dispatch=Ow.bind(null,tt,n),[i.memoizedState,n]}function ya(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=tt.updateQueue,i===null?(i={lastEffect:null,stores:null},tt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Lp(){return dn().memoizedState}function Jl(n,i,a,c){var d=Qn();tt.flags|=n,d.memoizedState=ya(1|i,a,void 0,c===void 0?null:c)}function Yl(n,i,a,c){var d=dn();c=c===void 0?null:c;var f=void 0;if(ft!==null){var v=ft.memoizedState;if(f=v.destroy,c!==null&&fh(c,v.deps)){d.memoizedState=ya(i,a,f,c);return}}tt.flags|=n,d.memoizedState=ya(1|i,a,f,c)}function Mp(n,i){return Jl(8390656,8,n,i)}function _h(n,i){return Yl(2048,8,n,i)}function bp(n,i){return Yl(4,2,n,i)}function Fp(n,i){return Yl(4,4,n,i)}function Up(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function jp(n,i,a){return a=a!=null?a.concat([n]):null,Yl(4,4,Up.bind(null,i,n),a)}function vh(){}function zp(n,i){var a=dn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&fh(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Bp(n,i){var a=dn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&fh(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function $p(n,i,a){return(Yi&21)===0?(n.baseState&&(n.baseState=!1,qt=!0),n.memoizedState=a):(En(a,i)||(a=$o(),tt.lanes|=a,Zi|=a,n.baseState=!0),i)}function Dw(n,i){var a=xe;xe=a!==0&&4>a?a:4,n(!0);var c=dh.transition;dh.transition={};try{n(!1),i()}finally{xe=a,dh.transition=c}}function Hp(){return dn().memoizedState}function Vw(n,i,a){var c=ci(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},qp(n))Wp(i,a);else if(a=Tp(n,i,a,c),a!==null){var d=Bt();kn(a,n,c,d),Kp(a,i,c)}}function Ow(n,i,a){var c=ci(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(qp(n))Wp(i,d);else{var f=n.alternate;if(n.lanes===0&&(f===null||f.lanes===0)&&(f=i.lastRenderedReducer,f!==null))try{var v=i.lastRenderedState,T=f(v,a);if(d.hasEagerState=!0,d.eagerState=T,En(T,v)){var R=i.interleaved;R===null?(d.next=d,oh(i)):(d.next=R.next,R.next=d),i.interleaved=d;return}}catch{}finally{}a=Tp(n,i,d,c),a!==null&&(d=Bt(),kn(a,n,c,d),Kp(a,i,c))}}function qp(n){var i=n.alternate;return n===tt||i!==null&&i===tt}function Wp(n,i){pa=Xl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Kp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,qo(n,a)}}var Zl={readContext:hn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},Lw={readContext:hn,useCallback:function(n,i){return Qn().memoizedState=[n,i===void 0?null:i],n},useContext:hn,useEffect:Mp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Jl(4194308,4,Up.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Jl(4194308,4,n,i)},useInsertionEffect:function(n,i){return Jl(4,2,n,i)},useMemo:function(n,i){var a=Qn();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Qn();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Vw.bind(null,tt,n),[c.memoizedState,n]},useRef:function(n){var i=Qn();return n={current:n},i.memoizedState=n},useState:Op,useDebugValue:vh,useDeferredValue:function(n){return Qn().memoizedState=n},useTransition:function(){var n=Op(!1),i=n[0];return n=Dw.bind(null,n[1]),Qn().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=tt,d=Qn();if(Ye){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),wt===null)throw Error(t(349));(Yi&30)!==0||Pp(c,i,a)}d.memoizedState=a;var f={value:a,getSnapshot:i};return d.queue=f,Mp(xp.bind(null,c,f,n),[n]),c.flags|=2048,ya(9,Np.bind(null,c,f,a,i),void 0,null),a},useId:function(){var n=Qn(),i=wt.identifierPrefix;if(Ye){var a=wr,c=vr;a=(c&~(1<<32-Yt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=ma++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=xw++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Mw={readContext:hn,useCallback:zp,useContext:hn,useEffect:_h,useImperativeHandle:jp,useInsertionEffect:bp,useLayoutEffect:Fp,useMemo:Bp,useReducer:gh,useRef:Lp,useState:function(){return gh(ga)},useDebugValue:vh,useDeferredValue:function(n){var i=dn();return $p(i,ft.memoizedState,n)},useTransition:function(){var n=gh(ga)[0],i=dn().memoizedState;return[n,i]},useMutableSource:Rp,useSyncExternalStore:Cp,useId:Hp,unstable_isNewReconciler:!1},bw={readContext:hn,useCallback:zp,useContext:hn,useEffect:_h,useImperativeHandle:jp,useInsertionEffect:bp,useLayoutEffect:Fp,useMemo:Bp,useReducer:yh,useRef:Lp,useState:function(){return yh(ga)},useDebugValue:vh,useDeferredValue:function(n){var i=dn();return ft===null?i.memoizedState=n:$p(i,ft.memoizedState,n)},useTransition:function(){var n=yh(ga)[0],i=dn().memoizedState;return[n,i]},useMutableSource:Rp,useSyncExternalStore:Cp,useId:Hp,unstable_isNewReconciler:!1};function In(n,i){if(n&&n.defaultProps){i=ie({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function wh(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ie({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var eu={isMounted:function(n){return(n=n._reactInternals)?vn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Bt(),d=ci(n),f=Tr(c,d);f.payload=i,a!=null&&(f.callback=a),i=oi(n,f,d),i!==null&&(kn(i,n,d,c),Wl(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Bt(),d=ci(n),f=Tr(c,d);f.tag=1,f.payload=i,a!=null&&(f.callback=a),i=oi(n,f,d),i!==null&&(kn(i,n,d,c),Wl(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Bt(),c=ci(n),d=Tr(a,c);d.tag=2,i!=null&&(d.callback=i),i=oi(n,d,c),i!==null&&(kn(i,n,c,a),Wl(i,n,c))}};function Gp(n,i,a,c,d,f,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,f,v):i.prototype&&i.prototype.isPureReactComponent?!ra(a,c)||!ra(d,f):!0}function Qp(n,i,a){var c=!1,d=ri,f=i.contextType;return typeof f=="object"&&f!==null?f=hn(f):(d=Ht(i)?Ki:Dt.current,c=i.contextTypes,f=(c=c!=null)?Ks(n,d):ri),i=new i(a,f),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=eu,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=f),i}function Xp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&eu.enqueueReplaceState(i,i.state,null)}function Eh(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},ah(n);var f=i.contextType;typeof f=="object"&&f!==null?d.context=hn(f):(f=Ht(i)?Ki:Dt.current,d.context=Ks(n,f)),d.state=n.memoizedState,f=i.getDerivedStateFromProps,typeof f=="function"&&(wh(n,i,f,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&eu.enqueueReplaceState(d,d.state,null),Kl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function to(n,i){try{var a="",c=i;do a+=Re(c),c=c.return;while(c);var d=a}catch(f){d=`
Error generating stack: `+f.message+`
`+f.stack}return{value:n,source:i,stack:d,digest:null}}function Th(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Ih(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Fw=typeof WeakMap=="function"?WeakMap:Map;function Jp(n,i,a){a=Tr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){au||(au=!0,Fh=c),Ih(n,i)},a}function Yp(n,i,a){a=Tr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){Ih(n,i)}}var f=n.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(a.callback=function(){Ih(n,i),typeof c!="function"&&(li===null?li=new Set([this]):li.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})}),a}function Zp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Fw;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=Yw.bind(null,n,i,a),i.then(n,n))}function em(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function tm(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Tr(-1,1),i.tag=2,oi(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Uw=Ne.ReactCurrentOwner,qt=!1;function zt(n,i,a,c){i.child=n===null?Ep(i,null,a,c):Js(i,n.child,a,c)}function nm(n,i,a,c,d){a=a.render;var f=i.ref;return Zs(i,d),c=ph(n,i,a,c,f,d),a=mh(),n!==null&&!qt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Ir(n,i,d)):(Ye&&a&&Jc(i),i.flags|=1,zt(n,i,c,d),i.child)}function rm(n,i,a,c,d){if(n===null){var f=a.type;return typeof f=="function"&&!qh(f)&&f.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=f,im(n,i,f,c,d)):(n=fu(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(f=n.child,(n.lanes&d)===0){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:ra,a(v,c)&&n.ref===i.ref)return Ir(n,i,d)}return i.flags|=1,n=di(f,c),n.ref=i.ref,n.return=i,i.child=n}function im(n,i,a,c,d){if(n!==null){var f=n.memoizedProps;if(ra(f,c)&&n.ref===i.ref)if(qt=!1,i.pendingProps=c=f,(n.lanes&d)!==0)(n.flags&131072)!==0&&(qt=!0);else return i.lanes=n.lanes,Ir(n,i,d)}return Sh(n,i,a,c,d)}function sm(n,i,a){var c=i.pendingProps,d=c.children,f=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(ro,on),on|=a;else{if((a&1073741824)===0)return n=f!==null?f.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,He(ro,on),on|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=f!==null?f.baseLanes:a,He(ro,on),on|=c}else f!==null?(c=f.baseLanes|a,i.memoizedState=null):c=a,He(ro,on),on|=c;return zt(n,i,d,a),i.child}function om(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Sh(n,i,a,c,d){var f=Ht(a)?Ki:Dt.current;return f=Ks(i,f),Zs(i,d),a=ph(n,i,a,c,f,d),c=mh(),n!==null&&!qt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Ir(n,i,d)):(Ye&&c&&Jc(i),i.flags|=1,zt(n,i,a,d),i.child)}function am(n,i,a,c,d){if(Ht(a)){var f=!0;Fl(i)}else f=!1;if(Zs(i,d),i.stateNode===null)nu(n,i),Qp(i,a,c),Eh(i,a,c,d),c=!0;else if(n===null){var v=i.stateNode,T=i.memoizedProps;v.props=T;var R=v.context,F=a.contextType;typeof F=="object"&&F!==null?F=hn(F):(F=Ht(a)?Ki:Dt.current,F=Ks(i,F));var W=a.getDerivedStateFromProps,K=typeof W=="function"||typeof v.getSnapshotBeforeUpdate=="function";K||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(T!==c||R!==F)&&Xp(i,v,c,F),si=!1;var q=i.memoizedState;v.state=q,Kl(i,c,v,d),R=i.memoizedState,T!==c||q!==R||$t.current||si?(typeof W=="function"&&(wh(i,a,W,c),R=i.memoizedState),(T=si||Gp(i,a,T,c,q,R,F))?(K||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(i.flags|=4194308)):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=R),v.props=c,v.state=R,v.context=F,c=T):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{v=i.stateNode,Ip(n,i),T=i.memoizedProps,F=i.type===i.elementType?T:In(i.type,T),v.props=F,K=i.pendingProps,q=v.context,R=a.contextType,typeof R=="object"&&R!==null?R=hn(R):(R=Ht(a)?Ki:Dt.current,R=Ks(i,R));var ne=a.getDerivedStateFromProps;(W=typeof ne=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(T!==K||q!==R)&&Xp(i,v,c,R),si=!1,q=i.memoizedState,v.state=q,Kl(i,c,v,d);var oe=i.memoizedState;T!==K||q!==oe||$t.current||si?(typeof ne=="function"&&(wh(i,a,ne,c),oe=i.memoizedState),(F=si||Gp(i,a,F,c,q,oe,R)||!1)?(W||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,oe,R),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,oe,R)),typeof v.componentDidUpdate=="function"&&(i.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof v.componentDidUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=oe),v.props=c,v.state=oe,v.context=R,c=F):(typeof v.componentDidUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(i.flags|=1024),c=!1)}return Ah(n,i,a,c,f,d)}function Ah(n,i,a,c,d,f){om(n,i);var v=(i.flags&128)!==0;if(!c&&!v)return d&&dp(i,a,!1),Ir(n,i,f);c=i.stateNode,Uw.current=i;var T=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&v?(i.child=Js(i,n.child,null,f),i.child=Js(i,null,T,f)):zt(n,i,T,f),i.memoizedState=c.state,d&&dp(i,a,!0),i.child}function lm(n){var i=n.stateNode;i.pendingContext?cp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&cp(n,i.context,!1),lh(n,i.containerInfo)}function um(n,i,a,c,d){return Xs(),th(d),i.flags|=256,zt(n,i,a,c),i.child}var kh={dehydrated:null,treeContext:null,retryLane:0};function Rh(n){return{baseLanes:n,cachePool:null,transitions:null}}function cm(n,i,a){var c=i.pendingProps,d=et.current,f=!1,v=(i.flags&128)!==0,T;if((T=v)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(f=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),He(et,d&1),n===null)return eh(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(v=c.children,n=c.fallback,f?(c=i.mode,f=i.child,v={mode:"hidden",children:v},(c&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=v):f=pu(v,c,0,null),n=rs(n,c,a,null),f.return=i,n.return=i,f.sibling=n,i.child=f,i.child.memoizedState=Rh(a),i.memoizedState=kh,n):Ch(i,v));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return jw(n,i,v,c,T,d,a);if(f){f=c.fallback,v=i.mode,d=n.child,T=d.sibling;var R={mode:"hidden",children:c.children};return(v&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=R,i.deletions=null):(c=di(d,R),c.subtreeFlags=d.subtreeFlags&14680064),T!==null?f=di(T,f):(f=rs(f,v,a,null),f.flags|=2),f.return=i,c.return=i,c.sibling=f,i.child=c,c=f,f=i.child,v=n.child.memoizedState,v=v===null?Rh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},f.memoizedState=v,f.childLanes=n.childLanes&~a,i.memoizedState=kh,c}return f=n.child,n=f.sibling,c=di(f,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Ch(n,i){return i=pu({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function tu(n,i,a,c){return c!==null&&th(c),Js(i,n.child,null,a),n=Ch(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function jw(n,i,a,c,d,f,v){if(a)return i.flags&256?(i.flags&=-257,c=Th(Error(t(422))),tu(n,i,v,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(f=c.fallback,d=i.mode,c=pu({mode:"visible",children:c.children},d,0,null),f=rs(f,d,v,null),f.flags|=2,c.return=i,f.return=i,c.sibling=f,i.child=c,(i.mode&1)!==0&&Js(i,n.child,null,v),i.child.memoizedState=Rh(v),i.memoizedState=kh,f);if((i.mode&1)===0)return tu(n,i,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;return c=T,f=Error(t(419)),c=Th(f,c,void 0),tu(n,i,v,c)}if(T=(v&n.childLanes)!==0,qt||T){if(c=wt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==f.retryLane&&(f.retryLane=d,Er(n,d),kn(c,n,d,-1))}return Hh(),c=Th(Error(t(421))),tu(n,i,v,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Zw.bind(null,n),d._reactRetry=i,null):(n=f.treeContext,sn=ti(d.nextSibling),rn=i,Ye=!0,Tn=null,n!==null&&(un[cn++]=vr,un[cn++]=wr,un[cn++]=Gi,vr=n.id,wr=n.overflow,Gi=i),i=Ch(i,c.children),i.flags|=4096,i)}function hm(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),sh(n.return,i,a)}function Ph(n,i,a,c,d){var f=n.memoizedState;f===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(f.isBackwards=i,f.rendering=null,f.renderingStartTime=0,f.last=c,f.tail=a,f.tailMode=d)}function dm(n,i,a){var c=i.pendingProps,d=c.revealOrder,f=c.tail;if(zt(n,i,c.children,a),c=et.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&hm(n,a,i);else if(n.tag===19)hm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(He(et,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Gl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Ph(i,!1,d,a,f);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Gl(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Ph(i,!0,a,null,f);break;case"together":Ph(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function nu(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Ir(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Zi|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=di(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=di(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function zw(n,i,a){switch(i.tag){case 3:lm(i),Xs();break;case 5:kp(i);break;case 1:Ht(i.type)&&Fl(i);break;case 4:lh(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;He(Hl,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(He(et,et.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?cm(n,i,a):(He(et,et.current&1),n=Ir(n,i,a),n!==null?n.sibling:null);He(et,et.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return dm(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),He(et,et.current),c)break;return null;case 22:case 23:return i.lanes=0,sm(n,i,a)}return Ir(n,i,a)}var fm,Nh,pm,mm;fm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Nh=function(){},pm=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Ji(Gn.current);var f=null;switch(a){case"input":d=vs(n,d),c=vs(n,c),f=[];break;case"select":d=ie({},d,{value:void 0}),c=ie({},c,{value:void 0}),f=[];break;case"textarea":d=Do(n,d),c=Do(n,c),f=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ll)}_n(a,c);var v;a=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var T=d[F];for(v in T)T.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?f||(f=[]):(f=f||[]).push(F,null));for(F in c){var R=c[F];if(T=d!=null?d[F]:void 0,c.hasOwnProperty(F)&&R!==T&&(R!=null||T!=null))if(F==="style")if(T){for(v in T)!T.hasOwnProperty(v)||R&&R.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in R)R.hasOwnProperty(v)&&T[v]!==R[v]&&(a||(a={}),a[v]=R[v])}else a||(f||(f=[]),f.push(F,a)),a=R;else F==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,T=T?T.__html:void 0,R!=null&&T!==R&&(f=f||[]).push(F,R)):F==="children"?typeof R!="string"&&typeof R!="number"||(f=f||[]).push(F,""+R):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(R!=null&&F==="onScroll"&&Ke("scroll",n),f||T===R||(f=[])):(f=f||[]).push(F,R))}a&&(f=f||[]).push("style",a);var F=f;(i.updateQueue=F)&&(i.flags|=4)}},mm=function(n,i,a,c){a!==c&&(i.flags|=4)};function _a(n,i){if(!Ye)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Ot(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function Bw(n,i,a){var c=i.pendingProps;switch(Yc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(i),null;case 1:return Ht(i.type)&&bl(),Ot(i),null;case 3:return c=i.stateNode,eo(),Ge($t),Ge(Dt),hh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Bl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Tn!==null&&(zh(Tn),Tn=null))),Nh(n,i),Ot(i),null;case 5:uh(i);var d=Ji(fa.current);if(a=i.type,n!==null&&i.stateNode!=null)pm(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Ot(i),null}if(n=Ji(Gn.current),Bl(i)){c=i.stateNode,a=i.type;var f=i.memoizedProps;switch(c[Kn]=i,c[la]=f,n=(i.mode&1)!==0,a){case"dialog":Ke("cancel",c),Ke("close",c);break;case"iframe":case"object":case"embed":Ke("load",c);break;case"video":case"audio":for(d=0;d<sa.length;d++)Ke(sa[d],c);break;case"source":Ke("error",c);break;case"img":case"image":case"link":Ke("error",c),Ke("load",c);break;case"details":Ke("toggle",c);break;case"input":ol(c,f),Ke("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!f.multiple},Ke("invalid",c);break;case"textarea":Vo(c,f),Ke("invalid",c)}_n(a,f),d=null;for(var v in f)if(f.hasOwnProperty(v)){var T=f[v];v==="children"?typeof T=="string"?c.textContent!==T&&(f.suppressHydrationWarning!==!0&&Ol(c.textContent,T,n),d=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(f.suppressHydrationWarning!==!0&&Ol(c.textContent,T,n),d=["children",""+T]):o.hasOwnProperty(v)&&T!=null&&v==="onScroll"&&Ke("scroll",c)}switch(a){case"input":_s(c),xo(c,f,!0);break;case"textarea":_s(c),Ur(c);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(c.onclick=Ll)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Oo(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[Kn]=i,n[la]=c,fm(n,i,!1,!1),i.stateNode=n;e:{switch(v=Is(a,c),a){case"dialog":Ke("cancel",n),Ke("close",n),d=c;break;case"iframe":case"object":case"embed":Ke("load",n),d=c;break;case"video":case"audio":for(d=0;d<sa.length;d++)Ke(sa[d],n);d=c;break;case"source":Ke("error",n),d=c;break;case"img":case"image":case"link":Ke("error",n),Ke("load",n),d=c;break;case"details":Ke("toggle",n),d=c;break;case"input":ol(n,c),d=vs(n,c),Ke("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ie({},c,{value:void 0}),Ke("invalid",n);break;case"textarea":Vo(n,c),d=Do(n,c),Ke("invalid",n);break;default:d=c}_n(a,d),T=d;for(f in T)if(T.hasOwnProperty(f)){var R=T[f];f==="style"?Ts(n,R):f==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,R!=null&&ll(n,R)):f==="children"?typeof R=="string"?(a!=="textarea"||R!=="")&&Di(n,R):typeof R=="number"&&Di(n,""+R):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(o.hasOwnProperty(f)?R!=null&&f==="onScroll"&&Ke("scroll",n):R!=null&&pe(n,f,R,v))}switch(a){case"input":_s(n),xo(n,c,!1);break;case"textarea":_s(n),Ur(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Ve(c.value));break;case"select":n.multiple=!!c.multiple,f=c.value,f!=null?yn(n,!!c.multiple,f,!1):c.defaultValue!=null&&yn(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Ll)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Ot(i),null;case 6:if(n&&i.stateNode!=null)mm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Ji(fa.current),Ji(Gn.current),Bl(i)){if(c=i.stateNode,a=i.memoizedProps,c[Kn]=i,(f=c.nodeValue!==a)&&(n=rn,n!==null))switch(n.tag){case 3:Ol(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ol(c.nodeValue,a,(n.mode&1)!==0)}f&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Kn]=i,i.stateNode=c}return Ot(i),null;case 13:if(Ge(et),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ye&&sn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)_p(),Xs(),i.flags|=98560,f=!1;else if(f=Bl(i),c!==null&&c.dehydrated!==null){if(n===null){if(!f)throw Error(t(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(t(317));f[Kn]=i}else Xs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ot(i),f=!1}else Tn!==null&&(zh(Tn),Tn=null),f=!0;if(!f)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(et.current&1)!==0?pt===0&&(pt=3):Hh())),i.updateQueue!==null&&(i.flags|=4),Ot(i),null);case 4:return eo(),Nh(n,i),n===null&&oa(i.stateNode.containerInfo),Ot(i),null;case 10:return ih(i.type._context),Ot(i),null;case 17:return Ht(i.type)&&bl(),Ot(i),null;case 19:if(Ge(et),f=i.memoizedState,f===null)return Ot(i),null;if(c=(i.flags&128)!==0,v=f.rendering,v===null)if(c)_a(f,!1);else{if(pt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(v=Gl(n),v!==null){for(i.flags|=128,_a(f,!1),c=v.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)f=a,n=c,f.flags&=14680066,v=f.alternate,v===null?(f.childLanes=0,f.lanes=n,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=v.childLanes,f.lanes=v.lanes,f.child=v.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=v.memoizedProps,f.memoizedState=v.memoizedState,f.updateQueue=v.updateQueue,f.type=v.type,n=v.dependencies,f.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return He(et,et.current&1|2),i.child}n=n.sibling}f.tail!==null&&We()>io&&(i.flags|=128,c=!0,_a(f,!1),i.lanes=4194304)}else{if(!c)if(n=Gl(v),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),_a(f,!0),f.tail===null&&f.tailMode==="hidden"&&!v.alternate&&!Ye)return Ot(i),null}else 2*We()-f.renderingStartTime>io&&a!==1073741824&&(i.flags|=128,c=!0,_a(f,!1),i.lanes=4194304);f.isBackwards?(v.sibling=i.child,i.child=v):(a=f.last,a!==null?a.sibling=v:i.child=v,f.last=v)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=We(),i.sibling=null,a=et.current,He(et,c?a&1|2:a&1),i):(Ot(i),null);case 22:case 23:return $h(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(on&1073741824)!==0&&(Ot(i),i.subtreeFlags&6&&(i.flags|=8192)):Ot(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function $w(n,i){switch(Yc(i),i.tag){case 1:return Ht(i.type)&&bl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return eo(),Ge($t),Ge(Dt),hh(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return uh(i),null;case 13:if(Ge(et),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Xs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ge(et),null;case 4:return eo(),null;case 10:return ih(i.type._context),null;case 22:case 23:return $h(),null;case 24:return null;default:return null}}var ru=!1,Lt=!1,Hw=typeof WeakSet=="function"?WeakSet:Set,se=null;function no(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){rt(n,i,c)}else a.current=null}function xh(n,i,a){try{a()}catch(c){rt(n,i,c)}}var gm=!1;function qw(n,i){if($c=pr,n=Gf(),Lc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,f=c.focusNode;c=c.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,T=-1,R=-1,F=0,W=0,K=n,q=null;t:for(;;){for(var ne;K!==a||d!==0&&K.nodeType!==3||(T=v+d),K!==f||c!==0&&K.nodeType!==3||(R=v+c),K.nodeType===3&&(v+=K.nodeValue.length),(ne=K.firstChild)!==null;)q=K,K=ne;for(;;){if(K===n)break t;if(q===a&&++F===d&&(T=v),q===f&&++W===c&&(R=v),(ne=K.nextSibling)!==null)break;K=q,q=K.parentNode}K=ne}a=T===-1||R===-1?null:{start:T,end:R}}else a=null}a=a||{start:0,end:0}}else a=null;for(Hc={focusedElem:n,selectionRange:a},pr=!1,se=i;se!==null;)if(i=se,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,se=n;else for(;se!==null;){i=se;try{var oe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(oe!==null){var ae=oe.memoizedProps,ot=oe.memoizedState,O=i.stateNode,N=O.getSnapshotBeforeUpdate(i.elementType===i.type?ae:In(i.type,ae),ot);O.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var b=i.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Q){rt(i,i.return,Q)}if(n=i.sibling,n!==null){n.return=i.return,se=n;break}se=i.return}return oe=gm,gm=!1,oe}function va(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var f=d.destroy;d.destroy=void 0,f!==void 0&&xh(i,a,f)}d=d.next}while(d!==c)}}function iu(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Dh(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function ym(n){var i=n.alternate;i!==null&&(n.alternate=null,ym(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Kn],delete i[la],delete i[Gc],delete i[Rw],delete i[Cw])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function _m(n){return n.tag===5||n.tag===3||n.tag===4}function vm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||_m(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Vh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Ll));else if(c!==4&&(n=n.child,n!==null))for(Vh(n,i,a),n=n.sibling;n!==null;)Vh(n,i,a),n=n.sibling}function Oh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Oh(n,i,a),n=n.sibling;n!==null;)Oh(n,i,a),n=n.sibling}var At=null,Sn=!1;function ai(n,i,a){for(a=a.child;a!==null;)wm(n,i,a),a=a.sibling}function wm(n,i,a){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(bi,a)}catch{}switch(a.tag){case 5:Lt||no(a,i);case 6:var c=At,d=Sn;At=null,ai(n,i,a),At=c,Sn=d,At!==null&&(Sn?(n=At,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):At.removeChild(a.stateNode));break;case 18:At!==null&&(Sn?(n=At,a=a.stateNode,n.nodeType===8?Kc(n.parentNode,a):n.nodeType===1&&Kc(n,a),Jr(n)):Kc(At,a.stateNode));break;case 4:c=At,d=Sn,At=a.stateNode.containerInfo,Sn=!0,ai(n,i,a),At=c,Sn=d;break;case 0:case 11:case 14:case 15:if(!Lt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var f=d,v=f.destroy;f=f.tag,v!==void 0&&((f&2)!==0||(f&4)!==0)&&xh(a,i,v),d=d.next}while(d!==c)}ai(n,i,a);break;case 1:if(!Lt&&(no(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(T){rt(a,i,T)}ai(n,i,a);break;case 21:ai(n,i,a);break;case 22:a.mode&1?(Lt=(c=Lt)||a.memoizedState!==null,ai(n,i,a),Lt=c):ai(n,i,a);break;default:ai(n,i,a)}}function Em(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Hw),i.forEach(function(c){var d=eE.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function An(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var f=n,v=i,T=v;e:for(;T!==null;){switch(T.tag){case 5:At=T.stateNode,Sn=!1;break e;case 3:At=T.stateNode.containerInfo,Sn=!0;break e;case 4:At=T.stateNode.containerInfo,Sn=!0;break e}T=T.return}if(At===null)throw Error(t(160));wm(f,v,d),At=null,Sn=!1;var R=d.alternate;R!==null&&(R.return=null),d.return=null}catch(F){rt(d,i,F)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Tm(i,n),i=i.sibling}function Tm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(An(i,n),Xn(n),c&4){try{va(3,n,n.return),iu(3,n)}catch(ae){rt(n,n.return,ae)}try{va(5,n,n.return)}catch(ae){rt(n,n.return,ae)}}break;case 1:An(i,n),Xn(n),c&512&&a!==null&&no(a,a.return);break;case 5:if(An(i,n),Xn(n),c&512&&a!==null&&no(a,a.return),n.flags&32){var d=n.stateNode;try{Di(d,"")}catch(ae){rt(n,n.return,ae)}}if(c&4&&(d=n.stateNode,d!=null)){var f=n.memoizedProps,v=a!==null?a.memoizedProps:f,T=n.type,R=n.updateQueue;if(n.updateQueue=null,R!==null)try{T==="input"&&f.type==="radio"&&f.name!=null&&ws(d,f),Is(T,v);var F=Is(T,f);for(v=0;v<R.length;v+=2){var W=R[v],K=R[v+1];W==="style"?Ts(d,K):W==="dangerouslySetInnerHTML"?ll(d,K):W==="children"?Di(d,K):pe(d,W,K,F)}switch(T){case"input":xi(d,f);break;case"textarea":al(d,f);break;case"select":var q=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!f.multiple;var ne=f.value;ne!=null?yn(d,!!f.multiple,ne,!1):q!==!!f.multiple&&(f.defaultValue!=null?yn(d,!!f.multiple,f.defaultValue,!0):yn(d,!!f.multiple,f.multiple?[]:"",!1))}d[la]=f}catch(ae){rt(n,n.return,ae)}}break;case 6:if(An(i,n),Xn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,f=n.memoizedProps;try{d.nodeValue=f}catch(ae){rt(n,n.return,ae)}}break;case 3:if(An(i,n),Xn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Jr(i.containerInfo)}catch(ae){rt(n,n.return,ae)}break;case 4:An(i,n),Xn(n);break;case 13:An(i,n),Xn(n),d=n.child,d.flags&8192&&(f=d.memoizedState!==null,d.stateNode.isHidden=f,!f||d.alternate!==null&&d.alternate.memoizedState!==null||(bh=We())),c&4&&Em(n);break;case 22:if(W=a!==null&&a.memoizedState!==null,n.mode&1?(Lt=(F=Lt)||W,An(i,n),Lt=F):An(i,n),Xn(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!W&&(n.mode&1)!==0)for(se=n,W=n.child;W!==null;){for(K=se=W;se!==null;){switch(q=se,ne=q.child,q.tag){case 0:case 11:case 14:case 15:va(4,q,q.return);break;case 1:no(q,q.return);var oe=q.stateNode;if(typeof oe.componentWillUnmount=="function"){c=q,a=q.return;try{i=c,oe.props=i.memoizedProps,oe.state=i.memoizedState,oe.componentWillUnmount()}catch(ae){rt(c,a,ae)}}break;case 5:no(q,q.return);break;case 22:if(q.memoizedState!==null){Am(K);continue}}ne!==null?(ne.return=q,se=ne):Am(K)}W=W.sibling}e:for(W=null,K=n;;){if(K.tag===5){if(W===null){W=K;try{d=K.stateNode,F?(f=d.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(T=K.stateNode,R=K.memoizedProps.style,v=R!=null&&R.hasOwnProperty("display")?R.display:null,T.style.display=Br("display",v))}catch(ae){rt(n,n.return,ae)}}}else if(K.tag===6){if(W===null)try{K.stateNode.nodeValue=F?"":K.memoizedProps}catch(ae){rt(n,n.return,ae)}}else if((K.tag!==22&&K.tag!==23||K.memoizedState===null||K===n)&&K.child!==null){K.child.return=K,K=K.child;continue}if(K===n)break e;for(;K.sibling===null;){if(K.return===null||K.return===n)break e;W===K&&(W=null),K=K.return}W===K&&(W=null),K.sibling.return=K.return,K=K.sibling}}break;case 19:An(i,n),Xn(n),c&4&&Em(n);break;case 21:break;default:An(i,n),Xn(n)}}function Xn(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(_m(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Di(d,""),c.flags&=-33);var f=vm(n);Oh(n,f,d);break;case 3:case 4:var v=c.stateNode.containerInfo,T=vm(n);Vh(n,T,v);break;default:throw Error(t(161))}}catch(R){rt(n,n.return,R)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Ww(n,i,a){se=n,Im(n)}function Im(n,i,a){for(var c=(n.mode&1)!==0;se!==null;){var d=se,f=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||ru;if(!v){var T=d.alternate,R=T!==null&&T.memoizedState!==null||Lt;T=ru;var F=Lt;if(ru=v,(Lt=R)&&!F)for(se=d;se!==null;)v=se,R=v.child,v.tag===22&&v.memoizedState!==null?km(d):R!==null?(R.return=v,se=R):km(d);for(;f!==null;)se=f,Im(f),f=f.sibling;se=d,ru=T,Lt=F}Sm(n)}else(d.subtreeFlags&8772)!==0&&f!==null?(f.return=d,se=f):Sm(n)}}function Sm(n){for(;se!==null;){var i=se;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Lt||iu(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Lt)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:In(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var f=i.updateQueue;f!==null&&Ap(i,f,c);break;case 3:var v=i.updateQueue;if(v!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Ap(i,v,a)}break;case 5:var T=i.stateNode;if(a===null&&i.flags&4){a=T;var R=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":R.autoFocus&&a.focus();break;case"img":R.src&&(a.src=R.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var F=i.alternate;if(F!==null){var W=F.memoizedState;if(W!==null){var K=W.dehydrated;K!==null&&Jr(K)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Lt||i.flags&512&&Dh(i)}catch(q){rt(i,i.return,q)}}if(i===n){se=null;break}if(a=i.sibling,a!==null){a.return=i.return,se=a;break}se=i.return}}function Am(n){for(;se!==null;){var i=se;if(i===n){se=null;break}var a=i.sibling;if(a!==null){a.return=i.return,se=a;break}se=i.return}}function km(n){for(;se!==null;){var i=se;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{iu(4,i)}catch(R){rt(i,a,R)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(R){rt(i,d,R)}}var f=i.return;try{Dh(i)}catch(R){rt(i,f,R)}break;case 5:var v=i.return;try{Dh(i)}catch(R){rt(i,v,R)}}}catch(R){rt(i,i.return,R)}if(i===n){se=null;break}var T=i.sibling;if(T!==null){T.return=i.return,se=T;break}se=i.return}}var Kw=Math.ceil,su=Ne.ReactCurrentDispatcher,Lh=Ne.ReactCurrentOwner,fn=Ne.ReactCurrentBatchConfig,Oe=0,wt=null,ct=null,kt=0,on=0,ro=ni(0),pt=0,wa=null,Zi=0,ou=0,Mh=0,Ea=null,Wt=null,bh=0,io=1/0,Sr=null,au=!1,Fh=null,li=null,lu=!1,ui=null,uu=0,Ta=0,Uh=null,cu=-1,hu=0;function Bt(){return(Oe&6)!==0?We():cu!==-1?cu:cu=We()}function ci(n){return(n.mode&1)===0?1:(Oe&2)!==0&&kt!==0?kt&-kt:Nw.transition!==null?(hu===0&&(hu=$o()),hu):(n=xe,n!==0||(n=window.event,n=n===void 0?16:Vs(n.type)),n)}function kn(n,i,a,c){if(50<Ta)throw Ta=0,Uh=null,Error(t(185));zi(n,a,c),((Oe&2)===0||n!==wt)&&(n===wt&&((Oe&2)===0&&(ou|=a),pt===4&&hi(n,kt)),Kt(n,c),a===1&&Oe===0&&(i.mode&1)===0&&(io=We()+500,Ul&&ii()))}function Kt(n,i){var a=n.callbackNode;ji(n,i);var c=hr(n,n===wt?kt:0);if(c===0)a!==null&&ks(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&ks(a),i===1)n.tag===0?Pw(Cm.bind(null,n)):fp(Cm.bind(null,n)),Aw(function(){(Oe&6)===0&&ii()}),a=null;else{switch(bn(c)){case 1:a=Rs;break;case 4:a=jo;break;case 16:a=Mi;break;case 536870912:a=Cs;break;default:a=Mi}a=Mm(a,Rm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Rm(n,i){if(cu=-1,hu=0,(Oe&6)!==0)throw Error(t(327));var a=n.callbackNode;if(so()&&n.callbackNode!==a)return null;var c=hr(n,n===wt?kt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=du(n,c);else{i=c;var d=Oe;Oe|=2;var f=Nm();(wt!==n||kt!==i)&&(Sr=null,io=We()+500,ts(n,i));do try{Xw();break}catch(T){Pm(n,T)}while(!0);rh(),su.current=f,Oe=d,ct!==null?i=0:(wt=null,kt=0,i=pt)}if(i!==0){if(i===2&&(d=Bo(n),d!==0&&(c=d,i=jh(n,d))),i===1)throw a=wa,ts(n,0),hi(n,c),Kt(n,We()),a;if(i===6)hi(n,c);else{if(d=n.current.alternate,(c&30)===0&&!Gw(d)&&(i=du(n,c),i===2&&(f=Bo(n),f!==0&&(c=f,i=jh(n,f))),i===1))throw a=wa,ts(n,0),hi(n,c),Kt(n,We()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:ns(n,Wt,Sr);break;case 3:if(hi(n,c),(c&130023424)===c&&(i=bh+500-We(),10<i)){if(hr(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Bt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Wc(ns.bind(null,n,Wt,Sr),i);break}ns(n,Wt,Sr);break;case 4:if(hi(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var v=31-Yt(c);f=1<<v,v=i[v],v>d&&(d=v),c&=~f}if(c=d,c=We()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Kw(c/1960))-c,10<c){n.timeoutHandle=Wc(ns.bind(null,n,Wt,Sr),c);break}ns(n,Wt,Sr);break;case 5:ns(n,Wt,Sr);break;default:throw Error(t(329))}}}return Kt(n,We()),n.callbackNode===a?Rm.bind(null,n):null}function jh(n,i){var a=Ea;return n.current.memoizedState.isDehydrated&&(ts(n,i).flags|=256),n=du(n,i),n!==2&&(i=Wt,Wt=a,i!==null&&zh(i)),n}function zh(n){Wt===null?Wt=n:Wt.push.apply(Wt,n)}function Gw(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],f=d.getSnapshot;d=d.value;try{if(!En(f(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function hi(n,i){for(i&=~Mh,i&=~ou,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Yt(i),c=1<<a;n[a]=-1,i&=~c}}function Cm(n){if((Oe&6)!==0)throw Error(t(327));so();var i=hr(n,0);if((i&1)===0)return Kt(n,We()),null;var a=du(n,i);if(n.tag!==0&&a===2){var c=Bo(n);c!==0&&(i=c,a=jh(n,c))}if(a===1)throw a=wa,ts(n,0),hi(n,i),Kt(n,We()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,ns(n,Wt,Sr),Kt(n,We()),null}function Bh(n,i){var a=Oe;Oe|=1;try{return n(i)}finally{Oe=a,Oe===0&&(io=We()+500,Ul&&ii())}}function es(n){ui!==null&&ui.tag===0&&(Oe&6)===0&&so();var i=Oe;Oe|=1;var a=fn.transition,c=xe;try{if(fn.transition=null,xe=1,n)return n()}finally{xe=c,fn.transition=a,Oe=i,(Oe&6)===0&&ii()}}function $h(){on=ro.current,Ge(ro)}function ts(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Sw(a)),ct!==null)for(a=ct.return;a!==null;){var c=a;switch(Yc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&bl();break;case 3:eo(),Ge($t),Ge(Dt),hh();break;case 5:uh(c);break;case 4:eo();break;case 13:Ge(et);break;case 19:Ge(et);break;case 10:ih(c.type._context);break;case 22:case 23:$h()}a=a.return}if(wt=n,ct=n=di(n.current,null),kt=on=i,pt=0,wa=null,Mh=ou=Zi=0,Wt=Ea=null,Xi!==null){for(i=0;i<Xi.length;i++)if(a=Xi[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,f=a.pending;if(f!==null){var v=f.next;f.next=d,c.next=v}a.pending=c}Xi=null}return n}function Pm(n,i){do{var a=ct;try{if(rh(),Ql.current=Zl,Xl){for(var c=tt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Xl=!1}if(Yi=0,vt=ft=tt=null,pa=!1,ma=0,Lh.current=null,a===null||a.return===null){pt=1,wa=i,ct=null;break}e:{var f=n,v=a.return,T=a,R=i;if(i=kt,T.flags|=32768,R!==null&&typeof R=="object"&&typeof R.then=="function"){var F=R,W=T,K=W.tag;if((W.mode&1)===0&&(K===0||K===11||K===15)){var q=W.alternate;q?(W.updateQueue=q.updateQueue,W.memoizedState=q.memoizedState,W.lanes=q.lanes):(W.updateQueue=null,W.memoizedState=null)}var ne=em(v);if(ne!==null){ne.flags&=-257,tm(ne,v,T,f,i),ne.mode&1&&Zp(f,F,i),i=ne,R=F;var oe=i.updateQueue;if(oe===null){var ae=new Set;ae.add(R),i.updateQueue=ae}else oe.add(R);break e}else{if((i&1)===0){Zp(f,F,i),Hh();break e}R=Error(t(426))}}else if(Ye&&T.mode&1){var ot=em(v);if(ot!==null){(ot.flags&65536)===0&&(ot.flags|=256),tm(ot,v,T,f,i),th(to(R,T));break e}}f=R=to(R,T),pt!==4&&(pt=2),Ea===null?Ea=[f]:Ea.push(f),f=v;do{switch(f.tag){case 3:f.flags|=65536,i&=-i,f.lanes|=i;var O=Jp(f,R,i);Sp(f,O);break e;case 1:T=R;var N=f.type,b=f.stateNode;if((f.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(li===null||!li.has(b)))){f.flags|=65536,i&=-i,f.lanes|=i;var Q=Yp(f,T,i);Sp(f,Q);break e}}f=f.return}while(f!==null)}Dm(a)}catch(ue){i=ue,ct===a&&a!==null&&(ct=a=a.return);continue}break}while(!0)}function Nm(){var n=su.current;return su.current=Zl,n===null?Zl:n}function Hh(){(pt===0||pt===3||pt===2)&&(pt=4),wt===null||(Zi&268435455)===0&&(ou&268435455)===0||hi(wt,kt)}function du(n,i){var a=Oe;Oe|=2;var c=Nm();(wt!==n||kt!==i)&&(Sr=null,ts(n,i));do try{Qw();break}catch(d){Pm(n,d)}while(!0);if(rh(),Oe=a,su.current=c,ct!==null)throw Error(t(261));return wt=null,kt=0,pt}function Qw(){for(;ct!==null;)xm(ct)}function Xw(){for(;ct!==null&&!Li();)xm(ct)}function xm(n){var i=Lm(n.alternate,n,on);n.memoizedProps=n.pendingProps,i===null?Dm(n):ct=i,Lh.current=null}function Dm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Bw(a,i,on),a!==null){ct=a;return}}else{if(a=$w(a,i),a!==null){a.flags&=32767,ct=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{pt=6,ct=null;return}}if(i=i.sibling,i!==null){ct=i;return}ct=i=n}while(i!==null);pt===0&&(pt=5)}function ns(n,i,a){var c=xe,d=fn.transition;try{fn.transition=null,xe=1,Jw(n,i,a,c)}finally{fn.transition=d,xe=c}return null}function Jw(n,i,a,c){do so();while(ui!==null);if((Oe&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var f=a.lanes|a.childLanes;if(Nc(n,f),n===wt&&(ct=wt=null,kt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||lu||(lu=!0,Mm(Mi,function(){return so(),null})),f=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||f){f=fn.transition,fn.transition=null;var v=xe;xe=1;var T=Oe;Oe|=4,Lh.current=null,qw(n,a),Tm(a,n),yw(Hc),pr=!!$c,Hc=$c=null,n.current=a,Ww(a),cr(),Oe=T,xe=v,fn.transition=f}else n.current=a;if(lu&&(lu=!1,ui=n,uu=d),f=n.pendingLanes,f===0&&(li=null),vl(a.stateNode),Kt(n,We()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(au)throw au=!1,n=Fh,Fh=null,n;return(uu&1)!==0&&n.tag!==0&&so(),f=n.pendingLanes,(f&1)!==0?n===Uh?Ta++:(Ta=0,Uh=n):Ta=0,ii(),null}function so(){if(ui!==null){var n=bn(uu),i=fn.transition,a=xe;try{if(fn.transition=null,xe=16>n?16:n,ui===null)var c=!1;else{if(n=ui,ui=null,uu=0,(Oe&6)!==0)throw Error(t(331));var d=Oe;for(Oe|=4,se=n.current;se!==null;){var f=se,v=f.child;if((se.flags&16)!==0){var T=f.deletions;if(T!==null){for(var R=0;R<T.length;R++){var F=T[R];for(se=F;se!==null;){var W=se;switch(W.tag){case 0:case 11:case 15:va(8,W,f)}var K=W.child;if(K!==null)K.return=W,se=K;else for(;se!==null;){W=se;var q=W.sibling,ne=W.return;if(ym(W),W===F){se=null;break}if(q!==null){q.return=ne,se=q;break}se=ne}}}var oe=f.alternate;if(oe!==null){var ae=oe.child;if(ae!==null){oe.child=null;do{var ot=ae.sibling;ae.sibling=null,ae=ot}while(ae!==null)}}se=f}}if((f.subtreeFlags&2064)!==0&&v!==null)v.return=f,se=v;else e:for(;se!==null;){if(f=se,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:va(9,f,f.return)}var O=f.sibling;if(O!==null){O.return=f.return,se=O;break e}se=f.return}}var N=n.current;for(se=N;se!==null;){v=se;var b=v.child;if((v.subtreeFlags&2064)!==0&&b!==null)b.return=v,se=b;else e:for(v=N;se!==null;){if(T=se,(T.flags&2048)!==0)try{switch(T.tag){case 0:case 11:case 15:iu(9,T)}}catch(ue){rt(T,T.return,ue)}if(T===v){se=null;break e}var Q=T.sibling;if(Q!==null){Q.return=T.return,se=Q;break e}se=T.return}}if(Oe=d,ii(),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(bi,n)}catch{}c=!0}return c}finally{xe=a,fn.transition=i}}return!1}function Vm(n,i,a){i=to(a,i),i=Jp(n,i,1),n=oi(n,i,1),i=Bt(),n!==null&&(zi(n,1,i),Kt(n,i))}function rt(n,i,a){if(n.tag===3)Vm(n,n,a);else for(;i!==null;){if(i.tag===3){Vm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(li===null||!li.has(c))){n=to(a,n),n=Yp(i,n,1),i=oi(i,n,1),n=Bt(),i!==null&&(zi(i,1,n),Kt(i,n));break}}i=i.return}}function Yw(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Bt(),n.pingedLanes|=n.suspendedLanes&a,wt===n&&(kt&a)===a&&(pt===4||pt===3&&(kt&130023424)===kt&&500>We()-bh?ts(n,0):Mh|=a),Kt(n,i)}function Om(n,i){i===0&&((n.mode&1)===0?i=1:(i=Gr,Gr<<=1,(Gr&130023424)===0&&(Gr=4194304)));var a=Bt();n=Er(n,i),n!==null&&(zi(n,i,a),Kt(n,a))}function Zw(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Om(n,a)}function eE(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Om(n,a)}var Lm;Lm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||$t.current)qt=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return qt=!1,zw(n,i,a);qt=(n.flags&131072)!==0}else qt=!1,Ye&&(i.flags&1048576)!==0&&pp(i,zl,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;nu(n,i),n=i.pendingProps;var d=Ks(i,Dt.current);Zs(i,a),d=ph(null,i,c,n,d,a);var f=mh();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Ht(c)?(f=!0,Fl(i)):f=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,ah(i),d.updater=eu,i.stateNode=d,d._reactInternals=i,Eh(i,c,n,a),i=Ah(null,i,c,!0,f,a)):(i.tag=0,Ye&&f&&Jc(i),zt(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(nu(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=nE(c),n=In(c,n),d){case 0:i=Sh(null,i,c,n,a);break e;case 1:i=am(null,i,c,n,a);break e;case 11:i=nm(null,i,c,n,a);break e;case 14:i=rm(null,i,c,In(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:In(c,d),Sh(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:In(c,d),am(n,i,c,d,a);case 3:e:{if(lm(i),n===null)throw Error(t(387));c=i.pendingProps,f=i.memoizedState,d=f.element,Ip(n,i),Kl(i,c,null,a);var v=i.memoizedState;if(c=v.element,f.isDehydrated)if(f={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},i.updateQueue.baseState=f,i.memoizedState=f,i.flags&256){d=to(Error(t(423)),i),i=um(n,i,c,a,d);break e}else if(c!==d){d=to(Error(t(424)),i),i=um(n,i,c,a,d);break e}else for(sn=ti(i.stateNode.containerInfo.firstChild),rn=i,Ye=!0,Tn=null,a=Ep(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Xs(),c===d){i=Ir(n,i,a);break e}zt(n,i,c,a)}i=i.child}return i;case 5:return kp(i),n===null&&eh(i),c=i.type,d=i.pendingProps,f=n!==null?n.memoizedProps:null,v=d.children,qc(c,d)?v=null:f!==null&&qc(c,f)&&(i.flags|=32),om(n,i),zt(n,i,v,a),i.child;case 6:return n===null&&eh(i),null;case 13:return cm(n,i,a);case 4:return lh(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Js(i,null,c,a):zt(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:In(c,d),nm(n,i,c,d,a);case 7:return zt(n,i,i.pendingProps,a),i.child;case 8:return zt(n,i,i.pendingProps.children,a),i.child;case 12:return zt(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,f=i.memoizedProps,v=d.value,He(Hl,c._currentValue),c._currentValue=v,f!==null)if(En(f.value,v)){if(f.children===d.children&&!$t.current){i=Ir(n,i,a);break e}}else for(f=i.child,f!==null&&(f.return=i);f!==null;){var T=f.dependencies;if(T!==null){v=f.child;for(var R=T.firstContext;R!==null;){if(R.context===c){if(f.tag===1){R=Tr(-1,a&-a),R.tag=2;var F=f.updateQueue;if(F!==null){F=F.shared;var W=F.pending;W===null?R.next=R:(R.next=W.next,W.next=R),F.pending=R}}f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),sh(f.return,a,i),T.lanes|=a;break}R=R.next}}else if(f.tag===10)v=f.type===i.type?null:f.child;else if(f.tag===18){if(v=f.return,v===null)throw Error(t(341));v.lanes|=a,T=v.alternate,T!==null&&(T.lanes|=a),sh(v,a,i),v=f.sibling}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===i){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}zt(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Zs(i,a),d=hn(d),c=c(d),i.flags|=1,zt(n,i,c,a),i.child;case 14:return c=i.type,d=In(c,i.pendingProps),d=In(c.type,d),rm(n,i,c,d,a);case 15:return im(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:In(c,d),nu(n,i),i.tag=1,Ht(c)?(n=!0,Fl(i)):n=!1,Zs(i,a),Qp(i,c,d),Eh(i,c,d,a),Ah(null,i,c,!0,n,a);case 19:return dm(n,i,a);case 22:return sm(n,i,a)}throw Error(t(156,i.tag))};function Mm(n,i){return Uo(n,i)}function tE(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(n,i,a,c){return new tE(n,i,a,c)}function qh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function nE(n){if(typeof n=="function")return qh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===V)return 11;if(n===_t)return 14}return 2}function di(n,i){var a=n.alternate;return a===null?(a=pn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function fu(n,i,a,c,d,f){var v=2;if(c=n,typeof n=="function")qh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case C:return rs(a.children,d,f,i);case S:v=8,d|=8;break;case k:return n=pn(12,a,i,d|2),n.elementType=k,n.lanes=f,n;case A:return n=pn(13,a,i,d),n.elementType=A,n.lanes=f,n;case $e:return n=pn(19,a,i,d),n.elementType=$e,n.lanes=f,n;case Je:return pu(a,d,f,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case x:v=10;break e;case P:v=9;break e;case V:v=11;break e;case _t:v=14;break e;case Nt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=pn(v,a,i,d),i.elementType=n,i.type=c,i.lanes=f,i}function rs(n,i,a,c){return n=pn(7,n,c,i),n.lanes=a,n}function pu(n,i,a,c){return n=pn(22,n,c,i),n.elementType=Je,n.lanes=a,n.stateNode={isHidden:!1},n}function Wh(n,i,a){return n=pn(6,n,null,i),n.lanes=a,n}function Kh(n,i,a){return i=pn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function rE(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ho(0),this.expirationTimes=Ho(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ho(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Gh(n,i,a,c,d,f,v,T,R){return n=new rE(n,i,a,T,R),i===1?(i=1,f===!0&&(i|=8)):i=0,f=pn(3,null,null,i),n.current=f,f.stateNode=n,f.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},ah(f),n}function iE(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ke,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function bm(n){if(!n)return ri;n=n._reactInternals;e:{if(vn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Ht(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Ht(a))return hp(n,a,i)}return i}function Fm(n,i,a,c,d,f,v,T,R){return n=Gh(a,c,!0,n,d,f,v,T,R),n.context=bm(null),a=n.current,c=Bt(),d=ci(a),f=Tr(c,d),f.callback=i??null,oi(a,f,d),n.current.lanes=d,zi(n,d,c),Kt(n,c),n}function mu(n,i,a,c){var d=i.current,f=Bt(),v=ci(d);return a=bm(a),i.context===null?i.context=a:i.pendingContext=a,i=Tr(f,v),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=oi(d,i,v),n!==null&&(kn(n,d,v,f),Wl(n,d,v)),v}function gu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Um(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Qh(n,i){Um(n,i),(n=n.alternate)&&Um(n,i)}function sE(){return null}var jm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Xh(n){this._internalRoot=n}yu.prototype.render=Xh.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));mu(n,i,null,null)},yu.prototype.unmount=Xh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;es(function(){mu(null,n,null,null)}),i[yr]=null}};function yu(n){this._internalRoot=n}yu.prototype.unstable_scheduleHydration=function(n){if(n){var i=Go();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Zt.length&&i!==0&&i<Zt[a].priority;a++);Zt.splice(a,0,n),a===0&&xs(n)}};function Jh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function _u(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function zm(){}function oE(n,i,a,c,d){if(d){if(typeof c=="function"){var f=c;c=function(){var F=gu(v);f.call(F)}}var v=Fm(i,c,n,0,null,!1,!1,"",zm);return n._reactRootContainer=v,n[yr]=v.current,oa(n.nodeType===8?n.parentNode:n),es(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var T=c;c=function(){var F=gu(R);T.call(F)}}var R=Gh(n,0,!1,null,null,!1,!1,"",zm);return n._reactRootContainer=R,n[yr]=R.current,oa(n.nodeType===8?n.parentNode:n),es(function(){mu(i,R,a,c)}),R}function vu(n,i,a,c,d){var f=a._reactRootContainer;if(f){var v=f;if(typeof d=="function"){var T=d;d=function(){var R=gu(v);T.call(R)}}mu(i,v,n,d)}else v=oE(a,i,n,d,c);return gu(v)}Wo=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=be(i.pendingLanes);a!==0&&(qo(i,a|1),Kt(i,We()),(Oe&6)===0&&(io=We()+500,ii()))}break;case 13:es(function(){var c=Er(n,1);if(c!==null){var d=Bt();kn(c,n,1,d)}}),Qh(n,1)}},Ps=function(n){if(n.tag===13){var i=Er(n,134217728);if(i!==null){var a=Bt();kn(i,n,134217728,a)}Qh(n,134217728)}},Ko=function(n){if(n.tag===13){var i=ci(n),a=Er(n,i);if(a!==null){var c=Bt();kn(a,n,i,c)}Qh(n,i)}},Go=function(){return xe},Qo=function(n,i){var a=xe;try{return xe=n,i()}finally{xe=a}},ar=function(n,i,a){switch(i){case"input":if(xi(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Ml(c);if(!d)throw Error(t(90));No(c),xi(c,d)}}}break;case"textarea":al(n,a);break;case"select":i=a.value,i!=null&&yn(n,!!a.multiple,i,!1)}},cl=Bh,hl=es;var aE={usingClientEntryPoint:!1,Events:[ua,qs,Ml,Hr,qr,Bh]},Ia={findFiberByHostInstance:Wi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lE={bundleType:Ia.bundleType,version:Ia.version,rendererPackageName:Ia.rendererPackageName,rendererConfig:Ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ne.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=_l(n),n===null?null:n.stateNode},findFiberByHostInstance:Ia.findFiberByHostInstance||sE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wu.isDisabled&&wu.supportsFiber)try{bi=wu.inject(lE),Jt=wu}catch{}}return Gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aE,Gt.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jh(i))throw Error(t(200));return iE(n,i,null,a)},Gt.createRoot=function(n,i){if(!Jh(n))throw Error(t(299));var a=!1,c="",d=jm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Gh(n,1,!1,null,null,a,!1,c,d),n[yr]=i.current,oa(n.nodeType===8?n.parentNode:n),new Xh(i)},Gt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=_l(i),n=n===null?null:n.stateNode,n},Gt.flushSync=function(n){return es(n)},Gt.hydrate=function(n,i,a){if(!_u(i))throw Error(t(200));return vu(null,n,i,!0,a)},Gt.hydrateRoot=function(n,i,a){if(!Jh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,f="",v=jm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),i=Fm(i,null,n,1,a??null,d,!1,f,v),n[yr]=i.current,oa(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new yu(i)},Gt.render=function(n,i,a){if(!_u(i))throw Error(t(200));return vu(null,n,i,!1,a)},Gt.unmountComponentAtNode=function(n){if(!_u(n))throw Error(t(40));return n._reactRootContainer?(es(function(){vu(null,null,n,!1,function(){n._reactRootContainer=null,n[yr]=null})}),!0):!1},Gt.unstable_batchedUpdates=Bh,Gt.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!_u(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return vu(n,i,a,!1,c)},Gt.version="18.3.1-next-f1338f8080-20240426",Gt}var Qm;function yE(){if(Qm)return ed.exports;Qm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),ed.exports=gE(),ed.exports}var Xm;function _E(){if(Xm)return Eu;Xm=1;var r=yE();return Eu.createRoot=r.createRoot,Eu.hydrateRoot=r.hydrateRoot,Eu}var vE=_E();const wE=cE(vE);var qe=Bd();const EE=()=>{};var Jm={};/**
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
 */const ky=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},TE=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[t++],h=r[t++],m=r[t++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},$d={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],h=o+1<r.length,m=h?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,E=u>>2,I=(u&3)<<4|m>>4;let L=(m&15)<<2|_>>6,z=_&63;g||(z=64,h||(L=64)),s.push(t[E],t[I],t[L],t[z])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(ky(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):TE(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=t[r.charAt(o++)],m=o<r.length?t[r.charAt(o)]:0;++o;const _=o<r.length?t[r.charAt(o)]:64;++o;const I=o<r.length?t[r.charAt(o)]:64;if(++o,u==null||m==null||_==null||I==null)throw new IE;const L=u<<2|m>>4;if(s.push(L),_!==64){const z=m<<4&240|_>>2;if(s.push(z),I!==64){const J=_<<6&192|I;s.push(J)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class IE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const SE=function(r){const e=ky(r);return $d.encodeByteArray(e,!0)},Uu=function(r){return SE(r).replace(/\./g,"")},Ry=function(r){try{return $d.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function AE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const kE=()=>AE().__FIREBASE_DEFAULTS__,RE=()=>{if(typeof process>"u"||typeof Jm>"u")return;const r=Jm.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},CE=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Ry(r[1]);return e&&JSON.parse(e)},uc=()=>{try{return EE()||kE()||RE()||CE()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Cy=r=>{var e,t;return(t=(e=uc())==null?void 0:e.emulatorHosts)==null?void 0:t[r]},PE=r=>{const e=Cy(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Py=()=>{var r;return(r=uc())==null?void 0:r.config},Ny=r=>{var e;return(e=uc())==null?void 0:e[`_${r}`]};/**
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
 */class md{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function NE(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Uu(JSON.stringify(t)),Uu(JSON.stringify(h)),""].join(".")}/**
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
 */function Ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ut())}function DE(){var e;const r=(e=uc())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function VE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function OE(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function LE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ME(){const r=Ut();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function bE(){return!DE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xy(){try{return typeof indexedDB=="object"}catch{return!1}}function FE(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)==null?void 0:u.message)||"")}}catch(t){e(t)}})}/**
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
 */const UE="FirebaseError";class Mr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=UE,Object.setPrototypeOf(this,Mr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Io.prototype.create)}}class Io{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?jE(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Mr(o,m,s)}}function jE(r,e){return r.replace(zE,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const zE=/\{\$([^}]+)}/g;function BE(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function us(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=r[o],h=e[o];if(Ym(u)&&Ym(h)){if(!us(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Ym(r){return r!==null&&typeof r=="object"}/**
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
 */function Ga(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function $E(r,e){const t=new HE(r,e);return t.subscribe.bind(t)}class HE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");qE(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=rd),o.error===void 0&&(o.error=rd),o.complete===void 0&&(o.complete=rd);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qE(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function rd(){}/**
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
 */function Xt(r){return r&&r._delegate?r._delegate:r}/**
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
 */function Qa(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Dy(r){return(await fetch(r,{credentials:"include"})).ok}class xr{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const is="[DEFAULT]";/**
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
 */class WE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new md;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(GE(e))try{this.getOrInitializeService({instanceIdentifier:is})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=is){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=is){return this.instances.has(e)}getOptions(e=is){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:KE(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=is){return this.component?this.component.multipleInstances?e:is:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function KE(r){return r===is?void 0:r}function GE(r){return r.instantiationMode==="EAGER"}/**
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
 */class QE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new WE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Pe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Pe||(Pe={}));const XE={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},JE=Pe.INFO,YE={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},ZE=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=YE[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cc{constructor(e){this.name=e,this._logLevel=JE,this._logHandler=ZE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?XE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const e0=(r,e)=>e.some(t=>r instanceof t);let Zm,eg;function t0(){return Zm||(Zm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function n0(){return eg||(eg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vy=new WeakMap,gd=new WeakMap,Oy=new WeakMap,id=new WeakMap,Hd=new WeakMap;function r0(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",h)},u=()=>{t(_i(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Vy.set(t,r)}).catch(()=>{}),Hd.set(e,r),e}function i0(r){if(gd.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",h),r.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",h),r.addEventListener("abort",h)});gd.set(r,e)}let yd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return gd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Oy.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return _i(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function s0(r){yd=r(yd)}function o0(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(sd(this),e,...t);return Oy.set(s,e.sort?e.sort():[e]),_i(s)}:n0().includes(r)?function(...e){return r.apply(sd(this),e),_i(Vy.get(this))}:function(...e){return _i(r.apply(sd(this),e))}}function a0(r){return typeof r=="function"?o0(r):(r instanceof IDBTransaction&&i0(r),e0(r,t0())?new Proxy(r,yd):r)}function _i(r){if(r instanceof IDBRequest)return r0(r);if(id.has(r))return id.get(r);const e=a0(r);return e!==r&&(id.set(r,e),Hd.set(e,r)),e}const sd=r=>Hd.get(r);function l0(r,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(r,e),m=_i(h);return s&&h.addEventListener("upgradeneeded",g=>{s(_i(h.result),g.oldVersion,g.newVersion,_i(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}const u0=["get","getKey","getAll","getAllKeys","count"],c0=["put","add","delete","clear"],od=new Map;function tg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(od.get(e))return od.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=c0.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||u0.includes(t)))return;const u=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(m.shift())),(await Promise.all([_[t](...m),o&&g.done]))[0]};return od.set(e,u),u}s0(r=>({...r,get:(e,t,s)=>tg(e,t)||r.get(e,t,s),has:(e,t)=>!!tg(e,t)||r.has(e,t)}));/**
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
 */class h0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(d0(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function d0(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _d="@firebase/app",ng="0.14.13";/**
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
 */const Dr=new cc("@firebase/app"),f0="@firebase/app-compat",p0="@firebase/analytics-compat",m0="@firebase/analytics",g0="@firebase/app-check-compat",y0="@firebase/app-check",_0="@firebase/auth",v0="@firebase/auth-compat",w0="@firebase/database",E0="@firebase/data-connect",T0="@firebase/database-compat",I0="@firebase/functions",S0="@firebase/functions-compat",A0="@firebase/installations",k0="@firebase/installations-compat",R0="@firebase/messaging",C0="@firebase/messaging-compat",P0="@firebase/performance",N0="@firebase/performance-compat",x0="@firebase/remote-config",D0="@firebase/remote-config-compat",V0="@firebase/storage",O0="@firebase/storage-compat",L0="@firebase/firestore",M0="@firebase/ai",b0="@firebase/firestore-compat",F0="firebase",U0="12.14.0";/**
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
 */const vd="[DEFAULT]",j0={[_d]:"fire-core",[f0]:"fire-core-compat",[m0]:"fire-analytics",[p0]:"fire-analytics-compat",[y0]:"fire-app-check",[g0]:"fire-app-check-compat",[_0]:"fire-auth",[v0]:"fire-auth-compat",[w0]:"fire-rtdb",[E0]:"fire-data-connect",[T0]:"fire-rtdb-compat",[I0]:"fire-fn",[S0]:"fire-fn-compat",[A0]:"fire-iid",[k0]:"fire-iid-compat",[R0]:"fire-fcm",[C0]:"fire-fcm-compat",[P0]:"fire-perf",[N0]:"fire-perf-compat",[x0]:"fire-rc",[D0]:"fire-rc-compat",[V0]:"fire-gcs",[O0]:"fire-gcs-compat",[L0]:"fire-fst",[b0]:"fire-fst-compat",[M0]:"fire-vertex","fire-js":"fire-js",[F0]:"fire-js-all"};/**
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
 */const ju=new Map,z0=new Map,wd=new Map;function rg(r,e){try{r.container.addComponent(e)}catch(t){Dr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Ti(r){const e=r.name;if(wd.has(e))return Dr.debug(`There were multiple attempts to register component ${e}.`),!1;wd.set(e,r);for(const t of ju.values())rg(t,r);for(const t of z0.values())rg(t,r);return!0}function qd(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Rn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const B0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vi=new Io("app","Firebase",B0);/**
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
 */class $0{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vi.create("app-deleted",{appName:this._name})}}/**
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
 */const So=U0;function Ly(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s={name:vd,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw vi.create("bad-app-name",{appName:String(o)});if(t||(t=Py()),!t)throw vi.create("no-options");const u=ju.get(o);if(u){if(us(t,u.options)&&us(s,u.config))return u;throw vi.create("duplicate-app",{appName:o})}const h=new QE(o);for(const g of wd.values())h.addComponent(g);const m=new $0(t,s,h);return ju.set(o,m),m}function My(r=vd){const e=ju.get(r);if(!e&&r===vd&&Py())return Ly();if(!e)throw vi.create("no-app",{appName:r});return e}function Pr(r,e,t){let s=j0[r]??r;t&&(s+=`-${t}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dr.warn(h.join(" "));return}Ti(new xr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const H0="firebase-heartbeat-database",q0=1,Fa="firebase-heartbeat-store";let ad=null;function by(){return ad||(ad=l0(H0,q0,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Fa)}catch(t){console.warn(t)}}}}).catch(r=>{throw vi.create("idb-open",{originalErrorMessage:r.message})})),ad}async function W0(r){try{const t=(await by()).transaction(Fa),s=await t.objectStore(Fa).get(Fy(r));return await t.done,s}catch(e){if(e instanceof Mr)Dr.warn(e.message);else{const t=vi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dr.warn(t.message)}}}async function ig(r,e){try{const s=(await by()).transaction(Fa,"readwrite");await s.objectStore(Fa).put(e,Fy(r)),await s.done}catch(t){if(t instanceof Mr)Dr.warn(t.message);else{const s=vi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Dr.warn(s.message)}}}function Fy(r){return`${r.name}!${r.options.appId}`}/**
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
 */const K0=1024,G0=30;class Q0{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new J0(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=sg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>G0){const h=Y0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Dr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=sg(),{heartbeatsToSend:s,unsentEntries:o}=X0(this._heartbeatsCache.heartbeats),u=Uu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Dr.warn(t),""}}}function sg(){return new Date().toISOString().substring(0,10)}function X0(r,e=K0){const t=[];let s=r.slice();for(const o of r){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),og(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),og(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class J0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xy()?FE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await W0(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return ig(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return ig(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function og(r){return Uu(JSON.stringify({version:2,heartbeats:r})).length}function Y0(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
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
 */function Z0(r){Ti(new xr("platform-logger",e=>new h0(e),"PRIVATE")),Ti(new xr("heartbeat",e=>new Q0(e),"PRIVATE")),Pr(_d,ng,r),Pr(_d,ng,"esm2020"),Pr("fire-js","")}Z0("");function Uy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const eT=Uy,jy=new Io("auth","Firebase",Uy());/**
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
 */const zu=new cc("@firebase/auth");function tT(r,...e){zu.logLevel<=Pe.WARN&&zu.warn(`Auth (${So}): ${r}`,...e)}function Pu(r,...e){zu.logLevel<=Pe.ERROR&&zu.error(`Auth (${So}): ${r}`,...e)}/**
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
 */function rr(r,...e){throw Kd(r,...e)}function Nn(r,...e){return Kd(r,...e)}function Wd(r,e,t){const s={...eT(),[e]:t};return new Io("auth","Firebase",s).create(e,{appName:r.name})}function as(r){return Wd(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function nT(r,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&rr(r,"argument-error"),Wd(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Kd(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return jy.create(r,...e)}function ye(r,e,...t){if(!r)throw Kd(e,...t)}function kr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Pu(e),new Error(e)}function Vr(r,e){r||kr(e)}/**
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
 */function Ed(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function rT(){return ag()==="http:"||ag()==="https:"}function ag(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
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
 */function iT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rT()||OE()||"connection"in navigator)?navigator.onLine:!0}function sT(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Xa{constructor(e,t){this.shortDelay=e,this.longDelay=t,Vr(t>e,"Short delay should be less than long delay!"),this.isMobile=xE()||LE()}get(){return iT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Gd(r,e){Vr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class zy{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const oT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const aT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],lT=new Xa(3e4,6e4);function Qd(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function Ao(r,e,t,s,o={}){return By(r,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=Ga({key:r.config.apiKey,...h}).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _={method:e,headers:g,...u};return VE()||(_.referrerPolicy="no-referrer"),r.emulatorConfig&&Qa(r.emulatorConfig.host)&&(_.credentials="include"),zy.fetch()(await $y(r,r.config.apiHost,t,m),_)})}async function By(r,e,t){r._canInitEmulator=!1;const s={...oT,...e};try{const o=new cT(r),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Tu(r,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[g,_]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Tu(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Tu(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw Tu(r,"user-disabled",h);const E=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw Wd(r,E,_);rr(r,E)}}catch(o){if(o instanceof Mr)throw o;rr(r,"network-request-failed",{message:String(o)})}}async function uT(r,e,t,s,o={}){const u=await Ao(r,e,t,s,o);return"mfaPendingCredential"in u&&rr(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function $y(r,e,t,s){const o=`${e}${t}?${s}`,u=r,h=u.config.emulator?Gd(r.config,o):`${r.config.apiScheme}://${o}`;return aT.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}class cT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Nn(this.auth,"network-request-failed")),lT.get())})}}function Tu(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Nn(r,e,s);return o.customData._tokenResponse=t,o}/**
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
 */async function hT(r,e){return Ao(r,"POST","/v1/accounts:delete",e)}async function Bu(r,e){return Ao(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Da(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dT(r,e=!1){const t=Xt(r),s=await t.getIdToken(e),o=Xd(s);ye(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Da(ld(o.auth_time)),issuedAtTime:Da(ld(o.iat)),expirationTime:Da(ld(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function ld(r){return Number(r)*1e3}function Xd(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Pu("JWT malformed, contained fewer than 3 sections"),null;try{const o=Ry(t);return o?JSON.parse(o):(Pu("Failed to decode base64 JWT payload"),null)}catch(o){return Pu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function lg(r){const e=Xd(r);return ye(e,"internal-error"),ye(typeof e.exp<"u","internal-error"),ye(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ua(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Mr&&fT(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function fT({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class pT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Td{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Da(this.lastLoginAt),this.creationTime=Da(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $u(r){var I;const e=r.auth,t=await r.getIdToken(),s=await Ua(r,Bu(e,{idToken:t}));ye(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];r._notifyReloadListener(o);const u=(I=o.providerUserInfo)!=null&&I.length?Hy(o.providerUserInfo):[],h=gT(r.providerData,u),m=r.isAnonymous,g=!(r.email&&o.passwordHash)&&!(h!=null&&h.length),_=m?g:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new Td(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(r,E)}async function mT(r){const e=Xt(r);await $u(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gT(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Hy(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function yT(r,e){const t=await By(r,{},async()=>{const s=Ga({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,h=await $y(r,o,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:m,body:s};return r.emulatorConfig&&Qa(r.emulatorConfig.host)&&(g.credentials="include"),zy.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function _T(r,e){return Ao(r,"POST","/v2/accounts:revokeToken",Qd(r,e))}/**
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
 */class co{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ye(e.idToken,"internal-error"),ye(typeof e.idToken<"u","internal-error"),ye(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):lg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ye(e.length!==0,"internal-error");const t=lg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ye(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await yT(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new co;return s&&(ye(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(ye(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(ye(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new co,this.toJSON())}_performRefresh(){return kr("not implemented")}}/**
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
 */function pi(r,e){ye(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Cn{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new pT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Td(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Ua(this,this.stsTokenManager.getToken(this.auth,e));return ye(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return dT(this,e)}reload(){return mT(this)}_assign(e){this!==e&&(ye(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Cn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ye(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await $u(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Rn(this.auth.app))return Promise.reject(as(this.auth));const e=await this.getIdToken();return await Ua(this,hT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,u=t.phoneNumber??void 0,h=t.photoURL??void 0,m=t.tenantId??void 0,g=t._redirectEventId??void 0,_=t.createdAt??void 0,E=t.lastLoginAt??void 0,{uid:I,emailVerified:L,isAnonymous:z,providerData:J,stsTokenManager:X}=t;ye(I&&X,e,"internal-error");const G=co.fromJSON(this.name,X);ye(typeof I=="string",e,"internal-error"),pi(s,e.name),pi(o,e.name),ye(typeof L=="boolean",e,"internal-error"),ye(typeof z=="boolean",e,"internal-error"),pi(u,e.name),pi(h,e.name),pi(m,e.name),pi(g,e.name),pi(_,e.name),pi(E,e.name);const re=new Cn({uid:I,auth:e,email:o,emailVerified:L,displayName:s,isAnonymous:z,photoURL:h,phoneNumber:u,tenantId:m,stsTokenManager:G,createdAt:_,lastLoginAt:E});return J&&Array.isArray(J)&&(re.providerData=J.map(te=>({...te}))),g&&(re._redirectEventId=g),re}static async _fromIdTokenResponse(e,t,s=!1){const o=new co;o.updateFromServerResponse(t);const u=new Cn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await $u(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ye(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?Hy(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new co;m.updateFromIdToken(s);const g=new Cn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Td(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,_),g}}/**
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
 */const ug=new Map;function Rr(r){Vr(r instanceof Function,"Expected a class definition");let e=ug.get(r);return e?(Vr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,ug.set(r,e),e)}/**
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
 */class qy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}qy.type="NONE";const cg=qy;/**
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
 */function Nu(r,e,t){return`firebase:${r}:${e}:${t}`}class ho{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Nu(this.userKey,o.apiKey,u),this.fullPersistenceKey=Nu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Bu(this.auth,{idToken:e}).catch(()=>{});return t?Cn._fromGetAccountInfoResponse(this.auth,t,e):null}return Cn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new ho(Rr(cg),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||Rr(cg);const h=Nu(s,e.config.apiKey,e.name);let m=null;for(const _ of t)try{const E=await _._get(h);if(E){let I;if(typeof E=="string"){const L=await Bu(e,{idToken:E}).catch(()=>{});if(!L)break;I=await Cn._fromGetAccountInfoResponse(e,L,E)}else I=Cn._fromJSON(e,E);_!==u&&(m=I),u=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new ho(u,e,s):(u=g[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async _=>{if(_!==u)try{await _._remove(h)}catch{}})),new ho(u,e,s))}}/**
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
 */function hg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Qy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jy(e))return"Blackberry";if(Yy(e))return"Webos";if(Ky(e))return"Safari";if((e.includes("chrome/")||Gy(e))&&!e.includes("edge/"))return"Chrome";if(Xy(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Wy(r=Ut()){return/firefox\//i.test(r)}function Ky(r=Ut()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Gy(r=Ut()){return/crios\//i.test(r)}function Qy(r=Ut()){return/iemobile/i.test(r)}function Xy(r=Ut()){return/android/i.test(r)}function Jy(r=Ut()){return/blackberry/i.test(r)}function Yy(r=Ut()){return/webos/i.test(r)}function Jd(r=Ut()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function vT(r=Ut()){var e;return Jd(r)&&!!((e=window.navigator)!=null&&e.standalone)}function wT(){return ME()&&document.documentMode===10}function Zy(r=Ut()){return Jd(r)||Xy(r)||Yy(r)||Jy(r)||/windows phone/i.test(r)||Qy(r)}/**
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
 */function e_(r,e=[]){let t;switch(r){case"Browser":t=hg(Ut());break;case"Worker":t=`${hg(Ut())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${So}/${s}`}/**
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
 */class ET{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const g=e(u);h(g)}catch(g){m(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function TT(r,e={}){return Ao(r,"GET","/v2/passwordPolicy",Qd(r,e))}/**
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
 */const IT=6;class ST{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??IT,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class AT{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dg(this),this.idTokenSubscription=new dg(this),this.beforeStateQueue=new ET(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Rr(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await ho.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Bu(this,{idToken:e}),s=await Cn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(Rn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(u=this.redirectUser)==null?void 0:u._redirectEventId,m=s==null?void 0:s._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===m)&&(g!=null&&g.user)&&(s=g.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(h){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ye(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await $u(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Rn(this.app))return Promise.reject(as(this));const t=e?Xt(e):null;return t&&ye(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ye(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Rn(this.app)?Promise.reject(as(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Rn(this.app)?Promise.reject(as(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Rr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await TT(this),t=new ST(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Io("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await _T(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Rr(e)||this._popupRedirectResolver;ye(t,this,"argument-error"),this.redirectPersistenceManager=await ho.create(this,[Rr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(ye(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ye(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=e_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Rn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&tT(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function hc(r){return Xt(r)}class dg{constructor(e){this.auth=e,this.observer=null,this.addObserver=$E(t=>this.observer=t)}get next(){return ye(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Yd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kT(r){Yd=r}function RT(r){return Yd.loadJS(r)}function CT(){return Yd.gapiScript}function PT(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function NT(r,e){const t=qd(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(us(u,e??{}))return o;rr(o,"already-initialized")}return t.initialize({options:e})}function xT(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Rr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function DT(r,e,t){const s=hc(r);ye(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=t_(e),{host:h,port:m}=VT(e),g=m===null?"":`:${m}`,_={url:`${u}//${h}${g}/`},E=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){ye(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ye(us(_,s.config.emulator)&&us(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,Qa(h)?Dy(`${u}//${h}${g}`):OT()}function t_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function VT(r){const e=t_(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:fg(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:fg(h)}}}function fg(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function OT(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class n_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return kr("not implemented")}_getIdTokenResponse(e){return kr("not implemented")}_linkToIdToken(e,t){return kr("not implemented")}_getReauthenticationResolver(e){return kr("not implemented")}}/**
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
 */async function fo(r,e){return uT(r,"POST","/v1/accounts:signInWithIdp",Qd(r,e))}/**
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
 */const LT="http://localhost";class cs extends n_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new cs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):rr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=t;if(!s||!o)return null;const h=new cs(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return fo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,fo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,fo(e,t)}buildRequest(){const e={requestUri:LT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ga(t)}return e}}/**
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
 */class Zd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ja extends Zd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class mi extends Ja{constructor(){super("facebook.com")}static credential(e){return cs._fromParams({providerId:mi.PROVIDER_ID,signInMethod:mi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mi.credentialFromTaggedObject(e)}static credentialFromError(e){return mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mi.credential(e.oauthAccessToken)}catch{return null}}}mi.FACEBOOK_SIGN_IN_METHOD="facebook.com";mi.PROVIDER_ID="facebook.com";/**
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
 */class Ar extends Ja{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return cs._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ar.credentialFromTaggedObject(e)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Ar.credential(t,s)}catch{return null}}}Ar.GOOGLE_SIGN_IN_METHOD="google.com";Ar.PROVIDER_ID="google.com";/**
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
 */class gi extends Ja{constructor(){super("github.com")}static credential(e){return cs._fromParams({providerId:gi.PROVIDER_ID,signInMethod:gi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gi.credentialFromTaggedObject(e)}static credentialFromError(e){return gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gi.credential(e.oauthAccessToken)}catch{return null}}}gi.GITHUB_SIGN_IN_METHOD="github.com";gi.PROVIDER_ID="github.com";/**
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
 */class yi extends Ja{constructor(){super("twitter.com")}static credential(e,t){return cs._fromParams({providerId:yi.PROVIDER_ID,signInMethod:yi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return yi.credentialFromTaggedObject(e)}static credentialFromError(e){return yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return yi.credential(t,s)}catch{return null}}}yi.TWITTER_SIGN_IN_METHOD="twitter.com";yi.PROVIDER_ID="twitter.com";/**
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
 */class yo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await Cn._fromIdTokenResponse(e,s,o),h=pg(s);return new yo({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=pg(s);return new yo({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function pg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Hu extends Mr{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Hu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Hu(e,t,s,o)}}function r_(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Hu._fromErrorAndOperation(r,u,e,s):u})}async function MT(r,e,t=!1){const s=await Ua(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return yo._forOperation(r,"link",s)}/**
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
 */async function bT(r,e,t=!1){const{auth:s}=r;if(Rn(s.app))return Promise.reject(as(s));const o="reauthenticate";try{const u=await Ua(r,r_(s,o,e,r),t);ye(u.idToken,s,"internal-error");const h=Xd(u.idToken);ye(h,s,"internal-error");const{sub:m}=h;return ye(r.uid===m,s,"user-mismatch"),yo._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&rr(s,"user-mismatch"),u}}/**
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
 */async function FT(r,e,t=!1){if(Rn(r.app))return Promise.reject(as(r));const s="signIn",o=await r_(r,s,e),u=await yo._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(u.user),u}/**
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
 */function UT(r,e){return Xt(r).setPersistence(e)}function jT(r,e,t,s){return Xt(r).onIdTokenChanged(e,t,s)}function zT(r,e,t){return Xt(r).beforeAuthStateChanged(e,t)}function BT(r,e,t,s){return Xt(r).onAuthStateChanged(e,t,s)}function i_(r){return Xt(r).signOut()}const qu="__sak";/**
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
 */class s_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(qu,"1"),this.storage.removeItem(qu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const $T=1e3,HT=10;class o_ extends s_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Zy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);wT()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,HT):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},$T)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}o_.type="LOCAL";const a_=o_;/**
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
 */class l_ extends s_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}l_.type="SESSION";const u_=l_;/**
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
 */function qT(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class dc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new dc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async _=>_(t.origin,u)),g=await qT(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}dc.receivers=[];/**
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
 */function ef(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class WT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,g)=>{const _=ef("",20);o.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(I){const L=I;if(L.data.eventId===_)switch(L.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(L.data.response);break;default:clearTimeout(E),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function Yn(){return window}function KT(r){Yn().location.href=r}/**
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
 */function c_(){return typeof Yn().WorkerGlobalScope<"u"&&typeof Yn().importScripts=="function"}async function GT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function QT(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function XT(){return c_()?self:null}/**
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
 */const h_="firebaseLocalStorageDb",JT=1,Wu="firebaseLocalStorage",d_="fbase_key";class Ya{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function fc(r,e){return r.transaction([Wu],e?"readwrite":"readonly").objectStore(Wu)}function YT(){const r=indexedDB.deleteDatabase(h_);return new Ya(r).toPromise()}function f_(){const r=indexedDB.open(h_,JT);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Wu,{keyPath:d_})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Wu)?e(s):(s.close(),await YT(),e(await f_()))})})}async function mg(r,e,t){const s=fc(r,!0).put({[d_]:e,value:t});return new Ya(s).toPromise()}async function ZT(r,e){const t=fc(r,!1).get(e),s=await new Ya(t).toPromise();return s===void 0?null:s.value}function gg(r,e){const t=fc(r,!0).delete(e);return new Ya(t).toPromise()}const eI=800,tI=3;class p_{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=f_(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>tI)throw s;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return c_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=dc._getInstance(XT()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await GT(),!this.activeServiceWorker)return;this.sender=new WT(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||QT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await mg(e,qu,"1"),await gg(e,qu)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>mg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>ZT(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>gg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=fc(o,!1).getAll();return new Ya(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),eI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}p_.type="LOCAL";const nI=p_;new Xa(3e4,6e4);/**
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
 */function m_(r,e){return e?Rr(e):(ye(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class tf extends n_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return fo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return fo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function rI(r){return FT(r.auth,new tf(r),r.bypassAuthState)}function iI(r){const{auth:e,user:t}=r;return ye(t,e,"internal-error"),bT(t,new tf(r),r.bypassAuthState)}async function sI(r){const{auth:e,user:t}=r;return ye(t,e,"internal-error"),MT(t,new tf(r),r.bypassAuthState)}/**
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
 */class g_{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rI;case"linkViaPopup":case"linkViaRedirect":return sI;case"reauthViaPopup":case"reauthViaRedirect":return iI;default:rr(this.auth,"internal-error")}}resolve(e){Vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const oI=new Xa(2e3,1e4);async function aI(r,e,t){if(Rn(r.app))return Promise.reject(Nn(r,"operation-not-supported-in-this-environment"));const s=hc(r);nT(r,e,Zd);const o=m_(s,t);return new ss(s,"signInViaPopup",e,o).executeNotNull()}class ss extends g_{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,ss.currentPopupAction&&ss.currentPopupAction.cancel(),ss.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ye(e,this.auth,"internal-error"),e}async onExecution(){Vr(this.filter.length===1,"Popup operations only handle one event");const e=ef();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ss.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,oI.get())};e()}}ss.currentPopupAction=null;/**
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
 */const lI="pendingRedirect",xu=new Map;class uI extends g_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=xu.get(this.auth._key());if(!e){try{const s=await cI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}xu.set(this.auth._key(),e)}return this.bypassAuthState||xu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cI(r,e){const t=fI(e),s=dI(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function hI(r,e){xu.set(r._key(),e)}function dI(r){return Rr(r._redirectPersistence)}function fI(r){return Nu(lI,r.config.apiKey,r.name)}async function pI(r,e,t=!1){if(Rn(r.app))return Promise.reject(as(r));const s=hc(r),o=m_(s,e),h=await new uI(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const mI=600*1e3;class gI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!y_(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(Nn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mI&&this.cachedEventUids.clear(),this.cachedEventUids.has(yg(e))}saveEventToCache(e){this.cachedEventUids.add(yg(e)),this.lastProcessedEventTime=Date.now()}}function yg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function y_({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function yI(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return y_(r);default:return!1}}/**
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
 */async function _I(r,e={}){return Ao(r,"GET","/v1/projects",e)}/**
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
 */const vI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wI=/^https?/;async function EI(r){if(r.config.emulator)return;const{authorizedDomains:e}=await _I(r);for(const t of e)try{if(TI(t))return}catch{}rr(r,"unauthorized-domain")}function TI(r){const e=Ed(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!wI.test(t))return!1;if(vI.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const II=new Xa(3e4,6e4);function _g(){const r=Yn().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function SI(r){return new Promise((e,t)=>{var o,u,h;function s(){_g(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_g(),t(Nn(r,"network-request-failed"))},timeout:II.get()})}if((u=(o=Yn().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((h=Yn().gapi)!=null&&h.load)s();else{const m=PT("iframefcb");return Yn()[m]=()=>{gapi.load?s():t(Nn(r,"network-request-failed"))},RT(`${CT()}?onload=${m}`).catch(g=>t(g))}}).catch(e=>{throw Du=null,e})}let Du=null;function AI(r){return Du=Du||SI(r),Du}/**
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
 */const kI=new Xa(5e3,15e3),RI="__/auth/iframe",CI="emulator/auth/iframe",PI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},NI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xI(r){const e=r.config;ye(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Gd(e,CI):`https://${r.config.authDomain}/${RI}`,s={apiKey:e.apiKey,appName:r.name,v:So},o=NI.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Ga(s).slice(1)}`}async function DI(r){const e=await AI(r),t=Yn().gapi;return ye(t,r,"internal-error"),e.open({where:document.body,url:xI(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:PI,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Nn(r,"network-request-failed"),m=Yn().setTimeout(()=>{u(h)},kI.get());function g(){Yn().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{u(h)})}))}/**
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
 */const VI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},OI=500,LI=600,MI="_blank",bI="http://localhost";class vg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function FI(r,e,t,s=OI,o=LI){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g={...VI,width:s.toString(),height:o.toString(),top:u,left:h},_=Ut().toLowerCase();t&&(m=Gy(_)?MI:t),Wy(_)&&(e=e||bI,g.scrollbars="yes");const E=Object.entries(g).reduce((L,[z,J])=>`${L}${z}=${J},`,"");if(vT(_)&&m!=="_self")return UI(e||"",m),new vg(null);const I=window.open(e||"",m,E);ye(I,r,"popup-blocked");try{I.focus()}catch{}return new vg(I)}function UI(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const jI="__/auth/handler",zI="emulator/auth/handler",BI=encodeURIComponent("fac");async function wg(r,e,t,s,o,u){ye(r.config.authDomain,r,"auth-domain-config-required"),ye(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:So,eventId:o};if(e instanceof Zd){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",BE(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,I]of Object.entries({}))h[E]=I}if(e instanceof Ja){const E=e.getScopes().filter(I=>I!=="");E.length>0&&(h.scopes=E.join(","))}r.tenantId&&(h.tid=r.tenantId);const m=h;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const g=await r._getAppCheckToken(),_=g?`#${BI}=${encodeURIComponent(g)}`:"";return`${$I(r)}?${Ga(m).slice(1)}${_}`}function $I({config:r}){return r.emulator?Gd(r,zI):`https://${r.authDomain}/${jI}`}/**
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
 */const ud="webStorageSupport";class HI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=u_,this._completeRedirectFn=pI,this._overrideRedirectResult=hI}async _openPopup(e,t,s,o){var h;Vr((h=this.eventManagers[e._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const u=await wg(e,t,s,Ed(),o);return FI(e,u,ef())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await wg(e,t,s,Ed(),o);return KT(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Vr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await DI(e),s=new gI(e);return t.register("authEvent",o=>(ye(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ud,{type:ud},o=>{var h;const u=(h=o==null?void 0:o[0])==null?void 0:h[ud];u!==void 0&&t(!!u),rr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=EI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Zy()||Ky()||Jd()}}const qI=HI;var Eg="@firebase/auth",Tg="1.13.2";/**
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
 */class WI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ye(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function KI(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function GI(r){Ti(new xr("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;ye(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:e_(r)},_=new AT(s,o,u,g);return xT(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Ti(new xr("auth-internal",e=>{const t=hc(e.getProvider("auth").getImmediate());return(s=>new WI(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pr(Eg,Tg,KI(r)),Pr(Eg,Tg,"esm2020")}/**
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
 */const QI=300,XI=Ny("authIdTokenMaxAge")||QI;let Ig=null;const JI=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>XI)return;const o=t==null?void 0:t.token;Ig!==o&&(Ig=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function YI(r=My()){const e=qd(r,"auth");if(e.isInitialized())return e.getImmediate();const t=NT(r,{popupRedirectResolver:qI,persistence:[nI,a_,u_]}),s=Ny("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=JI(u.toString());zT(t,h,()=>h(t.currentUser)),jT(t,m=>h(m))}}const o=Cy("auth");return o&&DT(t,`http://${o}`),t}function ZI(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}kT({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const u=Nn("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",ZI().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});GI("Browser");var Sg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wi,__;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,S){function k(){}k.prototype=S.prototype,C.F=S.prototype,C.prototype=new k,C.prototype.constructor=C,C.D=function(x,P,V){for(var A=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)A[$e-2]=arguments[$e];return S.prototype[P].apply(x,A)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(C,S,k){k||(k=0);const x=Array(16);if(typeof S=="string")for(var P=0;P<16;++P)x[P]=S.charCodeAt(k++)|S.charCodeAt(k++)<<8|S.charCodeAt(k++)<<16|S.charCodeAt(k++)<<24;else for(P=0;P<16;++P)x[P]=S[k++]|S[k++]<<8|S[k++]<<16|S[k++]<<24;S=C.g[0],k=C.g[1],P=C.g[2];let V=C.g[3],A;A=S+(V^k&(P^V))+x[0]+3614090360&4294967295,S=k+(A<<7&4294967295|A>>>25),A=V+(P^S&(k^P))+x[1]+3905402710&4294967295,V=S+(A<<12&4294967295|A>>>20),A=P+(k^V&(S^k))+x[2]+606105819&4294967295,P=V+(A<<17&4294967295|A>>>15),A=k+(S^P&(V^S))+x[3]+3250441966&4294967295,k=P+(A<<22&4294967295|A>>>10),A=S+(V^k&(P^V))+x[4]+4118548399&4294967295,S=k+(A<<7&4294967295|A>>>25),A=V+(P^S&(k^P))+x[5]+1200080426&4294967295,V=S+(A<<12&4294967295|A>>>20),A=P+(k^V&(S^k))+x[6]+2821735955&4294967295,P=V+(A<<17&4294967295|A>>>15),A=k+(S^P&(V^S))+x[7]+4249261313&4294967295,k=P+(A<<22&4294967295|A>>>10),A=S+(V^k&(P^V))+x[8]+1770035416&4294967295,S=k+(A<<7&4294967295|A>>>25),A=V+(P^S&(k^P))+x[9]+2336552879&4294967295,V=S+(A<<12&4294967295|A>>>20),A=P+(k^V&(S^k))+x[10]+4294925233&4294967295,P=V+(A<<17&4294967295|A>>>15),A=k+(S^P&(V^S))+x[11]+2304563134&4294967295,k=P+(A<<22&4294967295|A>>>10),A=S+(V^k&(P^V))+x[12]+1804603682&4294967295,S=k+(A<<7&4294967295|A>>>25),A=V+(P^S&(k^P))+x[13]+4254626195&4294967295,V=S+(A<<12&4294967295|A>>>20),A=P+(k^V&(S^k))+x[14]+2792965006&4294967295,P=V+(A<<17&4294967295|A>>>15),A=k+(S^P&(V^S))+x[15]+1236535329&4294967295,k=P+(A<<22&4294967295|A>>>10),A=S+(P^V&(k^P))+x[1]+4129170786&4294967295,S=k+(A<<5&4294967295|A>>>27),A=V+(k^P&(S^k))+x[6]+3225465664&4294967295,V=S+(A<<9&4294967295|A>>>23),A=P+(S^k&(V^S))+x[11]+643717713&4294967295,P=V+(A<<14&4294967295|A>>>18),A=k+(V^S&(P^V))+x[0]+3921069994&4294967295,k=P+(A<<20&4294967295|A>>>12),A=S+(P^V&(k^P))+x[5]+3593408605&4294967295,S=k+(A<<5&4294967295|A>>>27),A=V+(k^P&(S^k))+x[10]+38016083&4294967295,V=S+(A<<9&4294967295|A>>>23),A=P+(S^k&(V^S))+x[15]+3634488961&4294967295,P=V+(A<<14&4294967295|A>>>18),A=k+(V^S&(P^V))+x[4]+3889429448&4294967295,k=P+(A<<20&4294967295|A>>>12),A=S+(P^V&(k^P))+x[9]+568446438&4294967295,S=k+(A<<5&4294967295|A>>>27),A=V+(k^P&(S^k))+x[14]+3275163606&4294967295,V=S+(A<<9&4294967295|A>>>23),A=P+(S^k&(V^S))+x[3]+4107603335&4294967295,P=V+(A<<14&4294967295|A>>>18),A=k+(V^S&(P^V))+x[8]+1163531501&4294967295,k=P+(A<<20&4294967295|A>>>12),A=S+(P^V&(k^P))+x[13]+2850285829&4294967295,S=k+(A<<5&4294967295|A>>>27),A=V+(k^P&(S^k))+x[2]+4243563512&4294967295,V=S+(A<<9&4294967295|A>>>23),A=P+(S^k&(V^S))+x[7]+1735328473&4294967295,P=V+(A<<14&4294967295|A>>>18),A=k+(V^S&(P^V))+x[12]+2368359562&4294967295,k=P+(A<<20&4294967295|A>>>12),A=S+(k^P^V)+x[5]+4294588738&4294967295,S=k+(A<<4&4294967295|A>>>28),A=V+(S^k^P)+x[8]+2272392833&4294967295,V=S+(A<<11&4294967295|A>>>21),A=P+(V^S^k)+x[11]+1839030562&4294967295,P=V+(A<<16&4294967295|A>>>16),A=k+(P^V^S)+x[14]+4259657740&4294967295,k=P+(A<<23&4294967295|A>>>9),A=S+(k^P^V)+x[1]+2763975236&4294967295,S=k+(A<<4&4294967295|A>>>28),A=V+(S^k^P)+x[4]+1272893353&4294967295,V=S+(A<<11&4294967295|A>>>21),A=P+(V^S^k)+x[7]+4139469664&4294967295,P=V+(A<<16&4294967295|A>>>16),A=k+(P^V^S)+x[10]+3200236656&4294967295,k=P+(A<<23&4294967295|A>>>9),A=S+(k^P^V)+x[13]+681279174&4294967295,S=k+(A<<4&4294967295|A>>>28),A=V+(S^k^P)+x[0]+3936430074&4294967295,V=S+(A<<11&4294967295|A>>>21),A=P+(V^S^k)+x[3]+3572445317&4294967295,P=V+(A<<16&4294967295|A>>>16),A=k+(P^V^S)+x[6]+76029189&4294967295,k=P+(A<<23&4294967295|A>>>9),A=S+(k^P^V)+x[9]+3654602809&4294967295,S=k+(A<<4&4294967295|A>>>28),A=V+(S^k^P)+x[12]+3873151461&4294967295,V=S+(A<<11&4294967295|A>>>21),A=P+(V^S^k)+x[15]+530742520&4294967295,P=V+(A<<16&4294967295|A>>>16),A=k+(P^V^S)+x[2]+3299628645&4294967295,k=P+(A<<23&4294967295|A>>>9),A=S+(P^(k|~V))+x[0]+4096336452&4294967295,S=k+(A<<6&4294967295|A>>>26),A=V+(k^(S|~P))+x[7]+1126891415&4294967295,V=S+(A<<10&4294967295|A>>>22),A=P+(S^(V|~k))+x[14]+2878612391&4294967295,P=V+(A<<15&4294967295|A>>>17),A=k+(V^(P|~S))+x[5]+4237533241&4294967295,k=P+(A<<21&4294967295|A>>>11),A=S+(P^(k|~V))+x[12]+1700485571&4294967295,S=k+(A<<6&4294967295|A>>>26),A=V+(k^(S|~P))+x[3]+2399980690&4294967295,V=S+(A<<10&4294967295|A>>>22),A=P+(S^(V|~k))+x[10]+4293915773&4294967295,P=V+(A<<15&4294967295|A>>>17),A=k+(V^(P|~S))+x[1]+2240044497&4294967295,k=P+(A<<21&4294967295|A>>>11),A=S+(P^(k|~V))+x[8]+1873313359&4294967295,S=k+(A<<6&4294967295|A>>>26),A=V+(k^(S|~P))+x[15]+4264355552&4294967295,V=S+(A<<10&4294967295|A>>>22),A=P+(S^(V|~k))+x[6]+2734768916&4294967295,P=V+(A<<15&4294967295|A>>>17),A=k+(V^(P|~S))+x[13]+1309151649&4294967295,k=P+(A<<21&4294967295|A>>>11),A=S+(P^(k|~V))+x[4]+4149444226&4294967295,S=k+(A<<6&4294967295|A>>>26),A=V+(k^(S|~P))+x[11]+3174756917&4294967295,V=S+(A<<10&4294967295|A>>>22),A=P+(S^(V|~k))+x[2]+718787259&4294967295,P=V+(A<<15&4294967295|A>>>17),A=k+(V^(P|~S))+x[9]+3951481745&4294967295,C.g[0]=C.g[0]+S&4294967295,C.g[1]=C.g[1]+(P+(A<<21&4294967295|A>>>11))&4294967295,C.g[2]=C.g[2]+P&4294967295,C.g[3]=C.g[3]+V&4294967295}s.prototype.v=function(C,S){S===void 0&&(S=C.length);const k=S-this.blockSize,x=this.C;let P=this.h,V=0;for(;V<S;){if(P==0)for(;V<=k;)o(this,C,V),V+=this.blockSize;if(typeof C=="string"){for(;V<S;)if(x[P++]=C.charCodeAt(V++),P==this.blockSize){o(this,x),P=0;break}}else for(;V<S;)if(x[P++]=C[V++],P==this.blockSize){o(this,x),P=0;break}}this.h=P,this.o+=S},s.prototype.A=function(){var C=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);C[0]=128;for(var S=1;S<C.length-8;++S)C[S]=0;S=this.o*8;for(var k=C.length-8;k<C.length;++k)C[k]=S&255,S/=256;for(this.v(C),C=Array(16),S=0,k=0;k<4;++k)for(let x=0;x<32;x+=8)C[S++]=this.g[k]>>>x&255;return C};function u(C,S){var k=m;return Object.prototype.hasOwnProperty.call(k,C)?k[C]:k[C]=S(C)}function h(C,S){this.h=S;const k=[];let x=!0;for(let P=C.length-1;P>=0;P--){const V=C[P]|0;x&&V==S||(k[P]=V,x=!1)}this.g=k}var m={};function g(C){return-128<=C&&C<128?u(C,function(S){return new h([S|0],S<0?-1:0)}):new h([C|0],C<0?-1:0)}function _(C){if(isNaN(C)||!isFinite(C))return I;if(C<0)return G(_(-C));const S=[];let k=1;for(let x=0;C>=k;x++)S[x]=C/k|0,k*=4294967296;return new h(S,0)}function E(C,S){if(C.length==0)throw Error("number format error: empty string");if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if(C.charAt(0)=="-")return G(E(C.substring(1),S));if(C.indexOf("-")>=0)throw Error('number format error: interior "-" character');const k=_(Math.pow(S,8));let x=I;for(let V=0;V<C.length;V+=8){var P=Math.min(8,C.length-V);const A=parseInt(C.substring(V,V+P),S);P<8?(P=_(Math.pow(S,P)),x=x.j(P).add(_(A))):(x=x.j(k),x=x.add(_(A)))}return x}var I=g(0),L=g(1),z=g(16777216);r=h.prototype,r.m=function(){if(X(this))return-G(this).m();let C=0,S=1;for(let k=0;k<this.g.length;k++){const x=this.i(k);C+=(x>=0?x:4294967296+x)*S,S*=4294967296}return C},r.toString=function(C){if(C=C||10,C<2||36<C)throw Error("radix out of range: "+C);if(J(this))return"0";if(X(this))return"-"+G(this).toString(C);const S=_(Math.pow(C,6));var k=this;let x="";for(;;){const P=Ne(k,S).g;k=re(k,P.j(S));let V=((k.g.length>0?k.g[0]:k.h)>>>0).toString(C);if(k=P,J(k))return V+x;for(;V.length<6;)V="0"+V;x=V+x}},r.i=function(C){return C<0?0:C<this.g.length?this.g[C]:this.h};function J(C){if(C.h!=0)return!1;for(let S=0;S<C.g.length;S++)if(C.g[S]!=0)return!1;return!0}function X(C){return C.h==-1}r.l=function(C){return C=re(this,C),X(C)?-1:J(C)?0:1};function G(C){const S=C.g.length,k=[];for(let x=0;x<S;x++)k[x]=~C.g[x];return new h(k,~C.h).add(L)}r.abs=function(){return X(this)?G(this):this},r.add=function(C){const S=Math.max(this.g.length,C.g.length),k=[];let x=0;for(let P=0;P<=S;P++){let V=x+(this.i(P)&65535)+(C.i(P)&65535),A=(V>>>16)+(this.i(P)>>>16)+(C.i(P)>>>16);x=A>>>16,V&=65535,A&=65535,k[P]=A<<16|V}return new h(k,k[k.length-1]&-2147483648?-1:0)};function re(C,S){return C.add(G(S))}r.j=function(C){if(J(this)||J(C))return I;if(X(this))return X(C)?G(this).j(G(C)):G(G(this).j(C));if(X(C))return G(this.j(G(C)));if(this.l(z)<0&&C.l(z)<0)return _(this.m()*C.m());const S=this.g.length+C.g.length,k=[];for(var x=0;x<2*S;x++)k[x]=0;for(x=0;x<this.g.length;x++)for(let P=0;P<C.g.length;P++){const V=this.i(x)>>>16,A=this.i(x)&65535,$e=C.i(P)>>>16,_t=C.i(P)&65535;k[2*x+2*P]+=A*_t,te(k,2*x+2*P),k[2*x+2*P+1]+=V*_t,te(k,2*x+2*P+1),k[2*x+2*P+1]+=A*$e,te(k,2*x+2*P+1),k[2*x+2*P+2]+=V*$e,te(k,2*x+2*P+2)}for(C=0;C<S;C++)k[C]=k[2*C+1]<<16|k[2*C];for(C=S;C<2*S;C++)k[C]=0;return new h(k,0)};function te(C,S){for(;(C[S]&65535)!=C[S];)C[S+1]+=C[S]>>>16,C[S]&=65535,S++}function pe(C,S){this.g=C,this.h=S}function Ne(C,S){if(J(S))throw Error("division by zero");if(J(C))return new pe(I,I);if(X(C))return S=Ne(G(C),S),new pe(G(S.g),G(S.h));if(X(S))return S=Ne(C,G(S)),new pe(G(S.g),S.h);if(C.g.length>30){if(X(C)||X(S))throw Error("slowDivide_ only works with positive integers.");for(var k=L,x=S;x.l(C)<=0;)k=Me(k),x=Me(x);var P=ke(k,1),V=ke(x,1);for(x=ke(x,2),k=ke(k,2);!J(x);){var A=V.add(x);A.l(C)<=0&&(P=P.add(k),V=A),x=ke(x,1),k=ke(k,1)}return S=re(C,P.j(S)),new pe(P,S)}for(P=I;C.l(S)>=0;){for(k=Math.max(1,Math.floor(C.m()/S.m())),x=Math.ceil(Math.log(k)/Math.LN2),x=x<=48?1:Math.pow(2,x-48),V=_(k),A=V.j(S);X(A)||A.l(C)>0;)k-=x,V=_(k),A=V.j(S);J(V)&&(V=L),P=P.add(V),C=re(C,A)}return new pe(P,C)}r.B=function(C){return Ne(this,C).h},r.and=function(C){const S=Math.max(this.g.length,C.g.length),k=[];for(let x=0;x<S;x++)k[x]=this.i(x)&C.i(x);return new h(k,this.h&C.h)},r.or=function(C){const S=Math.max(this.g.length,C.g.length),k=[];for(let x=0;x<S;x++)k[x]=this.i(x)|C.i(x);return new h(k,this.h|C.h)},r.xor=function(C){const S=Math.max(this.g.length,C.g.length),k=[];for(let x=0;x<S;x++)k[x]=this.i(x)^C.i(x);return new h(k,this.h^C.h)};function Me(C){const S=C.g.length+1,k=[];for(let x=0;x<S;x++)k[x]=C.i(x)<<1|C.i(x-1)>>>31;return new h(k,C.h)}function ke(C,S){const k=S>>5;S%=32;const x=C.g.length-k,P=[];for(let V=0;V<x;V++)P[V]=S>0?C.i(V+k)>>>S|C.i(V+k+1)<<32-S:C.i(V+k);return new h(P,C.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,__=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=E,wi=h}).apply(typeof Sg<"u"?Sg:typeof self<"u"?self:typeof window<"u"?window:{});var Iu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var v_,Ra,w_,Vu,Id,E_,T_,I_;(function(){var r,e=Object.defineProperty;function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Iu=="object"&&Iu];for(var p=0;p<l.length;++p){var y=l[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(l,p){if(p)e:{var y=s;l=l.split(".");for(var w=0;w<l.length-1;w++){var M=l[w];if(!(M in y))break e;y=y[M]}l=l[l.length-1],w=y[l],p=p(w),p!=w&&p!=null&&e(y,l,{configurable:!0,writable:!0,value:p})}}o("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(l){return l||function(p){var y=[],w;for(w in p)Object.prototype.hasOwnProperty.call(p,w)&&y.push([w,p[w]]);return y}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function m(l){var p=typeof l;return p=="object"&&l!=null||p=="function"}function g(l,p,y){return l.call.apply(l.bind,arguments)}function _(l,p,y){return _=g,_.apply(null,arguments)}function E(l,p){var y=Array.prototype.slice.call(arguments,1);return function(){var w=y.slice();return w.push.apply(w,arguments),l.apply(this,w)}}function I(l,p){function y(){}y.prototype=p.prototype,l.Z=p.prototype,l.prototype=new y,l.prototype.constructor=l,l.Ob=function(w,M,U){for(var Y=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)Y[ve-2]=arguments[ve];return p.prototype[M].apply(w,Y)}}var L=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function z(l){const p=l.length;if(p>0){const y=Array(p);for(let w=0;w<p;w++)y[w]=l[w];return y}return[]}function J(l,p){for(let w=1;w<arguments.length;w++){const M=arguments[w];var y=typeof M;if(y=y!="object"?y:M?Array.isArray(M)?"array":y:"null",y=="array"||y=="object"&&typeof M.length=="number"){y=l.length||0;const U=M.length||0;l.length=y+U;for(let Y=0;Y<U;Y++)l[y+Y]=M[Y]}else l.push(M)}}class X{constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function G(l){h.setTimeout(()=>{throw l},0)}function re(){var l=C;let p=null;return l.g&&(p=l.g,l.g=l.g.next,l.g||(l.h=null),p.next=null),p}class te{constructor(){this.h=this.g=null}add(p,y){const w=pe.get();w.set(p,y),this.h?this.h.next=w:this.g=w,this.h=w}}var pe=new X(()=>new Ne,l=>l.reset());class Ne{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Me,ke=!1,C=new te,S=()=>{const l=Promise.resolve(void 0);Me=()=>{l.then(k)}};function k(){for(var l;l=re();){try{l.h.call(l.g)}catch(y){G(y)}var p=pe;p.j(l),p.h<100&&(p.h++,l.next=p.g,p.g=l)}ke=!1}function x(){this.u=this.u,this.C=this.C}x.prototype.u=!1,x.prototype.dispose=function(){this.u||(this.u=!0,this.N())},x.prototype[Symbol.dispose]=function(){this.dispose()},x.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function P(l,p){this.type=l,this.g=this.target=p,this.defaultPrevented=!1}P.prototype.h=function(){this.defaultPrevented=!0};var V=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var l=!1,p=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const y=()=>{};h.addEventListener("test",y,p),h.removeEventListener("test",y,p)}catch{}return l})();function A(l){return/^[\s\xa0]*$/.test(l)}function $e(l,p){P.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,p)}I($e,P),$e.prototype.init=function(l,p){const y=this.type=l.type,w=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=p,p=l.relatedTarget,p||(y=="mouseover"?p=l.fromElement:y=="mouseout"&&(p=l.toElement)),this.relatedTarget=p,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&$e.Z.h.call(this)},$e.prototype.h=function(){$e.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var _t="closure_listenable_"+(Math.random()*1e6|0),Nt=0;function Je(l,p,y,w,M){this.listener=l,this.proxy=null,this.src=p,this.type=y,this.capture=!!w,this.ha=M,this.key=++Nt,this.da=this.fa=!1}function Z(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function ce(l,p,y){for(const w in l)p.call(y,l[w],w,l)}function ie(l,p){for(const y in l)p.call(void 0,l[y],y,l)}function D(l){const p={};for(const y in l)p[y]=l[y];return p}const H="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ee(l,p){let y,w;for(let M=1;M<arguments.length;M++){w=arguments[M];for(y in w)l[y]=w[y];for(let U=0;U<H.length;U++)y=H[U],Object.prototype.hasOwnProperty.call(w,y)&&(l[y]=w[y])}}function Te(l){this.src=l,this.g={},this.h=0}Te.prototype.add=function(l,p,y,w,M){const U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);const Y=Ce(l,p,w,M);return Y>-1?(p=l[Y],y||(p.fa=!1)):(p=new Je(p,this.src,U,!!w,M),p.fa=y,l.push(p)),p};function Re(l,p){const y=p.type;if(y in l.g){var w=l.g[y],M=Array.prototype.indexOf.call(w,p,void 0),U;(U=M>=0)&&Array.prototype.splice.call(w,M,1),U&&(Z(p),l.g[y].length==0&&(delete l.g[y],l.h--))}}function Ce(l,p,y,w){for(let M=0;M<l.length;++M){const U=l[M];if(!U.da&&U.listener==p&&U.capture==!!y&&U.ha==w)return M}return-1}var Fe="closure_lm_"+(Math.random()*1e6|0),Ve={};function ze(l,p,y,w,M){if(Array.isArray(p)){for(let U=0;U<p.length;U++)ze(l,p[U],y,w,M);return null}return y=xo(y),l&&l[_t]?l.J(p,y,m(w)?!!w.capture:!1,M):jt(l,p,y,!1,w,M)}function jt(l,p,y,w,M,U){if(!p)throw Error("Invalid event type");const Y=m(M)?!!M.capture:!!M;let ve=ws(l);if(ve||(l[Fe]=ve=new Te(l)),y=ve.add(p,y,w,Y,U),y.proxy)return y;if(w=_s(),y.proxy=w,w.src=l,w.listener=y,l.addEventListener)V||(M=Y),M===void 0&&(M=!1),l.addEventListener(p.toString(),w,M);else if(l.attachEvent)l.attachEvent(vs(p.toString()),w);else if(l.addListener&&l.removeListener)l.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return y}function _s(){function l(y){return p.call(l.src,l.listener,y)}const p=ol;return l}function No(l,p,y,w,M){if(Array.isArray(p))for(var U=0;U<p.length;U++)No(l,p[U],y,w,M);else w=m(w)?!!w.capture:!!w,y=xo(y),l&&l[_t]?(l=l.i,U=String(p).toString(),U in l.g&&(p=l.g[U],y=Ce(p,y,w,M),y>-1&&(Z(p[y]),Array.prototype.splice.call(p,y,1),p.length==0&&(delete l.g[U],l.h--)))):l&&(l=ws(l))&&(p=l.g[p.toString()],l=-1,p&&(l=Ce(p,y,w,M)),(y=l>-1?p[l]:null)&&Fr(y))}function Fr(l){if(typeof l!="number"&&l&&!l.da){var p=l.src;if(p&&p[_t])Re(p.i,l);else{var y=l.type,w=l.proxy;p.removeEventListener?p.removeEventListener(y,w,l.capture):p.detachEvent?p.detachEvent(vs(y),w):p.addListener&&p.removeListener&&p.removeListener(w),(y=ws(p))?(Re(y,l),y.h==0&&(y.src=null,p[Fe]=null)):Z(l)}}}function vs(l){return l in Ve?Ve[l]:Ve[l]="on"+l}function ol(l,p){if(l.da)l=!0;else{p=new $e(p,this);const y=l.listener,w=l.ha||l.src;l.fa&&Fr(l),l=y.call(w,p)}return l}function ws(l){return l=l[Fe],l instanceof Te?l:null}var xi="__closure_events_fn_"+(Math.random()*1e9>>>0);function xo(l){return typeof l=="function"?l:(l[xi]||(l[xi]=function(p){return l.handleEvent(p)}),l[xi])}function lt(){x.call(this),this.i=new Te(this),this.M=this,this.G=null}I(lt,x),lt.prototype[_t]=!0,lt.prototype.removeEventListener=function(l,p,y,w){No(this,l,p,y,w)};function it(l,p){var y,w=l.G;if(w)for(y=[];w;w=w.G)y.push(w);if(l=l.M,w=p.type||p,typeof p=="string")p=new P(p,l);else if(p instanceof P)p.target=p.target||l;else{var M=p;p=new P(w,l),Ee(p,M)}M=!0;let U,Y;if(y)for(Y=y.length-1;Y>=0;Y--)U=p.g=y[Y],M=yn(U,w,!0,p)&&M;if(U=p.g=l,M=yn(U,w,!0,p)&&M,M=yn(U,w,!1,p)&&M,y)for(Y=0;Y<y.length;Y++)U=p.g=y[Y],M=yn(U,w,!1,p)&&M}lt.prototype.N=function(){if(lt.Z.N.call(this),this.i){var l=this.i;for(const p in l.g){const y=l.g[p];for(let w=0;w<y.length;w++)Z(y[w]);delete l.g[p],l.h--}}this.G=null},lt.prototype.J=function(l,p,y,w){return this.i.add(String(l),p,!1,y,w)},lt.prototype.K=function(l,p,y,w){return this.i.add(String(l),p,!0,y,w)};function yn(l,p,y,w){if(p=l.i.g[String(p)],!p)return!0;p=p.concat();let M=!0;for(let U=0;U<p.length;++U){const Y=p[U];if(Y&&!Y.da&&Y.capture==y){const ve=Y.listener,st=Y.ha||Y.src;Y.fa&&Re(l.i,Y),M=ve.call(st,w)!==!1&&M}}return M&&!w.defaultPrevented}function Do(l,p){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=_(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:h.setTimeout(l,p||0)}function Vo(l){l.g=Do(()=>{l.g=null,l.i&&(l.i=!1,Vo(l))},l.l);const p=l.h;l.h=null,l.m.apply(null,p)}class al extends x{constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Vo(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ur(l){x.call(this),this.h=l,this.g={}}I(Ur,x);var Oo=[];function Es(l){ce(l.g,function(p,y){this.g.hasOwnProperty(y)&&Fr(p)},l),l.g={}}Ur.prototype.N=function(){Ur.Z.N.call(this),Es(this)},Ur.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var jr=h.JSON.stringify,ll=h.JSON.parse,Di=class{stringify(l){return h.JSON.stringify(l,void 0)}parse(l){return h.JSON.parse(l,void 0)}};function zr(){}function ul(){}var Br={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ts(){P.call(this,"d")}I(Ts,P);function Lo(){P.call(this,"c")}I(Lo,P);var _n={},Is=null;function $r(){return Is=Is||new lt}_n.Ia="serverreachability";function Ss(l){P.call(this,_n.Ia,l)}I(Ss,P);function ar(l){const p=$r();it(p,new Ss(p))}_n.STAT_EVENT="statevent";function lr(l,p){P.call(this,_n.STAT_EVENT,l),this.stat=p}I(lr,P);function nt(l){const p=$r();it(p,new lr(p,l))}_n.Ja="timingevent";function Mo(l,p){P.call(this,_n.Ja,l),this.size=p}I(Mo,P);function Hr(l,p){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){l()},p)}function qr(){this.g=!0}qr.prototype.ua=function(){this.g=!1};function cl(l,p,y,w,M,U){l.info(function(){if(l.g)if(U){var Y="",ve=U.split("&");for(let je=0;je<ve.length;je++){var st=ve[je].split("=");if(st.length>1){const ut=st[0];st=st[1];const nn=ut.split("_");Y=nn.length>=2&&nn[1]=="type"?Y+(ut+"="+st+"&"):Y+(ut+"=redacted&")}}}else Y=null;else Y=U;return"XMLHTTP REQ ("+w+") [attempt "+M+"]: "+p+`
`+y+`
`+Y})}function hl(l,p,y,w,M,U,Y){l.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+M+"]: "+p+`
`+y+`
`+U+" "+Y})}function Vn(l,p,y,w){l.info(function(){return"XMLHTTP TEXT ("+p+"): "+Vi(l,y)+(w?" "+w:"")})}function dl(l,p){l.info(function(){return"TIMEOUT: "+p})}qr.prototype.info=function(){};function Vi(l,p){if(!l.g)return p;if(!p)return null;try{const U=JSON.parse(p);if(U){for(l=0;l<U.length;l++)if(Array.isArray(U[l])){var y=U[l];if(!(y.length<2)){var w=y[1];if(Array.isArray(w)&&!(w.length<1)){var M=w[0];if(M!="noop"&&M!="stop"&&M!="close")for(let Y=1;Y<w.length;Y++)w[Y]=""}}}}return jr(U)}catch{return p}}var Wr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Kr={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},fl;function ur(){}I(ur,zr),ur.prototype.g=function(){return new XMLHttpRequest},fl=new ur;function On(l){return encodeURIComponent(String(l))}function As(l){var p=1;l=l.split(":");const y=[];for(;p>0&&l.length;)y.push(l.shift()),p--;return l.length&&y.push(l.join(":")),y}function an(l,p,y,w){this.j=l,this.i=p,this.l=y,this.S=w||1,this.V=new Ur(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new pl}function pl(){this.i=null,this.g="",this.h=!1}var ml={},bo={};function vn(l,p,y){l.M=1,l.A=hr(ln(p)),l.u=y,l.R=!0,Fo(l,null)}function Fo(l,p){l.F=Date.now(),Oi(l),l.B=ln(l.A);var y=l.B,w=l.S;Array.isArray(w)||(w=[String(w)]),Go(y.i,"t",w),l.C=0,y=l.j.L,l.h=new pl,l.g=Al(l.j,y?p:null,!l.u),l.P>0&&(l.O=new al(_(l.Y,l,l.g),l.P)),p=l.V,y=l.g,w=l.ba;var M="readystatechange";Array.isArray(M)||(M&&(Oo[0]=M.toString()),M=Oo);for(let U=0;U<M.length;U++){const Y=ze(y,M[U],w||p.handleEvent,!1,p.h||p);if(!Y)break;p.g[Y.key]=Y}p=l.J?D(l.J):{},l.u?(l.v||(l.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,p)):(l.v="GET",l.g.ea(l.B,l.v,null,p)),ar(),cl(l.i,l.v,l.B,l.l,l.S,l.u)}an.prototype.ba=function(l){l=l.target;const p=this.O;p&&zn(l)==3?p.j():this.Y(l)},an.prototype.Y=function(l){try{if(l==this.g)e:{const ve=zn(this.g),st=this.g.ya(),je=this.g.ca();if(!(ve<3)&&(ve!=3||this.g&&(this.h.h||this.g.la()||Il(this.g)))){this.K||ve!=4||st==7||(st==8||je<=0?ar(3):ar(2)),ks(this);var p=this.g.ca();this.X=p;var y=gl(this);if(this.o=p==200,hl(this.i,this.v,this.B,this.l,this.S,ve,p),this.o){if(this.U&&!this.L){t:{if(this.g){var w,M=this.g;if((w=M.g?M.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(w)){var U=w;break t}}U=null}if(l=U)Vn(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,We(this,l);else{this.o=!1,this.m=3,nt(12),cr(this),Li(this);break e}}if(this.R){l=!0;let ut;for(;!this.K&&this.C<y.length;)if(ut=_l(this,y),ut==bo){ve==4&&(this.m=4,nt(14),l=!1),Vn(this.i,this.l,null,"[Incomplete Response]");break}else if(ut==ml){this.m=4,nt(15),Vn(this.i,this.l,y,"[Invalid Chunk]"),l=!1;break}else Vn(this.i,this.l,ut,null),We(this,ut);if(yl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ve!=4||y.length!=0||this.h.h||(this.m=1,nt(16),l=!1),this.o=this.o&&l,!l)Vn(this.i,this.l,y,"[Invalid Chunked Response]"),cr(this),Li(this);else if(y.length>0&&!this.W){this.W=!0;var Y=this.j;Y.g==this&&Y.aa&&!Y.P&&(Y.j.info("Great, no buffering proxy detected. Bytes received: "+y.length),Hi(Y),Y.P=!0,nt(11))}}else Vn(this.i,this.l,y,null),We(this,y);ve==4&&cr(this),this.o&&!this.K&&(ve==4?Ms(this.j,this):(this.o=!1,Oi(this)))}else Xo(this.g),p==400&&y.indexOf("Unknown SID")>0?(this.m=3,nt(12)):(this.m=0,nt(13)),cr(this),Li(this)}}}catch{}finally{}};function gl(l){if(!yl(l))return l.g.la();const p=Il(l.g);if(p==="")return"";let y="";const w=p.length,M=zn(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return cr(l),Li(l),"";l.h.i=new h.TextDecoder}for(let U=0;U<w;U++)l.h.h=!0,y+=l.h.i.decode(p[U],{stream:!(M&&U==w-1)});return p.length=0,l.h.g+=y,l.C=0,l.h.g}function yl(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function _l(l,p){var y=l.C,w=p.indexOf(`
`,y);return w==-1?bo:(y=Number(p.substring(y,w)),isNaN(y)?ml:(w+=1,w+y>p.length?bo:(p=p.slice(w,w+y),l.C=w+y,p)))}an.prototype.cancel=function(){this.K=!0,cr(this)};function Oi(l){l.T=Date.now()+l.H,Uo(l,l.H)}function Uo(l,p){if(l.D!=null)throw Error("WatchDog timer not null");l.D=Hr(_(l.aa,l),p)}function ks(l){l.D&&(h.clearTimeout(l.D),l.D=null)}an.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(dl(this.i,this.B),this.M!=2&&(ar(),nt(17)),cr(this),this.m=2,Li(this)):Uo(this,this.T-l)};function Li(l){l.j.I==0||l.K||Ms(l.j,l)}function cr(l){ks(l);var p=l.O;p&&typeof p.dispose=="function"&&p.dispose(),l.O=null,Es(l.V),l.g&&(p=l.g,l.g=null,p.abort(),p.dispose())}function We(l,p){try{var y=l.j;if(y.I!=0&&(y.g==l||zo(y.h,l))){if(!l.L&&zo(y.h,l)&&y.I==3){try{var w=y.Ba.g.parse(p)}catch{w=null}if(Array.isArray(w)&&w.length==3){var M=w;if(M[0]==0){e:if(!y.v){if(y.g)if(y.g.F+3e3<l.F)Ls(y),en(y);else break e;Hn(y),nt(18)}}else y.xa=M[1],0<y.xa-y.K&&M[2]<37500&&y.F&&y.A==0&&!y.C&&(y.C=Hr(_(y.Va,y),6e3));Mi(y.h)<=1&&y.ta&&(y.ta=void 0)}else tn(y,11)}else if((l.L||y.g==l)&&Ls(y),!A(p))for(M=y.Ba.g.parse(p),p=0;p<M.length;p++){let je=M[p];const ut=je[0];if(!(ut<=y.K))if(y.K=ut,je=je[1],y.I==2)if(je[0]=="c"){y.M=je[1],y.ba=je[2];const nn=je[3];nn!=null&&(y.ka=nn,y.j.info("VER="+y.ka));const gr=je[4];gr!=null&&(y.za=gr,y.j.info("SVER="+y.za));const qn=je[5];qn!=null&&typeof qn=="number"&&qn>0&&(w=1.5*qn,y.O=w,y.j.info("backChannelRequestTimeoutMs_="+w)),w=y;const Wn=l.g;if(Wn){const Us=Wn.g?Wn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Us){var U=w.h;U.g||Us.indexOf("spdy")==-1&&Us.indexOf("quic")==-1&&Us.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(Cs(U,U.h),U.h=null))}if(w.G){const Zo=Wn.g?Wn.g.getResponseHeader("X-HTTP-Session-Id"):null;Zo&&(w.wa=Zo,be(w.J,w.G,Zo))}}y.I=3,y.l&&y.l.ra(),y.aa&&(y.T=Date.now()-l.F,y.j.info("Handshake RTT: "+y.T+"ms")),w=y;var Y=l;if(w.na=Yo(w,w.L?w.ba:null,w.W),Y.L){bi(w.h,Y);var ve=Y,st=w.O;st&&(ve.H=st),ve.D&&(ks(ve),Oi(ve)),w.g=Y}else xt(w);y.i.length>0&&mr(y)}else je[0]!="stop"&&je[0]!="close"||tn(y,7);else y.I==3&&(je[0]=="stop"||je[0]=="close"?je[0]=="stop"?tn(y,7):Vs(y):je[0]!="noop"&&y.l&&y.l.qa(je),y.A=0)}}ar(4)}catch{}}var Pc=class{constructor(l,p){this.g=l,this.map=p}};function Rs(l){this.l=l||10,h.PerformanceNavigationTiming?(l=h.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function jo(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Mi(l){return l.h?1:l.g?l.g.size:0}function zo(l,p){return l.h?l.h==p:l.g?l.g.has(p):!1}function Cs(l,p){l.g?l.g.add(p):l.h=p}function bi(l,p){l.h&&l.h==p?l.h=null:l.g&&l.g.has(p)&&l.g.delete(p)}Rs.prototype.cancel=function(){if(this.i=Jt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Jt(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let p=l.i;for(const y of l.g.values())p=p.concat(y.G);return p}return z(l.i)}var vl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Yt(l,p){if(l){l=l.split("&");for(let y=0;y<l.length;y++){const w=l[y].indexOf("=");let M,U=null;w>=0?(M=l[y].substring(0,w),U=l[y].substring(w+1)):M=l[y],p(M,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function Ln(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;l instanceof Ln?(this.l=l.l,Fi(this,l.j),this.o=l.o,this.g=l.g,Mn(this,l.u),this.h=l.h,Gr(this,Qo(l.i)),this.m=l.m):l&&(p=String(l).match(vl))?(this.l=!1,Fi(this,p[1]||"",!0),this.o=Ui(p[2]||""),this.g=Ui(p[3]||"",!0),Mn(this,p[4]),this.h=Ui(p[5]||"",!0),Gr(this,p[6]||"",!0),this.m=Ui(p[7]||"")):(this.l=!1,this.i=new xe(null,this.l))}Ln.prototype.toString=function(){const l=[];var p=this.j;p&&l.push(ji(p,$o,!0),":");var y=this.g;return(y||p=="file")&&(l.push("//"),(p=this.o)&&l.push(ji(p,$o,!0),"@"),l.push(On(y).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.u,y!=null&&l.push(":",String(y))),(y=this.h)&&(this.g&&y.charAt(0)!="/"&&l.push("/"),l.push(ji(y,y.charAt(0)=="/"?zi:Ho,!0))),(y=this.i.toString())&&l.push("?",y),(y=this.m)&&l.push("#",ji(y,qo)),l.join("")},Ln.prototype.resolve=function(l){const p=ln(this);let y=!!l.j;y?Fi(p,l.j):y=!!l.o,y?p.o=l.o:y=!!l.g,y?p.g=l.g:y=l.u!=null;var w=l.h;if(y)Mn(p,l.u);else if(y=!!l.h){if(w.charAt(0)!="/")if(this.g&&!this.h)w="/"+w;else{var M=p.h.lastIndexOf("/");M!=-1&&(w=p.h.slice(0,M+1)+w)}if(M=w,M==".."||M==".")w="";else if(M.indexOf("./")!=-1||M.indexOf("/.")!=-1){w=M.lastIndexOf("/",0)==0,M=M.split("/");const U=[];for(let Y=0;Y<M.length;){const ve=M[Y++];ve=="."?w&&Y==M.length&&U.push(""):ve==".."?((U.length>1||U.length==1&&U[0]!="")&&U.pop(),w&&Y==M.length&&U.push("")):(U.push(ve),w=!0)}w=U.join("/")}else w=M}return y?p.h=w:y=l.i.toString()!=="",y?Gr(p,Qo(l.i)):y=!!l.m,y&&(p.m=l.m),p};function ln(l){return new Ln(l)}function Fi(l,p,y){l.j=y?Ui(p,!0):p,l.j&&(l.j=l.j.replace(/:$/,""))}function Mn(l,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);l.u=p}else l.u=null}function Gr(l,p,y){p instanceof xe?(l.i=p,Ns(l.i,l.l)):(y||(p=ji(p,Nc)),l.i=new xe(p,l.l))}function be(l,p,y){l.i.set(p,y)}function hr(l){return be(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function Ui(l,p){return l?p?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function ji(l,p,y){return typeof l=="string"?(l=encodeURI(l).replace(p,Bo),y&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Bo(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var $o=/[#\/\?@]/g,Ho=/[#\?:]/g,zi=/[#\?]/g,Nc=/[#\?@]/g,qo=/#/g;function xe(l,p){this.h=this.g=null,this.i=l||null,this.j=!!p}function bn(l){l.g||(l.g=new Map,l.h=0,l.i&&Yt(l.i,function(p,y){l.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}r=xe.prototype,r.add=function(l,p){bn(this),this.i=null,l=Fn(this,l);let y=this.g.get(l);return y||this.g.set(l,y=[]),y.push(p),this.h+=1,this};function Wo(l,p){bn(l),p=Fn(l,p),l.g.has(p)&&(l.i=null,l.h-=l.g.get(p).length,l.g.delete(p))}function Ps(l,p){return bn(l),p=Fn(l,p),l.g.has(p)}r.forEach=function(l,p){bn(this),this.g.forEach(function(y,w){y.forEach(function(M){l.call(p,M,w,this)},this)},this)};function Ko(l,p){bn(l);let y=[];if(typeof p=="string")Ps(l,p)&&(y=y.concat(l.g.get(Fn(l,p))));else for(l=Array.from(l.g.values()),p=0;p<l.length;p++)y=y.concat(l[p]);return y}r.set=function(l,p){return bn(this),this.i=null,l=Fn(this,l),Ps(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[p]),this.h+=1,this},r.get=function(l,p){return l?(l=Ko(this,l),l.length>0?String(l[0]):p):p};function Go(l,p,y){Wo(l,p),y.length>0&&(l.i=null,l.g.set(Fn(l,p),z(y)),l.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],p=Array.from(this.g.keys());for(let w=0;w<p.length;w++){var y=p[w];const M=On(y);y=Ko(this,y);for(let U=0;U<y.length;U++){let Y=M;y[U]!==""&&(Y+="="+On(y[U])),l.push(Y)}}return this.i=l.join("&")};function Qo(l){const p=new xe;return p.i=l.i,l.g&&(p.g=new Map(l.g),p.h=l.h),p}function Fn(l,p){return p=String(p),l.j&&(p=p.toLowerCase()),p}function Ns(l,p){p&&!l.j&&(bn(l),l.i=null,l.g.forEach(function(y,w){const M=w.toLowerCase();w!=M&&(Wo(this,w),Go(this,M,y))},l)),l.j=p}function Un(l,p){const y=new qr;if(h.Image){const w=new Image;w.onload=E(It,y,"TestLoadImage: loaded",!0,p,w),w.onerror=E(It,y,"TestLoadImage: error",!1,p,w),w.onabort=E(It,y,"TestLoadImage: abort",!1,p,w),w.ontimeout=E(It,y,"TestLoadImage: timeout",!1,p,w),h.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=l}else p(!1)}function jn(l,p){const y=new qr,w=new AbortController,M=setTimeout(()=>{w.abort(),It(y,"TestPingServer: timeout",!1,p)},1e4);fetch(l,{signal:w.signal}).then(U=>{clearTimeout(M),U.ok?It(y,"TestPingServer: ok",!0,p):It(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(M),It(y,"TestPingServer: error",!1,p)})}function It(l,p,y,w,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),w(y)}catch{}}function Bi(){this.g=new Di}function dr(l){this.i=l.Sb||null,this.h=l.ab||!1}I(dr,zr),dr.prototype.g=function(){return new Zt(this.i,this.h)};function Zt(l,p){lt.call(this),this.H=l,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}I(Zt,lt),r=Zt.prototype,r.open=function(l,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=p,this.readyState=1,wn(this)},r.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(p.body=l),(this.H||h).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Qr(this)),this.readyState=0},r.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,wn(this)),this.g&&(this.readyState=3,wn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;wl(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function wl(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}r.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var p=l.value?l.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!l.done}))&&(this.response=this.responseText+=p)}l.done?Qr(this):wn(this),this.readyState==3&&wl(this)}},r.Oa=function(l){this.g&&(this.response=this.responseText=l,Qr(this))},r.Na=function(l){this.g&&(this.response=l,Qr(this))},r.ga=function(){this.g&&Qr(this)};function Qr(l){l.readyState=4,l.l=null,l.j=null,l.B=null,wn(l)}r.setRequestHeader=function(l,p){this.A.append(l,p)},r.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,l.push(y[0]+": "+y[1]),y=p.next();return l.join(`\r
`)};function wn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Zt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function El(l){let p="";return ce(l,function(y,w){p+=w,p+=":",p+=y,p+=`\r
`}),p}function xs(l,p,y){e:{for(w in y){var w=!1;break e}w=!0}w||(y=El(y),typeof l=="string"?y!=null&&On(y):be(l,p,y))}function Be(l){lt.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}I(Be,lt);var Tl=/^https?$/i,xc=["POST","PUT"];r=Be.prototype,r.Fa=function(l){this.H=l},r.ea=function(l,p,y,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);p=p?p.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():fl.g(),this.g.onreadystatechange=L(_(this.Ca,this));try{this.B=!0,this.g.open(p,String(l),!0),this.B=!1}catch(U){Xr(this,U);return}if(l=y||"",y=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var M in w)y.set(M,w[M]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const U of w.keys())y.set(U,w.get(U));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(y.keys()).find(U=>U.toLowerCase()=="content-type"),M=h.FormData&&l instanceof h.FormData,!(Array.prototype.indexOf.call(xc,p,void 0)>=0)||w||M||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,Y]of y)this.g.setRequestHeader(U,Y);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(U){Xr(this,U)}};function Xr(l,p){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=p,l.o=5,Jr(l),pr(l)}function Jr(l){l.A||(l.A=!0,it(l,"complete"),it(l,"error"))}r.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,it(this,"complete"),it(this,"abort"),pr(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),pr(this,!0)),Be.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?fr(this):this.Xa())},r.Xa=function(){fr(this)};function fr(l){if(l.h&&typeof u<"u"){if(l.v&&zn(l)==4)setTimeout(l.Ca.bind(l),0);else if(it(l,"readystatechange"),zn(l)==4){l.h=!1;try{const U=l.ca();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var y;if(!(y=p)){var w;if(w=U===0){let Y=String(l.D).match(vl)[1]||null;!Y&&h.self&&h.self.location&&(Y=h.self.location.protocol.slice(0,-1)),w=!Tl.test(Y?Y.toLowerCase():"")}y=w}if(y)it(l,"complete"),it(l,"success");else{l.o=6;try{var M=zn(l)>2?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.ca()+"]",Jr(l)}}finally{pr(l)}}}}function pr(l,p){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const y=l.g;l.g=null,p||it(l,"ready");try{y.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function zn(l){return l.g?l.g.readyState:0}r.ca=function(){try{return zn(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(l){if(this.g){var p=this.g.responseText;return l&&p.indexOf(l)==0&&(p=p.substring(l.length)),ll(p)}};function Il(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Xo(l){const p={};l=(l.g&&zn(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<l.length;w++){if(A(l[w]))continue;var y=As(l[w]);const M=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const U=p[M]||[];p[M]=U,U.push(y)}ie(p,function(w){return w.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Bn(l,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[l]||p}function Ds(l){this.za=0,this.i=[],this.j=new qr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Bn("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Bn("baseRetryDelayMs",5e3,l),this.Za=Bn("retryDelaySeedMs",1e4,l),this.Ta=Bn("forwardChannelMaxRetries",2,l),this.va=Bn("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new Rs(l&&l.concurrentRequestLimit),this.Ba=new Bi,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=Ds.prototype,r.ka=8,r.I=1,r.connect=function(l,p,y,w){nt(0),this.W=l,this.H=p||{},y&&w!==void 0&&(this.H.OSID=y,this.H.OAID=w),this.F=this.X,this.J=Yo(this,null,this.W),mr(this)};function Vs(l){if(Os(l),l.I==3){var p=l.V++,y=ln(l.J);if(be(y,"SID",l.M),be(y,"RID",p),be(y,"TYPE","terminate"),$n(l,y),p=new an(l,l.j,p),p.M=2,p.A=hr(ln(y)),y=!1,h.navigator&&h.navigator.sendBeacon)try{y=h.navigator.sendBeacon(p.A.toString(),"")}catch{}!y&&h.Image&&(new Image().src=p.A,y=!0),y||(p.g=Al(p.j,null),p.g.ea(p.A)),p.F=Date.now(),Oi(p)}qi(l)}function en(l){l.g&&(Hi(l),l.g.cancel(),l.g=null)}function Os(l){en(l),l.v&&(h.clearTimeout(l.v),l.v=null),Ls(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&h.clearTimeout(l.m),l.m=null)}function mr(l){if(!jo(l.h)&&!l.m){l.m=!0;var p=l.Ea;Me||S(),ke||(Me(),ke=!0),C.add(p,l),l.D=0}}function Sl(l,p){return Mi(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=p.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=Hr(_(l.Ea,l,p),bs(l,l.D)),l.D++,!0)}r.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const M=new an(this,this.j,l);let U=this.o;if(this.U&&(U?(U=D(U),Ee(U,this.U)):U=this.U),this.u!==null||this.R||(M.J=U,U=null),this.S)e:{for(var p=0,y=0;y<this.i.length;y++){t:{var w=this.i[y];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(p+=w,p>4096){p=y;break e}if(p===4096||y===this.i.length-1){p=y+1;break e}}p=1e3}else p=1e3;p=Jo(this,M,p),y=ln(this.J),be(y,"RID",l),be(y,"CVER",22),this.G&&be(y,"X-HTTP-Session-Id",this.G),$n(this,y),U&&(this.R?p="headers="+On(El(U))+"&"+p:this.u&&xs(y,this.u,U)),Cs(this.h,M),this.Ra&&be(y,"TYPE","init"),this.S?(be(y,"$req",p),be(y,"SID","null"),M.U=!0,vn(M,y,null)):vn(M,y,p),this.I=2}}else this.I==3&&(l?$i(this,l):this.i.length==0||jo(this.h)||$i(this))};function $i(l,p){var y;p?y=p.l:y=l.V++;const w=ln(l.J);be(w,"SID",l.M),be(w,"RID",y),be(w,"AID",l.K),$n(l,w),l.u&&l.o&&xs(w,l.u,l.o),y=new an(l,l.j,y,l.D+1),l.u===null&&(y.J=l.o),p&&(l.i=p.G.concat(l.i)),p=Jo(l,y,1e3),y.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),Cs(l.h,y),vn(y,w,p)}function $n(l,p){l.H&&ce(l.H,function(y,w){be(p,w,y)}),l.l&&ce({},function(y,w){be(p,w,y)})}function Jo(l,p,y){y=Math.min(l.i.length,y);const w=l.l?_(l.l.Ka,l.l,l):null;e:{var M=l.i;let ve=-1;for(;;){const st=["count="+y];ve==-1?y>0?(ve=M[0].g,st.push("ofs="+ve)):ve=0:st.push("ofs="+ve);let je=!0;for(let ut=0;ut<y;ut++){var U=M[ut].g;const nn=M[ut].map;if(U-=ve,U<0)ve=Math.max(0,M[ut].g-100),je=!1;else try{U="req"+U+"_"||"";try{var Y=nn instanceof Map?nn:Object.entries(nn);for(const[gr,qn]of Y){let Wn=qn;m(qn)&&(Wn=jr(qn)),st.push(U+gr+"="+encodeURIComponent(Wn))}}catch(gr){throw st.push(U+"type="+encodeURIComponent("_badmap")),gr}}catch{w&&w(nn)}}if(je){Y=st.join("&");break e}}Y=void 0}return l=l.i.splice(0,y),p.G=l,Y}function xt(l){if(!l.g&&!l.v){l.Y=1;var p=l.Da;Me||S(),ke||(Me(),ke=!0),C.add(p,l),l.A=0}}function Hn(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=Hr(_(l.Da,l),bs(l,l.A)),l.A++,!0)}r.Da=function(){if(this.v=null,Yr(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=Hr(_(this.Wa,this),l)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,nt(10),en(this),Yr(this))};function Hi(l){l.B!=null&&(h.clearTimeout(l.B),l.B=null)}function Yr(l){l.g=new an(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var p=ln(l.na);be(p,"RID","rpc"),be(p,"SID",l.M),be(p,"AID",l.K),be(p,"CI",l.F?"0":"1"),!l.F&&l.ia&&be(p,"TO",l.ia),be(p,"TYPE","xmlhttp"),$n(l,p),l.u&&l.o&&xs(p,l.u,l.o),l.O&&(l.g.H=l.O);var y=l.g;l=l.ba,y.M=1,y.A=hr(ln(p)),y.u=null,y.R=!0,Fo(y,l)}r.Va=function(){this.C!=null&&(this.C=null,en(this),Hn(this),nt(19))};function Ls(l){l.C!=null&&(h.clearTimeout(l.C),l.C=null)}function Ms(l,p){var y=null;if(l.g==p){Ls(l),Hi(l),l.g=null;var w=2}else if(zo(l.h,p))y=p.G,bi(l.h,p),w=1;else return;if(l.I!=0){if(p.o)if(w==1){y=p.u?p.u.length:0,p=Date.now()-p.F;var M=l.D;w=$r(),it(w,new Mo(w,y)),mr(l)}else xt(l);else if(M=p.m,M==3||M==0&&p.X>0||!(w==1&&Sl(l,p)||w==2&&Hn(l)))switch(y&&y.length>0&&(p=l.h,p.i=p.i.concat(y)),M){case 1:tn(l,5);break;case 4:tn(l,10);break;case 3:tn(l,6);break;default:tn(l,2)}}}function bs(l,p){let y=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(y*=2),y*p}function tn(l,p){if(l.j.info("Error code "+p),p==2){var y=_(l.bb,l),w=l.Ua;const M=!w;w=new Ln(w||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Fi(w,"https"),hr(w),M?Un(w.toString(),y):jn(w.toString(),y)}else nt(2);l.I=0,l.l&&l.l.pa(p),qi(l),Os(l)}r.bb=function(l){l?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function qi(l){if(l.I=0,l.ja=[],l.l){const p=Jt(l.h);(p.length!=0||l.i.length!=0)&&(J(l.ja,p),J(l.ja,l.i),l.h.i.length=0,z(l.i),l.i.length=0),l.l.oa()}}function Yo(l,p,y){var w=y instanceof Ln?ln(y):new Ln(y);if(w.g!="")p&&(w.g=p+"."+w.g),Mn(w,w.u);else{var M=h.location;w=M.protocol,p=p?p+"."+M.hostname:M.hostname,M=+M.port;const U=new Ln(null);w&&Fi(U,w),p&&(U.g=p),M&&Mn(U,M),y&&(U.h=y),w=U}return y=l.G,p=l.wa,y&&p&&be(w,y,p),be(w,"VER",l.ka),$n(l,w),w}function Al(l,p,y){if(p&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=l.Aa&&!l.ma?new Be(new dr({ab:y})):new Be(l.ma),p.Fa(l.L),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function kl(){}r=kl.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function Fs(){}Fs.prototype.g=function(l,p){return new St(l,p)};function St(l,p){lt.call(this),this.g=new Ds(p),this.l=l,this.h=p&&p.messageUrlParams||null,l=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(l?l["X-WebChannel-Content-Type"]=p.messageContentType:l={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(l?l["X-WebChannel-Client-Profile"]=p.sa:l={"X-WebChannel-Client-Profile":p.sa}),this.g.U=l,(l=p&&p.Qb)&&!A(l)&&(this.g.u=l),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!A(p)&&(this.g.G=p,l=this.h,l!==null&&p in l&&(l=this.h,p in l&&delete l[p])),this.j=new Zr(this)}I(St,lt),St.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){Vs(this.g)},St.prototype.o=function(l){var p=this.g;if(typeof l=="string"){var y={};y.__data__=l,l=y}else this.v&&(y={},y.__data__=jr(l),l=y);p.i.push(new Pc(p.Ya++,l)),p.I==3&&mr(p)},St.prototype.N=function(){this.g.l=null,delete this.j,Vs(this.g),delete this.g,St.Z.N.call(this)};function Rl(l){Ts.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var p=l.__sm__;if(p){e:{for(const y in p){l=y;break e}l=void 0}(this.i=l)&&(l=this.i,p=p!==null&&l in p?p[l]:void 0),this.data=p}else this.data=l}I(Rl,Ts);function Cl(){Lo.call(this),this.status=1}I(Cl,Lo);function Zr(l){this.g=l}I(Zr,kl),Zr.prototype.ra=function(){it(this.g,"a")},Zr.prototype.qa=function(l){it(this.g,new Rl(l))},Zr.prototype.pa=function(l){it(this.g,new Cl)},Zr.prototype.oa=function(){it(this.g,"b")},Fs.prototype.createWebChannel=Fs.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,I_=function(){return new Fs},T_=function(){return $r()},E_=_n,Id={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Wr.NO_ERROR=0,Wr.TIMEOUT=8,Wr.HTTP_ERROR=6,Vu=Wr,Kr.COMPLETE="complete",w_=Kr,ul.EventType=Br,Br.OPEN="a",Br.CLOSE="b",Br.ERROR="c",Br.MESSAGE="d",lt.prototype.listen=lt.prototype.J,Ra=ul,Be.prototype.listenOnce=Be.prototype.K,Be.prototype.getLastError=Be.prototype.Ha,Be.prototype.getLastErrorCode=Be.prototype.ya,Be.prototype.getStatus=Be.prototype.ca,Be.prototype.getResponseJson=Be.prototype.La,Be.prototype.getResponseText=Be.prototype.la,Be.prototype.send=Be.prototype.ea,Be.prototype.setWithCredentials=Be.prototype.Fa,v_=Be}).apply(typeof Iu<"u"?Iu:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */let ko="12.14.0";function eS(r){ko=r}/**
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
 */const hs=new cc("@firebase/firestore");function oo(){return hs.logLevel}function ee(r,...e){if(hs.logLevel<=Pe.DEBUG){const t=e.map(nf);hs.debug(`Firestore (${ko}): ${r}`,...t)}}function Or(r,...e){if(hs.logLevel<=Pe.ERROR){const t=e.map(nf);hs.error(`Firestore (${ko}): ${r}`,...t)}}function ds(r,...e){if(hs.logLevel<=Pe.WARN){const t=e.map(nf);hs.warn(`Firestore (${ko}): ${r}`,...t)}}function nf(r){if(typeof r=="string")return r;try{return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
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
 */function me(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,S_(r,s,t)}function S_(r,e,t){let s=`FIRESTORE (${ko}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Or(s),new Error(s)}function Ue(r,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,r||S_(e,o,s)}function we(r,e){return r}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class le extends Mr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Nr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class A_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(bt.UNAUTHENTICATED)))}shutdown(){}}class nS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class rS{constructor(e){this.t=e,this.currentUser=bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ue(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let u=new Nr;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Nr,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=u;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},m=g=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>m(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Nr)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ue(typeof s.accessToken=="string",31837,{l:s}),new A_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string",2055,{h:e}),new bt(e)}}class iS{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=bt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class sS{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new iS(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(bt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ag{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oS{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Rn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ue(this.o===void 0,3512);const s=u=>{u.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,ee("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ag(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ue(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ag(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function aS(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class rf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=aS(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Se(r,e){return r<e?-1:r>e?1:0}function Sd(r,e){const t=Math.min(r.length,e.length);for(let s=0;s<t;s++){const o=r.charAt(s),u=e.charAt(s);if(o!==u)return cd(o)===cd(u)?Se(o,u):cd(o)?1:-1}return Se(r.length,e.length)}const lS=55296,uS=57343;function cd(r){const e=r.charCodeAt(0);return e>=lS&&e<=uS}function _o(r,e,t){return r.length===e.length&&r.every(((s,o)=>t(s,e[o])))}/**
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
 */const kg="__name__";class Jn{constructor(e,t,s){t===void 0?t=0:t>e.length&&me(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&me(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Jn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Jn?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Jn.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Se(e.length,t.length)}static compareSegments(e,t){const s=Jn.isNumericId(e),o=Jn.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Jn.extractNumericId(e).compare(Jn.extractNumericId(t)):Sd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return wi.fromString(e.substring(4,e.length-2))}}class Qe extends Jn{construct(e,t,s){return new Qe(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new le($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new Qe(t)}static emptyPath(){return new Qe([])}}const cS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ct extends Jn{construct(e,t,s){return new Ct(e,t,s)}static isValidIdentifier(e){return cS.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ct.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===kg}static keyField(){return new Ct([kg])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new le($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new le($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new le($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new le($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ct(t)}static emptyPath(){return new Ct([])}}/**
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
 */class he{constructor(e){this.path=e}static fromPath(e){return new he(Qe.fromString(e))}static fromName(e){return new he(Qe.fromString(e).popFirst(5))}static empty(){return new he(Qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Qe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new he(new Qe(e.slice()))}}/**
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
 */function k_(r,e,t){if(!t)throw new le($.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function hS(r,e,t,s){if(e===!0&&s===!0)throw new le($.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Rg(r){if(!he.isDocumentKey(r))throw new le($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Cg(r){if(he.isDocumentKey(r))throw new le($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function R_(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function sf(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":me(12329,{type:typeof r})}function Ii(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new le($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=sf(r);throw new le($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */function dt(r,e){const t={typeString:r};return e&&(t.value=e),t}function Za(r,e){if(!R_(r))throw new le($.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const h=r[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new le($.INVALID_ARGUMENT,t);return!0}/**
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
 */const Pg=-62135596800,Ng=1e6;class Xe{static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Ng);return new Xe(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new le($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new le($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Pg)throw new le($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new le($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ng}_compareTo(e){return this.seconds===e.seconds?Se(this.nanoseconds,e.nanoseconds):Se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Xe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Za(e,Xe._jsonSchema))return new Xe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Pg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Xe._jsonSchemaVersion="firestore/timestamp/1.0",Xe._jsonSchema={type:dt("string",Xe._jsonSchemaVersion),seconds:dt("number"),nanoseconds:dt("number")};/**
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
 */class _e{static fromTimestamp(e){return new _e(e)}static min(){return new _e(new Xe(0,0))}static max(){return new _e(new Xe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ja=-1;function dS(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=_e.fromTimestamp(s===1e9?new Xe(t+1,0):new Xe(t,s));return new Si(o,he.empty(),e)}function fS(r){return new Si(r.readTime,r.key,ja)}class Si{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Si(_e.min(),he.empty(),ja)}static max(){return new Si(_e.max(),he.empty(),ja)}}function pS(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=he.comparator(r.documentKey,e.documentKey),t!==0?t:Se(r.largestBatchId,e.largestBatchId))}/**
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
 */const mS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Ro(r){if(r.code!==$.FAILED_PRECONDITION||r.message!==mS)throw r;ee("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&me(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new B(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof B?t:B.resolve(t)}catch(t){return B.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):B.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):B.reject(t)}static resolve(e){return new B(((t,s)=>{t(e)}))}static reject(e){return new B(((t,s)=>{s(e)}))}static waitFor(e){return new B(((t,s)=>{let o=0,u=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++u,h&&u===o&&t()}),(g=>s(g)))})),h=!0,u===o&&t()}))}static or(e){let t=B.resolve(!1);for(const s of e)t=t.next((o=>o?B.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,u)=>{s.push(t.call(this,o,u))})),this.waitFor(s)}static mapArray(e,t){return new B(((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let g=0;g<u;g++){const _=g;t(e[_]).next((E=>{h[_]=E,++m,m===u&&s(h)}),(E=>o(E)))}}))}static doWhile(e,t){return new B(((s,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):s()};u()}))}}function yS(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Co(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class pc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}pc.ce=-1;/**
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
 */const of=-1;function mc(r){return r==null}function Ku(r){return r===0&&1/r==-1/0}function _S(r){return typeof r=="number"&&Number.isInteger(r)&&!Ku(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const C_="";function vS(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=xg(e)),e=wS(r.get(t),e);return xg(e)}function wS(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":t+="";break;case C_:t+="";break;default:t+=u}}return t}function xg(r){return r+C_+""}/**
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
 */function Dg(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function ps(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function P_(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class Ze{constructor(e,t){this.comparator=e,this.root=t||Rt.EMPTY}insert(e,t){return new Ze(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Rt.BLACK,null,null))}remove(e){return new Ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Rt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Su(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Su(this.root,e,this.comparator,!1)}getReverseIterator(){return new Su(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Su(this.root,e,this.comparator,!0)}}class Su{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Rt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Rt.RED,this.left=o??Rt.EMPTY,this.right=u??Rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Rt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Rt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw me(43730,{key:this.key,value:this.value});if(this.right.isRed())throw me(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw me(27949);return e+(this.isRed()?0:1)}}Rt.EMPTY=null,Rt.RED=!0,Rt.BLACK=!1;Rt.EMPTY=new class{constructor(){this.size=0}get key(){throw me(57766)}get value(){throw me(16141)}get color(){throw me(16727)}get left(){throw me(29726)}get right(){throw me(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new Rt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class yt{constructor(e){this.comparator=e,this.data=new Ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Vg(this.data.getIterator())}getIteratorFrom(e){return new Vg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof yt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new yt(this.comparator);return t.data=e,t}}class Vg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Pn{constructor(e){this.fields=e,e.sort(Ct.comparator)}static empty(){return new Pn([])}unionWith(e){let t=new yt(Ct.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Pn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return _o(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class N_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Pt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new N_("Invalid base64 string: "+u):u}})(e);return new Pt(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u})(e);return new Pt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pt.EMPTY_BYTE_STRING=new Pt("");const ES=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ai(r){if(Ue(!!r,39018),typeof r=="string"){let e=0;const t=ES.exec(r);if(Ue(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:at(r.seconds),nanos:at(r.nanos)}}function at(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ki(r){return typeof r=="string"?Pt.fromBase64String(r):Pt.fromUint8Array(r)}/**
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
 */const x_="server_timestamp",D_="__type__",V_="__previous_value__",O_="__local_write_time__";function af(r){var t,s;return((s=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[D_])==null?void 0:s.stringValue)===x_}function gc(r){const e=r.mapValue.fields[V_];return af(e)?gc(e):e}function za(r){const e=Ai(r.mapValue.fields[O_].timestampValue);return new Xe(e.seconds,e.nanos)}/**
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
 */class TS{constructor(e,t,s,o,u,h,m,g,_,E,I){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=E,this.apiKey=I}}const Gu="(default)";class Ba{constructor(e,t){this.projectId=e,this.database=t||Gu}static empty(){return new Ba("","")}get isDefaultDatabase(){return this.database===Gu}isEqual(e){return e instanceof Ba&&e.projectId===this.projectId&&e.database===this.database}}function IS(r,e){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new le($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ba(r.options.projectId,e)}/**
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
 */const L_="__type__",SS="__max__",Au={mapValue:{}},M_="__vector__",Qu="value";function Ri(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?af(r)?4:kS(r)?9007199254740991:AS(r)?10:11:me(28295,{value:r})}function ir(r,e){if(r===e)return!0;const t=Ri(r);if(t!==Ri(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return za(r).isEqual(za(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=Ai(o.timestampValue),m=Ai(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,u){return ki(o.bytesValue).isEqual(ki(u.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,u){return at(o.geoPointValue.latitude)===at(u.geoPointValue.latitude)&&at(o.geoPointValue.longitude)===at(u.geoPointValue.longitude)})(r,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return at(o.integerValue)===at(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=at(o.doubleValue),m=at(u.doubleValue);return h===m?Ku(h)===Ku(m):isNaN(h)&&isNaN(m)}return!1})(r,e);case 9:return _o(r.arrayValue.values||[],e.arrayValue.values||[],ir);case 10:case 11:return(function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Dg(h)!==Dg(m))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(m[g]===void 0||!ir(h[g],m[g])))return!1;return!0})(r,e);default:return me(52216,{left:r})}}function $a(r,e){return(r.values||[]).find((t=>ir(t,e)))!==void 0}function vo(r,e){if(r===e)return 0;const t=Ri(r),s=Ri(e);if(t!==s)return Se(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Se(r.booleanValue,e.booleanValue);case 2:return(function(u,h){const m=at(u.integerValue||u.doubleValue),g=at(h.integerValue||h.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1})(r,e);case 3:return Og(r.timestampValue,e.timestampValue);case 4:return Og(za(r),za(e));case 5:return Sd(r.stringValue,e.stringValue);case 6:return(function(u,h){const m=ki(u),g=ki(h);return m.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(u,h){const m=u.split("/"),g=h.split("/");for(let _=0;_<m.length&&_<g.length;_++){const E=Se(m[_],g[_]);if(E!==0)return E}return Se(m.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(u,h){const m=Se(at(u.latitude),at(h.latitude));return m!==0?m:Se(at(u.longitude),at(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return Lg(r.arrayValue,e.arrayValue);case 10:return(function(u,h){var L,z,J,X;const m=u.fields||{},g=h.fields||{},_=(L=m[Qu])==null?void 0:L.arrayValue,E=(z=g[Qu])==null?void 0:z.arrayValue,I=Se(((J=_==null?void 0:_.values)==null?void 0:J.length)||0,((X=E==null?void 0:E.values)==null?void 0:X.length)||0);return I!==0?I:Lg(_,E)})(r.mapValue,e.mapValue);case 11:return(function(u,h){if(u===Au.mapValue&&h===Au.mapValue)return 0;if(u===Au.mapValue)return 1;if(h===Au.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),_=h.fields||{},E=Object.keys(_);g.sort(),E.sort();for(let I=0;I<g.length&&I<E.length;++I){const L=Sd(g[I],E[I]);if(L!==0)return L;const z=vo(m[g[I]],_[E[I]]);if(z!==0)return z}return Se(g.length,E.length)})(r.mapValue,e.mapValue);default:throw me(23264,{he:t})}}function Og(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Se(r,e);const t=Ai(r),s=Ai(e),o=Se(t.seconds,s.seconds);return o!==0?o:Se(t.nanos,s.nanos)}function Lg(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=vo(t[o],s[o]);if(u)return u}return Se(t.length,s.length)}function wo(r){return Ad(r)}function Ad(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const s=Ai(t);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return ki(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return he.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=Ad(u);return s+"]"})(r.arrayValue):"mapValue"in r?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${Ad(t.fields[h])}`;return o+"}"})(r.mapValue):me(61005,{value:r})}function Ou(r){switch(Ri(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=gc(r);return e?16+Ou(e):16;case 5:return 2*r.stringValue.length;case 6:return ki(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+Ou(u)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return ps(s.fields,((u,h)=>{o+=u.length+Ou(h)})),o})(r.mapValue);default:throw me(13486,{value:r})}}function Ha(r){return!!r&&"integerValue"in r}function b_(r){return Ha(r)||(function(t){return!!t&&"doubleValue"in t})(r)}function lf(r){return!!r&&"arrayValue"in r}function Mg(r){return!!r&&"nullValue"in r}function bg(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Lu(r){return!!r&&"mapValue"in r}function AS(r){var t,s;return((s=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[L_])==null?void 0:s.stringValue)===M_}function Va(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return ps(r.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Va(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Va(r.arrayValue.values[t]);return e}return{...r}}function kS(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===SS}/**
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
 */class mn{constructor(e){this.value=e}static empty(){return new mn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Lu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Va(t)}setAll(e){let t=Ct.emptyPath(),s={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Va(h):o.push(m.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Lu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ir(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Lu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){ps(t,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new mn(Va(this.value))}}function F_(r){const e=[];return ps(r.fields,((t,s)=>{const o=new Ct([t]);if(Lu(s)){const u=F_(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)})),new Pn(e)}/**
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
 */class Ft{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Ft(e,0,_e.min(),_e.min(),_e.min(),mn.empty(),0)}static newFoundDocument(e,t,s,o){return new Ft(e,1,t,_e.min(),s,o,0)}static newNoDocument(e,t){return new Ft(e,2,t,_e.min(),_e.min(),mn.empty(),0)}static newUnknownDocument(e,t){return new Ft(e,3,t,_e.min(),_e.min(),mn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(_e.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=_e.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Xu{constructor(e,t){this.position=e,this.inclusive=t}}function Fg(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const u=e[o],h=r.position[o];if(u.field.isKeyField()?s=he.comparator(he.fromName(h.referenceValue),t.key):s=vo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Ug(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!ir(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ju{constructor(e,t="asc"){this.field=e,this.dir=t}}function RS(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class U_{}class mt extends U_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new PS(e,t,s):t==="array-contains"?new DS(e,s):t==="in"?new VS(e,s):t==="not-in"?new OS(e,s):t==="array-contains-any"?new LS(e,s):new mt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new NS(e,s):new xS(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(vo(t,this.value)):t!==null&&Ri(this.value)===Ri(t)&&this.matchesComparison(vo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class sr extends U_{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new sr(e,t)}matches(e){return j_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function j_(r){return r.op==="and"}function z_(r){return CS(r)&&j_(r)}function CS(r){for(const e of r.filters)if(e instanceof sr)return!1;return!0}function kd(r){if(r instanceof mt)return r.field.canonicalString()+r.op.toString()+wo(r.value);if(z_(r))return r.filters.map((e=>kd(e))).join(",");{const e=r.filters.map((t=>kd(t))).join(",");return`${r.op}(${e})`}}function B_(r,e){return r instanceof mt?(function(s,o){return o instanceof mt&&s.op===o.op&&s.field.isEqual(o.field)&&ir(s.value,o.value)})(r,e):r instanceof sr?(function(s,o){return o instanceof sr&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,h,m)=>u&&B_(h,o.filters[m])),!0):!1})(r,e):void me(19439)}function $_(r){return r instanceof mt?(function(t){return`${t.field.canonicalString()} ${t.op} ${wo(t.value)}`})(r):r instanceof sr?(function(t){return t.op.toString()+" {"+t.getFilters().map($_).join(" ,")+"}"})(r):"Filter"}class PS extends mt{constructor(e,t,s){super(e,t,s),this.key=he.fromName(s.referenceValue)}matches(e){const t=he.comparator(e.key,this.key);return this.matchesComparison(t)}}class NS extends mt{constructor(e,t){super(e,"in",t),this.keys=H_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class xS extends mt{constructor(e,t){super(e,"not-in",t),this.keys=H_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function H_(r,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>he.fromName(s.referenceValue)))}class DS extends mt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return lf(t)&&$a(t.arrayValue,this.value)}}class VS extends mt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&$a(this.value.arrayValue,t)}}class OS extends mt{constructor(e,t){super(e,"not-in",t)}matches(e){if($a(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!$a(this.value.arrayValue,t)}}class LS extends mt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!lf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>$a(this.value.arrayValue,s)))}}/**
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
 */class MS{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Te=null}}function jg(r,e=null,t=[],s=[],o=null,u=null,h=null){return new MS(r,e,t,s,o,u,h)}function uf(r){const e=we(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>kd(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),mc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>wo(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>wo(s))).join(",")),e.Te=t}return e.Te}function cf(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!RS(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!B_(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Ug(r.startAt,e.startAt)&&Ug(r.endAt,e.endAt)}function Rd(r){return he.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class yc{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=g,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function bS(r,e,t,s,o,u,h,m){return new yc(r,e,t,s,o,u,h,m)}function hf(r){return new yc(r)}function zg(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function FS(r){return he.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function US(r){return r.collectionGroup!==null}function Oa(r){const e=we(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new yt(Ct.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((_=>{_.isInequality()&&(m=m.add(_.field))}))})),m})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new Ju(u,s))})),t.has(Ct.keyField().canonicalString())||e.Ie.push(new Ju(Ct.keyField(),s))}return e.Ie}function Zn(r){const e=we(r);return e.Ee||(e.Ee=jS(e,Oa(r))),e.Ee}function jS(r,e){if(r.limitType==="F")return jg(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Ju(o.field,u)}));const t=r.endAt?new Xu(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Xu(r.startAt.position,r.startAt.inclusive):null;return jg(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function Cd(r,e,t){return new yc(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function _c(r,e){return cf(Zn(r),Zn(e))&&r.limitType===e.limitType}function q_(r){return`${uf(Zn(r))}|lt:${r.limitType}`}function ao(r){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>$_(o))).join(", ")}]`),mc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>wo(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>wo(o))).join(",")),`Target(${s})`})(Zn(r))}; limitType=${r.limitType})`}function vc(r,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):he.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(r,e)&&(function(s,o){for(const u of Oa(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(r,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(r,e)&&(function(s,o){return!(s.startAt&&!(function(h,m,g){const _=Fg(h,m,g);return h.inclusive?_<=0:_<0})(s.startAt,Oa(s),o)||s.endAt&&!(function(h,m,g){const _=Fg(h,m,g);return h.inclusive?_>=0:_>0})(s.endAt,Oa(s),o))})(r,e)}function zS(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function W_(r){return(e,t)=>{let s=!1;for(const o of Oa(r)){const u=BS(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function BS(r,e,t){const s=r.field.isKeyField()?he.comparator(e.key,t.key):(function(u,h,m){const g=h.data.field(u),_=m.data.field(u);return g!==null&&_!==null?vo(g,_):me(42886)})(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return me(19790,{direction:r.dir})}}/**
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
 */class ms{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ps(this.inner,((t,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return P_(this.inner)}size(){return this.innerSize}}/**
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
 */const $S=new Ze(he.comparator);function Lr(){return $S}const K_=new Ze(he.comparator);function Ca(...r){let e=K_;for(const t of r)e=e.insert(t.key,t);return e}function G_(r){let e=K_;return r.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function os(){return La()}function Q_(){return La()}function La(){return new ms((r=>r.toString()),((r,e)=>r.isEqual(e)))}const HS=new Ze(he.comparator),qS=new yt(he.comparator);function Ae(...r){let e=qS;for(const t of r)e=e.add(t);return e}const WS=new yt(Se);function KS(){return WS}/**
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
 */function wc(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ku(e)?"-0":e}}function df(r){return{integerValue:""+r}}function GS(r,e){return _S(e)?df(e):wc(r,e)}/**
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
 */class Ec{constructor(){this._=void 0}}function QS(r,e,t){return r instanceof Yu?(function(o,u){const h={fields:{[D_]:{stringValue:x_},[O_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&af(u)&&(u=gc(u)),u&&(h.fields[V_]=u),{mapValue:h}})(t,e):r instanceof qa?J_(r,e):r instanceof Wa?Y_(r,e):r instanceof Ka?(function(o,u){const h=X_(o,u),m=tc(h)+tc(o.Ae);return Ha(h)&&Ha(o.Ae)?df(m):wc(o.serializer,m)})(r,e):r instanceof Zu?(function(o,u){return Bg(o,u,Math.min)})(r,e):r instanceof ec?(function(o,u){return Bg(o,u,Math.max)})(r,e):void 0}function XS(r,e,t){return r instanceof qa?J_(r,e):r instanceof Wa?Y_(r,e):t}function X_(r,e){return r instanceof Ka?b_(e)?e:{integerValue:0}:null}class Yu extends Ec{}class qa extends Ec{constructor(e){super(),this.elements=e}}function J_(r,e){const t=Z_(e);for(const s of r.elements)t.some((o=>ir(o,s)))||t.push(s);return{arrayValue:{values:t}}}class Wa extends Ec{constructor(e){super(),this.elements=e}}function Y_(r,e){let t=Z_(e);for(const s of r.elements)t=t.filter((o=>!ir(o,s)));return{arrayValue:{values:t}}}class ff extends Ec{constructor(e,t){super(),this.serializer=e,this.Ae=t}}class Ka extends ff{}class Zu extends ff{}class ec extends ff{}function Bg(r,e,t){if(!b_(e))return r.Ae;const s=t(tc(e),tc(r.Ae));return Ha(e)&&Ha(r.Ae)?df(s):wc(r.serializer,s)}function tc(r){return at(r.integerValue||r.doubleValue)}function Z_(r){return lf(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function JS(r,e){return r.field.isEqual(e.field)&&(function(s,o){return s instanceof qa&&o instanceof qa||s instanceof Wa&&o instanceof Wa?_o(s.elements,o.elements,ir):s instanceof Ka&&o instanceof Ka||s instanceof Zu&&o instanceof Zu||s instanceof ec&&o instanceof ec?ir(s.Ae,o.Ae):s instanceof Yu&&o instanceof Yu})(r.transform,e.transform)}class YS{constructor(e,t){this.version=e,this.transformResults=t}}class er{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new er}static exists(e){return new er(void 0,e)}static updateTime(e){return new er(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Mu(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Tc{}function ev(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new pf(r.key,er.none()):new el(r.key,r.data,er.none());{const t=r.data,s=mn.empty();let o=new yt(Ct.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new gs(r.key,s,new Pn(o.toArray()),er.none())}}function ZS(r,e,t){r instanceof el?(function(o,u,h){const m=o.value.clone(),g=Hg(o.fieldTransforms,u,h.transformResults);m.setAll(g),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(r,e,t):r instanceof gs?(function(o,u,h){if(!Mu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=Hg(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(tv(o)),g.setAll(m),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(r,e,t):(function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Ma(r,e,t,s){return r instanceof el?(function(u,h,m,g){if(!Mu(u.precondition,h))return m;const _=u.value.clone(),E=qg(u.fieldTransforms,g,h);return _.setAll(E),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(r,e,t,s):r instanceof gs?(function(u,h,m,g){if(!Mu(u.precondition,h))return m;const _=qg(u.fieldTransforms,g,h),E=h.data;return E.setAll(tv(u)),E.setAll(_),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((I=>I.field)))})(r,e,t,s):(function(u,h,m){return Mu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(r,e,t)}function eA(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),u=X_(s.transform,o||null);u!=null&&(t===null&&(t=mn.empty()),t.set(s.field,u))}return t||null}function $g(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&_o(s,o,((u,h)=>JS(u,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class el extends Tc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class gs extends Tc{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function tv(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}})),e}function Hg(r,e,t){const s=new Map;Ue(r.length===t.length,32656,{Ve:t.length,de:r.length});for(let o=0;o<t.length;o++){const u=r[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,XS(h,m,t[o]))}return s}function qg(r,e,t){const s=new Map;for(const o of r){const u=o.transform,h=t.data.field(o.field);s.set(o.field,QS(u,h,e))}return s}class pf extends Tc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tA extends Tc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class nA{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&ZS(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ma(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ma(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Q_();return this.mutations.forEach((o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const g=ev(h,m);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(_e.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ae())}isEqual(e){return this.batchId===e.batchId&&_o(this.mutations,e.mutations,((t,s)=>$g(t,s)))&&_o(this.baseMutations,e.baseMutations,((t,s)=>$g(t,s)))}}class mf{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Ue(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return HS})();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new mf(e,t,s,o)}}/**
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
 */class rA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class iA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ht,De;function sA(r){switch(r){case $.OK:return me(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return me(15467,{code:r})}}function nv(r){if(r===void 0)return Or("GRPC error has no .code"),$.UNKNOWN;switch(r){case ht.OK:return $.OK;case ht.CANCELLED:return $.CANCELLED;case ht.UNKNOWN:return $.UNKNOWN;case ht.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case ht.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case ht.INTERNAL:return $.INTERNAL;case ht.UNAVAILABLE:return $.UNAVAILABLE;case ht.UNAUTHENTICATED:return $.UNAUTHENTICATED;case ht.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case ht.NOT_FOUND:return $.NOT_FOUND;case ht.ALREADY_EXISTS:return $.ALREADY_EXISTS;case ht.PERMISSION_DENIED:return $.PERMISSION_DENIED;case ht.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case ht.ABORTED:return $.ABORTED;case ht.OUT_OF_RANGE:return $.OUT_OF_RANGE;case ht.UNIMPLEMENTED:return $.UNIMPLEMENTED;case ht.DATA_LOSS:return $.DATA_LOSS;default:return me(39323,{code:r})}}(De=ht||(ht={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function oA(){return new TextEncoder}/**
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
 */const aA=new wi([4294967295,4294967295],0);function Wg(r){const e=oA().encode(r),t=new __;return t.update(e),new Uint8Array(t.digest())}function Kg(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new wi([t,s],0),new wi([o,u],0)]}class gf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Pa(`Invalid padding: ${t}`);if(s<0)throw new Pa(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Pa(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Pa(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=wi.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(wi.fromNumber(s)));return o.compare(aA)===1&&(o=new wi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Wg(e),[s,o]=Kg(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);if(!this.we(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new gf(u,o,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.ge===0)return;const t=Wg(e),[s,o]=Kg(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Pa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class tl{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,nl.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new tl(_e.min(),o,new Ze(Se),Lr(),Ae())}}class nl{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new nl(s,t,Ae(),Ae(),Ae())}}/**
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
 */class bu{constructor(e,t,s,o){this.be=e,this.removedTargetIds=t,this.key=s,this.De=o}}class rv{constructor(e,t){this.targetId=e,this.Ce=t}}class iv{constructor(e,t,s=Pt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Gg{constructor(e){this.targetId=e,this.ve=0,this.Fe=Qg(),this.Me=Pt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ae(),t=Ae(),s=Ae();return this.Fe.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:me(38017,{changeType:u})}})),new nl(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=Qg()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Ue(this.ve>=0,3241,{ve:this.ve,targetId:this.targetId})}Qe(){this.Oe=!0,this.xe=!0}}const Aa="WatchChangeAggregator";class lA{constructor(e){this.Ge=e,this.ze=new Map,this.je=Lr(),this.Je=ku(),this.He=ku(),this.Ze=new Ze(Se)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.ze.get(t);if(s)switch(e.state){case 0:this.nt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.nt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),s.Le(e.resumeToken));break;default:me(56790,{state:e.state})}else ee(Aa,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,s=e.Ce.count,o=this.st(t);if(o){const u=o.target;if(Rd(u))if(s===0){const h=new he(u.path);this.et(t,h,Ft.newNoDocument(h,_e.min()))}else Ue(s===1,20013,{expectedCount:s});else{const h=this.ot(t);if(h!==s){const m=this._t(e),g=m?this.ut(m,e,h):1;if(g!==0){this.rt(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,_)}}}}}_t(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=ki(s).toUint8Array()}catch(g){if(g instanceof N_)return ds("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new gf(h,o,u)}catch(g){return ds(g instanceof Pa?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.ge===0?null:m}ut(e,t,s){return t.Ce.count===s-this.ht(e,t.targetId)?0:2}ht(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach((u=>{const h=this.Ge.lt(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.et(t,u,null),o++)})),o}Pt(e){const t=new Map;this.ze.forEach(((u,h)=>{const m=this.st(h);if(m){if(u.current&&Rd(m.target)){const g=new he(m.target.path);this.Tt(g).has(h)||this.It(h,g)||this.et(h,g,Ft.newNoDocument(g,e))}u.Be&&(t.set(h,u.ke()),u.qe())}}));let s=Ae();this.He.forEach(((u,h)=>{let m=!0;h.forEachWhile((g=>{const _=this.st(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.je.forEach(((u,h)=>h.setReadTime(e)));const o=new tl(e,t,this.Ze,this.je,s);return this.je=Lr(),this.Je=ku(),this.He=ku(),this.Ze=new Ze(Se),o}Ye(e,t){const s=this.ze.get(e);if(!s||!this.nt(e))return void ee(Aa,`addDocumentToTarget received document for unknown inactive target (${e})`);const o=this.It(e,t.key)?2:0;s.Ke(t.key,o),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Tt(t.key).add(e)),this.He=this.He.insert(t.key,this.Et(t.key).add(e))}et(e,t,s){const o=this.ze.get(e);o&&this.nt(e)?(this.It(e,t)?o.Ke(t,1):o.Ue(t),this.He=this.He.insert(t,this.Et(t).delete(e)),this.He=this.He.insert(t,this.Et(t).add(e)),s&&(this.je=this.je.insert(t,s))):ee(Aa,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.ze.delete(e)}ot(e){const t=this.ze.get(e);if(!t)return 0;const s=t.ke();return this.Ge.getRemoteKeysForTarget(e).size+s.addedDocuments.size-s.removedDocuments.size}$e(e){let t=this.ze.get(e);t||(ee(Aa,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new Gg(e),this.ze.set(e,t)),t.$e()}Et(e){let t=this.He.get(e);return t||(t=new yt(Se),this.He=this.He.insert(e,t)),t}Tt(e){let t=this.Je.get(e);return t||(t=new yt(Se),this.Je=this.Je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||ee(Aa,"Detected inactive target",e),t}st(e){const t=this.ze.get(e);return t===void 0||t.Ne?null:this.Ge.Rt(e)}rt(e){this.ze.set(e,new Gg(e)),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function ku(){return new Ze(he.comparator)}function Qg(){return new Ze(he.comparator)}const uA={asc:"ASCENDING",desc:"DESCENDING"},cA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},hA={and:"AND",or:"OR"};class dA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Pd(r,e){return r.useProto3Json||mc(e)?e:{value:e}}function nc(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function sv(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function fA(r,e){return nc(r,e.toTimestamp())}function tr(r){return Ue(!!r,49232),_e.fromTimestamp((function(t){const s=Ai(t);return new Xe(s.seconds,s.nanos)})(r))}function yf(r,e){return Nd(r,e).canonicalString()}function Nd(r,e){const t=(function(o){return new Qe(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function ov(r){const e=Qe.fromString(r);return Ue(hv(e),10190,{key:e.toString()}),e}function xd(r,e){return yf(r.databaseId,e.path)}function hd(r,e){const t=ov(e);if(t.get(1)!==r.databaseId.projectId)throw new le($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new le($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new he(lv(t))}function av(r,e){return yf(r.databaseId,e)}function pA(r){const e=ov(r);return e.length===4?Qe.emptyPath():lv(e)}function Dd(r){return new Qe(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function lv(r){return Ue(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Xg(r,e,t){return{name:xd(r,e),fields:t.value.mapValue.fields}}function mA(r,e){let t;if("targetChange"in e){e.targetChange;const s=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:me(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(_,E){return _.useProto3Json?(Ue(E===void 0||typeof E=="string",58123),Pt.fromBase64String(E||"")):(Ue(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Pt.fromUint8Array(E||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(_){const E=_.code===void 0?$.UNKNOWN:nv(_.code);return new le(E,_.message||"")})(h);t=new iv(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=hd(r,s.document.name),u=tr(s.document.updateTime),h=s.document.createTime?tr(s.document.createTime):_e.min(),m=new mn({mapValue:{fields:s.document.fields}}),g=Ft.newFoundDocument(o,u,h,m),_=s.targetIds||[],E=s.removedTargetIds||[];t=new bu(_,E,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=hd(r,s.document),u=s.readTime?tr(s.readTime):_e.min(),h=Ft.newNoDocument(o,u),m=s.removedTargetIds||[];t=new bu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=hd(r,s.document),u=s.removedTargetIds||[];t=new bu([],u,o,null)}else{if(!("filter"in e))return me(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new iA(o,u),m=s.targetId;t=new rv(m,h)}}return t}function gA(r,e){let t;if(e instanceof el)t={update:Xg(r,e.key,e.value)};else if(e instanceof pf)t={delete:xd(r,e.key)};else if(e instanceof gs)t={update:Xg(r,e.key,e.data),updateMask:AA(e.fieldMask)};else{if(!(e instanceof tA))return me(16599,{Vt:e.type});t={verify:xd(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(u,h){const m=h.transform;if(m instanceof Yu)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof qa)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Wa)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Ka)return{fieldPath:h.field.canonicalString(),increment:m.Ae};if(m instanceof Zu)return{fieldPath:h.field.canonicalString(),minimum:m.Ae};if(m instanceof ec)return{fieldPath:h.field.canonicalString(),maximum:m.Ae};throw me(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:fA(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:me(27497)})(r,e.precondition)),t}function yA(r,e){return r&&r.length>0?(Ue(e!==void 0,14353),r.map((t=>(function(o,u){let h=o.updateTime?tr(o.updateTime):tr(u);return h.isEqual(_e.min())&&(h=tr(u)),new YS(h,o.transformResults||[])})(t,e)))):[]}function _A(r,e){return{documents:[av(r,e.path)]}}function vA(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=av(r,o);const u=(function(_){if(_.length!==0)return cv(sr.create(_,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const h=(function(_){if(_.length!==0)return _.map((E=>(function(L){return{field:lo(L.field),direction:TA(L.dir)}})(E)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Pd(r,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{dt:t,parent:o}}function wA(r){let e=pA(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Ue(s===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let u=[];t.where&&(u=(function(I){const L=uv(I);return L instanceof sr&&z_(L)?L.getFilters():[L]})(t.where));let h=[];t.orderBy&&(h=(function(I){return I.map((L=>(function(J){return new Ju(uo(J.field),(function(G){switch(G){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(J.direction))})(L)))})(t.orderBy));let m=null;t.limit&&(m=(function(I){let L;return L=typeof I=="object"?I.value:I,mc(L)?null:L})(t.limit));let g=null;t.startAt&&(g=(function(I){const L=!!I.before,z=I.values||[];return new Xu(z,L)})(t.startAt));let _=null;return t.endAt&&(_=(function(I){const L=!I.before,z=I.values||[];return new Xu(z,L)})(t.endAt)),bS(e,o,h,u,m,"F",g,_)}function EA(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function uv(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=uo(t.unaryFilter.field);return mt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=uo(t.unaryFilter.field);return mt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=uo(t.unaryFilter.field);return mt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=uo(t.unaryFilter.field);return mt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return me(61313);default:return me(60726)}})(r):r.fieldFilter!==void 0?(function(t){return mt.create(uo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return me(58110);default:return me(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return sr.create(t.compositeFilter.filters.map((s=>uv(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return me(1026)}})(t.compositeFilter.op))})(r):me(30097,{filter:r})}function TA(r){return uA[r]}function IA(r){return cA[r]}function SA(r){return hA[r]}function lo(r){return{fieldPath:r.canonicalString()}}function uo(r){return Ct.fromServerFormat(r.fieldPath)}function cv(r){return r instanceof mt?(function(t){if(t.op==="=="){if(bg(t.value))return{unaryFilter:{field:lo(t.field),op:"IS_NAN"}};if(Mg(t.value))return{unaryFilter:{field:lo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(bg(t.value))return{unaryFilter:{field:lo(t.field),op:"IS_NOT_NAN"}};if(Mg(t.value))return{unaryFilter:{field:lo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:lo(t.field),op:IA(t.op),value:t.value}}})(r):r instanceof sr?(function(t){const s=t.getFilters().map((o=>cv(o)));return s.length===1?s[0]:{compositeFilter:{op:SA(t.op),filters:s}}})(r):me(54877,{filter:r})}function AA(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function hv(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}function dv(r){return!!r&&typeof r._toProto=="function"&&r._protoValueType==="ProtoValue"}/**
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
 */class Cr{constructor(e,t,s,o,u=_e.min(),h=_e.min(),m=Pt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new Cr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Cr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class kA{constructor(e){this.gt=e}}function RA(r){const e=wA({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Cd(e,e.limit,"L"):e}/**
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
 */class CA{constructor(){this.Sn=new PA}addToCollectionParentIndex(e,t){return this.Sn.add(t),B.resolve()}getCollectionParents(e,t){return B.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return B.resolve()}deleteFieldIndex(e,t){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,t){return B.resolve()}getDocumentsMatchingTarget(e,t){return B.resolve(null)}getIndexType(e,t){return B.resolve(0)}getFieldIndexes(e,t){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,t){return B.resolve(Si.min())}getMinOffsetFromCollectionGroup(e,t){return B.resolve(Si.min())}updateCollectionGroup(e,t,s){return B.resolve()}updateIndexEntries(e,t){return B.resolve()}}class PA{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new yt(Qe.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new yt(Qe.comparator)).toArray()}}/**
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
 */const Jg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},fv=41943040;class Qt{static withCacheSize(e){return new Qt(e,Qt.DEFAULT_COLLECTION_PERCENTILE,Qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Qt.DEFAULT_COLLECTION_PERCENTILE=10,Qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Qt.DEFAULT=new Qt(fv,Qt.DEFAULT_COLLECTION_PERCENTILE,Qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Qt.DISABLED=new Qt(-1,0,0);/**
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
 */class Ci{constructor(e){this.ir=e}next(){return this.ir+=2,this.ir}static sr(){return new Ci(0)}static _r(){return new Ci(-1)}}/**
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
 */const Yg="LruGarbageCollector",NA=1048576;function Zg([r,e],[t,s]){const o=Se(r,t);return o===0?Se(e,s):o}class xA{constructor(e){this.hr=e,this.buffer=new yt(Zg),this.Pr=0}Tr(){return++this.Pr}Ir(e){const t=[e,this.Tr()];if(this.buffer.size<this.hr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Zg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class DA{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Er=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Er&&(this.Er.cancel(),this.Er=null)}get started(){return this.Er!==null}Rr(e){ee(Yg,`Garbage collection scheduled in ${e}ms`),this.Er=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Er=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Co(t)?ee(Yg,"Ignoring IndexedDB error during garbage collection: ",t):await Ro(t)}await this.Rr(3e5)}))}}class VA{constructor(e,t){this.Ar=e,this.params=t}calculateTargetCount(e,t){return this.Ar.Vr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return B.resolve(pc.ce);const s=new xA(t);return this.Ar.forEachTarget(e,(o=>s.Ir(o.sequenceNumber))).next((()=>this.Ar.dr(e,(o=>s.Ir(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Ar.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Ar.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ee("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(Jg)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ee("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Jg):this.mr(e,t)))}getCacheSize(e){return this.Ar.getCacheSize(e)}mr(e,t){let s,o,u,h,m,g,_;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((I=>(I>this.params.maximumSequenceNumbersToCollect?(ee("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),o=this.params.maximumSequenceNumbersToCollect):o=I,h=Date.now(),this.nthSequenceNumber(e,o)))).next((I=>(s=I,m=Date.now(),this.removeTargets(e,s,t)))).next((I=>(u=I,g=Date.now(),this.removeOrphanedDocuments(e,s)))).next((I=>(_=Date.now(),oo()<=Pe.DEBUG&&ee("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(g-m)+`ms
	Removed ${I} documents in `+(_-g)+`ms
Total Duration: ${_-E}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:I}))))}}function OA(r,e){return new VA(r,e)}/**
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
 */class LA{constructor(){this.changes=new ms((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ft.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?B.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class MA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class bA{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&Ma(s.mutation,o,Pn.empty(),Xe.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Ae()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Ae()){const o=os();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((u=>{let h=Ca();return u.forEach(((m,g)=>{h=h.insert(m,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=os();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Ae())))}populateOverlays(e,t,s){const o=[];return s.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,o){let u=Lr();const h=La(),m=(function(){return La()})();return t.forEach(((g,_)=>{const E=s.get(_.key);o.has(_.key)&&(E===void 0||E.mutation instanceof gs)?u=u.insert(_.key,_):E!==void 0?(h.set(_.key,E.mutation.getFieldMask()),Ma(E.mutation,_,E.mutation.getFieldMask(),Xe.now())):h.set(_.key,Pn.empty())})),this.recalculateAndSaveOverlays(e,u).next((g=>(g.forEach(((_,E)=>h.set(_,E))),t.forEach(((_,E)=>m.set(_,new MA(E,h.get(_)??null)))),m)))}recalculateAndSaveOverlays(e,t){const s=La();let o=new Ze(((h,m)=>h-m)),u=Ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((g=>{const _=t.get(g);if(_===null)return;let E=s.get(g)||Pn.empty();E=m.applyToLocalView(_,E),s.set(g,E);const I=(o.get(m.batchId)||Ae()).add(g);o=o.insert(m.batchId,I)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),_=g.key,E=g.value,I=Q_();E.forEach((L=>{if(!u.has(L)){const z=ev(t.get(L),s.get(L));z!==null&&I.set(L,z),u=u.add(L)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,I))}return B.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return FS(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):US(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):B.resolve(os());let m=ja,g=u;return h.next((_=>B.forEach(_,((E,I)=>(m<I.largestBatchId&&(m=I.largestBatchId),u.get(E)?B.resolve():this.remoteDocumentCache.getEntry(e,E).next((L=>{g=g.insert(E,L)}))))).next((()=>this.populateOverlays(e,_,u))).next((()=>this.computeViews(e,g,_,Ae()))).next((E=>({batchId:m,changes:G_(E)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new he(t)).next((s=>{let o=Ca();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Ca();return this.indexManager.getCollectionParents(e,u).next((m=>B.forEach(m,(g=>{const _=(function(I,L){return new yc(L,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)})(t,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next((E=>{E.forEach(((I,L)=>{h=h.insert(I,L)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o)))).next((h=>{u.forEach(((g,_)=>{const E=_.getKey();h.get(E)===null&&(h=h.insert(E,Ft.newInvalidDocument(E)))}));let m=Ca();return h.forEach(((g,_)=>{const E=u.get(g);E!==void 0&&Ma(E.mutation,_,Pn.empty(),Xe.now()),vc(t,_)&&(m=m.insert(g,_))})),m}))}}/**
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
 */class FA{constructor(e){this.serializer=e,this.Or=new Map,this.Nr=new Map}getBundleMetadata(e,t){return B.resolve(this.Or.get(t))}saveBundleMetadata(e,t){return this.Or.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:tr(o.createTime)}})(t)),B.resolve()}getNamedQuery(e,t){return B.resolve(this.Nr.get(t))}saveNamedQuery(e,t){return this.Nr.set(t.name,(function(o){return{name:o.name,query:RA(o.bundledQuery),readTime:tr(o.readTime)}})(t)),B.resolve()}}/**
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
 */class UA{constructor(){this.overlays=new Ze(he.comparator),this.Br=new Map}getOverlay(e,t){return B.resolve(this.overlays.get(t))}getOverlays(e,t){const s=os();return B.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,u)=>{this.wt(e,t,u)})),B.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Br.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.Br.delete(s)),B.resolve()}getOverlaysForCollection(e,t,s){const o=os(),u=t.length+1,h=new he(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const g=m.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return B.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new Ze(((_,E)=>_-E));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let E=u.get(_.largestBatchId);E===null&&(E=os(),u=u.insert(_.largestBatchId,E)),E.set(_.getKey(),_)}}const m=os(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((_,E)=>m.set(_,E))),!(m.size()>=o)););return B.resolve(m)}wt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Br.get(o.largestBatchId).delete(s.key);this.Br.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new rA(t,s));let u=this.Br.get(t);u===void 0&&(u=Ae(),this.Br.set(t,u)),this.Br.set(t,u.add(s.key))}}/**
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
 */class jA{constructor(){this.sessionToken=Pt.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,B.resolve()}}/**
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
 */class _f{constructor(){this.Lr=new yt(Tt.kr),this.qr=new yt(Tt.Kr)}isEmpty(){return this.Lr.isEmpty()}addReference(e,t){const s=new Tt(e,t);this.Lr=this.Lr.add(s),this.qr=this.qr.add(s)}Ur(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.$r(new Tt(e,t))}Wr(e,t){e.forEach((s=>this.removeReference(s,t)))}Qr(e){const t=new he(new Qe([])),s=new Tt(t,e),o=new Tt(t,e+1),u=[];return this.qr.forEachInRange([s,o],(h=>{this.$r(h),u.push(h.key)})),u}Gr(){this.Lr.forEach((e=>this.$r(e)))}$r(e){this.Lr=this.Lr.delete(e),this.qr=this.qr.delete(e)}zr(e){const t=new he(new Qe([])),s=new Tt(t,e),o=new Tt(t,e+1);let u=Ae();return this.qr.forEachInRange([s,o],(h=>{u=u.add(h.key)})),u}containsKey(e){const t=new Tt(e,0),s=this.Lr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Tt{constructor(e,t){this.key=e,this.jr=t}static kr(e,t){return he.comparator(e.key,t.key)||Se(e.jr,t.jr)}static Kr(e,t){return Se(e.jr,t.jr)||he.comparator(e.key,t.key)}}/**
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
 */class zA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Xn=1,this.Jr=new yt(Tt.kr)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.Xn;this.Xn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new nA(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Jr=this.Jr.add(new Tt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return B.resolve(h)}lookupMutationBatch(e,t){return B.resolve(this.Hr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Zr(s),u=o<0?0:o;return B.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?of:this.Xn-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Tt(t,0),o=new Tt(t,Number.POSITIVE_INFINITY),u=[];return this.Jr.forEachInRange([s,o],(h=>{const m=this.Hr(h.jr);u.push(m)})),B.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new yt(Se);return t.forEach((o=>{const u=new Tt(o,0),h=new Tt(o,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([u,h],(m=>{s=s.add(m.jr)}))})),B.resolve(this.Xr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;he.isDocumentKey(u)||(u=u.child(""));const h=new Tt(new he(u),0);let m=new yt(Se);return this.Jr.forEachWhile((g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(m=m.add(g.jr)),!0)}),h),B.resolve(this.Xr(m))}Xr(e){const t=[];return e.forEach((s=>{const o=this.Hr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Ue(this.Yr(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Jr;return B.forEach(t.mutations,(o=>{const u=new Tt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Jr=s}))}tr(e){}containsKey(e,t){const s=new Tt(t,0),o=this.Jr.firstAfterOrEqual(s);return B.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Yr(e,t){return this.Zr(e)}Zr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Hr(e){const t=this.Zr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class BA{constructor(e){this.ei=e,this.docs=(function(){return new Ze(he.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ei(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return B.resolve(s?s.document.mutableCopy():Ft.newInvalidDocument(t))}getEntries(e,t){let s=Lr();return t.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Ft.newInvalidDocument(o))})),B.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Lr();const h=t.path,m=new he(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:_,value:{document:E}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||pS(fS(E),s)<=0||(o.has(E.key)||vc(t,E))&&(u=u.insert(E.key,E.mutableCopy()))}return B.resolve(u)}getAllFromCollectionGroup(e,t,s,o){me(9500)}ti(e,t){return B.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new $A(this)}getSize(e){return B.resolve(this.size)}}class $A extends LA{constructor(e){super(),this.Fr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Fr.addEntry(e,o)):this.Fr.removeEntry(s)})),B.waitFor(t)}getFromCache(e,t){return this.Fr.getEntry(e,t)}getAllFromCache(e,t){return this.Fr.getEntries(e,t)}}/**
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
 */class HA{constructor(e){this.persistence=e,this.ni=new ms((t=>uf(t)),cf),this.lastRemoteSnapshotVersion=_e.min(),this.highestTargetId=0,this.ri=0,this.ii=new _f,this.targetCount=0,this.si=Ci.sr()}forEachTarget(e,t){return this.ni.forEach(((s,o)=>t(o))),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.ri)}allocateTargetId(e){return this.highestTargetId=this.si.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ri&&(this.ri=t),B.resolve()}cr(e){this.ni.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.si=new Ci(t),this.highestTargetId=t),e.sequenceNumber>this.ri&&(this.ri=e.sequenceNumber)}addTargetData(e,t){return this.cr(t),this.targetCount+=1,B.resolve()}updateTargetData(e,t){return this.cr(t),B.resolve()}removeTargetData(e,t){return this.ni.delete(t.target),this.ii.Qr(t.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.ni.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.ni.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),B.waitFor(u).next((()=>o))}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,t){const s=this.ni.get(t)||null;return B.resolve(s)}addMatchingKeys(e,t,s){return this.ii.Ur(t,s),B.resolve()}removeMatchingKeys(e,t,s){this.ii.Wr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((h=>{u.push(o.markPotentiallyOrphaned(e,h))})),B.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.ii.Qr(t),B.resolve()}getMatchingKeysForTargetId(e,t){const s=this.ii.zr(t);return B.resolve(s)}containsKey(e,t){return B.resolve(this.ii.containsKey(t))}}/**
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
 */class pv{constructor(e,t){this.oi={},this.overlays={},this._i=new pc(0),this.ai=!1,this.ai=!0,this.ui=new jA,this.referenceDelegate=e(this),this.ci=new HA(this),this.indexManager=new CA,this.remoteDocumentCache=(function(o){return new BA(o)})((s=>this.referenceDelegate.li(s))),this.serializer=new kA(t),this.hi=new FA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ai=!1,Promise.resolve()}get started(){return this.ai}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new UA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.oi[e.toKey()];return s||(s=new zA(t,this.referenceDelegate),this.oi[e.toKey()]=s),s}getGlobalsCache(){return this.ui}getTargetCache(){return this.ci}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.hi}runTransaction(e,t,s){ee("MemoryPersistence","Starting transaction:",e);const o=new qA(this._i.next());return this.referenceDelegate.Pi(),s(o).next((u=>this.referenceDelegate.Ti(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ii(e,t){return B.or(Object.values(this.oi).map((s=>()=>s.containsKey(e,t))))}}class qA extends gS{constructor(e){super(),this.currentSequenceNumber=e}}class vf{constructor(e){this.persistence=e,this.Ei=new _f,this.Ri=null}static Ai(e){return new vf(e)}get Vi(){if(this.Ri)return this.Ri;throw me(60996)}addReference(e,t,s){return this.Ei.addReference(s,t),this.Vi.delete(s.toString()),B.resolve()}removeReference(e,t,s){return this.Ei.removeReference(s,t),this.Vi.add(s.toString()),B.resolve()}markPotentiallyOrphaned(e,t){return this.Vi.add(t.toString()),B.resolve()}removeTarget(e,t){this.Ei.Qr(t.targetId).forEach((o=>this.Vi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.Vi.add(u.toString())))})).next((()=>s.removeTargetData(e,t)))}Pi(){this.Ri=new Set}Ti(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.Vi,(s=>{const o=he.fromPath(s);return this.di(e,o).next((u=>{u||t.removeEntry(o,_e.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.di(e,t).next((s=>{s?this.Vi.delete(t.toString()):this.Vi.add(t.toString())}))}li(e){return 0}di(e,t){return B.or([()=>B.resolve(this.Ei.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class rc{constructor(e,t){this.persistence=e,this.mi=new ms((s=>vS(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=OA(this,t)}static Ai(e,t){return new rc(e,t)}Pi(){}Ti(e){return B.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Vr(e){const t=this.gr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}gr(e){let t=0;return this.dr(e,(s=>{t++})).next((()=>t))}dr(e,t){return B.forEach(this.mi,((s,o)=>this.yr(e,s,o).next((u=>u?B.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ti(e,(h=>this.yr(e,h,t).next((m=>{m||(s++,u.removeEntry(h,_e.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.mi.set(t,e.currentSequenceNumber),B.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.mi.set(s,e.currentSequenceNumber),B.resolve()}removeReference(e,t,s){return this.mi.set(s,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,t){return this.mi.set(t,e.currentSequenceNumber),B.resolve()}li(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ou(e.data.value)),t}yr(e,t,s){return B.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.mi.get(t);return B.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class wf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Ps=s,this.Ts=o}static Is(e,t){let s=Ae(),o=Ae();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new wf(e,t.fromCache,s,o)}}/**
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
 */class WA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class KA{constructor(){this.Es=!1,this.Rs=!1,this.As=100,this.Vs=(function(){return bE()?8:yS(Ut())>0?6:4})()}initialize(e,t){this.ds=e,this.indexManager=t,this.Es=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.fs(e,t).next((h=>{u.result=h})).next((()=>{if(!u.result)return this.gs(e,t,o,s).next((h=>{u.result=h}))})).next((()=>{if(u.result)return;const h=new WA;return this.ps(e,t,h).next((m=>{if(u.result=m,this.Rs)return this.ys(e,t,h,m.size)}))})).next((()=>u.result))}ys(e,t,s,o){return s.documentReadCount<this.As?(oo()<=Pe.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",ao(t),"since it only creates cache indexes for collection contains","more than or equal to",this.As,"documents"),B.resolve()):(oo()<=Pe.DEBUG&&ee("QueryEngine","Query:",ao(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.Vs*o?(oo()<=Pe.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",ao(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Zn(t))):B.resolve())}fs(e,t){if(zg(t))return B.resolve(null);let s=Zn(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Cd(t,null,"F"),s=Zn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const h=Ae(...u);return this.ds.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((g=>{const _=this.ws(t,m);return this.Ss(t,_,h,g.readTime)?this.fs(e,Cd(t,null,"F")):this.bs(e,_,t,g)}))))})))))}gs(e,t,s,o){return zg(t)||o.isEqual(_e.min())?B.resolve(null):this.ds.getDocuments(e,s).next((u=>{const h=this.ws(t,u);return this.Ss(t,h,s,o)?B.resolve(null):(oo()<=Pe.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),ao(t)),this.bs(e,h,t,dS(o,ja)).next((m=>m)))}))}ws(e,t){let s=new yt(W_(e));return t.forEach(((o,u)=>{vc(e,u)&&(s=s.add(u))})),s}Ss(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ps(e,t,s){return oo()<=Pe.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",ao(t)),this.ds.getDocumentsMatchingQuery(e,t,Si.min(),s)}bs(e,t,s,o){return this.ds.getDocumentsMatchingQuery(e,s,o).next((u=>(t.forEach((h=>{u=u.insert(h.key,h)})),u)))}}/**
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
 */const Ef="LocalStore",GA=3e8;class QA{constructor(e,t,s,o){this.persistence=e,this.Ds=t,this.serializer=o,this.Cs=new Ze(Se),this.vs=new ms((u=>uf(u)),cf),this.Fs=new Map,this.Ms=e.getRemoteDocumentCache(),this.ci=e.getTargetCache(),this.hi=e.getBundleCache(),this.xs(s)}xs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bA(this.Ms,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ms.setIndexManager(this.indexManager),this.Ds.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Cs)))}}function XA(r,e,t,s){return new QA(r,e,t,s)}async function mv(r,e){const t=we(r);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,t.xs(e),t.mutationQueue.getAllMutationBatches(s)))).next((u=>{const h=[],m=[];let g=Ae();for(const _ of o){h.push(_.batchId);for(const E of _.mutations)g=g.add(E.key)}for(const _ of u){m.push(_.batchId);for(const E of _.mutations)g=g.add(E.key)}return t.localDocuments.getDocuments(s,g).next((_=>({Os:_,removedBatchIds:h,addedBatchIds:m})))}))}))}function JA(r,e){const t=we(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),u=t.Ms.newChangeBuffer({trackRemovals:!0});return(function(m,g,_,E){const I=_.batch,L=I.keys();let z=B.resolve();return L.forEach((J=>{z=z.next((()=>E.getEntry(g,J))).next((X=>{const G=_.docVersions.get(J);Ue(G!==null,48541),X.version.compareTo(G)<0&&(I.applyToRemoteDocument(X,_),X.isValidDocument()&&(X.setReadTime(_.commitVersion),E.addEntry(X)))}))})),z.next((()=>m.mutationQueue.removeMutationBatch(g,I)))})(t,s,e,u).next((()=>u.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let g=Ae();for(let _=0;_<m.mutationResults.length;++_)m.mutationResults[_].transformResults.length>0&&(g=g.add(m.batch.mutations[_].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function gv(r){const e=we(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.ci.getLastRemoteSnapshotVersion(t)))}function YA(r,e){const t=we(r),s=e.snapshotVersion;let o=t.Cs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const h=t.Ms.newChangeBuffer({trackRemovals:!0});o=t.Cs;const m=[];e.targetChanges.forEach(((E,I)=>{const L=o.get(I);if(!L)return;m.push(t.ci.removeMatchingKeys(u,E.removedDocuments,I).next((()=>t.ci.addMatchingKeys(u,E.addedDocuments,I))));let z=L.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(I)!==null?z=z.withResumeToken(Pt.EMPTY_BYTE_STRING,_e.min()).withLastLimboFreeSnapshotVersion(_e.min()):E.resumeToken.approximateByteSize()>0&&(z=z.withResumeToken(E.resumeToken,s)),o=o.insert(I,z),(function(X,G,re){return X.resumeToken.approximateByteSize()===0||G.snapshotVersion.toMicroseconds()-X.snapshotVersion.toMicroseconds()>=GA?!0:re.addedDocuments.size+re.modifiedDocuments.size+re.removedDocuments.size>0})(L,z,E)&&m.push(t.ci.updateTargetData(u,z))}));let g=Lr(),_=Ae();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,E))})),m.push(ZA(u,h,e.documentUpdates).next((E=>{g=E.Ns,_=E.Bs}))),!s.isEqual(_e.min())){const E=t.ci.getLastRemoteSnapshotVersion(u).next((I=>t.ci.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(E)}return B.waitFor(m).next((()=>h.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,g,_))).next((()=>g))})).then((u=>(t.Cs=o,u)))}function ZA(r,e,t){let s=Ae(),o=Ae();return t.forEach((u=>s=s.add(u))),e.getEntries(r,s).next((u=>{let h=Lr();return t.forEach(((m,g)=>{const _=u.get(m);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(_e.min())?(e.removeEntry(m,g.readTime),h=h.insert(m,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(m,g)):ee(Ef,"Ignoring outdated watch update for ",m,". Current version:",_.version," Watch version:",g.version)})),{Ns:h,Bs:o}}))}function ek(r,e){const t=we(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=of),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function tk(r,e){const t=we(r);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.ci.getTargetData(s,e).next((u=>u?(o=u,B.resolve(o)):t.ci.allocateTargetId(s).next((h=>(o=new Cr(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.ci.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.Cs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Cs=t.Cs.insert(s.targetId,s),t.vs.set(e,s.targetId)),s}))}async function Vd(r,e,t){const s=we(r),o=s.Cs.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Co(h))throw h;ee(Ef,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Cs=s.Cs.remove(e),s.vs.delete(o.target)}function ey(r,e,t){const s=we(r);let o=_e.min(),u=Ae();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,_,E){const I=we(g),L=I.vs.get(E);return L!==void 0?B.resolve(I.Cs.get(L)):I.ci.getTargetData(_,E)})(s,h,Zn(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.ci.getMatchingKeysForTargetId(h,m.targetId).next((g=>{u=g}))})).next((()=>s.Ds.getDocumentsMatchingQuery(h,e,t?o:_e.min(),t?u:Ae()))).next((m=>(nk(s,zS(e),m),{documents:m,Ls:u})))))}function nk(r,e,t){let s=r.Fs.get(e)||_e.min();t.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),r.Fs.set(e,s)}class ty{constructor(){this.activeTargetIds=KS()}Ws(e){this.activeTargetIds=this.activeTargetIds.add(e)}Qs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}$s(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class rk{constructor(){this.Co=new ty,this.vo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Co.Ws(e),this.vo[e]||"not-current"}updateQueryState(e,t,s){this.vo[e]=t}removeLocalQueryTarget(e){this.Co.Qs(e)}isLocalQueryTarget(e){return this.Co.activeTargetIds.has(e)}clearQueryState(e){delete this.vo[e]}getAllActiveQueryTargets(){return this.Co.activeTargetIds}isActiveQueryTarget(e){return this.Co.activeTargetIds.has(e)}start(){return this.Co=new ty,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class ik{Fo(e){}shutdown(){}}/**
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
 */const ny="ConnectivityMonitor";class ry{constructor(){this.Mo=()=>this.xo(),this.Oo=()=>this.No(),this.Bo=[],this.Lo()}Fo(e){this.Bo.push(e)}shutdown(){window.removeEventListener("online",this.Mo),window.removeEventListener("offline",this.Oo)}Lo(){window.addEventListener("online",this.Mo),window.addEventListener("offline",this.Oo)}xo(){ee(ny,"Network connectivity changed: AVAILABLE");for(const e of this.Bo)e(0)}No(){ee(ny,"Network connectivity changed: UNAVAILABLE");for(const e of this.Bo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ru=null;function Od(){return Ru===null?Ru=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ru++,"0x"+Ru.toString(16)}/**
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
 */const dd="RestConnection",sk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class ok{get ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${o}`,this.Uo=this.databaseId.database===Gu?`project_id=${s}`:`project_id=${s}&database_id=${o}`}$o(e,t,s,o,u){const h=Od(),m=this.Wo(e,t.toUriEncodedString());ee(dd,`Sending RPC '${e}' ${h}:`,m,s);const g={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Uo};this.Qo(g,o,u);const{host:_}=new URL(m),E=Qa(_);return this.Go(e,m,g,s,E).then((I=>(ee(dd,`Received RPC '${e}' ${h}: `,I),I)),(I=>{throw ds(dd,`RPC '${e}' ${h} failed with error: `,I,"url: ",m,"request:",s),I}))}zo(e,t,s,o,u,h){return this.$o(e,t,s,o,u)}Qo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ko})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,u)=>e[u]=o)),s&&s.headers.forEach(((o,u)=>e[u]=o))}Wo(e,t){const s=sk[e];let o=`${this.qo}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(o=`${o}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),o}terminate(){}}/**
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
 */class ak{constructor(e){this.jo=e.jo,this.Jo=e.Jo}Ho(e){this.Zo=e}Xo(e){this.Yo=e}e_(e){this.t_=e}onMessage(e){this.n_=e}close(){this.Jo()}send(e){this.jo(e)}r_(){this.Zo()}i_(){this.Yo()}s_(e){this.t_(e)}o_(e){this.n_(e)}}/**
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
 */const Mt="WebChannelConnection",ka=(r,e,t)=>{r.listen(e,(s=>{try{t(s)}catch(o){setTimeout((()=>{throw o}),0)}}))};class po extends ok{constructor(e){super(e),this.__=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static a_(){if(!po.u_){const e=T_();ka(e,E_.STAT_EVENT,(t=>{t.stat===Id.PROXY?ee(Mt,"STAT_EVENT: detected buffering proxy"):t.stat===Id.NOPROXY&&ee(Mt,"STAT_EVENT: detected no buffering proxy")})),po.u_=!0}}Go(e,t,s,o,u){const h=Od();return new Promise(((m,g)=>{const _=new v_;_.setWithCredentials(!0),_.listenOnce(w_.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case Vu.NO_ERROR:const I=_.getResponseJson();ee(Mt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(I)),m(I);break;case Vu.TIMEOUT:ee(Mt,`RPC '${e}' ${h} timed out`),g(new le($.DEADLINE_EXCEEDED,"Request time out"));break;case Vu.HTTP_ERROR:const L=_.getStatus();if(ee(Mt,`RPC '${e}' ${h} failed with status:`,L,"response text:",_.getResponseText()),L>0){let z=_.getResponseJson();Array.isArray(z)&&(z=z[0]);const J=z==null?void 0:z.error;if(J&&J.status&&J.message){const X=(function(re){const te=re.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(te)>=0?te:$.UNKNOWN})(J.status);g(new le(X,J.message))}else g(new le($.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new le($.UNAVAILABLE,"Connection failed."));break;default:me(9055,{c_:e,streamId:h,l_:_.getLastErrorCode(),h_:_.getLastError()})}}finally{ee(Mt,`RPC '${e}' ${h} completed.`)}}));const E=JSON.stringify(o);ee(Mt,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",E,s,15)}))}P_(e,t,s){const o=Od(),u=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=this.createWebChannelTransport(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(m.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(m.useFetchStreams=!0),this.Qo(m.initMessageHeaders,t,s),m.encodeInitMessageHeaders=!0;const _=u.join("");ee(Mt,`Creating RPC '${e}' stream ${o}: ${_}`,m);const E=h.createWebChannel(_,m);this.T_(E);let I=!1,L=!1;const z=new ak({jo:J=>{L?ee(Mt,`Not sending because RPC '${e}' stream ${o} is closed:`,J):(I||(ee(Mt,`Opening RPC '${e}' stream ${o} transport.`),E.open(),I=!0),ee(Mt,`RPC '${e}' stream ${o} sending:`,J),E.send(J))},Jo:()=>E.close()});return ka(E,Ra.EventType.OPEN,(()=>{L||(ee(Mt,`RPC '${e}' stream ${o} transport opened.`),z.r_())})),ka(E,Ra.EventType.CLOSE,(()=>{L||(L=!0,ee(Mt,`RPC '${e}' stream ${o} transport closed`),z.s_(),this.I_(E))})),ka(E,Ra.EventType.ERROR,(J=>{L||(L=!0,ds(Mt,`RPC '${e}' stream ${o} transport errored. Name:`,J.name,"Message:",J.message),z.s_(new le($.UNAVAILABLE,"The operation could not be completed")))})),ka(E,Ra.EventType.MESSAGE,(J=>{var X;if(!L){const G=J.data[0];Ue(!!G,16349);const re=G,te=(re==null?void 0:re.error)||((X=re[0])==null?void 0:X.error);if(te){ee(Mt,`RPC '${e}' stream ${o} received error:`,te);const pe=te.status;let Ne=(function(C){const S=ht[C];if(S!==void 0)return nv(S)})(pe),Me=te.message;pe==="NOT_FOUND"&&Me.includes("database")&&Me.includes("does not exist")&&Me.includes(this.databaseId.database)&&ds(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Ne===void 0&&(Ne=$.INTERNAL,Me="Unknown error status: "+pe+" with message "+te.message),L=!0,z.s_(new le(Ne,Me)),E.close()}else ee(Mt,`RPC '${e}' stream ${o} received:`,G),z.o_(G)}})),po.a_(),setTimeout((()=>{z.i_()}),0),z}terminate(){this.__.forEach((e=>e.close())),this.__=[]}T_(e){this.__.push(e)}I_(e){this.__=this.__.filter((t=>t===e))}Qo(e,t,s){super.Qo(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return I_()}}/**
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
 */function lk(r){return new po(r)}function fd(){return typeof document<"u"?document:null}/**
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
 */function Ic(r){return new dA(r,!0)}/**
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
 */po.u_=!1;class yv{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Di=e,this.timerId=t,this.E_=s,this.R_=o,this.A_=u,this.V_=0,this.d_=null,this.m_=Date.now(),this.reset()}reset(){this.V_=0}f_(){this.V_=this.A_}g_(e){this.cancel();const t=Math.floor(this.V_+this.p_()),s=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-s);o>0&&ee("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.d_=this.Di.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.V_*=this.R_,this.V_<this.E_&&(this.V_=this.E_),this.V_>this.A_&&(this.V_=this.A_)}y_(){this.d_!==null&&(this.d_.skipDelay(),this.d_=null)}cancel(){this.d_!==null&&(this.d_.cancel(),this.d_=null)}p_(){return(Math.random()-.5)*this.V_}}/**
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
 */const iy="PersistentStream";class _v{constructor(e,t,s,o,u,h,m,g){this.Di=e,this.w_=s,this.S_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.b_=0,this.D_=null,this.C_=null,this.stream=null,this.v_=0,this.F_=new yv(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Di.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}async close(e,t){this.q_(),this.K_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===$.RESOURCE_EXHAUSTED?(Or(t.toString()),Or("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.e_(t)}U_(){}auth(){this.state=1;const e=this.W_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.b_===t&&this.Q_(s,o)}),(s=>{e((()=>{const o=new le($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(o)}))}))}Q_(e,t){const s=this.W_(this.b_);this.stream=this.z_(e,t),this.stream.Ho((()=>{s((()=>this.listener.Ho()))})),this.stream.Xo((()=>{s((()=>(this.state=2,this.C_=this.Di.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.Xo())))})),this.stream.e_((o=>{s((()=>this.G_(o)))})),this.stream.onMessage((o=>{s((()=>++this.v_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return ee(iy,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Di.enqueueAndForget((()=>this.b_===e?t():(ee(iy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class uk extends _v{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=mA(this.serializer,e),s=(function(u){if(!("targetChange"in u))return _e.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?_e.min():h.readTime?tr(h.readTime):_e.min()})(e);return this.listener.J_(t,s)}H_(e){const t={};t.database=Dd(this.serializer),t.addTarget=(function(u,h){let m;const g=h.target;if(m=Rd(g)?{documents:_A(u,g)}:{query:vA(u,g).dt},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=sv(u,h.resumeToken);const _=Pd(u,h.expectedCount);_!==null&&(m.expectedCount=_)}else if(h.snapshotVersion.compareTo(_e.min())>0){m.readTime=nc(u,h.snapshotVersion.toTimestamp());const _=Pd(u,h.expectedCount);_!==null&&(m.expectedCount=_)}return m})(this.serializer,e);const s=EA(this.serializer,e);s&&(t.labels=s),this.k_(t)}Z_(e){const t={};t.database=Dd(this.serializer),t.removeTarget=e,this.k_(t)}}class ck extends _v{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get X_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.X_&&this.Y_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Ue(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ue(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Ue(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=yA(e.writeResults,e.commitTime),s=tr(e.commitTime);return this.listener.ta(s,t)}na(){const e={};e.database=Dd(this.serializer),this.k_(e)}Y_(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>gA(this.serializer,s)))};this.k_(t)}}/**
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
 */class hk{}class dk extends hk{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new le($.FAILED_PRECONDITION,"The client has already been terminated.")}$o(e,t,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.$o(e,Nd(t,s),o,u,h))).catch((u=>{throw u.name==="FirebaseError"?(u.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new le($.UNKNOWN,u.toString())}))}zo(e,t,s,o,u){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.zo(e,Nd(t,s),o,h,m,u))).catch((h=>{throw h.name==="FirebaseError"?(h.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new le($.UNKNOWN,h.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}function fk(r,e,t,s){return new dk(r,e,t,s)}class pk{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Or(t),this._a=!1):ee("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const or="RemoteStore";class mk{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Map,this.Ea=new Map,this.Ra=new Ci(1e3),this.Aa=new Ci(1001),this.Va=new Set,this.da=[],this.ma=u,this.ma.Fo((h=>{s.enqueueAndForget((async()=>{ys(this)&&(ee(or,"Restarting streams for network reachability change."),await(async function(g){const _=we(g);_.Va.add(4),await rl(_),_.fa.set("Unknown"),_.Va.delete(4),await Sc(_)})(this))}))})),this.fa=new pk(s,o)}}async function Sc(r){if(ys(r))for(const e of r.da)await e(!0)}async function rl(r){for(const e of r.da)await e(!1)}function Ld(r,e){return r.Ia.get(e)||void 0}function vv(r,e){const t=we(r),s=Ld(t,e.targetId);if(s!==void 0&&t.Ta.has(s))return;const o=(function(m,g){const _=Ld(m,g);_!==void 0&&m.Ea.delete(_);const E=(function(L,z){return z%2!=0?L.Aa.next():L.Ra.next()})(m,g);return m.Ia.set(g,E),m.Ea.set(E,g),E})(t,e.targetId);ee(or,"remoteStoreListen mapping SDK target ID to remote",e.targetId,o);const u=new Cr(e.target,o,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.Ta.set(o,u),Af(t)?Sf(t):Po(t).x_()&&If(t,u)}function Tf(r,e){const t=we(r),s=Po(t),o=Ld(t,e);ee(or,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,o),t.Ta.delete(o),t.Ia.delete(e),t.Ea.delete(o),s.x_()&&wv(t,o),t.Ta.size===0&&(s.x_()?s.B_():ys(t)&&t.fa.set("Unknown"))}function If(r,e){if(r.ga.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(_e.min())>0){const t=r.Ea.get(e.targetId);if(t===void 0)return void ee(or,"SDK target ID not found for remote ID: "+e.targetId);const s=r.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(s)}Po(r).H_(e)}function wv(r,e){r.ga.$e(e),Po(r).Z_(e)}function Sf(r){r.ga=new lA({getRemoteKeysForTarget:e=>{const t=r.Ea.get(e);return t!==void 0?r.remoteSyncer.getRemoteKeysForTarget(t):Ae()},Rt:e=>r.Ta.get(e)||null,lt:()=>r.datastore.serializer.databaseId}),Po(r).start(),r.fa.aa()}function Af(r){return ys(r)&&!Po(r).M_()&&r.Ta.size>0}function ys(r){return we(r).Va.size===0}function Ev(r){r.ga=void 0}async function gk(r){r.fa.set("Online")}async function yk(r){r.Ta.forEach(((e,t)=>{If(r,e)}))}async function _k(r,e){Ev(r),Af(r)?(r.fa.la(e),Sf(r)):r.fa.set("Unknown")}async function vk(r,e,t){if(r.fa.set("Online"),e instanceof iv&&e.state===2&&e.cause)try{await(async function(o,u){const h=u.cause;for(const m of u.targetIds){if(o.Ta.has(m)){const g=o.Ea.get(m);g!==void 0&&(await o.remoteSyncer.rejectListen(g,h),o.Ia.delete(g),o.Ea.delete(m)),o.Ta.delete(m)}o.ga.removeTarget(m)}})(r,e)}catch(s){ee(or,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ic(r,s)}else if(e instanceof bu?r.ga.Xe(e):e instanceof rv?r.ga.it(e):r.ga.tt(e),!t.isEqual(_e.min()))try{const s=await gv(r.localStore);t.compareTo(s)>=0&&await(function(u,h){const m=u.ga.Pt(h);m.targetChanges.forEach(((_,E)=>{if(_.resumeToken.approximateByteSize()>0){const I=u.Ta.get(E);I&&u.Ta.set(E,I.withResumeToken(_.resumeToken,h))}})),m.targetMismatches.forEach(((_,E)=>{const I=u.Ta.get(_);if(!I)return;u.Ta.set(_,I.withResumeToken(Pt.EMPTY_BYTE_STRING,I.snapshotVersion)),wv(u,_);const L=new Cr(I.target,_,E,I.sequenceNumber);If(u,L)}));const g=(function(E,I){const L=new Map;I.targetChanges.forEach(((J,X)=>{const G=E.Ea.get(X);G!==void 0&&L.set(G,J)}));let z=new Ze(Se);return I.targetMismatches.forEach(((J,X)=>{const G=E.Ea.get(J);G!==void 0&&(z=z.insert(G,X))})),new tl(I.snapshotVersion,L,z,I.documentUpdates,I.resolvedLimboDocuments)})(u,m);return u.remoteSyncer.applyRemoteEvent(g)})(r,t)}catch(s){ee(or,"Failed to raise snapshot:",s),await ic(r,s)}}async function ic(r,e,t){if(!Co(e))throw e;r.Va.add(1),await rl(r),r.fa.set("Offline"),t||(t=()=>gv(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{ee(or,"Retrying IndexedDB access"),await t(),r.Va.delete(1),await Sc(r)}))}function Tv(r,e){return e().catch((t=>ic(r,t,e)))}async function Ac(r){const e=we(r),t=Pi(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:of;for(;wk(e);)try{const o=await ek(e.localStore,s);if(o===null){e.Pa.length===0&&t.B_();break}s=o.batchId,Ek(e,o)}catch(o){await ic(e,o)}Iv(e)&&Sv(e)}function wk(r){return ys(r)&&r.Pa.length<10}function Ek(r,e){r.Pa.push(e);const t=Pi(r);t.x_()&&t.X_&&t.Y_(e.mutations)}function Iv(r){return ys(r)&&!Pi(r).M_()&&r.Pa.length>0}function Sv(r){Pi(r).start()}async function Tk(r){Pi(r).na()}async function Ik(r){const e=Pi(r);for(const t of r.Pa)e.Y_(t.mutations)}async function Sk(r,e,t){const s=r.Pa.shift(),o=mf.from(s,e,t);await Tv(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await Ac(r)}async function Ak(r,e){e&&Pi(r).X_&&await(async function(s,o){if((function(h){return sA(h)&&h!==$.ABORTED})(o.code)){const u=s.Pa.shift();Pi(s).N_(),await Tv(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await Ac(s)}})(r,e),Iv(r)&&Sv(r)}async function sy(r,e){const t=we(r);t.asyncQueue.verifyOperationInProgress(),ee(or,"RemoteStore received new credentials");const s=ys(t);t.Va.add(3),await rl(t),s&&t.fa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Va.delete(3),await Sc(t)}async function kk(r,e){const t=we(r);e?(t.Va.delete(2),await Sc(t)):e||(t.Va.add(2),await rl(t),t.fa.set("Unknown"))}function Po(r){return r.pa||(r.pa=(function(t,s,o){const u=we(t);return u.ia(),new uk(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Ho:gk.bind(null,r),Xo:yk.bind(null,r),e_:_k.bind(null,r),J_:vk.bind(null,r)}),r.da.push((async e=>{e?(r.pa.N_(),Af(r)?Sf(r):r.fa.set("Unknown")):(await r.pa.stop(),Ev(r))}))),r.pa}function Pi(r){return r.ya||(r.ya=(function(t,s,o){const u=we(t);return u.ia(),new ck(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Ho:()=>Promise.resolve(),Xo:Tk.bind(null,r),e_:Ak.bind(null,r),ea:Ik.bind(null,r),ta:Sk.bind(null,r)}),r.da.push((async e=>{e?(r.ya.N_(),await Ac(r)):(await r.ya.stop(),r.Pa.length>0&&(ee(or,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))}))),r.ya}/**
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
 */class kf{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Nr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new kf(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new le($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Rf(r,e){if(Or("AsyncQueue",`${e}: ${r}`),Co(r))return new le($.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class mo{static emptySet(e){return new mo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||he.comparator(t.key,s.key):(t,s)=>he.comparator(t.key,s.key),this.keyedMap=Ca(),this.sortedSet=new Ze(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof mo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new mo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class oy{constructor(){this.wa=new Ze(he.comparator)}track(e){const t=e.doc.key,s=this.wa.get(t);s?e.type!==0&&s.type===3?this.wa=this.wa.insert(t,e):e.type===3&&s.type!==1?this.wa=this.wa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.wa=this.wa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.wa=this.wa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.wa=this.wa.remove(t):e.type===1&&s.type===2?this.wa=this.wa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.wa=this.wa.insert(t,{type:2,doc:e.doc}):me(63341,{At:e,Sa:s}):this.wa=this.wa.insert(t,e)}ba(){const e=[];return this.wa.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Eo{constructor(e,t,s,o,u,h,m,g,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new Eo(e,t,mo.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_c(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class Rk{constructor(){this.Da=void 0,this.Ca=[]}va(){return this.Ca.some((e=>e.Fa()))}}class Ck{constructor(){this.queries=ay(),this.onlineState="Unknown",this.Ma=new Set}terminate(){(function(t,s){const o=we(t),u=o.queries;o.queries=ay(),u.forEach(((h,m)=>{for(const g of m.Ca)g.onError(s)}))})(this,new le($.ABORTED,"Firestore shutting down"))}}function ay(){return new ms((r=>q_(r)),_c)}async function Av(r,e){const t=we(r);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.va()&&e.Fa()&&(s=2):(u=new Rk,s=e.Fa()?0:1);try{switch(s){case 0:u.Da=await t.onListen(o,!0);break;case 1:u.Da=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=Rf(h,`Initialization of query '${ao(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.Ca.push(e),e.xa(t.onlineState),u.Da&&e.Oa(u.Da)&&Cf(t)}async function kv(r,e){const t=we(r),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.Ca.indexOf(e);h>=0&&(u.Ca.splice(h,1),u.Ca.length===0?o=e.Fa()?0:1:!u.va()&&e.Fa()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function Pk(r,e){const t=we(r);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.Ca)m.Oa(o)&&(s=!0);h.Da=o}}s&&Cf(t)}function Nk(r,e,t){const s=we(r),o=s.queries.get(e);if(o)for(const u of o.Ca)u.onError(t);s.queries.delete(e)}function Cf(r){r.Ma.forEach((e=>{e.next()}))}var Md,ly;(ly=Md||(Md={})).Na="default",ly.Cache="cache";class Rv{constructor(e,t,s){this.query=e,this.Ba=t,this.La=!1,this.ka=null,this.onlineState="Unknown",this.options=s||{}}Oa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Eo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.La?this.qa(e)&&(this.Ba.next(e),t=!0):this.Ka(e,this.onlineState)&&(this.Ua(e),t=!0),this.ka=e,t}onError(e){this.Ba.error(e)}xa(e){this.onlineState=e;let t=!1;return this.ka&&!this.La&&this.Ka(this.ka,e)&&(this.Ua(this.ka),t=!0),t}Ka(e,t){if(!e.fromCache||!this.Fa())return!0;const s=t!=="Offline";return(!this.options.$a||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const t=this.ka&&this.ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ua(e){e=Eo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.La=!0,this.Ba.next(e)}Fa(){return this.options.source!==Md.Cache}}/**
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
 */class Cv{constructor(e){this.key=e}}class Pv{constructor(e){this.key=e}}class xk{constructor(e,t){this.query=e,this.eu=t,this.tu=null,this.hasCachedResults=!1,this.current=!1,this.nu=Ae(),this.mutatedKeys=Ae(),this.ru=W_(e),this.iu=new mo(this.ru)}get su(){return this.eu}ou(e,t){const s=t?t._u:new oy,o=t?t.iu:this.iu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((E,I)=>{const L=o.get(E),z=vc(this.query,I)?I:null,J=!!L&&this.mutatedKeys.has(L.key),X=!!z&&(z.hasLocalMutations||this.mutatedKeys.has(z.key)&&z.hasCommittedMutations);let G=!1;L&&z?L.data.isEqual(z.data)?J!==X&&(s.track({type:3,doc:z}),G=!0):this.au(L,z)||(s.track({type:2,doc:z}),G=!0,(g&&this.ru(z,g)>0||_&&this.ru(z,_)<0)&&(m=!0)):!L&&z?(s.track({type:0,doc:z}),G=!0):L&&!z&&(s.track({type:1,doc:L}),G=!0,(g||_)&&(m=!0)),G&&(z?(h=h.add(z),u=X?u.add(E):u.delete(E)):(h=h.delete(E),u=u.delete(E)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{iu:h,_u:s,Ss:m,mutatedKeys:u}}au(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.iu;this.iu=e.iu,this.mutatedKeys=e.mutatedKeys;const h=e._u.ba();h.sort(((E,I)=>(function(z,J){const X=G=>{switch(G){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me(20277,{At:G})}};return X(z)-X(J)})(E.type,I.type)||this.ru(E.doc,I.doc))),this.uu(s),o=o??!1;const m=t&&!o?this.cu():[],g=this.nu.size===0&&this.current&&!o?1:0,_=g!==this.tu;return this.tu=g,h.length!==0||_?{snapshot:new Eo(this.query,e.iu,u,h,e.mutatedKeys,g===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),lu:m}:{lu:m}}xa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({iu:this.iu,_u:new oy,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{lu:[]}}hu(e){return!this.eu.has(e)&&!!this.iu.has(e)&&!this.iu.get(e).hasLocalMutations}uu(e){e&&(e.addedDocuments.forEach((t=>this.eu=this.eu.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.eu=this.eu.delete(t))),this.current=e.current)}cu(){if(!this.current)return[];const e=this.nu;this.nu=Ae(),this.iu.forEach((s=>{this.hu(s.key)&&(this.nu=this.nu.add(s.key))}));const t=[];return e.forEach((s=>{this.nu.has(s)||t.push(new Pv(s))})),this.nu.forEach((s=>{e.has(s)||t.push(new Cv(s))})),t}Pu(e){this.eu=e.Ls,this.nu=Ae();const t=this.ou(e.documents);return this.applyChanges(t,!0)}Tu(){return Eo.fromInitialDocuments(this.query,this.iu,this.mutatedKeys,this.tu===0,this.hasCachedResults)}}const Pf="SyncEngine";class Dk{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class Vk{constructor(e){this.key=e,this.Iu=!1}}class Ok{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Eu={},this.Ru=new ms((m=>q_(m)),_c),this.Au=new Map,this.Vu=new Set,this.du=new Ze(he.comparator),this.mu=new Map,this.fu=new _f,this.gu={},this.pu=new Map,this.yu=Ci._r(),this.onlineState="Unknown",this.wu=void 0}get isPrimaryClient(){return this.wu===!0}}async function Lk(r,e,t=!0){const s=Lv(r);let o;const u=s.Ru.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.Tu()):o=await Nv(s,e,t,!0),o}async function Mk(r,e){const t=Lv(r);await Nv(t,e,!0,!1)}async function Nv(r,e,t,s){const o=await tk(r.localStore,Zn(e)),u=o.targetId,h=r.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await bk(r,e,u,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&vv(r.remoteStore,o),m}async function bk(r,e,t,s,o){r.Su=(I,L,z)=>(async function(X,G,re,te){let pe=G.view.ou(re);pe.Ss&&(pe=await ey(X.localStore,G.query,!1).then((({documents:C})=>G.view.ou(C,pe))));const Ne=te&&te.targetChanges.get(G.targetId),Me=te&&te.targetMismatches.get(G.targetId)!=null,ke=G.view.applyChanges(pe,X.isPrimaryClient,Ne,Me);return cy(X,G.targetId,ke.lu),ke.snapshot})(r,I,L,z);const u=await ey(r.localStore,e,!0),h=new xk(e,u.Ls),m=h.ou(u.documents),g=nl.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),_=h.applyChanges(m,r.isPrimaryClient,g);cy(r,t,_.lu);const E=new Dk(e,t,h);return r.Ru.set(e,E),r.Au.has(t)?r.Au.get(t).push(e):r.Au.set(t,[e]),_.snapshot}async function Fk(r,e,t){const s=we(r),o=s.Ru.get(e),u=s.Au.get(o.targetId);if(u.length>1)return s.Au.set(o.targetId,u.filter((h=>!_c(h,e)))),void s.Ru.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Vd(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Tf(s.remoteStore,o.targetId),bd(s,o.targetId)})).catch(Ro)):(bd(s,o.targetId),await Vd(s.localStore,o.targetId,!0))}async function Uk(r,e){const t=we(r),s=t.Ru.get(e),o=t.Au.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Tf(t.remoteStore,s.targetId))}async function jk(r,e,t){const s=Kk(r);try{const o=await(function(h,m){const g=we(h),_=Xe.now(),E=m.reduce(((z,J)=>z.add(J.key)),Ae());let I,L;return g.persistence.runTransaction("Locally write mutations","readwrite",(z=>{let J=Lr(),X=Ae();return g.Ms.getEntries(z,E).next((G=>{J=G,J.forEach(((re,te)=>{te.isValidDocument()||(X=X.add(re))}))})).next((()=>g.localDocuments.getOverlayedDocuments(z,J))).next((G=>{I=G;const re=[];for(const te of m){const pe=eA(te,I.get(te.key).overlayedDocument);pe!=null&&re.push(new gs(te.key,pe,F_(pe.value.mapValue),er.exists(!0)))}return g.mutationQueue.addMutationBatch(z,_,re,m)})).next((G=>{L=G;const re=G.applyToLocalDocumentSet(I,X);return g.documentOverlayCache.saveOverlays(z,G.batchId,re)}))})).then((()=>({batchId:L.batchId,changes:G_(I)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,m,g){let _=h.gu[h.currentUser.toKey()];_||(_=new Ze(Se)),_=_.insert(m,g),h.gu[h.currentUser.toKey()]=_})(s,o.batchId,t),await il(s,o.changes),await Ac(s.remoteStore)}catch(o){const u=Rf(o,"Failed to persist write");t.reject(u)}}async function xv(r,e){const t=we(r);try{const s=await YA(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const h=t.mu.get(u);h&&(Ue(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.Iu=!0:o.modifiedDocuments.size>0?Ue(h.Iu,14607):o.removedDocuments.size>0&&(Ue(h.Iu,42227),h.Iu=!1))})),await il(t,s,e)}catch(s){await Ro(s)}}function uy(r,e,t){const s=we(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Ru.forEach(((u,h)=>{const m=h.view.xa(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const g=we(h);g.onlineState=m;let _=!1;g.queries.forEach(((E,I)=>{for(const L of I.Ca)L.xa(m)&&(_=!0)})),_&&Cf(g)})(s.eventManager,e),o.length&&s.Eu.J_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function zk(r,e,t){const s=we(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.mu.get(e),u=o&&o.key;if(u){let h=new Ze(he.comparator);h=h.insert(u,Ft.newNoDocument(u,_e.min()));const m=Ae().add(u),g=new tl(_e.min(),new Map,new Ze(Se),h,m);await xv(s,g),s.du=s.du.remove(u),s.mu.delete(e),Nf(s)}else await Vd(s.localStore,e,!1).then((()=>bd(s,e,t))).catch(Ro)}async function Bk(r,e){const t=we(r),s=e.batch.batchId;try{const o=await JA(t.localStore,e);Vv(t,s,null),Dv(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await il(t,o)}catch(o){await Ro(o)}}async function $k(r,e,t){const s=we(r);try{const o=await(function(h,m){const g=we(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let E;return g.mutationQueue.lookupMutationBatch(_,m).next((I=>(Ue(I!==null,37113),E=I.keys(),g.mutationQueue.removeMutationBatch(_,I)))).next((()=>g.mutationQueue.performConsistencyCheck(_))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(_,E,m))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,E))).next((()=>g.localDocuments.getDocuments(_,E)))}))})(s.localStore,e);Vv(s,e,t),Dv(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await il(s,o)}catch(o){await Ro(o)}}function Dv(r,e){(r.pu.get(e)||[]).forEach((t=>{t.resolve()})),r.pu.delete(e)}function Vv(r,e,t){const s=we(r);let o=s.gu[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.gu[s.currentUser.toKey()]=o}}function bd(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Au.get(e))r.Ru.delete(s),t&&r.Eu.bu(s,t);r.Au.delete(e),r.isPrimaryClient&&r.fu.Qr(e).forEach((s=>{r.fu.containsKey(s)||Ov(r,s)}))}function Ov(r,e){r.Vu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(Tf(r.remoteStore,t),r.du=r.du.remove(e),r.mu.delete(t),Nf(r))}function cy(r,e,t){for(const s of t)s instanceof Cv?(r.fu.addReference(s.key,e),Hk(r,s)):s instanceof Pv?(ee(Pf,"Document no longer in limbo: "+s.key),r.fu.removeReference(s.key,e),r.fu.containsKey(s.key)||Ov(r,s.key)):me(19791,{Du:s})}function Hk(r,e){const t=e.key,s=t.path.canonicalString();r.du.get(t)||r.Vu.has(s)||(ee(Pf,"New document in limbo: "+t),r.Vu.add(s),Nf(r))}function Nf(r){for(;r.Vu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Vu.values().next().value;r.Vu.delete(e);const t=new he(Qe.fromString(e)),s=r.yu.next();r.mu.set(s,new Vk(t)),r.du=r.du.insert(t,s),vv(r.remoteStore,new Cr(Zn(hf(t.path)),s,"TargetPurposeLimboResolution",pc.ce))}}async function il(r,e,t){const s=we(r),o=[],u=[],h=[];s.Ru.isEmpty()||(s.Ru.forEach(((m,g)=>{h.push(s.Su(g,e,t).then((_=>{var E;if((_||t)&&s.isPrimaryClient){const I=_?!_.fromCache:(E=t==null?void 0:t.targetChanges.get(g.targetId))==null?void 0:E.current;s.sharedClientState.updateQueryState(g.targetId,I?"current":"not-current")}if(_){o.push(_);const I=wf.Is(g.targetId,_);u.push(I)}})))})),await Promise.all(h),s.Eu.J_(o),await(async function(g,_){const E=we(g);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(I=>B.forEach(_,(L=>B.forEach(L.Ps,(z=>E.persistence.referenceDelegate.addReference(I,L.targetId,z))).next((()=>B.forEach(L.Ts,(z=>E.persistence.referenceDelegate.removeReference(I,L.targetId,z)))))))))}catch(I){if(!Co(I))throw I;ee(Ef,"Failed to update sequence numbers: "+I)}for(const I of _){const L=I.targetId;if(!I.fromCache){const z=E.Cs.get(L),J=z.snapshotVersion,X=z.withLastLimboFreeSnapshotVersion(J);E.Cs=E.Cs.insert(L,X)}}})(s.localStore,u))}async function qk(r,e){const t=we(r);if(!t.currentUser.isEqual(e)){ee(Pf,"User change. New user:",e.toKey());const s=await mv(t.localStore,e);t.currentUser=e,(function(u,h){u.pu.forEach((m=>{m.forEach((g=>{g.reject(new le($.CANCELLED,h))}))})),u.pu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await il(t,s.Os)}}function Wk(r,e){const t=we(r),s=t.mu.get(e);if(s&&s.Iu)return Ae().add(s.key);{let o=Ae();const u=t.Au.get(e);if(!u)return o;for(const h of u){const m=t.Ru.get(h);o=o.unionWith(m.view.su)}return o}}function Lv(r){const e=we(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=xv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Wk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zk.bind(null,e),e.Eu.J_=Pk.bind(null,e.eventManager),e.Eu.bu=Nk.bind(null,e.eventManager),e}function Kk(r){const e=we(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Bk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$k.bind(null,e),e}class sc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ic(e.databaseInfo.databaseId),this.sharedClientState=this.Fu(e),this.persistence=this.Mu(e),await this.persistence.start(),this.localStore=this.xu(e),this.gcScheduler=this.Ou(e,this.localStore),this.indexBackfillerScheduler=this.Nu(e,this.localStore)}Ou(e,t){return null}Nu(e,t){return null}xu(e){return XA(this.persistence,new KA,e.initialUser,this.serializer)}Mu(e){return new pv(vf.Ai,this.serializer)}Fu(e){return new rk}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}sc.provider={build:()=>new sc};class Gk extends sc{constructor(e){super(),this.cacheSizeBytes=e}Ou(e,t){Ue(this.persistence.referenceDelegate instanceof rc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new DA(s,e.asyncQueue,t)}Mu(e){const t=this.cacheSizeBytes!==void 0?Qt.withCacheSize(this.cacheSizeBytes):Qt.DEFAULT;return new pv((s=>rc.Ai(s,t)),this.serializer)}}class Fd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>uy(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=qk.bind(null,this.syncEngine),await kk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Ck})()}createDatastore(e){const t=Ic(e.databaseInfo.databaseId),s=lk(e.databaseInfo);return fk(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,u,h,m){return new mk(s,o,u,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>uy(this.syncEngine,t,0)),(function(){return ry.v()?new ry:new ik})())}createSyncEngine(e,t){return(function(o,u,h,m,g,_,E){const I=new Ok(o,u,h,m,g,_);return E&&(I.wu=!0),I})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const u=we(o);ee(or,"RemoteStore shutting down."),u.Va.add(5),await rl(u),u.ma.shutdown(),u.fa.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Fd.provider={build:()=>new Fd};/**
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
 */class Mv{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Lu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Lu(this.observer.error,e):Or("Uncaught Error in snapshot listener:",e.toString()))}ku(){this.muted=!0}Lu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Ni="FirestoreClient";class Qk{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=o,this.user=bt.UNAUTHENTICATED,this.clientId=rf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async h=>{ee(Ni,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(ee(Ni,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Nr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Rf(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function pd(r,e){r.asyncQueue.verifyOperationInProgress(),ee(Ni,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await mv(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function hy(r,e){r.asyncQueue.verifyOperationInProgress();const t=await Xk(r);ee(Ni,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((s=>sy(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>sy(e.remoteStore,o))),r._onlineComponents=e}async function Xk(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ee(Ni,"Using user provided OfflineComponentProvider");try{await pd(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===$.FAILED_PRECONDITION||o.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;ds("Error using user provided cache. Falling back to memory cache: "+t),await pd(r,new sc)}}else ee(Ni,"Using default OfflineComponentProvider"),await pd(r,new Gk(void 0));return r._offlineComponents}async function bv(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ee(Ni,"Using user provided OnlineComponentProvider"),await hy(r,r._uninitializedComponentsProvider._online)):(ee(Ni,"Using default OnlineComponentProvider"),await hy(r,new Fd))),r._onlineComponents}function Jk(r){return bv(r).then((e=>e.syncEngine))}async function Fv(r){const e=await bv(r),t=e.eventManager;return t.onListen=Lk.bind(null,e.syncEngine),t.onUnlisten=Fk.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Mk.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Uk.bind(null,e.syncEngine),t}function Yk(r,e,t={}){const s=new Nr;return r.asyncQueue.enqueueAndForget((async()=>(function(u,h,m,g,_){const E=new Mv({next:L=>{E.ku(),h.enqueueAndForget((()=>kv(u,I)));const z=L.docs.has(m);!z&&L.fromCache?_.reject(new le($.UNAVAILABLE,"Failed to get document because the client is offline.")):z&&L.fromCache&&g&&g.source==="server"?_.reject(new le($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(L)},error:L=>_.reject(L)}),I=new Rv(hf(m.path),E,{includeMetadataChanges:!0,$a:!0});return Av(u,I)})(await Fv(r),r.asyncQueue,e,t,s))),s.promise}function Zk(r,e,t={}){const s=new Nr;return r.asyncQueue.enqueueAndForget((async()=>(function(u,h,m,g,_){const E=new Mv({next:L=>{E.ku(),h.enqueueAndForget((()=>kv(u,I))),L.fromCache&&g.source==="server"?_.reject(new le($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(L)},error:L=>_.reject(L)}),I=new Rv(m,E,{includeMetadataChanges:!0,$a:!0});return Av(u,I)})(await Fv(r),r.asyncQueue,e,t,s))),s.promise}function eR(r,e){const t=new Nr;return r.asyncQueue.enqueueAndForget((async()=>jk(await Jk(r),e,t))),t.promise}/**
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
 */function Uv(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const tR="ComponentProvider",dy=new Map;function nR(r,e,t,s,o){return new TS(r,e,t,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,Uv(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator,s)}/**
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
 */const jv="firestore.googleapis.com",fy=!0;class py{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new le($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=jv,this.ssl=fy}else this.host=e.host,this.ssl=e.ssl??fy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=fv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<NA)throw new le($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}hS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Uv(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new le($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new le($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new le($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class kc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new py({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new le($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new le($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new py(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new tS;switch(s.type){case"firstParty":return new sS(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new le($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=dy.get(t);s&&(ee(tR,"Removing Datastore"),dy.delete(t),s.terminate())})(this),Promise.resolve()}}function rR(r,e,t,s={}){var _;r=Ii(r,kc);const o=Qa(e),u=r._getSettings(),h={...u,emulatorOptions:r._getEmulatorOptions()},m=`${e}:${t}`;o&&Dy(`https://${m}`),u.host!==jv&&u.host!==m&&ds("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...u,host:m,ssl:o,emulatorOptions:s};if(!us(g,h)&&(r._setSettings(g),s.mockUserToken)){let E,I;if(typeof s.mockUserToken=="string")E=s.mockUserToken,I=bt.MOCK_USER;else{E=NE(s.mockUserToken,(_=r._app)==null?void 0:_.options.projectId);const L=s.mockUserToken.sub||s.mockUserToken.user_id;if(!L)throw new le($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new bt(L)}r._authCredentials=new nS(new A_(E,I))}}/**
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
 */class Rc{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Rc(this.firestore,e,this._query)}}class gt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ei(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gt(this.firestore,e,this._key)}toJSON(){return{type:gt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Za(t,gt._jsonSchema))return new gt(e,s||null,new he(Qe.fromString(t.referencePath)))}}gt._jsonSchemaVersion="firestore/documentReference/1.0",gt._jsonSchema={type:dt("string",gt._jsonSchemaVersion),referencePath:dt("string")};class Ei extends Rc{constructor(e,t,s){super(e,t,hf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gt(this.firestore,null,new he(e))}withConverter(e){return new Ei(this.firestore,e,this._path)}}function iR(r,e,...t){if(r=Xt(r),k_("collection","path",e),r instanceof kc){const s=Qe.fromString(e,...t);return Cg(s),new Ei(r,null,s)}{if(!(r instanceof gt||r instanceof Ei))throw new le($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Qe.fromString(e,...t));return Cg(s),new Ei(r.firestore,null,s)}}function To(r,e,...t){if(r=Xt(r),arguments.length===1&&(e=rf.newId()),k_("doc","path",e),r instanceof kc){const s=Qe.fromString(e,...t);return Rg(s),new gt(r,null,new he(s))}{if(!(r instanceof gt||r instanceof Ei))throw new le($.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Qe.fromString(e,...t));return Rg(s),new gt(r.firestore,r instanceof Ei?r.converter:null,new he(s))}}/**
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
 */const my="AsyncQueue";class gy{constructor(e=Promise.resolve()){this.nc=[],this.rc=!1,this.sc=[],this.oc=null,this._c=!1,this.ac=!1,this.uc=[],this.F_=new yv(this,"async_queue_retry"),this.cc=()=>{const s=fd();s&&ee(my,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this.lc=e;const t=fd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.cc)}get isShuttingDown(){return this.rc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.hc(),this.Pc(e)}enterRestrictedMode(e){if(!this.rc){this.rc=!0,this.ac=e||!1;const t=fd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.cc)}}enqueue(e){if(this.hc(),this.rc)return new Promise((()=>{}));const t=new Nr;return this.Pc((()=>this.rc&&this.ac?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.nc.push(e),this.Tc())))}async Tc(){if(this.nc.length!==0){try{await this.nc[0](),this.nc.shift(),this.F_.reset()}catch(e){if(!Co(e))throw e;ee(my,"Operation failed with retryable error: "+e)}this.nc.length>0&&this.F_.g_((()=>this.Tc()))}}Pc(e){const t=this.lc.then((()=>(this._c=!0,e().catch((s=>{throw this.oc=s,this._c=!1,Or("INTERNAL UNHANDLED ERROR: ",yy(s)),s})).then((s=>(this._c=!1,s))))));return this.lc=t,t}enqueueAfterDelay(e,t,s){this.hc(),this.uc.indexOf(e)>-1&&(t=0);const o=kf.createAndSchedule(this,e,t,s,(u=>this.Ic(u)));return this.sc.push(o),o}hc(){this.oc&&me(47125,{Ec:yy(this.oc)})}verifyOperationInProgress(){}async Rc(){let e;do e=this.lc,await e;while(e!==this.lc)}Ac(e){for(const t of this.sc)if(t.timerId===e)return!0;return!1}Vc(e){return this.Rc().then((()=>{this.sc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.sc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Rc()}))}dc(e){this.uc.push(e)}Ic(e){const t=this.sc.indexOf(e);this.sc.splice(t,1)}}function yy(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class sl extends kc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new gy,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new gy(e),this._firestoreClient=void 0,await e}}}function sR(r,e){const t=typeof r=="object"?r:My(),s=typeof r=="string"?r:Gu,o=qd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=PE("firestore");u&&rR(o,...u)}return o}function xf(r){if(r._terminated)throw new le($.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||oR(r),r._firestoreClient}function oR(r){var s,o,u,h;const e=r._freezeSettings(),t=nR(r._databaseId,((s=r._app)==null?void 0:s.options.appId)||"",r._persistenceKey,(o=r._app)==null?void 0:o.options.apiKey,e);r._componentsProvider||(u=e.localCache)!=null&&u._offlineComponentProvider&&((h=e.localCache)!=null&&h._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new Qk(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&(function(g){const _=g==null?void 0:g._online.build();return{_offline:g==null?void 0:g._offline.build(_),_online:_}})(r._componentsProvider))}/**
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
 */class gn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new gn(Pt.fromBase64String(e))}catch(t){throw new le($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new gn(Pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:gn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Za(e,gn._jsonSchema))return gn.fromBase64String(e.bytes)}}gn._jsonSchemaVersion="firestore/bytes/1.0",gn._jsonSchema={type:dt("string",gn._jsonSchemaVersion),bytes:dt("string")};/**
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
 */class zv{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new le($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Bv{constructor(e){this._methodName=e}}/**
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
 */class nr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new le($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new le($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:nr._jsonSchemaVersion}}static fromJSON(e){if(Za(e,nr._jsonSchema))return new nr(e.latitude,e.longitude)}}nr._jsonSchemaVersion="firestore/geoPoint/1.0",nr._jsonSchema={type:dt("string",nr._jsonSchemaVersion),latitude:dt("number"),longitude:dt("number")};/**
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
 */class xn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:xn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Za(e,xn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new xn(e.vectorValues);throw new le($.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}xn._jsonSchemaVersion="firestore/vectorValue/1.0",xn._jsonSchema={type:dt("string",xn._jsonSchemaVersion),vectorValues:dt("object")};/**
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
 */const aR=/^__.*__$/;class lR{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new gs(e,this.data,this.fieldMask,t,this.fieldTransforms):new el(e,this.data,t,this.fieldTransforms)}}function $v(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me(40011,{dataSource:r})}}class Df{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.mc(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Df({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}gc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.i({path:t,arrayElement:!1});return s.yc(e),s}wc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.i({path:t,arrayElement:!1});return s.mc(),s}Sc(e){return this.i({path:void 0,arrayElement:!0})}bc(e){return oc(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}mc(){if(this.path)for(let e=0;e<this.path.length;e++)this.yc(this.path.get(e))}yc(e){if(e.length===0)throw this.bc("Document fields must not be empty");if($v(this.dataSource)&&aR.test(e))throw this.bc('Document fields cannot begin and end with "__"')}}class uR{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Ic(e)}V(e,t,s,o=!1){return new Df({dataSource:e,methodName:t,targetDoc:s,path:Ct.emptyPath(),arrayElement:!1,hasConverter:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cR(r){const e=r._freezeSettings(),t=Ic(r._databaseId);return new uR(r._databaseId,!!e.ignoreUndefinedProperties,t)}function hR(r,e,t,s,o,u={}){const h=r.V(u.merge||u.mergeFields?2:0,e,t,o);Kv("Data must be an object, but it was:",h,s);const m=qv(s,h);let g,_;if(u.merge)g=new Pn(h.fieldMask),_=h.fieldTransforms;else if(u.mergeFields){const E=[];for(const I of u.mergeFields){const L=Vf(e,I,t);if(!h.contains(L))throw new le($.INVALID_ARGUMENT,`Field '${L}' is specified in your field mask but missing from your input data.`);pR(E,L)||E.push(L)}g=new Pn(E),_=h.fieldTransforms.filter((I=>g.covers(I.field)))}else g=null,_=h.fieldTransforms;return new lR(new mn(m),g,_)}function Hv(r,e){if(Wv(r=Xt(r)))return Kv("Unsupported field value:",e,r),qv(r,e);if(r instanceof Bv)return(function(s,o){if(!$v(o.dataSource))throw o.bc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.bc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.bc("Nested arrays are not supported");return(function(s,o){const u=[];let h=0;for(const m of s){let g=Hv(m,o.Sc(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}})(r,e)}return(function(s,o){if((s=Xt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return GS(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Xe.fromDate(s);return{timestampValue:nc(o.serializer,u)}}if(s instanceof Xe){const u=new Xe(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:nc(o.serializer,u)}}if(s instanceof nr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof gn)return{bytesValue:sv(o.serializer,s._byteString)};if(s instanceof gt){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.bc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:yf(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof xn)return(function(h,m){const g=h instanceof xn?h.toArray():h;return{mapValue:{fields:{[L_]:{stringValue:M_},[Qu]:{arrayValue:{values:g.map((E=>{if(typeof E!="number")throw m.bc("VectorValues must only contain numeric values.");return wc(m.serializer,E)}))}}}}}})(s,o);if(dv(s))return s._toProto(o.serializer);throw o.bc(`Unsupported field value: ${sf(s)}`)})(r,e)}function qv(r,e){const t={};return P_(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ps(r,((s,o)=>{const u=Hv(o,e.gc(s));u!=null&&(t[s]=u)})),{mapValue:{fields:t}}}function Wv(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Xe||r instanceof nr||r instanceof gn||r instanceof gt||r instanceof Bv||r instanceof xn||dv(r))}function Kv(r,e,t){if(!Wv(t)||!R_(t)){const s=sf(t);throw s==="an object"?e.bc(r+" a custom object"):e.bc(r+" "+s)}}function Vf(r,e,t){if((e=Xt(e))instanceof zv)return e._internalPath;if(typeof e=="string")return fR(r,e);throw oc("Field path arguments must be of type string or ",r,!1,void 0,t)}const dR=new RegExp("[~\\*/\\[\\]]");function fR(r,e,t){if(e.search(dR)>=0)throw oc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new zv(...e.split("."))._internalPath}catch{throw oc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function oc(r,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new le($.INVALID_ARGUMENT,m+r+g)}function pR(r,e){return r.some((t=>t.isEqual(e)))}/**
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
 */class mR{convertValue(e,t="none"){switch(Ri(e)){case 0:return null;case 1:return e.booleanValue;case 2:return at(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ki(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw me(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return ps(e,((o,u)=>{s[o]=this.convertValue(u,t)})),s}convertVectorValue(e){var s,o,u;const t=(u=(o=(s=e.fields)==null?void 0:s[Qu].arrayValue)==null?void 0:o.values)==null?void 0:u.map((h=>at(h.doubleValue)));return new xn(t)}convertGeoPoint(e){return new nr(at(e.latitude),at(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=gc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(za(e));default:return null}}convertTimestamp(e){const t=Ai(e);return new Xe(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Qe.fromString(e);Ue(hv(s),9688,{name:e});const o=new Ba(s.get(1),s.get(3)),u=new he(s.popFirst(5));return o.isEqual(t)||Or(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */class Gv extends mR{constructor(e){super(),this.firestore=e}convertBytes(e){return new gn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new gt(this.firestore,null,t)}}const _y="@firebase/firestore",vy="4.15.0";/**
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
 */class Qv{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Vf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class gR extends Qv{data(){return super.data()}}/**
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
 */function yR(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new le($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function _R(r,e,t){let s;return s=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,s}class Na{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ls extends Qv{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Fu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Vf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new le($.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ls._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ls._jsonSchemaVersion="firestore/documentSnapshot/1.0",ls._jsonSchema={type:dt("string",ls._jsonSchemaVersion),bundleSource:dt("string","DocumentSnapshot"),bundleName:dt("string"),bundle:dt("string")};class Fu extends ls{data(e={}){return super.data(e)}}class go{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Na(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Fu(this._firestore,this._userDataWriter,s.key,s,new Na(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new le($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const g=new Fu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Na(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const g=new Fu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Na(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,E=-1;return m.type!==0&&(_=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),E=h.indexOf(m.doc.key)),{type:vR(m.type),doc:g,oldIndex:_,newIndex:E}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new le($.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=go._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=rf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function vR(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me(61501,{type:r})}}/**
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
 */go._jsonSchemaVersion="firestore/querySnapshot/1.0",go._jsonSchema={type:dt("string",go._jsonSchemaVersion),bundleSource:dt("string","QuerySnapshot"),bundleName:dt("string"),bundle:dt("string")};/**
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
 */function wR(r){r=Ii(r,gt);const e=Ii(r.firestore,sl),t=xf(e);return Yk(t,r._key).then((s=>IR(e,r,s)))}function ER(r){r=Ii(r,Rc);const e=Ii(r.firestore,sl),t=xf(e),s=new Gv(e);return yR(r._query),Zk(t,r._query).then((o=>new go(e,s,r,o)))}function ac(r,e,t){r=Ii(r,gt);const s=Ii(r.firestore,sl),o=_R(r.converter,e,t),u=cR(s);return Xv(s,[hR(u,"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,er.none())])}function TR(r){return Xv(Ii(r.firestore,sl),[new pf(r._key,er.none())])}function Xv(r,e){const t=xf(r);return eR(t,e)}function IR(r,e,t){const s=t.docs.get(e._key),o=new Gv(r);return new ls(r,o,e._key,s,new Na(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){eS(So),Ti(new xr("firestore",((s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new sl(new rS(s.getProvider("auth-internal")),new oS(h,s.getProvider("app-check-internal")),IS(h,o),h);return u={useFetchStreams:t,...u},m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),Pr(_y,vy,e),Pr(_y,vy,"esm2020")})();var SR="firebase",AR="12.14.0";/**
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
 */Pr(SR,AR,"app");/**
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
 */const kR=new Map,RR={activated:!1,tokenObservers:[]};function Dn(r){return kR.get(r)||{...RR}}const wy={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:960*1e3};/**
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
 */class CR{constructor(e,t,s,o,u){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=s,this.lowerBound=o,this.upperBound=u,this.pending=null,this.nextErrorWaitInterval=o,o>u)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new md,this.pending.promise.catch(t=>{}),await PR(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new md,this.pending.promise.catch(t=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function PR(r){return new Promise(e=>{setTimeout(e,r)})}/**
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
 */const NR={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},lc=new Io("appCheck","AppCheck",NR);function Jv(r){if(!Dn(r).activated)throw lc.create("use-before-activation",{appName:r.name})}/**
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
 */const xR="firebase-app-check-database",DR=1,Ud="firebase-app-check-store";let Cu=null;function VR(){return Cu||(Cu=new Promise((r,e)=>{try{const t=indexedDB.open(xR,DR);t.onsuccess=s=>{r(s.target.result)},t.onerror=s=>{var o;e(lc.create("storage-open",{originalErrorMessage:(o=s.target.error)==null?void 0:o.message}))},t.onupgradeneeded=s=>{const o=s.target.result;switch(s.oldVersion){case 0:o.createObjectStore(Ud,{keyPath:"compositeKey"})}}}catch(t){e(lc.create("storage-open",{originalErrorMessage:t==null?void 0:t.message}))}}),Cu)}function OR(r,e){return LR(MR(r),e)}async function LR(r,e){const s=(await VR()).transaction(Ud,"readwrite"),u=s.objectStore(Ud).put({compositeKey:r,value:e});return new Promise((h,m)=>{u.onsuccess=g=>{h()},s.onerror=g=>{var _;m(lc.create("storage-set",{originalErrorMessage:(_=g.target.error)==null?void 0:_.message}))}})}function MR(r){return`${r.options.appId}-${r.name}`}/**
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
 */const jd=new cc("@firebase/app-check");function Ey(r,e){return xy()?OR(r,e).catch(t=>{jd.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}/**
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
 */const bR={error:"UNKNOWN_ERROR"};function FR(r){return $d.encodeString(JSON.stringify(r),!1)}async function zd(r,e=!1,t=!1){const s=r.app;Jv(s);const o=Dn(s);let u=o.token,h;if(u&&!xa(u)&&(o.token=void 0,u=void 0),!u){const _=await o.cachedTokenPromise;_&&(xa(_)?u=_:await Ey(s,void 0))}if(!e&&u&&xa(u))return{token:u.token};let m=!1;try{o.exchangeTokenPromise||(o.exchangeTokenPromise=o.provider.getToken().finally(()=>{o.exchangeTokenPromise=void 0}),m=!0),u=await Dn(s).exchangeTokenPromise}catch(_){_.code==="appCheck/throttled"||_.code==="appCheck/initial-throttle"?jd.warn(_.message):t&&jd.error(_),h=_}let g;return u?h?xa(u)?g={token:u.token,internalError:h}:g=Iy(h):(g={token:u.token},o.token=u,await Ey(s,u)):g=Iy(h),m&&BR(s,g),g}async function UR(r){const e=r.app;Jv(e);const{provider:t}=Dn(e);{const{token:s}=await t.getToken(!0);return{token:s}}}function jR(r,e,t,s){const{app:o}=r,u=Dn(o),h={next:t,error:s,type:e};if(u.tokenObservers=[...u.tokenObservers,h],u.token&&xa(u.token)){const m=u.token;Promise.resolve().then(()=>{t({token:m.token}),Ty(r)}).catch(()=>{})}u.cachedTokenPromise.then(()=>Ty(r))}function Yv(r,e){const t=Dn(r),s=t.tokenObservers.filter(o=>o.next!==e);s.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=s}function Ty(r){const{app:e}=r,t=Dn(e);let s=t.tokenRefresher;s||(s=zR(r),t.tokenRefresher=s),!s.isRunning()&&t.isTokenAutoRefreshEnabled&&s.start()}function zR(r){const{app:e}=r;return new CR(async()=>{const t=Dn(e);let s;if(t.token?s=await zd(r,!0):s=await zd(r),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const t=Dn(e);if(t.token){let s=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5;const o=t.token.expireTimeMillis-300*1e3;return s=Math.min(s,o),Math.max(0,s-Date.now())}else return 0},wy.RETRIAL_MIN_WAIT,wy.RETRIAL_MAX_WAIT)}function BR(r,e){const t=Dn(r).tokenObservers;for(const s of t)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function xa(r){return r.expireTimeMillis-Date.now()>0}function Iy(r){return{token:FR(bR),error:r}}/**
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
 */class $R{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=Dn(this.app);for(const t of e)Yv(this.app,t.next);return Promise.resolve()}}function HR(r,e){return new $R(r,e)}function qR(r){return{getToken:e=>zd(r,e),getLimitedUseToken:()=>UR(r),addTokenListener:e=>jR(r,"INTERNAL",e),removeTokenListener:e=>Yv(r.app,e)}}const WR="@firebase/app-check",KR="0.11.4",GR="app-check",Sy="app-check-internal";function QR(){Ti(new xr(GR,r=>{const e=r.getProvider("app").getImmediate(),t=r.getProvider("heartbeat");return HR(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((r,e,t)=>{r.getProvider(Sy).initialize()})),Ti(new xr(Sy,r=>{const e=r.getProvider("app-check").getImmediate();return qR(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Pr(WR,KR)}QR();const XR={apiKey:"",authDomain:"lista-de-compras-pwa-64fac.firebaseapp.com",projectId:"lista-de-compras-pwa-64fac",storageBucket:"lista-de-compras-pwa-64fac.appspot.com",messagingSenderId:"922020197463",appId:"1:922020197463:web:41e9aa3c04bf76c7941f12"},Zv=Ly(XR),ba=YI(Zv);UT(ba,a_);const ew=new Ar;ew.setCustomParameters({prompt:"select_account"});const fs=sR(Zv);function JR(){const[r,e]=qe.useState(null),[t,s]=qe.useState(!0),o=async m=>{if(m)try{await ac(To(fs,"users",m.uid),{nome:m.displayName||"Usuário",email:m.email||"",foto:m.photoURL||"",ultimoLogin:new Date().toISOString()},{merge:!0})}catch(g){console.error("Erro ao salvar usuário:",g)}};return qe.useEffect(()=>{let m=!0;const g=BT(ba,_=>{if(!m)return;e(_||null),(async()=>{if(!_){s(!1);return}try{await o(_)}catch(I){console.error(I)}m&&s(!1)})()});return()=>{m=!1,g()}},[]),{usuario:r,loading:t,entrarComGoogle:async()=>{try{await aI(ba,ew)}catch(m){console.error("Erro login Google:",m)}},sair:async()=>{try{await i_(ba)}catch(m){console.error("Erro logout:",m)}}}}function YR(r){const[e,t]=qe.useState(null),[s,o]=qe.useState(!0),u=r==null?void 0:r.uid;return qe.useEffect(()=>{let h=!0;if(!u){t({modo:"planejamento",estabelecimento:"",tema:"claro",itens:[]}),o(!1);return}return(async()=>{try{const g=To(fs,"users",u,"lista","dados"),_=await wR(g);if(!h)return;if(_.exists()){const E=_.data();t({modo:String(E.modo||"planejamento").toLowerCase(),estabelecimento:E.estabelecimento||"",tema:E.tema||"claro",itens:(E.itens||[]).map(I=>({...I,precoUnitario:Number(I.precoUnitario||0),quantidade:Number(I.quantidade||1)}))})}else t({modo:"planejamento",estabelecimento:"",tema:"claro",itens:[]})}catch(g){if(console.error(g),!h)return;t({modo:"planejamento",estabelecimento:"",tema:"claro",itens:[]})}finally{h&&o(!1)}})(),()=>{h=!1}},[u]),qe.useEffect(()=>{if(!u||!e||s)return;const h=setTimeout(async()=>{try{await ac(To(fs,"users",u,"lista","dados"),{modo:e.modo,estabelecimento:e.estabelecimento,itens:e.itens,tema:e.tema||"claro"})}catch(m){console.error(m)}},400);return()=>clearTimeout(h)},[e,u,s]),{lista:e,setLista:t,loading:s}}function ZR(r){const[e,t]=qe.useState([]),[s,o]=qe.useState(!0);return qe.useEffect(()=>{if(!(r!=null&&r.uid))return;(async()=>{try{o(!0);const g=iR(fs,"users",r.uid,"compras"),E=(await ER(g)).docs.map(I=>({id:I.id,...I.data()}));E.sort((I,L)=>new Date(L.data)-new Date(I.data)),t(E)}catch(g){console.error("Erro histórico:",g)}finally{o(!1)}})()},[r==null?void 0:r.uid]),{historico:e,carregando:s,deletarCompra:async m=>{try{await TR(To(fs,"users",r.uid,"compras",m)),t(g=>g.filter(_=>_.id!==m))}catch(g){console.error("Erro ao deletar compra:",g)}},adicionarCompraLocal:m=>{t(g=>[m,...g].sort((_,E)=>new Date(E.data)-new Date(_.data)))}}}function e1(){qe.useEffect(()=>{const r=async()=>{try{const t=await fetch("/Lista-de-compras-PWA/version.json",{cache:"no-store"});if(!t.ok)return;const s=await t.json(),o="2.0.0";if(s.version!==o){if(console.log(`🚀 Nova versão detectada: ${o} → ${s.version}`),"caches"in window){const u=await caches.keys();await Promise.all(u.map(h=>caches.delete(h))),console.log("✅ Cache limpo")}if("serviceWorker"in navigator){const u=await navigator.serviceWorker.getRegistrations();await Promise.all(u.map(h=>h.unregister())),console.log("✅ Service Workers desregistrados")}window.location.reload(!0)}}catch(t){console.error("Erro ao verificar versão:",t)}};r();const e=setInterval(r,300*1e3);return()=>clearInterval(e)},[])}/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),n1=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),Ay=r=>{const e=n1(r);return e.charAt(0).toUpperCase()+e.slice(1)},tw=(...r)=>r.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim(),r1=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var i1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=qe.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:u,iconNode:h,...m},g)=>qe.createElement("svg",{ref:g,...i1,width:e,height:e,stroke:r,strokeWidth:s?Number(t)*24/Number(e):t,className:tw("lucide",o),...!u&&!r1(m)&&{"aria-hidden":"true"},...m},[...h.map(([_,E])=>qe.createElement(_,E)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=(r,e)=>{const t=qe.forwardRef(({className:s,...o},u)=>qe.createElement(s1,{ref:u,iconNode:e,className:tw(`lucide-${t1(Ay(r))}`,`lucide-${r}`,s),...o}));return t.displayName=Ay(r),t};/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],a1=br("circle-check-big",o1);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],u1=br("clock",l1);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],h1=br("dollar-sign",c1);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=[["rect",{x:"3",y:"5",width:"6",height:"6",rx:"1",key:"1defrl"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]],f1=br("list-todo",d1);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],m1=br("log-out",p1);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],y1=br("package",g1);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],nw=br("shopping-cart",_1);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],Cc=br("trash-2",v1);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],E1=br("user",w1);function T1(){const r="2.0.0",e=new Date("2026-06-09T00:42:19.764Z").toLocaleDateString("pt-BR",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"});return j.jsxs("div",{title:`Versão ${r} - ${e}`,className:"text-xs text-gray-400 dark:text-gray-500 cursor-help",children:["v",r]})}function I1({estabelecimento:r,aoDefinirEstabelecimento:e,aoLimpar:t,usuario:s,aoLogout:o,tema:u,aoDefinirTema:h}){const m=u||"claro";return j.jsx("header",{className:"w-full bg-emerald-600 text-white shadow-lg",children:j.jsxs("div",{className:"w-full px-4 pt-6 pb-6",children:[j.jsxs("div",{className:"mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",children:[j.jsxs("div",{className:"flex items-center gap-3",children:[j.jsx("div",{className:"rounded-2xl bg-emerald-700 p-3 shadow-md",children:j.jsx(nw,{size:30})}),j.jsxs("div",{children:[j.jsx("h1",{className:"text-3xl font-bold leading-tight",children:"Lista de Compras"}),j.jsx("p",{className:"text-sm text-emerald-100",children:"Organize suas compras"})]})]}),j.jsxs("div",{className:"flex items-center justify-end gap-2 sm:gap-3 sm:ml-auto w-full sm:w-auto",children:[j.jsx("button",{onClick:()=>{const g=m==="escuro"?"claro":"escuro";h==null||h(g)},className:"rounded-xl bg-emerald-700 p-3 transition hover:bg-emerald-800",title:"Tema",children:m==="escuro"?"☀️":"🌙"}),j.jsx("div",{className:"h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center overflow-hidden rounded-full border-2 border-white bg-emerald-700",children:s!=null&&s.photoURL?j.jsx("img",{src:s.photoURL,alt:"Usuário",className:"h-full w-full object-cover",referrerPolicy:"no-referrer"}):j.jsx(E1,{size:18})}),j.jsx("button",{onClick:o,className:"rounded-xl bg-emerald-700 p-3 transition hover:bg-emerald-800",title:"Sair",children:j.jsx(m1,{size:18})}),j.jsx("button",{onClick:t,className:"rounded-xl bg-emerald-700 p-3 transition hover:bg-emerald-800",title:"Limpar lista",children:j.jsx(Cc,{size:18})})]})]}),j.jsxs("div",{className:"flex gap-3 items-end",children:[j.jsx("input",{type:"text",value:r,onChange:g=>e(g.target.value),placeholder:"Nome do mercado...",className:`
              flex-1 rounded-2xl border border-emerald-500
              bg-emerald-700 px-4 py-4 text-white
              placeholder-emerald-200
              focus:outline-none focus:ring-2 focus:ring-emerald-300
            `}),j.jsx(T1,{})]})]})})}function S1({modo:r,aoAlternar:e}){return j.jsx("div",{className:"rounded-xl shadow-md p-2 mb-4 bg-white dark:bg-slate-800",children:j.jsxs("div",{className:"flex gap-2",children:[j.jsxs("button",{onClick:()=>e("planejamento"),className:`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${r==="planejamento"?"bg-emerald-500 text-white shadow-md":"bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-slate-600"}`,children:[j.jsx(f1,{size:20}),j.jsx("span",{children:"Planejamento"})]}),j.jsxs("button",{onClick:()=>e("feira"),className:`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${r==="feira"?"bg-emerald-500 text-white shadow-md":"bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-slate-600"}`,children:[j.jsx(nw,{size:20}),j.jsx("span",{children:"Na Feira"})]})]})})}function A1({aoAdicionar:r}){const[e,t]=qe.useState(""),[s,o]=qe.useState(1);function u(h){h.preventDefault();const m=e.trim().slice(0,80),g=Math.max(1,Math.min(999,Number(s)||1));m&&(r({nome:m,quantidade:g}),t(""),o(1))}return j.jsxs("form",{onSubmit:u,className:"mb-4 flex gap-2",children:[j.jsx("input",{type:"text",maxLength:80,value:e,onChange:h=>t(h.target.value),placeholder:"Produto",className:"flex-1 rounded border p-2"}),j.jsx("input",{type:"number",min:"1",max:"999",value:s,onChange:h=>o(h.target.value),className:"w-20 rounded border p-2"}),j.jsx("button",{className:"rounded bg-green-500 px-4 text-white",children:"+"})]})}function k1({item:r={},onAtualizar:e,onRemover:t,onToggleComprado:s}){const[o,u]=qe.useState((r==null?void 0:r.quantidade)||1),[h,m]=qe.useState("");qe.useEffect(()=>{u((r==null?void 0:r.quantidade)||1),m((r==null?void 0:r.precoUnitario)!=null?String(Math.round(r.precoUnitario*100)):"")},[r]);const g=J=>{const X=J.target.value.replace(/\D/g,"");m(X)},_=()=>{const J=Number(h||0);e==null||e((r==null?void 0:r.id)||(r==null?void 0:r._id),{precoUnitario:J/100})},E=J=>{const X=Number(J.target.value);u(X),e==null||e((r==null?void 0:r.id)||(r==null?void 0:r._id),{quantidade:X||1})},I=Number(h||0)/100,z=(o*I).toLocaleString("pt-BR",{minimumFractionDigits:2});return j.jsx("div",{className:"rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 shadow-sm",children:j.jsxs("div",{className:"flex flex-wrap items-center gap-3 md:flex-nowrap",children:[j.jsx("input",{type:"checkbox",checked:r==null?void 0:r.comprado,onChange:()=>s==null?void 0:s((r==null?void 0:r.id)||(r==null?void 0:r._id)),className:"h-5 w-5 accent-emerald-500"}),j.jsx("span",{className:"flex-1 font-medium text-gray-800 dark:text-gray-100",children:r==null?void 0:r.nome}),j.jsxs("div",{className:"flex items-center gap-2",children:[j.jsx("input",{type:"number",min:"1",value:o,onChange:E,className:"w-16 rounded border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-2 py-1 text-center text-gray-900 dark:text-white"}),j.jsx("span",{children:"×"}),j.jsx("span",{children:"R$"}),j.jsx("input",{type:"text",inputMode:"numeric",value:h?(Number(h)/100).toLocaleString("pt-BR",{minimumFractionDigits:2}):"",onChange:g,onBlur:_,className:"w-24 rounded border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-2 py-1 text-right"})]}),j.jsxs("div",{className:"min-w-[110px] text-right",children:[j.jsx("span",{className:"text-xs text-gray-500",children:"Total"}),j.jsxs("span",{className:"font-bold",children:["R$ ",z]})]}),j.jsx("button",{onClick:()=>t==null?void 0:t((r==null?void 0:r.id)||(r==null?void 0:r._id)),className:"text-red-500 p-2",children:j.jsx(Cc,{size:18})})]})})}function R1({itens:r,modo:e,aoRemover:t,aoAtualizar:s,aoAlternarComprado:o}){return r.length?j.jsx("div",{className:"space-y-4",children:r.map(u=>j.jsx("div",{children:e==="feira"?j.jsx(k1,{item:u,onAtualizar:s,onRemover:t,onToggleComprado:o}):j.jsx("div",{className:"rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 shadow-sm",children:j.jsxs("div",{className:"flex items-center justify-between gap-3",children:[j.jsxs("div",{className:"flex flex-1 items-center gap-3",children:[j.jsxs("div",{className:"flex items-center gap-3",children:[j.jsx("input",{type:"checkbox",checked:u.comprado,onChange:()=>o(u.id),className:"h-5 w-5 accent-emerald-500"}),j.jsx("p",{className:`font-medium ${u.comprado?"text-gray-400 dark:text-gray-500 line-through":"text-gray-800 dark:text-gray-100"}`,children:u.nome})]}),j.jsxs("div",{className:"ml-6 flex items-center gap-2",children:[j.jsx("label",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Quantidade:"}),j.jsx("input",{type:"text",inputMode:"numeric",value:u.quantidade,onChange:h=>{const m=h.target.value;(m===""||/^\d+$/.test(m))&&s(u.id,{quantidade:m===""?"":Number(m)})},onBlur:h=>{const m=Number(h.target.value);(!m||m<1)&&s(u.id,{quantidade:1})},className:"w-20 rounded border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-2 py-1 text-center text-gray-900 dark:text-white focus:border-emerald-500 focus:outline-none"})]})]}),j.jsx("button",{onClick:()=>t(u.id),className:"rounded-lg p-2 text-red-500 transition-colors hover:bg-red-50 dark:hover:bg-slate-700 hover:text-red-700",title:"Remover item",children:j.jsx(Cc,{size:18})})]})})},u.id))}):j.jsx("div",{className:"rounded-lg bg-white dark:bg-slate-800 p-6 text-center shadow",children:j.jsx("p",{className:"text-gray-500 dark:text-gray-300",children:"Nenhum item adicionado ainda."})})}function C1(r){return Number(r||0).toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}function P1({totais:r,modo:e}){const{total:t=0,quantidadeItens:s=0,itensComprados:o=0}=r||{},u=s>0?o/s*100:0;return j.jsxs("div",{className:"rounded-xl shadow-md p-4 mt-4 bg-white dark:bg-slate-800",children:[j.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-5 gap-4",children:[j.jsxs("div",{className:"rounded-lg p-3 col-span-2 md:col-span-1 bg-emerald-50 dark:bg-slate-700",children:[j.jsxs("div",{className:"flex items-center gap-2 text-emerald-600 dark:text-emerald-300 mb-1",children:[j.jsx(h1,{size:18}),j.jsx("span",{className:"text-sm font-medium",children:"Total"})]}),j.jsx("p",{className:"text-2xl font-bold text-emerald-700 dark:text-emerald-200",children:C1(t)}),j.jsx("p",{className:"text-xs text-emerald-500 dark:text-emerald-300 mt-1",children:"Valor total da compra"})]}),j.jsxs("div",{className:"rounded-lg p-3 bg-blue-50 dark:bg-slate-700",children:[j.jsxs("div",{className:"flex items-center gap-2 text-blue-600 dark:text-blue-300 mb-1",children:[j.jsx(y1,{size:18}),j.jsx("span",{className:"text-sm font-medium",children:"Itens"})]}),j.jsx("p",{className:"text-2xl font-bold text-blue-700 dark:text-blue-200",children:s})]}),j.jsxs("div",{className:"rounded-lg p-3 bg-green-50 dark:bg-slate-700",children:[j.jsxs("div",{className:"flex items-center gap-2 text-green-600 dark:text-green-300 mb-1",children:[j.jsx(a1,{size:18}),j.jsx("span",{className:"text-sm font-medium",children:"Comprados"})]}),j.jsx("p",{className:"text-2xl font-bold text-green-700 dark:text-green-200",children:o})]}),j.jsxs("div",{className:"rounded-lg p-3 bg-orange-50 dark:bg-slate-700",children:[j.jsxs("div",{className:"flex items-center gap-2 text-orange-600 dark:text-orange-300 mb-1",children:[j.jsx(u1,{size:18}),j.jsx("span",{className:"text-sm font-medium",children:"Restantes"})]}),j.jsx("p",{className:"text-2xl font-bold text-orange-700 dark:text-orange-200",children:s-o})]})]}),s>0&&j.jsxs("div",{className:"mt-4",children:[j.jsxs("div",{className:"flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2",children:[j.jsx("span",{children:"Progresso"}),j.jsxs("span",{children:[Math.round(u),"%"]})]}),j.jsx("div",{className:"w-full bg-gray-200 dark:bg-slate-700 rounded-full h-3",children:j.jsx("div",{className:"bg-emerald-500 h-3 rounded-full transition-all duration-500",style:{width:`${u}%`}})}),j.jsxs("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-2 text-center",children:[o," de ",s," itens"]})]})]})}function N1({historico:r,carregando:e,deletarCompra:t}){const[s,o]=qe.useState(null);return e?j.jsx("div",{className:"mt-6 text-center text-gray-600 dark:text-gray-300",children:"Carregando histórico..."}):r!=null&&r.length?j.jsx("div",{className:"mt-6 space-y-4",children:r.map(u=>{var m;const h=Number(u.total||0);return j.jsxs("div",{className:"rounded-xl bg-white dark:bg-slate-800 p-4 shadow",children:[j.jsxs("div",{className:"flex items-start justify-between",children:[j.jsxs("div",{className:"flex-1 cursor-pointer",onClick:()=>o(s===u.id?null:u.id),children:[j.jsx("h3",{className:"font-bold text-gray-900 dark:text-white",children:u.estabelecimento}),j.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:new Date(u.data).toLocaleDateString("pt-BR")}),j.jsxs("p",{className:"font-bold text-green-600 dark:text-green-400",children:["R$ ",h.toFixed(2)]}),j.jsx("p",{className:"mt-1 text-xs text-gray-400 dark:text-gray-500",children:"Clique para ver os detalhes"})]}),j.jsx("button",{onClick:()=>t(u.id),className:"text-red-500 hover:text-red-700",children:j.jsx(Cc,{size:18})})]}),s===u.id&&j.jsxs("div",{className:"mt-3 space-y-2 border-t border-gray-200 dark:border-slate-700 pt-3",children:[j.jsxs("div",{className:"flex justify-between text-xs text-gray-500 dark:text-gray-400",children:[j.jsx("span",{children:"Item"}),j.jsx("span",{children:"Total"})]}),(m=u.itens)==null?void 0:m.map(g=>{const _=Number(g.quantidade||0)*Number(g.precoUnitario||0);return j.jsxs("div",{className:"flex justify-between text-sm text-gray-700 dark:text-gray-200",children:[j.jsxs("span",{children:[g.quantidade,"x ",g.nome]}),j.jsxs("span",{children:["R$ ",_.toFixed(2)]})]},g.id)}),j.jsxs("div",{className:"flex justify-between border-t border-gray-200 dark:border-slate-700 pt-2 font-bold text-gray-900 dark:text-white",children:[j.jsx("span",{children:"Total"}),j.jsxs("span",{children:["R$ ",h.toFixed(2)]})]})]})]},u.id)})}):j.jsx("div",{className:"mt-6 text-center text-gray-500 dark:text-gray-400",children:"Nenhuma compra encontrada"})}function x1(){e1();const{usuario:r,loading:e}=JR(),{lista:t,setLista:s}=YR(r),{historico:o,carregando:u,deletarCompra:h}=ZR(r),[m,g]=qe.useState("compras"),[_,E]=qe.useState("claro"),I=(t==null?void 0:t.itens)||[];qe.useEffect(()=>{t!=null&&t.tema&&E(t.tema)},[t==null?void 0:t.tema]),qe.useEffect(()=>{document.documentElement.classList.toggle("dark",_==="escuro")},[_]);const L=async()=>{await i_(ba)},z=async()=>{var Me;if(!(r!=null&&r.uid)||!((Me=t==null?void 0:t.itens)!=null&&Me.length))return;const re=t.itens||[],te=re.reduce((ke,C)=>ke+(C.quantidade||0)*(C.precoUnitario||0),0),pe=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID()||Math.random().toString(36).substring(2),Ne={id:pe,estabelecimento:(t==null?void 0:t.estabelecimento)||"",itens:re,total:te,data:new Date().toISOString()};try{await ac(To(fs,"users",r.uid,"compras",pe),Ne),await ac(To(fs,"users",r.uid,"lista","dados"),{modo:"planejamento",estabelecimento:"",tema:_,itens:[]}),s({modo:"planejamento",estabelecimento:"",tema:_,itens:[]}),g("historico")}catch(ke){console.error("Erro finalizar compra:",ke)}},J=re=>{s(te=>te&&{...te,itens:(te.itens||[]).filter(pe=>pe.id!==re)})},X=(re,te)=>{s(pe=>pe&&{...pe,itens:(pe.itens||[]).map(Ne=>Ne.id===re?{...Ne,...te}:Ne)})},G=re=>{s(te=>te&&{...te,itens:(te.itens||[]).map(pe=>pe.id===re?{...pe,comprado:!pe.comprado}:pe)})};return e?j.jsx("div",{className:"flex min-h-screen items-center justify-center",children:j.jsx("p",{children:"Carregando..."})}):!r||!t?j.jsx("div",{className:"flex min-h-screen items-center justify-center",children:j.jsx("p",{children:"Carregando lista..."})}):j.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-slate-900",children:[j.jsx(I1,{usuario:r,estabelecimento:t.estabelecimento||"",aoDefinirEstabelecimento:re=>s(te=>te&&{...te,estabelecimento:re}),aoLimpar:()=>s(re=>re&&{...re,itens:[]}),aoLogout:L,tema:_,aoDefinirTema:re=>{E(re),s(te=>te&&{...te,tema:re})}}),j.jsxs("main",{className:"mx-auto max-w-4xl space-y-6 px-4 py-6",children:[j.jsxs("div",{className:"flex gap-2",children:[j.jsx("button",{onClick:()=>g("compras"),className:`flex-1 rounded-lg p-3 font-semibold ${m==="compras"?"bg-emerald-600 text-white":"bg-white text-gray-700 dark:bg-slate-800 dark:text-white"}`,children:"Compras"}),j.jsx("button",{onClick:()=>g("historico"),className:`flex-1 rounded-lg p-3 font-semibold ${m==="historico"?"bg-emerald-600 text-white":"bg-white text-gray-700 dark:bg-slate-800 dark:text-white"}`,children:"Histórico"})]}),m==="compras"&&j.jsxs(j.Fragment,{children:[j.jsx(S1,{modo:t.modo,aoAlternar:re=>s(te=>te&&{...te,modo:re})}),j.jsx(A1,{aoAdicionar:re=>s(te=>te&&{...te,itens:[...te.itens,{id:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID()||Math.random().toString(36).substring(2),nome:re.nome,quantidade:re.quantidade,precoUnitario:0,comprado:!1}]})}),j.jsx(R1,{itens:I,modo:t.modo,aoRemover:J,aoAtualizar:X,aoAlternarComprado:G}),j.jsx(P1,{totais:{total:I.reduce((re,te)=>re+(te.quantidade||0)*(te.precoUnitario||0),0),quantidadeItens:I.length,itensComprados:I.filter(re=>re.comprado).length}}),t.modo==="feira"&&I.length>0&&j.jsx("button",{onClick:z,className:"w-full rounded-lg bg-emerald-600 p-3 text-white font-semibold",children:"Finalizar compra"})]}),m==="historico"&&j.jsx(N1,{historico:o,carregando:u,deletarCompra:h})]})]})}const rw=document.getElementById("root");if(!rw)throw new Error("Elemento #root não encontrado no index.html");const D1=wE.createRoot(rw);D1.render(j.jsx(x1,{}));
