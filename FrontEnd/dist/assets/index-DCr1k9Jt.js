(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function zE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Zy={exports:{}},ru={},e_={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zo=Symbol.for("react.element"),$E=Symbol.for("react.portal"),BE=Symbol.for("react.fragment"),HE=Symbol.for("react.strict_mode"),WE=Symbol.for("react.profiler"),qE=Symbol.for("react.provider"),KE=Symbol.for("react.context"),GE=Symbol.for("react.forward_ref"),QE=Symbol.for("react.suspense"),XE=Symbol.for("react.memo"),YE=Symbol.for("react.lazy"),sm=Symbol.iterator;function JE(t){return t===null||typeof t!="object"?null:(t=sm&&t[sm]||t["@@iterator"],typeof t=="function"?t:null)}var t_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},n_=Object.assign,r_={};function Zi(t,e,n){this.props=t,this.context=e,this.refs=r_,this.updater=n||t_}Zi.prototype.isReactComponent={};Zi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Zi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function i_(){}i_.prototype=Zi.prototype;function wd(t,e,n){this.props=t,this.context=e,this.refs=r_,this.updater=n||t_}var Ed=wd.prototype=new i_;Ed.constructor=wd;n_(Ed,Zi.prototype);Ed.isPureReactComponent=!0;var om=Array.isArray,s_=Object.prototype.hasOwnProperty,Td={current:null},o_={key:!0,ref:!0,__self:!0,__source:!0};function a_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)s_.call(e,r)&&!o_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:zo,type:t,key:s,ref:o,props:i,_owner:Td.current}}function ZE(t,e){return{$$typeof:zo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Id(t){return typeof t=="object"&&t!==null&&t.$$typeof===zo}function eT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var am=/\/+/g;function uc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?eT(""+t.key):e.toString(36)}function Ma(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case zo:case $E:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+uc(o,0):r,om(i)?(n="",t!=null&&(n=t.replace(am,"$&/")+"/"),Ma(i,e,n,"",function(c){return c})):i!=null&&(Id(i)&&(i=ZE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(am,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",om(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+uc(s,l);o+=Ma(s,e,n,u,i)}else if(u=JE(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+uc(s,l++),o+=Ma(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function fa(t,e,n){if(t==null)return t;var r=[],i=0;return Ma(t,r,"","",function(s){return e.call(n,s,i++)}),r}function tT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ut={current:null},ja={transition:null},nT={ReactCurrentDispatcher:ut,ReactCurrentBatchConfig:ja,ReactCurrentOwner:Td};function l_(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:fa,forEach:function(t,e,n){fa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return fa(t,function(){e++}),e},toArray:function(t){return fa(t,function(e){return e})||[]},only:function(t){if(!Id(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=Zi;te.Fragment=BE;te.Profiler=WE;te.PureComponent=wd;te.StrictMode=HE;te.Suspense=QE;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nT;te.act=l_;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=n_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Td.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)s_.call(e,u)&&!o_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:zo,type:t.type,key:i,ref:s,props:r,_owner:o}};te.createContext=function(t){return t={$$typeof:KE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:qE,_context:t},t.Consumer=t};te.createElement=a_;te.createFactory=function(t){var e=a_.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:GE,render:t}};te.isValidElement=Id;te.lazy=function(t){return{$$typeof:YE,_payload:{_status:-1,_result:t},_init:tT}};te.memo=function(t,e){return{$$typeof:XE,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=ja.transition;ja.transition={};try{t()}finally{ja.transition=e}};te.unstable_act=l_;te.useCallback=function(t,e){return ut.current.useCallback(t,e)};te.useContext=function(t){return ut.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return ut.current.useDeferredValue(t)};te.useEffect=function(t,e){return ut.current.useEffect(t,e)};te.useId=function(){return ut.current.useId()};te.useImperativeHandle=function(t,e,n){return ut.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return ut.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return ut.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return ut.current.useMemo(t,e)};te.useReducer=function(t,e,n){return ut.current.useReducer(t,e,n)};te.useRef=function(t){return ut.current.useRef(t)};te.useState=function(t){return ut.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return ut.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return ut.current.useTransition()};te.version="18.3.1";e_.exports=te;var Z=e_.exports;const u_=zE(Z);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rT=Z,iT=Symbol.for("react.element"),sT=Symbol.for("react.fragment"),oT=Object.prototype.hasOwnProperty,aT=rT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lT={key:!0,ref:!0,__self:!0,__source:!0};function c_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)oT.call(e,r)&&!lT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:iT,type:t,key:s,ref:o,props:i,_owner:aT.current}}ru.Fragment=sT;ru.jsx=c_;ru.jsxs=c_;Zy.exports=ru;var d=Zy.exports,Jc={},h_={exports:{}},St={},d_={exports:{}},f_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,G){var Y=z.length;z.push(G);e:for(;0<Y;){var ye=Y-1>>>1,Ae=z[ye];if(0<i(Ae,G))z[ye]=G,z[Y]=Ae,Y=ye;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var G=z[0],Y=z.pop();if(Y!==G){z[0]=Y;e:for(var ye=0,Ae=z.length,Cr=Ae>>>1;ye<Cr;){var At=2*(ye+1)-1,kr=z[At],Ot=At+1,Nn=z[Ot];if(0>i(kr,Y))Ot<Ae&&0>i(Nn,kr)?(z[ye]=Nn,z[Ot]=Y,ye=Ot):(z[ye]=kr,z[At]=Y,ye=At);else if(Ot<Ae&&0>i(Nn,Y))z[ye]=Nn,z[Ot]=Y,ye=Ot;else break e}}return G}function i(z,G){var Y=z.sortIndex-G.sortIndex;return Y!==0?Y:z.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],p=1,m=null,g=3,C=!1,N=!1,R=!1,b=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(z){for(var G=n(c);G!==null;){if(G.callback===null)r(c);else if(G.startTime<=z)r(c),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(c)}}function O(z){if(R=!1,x(z),!N)if(n(u)!==null)N=!0,as(U);else{var G=n(c);G!==null&&ls(O,G.startTime-z)}}function U(z,G){N=!1,R&&(R=!1,T(_),_=-1),C=!0;var Y=g;try{for(x(G),m=n(u);m!==null&&(!(m.expirationTime>G)||z&&!A());){var ye=m.callback;if(typeof ye=="function"){m.callback=null,g=m.priorityLevel;var Ae=ye(m.expirationTime<=G);G=t.unstable_now(),typeof Ae=="function"?m.callback=Ae:m===n(u)&&r(u),x(G)}else r(u);m=n(u)}if(m!==null)var Cr=!0;else{var At=n(c);At!==null&&ls(O,At.startTime-G),Cr=!1}return Cr}finally{m=null,g=Y,C=!1}}var F=!1,w=null,_=-1,E=5,S=-1;function A(){return!(t.unstable_now()-S<E)}function k(){if(w!==null){var z=t.unstable_now();S=z;var G=!0;try{G=w(!0,z)}finally{G?I():(F=!1,w=null)}}else F=!1}var I;if(typeof v=="function")I=function(){v(k)};else if(typeof MessageChannel<"u"){var He=new MessageChannel,cn=He.port2;He.port1.onmessage=k,I=function(){cn.postMessage(null)}}else I=function(){b(k,0)};function as(z){w=z,F||(F=!0,I())}function ls(z,G){_=b(function(){z(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){N||C||(N=!0,as(U))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var Y=g;g=G;try{return z()}finally{g=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,G){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Y=g;g=z;try{return G()}finally{g=Y}},t.unstable_scheduleCallback=function(z,G,Y){var ye=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ye+Y:ye):Y=ye,z){case 1:var Ae=-1;break;case 2:Ae=250;break;case 5:Ae=1073741823;break;case 4:Ae=1e4;break;default:Ae=5e3}return Ae=Y+Ae,z={id:p++,callback:G,priorityLevel:z,startTime:Y,expirationTime:Ae,sortIndex:-1},Y>ye?(z.sortIndex=Y,e(c,z),n(u)===null&&z===n(c)&&(R?(T(_),_=-1):R=!0,ls(O,Y-ye))):(z.sortIndex=Ae,e(u,z),N||C||(N=!0,as(U))),z},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(z){var G=g;return function(){var Y=g;g=G;try{return z.apply(this,arguments)}finally{g=Y}}}})(f_);d_.exports=f_;var uT=d_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cT=Z,It=uT;function M(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p_=new Set,ho={};function ni(t,e){Fi(t,e),Fi(t+"Capture",e)}function Fi(t,e){for(ho[t]=e,t=0;t<e.length;t++)p_.add(e[t])}var vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zc=Object.prototype.hasOwnProperty,hT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lm={},um={};function dT(t){return Zc.call(um,t)?!0:Zc.call(lm,t)?!1:hT.test(t)?um[t]=!0:(lm[t]=!0,!1)}function fT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function pT(t,e,n,r){if(e===null||typeof e>"u"||fT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ct(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qe[t]=new ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qe[e]=new ct(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qe[t]=new ct(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qe[t]=new ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qe[t]=new ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qe[t]=new ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qe[t]=new ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qe[t]=new ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qe[t]=new ct(t,5,!1,t.toLowerCase(),null,!1,!1)});var Sd=/[\-:]([a-z])/g;function xd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Sd,xd);Qe[e]=new ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Sd,xd);Qe[e]=new ct(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Sd,xd);Qe[e]=new ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qe[t]=new ct(t,1,!1,t.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qe[t]=new ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ad(t,e,n,r){var i=Qe.hasOwnProperty(e)?Qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(pT(e,n,i,r)&&(n=null),r||i===null?dT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var kn=cT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pa=Symbol.for("react.element"),gi=Symbol.for("react.portal"),yi=Symbol.for("react.fragment"),Cd=Symbol.for("react.strict_mode"),eh=Symbol.for("react.profiler"),m_=Symbol.for("react.provider"),g_=Symbol.for("react.context"),kd=Symbol.for("react.forward_ref"),th=Symbol.for("react.suspense"),nh=Symbol.for("react.suspense_list"),Pd=Symbol.for("react.memo"),Fn=Symbol.for("react.lazy"),y_=Symbol.for("react.offscreen"),cm=Symbol.iterator;function xs(t){return t===null||typeof t!="object"?null:(t=cm&&t[cm]||t["@@iterator"],typeof t=="function"?t:null)}var Te=Object.assign,cc;function Ds(t){if(cc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);cc=e&&e[1]||""}return`
`+cc+t}var hc=!1;function dc(t,e){if(!t||hc)return"";hc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{hc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ds(t):""}function mT(t){switch(t.tag){case 5:return Ds(t.type);case 16:return Ds("Lazy");case 13:return Ds("Suspense");case 19:return Ds("SuspenseList");case 0:case 2:case 15:return t=dc(t.type,!1),t;case 11:return t=dc(t.type.render,!1),t;case 1:return t=dc(t.type,!0),t;default:return""}}function rh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case yi:return"Fragment";case gi:return"Portal";case eh:return"Profiler";case Cd:return"StrictMode";case th:return"Suspense";case nh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case g_:return(t.displayName||"Context")+".Consumer";case m_:return(t._context.displayName||"Context")+".Provider";case kd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Pd:return e=t.displayName||null,e!==null?e:rh(t.type)||"Memo";case Fn:e=t._payload,t=t._init;try{return rh(t(e))}catch{}}return null}function gT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rh(e);case 8:return e===Cd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ur(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function __(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function yT(t){var e=__(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ma(t){t._valueTracker||(t._valueTracker=yT(t))}function v_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=__(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ll(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ih(t,e){var n=e.checked;return Te({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function hm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ur(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function w_(t,e){e=e.checked,e!=null&&Ad(t,"checked",e,!1)}function sh(t,e){w_(t,e);var n=ur(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?oh(t,e.type,n):e.hasOwnProperty("defaultValue")&&oh(t,e.type,ur(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function dm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function oh(t,e,n){(e!=="number"||ll(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Os=Array.isArray;function Ni(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ur(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ah(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(M(91));return Te({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function fm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(M(92));if(Os(n)){if(1<n.length)throw Error(M(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ur(n)}}function E_(t,e){var n=ur(e.value),r=ur(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function pm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function T_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?T_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ga,I_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ga=ga||document.createElement("div"),ga.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ga.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function fo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var qs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_T=["Webkit","ms","Moz","O"];Object.keys(qs).forEach(function(t){_T.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),qs[e]=qs[t]})});function S_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||qs.hasOwnProperty(t)&&qs[t]?(""+e).trim():e+"px"}function x_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=S_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var vT=Te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function uh(t,e){if(e){if(vT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(M(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(M(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(M(61))}if(e.style!=null&&typeof e.style!="object")throw Error(M(62))}}function ch(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hh=null;function Nd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var dh=null,Ri=null,bi=null;function mm(t){if(t=Ho(t)){if(typeof dh!="function")throw Error(M(280));var e=t.stateNode;e&&(e=lu(e),dh(t.stateNode,t.type,e))}}function A_(t){Ri?bi?bi.push(t):bi=[t]:Ri=t}function C_(){if(Ri){var t=Ri,e=bi;if(bi=Ri=null,mm(t),e)for(t=0;t<e.length;t++)mm(e[t])}}function k_(t,e){return t(e)}function P_(){}var fc=!1;function N_(t,e,n){if(fc)return t(e,n);fc=!0;try{return k_(t,e,n)}finally{fc=!1,(Ri!==null||bi!==null)&&(P_(),C_())}}function po(t,e){var n=t.stateNode;if(n===null)return null;var r=lu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(M(231,e,typeof n));return n}var fh=!1;if(vn)try{var As={};Object.defineProperty(As,"passive",{get:function(){fh=!0}}),window.addEventListener("test",As,As),window.removeEventListener("test",As,As)}catch{fh=!1}function wT(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(p){this.onError(p)}}var Ks=!1,ul=null,cl=!1,ph=null,ET={onError:function(t){Ks=!0,ul=t}};function TT(t,e,n,r,i,s,o,l,u){Ks=!1,ul=null,wT.apply(ET,arguments)}function IT(t,e,n,r,i,s,o,l,u){if(TT.apply(this,arguments),Ks){if(Ks){var c=ul;Ks=!1,ul=null}else throw Error(M(198));cl||(cl=!0,ph=c)}}function ri(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function R_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function gm(t){if(ri(t)!==t)throw Error(M(188))}function ST(t){var e=t.alternate;if(!e){if(e=ri(t),e===null)throw Error(M(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return gm(i),t;if(s===r)return gm(i),e;s=s.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?t:e}function b_(t){return t=ST(t),t!==null?D_(t):null}function D_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=D_(t);if(e!==null)return e;t=t.sibling}return null}var O_=It.unstable_scheduleCallback,ym=It.unstable_cancelCallback,xT=It.unstable_shouldYield,AT=It.unstable_requestPaint,ke=It.unstable_now,CT=It.unstable_getCurrentPriorityLevel,Rd=It.unstable_ImmediatePriority,V_=It.unstable_UserBlockingPriority,hl=It.unstable_NormalPriority,kT=It.unstable_LowPriority,L_=It.unstable_IdlePriority,iu=null,Yt=null;function PT(t){if(Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(iu,t,void 0,(t.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:bT,NT=Math.log,RT=Math.LN2;function bT(t){return t>>>=0,t===0?32:31-(NT(t)/RT|0)|0}var ya=64,_a=4194304;function Vs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function dl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Vs(l):(s&=o,s!==0&&(r=Vs(s)))}else o=n&~i,o!==0?r=Vs(o):s!==0&&(r=Vs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ut(e),i=1<<n,r|=t[n],e&=~i;return r}function DT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function OT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ut(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=DT(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function mh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function M_(){var t=ya;return ya<<=1,!(ya&4194240)&&(ya=64),t}function pc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function $o(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ut(e),t[e]=n}function VT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ut(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function bd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ut(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ue=0;function j_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var U_,Dd,F_,z_,$_,gh=!1,va=[],Yn=null,Jn=null,Zn=null,mo=new Map,go=new Map,$n=[],LT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _m(t,e){switch(t){case"focusin":case"focusout":Yn=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":Zn=null;break;case"pointerover":case"pointerout":mo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":go.delete(e.pointerId)}}function Cs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ho(e),e!==null&&Dd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function MT(t,e,n,r,i){switch(e){case"focusin":return Yn=Cs(Yn,t,e,n,r,i),!0;case"dragenter":return Jn=Cs(Jn,t,e,n,r,i),!0;case"mouseover":return Zn=Cs(Zn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return mo.set(s,Cs(mo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,go.set(s,Cs(go.get(s)||null,t,e,n,r,i)),!0}return!1}function B_(t){var e=Mr(t.target);if(e!==null){var n=ri(e);if(n!==null){if(e=n.tag,e===13){if(e=R_(n),e!==null){t.blockedOn=e,$_(t.priority,function(){F_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ua(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=yh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);hh=r,n.target.dispatchEvent(r),hh=null}else return e=Ho(n),e!==null&&Dd(e),t.blockedOn=n,!1;e.shift()}return!0}function vm(t,e,n){Ua(t)&&n.delete(e)}function jT(){gh=!1,Yn!==null&&Ua(Yn)&&(Yn=null),Jn!==null&&Ua(Jn)&&(Jn=null),Zn!==null&&Ua(Zn)&&(Zn=null),mo.forEach(vm),go.forEach(vm)}function ks(t,e){t.blockedOn===e&&(t.blockedOn=null,gh||(gh=!0,It.unstable_scheduleCallback(It.unstable_NormalPriority,jT)))}function yo(t){function e(i){return ks(i,t)}if(0<va.length){ks(va[0],t);for(var n=1;n<va.length;n++){var r=va[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Yn!==null&&ks(Yn,t),Jn!==null&&ks(Jn,t),Zn!==null&&ks(Zn,t),mo.forEach(e),go.forEach(e),n=0;n<$n.length;n++)r=$n[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<$n.length&&(n=$n[0],n.blockedOn===null);)B_(n),n.blockedOn===null&&$n.shift()}var Di=kn.ReactCurrentBatchConfig,fl=!0;function UT(t,e,n,r){var i=ue,s=Di.transition;Di.transition=null;try{ue=1,Od(t,e,n,r)}finally{ue=i,Di.transition=s}}function FT(t,e,n,r){var i=ue,s=Di.transition;Di.transition=null;try{ue=4,Od(t,e,n,r)}finally{ue=i,Di.transition=s}}function Od(t,e,n,r){if(fl){var i=yh(t,e,n,r);if(i===null)Sc(t,e,r,pl,n),_m(t,r);else if(MT(i,t,e,n,r))r.stopPropagation();else if(_m(t,r),e&4&&-1<LT.indexOf(t)){for(;i!==null;){var s=Ho(i);if(s!==null&&U_(s),s=yh(t,e,n,r),s===null&&Sc(t,e,r,pl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Sc(t,e,r,null,n)}}var pl=null;function yh(t,e,n,r){if(pl=null,t=Nd(r),t=Mr(t),t!==null)if(e=ri(t),e===null)t=null;else if(n=e.tag,n===13){if(t=R_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return pl=t,null}function H_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(CT()){case Rd:return 1;case V_:return 4;case hl:case kT:return 16;case L_:return 536870912;default:return 16}default:return 16}}var Gn=null,Vd=null,Fa=null;function W_(){if(Fa)return Fa;var t,e=Vd,n=e.length,r,i="value"in Gn?Gn.value:Gn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Fa=i.slice(t,1<r?1-r:void 0)}function za(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function wa(){return!0}function wm(){return!1}function xt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?wa:wm,this.isPropagationStopped=wm,this}return Te(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wa)},persist:function(){},isPersistent:wa}),e}var es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ld=xt(es),Bo=Te({},es,{view:0,detail:0}),zT=xt(Bo),mc,gc,Ps,su=Te({},Bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Md,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ps&&(Ps&&t.type==="mousemove"?(mc=t.screenX-Ps.screenX,gc=t.screenY-Ps.screenY):gc=mc=0,Ps=t),mc)},movementY:function(t){return"movementY"in t?t.movementY:gc}}),Em=xt(su),$T=Te({},su,{dataTransfer:0}),BT=xt($T),HT=Te({},Bo,{relatedTarget:0}),yc=xt(HT),WT=Te({},es,{animationName:0,elapsedTime:0,pseudoElement:0}),qT=xt(WT),KT=Te({},es,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),GT=xt(KT),QT=Te({},es,{data:0}),Tm=xt(QT),XT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},YT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},JT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ZT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=JT[t])?!!e[t]:!1}function Md(){return ZT}var eI=Te({},Bo,{key:function(t){if(t.key){var e=XT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=za(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?YT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Md,charCode:function(t){return t.type==="keypress"?za(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?za(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),tI=xt(eI),nI=Te({},su,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Im=xt(nI),rI=Te({},Bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Md}),iI=xt(rI),sI=Te({},es,{propertyName:0,elapsedTime:0,pseudoElement:0}),oI=xt(sI),aI=Te({},su,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),lI=xt(aI),uI=[9,13,27,32],jd=vn&&"CompositionEvent"in window,Gs=null;vn&&"documentMode"in document&&(Gs=document.documentMode);var cI=vn&&"TextEvent"in window&&!Gs,q_=vn&&(!jd||Gs&&8<Gs&&11>=Gs),Sm=" ",xm=!1;function K_(t,e){switch(t){case"keyup":return uI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function G_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _i=!1;function hI(t,e){switch(t){case"compositionend":return G_(e);case"keypress":return e.which!==32?null:(xm=!0,Sm);case"textInput":return t=e.data,t===Sm&&xm?null:t;default:return null}}function dI(t,e){if(_i)return t==="compositionend"||!jd&&K_(t,e)?(t=W_(),Fa=Vd=Gn=null,_i=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return q_&&e.locale!=="ko"?null:e.data;default:return null}}var fI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Am(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!fI[t.type]:e==="textarea"}function Q_(t,e,n,r){A_(r),e=ml(e,"onChange"),0<e.length&&(n=new Ld("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Qs=null,_o=null;function pI(t){ov(t,0)}function ou(t){var e=Ei(t);if(v_(e))return t}function mI(t,e){if(t==="change")return e}var X_=!1;if(vn){var _c;if(vn){var vc="oninput"in document;if(!vc){var Cm=document.createElement("div");Cm.setAttribute("oninput","return;"),vc=typeof Cm.oninput=="function"}_c=vc}else _c=!1;X_=_c&&(!document.documentMode||9<document.documentMode)}function km(){Qs&&(Qs.detachEvent("onpropertychange",Y_),_o=Qs=null)}function Y_(t){if(t.propertyName==="value"&&ou(_o)){var e=[];Q_(e,_o,t,Nd(t)),N_(pI,e)}}function gI(t,e,n){t==="focusin"?(km(),Qs=e,_o=n,Qs.attachEvent("onpropertychange",Y_)):t==="focusout"&&km()}function yI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ou(_o)}function _I(t,e){if(t==="click")return ou(e)}function vI(t,e){if(t==="input"||t==="change")return ou(e)}function wI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zt=typeof Object.is=="function"?Object.is:wI;function vo(t,e){if(zt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Zc.call(e,i)||!zt(t[i],e[i]))return!1}return!0}function Pm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Nm(t,e){var n=Pm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pm(n)}}function J_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?J_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Z_(){for(var t=window,e=ll();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ll(t.document)}return e}function Ud(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function EI(t){var e=Z_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&J_(n.ownerDocument.documentElement,n)){if(r!==null&&Ud(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Nm(n,s);var o=Nm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var TI=vn&&"documentMode"in document&&11>=document.documentMode,vi=null,_h=null,Xs=null,vh=!1;function Rm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vh||vi==null||vi!==ll(r)||(r=vi,"selectionStart"in r&&Ud(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xs&&vo(Xs,r)||(Xs=r,r=ml(_h,"onSelect"),0<r.length&&(e=new Ld("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=vi)))}function Ea(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var wi={animationend:Ea("Animation","AnimationEnd"),animationiteration:Ea("Animation","AnimationIteration"),animationstart:Ea("Animation","AnimationStart"),transitionend:Ea("Transition","TransitionEnd")},wc={},ev={};vn&&(ev=document.createElement("div").style,"AnimationEvent"in window||(delete wi.animationend.animation,delete wi.animationiteration.animation,delete wi.animationstart.animation),"TransitionEvent"in window||delete wi.transitionend.transition);function au(t){if(wc[t])return wc[t];if(!wi[t])return t;var e=wi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ev)return wc[t]=e[n];return t}var tv=au("animationend"),nv=au("animationiteration"),rv=au("animationstart"),iv=au("transitionend"),sv=new Map,bm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _r(t,e){sv.set(t,e),ni(e,[t])}for(var Ec=0;Ec<bm.length;Ec++){var Tc=bm[Ec],II=Tc.toLowerCase(),SI=Tc[0].toUpperCase()+Tc.slice(1);_r(II,"on"+SI)}_r(tv,"onAnimationEnd");_r(nv,"onAnimationIteration");_r(rv,"onAnimationStart");_r("dblclick","onDoubleClick");_r("focusin","onFocus");_r("focusout","onBlur");_r(iv,"onTransitionEnd");Fi("onMouseEnter",["mouseout","mouseover"]);Fi("onMouseLeave",["mouseout","mouseover"]);Fi("onPointerEnter",["pointerout","pointerover"]);Fi("onPointerLeave",["pointerout","pointerover"]);ni("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ni("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ni("onBeforeInput",["compositionend","keypress","textInput","paste"]);ni("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ni("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ni("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ls="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ls));function Dm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,IT(r,e,void 0,t),t.currentTarget=null}function ov(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Dm(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Dm(i,l,c),s=u}}}if(cl)throw t=ph,cl=!1,ph=null,t}function fe(t,e){var n=e[Sh];n===void 0&&(n=e[Sh]=new Set);var r=t+"__bubble";n.has(r)||(av(e,t,2,!1),n.add(r))}function Ic(t,e,n){var r=0;e&&(r|=4),av(n,t,r,e)}var Ta="_reactListening"+Math.random().toString(36).slice(2);function wo(t){if(!t[Ta]){t[Ta]=!0,p_.forEach(function(n){n!=="selectionchange"&&(xI.has(n)||Ic(n,!1,t),Ic(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ta]||(e[Ta]=!0,Ic("selectionchange",!1,e))}}function av(t,e,n,r){switch(H_(e)){case 1:var i=UT;break;case 4:i=FT;break;default:i=Od}n=i.bind(null,e,n,t),i=void 0,!fh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Sc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Mr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}N_(function(){var c=s,p=Nd(n),m=[];e:{var g=sv.get(t);if(g!==void 0){var C=Ld,N=t;switch(t){case"keypress":if(za(n)===0)break e;case"keydown":case"keyup":C=tI;break;case"focusin":N="focus",C=yc;break;case"focusout":N="blur",C=yc;break;case"beforeblur":case"afterblur":C=yc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Em;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=BT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=iI;break;case tv:case nv:case rv:C=qT;break;case iv:C=oI;break;case"scroll":C=zT;break;case"wheel":C=lI;break;case"copy":case"cut":case"paste":C=GT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=Im}var R=(e&4)!==0,b=!R&&t==="scroll",T=R?g!==null?g+"Capture":null:g;R=[];for(var v=c,x;v!==null;){x=v;var O=x.stateNode;if(x.tag===5&&O!==null&&(x=O,T!==null&&(O=po(v,T),O!=null&&R.push(Eo(v,O,x)))),b)break;v=v.return}0<R.length&&(g=new C(g,N,null,n,p),m.push({event:g,listeners:R}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",C=t==="mouseout"||t==="pointerout",g&&n!==hh&&(N=n.relatedTarget||n.fromElement)&&(Mr(N)||N[wn]))break e;if((C||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,C?(N=n.relatedTarget||n.toElement,C=c,N=N?Mr(N):null,N!==null&&(b=ri(N),N!==b||N.tag!==5&&N.tag!==6)&&(N=null)):(C=null,N=c),C!==N)){if(R=Em,O="onMouseLeave",T="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(R=Im,O="onPointerLeave",T="onPointerEnter",v="pointer"),b=C==null?g:Ei(C),x=N==null?g:Ei(N),g=new R(O,v+"leave",C,n,p),g.target=b,g.relatedTarget=x,O=null,Mr(p)===c&&(R=new R(T,v+"enter",N,n,p),R.target=x,R.relatedTarget=b,O=R),b=O,C&&N)t:{for(R=C,T=N,v=0,x=R;x;x=hi(x))v++;for(x=0,O=T;O;O=hi(O))x++;for(;0<v-x;)R=hi(R),v--;for(;0<x-v;)T=hi(T),x--;for(;v--;){if(R===T||T!==null&&R===T.alternate)break t;R=hi(R),T=hi(T)}R=null}else R=null;C!==null&&Om(m,g,C,R,!1),N!==null&&b!==null&&Om(m,b,N,R,!0)}}e:{if(g=c?Ei(c):window,C=g.nodeName&&g.nodeName.toLowerCase(),C==="select"||C==="input"&&g.type==="file")var U=mI;else if(Am(g))if(X_)U=vI;else{U=yI;var F=gI}else(C=g.nodeName)&&C.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(U=_I);if(U&&(U=U(t,c))){Q_(m,U,n,p);break e}F&&F(t,g,c),t==="focusout"&&(F=g._wrapperState)&&F.controlled&&g.type==="number"&&oh(g,"number",g.value)}switch(F=c?Ei(c):window,t){case"focusin":(Am(F)||F.contentEditable==="true")&&(vi=F,_h=c,Xs=null);break;case"focusout":Xs=_h=vi=null;break;case"mousedown":vh=!0;break;case"contextmenu":case"mouseup":case"dragend":vh=!1,Rm(m,n,p);break;case"selectionchange":if(TI)break;case"keydown":case"keyup":Rm(m,n,p)}var w;if(jd)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else _i?K_(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(q_&&n.locale!=="ko"&&(_i||_!=="onCompositionStart"?_==="onCompositionEnd"&&_i&&(w=W_()):(Gn=p,Vd="value"in Gn?Gn.value:Gn.textContent,_i=!0)),F=ml(c,_),0<F.length&&(_=new Tm(_,t,null,n,p),m.push({event:_,listeners:F}),w?_.data=w:(w=G_(n),w!==null&&(_.data=w)))),(w=cI?hI(t,n):dI(t,n))&&(c=ml(c,"onBeforeInput"),0<c.length&&(p=new Tm("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:c}),p.data=w))}ov(m,e)})}function Eo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ml(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=po(t,n),s!=null&&r.unshift(Eo(t,s,i)),s=po(t,e),s!=null&&r.push(Eo(t,s,i))),t=t.return}return r}function hi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Om(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=po(n,s),u!=null&&o.unshift(Eo(n,u,l))):i||(u=po(n,s),u!=null&&o.push(Eo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var AI=/\r\n?/g,CI=/\u0000|\uFFFD/g;function Vm(t){return(typeof t=="string"?t:""+t).replace(AI,`
`).replace(CI,"")}function Ia(t,e,n){if(e=Vm(e),Vm(t)!==e&&n)throw Error(M(425))}function gl(){}var wh=null,Eh=null;function Th(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ih=typeof setTimeout=="function"?setTimeout:void 0,kI=typeof clearTimeout=="function"?clearTimeout:void 0,Lm=typeof Promise=="function"?Promise:void 0,PI=typeof queueMicrotask=="function"?queueMicrotask:typeof Lm<"u"?function(t){return Lm.resolve(null).then(t).catch(NI)}:Ih;function NI(t){setTimeout(function(){throw t})}function xc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),yo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);yo(e)}function er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Mm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ts=Math.random().toString(36).slice(2),Qt="__reactFiber$"+ts,To="__reactProps$"+ts,wn="__reactContainer$"+ts,Sh="__reactEvents$"+ts,RI="__reactListeners$"+ts,bI="__reactHandles$"+ts;function Mr(t){var e=t[Qt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[wn]||n[Qt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Mm(t);t!==null;){if(n=t[Qt])return n;t=Mm(t)}return e}t=n,n=t.parentNode}return null}function Ho(t){return t=t[Qt]||t[wn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ei(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(M(33))}function lu(t){return t[To]||null}var xh=[],Ti=-1;function vr(t){return{current:t}}function me(t){0>Ti||(t.current=xh[Ti],xh[Ti]=null,Ti--)}function he(t,e){Ti++,xh[Ti]=t.current,t.current=e}var cr={},it=vr(cr),mt=vr(!1),Wr=cr;function zi(t,e){var n=t.type.contextTypes;if(!n)return cr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function gt(t){return t=t.childContextTypes,t!=null}function yl(){me(mt),me(it)}function jm(t,e,n){if(it.current!==cr)throw Error(M(168));he(it,e),he(mt,n)}function lv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(M(108,gT(t)||"Unknown",i));return Te({},n,r)}function _l(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||cr,Wr=it.current,he(it,t),he(mt,mt.current),!0}function Um(t,e,n){var r=t.stateNode;if(!r)throw Error(M(169));n?(t=lv(t,e,Wr),r.__reactInternalMemoizedMergedChildContext=t,me(mt),me(it),he(it,t)):me(mt),he(mt,n)}var dn=null,uu=!1,Ac=!1;function uv(t){dn===null?dn=[t]:dn.push(t)}function DI(t){uu=!0,uv(t)}function wr(){if(!Ac&&dn!==null){Ac=!0;var t=0,e=ue;try{var n=dn;for(ue=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}dn=null,uu=!1}catch(i){throw dn!==null&&(dn=dn.slice(t+1)),O_(Rd,wr),i}finally{ue=e,Ac=!1}}return null}var Ii=[],Si=0,vl=null,wl=0,Ct=[],kt=0,qr=null,fn=1,pn="";function Or(t,e){Ii[Si++]=wl,Ii[Si++]=vl,vl=t,wl=e}function cv(t,e,n){Ct[kt++]=fn,Ct[kt++]=pn,Ct[kt++]=qr,qr=t;var r=fn;t=pn;var i=32-Ut(r)-1;r&=~(1<<i),n+=1;var s=32-Ut(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,fn=1<<32-Ut(e)+i|n<<i|r,pn=s+t}else fn=1<<s|n<<i|r,pn=t}function Fd(t){t.return!==null&&(Or(t,1),cv(t,1,0))}function zd(t){for(;t===vl;)vl=Ii[--Si],Ii[Si]=null,wl=Ii[--Si],Ii[Si]=null;for(;t===qr;)qr=Ct[--kt],Ct[kt]=null,pn=Ct[--kt],Ct[kt]=null,fn=Ct[--kt],Ct[kt]=null}var Tt=null,wt=null,_e=!1,jt=null;function hv(t,e){var n=Nt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Fm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tt=t,wt=er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tt=t,wt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=qr!==null?{id:fn,overflow:pn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tt=t,wt=null,!0):!1;default:return!1}}function Ah(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ch(t){if(_e){var e=wt;if(e){var n=e;if(!Fm(t,e)){if(Ah(t))throw Error(M(418));e=er(n.nextSibling);var r=Tt;e&&Fm(t,e)?hv(r,n):(t.flags=t.flags&-4097|2,_e=!1,Tt=t)}}else{if(Ah(t))throw Error(M(418));t.flags=t.flags&-4097|2,_e=!1,Tt=t}}}function zm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tt=t}function Sa(t){if(t!==Tt)return!1;if(!_e)return zm(t),_e=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Th(t.type,t.memoizedProps)),e&&(e=wt)){if(Ah(t))throw dv(),Error(M(418));for(;e;)hv(t,e),e=er(e.nextSibling)}if(zm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){wt=er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}wt=null}}else wt=Tt?er(t.stateNode.nextSibling):null;return!0}function dv(){for(var t=wt;t;)t=er(t.nextSibling)}function $i(){wt=Tt=null,_e=!1}function $d(t){jt===null?jt=[t]:jt.push(t)}var OI=kn.ReactCurrentBatchConfig;function Ns(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,t))}return t}function xa(t,e){throw t=Object.prototype.toString.call(e),Error(M(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function $m(t){var e=t._init;return e(t._payload)}function fv(t){function e(T,v){if(t){var x=T.deletions;x===null?(T.deletions=[v],T.flags|=16):x.push(v)}}function n(T,v){if(!t)return null;for(;v!==null;)e(T,v),v=v.sibling;return null}function r(T,v){for(T=new Map;v!==null;)v.key!==null?T.set(v.key,v):T.set(v.index,v),v=v.sibling;return T}function i(T,v){return T=ir(T,v),T.index=0,T.sibling=null,T}function s(T,v,x){return T.index=x,t?(x=T.alternate,x!==null?(x=x.index,x<v?(T.flags|=2,v):x):(T.flags|=2,v)):(T.flags|=1048576,v)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function l(T,v,x,O){return v===null||v.tag!==6?(v=Dc(x,T.mode,O),v.return=T,v):(v=i(v,x),v.return=T,v)}function u(T,v,x,O){var U=x.type;return U===yi?p(T,v,x.props.children,O,x.key):v!==null&&(v.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Fn&&$m(U)===v.type)?(O=i(v,x.props),O.ref=Ns(T,v,x),O.return=T,O):(O=Ga(x.type,x.key,x.props,null,T.mode,O),O.ref=Ns(T,v,x),O.return=T,O)}function c(T,v,x,O){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Oc(x,T.mode,O),v.return=T,v):(v=i(v,x.children||[]),v.return=T,v)}function p(T,v,x,O,U){return v===null||v.tag!==7?(v=Br(x,T.mode,O,U),v.return=T,v):(v=i(v,x),v.return=T,v)}function m(T,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Dc(""+v,T.mode,x),v.return=T,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case pa:return x=Ga(v.type,v.key,v.props,null,T.mode,x),x.ref=Ns(T,null,v),x.return=T,x;case gi:return v=Oc(v,T.mode,x),v.return=T,v;case Fn:var O=v._init;return m(T,O(v._payload),x)}if(Os(v)||xs(v))return v=Br(v,T.mode,x,null),v.return=T,v;xa(T,v)}return null}function g(T,v,x,O){var U=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return U!==null?null:l(T,v,""+x,O);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case pa:return x.key===U?u(T,v,x,O):null;case gi:return x.key===U?c(T,v,x,O):null;case Fn:return U=x._init,g(T,v,U(x._payload),O)}if(Os(x)||xs(x))return U!==null?null:p(T,v,x,O,null);xa(T,x)}return null}function C(T,v,x,O,U){if(typeof O=="string"&&O!==""||typeof O=="number")return T=T.get(x)||null,l(v,T,""+O,U);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case pa:return T=T.get(O.key===null?x:O.key)||null,u(v,T,O,U);case gi:return T=T.get(O.key===null?x:O.key)||null,c(v,T,O,U);case Fn:var F=O._init;return C(T,v,x,F(O._payload),U)}if(Os(O)||xs(O))return T=T.get(x)||null,p(v,T,O,U,null);xa(v,O)}return null}function N(T,v,x,O){for(var U=null,F=null,w=v,_=v=0,E=null;w!==null&&_<x.length;_++){w.index>_?(E=w,w=null):E=w.sibling;var S=g(T,w,x[_],O);if(S===null){w===null&&(w=E);break}t&&w&&S.alternate===null&&e(T,w),v=s(S,v,_),F===null?U=S:F.sibling=S,F=S,w=E}if(_===x.length)return n(T,w),_e&&Or(T,_),U;if(w===null){for(;_<x.length;_++)w=m(T,x[_],O),w!==null&&(v=s(w,v,_),F===null?U=w:F.sibling=w,F=w);return _e&&Or(T,_),U}for(w=r(T,w);_<x.length;_++)E=C(w,T,_,x[_],O),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?_:E.key),v=s(E,v,_),F===null?U=E:F.sibling=E,F=E);return t&&w.forEach(function(A){return e(T,A)}),_e&&Or(T,_),U}function R(T,v,x,O){var U=xs(x);if(typeof U!="function")throw Error(M(150));if(x=U.call(x),x==null)throw Error(M(151));for(var F=U=null,w=v,_=v=0,E=null,S=x.next();w!==null&&!S.done;_++,S=x.next()){w.index>_?(E=w,w=null):E=w.sibling;var A=g(T,w,S.value,O);if(A===null){w===null&&(w=E);break}t&&w&&A.alternate===null&&e(T,w),v=s(A,v,_),F===null?U=A:F.sibling=A,F=A,w=E}if(S.done)return n(T,w),_e&&Or(T,_),U;if(w===null){for(;!S.done;_++,S=x.next())S=m(T,S.value,O),S!==null&&(v=s(S,v,_),F===null?U=S:F.sibling=S,F=S);return _e&&Or(T,_),U}for(w=r(T,w);!S.done;_++,S=x.next())S=C(w,T,_,S.value,O),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?_:S.key),v=s(S,v,_),F===null?U=S:F.sibling=S,F=S);return t&&w.forEach(function(k){return e(T,k)}),_e&&Or(T,_),U}function b(T,v,x,O){if(typeof x=="object"&&x!==null&&x.type===yi&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case pa:e:{for(var U=x.key,F=v;F!==null;){if(F.key===U){if(U=x.type,U===yi){if(F.tag===7){n(T,F.sibling),v=i(F,x.props.children),v.return=T,T=v;break e}}else if(F.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Fn&&$m(U)===F.type){n(T,F.sibling),v=i(F,x.props),v.ref=Ns(T,F,x),v.return=T,T=v;break e}n(T,F);break}else e(T,F);F=F.sibling}x.type===yi?(v=Br(x.props.children,T.mode,O,x.key),v.return=T,T=v):(O=Ga(x.type,x.key,x.props,null,T.mode,O),O.ref=Ns(T,v,x),O.return=T,T=O)}return o(T);case gi:e:{for(F=x.key;v!==null;){if(v.key===F)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(T,v.sibling),v=i(v,x.children||[]),v.return=T,T=v;break e}else{n(T,v);break}else e(T,v);v=v.sibling}v=Oc(x,T.mode,O),v.return=T,T=v}return o(T);case Fn:return F=x._init,b(T,v,F(x._payload),O)}if(Os(x))return N(T,v,x,O);if(xs(x))return R(T,v,x,O);xa(T,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(T,v.sibling),v=i(v,x),v.return=T,T=v):(n(T,v),v=Dc(x,T.mode,O),v.return=T,T=v),o(T)):n(T,v)}return b}var Bi=fv(!0),pv=fv(!1),El=vr(null),Tl=null,xi=null,Bd=null;function Hd(){Bd=xi=Tl=null}function Wd(t){var e=El.current;me(El),t._currentValue=e}function kh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Oi(t,e){Tl=t,Bd=xi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pt=!0),t.firstContext=null)}function bt(t){var e=t._currentValue;if(Bd!==t)if(t={context:t,memoizedValue:e,next:null},xi===null){if(Tl===null)throw Error(M(308));xi=t,Tl.dependencies={lanes:0,firstContext:t}}else xi=xi.next=t;return e}var jr=null;function qd(t){jr===null?jr=[t]:jr.push(t)}function mv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,qd(e)):(n.next=i.next,i.next=n),e.interleaved=n,En(t,r)}function En(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var zn=!1;function Kd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function yn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function tr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,En(t,n)}return i=r.interleaved,i===null?(e.next=e,qd(r)):(e.next=i.next,i.next=e),r.interleaved=e,En(t,n)}function $a(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bd(t,n)}}function Bm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Il(t,e,n,r){var i=t.updateQueue;zn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=c:l.next=c,p.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,p=c=u=null,l=s;do{var g=l.lane,C=l.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:C,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var N=t,R=l;switch(g=e,C=n,R.tag){case 1:if(N=R.payload,typeof N=="function"){m=N.call(C,m,g);break e}m=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=R.payload,g=typeof N=="function"?N.call(C,m,g):N,g==null)break e;m=Te({},m,g);break e;case 2:zn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else C={eventTime:C,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(c=p=C,u=m):p=p.next=C,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(p===null&&(u=m),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=p,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Gr|=o,t.lanes=o,t.memoizedState=m}}function Hm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var Wo={},Jt=vr(Wo),Io=vr(Wo),So=vr(Wo);function Ur(t){if(t===Wo)throw Error(M(174));return t}function Gd(t,e){switch(he(So,e),he(Io,t),he(Jt,Wo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:lh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=lh(e,t)}me(Jt),he(Jt,e)}function Hi(){me(Jt),me(Io),me(So)}function yv(t){Ur(So.current);var e=Ur(Jt.current),n=lh(e,t.type);e!==n&&(he(Io,t),he(Jt,n))}function Qd(t){Io.current===t&&(me(Jt),me(Io))}var ve=vr(0);function Sl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Cc=[];function Xd(){for(var t=0;t<Cc.length;t++)Cc[t]._workInProgressVersionPrimary=null;Cc.length=0}var Ba=kn.ReactCurrentDispatcher,kc=kn.ReactCurrentBatchConfig,Kr=0,Ee=null,Oe=null,ze=null,xl=!1,Ys=!1,xo=0,VI=0;function Je(){throw Error(M(321))}function Yd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!zt(t[n],e[n]))return!1;return!0}function Jd(t,e,n,r,i,s){if(Kr=s,Ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ba.current=t===null||t.memoizedState===null?UI:FI,t=n(r,i),Ys){s=0;do{if(Ys=!1,xo=0,25<=s)throw Error(M(301));s+=1,ze=Oe=null,e.updateQueue=null,Ba.current=zI,t=n(r,i)}while(Ys)}if(Ba.current=Al,e=Oe!==null&&Oe.next!==null,Kr=0,ze=Oe=Ee=null,xl=!1,e)throw Error(M(300));return t}function Zd(){var t=xo!==0;return xo=0,t}function Kt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?Ee.memoizedState=ze=t:ze=ze.next=t,ze}function Dt(){if(Oe===null){var t=Ee.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var e=ze===null?Ee.memoizedState:ze.next;if(e!==null)ze=e,Oe=t;else{if(t===null)throw Error(M(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},ze===null?Ee.memoizedState=ze=t:ze=ze.next=t}return ze}function Ao(t,e){return typeof e=="function"?e(t):e}function Pc(t){var e=Dt(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=Oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var p=c.lane;if((Kr&p)===p)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,Ee.lanes|=p,Gr|=p}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,zt(r,e.memoizedState)||(pt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ee.lanes|=s,Gr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Nc(t){var e=Dt(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);zt(s,e.memoizedState)||(pt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function _v(){}function vv(t,e){var n=Ee,r=Dt(),i=e(),s=!zt(r.memoizedState,i);if(s&&(r.memoizedState=i,pt=!0),r=r.queue,ef(Tv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ze!==null&&ze.memoizedState.tag&1){if(n.flags|=2048,Co(9,Ev.bind(null,n,r,i,e),void 0,null),Be===null)throw Error(M(349));Kr&30||wv(n,e,i)}return i}function wv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ev(t,e,n,r){e.value=n,e.getSnapshot=r,Iv(e)&&Sv(t)}function Tv(t,e,n){return n(function(){Iv(e)&&Sv(t)})}function Iv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!zt(t,n)}catch{return!0}}function Sv(t){var e=En(t,1);e!==null&&Ft(e,t,1,-1)}function Wm(t){var e=Kt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ao,lastRenderedState:t},e.queue=t,t=t.dispatch=jI.bind(null,Ee,t),[e.memoizedState,t]}function Co(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function xv(){return Dt().memoizedState}function Ha(t,e,n,r){var i=Kt();Ee.flags|=t,i.memoizedState=Co(1|e,n,void 0,r===void 0?null:r)}function cu(t,e,n,r){var i=Dt();r=r===void 0?null:r;var s=void 0;if(Oe!==null){var o=Oe.memoizedState;if(s=o.destroy,r!==null&&Yd(r,o.deps)){i.memoizedState=Co(e,n,s,r);return}}Ee.flags|=t,i.memoizedState=Co(1|e,n,s,r)}function qm(t,e){return Ha(8390656,8,t,e)}function ef(t,e){return cu(2048,8,t,e)}function Av(t,e){return cu(4,2,t,e)}function Cv(t,e){return cu(4,4,t,e)}function kv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Pv(t,e,n){return n=n!=null?n.concat([t]):null,cu(4,4,kv.bind(null,e,t),n)}function tf(){}function Nv(t,e){var n=Dt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Yd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Rv(t,e){var n=Dt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Yd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function bv(t,e,n){return Kr&21?(zt(n,e)||(n=M_(),Ee.lanes|=n,Gr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pt=!0),t.memoizedState=n)}function LI(t,e){var n=ue;ue=n!==0&&4>n?n:4,t(!0);var r=kc.transition;kc.transition={};try{t(!1),e()}finally{ue=n,kc.transition=r}}function Dv(){return Dt().memoizedState}function MI(t,e,n){var r=rr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ov(t))Vv(e,n);else if(n=mv(t,e,n,r),n!==null){var i=lt();Ft(n,t,r,i),Lv(n,e,r)}}function jI(t,e,n){var r=rr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ov(t))Vv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,zt(l,o)){var u=e.interleaved;u===null?(i.next=i,qd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=mv(t,e,i,r),n!==null&&(i=lt(),Ft(n,t,r,i),Lv(n,e,r))}}function Ov(t){var e=t.alternate;return t===Ee||e!==null&&e===Ee}function Vv(t,e){Ys=xl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Lv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bd(t,n)}}var Al={readContext:bt,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},UI={readContext:bt,useCallback:function(t,e){return Kt().memoizedState=[t,e===void 0?null:e],t},useContext:bt,useEffect:qm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ha(4194308,4,kv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ha(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ha(4,2,t,e)},useMemo:function(t,e){var n=Kt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Kt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=MI.bind(null,Ee,t),[r.memoizedState,t]},useRef:function(t){var e=Kt();return t={current:t},e.memoizedState=t},useState:Wm,useDebugValue:tf,useDeferredValue:function(t){return Kt().memoizedState=t},useTransition:function(){var t=Wm(!1),e=t[0];return t=LI.bind(null,t[1]),Kt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ee,i=Kt();if(_e){if(n===void 0)throw Error(M(407));n=n()}else{if(n=e(),Be===null)throw Error(M(349));Kr&30||wv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,qm(Tv.bind(null,r,s,t),[t]),r.flags|=2048,Co(9,Ev.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Kt(),e=Be.identifierPrefix;if(_e){var n=pn,r=fn;n=(r&~(1<<32-Ut(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=xo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=VI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},FI={readContext:bt,useCallback:Nv,useContext:bt,useEffect:ef,useImperativeHandle:Pv,useInsertionEffect:Av,useLayoutEffect:Cv,useMemo:Rv,useReducer:Pc,useRef:xv,useState:function(){return Pc(Ao)},useDebugValue:tf,useDeferredValue:function(t){var e=Dt();return bv(e,Oe.memoizedState,t)},useTransition:function(){var t=Pc(Ao)[0],e=Dt().memoizedState;return[t,e]},useMutableSource:_v,useSyncExternalStore:vv,useId:Dv,unstable_isNewReconciler:!1},zI={readContext:bt,useCallback:Nv,useContext:bt,useEffect:ef,useImperativeHandle:Pv,useInsertionEffect:Av,useLayoutEffect:Cv,useMemo:Rv,useReducer:Nc,useRef:xv,useState:function(){return Nc(Ao)},useDebugValue:tf,useDeferredValue:function(t){var e=Dt();return Oe===null?e.memoizedState=t:bv(e,Oe.memoizedState,t)},useTransition:function(){var t=Nc(Ao)[0],e=Dt().memoizedState;return[t,e]},useMutableSource:_v,useSyncExternalStore:vv,useId:Dv,unstable_isNewReconciler:!1};function Lt(t,e){if(t&&t.defaultProps){e=Te({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ph(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Te({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var hu={isMounted:function(t){return(t=t._reactInternals)?ri(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=lt(),i=rr(t),s=yn(r,i);s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,i),e!==null&&(Ft(e,t,i,r),$a(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=lt(),i=rr(t),s=yn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,i),e!==null&&(Ft(e,t,i,r),$a(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=lt(),r=rr(t),i=yn(n,r);i.tag=2,e!=null&&(i.callback=e),e=tr(t,i,r),e!==null&&(Ft(e,t,r,n),$a(e,t,r))}};function Km(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!vo(n,r)||!vo(i,s):!0}function Mv(t,e,n){var r=!1,i=cr,s=e.contextType;return typeof s=="object"&&s!==null?s=bt(s):(i=gt(e)?Wr:it.current,r=e.contextTypes,s=(r=r!=null)?zi(t,i):cr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Gm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&hu.enqueueReplaceState(e,e.state,null)}function Nh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Kd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=bt(s):(s=gt(e)?Wr:it.current,i.context=zi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ph(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&hu.enqueueReplaceState(i,i.state,null),Il(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Wi(t,e){try{var n="",r=e;do n+=mT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Rc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Rh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var $I=typeof WeakMap=="function"?WeakMap:Map;function jv(t,e,n){n=yn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){kl||(kl=!0,zh=r),Rh(t,e)},n}function Uv(t,e,n){n=yn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Rh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Rh(t,e),typeof r!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Qm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new $I;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=nS.bind(null,t,e,n),e.then(t,t))}function Xm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ym(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=yn(-1,1),e.tag=2,tr(n,e,1))),n.lanes|=1),t)}var BI=kn.ReactCurrentOwner,pt=!1;function at(t,e,n,r){e.child=t===null?pv(e,null,n,r):Bi(e,t.child,n,r)}function Jm(t,e,n,r,i){n=n.render;var s=e.ref;return Oi(e,i),r=Jd(t,e,n,r,s,i),n=Zd(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Tn(t,e,i)):(_e&&n&&Fd(e),e.flags|=1,at(t,e,r,i),e.child)}function Zm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!cf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Fv(t,e,s,r,i)):(t=Ga(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:vo,n(o,r)&&t.ref===e.ref)return Tn(t,e,i)}return e.flags|=1,t=ir(s,r),t.ref=e.ref,t.return=e,e.child=t}function Fv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(vo(s,r)&&t.ref===e.ref)if(pt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(pt=!0);else return e.lanes=t.lanes,Tn(t,e,i)}return bh(t,e,n,r,i)}function zv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(Ci,vt),vt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,he(Ci,vt),vt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,he(Ci,vt),vt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,he(Ci,vt),vt|=r;return at(t,e,i,n),e.child}function $v(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function bh(t,e,n,r,i){var s=gt(n)?Wr:it.current;return s=zi(e,s),Oi(e,i),n=Jd(t,e,n,r,s,i),r=Zd(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Tn(t,e,i)):(_e&&r&&Fd(e),e.flags|=1,at(t,e,n,i),e.child)}function eg(t,e,n,r,i){if(gt(n)){var s=!0;_l(e)}else s=!1;if(Oi(e,i),e.stateNode===null)Wa(t,e),Mv(e,n,r),Nh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=bt(c):(c=gt(n)?Wr:it.current,c=zi(e,c));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Gm(e,o,r,c),zn=!1;var g=e.memoizedState;o.state=g,Il(e,r,o,i),u=e.memoizedState,l!==r||g!==u||mt.current||zn?(typeof p=="function"&&(Ph(e,n,p,r),u=e.memoizedState),(l=zn||Km(e,n,l,r,g,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,gv(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Lt(e.type,l),o.props=c,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=bt(u):(u=gt(n)?Wr:it.current,u=zi(e,u));var C=n.getDerivedStateFromProps;(p=typeof C=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&Gm(e,o,r,u),zn=!1,g=e.memoizedState,o.state=g,Il(e,r,o,i);var N=e.memoizedState;l!==m||g!==N||mt.current||zn?(typeof C=="function"&&(Ph(e,n,C,r),N=e.memoizedState),(c=zn||Km(e,n,c,r,g,N,u)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,N,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,N,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=N),o.props=r,o.state=N,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Dh(t,e,n,r,s,i)}function Dh(t,e,n,r,i,s){$v(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Um(e,n,!1),Tn(t,e,s);r=e.stateNode,BI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Bi(e,t.child,null,s),e.child=Bi(e,null,l,s)):at(t,e,l,s),e.memoizedState=r.state,i&&Um(e,n,!0),e.child}function Bv(t){var e=t.stateNode;e.pendingContext?jm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&jm(t,e.context,!1),Gd(t,e.containerInfo)}function tg(t,e,n,r,i){return $i(),$d(i),e.flags|=256,at(t,e,n,r),e.child}var Oh={dehydrated:null,treeContext:null,retryLane:0};function Vh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Hv(t,e,n){var r=e.pendingProps,i=ve.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),he(ve,i&1),t===null)return Ch(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=pu(o,r,0,null),t=Br(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Vh(n),e.memoizedState=Oh,t):nf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return HI(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ir(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=ir(l,s):(s=Br(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Vh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Oh,r}return s=t.child,t=s.sibling,r=ir(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function nf(t,e){return e=pu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Aa(t,e,n,r){return r!==null&&$d(r),Bi(e,t.child,null,n),t=nf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function HI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Rc(Error(M(422))),Aa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=pu({mode:"visible",children:r.children},i,0,null),s=Br(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Bi(e,t.child,null,o),e.child.memoizedState=Vh(o),e.memoizedState=Oh,s);if(!(e.mode&1))return Aa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(M(419)),r=Rc(s,r,void 0),Aa(t,e,o,r)}if(l=(o&t.childLanes)!==0,pt||l){if(r=Be,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,En(t,i),Ft(r,t,i,-1))}return uf(),r=Rc(Error(M(421))),Aa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=rS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,wt=er(i.nextSibling),Tt=e,_e=!0,jt=null,t!==null&&(Ct[kt++]=fn,Ct[kt++]=pn,Ct[kt++]=qr,fn=t.id,pn=t.overflow,qr=e),e=nf(e,r.children),e.flags|=4096,e)}function ng(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),kh(t.return,e,n)}function bc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Wv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(at(t,e,r.children,n),r=ve.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ng(t,n,e);else if(t.tag===19)ng(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(he(ve,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Sl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),bc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Sl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}bc(e,!0,n,null,s);break;case"together":bc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Wa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Tn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Gr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(M(153));if(e.child!==null){for(t=e.child,n=ir(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ir(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function WI(t,e,n){switch(e.tag){case 3:Bv(e),$i();break;case 5:yv(e);break;case 1:gt(e.type)&&_l(e);break;case 4:Gd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;he(El,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(he(ve,ve.current&1),e.flags|=128,null):n&e.child.childLanes?Hv(t,e,n):(he(ve,ve.current&1),t=Tn(t,e,n),t!==null?t.sibling:null);he(ve,ve.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Wv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(ve,ve.current),r)break;return null;case 22:case 23:return e.lanes=0,zv(t,e,n)}return Tn(t,e,n)}var qv,Lh,Kv,Gv;qv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Lh=function(){};Kv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ur(Jt.current);var s=null;switch(n){case"input":i=ih(t,i),r=ih(t,r),s=[];break;case"select":i=Te({},i,{value:void 0}),r=Te({},r,{value:void 0}),s=[];break;case"textarea":i=ah(t,i),r=ah(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=gl)}uh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ho.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ho.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&fe("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Gv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Rs(t,e){if(!_e)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ze(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function qI(t,e,n){var r=e.pendingProps;switch(zd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(e),null;case 1:return gt(e.type)&&yl(),Ze(e),null;case 3:return r=e.stateNode,Hi(),me(mt),me(it),Xd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Sa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jt!==null&&(Hh(jt),jt=null))),Lh(t,e),Ze(e),null;case 5:Qd(e);var i=Ur(So.current);if(n=e.type,t!==null&&e.stateNode!=null)Kv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(M(166));return Ze(e),null}if(t=Ur(Jt.current),Sa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Qt]=e,r[To]=s,t=(e.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(i=0;i<Ls.length;i++)fe(Ls[i],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":hm(r,s),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},fe("invalid",r);break;case"textarea":fm(r,s),fe("invalid",r)}uh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ia(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ia(r.textContent,l,t),i=["children",""+l]):ho.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&fe("scroll",r)}switch(n){case"input":ma(r),dm(r,s,!0);break;case"textarea":ma(r),pm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=gl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=T_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Qt]=e,t[To]=r,qv(t,e,!1,!1),e.stateNode=t;e:{switch(o=ch(n,r),n){case"dialog":fe("cancel",t),fe("close",t),i=r;break;case"iframe":case"object":case"embed":fe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ls.length;i++)fe(Ls[i],t);i=r;break;case"source":fe("error",t),i=r;break;case"img":case"image":case"link":fe("error",t),fe("load",t),i=r;break;case"details":fe("toggle",t),i=r;break;case"input":hm(t,r),i=ih(t,r),fe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Te({},r,{value:void 0}),fe("invalid",t);break;case"textarea":fm(t,r),i=ah(t,r),fe("invalid",t);break;default:i=r}uh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?x_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&I_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&fo(t,u):typeof u=="number"&&fo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ho.hasOwnProperty(s)?u!=null&&s==="onScroll"&&fe("scroll",t):u!=null&&Ad(t,s,u,o))}switch(n){case"input":ma(t),dm(t,r,!1);break;case"textarea":ma(t),pm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ur(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ni(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ni(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=gl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ze(e),null;case 6:if(t&&e.stateNode!=null)Gv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(M(166));if(n=Ur(So.current),Ur(Jt.current),Sa(e)){if(r=e.stateNode,n=e.memoizedProps,r[Qt]=e,(s=r.nodeValue!==n)&&(t=Tt,t!==null))switch(t.tag){case 3:Ia(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ia(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qt]=e,e.stateNode=r}return Ze(e),null;case 13:if(me(ve),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_e&&wt!==null&&e.mode&1&&!(e.flags&128))dv(),$i(),e.flags|=98560,s=!1;else if(s=Sa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(M(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(M(317));s[Qt]=e}else $i(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ze(e),s=!1}else jt!==null&&(Hh(jt),jt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ve.current&1?Le===0&&(Le=3):uf())),e.updateQueue!==null&&(e.flags|=4),Ze(e),null);case 4:return Hi(),Lh(t,e),t===null&&wo(e.stateNode.containerInfo),Ze(e),null;case 10:return Wd(e.type._context),Ze(e),null;case 17:return gt(e.type)&&yl(),Ze(e),null;case 19:if(me(ve),s=e.memoizedState,s===null)return Ze(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Rs(s,!1);else{if(Le!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Sl(t),o!==null){for(e.flags|=128,Rs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return he(ve,ve.current&1|2),e.child}t=t.sibling}s.tail!==null&&ke()>qi&&(e.flags|=128,r=!0,Rs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Sl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Rs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!_e)return Ze(e),null}else 2*ke()-s.renderingStartTime>qi&&n!==1073741824&&(e.flags|=128,r=!0,Rs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ke(),e.sibling=null,n=ve.current,he(ve,r?n&1|2:n&1),e):(Ze(e),null);case 22:case 23:return lf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?vt&1073741824&&(Ze(e),e.subtreeFlags&6&&(e.flags|=8192)):Ze(e),null;case 24:return null;case 25:return null}throw Error(M(156,e.tag))}function KI(t,e){switch(zd(e),e.tag){case 1:return gt(e.type)&&yl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Hi(),me(mt),me(it),Xd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Qd(e),null;case 13:if(me(ve),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(M(340));$i()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return me(ve),null;case 4:return Hi(),null;case 10:return Wd(e.type._context),null;case 22:case 23:return lf(),null;case 24:return null;default:return null}}var Ca=!1,nt=!1,GI=typeof WeakSet=="function"?WeakSet:Set,B=null;function Ai(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(t,e,r)}else n.current=null}function Mh(t,e,n){try{n()}catch(r){xe(t,e,r)}}var rg=!1;function QI(t,e){if(wh=fl,t=Z_(),Ud(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,p=0,m=t,g=null;t:for(;;){for(var C;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(C=m.firstChild)!==null;)g=m,m=C;for(;;){if(m===t)break t;if(g===n&&++c===i&&(l=o),g===s&&++p===r&&(u=o),(C=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=C}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Eh={focusedElem:t,selectionRange:n},fl=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var N=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var R=N.memoizedProps,b=N.memoizedState,T=e.stateNode,v=T.getSnapshotBeforeUpdate(e.elementType===e.type?R:Lt(e.type,R),b);T.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(O){xe(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return N=rg,rg=!1,N}function Js(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Mh(e,n,s)}i=i.next}while(i!==r)}}function du(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function jh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Qv(t){var e=t.alternate;e!==null&&(t.alternate=null,Qv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Qt],delete e[To],delete e[Sh],delete e[RI],delete e[bI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Xv(t){return t.tag===5||t.tag===3||t.tag===4}function ig(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Xv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Uh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=gl));else if(r!==4&&(t=t.child,t!==null))for(Uh(t,e,n),t=t.sibling;t!==null;)Uh(t,e,n),t=t.sibling}function Fh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Fh(t,e,n),t=t.sibling;t!==null;)Fh(t,e,n),t=t.sibling}var We=null,Mt=!1;function Mn(t,e,n){for(n=n.child;n!==null;)Yv(t,e,n),n=n.sibling}function Yv(t,e,n){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(iu,n)}catch{}switch(n.tag){case 5:nt||Ai(n,e);case 6:var r=We,i=Mt;We=null,Mn(t,e,n),We=r,Mt=i,We!==null&&(Mt?(t=We,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(Mt?(t=We,n=n.stateNode,t.nodeType===8?xc(t.parentNode,n):t.nodeType===1&&xc(t,n),yo(t)):xc(We,n.stateNode));break;case 4:r=We,i=Mt,We=n.stateNode.containerInfo,Mt=!0,Mn(t,e,n),We=r,Mt=i;break;case 0:case 11:case 14:case 15:if(!nt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Mh(n,e,o),i=i.next}while(i!==r)}Mn(t,e,n);break;case 1:if(!nt&&(Ai(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){xe(n,e,l)}Mn(t,e,n);break;case 21:Mn(t,e,n);break;case 22:n.mode&1?(nt=(r=nt)||n.memoizedState!==null,Mn(t,e,n),nt=r):Mn(t,e,n);break;default:Mn(t,e,n)}}function sg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new GI),e.forEach(function(r){var i=iS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Vt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:We=l.stateNode,Mt=!1;break e;case 3:We=l.stateNode.containerInfo,Mt=!0;break e;case 4:We=l.stateNode.containerInfo,Mt=!0;break e}l=l.return}if(We===null)throw Error(M(160));Yv(s,o,i),We=null,Mt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){xe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Jv(e,t),e=e.sibling}function Jv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vt(e,t),qt(t),r&4){try{Js(3,t,t.return),du(3,t)}catch(R){xe(t,t.return,R)}try{Js(5,t,t.return)}catch(R){xe(t,t.return,R)}}break;case 1:Vt(e,t),qt(t),r&512&&n!==null&&Ai(n,n.return);break;case 5:if(Vt(e,t),qt(t),r&512&&n!==null&&Ai(n,n.return),t.flags&32){var i=t.stateNode;try{fo(i,"")}catch(R){xe(t,t.return,R)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&w_(i,s),ch(l,o);var c=ch(l,s);for(o=0;o<u.length;o+=2){var p=u[o],m=u[o+1];p==="style"?x_(i,m):p==="dangerouslySetInnerHTML"?I_(i,m):p==="children"?fo(i,m):Ad(i,p,m,c)}switch(l){case"input":sh(i,s);break;case"textarea":E_(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var C=s.value;C!=null?Ni(i,!!s.multiple,C,!1):g!==!!s.multiple&&(s.defaultValue!=null?Ni(i,!!s.multiple,s.defaultValue,!0):Ni(i,!!s.multiple,s.multiple?[]:"",!1))}i[To]=s}catch(R){xe(t,t.return,R)}}break;case 6:if(Vt(e,t),qt(t),r&4){if(t.stateNode===null)throw Error(M(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(R){xe(t,t.return,R)}}break;case 3:if(Vt(e,t),qt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{yo(e.containerInfo)}catch(R){xe(t,t.return,R)}break;case 4:Vt(e,t),qt(t);break;case 13:Vt(e,t),qt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(of=ke())),r&4&&sg(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(nt=(c=nt)||p,Vt(e,t),nt=c):Vt(e,t),qt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!p&&t.mode&1)for(B=t,p=t.child;p!==null;){for(m=B=p;B!==null;){switch(g=B,C=g.child,g.tag){case 0:case 11:case 14:case 15:Js(4,g,g.return);break;case 1:Ai(g,g.return);var N=g.stateNode;if(typeof N.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,N.props=e.memoizedProps,N.state=e.memoizedState,N.componentWillUnmount()}catch(R){xe(r,n,R)}}break;case 5:Ai(g,g.return);break;case 22:if(g.memoizedState!==null){ag(m);continue}}C!==null?(C.return=g,B=C):ag(m)}p=p.sibling}e:for(p=null,m=t;;){if(m.tag===5){if(p===null){p=m;try{i=m.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=S_("display",o))}catch(R){xe(t,t.return,R)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(R){xe(t,t.return,R)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Vt(e,t),qt(t),r&4&&sg(t);break;case 21:break;default:Vt(e,t),qt(t)}}function qt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Xv(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(fo(i,""),r.flags&=-33);var s=ig(t);Fh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=ig(t);Uh(t,l,o);break;default:throw Error(M(161))}}catch(u){xe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function XI(t,e,n){B=t,Zv(t)}function Zv(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var i=B,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ca;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||nt;l=Ca;var c=nt;if(Ca=o,(nt=u)&&!c)for(B=i;B!==null;)o=B,u=o.child,o.tag===22&&o.memoizedState!==null?lg(i):u!==null?(u.return=o,B=u):lg(i);for(;s!==null;)B=s,Zv(s),s=s.sibling;B=i,Ca=l,nt=c}og(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,B=s):og(t)}}function og(t){for(;B!==null;){var e=B;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:nt||du(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!nt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Lt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Hm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Hm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&yo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}nt||e.flags&512&&jh(e)}catch(g){xe(e,e.return,g)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function ag(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function lg(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{du(4,e)}catch(u){xe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){xe(e,i,u)}}var s=e.return;try{jh(e)}catch(u){xe(e,s,u)}break;case 5:var o=e.return;try{jh(e)}catch(u){xe(e,o,u)}}}catch(u){xe(e,e.return,u)}if(e===t){B=null;break}var l=e.sibling;if(l!==null){l.return=e.return,B=l;break}B=e.return}}var YI=Math.ceil,Cl=kn.ReactCurrentDispatcher,rf=kn.ReactCurrentOwner,Rt=kn.ReactCurrentBatchConfig,se=0,Be=null,Ne=null,Ge=0,vt=0,Ci=vr(0),Le=0,ko=null,Gr=0,fu=0,sf=0,Zs=null,dt=null,of=0,qi=1/0,hn=null,kl=!1,zh=null,nr=null,ka=!1,Qn=null,Pl=0,eo=0,$h=null,qa=-1,Ka=0;function lt(){return se&6?ke():qa!==-1?qa:qa=ke()}function rr(t){return t.mode&1?se&2&&Ge!==0?Ge&-Ge:OI.transition!==null?(Ka===0&&(Ka=M_()),Ka):(t=ue,t!==0||(t=window.event,t=t===void 0?16:H_(t.type)),t):1}function Ft(t,e,n,r){if(50<eo)throw eo=0,$h=null,Error(M(185));$o(t,n,r),(!(se&2)||t!==Be)&&(t===Be&&(!(se&2)&&(fu|=n),Le===4&&Bn(t,Ge)),yt(t,r),n===1&&se===0&&!(e.mode&1)&&(qi=ke()+500,uu&&wr()))}function yt(t,e){var n=t.callbackNode;OT(t,e);var r=dl(t,t===Be?Ge:0);if(r===0)n!==null&&ym(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ym(n),e===1)t.tag===0?DI(ug.bind(null,t)):uv(ug.bind(null,t)),PI(function(){!(se&6)&&wr()}),n=null;else{switch(j_(r)){case 1:n=Rd;break;case 4:n=V_;break;case 16:n=hl;break;case 536870912:n=L_;break;default:n=hl}n=a0(n,e0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function e0(t,e){if(qa=-1,Ka=0,se&6)throw Error(M(327));var n=t.callbackNode;if(Vi()&&t.callbackNode!==n)return null;var r=dl(t,t===Be?Ge:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Nl(t,r);else{e=r;var i=se;se|=2;var s=n0();(Be!==t||Ge!==e)&&(hn=null,qi=ke()+500,$r(t,e));do try{eS();break}catch(l){t0(t,l)}while(!0);Hd(),Cl.current=s,se=i,Ne!==null?e=0:(Be=null,Ge=0,e=Le)}if(e!==0){if(e===2&&(i=mh(t),i!==0&&(r=i,e=Bh(t,i))),e===1)throw n=ko,$r(t,0),Bn(t,r),yt(t,ke()),n;if(e===6)Bn(t,r);else{if(i=t.current.alternate,!(r&30)&&!JI(i)&&(e=Nl(t,r),e===2&&(s=mh(t),s!==0&&(r=s,e=Bh(t,s))),e===1))throw n=ko,$r(t,0),Bn(t,r),yt(t,ke()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(M(345));case 2:Vr(t,dt,hn);break;case 3:if(Bn(t,r),(r&130023424)===r&&(e=of+500-ke(),10<e)){if(dl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){lt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ih(Vr.bind(null,t,dt,hn),e);break}Vr(t,dt,hn);break;case 4:if(Bn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ut(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*YI(r/1960))-r,10<r){t.timeoutHandle=Ih(Vr.bind(null,t,dt,hn),r);break}Vr(t,dt,hn);break;case 5:Vr(t,dt,hn);break;default:throw Error(M(329))}}}return yt(t,ke()),t.callbackNode===n?e0.bind(null,t):null}function Bh(t,e){var n=Zs;return t.current.memoizedState.isDehydrated&&($r(t,e).flags|=256),t=Nl(t,e),t!==2&&(e=dt,dt=n,e!==null&&Hh(e)),t}function Hh(t){dt===null?dt=t:dt.push.apply(dt,t)}function JI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!zt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Bn(t,e){for(e&=~sf,e&=~fu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ut(e),r=1<<n;t[n]=-1,e&=~r}}function ug(t){if(se&6)throw Error(M(327));Vi();var e=dl(t,0);if(!(e&1))return yt(t,ke()),null;var n=Nl(t,e);if(t.tag!==0&&n===2){var r=mh(t);r!==0&&(e=r,n=Bh(t,r))}if(n===1)throw n=ko,$r(t,0),Bn(t,e),yt(t,ke()),n;if(n===6)throw Error(M(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Vr(t,dt,hn),yt(t,ke()),null}function af(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(qi=ke()+500,uu&&wr())}}function Qr(t){Qn!==null&&Qn.tag===0&&!(se&6)&&Vi();var e=se;se|=1;var n=Rt.transition,r=ue;try{if(Rt.transition=null,ue=1,t)return t()}finally{ue=r,Rt.transition=n,se=e,!(se&6)&&wr()}}function lf(){vt=Ci.current,me(Ci)}function $r(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,kI(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(zd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&yl();break;case 3:Hi(),me(mt),me(it),Xd();break;case 5:Qd(r);break;case 4:Hi();break;case 13:me(ve);break;case 19:me(ve);break;case 10:Wd(r.type._context);break;case 22:case 23:lf()}n=n.return}if(Be=t,Ne=t=ir(t.current,null),Ge=vt=e,Le=0,ko=null,sf=fu=Gr=0,dt=Zs=null,jr!==null){for(e=0;e<jr.length;e++)if(n=jr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}jr=null}return t}function t0(t,e){do{var n=Ne;try{if(Hd(),Ba.current=Al,xl){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}xl=!1}if(Kr=0,ze=Oe=Ee=null,Ys=!1,xo=0,rf.current=null,n===null||n.return===null){Le=1,ko=e,Ne=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Ge,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,p=l,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var C=Xm(o);if(C!==null){C.flags&=-257,Ym(C,o,l,s,e),C.mode&1&&Qm(s,c,e),e=C,u=c;var N=e.updateQueue;if(N===null){var R=new Set;R.add(u),e.updateQueue=R}else N.add(u);break e}else{if(!(e&1)){Qm(s,c,e),uf();break e}u=Error(M(426))}}else if(_e&&l.mode&1){var b=Xm(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Ym(b,o,l,s,e),$d(Wi(u,l));break e}}s=u=Wi(u,l),Le!==4&&(Le=2),Zs===null?Zs=[s]:Zs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=jv(s,u,e);Bm(s,T);break e;case 1:l=u;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(nr===null||!nr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=Uv(s,l,e);Bm(s,O);break e}}s=s.return}while(s!==null)}i0(n)}catch(U){e=U,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(!0)}function n0(){var t=Cl.current;return Cl.current=Al,t===null?Al:t}function uf(){(Le===0||Le===3||Le===2)&&(Le=4),Be===null||!(Gr&268435455)&&!(fu&268435455)||Bn(Be,Ge)}function Nl(t,e){var n=se;se|=2;var r=n0();(Be!==t||Ge!==e)&&(hn=null,$r(t,e));do try{ZI();break}catch(i){t0(t,i)}while(!0);if(Hd(),se=n,Cl.current=r,Ne!==null)throw Error(M(261));return Be=null,Ge=0,Le}function ZI(){for(;Ne!==null;)r0(Ne)}function eS(){for(;Ne!==null&&!xT();)r0(Ne)}function r0(t){var e=o0(t.alternate,t,vt);t.memoizedProps=t.pendingProps,e===null?i0(t):Ne=e,rf.current=null}function i0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=KI(n,e),n!==null){n.flags&=32767,Ne=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Le=6,Ne=null;return}}else if(n=qI(n,e,vt),n!==null){Ne=n;return}if(e=e.sibling,e!==null){Ne=e;return}Ne=e=t}while(e!==null);Le===0&&(Le=5)}function Vr(t,e,n){var r=ue,i=Rt.transition;try{Rt.transition=null,ue=1,tS(t,e,n,r)}finally{Rt.transition=i,ue=r}return null}function tS(t,e,n,r){do Vi();while(Qn!==null);if(se&6)throw Error(M(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(M(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(VT(t,s),t===Be&&(Ne=Be=null,Ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ka||(ka=!0,a0(hl,function(){return Vi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Rt.transition,Rt.transition=null;var o=ue;ue=1;var l=se;se|=4,rf.current=null,QI(t,n),Jv(n,t),EI(Eh),fl=!!wh,Eh=wh=null,t.current=n,XI(n),AT(),se=l,ue=o,Rt.transition=s}else t.current=n;if(ka&&(ka=!1,Qn=t,Pl=i),s=t.pendingLanes,s===0&&(nr=null),PT(n.stateNode),yt(t,ke()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(kl)throw kl=!1,t=zh,zh=null,t;return Pl&1&&t.tag!==0&&Vi(),s=t.pendingLanes,s&1?t===$h?eo++:(eo=0,$h=t):eo=0,wr(),null}function Vi(){if(Qn!==null){var t=j_(Pl),e=Rt.transition,n=ue;try{if(Rt.transition=null,ue=16>t?16:t,Qn===null)var r=!1;else{if(t=Qn,Qn=null,Pl=0,se&6)throw Error(M(331));var i=se;for(se|=4,B=t.current;B!==null;){var s=B,o=s.child;if(B.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(B=c;B!==null;){var p=B;switch(p.tag){case 0:case 11:case 15:Js(8,p,s)}var m=p.child;if(m!==null)m.return=p,B=m;else for(;B!==null;){p=B;var g=p.sibling,C=p.return;if(Qv(p),p===c){B=null;break}if(g!==null){g.return=C,B=g;break}B=C}}}var N=s.alternate;if(N!==null){var R=N.child;if(R!==null){N.child=null;do{var b=R.sibling;R.sibling=null,R=b}while(R!==null)}}B=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,B=o;else e:for(;B!==null;){if(s=B,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Js(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,B=T;break e}B=s.return}}var v=t.current;for(B=v;B!==null;){o=B;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,B=x;else e:for(o=v;B!==null;){if(l=B,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:du(9,l)}}catch(U){xe(l,l.return,U)}if(l===o){B=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,B=O;break e}B=l.return}}if(se=i,wr(),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(iu,t)}catch{}r=!0}return r}finally{ue=n,Rt.transition=e}}return!1}function cg(t,e,n){e=Wi(n,e),e=jv(t,e,1),t=tr(t,e,1),e=lt(),t!==null&&($o(t,1,e),yt(t,e))}function xe(t,e,n){if(t.tag===3)cg(t,t,n);else for(;e!==null;){if(e.tag===3){cg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nr===null||!nr.has(r))){t=Wi(n,t),t=Uv(e,t,1),e=tr(e,t,1),t=lt(),e!==null&&($o(e,1,t),yt(e,t));break}}e=e.return}}function nS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=lt(),t.pingedLanes|=t.suspendedLanes&n,Be===t&&(Ge&n)===n&&(Le===4||Le===3&&(Ge&130023424)===Ge&&500>ke()-of?$r(t,0):sf|=n),yt(t,e)}function s0(t,e){e===0&&(t.mode&1?(e=_a,_a<<=1,!(_a&130023424)&&(_a=4194304)):e=1);var n=lt();t=En(t,e),t!==null&&($o(t,e,n),yt(t,n))}function rS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),s0(t,n)}function iS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(e),s0(t,n)}var o0;o0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||mt.current)pt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pt=!1,WI(t,e,n);pt=!!(t.flags&131072)}else pt=!1,_e&&e.flags&1048576&&cv(e,wl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Wa(t,e),t=e.pendingProps;var i=zi(e,it.current);Oi(e,n),i=Jd(null,e,r,t,i,n);var s=Zd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gt(r)?(s=!0,_l(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Kd(e),i.updater=hu,e.stateNode=i,i._reactInternals=e,Nh(e,r,t,n),e=Dh(null,e,r,!0,s,n)):(e.tag=0,_e&&s&&Fd(e),at(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Wa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=oS(r),t=Lt(r,t),i){case 0:e=bh(null,e,r,t,n);break e;case 1:e=eg(null,e,r,t,n);break e;case 11:e=Jm(null,e,r,t,n);break e;case 14:e=Zm(null,e,r,Lt(r.type,t),n);break e}throw Error(M(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Lt(r,i),bh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Lt(r,i),eg(t,e,r,i,n);case 3:e:{if(Bv(e),t===null)throw Error(M(387));r=e.pendingProps,s=e.memoizedState,i=s.element,gv(t,e),Il(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Wi(Error(M(423)),e),e=tg(t,e,r,n,i);break e}else if(r!==i){i=Wi(Error(M(424)),e),e=tg(t,e,r,n,i);break e}else for(wt=er(e.stateNode.containerInfo.firstChild),Tt=e,_e=!0,jt=null,n=pv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($i(),r===i){e=Tn(t,e,n);break e}at(t,e,r,n)}e=e.child}return e;case 5:return yv(e),t===null&&Ch(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Th(r,i)?o=null:s!==null&&Th(r,s)&&(e.flags|=32),$v(t,e),at(t,e,o,n),e.child;case 6:return t===null&&Ch(e),null;case 13:return Hv(t,e,n);case 4:return Gd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Bi(e,null,r,n):at(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Lt(r,i),Jm(t,e,r,i,n);case 7:return at(t,e,e.pendingProps,n),e.child;case 8:return at(t,e,e.pendingProps.children,n),e.child;case 12:return at(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,he(El,r._currentValue),r._currentValue=o,s!==null)if(zt(s.value,o)){if(s.children===i.children&&!mt.current){e=Tn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=yn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?u.next=u:(u.next=p.next,p.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),kh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(M(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),kh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}at(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Oi(e,n),i=bt(i),r=r(i),e.flags|=1,at(t,e,r,n),e.child;case 14:return r=e.type,i=Lt(r,e.pendingProps),i=Lt(r.type,i),Zm(t,e,r,i,n);case 15:return Fv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Lt(r,i),Wa(t,e),e.tag=1,gt(r)?(t=!0,_l(e)):t=!1,Oi(e,n),Mv(e,r,i),Nh(e,r,i,n),Dh(null,e,r,!0,t,n);case 19:return Wv(t,e,n);case 22:return zv(t,e,n)}throw Error(M(156,e.tag))};function a0(t,e){return O_(t,e)}function sS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(t,e,n,r){return new sS(t,e,n,r)}function cf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function oS(t){if(typeof t=="function")return cf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===kd)return 11;if(t===Pd)return 14}return 2}function ir(t,e){var n=t.alternate;return n===null?(n=Nt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ga(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")cf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case yi:return Br(n.children,i,s,e);case Cd:o=8,i|=8;break;case eh:return t=Nt(12,n,e,i|2),t.elementType=eh,t.lanes=s,t;case th:return t=Nt(13,n,e,i),t.elementType=th,t.lanes=s,t;case nh:return t=Nt(19,n,e,i),t.elementType=nh,t.lanes=s,t;case y_:return pu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case m_:o=10;break e;case g_:o=9;break e;case kd:o=11;break e;case Pd:o=14;break e;case Fn:o=16,r=null;break e}throw Error(M(130,t==null?t:typeof t,""))}return e=Nt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Br(t,e,n,r){return t=Nt(7,t,r,e),t.lanes=n,t}function pu(t,e,n,r){return t=Nt(22,t,r,e),t.elementType=y_,t.lanes=n,t.stateNode={isHidden:!1},t}function Dc(t,e,n){return t=Nt(6,t,null,e),t.lanes=n,t}function Oc(t,e,n){return e=Nt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function aS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pc(0),this.expirationTimes=pc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function hf(t,e,n,r,i,s,o,l,u){return t=new aS(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Nt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kd(s),t}function lS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function l0(t){if(!t)return cr;t=t._reactInternals;e:{if(ri(t)!==t||t.tag!==1)throw Error(M(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(M(171))}if(t.tag===1){var n=t.type;if(gt(n))return lv(t,n,e)}return e}function u0(t,e,n,r,i,s,o,l,u){return t=hf(n,r,!0,t,i,s,o,l,u),t.context=l0(null),n=t.current,r=lt(),i=rr(n),s=yn(r,i),s.callback=e??null,tr(n,s,i),t.current.lanes=i,$o(t,i,r),yt(t,r),t}function mu(t,e,n,r){var i=e.current,s=lt(),o=rr(i);return n=l0(n),e.context===null?e.context=n:e.pendingContext=n,e=yn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=tr(i,e,o),t!==null&&(Ft(t,i,o,s),$a(t,i,o)),o}function Rl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function hg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function df(t,e){hg(t,e),(t=t.alternate)&&hg(t,e)}function uS(){return null}var c0=typeof reportError=="function"?reportError:function(t){console.error(t)};function ff(t){this._internalRoot=t}gu.prototype.render=ff.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(M(409));mu(t,e,null,null)};gu.prototype.unmount=ff.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Qr(function(){mu(null,t,null,null)}),e[wn]=null}};function gu(t){this._internalRoot=t}gu.prototype.unstable_scheduleHydration=function(t){if(t){var e=z_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<$n.length&&e!==0&&e<$n[n].priority;n++);$n.splice(n,0,t),n===0&&B_(t)}};function pf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function yu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function dg(){}function cS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Rl(o);s.call(c)}}var o=u0(e,r,t,0,null,!1,!1,"",dg);return t._reactRootContainer=o,t[wn]=o.current,wo(t.nodeType===8?t.parentNode:t),Qr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Rl(u);l.call(c)}}var u=hf(t,0,!1,null,null,!1,!1,"",dg);return t._reactRootContainer=u,t[wn]=u.current,wo(t.nodeType===8?t.parentNode:t),Qr(function(){mu(e,u,n,r)}),u}function _u(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Rl(o);l.call(u)}}mu(e,o,t,i)}else o=cS(n,e,t,i,r);return Rl(o)}U_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Vs(e.pendingLanes);n!==0&&(bd(e,n|1),yt(e,ke()),!(se&6)&&(qi=ke()+500,wr()))}break;case 13:Qr(function(){var r=En(t,1);if(r!==null){var i=lt();Ft(r,t,1,i)}}),df(t,1)}};Dd=function(t){if(t.tag===13){var e=En(t,134217728);if(e!==null){var n=lt();Ft(e,t,134217728,n)}df(t,134217728)}};F_=function(t){if(t.tag===13){var e=rr(t),n=En(t,e);if(n!==null){var r=lt();Ft(n,t,e,r)}df(t,e)}};z_=function(){return ue};$_=function(t,e){var n=ue;try{return ue=t,e()}finally{ue=n}};dh=function(t,e,n){switch(e){case"input":if(sh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=lu(r);if(!i)throw Error(M(90));v_(r),sh(r,i)}}}break;case"textarea":E_(t,n);break;case"select":e=n.value,e!=null&&Ni(t,!!n.multiple,e,!1)}};k_=af;P_=Qr;var hS={usingClientEntryPoint:!1,Events:[Ho,Ei,lu,A_,C_,af]},bs={findFiberByHostInstance:Mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dS={bundleType:bs.bundleType,version:bs.version,rendererPackageName:bs.rendererPackageName,rendererConfig:bs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=b_(t),t===null?null:t.stateNode},findFiberByHostInstance:bs.findFiberByHostInstance||uS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pa.isDisabled&&Pa.supportsFiber)try{iu=Pa.inject(dS),Yt=Pa}catch{}}St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hS;St.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pf(e))throw Error(M(200));return lS(t,e,null,n)};St.createRoot=function(t,e){if(!pf(t))throw Error(M(299));var n=!1,r="",i=c0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=hf(t,1,!1,null,null,n,!1,r,i),t[wn]=e.current,wo(t.nodeType===8?t.parentNode:t),new ff(e)};St.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(M(188)):(t=Object.keys(t).join(","),Error(M(268,t)));return t=b_(e),t=t===null?null:t.stateNode,t};St.flushSync=function(t){return Qr(t)};St.hydrate=function(t,e,n){if(!yu(e))throw Error(M(200));return _u(null,t,e,!0,n)};St.hydrateRoot=function(t,e,n){if(!pf(t))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=c0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=u0(e,null,t,1,n??null,i,!1,s,o),t[wn]=e.current,wo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new gu(e)};St.render=function(t,e,n){if(!yu(e))throw Error(M(200));return _u(null,t,e,!1,n)};St.unmountComponentAtNode=function(t){if(!yu(t))throw Error(M(40));return t._reactRootContainer?(Qr(function(){_u(null,null,t,!1,function(){t._reactRootContainer=null,t[wn]=null})}),!0):!1};St.unstable_batchedUpdates=af;St.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!yu(n))throw Error(M(200));if(t==null||t._reactInternals===void 0)throw Error(M(38));return _u(t,e,n,!1,r)};St.version="18.3.1-next-f1338f8080-20240426";function h0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h0)}catch(t){console.error(t)}}h0(),h_.exports=St;var fS=h_.exports,fg=fS;Jc.createRoot=fg.createRoot,Jc.hydrateRoot=fg.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var pS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),oe=(t,e)=>{const n=Z.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:l="",children:u,...c},p)=>Z.createElement("svg",{ref:p,...pS,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${mS(t)}`,l].join(" "),...c},[...e.map(([m,g])=>Z.createElement(m,g)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=oe("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vc=oe("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=oe("Bug",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=oe("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=oe("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=oe("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=oe("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=oe("Crop",[["path",{d:"M6 2v14a2 2 0 0 0 2 2h14",key:"ron5a4"}],["path",{d:"M18 22V8a2 2 0 0 0-2-2H2",key:"7s9ehn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=oe("Crown",[["path",{d:"m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14",key:"zkxr6b"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=oe("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=oe("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=oe("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=oe("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Po=oe("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=oe("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const No=oe("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=oe("Medal",[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",key:"143lza"}],["path",{d:"M11 12 5.12 2.2",key:"qhuxz6"}],["path",{d:"m13 12 5.88-9.8",key:"hbye0f"}],["path",{d:"M8 7h8",key:"i86dvs"}],["circle",{cx:"12",cy:"17",r:"5",key:"qbz8iq"}],["path",{d:"M12 18v-2h-.5",key:"fawc4q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const to=oe("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=oe("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=oe("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=oe("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=oe("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS=oe("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=oe("Share",[["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["polyline",{points:"16 6 12 2 8 6",key:"m901s6"}],["line",{x1:"12",x2:"12",y1:"2",y2:"15",key:"1p0rca"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=oe("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=oe("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=oe("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=oe("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=oe("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=oe("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=oe("Voicemail",[["circle",{cx:"6",cy:"12",r:"4",key:"1ehtga"}],["circle",{cx:"18",cy:"12",r:"4",key:"4vafl8"}],["line",{x1:"6",x2:"18",y1:"16",y2:"16",key:"pmt8us"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=oe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),NS=()=>{};var yg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},RS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},T0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,p=s>>2,m=(s&3)<<4|l>>4;let g=(l&15)<<2|c>>6,C=c&63;u||(C=64,o||(g=64)),r.push(n[p],n[m],n[g],n[C])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(E0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):RS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||m==null)throw new bS;const g=s<<2|l>>4;if(r.push(g),c!==64){const C=l<<4&240|c>>2;if(r.push(C),m!==64){const N=c<<6&192|m;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class bS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const DS=function(t){const e=E0(t);return T0.encodeByteArray(e,!0)},bl=function(t){return DS(t).replace(/\./g,"")},yf=function(t){try{return T0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function OS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const VS=()=>OS().__FIREBASE_DEFAULTS__,LS=()=>{if(typeof process>"u"||typeof yg>"u")return;const t=yg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},MS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&yf(t[1]);return e&&JSON.parse(e)},vu=()=>{try{return NS()||VS()||LS()||MS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},I0=t=>{var e,n;return(n=(e=vu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},jS=t=>{const e=I0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},S0=()=>{var t;return(t=vu())==null?void 0:t.config},x0=t=>{var e;return(e=vu())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Er(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function A0(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function FS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[bl(JSON.stringify(n)),bl(JSON.stringify(o)),""].join(".")}const no={};function zS(){const t={prod:[],emulator:[]};for(const e of Object.keys(no))no[e]?t.emulator.push(e):t.prod.push(e);return t}function $S(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let _g=!1;function C0(t,e){if(typeof window>"u"||typeof document>"u"||!Er(window.location.host)||no[t]===e||no[t]||_g)return;no[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",s=zS().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,C){g.setAttribute("width","24"),g.setAttribute("id",C),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function c(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{_g=!0,o()},g}function p(g,C){g.setAttribute("id",C),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=$S(r),C=n("text"),N=document.getElementById(C)||document.createElement("span"),R=n("learnmore"),b=document.getElementById(R)||document.createElement("a"),T=n("preprendIcon"),v=document.getElementById(T)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const x=g.element;l(x),p(b,R);const O=c();u(v,T),x.append(v,N,b,O),document.body.appendChild(x)}s?(N.innerText="Preview backend disconnected.",v.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(v.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function k0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ge())}function BS(){var e;const t=(e=vu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function P0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function N0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function R0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function HS(){const t=ge();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function WS(){return!BS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function qS(){try{return typeof indexedDB=="object"}catch{return!1}}function KS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS="FirebaseError";class Bt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=GS,Object.setPrototypeOf(this,Bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Tr.prototype.create)}}class Tr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?QS(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Bt(i,l,r)}}function QS(t,e){return t.replace(XS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const XS=/\{\$([^}]+)}/g;function YS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(vg(s)&&vg(o)){if(!Xr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function vg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ms(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function js(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function b0(t,e){const n=new JS(t,e);return n.subscribe.bind(n)}class JS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ZS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Lc),i.error===void 0&&(i.error=Lc),i.complete===void 0&&(i.complete=Lc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ZS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Lc(){}/**
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
 */function be(t){return t&&t._delegate?t._delegate:t}class In{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Lr="[DEFAULT]";/**
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
 */class ex{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new US;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(nx(e))try{this.getOrInitializeService({instanceIdentifier:Lr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Lr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Lr){return this.instances.has(e)}getOptions(e=Lr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:tx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Lr){return this.component?this.component.multipleInstances?e:Lr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tx(t){return t===Lr?void 0:t}function nx(t){return t.instantiationMode==="EAGER"}/**
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
 */class rx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ex(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const ix={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},sx=ee.INFO,ox={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},ax=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=ox[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wu{constructor(e){this.name=e,this._logLevel=sx,this._logHandler=ax,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ix[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const lx=(t,e)=>e.some(n=>t instanceof n);let wg,Eg;function ux(){return wg||(wg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cx(){return Eg||(Eg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const D0=new WeakMap,Wh=new WeakMap,O0=new WeakMap,Mc=new WeakMap,_f=new WeakMap;function hx(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(sr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&D0.set(n,t)}).catch(()=>{}),_f.set(e,t),e}function dx(t){if(Wh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Wh.set(t,e)}let qh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Wh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||O0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function fx(t){qh=t(qh)}function px(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(jc(this),e,...n);return O0.set(r,e.sort?e.sort():[e]),sr(r)}:cx().includes(t)?function(...e){return t.apply(jc(this),e),sr(D0.get(this))}:function(...e){return sr(t.apply(jc(this),e))}}function mx(t){return typeof t=="function"?px(t):(t instanceof IDBTransaction&&dx(t),lx(t,ux())?new Proxy(t,qh):t)}function sr(t){if(t instanceof IDBRequest)return hx(t);if(Mc.has(t))return Mc.get(t);const e=mx(t);return e!==t&&(Mc.set(t,e),_f.set(e,t)),e}const jc=t=>_f.get(t);function gx(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=sr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(sr(o.result),u.oldVersion,u.newVersion,sr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const yx=["get","getKey","getAll","getAllKeys","count"],_x=["put","add","delete","clear"],Uc=new Map;function Tg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Uc.get(e))return Uc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=_x.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||yx.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Uc.set(e,s),s}fx(t=>({...t,get:(e,n,r)=>Tg(e,n)||t.get(e,n,r),has:(e,n)=>!!Tg(e,n)||t.has(e,n)}));/**
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
 */class vx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function wx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kh="@firebase/app",Ig="0.14.3";/**
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
 */const Sn=new wu("@firebase/app"),Ex="@firebase/app-compat",Tx="@firebase/analytics-compat",Ix="@firebase/analytics",Sx="@firebase/app-check-compat",xx="@firebase/app-check",Ax="@firebase/auth",Cx="@firebase/auth-compat",kx="@firebase/database",Px="@firebase/data-connect",Nx="@firebase/database-compat",Rx="@firebase/functions",bx="@firebase/functions-compat",Dx="@firebase/installations",Ox="@firebase/installations-compat",Vx="@firebase/messaging",Lx="@firebase/messaging-compat",Mx="@firebase/performance",jx="@firebase/performance-compat",Ux="@firebase/remote-config",Fx="@firebase/remote-config-compat",zx="@firebase/storage",$x="@firebase/storage-compat",Bx="@firebase/firestore",Hx="@firebase/ai",Wx="@firebase/firestore-compat",qx="firebase",Kx="12.3.0";/**
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
 */const Gh="[DEFAULT]",Gx={[Kh]:"fire-core",[Ex]:"fire-core-compat",[Ix]:"fire-analytics",[Tx]:"fire-analytics-compat",[xx]:"fire-app-check",[Sx]:"fire-app-check-compat",[Ax]:"fire-auth",[Cx]:"fire-auth-compat",[kx]:"fire-rtdb",[Px]:"fire-data-connect",[Nx]:"fire-rtdb-compat",[Rx]:"fire-fn",[bx]:"fire-fn-compat",[Dx]:"fire-iid",[Ox]:"fire-iid-compat",[Vx]:"fire-fcm",[Lx]:"fire-fcm-compat",[Mx]:"fire-perf",[jx]:"fire-perf-compat",[Ux]:"fire-rc",[Fx]:"fire-rc-compat",[zx]:"fire-gcs",[$x]:"fire-gcs-compat",[Bx]:"fire-fst",[Wx]:"fire-fst-compat",[Hx]:"fire-vertex","fire-js":"fire-js",[qx]:"fire-js-all"};/**
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
 */const Dl=new Map,Qx=new Map,Qh=new Map;function Sg(t,e){try{t.container.addComponent(e)}catch(n){Sn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function hr(t){const e=t.name;if(Qh.has(e))return Sn.debug(`There were multiple attempts to register component ${e}.`),!1;Qh.set(e,t);for(const n of Dl.values())Sg(n,t);for(const n of Qx.values())Sg(n,t);return!0}function vf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function $e(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Xx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},or=new Tr("app","Firebase",Xx);/**
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
 */class Yx{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new In("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw or.create("app-deleted",{appName:this._name})}}/**
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
 */const Pn=Kx;function V0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Gh,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw or.create("bad-app-name",{appName:String(i)});if(n||(n=S0()),!n)throw or.create("no-options");const s=Dl.get(i);if(s){if(Xr(n,s.options)&&Xr(r,s.config))return s;throw or.create("duplicate-app",{appName:i})}const o=new rx(i);for(const u of Qh.values())o.addComponent(u);const l=new Yx(n,r,o);return Dl.set(i,l),l}function L0(t=Gh){const e=Dl.get(t);if(!e&&t===Gh&&S0())return V0();if(!e)throw or.create("no-app",{appName:t});return e}function Zt(t,e,n){let r=Gx[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Sn.warn(o.join(" "));return}hr(new In(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Jx="firebase-heartbeat-database",Zx=1,Ro="firebase-heartbeat-store";let Fc=null;function M0(){return Fc||(Fc=gx(Jx,Zx,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ro)}catch(n){console.warn(n)}}}}).catch(t=>{throw or.create("idb-open",{originalErrorMessage:t.message})})),Fc}async function eA(t){try{const n=(await M0()).transaction(Ro),r=await n.objectStore(Ro).get(j0(t));return await n.done,r}catch(e){if(e instanceof Bt)Sn.warn(e.message);else{const n=or.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Sn.warn(n.message)}}}async function xg(t,e){try{const r=(await M0()).transaction(Ro,"readwrite");await r.objectStore(Ro).put(e,j0(t)),await r.done}catch(n){if(n instanceof Bt)Sn.warn(n.message);else{const r=or.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Sn.warn(r.message)}}}function j0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const tA=1024,nA=30;class rA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ag();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>nA){const o=oA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Sn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ag(),{heartbeatsToSend:r,unsentEntries:i}=iA(this._heartbeatsCache.heartbeats),s=bl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Sn.warn(n),""}}}function Ag(){return new Date().toISOString().substring(0,10)}function iA(t,e=tA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Cg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Cg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class sA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qS()?KS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await eA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return xg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return xg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Cg(t){return bl(JSON.stringify({version:2,heartbeats:t})).length}function oA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function aA(t){hr(new In("platform-logger",e=>new vx(e),"PRIVATE")),hr(new In("heartbeat",e=>new rA(e),"PRIVATE")),Zt(Kh,Ig,t),Zt(Kh,Ig,"esm2020"),Zt("fire-js","")}aA("");var kg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ar,U0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,_){function E(){}E.prototype=_.prototype,w.F=_.prototype,w.prototype=new E,w.prototype.constructor=w,w.D=function(S,A,k){for(var I=Array(arguments.length-2),He=2;He<arguments.length;He++)I[He-2]=arguments[He];return _.prototype[A].apply(S,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,_,E){E||(E=0);const S=Array(16);if(typeof _=="string")for(var A=0;A<16;++A)S[A]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(A=0;A<16;++A)S[A]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=w.g[0],E=w.g[1],A=w.g[2];let k=w.g[3],I;I=_+(k^E&(A^k))+S[0]+3614090360&4294967295,_=E+(I<<7&4294967295|I>>>25),I=k+(A^_&(E^A))+S[1]+3905402710&4294967295,k=_+(I<<12&4294967295|I>>>20),I=A+(E^k&(_^E))+S[2]+606105819&4294967295,A=k+(I<<17&4294967295|I>>>15),I=E+(_^A&(k^_))+S[3]+3250441966&4294967295,E=A+(I<<22&4294967295|I>>>10),I=_+(k^E&(A^k))+S[4]+4118548399&4294967295,_=E+(I<<7&4294967295|I>>>25),I=k+(A^_&(E^A))+S[5]+1200080426&4294967295,k=_+(I<<12&4294967295|I>>>20),I=A+(E^k&(_^E))+S[6]+2821735955&4294967295,A=k+(I<<17&4294967295|I>>>15),I=E+(_^A&(k^_))+S[7]+4249261313&4294967295,E=A+(I<<22&4294967295|I>>>10),I=_+(k^E&(A^k))+S[8]+1770035416&4294967295,_=E+(I<<7&4294967295|I>>>25),I=k+(A^_&(E^A))+S[9]+2336552879&4294967295,k=_+(I<<12&4294967295|I>>>20),I=A+(E^k&(_^E))+S[10]+4294925233&4294967295,A=k+(I<<17&4294967295|I>>>15),I=E+(_^A&(k^_))+S[11]+2304563134&4294967295,E=A+(I<<22&4294967295|I>>>10),I=_+(k^E&(A^k))+S[12]+1804603682&4294967295,_=E+(I<<7&4294967295|I>>>25),I=k+(A^_&(E^A))+S[13]+4254626195&4294967295,k=_+(I<<12&4294967295|I>>>20),I=A+(E^k&(_^E))+S[14]+2792965006&4294967295,A=k+(I<<17&4294967295|I>>>15),I=E+(_^A&(k^_))+S[15]+1236535329&4294967295,E=A+(I<<22&4294967295|I>>>10),I=_+(A^k&(E^A))+S[1]+4129170786&4294967295,_=E+(I<<5&4294967295|I>>>27),I=k+(E^A&(_^E))+S[6]+3225465664&4294967295,k=_+(I<<9&4294967295|I>>>23),I=A+(_^E&(k^_))+S[11]+643717713&4294967295,A=k+(I<<14&4294967295|I>>>18),I=E+(k^_&(A^k))+S[0]+3921069994&4294967295,E=A+(I<<20&4294967295|I>>>12),I=_+(A^k&(E^A))+S[5]+3593408605&4294967295,_=E+(I<<5&4294967295|I>>>27),I=k+(E^A&(_^E))+S[10]+38016083&4294967295,k=_+(I<<9&4294967295|I>>>23),I=A+(_^E&(k^_))+S[15]+3634488961&4294967295,A=k+(I<<14&4294967295|I>>>18),I=E+(k^_&(A^k))+S[4]+3889429448&4294967295,E=A+(I<<20&4294967295|I>>>12),I=_+(A^k&(E^A))+S[9]+568446438&4294967295,_=E+(I<<5&4294967295|I>>>27),I=k+(E^A&(_^E))+S[14]+3275163606&4294967295,k=_+(I<<9&4294967295|I>>>23),I=A+(_^E&(k^_))+S[3]+4107603335&4294967295,A=k+(I<<14&4294967295|I>>>18),I=E+(k^_&(A^k))+S[8]+1163531501&4294967295,E=A+(I<<20&4294967295|I>>>12),I=_+(A^k&(E^A))+S[13]+2850285829&4294967295,_=E+(I<<5&4294967295|I>>>27),I=k+(E^A&(_^E))+S[2]+4243563512&4294967295,k=_+(I<<9&4294967295|I>>>23),I=A+(_^E&(k^_))+S[7]+1735328473&4294967295,A=k+(I<<14&4294967295|I>>>18),I=E+(k^_&(A^k))+S[12]+2368359562&4294967295,E=A+(I<<20&4294967295|I>>>12),I=_+(E^A^k)+S[5]+4294588738&4294967295,_=E+(I<<4&4294967295|I>>>28),I=k+(_^E^A)+S[8]+2272392833&4294967295,k=_+(I<<11&4294967295|I>>>21),I=A+(k^_^E)+S[11]+1839030562&4294967295,A=k+(I<<16&4294967295|I>>>16),I=E+(A^k^_)+S[14]+4259657740&4294967295,E=A+(I<<23&4294967295|I>>>9),I=_+(E^A^k)+S[1]+2763975236&4294967295,_=E+(I<<4&4294967295|I>>>28),I=k+(_^E^A)+S[4]+1272893353&4294967295,k=_+(I<<11&4294967295|I>>>21),I=A+(k^_^E)+S[7]+4139469664&4294967295,A=k+(I<<16&4294967295|I>>>16),I=E+(A^k^_)+S[10]+3200236656&4294967295,E=A+(I<<23&4294967295|I>>>9),I=_+(E^A^k)+S[13]+681279174&4294967295,_=E+(I<<4&4294967295|I>>>28),I=k+(_^E^A)+S[0]+3936430074&4294967295,k=_+(I<<11&4294967295|I>>>21),I=A+(k^_^E)+S[3]+3572445317&4294967295,A=k+(I<<16&4294967295|I>>>16),I=E+(A^k^_)+S[6]+76029189&4294967295,E=A+(I<<23&4294967295|I>>>9),I=_+(E^A^k)+S[9]+3654602809&4294967295,_=E+(I<<4&4294967295|I>>>28),I=k+(_^E^A)+S[12]+3873151461&4294967295,k=_+(I<<11&4294967295|I>>>21),I=A+(k^_^E)+S[15]+530742520&4294967295,A=k+(I<<16&4294967295|I>>>16),I=E+(A^k^_)+S[2]+3299628645&4294967295,E=A+(I<<23&4294967295|I>>>9),I=_+(A^(E|~k))+S[0]+4096336452&4294967295,_=E+(I<<6&4294967295|I>>>26),I=k+(E^(_|~A))+S[7]+1126891415&4294967295,k=_+(I<<10&4294967295|I>>>22),I=A+(_^(k|~E))+S[14]+2878612391&4294967295,A=k+(I<<15&4294967295|I>>>17),I=E+(k^(A|~_))+S[5]+4237533241&4294967295,E=A+(I<<21&4294967295|I>>>11),I=_+(A^(E|~k))+S[12]+1700485571&4294967295,_=E+(I<<6&4294967295|I>>>26),I=k+(E^(_|~A))+S[3]+2399980690&4294967295,k=_+(I<<10&4294967295|I>>>22),I=A+(_^(k|~E))+S[10]+4293915773&4294967295,A=k+(I<<15&4294967295|I>>>17),I=E+(k^(A|~_))+S[1]+2240044497&4294967295,E=A+(I<<21&4294967295|I>>>11),I=_+(A^(E|~k))+S[8]+1873313359&4294967295,_=E+(I<<6&4294967295|I>>>26),I=k+(E^(_|~A))+S[15]+4264355552&4294967295,k=_+(I<<10&4294967295|I>>>22),I=A+(_^(k|~E))+S[6]+2734768916&4294967295,A=k+(I<<15&4294967295|I>>>17),I=E+(k^(A|~_))+S[13]+1309151649&4294967295,E=A+(I<<21&4294967295|I>>>11),I=_+(A^(E|~k))+S[4]+4149444226&4294967295,_=E+(I<<6&4294967295|I>>>26),I=k+(E^(_|~A))+S[11]+3174756917&4294967295,k=_+(I<<10&4294967295|I>>>22),I=A+(_^(k|~E))+S[2]+718787259&4294967295,A=k+(I<<15&4294967295|I>>>17),I=E+(k^(A|~_))+S[9]+3951481745&4294967295,w.g[0]=w.g[0]+_&4294967295,w.g[1]=w.g[1]+(A+(I<<21&4294967295|I>>>11))&4294967295,w.g[2]=w.g[2]+A&4294967295,w.g[3]=w.g[3]+k&4294967295}r.prototype.v=function(w,_){_===void 0&&(_=w.length);const E=_-this.blockSize,S=this.C;let A=this.h,k=0;for(;k<_;){if(A==0)for(;k<=E;)i(this,w,k),k+=this.blockSize;if(typeof w=="string"){for(;k<_;)if(S[A++]=w.charCodeAt(k++),A==this.blockSize){i(this,S),A=0;break}}else for(;k<_;)if(S[A++]=w[k++],A==this.blockSize){i(this,S),A=0;break}}this.h=A,this.o+=_},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var _=1;_<w.length-8;++_)w[_]=0;_=this.o*8;for(var E=w.length-8;E<w.length;++E)w[E]=_&255,_/=256;for(this.v(w),w=Array(16),_=0,E=0;E<4;++E)for(let S=0;S<32;S+=8)w[_++]=this.g[E]>>>S&255;return w};function s(w,_){var E=l;return Object.prototype.hasOwnProperty.call(E,w)?E[w]:E[w]=_(w)}function o(w,_){this.h=_;const E=[];let S=!0;for(let A=w.length-1;A>=0;A--){const k=w[A]|0;S&&k==_||(E[A]=k,S=!1)}this.g=E}var l={};function u(w){return-128<=w&&w<128?s(w,function(_){return new o([_|0],_<0?-1:0)}):new o([w|0],w<0?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return m;if(w<0)return b(c(-w));const _=[];let E=1;for(let S=0;w>=E;S++)_[S]=w/E|0,E*=4294967296;return new o(_,0)}function p(w,_){if(w.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(w.charAt(0)=="-")return b(p(w.substring(1),_));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=c(Math.pow(_,8));let S=m;for(let k=0;k<w.length;k+=8){var A=Math.min(8,w.length-k);const I=parseInt(w.substring(k,k+A),_);A<8?(A=c(Math.pow(_,A)),S=S.j(A).add(c(I))):(S=S.j(E),S=S.add(c(I)))}return S}var m=u(0),g=u(1),C=u(16777216);t=o.prototype,t.m=function(){if(R(this))return-b(this).m();let w=0,_=1;for(let E=0;E<this.g.length;E++){const S=this.i(E);w+=(S>=0?S:4294967296+S)*_,_*=4294967296}return w},t.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(N(this))return"0";if(R(this))return"-"+b(this).toString(w);const _=c(Math.pow(w,6));var E=this;let S="";for(;;){const A=O(E,_).g;E=T(E,A.j(_));let k=((E.g.length>0?E.g[0]:E.h)>>>0).toString(w);if(E=A,N(E))return k+S;for(;k.length<6;)k="0"+k;S=k+S}},t.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function N(w){if(w.h!=0)return!1;for(let _=0;_<w.g.length;_++)if(w.g[_]!=0)return!1;return!0}function R(w){return w.h==-1}t.l=function(w){return w=T(this,w),R(w)?-1:N(w)?0:1};function b(w){const _=w.g.length,E=[];for(let S=0;S<_;S++)E[S]=~w.g[S];return new o(E,~w.h).add(g)}t.abs=function(){return R(this)?b(this):this},t.add=function(w){const _=Math.max(this.g.length,w.g.length),E=[];let S=0;for(let A=0;A<=_;A++){let k=S+(this.i(A)&65535)+(w.i(A)&65535),I=(k>>>16)+(this.i(A)>>>16)+(w.i(A)>>>16);S=I>>>16,k&=65535,I&=65535,E[A]=I<<16|k}return new o(E,E[E.length-1]&-2147483648?-1:0)};function T(w,_){return w.add(b(_))}t.j=function(w){if(N(this)||N(w))return m;if(R(this))return R(w)?b(this).j(b(w)):b(b(this).j(w));if(R(w))return b(this.j(b(w)));if(this.l(C)<0&&w.l(C)<0)return c(this.m()*w.m());const _=this.g.length+w.g.length,E=[];for(var S=0;S<2*_;S++)E[S]=0;for(S=0;S<this.g.length;S++)for(let A=0;A<w.g.length;A++){const k=this.i(S)>>>16,I=this.i(S)&65535,He=w.i(A)>>>16,cn=w.i(A)&65535;E[2*S+2*A]+=I*cn,v(E,2*S+2*A),E[2*S+2*A+1]+=k*cn,v(E,2*S+2*A+1),E[2*S+2*A+1]+=I*He,v(E,2*S+2*A+1),E[2*S+2*A+2]+=k*He,v(E,2*S+2*A+2)}for(w=0;w<_;w++)E[w]=E[2*w+1]<<16|E[2*w];for(w=_;w<2*_;w++)E[w]=0;return new o(E,0)};function v(w,_){for(;(w[_]&65535)!=w[_];)w[_+1]+=w[_]>>>16,w[_]&=65535,_++}function x(w,_){this.g=w,this.h=_}function O(w,_){if(N(_))throw Error("division by zero");if(N(w))return new x(m,m);if(R(w))return _=O(b(w),_),new x(b(_.g),b(_.h));if(R(_))return _=O(w,b(_)),new x(b(_.g),_.h);if(w.g.length>30){if(R(w)||R(_))throw Error("slowDivide_ only works with positive integers.");for(var E=g,S=_;S.l(w)<=0;)E=U(E),S=U(S);var A=F(E,1),k=F(S,1);for(S=F(S,2),E=F(E,2);!N(S);){var I=k.add(S);I.l(w)<=0&&(A=A.add(E),k=I),S=F(S,1),E=F(E,1)}return _=T(w,A.j(_)),new x(A,_)}for(A=m;w.l(_)>=0;){for(E=Math.max(1,Math.floor(w.m()/_.m())),S=Math.ceil(Math.log(E)/Math.LN2),S=S<=48?1:Math.pow(2,S-48),k=c(E),I=k.j(_);R(I)||I.l(w)>0;)E-=S,k=c(E),I=k.j(_);N(k)&&(k=g),A=A.add(k),w=T(w,I)}return new x(A,w)}t.B=function(w){return O(this,w).h},t.and=function(w){const _=Math.max(this.g.length,w.g.length),E=[];for(let S=0;S<_;S++)E[S]=this.i(S)&w.i(S);return new o(E,this.h&w.h)},t.or=function(w){const _=Math.max(this.g.length,w.g.length),E=[];for(let S=0;S<_;S++)E[S]=this.i(S)|w.i(S);return new o(E,this.h|w.h)},t.xor=function(w){const _=Math.max(this.g.length,w.g.length),E=[];for(let S=0;S<_;S++)E[S]=this.i(S)^w.i(S);return new o(E,this.h^w.h)};function U(w){const _=w.g.length+1,E=[];for(let S=0;S<_;S++)E[S]=w.i(S)<<1|w.i(S-1)>>>31;return new o(E,w.h)}function F(w,_){const E=_>>5;_%=32;const S=w.g.length-E,A=[];for(let k=0;k<S;k++)A[k]=_>0?w.i(k+E)>>>_|w.i(k+E+1)<<32-_:w.i(k+E);return new o(A,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,U0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=p,ar=o}).apply(typeof kg<"u"?kg:typeof self<"u"?self:typeof window<"u"?window:{});var Na=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var F0,Us,z0,Qa,Xh,$0,B0,H0;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Na=="object"&&Na];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var P=a[y];if(!(P in f))break e;f=f[P]}a=a[a.length-1],y=f[a],h=h(y),h!=y&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var f=[],y;for(y in h)Object.prototype.hasOwnProperty.call(h,y)&&f.push([y,h[y]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,f){return a.call.apply(a.bind,arguments)}function c(a,h,f){return c=u,c.apply(null,arguments)}function p(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var y=f.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function m(a,h){function f(){}f.prototype=h.prototype,a.Z=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(y,P,D){for(var j=Array(arguments.length-2),J=2;J<arguments.length;J++)j[J-2]=arguments[J];return h.prototype[P].apply(y,j)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function C(a){const h=a.length;if(h>0){const f=Array(h);for(let y=0;y<h;y++)f[y]=a[y];return f}return[]}function N(a,h){for(let y=1;y<arguments.length;y++){const P=arguments[y];var f=typeof P;if(f=f!="object"?f:P?Array.isArray(P)?"array":f:"null",f=="array"||f=="object"&&typeof P.length=="number"){f=a.length||0;const D=P.length||0;a.length=f+D;for(let j=0;j<D;j++)a[f+j]=P[j]}else a.push(P)}}class R{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function b(a){o.setTimeout(()=>{throw a},0)}function T(){var a=w;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class v{constructor(){this.h=this.g=null}add(h,f){const y=x.get();y.set(h,f),this.h?this.h.next=y:this.g=y,this.h=y}}var x=new R(()=>new O,a=>a.reset());class O{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let U,F=!1,w=new v,_=()=>{const a=Promise.resolve(void 0);U=()=>{a.then(E)}};function E(){for(var a;a=T();){try{a.h.call(a.g)}catch(f){b(f)}var h=x;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}F=!1}function S(){this.u=this.u,this.C=this.C}S.prototype.u=!1,S.prototype.dispose=function(){this.u||(this.u=!0,this.N())},S.prototype[Symbol.dispose]=function(){this.dispose()},S.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var k=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,h),o.removeEventListener("test",f,h)}catch{}return a}();function I(a){return/^[\s\xa0]*$/.test(a)}function He(a,h){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}m(He,A),He.prototype.init=function(a,h){const f=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&He.Z.h.call(this)},He.prototype.h=function(){He.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var cn="closure_listenable_"+(Math.random()*1e6|0),as=0;function ls(a,h,f,y,P){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!y,this.ha=P,this.key=++as,this.da=this.fa=!1}function z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function G(a,h,f){for(const y in a)h.call(f,a[y],y,a)}function Y(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function ye(a){const h={};for(const f in a)h[f]=a[f];return h}const Ae="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Cr(a,h){let f,y;for(let P=1;P<arguments.length;P++){y=arguments[P];for(f in y)a[f]=y[f];for(let D=0;D<Ae.length;D++)f=Ae[D],Object.prototype.hasOwnProperty.call(y,f)&&(a[f]=y[f])}}function At(a){this.src=a,this.g={},this.h=0}At.prototype.add=function(a,h,f,y,P){const D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);const j=Ot(a,h,y,P);return j>-1?(h=a[j],f||(h.fa=!1)):(h=new ls(h,this.src,D,!!y,P),h.fa=f,a.push(h)),h};function kr(a,h){const f=h.type;if(f in a.g){var y=a.g[f],P=Array.prototype.indexOf.call(y,h,void 0),D;(D=P>=0)&&Array.prototype.splice.call(y,P,1),D&&(z(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Ot(a,h,f,y){for(let P=0;P<a.length;++P){const D=a[P];if(!D.da&&D.listener==h&&D.capture==!!f&&D.ha==y)return P}return-1}var Nn="closure_lm_"+(Math.random()*1e6|0),$u={};function ap(a,h,f,y,P){if(Array.isArray(h)){for(let D=0;D<h.length;D++)ap(a,h[D],f,y,P);return null}return f=cp(f),a&&a[cn]?a.J(h,f,l(y)?!!y.capture:!!y,P):dE(a,h,f,!1,y,P)}function dE(a,h,f,y,P,D){if(!h)throw Error("Invalid event type");const j=l(P)?!!P.capture:!!P;let J=Hu(a);if(J||(a[Nn]=J=new At(a)),f=J.add(h,f,y,j,D),f.proxy)return f;if(y=fE(),f.proxy=y,y.src=a,y.listener=f,a.addEventListener)k||(P=j),P===void 0&&(P=!1),a.addEventListener(h.toString(),y,P);else if(a.attachEvent)a.attachEvent(up(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return f}function fE(){function a(f){return h.call(a.src,a.listener,f)}const h=pE;return a}function lp(a,h,f,y,P){if(Array.isArray(h))for(var D=0;D<h.length;D++)lp(a,h[D],f,y,P);else y=l(y)?!!y.capture:!!y,f=cp(f),a&&a[cn]?(a=a.i,D=String(h).toString(),D in a.g&&(h=a.g[D],f=Ot(h,f,y,P),f>-1&&(z(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete a.g[D],a.h--)))):a&&(a=Hu(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Ot(h,f,y,P)),(f=a>-1?h[a]:null)&&Bu(f))}function Bu(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[cn])kr(h.i,a);else{var f=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(f,y,a.capture):h.detachEvent?h.detachEvent(up(f),y):h.addListener&&h.removeListener&&h.removeListener(y),(f=Hu(h))?(kr(f,a),f.h==0&&(f.src=null,h[Nn]=null)):z(a)}}}function up(a){return a in $u?$u[a]:$u[a]="on"+a}function pE(a,h){if(a.da)a=!0;else{h=new He(h,this);const f=a.listener,y=a.ha||a.src;a.fa&&Bu(a),a=f.call(y,h)}return a}function Hu(a){return a=a[Nn],a instanceof At?a:null}var Wu="__closure_events_fn_"+(Math.random()*1e9>>>0);function cp(a){return typeof a=="function"?a:(a[Wu]||(a[Wu]=function(h){return a.handleEvent(h)}),a[Wu])}function Ye(){S.call(this),this.i=new At(this),this.M=this,this.G=null}m(Ye,S),Ye.prototype[cn]=!0,Ye.prototype.removeEventListener=function(a,h,f,y){lp(this,a,h,f,y)};function st(a,h){var f,y=a.G;if(y)for(f=[];y;y=y.G)f.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new A(h,a);else if(h instanceof A)h.target=h.target||a;else{var P=h;h=new A(y,a),Cr(h,P)}P=!0;let D,j;if(f)for(j=f.length-1;j>=0;j--)D=h.g=f[j],P=ta(D,y,!0,h)&&P;if(D=h.g=a,P=ta(D,y,!0,h)&&P,P=ta(D,y,!1,h)&&P,f)for(j=0;j<f.length;j++)D=h.g=f[j],P=ta(D,y,!1,h)&&P}Ye.prototype.N=function(){if(Ye.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const f=a.g[h];for(let y=0;y<f.length;y++)z(f[y]);delete a.g[h],a.h--}}this.G=null},Ye.prototype.J=function(a,h,f,y){return this.i.add(String(a),h,!1,f,y)},Ye.prototype.K=function(a,h,f,y){return this.i.add(String(a),h,!0,f,y)};function ta(a,h,f,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let P=!0;for(let D=0;D<h.length;++D){const j=h[D];if(j&&!j.da&&j.capture==f){const J=j.listener,De=j.ha||j.src;j.fa&&kr(a.i,j),P=J.call(De,y)!==!1&&P}}return P&&!y.defaultPrevented}function mE(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function hp(a){a.g=mE(()=>{a.g=null,a.i&&(a.i=!1,hp(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class gE extends S{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:hp(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function us(a){S.call(this),this.h=a,this.g={}}m(us,S);var dp=[];function fp(a){G(a.g,function(h,f){this.g.hasOwnProperty(f)&&Bu(h)},a),a.g={}}us.prototype.N=function(){us.Z.N.call(this),fp(this)},us.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qu=o.JSON.stringify,yE=o.JSON.parse,_E=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function pp(){}function mp(){}var cs={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ku(){A.call(this,"d")}m(Ku,A);function Gu(){A.call(this,"c")}m(Gu,A);var Pr={},gp=null;function na(){return gp=gp||new Ye}Pr.Ia="serverreachability";function yp(a){A.call(this,Pr.Ia,a)}m(yp,A);function hs(a){const h=na();st(h,new yp(h))}Pr.STAT_EVENT="statevent";function _p(a,h){A.call(this,Pr.STAT_EVENT,a),this.stat=h}m(_p,A);function ot(a){const h=na();st(h,new _p(h,a))}Pr.Ja="timingevent";function vp(a,h){A.call(this,Pr.Ja,a),this.size=h}m(vp,A);function ds(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function fs(){this.g=!0}fs.prototype.ua=function(){this.g=!1};function vE(a,h,f,y,P,D){a.info(function(){if(a.g)if(D){var j="",J=D.split("&");for(let ce=0;ce<J.length;ce++){var De=J[ce].split("=");if(De.length>1){const Ue=De[0];De=De[1];const Wt=Ue.split("_");j=Wt.length>=2&&Wt[1]=="type"?j+(Ue+"="+De+"&"):j+(Ue+"=redacted&")}}}else j=null;else j=D;return"XMLHTTP REQ ("+y+") [attempt "+P+"]: "+h+`
`+f+`
`+j})}function wE(a,h,f,y,P,D,j){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+P+"]: "+h+`
`+f+`
`+D+" "+j})}function li(a,h,f,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+TE(a,f)+(y?" "+y:"")})}function EE(a,h){a.info(function(){return"TIMEOUT: "+h})}fs.prototype.info=function(){};function TE(a,h){if(!a.g)return h;if(!h)return null;try{const D=JSON.parse(h);if(D){for(a=0;a<D.length;a++)if(Array.isArray(D[a])){var f=D[a];if(!(f.length<2)){var y=f[1];if(Array.isArray(y)&&!(y.length<1)){var P=y[0];if(P!="noop"&&P!="stop"&&P!="close")for(let j=1;j<y.length;j++)y[j]=""}}}}return qu(D)}catch{return h}}var ra={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},wp={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ep;function Qu(){}m(Qu,pp),Qu.prototype.g=function(){return new XMLHttpRequest},Ep=new Qu;function ps(a){return encodeURIComponent(String(a))}function IE(a){var h=1;a=a.split(":");const f=[];for(;h>0&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function Rn(a,h,f,y){this.j=a,this.i=h,this.l=f,this.S=y||1,this.V=new us(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Tp}function Tp(){this.i=null,this.g="",this.h=!1}var Ip={},Xu={};function Yu(a,h,f){a.M=1,a.A=sa(Ht(h)),a.u=f,a.R=!0,Sp(a,null)}function Sp(a,h){a.F=Date.now(),ia(a),a.B=Ht(a.A);var f=a.B,y=a.S;Array.isArray(y)||(y=[String(y)]),Mp(f.i,"t",y),a.C=0,f=a.j.L,a.h=new Tp,a.g=tm(a.j,f?h:null,!a.u),a.P>0&&(a.O=new gE(c(a.Y,a,a.g),a.P)),h=a.V,f=a.g,y=a.ba;var P="readystatechange";Array.isArray(P)||(P&&(dp[0]=P.toString()),P=dp);for(let D=0;D<P.length;D++){const j=ap(f,P[D],y||h.handleEvent,!1,h.h||h);if(!j)break;h.g[j.key]=j}h=a.J?ye(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),hs(),vE(a.i,a.v,a.B,a.l,a.S,a.u)}Rn.prototype.ba=function(a){a=a.target;const h=this.O;h&&On(a)==3?h.j():this.Y(a)},Rn.prototype.Y=function(a){try{if(a==this.g)e:{const J=On(this.g),De=this.g.ya(),ce=this.g.ca();if(!(J<3)&&(J!=3||this.g&&(this.h.h||this.g.la()||Hp(this.g)))){this.K||J!=4||De==7||(De==8||ce<=0?hs(3):hs(2)),Ju(this);var h=this.g.ca();this.X=h;var f=SE(this);if(this.o=h==200,wE(this.i,this.v,this.B,this.l,this.S,J,h),this.o){if(this.U&&!this.L){t:{if(this.g){var y,P=this.g;if((y=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(y)){var D=y;break t}}D=null}if(a=D)li(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Zu(this,a);else{this.o=!1,this.m=3,ot(12),Nr(this),ms(this);break e}}if(this.R){a=!0;let Ue;for(;!this.K&&this.C<f.length;)if(Ue=xE(this,f),Ue==Xu){J==4&&(this.m=4,ot(14),a=!1),li(this.i,this.l,null,"[Incomplete Response]");break}else if(Ue==Ip){this.m=4,ot(15),li(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else li(this.i,this.l,Ue,null),Zu(this,Ue);if(xp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),J!=4||f.length!=0||this.h.h||(this.m=1,ot(16),a=!1),this.o=this.o&&a,!a)li(this.i,this.l,f,"[Invalid Chunked Response]"),Nr(this),ms(this);else if(f.length>0&&!this.W){this.W=!0;var j=this.j;j.g==this&&j.aa&&!j.P&&(j.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),ac(j),j.P=!0,ot(11))}}else li(this.i,this.l,f,null),Zu(this,f);J==4&&Nr(this),this.o&&!this.K&&(J==4?Yp(this.j,this):(this.o=!1,ia(this)))}else UE(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,ot(12)):(this.m=0,ot(13)),Nr(this),ms(this)}}}catch{}finally{}};function SE(a){if(!xp(a))return a.g.la();const h=Hp(a.g);if(h==="")return"";let f="";const y=h.length,P=On(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Nr(a),ms(a),"";a.h.i=new o.TextDecoder}for(let D=0;D<y;D++)a.h.h=!0,f+=a.h.i.decode(h[D],{stream:!(P&&D==y-1)});return h.length=0,a.h.g+=f,a.C=0,a.h.g}function xp(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function xE(a,h){var f=a.C,y=h.indexOf(`
`,f);return y==-1?Xu:(f=Number(h.substring(f,y)),isNaN(f)?Ip:(y+=1,y+f>h.length?Xu:(h=h.slice(y,y+f),a.C=y+f,h)))}Rn.prototype.cancel=function(){this.K=!0,Nr(this)};function ia(a){a.T=Date.now()+a.H,Ap(a,a.H)}function Ap(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ds(c(a.aa,a),h)}function Ju(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Rn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(EE(this.i,this.B),this.M!=2&&(hs(),ot(17)),Nr(this),this.m=2,ms(this)):Ap(this,this.T-a)};function ms(a){a.j.I==0||a.K||Yp(a.j,a)}function Nr(a){Ju(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,fp(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function Zu(a,h){try{var f=a.j;if(f.I!=0&&(f.g==a||ec(f.h,a))){if(!a.L&&ec(f.h,a)&&f.I==3){try{var y=f.Ba.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var P=y;if(P[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)ca(f),la(f);else break e;oc(f),ot(18)}}else f.xa=P[1],0<f.xa-f.K&&P[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=ds(c(f.Va,f),6e3));Pp(f.h)<=1&&f.ta&&(f.ta=void 0)}else br(f,11)}else if((a.L||f.g==a)&&ca(f),!I(h))for(P=f.Ba.g.parse(h),h=0;h<P.length;h++){let ce=P[h];const Ue=ce[0];if(!(Ue<=f.K))if(f.K=Ue,ce=ce[1],f.I==2)if(ce[0]=="c"){f.M=ce[1],f.ba=ce[2];const Wt=ce[3];Wt!=null&&(f.ka=Wt,f.j.info("VER="+f.ka));const Dr=ce[4];Dr!=null&&(f.za=Dr,f.j.info("SVER="+f.za));const Vn=ce[5];Vn!=null&&typeof Vn=="number"&&Vn>0&&(y=1.5*Vn,f.O=y,f.j.info("backChannelRequestTimeoutMs_="+y)),y=f;const Ln=a.g;if(Ln){const da=Ln.g?Ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(da){var D=y.h;D.g||da.indexOf("spdy")==-1&&da.indexOf("quic")==-1&&da.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(tc(D,D.h),D.h=null))}if(y.G){const lc=Ln.g?Ln.g.getResponseHeader("X-HTTP-Session-Id"):null;lc&&(y.wa=lc,de(y.J,y.G,lc))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),y=f;var j=a;if(y.na=em(y,y.L?y.ba:null,y.W),j.L){Np(y.h,j);var J=j,De=y.O;De&&(J.H=De),J.D&&(Ju(J),ia(J)),y.g=j}else Qp(y);f.i.length>0&&ua(f)}else ce[0]!="stop"&&ce[0]!="close"||br(f,7);else f.I==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?br(f,7):sc(f):ce[0]!="noop"&&f.l&&f.l.qa(ce),f.A=0)}}hs(4)}catch{}}var AE=class{constructor(a,h){this.g=a,this.map=h}};function Cp(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function kp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Pp(a){return a.h?1:a.g?a.g.size:0}function ec(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function tc(a,h){a.g?a.g.add(h):a.h=h}function Np(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Cp.prototype.cancel=function(){if(this.i=Rp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Rp(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.G);return h}return C(a.i)}var bp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function CE(a,h){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const y=a[f].indexOf("=");let P,D=null;y>=0?(P=a[f].substring(0,y),D=a[f].substring(y+1)):P=a[f],h(P,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function bn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof bn?(this.l=a.l,gs(this,a.j),this.o=a.o,this.g=a.g,ys(this,a.u),this.h=a.h,nc(this,jp(a.i)),this.m=a.m):a&&(h=String(a).match(bp))?(this.l=!1,gs(this,h[1]||"",!0),this.o=_s(h[2]||""),this.g=_s(h[3]||"",!0),ys(this,h[4]),this.h=_s(h[5]||"",!0),nc(this,h[6]||"",!0),this.m=_s(h[7]||"")):(this.l=!1,this.i=new ws(null,this.l))}bn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(vs(h,Dp,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(vs(h,Dp,!0),"@"),a.push(ps(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(vs(f,f.charAt(0)=="/"?NE:PE,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",vs(f,bE)),a.join("")},bn.prototype.resolve=function(a){const h=Ht(this);let f=!!a.j;f?gs(h,a.j):f=!!a.o,f?h.o=a.o:f=!!a.g,f?h.g=a.g:f=a.u!=null;var y=a.h;if(f)ys(h,a.u);else if(f=!!a.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var P=h.h.lastIndexOf("/");P!=-1&&(y=h.h.slice(0,P+1)+y)}if(P=y,P==".."||P==".")y="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){y=P.lastIndexOf("/",0)==0,P=P.split("/");const D=[];for(let j=0;j<P.length;){const J=P[j++];J=="."?y&&j==P.length&&D.push(""):J==".."?((D.length>1||D.length==1&&D[0]!="")&&D.pop(),y&&j==P.length&&D.push("")):(D.push(J),y=!0)}y=D.join("/")}else y=P}return f?h.h=y:f=a.i.toString()!=="",f?nc(h,jp(a.i)):f=!!a.m,f&&(h.m=a.m),h};function Ht(a){return new bn(a)}function gs(a,h,f){a.j=f?_s(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ys(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function nc(a,h,f){h instanceof ws?(a.i=h,DE(a.i,a.l)):(f||(h=vs(h,RE)),a.i=new ws(h,a.l))}function de(a,h,f){a.i.set(h,f)}function sa(a){return de(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function _s(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function vs(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,kE),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function kE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Dp=/[#\/\?@]/g,PE=/[#\?:]/g,NE=/[#\?]/g,RE=/[#\?@]/g,bE=/#/g;function ws(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Rr(a){a.g||(a.g=new Map,a.h=0,a.i&&CE(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=ws.prototype,t.add=function(a,h){Rr(this),this.i=null,a=ui(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Op(a,h){Rr(a),h=ui(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Vp(a,h){return Rr(a),h=ui(a,h),a.g.has(h)}t.forEach=function(a,h){Rr(this),this.g.forEach(function(f,y){f.forEach(function(P){a.call(h,P,y,this)},this)},this)};function Lp(a,h){Rr(a);let f=[];if(typeof h=="string")Vp(a,h)&&(f=f.concat(a.g.get(ui(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)f=f.concat(a[h]);return f}t.set=function(a,h){return Rr(this),this.i=null,a=ui(this,a),Vp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=Lp(this,a),a.length>0?String(a[0]):h):h};function Mp(a,h,f){Op(a,h),f.length>0&&(a.i=null,a.g.set(ui(a,h),C(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let y=0;y<h.length;y++){var f=h[y];const P=ps(f);f=Lp(this,f);for(let D=0;D<f.length;D++){let j=P;f[D]!==""&&(j+="="+ps(f[D])),a.push(j)}}return this.i=a.join("&")};function jp(a){const h=new ws;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function ui(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function DE(a,h){h&&!a.j&&(Rr(a),a.i=null,a.g.forEach(function(f,y){const P=y.toLowerCase();y!=P&&(Op(this,y),Mp(this,P,f))},a)),a.j=h}function OE(a,h){const f=new fs;if(o.Image){const y=new Image;y.onload=p(Dn,f,"TestLoadImage: loaded",!0,h,y),y.onerror=p(Dn,f,"TestLoadImage: error",!1,h,y),y.onabort=p(Dn,f,"TestLoadImage: abort",!1,h,y),y.ontimeout=p(Dn,f,"TestLoadImage: timeout",!1,h,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function VE(a,h){const f=new fs,y=new AbortController,P=setTimeout(()=>{y.abort(),Dn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(D=>{clearTimeout(P),D.ok?Dn(f,"TestPingServer: ok",!0,h):Dn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(P),Dn(f,"TestPingServer: error",!1,h)})}function Dn(a,h,f,y,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),y(f)}catch{}}function LE(){this.g=new _E}function rc(a){this.i=a.Sb||null,this.h=a.ab||!1}m(rc,pp),rc.prototype.g=function(){return new oa(this.i,this.h)};function oa(a,h){Ye.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(oa,Ye),t=oa.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Ts(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Es(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ts(this)),this.g&&(this.readyState=3,Ts(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Up(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Up(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Es(this):Ts(this),this.readyState==3&&Up(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Es(this))},t.Na=function(a){this.g&&(this.response=a,Es(this))},t.ga=function(){this.g&&Es(this)};function Es(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Ts(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Ts(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(oa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Fp(a){let h="";return G(a,function(f,y){h+=y,h+=":",h+=f,h+=`\r
`}),h}function ic(a,h,f){e:{for(y in f){var y=!1;break e}y=!0}y||(f=Fp(f),typeof a=="string"?f!=null&&ps(f):de(a,h,f))}function Se(a){Ye.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(Se,Ye);var ME=/^https?$/i,jE=["POST","PUT"];t=Se.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,f,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ep.g(),this.g.onreadystatechange=g(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){zp(this,D);return}if(a=f||"",f=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var P in y)f.set(P,y[P]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const D of y.keys())f.set(D,y.get(D));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(f.keys()).find(D=>D.toLowerCase()=="content-type"),P=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(jE,h,void 0)>=0)||y||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,j]of f)this.g.setRequestHeader(D,j);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(D){zp(this,D)}};function zp(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,$p(a),aa(a)}function $p(a){a.A||(a.A=!0,st(a,"complete"),st(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,st(this,"complete"),st(this,"abort"),aa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),aa(this,!0)),Se.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Bp(this):this.Xa())},t.Xa=function(){Bp(this)};function Bp(a){if(a.h&&typeof s<"u"){if(a.v&&On(a)==4)setTimeout(a.Ca.bind(a),0);else if(st(a,"readystatechange"),On(a)==4){a.h=!1;try{const D=a.ca();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var y;if(y=D===0){let j=String(a.D).match(bp)[1]||null;!j&&o.self&&o.self.location&&(j=o.self.location.protocol.slice(0,-1)),y=!ME.test(j?j.toLowerCase():"")}f=y}if(f)st(a,"complete"),st(a,"success");else{a.o=6;try{var P=On(a)>2?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.ca()+"]",$p(a)}}finally{aa(a)}}}}function aa(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,h||st(a,"ready");try{f.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function On(a){return a.g?a.g.readyState:0}t.ca=function(){try{return On(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),yE(h)}};function Hp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function UE(a){const h={};a=(a.g&&On(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(I(a[y]))continue;var f=IE(a[y]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const D=h[P]||[];h[P]=D,D.push(f)}Y(h,function(y){return y.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Is(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Wp(a){this.za=0,this.i=[],this.j=new fs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Is("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Is("baseRetryDelayMs",5e3,a),this.Za=Is("retryDelaySeedMs",1e4,a),this.Ta=Is("forwardChannelMaxRetries",2,a),this.va=Is("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Cp(a&&a.concurrentRequestLimit),this.Ba=new LE,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Wp.prototype,t.ka=8,t.I=1,t.connect=function(a,h,f,y){ot(0),this.W=a,this.H=h||{},f&&y!==void 0&&(this.H.OSID=f,this.H.OAID=y),this.F=this.X,this.J=em(this,null,this.W),ua(this)};function sc(a){if(qp(a),a.I==3){var h=a.V++,f=Ht(a.J);if(de(f,"SID",a.M),de(f,"RID",h),de(f,"TYPE","terminate"),Ss(a,f),h=new Rn(a,a.j,h),h.M=2,h.A=sa(Ht(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=h.A,f=!0),f||(h.g=tm(h.j,null),h.g.ea(h.A)),h.F=Date.now(),ia(h)}Zp(a)}function la(a){a.g&&(ac(a),a.g.cancel(),a.g=null)}function qp(a){la(a),a.v&&(o.clearTimeout(a.v),a.v=null),ca(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function ua(a){if(!kp(a.h)&&!a.m){a.m=!0;var h=a.Ea;U||_(),F||(U(),F=!0),w.add(h,a),a.D=0}}function FE(a,h){return Pp(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ds(c(a.Ea,a,h),Jp(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const P=new Rn(this,this.j,a);let D=this.o;if(this.U&&(D?(D=ye(D),Cr(D,this.U)):D=this.U),this.u!==null||this.R||(P.J=D,D=null),this.S)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var y=this.i[f];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,h>4096){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Gp(this,P,h),f=Ht(this.J),de(f,"RID",a),de(f,"CVER",22),this.G&&de(f,"X-HTTP-Session-Id",this.G),Ss(this,f),D&&(this.R?h="headers="+ps(Fp(D))+"&"+h:this.u&&ic(f,this.u,D)),tc(this.h,P),this.Ra&&de(f,"TYPE","init"),this.S?(de(f,"$req",h),de(f,"SID","null"),P.U=!0,Yu(P,f,null)):Yu(P,f,h),this.I=2}}else this.I==3&&(a?Kp(this,a):this.i.length==0||kp(this.h)||Kp(this))};function Kp(a,h){var f;h?f=h.l:f=a.V++;const y=Ht(a.J);de(y,"SID",a.M),de(y,"RID",f),de(y,"AID",a.K),Ss(a,y),a.u&&a.o&&ic(y,a.u,a.o),f=new Rn(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Gp(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),tc(a.h,f),Yu(f,y,h)}function Ss(a,h){a.H&&G(a.H,function(f,y){de(h,y,f)}),a.l&&G({},function(f,y){de(h,y,f)})}function Gp(a,h,f){f=Math.min(a.i.length,f);const y=a.l?c(a.l.Ka,a.l,a):null;e:{var P=a.i;let J=-1;for(;;){const De=["count="+f];J==-1?f>0?(J=P[0].g,De.push("ofs="+J)):J=0:De.push("ofs="+J);let ce=!0;for(let Ue=0;Ue<f;Ue++){var D=P[Ue].g;const Wt=P[Ue].map;if(D-=J,D<0)J=Math.max(0,P[Ue].g-100),ce=!1;else try{D="req"+D+"_"||"";try{var j=Wt instanceof Map?Wt:Object.entries(Wt);for(const[Dr,Vn]of j){let Ln=Vn;l(Vn)&&(Ln=qu(Vn)),De.push(D+Dr+"="+encodeURIComponent(Ln))}}catch(Dr){throw De.push(D+"type="+encodeURIComponent("_badmap")),Dr}}catch{y&&y(Wt)}}if(ce){j=De.join("&");break e}}j=void 0}return a=a.i.splice(0,f),h.G=a,j}function Qp(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;U||_(),F||(U(),F=!0),w.add(h,a),a.A=0}}function oc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ds(c(a.Da,a),Jp(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Xp(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ds(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ot(10),la(this),Xp(this))};function ac(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Xp(a){a.g=new Rn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=Ht(a.na);de(h,"RID","rpc"),de(h,"SID",a.M),de(h,"AID",a.K),de(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&de(h,"TO",a.ia),de(h,"TYPE","xmlhttp"),Ss(a,h),a.u&&a.o&&ic(h,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=sa(Ht(h)),f.u=null,f.R=!0,Sp(f,a)}t.Va=function(){this.C!=null&&(this.C=null,la(this),oc(this),ot(19))};function ca(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Yp(a,h){var f=null;if(a.g==h){ca(a),ac(a),a.g=null;var y=2}else if(ec(a.h,h))f=h.G,Np(a.h,h),y=1;else return;if(a.I!=0){if(h.o)if(y==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var P=a.D;y=na(),st(y,new vp(y,f)),ua(a)}else Qp(a);else if(P=h.m,P==3||P==0&&h.X>0||!(y==1&&FE(a,h)||y==2&&oc(a)))switch(f&&f.length>0&&(h=a.h,h.i=h.i.concat(f)),P){case 1:br(a,5);break;case 4:br(a,10);break;case 3:br(a,6);break;default:br(a,2)}}}function Jp(a,h){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*h}function br(a,h){if(a.j.info("Error code "+h),h==2){var f=c(a.bb,a),y=a.Ua;const P=!y;y=new bn(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||gs(y,"https"),sa(y),P?OE(y.toString(),f):VE(y.toString(),f)}else ot(2);a.I=0,a.l&&a.l.pa(h),Zp(a),qp(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function Zp(a){if(a.I=0,a.ja=[],a.l){const h=Rp(a.h);(h.length!=0||a.i.length!=0)&&(N(a.ja,h),N(a.ja,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.oa()}}function em(a,h,f){var y=f instanceof bn?Ht(f):new bn(f);if(y.g!="")h&&(y.g=h+"."+y.g),ys(y,y.u);else{var P=o.location;y=P.protocol,h=h?h+"."+P.hostname:P.hostname,P=+P.port;const D=new bn(null);y&&gs(D,y),h&&(D.g=h),P&&ys(D,P),f&&(D.h=f),y=D}return f=a.G,h=a.wa,f&&h&&de(y,f,h),de(y,"VER",a.ka),Ss(a,y),y}function tm(a,h,f){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Se(new rc({ab:f})):new Se(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function nm(){}t=nm.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function ha(){}ha.prototype.g=function(a,h){return new _t(a,h)};function _t(a,h){Ye.call(this),this.g=new Wp(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!I(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!I(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ci(this)}m(_t,Ye),_t.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},_t.prototype.close=function(){sc(this.g)},_t.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=qu(a),a=f);h.i.push(new AE(h.Ya++,a)),h.I==3&&ua(h)},_t.prototype.N=function(){this.g.l=null,delete this.j,sc(this.g),delete this.g,_t.Z.N.call(this)};function rm(a){Ku.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}m(rm,Ku);function im(){Gu.call(this),this.status=1}m(im,Gu);function ci(a){this.g=a}m(ci,nm),ci.prototype.ra=function(){st(this.g,"a")},ci.prototype.qa=function(a){st(this.g,new rm(a))},ci.prototype.pa=function(a){st(this.g,new im)},ci.prototype.oa=function(){st(this.g,"b")},ha.prototype.createWebChannel=ha.prototype.g,_t.prototype.send=_t.prototype.o,_t.prototype.open=_t.prototype.m,_t.prototype.close=_t.prototype.close,H0=function(){return new ha},B0=function(){return na()},$0=Pr,Xh={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ra.NO_ERROR=0,ra.TIMEOUT=8,ra.HTTP_ERROR=6,Qa=ra,wp.COMPLETE="complete",z0=wp,mp.EventType=cs,cs.OPEN="a",cs.CLOSE="b",cs.ERROR="c",cs.MESSAGE="d",Ye.prototype.listen=Ye.prototype.J,Us=mp,Se.prototype.listenOnce=Se.prototype.K,Se.prototype.getLastError=Se.prototype.Ha,Se.prototype.getLastErrorCode=Se.prototype.ya,Se.prototype.getStatus=Se.prototype.ca,Se.prototype.getResponseJson=Se.prototype.La,Se.prototype.getResponseText=Se.prototype.la,Se.prototype.send=Se.prototype.ea,Se.prototype.setWithCredentials=Se.prototype.Fa,F0=Se}).apply(typeof Na<"u"?Na:typeof self<"u"?self:typeof window<"u"?window:{});const Pg="@firebase/firestore",Ng="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ns="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=new wu("@firebase/firestore");function di(){return Yr.logLevel}function $(t,...e){if(Yr.logLevel<=ee.DEBUG){const n=e.map(wf);Yr.debug(`Firestore (${ns}): ${t}`,...n)}}function xn(t,...e){if(Yr.logLevel<=ee.ERROR){const n=e.map(wf);Yr.error(`Firestore (${ns}): ${t}`,...n)}}function Ki(t,...e){if(Yr.logLevel<=ee.WARN){const n=e.map(wf);Yr.warn(`Firestore (${ns}): ${t}`,...n)}}function wf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,W0(t,r,n)}function W0(t,e,n){let r=`FIRESTORE (${ns}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw xn(r),new Error(r)}function le(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||W0(e,i,r)}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends Bt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class lA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class uA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class cA{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){le(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new lr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new lr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new lr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(le(typeof r.accessToken=="string",31837,{l:r}),new q0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return le(e===null||typeof e=="string",2055,{h:e}),new tt(e)}}class hA{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class dA{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new hA(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Rg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fA{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,$e(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){le(this.o===void 0,3512);const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Rg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(le(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Rg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=pA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function Yh(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return zc(i)===zc(s)?ne(i,s):zc(i)?1:-1}return ne(t.length,e.length)}const mA=55296,gA=57343;function zc(t){const e=t.charCodeAt(0);return e>=mA&&e<=gA}function Gi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg="__name__";class Gt{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&K(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Gt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Gt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Gt.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ne(e.length,n.length)}static compareSegments(e,n){const r=Gt.isNumericId(e),i=Gt.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Gt.extractNumericId(e).compare(Gt.extractNumericId(n)):Yh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ar.fromString(e.substring(4,e.length-2))}}class we extends Gt{construct(e,n,r){return new we(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new we(n)}static emptyPath(){return new we([])}}const yA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ke extends Gt{construct(e,n,r){return new Ke(e,n,r)}static isValidIdentifier(e){return yA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ke.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===bg}static keyField(){return new Ke([bg])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new H(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new H(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ke(n)}static emptyPath(){return new Ke([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(we.fromString(e))}static fromName(e){return new W(we.fromString(e).popFirst(5))}static empty(){return new W(we.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&we.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return we.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new we(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(t,e,n){if(!n)throw new H(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function vA(t,e,n,r){if(e===!0&&r===!0)throw new H(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Dg(t){if(!W.isDocumentKey(t))throw new H(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function K0(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Tf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K(12329,{type:typeof t})}function Jr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Tf(t);throw new H(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Re(t,e){const n={typeString:t};return e&&(n.value=e),n}function qo(t,e){if(!K0(t))throw new H(L.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new H(L.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og=-62135596800,Vg=1e6;class pe{static now(){return pe.fromMillis(Date.now())}static fromDate(e){return pe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Vg);return new pe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Og)throw new H(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Vg}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:pe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(qo(e,pe._jsonSchema))return new pe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Og;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}pe._jsonSchemaVersion="firestore/timestamp/1.0",pe._jsonSchema={type:Re("string",pe._jsonSchemaVersion),seconds:Re("number"),nanoseconds:Re("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{static fromTimestamp(e){return new Q(e)}static min(){return new Q(new pe(0,0))}static max(){return new Q(new pe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const bo=-1;function wA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(r===1e9?new pe(n+1,0):new pe(n,r));return new dr(i,W.empty(),e)}function EA(t){return new dr(t.readTime,t.key,bo)}class dr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new dr(Q.min(),W.empty(),bo)}static max(){return new dr(Q.max(),W.empty(),bo)}}function TA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class SA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rs(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==IA)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(i=>i?V.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new V((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(p=>{o[c]=p,++l,l===s&&r(o)},p=>i(p))}})}static doWhile(e,n){return new V((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function xA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function is(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Eu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Eu.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If=-1;function Tu(t){return t==null}function Ol(t){return t===0&&1/t==-1/0}function AA(t){return typeof t=="number"&&Number.isInteger(t)&&!Ol(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0="";function CA(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Lg(e)),e=kA(t.get(n),e);return Lg(e)}function kA(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case G0:n+="";break;default:n+=s}}return n}function Lg(t){return t+G0+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ir(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Q0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,n){this.comparator=e,this.root=n||qe.EMPTY}insert(e,n){return new Ie(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ra(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ra(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ra(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ra(this.root,e,this.comparator,!0)}}class Ra{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??qe.RED,this.left=i??qe.EMPTY,this.right=s??qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new qe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return qe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw K(43730,{key:this.key,value:this.value});if(this.right.isRed())throw K(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw K(27949);return e+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw K(57766)}get value(){throw K(16141)}get color(){throw K(16727)}get left(){throw K(29726)}get right(){throw K(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new jg(this.data.getIterator())}getIteratorFrom(e){return new jg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new je(this.comparator);return n.data=e,n}}class jg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.fields=e,e.sort(Ke.comparator)}static empty(){return new Et([])}unionWith(e){let n=new je(Ke.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Et(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Gi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class X0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new X0("Invalid base64 string: "+s):s}}(e);return new Xe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Xe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const PA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fr(t){if(le(!!t,39018),typeof t=="string"){let e=0;const n=PA.exec(t);if(le(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ce(t.seconds),nanos:Ce(t.nanos)}}function Ce(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function pr(t){return typeof t=="string"?Xe.fromBase64String(t):Xe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0="server_timestamp",J0="__type__",Z0="__previous_value__",ew="__local_write_time__";function Sf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[J0])==null?void 0:r.stringValue)===Y0}function Iu(t){const e=t.mapValue.fields[Z0];return Sf(e)?Iu(e):e}function Do(t){const e=fr(t.mapValue.fields[ew].timestampValue);return new pe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e,n,r,i,s,o,l,u,c,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=p}}const Vl="(default)";class Oo{constructor(e,n){this.projectId=e,this.database=n||Vl}static empty(){return new Oo("","")}get isDefaultDatabase(){return this.database===Vl}isEqual(e){return e instanceof Oo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw="__type__",nw="__max__",ba={mapValue:{fields:{__type__:{stringValue:nw}}}},rw="__vector__",Ll="value";function mr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Sf(t)?4:bA(t)?9007199254740991:RA(t)?10:11:K(28295,{value:t})}function ln(t,e){if(t===e)return!0;const n=mr(t);if(n!==mr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Do(t).isEqual(Do(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=fr(i.timestampValue),l=fr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return pr(i.bytesValue).isEqual(pr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ce(i.geoPointValue.latitude)===Ce(s.geoPointValue.latitude)&&Ce(i.geoPointValue.longitude)===Ce(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ce(i.integerValue)===Ce(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ce(i.doubleValue),l=Ce(s.doubleValue);return o===l?Ol(o)===Ol(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Gi(t.arrayValue.values||[],e.arrayValue.values||[],ln);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Mg(o)!==Mg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!ln(o[u],l[u])))return!1;return!0}(t,e);default:return K(52216,{left:t})}}function Vo(t,e){return(t.values||[]).find(n=>ln(n,e))!==void 0}function Qi(t,e){if(t===e)return 0;const n=mr(t),r=mr(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ce(s.integerValue||s.doubleValue),u=Ce(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Ug(t.timestampValue,e.timestampValue);case 4:return Ug(Do(t),Do(e));case 5:return Yh(t.stringValue,e.stringValue);case 6:return function(s,o){const l=pr(s),u=pr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const p=ne(l[c],u[c]);if(p!==0)return p}return ne(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ne(Ce(s.latitude),Ce(o.latitude));return l!==0?l:ne(Ce(s.longitude),Ce(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Fg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var g,C,N,R;const l=s.fields||{},u=o.fields||{},c=(g=l[Ll])==null?void 0:g.arrayValue,p=(C=u[Ll])==null?void 0:C.arrayValue,m=ne(((N=c==null?void 0:c.values)==null?void 0:N.length)||0,((R=p==null?void 0:p.values)==null?void 0:R.length)||0);return m!==0?m:Fg(c,p)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===ba.mapValue&&o===ba.mapValue)return 0;if(s===ba.mapValue)return 1;if(o===ba.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},p=Object.keys(c);u.sort(),p.sort();for(let m=0;m<u.length&&m<p.length;++m){const g=Yh(u[m],p[m]);if(g!==0)return g;const C=Qi(l[u[m]],c[p[m]]);if(C!==0)return C}return ne(u.length,p.length)}(t.mapValue,e.mapValue);default:throw K(23264,{he:n})}}function Ug(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=fr(t),r=fr(e),i=ne(n.seconds,r.seconds);return i!==0?i:ne(n.nanos,r.nanos)}function Fg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Qi(n[i],r[i]);if(s)return s}return ne(n.length,r.length)}function Xi(t){return Jh(t)}function Jh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=fr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return pr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Jh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Jh(n.fields[o])}`;return i+"}"}(t.mapValue):K(61005,{value:t})}function Xa(t){switch(mr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Iu(t);return e?16+Xa(e):16;case 5:return 2*t.stringValue.length;case 6:return pr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Xa(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Ir(r.fields,(s,o)=>{i+=s.length+Xa(o)}),i}(t.mapValue);default:throw K(13486,{value:t})}}function Zh(t){return!!t&&"integerValue"in t}function xf(t){return!!t&&"arrayValue"in t}function zg(t){return!!t&&"nullValue"in t}function $g(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ya(t){return!!t&&"mapValue"in t}function RA(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[tw])==null?void 0:r.stringValue)===rw}function ro(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Ir(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ro(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ro(t.arrayValue.values[n]);return e}return{...t}}function bA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===nw}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.value=e}static empty(){return new ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ya(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ro(n)}setAll(e){let n=Ke.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=ro(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ya(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ln(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ya(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ir(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ft(ro(this.value))}}function iw(t){const e=[];return Ir(t.fields,(n,r)=>{const i=new Ke([n]);if(Ya(r)){const s=iw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Et(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new rt(e,0,Q.min(),Q.min(),Q.min(),ft.empty(),0)}static newFoundDocument(e,n,r,i){return new rt(e,1,n,Q.min(),r,i,0)}static newNoDocument(e,n){return new rt(e,2,n,Q.min(),Q.min(),ft.empty(),0)}static newUnknownDocument(e,n){return new rt(e,3,n,Q.min(),Q.min(),ft.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ml{constructor(e,n){this.position=e,this.inclusive=n}}function Bg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=Qi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Hg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ln(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class jl{constructor(e,n="asc"){this.field=e,this.dir=n}}function DA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class sw{}class Ve extends sw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new VA(e,n,r):n==="array-contains"?new jA(e,r):n==="in"?new UA(e,r):n==="not-in"?new FA(e,r):n==="array-contains-any"?new zA(e,r):new Ve(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new LA(e,r):new MA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Qi(n,this.value)):n!==null&&mr(this.value)===mr(n)&&this.matchesComparison(Qi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class un extends sw{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new un(e,n)}matches(e){return ow(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function ow(t){return t.op==="and"}function aw(t){return OA(t)&&ow(t)}function OA(t){for(const e of t.filters)if(e instanceof un)return!1;return!0}function ed(t){if(t instanceof Ve)return t.field.canonicalString()+t.op.toString()+Xi(t.value);if(aw(t))return t.filters.map(e=>ed(e)).join(",");{const e=t.filters.map(n=>ed(n)).join(",");return`${t.op}(${e})`}}function lw(t,e){return t instanceof Ve?function(r,i){return i instanceof Ve&&r.op===i.op&&r.field.isEqual(i.field)&&ln(r.value,i.value)}(t,e):t instanceof un?function(r,i){return i instanceof un&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&lw(o,i.filters[l]),!0):!1}(t,e):void K(19439)}function uw(t){return t instanceof Ve?function(n){return`${n.field.canonicalString()} ${n.op} ${Xi(n.value)}`}(t):t instanceof un?function(n){return n.op.toString()+" {"+n.getFilters().map(uw).join(" ,")+"}"}(t):"Filter"}class VA extends Ve{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class LA extends Ve{constructor(e,n){super(e,"in",n),this.keys=cw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class MA extends Ve{constructor(e,n){super(e,"not-in",n),this.keys=cw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function cw(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class jA extends Ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return xf(n)&&Vo(n.arrayValue,this.value)}}class UA extends Ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Vo(this.value.arrayValue,n)}}class FA extends Ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(Vo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Vo(this.value.arrayValue,n)}}class zA extends Ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!xf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Vo(this.value.arrayValue,r))}}/**
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
 */class $A{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function Wg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new $A(t,e,n,r,i,s,o)}function Af(t){const e=X(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ed(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Tu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Xi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Xi(r)).join(",")),e.Te=n}return e.Te}function Cf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!DA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!lw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Hg(t.startAt,e.startAt)&&Hg(t.endAt,e.endAt)}function td(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function BA(t,e,n,r,i,s,o,l){return new Su(t,e,n,r,i,s,o,l)}function kf(t){return new Su(t)}function qg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function HA(t){return t.collectionGroup!==null}function io(t){const e=X(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new je(Ke.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new jl(s,r))}),n.has(Ke.keyField().canonicalString())||e.Ie.push(new jl(Ke.keyField(),r))}return e.Ie}function en(t){const e=X(t);return e.Ee||(e.Ee=WA(e,io(t))),e.Ee}function WA(t,e){if(t.limitType==="F")return Wg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new jl(i.field,s)});const n=t.endAt?new Ml(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ml(t.startAt.position,t.startAt.inclusive):null;return Wg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function nd(t,e,n){return new Su(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function xu(t,e){return Cf(en(t),en(e))&&t.limitType===e.limitType}function hw(t){return`${Af(en(t))}|lt:${t.limitType}`}function fi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>uw(i)).join(", ")}]`),Tu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Xi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Xi(i)).join(",")),`Target(${r})`}(en(t))}; limitType=${t.limitType})`}function Au(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):W.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of io(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Bg(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,io(r),i)||r.endAt&&!function(o,l,u){const c=Bg(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,io(r),i))}(t,e)}function qA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function dw(t){return(e,n)=>{let r=!1;for(const i of io(t)){const s=KA(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function KA(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?Qi(u,c):K(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ir(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Q0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA=new Ie(W.comparator);function An(){return GA}const fw=new Ie(W.comparator);function Fs(...t){let e=fw;for(const n of t)e=e.insert(n.key,n);return e}function pw(t){let e=fw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Fr(){return so()}function mw(){return so()}function so(){return new si(t=>t.toString(),(t,e)=>t.isEqual(e))}const QA=new Ie(W.comparator),XA=new je(W.comparator);function re(...t){let e=XA;for(const n of t)e=e.add(n);return e}const YA=new je(ne);function JA(){return YA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ol(e)?"-0":e}}function gw(t){return{integerValue:""+t}}function ZA(t,e){return AA(e)?gw(e):Pf(t,e)}/**
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
 */class Cu{constructor(){this._=void 0}}function eC(t,e,n){return t instanceof Ul?function(i,s){const o={fields:{[J0]:{stringValue:Y0},[ew]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Sf(s)&&(s=Iu(s)),s&&(o.fields[Z0]=s),{mapValue:o}}(n,e):t instanceof Lo?_w(t,e):t instanceof Mo?vw(t,e):function(i,s){const o=yw(i,s),l=Kg(o)+Kg(i.Ae);return Zh(o)&&Zh(i.Ae)?gw(l):Pf(i.serializer,l)}(t,e)}function tC(t,e,n){return t instanceof Lo?_w(t,e):t instanceof Mo?vw(t,e):n}function yw(t,e){return t instanceof Fl?function(r){return Zh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ul extends Cu{}class Lo extends Cu{constructor(e){super(),this.elements=e}}function _w(t,e){const n=ww(e);for(const r of t.elements)n.some(i=>ln(i,r))||n.push(r);return{arrayValue:{values:n}}}class Mo extends Cu{constructor(e){super(),this.elements=e}}function vw(t,e){let n=ww(e);for(const r of t.elements)n=n.filter(i=>!ln(i,r));return{arrayValue:{values:n}}}class Fl extends Cu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Kg(t){return Ce(t.integerValue||t.doubleValue)}function ww(t){return xf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function nC(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Lo&&i instanceof Lo||r instanceof Mo&&i instanceof Mo?Gi(r.elements,i.elements,ln):r instanceof Fl&&i instanceof Fl?ln(r.Ae,i.Ae):r instanceof Ul&&i instanceof Ul}(t.transform,e.transform)}class rC{constructor(e,n){this.version=e,this.transformResults=n}}class tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new tn}static exists(e){return new tn(void 0,e)}static updateTime(e){return new tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ja(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ku{}function Ew(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Iw(t.key,tn.none()):new Ko(t.key,t.data,tn.none());{const n=t.data,r=ft.empty();let i=new je(Ke.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Sr(t.key,r,new Et(i.toArray()),tn.none())}}function iC(t,e,n){t instanceof Ko?function(i,s,o){const l=i.value.clone(),u=Qg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Sr?function(i,s,o){if(!Ja(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Qg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Tw(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function oo(t,e,n,r){return t instanceof Ko?function(s,o,l,u){if(!Ja(s.precondition,o))return l;const c=s.value.clone(),p=Xg(s.fieldTransforms,u,o);return c.setAll(p),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Sr?function(s,o,l,u){if(!Ja(s.precondition,o))return l;const c=Xg(s.fieldTransforms,u,o),p=o.data;return p.setAll(Tw(s)),p.setAll(c),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return Ja(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function sC(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=yw(r.transform,i||null);s!=null&&(n===null&&(n=ft.empty()),n.set(r.field,s))}return n||null}function Gg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Gi(r,i,(s,o)=>nC(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ko extends ku{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Sr extends ku{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Tw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Qg(t,e,n){const r=new Map;le(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,tC(o,l,n[i]))}return r}function Xg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,eC(s,o,e))}return r}class Iw extends ku{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class oC extends ku{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&iC(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=oo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=oo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=mw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=Ew(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&Gi(this.mutations,e.mutations,(n,r)=>Gg(n,r))&&Gi(this.baseMutations,e.baseMutations,(n,r)=>Gg(n,r))}}class Nf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){le(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return QA}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Nf(e,n,r,i)}}/**
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
 */class lC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class uC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe,ie;function cC(t){switch(t){case L.OK:return K(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return K(15467,{code:t})}}function Sw(t){if(t===void 0)return xn("GRPC error has no .code"),L.UNKNOWN;switch(t){case Pe.OK:return L.OK;case Pe.CANCELLED:return L.CANCELLED;case Pe.UNKNOWN:return L.UNKNOWN;case Pe.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Pe.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Pe.INTERNAL:return L.INTERNAL;case Pe.UNAVAILABLE:return L.UNAVAILABLE;case Pe.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Pe.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Pe.NOT_FOUND:return L.NOT_FOUND;case Pe.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Pe.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Pe.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Pe.ABORTED:return L.ABORTED;case Pe.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Pe.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Pe.DATA_LOSS:return L.DATA_LOSS;default:return K(39323,{code:t})}}(ie=Pe||(Pe={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function hC(){return new TextEncoder}/**
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
 */const dC=new ar([4294967295,4294967295],0);function Yg(t){const e=hC().encode(t),n=new U0;return n.update(e),new Uint8Array(n.digest())}function Jg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ar([n,r],0),new ar([i,s],0)]}class Rf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new zs(`Invalid padding: ${n}`);if(r<0)throw new zs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new zs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new zs(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=ar.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(ar.fromNumber(r)));return i.compare(dC)===1&&(i=new ar([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Yg(e),[r,i]=Jg(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Rf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Yg(e),[r,i]=Jg(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class zs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Go.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Pu(Q.min(),i,new Ie(ne),An(),re())}}class Go{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Go(r,n,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class xw{constructor(e,n){this.targetId=e,this.Ce=n}}class Aw{constructor(e,n,r=Xe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Zg{constructor(){this.ve=0,this.Fe=ey(),this.Me=Xe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=re(),n=re(),r=re();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K(38017,{changeType:s})}}),new Go(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=ey()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,le(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class fC{constructor(e){this.Ge=e,this.ze=new Map,this.je=An(),this.Je=Da(),this.He=Da(),this.Ye=new Ie(ne)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:K(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(td(s))if(r===0){const o=new W(s.path);this.et(n,o,rt.newNoDocument(o,Q.min()))}else le(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=pr(r).toUint8Array()}catch(u){if(u instanceof X0)return Ki("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Rf(o,i,s)}catch(u){return Ki(u instanceof zs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&td(l.target)){const u=new W(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,rt.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=re();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Pu(e,n,this.Ye,this.je,r);return this.je=An(),this.Je=Da(),this.He=Da(),this.Ye=new Ie(ne),i}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.Qe(n,1):i.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Zg,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new je(ne),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new je(ne),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Zg),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Da(){return new Ie(W.comparator)}function ey(){return new Ie(W.comparator)}const pC={asc:"ASCENDING",desc:"DESCENDING"},mC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},gC={and:"AND",or:"OR"};class yC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function rd(t,e){return t.useProto3Json||Tu(e)?e:{value:e}}function zl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Cw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function _C(t,e){return zl(t,e.toTimestamp())}function nn(t){return le(!!t,49232),Q.fromTimestamp(function(n){const r=fr(n);return new pe(r.seconds,r.nanos)}(t))}function bf(t,e){return id(t,e).canonicalString()}function id(t,e){const n=function(i){return new we(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function kw(t){const e=we.fromString(t);return le(Dw(e),10190,{key:e.toString()}),e}function sd(t,e){return bf(t.databaseId,e.path)}function $c(t,e){const n=kw(e);if(n.get(1)!==t.databaseId.projectId)throw new H(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(Nw(n))}function Pw(t,e){return bf(t.databaseId,e)}function vC(t){const e=kw(t);return e.length===4?we.emptyPath():Nw(e)}function od(t){return new we(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Nw(t){return le(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function ty(t,e,n){return{name:sd(t,e),fields:n.value.mapValue.fields}}function wC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,p){return c.useProto3Json?(le(p===void 0||typeof p=="string",58123),Xe.fromBase64String(p||"")):(le(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),Xe.fromUint8Array(p||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const p=c.code===void 0?L.UNKNOWN:Sw(c.code);return new H(p,c.message||"")}(o);n=new Aw(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=$c(t,r.document.name),s=nn(r.document.updateTime),o=r.document.createTime?nn(r.document.createTime):Q.min(),l=new ft({mapValue:{fields:r.document.fields}}),u=rt.newFoundDocument(i,s,o,l),c=r.targetIds||[],p=r.removedTargetIds||[];n=new Za(c,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=$c(t,r.document),s=r.readTime?nn(r.readTime):Q.min(),o=rt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Za([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=$c(t,r.document),s=r.removedTargetIds||[];n=new Za([],s,i,null)}else{if(!("filter"in e))return K(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new uC(i,s),l=r.targetId;n=new xw(l,o)}}return n}function EC(t,e){let n;if(e instanceof Ko)n={update:ty(t,e.key,e.value)};else if(e instanceof Iw)n={delete:sd(t,e.key)};else if(e instanceof Sr)n={update:ty(t,e.key,e.data),updateMask:NC(e.fieldMask)};else{if(!(e instanceof oC))return K(16599,{Vt:e.type});n={verify:sd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Ul)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Lo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Mo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Fl)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw K(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:_C(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K(27497)}(t,e.precondition)),n}function TC(t,e){return t&&t.length>0?(le(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?nn(i.updateTime):nn(s);return o.isEqual(Q.min())&&(o=nn(s)),new rC(o,i.transformResults||[])}(n,e))):[]}function IC(t,e){return{documents:[Pw(t,e.path)]}}function SC(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Pw(t,i);const s=function(c){if(c.length!==0)return bw(un.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(p=>function(g){return{field:pi(g.field),direction:CC(g.dir)}}(p))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=rd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:i}}function xC(t){let e=vC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){le(r===1,65062);const p=n.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];n.where&&(s=function(m){const g=Rw(m);return g instanceof un&&aw(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(N){return new jl(mi(N.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,Tu(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,C=m.values||[];return new Ml(C,g)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const g=!m.before,C=m.values||[];return new Ml(C,g)}(n.endAt)),BA(e,i,o,s,l,"F",u,c)}function AC(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Rw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=mi(n.unaryFilter.field);return Ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=mi(n.unaryFilter.field);return Ve.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=mi(n.unaryFilter.field);return Ve.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=mi(n.unaryFilter.field);return Ve.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return K(61313);default:return K(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ve.create(mi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return K(58110);default:return K(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return un.create(n.compositeFilter.filters.map(r=>Rw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K(1026)}}(n.compositeFilter.op))}(t):K(30097,{filter:t})}function CC(t){return pC[t]}function kC(t){return mC[t]}function PC(t){return gC[t]}function pi(t){return{fieldPath:t.canonicalString()}}function mi(t){return Ke.fromServerFormat(t.fieldPath)}function bw(t){return t instanceof Ve?function(n){if(n.op==="=="){if($g(n.value))return{unaryFilter:{field:pi(n.field),op:"IS_NAN"}};if(zg(n.value))return{unaryFilter:{field:pi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if($g(n.value))return{unaryFilter:{field:pi(n.field),op:"IS_NOT_NAN"}};if(zg(n.value))return{unaryFilter:{field:pi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pi(n.field),op:kC(n.op),value:n.value}}}(t):t instanceof un?function(n){const r=n.getFilters().map(i=>bw(i));return r.length===1?r[0]:{compositeFilter:{op:PC(n.op),filters:r}}}(t):K(54877,{filter:t})}function NC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Dw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n,r,i,s=Q.min(),o=Q.min(),l=Xe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Xn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e){this.yt=e}}function bC(t){const e=xC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?nd(e,e.limit,"L"):e}/**
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
 */class DC{constructor(){this.Cn=new OC}addToCollectionParentIndex(e,n){return this.Cn.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(dr.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(dr.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class OC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new je(we.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new je(we.comparator)).toArray()}}/**
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
 */const ny={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ow=41943040;class ht{static withCacheSize(e){return new ht(e,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ht.DEFAULT_COLLECTION_PERCENTILE=10,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ht.DEFAULT=new ht(Ow,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ht.DISABLED=new ht(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Yi(0)}static cr(){return new Yi(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry="LruGarbageCollector",VC=1048576;function iy([t,e],[n,r]){const i=ne(t,n);return i===0?ne(e,r):i}class LC{constructor(e){this.Ir=e,this.buffer=new je(iy),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();iy(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class MC{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){$(ry,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){is(n)?$(ry,"Ignoring IndexedDB error during garbage collection: ",n):await rs(n)}await this.Vr(3e5)})}}class jC{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return V.resolve(Eu.ce);const r=new LC(n);return this.mr.forEachTarget(e,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?($("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(ny)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?($("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ny):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,i,s,o,l,u,c;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?($("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(c=Date.now(),di()<=ee.DEBUG&&$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-p}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(c-u)+`ms
Total Duration: ${c-p}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function UC(t,e){return new jC(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(){this.changes=new si(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,rt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class zC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&oo(r.mutation,i,Et.empty(),pe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const i=Fr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Fs();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Fr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=An();const o=so(),l=function(){return so()}();return n.forEach((u,c)=>{const p=r.get(c.key);i.has(c.key)&&(p===void 0||p.mutation instanceof Sr)?s=s.insert(c.key,c):p!==void 0?(o.set(c.key,p.mutation.getFieldMask()),oo(p.mutation,c,p.mutation.getFieldMask(),pe.now())):o.set(c.key,Et.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,p)=>o.set(c,p)),n.forEach((c,p)=>l.set(c,new zC(p,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=so();let i=new Ie((o,l)=>o-l),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let p=r.get(u)||Et.empty();p=l.applyToLocalView(c,p),r.set(u,p);const m=(i.get(l.batchId)||re()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,p=u.value,m=mw();p.forEach(g=>{if(!s.has(g)){const C=Ew(n.get(g),r.get(g));C!==null&&m.set(g,C),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,m))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return W.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):HA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):V.resolve(Fr());let l=bo,u=s;return o.next(c=>V.forEach(c,(p,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(p)?V.resolve():this.remoteDocumentCache.getEntry(e,p).next(g=>{u=u.insert(p,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,re())).next(p=>({batchId:l,changes:pw(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let i=Fs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Fs();return this.indexManager.getCollectionParents(e,s).next(l=>V.forEach(l,u=>{const c=function(m,g){return new Su(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(p=>{p.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const p=c.getKey();o.get(p)===null&&(o=o.insert(p,rt.newInvalidDocument(p)))});let l=Fs();return o.forEach((u,c)=>{const p=s.get(u);p!==void 0&&oo(p.mutation,c,Et.empty(),pe.now()),Au(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return V.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:nn(i.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(i){return{name:i.name,query:bC(i.bundledQuery),readTime:nn(i.readTime)}}(n)),V.resolve()}}/**
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
 */class HC{constructor(){this.overlays=new Ie(W.comparator),this.qr=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Fr();return V.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.qr.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const i=Fr(),s=n.length+1,o=new W(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return V.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ie((c,p)=>c-p);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let p=s.get(c.largestBatchId);p===null&&(p=Fr(),s=s.insert(c.largestBatchId,p)),p.set(c.getKey(),c)}}const l=Fr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,p)=>l.set(c,p)),!(l.size()>=i)););return V.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new lC(n,r));let s=this.qr.get(n);s===void 0&&(s=re(),this.qr.set(n,s)),this.qr.set(n,s.add(r.key))}}/**
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
 */class WC{constructor(){this.sessionToken=Xe.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(){this.Qr=new je(Fe.$r),this.Ur=new je(Fe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new Fe(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new Fe(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new W(new we([])),r=new Fe(n,e),i=new Fe(n,e+1),s=[];return this.Ur.forEachInRange([r,i],o=>{this.Gr(o),s.push(o.key)}),s}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new W(new we([])),r=new Fe(n,e),i=new Fe(n,e+1);let s=re();return this.Ur.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Fe(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Fe{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return W.comparator(e.key,n.key)||ne(e.Yr,n.Yr)}static Kr(e,n){return ne(e.Yr,n.Yr)||W.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new je(Fe.$r)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new aC(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new Fe(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ei(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?If:this.tr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Fe(n,0),i=new Fe(n,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],o=>{const l=this.Xr(o.Yr);s.push(l)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new je(ne);return n.forEach(i=>{const s=new Fe(i,0),o=new Fe(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,o],l=>{r=r.add(l.Yr)})}),V.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;W.isDocumentKey(s)||(s=s.child(""));const o=new Fe(new W(s),0);let l=new je(ne);return this.Zr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Yr)),!0)},o),V.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const i=this.Xr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){le(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return V.forEach(n.mutations,i=>{const s=new Fe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new Fe(n,0),i=this.Zr.firstAfterOrEqual(r);return V.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e){this.ri=e,this.docs=function(){return new Ie(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():rt.newInvalidDocument(n))}getEntries(e,n){let r=An();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():rt.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=An();const o=n.path,l=new W(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:p}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||TA(EA(p),r)<=0||(i.has(p.key)||Au(n,p))&&(s=s.insert(p.key,p.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,n,r,i){K(9500)}ii(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new GC(this)}getSize(e){return V.resolve(this.size)}}class GC extends FC{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e){this.persistence=e,this.si=new si(n=>Af(n),Cf),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.oi=0,this._i=new Df,this.targetCount=0,this.ai=Yi.ur()}forEachTarget(e,n){return this.si.forEach((r,i)=>n(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),V.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Yi(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.Pr(n),V.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(e,n){this.ui={},this.overlays={},this.ci=new Eu(0),this.li=!1,this.li=!0,this.hi=new WC,this.referenceDelegate=e(this),this.Pi=new QC(this),this.indexManager=new DC,this.remoteDocumentCache=function(i){return new KC(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new RC(n),this.Ii=new BC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new HC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new qC(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const i=new XC(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,n){return V.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class XC extends SA{constructor(e){super(),this.currentSequenceNumber=e}}class Of{constructor(e){this.persistence=e,this.Ri=new Df,this.Vi=null}static mi(e){return new Of(e)}get fi(){if(this.Vi)return this.Vi;throw K(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),V.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.fi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.fi,r=>{const i=W.fromPath(r);return this.gi(e,i).next(s=>{s||n.removeEntry(i,Q.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return V.or([()=>V.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class $l{constructor(e,n){this.persistence=e,this.pi=new si(r=>CA(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=UC(this,n)}static mi(e,n){return new $l(e,n)}Ei(){}di(e){return V.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return V.forEach(this.pi,(r,i)=>this.br(e,r,i).next(s=>s?V.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,s.removeEntry(o,Q.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),V.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),V.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Xa(e.data.value)),n}br(e,n,r){return V.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.pi.get(n);return V.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=i}static As(e,n){let r=re(),i=re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Vf(e,n.fromCache,r,i)}}/**
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
 */class YC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class JC{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return WS()?8:xA(ge())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ys(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ws(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new YC;return this.Ss(e,n,o).next(l=>{if(s.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>s.result)}bs(e,n,r,i){return r.documentReadCount<this.fs?(di()<=ee.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",fi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),V.resolve()):(di()<=ee.DEBUG&&$("QueryEngine","Query:",fi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(di()<=ee.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",fi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,en(n))):V.resolve())}ys(e,n){if(qg(n))return V.resolve(null);let r=en(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=nd(n,null,"F"),r=en(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=re(...s);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ds(n,l);return this.Cs(n,c,o,u.readTime)?this.ys(e,nd(n,null,"F")):this.vs(e,c,n,u)}))})))}ws(e,n,r,i){return qg(n)||i.isEqual(Q.min())?V.resolve(null):this.ps.getDocuments(e,r).next(s=>{const o=this.Ds(n,s);return this.Cs(n,o,r,i)?V.resolve(null):(di()<=ee.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),fi(n)),this.vs(e,o,n,wA(i,bo)).next(l=>l))})}Ds(e,n){let r=new je(dw(e));return n.forEach((i,s)=>{Au(e,s)&&(r=r.add(s))}),r}Cs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,n,r){return di()<=ee.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",fi(n)),this.ps.getDocumentsMatchingQuery(e,n,dr.min(),r)}vs(e,n,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf="LocalStore",ZC=3e8;class ek{constructor(e,n,r,i){this.persistence=e,this.Fs=n,this.serializer=i,this.Ms=new Ie(ne),this.xs=new si(s=>Af(s),Cf),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $C(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function tk(t,e,n,r){return new ek(t,e,n,r)}async function Lw(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=re();for(const c of i){o.push(c.batchId);for(const p of c.mutations)u=u.add(p.key)}for(const c of s){l.push(c.batchId);for(const p of c.mutations)u=u.add(p.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ls:c,removedBatchIds:o,addedBatchIds:l}))})})}function nk(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,c,p){const m=c.batch,g=m.keys();let C=V.resolve();return g.forEach(N=>{C=C.next(()=>p.getEntry(u,N)).next(R=>{const b=c.docVersions.get(N);le(b!==null,48541),R.version.compareTo(b)<0&&(m.applyToRemoteDocument(R,c),R.isValidDocument()&&(R.setReadTime(c.commitVersion),p.addEntry(R)))})}),C.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=re();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Mw(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function rk(t,e){const n=X(t),r=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const l=[];e.targetChanges.forEach((p,m)=>{const g=i.get(m);if(!g)return;l.push(n.Pi.removeMatchingKeys(s,p.removedDocuments,m).next(()=>n.Pi.addMatchingKeys(s,p.addedDocuments,m)));let C=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?C=C.withResumeToken(Xe.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):p.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(p.resumeToken,r)),i=i.insert(m,C),function(R,b,T){return R.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=ZC?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(g,C,p)&&l.push(n.Pi.updateTargetData(s,C))});let u=An(),c=re();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,p))}),l.push(ik(s,o,e.documentUpdates).next(p=>{u=p.ks,c=p.qs})),!r.isEqual(Q.min())){const p=n.Pi.getLastRemoteSnapshotVersion(s).next(m=>n.Pi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(p)}return V.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.Ms=i,s))}function ik(t,e,n){let r=re(),i=re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=An();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Q.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):$(Lf,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{ks:o,qs:i}})}function sk(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=If),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ok(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Pi.getTargetData(r,e).next(s=>s?(i=s,V.resolve(i)):n.Pi.allocateTargetId(r).next(o=>(i=new Xn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function ad(t,e,n){const r=X(t),i=r.Ms.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!is(o))throw o;$(Lf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function sy(t,e,n){const r=X(t);let i=Q.min(),s=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,p){const m=X(u),g=m.xs.get(p);return g!==void 0?V.resolve(m.Ms.get(g)):m.Pi.getTargetData(c,p)}(r,o,en(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?i:Q.min(),n?s:re())).next(l=>(ak(r,qA(e),l),{documents:l,Qs:s})))}function ak(t,e,n){let r=t.Os.get(e)||Q.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Os.set(e,r)}class oy{constructor(){this.activeTargetIds=JA()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lk{constructor(){this.Mo=new oy,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new oy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class uk{Oo(e){}shutdown(){}}/**
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
 */const ay="ConnectivityMonitor";class ly{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){$(ay,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){$(ay,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Oa=null;function ld(){return Oa===null?Oa=function(){return 268435456+Math.round(2147483648*Math.random())}():Oa++,"0x"+Oa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc="RestConnection",ck={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class hk{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===Vl?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,n,r,i,s){const o=ld(),l=this.zo(e,n.toUriEncodedString());$(Bc,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,i,s);const{host:c}=new URL(l),p=Er(c);return this.Jo(e,l,u,r,p).then(m=>($(Bc,`Received RPC '${e}' ${o}: `,m),m),m=>{throw Ki(Bc,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}Ho(e,n,r,i,s,o){return this.Go(e,n,r,i,s)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ns}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}zo(e,n){const r=ck[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="WebChannelConnection";class fk extends hk{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,i,s){const o=ld();return new Promise((l,u)=>{const c=new F0;c.setWithCredentials(!0),c.listenOnce(z0.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Qa.NO_ERROR:const m=c.getResponseJson();$(et,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case Qa.TIMEOUT:$(et,`RPC '${e}' ${o} timed out`),u(new H(L.DEADLINE_EXCEEDED,"Request time out"));break;case Qa.HTTP_ERROR:const g=c.getStatus();if($(et,`RPC '${e}' ${o} failed with status:`,g,"response text:",c.getResponseText()),g>0){let C=c.getResponseJson();Array.isArray(C)&&(C=C[0]);const N=C==null?void 0:C.error;if(N&&N.status&&N.message){const R=function(T){const v=T.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(v)>=0?v:L.UNKNOWN}(N.status);u(new H(R,N.message))}else u(new H(L.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new H(L.UNAVAILABLE,"Connection failed."));break;default:K(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{$(et,`RPC '${e}' ${o} completed.`)}});const p=JSON.stringify(i);$(et,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",p,r,15)})}T_(e,n,r){const i=ld(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=H0(),l=B0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const p=s.join("");$(et,`Creating RPC '${e}' stream ${i}: ${p}`,u);const m=o.createWebChannel(p,u);this.I_(m);let g=!1,C=!1;const N=new dk({Yo:b=>{C?$(et,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(g||($(et,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),$(et,`RPC '${e}' stream ${i} sending:`,b),m.send(b))},Zo:()=>m.close()}),R=(b,T,v)=>{b.listen(T,x=>{try{v(x)}catch(O){setTimeout(()=>{throw O},0)}})};return R(m,Us.EventType.OPEN,()=>{C||($(et,`RPC '${e}' stream ${i} transport opened.`),N.o_())}),R(m,Us.EventType.CLOSE,()=>{C||(C=!0,$(et,`RPC '${e}' stream ${i} transport closed`),N.a_(),this.E_(m))}),R(m,Us.EventType.ERROR,b=>{C||(C=!0,Ki(et,`RPC '${e}' stream ${i} transport errored. Name:`,b.name,"Message:",b.message),N.a_(new H(L.UNAVAILABLE,"The operation could not be completed")))}),R(m,Us.EventType.MESSAGE,b=>{var T;if(!C){const v=b.data[0];le(!!v,16349);const x=v,O=(x==null?void 0:x.error)||((T=x[0])==null?void 0:T.error);if(O){$(et,`RPC '${e}' stream ${i} received error:`,O);const U=O.status;let F=function(E){const S=Pe[E];if(S!==void 0)return Sw(S)}(U),w=O.message;F===void 0&&(F=L.INTERNAL,w="Unknown error status: "+U+" with message "+O.message),C=!0,N.a_(new H(F,w)),m.close()}else $(et,`RPC '${e}' stream ${i} received:`,v),N.u_(v)}}),R(l,$0.STAT_EVENT,b=>{b.stat===Xh.PROXY?$(et,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===Xh.NOPROXY&&$(et,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{N.__()},0),N}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function Hc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(t){return new yC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy="PersistentStream";class Uw{constructor(e,n,r,i,s,o,l,u){this.Mi=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new jw(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(xn(n.toString()),xn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new H(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return $(uy,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():($(uy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pk extends Uw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=wC(this.serializer,e),r=function(s){if(!("targetChange"in s))return Q.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Q.min():o.readTime?nn(o.readTime):Q.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=od(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=td(u)?{documents:IC(s,u)}:{query:SC(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Cw(s,o.resumeToken);const c=rd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Q.min())>0){l.readTime=zl(s,o.snapshotVersion.toTimestamp());const c=rd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=AC(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=od(this.serializer),n.removeTarget=e,this.q_(n)}}class mk extends Uw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return le(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,le(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){le(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=TC(e.writeResults,e.commitTime),r=nn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=od(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>EC(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{}class yk extends gk{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new H(L.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Go(e,id(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(L.UNKNOWN,s.toString())})}Ho(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,id(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(L.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class _k{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(xn(n),this.aa=!1):$("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr="RemoteStore";class vk{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{oi(this)&&($(Zr,"Restarting streams for network reachability change."),await async function(u){const c=X(u);c.Ea.add(4),await Qo(c),c.Ra.set("Unknown"),c.Ea.delete(4),await Ru(c)}(this))})}),this.Ra=new _k(r,i)}}async function Ru(t){if(oi(t))for(const e of t.da)await e(!0)}async function Qo(t){for(const e of t.da)await e(!1)}function Fw(t,e){const n=X(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Ff(n)?Uf(n):ss(n).O_()&&jf(n,e))}function Mf(t,e){const n=X(t),r=ss(n);n.Ia.delete(e),r.O_()&&zw(n,e),n.Ia.size===0&&(r.O_()?r.L_():oi(n)&&n.Ra.set("Unknown"))}function jf(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ss(t).Y_(e)}function zw(t,e){t.Va.Ue(e),ss(t).Z_(e)}function Uf(t){t.Va=new fC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ss(t).start(),t.Ra.ua()}function Ff(t){return oi(t)&&!ss(t).x_()&&t.Ia.size>0}function oi(t){return X(t).Ea.size===0}function $w(t){t.Va=void 0}async function wk(t){t.Ra.set("Online")}async function Ek(t){t.Ia.forEach((e,n)=>{jf(t,e)})}async function Tk(t,e){$w(t),Ff(t)?(t.Ra.ha(e),Uf(t)):t.Ra.set("Unknown")}async function Ik(t,e,n){if(t.Ra.set("Online"),e instanceof Aw&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))}(t,e)}catch(r){$(Zr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Bl(t,r)}else if(e instanceof Za?t.Va.Ze(e):e instanceof xw?t.Va.st(e):t.Va.tt(e),!n.isEqual(Q.min()))try{const r=await Mw(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Va.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const p=s.Ia.get(c);p&&s.Ia.set(c,p.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const p=s.Ia.get(u);if(!p)return;s.Ia.set(u,p.withResumeToken(Xe.EMPTY_BYTE_STRING,p.snapshotVersion)),zw(s,u);const m=new Xn(p.target,u,c,p.sequenceNumber);jf(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){$(Zr,"Failed to raise snapshot:",r),await Bl(t,r)}}async function Bl(t,e,n){if(!is(e))throw e;t.Ea.add(1),await Qo(t),t.Ra.set("Offline"),n||(n=()=>Mw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$(Zr,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Ru(t)})}function Bw(t,e){return e().catch(n=>Bl(t,n,e))}async function bu(t){const e=X(t),n=gr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:If;for(;Sk(e);)try{const i=await sk(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,xk(e,i)}catch(i){await Bl(e,i)}Hw(e)&&Ww(e)}function Sk(t){return oi(t)&&t.Ta.length<10}function xk(t,e){t.Ta.push(e);const n=gr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function Hw(t){return oi(t)&&!gr(t).x_()&&t.Ta.length>0}function Ww(t){gr(t).start()}async function Ak(t){gr(t).ra()}async function Ck(t){const e=gr(t);for(const n of t.Ta)e.ea(n.mutations)}async function kk(t,e,n){const r=t.Ta.shift(),i=Nf.from(r,e,n);await Bw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await bu(t)}async function Pk(t,e){e&&gr(t).X_&&await async function(r,i){if(function(o){return cC(o)&&o!==L.ABORTED}(i.code)){const s=r.Ta.shift();gr(r).B_(),await Bw(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await bu(r)}}(t,e),Hw(t)&&Ww(t)}async function cy(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),$(Zr,"RemoteStore received new credentials");const r=oi(n);n.Ea.add(3),await Qo(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Ru(n)}async function Nk(t,e){const n=X(t);e?(n.Ea.delete(2),await Ru(n)):e||(n.Ea.add(2),await Qo(n),n.Ra.set("Unknown"))}function ss(t){return t.ma||(t.ma=function(n,r,i){const s=X(n);return s.sa(),new pk(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:wk.bind(null,t),t_:Ek.bind(null,t),r_:Tk.bind(null,t),H_:Ik.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),Ff(t)?Uf(t):t.Ra.set("Unknown")):(await t.ma.stop(),$w(t))})),t.ma}function gr(t){return t.fa||(t.fa=function(n,r,i){const s=X(n);return s.sa(),new mk(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:Ak.bind(null,t),r_:Pk.bind(null,t),ta:Ck.bind(null,t),na:kk.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await bu(t)):(await t.fa.stop(),t.Ta.length>0&&($(Zr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new lr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new zf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $f(t,e){if(xn("AsyncQueue",`${e}: ${t}`),is(t))return new H(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{static emptySet(e){return new Li(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=Fs(),this.sortedSet=new Ie(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Li)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Li;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(){this.ga=new Ie(W.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):K(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ji{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ji(e,n,Li.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class bk{constructor(){this.queries=dy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=X(n),s=i.queries;i.queries=dy(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new H(L.ABORTED,"Firestore shutting down"))}}function dy(){return new si(t=>hw(t),xu)}async function Dk(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new Rk,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=$f(o,`Initialization of query '${fi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&Bf(n)}async function Ok(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Vk(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&Bf(n)}function Lk(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function Bf(t){t.Ca.forEach(e=>{e.next()})}var ud,fy;(fy=ud||(ud={})).Ma="default",fy.Cache="cache";class Mk{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ji(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Ji.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ud.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e){this.key=e}}class Kw{constructor(e){this.key=e}}class jk{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=re(),this.mutatedKeys=re(),this.eu=dw(e),this.tu=new Li(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new hy,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,m)=>{const g=i.get(p),C=Au(this.query,m)?m:null,N=!!g&&this.mutatedKeys.has(g.key),R=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let b=!1;g&&C?g.data.isEqual(C.data)?N!==R&&(r.track({type:3,doc:C}),b=!0):this.su(g,C)||(r.track({type:2,doc:C}),b=!0,(u&&this.eu(C,u)>0||c&&this.eu(C,c)<0)&&(l=!0)):!g&&C?(r.track({type:0,doc:C}),b=!0):g&&!C&&(r.track({type:1,doc:g}),b=!0,(u||c)&&(l=!0)),b&&(C?(o=o.add(C),s=R?s.add(p):s.delete(p)):(o=o.delete(p),s=s.delete(p)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),s=s.delete(p.key),r.track({type:1,doc:p})}return{tu:o,iu:r,Cs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((p,m)=>function(C,N){const R=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K(20277,{Rt:b})}};return R(C)-R(N)}(p.type,m.type)||this.eu(p.doc,m.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Xa.size===0&&this.current&&!i?1:0,c=u!==this.Za;return this.Za=u,o.length!==0||c?{snapshot:new Ji(this.query,e.tu,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new hy,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=re(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new Kw(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new qw(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=re();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Ji.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Hf="SyncEngine";class Uk{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Fk{constructor(e){this.key=e,this.hu=!1}}class zk{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new si(l=>hw(l),xu),this.Iu=new Map,this.Eu=new Set,this.du=new Ie(W.comparator),this.Au=new Map,this.Ru=new Df,this.Vu={},this.mu=new Map,this.fu=Yi.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function $k(t,e,n=!0){const r=Zw(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await Gw(r,e,n,!0),i}async function Bk(t,e){const n=Zw(t);await Gw(n,e,!0,!1)}async function Gw(t,e,n,r){const i=await ok(t.localStore,en(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await Hk(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Fw(t.remoteStore,i),l}async function Hk(t,e,n,r,i){t.pu=(m,g,C)=>async function(R,b,T,v){let x=b.view.ru(T);x.Cs&&(x=await sy(R.localStore,b.query,!1).then(({documents:w})=>b.view.ru(w,x)));const O=v&&v.targetChanges.get(b.targetId),U=v&&v.targetMismatches.get(b.targetId)!=null,F=b.view.applyChanges(x,R.isPrimaryClient,O,U);return my(R,b.targetId,F.au),F.snapshot}(t,m,g,C);const s=await sy(t.localStore,e,!0),o=new jk(e,s.Qs),l=o.ru(s.documents),u=Go.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);my(t,n,c.au);const p=new Uk(e,n,o);return t.Tu.set(e,p),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),c.snapshot}async function Wk(t,e,n){const r=X(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!xu(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await ad(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Mf(r.remoteStore,i.targetId),cd(r,i.targetId)}).catch(rs)):(cd(r,i.targetId),await ad(r.localStore,i.targetId,!0))}async function qk(t,e){const n=X(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Mf(n.remoteStore,r.targetId))}async function Kk(t,e,n){const r=eP(t);try{const i=await function(o,l){const u=X(o),c=pe.now(),p=l.reduce((C,N)=>C.add(N.key),re());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",C=>{let N=An(),R=re();return u.Ns.getEntries(C,p).next(b=>{N=b,N.forEach((T,v)=>{v.isValidDocument()||(R=R.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(C,N)).next(b=>{m=b;const T=[];for(const v of l){const x=sC(v,m.get(v.key).overlayedDocument);x!=null&&T.push(new Sr(v.key,x,iw(x.value.mapValue),tn.exists(!0)))}return u.mutationQueue.addMutationBatch(C,c,T,l)}).next(b=>{g=b;const T=b.applyToLocalDocumentSet(m,R);return u.documentOverlayCache.saveOverlays(C,b.batchId,T)})}).then(()=>({batchId:g.batchId,changes:pw(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Vu[o.currentUser.toKey()];c||(c=new Ie(ne)),c=c.insert(l,u),o.Vu[o.currentUser.toKey()]=c}(r,i.batchId,n),await Xo(r,i.changes),await bu(r.remoteStore)}catch(i){const s=$f(i,"Failed to persist write");n.reject(s)}}async function Qw(t,e){const n=X(t);try{const r=await rk(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(le(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?le(o.hu,14607):i.removedDocuments.size>0&&(le(o.hu,42227),o.hu=!1))}),await Xo(n,r,e)}catch(r){await rs(r)}}function py(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=X(o);u.onlineState=l;let c=!1;u.queries.forEach((p,m)=>{for(const g of m.Sa)g.va(l)&&(c=!0)}),c&&Bf(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Gk(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Ie(W.comparator);o=o.insert(s,rt.newNoDocument(s,Q.min()));const l=re().add(s),u=new Pu(Q.min(),new Map,new Ie(ne),o,l);await Qw(r,u),r.du=r.du.remove(s),r.Au.delete(e),Wf(r)}else await ad(r.localStore,e,!1).then(()=>cd(r,e,n)).catch(rs)}async function Qk(t,e){const n=X(t),r=e.batch.batchId;try{const i=await nk(n.localStore,e);Yw(n,r,null),Xw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Xo(n,i)}catch(i){await rs(i)}}async function Xk(t,e,n){const r=X(t);try{const i=await function(o,l){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let p;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(le(m!==null,37113),p=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,p)).next(()=>u.localDocuments.getDocuments(c,p))})}(r.localStore,e);Yw(r,e,n),Xw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Xo(r,i)}catch(i){await rs(i)}}function Xw(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function Yw(t,e,n){const r=X(t);let i=r.Vu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function cd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||Jw(t,r)})}function Jw(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Mf(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Wf(t))}function my(t,e,n){for(const r of n)r instanceof qw?(t.Ru.addReference(r.key,e),Yk(t,r)):r instanceof Kw?($(Hf,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||Jw(t,r.key)):K(19791,{wu:r})}function Yk(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||($(Hf,"New document in limbo: "+n),t.Eu.add(r),Wf(t))}function Wf(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new W(we.fromString(e)),r=t.fu.next();t.Au.set(r,new Fk(n)),t.du=t.du.insert(n,r),Fw(t.remoteStore,new Xn(en(kf(n.path)),r,"TargetPurposeLimboResolution",Eu.ce))}}async function Xo(t,e,n){const r=X(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var p;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(p=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){i.push(c);const m=Vf.As(u.targetId,c);s.push(m)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(u,c){const p=X(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>V.forEach(c,g=>V.forEach(g.Es,C=>p.persistence.referenceDelegate.addReference(m,g.targetId,C)).next(()=>V.forEach(g.ds,C=>p.persistence.referenceDelegate.removeReference(m,g.targetId,C)))))}catch(m){if(!is(m))throw m;$(Lf,"Failed to update sequence numbers: "+m)}for(const m of c){const g=m.targetId;if(!m.fromCache){const C=p.Ms.get(g),N=C.snapshotVersion,R=C.withLastLimboFreeSnapshotVersion(N);p.Ms=p.Ms.insert(g,R)}}}(r.localStore,s))}async function Jk(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){$(Hf,"User change. New user:",e.toKey());const r=await Lw(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new H(L.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Xo(n,r.Ls)}}function Zk(t,e){const n=X(t),r=n.Au.get(e);if(r&&r.hu)return re().add(r.key);{let i=re();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function Zw(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Qw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Zk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Gk.bind(null,e),e.Pu.H_=Vk.bind(null,e.eventManager),e.Pu.yu=Lk.bind(null,e.eventManager),e}function eP(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Qk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Xk.bind(null,e),e}class Hl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Nu(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return tk(this.persistence,new JC,e.initialUser,this.serializer)}Cu(e){return new Vw(Of.mi,this.serializer)}Du(e){return new lk}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Hl.provider={build:()=>new Hl};class tP extends Hl{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){le(this.persistence.referenceDelegate instanceof $l,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new MC(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?ht.withCacheSize(this.cacheSizeBytes):ht.DEFAULT;return new Vw(r=>$l.mi(r,n),this.serializer)}}class hd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>py(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Jk.bind(null,this.syncEngine),await Nk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new bk}()}createDatastore(e){const n=Nu(e.databaseInfo.databaseId),r=function(s){return new fk(s)}(e.databaseInfo);return function(s,o,l,u){return new yk(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new vk(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>py(this.syncEngine,n,0),function(){return ly.v()?new ly:new uk}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,p){const m=new zk(i,s,o,l,u,c);return p&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=X(i);$(Zr,"RemoteStore shutting down."),s.Ea.add(5),await Qo(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}hd.provider={build:()=>new hd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class nP{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):xn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr="FirestoreClient";class rP{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=tt.UNAUTHENTICATED,this.clientId=Ef.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{$(yr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>($(yr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new lr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=$f(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Wc(t,e){t.asyncQueue.verifyOperationInProgress(),$(yr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Lw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function gy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await iP(t);$(yr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>cy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>cy(e.remoteStore,i)),t._onlineComponents=e}async function iP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$(yr,"Using user provided OfflineComponentProvider");try{await Wc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ki("Error using user provided cache. Falling back to memory cache: "+n),await Wc(t,new Hl)}}else $(yr,"Using default OfflineComponentProvider"),await Wc(t,new tP(void 0));return t._offlineComponents}async function e1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($(yr,"Using user provided OnlineComponentProvider"),await gy(t,t._uninitializedComponentsProvider._online)):($(yr,"Using default OnlineComponentProvider"),await gy(t,new hd))),t._onlineComponents}function sP(t){return e1(t).then(e=>e.syncEngine)}async function oP(t){const e=await e1(t),n=e.eventManager;return n.onListen=$k.bind(null,e.syncEngine),n.onUnlisten=Wk.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Bk.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=qk.bind(null,e.syncEngine),n}function aP(t,e,n={}){const r=new lr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const p=new nP({next:g=>{p.Nu(),o.enqueueAndForget(()=>Ok(s,m));const C=g.docs.has(l);!C&&g.fromCache?c.reject(new H(L.UNAVAILABLE,"Failed to get document because the client is offline.")):C&&g.fromCache&&u&&u.source==="server"?c.reject(new H(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new Mk(kf(l.path),p,{includeMetadataChanges:!0,qa:!0});return Dk(s,m)}(await oP(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function t1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1="firestore.googleapis.com",_y=!0;class vy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new H(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=n1,this.ssl=_y}else this.host=e.host,this.ssl=e.ssl??_y;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Ow;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<VC)throw new H(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=t1(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class qf{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new lA;switch(r.type){case"firstParty":return new dA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=yy.get(n);r&&($("ComponentProvider","Removing Datastore"),yy.delete(n),r.terminate())}(this),Promise.resolve()}}function lP(t,e,n,r={}){var c;t=Jr(t,qf);const i=Er(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(A0(`https://${l}`),C0("Firestore",!0)),s.host!==n1&&s.host!==l&&Ki("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!Xr(u,o)&&(t._setSettings(u),r.mockUserToken)){let p,m;if(typeof r.mockUserToken=="string")p=r.mockUserToken,m=tt.MOCK_USER;else{p=FS(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new H(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new tt(g)}t._authCredentials=new uA(new q0(p,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Kf(this.firestore,e,this._query)}}class Me{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jo(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Me(this.firestore,e,this._key)}toJSON(){return{type:Me._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(qo(n,Me._jsonSchema))return new Me(e,r||null,new W(we.fromString(n.referencePath)))}}Me._jsonSchemaVersion="firestore/documentReference/1.0",Me._jsonSchema={type:Re("string",Me._jsonSchemaVersion),referencePath:Re("string")};class jo extends Kf{constructor(e,n,r){super(e,n,kf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Me(this.firestore,null,new W(e))}withConverter(e){return new jo(this.firestore,e,this._path)}}function $s(t,e,...n){if(t=be(t),arguments.length===1&&(e=Ef.newId()),_A("doc","path",e),t instanceof qf){const r=we.fromString(e,...n);return Dg(r),new Me(t,null,new W(r))}{if(!(t instanceof Me||t instanceof jo))throw new H(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return Dg(r),new Me(t.firestore,t instanceof jo?t.converter:null,new W(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy="AsyncQueue";class Ey{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new jw(this,"async_queue_retry"),this._c=()=>{const r=Hc();r&&$(wy,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Hc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Hc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new lr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!is(e))throw e;$(wy,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,xn("INTERNAL UNHANDLED ERROR: ",Ty(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=zf.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&K(47125,{Pc:Ty(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Ty(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Du extends qf{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Ey,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ey(e),this._firestoreClient=void 0,await e}}}function uP(t,e){const n=typeof t=="object"?t:L0(),r=typeof t=="string"?t:Vl,i=vf(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=jS("firestore");s&&lP(i,...s)}return i}function r1(t){if(t._terminated)throw new H(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||cP(t),t._firestoreClient}function cP(t){var r,i,s;const e=t._freezeSettings(),n=function(l,u,c,p){return new NA(l,u,c,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,t1(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((s=e.localCache)!=null&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new rP(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pt(Xe.fromBase64String(e))}catch(n){throw new H(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Pt(Xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Pt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(qo(e,Pt._jsonSchema))return Pt.fromBase64String(e.bytes)}}Pt._jsonSchemaVersion="firestore/bytes/1.0",Pt._jsonSchema={type:Re("string",Pt._jsonSchemaVersion),bytes:Re("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:rn._jsonSchemaVersion}}static fromJSON(e){if(qo(e,rn._jsonSchema))return new rn(e.latitude,e.longitude)}}rn._jsonSchemaVersion="firestore/geoPoint/1.0",rn._jsonSchema={type:Re("string",rn._jsonSchemaVersion),latitude:Re("number"),longitude:Re("number")};/**
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
 */class sn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:sn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(qo(e,sn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new sn(e.vectorValues);throw new H(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}sn._jsonSchemaVersion="firestore/vectorValue/1.0",sn._jsonSchema={type:Re("string",sn._jsonSchemaVersion),vectorValues:Re("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP=/^__.*__$/;class dP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Sr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ko(e,this.data,n,this.fieldTransforms)}}class i1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Sr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function s1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K(40011,{Ac:t})}}class Qf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Qf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Wl(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(s1(this.Ac)&&hP.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class fP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Nu(e)}Cc(e,n,r,i=!1){return new Qf({Ac:e,methodName:n,Dc:r,path:Ke.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function o1(t){const e=t._freezeSettings(),n=Nu(t._databaseId);return new fP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function pP(t,e,n,r,i,s={}){const o=t.Cc(s.merge||s.mergeFields?2:0,e,n,i);Xf("Data must be an object, but it was:",o,r);const l=a1(r,o);let u,c;if(s.merge)u=new Et(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const p=[];for(const m of s.mergeFields){const g=dd(e,m,n);if(!o.contains(g))throw new H(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);u1(p,g)||p.push(g)}u=new Et(p),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new dP(new ft(l),u,c)}class Vu extends Gf{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Vu}}function mP(t,e,n,r){const i=t.Cc(1,e,n);Xf("Data must be an object, but it was:",i,r);const s=[],o=ft.empty();Ir(r,(u,c)=>{const p=Yf(e,u,n);c=be(c);const m=i.yc(p);if(c instanceof Vu)s.push(p);else{const g=Lu(c,m);g!=null&&(s.push(p),o.set(p,g))}});const l=new Et(s);return new i1(o,l,i.fieldTransforms)}function gP(t,e,n,r,i,s){const o=t.Cc(1,e,n),l=[dd(e,r,n)],u=[i];if(s.length%2!=0)throw new H(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(dd(e,s[g])),u.push(s[g+1]);const c=[],p=ft.empty();for(let g=l.length-1;g>=0;--g)if(!u1(c,l[g])){const C=l[g];let N=u[g];N=be(N);const R=o.yc(C);if(N instanceof Vu)c.push(C);else{const b=Lu(N,R);b!=null&&(c.push(C),p.set(C,b))}}const m=new Et(c);return new i1(p,m,o.fieldTransforms)}function Lu(t,e){if(l1(t=be(t)))return Xf("Unsupported field value:",e,t),a1(t,e);if(t instanceof Gf)return function(r,i){if(!s1(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Lu(l,i.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=be(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ZA(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=pe.fromDate(r);return{timestampValue:zl(i.serializer,s)}}if(r instanceof pe){const s=new pe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:zl(i.serializer,s)}}if(r instanceof rn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Pt)return{bytesValue:Cw(i.serializer,r._byteString)};if(r instanceof Me){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:bf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof sn)return function(o,l){return{mapValue:{fields:{[tw]:{stringValue:rw},[Ll]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Sc("VectorValues must only contain numeric values.");return Pf(l.serializer,c)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${Tf(r)}`)}(t,e)}function a1(t,e){const n={};return Q0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ir(t,(r,i)=>{const s=Lu(i,e.mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function l1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof pe||t instanceof rn||t instanceof Pt||t instanceof Me||t instanceof Gf||t instanceof sn)}function Xf(t,e,n){if(!l1(n)||!K0(n)){const r=Tf(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function dd(t,e,n){if((e=be(e))instanceof Ou)return e._internalPath;if(typeof e=="string")return Yf(t,e);throw Wl("Field path arguments must be of type string or ",t,!1,void 0,n)}const yP=new RegExp("[~\\*/\\[\\]]");function Yf(t,e,n){if(e.search(yP)>=0)throw Wl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ou(...e.split("."))._internalPath}catch{throw Wl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Wl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new H(L.INVALID_ARGUMENT,l+t+u)}function u1(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _P(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(h1("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class _P extends c1{data(){return super.data()}}function h1(t,e){return typeof e=="string"?Yf(t,e):e instanceof Ou?e._internalPath:e._delegate._internalPath}class vP{convertValue(e,n="none"){switch(mr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(pr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw K(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ir(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[Ll].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Ce(o.doubleValue));return new sn(n)}convertGeoPoint(e){return new rn(Ce(e.latitude),Ce(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Iu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Do(e));default:return null}}convertTimestamp(e){const n=fr(e);return new pe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=we.fromString(e);le(Dw(r),9688,{name:e});const i=new Oo(r.get(1),r.get(3)),s=new W(r.popFirst(5));return i.isEqual(n)||xn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wP(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Bs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Hr extends c1{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new el(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(h1("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new H(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Hr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Hr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Hr._jsonSchema={type:Re("string",Hr._jsonSchemaVersion),bundleSource:Re("string","DocumentSnapshot"),bundleName:Re("string"),bundle:Re("string")};class el extends Hr{data(e={}){return super.data(e)}}class ao{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Bs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new el(this._firestore,this._userDataWriter,r.key,r,new Bs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new el(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Bs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new el(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Bs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,p=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),p=o.indexOf(l.doc.key)),{type:EP(l.type),doc:u,oldIndex:c,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new H(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ao._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ef.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function EP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TP(t){t=Jr(t,Me);const e=Jr(t.firestore,Du);return aP(r1(e),t._key).then(n=>xP(e,t,n))}ao._jsonSchemaVersion="firestore/querySnapshot/1.0",ao._jsonSchema={type:Re("string",ao._jsonSchemaVersion),bundleSource:Re("string","QuerySnapshot"),bundleName:Re("string"),bundle:Re("string")};class IP extends vP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Me(this.firestore,null,n)}}function SP(t,e,n){t=Jr(t,Me);const r=Jr(t.firestore,Du),i=wP(t.converter,e);return d1(r,[pP(o1(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,tn.none())])}function qc(t,e,n,...r){t=Jr(t,Me);const i=Jr(t.firestore,Du),s=o1(i);let o;return o=typeof(e=be(e))=="string"||e instanceof Ou?gP(s,"updateDoc",t._key,e,n,r):mP(s,"updateDoc",t._key,e),d1(i,[o.toMutation(t._key,tn.exists(!0))])}function d1(t,e){return function(r,i){const s=new lr;return r.asyncQueue.enqueueAndForget(async()=>Kk(await sP(r),i,s)),s.promise}(r1(t),e)}function xP(t,e,n){const r=n.docs.get(e._key),i=new IP(t);return new Hr(t,i,e._key,r,new Bs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){ns=i})(Pn),hr(new In("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Du(new cA(r.getProvider("auth-internal")),new fA(o,r.getProvider("app-check-internal")),function(c,p){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new H(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Oo(c.options.projectId,p)}(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Zt(Pg,Ng,e),Zt(Pg,Ng,"esm2020")})();var AP="firebase",CP="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zt(AP,CP,"app");function f1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kP=f1,p1=new Tr("auth","Firebase",f1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql=new wu("@firebase/auth");function PP(t,...e){ql.logLevel<=ee.WARN&&ql.warn(`Auth (${Pn}): ${t}`,...e)}function tl(t,...e){ql.logLevel<=ee.ERROR&&ql.error(`Auth (${Pn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(t,...e){throw Jf(t,...e)}function on(t,...e){return Jf(t,...e)}function m1(t,e,n){const r={...kP(),[e]:n};return new Tr("auth","Firebase",r).create(e,{appName:t.name})}function _n(t){return m1(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Jf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return p1.create(t,...e)}function q(t,e,...n){if(!t)throw Jf(e,...n)}function mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw tl(e),new Error(e)}function Cn(t,e){t||mn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function NP(){return Iy()==="http:"||Iy()==="https:"}function Iy(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(NP()||N0()||"connection"in navigator)?navigator.onLine:!0}function bP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yo=class{constructor(e,n){this.shortDelay=e,this.longDelay=n,Cn(n>e,"Short delay should be less than long delay!"),this.isMobile=k0()||R0()}get(){return RP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(t,e){Cn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let g1=class{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OP=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],VP=new Yo(3e4,6e4);function xr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Ar(t,e,n,r,i={}){return y1(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ii({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return P0()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Er(t.emulatorConfig.host)&&(c.credentials="include"),g1.fetch()(await _1(t,t.config.apiHost,n,l),c)})}async function y1(t,e,n){t._canInitEmulator=!1;const r={...DP,...e};try{const i=new MP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Va(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Va(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Va(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Va(t,"user-disabled",o);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw m1(t,p,c);$t(t,p)}}catch(i){if(i instanceof Bt)throw i;$t(t,"network-request-failed",{message:String(i)})}}async function Jo(t,e,n,r,i={}){const s=await Ar(t,e,n,r,i);return"mfaPendingCredential"in s&&$t(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function _1(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Zf(t.config,i):`${t.config.apiScheme}://${i}`;return OP.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function LP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}let MP=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(on(this.auth,"network-request-failed")),VP.get())})}};function Va(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=on(t,e,r);return i.customData._tokenResponse=n,i}function Sy(t){return t!==void 0&&t.enterprise!==void 0}class jP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return LP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function UP(t,e){return Ar(t,"GET","/v2/recaptchaConfig",xr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FP(t,e){return Ar(t,"POST","/v1/accounts:delete",e)}async function Kl(t,e){return Ar(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zP(t,e=!1){const n=be(t),r=await n.getIdToken(e),i=ep(r);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:lo(Kc(i.auth_time)),issuedAtTime:lo(Kc(i.iat)),expirationTime:lo(Kc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Kc(t){return Number(t)*1e3}function ep(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return tl("JWT malformed, contained fewer than 3 sections"),null;try{const i=yf(n);return i?JSON.parse(i):(tl("Failed to decode base64 JWT payload"),null)}catch(i){return tl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function xy(t){const e=ep(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Bt&&$P(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function $P({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let BP=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pd=class{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=lo(this.lastLoginAt),this.creationTime=lo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};/**
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
 */async function Gl(t){var m;const e=t.auth,n=await t.getIdToken(),r=await Uo(t,Kl(e,{idToken:n}));q(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(m=i.providerUserInfo)!=null&&m.length?v1(i.providerUserInfo):[],o=WP(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new pd(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,p)}async function HP(t){const e=be(t);await Gl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function WP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function v1(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qP(t,e){const n=await y1(t,{},async()=>{const r=ii({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await _1(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Er(t.emulatorConfig.host)&&(u.credentials="include"),g1.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function KP(t,e){return Ar(t,"POST","/v2/accounts:revokeToken",xr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gc=class md{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){q(e.length!==0,"internal-error");const n=xy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await qP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new md;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new md,this.toJSON())}_performRefresh(){return mn("not implemented")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}let ki=class Hs{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new BP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new pd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Uo(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return zP(this,e)}reload(){return HP(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Hs({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Gl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if($e(this.auth.app))return Promise.reject(_n(this.auth));const e=await this.getIdToken();return await Uo(this,FP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,p=n.lastLoginAt??void 0,{uid:m,emailVerified:g,isAnonymous:C,providerData:N,stsTokenManager:R}=n;q(m&&R,e,"internal-error");const b=Gc.fromJSON(this.name,R);q(typeof m=="string",e,"internal-error"),jn(r,e.name),jn(i,e.name),q(typeof g=="boolean",e,"internal-error"),q(typeof C=="boolean",e,"internal-error"),jn(s,e.name),jn(o,e.name),jn(l,e.name),jn(u,e.name),jn(c,e.name),jn(p,e.name);const T=new Hs({uid:m,auth:e,email:i,emailVerified:g,displayName:r,isAnonymous:C,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:b,createdAt:c,lastLoginAt:p});return N&&Array.isArray(N)&&(T.providerData=N.map(v=>({...v}))),u&&(T._redirectEventId=u),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new Gc;i.updateFromServerResponse(n);const s=new Hs({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Gl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?v1(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Gc;l.updateFromIdToken(r);const u=new Hs({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new pd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay=new Map;function gn(t){Cn(t instanceof Function,"Expected a class definition");let e=Ay.get(t);return e?(Cn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ay.set(t,e),e)}/**
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
 */let w1=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}};w1.type="NONE";const Cy=w1;/**
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
 */function nl(t,e,n){return`firebase:${t}:${e}:${n}`}let ky=class rl{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=nl(this.userKey,i.apiKey,s),this.fullPersistenceKey=nl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Kl(this.auth,{idToken:e}).catch(()=>{});return n?ki._fromGetAccountInfoResponse(this.auth,n,e):null}return ki._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new rl(gn(Cy),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||gn(Cy);const o=nl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const p=await c._get(o);if(p){let m;if(typeof p=="string"){const g=await Kl(e,{idToken:p}).catch(()=>{});if(!g)break;m=await ki._fromGetAccountInfoResponse(e,g,p)}else m=ki._fromJSON(e,p);c!==s&&(l=m),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new rl(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new rl(s,e,r))}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Py(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(S1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(E1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(A1(e))return"Blackberry";if(C1(e))return"Webos";if(T1(e))return"Safari";if((e.includes("chrome/")||I1(e))&&!e.includes("edge/"))return"Chrome";if(x1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function E1(t=ge()){return/firefox\//i.test(t)}function T1(t=ge()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function I1(t=ge()){return/crios\//i.test(t)}function S1(t=ge()){return/iemobile/i.test(t)}function x1(t=ge()){return/android/i.test(t)}function A1(t=ge()){return/blackberry/i.test(t)}function C1(t=ge()){return/webos/i.test(t)}function tp(t=ge()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function GP(t=ge()){var e;return tp(t)&&!!((e=window.navigator)!=null&&e.standalone)}function QP(){return HS()&&document.documentMode===10}function k1(t=ge()){return tp(t)||x1(t)||C1(t)||A1(t)||/windows phone/i.test(t)||S1(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P1(t,e=[]){let n;switch(t){case"Browser":n=Py(ge());break;case"Worker":n=`${Py(ge())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Pn}/${r}`}/**
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
 */let XP=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}};/**
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
 */async function YP(t,e={}){return Ar(t,"GET","/v2/passwordPolicy",xr(t,e))}/**
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
 */const JP=6;let ZP=class{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??JP,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eN=class{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ny(this),this.idTokenSubscription=new Ny(this),this.beforeStateQueue=new XP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=gn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await ky.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Kl(this,{idToken:e}),r=await ki._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if($e(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Gl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if($e(this.app))return Promise.reject(_n(this));const n=e?be(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return $e(this.app)?Promise.reject(_n(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return $e(this.app)?Promise.reject(_n(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await YP(this),n=new ZP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Tr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await KP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&gn(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await ky.create(this,[gn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=P1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if($e(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&PP(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}};function ai(t){return be(t)}let Ny=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=b0(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function tN(t){Mu=t}function N1(t){return Mu.loadJS(t)}function nN(){return Mu.recaptchaEnterpriseScript}function rN(){return Mu.gapiScript}function iN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class sN{constructor(){this.enterprise=new oN}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class oN{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const aN="recaptcha-enterprise",R1="NO_RECAPTCHA";class lN{constructor(e){this.type=aN,this.auth=ai(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{UP(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new jP(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Sy(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(R1)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new sN().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Sy(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=nN();u.length!==0&&(u+=l),N1(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Ry(t,e,n,r=!1,i=!1){const s=new lN(t);let o;if(i)o=R1;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function gd(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Ry(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Ry(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uN(t,e){const n=vf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Xr(s,e??{}))return i;$t(i,"already-initialized")}return n.initialize({options:e})}function cN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(gn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function hN(t,e,n){const r=ai(t);q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=b1(e),{host:o,port:l}=dN(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},p=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),q(Xr(c,r.config.emulator)&&Xr(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,Er(o)?(A0(`${s}//${o}${u}`),C0("Auth",!0)):fN()}function b1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function dN(t){const e=b1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:by(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:by(o)}}}function by(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function fN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return mn("not implemented")}_getIdTokenResponse(e){return mn("not implemented")}_linkToIdToken(e,n){return mn("not implemented")}_getReauthenticationResolver(e){return mn("not implemented")}}async function pN(t,e){return Ar(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mN(t,e){return Jo(t,"POST","/v1/accounts:signInWithPassword",xr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gN(t,e){return Jo(t,"POST","/v1/accounts:signInWithEmailLink",xr(t,e))}async function yN(t,e){return Jo(t,"POST","/v1/accounts:signInWithEmailLink",xr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo extends np{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Fo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Fo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gd(e,n,"signInWithPassword",mN);case"emailLink":return gN(e,{email:this._email,oobCode:this._password});default:$t(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gd(e,r,"signUpPassword",pN);case"emailLink":return yN(e,{idToken:n,email:this._email,oobCode:this._password});default:$t(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mi(t,e){return Jo(t,"POST","/v1/accounts:signInWithIdp",xr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _N="http://localhost";class ei extends np{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ei(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new ei(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Mi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Mi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Mi(e,n)}buildRequest(){const e={requestUri:_N,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ii(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function wN(t){const e=Ms(js(t)).link,n=e?Ms(js(e)).deep_link_id:null,r=Ms(js(t)).deep_link_id;return(r?Ms(js(r)).link:null)||r||n||e||t}class rp{constructor(e){const n=Ms(js(e)),r=n.apiKey??null,i=n.oobCode??null,s=vN(n.mode??null);q(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=wN(e);try{return new rp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){this.providerId=os.PROVIDER_ID}static credential(e,n){return Fo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=rp.parseLink(n);return q(r,"argument-error"),Fo._fromEmailAndCode(e,r.code,r.tenantId)}}os.PROVIDER_ID="password";os.EMAIL_PASSWORD_SIGN_IN_METHOD="password";os.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Zo extends D1{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends Zo{constructor(){super("facebook.com")}static credential(e){return ei._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Hn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends Zo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ei._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Wn.credential(n,r)}catch{return null}}}Wn.GOOGLE_SIGN_IN_METHOD="google.com";Wn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends Zo{constructor(){super("github.com")}static credential(e){return ei._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.GITHUB_SIGN_IN_METHOD="github.com";qn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends Zo{constructor(){super("twitter.com")}static credential(e,n){return ei._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Kn.credential(n,r)}catch{return null}}}Kn.TWITTER_SIGN_IN_METHOD="twitter.com";Kn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EN(t,e){return Jo(t,"POST","/v1/accounts:signUp",xr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ki._fromIdTokenResponse(e,r,i),o=Dy(r);return new ti({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Dy(r);return new ti({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Dy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql extends Bt{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ql.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ql(e,n,r,i)}}function O1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ql._fromErrorAndOperation(t,s,e,r):s})}async function TN(t,e,n=!1){const r=await Uo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ti._forOperation(t,"link",r)}/**
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
 */async function IN(t,e,n=!1){const{auth:r}=t;if($e(r.app))return Promise.reject(_n(r));const i="reauthenticate";try{const s=await Uo(t,O1(r,i,e,t),n);q(s.idToken,r,"internal-error");const o=ep(s.idToken);q(o,r,"internal-error");const{sub:l}=o;return q(t.uid===l,r,"user-mismatch"),ti._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&$t(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V1(t,e,n=!1){if($e(t.app))return Promise.reject(_n(t));const r="signIn",i=await O1(t,r,e),s=await ti._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function SN(t,e){return V1(ai(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L1(t){const e=ai(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function xN(t,e,n){if($e(t.app))return Promise.reject(_n(t));const r=ai(t),o=await gd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",EN).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&L1(t),u}),l=await ti._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function AN(t,e,n){return $e(t.app)?Promise.reject(_n(t)):SN(be(t),os.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&L1(t),r})}function CN(t,e,n,r){return be(t).onIdTokenChanged(e,n,r)}function kN(t,e,n){return be(t).beforeAuthStateChanged(e,n)}function PN(t,e,n,r){return be(t).onAuthStateChanged(e,n,r)}const Xl="__sak";/**
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
 */class M1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xl,"1"),this.storage.removeItem(Xl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NN=1e3,RN=10;class j1 extends M1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=k1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);QP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,RN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},NN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}j1.type="LOCAL";const bN=j1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1 extends M1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}U1.type="SESSION";const F1=U1;/**
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
 */function DN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ju{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ju(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await DN(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ju.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class ON{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=ip("",20);i.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(p),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(){return window}function VN(t){an().location.href=t}/**
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
 */function z1(){return typeof an().WorkerGlobalScope<"u"&&typeof an().importScripts=="function"}async function LN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function MN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function jN(){return z1()?self:null}/**
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
 */const $1="firebaseLocalStorageDb",UN=1,Yl="firebaseLocalStorage",B1="fbase_key";class ea{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Uu(t,e){return t.transaction([Yl],e?"readwrite":"readonly").objectStore(Yl)}function FN(){const t=indexedDB.deleteDatabase($1);return new ea(t).toPromise()}function yd(){const t=indexedDB.open($1,UN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Yl,{keyPath:B1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Yl)?e(r):(r.close(),await FN(),e(await yd()))})})}async function Oy(t,e,n){const r=Uu(t,!0).put({[B1]:e,value:n});return new ea(r).toPromise()}async function zN(t,e){const n=Uu(t,!1).get(e),r=await new ea(n).toPromise();return r===void 0?null:r.value}function Vy(t,e){const n=Uu(t,!0).delete(e);return new ea(n).toPromise()}const $N=800,BN=3;class H1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>BN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return z1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ju._getInstance(jN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await LN(),!this.activeServiceWorker)return;this.sender=new ON(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||MN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yd();return await Oy(e,Xl,"1"),await Vy(e,Xl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Oy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>zN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Uu(i,!1).getAll();return new ea(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$N)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}H1.type="LOCAL";const HN=H1;new Yo(3e4,6e4);/**
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
 */function WN(t,e){return e?gn(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class sp extends np{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Mi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Mi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Mi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function qN(t){return V1(t.auth,new sp(t),t.bypassAuthState)}function KN(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),IN(n,new sp(t),t.bypassAuthState)}async function GN(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),TN(n,new sp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qN;case"linkViaPopup":case"linkViaRedirect":return GN;case"reauthViaPopup":case"reauthViaRedirect":return KN;default:$t(this.auth,"internal-error")}}resolve(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QN=new Yo(2e3,1e4);class Pi extends W1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Pi.currentPopupAction&&Pi.currentPopupAction.cancel(),Pi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Cn(this.filter.length===1,"Popup operations only handle one event");const e=ip();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(on(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(on(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(on(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,QN.get())};e()}}Pi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XN="pendingRedirect",il=new Map;class YN extends W1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=il.get(this.auth._key());if(!e){try{const r=await JN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}il.set(this.auth._key(),e)}return this.bypassAuthState||il.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function JN(t,e){const n=tR(e),r=eR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function ZN(t,e){il.set(t._key(),e)}function eR(t){return gn(t._redirectPersistence)}function tR(t){return nl(XN,t.config.apiKey,t.name)}async function nR(t,e,n=!1){if($e(t.app))return Promise.reject(_n(t));const r=ai(t),i=WN(r,e),o=await new YN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR=10*60*1e3;class iR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!q1(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(on(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ly(e))}saveEventToCache(e){this.cachedEventUids.add(Ly(e)),this.lastProcessedEventTime=Date.now()}}function Ly(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function q1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return q1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oR(t,e={}){return Ar(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lR=/^https?/;async function uR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await oR(t);for(const n of e)try{if(cR(n))return}catch{}$t(t,"unauthorized-domain")}function cR(t){const e=fd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!lR.test(n))return!1;if(aR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const hR=new Yo(3e4,6e4);function My(){const t=an().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function dR(t){return new Promise((e,n)=>{var i,s,o;function r(){My(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{My(),n(on(t,"network-request-failed"))},timeout:hR.get()})}if((s=(i=an().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=an().gapi)!=null&&o.load)r();else{const l=iN("iframefcb");return an()[l]=()=>{gapi.load?r():n(on(t,"network-request-failed"))},N1(`${rN()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw sl=null,e})}let sl=null;function fR(t){return sl=sl||dR(t),sl}/**
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
 */const pR=new Yo(5e3,15e3),mR="__/auth/iframe",gR="emulator/auth/iframe",yR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_R=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vR(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Zf(e,gR):`https://${t.config.authDomain}/${mR}`,r={apiKey:e.apiKey,appName:t.name,v:Pn},i=_R.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ii(r).slice(1)}`}async function wR(t){const e=await fR(t),n=an().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:vR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=on(t,"network-request-failed"),l=an().setTimeout(()=>{s(o)},pR.get());function u(){an().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const ER={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},TR=500,IR=600,SR="_blank",xR="http://localhost";class jy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function AR(t,e,n,r=TR,i=IR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...ER,width:r.toString(),height:i.toString(),top:s,left:o},c=ge().toLowerCase();n&&(l=I1(c)?SR:n),E1(c)&&(e=e||xR,u.scrollbars="yes");const p=Object.entries(u).reduce((g,[C,N])=>`${g}${C}=${N},`,"");if(GP(c)&&l!=="_self")return CR(e||"",l),new jy(null);const m=window.open(e||"",l,p);q(m,t,"popup-blocked");try{m.focus()}catch{}return new jy(m)}function CR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const kR="__/auth/handler",PR="emulator/auth/handler",NR=encodeURIComponent("fac");async function Uy(t,e,n,r,i,s){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Pn,eventId:i};if(e instanceof D1){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",YS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))o[p]=m}if(e instanceof Zo){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await t._getAppCheckToken(),c=u?`#${NR}=${encodeURIComponent(u)}`:"";return`${RR(t)}?${ii(l).slice(1)}${c}`}function RR({config:t}){return t.emulator?Zf(t,PR):`https://${t.authDomain}/${kR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc="webStorageSupport";class bR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=F1,this._completeRedirectFn=nR,this._overrideRedirectResult=ZN}async _openPopup(e,n,r,i){var o;Cn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Uy(e,n,r,fd(),i);return AR(e,s,ip())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Uy(e,n,r,fd(),i);return VN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Cn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await wR(e),r=new iR(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Qc,{type:Qc},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Qc];s!==void 0&&n(!!s),$t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=uR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return k1()||T1()||tp()}}const DR=bR;var Fy="@firebase/auth",zy="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let OR=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function LR(t){hr(new In("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:P1(t)},c=new eN(r,i,s,u);return cN(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),hr(new In("auth-internal",e=>{const n=ai(e.getProvider("auth").getImmediate());return(r=>new OR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zt(Fy,zy,VR(t)),Zt(Fy,zy,"esm2020")}/**
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
 */const MR=5*60,jR=x0("authIdTokenMaxAge")||MR;let $y=null;const UR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>jR)return;const i=n==null?void 0:n.token;$y!==i&&($y=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function FR(t=L0()){const e=vf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=uN(t,{popupRedirectResolver:DR,persistence:[HN,bN,F1]}),r=x0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=UR(s.toString());kN(n,o,()=>o(n.currentUser)),CN(n,l=>o(l))}}const i=I0("auth");return i&&hN(n,`http://${i}`),n}function zR(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}tN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=on("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",zR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});LR("Browser");const $R={apiKey:"AIzaSyC6LShnmiJQpE5KWGTnaTTaCKzS8KlSaA0",authDomain:"aurafarmers.firebaseapp.com",projectId:"aurafarmers",storageBucket:"aurafarmers.firebasestorage.app",messagingSenderId:"869379543910",appId:"1:869379543910:web:0ac1749b416ec97789eea7",measurementId:"G-N5JGC1YC4V"},K1=V0($R),Ws=uP(K1),Jl=FR(K1),G1=Z.createContext({user:null,loading:!0}),Q1=()=>Z.useContext(G1),BR=({children:t})=>{const[e,n]=Z.useState(null),[r,i]=Z.useState(!0);return Z.useEffect(()=>{const s=PN(Jl,o=>{n(o),i(!1)});return()=>s()},[]),d.jsx(G1.Provider,{value:{user:e,loading:r},children:t})},X1=Z.createContext(void 0),Fu=()=>{const t=Z.useContext(X1);if(!t)throw new Error("useUser must be used within a UserProvider");return t},Y1=({children:t})=>{const{user:e}=Q1(),[n,r]=Z.useState(null),[i,s]=Z.useState([]),[o,l]=Z.useState([]),[u,c]=Z.useState(!0);Z.useEffect(()=>{(async()=>{if(!e){r(null),s([]),l([]),c(!1);return}try{const N=$s(Ws,"users",e.uid),R=await TP(N);if(R.exists()){const b=R.data();r(b.profile||null),s(b.missions||[]),l(b.badges||[])}else console.warn("User doc not found in Firestore")}catch(N){console.error("Error fetching user data:",N)}finally{c(!1)}})()},[e]);const p=async C=>{if(!e)return;const N=$s(Ws,"users",e.uid),R={...n,...C};r(R),await qc(N,{profile:R})},m=async C=>{if(!e)return;const N=i.map(b=>b.id===C?{...b,completed:!0,progress:100}:b);s(N);const R=$s(Ws,"users",e.uid);await qc(R,{missions:N})},g=async(C,N)=>{if(!e)return;const R=i.map(T=>T.id===C?{...T,progress:Math.min(100,N)}:T);s(R);const b=$s(Ws,"users",e.uid);await qc(b,{missions:R})};return d.jsx(X1.Provider,{value:{profile:n,missions:i,badges:o,loading:u,updateProfile:p,completeMission:m,updateMissionProgress:g},children:t})},J1=({mission:t,icon:e})=>{const{updateMissionProgress:n}=Fu(),r=s=>{switch(s){case"easy":return"text-green-600 bg-green-100";case"medium":return"text-yellow-600 bg-yellow-100";case"hard":return"text-red-600 bg-red-100";default:return"text-gray-600 bg-gray-100"}},i=s=>{switch(s){case"organic":return"text-green-600 bg-green-100";case"water":return"text-blue-600 bg-blue-100";case"soil":return"text-amber-600 bg-amber-100";case"biodiversity":return"text-emerald-600 bg-emerald-100";default:return"text-gray-600 bg-gray-100"}};return d.jsxs("div",{className:"border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow",children:[d.jsxs("div",{className:"flex items-start justify-between mb-3",children:[d.jsxs("div",{className:"flex items-center space-x-3",children:[d.jsx("div",{className:`p-2 rounded-lg ${i(t.category)}`,children:d.jsx(e,{className:"h-5 w-5"})}),d.jsxs("div",{children:[d.jsx("h3",{className:"font-semibold text-gray-800",children:t.title}),d.jsx("p",{className:"text-sm text-gray-600",children:t.description})]})]}),d.jsx("div",{className:"flex items-center space-x-2",children:d.jsx("span",{className:`px-2 py-1 text-xs font-medium rounded-full ${r(t.difficulty)}`,children:t.difficulty})})]}),d.jsxs("div",{className:"space-y-3",children:[d.jsxs("div",{className:"flex items-center justify-between text-sm",children:[d.jsxs("div",{className:"flex items-center space-x-4",children:[d.jsxs("div",{className:"flex items-center space-x-1 text-gray-600",children:[d.jsx(mf,{className:"h-4 w-4"}),d.jsx("span",{children:t.duration})]}),d.jsxs("div",{className:"flex items-center space-x-1 text-amber-600",children:[d.jsx(p0,{className:"h-4 w-4"}),d.jsxs("span",{children:[t.points," pts"]})]})]}),d.jsxs("span",{className:"font-medium text-gray-700",children:[t.progress,"%"]})]}),d.jsx("div",{className:"bg-gray-200 rounded-full h-2",children:d.jsx("div",{className:"bg-green-600 rounded-full h-2 transition-all duration-300",style:{width:`${t.progress}%`}})}),!t.completed&&d.jsxs("div",{className:"flex space-x-2 pt-2",children:[d.jsx("button",{onClick:()=>n(t.id,t.progress+10),className:"text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full hover:bg-green-200 transition-colors",children:"Update Progress"}),t.progress>=90&&d.jsx("button",{className:"text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-200 transition-colors",children:"Mark Complete"})]})]})]})},Z1=({badge:t,size:e="md"})=>{const n={sm:"w-8 h-8 text-lg",md:"w-12 h-12 text-2xl",lg:"w-16 h-16 text-3xl"};return d.jsxs("div",{className:`flex items-center space-x-3 ${t.earned?"":"opacity-50"}`,children:[d.jsx("div",{className:`${n[e]} bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg`,children:d.jsx("span",{children:t.icon})}),d.jsxs("div",{className:"flex-1",children:[d.jsx("h3",{className:"font-semibold text-gray-800",children:t.name}),d.jsx("p",{className:"text-sm text-gray-600",children:t.description}),t.earned&&t.dateEarned&&d.jsxs("div",{className:"flex items-center space-x-1 text-xs text-gray-500 mt-1",children:[d.jsx(yS,{className:"h-3 w-3"}),d.jsxs("span",{children:["Earned on ",new Date(t.dateEarned).toLocaleDateString()]})]})]}),t.earned&&d.jsx("div",{className:"w-3 h-3 bg-green-500 rounded-full"})]})},By=()=>{const{profile:t,missions:e,badges:n,loading:r}=Fu();if(r)return d.jsx("div",{className:"flex items-center justify-center h-screen",children:d.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"})});if(!t)return d.jsxs("div",{className:"flex flex-col items-center justify-center h-screen text-gray-600",children:[d.jsx("p",{className:"text-lg",children:"No profile found."}),d.jsx("p",{className:"text-sm text-gray-500",children:"Please complete signup."})]});const i=e.filter(c=>!c.completed),s=e.filter(c=>c.completed),o=n.filter(c=>c.earned),l={organic:d0,water:f0,soil:v0,biodiversity:Po},u=t.totalPoints%1e3/1e3*100;return d.jsxs("div",{className:"space-y-6",children:[d.jsxs("div",{className:"bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 text-white",children:[d.jsxs("h1",{className:"text-2xl font-bold mb-2",children:["Welcome back, ",t.name,"!"]}),d.jsx("p",{className:"text-green-100",children:"Continue your sustainable farming journey"})]}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:[d.jsx("div",{className:"bg-white rounded-xl p-6 shadow-sm border border-green-100",children:d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-sm text-gray-600",children:"Sustainability Score"}),d.jsx("p",{className:"text-2xl font-bold text-green-600",children:t.sustainabilityScore})]}),d.jsx("div",{className:"h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center",children:d.jsx(g0,{className:"h-6 w-6 text-green-600"})})]})}),d.jsxs("div",{className:"bg-white rounded-xl p-6 shadow-sm border border-green-100",children:[d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-sm text-gray-600",children:"Level"}),d.jsx("p",{className:"text-2xl font-bold text-green-600",children:t.level})]}),d.jsx("div",{className:"h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center",children:d.jsx(gS,{className:"h-6 w-6 text-green-600"})})]}),d.jsxs("div",{className:"mt-3",children:[d.jsx("div",{className:"bg-green-100 rounded-full h-2",children:d.jsx("div",{className:"bg-green-600 rounded-full h-2 transition-all duration-500",style:{width:`${u}%`}})}),d.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:[1e3-t.totalPoints%1e3," points to level"," ",t.level+1]})]})]}),d.jsx("div",{className:"bg-white rounded-xl p-6 shadow-sm border border-green-100",children:d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-sm text-gray-600",children:"Active Missions"}),d.jsx("p",{className:"text-2xl font-bold text-green-600",children:i.length})]}),d.jsx("div",{className:"h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center",children:d.jsx(m0,{className:"h-6 w-6 text-green-600"})})]})}),d.jsx("div",{className:"bg-white rounded-xl p-6 shadow-sm border border-green-100",children:d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-sm text-gray-600",children:"Community Rank"}),d.jsxs("p",{className:"text-2xl font-bold text-green-600",children:["#",t.rank]})]}),d.jsx("div",{className:"h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center",children:d.jsx(gf,{className:"h-6 w-6 text-green-600"})})]})})]}),d.jsxs("div",{className:"bg-white rounded-xl p-6 shadow-sm border border-green-100",children:[d.jsx("h2",{className:"text-xl font-bold text-gray-800 mb-4",children:"Active Missions"}),d.jsx("div",{className:"space-y-4",children:i.slice(0,3).map(c=>{const p=l[c.category];return d.jsx(J1,{mission:c,icon:p},c.id)})})]}),d.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[d.jsxs("div",{className:"bg-white rounded-xl p-6 shadow-sm border border-green-100",children:[d.jsx("h2",{className:"text-xl font-bold text-gray-800 mb-4",children:"Recent Achievements"}),d.jsx("div",{className:"space-y-3",children:o.slice(0,3).map(c=>d.jsx(Z1,{badge:c},c.id))})]}),d.jsxs("div",{className:"bg-white rounded-xl p-6 shadow-sm border border-green-100",children:[d.jsx("h2",{className:"text-xl font-bold text-gray-800 mb-4",children:"Progress Summary"}),d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"flex justify-between items-center",children:[d.jsx("span",{className:"text-gray-600",children:"Missions Completed"}),d.jsxs("span",{className:"font-semibold text-green-600",children:[s.length,"/",e.length]})]}),d.jsxs("div",{className:"flex justify-between items-center",children:[d.jsx("span",{className:"text-gray-600",children:"Badges Earned"}),d.jsxs("span",{className:"font-semibold text-green-600",children:[o.length,"/",n.length]})]}),d.jsxs("div",{className:"flex justify-between items-center",children:[d.jsx("span",{className:"text-gray-600",children:"Total Points"}),d.jsx("span",{className:"font-semibold text-green-600",children:t.totalPoints.toLocaleString()})]})]})]})]})]})},HR=()=>{const{missions:t}=Fu(),[e,n]=Z.useState("all"),[r,i]=Z.useState("all"),s={organic:d0,water:f0,soil:v0,biodiversity:Po},o=t.filter(u=>{const c=e==="all"||e==="active"&&!u.completed||e==="completed"&&u.completed,p=r==="all"||u.category===r;return c&&p}),l=[{id:"new1",title:"Rainwater Harvesting Setup",description:"Install and maintain rainwater collection system",category:"water",points:400,duration:"6 weeks",difficulty:"hard",completed:!1,progress:0},{id:"new2",title:"Beneficial Insects Habitat",description:"Create habitat areas to attract natural pest predators",category:"biodiversity",points:200,duration:"1 month",difficulty:"medium",completed:!1,progress:0}];return d.jsxs("div",{className:"space-y-6",children:[d.jsx("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0",children:d.jsxs("div",{children:[d.jsx("h1",{className:"text-2xl font-bold text-gray-800",children:"Your Missions"}),d.jsx("p",{className:"text-gray-600",children:"Complete sustainable farming challenges to earn points and badges"})]})}),d.jsx("div",{className:"bg-white rounded-xl p-4 shadow-sm border border-green-100",children:d.jsxs("div",{className:"flex flex-wrap gap-4",children:[d.jsxs("div",{className:"flex items-center space-x-2",children:[d.jsx(ES,{className:"h-4 w-4 text-gray-600"}),d.jsx("span",{className:"text-sm font-medium text-gray-700",children:"Filter by:"})]}),d.jsx("div",{className:"flex space-x-2",children:["all","active","completed"].map(u=>d.jsx("button",{onClick:()=>n(u),className:`px-3 py-1 rounded-full text-sm transition-colors ${e===u?"bg-green-100 text-green-700":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:u.charAt(0).toUpperCase()+u.slice(1)},u))}),d.jsx("div",{className:"flex space-x-2",children:["all","organic","water","soil","biodiversity"].map(u=>d.jsx("button",{onClick:()=>i(u),className:`px-3 py-1 rounded-full text-sm transition-colors ${r===u?"bg-green-100 text-green-700":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:u.charAt(0).toUpperCase()+u.slice(1)},u))})]})}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[d.jsx("div",{className:"bg-white rounded-xl p-6 shadow-sm border border-green-100",children:d.jsxs("div",{className:"text-center",children:[d.jsx("div",{className:"text-2xl font-bold text-green-600",children:t.filter(u=>!u.completed).length}),d.jsx("div",{className:"text-sm text-gray-600",children:"Active Missions"})]})}),d.jsx("div",{className:"bg-white rounded-xl p-6 shadow-sm border border-green-100",children:d.jsxs("div",{className:"text-center",children:[d.jsx("div",{className:"text-2xl font-bold text-green-600",children:t.filter(u=>u.completed).length}),d.jsx("div",{className:"text-sm text-gray-600",children:"Completed Missions"})]})}),d.jsx("div",{className:"bg-white rounded-xl p-6 shadow-sm border border-green-100",children:d.jsxs("div",{className:"text-center",children:[d.jsx("div",{className:"text-2xl font-bold text-green-600",children:t.reduce((u,c)=>u+(c.completed?c.points:0),0)}),d.jsx("div",{className:"text-sm text-gray-600",children:"Points Earned"})]})})]}),d.jsxs("div",{className:"bg-white rounded-xl p-6 shadow-sm border border-green-100",children:[d.jsx("h2",{className:"text-xl font-bold text-gray-800 mb-4",children:e==="all"?"All Missions":e==="active"?"Active Missions":"Completed Missions"}),d.jsx("div",{className:"space-y-4",children:o.map(u=>{const c=s[u.category];return d.jsx(J1,{mission:u,icon:c},u.id)})})]}),d.jsxs("div",{className:"bg-white rounded-xl p-6 shadow-sm border border-green-100",children:[d.jsxs("div",{className:"flex items-center justify-between mb-4",children:[d.jsx("h2",{className:"text-xl font-bold text-gray-800",children:"Discover New Missions"}),d.jsx(AS,{className:"h-5 w-5 text-gray-600"})]}),d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:l.map(u=>{const c=s[u.category];return d.jsxs("div",{className:"border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-green-300 hover:bg-green-50 transition-colors cursor-pointer",children:[d.jsxs("div",{className:"flex items-center space-x-3 mb-3",children:[d.jsx("div",{className:"p-2 rounded-lg bg-gray-100",children:d.jsx(c,{className:"h-5 w-5 text-gray-600"})}),d.jsxs("div",{children:[d.jsx("h3",{className:"font-semibold text-gray-800",children:u.title}),d.jsx("p",{className:"text-sm text-gray-600",children:u.description})]})]}),d.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-600",children:[d.jsxs("div",{className:"flex items-center space-x-4",children:[d.jsxs("div",{className:"flex items-center space-x-1",children:[d.jsx(mf,{className:"h-4 w-4"}),d.jsx("span",{children:u.duration})]}),d.jsxs("div",{className:"flex items-center space-x-1 text-amber-600",children:[d.jsx(p0,{className:"h-4 w-4"}),d.jsxs("span",{children:[u.points," pts"]})]})]}),d.jsx("button",{className:"px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs hover:bg-green-200 transition-colors",children:"Start Mission"})]})]},u.id)})})]})]})},WR=()=>{const{profile:t,badges:e,updateProfile:n}=Fu(),[r,i]=Z.useState(!1),[s,o]=Z.useState({name:t.name,location:t.location,farmSize:t.farmSize,primaryCrop:t.primaryCrop}),l=()=>{n(s),i(!1)},u=()=>{o({name:t.name,location:t.location,farmSize:t.farmSize,primaryCrop:t.primaryCrop}),i(!1)},c=e.filter(m=>m.earned),p=e.length;return d.jsxs("div",{className:"space-y-6",children:[d.jsxs("div",{className:"bg-white rounded-xl p-6 shadow-sm border border-green-100",children:[d.jsxs("div",{className:"flex items-start justify-between mb-6",children:[d.jsxs("div",{className:"flex items-center space-x-4",children:[d.jsx("div",{className:"w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-2xl font-bold text-white",children:t.name.split(" ").map(m=>m[0]).join("")}),d.jsxs("div",{children:[d.jsx("h1",{className:"text-2xl font-bold text-gray-800",children:t.name}),d.jsxs("p",{className:"text-gray-600",children:["Level ",t.level," Farmer"]}),d.jsxs("div",{className:"flex items-center space-x-4 mt-2 text-sm text-gray-600",children:[d.jsxs("div",{className:"flex items-center space-x-1",children:[d.jsx(No,{className:"h-4 w-4"}),d.jsx("span",{children:t.location})]}),d.jsxs("div",{className:"flex items-center space-x-1",children:[d.jsx(vS,{className:"h-4 w-4"}),d.jsxs("span",{children:[t.primaryCrop," • ",t.farmSize]})]})]})]})]}),d.jsxs("button",{onClick:()=>i(!0),className:"flex items-center space-x-2 px-4 py-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors",children:[d.jsx(xS,{className:"h-4 w-4"}),d.jsx("span",{children:"Edit Profile"})]})]}),d.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[d.jsxs("div",{className:"text-center p-4 bg-green-50 rounded-lg",children:[d.jsx("div",{className:"text-2xl font-bold text-green-600",children:t.sustainabilityScore}),d.jsx("div",{className:"text-sm text-gray-600",children:"Sustainability Score"})]}),d.jsxs("div",{className:"text-center p-4 bg-blue-50 rounded-lg",children:[d.jsxs("div",{className:"text-2xl font-bold text-blue-600",children:["#",t.rank]}),d.jsx("div",{className:"text-sm text-gray-600",children:"Community Rank"})]}),d.jsxs("div",{className:"text-center p-4 bg-yellow-50 rounded-lg",children:[d.jsx("div",{className:"text-2xl font-bold text-yellow-600",children:t.totalPoints.toLocaleString()}),d.jsx("div",{className:"text-sm text-gray-600",children:"Total Points"})]}),d.jsxs("div",{className:"text-center p-4 bg-purple-50 rounded-lg",children:[d.jsxs("div",{className:"text-2xl font-bold text-purple-600",children:[c.length,"/",p]}),d.jsx("div",{className:"text-sm text-gray-600",children:"Badges Earned"})]})]})]}),r&&d.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:d.jsxs("div",{className:"bg-white rounded-xl p-6 w-full max-w-md mx-4",children:[d.jsxs("div",{className:"flex items-center justify-between mb-4",children:[d.jsx("h2",{className:"text-xl font-bold text-gray-800",children:"Edit Profile"}),d.jsx("button",{onClick:u,className:"text-gray-600 hover:text-gray-800",children:d.jsx(w0,{className:"h-5 w-5"})})]}),d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Name"}),d.jsx("input",{type:"text",value:s.name,onChange:m=>o(g=>({...g,name:m.target.value})),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Location"}),d.jsx("input",{type:"text",value:s.location,onChange:m=>o(g=>({...g,location:m.target.value})),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Farm Size"}),d.jsx("input",{type:"text",value:s.farmSize,onChange:m=>o(g=>({...g,farmSize:m.target.value})),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Primary Crop"}),d.jsx("input",{type:"text",value:s.primaryCrop,onChange:m=>o(g=>({...g,primaryCrop:m.target.value})),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"})]})]}),d.jsxs("div",{className:"flex space-x-3 mt-6",children:[d.jsxs("button",{onClick:l,className:"flex-1 flex items-center justify-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors",children:[d.jsx(CS,{className:"h-4 w-4"}),d.jsx("span",{children:"Save Changes"})]}),d.jsx("button",{onClick:u,className:"px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors",children:"Cancel"})]})]})}),d.jsxs("div",{className:"bg-white rounded-xl p-6 shadow-sm border border-green-100",children:[d.jsx("h2",{className:"text-xl font-bold text-gray-800 mb-4",children:"Achievements & Badges"}),d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:e.map(m=>d.jsx(Z1,{badge:m},m.id))})]}),d.jsxs("div",{className:"bg-white rounded-xl p-6 shadow-sm border border-green-100",children:[d.jsx("h2",{className:"text-xl font-bold text-gray-800 mb-4",children:"Your Journey"}),d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between items-center mb-2",children:[d.jsx("span",{className:"text-sm font-medium text-gray-700",children:"Level Progress"}),d.jsxs("span",{className:"text-sm text-gray-600",children:["Level ",t.level]})]}),d.jsx("div",{className:"bg-gray-200 rounded-full h-3",children:d.jsx("div",{className:"bg-green-600 rounded-full h-3 transition-all duration-500",style:{width:`${t.totalPoints%1e3/1e3*100}%`}})}),d.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:[1e3-t.totalPoints%1e3," points to next level"]})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between items-center mb-2",children:[d.jsx("span",{className:"text-sm font-medium text-gray-700",children:"Badge Collection"}),d.jsxs("span",{className:"text-sm text-gray-600",children:[c.length,"/",p]})]}),d.jsx("div",{className:"bg-gray-200 rounded-full h-3",children:d.jsx("div",{className:"bg-yellow-500 rounded-full h-3 transition-all duration-500",style:{width:`${c.length/p*100}%`}})})]})]})]})]})},qR=()=>{const[t,e]=Z.useState("month"),[n,r]=Z.useState("score"),i=[{id:"1",name:"Priya Sharma",location:"Nashik, Maharashtra",sustainabilityScore:950,level:5,badgeCount:12,rank:1},{id:"2",name:"Amit Patel",location:"Anand, Gujarat",sustainabilityScore:920,level:4,badgeCount:11,rank:2},{id:"3",name:"Sunita Devi",location:"Jaipur, Rajasthan",sustainabilityScore:890,level:4,badgeCount:10,rank:3},{id:"4",name:"Ramesh Kumar",location:"Coimbatore, Tamil Nadu",sustainabilityScore:860,level:4,badgeCount:9,rank:4},{id:"15",name:"Rajesh Kumar",location:"Kurnool, Andhra Pradesh",sustainabilityScore:750,level:3,badgeCount:6,rank:15,isCurrentUser:!0}],s=c=>c===1?d.jsx(wS,{className:"h-6 w-6 text-yellow-500"}):c===2?d.jsx(gg,{className:"h-6 w-6 text-gray-400"}):c===3?d.jsx(gg,{className:"h-6 w-6 text-amber-600"}):d.jsxs("span",{className:"text-lg font-bold text-gray-600",children:["#",c]}),o=c=>c===1?"bg-gradient-to-r from-yellow-400 to-yellow-500":c===2?"bg-gradient-to-r from-gray-300 to-gray-400":c===3?"bg-gradient-to-r from-amber-400 to-amber-500":"bg-white",l=i.find(c=>c.isCurrentUser),u=i.filter(c=>!c.isCurrentUser);return d.jsxs("div",{className:"space-y-6",children:[d.jsx("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0",children:d.jsxs("div",{children:[d.jsx("h1",{className:"text-2xl font-bold text-gray-800",children:"Community Leaderboard"}),d.jsx("p",{className:"text-gray-600",children:"See how you rank against other sustainable farmers"})]})}),d.jsx("div",{className:"bg-white rounded-xl p-4 shadow-sm border border-green-100",children:d.jsxs("div",{className:"flex flex-wrap gap-4",children:[d.jsxs("div",{className:"flex items-center space-x-2",children:[d.jsx(y0,{className:"h-4 w-4 text-gray-600"}),d.jsx("span",{className:"text-sm font-medium text-gray-700",children:"View by:"})]}),d.jsx("div",{className:"flex space-x-2",children:["week","month","all"].map(c=>d.jsx("button",{onClick:()=>e(c),className:`px-3 py-1 rounded-full text-sm transition-colors ${t===c?"bg-green-100 text-green-700":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:c==="all"?"All Time":`This ${c.charAt(0).toUpperCase()+c.slice(1)}`},c))}),d.jsx("div",{className:"flex space-x-2",children:[{key:"score",label:"Score"},{key:"badges",label:"Badges"},{key:"level",label:"Level"}].map(c=>d.jsx("button",{onClick:()=>r(c.key),className:`px-3 py-1 rounded-full text-sm transition-colors ${n===c.key?"bg-green-100 text-green-700":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:c.label},c.key))})]})}),l&&d.jsx("div",{className:"bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-6 text-white",children:d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("div",{children:[d.jsx("h2",{className:"text-lg font-semibold mb-1",children:"Your Current Rank"}),d.jsxs("div",{className:"flex items-center space-x-4",children:[d.jsxs("div",{className:"text-3xl font-bold",children:["#",l.rank]}),d.jsxs("div",{children:[d.jsxs("div",{className:"text-green-100",children:["Score: ",l.sustainabilityScore]}),d.jsxs("div",{className:"text-green-100",children:["Level ",l.level," • ",l.badgeCount," badges"]})]})]})]}),d.jsxs("div",{className:"text-right",children:[d.jsx("div",{className:"text-green-100 text-sm",children:"Keep going!"}),d.jsxs("div",{className:"flex items-center space-x-1 text-green-100",children:[d.jsx(g0,{className:"h-4 w-4"}),d.jsx("span",{children:"+5 ranks this month"})]})]})]})}),d.jsxs("div",{className:"bg-white rounded-xl p-6 shadow-sm border border-green-100",children:[d.jsx("h2",{className:"text-xl font-bold text-gray-800 mb-6",children:"Top Performers"}),d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:u.slice(0,3).map((c,p)=>d.jsxs("div",{className:`relative p-6 rounded-xl text-center text-white ${o(c.rank)}`,children:[d.jsx("div",{className:"mb-4",children:s(c.rank)}),d.jsxs("div",{className:"mb-2",children:[d.jsx("h3",{className:"font-bold text-lg",children:c.name}),d.jsxs("div",{className:"flex items-center justify-center space-x-1 text-sm opacity-90",children:[d.jsx(No,{className:"h-3 w-3"}),d.jsx("span",{children:c.location})]})]}),d.jsxs("div",{className:"space-y-1 text-sm",children:[d.jsxs("div",{children:["Score: ",c.sustainabilityScore]}),d.jsxs("div",{children:["Level ",c.level," • ",c.badgeCount," badges"]})]})]},c.id))})]}),d.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-green-100 overflow-hidden",children:[d.jsx("div",{className:"p-6 border-b border-gray-100",children:d.jsx("h2",{className:"text-xl font-bold text-gray-800",children:"Full Rankings"})}),d.jsx("div",{className:"divide-y divide-gray-100",children:i.map(c=>d.jsxs("div",{className:`p-4 flex items-center justify-between hover:bg-gray-50 transition-colors ${c.isCurrentUser?"bg-green-50 border-l-4 border-green-500":""}`,children:[d.jsxs("div",{className:"flex items-center space-x-4",children:[d.jsx("div",{className:"w-12 flex justify-center",children:s(c.rank)}),d.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold",children:c.name.split(" ").map(p=>p[0]).join("")}),d.jsxs("div",{children:[d.jsxs("h3",{className:`font-semibold ${c.isCurrentUser?"text-green-700":"text-gray-800"}`,children:[c.name," ",c.isCurrentUser&&"(You)"]}),d.jsxs("div",{className:"flex items-center space-x-1 text-sm text-gray-600",children:[d.jsx(No,{className:"h-3 w-3"}),d.jsx("span",{children:c.location})]})]})]}),d.jsxs("div",{className:"text-right",children:[d.jsxs("div",{className:"font-semibold text-gray-800",children:[c.sustainabilityScore," pts"]}),d.jsxs("div",{className:"text-sm text-gray-600",children:["Level ",c.level," • ",c.badgeCount," badges"]})]})]},c.id))})]}),d.jsxs("div",{className:"bg-white rounded-xl p-6 shadow-sm border border-green-100",children:[d.jsx("h2",{className:"text-xl font-bold text-gray-800 mb-4",children:"Climb the Ranks"}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[d.jsxs("div",{className:"p-4 bg-green-50 rounded-lg",children:[d.jsx("h3",{className:"font-semibold text-green-800 mb-2",children:"Next Goal"}),d.jsx("p",{className:"text-sm text-green-700",children:"Earn 110 more points to reach rank #14"}),d.jsx("div",{className:"mt-3 bg-green-200 rounded-full h-2",children:d.jsx("div",{className:"bg-green-600 rounded-full h-2 w-3/4"})})]}),d.jsxs("div",{className:"p-4 bg-blue-50 rounded-lg",children:[d.jsx("h3",{className:"font-semibold text-blue-800 mb-2",children:"Weekly Challenge"}),d.jsx("p",{className:"text-sm text-blue-700",children:"Complete 2 missions to earn bonus points"}),d.jsx("div",{className:"mt-3 bg-blue-200 rounded-full h-2",children:d.jsx("div",{className:"bg-blue-600 rounded-full h-2 w-1/2"})})]}),d.jsxs("div",{className:"p-4 bg-purple-50 rounded-lg",children:[d.jsx("h3",{className:"font-semibold text-purple-800 mb-2",children:"Badge Hunt"}),d.jsx("p",{className:"text-sm text-purple-700",children:"Earn 3 more badges to unlock special rewards"}),d.jsx("div",{className:"mt-3 bg-purple-200 rounded-full h-2",children:d.jsx("div",{className:"bg-purple-600 rounded-full h-2 w-2/3"})})]})]})]})]})},KR=()=>{const[t,e]=Z.useState("feed"),n=[{id:"1",author:"Priya Sharma",location:"Nashik, Maharashtra",timeAgo:"2 hours ago",content:"Just completed my drip irrigation setup! Water usage has reduced by 40% and my tomatoes are thriving. Thanks to the community tips!",image:"https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=400",likes:24,comments:8,mission:"Water Conservation Mission"},{id:"2",author:"Amit Patel",location:"Anand, Gujarat",timeAgo:"5 hours ago",content:"Earned my Soil Guardian badge today! Organic composting has improved my soil pH significantly. The difference in crop quality is amazing.",likes:18,comments:12,achievement:"Soil Guardian"},{id:"3",author:"Sunita Devi",location:"Jaipur, Rajasthan",timeAgo:"1 day ago",content:"Intercropping with legumes has been a game changer! My cotton yield increased by 25% and soil nitrogen levels are much better.",image:"https://images.pexels.com/photos/2518861/pexels-photo-2518861.jpeg?auto=compress&cs=tinysrgb&w=400",likes:32,comments:15,mission:"Crop Diversification Quest"}],r=[{farmer:"Rajesh Kumar",location:"Kurnool, AP",achievement:"Organic Pioneer",timeAgo:"1 hour ago"},{farmer:"Maya Singh",location:"Punjab",achievement:"Water Warrior",timeAgo:"3 hours ago"},{farmer:"Kiran Reddy",location:"Telangana",achievement:"Biodiversity Champion",timeAgo:"6 hours ago"}];return d.jsxs("div",{className:"space-y-6",children:[d.jsxs("div",{children:[d.jsx("h1",{className:"text-2xl font-bold text-gray-800",children:"Community Hub"}),d.jsx("p",{className:"text-gray-600",children:"Connect, share, and learn from fellow sustainable farmers"})]}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[d.jsx("div",{className:"bg-white rounded-xl p-6 shadow-sm border border-green-100",children:d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-sm text-gray-600",children:"Active Farmers"}),d.jsx("p",{className:"text-2xl font-bold text-green-600",children:"1,247"})]}),d.jsx(gf,{className:"h-8 w-8 text-green-600"})]})}),d.jsx("div",{className:"bg-white rounded-xl p-6 shadow-sm border border-green-100",children:d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-sm text-gray-600",children:"Posts This Week"}),d.jsx("p",{className:"text-2xl font-bold text-green-600",children:"342"})]}),d.jsx(to,{className:"h-8 w-8 text-green-600"})]})}),d.jsx("div",{className:"bg-white rounded-xl p-6 shadow-sm border border-green-100",children:d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-sm text-gray-600",children:"Success Stories"}),d.jsx("p",{className:"text-2xl font-bold text-green-600",children:"89"})]}),d.jsx(mg,{className:"h-8 w-8 text-green-600"})]})})]}),d.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-green-100",children:[d.jsx("div",{className:"flex border-b border-gray-100",children:[{key:"feed",label:"Community Feed"},{key:"achievements",label:"Recent Achievements"},{key:"discussions",label:"Discussions"}].map(i=>d.jsx("button",{onClick:()=>e(i.key),className:`px-6 py-3 font-medium transition-colors ${t===i.key?"text-green-600 border-b-2 border-green-600":"text-gray-600 hover:text-gray-800"}`,children:i.label},i.key))}),d.jsxs("div",{className:"p-6",children:[t==="feed"&&d.jsxs("div",{className:"space-y-6",children:[d.jsxs("div",{className:"bg-gray-50 rounded-lg p-4",children:[d.jsxs("div",{className:"flex items-center space-x-3 mb-3",children:[d.jsx("div",{className:"w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold",children:"RK"}),d.jsx("input",{type:"text",placeholder:"Share your farming success story...",className:"flex-1 bg-white border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"})]}),d.jsxs("div",{className:"flex items-center space-x-4 text-sm text-gray-600",children:[d.jsxs("button",{className:"flex items-center space-x-1 hover:text-green-600",children:[d.jsx(_S,{className:"h-4 w-4"}),d.jsx("span",{children:"Photo"})]}),d.jsxs("button",{className:"flex items-center space-x-1 hover:text-green-600",children:[d.jsx(No,{className:"h-4 w-4"}),d.jsx("span",{children:"Location"})]})]})]}),n.map(i=>d.jsxs("div",{className:"border border-gray-200 rounded-lg p-6",children:[d.jsx("div",{className:"flex items-center justify-between mb-4",children:d.jsxs("div",{className:"flex items-center space-x-3",children:[d.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold",children:i.author.split(" ").map(s=>s[0]).join("")}),d.jsxs("div",{children:[d.jsx("h3",{className:"font-semibold text-gray-800",children:i.author}),d.jsxs("div",{className:"flex items-center space-x-2 text-sm text-gray-600",children:[d.jsxs("div",{className:"flex items-center space-x-1",children:[d.jsx(No,{className:"h-3 w-3"}),d.jsx("span",{children:i.location})]}),d.jsx("span",{children:"•"}),d.jsxs("div",{className:"flex items-center space-x-1",children:[d.jsx(mf,{className:"h-3 w-3"}),d.jsx("span",{children:i.timeAgo})]})]})]})]})}),i.mission&&d.jsxs("div",{className:"mb-3 inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm",children:["🎯 ",i.mission]}),i.achievement&&d.jsxs("div",{className:"mb-3 inline-block bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm",children:["🏆 ",i.achievement]}),d.jsx("p",{className:"text-gray-700 mb-4",children:i.content}),i.image&&d.jsx("img",{src:i.image,alt:"Post content",className:"w-full h-64 object-cover rounded-lg mb-4"}),d.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-gray-100",children:[d.jsxs("div",{className:"flex items-center space-x-6",children:[d.jsxs("button",{className:"flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors",children:[d.jsx(mg,{className:"h-5 w-5"}),d.jsx("span",{children:i.likes})]}),d.jsxs("button",{className:"flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors",children:[d.jsx(to,{className:"h-5 w-5"}),d.jsx("span",{children:i.comments})]})]}),d.jsx("button",{className:"text-gray-600 hover:text-green-500 transition-colors",children:d.jsx(PS,{className:"h-5 w-5"})})]})]},i.id))]}),t==="achievements"&&d.jsxs("div",{className:"space-y-4",children:[d.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"Recent Community Achievements"}),r.map((i,s)=>d.jsxs("div",{className:"flex items-center justify-between p-4 bg-yellow-50 rounded-lg",children:[d.jsxs("div",{className:"flex items-center space-x-3",children:[d.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-2xl",children:"🏆"}),d.jsxs("div",{children:[d.jsx("h4",{className:"font-semibold text-gray-800",children:i.farmer}),d.jsxs("p",{className:"text-sm text-gray-600",children:['Earned "',i.achievement,'" badge • ',i.location]})]})]}),d.jsx("span",{className:"text-sm text-gray-500",children:i.timeAgo})]},s))]}),t==="discussions"&&d.jsx("div",{className:"space-y-6",children:d.jsxs("div",{className:"text-center py-8",children:[d.jsx(to,{className:"h-16 w-16 text-gray-400 mx-auto mb-4"}),d.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"Start a Discussion"}),d.jsx("p",{className:"text-gray-600 mb-4",children:"Ask questions, share tips, or discuss sustainable farming practices with the community."}),d.jsx("button",{className:"bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors",children:"Start Discussion"})]})})]})]})]})},GR=({isOpen:t,onClose:e})=>{const[n,r]=Z.useState([{id:"1",type:"bot",content:"Hello! I'm your FarmQuest AI assistant. I can help you with sustainable farming practices, technical questions about the platform, or answer any agricultural queries you have. How can I assist you today?",timestamp:new Date,category:"general"}]),[i,s]=Z.useState(""),[o,l]=Z.useState(!1),u=Z.useRef(null),c=()=>{var b;(b=u.current)==null||b.scrollIntoView({behavior:"smooth"})};Z.useEffect(()=>{c()},[n]);const p={"organic farming":"Organic farming focuses on natural methods without synthetic chemicals. Start with composting, use neem oil for pest control, and practice crop rotation. Our platform has specific missions for organic transition!","water conservation":"Water conservation is crucial for sustainable farming. Try drip irrigation, mulching, and rainwater harvesting. Check out our Water Conservation Mission for step-by-step guidance.","soil health":"Healthy soil is the foundation of sustainable farming. Test your soil pH, add organic matter, practice cover cropping, and avoid over-tilling. Our Soil Health Booster mission can guide you through this process.","pest control":"Integrated Pest Management (IPM) combines biological, cultural, and mechanical methods. Use beneficial insects, companion planting, and organic pesticides like neem oil. Avoid broad-spectrum chemicals.","crop rotation":"Crop rotation prevents soil depletion and reduces pest buildup. Rotate between nitrogen-fixing legumes, heavy feeders like corn, and light feeders like herbs. Plan 3-4 year rotation cycles.",composting:"Composting turns organic waste into nutrient-rich soil amendment. Mix green materials (nitrogen) with brown materials (carbon) in a 3:1 ratio. Turn regularly and maintain moisture.",intercropping:"Intercropping maximizes land use and improves soil health. Plant complementary crops together - like corn with beans and squash (Three Sisters method). This reduces pests and increases yield.",mulching:"Mulching conserves water, suppresses weeds, and improves soil. Use organic materials like straw, leaves, or grass clippings. Apply 2-4 inches around plants, keeping mulch away from stems."},m={"technical stack":`Our platform uses modern web technologies:

**Frontend:**
- React 18 with TypeScript for type safety
- Tailwind CSS for responsive design
- Lucide React for consistent icons
- Vite for fast development and builds

**Backend:**
- Supabase for database and authentication
- PostgreSQL for robust data storage
- Real-time subscriptions for live updates
- Row-level security for data protection

**Features:**
- Progressive Web App (PWA) capabilities
- Mobile-first responsive design
- Offline functionality with service workers
- Real-time community features

**Deployment:**
- Vercel/Netlify for frontend hosting
- Supabase for backend infrastructure
- CI/CD with GitHub Actions
- CDN for global performance`,database:"We use PostgreSQL with Supabase for our database. It includes tables for users, missions, badges, community posts, and progress tracking. All data is secured with Row-Level Security (RLS) policies.",api:"Our API follows RESTful principles with endpoints for user management, missions, community features, and real-time updates. We use Supabase for authentication and real-time subscriptions.",mobile:"The platform is built as a Progressive Web App (PWA) with mobile-first design. It works offline, can be installed on mobile devices, and provides native app-like experience.",security:"We implement multiple security layers: Supabase authentication, Row-Level Security policies, input validation, rate limiting, and HTTPS encryption for all communications.",performance:"Performance optimizations include code splitting, lazy loading, image optimization, caching strategies, and CDN usage for global content delivery."},g=b=>{const T=b.toLowerCase();for(const[v,x]of Object.entries(p))if(T.includes(v))return{content:x,category:"farming"};for(const[v,x]of Object.entries(m))if(T.includes(v)||T.includes("tech")||T.includes("code")||T.includes("development"))return{content:x,category:"technical"};return T.includes("mission")||T.includes("quest")?{content:"Missions are sustainable farming challenges tailored to your crop, location, and farm size. Complete missions to earn points, badges, and improve your sustainability score. Check the Missions tab to see available challenges!",category:"general"}:T.includes("badge")||T.includes("achievement")?{content:"Badges are achievements you earn by completing missions and adopting sustainable practices. Each badge represents mastery of specific farming techniques. View your earned badges in your Profile section!",category:"general"}:T.includes("leaderboard")||T.includes("rank")?{content:"The leaderboard shows how you rank against other farmers in your community based on sustainability score, completed missions, and earned badges. Compete with fellow farmers and climb the ranks!",category:"general"}:T.includes("community")?{content:"The Community Hub lets you share your farming successes, ask questions, and learn from other farmers. Post photos of your progress, celebrate achievements, and build connections with sustainable farmers!",category:"general"}:{content:"I can help you with sustainable farming practices, technical questions about our platform, or general agricultural guidance. Try asking about organic farming, water conservation, soil health, or our platform features like missions and badges!",category:"general"}},C=async()=>{if(!i.trim())return;const b={id:Date.now().toString(),type:"user",content:i,timestamp:new Date};r(T=>[...T,b]),s(""),l(!0),setTimeout(()=>{const T=g(i),v={id:(Date.now()+1).toString(),type:"bot",content:T.content,timestamp:new Date,category:T.category};r(x=>[...x,v]),l(!1)},1e3+Math.random()*1e3)},N=b=>{b.key==="Enter"&&!b.shiftKey&&(b.preventDefault(),C())},R=[{text:"How to start organic farming?",icon:Po},{text:"Water conservation tips",icon:SS},{text:"Technical stack details",icon:pg},{text:"Platform features",icon:IS}];return t?d.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-end justify-end z-50 p-4",children:d.jsxs("div",{className:"bg-white rounded-xl shadow-2xl w-full max-w-md h-[600px] flex flex-col",children:[d.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-t-xl",children:[d.jsxs("div",{className:"flex items-center space-x-3",children:[d.jsx("div",{className:"w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center",children:d.jsx(Vc,{className:"h-6 w-6"})}),d.jsxs("div",{children:[d.jsx("h3",{className:"font-semibold",children:"FarmQuest AI Assistant"}),d.jsx("p",{className:"text-sm text-green-100",children:"Always here to help"})]})]}),d.jsx("button",{onClick:e,className:"text-white hover:bg-white hover:bg-opacity-20 p-1 rounded-lg transition-colors",children:d.jsx(w0,{className:"h-5 w-5"})})]}),d.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4",children:[n.map(b=>d.jsx("div",{className:`flex ${b.type==="user"?"justify-end":"justify-start"}`,children:d.jsxs("div",{className:`flex items-start space-x-2 max-w-[80%] ${b.type==="user"?"flex-row-reverse space-x-reverse":""}`,children:[d.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center ${b.type==="user"?"bg-green-600 text-white":b.category==="farming"?"bg-green-100 text-green-600":b.category==="technical"?"bg-blue-100 text-blue-600":"bg-gray-100 text-gray-600"}`,children:b.type==="user"?d.jsx(_0,{className:"h-4 w-4"}):b.category==="farming"?d.jsx(Po,{className:"h-4 w-4"}):b.category==="technical"?d.jsx(pg,{className:"h-4 w-4"}):d.jsx(Vc,{className:"h-4 w-4"})}),d.jsxs("div",{className:`rounded-lg p-3 ${b.type==="user"?"bg-green-600 text-white":"bg-gray-100 text-gray-800"}`,children:[d.jsx("p",{className:"text-sm whitespace-pre-wrap",children:b.content}),d.jsx("p",{className:`text-xs mt-1 ${b.type==="user"?"text-green-100":"text-gray-500"}`,children:b.timestamp.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]})]})},b.id)),o&&d.jsx("div",{className:"flex justify-start",children:d.jsxs("div",{className:"flex items-start space-x-2",children:[d.jsx("div",{className:"w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center",children:d.jsx(Vc,{className:"h-4 w-4 text-gray-600"})}),d.jsx("div",{className:"bg-gray-100 rounded-lg p-3",children:d.jsxs("div",{className:"flex space-x-1",children:[d.jsx("div",{className:"w-2 h-2 bg-gray-400 rounded-full animate-bounce"}),d.jsx("div",{className:"w-2 h-2 bg-gray-400 rounded-full animate-bounce",style:{animationDelay:"0.1s"}}),d.jsx("div",{className:"w-2 h-2 bg-gray-400 rounded-full animate-bounce",style:{animationDelay:"0.2s"}})]})})]})}),d.jsx("div",{ref:u})]}),n.length===1&&d.jsxs("div",{className:"p-4 border-t border-gray-200",children:[d.jsx("p",{className:"text-sm text-gray-600 mb-3",children:"Quick questions:"}),d.jsx("div",{className:"grid grid-cols-2 gap-2",children:R.map((b,T)=>{const v=b.icon;return d.jsxs("button",{onClick:()=>s(b.text),className:"flex items-center space-x-2 p-2 text-xs bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-left",children:[d.jsx(v,{className:"h-3 w-3 text-gray-600"}),d.jsx("span",{className:"text-gray-700",children:b.text})]},T)})})]}),d.jsx("div",{className:"p-4 border-t border-gray-200",children:d.jsxs("div",{className:"flex space-x-2",children:[d.jsx("input",{type:"text",value:i,onChange:b=>s(b.target.value),onKeyPress:N,placeholder:"Ask about farming practices or technical details...",className:"flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"}),d.jsx("button",{onClick:C,disabled:!i.trim()||o,className:"bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:d.jsx(kS,{className:"h-4 w-4"})})]})})]})}):null};function eE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const QR=eE,tE=new Tr("auth","Firebase",eE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl=new wu("@firebase/auth");function XR(t,...e){Zl.logLevel<=ee.WARN&&Zl.warn(`Auth (${Pn}): ${t}`,...e)}function ol(t,...e){Zl.logLevel<=ee.ERROR&&Zl.error(`Auth (${Pn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(t,...e){throw op(t,...e)}function nE(t,...e){return op(t,...e)}function rE(t,e,n){const r={...QR(),[e]:n};return new Tr("auth","Firebase",r).create(e,{appName:t.name})}function al(t){return rE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function op(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return tE.create(t,...e)}function ae(t,e,...n){if(!t)throw op(e,...n)}function uo(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ol(e),new Error(e)}function eu(t,e){t||uo(e)}function YR(){return Wy()==="http:"||Wy()==="https:"}function Wy(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(YR()||N0()||"connection"in navigator)?navigator.onLine:!0}function ZR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(e,n){this.shortDelay=e,this.longDelay=n,eu(n>e,"Short delay should be less than long delay!"),this.isMobile=k0()||R0()}get(){return JR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t2(t,e){eu(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;uo("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;uo("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;uo("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r2=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],i2=new e2(3e4,6e4);function sE(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function zu(t,e,n,r,i={}){return oE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ii({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return P0()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Er(t.emulatorConfig.host)&&(c.credentials="include"),iE.fetch()(await aE(t,t.config.apiHost,n,l),c)})}async function oE(t,e,n){t._canInitEmulator=!1;const r={...n2,...e};try{const i=new s2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw La(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw La(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw La(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw La(t,"user-disabled",o);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw rE(t,p,c);Hy(t,p)}}catch(i){if(i instanceof Bt)throw i;Hy(t,"network-request-failed",{message:String(i)})}}async function aE(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?t2(t.config,i):`${t.config.apiScheme}://${i}`;return r2.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class s2{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nE(this.auth,"network-request-failed")),i2.get())})}}function La(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=nE(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o2(t,e){return zu(t,"POST","/v1/accounts:delete",e)}async function tu(t,e){return zu(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function a2(t,e=!1){const n=be(t),r=await n.getIdToken(e),i=lE(r);ae(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:co(Xc(i.auth_time)),issuedAtTime:co(Xc(i.iat)),expirationTime:co(Xc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Xc(t){return Number(t)*1e3}function lE(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ol("JWT malformed, contained fewer than 3 sections"),null;try{const i=yf(n);return i?JSON.parse(i):(ol("Failed to decode base64 JWT payload"),null)}catch(i){return ol("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function qy(t){const e=lE(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _d(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Bt&&l2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function l2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=co(this.lastLoginAt),this.creationTime=co(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function nu(t){var m;const e=t.auth,n=await t.getIdToken(),r=await _d(t,tu(e,{idToken:n}));ae(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(m=i.providerUserInfo)!=null&&m.length?uE(i.providerUserInfo):[],o=h2(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new vd(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,p)}async function c2(t){const e=be(t);await nu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function h2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function uE(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d2(t,e){const n=await oE(t,{},async()=>{const r=ii({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await aE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Er(t.emulatorConfig.host)&&(u.credentials="include"),iE.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function f2(t,e){return zu(t,"POST","/v2/accounts:revokeToken",sE(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const n=qy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await d2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ji;return r&&(ae(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ae(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ae(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ji,this.toJSON())}_performRefresh(){return uo("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Xt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new u2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new vd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await _d(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return a2(this,e)}reload(){return c2(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Xt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await nu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if($e(this.auth.app))return Promise.reject(al(this.auth));const e=await this.getIdToken();return await _d(this,o2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,p=n.lastLoginAt??void 0,{uid:m,emailVerified:g,isAnonymous:C,providerData:N,stsTokenManager:R}=n;ae(m&&R,e,"internal-error");const b=ji.fromJSON(this.name,R);ae(typeof m=="string",e,"internal-error"),Un(r,e.name),Un(i,e.name),ae(typeof g=="boolean",e,"internal-error"),ae(typeof C=="boolean",e,"internal-error"),Un(s,e.name),Un(o,e.name),Un(l,e.name),Un(u,e.name),Un(c,e.name),Un(p,e.name);const T=new Xt({uid:m,auth:e,email:i,emailVerified:g,displayName:r,isAnonymous:C,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:b,createdAt:c,lastLoginAt:p});return N&&Array.isArray(N)&&(T.providerData=N.map(v=>({...v}))),u&&(T._redirectEventId=u),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new ji;i.updateFromServerResponse(n);const s=new Xt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await nu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ae(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?uE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new ji;l.updateFromIdToken(r);const u=new Xt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new vd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky=new Map;function zr(t){eu(t instanceof Function,"Expected a class definition");let e=Ky.get(t);return e?(eu(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ky.set(t,e),e)}/**
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
 */class cE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}cE.type="NONE";const Gy=cE;/**
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
 */function Yc(t,e,n){return`firebase:${t}:${e}:${n}`}class Ui{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Yc(this.userKey,i.apiKey,s),this.fullPersistenceKey=Yc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await tu(this.auth,{idToken:e}).catch(()=>{});return n?Xt._fromGetAccountInfoResponse(this.auth,n,e):null}return Xt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ui(zr(Gy),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||zr(Gy);const o=Yc(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const p=await c._get(o);if(p){let m;if(typeof p=="string"){const g=await tu(e,{idToken:p}).catch(()=>{});if(!g)break;m=await Xt._fromGetAccountInfoResponse(e,g,p)}else m=Xt._fromJSON(e,p);c!==s&&(l=m),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ui(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Ui(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(y2(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(p2(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(v2(e))return"Blackberry";if(w2(e))return"Webos";if(m2(e))return"Safari";if((e.includes("chrome/")||g2(e))&&!e.includes("edge/"))return"Chrome";if(_2(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function p2(t=ge()){return/firefox\//i.test(t)}function m2(t=ge()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function g2(t=ge()){return/crios\//i.test(t)}function y2(t=ge()){return/iemobile/i.test(t)}function _2(t=ge()){return/android/i.test(t)}function v2(t=ge()){return/blackberry/i.test(t)}function w2(t=ge()){return/webos/i.test(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(t,e=[]){let n;switch(t){case"Browser":n=Qy(ge());break;case"Worker":n=`${Qy(ge())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Pn}/${r}`}/**
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
 */class E2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function T2(t,e={}){return zu(t,"GET","/v2/passwordPolicy",sE(t,e))}/**
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
 */const I2=6;class S2{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??I2,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xy(this),this.idTokenSubscription=new Xy(this),this.beforeStateQueue=new E2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=zr(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Ui.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await tu(this,{idToken:e}),r=await Xt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if($e(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await nu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ZR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if($e(this.app))return Promise.reject(al(this));const n=e?be(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return $e(this.app)?Promise.reject(al(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return $e(this.app)?Promise.reject(al(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(zr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await T2(this),n=new S2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Tr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await f2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&zr(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await Ui.create(this,[zr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if($e(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&XR(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function A2(t){return be(t)}class Xy{constructor(e){this.auth=e,this.observer=null,this.addObserver=b0(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function C2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(zr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function k2(t){return be(t).signOut()}var Yy="@firebase/auth",Jy="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function R2(t){hr(new In("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ae(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hE(t)},c=new x2(r,i,s,u);return C2(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),hr(new In("auth-internal",e=>{const n=A2(e.getProvider("auth").getImmediate());return(r=>new P2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zt(Yy,Jy,N2(t)),Zt(Yy,Jy,"esm2020")}R2("WebExtension");const b2=({activeTab:t,setActiveTab:e})=>{const[n,r]=u_.useState(!1),i=[{id:"dashboard",label:"Dashboard",icon:TS},{id:"missions",label:"Missions",icon:m0},{id:"profile",label:"Profile",icon:_0},{id:"leaderboard",label:"Leaderboard",icon:y0},{id:"community",label:"Community",icon:gf}];return d.jsxs(d.Fragment,{children:[d.jsx("nav",{className:"bg-white shadow-sm border-b border-green-100",children:d.jsx("div",{className:"container mx-auto px-4",children:d.jsxs("div",{className:"flex items-center justify-between h-16",children:[d.jsxs("div",{className:"flex items-center space-x-2",children:[d.jsx(Po,{className:"h-8 w-8 text-green-600"}),d.jsx("span",{className:"text-xl font-bold text-green-800",children:"FarmQuest"})]}),d.jsxs("div",{className:"hidden md:flex space-x-1",children:[i.map(s=>{const o=s.icon;return d.jsxs("button",{onClick:()=>e(s.id),className:`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${t===s.id?"bg-green-100 text-green-700 shadow-sm":"text-gray-600 hover:bg-gray-100 hover:text-gray-800"}`,children:[d.jsx(o,{className:"h-5 w-5"}),d.jsx("span",{className:"font-medium",children:s.label})]},s.id)}),d.jsxs("button",{onClick:()=>r(!0),className:"flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 text-gray-600 hover:bg-gray-100 hover:text-gray-800",children:[d.jsx(to,{className:"h-5 w-5"}),d.jsx("span",{className:"font-medium",children:"Ask AI"})]})]}),d.jsxs("div",{className:"flex items-center space-x-2",children:[d.jsx("button",{onClick:()=>r(!0),className:"p-2 rounded-lg transition-all duration-200 text-gray-600 hover:bg-gray-100",children:d.jsx(to,{className:"h-5 w-5"})}),d.jsx("div",{className:"md:hidden flex space-x-1",children:i.map(s=>{const o=s.icon;return d.jsx("button",{onClick:()=>e(s.id),className:`p-2 rounded-lg transition-all duration-200 ${t===s.id?"bg-green-100 text-green-700":"text-gray-600 hover:bg-gray-100"}`,children:d.jsx(o,{className:"h-5 w-5"})},s.id)})})]}),d.jsx("div",{children:d.jsxs("button",{onClick:()=>k2(Jl),className:"flex items-center gap-2 bg-green-500 text-white font-medium px-4 py-2 rounded-full shadow-md hover:bg-red-600 hover:shadow-lg transition duration-300 ease-in-out",children:[d.jsx("span",{children:"🚪"}),"Logout"]})})]})})}),d.jsx(GR,{isOpen:n,onClose:()=>r(!1)})]})},D2=()=>{const[t,e]=Z.useState(""),[n,r]=Z.useState(""),[i,s]=Z.useState(!1),[o,l]=Z.useState(""),[u,c]=Z.useState(!1),[p,m]=Z.useState(""),[g,C]=Z.useState(""),[N,R]=Z.useState(""),[b,T]=Z.useState(""),v=async x=>{x.preventDefault(),l(""),c(!0);try{if(i){const U=(await xN(Jl,t,n)).user;await SP($s(Ws,"users",U.uid),{profile:{name:"",location:"",farmSize:"",primaryCrop:"",sustainabilityScore:0,level:1,totalPoints:0,rank:0},missions:[{id:"1",title:"Organic Pest Control Challenge",description:"Use neem oil spray for 2 weeks instead of chemical pesticides",category:"organic",points:150,duration:"2 weeks",difficulty:"easy",completed:!1,progress:0}],badges:[{id:"1",name:"Getting Started",icon:"🌱",description:"Completed your first mission",earned:!1}]})}else await AN(Jl,t,n)}catch(O){l(O.message)}finally{c(!1)}};return d.jsx("div",{className:"flex flex-col items-center justify-center h-screen bg-green-100 px-4",children:d.jsxs("form",{onSubmit:v,className:"bg-white p-8 rounded-lg shadow-md w-full max-w-sm",children:[d.jsx("h2",{className:"text-2xl font-bold mb-4 text-center",children:i?"Sign Up":"Log In"}),o&&d.jsx("p",{className:"text-red-500 text-sm mb-2",children:o}),i&&d.jsxs(d.Fragment,{children:[d.jsx("input",{type:"text",placeholder:"Full Name",className:"w-full border px-3 py-2 rounded mb-4",value:p,onChange:x=>m(x.target.value),required:!0}),d.jsx("input",{type:"text",placeholder:"Location",className:"w-full border px-3 py-2 rounded mb-4",value:g,onChange:x=>C(x.target.value),required:!0}),d.jsx("input",{type:"text",placeholder:"Farm Size (e.g., 2.5 acres)",className:"w-full border px-3 py-2 rounded mb-4",value:N,onChange:x=>R(x.target.value),required:!0}),d.jsx("input",{type:"text",placeholder:"Primary Crop",className:"w-full border px-3 py-2 rounded mb-4",value:b,onChange:x=>T(x.target.value),required:!0})]}),d.jsx("input",{type:"email",placeholder:"Email",className:"w-full border px-3 py-2 rounded mb-4",value:t,onChange:x=>e(x.target.value),required:!0}),d.jsx("input",{type:"password",placeholder:"Password",className:"w-full border px-3 py-2 rounded mb-4",value:n,onChange:x=>r(x.target.value),required:!0}),d.jsx("button",{type:"submit",disabled:u,className:`w-full flex items-center justify-center gap-2 bg-green-600 text-white py-2 rounded transition 
            ${u?"opacity-70 cursor-not-allowed":"hover:bg-green-700"}`,children:u?d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"}),d.jsx("span",{children:"Loading..."})]}):i?"Create Account":"Log In"}),d.jsxs("p",{className:"mt-4 text-center text-sm",children:[i?"Already have an account?":"Don't have an account?"," ",d.jsx("span",{className:"text-green-700 cursor-pointer font-medium",onClick:()=>s(!i),children:i?"Log in":"Sign up"})]})]})})};function O2(){const[t,e]=Z.useState("dashboard"),n=()=>{switch(t){case"dashboard":return d.jsx(By,{});case"missions":return d.jsx(HR,{});case"profile":return d.jsx(WR,{});case"leaderboard":return d.jsx(qR,{});case"community":return d.jsx(KR,{});default:return d.jsx(By,{})}},{user:r,loading:i}=Q1();return i?d.jsx("div",{className:"flex items-center justify-center h-screen bg-gradient-to-br from-green-50 to-emerald-100",children:d.jsxs("div",{className:"text-center",children:[d.jsx("div",{className:"w-16 h-16 border-4 border-green-500 border-dashed rounded-full animate-spin mx-auto"}),d.jsx("h1",{className:"mt-6 text-2xl font-bold text-green-700",children:"🌱 Farmer’s App"}),d.jsx("p",{className:"mt-2 text-gray-600",children:"Preparing your dashboard..."})]})}):r?d.jsx(Y1,{children:d.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-green-50 to-emerald-100",children:[d.jsx(b2,{activeTab:t,setActiveTab:e}),d.jsx("main",{className:"container mx-auto px-4 py-6",children:n()})]})}):d.jsx(D2,{})}Jc.createRoot(document.getElementById("root")).render(d.jsx(u_.StrictMode,{children:d.jsx(BR,{children:d.jsx(Y1,{children:d.jsx(O2,{})})})}));
