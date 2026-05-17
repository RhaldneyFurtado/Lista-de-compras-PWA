(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function BE(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var jh={exports:{}},Ea={},zh={exports:{}},Te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rm;function $E(){if(Rm)return Te;Rm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),R=Symbol.iterator;function M(D){return D===null||typeof D!="object"?null:(D=R&&D[R]||D["@@iterator"],typeof D=="function"?D:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,J={};function K(D,H,_e){this.props=D,this.context=H,this.refs=J,this.updater=_e||z}K.prototype.isReactComponent={},K.prototype.setState=function(D,H){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,H,"setState")},K.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function Ee(){}Ee.prototype=K.prototype;function we(D,H,_e){this.props=D,this.context=H,this.refs=J,this.updater=_e||z}var Pe=we.prototype=new Ee;Pe.constructor=we,Y(Pe,K.prototype),Pe.isPureReactComponent=!0;var Fe=Array.isArray,je=Object.prototype.hasOwnProperty,Ve={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function I(D,H,_e){var ve,Ie={},Se=null,Me=null;if(H!=null)for(ve in H.ref!==void 0&&(Me=H.ref),H.key!==void 0&&(Se=""+H.key),H)je.call(H,ve)&&!k.hasOwnProperty(ve)&&(Ie[ve]=H[ve]);var xe=arguments.length-2;if(xe===1)Ie.children=_e;else if(1<xe){for(var ze=Array(xe),jt=0;jt<xe;jt++)ze[jt]=arguments[jt+2];Ie.children=ze}if(D&&D.defaultProps)for(ve in xe=D.defaultProps,xe)Ie[ve]===void 0&&(Ie[ve]=xe[ve]);return{$$typeof:i,type:D,key:Se,ref:Me,props:Ie,_owner:Ve.current}}function A(D,H){return{$$typeof:i,type:D.type,key:H,ref:D.ref,props:D.props,_owner:D._owner}}function x(D){return typeof D=="object"&&D!==null&&D.$$typeof===i}function P(D){var H={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(_e){return H[_e]})}var V=/\/+/g;function S(D,H){return typeof D=="object"&&D!==null&&D.key!=null?P(""+D.key):H.toString(36)}function $e(D,H,_e,ve,Ie){var Se=typeof D;(Se==="undefined"||Se==="boolean")&&(D=null);var Me=!1;if(D===null)Me=!0;else switch(Se){case"string":case"number":Me=!0;break;case"object":switch(D.$$typeof){case i:case e:Me=!0}}if(Me)return Me=D,Ie=Ie(Me),D=ve===""?"."+S(Me,0):ve,Fe(Ie)?(_e="",D!=null&&(_e=D.replace(V,"$&/")+"/"),$e(Ie,H,_e,"",function(jt){return jt})):Ie!=null&&(x(Ie)&&(Ie=A(Ie,_e+(!Ie.key||Me&&Me.key===Ie.key?"":(""+Ie.key).replace(V,"$&/")+"/")+D)),H.push(Ie)),1;if(Me=0,ve=ve===""?".":ve+":",Fe(D))for(var xe=0;xe<D.length;xe++){Se=D[xe];var ze=ve+S(Se,xe);Me+=$e(Se,H,_e,ze,Ie)}else if(ze=M(D),typeof ze=="function")for(D=ze.call(D),xe=0;!(Se=D.next()).done;)Se=Se.value,ze=ve+S(Se,xe++),Me+=$e(Se,H,_e,ze,Ie);else if(Se==="object")throw H=String(D),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return Me}function _t(D,H,_e){if(D==null)return D;var ve=[],Ie=0;return $e(D,ve,"","",function(Se){return H.call(_e,Se,Ie++)}),ve}function Nt(D){if(D._status===-1){var H=D._result;H=H(),H.then(function(_e){(D._status===0||D._status===-1)&&(D._status=1,D._result=_e)},function(_e){(D._status===0||D._status===-1)&&(D._status=2,D._result=_e)}),D._status===-1&&(D._status=0,D._result=H)}if(D._status===1)return D._result.default;throw D._result}var Je={current:null},Z={transition:null},le={ReactCurrentDispatcher:Je,ReactCurrentBatchConfig:Z,ReactCurrentOwner:Ve};function ne(){throw Error("act(...) is not supported in production builds of React.")}return Te.Children={map:_t,forEach:function(D,H,_e){_t(D,function(){H.apply(this,arguments)},_e)},count:function(D){var H=0;return _t(D,function(){H++}),H},toArray:function(D){return _t(D,function(H){return H})||[]},only:function(D){if(!x(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Te.Component=K,Te.Fragment=t,Te.Profiler=o,Te.PureComponent=we,Te.StrictMode=s,Te.Suspense=y,Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,Te.act=ne,Te.cloneElement=function(D,H,_e){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var ve=Y({},D.props),Ie=D.key,Se=D.ref,Me=D._owner;if(H!=null){if(H.ref!==void 0&&(Se=H.ref,Me=Ve.current),H.key!==void 0&&(Ie=""+H.key),D.type&&D.type.defaultProps)var xe=D.type.defaultProps;for(ze in H)je.call(H,ze)&&!k.hasOwnProperty(ze)&&(ve[ze]=H[ze]===void 0&&xe!==void 0?xe[ze]:H[ze])}var ze=arguments.length-2;if(ze===1)ve.children=_e;else if(1<ze){xe=Array(ze);for(var jt=0;jt<ze;jt++)xe[jt]=arguments[jt+2];ve.children=xe}return{$$typeof:i,type:D.type,key:Ie,ref:Se,props:ve,_owner:Me}},Te.createContext=function(D){return D={$$typeof:h,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:u,_context:D},D.Consumer=D},Te.createElement=I,Te.createFactory=function(D){var H=I.bind(null,D);return H.type=D,H},Te.createRef=function(){return{current:null}},Te.forwardRef=function(D){return{$$typeof:m,render:D}},Te.isValidElement=x,Te.lazy=function(D){return{$$typeof:w,_payload:{_status:-1,_result:D},_init:Nt}},Te.memo=function(D,H){return{$$typeof:v,type:D,compare:H===void 0?null:H}},Te.startTransition=function(D){var H=Z.transition;Z.transition={};try{D()}finally{Z.transition=H}},Te.unstable_act=ne,Te.useCallback=function(D,H){return Je.current.useCallback(D,H)},Te.useContext=function(D){return Je.current.useContext(D)},Te.useDebugValue=function(){},Te.useDeferredValue=function(D){return Je.current.useDeferredValue(D)},Te.useEffect=function(D,H){return Je.current.useEffect(D,H)},Te.useId=function(){return Je.current.useId()},Te.useImperativeHandle=function(D,H,_e){return Je.current.useImperativeHandle(D,H,_e)},Te.useInsertionEffect=function(D,H){return Je.current.useInsertionEffect(D,H)},Te.useLayoutEffect=function(D,H){return Je.current.useLayoutEffect(D,H)},Te.useMemo=function(D,H){return Je.current.useMemo(D,H)},Te.useReducer=function(D,H,_e){return Je.current.useReducer(D,H,_e)},Te.useRef=function(D){return Je.current.useRef(D)},Te.useState=function(D){return Je.current.useState(D)},Te.useSyncExternalStore=function(D,H,_e){return Je.current.useSyncExternalStore(D,H,_e)},Te.useTransition=function(){return Je.current.useTransition()},Te.version="18.3.1",Te}var Cm;function Cd(){return Cm||(Cm=1,zh.exports=$E()),zh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var km;function HE(){if(km)return Ea;km=1;var i=Cd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,y,v){var w,R={},M=null,z=null;v!==void 0&&(M=""+v),y.key!==void 0&&(M=""+y.key),y.ref!==void 0&&(z=y.ref);for(w in y)s.call(y,w)&&!u.hasOwnProperty(w)&&(R[w]=y[w]);if(m&&m.defaultProps)for(w in y=m.defaultProps,y)R[w]===void 0&&(R[w]=y[w]);return{$$typeof:e,type:m,key:M,ref:z,props:R,_owner:o.current}}return Ea.Fragment=t,Ea.jsx=h,Ea.jsxs=h,Ea}var Pm;function qE(){return Pm||(Pm=1,jh.exports=HE()),jh.exports}var U=qE(),Ye=Cd(),pu={},Bh={exports:{}},Kt={},$h={exports:{}},Hh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nm;function WE(){return Nm||(Nm=1,(function(i){function e(Z,le){var ne=Z.length;Z.push(le);e:for(;0<ne;){var D=ne-1>>>1,H=Z[D];if(0<o(H,le))Z[D]=le,Z[ne]=H,ne=D;else break e}}function t(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var le=Z[0],ne=Z.pop();if(ne!==le){Z[0]=ne;e:for(var D=0,H=Z.length,_e=H>>>1;D<_e;){var ve=2*(D+1)-1,Ie=Z[ve],Se=ve+1,Me=Z[Se];if(0>o(Ie,ne))Se<H&&0>o(Me,Ie)?(Z[D]=Me,Z[Se]=ne,D=Se):(Z[D]=Ie,Z[ve]=ne,D=ve);else if(Se<H&&0>o(Me,ne))Z[D]=Me,Z[Se]=ne,D=Se;else break e}}return le}function o(Z,le){var ne=Z.sortIndex-le.sortIndex;return ne!==0?ne:Z.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var y=[],v=[],w=1,R=null,M=3,z=!1,Y=!1,J=!1,K=typeof setTimeout=="function"?setTimeout:null,Ee=typeof clearTimeout=="function"?clearTimeout:null,we=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Pe(Z){for(var le=t(v);le!==null;){if(le.callback===null)s(v);else if(le.startTime<=Z)s(v),le.sortIndex=le.expirationTime,e(y,le);else break;le=t(v)}}function Fe(Z){if(J=!1,Pe(Z),!Y)if(t(y)!==null)Y=!0,Nt(je);else{var le=t(v);le!==null&&Je(Fe,le.startTime-Z)}}function je(Z,le){Y=!1,J&&(J=!1,Ee(I),I=-1),z=!0;var ne=M;try{for(Pe(le),R=t(y);R!==null&&(!(R.expirationTime>le)||Z&&!P());){var D=R.callback;if(typeof D=="function"){R.callback=null,M=R.priorityLevel;var H=D(R.expirationTime<=le);le=i.unstable_now(),typeof H=="function"?R.callback=H:R===t(y)&&s(y),Pe(le)}else s(y);R=t(y)}if(R!==null)var _e=!0;else{var ve=t(v);ve!==null&&Je(Fe,ve.startTime-le),_e=!1}return _e}finally{R=null,M=ne,z=!1}}var Ve=!1,k=null,I=-1,A=5,x=-1;function P(){return!(i.unstable_now()-x<A)}function V(){if(k!==null){var Z=i.unstable_now();x=Z;var le=!0;try{le=k(!0,Z)}finally{le?S():(Ve=!1,k=null)}}else Ve=!1}var S;if(typeof we=="function")S=function(){we(V)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,_t=$e.port2;$e.port1.onmessage=V,S=function(){_t.postMessage(null)}}else S=function(){K(V,0)};function Nt(Z){k=Z,Ve||(Ve=!0,S())}function Je(Z,le){I=K(function(){Z(i.unstable_now())},le)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(Z){Z.callback=null},i.unstable_continueExecution=function(){Y||z||(Y=!0,Nt(je))},i.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<Z?Math.floor(1e3/Z):5},i.unstable_getCurrentPriorityLevel=function(){return M},i.unstable_getFirstCallbackNode=function(){return t(y)},i.unstable_next=function(Z){switch(M){case 1:case 2:case 3:var le=3;break;default:le=M}var ne=M;M=le;try{return Z()}finally{M=ne}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(Z,le){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var ne=M;M=Z;try{return le()}finally{M=ne}},i.unstable_scheduleCallback=function(Z,le,ne){var D=i.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?D+ne:D):ne=D,Z){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=ne+H,Z={id:w++,callback:le,priorityLevel:Z,startTime:ne,expirationTime:H,sortIndex:-1},ne>D?(Z.sortIndex=ne,e(v,Z),t(y)===null&&Z===t(v)&&(J?(Ee(I),I=-1):J=!0,Je(Fe,ne-D))):(Z.sortIndex=H,e(y,Z),Y||z||(Y=!0,Nt(je))),Z},i.unstable_shouldYield=P,i.unstable_wrapCallback=function(Z){var le=M;return function(){var ne=M;M=le;try{return Z.apply(this,arguments)}finally{M=ne}}}})(Hh)),Hh}var xm;function GE(){return xm||(xm=1,$h.exports=WE()),$h.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dm;function KE(){if(Dm)return Kt;Dm=1;var i=Cd(),e=GE();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},R={};function M(n){return y.call(R,n)?!0:y.call(w,n)?!1:v.test(n)?R[n]=!0:(w[n]=!0,!1)}function z(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Y(n,r,a,c){if(r===null||typeof r>"u"||z(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function J(n,r,a,c,d,f,_){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=f,this.removeEmptyString=_}var K={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){K[n]=new J(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];K[r]=new J(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){K[n]=new J(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){K[n]=new J(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){K[n]=new J(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){K[n]=new J(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){K[n]=new J(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){K[n]=new J(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){K[n]=new J(n,5,!1,n.toLowerCase(),null,!1,!1)});var Ee=/[\-:]([a-z])/g;function we(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(Ee,we);K[r]=new J(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(Ee,we);K[r]=new J(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(Ee,we);K[r]=new J(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){K[n]=new J(n,1,!1,n.toLowerCase(),null,!1,!1)}),K.xlinkHref=new J("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){K[n]=new J(n,1,!1,n.toLowerCase(),null,!0,!0)});function Pe(n,r,a,c){var d=K.hasOwnProperty(r)?K[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Y(r,a,d,c)&&(a=null),c||d===null?M(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var Fe=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,je=Symbol.for("react.element"),Ve=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),P=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),$e=Symbol.for("react.suspense_list"),_t=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),Je=Symbol.for("react.offscreen"),Z=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var ne=Object.assign,D;function H(n){if(D===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);D=r&&r[1]||""}return`
`+D+n}var _e=!1;function ve(n,r){if(!n||_e)return"";_e=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(F){var c=F}Reflect.construct(n,[],r)}else{try{r.call()}catch(F){c=F}n.call(r.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),f=c.stack.split(`
`),_=d.length-1,T=f.length-1;1<=_&&0<=T&&d[_]!==f[T];)T--;for(;1<=_&&0<=T;_--,T--)if(d[_]!==f[T]){if(_!==1||T!==1)do if(_--,T--,0>T||d[_]!==f[T]){var C=`
`+d[_].replace(" at new "," at ");return n.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",n.displayName)),C}while(1<=_&&0<=T);break}}}finally{_e=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?H(n):""}function Ie(n){switch(n.tag){case 5:return H(n.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return n=ve(n.type,!1),n;case 11:return n=ve(n.type.render,!1),n;case 1:return n=ve(n.type,!0),n;default:return""}}function Se(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case Ve:return"Portal";case A:return"Profiler";case I:return"StrictMode";case S:return"Suspense";case $e:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case P:return(n.displayName||"Context")+".Consumer";case x:return(n._context.displayName||"Context")+".Provider";case V:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case _t:return r=n.displayName||null,r!==null?r:Se(n.type)||"Memo";case Nt:r=n._payload,n=n._init;try{return Se(n(r))}catch{}}return null}function Me(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(r);case 8:return r===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function xe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ze(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function jt(n){var r=ze(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,f=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(_){c=""+_,f.call(this,_)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function ps(n){n._valueTracker||(n._valueTracker=jt(n))}function Ro(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=ze(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function Vr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ms(n,r){var a=r.checked;return ne({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Za(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=xe(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function gs(n,r){r=r.checked,r!=null&&Pe(n,"checked",r,!1)}function Ri(n,r){gs(n,r);var a=xe(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?lt(n,r.type,a):r.hasOwnProperty("defaultValue")&&lt(n,r.type,xe(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Co(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function lt(n,r,a){(r!=="number"||Vr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var it=Array.isArray;function yn(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+xe(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function ko(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Po(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(it(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:xe(a)}}function el(n,r){var a=xe(r.value),c=xe(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Or(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function No(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ys(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?No(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Lr,tl=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Lr=Lr||document.createElement("div"),Lr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Lr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Ci(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var Mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nl=["Webkit","ms","Moz","O"];Object.keys(Mr).forEach(function(n){nl.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Mr[r]=Mr[n]})});function br(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Mr.hasOwnProperty(n)&&Mr[n]?(""+r).trim():r+"px"}function _s(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=br(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var xo=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _n(n,r){if(r){if(xo[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function vs(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fr=null;function Es(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var sr=null,or=null,nt=null;function Do(n){if(n=sa(n)){if(typeof sr!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Pl(r),sr(n.stateNode,n.type,r))}}function Ur(n){or?nt?nt.push(n):nt=[n]:or=n}function jr(){if(or){var n=or,r=nt;if(nt=or=null,Do(n),r)for(n=0;n<r.length;n++)Do(r[n])}}function rl(n,r){return n(r)}function il(){}var Dn=!1;function sl(n,r,a){if(Dn)return n(r,a);Dn=!0;try{return rl(n,r,a)}finally{Dn=!1,(or!==null||nt!==null)&&(il(),jr())}}function ki(n,r){var a=n.stateNode;if(a===null)return null;var c=Pl(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var zr=!1;if(m)try{var Br={};Object.defineProperty(Br,"passive",{get:function(){zr=!0}}),window.addEventListener("test",Br,Br),window.removeEventListener("test",Br,Br)}catch{zr=!1}function ol(n,r,a,c,d,f,_,T,C){var F=Array.prototype.slice.call(arguments,3);try{r.apply(a,F)}catch(W){this.onError(W)}}var ar=!1,Vn=null,ws=!1,an=null,al={onError:function(n){ar=!0,Vn=n}};function ll(n,r,a,c,d,f,_,T,C){ar=!1,Vn=null,ol.apply(al,arguments)}function Vo(n,r,a,c,d,f,_,T,C){if(ll.apply(this,arguments),ar){if(ar){var F=Vn;ar=!1,Vn=null}else throw Error(t(198));ws||(ws=!0,an=F)}}function vn(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Oo(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function ul(n){if(vn(n)!==n)throw Error(t(188))}function cl(n){var r=n.alternate;if(!r){if(r=vn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var f=d.alternate;if(f===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===a)return ul(d),n;if(f===c)return ul(d),r;f=f.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=f;else{for(var _=!1,T=d.child;T;){if(T===a){_=!0,a=d,c=f;break}if(T===c){_=!0,c=d,a=f;break}T=T.sibling}if(!_){for(T=f.child;T;){if(T===a){_=!0,a=f,c=d;break}if(T===c){_=!0,c=f,a=d;break}T=T.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function hl(n){return n=cl(n),n!==null?Pi(n):null}function Pi(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Pi(n);if(r!==null)return r;n=n.sibling}return null}var Lo=e.unstable_scheduleCallback,Ts=e.unstable_cancelCallback,Ni=e.unstable_shouldYield,lr=e.unstable_requestPaint,qe=e.unstable_now,yc=e.unstable_getCurrentPriorityLevel,Is=e.unstable_ImmediatePriority,Mo=e.unstable_UserBlockingPriority,xi=e.unstable_NormalPriority,bo=e.unstable_LowPriority,Ss=e.unstable_IdlePriority,Di=null,Jt=null;function dl(n){if(Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(Di,n,void 0,(n.current.flags&128)===128)}catch{}}var Xt=Math.clz32?Math.clz32:Vi,On=Math.log,ln=Math.LN2;function Vi(n){return n>>>=0,n===0?32:31-(On(n)/ln|0)|0}var Ln=64,$r=4194304;function Le(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ur(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,f=n.pingedLanes,_=a&268435455;if(_!==0){var T=_&~d;T!==0?c=Le(T):(f&=_,f!==0&&(c=Le(f)))}else _=a&~d,_!==0?c=Le(_):f!==0&&(c=Le(f));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,f=r&-r,d>=f||d===16&&(f&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-Xt(r),d=1<<a,c|=n[a],r&=~d;return c}function Oi(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Li(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,f=n.pendingLanes;0<f;){var _=31-Xt(f),T=1<<_,C=d[_];C===-1?((T&a)===0||(T&c)!==0)&&(d[_]=Oi(T,r)):C<=r&&(n.expiredLanes|=T),f&=~T}}function Fo(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Uo(){var n=Ln;return Ln<<=1,(Ln&4194240)===0&&(Ln=64),n}function jo(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Mi(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Xt(r),n[r]=a}function _c(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Xt(a),f=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~f}}function zo(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-Xt(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var ke=0;function Mn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Bo,As,$o,Ho,qo,bn=!1,Rs=[],Fn=null,Un=null,It=null,bi=new Map,cr=new Map,Zt=[],fl="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hr(n,r){switch(n){case"focusin":case"focusout":Fn=null;break;case"dragenter":case"dragleave":Un=null;break;case"mouseover":case"mouseout":It=null;break;case"pointerover":case"pointerout":bi.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":cr.delete(r.pointerId)}}function En(n,r,a,c,d,f){return n===null||n.nativeEvent!==f?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:f,targetContainers:[d]},r!==null&&(r=sa(r),r!==null&&As(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function pl(n,r,a,c,d){switch(r){case"focusin":return Fn=En(Fn,n,r,a,c,d),!0;case"dragenter":return Un=En(Un,n,r,a,c,d),!0;case"mouseover":return It=En(It,n,r,a,c,d),!0;case"pointerover":var f=d.pointerId;return bi.set(f,En(bi.get(f)||null,n,r,a,c,d)),!0;case"gotpointercapture":return f=d.pointerId,cr.set(f,En(cr.get(f)||null,n,r,a,c,d)),!0}return!1}function Cs(n){var r=zi(n.target);if(r!==null){var a=vn(r);if(a!==null){if(r=a.tag,r===13){if(r=Oo(a),r!==null){n.blockedOn=r,qo(n.priority,function(){$o(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Be(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=ks(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Fr=c,a.target.dispatchEvent(c),Fr=null}else return r=sa(a),r!==null&&As(r),n.blockedOn=a,!1;r.shift()}return!0}function ml(n,r,a){Be(n)&&a.delete(r)}function vc(){bn=!1,Fn!==null&&Be(Fn)&&(Fn=null),Un!==null&&Be(Un)&&(Un=null),It!==null&&Be(It)&&(It=null),bi.forEach(ml),cr.forEach(ml)}function qr(n,r){n.blockedOn===r&&(n.blockedOn=null,bn||(bn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,vc)))}function Wr(n){function r(d){return qr(d,n)}if(0<Rs.length){qr(Rs[0],n);for(var a=1;a<Rs.length;a++){var c=Rs[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Fn!==null&&qr(Fn,n),Un!==null&&qr(Un,n),It!==null&&qr(It,n),bi.forEach(r),cr.forEach(r),a=0;a<Zt.length;a++)c=Zt[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Zt.length&&(a=Zt[0],a.blockedOn===null);)Cs(a),a.blockedOn===null&&Zt.shift()}var hr=Fe.ReactCurrentBatchConfig,dr=!0;function jn(n,r,a,c){var d=ke,f=hr.transition;hr.transition=null;try{ke=1,Wo(n,r,a,c)}finally{ke=d,hr.transition=f}}function gl(n,r,a,c){var d=ke,f=hr.transition;hr.transition=null;try{ke=4,Wo(n,r,a,c)}finally{ke=d,hr.transition=f}}function Wo(n,r,a,c){if(dr){var d=ks(n,r,a,c);if(d===null)Nc(n,r,c,zn,a),Hr(n,c);else if(pl(d,n,r,a,c))c.stopPropagation();else if(Hr(n,c),r&4&&-1<fl.indexOf(n)){for(;d!==null;){var f=sa(d);if(f!==null&&Bo(f),f=ks(n,r,a,c),f===null&&Nc(n,r,c,zn,a),f===d)break;d=f}d!==null&&c.stopPropagation()}else Nc(n,r,c,null,a)}}var zn=null;function ks(n,r,a,c){if(zn=null,n=Es(c),n=zi(n),n!==null)if(r=vn(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Oo(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return zn=n,null}function Ps(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yc()){case Is:return 1;case Mo:return 4;case xi:case bo:return 16;case Ss:return 536870912;default:return 16}default:return 16}}var en=null,Ns=null,fr=null;function yl(){if(fr)return fr;var n,r=Ns,a=r.length,c,d="value"in en?en.value:en.textContent,f=d.length;for(n=0;n<a&&r[n]===d[n];n++);var _=a-n;for(c=1;c<=_&&r[a-c]===d[f-c];c++);return fr=d.slice(n,1<c?1-c:void 0)}function Fi(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Bn(){return!0}function Go(){return!1}function xt(n){function r(a,c,d,f,_){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Bn:Go,this.isPropagationStopped=Go,this}return ne(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Bn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Bn)},persist:function(){},isPersistent:Bn}),r}var $n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ui=xt($n),Gr=ne({},$n,{view:0,detail:0}),xs=xt(Gr),Ds,Vs,tn,ji=ne({},Gr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ge,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==tn&&(tn&&n.type==="mousemove"?(Ds=n.screenX-tn.screenX,Vs=n.screenY-tn.screenY):Vs=Ds=0,tn=n),Ds)},movementY:function(n){return"movementY"in n?n.movementY:Vs}}),Ko=xt(ji),_l=ne({},ji,{dataTransfer:0}),vl=xt(_l),Os=ne({},Gr,{relatedTarget:0}),St=xt(Os),El=ne({},$n,{animationName:0,elapsedTime:0,pseudoElement:0}),wl=xt(El),Kr=ne({},$n,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),l=xt(Kr),p=ne({},$n,{data:0}),g=xt(p),E={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},L={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=j[n])?!!r[n]:!1}function ge(){return X}var st=ne({},Gr,{key:function(n){if(n.key){var r=E[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Fi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?L[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ge,charCode:function(n){return n.type==="keypress"?Fi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Fi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Ue=xt(st),ut=ne({},ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nn=xt(ut),pr=ne({},Gr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ge}),Hn=xt(pr),qn=ne({},$n,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ls=xt(qn),Qo=ne({},ji,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Mv=xt(Qo),bv=[9,13,27,32],Ec=m&&"CompositionEvent"in window,Yo=null;m&&"documentMode"in document&&(Yo=document.documentMode);var Fv=m&&"TextEvent"in window&&!Yo,_f=m&&(!Ec||Yo&&8<Yo&&11>=Yo),vf=" ",Ef=!1;function wf(n,r){switch(n){case"keyup":return bv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ms=!1;function Uv(n,r){switch(n){case"compositionend":return Tf(r);case"keypress":return r.which!==32?null:(Ef=!0,vf);case"textInput":return n=r.data,n===vf&&Ef?null:n;default:return null}}function jv(n,r){if(Ms)return n==="compositionend"||!Ec&&wf(n,r)?(n=yl(),fr=Ns=en=null,Ms=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return _f&&r.locale!=="ko"?null:r.data;default:return null}}var zv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function If(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!zv[n.type]:r==="textarea"}function Sf(n,r,a,c){Ur(c),r=Rl(r,"onChange"),0<r.length&&(a=new Ui("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var Jo=null,Xo=null;function Bv(n){Bf(n,0)}function Tl(n){var r=zs(n);if(Ro(r))return n}function $v(n,r){if(n==="change")return r}var Af=!1;if(m){var wc;if(m){var Tc="oninput"in document;if(!Tc){var Rf=document.createElement("div");Rf.setAttribute("oninput","return;"),Tc=typeof Rf.oninput=="function"}wc=Tc}else wc=!1;Af=wc&&(!document.documentMode||9<document.documentMode)}function Cf(){Jo&&(Jo.detachEvent("onpropertychange",kf),Xo=Jo=null)}function kf(n){if(n.propertyName==="value"&&Tl(Xo)){var r=[];Sf(r,Xo,n,Es(n)),sl(Bv,r)}}function Hv(n,r,a){n==="focusin"?(Cf(),Jo=r,Xo=a,Jo.attachEvent("onpropertychange",kf)):n==="focusout"&&Cf()}function qv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Tl(Xo)}function Wv(n,r){if(n==="click")return Tl(r)}function Gv(n,r){if(n==="input"||n==="change")return Tl(r)}function Kv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var wn=typeof Object.is=="function"?Object.is:Kv;function Zo(n,r){if(wn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!y.call(r,d)||!wn(n[d],r[d]))return!1}return!0}function Pf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Nf(n,r){var a=Pf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Pf(a)}}function xf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?xf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Df(){for(var n=window,r=Vr();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Vr(n.document)}return r}function Ic(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Qv(n){var r=Df(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&xf(a.ownerDocument.documentElement,a)){if(c!==null&&Ic(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,f=Math.min(c.start,d);c=c.end===void 0?f:Math.min(c.end,d),!n.extend&&f>c&&(d=c,c=f,f=d),d=Nf(a,f);var _=Nf(a,c);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),f>c?(n.addRange(r),n.extend(_.node,_.offset)):(r.setEnd(_.node,_.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Yv=m&&"documentMode"in document&&11>=document.documentMode,bs=null,Sc=null,ea=null,Ac=!1;function Vf(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ac||bs==null||bs!==Vr(c)||(c=bs,"selectionStart"in c&&Ic(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ea&&Zo(ea,c)||(ea=c,c=Rl(Sc,"onSelect"),0<c.length&&(r=new Ui("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=bs)))}function Il(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Fs={animationend:Il("Animation","AnimationEnd"),animationiteration:Il("Animation","AnimationIteration"),animationstart:Il("Animation","AnimationStart"),transitionend:Il("Transition","TransitionEnd")},Rc={},Of={};m&&(Of=document.createElement("div").style,"AnimationEvent"in window||(delete Fs.animationend.animation,delete Fs.animationiteration.animation,delete Fs.animationstart.animation),"TransitionEvent"in window||delete Fs.transitionend.transition);function Sl(n){if(Rc[n])return Rc[n];if(!Fs[n])return n;var r=Fs[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Of)return Rc[n]=r[a];return n}var Lf=Sl("animationend"),Mf=Sl("animationiteration"),bf=Sl("animationstart"),Ff=Sl("transitionend"),Uf=new Map,jf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qr(n,r){Uf.set(n,r),u(r,[n])}for(var Cc=0;Cc<jf.length;Cc++){var kc=jf[Cc],Jv=kc.toLowerCase(),Xv=kc[0].toUpperCase()+kc.slice(1);Qr(Jv,"on"+Xv)}Qr(Lf,"onAnimationEnd"),Qr(Mf,"onAnimationIteration"),Qr(bf,"onAnimationStart"),Qr("dblclick","onDoubleClick"),Qr("focusin","onFocus"),Qr("focusout","onBlur"),Qr(Ff,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ta));function zf(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,Vo(c,r,void 0,n),n.currentTarget=null}function Bf(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var f=void 0;if(r)for(var _=c.length-1;0<=_;_--){var T=c[_],C=T.instance,F=T.currentTarget;if(T=T.listener,C!==f&&d.isPropagationStopped())break e;zf(d,T,F),f=C}else for(_=0;_<c.length;_++){if(T=c[_],C=T.instance,F=T.currentTarget,T=T.listener,C!==f&&d.isPropagationStopped())break e;zf(d,T,F),f=C}}}if(ws)throw n=an,ws=!1,an=null,n}function We(n,r){var a=r[Mc];a===void 0&&(a=r[Mc]=new Set);var c=n+"__bubble";a.has(c)||($f(r,n,2,!1),a.add(c))}function Pc(n,r,a){var c=0;r&&(c|=4),$f(a,n,c,r)}var Al="_reactListening"+Math.random().toString(36).slice(2);function na(n){if(!n[Al]){n[Al]=!0,s.forEach(function(a){a!=="selectionchange"&&(Zv.has(a)||Pc(a,!1,n),Pc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Al]||(r[Al]=!0,Pc("selectionchange",!1,r))}}function $f(n,r,a,c){switch(Ps(r)){case 1:var d=jn;break;case 4:d=gl;break;default:d=Wo}a=d.bind(null,r,a,n),d=void 0,!zr||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function Nc(n,r,a,c,d){var f=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var T=c.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(_===4)for(_=c.return;_!==null;){var C=_.tag;if((C===3||C===4)&&(C=_.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;_=_.return}for(;T!==null;){if(_=zi(T),_===null)return;if(C=_.tag,C===5||C===6){c=f=_;continue e}T=T.parentNode}}c=c.return}sl(function(){var F=f,W=Es(a),G=[];e:{var q=Uf.get(n);if(q!==void 0){var ee=Ui,ie=n;switch(n){case"keypress":if(Fi(a)===0)break e;case"keydown":case"keyup":ee=Ue;break;case"focusin":ie="focus",ee=St;break;case"focusout":ie="blur",ee=St;break;case"beforeblur":case"afterblur":ee=St;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=Ko;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=vl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=Hn;break;case Lf:case Mf:case bf:ee=wl;break;case Ff:ee=Ls;break;case"scroll":ee=xs;break;case"wheel":ee=Mv;break;case"copy":case"cut":case"paste":ee=l;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=nn}var se=(r&4)!==0,ot=!se&&n==="scroll",O=se?q!==null?q+"Capture":null:q;se=[];for(var N=F,b;N!==null;){b=N;var Q=b.stateNode;if(b.tag===5&&Q!==null&&(b=Q,O!==null&&(Q=ki(N,O),Q!=null&&se.push(ra(N,Q,b)))),ot)break;N=N.return}0<se.length&&(q=new ee(q,ie,null,a,W),G.push({event:q,listeners:se}))}}if((r&7)===0){e:{if(q=n==="mouseover"||n==="pointerover",ee=n==="mouseout"||n==="pointerout",q&&a!==Fr&&(ie=a.relatedTarget||a.fromElement)&&(zi(ie)||ie[mr]))break e;if((ee||q)&&(q=W.window===W?W:(q=W.ownerDocument)?q.defaultView||q.parentWindow:window,ee?(ie=a.relatedTarget||a.toElement,ee=F,ie=ie?zi(ie):null,ie!==null&&(ot=vn(ie),ie!==ot||ie.tag!==5&&ie.tag!==6)&&(ie=null)):(ee=null,ie=F),ee!==ie)){if(se=Ko,Q="onMouseLeave",O="onMouseEnter",N="mouse",(n==="pointerout"||n==="pointerover")&&(se=nn,Q="onPointerLeave",O="onPointerEnter",N="pointer"),ot=ee==null?q:zs(ee),b=ie==null?q:zs(ie),q=new se(Q,N+"leave",ee,a,W),q.target=ot,q.relatedTarget=b,Q=null,zi(W)===F&&(se=new se(O,N+"enter",ie,a,W),se.target=b,se.relatedTarget=ot,Q=se),ot=Q,ee&&ie)t:{for(se=ee,O=ie,N=0,b=se;b;b=Us(b))N++;for(b=0,Q=O;Q;Q=Us(Q))b++;for(;0<N-b;)se=Us(se),N--;for(;0<b-N;)O=Us(O),b--;for(;N--;){if(se===O||O!==null&&se===O.alternate)break t;se=Us(se),O=Us(O)}se=null}else se=null;ee!==null&&Hf(G,q,ee,se,!1),ie!==null&&ot!==null&&Hf(G,ot,ie,se,!0)}}e:{if(q=F?zs(F):window,ee=q.nodeName&&q.nodeName.toLowerCase(),ee==="select"||ee==="input"&&q.type==="file")var ae=$v;else if(If(q))if(Af)ae=Gv;else{ae=qv;var ce=Hv}else(ee=q.nodeName)&&ee.toLowerCase()==="input"&&(q.type==="checkbox"||q.type==="radio")&&(ae=Wv);if(ae&&(ae=ae(n,F))){Sf(G,ae,a,W);break e}ce&&ce(n,q,F),n==="focusout"&&(ce=q._wrapperState)&&ce.controlled&&q.type==="number"&&lt(q,"number",q.value)}switch(ce=F?zs(F):window,n){case"focusin":(If(ce)||ce.contentEditable==="true")&&(bs=ce,Sc=F,ea=null);break;case"focusout":ea=Sc=bs=null;break;case"mousedown":Ac=!0;break;case"contextmenu":case"mouseup":case"dragend":Ac=!1,Vf(G,a,W);break;case"selectionchange":if(Yv)break;case"keydown":case"keyup":Vf(G,a,W)}var he;if(Ec)e:{switch(n){case"compositionstart":var fe="onCompositionStart";break e;case"compositionend":fe="onCompositionEnd";break e;case"compositionupdate":fe="onCompositionUpdate";break e}fe=void 0}else Ms?wf(n,a)&&(fe="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(fe="onCompositionStart");fe&&(_f&&a.locale!=="ko"&&(Ms||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&Ms&&(he=yl()):(en=W,Ns="value"in en?en.value:en.textContent,Ms=!0)),ce=Rl(F,fe),0<ce.length&&(fe=new g(fe,n,null,a,W),G.push({event:fe,listeners:ce}),he?fe.data=he:(he=Tf(a),he!==null&&(fe.data=he)))),(he=Fv?Uv(n,a):jv(n,a))&&(F=Rl(F,"onBeforeInput"),0<F.length&&(W=new g("onBeforeInput","beforeinput",null,a,W),G.push({event:W,listeners:F}),W.data=he))}Bf(G,r)})}function ra(n,r,a){return{instance:n,listener:r,currentTarget:a}}function Rl(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,f=d.stateNode;d.tag===5&&f!==null&&(d=f,f=ki(n,a),f!=null&&c.unshift(ra(n,f,d)),f=ki(n,r),f!=null&&c.push(ra(n,f,d))),n=n.return}return c}function Us(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Hf(n,r,a,c,d){for(var f=r._reactName,_=[];a!==null&&a!==c;){var T=a,C=T.alternate,F=T.stateNode;if(C!==null&&C===c)break;T.tag===5&&F!==null&&(T=F,d?(C=ki(a,f),C!=null&&_.unshift(ra(a,C,T))):d||(C=ki(a,f),C!=null&&_.push(ra(a,C,T)))),a=a.return}_.length!==0&&n.push({event:r,listeners:_})}var eE=/\r\n?/g,tE=/\u0000|\uFFFD/g;function qf(n){return(typeof n=="string"?n:""+n).replace(eE,`
`).replace(tE,"")}function Cl(n,r,a){if(r=qf(r),qf(n)!==r&&a)throw Error(t(425))}function kl(){}var xc=null,Dc=null;function Vc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Oc=typeof setTimeout=="function"?setTimeout:void 0,nE=typeof clearTimeout=="function"?clearTimeout:void 0,Wf=typeof Promise=="function"?Promise:void 0,rE=typeof queueMicrotask=="function"?queueMicrotask:typeof Wf<"u"?function(n){return Wf.resolve(null).then(n).catch(iE)}:Oc;function iE(n){setTimeout(function(){throw n})}function Lc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Wr(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Wr(r)}function Yr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Gf(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var js=Math.random().toString(36).slice(2),Wn="__reactFiber$"+js,ia="__reactProps$"+js,mr="__reactContainer$"+js,Mc="__reactEvents$"+js,sE="__reactListeners$"+js,oE="__reactHandles$"+js;function zi(n){var r=n[Wn];if(r)return r;for(var a=n.parentNode;a;){if(r=a[mr]||a[Wn]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=Gf(n);n!==null;){if(a=n[Wn])return a;n=Gf(n)}return r}n=a,a=n.parentNode}return null}function sa(n){return n=n[Wn]||n[mr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function zs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Pl(n){return n[ia]||null}var bc=[],Bs=-1;function Jr(n){return{current:n}}function Ge(n){0>Bs||(n.current=bc[Bs],bc[Bs]=null,Bs--)}function He(n,r){Bs++,bc[Bs]=n.current,n.current=r}var Xr={},Dt=Jr(Xr),$t=Jr(!1),Bi=Xr;function $s(n,r){var a=n.type.contextTypes;if(!a)return Xr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},f;for(f in a)d[f]=r[f];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Ht(n){return n=n.childContextTypes,n!=null}function Nl(){Ge($t),Ge(Dt)}function Kf(n,r,a){if(Dt.current!==Xr)throw Error(t(168));He(Dt,r),He($t,a)}function Qf(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,Me(n)||"Unknown",d));return ne({},a,c)}function xl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Xr,Bi=Dt.current,He(Dt,n),He($t,$t.current),!0}function Yf(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Qf(n,r,Bi),c.__reactInternalMemoizedMergedChildContext=n,Ge($t),Ge(Dt),He(Dt,n)):Ge($t),He($t,a)}var gr=null,Dl=!1,Fc=!1;function Jf(n){gr===null?gr=[n]:gr.push(n)}function aE(n){Dl=!0,Jf(n)}function Zr(){if(!Fc&&gr!==null){Fc=!0;var n=0,r=ke;try{var a=gr;for(ke=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}gr=null,Dl=!1}catch(d){throw gr!==null&&(gr=gr.slice(n+1)),Lo(Is,Zr),d}finally{ke=r,Fc=!1}}return null}var Hs=[],qs=0,Vl=null,Ol=0,un=[],cn=0,$i=null,yr=1,_r="";function Hi(n,r){Hs[qs++]=Ol,Hs[qs++]=Vl,Vl=n,Ol=r}function Xf(n,r,a){un[cn++]=yr,un[cn++]=_r,un[cn++]=$i,$i=n;var c=yr;n=_r;var d=32-Xt(c)-1;c&=~(1<<d),a+=1;var f=32-Xt(r)+d;if(30<f){var _=d-d%5;f=(c&(1<<_)-1).toString(32),c>>=_,d-=_,yr=1<<32-Xt(r)+d|a<<d|c,_r=f+n}else yr=1<<f|a<<d|c,_r=n}function Uc(n){n.return!==null&&(Hi(n,1),Xf(n,1,0))}function jc(n){for(;n===Vl;)Vl=Hs[--qs],Hs[qs]=null,Ol=Hs[--qs],Hs[qs]=null;for(;n===$i;)$i=un[--cn],un[cn]=null,_r=un[--cn],un[cn]=null,yr=un[--cn],un[cn]=null}var rn=null,sn=null,Xe=!1,Tn=null;function Zf(n,r){var a=pn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function ep(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,rn=n,sn=Yr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,rn=n,sn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=$i!==null?{id:yr,overflow:_r}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=pn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,rn=n,sn=null,!0):!1;default:return!1}}function zc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Bc(n){if(Xe){var r=sn;if(r){var a=r;if(!ep(n,r)){if(zc(n))throw Error(t(418));r=Yr(a.nextSibling);var c=rn;r&&ep(n,r)?Zf(c,a):(n.flags=n.flags&-4097|2,Xe=!1,rn=n)}}else{if(zc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Xe=!1,rn=n}}}function tp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;rn=n}function Ll(n){if(n!==rn)return!1;if(!Xe)return tp(n),Xe=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Vc(n.type,n.memoizedProps)),r&&(r=sn)){if(zc(n))throw np(),Error(t(418));for(;r;)Zf(n,r),r=Yr(r.nextSibling)}if(tp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){sn=Yr(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}sn=null}}else sn=rn?Yr(n.stateNode.nextSibling):null;return!0}function np(){for(var n=sn;n;)n=Yr(n.nextSibling)}function Ws(){sn=rn=null,Xe=!1}function $c(n){Tn===null?Tn=[n]:Tn.push(n)}var lE=Fe.ReactCurrentBatchConfig;function oa(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,f=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===f?r.ref:(r=function(_){var T=d.refs;_===null?delete T[f]:T[f]=_},r._stringRef=f,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ml(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function rp(n){var r=n._init;return r(n._payload)}function ip(n){function r(O,N){if(n){var b=O.deletions;b===null?(O.deletions=[N],O.flags|=16):b.push(N)}}function a(O,N){if(!n)return null;for(;N!==null;)r(O,N),N=N.sibling;return null}function c(O,N){for(O=new Map;N!==null;)N.key!==null?O.set(N.key,N):O.set(N.index,N),N=N.sibling;return O}function d(O,N){return O=ai(O,N),O.index=0,O.sibling=null,O}function f(O,N,b){return O.index=b,n?(b=O.alternate,b!==null?(b=b.index,b<N?(O.flags|=2,N):b):(O.flags|=2,N)):(O.flags|=1048576,N)}function _(O){return n&&O.alternate===null&&(O.flags|=2),O}function T(O,N,b,Q){return N===null||N.tag!==6?(N=Oh(b,O.mode,Q),N.return=O,N):(N=d(N,b),N.return=O,N)}function C(O,N,b,Q){var ae=b.type;return ae===k?W(O,N,b.props.children,Q,b.key):N!==null&&(N.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===Nt&&rp(ae)===N.type)?(Q=d(N,b.props),Q.ref=oa(O,N,b),Q.return=O,Q):(Q=ou(b.type,b.key,b.props,null,O.mode,Q),Q.ref=oa(O,N,b),Q.return=O,Q)}function F(O,N,b,Q){return N===null||N.tag!==4||N.stateNode.containerInfo!==b.containerInfo||N.stateNode.implementation!==b.implementation?(N=Lh(b,O.mode,Q),N.return=O,N):(N=d(N,b.children||[]),N.return=O,N)}function W(O,N,b,Q,ae){return N===null||N.tag!==7?(N=Xi(b,O.mode,Q,ae),N.return=O,N):(N=d(N,b),N.return=O,N)}function G(O,N,b){if(typeof N=="string"&&N!==""||typeof N=="number")return N=Oh(""+N,O.mode,b),N.return=O,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case je:return b=ou(N.type,N.key,N.props,null,O.mode,b),b.ref=oa(O,null,N),b.return=O,b;case Ve:return N=Lh(N,O.mode,b),N.return=O,N;case Nt:var Q=N._init;return G(O,Q(N._payload),b)}if(it(N)||le(N))return N=Xi(N,O.mode,b,null),N.return=O,N;Ml(O,N)}return null}function q(O,N,b,Q){var ae=N!==null?N.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return ae!==null?null:T(O,N,""+b,Q);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case je:return b.key===ae?C(O,N,b,Q):null;case Ve:return b.key===ae?F(O,N,b,Q):null;case Nt:return ae=b._init,q(O,N,ae(b._payload),Q)}if(it(b)||le(b))return ae!==null?null:W(O,N,b,Q,null);Ml(O,b)}return null}function ee(O,N,b,Q,ae){if(typeof Q=="string"&&Q!==""||typeof Q=="number")return O=O.get(b)||null,T(N,O,""+Q,ae);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case je:return O=O.get(Q.key===null?b:Q.key)||null,C(N,O,Q,ae);case Ve:return O=O.get(Q.key===null?b:Q.key)||null,F(N,O,Q,ae);case Nt:var ce=Q._init;return ee(O,N,b,ce(Q._payload),ae)}if(it(Q)||le(Q))return O=O.get(b)||null,W(N,O,Q,ae,null);Ml(N,Q)}return null}function ie(O,N,b,Q){for(var ae=null,ce=null,he=N,fe=N=0,wt=null;he!==null&&fe<b.length;fe++){he.index>fe?(wt=he,he=null):wt=he.sibling;var Oe=q(O,he,b[fe],Q);if(Oe===null){he===null&&(he=wt);break}n&&he&&Oe.alternate===null&&r(O,he),N=f(Oe,N,fe),ce===null?ae=Oe:ce.sibling=Oe,ce=Oe,he=wt}if(fe===b.length)return a(O,he),Xe&&Hi(O,fe),ae;if(he===null){for(;fe<b.length;fe++)he=G(O,b[fe],Q),he!==null&&(N=f(he,N,fe),ce===null?ae=he:ce.sibling=he,ce=he);return Xe&&Hi(O,fe),ae}for(he=c(O,he);fe<b.length;fe++)wt=ee(he,O,fe,b[fe],Q),wt!==null&&(n&&wt.alternate!==null&&he.delete(wt.key===null?fe:wt.key),N=f(wt,N,fe),ce===null?ae=wt:ce.sibling=wt,ce=wt);return n&&he.forEach(function(li){return r(O,li)}),Xe&&Hi(O,fe),ae}function se(O,N,b,Q){var ae=le(b);if(typeof ae!="function")throw Error(t(150));if(b=ae.call(b),b==null)throw Error(t(151));for(var ce=ae=null,he=N,fe=N=0,wt=null,Oe=b.next();he!==null&&!Oe.done;fe++,Oe=b.next()){he.index>fe?(wt=he,he=null):wt=he.sibling;var li=q(O,he,Oe.value,Q);if(li===null){he===null&&(he=wt);break}n&&he&&li.alternate===null&&r(O,he),N=f(li,N,fe),ce===null?ae=li:ce.sibling=li,ce=li,he=wt}if(Oe.done)return a(O,he),Xe&&Hi(O,fe),ae;if(he===null){for(;!Oe.done;fe++,Oe=b.next())Oe=G(O,Oe.value,Q),Oe!==null&&(N=f(Oe,N,fe),ce===null?ae=Oe:ce.sibling=Oe,ce=Oe);return Xe&&Hi(O,fe),ae}for(he=c(O,he);!Oe.done;fe++,Oe=b.next())Oe=ee(he,O,fe,Oe.value,Q),Oe!==null&&(n&&Oe.alternate!==null&&he.delete(Oe.key===null?fe:Oe.key),N=f(Oe,N,fe),ce===null?ae=Oe:ce.sibling=Oe,ce=Oe);return n&&he.forEach(function(zE){return r(O,zE)}),Xe&&Hi(O,fe),ae}function ot(O,N,b,Q){if(typeof b=="object"&&b!==null&&b.type===k&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case je:e:{for(var ae=b.key,ce=N;ce!==null;){if(ce.key===ae){if(ae=b.type,ae===k){if(ce.tag===7){a(O,ce.sibling),N=d(ce,b.props.children),N.return=O,O=N;break e}}else if(ce.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===Nt&&rp(ae)===ce.type){a(O,ce.sibling),N=d(ce,b.props),N.ref=oa(O,ce,b),N.return=O,O=N;break e}a(O,ce);break}else r(O,ce);ce=ce.sibling}b.type===k?(N=Xi(b.props.children,O.mode,Q,b.key),N.return=O,O=N):(Q=ou(b.type,b.key,b.props,null,O.mode,Q),Q.ref=oa(O,N,b),Q.return=O,O=Q)}return _(O);case Ve:e:{for(ce=b.key;N!==null;){if(N.key===ce)if(N.tag===4&&N.stateNode.containerInfo===b.containerInfo&&N.stateNode.implementation===b.implementation){a(O,N.sibling),N=d(N,b.children||[]),N.return=O,O=N;break e}else{a(O,N);break}else r(O,N);N=N.sibling}N=Lh(b,O.mode,Q),N.return=O,O=N}return _(O);case Nt:return ce=b._init,ot(O,N,ce(b._payload),Q)}if(it(b))return ie(O,N,b,Q);if(le(b))return se(O,N,b,Q);Ml(O,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,N!==null&&N.tag===6?(a(O,N.sibling),N=d(N,b),N.return=O,O=N):(a(O,N),N=Oh(b,O.mode,Q),N.return=O,O=N),_(O)):a(O,N)}return ot}var Gs=ip(!0),sp=ip(!1),bl=Jr(null),Fl=null,Ks=null,Hc=null;function qc(){Hc=Ks=Fl=null}function Wc(n){var r=bl.current;Ge(bl),n._currentValue=r}function Gc(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function Qs(n,r){Fl=n,Hc=Ks=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(qt=!0),n.firstContext=null)}function hn(n){var r=n._currentValue;if(Hc!==n)if(n={context:n,memoizedValue:r,next:null},Ks===null){if(Fl===null)throw Error(t(308));Ks=n,Fl.dependencies={lanes:0,firstContext:n}}else Ks=Ks.next=n;return r}var qi=null;function Kc(n){qi===null?qi=[n]:qi.push(n)}function op(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,Kc(r)):(a.next=d.next,d.next=a),r.interleaved=a,vr(n,c)}function vr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ei=!1;function Qc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ap(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Er(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function ti(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(De&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,vr(n,a)}return d=c.interleaved,d===null?(r.next=r,Kc(c)):(r.next=d.next,d.next=r),c.interleaved=r,vr(n,a)}function Ul(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,zo(n,a)}}function lp(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};f===null?d=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?d=f=r:f=f.next=r}else d=f=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function jl(n,r,a,c){var d=n.updateQueue;ei=!1;var f=d.firstBaseUpdate,_=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var C=T,F=C.next;C.next=null,_===null?f=F:_.next=F,_=C;var W=n.alternate;W!==null&&(W=W.updateQueue,T=W.lastBaseUpdate,T!==_&&(T===null?W.firstBaseUpdate=F:T.next=F,W.lastBaseUpdate=C))}if(f!==null){var G=d.baseState;_=0,W=F=C=null,T=f;do{var q=T.lane,ee=T.eventTime;if((c&q)===q){W!==null&&(W=W.next={eventTime:ee,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var ie=n,se=T;switch(q=r,ee=a,se.tag){case 1:if(ie=se.payload,typeof ie=="function"){G=ie.call(ee,G,q);break e}G=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=se.payload,q=typeof ie=="function"?ie.call(ee,G,q):ie,q==null)break e;G=ne({},G,q);break e;case 2:ei=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,q=d.effects,q===null?d.effects=[T]:q.push(T))}else ee={eventTime:ee,lane:q,tag:T.tag,payload:T.payload,callback:T.callback,next:null},W===null?(F=W=ee,C=G):W=W.next=ee,_|=q;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;q=T,T=q.next,q.next=null,d.lastBaseUpdate=q,d.shared.pending=null}}while(!0);if(W===null&&(C=G),d.baseState=C,d.firstBaseUpdate=F,d.lastBaseUpdate=W,r=d.shared.interleaved,r!==null){d=r;do _|=d.lane,d=d.next;while(d!==r)}else f===null&&(d.shared.lanes=0);Ki|=_,n.lanes=_,n.memoizedState=G}}function up(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var aa={},Gn=Jr(aa),la=Jr(aa),ua=Jr(aa);function Wi(n){if(n===aa)throw Error(t(174));return n}function Yc(n,r){switch(He(ua,r),He(la,n),He(Gn,aa),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ys(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=ys(r,n)}Ge(Gn),He(Gn,r)}function Ys(){Ge(Gn),Ge(la),Ge(ua)}function cp(n){Wi(ua.current);var r=Wi(Gn.current),a=ys(r,n.type);r!==a&&(He(la,n),He(Gn,a))}function Jc(n){la.current===n&&(Ge(Gn),Ge(la))}var Ze=Jr(0);function zl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Xc=[];function Zc(){for(var n=0;n<Xc.length;n++)Xc[n]._workInProgressVersionPrimary=null;Xc.length=0}var Bl=Fe.ReactCurrentDispatcher,eh=Fe.ReactCurrentBatchConfig,Gi=0,et=null,ft=null,vt=null,$l=!1,ca=!1,ha=0,uE=0;function Vt(){throw Error(t(321))}function th(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!wn(n[a],r[a]))return!1;return!0}function nh(n,r,a,c,d,f){if(Gi=f,et=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Bl.current=n===null||n.memoizedState===null?fE:pE,n=a(c,d),ca){f=0;do{if(ca=!1,ha=0,25<=f)throw Error(t(301));f+=1,vt=ft=null,r.updateQueue=null,Bl.current=mE,n=a(c,d)}while(ca)}if(Bl.current=Wl,r=ft!==null&&ft.next!==null,Gi=0,vt=ft=et=null,$l=!1,r)throw Error(t(300));return n}function rh(){var n=ha!==0;return ha=0,n}function Kn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?et.memoizedState=vt=n:vt=vt.next=n,vt}function dn(){if(ft===null){var n=et.alternate;n=n!==null?n.memoizedState:null}else n=ft.next;var r=vt===null?et.memoizedState:vt.next;if(r!==null)vt=r,ft=n;else{if(n===null)throw Error(t(310));ft=n,n={memoizedState:ft.memoizedState,baseState:ft.baseState,baseQueue:ft.baseQueue,queue:ft.queue,next:null},vt===null?et.memoizedState=vt=n:vt=vt.next=n}return vt}function da(n,r){return typeof r=="function"?r(n):r}function ih(n){var r=dn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=ft,d=c.baseQueue,f=a.pending;if(f!==null){if(d!==null){var _=d.next;d.next=f.next,f.next=_}c.baseQueue=d=f,a.pending=null}if(d!==null){f=d.next,c=c.baseState;var T=_=null,C=null,F=f;do{var W=F.lane;if((Gi&W)===W)C!==null&&(C=C.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var G={lane:W,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};C===null?(T=C=G,_=c):C=C.next=G,et.lanes|=W,Ki|=W}F=F.next}while(F!==null&&F!==f);C===null?_=c:C.next=T,wn(c,r.memoizedState)||(qt=!0),r.memoizedState=c,r.baseState=_,r.baseQueue=C,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do f=d.lane,et.lanes|=f,Ki|=f,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function sh(n){var r=dn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,f=r.memoizedState;if(d!==null){a.pending=null;var _=d=d.next;do f=n(f,_.action),_=_.next;while(_!==d);wn(f,r.memoizedState)||(qt=!0),r.memoizedState=f,r.baseQueue===null&&(r.baseState=f),a.lastRenderedState=f}return[f,c]}function hp(){}function dp(n,r){var a=et,c=dn(),d=r(),f=!wn(c.memoizedState,d);if(f&&(c.memoizedState=d,qt=!0),c=c.queue,oh(mp.bind(null,a,c,n),[n]),c.getSnapshot!==r||f||vt!==null&&vt.memoizedState.tag&1){if(a.flags|=2048,fa(9,pp.bind(null,a,c,d,r),void 0,null),Et===null)throw Error(t(349));(Gi&30)!==0||fp(a,r,d)}return d}function fp(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=et.updateQueue,r===null?(r={lastEffect:null,stores:null},et.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function pp(n,r,a,c){r.value=a,r.getSnapshot=c,gp(r)&&yp(n)}function mp(n,r,a){return a(function(){gp(r)&&yp(n)})}function gp(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!wn(n,a)}catch{return!0}}function yp(n){var r=vr(n,1);r!==null&&Rn(r,n,1,-1)}function _p(n){var r=Kn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:n},r.queue=n,n=n.dispatch=dE.bind(null,et,n),[r.memoizedState,n]}function fa(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=et.updateQueue,r===null?(r={lastEffect:null,stores:null},et.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function vp(){return dn().memoizedState}function Hl(n,r,a,c){var d=Kn();et.flags|=n,d.memoizedState=fa(1|r,a,void 0,c===void 0?null:c)}function ql(n,r,a,c){var d=dn();c=c===void 0?null:c;var f=void 0;if(ft!==null){var _=ft.memoizedState;if(f=_.destroy,c!==null&&th(c,_.deps)){d.memoizedState=fa(r,a,f,c);return}}et.flags|=n,d.memoizedState=fa(1|r,a,f,c)}function Ep(n,r){return Hl(8390656,8,n,r)}function oh(n,r){return ql(2048,8,n,r)}function wp(n,r){return ql(4,2,n,r)}function Tp(n,r){return ql(4,4,n,r)}function Ip(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Sp(n,r,a){return a=a!=null?a.concat([n]):null,ql(4,4,Ip.bind(null,r,n),a)}function ah(){}function Ap(n,r){var a=dn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&th(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function Rp(n,r){var a=dn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&th(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function Cp(n,r,a){return(Gi&21)===0?(n.baseState&&(n.baseState=!1,qt=!0),n.memoizedState=a):(wn(a,r)||(a=Uo(),et.lanes|=a,Ki|=a,n.baseState=!0),r)}function cE(n,r){var a=ke;ke=a!==0&&4>a?a:4,n(!0);var c=eh.transition;eh.transition={};try{n(!1),r()}finally{ke=a,eh.transition=c}}function kp(){return dn().memoizedState}function hE(n,r,a){var c=si(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Pp(n))Np(r,a);else if(a=op(n,r,a,c),a!==null){var d=Bt();Rn(a,n,c,d),xp(a,r,c)}}function dE(n,r,a){var c=si(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Pp(n))Np(r,d);else{var f=n.alternate;if(n.lanes===0&&(f===null||f.lanes===0)&&(f=r.lastRenderedReducer,f!==null))try{var _=r.lastRenderedState,T=f(_,a);if(d.hasEagerState=!0,d.eagerState=T,wn(T,_)){var C=r.interleaved;C===null?(d.next=d,Kc(r)):(d.next=C.next,C.next=d),r.interleaved=d;return}}catch{}finally{}a=op(n,r,d,c),a!==null&&(d=Bt(),Rn(a,n,c,d),xp(a,r,c))}}function Pp(n){var r=n.alternate;return n===et||r!==null&&r===et}function Np(n,r){ca=$l=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function xp(n,r,a){if((a&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,zo(n,a)}}var Wl={readContext:hn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},fE={readContext:hn,useCallback:function(n,r){return Kn().memoizedState=[n,r===void 0?null:r],n},useContext:hn,useEffect:Ep,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,Hl(4194308,4,Ip.bind(null,r,n),a)},useLayoutEffect:function(n,r){return Hl(4194308,4,n,r)},useInsertionEffect:function(n,r){return Hl(4,2,n,r)},useMemo:function(n,r){var a=Kn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=Kn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=hE.bind(null,et,n),[c.memoizedState,n]},useRef:function(n){var r=Kn();return n={current:n},r.memoizedState=n},useState:_p,useDebugValue:ah,useDeferredValue:function(n){return Kn().memoizedState=n},useTransition:function(){var n=_p(!1),r=n[0];return n=cE.bind(null,n[1]),Kn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=et,d=Kn();if(Xe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),Et===null)throw Error(t(349));(Gi&30)!==0||fp(c,r,a)}d.memoizedState=a;var f={value:a,getSnapshot:r};return d.queue=f,Ep(mp.bind(null,c,f,n),[n]),c.flags|=2048,fa(9,pp.bind(null,c,f,a,r),void 0,null),a},useId:function(){var n=Kn(),r=Et.identifierPrefix;if(Xe){var a=_r,c=yr;a=(c&~(1<<32-Xt(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=ha++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=uE++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},pE={readContext:hn,useCallback:Ap,useContext:hn,useEffect:oh,useImperativeHandle:Sp,useInsertionEffect:wp,useLayoutEffect:Tp,useMemo:Rp,useReducer:ih,useRef:vp,useState:function(){return ih(da)},useDebugValue:ah,useDeferredValue:function(n){var r=dn();return Cp(r,ft.memoizedState,n)},useTransition:function(){var n=ih(da)[0],r=dn().memoizedState;return[n,r]},useMutableSource:hp,useSyncExternalStore:dp,useId:kp,unstable_isNewReconciler:!1},mE={readContext:hn,useCallback:Ap,useContext:hn,useEffect:oh,useImperativeHandle:Sp,useInsertionEffect:wp,useLayoutEffect:Tp,useMemo:Rp,useReducer:sh,useRef:vp,useState:function(){return sh(da)},useDebugValue:ah,useDeferredValue:function(n){var r=dn();return ft===null?r.memoizedState=n:Cp(r,ft.memoizedState,n)},useTransition:function(){var n=sh(da)[0],r=dn().memoizedState;return[n,r]},useMutableSource:hp,useSyncExternalStore:dp,useId:kp,unstable_isNewReconciler:!1};function In(n,r){if(n&&n.defaultProps){r=ne({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function lh(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:ne({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Gl={isMounted:function(n){return(n=n._reactInternals)?vn(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=Bt(),d=si(n),f=Er(c,d);f.payload=r,a!=null&&(f.callback=a),r=ti(n,f,d),r!==null&&(Rn(r,n,d,c),Ul(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=Bt(),d=si(n),f=Er(c,d);f.tag=1,f.payload=r,a!=null&&(f.callback=a),r=ti(n,f,d),r!==null&&(Rn(r,n,d,c),Ul(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Bt(),c=si(n),d=Er(a,c);d.tag=2,r!=null&&(d.callback=r),r=ti(n,d,c),r!==null&&(Rn(r,n,c,a),Ul(r,n,c))}};function Dp(n,r,a,c,d,f,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,f,_):r.prototype&&r.prototype.isPureReactComponent?!Zo(a,c)||!Zo(d,f):!0}function Vp(n,r,a){var c=!1,d=Xr,f=r.contextType;return typeof f=="object"&&f!==null?f=hn(f):(d=Ht(r)?Bi:Dt.current,c=r.contextTypes,f=(c=c!=null)?$s(n,d):Xr),r=new r(a,f),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Gl,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=f),r}function Op(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&Gl.enqueueReplaceState(r,r.state,null)}function uh(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Qc(n);var f=r.contextType;typeof f=="object"&&f!==null?d.context=hn(f):(f=Ht(r)?Bi:Dt.current,d.context=$s(n,f)),d.state=n.memoizedState,f=r.getDerivedStateFromProps,typeof f=="function"&&(lh(n,r,f,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Gl.enqueueReplaceState(d,d.state,null),jl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Js(n,r){try{var a="",c=r;do a+=Ie(c),c=c.return;while(c);var d=a}catch(f){d=`
Error generating stack: `+f.message+`
`+f.stack}return{value:n,source:r,stack:d,digest:null}}function ch(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function hh(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var gE=typeof WeakMap=="function"?WeakMap:Map;function Lp(n,r,a){a=Er(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){eu||(eu=!0,Rh=c),hh(n,r)},a}function Mp(n,r,a){a=Er(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){hh(n,r)}}var f=n.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(a.callback=function(){hh(n,r),typeof c!="function"&&(ri===null?ri=new Set([this]):ri.add(this));var _=r.stack;this.componentDidCatch(r.value,{componentStack:_!==null?_:""})}),a}function bp(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new gE;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=NE.bind(null,n,r,a),r.then(n,n))}function Fp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Up(n,r,a,c,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=Er(-1,1),r.tag=2,ti(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var yE=Fe.ReactCurrentOwner,qt=!1;function zt(n,r,a,c){r.child=n===null?sp(r,null,a,c):Gs(r,n.child,a,c)}function jp(n,r,a,c,d){a=a.render;var f=r.ref;return Qs(r,d),c=nh(n,r,a,c,f,d),a=rh(),n!==null&&!qt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,wr(n,r,d)):(Xe&&a&&Uc(r),r.flags|=1,zt(n,r,c,d),r.child)}function zp(n,r,a,c,d){if(n===null){var f=a.type;return typeof f=="function"&&!Vh(f)&&f.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=f,Bp(n,r,f,c,d)):(n=ou(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(f=n.child,(n.lanes&d)===0){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Zo,a(_,c)&&n.ref===r.ref)return wr(n,r,d)}return r.flags|=1,n=ai(f,c),n.ref=r.ref,n.return=r,r.child=n}function Bp(n,r,a,c,d){if(n!==null){var f=n.memoizedProps;if(Zo(f,c)&&n.ref===r.ref)if(qt=!1,r.pendingProps=c=f,(n.lanes&d)!==0)(n.flags&131072)!==0&&(qt=!0);else return r.lanes=n.lanes,wr(n,r,d)}return dh(n,r,a,c,d)}function $p(n,r,a){var c=r.pendingProps,d=c.children,f=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(Zs,on),on|=a;else{if((a&1073741824)===0)return n=f!==null?f.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,He(Zs,on),on|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=f!==null?f.baseLanes:a,He(Zs,on),on|=c}else f!==null?(c=f.baseLanes|a,r.memoizedState=null):c=a,He(Zs,on),on|=c;return zt(n,r,d,a),r.child}function Hp(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function dh(n,r,a,c,d){var f=Ht(a)?Bi:Dt.current;return f=$s(r,f),Qs(r,d),a=nh(n,r,a,c,f,d),c=rh(),n!==null&&!qt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,wr(n,r,d)):(Xe&&c&&Uc(r),r.flags|=1,zt(n,r,a,d),r.child)}function qp(n,r,a,c,d){if(Ht(a)){var f=!0;xl(r)}else f=!1;if(Qs(r,d),r.stateNode===null)Ql(n,r),Vp(r,a,c),uh(r,a,c,d),c=!0;else if(n===null){var _=r.stateNode,T=r.memoizedProps;_.props=T;var C=_.context,F=a.contextType;typeof F=="object"&&F!==null?F=hn(F):(F=Ht(a)?Bi:Dt.current,F=$s(r,F));var W=a.getDerivedStateFromProps,G=typeof W=="function"||typeof _.getSnapshotBeforeUpdate=="function";G||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==c||C!==F)&&Op(r,_,c,F),ei=!1;var q=r.memoizedState;_.state=q,jl(r,c,_,d),C=r.memoizedState,T!==c||q!==C||$t.current||ei?(typeof W=="function"&&(lh(r,a,W,c),C=r.memoizedState),(T=ei||Dp(r,a,T,c,q,C,F))?(G||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(r.flags|=4194308)):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=C),_.props=c,_.state=C,_.context=F,c=T):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{_=r.stateNode,ap(n,r),T=r.memoizedProps,F=r.type===r.elementType?T:In(r.type,T),_.props=F,G=r.pendingProps,q=_.context,C=a.contextType,typeof C=="object"&&C!==null?C=hn(C):(C=Ht(a)?Bi:Dt.current,C=$s(r,C));var ee=a.getDerivedStateFromProps;(W=typeof ee=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==G||q!==C)&&Op(r,_,c,C),ei=!1,q=r.memoizedState,_.state=q,jl(r,c,_,d);var ie=r.memoizedState;T!==G||q!==ie||$t.current||ei?(typeof ee=="function"&&(lh(r,a,ee,c),ie=r.memoizedState),(F=ei||Dp(r,a,F,c,q,ie,C)||!1)?(W||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,ie,C),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,ie,C)),typeof _.componentDidUpdate=="function"&&(r.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=ie),_.props=c,_.state=ie,_.context=C,c=F):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),c=!1)}return fh(n,r,a,c,f,d)}function fh(n,r,a,c,d,f){Hp(n,r);var _=(r.flags&128)!==0;if(!c&&!_)return d&&Yf(r,a,!1),wr(n,r,f);c=r.stateNode,yE.current=r;var T=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&_?(r.child=Gs(r,n.child,null,f),r.child=Gs(r,null,T,f)):zt(n,r,T,f),r.memoizedState=c.state,d&&Yf(r,a,!0),r.child}function Wp(n){var r=n.stateNode;r.pendingContext?Kf(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Kf(n,r.context,!1),Yc(n,r.containerInfo)}function Gp(n,r,a,c,d){return Ws(),$c(d),r.flags|=256,zt(n,r,a,c),r.child}var ph={dehydrated:null,treeContext:null,retryLane:0};function mh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Kp(n,r,a){var c=r.pendingProps,d=Ze.current,f=!1,_=(r.flags&128)!==0,T;if((T=_)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(f=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),He(Ze,d&1),n===null)return Bc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(_=c.children,n=c.fallback,f?(c=r.mode,f=r.child,_={mode:"hidden",children:_},(c&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=_):f=au(_,c,0,null),n=Xi(n,c,a,null),f.return=r,n.return=r,f.sibling=n,r.child=f,r.child.memoizedState=mh(a),r.memoizedState=ph,n):gh(r,_));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return _E(n,r,_,c,T,d,a);if(f){f=c.fallback,_=r.mode,d=n.child,T=d.sibling;var C={mode:"hidden",children:c.children};return(_&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=C,r.deletions=null):(c=ai(d,C),c.subtreeFlags=d.subtreeFlags&14680064),T!==null?f=ai(T,f):(f=Xi(f,_,a,null),f.flags|=2),f.return=r,c.return=r,c.sibling=f,r.child=c,c=f,f=r.child,_=n.child.memoizedState,_=_===null?mh(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},f.memoizedState=_,f.childLanes=n.childLanes&~a,r.memoizedState=ph,c}return f=n.child,n=f.sibling,c=ai(f,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function gh(n,r){return r=au({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Kl(n,r,a,c){return c!==null&&$c(c),Gs(r,n.child,null,a),n=gh(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function _E(n,r,a,c,d,f,_){if(a)return r.flags&256?(r.flags&=-257,c=ch(Error(t(422))),Kl(n,r,_,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(f=c.fallback,d=r.mode,c=au({mode:"visible",children:c.children},d,0,null),f=Xi(f,d,_,null),f.flags|=2,c.return=r,f.return=r,c.sibling=f,r.child=c,(r.mode&1)!==0&&Gs(r,n.child,null,_),r.child.memoizedState=mh(_),r.memoizedState=ph,f);if((r.mode&1)===0)return Kl(n,r,_,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;return c=T,f=Error(t(419)),c=ch(f,c,void 0),Kl(n,r,_,c)}if(T=(_&n.childLanes)!==0,qt||T){if(c=Et,c!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|_))!==0?0:d,d!==0&&d!==f.retryLane&&(f.retryLane=d,vr(n,d),Rn(c,n,d,-1))}return Dh(),c=ch(Error(t(421))),Kl(n,r,_,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=xE.bind(null,n),d._reactRetry=r,null):(n=f.treeContext,sn=Yr(d.nextSibling),rn=r,Xe=!0,Tn=null,n!==null&&(un[cn++]=yr,un[cn++]=_r,un[cn++]=$i,yr=n.id,_r=n.overflow,$i=r),r=gh(r,c.children),r.flags|=4096,r)}function Qp(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),Gc(n.return,r,a)}function yh(n,r,a,c,d){var f=n.memoizedState;f===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(f.isBackwards=r,f.rendering=null,f.renderingStartTime=0,f.last=c,f.tail=a,f.tailMode=d)}function Yp(n,r,a){var c=r.pendingProps,d=c.revealOrder,f=c.tail;if(zt(n,r,c.children,a),c=Ze.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Qp(n,a,r);else if(n.tag===19)Qp(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(He(Ze,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&zl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),yh(r,!1,d,a,f);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&zl(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}yh(r,!0,a,null,f);break;case"together":yh(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ql(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function wr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Ki|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=ai(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=ai(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function vE(n,r,a){switch(r.tag){case 3:Wp(r),Ws();break;case 5:cp(r);break;case 1:Ht(r.type)&&xl(r);break;case 4:Yc(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;He(bl,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(He(Ze,Ze.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?Kp(n,r,a):(He(Ze,Ze.current&1),n=wr(n,r,a),n!==null?n.sibling:null);He(Ze,Ze.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(n.flags&128)!==0){if(c)return Yp(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),He(Ze,Ze.current),c)break;return null;case 22:case 23:return r.lanes=0,$p(n,r,a)}return wr(n,r,a)}var Jp,_h,Xp,Zp;Jp=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},_h=function(){},Xp=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,Wi(Gn.current);var f=null;switch(a){case"input":d=ms(n,d),c=ms(n,c),f=[];break;case"select":d=ne({},d,{value:void 0}),c=ne({},c,{value:void 0}),f=[];break;case"textarea":d=ko(n,d),c=ko(n,c),f=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=kl)}_n(a,c);var _;a=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var T=d[F];for(_ in T)T.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?f||(f=[]):(f=f||[]).push(F,null));for(F in c){var C=c[F];if(T=d!=null?d[F]:void 0,c.hasOwnProperty(F)&&C!==T&&(C!=null||T!=null))if(F==="style")if(T){for(_ in T)!T.hasOwnProperty(_)||C&&C.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in C)C.hasOwnProperty(_)&&T[_]!==C[_]&&(a||(a={}),a[_]=C[_])}else a||(f||(f=[]),f.push(F,a)),a=C;else F==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,T=T?T.__html:void 0,C!=null&&T!==C&&(f=f||[]).push(F,C)):F==="children"?typeof C!="string"&&typeof C!="number"||(f=f||[]).push(F,""+C):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(C!=null&&F==="onScroll"&&We("scroll",n),f||T===C||(f=[])):(f=f||[]).push(F,C))}a&&(f=f||[]).push("style",a);var F=f;(r.updateQueue=F)&&(r.flags|=4)}},Zp=function(n,r,a,c){a!==c&&(r.flags|=4)};function pa(n,r){if(!Xe)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Ot(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function EE(n,r,a){var c=r.pendingProps;switch(jc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(r),null;case 1:return Ht(r.type)&&Nl(),Ot(r),null;case 3:return c=r.stateNode,Ys(),Ge($t),Ge(Dt),Zc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ll(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Tn!==null&&(Ph(Tn),Tn=null))),_h(n,r),Ot(r),null;case 5:Jc(r);var d=Wi(ua.current);if(a=r.type,n!==null&&r.stateNode!=null)Xp(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Ot(r),null}if(n=Wi(Gn.current),Ll(r)){c=r.stateNode,a=r.type;var f=r.memoizedProps;switch(c[Wn]=r,c[ia]=f,n=(r.mode&1)!==0,a){case"dialog":We("cancel",c),We("close",c);break;case"iframe":case"object":case"embed":We("load",c);break;case"video":case"audio":for(d=0;d<ta.length;d++)We(ta[d],c);break;case"source":We("error",c);break;case"img":case"image":case"link":We("error",c),We("load",c);break;case"details":We("toggle",c);break;case"input":Za(c,f),We("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!f.multiple},We("invalid",c);break;case"textarea":Po(c,f),We("invalid",c)}_n(a,f),d=null;for(var _ in f)if(f.hasOwnProperty(_)){var T=f[_];_==="children"?typeof T=="string"?c.textContent!==T&&(f.suppressHydrationWarning!==!0&&Cl(c.textContent,T,n),d=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(f.suppressHydrationWarning!==!0&&Cl(c.textContent,T,n),d=["children",""+T]):o.hasOwnProperty(_)&&T!=null&&_==="onScroll"&&We("scroll",c)}switch(a){case"input":ps(c),Co(c,f,!0);break;case"textarea":ps(c),Or(c);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(c.onclick=kl)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=No(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(a,{is:c.is}):(n=_.createElement(a),a==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,a),n[Wn]=r,n[ia]=c,Jp(n,r,!1,!1),r.stateNode=n;e:{switch(_=vs(a,c),a){case"dialog":We("cancel",n),We("close",n),d=c;break;case"iframe":case"object":case"embed":We("load",n),d=c;break;case"video":case"audio":for(d=0;d<ta.length;d++)We(ta[d],n);d=c;break;case"source":We("error",n),d=c;break;case"img":case"image":case"link":We("error",n),We("load",n),d=c;break;case"details":We("toggle",n),d=c;break;case"input":Za(n,c),d=ms(n,c),We("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ne({},c,{value:void 0}),We("invalid",n);break;case"textarea":Po(n,c),d=ko(n,c),We("invalid",n);break;default:d=c}_n(a,d),T=d;for(f in T)if(T.hasOwnProperty(f)){var C=T[f];f==="style"?_s(n,C):f==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&tl(n,C)):f==="children"?typeof C=="string"?(a!=="textarea"||C!=="")&&Ci(n,C):typeof C=="number"&&Ci(n,""+C):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(o.hasOwnProperty(f)?C!=null&&f==="onScroll"&&We("scroll",n):C!=null&&Pe(n,f,C,_))}switch(a){case"input":ps(n),Co(n,c,!1);break;case"textarea":ps(n),Or(n);break;case"option":c.value!=null&&n.setAttribute("value",""+xe(c.value));break;case"select":n.multiple=!!c.multiple,f=c.value,f!=null?yn(n,!!c.multiple,f,!1):c.defaultValue!=null&&yn(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=kl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Ot(r),null;case 6:if(n&&r.stateNode!=null)Zp(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=Wi(ua.current),Wi(Gn.current),Ll(r)){if(c=r.stateNode,a=r.memoizedProps,c[Wn]=r,(f=c.nodeValue!==a)&&(n=rn,n!==null))switch(n.tag){case 3:Cl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Cl(c.nodeValue,a,(n.mode&1)!==0)}f&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Wn]=r,r.stateNode=c}return Ot(r),null;case 13:if(Ge(Ze),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Xe&&sn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)np(),Ws(),r.flags|=98560,f=!1;else if(f=Ll(r),c!==null&&c.dehydrated!==null){if(n===null){if(!f)throw Error(t(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(t(317));f[Wn]=r}else Ws(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Ot(r),f=!1}else Tn!==null&&(Ph(Tn),Tn=null),f=!0;if(!f)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Ze.current&1)!==0?pt===0&&(pt=3):Dh())),r.updateQueue!==null&&(r.flags|=4),Ot(r),null);case 4:return Ys(),_h(n,r),n===null&&na(r.stateNode.containerInfo),Ot(r),null;case 10:return Wc(r.type._context),Ot(r),null;case 17:return Ht(r.type)&&Nl(),Ot(r),null;case 19:if(Ge(Ze),f=r.memoizedState,f===null)return Ot(r),null;if(c=(r.flags&128)!==0,_=f.rendering,_===null)if(c)pa(f,!1);else{if(pt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(_=zl(n),_!==null){for(r.flags|=128,pa(f,!1),c=_.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)f=a,n=c,f.flags&=14680066,_=f.alternate,_===null?(f.childLanes=0,f.lanes=n,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=_.childLanes,f.lanes=_.lanes,f.child=_.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=_.memoizedProps,f.memoizedState=_.memoizedState,f.updateQueue=_.updateQueue,f.type=_.type,n=_.dependencies,f.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return He(Ze,Ze.current&1|2),r.child}n=n.sibling}f.tail!==null&&qe()>eo&&(r.flags|=128,c=!0,pa(f,!1),r.lanes=4194304)}else{if(!c)if(n=zl(_),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),pa(f,!0),f.tail===null&&f.tailMode==="hidden"&&!_.alternate&&!Xe)return Ot(r),null}else 2*qe()-f.renderingStartTime>eo&&a!==1073741824&&(r.flags|=128,c=!0,pa(f,!1),r.lanes=4194304);f.isBackwards?(_.sibling=r.child,r.child=_):(a=f.last,a!==null?a.sibling=_:r.child=_,f.last=_)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=qe(),r.sibling=null,a=Ze.current,He(Ze,c?a&1|2:a&1),r):(Ot(r),null);case 22:case 23:return xh(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(on&1073741824)!==0&&(Ot(r),r.subtreeFlags&6&&(r.flags|=8192)):Ot(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function wE(n,r){switch(jc(r),r.tag){case 1:return Ht(r.type)&&Nl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Ys(),Ge($t),Ge(Dt),Zc(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Jc(r),null;case 13:if(Ge(Ze),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ws()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Ge(Ze),null;case 4:return Ys(),null;case 10:return Wc(r.type._context),null;case 22:case 23:return xh(),null;case 24:return null;default:return null}}var Yl=!1,Lt=!1,TE=typeof WeakSet=="function"?WeakSet:Set,re=null;function Xs(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){rt(n,r,c)}else a.current=null}function vh(n,r,a){try{a()}catch(c){rt(n,r,c)}}var em=!1;function IE(n,r){if(xc=dr,n=Df(),Ic(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,f=c.focusNode;c=c.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,T=-1,C=-1,F=0,W=0,G=n,q=null;t:for(;;){for(var ee;G!==a||d!==0&&G.nodeType!==3||(T=_+d),G!==f||c!==0&&G.nodeType!==3||(C=_+c),G.nodeType===3&&(_+=G.nodeValue.length),(ee=G.firstChild)!==null;)q=G,G=ee;for(;;){if(G===n)break t;if(q===a&&++F===d&&(T=_),q===f&&++W===c&&(C=_),(ee=G.nextSibling)!==null)break;G=q,q=G.parentNode}G=ee}a=T===-1||C===-1?null:{start:T,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(Dc={focusedElem:n,selectionRange:a},dr=!1,re=r;re!==null;)if(r=re,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,re=n;else for(;re!==null;){r=re;try{var ie=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ie!==null){var se=ie.memoizedProps,ot=ie.memoizedState,O=r.stateNode,N=O.getSnapshotBeforeUpdate(r.elementType===r.type?se:In(r.type,se),ot);O.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var b=r.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Q){rt(r,r.return,Q)}if(n=r.sibling,n!==null){n.return=r.return,re=n;break}re=r.return}return ie=em,em=!1,ie}function ma(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var f=d.destroy;d.destroy=void 0,f!==void 0&&vh(r,a,f)}d=d.next}while(d!==c)}}function Jl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function Eh(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function tm(n){var r=n.alternate;r!==null&&(n.alternate=null,tm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Wn],delete r[ia],delete r[Mc],delete r[sE],delete r[oE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function nm(n){return n.tag===5||n.tag===3||n.tag===4}function rm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||nm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function wh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=kl));else if(c!==4&&(n=n.child,n!==null))for(wh(n,r,a),n=n.sibling;n!==null;)wh(n,r,a),n=n.sibling}function Th(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Th(n,r,a),n=n.sibling;n!==null;)Th(n,r,a),n=n.sibling}var At=null,Sn=!1;function ni(n,r,a){for(a=a.child;a!==null;)im(n,r,a),a=a.sibling}function im(n,r,a){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(Di,a)}catch{}switch(a.tag){case 5:Lt||Xs(a,r);case 6:var c=At,d=Sn;At=null,ni(n,r,a),At=c,Sn=d,At!==null&&(Sn?(n=At,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):At.removeChild(a.stateNode));break;case 18:At!==null&&(Sn?(n=At,a=a.stateNode,n.nodeType===8?Lc(n.parentNode,a):n.nodeType===1&&Lc(n,a),Wr(n)):Lc(At,a.stateNode));break;case 4:c=At,d=Sn,At=a.stateNode.containerInfo,Sn=!0,ni(n,r,a),At=c,Sn=d;break;case 0:case 11:case 14:case 15:if(!Lt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var f=d,_=f.destroy;f=f.tag,_!==void 0&&((f&2)!==0||(f&4)!==0)&&vh(a,r,_),d=d.next}while(d!==c)}ni(n,r,a);break;case 1:if(!Lt&&(Xs(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(T){rt(a,r,T)}ni(n,r,a);break;case 21:ni(n,r,a);break;case 22:a.mode&1?(Lt=(c=Lt)||a.memoizedState!==null,ni(n,r,a),Lt=c):ni(n,r,a);break;default:ni(n,r,a)}}function sm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new TE),r.forEach(function(c){var d=DE.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function An(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var f=n,_=r,T=_;e:for(;T!==null;){switch(T.tag){case 5:At=T.stateNode,Sn=!1;break e;case 3:At=T.stateNode.containerInfo,Sn=!0;break e;case 4:At=T.stateNode.containerInfo,Sn=!0;break e}T=T.return}if(At===null)throw Error(t(160));im(f,_,d),At=null,Sn=!1;var C=d.alternate;C!==null&&(C.return=null),d.return=null}catch(F){rt(d,r,F)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)om(r,n),r=r.sibling}function om(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(An(r,n),Qn(n),c&4){try{ma(3,n,n.return),Jl(3,n)}catch(se){rt(n,n.return,se)}try{ma(5,n,n.return)}catch(se){rt(n,n.return,se)}}break;case 1:An(r,n),Qn(n),c&512&&a!==null&&Xs(a,a.return);break;case 5:if(An(r,n),Qn(n),c&512&&a!==null&&Xs(a,a.return),n.flags&32){var d=n.stateNode;try{Ci(d,"")}catch(se){rt(n,n.return,se)}}if(c&4&&(d=n.stateNode,d!=null)){var f=n.memoizedProps,_=a!==null?a.memoizedProps:f,T=n.type,C=n.updateQueue;if(n.updateQueue=null,C!==null)try{T==="input"&&f.type==="radio"&&f.name!=null&&gs(d,f),vs(T,_);var F=vs(T,f);for(_=0;_<C.length;_+=2){var W=C[_],G=C[_+1];W==="style"?_s(d,G):W==="dangerouslySetInnerHTML"?tl(d,G):W==="children"?Ci(d,G):Pe(d,W,G,F)}switch(T){case"input":Ri(d,f);break;case"textarea":el(d,f);break;case"select":var q=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!f.multiple;var ee=f.value;ee!=null?yn(d,!!f.multiple,ee,!1):q!==!!f.multiple&&(f.defaultValue!=null?yn(d,!!f.multiple,f.defaultValue,!0):yn(d,!!f.multiple,f.multiple?[]:"",!1))}d[ia]=f}catch(se){rt(n,n.return,se)}}break;case 6:if(An(r,n),Qn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,f=n.memoizedProps;try{d.nodeValue=f}catch(se){rt(n,n.return,se)}}break;case 3:if(An(r,n),Qn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Wr(r.containerInfo)}catch(se){rt(n,n.return,se)}break;case 4:An(r,n),Qn(n);break;case 13:An(r,n),Qn(n),d=n.child,d.flags&8192&&(f=d.memoizedState!==null,d.stateNode.isHidden=f,!f||d.alternate!==null&&d.alternate.memoizedState!==null||(Ah=qe())),c&4&&sm(n);break;case 22:if(W=a!==null&&a.memoizedState!==null,n.mode&1?(Lt=(F=Lt)||W,An(r,n),Lt=F):An(r,n),Qn(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!W&&(n.mode&1)!==0)for(re=n,W=n.child;W!==null;){for(G=re=W;re!==null;){switch(q=re,ee=q.child,q.tag){case 0:case 11:case 14:case 15:ma(4,q,q.return);break;case 1:Xs(q,q.return);var ie=q.stateNode;if(typeof ie.componentWillUnmount=="function"){c=q,a=q.return;try{r=c,ie.props=r.memoizedProps,ie.state=r.memoizedState,ie.componentWillUnmount()}catch(se){rt(c,a,se)}}break;case 5:Xs(q,q.return);break;case 22:if(q.memoizedState!==null){um(G);continue}}ee!==null?(ee.return=q,re=ee):um(G)}W=W.sibling}e:for(W=null,G=n;;){if(G.tag===5){if(W===null){W=G;try{d=G.stateNode,F?(f=d.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(T=G.stateNode,C=G.memoizedProps.style,_=C!=null&&C.hasOwnProperty("display")?C.display:null,T.style.display=br("display",_))}catch(se){rt(n,n.return,se)}}}else if(G.tag===6){if(W===null)try{G.stateNode.nodeValue=F?"":G.memoizedProps}catch(se){rt(n,n.return,se)}}else if((G.tag!==22&&G.tag!==23||G.memoizedState===null||G===n)&&G.child!==null){G.child.return=G,G=G.child;continue}if(G===n)break e;for(;G.sibling===null;){if(G.return===null||G.return===n)break e;W===G&&(W=null),G=G.return}W===G&&(W=null),G.sibling.return=G.return,G=G.sibling}}break;case 19:An(r,n),Qn(n),c&4&&sm(n);break;case 21:break;default:An(r,n),Qn(n)}}function Qn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(nm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Ci(d,""),c.flags&=-33);var f=rm(n);Th(n,f,d);break;case 3:case 4:var _=c.stateNode.containerInfo,T=rm(n);wh(n,T,_);break;default:throw Error(t(161))}}catch(C){rt(n,n.return,C)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function SE(n,r,a){re=n,am(n)}function am(n,r,a){for(var c=(n.mode&1)!==0;re!==null;){var d=re,f=d.child;if(d.tag===22&&c){var _=d.memoizedState!==null||Yl;if(!_){var T=d.alternate,C=T!==null&&T.memoizedState!==null||Lt;T=Yl;var F=Lt;if(Yl=_,(Lt=C)&&!F)for(re=d;re!==null;)_=re,C=_.child,_.tag===22&&_.memoizedState!==null?cm(d):C!==null?(C.return=_,re=C):cm(d);for(;f!==null;)re=f,am(f),f=f.sibling;re=d,Yl=T,Lt=F}lm(n)}else(d.subtreeFlags&8772)!==0&&f!==null?(f.return=d,re=f):lm(n)}}function lm(n){for(;re!==null;){var r=re;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Lt||Jl(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Lt)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:In(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var f=r.updateQueue;f!==null&&up(r,f,c);break;case 3:var _=r.updateQueue;if(_!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}up(r,_,a)}break;case 5:var T=r.stateNode;if(a===null&&r.flags&4){a=T;var C=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&a.focus();break;case"img":C.src&&(a.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var F=r.alternate;if(F!==null){var W=F.memoizedState;if(W!==null){var G=W.dehydrated;G!==null&&Wr(G)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Lt||r.flags&512&&Eh(r)}catch(q){rt(r,r.return,q)}}if(r===n){re=null;break}if(a=r.sibling,a!==null){a.return=r.return,re=a;break}re=r.return}}function um(n){for(;re!==null;){var r=re;if(r===n){re=null;break}var a=r.sibling;if(a!==null){a.return=r.return,re=a;break}re=r.return}}function cm(n){for(;re!==null;){var r=re;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{Jl(4,r)}catch(C){rt(r,a,C)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(C){rt(r,d,C)}}var f=r.return;try{Eh(r)}catch(C){rt(r,f,C)}break;case 5:var _=r.return;try{Eh(r)}catch(C){rt(r,_,C)}}}catch(C){rt(r,r.return,C)}if(r===n){re=null;break}var T=r.sibling;if(T!==null){T.return=r.return,re=T;break}re=r.return}}var AE=Math.ceil,Xl=Fe.ReactCurrentDispatcher,Ih=Fe.ReactCurrentOwner,fn=Fe.ReactCurrentBatchConfig,De=0,Et=null,ct=null,Rt=0,on=0,Zs=Jr(0),pt=0,ga=null,Ki=0,Zl=0,Sh=0,ya=null,Wt=null,Ah=0,eo=1/0,Tr=null,eu=!1,Rh=null,ri=null,tu=!1,ii=null,nu=0,_a=0,Ch=null,ru=-1,iu=0;function Bt(){return(De&6)!==0?qe():ru!==-1?ru:ru=qe()}function si(n){return(n.mode&1)===0?1:(De&2)!==0&&Rt!==0?Rt&-Rt:lE.transition!==null?(iu===0&&(iu=Uo()),iu):(n=ke,n!==0||(n=window.event,n=n===void 0?16:Ps(n.type)),n)}function Rn(n,r,a,c){if(50<_a)throw _a=0,Ch=null,Error(t(185));Mi(n,a,c),((De&2)===0||n!==Et)&&(n===Et&&((De&2)===0&&(Zl|=a),pt===4&&oi(n,Rt)),Gt(n,c),a===1&&De===0&&(r.mode&1)===0&&(eo=qe()+500,Dl&&Zr()))}function Gt(n,r){var a=n.callbackNode;Li(n,r);var c=ur(n,n===Et?Rt:0);if(c===0)a!==null&&Ts(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&Ts(a),r===1)n.tag===0?aE(dm.bind(null,n)):Jf(dm.bind(null,n)),rE(function(){(De&6)===0&&Zr()}),a=null;else{switch(Mn(c)){case 1:a=Is;break;case 4:a=Mo;break;case 16:a=xi;break;case 536870912:a=Ss;break;default:a=xi}a=Em(a,hm.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function hm(n,r){if(ru=-1,iu=0,(De&6)!==0)throw Error(t(327));var a=n.callbackNode;if(to()&&n.callbackNode!==a)return null;var c=ur(n,n===Et?Rt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=su(n,c);else{r=c;var d=De;De|=2;var f=pm();(Et!==n||Rt!==r)&&(Tr=null,eo=qe()+500,Yi(n,r));do try{kE();break}catch(T){fm(n,T)}while(!0);qc(),Xl.current=f,De=d,ct!==null?r=0:(Et=null,Rt=0,r=pt)}if(r!==0){if(r===2&&(d=Fo(n),d!==0&&(c=d,r=kh(n,d))),r===1)throw a=ga,Yi(n,0),oi(n,c),Gt(n,qe()),a;if(r===6)oi(n,c);else{if(d=n.current.alternate,(c&30)===0&&!RE(d)&&(r=su(n,c),r===2&&(f=Fo(n),f!==0&&(c=f,r=kh(n,f))),r===1))throw a=ga,Yi(n,0),oi(n,c),Gt(n,qe()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:Ji(n,Wt,Tr);break;case 3:if(oi(n,c),(c&130023424)===c&&(r=Ah+500-qe(),10<r)){if(ur(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Bt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Oc(Ji.bind(null,n,Wt,Tr),r);break}Ji(n,Wt,Tr);break;case 4:if(oi(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var _=31-Xt(c);f=1<<_,_=r[_],_>d&&(d=_),c&=~f}if(c=d,c=qe()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*AE(c/1960))-c,10<c){n.timeoutHandle=Oc(Ji.bind(null,n,Wt,Tr),c);break}Ji(n,Wt,Tr);break;case 5:Ji(n,Wt,Tr);break;default:throw Error(t(329))}}}return Gt(n,qe()),n.callbackNode===a?hm.bind(null,n):null}function kh(n,r){var a=ya;return n.current.memoizedState.isDehydrated&&(Yi(n,r).flags|=256),n=su(n,r),n!==2&&(r=Wt,Wt=a,r!==null&&Ph(r)),n}function Ph(n){Wt===null?Wt=n:Wt.push.apply(Wt,n)}function RE(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],f=d.getSnapshot;d=d.value;try{if(!wn(f(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function oi(n,r){for(r&=~Sh,r&=~Zl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-Xt(r),c=1<<a;n[a]=-1,r&=~c}}function dm(n){if((De&6)!==0)throw Error(t(327));to();var r=ur(n,0);if((r&1)===0)return Gt(n,qe()),null;var a=su(n,r);if(n.tag!==0&&a===2){var c=Fo(n);c!==0&&(r=c,a=kh(n,c))}if(a===1)throw a=ga,Yi(n,0),oi(n,r),Gt(n,qe()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Ji(n,Wt,Tr),Gt(n,qe()),null}function Nh(n,r){var a=De;De|=1;try{return n(r)}finally{De=a,De===0&&(eo=qe()+500,Dl&&Zr())}}function Qi(n){ii!==null&&ii.tag===0&&(De&6)===0&&to();var r=De;De|=1;var a=fn.transition,c=ke;try{if(fn.transition=null,ke=1,n)return n()}finally{ke=c,fn.transition=a,De=r,(De&6)===0&&Zr()}}function xh(){on=Zs.current,Ge(Zs)}function Yi(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,nE(a)),ct!==null)for(a=ct.return;a!==null;){var c=a;switch(jc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Nl();break;case 3:Ys(),Ge($t),Ge(Dt),Zc();break;case 5:Jc(c);break;case 4:Ys();break;case 13:Ge(Ze);break;case 19:Ge(Ze);break;case 10:Wc(c.type._context);break;case 22:case 23:xh()}a=a.return}if(Et=n,ct=n=ai(n.current,null),Rt=on=r,pt=0,ga=null,Sh=Zl=Ki=0,Wt=ya=null,qi!==null){for(r=0;r<qi.length;r++)if(a=qi[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,f=a.pending;if(f!==null){var _=f.next;f.next=d,c.next=_}a.pending=c}qi=null}return n}function fm(n,r){do{var a=ct;try{if(qc(),Bl.current=Wl,$l){for(var c=et.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}$l=!1}if(Gi=0,vt=ft=et=null,ca=!1,ha=0,Ih.current=null,a===null||a.return===null){pt=1,ga=r,ct=null;break}e:{var f=n,_=a.return,T=a,C=r;if(r=Rt,T.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var F=C,W=T,G=W.tag;if((W.mode&1)===0&&(G===0||G===11||G===15)){var q=W.alternate;q?(W.updateQueue=q.updateQueue,W.memoizedState=q.memoizedState,W.lanes=q.lanes):(W.updateQueue=null,W.memoizedState=null)}var ee=Fp(_);if(ee!==null){ee.flags&=-257,Up(ee,_,T,f,r),ee.mode&1&&bp(f,F,r),r=ee,C=F;var ie=r.updateQueue;if(ie===null){var se=new Set;se.add(C),r.updateQueue=se}else ie.add(C);break e}else{if((r&1)===0){bp(f,F,r),Dh();break e}C=Error(t(426))}}else if(Xe&&T.mode&1){var ot=Fp(_);if(ot!==null){(ot.flags&65536)===0&&(ot.flags|=256),Up(ot,_,T,f,r),$c(Js(C,T));break e}}f=C=Js(C,T),pt!==4&&(pt=2),ya===null?ya=[f]:ya.push(f),f=_;do{switch(f.tag){case 3:f.flags|=65536,r&=-r,f.lanes|=r;var O=Lp(f,C,r);lp(f,O);break e;case 1:T=C;var N=f.type,b=f.stateNode;if((f.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(ri===null||!ri.has(b)))){f.flags|=65536,r&=-r,f.lanes|=r;var Q=Mp(f,T,r);lp(f,Q);break e}}f=f.return}while(f!==null)}gm(a)}catch(ae){r=ae,ct===a&&a!==null&&(ct=a=a.return);continue}break}while(!0)}function pm(){var n=Xl.current;return Xl.current=Wl,n===null?Wl:n}function Dh(){(pt===0||pt===3||pt===2)&&(pt=4),Et===null||(Ki&268435455)===0&&(Zl&268435455)===0||oi(Et,Rt)}function su(n,r){var a=De;De|=2;var c=pm();(Et!==n||Rt!==r)&&(Tr=null,Yi(n,r));do try{CE();break}catch(d){fm(n,d)}while(!0);if(qc(),De=a,Xl.current=c,ct!==null)throw Error(t(261));return Et=null,Rt=0,pt}function CE(){for(;ct!==null;)mm(ct)}function kE(){for(;ct!==null&&!Ni();)mm(ct)}function mm(n){var r=vm(n.alternate,n,on);n.memoizedProps=n.pendingProps,r===null?gm(n):ct=r,Ih.current=null}function gm(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=EE(a,r,on),a!==null){ct=a;return}}else{if(a=wE(a,r),a!==null){a.flags&=32767,ct=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{pt=6,ct=null;return}}if(r=r.sibling,r!==null){ct=r;return}ct=r=n}while(r!==null);pt===0&&(pt=5)}function Ji(n,r,a){var c=ke,d=fn.transition;try{fn.transition=null,ke=1,PE(n,r,a,c)}finally{fn.transition=d,ke=c}return null}function PE(n,r,a,c){do to();while(ii!==null);if((De&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var f=a.lanes|a.childLanes;if(_c(n,f),n===Et&&(ct=Et=null,Rt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||tu||(tu=!0,Em(xi,function(){return to(),null})),f=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||f){f=fn.transition,fn.transition=null;var _=ke;ke=1;var T=De;De|=4,Ih.current=null,IE(n,a),om(a,n),Qv(Dc),dr=!!xc,Dc=xc=null,n.current=a,SE(a),lr(),De=T,ke=_,fn.transition=f}else n.current=a;if(tu&&(tu=!1,ii=n,nu=d),f=n.pendingLanes,f===0&&(ri=null),dl(a.stateNode),Gt(n,qe()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(eu)throw eu=!1,n=Rh,Rh=null,n;return(nu&1)!==0&&n.tag!==0&&to(),f=n.pendingLanes,(f&1)!==0?n===Ch?_a++:(_a=0,Ch=n):_a=0,Zr(),null}function to(){if(ii!==null){var n=Mn(nu),r=fn.transition,a=ke;try{if(fn.transition=null,ke=16>n?16:n,ii===null)var c=!1;else{if(n=ii,ii=null,nu=0,(De&6)!==0)throw Error(t(331));var d=De;for(De|=4,re=n.current;re!==null;){var f=re,_=f.child;if((re.flags&16)!==0){var T=f.deletions;if(T!==null){for(var C=0;C<T.length;C++){var F=T[C];for(re=F;re!==null;){var W=re;switch(W.tag){case 0:case 11:case 15:ma(8,W,f)}var G=W.child;if(G!==null)G.return=W,re=G;else for(;re!==null;){W=re;var q=W.sibling,ee=W.return;if(tm(W),W===F){re=null;break}if(q!==null){q.return=ee,re=q;break}re=ee}}}var ie=f.alternate;if(ie!==null){var se=ie.child;if(se!==null){ie.child=null;do{var ot=se.sibling;se.sibling=null,se=ot}while(se!==null)}}re=f}}if((f.subtreeFlags&2064)!==0&&_!==null)_.return=f,re=_;else e:for(;re!==null;){if(f=re,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:ma(9,f,f.return)}var O=f.sibling;if(O!==null){O.return=f.return,re=O;break e}re=f.return}}var N=n.current;for(re=N;re!==null;){_=re;var b=_.child;if((_.subtreeFlags&2064)!==0&&b!==null)b.return=_,re=b;else e:for(_=N;re!==null;){if(T=re,(T.flags&2048)!==0)try{switch(T.tag){case 0:case 11:case 15:Jl(9,T)}}catch(ae){rt(T,T.return,ae)}if(T===_){re=null;break e}var Q=T.sibling;if(Q!==null){Q.return=T.return,re=Q;break e}re=T.return}}if(De=d,Zr(),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(Di,n)}catch{}c=!0}return c}finally{ke=a,fn.transition=r}}return!1}function ym(n,r,a){r=Js(a,r),r=Lp(n,r,1),n=ti(n,r,1),r=Bt(),n!==null&&(Mi(n,1,r),Gt(n,r))}function rt(n,r,a){if(n.tag===3)ym(n,n,a);else for(;r!==null;){if(r.tag===3){ym(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ri===null||!ri.has(c))){n=Js(a,n),n=Mp(r,n,1),r=ti(r,n,1),n=Bt(),r!==null&&(Mi(r,1,n),Gt(r,n));break}}r=r.return}}function NE(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=Bt(),n.pingedLanes|=n.suspendedLanes&a,Et===n&&(Rt&a)===a&&(pt===4||pt===3&&(Rt&130023424)===Rt&&500>qe()-Ah?Yi(n,0):Sh|=a),Gt(n,r)}function _m(n,r){r===0&&((n.mode&1)===0?r=1:(r=$r,$r<<=1,($r&130023424)===0&&($r=4194304)));var a=Bt();n=vr(n,r),n!==null&&(Mi(n,r,a),Gt(n,a))}function xE(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),_m(n,a)}function DE(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),_m(n,a)}var vm;vm=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||$t.current)qt=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return qt=!1,vE(n,r,a);qt=(n.flags&131072)!==0}else qt=!1,Xe&&(r.flags&1048576)!==0&&Xf(r,Ol,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Ql(n,r),n=r.pendingProps;var d=$s(r,Dt.current);Qs(r,a),d=nh(null,r,c,n,d,a);var f=rh();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Ht(c)?(f=!0,xl(r)):f=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Qc(r),d.updater=Gl,r.stateNode=d,d._reactInternals=r,uh(r,c,n,a),r=fh(null,r,c,!0,f,a)):(r.tag=0,Xe&&f&&Uc(r),zt(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(Ql(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=OE(c),n=In(c,n),d){case 0:r=dh(null,r,c,n,a);break e;case 1:r=qp(null,r,c,n,a);break e;case 11:r=jp(null,r,c,n,a);break e;case 14:r=zp(null,r,c,In(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:In(c,d),dh(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:In(c,d),qp(n,r,c,d,a);case 3:e:{if(Wp(r),n===null)throw Error(t(387));c=r.pendingProps,f=r.memoizedState,d=f.element,ap(n,r),jl(r,c,null,a);var _=r.memoizedState;if(c=_.element,f.isDehydrated)if(f={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},r.updateQueue.baseState=f,r.memoizedState=f,r.flags&256){d=Js(Error(t(423)),r),r=Gp(n,r,c,a,d);break e}else if(c!==d){d=Js(Error(t(424)),r),r=Gp(n,r,c,a,d);break e}else for(sn=Yr(r.stateNode.containerInfo.firstChild),rn=r,Xe=!0,Tn=null,a=sp(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ws(),c===d){r=wr(n,r,a);break e}zt(n,r,c,a)}r=r.child}return r;case 5:return cp(r),n===null&&Bc(r),c=r.type,d=r.pendingProps,f=n!==null?n.memoizedProps:null,_=d.children,Vc(c,d)?_=null:f!==null&&Vc(c,f)&&(r.flags|=32),Hp(n,r),zt(n,r,_,a),r.child;case 6:return n===null&&Bc(r),null;case 13:return Kp(n,r,a);case 4:return Yc(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Gs(r,null,c,a):zt(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:In(c,d),jp(n,r,c,d,a);case 7:return zt(n,r,r.pendingProps,a),r.child;case 8:return zt(n,r,r.pendingProps.children,a),r.child;case 12:return zt(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,f=r.memoizedProps,_=d.value,He(bl,c._currentValue),c._currentValue=_,f!==null)if(wn(f.value,_)){if(f.children===d.children&&!$t.current){r=wr(n,r,a);break e}}else for(f=r.child,f!==null&&(f.return=r);f!==null;){var T=f.dependencies;if(T!==null){_=f.child;for(var C=T.firstContext;C!==null;){if(C.context===c){if(f.tag===1){C=Er(-1,a&-a),C.tag=2;var F=f.updateQueue;if(F!==null){F=F.shared;var W=F.pending;W===null?C.next=C:(C.next=W.next,W.next=C),F.pending=C}}f.lanes|=a,C=f.alternate,C!==null&&(C.lanes|=a),Gc(f.return,a,r),T.lanes|=a;break}C=C.next}}else if(f.tag===10)_=f.type===r.type?null:f.child;else if(f.tag===18){if(_=f.return,_===null)throw Error(t(341));_.lanes|=a,T=_.alternate,T!==null&&(T.lanes|=a),Gc(_,a,r),_=f.sibling}else _=f.child;if(_!==null)_.return=f;else for(_=f;_!==null;){if(_===r){_=null;break}if(f=_.sibling,f!==null){f.return=_.return,_=f;break}_=_.return}f=_}zt(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,Qs(r,a),d=hn(d),c=c(d),r.flags|=1,zt(n,r,c,a),r.child;case 14:return c=r.type,d=In(c,r.pendingProps),d=In(c.type,d),zp(n,r,c,d,a);case 15:return Bp(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:In(c,d),Ql(n,r),r.tag=1,Ht(c)?(n=!0,xl(r)):n=!1,Qs(r,a),Vp(r,c,d),uh(r,c,d,a),fh(null,r,c,!0,n,a);case 19:return Yp(n,r,a);case 22:return $p(n,r,a)}throw Error(t(156,r.tag))};function Em(n,r){return Lo(n,r)}function VE(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(n,r,a,c){return new VE(n,r,a,c)}function Vh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function OE(n){if(typeof n=="function")return Vh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===V)return 11;if(n===_t)return 14}return 2}function ai(n,r){var a=n.alternate;return a===null?(a=pn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function ou(n,r,a,c,d,f){var _=2;if(c=n,typeof n=="function")Vh(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case k:return Xi(a.children,d,f,r);case I:_=8,d|=8;break;case A:return n=pn(12,a,r,d|2),n.elementType=A,n.lanes=f,n;case S:return n=pn(13,a,r,d),n.elementType=S,n.lanes=f,n;case $e:return n=pn(19,a,r,d),n.elementType=$e,n.lanes=f,n;case Je:return au(a,d,f,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case x:_=10;break e;case P:_=9;break e;case V:_=11;break e;case _t:_=14;break e;case Nt:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=pn(_,a,r,d),r.elementType=n,r.type=c,r.lanes=f,r}function Xi(n,r,a,c){return n=pn(7,n,c,r),n.lanes=a,n}function au(n,r,a,c){return n=pn(22,n,c,r),n.elementType=Je,n.lanes=a,n.stateNode={isHidden:!1},n}function Oh(n,r,a){return n=pn(6,n,null,r),n.lanes=a,n}function Lh(n,r,a){return r=pn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function LE(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jo(0),this.expirationTimes=jo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jo(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Mh(n,r,a,c,d,f,_,T,C){return n=new LE(n,r,a,T,C),r===1?(r=1,f===!0&&(r|=8)):r=0,f=pn(3,null,null,r),n.current=f,f.stateNode=n,f.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qc(f),n}function ME(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ve,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function wm(n){if(!n)return Xr;n=n._reactInternals;e:{if(vn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Ht(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Ht(a))return Qf(n,a,r)}return r}function Tm(n,r,a,c,d,f,_,T,C){return n=Mh(a,c,!0,n,d,f,_,T,C),n.context=wm(null),a=n.current,c=Bt(),d=si(a),f=Er(c,d),f.callback=r??null,ti(a,f,d),n.current.lanes=d,Mi(n,d,c),Gt(n,c),n}function lu(n,r,a,c){var d=r.current,f=Bt(),_=si(d);return a=wm(a),r.context===null?r.context=a:r.pendingContext=a,r=Er(f,_),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=ti(d,r,_),n!==null&&(Rn(n,d,_,f),Ul(n,d,_)),_}function uu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Im(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function bh(n,r){Im(n,r),(n=n.alternate)&&Im(n,r)}function bE(){return null}var Sm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Fh(n){this._internalRoot=n}cu.prototype.render=Fh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));lu(n,r,null,null)},cu.prototype.unmount=Fh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Qi(function(){lu(null,n,null,null)}),r[mr]=null}};function cu(n){this._internalRoot=n}cu.prototype.unstable_scheduleHydration=function(n){if(n){var r=Ho();n={blockedOn:null,target:n,priority:r};for(var a=0;a<Zt.length&&r!==0&&r<Zt[a].priority;a++);Zt.splice(a,0,n),a===0&&Cs(n)}};function Uh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function hu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Am(){}function FE(n,r,a,c,d){if(d){if(typeof c=="function"){var f=c;c=function(){var F=uu(_);f.call(F)}}var _=Tm(r,c,n,0,null,!1,!1,"",Am);return n._reactRootContainer=_,n[mr]=_.current,na(n.nodeType===8?n.parentNode:n),Qi(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var T=c;c=function(){var F=uu(C);T.call(F)}}var C=Mh(n,0,!1,null,null,!1,!1,"",Am);return n._reactRootContainer=C,n[mr]=C.current,na(n.nodeType===8?n.parentNode:n),Qi(function(){lu(r,C,a,c)}),C}function du(n,r,a,c,d){var f=a._reactRootContainer;if(f){var _=f;if(typeof d=="function"){var T=d;d=function(){var C=uu(_);T.call(C)}}lu(r,_,n,d)}else _=FE(a,r,n,d,c);return uu(_)}Bo=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Le(r.pendingLanes);a!==0&&(zo(r,a|1),Gt(r,qe()),(De&6)===0&&(eo=qe()+500,Zr()))}break;case 13:Qi(function(){var c=vr(n,1);if(c!==null){var d=Bt();Rn(c,n,1,d)}}),bh(n,1)}},As=function(n){if(n.tag===13){var r=vr(n,134217728);if(r!==null){var a=Bt();Rn(r,n,134217728,a)}bh(n,134217728)}},$o=function(n){if(n.tag===13){var r=si(n),a=vr(n,r);if(a!==null){var c=Bt();Rn(a,n,r,c)}bh(n,r)}},Ho=function(){return ke},qo=function(n,r){var a=ke;try{return ke=n,r()}finally{ke=a}},sr=function(n,r,a){switch(r){case"input":if(Ri(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=Pl(c);if(!d)throw Error(t(90));Ro(c),Ri(c,d)}}}break;case"textarea":el(n,a);break;case"select":r=a.value,r!=null&&yn(n,!!a.multiple,r,!1)}},rl=Nh,il=Qi;var UE={usingClientEntryPoint:!1,Events:[sa,zs,Pl,Ur,jr,Nh]},va={findFiberByHostInstance:zi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jE={bundleType:va.bundleType,version:va.version,rendererPackageName:va.rendererPackageName,rendererConfig:va.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fe.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=hl(n),n===null?null:n.stateNode},findFiberByHostInstance:va.findFiberByHostInstance||bE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fu.isDisabled&&fu.supportsFiber)try{Di=fu.inject(jE),Jt=fu}catch{}}return Kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=UE,Kt.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Uh(r))throw Error(t(200));return ME(n,r,null,a)},Kt.createRoot=function(n,r){if(!Uh(n))throw Error(t(299));var a=!1,c="",d=Sm;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=Mh(n,1,!1,null,null,a,!1,c,d),n[mr]=r.current,na(n.nodeType===8?n.parentNode:n),new Fh(r)},Kt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=hl(r),n=n===null?null:n.stateNode,n},Kt.flushSync=function(n){return Qi(n)},Kt.hydrate=function(n,r,a){if(!hu(r))throw Error(t(200));return du(null,n,r,!0,a)},Kt.hydrateRoot=function(n,r,a){if(!Uh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,f="",_=Sm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),r=Tm(r,null,n,1,a??null,d,!1,f,_),n[mr]=r.current,na(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new cu(r)},Kt.render=function(n,r,a){if(!hu(r))throw Error(t(200));return du(null,n,r,!1,a)},Kt.unmountComponentAtNode=function(n){if(!hu(n))throw Error(t(40));return n._reactRootContainer?(Qi(function(){du(null,null,n,!1,function(){n._reactRootContainer=null,n[mr]=null})}),!0):!1},Kt.unstable_batchedUpdates=Nh,Kt.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!hu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return du(n,r,a,!1,c)},Kt.version="18.3.1-next-f1338f8080-20240426",Kt}var Vm;function QE(){if(Vm)return Bh.exports;Vm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Bh.exports=KE(),Bh.exports}var Om;function YE(){if(Om)return pu;Om=1;var i=QE();return pu.createRoot=i.createRoot,pu.hydrateRoot=i.hydrateRoot,pu}var JE=YE();const XE=BE(JE),ZE=()=>{};var Lm={};/**
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
 */const sy=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},ew=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],y=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},oy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,y=o+2<i.length,v=y?i[o+2]:0,w=u>>2,R=(u&3)<<4|m>>4;let M=(m&15)<<2|v>>6,z=v&63;y||(z=64,h||(M=64)),s.push(t[w],t[R],t[M],t[z])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(sy(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):ew(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const v=o<i.length?t[i.charAt(o)]:64;++o;const R=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||v==null||R==null)throw new tw;const M=u<<2|m>>4;if(s.push(M),v!==64){const z=m<<4&240|v>>2;if(s.push(z),R!==64){const Y=v<<6&192|R;s.push(Y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class tw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nw=function(i){const e=sy(i);return oy.encodeByteArray(e,!0)},xu=function(i){return nw(i).replace(/\./g,"")},ay=function(i){try{return oy.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function rw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const iw=()=>rw().__FIREBASE_DEFAULTS__,sw=()=>{if(typeof process>"u"||typeof Lm>"u")return;const i=Lm.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},ow=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&ay(i[1]);return e&&JSON.parse(e)},Xu=()=>{try{return ZE()||iw()||sw()||ow()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},ly=i=>{var e,t;return(t=(e=Xu())==null?void 0:e.emulatorHosts)==null?void 0:t[i]},aw=i=>{const e=ly(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},uy=()=>{var i;return(i=Xu())==null?void 0:i.config},cy=i=>{var e;return(e=Xu())==null?void 0:e[`_${i}`]};/**
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
 */class lw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function uw(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...i};return[xu(JSON.stringify(t)),xu(JSON.stringify(h)),""].join(".")}/**
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
 */function Ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ut())}function hw(){var e;const i=(e=Xu())==null?void 0:e.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function dw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function fw(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function pw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mw(){const i=Ut();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function gw(){return!hw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yw(){try{return typeof indexedDB=="object"}catch{return!1}}function _w(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)==null?void 0:u.message)||"")}}catch(t){e(t)}})}/**
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
 */const vw="FirebaseError";class xr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=vw,Object.setPrototypeOf(this,xr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,za.prototype.create)}}class za{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?Ew(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new xr(o,m,s)}}function Ew(i,e){return i.replace(ww,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const ww=/\{\$([^}]+)}/g;function Tw(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function is(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(Mm(u)&&Mm(h)){if(!is(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Mm(i){return i!==null&&typeof i=="object"}/**
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
 */function Ba(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Iw(i,e){const t=new Sw(i,e);return t.subscribe.bind(t)}class Sw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Aw(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=qh),o.error===void 0&&(o.error=qh),o.complete===void 0&&(o.complete=qh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Aw(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function qh(){}/**
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
 */function $a(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function hy(i){return(await fetch(i,{credentials:"include"})).ok}class ss{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Rw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new lw;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kw(e))try{this.getOrInitializeService({instanceIdentifier:Zi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Zi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zi){return this.instances.has(e)}getOptions(e=Zi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Cw(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Zi){return this.component?this.component.multipleInstances?e:Zi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cw(i){return i===Zi?void 0:i}function kw(i){return i.instantiationMode==="EAGER"}/**
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
 */class Pw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Rw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ae;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Ae||(Ae={}));const Nw={debug:Ae.DEBUG,verbose:Ae.VERBOSE,info:Ae.INFO,warn:Ae.WARN,error:Ae.ERROR,silent:Ae.SILENT},xw=Ae.INFO,Dw={[Ae.DEBUG]:"log",[Ae.VERBOSE]:"log",[Ae.INFO]:"info",[Ae.WARN]:"warn",[Ae.ERROR]:"error"},Vw=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=Dw[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kd{constructor(e){this.name=e,this._logLevel=xw,this._logHandler=Vw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Nw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ae.DEBUG,...e),this._logHandler(this,Ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ae.VERBOSE,...e),this._logHandler(this,Ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ae.INFO,...e),this._logHandler(this,Ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ae.WARN,...e),this._logHandler(this,Ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ae.ERROR,...e),this._logHandler(this,Ae.ERROR,...e)}}const Ow=(i,e)=>e.some(t=>i instanceof t);let bm,Fm;function Lw(){return bm||(bm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Mw(){return Fm||(Fm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dy=new WeakMap,rd=new WeakMap,fy=new WeakMap,Wh=new WeakMap,Pd=new WeakMap;function bw(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(pi(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&dy.set(t,i)}).catch(()=>{}),Pd.set(e,i),e}function Fw(i){if(rd.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});rd.set(i,e)}let id={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return rd.get(i);if(e==="objectStoreNames")return i.objectStoreNames||fy.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return pi(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function Uw(i){id=i(id)}function jw(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(Gh(this),e,...t);return fy.set(s,e.sort?e.sort():[e]),pi(s)}:Mw().includes(i)?function(...e){return i.apply(Gh(this),e),pi(dy.get(this))}:function(...e){return pi(i.apply(Gh(this),e))}}function zw(i){return typeof i=="function"?jw(i):(i instanceof IDBTransaction&&Fw(i),Ow(i,Lw())?new Proxy(i,id):i)}function pi(i){if(i instanceof IDBRequest)return bw(i);if(Wh.has(i))return Wh.get(i);const e=zw(i);return e!==i&&(Wh.set(i,e),Pd.set(e,i)),e}const Gh=i=>Pd.get(i);function Bw(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=pi(h);return s&&h.addEventListener("upgradeneeded",y=>{s(pi(h.result),y.oldVersion,y.newVersion,pi(h.transaction),y)}),t&&h.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),m.then(y=>{u&&y.addEventListener("close",()=>u()),o&&y.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),m}const $w=["get","getKey","getAll","getAllKeys","count"],Hw=["put","add","delete","clear"],Kh=new Map;function Um(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Kh.get(e))return Kh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=Hw.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||$w.includes(t)))return;const u=async function(h,...m){const y=this.transaction(h,o?"readwrite":"readonly");let v=y.store;return s&&(v=v.index(m.shift())),(await Promise.all([v[t](...m),o&&y.done]))[0]};return Kh.set(e,u),u}Uw(i=>({...i,get:(e,t,s)=>Um(e,t)||i.get(e,t,s),has:(e,t)=>!!Um(e,t)||i.has(e,t)}));/**
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
 */class qw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ww(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Ww(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const sd="@firebase/app",jm="0.14.11";/**
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
 */const Cr=new kd("@firebase/app"),Gw="@firebase/app-compat",Kw="@firebase/analytics-compat",Qw="@firebase/analytics",Yw="@firebase/app-check-compat",Jw="@firebase/app-check",Xw="@firebase/auth",Zw="@firebase/auth-compat",e0="@firebase/database",t0="@firebase/data-connect",n0="@firebase/database-compat",r0="@firebase/functions",i0="@firebase/functions-compat",s0="@firebase/installations",o0="@firebase/installations-compat",a0="@firebase/messaging",l0="@firebase/messaging-compat",u0="@firebase/performance",c0="@firebase/performance-compat",h0="@firebase/remote-config",d0="@firebase/remote-config-compat",f0="@firebase/storage",p0="@firebase/storage-compat",m0="@firebase/firestore",g0="@firebase/ai",y0="@firebase/firestore-compat",_0="firebase",v0="12.12.0";/**
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
 */const od="[DEFAULT]",E0={[sd]:"fire-core",[Gw]:"fire-core-compat",[Qw]:"fire-analytics",[Kw]:"fire-analytics-compat",[Jw]:"fire-app-check",[Yw]:"fire-app-check-compat",[Xw]:"fire-auth",[Zw]:"fire-auth-compat",[e0]:"fire-rtdb",[t0]:"fire-data-connect",[n0]:"fire-rtdb-compat",[r0]:"fire-fn",[i0]:"fire-fn-compat",[s0]:"fire-iid",[o0]:"fire-iid-compat",[a0]:"fire-fcm",[l0]:"fire-fcm-compat",[u0]:"fire-perf",[c0]:"fire-perf-compat",[h0]:"fire-rc",[d0]:"fire-rc-compat",[f0]:"fire-gcs",[p0]:"fire-gcs-compat",[m0]:"fire-fst",[y0]:"fire-fst-compat",[g0]:"fire-vertex","fire-js":"fire-js",[_0]:"fire-js-all"};/**
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
 */const Du=new Map,w0=new Map,ad=new Map;function zm(i,e){try{i.container.addComponent(e)}catch(t){Cr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function fo(i){const e=i.name;if(ad.has(e))return Cr.debug(`There were multiple attempts to register component ${e}.`),!1;ad.set(e,i);for(const t of Du.values())zm(t,i);for(const t of w0.values())zm(t,i);return!0}function Nd(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function Cn(i){return i==null?!1:i.settings!==void 0}/**
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
 */const T0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mi=new za("app","Firebase",T0);/**
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
 */class I0{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ss("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mi.create("app-deleted",{appName:this._name})}}/**
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
 */const Eo=v0;function py(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s={name:od,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw mi.create("bad-app-name",{appName:String(o)});if(t||(t=uy()),!t)throw mi.create("no-options");const u=Du.get(o);if(u){if(is(t,u.options)&&is(s,u.config))return u;throw mi.create("duplicate-app",{appName:o})}const h=new Pw(o);for(const y of ad.values())h.addComponent(y);const m=new I0(t,s,h);return Du.set(o,m),m}function my(i=od){const e=Du.get(i);if(!e&&i===od&&uy())return py();if(!e)throw mi.create("no-app",{appName:i});return e}function gi(i,e,t){let s=E0[i]??i;t&&(s+=`-${t}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cr.warn(h.join(" "));return}fo(new ss(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const S0="firebase-heartbeat-database",A0=1,Da="firebase-heartbeat-store";let Qh=null;function gy(){return Qh||(Qh=Bw(S0,A0,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Da)}catch(t){console.warn(t)}}}}).catch(i=>{throw mi.create("idb-open",{originalErrorMessage:i.message})})),Qh}async function R0(i){try{const t=(await gy()).transaction(Da),s=await t.objectStore(Da).get(yy(i));return await t.done,s}catch(e){if(e instanceof xr)Cr.warn(e.message);else{const t=mi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cr.warn(t.message)}}}async function Bm(i,e){try{const s=(await gy()).transaction(Da,"readwrite");await s.objectStore(Da).put(e,yy(i)),await s.done}catch(t){if(t instanceof xr)Cr.warn(t.message);else{const s=mi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Cr.warn(s.message)}}}function yy(i){return`${i.name}!${i.options.appId}`}/**
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
 */const C0=1024,k0=30;class P0{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new x0(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=$m();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>k0){const h=D0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Cr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=$m(),{heartbeatsToSend:s,unsentEntries:o}=N0(this._heartbeatsCache.heartbeats),u=xu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Cr.warn(t),""}}}function $m(){return new Date().toISOString().substring(0,10)}function N0(i,e=C0){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),Hm(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Hm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class x0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yw()?_w().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await R0(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Bm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Bm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Hm(i){return xu(JSON.stringify({version:2,heartbeats:i})).length}function D0(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
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
 */function V0(i){fo(new ss("platform-logger",e=>new qw(e),"PRIVATE")),fo(new ss("heartbeat",e=>new P0(e),"PRIVATE")),gi(sd,jm,i),gi(sd,jm,"esm2020"),gi("fire-js","")}V0("");function _y(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const O0=_y,vy=new za("auth","Firebase",_y());/**
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
 */const Vu=new kd("@firebase/auth");function L0(i,...e){Vu.logLevel<=Ae.WARN&&Vu.warn(`Auth (${Eo}): ${i}`,...e)}function wu(i,...e){Vu.logLevel<=Ae.ERROR&&Vu.error(`Auth (${Eo}): ${i}`,...e)}/**
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
 */function nr(i,...e){throw Dd(i,...e)}function Nn(i,...e){return Dd(i,...e)}function xd(i,e,t){const s={...O0(),[e]:t};return new za("auth","Firebase",s).create(e,{appName:i.name})}function ns(i){return xd(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function M0(i,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&nr(i,"argument-error"),xd(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Dd(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return vy.create(i,...e)}function pe(i,e,...t){if(!i)throw Dd(e,...t)}function Sr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw wu(e),new Error(e)}function kr(i,e){i||Sr(e)}/**
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
 */function ld(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.href)||""}function b0(){return qm()==="http:"||qm()==="https:"}function qm(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
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
 */function F0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(b0()||fw()||"connection"in navigator)?navigator.onLine:!0}function U0(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class Ha{constructor(e,t){this.shortDelay=e,this.longDelay=t,kr(t>e,"Short delay should be less than long delay!"),this.isMobile=cw()||pw()}get(){return F0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Vd(i,e){kr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Ey{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Sr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Sr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Sr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const j0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const z0=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],B0=new Ha(3e4,6e4);function Od(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function wo(i,e,t,s,o={}){return wy(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=Ba({key:i.config.apiKey,...h}).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const v={method:e,headers:y,...u};return dw()||(v.referrerPolicy="no-referrer"),i.emulatorConfig&&$a(i.emulatorConfig.host)&&(v.credentials="include"),Ey.fetch()(await Ty(i,i.config.apiHost,t,m),v)})}async function wy(i,e,t){i._canInitEmulator=!1;const s={...j0,...e};try{const o=new H0(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw mu(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[y,v]=m.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw mu(i,"credential-already-in-use",h);if(y==="EMAIL_EXISTS")throw mu(i,"email-already-in-use",h);if(y==="USER_DISABLED")throw mu(i,"user-disabled",h);const w=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw xd(i,w,v);nr(i,w)}}catch(o){if(o instanceof xr)throw o;nr(i,"network-request-failed",{message:String(o)})}}async function $0(i,e,t,s,o={}){const u=await wo(i,e,t,s,o);return"mfaPendingCredential"in u&&nr(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function Ty(i,e,t,s){const o=`${e}${t}?${s}`,u=i,h=u.config.emulator?Vd(i.config,o):`${i.config.apiScheme}://${o}`;return z0.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}class H0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Nn(this.auth,"network-request-failed")),B0.get())})}}function mu(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Nn(i,e,s);return o.customData._tokenResponse=t,o}/**
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
 */async function q0(i,e){return wo(i,"POST","/v1/accounts:delete",e)}async function Ou(i,e){return wo(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ra(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function W0(i,e=!1){const t=Yt(i),s=await t.getIdToken(e),o=Ld(s);pe(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Ra(Yh(o.auth_time)),issuedAtTime:Ra(Yh(o.iat)),expirationTime:Ra(Yh(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Yh(i){return Number(i)*1e3}function Ld(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return wu("JWT malformed, contained fewer than 3 sections"),null;try{const o=ay(t);return o?JSON.parse(o):(wu("Failed to decode base64 JWT payload"),null)}catch(o){return wu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Wm(i){const e=Ld(i);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Va(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof xr&&G0(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function G0({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class K0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ud{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ra(this.lastLoginAt),this.creationTime=Ra(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Lu(i){var R;const e=i.auth,t=await i.getIdToken(),s=await Va(i,Ou(e,{idToken:t}));pe(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];i._notifyReloadListener(o);const u=(R=o.providerUserInfo)!=null&&R.length?Iy(o.providerUserInfo):[],h=Y0(i.providerData,u),m=i.isAnonymous,y=!(i.email&&o.passwordHash)&&!(h!=null&&h.length),v=m?y:!1,w={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new ud(o.createdAt,o.lastLoginAt),isAnonymous:v};Object.assign(i,w)}async function Q0(i){const e=Yt(i);await Lu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Y0(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Iy(i){return i.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function J0(i,e){const t=await wy(i,{},async()=>{const s=Ba({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=await Ty(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:m,body:s};return i.emulatorConfig&&$a(i.emulatorConfig.host)&&(y.credentials="include"),Ey.fetch()(h,y)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function X0(i,e){return wo(i,"POST","/v2/accounts:revokeToken",Od(i,e))}/**
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
 */class oo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){pe(e.length!==0,"internal-error");const t=Wm(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(pe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await J0(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new oo;return s&&(pe(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(pe(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(pe(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oo,this.toJSON())}_performRefresh(){return Sr("not implemented")}}/**
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
 */function ui(i,e){pe(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class kn{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new K0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new ud(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Va(this,this.stsTokenManager.getToken(this.auth,e));return pe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return W0(this,e)}reload(){return Q0(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new kn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Lu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Cn(this.auth.app))return Promise.reject(ns(this.auth));const e=await this.getIdToken();return await Va(this,q0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,u=t.phoneNumber??void 0,h=t.photoURL??void 0,m=t.tenantId??void 0,y=t._redirectEventId??void 0,v=t.createdAt??void 0,w=t.lastLoginAt??void 0,{uid:R,emailVerified:M,isAnonymous:z,providerData:Y,stsTokenManager:J}=t;pe(R&&J,e,"internal-error");const K=oo.fromJSON(this.name,J);pe(typeof R=="string",e,"internal-error"),ui(s,e.name),ui(o,e.name),pe(typeof M=="boolean",e,"internal-error"),pe(typeof z=="boolean",e,"internal-error"),ui(u,e.name),ui(h,e.name),ui(m,e.name),ui(y,e.name),ui(v,e.name),ui(w,e.name);const Ee=new kn({uid:R,auth:e,email:o,emailVerified:M,displayName:s,isAnonymous:z,photoURL:h,phoneNumber:u,tenantId:m,stsTokenManager:K,createdAt:v,lastLoginAt:w});return Y&&Array.isArray(Y)&&(Ee.providerData=Y.map(we=>({...we}))),y&&(Ee._redirectEventId=y),Ee}static async _fromIdTokenResponse(e,t,s=!1){const o=new oo;o.updateFromServerResponse(t);const u=new kn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Lu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];pe(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?Iy(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new oo;m.updateFromIdToken(s);const y=new kn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new ud(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(y,v),y}}/**
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
 */const Gm=new Map;function Ar(i){kr(i instanceof Function,"Expected a class definition");let e=Gm.get(i);return e?(kr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Gm.set(i,e),e)}/**
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
 */class Sy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Sy.type="NONE";const Km=Sy;/**
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
 */function Tu(i,e,t){return`firebase:${i}:${e}:${t}`}class ao{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Tu(this.userKey,o.apiKey,u),this.fullPersistenceKey=Tu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ou(this.auth,{idToken:e}).catch(()=>{});return t?kn._fromGetAccountInfoResponse(this.auth,t,e):null}return kn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new ao(Ar(Km),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let u=o[0]||Ar(Km);const h=Tu(s,e.config.apiKey,e.name);let m=null;for(const v of t)try{const w=await v._get(h);if(w){let R;if(typeof w=="string"){const M=await Ou(e,{idToken:w}).catch(()=>{});if(!M)break;R=await kn._fromGetAccountInfoResponse(e,M,w)}else R=kn._fromJSON(e,w);v!==u&&(m=R),u=v;break}}catch{}const y=o.filter(v=>v._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new ao(u,e,s):(u=y[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async v=>{if(v!==u)try{await v._remove(h)}catch{}})),new ao(u,e,s))}}/**
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
 */function Qm(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ky(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ay(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ny(e))return"Blackberry";if(xy(e))return"Webos";if(Ry(e))return"Safari";if((e.includes("chrome/")||Cy(e))&&!e.includes("edge/"))return"Chrome";if(Py(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Ay(i=Ut()){return/firefox\//i.test(i)}function Ry(i=Ut()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cy(i=Ut()){return/crios\//i.test(i)}function ky(i=Ut()){return/iemobile/i.test(i)}function Py(i=Ut()){return/android/i.test(i)}function Ny(i=Ut()){return/blackberry/i.test(i)}function xy(i=Ut()){return/webos/i.test(i)}function Md(i=Ut()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function Z0(i=Ut()){var e;return Md(i)&&!!((e=window.navigator)!=null&&e.standalone)}function eT(){return mw()&&document.documentMode===10}function Dy(i=Ut()){return Md(i)||Py(i)||xy(i)||Ny(i)||/windows phone/i.test(i)||ky(i)}/**
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
 */function Vy(i,e=[]){let t;switch(i){case"Browser":t=Qm(Ut());break;case"Worker":t=`${Qm(Ut())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Eo}/${s}`}/**
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
 */class tT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const y=e(u);h(y)}catch(y){m(y)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function nT(i,e={}){return wo(i,"GET","/v2/passwordPolicy",Od(i,e))}/**
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
 */const rT=6;class iT{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??rT,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class sT{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ym(this),this.idTokenSubscription=new Ym(this),this.beforeStateQueue=new tT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ar(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await ao.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ou(this,{idToken:e}),s=await kn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(Cn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(u=this.redirectUser)==null?void 0:u._redirectEventId,m=s==null?void 0:s._redirectEventId,y=await this.tryRedirectSignIn(e);(!h||h===m)&&(y!=null&&y.user)&&(s=y.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(h){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Lu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=U0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Cn(this.app))return Promise.reject(ns(this));const t=e?Yt(e):null;return t&&pe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Cn(this.app)?Promise.reject(ns(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Cn(this.app)?Promise.reject(ns(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ar(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await nT(this),t=new iT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new za("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await X0(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ar(e)||this._popupRedirectResolver;pe(t,this,"argument-error"),this.redirectPersistenceManager=await ao.create(this,[Ar(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(pe(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,s,o);return()=>{h=!0,y()}}else{const y=e.addObserver(t);return()=>{h=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Cn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&L0(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Zu(i){return Yt(i)}class Ym{constructor(e){this.auth=e,this.observer=null,this.addObserver=Iw(t=>this.observer=t)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let bd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function oT(i){bd=i}function aT(i){return bd.loadJS(i)}function lT(){return bd.gapiScript}function uT(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
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
 */function cT(i,e){const t=Nd(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(is(u,e??{}))return o;nr(o,"already-initialized")}return t.initialize({options:e})}function hT(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Ar);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function dT(i,e,t){const s=Zu(i);pe(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=Oy(e),{host:h,port:m}=fT(e),y=m===null?"":`:${m}`,v={url:`${u}//${h}${y}/`},w=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){pe(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),pe(is(v,s.config.emulator)&&is(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=v,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,$a(h)?hy(`${u}//${h}${y}`):pT()}function Oy(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function fT(i){const e=Oy(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:Jm(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:Jm(h)}}}function Jm(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function pT(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class Ly{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Sr("not implemented")}_getIdTokenResponse(e){return Sr("not implemented")}_linkToIdToken(e,t){return Sr("not implemented")}_getReauthenticationResolver(e){return Sr("not implemented")}}/**
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
 */async function lo(i,e){return $0(i,"POST","/v1/accounts:signInWithIdp",Od(i,e))}/**
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
 */const mT="http://localhost";class os extends Ly{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new os(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):nr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=t;if(!s||!o)return null;const h=new os(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return lo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,lo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,lo(e,t)}buildRequest(){const e={requestUri:mT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ba(t)}return e}}/**
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
 */class Fd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class qa extends Fd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ci extends qa{constructor(){super("facebook.com")}static credential(e){return os._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ci.credentialFromTaggedObject(e)}static credentialFromError(e){return ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ci.credential(e.oauthAccessToken)}catch{return null}}}ci.FACEBOOK_SIGN_IN_METHOD="facebook.com";ci.PROVIDER_ID="facebook.com";/**
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
 */class Ir extends qa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return os._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Ir.credential(t,s)}catch{return null}}}Ir.GOOGLE_SIGN_IN_METHOD="google.com";Ir.PROVIDER_ID="google.com";/**
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
 */class hi extends qa{constructor(){super("github.com")}static credential(e){return os._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hi.credentialFromTaggedObject(e)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hi.credential(e.oauthAccessToken)}catch{return null}}}hi.GITHUB_SIGN_IN_METHOD="github.com";hi.PROVIDER_ID="github.com";/**
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
 */class di extends qa{constructor(){super("twitter.com")}static credential(e,t){return os._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return di.credential(t,s)}catch{return null}}}di.TWITTER_SIGN_IN_METHOD="twitter.com";di.PROVIDER_ID="twitter.com";/**
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
 */class po{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await kn._fromIdTokenResponse(e,s,o),h=Xm(s);return new po({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Xm(s);return new po({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Xm(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class Mu extends xr{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Mu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Mu(e,t,s,o)}}function My(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Mu._fromErrorAndOperation(i,u,e,s):u})}async function gT(i,e,t=!1){const s=await Va(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return po._forOperation(i,"link",s)}/**
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
 */async function yT(i,e,t=!1){const{auth:s}=i;if(Cn(s.app))return Promise.reject(ns(s));const o="reauthenticate";try{const u=await Va(i,My(s,o,e,i),t);pe(u.idToken,s,"internal-error");const h=Ld(u.idToken);pe(h,s,"internal-error");const{sub:m}=h;return pe(i.uid===m,s,"user-mismatch"),po._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&nr(s,"user-mismatch"),u}}/**
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
 */async function _T(i,e,t=!1){if(Cn(i.app))return Promise.reject(ns(i));const s="signIn",o=await My(i,s,e),u=await po._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}/**
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
 */function vT(i,e){return Yt(i).setPersistence(e)}function ET(i,e,t,s){return Yt(i).onIdTokenChanged(e,t,s)}function wT(i,e,t){return Yt(i).beforeAuthStateChanged(e,t)}function TT(i,e,t,s){return Yt(i).onAuthStateChanged(e,t,s)}function by(i){return Yt(i).signOut()}const bu="__sak";/**
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
 */class Fy{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(bu,"1"),this.storage.removeItem(bu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const IT=1e3,ST=10;class Uy extends Fy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Dy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,y)=>{this.notifyListeners(h,y)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);eT()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,ST):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},IT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Uy.type="LOCAL";const jy=Uy;/**
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
 */class zy extends Fy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}zy.type="SESSION";const By=zy;/**
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
 */function AT(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ec{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new ec(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async v=>v(t.origin,u)),y=await AT(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:y})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ec.receivers=[];/**
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
 */function Ud(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class RT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,y)=>{const v=Ud("",20);o.port1.start();const w=setTimeout(()=>{y(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(R){const M=R;if(M.data.eventId===v)switch(M.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(M.data.response);break;default:clearTimeout(w),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function Jn(){return window}function CT(i){Jn().location.href=i}/**
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
 */function $y(){return typeof Jn().WorkerGlobalScope<"u"&&typeof Jn().importScripts=="function"}async function kT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function PT(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)==null?void 0:i.controller)||null}function NT(){return $y()?self:null}/**
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
 */const Hy="firebaseLocalStorageDb",xT=1,Fu="firebaseLocalStorage",qy="fbase_key";class Wa{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function tc(i,e){return i.transaction([Fu],e?"readwrite":"readonly").objectStore(Fu)}function DT(){const i=indexedDB.deleteDatabase(Hy);return new Wa(i).toPromise()}function cd(){const i=indexedDB.open(Hy,xT);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Fu,{keyPath:qy})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Fu)?e(s):(s.close(),await DT(),e(await cd()))})})}async function Zm(i,e,t){const s=tc(i,!0).put({[qy]:e,value:t});return new Wa(s).toPromise()}async function VT(i,e){const t=tc(i,!1).get(e),s=await new Wa(t).toPromise();return s===void 0?null:s.value}function eg(i,e){const t=tc(i,!0).delete(e);return new Wa(t).toPromise()}const OT=800,LT=3;class Wy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await cd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>LT)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $y()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ec._getInstance(NT()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await kT(),!this.activeServiceWorker)return;this.sender=new RT(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||PT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await cd();return await Zm(e,bu,"1"),await eg(e,bu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Zm(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>VT(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>eg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=tc(o,!1).getAll();return new Wa(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),OT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Wy.type="LOCAL";const MT=Wy;new Ha(3e4,6e4);/**
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
 */function Gy(i,e){return e?Ar(e):(pe(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class jd extends Ly{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return lo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return lo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return lo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function bT(i){return _T(i.auth,new jd(i),i.bypassAuthState)}function FT(i){const{auth:e,user:t}=i;return pe(t,e,"internal-error"),yT(t,new jd(i),i.bypassAuthState)}async function UT(i){const{auth:e,user:t}=i;return pe(t,e,"internal-error"),gT(t,new jd(i),i.bypassAuthState)}/**
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
 */class Ky{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const y={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(y))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bT;case"linkViaPopup":case"linkViaRedirect":return UT;case"reauthViaPopup":case"reauthViaRedirect":return FT;default:nr(this.auth,"internal-error")}}resolve(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const jT=new Ha(2e3,1e4);async function zT(i,e,t){if(Cn(i.app))return Promise.reject(Nn(i,"operation-not-supported-in-this-environment"));const s=Zu(i);M0(i,e,Fd);const o=Gy(s,t);return new es(s,"signInViaPopup",e,o).executeNotNull()}class es extends Ky{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,es.currentPopupAction&&es.currentPopupAction.cancel(),es.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pe(e,this.auth,"internal-error"),e}async onExecution(){kr(this.filter.length===1,"Popup operations only handle one event");const e=Ud();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,es.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jT.get())};e()}}es.currentPopupAction=null;/**
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
 */const BT="pendingRedirect",Iu=new Map;class $T extends Ky{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Iu.get(this.auth._key());if(!e){try{const s=await HT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Iu.set(this.auth._key(),e)}return this.bypassAuthState||Iu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function HT(i,e){const t=GT(e),s=WT(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function qT(i,e){Iu.set(i._key(),e)}function WT(i){return Ar(i._redirectPersistence)}function GT(i){return Tu(BT,i.config.apiKey,i.name)}async function KT(i,e,t=!1){if(Cn(i.app))return Promise.reject(ns(i));const s=Zu(i),o=Gy(s,e),h=await new $T(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const QT=600*1e3;class YT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!JT(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Qy(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(Nn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=QT&&this.cachedEventUids.clear(),this.cachedEventUids.has(tg(e))}saveEventToCache(e){this.cachedEventUids.add(tg(e)),this.lastProcessedEventTime=Date.now()}}function tg(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Qy({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function JT(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qy(i);default:return!1}}/**
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
 */async function XT(i,e={}){return wo(i,"GET","/v1/projects",e)}/**
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
 */const ZT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,eI=/^https?/;async function tI(i){if(i.config.emulator)return;const{authorizedDomains:e}=await XT(i);for(const t of e)try{if(nI(t))return}catch{}nr(i,"unauthorized-domain")}function nI(i){const e=ld(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!eI.test(t))return!1;if(ZT.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const rI=new Ha(3e4,6e4);function ng(){const i=Jn().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function iI(i){return new Promise((e,t)=>{var o,u,h;function s(){ng(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ng(),t(Nn(i,"network-request-failed"))},timeout:rI.get()})}if((u=(o=Jn().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((h=Jn().gapi)!=null&&h.load)s();else{const m=uT("iframefcb");return Jn()[m]=()=>{gapi.load?s():t(Nn(i,"network-request-failed"))},aT(`${lT()}?onload=${m}`).catch(y=>t(y))}}).catch(e=>{throw Su=null,e})}let Su=null;function sI(i){return Su=Su||iI(i),Su}/**
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
 */const oI=new Ha(5e3,15e3),aI="__/auth/iframe",lI="emulator/auth/iframe",uI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hI(i){const e=i.config;pe(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Vd(e,lI):`https://${i.config.authDomain}/${aI}`,s={apiKey:e.apiKey,appName:i.name,v:Eo},o=cI.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Ba(s).slice(1)}`}async function dI(i){const e=await sI(i),t=Jn().gapi;return pe(t,i,"internal-error"),e.open({where:document.body,url:hI(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uI,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Nn(i,"network-request-failed"),m=Jn().setTimeout(()=>{u(h)},oI.get());function y(){Jn().clearTimeout(m),o(s)}s.ping(y).then(y,()=>{u(h)})}))}/**
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
 */const fI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pI=500,mI=600,gI="_blank",yI="http://localhost";class rg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _I(i,e,t,s=pI,o=mI){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const y={...fI,width:s.toString(),height:o.toString(),top:u,left:h},v=Ut().toLowerCase();t&&(m=Cy(v)?gI:t),Ay(v)&&(e=e||yI,y.scrollbars="yes");const w=Object.entries(y).reduce((M,[z,Y])=>`${M}${z}=${Y},`,"");if(Z0(v)&&m!=="_self")return vI(e||"",m),new rg(null);const R=window.open(e||"",m,w);pe(R,i,"popup-blocked");try{R.focus()}catch{}return new rg(R)}function vI(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const EI="__/auth/handler",wI="emulator/auth/handler",TI=encodeURIComponent("fac");async function ig(i,e,t,s,o,u){pe(i.config.authDomain,i,"auth-domain-config-required"),pe(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:Eo,eventId:o};if(e instanceof Fd){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",Tw(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,R]of Object.entries({}))h[w]=R}if(e instanceof qa){const w=e.getScopes().filter(R=>R!=="");w.length>0&&(h.scopes=w.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const y=await i._getAppCheckToken(),v=y?`#${TI}=${encodeURIComponent(y)}`:"";return`${II(i)}?${Ba(m).slice(1)}${v}`}function II({config:i}){return i.emulator?Vd(i,wI):`https://${i.authDomain}/${EI}`}/**
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
 */const Jh="webStorageSupport";class SI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=By,this._completeRedirectFn=KT,this._overrideRedirectResult=qT}async _openPopup(e,t,s,o){var h;kr((h=this.eventManagers[e._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const u=await ig(e,t,s,ld(),o);return _I(e,u,Ud())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await ig(e,t,s,ld(),o);return CT(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(kr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await dI(e),s=new YT(e);return t.register("authEvent",o=>(pe(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Jh,{type:Jh},o=>{var h;const u=(h=o==null?void 0:o[0])==null?void 0:h[Jh];u!==void 0&&t(!!u),nr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=tI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Dy()||Ry()||Md()}}const AI=SI;var sg="@firebase/auth",og="1.13.0";/**
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
 */class RI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function CI(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function kI(i){fo(new ss("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;pe(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vy(i)},v=new sT(s,o,u,y);return hT(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),fo(new ss("auth-internal",e=>{const t=Zu(e.getProvider("auth").getImmediate());return(s=>new RI(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),gi(sg,og,CI(i)),gi(sg,og,"esm2020")}/**
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
 */const PI=300,NI=cy("authIdTokenMaxAge")||PI;let ag=null;const xI=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>NI)return;const o=t==null?void 0:t.token;ag!==o&&(ag=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function DI(i=my()){const e=Nd(i,"auth");if(e.isInitialized())return e.getImmediate();const t=cT(i,{popupRedirectResolver:AI,persistence:[MT,jy,By]}),s=cy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=xI(u.toString());wT(t,h,()=>h(t.currentUser)),ET(t,m=>h(m))}}const o=ly("auth");return o&&dT(t,`http://${o}`),t}function VI(){var i;return((i=document.getElementsByTagName("head"))==null?void 0:i[0])??document}oT({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=Nn("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",VI().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});kI("Browser");var lg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yi,Yy;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,I){function A(){}A.prototype=I.prototype,k.F=I.prototype,k.prototype=new A,k.prototype.constructor=k,k.D=function(x,P,V){for(var S=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)S[$e-2]=arguments[$e];return I.prototype[P].apply(x,S)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(k,I,A){A||(A=0);const x=Array(16);if(typeof I=="string")for(var P=0;P<16;++P)x[P]=I.charCodeAt(A++)|I.charCodeAt(A++)<<8|I.charCodeAt(A++)<<16|I.charCodeAt(A++)<<24;else for(P=0;P<16;++P)x[P]=I[A++]|I[A++]<<8|I[A++]<<16|I[A++]<<24;I=k.g[0],A=k.g[1],P=k.g[2];let V=k.g[3],S;S=I+(V^A&(P^V))+x[0]+3614090360&4294967295,I=A+(S<<7&4294967295|S>>>25),S=V+(P^I&(A^P))+x[1]+3905402710&4294967295,V=I+(S<<12&4294967295|S>>>20),S=P+(A^V&(I^A))+x[2]+606105819&4294967295,P=V+(S<<17&4294967295|S>>>15),S=A+(I^P&(V^I))+x[3]+3250441966&4294967295,A=P+(S<<22&4294967295|S>>>10),S=I+(V^A&(P^V))+x[4]+4118548399&4294967295,I=A+(S<<7&4294967295|S>>>25),S=V+(P^I&(A^P))+x[5]+1200080426&4294967295,V=I+(S<<12&4294967295|S>>>20),S=P+(A^V&(I^A))+x[6]+2821735955&4294967295,P=V+(S<<17&4294967295|S>>>15),S=A+(I^P&(V^I))+x[7]+4249261313&4294967295,A=P+(S<<22&4294967295|S>>>10),S=I+(V^A&(P^V))+x[8]+1770035416&4294967295,I=A+(S<<7&4294967295|S>>>25),S=V+(P^I&(A^P))+x[9]+2336552879&4294967295,V=I+(S<<12&4294967295|S>>>20),S=P+(A^V&(I^A))+x[10]+4294925233&4294967295,P=V+(S<<17&4294967295|S>>>15),S=A+(I^P&(V^I))+x[11]+2304563134&4294967295,A=P+(S<<22&4294967295|S>>>10),S=I+(V^A&(P^V))+x[12]+1804603682&4294967295,I=A+(S<<7&4294967295|S>>>25),S=V+(P^I&(A^P))+x[13]+4254626195&4294967295,V=I+(S<<12&4294967295|S>>>20),S=P+(A^V&(I^A))+x[14]+2792965006&4294967295,P=V+(S<<17&4294967295|S>>>15),S=A+(I^P&(V^I))+x[15]+1236535329&4294967295,A=P+(S<<22&4294967295|S>>>10),S=I+(P^V&(A^P))+x[1]+4129170786&4294967295,I=A+(S<<5&4294967295|S>>>27),S=V+(A^P&(I^A))+x[6]+3225465664&4294967295,V=I+(S<<9&4294967295|S>>>23),S=P+(I^A&(V^I))+x[11]+643717713&4294967295,P=V+(S<<14&4294967295|S>>>18),S=A+(V^I&(P^V))+x[0]+3921069994&4294967295,A=P+(S<<20&4294967295|S>>>12),S=I+(P^V&(A^P))+x[5]+3593408605&4294967295,I=A+(S<<5&4294967295|S>>>27),S=V+(A^P&(I^A))+x[10]+38016083&4294967295,V=I+(S<<9&4294967295|S>>>23),S=P+(I^A&(V^I))+x[15]+3634488961&4294967295,P=V+(S<<14&4294967295|S>>>18),S=A+(V^I&(P^V))+x[4]+3889429448&4294967295,A=P+(S<<20&4294967295|S>>>12),S=I+(P^V&(A^P))+x[9]+568446438&4294967295,I=A+(S<<5&4294967295|S>>>27),S=V+(A^P&(I^A))+x[14]+3275163606&4294967295,V=I+(S<<9&4294967295|S>>>23),S=P+(I^A&(V^I))+x[3]+4107603335&4294967295,P=V+(S<<14&4294967295|S>>>18),S=A+(V^I&(P^V))+x[8]+1163531501&4294967295,A=P+(S<<20&4294967295|S>>>12),S=I+(P^V&(A^P))+x[13]+2850285829&4294967295,I=A+(S<<5&4294967295|S>>>27),S=V+(A^P&(I^A))+x[2]+4243563512&4294967295,V=I+(S<<9&4294967295|S>>>23),S=P+(I^A&(V^I))+x[7]+1735328473&4294967295,P=V+(S<<14&4294967295|S>>>18),S=A+(V^I&(P^V))+x[12]+2368359562&4294967295,A=P+(S<<20&4294967295|S>>>12),S=I+(A^P^V)+x[5]+4294588738&4294967295,I=A+(S<<4&4294967295|S>>>28),S=V+(I^A^P)+x[8]+2272392833&4294967295,V=I+(S<<11&4294967295|S>>>21),S=P+(V^I^A)+x[11]+1839030562&4294967295,P=V+(S<<16&4294967295|S>>>16),S=A+(P^V^I)+x[14]+4259657740&4294967295,A=P+(S<<23&4294967295|S>>>9),S=I+(A^P^V)+x[1]+2763975236&4294967295,I=A+(S<<4&4294967295|S>>>28),S=V+(I^A^P)+x[4]+1272893353&4294967295,V=I+(S<<11&4294967295|S>>>21),S=P+(V^I^A)+x[7]+4139469664&4294967295,P=V+(S<<16&4294967295|S>>>16),S=A+(P^V^I)+x[10]+3200236656&4294967295,A=P+(S<<23&4294967295|S>>>9),S=I+(A^P^V)+x[13]+681279174&4294967295,I=A+(S<<4&4294967295|S>>>28),S=V+(I^A^P)+x[0]+3936430074&4294967295,V=I+(S<<11&4294967295|S>>>21),S=P+(V^I^A)+x[3]+3572445317&4294967295,P=V+(S<<16&4294967295|S>>>16),S=A+(P^V^I)+x[6]+76029189&4294967295,A=P+(S<<23&4294967295|S>>>9),S=I+(A^P^V)+x[9]+3654602809&4294967295,I=A+(S<<4&4294967295|S>>>28),S=V+(I^A^P)+x[12]+3873151461&4294967295,V=I+(S<<11&4294967295|S>>>21),S=P+(V^I^A)+x[15]+530742520&4294967295,P=V+(S<<16&4294967295|S>>>16),S=A+(P^V^I)+x[2]+3299628645&4294967295,A=P+(S<<23&4294967295|S>>>9),S=I+(P^(A|~V))+x[0]+4096336452&4294967295,I=A+(S<<6&4294967295|S>>>26),S=V+(A^(I|~P))+x[7]+1126891415&4294967295,V=I+(S<<10&4294967295|S>>>22),S=P+(I^(V|~A))+x[14]+2878612391&4294967295,P=V+(S<<15&4294967295|S>>>17),S=A+(V^(P|~I))+x[5]+4237533241&4294967295,A=P+(S<<21&4294967295|S>>>11),S=I+(P^(A|~V))+x[12]+1700485571&4294967295,I=A+(S<<6&4294967295|S>>>26),S=V+(A^(I|~P))+x[3]+2399980690&4294967295,V=I+(S<<10&4294967295|S>>>22),S=P+(I^(V|~A))+x[10]+4293915773&4294967295,P=V+(S<<15&4294967295|S>>>17),S=A+(V^(P|~I))+x[1]+2240044497&4294967295,A=P+(S<<21&4294967295|S>>>11),S=I+(P^(A|~V))+x[8]+1873313359&4294967295,I=A+(S<<6&4294967295|S>>>26),S=V+(A^(I|~P))+x[15]+4264355552&4294967295,V=I+(S<<10&4294967295|S>>>22),S=P+(I^(V|~A))+x[6]+2734768916&4294967295,P=V+(S<<15&4294967295|S>>>17),S=A+(V^(P|~I))+x[13]+1309151649&4294967295,A=P+(S<<21&4294967295|S>>>11),S=I+(P^(A|~V))+x[4]+4149444226&4294967295,I=A+(S<<6&4294967295|S>>>26),S=V+(A^(I|~P))+x[11]+3174756917&4294967295,V=I+(S<<10&4294967295|S>>>22),S=P+(I^(V|~A))+x[2]+718787259&4294967295,P=V+(S<<15&4294967295|S>>>17),S=A+(V^(P|~I))+x[9]+3951481745&4294967295,k.g[0]=k.g[0]+I&4294967295,k.g[1]=k.g[1]+(P+(S<<21&4294967295|S>>>11))&4294967295,k.g[2]=k.g[2]+P&4294967295,k.g[3]=k.g[3]+V&4294967295}s.prototype.v=function(k,I){I===void 0&&(I=k.length);const A=I-this.blockSize,x=this.C;let P=this.h,V=0;for(;V<I;){if(P==0)for(;V<=A;)o(this,k,V),V+=this.blockSize;if(typeof k=="string"){for(;V<I;)if(x[P++]=k.charCodeAt(V++),P==this.blockSize){o(this,x),P=0;break}}else for(;V<I;)if(x[P++]=k[V++],P==this.blockSize){o(this,x),P=0;break}}this.h=P,this.o+=I},s.prototype.A=function(){var k=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);k[0]=128;for(var I=1;I<k.length-8;++I)k[I]=0;I=this.o*8;for(var A=k.length-8;A<k.length;++A)k[A]=I&255,I/=256;for(this.v(k),k=Array(16),I=0,A=0;A<4;++A)for(let x=0;x<32;x+=8)k[I++]=this.g[A]>>>x&255;return k};function u(k,I){var A=m;return Object.prototype.hasOwnProperty.call(A,k)?A[k]:A[k]=I(k)}function h(k,I){this.h=I;const A=[];let x=!0;for(let P=k.length-1;P>=0;P--){const V=k[P]|0;x&&V==I||(A[P]=V,x=!1)}this.g=A}var m={};function y(k){return-128<=k&&k<128?u(k,function(I){return new h([I|0],I<0?-1:0)}):new h([k|0],k<0?-1:0)}function v(k){if(isNaN(k)||!isFinite(k))return R;if(k<0)return K(v(-k));const I=[];let A=1;for(let x=0;k>=A;x++)I[x]=k/A|0,A*=4294967296;return new h(I,0)}function w(k,I){if(k.length==0)throw Error("number format error: empty string");if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(k.charAt(0)=="-")return K(w(k.substring(1),I));if(k.indexOf("-")>=0)throw Error('number format error: interior "-" character');const A=v(Math.pow(I,8));let x=R;for(let V=0;V<k.length;V+=8){var P=Math.min(8,k.length-V);const S=parseInt(k.substring(V,V+P),I);P<8?(P=v(Math.pow(I,P)),x=x.j(P).add(v(S))):(x=x.j(A),x=x.add(v(S)))}return x}var R=y(0),M=y(1),z=y(16777216);i=h.prototype,i.m=function(){if(J(this))return-K(this).m();let k=0,I=1;for(let A=0;A<this.g.length;A++){const x=this.i(A);k+=(x>=0?x:4294967296+x)*I,I*=4294967296}return k},i.toString=function(k){if(k=k||10,k<2||36<k)throw Error("radix out of range: "+k);if(Y(this))return"0";if(J(this))return"-"+K(this).toString(k);const I=v(Math.pow(k,6));var A=this;let x="";for(;;){const P=Fe(A,I).g;A=Ee(A,P.j(I));let V=((A.g.length>0?A.g[0]:A.h)>>>0).toString(k);if(A=P,Y(A))return V+x;for(;V.length<6;)V="0"+V;x=V+x}},i.i=function(k){return k<0?0:k<this.g.length?this.g[k]:this.h};function Y(k){if(k.h!=0)return!1;for(let I=0;I<k.g.length;I++)if(k.g[I]!=0)return!1;return!0}function J(k){return k.h==-1}i.l=function(k){return k=Ee(this,k),J(k)?-1:Y(k)?0:1};function K(k){const I=k.g.length,A=[];for(let x=0;x<I;x++)A[x]=~k.g[x];return new h(A,~k.h).add(M)}i.abs=function(){return J(this)?K(this):this},i.add=function(k){const I=Math.max(this.g.length,k.g.length),A=[];let x=0;for(let P=0;P<=I;P++){let V=x+(this.i(P)&65535)+(k.i(P)&65535),S=(V>>>16)+(this.i(P)>>>16)+(k.i(P)>>>16);x=S>>>16,V&=65535,S&=65535,A[P]=S<<16|V}return new h(A,A[A.length-1]&-2147483648?-1:0)};function Ee(k,I){return k.add(K(I))}i.j=function(k){if(Y(this)||Y(k))return R;if(J(this))return J(k)?K(this).j(K(k)):K(K(this).j(k));if(J(k))return K(this.j(K(k)));if(this.l(z)<0&&k.l(z)<0)return v(this.m()*k.m());const I=this.g.length+k.g.length,A=[];for(var x=0;x<2*I;x++)A[x]=0;for(x=0;x<this.g.length;x++)for(let P=0;P<k.g.length;P++){const V=this.i(x)>>>16,S=this.i(x)&65535,$e=k.i(P)>>>16,_t=k.i(P)&65535;A[2*x+2*P]+=S*_t,we(A,2*x+2*P),A[2*x+2*P+1]+=V*_t,we(A,2*x+2*P+1),A[2*x+2*P+1]+=S*$e,we(A,2*x+2*P+1),A[2*x+2*P+2]+=V*$e,we(A,2*x+2*P+2)}for(k=0;k<I;k++)A[k]=A[2*k+1]<<16|A[2*k];for(k=I;k<2*I;k++)A[k]=0;return new h(A,0)};function we(k,I){for(;(k[I]&65535)!=k[I];)k[I+1]+=k[I]>>>16,k[I]&=65535,I++}function Pe(k,I){this.g=k,this.h=I}function Fe(k,I){if(Y(I))throw Error("division by zero");if(Y(k))return new Pe(R,R);if(J(k))return I=Fe(K(k),I),new Pe(K(I.g),K(I.h));if(J(I))return I=Fe(k,K(I)),new Pe(K(I.g),I.h);if(k.g.length>30){if(J(k)||J(I))throw Error("slowDivide_ only works with positive integers.");for(var A=M,x=I;x.l(k)<=0;)A=je(A),x=je(x);var P=Ve(A,1),V=Ve(x,1);for(x=Ve(x,2),A=Ve(A,2);!Y(x);){var S=V.add(x);S.l(k)<=0&&(P=P.add(A),V=S),x=Ve(x,1),A=Ve(A,1)}return I=Ee(k,P.j(I)),new Pe(P,I)}for(P=R;k.l(I)>=0;){for(A=Math.max(1,Math.floor(k.m()/I.m())),x=Math.ceil(Math.log(A)/Math.LN2),x=x<=48?1:Math.pow(2,x-48),V=v(A),S=V.j(I);J(S)||S.l(k)>0;)A-=x,V=v(A),S=V.j(I);Y(V)&&(V=M),P=P.add(V),k=Ee(k,S)}return new Pe(P,k)}i.B=function(k){return Fe(this,k).h},i.and=function(k){const I=Math.max(this.g.length,k.g.length),A=[];for(let x=0;x<I;x++)A[x]=this.i(x)&k.i(x);return new h(A,this.h&k.h)},i.or=function(k){const I=Math.max(this.g.length,k.g.length),A=[];for(let x=0;x<I;x++)A[x]=this.i(x)|k.i(x);return new h(A,this.h|k.h)},i.xor=function(k){const I=Math.max(this.g.length,k.g.length),A=[];for(let x=0;x<I;x++)A[x]=this.i(x)^k.i(x);return new h(A,this.h^k.h)};function je(k){const I=k.g.length+1,A=[];for(let x=0;x<I;x++)A[x]=k.i(x)<<1|k.i(x-1)>>>31;return new h(A,k.h)}function Ve(k,I){const A=I>>5;I%=32;const x=k.g.length-A,P=[];for(let V=0;V<x;V++)P[V]=I>0?k.i(V+A)>>>I|k.i(V+A+1)<<32-I:k.i(V+A);return new h(P,k.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,Yy=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=w,yi=h}).apply(typeof lg<"u"?lg:typeof self<"u"?self:typeof window<"u"?window:{});var gu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jy,Ta,Xy,Au,hd,Zy,e_,t_;(function(){var i,e=Object.defineProperty;function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof gu=="object"&&gu];for(var p=0;p<l.length;++p){var g=l[p];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=t(this);function o(l,p){if(p)e:{var g=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var L=l[E];if(!(L in g))break e;g=g[L]}l=l[l.length-1],E=g[l],p=p(E),p!=E&&p!=null&&e(g,l,{configurable:!0,writable:!0,value:p})}}o("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(l){return l||function(p){var g=[],E;for(E in p)Object.prototype.hasOwnProperty.call(p,E)&&g.push([E,p[E]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function m(l){var p=typeof l;return p=="object"&&l!=null||p=="function"}function y(l,p,g){return l.call.apply(l.bind,arguments)}function v(l,p,g){return v=y,v.apply(null,arguments)}function w(l,p){var g=Array.prototype.slice.call(arguments,1);return function(){var E=g.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function R(l,p){function g(){}g.prototype=p.prototype,l.Z=p.prototype,l.prototype=new g,l.prototype.constructor=l,l.Ob=function(E,L,j){for(var X=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)X[ge-2]=arguments[ge];return p.prototype[L].apply(E,X)}}var M=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function z(l){const p=l.length;if(p>0){const g=Array(p);for(let E=0;E<p;E++)g[E]=l[E];return g}return[]}function Y(l,p){for(let E=1;E<arguments.length;E++){const L=arguments[E];var g=typeof L;if(g=g!="object"?g:L?Array.isArray(L)?"array":g:"null",g=="array"||g=="object"&&typeof L.length=="number"){g=l.length||0;const j=L.length||0;l.length=g+j;for(let X=0;X<j;X++)l[g+X]=L[X]}else l.push(L)}}class J{constructor(p,g){this.i=p,this.j=g,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function K(l){h.setTimeout(()=>{throw l},0)}function Ee(){var l=k;let p=null;return l.g&&(p=l.g,l.g=l.g.next,l.g||(l.h=null),p.next=null),p}class we{constructor(){this.h=this.g=null}add(p,g){const E=Pe.get();E.set(p,g),this.h?this.h.next=E:this.g=E,this.h=E}}var Pe=new J(()=>new Fe,l=>l.reset());class Fe{constructor(){this.next=this.g=this.h=null}set(p,g){this.h=p,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let je,Ve=!1,k=new we,I=()=>{const l=Promise.resolve(void 0);je=()=>{l.then(A)}};function A(){for(var l;l=Ee();){try{l.h.call(l.g)}catch(g){K(g)}var p=Pe;p.j(l),p.h<100&&(p.h++,l.next=p.g,p.g=l)}Ve=!1}function x(){this.u=this.u,this.C=this.C}x.prototype.u=!1,x.prototype.dispose=function(){this.u||(this.u=!0,this.N())},x.prototype[Symbol.dispose]=function(){this.dispose()},x.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function P(l,p){this.type=l,this.g=this.target=p,this.defaultPrevented=!1}P.prototype.h=function(){this.defaultPrevented=!0};var V=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var l=!1,p=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};h.addEventListener("test",g,p),h.removeEventListener("test",g,p)}catch{}return l})();function S(l){return/^[\s\xa0]*$/.test(l)}function $e(l,p){P.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,p)}R($e,P),$e.prototype.init=function(l,p){const g=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=p,p=l.relatedTarget,p||(g=="mouseover"?p=l.fromElement:g=="mouseout"&&(p=l.toElement)),this.relatedTarget=p,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&$e.Z.h.call(this)},$e.prototype.h=function(){$e.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var _t="closure_listenable_"+(Math.random()*1e6|0),Nt=0;function Je(l,p,g,E,L){this.listener=l,this.proxy=null,this.src=p,this.type=g,this.capture=!!E,this.ha=L,this.key=++Nt,this.da=this.fa=!1}function Z(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function le(l,p,g){for(const E in l)p.call(g,l[E],E,l)}function ne(l,p){for(const g in l)p.call(void 0,l[g],g,l)}function D(l){const p={};for(const g in l)p[g]=l[g];return p}const H="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _e(l,p){let g,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(g in E)l[g]=E[g];for(let j=0;j<H.length;j++)g=H[j],Object.prototype.hasOwnProperty.call(E,g)&&(l[g]=E[g])}}function ve(l){this.src=l,this.g={},this.h=0}ve.prototype.add=function(l,p,g,E,L){const j=l.toString();l=this.g[j],l||(l=this.g[j]=[],this.h++);const X=Se(l,p,E,L);return X>-1?(p=l[X],g||(p.fa=!1)):(p=new Je(p,this.src,j,!!E,L),p.fa=g,l.push(p)),p};function Ie(l,p){const g=p.type;if(g in l.g){var E=l.g[g],L=Array.prototype.indexOf.call(E,p,void 0),j;(j=L>=0)&&Array.prototype.splice.call(E,L,1),j&&(Z(p),l.g[g].length==0&&(delete l.g[g],l.h--))}}function Se(l,p,g,E){for(let L=0;L<l.length;++L){const j=l[L];if(!j.da&&j.listener==p&&j.capture==!!g&&j.ha==E)return L}return-1}var Me="closure_lm_"+(Math.random()*1e6|0),xe={};function ze(l,p,g,E,L){if(Array.isArray(p)){for(let j=0;j<p.length;j++)ze(l,p[j],g,E,L);return null}return g=Co(g),l&&l[_t]?l.J(p,g,m(E)?!!E.capture:!1,L):jt(l,p,g,!1,E,L)}function jt(l,p,g,E,L,j){if(!p)throw Error("Invalid event type");const X=m(L)?!!L.capture:!!L;let ge=gs(l);if(ge||(l[Me]=ge=new ve(l)),g=ge.add(p,g,E,X,j),g.proxy)return g;if(E=ps(),g.proxy=E,E.src=l,E.listener=g,l.addEventListener)V||(L=X),L===void 0&&(L=!1),l.addEventListener(p.toString(),E,L);else if(l.attachEvent)l.attachEvent(ms(p.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return g}function ps(){function l(g){return p.call(l.src,l.listener,g)}const p=Za;return l}function Ro(l,p,g,E,L){if(Array.isArray(p))for(var j=0;j<p.length;j++)Ro(l,p[j],g,E,L);else E=m(E)?!!E.capture:!!E,g=Co(g),l&&l[_t]?(l=l.i,j=String(p).toString(),j in l.g&&(p=l.g[j],g=Se(p,g,E,L),g>-1&&(Z(p[g]),Array.prototype.splice.call(p,g,1),p.length==0&&(delete l.g[j],l.h--)))):l&&(l=gs(l))&&(p=l.g[p.toString()],l=-1,p&&(l=Se(p,g,E,L)),(g=l>-1?p[l]:null)&&Vr(g))}function Vr(l){if(typeof l!="number"&&l&&!l.da){var p=l.src;if(p&&p[_t])Ie(p.i,l);else{var g=l.type,E=l.proxy;p.removeEventListener?p.removeEventListener(g,E,l.capture):p.detachEvent?p.detachEvent(ms(g),E):p.addListener&&p.removeListener&&p.removeListener(E),(g=gs(p))?(Ie(g,l),g.h==0&&(g.src=null,p[Me]=null)):Z(l)}}}function ms(l){return l in xe?xe[l]:xe[l]="on"+l}function Za(l,p){if(l.da)l=!0;else{p=new $e(p,this);const g=l.listener,E=l.ha||l.src;l.fa&&Vr(l),l=g.call(E,p)}return l}function gs(l){return l=l[Me],l instanceof ve?l:null}var Ri="__closure_events_fn_"+(Math.random()*1e9>>>0);function Co(l){return typeof l=="function"?l:(l[Ri]||(l[Ri]=function(p){return l.handleEvent(p)}),l[Ri])}function lt(){x.call(this),this.i=new ve(this),this.M=this,this.G=null}R(lt,x),lt.prototype[_t]=!0,lt.prototype.removeEventListener=function(l,p,g,E){Ro(this,l,p,g,E)};function it(l,p){var g,E=l.G;if(E)for(g=[];E;E=E.G)g.push(E);if(l=l.M,E=p.type||p,typeof p=="string")p=new P(p,l);else if(p instanceof P)p.target=p.target||l;else{var L=p;p=new P(E,l),_e(p,L)}L=!0;let j,X;if(g)for(X=g.length-1;X>=0;X--)j=p.g=g[X],L=yn(j,E,!0,p)&&L;if(j=p.g=l,L=yn(j,E,!0,p)&&L,L=yn(j,E,!1,p)&&L,g)for(X=0;X<g.length;X++)j=p.g=g[X],L=yn(j,E,!1,p)&&L}lt.prototype.N=function(){if(lt.Z.N.call(this),this.i){var l=this.i;for(const p in l.g){const g=l.g[p];for(let E=0;E<g.length;E++)Z(g[E]);delete l.g[p],l.h--}}this.G=null},lt.prototype.J=function(l,p,g,E){return this.i.add(String(l),p,!1,g,E)},lt.prototype.K=function(l,p,g,E){return this.i.add(String(l),p,!0,g,E)};function yn(l,p,g,E){if(p=l.i.g[String(p)],!p)return!0;p=p.concat();let L=!0;for(let j=0;j<p.length;++j){const X=p[j];if(X&&!X.da&&X.capture==g){const ge=X.listener,st=X.ha||X.src;X.fa&&Ie(l.i,X),L=ge.call(st,E)!==!1&&L}}return L&&!E.defaultPrevented}function ko(l,p){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=v(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:h.setTimeout(l,p||0)}function Po(l){l.g=ko(()=>{l.g=null,l.i&&(l.i=!1,Po(l))},l.l);const p=l.h;l.h=null,l.m.apply(null,p)}class el extends x{constructor(p,g){super(),this.m=p,this.l=g,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Po(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Or(l){x.call(this),this.h=l,this.g={}}R(Or,x);var No=[];function ys(l){le(l.g,function(p,g){this.g.hasOwnProperty(g)&&Vr(p)},l),l.g={}}Or.prototype.N=function(){Or.Z.N.call(this),ys(this)},Or.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Lr=h.JSON.stringify,tl=h.JSON.parse,Ci=class{stringify(l){return h.JSON.stringify(l,void 0)}parse(l){return h.JSON.parse(l,void 0)}};function Mr(){}function nl(){}var br={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function _s(){P.call(this,"d")}R(_s,P);function xo(){P.call(this,"c")}R(xo,P);var _n={},vs=null;function Fr(){return vs=vs||new lt}_n.Ia="serverreachability";function Es(l){P.call(this,_n.Ia,l)}R(Es,P);function sr(l){const p=Fr();it(p,new Es(p))}_n.STAT_EVENT="statevent";function or(l,p){P.call(this,_n.STAT_EVENT,l),this.stat=p}R(or,P);function nt(l){const p=Fr();it(p,new or(p,l))}_n.Ja="timingevent";function Do(l,p){P.call(this,_n.Ja,l),this.size=p}R(Do,P);function Ur(l,p){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){l()},p)}function jr(){this.g=!0}jr.prototype.ua=function(){this.g=!1};function rl(l,p,g,E,L,j){l.info(function(){if(l.g)if(j){var X="",ge=j.split("&");for(let Ue=0;Ue<ge.length;Ue++){var st=ge[Ue].split("=");if(st.length>1){const ut=st[0];st=st[1];const nn=ut.split("_");X=nn.length>=2&&nn[1]=="type"?X+(ut+"="+st+"&"):X+(ut+"=redacted&")}}}else X=null;else X=j;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+p+`
`+g+`
`+X})}function il(l,p,g,E,L,j,X){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+p+`
`+g+`
`+j+" "+X})}function Dn(l,p,g,E){l.info(function(){return"XMLHTTP TEXT ("+p+"): "+ki(l,g)+(E?" "+E:"")})}function sl(l,p){l.info(function(){return"TIMEOUT: "+p})}jr.prototype.info=function(){};function ki(l,p){if(!l.g)return p;if(!p)return null;try{const j=JSON.parse(p);if(j){for(l=0;l<j.length;l++)if(Array.isArray(j[l])){var g=j[l];if(!(g.length<2)){var E=g[1];if(Array.isArray(E)&&!(E.length<1)){var L=E[0];if(L!="noop"&&L!="stop"&&L!="close")for(let X=1;X<E.length;X++)E[X]=""}}}}return Lr(j)}catch{return p}}var zr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Br={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ol;function ar(){}R(ar,Mr),ar.prototype.g=function(){return new XMLHttpRequest},ol=new ar;function Vn(l){return encodeURIComponent(String(l))}function ws(l){var p=1;l=l.split(":");const g=[];for(;p>0&&l.length;)g.push(l.shift()),p--;return l.length&&g.push(l.join(":")),g}function an(l,p,g,E){this.j=l,this.i=p,this.l=g,this.S=E||1,this.V=new Or(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new al}function al(){this.i=null,this.g="",this.h=!1}var ll={},Vo={};function vn(l,p,g){l.M=1,l.A=ur(ln(p)),l.u=g,l.R=!0,Oo(l,null)}function Oo(l,p){l.F=Date.now(),Pi(l),l.B=ln(l.A);var g=l.B,E=l.S;Array.isArray(E)||(E=[String(E)]),Ho(g.i,"t",E),l.C=0,g=l.j.L,l.h=new al,l.g=_l(l.j,g?p:null,!l.u),l.P>0&&(l.O=new el(v(l.Y,l,l.g),l.P)),p=l.V,g=l.g,E=l.ba;var L="readystatechange";Array.isArray(L)||(L&&(No[0]=L.toString()),L=No);for(let j=0;j<L.length;j++){const X=ze(g,L[j],E||p.handleEvent,!1,p.h||p);if(!X)break;p.g[X.key]=X}p=l.J?D(l.J):{},l.u?(l.v||(l.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,p)):(l.v="GET",l.g.ea(l.B,l.v,null,p)),sr(),rl(l.i,l.v,l.B,l.l,l.S,l.u)}an.prototype.ba=function(l){l=l.target;const p=this.O;p&&jn(l)==3?p.j():this.Y(l)},an.prototype.Y=function(l){try{if(l==this.g)e:{const ge=jn(this.g),st=this.g.ya(),Ue=this.g.ca();if(!(ge<3)&&(ge!=3||this.g&&(this.h.h||this.g.la()||gl(this.g)))){this.K||ge!=4||st==7||(st==8||Ue<=0?sr(3):sr(2)),Ts(this);var p=this.g.ca();this.X=p;var g=ul(this);if(this.o=p==200,il(this.i,this.v,this.B,this.l,this.S,ge,p),this.o){if(this.U&&!this.L){t:{if(this.g){var E,L=this.g;if((E=L.g?L.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(E)){var j=E;break t}}j=null}if(l=j)Dn(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,qe(this,l);else{this.o=!1,this.m=3,nt(12),lr(this),Ni(this);break e}}if(this.R){l=!0;let ut;for(;!this.K&&this.C<g.length;)if(ut=hl(this,g),ut==Vo){ge==4&&(this.m=4,nt(14),l=!1),Dn(this.i,this.l,null,"[Incomplete Response]");break}else if(ut==ll){this.m=4,nt(15),Dn(this.i,this.l,g,"[Invalid Chunk]"),l=!1;break}else Dn(this.i,this.l,ut,null),qe(this,ut);if(cl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ge!=4||g.length!=0||this.h.h||(this.m=1,nt(16),l=!1),this.o=this.o&&l,!l)Dn(this.i,this.l,g,"[Invalid Chunked Response]"),lr(this),Ni(this);else if(g.length>0&&!this.W){this.W=!0;var X=this.j;X.g==this&&X.aa&&!X.P&&(X.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),Ui(X),X.P=!0,nt(11))}}else Dn(this.i,this.l,g,null),qe(this,g);ge==4&&lr(this),this.o&&!this.K&&(ge==4?Ds(this.j,this):(this.o=!1,Pi(this)))}else Wo(this.g),p==400&&g.indexOf("Unknown SID")>0?(this.m=3,nt(12)):(this.m=0,nt(13)),lr(this),Ni(this)}}}catch{}finally{}};function ul(l){if(!cl(l))return l.g.la();const p=gl(l.g);if(p==="")return"";let g="";const E=p.length,L=jn(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return lr(l),Ni(l),"";l.h.i=new h.TextDecoder}for(let j=0;j<E;j++)l.h.h=!0,g+=l.h.i.decode(p[j],{stream:!(L&&j==E-1)});return p.length=0,l.h.g+=g,l.C=0,l.h.g}function cl(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function hl(l,p){var g=l.C,E=p.indexOf(`
`,g);return E==-1?Vo:(g=Number(p.substring(g,E)),isNaN(g)?ll:(E+=1,E+g>p.length?Vo:(p=p.slice(E,E+g),l.C=E+g,p)))}an.prototype.cancel=function(){this.K=!0,lr(this)};function Pi(l){l.T=Date.now()+l.H,Lo(l,l.H)}function Lo(l,p){if(l.D!=null)throw Error("WatchDog timer not null");l.D=Ur(v(l.aa,l),p)}function Ts(l){l.D&&(h.clearTimeout(l.D),l.D=null)}an.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(sl(this.i,this.B),this.M!=2&&(sr(),nt(17)),lr(this),this.m=2,Ni(this)):Lo(this,this.T-l)};function Ni(l){l.j.I==0||l.K||Ds(l.j,l)}function lr(l){Ts(l);var p=l.O;p&&typeof p.dispose=="function"&&p.dispose(),l.O=null,ys(l.V),l.g&&(p=l.g,l.g=null,p.abort(),p.dispose())}function qe(l,p){try{var g=l.j;if(g.I!=0&&(g.g==l||bo(g.h,l))){if(!l.L&&bo(g.h,l)&&g.I==3){try{var E=g.Ba.g.parse(p)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!g.v){if(g.g)if(g.g.F+3e3<l.F)xs(g),en(g);else break e;$n(g),nt(18)}}else g.xa=L[1],0<g.xa-g.K&&L[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=Ur(v(g.Va,g),6e3));xi(g.h)<=1&&g.ta&&(g.ta=void 0)}else tn(g,11)}else if((l.L||g.g==l)&&xs(g),!S(p))for(L=g.Ba.g.parse(p),p=0;p<L.length;p++){let Ue=L[p];const ut=Ue[0];if(!(ut<=g.K))if(g.K=ut,Ue=Ue[1],g.I==2)if(Ue[0]=="c"){g.M=Ue[1],g.ba=Ue[2];const nn=Ue[3];nn!=null&&(g.ka=nn,g.j.info("VER="+g.ka));const pr=Ue[4];pr!=null&&(g.za=pr,g.j.info("SVER="+g.za));const Hn=Ue[5];Hn!=null&&typeof Hn=="number"&&Hn>0&&(E=1.5*Hn,g.O=E,g.j.info("backChannelRequestTimeoutMs_="+E)),E=g;const qn=l.g;if(qn){const Ls=qn.g?qn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ls){var j=E.h;j.g||Ls.indexOf("spdy")==-1&&Ls.indexOf("quic")==-1&&Ls.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(Ss(j,j.h),j.h=null))}if(E.G){const Qo=qn.g?qn.g.getResponseHeader("X-HTTP-Session-Id"):null;Qo&&(E.wa=Qo,Le(E.J,E.G,Qo))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-l.F,g.j.info("Handshake RTT: "+g.T+"ms")),E=g;var X=l;if(E.na=Ko(E,E.L?E.ba:null,E.W),X.L){Di(E.h,X);var ge=X,st=E.O;st&&(ge.H=st),ge.D&&(Ts(ge),Pi(ge)),E.g=X}else xt(E);g.i.length>0&&fr(g)}else Ue[0]!="stop"&&Ue[0]!="close"||tn(g,7);else g.I==3&&(Ue[0]=="stop"||Ue[0]=="close"?Ue[0]=="stop"?tn(g,7):Ps(g):Ue[0]!="noop"&&g.l&&g.l.qa(Ue),g.A=0)}}sr(4)}catch{}}var yc=class{constructor(l,p){this.g=l,this.map=p}};function Is(l){this.l=l||10,h.PerformanceNavigationTiming?(l=h.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Mo(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function xi(l){return l.h?1:l.g?l.g.size:0}function bo(l,p){return l.h?l.h==p:l.g?l.g.has(p):!1}function Ss(l,p){l.g?l.g.add(p):l.h=p}function Di(l,p){l.h&&l.h==p?l.h=null:l.g&&l.g.has(p)&&l.g.delete(p)}Is.prototype.cancel=function(){if(this.i=Jt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Jt(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let p=l.i;for(const g of l.g.values())p=p.concat(g.G);return p}return z(l.i)}var dl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Xt(l,p){if(l){l=l.split("&");for(let g=0;g<l.length;g++){const E=l[g].indexOf("=");let L,j=null;E>=0?(L=l[g].substring(0,E),j=l[g].substring(E+1)):L=l[g],p(L,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function On(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;l instanceof On?(this.l=l.l,Vi(this,l.j),this.o=l.o,this.g=l.g,Ln(this,l.u),this.h=l.h,$r(this,qo(l.i)),this.m=l.m):l&&(p=String(l).match(dl))?(this.l=!1,Vi(this,p[1]||"",!0),this.o=Oi(p[2]||""),this.g=Oi(p[3]||"",!0),Ln(this,p[4]),this.h=Oi(p[5]||"",!0),$r(this,p[6]||"",!0),this.m=Oi(p[7]||"")):(this.l=!1,this.i=new ke(null,this.l))}On.prototype.toString=function(){const l=[];var p=this.j;p&&l.push(Li(p,Uo,!0),":");var g=this.g;return(g||p=="file")&&(l.push("//"),(p=this.o)&&l.push(Li(p,Uo,!0),"@"),l.push(Vn(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&l.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(Li(g,g.charAt(0)=="/"?Mi:jo,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",Li(g,zo)),l.join("")},On.prototype.resolve=function(l){const p=ln(this);let g=!!l.j;g?Vi(p,l.j):g=!!l.o,g?p.o=l.o:g=!!l.g,g?p.g=l.g:g=l.u!=null;var E=l.h;if(g)Ln(p,l.u);else if(g=!!l.h){if(E.charAt(0)!="/")if(this.g&&!this.h)E="/"+E;else{var L=p.h.lastIndexOf("/");L!=-1&&(E=p.h.slice(0,L+1)+E)}if(L=E,L==".."||L==".")E="";else if(L.indexOf("./")!=-1||L.indexOf("/.")!=-1){E=L.lastIndexOf("/",0)==0,L=L.split("/");const j=[];for(let X=0;X<L.length;){const ge=L[X++];ge=="."?E&&X==L.length&&j.push(""):ge==".."?((j.length>1||j.length==1&&j[0]!="")&&j.pop(),E&&X==L.length&&j.push("")):(j.push(ge),E=!0)}E=j.join("/")}else E=L}return g?p.h=E:g=l.i.toString()!=="",g?$r(p,qo(l.i)):g=!!l.m,g&&(p.m=l.m),p};function ln(l){return new On(l)}function Vi(l,p,g){l.j=g?Oi(p,!0):p,l.j&&(l.j=l.j.replace(/:$/,""))}function Ln(l,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);l.u=p}else l.u=null}function $r(l,p,g){p instanceof ke?(l.i=p,Rs(l.i,l.l)):(g||(p=Li(p,_c)),l.i=new ke(p,l.l))}function Le(l,p,g){l.i.set(p,g)}function ur(l){return Le(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function Oi(l,p){return l?p?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Li(l,p,g){return typeof l=="string"?(l=encodeURI(l).replace(p,Fo),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Fo(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Uo=/[#\/\?@]/g,jo=/[#\?:]/g,Mi=/[#\?]/g,_c=/[#\?@]/g,zo=/#/g;function ke(l,p){this.h=this.g=null,this.i=l||null,this.j=!!p}function Mn(l){l.g||(l.g=new Map,l.h=0,l.i&&Xt(l.i,function(p,g){l.add(decodeURIComponent(p.replace(/\+/g," ")),g)}))}i=ke.prototype,i.add=function(l,p){Mn(this),this.i=null,l=bn(this,l);let g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(p),this.h+=1,this};function Bo(l,p){Mn(l),p=bn(l,p),l.g.has(p)&&(l.i=null,l.h-=l.g.get(p).length,l.g.delete(p))}function As(l,p){return Mn(l),p=bn(l,p),l.g.has(p)}i.forEach=function(l,p){Mn(this),this.g.forEach(function(g,E){g.forEach(function(L){l.call(p,L,E,this)},this)},this)};function $o(l,p){Mn(l);let g=[];if(typeof p=="string")As(l,p)&&(g=g.concat(l.g.get(bn(l,p))));else for(l=Array.from(l.g.values()),p=0;p<l.length;p++)g=g.concat(l[p]);return g}i.set=function(l,p){return Mn(this),this.i=null,l=bn(this,l),As(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[p]),this.h+=1,this},i.get=function(l,p){return l?(l=$o(this,l),l.length>0?String(l[0]):p):p};function Ho(l,p,g){Bo(l,p),g.length>0&&(l.i=null,l.g.set(bn(l,p),z(g)),l.h+=g.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],p=Array.from(this.g.keys());for(let E=0;E<p.length;E++){var g=p[E];const L=Vn(g);g=$o(this,g);for(let j=0;j<g.length;j++){let X=L;g[j]!==""&&(X+="="+Vn(g[j])),l.push(X)}}return this.i=l.join("&")};function qo(l){const p=new ke;return p.i=l.i,l.g&&(p.g=new Map(l.g),p.h=l.h),p}function bn(l,p){return p=String(p),l.j&&(p=p.toLowerCase()),p}function Rs(l,p){p&&!l.j&&(Mn(l),l.i=null,l.g.forEach(function(g,E){const L=E.toLowerCase();E!=L&&(Bo(this,E),Ho(this,L,g))},l)),l.j=p}function Fn(l,p){const g=new jr;if(h.Image){const E=new Image;E.onload=w(It,g,"TestLoadImage: loaded",!0,p,E),E.onerror=w(It,g,"TestLoadImage: error",!1,p,E),E.onabort=w(It,g,"TestLoadImage: abort",!1,p,E),E.ontimeout=w(It,g,"TestLoadImage: timeout",!1,p,E),h.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else p(!1)}function Un(l,p){const g=new jr,E=new AbortController,L=setTimeout(()=>{E.abort(),It(g,"TestPingServer: timeout",!1,p)},1e4);fetch(l,{signal:E.signal}).then(j=>{clearTimeout(L),j.ok?It(g,"TestPingServer: ok",!0,p):It(g,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(L),It(g,"TestPingServer: error",!1,p)})}function It(l,p,g,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(g)}catch{}}function bi(){this.g=new Ci}function cr(l){this.i=l.Sb||null,this.h=l.ab||!1}R(cr,Mr),cr.prototype.g=function(){return new Zt(this.i,this.h)};function Zt(l,p){lt.call(this),this.H=l,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}R(Zt,lt),i=Zt.prototype,i.open=function(l,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=p,this.readyState=1,En(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(p.body=l),(this.H||h).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Hr(this)),this.readyState=0},i.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,En(this)),this.g&&(this.readyState=3,En(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;fl(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function fl(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}i.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var p=l.value?l.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!l.done}))&&(this.response=this.responseText+=p)}l.done?Hr(this):En(this),this.readyState==3&&fl(this)}},i.Oa=function(l){this.g&&(this.response=this.responseText=l,Hr(this))},i.Na=function(l){this.g&&(this.response=l,Hr(this))},i.ga=function(){this.g&&Hr(this)};function Hr(l){l.readyState=4,l.l=null,l.j=null,l.B=null,En(l)}i.setRequestHeader=function(l,p){this.A.append(l,p)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],p=this.h.entries();for(var g=p.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=p.next();return l.join(`\r
`)};function En(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Zt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function pl(l){let p="";return le(l,function(g,E){p+=E,p+=":",p+=g,p+=`\r
`}),p}function Cs(l,p,g){e:{for(E in g){var E=!1;break e}E=!0}E||(g=pl(g),typeof l=="string"?g!=null&&Vn(g):Le(l,p,g))}function Be(l){lt.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}R(Be,lt);var ml=/^https?$/i,vc=["POST","PUT"];i=Be.prototype,i.Fa=function(l){this.H=l},i.ea=function(l,p,g,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);p=p?p.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ol.g(),this.g.onreadystatechange=M(v(this.Ca,this));try{this.B=!0,this.g.open(p,String(l),!0),this.B=!1}catch(j){qr(this,j);return}if(l=g||"",g=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)g.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const j of E.keys())g.set(j,E.get(j));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(g.keys()).find(j=>j.toLowerCase()=="content-type"),L=h.FormData&&l instanceof h.FormData,!(Array.prototype.indexOf.call(vc,p,void 0)>=0)||E||L||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,X]of g)this.g.setRequestHeader(j,X);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(j){qr(this,j)}};function qr(l,p){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=p,l.o=5,Wr(l),dr(l)}function Wr(l){l.A||(l.A=!0,it(l,"complete"),it(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,it(this,"complete"),it(this,"abort"),dr(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),dr(this,!0)),Be.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?hr(this):this.Xa())},i.Xa=function(){hr(this)};function hr(l){if(l.h&&typeof u<"u"){if(l.v&&jn(l)==4)setTimeout(l.Ca.bind(l),0);else if(it(l,"readystatechange"),jn(l)==4){l.h=!1;try{const j=l.ca();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var g;if(!(g=p)){var E;if(E=j===0){let X=String(l.D).match(dl)[1]||null;!X&&h.self&&h.self.location&&(X=h.self.location.protocol.slice(0,-1)),E=!ml.test(X?X.toLowerCase():"")}g=E}if(g)it(l,"complete"),it(l,"success");else{l.o=6;try{var L=jn(l)>2?l.g.statusText:""}catch{L=""}l.l=L+" ["+l.ca()+"]",Wr(l)}}finally{dr(l)}}}}function dr(l,p){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const g=l.g;l.g=null,p||it(l,"ready");try{g.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function jn(l){return l.g?l.g.readyState:0}i.ca=function(){try{return jn(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(l){if(this.g){var p=this.g.responseText;return l&&p.indexOf(l)==0&&(p=p.substring(l.length)),tl(p)}};function gl(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Wo(l){const p={};l=(l.g&&jn(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(S(l[E]))continue;var g=ws(l[E]);const L=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const j=p[L]||[];p[L]=j,j.push(g)}ne(p,function(E){return E.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function zn(l,p,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||p}function ks(l){this.za=0,this.i=[],this.j=new jr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=zn("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=zn("baseRetryDelayMs",5e3,l),this.Za=zn("retryDelaySeedMs",1e4,l),this.Ta=zn("forwardChannelMaxRetries",2,l),this.va=zn("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new Is(l&&l.concurrentRequestLimit),this.Ba=new bi,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=ks.prototype,i.ka=8,i.I=1,i.connect=function(l,p,g,E){nt(0),this.W=l,this.H=p||{},g&&E!==void 0&&(this.H.OSID=g,this.H.OAID=E),this.F=this.X,this.J=Ko(this,null,this.W),fr(this)};function Ps(l){if(Ns(l),l.I==3){var p=l.V++,g=ln(l.J);if(Le(g,"SID",l.M),Le(g,"RID",p),Le(g,"TYPE","terminate"),Bn(l,g),p=new an(l,l.j,p),p.M=2,p.A=ur(ln(g)),g=!1,h.navigator&&h.navigator.sendBeacon)try{g=h.navigator.sendBeacon(p.A.toString(),"")}catch{}!g&&h.Image&&(new Image().src=p.A,g=!0),g||(p.g=_l(p.j,null),p.g.ea(p.A)),p.F=Date.now(),Pi(p)}ji(l)}function en(l){l.g&&(Ui(l),l.g.cancel(),l.g=null)}function Ns(l){en(l),l.v&&(h.clearTimeout(l.v),l.v=null),xs(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&h.clearTimeout(l.m),l.m=null)}function fr(l){if(!Mo(l.h)&&!l.m){l.m=!0;var p=l.Ea;je||I(),Ve||(je(),Ve=!0),k.add(p,l),l.D=0}}function yl(l,p){return xi(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=p.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=Ur(v(l.Ea,l,p),Vs(l,l.D)),l.D++,!0)}i.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const L=new an(this,this.j,l);let j=this.o;if(this.U&&(j?(j=D(j),_e(j,this.U)):j=this.U),this.u!==null||this.R||(L.J=j,j=null),this.S)e:{for(var p=0,g=0;g<this.i.length;g++){t:{var E=this.i[g];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(p+=E,p>4096){p=g;break e}if(p===4096||g===this.i.length-1){p=g+1;break e}}p=1e3}else p=1e3;p=Go(this,L,p),g=ln(this.J),Le(g,"RID",l),Le(g,"CVER",22),this.G&&Le(g,"X-HTTP-Session-Id",this.G),Bn(this,g),j&&(this.R?p="headers="+Vn(pl(j))+"&"+p:this.u&&Cs(g,this.u,j)),Ss(this.h,L),this.Ra&&Le(g,"TYPE","init"),this.S?(Le(g,"$req",p),Le(g,"SID","null"),L.U=!0,vn(L,g,null)):vn(L,g,p),this.I=2}}else this.I==3&&(l?Fi(this,l):this.i.length==0||Mo(this.h)||Fi(this))};function Fi(l,p){var g;p?g=p.l:g=l.V++;const E=ln(l.J);Le(E,"SID",l.M),Le(E,"RID",g),Le(E,"AID",l.K),Bn(l,E),l.u&&l.o&&Cs(E,l.u,l.o),g=new an(l,l.j,g,l.D+1),l.u===null&&(g.J=l.o),p&&(l.i=p.G.concat(l.i)),p=Go(l,g,1e3),g.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),Ss(l.h,g),vn(g,E,p)}function Bn(l,p){l.H&&le(l.H,function(g,E){Le(p,E,g)}),l.l&&le({},function(g,E){Le(p,E,g)})}function Go(l,p,g){g=Math.min(l.i.length,g);const E=l.l?v(l.l.Ka,l.l,l):null;e:{var L=l.i;let ge=-1;for(;;){const st=["count="+g];ge==-1?g>0?(ge=L[0].g,st.push("ofs="+ge)):ge=0:st.push("ofs="+ge);let Ue=!0;for(let ut=0;ut<g;ut++){var j=L[ut].g;const nn=L[ut].map;if(j-=ge,j<0)ge=Math.max(0,L[ut].g-100),Ue=!1;else try{j="req"+j+"_"||"";try{var X=nn instanceof Map?nn:Object.entries(nn);for(const[pr,Hn]of X){let qn=Hn;m(Hn)&&(qn=Lr(Hn)),st.push(j+pr+"="+encodeURIComponent(qn))}}catch(pr){throw st.push(j+"type="+encodeURIComponent("_badmap")),pr}}catch{E&&E(nn)}}if(Ue){X=st.join("&");break e}}X=void 0}return l=l.i.splice(0,g),p.G=l,X}function xt(l){if(!l.g&&!l.v){l.Y=1;var p=l.Da;je||I(),Ve||(je(),Ve=!0),k.add(p,l),l.A=0}}function $n(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=Ur(v(l.Da,l),Vs(l,l.A)),l.A++,!0)}i.Da=function(){if(this.v=null,Gr(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=Ur(v(this.Wa,this),l)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,nt(10),en(this),Gr(this))};function Ui(l){l.B!=null&&(h.clearTimeout(l.B),l.B=null)}function Gr(l){l.g=new an(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var p=ln(l.na);Le(p,"RID","rpc"),Le(p,"SID",l.M),Le(p,"AID",l.K),Le(p,"CI",l.F?"0":"1"),!l.F&&l.ia&&Le(p,"TO",l.ia),Le(p,"TYPE","xmlhttp"),Bn(l,p),l.u&&l.o&&Cs(p,l.u,l.o),l.O&&(l.g.H=l.O);var g=l.g;l=l.ba,g.M=1,g.A=ur(ln(p)),g.u=null,g.R=!0,Oo(g,l)}i.Va=function(){this.C!=null&&(this.C=null,en(this),$n(this),nt(19))};function xs(l){l.C!=null&&(h.clearTimeout(l.C),l.C=null)}function Ds(l,p){var g=null;if(l.g==p){xs(l),Ui(l),l.g=null;var E=2}else if(bo(l.h,p))g=p.G,Di(l.h,p),E=1;else return;if(l.I!=0){if(p.o)if(E==1){g=p.u?p.u.length:0,p=Date.now()-p.F;var L=l.D;E=Fr(),it(E,new Do(E,g)),fr(l)}else xt(l);else if(L=p.m,L==3||L==0&&p.X>0||!(E==1&&yl(l,p)||E==2&&$n(l)))switch(g&&g.length>0&&(p=l.h,p.i=p.i.concat(g)),L){case 1:tn(l,5);break;case 4:tn(l,10);break;case 3:tn(l,6);break;default:tn(l,2)}}}function Vs(l,p){let g=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(g*=2),g*p}function tn(l,p){if(l.j.info("Error code "+p),p==2){var g=v(l.bb,l),E=l.Ua;const L=!E;E=new On(E||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Vi(E,"https"),ur(E),L?Fn(E.toString(),g):Un(E.toString(),g)}else nt(2);l.I=0,l.l&&l.l.pa(p),ji(l),Ns(l)}i.bb=function(l){l?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function ji(l){if(l.I=0,l.ja=[],l.l){const p=Jt(l.h);(p.length!=0||l.i.length!=0)&&(Y(l.ja,p),Y(l.ja,l.i),l.h.i.length=0,z(l.i),l.i.length=0),l.l.oa()}}function Ko(l,p,g){var E=g instanceof On?ln(g):new On(g);if(E.g!="")p&&(E.g=p+"."+E.g),Ln(E,E.u);else{var L=h.location;E=L.protocol,p=p?p+"."+L.hostname:L.hostname,L=+L.port;const j=new On(null);E&&Vi(j,E),p&&(j.g=p),L&&Ln(j,L),g&&(j.h=g),E=j}return g=l.G,p=l.wa,g&&p&&Le(E,g,p),Le(E,"VER",l.ka),Bn(l,E),E}function _l(l,p,g){if(p&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=l.Aa&&!l.ma?new Be(new cr({ab:g})):new Be(l.ma),p.Fa(l.L),p}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function vl(){}i=vl.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function Os(){}Os.prototype.g=function(l,p){return new St(l,p)};function St(l,p){lt.call(this),this.g=new ks(p),this.l=l,this.h=p&&p.messageUrlParams||null,l=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(l?l["X-WebChannel-Content-Type"]=p.messageContentType:l={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(l?l["X-WebChannel-Client-Profile"]=p.sa:l={"X-WebChannel-Client-Profile":p.sa}),this.g.U=l,(l=p&&p.Qb)&&!S(l)&&(this.g.u=l),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!S(p)&&(this.g.G=p,l=this.h,l!==null&&p in l&&(l=this.h,p in l&&delete l[p])),this.j=new Kr(this)}R(St,lt),St.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){Ps(this.g)},St.prototype.o=function(l){var p=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.v&&(g={},g.__data__=Lr(l),l=g);p.i.push(new yc(p.Ya++,l)),p.I==3&&fr(p)},St.prototype.N=function(){this.g.l=null,delete this.j,Ps(this.g),delete this.g,St.Z.N.call(this)};function El(l){_s.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var p=l.__sm__;if(p){e:{for(const g in p){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,p=p!==null&&l in p?p[l]:void 0),this.data=p}else this.data=l}R(El,_s);function wl(){xo.call(this),this.status=1}R(wl,xo);function Kr(l){this.g=l}R(Kr,vl),Kr.prototype.ra=function(){it(this.g,"a")},Kr.prototype.qa=function(l){it(this.g,new El(l))},Kr.prototype.pa=function(l){it(this.g,new wl)},Kr.prototype.oa=function(){it(this.g,"b")},Os.prototype.createWebChannel=Os.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,t_=function(){return new Os},e_=function(){return Fr()},Zy=_n,hd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},zr.NO_ERROR=0,zr.TIMEOUT=8,zr.HTTP_ERROR=6,Au=zr,Br.COMPLETE="complete",Xy=Br,nl.EventType=br,br.OPEN="a",br.CLOSE="b",br.ERROR="c",br.MESSAGE="d",lt.prototype.listen=lt.prototype.J,Ta=nl,Be.prototype.listenOnce=Be.prototype.K,Be.prototype.getLastError=Be.prototype.Ha,Be.prototype.getLastErrorCode=Be.prototype.ya,Be.prototype.getStatus=Be.prototype.ca,Be.prototype.getResponseJson=Be.prototype.La,Be.prototype.getResponseText=Be.prototype.la,Be.prototype.send=Be.prototype.ea,Be.prototype.setWithCredentials=Be.prototype.Fa,Jy=Be}).apply(typeof gu<"u"?gu:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */let To="12.12.0";function OI(i){To=i}/**
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
 */const as=new kd("@firebase/firestore");function no(){return as.logLevel}function te(i,...e){if(as.logLevel<=Ae.DEBUG){const t=e.map(zd);as.debug(`Firestore (${To}): ${i}`,...t)}}function Pr(i,...e){if(as.logLevel<=Ae.ERROR){const t=e.map(zd);as.error(`Firestore (${To}): ${i}`,...t)}}function ls(i,...e){if(as.logLevel<=Ae.WARN){const t=e.map(zd);as.warn(`Firestore (${To}): ${i}`,...t)}}function zd(i){if(typeof i=="string")return i;try{return(function(t){return JSON.stringify(t)})(i)}catch{return i}}/**
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
 */function de(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,n_(i,s,t)}function n_(i,e,t){let s=`FIRESTORE (${To}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Pr(s),new Error(s)}function be(i,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,i||n_(e,o,s)}function ye(i,e){return i}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oe extends xr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class r_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class LI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(bt.UNAUTHENTICATED)))}shutdown(){}}class MI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class bI{constructor(e){this.t=e,this.currentUser=bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){be(this.o===void 0,42304);let s=this.i;const o=y=>this.i!==s?(s=this.i,t(y)):Promise.resolve();let u=new Rr;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Rr,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const y=u;e.enqueueRetryable((async()=>{await y.promise,await o(this.currentUser)}))},m=y=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((y=>m(y))),setTimeout((()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Rr)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(be(typeof s.accessToken=="string",31837,{l:s}),new r_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string",2055,{h:e}),new bt(e)}}class FI{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=bt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class UI{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new FI(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(bt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ug{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class jI{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Cn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){be(this.o===void 0,3512);const s=u=>{u.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,te("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ug(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(be(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new ug(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function zI(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class Bd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=zI(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Re(i,e){return i<e?-1:i>e?1:0}function dd(i,e){const t=Math.min(i.length,e.length);for(let s=0;s<t;s++){const o=i.charAt(s),u=e.charAt(s);if(o!==u)return Xh(o)===Xh(u)?Re(o,u):Xh(o)?1:-1}return Re(i.length,e.length)}const BI=55296,$I=57343;function Xh(i){const e=i.charCodeAt(0);return e>=BI&&e<=$I}function mo(i,e,t){return i.length===e.length&&i.every(((s,o)=>t(s,e[o])))}/**
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
 */const cg="__name__";class Yn{constructor(e,t,s){t===void 0?t=0:t>e.length&&de(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&de(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Yn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Yn?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Yn.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Re(e.length,t.length)}static compareSegments(e,t){const s=Yn.isNumericId(e),o=Yn.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Yn.extractNumericId(e).compare(Yn.extractNumericId(t)):dd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return yi.fromString(e.substring(4,e.length-2))}}class Ke extends Yn{construct(e,t,s){return new Ke(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new oe($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new Ke(t)}static emptyPath(){return new Ke([])}}const HI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class kt extends Yn{construct(e,t,s){return new kt(e,t,s)}static isValidIdentifier(e){return HI.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===cg}static keyField(){return new kt([cg])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new oe($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new oe($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[o+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new oe($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new oe($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new kt(t)}static emptyPath(){return new kt([])}}/**
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
 */class ue{constructor(e){this.path=e}static fromPath(e){return new ue(Ke.fromString(e))}static fromName(e){return new ue(Ke.fromString(e).popFirst(5))}static empty(){return new ue(Ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ke.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ue(new Ke(e.slice()))}}/**
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
 */function i_(i,e,t){if(!t)throw new oe($.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function qI(i,e,t,s){if(e===!0&&s===!0)throw new oe($.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function hg(i){if(!ue.isDocumentKey(i))throw new oe($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function dg(i){if(ue.isDocumentKey(i))throw new oe($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function s_(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function $d(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":de(12329,{type:typeof i})}function vi(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new oe($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=$d(i);throw new oe($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
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
 */function dt(i,e){const t={typeString:i};return e&&(t.value=e),t}function Ga(i,e){if(!s_(i))throw new oe($.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const h=i[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new oe($.INVALID_ARGUMENT,t);return!0}/**
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
 */const fg=-62135596800,pg=1e6;class Qe{static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*pg);return new Qe(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new oe($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new oe($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<fg)throw new oe($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oe($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/pg}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Qe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ga(e,Qe._jsonSchema))return new Qe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-fg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Qe._jsonSchemaVersion="firestore/timestamp/1.0",Qe._jsonSchema={type:dt("string",Qe._jsonSchemaVersion),seconds:dt("number"),nanoseconds:dt("number")};/**
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
 */class me{static fromTimestamp(e){return new me(e)}static min(){return new me(new Qe(0,0))}static max(){return new me(new Qe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Oa=-1;function WI(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=me.fromTimestamp(s===1e9?new Qe(t+1,0):new Qe(t,s));return new Ei(o,ue.empty(),e)}function GI(i){return new Ei(i.readTime,i.key,Oa)}class Ei{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ei(me.min(),ue.empty(),Oa)}static max(){return new Ei(me.max(),ue.empty(),Oa)}}function KI(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=ue.comparator(i.documentKey,e.documentKey),t!==0?t:Re(i.largestBatchId,e.largestBatchId))}/**
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
 */const QI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class YI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Io(i){if(i.code!==$.FAILED_PRECONDITION||i.message!==QI)throw i;te("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&de(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new B(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof B?t:B.resolve(t)}catch(t){return B.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):B.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):B.reject(t)}static resolve(e){return new B(((t,s)=>{t(e)}))}static reject(e){return new B(((t,s)=>{s(e)}))}static waitFor(e){return new B(((t,s)=>{let o=0,u=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++u,h&&u===o&&t()}),(y=>s(y)))})),h=!0,u===o&&t()}))}static or(e){let t=B.resolve(!1);for(const s of e)t=t.next((o=>o?B.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,u)=>{s.push(t.call(this,o,u))})),this.waitFor(s)}static mapArray(e,t){return new B(((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let y=0;y<u;y++){const v=y;t(e[v]).next((w=>{h[v]=w,++m,m===u&&s(h)}),(w=>o(w)))}}))}static doWhile(e,t){return new B(((s,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):s()};u()}))}}function JI(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function So(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class nc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}nc.ce=-1;/**
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
 */const Hd=-1;function rc(i){return i==null}function Uu(i){return i===0&&1/i==-1/0}function XI(i){return typeof i=="number"&&Number.isInteger(i)&&!Uu(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */const o_="";function ZI(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=mg(e)),e=eS(i.get(t),e);return mg(e)}function eS(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case o_:t+="";break;default:t+=u}}return t}function mg(i){return i+o_+""}/**
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
 */function gg(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function cs(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function a_(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
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
 */class tt{constructor(e,t){this.comparator=e,this.root=t||Ct.EMPTY}insert(e,t){return new tt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ct.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ct.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new yu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new yu(this.root,e,this.comparator,!1)}getReverseIterator(){return new yu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new yu(this.root,e,this.comparator,!0)}}class yu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ct{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Ct.RED,this.left=o??Ct.EMPTY,this.right=u??Ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Ct(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Ct.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw de(43730,{key:this.key,value:this.value});if(this.right.isRed())throw de(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw de(27949);return e+(this.isRed()?0:1)}}Ct.EMPTY=null,Ct.RED=!0,Ct.BLACK=!1;Ct.EMPTY=new class{constructor(){this.size=0}get key(){throw de(57766)}get value(){throw de(16141)}get color(){throw de(16727)}get left(){throw de(29726)}get right(){throw de(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new Ct(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class yt{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new yg(this.data.getIterator())}getIteratorFrom(e){return new yg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof yt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new yt(this.comparator);return t.data=e,t}}class yg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Pn{constructor(e){this.fields=e,e.sort(kt.comparator)}static empty(){return new Pn([])}unionWith(e){let t=new yt(kt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Pn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return mo(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class l_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Pt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new l_("Invalid base64 string: "+u):u}})(e);return new Pt(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u})(e);return new Pt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pt.EMPTY_BYTE_STRING=new Pt("");const tS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wi(i){if(be(!!i,39018),typeof i=="string"){let e=0;const t=tS.exec(i);if(be(!!t,46558,{timestamp:i}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:at(i.seconds),nanos:at(i.nanos)}}function at(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Ti(i){return typeof i=="string"?Pt.fromBase64String(i):Pt.fromUint8Array(i)}/**
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
 */const u_="server_timestamp",c_="__type__",h_="__previous_value__",d_="__local_write_time__";function qd(i){var t,s;return((s=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[c_])==null?void 0:s.stringValue)===u_}function ic(i){const e=i.mapValue.fields[h_];return qd(e)?ic(e):e}function La(i){const e=wi(i.mapValue.fields[d_].timestampValue);return new Qe(e.seconds,e.nanos)}/**
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
 */class nS{constructor(e,t,s,o,u,h,m,y,v,w,R){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=v,this.isUsingEmulator=w,this.apiKey=R}}const ju="(default)";class Ma{constructor(e,t){this.projectId=e,this.database=t||ju}static empty(){return new Ma("","")}get isDefaultDatabase(){return this.database===ju}isEqual(e){return e instanceof Ma&&e.projectId===this.projectId&&e.database===this.database}}function rS(i,e){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new oe($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ma(i.options.projectId,e)}/**
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
 */const f_="__type__",iS="__max__",_u={mapValue:{}},p_="__vector__",zu="value";function Ii(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?qd(i)?4:oS(i)?9007199254740991:sS(i)?10:11:de(28295,{value:i})}function rr(i,e){if(i===e)return!0;const t=Ii(i);if(t!==Ii(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return La(i).isEqual(La(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=wi(o.timestampValue),m=wi(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(o,u){return Ti(o.bytesValue).isEqual(Ti(u.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(o,u){return at(o.geoPointValue.latitude)===at(u.geoPointValue.latitude)&&at(o.geoPointValue.longitude)===at(u.geoPointValue.longitude)})(i,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return at(o.integerValue)===at(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=at(o.doubleValue),m=at(u.doubleValue);return h===m?Uu(h)===Uu(m):isNaN(h)&&isNaN(m)}return!1})(i,e);case 9:return mo(i.arrayValue.values||[],e.arrayValue.values||[],rr);case 10:case 11:return(function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(gg(h)!==gg(m))return!1;for(const y in h)if(h.hasOwnProperty(y)&&(m[y]===void 0||!rr(h[y],m[y])))return!1;return!0})(i,e);default:return de(52216,{left:i})}}function ba(i,e){return(i.values||[]).find((t=>rr(t,e)))!==void 0}function go(i,e){if(i===e)return 0;const t=Ii(i),s=Ii(e);if(t!==s)return Re(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Re(i.booleanValue,e.booleanValue);case 2:return(function(u,h){const m=at(u.integerValue||u.doubleValue),y=at(h.integerValue||h.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1})(i,e);case 3:return _g(i.timestampValue,e.timestampValue);case 4:return _g(La(i),La(e));case 5:return dd(i.stringValue,e.stringValue);case 6:return(function(u,h){const m=Ti(u),y=Ti(h);return m.compareTo(y)})(i.bytesValue,e.bytesValue);case 7:return(function(u,h){const m=u.split("/"),y=h.split("/");for(let v=0;v<m.length&&v<y.length;v++){const w=Re(m[v],y[v]);if(w!==0)return w}return Re(m.length,y.length)})(i.referenceValue,e.referenceValue);case 8:return(function(u,h){const m=Re(at(u.latitude),at(h.latitude));return m!==0?m:Re(at(u.longitude),at(h.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return vg(i.arrayValue,e.arrayValue);case 10:return(function(u,h){var M,z,Y,J;const m=u.fields||{},y=h.fields||{},v=(M=m[zu])==null?void 0:M.arrayValue,w=(z=y[zu])==null?void 0:z.arrayValue,R=Re(((Y=v==null?void 0:v.values)==null?void 0:Y.length)||0,((J=w==null?void 0:w.values)==null?void 0:J.length)||0);return R!==0?R:vg(v,w)})(i.mapValue,e.mapValue);case 11:return(function(u,h){if(u===_u.mapValue&&h===_u.mapValue)return 0;if(u===_u.mapValue)return 1;if(h===_u.mapValue)return-1;const m=u.fields||{},y=Object.keys(m),v=h.fields||{},w=Object.keys(v);y.sort(),w.sort();for(let R=0;R<y.length&&R<w.length;++R){const M=dd(y[R],w[R]);if(M!==0)return M;const z=go(m[y[R]],v[w[R]]);if(z!==0)return z}return Re(y.length,w.length)})(i.mapValue,e.mapValue);default:throw de(23264,{he:t})}}function _g(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Re(i,e);const t=wi(i),s=wi(e),o=Re(t.seconds,s.seconds);return o!==0?o:Re(t.nanos,s.nanos)}function vg(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=go(t[o],s[o]);if(u)return u}return Re(t.length,s.length)}function yo(i){return fd(i)}function fd(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const s=wi(t);return`time(${s.seconds},${s.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return Ti(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return ue.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=fd(u);return s+"]"})(i.arrayValue):"mapValue"in i?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${fd(t.fields[h])}`;return o+"}"})(i.mapValue):de(61005,{value:i})}function Ru(i){switch(Ii(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ic(i);return e?16+Ru(e):16;case 5:return 2*i.stringValue.length;case 6:return Ti(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+Ru(u)),0)})(i.arrayValue);case 10:case 11:return(function(s){let o=0;return cs(s.fields,((u,h)=>{o+=u.length+Ru(h)})),o})(i.mapValue);default:throw de(13486,{value:i})}}function pd(i){return!!i&&"integerValue"in i}function Wd(i){return!!i&&"arrayValue"in i}function Eg(i){return!!i&&"nullValue"in i}function wg(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Cu(i){return!!i&&"mapValue"in i}function sS(i){var t,s;return((s=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[f_])==null?void 0:s.stringValue)===p_}function Ca(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const e={mapValue:{fields:{}}};return cs(i.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Ca(s))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ca(i.arrayValue.values[t]);return e}return{...i}}function oS(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===iS}/**
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
 */class mn{constructor(e){this.value=e}static empty(){return new mn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Cu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ca(t)}setAll(e){let t=kt.emptyPath(),s={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const y=this.getFieldsMap(t);this.applyChanges(y,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Ca(h):o.push(m.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Cu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return rr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Cu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){cs(t,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new mn(Ca(this.value))}}function m_(i){const e=[];return cs(i.fields,((t,s)=>{const o=new kt([t]);if(Cu(s)){const u=m_(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)})),new Pn(e)}/**
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
 */class Ft{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Ft(e,0,me.min(),me.min(),me.min(),mn.empty(),0)}static newFoundDocument(e,t,s,o){return new Ft(e,1,t,me.min(),s,o,0)}static newNoDocument(e,t){return new Ft(e,2,t,me.min(),me.min(),mn.empty(),0)}static newUnknownDocument(e,t){return new Ft(e,3,t,me.min(),me.min(),mn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(me.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=me.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Bu{constructor(e,t){this.position=e,this.inclusive=t}}function Tg(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=ue.comparator(ue.fromName(h.referenceValue),t.key):s=go(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Ig(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!rr(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class $u{constructor(e,t="asc"){this.field=e,this.dir=t}}function aS(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class g_{}class mt extends g_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new uS(e,t,s):t==="array-contains"?new dS(e,s):t==="in"?new fS(e,s):t==="not-in"?new pS(e,s):t==="array-contains-any"?new mS(e,s):new mt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new cS(e,s):new hS(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(go(t,this.value)):t!==null&&Ii(this.value)===Ii(t)&&this.matchesComparison(go(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return de(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ir extends g_{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new ir(e,t)}matches(e){return y_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function y_(i){return i.op==="and"}function __(i){return lS(i)&&y_(i)}function lS(i){for(const e of i.filters)if(e instanceof ir)return!1;return!0}function md(i){if(i instanceof mt)return i.field.canonicalString()+i.op.toString()+yo(i.value);if(__(i))return i.filters.map((e=>md(e))).join(",");{const e=i.filters.map((t=>md(t))).join(",");return`${i.op}(${e})`}}function v_(i,e){return i instanceof mt?(function(s,o){return o instanceof mt&&s.op===o.op&&s.field.isEqual(o.field)&&rr(s.value,o.value)})(i,e):i instanceof ir?(function(s,o){return o instanceof ir&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,h,m)=>u&&v_(h,o.filters[m])),!0):!1})(i,e):void de(19439)}function E_(i){return i instanceof mt?(function(t){return`${t.field.canonicalString()} ${t.op} ${yo(t.value)}`})(i):i instanceof ir?(function(t){return t.op.toString()+" {"+t.getFilters().map(E_).join(" ,")+"}"})(i):"Filter"}class uS extends mt{constructor(e,t,s){super(e,t,s),this.key=ue.fromName(s.referenceValue)}matches(e){const t=ue.comparator(e.key,this.key);return this.matchesComparison(t)}}class cS extends mt{constructor(e,t){super(e,"in",t),this.keys=w_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class hS extends mt{constructor(e,t){super(e,"not-in",t),this.keys=w_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function w_(i,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>ue.fromName(s.referenceValue)))}class dS extends mt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Wd(t)&&ba(t.arrayValue,this.value)}}class fS extends mt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ba(this.value.arrayValue,t)}}class pS extends mt{constructor(e,t){super(e,"not-in",t)}matches(e){if(ba(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ba(this.value.arrayValue,t)}}class mS extends mt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Wd(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>ba(this.value.arrayValue,s)))}}/**
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
 */class gS{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Te=null}}function Sg(i,e=null,t=[],s=[],o=null,u=null,h=null){return new gS(i,e,t,s,o,u,h)}function Gd(i){const e=ye(i);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>md(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),rc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>yo(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>yo(s))).join(",")),e.Te=t}return e.Te}function Kd(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!aS(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!v_(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!Ig(i.startAt,e.startAt)&&Ig(i.endAt,e.endAt)}function gd(i){return ue.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
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
 */class sc{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=y,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function yS(i,e,t,s,o,u,h,m){return new sc(i,e,t,s,o,u,h,m)}function Qd(i){return new sc(i)}function Ag(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function _S(i){return ue.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}function vS(i){return i.collectionGroup!==null}function ka(i){const e=ye(i);if(e.Ee===null){e.Ee=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ee.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new yt(kt.comparator);return h.filters.forEach((y=>{y.getFlattenedFilters().forEach((v=>{v.isInequality()&&(m=m.add(v.field))}))})),m})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ee.push(new $u(u,s))})),t.has(kt.keyField().canonicalString())||e.Ee.push(new $u(kt.keyField(),s))}return e.Ee}function Xn(i){const e=ye(i);return e.Ie||(e.Ie=ES(e,ka(i))),e.Ie}function ES(i,e){if(i.limitType==="F")return Sg(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new $u(o.field,u)}));const t=i.endAt?new Bu(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Bu(i.startAt.position,i.startAt.inclusive):null;return Sg(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function yd(i,e,t){return new sc(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function oc(i,e){return Kd(Xn(i),Xn(e))&&i.limitType===e.limitType}function T_(i){return`${Gd(Xn(i))}|lt:${i.limitType}`}function ro(i){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>E_(o))).join(", ")}]`),rc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>yo(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>yo(o))).join(",")),`Target(${s})`})(Xn(i))}; limitType=${i.limitType})`}function ac(i,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ue.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(i,e)&&(function(s,o){for(const u of ka(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(i,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(i,e)&&(function(s,o){return!(s.startAt&&!(function(h,m,y){const v=Tg(h,m,y);return h.inclusive?v<=0:v<0})(s.startAt,ka(s),o)||s.endAt&&!(function(h,m,y){const v=Tg(h,m,y);return h.inclusive?v>=0:v>0})(s.endAt,ka(s),o))})(i,e)}function wS(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function I_(i){return(e,t)=>{let s=!1;for(const o of ka(i)){const u=TS(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function TS(i,e,t){const s=i.field.isKeyField()?ue.comparator(e.key,t.key):(function(u,h,m){const y=h.data.field(u),v=m.data.field(u);return y!==null&&v!==null?go(y,v):de(42886)})(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return de(19790,{direction:i.dir})}}/**
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
 */class hs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){cs(this.inner,((t,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return a_(this.inner)}size(){return this.innerSize}}/**
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
 */const IS=new tt(ue.comparator);function Nr(){return IS}const S_=new tt(ue.comparator);function Ia(...i){let e=S_;for(const t of i)e=e.insert(t.key,t);return e}function A_(i){let e=S_;return i.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function ts(){return Pa()}function R_(){return Pa()}function Pa(){return new hs((i=>i.toString()),((i,e)=>i.isEqual(e)))}const SS=new tt(ue.comparator),AS=new yt(ue.comparator);function Ce(...i){let e=AS;for(const t of i)e=e.add(t);return e}const RS=new yt(Re);function CS(){return RS}/**
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
 */function Yd(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Uu(e)?"-0":e}}function C_(i){return{integerValue:""+i}}function kS(i,e){return XI(e)?C_(e):Yd(i,e)}/**
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
 */class lc{constructor(){this._=void 0}}function PS(i,e,t){return i instanceof Hu?(function(o,u){const h={fields:{[c_]:{stringValue:u_},[d_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&qd(u)&&(u=ic(u)),u&&(h.fields[h_]=u),{mapValue:h}})(t,e):i instanceof Fa?P_(i,e):i instanceof Ua?N_(i,e):(function(o,u){const h=k_(o,u),m=Rg(h)+Rg(o.Ae);return pd(h)&&pd(o.Ae)?C_(m):Yd(o.serializer,m)})(i,e)}function NS(i,e,t){return i instanceof Fa?P_(i,e):i instanceof Ua?N_(i,e):t}function k_(i,e){return i instanceof qu?(function(s){return pd(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class Hu extends lc{}class Fa extends lc{constructor(e){super(),this.elements=e}}function P_(i,e){const t=x_(e);for(const s of i.elements)t.some((o=>rr(o,s)))||t.push(s);return{arrayValue:{values:t}}}class Ua extends lc{constructor(e){super(),this.elements=e}}function N_(i,e){let t=x_(e);for(const s of i.elements)t=t.filter((o=>!rr(o,s)));return{arrayValue:{values:t}}}class qu extends lc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Rg(i){return at(i.integerValue||i.doubleValue)}function x_(i){return Wd(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function xS(i,e){return i.field.isEqual(e.field)&&(function(s,o){return s instanceof Fa&&o instanceof Fa||s instanceof Ua&&o instanceof Ua?mo(s.elements,o.elements,rr):s instanceof qu&&o instanceof qu?rr(s.Ae,o.Ae):s instanceof Hu&&o instanceof Hu})(i.transform,e.transform)}class DS{constructor(e,t){this.version=e,this.transformResults=t}}class Zn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Zn}static exists(e){return new Zn(void 0,e)}static updateTime(e){return new Zn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ku(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class uc{}function D_(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new Jd(i.key,Zn.none()):new Ka(i.key,i.data,Zn.none());{const t=i.data,s=mn.empty();let o=new yt(kt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new ds(i.key,s,new Pn(o.toArray()),Zn.none())}}function VS(i,e,t){i instanceof Ka?(function(o,u,h){const m=o.value.clone(),y=kg(o.fieldTransforms,u,h.transformResults);m.setAll(y),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(i,e,t):i instanceof ds?(function(o,u,h){if(!ku(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=kg(o.fieldTransforms,u,h.transformResults),y=u.data;y.setAll(V_(o)),y.setAll(m),u.convertToFoundDocument(h.version,y).setHasCommittedMutations()})(i,e,t):(function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Na(i,e,t,s){return i instanceof Ka?(function(u,h,m,y){if(!ku(u.precondition,h))return m;const v=u.value.clone(),w=Pg(u.fieldTransforms,y,h);return v.setAll(w),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null})(i,e,t,s):i instanceof ds?(function(u,h,m,y){if(!ku(u.precondition,h))return m;const v=Pg(u.fieldTransforms,y,h),w=h.data;return w.setAll(V_(u)),w.setAll(v),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((R=>R.field)))})(i,e,t,s):(function(u,h,m){return ku(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(i,e,t)}function OS(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=k_(s.transform,o||null);u!=null&&(t===null&&(t=mn.empty()),t.set(s.field,u))}return t||null}function Cg(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&mo(s,o,((u,h)=>xS(u,h)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Ka extends uc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ds extends uc{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function V_(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}})),e}function kg(i,e,t){const s=new Map;be(i.length===t.length,32656,{Ve:t.length,de:i.length});for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,NS(h,m,t[o]))}return s}function Pg(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,PS(u,h,e))}return s}class Jd extends uc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class LS extends uc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class MS{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&VS(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Na(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Na(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=R_();return this.mutations.forEach((o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const y=D_(h,m);y!==null&&s.set(o.key,y),h.isValidDocument()||h.convertToNoDocument(me.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ce())}isEqual(e){return this.batchId===e.batchId&&mo(this.mutations,e.mutations,((t,s)=>Cg(t,s)))&&mo(this.baseMutations,e.baseMutations,((t,s)=>Cg(t,s)))}}class Xd{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){be(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return SS})();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new Xd(e,t,s,o)}}/**
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
 */class bS{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class FS{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ht,Ne;function US(i){switch(i){case $.OK:return de(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return de(15467,{code:i})}}function O_(i){if(i===void 0)return Pr("GRPC error has no .code"),$.UNKNOWN;switch(i){case ht.OK:return $.OK;case ht.CANCELLED:return $.CANCELLED;case ht.UNKNOWN:return $.UNKNOWN;case ht.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case ht.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case ht.INTERNAL:return $.INTERNAL;case ht.UNAVAILABLE:return $.UNAVAILABLE;case ht.UNAUTHENTICATED:return $.UNAUTHENTICATED;case ht.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case ht.NOT_FOUND:return $.NOT_FOUND;case ht.ALREADY_EXISTS:return $.ALREADY_EXISTS;case ht.PERMISSION_DENIED:return $.PERMISSION_DENIED;case ht.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case ht.ABORTED:return $.ABORTED;case ht.OUT_OF_RANGE:return $.OUT_OF_RANGE;case ht.UNIMPLEMENTED:return $.UNIMPLEMENTED;case ht.DATA_LOSS:return $.DATA_LOSS;default:return de(39323,{code:i})}}(Ne=ht||(ht={}))[Ne.OK=0]="OK",Ne[Ne.CANCELLED=1]="CANCELLED",Ne[Ne.UNKNOWN=2]="UNKNOWN",Ne[Ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ne[Ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ne[Ne.NOT_FOUND=5]="NOT_FOUND",Ne[Ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ne[Ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ne[Ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ne[Ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ne[Ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ne[Ne.ABORTED=10]="ABORTED",Ne[Ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ne[Ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ne[Ne.INTERNAL=13]="INTERNAL",Ne[Ne.UNAVAILABLE=14]="UNAVAILABLE",Ne[Ne.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function jS(){return new TextEncoder}/**
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
 */const zS=new yi([4294967295,4294967295],0);function Ng(i){const e=jS().encode(i),t=new Yy;return t.update(e),new Uint8Array(t.digest())}function xg(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new yi([t,s],0),new yi([o,u],0)]}class Zd{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Sa(`Invalid padding: ${t}`);if(s<0)throw new Sa(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Sa(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Sa(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=yi.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(yi.fromNumber(s)));return o.compare(zS)===1&&(o=new yi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Ng(e),[s,o]=xg(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);if(!this.we(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new Zd(u,o,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.ge===0)return;const t=Ng(e),[s,o]=xg(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Sa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class cc{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Qa.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new cc(me.min(),o,new tt(Re),Nr(),Ce())}}class Qa{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Qa(s,t,Ce(),Ce(),Ce())}}/**
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
 */class Pu{constructor(e,t,s,o){this.be=e,this.removedTargetIds=t,this.key=s,this.De=o}}class L_{constructor(e,t){this.targetId=e,this.Ce=t}}class M_{constructor(e,t,s=Pt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Dg{constructor(){this.ve=0,this.Fe=Vg(),this.Me=Pt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ce(),t=Ce(),s=Ce();return this.Fe.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:de(38017,{changeType:u})}})),new Qa(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=Vg()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,be(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class BS{constructor(e){this.Ge=e,this.ze=new Map,this.je=Nr(),this.Je=vu(),this.He=vu(),this.Ze=new tt(Re)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:de(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const u=o.target;if(gd(u))if(s===0){const h=new ue(u.path);this.et(t,h,Ft.newNoDocument(h,me.min()))}else be(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const m=this.ut(e),y=m?this.ct(m,e,h):1;if(y!==0){this.it(t);const v=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,v)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=Ti(s).toUint8Array()}catch(y){if(y instanceof l_)return ls("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new Zd(h,o,u)}catch(y){return ls(y instanceof Sa?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.ge===0?null:m}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach((u=>{const h=this.Ge.ht(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.et(t,u,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((u,h)=>{const m=this.ot(h);if(m){if(u.current&&gd(m.target)){const y=new ue(m.target.path);this.Et(y).has(h)||this.It(h,y)||this.et(h,y,Ft.newNoDocument(y,e))}u.Be&&(t.set(h,u.ke()),u.qe())}}));let s=Ce();this.He.forEach(((u,h)=>{let m=!0;h.forEachWhile((y=>{const v=this.ot(y);return!v||v.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.je.forEach(((u,h)=>h.setReadTime(e)));const o=new cc(e,t,this.Ze,this.je,s);return this.je=Nr(),this.Je=vu(),this.He=vu(),this.Ze=new tt(Re),o}Ye(e,t){if(!this.rt(e))return;const s=this.It(e,t.key)?2:0;this.nt(e).Ke(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.It(e,t)?o.Ke(t,1):o.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Dg,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new yt(Re),this.He=this.He.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new yt(Re),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||te("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Dg),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function vu(){return new tt(ue.comparator)}function Vg(){return new tt(ue.comparator)}const $S={asc:"ASCENDING",desc:"DESCENDING"},HS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},qS={and:"AND",or:"OR"};class WS{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function _d(i,e){return i.useProto3Json||rc(e)?e:{value:e}}function Wu(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function b_(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function GS(i,e){return Wu(i,e.toTimestamp())}function er(i){return be(!!i,49232),me.fromTimestamp((function(t){const s=wi(t);return new Qe(s.seconds,s.nanos)})(i))}function ef(i,e){return vd(i,e).canonicalString()}function vd(i,e){const t=(function(o){return new Ke(["projects",o.projectId,"databases",o.database])})(i).child("documents");return e===void 0?t:t.child(e)}function F_(i){const e=Ke.fromString(i);return be($_(e),10190,{key:e.toString()}),e}function Ed(i,e){return ef(i.databaseId,e.path)}function Zh(i,e){const t=F_(e);if(t.get(1)!==i.databaseId.projectId)throw new oe($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new oe($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new ue(j_(t))}function U_(i,e){return ef(i.databaseId,e)}function KS(i){const e=F_(i);return e.length===4?Ke.emptyPath():j_(e)}function wd(i){return new Ke(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function j_(i){return be(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function Og(i,e,t){return{name:Ed(i,e),fields:t.value.mapValue.fields}}function QS(i,e){let t;if("targetChange"in e){e.targetChange;const s=(function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:de(39313,{state:v})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(v,w){return v.useProto3Json?(be(w===void 0||typeof w=="string",58123),Pt.fromBase64String(w||"")):(be(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Pt.fromUint8Array(w||new Uint8Array))})(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(v){const w=v.code===void 0?$.UNKNOWN:O_(v.code);return new oe(w,v.message||"")})(h);t=new M_(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Zh(i,s.document.name),u=er(s.document.updateTime),h=s.document.createTime?er(s.document.createTime):me.min(),m=new mn({mapValue:{fields:s.document.fields}}),y=Ft.newFoundDocument(o,u,h,m),v=s.targetIds||[],w=s.removedTargetIds||[];t=new Pu(v,w,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Zh(i,s.document),u=s.readTime?er(s.readTime):me.min(),h=Ft.newNoDocument(o,u),m=s.removedTargetIds||[];t=new Pu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Zh(i,s.document),u=s.removedTargetIds||[];t=new Pu([],u,o,null)}else{if(!("filter"in e))return de(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new FS(o,u),m=s.targetId;t=new L_(m,h)}}return t}function YS(i,e){let t;if(e instanceof Ka)t={update:Og(i,e.key,e.value)};else if(e instanceof Jd)t={delete:Ed(i,e.key)};else if(e instanceof ds)t={update:Og(i,e.key,e.data),updateMask:sA(e.fieldMask)};else{if(!(e instanceof LS))return de(16599,{dt:e.type});t={verify:Ed(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(u,h){const m=h.transform;if(m instanceof Hu)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Fa)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Ua)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof qu)return{fieldPath:h.field.canonicalString(),increment:m.Ae};throw de(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:GS(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:de(27497)})(i,e.precondition)),t}function JS(i,e){return i&&i.length>0?(be(e!==void 0,14353),i.map((t=>(function(o,u){let h=o.updateTime?er(o.updateTime):er(u);return h.isEqual(me.min())&&(h=er(u)),new DS(h,o.transformResults||[])})(t,e)))):[]}function XS(i,e){return{documents:[U_(i,e.path)]}}function ZS(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=U_(i,o);const u=(function(v){if(v.length!==0)return B_(ir.create(v,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const h=(function(v){if(v.length!==0)return v.map((w=>(function(M){return{field:io(M.field),direction:nA(M.dir)}})(w)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=_d(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(v){return{before:v.inclusive,values:v.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(v){return{before:!v.inclusive,values:v.position}})(e.endAt)),{ft:t,parent:o}}function eA(i){let e=KS(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){be(s===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=(function(R){const M=z_(R);return M instanceof ir&&__(M)?M.getFilters():[M]})(t.where));let h=[];t.orderBy&&(h=(function(R){return R.map((M=>(function(Y){return new $u(so(Y.field),(function(K){switch(K){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(Y.direction))})(M)))})(t.orderBy));let m=null;t.limit&&(m=(function(R){let M;return M=typeof R=="object"?R.value:R,rc(M)?null:M})(t.limit));let y=null;t.startAt&&(y=(function(R){const M=!!R.before,z=R.values||[];return new Bu(z,M)})(t.startAt));let v=null;return t.endAt&&(v=(function(R){const M=!R.before,z=R.values||[];return new Bu(z,M)})(t.endAt)),yS(e,o,h,u,m,"F",y,v)}function tA(i,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return de(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function z_(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=so(t.unaryFilter.field);return mt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=so(t.unaryFilter.field);return mt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=so(t.unaryFilter.field);return mt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=so(t.unaryFilter.field);return mt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return de(61313);default:return de(60726)}})(i):i.fieldFilter!==void 0?(function(t){return mt.create(so(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return de(58110);default:return de(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return ir.create(t.compositeFilter.filters.map((s=>z_(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return de(1026)}})(t.compositeFilter.op))})(i):de(30097,{filter:i})}function nA(i){return $S[i]}function rA(i){return HS[i]}function iA(i){return qS[i]}function io(i){return{fieldPath:i.canonicalString()}}function so(i){return kt.fromServerFormat(i.fieldPath)}function B_(i){return i instanceof mt?(function(t){if(t.op==="=="){if(wg(t.value))return{unaryFilter:{field:io(t.field),op:"IS_NAN"}};if(Eg(t.value))return{unaryFilter:{field:io(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(wg(t.value))return{unaryFilter:{field:io(t.field),op:"IS_NOT_NAN"}};if(Eg(t.value))return{unaryFilter:{field:io(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:io(t.field),op:rA(t.op),value:t.value}}})(i):i instanceof ir?(function(t){const s=t.getFilters().map((o=>B_(o)));return s.length===1?s[0]:{compositeFilter:{op:iA(t.op),filters:s}}})(i):de(54877,{filter:i})}function sA(i){const e=[];return i.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function $_(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}function H_(i){return!!i&&typeof i._toProto=="function"&&i._protoValueType==="ProtoValue"}/**
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
 */class fi{constructor(e,t,s,o,u=me.min(),h=me.min(),m=Pt.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=y}withSequenceNumber(e){return new fi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new fi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new fi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new fi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class oA{constructor(e){this.yt=e}}function aA(i){const e=eA({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?yd(e,e.limit,"L"):e}/**
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
 */class lA{constructor(){this.bn=new uA}addToCollectionParentIndex(e,t){return this.bn.add(t),B.resolve()}getCollectionParents(e,t){return B.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return B.resolve()}deleteFieldIndex(e,t){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,t){return B.resolve()}getDocumentsMatchingTarget(e,t){return B.resolve(null)}getIndexType(e,t){return B.resolve(0)}getFieldIndexes(e,t){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,t){return B.resolve(Ei.min())}getMinOffsetFromCollectionGroup(e,t){return B.resolve(Ei.min())}updateCollectionGroup(e,t,s){return B.resolve()}updateIndexEntries(e,t){return B.resolve()}}class uA{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new yt(Ke.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new yt(Ke.comparator)).toArray()}}/**
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
 */const Lg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},q_=41943040;class Qt{static withCacheSize(e){return new Qt(e,Qt.DEFAULT_COLLECTION_PERCENTILE,Qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Qt.DEFAULT_COLLECTION_PERCENTILE=10,Qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Qt.DEFAULT=new Qt(q_,Qt.DEFAULT_COLLECTION_PERCENTILE,Qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Qt.DISABLED=new Qt(-1,0,0);/**
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
 */class _o{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new _o(0)}static ar(){return new _o(-1)}}/**
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
 */const Mg="LruGarbageCollector",cA=1048576;function bg([i,e],[t,s]){const o=Re(i,t);return o===0?Re(e,s):o}class hA{constructor(e){this.Pr=e,this.buffer=new yt(bg),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();bg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class dA{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){te(Mg,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){So(t)?te(Mg,"Ignoring IndexedDB error during garbage collection: ",t):await Io(t)}await this.Ar(3e5)}))}}class fA{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return B.resolve(nc.ce);const s=new hA(t);return this.Vr.forEachTarget(e,(o=>s.Ir(o.sequenceNumber))).next((()=>this.Vr.mr(e,(o=>s.Ir(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(Lg)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Lg):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,o,u,h,m,y,v;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((R=>(R>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${R}`),o=this.params.maximumSequenceNumbersToCollect):o=R,h=Date.now(),this.nthSequenceNumber(e,o)))).next((R=>(s=R,m=Date.now(),this.removeTargets(e,s,t)))).next((R=>(u=R,y=Date.now(),this.removeOrphanedDocuments(e,s)))).next((R=>(v=Date.now(),no()<=Ae.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(y-m)+`ms
	Removed ${R} documents in `+(v-y)+`ms
Total Duration: ${v-w}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:R}))))}}function pA(i,e){return new fA(i,e)}/**
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
 */class mA{constructor(){this.changes=new hs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ft.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?B.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class gA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class yA{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&Na(s.mutation,o,Pn.empty(),Qe.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Ce()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Ce()){const o=ts();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((u=>{let h=Ia();return u.forEach(((m,y)=>{h=h.insert(m,y.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=ts();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Ce())))}populateOverlays(e,t,s){const o=[];return s.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,o){let u=Nr();const h=Pa(),m=(function(){return Pa()})();return t.forEach(((y,v)=>{const w=s.get(v.key);o.has(v.key)&&(w===void 0||w.mutation instanceof ds)?u=u.insert(v.key,v):w!==void 0?(h.set(v.key,w.mutation.getFieldMask()),Na(w.mutation,v,w.mutation.getFieldMask(),Qe.now())):h.set(v.key,Pn.empty())})),this.recalculateAndSaveOverlays(e,u).next((y=>(y.forEach(((v,w)=>h.set(v,w))),t.forEach(((v,w)=>m.set(v,new gA(w,h.get(v)??null)))),m)))}recalculateAndSaveOverlays(e,t){const s=Pa();let o=new tt(((h,m)=>h-m)),u=Ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((y=>{const v=t.get(y);if(v===null)return;let w=s.get(y)||Pn.empty();w=m.applyToLocalView(v,w),s.set(y,w);const R=(o.get(m.batchId)||Ce()).add(y);o=o.insert(m.batchId,R)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),v=y.key,w=y.value,R=R_();w.forEach((M=>{if(!u.has(M)){const z=D_(t.get(M),s.get(M));z!==null&&R.set(M,z),u=u.add(M)}})),h.push(this.documentOverlayCache.saveOverlays(e,v,R))}return B.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return _S(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):vS(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):B.resolve(ts());let m=Oa,y=u;return h.next((v=>B.forEach(v,((w,R)=>(m<R.largestBatchId&&(m=R.largestBatchId),u.get(w)?B.resolve():this.remoteDocumentCache.getEntry(e,w).next((M=>{y=y.insert(w,M)}))))).next((()=>this.populateOverlays(e,v,u))).next((()=>this.computeViews(e,y,v,Ce()))).next((w=>({batchId:m,changes:A_(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ue(t)).next((s=>{let o=Ia();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Ia();return this.indexManager.getCollectionParents(e,u).next((m=>B.forEach(m,(y=>{const v=(function(R,M){return new sc(M,null,R.explicitOrderBy.slice(),R.filters.slice(),R.limit,R.limitType,R.startAt,R.endAt)})(t,y.child(u));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next((w=>{w.forEach(((R,M)=>{h=h.insert(R,M)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o)))).next((h=>{u.forEach(((y,v)=>{const w=v.getKey();h.get(w)===null&&(h=h.insert(w,Ft.newInvalidDocument(w)))}));let m=Ia();return h.forEach(((y,v)=>{const w=u.get(y);w!==void 0&&Na(w.mutation,v,Pn.empty(),Qe.now()),ac(t,v)&&(m=m.insert(y,v))})),m}))}}/**
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
 */class _A{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return B.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:er(o.createTime)}})(t)),B.resolve()}getNamedQuery(e,t){return B.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(o){return{name:o.name,query:aA(o.bundledQuery),readTime:er(o.readTime)}})(t)),B.resolve()}}/**
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
 */class vA{constructor(){this.overlays=new tt(ue.comparator),this.Lr=new Map}getOverlay(e,t){return B.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ts();return B.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,u)=>{this.St(e,t,u)})),B.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Lr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.Lr.delete(s)),B.resolve()}getOverlaysForCollection(e,t,s){const o=ts(),u=t.length+1,h=new ue(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const y=m.getNext().value,v=y.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===u&&y.largestBatchId>s&&o.set(y.getKey(),y)}return B.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new tt(((v,w)=>v-w));const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let w=u.get(v.largestBatchId);w===null&&(w=ts(),u=u.insert(v.largestBatchId,w)),w.set(v.getKey(),v)}}const m=ts(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach(((v,w)=>m.set(v,w))),!(m.size()>=o)););return B.resolve(m)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Lr.get(o.largestBatchId).delete(s.key);this.Lr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new bS(t,s));let u=this.Lr.get(t);u===void 0&&(u=Ce(),this.Lr.set(t,u)),this.Lr.set(t,u.add(s.key))}}/**
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
 */class EA{constructor(){this.sessionToken=Pt.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,B.resolve()}}/**
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
 */class tf{constructor(){this.kr=new yt(Tt.qr),this.Kr=new yt(Tt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new Tt(e,t);this.kr=this.kr.add(s),this.Kr=this.Kr.add(s)}$r(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new Tt(e,t))}Qr(e,t){e.forEach((s=>this.removeReference(s,t)))}Gr(e){const t=new ue(new Ke([])),s=new Tt(t,e),o=new Tt(t,e+1),u=[];return this.Kr.forEachInRange([s,o],(h=>{this.Wr(h),u.push(h.key)})),u}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new ue(new Ke([])),s=new Tt(t,e),o=new Tt(t,e+1);let u=Ce();return this.Kr.forEachInRange([s,o],(h=>{u=u.add(h.key)})),u}containsKey(e){const t=new Tt(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Tt{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return ue.comparator(e.key,t.key)||Re(e.Jr,t.Jr)}static Ur(e,t){return Re(e.Jr,t.Jr)||ue.comparator(e.key,t.key)}}/**
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
 */class wA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new yt(Tt.qr)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new MS(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Hr=this.Hr.add(new Tt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return B.resolve(h)}lookupMutationBatch(e,t){return B.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),u=o<0?0:o;return B.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?Hd:this.Yn-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Tt(t,0),o=new Tt(t,Number.POSITIVE_INFINITY),u=[];return this.Hr.forEachInRange([s,o],(h=>{const m=this.Zr(h.Jr);u.push(m)})),B.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new yt(Re);return t.forEach((o=>{const u=new Tt(o,0),h=new Tt(o,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([u,h],(m=>{s=s.add(m.Jr)}))})),B.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;ue.isDocumentKey(u)||(u=u.child(""));const h=new Tt(new ue(u),0);let m=new yt(Re);return this.Hr.forEachWhile((y=>{const v=y.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(m=m.add(y.Jr)),!0)}),h),B.resolve(this.Yr(m))}Yr(e){const t=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){be(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Hr;return B.forEach(t.mutations,(o=>{const u=new Tt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Hr=s}))}nr(e){}containsKey(e,t){const s=new Tt(t,0),o=this.Hr.firstAfterOrEqual(s);return B.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class TA{constructor(e){this.ti=e,this.docs=(function(){return new tt(ue.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return B.resolve(s?s.document.mutableCopy():Ft.newInvalidDocument(t))}getEntries(e,t){let s=Nr();return t.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Ft.newInvalidDocument(o))})),B.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Nr();const h=t.path,m=new ue(h.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:v,value:{document:w}}=y.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||KI(GI(w),s)<=0||(o.has(w.key)||ac(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return B.resolve(u)}getAllFromCollectionGroup(e,t,s,o){de(9500)}ni(e,t){return B.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new IA(this)}getSize(e){return B.resolve(this.size)}}class IA extends mA{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Mr.addEntry(e,o)):this.Mr.removeEntry(s)})),B.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class SA{constructor(e){this.persistence=e,this.ri=new hs((t=>Gd(t)),Kd),this.lastRemoteSnapshotVersion=me.min(),this.highestTargetId=0,this.ii=0,this.si=new tf,this.targetCount=0,this.oi=_o._r()}forEachTarget(e,t){return this.ri.forEach(((s,o)=>t(o))),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),B.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new _o(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,B.resolve()}updateTargetData(e,t){return this.lr(t),B.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.ri.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.ri.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),B.waitFor(u).next((()=>o))}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return B.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),B.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((h=>{u.push(o.markPotentiallyOrphaned(e,h))})),B.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),B.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return B.resolve(s)}containsKey(e,t){return B.resolve(this.si.containsKey(t))}}/**
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
 */class W_{constructor(e,t){this._i={},this.overlays={},this.ai=new nc(0),this.ui=!1,this.ui=!0,this.ci=new EA,this.referenceDelegate=e(this),this.li=new SA(this),this.indexManager=new lA,this.remoteDocumentCache=(function(o){return new TA(o)})((s=>this.referenceDelegate.hi(s))),this.serializer=new oA(t),this.Pi=new _A(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new vA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new wA(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){te("MemoryPersistence","Starting transaction:",e);const o=new AA(this.ai.next());return this.referenceDelegate.Ti(),s(o).next((u=>this.referenceDelegate.Ei(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ii(e,t){return B.or(Object.values(this._i).map((s=>()=>s.containsKey(e,t))))}}class AA extends YI{constructor(e){super(),this.currentSequenceNumber=e}}class nf{constructor(e){this.persistence=e,this.Ri=new tf,this.Ai=null}static Vi(e){return new nf(e)}get di(){if(this.Ai)return this.Ai;throw de(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),B.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),B.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),B.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((o=>this.di.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.di.add(u.toString())))})).next((()=>s.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.di,(s=>{const o=ue.fromPath(s);return this.mi(e,o).next((u=>{u||t.removeEntry(o,me.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return B.or([()=>B.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class Gu{constructor(e,t){this.persistence=e,this.fi=new hs((s=>ZI(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=pA(this,t)}static Vi(e,t){return new Gu(e,t)}Ti(){}Ei(e){return B.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}pr(e){let t=0;return this.mr(e,(s=>{t++})).next((()=>t))}mr(e,t){return B.forEach(this.fi,((s,o)=>this.wr(e,s,o).next((u=>u?B.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ni(e,(h=>this.wr(e,h,t).next((m=>{m||(s++,u.removeEntry(h,me.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),B.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),B.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),B.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ru(e.data.value)),t}wr(e,t,s){return B.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.fi.get(t);return B.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class rf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Ts=s,this.Es=o}static Is(e,t){let s=Ce(),o=Ce();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new rf(e,t.fromCache,s,o)}}/**
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
 */class RA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class CA{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return gw()?8:JI(Ut())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.gs(e,t).next((h=>{u.result=h})).next((()=>{if(!u.result)return this.ps(e,t,o,s).next((h=>{u.result=h}))})).next((()=>{if(u.result)return;const h=new RA;return this.ys(e,t,h).next((m=>{if(u.result=m,this.As)return this.ws(e,t,h,m.size)}))})).next((()=>u.result))}ws(e,t,s,o){return s.documentReadCount<this.Vs?(no()<=Ae.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",ro(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),B.resolve()):(no()<=Ae.DEBUG&&te("QueryEngine","Query:",ro(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ds*o?(no()<=Ae.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",ro(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xn(t))):B.resolve())}gs(e,t){if(Ag(t))return B.resolve(null);let s=Xn(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=yd(t,null,"F"),s=Xn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const h=Ce(...u);return this.fs.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((y=>{const v=this.Ss(t,m);return this.bs(t,v,h,y.readTime)?this.gs(e,yd(t,null,"F")):this.Ds(e,v,t,y)}))))})))))}ps(e,t,s,o){return Ag(t)||o.isEqual(me.min())?B.resolve(null):this.fs.getDocuments(e,s).next((u=>{const h=this.Ss(t,u);return this.bs(t,h,s,o)?B.resolve(null):(no()<=Ae.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),ro(t)),this.Ds(e,h,t,WI(o,Oa)).next((m=>m)))}))}Ss(e,t){let s=new yt(I_(e));return t.forEach(((o,u)=>{ac(e,u)&&(s=s.add(u))})),s}bs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ys(e,t,s){return no()<=Ae.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",ro(t)),this.fs.getDocumentsMatchingQuery(e,t,Ei.min(),s)}Ds(e,t,s,o){return this.fs.getDocumentsMatchingQuery(e,s,o).next((u=>(t.forEach((h=>{u=u.insert(h.key,h)})),u)))}}/**
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
 */const sf="LocalStore",kA=3e8;class PA{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.vs=new tt(Re),this.Fs=new hs((u=>Gd(u)),Kd),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new yA(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function NA(i,e,t,s){return new PA(i,e,t,s)}async function G_(i,e){const t=ye(i);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,t.Os(e),t.mutationQueue.getAllMutationBatches(s)))).next((u=>{const h=[],m=[];let y=Ce();for(const v of o){h.push(v.batchId);for(const w of v.mutations)y=y.add(w.key)}for(const v of u){m.push(v.batchId);for(const w of v.mutations)y=y.add(w.key)}return t.localDocuments.getDocuments(s,y).next((v=>({Ns:v,removedBatchIds:h,addedBatchIds:m})))}))}))}function xA(i,e){const t=ye(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),u=t.xs.newChangeBuffer({trackRemovals:!0});return(function(m,y,v,w){const R=v.batch,M=R.keys();let z=B.resolve();return M.forEach((Y=>{z=z.next((()=>w.getEntry(y,Y))).next((J=>{const K=v.docVersions.get(Y);be(K!==null,48541),J.version.compareTo(K)<0&&(R.applyToRemoteDocument(J,v),J.isValidDocument()&&(J.setReadTime(v.commitVersion),w.addEntry(J)))}))})),z.next((()=>m.mutationQueue.removeMutationBatch(y,R)))})(t,s,e,u).next((()=>u.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let y=Ce();for(let v=0;v<m.mutationResults.length;++v)m.mutationResults[v].transformResults.length>0&&(y=y.add(m.batch.mutations[v].key));return y})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function K_(i){const e=ye(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function DA(i,e){const t=ye(i),s=e.snapshotVersion;let o=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const h=t.xs.newChangeBuffer({trackRemovals:!0});o=t.vs;const m=[];e.targetChanges.forEach(((w,R)=>{const M=o.get(R);if(!M)return;m.push(t.li.removeMatchingKeys(u,w.removedDocuments,R).next((()=>t.li.addMatchingKeys(u,w.addedDocuments,R))));let z=M.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(R)!==null?z=z.withResumeToken(Pt.EMPTY_BYTE_STRING,me.min()).withLastLimboFreeSnapshotVersion(me.min()):w.resumeToken.approximateByteSize()>0&&(z=z.withResumeToken(w.resumeToken,s)),o=o.insert(R,z),(function(J,K,Ee){return J.resumeToken.approximateByteSize()===0||K.snapshotVersion.toMicroseconds()-J.snapshotVersion.toMicroseconds()>=kA?!0:Ee.addedDocuments.size+Ee.modifiedDocuments.size+Ee.removedDocuments.size>0})(M,z,w)&&m.push(t.li.updateTargetData(u,z))}));let y=Nr(),v=Ce();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))})),m.push(VA(u,h,e.documentUpdates).next((w=>{y=w.Bs,v=w.Ls}))),!s.isEqual(me.min())){const w=t.li.getLastRemoteSnapshotVersion(u).next((R=>t.li.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(w)}return B.waitFor(m).next((()=>h.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,y,v))).next((()=>y))})).then((u=>(t.vs=o,u)))}function VA(i,e,t){let s=Ce(),o=Ce();return t.forEach((u=>s=s.add(u))),e.getEntries(i,s).next((u=>{let h=Nr();return t.forEach(((m,y)=>{const v=u.get(m);y.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(m)),y.isNoDocument()&&y.version.isEqual(me.min())?(e.removeEntry(m,y.readTime),h=h.insert(m,y)):!v.isValidDocument()||y.version.compareTo(v.version)>0||y.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(y),h=h.insert(m,y)):te(sf,"Ignoring outdated watch update for ",m,". Current version:",v.version," Watch version:",y.version)})),{Bs:h,Ls:o}}))}function OA(i,e){const t=ye(i);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Hd),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function LA(i,e){const t=ye(i);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.li.getTargetData(s,e).next((u=>u?(o=u,B.resolve(o)):t.li.allocateTargetId(s).next((h=>(o=new fi(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.vs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s}))}async function Td(i,e,t){const s=ye(i),o=s.vs.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!So(h))throw h;te(sf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.vs=s.vs.remove(e),s.Fs.delete(o.target)}function Fg(i,e,t){const s=ye(i);let o=me.min(),u=Ce();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(y,v,w){const R=ye(y),M=R.Fs.get(w);return M!==void 0?B.resolve(R.vs.get(M)):R.li.getTargetData(v,w)})(s,h,Xn(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(h,m.targetId).next((y=>{u=y}))})).next((()=>s.Cs.getDocumentsMatchingQuery(h,e,t?o:me.min(),t?u:Ce()))).next((m=>(MA(s,wS(e),m),{documents:m,ks:u})))))}function MA(i,e,t){let s=i.Ms.get(e)||me.min();t.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),i.Ms.set(e,s)}class Ug{constructor(){this.activeTargetIds=CS()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class bA{constructor(){this.vo=new Ug,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Ug,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class FA{Mo(e){}shutdown(){}}/**
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
 */const jg="ConnectivityMonitor";class zg{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){te(jg,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){te(jg,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Eu=null;function Id(){return Eu===null?Eu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Eu++,"0x"+Eu.toString(16)}/**
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
 */const ed="RestConnection",UA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class jA{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.$o=this.databaseId.database===ju?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,u){const h=Id(),m=this.Qo(e,t.toUriEncodedString());te(ed,`Sending RPC '${e}' ${h}:`,m,s);const y={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(y,o,u);const{host:v}=new URL(m),w=$a(v);return this.zo(e,m,y,s,w).then((R=>(te(ed,`Received RPC '${e}' ${h}: `,R),R)),(R=>{throw ls(ed,`RPC '${e}' ${h} failed with error: `,R,"url: ",m,"request:",s),R}))}jo(e,t,s,o,u,h){return this.Wo(e,t,s,o,u)}Go(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+To})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,u)=>e[u]=o)),s&&s.headers.forEach(((o,u)=>e[u]=o))}Qo(e,t){const s=UA[e];let o=`${this.Ko}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(o=`${o}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),o}terminate(){}}/**
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
 */class zA{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const Mt="WebChannelConnection",wa=(i,e,t)=>{i.listen(e,(s=>{try{t(s)}catch(o){setTimeout((()=>{throw o}),0)}}))};class uo extends jA{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!uo.c_){const e=e_();wa(e,Zy.STAT_EVENT,(t=>{t.stat===hd.PROXY?te(Mt,"STAT_EVENT: detected buffering proxy"):t.stat===hd.NOPROXY&&te(Mt,"STAT_EVENT: detected no buffering proxy")})),uo.c_=!0}}zo(e,t,s,o,u){const h=Id();return new Promise(((m,y)=>{const v=new Jy;v.setWithCredentials(!0),v.listenOnce(Xy.COMPLETE,(()=>{try{switch(v.getLastErrorCode()){case Au.NO_ERROR:const R=v.getResponseJson();te(Mt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(R)),m(R);break;case Au.TIMEOUT:te(Mt,`RPC '${e}' ${h} timed out`),y(new oe($.DEADLINE_EXCEEDED,"Request time out"));break;case Au.HTTP_ERROR:const M=v.getStatus();if(te(Mt,`RPC '${e}' ${h} failed with status:`,M,"response text:",v.getResponseText()),M>0){let z=v.getResponseJson();Array.isArray(z)&&(z=z[0]);const Y=z==null?void 0:z.error;if(Y&&Y.status&&Y.message){const J=(function(Ee){const we=Ee.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(we)>=0?we:$.UNKNOWN})(Y.status);y(new oe(J,Y.message))}else y(new oe($.UNKNOWN,"Server responded with status "+v.getStatus()))}else y(new oe($.UNAVAILABLE,"Connection failed."));break;default:de(9055,{l_:e,streamId:h,h_:v.getLastErrorCode(),P_:v.getLastError()})}}finally{te(Mt,`RPC '${e}' ${h} completed.`)}}));const w=JSON.stringify(o);te(Mt,`RPC '${e}' ${h} sending request:`,o),v.send(t,"POST",w,s,15)}))}T_(e,t,s){const o=Id(),u=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=this.createWebChannelTransport(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(m.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(m.useFetchStreams=!0),this.Go(m.initMessageHeaders,t,s),m.encodeInitMessageHeaders=!0;const v=u.join("");te(Mt,`Creating RPC '${e}' stream ${o}: ${v}`,m);const w=h.createWebChannel(v,m);this.E_(w);let R=!1,M=!1;const z=new zA({Jo:Y=>{M?te(Mt,`Not sending because RPC '${e}' stream ${o} is closed:`,Y):(R||(te(Mt,`Opening RPC '${e}' stream ${o} transport.`),w.open(),R=!0),te(Mt,`RPC '${e}' stream ${o} sending:`,Y),w.send(Y))},Ho:()=>w.close()});return wa(w,Ta.EventType.OPEN,(()=>{M||(te(Mt,`RPC '${e}' stream ${o} transport opened.`),z.i_())})),wa(w,Ta.EventType.CLOSE,(()=>{M||(M=!0,te(Mt,`RPC '${e}' stream ${o} transport closed`),z.o_(),this.I_(w))})),wa(w,Ta.EventType.ERROR,(Y=>{M||(M=!0,ls(Mt,`RPC '${e}' stream ${o} transport errored. Name:`,Y.name,"Message:",Y.message),z.o_(new oe($.UNAVAILABLE,"The operation could not be completed")))})),wa(w,Ta.EventType.MESSAGE,(Y=>{var J;if(!M){const K=Y.data[0];be(!!K,16349);const Ee=K,we=(Ee==null?void 0:Ee.error)||((J=Ee[0])==null?void 0:J.error);if(we){te(Mt,`RPC '${e}' stream ${o} received error:`,we);const Pe=we.status;let Fe=(function(k){const I=ht[k];if(I!==void 0)return O_(I)})(Pe),je=we.message;Pe==="NOT_FOUND"&&je.includes("database")&&je.includes("does not exist")&&je.includes(this.databaseId.database)&&ls(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Fe===void 0&&(Fe=$.INTERNAL,je="Unknown error status: "+Pe+" with message "+we.message),M=!0,z.o_(new oe(Fe,je)),w.close()}else te(Mt,`RPC '${e}' stream ${o} received:`,K),z.__(K)}})),uo.u_(),setTimeout((()=>{z.s_()}),0),z}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return t_()}}/**
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
 */function BA(i){return new uo(i)}function td(){return typeof document<"u"?document:null}/**
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
 */function hc(i){return new WS(i,!0)}/**
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
 */uo.c_=!1;class Q_{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=o,this.V_=u,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&te("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const Bg="PersistentStream";class Y_{constructor(e,t,s,o,u,h,m,y){this.Ci=e,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Q_(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===$.RESOURCE_EXHAUSTED?(Pr(t.toString()),Pr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===t&&this.G_(s,o)}),(s=>{e((()=>{const o=new oe($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return te(Bg,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(te(Bg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class $A extends Y_{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=QS(this.serializer,e),s=(function(u){if(!("targetChange"in u))return me.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?me.min():h.readTime?er(h.readTime):me.min()})(e);return this.listener.H_(t,s)}Z_(e){const t={};t.database=wd(this.serializer),t.addTarget=(function(u,h){let m;const y=h.target;if(m=gd(y)?{documents:XS(u,y)}:{query:ZS(u,y).ft},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=b_(u,h.resumeToken);const v=_d(u,h.expectedCount);v!==null&&(m.expectedCount=v)}else if(h.snapshotVersion.compareTo(me.min())>0){m.readTime=Wu(u,h.snapshotVersion.toTimestamp());const v=_d(u,h.expectedCount);v!==null&&(m.expectedCount=v)}return m})(this.serializer,e);const s=tA(this.serializer,e);s&&(t.labels=s),this.q_(t)}X_(e){const t={};t.database=wd(this.serializer),t.removeTarget=e,this.q_(t)}}class HA extends Y_{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return be(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,be(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){be(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=JS(e.writeResults,e.commitTime),s=er(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=wd(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>YS(this.serializer,s)))};this.q_(t)}}/**
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
 */class qA{}class WA extends qA{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new oe($.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Wo(e,vd(t,s),o,u,h))).catch((u=>{throw u.name==="FirebaseError"?(u.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new oe($.UNKNOWN,u.toString())}))}jo(e,t,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.jo(e,vd(t,s),o,h,m,u))).catch((h=>{throw h.name==="FirebaseError"?(h.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new oe($.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function GA(i,e,t,s){return new WA(i,e,t,s)}class KA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
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
 */const us="RemoteStore";class QA{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=u,this.Aa.Mo((h=>{s.enqueueAndForget((async()=>{fs(this)&&(te(us,"Restarting streams for network reachability change."),await(async function(y){const v=ye(y);v.Ia.add(4),await Ya(v),v.Va.set("Unknown"),v.Ia.delete(4),await dc(v)})(this))}))})),this.Va=new KA(s,o)}}async function dc(i){if(fs(i))for(const e of i.Ra)await e(!0)}async function Ya(i){for(const e of i.Ra)await e(!1)}function J_(i,e){const t=ye(i);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),uf(t)?lf(t):Ao(t).O_()&&af(t,e))}function of(i,e){const t=ye(i),s=Ao(t);t.Ea.delete(e),s.O_()&&X_(t,e),t.Ea.size===0&&(s.O_()?s.L_():fs(t)&&t.Va.set("Unknown"))}function af(i,e){if(i.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(me.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ao(i).Z_(e)}function X_(i,e){i.da.$e(e),Ao(i).X_(e)}function lf(i){i.da=new BS({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),At:e=>i.Ea.get(e)||null,ht:()=>i.datastore.serializer.databaseId}),Ao(i).start(),i.Va.ua()}function uf(i){return fs(i)&&!Ao(i).x_()&&i.Ea.size>0}function fs(i){return ye(i).Ia.size===0}function Z_(i){i.da=void 0}async function YA(i){i.Va.set("Online")}async function JA(i){i.Ea.forEach(((e,t)=>{af(i,e)}))}async function XA(i,e){Z_(i),uf(i)?(i.Va.ha(e),lf(i)):i.Va.set("Unknown")}async function ZA(i,e,t){if(i.Va.set("Online"),e instanceof M_&&e.state===2&&e.cause)try{await(async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Ea.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ea.delete(m),o.da.removeTarget(m))})(i,e)}catch(s){te(us,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ku(i,s)}else if(e instanceof Pu?i.da.Xe(e):e instanceof L_?i.da.st(e):i.da.tt(e),!t.isEqual(me.min()))try{const s=await K_(i.localStore);t.compareTo(s)>=0&&await(function(u,h){const m=u.da.Tt(h);return m.targetChanges.forEach(((y,v)=>{if(y.resumeToken.approximateByteSize()>0){const w=u.Ea.get(v);w&&u.Ea.set(v,w.withResumeToken(y.resumeToken,h))}})),m.targetMismatches.forEach(((y,v)=>{const w=u.Ea.get(y);if(!w)return;u.Ea.set(y,w.withResumeToken(Pt.EMPTY_BYTE_STRING,w.snapshotVersion)),X_(u,y);const R=new fi(w.target,y,v,w.sequenceNumber);af(u,R)})),u.remoteSyncer.applyRemoteEvent(m)})(i,t)}catch(s){te(us,"Failed to raise snapshot:",s),await Ku(i,s)}}async function Ku(i,e,t){if(!So(e))throw e;i.Ia.add(1),await Ya(i),i.Va.set("Offline"),t||(t=()=>K_(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{te(us,"Retrying IndexedDB access"),await t(),i.Ia.delete(1),await dc(i)}))}function ev(i,e){return e().catch((t=>Ku(i,t,e)))}async function fc(i){const e=ye(i),t=Si(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Hd;for(;e1(e);)try{const o=await OA(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,t1(e,o)}catch(o){await Ku(e,o)}tv(e)&&nv(e)}function e1(i){return fs(i)&&i.Ta.length<10}function t1(i,e){i.Ta.push(e);const t=Si(i);t.O_()&&t.Y_&&t.ea(e.mutations)}function tv(i){return fs(i)&&!Si(i).x_()&&i.Ta.length>0}function nv(i){Si(i).start()}async function n1(i){Si(i).ra()}async function r1(i){const e=Si(i);for(const t of i.Ta)e.ea(t.mutations)}async function i1(i,e,t){const s=i.Ta.shift(),o=Xd.from(s,e,t);await ev(i,(()=>i.remoteSyncer.applySuccessfulWrite(o))),await fc(i)}async function s1(i,e){e&&Si(i).Y_&&await(async function(s,o){if((function(h){return US(h)&&h!==$.ABORTED})(o.code)){const u=s.Ta.shift();Si(s).B_(),await ev(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await fc(s)}})(i,e),tv(i)&&nv(i)}async function $g(i,e){const t=ye(i);t.asyncQueue.verifyOperationInProgress(),te(us,"RemoteStore received new credentials");const s=fs(t);t.Ia.add(3),await Ya(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await dc(t)}async function o1(i,e){const t=ye(i);e?(t.Ia.delete(2),await dc(t)):e||(t.Ia.add(2),await Ya(t),t.Va.set("Unknown"))}function Ao(i){return i.ma||(i.ma=(function(t,s,o){const u=ye(t);return u.sa(),new $A(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Zo:YA.bind(null,i),Yo:JA.bind(null,i),t_:XA.bind(null,i),H_:ZA.bind(null,i)}),i.Ra.push((async e=>{e?(i.ma.B_(),uf(i)?lf(i):i.Va.set("Unknown")):(await i.ma.stop(),Z_(i))}))),i.ma}function Si(i){return i.fa||(i.fa=(function(t,s,o){const u=ye(t);return u.sa(),new HA(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Zo:()=>Promise.resolve(),Yo:n1.bind(null,i),t_:s1.bind(null,i),ta:r1.bind(null,i),na:i1.bind(null,i)}),i.Ra.push((async e=>{e?(i.fa.B_(),await fc(i)):(await i.fa.stop(),i.Ta.length>0&&(te(us,`Stopping write stream with ${i.Ta.length} pending writes`),i.Ta=[]))}))),i.fa}/**
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
 */class cf{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Rr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new cf(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new oe($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hf(i,e){if(Pr("AsyncQueue",`${e}: ${i}`),So(i))return new oe($.UNAVAILABLE,`${e}: ${i}`);throw i}/**
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
 */class co{static emptySet(e){return new co(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ue.comparator(t.key,s.key):(t,s)=>ue.comparator(t.key,s.key),this.keyedMap=Ia(),this.sortedSet=new tt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof co)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new co;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class Hg{constructor(){this.ga=new tt(ue.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):de(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class vo{constructor(e,t,s,o,u,h,m,y,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new vo(e,t,co.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&oc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class a1{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class l1{constructor(){this.queries=qg(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=ye(t),u=o.queries;o.queries=qg(),u.forEach(((h,m)=>{for(const y of m.Sa)y.onError(s)}))})(this,new oe($.ABORTED,"Firestore shutting down"))}}function qg(){return new hs((i=>T_(i)),oc)}async function rv(i,e){const t=ye(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.ba()&&e.Da()&&(s=2):(u=new a1,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await t.onListen(o,!0);break;case 1:u.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=hf(h,`Initialization of query '${ro(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.Sa.push(e),e.va(t.onlineState),u.wa&&e.Fa(u.wa)&&df(t)}async function iv(i,e){const t=ye(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.Sa.indexOf(e);h>=0&&(u.Sa.splice(h,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function u1(i,e){const t=ye(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.Sa)m.Fa(o)&&(s=!0);h.wa=o}}s&&df(t)}function c1(i,e,t){const s=ye(i),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(t);s.queries.delete(e)}function df(i){i.Ca.forEach((e=>{e.next()}))}var Sd,Wg;(Wg=Sd||(Sd={})).Ma="default",Wg.Cache="cache";class sv{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new vo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=vo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Sd.Cache}}/**
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
 */class ov{constructor(e){this.key=e}}class av{constructor(e){this.key=e}}class h1{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Ce(),this.mutatedKeys=Ce(),this.eu=I_(e),this.tu=new co(this.eu)}get nu(){return this.Za}ru(e,t){const s=t?t.iu:new Hg,o=t?t.tu:this.tu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const y=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((w,R)=>{const M=o.get(w),z=ac(this.query,R)?R:null,Y=!!M&&this.mutatedKeys.has(M.key),J=!!z&&(z.hasLocalMutations||this.mutatedKeys.has(z.key)&&z.hasCommittedMutations);let K=!1;M&&z?M.data.isEqual(z.data)?Y!==J&&(s.track({type:3,doc:z}),K=!0):this.su(M,z)||(s.track({type:2,doc:z}),K=!0,(y&&this.eu(z,y)>0||v&&this.eu(z,v)<0)&&(m=!0)):!M&&z?(s.track({type:0,doc:z}),K=!0):M&&!z&&(s.track({type:1,doc:M}),K=!0,(y||v)&&(m=!0)),K&&(z?(h=h.add(z),u=J?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{tu:h,iu:s,bs:m,mutatedKeys:u}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((w,R)=>(function(z,Y){const J=K=>{switch(K){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return de(20277,{Vt:K})}};return J(z)-J(Y)})(w.type,R.type)||this.eu(w.doc,R.doc))),this.ou(s),o=o??!1;const m=t&&!o?this._u():[],y=this.Ya.size===0&&this.current&&!o?1:0,v=y!==this.Xa;return this.Xa=y,h.length!==0||v?{snapshot:new vo(this.query,e.tu,u,h,e.mutatedKeys,y===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Hg,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=Ce(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))}));const t=[];return e.forEach((s=>{this.Ya.has(s)||t.push(new av(s))})),this.Ya.forEach((s=>{e.has(s)||t.push(new ov(s))})),t}cu(e){this.Za=e.ks,this.Ya=Ce();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return vo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const ff="SyncEngine";class d1{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class f1{constructor(e){this.key=e,this.hu=!1}}class p1{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new hs((m=>T_(m)),oc),this.Eu=new Map,this.Iu=new Set,this.Ru=new tt(ue.comparator),this.Au=new Map,this.Vu=new tf,this.du={},this.mu=new Map,this.fu=_o.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function m1(i,e,t=!0){const s=fv(i);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await lv(s,e,t,!0),o}async function g1(i,e){const t=fv(i);await lv(t,e,!0,!1)}async function lv(i,e,t,s){const o=await LA(i.localStore,Xn(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await y1(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&J_(i.remoteStore,o),m}async function y1(i,e,t,s,o){i.pu=(R,M,z)=>(async function(J,K,Ee,we){let Pe=K.view.ru(Ee);Pe.bs&&(Pe=await Fg(J.localStore,K.query,!1).then((({documents:k})=>K.view.ru(k,Pe))));const Fe=we&&we.targetChanges.get(K.targetId),je=we&&we.targetMismatches.get(K.targetId)!=null,Ve=K.view.applyChanges(Pe,J.isPrimaryClient,Fe,je);return Kg(J,K.targetId,Ve.au),Ve.snapshot})(i,R,M,z);const u=await Fg(i.localStore,e,!0),h=new h1(e,u.ks),m=h.ru(u.documents),y=Qa.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),v=h.applyChanges(m,i.isPrimaryClient,y);Kg(i,t,v.au);const w=new d1(e,t,h);return i.Tu.set(e,w),i.Eu.has(t)?i.Eu.get(t).push(e):i.Eu.set(t,[e]),v.snapshot}async function _1(i,e,t){const s=ye(i),o=s.Tu.get(e),u=s.Eu.get(o.targetId);if(u.length>1)return s.Eu.set(o.targetId,u.filter((h=>!oc(h,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Td(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&of(s.remoteStore,o.targetId),Ad(s,o.targetId)})).catch(Io)):(Ad(s,o.targetId),await Td(s.localStore,o.targetId,!0))}async function v1(i,e){const t=ye(i),s=t.Tu.get(e),o=t.Eu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),of(t.remoteStore,s.targetId))}async function E1(i,e,t){const s=C1(i);try{const o=await(function(h,m){const y=ye(h),v=Qe.now(),w=m.reduce(((z,Y)=>z.add(Y.key)),Ce());let R,M;return y.persistence.runTransaction("Locally write mutations","readwrite",(z=>{let Y=Nr(),J=Ce();return y.xs.getEntries(z,w).next((K=>{Y=K,Y.forEach(((Ee,we)=>{we.isValidDocument()||(J=J.add(Ee))}))})).next((()=>y.localDocuments.getOverlayedDocuments(z,Y))).next((K=>{R=K;const Ee=[];for(const we of m){const Pe=OS(we,R.get(we.key).overlayedDocument);Pe!=null&&Ee.push(new ds(we.key,Pe,m_(Pe.value.mapValue),Zn.exists(!0)))}return y.mutationQueue.addMutationBatch(z,v,Ee,m)})).next((K=>{M=K;const Ee=K.applyToLocalDocumentSet(R,J);return y.documentOverlayCache.saveOverlays(z,K.batchId,Ee)}))})).then((()=>({batchId:M.batchId,changes:A_(R)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,m,y){let v=h.du[h.currentUser.toKey()];v||(v=new tt(Re)),v=v.insert(m,y),h.du[h.currentUser.toKey()]=v})(s,o.batchId,t),await Ja(s,o.changes),await fc(s.remoteStore)}catch(o){const u=hf(o,"Failed to persist write");t.reject(u)}}async function uv(i,e){const t=ye(i);try{const s=await DA(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const h=t.Au.get(u);h&&(be(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?be(h.hu,14607):o.removedDocuments.size>0&&(be(h.hu,42227),h.hu=!1))})),await Ja(t,s,e)}catch(s){await Io(s)}}function Gg(i,e,t){const s=ye(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach(((u,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const y=ye(h);y.onlineState=m;let v=!1;y.queries.forEach(((w,R)=>{for(const M of R.Sa)M.va(m)&&(v=!0)})),v&&df(y)})(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function w1(i,e,t){const s=ye(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),u=o&&o.key;if(u){let h=new tt(ue.comparator);h=h.insert(u,Ft.newNoDocument(u,me.min()));const m=Ce().add(u),y=new cc(me.min(),new Map,new tt(Re),h,m);await uv(s,y),s.Ru=s.Ru.remove(u),s.Au.delete(e),pf(s)}else await Td(s.localStore,e,!1).then((()=>Ad(s,e,t))).catch(Io)}async function T1(i,e){const t=ye(i),s=e.batch.batchId;try{const o=await xA(t.localStore,e);hv(t,s,null),cv(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Ja(t,o)}catch(o){await Io(o)}}async function I1(i,e,t){const s=ye(i);try{const o=await(function(h,m){const y=ye(h);return y.persistence.runTransaction("Reject batch","readwrite-primary",(v=>{let w;return y.mutationQueue.lookupMutationBatch(v,m).next((R=>(be(R!==null,37113),w=R.keys(),y.mutationQueue.removeMutationBatch(v,R)))).next((()=>y.mutationQueue.performConsistencyCheck(v))).next((()=>y.documentOverlayCache.removeOverlaysForBatchId(v,w,m))).next((()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,w))).next((()=>y.localDocuments.getDocuments(v,w)))}))})(s.localStore,e);hv(s,e,t),cv(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Ja(s,o)}catch(o){await Io(o)}}function cv(i,e){(i.mu.get(e)||[]).forEach((t=>{t.resolve()})),i.mu.delete(e)}function hv(i,e,t){const s=ye(i);let o=s.du[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.du[s.currentUser.toKey()]=o}}function Ad(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Eu.get(e))i.Tu.delete(s),t&&i.Pu.yu(s,t);i.Eu.delete(e),i.isPrimaryClient&&i.Vu.Gr(e).forEach((s=>{i.Vu.containsKey(s)||dv(i,s)}))}function dv(i,e){i.Iu.delete(e.path.canonicalString());const t=i.Ru.get(e);t!==null&&(of(i.remoteStore,t),i.Ru=i.Ru.remove(e),i.Au.delete(t),pf(i))}function Kg(i,e,t){for(const s of t)s instanceof ov?(i.Vu.addReference(s.key,e),S1(i,s)):s instanceof av?(te(ff,"Document no longer in limbo: "+s.key),i.Vu.removeReference(s.key,e),i.Vu.containsKey(s.key)||dv(i,s.key)):de(19791,{wu:s})}function S1(i,e){const t=e.key,s=t.path.canonicalString();i.Ru.get(t)||i.Iu.has(s)||(te(ff,"New document in limbo: "+t),i.Iu.add(s),pf(i))}function pf(i){for(;i.Iu.size>0&&i.Ru.size<i.maxConcurrentLimboResolutions;){const e=i.Iu.values().next().value;i.Iu.delete(e);const t=new ue(Ke.fromString(e)),s=i.fu.next();i.Au.set(s,new f1(t)),i.Ru=i.Ru.insert(t,s),J_(i.remoteStore,new fi(Xn(Qd(t.path)),s,"TargetPurposeLimboResolution",nc.ce))}}async function Ja(i,e,t){const s=ye(i),o=[],u=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach(((m,y)=>{h.push(s.pu(y,e,t).then((v=>{var w;if((v||t)&&s.isPrimaryClient){const R=v?!v.fromCache:(w=t==null?void 0:t.targetChanges.get(y.targetId))==null?void 0:w.current;s.sharedClientState.updateQueryState(y.targetId,R?"current":"not-current")}if(v){o.push(v);const R=rf.Is(y.targetId,v);u.push(R)}})))})),await Promise.all(h),s.Pu.H_(o),await(async function(y,v){const w=ye(y);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(R=>B.forEach(v,(M=>B.forEach(M.Ts,(z=>w.persistence.referenceDelegate.addReference(R,M.targetId,z))).next((()=>B.forEach(M.Es,(z=>w.persistence.referenceDelegate.removeReference(R,M.targetId,z)))))))))}catch(R){if(!So(R))throw R;te(sf,"Failed to update sequence numbers: "+R)}for(const R of v){const M=R.targetId;if(!R.fromCache){const z=w.vs.get(M),Y=z.snapshotVersion,J=z.withLastLimboFreeSnapshotVersion(Y);w.vs=w.vs.insert(M,J)}}})(s.localStore,u))}async function A1(i,e){const t=ye(i);if(!t.currentUser.isEqual(e)){te(ff,"User change. New user:",e.toKey());const s=await G_(t.localStore,e);t.currentUser=e,(function(u,h){u.mu.forEach((m=>{m.forEach((y=>{y.reject(new oe($.CANCELLED,h))}))})),u.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ja(t,s.Ns)}}function R1(i,e){const t=ye(i),s=t.Au.get(e);if(s&&s.hu)return Ce().add(s.key);{let o=Ce();const u=t.Eu.get(e);if(!u)return o;for(const h of u){const m=t.Tu.get(h);o=o.unionWith(m.view.nu)}return o}}function fv(i){const e=ye(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=uv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=R1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=w1.bind(null,e),e.Pu.H_=u1.bind(null,e.eventManager),e.Pu.yu=c1.bind(null,e.eventManager),e}function C1(i){const e=ye(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=T1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=I1.bind(null,e),e}class Qu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=hc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return NA(this.persistence,new CA,e.initialUser,this.serializer)}Cu(e){return new W_(nf.Vi,this.serializer)}Du(e){return new bA}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Qu.provider={build:()=>new Qu};class k1 extends Qu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){be(this.persistence.referenceDelegate instanceof Gu,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new dA(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Qt.withCacheSize(this.cacheSizeBytes):Qt.DEFAULT;return new W_((s=>Gu.Vi(s,t)),this.serializer)}}class Rd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Gg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=A1.bind(null,this.syncEngine),await o1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new l1})()}createDatastore(e){const t=hc(e.databaseInfo.databaseId),s=BA(e.databaseInfo);return GA(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,u,h,m){return new QA(s,o,u,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>Gg(this.syncEngine,t,0)),(function(){return zg.v()?new zg:new FA})())}createSyncEngine(e,t){return(function(o,u,h,m,y,v,w){const R=new p1(o,u,h,m,y,v);return w&&(R.gu=!0),R})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const u=ye(o);te(us,"RemoteStore shutting down."),u.Ia.add(5),await Ya(u),u.Aa.shutdown(),u.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Rd.provider={build:()=>new Rd};/**
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
 */class pv{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Pr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Ai="FirestoreClient";class P1{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=o,this.user=bt.UNAUTHENTICATED,this.clientId=Bd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async h=>{te(Ai,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(te(Ai,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Rr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=hf(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function nd(i,e){i.asyncQueue.verifyOperationInProgress(),te(Ai,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener((async o=>{s.isEqual(o)||(await G_(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>i.terminate())),i._offlineComponents=e}async function Qg(i,e){i.asyncQueue.verifyOperationInProgress();const t=await N1(i);te(Ai,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((s=>$g(e.remoteStore,s))),i.setAppCheckTokenChangeListener(((s,o)=>$g(e.remoteStore,o))),i._onlineComponents=e}async function N1(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){te(Ai,"Using user provided OfflineComponentProvider");try{await nd(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===$.FAILED_PRECONDITION||o.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;ls("Error using user provided cache. Falling back to memory cache: "+t),await nd(i,new Qu)}}else te(Ai,"Using default OfflineComponentProvider"),await nd(i,new k1(void 0));return i._offlineComponents}async function mv(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(te(Ai,"Using user provided OnlineComponentProvider"),await Qg(i,i._uninitializedComponentsProvider._online)):(te(Ai,"Using default OnlineComponentProvider"),await Qg(i,new Rd))),i._onlineComponents}function x1(i){return mv(i).then((e=>e.syncEngine))}async function gv(i){const e=await mv(i),t=e.eventManager;return t.onListen=m1.bind(null,e.syncEngine),t.onUnlisten=_1.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=g1.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=v1.bind(null,e.syncEngine),t}function D1(i,e,t={}){const s=new Rr;return i.asyncQueue.enqueueAndForget((async()=>(function(u,h,m,y,v){const w=new pv({next:M=>{w.Nu(),h.enqueueAndForget((()=>iv(u,R)));const z=M.docs.has(m);!z&&M.fromCache?v.reject(new oe($.UNAVAILABLE,"Failed to get document because the client is offline.")):z&&M.fromCache&&y&&y.source==="server"?v.reject(new oe($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):v.resolve(M)},error:M=>v.reject(M)}),R=new sv(Qd(m.path),w,{includeMetadataChanges:!0,qa:!0});return rv(u,R)})(await gv(i),i.asyncQueue,e,t,s))),s.promise}function V1(i,e,t={}){const s=new Rr;return i.asyncQueue.enqueueAndForget((async()=>(function(u,h,m,y,v){const w=new pv({next:M=>{w.Nu(),h.enqueueAndForget((()=>iv(u,R))),M.fromCache&&y.source==="server"?v.reject(new oe($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):v.resolve(M)},error:M=>v.reject(M)}),R=new sv(m,w,{includeMetadataChanges:!0,qa:!0});return rv(u,R)})(await gv(i),i.asyncQueue,e,t,s))),s.promise}function O1(i,e){const t=new Rr;return i.asyncQueue.enqueueAndForget((async()=>E1(await x1(i),e,t))),t.promise}/**
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
 */function yv(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const L1="ComponentProvider",Yg=new Map;function M1(i,e,t,s,o){return new nS(i,e,t,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,yv(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator,s)}/**
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
 */const _v="firestore.googleapis.com",Jg=!0;class Xg{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new oe($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=_v,this.ssl=Jg}else this.host=e.host,this.ssl=e.ssl??Jg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=q_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<cA)throw new oe($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}qI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yv(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new oe($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new oe($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new oe($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class pc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new oe($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new oe($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new LI;switch(s.type){case"firstParty":return new UI(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new oe($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Yg.get(t);s&&(te(L1,"Removing Datastore"),Yg.delete(t),s.terminate())})(this),Promise.resolve()}}function b1(i,e,t,s={}){var v;i=vi(i,pc);const o=$a(e),u=i._getSettings(),h={...u,emulatorOptions:i._getEmulatorOptions()},m=`${e}:${t}`;o&&hy(`https://${m}`),u.host!==_v&&u.host!==m&&ls("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y={...u,host:m,ssl:o,emulatorOptions:s};if(!is(y,h)&&(i._setSettings(y),s.mockUserToken)){let w,R;if(typeof s.mockUserToken=="string")w=s.mockUserToken,R=bt.MOCK_USER;else{w=uw(s.mockUserToken,(v=i._app)==null?void 0:v.options.projectId);const M=s.mockUserToken.sub||s.mockUserToken.user_id;if(!M)throw new oe($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");R=new bt(M)}i._authCredentials=new MI(new r_(w,R))}}/**
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
 */class mc{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new mc(this.firestore,e,this._query)}}class gt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _i(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gt(this.firestore,e,this._key)}toJSON(){return{type:gt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Ga(t,gt._jsonSchema))return new gt(e,s||null,new ue(Ke.fromString(t.referencePath)))}}gt._jsonSchemaVersion="firestore/documentReference/1.0",gt._jsonSchema={type:dt("string",gt._jsonSchemaVersion),referencePath:dt("string")};class _i extends mc{constructor(e,t,s){super(e,t,Qd(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gt(this.firestore,null,new ue(e))}withConverter(e){return new _i(this.firestore,e,this._path)}}function F1(i,e,...t){if(i=Yt(i),i_("collection","path",e),i instanceof pc){const s=Ke.fromString(e,...t);return dg(s),new _i(i,null,s)}{if(!(i instanceof gt||i instanceof _i))throw new oe($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ke.fromString(e,...t));return dg(s),new _i(i.firestore,null,s)}}function Yu(i,e,...t){if(i=Yt(i),arguments.length===1&&(e=Bd.newId()),i_("doc","path",e),i instanceof pc){const s=Ke.fromString(e,...t);return hg(s),new gt(i,null,new ue(s))}{if(!(i instanceof gt||i instanceof _i))throw new oe($.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ke.fromString(e,...t));return hg(s),new gt(i.firestore,i instanceof _i?i.converter:null,new ue(s))}}/**
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
 */const Zg="AsyncQueue";class ey{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Q_(this,"async_queue_retry"),this._c=()=>{const s=td();s&&te(Zg,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=td();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=td();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Rr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!So(e))throw e;te(Zg,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Pr("INTERNAL UNHANDLED ERROR: ",ty(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=cf.createAndSchedule(this,e,t,s,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&de(47125,{Pc:ty(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function ty(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class Xa extends pc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new ey,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ey(e),this._firestoreClient=void 0,await e}}}function U1(i,e){const t=typeof i=="object"?i:my(),s=typeof i=="string"?i:ju,o=Nd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=aw("firestore");u&&b1(o,...u)}return o}function mf(i){if(i._terminated)throw new oe($.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||j1(i),i._firestoreClient}function j1(i){var s,o,u,h;const e=i._freezeSettings(),t=M1(i._databaseId,((s=i._app)==null?void 0:s.options.appId)||"",i._persistenceKey,(o=i._app)==null?void 0:o.options.apiKey,e);i._componentsProvider||(u=e.localCache)!=null&&u._offlineComponentProvider&&((h=e.localCache)!=null&&h._onlineComponentProvider)&&(i._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),i._firestoreClient=new P1(i._authCredentials,i._appCheckCredentials,i._queue,t,i._componentsProvider&&(function(y){const v=y==null?void 0:y._online.build();return{_offline:y==null?void 0:y._offline.build(v),_online:v}})(i._componentsProvider))}/**
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
 */class gn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new gn(Pt.fromBase64String(e))}catch(t){throw new oe($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new gn(Pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:gn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ga(e,gn._jsonSchema))return gn.fromBase64String(e.bytes)}}gn._jsonSchemaVersion="firestore/bytes/1.0",gn._jsonSchema={type:dt("string",gn._jsonSchemaVersion),bytes:dt("string")};/**
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
 */class vv{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new oe($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new kt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ev{constructor(e){this._methodName=e}}/**
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
 */class tr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new oe($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new oe($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:tr._jsonSchemaVersion}}static fromJSON(e){if(Ga(e,tr._jsonSchema))return new tr(e.latitude,e.longitude)}}tr._jsonSchemaVersion="firestore/geoPoint/1.0",tr._jsonSchema={type:dt("string",tr._jsonSchemaVersion),latitude:dt("number"),longitude:dt("number")};/**
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
 */class xn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:xn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ga(e,xn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new xn(e.vectorValues);throw new oe($.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}xn._jsonSchemaVersion="firestore/vectorValue/1.0",xn._jsonSchema={type:dt("string",xn._jsonSchemaVersion),vectorValues:dt("object")};/**
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
 */const z1=/^__.*__$/;class B1{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new ds(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ka(e,this.data,t,this.fieldTransforms)}}function wv(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw de(40011,{dataSource:i})}}class gf{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Ac(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new gf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.i({path:t,arrayElement:!1});return s.mc(e),s}fc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.i({path:t,arrayElement:!1});return s.Ac(),s}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return Ju(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(wv(this.dataSource)&&z1.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class $1{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||hc(e)}I(e,t,s,o=!1){return new gf({dataSource:e,methodName:t,targetDoc:s,path:kt.emptyPath(),arrayElement:!1,hasConverter:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function H1(i){const e=i._freezeSettings(),t=hc(i._databaseId);return new $1(i._databaseId,!!e.ignoreUndefinedProperties,t)}function q1(i,e,t,s,o,u={}){const h=i.I(u.merge||u.mergeFields?2:0,e,t,o);Av("Data must be an object, but it was:",h,s);const m=Iv(s,h);let y,v;if(u.merge)y=new Pn(h.fieldMask),v=h.fieldTransforms;else if(u.mergeFields){const w=[];for(const R of u.mergeFields){const M=yf(e,R,t);if(!h.contains(M))throw new oe($.INVALID_ARGUMENT,`Field '${M}' is specified in your field mask but missing from your input data.`);K1(w,M)||w.push(M)}y=new Pn(w),v=h.fieldTransforms.filter((R=>y.covers(R.field)))}else y=null,v=h.fieldTransforms;return new B1(new mn(m),y,v)}function Tv(i,e){if(Sv(i=Yt(i)))return Av("Unsupported field value:",e,i),Iv(i,e);if(i instanceof Ev)return(function(s,o){if(!wv(o.dataSource))throw o.yc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.yc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return(function(s,o){const u=[];let h=0;for(const m of s){let y=Tv(m,o.gc(h));y==null&&(y={nullValue:"NULL_VALUE"}),u.push(y),h++}return{arrayValue:{values:u}}})(i,e)}return(function(s,o){if((s=Yt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return kS(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Qe.fromDate(s);return{timestampValue:Wu(o.serializer,u)}}if(s instanceof Qe){const u=new Qe(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Wu(o.serializer,u)}}if(s instanceof tr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof gn)return{bytesValue:b_(o.serializer,s._byteString)};if(s instanceof gt){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.yc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:ef(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof xn)return(function(h,m){const y=h instanceof xn?h.toArray():h;return{mapValue:{fields:{[f_]:{stringValue:p_},[zu]:{arrayValue:{values:y.map((w=>{if(typeof w!="number")throw m.yc("VectorValues must only contain numeric values.");return Yd(m.serializer,w)}))}}}}}})(s,o);if(H_(s))return s._toProto(o.serializer);throw o.yc(`Unsupported field value: ${$d(s)}`)})(i,e)}function Iv(i,e){const t={};return a_(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):cs(i,((s,o)=>{const u=Tv(o,e.dc(s));u!=null&&(t[s]=u)})),{mapValue:{fields:t}}}function Sv(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Qe||i instanceof tr||i instanceof gn||i instanceof gt||i instanceof Ev||i instanceof xn||H_(i))}function Av(i,e,t){if(!Sv(t)||!s_(t)){const s=$d(t);throw s==="an object"?e.yc(i+" a custom object"):e.yc(i+" "+s)}}function yf(i,e,t){if((e=Yt(e))instanceof vv)return e._internalPath;if(typeof e=="string")return G1(i,e);throw Ju("Field path arguments must be of type string or ",i,!1,void 0,t)}const W1=new RegExp("[~\\*/\\[\\]]");function G1(i,e,t){if(e.search(W1)>=0)throw Ju(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new vv(...e.split("."))._internalPath}catch{throw Ju(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Ju(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let y="";return(u||h)&&(y+=" (found",u&&(y+=` in field ${s}`),h&&(y+=` in document ${o}`),y+=")"),new oe($.INVALID_ARGUMENT,m+i+y)}function K1(i,e){return i.some((t=>t.isEqual(e)))}/**
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
 */class Q1{convertValue(e,t="none"){switch(Ii(e)){case 0:return null;case 1:return e.booleanValue;case 2:return at(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ti(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw de(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return cs(e,((o,u)=>{s[o]=this.convertValue(u,t)})),s}convertVectorValue(e){var s,o,u;const t=(u=(o=(s=e.fields)==null?void 0:s[zu].arrayValue)==null?void 0:o.values)==null?void 0:u.map((h=>at(h.doubleValue)));return new xn(t)}convertGeoPoint(e){return new tr(at(e.latitude),at(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=ic(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(La(e));default:return null}}convertTimestamp(e){const t=wi(e);return new Qe(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ke.fromString(e);be($_(s),9688,{name:e});const o=new Ma(s.get(1),s.get(3)),u=new ue(s.popFirst(5));return o.isEqual(t)||Pr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */class Rv extends Q1{constructor(e){super(),this.firestore=e}convertBytes(e){return new gn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new gt(this.firestore,null,t)}}const ny="@firebase/firestore",ry="4.14.0";/**
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
 */class Cv{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Y1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(yf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Y1 extends Cv{data(){return super.data()}}/**
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
 */function J1(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new oe($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function X1(i,e,t){let s;return s=i?t&&(t.merge||t.mergeFields)?i.toFirestore(e,t):i.toFirestore(e):e,s}class Aa{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rs extends Cv{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Nu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(yf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new oe($.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=rs._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}rs._jsonSchemaVersion="firestore/documentSnapshot/1.0",rs._jsonSchema={type:dt("string",rs._jsonSchemaVersion),bundleSource:dt("string","DocumentSnapshot"),bundleName:dt("string"),bundle:dt("string")};class Nu extends rs{data(e={}){return super.data(e)}}class ho{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Aa(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Nu(this._firestore,this._userDataWriter,s.key,s,new Aa(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new oe($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const y=new Nu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Aa(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:y,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const y=new Nu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Aa(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,w=-1;return m.type!==0&&(v=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:Z1(m.type),doc:y,oldIndex:v,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new oe($.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ho._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Bd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Z1(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return de(61501,{type:i})}}/**
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
 */ho._jsonSchemaVersion="firestore/querySnapshot/1.0",ho._jsonSchema={type:dt("string",ho._jsonSchemaVersion),bundleSource:dt("string","QuerySnapshot"),bundleName:dt("string"),bundle:dt("string")};/**
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
 */function eR(i){i=vi(i,gt);const e=vi(i.firestore,Xa),t=mf(e);return D1(t,i._key).then((s=>rR(e,i,s)))}function tR(i){i=vi(i,mc);const e=vi(i.firestore,Xa),t=mf(e),s=new Rv(e);return J1(i._query),V1(t,i._query).then((o=>new ho(e,s,i,o)))}function kv(i,e,t){i=vi(i,gt);const s=vi(i.firestore,Xa),o=X1(i.converter,e,t),u=H1(s);return Pv(s,[q1(u,"setDoc",i._key,o,i.converter!==null,t).toMutation(i._key,Zn.none())])}function nR(i){return Pv(vi(i.firestore,Xa),[new Jd(i._key,Zn.none())])}function Pv(i,e){const t=mf(i);return O1(t,e)}function rR(i,e,t){const s=t.docs.get(e._key),o=new Rv(i);return new rs(i,o,e._key,s,new Aa(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){OI(Eo),fo(new ss("firestore",((s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new Xa(new bI(s.getProvider("auth-internal")),new jI(h,s.getProvider("app-check-internal")),rS(h,o),h);return u={useFetchStreams:t,...u},m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),gi(ny,ry,e),gi(ny,ry,"esm2020")})();var iR="firebase",sR="12.12.1";/**
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
 */gi(iR,sR,"app");const oR={apiKey:"AIzaSyBN-jgFWi10Onb0atB7ty24IhfRSMMxulU",authDomain:"lista-de-compras-pwa-64fac.firebaseapp.com",projectId:"lista-de-compras-pwa-64fac",storageBucket:"lista-de-compras-pwa-64fac.appspot.com",messagingSenderId:"922020197463",appId:"1:922020197463:web:41e9aa3c04bf76c7941f12"},Nv=py(oR),xa=DI(Nv);vT(xa,jy);const xv=new Ir;xv.setCustomParameters({prompt:"select_account"});const ja=U1(Nv);function Dv(){const[i,e]=Ye.useState(null),[t,s]=Ye.useState(!0),o=async m=>{if(m)try{await kv(Yu(ja,"users",m.uid),{nome:m.displayName||"Usuário",email:m.email||"",foto:m.photoURL||"",ultimoLogin:new Date().toISOString()},{merge:!0})}catch(y){console.error("Erro ao salvar usuário:",y)}};return Ye.useEffect(()=>{const m=TT(xa,async y=>{e(y||null),y&&await o(y),s(!1)});return()=>m()},[]),{usuario:i,loading:t,entrarComGoogle:async()=>{try{await zT(xa,xv)}catch(m){console.error("Erro login Google:",m)}},sair:async()=>{try{await by(xa)}catch(m){console.error("Erro logout:",m)}}}}function aR(i){const[e,t]=Ye.useState(null),[s,o]=Ye.useState(!0),u=i==null?void 0:i.uid;return Ye.useEffect(()=>{if(!u){t(null),o(!1);return}(async()=>{o(!0);try{const m=Yu(ja,"users",u,"lista","dados"),y=await eR(m);if(y.exists()){const v=y.data();t({modo:String(v.modo||"planejamento").toLowerCase().trim(),estabelecimento:v.estabelecimento||"",tema:v.tema||"claro",itens:(v.itens||[]).map(w=>({...w,precoUnitario:Number(w.precoUnitario||0),quantidade:Number(w.quantidade||1)}))})}else t({modo:"planejamento",estabelecimento:"",tema:"claro",itens:[]})}catch(m){console.error(m),t({modo:"planejamento",estabelecimento:"",tema:"claro",itens:[]})}finally{o(!1)}})()},[u]),Ye.useEffect(()=>{if(!u||!e||s)return;const h=setTimeout(async()=>{try{const m=Yu(ja,"users",u,"lista","dados");await kv(m,{modo:e.modo,estabelecimento:e.estabelecimento,itens:e.itens,tema:e.tema||"claro"})}catch(m){console.error(m)}},300);return()=>clearTimeout(h)},[e,u,s]),{lista:e,setLista:t,loading:s}}function lR(i){const[e,t]=Ye.useState([]),[s,o]=Ye.useState(!0);return Ye.useEffect(()=>{if(!(i!=null&&i.uid))return;(async()=>{try{o(!0);const m=F1(ja,"users",i.uid,"compras"),v=(await tR(m)).docs.map(w=>({id:w.id,...w.data()}));v.sort((w,R)=>new Date(R.data)-new Date(w.data)),t(v)}catch(m){console.error("Erro histórico:",m)}finally{o(!1)}})()},[i==null?void 0:i.uid]),{historico:e,carregando:s,deletarCompra:async h=>{try{await nR(Yu(ja,"users",i.uid,"compras",h)),t(m=>m.filter(y=>y.id!==h))}catch(m){console.error("Erro ao deletar compra:",m)}}}}/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uR=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),cR=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),iy=i=>{const e=cR(i);return e.charAt(0).toUpperCase()+e.slice(1)},Vv=(...i)=>i.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim(),hR=i=>{for(const e in i)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var dR={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fR=Ye.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:u,iconNode:h,...m},y)=>Ye.createElement("svg",{ref:y,...dR,width:e,height:e,stroke:i,strokeWidth:s?Number(t)*24/Number(e):t,className:Vv("lucide",o),...!u&&!hR(m)&&{"aria-hidden":"true"},...m},[...h.map(([v,w])=>Ye.createElement(v,w)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dr=(i,e)=>{const t=Ye.forwardRef(({className:s,...o},u)=>Ye.createElement(fR,{ref:u,iconNode:e,className:Vv(`lucide-${uR(iy(i))}`,`lucide-${i}`,s),...o}));return t.displayName=iy(i),t};/**
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
 */const RR=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],Ov=Dr("shopping-cart",RR);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CR=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],gc=Dr("trash-2",CR);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kR=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],PR=Dr("user",kR);function NR({estabelecimento:i,aoDefinirEstabelecimento:e,aoLimpar:t,usuario:s,aoLogout:o,tema:u,aoDefinirTema:h}){const m=u||"claro";return U.jsx("header",{className:"w-full bg-emerald-600 text-white shadow-lg",children:U.jsx("div",{className:"w-full px-4 pt-6 pb-6",children:U.jsxs("div",{className:"mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",children:[U.jsxs("div",{className:"flex items-center gap-3",children:[U.jsx("div",{className:"rounded-2xl bg-emerald-700 p-3 shadow-md",children:U.jsx(Ov,{className:"text-white",size:30})}),U.jsxs("div",{children:[U.jsx("h1",{className:"text-2xl sm:text-3xl font-bold leading-tight",children:"Lista de Compras"}),U.jsx("p",{className:"text-xs sm:text-sm text-emerald-100",children:"Organize suas compras"})]})]}),U.jsxs("div",{className:"flex flex-wrap items-center justify-end gap-3 sm:ml-auto",children:[U.jsx("button",{onClick:()=>{const y=m==="escuro"?"claro":"escuro";h==null||h(y)},className:"rounded-xl bg-emerald-700 p-3 transition hover:bg-emerald-800",title:"Tema",children:m==="escuro"?"☀️":"🌙"}),U.jsx("div",{className:"flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-emerald-700 shadow",children:s!=null&&s.photoURL?U.jsx("img",{src:s.photoURL,alt:"Usuário",className:"h-full w-full object-cover",referrerPolicy:"no-referrer"}):U.jsx(PR,{size:20})}),U.jsx("button",{onClick:o,className:"rounded-xl bg-emerald-700 p-3 transition hover:bg-emerald-800",title:"Sair",children:U.jsx(IR,{size:20})}),U.jsx("button",{onClick:t,className:"rounded-xl bg-emerald-700 p-3 transition hover:bg-emerald-800",title:"Limpar lista",children:U.jsx(gc,{size:20})})]})]})})})}function xR({modo:i,aoAlternar:e}){return U.jsx("div",{className:"bg-white rounded-xl shadow-md p-2 mb-4",children:U.jsxs("div",{className:"flex gap-2",children:[U.jsxs("button",{onClick:()=>e("planejamento"),className:`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${i==="planejamento"?"bg-emerald-500 text-white shadow-md":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:[U.jsx(wR,{size:20})," ",U.jsx("span",{children:"Planejamento"})," "]}),U.jsxs("button",{onClick:()=>e("feira"),className:`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${i==="feira"?"bg-emerald-500 text-white shadow-md":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:[U.jsx(Ov,{size:20})," ",U.jsx("span",{children:"Na Feira"})," "]})]})})}function DR({aoAdicionar:i}){const[e,t]=Ye.useState(""),[s,o]=Ye.useState(1);function u(h){h.preventDefault();const m=e.trim().slice(0,80),y=Math.max(1,Math.min(999,Number(s)||1));m&&(i({nome:m,quantidade:y}),t(""),o(1))}return U.jsxs("form",{onSubmit:u,className:"mb-4 flex gap-2",children:[U.jsx("input",{type:"text",maxLength:80,value:e,onChange:h=>t(h.target.value),placeholder:"Produto",className:"flex-1 rounded border p-2"}),U.jsx("input",{type:"number",min:"1",max:"999",value:s,onChange:h=>o(h.target.value),className:"w-20 rounded border p-2"}),U.jsx("button",{className:"rounded bg-green-500 px-4 text-white",children:"+"})]})}function VR({item:i,onAtualizar:e,onRemover:t,onToggleComprado:s}){const[o,u]=Ye.useState(i.quantidade||1),[h,m]=Ye.useState("");Ye.useEffect(()=>{i.quantidade!==void 0&&u(i.quantidade),i.precoUnitario!==void 0&&i.precoUnitario!==null&&m(String(Math.round(i.precoUnitario*100)))},[i.quantidade,i.precoUnitario]);const y=J=>(Number(J||0)/100).toLocaleString("pt-BR",{minimumFractionDigits:2}),v=J=>{const K=J.target.value.replace(/\D/g,"");m(K)},w=()=>{const J=Number(h||0);e(i.id,{precoUnitario:J/100})},R=J=>{const K=Number(J.target.value);u(K),e(i.id,{quantidade:K||1})},M=Number(h||0)/100,Y=(o*M).toLocaleString("pt-BR",{minimumFractionDigits:2});return U.jsx("div",{className:"rounded-lg border p-4 shadow-sm transition-all",children:U.jsxs("div",{className:"flex flex-wrap items-center gap-3 md:flex-nowrap",children:[U.jsx("input",{type:"checkbox",checked:i.comprado,onChange:()=>s(i.id),className:"h-5 w-5 accent-emerald-500"}),U.jsx("span",{className:"flex-1 font-medium",children:i.nome}),U.jsxs("div",{className:"flex items-center gap-2",children:[U.jsx("input",{type:"number",min:"1",value:o,onChange:R,className:"w-16 rounded border px-2 py-1 text-center"}),U.jsx("span",{children:"×"}),U.jsx("span",{children:"R$"}),U.jsx("input",{type:"text",inputMode:"numeric",value:h?y(h):"",onChange:v,onBlur:w,className:"w-24 rounded border px-2 py-1 text-right",placeholder:"0,00"})]}),U.jsxs("div",{className:"min-w-[110px] text-right",children:[U.jsx("span",{className:"block text-xs text-gray-500",children:"Total"}),U.jsxs("span",{className:"font-bold",children:["R$ ",Y]})]}),U.jsx("button",{onClick:()=>t(i.id),className:"text-red-500",children:U.jsx(gc,{size:18})})]})})}function OR({itens:i,modo:e,aoRemover:t,aoAtualizar:s,aoAlternarComprado:o}){return i.length?U.jsx("div",{className:"space-y-4",children:i.map(u=>U.jsx("div",{children:e==="feira"?U.jsx(VR,{item:u,onAtualizar:s,onRemover:t,onToggleComprado:o}):U.jsx("div",{className:"rounded-lg border border-gray-200 bg-white p-4 shadow-sm",children:U.jsxs("div",{className:"flex items-center justify-between gap-3",children:[U.jsxs("div",{className:"flex flex-1 items-center gap-3",children:[U.jsxs("div",{className:"flex items-center gap-3",children:[U.jsx("input",{type:"checkbox",checked:u.comprado,onChange:()=>o(u.id),className:"h-5 w-5 accent-emerald-500"}),U.jsx("p",{className:`font-medium ${u.comprado?"text-gray-400 line-through":"text-gray-800"}`,children:u.nome})]}),U.jsxs("div",{className:"ml-6 flex items-center gap-2",children:[U.jsx("label",{className:"text-sm text-gray-500",children:"Quantidade:"}),U.jsx("input",{type:"number",min:"1",value:u.quantidade,onChange:h=>s(u.id,{quantidade:Number(h.target.value)||1}),className:"w-20 rounded border border-gray-300 px-2 py-1 text-center focus:border-emerald-500 focus:outline-none"})]})]}),U.jsx("button",{onClick:()=>t(u.id),className:"rounded-lg p-2 text-red-500 transition-colors hover:bg-red-50 hover:text-red-700",title:"Remover item",children:U.jsx(gc,{size:18})})]})})},u.id))}):U.jsx("div",{className:"rounded-lg bg-white p-6 text-center shadow",children:U.jsx("p",{className:"text-gray-500",children:"Nenhum item adicionado ainda."})})}function LR(i){return Number(i||0).toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})}function MR({totais:i,modo:e}){const{total:t=0,quantidadeItens:s=0,itensComprados:o=0}=i||{},u=s>0?o/s*100:0;return U.jsxs("div",{className:"bg-white rounded-xl shadow-md p-4 mt-4",children:[U.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-5 gap-4",children:[U.jsxs("div",{className:"bg-emerald-50 rounded-lg p-3 col-span-2 md:col-span-1",children:[U.jsxs("div",{className:"flex items-center gap-2 text-emerald-600 mb-1",children:[U.jsx(vR,{size:18}),U.jsx("span",{className:"text-sm font-medium",children:"Total"})]}),U.jsx("p",{className:"text-2xl font-bold text-emerald-700",children:LR(t)}),U.jsx("p",{className:"text-xs text-emerald-500 mt-1",children:"Valor total da compra"})]}),U.jsxs("div",{className:"bg-blue-50 rounded-lg p-3",children:[U.jsxs("div",{className:"flex items-center gap-2 text-blue-600 mb-1",children:[U.jsx(AR,{size:18}),U.jsx("span",{className:"text-sm font-medium",children:"Itens"})]}),U.jsx("p",{className:"text-2xl font-bold text-blue-700",children:s})]}),U.jsxs("div",{className:"bg-green-50 rounded-lg p-3",children:[U.jsxs("div",{className:"flex items-center gap-2 text-green-600 mb-1",children:[U.jsx(mR,{size:18}),U.jsx("span",{className:"text-sm font-medium",children:"Comprados"})]}),U.jsx("p",{className:"text-2xl font-bold text-green-700",children:o})]}),U.jsxs("div",{className:"bg-orange-50 rounded-lg p-3",children:[U.jsxs("div",{className:"flex items-center gap-2 text-orange-600 mb-1",children:[U.jsx(yR,{size:18}),U.jsx("span",{className:"text-sm font-medium",children:"Restantes"})]}),U.jsx("p",{className:"text-2xl font-bold text-orange-700",children:s-o})]})]}),s>0&&U.jsxs("div",{className:"mt-4",children:[U.jsxs("div",{className:"flex justify-between text-sm text-gray-600 mb-2",children:[U.jsx("span",{children:"Progresso"}),U.jsxs("span",{children:[Math.round(u),"%"]})]}),U.jsx("div",{className:"w-full bg-gray-200 rounded-full h-3",children:U.jsx("div",{className:"bg-emerald-500 h-3 rounded-full transition-all duration-500",style:{width:`${u}%`}})}),U.jsxs("p",{className:"text-xs text-gray-500 mt-2 text-center",children:[o," de ",s," itens"]})]})]})}function bR(){const{usuario:i,entrarComGoogle:e,sair:t}=Dv();return i?U.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-500 to-green-700 p-4",children:U.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm text-center",children:[U.jsx("img",{src:i.photoURL,alt:"Usuário",className:"w-20 h-20 rounded-full mx-auto border-4 border-emerald-500"}),U.jsx("h2",{className:"mt-4 text-lg font-bold text-gray-800",children:i.displayName}),U.jsx("p",{className:"text-sm text-gray-500",children:"Bem-vindo de volta 👋"}),U.jsx("button",{onClick:t,className:"mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl transition",children:"Sair"})]})}):U.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-500 to-green-700 p-4",children:U.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm text-center",children:[U.jsx("div",{className:"text-5xl mb-4",children:"🛒"}),U.jsx("h1",{className:"text-2xl font-bold text-gray-800",children:"Lista de Compras"}),U.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Organize suas compras com facilidade"}),U.jsxs("button",{onClick:e,className:"mt-6 w-full flex items-center justify-center gap-2 bg-white border hover:bg-gray-50 text-gray-700 font-medium py-2 rounded-xl shadow transition",children:[U.jsx("img",{src:"https://www.svgrepo.com/show/475656/google-color.svg",className:"w-5 h-5",alt:"Google"}),"Entrar com Google"]})]})})}function FR({historico:i,carregando:e,deletarCompra:t}){const[s,o]=Ye.useState(null);return e?U.jsx("div",{className:"mt-6 text-center text-gray-600",children:"Carregando histórico..."}):i!=null&&i.length?U.jsx("div",{className:"mt-6 space-y-4",children:i.map(u=>{var m;const h=Number(u.total||0);return U.jsxs("div",{className:"rounded-xl bg-white p-4 shadow",children:[U.jsxs("div",{className:"flex items-start justify-between",children:[U.jsxs("div",{className:"flex-1 cursor-pointer",onClick:()=>o(s===u.id?null:u.id),children:[U.jsx("h3",{className:"font-bold",children:u.estabelecimento}),U.jsx("p",{className:"text-sm text-gray-500",children:new Date(u.data).toLocaleDateString("pt-BR")}),U.jsxs("p",{className:"font-bold text-green-600",children:["R$ ",h.toFixed(2)]}),U.jsx("p",{className:"mt-1 text-xs text-gray-400",children:"Clique para ver os detalhes"})]}),U.jsx("button",{onClick:()=>t(u.id),className:"text-red-500 hover:text-red-700",children:U.jsx(gc,{size:18})})]}),s===u.id&&U.jsxs("div",{className:"mt-3 space-y-2 border-t pt-3",children:[U.jsxs("div",{className:"flex justify-between text-xs text-gray-500",children:[U.jsx("span",{children:"Item"}),U.jsx("span",{children:"Total"})]}),(m=u.itens)==null?void 0:m.map(y=>{const v=Number(y.quantidade||0)*Number(y.precoUnitario||0);return U.jsxs("div",{className:"flex justify-between text-sm",children:[U.jsxs("span",{children:[y.quantidade,"x ",y.nome]}),U.jsxs("span",{children:["R$ ",v.toFixed(2)]})]},y.id)}),U.jsxs("div",{className:"flex justify-between border-t pt-2 font-bold",children:[U.jsx("span",{children:"Total"}),U.jsxs("span",{children:["R$ ",h.toFixed(2)]})]})]})]},u.id)})}):U.jsx("div",{className:"mt-6 text-center text-gray-500",children:"Nenhuma compra encontrada"})}function UR(){const{usuario:i,loading:e}=Dv(),{lista:t,setLista:s}=aR(i),{historico:o,carregando:u,deletarCompra:h}=lR(i),[m,y]=Ye.useState("compras"),[v,w]=Ye.useState("claro");Ye.useEffect(()=>{t&&t.tema&&w(t.tema)},[t]),Ye.useEffect(()=>{document.documentElement.classList.toggle("dark",v==="escuro")},[v]);const R=async()=>{await by(xa)};if(e)return U.jsx("div",{className:"flex min-h-screen items-center justify-center bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white",children:U.jsx("p",{children:"Carregando..."})});if(!i)return U.jsx(bR,{});if(!t||!s)return U.jsx("div",{className:"flex min-h-screen items-center justify-center bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white",children:U.jsx("p",{children:"Carregando lista..."})});const M=t.itens||[];return U.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white",children:[U.jsx(NR,{usuario:i,estabelecimento:t.estabelecimento||"",aoDefinirEstabelecimento:z=>s(Y=>({...Y,estabelecimento:z})),aoLimpar:()=>s(z=>({...z,itens:[]})),aoLogout:R,tema:v,aoDefinirTema:z=>{w(z),s(Y=>({...Y,tema:z}))}}),U.jsxs("main",{className:"mx-auto max-w-4xl space-y-6 px-4 py-6",children:[U.jsxs("div",{className:"flex gap-2",children:[U.jsx("button",{onClick:()=>y("compras"),className:`flex-1 rounded-lg p-3 font-semibold transition ${m==="compras"?"bg-emerald-600 text-white":"bg-gray-100 text-gray-700 dark:bg-slate-800 dark:text-white"}`,children:"Compras"}),U.jsx("button",{onClick:()=>y("historico"),className:`flex-1 rounded-lg p-3 font-semibold transition ${m==="historico"?"bg-emerald-600 text-white":"bg-gray-100 text-gray-700 dark:bg-slate-800 dark:text-white"}`,children:"Histórico"})]}),m==="compras"&&U.jsxs(U.Fragment,{children:[U.jsx(xR,{modo:t.modo,aoAlternar:z=>s(Y=>({...Y,modo:z}))}),U.jsx(DR,{aoAdicionar:z=>s(Y=>({...Y,itens:[...Y.itens,{id:crypto.randomUUID(),nome:z.nome,quantidade:z.quantidade,precoUnitario:0,comprado:!1}]}))}),U.jsx(OR,{itens:M}),U.jsx(MR,{totais:{total:M.reduce((z,Y)=>z+(Y.quantidade||0)*(Y.precoUnitario||0),0),quantidadeItens:M.length,itensComprados:M.filter(z=>z.comprado).length}})]}),m==="historico"&&U.jsx(FR,{historico:o,carregando:u,deletarCompra:h})]})]})}const Lv=document.getElementById("root");if(!Lv)throw new Error("Elemento #root não encontrado no index.html");const jR=XE.createRoot(Lv);jR.render(U.jsx(UR,{}));
