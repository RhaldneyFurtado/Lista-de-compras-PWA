(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function zE(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var zh={exports:{}},Ta={},Bh={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var km;function BE(){if(km)return Se;km=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),A=Symbol.iterator;function b(D){return D===null||typeof D!="object"?null:(D=A&&D[A]||D["@@iterator"],typeof D=="function"?D:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z=Object.assign,Y={};function G(D,H,we){this.props=D,this.context=H,this.refs=Y,this.updater=we||z}G.prototype.isReactComponent={},G.prototype.setState=function(D,H){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,H,"setState")},G.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function Ee(){}Ee.prototype=G.prototype;function ie(D,H,we){this.props=D,this.context=H,this.refs=Y,this.updater=we||z}var ue=ie.prototype=new Ee;ue.constructor=ie,Z(ue,G.prototype),ue.isPureReactComponent=!0;var Ie=Array.isArray,De=Object.prototype.hasOwnProperty,Ne={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function I(D,H,we){var Te,Ae={},Re=null,Fe=null;if(H!=null)for(Te in H.ref!==void 0&&(Fe=H.ref),H.key!==void 0&&(Re=""+H.key),H)De.call(H,Te)&&!C.hasOwnProperty(Te)&&(Ae[Te]=H[Te]);var Oe=arguments.length-2;if(Oe===1)Ae.children=we;else if(1<Oe){for(var ze=Array(Oe),jt=0;jt<Oe;jt++)ze[jt]=arguments[jt+2];Ae.children=ze}if(D&&D.defaultProps)for(Te in Oe=D.defaultProps,Oe)Ae[Te]===void 0&&(Ae[Te]=Oe[Te]);return{$$typeof:i,type:D,key:Re,ref:Fe,props:Ae,_owner:Ne.current}}function R(D,H){return{$$typeof:i,type:D.type,key:H,ref:D.ref,props:D.props,_owner:D._owner}}function x(D){return typeof D=="object"&&D!==null&&D.$$typeof===i}function P(D){var H={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(we){return H[we]})}var V=/\/+/g;function S(D,H){return typeof D=="object"&&D!==null&&D.key!=null?P(""+D.key):H.toString(36)}function $e(D,H,we,Te,Ae){var Re=typeof D;(Re==="undefined"||Re==="boolean")&&(D=null);var Fe=!1;if(D===null)Fe=!0;else switch(Re){case"string":case"number":Fe=!0;break;case"object":switch(D.$$typeof){case i:case e:Fe=!0}}if(Fe)return Fe=D,Ae=Ae(Fe),D=Te===""?"."+S(Fe,0):Te,Ie(Ae)?(we="",D!=null&&(we=D.replace(V,"$&/")+"/"),$e(Ae,H,we,"",function(jt){return jt})):Ae!=null&&(x(Ae)&&(Ae=R(Ae,we+(!Ae.key||Fe&&Fe.key===Ae.key?"":(""+Ae.key).replace(V,"$&/")+"/")+D)),H.push(Ae)),1;if(Fe=0,Te=Te===""?".":Te+":",Ie(D))for(var Oe=0;Oe<D.length;Oe++){Re=D[Oe];var ze=Te+S(Re,Oe);Fe+=$e(Re,H,we,ze,Ae)}else if(ze=b(D),typeof ze=="function")for(D=ze.call(D),Oe=0;!(Re=D.next()).done;)Re=Re.value,ze=Te+S(Re,Oe++),Fe+=$e(Re,H,we,ze,Ae);else if(Re==="object")throw H=String(D),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return Fe}function _t(D,H,we){if(D==null)return D;var Te=[],Ae=0;return $e(D,Te,"","",function(Re){return H.call(we,Re,Ae++)}),Te}function Nt(D){if(D._status===-1){var H=D._result;H=H(),H.then(function(we){(D._status===0||D._status===-1)&&(D._status=1,D._result=we)},function(we){(D._status===0||D._status===-1)&&(D._status=2,D._result=we)}),D._status===-1&&(D._status=0,D._result=H)}if(D._status===1)return D._result.default;throw D._result}var Je={current:null},X={transition:null},ce={ReactCurrentDispatcher:Je,ReactCurrentBatchConfig:X,ReactCurrentOwner:Ne};function ne(){throw Error("act(...) is not supported in production builds of React.")}return Se.Children={map:_t,forEach:function(D,H,we){_t(D,function(){H.apply(this,arguments)},we)},count:function(D){var H=0;return _t(D,function(){H++}),H},toArray:function(D){return _t(D,function(H){return H})||[]},only:function(D){if(!x(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Se.Component=G,Se.Fragment=t,Se.Profiler=o,Se.PureComponent=ie,Se.StrictMode=s,Se.Suspense=y,Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,Se.act=ne,Se.cloneElement=function(D,H,we){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var Te=Z({},D.props),Ae=D.key,Re=D.ref,Fe=D._owner;if(H!=null){if(H.ref!==void 0&&(Re=H.ref,Fe=Ne.current),H.key!==void 0&&(Ae=""+H.key),D.type&&D.type.defaultProps)var Oe=D.type.defaultProps;for(ze in H)De.call(H,ze)&&!C.hasOwnProperty(ze)&&(Te[ze]=H[ze]===void 0&&Oe!==void 0?Oe[ze]:H[ze])}var ze=arguments.length-2;if(ze===1)Te.children=we;else if(1<ze){Oe=Array(ze);for(var jt=0;jt<ze;jt++)Oe[jt]=arguments[jt+2];Te.children=Oe}return{$$typeof:i,type:D.type,key:Ae,ref:Re,props:Te,_owner:Fe}},Se.createContext=function(D){return D={$$typeof:h,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:u,_context:D},D.Consumer=D},Se.createElement=I,Se.createFactory=function(D){var H=I.bind(null,D);return H.type=D,H},Se.createRef=function(){return{current:null}},Se.forwardRef=function(D){return{$$typeof:m,render:D}},Se.isValidElement=x,Se.lazy=function(D){return{$$typeof:w,_payload:{_status:-1,_result:D},_init:Nt}},Se.memo=function(D,H){return{$$typeof:v,type:D,compare:H===void 0?null:H}},Se.startTransition=function(D){var H=X.transition;X.transition={};try{D()}finally{X.transition=H}},Se.unstable_act=ne,Se.useCallback=function(D,H){return Je.current.useCallback(D,H)},Se.useContext=function(D){return Je.current.useContext(D)},Se.useDebugValue=function(){},Se.useDeferredValue=function(D){return Je.current.useDeferredValue(D)},Se.useEffect=function(D,H){return Je.current.useEffect(D,H)},Se.useId=function(){return Je.current.useId()},Se.useImperativeHandle=function(D,H,we){return Je.current.useImperativeHandle(D,H,we)},Se.useInsertionEffect=function(D,H){return Je.current.useInsertionEffect(D,H)},Se.useLayoutEffect=function(D,H){return Je.current.useLayoutEffect(D,H)},Se.useMemo=function(D,H){return Je.current.useMemo(D,H)},Se.useReducer=function(D,H,we){return Je.current.useReducer(D,H,we)},Se.useRef=function(D){return Je.current.useRef(D)},Se.useState=function(D){return Je.current.useState(D)},Se.useSyncExternalStore=function(D,H,we){return Je.current.useSyncExternalStore(D,H,we)},Se.useTransition=function(){return Je.current.useTransition()},Se.version="18.3.1",Se}var Cm;function Cd(){return Cm||(Cm=1,Bh.exports=BE()),Bh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pm;function $E(){if(Pm)return Ta;Pm=1;var i=Cd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,y,v){var w,A={},b=null,z=null;v!==void 0&&(b=""+v),y.key!==void 0&&(b=""+y.key),y.ref!==void 0&&(z=y.ref);for(w in y)s.call(y,w)&&!u.hasOwnProperty(w)&&(A[w]=y[w]);if(m&&m.defaultProps)for(w in y=m.defaultProps,y)A[w]===void 0&&(A[w]=y[w]);return{$$typeof:e,type:m,key:b,ref:z,props:A,_owner:o.current}}return Ta.Fragment=t,Ta.jsx=h,Ta.jsxs=h,Ta}var Nm;function HE(){return Nm||(Nm=1,zh.exports=$E()),zh.exports}var j=HE(),Ye=Cd(),mu={},$h={exports:{}},Gt={},Hh={exports:{}},qh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xm;function qE(){return xm||(xm=1,(function(i){function e(X,ce){var ne=X.length;X.push(ce);e:for(;0<ne;){var D=ne-1>>>1,H=X[D];if(0<o(H,ce))X[D]=ce,X[ne]=H,ne=D;else break e}}function t(X){return X.length===0?null:X[0]}function s(X){if(X.length===0)return null;var ce=X[0],ne=X.pop();if(ne!==ce){X[0]=ne;e:for(var D=0,H=X.length,we=H>>>1;D<we;){var Te=2*(D+1)-1,Ae=X[Te],Re=Te+1,Fe=X[Re];if(0>o(Ae,ne))Re<H&&0>o(Fe,Ae)?(X[D]=Fe,X[Re]=ne,D=Re):(X[D]=Ae,X[Te]=ne,D=Te);else if(Re<H&&0>o(Fe,ne))X[D]=Fe,X[Re]=ne,D=Re;else break e}}return ce}function o(X,ce){var ne=X.sortIndex-ce.sortIndex;return ne!==0?ne:X.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var y=[],v=[],w=1,A=null,b=3,z=!1,Z=!1,Y=!1,G=typeof setTimeout=="function"?setTimeout:null,Ee=typeof clearTimeout=="function"?clearTimeout:null,ie=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ue(X){for(var ce=t(v);ce!==null;){if(ce.callback===null)s(v);else if(ce.startTime<=X)s(v),ce.sortIndex=ce.expirationTime,e(y,ce);else break;ce=t(v)}}function Ie(X){if(Y=!1,ue(X),!Z)if(t(y)!==null)Z=!0,Nt(De);else{var ce=t(v);ce!==null&&Je(Ie,ce.startTime-X)}}function De(X,ce){Z=!1,Y&&(Y=!1,Ee(I),I=-1),z=!0;var ne=b;try{for(ue(ce),A=t(y);A!==null&&(!(A.expirationTime>ce)||X&&!P());){var D=A.callback;if(typeof D=="function"){A.callback=null,b=A.priorityLevel;var H=D(A.expirationTime<=ce);ce=i.unstable_now(),typeof H=="function"?A.callback=H:A===t(y)&&s(y),ue(ce)}else s(y);A=t(y)}if(A!==null)var we=!0;else{var Te=t(v);Te!==null&&Je(Ie,Te.startTime-ce),we=!1}return we}finally{A=null,b=ne,z=!1}}var Ne=!1,C=null,I=-1,R=5,x=-1;function P(){return!(i.unstable_now()-x<R)}function V(){if(C!==null){var X=i.unstable_now();x=X;var ce=!0;try{ce=C(!0,X)}finally{ce?S():(Ne=!1,C=null)}}else Ne=!1}var S;if(typeof ie=="function")S=function(){ie(V)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,_t=$e.port2;$e.port1.onmessage=V,S=function(){_t.postMessage(null)}}else S=function(){G(V,0)};function Nt(X){C=X,Ne||(Ne=!0,S())}function Je(X,ce){I=G(function(){X(i.unstable_now())},ce)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(X){X.callback=null},i.unstable_continueExecution=function(){Z||z||(Z=!0,Nt(De))},i.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<X?Math.floor(1e3/X):5},i.unstable_getCurrentPriorityLevel=function(){return b},i.unstable_getFirstCallbackNode=function(){return t(y)},i.unstable_next=function(X){switch(b){case 1:case 2:case 3:var ce=3;break;default:ce=b}var ne=b;b=ce;try{return X()}finally{b=ne}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(X,ce){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var ne=b;b=X;try{return ce()}finally{b=ne}},i.unstable_scheduleCallback=function(X,ce,ne){var D=i.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?D+ne:D):ne=D,X){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=ne+H,X={id:w++,callback:ce,priorityLevel:X,startTime:ne,expirationTime:H,sortIndex:-1},ne>D?(X.sortIndex=ne,e(v,X),t(y)===null&&X===t(v)&&(Y?(Ee(I),I=-1):Y=!0,Je(Ie,ne-D))):(X.sortIndex=H,e(y,X),Z||z||(Z=!0,Nt(De))),X},i.unstable_shouldYield=P,i.unstable_wrapCallback=function(X){var ce=b;return function(){var ne=b;b=ce;try{return X.apply(this,arguments)}finally{b=ne}}}})(qh)),qh}var Dm;function WE(){return Dm||(Dm=1,Hh.exports=qE()),Hh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vm;function KE(){if(Vm)return Gt;Vm=1;var i=Cd(),e=WE();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},A={};function b(n){return y.call(A,n)?!0:y.call(w,n)?!1:v.test(n)?A[n]=!0:(w[n]=!0,!1)}function z(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Z(n,r,a,c){if(r===null||typeof r>"u"||z(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Y(n,r,a,c,d,f,_){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=f,this.removeEmptyString=_}var G={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){G[n]=new Y(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];G[r]=new Y(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){G[n]=new Y(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){G[n]=new Y(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){G[n]=new Y(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){G[n]=new Y(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){G[n]=new Y(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){G[n]=new Y(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){G[n]=new Y(n,5,!1,n.toLowerCase(),null,!1,!1)});var Ee=/[\-:]([a-z])/g;function ie(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(Ee,ie);G[r]=new Y(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(Ee,ie);G[r]=new Y(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(Ee,ie);G[r]=new Y(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){G[n]=new Y(n,1,!1,n.toLowerCase(),null,!1,!1)}),G.xlinkHref=new Y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){G[n]=new Y(n,1,!1,n.toLowerCase(),null,!0,!0)});function ue(n,r,a,c){var d=G.hasOwnProperty(r)?G[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Z(r,a,d,c)&&(a=null),c||d===null?b(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var Ie=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,De=Symbol.for("react.element"),Ne=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),P=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),$e=Symbol.for("react.suspense_list"),_t=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),Je=Symbol.for("react.offscreen"),X=Symbol.iterator;function ce(n){return n===null||typeof n!="object"?null:(n=X&&n[X]||n["@@iterator"],typeof n=="function"?n:null)}var ne=Object.assign,D;function H(n){if(D===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);D=r&&r[1]||""}return`
`+D+n}var we=!1;function Te(n,r){if(!n||we)return"";we=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(F){var c=F}Reflect.construct(n,[],r)}else{try{r.call()}catch(F){c=F}n.call(r.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),f=c.stack.split(`
`),_=d.length-1,T=f.length-1;1<=_&&0<=T&&d[_]!==f[T];)T--;for(;1<=_&&0<=T;_--,T--)if(d[_]!==f[T]){if(_!==1||T!==1)do if(_--,T--,0>T||d[_]!==f[T]){var k=`
`+d[_].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=_&&0<=T);break}}}finally{we=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?H(n):""}function Ae(n){switch(n.tag){case 5:return H(n.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return n=Te(n.type,!1),n;case 11:return n=Te(n.type.render,!1),n;case 1:return n=Te(n.type,!0),n;default:return""}}function Re(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case C:return"Fragment";case Ne:return"Portal";case R:return"Profiler";case I:return"StrictMode";case S:return"Suspense";case $e:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case P:return(n.displayName||"Context")+".Consumer";case x:return(n._context.displayName||"Context")+".Provider";case V:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case _t:return r=n.displayName||null,r!==null?r:Re(n.type)||"Memo";case Nt:r=n._payload,n=n._init;try{return Re(n(r))}catch{}}return null}function Fe(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Re(r);case 8:return r===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Oe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ze(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function jt(n){var r=ze(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,f=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(_){c=""+_,f.call(this,_)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function ms(n){n._valueTracker||(n._valueTracker=jt(n))}function Co(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=ze(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function Vr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function gs(n,r){var a=r.checked;return ne({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function el(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=Oe(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function ys(n,r){r=r.checked,r!=null&&ue(n,"checked",r,!1)}function Ri(n,r){ys(n,r);var a=Oe(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?lt(n,r.type,a):r.hasOwnProperty("defaultValue")&&lt(n,r.type,Oe(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Po(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function lt(n,r,a){(r!=="number"||Vr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var it=Array.isArray;function yn(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Oe(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function No(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function xo(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(it(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Oe(a)}}function tl(n,r){var a=Oe(r.value),c=Oe(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Or(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function Do(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _s(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?Do(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Lr,nl=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Lr=Lr||document.createElement("div"),Lr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Lr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function ki(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var Mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rl=["Webkit","ms","Moz","O"];Object.keys(Mr).forEach(function(n){rl.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Mr[r]=Mr[n]})});function br(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Mr.hasOwnProperty(n)&&Mr[n]?(""+r).trim():r+"px"}function vs(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=br(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Vo=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _n(n,r){if(r){if(Vo[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Es(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fr=null;function ws(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var sr=null,or=null,nt=null;function Oo(n){if(n=aa(n)){if(typeof sr!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Nl(r),sr(n.stateNode,n.type,r))}}function Ur(n){or?nt?nt.push(n):nt=[n]:or=n}function jr(){if(or){var n=or,r=nt;if(nt=or=null,Oo(n),r)for(n=0;n<r.length;n++)Oo(r[n])}}function il(n,r){return n(r)}function sl(){}var Dn=!1;function ol(n,r,a){if(Dn)return n(r,a);Dn=!0;try{return il(n,r,a)}finally{Dn=!1,(or!==null||nt!==null)&&(sl(),jr())}}function Ci(n,r){var a=n.stateNode;if(a===null)return null;var c=Nl(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var zr=!1;if(m)try{var Br={};Object.defineProperty(Br,"passive",{get:function(){zr=!0}}),window.addEventListener("test",Br,Br),window.removeEventListener("test",Br,Br)}catch{zr=!1}function al(n,r,a,c,d,f,_,T,k){var F=Array.prototype.slice.call(arguments,3);try{r.apply(a,F)}catch(W){this.onError(W)}}var ar=!1,Vn=null,Ts=!1,an=null,ll={onError:function(n){ar=!0,Vn=n}};function ul(n,r,a,c,d,f,_,T,k){ar=!1,Vn=null,al.apply(ll,arguments)}function Lo(n,r,a,c,d,f,_,T,k){if(ul.apply(this,arguments),ar){if(ar){var F=Vn;ar=!1,Vn=null}else throw Error(t(198));Ts||(Ts=!0,an=F)}}function vn(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Mo(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function cl(n){if(vn(n)!==n)throw Error(t(188))}function hl(n){var r=n.alternate;if(!r){if(r=vn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var f=d.alternate;if(f===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===a)return cl(d),n;if(f===c)return cl(d),r;f=f.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=f;else{for(var _=!1,T=d.child;T;){if(T===a){_=!0,a=d,c=f;break}if(T===c){_=!0,c=d,a=f;break}T=T.sibling}if(!_){for(T=f.child;T;){if(T===a){_=!0,a=f,c=d;break}if(T===c){_=!0,c=f,a=d;break}T=T.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function dl(n){return n=hl(n),n!==null?Pi(n):null}function Pi(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Pi(n);if(r!==null)return r;n=n.sibling}return null}var bo=e.unstable_scheduleCallback,Is=e.unstable_cancelCallback,Ni=e.unstable_shouldYield,lr=e.unstable_requestPaint,qe=e.unstable_now,_c=e.unstable_getCurrentPriorityLevel,Ss=e.unstable_ImmediatePriority,Fo=e.unstable_UserBlockingPriority,xi=e.unstable_NormalPriority,Uo=e.unstable_LowPriority,As=e.unstable_IdlePriority,Di=null,Jt=null;function fl(n){if(Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(Di,n,void 0,(n.current.flags&128)===128)}catch{}}var Xt=Math.clz32?Math.clz32:Vi,On=Math.log,ln=Math.LN2;function Vi(n){return n>>>=0,n===0?32:31-(On(n)/ln|0)|0}var Ln=64,$r=4194304;function be(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ur(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,f=n.pingedLanes,_=a&268435455;if(_!==0){var T=_&~d;T!==0?c=be(T):(f&=_,f!==0&&(c=be(f)))}else _=a&~d,_!==0?c=be(_):f!==0&&(c=be(f));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,f=r&-r,d>=f||d===16&&(f&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-Xt(r),d=1<<a,c|=n[a],r&=~d;return c}function Oi(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Li(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,f=n.pendingLanes;0<f;){var _=31-Xt(f),T=1<<_,k=d[_];k===-1?((T&a)===0||(T&c)!==0)&&(d[_]=Oi(T,r)):k<=r&&(n.expiredLanes|=T),f&=~T}}function jo(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function zo(){var n=Ln;return Ln<<=1,(Ln&4194240)===0&&(Ln=64),n}function Bo(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Mi(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Xt(r),n[r]=a}function vc(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Xt(a),f=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~f}}function $o(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-Xt(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var xe=0;function Mn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ho,Rs,qo,Wo,Ko,bn=!1,ks=[],Fn=null,Un=null,It=null,bi=new Map,cr=new Map,Zt=[],pl="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hr(n,r){switch(n){case"focusin":case"focusout":Fn=null;break;case"dragenter":case"dragleave":Un=null;break;case"mouseover":case"mouseout":It=null;break;case"pointerover":case"pointerout":bi.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":cr.delete(r.pointerId)}}function En(n,r,a,c,d,f){return n===null||n.nativeEvent!==f?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:f,targetContainers:[d]},r!==null&&(r=aa(r),r!==null&&Rs(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function ml(n,r,a,c,d){switch(r){case"focusin":return Fn=En(Fn,n,r,a,c,d),!0;case"dragenter":return Un=En(Un,n,r,a,c,d),!0;case"mouseover":return It=En(It,n,r,a,c,d),!0;case"pointerover":var f=d.pointerId;return bi.set(f,En(bi.get(f)||null,n,r,a,c,d)),!0;case"gotpointercapture":return f=d.pointerId,cr.set(f,En(cr.get(f)||null,n,r,a,c,d)),!0}return!1}function Cs(n){var r=zi(n.target);if(r!==null){var a=vn(r);if(a!==null){if(r=a.tag,r===13){if(r=Mo(a),r!==null){n.blockedOn=r,Ko(n.priority,function(){qo(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Be(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=Ps(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Fr=c,a.target.dispatchEvent(c),Fr=null}else return r=aa(a),r!==null&&Rs(r),n.blockedOn=a,!1;r.shift()}return!0}function gl(n,r,a){Be(n)&&a.delete(r)}function Ec(){bn=!1,Fn!==null&&Be(Fn)&&(Fn=null),Un!==null&&Be(Un)&&(Un=null),It!==null&&Be(It)&&(It=null),bi.forEach(gl),cr.forEach(gl)}function qr(n,r){n.blockedOn===r&&(n.blockedOn=null,bn||(bn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ec)))}function Wr(n){function r(d){return qr(d,n)}if(0<ks.length){qr(ks[0],n);for(var a=1;a<ks.length;a++){var c=ks[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Fn!==null&&qr(Fn,n),Un!==null&&qr(Un,n),It!==null&&qr(It,n),bi.forEach(r),cr.forEach(r),a=0;a<Zt.length;a++)c=Zt[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Zt.length&&(a=Zt[0],a.blockedOn===null);)Cs(a),a.blockedOn===null&&Zt.shift()}var hr=Ie.ReactCurrentBatchConfig,dr=!0;function jn(n,r,a,c){var d=xe,f=hr.transition;hr.transition=null;try{xe=1,Go(n,r,a,c)}finally{xe=d,hr.transition=f}}function yl(n,r,a,c){var d=xe,f=hr.transition;hr.transition=null;try{xe=4,Go(n,r,a,c)}finally{xe=d,hr.transition=f}}function Go(n,r,a,c){if(dr){var d=Ps(n,r,a,c);if(d===null)xc(n,r,c,zn,a),Hr(n,c);else if(ml(d,n,r,a,c))c.stopPropagation();else if(Hr(n,c),r&4&&-1<pl.indexOf(n)){for(;d!==null;){var f=aa(d);if(f!==null&&Ho(f),f=Ps(n,r,a,c),f===null&&xc(n,r,c,zn,a),f===d)break;d=f}d!==null&&c.stopPropagation()}else xc(n,r,c,null,a)}}var zn=null;function Ps(n,r,a,c){if(zn=null,n=ws(c),n=zi(n),n!==null)if(r=vn(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Mo(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return zn=n,null}function Ns(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_c()){case Ss:return 1;case Fo:return 4;case xi:case Uo:return 16;case As:return 536870912;default:return 16}default:return 16}}var en=null,xs=null,fr=null;function _l(){if(fr)return fr;var n,r=xs,a=r.length,c,d="value"in en?en.value:en.textContent,f=d.length;for(n=0;n<a&&r[n]===d[n];n++);var _=a-n;for(c=1;c<=_&&r[a-c]===d[f-c];c++);return fr=d.slice(n,1<c?1-c:void 0)}function Fi(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Bn(){return!0}function Qo(){return!1}function xt(n){function r(a,c,d,f,_){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Bn:Qo,this.isPropagationStopped=Qo,this}return ne(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Bn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Bn)},persist:function(){},isPersistent:Bn}),r}var $n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ui=xt($n),Kr=ne({},$n,{view:0,detail:0}),Ds=xt(Kr),Vs,Os,tn,ji=ne({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_e,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==tn&&(tn&&n.type==="mousemove"?(Vs=n.screenX-tn.screenX,Os=n.screenY-tn.screenY):Os=Vs=0,tn=n),Vs)},movementY:function(n){return"movementY"in n?n.movementY:Os}}),Yo=xt(ji),vl=ne({},ji,{dataTransfer:0}),El=xt(vl),Ls=ne({},Kr,{relatedTarget:0}),St=xt(Ls),wl=ne({},$n,{animationName:0,elapsedTime:0,pseudoElement:0}),Tl=xt(wl),Gr=ne({},$n,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),l=xt(Gr),p=ne({},$n,{data:0}),g=xt(p),E={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},L={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},U={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function J(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=U[n])?!!r[n]:!1}function _e(){return J}var st=ne({},Kr,{key:function(n){if(n.key){var r=E[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Fi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?L[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_e,charCode:function(n){return n.type==="keypress"?Fi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Fi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),je=xt(st),ut=ne({},ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nn=xt(ut),pr=ne({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_e}),Hn=xt(pr),qn=ne({},$n,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ms=xt(qn),Jo=ne({},ji,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Lv=xt(Jo),Mv=[9,13,27,32],wc=m&&"CompositionEvent"in window,Xo=null;m&&"documentMode"in document&&(Xo=document.documentMode);var bv=m&&"TextEvent"in window&&!Xo,vf=m&&(!wc||Xo&&8<Xo&&11>=Xo),Ef=" ",wf=!1;function Tf(n,r){switch(n){case"keyup":return Mv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function If(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var bs=!1;function Fv(n,r){switch(n){case"compositionend":return If(r);case"keypress":return r.which!==32?null:(wf=!0,Ef);case"textInput":return n=r.data,n===Ef&&wf?null:n;default:return null}}function Uv(n,r){if(bs)return n==="compositionend"||!wc&&Tf(n,r)?(n=_l(),fr=xs=en=null,bs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return vf&&r.locale!=="ko"?null:r.data;default:return null}}var jv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!jv[n.type]:r==="textarea"}function Af(n,r,a,c){Ur(c),r=kl(r,"onChange"),0<r.length&&(a=new Ui("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var Zo=null,ea=null;function zv(n){$f(n,0)}function Il(n){var r=Bs(n);if(Co(r))return n}function Bv(n,r){if(n==="change")return r}var Rf=!1;if(m){var Tc;if(m){var Ic="oninput"in document;if(!Ic){var kf=document.createElement("div");kf.setAttribute("oninput","return;"),Ic=typeof kf.oninput=="function"}Tc=Ic}else Tc=!1;Rf=Tc&&(!document.documentMode||9<document.documentMode)}function Cf(){Zo&&(Zo.detachEvent("onpropertychange",Pf),ea=Zo=null)}function Pf(n){if(n.propertyName==="value"&&Il(ea)){var r=[];Af(r,ea,n,ws(n)),ol(zv,r)}}function $v(n,r,a){n==="focusin"?(Cf(),Zo=r,ea=a,Zo.attachEvent("onpropertychange",Pf)):n==="focusout"&&Cf()}function Hv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Il(ea)}function qv(n,r){if(n==="click")return Il(r)}function Wv(n,r){if(n==="input"||n==="change")return Il(r)}function Kv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var wn=typeof Object.is=="function"?Object.is:Kv;function ta(n,r){if(wn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!y.call(r,d)||!wn(n[d],r[d]))return!1}return!0}function Nf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function xf(n,r){var a=Nf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Nf(a)}}function Df(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Df(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Vf(){for(var n=window,r=Vr();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Vr(n.document)}return r}function Sc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Gv(n){var r=Vf(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&Df(a.ownerDocument.documentElement,a)){if(c!==null&&Sc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,f=Math.min(c.start,d);c=c.end===void 0?f:Math.min(c.end,d),!n.extend&&f>c&&(d=c,c=f,f=d),d=xf(a,f);var _=xf(a,c);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),f>c?(n.addRange(r),n.extend(_.node,_.offset)):(r.setEnd(_.node,_.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Qv=m&&"documentMode"in document&&11>=document.documentMode,Fs=null,Ac=null,na=null,Rc=!1;function Of(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Rc||Fs==null||Fs!==Vr(c)||(c=Fs,"selectionStart"in c&&Sc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),na&&ta(na,c)||(na=c,c=kl(Ac,"onSelect"),0<c.length&&(r=new Ui("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=Fs)))}function Sl(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Us={animationend:Sl("Animation","AnimationEnd"),animationiteration:Sl("Animation","AnimationIteration"),animationstart:Sl("Animation","AnimationStart"),transitionend:Sl("Transition","TransitionEnd")},kc={},Lf={};m&&(Lf=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function Al(n){if(kc[n])return kc[n];if(!Us[n])return n;var r=Us[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Lf)return kc[n]=r[a];return n}var Mf=Al("animationend"),bf=Al("animationiteration"),Ff=Al("animationstart"),Uf=Al("transitionend"),jf=new Map,zf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qr(n,r){jf.set(n,r),u(r,[n])}for(var Cc=0;Cc<zf.length;Cc++){var Pc=zf[Cc],Yv=Pc.toLowerCase(),Jv=Pc[0].toUpperCase()+Pc.slice(1);Qr(Yv,"on"+Jv)}Qr(Mf,"onAnimationEnd"),Qr(bf,"onAnimationIteration"),Qr(Ff,"onAnimationStart"),Qr("dblclick","onDoubleClick"),Qr("focusin","onFocus"),Qr("focusout","onBlur"),Qr(Uf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ra));function Bf(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,Lo(c,r,void 0,n),n.currentTarget=null}function $f(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var f=void 0;if(r)for(var _=c.length-1;0<=_;_--){var T=c[_],k=T.instance,F=T.currentTarget;if(T=T.listener,k!==f&&d.isPropagationStopped())break e;Bf(d,T,F),f=k}else for(_=0;_<c.length;_++){if(T=c[_],k=T.instance,F=T.currentTarget,T=T.listener,k!==f&&d.isPropagationStopped())break e;Bf(d,T,F),f=k}}}if(Ts)throw n=an,Ts=!1,an=null,n}function We(n,r){var a=r[bc];a===void 0&&(a=r[bc]=new Set);var c=n+"__bubble";a.has(c)||(Hf(r,n,2,!1),a.add(c))}function Nc(n,r,a){var c=0;r&&(c|=4),Hf(a,n,c,r)}var Rl="_reactListening"+Math.random().toString(36).slice(2);function ia(n){if(!n[Rl]){n[Rl]=!0,s.forEach(function(a){a!=="selectionchange"&&(Xv.has(a)||Nc(a,!1,n),Nc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Rl]||(r[Rl]=!0,Nc("selectionchange",!1,r))}}function Hf(n,r,a,c){switch(Ns(r)){case 1:var d=jn;break;case 4:d=yl;break;default:d=Go}a=d.bind(null,r,a,n),d=void 0,!zr||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function xc(n,r,a,c,d){var f=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var T=c.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(_===4)for(_=c.return;_!==null;){var k=_.tag;if((k===3||k===4)&&(k=_.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;_=_.return}for(;T!==null;){if(_=zi(T),_===null)return;if(k=_.tag,k===5||k===6){c=f=_;continue e}T=T.parentNode}}c=c.return}ol(function(){var F=f,W=ws(a),K=[];e:{var q=jf.get(n);if(q!==void 0){var ee=Ui,se=n;switch(n){case"keypress":if(Fi(a)===0)break e;case"keydown":case"keyup":ee=je;break;case"focusin":se="focus",ee=St;break;case"focusout":se="blur",ee=St;break;case"beforeblur":case"afterblur":ee=St;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=Yo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=El;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=Hn;break;case Mf:case bf:case Ff:ee=Tl;break;case Uf:ee=Ms;break;case"scroll":ee=Ds;break;case"wheel":ee=Lv;break;case"copy":case"cut":case"paste":ee=l;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=nn}var oe=(r&4)!==0,ot=!oe&&n==="scroll",O=oe?q!==null?q+"Capture":null:q;oe=[];for(var N=F,M;N!==null;){M=N;var Q=M.stateNode;if(M.tag===5&&Q!==null&&(M=Q,O!==null&&(Q=Ci(N,O),Q!=null&&oe.push(sa(N,Q,M)))),ot)break;N=N.return}0<oe.length&&(q=new ee(q,se,null,a,W),K.push({event:q,listeners:oe}))}}if((r&7)===0){e:{if(q=n==="mouseover"||n==="pointerover",ee=n==="mouseout"||n==="pointerout",q&&a!==Fr&&(se=a.relatedTarget||a.fromElement)&&(zi(se)||se[mr]))break e;if((ee||q)&&(q=W.window===W?W:(q=W.ownerDocument)?q.defaultView||q.parentWindow:window,ee?(se=a.relatedTarget||a.toElement,ee=F,se=se?zi(se):null,se!==null&&(ot=vn(se),se!==ot||se.tag!==5&&se.tag!==6)&&(se=null)):(ee=null,se=F),ee!==se)){if(oe=Yo,Q="onMouseLeave",O="onMouseEnter",N="mouse",(n==="pointerout"||n==="pointerover")&&(oe=nn,Q="onPointerLeave",O="onPointerEnter",N="pointer"),ot=ee==null?q:Bs(ee),M=se==null?q:Bs(se),q=new oe(Q,N+"leave",ee,a,W),q.target=ot,q.relatedTarget=M,Q=null,zi(W)===F&&(oe=new oe(O,N+"enter",se,a,W),oe.target=M,oe.relatedTarget=ot,Q=oe),ot=Q,ee&&se)t:{for(oe=ee,O=se,N=0,M=oe;M;M=js(M))N++;for(M=0,Q=O;Q;Q=js(Q))M++;for(;0<N-M;)oe=js(oe),N--;for(;0<M-N;)O=js(O),M--;for(;N--;){if(oe===O||O!==null&&oe===O.alternate)break t;oe=js(oe),O=js(O)}oe=null}else oe=null;ee!==null&&qf(K,q,ee,oe,!1),se!==null&&ot!==null&&qf(K,ot,se,oe,!0)}}e:{if(q=F?Bs(F):window,ee=q.nodeName&&q.nodeName.toLowerCase(),ee==="select"||ee==="input"&&q.type==="file")var le=Bv;else if(Sf(q))if(Rf)le=Wv;else{le=Hv;var de=$v}else(ee=q.nodeName)&&ee.toLowerCase()==="input"&&(q.type==="checkbox"||q.type==="radio")&&(le=qv);if(le&&(le=le(n,F))){Af(K,le,a,W);break e}de&&de(n,q,F),n==="focusout"&&(de=q._wrapperState)&&de.controlled&&q.type==="number"&&lt(q,"number",q.value)}switch(de=F?Bs(F):window,n){case"focusin":(Sf(de)||de.contentEditable==="true")&&(Fs=de,Ac=F,na=null);break;case"focusout":na=Ac=Fs=null;break;case"mousedown":Rc=!0;break;case"contextmenu":case"mouseup":case"dragend":Rc=!1,Of(K,a,W);break;case"selectionchange":if(Qv)break;case"keydown":case"keyup":Of(K,a,W)}var fe;if(wc)e:{switch(n){case"compositionstart":var me="onCompositionStart";break e;case"compositionend":me="onCompositionEnd";break e;case"compositionupdate":me="onCompositionUpdate";break e}me=void 0}else bs?Tf(n,a)&&(me="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(me="onCompositionStart");me&&(vf&&a.locale!=="ko"&&(bs||me!=="onCompositionStart"?me==="onCompositionEnd"&&bs&&(fe=_l()):(en=W,xs="value"in en?en.value:en.textContent,bs=!0)),de=kl(F,me),0<de.length&&(me=new g(me,n,null,a,W),K.push({event:me,listeners:de}),fe?me.data=fe:(fe=If(a),fe!==null&&(me.data=fe)))),(fe=bv?Fv(n,a):Uv(n,a))&&(F=kl(F,"onBeforeInput"),0<F.length&&(W=new g("onBeforeInput","beforeinput",null,a,W),K.push({event:W,listeners:F}),W.data=fe))}$f(K,r)})}function sa(n,r,a){return{instance:n,listener:r,currentTarget:a}}function kl(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,f=d.stateNode;d.tag===5&&f!==null&&(d=f,f=Ci(n,a),f!=null&&c.unshift(sa(n,f,d)),f=Ci(n,r),f!=null&&c.push(sa(n,f,d))),n=n.return}return c}function js(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function qf(n,r,a,c,d){for(var f=r._reactName,_=[];a!==null&&a!==c;){var T=a,k=T.alternate,F=T.stateNode;if(k!==null&&k===c)break;T.tag===5&&F!==null&&(T=F,d?(k=Ci(a,f),k!=null&&_.unshift(sa(a,k,T))):d||(k=Ci(a,f),k!=null&&_.push(sa(a,k,T)))),a=a.return}_.length!==0&&n.push({event:r,listeners:_})}var Zv=/\r\n?/g,eE=/\u0000|\uFFFD/g;function Wf(n){return(typeof n=="string"?n:""+n).replace(Zv,`
`).replace(eE,"")}function Cl(n,r,a){if(r=Wf(r),Wf(n)!==r&&a)throw Error(t(425))}function Pl(){}var Dc=null,Vc=null;function Oc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Lc=typeof setTimeout=="function"?setTimeout:void 0,tE=typeof clearTimeout=="function"?clearTimeout:void 0,Kf=typeof Promise=="function"?Promise:void 0,nE=typeof queueMicrotask=="function"?queueMicrotask:typeof Kf<"u"?function(n){return Kf.resolve(null).then(n).catch(rE)}:Lc;function rE(n){setTimeout(function(){throw n})}function Mc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Wr(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Wr(r)}function Yr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Gf(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var zs=Math.random().toString(36).slice(2),Wn="__reactFiber$"+zs,oa="__reactProps$"+zs,mr="__reactContainer$"+zs,bc="__reactEvents$"+zs,iE="__reactListeners$"+zs,sE="__reactHandles$"+zs;function zi(n){var r=n[Wn];if(r)return r;for(var a=n.parentNode;a;){if(r=a[mr]||a[Wn]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=Gf(n);n!==null;){if(a=n[Wn])return a;n=Gf(n)}return r}n=a,a=n.parentNode}return null}function aa(n){return n=n[Wn]||n[mr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Bs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Nl(n){return n[oa]||null}var Fc=[],$s=-1;function Jr(n){return{current:n}}function Ke(n){0>$s||(n.current=Fc[$s],Fc[$s]=null,$s--)}function He(n,r){$s++,Fc[$s]=n.current,n.current=r}var Xr={},Dt=Jr(Xr),$t=Jr(!1),Bi=Xr;function Hs(n,r){var a=n.type.contextTypes;if(!a)return Xr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},f;for(f in a)d[f]=r[f];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Ht(n){return n=n.childContextTypes,n!=null}function xl(){Ke($t),Ke(Dt)}function Qf(n,r,a){if(Dt.current!==Xr)throw Error(t(168));He(Dt,r),He($t,a)}function Yf(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,Fe(n)||"Unknown",d));return ne({},a,c)}function Dl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Xr,Bi=Dt.current,He(Dt,n),He($t,$t.current),!0}function Jf(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Yf(n,r,Bi),c.__reactInternalMemoizedMergedChildContext=n,Ke($t),Ke(Dt),He(Dt,n)):Ke($t),He($t,a)}var gr=null,Vl=!1,Uc=!1;function Xf(n){gr===null?gr=[n]:gr.push(n)}function oE(n){Vl=!0,Xf(n)}function Zr(){if(!Uc&&gr!==null){Uc=!0;var n=0,r=xe;try{var a=gr;for(xe=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}gr=null,Vl=!1}catch(d){throw gr!==null&&(gr=gr.slice(n+1)),bo(Ss,Zr),d}finally{xe=r,Uc=!1}}return null}var qs=[],Ws=0,Ol=null,Ll=0,un=[],cn=0,$i=null,yr=1,_r="";function Hi(n,r){qs[Ws++]=Ll,qs[Ws++]=Ol,Ol=n,Ll=r}function Zf(n,r,a){un[cn++]=yr,un[cn++]=_r,un[cn++]=$i,$i=n;var c=yr;n=_r;var d=32-Xt(c)-1;c&=~(1<<d),a+=1;var f=32-Xt(r)+d;if(30<f){var _=d-d%5;f=(c&(1<<_)-1).toString(32),c>>=_,d-=_,yr=1<<32-Xt(r)+d|a<<d|c,_r=f+n}else yr=1<<f|a<<d|c,_r=n}function jc(n){n.return!==null&&(Hi(n,1),Zf(n,1,0))}function zc(n){for(;n===Ol;)Ol=qs[--Ws],qs[Ws]=null,Ll=qs[--Ws],qs[Ws]=null;for(;n===$i;)$i=un[--cn],un[cn]=null,_r=un[--cn],un[cn]=null,yr=un[--cn],un[cn]=null}var rn=null,sn=null,Xe=!1,Tn=null;function ep(n,r){var a=pn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function tp(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,rn=n,sn=Yr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,rn=n,sn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=$i!==null?{id:yr,overflow:_r}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=pn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,rn=n,sn=null,!0):!1;default:return!1}}function Bc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function $c(n){if(Xe){var r=sn;if(r){var a=r;if(!tp(n,r)){if(Bc(n))throw Error(t(418));r=Yr(a.nextSibling);var c=rn;r&&tp(n,r)?ep(c,a):(n.flags=n.flags&-4097|2,Xe=!1,rn=n)}}else{if(Bc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Xe=!1,rn=n}}}function np(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;rn=n}function Ml(n){if(n!==rn)return!1;if(!Xe)return np(n),Xe=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Oc(n.type,n.memoizedProps)),r&&(r=sn)){if(Bc(n))throw rp(),Error(t(418));for(;r;)ep(n,r),r=Yr(r.nextSibling)}if(np(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){sn=Yr(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}sn=null}}else sn=rn?Yr(n.stateNode.nextSibling):null;return!0}function rp(){for(var n=sn;n;)n=Yr(n.nextSibling)}function Ks(){sn=rn=null,Xe=!1}function Hc(n){Tn===null?Tn=[n]:Tn.push(n)}var aE=Ie.ReactCurrentBatchConfig;function la(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,f=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===f?r.ref:(r=function(_){var T=d.refs;_===null?delete T[f]:T[f]=_},r._stringRef=f,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function bl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function ip(n){var r=n._init;return r(n._payload)}function sp(n){function r(O,N){if(n){var M=O.deletions;M===null?(O.deletions=[N],O.flags|=16):M.push(N)}}function a(O,N){if(!n)return null;for(;N!==null;)r(O,N),N=N.sibling;return null}function c(O,N){for(O=new Map;N!==null;)N.key!==null?O.set(N.key,N):O.set(N.index,N),N=N.sibling;return O}function d(O,N){return O=ai(O,N),O.index=0,O.sibling=null,O}function f(O,N,M){return O.index=M,n?(M=O.alternate,M!==null?(M=M.index,M<N?(O.flags|=2,N):M):(O.flags|=2,N)):(O.flags|=1048576,N)}function _(O){return n&&O.alternate===null&&(O.flags|=2),O}function T(O,N,M,Q){return N===null||N.tag!==6?(N=Lh(M,O.mode,Q),N.return=O,N):(N=d(N,M),N.return=O,N)}function k(O,N,M,Q){var le=M.type;return le===C?W(O,N,M.props.children,Q,M.key):N!==null&&(N.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===Nt&&ip(le)===N.type)?(Q=d(N,M.props),Q.ref=la(O,N,M),Q.return=O,Q):(Q=au(M.type,M.key,M.props,null,O.mode,Q),Q.ref=la(O,N,M),Q.return=O,Q)}function F(O,N,M,Q){return N===null||N.tag!==4||N.stateNode.containerInfo!==M.containerInfo||N.stateNode.implementation!==M.implementation?(N=Mh(M,O.mode,Q),N.return=O,N):(N=d(N,M.children||[]),N.return=O,N)}function W(O,N,M,Q,le){return N===null||N.tag!==7?(N=Xi(M,O.mode,Q,le),N.return=O,N):(N=d(N,M),N.return=O,N)}function K(O,N,M){if(typeof N=="string"&&N!==""||typeof N=="number")return N=Lh(""+N,O.mode,M),N.return=O,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case De:return M=au(N.type,N.key,N.props,null,O.mode,M),M.ref=la(O,null,N),M.return=O,M;case Ne:return N=Mh(N,O.mode,M),N.return=O,N;case Nt:var Q=N._init;return K(O,Q(N._payload),M)}if(it(N)||ce(N))return N=Xi(N,O.mode,M,null),N.return=O,N;bl(O,N)}return null}function q(O,N,M,Q){var le=N!==null?N.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return le!==null?null:T(O,N,""+M,Q);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case De:return M.key===le?k(O,N,M,Q):null;case Ne:return M.key===le?F(O,N,M,Q):null;case Nt:return le=M._init,q(O,N,le(M._payload),Q)}if(it(M)||ce(M))return le!==null?null:W(O,N,M,Q,null);bl(O,M)}return null}function ee(O,N,M,Q,le){if(typeof Q=="string"&&Q!==""||typeof Q=="number")return O=O.get(M)||null,T(N,O,""+Q,le);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case De:return O=O.get(Q.key===null?M:Q.key)||null,k(N,O,Q,le);case Ne:return O=O.get(Q.key===null?M:Q.key)||null,F(N,O,Q,le);case Nt:var de=Q._init;return ee(O,N,M,de(Q._payload),le)}if(it(Q)||ce(Q))return O=O.get(M)||null,W(N,O,Q,le,null);bl(N,Q)}return null}function se(O,N,M,Q){for(var le=null,de=null,fe=N,me=N=0,wt=null;fe!==null&&me<M.length;me++){fe.index>me?(wt=fe,fe=null):wt=fe.sibling;var Me=q(O,fe,M[me],Q);if(Me===null){fe===null&&(fe=wt);break}n&&fe&&Me.alternate===null&&r(O,fe),N=f(Me,N,me),de===null?le=Me:de.sibling=Me,de=Me,fe=wt}if(me===M.length)return a(O,fe),Xe&&Hi(O,me),le;if(fe===null){for(;me<M.length;me++)fe=K(O,M[me],Q),fe!==null&&(N=f(fe,N,me),de===null?le=fe:de.sibling=fe,de=fe);return Xe&&Hi(O,me),le}for(fe=c(O,fe);me<M.length;me++)wt=ee(fe,O,me,M[me],Q),wt!==null&&(n&&wt.alternate!==null&&fe.delete(wt.key===null?me:wt.key),N=f(wt,N,me),de===null?le=wt:de.sibling=wt,de=wt);return n&&fe.forEach(function(li){return r(O,li)}),Xe&&Hi(O,me),le}function oe(O,N,M,Q){var le=ce(M);if(typeof le!="function")throw Error(t(150));if(M=le.call(M),M==null)throw Error(t(151));for(var de=le=null,fe=N,me=N=0,wt=null,Me=M.next();fe!==null&&!Me.done;me++,Me=M.next()){fe.index>me?(wt=fe,fe=null):wt=fe.sibling;var li=q(O,fe,Me.value,Q);if(li===null){fe===null&&(fe=wt);break}n&&fe&&li.alternate===null&&r(O,fe),N=f(li,N,me),de===null?le=li:de.sibling=li,de=li,fe=wt}if(Me.done)return a(O,fe),Xe&&Hi(O,me),le;if(fe===null){for(;!Me.done;me++,Me=M.next())Me=K(O,Me.value,Q),Me!==null&&(N=f(Me,N,me),de===null?le=Me:de.sibling=Me,de=Me);return Xe&&Hi(O,me),le}for(fe=c(O,fe);!Me.done;me++,Me=M.next())Me=ee(fe,O,me,Me.value,Q),Me!==null&&(n&&Me.alternate!==null&&fe.delete(Me.key===null?me:Me.key),N=f(Me,N,me),de===null?le=Me:de.sibling=Me,de=Me);return n&&fe.forEach(function(jE){return r(O,jE)}),Xe&&Hi(O,me),le}function ot(O,N,M,Q){if(typeof M=="object"&&M!==null&&M.type===C&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case De:e:{for(var le=M.key,de=N;de!==null;){if(de.key===le){if(le=M.type,le===C){if(de.tag===7){a(O,de.sibling),N=d(de,M.props.children),N.return=O,O=N;break e}}else if(de.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===Nt&&ip(le)===de.type){a(O,de.sibling),N=d(de,M.props),N.ref=la(O,de,M),N.return=O,O=N;break e}a(O,de);break}else r(O,de);de=de.sibling}M.type===C?(N=Xi(M.props.children,O.mode,Q,M.key),N.return=O,O=N):(Q=au(M.type,M.key,M.props,null,O.mode,Q),Q.ref=la(O,N,M),Q.return=O,O=Q)}return _(O);case Ne:e:{for(de=M.key;N!==null;){if(N.key===de)if(N.tag===4&&N.stateNode.containerInfo===M.containerInfo&&N.stateNode.implementation===M.implementation){a(O,N.sibling),N=d(N,M.children||[]),N.return=O,O=N;break e}else{a(O,N);break}else r(O,N);N=N.sibling}N=Mh(M,O.mode,Q),N.return=O,O=N}return _(O);case Nt:return de=M._init,ot(O,N,de(M._payload),Q)}if(it(M))return se(O,N,M,Q);if(ce(M))return oe(O,N,M,Q);bl(O,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,N!==null&&N.tag===6?(a(O,N.sibling),N=d(N,M),N.return=O,O=N):(a(O,N),N=Lh(M,O.mode,Q),N.return=O,O=N),_(O)):a(O,N)}return ot}var Gs=sp(!0),op=sp(!1),Fl=Jr(null),Ul=null,Qs=null,qc=null;function Wc(){qc=Qs=Ul=null}function Kc(n){var r=Fl.current;Ke(Fl),n._currentValue=r}function Gc(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function Ys(n,r){Ul=n,qc=Qs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(qt=!0),n.firstContext=null)}function hn(n){var r=n._currentValue;if(qc!==n)if(n={context:n,memoizedValue:r,next:null},Qs===null){if(Ul===null)throw Error(t(308));Qs=n,Ul.dependencies={lanes:0,firstContext:n}}else Qs=Qs.next=n;return r}var qi=null;function Qc(n){qi===null?qi=[n]:qi.push(n)}function ap(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,Qc(r)):(a.next=d.next,d.next=a),r.interleaved=a,vr(n,c)}function vr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ei=!1;function Yc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Er(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function ti(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Le&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,vr(n,a)}return d=c.interleaved,d===null?(r.next=r,Qc(c)):(r.next=d.next,d.next=r),c.interleaved=r,vr(n,a)}function jl(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,$o(n,a)}}function up(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};f===null?d=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?d=f=r:f=f.next=r}else d=f=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function zl(n,r,a,c){var d=n.updateQueue;ei=!1;var f=d.firstBaseUpdate,_=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var k=T,F=k.next;k.next=null,_===null?f=F:_.next=F,_=k;var W=n.alternate;W!==null&&(W=W.updateQueue,T=W.lastBaseUpdate,T!==_&&(T===null?W.firstBaseUpdate=F:T.next=F,W.lastBaseUpdate=k))}if(f!==null){var K=d.baseState;_=0,W=F=k=null,T=f;do{var q=T.lane,ee=T.eventTime;if((c&q)===q){W!==null&&(W=W.next={eventTime:ee,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var se=n,oe=T;switch(q=r,ee=a,oe.tag){case 1:if(se=oe.payload,typeof se=="function"){K=se.call(ee,K,q);break e}K=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=oe.payload,q=typeof se=="function"?se.call(ee,K,q):se,q==null)break e;K=ne({},K,q);break e;case 2:ei=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,q=d.effects,q===null?d.effects=[T]:q.push(T))}else ee={eventTime:ee,lane:q,tag:T.tag,payload:T.payload,callback:T.callback,next:null},W===null?(F=W=ee,k=K):W=W.next=ee,_|=q;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;q=T,T=q.next,q.next=null,d.lastBaseUpdate=q,d.shared.pending=null}}while(!0);if(W===null&&(k=K),d.baseState=k,d.firstBaseUpdate=F,d.lastBaseUpdate=W,r=d.shared.interleaved,r!==null){d=r;do _|=d.lane,d=d.next;while(d!==r)}else f===null&&(d.shared.lanes=0);Gi|=_,n.lanes=_,n.memoizedState=K}}function cp(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ua={},Kn=Jr(ua),ca=Jr(ua),ha=Jr(ua);function Wi(n){if(n===ua)throw Error(t(174));return n}function Jc(n,r){switch(He(ha,r),He(ca,n),He(Kn,ua),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:_s(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=_s(r,n)}Ke(Kn),He(Kn,r)}function Js(){Ke(Kn),Ke(ca),Ke(ha)}function hp(n){Wi(ha.current);var r=Wi(Kn.current),a=_s(r,n.type);r!==a&&(He(ca,n),He(Kn,a))}function Xc(n){ca.current===n&&(Ke(Kn),Ke(ca))}var Ze=Jr(0);function Bl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Zc=[];function eh(){for(var n=0;n<Zc.length;n++)Zc[n]._workInProgressVersionPrimary=null;Zc.length=0}var $l=Ie.ReactCurrentDispatcher,th=Ie.ReactCurrentBatchConfig,Ki=0,et=null,ft=null,vt=null,Hl=!1,da=!1,fa=0,lE=0;function Vt(){throw Error(t(321))}function nh(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!wn(n[a],r[a]))return!1;return!0}function rh(n,r,a,c,d,f){if(Ki=f,et=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,$l.current=n===null||n.memoizedState===null?dE:fE,n=a(c,d),da){f=0;do{if(da=!1,fa=0,25<=f)throw Error(t(301));f+=1,vt=ft=null,r.updateQueue=null,$l.current=pE,n=a(c,d)}while(da)}if($l.current=Kl,r=ft!==null&&ft.next!==null,Ki=0,vt=ft=et=null,Hl=!1,r)throw Error(t(300));return n}function ih(){var n=fa!==0;return fa=0,n}function Gn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?et.memoizedState=vt=n:vt=vt.next=n,vt}function dn(){if(ft===null){var n=et.alternate;n=n!==null?n.memoizedState:null}else n=ft.next;var r=vt===null?et.memoizedState:vt.next;if(r!==null)vt=r,ft=n;else{if(n===null)throw Error(t(310));ft=n,n={memoizedState:ft.memoizedState,baseState:ft.baseState,baseQueue:ft.baseQueue,queue:ft.queue,next:null},vt===null?et.memoizedState=vt=n:vt=vt.next=n}return vt}function pa(n,r){return typeof r=="function"?r(n):r}function sh(n){var r=dn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=ft,d=c.baseQueue,f=a.pending;if(f!==null){if(d!==null){var _=d.next;d.next=f.next,f.next=_}c.baseQueue=d=f,a.pending=null}if(d!==null){f=d.next,c=c.baseState;var T=_=null,k=null,F=f;do{var W=F.lane;if((Ki&W)===W)k!==null&&(k=k.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var K={lane:W,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};k===null?(T=k=K,_=c):k=k.next=K,et.lanes|=W,Gi|=W}F=F.next}while(F!==null&&F!==f);k===null?_=c:k.next=T,wn(c,r.memoizedState)||(qt=!0),r.memoizedState=c,r.baseState=_,r.baseQueue=k,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do f=d.lane,et.lanes|=f,Gi|=f,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function oh(n){var r=dn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,f=r.memoizedState;if(d!==null){a.pending=null;var _=d=d.next;do f=n(f,_.action),_=_.next;while(_!==d);wn(f,r.memoizedState)||(qt=!0),r.memoizedState=f,r.baseQueue===null&&(r.baseState=f),a.lastRenderedState=f}return[f,c]}function dp(){}function fp(n,r){var a=et,c=dn(),d=r(),f=!wn(c.memoizedState,d);if(f&&(c.memoizedState=d,qt=!0),c=c.queue,ah(gp.bind(null,a,c,n),[n]),c.getSnapshot!==r||f||vt!==null&&vt.memoizedState.tag&1){if(a.flags|=2048,ma(9,mp.bind(null,a,c,d,r),void 0,null),Et===null)throw Error(t(349));(Ki&30)!==0||pp(a,r,d)}return d}function pp(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=et.updateQueue,r===null?(r={lastEffect:null,stores:null},et.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function mp(n,r,a,c){r.value=a,r.getSnapshot=c,yp(r)&&_p(n)}function gp(n,r,a){return a(function(){yp(r)&&_p(n)})}function yp(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!wn(n,a)}catch{return!0}}function _p(n){var r=vr(n,1);r!==null&&Rn(r,n,1,-1)}function vp(n){var r=Gn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:n},r.queue=n,n=n.dispatch=hE.bind(null,et,n),[r.memoizedState,n]}function ma(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=et.updateQueue,r===null?(r={lastEffect:null,stores:null},et.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function Ep(){return dn().memoizedState}function ql(n,r,a,c){var d=Gn();et.flags|=n,d.memoizedState=ma(1|r,a,void 0,c===void 0?null:c)}function Wl(n,r,a,c){var d=dn();c=c===void 0?null:c;var f=void 0;if(ft!==null){var _=ft.memoizedState;if(f=_.destroy,c!==null&&nh(c,_.deps)){d.memoizedState=ma(r,a,f,c);return}}et.flags|=n,d.memoizedState=ma(1|r,a,f,c)}function wp(n,r){return ql(8390656,8,n,r)}function ah(n,r){return Wl(2048,8,n,r)}function Tp(n,r){return Wl(4,2,n,r)}function Ip(n,r){return Wl(4,4,n,r)}function Sp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Ap(n,r,a){return a=a!=null?a.concat([n]):null,Wl(4,4,Sp.bind(null,r,n),a)}function lh(){}function Rp(n,r){var a=dn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&nh(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function kp(n,r){var a=dn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&nh(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function Cp(n,r,a){return(Ki&21)===0?(n.baseState&&(n.baseState=!1,qt=!0),n.memoizedState=a):(wn(a,r)||(a=zo(),et.lanes|=a,Gi|=a,n.baseState=!0),r)}function uE(n,r){var a=xe;xe=a!==0&&4>a?a:4,n(!0);var c=th.transition;th.transition={};try{n(!1),r()}finally{xe=a,th.transition=c}}function Pp(){return dn().memoizedState}function cE(n,r,a){var c=si(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Np(n))xp(r,a);else if(a=ap(n,r,a,c),a!==null){var d=Bt();Rn(a,n,c,d),Dp(a,r,c)}}function hE(n,r,a){var c=si(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Np(n))xp(r,d);else{var f=n.alternate;if(n.lanes===0&&(f===null||f.lanes===0)&&(f=r.lastRenderedReducer,f!==null))try{var _=r.lastRenderedState,T=f(_,a);if(d.hasEagerState=!0,d.eagerState=T,wn(T,_)){var k=r.interleaved;k===null?(d.next=d,Qc(r)):(d.next=k.next,k.next=d),r.interleaved=d;return}}catch{}finally{}a=ap(n,r,d,c),a!==null&&(d=Bt(),Rn(a,n,c,d),Dp(a,r,c))}}function Np(n){var r=n.alternate;return n===et||r!==null&&r===et}function xp(n,r){da=Hl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function Dp(n,r,a){if((a&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,$o(n,a)}}var Kl={readContext:hn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},dE={readContext:hn,useCallback:function(n,r){return Gn().memoizedState=[n,r===void 0?null:r],n},useContext:hn,useEffect:wp,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,ql(4194308,4,Sp.bind(null,r,n),a)},useLayoutEffect:function(n,r){return ql(4194308,4,n,r)},useInsertionEffect:function(n,r){return ql(4,2,n,r)},useMemo:function(n,r){var a=Gn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=Gn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=cE.bind(null,et,n),[c.memoizedState,n]},useRef:function(n){var r=Gn();return n={current:n},r.memoizedState=n},useState:vp,useDebugValue:lh,useDeferredValue:function(n){return Gn().memoizedState=n},useTransition:function(){var n=vp(!1),r=n[0];return n=uE.bind(null,n[1]),Gn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=et,d=Gn();if(Xe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),Et===null)throw Error(t(349));(Ki&30)!==0||pp(c,r,a)}d.memoizedState=a;var f={value:a,getSnapshot:r};return d.queue=f,wp(gp.bind(null,c,f,n),[n]),c.flags|=2048,ma(9,mp.bind(null,c,f,a,r),void 0,null),a},useId:function(){var n=Gn(),r=Et.identifierPrefix;if(Xe){var a=_r,c=yr;a=(c&~(1<<32-Xt(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=fa++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=lE++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},fE={readContext:hn,useCallback:Rp,useContext:hn,useEffect:ah,useImperativeHandle:Ap,useInsertionEffect:Tp,useLayoutEffect:Ip,useMemo:kp,useReducer:sh,useRef:Ep,useState:function(){return sh(pa)},useDebugValue:lh,useDeferredValue:function(n){var r=dn();return Cp(r,ft.memoizedState,n)},useTransition:function(){var n=sh(pa)[0],r=dn().memoizedState;return[n,r]},useMutableSource:dp,useSyncExternalStore:fp,useId:Pp,unstable_isNewReconciler:!1},pE={readContext:hn,useCallback:Rp,useContext:hn,useEffect:ah,useImperativeHandle:Ap,useInsertionEffect:Tp,useLayoutEffect:Ip,useMemo:kp,useReducer:oh,useRef:Ep,useState:function(){return oh(pa)},useDebugValue:lh,useDeferredValue:function(n){var r=dn();return ft===null?r.memoizedState=n:Cp(r,ft.memoizedState,n)},useTransition:function(){var n=oh(pa)[0],r=dn().memoizedState;return[n,r]},useMutableSource:dp,useSyncExternalStore:fp,useId:Pp,unstable_isNewReconciler:!1};function In(n,r){if(n&&n.defaultProps){r=ne({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function uh(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:ne({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Gl={isMounted:function(n){return(n=n._reactInternals)?vn(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=Bt(),d=si(n),f=Er(c,d);f.payload=r,a!=null&&(f.callback=a),r=ti(n,f,d),r!==null&&(Rn(r,n,d,c),jl(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=Bt(),d=si(n),f=Er(c,d);f.tag=1,f.payload=r,a!=null&&(f.callback=a),r=ti(n,f,d),r!==null&&(Rn(r,n,d,c),jl(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Bt(),c=si(n),d=Er(a,c);d.tag=2,r!=null&&(d.callback=r),r=ti(n,d,c),r!==null&&(Rn(r,n,c,a),jl(r,n,c))}};function Vp(n,r,a,c,d,f,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,f,_):r.prototype&&r.prototype.isPureReactComponent?!ta(a,c)||!ta(d,f):!0}function Op(n,r,a){var c=!1,d=Xr,f=r.contextType;return typeof f=="object"&&f!==null?f=hn(f):(d=Ht(r)?Bi:Dt.current,c=r.contextTypes,f=(c=c!=null)?Hs(n,d):Xr),r=new r(a,f),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Gl,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=f),r}function Lp(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&Gl.enqueueReplaceState(r,r.state,null)}function ch(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Yc(n);var f=r.contextType;typeof f=="object"&&f!==null?d.context=hn(f):(f=Ht(r)?Bi:Dt.current,d.context=Hs(n,f)),d.state=n.memoizedState,f=r.getDerivedStateFromProps,typeof f=="function"&&(uh(n,r,f,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Gl.enqueueReplaceState(d,d.state,null),zl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Xs(n,r){try{var a="",c=r;do a+=Ae(c),c=c.return;while(c);var d=a}catch(f){d=`
Error generating stack: `+f.message+`
`+f.stack}return{value:n,source:r,stack:d,digest:null}}function hh(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function dh(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var mE=typeof WeakMap=="function"?WeakMap:Map;function Mp(n,r,a){a=Er(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){tu||(tu=!0,kh=c),dh(n,r)},a}function bp(n,r,a){a=Er(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){dh(n,r)}}var f=n.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(a.callback=function(){dh(n,r),typeof c!="function"&&(ri===null?ri=new Set([this]):ri.add(this));var _=r.stack;this.componentDidCatch(r.value,{componentStack:_!==null?_:""})}),a}function Fp(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new mE;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=PE.bind(null,n,r,a),r.then(n,n))}function Up(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function jp(n,r,a,c,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=Er(-1,1),r.tag=2,ti(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var gE=Ie.ReactCurrentOwner,qt=!1;function zt(n,r,a,c){r.child=n===null?op(r,null,a,c):Gs(r,n.child,a,c)}function zp(n,r,a,c,d){a=a.render;var f=r.ref;return Ys(r,d),c=rh(n,r,a,c,f,d),a=ih(),n!==null&&!qt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,wr(n,r,d)):(Xe&&a&&jc(r),r.flags|=1,zt(n,r,c,d),r.child)}function Bp(n,r,a,c,d){if(n===null){var f=a.type;return typeof f=="function"&&!Oh(f)&&f.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=f,$p(n,r,f,c,d)):(n=au(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(f=n.child,(n.lanes&d)===0){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:ta,a(_,c)&&n.ref===r.ref)return wr(n,r,d)}return r.flags|=1,n=ai(f,c),n.ref=r.ref,n.return=r,r.child=n}function $p(n,r,a,c,d){if(n!==null){var f=n.memoizedProps;if(ta(f,c)&&n.ref===r.ref)if(qt=!1,r.pendingProps=c=f,(n.lanes&d)!==0)(n.flags&131072)!==0&&(qt=!0);else return r.lanes=n.lanes,wr(n,r,d)}return fh(n,r,a,c,d)}function Hp(n,r,a){var c=r.pendingProps,d=c.children,f=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(eo,on),on|=a;else{if((a&1073741824)===0)return n=f!==null?f.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,He(eo,on),on|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=f!==null?f.baseLanes:a,He(eo,on),on|=c}else f!==null?(c=f.baseLanes|a,r.memoizedState=null):c=a,He(eo,on),on|=c;return zt(n,r,d,a),r.child}function qp(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function fh(n,r,a,c,d){var f=Ht(a)?Bi:Dt.current;return f=Hs(r,f),Ys(r,d),a=rh(n,r,a,c,f,d),c=ih(),n!==null&&!qt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,wr(n,r,d)):(Xe&&c&&jc(r),r.flags|=1,zt(n,r,a,d),r.child)}function Wp(n,r,a,c,d){if(Ht(a)){var f=!0;Dl(r)}else f=!1;if(Ys(r,d),r.stateNode===null)Yl(n,r),Op(r,a,c),ch(r,a,c,d),c=!0;else if(n===null){var _=r.stateNode,T=r.memoizedProps;_.props=T;var k=_.context,F=a.contextType;typeof F=="object"&&F!==null?F=hn(F):(F=Ht(a)?Bi:Dt.current,F=Hs(r,F));var W=a.getDerivedStateFromProps,K=typeof W=="function"||typeof _.getSnapshotBeforeUpdate=="function";K||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==c||k!==F)&&Lp(r,_,c,F),ei=!1;var q=r.memoizedState;_.state=q,zl(r,c,_,d),k=r.memoizedState,T!==c||q!==k||$t.current||ei?(typeof W=="function"&&(uh(r,a,W,c),k=r.memoizedState),(T=ei||Vp(r,a,T,c,q,k,F))?(K||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(r.flags|=4194308)):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=k),_.props=c,_.state=k,_.context=F,c=T):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{_=r.stateNode,lp(n,r),T=r.memoizedProps,F=r.type===r.elementType?T:In(r.type,T),_.props=F,K=r.pendingProps,q=_.context,k=a.contextType,typeof k=="object"&&k!==null?k=hn(k):(k=Ht(a)?Bi:Dt.current,k=Hs(r,k));var ee=a.getDerivedStateFromProps;(W=typeof ee=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==K||q!==k)&&Lp(r,_,c,k),ei=!1,q=r.memoizedState,_.state=q,zl(r,c,_,d);var se=r.memoizedState;T!==K||q!==se||$t.current||ei?(typeof ee=="function"&&(uh(r,a,ee,c),se=r.memoizedState),(F=ei||Vp(r,a,F,c,q,se,k)||!1)?(W||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,se,k),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,se,k)),typeof _.componentDidUpdate=="function"&&(r.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=se),_.props=c,_.state=se,_.context=k,c=F):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),c=!1)}return ph(n,r,a,c,f,d)}function ph(n,r,a,c,d,f){qp(n,r);var _=(r.flags&128)!==0;if(!c&&!_)return d&&Jf(r,a,!1),wr(n,r,f);c=r.stateNode,gE.current=r;var T=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&_?(r.child=Gs(r,n.child,null,f),r.child=Gs(r,null,T,f)):zt(n,r,T,f),r.memoizedState=c.state,d&&Jf(r,a,!0),r.child}function Kp(n){var r=n.stateNode;r.pendingContext?Qf(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Qf(n,r.context,!1),Jc(n,r.containerInfo)}function Gp(n,r,a,c,d){return Ks(),Hc(d),r.flags|=256,zt(n,r,a,c),r.child}var mh={dehydrated:null,treeContext:null,retryLane:0};function gh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Qp(n,r,a){var c=r.pendingProps,d=Ze.current,f=!1,_=(r.flags&128)!==0,T;if((T=_)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(f=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),He(Ze,d&1),n===null)return $c(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(_=c.children,n=c.fallback,f?(c=r.mode,f=r.child,_={mode:"hidden",children:_},(c&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=_):f=lu(_,c,0,null),n=Xi(n,c,a,null),f.return=r,n.return=r,f.sibling=n,r.child=f,r.child.memoizedState=gh(a),r.memoizedState=mh,n):yh(r,_));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return yE(n,r,_,c,T,d,a);if(f){f=c.fallback,_=r.mode,d=n.child,T=d.sibling;var k={mode:"hidden",children:c.children};return(_&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=k,r.deletions=null):(c=ai(d,k),c.subtreeFlags=d.subtreeFlags&14680064),T!==null?f=ai(T,f):(f=Xi(f,_,a,null),f.flags|=2),f.return=r,c.return=r,c.sibling=f,r.child=c,c=f,f=r.child,_=n.child.memoizedState,_=_===null?gh(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},f.memoizedState=_,f.childLanes=n.childLanes&~a,r.memoizedState=mh,c}return f=n.child,n=f.sibling,c=ai(f,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function yh(n,r){return r=lu({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Ql(n,r,a,c){return c!==null&&Hc(c),Gs(r,n.child,null,a),n=yh(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function yE(n,r,a,c,d,f,_){if(a)return r.flags&256?(r.flags&=-257,c=hh(Error(t(422))),Ql(n,r,_,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(f=c.fallback,d=r.mode,c=lu({mode:"visible",children:c.children},d,0,null),f=Xi(f,d,_,null),f.flags|=2,c.return=r,f.return=r,c.sibling=f,r.child=c,(r.mode&1)!==0&&Gs(r,n.child,null,_),r.child.memoizedState=gh(_),r.memoizedState=mh,f);if((r.mode&1)===0)return Ql(n,r,_,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;return c=T,f=Error(t(419)),c=hh(f,c,void 0),Ql(n,r,_,c)}if(T=(_&n.childLanes)!==0,qt||T){if(c=Et,c!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|_))!==0?0:d,d!==0&&d!==f.retryLane&&(f.retryLane=d,vr(n,d),Rn(c,n,d,-1))}return Vh(),c=hh(Error(t(421))),Ql(n,r,_,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=NE.bind(null,n),d._reactRetry=r,null):(n=f.treeContext,sn=Yr(d.nextSibling),rn=r,Xe=!0,Tn=null,n!==null&&(un[cn++]=yr,un[cn++]=_r,un[cn++]=$i,yr=n.id,_r=n.overflow,$i=r),r=yh(r,c.children),r.flags|=4096,r)}function Yp(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),Gc(n.return,r,a)}function _h(n,r,a,c,d){var f=n.memoizedState;f===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(f.isBackwards=r,f.rendering=null,f.renderingStartTime=0,f.last=c,f.tail=a,f.tailMode=d)}function Jp(n,r,a){var c=r.pendingProps,d=c.revealOrder,f=c.tail;if(zt(n,r,c.children,a),c=Ze.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Yp(n,a,r);else if(n.tag===19)Yp(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(He(Ze,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&Bl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),_h(r,!1,d,a,f);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Bl(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}_h(r,!0,a,null,f);break;case"together":_h(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Yl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function wr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Gi|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=ai(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=ai(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function _E(n,r,a){switch(r.tag){case 3:Kp(r),Ks();break;case 5:hp(r);break;case 1:Ht(r.type)&&Dl(r);break;case 4:Jc(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;He(Fl,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(He(Ze,Ze.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?Qp(n,r,a):(He(Ze,Ze.current&1),n=wr(n,r,a),n!==null?n.sibling:null);He(Ze,Ze.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(n.flags&128)!==0){if(c)return Jp(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),He(Ze,Ze.current),c)break;return null;case 22:case 23:return r.lanes=0,Hp(n,r,a)}return wr(n,r,a)}var Xp,vh,Zp,em;Xp=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},vh=function(){},Zp=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,Wi(Kn.current);var f=null;switch(a){case"input":d=gs(n,d),c=gs(n,c),f=[];break;case"select":d=ne({},d,{value:void 0}),c=ne({},c,{value:void 0}),f=[];break;case"textarea":d=No(n,d),c=No(n,c),f=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Pl)}_n(a,c);var _;a=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var T=d[F];for(_ in T)T.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?f||(f=[]):(f=f||[]).push(F,null));for(F in c){var k=c[F];if(T=d!=null?d[F]:void 0,c.hasOwnProperty(F)&&k!==T&&(k!=null||T!=null))if(F==="style")if(T){for(_ in T)!T.hasOwnProperty(_)||k&&k.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in k)k.hasOwnProperty(_)&&T[_]!==k[_]&&(a||(a={}),a[_]=k[_])}else a||(f||(f=[]),f.push(F,a)),a=k;else F==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,T=T?T.__html:void 0,k!=null&&T!==k&&(f=f||[]).push(F,k)):F==="children"?typeof k!="string"&&typeof k!="number"||(f=f||[]).push(F,""+k):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(k!=null&&F==="onScroll"&&We("scroll",n),f||T===k||(f=[])):(f=f||[]).push(F,k))}a&&(f=f||[]).push("style",a);var F=f;(r.updateQueue=F)&&(r.flags|=4)}},em=function(n,r,a,c){a!==c&&(r.flags|=4)};function ga(n,r){if(!Xe)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Ot(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function vE(n,r,a){var c=r.pendingProps;switch(zc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(r),null;case 1:return Ht(r.type)&&xl(),Ot(r),null;case 3:return c=r.stateNode,Js(),Ke($t),Ke(Dt),eh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ml(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Tn!==null&&(Nh(Tn),Tn=null))),vh(n,r),Ot(r),null;case 5:Xc(r);var d=Wi(ha.current);if(a=r.type,n!==null&&r.stateNode!=null)Zp(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Ot(r),null}if(n=Wi(Kn.current),Ml(r)){c=r.stateNode,a=r.type;var f=r.memoizedProps;switch(c[Wn]=r,c[oa]=f,n=(r.mode&1)!==0,a){case"dialog":We("cancel",c),We("close",c);break;case"iframe":case"object":case"embed":We("load",c);break;case"video":case"audio":for(d=0;d<ra.length;d++)We(ra[d],c);break;case"source":We("error",c);break;case"img":case"image":case"link":We("error",c),We("load",c);break;case"details":We("toggle",c);break;case"input":el(c,f),We("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!f.multiple},We("invalid",c);break;case"textarea":xo(c,f),We("invalid",c)}_n(a,f),d=null;for(var _ in f)if(f.hasOwnProperty(_)){var T=f[_];_==="children"?typeof T=="string"?c.textContent!==T&&(f.suppressHydrationWarning!==!0&&Cl(c.textContent,T,n),d=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(f.suppressHydrationWarning!==!0&&Cl(c.textContent,T,n),d=["children",""+T]):o.hasOwnProperty(_)&&T!=null&&_==="onScroll"&&We("scroll",c)}switch(a){case"input":ms(c),Po(c,f,!0);break;case"textarea":ms(c),Or(c);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(c.onclick=Pl)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Do(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(a,{is:c.is}):(n=_.createElement(a),a==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,a),n[Wn]=r,n[oa]=c,Xp(n,r,!1,!1),r.stateNode=n;e:{switch(_=Es(a,c),a){case"dialog":We("cancel",n),We("close",n),d=c;break;case"iframe":case"object":case"embed":We("load",n),d=c;break;case"video":case"audio":for(d=0;d<ra.length;d++)We(ra[d],n);d=c;break;case"source":We("error",n),d=c;break;case"img":case"image":case"link":We("error",n),We("load",n),d=c;break;case"details":We("toggle",n),d=c;break;case"input":el(n,c),d=gs(n,c),We("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ne({},c,{value:void 0}),We("invalid",n);break;case"textarea":xo(n,c),d=No(n,c),We("invalid",n);break;default:d=c}_n(a,d),T=d;for(f in T)if(T.hasOwnProperty(f)){var k=T[f];f==="style"?vs(n,k):f==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&nl(n,k)):f==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&ki(n,k):typeof k=="number"&&ki(n,""+k):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(o.hasOwnProperty(f)?k!=null&&f==="onScroll"&&We("scroll",n):k!=null&&ue(n,f,k,_))}switch(a){case"input":ms(n),Po(n,c,!1);break;case"textarea":ms(n),Or(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Oe(c.value));break;case"select":n.multiple=!!c.multiple,f=c.value,f!=null?yn(n,!!c.multiple,f,!1):c.defaultValue!=null&&yn(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Pl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Ot(r),null;case 6:if(n&&r.stateNode!=null)em(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=Wi(ha.current),Wi(Kn.current),Ml(r)){if(c=r.stateNode,a=r.memoizedProps,c[Wn]=r,(f=c.nodeValue!==a)&&(n=rn,n!==null))switch(n.tag){case 3:Cl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Cl(c.nodeValue,a,(n.mode&1)!==0)}f&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Wn]=r,r.stateNode=c}return Ot(r),null;case 13:if(Ke(Ze),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Xe&&sn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)rp(),Ks(),r.flags|=98560,f=!1;else if(f=Ml(r),c!==null&&c.dehydrated!==null){if(n===null){if(!f)throw Error(t(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(t(317));f[Wn]=r}else Ks(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Ot(r),f=!1}else Tn!==null&&(Nh(Tn),Tn=null),f=!0;if(!f)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Ze.current&1)!==0?pt===0&&(pt=3):Vh())),r.updateQueue!==null&&(r.flags|=4),Ot(r),null);case 4:return Js(),vh(n,r),n===null&&ia(r.stateNode.containerInfo),Ot(r),null;case 10:return Kc(r.type._context),Ot(r),null;case 17:return Ht(r.type)&&xl(),Ot(r),null;case 19:if(Ke(Ze),f=r.memoizedState,f===null)return Ot(r),null;if(c=(r.flags&128)!==0,_=f.rendering,_===null)if(c)ga(f,!1);else{if(pt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(_=Bl(n),_!==null){for(r.flags|=128,ga(f,!1),c=_.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)f=a,n=c,f.flags&=14680066,_=f.alternate,_===null?(f.childLanes=0,f.lanes=n,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=_.childLanes,f.lanes=_.lanes,f.child=_.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=_.memoizedProps,f.memoizedState=_.memoizedState,f.updateQueue=_.updateQueue,f.type=_.type,n=_.dependencies,f.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return He(Ze,Ze.current&1|2),r.child}n=n.sibling}f.tail!==null&&qe()>to&&(r.flags|=128,c=!0,ga(f,!1),r.lanes=4194304)}else{if(!c)if(n=Bl(_),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),ga(f,!0),f.tail===null&&f.tailMode==="hidden"&&!_.alternate&&!Xe)return Ot(r),null}else 2*qe()-f.renderingStartTime>to&&a!==1073741824&&(r.flags|=128,c=!0,ga(f,!1),r.lanes=4194304);f.isBackwards?(_.sibling=r.child,r.child=_):(a=f.last,a!==null?a.sibling=_:r.child=_,f.last=_)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=qe(),r.sibling=null,a=Ze.current,He(Ze,c?a&1|2:a&1),r):(Ot(r),null);case 22:case 23:return Dh(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(on&1073741824)!==0&&(Ot(r),r.subtreeFlags&6&&(r.flags|=8192)):Ot(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function EE(n,r){switch(zc(r),r.tag){case 1:return Ht(r.type)&&xl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Js(),Ke($t),Ke(Dt),eh(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Xc(r),null;case 13:if(Ke(Ze),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ks()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Ke(Ze),null;case 4:return Js(),null;case 10:return Kc(r.type._context),null;case 22:case 23:return Dh(),null;case 24:return null;default:return null}}var Jl=!1,Lt=!1,wE=typeof WeakSet=="function"?WeakSet:Set,re=null;function Zs(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){rt(n,r,c)}else a.current=null}function Eh(n,r,a){try{a()}catch(c){rt(n,r,c)}}var tm=!1;function TE(n,r){if(Dc=dr,n=Vf(),Sc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,f=c.focusNode;c=c.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,T=-1,k=-1,F=0,W=0,K=n,q=null;t:for(;;){for(var ee;K!==a||d!==0&&K.nodeType!==3||(T=_+d),K!==f||c!==0&&K.nodeType!==3||(k=_+c),K.nodeType===3&&(_+=K.nodeValue.length),(ee=K.firstChild)!==null;)q=K,K=ee;for(;;){if(K===n)break t;if(q===a&&++F===d&&(T=_),q===f&&++W===c&&(k=_),(ee=K.nextSibling)!==null)break;K=q,q=K.parentNode}K=ee}a=T===-1||k===-1?null:{start:T,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(Vc={focusedElem:n,selectionRange:a},dr=!1,re=r;re!==null;)if(r=re,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,re=n;else for(;re!==null;){r=re;try{var se=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(se!==null){var oe=se.memoizedProps,ot=se.memoizedState,O=r.stateNode,N=O.getSnapshotBeforeUpdate(r.elementType===r.type?oe:In(r.type,oe),ot);O.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var M=r.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Q){rt(r,r.return,Q)}if(n=r.sibling,n!==null){n.return=r.return,re=n;break}re=r.return}return se=tm,tm=!1,se}function ya(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var f=d.destroy;d.destroy=void 0,f!==void 0&&Eh(r,a,f)}d=d.next}while(d!==c)}}function Xl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function wh(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function nm(n){var r=n.alternate;r!==null&&(n.alternate=null,nm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Wn],delete r[oa],delete r[bc],delete r[iE],delete r[sE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function rm(n){return n.tag===5||n.tag===3||n.tag===4}function im(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||rm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Th(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Pl));else if(c!==4&&(n=n.child,n!==null))for(Th(n,r,a),n=n.sibling;n!==null;)Th(n,r,a),n=n.sibling}function Ih(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Ih(n,r,a),n=n.sibling;n!==null;)Ih(n,r,a),n=n.sibling}var At=null,Sn=!1;function ni(n,r,a){for(a=a.child;a!==null;)sm(n,r,a),a=a.sibling}function sm(n,r,a){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(Di,a)}catch{}switch(a.tag){case 5:Lt||Zs(a,r);case 6:var c=At,d=Sn;At=null,ni(n,r,a),At=c,Sn=d,At!==null&&(Sn?(n=At,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):At.removeChild(a.stateNode));break;case 18:At!==null&&(Sn?(n=At,a=a.stateNode,n.nodeType===8?Mc(n.parentNode,a):n.nodeType===1&&Mc(n,a),Wr(n)):Mc(At,a.stateNode));break;case 4:c=At,d=Sn,At=a.stateNode.containerInfo,Sn=!0,ni(n,r,a),At=c,Sn=d;break;case 0:case 11:case 14:case 15:if(!Lt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var f=d,_=f.destroy;f=f.tag,_!==void 0&&((f&2)!==0||(f&4)!==0)&&Eh(a,r,_),d=d.next}while(d!==c)}ni(n,r,a);break;case 1:if(!Lt&&(Zs(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(T){rt(a,r,T)}ni(n,r,a);break;case 21:ni(n,r,a);break;case 22:a.mode&1?(Lt=(c=Lt)||a.memoizedState!==null,ni(n,r,a),Lt=c):ni(n,r,a);break;default:ni(n,r,a)}}function om(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new wE),r.forEach(function(c){var d=xE.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function An(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var f=n,_=r,T=_;e:for(;T!==null;){switch(T.tag){case 5:At=T.stateNode,Sn=!1;break e;case 3:At=T.stateNode.containerInfo,Sn=!0;break e;case 4:At=T.stateNode.containerInfo,Sn=!0;break e}T=T.return}if(At===null)throw Error(t(160));sm(f,_,d),At=null,Sn=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(F){rt(d,r,F)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)am(r,n),r=r.sibling}function am(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(An(r,n),Qn(n),c&4){try{ya(3,n,n.return),Xl(3,n)}catch(oe){rt(n,n.return,oe)}try{ya(5,n,n.return)}catch(oe){rt(n,n.return,oe)}}break;case 1:An(r,n),Qn(n),c&512&&a!==null&&Zs(a,a.return);break;case 5:if(An(r,n),Qn(n),c&512&&a!==null&&Zs(a,a.return),n.flags&32){var d=n.stateNode;try{ki(d,"")}catch(oe){rt(n,n.return,oe)}}if(c&4&&(d=n.stateNode,d!=null)){var f=n.memoizedProps,_=a!==null?a.memoizedProps:f,T=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{T==="input"&&f.type==="radio"&&f.name!=null&&ys(d,f),Es(T,_);var F=Es(T,f);for(_=0;_<k.length;_+=2){var W=k[_],K=k[_+1];W==="style"?vs(d,K):W==="dangerouslySetInnerHTML"?nl(d,K):W==="children"?ki(d,K):ue(d,W,K,F)}switch(T){case"input":Ri(d,f);break;case"textarea":tl(d,f);break;case"select":var q=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!f.multiple;var ee=f.value;ee!=null?yn(d,!!f.multiple,ee,!1):q!==!!f.multiple&&(f.defaultValue!=null?yn(d,!!f.multiple,f.defaultValue,!0):yn(d,!!f.multiple,f.multiple?[]:"",!1))}d[oa]=f}catch(oe){rt(n,n.return,oe)}}break;case 6:if(An(r,n),Qn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,f=n.memoizedProps;try{d.nodeValue=f}catch(oe){rt(n,n.return,oe)}}break;case 3:if(An(r,n),Qn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Wr(r.containerInfo)}catch(oe){rt(n,n.return,oe)}break;case 4:An(r,n),Qn(n);break;case 13:An(r,n),Qn(n),d=n.child,d.flags&8192&&(f=d.memoizedState!==null,d.stateNode.isHidden=f,!f||d.alternate!==null&&d.alternate.memoizedState!==null||(Rh=qe())),c&4&&om(n);break;case 22:if(W=a!==null&&a.memoizedState!==null,n.mode&1?(Lt=(F=Lt)||W,An(r,n),Lt=F):An(r,n),Qn(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!W&&(n.mode&1)!==0)for(re=n,W=n.child;W!==null;){for(K=re=W;re!==null;){switch(q=re,ee=q.child,q.tag){case 0:case 11:case 14:case 15:ya(4,q,q.return);break;case 1:Zs(q,q.return);var se=q.stateNode;if(typeof se.componentWillUnmount=="function"){c=q,a=q.return;try{r=c,se.props=r.memoizedProps,se.state=r.memoizedState,se.componentWillUnmount()}catch(oe){rt(c,a,oe)}}break;case 5:Zs(q,q.return);break;case 22:if(q.memoizedState!==null){cm(K);continue}}ee!==null?(ee.return=q,re=ee):cm(K)}W=W.sibling}e:for(W=null,K=n;;){if(K.tag===5){if(W===null){W=K;try{d=K.stateNode,F?(f=d.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(T=K.stateNode,k=K.memoizedProps.style,_=k!=null&&k.hasOwnProperty("display")?k.display:null,T.style.display=br("display",_))}catch(oe){rt(n,n.return,oe)}}}else if(K.tag===6){if(W===null)try{K.stateNode.nodeValue=F?"":K.memoizedProps}catch(oe){rt(n,n.return,oe)}}else if((K.tag!==22&&K.tag!==23||K.memoizedState===null||K===n)&&K.child!==null){K.child.return=K,K=K.child;continue}if(K===n)break e;for(;K.sibling===null;){if(K.return===null||K.return===n)break e;W===K&&(W=null),K=K.return}W===K&&(W=null),K.sibling.return=K.return,K=K.sibling}}break;case 19:An(r,n),Qn(n),c&4&&om(n);break;case 21:break;default:An(r,n),Qn(n)}}function Qn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(rm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(ki(d,""),c.flags&=-33);var f=im(n);Ih(n,f,d);break;case 3:case 4:var _=c.stateNode.containerInfo,T=im(n);Th(n,T,_);break;default:throw Error(t(161))}}catch(k){rt(n,n.return,k)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function IE(n,r,a){re=n,lm(n)}function lm(n,r,a){for(var c=(n.mode&1)!==0;re!==null;){var d=re,f=d.child;if(d.tag===22&&c){var _=d.memoizedState!==null||Jl;if(!_){var T=d.alternate,k=T!==null&&T.memoizedState!==null||Lt;T=Jl;var F=Lt;if(Jl=_,(Lt=k)&&!F)for(re=d;re!==null;)_=re,k=_.child,_.tag===22&&_.memoizedState!==null?hm(d):k!==null?(k.return=_,re=k):hm(d);for(;f!==null;)re=f,lm(f),f=f.sibling;re=d,Jl=T,Lt=F}um(n)}else(d.subtreeFlags&8772)!==0&&f!==null?(f.return=d,re=f):um(n)}}function um(n){for(;re!==null;){var r=re;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Lt||Xl(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Lt)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:In(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var f=r.updateQueue;f!==null&&cp(r,f,c);break;case 3:var _=r.updateQueue;if(_!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}cp(r,_,a)}break;case 5:var T=r.stateNode;if(a===null&&r.flags&4){a=T;var k=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var F=r.alternate;if(F!==null){var W=F.memoizedState;if(W!==null){var K=W.dehydrated;K!==null&&Wr(K)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Lt||r.flags&512&&wh(r)}catch(q){rt(r,r.return,q)}}if(r===n){re=null;break}if(a=r.sibling,a!==null){a.return=r.return,re=a;break}re=r.return}}function cm(n){for(;re!==null;){var r=re;if(r===n){re=null;break}var a=r.sibling;if(a!==null){a.return=r.return,re=a;break}re=r.return}}function hm(n){for(;re!==null;){var r=re;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{Xl(4,r)}catch(k){rt(r,a,k)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(k){rt(r,d,k)}}var f=r.return;try{wh(r)}catch(k){rt(r,f,k)}break;case 5:var _=r.return;try{wh(r)}catch(k){rt(r,_,k)}}}catch(k){rt(r,r.return,k)}if(r===n){re=null;break}var T=r.sibling;if(T!==null){T.return=r.return,re=T;break}re=r.return}}var SE=Math.ceil,Zl=Ie.ReactCurrentDispatcher,Sh=Ie.ReactCurrentOwner,fn=Ie.ReactCurrentBatchConfig,Le=0,Et=null,ct=null,Rt=0,on=0,eo=Jr(0),pt=0,_a=null,Gi=0,eu=0,Ah=0,va=null,Wt=null,Rh=0,to=1/0,Tr=null,tu=!1,kh=null,ri=null,nu=!1,ii=null,ru=0,Ea=0,Ch=null,iu=-1,su=0;function Bt(){return(Le&6)!==0?qe():iu!==-1?iu:iu=qe()}function si(n){return(n.mode&1)===0?1:(Le&2)!==0&&Rt!==0?Rt&-Rt:aE.transition!==null?(su===0&&(su=zo()),su):(n=xe,n!==0||(n=window.event,n=n===void 0?16:Ns(n.type)),n)}function Rn(n,r,a,c){if(50<Ea)throw Ea=0,Ch=null,Error(t(185));Mi(n,a,c),((Le&2)===0||n!==Et)&&(n===Et&&((Le&2)===0&&(eu|=a),pt===4&&oi(n,Rt)),Kt(n,c),a===1&&Le===0&&(r.mode&1)===0&&(to=qe()+500,Vl&&Zr()))}function Kt(n,r){var a=n.callbackNode;Li(n,r);var c=ur(n,n===Et?Rt:0);if(c===0)a!==null&&Is(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&Is(a),r===1)n.tag===0?oE(fm.bind(null,n)):Xf(fm.bind(null,n)),nE(function(){(Le&6)===0&&Zr()}),a=null;else{switch(Mn(c)){case 1:a=Ss;break;case 4:a=Fo;break;case 16:a=xi;break;case 536870912:a=As;break;default:a=xi}a=wm(a,dm.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function dm(n,r){if(iu=-1,su=0,(Le&6)!==0)throw Error(t(327));var a=n.callbackNode;if(no()&&n.callbackNode!==a)return null;var c=ur(n,n===Et?Rt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=ou(n,c);else{r=c;var d=Le;Le|=2;var f=mm();(Et!==n||Rt!==r)&&(Tr=null,to=qe()+500,Yi(n,r));do try{kE();break}catch(T){pm(n,T)}while(!0);Wc(),Zl.current=f,Le=d,ct!==null?r=0:(Et=null,Rt=0,r=pt)}if(r!==0){if(r===2&&(d=jo(n),d!==0&&(c=d,r=Ph(n,d))),r===1)throw a=_a,Yi(n,0),oi(n,c),Kt(n,qe()),a;if(r===6)oi(n,c);else{if(d=n.current.alternate,(c&30)===0&&!AE(d)&&(r=ou(n,c),r===2&&(f=jo(n),f!==0&&(c=f,r=Ph(n,f))),r===1))throw a=_a,Yi(n,0),oi(n,c),Kt(n,qe()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:Ji(n,Wt,Tr);break;case 3:if(oi(n,c),(c&130023424)===c&&(r=Rh+500-qe(),10<r)){if(ur(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Bt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Lc(Ji.bind(null,n,Wt,Tr),r);break}Ji(n,Wt,Tr);break;case 4:if(oi(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var _=31-Xt(c);f=1<<_,_=r[_],_>d&&(d=_),c&=~f}if(c=d,c=qe()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*SE(c/1960))-c,10<c){n.timeoutHandle=Lc(Ji.bind(null,n,Wt,Tr),c);break}Ji(n,Wt,Tr);break;case 5:Ji(n,Wt,Tr);break;default:throw Error(t(329))}}}return Kt(n,qe()),n.callbackNode===a?dm.bind(null,n):null}function Ph(n,r){var a=va;return n.current.memoizedState.isDehydrated&&(Yi(n,r).flags|=256),n=ou(n,r),n!==2&&(r=Wt,Wt=a,r!==null&&Nh(r)),n}function Nh(n){Wt===null?Wt=n:Wt.push.apply(Wt,n)}function AE(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],f=d.getSnapshot;d=d.value;try{if(!wn(f(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function oi(n,r){for(r&=~Ah,r&=~eu,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-Xt(r),c=1<<a;n[a]=-1,r&=~c}}function fm(n){if((Le&6)!==0)throw Error(t(327));no();var r=ur(n,0);if((r&1)===0)return Kt(n,qe()),null;var a=ou(n,r);if(n.tag!==0&&a===2){var c=jo(n);c!==0&&(r=c,a=Ph(n,c))}if(a===1)throw a=_a,Yi(n,0),oi(n,r),Kt(n,qe()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Ji(n,Wt,Tr),Kt(n,qe()),null}function xh(n,r){var a=Le;Le|=1;try{return n(r)}finally{Le=a,Le===0&&(to=qe()+500,Vl&&Zr())}}function Qi(n){ii!==null&&ii.tag===0&&(Le&6)===0&&no();var r=Le;Le|=1;var a=fn.transition,c=xe;try{if(fn.transition=null,xe=1,n)return n()}finally{xe=c,fn.transition=a,Le=r,(Le&6)===0&&Zr()}}function Dh(){on=eo.current,Ke(eo)}function Yi(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,tE(a)),ct!==null)for(a=ct.return;a!==null;){var c=a;switch(zc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&xl();break;case 3:Js(),Ke($t),Ke(Dt),eh();break;case 5:Xc(c);break;case 4:Js();break;case 13:Ke(Ze);break;case 19:Ke(Ze);break;case 10:Kc(c.type._context);break;case 22:case 23:Dh()}a=a.return}if(Et=n,ct=n=ai(n.current,null),Rt=on=r,pt=0,_a=null,Ah=eu=Gi=0,Wt=va=null,qi!==null){for(r=0;r<qi.length;r++)if(a=qi[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,f=a.pending;if(f!==null){var _=f.next;f.next=d,c.next=_}a.pending=c}qi=null}return n}function pm(n,r){do{var a=ct;try{if(Wc(),$l.current=Kl,Hl){for(var c=et.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Hl=!1}if(Ki=0,vt=ft=et=null,da=!1,fa=0,Sh.current=null,a===null||a.return===null){pt=1,_a=r,ct=null;break}e:{var f=n,_=a.return,T=a,k=r;if(r=Rt,T.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var F=k,W=T,K=W.tag;if((W.mode&1)===0&&(K===0||K===11||K===15)){var q=W.alternate;q?(W.updateQueue=q.updateQueue,W.memoizedState=q.memoizedState,W.lanes=q.lanes):(W.updateQueue=null,W.memoizedState=null)}var ee=Up(_);if(ee!==null){ee.flags&=-257,jp(ee,_,T,f,r),ee.mode&1&&Fp(f,F,r),r=ee,k=F;var se=r.updateQueue;if(se===null){var oe=new Set;oe.add(k),r.updateQueue=oe}else se.add(k);break e}else{if((r&1)===0){Fp(f,F,r),Vh();break e}k=Error(t(426))}}else if(Xe&&T.mode&1){var ot=Up(_);if(ot!==null){(ot.flags&65536)===0&&(ot.flags|=256),jp(ot,_,T,f,r),Hc(Xs(k,T));break e}}f=k=Xs(k,T),pt!==4&&(pt=2),va===null?va=[f]:va.push(f),f=_;do{switch(f.tag){case 3:f.flags|=65536,r&=-r,f.lanes|=r;var O=Mp(f,k,r);up(f,O);break e;case 1:T=k;var N=f.type,M=f.stateNode;if((f.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(ri===null||!ri.has(M)))){f.flags|=65536,r&=-r,f.lanes|=r;var Q=bp(f,T,r);up(f,Q);break e}}f=f.return}while(f!==null)}ym(a)}catch(le){r=le,ct===a&&a!==null&&(ct=a=a.return);continue}break}while(!0)}function mm(){var n=Zl.current;return Zl.current=Kl,n===null?Kl:n}function Vh(){(pt===0||pt===3||pt===2)&&(pt=4),Et===null||(Gi&268435455)===0&&(eu&268435455)===0||oi(Et,Rt)}function ou(n,r){var a=Le;Le|=2;var c=mm();(Et!==n||Rt!==r)&&(Tr=null,Yi(n,r));do try{RE();break}catch(d){pm(n,d)}while(!0);if(Wc(),Le=a,Zl.current=c,ct!==null)throw Error(t(261));return Et=null,Rt=0,pt}function RE(){for(;ct!==null;)gm(ct)}function kE(){for(;ct!==null&&!Ni();)gm(ct)}function gm(n){var r=Em(n.alternate,n,on);n.memoizedProps=n.pendingProps,r===null?ym(n):ct=r,Sh.current=null}function ym(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=vE(a,r,on),a!==null){ct=a;return}}else{if(a=EE(a,r),a!==null){a.flags&=32767,ct=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{pt=6,ct=null;return}}if(r=r.sibling,r!==null){ct=r;return}ct=r=n}while(r!==null);pt===0&&(pt=5)}function Ji(n,r,a){var c=xe,d=fn.transition;try{fn.transition=null,xe=1,CE(n,r,a,c)}finally{fn.transition=d,xe=c}return null}function CE(n,r,a,c){do no();while(ii!==null);if((Le&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var f=a.lanes|a.childLanes;if(vc(n,f),n===Et&&(ct=Et=null,Rt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||nu||(nu=!0,wm(xi,function(){return no(),null})),f=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||f){f=fn.transition,fn.transition=null;var _=xe;xe=1;var T=Le;Le|=4,Sh.current=null,TE(n,a),am(a,n),Gv(Vc),dr=!!Dc,Vc=Dc=null,n.current=a,IE(a),lr(),Le=T,xe=_,fn.transition=f}else n.current=a;if(nu&&(nu=!1,ii=n,ru=d),f=n.pendingLanes,f===0&&(ri=null),fl(a.stateNode),Kt(n,qe()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(tu)throw tu=!1,n=kh,kh=null,n;return(ru&1)!==0&&n.tag!==0&&no(),f=n.pendingLanes,(f&1)!==0?n===Ch?Ea++:(Ea=0,Ch=n):Ea=0,Zr(),null}function no(){if(ii!==null){var n=Mn(ru),r=fn.transition,a=xe;try{if(fn.transition=null,xe=16>n?16:n,ii===null)var c=!1;else{if(n=ii,ii=null,ru=0,(Le&6)!==0)throw Error(t(331));var d=Le;for(Le|=4,re=n.current;re!==null;){var f=re,_=f.child;if((re.flags&16)!==0){var T=f.deletions;if(T!==null){for(var k=0;k<T.length;k++){var F=T[k];for(re=F;re!==null;){var W=re;switch(W.tag){case 0:case 11:case 15:ya(8,W,f)}var K=W.child;if(K!==null)K.return=W,re=K;else for(;re!==null;){W=re;var q=W.sibling,ee=W.return;if(nm(W),W===F){re=null;break}if(q!==null){q.return=ee,re=q;break}re=ee}}}var se=f.alternate;if(se!==null){var oe=se.child;if(oe!==null){se.child=null;do{var ot=oe.sibling;oe.sibling=null,oe=ot}while(oe!==null)}}re=f}}if((f.subtreeFlags&2064)!==0&&_!==null)_.return=f,re=_;else e:for(;re!==null;){if(f=re,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:ya(9,f,f.return)}var O=f.sibling;if(O!==null){O.return=f.return,re=O;break e}re=f.return}}var N=n.current;for(re=N;re!==null;){_=re;var M=_.child;if((_.subtreeFlags&2064)!==0&&M!==null)M.return=_,re=M;else e:for(_=N;re!==null;){if(T=re,(T.flags&2048)!==0)try{switch(T.tag){case 0:case 11:case 15:Xl(9,T)}}catch(le){rt(T,T.return,le)}if(T===_){re=null;break e}var Q=T.sibling;if(Q!==null){Q.return=T.return,re=Q;break e}re=T.return}}if(Le=d,Zr(),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(Di,n)}catch{}c=!0}return c}finally{xe=a,fn.transition=r}}return!1}function _m(n,r,a){r=Xs(a,r),r=Mp(n,r,1),n=ti(n,r,1),r=Bt(),n!==null&&(Mi(n,1,r),Kt(n,r))}function rt(n,r,a){if(n.tag===3)_m(n,n,a);else for(;r!==null;){if(r.tag===3){_m(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ri===null||!ri.has(c))){n=Xs(a,n),n=bp(r,n,1),r=ti(r,n,1),n=Bt(),r!==null&&(Mi(r,1,n),Kt(r,n));break}}r=r.return}}function PE(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=Bt(),n.pingedLanes|=n.suspendedLanes&a,Et===n&&(Rt&a)===a&&(pt===4||pt===3&&(Rt&130023424)===Rt&&500>qe()-Rh?Yi(n,0):Ah|=a),Kt(n,r)}function vm(n,r){r===0&&((n.mode&1)===0?r=1:(r=$r,$r<<=1,($r&130023424)===0&&($r=4194304)));var a=Bt();n=vr(n,r),n!==null&&(Mi(n,r,a),Kt(n,a))}function NE(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),vm(n,a)}function xE(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),vm(n,a)}var Em;Em=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||$t.current)qt=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return qt=!1,_E(n,r,a);qt=(n.flags&131072)!==0}else qt=!1,Xe&&(r.flags&1048576)!==0&&Zf(r,Ll,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Yl(n,r),n=r.pendingProps;var d=Hs(r,Dt.current);Ys(r,a),d=rh(null,r,c,n,d,a);var f=ih();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Ht(c)?(f=!0,Dl(r)):f=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Yc(r),d.updater=Gl,r.stateNode=d,d._reactInternals=r,ch(r,c,n,a),r=ph(null,r,c,!0,f,a)):(r.tag=0,Xe&&f&&jc(r),zt(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(Yl(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=VE(c),n=In(c,n),d){case 0:r=fh(null,r,c,n,a);break e;case 1:r=Wp(null,r,c,n,a);break e;case 11:r=zp(null,r,c,n,a);break e;case 14:r=Bp(null,r,c,In(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:In(c,d),fh(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:In(c,d),Wp(n,r,c,d,a);case 3:e:{if(Kp(r),n===null)throw Error(t(387));c=r.pendingProps,f=r.memoizedState,d=f.element,lp(n,r),zl(r,c,null,a);var _=r.memoizedState;if(c=_.element,f.isDehydrated)if(f={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},r.updateQueue.baseState=f,r.memoizedState=f,r.flags&256){d=Xs(Error(t(423)),r),r=Gp(n,r,c,a,d);break e}else if(c!==d){d=Xs(Error(t(424)),r),r=Gp(n,r,c,a,d);break e}else for(sn=Yr(r.stateNode.containerInfo.firstChild),rn=r,Xe=!0,Tn=null,a=op(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ks(),c===d){r=wr(n,r,a);break e}zt(n,r,c,a)}r=r.child}return r;case 5:return hp(r),n===null&&$c(r),c=r.type,d=r.pendingProps,f=n!==null?n.memoizedProps:null,_=d.children,Oc(c,d)?_=null:f!==null&&Oc(c,f)&&(r.flags|=32),qp(n,r),zt(n,r,_,a),r.child;case 6:return n===null&&$c(r),null;case 13:return Qp(n,r,a);case 4:return Jc(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Gs(r,null,c,a):zt(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:In(c,d),zp(n,r,c,d,a);case 7:return zt(n,r,r.pendingProps,a),r.child;case 8:return zt(n,r,r.pendingProps.children,a),r.child;case 12:return zt(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,f=r.memoizedProps,_=d.value,He(Fl,c._currentValue),c._currentValue=_,f!==null)if(wn(f.value,_)){if(f.children===d.children&&!$t.current){r=wr(n,r,a);break e}}else for(f=r.child,f!==null&&(f.return=r);f!==null;){var T=f.dependencies;if(T!==null){_=f.child;for(var k=T.firstContext;k!==null;){if(k.context===c){if(f.tag===1){k=Er(-1,a&-a),k.tag=2;var F=f.updateQueue;if(F!==null){F=F.shared;var W=F.pending;W===null?k.next=k:(k.next=W.next,W.next=k),F.pending=k}}f.lanes|=a,k=f.alternate,k!==null&&(k.lanes|=a),Gc(f.return,a,r),T.lanes|=a;break}k=k.next}}else if(f.tag===10)_=f.type===r.type?null:f.child;else if(f.tag===18){if(_=f.return,_===null)throw Error(t(341));_.lanes|=a,T=_.alternate,T!==null&&(T.lanes|=a),Gc(_,a,r),_=f.sibling}else _=f.child;if(_!==null)_.return=f;else for(_=f;_!==null;){if(_===r){_=null;break}if(f=_.sibling,f!==null){f.return=_.return,_=f;break}_=_.return}f=_}zt(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,Ys(r,a),d=hn(d),c=c(d),r.flags|=1,zt(n,r,c,a),r.child;case 14:return c=r.type,d=In(c,r.pendingProps),d=In(c.type,d),Bp(n,r,c,d,a);case 15:return $p(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:In(c,d),Yl(n,r),r.tag=1,Ht(c)?(n=!0,Dl(r)):n=!1,Ys(r,a),Op(r,c,d),ch(r,c,d,a),ph(null,r,c,!0,n,a);case 19:return Jp(n,r,a);case 22:return Hp(n,r,a)}throw Error(t(156,r.tag))};function wm(n,r){return bo(n,r)}function DE(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(n,r,a,c){return new DE(n,r,a,c)}function Oh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function VE(n){if(typeof n=="function")return Oh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===V)return 11;if(n===_t)return 14}return 2}function ai(n,r){var a=n.alternate;return a===null?(a=pn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function au(n,r,a,c,d,f){var _=2;if(c=n,typeof n=="function")Oh(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case C:return Xi(a.children,d,f,r);case I:_=8,d|=8;break;case R:return n=pn(12,a,r,d|2),n.elementType=R,n.lanes=f,n;case S:return n=pn(13,a,r,d),n.elementType=S,n.lanes=f,n;case $e:return n=pn(19,a,r,d),n.elementType=$e,n.lanes=f,n;case Je:return lu(a,d,f,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case x:_=10;break e;case P:_=9;break e;case V:_=11;break e;case _t:_=14;break e;case Nt:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=pn(_,a,r,d),r.elementType=n,r.type=c,r.lanes=f,r}function Xi(n,r,a,c){return n=pn(7,n,c,r),n.lanes=a,n}function lu(n,r,a,c){return n=pn(22,n,c,r),n.elementType=Je,n.lanes=a,n.stateNode={isHidden:!1},n}function Lh(n,r,a){return n=pn(6,n,null,r),n.lanes=a,n}function Mh(n,r,a){return r=pn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function OE(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bo(0),this.expirationTimes=Bo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bo(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function bh(n,r,a,c,d,f,_,T,k){return n=new OE(n,r,a,T,k),r===1?(r=1,f===!0&&(r|=8)):r=0,f=pn(3,null,null,r),n.current=f,f.stateNode=n,f.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yc(f),n}function LE(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ne,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function Tm(n){if(!n)return Xr;n=n._reactInternals;e:{if(vn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Ht(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Ht(a))return Yf(n,a,r)}return r}function Im(n,r,a,c,d,f,_,T,k){return n=bh(a,c,!0,n,d,f,_,T,k),n.context=Tm(null),a=n.current,c=Bt(),d=si(a),f=Er(c,d),f.callback=r??null,ti(a,f,d),n.current.lanes=d,Mi(n,d,c),Kt(n,c),n}function uu(n,r,a,c){var d=r.current,f=Bt(),_=si(d);return a=Tm(a),r.context===null?r.context=a:r.pendingContext=a,r=Er(f,_),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=ti(d,r,_),n!==null&&(Rn(n,d,_,f),jl(n,d,_)),_}function cu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Sm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function Fh(n,r){Sm(n,r),(n=n.alternate)&&Sm(n,r)}function ME(){return null}var Am=typeof reportError=="function"?reportError:function(n){console.error(n)};function Uh(n){this._internalRoot=n}hu.prototype.render=Uh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));uu(n,r,null,null)},hu.prototype.unmount=Uh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Qi(function(){uu(null,n,null,null)}),r[mr]=null}};function hu(n){this._internalRoot=n}hu.prototype.unstable_scheduleHydration=function(n){if(n){var r=Wo();n={blockedOn:null,target:n,priority:r};for(var a=0;a<Zt.length&&r!==0&&r<Zt[a].priority;a++);Zt.splice(a,0,n),a===0&&Cs(n)}};function jh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function du(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Rm(){}function bE(n,r,a,c,d){if(d){if(typeof c=="function"){var f=c;c=function(){var F=cu(_);f.call(F)}}var _=Im(r,c,n,0,null,!1,!1,"",Rm);return n._reactRootContainer=_,n[mr]=_.current,ia(n.nodeType===8?n.parentNode:n),Qi(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var T=c;c=function(){var F=cu(k);T.call(F)}}var k=bh(n,0,!1,null,null,!1,!1,"",Rm);return n._reactRootContainer=k,n[mr]=k.current,ia(n.nodeType===8?n.parentNode:n),Qi(function(){uu(r,k,a,c)}),k}function fu(n,r,a,c,d){var f=a._reactRootContainer;if(f){var _=f;if(typeof d=="function"){var T=d;d=function(){var k=cu(_);T.call(k)}}uu(r,_,n,d)}else _=bE(a,r,n,d,c);return cu(_)}Ho=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=be(r.pendingLanes);a!==0&&($o(r,a|1),Kt(r,qe()),(Le&6)===0&&(to=qe()+500,Zr()))}break;case 13:Qi(function(){var c=vr(n,1);if(c!==null){var d=Bt();Rn(c,n,1,d)}}),Fh(n,1)}},Rs=function(n){if(n.tag===13){var r=vr(n,134217728);if(r!==null){var a=Bt();Rn(r,n,134217728,a)}Fh(n,134217728)}},qo=function(n){if(n.tag===13){var r=si(n),a=vr(n,r);if(a!==null){var c=Bt();Rn(a,n,r,c)}Fh(n,r)}},Wo=function(){return xe},Ko=function(n,r){var a=xe;try{return xe=n,r()}finally{xe=a}},sr=function(n,r,a){switch(r){case"input":if(Ri(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=Nl(c);if(!d)throw Error(t(90));Co(c),Ri(c,d)}}}break;case"textarea":tl(n,a);break;case"select":r=a.value,r!=null&&yn(n,!!a.multiple,r,!1)}},il=xh,sl=Qi;var FE={usingClientEntryPoint:!1,Events:[aa,Bs,Nl,Ur,jr,xh]},wa={findFiberByHostInstance:zi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},UE={bundleType:wa.bundleType,version:wa.version,rendererPackageName:wa.rendererPackageName,rendererConfig:wa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ie.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=dl(n),n===null?null:n.stateNode},findFiberByHostInstance:wa.findFiberByHostInstance||ME,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pu.isDisabled&&pu.supportsFiber)try{Di=pu.inject(UE),Jt=pu}catch{}}return Gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=FE,Gt.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jh(r))throw Error(t(200));return LE(n,r,null,a)},Gt.createRoot=function(n,r){if(!jh(n))throw Error(t(299));var a=!1,c="",d=Am;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=bh(n,1,!1,null,null,a,!1,c,d),n[mr]=r.current,ia(n.nodeType===8?n.parentNode:n),new Uh(r)},Gt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=dl(r),n=n===null?null:n.stateNode,n},Gt.flushSync=function(n){return Qi(n)},Gt.hydrate=function(n,r,a){if(!du(r))throw Error(t(200));return fu(null,n,r,!0,a)},Gt.hydrateRoot=function(n,r,a){if(!jh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,f="",_=Am;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),r=Im(r,null,n,1,a??null,d,!1,f,_),n[mr]=r.current,ia(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new hu(r)},Gt.render=function(n,r,a){if(!du(r))throw Error(t(200));return fu(null,n,r,!1,a)},Gt.unmountComponentAtNode=function(n){if(!du(n))throw Error(t(40));return n._reactRootContainer?(Qi(function(){fu(null,null,n,!1,function(){n._reactRootContainer=null,n[mr]=null})}),!0):!1},Gt.unstable_batchedUpdates=xh,Gt.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!du(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return fu(n,r,a,!1,c)},Gt.version="18.3.1-next-f1338f8080-20240426",Gt}var Om;function GE(){if(Om)return $h.exports;Om=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),$h.exports=KE(),$h.exports}var Lm;function QE(){if(Lm)return mu;Lm=1;var i=GE();return mu.createRoot=i.createRoot,mu.hydrateRoot=i.hydrateRoot,mu}var YE=QE();const JE=zE(YE),XE=()=>{};var Mm={};/**
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
 */const oy=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},ZE=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],y=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},ay={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,y=o+2<i.length,v=y?i[o+2]:0,w=u>>2,A=(u&3)<<4|m>>4;let b=(m&15)<<2|v>>6,z=v&63;y||(z=64,h||(b=64)),s.push(t[w],t[A],t[b],t[z])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(oy(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):ZE(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const v=o<i.length?t[i.charAt(o)]:64;++o;const A=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||v==null||A==null)throw new e0;const b=u<<2|m>>4;if(s.push(b),v!==64){const z=m<<4&240|v>>2;if(s.push(z),A!==64){const Z=v<<6&192|A;s.push(Z)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class e0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const t0=function(i){const e=oy(i);return ay.encodeByteArray(e,!0)},Du=function(i){return t0(i).replace(/\./g,"")},ly=function(i){try{return ay.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function n0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const r0=()=>n0().__FIREBASE_DEFAULTS__,i0=()=>{if(typeof process>"u"||typeof Mm>"u")return;const i=Mm.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},s0=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&ly(i[1]);return e&&JSON.parse(e)},Zu=()=>{try{return XE()||r0()||i0()||s0()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},uy=i=>{var e,t;return(t=(e=Zu())==null?void 0:e.emulatorHosts)==null?void 0:t[i]},o0=i=>{const e=uy(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},cy=()=>{var i;return(i=Zu())==null?void 0:i.config},hy=i=>{var e;return(e=Zu())==null?void 0:e[`_${i}`]};/**
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
 */class a0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function l0(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...i};return[Du(JSON.stringify(t)),Du(JSON.stringify(h)),""].join(".")}/**
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
 */function Ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function u0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ut())}function c0(){var e;const i=(e=Zu())==null?void 0:e.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function h0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function d0(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function f0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function p0(){const i=Ut();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function m0(){return!c0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function g0(){try{return typeof indexedDB=="object"}catch{return!1}}function y0(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)==null?void 0:u.message)||"")}}catch(t){e(t)}})}/**
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
 */const _0="FirebaseError";class xr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=_0,Object.setPrototypeOf(this,xr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ba.prototype.create)}}class Ba{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?v0(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new xr(o,m,s)}}function v0(i,e){return i.replace(E0,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const E0=/\{\$([^}]+)}/g;function w0(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function is(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(bm(u)&&bm(h)){if(!is(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function bm(i){return i!==null&&typeof i=="object"}/**
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
 */function $a(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function T0(i,e){const t=new I0(i,e);return t.subscribe.bind(t)}class I0{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");S0(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Wh),o.error===void 0&&(o.error=Wh),o.complete===void 0&&(o.complete=Wh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function S0(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Wh(){}/**
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
 */function Yt(i){return i&&i._delegate?i._delegate:i}/**
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
 */function Ha(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function dy(i){return(await fetch(i,{credentials:"include"})).ok}class ss{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Zi="[DEFAULT]";/**
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
 */class A0{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new a0;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(k0(e))try{this.getOrInitializeService({instanceIdentifier:Zi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Zi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zi){return this.instances.has(e)}getOptions(e=Zi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:R0(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Zi){return this.component?this.component.multipleInstances?e:Zi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function R0(i){return i===Zi?void 0:i}function k0(i){return i.instantiationMode==="EAGER"}/**
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
 */class C0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new A0(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ke;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ke||(ke={}));const P0={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},N0=ke.INFO,x0={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},D0=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=x0[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pd{constructor(e){this.name=e,this._logLevel=N0,this._logHandler=D0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?P0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const V0=(i,e)=>e.some(t=>i instanceof t);let Fm,Um;function O0(){return Fm||(Fm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function L0(){return Um||(Um=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fy=new WeakMap,id=new WeakMap,py=new WeakMap,Kh=new WeakMap,Nd=new WeakMap;function M0(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(pi(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&fy.set(t,i)}).catch(()=>{}),Nd.set(e,i),e}function b0(i){if(id.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});id.set(i,e)}let sd={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return id.get(i);if(e==="objectStoreNames")return i.objectStoreNames||py.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return pi(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function F0(i){sd=i(sd)}function U0(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(Gh(this),e,...t);return py.set(s,e.sort?e.sort():[e]),pi(s)}:L0().includes(i)?function(...e){return i.apply(Gh(this),e),pi(fy.get(this))}:function(...e){return pi(i.apply(Gh(this),e))}}function j0(i){return typeof i=="function"?U0(i):(i instanceof IDBTransaction&&b0(i),V0(i,O0())?new Proxy(i,sd):i)}function pi(i){if(i instanceof IDBRequest)return M0(i);if(Kh.has(i))return Kh.get(i);const e=j0(i);return e!==i&&(Kh.set(i,e),Nd.set(e,i)),e}const Gh=i=>Nd.get(i);function z0(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=pi(h);return s&&h.addEventListener("upgradeneeded",y=>{s(pi(h.result),y.oldVersion,y.newVersion,pi(h.transaction),y)}),t&&h.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),m.then(y=>{u&&y.addEventListener("close",()=>u()),o&&y.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),m}const B0=["get","getKey","getAll","getAllKeys","count"],$0=["put","add","delete","clear"],Qh=new Map;function jm(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Qh.get(e))return Qh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=$0.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||B0.includes(t)))return;const u=async function(h,...m){const y=this.transaction(h,o?"readwrite":"readonly");let v=y.store;return s&&(v=v.index(m.shift())),(await Promise.all([v[t](...m),o&&y.done]))[0]};return Qh.set(e,u),u}F0(i=>({...i,get:(e,t,s)=>jm(e,t)||i.get(e,t,s),has:(e,t)=>!!jm(e,t)||i.has(e,t)}));/**
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
 */class H0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(q0(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function q0(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const od="@firebase/app",zm="0.14.11";/**
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
 */const kr=new Pd("@firebase/app"),W0="@firebase/app-compat",K0="@firebase/analytics-compat",G0="@firebase/analytics",Q0="@firebase/app-check-compat",Y0="@firebase/app-check",J0="@firebase/auth",X0="@firebase/auth-compat",Z0="@firebase/database",ew="@firebase/data-connect",tw="@firebase/database-compat",nw="@firebase/functions",rw="@firebase/functions-compat",iw="@firebase/installations",sw="@firebase/installations-compat",ow="@firebase/messaging",aw="@firebase/messaging-compat",lw="@firebase/performance",uw="@firebase/performance-compat",cw="@firebase/remote-config",hw="@firebase/remote-config-compat",dw="@firebase/storage",fw="@firebase/storage-compat",pw="@firebase/firestore",mw="@firebase/ai",gw="@firebase/firestore-compat",yw="firebase",_w="12.12.0";/**
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
 */const ad="[DEFAULT]",vw={[od]:"fire-core",[W0]:"fire-core-compat",[G0]:"fire-analytics",[K0]:"fire-analytics-compat",[Y0]:"fire-app-check",[Q0]:"fire-app-check-compat",[J0]:"fire-auth",[X0]:"fire-auth-compat",[Z0]:"fire-rtdb",[ew]:"fire-data-connect",[tw]:"fire-rtdb-compat",[nw]:"fire-fn",[rw]:"fire-fn-compat",[iw]:"fire-iid",[sw]:"fire-iid-compat",[ow]:"fire-fcm",[aw]:"fire-fcm-compat",[lw]:"fire-perf",[uw]:"fire-perf-compat",[cw]:"fire-rc",[hw]:"fire-rc-compat",[dw]:"fire-gcs",[fw]:"fire-gcs-compat",[pw]:"fire-fst",[gw]:"fire-fst-compat",[mw]:"fire-vertex","fire-js":"fire-js",[yw]:"fire-js-all"};/**
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
 */const Vu=new Map,Ew=new Map,ld=new Map;function Bm(i,e){try{i.container.addComponent(e)}catch(t){kr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function po(i){const e=i.name;if(ld.has(e))return kr.debug(`There were multiple attempts to register component ${e}.`),!1;ld.set(e,i);for(const t of Vu.values())Bm(t,i);for(const t of Ew.values())Bm(t,i);return!0}function xd(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function kn(i){return i==null?!1:i.settings!==void 0}/**
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
 */const ww={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mi=new Ba("app","Firebase",ww);/**
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
 */class Tw{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ss("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mi.create("app-deleted",{appName:this._name})}}/**
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
 */const To=_w;function my(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s={name:ad,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw mi.create("bad-app-name",{appName:String(o)});if(t||(t=cy()),!t)throw mi.create("no-options");const u=Vu.get(o);if(u){if(is(t,u.options)&&is(s,u.config))return u;throw mi.create("duplicate-app",{appName:o})}const h=new C0(o);for(const y of ld.values())h.addComponent(y);const m=new Tw(t,s,h);return Vu.set(o,m),m}function gy(i=ad){const e=Vu.get(i);if(!e&&i===ad&&cy())return my();if(!e)throw mi.create("no-app",{appName:i});return e}function gi(i,e,t){let s=vw[i]??i;t&&(s+=`-${t}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kr.warn(h.join(" "));return}po(new ss(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Iw="firebase-heartbeat-database",Sw=1,Oa="firebase-heartbeat-store";let Yh=null;function yy(){return Yh||(Yh=z0(Iw,Sw,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Oa)}catch(t){console.warn(t)}}}}).catch(i=>{throw mi.create("idb-open",{originalErrorMessage:i.message})})),Yh}async function Aw(i){try{const t=(await yy()).transaction(Oa),s=await t.objectStore(Oa).get(_y(i));return await t.done,s}catch(e){if(e instanceof xr)kr.warn(e.message);else{const t=mi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kr.warn(t.message)}}}async function $m(i,e){try{const s=(await yy()).transaction(Oa,"readwrite");await s.objectStore(Oa).put(e,_y(i)),await s.done}catch(t){if(t instanceof xr)kr.warn(t.message);else{const s=mi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});kr.warn(s.message)}}}function _y(i){return`${i.name}!${i.options.appId}`}/**
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
 */const Rw=1024,kw=30;class Cw{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Nw(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Hm();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>kw){const h=xw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){kr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Hm(),{heartbeatsToSend:s,unsentEntries:o}=Pw(this._heartbeatsCache.heartbeats),u=Du(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return kr.warn(t),""}}}function Hm(){return new Date().toISOString().substring(0,10)}function Pw(i,e=Rw){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),qm(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),qm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Nw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return g0()?y0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Aw(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return $m(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return $m(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function qm(i){return Du(JSON.stringify({version:2,heartbeats:i})).length}function xw(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
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
 */function Dw(i){po(new ss("platform-logger",e=>new H0(e),"PRIVATE")),po(new ss("heartbeat",e=>new Cw(e),"PRIVATE")),gi(od,zm,i),gi(od,zm,"esm2020"),gi("fire-js","")}Dw("");function vy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Vw=vy,Ey=new Ba("auth","Firebase",vy());/**
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
 */const Ou=new Pd("@firebase/auth");function Ow(i,...e){Ou.logLevel<=ke.WARN&&Ou.warn(`Auth (${To}): ${i}`,...e)}function Tu(i,...e){Ou.logLevel<=ke.ERROR&&Ou.error(`Auth (${To}): ${i}`,...e)}/**
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
 */function nr(i,...e){throw Vd(i,...e)}function Nn(i,...e){return Vd(i,...e)}function Dd(i,e,t){const s={...Vw(),[e]:t};return new Ba("auth","Firebase",s).create(e,{appName:i.name})}function ns(i){return Dd(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Lw(i,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&nr(i,"argument-error"),Dd(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Vd(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return Ey.create(i,...e)}function ge(i,e,...t){if(!i)throw Vd(e,...t)}function Sr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Tu(e),new Error(e)}function Cr(i,e){i||Sr(e)}/**
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
 */function ud(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.href)||""}function Mw(){return Wm()==="http:"||Wm()==="https:"}function Wm(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
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
 */function bw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Mw()||d0()||"connection"in navigator)?navigator.onLine:!0}function Fw(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class qa{constructor(e,t){this.shortDelay=e,this.longDelay=t,Cr(t>e,"Short delay should be less than long delay!"),this.isMobile=u0()||f0()}get(){return bw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Od(i,e){Cr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class wy{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Sr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Sr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Sr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Uw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const jw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],zw=new qa(3e4,6e4);function Ld(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function Io(i,e,t,s,o={}){return Ty(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=$a({key:i.config.apiKey,...h}).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const v={method:e,headers:y,...u};return h0()||(v.referrerPolicy="no-referrer"),i.emulatorConfig&&Ha(i.emulatorConfig.host)&&(v.credentials="include"),wy.fetch()(await Iy(i,i.config.apiHost,t,m),v)})}async function Ty(i,e,t){i._canInitEmulator=!1;const s={...Uw,...e};try{const o=new $w(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw gu(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[y,v]=m.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw gu(i,"credential-already-in-use",h);if(y==="EMAIL_EXISTS")throw gu(i,"email-already-in-use",h);if(y==="USER_DISABLED")throw gu(i,"user-disabled",h);const w=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw Dd(i,w,v);nr(i,w)}}catch(o){if(o instanceof xr)throw o;nr(i,"network-request-failed",{message:String(o)})}}async function Bw(i,e,t,s,o={}){const u=await Io(i,e,t,s,o);return"mfaPendingCredential"in u&&nr(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function Iy(i,e,t,s){const o=`${e}${t}?${s}`,u=i,h=u.config.emulator?Od(i.config,o):`${i.config.apiScheme}://${o}`;return jw.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}class $w{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Nn(this.auth,"network-request-failed")),zw.get())})}}function gu(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Nn(i,e,s);return o.customData._tokenResponse=t,o}/**
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
 */async function Hw(i,e){return Io(i,"POST","/v1/accounts:delete",e)}async function Lu(i,e){return Io(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ca(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qw(i,e=!1){const t=Yt(i),s=await t.getIdToken(e),o=Md(s);ge(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Ca(Jh(o.auth_time)),issuedAtTime:Ca(Jh(o.iat)),expirationTime:Ca(Jh(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Jh(i){return Number(i)*1e3}function Md(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return Tu("JWT malformed, contained fewer than 3 sections"),null;try{const o=ly(t);return o?JSON.parse(o):(Tu("Failed to decode base64 JWT payload"),null)}catch(o){return Tu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Km(i){const e=Md(i);return ge(e,"internal-error"),ge(typeof e.exp<"u","internal-error"),ge(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function La(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof xr&&Ww(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function Ww({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class Kw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class cd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ca(this.lastLoginAt),this.creationTime=Ca(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Mu(i){var A;const e=i.auth,t=await i.getIdToken(),s=await La(i,Lu(e,{idToken:t}));ge(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];i._notifyReloadListener(o);const u=(A=o.providerUserInfo)!=null&&A.length?Sy(o.providerUserInfo):[],h=Qw(i.providerData,u),m=i.isAnonymous,y=!(i.email&&o.passwordHash)&&!(h!=null&&h.length),v=m?y:!1,w={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new cd(o.createdAt,o.lastLoginAt),isAnonymous:v};Object.assign(i,w)}async function Gw(i){const e=Yt(i);await Mu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Qw(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Sy(i){return i.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function Yw(i,e){const t=await Ty(i,{},async()=>{const s=$a({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=await Iy(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:m,body:s};return i.emulatorConfig&&Ha(i.emulatorConfig.host)&&(y.credentials="include"),wy.fetch()(h,y)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Jw(i,e){return Io(i,"POST","/v2/accounts:revokeToken",Ld(i,e))}/**
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
 */class ao{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ge(e.idToken,"internal-error"),ge(typeof e.idToken<"u","internal-error"),ge(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Km(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ge(e.length!==0,"internal-error");const t=Km(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ge(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await Yw(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new ao;return s&&(ge(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(ge(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(ge(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ao,this.toJSON())}_performRefresh(){return Sr("not implemented")}}/**
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
 */function ui(i,e){ge(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Cn{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new Kw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new cd(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await La(this,this.stsTokenManager.getToken(this.auth,e));return ge(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return qw(this,e)}reload(){return Gw(this)}_assign(e){this!==e&&(ge(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Cn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ge(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Mu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(kn(this.auth.app))return Promise.reject(ns(this.auth));const e=await this.getIdToken();return await La(this,Hw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,u=t.phoneNumber??void 0,h=t.photoURL??void 0,m=t.tenantId??void 0,y=t._redirectEventId??void 0,v=t.createdAt??void 0,w=t.lastLoginAt??void 0,{uid:A,emailVerified:b,isAnonymous:z,providerData:Z,stsTokenManager:Y}=t;ge(A&&Y,e,"internal-error");const G=ao.fromJSON(this.name,Y);ge(typeof A=="string",e,"internal-error"),ui(s,e.name),ui(o,e.name),ge(typeof b=="boolean",e,"internal-error"),ge(typeof z=="boolean",e,"internal-error"),ui(u,e.name),ui(h,e.name),ui(m,e.name),ui(y,e.name),ui(v,e.name),ui(w,e.name);const Ee=new Cn({uid:A,auth:e,email:o,emailVerified:b,displayName:s,isAnonymous:z,photoURL:h,phoneNumber:u,tenantId:m,stsTokenManager:G,createdAt:v,lastLoginAt:w});return Z&&Array.isArray(Z)&&(Ee.providerData=Z.map(ie=>({...ie}))),y&&(Ee._redirectEventId=y),Ee}static async _fromIdTokenResponse(e,t,s=!1){const o=new ao;o.updateFromServerResponse(t);const u=new Cn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Mu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ge(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?Sy(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new ao;m.updateFromIdToken(s);const y=new Cn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new cd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(y,v),y}}/**
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
 */const Gm=new Map;function Ar(i){Cr(i instanceof Function,"Expected a class definition");let e=Gm.get(i);return e?(Cr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Gm.set(i,e),e)}/**
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
 */class Ay{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ay.type="NONE";const Qm=Ay;/**
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
 */function Iu(i,e,t){return`firebase:${i}:${e}:${t}`}class lo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Iu(this.userKey,o.apiKey,u),this.fullPersistenceKey=Iu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Lu(this.auth,{idToken:e}).catch(()=>{});return t?Cn._fromGetAccountInfoResponse(this.auth,t,e):null}return Cn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new lo(Ar(Qm),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let u=o[0]||Ar(Qm);const h=Iu(s,e.config.apiKey,e.name);let m=null;for(const v of t)try{const w=await v._get(h);if(w){let A;if(typeof w=="string"){const b=await Lu(e,{idToken:w}).catch(()=>{});if(!b)break;A=await Cn._fromGetAccountInfoResponse(e,b,w)}else A=Cn._fromJSON(e,w);v!==u&&(m=A),u=v;break}}catch{}const y=o.filter(v=>v._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new lo(u,e,s):(u=y[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async v=>{if(v!==u)try{await v._remove(h)}catch{}})),new lo(u,e,s))}}/**
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
 */function Ym(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Py(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ry(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xy(e))return"Blackberry";if(Dy(e))return"Webos";if(ky(e))return"Safari";if((e.includes("chrome/")||Cy(e))&&!e.includes("edge/"))return"Chrome";if(Ny(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Ry(i=Ut()){return/firefox\//i.test(i)}function ky(i=Ut()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cy(i=Ut()){return/crios\//i.test(i)}function Py(i=Ut()){return/iemobile/i.test(i)}function Ny(i=Ut()){return/android/i.test(i)}function xy(i=Ut()){return/blackberry/i.test(i)}function Dy(i=Ut()){return/webos/i.test(i)}function bd(i=Ut()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function Xw(i=Ut()){var e;return bd(i)&&!!((e=window.navigator)!=null&&e.standalone)}function Zw(){return p0()&&document.documentMode===10}function Vy(i=Ut()){return bd(i)||Ny(i)||Dy(i)||xy(i)||/windows phone/i.test(i)||Py(i)}/**
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
 */function Oy(i,e=[]){let t;switch(i){case"Browser":t=Ym(Ut());break;case"Worker":t=`${Ym(Ut())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${To}/${s}`}/**
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
 */class eT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const y=e(u);h(y)}catch(y){m(y)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function tT(i,e={}){return Io(i,"GET","/v2/passwordPolicy",Ld(i,e))}/**
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
 */const nT=6;class rT{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??nT,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class iT{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jm(this),this.idTokenSubscription=new Jm(this),this.beforeStateQueue=new eT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ey,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ar(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await lo.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Lu(this,{idToken:e}),s=await Cn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(kn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(u=this.redirectUser)==null?void 0:u._redirectEventId,m=s==null?void 0:s._redirectEventId,y=await this.tryRedirectSignIn(e);(!h||h===m)&&(y!=null&&y.user)&&(s=y.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(h){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ge(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Mu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Fw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(kn(this.app))return Promise.reject(ns(this));const t=e?Yt(e):null;return t&&ge(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ge(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return kn(this.app)?Promise.reject(ns(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return kn(this.app)?Promise.reject(ns(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ar(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await tT(this),t=new rT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ba("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await Jw(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ar(e)||this._popupRedirectResolver;ge(t,this,"argument-error"),this.redirectPersistenceManager=await lo.create(this,[Ar(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(ge(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,s,o);return()=>{h=!0,y()}}else{const y=e.addObserver(t);return()=>{h=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ge(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Oy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(kn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Ow(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ec(i){return Yt(i)}class Jm{constructor(e){this.auth=e,this.observer=null,this.addObserver=T0(t=>this.observer=t)}get next(){return ge(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Fd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function sT(i){Fd=i}function oT(i){return Fd.loadJS(i)}function aT(){return Fd.gapiScript}function lT(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
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
 */function uT(i,e){const t=xd(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(is(u,e??{}))return o;nr(o,"already-initialized")}return t.initialize({options:e})}function cT(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Ar);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function hT(i,e,t){const s=ec(i);ge(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=Ly(e),{host:h,port:m}=dT(e),y=m===null?"":`:${m}`,v={url:`${u}//${h}${y}/`},w=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){ge(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ge(is(v,s.config.emulator)&&is(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=v,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,Ha(h)?dy(`${u}//${h}${y}`):fT()}function Ly(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function dT(i){const e=Ly(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:Xm(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:Xm(h)}}}function Xm(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function fT(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class My{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Sr("not implemented")}_getIdTokenResponse(e){return Sr("not implemented")}_linkToIdToken(e,t){return Sr("not implemented")}_getReauthenticationResolver(e){return Sr("not implemented")}}/**
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
 */async function uo(i,e){return Bw(i,"POST","/v1/accounts:signInWithIdp",Ld(i,e))}/**
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
 */const pT="http://localhost";class os extends My{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new os(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):nr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=t;if(!s||!o)return null;const h=new os(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return uo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,uo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,uo(e,t)}buildRequest(){const e={requestUri:pT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=$a(t)}return e}}/**
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
 */class Ud{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Wa extends Ud{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ci extends Wa{constructor(){super("facebook.com")}static credential(e){return os._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ci.credentialFromTaggedObject(e)}static credentialFromError(e){return ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ci.credential(e.oauthAccessToken)}catch{return null}}}ci.FACEBOOK_SIGN_IN_METHOD="facebook.com";ci.PROVIDER_ID="facebook.com";/**
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
 */class Ir extends Wa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return os._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Ir.credential(t,s)}catch{return null}}}Ir.GOOGLE_SIGN_IN_METHOD="google.com";Ir.PROVIDER_ID="google.com";/**
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
 */class hi extends Wa{constructor(){super("github.com")}static credential(e){return os._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hi.credentialFromTaggedObject(e)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hi.credential(e.oauthAccessToken)}catch{return null}}}hi.GITHUB_SIGN_IN_METHOD="github.com";hi.PROVIDER_ID="github.com";/**
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
 */class di extends Wa{constructor(){super("twitter.com")}static credential(e,t){return os._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return di.credential(t,s)}catch{return null}}}di.TWITTER_SIGN_IN_METHOD="twitter.com";di.PROVIDER_ID="twitter.com";/**
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
 */class mo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await Cn._fromIdTokenResponse(e,s,o),h=Zm(s);return new mo({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Zm(s);return new mo({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Zm(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class bu extends xr{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,bu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new bu(e,t,s,o)}}function by(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?bu._fromErrorAndOperation(i,u,e,s):u})}async function mT(i,e,t=!1){const s=await La(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return mo._forOperation(i,"link",s)}/**
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
 */async function gT(i,e,t=!1){const{auth:s}=i;if(kn(s.app))return Promise.reject(ns(s));const o="reauthenticate";try{const u=await La(i,by(s,o,e,i),t);ge(u.idToken,s,"internal-error");const h=Md(u.idToken);ge(h,s,"internal-error");const{sub:m}=h;return ge(i.uid===m,s,"user-mismatch"),mo._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&nr(s,"user-mismatch"),u}}/**
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
 */async function yT(i,e,t=!1){if(kn(i.app))return Promise.reject(ns(i));const s="signIn",o=await by(i,s,e),u=await mo._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}/**
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
 */function _T(i,e){return Yt(i).setPersistence(e)}function vT(i,e,t,s){return Yt(i).onIdTokenChanged(e,t,s)}function ET(i,e,t){return Yt(i).beforeAuthStateChanged(e,t)}function wT(i,e,t,s){return Yt(i).onAuthStateChanged(e,t,s)}function Fy(i){return Yt(i).signOut()}const Fu="__sak";/**
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
 */class Uy{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Fu,"1"),this.storage.removeItem(Fu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const TT=1e3,IT=10;class jy extends Uy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Vy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,y)=>{this.notifyListeners(h,y)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);Zw()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,IT):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},TT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}jy.type="LOCAL";const zy=jy;/**
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
 */class By extends Uy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}By.type="SESSION";const $y=By;/**
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
 */function ST(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class tc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new tc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async v=>v(t.origin,u)),y=await ST(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:y})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}tc.receivers=[];/**
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
 */function jd(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class AT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,y)=>{const v=jd("",20);o.port1.start();const w=setTimeout(()=>{y(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(A){const b=A;if(b.data.eventId===v)switch(b.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(b.data.response);break;default:clearTimeout(w),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function Jn(){return window}function RT(i){Jn().location.href=i}/**
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
 */function Hy(){return typeof Jn().WorkerGlobalScope<"u"&&typeof Jn().importScripts=="function"}async function kT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function CT(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)==null?void 0:i.controller)||null}function PT(){return Hy()?self:null}/**
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
 */const qy="firebaseLocalStorageDb",NT=1,Uu="firebaseLocalStorage",Wy="fbase_key";class Ka{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function nc(i,e){return i.transaction([Uu],e?"readwrite":"readonly").objectStore(Uu)}function xT(){const i=indexedDB.deleteDatabase(qy);return new Ka(i).toPromise()}function hd(){const i=indexedDB.open(qy,NT);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Uu,{keyPath:Wy})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Uu)?e(s):(s.close(),await xT(),e(await hd()))})})}async function eg(i,e,t){const s=nc(i,!0).put({[Wy]:e,value:t});return new Ka(s).toPromise()}async function DT(i,e){const t=nc(i,!1).get(e),s=await new Ka(t).toPromise();return s===void 0?null:s.value}function tg(i,e){const t=nc(i,!0).delete(e);return new Ka(t).toPromise()}const VT=800,OT=3;class Ky{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>OT)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tc._getInstance(PT()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await kT(),!this.activeServiceWorker)return;this.sender=new AT(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||CT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hd();return await eg(e,Fu,"1"),await tg(e,Fu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>eg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>DT(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>tg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=nc(o,!1).getAll();return new Ka(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),VT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ky.type="LOCAL";const LT=Ky;new qa(3e4,6e4);/**
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
 */function Gy(i,e){return e?Ar(e):(ge(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class zd extends My{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return uo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return uo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return uo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function MT(i){return yT(i.auth,new zd(i),i.bypassAuthState)}function bT(i){const{auth:e,user:t}=i;return ge(t,e,"internal-error"),gT(t,new zd(i),i.bypassAuthState)}async function FT(i){const{auth:e,user:t}=i;return ge(t,e,"internal-error"),mT(t,new zd(i),i.bypassAuthState)}/**
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
 */class Qy{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const y={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(y))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return MT;case"linkViaPopup":case"linkViaRedirect":return FT;case"reauthViaPopup":case"reauthViaRedirect":return bT;default:nr(this.auth,"internal-error")}}resolve(e){Cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const UT=new qa(2e3,1e4);async function jT(i,e,t){if(kn(i.app))return Promise.reject(Nn(i,"operation-not-supported-in-this-environment"));const s=ec(i);Lw(i,e,Ud);const o=Gy(s,t);return new es(s,"signInViaPopup",e,o).executeNotNull()}class es extends Qy{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,es.currentPopupAction&&es.currentPopupAction.cancel(),es.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ge(e,this.auth,"internal-error"),e}async onExecution(){Cr(this.filter.length===1,"Popup operations only handle one event");const e=jd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,es.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,UT.get())};e()}}es.currentPopupAction=null;/**
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
 */const zT="pendingRedirect",Su=new Map;class BT extends Qy{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Su.get(this.auth._key());if(!e){try{const s=await $T(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Su.set(this.auth._key(),e)}return this.bypassAuthState||Su.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $T(i,e){const t=WT(e),s=qT(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function HT(i,e){Su.set(i._key(),e)}function qT(i){return Ar(i._redirectPersistence)}function WT(i){return Iu(zT,i.config.apiKey,i.name)}async function KT(i,e,t=!1){if(kn(i.app))return Promise.reject(ns(i));const s=ec(i),o=Gy(s,e),h=await new BT(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const GT=600*1e3;class QT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!YT(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Yy(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(Nn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=GT&&this.cachedEventUids.clear(),this.cachedEventUids.has(ng(e))}saveEventToCache(e){this.cachedEventUids.add(ng(e)),this.lastProcessedEventTime=Date.now()}}function ng(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Yy({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function YT(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yy(i);default:return!1}}/**
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
 */async function JT(i,e={}){return Io(i,"GET","/v1/projects",e)}/**
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
 */const XT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ZT=/^https?/;async function eI(i){if(i.config.emulator)return;const{authorizedDomains:e}=await JT(i);for(const t of e)try{if(tI(t))return}catch{}nr(i,"unauthorized-domain")}function tI(i){const e=ud(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!ZT.test(t))return!1;if(XT.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const nI=new qa(3e4,6e4);function rg(){const i=Jn().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function rI(i){return new Promise((e,t)=>{var o,u,h;function s(){rg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rg(),t(Nn(i,"network-request-failed"))},timeout:nI.get()})}if((u=(o=Jn().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((h=Jn().gapi)!=null&&h.load)s();else{const m=lT("iframefcb");return Jn()[m]=()=>{gapi.load?s():t(Nn(i,"network-request-failed"))},oT(`${aT()}?onload=${m}`).catch(y=>t(y))}}).catch(e=>{throw Au=null,e})}let Au=null;function iI(i){return Au=Au||rI(i),Au}/**
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
 */const sI=new qa(5e3,15e3),oI="__/auth/iframe",aI="emulator/auth/iframe",lI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cI(i){const e=i.config;ge(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Od(e,aI):`https://${i.config.authDomain}/${oI}`,s={apiKey:e.apiKey,appName:i.name,v:To},o=uI.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${$a(s).slice(1)}`}async function hI(i){const e=await iI(i),t=Jn().gapi;return ge(t,i,"internal-error"),e.open({where:document.body,url:cI(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lI,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Nn(i,"network-request-failed"),m=Jn().setTimeout(()=>{u(h)},sI.get());function y(){Jn().clearTimeout(m),o(s)}s.ping(y).then(y,()=>{u(h)})}))}/**
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
 */const dI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fI=500,pI=600,mI="_blank",gI="http://localhost";class ig{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yI(i,e,t,s=fI,o=pI){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const y={...dI,width:s.toString(),height:o.toString(),top:u,left:h},v=Ut().toLowerCase();t&&(m=Cy(v)?mI:t),Ry(v)&&(e=e||gI,y.scrollbars="yes");const w=Object.entries(y).reduce((b,[z,Z])=>`${b}${z}=${Z},`,"");if(Xw(v)&&m!=="_self")return _I(e||"",m),new ig(null);const A=window.open(e||"",m,w);ge(A,i,"popup-blocked");try{A.focus()}catch{}return new ig(A)}function _I(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const vI="__/auth/handler",EI="emulator/auth/handler",wI=encodeURIComponent("fac");async function sg(i,e,t,s,o,u){ge(i.config.authDomain,i,"auth-domain-config-required"),ge(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:To,eventId:o};if(e instanceof Ud){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",w0(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,A]of Object.entries({}))h[w]=A}if(e instanceof Wa){const w=e.getScopes().filter(A=>A!=="");w.length>0&&(h.scopes=w.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const y=await i._getAppCheckToken(),v=y?`#${wI}=${encodeURIComponent(y)}`:"";return`${TI(i)}?${$a(m).slice(1)}${v}`}function TI({config:i}){return i.emulator?Od(i,EI):`https://${i.authDomain}/${vI}`}/**
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
 */const Xh="webStorageSupport";class II{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$y,this._completeRedirectFn=KT,this._overrideRedirectResult=HT}async _openPopup(e,t,s,o){var h;Cr((h=this.eventManagers[e._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const u=await sg(e,t,s,ud(),o);return yI(e,u,jd())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await sg(e,t,s,ud(),o);return RT(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Cr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await hI(e),s=new QT(e);return t.register("authEvent",o=>(ge(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Xh,{type:Xh},o=>{var h;const u=(h=o==null?void 0:o[0])==null?void 0:h[Xh];u!==void 0&&t(!!u),nr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=eI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Vy()||ky()||bd()}}const SI=II;var og="@firebase/auth",ag="1.13.0";/**
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
 */class AI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ge(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function RI(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function kI(i){po(new ss("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;ge(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Oy(i)},v=new iT(s,o,u,y);return cT(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),po(new ss("auth-internal",e=>{const t=ec(e.getProvider("auth").getImmediate());return(s=>new AI(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),gi(og,ag,RI(i)),gi(og,ag,"esm2020")}/**
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
 */const CI=300,PI=hy("authIdTokenMaxAge")||CI;let lg=null;const NI=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>PI)return;const o=t==null?void 0:t.token;lg!==o&&(lg=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function xI(i=gy()){const e=xd(i,"auth");if(e.isInitialized())return e.getImmediate();const t=uT(i,{popupRedirectResolver:SI,persistence:[LT,zy,$y]}),s=hy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=NI(u.toString());ET(t,h,()=>h(t.currentUser)),vT(t,m=>h(m))}}const o=uy("auth");return o&&hT(t,`http://${o}`),t}function DI(){var i;return((i=document.getElementsByTagName("head"))==null?void 0:i[0])??document}sT({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=Nn("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",DI().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});kI("Browser");var ug=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yi,Jy;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,I){function R(){}R.prototype=I.prototype,C.F=I.prototype,C.prototype=new R,C.prototype.constructor=C,C.D=function(x,P,V){for(var S=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)S[$e-2]=arguments[$e];return I.prototype[P].apply(x,S)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(C,I,R){R||(R=0);const x=Array(16);if(typeof I=="string")for(var P=0;P<16;++P)x[P]=I.charCodeAt(R++)|I.charCodeAt(R++)<<8|I.charCodeAt(R++)<<16|I.charCodeAt(R++)<<24;else for(P=0;P<16;++P)x[P]=I[R++]|I[R++]<<8|I[R++]<<16|I[R++]<<24;I=C.g[0],R=C.g[1],P=C.g[2];let V=C.g[3],S;S=I+(V^R&(P^V))+x[0]+3614090360&4294967295,I=R+(S<<7&4294967295|S>>>25),S=V+(P^I&(R^P))+x[1]+3905402710&4294967295,V=I+(S<<12&4294967295|S>>>20),S=P+(R^V&(I^R))+x[2]+606105819&4294967295,P=V+(S<<17&4294967295|S>>>15),S=R+(I^P&(V^I))+x[3]+3250441966&4294967295,R=P+(S<<22&4294967295|S>>>10),S=I+(V^R&(P^V))+x[4]+4118548399&4294967295,I=R+(S<<7&4294967295|S>>>25),S=V+(P^I&(R^P))+x[5]+1200080426&4294967295,V=I+(S<<12&4294967295|S>>>20),S=P+(R^V&(I^R))+x[6]+2821735955&4294967295,P=V+(S<<17&4294967295|S>>>15),S=R+(I^P&(V^I))+x[7]+4249261313&4294967295,R=P+(S<<22&4294967295|S>>>10),S=I+(V^R&(P^V))+x[8]+1770035416&4294967295,I=R+(S<<7&4294967295|S>>>25),S=V+(P^I&(R^P))+x[9]+2336552879&4294967295,V=I+(S<<12&4294967295|S>>>20),S=P+(R^V&(I^R))+x[10]+4294925233&4294967295,P=V+(S<<17&4294967295|S>>>15),S=R+(I^P&(V^I))+x[11]+2304563134&4294967295,R=P+(S<<22&4294967295|S>>>10),S=I+(V^R&(P^V))+x[12]+1804603682&4294967295,I=R+(S<<7&4294967295|S>>>25),S=V+(P^I&(R^P))+x[13]+4254626195&4294967295,V=I+(S<<12&4294967295|S>>>20),S=P+(R^V&(I^R))+x[14]+2792965006&4294967295,P=V+(S<<17&4294967295|S>>>15),S=R+(I^P&(V^I))+x[15]+1236535329&4294967295,R=P+(S<<22&4294967295|S>>>10),S=I+(P^V&(R^P))+x[1]+4129170786&4294967295,I=R+(S<<5&4294967295|S>>>27),S=V+(R^P&(I^R))+x[6]+3225465664&4294967295,V=I+(S<<9&4294967295|S>>>23),S=P+(I^R&(V^I))+x[11]+643717713&4294967295,P=V+(S<<14&4294967295|S>>>18),S=R+(V^I&(P^V))+x[0]+3921069994&4294967295,R=P+(S<<20&4294967295|S>>>12),S=I+(P^V&(R^P))+x[5]+3593408605&4294967295,I=R+(S<<5&4294967295|S>>>27),S=V+(R^P&(I^R))+x[10]+38016083&4294967295,V=I+(S<<9&4294967295|S>>>23),S=P+(I^R&(V^I))+x[15]+3634488961&4294967295,P=V+(S<<14&4294967295|S>>>18),S=R+(V^I&(P^V))+x[4]+3889429448&4294967295,R=P+(S<<20&4294967295|S>>>12),S=I+(P^V&(R^P))+x[9]+568446438&4294967295,I=R+(S<<5&4294967295|S>>>27),S=V+(R^P&(I^R))+x[14]+3275163606&4294967295,V=I+(S<<9&4294967295|S>>>23),S=P+(I^R&(V^I))+x[3]+4107603335&4294967295,P=V+(S<<14&4294967295|S>>>18),S=R+(V^I&(P^V))+x[8]+1163531501&4294967295,R=P+(S<<20&4294967295|S>>>12),S=I+(P^V&(R^P))+x[13]+2850285829&4294967295,I=R+(S<<5&4294967295|S>>>27),S=V+(R^P&(I^R))+x[2]+4243563512&4294967295,V=I+(S<<9&4294967295|S>>>23),S=P+(I^R&(V^I))+x[7]+1735328473&4294967295,P=V+(S<<14&4294967295|S>>>18),S=R+(V^I&(P^V))+x[12]+2368359562&4294967295,R=P+(S<<20&4294967295|S>>>12),S=I+(R^P^V)+x[5]+4294588738&4294967295,I=R+(S<<4&4294967295|S>>>28),S=V+(I^R^P)+x[8]+2272392833&4294967295,V=I+(S<<11&4294967295|S>>>21),S=P+(V^I^R)+x[11]+1839030562&4294967295,P=V+(S<<16&4294967295|S>>>16),S=R+(P^V^I)+x[14]+4259657740&4294967295,R=P+(S<<23&4294967295|S>>>9),S=I+(R^P^V)+x[1]+2763975236&4294967295,I=R+(S<<4&4294967295|S>>>28),S=V+(I^R^P)+x[4]+1272893353&4294967295,V=I+(S<<11&4294967295|S>>>21),S=P+(V^I^R)+x[7]+4139469664&4294967295,P=V+(S<<16&4294967295|S>>>16),S=R+(P^V^I)+x[10]+3200236656&4294967295,R=P+(S<<23&4294967295|S>>>9),S=I+(R^P^V)+x[13]+681279174&4294967295,I=R+(S<<4&4294967295|S>>>28),S=V+(I^R^P)+x[0]+3936430074&4294967295,V=I+(S<<11&4294967295|S>>>21),S=P+(V^I^R)+x[3]+3572445317&4294967295,P=V+(S<<16&4294967295|S>>>16),S=R+(P^V^I)+x[6]+76029189&4294967295,R=P+(S<<23&4294967295|S>>>9),S=I+(R^P^V)+x[9]+3654602809&4294967295,I=R+(S<<4&4294967295|S>>>28),S=V+(I^R^P)+x[12]+3873151461&4294967295,V=I+(S<<11&4294967295|S>>>21),S=P+(V^I^R)+x[15]+530742520&4294967295,P=V+(S<<16&4294967295|S>>>16),S=R+(P^V^I)+x[2]+3299628645&4294967295,R=P+(S<<23&4294967295|S>>>9),S=I+(P^(R|~V))+x[0]+4096336452&4294967295,I=R+(S<<6&4294967295|S>>>26),S=V+(R^(I|~P))+x[7]+1126891415&4294967295,V=I+(S<<10&4294967295|S>>>22),S=P+(I^(V|~R))+x[14]+2878612391&4294967295,P=V+(S<<15&4294967295|S>>>17),S=R+(V^(P|~I))+x[5]+4237533241&4294967295,R=P+(S<<21&4294967295|S>>>11),S=I+(P^(R|~V))+x[12]+1700485571&4294967295,I=R+(S<<6&4294967295|S>>>26),S=V+(R^(I|~P))+x[3]+2399980690&4294967295,V=I+(S<<10&4294967295|S>>>22),S=P+(I^(V|~R))+x[10]+4293915773&4294967295,P=V+(S<<15&4294967295|S>>>17),S=R+(V^(P|~I))+x[1]+2240044497&4294967295,R=P+(S<<21&4294967295|S>>>11),S=I+(P^(R|~V))+x[8]+1873313359&4294967295,I=R+(S<<6&4294967295|S>>>26),S=V+(R^(I|~P))+x[15]+4264355552&4294967295,V=I+(S<<10&4294967295|S>>>22),S=P+(I^(V|~R))+x[6]+2734768916&4294967295,P=V+(S<<15&4294967295|S>>>17),S=R+(V^(P|~I))+x[13]+1309151649&4294967295,R=P+(S<<21&4294967295|S>>>11),S=I+(P^(R|~V))+x[4]+4149444226&4294967295,I=R+(S<<6&4294967295|S>>>26),S=V+(R^(I|~P))+x[11]+3174756917&4294967295,V=I+(S<<10&4294967295|S>>>22),S=P+(I^(V|~R))+x[2]+718787259&4294967295,P=V+(S<<15&4294967295|S>>>17),S=R+(V^(P|~I))+x[9]+3951481745&4294967295,C.g[0]=C.g[0]+I&4294967295,C.g[1]=C.g[1]+(P+(S<<21&4294967295|S>>>11))&4294967295,C.g[2]=C.g[2]+P&4294967295,C.g[3]=C.g[3]+V&4294967295}s.prototype.v=function(C,I){I===void 0&&(I=C.length);const R=I-this.blockSize,x=this.C;let P=this.h,V=0;for(;V<I;){if(P==0)for(;V<=R;)o(this,C,V),V+=this.blockSize;if(typeof C=="string"){for(;V<I;)if(x[P++]=C.charCodeAt(V++),P==this.blockSize){o(this,x),P=0;break}}else for(;V<I;)if(x[P++]=C[V++],P==this.blockSize){o(this,x),P=0;break}}this.h=P,this.o+=I},s.prototype.A=function(){var C=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);C[0]=128;for(var I=1;I<C.length-8;++I)C[I]=0;I=this.o*8;for(var R=C.length-8;R<C.length;++R)C[R]=I&255,I/=256;for(this.v(C),C=Array(16),I=0,R=0;R<4;++R)for(let x=0;x<32;x+=8)C[I++]=this.g[R]>>>x&255;return C};function u(C,I){var R=m;return Object.prototype.hasOwnProperty.call(R,C)?R[C]:R[C]=I(C)}function h(C,I){this.h=I;const R=[];let x=!0;for(let P=C.length-1;P>=0;P--){const V=C[P]|0;x&&V==I||(R[P]=V,x=!1)}this.g=R}var m={};function y(C){return-128<=C&&C<128?u(C,function(I){return new h([I|0],I<0?-1:0)}):new h([C|0],C<0?-1:0)}function v(C){if(isNaN(C)||!isFinite(C))return A;if(C<0)return G(v(-C));const I=[];let R=1;for(let x=0;C>=R;x++)I[x]=C/R|0,R*=4294967296;return new h(I,0)}function w(C,I){if(C.length==0)throw Error("number format error: empty string");if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(C.charAt(0)=="-")return G(w(C.substring(1),I));if(C.indexOf("-")>=0)throw Error('number format error: interior "-" character');const R=v(Math.pow(I,8));let x=A;for(let V=0;V<C.length;V+=8){var P=Math.min(8,C.length-V);const S=parseInt(C.substring(V,V+P),I);P<8?(P=v(Math.pow(I,P)),x=x.j(P).add(v(S))):(x=x.j(R),x=x.add(v(S)))}return x}var A=y(0),b=y(1),z=y(16777216);i=h.prototype,i.m=function(){if(Y(this))return-G(this).m();let C=0,I=1;for(let R=0;R<this.g.length;R++){const x=this.i(R);C+=(x>=0?x:4294967296+x)*I,I*=4294967296}return C},i.toString=function(C){if(C=C||10,C<2||36<C)throw Error("radix out of range: "+C);if(Z(this))return"0";if(Y(this))return"-"+G(this).toString(C);const I=v(Math.pow(C,6));var R=this;let x="";for(;;){const P=Ie(R,I).g;R=Ee(R,P.j(I));let V=((R.g.length>0?R.g[0]:R.h)>>>0).toString(C);if(R=P,Z(R))return V+x;for(;V.length<6;)V="0"+V;x=V+x}},i.i=function(C){return C<0?0:C<this.g.length?this.g[C]:this.h};function Z(C){if(C.h!=0)return!1;for(let I=0;I<C.g.length;I++)if(C.g[I]!=0)return!1;return!0}function Y(C){return C.h==-1}i.l=function(C){return C=Ee(this,C),Y(C)?-1:Z(C)?0:1};function G(C){const I=C.g.length,R=[];for(let x=0;x<I;x++)R[x]=~C.g[x];return new h(R,~C.h).add(b)}i.abs=function(){return Y(this)?G(this):this},i.add=function(C){const I=Math.max(this.g.length,C.g.length),R=[];let x=0;for(let P=0;P<=I;P++){let V=x+(this.i(P)&65535)+(C.i(P)&65535),S=(V>>>16)+(this.i(P)>>>16)+(C.i(P)>>>16);x=S>>>16,V&=65535,S&=65535,R[P]=S<<16|V}return new h(R,R[R.length-1]&-2147483648?-1:0)};function Ee(C,I){return C.add(G(I))}i.j=function(C){if(Z(this)||Z(C))return A;if(Y(this))return Y(C)?G(this).j(G(C)):G(G(this).j(C));if(Y(C))return G(this.j(G(C)));if(this.l(z)<0&&C.l(z)<0)return v(this.m()*C.m());const I=this.g.length+C.g.length,R=[];for(var x=0;x<2*I;x++)R[x]=0;for(x=0;x<this.g.length;x++)for(let P=0;P<C.g.length;P++){const V=this.i(x)>>>16,S=this.i(x)&65535,$e=C.i(P)>>>16,_t=C.i(P)&65535;R[2*x+2*P]+=S*_t,ie(R,2*x+2*P),R[2*x+2*P+1]+=V*_t,ie(R,2*x+2*P+1),R[2*x+2*P+1]+=S*$e,ie(R,2*x+2*P+1),R[2*x+2*P+2]+=V*$e,ie(R,2*x+2*P+2)}for(C=0;C<I;C++)R[C]=R[2*C+1]<<16|R[2*C];for(C=I;C<2*I;C++)R[C]=0;return new h(R,0)};function ie(C,I){for(;(C[I]&65535)!=C[I];)C[I+1]+=C[I]>>>16,C[I]&=65535,I++}function ue(C,I){this.g=C,this.h=I}function Ie(C,I){if(Z(I))throw Error("division by zero");if(Z(C))return new ue(A,A);if(Y(C))return I=Ie(G(C),I),new ue(G(I.g),G(I.h));if(Y(I))return I=Ie(C,G(I)),new ue(G(I.g),I.h);if(C.g.length>30){if(Y(C)||Y(I))throw Error("slowDivide_ only works with positive integers.");for(var R=b,x=I;x.l(C)<=0;)R=De(R),x=De(x);var P=Ne(R,1),V=Ne(x,1);for(x=Ne(x,2),R=Ne(R,2);!Z(x);){var S=V.add(x);S.l(C)<=0&&(P=P.add(R),V=S),x=Ne(x,1),R=Ne(R,1)}return I=Ee(C,P.j(I)),new ue(P,I)}for(P=A;C.l(I)>=0;){for(R=Math.max(1,Math.floor(C.m()/I.m())),x=Math.ceil(Math.log(R)/Math.LN2),x=x<=48?1:Math.pow(2,x-48),V=v(R),S=V.j(I);Y(S)||S.l(C)>0;)R-=x,V=v(R),S=V.j(I);Z(V)&&(V=b),P=P.add(V),C=Ee(C,S)}return new ue(P,C)}i.B=function(C){return Ie(this,C).h},i.and=function(C){const I=Math.max(this.g.length,C.g.length),R=[];for(let x=0;x<I;x++)R[x]=this.i(x)&C.i(x);return new h(R,this.h&C.h)},i.or=function(C){const I=Math.max(this.g.length,C.g.length),R=[];for(let x=0;x<I;x++)R[x]=this.i(x)|C.i(x);return new h(R,this.h|C.h)},i.xor=function(C){const I=Math.max(this.g.length,C.g.length),R=[];for(let x=0;x<I;x++)R[x]=this.i(x)^C.i(x);return new h(R,this.h^C.h)};function De(C){const I=C.g.length+1,R=[];for(let x=0;x<I;x++)R[x]=C.i(x)<<1|C.i(x-1)>>>31;return new h(R,C.h)}function Ne(C,I){const R=I>>5;I%=32;const x=C.g.length-R,P=[];for(let V=0;V<x;V++)P[V]=I>0?C.i(V+R)>>>I|C.i(V+R+1)<<32-I:C.i(V+R);return new h(P,C.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,Jy=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=w,yi=h}).apply(typeof ug<"u"?ug:typeof self<"u"?self:typeof window<"u"?window:{});var yu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xy,Sa,Zy,Ru,dd,e_,t_,n_;(function(){var i,e=Object.defineProperty;function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof yu=="object"&&yu];for(var p=0;p<l.length;++p){var g=l[p];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=t(this);function o(l,p){if(p)e:{var g=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var L=l[E];if(!(L in g))break e;g=g[L]}l=l[l.length-1],E=g[l],p=p(E),p!=E&&p!=null&&e(g,l,{configurable:!0,writable:!0,value:p})}}o("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(l){return l||function(p){var g=[],E;for(E in p)Object.prototype.hasOwnProperty.call(p,E)&&g.push([E,p[E]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function m(l){var p=typeof l;return p=="object"&&l!=null||p=="function"}function y(l,p,g){return l.call.apply(l.bind,arguments)}function v(l,p,g){return v=y,v.apply(null,arguments)}function w(l,p){var g=Array.prototype.slice.call(arguments,1);return function(){var E=g.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function A(l,p){function g(){}g.prototype=p.prototype,l.Z=p.prototype,l.prototype=new g,l.prototype.constructor=l,l.Ob=function(E,L,U){for(var J=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)J[_e-2]=arguments[_e];return p.prototype[L].apply(E,J)}}var b=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function z(l){const p=l.length;if(p>0){const g=Array(p);for(let E=0;E<p;E++)g[E]=l[E];return g}return[]}function Z(l,p){for(let E=1;E<arguments.length;E++){const L=arguments[E];var g=typeof L;if(g=g!="object"?g:L?Array.isArray(L)?"array":g:"null",g=="array"||g=="object"&&typeof L.length=="number"){g=l.length||0;const U=L.length||0;l.length=g+U;for(let J=0;J<U;J++)l[g+J]=L[J]}else l.push(L)}}class Y{constructor(p,g){this.i=p,this.j=g,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function G(l){h.setTimeout(()=>{throw l},0)}function Ee(){var l=C;let p=null;return l.g&&(p=l.g,l.g=l.g.next,l.g||(l.h=null),p.next=null),p}class ie{constructor(){this.h=this.g=null}add(p,g){const E=ue.get();E.set(p,g),this.h?this.h.next=E:this.g=E,this.h=E}}var ue=new Y(()=>new Ie,l=>l.reset());class Ie{constructor(){this.next=this.g=this.h=null}set(p,g){this.h=p,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let De,Ne=!1,C=new ie,I=()=>{const l=Promise.resolve(void 0);De=()=>{l.then(R)}};function R(){for(var l;l=Ee();){try{l.h.call(l.g)}catch(g){G(g)}var p=ue;p.j(l),p.h<100&&(p.h++,l.next=p.g,p.g=l)}Ne=!1}function x(){this.u=this.u,this.C=this.C}x.prototype.u=!1,x.prototype.dispose=function(){this.u||(this.u=!0,this.N())},x.prototype[Symbol.dispose]=function(){this.dispose()},x.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function P(l,p){this.type=l,this.g=this.target=p,this.defaultPrevented=!1}P.prototype.h=function(){this.defaultPrevented=!0};var V=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var l=!1,p=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};h.addEventListener("test",g,p),h.removeEventListener("test",g,p)}catch{}return l})();function S(l){return/^[\s\xa0]*$/.test(l)}function $e(l,p){P.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,p)}A($e,P),$e.prototype.init=function(l,p){const g=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=p,p=l.relatedTarget,p||(g=="mouseover"?p=l.fromElement:g=="mouseout"&&(p=l.toElement)),this.relatedTarget=p,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&$e.Z.h.call(this)},$e.prototype.h=function(){$e.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var _t="closure_listenable_"+(Math.random()*1e6|0),Nt=0;function Je(l,p,g,E,L){this.listener=l,this.proxy=null,this.src=p,this.type=g,this.capture=!!E,this.ha=L,this.key=++Nt,this.da=this.fa=!1}function X(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function ce(l,p,g){for(const E in l)p.call(g,l[E],E,l)}function ne(l,p){for(const g in l)p.call(void 0,l[g],g,l)}function D(l){const p={};for(const g in l)p[g]=l[g];return p}const H="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function we(l,p){let g,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(g in E)l[g]=E[g];for(let U=0;U<H.length;U++)g=H[U],Object.prototype.hasOwnProperty.call(E,g)&&(l[g]=E[g])}}function Te(l){this.src=l,this.g={},this.h=0}Te.prototype.add=function(l,p,g,E,L){const U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);const J=Re(l,p,E,L);return J>-1?(p=l[J],g||(p.fa=!1)):(p=new Je(p,this.src,U,!!E,L),p.fa=g,l.push(p)),p};function Ae(l,p){const g=p.type;if(g in l.g){var E=l.g[g],L=Array.prototype.indexOf.call(E,p,void 0),U;(U=L>=0)&&Array.prototype.splice.call(E,L,1),U&&(X(p),l.g[g].length==0&&(delete l.g[g],l.h--))}}function Re(l,p,g,E){for(let L=0;L<l.length;++L){const U=l[L];if(!U.da&&U.listener==p&&U.capture==!!g&&U.ha==E)return L}return-1}var Fe="closure_lm_"+(Math.random()*1e6|0),Oe={};function ze(l,p,g,E,L){if(Array.isArray(p)){for(let U=0;U<p.length;U++)ze(l,p[U],g,E,L);return null}return g=Po(g),l&&l[_t]?l.J(p,g,m(E)?!!E.capture:!1,L):jt(l,p,g,!1,E,L)}function jt(l,p,g,E,L,U){if(!p)throw Error("Invalid event type");const J=m(L)?!!L.capture:!!L;let _e=ys(l);if(_e||(l[Fe]=_e=new Te(l)),g=_e.add(p,g,E,J,U),g.proxy)return g;if(E=ms(),g.proxy=E,E.src=l,E.listener=g,l.addEventListener)V||(L=J),L===void 0&&(L=!1),l.addEventListener(p.toString(),E,L);else if(l.attachEvent)l.attachEvent(gs(p.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return g}function ms(){function l(g){return p.call(l.src,l.listener,g)}const p=el;return l}function Co(l,p,g,E,L){if(Array.isArray(p))for(var U=0;U<p.length;U++)Co(l,p[U],g,E,L);else E=m(E)?!!E.capture:!!E,g=Po(g),l&&l[_t]?(l=l.i,U=String(p).toString(),U in l.g&&(p=l.g[U],g=Re(p,g,E,L),g>-1&&(X(p[g]),Array.prototype.splice.call(p,g,1),p.length==0&&(delete l.g[U],l.h--)))):l&&(l=ys(l))&&(p=l.g[p.toString()],l=-1,p&&(l=Re(p,g,E,L)),(g=l>-1?p[l]:null)&&Vr(g))}function Vr(l){if(typeof l!="number"&&l&&!l.da){var p=l.src;if(p&&p[_t])Ae(p.i,l);else{var g=l.type,E=l.proxy;p.removeEventListener?p.removeEventListener(g,E,l.capture):p.detachEvent?p.detachEvent(gs(g),E):p.addListener&&p.removeListener&&p.removeListener(E),(g=ys(p))?(Ae(g,l),g.h==0&&(g.src=null,p[Fe]=null)):X(l)}}}function gs(l){return l in Oe?Oe[l]:Oe[l]="on"+l}function el(l,p){if(l.da)l=!0;else{p=new $e(p,this);const g=l.listener,E=l.ha||l.src;l.fa&&Vr(l),l=g.call(E,p)}return l}function ys(l){return l=l[Fe],l instanceof Te?l:null}var Ri="__closure_events_fn_"+(Math.random()*1e9>>>0);function Po(l){return typeof l=="function"?l:(l[Ri]||(l[Ri]=function(p){return l.handleEvent(p)}),l[Ri])}function lt(){x.call(this),this.i=new Te(this),this.M=this,this.G=null}A(lt,x),lt.prototype[_t]=!0,lt.prototype.removeEventListener=function(l,p,g,E){Co(this,l,p,g,E)};function it(l,p){var g,E=l.G;if(E)for(g=[];E;E=E.G)g.push(E);if(l=l.M,E=p.type||p,typeof p=="string")p=new P(p,l);else if(p instanceof P)p.target=p.target||l;else{var L=p;p=new P(E,l),we(p,L)}L=!0;let U,J;if(g)for(J=g.length-1;J>=0;J--)U=p.g=g[J],L=yn(U,E,!0,p)&&L;if(U=p.g=l,L=yn(U,E,!0,p)&&L,L=yn(U,E,!1,p)&&L,g)for(J=0;J<g.length;J++)U=p.g=g[J],L=yn(U,E,!1,p)&&L}lt.prototype.N=function(){if(lt.Z.N.call(this),this.i){var l=this.i;for(const p in l.g){const g=l.g[p];for(let E=0;E<g.length;E++)X(g[E]);delete l.g[p],l.h--}}this.G=null},lt.prototype.J=function(l,p,g,E){return this.i.add(String(l),p,!1,g,E)},lt.prototype.K=function(l,p,g,E){return this.i.add(String(l),p,!0,g,E)};function yn(l,p,g,E){if(p=l.i.g[String(p)],!p)return!0;p=p.concat();let L=!0;for(let U=0;U<p.length;++U){const J=p[U];if(J&&!J.da&&J.capture==g){const _e=J.listener,st=J.ha||J.src;J.fa&&Ae(l.i,J),L=_e.call(st,E)!==!1&&L}}return L&&!E.defaultPrevented}function No(l,p){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=v(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:h.setTimeout(l,p||0)}function xo(l){l.g=No(()=>{l.g=null,l.i&&(l.i=!1,xo(l))},l.l);const p=l.h;l.h=null,l.m.apply(null,p)}class tl extends x{constructor(p,g){super(),this.m=p,this.l=g,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:xo(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Or(l){x.call(this),this.h=l,this.g={}}A(Or,x);var Do=[];function _s(l){ce(l.g,function(p,g){this.g.hasOwnProperty(g)&&Vr(p)},l),l.g={}}Or.prototype.N=function(){Or.Z.N.call(this),_s(this)},Or.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Lr=h.JSON.stringify,nl=h.JSON.parse,ki=class{stringify(l){return h.JSON.stringify(l,void 0)}parse(l){return h.JSON.parse(l,void 0)}};function Mr(){}function rl(){}var br={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function vs(){P.call(this,"d")}A(vs,P);function Vo(){P.call(this,"c")}A(Vo,P);var _n={},Es=null;function Fr(){return Es=Es||new lt}_n.Ia="serverreachability";function ws(l){P.call(this,_n.Ia,l)}A(ws,P);function sr(l){const p=Fr();it(p,new ws(p))}_n.STAT_EVENT="statevent";function or(l,p){P.call(this,_n.STAT_EVENT,l),this.stat=p}A(or,P);function nt(l){const p=Fr();it(p,new or(p,l))}_n.Ja="timingevent";function Oo(l,p){P.call(this,_n.Ja,l),this.size=p}A(Oo,P);function Ur(l,p){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){l()},p)}function jr(){this.g=!0}jr.prototype.ua=function(){this.g=!1};function il(l,p,g,E,L,U){l.info(function(){if(l.g)if(U){var J="",_e=U.split("&");for(let je=0;je<_e.length;je++){var st=_e[je].split("=");if(st.length>1){const ut=st[0];st=st[1];const nn=ut.split("_");J=nn.length>=2&&nn[1]=="type"?J+(ut+"="+st+"&"):J+(ut+"=redacted&")}}}else J=null;else J=U;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+p+`
`+g+`
`+J})}function sl(l,p,g,E,L,U,J){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+p+`
`+g+`
`+U+" "+J})}function Dn(l,p,g,E){l.info(function(){return"XMLHTTP TEXT ("+p+"): "+Ci(l,g)+(E?" "+E:"")})}function ol(l,p){l.info(function(){return"TIMEOUT: "+p})}jr.prototype.info=function(){};function Ci(l,p){if(!l.g)return p;if(!p)return null;try{const U=JSON.parse(p);if(U){for(l=0;l<U.length;l++)if(Array.isArray(U[l])){var g=U[l];if(!(g.length<2)){var E=g[1];if(Array.isArray(E)&&!(E.length<1)){var L=E[0];if(L!="noop"&&L!="stop"&&L!="close")for(let J=1;J<E.length;J++)E[J]=""}}}}return Lr(U)}catch{return p}}var zr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Br={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},al;function ar(){}A(ar,Mr),ar.prototype.g=function(){return new XMLHttpRequest},al=new ar;function Vn(l){return encodeURIComponent(String(l))}function Ts(l){var p=1;l=l.split(":");const g=[];for(;p>0&&l.length;)g.push(l.shift()),p--;return l.length&&g.push(l.join(":")),g}function an(l,p,g,E){this.j=l,this.i=p,this.l=g,this.S=E||1,this.V=new Or(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ll}function ll(){this.i=null,this.g="",this.h=!1}var ul={},Lo={};function vn(l,p,g){l.M=1,l.A=ur(ln(p)),l.u=g,l.R=!0,Mo(l,null)}function Mo(l,p){l.F=Date.now(),Pi(l),l.B=ln(l.A);var g=l.B,E=l.S;Array.isArray(E)||(E=[String(E)]),Wo(g.i,"t",E),l.C=0,g=l.j.L,l.h=new ll,l.g=vl(l.j,g?p:null,!l.u),l.P>0&&(l.O=new tl(v(l.Y,l,l.g),l.P)),p=l.V,g=l.g,E=l.ba;var L="readystatechange";Array.isArray(L)||(L&&(Do[0]=L.toString()),L=Do);for(let U=0;U<L.length;U++){const J=ze(g,L[U],E||p.handleEvent,!1,p.h||p);if(!J)break;p.g[J.key]=J}p=l.J?D(l.J):{},l.u?(l.v||(l.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,p)):(l.v="GET",l.g.ea(l.B,l.v,null,p)),sr(),il(l.i,l.v,l.B,l.l,l.S,l.u)}an.prototype.ba=function(l){l=l.target;const p=this.O;p&&jn(l)==3?p.j():this.Y(l)},an.prototype.Y=function(l){try{if(l==this.g)e:{const _e=jn(this.g),st=this.g.ya(),je=this.g.ca();if(!(_e<3)&&(_e!=3||this.g&&(this.h.h||this.g.la()||yl(this.g)))){this.K||_e!=4||st==7||(st==8||je<=0?sr(3):sr(2)),Is(this);var p=this.g.ca();this.X=p;var g=cl(this);if(this.o=p==200,sl(this.i,this.v,this.B,this.l,this.S,_e,p),this.o){if(this.U&&!this.L){t:{if(this.g){var E,L=this.g;if((E=L.g?L.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(E)){var U=E;break t}}U=null}if(l=U)Dn(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,qe(this,l);else{this.o=!1,this.m=3,nt(12),lr(this),Ni(this);break e}}if(this.R){l=!0;let ut;for(;!this.K&&this.C<g.length;)if(ut=dl(this,g),ut==Lo){_e==4&&(this.m=4,nt(14),l=!1),Dn(this.i,this.l,null,"[Incomplete Response]");break}else if(ut==ul){this.m=4,nt(15),Dn(this.i,this.l,g,"[Invalid Chunk]"),l=!1;break}else Dn(this.i,this.l,ut,null),qe(this,ut);if(hl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_e!=4||g.length!=0||this.h.h||(this.m=1,nt(16),l=!1),this.o=this.o&&l,!l)Dn(this.i,this.l,g,"[Invalid Chunked Response]"),lr(this),Ni(this);else if(g.length>0&&!this.W){this.W=!0;var J=this.j;J.g==this&&J.aa&&!J.P&&(J.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),Ui(J),J.P=!0,nt(11))}}else Dn(this.i,this.l,g,null),qe(this,g);_e==4&&lr(this),this.o&&!this.K&&(_e==4?Vs(this.j,this):(this.o=!1,Pi(this)))}else Go(this.g),p==400&&g.indexOf("Unknown SID")>0?(this.m=3,nt(12)):(this.m=0,nt(13)),lr(this),Ni(this)}}}catch{}finally{}};function cl(l){if(!hl(l))return l.g.la();const p=yl(l.g);if(p==="")return"";let g="";const E=p.length,L=jn(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return lr(l),Ni(l),"";l.h.i=new h.TextDecoder}for(let U=0;U<E;U++)l.h.h=!0,g+=l.h.i.decode(p[U],{stream:!(L&&U==E-1)});return p.length=0,l.h.g+=g,l.C=0,l.h.g}function hl(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function dl(l,p){var g=l.C,E=p.indexOf(`
`,g);return E==-1?Lo:(g=Number(p.substring(g,E)),isNaN(g)?ul:(E+=1,E+g>p.length?Lo:(p=p.slice(E,E+g),l.C=E+g,p)))}an.prototype.cancel=function(){this.K=!0,lr(this)};function Pi(l){l.T=Date.now()+l.H,bo(l,l.H)}function bo(l,p){if(l.D!=null)throw Error("WatchDog timer not null");l.D=Ur(v(l.aa,l),p)}function Is(l){l.D&&(h.clearTimeout(l.D),l.D=null)}an.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(ol(this.i,this.B),this.M!=2&&(sr(),nt(17)),lr(this),this.m=2,Ni(this)):bo(this,this.T-l)};function Ni(l){l.j.I==0||l.K||Vs(l.j,l)}function lr(l){Is(l);var p=l.O;p&&typeof p.dispose=="function"&&p.dispose(),l.O=null,_s(l.V),l.g&&(p=l.g,l.g=null,p.abort(),p.dispose())}function qe(l,p){try{var g=l.j;if(g.I!=0&&(g.g==l||Uo(g.h,l))){if(!l.L&&Uo(g.h,l)&&g.I==3){try{var E=g.Ba.g.parse(p)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!g.v){if(g.g)if(g.g.F+3e3<l.F)Ds(g),en(g);else break e;$n(g),nt(18)}}else g.xa=L[1],0<g.xa-g.K&&L[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=Ur(v(g.Va,g),6e3));xi(g.h)<=1&&g.ta&&(g.ta=void 0)}else tn(g,11)}else if((l.L||g.g==l)&&Ds(g),!S(p))for(L=g.Ba.g.parse(p),p=0;p<L.length;p++){let je=L[p];const ut=je[0];if(!(ut<=g.K))if(g.K=ut,je=je[1],g.I==2)if(je[0]=="c"){g.M=je[1],g.ba=je[2];const nn=je[3];nn!=null&&(g.ka=nn,g.j.info("VER="+g.ka));const pr=je[4];pr!=null&&(g.za=pr,g.j.info("SVER="+g.za));const Hn=je[5];Hn!=null&&typeof Hn=="number"&&Hn>0&&(E=1.5*Hn,g.O=E,g.j.info("backChannelRequestTimeoutMs_="+E)),E=g;const qn=l.g;if(qn){const Ms=qn.g?qn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ms){var U=E.h;U.g||Ms.indexOf("spdy")==-1&&Ms.indexOf("quic")==-1&&Ms.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(As(U,U.h),U.h=null))}if(E.G){const Jo=qn.g?qn.g.getResponseHeader("X-HTTP-Session-Id"):null;Jo&&(E.wa=Jo,be(E.J,E.G,Jo))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-l.F,g.j.info("Handshake RTT: "+g.T+"ms")),E=g;var J=l;if(E.na=Yo(E,E.L?E.ba:null,E.W),J.L){Di(E.h,J);var _e=J,st=E.O;st&&(_e.H=st),_e.D&&(Is(_e),Pi(_e)),E.g=J}else xt(E);g.i.length>0&&fr(g)}else je[0]!="stop"&&je[0]!="close"||tn(g,7);else g.I==3&&(je[0]=="stop"||je[0]=="close"?je[0]=="stop"?tn(g,7):Ns(g):je[0]!="noop"&&g.l&&g.l.qa(je),g.A=0)}}sr(4)}catch{}}var _c=class{constructor(l,p){this.g=l,this.map=p}};function Ss(l){this.l=l||10,h.PerformanceNavigationTiming?(l=h.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Fo(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function xi(l){return l.h?1:l.g?l.g.size:0}function Uo(l,p){return l.h?l.h==p:l.g?l.g.has(p):!1}function As(l,p){l.g?l.g.add(p):l.h=p}function Di(l,p){l.h&&l.h==p?l.h=null:l.g&&l.g.has(p)&&l.g.delete(p)}Ss.prototype.cancel=function(){if(this.i=Jt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Jt(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let p=l.i;for(const g of l.g.values())p=p.concat(g.G);return p}return z(l.i)}var fl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Xt(l,p){if(l){l=l.split("&");for(let g=0;g<l.length;g++){const E=l[g].indexOf("=");let L,U=null;E>=0?(L=l[g].substring(0,E),U=l[g].substring(E+1)):L=l[g],p(L,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function On(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;l instanceof On?(this.l=l.l,Vi(this,l.j),this.o=l.o,this.g=l.g,Ln(this,l.u),this.h=l.h,$r(this,Ko(l.i)),this.m=l.m):l&&(p=String(l).match(fl))?(this.l=!1,Vi(this,p[1]||"",!0),this.o=Oi(p[2]||""),this.g=Oi(p[3]||"",!0),Ln(this,p[4]),this.h=Oi(p[5]||"",!0),$r(this,p[6]||"",!0),this.m=Oi(p[7]||"")):(this.l=!1,this.i=new xe(null,this.l))}On.prototype.toString=function(){const l=[];var p=this.j;p&&l.push(Li(p,zo,!0),":");var g=this.g;return(g||p=="file")&&(l.push("//"),(p=this.o)&&l.push(Li(p,zo,!0),"@"),l.push(Vn(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&l.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(Li(g,g.charAt(0)=="/"?Mi:Bo,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",Li(g,$o)),l.join("")},On.prototype.resolve=function(l){const p=ln(this);let g=!!l.j;g?Vi(p,l.j):g=!!l.o,g?p.o=l.o:g=!!l.g,g?p.g=l.g:g=l.u!=null;var E=l.h;if(g)Ln(p,l.u);else if(g=!!l.h){if(E.charAt(0)!="/")if(this.g&&!this.h)E="/"+E;else{var L=p.h.lastIndexOf("/");L!=-1&&(E=p.h.slice(0,L+1)+E)}if(L=E,L==".."||L==".")E="";else if(L.indexOf("./")!=-1||L.indexOf("/.")!=-1){E=L.lastIndexOf("/",0)==0,L=L.split("/");const U=[];for(let J=0;J<L.length;){const _e=L[J++];_e=="."?E&&J==L.length&&U.push(""):_e==".."?((U.length>1||U.length==1&&U[0]!="")&&U.pop(),E&&J==L.length&&U.push("")):(U.push(_e),E=!0)}E=U.join("/")}else E=L}return g?p.h=E:g=l.i.toString()!=="",g?$r(p,Ko(l.i)):g=!!l.m,g&&(p.m=l.m),p};function ln(l){return new On(l)}function Vi(l,p,g){l.j=g?Oi(p,!0):p,l.j&&(l.j=l.j.replace(/:$/,""))}function Ln(l,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);l.u=p}else l.u=null}function $r(l,p,g){p instanceof xe?(l.i=p,ks(l.i,l.l)):(g||(p=Li(p,vc)),l.i=new xe(p,l.l))}function be(l,p,g){l.i.set(p,g)}function ur(l){return be(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function Oi(l,p){return l?p?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Li(l,p,g){return typeof l=="string"?(l=encodeURI(l).replace(p,jo),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function jo(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var zo=/[#\/\?@]/g,Bo=/[#\?:]/g,Mi=/[#\?]/g,vc=/[#\?@]/g,$o=/#/g;function xe(l,p){this.h=this.g=null,this.i=l||null,this.j=!!p}function Mn(l){l.g||(l.g=new Map,l.h=0,l.i&&Xt(l.i,function(p,g){l.add(decodeURIComponent(p.replace(/\+/g," ")),g)}))}i=xe.prototype,i.add=function(l,p){Mn(this),this.i=null,l=bn(this,l);let g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(p),this.h+=1,this};function Ho(l,p){Mn(l),p=bn(l,p),l.g.has(p)&&(l.i=null,l.h-=l.g.get(p).length,l.g.delete(p))}function Rs(l,p){return Mn(l),p=bn(l,p),l.g.has(p)}i.forEach=function(l,p){Mn(this),this.g.forEach(function(g,E){g.forEach(function(L){l.call(p,L,E,this)},this)},this)};function qo(l,p){Mn(l);let g=[];if(typeof p=="string")Rs(l,p)&&(g=g.concat(l.g.get(bn(l,p))));else for(l=Array.from(l.g.values()),p=0;p<l.length;p++)g=g.concat(l[p]);return g}i.set=function(l,p){return Mn(this),this.i=null,l=bn(this,l),Rs(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[p]),this.h+=1,this},i.get=function(l,p){return l?(l=qo(this,l),l.length>0?String(l[0]):p):p};function Wo(l,p,g){Ho(l,p),g.length>0&&(l.i=null,l.g.set(bn(l,p),z(g)),l.h+=g.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],p=Array.from(this.g.keys());for(let E=0;E<p.length;E++){var g=p[E];const L=Vn(g);g=qo(this,g);for(let U=0;U<g.length;U++){let J=L;g[U]!==""&&(J+="="+Vn(g[U])),l.push(J)}}return this.i=l.join("&")};function Ko(l){const p=new xe;return p.i=l.i,l.g&&(p.g=new Map(l.g),p.h=l.h),p}function bn(l,p){return p=String(p),l.j&&(p=p.toLowerCase()),p}function ks(l,p){p&&!l.j&&(Mn(l),l.i=null,l.g.forEach(function(g,E){const L=E.toLowerCase();E!=L&&(Ho(this,E),Wo(this,L,g))},l)),l.j=p}function Fn(l,p){const g=new jr;if(h.Image){const E=new Image;E.onload=w(It,g,"TestLoadImage: loaded",!0,p,E),E.onerror=w(It,g,"TestLoadImage: error",!1,p,E),E.onabort=w(It,g,"TestLoadImage: abort",!1,p,E),E.ontimeout=w(It,g,"TestLoadImage: timeout",!1,p,E),h.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else p(!1)}function Un(l,p){const g=new jr,E=new AbortController,L=setTimeout(()=>{E.abort(),It(g,"TestPingServer: timeout",!1,p)},1e4);fetch(l,{signal:E.signal}).then(U=>{clearTimeout(L),U.ok?It(g,"TestPingServer: ok",!0,p):It(g,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(L),It(g,"TestPingServer: error",!1,p)})}function It(l,p,g,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(g)}catch{}}function bi(){this.g=new ki}function cr(l){this.i=l.Sb||null,this.h=l.ab||!1}A(cr,Mr),cr.prototype.g=function(){return new Zt(this.i,this.h)};function Zt(l,p){lt.call(this),this.H=l,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}A(Zt,lt),i=Zt.prototype,i.open=function(l,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=p,this.readyState=1,En(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(p.body=l),(this.H||h).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Hr(this)),this.readyState=0},i.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,En(this)),this.g&&(this.readyState=3,En(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;pl(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function pl(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}i.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var p=l.value?l.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!l.done}))&&(this.response=this.responseText+=p)}l.done?Hr(this):En(this),this.readyState==3&&pl(this)}},i.Oa=function(l){this.g&&(this.response=this.responseText=l,Hr(this))},i.Na=function(l){this.g&&(this.response=l,Hr(this))},i.ga=function(){this.g&&Hr(this)};function Hr(l){l.readyState=4,l.l=null,l.j=null,l.B=null,En(l)}i.setRequestHeader=function(l,p){this.A.append(l,p)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],p=this.h.entries();for(var g=p.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=p.next();return l.join(`\r
`)};function En(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Zt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function ml(l){let p="";return ce(l,function(g,E){p+=E,p+=":",p+=g,p+=`\r
`}),p}function Cs(l,p,g){e:{for(E in g){var E=!1;break e}E=!0}E||(g=ml(g),typeof l=="string"?g!=null&&Vn(g):be(l,p,g))}function Be(l){lt.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}A(Be,lt);var gl=/^https?$/i,Ec=["POST","PUT"];i=Be.prototype,i.Fa=function(l){this.H=l},i.ea=function(l,p,g,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);p=p?p.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():al.g(),this.g.onreadystatechange=b(v(this.Ca,this));try{this.B=!0,this.g.open(p,String(l),!0),this.B=!1}catch(U){qr(this,U);return}if(l=g||"",g=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)g.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const U of E.keys())g.set(U,E.get(U));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(g.keys()).find(U=>U.toLowerCase()=="content-type"),L=h.FormData&&l instanceof h.FormData,!(Array.prototype.indexOf.call(Ec,p,void 0)>=0)||E||L||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,J]of g)this.g.setRequestHeader(U,J);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(U){qr(this,U)}};function qr(l,p){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=p,l.o=5,Wr(l),dr(l)}function Wr(l){l.A||(l.A=!0,it(l,"complete"),it(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,it(this,"complete"),it(this,"abort"),dr(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),dr(this,!0)),Be.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?hr(this):this.Xa())},i.Xa=function(){hr(this)};function hr(l){if(l.h&&typeof u<"u"){if(l.v&&jn(l)==4)setTimeout(l.Ca.bind(l),0);else if(it(l,"readystatechange"),jn(l)==4){l.h=!1;try{const U=l.ca();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var g;if(!(g=p)){var E;if(E=U===0){let J=String(l.D).match(fl)[1]||null;!J&&h.self&&h.self.location&&(J=h.self.location.protocol.slice(0,-1)),E=!gl.test(J?J.toLowerCase():"")}g=E}if(g)it(l,"complete"),it(l,"success");else{l.o=6;try{var L=jn(l)>2?l.g.statusText:""}catch{L=""}l.l=L+" ["+l.ca()+"]",Wr(l)}}finally{dr(l)}}}}function dr(l,p){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const g=l.g;l.g=null,p||it(l,"ready");try{g.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function jn(l){return l.g?l.g.readyState:0}i.ca=function(){try{return jn(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(l){if(this.g){var p=this.g.responseText;return l&&p.indexOf(l)==0&&(p=p.substring(l.length)),nl(p)}};function yl(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Go(l){const p={};l=(l.g&&jn(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(S(l[E]))continue;var g=Ts(l[E]);const L=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const U=p[L]||[];p[L]=U,U.push(g)}ne(p,function(E){return E.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function zn(l,p,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||p}function Ps(l){this.za=0,this.i=[],this.j=new jr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=zn("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=zn("baseRetryDelayMs",5e3,l),this.Za=zn("retryDelaySeedMs",1e4,l),this.Ta=zn("forwardChannelMaxRetries",2,l),this.va=zn("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new Ss(l&&l.concurrentRequestLimit),this.Ba=new bi,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=Ps.prototype,i.ka=8,i.I=1,i.connect=function(l,p,g,E){nt(0),this.W=l,this.H=p||{},g&&E!==void 0&&(this.H.OSID=g,this.H.OAID=E),this.F=this.X,this.J=Yo(this,null,this.W),fr(this)};function Ns(l){if(xs(l),l.I==3){var p=l.V++,g=ln(l.J);if(be(g,"SID",l.M),be(g,"RID",p),be(g,"TYPE","terminate"),Bn(l,g),p=new an(l,l.j,p),p.M=2,p.A=ur(ln(g)),g=!1,h.navigator&&h.navigator.sendBeacon)try{g=h.navigator.sendBeacon(p.A.toString(),"")}catch{}!g&&h.Image&&(new Image().src=p.A,g=!0),g||(p.g=vl(p.j,null),p.g.ea(p.A)),p.F=Date.now(),Pi(p)}ji(l)}function en(l){l.g&&(Ui(l),l.g.cancel(),l.g=null)}function xs(l){en(l),l.v&&(h.clearTimeout(l.v),l.v=null),Ds(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&h.clearTimeout(l.m),l.m=null)}function fr(l){if(!Fo(l.h)&&!l.m){l.m=!0;var p=l.Ea;De||I(),Ne||(De(),Ne=!0),C.add(p,l),l.D=0}}function _l(l,p){return xi(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=p.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=Ur(v(l.Ea,l,p),Os(l,l.D)),l.D++,!0)}i.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const L=new an(this,this.j,l);let U=this.o;if(this.U&&(U?(U=D(U),we(U,this.U)):U=this.U),this.u!==null||this.R||(L.J=U,U=null),this.S)e:{for(var p=0,g=0;g<this.i.length;g++){t:{var E=this.i[g];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(p+=E,p>4096){p=g;break e}if(p===4096||g===this.i.length-1){p=g+1;break e}}p=1e3}else p=1e3;p=Qo(this,L,p),g=ln(this.J),be(g,"RID",l),be(g,"CVER",22),this.G&&be(g,"X-HTTP-Session-Id",this.G),Bn(this,g),U&&(this.R?p="headers="+Vn(ml(U))+"&"+p:this.u&&Cs(g,this.u,U)),As(this.h,L),this.Ra&&be(g,"TYPE","init"),this.S?(be(g,"$req",p),be(g,"SID","null"),L.U=!0,vn(L,g,null)):vn(L,g,p),this.I=2}}else this.I==3&&(l?Fi(this,l):this.i.length==0||Fo(this.h)||Fi(this))};function Fi(l,p){var g;p?g=p.l:g=l.V++;const E=ln(l.J);be(E,"SID",l.M),be(E,"RID",g),be(E,"AID",l.K),Bn(l,E),l.u&&l.o&&Cs(E,l.u,l.o),g=new an(l,l.j,g,l.D+1),l.u===null&&(g.J=l.o),p&&(l.i=p.G.concat(l.i)),p=Qo(l,g,1e3),g.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),As(l.h,g),vn(g,E,p)}function Bn(l,p){l.H&&ce(l.H,function(g,E){be(p,E,g)}),l.l&&ce({},function(g,E){be(p,E,g)})}function Qo(l,p,g){g=Math.min(l.i.length,g);const E=l.l?v(l.l.Ka,l.l,l):null;e:{var L=l.i;let _e=-1;for(;;){const st=["count="+g];_e==-1?g>0?(_e=L[0].g,st.push("ofs="+_e)):_e=0:st.push("ofs="+_e);let je=!0;for(let ut=0;ut<g;ut++){var U=L[ut].g;const nn=L[ut].map;if(U-=_e,U<0)_e=Math.max(0,L[ut].g-100),je=!1;else try{U="req"+U+"_"||"";try{var J=nn instanceof Map?nn:Object.entries(nn);for(const[pr,Hn]of J){let qn=Hn;m(Hn)&&(qn=Lr(Hn)),st.push(U+pr+"="+encodeURIComponent(qn))}}catch(pr){throw st.push(U+"type="+encodeURIComponent("_badmap")),pr}}catch{E&&E(nn)}}if(je){J=st.join("&");break e}}J=void 0}return l=l.i.splice(0,g),p.G=l,J}function xt(l){if(!l.g&&!l.v){l.Y=1;var p=l.Da;De||I(),Ne||(De(),Ne=!0),C.add(p,l),l.A=0}}function $n(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=Ur(v(l.Da,l),Os(l,l.A)),l.A++,!0)}i.Da=function(){if(this.v=null,Kr(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=Ur(v(this.Wa,this),l)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,nt(10),en(this),Kr(this))};function Ui(l){l.B!=null&&(h.clearTimeout(l.B),l.B=null)}function Kr(l){l.g=new an(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var p=ln(l.na);be(p,"RID","rpc"),be(p,"SID",l.M),be(p,"AID",l.K),be(p,"CI",l.F?"0":"1"),!l.F&&l.ia&&be(p,"TO",l.ia),be(p,"TYPE","xmlhttp"),Bn(l,p),l.u&&l.o&&Cs(p,l.u,l.o),l.O&&(l.g.H=l.O);var g=l.g;l=l.ba,g.M=1,g.A=ur(ln(p)),g.u=null,g.R=!0,Mo(g,l)}i.Va=function(){this.C!=null&&(this.C=null,en(this),$n(this),nt(19))};function Ds(l){l.C!=null&&(h.clearTimeout(l.C),l.C=null)}function Vs(l,p){var g=null;if(l.g==p){Ds(l),Ui(l),l.g=null;var E=2}else if(Uo(l.h,p))g=p.G,Di(l.h,p),E=1;else return;if(l.I!=0){if(p.o)if(E==1){g=p.u?p.u.length:0,p=Date.now()-p.F;var L=l.D;E=Fr(),it(E,new Oo(E,g)),fr(l)}else xt(l);else if(L=p.m,L==3||L==0&&p.X>0||!(E==1&&_l(l,p)||E==2&&$n(l)))switch(g&&g.length>0&&(p=l.h,p.i=p.i.concat(g)),L){case 1:tn(l,5);break;case 4:tn(l,10);break;case 3:tn(l,6);break;default:tn(l,2)}}}function Os(l,p){let g=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(g*=2),g*p}function tn(l,p){if(l.j.info("Error code "+p),p==2){var g=v(l.bb,l),E=l.Ua;const L=!E;E=new On(E||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Vi(E,"https"),ur(E),L?Fn(E.toString(),g):Un(E.toString(),g)}else nt(2);l.I=0,l.l&&l.l.pa(p),ji(l),xs(l)}i.bb=function(l){l?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function ji(l){if(l.I=0,l.ja=[],l.l){const p=Jt(l.h);(p.length!=0||l.i.length!=0)&&(Z(l.ja,p),Z(l.ja,l.i),l.h.i.length=0,z(l.i),l.i.length=0),l.l.oa()}}function Yo(l,p,g){var E=g instanceof On?ln(g):new On(g);if(E.g!="")p&&(E.g=p+"."+E.g),Ln(E,E.u);else{var L=h.location;E=L.protocol,p=p?p+"."+L.hostname:L.hostname,L=+L.port;const U=new On(null);E&&Vi(U,E),p&&(U.g=p),L&&Ln(U,L),g&&(U.h=g),E=U}return g=l.G,p=l.wa,g&&p&&be(E,g,p),be(E,"VER",l.ka),Bn(l,E),E}function vl(l,p,g){if(p&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=l.Aa&&!l.ma?new Be(new cr({ab:g})):new Be(l.ma),p.Fa(l.L),p}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function El(){}i=El.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function Ls(){}Ls.prototype.g=function(l,p){return new St(l,p)};function St(l,p){lt.call(this),this.g=new Ps(p),this.l=l,this.h=p&&p.messageUrlParams||null,l=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(l?l["X-WebChannel-Content-Type"]=p.messageContentType:l={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(l?l["X-WebChannel-Client-Profile"]=p.sa:l={"X-WebChannel-Client-Profile":p.sa}),this.g.U=l,(l=p&&p.Qb)&&!S(l)&&(this.g.u=l),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!S(p)&&(this.g.G=p,l=this.h,l!==null&&p in l&&(l=this.h,p in l&&delete l[p])),this.j=new Gr(this)}A(St,lt),St.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){Ns(this.g)},St.prototype.o=function(l){var p=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.v&&(g={},g.__data__=Lr(l),l=g);p.i.push(new _c(p.Ya++,l)),p.I==3&&fr(p)},St.prototype.N=function(){this.g.l=null,delete this.j,Ns(this.g),delete this.g,St.Z.N.call(this)};function wl(l){vs.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var p=l.__sm__;if(p){e:{for(const g in p){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,p=p!==null&&l in p?p[l]:void 0),this.data=p}else this.data=l}A(wl,vs);function Tl(){Vo.call(this),this.status=1}A(Tl,Vo);function Gr(l){this.g=l}A(Gr,El),Gr.prototype.ra=function(){it(this.g,"a")},Gr.prototype.qa=function(l){it(this.g,new wl(l))},Gr.prototype.pa=function(l){it(this.g,new Tl)},Gr.prototype.oa=function(){it(this.g,"b")},Ls.prototype.createWebChannel=Ls.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,n_=function(){return new Ls},t_=function(){return Fr()},e_=_n,dd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},zr.NO_ERROR=0,zr.TIMEOUT=8,zr.HTTP_ERROR=6,Ru=zr,Br.COMPLETE="complete",Zy=Br,rl.EventType=br,br.OPEN="a",br.CLOSE="b",br.ERROR="c",br.MESSAGE="d",lt.prototype.listen=lt.prototype.J,Sa=rl,Be.prototype.listenOnce=Be.prototype.K,Be.prototype.getLastError=Be.prototype.Ha,Be.prototype.getLastErrorCode=Be.prototype.ya,Be.prototype.getStatus=Be.prototype.ca,Be.prototype.getResponseJson=Be.prototype.La,Be.prototype.getResponseText=Be.prototype.la,Be.prototype.send=Be.prototype.ea,Be.prototype.setWithCredentials=Be.prototype.Fa,Xy=Be}).apply(typeof yu<"u"?yu:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */let So="12.12.0";function VI(i){So=i}/**
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
 */const as=new Pd("@firebase/firestore");function ro(){return as.logLevel}function te(i,...e){if(as.logLevel<=ke.DEBUG){const t=e.map(Bd);as.debug(`Firestore (${So}): ${i}`,...t)}}function Pr(i,...e){if(as.logLevel<=ke.ERROR){const t=e.map(Bd);as.error(`Firestore (${So}): ${i}`,...t)}}function ls(i,...e){if(as.logLevel<=ke.WARN){const t=e.map(Bd);as.warn(`Firestore (${So}): ${i}`,...t)}}function Bd(i){if(typeof i=="string")return i;try{return(function(t){return JSON.stringify(t)})(i)}catch{return i}}/**
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
 */function pe(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,r_(i,s,t)}function r_(i,e,t){let s=`FIRESTORE (${So}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Pr(s),new Error(s)}function Ue(i,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,i||r_(e,o,s)}function ve(i,e){return i}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ae extends xr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class i_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class OI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(bt.UNAUTHENTICATED)))}shutdown(){}}class LI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class MI{constructor(e){this.t=e,this.currentUser=bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ue(this.o===void 0,42304);let s=this.i;const o=y=>this.i!==s?(s=this.i,t(y)):Promise.resolve();let u=new Rr;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Rr,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const y=u;e.enqueueRetryable((async()=>{await y.promise,await o(this.currentUser)}))},m=y=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((y=>m(y))),setTimeout((()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Rr)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ue(typeof s.accessToken=="string",31837,{l:s}),new i_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string",2055,{h:e}),new bt(e)}}class bI{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=bt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class FI{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new bI(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(bt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class cg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class UI{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,kn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ue(this.o===void 0,3512);const s=u=>{u.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,te("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new cg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ue(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new cg(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function jI(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class $d{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=jI(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Ce(i,e){return i<e?-1:i>e?1:0}function fd(i,e){const t=Math.min(i.length,e.length);for(let s=0;s<t;s++){const o=i.charAt(s),u=e.charAt(s);if(o!==u)return Zh(o)===Zh(u)?Ce(o,u):Zh(o)?1:-1}return Ce(i.length,e.length)}const zI=55296,BI=57343;function Zh(i){const e=i.charCodeAt(0);return e>=zI&&e<=BI}function go(i,e,t){return i.length===e.length&&i.every(((s,o)=>t(s,e[o])))}/**
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
 */const hg="__name__";class Yn{constructor(e,t,s){t===void 0?t=0:t>e.length&&pe(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&pe(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Yn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Yn?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Yn.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Ce(e.length,t.length)}static compareSegments(e,t){const s=Yn.isNumericId(e),o=Yn.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Yn.extractNumericId(e).compare(Yn.extractNumericId(t)):fd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return yi.fromString(e.substring(4,e.length-2))}}class Ge extends Yn{construct(e,t,s){return new Ge(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ae($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new Ge(t)}static emptyPath(){return new Ge([])}}const $I=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ct extends Yn{construct(e,t,s){return new Ct(e,t,s)}static isValidIdentifier(e){return $I.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ct.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===hg}static keyField(){return new Ct([hg])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ae($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new ae($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[o+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new ae($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new ae($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ct(t)}static emptyPath(){return new Ct([])}}/**
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
 */class he{constructor(e){this.path=e}static fromPath(e){return new he(Ge.fromString(e))}static fromName(e){return new he(Ge.fromString(e).popFirst(5))}static empty(){return new he(Ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new he(new Ge(e.slice()))}}/**
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
 */function s_(i,e,t){if(!t)throw new ae($.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function HI(i,e,t,s){if(e===!0&&s===!0)throw new ae($.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function dg(i){if(!he.isDocumentKey(i))throw new ae($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function fg(i){if(he.isDocumentKey(i))throw new ae($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function o_(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function Hd(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":pe(12329,{type:typeof i})}function vi(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ae($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Hd(i);throw new ae($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
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
 */function dt(i,e){const t={typeString:i};return e&&(t.value=e),t}function Ga(i,e){if(!o_(i))throw new ae($.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const h=i[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new ae($.INVALID_ARGUMENT,t);return!0}/**
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
 */const pg=-62135596800,mg=1e6;class Qe{static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*mg);return new Qe(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ae($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ae($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<pg)throw new ae($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ae($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/mg}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Qe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ga(e,Qe._jsonSchema))return new Qe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-pg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Qe._jsonSchemaVersion="firestore/timestamp/1.0",Qe._jsonSchema={type:dt("string",Qe._jsonSchemaVersion),seconds:dt("number"),nanoseconds:dt("number")};/**
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
 */class ye{static fromTimestamp(e){return new ye(e)}static min(){return new ye(new Qe(0,0))}static max(){return new ye(new Qe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ma=-1;function qI(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=ye.fromTimestamp(s===1e9?new Qe(t+1,0):new Qe(t,s));return new Ei(o,he.empty(),e)}function WI(i){return new Ei(i.readTime,i.key,Ma)}class Ei{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ei(ye.min(),he.empty(),Ma)}static max(){return new Ei(ye.max(),he.empty(),Ma)}}function KI(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=he.comparator(i.documentKey,e.documentKey),t!==0?t:Ce(i.largestBatchId,e.largestBatchId))}/**
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
 */const GI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class QI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Ao(i){if(i.code!==$.FAILED_PRECONDITION||i.message!==GI)throw i;te("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&pe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new B(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof B?t:B.resolve(t)}catch(t){return B.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):B.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):B.reject(t)}static resolve(e){return new B(((t,s)=>{t(e)}))}static reject(e){return new B(((t,s)=>{s(e)}))}static waitFor(e){return new B(((t,s)=>{let o=0,u=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++u,h&&u===o&&t()}),(y=>s(y)))})),h=!0,u===o&&t()}))}static or(e){let t=B.resolve(!1);for(const s of e)t=t.next((o=>o?B.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,u)=>{s.push(t.call(this,o,u))})),this.waitFor(s)}static mapArray(e,t){return new B(((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let y=0;y<u;y++){const v=y;t(e[v]).next((w=>{h[v]=w,++m,m===u&&s(h)}),(w=>o(w)))}}))}static doWhile(e,t){return new B(((s,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):s()};u()}))}}function YI(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ro(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class rc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}rc.ce=-1;/**
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
 */const qd=-1;function ic(i){return i==null}function ju(i){return i===0&&1/i==-1/0}function JI(i){return typeof i=="number"&&Number.isInteger(i)&&!ju(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */const a_="";function XI(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=gg(e)),e=ZI(i.get(t),e);return gg(e)}function ZI(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case a_:t+="";break;default:t+=u}}return t}function gg(i){return i+a_+""}/**
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
 */function yg(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function hs(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function l_(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
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
 */class tt{constructor(e,t){this.comparator=e,this.root=t||kt.EMPTY}insert(e,t){return new tt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,kt.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,kt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _u(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _u(this.root,e,this.comparator,!1)}getReverseIterator(){return new _u(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _u(this.root,e,this.comparator,!0)}}class _u{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class kt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??kt.RED,this.left=o??kt.EMPTY,this.right=u??kt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new kt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return kt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return kt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,kt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,kt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw pe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw pe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw pe(27949);return e+(this.isRed()?0:1)}}kt.EMPTY=null,kt.RED=!0,kt.BLACK=!1;kt.EMPTY=new class{constructor(){this.size=0}get key(){throw pe(57766)}get value(){throw pe(16141)}get color(){throw pe(16727)}get left(){throw pe(29726)}get right(){throw pe(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new kt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class yt{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new _g(this.data.getIterator())}getIteratorFrom(e){return new _g(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof yt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new yt(this.comparator);return t.data=e,t}}class _g{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Pn{constructor(e){this.fields=e,e.sort(Ct.comparator)}static empty(){return new Pn([])}unionWith(e){let t=new yt(Ct.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Pn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return go(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class u_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Pt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new u_("Invalid base64 string: "+u):u}})(e);return new Pt(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u})(e);return new Pt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pt.EMPTY_BYTE_STRING=new Pt("");const eS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wi(i){if(Ue(!!i,39018),typeof i=="string"){let e=0;const t=eS.exec(i);if(Ue(!!t,46558,{timestamp:i}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:at(i.seconds),nanos:at(i.nanos)}}function at(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Ti(i){return typeof i=="string"?Pt.fromBase64String(i):Pt.fromUint8Array(i)}/**
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
 */const c_="server_timestamp",h_="__type__",d_="__previous_value__",f_="__local_write_time__";function Wd(i){var t,s;return((s=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[h_])==null?void 0:s.stringValue)===c_}function sc(i){const e=i.mapValue.fields[d_];return Wd(e)?sc(e):e}function ba(i){const e=wi(i.mapValue.fields[f_].timestampValue);return new Qe(e.seconds,e.nanos)}/**
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
 */class tS{constructor(e,t,s,o,u,h,m,y,v,w,A){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=v,this.isUsingEmulator=w,this.apiKey=A}}const zu="(default)";class Fa{constructor(e,t){this.projectId=e,this.database=t||zu}static empty(){return new Fa("","")}get isDefaultDatabase(){return this.database===zu}isEqual(e){return e instanceof Fa&&e.projectId===this.projectId&&e.database===this.database}}function nS(i,e){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new ae($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fa(i.options.projectId,e)}/**
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
 */const p_="__type__",rS="__max__",vu={mapValue:{}},m_="__vector__",Bu="value";function Ii(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Wd(i)?4:sS(i)?9007199254740991:iS(i)?10:11:pe(28295,{value:i})}function rr(i,e){if(i===e)return!0;const t=Ii(i);if(t!==Ii(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return ba(i).isEqual(ba(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=wi(o.timestampValue),m=wi(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(o,u){return Ti(o.bytesValue).isEqual(Ti(u.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(o,u){return at(o.geoPointValue.latitude)===at(u.geoPointValue.latitude)&&at(o.geoPointValue.longitude)===at(u.geoPointValue.longitude)})(i,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return at(o.integerValue)===at(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=at(o.doubleValue),m=at(u.doubleValue);return h===m?ju(h)===ju(m):isNaN(h)&&isNaN(m)}return!1})(i,e);case 9:return go(i.arrayValue.values||[],e.arrayValue.values||[],rr);case 10:case 11:return(function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(yg(h)!==yg(m))return!1;for(const y in h)if(h.hasOwnProperty(y)&&(m[y]===void 0||!rr(h[y],m[y])))return!1;return!0})(i,e);default:return pe(52216,{left:i})}}function Ua(i,e){return(i.values||[]).find((t=>rr(t,e)))!==void 0}function yo(i,e){if(i===e)return 0;const t=Ii(i),s=Ii(e);if(t!==s)return Ce(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ce(i.booleanValue,e.booleanValue);case 2:return(function(u,h){const m=at(u.integerValue||u.doubleValue),y=at(h.integerValue||h.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1})(i,e);case 3:return vg(i.timestampValue,e.timestampValue);case 4:return vg(ba(i),ba(e));case 5:return fd(i.stringValue,e.stringValue);case 6:return(function(u,h){const m=Ti(u),y=Ti(h);return m.compareTo(y)})(i.bytesValue,e.bytesValue);case 7:return(function(u,h){const m=u.split("/"),y=h.split("/");for(let v=0;v<m.length&&v<y.length;v++){const w=Ce(m[v],y[v]);if(w!==0)return w}return Ce(m.length,y.length)})(i.referenceValue,e.referenceValue);case 8:return(function(u,h){const m=Ce(at(u.latitude),at(h.latitude));return m!==0?m:Ce(at(u.longitude),at(h.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return Eg(i.arrayValue,e.arrayValue);case 10:return(function(u,h){var b,z,Z,Y;const m=u.fields||{},y=h.fields||{},v=(b=m[Bu])==null?void 0:b.arrayValue,w=(z=y[Bu])==null?void 0:z.arrayValue,A=Ce(((Z=v==null?void 0:v.values)==null?void 0:Z.length)||0,((Y=w==null?void 0:w.values)==null?void 0:Y.length)||0);return A!==0?A:Eg(v,w)})(i.mapValue,e.mapValue);case 11:return(function(u,h){if(u===vu.mapValue&&h===vu.mapValue)return 0;if(u===vu.mapValue)return 1;if(h===vu.mapValue)return-1;const m=u.fields||{},y=Object.keys(m),v=h.fields||{},w=Object.keys(v);y.sort(),w.sort();for(let A=0;A<y.length&&A<w.length;++A){const b=fd(y[A],w[A]);if(b!==0)return b;const z=yo(m[y[A]],v[w[A]]);if(z!==0)return z}return Ce(y.length,w.length)})(i.mapValue,e.mapValue);default:throw pe(23264,{he:t})}}function vg(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Ce(i,e);const t=wi(i),s=wi(e),o=Ce(t.seconds,s.seconds);return o!==0?o:Ce(t.nanos,s.nanos)}function Eg(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=yo(t[o],s[o]);if(u)return u}return Ce(t.length,s.length)}function _o(i){return pd(i)}function pd(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const s=wi(t);return`time(${s.seconds},${s.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return Ti(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return he.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=pd(u);return s+"]"})(i.arrayValue):"mapValue"in i?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${pd(t.fields[h])}`;return o+"}"})(i.mapValue):pe(61005,{value:i})}function ku(i){switch(Ii(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=sc(i);return e?16+ku(e):16;case 5:return 2*i.stringValue.length;case 6:return Ti(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+ku(u)),0)})(i.arrayValue);case 10:case 11:return(function(s){let o=0;return hs(s.fields,((u,h)=>{o+=u.length+ku(h)})),o})(i.mapValue);default:throw pe(13486,{value:i})}}function md(i){return!!i&&"integerValue"in i}function Kd(i){return!!i&&"arrayValue"in i}function wg(i){return!!i&&"nullValue"in i}function Tg(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Cu(i){return!!i&&"mapValue"in i}function iS(i){var t,s;return((s=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[p_])==null?void 0:s.stringValue)===m_}function Pa(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const e={mapValue:{fields:{}}};return hs(i.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Pa(s))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Pa(i.arrayValue.values[t]);return e}return{...i}}function sS(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===rS}/**
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
 */class mn{constructor(e){this.value=e}static empty(){return new mn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Cu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Pa(t)}setAll(e){let t=Ct.emptyPath(),s={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const y=this.getFieldsMap(t);this.applyChanges(y,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Pa(h):o.push(m.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Cu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return rr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Cu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){hs(t,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new mn(Pa(this.value))}}function g_(i){const e=[];return hs(i.fields,((t,s)=>{const o=new Ct([t]);if(Cu(s)){const u=g_(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)})),new Pn(e)}/**
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
 */class Ft{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Ft(e,0,ye.min(),ye.min(),ye.min(),mn.empty(),0)}static newFoundDocument(e,t,s,o){return new Ft(e,1,t,ye.min(),s,o,0)}static newNoDocument(e,t){return new Ft(e,2,t,ye.min(),ye.min(),mn.empty(),0)}static newUnknownDocument(e,t){return new Ft(e,3,t,ye.min(),ye.min(),mn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ye.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ye.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class $u{constructor(e,t){this.position=e,this.inclusive=t}}function Ig(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=he.comparator(he.fromName(h.referenceValue),t.key):s=yo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Sg(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!rr(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class Hu{constructor(e,t="asc"){this.field=e,this.dir=t}}function oS(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class y_{}class mt extends y_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new lS(e,t,s):t==="array-contains"?new hS(e,s):t==="in"?new dS(e,s):t==="not-in"?new fS(e,s):t==="array-contains-any"?new pS(e,s):new mt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new uS(e,s):new cS(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(yo(t,this.value)):t!==null&&Ii(this.value)===Ii(t)&&this.matchesComparison(yo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return pe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ir extends y_{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new ir(e,t)}matches(e){return __(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function __(i){return i.op==="and"}function v_(i){return aS(i)&&__(i)}function aS(i){for(const e of i.filters)if(e instanceof ir)return!1;return!0}function gd(i){if(i instanceof mt)return i.field.canonicalString()+i.op.toString()+_o(i.value);if(v_(i))return i.filters.map((e=>gd(e))).join(",");{const e=i.filters.map((t=>gd(t))).join(",");return`${i.op}(${e})`}}function E_(i,e){return i instanceof mt?(function(s,o){return o instanceof mt&&s.op===o.op&&s.field.isEqual(o.field)&&rr(s.value,o.value)})(i,e):i instanceof ir?(function(s,o){return o instanceof ir&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,h,m)=>u&&E_(h,o.filters[m])),!0):!1})(i,e):void pe(19439)}function w_(i){return i instanceof mt?(function(t){return`${t.field.canonicalString()} ${t.op} ${_o(t.value)}`})(i):i instanceof ir?(function(t){return t.op.toString()+" {"+t.getFilters().map(w_).join(" ,")+"}"})(i):"Filter"}class lS extends mt{constructor(e,t,s){super(e,t,s),this.key=he.fromName(s.referenceValue)}matches(e){const t=he.comparator(e.key,this.key);return this.matchesComparison(t)}}class uS extends mt{constructor(e,t){super(e,"in",t),this.keys=T_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class cS extends mt{constructor(e,t){super(e,"not-in",t),this.keys=T_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function T_(i,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>he.fromName(s.referenceValue)))}class hS extends mt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Kd(t)&&Ua(t.arrayValue,this.value)}}class dS extends mt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ua(this.value.arrayValue,t)}}class fS extends mt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ua(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ua(this.value.arrayValue,t)}}class pS extends mt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Kd(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Ua(this.value.arrayValue,s)))}}/**
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
 */class mS{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Te=null}}function Ag(i,e=null,t=[],s=[],o=null,u=null,h=null){return new mS(i,e,t,s,o,u,h)}function Gd(i){const e=ve(i);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>gd(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),ic(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>_o(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>_o(s))).join(",")),e.Te=t}return e.Te}function Qd(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!oS(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!E_(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!Sg(i.startAt,e.startAt)&&Sg(i.endAt,e.endAt)}function yd(i){return he.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
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
 */class oc{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=y,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function gS(i,e,t,s,o,u,h,m){return new oc(i,e,t,s,o,u,h,m)}function Yd(i){return new oc(i)}function Rg(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function yS(i){return he.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}function _S(i){return i.collectionGroup!==null}function Na(i){const e=ve(i);if(e.Ee===null){e.Ee=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ee.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new yt(Ct.comparator);return h.filters.forEach((y=>{y.getFlattenedFilters().forEach((v=>{v.isInequality()&&(m=m.add(v.field))}))})),m})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ee.push(new Hu(u,s))})),t.has(Ct.keyField().canonicalString())||e.Ee.push(new Hu(Ct.keyField(),s))}return e.Ee}function Xn(i){const e=ve(i);return e.Ie||(e.Ie=vS(e,Na(i))),e.Ie}function vS(i,e){if(i.limitType==="F")return Ag(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Hu(o.field,u)}));const t=i.endAt?new $u(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new $u(i.startAt.position,i.startAt.inclusive):null;return Ag(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function _d(i,e,t){return new oc(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function ac(i,e){return Qd(Xn(i),Xn(e))&&i.limitType===e.limitType}function I_(i){return`${Gd(Xn(i))}|lt:${i.limitType}`}function io(i){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>w_(o))).join(", ")}]`),ic(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>_o(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>_o(o))).join(",")),`Target(${s})`})(Xn(i))}; limitType=${i.limitType})`}function lc(i,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):he.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(i,e)&&(function(s,o){for(const u of Na(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(i,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(i,e)&&(function(s,o){return!(s.startAt&&!(function(h,m,y){const v=Ig(h,m,y);return h.inclusive?v<=0:v<0})(s.startAt,Na(s),o)||s.endAt&&!(function(h,m,y){const v=Ig(h,m,y);return h.inclusive?v>=0:v>0})(s.endAt,Na(s),o))})(i,e)}function ES(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function S_(i){return(e,t)=>{let s=!1;for(const o of Na(i)){const u=wS(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function wS(i,e,t){const s=i.field.isKeyField()?he.comparator(e.key,t.key):(function(u,h,m){const y=h.data.field(u),v=m.data.field(u);return y!==null&&v!==null?yo(y,v):pe(42886)})(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return pe(19790,{direction:i.dir})}}/**
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
 */class ds{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){hs(this.inner,((t,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return l_(this.inner)}size(){return this.innerSize}}/**
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
 */const TS=new tt(he.comparator);function Nr(){return TS}const A_=new tt(he.comparator);function Aa(...i){let e=A_;for(const t of i)e=e.insert(t.key,t);return e}function R_(i){let e=A_;return i.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function ts(){return xa()}function k_(){return xa()}function xa(){return new ds((i=>i.toString()),((i,e)=>i.isEqual(e)))}const IS=new tt(he.comparator),SS=new yt(he.comparator);function Pe(...i){let e=SS;for(const t of i)e=e.add(t);return e}const AS=new yt(Ce);function RS(){return AS}/**
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
 */function Jd(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ju(e)?"-0":e}}function C_(i){return{integerValue:""+i}}function kS(i,e){return JI(e)?C_(e):Jd(i,e)}/**
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
 */class uc{constructor(){this._=void 0}}function CS(i,e,t){return i instanceof qu?(function(o,u){const h={fields:{[h_]:{stringValue:c_},[f_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Wd(u)&&(u=sc(u)),u&&(h.fields[d_]=u),{mapValue:h}})(t,e):i instanceof ja?N_(i,e):i instanceof za?x_(i,e):(function(o,u){const h=P_(o,u),m=kg(h)+kg(o.Ae);return md(h)&&md(o.Ae)?C_(m):Jd(o.serializer,m)})(i,e)}function PS(i,e,t){return i instanceof ja?N_(i,e):i instanceof za?x_(i,e):t}function P_(i,e){return i instanceof Wu?(function(s){return md(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class qu extends uc{}class ja extends uc{constructor(e){super(),this.elements=e}}function N_(i,e){const t=D_(e);for(const s of i.elements)t.some((o=>rr(o,s)))||t.push(s);return{arrayValue:{values:t}}}class za extends uc{constructor(e){super(),this.elements=e}}function x_(i,e){let t=D_(e);for(const s of i.elements)t=t.filter((o=>!rr(o,s)));return{arrayValue:{values:t}}}class Wu extends uc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function kg(i){return at(i.integerValue||i.doubleValue)}function D_(i){return Kd(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function NS(i,e){return i.field.isEqual(e.field)&&(function(s,o){return s instanceof ja&&o instanceof ja||s instanceof za&&o instanceof za?go(s.elements,o.elements,rr):s instanceof Wu&&o instanceof Wu?rr(s.Ae,o.Ae):s instanceof qu&&o instanceof qu})(i.transform,e.transform)}class xS{constructor(e,t){this.version=e,this.transformResults=t}}class Zn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Zn}static exists(e){return new Zn(void 0,e)}static updateTime(e){return new Zn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Pu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class cc{}function V_(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new Xd(i.key,Zn.none()):new Qa(i.key,i.data,Zn.none());{const t=i.data,s=mn.empty();let o=new yt(Ct.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new fs(i.key,s,new Pn(o.toArray()),Zn.none())}}function DS(i,e,t){i instanceof Qa?(function(o,u,h){const m=o.value.clone(),y=Pg(o.fieldTransforms,u,h.transformResults);m.setAll(y),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(i,e,t):i instanceof fs?(function(o,u,h){if(!Pu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=Pg(o.fieldTransforms,u,h.transformResults),y=u.data;y.setAll(O_(o)),y.setAll(m),u.convertToFoundDocument(h.version,y).setHasCommittedMutations()})(i,e,t):(function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Da(i,e,t,s){return i instanceof Qa?(function(u,h,m,y){if(!Pu(u.precondition,h))return m;const v=u.value.clone(),w=Ng(u.fieldTransforms,y,h);return v.setAll(w),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null})(i,e,t,s):i instanceof fs?(function(u,h,m,y){if(!Pu(u.precondition,h))return m;const v=Ng(u.fieldTransforms,y,h),w=h.data;return w.setAll(O_(u)),w.setAll(v),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((A=>A.field)))})(i,e,t,s):(function(u,h,m){return Pu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(i,e,t)}function VS(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=P_(s.transform,o||null);u!=null&&(t===null&&(t=mn.empty()),t.set(s.field,u))}return t||null}function Cg(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&go(s,o,((u,h)=>NS(u,h)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Qa extends cc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class fs extends cc{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function O_(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}})),e}function Pg(i,e,t){const s=new Map;Ue(i.length===t.length,32656,{Ve:t.length,de:i.length});for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,PS(h,m,t[o]))}return s}function Ng(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,CS(u,h,e))}return s}class Xd extends cc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class OS extends cc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class LS{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&DS(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Da(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Da(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=k_();return this.mutations.forEach((o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const y=V_(h,m);y!==null&&s.set(o.key,y),h.isValidDocument()||h.convertToNoDocument(ye.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Pe())}isEqual(e){return this.batchId===e.batchId&&go(this.mutations,e.mutations,((t,s)=>Cg(t,s)))&&go(this.baseMutations,e.baseMutations,((t,s)=>Cg(t,s)))}}class Zd{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Ue(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return IS})();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new Zd(e,t,s,o)}}/**
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
 */class MS{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class bS{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ht,Ve;function FS(i){switch(i){case $.OK:return pe(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return pe(15467,{code:i})}}function L_(i){if(i===void 0)return Pr("GRPC error has no .code"),$.UNKNOWN;switch(i){case ht.OK:return $.OK;case ht.CANCELLED:return $.CANCELLED;case ht.UNKNOWN:return $.UNKNOWN;case ht.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case ht.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case ht.INTERNAL:return $.INTERNAL;case ht.UNAVAILABLE:return $.UNAVAILABLE;case ht.UNAUTHENTICATED:return $.UNAUTHENTICATED;case ht.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case ht.NOT_FOUND:return $.NOT_FOUND;case ht.ALREADY_EXISTS:return $.ALREADY_EXISTS;case ht.PERMISSION_DENIED:return $.PERMISSION_DENIED;case ht.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case ht.ABORTED:return $.ABORTED;case ht.OUT_OF_RANGE:return $.OUT_OF_RANGE;case ht.UNIMPLEMENTED:return $.UNIMPLEMENTED;case ht.DATA_LOSS:return $.DATA_LOSS;default:return pe(39323,{code:i})}}(Ve=ht||(ht={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function US(){return new TextEncoder}/**
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
 */const jS=new yi([4294967295,4294967295],0);function xg(i){const e=US().encode(i),t=new Jy;return t.update(e),new Uint8Array(t.digest())}function Dg(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new yi([t,s],0),new yi([o,u],0)]}class ef{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Ra(`Invalid padding: ${t}`);if(s<0)throw new Ra(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ra(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Ra(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=yi.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(yi.fromNumber(s)));return o.compare(jS)===1&&(o=new yi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=xg(e),[s,o]=Dg(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);if(!this.we(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new ef(u,o,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.ge===0)return;const t=xg(e),[s,o]=Dg(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Ra extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class hc{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Ya.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new hc(ye.min(),o,new tt(Ce),Nr(),Pe())}}class Ya{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Ya(s,t,Pe(),Pe(),Pe())}}/**
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
 */class Nu{constructor(e,t,s,o){this.be=e,this.removedTargetIds=t,this.key=s,this.De=o}}class M_{constructor(e,t){this.targetId=e,this.Ce=t}}class b_{constructor(e,t,s=Pt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Vg{constructor(){this.ve=0,this.Fe=Og(),this.Me=Pt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Pe(),t=Pe(),s=Pe();return this.Fe.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:pe(38017,{changeType:u})}})),new Ya(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=Og()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Ue(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class zS{constructor(e){this.Ge=e,this.ze=new Map,this.je=Nr(),this.Je=Eu(),this.He=Eu(),this.Ze=new tt(Ce)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:pe(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const u=o.target;if(yd(u))if(s===0){const h=new he(u.path);this.et(t,h,Ft.newNoDocument(h,ye.min()))}else Ue(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const m=this.ut(e),y=m?this.ct(m,e,h):1;if(y!==0){this.it(t);const v=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,v)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=Ti(s).toUint8Array()}catch(y){if(y instanceof u_)return ls("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new ef(h,o,u)}catch(y){return ls(y instanceof Ra?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.ge===0?null:m}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach((u=>{const h=this.Ge.ht(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.et(t,u,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((u,h)=>{const m=this.ot(h);if(m){if(u.current&&yd(m.target)){const y=new he(m.target.path);this.Et(y).has(h)||this.It(h,y)||this.et(h,y,Ft.newNoDocument(y,e))}u.Be&&(t.set(h,u.ke()),u.qe())}}));let s=Pe();this.He.forEach(((u,h)=>{let m=!0;h.forEachWhile((y=>{const v=this.ot(y);return!v||v.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.je.forEach(((u,h)=>h.setReadTime(e)));const o=new hc(e,t,this.Ze,this.je,s);return this.je=Nr(),this.Je=Eu(),this.He=Eu(),this.Ze=new tt(Ce),o}Ye(e,t){if(!this.rt(e))return;const s=this.It(e,t.key)?2:0;this.nt(e).Ke(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.It(e,t)?o.Ke(t,1):o.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Vg,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new yt(Ce),this.He=this.He.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new yt(Ce),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||te("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Vg),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Eu(){return new tt(he.comparator)}function Og(){return new tt(he.comparator)}const BS={asc:"ASCENDING",desc:"DESCENDING"},$S={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},HS={and:"AND",or:"OR"};class qS{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function vd(i,e){return i.useProto3Json||ic(e)?e:{value:e}}function Ku(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function F_(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function WS(i,e){return Ku(i,e.toTimestamp())}function er(i){return Ue(!!i,49232),ye.fromTimestamp((function(t){const s=wi(t);return new Qe(s.seconds,s.nanos)})(i))}function tf(i,e){return Ed(i,e).canonicalString()}function Ed(i,e){const t=(function(o){return new Ge(["projects",o.projectId,"databases",o.database])})(i).child("documents");return e===void 0?t:t.child(e)}function U_(i){const e=Ge.fromString(i);return Ue(H_(e),10190,{key:e.toString()}),e}function wd(i,e){return tf(i.databaseId,e.path)}function ed(i,e){const t=U_(e);if(t.get(1)!==i.databaseId.projectId)throw new ae($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new ae($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new he(z_(t))}function j_(i,e){return tf(i.databaseId,e)}function KS(i){const e=U_(i);return e.length===4?Ge.emptyPath():z_(e)}function Td(i){return new Ge(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function z_(i){return Ue(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function Lg(i,e,t){return{name:wd(i,e),fields:t.value.mapValue.fields}}function GS(i,e){let t;if("targetChange"in e){e.targetChange;const s=(function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:pe(39313,{state:v})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(v,w){return v.useProto3Json?(Ue(w===void 0||typeof w=="string",58123),Pt.fromBase64String(w||"")):(Ue(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Pt.fromUint8Array(w||new Uint8Array))})(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(v){const w=v.code===void 0?$.UNKNOWN:L_(v.code);return new ae(w,v.message||"")})(h);t=new b_(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=ed(i,s.document.name),u=er(s.document.updateTime),h=s.document.createTime?er(s.document.createTime):ye.min(),m=new mn({mapValue:{fields:s.document.fields}}),y=Ft.newFoundDocument(o,u,h,m),v=s.targetIds||[],w=s.removedTargetIds||[];t=new Nu(v,w,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=ed(i,s.document),u=s.readTime?er(s.readTime):ye.min(),h=Ft.newNoDocument(o,u),m=s.removedTargetIds||[];t=new Nu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=ed(i,s.document),u=s.removedTargetIds||[];t=new Nu([],u,o,null)}else{if(!("filter"in e))return pe(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new bS(o,u),m=s.targetId;t=new M_(m,h)}}return t}function QS(i,e){let t;if(e instanceof Qa)t={update:Lg(i,e.key,e.value)};else if(e instanceof Xd)t={delete:wd(i,e.key)};else if(e instanceof fs)t={update:Lg(i,e.key,e.data),updateMask:iA(e.fieldMask)};else{if(!(e instanceof OS))return pe(16599,{dt:e.type});t={verify:wd(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(u,h){const m=h.transform;if(m instanceof qu)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof ja)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof za)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Wu)return{fieldPath:h.field.canonicalString(),increment:m.Ae};throw pe(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:WS(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:pe(27497)})(i,e.precondition)),t}function YS(i,e){return i&&i.length>0?(Ue(e!==void 0,14353),i.map((t=>(function(o,u){let h=o.updateTime?er(o.updateTime):er(u);return h.isEqual(ye.min())&&(h=er(u)),new xS(h,o.transformResults||[])})(t,e)))):[]}function JS(i,e){return{documents:[j_(i,e.path)]}}function XS(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=j_(i,o);const u=(function(v){if(v.length!==0)return $_(ir.create(v,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const h=(function(v){if(v.length!==0)return v.map((w=>(function(b){return{field:so(b.field),direction:tA(b.dir)}})(w)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=vd(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(v){return{before:v.inclusive,values:v.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(v){return{before:!v.inclusive,values:v.position}})(e.endAt)),{ft:t,parent:o}}function ZS(i){let e=KS(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Ue(s===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=(function(A){const b=B_(A);return b instanceof ir&&v_(b)?b.getFilters():[b]})(t.where));let h=[];t.orderBy&&(h=(function(A){return A.map((b=>(function(Z){return new Hu(oo(Z.field),(function(G){switch(G){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(Z.direction))})(b)))})(t.orderBy));let m=null;t.limit&&(m=(function(A){let b;return b=typeof A=="object"?A.value:A,ic(b)?null:b})(t.limit));let y=null;t.startAt&&(y=(function(A){const b=!!A.before,z=A.values||[];return new $u(z,b)})(t.startAt));let v=null;return t.endAt&&(v=(function(A){const b=!A.before,z=A.values||[];return new $u(z,b)})(t.endAt)),gS(e,o,h,u,m,"F",y,v)}function eA(i,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return pe(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function B_(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=oo(t.unaryFilter.field);return mt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=oo(t.unaryFilter.field);return mt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=oo(t.unaryFilter.field);return mt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=oo(t.unaryFilter.field);return mt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return pe(61313);default:return pe(60726)}})(i):i.fieldFilter!==void 0?(function(t){return mt.create(oo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return pe(58110);default:return pe(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return ir.create(t.compositeFilter.filters.map((s=>B_(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return pe(1026)}})(t.compositeFilter.op))})(i):pe(30097,{filter:i})}function tA(i){return BS[i]}function nA(i){return $S[i]}function rA(i){return HS[i]}function so(i){return{fieldPath:i.canonicalString()}}function oo(i){return Ct.fromServerFormat(i.fieldPath)}function $_(i){return i instanceof mt?(function(t){if(t.op==="=="){if(Tg(t.value))return{unaryFilter:{field:so(t.field),op:"IS_NAN"}};if(wg(t.value))return{unaryFilter:{field:so(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Tg(t.value))return{unaryFilter:{field:so(t.field),op:"IS_NOT_NAN"}};if(wg(t.value))return{unaryFilter:{field:so(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:so(t.field),op:nA(t.op),value:t.value}}})(i):i instanceof ir?(function(t){const s=t.getFilters().map((o=>$_(o)));return s.length===1?s[0]:{compositeFilter:{op:rA(t.op),filters:s}}})(i):pe(54877,{filter:i})}function iA(i){const e=[];return i.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function H_(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}function q_(i){return!!i&&typeof i._toProto=="function"&&i._protoValueType==="ProtoValue"}/**
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
 */class fi{constructor(e,t,s,o,u=ye.min(),h=ye.min(),m=Pt.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=y}withSequenceNumber(e){return new fi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new fi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new fi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new fi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class sA{constructor(e){this.yt=e}}function oA(i){const e=ZS({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?_d(e,e.limit,"L"):e}/**
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
 */class aA{constructor(){this.bn=new lA}addToCollectionParentIndex(e,t){return this.bn.add(t),B.resolve()}getCollectionParents(e,t){return B.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return B.resolve()}deleteFieldIndex(e,t){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,t){return B.resolve()}getDocumentsMatchingTarget(e,t){return B.resolve(null)}getIndexType(e,t){return B.resolve(0)}getFieldIndexes(e,t){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,t){return B.resolve(Ei.min())}getMinOffsetFromCollectionGroup(e,t){return B.resolve(Ei.min())}updateCollectionGroup(e,t,s){return B.resolve()}updateIndexEntries(e,t){return B.resolve()}}class lA{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new yt(Ge.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new yt(Ge.comparator)).toArray()}}/**
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
 */const Mg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},W_=41943040;class Qt{static withCacheSize(e){return new Qt(e,Qt.DEFAULT_COLLECTION_PERCENTILE,Qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Qt.DEFAULT_COLLECTION_PERCENTILE=10,Qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Qt.DEFAULT=new Qt(W_,Qt.DEFAULT_COLLECTION_PERCENTILE,Qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Qt.DISABLED=new Qt(-1,0,0);/**
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
 */class vo{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new vo(0)}static ar(){return new vo(-1)}}/**
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
 */const bg="LruGarbageCollector",uA=1048576;function Fg([i,e],[t,s]){const o=Ce(i,t);return o===0?Ce(e,s):o}class cA{constructor(e){this.Pr=e,this.buffer=new yt(Fg),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Fg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class hA{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){te(bg,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ro(t)?te(bg,"Ignoring IndexedDB error during garbage collection: ",t):await Ao(t)}await this.Ar(3e5)}))}}class dA{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return B.resolve(rc.ce);const s=new cA(t);return this.Vr.forEachTarget(e,(o=>s.Ir(o.sequenceNumber))).next((()=>this.Vr.mr(e,(o=>s.Ir(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(Mg)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Mg):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,o,u,h,m,y,v;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((A=>(A>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),o=this.params.maximumSequenceNumbersToCollect):o=A,h=Date.now(),this.nthSequenceNumber(e,o)))).next((A=>(s=A,m=Date.now(),this.removeTargets(e,s,t)))).next((A=>(u=A,y=Date.now(),this.removeOrphanedDocuments(e,s)))).next((A=>(v=Date.now(),ro()<=ke.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(y-m)+`ms
	Removed ${A} documents in `+(v-y)+`ms
Total Duration: ${v-w}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:A}))))}}function fA(i,e){return new dA(i,e)}/**
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
 */class pA{constructor(){this.changes=new ds((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ft.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?B.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class mA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class gA{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&Da(s.mutation,o,Pn.empty(),Qe.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Pe()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Pe()){const o=ts();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((u=>{let h=Aa();return u.forEach(((m,y)=>{h=h.insert(m,y.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=ts();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Pe())))}populateOverlays(e,t,s){const o=[];return s.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,o){let u=Nr();const h=xa(),m=(function(){return xa()})();return t.forEach(((y,v)=>{const w=s.get(v.key);o.has(v.key)&&(w===void 0||w.mutation instanceof fs)?u=u.insert(v.key,v):w!==void 0?(h.set(v.key,w.mutation.getFieldMask()),Da(w.mutation,v,w.mutation.getFieldMask(),Qe.now())):h.set(v.key,Pn.empty())})),this.recalculateAndSaveOverlays(e,u).next((y=>(y.forEach(((v,w)=>h.set(v,w))),t.forEach(((v,w)=>m.set(v,new mA(w,h.get(v)??null)))),m)))}recalculateAndSaveOverlays(e,t){const s=xa();let o=new tt(((h,m)=>h-m)),u=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((y=>{const v=t.get(y);if(v===null)return;let w=s.get(y)||Pn.empty();w=m.applyToLocalView(v,w),s.set(y,w);const A=(o.get(m.batchId)||Pe()).add(y);o=o.insert(m.batchId,A)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),v=y.key,w=y.value,A=k_();w.forEach((b=>{if(!u.has(b)){const z=V_(t.get(b),s.get(b));z!==null&&A.set(b,z),u=u.add(b)}})),h.push(this.documentOverlayCache.saveOverlays(e,v,A))}return B.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return yS(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):_S(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):B.resolve(ts());let m=Ma,y=u;return h.next((v=>B.forEach(v,((w,A)=>(m<A.largestBatchId&&(m=A.largestBatchId),u.get(w)?B.resolve():this.remoteDocumentCache.getEntry(e,w).next((b=>{y=y.insert(w,b)}))))).next((()=>this.populateOverlays(e,v,u))).next((()=>this.computeViews(e,y,v,Pe()))).next((w=>({batchId:m,changes:R_(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new he(t)).next((s=>{let o=Aa();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Aa();return this.indexManager.getCollectionParents(e,u).next((m=>B.forEach(m,(y=>{const v=(function(A,b){return new oc(b,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)})(t,y.child(u));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next((w=>{w.forEach(((A,b)=>{h=h.insert(A,b)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o)))).next((h=>{u.forEach(((y,v)=>{const w=v.getKey();h.get(w)===null&&(h=h.insert(w,Ft.newInvalidDocument(w)))}));let m=Aa();return h.forEach(((y,v)=>{const w=u.get(y);w!==void 0&&Da(w.mutation,v,Pn.empty(),Qe.now()),lc(t,v)&&(m=m.insert(y,v))})),m}))}}/**
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
 */class yA{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return B.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:er(o.createTime)}})(t)),B.resolve()}getNamedQuery(e,t){return B.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(o){return{name:o.name,query:oA(o.bundledQuery),readTime:er(o.readTime)}})(t)),B.resolve()}}/**
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
 */class _A{constructor(){this.overlays=new tt(he.comparator),this.Lr=new Map}getOverlay(e,t){return B.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ts();return B.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,u)=>{this.St(e,t,u)})),B.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Lr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.Lr.delete(s)),B.resolve()}getOverlaysForCollection(e,t,s){const o=ts(),u=t.length+1,h=new he(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const y=m.getNext().value,v=y.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===u&&y.largestBatchId>s&&o.set(y.getKey(),y)}return B.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new tt(((v,w)=>v-w));const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let w=u.get(v.largestBatchId);w===null&&(w=ts(),u=u.insert(v.largestBatchId,w)),w.set(v.getKey(),v)}}const m=ts(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach(((v,w)=>m.set(v,w))),!(m.size()>=o)););return B.resolve(m)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Lr.get(o.largestBatchId).delete(s.key);this.Lr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new MS(t,s));let u=this.Lr.get(t);u===void 0&&(u=Pe(),this.Lr.set(t,u)),this.Lr.set(t,u.add(s.key))}}/**
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
 */class vA{constructor(){this.sessionToken=Pt.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,B.resolve()}}/**
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
 */class nf{constructor(){this.kr=new yt(Tt.qr),this.Kr=new yt(Tt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new Tt(e,t);this.kr=this.kr.add(s),this.Kr=this.Kr.add(s)}$r(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new Tt(e,t))}Qr(e,t){e.forEach((s=>this.removeReference(s,t)))}Gr(e){const t=new he(new Ge([])),s=new Tt(t,e),o=new Tt(t,e+1),u=[];return this.Kr.forEachInRange([s,o],(h=>{this.Wr(h),u.push(h.key)})),u}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new he(new Ge([])),s=new Tt(t,e),o=new Tt(t,e+1);let u=Pe();return this.Kr.forEachInRange([s,o],(h=>{u=u.add(h.key)})),u}containsKey(e){const t=new Tt(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Tt{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return he.comparator(e.key,t.key)||Ce(e.Jr,t.Jr)}static Ur(e,t){return Ce(e.Jr,t.Jr)||he.comparator(e.key,t.key)}}/**
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
 */class EA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new yt(Tt.qr)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new LS(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Hr=this.Hr.add(new Tt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return B.resolve(h)}lookupMutationBatch(e,t){return B.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),u=o<0?0:o;return B.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?qd:this.Yn-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Tt(t,0),o=new Tt(t,Number.POSITIVE_INFINITY),u=[];return this.Hr.forEachInRange([s,o],(h=>{const m=this.Zr(h.Jr);u.push(m)})),B.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new yt(Ce);return t.forEach((o=>{const u=new Tt(o,0),h=new Tt(o,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([u,h],(m=>{s=s.add(m.Jr)}))})),B.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;he.isDocumentKey(u)||(u=u.child(""));const h=new Tt(new he(u),0);let m=new yt(Ce);return this.Hr.forEachWhile((y=>{const v=y.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(m=m.add(y.Jr)),!0)}),h),B.resolve(this.Yr(m))}Yr(e){const t=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Ue(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Hr;return B.forEach(t.mutations,(o=>{const u=new Tt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Hr=s}))}nr(e){}containsKey(e,t){const s=new Tt(t,0),o=this.Hr.firstAfterOrEqual(s);return B.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class wA{constructor(e){this.ti=e,this.docs=(function(){return new tt(he.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return B.resolve(s?s.document.mutableCopy():Ft.newInvalidDocument(t))}getEntries(e,t){let s=Nr();return t.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Ft.newInvalidDocument(o))})),B.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Nr();const h=t.path,m=new he(h.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:v,value:{document:w}}=y.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||KI(WI(w),s)<=0||(o.has(w.key)||lc(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return B.resolve(u)}getAllFromCollectionGroup(e,t,s,o){pe(9500)}ni(e,t){return B.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new TA(this)}getSize(e){return B.resolve(this.size)}}class TA extends pA{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Mr.addEntry(e,o)):this.Mr.removeEntry(s)})),B.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class IA{constructor(e){this.persistence=e,this.ri=new ds((t=>Gd(t)),Qd),this.lastRemoteSnapshotVersion=ye.min(),this.highestTargetId=0,this.ii=0,this.si=new nf,this.targetCount=0,this.oi=vo._r()}forEachTarget(e,t){return this.ri.forEach(((s,o)=>t(o))),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),B.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new vo(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,B.resolve()}updateTargetData(e,t){return this.lr(t),B.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.ri.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.ri.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),B.waitFor(u).next((()=>o))}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return B.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),B.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((h=>{u.push(o.markPotentiallyOrphaned(e,h))})),B.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),B.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return B.resolve(s)}containsKey(e,t){return B.resolve(this.si.containsKey(t))}}/**
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
 */class K_{constructor(e,t){this._i={},this.overlays={},this.ai=new rc(0),this.ui=!1,this.ui=!0,this.ci=new vA,this.referenceDelegate=e(this),this.li=new IA(this),this.indexManager=new aA,this.remoteDocumentCache=(function(o){return new wA(o)})((s=>this.referenceDelegate.hi(s))),this.serializer=new sA(t),this.Pi=new yA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new _A,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new EA(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){te("MemoryPersistence","Starting transaction:",e);const o=new SA(this.ai.next());return this.referenceDelegate.Ti(),s(o).next((u=>this.referenceDelegate.Ei(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ii(e,t){return B.or(Object.values(this._i).map((s=>()=>s.containsKey(e,t))))}}class SA extends QI{constructor(e){super(),this.currentSequenceNumber=e}}class rf{constructor(e){this.persistence=e,this.Ri=new nf,this.Ai=null}static Vi(e){return new rf(e)}get di(){if(this.Ai)return this.Ai;throw pe(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),B.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),B.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),B.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((o=>this.di.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.di.add(u.toString())))})).next((()=>s.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.di,(s=>{const o=he.fromPath(s);return this.mi(e,o).next((u=>{u||t.removeEntry(o,ye.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return B.or([()=>B.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class Gu{constructor(e,t){this.persistence=e,this.fi=new ds((s=>XI(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=fA(this,t)}static Vi(e,t){return new Gu(e,t)}Ti(){}Ei(e){return B.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}pr(e){let t=0;return this.mr(e,(s=>{t++})).next((()=>t))}mr(e,t){return B.forEach(this.fi,((s,o)=>this.wr(e,s,o).next((u=>u?B.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ni(e,(h=>this.wr(e,h,t).next((m=>{m||(s++,u.removeEntry(h,ye.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),B.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),B.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),B.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ku(e.data.value)),t}wr(e,t,s){return B.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.fi.get(t);return B.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class sf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Ts=s,this.Es=o}static Is(e,t){let s=Pe(),o=Pe();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new sf(e,t.fromCache,s,o)}}/**
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
 */class AA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class RA{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return m0()?8:YI(Ut())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.gs(e,t).next((h=>{u.result=h})).next((()=>{if(!u.result)return this.ps(e,t,o,s).next((h=>{u.result=h}))})).next((()=>{if(u.result)return;const h=new AA;return this.ys(e,t,h).next((m=>{if(u.result=m,this.As)return this.ws(e,t,h,m.size)}))})).next((()=>u.result))}ws(e,t,s,o){return s.documentReadCount<this.Vs?(ro()<=ke.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",io(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),B.resolve()):(ro()<=ke.DEBUG&&te("QueryEngine","Query:",io(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ds*o?(ro()<=ke.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",io(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xn(t))):B.resolve())}gs(e,t){if(Rg(t))return B.resolve(null);let s=Xn(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=_d(t,null,"F"),s=Xn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const h=Pe(...u);return this.fs.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((y=>{const v=this.Ss(t,m);return this.bs(t,v,h,y.readTime)?this.gs(e,_d(t,null,"F")):this.Ds(e,v,t,y)}))))})))))}ps(e,t,s,o){return Rg(t)||o.isEqual(ye.min())?B.resolve(null):this.fs.getDocuments(e,s).next((u=>{const h=this.Ss(t,u);return this.bs(t,h,s,o)?B.resolve(null):(ro()<=ke.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),io(t)),this.Ds(e,h,t,qI(o,Ma)).next((m=>m)))}))}Ss(e,t){let s=new yt(S_(e));return t.forEach(((o,u)=>{lc(e,u)&&(s=s.add(u))})),s}bs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ys(e,t,s){return ro()<=ke.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",io(t)),this.fs.getDocumentsMatchingQuery(e,t,Ei.min(),s)}Ds(e,t,s,o){return this.fs.getDocumentsMatchingQuery(e,s,o).next((u=>(t.forEach((h=>{u=u.insert(h.key,h)})),u)))}}/**
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
 */const of="LocalStore",kA=3e8;class CA{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.vs=new tt(Ce),this.Fs=new ds((u=>Gd(u)),Qd),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new gA(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function PA(i,e,t,s){return new CA(i,e,t,s)}async function G_(i,e){const t=ve(i);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,t.Os(e),t.mutationQueue.getAllMutationBatches(s)))).next((u=>{const h=[],m=[];let y=Pe();for(const v of o){h.push(v.batchId);for(const w of v.mutations)y=y.add(w.key)}for(const v of u){m.push(v.batchId);for(const w of v.mutations)y=y.add(w.key)}return t.localDocuments.getDocuments(s,y).next((v=>({Ns:v,removedBatchIds:h,addedBatchIds:m})))}))}))}function NA(i,e){const t=ve(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),u=t.xs.newChangeBuffer({trackRemovals:!0});return(function(m,y,v,w){const A=v.batch,b=A.keys();let z=B.resolve();return b.forEach((Z=>{z=z.next((()=>w.getEntry(y,Z))).next((Y=>{const G=v.docVersions.get(Z);Ue(G!==null,48541),Y.version.compareTo(G)<0&&(A.applyToRemoteDocument(Y,v),Y.isValidDocument()&&(Y.setReadTime(v.commitVersion),w.addEntry(Y)))}))})),z.next((()=>m.mutationQueue.removeMutationBatch(y,A)))})(t,s,e,u).next((()=>u.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let y=Pe();for(let v=0;v<m.mutationResults.length;++v)m.mutationResults[v].transformResults.length>0&&(y=y.add(m.batch.mutations[v].key));return y})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function Q_(i){const e=ve(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function xA(i,e){const t=ve(i),s=e.snapshotVersion;let o=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const h=t.xs.newChangeBuffer({trackRemovals:!0});o=t.vs;const m=[];e.targetChanges.forEach(((w,A)=>{const b=o.get(A);if(!b)return;m.push(t.li.removeMatchingKeys(u,w.removedDocuments,A).next((()=>t.li.addMatchingKeys(u,w.addedDocuments,A))));let z=b.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(A)!==null?z=z.withResumeToken(Pt.EMPTY_BYTE_STRING,ye.min()).withLastLimboFreeSnapshotVersion(ye.min()):w.resumeToken.approximateByteSize()>0&&(z=z.withResumeToken(w.resumeToken,s)),o=o.insert(A,z),(function(Y,G,Ee){return Y.resumeToken.approximateByteSize()===0||G.snapshotVersion.toMicroseconds()-Y.snapshotVersion.toMicroseconds()>=kA?!0:Ee.addedDocuments.size+Ee.modifiedDocuments.size+Ee.removedDocuments.size>0})(b,z,w)&&m.push(t.li.updateTargetData(u,z))}));let y=Nr(),v=Pe();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))})),m.push(DA(u,h,e.documentUpdates).next((w=>{y=w.Bs,v=w.Ls}))),!s.isEqual(ye.min())){const w=t.li.getLastRemoteSnapshotVersion(u).next((A=>t.li.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(w)}return B.waitFor(m).next((()=>h.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,y,v))).next((()=>y))})).then((u=>(t.vs=o,u)))}function DA(i,e,t){let s=Pe(),o=Pe();return t.forEach((u=>s=s.add(u))),e.getEntries(i,s).next((u=>{let h=Nr();return t.forEach(((m,y)=>{const v=u.get(m);y.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(m)),y.isNoDocument()&&y.version.isEqual(ye.min())?(e.removeEntry(m,y.readTime),h=h.insert(m,y)):!v.isValidDocument()||y.version.compareTo(v.version)>0||y.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(y),h=h.insert(m,y)):te(of,"Ignoring outdated watch update for ",m,". Current version:",v.version," Watch version:",y.version)})),{Bs:h,Ls:o}}))}function VA(i,e){const t=ve(i);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=qd),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function OA(i,e){const t=ve(i);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.li.getTargetData(s,e).next((u=>u?(o=u,B.resolve(o)):t.li.allocateTargetId(s).next((h=>(o=new fi(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.vs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s}))}async function Id(i,e,t){const s=ve(i),o=s.vs.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Ro(h))throw h;te(of,`Failed to update sequence numbers for target ${e}: ${h}`)}s.vs=s.vs.remove(e),s.Fs.delete(o.target)}function Ug(i,e,t){const s=ve(i);let o=ye.min(),u=Pe();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(y,v,w){const A=ve(y),b=A.Fs.get(w);return b!==void 0?B.resolve(A.vs.get(b)):A.li.getTargetData(v,w)})(s,h,Xn(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(h,m.targetId).next((y=>{u=y}))})).next((()=>s.Cs.getDocumentsMatchingQuery(h,e,t?o:ye.min(),t?u:Pe()))).next((m=>(LA(s,ES(e),m),{documents:m,ks:u})))))}function LA(i,e,t){let s=i.Ms.get(e)||ye.min();t.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),i.Ms.set(e,s)}class jg{constructor(){this.activeTargetIds=RS()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class MA{constructor(){this.vo=new jg,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new jg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class bA{Mo(e){}shutdown(){}}/**
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
 */const zg="ConnectivityMonitor";class Bg{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){te(zg,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){te(zg,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let wu=null;function Sd(){return wu===null?wu=(function(){return 268435456+Math.round(2147483648*Math.random())})():wu++,"0x"+wu.toString(16)}/**
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
 */const td="RestConnection",FA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class UA{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.$o=this.databaseId.database===zu?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,u){const h=Sd(),m=this.Qo(e,t.toUriEncodedString());te(td,`Sending RPC '${e}' ${h}:`,m,s);const y={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(y,o,u);const{host:v}=new URL(m),w=Ha(v);return this.zo(e,m,y,s,w).then((A=>(te(td,`Received RPC '${e}' ${h}: `,A),A)),(A=>{throw ls(td,`RPC '${e}' ${h} failed with error: `,A,"url: ",m,"request:",s),A}))}jo(e,t,s,o,u,h){return this.Wo(e,t,s,o,u)}Go(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+So})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,u)=>e[u]=o)),s&&s.headers.forEach(((o,u)=>e[u]=o))}Qo(e,t){const s=FA[e];let o=`${this.Ko}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(o=`${o}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),o}terminate(){}}/**
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
 */class jA{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const Mt="WebChannelConnection",Ia=(i,e,t)=>{i.listen(e,(s=>{try{t(s)}catch(o){setTimeout((()=>{throw o}),0)}}))};class co extends UA{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!co.c_){const e=t_();Ia(e,e_.STAT_EVENT,(t=>{t.stat===dd.PROXY?te(Mt,"STAT_EVENT: detected buffering proxy"):t.stat===dd.NOPROXY&&te(Mt,"STAT_EVENT: detected no buffering proxy")})),co.c_=!0}}zo(e,t,s,o,u){const h=Sd();return new Promise(((m,y)=>{const v=new Xy;v.setWithCredentials(!0),v.listenOnce(Zy.COMPLETE,(()=>{try{switch(v.getLastErrorCode()){case Ru.NO_ERROR:const A=v.getResponseJson();te(Mt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(A)),m(A);break;case Ru.TIMEOUT:te(Mt,`RPC '${e}' ${h} timed out`),y(new ae($.DEADLINE_EXCEEDED,"Request time out"));break;case Ru.HTTP_ERROR:const b=v.getStatus();if(te(Mt,`RPC '${e}' ${h} failed with status:`,b,"response text:",v.getResponseText()),b>0){let z=v.getResponseJson();Array.isArray(z)&&(z=z[0]);const Z=z==null?void 0:z.error;if(Z&&Z.status&&Z.message){const Y=(function(Ee){const ie=Ee.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(ie)>=0?ie:$.UNKNOWN})(Z.status);y(new ae(Y,Z.message))}else y(new ae($.UNKNOWN,"Server responded with status "+v.getStatus()))}else y(new ae($.UNAVAILABLE,"Connection failed."));break;default:pe(9055,{l_:e,streamId:h,h_:v.getLastErrorCode(),P_:v.getLastError()})}}finally{te(Mt,`RPC '${e}' ${h} completed.`)}}));const w=JSON.stringify(o);te(Mt,`RPC '${e}' ${h} sending request:`,o),v.send(t,"POST",w,s,15)}))}T_(e,t,s){const o=Sd(),u=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=this.createWebChannelTransport(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(m.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(m.useFetchStreams=!0),this.Go(m.initMessageHeaders,t,s),m.encodeInitMessageHeaders=!0;const v=u.join("");te(Mt,`Creating RPC '${e}' stream ${o}: ${v}`,m);const w=h.createWebChannel(v,m);this.E_(w);let A=!1,b=!1;const z=new jA({Jo:Z=>{b?te(Mt,`Not sending because RPC '${e}' stream ${o} is closed:`,Z):(A||(te(Mt,`Opening RPC '${e}' stream ${o} transport.`),w.open(),A=!0),te(Mt,`RPC '${e}' stream ${o} sending:`,Z),w.send(Z))},Ho:()=>w.close()});return Ia(w,Sa.EventType.OPEN,(()=>{b||(te(Mt,`RPC '${e}' stream ${o} transport opened.`),z.i_())})),Ia(w,Sa.EventType.CLOSE,(()=>{b||(b=!0,te(Mt,`RPC '${e}' stream ${o} transport closed`),z.o_(),this.I_(w))})),Ia(w,Sa.EventType.ERROR,(Z=>{b||(b=!0,ls(Mt,`RPC '${e}' stream ${o} transport errored. Name:`,Z.name,"Message:",Z.message),z.o_(new ae($.UNAVAILABLE,"The operation could not be completed")))})),Ia(w,Sa.EventType.MESSAGE,(Z=>{var Y;if(!b){const G=Z.data[0];Ue(!!G,16349);const Ee=G,ie=(Ee==null?void 0:Ee.error)||((Y=Ee[0])==null?void 0:Y.error);if(ie){te(Mt,`RPC '${e}' stream ${o} received error:`,ie);const ue=ie.status;let Ie=(function(C){const I=ht[C];if(I!==void 0)return L_(I)})(ue),De=ie.message;ue==="NOT_FOUND"&&De.includes("database")&&De.includes("does not exist")&&De.includes(this.databaseId.database)&&ls(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Ie===void 0&&(Ie=$.INTERNAL,De="Unknown error status: "+ue+" with message "+ie.message),b=!0,z.o_(new ae(Ie,De)),w.close()}else te(Mt,`RPC '${e}' stream ${o} received:`,G),z.__(G)}})),co.u_(),setTimeout((()=>{z.s_()}),0),z}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return n_()}}/**
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
 */function zA(i){return new co(i)}function nd(){return typeof document<"u"?document:null}/**
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
 */function dc(i){return new qS(i,!0)}/**
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
 */co.c_=!1;class Y_{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=o,this.V_=u,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&te("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const $g="PersistentStream";class J_{constructor(e,t,s,o,u,h,m,y){this.Ci=e,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Y_(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===$.RESOURCE_EXHAUSTED?(Pr(t.toString()),Pr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===t&&this.G_(s,o)}),(s=>{e((()=>{const o=new ae($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return te($g,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(te($g,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class BA extends J_{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=GS(this.serializer,e),s=(function(u){if(!("targetChange"in u))return ye.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?ye.min():h.readTime?er(h.readTime):ye.min()})(e);return this.listener.H_(t,s)}Z_(e){const t={};t.database=Td(this.serializer),t.addTarget=(function(u,h){let m;const y=h.target;if(m=yd(y)?{documents:JS(u,y)}:{query:XS(u,y).ft},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=F_(u,h.resumeToken);const v=vd(u,h.expectedCount);v!==null&&(m.expectedCount=v)}else if(h.snapshotVersion.compareTo(ye.min())>0){m.readTime=Ku(u,h.snapshotVersion.toTimestamp());const v=vd(u,h.expectedCount);v!==null&&(m.expectedCount=v)}return m})(this.serializer,e);const s=eA(this.serializer,e);s&&(t.labels=s),this.q_(t)}X_(e){const t={};t.database=Td(this.serializer),t.removeTarget=e,this.q_(t)}}class $A extends J_{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Ue(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ue(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ue(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=YS(e.writeResults,e.commitTime),s=er(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=Td(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>QS(this.serializer,s)))};this.q_(t)}}/**
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
 */class HA{}class qA extends HA{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ae($.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Wo(e,Ed(t,s),o,u,h))).catch((u=>{throw u.name==="FirebaseError"?(u.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ae($.UNKNOWN,u.toString())}))}jo(e,t,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.jo(e,Ed(t,s),o,h,m,u))).catch((h=>{throw h.name==="FirebaseError"?(h.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ae($.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function WA(i,e,t,s){return new qA(i,e,t,s)}class KA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Pr(t),this.aa=!1):te("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const us="RemoteStore";class GA{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=u,this.Aa.Mo((h=>{s.enqueueAndForget((async()=>{ps(this)&&(te(us,"Restarting streams for network reachability change."),await(async function(y){const v=ve(y);v.Ia.add(4),await Ja(v),v.Va.set("Unknown"),v.Ia.delete(4),await fc(v)})(this))}))})),this.Va=new KA(s,o)}}async function fc(i){if(ps(i))for(const e of i.Ra)await e(!0)}async function Ja(i){for(const e of i.Ra)await e(!1)}function X_(i,e){const t=ve(i);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),cf(t)?uf(t):ko(t).O_()&&lf(t,e))}function af(i,e){const t=ve(i),s=ko(t);t.Ea.delete(e),s.O_()&&Z_(t,e),t.Ea.size===0&&(s.O_()?s.L_():ps(t)&&t.Va.set("Unknown"))}function lf(i,e){if(i.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ye.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ko(i).Z_(e)}function Z_(i,e){i.da.$e(e),ko(i).X_(e)}function uf(i){i.da=new zS({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),At:e=>i.Ea.get(e)||null,ht:()=>i.datastore.serializer.databaseId}),ko(i).start(),i.Va.ua()}function cf(i){return ps(i)&&!ko(i).x_()&&i.Ea.size>0}function ps(i){return ve(i).Ia.size===0}function ev(i){i.da=void 0}async function QA(i){i.Va.set("Online")}async function YA(i){i.Ea.forEach(((e,t)=>{lf(i,e)}))}async function JA(i,e){ev(i),cf(i)?(i.Va.ha(e),uf(i)):i.Va.set("Unknown")}async function XA(i,e,t){if(i.Va.set("Online"),e instanceof b_&&e.state===2&&e.cause)try{await(async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Ea.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ea.delete(m),o.da.removeTarget(m))})(i,e)}catch(s){te(us,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Qu(i,s)}else if(e instanceof Nu?i.da.Xe(e):e instanceof M_?i.da.st(e):i.da.tt(e),!t.isEqual(ye.min()))try{const s=await Q_(i.localStore);t.compareTo(s)>=0&&await(function(u,h){const m=u.da.Tt(h);return m.targetChanges.forEach(((y,v)=>{if(y.resumeToken.approximateByteSize()>0){const w=u.Ea.get(v);w&&u.Ea.set(v,w.withResumeToken(y.resumeToken,h))}})),m.targetMismatches.forEach(((y,v)=>{const w=u.Ea.get(y);if(!w)return;u.Ea.set(y,w.withResumeToken(Pt.EMPTY_BYTE_STRING,w.snapshotVersion)),Z_(u,y);const A=new fi(w.target,y,v,w.sequenceNumber);lf(u,A)})),u.remoteSyncer.applyRemoteEvent(m)})(i,t)}catch(s){te(us,"Failed to raise snapshot:",s),await Qu(i,s)}}async function Qu(i,e,t){if(!Ro(e))throw e;i.Ia.add(1),await Ja(i),i.Va.set("Offline"),t||(t=()=>Q_(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{te(us,"Retrying IndexedDB access"),await t(),i.Ia.delete(1),await fc(i)}))}function tv(i,e){return e().catch((t=>Qu(i,t,e)))}async function pc(i){const e=ve(i),t=Si(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:qd;for(;ZA(e);)try{const o=await VA(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,e1(e,o)}catch(o){await Qu(e,o)}nv(e)&&rv(e)}function ZA(i){return ps(i)&&i.Ta.length<10}function e1(i,e){i.Ta.push(e);const t=Si(i);t.O_()&&t.Y_&&t.ea(e.mutations)}function nv(i){return ps(i)&&!Si(i).x_()&&i.Ta.length>0}function rv(i){Si(i).start()}async function t1(i){Si(i).ra()}async function n1(i){const e=Si(i);for(const t of i.Ta)e.ea(t.mutations)}async function r1(i,e,t){const s=i.Ta.shift(),o=Zd.from(s,e,t);await tv(i,(()=>i.remoteSyncer.applySuccessfulWrite(o))),await pc(i)}async function i1(i,e){e&&Si(i).Y_&&await(async function(s,o){if((function(h){return FS(h)&&h!==$.ABORTED})(o.code)){const u=s.Ta.shift();Si(s).B_(),await tv(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await pc(s)}})(i,e),nv(i)&&rv(i)}async function Hg(i,e){const t=ve(i);t.asyncQueue.verifyOperationInProgress(),te(us,"RemoteStore received new credentials");const s=ps(t);t.Ia.add(3),await Ja(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await fc(t)}async function s1(i,e){const t=ve(i);e?(t.Ia.delete(2),await fc(t)):e||(t.Ia.add(2),await Ja(t),t.Va.set("Unknown"))}function ko(i){return i.ma||(i.ma=(function(t,s,o){const u=ve(t);return u.sa(),new BA(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Zo:QA.bind(null,i),Yo:YA.bind(null,i),t_:JA.bind(null,i),H_:XA.bind(null,i)}),i.Ra.push((async e=>{e?(i.ma.B_(),cf(i)?uf(i):i.Va.set("Unknown")):(await i.ma.stop(),ev(i))}))),i.ma}function Si(i){return i.fa||(i.fa=(function(t,s,o){const u=ve(t);return u.sa(),new $A(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Zo:()=>Promise.resolve(),Yo:t1.bind(null,i),t_:i1.bind(null,i),ta:n1.bind(null,i),na:r1.bind(null,i)}),i.Ra.push((async e=>{e?(i.fa.B_(),await pc(i)):(await i.fa.stop(),i.Ta.length>0&&(te(us,`Stopping write stream with ${i.Ta.length} pending writes`),i.Ta=[]))}))),i.fa}/**
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
 */class hf{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Rr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new hf(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ae($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function df(i,e){if(Pr("AsyncQueue",`${e}: ${i}`),Ro(i))return new ae($.UNAVAILABLE,`${e}: ${i}`);throw i}/**
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
 */class ho{static emptySet(e){return new ho(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||he.comparator(t.key,s.key):(t,s)=>he.comparator(t.key,s.key),this.keyedMap=Aa(),this.sortedSet=new tt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ho)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new ho;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class qg{constructor(){this.ga=new tt(he.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):pe(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Eo{constructor(e,t,s,o,u,h,m,y,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new Eo(e,t,ho.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ac(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class o1{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class a1{constructor(){this.queries=Wg(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=ve(t),u=o.queries;o.queries=Wg(),u.forEach(((h,m)=>{for(const y of m.Sa)y.onError(s)}))})(this,new ae($.ABORTED,"Firestore shutting down"))}}function Wg(){return new ds((i=>I_(i)),ac)}async function iv(i,e){const t=ve(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.ba()&&e.Da()&&(s=2):(u=new o1,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await t.onListen(o,!0);break;case 1:u.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=df(h,`Initialization of query '${io(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.Sa.push(e),e.va(t.onlineState),u.wa&&e.Fa(u.wa)&&ff(t)}async function sv(i,e){const t=ve(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.Sa.indexOf(e);h>=0&&(u.Sa.splice(h,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function l1(i,e){const t=ve(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.Sa)m.Fa(o)&&(s=!0);h.wa=o}}s&&ff(t)}function u1(i,e,t){const s=ve(i),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(t);s.queries.delete(e)}function ff(i){i.Ca.forEach((e=>{e.next()}))}var Ad,Kg;(Kg=Ad||(Ad={})).Ma="default",Kg.Cache="cache";class ov{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Eo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Eo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Ad.Cache}}/**
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
 */class av{constructor(e){this.key=e}}class lv{constructor(e){this.key=e}}class c1{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Pe(),this.mutatedKeys=Pe(),this.eu=S_(e),this.tu=new ho(this.eu)}get nu(){return this.Za}ru(e,t){const s=t?t.iu:new qg,o=t?t.tu:this.tu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const y=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((w,A)=>{const b=o.get(w),z=lc(this.query,A)?A:null,Z=!!b&&this.mutatedKeys.has(b.key),Y=!!z&&(z.hasLocalMutations||this.mutatedKeys.has(z.key)&&z.hasCommittedMutations);let G=!1;b&&z?b.data.isEqual(z.data)?Z!==Y&&(s.track({type:3,doc:z}),G=!0):this.su(b,z)||(s.track({type:2,doc:z}),G=!0,(y&&this.eu(z,y)>0||v&&this.eu(z,v)<0)&&(m=!0)):!b&&z?(s.track({type:0,doc:z}),G=!0):b&&!z&&(s.track({type:1,doc:b}),G=!0,(y||v)&&(m=!0)),G&&(z?(h=h.add(z),u=Y?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{tu:h,iu:s,bs:m,mutatedKeys:u}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((w,A)=>(function(z,Z){const Y=G=>{switch(G){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pe(20277,{Vt:G})}};return Y(z)-Y(Z)})(w.type,A.type)||this.eu(w.doc,A.doc))),this.ou(s),o=o??!1;const m=t&&!o?this._u():[],y=this.Ya.size===0&&this.current&&!o?1:0,v=y!==this.Xa;return this.Xa=y,h.length!==0||v?{snapshot:new Eo(this.query,e.tu,u,h,e.mutatedKeys,y===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new qg,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=Pe(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))}));const t=[];return e.forEach((s=>{this.Ya.has(s)||t.push(new lv(s))})),this.Ya.forEach((s=>{e.has(s)||t.push(new av(s))})),t}cu(e){this.Za=e.ks,this.Ya=Pe();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Eo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const pf="SyncEngine";class h1{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class d1{constructor(e){this.key=e,this.hu=!1}}class f1{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new ds((m=>I_(m)),ac),this.Eu=new Map,this.Iu=new Set,this.Ru=new tt(he.comparator),this.Au=new Map,this.Vu=new nf,this.du={},this.mu=new Map,this.fu=vo.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function p1(i,e,t=!0){const s=pv(i);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await uv(s,e,t,!0),o}async function m1(i,e){const t=pv(i);await uv(t,e,!0,!1)}async function uv(i,e,t,s){const o=await OA(i.localStore,Xn(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await g1(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&X_(i.remoteStore,o),m}async function g1(i,e,t,s,o){i.pu=(A,b,z)=>(async function(Y,G,Ee,ie){let ue=G.view.ru(Ee);ue.bs&&(ue=await Ug(Y.localStore,G.query,!1).then((({documents:C})=>G.view.ru(C,ue))));const Ie=ie&&ie.targetChanges.get(G.targetId),De=ie&&ie.targetMismatches.get(G.targetId)!=null,Ne=G.view.applyChanges(ue,Y.isPrimaryClient,Ie,De);return Qg(Y,G.targetId,Ne.au),Ne.snapshot})(i,A,b,z);const u=await Ug(i.localStore,e,!0),h=new c1(e,u.ks),m=h.ru(u.documents),y=Ya.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),v=h.applyChanges(m,i.isPrimaryClient,y);Qg(i,t,v.au);const w=new h1(e,t,h);return i.Tu.set(e,w),i.Eu.has(t)?i.Eu.get(t).push(e):i.Eu.set(t,[e]),v.snapshot}async function y1(i,e,t){const s=ve(i),o=s.Tu.get(e),u=s.Eu.get(o.targetId);if(u.length>1)return s.Eu.set(o.targetId,u.filter((h=>!ac(h,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Id(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&af(s.remoteStore,o.targetId),Rd(s,o.targetId)})).catch(Ao)):(Rd(s,o.targetId),await Id(s.localStore,o.targetId,!0))}async function _1(i,e){const t=ve(i),s=t.Tu.get(e),o=t.Eu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),af(t.remoteStore,s.targetId))}async function v1(i,e,t){const s=R1(i);try{const o=await(function(h,m){const y=ve(h),v=Qe.now(),w=m.reduce(((z,Z)=>z.add(Z.key)),Pe());let A,b;return y.persistence.runTransaction("Locally write mutations","readwrite",(z=>{let Z=Nr(),Y=Pe();return y.xs.getEntries(z,w).next((G=>{Z=G,Z.forEach(((Ee,ie)=>{ie.isValidDocument()||(Y=Y.add(Ee))}))})).next((()=>y.localDocuments.getOverlayedDocuments(z,Z))).next((G=>{A=G;const Ee=[];for(const ie of m){const ue=VS(ie,A.get(ie.key).overlayedDocument);ue!=null&&Ee.push(new fs(ie.key,ue,g_(ue.value.mapValue),Zn.exists(!0)))}return y.mutationQueue.addMutationBatch(z,v,Ee,m)})).next((G=>{b=G;const Ee=G.applyToLocalDocumentSet(A,Y);return y.documentOverlayCache.saveOverlays(z,G.batchId,Ee)}))})).then((()=>({batchId:b.batchId,changes:R_(A)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,m,y){let v=h.du[h.currentUser.toKey()];v||(v=new tt(Ce)),v=v.insert(m,y),h.du[h.currentUser.toKey()]=v})(s,o.batchId,t),await Xa(s,o.changes),await pc(s.remoteStore)}catch(o){const u=df(o,"Failed to persist write");t.reject(u)}}async function cv(i,e){const t=ve(i);try{const s=await xA(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const h=t.Au.get(u);h&&(Ue(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?Ue(h.hu,14607):o.removedDocuments.size>0&&(Ue(h.hu,42227),h.hu=!1))})),await Xa(t,s,e)}catch(s){await Ao(s)}}function Gg(i,e,t){const s=ve(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach(((u,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const y=ve(h);y.onlineState=m;let v=!1;y.queries.forEach(((w,A)=>{for(const b of A.Sa)b.va(m)&&(v=!0)})),v&&ff(y)})(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function E1(i,e,t){const s=ve(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),u=o&&o.key;if(u){let h=new tt(he.comparator);h=h.insert(u,Ft.newNoDocument(u,ye.min()));const m=Pe().add(u),y=new hc(ye.min(),new Map,new tt(Ce),h,m);await cv(s,y),s.Ru=s.Ru.remove(u),s.Au.delete(e),mf(s)}else await Id(s.localStore,e,!1).then((()=>Rd(s,e,t))).catch(Ao)}async function w1(i,e){const t=ve(i),s=e.batch.batchId;try{const o=await NA(t.localStore,e);dv(t,s,null),hv(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Xa(t,o)}catch(o){await Ao(o)}}async function T1(i,e,t){const s=ve(i);try{const o=await(function(h,m){const y=ve(h);return y.persistence.runTransaction("Reject batch","readwrite-primary",(v=>{let w;return y.mutationQueue.lookupMutationBatch(v,m).next((A=>(Ue(A!==null,37113),w=A.keys(),y.mutationQueue.removeMutationBatch(v,A)))).next((()=>y.mutationQueue.performConsistencyCheck(v))).next((()=>y.documentOverlayCache.removeOverlaysForBatchId(v,w,m))).next((()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,w))).next((()=>y.localDocuments.getDocuments(v,w)))}))})(s.localStore,e);dv(s,e,t),hv(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Xa(s,o)}catch(o){await Ao(o)}}function hv(i,e){(i.mu.get(e)||[]).forEach((t=>{t.resolve()})),i.mu.delete(e)}function dv(i,e,t){const s=ve(i);let o=s.du[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.du[s.currentUser.toKey()]=o}}function Rd(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Eu.get(e))i.Tu.delete(s),t&&i.Pu.yu(s,t);i.Eu.delete(e),i.isPrimaryClient&&i.Vu.Gr(e).forEach((s=>{i.Vu.containsKey(s)||fv(i,s)}))}function fv(i,e){i.Iu.delete(e.path.canonicalString());const t=i.Ru.get(e);t!==null&&(af(i.remoteStore,t),i.Ru=i.Ru.remove(e),i.Au.delete(t),mf(i))}function Qg(i,e,t){for(const s of t)s instanceof av?(i.Vu.addReference(s.key,e),I1(i,s)):s instanceof lv?(te(pf,"Document no longer in limbo: "+s.key),i.Vu.removeReference(s.key,e),i.Vu.containsKey(s.key)||fv(i,s.key)):pe(19791,{wu:s})}function I1(i,e){const t=e.key,s=t.path.canonicalString();i.Ru.get(t)||i.Iu.has(s)||(te(pf,"New document in limbo: "+t),i.Iu.add(s),mf(i))}function mf(i){for(;i.Iu.size>0&&i.Ru.size<i.maxConcurrentLimboResolutions;){const e=i.Iu.values().next().value;i.Iu.delete(e);const t=new he(Ge.fromString(e)),s=i.fu.next();i.Au.set(s,new d1(t)),i.Ru=i.Ru.insert(t,s),X_(i.remoteStore,new fi(Xn(Yd(t.path)),s,"TargetPurposeLimboResolution",rc.ce))}}async function Xa(i,e,t){const s=ve(i),o=[],u=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach(((m,y)=>{h.push(s.pu(y,e,t).then((v=>{var w;if((v||t)&&s.isPrimaryClient){const A=v?!v.fromCache:(w=t==null?void 0:t.targetChanges.get(y.targetId))==null?void 0:w.current;s.sharedClientState.updateQueryState(y.targetId,A?"current":"not-current")}if(v){o.push(v);const A=sf.Is(y.targetId,v);u.push(A)}})))})),await Promise.all(h),s.Pu.H_(o),await(async function(y,v){const w=ve(y);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(A=>B.forEach(v,(b=>B.forEach(b.Ts,(z=>w.persistence.referenceDelegate.addReference(A,b.targetId,z))).next((()=>B.forEach(b.Es,(z=>w.persistence.referenceDelegate.removeReference(A,b.targetId,z)))))))))}catch(A){if(!Ro(A))throw A;te(of,"Failed to update sequence numbers: "+A)}for(const A of v){const b=A.targetId;if(!A.fromCache){const z=w.vs.get(b),Z=z.snapshotVersion,Y=z.withLastLimboFreeSnapshotVersion(Z);w.vs=w.vs.insert(b,Y)}}})(s.localStore,u))}async function S1(i,e){const t=ve(i);if(!t.currentUser.isEqual(e)){te(pf,"User change. New user:",e.toKey());const s=await G_(t.localStore,e);t.currentUser=e,(function(u,h){u.mu.forEach((m=>{m.forEach((y=>{y.reject(new ae($.CANCELLED,h))}))})),u.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Xa(t,s.Ns)}}function A1(i,e){const t=ve(i),s=t.Au.get(e);if(s&&s.hu)return Pe().add(s.key);{let o=Pe();const u=t.Eu.get(e);if(!u)return o;for(const h of u){const m=t.Tu.get(h);o=o.unionWith(m.view.nu)}return o}}function pv(i){const e=ve(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=cv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=A1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=E1.bind(null,e),e.Pu.H_=l1.bind(null,e.eventManager),e.Pu.yu=u1.bind(null,e.eventManager),e}function R1(i){const e=ve(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=w1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=T1.bind(null,e),e}class Yu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=dc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return PA(this.persistence,new RA,e.initialUser,this.serializer)}Cu(e){return new K_(rf.Vi,this.serializer)}Du(e){return new MA}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Yu.provider={build:()=>new Yu};class k1 extends Yu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Ue(this.persistence.referenceDelegate instanceof Gu,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new hA(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Qt.withCacheSize(this.cacheSizeBytes):Qt.DEFAULT;return new K_((s=>Gu.Vi(s,t)),this.serializer)}}class kd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Gg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=S1.bind(null,this.syncEngine),await s1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new a1})()}createDatastore(e){const t=dc(e.databaseInfo.databaseId),s=zA(e.databaseInfo);return WA(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,u,h,m){return new GA(s,o,u,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>Gg(this.syncEngine,t,0)),(function(){return Bg.v()?new Bg:new bA})())}createSyncEngine(e,t){return(function(o,u,h,m,y,v,w){const A=new f1(o,u,h,m,y,v);return w&&(A.gu=!0),A})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const u=ve(o);te(us,"RemoteStore shutting down."),u.Ia.add(5),await Ja(u),u.Aa.shutdown(),u.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}kd.provider={build:()=>new kd};/**
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
 */class mv{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Pr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Ai="FirestoreClient";class C1{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=o,this.user=bt.UNAUTHENTICATED,this.clientId=$d.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async h=>{te(Ai,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(te(Ai,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Rr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=df(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function rd(i,e){i.asyncQueue.verifyOperationInProgress(),te(Ai,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener((async o=>{s.isEqual(o)||(await G_(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>i.terminate())),i._offlineComponents=e}async function Yg(i,e){i.asyncQueue.verifyOperationInProgress();const t=await P1(i);te(Ai,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((s=>Hg(e.remoteStore,s))),i.setAppCheckTokenChangeListener(((s,o)=>Hg(e.remoteStore,o))),i._onlineComponents=e}async function P1(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){te(Ai,"Using user provided OfflineComponentProvider");try{await rd(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===$.FAILED_PRECONDITION||o.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;ls("Error using user provided cache. Falling back to memory cache: "+t),await rd(i,new Yu)}}else te(Ai,"Using default OfflineComponentProvider"),await rd(i,new k1(void 0));return i._offlineComponents}async function gv(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(te(Ai,"Using user provided OnlineComponentProvider"),await Yg(i,i._uninitializedComponentsProvider._online)):(te(Ai,"Using default OnlineComponentProvider"),await Yg(i,new kd))),i._onlineComponents}function N1(i){return gv(i).then((e=>e.syncEngine))}async function yv(i){const e=await gv(i),t=e.eventManager;return t.onListen=p1.bind(null,e.syncEngine),t.onUnlisten=y1.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=m1.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=_1.bind(null,e.syncEngine),t}function x1(i,e,t={}){const s=new Rr;return i.asyncQueue.enqueueAndForget((async()=>(function(u,h,m,y,v){const w=new mv({next:b=>{w.Nu(),h.enqueueAndForget((()=>sv(u,A)));const z=b.docs.has(m);!z&&b.fromCache?v.reject(new ae($.UNAVAILABLE,"Failed to get document because the client is offline.")):z&&b.fromCache&&y&&y.source==="server"?v.reject(new ae($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):v.resolve(b)},error:b=>v.reject(b)}),A=new ov(Yd(m.path),w,{includeMetadataChanges:!0,qa:!0});return iv(u,A)})(await yv(i),i.asyncQueue,e,t,s))),s.promise}function D1(i,e,t={}){const s=new Rr;return i.asyncQueue.enqueueAndForget((async()=>(function(u,h,m,y,v){const w=new mv({next:b=>{w.Nu(),h.enqueueAndForget((()=>sv(u,A))),b.fromCache&&y.source==="server"?v.reject(new ae($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):v.resolve(b)},error:b=>v.reject(b)}),A=new ov(m,w,{includeMetadataChanges:!0,qa:!0});return iv(u,A)})(await yv(i),i.asyncQueue,e,t,s))),s.promise}function V1(i,e){const t=new Rr;return i.asyncQueue.enqueueAndForget((async()=>v1(await N1(i),e,t))),t.promise}/**
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
 */function _v(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const O1="ComponentProvider",Jg=new Map;function L1(i,e,t,s,o){return new tS(i,e,t,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,_v(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator,s)}/**
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
 */const vv="firestore.googleapis.com",Xg=!0;class Zg{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ae($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=vv,this.ssl=Xg}else this.host=e.host,this.ssl=e.ssl??Xg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=W_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<uA)throw new ae($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}HI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_v(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ae($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ae($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ae($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class mc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ae($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ae($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new OI;switch(s.type){case"firstParty":return new FI(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ae($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Jg.get(t);s&&(te(O1,"Removing Datastore"),Jg.delete(t),s.terminate())})(this),Promise.resolve()}}function M1(i,e,t,s={}){var v;i=vi(i,mc);const o=Ha(e),u=i._getSettings(),h={...u,emulatorOptions:i._getEmulatorOptions()},m=`${e}:${t}`;o&&dy(`https://${m}`),u.host!==vv&&u.host!==m&&ls("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y={...u,host:m,ssl:o,emulatorOptions:s};if(!is(y,h)&&(i._setSettings(y),s.mockUserToken)){let w,A;if(typeof s.mockUserToken=="string")w=s.mockUserToken,A=bt.MOCK_USER;else{w=l0(s.mockUserToken,(v=i._app)==null?void 0:v.options.projectId);const b=s.mockUserToken.sub||s.mockUserToken.user_id;if(!b)throw new ae($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new bt(b)}i._authCredentials=new LI(new i_(w,A))}}/**
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
 */class gc{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new gc(this.firestore,e,this._query)}}class gt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _i(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gt(this.firestore,e,this._key)}toJSON(){return{type:gt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Ga(t,gt._jsonSchema))return new gt(e,s||null,new he(Ge.fromString(t.referencePath)))}}gt._jsonSchemaVersion="firestore/documentReference/1.0",gt._jsonSchema={type:dt("string",gt._jsonSchemaVersion),referencePath:dt("string")};class _i extends gc{constructor(e,t,s){super(e,t,Yd(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gt(this.firestore,null,new he(e))}withConverter(e){return new _i(this.firestore,e,this._path)}}function b1(i,e,...t){if(i=Yt(i),s_("collection","path",e),i instanceof mc){const s=Ge.fromString(e,...t);return fg(s),new _i(i,null,s)}{if(!(i instanceof gt||i instanceof _i))throw new ae($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ge.fromString(e,...t));return fg(s),new _i(i.firestore,null,s)}}function wo(i,e,...t){if(i=Yt(i),arguments.length===1&&(e=$d.newId()),s_("doc","path",e),i instanceof mc){const s=Ge.fromString(e,...t);return dg(s),new gt(i,null,new he(s))}{if(!(i instanceof gt||i instanceof _i))throw new ae($.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ge.fromString(e,...t));return dg(s),new gt(i.firestore,i instanceof _i?i.converter:null,new he(s))}}/**
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
 */const ey="AsyncQueue";class ty{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Y_(this,"async_queue_retry"),this._c=()=>{const s=nd();s&&te(ey,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=nd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=nd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Rr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Ro(e))throw e;te(ey,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Pr("INTERNAL UNHANDLED ERROR: ",ny(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=hf.createAndSchedule(this,e,t,s,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&pe(47125,{Pc:ny(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function ny(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class Za extends mc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new ty,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ty(e),this._firestoreClient=void 0,await e}}}function F1(i,e){const t=typeof i=="object"?i:gy(),s=typeof i=="string"?i:zu,o=xd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=o0("firestore");u&&M1(o,...u)}return o}function gf(i){if(i._terminated)throw new ae($.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||U1(i),i._firestoreClient}function U1(i){var s,o,u,h;const e=i._freezeSettings(),t=L1(i._databaseId,((s=i._app)==null?void 0:s.options.appId)||"",i._persistenceKey,(o=i._app)==null?void 0:o.options.apiKey,e);i._componentsProvider||(u=e.localCache)!=null&&u._offlineComponentProvider&&((h=e.localCache)!=null&&h._onlineComponentProvider)&&(i._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),i._firestoreClient=new C1(i._authCredentials,i._appCheckCredentials,i._queue,t,i._componentsProvider&&(function(y){const v=y==null?void 0:y._online.build();return{_offline:y==null?void 0:y._offline.build(v),_online:v}})(i._componentsProvider))}/**
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
 */class gn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new gn(Pt.fromBase64String(e))}catch(t){throw new ae($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new gn(Pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:gn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ga(e,gn._jsonSchema))return gn.fromBase64String(e.bytes)}}gn._jsonSchemaVersion="firestore/bytes/1.0",gn._jsonSchema={type:dt("string",gn._jsonSchemaVersion),bytes:dt("string")};/**
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
 */class Ev{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ae($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class wv{constructor(e){this._methodName=e}}/**
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
 */class tr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ae($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ae($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:tr._jsonSchemaVersion}}static fromJSON(e){if(Ga(e,tr._jsonSchema))return new tr(e.latitude,e.longitude)}}tr._jsonSchemaVersion="firestore/geoPoint/1.0",tr._jsonSchema={type:dt("string",tr._jsonSchemaVersion),latitude:dt("number"),longitude:dt("number")};/**
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
 */class xn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:xn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ga(e,xn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new xn(e.vectorValues);throw new ae($.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}xn._jsonSchemaVersion="firestore/vectorValue/1.0",xn._jsonSchema={type:dt("string",xn._jsonSchemaVersion),vectorValues:dt("object")};/**
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
 */const j1=/^__.*__$/;class z1{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new fs(e,this.data,this.fieldMask,t,this.fieldTransforms):new Qa(e,this.data,t,this.fieldTransforms)}}function Tv(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pe(40011,{dataSource:i})}}class yf{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Ac(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new yf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.i({path:t,arrayElement:!1});return s.mc(e),s}fc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.i({path:t,arrayElement:!1});return s.Ac(),s}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return Ju(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(Tv(this.dataSource)&&j1.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class B1{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||dc(e)}I(e,t,s,o=!1){return new yf({dataSource:e,methodName:t,targetDoc:s,path:Ct.emptyPath(),arrayElement:!1,hasConverter:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $1(i){const e=i._freezeSettings(),t=dc(i._databaseId);return new B1(i._databaseId,!!e.ignoreUndefinedProperties,t)}function H1(i,e,t,s,o,u={}){const h=i.I(u.merge||u.mergeFields?2:0,e,t,o);Rv("Data must be an object, but it was:",h,s);const m=Sv(s,h);let y,v;if(u.merge)y=new Pn(h.fieldMask),v=h.fieldTransforms;else if(u.mergeFields){const w=[];for(const A of u.mergeFields){const b=_f(e,A,t);if(!h.contains(b))throw new ae($.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);K1(w,b)||w.push(b)}y=new Pn(w),v=h.fieldTransforms.filter((A=>y.covers(A.field)))}else y=null,v=h.fieldTransforms;return new z1(new mn(m),y,v)}function Iv(i,e){if(Av(i=Yt(i)))return Rv("Unsupported field value:",e,i),Sv(i,e);if(i instanceof wv)return(function(s,o){if(!Tv(o.dataSource))throw o.yc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.yc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return(function(s,o){const u=[];let h=0;for(const m of s){let y=Iv(m,o.gc(h));y==null&&(y={nullValue:"NULL_VALUE"}),u.push(y),h++}return{arrayValue:{values:u}}})(i,e)}return(function(s,o){if((s=Yt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return kS(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Qe.fromDate(s);return{timestampValue:Ku(o.serializer,u)}}if(s instanceof Qe){const u=new Qe(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Ku(o.serializer,u)}}if(s instanceof tr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof gn)return{bytesValue:F_(o.serializer,s._byteString)};if(s instanceof gt){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.yc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:tf(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof xn)return(function(h,m){const y=h instanceof xn?h.toArray():h;return{mapValue:{fields:{[p_]:{stringValue:m_},[Bu]:{arrayValue:{values:y.map((w=>{if(typeof w!="number")throw m.yc("VectorValues must only contain numeric values.");return Jd(m.serializer,w)}))}}}}}})(s,o);if(q_(s))return s._toProto(o.serializer);throw o.yc(`Unsupported field value: ${Hd(s)}`)})(i,e)}function Sv(i,e){const t={};return l_(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hs(i,((s,o)=>{const u=Iv(o,e.dc(s));u!=null&&(t[s]=u)})),{mapValue:{fields:t}}}function Av(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Qe||i instanceof tr||i instanceof gn||i instanceof gt||i instanceof wv||i instanceof xn||q_(i))}function Rv(i,e,t){if(!Av(t)||!o_(t)){const s=Hd(t);throw s==="an object"?e.yc(i+" a custom object"):e.yc(i+" "+s)}}function _f(i,e,t){if((e=Yt(e))instanceof Ev)return e._internalPath;if(typeof e=="string")return W1(i,e);throw Ju("Field path arguments must be of type string or ",i,!1,void 0,t)}const q1=new RegExp("[~\\*/\\[\\]]");function W1(i,e,t){if(e.search(q1)>=0)throw Ju(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new Ev(...e.split("."))._internalPath}catch{throw Ju(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Ju(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let y="";return(u||h)&&(y+=" (found",u&&(y+=` in field ${s}`),h&&(y+=` in document ${o}`),y+=")"),new ae($.INVALID_ARGUMENT,m+i+y)}function K1(i,e){return i.some((t=>t.isEqual(e)))}/**
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
 */class G1{convertValue(e,t="none"){switch(Ii(e)){case 0:return null;case 1:return e.booleanValue;case 2:return at(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ti(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw pe(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return hs(e,((o,u)=>{s[o]=this.convertValue(u,t)})),s}convertVectorValue(e){var s,o,u;const t=(u=(o=(s=e.fields)==null?void 0:s[Bu].arrayValue)==null?void 0:o.values)==null?void 0:u.map((h=>at(h.doubleValue)));return new xn(t)}convertGeoPoint(e){return new tr(at(e.latitude),at(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=sc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(ba(e));default:return null}}convertTimestamp(e){const t=wi(e);return new Qe(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ge.fromString(e);Ue(H_(s),9688,{name:e});const o=new Fa(s.get(1),s.get(3)),u=new he(s.popFirst(5));return o.isEqual(t)||Pr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */class kv extends G1{constructor(e){super(),this.firestore=e}convertBytes(e){return new gn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new gt(this.firestore,null,t)}}const ry="@firebase/firestore",iy="4.14.0";/**
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
 */class Cv{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Q1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(_f("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Q1 extends Cv{data(){return super.data()}}/**
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
 */function Y1(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new ae($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function J1(i,e,t){let s;return s=i?t&&(t.merge||t.mergeFields)?i.toFirestore(e,t):i.toFirestore(e):e,s}class ka{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rs extends Cv{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new xu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(_f("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ae($.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=rs._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}rs._jsonSchemaVersion="firestore/documentSnapshot/1.0",rs._jsonSchema={type:dt("string",rs._jsonSchemaVersion),bundleSource:dt("string","DocumentSnapshot"),bundleName:dt("string"),bundle:dt("string")};class xu extends rs{data(e={}){return super.data(e)}}class fo{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new ka(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new xu(this._firestore,this._userDataWriter,s.key,s,new ka(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ae($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const y=new xu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new ka(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:y,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const y=new xu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new ka(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,w=-1;return m.type!==0&&(v=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:X1(m.type),doc:y,oldIndex:v,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ae($.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=fo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=$d.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function X1(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pe(61501,{type:i})}}/**
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
 */fo._jsonSchemaVersion="firestore/querySnapshot/1.0",fo._jsonSchema={type:dt("string",fo._jsonSchemaVersion),bundleSource:dt("string","QuerySnapshot"),bundleName:dt("string"),bundle:dt("string")};/**
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
 */function Z1(i){i=vi(i,gt);const e=vi(i.firestore,Za),t=gf(e);return x1(t,i._key).then((s=>nR(e,i,s)))}function eR(i){i=vi(i,gc);const e=vi(i.firestore,Za),t=gf(e),s=new kv(e);return Y1(i._query),D1(t,i._query).then((o=>new fo(e,s,i,o)))}function Xu(i,e,t){i=vi(i,gt);const s=vi(i.firestore,Za),o=J1(i.converter,e,t),u=$1(s);return Pv(s,[H1(u,"setDoc",i._key,o,i.converter!==null,t).toMutation(i._key,Zn.none())])}function tR(i){return Pv(vi(i.firestore,Za),[new Xd(i._key,Zn.none())])}function Pv(i,e){const t=gf(i);return V1(t,e)}function nR(i,e,t){const s=t.docs.get(e._key),o=new kv(i);return new rs(i,o,e._key,s,new ka(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){VI(To),po(new ss("firestore",((s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new Za(new MI(s.getProvider("auth-internal")),new UI(h,s.getProvider("app-check-internal")),nS(h,o),h);return u={useFetchStreams:t,...u},m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),gi(ry,iy,e),gi(ry,iy,"esm2020")})();var rR="firebase",iR="12.12.1";/**
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
 */gi(rR,iR,"app");const sR={apiKey:"AIzaSyBN-jgFWi10Onb0atB7ty24IhfRSMMxulU",authDomain:"lista-de-compras-pwa-64fac.firebaseapp.com",projectId:"lista-de-compras-pwa-64fac",storageBucket:"lista-de-compras-pwa-64fac.appspot.com",messagingSenderId:"922020197463",appId:"1:922020197463:web:41e9aa3c04bf76c7941f12"},Nv=my(sR),Va=xI(Nv);_T(Va,zy);const xv=new Ir;xv.setCustomParameters({prompt:"select_account"});const cs=F1(Nv);function oR(){const[i,e]=Ye.useState(null),[t,s]=Ye.useState(!0),o=async m=>{if(m)try{await Xu(wo(cs,"users",m.uid),{nome:m.displayName||"Usuário",email:m.email||"",foto:m.photoURL||"",ultimoLogin:new Date().toISOString()},{merge:!0})}catch(y){console.error("Erro ao salvar usuário:",y)}};return Ye.useEffect(()=>{const m=wT(Va,async y=>{e(y||null),y&&await o(y),s(!1)});return()=>m()},[]),{usuario:i,loading:t,entrarComGoogle:async()=>{try{await jT(Va,xv)}catch(m){console.error("Erro login Google:",m)}},sair:async()=>{try{await Fy(Va)}catch(m){console.error("Erro logout:",m)}}}}function aR(i){const[e,t]=Ye.useState(null),[s,o]=Ye.useState(!0),u=i==null?void 0:i.uid;return Ye.useEffect(()=>{if(!u){t(null),o(!1);return}(async()=>{o(!0);try{const m=wo(cs,"users",u,"lista","dados"),y=await Z1(m);if(y.exists()){const v=y.data();t({modo:String(v.modo||"planejamento").toLowerCase().trim(),estabelecimento:v.estabelecimento||"",tema:v.tema||"claro",itens:(v.itens||[]).map(w=>({...w,precoUnitario:Number(w.precoUnitario||0),quantidade:Number(w.quantidade||1)}))})}else t({modo:"planejamento",estabelecimento:"",tema:"claro",itens:[]})}catch(m){console.error(m),t({modo:"planejamento",estabelecimento:"",tema:"claro",itens:[]})}finally{o(!1)}})()},[u]),Ye.useEffect(()=>{if(!u||!e||s)return;const h=setTimeout(async()=>{try{const m=wo(cs,"users",u,"lista","dados");await Xu(m,{modo:e.modo,estabelecimento:e.estabelecimento,itens:e.itens,tema:e.tema||"claro"})}catch(m){console.error(m)}},300);return()=>clearTimeout(h)},[e,u,s]),{lista:e,setLista:t,loading:s}}function lR(i){const[e,t]=Ye.useState([]),[s,o]=Ye.useState(!0);return Ye.useEffect(()=>{if(!(i!=null&&i.uid))return;(async()=>{try{o(!0);const m=b1(cs,"users",i.uid,"compras"),v=(await eR(m)).docs.map(w=>({id:w.id,...w.data()}));v.sort((w,A)=>new Date(A.data)-new Date(w.data)),t(v)}catch(m){console.error("Erro histórico:",m)}finally{o(!1)}})()},[i==null?void 0:i.uid]),{historico:e,carregando:s,deletarCompra:async h=>{try{await tR(wo(cs,"users",i.uid,"compras",h)),t(m=>m.filter(y=>y.id!==h))}catch(m){console.error("Erro ao deletar compra:",m)}}}}/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uR=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),cR=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),sy=i=>{const e=cR(i);return e.charAt(0).toUpperCase()+e.slice(1)},Dv=(...i)=>i.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim(),hR=i=>{for(const e in i)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var dR={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fR=Ye.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:u,iconNode:h,...m},y)=>Ye.createElement("svg",{ref:y,...dR,width:e,height:e,stroke:i,strokeWidth:s?Number(t)*24/Number(e):t,className:Dv("lucide",o),...!u&&!hR(m)&&{"aria-hidden":"true"},...m},[...h.map(([v,w])=>Ye.createElement(v,w)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dr=(i,e)=>{const t=Ye.forwardRef(({className:s,...o},u)=>Ye.createElement(fR,{ref:u,iconNode:e,className:Dv(`lucide-${uR(sy(i))}`,`lucide-${i}`,s),...o}));return t.displayName=sy(i),t};/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pR=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],mR=Dr("circle-check-big",pR);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],yR=Dr("clock",gR);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _R=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],vR=Dr("dollar-sign",_R);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ER=[["rect",{x:"3",y:"5",width:"6",height:"6",rx:"1",key:"1defrl"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]],wR=Dr("list-todo",ER);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TR=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],IR=Dr("log-out",TR);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SR=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],AR=Dr("package",SR);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RR=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],Vv=Dr("shopping-cart",RR);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kR=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],yc=Dr("trash-2",kR);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CR=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],PR=Dr("user",CR);function NR({usuario:i,estabelecimento:e,aoDefinirEstabelecimento:t,aoLimpar:s,aoLogout:o,tema:u,aoDefinirTema:h}){const m=u||"claro";return j.jsxs("header",{className:"w-full bg-emerald-600 text-white shadow-lg relative",children:[j.jsx("button",{onClick:()=>{const y=m==="escuro"?"claro":"escuro";h==null||h(y)},className:`absolute top-3 right-3 sm:top-4 sm:right-4
          rounded-full p-3 transition-all duration-300
          ${m==="escuro"?"bg-slate-800 rotate-180":"bg-emerald-800 rotate-0"}`,title:"Tema",children:m==="escuro"?"☀️":"🌙"}),j.jsxs("div",{className:"max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 py-6 gap-4",children:[j.jsxs("div",{className:"flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start",children:[j.jsx("div",{className:"rounded-2xl bg-emerald-700 p-3 shadow-md",children:j.jsx(Vv,{className:"text-white",size:30})}),j.jsxs("div",{className:"text-center sm:text-left",children:[j.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold",children:"Lista de Compras"}),j.jsx("p",{className:"text-xs sm:text-sm text-emerald-100",children:"Organize suas compras"})]})]}),j.jsxs("div",{className:"flex items-center gap-3",children:[j.jsx("div",{className:"h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden bg-emerald-700 flex items-center justify-center border-2 border-white",children:i!=null&&i.photoURL?j.jsx("img",{src:i.photoURL,className:"h-full w-full object-cover",referrerPolicy:"no-referrer"}):j.jsx(PR,{size:18})}),j.jsx("button",{onClick:o,className:"rounded-xl bg-emerald-700 p-3 hover:bg-emerald-800 transition",title:"Sair",children:j.jsx(IR,{size:20})}),j.jsx("button",{onClick:s,className:"rounded-xl bg-emerald-700 p-3 hover:bg-emerald-800 transition",title:"Limpar lista",children:j.jsx(yc,{size:20})})]})]})]})}function xR({modo:i,aoAlternar:e}){return j.jsx("div",{className:"rounded-xl shadow-md p-2 mb-4 bg-white dark:bg-slate-800",children:j.jsxs("div",{className:"flex gap-2",children:[j.jsxs("button",{onClick:()=>e("planejamento"),className:`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${i==="planejamento"?"bg-emerald-500 text-white shadow-md":"bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-slate-600"}`,children:[j.jsx(wR,{size:20}),j.jsx("span",{children:"Planejamento"})]}),j.jsxs("button",{onClick:()=>e("feira"),className:`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${i==="feira"?"bg-emerald-500 text-white shadow-md":"bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-slate-600"}`,children:[j.jsx(Vv,{size:20}),j.jsx("span",{children:"Na Feira"})]})]})})}function DR({aoAdicionar:i}){const[e,t]=Ye.useState(""),[s,o]=Ye.useState(1);function u(h){h.preventDefault();const m=e.trim().slice(0,80),y=Math.max(1,Math.min(999,Number(s)||1));m&&(i({nome:m,quantidade:y}),t(""),o(1))}return j.jsxs("form",{onSubmit:u,className:"mb-4 flex gap-2",children:[j.jsx("input",{type:"text",maxLength:80,value:e,onChange:h=>t(h.target.value),placeholder:"Produto",className:"flex-1 rounded border p-2"}),j.jsx("input",{type:"number",min:"1",max:"999",value:s,onChange:h=>o(h.target.value),className:"w-20 rounded border p-2"}),j.jsx("button",{className:"rounded bg-green-500 px-4 text-white",children:"+"})]})}function VR({item:i,onAtualizar:e,onRemover:t,onToggleComprado:s}){const[o,u]=Ye.useState(i.quantidade||1),[h,m]=Ye.useState("");Ye.useEffect(()=>{u(i.quantidade||1),m(i.precoUnitario!=null?String(Math.round(i.precoUnitario*100)):"")},[i.quantidade,i.precoUnitario]);const y=Y=>(Number(Y||0)/100).toLocaleString("pt-BR",{minimumFractionDigits:2}),v=Y=>{const G=Y.target.value.replace(/\D/g,"");m(G)},w=()=>{const Y=Number(h||0);e(i.id||i._id,{precoUnitario:Y/100})},A=Y=>{const G=Number(Y.target.value);u(G),e(i.id||i._id,{quantidade:G||1})},b=Number(h||0)/100,Z=(o*b).toLocaleString("pt-BR",{minimumFractionDigits:2});return j.jsx("div",{className:"rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 shadow-sm",children:j.jsxs("div",{className:"flex flex-wrap items-center gap-3 md:flex-nowrap",children:[j.jsx("input",{type:"checkbox",checked:i.comprado,onChange:()=>s(i.id||i._id),className:"h-5 w-5 accent-emerald-500"}),j.jsx("span",{className:"flex-1 font-medium text-gray-800 dark:text-gray-100",children:i.nome}),j.jsxs("div",{className:"flex items-center gap-2",children:[j.jsx("input",{type:"number",min:"1",value:o,onChange:A,className:"w-16 rounded border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-2 py-1 text-center text-gray-900 dark:text-white"}),j.jsx("span",{className:"text-gray-600 dark:text-gray-300",children:"×"}),j.jsx("span",{className:"text-gray-600 dark:text-gray-300",children:"R$"}),j.jsx("input",{type:"text",inputMode:"numeric",value:h?y(h):"",onChange:v,onBlur:w,className:"w-24 rounded border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-2 py-1 text-right text-gray-900 dark:text-white",placeholder:"0,00"})]}),j.jsxs("div",{className:"min-w-[110px] text-right",children:[j.jsx("span",{className:"block text-xs text-gray-500 dark:text-gray-400",children:"Total"}),j.jsxs("span",{className:"font-bold text-gray-900 dark:text-white",children:["R$ ",Z]})]}),j.jsx("button",{onClick:()=>t(i.id||i._id),className:"text-red-500 hover:text-red-700 p-2",title:"Remover item",children:j.jsx(yc,{size:18})})]})})}function OR({itens:i,modo:e,aoRemover:t,aoAtualizar:s,aoAlternarComprado:o}){return i.length?j.jsx("div",{className:"space-y-4",children:i.map(u=>j.jsx("div",{children:e==="feira"?j.jsx(VR,{item:u,onAtualizar:s,onRemover:t,onToggleComprado:o}):j.jsx("div",{className:"rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 shadow-sm",children:j.jsxs("div",{className:"flex items-center justify-between gap-3",children:[j.jsxs("div",{className:"flex flex-1 items-center gap-3",children:[j.jsxs("div",{className:"flex items-center gap-3",children:[j.jsx("input",{type:"checkbox",checked:u.comprado,onChange:()=>o(u.id),className:"h-5 w-5 accent-emerald-500"}),j.jsx("p",{className:`font-medium ${u.comprado?"text-gray-400 dark:text-gray-500 line-through":"text-gray-800 dark:text-gray-100"}`,children:u.nome})]}),j.jsxs("div",{className:"ml-6 flex items-center gap-2",children:[j.jsx("label",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Quantidade:"}),j.jsx("input",{type:"number",min:"1",value:u.quantidade,onChange:h=>s(u.id,{quantidade:Number(h.target.value)||1}),className:"w-20 rounded border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-2 py-1 text-center text-gray-900 dark:text-white focus:border-emerald-500 focus:outline-none"})]})]}),j.jsx("button",{onClick:()=>t(u.id),className:"rounded-lg p-2 text-red-500 transition-colors hover:bg-red-50 dark:hover:bg-slate-700 hover:text-red-700",title:"Remover item",children:j.jsx(yc,{size:18})})]})})},u.id))}):j.jsx("div",{className:"rounded-lg bg-white dark:bg-slate-800 p-6 text-center shadow",children:j.jsx("p",{className:"text-gray-500 dark:text-gray-300",children:"Nenhum item adicionado ainda."})})}function LR(i){return Number(i||0).toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})}function MR({totais:i,modo:e}){const{total:t=0,quantidadeItens:s=0,itensComprados:o=0}=i||{},u=s>0?o/s*100:0;return j.jsxs("div",{className:"rounded-xl shadow-md p-4 mt-4 bg-white dark:bg-slate-800",children:[j.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-5 gap-4",children:[j.jsxs("div",{className:"rounded-lg p-3 col-span-2 md:col-span-1 bg-emerald-50 dark:bg-slate-700",children:[j.jsxs("div",{className:"flex items-center gap-2 text-emerald-600 dark:text-emerald-300 mb-1",children:[j.jsx(vR,{size:18}),j.jsx("span",{className:"text-sm font-medium",children:"Total"})]}),j.jsx("p",{className:"text-2xl font-bold text-emerald-700 dark:text-emerald-200",children:LR(t)}),j.jsx("p",{className:"text-xs text-emerald-500 dark:text-emerald-300 mt-1",children:"Valor total da compra"})]}),j.jsxs("div",{className:"rounded-lg p-3 bg-blue-50 dark:bg-slate-700",children:[j.jsxs("div",{className:"flex items-center gap-2 text-blue-600 dark:text-blue-300 mb-1",children:[j.jsx(AR,{size:18}),j.jsx("span",{className:"text-sm font-medium",children:"Itens"})]}),j.jsx("p",{className:"text-2xl font-bold text-blue-700 dark:text-blue-200",children:s})]}),j.jsxs("div",{className:"rounded-lg p-3 bg-green-50 dark:bg-slate-700",children:[j.jsxs("div",{className:"flex items-center gap-2 text-green-600 dark:text-green-300 mb-1",children:[j.jsx(mR,{size:18}),j.jsx("span",{className:"text-sm font-medium",children:"Comprados"})]}),j.jsx("p",{className:"text-2xl font-bold text-green-700 dark:text-green-200",children:o})]}),j.jsxs("div",{className:"rounded-lg p-3 bg-orange-50 dark:bg-slate-700",children:[j.jsxs("div",{className:"flex items-center gap-2 text-orange-600 dark:text-orange-300 mb-1",children:[j.jsx(yR,{size:18}),j.jsx("span",{className:"text-sm font-medium",children:"Restantes"})]}),j.jsx("p",{className:"text-2xl font-bold text-orange-700 dark:text-orange-200",children:s-o})]})]}),s>0&&j.jsxs("div",{className:"mt-4",children:[j.jsxs("div",{className:"flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2",children:[j.jsx("span",{children:"Progresso"}),j.jsxs("span",{children:[Math.round(u),"%"]})]}),j.jsx("div",{className:"w-full bg-gray-200 dark:bg-slate-700 rounded-full h-3",children:j.jsx("div",{className:"bg-emerald-500 h-3 rounded-full transition-all duration-500",style:{width:`${u}%`}})}),j.jsxs("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-2 text-center",children:[o," de ",s," itens"]})]})]})}function bR({historico:i,carregando:e,deletarCompra:t}){const[s,o]=Ye.useState(null);return e?j.jsx("div",{className:"mt-6 text-center text-gray-600 dark:text-gray-300",children:"Carregando histórico..."}):i!=null&&i.length?j.jsx("div",{className:"mt-6 space-y-4",children:i.map(u=>{var m;const h=Number(u.total||0);return j.jsxs("div",{className:"rounded-xl bg-white dark:bg-slate-800 p-4 shadow",children:[j.jsxs("div",{className:"flex items-start justify-between",children:[j.jsxs("div",{className:"flex-1 cursor-pointer",onClick:()=>o(s===u.id?null:u.id),children:[j.jsx("h3",{className:"font-bold text-gray-900 dark:text-white",children:u.estabelecimento}),j.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:new Date(u.data).toLocaleDateString("pt-BR")}),j.jsxs("p",{className:"font-bold text-green-600 dark:text-green-400",children:["R$ ",h.toFixed(2)]}),j.jsx("p",{className:"mt-1 text-xs text-gray-400 dark:text-gray-500",children:"Clique para ver os detalhes"})]}),j.jsx("button",{onClick:()=>t(u.id),className:"text-red-500 hover:text-red-700",children:j.jsx(yc,{size:18})})]}),s===u.id&&j.jsxs("div",{className:"mt-3 space-y-2 border-t border-gray-200 dark:border-slate-700 pt-3",children:[j.jsxs("div",{className:"flex justify-between text-xs text-gray-500 dark:text-gray-400",children:[j.jsx("span",{children:"Item"}),j.jsx("span",{children:"Total"})]}),(m=u.itens)==null?void 0:m.map(y=>{const v=Number(y.quantidade||0)*Number(y.precoUnitario||0);return j.jsxs("div",{className:"flex justify-between text-sm text-gray-700 dark:text-gray-200",children:[j.jsxs("span",{children:[y.quantidade,"x ",y.nome]}),j.jsxs("span",{children:["R$ ",v.toFixed(2)]})]},y.id)}),j.jsxs("div",{className:"flex justify-between border-t border-gray-200 dark:border-slate-700 pt-2 font-bold text-gray-900 dark:text-white",children:[j.jsx("span",{children:"Total"}),j.jsxs("span",{children:["R$ ",h.toFixed(2)]})]})]})]},u.id)})}):j.jsx("div",{className:"mt-6 text-center text-gray-500 dark:text-gray-400",children:"Nenhuma compra encontrada"})}function FR(){const{usuario:i,loading:e}=oR(),{lista:t,setLista:s}=aR(i),{historico:o,carregando:u,deletarCompra:h}=lR(i),[m,y]=Ye.useState("compras"),[v,w]=Ye.useState("claro"),A=(t==null?void 0:t.itens)||[];Ye.useEffect(()=>{t!=null&&t.tema&&w(t.tema)},[t==null?void 0:t.tema]),Ye.useEffect(()=>{document.documentElement.classList.toggle("dark",v==="escuro")},[v]);const b=async()=>{await Fy(Va)},z=async()=>{if(!A.length)return;const ie=A.reduce((De,Ne)=>De+(Ne.quantidade||0)*(Ne.precoUnitario||0),0),ue=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID()||Math.random().toString(36).substring(2),Ie={id:ue,estabelecimento:t.estabelecimento,itens:A,total:ie,data:new Date().toISOString()};await Xu(wo(cs,"users",i.uid,"compras",ue),Ie),await Xu(wo(cs,"users",i.uid,"lista","dados"),{modo:"planejamento",estabelecimento:"",tema:v,itens:[]}),s({modo:"planejamento",estabelecimento:"",tema:v,itens:[]}),y("historico")},Z=ie=>{s(ue=>({...ue,itens:ue.itens.filter(Ie=>Ie.id!==ie)}))},Y=(ie,ue)=>{s(Ie=>({...Ie,itens:Ie.itens.map(De=>De.id===ie?{...De,...ue}:De)}))},G=ie=>{s(ue=>({...ue,itens:ue.itens.map(Ie=>Ie.id===ie?{...Ie,comprado:!Ie.comprado}:Ie)}))};if(e)return j.jsx("div",{className:"flex min-h-screen items-center justify-center",children:j.jsx("p",{children:"Carregando..."})});if(!i||!t)return j.jsx("div",{className:"flex min-h-screen items-center justify-center",children:j.jsx("p",{children:"Carregando lista..."})});const Ee=(t.modo||"").trim().toLowerCase();return j.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-slate-900",children:[j.jsx(NR,{usuario:i,estabelecimento:t.estabelecimento||"",aoDefinirEstabelecimento:ie=>s(ue=>({...ue,estabelecimento:ie})),aoLimpar:()=>s(ie=>({...ie,itens:[]})),aoLogout:b,tema:v,aoDefinirTema:ie=>{w(ie),s(ue=>({...ue,tema:ie}))}}),j.jsxs("main",{className:"mx-auto max-w-4xl space-y-6 px-4 py-6",children:[j.jsxs("div",{className:"flex gap-2",children:[j.jsx("button",{onClick:()=>y("compras"),className:`flex-1 rounded-lg p-3 font-semibold ${m==="compras"?"bg-emerald-600 text-white":"bg-white text-gray-700 dark:bg-slate-800 dark:text-white"}`,children:"Compras"}),j.jsx("button",{onClick:()=>y("historico"),className:`flex-1 rounded-lg p-3 font-semibold ${m==="historico"?"bg-emerald-600 text-white":"bg-white text-gray-700 dark:bg-slate-800 dark:text-white"}`,children:"Histórico"})]}),m==="compras"&&j.jsxs(j.Fragment,{children:[j.jsx(xR,{modo:t.modo,aoAlternar:ie=>s(ue=>({...ue,modo:ie}))}),j.jsx(DR,{aoAdicionar:ie=>s(ue=>({...ue,itens:[...ue.itens,{id:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID()||Math.random().toString(36).substring(2),nome:ie.nome,quantidade:ie.quantidade,precoUnitario:0,comprado:!1}]}))}),j.jsx(OR,{itens:A,modo:t.modo,aoRemover:Z,aoAtualizar:Y,aoAlternarComprado:G}),j.jsx(MR,{totais:{total:A.reduce((ie,ue)=>ie+(ue.quantidade||0)*(ue.precoUnitario||0),0),quantidadeItens:A.length,itensComprados:A.filter(ie=>ie.comprado).length}}),Ee==="feira"&&A.length>0&&j.jsx("button",{onClick:z,className:"w-full rounded-lg bg-emerald-600 p-3 text-white font-semibold",children:"Finalizar compra"})]}),m==="historico"&&j.jsx(bR,{historico:o,carregando:u,deletarCompra:h})]})]})}const Ov=document.getElementById("root");if(!Ov)throw new Error("Elemento #root não encontrado no index.html");const UR=JE.createRoot(Ov);UR.render(j.jsx(FR,{}));
