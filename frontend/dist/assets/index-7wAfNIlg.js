function DT(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in n)){const l=Object.getOwnPropertyDescriptor(i,o);l&&Object.defineProperty(n,o,l.get?l:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function mv(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Wd={exports:{}},Ja={},Gd={exports:{}},Ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cy;function OT(){if(cy)return Ne;cy=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),T=Symbol.iterator;function I(P){return P===null||typeof P!="object"?null:(P=T&&P[T]||P["@@iterator"],typeof P=="function"?P:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,q={};function D(P,z,re){this.props=P,this.context=z,this.refs=q,this.updater=re||L}D.prototype.isReactComponent={},D.prototype.setState=function(P,z){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,z,"setState")},D.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function ie(){}ie.prototype=D.prototype;function te(P,z,re){this.props=P,this.context=z,this.refs=q,this.updater=re||L}var J=te.prototype=new ie;J.constructor=te,B(J,D.prototype),J.isPureReactComponent=!0;var se=Array.isArray,Ae=Object.prototype.hasOwnProperty,he={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function S(P,z,re){var de,we={},ke=null,be=null;if(z!=null)for(de in z.ref!==void 0&&(be=z.ref),z.key!==void 0&&(ke=""+z.key),z)Ae.call(z,de)&&!x.hasOwnProperty(de)&&(we[de]=z[de]);var Fe=arguments.length-2;if(Fe===1)we.children=re;else if(1<Fe){for(var We=Array(Fe),St=0;St<Fe;St++)We[St]=arguments[St+2];we.children=We}if(P&&P.defaultProps)for(de in Fe=P.defaultProps,Fe)we[de]===void 0&&(we[de]=Fe[de]);return{$$typeof:n,type:P,key:ke,ref:be,props:we,_owner:he.current}}function C(P,z){return{$$typeof:n,type:P.type,key:z,ref:P.ref,props:P.props,_owner:P._owner}}function k(P){return typeof P=="object"&&P!==null&&P.$$typeof===n}function V(P){var z={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(re){return z[re]})}var M=/\/+/g;function R(P,z){return typeof P=="object"&&P!==null&&P.key!=null?V(""+P.key):z.toString(36)}function $e(P,z,re,de,we){var ke=typeof P;(ke==="undefined"||ke==="boolean")&&(P=null);var be=!1;if(P===null)be=!0;else switch(ke){case"string":case"number":be=!0;break;case"object":switch(P.$$typeof){case n:case e:be=!0}}if(be)return be=P,we=we(be),P=de===""?"."+R(be,0):de,se(we)?(re="",P!=null&&(re=P.replace(M,"$&/")+"/"),$e(we,z,re,"",function(St){return St})):we!=null&&(k(we)&&(we=C(we,re+(!we.key||be&&be.key===we.key?"":(""+we.key).replace(M,"$&/")+"/")+P)),z.push(we)),1;if(be=0,de=de===""?".":de+":",se(P))for(var Fe=0;Fe<P.length;Fe++){ke=P[Fe];var We=de+R(ke,Fe);be+=$e(ke,z,re,We,we)}else if(We=I(P),typeof We=="function")for(P=We.call(P),Fe=0;!(ke=P.next()).done;)ke=ke.value,We=de+R(ke,Fe++),be+=$e(ke,z,re,We,we);else if(ke==="object")throw z=String(P),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.");return be}function qe(P,z,re){if(P==null)return P;var de=[],we=0;return $e(P,de,"","",function(ke){return z.call(re,ke,we++)}),de}function ze(P){if(P._status===-1){var z=P._result;z=z(),z.then(function(re){(P._status===0||P._status===-1)&&(P._status=1,P._result=re)},function(re){(P._status===0||P._status===-1)&&(P._status=2,P._result=re)}),P._status===-1&&(P._status=0,P._result=z)}if(P._status===1)return P._result.default;throw P._result}var Pe={current:null},ee={transition:null},ge={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:ee,ReactCurrentOwner:he};function ae(){throw Error("act(...) is not supported in production builds of React.")}return Ne.Children={map:qe,forEach:function(P,z,re){qe(P,function(){z.apply(this,arguments)},re)},count:function(P){var z=0;return qe(P,function(){z++}),z},toArray:function(P){return qe(P,function(z){return z})||[]},only:function(P){if(!k(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},Ne.Component=D,Ne.Fragment=t,Ne.Profiler=o,Ne.PureComponent=te,Ne.StrictMode=i,Ne.Suspense=m,Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ge,Ne.act=ae,Ne.cloneElement=function(P,z,re){if(P==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+P+".");var de=B({},P.props),we=P.key,ke=P.ref,be=P._owner;if(z!=null){if(z.ref!==void 0&&(ke=z.ref,be=he.current),z.key!==void 0&&(we=""+z.key),P.type&&P.type.defaultProps)var Fe=P.type.defaultProps;for(We in z)Ae.call(z,We)&&!x.hasOwnProperty(We)&&(de[We]=z[We]===void 0&&Fe!==void 0?Fe[We]:z[We])}var We=arguments.length-2;if(We===1)de.children=re;else if(1<We){Fe=Array(We);for(var St=0;St<We;St++)Fe[St]=arguments[St+2];de.children=Fe}return{$$typeof:n,type:P.type,key:we,ref:ke,props:de,_owner:be}},Ne.createContext=function(P){return P={$$typeof:h,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},P.Provider={$$typeof:l,_context:P},P.Consumer=P},Ne.createElement=S,Ne.createFactory=function(P){var z=S.bind(null,P);return z.type=P,z},Ne.createRef=function(){return{current:null}},Ne.forwardRef=function(P){return{$$typeof:f,render:P}},Ne.isValidElement=k,Ne.lazy=function(P){return{$$typeof:v,_payload:{_status:-1,_result:P},_init:ze}},Ne.memo=function(P,z){return{$$typeof:y,type:P,compare:z===void 0?null:z}},Ne.startTransition=function(P){var z=ee.transition;ee.transition={};try{P()}finally{ee.transition=z}},Ne.unstable_act=ae,Ne.useCallback=function(P,z){return Pe.current.useCallback(P,z)},Ne.useContext=function(P){return Pe.current.useContext(P)},Ne.useDebugValue=function(){},Ne.useDeferredValue=function(P){return Pe.current.useDeferredValue(P)},Ne.useEffect=function(P,z){return Pe.current.useEffect(P,z)},Ne.useId=function(){return Pe.current.useId()},Ne.useImperativeHandle=function(P,z,re){return Pe.current.useImperativeHandle(P,z,re)},Ne.useInsertionEffect=function(P,z){return Pe.current.useInsertionEffect(P,z)},Ne.useLayoutEffect=function(P,z){return Pe.current.useLayoutEffect(P,z)},Ne.useMemo=function(P,z){return Pe.current.useMemo(P,z)},Ne.useReducer=function(P,z,re){return Pe.current.useReducer(P,z,re)},Ne.useRef=function(P){return Pe.current.useRef(P)},Ne.useState=function(P){return Pe.current.useState(P)},Ne.useSyncExternalStore=function(P,z,re){return Pe.current.useSyncExternalStore(P,z,re)},Ne.useTransition=function(){return Pe.current.useTransition()},Ne.version="18.3.1",Ne}var hy;function Kf(){return hy||(hy=1,Gd.exports=OT()),Gd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dy;function bT(){if(dy)return Ja;dy=1;var n=Kf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,m,y){var v,T={},I=null,L=null;y!==void 0&&(I=""+y),m.key!==void 0&&(I=""+m.key),m.ref!==void 0&&(L=m.ref);for(v in m)i.call(m,v)&&!l.hasOwnProperty(v)&&(T[v]=m[v]);if(f&&f.defaultProps)for(v in m=f.defaultProps,m)T[v]===void 0&&(T[v]=m[v]);return{$$typeof:e,type:f,key:I,ref:L,props:T,_owner:o.current}}return Ja.Fragment=t,Ja.jsx=h,Ja.jsxs=h,Ja}var fy;function VT(){return fy||(fy=1,Wd.exports=bT()),Wd.exports}var b=VT(),K=Kf();const gv=mv(K),LT=DT({__proto__:null,default:gv},[K]);var tc={},Kd={exports:{}},rn={},Qd={exports:{}},Xd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var py;function MT(){return py||(py=1,(function(n){function e(ee,ge){var ae=ee.length;ee.push(ge);e:for(;0<ae;){var P=ae-1>>>1,z=ee[P];if(0<o(z,ge))ee[P]=ge,ee[ae]=z,ae=P;else break e}}function t(ee){return ee.length===0?null:ee[0]}function i(ee){if(ee.length===0)return null;var ge=ee[0],ae=ee.pop();if(ae!==ge){ee[0]=ae;e:for(var P=0,z=ee.length,re=z>>>1;P<re;){var de=2*(P+1)-1,we=ee[de],ke=de+1,be=ee[ke];if(0>o(we,ae))ke<z&&0>o(be,we)?(ee[P]=be,ee[ke]=ae,P=ke):(ee[P]=we,ee[de]=ae,P=de);else if(ke<z&&0>o(be,ae))ee[P]=be,ee[ke]=ae,P=ke;else break e}}return ge}function o(ee,ge){var ae=ee.sortIndex-ge.sortIndex;return ae!==0?ae:ee.id-ge.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();n.unstable_now=function(){return h.now()-f}}var m=[],y=[],v=1,T=null,I=3,L=!1,B=!1,q=!1,D=typeof setTimeout=="function"?setTimeout:null,ie=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function J(ee){for(var ge=t(y);ge!==null;){if(ge.callback===null)i(y);else if(ge.startTime<=ee)i(y),ge.sortIndex=ge.expirationTime,e(m,ge);else break;ge=t(y)}}function se(ee){if(q=!1,J(ee),!B)if(t(m)!==null)B=!0,ze(Ae);else{var ge=t(y);ge!==null&&Pe(se,ge.startTime-ee)}}function Ae(ee,ge){B=!1,q&&(q=!1,ie(S),S=-1),L=!0;var ae=I;try{for(J(ge),T=t(m);T!==null&&(!(T.expirationTime>ge)||ee&&!V());){var P=T.callback;if(typeof P=="function"){T.callback=null,I=T.priorityLevel;var z=P(T.expirationTime<=ge);ge=n.unstable_now(),typeof z=="function"?T.callback=z:T===t(m)&&i(m),J(ge)}else i(m);T=t(m)}if(T!==null)var re=!0;else{var de=t(y);de!==null&&Pe(se,de.startTime-ge),re=!1}return re}finally{T=null,I=ae,L=!1}}var he=!1,x=null,S=-1,C=5,k=-1;function V(){return!(n.unstable_now()-k<C)}function M(){if(x!==null){var ee=n.unstable_now();k=ee;var ge=!0;try{ge=x(!0,ee)}finally{ge?R():(he=!1,x=null)}}else he=!1}var R;if(typeof te=="function")R=function(){te(M)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,qe=$e.port2;$e.port1.onmessage=M,R=function(){qe.postMessage(null)}}else R=function(){D(M,0)};function ze(ee){x=ee,he||(he=!0,R())}function Pe(ee,ge){S=D(function(){ee(n.unstable_now())},ge)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ee){ee.callback=null},n.unstable_continueExecution=function(){B||L||(B=!0,ze(Ae))},n.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<ee?Math.floor(1e3/ee):5},n.unstable_getCurrentPriorityLevel=function(){return I},n.unstable_getFirstCallbackNode=function(){return t(m)},n.unstable_next=function(ee){switch(I){case 1:case 2:case 3:var ge=3;break;default:ge=I}var ae=I;I=ge;try{return ee()}finally{I=ae}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ee,ge){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var ae=I;I=ee;try{return ge()}finally{I=ae}},n.unstable_scheduleCallback=function(ee,ge,ae){var P=n.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?P+ae:P):ae=P,ee){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=ae+z,ee={id:v++,callback:ge,priorityLevel:ee,startTime:ae,expirationTime:z,sortIndex:-1},ae>P?(ee.sortIndex=ae,e(y,ee),t(m)===null&&ee===t(y)&&(q?(ie(S),S=-1):q=!0,Pe(se,ae-P))):(ee.sortIndex=z,e(m,ee),B||L||(B=!0,ze(Ae))),ee},n.unstable_shouldYield=V,n.unstable_wrapCallback=function(ee){var ge=I;return function(){var ae=I;I=ge;try{return ee.apply(this,arguments)}finally{I=ae}}}})(Xd)),Xd}var my;function UT(){return my||(my=1,Qd.exports=MT()),Qd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gy;function FT(){if(gy)return rn;gy=1;var n=Kf(),e=UT();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){h(r,s),h(r+"Capture",s)}function h(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},T={};function I(r){return m.call(T,r)?!0:m.call(v,r)?!1:y.test(r)?T[r]=!0:(v[r]=!0,!1)}function L(r,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function B(r,s,a,c){if(s===null||typeof s>"u"||L(r,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function q(r,s,a,c,d,g,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=w}var D={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){D[r]=new q(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];D[s]=new q(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){D[r]=new q(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){D[r]=new q(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){D[r]=new q(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){D[r]=new q(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){D[r]=new q(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){D[r]=new q(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){D[r]=new q(r,5,!1,r.toLowerCase(),null,!1,!1)});var ie=/[\-:]([a-z])/g;function te(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(ie,te);D[s]=new q(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(ie,te);D[s]=new q(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(ie,te);D[s]=new q(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){D[r]=new q(r,1,!1,r.toLowerCase(),null,!1,!1)}),D.xlinkHref=new q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){D[r]=new q(r,1,!1,r.toLowerCase(),null,!0,!0)});function J(r,s,a,c){var d=D.hasOwnProperty(s)?D[s]:null;(d!==null?d.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(B(s,a,d,c)&&(a=null),c||d===null?I(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):d.mustUseProperty?r[d.propertyName]=a===null?d.type===3?!1:"":a:(s=d.attributeName,c=d.attributeNamespace,a===null?r.removeAttribute(s):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?r.setAttributeNS(c,s,a):r.setAttribute(s,a))))}var se=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ae=Symbol.for("react.element"),he=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),V=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),$e=Symbol.for("react.suspense_list"),qe=Symbol.for("react.memo"),ze=Symbol.for("react.lazy"),Pe=Symbol.for("react.offscreen"),ee=Symbol.iterator;function ge(r){return r===null||typeof r!="object"?null:(r=ee&&r[ee]||r["@@iterator"],typeof r=="function"?r:null)}var ae=Object.assign,P;function z(r){if(P===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);P=s&&s[1]||""}return`
`+P+r}var re=!1;function de(r,s){if(!r||re)return"";re=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch($){var c=$}Reflect.construct(r,[],s)}else{try{s.call()}catch($){c=$}r.call(s.prototype)}else{try{throw Error()}catch($){c=$}r()}}catch($){if($&&c&&typeof $.stack=="string"){for(var d=$.stack.split(`
`),g=c.stack.split(`
`),w=d.length-1,A=g.length-1;1<=w&&0<=A&&d[w]!==g[A];)A--;for(;1<=w&&0<=A;w--,A--)if(d[w]!==g[A]){if(w!==1||A!==1)do if(w--,A--,0>A||d[w]!==g[A]){var N=`
`+d[w].replace(" at new "," at ");return r.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",r.displayName)),N}while(1<=w&&0<=A);break}}}finally{re=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?z(r):""}function we(r){switch(r.tag){case 5:return z(r.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return r=de(r.type,!1),r;case 11:return r=de(r.type.render,!1),r;case 1:return r=de(r.type,!0),r;default:return""}}function ke(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case x:return"Fragment";case he:return"Portal";case C:return"Profiler";case S:return"StrictMode";case R:return"Suspense";case $e:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case V:return(r.displayName||"Context")+".Consumer";case k:return(r._context.displayName||"Context")+".Provider";case M:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case qe:return s=r.displayName||null,s!==null?s:ke(r.type)||"Memo";case ze:s=r._payload,r=r._init;try{return ke(r(s))}catch{}}return null}function be(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ke(s);case 8:return s===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Fe(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function We(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function St(r){var s=We(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),c=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,g=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return d.call(this)},set:function(w){c=""+w,g.call(this,w)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function Tr(r){r._valueTracker||(r._valueTracker=St(r))}function Us(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return r&&(c=We(r)?r.checked?"true":"false":r.value),r=c,r!==a?(s.setValue(r),!0):!1}function Jr(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Gi(r,s){var a=s.checked;return ae({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function Fs(r,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=Fe(s.value!=null?s.value:a),r._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function ra(r,s){s=s.checked,s!=null&&J(r,"checked",s,!1)}function ia(r,s){ra(r,s);var a=Fe(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(c==="submit"||c==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?js(r,s.type,a):s.hasOwnProperty("defaultValue")&&js(r,s.type,Fe(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function jl(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function js(r,s,a){(s!=="number"||Jr(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var Ir=Array.isArray;function Sr(r,s,a,c){if(r=r.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<r.length;a++)d=s.hasOwnProperty("$"+r[a].value),r[a].selected!==d&&(r[a].selected=d),d&&c&&(r[a].defaultSelected=!0)}else{for(a=""+Fe(a),s=null,d=0;d<r.length;d++){if(r[d].value===a){r[d].selected=!0,c&&(r[d].defaultSelected=!0);return}s!==null||r[d].disabled||(s=r[d])}s!==null&&(s.selected=!0)}}function sa(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Bs(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(Ir(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:Fe(a)}}function zs(r,s){var a=Fe(s.value),c=Fe(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),c!=null&&(r.defaultValue=""+c)}function oa(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function _t(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vt(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?_t(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Ar,aa=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,d){MSApp.execUnsafeLocalFunction(function(){return r(s,a,c,d)})}:r})(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(Ar=Ar||document.createElement("div"),Ar.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Ar.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function Yr(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var Ki={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qi=["Webkit","ms","Moz","O"];Object.keys(Ki).forEach(function(r){Qi.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Ki[s]=Ki[r]})});function la(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Ki.hasOwnProperty(r)&&Ki[r]?(""+s).trim():s+"px"}function ua(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=la(a,s[a],c);a==="float"&&(a="cssFloat"),c?r.setProperty(a,d):r[a]=d}}var ca=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ha(r,s){if(s){if(ca[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function da(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xi=null;function $s(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var qs=null,vn=null,Zn=null;function Hs(r){if(r=La(r)){if(typeof qs!="function")throw Error(t(280));var s=r.stateNode;s&&(s=gu(s),qs(r.stateNode,r.type,s))}}function er(r){vn?Zn?Zn.push(r):Zn=[r]:vn=r}function fa(){if(vn){var r=vn,s=Zn;if(Zn=vn=null,Hs(r),s)for(r=0;r<s.length;r++)Hs(s[r])}}function Ji(r,s){return r(s)}function pa(){}var Rr=!1;function ma(r,s,a){if(Rr)return r(s,a);Rr=!0;try{return Ji(r,s,a)}finally{Rr=!1,(vn!==null||Zn!==null)&&(pa(),fa())}}function lt(r,s){var a=r.stateNode;if(a===null)return null;var c=gu(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Ws=!1;if(f)try{var On={};Object.defineProperty(On,"passive",{get:function(){Ws=!0}}),window.addEventListener("test",On,On),window.removeEventListener("test",On,On)}catch{Ws=!1}function Yi(r,s,a,c,d,g,w,A,N){var $=Array.prototype.slice.call(arguments,3);try{s.apply(a,$)}catch(X){this.onError(X)}}var Zi=!1,Gs=null,bn=!1,ga=null,wh={onError:function(r){Zi=!0,Gs=r}};function Ks(r,s,a,c,d,g,w,A,N){Zi=!1,Gs=null,Yi.apply(wh,arguments)}function Bl(r,s,a,c,d,g,w,A,N){if(Ks.apply(this,arguments),Zi){if(Zi){var $=Gs;Zi=!1,Gs=null}else throw Error(t(198));bn||(bn=!0,ga=$)}}function Vn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function es(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function Ln(r){if(Vn(r)!==r)throw Error(t(188))}function zl(r){var s=r.alternate;if(!s){if(s=Vn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,c=s;;){var d=a.return;if(d===null)break;var g=d.alternate;if(g===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===a)return Ln(d),r;if(g===c)return Ln(d),s;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=g;else{for(var w=!1,A=d.child;A;){if(A===a){w=!0,a=d,c=g;break}if(A===c){w=!0,c=d,a=g;break}A=A.sibling}if(!w){for(A=g.child;A;){if(A===a){w=!0,a=g,c=d;break}if(A===c){w=!0,c=g,a=d;break}A=A.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function ya(r){return r=zl(r),r!==null?Qs(r):null}function Qs(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Qs(r);if(s!==null)return s;r=r.sibling}return null}var Xs=e.unstable_scheduleCallback,_a=e.unstable_cancelCallback,$l=e.unstable_shouldYield,Eh=e.unstable_requestPaint,Ge=e.unstable_now,ql=e.unstable_getCurrentPriorityLevel,ts=e.unstable_ImmediatePriority,Zr=e.unstable_UserBlockingPriority,wn=e.unstable_NormalPriority,va=e.unstable_LowPriority,Hl=e.unstable_IdlePriority,ns=null,cn=null;function Wl(r){if(cn&&typeof cn.onCommitFiberRoot=="function")try{cn.onCommitFiberRoot(ns,r,void 0,(r.current.flags&128)===128)}catch{}}var Ht=Math.clz32?Math.clz32:Kl,wa=Math.log,Gl=Math.LN2;function Kl(r){return r>>>=0,r===0?32:31-(wa(r)/Gl|0)|0}var Js=64,Ys=4194304;function ei(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function rs(r,s){var a=r.pendingLanes;if(a===0)return 0;var c=0,d=r.suspendedLanes,g=r.pingedLanes,w=a&268435455;if(w!==0){var A=w&~d;A!==0?c=ei(A):(g&=w,g!==0&&(c=ei(g)))}else w=a&~d,w!==0?c=ei(w):g!==0&&(c=ei(g));if(c===0)return 0;if(s!==0&&s!==c&&(s&d)===0&&(d=c&-c,g=s&-s,d>=g||d===16&&(g&4194240)!==0))return s;if((c&4)!==0&&(c|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=c;0<s;)a=31-Ht(s),d=1<<a,c|=r[a],s&=~d;return c}function Th(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cr(r,s){for(var a=r.suspendedLanes,c=r.pingedLanes,d=r.expirationTimes,g=r.pendingLanes;0<g;){var w=31-Ht(g),A=1<<w,N=d[w];N===-1?((A&a)===0||(A&c)!==0)&&(d[w]=Th(A,s)):N<=s&&(r.expiredLanes|=A),g&=~A}}function hn(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function is(){var r=Js;return Js<<=1,(Js&4194240)===0&&(Js=64),r}function ti(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function ni(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-Ht(s),r[s]=a}function He(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var c=r.eventTimes;for(r=r.expirationTimes;0<a;){var d=31-Ht(a),g=1<<d;s[d]=0,c[d]=-1,r[d]=-1,a&=~g}}function ri(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var c=31-Ht(a),d=1<<c;d&s|r[c]&s&&(r[c]|=s),a&=~d}}var Oe=0;function ii(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Ql,Zs,Xl,Jl,Yl,Ea=!1,tr=[],Nt=null,Mn=null,Un=null,si=new Map,En=new Map,nr=[],Ih="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zl(r,s){switch(r){case"focusin":case"focusout":Nt=null;break;case"dragenter":case"dragleave":Mn=null;break;case"mouseover":case"mouseout":Un=null;break;case"pointerover":case"pointerout":si.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":En.delete(s.pointerId)}}function Xt(r,s,a,c,d,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[d]},s!==null&&(s=La(s),s!==null&&Zs(s)),r):(r.eventSystemFlags|=c,s=r.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),r)}function Sh(r,s,a,c,d){switch(s){case"focusin":return Nt=Xt(Nt,r,s,a,c,d),!0;case"dragenter":return Mn=Xt(Mn,r,s,a,c,d),!0;case"mouseover":return Un=Xt(Un,r,s,a,c,d),!0;case"pointerover":var g=d.pointerId;return si.set(g,Xt(si.get(g)||null,r,s,a,c,d)),!0;case"gotpointercapture":return g=d.pointerId,En.set(g,Xt(En.get(g)||null,r,s,a,c,d)),!0}return!1}function eu(r){var s=us(r.target);if(s!==null){var a=Vn(s);if(a!==null){if(s=a.tag,s===13){if(s=es(a),s!==null){r.blockedOn=s,Yl(r.priority,function(){Xl(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Pr(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=eo(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var c=new a.constructor(a.type,a);Xi=c,a.target.dispatchEvent(c),Xi=null}else return s=La(a),s!==null&&Zs(s),r.blockedOn=a,!1;s.shift()}return!0}function ss(r,s,a){Pr(r)&&a.delete(s)}function tu(){Ea=!1,Nt!==null&&Pr(Nt)&&(Nt=null),Mn!==null&&Pr(Mn)&&(Mn=null),Un!==null&&Pr(Un)&&(Un=null),si.forEach(ss),En.forEach(ss)}function Fn(r,s){r.blockedOn===s&&(r.blockedOn=null,Ea||(Ea=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,tu)))}function jn(r){function s(d){return Fn(d,r)}if(0<tr.length){Fn(tr[0],r);for(var a=1;a<tr.length;a++){var c=tr[a];c.blockedOn===r&&(c.blockedOn=null)}}for(Nt!==null&&Fn(Nt,r),Mn!==null&&Fn(Mn,r),Un!==null&&Fn(Un,r),si.forEach(s),En.forEach(s),a=0;a<nr.length;a++)c=nr[a],c.blockedOn===r&&(c.blockedOn=null);for(;0<nr.length&&(a=nr[0],a.blockedOn===null);)eu(a),a.blockedOn===null&&nr.shift()}var kr=se.ReactCurrentBatchConfig,oi=!0;function Ze(r,s,a,c){var d=Oe,g=kr.transition;kr.transition=null;try{Oe=1,Ta(r,s,a,c)}finally{Oe=d,kr.transition=g}}function Ah(r,s,a,c){var d=Oe,g=kr.transition;kr.transition=null;try{Oe=4,Ta(r,s,a,c)}finally{Oe=d,kr.transition=g}}function Ta(r,s,a,c){if(oi){var d=eo(r,s,a,c);if(d===null)Lh(r,s,c,os,a),Zl(r,c);else if(Sh(d,r,s,a,c))c.stopPropagation();else if(Zl(r,c),s&4&&-1<Ih.indexOf(r)){for(;d!==null;){var g=La(d);if(g!==null&&Ql(g),g=eo(r,s,a,c),g===null&&Lh(r,s,c,os,a),g===d)break;d=g}d!==null&&c.stopPropagation()}else Lh(r,s,c,null,a)}}var os=null;function eo(r,s,a,c){if(os=null,r=$s(c),r=us(r),r!==null)if(s=Vn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=es(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return os=r,null}function Ia(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ql()){case ts:return 1;case Zr:return 4;case wn:case va:return 16;case Hl:return 536870912;default:return 16}default:return 16}}var dn=null,to=null,Jt=null;function Sa(){if(Jt)return Jt;var r,s=to,a=s.length,c,d="value"in dn?dn.value:dn.textContent,g=d.length;for(r=0;r<a&&s[r]===d[r];r++);var w=a-r;for(c=1;c<=w&&s[a-c]===d[g-c];c++);return Jt=d.slice(r,1<c?1-c:void 0)}function no(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function rr(){return!0}function Aa(){return!1}function xt(r){function s(a,c,d,g,w){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var A in r)r.hasOwnProperty(A)&&(a=r[A],this[A]=a?a(g):g[A]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?rr:Aa,this.isPropagationStopped=Aa,this}return ae(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=rr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=rr)},persist:function(){},isPersistent:rr}),s}var Bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ro=xt(Bn),ir=ae({},Bn,{view:0,detail:0}),Rh=xt(ir),io,Nr,ai,as=ae({},ir,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sr,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ai&&(ai&&r.type==="mousemove"?(io=r.screenX-ai.screenX,Nr=r.screenY-ai.screenY):Nr=io=0,ai=r),io)},movementY:function(r){return"movementY"in r?r.movementY:Nr}}),so=xt(as),Ra=ae({},as,{dataTransfer:0}),nu=xt(Ra),oo=ae({},ir,{relatedTarget:0}),ao=xt(oo),ru=ae({},Bn,{animationName:0,elapsedTime:0,pseudoElement:0}),xr=xt(ru),iu=ae({},Bn,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),su=xt(iu),ou=ae({},Bn,{data:0}),Ca=xt(ou),lo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},au={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lu(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=au[r])?!!s[r]:!1}function sr(){return lu}var u=ae({},ir,{key:function(r){if(r.key){var s=lo[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=no(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Wt[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sr,charCode:function(r){return r.type==="keypress"?no(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?no(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),p=xt(u),_=ae({},as,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=xt(_),U=ae({},ir,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sr}),H=xt(U),ne=ae({},Bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Be=xt(ne),wt=ae({},as,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Ve=xt(wt),At=[9,13,27,32],ft=f&&"CompositionEvent"in window,Tn=null;f&&"documentMode"in document&&(Tn=document.documentMode);var fn=f&&"TextEvent"in window&&!Tn,ls=f&&(!ft||Tn&&8<Tn&&11>=Tn),uo=" ",im=!1;function sm(r,s){switch(r){case"keyup":return At.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function om(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var co=!1;function k0(r,s){switch(r){case"compositionend":return om(s);case"keypress":return s.which!==32?null:(im=!0,uo);case"textInput":return r=s.data,r===uo&&im?null:r;default:return null}}function N0(r,s){if(co)return r==="compositionend"||!ft&&sm(r,s)?(r=Sa(),Jt=to=dn=null,co=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return ls&&s.locale!=="ko"?null:s.data;default:return null}}var x0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function am(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!x0[r.type]:s==="textarea"}function lm(r,s,a,c){er(c),s=fu(s,"onChange"),0<s.length&&(a=new ro("onChange","change",null,a,c),r.push({event:a,listeners:s}))}var Pa=null,ka=null;function D0(r){Rm(r,0)}function uu(r){var s=go(r);if(Us(s))return r}function O0(r,s){if(r==="change")return s}var um=!1;if(f){var Ch;if(f){var Ph="oninput"in document;if(!Ph){var cm=document.createElement("div");cm.setAttribute("oninput","return;"),Ph=typeof cm.oninput=="function"}Ch=Ph}else Ch=!1;um=Ch&&(!document.documentMode||9<document.documentMode)}function hm(){Pa&&(Pa.detachEvent("onpropertychange",dm),ka=Pa=null)}function dm(r){if(r.propertyName==="value"&&uu(ka)){var s=[];lm(s,ka,r,$s(r)),ma(D0,s)}}function b0(r,s,a){r==="focusin"?(hm(),Pa=s,ka=a,Pa.attachEvent("onpropertychange",dm)):r==="focusout"&&hm()}function V0(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return uu(ka)}function L0(r,s){if(r==="click")return uu(s)}function M0(r,s){if(r==="input"||r==="change")return uu(s)}function U0(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var zn=typeof Object.is=="function"?Object.is:U0;function Na(r,s){if(zn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!m.call(s,d)||!zn(r[d],s[d]))return!1}return!0}function fm(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function pm(r,s){var a=fm(r);r=0;for(var c;a;){if(a.nodeType===3){if(c=r+a.textContent.length,r<=s&&c>=s)return{node:a,offset:s-r};r=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=fm(a)}}function mm(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?mm(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function gm(){for(var r=window,s=Jr();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=Jr(r.document)}return s}function kh(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function F0(r){var s=gm(),a=r.focusedElem,c=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&mm(a.ownerDocument.documentElement,a)){if(c!==null&&kh(a)){if(s=c.start,r=c.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var d=a.textContent.length,g=Math.min(c.start,d);c=c.end===void 0?g:Math.min(c.end,d),!r.extend&&g>c&&(d=c,c=g,g=d),d=pm(a,g);var w=pm(a,c);d&&w&&(r.rangeCount!==1||r.anchorNode!==d.node||r.anchorOffset!==d.offset||r.focusNode!==w.node||r.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),r.removeAllRanges(),g>c?(r.addRange(s),r.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var j0=f&&"documentMode"in document&&11>=document.documentMode,ho=null,Nh=null,xa=null,xh=!1;function ym(r,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;xh||ho==null||ho!==Jr(c)||(c=ho,"selectionStart"in c&&kh(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),xa&&Na(xa,c)||(xa=c,c=fu(Nh,"onSelect"),0<c.length&&(s=new ro("onSelect","select",null,s,a),r.push({event:s,listeners:c}),s.target=ho)))}function cu(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var fo={animationend:cu("Animation","AnimationEnd"),animationiteration:cu("Animation","AnimationIteration"),animationstart:cu("Animation","AnimationStart"),transitionend:cu("Transition","TransitionEnd")},Dh={},_m={};f&&(_m=document.createElement("div").style,"AnimationEvent"in window||(delete fo.animationend.animation,delete fo.animationiteration.animation,delete fo.animationstart.animation),"TransitionEvent"in window||delete fo.transitionend.transition);function hu(r){if(Dh[r])return Dh[r];if(!fo[r])return r;var s=fo[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in _m)return Dh[r]=s[a];return r}var vm=hu("animationend"),wm=hu("animationiteration"),Em=hu("animationstart"),Tm=hu("transitionend"),Im=new Map,Sm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function li(r,s){Im.set(r,s),l(s,[r])}for(var Oh=0;Oh<Sm.length;Oh++){var bh=Sm[Oh],B0=bh.toLowerCase(),z0=bh[0].toUpperCase()+bh.slice(1);li(B0,"on"+z0)}li(vm,"onAnimationEnd"),li(wm,"onAnimationIteration"),li(Em,"onAnimationStart"),li("dblclick","onDoubleClick"),li("focusin","onFocus"),li("focusout","onBlur"),li(Tm,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Da));function Am(r,s,a){var c=r.type||"unknown-event";r.currentTarget=a,Bl(c,s,void 0,r),r.currentTarget=null}function Rm(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var c=r[a],d=c.event;c=c.listeners;e:{var g=void 0;if(s)for(var w=c.length-1;0<=w;w--){var A=c[w],N=A.instance,$=A.currentTarget;if(A=A.listener,N!==g&&d.isPropagationStopped())break e;Am(d,A,$),g=N}else for(w=0;w<c.length;w++){if(A=c[w],N=A.instance,$=A.currentTarget,A=A.listener,N!==g&&d.isPropagationStopped())break e;Am(d,A,$),g=N}}}if(bn)throw r=ga,bn=!1,ga=null,r}function Xe(r,s){var a=s[zh];a===void 0&&(a=s[zh]=new Set);var c=r+"__bubble";a.has(c)||(Cm(s,r,2,!1),a.add(c))}function Vh(r,s,a){var c=0;s&&(c|=4),Cm(a,r,c,s)}var du="_reactListening"+Math.random().toString(36).slice(2);function Oa(r){if(!r[du]){r[du]=!0,i.forEach(function(a){a!=="selectionchange"&&($0.has(a)||Vh(a,!1,r),Vh(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[du]||(s[du]=!0,Vh("selectionchange",!1,s))}}function Cm(r,s,a,c){switch(Ia(s)){case 1:var d=Ze;break;case 4:d=Ah;break;default:d=Ta}a=d.bind(null,s,a,r),d=void 0,!Ws||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?r.addEventListener(s,a,{capture:!0,passive:d}):r.addEventListener(s,a,!0):d!==void 0?r.addEventListener(s,a,{passive:d}):r.addEventListener(s,a,!1)}function Lh(r,s,a,c,d){var g=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var A=c.stateNode.containerInfo;if(A===d||A.nodeType===8&&A.parentNode===d)break;if(w===4)for(w=c.return;w!==null;){var N=w.tag;if((N===3||N===4)&&(N=w.stateNode.containerInfo,N===d||N.nodeType===8&&N.parentNode===d))return;w=w.return}for(;A!==null;){if(w=us(A),w===null)return;if(N=w.tag,N===5||N===6){c=g=w;continue e}A=A.parentNode}}c=c.return}ma(function(){var $=g,X=$s(a),Y=[];e:{var Q=Im.get(r);if(Q!==void 0){var le=ro,fe=r;switch(r){case"keypress":if(no(a)===0)break e;case"keydown":case"keyup":le=p;break;case"focusin":fe="focus",le=ao;break;case"focusout":fe="blur",le=ao;break;case"beforeblur":case"afterblur":le=ao;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=so;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=nu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=H;break;case vm:case wm:case Em:le=xr;break;case Tm:le=Be;break;case"scroll":le=Rh;break;case"wheel":le=Ve;break;case"copy":case"cut":case"paste":le=su;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=E}var pe=(s&4)!==0,ut=!pe&&r==="scroll",F=pe?Q!==null?Q+"Capture":null:Q;pe=[];for(var O=$,j;O!==null;){j=O;var Z=j.stateNode;if(j.tag===5&&Z!==null&&(j=Z,F!==null&&(Z=lt(O,F),Z!=null&&pe.push(ba(O,Z,j)))),ut)break;O=O.return}0<pe.length&&(Q=new le(Q,fe,null,a,X),Y.push({event:Q,listeners:pe}))}}if((s&7)===0){e:{if(Q=r==="mouseover"||r==="pointerover",le=r==="mouseout"||r==="pointerout",Q&&a!==Xi&&(fe=a.relatedTarget||a.fromElement)&&(us(fe)||fe[Dr]))break e;if((le||Q)&&(Q=X.window===X?X:(Q=X.ownerDocument)?Q.defaultView||Q.parentWindow:window,le?(fe=a.relatedTarget||a.toElement,le=$,fe=fe?us(fe):null,fe!==null&&(ut=Vn(fe),fe!==ut||fe.tag!==5&&fe.tag!==6)&&(fe=null)):(le=null,fe=$),le!==fe)){if(pe=so,Z="onMouseLeave",F="onMouseEnter",O="mouse",(r==="pointerout"||r==="pointerover")&&(pe=E,Z="onPointerLeave",F="onPointerEnter",O="pointer"),ut=le==null?Q:go(le),j=fe==null?Q:go(fe),Q=new pe(Z,O+"leave",le,a,X),Q.target=ut,Q.relatedTarget=j,Z=null,us(X)===$&&(pe=new pe(F,O+"enter",fe,a,X),pe.target=j,pe.relatedTarget=ut,Z=pe),ut=Z,le&&fe)t:{for(pe=le,F=fe,O=0,j=pe;j;j=po(j))O++;for(j=0,Z=F;Z;Z=po(Z))j++;for(;0<O-j;)pe=po(pe),O--;for(;0<j-O;)F=po(F),j--;for(;O--;){if(pe===F||F!==null&&pe===F.alternate)break t;pe=po(pe),F=po(F)}pe=null}else pe=null;le!==null&&Pm(Y,Q,le,pe,!1),fe!==null&&ut!==null&&Pm(Y,ut,fe,pe,!0)}}e:{if(Q=$?go($):window,le=Q.nodeName&&Q.nodeName.toLowerCase(),le==="select"||le==="input"&&Q.type==="file")var me=O0;else if(am(Q))if(um)me=M0;else{me=V0;var _e=b0}else(le=Q.nodeName)&&le.toLowerCase()==="input"&&(Q.type==="checkbox"||Q.type==="radio")&&(me=L0);if(me&&(me=me(r,$))){lm(Y,me,a,X);break e}_e&&_e(r,Q,$),r==="focusout"&&(_e=Q._wrapperState)&&_e.controlled&&Q.type==="number"&&js(Q,"number",Q.value)}switch(_e=$?go($):window,r){case"focusin":(am(_e)||_e.contentEditable==="true")&&(ho=_e,Nh=$,xa=null);break;case"focusout":xa=Nh=ho=null;break;case"mousedown":xh=!0;break;case"contextmenu":case"mouseup":case"dragend":xh=!1,ym(Y,a,X);break;case"selectionchange":if(j0)break;case"keydown":case"keyup":ym(Y,a,X)}var ve;if(ft)e:{switch(r){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else co?sm(r,a)&&(Te="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(Te="onCompositionStart");Te&&(ls&&a.locale!=="ko"&&(co||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&co&&(ve=Sa()):(dn=X,to="value"in dn?dn.value:dn.textContent,co=!0)),_e=fu($,Te),0<_e.length&&(Te=new Ca(Te,r,null,a,X),Y.push({event:Te,listeners:_e}),ve?Te.data=ve:(ve=om(a),ve!==null&&(Te.data=ve)))),(ve=fn?k0(r,a):N0(r,a))&&($=fu($,"onBeforeInput"),0<$.length&&(X=new Ca("onBeforeInput","beforeinput",null,a,X),Y.push({event:X,listeners:$}),X.data=ve))}Rm(Y,s)})}function ba(r,s,a){return{instance:r,listener:s,currentTarget:a}}function fu(r,s){for(var a=s+"Capture",c=[];r!==null;){var d=r,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=lt(r,a),g!=null&&c.unshift(ba(r,g,d)),g=lt(r,s),g!=null&&c.push(ba(r,g,d))),r=r.return}return c}function po(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Pm(r,s,a,c,d){for(var g=s._reactName,w=[];a!==null&&a!==c;){var A=a,N=A.alternate,$=A.stateNode;if(N!==null&&N===c)break;A.tag===5&&$!==null&&(A=$,d?(N=lt(a,g),N!=null&&w.unshift(ba(a,N,A))):d||(N=lt(a,g),N!=null&&w.push(ba(a,N,A)))),a=a.return}w.length!==0&&r.push({event:s,listeners:w})}var q0=/\r\n?/g,H0=/\u0000|\uFFFD/g;function km(r){return(typeof r=="string"?r:""+r).replace(q0,`
`).replace(H0,"")}function pu(r,s,a){if(s=km(s),km(r)!==s&&a)throw Error(t(425))}function mu(){}var Mh=null,Uh=null;function Fh(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var jh=typeof setTimeout=="function"?setTimeout:void 0,W0=typeof clearTimeout=="function"?clearTimeout:void 0,Nm=typeof Promise=="function"?Promise:void 0,G0=typeof queueMicrotask=="function"?queueMicrotask:typeof Nm<"u"?function(r){return Nm.resolve(null).then(r).catch(K0)}:jh;function K0(r){setTimeout(function(){throw r})}function Bh(r,s){var a=s,c=0;do{var d=a.nextSibling;if(r.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){r.removeChild(d),jn(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);jn(s)}function ui(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function xm(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var mo=Math.random().toString(36).slice(2),or="__reactFiber$"+mo,Va="__reactProps$"+mo,Dr="__reactContainer$"+mo,zh="__reactEvents$"+mo,Q0="__reactListeners$"+mo,X0="__reactHandles$"+mo;function us(r){var s=r[or];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Dr]||a[or]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=xm(r);r!==null;){if(a=r[or])return a;r=xm(r)}return s}r=a,a=r.parentNode}return null}function La(r){return r=r[or]||r[Dr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function go(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function gu(r){return r[Va]||null}var $h=[],yo=-1;function ci(r){return{current:r}}function Je(r){0>yo||(r.current=$h[yo],$h[yo]=null,yo--)}function Ke(r,s){yo++,$h[yo]=r.current,r.current=s}var hi={},Mt=ci(hi),Yt=ci(!1),cs=hi;function _o(r,s){var a=r.type.contextTypes;if(!a)return hi;var c=r.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in a)d[g]=s[g];return c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=d),d}function Zt(r){return r=r.childContextTypes,r!=null}function yu(){Je(Yt),Je(Mt)}function Dm(r,s,a){if(Mt.current!==hi)throw Error(t(168));Ke(Mt,s),Ke(Yt,a)}function Om(r,s,a){var c=r.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in s))throw Error(t(108,be(r)||"Unknown",d));return ae({},a,c)}function _u(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||hi,cs=Mt.current,Ke(Mt,r),Ke(Yt,Yt.current),!0}function bm(r,s,a){var c=r.stateNode;if(!c)throw Error(t(169));a?(r=Om(r,s,cs),c.__reactInternalMemoizedMergedChildContext=r,Je(Yt),Je(Mt),Ke(Mt,r)):Je(Yt),Ke(Yt,a)}var Or=null,vu=!1,qh=!1;function Vm(r){Or===null?Or=[r]:Or.push(r)}function J0(r){vu=!0,Vm(r)}function di(){if(!qh&&Or!==null){qh=!0;var r=0,s=Oe;try{var a=Or;for(Oe=1;r<a.length;r++){var c=a[r];do c=c(!0);while(c!==null)}Or=null,vu=!1}catch(d){throw Or!==null&&(Or=Or.slice(r+1)),Xs(ts,di),d}finally{Oe=s,qh=!1}}return null}var vo=[],wo=0,wu=null,Eu=0,In=[],Sn=0,hs=null,br=1,Vr="";function ds(r,s){vo[wo++]=Eu,vo[wo++]=wu,wu=r,Eu=s}function Lm(r,s,a){In[Sn++]=br,In[Sn++]=Vr,In[Sn++]=hs,hs=r;var c=br;r=Vr;var d=32-Ht(c)-1;c&=~(1<<d),a+=1;var g=32-Ht(s)+d;if(30<g){var w=d-d%5;g=(c&(1<<w)-1).toString(32),c>>=w,d-=w,br=1<<32-Ht(s)+d|a<<d|c,Vr=g+r}else br=1<<g|a<<d|c,Vr=r}function Hh(r){r.return!==null&&(ds(r,1),Lm(r,1,0))}function Wh(r){for(;r===wu;)wu=vo[--wo],vo[wo]=null,Eu=vo[--wo],vo[wo]=null;for(;r===hs;)hs=In[--Sn],In[Sn]=null,Vr=In[--Sn],In[Sn]=null,br=In[--Sn],In[Sn]=null}var pn=null,mn=null,et=!1,$n=null;function Mm(r,s){var a=Pn(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function Um(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,pn=r,mn=ui(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,pn=r,mn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=hs!==null?{id:br,overflow:Vr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=Pn(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,pn=r,mn=null,!0):!1;default:return!1}}function Gh(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Kh(r){if(et){var s=mn;if(s){var a=s;if(!Um(r,s)){if(Gh(r))throw Error(t(418));s=ui(a.nextSibling);var c=pn;s&&Um(r,s)?Mm(c,a):(r.flags=r.flags&-4097|2,et=!1,pn=r)}}else{if(Gh(r))throw Error(t(418));r.flags=r.flags&-4097|2,et=!1,pn=r}}}function Fm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;pn=r}function Tu(r){if(r!==pn)return!1;if(!et)return Fm(r),et=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Fh(r.type,r.memoizedProps)),s&&(s=mn)){if(Gh(r))throw jm(),Error(t(418));for(;s;)Mm(r,s),s=ui(s.nextSibling)}if(Fm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){mn=ui(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}mn=null}}else mn=pn?ui(r.stateNode.nextSibling):null;return!0}function jm(){for(var r=mn;r;)r=ui(r.nextSibling)}function Eo(){mn=pn=null,et=!1}function Qh(r){$n===null?$n=[r]:$n.push(r)}var Y0=se.ReactCurrentBatchConfig;function Ma(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,r));var d=c,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(w){var A=d.refs;w===null?delete A[g]:A[g]=w},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function Iu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function Bm(r){var s=r._init;return s(r._payload)}function zm(r){function s(F,O){if(r){var j=F.deletions;j===null?(F.deletions=[O],F.flags|=16):j.push(O)}}function a(F,O){if(!r)return null;for(;O!==null;)s(F,O),O=O.sibling;return null}function c(F,O){for(F=new Map;O!==null;)O.key!==null?F.set(O.key,O):F.set(O.index,O),O=O.sibling;return F}function d(F,O){return F=wi(F,O),F.index=0,F.sibling=null,F}function g(F,O,j){return F.index=j,r?(j=F.alternate,j!==null?(j=j.index,j<O?(F.flags|=2,O):j):(F.flags|=2,O)):(F.flags|=1048576,O)}function w(F){return r&&F.alternate===null&&(F.flags|=2),F}function A(F,O,j,Z){return O===null||O.tag!==6?(O=jd(j,F.mode,Z),O.return=F,O):(O=d(O,j),O.return=F,O)}function N(F,O,j,Z){var me=j.type;return me===x?X(F,O,j.props.children,Z,j.key):O!==null&&(O.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===ze&&Bm(me)===O.type)?(Z=d(O,j.props),Z.ref=Ma(F,O,j),Z.return=F,Z):(Z=Gu(j.type,j.key,j.props,null,F.mode,Z),Z.ref=Ma(F,O,j),Z.return=F,Z)}function $(F,O,j,Z){return O===null||O.tag!==4||O.stateNode.containerInfo!==j.containerInfo||O.stateNode.implementation!==j.implementation?(O=Bd(j,F.mode,Z),O.return=F,O):(O=d(O,j.children||[]),O.return=F,O)}function X(F,O,j,Z,me){return O===null||O.tag!==7?(O=ws(j,F.mode,Z,me),O.return=F,O):(O=d(O,j),O.return=F,O)}function Y(F,O,j){if(typeof O=="string"&&O!==""||typeof O=="number")return O=jd(""+O,F.mode,j),O.return=F,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Ae:return j=Gu(O.type,O.key,O.props,null,F.mode,j),j.ref=Ma(F,null,O),j.return=F,j;case he:return O=Bd(O,F.mode,j),O.return=F,O;case ze:var Z=O._init;return Y(F,Z(O._payload),j)}if(Ir(O)||ge(O))return O=ws(O,F.mode,j,null),O.return=F,O;Iu(F,O)}return null}function Q(F,O,j,Z){var me=O!==null?O.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return me!==null?null:A(F,O,""+j,Z);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Ae:return j.key===me?N(F,O,j,Z):null;case he:return j.key===me?$(F,O,j,Z):null;case ze:return me=j._init,Q(F,O,me(j._payload),Z)}if(Ir(j)||ge(j))return me!==null?null:X(F,O,j,Z,null);Iu(F,j)}return null}function le(F,O,j,Z,me){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return F=F.get(j)||null,A(O,F,""+Z,me);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case Ae:return F=F.get(Z.key===null?j:Z.key)||null,N(O,F,Z,me);case he:return F=F.get(Z.key===null?j:Z.key)||null,$(O,F,Z,me);case ze:var _e=Z._init;return le(F,O,j,_e(Z._payload),me)}if(Ir(Z)||ge(Z))return F=F.get(j)||null,X(O,F,Z,me,null);Iu(O,Z)}return null}function fe(F,O,j,Z){for(var me=null,_e=null,ve=O,Te=O=0,Pt=null;ve!==null&&Te<j.length;Te++){ve.index>Te?(Pt=ve,ve=null):Pt=ve.sibling;var Ue=Q(F,ve,j[Te],Z);if(Ue===null){ve===null&&(ve=Pt);break}r&&ve&&Ue.alternate===null&&s(F,ve),O=g(Ue,O,Te),_e===null?me=Ue:_e.sibling=Ue,_e=Ue,ve=Pt}if(Te===j.length)return a(F,ve),et&&ds(F,Te),me;if(ve===null){for(;Te<j.length;Te++)ve=Y(F,j[Te],Z),ve!==null&&(O=g(ve,O,Te),_e===null?me=ve:_e.sibling=ve,_e=ve);return et&&ds(F,Te),me}for(ve=c(F,ve);Te<j.length;Te++)Pt=le(ve,F,Te,j[Te],Z),Pt!==null&&(r&&Pt.alternate!==null&&ve.delete(Pt.key===null?Te:Pt.key),O=g(Pt,O,Te),_e===null?me=Pt:_e.sibling=Pt,_e=Pt);return r&&ve.forEach(function(Ei){return s(F,Ei)}),et&&ds(F,Te),me}function pe(F,O,j,Z){var me=ge(j);if(typeof me!="function")throw Error(t(150));if(j=me.call(j),j==null)throw Error(t(151));for(var _e=me=null,ve=O,Te=O=0,Pt=null,Ue=j.next();ve!==null&&!Ue.done;Te++,Ue=j.next()){ve.index>Te?(Pt=ve,ve=null):Pt=ve.sibling;var Ei=Q(F,ve,Ue.value,Z);if(Ei===null){ve===null&&(ve=Pt);break}r&&ve&&Ei.alternate===null&&s(F,ve),O=g(Ei,O,Te),_e===null?me=Ei:_e.sibling=Ei,_e=Ei,ve=Pt}if(Ue.done)return a(F,ve),et&&ds(F,Te),me;if(ve===null){for(;!Ue.done;Te++,Ue=j.next())Ue=Y(F,Ue.value,Z),Ue!==null&&(O=g(Ue,O,Te),_e===null?me=Ue:_e.sibling=Ue,_e=Ue);return et&&ds(F,Te),me}for(ve=c(F,ve);!Ue.done;Te++,Ue=j.next())Ue=le(ve,F,Te,Ue.value,Z),Ue!==null&&(r&&Ue.alternate!==null&&ve.delete(Ue.key===null?Te:Ue.key),O=g(Ue,O,Te),_e===null?me=Ue:_e.sibling=Ue,_e=Ue);return r&&ve.forEach(function(xT){return s(F,xT)}),et&&ds(F,Te),me}function ut(F,O,j,Z){if(typeof j=="object"&&j!==null&&j.type===x&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case Ae:e:{for(var me=j.key,_e=O;_e!==null;){if(_e.key===me){if(me=j.type,me===x){if(_e.tag===7){a(F,_e.sibling),O=d(_e,j.props.children),O.return=F,F=O;break e}}else if(_e.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===ze&&Bm(me)===_e.type){a(F,_e.sibling),O=d(_e,j.props),O.ref=Ma(F,_e,j),O.return=F,F=O;break e}a(F,_e);break}else s(F,_e);_e=_e.sibling}j.type===x?(O=ws(j.props.children,F.mode,Z,j.key),O.return=F,F=O):(Z=Gu(j.type,j.key,j.props,null,F.mode,Z),Z.ref=Ma(F,O,j),Z.return=F,F=Z)}return w(F);case he:e:{for(_e=j.key;O!==null;){if(O.key===_e)if(O.tag===4&&O.stateNode.containerInfo===j.containerInfo&&O.stateNode.implementation===j.implementation){a(F,O.sibling),O=d(O,j.children||[]),O.return=F,F=O;break e}else{a(F,O);break}else s(F,O);O=O.sibling}O=Bd(j,F.mode,Z),O.return=F,F=O}return w(F);case ze:return _e=j._init,ut(F,O,_e(j._payload),Z)}if(Ir(j))return fe(F,O,j,Z);if(ge(j))return pe(F,O,j,Z);Iu(F,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,O!==null&&O.tag===6?(a(F,O.sibling),O=d(O,j),O.return=F,F=O):(a(F,O),O=jd(j,F.mode,Z),O.return=F,F=O),w(F)):a(F,O)}return ut}var To=zm(!0),$m=zm(!1),Su=ci(null),Au=null,Io=null,Xh=null;function Jh(){Xh=Io=Au=null}function Yh(r){var s=Su.current;Je(Su),r._currentValue=s}function Zh(r,s,a){for(;r!==null;){var c=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),r===a)break;r=r.return}}function So(r,s){Au=r,Xh=Io=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(en=!0),r.firstContext=null)}function An(r){var s=r._currentValue;if(Xh!==r)if(r={context:r,memoizedValue:s,next:null},Io===null){if(Au===null)throw Error(t(308));Io=r,Au.dependencies={lanes:0,firstContext:r}}else Io=Io.next=r;return s}var fs=null;function ed(r){fs===null?fs=[r]:fs.push(r)}function qm(r,s,a,c){var d=s.interleaved;return d===null?(a.next=a,ed(s)):(a.next=d.next,d.next=a),s.interleaved=a,Lr(r,c)}function Lr(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var fi=!1;function td(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hm(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Mr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function pi(r,s,a){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,(Me&2)!==0){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,Lr(r,a)}return d=c.interleaved,d===null?(s.next=s,ed(c)):(s.next=d.next,d.next=s),c.interleaved=s,Lr(r,a)}function Ru(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,ri(r,a)}}function Wm(r,s){var a=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?d=g=w:g=g.next=w,a=a.next}while(a!==null);g===null?d=g=s:g=g.next=s}else d=g=s;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:c.shared,effects:c.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function Cu(r,s,a,c){var d=r.updateQueue;fi=!1;var g=d.firstBaseUpdate,w=d.lastBaseUpdate,A=d.shared.pending;if(A!==null){d.shared.pending=null;var N=A,$=N.next;N.next=null,w===null?g=$:w.next=$,w=N;var X=r.alternate;X!==null&&(X=X.updateQueue,A=X.lastBaseUpdate,A!==w&&(A===null?X.firstBaseUpdate=$:A.next=$,X.lastBaseUpdate=N))}if(g!==null){var Y=d.baseState;w=0,X=$=N=null,A=g;do{var Q=A.lane,le=A.eventTime;if((c&Q)===Q){X!==null&&(X=X.next={eventTime:le,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var fe=r,pe=A;switch(Q=s,le=a,pe.tag){case 1:if(fe=pe.payload,typeof fe=="function"){Y=fe.call(le,Y,Q);break e}Y=fe;break e;case 3:fe.flags=fe.flags&-65537|128;case 0:if(fe=pe.payload,Q=typeof fe=="function"?fe.call(le,Y,Q):fe,Q==null)break e;Y=ae({},Y,Q);break e;case 2:fi=!0}}A.callback!==null&&A.lane!==0&&(r.flags|=64,Q=d.effects,Q===null?d.effects=[A]:Q.push(A))}else le={eventTime:le,lane:Q,tag:A.tag,payload:A.payload,callback:A.callback,next:null},X===null?($=X=le,N=Y):X=X.next=le,w|=Q;if(A=A.next,A===null){if(A=d.shared.pending,A===null)break;Q=A,A=Q.next,Q.next=null,d.lastBaseUpdate=Q,d.shared.pending=null}}while(!0);if(X===null&&(N=Y),d.baseState=N,d.firstBaseUpdate=$,d.lastBaseUpdate=X,s=d.shared.interleaved,s!==null){d=s;do w|=d.lane,d=d.next;while(d!==s)}else g===null&&(d.shared.lanes=0);gs|=w,r.lanes=w,r.memoizedState=Y}}function Gm(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var c=r[s],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Ua={},ar=ci(Ua),Fa=ci(Ua),ja=ci(Ua);function ps(r){if(r===Ua)throw Error(t(174));return r}function nd(r,s){switch(Ke(ja,s),Ke(Fa,r),Ke(ar,Ua),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:vt(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=vt(s,r)}Je(ar),Ke(ar,s)}function Ao(){Je(ar),Je(Fa),Je(ja)}function Km(r){ps(ja.current);var s=ps(ar.current),a=vt(s,r.type);s!==a&&(Ke(Fa,r),Ke(ar,a))}function rd(r){Fa.current===r&&(Je(ar),Je(Fa))}var nt=ci(0);function Pu(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var id=[];function sd(){for(var r=0;r<id.length;r++)id[r]._workInProgressVersionPrimary=null;id.length=0}var ku=se.ReactCurrentDispatcher,od=se.ReactCurrentBatchConfig,ms=0,rt=null,Et=null,Rt=null,Nu=!1,Ba=!1,za=0,Z0=0;function Ut(){throw Error(t(321))}function ad(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!zn(r[a],s[a]))return!1;return!0}function ld(r,s,a,c,d,g){if(ms=g,rt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,ku.current=r===null||r.memoizedState===null?rT:iT,r=a(c,d),Ba){g=0;do{if(Ba=!1,za=0,25<=g)throw Error(t(301));g+=1,Rt=Et=null,s.updateQueue=null,ku.current=sT,r=a(c,d)}while(Ba)}if(ku.current=Ou,s=Et!==null&&Et.next!==null,ms=0,Rt=Et=rt=null,Nu=!1,s)throw Error(t(300));return r}function ud(){var r=za!==0;return za=0,r}function lr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?rt.memoizedState=Rt=r:Rt=Rt.next=r,Rt}function Rn(){if(Et===null){var r=rt.alternate;r=r!==null?r.memoizedState:null}else r=Et.next;var s=Rt===null?rt.memoizedState:Rt.next;if(s!==null)Rt=s,Et=r;else{if(r===null)throw Error(t(310));Et=r,r={memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null},Rt===null?rt.memoizedState=Rt=r:Rt=Rt.next=r}return Rt}function $a(r,s){return typeof s=="function"?s(r):s}function cd(r){var s=Rn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=Et,d=c.baseQueue,g=a.pending;if(g!==null){if(d!==null){var w=d.next;d.next=g.next,g.next=w}c.baseQueue=d=g,a.pending=null}if(d!==null){g=d.next,c=c.baseState;var A=w=null,N=null,$=g;do{var X=$.lane;if((ms&X)===X)N!==null&&(N=N.next={lane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),c=$.hasEagerState?$.eagerState:r(c,$.action);else{var Y={lane:X,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null};N===null?(A=N=Y,w=c):N=N.next=Y,rt.lanes|=X,gs|=X}$=$.next}while($!==null&&$!==g);N===null?w=c:N.next=A,zn(c,s.memoizedState)||(en=!0),s.memoizedState=c,s.baseState=w,s.baseQueue=N,a.lastRenderedState=c}if(r=a.interleaved,r!==null){d=r;do g=d.lane,rt.lanes|=g,gs|=g,d=d.next;while(d!==r)}else d===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function hd(r){var s=Rn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=a.dispatch,d=a.pending,g=s.memoizedState;if(d!==null){a.pending=null;var w=d=d.next;do g=r(g,w.action),w=w.next;while(w!==d);zn(g,s.memoizedState)||(en=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),a.lastRenderedState=g}return[g,c]}function Qm(){}function Xm(r,s){var a=rt,c=Rn(),d=s(),g=!zn(c.memoizedState,d);if(g&&(c.memoizedState=d,en=!0),c=c.queue,dd(Zm.bind(null,a,c,r),[r]),c.getSnapshot!==s||g||Rt!==null&&Rt.memoizedState.tag&1){if(a.flags|=2048,qa(9,Ym.bind(null,a,c,d,s),void 0,null),Ct===null)throw Error(t(349));(ms&30)!==0||Jm(a,s,d)}return d}function Jm(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=rt.updateQueue,s===null?(s={lastEffect:null,stores:null},rt.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function Ym(r,s,a,c){s.value=a,s.getSnapshot=c,eg(s)&&tg(r)}function Zm(r,s,a){return a(function(){eg(s)&&tg(r)})}function eg(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!zn(r,a)}catch{return!0}}function tg(r){var s=Lr(r,1);s!==null&&Gn(s,r,1,-1)}function ng(r){var s=lr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:r},s.queue=r,r=r.dispatch=nT.bind(null,rt,r),[s.memoizedState,r]}function qa(r,s,a,c){return r={tag:r,create:s,destroy:a,deps:c,next:null},s=rt.updateQueue,s===null?(s={lastEffect:null,stores:null},rt.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(c=a.next,a.next=r,r.next=c,s.lastEffect=r)),r}function rg(){return Rn().memoizedState}function xu(r,s,a,c){var d=lr();rt.flags|=r,d.memoizedState=qa(1|s,a,void 0,c===void 0?null:c)}function Du(r,s,a,c){var d=Rn();c=c===void 0?null:c;var g=void 0;if(Et!==null){var w=Et.memoizedState;if(g=w.destroy,c!==null&&ad(c,w.deps)){d.memoizedState=qa(s,a,g,c);return}}rt.flags|=r,d.memoizedState=qa(1|s,a,g,c)}function ig(r,s){return xu(8390656,8,r,s)}function dd(r,s){return Du(2048,8,r,s)}function sg(r,s){return Du(4,2,r,s)}function og(r,s){return Du(4,4,r,s)}function ag(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function lg(r,s,a){return a=a!=null?a.concat([r]):null,Du(4,4,ag.bind(null,s,r),a)}function fd(){}function ug(r,s){var a=Rn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&ad(s,c[1])?c[0]:(a.memoizedState=[r,s],r)}function cg(r,s){var a=Rn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&ad(s,c[1])?c[0]:(r=r(),a.memoizedState=[r,s],r)}function hg(r,s,a){return(ms&21)===0?(r.baseState&&(r.baseState=!1,en=!0),r.memoizedState=a):(zn(a,s)||(a=is(),rt.lanes|=a,gs|=a,r.baseState=!0),s)}function eT(r,s){var a=Oe;Oe=a!==0&&4>a?a:4,r(!0);var c=od.transition;od.transition={};try{r(!1),s()}finally{Oe=a,od.transition=c}}function dg(){return Rn().memoizedState}function tT(r,s,a){var c=_i(r);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},fg(r))pg(s,a);else if(a=qm(r,s,a,c),a!==null){var d=Kt();Gn(a,r,c,d),mg(a,s,c)}}function nT(r,s,a){var c=_i(r),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(fg(r))pg(s,d);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var w=s.lastRenderedState,A=g(w,a);if(d.hasEagerState=!0,d.eagerState=A,zn(A,w)){var N=s.interleaved;N===null?(d.next=d,ed(s)):(d.next=N.next,N.next=d),s.interleaved=d;return}}catch{}finally{}a=qm(r,s,d,c),a!==null&&(d=Kt(),Gn(a,r,c,d),mg(a,s,c))}}function fg(r){var s=r.alternate;return r===rt||s!==null&&s===rt}function pg(r,s){Ba=Nu=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function mg(r,s,a){if((a&4194240)!==0){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,ri(r,a)}}var Ou={readContext:An,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},rT={readContext:An,useCallback:function(r,s){return lr().memoizedState=[r,s===void 0?null:s],r},useContext:An,useEffect:ig,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,xu(4194308,4,ag.bind(null,s,r),a)},useLayoutEffect:function(r,s){return xu(4194308,4,r,s)},useInsertionEffect:function(r,s){return xu(4,2,r,s)},useMemo:function(r,s){var a=lr();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var c=lr();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},c.queue=r,r=r.dispatch=tT.bind(null,rt,r),[c.memoizedState,r]},useRef:function(r){var s=lr();return r={current:r},s.memoizedState=r},useState:ng,useDebugValue:fd,useDeferredValue:function(r){return lr().memoizedState=r},useTransition:function(){var r=ng(!1),s=r[0];return r=eT.bind(null,r[1]),lr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var c=rt,d=lr();if(et){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),Ct===null)throw Error(t(349));(ms&30)!==0||Jm(c,s,a)}d.memoizedState=a;var g={value:a,getSnapshot:s};return d.queue=g,ig(Zm.bind(null,c,g,r),[r]),c.flags|=2048,qa(9,Ym.bind(null,c,g,a,s),void 0,null),a},useId:function(){var r=lr(),s=Ct.identifierPrefix;if(et){var a=Vr,c=br;a=(c&~(1<<32-Ht(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=za++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=Z0++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},iT={readContext:An,useCallback:ug,useContext:An,useEffect:dd,useImperativeHandle:lg,useInsertionEffect:sg,useLayoutEffect:og,useMemo:cg,useReducer:cd,useRef:rg,useState:function(){return cd($a)},useDebugValue:fd,useDeferredValue:function(r){var s=Rn();return hg(s,Et.memoizedState,r)},useTransition:function(){var r=cd($a)[0],s=Rn().memoizedState;return[r,s]},useMutableSource:Qm,useSyncExternalStore:Xm,useId:dg,unstable_isNewReconciler:!1},sT={readContext:An,useCallback:ug,useContext:An,useEffect:dd,useImperativeHandle:lg,useInsertionEffect:sg,useLayoutEffect:og,useMemo:cg,useReducer:hd,useRef:rg,useState:function(){return hd($a)},useDebugValue:fd,useDeferredValue:function(r){var s=Rn();return Et===null?s.memoizedState=r:hg(s,Et.memoizedState,r)},useTransition:function(){var r=hd($a)[0],s=Rn().memoizedState;return[r,s]},useMutableSource:Qm,useSyncExternalStore:Xm,useId:dg,unstable_isNewReconciler:!1};function qn(r,s){if(r&&r.defaultProps){s=ae({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function pd(r,s,a,c){s=r.memoizedState,a=a(c,s),a=a==null?s:ae({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var bu={isMounted:function(r){return(r=r._reactInternals)?Vn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var c=Kt(),d=_i(r),g=Mr(c,d);g.payload=s,a!=null&&(g.callback=a),s=pi(r,g,d),s!==null&&(Gn(s,r,d,c),Ru(s,r,d))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var c=Kt(),d=_i(r),g=Mr(c,d);g.tag=1,g.payload=s,a!=null&&(g.callback=a),s=pi(r,g,d),s!==null&&(Gn(s,r,d,c),Ru(s,r,d))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Kt(),c=_i(r),d=Mr(a,c);d.tag=2,s!=null&&(d.callback=s),s=pi(r,d,c),s!==null&&(Gn(s,r,c,a),Ru(s,r,c))}};function gg(r,s,a,c,d,g,w){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,g,w):s.prototype&&s.prototype.isPureReactComponent?!Na(a,c)||!Na(d,g):!0}function yg(r,s,a){var c=!1,d=hi,g=s.contextType;return typeof g=="object"&&g!==null?g=An(g):(d=Zt(s)?cs:Mt.current,c=s.contextTypes,g=(c=c!=null)?_o(r,d):hi),s=new s(a,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=bu,r.stateNode=s,s._reactInternals=r,c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=d,r.__reactInternalMemoizedMaskedChildContext=g),s}function _g(r,s,a,c){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==r&&bu.enqueueReplaceState(s,s.state,null)}function md(r,s,a,c){var d=r.stateNode;d.props=a,d.state=r.memoizedState,d.refs={},td(r);var g=s.contextType;typeof g=="object"&&g!==null?d.context=An(g):(g=Zt(s)?cs:Mt.current,d.context=_o(r,g)),d.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(pd(r,s,g,a),d.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&bu.enqueueReplaceState(d,d.state,null),Cu(r,a,d,c),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308)}function Ro(r,s){try{var a="",c=s;do a+=we(c),c=c.return;while(c);var d=a}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:d,digest:null}}function gd(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function yd(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var oT=typeof WeakMap=="function"?WeakMap:Map;function vg(r,s,a){a=Mr(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){Bu||(Bu=!0,Dd=c),yd(r,s)},a}function wg(r,s,a){a=Mr(-1,a),a.tag=3;var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var d=s.value;a.payload=function(){return c(d)},a.callback=function(){yd(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){yd(r,s),typeof c!="function"&&(gi===null?gi=new Set([this]):gi.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),a}function Eg(r,s,a){var c=r.pingCache;if(c===null){c=r.pingCache=new oT;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(a)||(d.add(a),r=wT.bind(null,r,s,a),s.then(r,r))}function Tg(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function Ig(r,s,a,c,d){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Mr(-1,1),s.tag=2,pi(a,s,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=d,r)}var aT=se.ReactCurrentOwner,en=!1;function Gt(r,s,a,c){s.child=r===null?$m(s,null,a,c):To(s,r.child,a,c)}function Sg(r,s,a,c,d){a=a.render;var g=s.ref;return So(s,d),c=ld(r,s,a,c,g,d),a=ud(),r!==null&&!en?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,Ur(r,s,d)):(et&&a&&Hh(s),s.flags|=1,Gt(r,s,c,d),s.child)}function Ag(r,s,a,c,d){if(r===null){var g=a.type;return typeof g=="function"&&!Fd(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=g,Rg(r,s,g,c,d)):(r=Gu(a.type,null,c,s,s.mode,d),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,(r.lanes&d)===0){var w=g.memoizedProps;if(a=a.compare,a=a!==null?a:Na,a(w,c)&&r.ref===s.ref)return Ur(r,s,d)}return s.flags|=1,r=wi(g,c),r.ref=s.ref,r.return=s,s.child=r}function Rg(r,s,a,c,d){if(r!==null){var g=r.memoizedProps;if(Na(g,c)&&r.ref===s.ref)if(en=!1,s.pendingProps=c=g,(r.lanes&d)!==0)(r.flags&131072)!==0&&(en=!0);else return s.lanes=r.lanes,Ur(r,s,d)}return _d(r,s,a,c,d)}function Cg(r,s,a){var c=s.pendingProps,d=c.children,g=r!==null?r.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(Po,gn),gn|=a;else{if((a&1073741824)===0)return r=g!==null?g.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,Ke(Po,gn),gn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,Ke(Po,gn),gn|=c}else g!==null?(c=g.baseLanes|a,s.memoizedState=null):c=a,Ke(Po,gn),gn|=c;return Gt(r,s,d,a),s.child}function Pg(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function _d(r,s,a,c,d){var g=Zt(a)?cs:Mt.current;return g=_o(s,g),So(s,d),a=ld(r,s,a,c,g,d),c=ud(),r!==null&&!en?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,Ur(r,s,d)):(et&&c&&Hh(s),s.flags|=1,Gt(r,s,a,d),s.child)}function kg(r,s,a,c,d){if(Zt(a)){var g=!0;_u(s)}else g=!1;if(So(s,d),s.stateNode===null)Lu(r,s),yg(s,a,c),md(s,a,c,d),c=!0;else if(r===null){var w=s.stateNode,A=s.memoizedProps;w.props=A;var N=w.context,$=a.contextType;typeof $=="object"&&$!==null?$=An($):($=Zt(a)?cs:Mt.current,$=_o(s,$));var X=a.getDerivedStateFromProps,Y=typeof X=="function"||typeof w.getSnapshotBeforeUpdate=="function";Y||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(A!==c||N!==$)&&_g(s,w,c,$),fi=!1;var Q=s.memoizedState;w.state=Q,Cu(s,c,w,d),N=s.memoizedState,A!==c||Q!==N||Yt.current||fi?(typeof X=="function"&&(pd(s,a,X,c),N=s.memoizedState),(A=fi||gg(s,a,A,c,Q,N,$))?(Y||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=N),w.props=c,w.state=N,w.context=$,c=A):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{w=s.stateNode,Hm(r,s),A=s.memoizedProps,$=s.type===s.elementType?A:qn(s.type,A),w.props=$,Y=s.pendingProps,Q=w.context,N=a.contextType,typeof N=="object"&&N!==null?N=An(N):(N=Zt(a)?cs:Mt.current,N=_o(s,N));var le=a.getDerivedStateFromProps;(X=typeof le=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(A!==Y||Q!==N)&&_g(s,w,c,N),fi=!1,Q=s.memoizedState,w.state=Q,Cu(s,c,w,d);var fe=s.memoizedState;A!==Y||Q!==fe||Yt.current||fi?(typeof le=="function"&&(pd(s,a,le,c),fe=s.memoizedState),($=fi||gg(s,a,$,c,Q,fe,N)||!1)?(X||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,fe,N),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,fe,N)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||A===r.memoizedProps&&Q===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&Q===r.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=fe),w.props=c,w.state=fe,w.context=N,c=$):(typeof w.componentDidUpdate!="function"||A===r.memoizedProps&&Q===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&Q===r.memoizedState||(s.flags|=1024),c=!1)}return vd(r,s,a,c,g,d)}function vd(r,s,a,c,d,g){Pg(r,s);var w=(s.flags&128)!==0;if(!c&&!w)return d&&bm(s,a,!1),Ur(r,s,g);c=s.stateNode,aT.current=s;var A=w&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,r!==null&&w?(s.child=To(s,r.child,null,g),s.child=To(s,null,A,g)):Gt(r,s,A,g),s.memoizedState=c.state,d&&bm(s,a,!0),s.child}function Ng(r){var s=r.stateNode;s.pendingContext?Dm(r,s.pendingContext,s.pendingContext!==s.context):s.context&&Dm(r,s.context,!1),nd(r,s.containerInfo)}function xg(r,s,a,c,d){return Eo(),Qh(d),s.flags|=256,Gt(r,s,a,c),s.child}var wd={dehydrated:null,treeContext:null,retryLane:0};function Ed(r){return{baseLanes:r,cachePool:null,transitions:null}}function Dg(r,s,a){var c=s.pendingProps,d=nt.current,g=!1,w=(s.flags&128)!==0,A;if((A=w)||(A=r!==null&&r.memoizedState===null?!1:(d&2)!==0),A?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(d|=1),Ke(nt,d&1),r===null)return Kh(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(w=c.children,r=c.fallback,g?(c=s.mode,g=s.child,w={mode:"hidden",children:w},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=w):g=Ku(w,c,0,null),r=ws(r,c,a,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=Ed(a),s.memoizedState=wd,r):Td(s,w));if(d=r.memoizedState,d!==null&&(A=d.dehydrated,A!==null))return lT(r,s,w,c,A,d,a);if(g){g=c.fallback,w=s.mode,d=r.child,A=d.sibling;var N={mode:"hidden",children:c.children};return(w&1)===0&&s.child!==d?(c=s.child,c.childLanes=0,c.pendingProps=N,s.deletions=null):(c=wi(d,N),c.subtreeFlags=d.subtreeFlags&14680064),A!==null?g=wi(A,g):(g=ws(g,w,a,null),g.flags|=2),g.return=s,c.return=s,c.sibling=g,s.child=c,c=g,g=s.child,w=r.child.memoizedState,w=w===null?Ed(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=r.childLanes&~a,s.memoizedState=wd,c}return g=r.child,r=g.sibling,c=wi(g,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=a),c.return=s,c.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=c,s.memoizedState=null,c}function Td(r,s){return s=Ku({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Vu(r,s,a,c){return c!==null&&Qh(c),To(s,r.child,null,a),r=Td(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function lT(r,s,a,c,d,g,w){if(a)return s.flags&256?(s.flags&=-257,c=gd(Error(t(422))),Vu(r,s,w,c)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=c.fallback,d=s.mode,c=Ku({mode:"visible",children:c.children},d,0,null),g=ws(g,d,w,null),g.flags|=2,c.return=s,g.return=s,c.sibling=g,s.child=c,(s.mode&1)!==0&&To(s,r.child,null,w),s.child.memoizedState=Ed(w),s.memoizedState=wd,g);if((s.mode&1)===0)return Vu(r,s,w,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var A=c.dgst;return c=A,g=Error(t(419)),c=gd(g,c,void 0),Vu(r,s,w,c)}if(A=(w&r.childLanes)!==0,en||A){if(c=Ct,c!==null){switch(w&-w){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|w))!==0?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,Lr(r,d),Gn(c,r,d,-1))}return Ud(),c=gd(Error(t(421))),Vu(r,s,w,c)}return d.data==="$?"?(s.flags|=128,s.child=r.child,s=ET.bind(null,r),d._reactRetry=s,null):(r=g.treeContext,mn=ui(d.nextSibling),pn=s,et=!0,$n=null,r!==null&&(In[Sn++]=br,In[Sn++]=Vr,In[Sn++]=hs,br=r.id,Vr=r.overflow,hs=s),s=Td(s,c.children),s.flags|=4096,s)}function Og(r,s,a){r.lanes|=s;var c=r.alternate;c!==null&&(c.lanes|=s),Zh(r.return,s,a)}function Id(r,s,a,c,d){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=d)}function bg(r,s,a){var c=s.pendingProps,d=c.revealOrder,g=c.tail;if(Gt(r,s,c.children,a),c=nt.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Og(r,a,s);else if(r.tag===19)Og(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}if(Ke(nt,c),(s.mode&1)===0)s.memoizedState=null;else switch(d){case"forwards":for(a=s.child,d=null;a!==null;)r=a.alternate,r!==null&&Pu(r)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),Id(s,!1,d,a,g);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(r=d.alternate,r!==null&&Pu(r)===null){s.child=d;break}r=d.sibling,d.sibling=a,a=d,d=r}Id(s,!0,a,null,g);break;case"together":Id(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Lu(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Ur(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),gs|=s.lanes,(a&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=wi(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=wi(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function uT(r,s,a){switch(s.tag){case 3:Ng(s),Eo();break;case 5:Km(s);break;case 1:Zt(s.type)&&_u(s);break;case 4:nd(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,d=s.memoizedProps.value;Ke(Su,c._currentValue),c._currentValue=d;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(Ke(nt,nt.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?Dg(r,s,a):(Ke(nt,nt.current&1),r=Ur(r,s,a),r!==null?r.sibling:null);Ke(nt,nt.current&1);break;case 19:if(c=(a&s.childLanes)!==0,(r.flags&128)!==0){if(c)return bg(r,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ke(nt,nt.current),c)break;return null;case 22:case 23:return s.lanes=0,Cg(r,s,a)}return Ur(r,s,a)}var Vg,Sd,Lg,Mg;Vg=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Sd=function(){},Lg=function(r,s,a,c){var d=r.memoizedProps;if(d!==c){r=s.stateNode,ps(ar.current);var g=null;switch(a){case"input":d=Gi(r,d),c=Gi(r,c),g=[];break;case"select":d=ae({},d,{value:void 0}),c=ae({},c,{value:void 0}),g=[];break;case"textarea":d=sa(r,d),c=sa(r,c),g=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(r.onclick=mu)}ha(a,c);var w;a=null;for($ in d)if(!c.hasOwnProperty($)&&d.hasOwnProperty($)&&d[$]!=null)if($==="style"){var A=d[$];for(w in A)A.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else $!=="dangerouslySetInnerHTML"&&$!=="children"&&$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&$!=="autoFocus"&&(o.hasOwnProperty($)?g||(g=[]):(g=g||[]).push($,null));for($ in c){var N=c[$];if(A=d!=null?d[$]:void 0,c.hasOwnProperty($)&&N!==A&&(N!=null||A!=null))if($==="style")if(A){for(w in A)!A.hasOwnProperty(w)||N&&N.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in N)N.hasOwnProperty(w)&&A[w]!==N[w]&&(a||(a={}),a[w]=N[w])}else a||(g||(g=[]),g.push($,a)),a=N;else $==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,A=A?A.__html:void 0,N!=null&&A!==N&&(g=g||[]).push($,N)):$==="children"?typeof N!="string"&&typeof N!="number"||(g=g||[]).push($,""+N):$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&(o.hasOwnProperty($)?(N!=null&&$==="onScroll"&&Xe("scroll",r),g||A===N||(g=[])):(g=g||[]).push($,N))}a&&(g=g||[]).push("style",a);var $=g;(s.updateQueue=$)&&(s.flags|=4)}},Mg=function(r,s,a,c){a!==c&&(s.flags|=4)};function Ha(r,s){if(!et)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function Ft(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,c=0;if(s)for(var d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=c,r.childLanes=a,s}function cT(r,s,a){var c=s.pendingProps;switch(Wh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(s),null;case 1:return Zt(s.type)&&yu(),Ft(s),null;case 3:return c=s.stateNode,Ao(),Je(Yt),Je(Mt),sd(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(r===null||r.child===null)&&(Tu(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,$n!==null&&(Vd($n),$n=null))),Sd(r,s),Ft(s),null;case 5:rd(s);var d=ps(ja.current);if(a=s.type,r!==null&&s.stateNode!=null)Lg(r,s,a,c,d),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Ft(s),null}if(r=ps(ar.current),Tu(s)){c=s.stateNode,a=s.type;var g=s.memoizedProps;switch(c[or]=s,c[Va]=g,r=(s.mode&1)!==0,a){case"dialog":Xe("cancel",c),Xe("close",c);break;case"iframe":case"object":case"embed":Xe("load",c);break;case"video":case"audio":for(d=0;d<Da.length;d++)Xe(Da[d],c);break;case"source":Xe("error",c);break;case"img":case"image":case"link":Xe("error",c),Xe("load",c);break;case"details":Xe("toggle",c);break;case"input":Fs(c,g),Xe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Xe("invalid",c);break;case"textarea":Bs(c,g),Xe("invalid",c)}ha(a,g),d=null;for(var w in g)if(g.hasOwnProperty(w)){var A=g[w];w==="children"?typeof A=="string"?c.textContent!==A&&(g.suppressHydrationWarning!==!0&&pu(c.textContent,A,r),d=["children",A]):typeof A=="number"&&c.textContent!==""+A&&(g.suppressHydrationWarning!==!0&&pu(c.textContent,A,r),d=["children",""+A]):o.hasOwnProperty(w)&&A!=null&&w==="onScroll"&&Xe("scroll",c)}switch(a){case"input":Tr(c),jl(c,g,!0);break;case"textarea":Tr(c),oa(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=mu)}c=d,s.updateQueue=c,c!==null&&(s.flags|=4)}else{w=d.nodeType===9?d:d.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=_t(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=w.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof c.is=="string"?r=w.createElement(a,{is:c.is}):(r=w.createElement(a),a==="select"&&(w=r,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):r=w.createElementNS(r,a),r[or]=s,r[Va]=c,Vg(r,s,!1,!1),s.stateNode=r;e:{switch(w=da(a,c),a){case"dialog":Xe("cancel",r),Xe("close",r),d=c;break;case"iframe":case"object":case"embed":Xe("load",r),d=c;break;case"video":case"audio":for(d=0;d<Da.length;d++)Xe(Da[d],r);d=c;break;case"source":Xe("error",r),d=c;break;case"img":case"image":case"link":Xe("error",r),Xe("load",r),d=c;break;case"details":Xe("toggle",r),d=c;break;case"input":Fs(r,c),d=Gi(r,c),Xe("invalid",r);break;case"option":d=c;break;case"select":r._wrapperState={wasMultiple:!!c.multiple},d=ae({},c,{value:void 0}),Xe("invalid",r);break;case"textarea":Bs(r,c),d=sa(r,c),Xe("invalid",r);break;default:d=c}ha(a,d),A=d;for(g in A)if(A.hasOwnProperty(g)){var N=A[g];g==="style"?ua(r,N):g==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,N!=null&&aa(r,N)):g==="children"?typeof N=="string"?(a!=="textarea"||N!=="")&&Yr(r,N):typeof N=="number"&&Yr(r,""+N):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?N!=null&&g==="onScroll"&&Xe("scroll",r):N!=null&&J(r,g,N,w))}switch(a){case"input":Tr(r),jl(r,c,!1);break;case"textarea":Tr(r),oa(r);break;case"option":c.value!=null&&r.setAttribute("value",""+Fe(c.value));break;case"select":r.multiple=!!c.multiple,g=c.value,g!=null?Sr(r,!!c.multiple,g,!1):c.defaultValue!=null&&Sr(r,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(r.onclick=mu)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Ft(s),null;case 6:if(r&&s.stateNode!=null)Mg(r,s,r.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=ps(ja.current),ps(ar.current),Tu(s)){if(c=s.stateNode,a=s.memoizedProps,c[or]=s,(g=c.nodeValue!==a)&&(r=pn,r!==null))switch(r.tag){case 3:pu(c.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&pu(c.nodeValue,a,(r.mode&1)!==0)}g&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[or]=s,s.stateNode=c}return Ft(s),null;case 13:if(Je(nt),c=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(et&&mn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)jm(),Eo(),s.flags|=98560,g=!1;else if(g=Tu(s),c!==null&&c.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[or]=s}else Eo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Ft(s),g=!1}else $n!==null&&(Vd($n),$n=null),g=!0;if(!g)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(c=c!==null,c!==(r!==null&&r.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(nt.current&1)!==0?Tt===0&&(Tt=3):Ud())),s.updateQueue!==null&&(s.flags|=4),Ft(s),null);case 4:return Ao(),Sd(r,s),r===null&&Oa(s.stateNode.containerInfo),Ft(s),null;case 10:return Yh(s.type._context),Ft(s),null;case 17:return Zt(s.type)&&yu(),Ft(s),null;case 19:if(Je(nt),g=s.memoizedState,g===null)return Ft(s),null;if(c=(s.flags&128)!==0,w=g.rendering,w===null)if(c)Ha(g,!1);else{if(Tt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(w=Pu(r),w!==null){for(s.flags|=128,Ha(g,!1),c=w.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)g=a,r=c,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,r=w.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return Ke(nt,nt.current&1|2),s.child}r=r.sibling}g.tail!==null&&Ge()>ko&&(s.flags|=128,c=!0,Ha(g,!1),s.lanes=4194304)}else{if(!c)if(r=Pu(w),r!==null){if(s.flags|=128,c=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Ha(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!et)return Ft(s),null}else 2*Ge()-g.renderingStartTime>ko&&a!==1073741824&&(s.flags|=128,c=!0,Ha(g,!1),s.lanes=4194304);g.isBackwards?(w.sibling=s.child,s.child=w):(a=g.last,a!==null?a.sibling=w:s.child=w,g.last=w)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=Ge(),s.sibling=null,a=nt.current,Ke(nt,c?a&1|2:a&1),s):(Ft(s),null);case 22:case 23:return Md(),c=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(gn&1073741824)!==0&&(Ft(s),s.subtreeFlags&6&&(s.flags|=8192)):Ft(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function hT(r,s){switch(Wh(s),s.tag){case 1:return Zt(s.type)&&yu(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return Ao(),Je(Yt),Je(Mt),sd(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return rd(s),null;case 13:if(Je(nt),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Eo()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Je(nt),null;case 4:return Ao(),null;case 10:return Yh(s.type._context),null;case 22:case 23:return Md(),null;case 24:return null;default:return null}}var Mu=!1,jt=!1,dT=typeof WeakSet=="function"?WeakSet:Set,ce=null;function Co(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){st(r,s,c)}else a.current=null}function Ad(r,s,a){try{a()}catch(c){st(r,s,c)}}var Ug=!1;function fT(r,s){if(Mh=oi,r=gm(),kh(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var w=0,A=-1,N=-1,$=0,X=0,Y=r,Q=null;t:for(;;){for(var le;Y!==a||d!==0&&Y.nodeType!==3||(A=w+d),Y!==g||c!==0&&Y.nodeType!==3||(N=w+c),Y.nodeType===3&&(w+=Y.nodeValue.length),(le=Y.firstChild)!==null;)Q=Y,Y=le;for(;;){if(Y===r)break t;if(Q===a&&++$===d&&(A=w),Q===g&&++X===c&&(N=w),(le=Y.nextSibling)!==null)break;Y=Q,Q=Y.parentNode}Y=le}a=A===-1||N===-1?null:{start:A,end:N}}else a=null}a=a||{start:0,end:0}}else a=null;for(Uh={focusedElem:r,selectionRange:a},oi=!1,ce=s;ce!==null;)if(s=ce,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,ce=r;else for(;ce!==null;){s=ce;try{var fe=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(fe!==null){var pe=fe.memoizedProps,ut=fe.memoizedState,F=s.stateNode,O=F.getSnapshotBeforeUpdate(s.elementType===s.type?pe:qn(s.type,pe),ut);F.__reactInternalSnapshotBeforeUpdate=O}break;case 3:var j=s.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Z){st(s,s.return,Z)}if(r=s.sibling,r!==null){r.return=s.return,ce=r;break}ce=s.return}return fe=Ug,Ug=!1,fe}function Wa(r,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&r)===r){var g=d.destroy;d.destroy=void 0,g!==void 0&&Ad(s,a,g)}d=d.next}while(d!==c)}}function Uu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function Rd(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function Fg(r){var s=r.alternate;s!==null&&(r.alternate=null,Fg(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[or],delete s[Va],delete s[zh],delete s[Q0],delete s[X0])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function jg(r){return r.tag===5||r.tag===3||r.tag===4}function Bg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||jg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Cd(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=mu));else if(c!==4&&(r=r.child,r!==null))for(Cd(r,s,a),r=r.sibling;r!==null;)Cd(r,s,a),r=r.sibling}function Pd(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(c!==4&&(r=r.child,r!==null))for(Pd(r,s,a),r=r.sibling;r!==null;)Pd(r,s,a),r=r.sibling}var Dt=null,Hn=!1;function mi(r,s,a){for(a=a.child;a!==null;)zg(r,s,a),a=a.sibling}function zg(r,s,a){if(cn&&typeof cn.onCommitFiberUnmount=="function")try{cn.onCommitFiberUnmount(ns,a)}catch{}switch(a.tag){case 5:jt||Co(a,s);case 6:var c=Dt,d=Hn;Dt=null,mi(r,s,a),Dt=c,Hn=d,Dt!==null&&(Hn?(r=Dt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Dt.removeChild(a.stateNode));break;case 18:Dt!==null&&(Hn?(r=Dt,a=a.stateNode,r.nodeType===8?Bh(r.parentNode,a):r.nodeType===1&&Bh(r,a),jn(r)):Bh(Dt,a.stateNode));break;case 4:c=Dt,d=Hn,Dt=a.stateNode.containerInfo,Hn=!0,mi(r,s,a),Dt=c,Hn=d;break;case 0:case 11:case 14:case 15:if(!jt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var g=d,w=g.destroy;g=g.tag,w!==void 0&&((g&2)!==0||(g&4)!==0)&&Ad(a,s,w),d=d.next}while(d!==c)}mi(r,s,a);break;case 1:if(!jt&&(Co(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(A){st(a,s,A)}mi(r,s,a);break;case 21:mi(r,s,a);break;case 22:a.mode&1?(jt=(c=jt)||a.memoizedState!==null,mi(r,s,a),jt=c):mi(r,s,a);break;default:mi(r,s,a)}}function $g(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new dT),s.forEach(function(c){var d=TT.bind(null,r,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Wn(r,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var g=r,w=s,A=w;e:for(;A!==null;){switch(A.tag){case 5:Dt=A.stateNode,Hn=!1;break e;case 3:Dt=A.stateNode.containerInfo,Hn=!0;break e;case 4:Dt=A.stateNode.containerInfo,Hn=!0;break e}A=A.return}if(Dt===null)throw Error(t(160));zg(g,w,d),Dt=null,Hn=!1;var N=d.alternate;N!==null&&(N.return=null),d.return=null}catch($){st(d,s,$)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)qg(s,r),s=s.sibling}function qg(r,s){var a=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Wn(s,r),ur(r),c&4){try{Wa(3,r,r.return),Uu(3,r)}catch(pe){st(r,r.return,pe)}try{Wa(5,r,r.return)}catch(pe){st(r,r.return,pe)}}break;case 1:Wn(s,r),ur(r),c&512&&a!==null&&Co(a,a.return);break;case 5:if(Wn(s,r),ur(r),c&512&&a!==null&&Co(a,a.return),r.flags&32){var d=r.stateNode;try{Yr(d,"")}catch(pe){st(r,r.return,pe)}}if(c&4&&(d=r.stateNode,d!=null)){var g=r.memoizedProps,w=a!==null?a.memoizedProps:g,A=r.type,N=r.updateQueue;if(r.updateQueue=null,N!==null)try{A==="input"&&g.type==="radio"&&g.name!=null&&ra(d,g),da(A,w);var $=da(A,g);for(w=0;w<N.length;w+=2){var X=N[w],Y=N[w+1];X==="style"?ua(d,Y):X==="dangerouslySetInnerHTML"?aa(d,Y):X==="children"?Yr(d,Y):J(d,X,Y,$)}switch(A){case"input":ia(d,g);break;case"textarea":zs(d,g);break;case"select":var Q=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var le=g.value;le!=null?Sr(d,!!g.multiple,le,!1):Q!==!!g.multiple&&(g.defaultValue!=null?Sr(d,!!g.multiple,g.defaultValue,!0):Sr(d,!!g.multiple,g.multiple?[]:"",!1))}d[Va]=g}catch(pe){st(r,r.return,pe)}}break;case 6:if(Wn(s,r),ur(r),c&4){if(r.stateNode===null)throw Error(t(162));d=r.stateNode,g=r.memoizedProps;try{d.nodeValue=g}catch(pe){st(r,r.return,pe)}}break;case 3:if(Wn(s,r),ur(r),c&4&&a!==null&&a.memoizedState.isDehydrated)try{jn(s.containerInfo)}catch(pe){st(r,r.return,pe)}break;case 4:Wn(s,r),ur(r);break;case 13:Wn(s,r),ur(r),d=r.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(xd=Ge())),c&4&&$g(r);break;case 22:if(X=a!==null&&a.memoizedState!==null,r.mode&1?(jt=($=jt)||X,Wn(s,r),jt=$):Wn(s,r),ur(r),c&8192){if($=r.memoizedState!==null,(r.stateNode.isHidden=$)&&!X&&(r.mode&1)!==0)for(ce=r,X=r.child;X!==null;){for(Y=ce=X;ce!==null;){switch(Q=ce,le=Q.child,Q.tag){case 0:case 11:case 14:case 15:Wa(4,Q,Q.return);break;case 1:Co(Q,Q.return);var fe=Q.stateNode;if(typeof fe.componentWillUnmount=="function"){c=Q,a=Q.return;try{s=c,fe.props=s.memoizedProps,fe.state=s.memoizedState,fe.componentWillUnmount()}catch(pe){st(c,a,pe)}}break;case 5:Co(Q,Q.return);break;case 22:if(Q.memoizedState!==null){Gg(Y);continue}}le!==null?(le.return=Q,ce=le):Gg(Y)}X=X.sibling}e:for(X=null,Y=r;;){if(Y.tag===5){if(X===null){X=Y;try{d=Y.stateNode,$?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(A=Y.stateNode,N=Y.memoizedProps.style,w=N!=null&&N.hasOwnProperty("display")?N.display:null,A.style.display=la("display",w))}catch(pe){st(r,r.return,pe)}}}else if(Y.tag===6){if(X===null)try{Y.stateNode.nodeValue=$?"":Y.memoizedProps}catch(pe){st(r,r.return,pe)}}else if((Y.tag!==22&&Y.tag!==23||Y.memoizedState===null||Y===r)&&Y.child!==null){Y.child.return=Y,Y=Y.child;continue}if(Y===r)break e;for(;Y.sibling===null;){if(Y.return===null||Y.return===r)break e;X===Y&&(X=null),Y=Y.return}X===Y&&(X=null),Y.sibling.return=Y.return,Y=Y.sibling}}break;case 19:Wn(s,r),ur(r),c&4&&$g(r);break;case 21:break;default:Wn(s,r),ur(r)}}function ur(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(jg(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Yr(d,""),c.flags&=-33);var g=Bg(r);Pd(r,g,d);break;case 3:case 4:var w=c.stateNode.containerInfo,A=Bg(r);Cd(r,A,w);break;default:throw Error(t(161))}}catch(N){st(r,r.return,N)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function pT(r,s,a){ce=r,Hg(r)}function Hg(r,s,a){for(var c=(r.mode&1)!==0;ce!==null;){var d=ce,g=d.child;if(d.tag===22&&c){var w=d.memoizedState!==null||Mu;if(!w){var A=d.alternate,N=A!==null&&A.memoizedState!==null||jt;A=Mu;var $=jt;if(Mu=w,(jt=N)&&!$)for(ce=d;ce!==null;)w=ce,N=w.child,w.tag===22&&w.memoizedState!==null?Kg(d):N!==null?(N.return=w,ce=N):Kg(d);for(;g!==null;)ce=g,Hg(g),g=g.sibling;ce=d,Mu=A,jt=$}Wg(r)}else(d.subtreeFlags&8772)!==0&&g!==null?(g.return=d,ce=g):Wg(r)}}function Wg(r){for(;ce!==null;){var s=ce;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:jt||Uu(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!jt)if(a===null)c.componentDidMount();else{var d=s.elementType===s.type?a.memoizedProps:qn(s.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&Gm(s,g,c);break;case 3:var w=s.updateQueue;if(w!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Gm(s,w,a)}break;case 5:var A=s.stateNode;if(a===null&&s.flags&4){a=A;var N=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":N.autoFocus&&a.focus();break;case"img":N.src&&(a.src=N.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var $=s.alternate;if($!==null){var X=$.memoizedState;if(X!==null){var Y=X.dehydrated;Y!==null&&jn(Y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}jt||s.flags&512&&Rd(s)}catch(Q){st(s,s.return,Q)}}if(s===r){ce=null;break}if(a=s.sibling,a!==null){a.return=s.return,ce=a;break}ce=s.return}}function Gg(r){for(;ce!==null;){var s=ce;if(s===r){ce=null;break}var a=s.sibling;if(a!==null){a.return=s.return,ce=a;break}ce=s.return}}function Kg(r){for(;ce!==null;){var s=ce;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Uu(4,s)}catch(N){st(s,a,N)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var d=s.return;try{c.componentDidMount()}catch(N){st(s,d,N)}}var g=s.return;try{Rd(s)}catch(N){st(s,g,N)}break;case 5:var w=s.return;try{Rd(s)}catch(N){st(s,w,N)}}}catch(N){st(s,s.return,N)}if(s===r){ce=null;break}var A=s.sibling;if(A!==null){A.return=s.return,ce=A;break}ce=s.return}}var mT=Math.ceil,Fu=se.ReactCurrentDispatcher,kd=se.ReactCurrentOwner,Cn=se.ReactCurrentBatchConfig,Me=0,Ct=null,pt=null,Ot=0,gn=0,Po=ci(0),Tt=0,Ga=null,gs=0,ju=0,Nd=0,Ka=null,tn=null,xd=0,ko=1/0,Fr=null,Bu=!1,Dd=null,gi=null,zu=!1,yi=null,$u=0,Qa=0,Od=null,qu=-1,Hu=0;function Kt(){return(Me&6)!==0?Ge():qu!==-1?qu:qu=Ge()}function _i(r){return(r.mode&1)===0?1:(Me&2)!==0&&Ot!==0?Ot&-Ot:Y0.transition!==null?(Hu===0&&(Hu=is()),Hu):(r=Oe,r!==0||(r=window.event,r=r===void 0?16:Ia(r.type)),r)}function Gn(r,s,a,c){if(50<Qa)throw Qa=0,Od=null,Error(t(185));ni(r,a,c),((Me&2)===0||r!==Ct)&&(r===Ct&&((Me&2)===0&&(ju|=a),Tt===4&&vi(r,Ot)),nn(r,c),a===1&&Me===0&&(s.mode&1)===0&&(ko=Ge()+500,vu&&di()))}function nn(r,s){var a=r.callbackNode;Cr(r,s);var c=rs(r,r===Ct?Ot:0);if(c===0)a!==null&&_a(a),r.callbackNode=null,r.callbackPriority=0;else if(s=c&-c,r.callbackPriority!==s){if(a!=null&&_a(a),s===1)r.tag===0?J0(Xg.bind(null,r)):Vm(Xg.bind(null,r)),G0(function(){(Me&6)===0&&di()}),a=null;else{switch(ii(c)){case 1:a=ts;break;case 4:a=Zr;break;case 16:a=wn;break;case 536870912:a=Hl;break;default:a=wn}a=iy(a,Qg.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function Qg(r,s){if(qu=-1,Hu=0,(Me&6)!==0)throw Error(t(327));var a=r.callbackNode;if(No()&&r.callbackNode!==a)return null;var c=rs(r,r===Ct?Ot:0);if(c===0)return null;if((c&30)!==0||(c&r.expiredLanes)!==0||s)s=Wu(r,c);else{s=c;var d=Me;Me|=2;var g=Yg();(Ct!==r||Ot!==s)&&(Fr=null,ko=Ge()+500,_s(r,s));do try{_T();break}catch(A){Jg(r,A)}while(!0);Jh(),Fu.current=g,Me=d,pt!==null?s=0:(Ct=null,Ot=0,s=Tt)}if(s!==0){if(s===2&&(d=hn(r),d!==0&&(c=d,s=bd(r,d))),s===1)throw a=Ga,_s(r,0),vi(r,c),nn(r,Ge()),a;if(s===6)vi(r,c);else{if(d=r.current.alternate,(c&30)===0&&!gT(d)&&(s=Wu(r,c),s===2&&(g=hn(r),g!==0&&(c=g,s=bd(r,g))),s===1))throw a=Ga,_s(r,0),vi(r,c),nn(r,Ge()),a;switch(r.finishedWork=d,r.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:vs(r,tn,Fr);break;case 3:if(vi(r,c),(c&130023424)===c&&(s=xd+500-Ge(),10<s)){if(rs(r,0)!==0)break;if(d=r.suspendedLanes,(d&c)!==c){Kt(),r.pingedLanes|=r.suspendedLanes&d;break}r.timeoutHandle=jh(vs.bind(null,r,tn,Fr),s);break}vs(r,tn,Fr);break;case 4:if(vi(r,c),(c&4194240)===c)break;for(s=r.eventTimes,d=-1;0<c;){var w=31-Ht(c);g=1<<w,w=s[w],w>d&&(d=w),c&=~g}if(c=d,c=Ge()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*mT(c/1960))-c,10<c){r.timeoutHandle=jh(vs.bind(null,r,tn,Fr),c);break}vs(r,tn,Fr);break;case 5:vs(r,tn,Fr);break;default:throw Error(t(329))}}}return nn(r,Ge()),r.callbackNode===a?Qg.bind(null,r):null}function bd(r,s){var a=Ka;return r.current.memoizedState.isDehydrated&&(_s(r,s).flags|=256),r=Wu(r,s),r!==2&&(s=tn,tn=a,s!==null&&Vd(s)),r}function Vd(r){tn===null?tn=r:tn.push.apply(tn,r)}function gT(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],g=d.getSnapshot;d=d.value;try{if(!zn(g(),d))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function vi(r,s){for(s&=~Nd,s&=~ju,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-Ht(s),c=1<<a;r[a]=-1,s&=~c}}function Xg(r){if((Me&6)!==0)throw Error(t(327));No();var s=rs(r,0);if((s&1)===0)return nn(r,Ge()),null;var a=Wu(r,s);if(r.tag!==0&&a===2){var c=hn(r);c!==0&&(s=c,a=bd(r,c))}if(a===1)throw a=Ga,_s(r,0),vi(r,s),nn(r,Ge()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,vs(r,tn,Fr),nn(r,Ge()),null}function Ld(r,s){var a=Me;Me|=1;try{return r(s)}finally{Me=a,Me===0&&(ko=Ge()+500,vu&&di())}}function ys(r){yi!==null&&yi.tag===0&&(Me&6)===0&&No();var s=Me;Me|=1;var a=Cn.transition,c=Oe;try{if(Cn.transition=null,Oe=1,r)return r()}finally{Oe=c,Cn.transition=a,Me=s,(Me&6)===0&&di()}}function Md(){gn=Po.current,Je(Po)}function _s(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,W0(a)),pt!==null)for(a=pt.return;a!==null;){var c=a;switch(Wh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&yu();break;case 3:Ao(),Je(Yt),Je(Mt),sd();break;case 5:rd(c);break;case 4:Ao();break;case 13:Je(nt);break;case 19:Je(nt);break;case 10:Yh(c.type._context);break;case 22:case 23:Md()}a=a.return}if(Ct=r,pt=r=wi(r.current,null),Ot=gn=s,Tt=0,Ga=null,Nd=ju=gs=0,tn=Ka=null,fs!==null){for(s=0;s<fs.length;s++)if(a=fs[s],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,g=a.pending;if(g!==null){var w=g.next;g.next=d,c.next=w}a.pending=c}fs=null}return r}function Jg(r,s){do{var a=pt;try{if(Jh(),ku.current=Ou,Nu){for(var c=rt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Nu=!1}if(ms=0,Rt=Et=rt=null,Ba=!1,za=0,kd.current=null,a===null||a.return===null){Tt=1,Ga=s,pt=null;break}e:{var g=r,w=a.return,A=a,N=s;if(s=Ot,A.flags|=32768,N!==null&&typeof N=="object"&&typeof N.then=="function"){var $=N,X=A,Y=X.tag;if((X.mode&1)===0&&(Y===0||Y===11||Y===15)){var Q=X.alternate;Q?(X.updateQueue=Q.updateQueue,X.memoizedState=Q.memoizedState,X.lanes=Q.lanes):(X.updateQueue=null,X.memoizedState=null)}var le=Tg(w);if(le!==null){le.flags&=-257,Ig(le,w,A,g,s),le.mode&1&&Eg(g,$,s),s=le,N=$;var fe=s.updateQueue;if(fe===null){var pe=new Set;pe.add(N),s.updateQueue=pe}else fe.add(N);break e}else{if((s&1)===0){Eg(g,$,s),Ud();break e}N=Error(t(426))}}else if(et&&A.mode&1){var ut=Tg(w);if(ut!==null){(ut.flags&65536)===0&&(ut.flags|=256),Ig(ut,w,A,g,s),Qh(Ro(N,A));break e}}g=N=Ro(N,A),Tt!==4&&(Tt=2),Ka===null?Ka=[g]:Ka.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var F=vg(g,N,s);Wm(g,F);break e;case 1:A=N;var O=g.type,j=g.stateNode;if((g.flags&128)===0&&(typeof O.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(gi===null||!gi.has(j)))){g.flags|=65536,s&=-s,g.lanes|=s;var Z=wg(g,A,s);Wm(g,Z);break e}}g=g.return}while(g!==null)}ey(a)}catch(me){s=me,pt===a&&a!==null&&(pt=a=a.return);continue}break}while(!0)}function Yg(){var r=Fu.current;return Fu.current=Ou,r===null?Ou:r}function Ud(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),Ct===null||(gs&268435455)===0&&(ju&268435455)===0||vi(Ct,Ot)}function Wu(r,s){var a=Me;Me|=2;var c=Yg();(Ct!==r||Ot!==s)&&(Fr=null,_s(r,s));do try{yT();break}catch(d){Jg(r,d)}while(!0);if(Jh(),Me=a,Fu.current=c,pt!==null)throw Error(t(261));return Ct=null,Ot=0,Tt}function yT(){for(;pt!==null;)Zg(pt)}function _T(){for(;pt!==null&&!$l();)Zg(pt)}function Zg(r){var s=ry(r.alternate,r,gn);r.memoizedProps=r.pendingProps,s===null?ey(r):pt=s,kd.current=null}function ey(r){var s=r;do{var a=s.alternate;if(r=s.return,(s.flags&32768)===0){if(a=cT(a,s,gn),a!==null){pt=a;return}}else{if(a=hT(a,s),a!==null){a.flags&=32767,pt=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{Tt=6,pt=null;return}}if(s=s.sibling,s!==null){pt=s;return}pt=s=r}while(s!==null);Tt===0&&(Tt=5)}function vs(r,s,a){var c=Oe,d=Cn.transition;try{Cn.transition=null,Oe=1,vT(r,s,a,c)}finally{Cn.transition=d,Oe=c}return null}function vT(r,s,a,c){do No();while(yi!==null);if((Me&6)!==0)throw Error(t(327));a=r.finishedWork;var d=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if(He(r,g),r===Ct&&(pt=Ct=null,Ot=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||zu||(zu=!0,iy(wn,function(){return No(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=Cn.transition,Cn.transition=null;var w=Oe;Oe=1;var A=Me;Me|=4,kd.current=null,fT(r,a),qg(a,r),F0(Uh),oi=!!Mh,Uh=Mh=null,r.current=a,pT(a),Eh(),Me=A,Oe=w,Cn.transition=g}else r.current=a;if(zu&&(zu=!1,yi=r,$u=d),g=r.pendingLanes,g===0&&(gi=null),Wl(a.stateNode),nn(r,Ge()),s!==null)for(c=r.onRecoverableError,a=0;a<s.length;a++)d=s[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Bu)throw Bu=!1,r=Dd,Dd=null,r;return($u&1)!==0&&r.tag!==0&&No(),g=r.pendingLanes,(g&1)!==0?r===Od?Qa++:(Qa=0,Od=r):Qa=0,di(),null}function No(){if(yi!==null){var r=ii($u),s=Cn.transition,a=Oe;try{if(Cn.transition=null,Oe=16>r?16:r,yi===null)var c=!1;else{if(r=yi,yi=null,$u=0,(Me&6)!==0)throw Error(t(331));var d=Me;for(Me|=4,ce=r.current;ce!==null;){var g=ce,w=g.child;if((ce.flags&16)!==0){var A=g.deletions;if(A!==null){for(var N=0;N<A.length;N++){var $=A[N];for(ce=$;ce!==null;){var X=ce;switch(X.tag){case 0:case 11:case 15:Wa(8,X,g)}var Y=X.child;if(Y!==null)Y.return=X,ce=Y;else for(;ce!==null;){X=ce;var Q=X.sibling,le=X.return;if(Fg(X),X===$){ce=null;break}if(Q!==null){Q.return=le,ce=Q;break}ce=le}}}var fe=g.alternate;if(fe!==null){var pe=fe.child;if(pe!==null){fe.child=null;do{var ut=pe.sibling;pe.sibling=null,pe=ut}while(pe!==null)}}ce=g}}if((g.subtreeFlags&2064)!==0&&w!==null)w.return=g,ce=w;else e:for(;ce!==null;){if(g=ce,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Wa(9,g,g.return)}var F=g.sibling;if(F!==null){F.return=g.return,ce=F;break e}ce=g.return}}var O=r.current;for(ce=O;ce!==null;){w=ce;var j=w.child;if((w.subtreeFlags&2064)!==0&&j!==null)j.return=w,ce=j;else e:for(w=O;ce!==null;){if(A=ce,(A.flags&2048)!==0)try{switch(A.tag){case 0:case 11:case 15:Uu(9,A)}}catch(me){st(A,A.return,me)}if(A===w){ce=null;break e}var Z=A.sibling;if(Z!==null){Z.return=A.return,ce=Z;break e}ce=A.return}}if(Me=d,di(),cn&&typeof cn.onPostCommitFiberRoot=="function")try{cn.onPostCommitFiberRoot(ns,r)}catch{}c=!0}return c}finally{Oe=a,Cn.transition=s}}return!1}function ty(r,s,a){s=Ro(a,s),s=vg(r,s,1),r=pi(r,s,1),s=Kt(),r!==null&&(ni(r,1,s),nn(r,s))}function st(r,s,a){if(r.tag===3)ty(r,r,a);else for(;s!==null;){if(s.tag===3){ty(s,r,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(gi===null||!gi.has(c))){r=Ro(a,r),r=wg(s,r,1),s=pi(s,r,1),r=Kt(),s!==null&&(ni(s,1,r),nn(s,r));break}}s=s.return}}function wT(r,s,a){var c=r.pingCache;c!==null&&c.delete(s),s=Kt(),r.pingedLanes|=r.suspendedLanes&a,Ct===r&&(Ot&a)===a&&(Tt===4||Tt===3&&(Ot&130023424)===Ot&&500>Ge()-xd?_s(r,0):Nd|=a),nn(r,s)}function ny(r,s){s===0&&((r.mode&1)===0?s=1:(s=Ys,Ys<<=1,(Ys&130023424)===0&&(Ys=4194304)));var a=Kt();r=Lr(r,s),r!==null&&(ni(r,s,a),nn(r,a))}function ET(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),ny(r,a)}function TT(r,s){var a=0;switch(r.tag){case 13:var c=r.stateNode,d=r.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=r.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),ny(r,a)}var ry;ry=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||Yt.current)en=!0;else{if((r.lanes&a)===0&&(s.flags&128)===0)return en=!1,uT(r,s,a);en=(r.flags&131072)!==0}else en=!1,et&&(s.flags&1048576)!==0&&Lm(s,Eu,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;Lu(r,s),r=s.pendingProps;var d=_o(s,Mt.current);So(s,a),d=ld(null,s,c,r,d,a);var g=ud();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Zt(c)?(g=!0,_u(s)):g=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,td(s),d.updater=bu,s.stateNode=d,d._reactInternals=s,md(s,c,r,a),s=vd(null,s,c,!0,g,a)):(s.tag=0,et&&g&&Hh(s),Gt(null,s,d,a),s=s.child),s;case 16:c=s.elementType;e:{switch(Lu(r,s),r=s.pendingProps,d=c._init,c=d(c._payload),s.type=c,d=s.tag=ST(c),r=qn(c,r),d){case 0:s=_d(null,s,c,r,a);break e;case 1:s=kg(null,s,c,r,a);break e;case 11:s=Sg(null,s,c,r,a);break e;case 14:s=Ag(null,s,c,qn(c.type,r),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:qn(c,d),_d(r,s,c,d,a);case 1:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:qn(c,d),kg(r,s,c,d,a);case 3:e:{if(Ng(s),r===null)throw Error(t(387));c=s.pendingProps,g=s.memoizedState,d=g.element,Hm(r,s),Cu(s,c,null,a);var w=s.memoizedState;if(c=w.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){d=Ro(Error(t(423)),s),s=xg(r,s,c,a,d);break e}else if(c!==d){d=Ro(Error(t(424)),s),s=xg(r,s,c,a,d);break e}else for(mn=ui(s.stateNode.containerInfo.firstChild),pn=s,et=!0,$n=null,a=$m(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Eo(),c===d){s=Ur(r,s,a);break e}Gt(r,s,c,a)}s=s.child}return s;case 5:return Km(s),r===null&&Kh(s),c=s.type,d=s.pendingProps,g=r!==null?r.memoizedProps:null,w=d.children,Fh(c,d)?w=null:g!==null&&Fh(c,g)&&(s.flags|=32),Pg(r,s),Gt(r,s,w,a),s.child;case 6:return r===null&&Kh(s),null;case 13:return Dg(r,s,a);case 4:return nd(s,s.stateNode.containerInfo),c=s.pendingProps,r===null?s.child=To(s,null,c,a):Gt(r,s,c,a),s.child;case 11:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:qn(c,d),Sg(r,s,c,d,a);case 7:return Gt(r,s,s.pendingProps,a),s.child;case 8:return Gt(r,s,s.pendingProps.children,a),s.child;case 12:return Gt(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,d=s.pendingProps,g=s.memoizedProps,w=d.value,Ke(Su,c._currentValue),c._currentValue=w,g!==null)if(zn(g.value,w)){if(g.children===d.children&&!Yt.current){s=Ur(r,s,a);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var A=g.dependencies;if(A!==null){w=g.child;for(var N=A.firstContext;N!==null;){if(N.context===c){if(g.tag===1){N=Mr(-1,a&-a),N.tag=2;var $=g.updateQueue;if($!==null){$=$.shared;var X=$.pending;X===null?N.next=N:(N.next=X.next,X.next=N),$.pending=N}}g.lanes|=a,N=g.alternate,N!==null&&(N.lanes|=a),Zh(g.return,a,s),A.lanes|=a;break}N=N.next}}else if(g.tag===10)w=g.type===s.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(t(341));w.lanes|=a,A=w.alternate,A!==null&&(A.lanes|=a),Zh(w,a,s),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===s){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}Gt(r,s,d.children,a),s=s.child}return s;case 9:return d=s.type,c=s.pendingProps.children,So(s,a),d=An(d),c=c(d),s.flags|=1,Gt(r,s,c,a),s.child;case 14:return c=s.type,d=qn(c,s.pendingProps),d=qn(c.type,d),Ag(r,s,c,d,a);case 15:return Rg(r,s,s.type,s.pendingProps,a);case 17:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:qn(c,d),Lu(r,s),s.tag=1,Zt(c)?(r=!0,_u(s)):r=!1,So(s,a),yg(s,c,d),md(s,c,d,a),vd(null,s,c,!0,r,a);case 19:return bg(r,s,a);case 22:return Cg(r,s,a)}throw Error(t(156,s.tag))};function iy(r,s){return Xs(r,s)}function IT(r,s,a,c){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(r,s,a,c){return new IT(r,s,a,c)}function Fd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function ST(r){if(typeof r=="function")return Fd(r)?1:0;if(r!=null){if(r=r.$$typeof,r===M)return 11;if(r===qe)return 14}return 2}function wi(r,s){var a=r.alternate;return a===null?(a=Pn(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Gu(r,s,a,c,d,g){var w=2;if(c=r,typeof r=="function")Fd(r)&&(w=1);else if(typeof r=="string")w=5;else e:switch(r){case x:return ws(a.children,d,g,s);case S:w=8,d|=8;break;case C:return r=Pn(12,a,s,d|2),r.elementType=C,r.lanes=g,r;case R:return r=Pn(13,a,s,d),r.elementType=R,r.lanes=g,r;case $e:return r=Pn(19,a,s,d),r.elementType=$e,r.lanes=g,r;case Pe:return Ku(a,d,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case k:w=10;break e;case V:w=9;break e;case M:w=11;break e;case qe:w=14;break e;case ze:w=16,c=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=Pn(w,a,s,d),s.elementType=r,s.type=c,s.lanes=g,s}function ws(r,s,a,c){return r=Pn(7,r,c,s),r.lanes=a,r}function Ku(r,s,a,c){return r=Pn(22,r,c,s),r.elementType=Pe,r.lanes=a,r.stateNode={isHidden:!1},r}function jd(r,s,a){return r=Pn(6,r,null,s),r.lanes=a,r}function Bd(r,s,a){return s=Pn(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function AT(r,s,a,c,d){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ti(0),this.expirationTimes=ti(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ti(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function zd(r,s,a,c,d,g,w,A,N){return r=new AT(r,s,a,A,N),s===1?(s=1,g===!0&&(s|=8)):s=0,g=Pn(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},td(g),r}function RT(r,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:he,key:c==null?null:""+c,children:r,containerInfo:s,implementation:a}}function sy(r){if(!r)return hi;r=r._reactInternals;e:{if(Vn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Zt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(Zt(a))return Om(r,a,s)}return s}function oy(r,s,a,c,d,g,w,A,N){return r=zd(a,c,!0,r,d,g,w,A,N),r.context=sy(null),a=r.current,c=Kt(),d=_i(a),g=Mr(c,d),g.callback=s??null,pi(a,g,d),r.current.lanes=d,ni(r,d,c),nn(r,c),r}function Qu(r,s,a,c){var d=s.current,g=Kt(),w=_i(d);return a=sy(a),s.context===null?s.context=a:s.pendingContext=a,s=Mr(g,w),s.payload={element:r},c=c===void 0?null:c,c!==null&&(s.callback=c),r=pi(d,s,w),r!==null&&(Gn(r,d,w,g),Ru(r,d,w)),w}function Xu(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function ay(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function $d(r,s){ay(r,s),(r=r.alternate)&&ay(r,s)}function CT(){return null}var ly=typeof reportError=="function"?reportError:function(r){console.error(r)};function qd(r){this._internalRoot=r}Ju.prototype.render=qd.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));Qu(r,s,null,null)},Ju.prototype.unmount=qd.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;ys(function(){Qu(null,r,null,null)}),s[Dr]=null}};function Ju(r){this._internalRoot=r}Ju.prototype.unstable_scheduleHydration=function(r){if(r){var s=Jl();r={blockedOn:null,target:r,priority:s};for(var a=0;a<nr.length&&s!==0&&s<nr[a].priority;a++);nr.splice(a,0,r),a===0&&eu(r)}};function Hd(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Yu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function uy(){}function PT(r,s,a,c,d){if(d){if(typeof c=="function"){var g=c;c=function(){var $=Xu(w);g.call($)}}var w=oy(s,c,r,0,null,!1,!1,"",uy);return r._reactRootContainer=w,r[Dr]=w.current,Oa(r.nodeType===8?r.parentNode:r),ys(),w}for(;d=r.lastChild;)r.removeChild(d);if(typeof c=="function"){var A=c;c=function(){var $=Xu(N);A.call($)}}var N=zd(r,0,!1,null,null,!1,!1,"",uy);return r._reactRootContainer=N,r[Dr]=N.current,Oa(r.nodeType===8?r.parentNode:r),ys(function(){Qu(s,N,a,c)}),N}function Zu(r,s,a,c,d){var g=a._reactRootContainer;if(g){var w=g;if(typeof d=="function"){var A=d;d=function(){var N=Xu(w);A.call(N)}}Qu(s,w,r,d)}else w=PT(a,s,r,d,c);return Xu(w)}Ql=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=ei(s.pendingLanes);a!==0&&(ri(s,a|1),nn(s,Ge()),(Me&6)===0&&(ko=Ge()+500,di()))}break;case 13:ys(function(){var c=Lr(r,1);if(c!==null){var d=Kt();Gn(c,r,1,d)}}),$d(r,1)}},Zs=function(r){if(r.tag===13){var s=Lr(r,134217728);if(s!==null){var a=Kt();Gn(s,r,134217728,a)}$d(r,134217728)}},Xl=function(r){if(r.tag===13){var s=_i(r),a=Lr(r,s);if(a!==null){var c=Kt();Gn(a,r,s,c)}$d(r,s)}},Jl=function(){return Oe},Yl=function(r,s){var a=Oe;try{return Oe=r,s()}finally{Oe=a}},qs=function(r,s,a){switch(s){case"input":if(ia(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==r&&c.form===r.form){var d=gu(c);if(!d)throw Error(t(90));Us(c),ia(c,d)}}}break;case"textarea":zs(r,a);break;case"select":s=a.value,s!=null&&Sr(r,!!a.multiple,s,!1)}},Ji=Ld,pa=ys;var kT={usingClientEntryPoint:!1,Events:[La,go,gu,er,fa,Ld]},Xa={findFiberByHostInstance:us,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},NT={bundleType:Xa.bundleType,version:Xa.version,rendererPackageName:Xa.rendererPackageName,rendererConfig:Xa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:se.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=ya(r),r===null?null:r.stateNode},findFiberByHostInstance:Xa.findFiberByHostInstance||CT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ec.isDisabled&&ec.supportsFiber)try{ns=ec.inject(NT),cn=ec}catch{}}return rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kT,rn.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hd(s))throw Error(t(200));return RT(r,s,null,a)},rn.createRoot=function(r,s){if(!Hd(r))throw Error(t(299));var a=!1,c="",d=ly;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=zd(r,1,!1,null,null,a,!1,c,d),r[Dr]=s.current,Oa(r.nodeType===8?r.parentNode:r),new qd(s)},rn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=ya(s),r=r===null?null:r.stateNode,r},rn.flushSync=function(r){return ys(r)},rn.hydrate=function(r,s,a){if(!Yu(s))throw Error(t(200));return Zu(null,r,s,!0,a)},rn.hydrateRoot=function(r,s,a){if(!Hd(r))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,g="",w=ly;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),s=oy(s,null,r,1,a??null,d,!1,g,w),r[Dr]=s.current,Oa(r),c)for(r=0;r<c.length;r++)a=c[r],d=a._getVersion,d=d(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,d]:s.mutableSourceEagerHydrationData.push(a,d);return new Ju(s)},rn.render=function(r,s,a){if(!Yu(s))throw Error(t(200));return Zu(null,r,s,!1,a)},rn.unmountComponentAtNode=function(r){if(!Yu(r))throw Error(t(40));return r._reactRootContainer?(ys(function(){Zu(null,null,r,!1,function(){r._reactRootContainer=null,r[Dr]=null})}),!0):!1},rn.unstable_batchedUpdates=Ld,rn.unstable_renderSubtreeIntoContainer=function(r,s,a,c){if(!Yu(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Zu(r,s,a,!1,c)},rn.version="18.3.1-next-f1338f8080-20240426",rn}var yy;function yv(){if(yy)return Kd.exports;yy=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Kd.exports=FT(),Kd.exports}var _y;function jT(){if(_y)return tc;_y=1;var n=yv();return tc.createRoot=n.createRoot,tc.hydrateRoot=n.hydrateRoot,tc}var BT=jT();const zT=mv(BT);yv();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cl(){return cl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},cl.apply(this,arguments)}var Ci;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Ci||(Ci={}));const vy="popstate";function $T(n){n===void 0&&(n={});function e(i,o){let{pathname:l,search:h,hash:f}=i.location;return ff("",{pathname:l,search:h,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:Ec(o)}return HT(e,t,null,n)}function dt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Qf(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function qT(){return Math.random().toString(36).substr(2,8)}function wy(n,e){return{usr:n.state,key:n.key,idx:e}}function ff(n,e,t,i){return t===void 0&&(t=null),cl({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?Go(e):e,{state:t,key:e&&e.key||i||qT()})}function Ec(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Go(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function HT(n,e,t,i){i===void 0&&(i={});let{window:o=document.defaultView,v5Compat:l=!1}=i,h=o.history,f=Ci.Pop,m=null,y=v();y==null&&(y=0,h.replaceState(cl({},h.state,{idx:y}),""));function v(){return(h.state||{idx:null}).idx}function T(){f=Ci.Pop;let D=v(),ie=D==null?null:D-y;y=D,m&&m({action:f,location:q.location,delta:ie})}function I(D,ie){f=Ci.Push;let te=ff(q.location,D,ie);y=v()+1;let J=wy(te,y),se=q.createHref(te);try{h.pushState(J,"",se)}catch(Ae){if(Ae instanceof DOMException&&Ae.name==="DataCloneError")throw Ae;o.location.assign(se)}l&&m&&m({action:f,location:q.location,delta:1})}function L(D,ie){f=Ci.Replace;let te=ff(q.location,D,ie);y=v();let J=wy(te,y),se=q.createHref(te);h.replaceState(J,"",se),l&&m&&m({action:f,location:q.location,delta:0})}function B(D){let ie=o.location.origin!=="null"?o.location.origin:o.location.href,te=typeof D=="string"?D:Ec(D);return te=te.replace(/ $/,"%20"),dt(ie,"No window.location.(origin|href) available to create URL for href: "+te),new URL(te,ie)}let q={get action(){return f},get location(){return n(o,h)},listen(D){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(vy,T),m=D,()=>{o.removeEventListener(vy,T),m=null}},createHref(D){return e(o,D)},createURL:B,encodeLocation(D){let ie=B(D);return{pathname:ie.pathname,search:ie.search,hash:ie.hash}},push:I,replace:L,go(D){return h.go(D)}};return q}var Ey;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Ey||(Ey={}));function WT(n,e,t){return t===void 0&&(t="/"),GT(n,e,t)}function GT(n,e,t,i){let o=typeof e=="string"?Go(e):e,l=Xf(o.pathname||"/",t);if(l==null)return null;let h=_v(n);KT(h);let f=null;for(let m=0;f==null&&m<h.length;++m){let y=oI(l);f=rI(h[m],y)}return f}function _v(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let o=(l,h,f)=>{let m={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:h,route:l};m.relativePath.startsWith("/")&&(dt(m.relativePath.startsWith(i),'Absolute route path "'+m.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),m.relativePath=m.relativePath.slice(i.length));let y=ki([i,m.relativePath]),v=t.concat(m);l.children&&l.children.length>0&&(dt(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),_v(l.children,e,v,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:tI(y,l.index),routesMeta:v})};return n.forEach((l,h)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,h);else for(let m of vv(l.path))o(l,h,m)}),e}function vv(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let h=vv(i.join("/")),f=[];return f.push(...h.map(m=>m===""?l:[l,m].join("/"))),o&&f.push(...h),f.map(m=>n.startsWith("/")&&m===""?"/":m)}function KT(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:nI(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const QT=/^:[\w-]+$/,XT=3,JT=2,YT=1,ZT=10,eI=-2,Ty=n=>n==="*";function tI(n,e){let t=n.split("/"),i=t.length;return t.some(Ty)&&(i+=eI),e&&(i+=JT),t.filter(o=>!Ty(o)).reduce((o,l)=>o+(QT.test(l)?XT:l===""?YT:ZT),i)}function nI(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function rI(n,e,t){let{routesMeta:i}=n,o={},l="/",h=[];for(let f=0;f<i.length;++f){let m=i[f],y=f===i.length-1,v=l==="/"?e:e.slice(l.length)||"/",T=iI({path:m.relativePath,caseSensitive:m.caseSensitive,end:y},v),I=m.route;if(!T)return null;Object.assign(o,T.params),h.push({params:o,pathname:ki([l,T.pathname]),pathnameBase:hI(ki([l,T.pathnameBase])),route:I}),T.pathnameBase!=="/"&&(l=ki([l,T.pathnameBase]))}return h}function iI(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=sI(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],h=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:i.reduce((y,v,T)=>{let{paramName:I,isOptional:L}=v;if(I==="*"){let q=f[T]||"";h=l.slice(0,l.length-q.length).replace(/(.)\/+$/,"$1")}const B=f[T];return L&&!B?y[I]=void 0:y[I]=(B||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:h,pattern:n}}function sI(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Qf(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,f,m)=>(i.push({paramName:f,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function oI(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Qf(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function Xf(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}const aI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,lI=n=>aI.test(n);function uI(n,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?Go(n):n,l;if(t)if(lI(t))l=t;else{if(t.includes("//")){let h=t;t=t.replace(/\/\/+/g,"/"),Qf(!1,"Pathnames cannot have embedded double slashes - normalizing "+(h+" -> "+t))}t.startsWith("/")?l=Iy(t.substring(1),"/"):l=Iy(t,e)}else l=e;return{pathname:l,search:dI(i),hash:fI(o)}}function Iy(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Jd(n,e,t,i){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function cI(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Jf(n,e){let t=cI(n);return e?t.map((i,o)=>o===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function Yf(n,e,t,i){i===void 0&&(i=!1);let o;typeof n=="string"?o=Go(n):(o=cl({},n),dt(!o.pathname||!o.pathname.includes("?"),Jd("?","pathname","search",o)),dt(!o.pathname||!o.pathname.includes("#"),Jd("#","pathname","hash",o)),dt(!o.search||!o.search.includes("#"),Jd("#","search","hash",o)));let l=n===""||o.pathname==="",h=l?"/":o.pathname,f;if(h==null)f=t;else{let T=e.length-1;if(!i&&h.startsWith("..")){let I=h.split("/");for(;I[0]==="..";)I.shift(),T-=1;o.pathname=I.join("/")}f=T>=0?e[T]:"/"}let m=uI(o,f),y=h&&h!=="/"&&h.endsWith("/"),v=(l||h===".")&&t.endsWith("/");return!m.pathname.endsWith("/")&&(y||v)&&(m.pathname+="/"),m}const ki=n=>n.join("/").replace(/\/\/+/g,"/"),hI=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),dI=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,fI=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function pI(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const wv=["post","put","patch","delete"];new Set(wv);const mI=["get",...wv];new Set(mI);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hl(){return hl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},hl.apply(this,arguments)}const Zf=K.createContext(null),gI=K.createContext(null),$i=K.createContext(null),$c=K.createContext(null),qi=K.createContext({outlet:null,matches:[],isDataRoute:!1}),Ev=K.createContext(null);function yI(n,e){let{relative:t}=e===void 0?{}:e;Ko()||dt(!1);let{basename:i,navigator:o}=K.useContext($i),{hash:l,pathname:h,search:f}=Iv(n,{relative:t}),m=h;return i!=="/"&&(m=h==="/"?i:ki([i,h])),o.createHref({pathname:m,search:f,hash:l})}function Ko(){return K.useContext($c)!=null}function Il(){return Ko()||dt(!1),K.useContext($c).location}function Tv(n){K.useContext($i).static||K.useLayoutEffect(n)}function Sl(){let{isDataRoute:n}=K.useContext(qi);return n?NI():_I()}function _I(){Ko()||dt(!1);let n=K.useContext(Zf),{basename:e,future:t,navigator:i}=K.useContext($i),{matches:o}=K.useContext(qi),{pathname:l}=Il(),h=JSON.stringify(Jf(o,t.v7_relativeSplatPath)),f=K.useRef(!1);return Tv(()=>{f.current=!0}),K.useCallback(function(y,v){if(v===void 0&&(v={}),!f.current)return;if(typeof y=="number"){i.go(y);return}let T=Yf(y,JSON.parse(h),l,v.relative==="path");n==null&&e!=="/"&&(T.pathname=T.pathname==="/"?e:ki([e,T.pathname])),(v.replace?i.replace:i.push)(T,v.state,v)},[e,i,h,l,n])}function Iv(n,e){let{relative:t}=e===void 0?{}:e,{future:i}=K.useContext($i),{matches:o}=K.useContext(qi),{pathname:l}=Il(),h=JSON.stringify(Jf(o,i.v7_relativeSplatPath));return K.useMemo(()=>Yf(n,JSON.parse(h),l,t==="path"),[n,h,l,t])}function vI(n,e){return wI(n,e)}function wI(n,e,t,i){Ko()||dt(!1);let{navigator:o}=K.useContext($i),{matches:l}=K.useContext(qi),h=l[l.length-1],f=h?h.params:{};h&&h.pathname;let m=h?h.pathnameBase:"/";h&&h.route;let y=Il(),v;if(e){var T;let D=typeof e=="string"?Go(e):e;m==="/"||(T=D.pathname)!=null&&T.startsWith(m)||dt(!1),v=D}else v=y;let I=v.pathname||"/",L=I;if(m!=="/"){let D=m.replace(/^\//,"").split("/");L="/"+I.replace(/^\//,"").split("/").slice(D.length).join("/")}let B=WT(n,{pathname:L}),q=AI(B&&B.map(D=>Object.assign({},D,{params:Object.assign({},f,D.params),pathname:ki([m,o.encodeLocation?o.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?m:ki([m,o.encodeLocation?o.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),l,t,i);return e&&q?K.createElement($c.Provider,{value:{location:hl({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:Ci.Pop}},q):q}function EI(){let n=kI(),e=pI(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return K.createElement(K.Fragment,null,K.createElement("h2",null,"Unexpected Application Error!"),K.createElement("h3",{style:{fontStyle:"italic"}},e),t?K.createElement("pre",{style:o},t):null,null)}const TI=K.createElement(EI,null);class II extends K.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?K.createElement(qi.Provider,{value:this.props.routeContext},K.createElement(Ev.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function SI(n){let{routeContext:e,match:t,children:i}=n,o=K.useContext(Zf);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),K.createElement(qi.Provider,{value:e},i)}function AI(n,e,t,i){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),n==null){var l;if(!t)return null;if(t.errors)n=t.matches;else if((l=i)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let h=n,f=(o=t)==null?void 0:o.errors;if(f!=null){let v=h.findIndex(T=>T.route.id&&(f==null?void 0:f[T.route.id])!==void 0);v>=0||dt(!1),h=h.slice(0,Math.min(h.length,v+1))}let m=!1,y=-1;if(t&&i&&i.v7_partialHydration)for(let v=0;v<h.length;v++){let T=h[v];if((T.route.HydrateFallback||T.route.hydrateFallbackElement)&&(y=v),T.route.id){let{loaderData:I,errors:L}=t,B=T.route.loader&&I[T.route.id]===void 0&&(!L||L[T.route.id]===void 0);if(T.route.lazy||B){m=!0,y>=0?h=h.slice(0,y+1):h=[h[0]];break}}}return h.reduceRight((v,T,I)=>{let L,B=!1,q=null,D=null;t&&(L=f&&T.route.id?f[T.route.id]:void 0,q=T.route.errorElement||TI,m&&(y<0&&I===0?(xI("route-fallback"),B=!0,D=null):y===I&&(B=!0,D=T.route.hydrateFallbackElement||null)));let ie=e.concat(h.slice(0,I+1)),te=()=>{let J;return L?J=q:B?J=D:T.route.Component?J=K.createElement(T.route.Component,null):T.route.element?J=T.route.element:J=v,K.createElement(SI,{match:T,routeContext:{outlet:v,matches:ie,isDataRoute:t!=null},children:J})};return t&&(T.route.ErrorBoundary||T.route.errorElement||I===0)?K.createElement(II,{location:t.location,revalidation:t.revalidation,component:q,error:L,children:te(),routeContext:{outlet:null,matches:ie,isDataRoute:!0}}):te()},null)}var Sv=(function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n})(Sv||{}),Av=(function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n})(Av||{});function RI(n){let e=K.useContext(Zf);return e||dt(!1),e}function CI(n){let e=K.useContext(gI);return e||dt(!1),e}function PI(n){let e=K.useContext(qi);return e||dt(!1),e}function Rv(n){let e=PI(),t=e.matches[e.matches.length-1];return t.route.id||dt(!1),t.route.id}function kI(){var n;let e=K.useContext(Ev),t=CI(),i=Rv();return e!==void 0?e:(n=t.errors)==null?void 0:n[i]}function NI(){let{router:n}=RI(Sv.UseNavigateStable),e=Rv(Av.UseNavigateStable),t=K.useRef(!1);return Tv(()=>{t.current=!0}),K.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?n.navigate(o):n.navigate(o,hl({fromRouteId:e},l)))},[n,e])}const Sy={};function xI(n,e,t){Sy[n]||(Sy[n]=!0)}function DI(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function Nn(n){let{to:e,replace:t,state:i,relative:o}=n;Ko()||dt(!1);let{future:l,static:h}=K.useContext($i),{matches:f}=K.useContext(qi),{pathname:m}=Il(),y=Sl(),v=Yf(e,Jf(f,l.v7_relativeSplatPath),m,o==="path"),T=JSON.stringify(v);return K.useEffect(()=>y(JSON.parse(T),{replace:t,state:i,relative:o}),[y,T,o,t,i]),null}function Ts(n){dt(!1)}function OI(n){let{basename:e="/",children:t=null,location:i,navigationType:o=Ci.Pop,navigator:l,static:h=!1,future:f}=n;Ko()&&dt(!1);let m=e.replace(/^\/*/,"/"),y=K.useMemo(()=>({basename:m,navigator:l,static:h,future:hl({v7_relativeSplatPath:!1},f)}),[m,f,l,h]);typeof i=="string"&&(i=Go(i));let{pathname:v="/",search:T="",hash:I="",state:L=null,key:B="default"}=i,q=K.useMemo(()=>{let D=Xf(v,m);return D==null?null:{location:{pathname:D,search:T,hash:I,state:L,key:B},navigationType:o}},[m,v,T,I,L,B,o]);return q==null?null:K.createElement($i.Provider,{value:y},K.createElement($c.Provider,{children:t,value:q}))}function bI(n){let{children:e,location:t}=n;return vI(pf(e),t)}new Promise(()=>{});function pf(n,e){e===void 0&&(e=[]);let t=[];return K.Children.forEach(n,(i,o)=>{if(!K.isValidElement(i))return;let l=[...e,o];if(i.type===K.Fragment){t.push.apply(t,pf(i.props.children,l));return}i.type!==Ts&&dt(!1),!i.props.index||!i.props.children||dt(!1);let h={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(h.children=pf(i.props.children,l)),t.push(h)}),t}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mf(){return mf=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},mf.apply(this,arguments)}function VI(n,e){if(n==null)return{};var t={},i=Object.keys(n),o,l;for(l=0;l<i.length;l++)o=i[l],!(e.indexOf(o)>=0)&&(t[o]=n[o]);return t}function LI(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function MI(n,e){return n.button===0&&(!e||e==="_self")&&!LI(n)}const UI=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],FI="6";try{window.__reactRouterVersion=FI}catch{}const jI="startTransition",Ay=LT[jI];function BI(n){let{basename:e,children:t,future:i,window:o}=n,l=K.useRef();l.current==null&&(l.current=$T({window:o,v5Compat:!0}));let h=l.current,[f,m]=K.useState({action:h.action,location:h.location}),{v7_startTransition:y}=i||{},v=K.useCallback(T=>{y&&Ay?Ay(()=>m(T)):m(T)},[m,y]);return K.useLayoutEffect(()=>h.listen(v),[h,v]),K.useEffect(()=>DI(i),[i]),K.createElement(OI,{basename:e,children:t,location:f.location,navigationType:f.action,navigator:h,future:i})}const zI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",$I=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qI=K.forwardRef(function(e,t){let{onClick:i,relative:o,reloadDocument:l,replace:h,state:f,target:m,to:y,preventScrollReset:v,viewTransition:T}=e,I=VI(e,UI),{basename:L}=K.useContext($i),B,q=!1;if(typeof y=="string"&&$I.test(y)&&(B=y,zI))try{let J=new URL(window.location.href),se=y.startsWith("//")?new URL(J.protocol+y):new URL(y),Ae=Xf(se.pathname,L);se.origin===J.origin&&Ae!=null?y=Ae+se.search+se.hash:q=!0}catch{}let D=yI(y,{relative:o}),ie=HI(y,{replace:h,state:f,target:m,preventScrollReset:v,relative:o,viewTransition:T});function te(J){i&&i(J),J.defaultPrevented||ie(J)}return K.createElement("a",mf({},I,{href:B||D,onClick:q||l?i:te,ref:t,target:m}))});var Ry;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(Ry||(Ry={}));var Cy;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(Cy||(Cy={}));function HI(n,e){let{target:t,replace:i,state:o,preventScrollReset:l,relative:h,viewTransition:f}=e===void 0?{}:e,m=Sl(),y=Il(),v=Iv(n,{relative:h});return K.useCallback(T=>{if(MI(T,t)){T.preventDefault();let I=i!==void 0?i:Ec(y)===Ec(v);m(n,{replace:I,state:o,preventScrollReset:l,relative:h,viewTransition:f})}},[y,m,v,i,o,t,n,l,h,f])}const Cv=K.createContext(null);function WI({children:n}){const[e,t]=K.useState([]),i=K.useCallback((l,h)=>{const f=Date.now()+Math.floor(Math.random()*1e3);t(m=>[...m,{id:f,type:l,message:h}]),window.setTimeout(()=>{t(m=>m.filter(y=>y.id!==f))},3200)},[]),o=K.useMemo(()=>({showSuccess:l=>i("success",l),showError:l=>i("error",l)}),[i]);return b.jsxs(Cv.Provider,{value:o,children:[n,b.jsx("div",{className:"toast-wrap","aria-live":"polite","aria-atomic":"true",children:e.map(l=>b.jsx("div",{className:`toast toast-${l.type}`,children:l.message},l.id))})]})}function qc(){const n=K.useContext(Cv);if(!n)throw new Error("useToast must be used within ToastProvider");return n}const GI=()=>{};var Py={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},KI=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],h=n[t++],f=n[t++],m=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(m>>10)),e[i++]=String.fromCharCode(56320+(m&1023))}else{const l=n[t++],h=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},kv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],h=o+1<n.length,f=h?n[o+1]:0,m=o+2<n.length,y=m?n[o+2]:0,v=l>>2,T=(l&3)<<4|f>>4;let I=(f&15)<<2|y>>6,L=y&63;m||(L=64,h||(I=64)),i.push(t[v],t[T],t[I],t[L])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Pv(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):KI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],f=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const T=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||f==null||y==null||T==null)throw new QI;const I=l<<2|f>>4;if(i.push(I),y!==64){const L=f<<4&240|y>>2;if(i.push(L),T!==64){const B=y<<6&192|T;i.push(B)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class QI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const XI=function(n){const e=Pv(n);return kv.encodeByteArray(e,!0)},Tc=function(n){return XI(n).replace(/\./g,"")},Nv=function(n){try{return kv.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function JI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const YI=()=>JI().__FIREBASE_DEFAULTS__,ZI=()=>{if(typeof process>"u"||typeof Py>"u")return;const n=Py.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},eS=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Nv(n[1]);return e&&JSON.parse(e)},Hc=()=>{try{return GI()||YI()||ZI()||eS()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},xv=n=>{var e,t;return(t=(e=Hc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},ep=n=>{const e=xv(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Dv=()=>{var n;return(n=Hc())===null||n===void 0?void 0:n.config},Ov=n=>{var e;return(e=Hc())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Xr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Wc(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function bv(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Tc(JSON.stringify(t)),Tc(JSON.stringify(h)),""].join(".")}const rl={};function nS(){const n={prod:[],emulator:[]};for(const e of Object.keys(rl))rl[e]?n.emulator.push(e):n.prod.push(e);return n}function rS(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let ky=!1;function Gc(n,e){if(typeof window>"u"||typeof document>"u"||!Xr(window.location.host)||rl[n]===e||rl[n]||ky)return;rl[n]=e;function t(I){return`__firebase__banner__${I}`}const i="__firebase__banner",l=nS().prod.length>0;function h(){const I=document.getElementById(i);I&&I.remove()}function f(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function m(I,L){I.setAttribute("width","24"),I.setAttribute("id",L),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function y(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{ky=!0,h()},I}function v(I,L){I.setAttribute("id",L),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function T(){const I=rS(i),L=t("text"),B=document.getElementById(L)||document.createElement("span"),q=t("learnmore"),D=document.getElementById(q)||document.createElement("a"),ie=t("preprendIcon"),te=document.getElementById(ie)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const J=I.element;f(J),v(D,q);const se=y();m(te,ie),J.append(te,B,D,se),document.body.appendChild(J)}l?(B.innerText="Preview backend disconnected.",te.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(te.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,B.innerText="Preview backend running in this workspace."),B.setAttribute("id",L)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function iS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qt())}function sS(){var n;const e=(n=Hc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function oS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function aS(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function lS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uS(){const n=qt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function cS(){return!sS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function hS(){try{return typeof indexedDB=="object"}catch{return!1}}function dS(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS="FirebaseError";class Yn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=fS,Object.setPrototypeOf(this,Yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Al.prototype.create)}}class Al{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?pS(l,i):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new Yn(o,f,i)}}function pS(n,e){return n.replace(mS,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const mS=/\{\$([^}]+)}/g;function gS(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ps(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],h=e[o];if(Ny(l)&&Ny(h)){if(!Ps(l,h))return!1}else if(l!==h)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function Ny(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function yS(n,e){const t=new _S(n,e);return t.subscribe.bind(t)}class _S{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");vS(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Yd),o.error===void 0&&(o.error=Yd),o.complete===void 0&&(o.complete=Yd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vS(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Yd(){}/**
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
 */function tt(n){return n&&n._delegate?n._delegate:n}class qr{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Is="[DEFAULT]";/**
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
 */class wS{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new tS;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(TS(e))try{this.getOrInitializeService({instanceIdentifier:Is})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=Is){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Is){return this.instances.has(e)}getOptions(e=Is){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&h.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:ES(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Is){return this.component?this.component.multipleInstances?e:Is:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ES(n){return n===Is?void 0:n}function TS(n){return n.instantiationMode==="EAGER"}/**
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
 */class IS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new wS(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(xe||(xe={}));const SS={debug:xe.DEBUG,verbose:xe.VERBOSE,info:xe.INFO,warn:xe.WARN,error:xe.ERROR,silent:xe.SILENT},AS=xe.INFO,RS={[xe.DEBUG]:"log",[xe.VERBOSE]:"log",[xe.INFO]:"info",[xe.WARN]:"warn",[xe.ERROR]:"error"},CS=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=RS[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class tp{constructor(e){this.name=e,this._logLevel=AS,this._logHandler=CS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in xe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?SS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,xe.DEBUG,...e),this._logHandler(this,xe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,xe.VERBOSE,...e),this._logHandler(this,xe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,xe.INFO,...e),this._logHandler(this,xe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,xe.WARN,...e),this._logHandler(this,xe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,xe.ERROR,...e),this._logHandler(this,xe.ERROR,...e)}}const PS=(n,e)=>e.some(t=>n instanceof t);let xy,Dy;function kS(){return xy||(xy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function NS(){return Dy||(Dy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vv=new WeakMap,gf=new WeakMap,Lv=new WeakMap,Zd=new WeakMap,np=new WeakMap;function xS(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",h)},l=()=>{t(Ni(n.result)),o()},h=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Vv.set(t,n)}).catch(()=>{}),np.set(e,n),e}function DS(n){if(gf.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",h),n.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",h),n.addEventListener("abort",h)});gf.set(n,e)}let yf={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return gf.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Lv.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ni(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function OS(n){yf=n(yf)}function bS(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(ef(this),e,...t);return Lv.set(i,e.sort?e.sort():[e]),Ni(i)}:NS().includes(n)?function(...e){return n.apply(ef(this),e),Ni(Vv.get(this))}:function(...e){return Ni(n.apply(ef(this),e))}}function VS(n){return typeof n=="function"?bS(n):(n instanceof IDBTransaction&&DS(n),PS(n,kS())?new Proxy(n,yf):n)}function Ni(n){if(n instanceof IDBRequest)return xS(n);if(Zd.has(n))return Zd.get(n);const e=VS(n);return e!==n&&(Zd.set(n,e),np.set(e,n)),e}const ef=n=>np.get(n);function LS(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const h=indexedDB.open(n,e),f=Ni(h);return i&&h.addEventListener("upgradeneeded",m=>{i(Ni(h.result),m.oldVersion,m.newVersion,Ni(h.transaction),m)}),t&&h.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),f.then(m=>{l&&m.addEventListener("close",()=>l()),o&&m.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),f}const MS=["get","getKey","getAll","getAllKeys","count"],US=["put","add","delete","clear"],tf=new Map;function Oy(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(tf.get(e))return tf.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=US.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||MS.includes(t)))return;const l=async function(h,...f){const m=this.transaction(h,o?"readwrite":"readonly");let y=m.store;return i&&(y=y.index(f.shift())),(await Promise.all([y[t](...f),o&&m.done]))[0]};return tf.set(e,l),l}OS(n=>({...n,get:(e,t,i)=>Oy(e,t)||n.get(e,t,i),has:(e,t)=>!!Oy(e,t)||n.has(e,t)}));/**
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
 */class FS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(jS(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function jS(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _f="@firebase/app",by="0.13.2";/**
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
 */const Hr=new tp("@firebase/app"),BS="@firebase/app-compat",zS="@firebase/analytics-compat",$S="@firebase/analytics",qS="@firebase/app-check-compat",HS="@firebase/app-check",WS="@firebase/auth",GS="@firebase/auth-compat",KS="@firebase/database",QS="@firebase/data-connect",XS="@firebase/database-compat",JS="@firebase/functions",YS="@firebase/functions-compat",ZS="@firebase/installations",eA="@firebase/installations-compat",tA="@firebase/messaging",nA="@firebase/messaging-compat",rA="@firebase/performance",iA="@firebase/performance-compat",sA="@firebase/remote-config",oA="@firebase/remote-config-compat",aA="@firebase/storage",lA="@firebase/storage-compat",uA="@firebase/firestore",cA="@firebase/ai",hA="@firebase/firestore-compat",dA="firebase",fA="11.10.0";/**
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
 */const vf="[DEFAULT]",pA={[_f]:"fire-core",[BS]:"fire-core-compat",[$S]:"fire-analytics",[zS]:"fire-analytics-compat",[HS]:"fire-app-check",[qS]:"fire-app-check-compat",[WS]:"fire-auth",[GS]:"fire-auth-compat",[KS]:"fire-rtdb",[QS]:"fire-data-connect",[XS]:"fire-rtdb-compat",[JS]:"fire-fn",[YS]:"fire-fn-compat",[ZS]:"fire-iid",[eA]:"fire-iid-compat",[tA]:"fire-fcm",[nA]:"fire-fcm-compat",[rA]:"fire-perf",[iA]:"fire-perf-compat",[sA]:"fire-rc",[oA]:"fire-rc-compat",[aA]:"fire-gcs",[lA]:"fire-gcs-compat",[uA]:"fire-fst",[hA]:"fire-fst-compat",[cA]:"fire-vertex","fire-js":"fire-js",[dA]:"fire-js-all"};/**
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
 */const Ic=new Map,mA=new Map,wf=new Map;function Vy(n,e){try{n.container.addComponent(e)}catch(t){Hr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Vi(n){const e=n.name;if(wf.has(e))return Hr.debug(`There were multiple attempts to register component ${e}.`),!1;wf.set(e,n);for(const t of Ic.values())Vy(t,n);for(const t of mA.values())Vy(t,n);return!0}function Cl(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function on(n){return n==null?!1:n.settings!==void 0}/**
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
 */const gA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xi=new Al("app","Firebase",gA);/**
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
 */class yA{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new qr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xi.create("app-deleted",{appName:this._name})}}/**
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
 */const Os=fA;function Mv(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:vf,automaticDataCollectionEnabled:!0},e),o=i.name;if(typeof o!="string"||!o)throw xi.create("bad-app-name",{appName:String(o)});if(t||(t=Dv()),!t)throw xi.create("no-options");const l=Ic.get(o);if(l){if(Ps(t,l.options)&&Ps(i,l.config))return l;throw xi.create("duplicate-app",{appName:o})}const h=new IS(o);for(const m of wf.values())h.addComponent(m);const f=new yA(t,i,h);return Ic.set(o,f),f}function Kc(n=vf){const e=Ic.get(n);if(!e&&n===vf&&Dv())return Mv();if(!e)throw xi.create("no-app",{appName:n});return e}function xn(n,e,t){var i;let o=(i=pA[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&f.push("and"),h&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Hr.warn(f.join(" "));return}Vi(new qr(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const _A="firebase-heartbeat-database",vA=1,dl="firebase-heartbeat-store";let nf=null;function Uv(){return nf||(nf=LS(_A,vA,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(dl)}catch(t){console.warn(t)}}}}).catch(n=>{throw xi.create("idb-open",{originalErrorMessage:n.message})})),nf}async function wA(n){try{const t=(await Uv()).transaction(dl),i=await t.objectStore(dl).get(Fv(n));return await t.done,i}catch(e){if(e instanceof Yn)Hr.warn(e.message);else{const t=xi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Hr.warn(t.message)}}}async function Ly(n,e){try{const i=(await Uv()).transaction(dl,"readwrite");await i.objectStore(dl).put(e,Fv(n)),await i.done}catch(t){if(t instanceof Yn)Hr.warn(t.message);else{const i=xi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Hr.warn(i.message)}}}function Fv(n){return`${n.name}!${n.options.appId}`}/**
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
 */const EA=1024,TA=30;class IA{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new AA(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=My();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>TA){const h=RA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Hr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=My(),{heartbeatsToSend:i,unsentEntries:o}=SA(this._heartbeatsCache.heartbeats),l=Tc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Hr.warn(t),""}}}function My(){return new Date().toISOString().substring(0,10)}function SA(n,e=EA){const t=[];let i=n.slice();for(const o of n){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),Uy(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Uy(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class AA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hS()?dS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await wA(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ly(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ly(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Uy(n){return Tc(JSON.stringify({version:2,heartbeats:n})).length}function RA(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function CA(n){Vi(new qr("platform-logger",e=>new FS(e),"PRIVATE")),Vi(new qr("heartbeat",e=>new IA(e),"PRIVATE")),xn(_f,by,n),xn(_f,by,"esm2017"),xn("fire-js","")}CA("");var PA="firebase",kA="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xn(PA,kA,"app");function rp(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function jv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const NA=jv,Bv=new Al("auth","Firebase",jv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc=new tp("@firebase/auth");function xA(n,...e){Sc.logLevel<=xe.WARN&&Sc.warn(`Auth (${Os}): ${n}`,...e)}function hc(n,...e){Sc.logLevel<=xe.ERROR&&Sc.error(`Auth (${Os}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(n,...e){throw sp(n,...e)}function Xn(n,...e){return sp(n,...e)}function ip(n,e,t){const i=Object.assign(Object.assign({},NA()),{[e]:t});return new Al("auth","Firebase",i).create(e,{appName:n.name})}function Di(n){return ip(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function zv(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&vr(n,"argument-error"),ip(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function sp(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Bv.create(n,...e)}function Ie(n,e,...t){if(!n)throw sp(e,...t)}function Br(n){const e="INTERNAL ASSERTION FAILED: "+n;throw hc(e),new Error(e)}function Wr(n,e){n||Br(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function DA(){return Fy()==="http:"||Fy()==="https:"}function Fy(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(DA()||aS()||"connection"in navigator)?navigator.onLine:!0}function bA(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Wr(t>e,"Short delay should be less than long delay!"),this.isMobile=iS()||lS()}get(){return OA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(n,e){Wr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Br("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Br("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Br("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],MA=new Pl(3e4,6e4);function ap(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Qo(n,e,t,i,o={}){return qv(n,o,async()=>{let l={},h={};i&&(e==="GET"?h=i:l={body:JSON.stringify(i)});const f=Rl(Object.assign({key:n.config.apiKey},h)).slice(1),m=await n._getAdditionalHeaders();m["Content-Type"]="application/json",n.languageCode&&(m["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:m},l);return oS()||(y.referrerPolicy="no-referrer"),n.emulatorConfig&&Xr(n.emulatorConfig.host)&&(y.credentials="include"),$v.fetch()(await Hv(n,n.config.apiHost,t,f),y)})}async function qv(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},VA),e);try{const o=new FA(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw nc(n,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[m,y]=f.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw nc(n,"credential-already-in-use",h);if(m==="EMAIL_EXISTS")throw nc(n,"email-already-in-use",h);if(m==="USER_DISABLED")throw nc(n,"user-disabled",h);const v=i[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw ip(n,v,y);vr(n,v)}}catch(o){if(o instanceof Yn)throw o;vr(n,"network-request-failed",{message:String(o)})}}async function UA(n,e,t,i,o={}){const l=await Qo(n,e,t,i,o);return"mfaPendingCredential"in l&&vr(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function Hv(n,e,t,i){const o=`${e}${t}?${i}`,l=n,h=l.config.emulator?op(n.config,o):`${n.config.apiScheme}://${o}`;return LA.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}class FA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Xn(this.auth,"network-request-failed")),MA.get())})}}function nc(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=Xn(n,e,i);return o.customData._tokenResponse=t,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jA(n,e){return Qo(n,"POST","/v1/accounts:delete",e)}async function Ac(n,e){return Qo(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function BA(n,e=!1){const t=tt(n),i=await t.getIdToken(e),o=lp(i);Ie(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:il(rf(o.auth_time)),issuedAtTime:il(rf(o.iat)),expirationTime:il(rf(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function rf(n){return Number(n)*1e3}function lp(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return hc("JWT malformed, contained fewer than 3 sections"),null;try{const o=Nv(t);return o?JSON.parse(o):(hc("Failed to decode base64 JWT payload"),null)}catch(o){return hc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function jy(n){const e=lp(n);return Ie(e,"internal-error"),Ie(typeof e.exp<"u","internal-error"),Ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fl(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Yn&&zA(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function zA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=il(this.lastLoginAt),this.creationTime=il(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Rc(n){var e;const t=n.auth,i=await n.getIdToken(),o=await fl(n,Ac(t,{idToken:i}));Ie(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?Wv(l.providerUserInfo):[],f=HA(n.providerData,h),m=n.isAnonymous,y=!(n.email&&l.passwordHash)&&!(f!=null&&f.length),v=m?y:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new Tf(l.createdAt,l.lastLoginAt),isAnonymous:v};Object.assign(n,T)}async function qA(n){const e=tt(n);await Rc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function HA(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function Wv(n){return n.map(e=>{var{providerId:t}=e,i=rp(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WA(n,e){const t=await qv(n,{},async()=>{const i=Rl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,h=await Hv(n,o,"/v1/token",`key=${l}`),f=await n._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:f,body:i};return n.emulatorConfig&&Xr(n.emulatorConfig.host)&&(m.credentials="include"),$v.fetch()(h,m)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function GA(n,e){return Qo(n,"POST","/v2/accounts:revokeToken",ap(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ie(e.idToken,"internal-error"),Ie(typeof e.idToken<"u","internal-error"),Ie(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ie(e.length!==0,"internal-error");const t=jy(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await WA(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,h=new Vo;return i&&(Ie(typeof i=="string","internal-error",{appName:e}),h.refreshToken=i),o&&(Ie(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(Ie(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vo,this.toJSON())}_performRefresh(){return Br("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(n,e){Ie(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Qn{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=rp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $A(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Tf(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await fl(this,this.stsTokenManager.getToken(this.auth,e));return Ie(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return BA(this,e)}reload(){return qA(this)}_assign(e){this!==e&&(Ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Qn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Rc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(on(this.auth.app))return Promise.reject(Di(this.auth));const e=await this.getIdToken();return await fl(this,jA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,h,f,m,y,v;const T=(i=t.displayName)!==null&&i!==void 0?i:void 0,I=(o=t.email)!==null&&o!==void 0?o:void 0,L=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,B=(h=t.photoURL)!==null&&h!==void 0?h:void 0,q=(f=t.tenantId)!==null&&f!==void 0?f:void 0,D=(m=t._redirectEventId)!==null&&m!==void 0?m:void 0,ie=(y=t.createdAt)!==null&&y!==void 0?y:void 0,te=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:J,emailVerified:se,isAnonymous:Ae,providerData:he,stsTokenManager:x}=t;Ie(J&&x,e,"internal-error");const S=Vo.fromJSON(this.name,x);Ie(typeof J=="string",e,"internal-error"),Ti(T,e.name),Ti(I,e.name),Ie(typeof se=="boolean",e,"internal-error"),Ie(typeof Ae=="boolean",e,"internal-error"),Ti(L,e.name),Ti(B,e.name),Ti(q,e.name),Ti(D,e.name),Ti(ie,e.name),Ti(te,e.name);const C=new Qn({uid:J,auth:e,email:I,emailVerified:se,displayName:T,isAnonymous:Ae,photoURL:B,phoneNumber:L,tenantId:q,stsTokenManager:S,createdAt:ie,lastLoginAt:te});return he&&Array.isArray(he)&&(C.providerData=he.map(k=>Object.assign({},k))),D&&(C._redirectEventId=D),C}static async _fromIdTokenResponse(e,t,i=!1){const o=new Vo;o.updateFromServerResponse(t);const l=new Qn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await Rc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];Ie(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?Wv(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new Vo;f.updateFromIdToken(i);const m=new Qn({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Tf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(m,y),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By=new Map;function zr(n){Wr(n instanceof Function,"Expected a class definition");let e=By.get(n);return e?(Wr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,By.set(n,e),e)}/**
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
 */class Gv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Gv.type="NONE";const zy=Gv;/**
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
 */function dc(n,e,t){return`firebase:${n}:${e}:${t}`}class Lo{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=dc(this.userKey,o.apiKey,l),this.fullPersistenceKey=dc("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ac(this.auth,{idToken:e}).catch(()=>{});return t?Qn._fromGetAccountInfoResponse(this.auth,t,e):null}return Qn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Lo(zr(zy),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||zr(zy);const h=dc(i,e.config.apiKey,e.name);let f=null;for(const y of t)try{const v=await y._get(h);if(v){let T;if(typeof v=="string"){const I=await Ac(e,{idToken:v}).catch(()=>{});if(!I)break;T=await Qn._fromGetAccountInfoResponse(e,I,v)}else T=Qn._fromJSON(e,v);y!==l&&(f=T),l=y;break}}catch{}const m=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!m.length?new Lo(l,e,i):(l=m[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(h)}catch{}})),new Lo(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $y(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Jv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Kv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zv(e))return"Blackberry";if(ew(e))return"Webos";if(Qv(e))return"Safari";if((e.includes("chrome/")||Xv(e))&&!e.includes("edge/"))return"Chrome";if(Yv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Kv(n=qt()){return/firefox\//i.test(n)}function Qv(n=qt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Xv(n=qt()){return/crios\//i.test(n)}function Jv(n=qt()){return/iemobile/i.test(n)}function Yv(n=qt()){return/android/i.test(n)}function Zv(n=qt()){return/blackberry/i.test(n)}function ew(n=qt()){return/webos/i.test(n)}function up(n=qt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function KA(n=qt()){var e;return up(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function QA(){return uS()&&document.documentMode===10}function tw(n=qt()){return up(n)||Yv(n)||ew(n)||Zv(n)||/windows phone/i.test(n)||Jv(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nw(n,e=[]){let t;switch(n){case"Browser":t=$y(qt());break;case"Worker":t=`${$y(qt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Os}/${i}`}/**
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
 */class XA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((h,f)=>{try{const m=e(l);h(m)}catch(m){f(m)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function JA(n,e={}){return Qo(n,"GET","/v2/passwordPolicy",ap(n,e))}/**
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
 */const YA=6;class ZA{constructor(e){var t,i,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:YA,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,h,f;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,m),this.validatePasswordCharacterOptions(e,m),m.isValid&&(m.isValid=(t=m.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),m.isValid&&(m.isValid=(i=m.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),m.isValid&&(m.isValid=(o=m.containsLowercaseLetter)!==null&&o!==void 0?o:!0),m.isValid&&(m.isValid=(l=m.containsUppercaseLetter)!==null&&l!==void 0?l:!0),m.isValid&&(m.isValid=(h=m.containsNumericCharacter)!==null&&h!==void 0?h:!0),m.isValid&&(m.isValid=(f=m.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),m}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qy(this),this.idTokenSubscription=new qy(this),this.beforeStateQueue=new XA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=zr(t)),this._initializationPromise=this.queue(async()=>{var i,o,l;if(!this._deleted&&(this.persistenceManager=await Lo.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ac(this,{idToken:e}),i=await Qn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(on(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,m=await this.tryRedirectSignIn(e);(!h||h===f)&&(m!=null&&m.user)&&(o=m.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Rc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(on(this.app))return Promise.reject(Di(this));const t=e?tt(e):null;return t&&Ie(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return on(this.app)?Promise.reject(Di(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return on(this.app)?Promise.reject(Di(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(zr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await JA(this),t=new ZA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Al("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await GA(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&zr(e)||this._popupRedirectResolver;Ie(t,this,"argument-error"),this.redirectPersistenceManager=await Lo.create(this,[zr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ie(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,i,o);return()=>{h=!0,m()}}else{const m=e.addObserver(t);return()=>{h=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(on(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&xA(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Xo(n){return tt(n)}class qy{constructor(e){this.auth=e,this.observer=null,this.addObserver=yS(t=>this.observer=t)}get next(){return Ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function tR(n){cp=n}function nR(n){return cp.loadJS(n)}function rR(){return cp.gapiScript}function iR(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sR(n,e){const t=Cl(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Ps(l,e??{}))return o;vr(o,"already-initialized")}return t.initialize({options:e})}function oR(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(zr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function aR(n,e,t){const i=Xo(n);Ie(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=rw(e),{host:h,port:f}=lR(e),m=f===null?"":`:${f}`,y={url:`${l}//${h}${m}/`},v=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){Ie(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),Ie(Ps(y,i.config.emulator)&&Ps(v,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=y,i.emulatorConfig=v,i.settings.appVerificationDisabledForTesting=!0,Xr(h)?(Wc(`${l}//${h}${m}`),Gc("Auth",!0)):uR()}function rw(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function lR(n){const e=rw(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:Hy(i.substr(l.length+1))}}else{const[l,h]=i.split(":");return{host:l,port:Hy(h)}}}function Hy(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function uR(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Br("not implemented")}_getIdTokenResponse(e){return Br("not implemented")}_linkToIdToken(e,t){return Br("not implemented")}_getReauthenticationResolver(e){return Br("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mo(n,e){return UA(n,"POST","/v1/accounts:signInWithIdp",ap(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR="http://localhost";class ks extends iw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ks(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):vr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=rp(t,["providerId","signInMethod"]);if(!i||!o)return null;const h=new ks(i,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Mo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Mo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Mo(e,t)}buildRequest(){const e={requestUri:cR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Rl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class kl extends Qc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends kl{constructor(){super("facebook.com")}static credential(e){return ks._fromParams({providerId:Ii.PROVIDER_ID,signInMethod:Ii.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ii.credentialFromTaggedObject(e)}static credentialFromError(e){return Ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ii.credential(e.oauthAccessToken)}catch{return null}}}Ii.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ii.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr extends kl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ks._fromParams({providerId:jr.PROVIDER_ID,signInMethod:jr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return jr.credentialFromTaggedObject(e)}static credentialFromError(e){return jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return jr.credential(t,i)}catch{return null}}}jr.GOOGLE_SIGN_IN_METHOD="google.com";jr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si extends kl{constructor(){super("github.com")}static credential(e){return ks._fromParams({providerId:Si.PROVIDER_ID,signInMethod:Si.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Si.credentialFromTaggedObject(e)}static credentialFromError(e){return Si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Si.credential(e.oauthAccessToken)}catch{return null}}}Si.GITHUB_SIGN_IN_METHOD="github.com";Si.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai extends kl{constructor(){super("twitter.com")}static credential(e,t){return ks._fromParams({providerId:Ai.PROVIDER_ID,signInMethod:Ai.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ai.credentialFromTaggedObject(e)}static credentialFromError(e){return Ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Ai.credential(t,i)}catch{return null}}}Ai.TWITTER_SIGN_IN_METHOD="twitter.com";Ai.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await Qn._fromIdTokenResponse(e,i,o),h=Wy(i);return new jo({user:l,providerId:h,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=Wy(i);return new jo({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function Wy(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc extends Yn{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,Cc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new Cc(e,t,i,o)}}function sw(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Cc._fromErrorAndOperation(n,l,e,i):l})}async function hR(n,e,t=!1){const i=await fl(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return jo._forOperation(n,"link",i)}/**
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
 */async function dR(n,e,t=!1){const{auth:i}=n;if(on(i.app))return Promise.reject(Di(i));const o="reauthenticate";try{const l=await fl(n,sw(i,o,e,n),t);Ie(l.idToken,i,"internal-error");const h=lp(l.idToken);Ie(h,i,"internal-error");const{sub:f}=h;return Ie(n.uid===f,i,"user-mismatch"),jo._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&vr(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fR(n,e,t=!1){if(on(n.app))return Promise.reject(Di(n));const i="signIn",o=await sw(n,i,e),l=await jo._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pR(n,e){return tt(n).setPersistence(e)}function ow(n,e,t,i){return tt(n).onIdTokenChanged(e,t,i)}function mR(n,e,t){return tt(n).beforeAuthStateChanged(e,t)}function Xc(n){return tt(n).signOut()}const Pc="__sak";/**
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
 */class aw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Pc,"1"),this.storage.removeItem(Pc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR=1e3,yR=10;class lw extends aw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=tw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,m)=>{this.notifyListeners(h,m)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(i);!t&&this.localCache[i]===h||this.notifyListeners(i,h)},l=this.storage.getItem(i);QA()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,yR):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},gR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}lw.type="LOCAL";const uw=lw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw extends aw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}cw.type="SESSION";const hw=cw;/**
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
 */function _R(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Jc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Jc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(h).map(async y=>y(t.origin,l)),m=await _R(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Jc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class vR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,m)=>{const y=hp("",20);o.port1.start();const v=setTimeout(()=>{m(new Error("unsupported_event"))},i);h={messageChannel:o,onMessage(T){const I=T;if(I.data.eventId===y)switch(I.data.status){case"ack":clearTimeout(v),l=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(I.data.response);break;default:clearTimeout(v),clearTimeout(l),m(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(){return window}function wR(n){fr().location.href=n}/**
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
 */function dw(){return typeof fr().WorkerGlobalScope<"u"&&typeof fr().importScripts=="function"}async function ER(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function TR(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function IR(){return dw()?self:null}/**
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
 */const fw="firebaseLocalStorageDb",SR=1,kc="firebaseLocalStorage",pw="fbase_key";class Nl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Yc(n,e){return n.transaction([kc],e?"readwrite":"readonly").objectStore(kc)}function AR(){const n=indexedDB.deleteDatabase(fw);return new Nl(n).toPromise()}function If(){const n=indexedDB.open(fw,SR);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(kc,{keyPath:pw})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(kc)?e(i):(i.close(),await AR(),e(await If()))})})}async function Gy(n,e,t){const i=Yc(n,!0).put({[pw]:e,value:t});return new Nl(i).toPromise()}async function RR(n,e){const t=Yc(n,!1).get(e),i=await new Nl(t).toPromise();return i===void 0?null:i.value}function Ky(n,e){const t=Yc(n,!0).delete(e);return new Nl(t).toPromise()}const CR=800,PR=3;class mw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await If(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>PR)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jc._getInstance(IR()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await ER(),!this.activeServiceWorker)return;this.sender=new vR(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||TR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await If();return await Gy(e,Pc,"1"),await Ky(e,Pc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Gy(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>RR(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ky(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Yc(o,!1).getAll();return new Nl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),CR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mw.type="LOCAL";const kR=mw;new Pl(3e4,6e4);/**
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
 */function dp(n,e){return e?zr(e):(Ie(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class fp extends iw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Mo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Mo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Mo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function NR(n){return fR(n.auth,new fp(n),n.bypassAuthState)}function xR(n){const{auth:e,user:t}=n;return Ie(t,e,"internal-error"),dR(t,new fp(n),n.bypassAuthState)}async function DR(n){const{auth:e,user:t}=n;return Ie(t,e,"internal-error"),hR(t,new fp(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const m={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(m))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return NR;case"linkViaPopup":case"linkViaRedirect":return DR;case"reauthViaPopup":case"reauthViaRedirect":return xR;default:vr(this.auth,"internal-error")}}resolve(e){Wr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR=new Pl(2e3,1e4);async function bR(n,e,t){if(on(n.app))return Promise.reject(Xn(n,"operation-not-supported-in-this-environment"));const i=Xo(n);zv(n,e,Qc);const o=dp(i,t);return new Ss(i,"signInViaPopup",e,o).executeNotNull()}class Ss extends gw{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,Ss.currentPopupAction&&Ss.currentPopupAction.cancel(),Ss.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ie(e,this.auth,"internal-error"),e}async onExecution(){Wr(this.filter.length===1,"Popup operations only handle one event");const e=hp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Xn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ss.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,OR.get())};e()}}Ss.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR="pendingRedirect",fc=new Map;class LR extends gw{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=fc.get(this.auth._key());if(!e){try{const i=await MR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}fc.set(this.auth._key(),e)}return this.bypassAuthState||fc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function MR(n,e){const t=_w(e),i=yw(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}async function UR(n,e){return yw(n)._set(_w(e),"true")}function FR(n,e){fc.set(n._key(),e)}function yw(n){return zr(n._redirectPersistence)}function _w(n){return dc(VR,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jR(n,e,t){return BR(n,e,t)}async function BR(n,e,t){if(on(n.app))return Promise.reject(Di(n));const i=Xo(n);zv(n,e,Qc),await i._initializationPromise;const o=dp(i,t);return await UR(o,i),o._openRedirect(i,e,"signInViaRedirect")}async function zR(n,e){return await Xo(n)._initializationPromise,vw(n,e,!1)}async function vw(n,e,t=!1){if(on(n.app))return Promise.reject(Di(n));const i=Xo(n),o=dp(i,e),h=await new LR(i,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $R=600*1e3;class qR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!HR(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!ww(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Xn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$R&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qy(e))}saveEventToCache(e){this.cachedEventUids.add(Qy(e)),this.lastProcessedEventTime=Date.now()}}function Qy(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ww({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function HR(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ww(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WR(n,e={}){return Qo(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,KR=/^https?/;async function QR(n){if(n.config.emulator)return;const{authorizedDomains:e}=await WR(n);for(const t of e)try{if(XR(t))return}catch{}vr(n,"unauthorized-domain")}function XR(n){const e=Ef(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const h=new URL(n);return h.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===i}if(!KR.test(t))return!1;if(GR.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const JR=new Pl(3e4,6e4);function Xy(){const n=fr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function YR(n){return new Promise((e,t)=>{var i,o,l;function h(){Xy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xy(),t(Xn(n,"network-request-failed"))},timeout:JR.get()})}if(!((o=(i=fr().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=fr().gapi)===null||l===void 0)&&l.load)h();else{const f=iR("iframefcb");return fr()[f]=()=>{gapi.load?h():t(Xn(n,"network-request-failed"))},nR(`${rR()}?onload=${f}`).catch(m=>t(m))}}).catch(e=>{throw pc=null,e})}let pc=null;function ZR(n){return pc=pc||YR(n),pc}/**
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
 */const e1=new Pl(5e3,15e3),t1="__/auth/iframe",n1="emulator/auth/iframe",r1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},i1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function s1(n){const e=n.config;Ie(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?op(e,n1):`https://${n.config.authDomain}/${t1}`,i={apiKey:e.apiKey,appName:n.name,v:Os},o=i1.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${Rl(i).slice(1)}`}async function o1(n){const e=await ZR(n),t=fr().gapi;return Ie(t,n,"internal-error"),e.open({where:document.body,url:s1(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:r1,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const h=Xn(n,"network-request-failed"),f=fr().setTimeout(()=>{l(h)},e1.get());function m(){fr().clearTimeout(f),o(i)}i.ping(m).then(m,()=>{l(h)})}))}/**
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
 */const a1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},l1=500,u1=600,c1="_blank",h1="http://localhost";class Jy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function d1(n,e,t,i=l1,o=u1){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const m=Object.assign(Object.assign({},a1),{width:i.toString(),height:o.toString(),top:l,left:h}),y=qt().toLowerCase();t&&(f=Xv(y)?c1:t),Kv(y)&&(e=e||h1,m.scrollbars="yes");const v=Object.entries(m).reduce((I,[L,B])=>`${I}${L}=${B},`,"");if(KA(y)&&f!=="_self")return f1(e||"",f),new Jy(null);const T=window.open(e||"",f,v);Ie(T,n,"popup-blocked");try{T.focus()}catch{}return new Jy(T)}function f1(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const p1="__/auth/handler",m1="emulator/auth/handler",g1=encodeURIComponent("fac");async function Yy(n,e,t,i,o,l){Ie(n.config.authDomain,n,"auth-domain-config-required"),Ie(n.config.apiKey,n,"invalid-api-key");const h={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Os,eventId:o};if(e instanceof Qc){e.setDefaultLanguage(n.languageCode),h.providerId=e.providerId||"",gS(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,T]of Object.entries({}))h[v]=T}if(e instanceof kl){const v=e.getScopes().filter(T=>T!=="");v.length>0&&(h.scopes=v.join(","))}n.tenantId&&(h.tid=n.tenantId);const f=h;for(const v of Object.keys(f))f[v]===void 0&&delete f[v];const m=await n._getAppCheckToken(),y=m?`#${g1}=${encodeURIComponent(m)}`:"";return`${y1(n)}?${Rl(f).slice(1)}${y}`}function y1({config:n}){return n.emulator?op(n,m1):`https://${n.authDomain}/${p1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf="webStorageSupport";class _1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hw,this._completeRedirectFn=vw,this._overrideRedirectResult=FR}async _openPopup(e,t,i,o){var l;Wr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await Yy(e,t,i,Ef(),o);return d1(e,h,hp())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await Yy(e,t,i,Ef(),o);return wR(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Wr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await o1(e),i=new qR(e);return t.register("authEvent",o=>(Ie(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(sf,{type:sf},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[sf];h!==void 0&&t(!!h),vr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=QR(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return tw()||Qv()||up()}}const v1=_1;var Zy="@firebase/auth",e_="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E1(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function T1(n){Vi(new qr("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=i.options;Ie(h&&!h.includes(":"),"invalid-api-key",{appName:i.name});const m={apiKey:h,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nw(n)},y=new eR(i,o,l,m);return oR(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Vi(new qr("auth-internal",e=>{const t=Xo(e.getProvider("auth").getImmediate());return(i=>new w1(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),xn(Zy,e_,E1(n)),xn(Zy,e_,"esm2017")}/**
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
 */const I1=300,S1=Ov("authIdTokenMaxAge")||I1;let t_=null;const A1=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>S1)return;const o=t==null?void 0:t.token;t_!==o&&(t_=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function R1(n=Kc()){const e=Cl(n,"auth");if(e.isInitialized())return e.getImmediate();const t=sR(n,{popupRedirectResolver:v1,persistence:[kR,uw,hw]}),i=Ov("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const h=A1(l.toString());mR(t,h,()=>h(t.currentUser)),ow(t,f=>h(f))}}const o=xv("auth");return o&&aR(t,`http://${o}`),t}function C1(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}tR({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=Xn("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",C1().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});T1("Browser");var n_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Oi,Ew;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,S){function C(){}C.prototype=S.prototype,x.D=S.prototype,x.prototype=new C,x.prototype.constructor=x,x.C=function(k,V,M){for(var R=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)R[$e-2]=arguments[$e];return S.prototype[V].apply(k,R)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(x,S,C){C||(C=0);var k=Array(16);if(typeof S=="string")for(var V=0;16>V;++V)k[V]=S.charCodeAt(C++)|S.charCodeAt(C++)<<8|S.charCodeAt(C++)<<16|S.charCodeAt(C++)<<24;else for(V=0;16>V;++V)k[V]=S[C++]|S[C++]<<8|S[C++]<<16|S[C++]<<24;S=x.g[0],C=x.g[1],V=x.g[2];var M=x.g[3],R=S+(M^C&(V^M))+k[0]+3614090360&4294967295;S=C+(R<<7&4294967295|R>>>25),R=M+(V^S&(C^V))+k[1]+3905402710&4294967295,M=S+(R<<12&4294967295|R>>>20),R=V+(C^M&(S^C))+k[2]+606105819&4294967295,V=M+(R<<17&4294967295|R>>>15),R=C+(S^V&(M^S))+k[3]+3250441966&4294967295,C=V+(R<<22&4294967295|R>>>10),R=S+(M^C&(V^M))+k[4]+4118548399&4294967295,S=C+(R<<7&4294967295|R>>>25),R=M+(V^S&(C^V))+k[5]+1200080426&4294967295,M=S+(R<<12&4294967295|R>>>20),R=V+(C^M&(S^C))+k[6]+2821735955&4294967295,V=M+(R<<17&4294967295|R>>>15),R=C+(S^V&(M^S))+k[7]+4249261313&4294967295,C=V+(R<<22&4294967295|R>>>10),R=S+(M^C&(V^M))+k[8]+1770035416&4294967295,S=C+(R<<7&4294967295|R>>>25),R=M+(V^S&(C^V))+k[9]+2336552879&4294967295,M=S+(R<<12&4294967295|R>>>20),R=V+(C^M&(S^C))+k[10]+4294925233&4294967295,V=M+(R<<17&4294967295|R>>>15),R=C+(S^V&(M^S))+k[11]+2304563134&4294967295,C=V+(R<<22&4294967295|R>>>10),R=S+(M^C&(V^M))+k[12]+1804603682&4294967295,S=C+(R<<7&4294967295|R>>>25),R=M+(V^S&(C^V))+k[13]+4254626195&4294967295,M=S+(R<<12&4294967295|R>>>20),R=V+(C^M&(S^C))+k[14]+2792965006&4294967295,V=M+(R<<17&4294967295|R>>>15),R=C+(S^V&(M^S))+k[15]+1236535329&4294967295,C=V+(R<<22&4294967295|R>>>10),R=S+(V^M&(C^V))+k[1]+4129170786&4294967295,S=C+(R<<5&4294967295|R>>>27),R=M+(C^V&(S^C))+k[6]+3225465664&4294967295,M=S+(R<<9&4294967295|R>>>23),R=V+(S^C&(M^S))+k[11]+643717713&4294967295,V=M+(R<<14&4294967295|R>>>18),R=C+(M^S&(V^M))+k[0]+3921069994&4294967295,C=V+(R<<20&4294967295|R>>>12),R=S+(V^M&(C^V))+k[5]+3593408605&4294967295,S=C+(R<<5&4294967295|R>>>27),R=M+(C^V&(S^C))+k[10]+38016083&4294967295,M=S+(R<<9&4294967295|R>>>23),R=V+(S^C&(M^S))+k[15]+3634488961&4294967295,V=M+(R<<14&4294967295|R>>>18),R=C+(M^S&(V^M))+k[4]+3889429448&4294967295,C=V+(R<<20&4294967295|R>>>12),R=S+(V^M&(C^V))+k[9]+568446438&4294967295,S=C+(R<<5&4294967295|R>>>27),R=M+(C^V&(S^C))+k[14]+3275163606&4294967295,M=S+(R<<9&4294967295|R>>>23),R=V+(S^C&(M^S))+k[3]+4107603335&4294967295,V=M+(R<<14&4294967295|R>>>18),R=C+(M^S&(V^M))+k[8]+1163531501&4294967295,C=V+(R<<20&4294967295|R>>>12),R=S+(V^M&(C^V))+k[13]+2850285829&4294967295,S=C+(R<<5&4294967295|R>>>27),R=M+(C^V&(S^C))+k[2]+4243563512&4294967295,M=S+(R<<9&4294967295|R>>>23),R=V+(S^C&(M^S))+k[7]+1735328473&4294967295,V=M+(R<<14&4294967295|R>>>18),R=C+(M^S&(V^M))+k[12]+2368359562&4294967295,C=V+(R<<20&4294967295|R>>>12),R=S+(C^V^M)+k[5]+4294588738&4294967295,S=C+(R<<4&4294967295|R>>>28),R=M+(S^C^V)+k[8]+2272392833&4294967295,M=S+(R<<11&4294967295|R>>>21),R=V+(M^S^C)+k[11]+1839030562&4294967295,V=M+(R<<16&4294967295|R>>>16),R=C+(V^M^S)+k[14]+4259657740&4294967295,C=V+(R<<23&4294967295|R>>>9),R=S+(C^V^M)+k[1]+2763975236&4294967295,S=C+(R<<4&4294967295|R>>>28),R=M+(S^C^V)+k[4]+1272893353&4294967295,M=S+(R<<11&4294967295|R>>>21),R=V+(M^S^C)+k[7]+4139469664&4294967295,V=M+(R<<16&4294967295|R>>>16),R=C+(V^M^S)+k[10]+3200236656&4294967295,C=V+(R<<23&4294967295|R>>>9),R=S+(C^V^M)+k[13]+681279174&4294967295,S=C+(R<<4&4294967295|R>>>28),R=M+(S^C^V)+k[0]+3936430074&4294967295,M=S+(R<<11&4294967295|R>>>21),R=V+(M^S^C)+k[3]+3572445317&4294967295,V=M+(R<<16&4294967295|R>>>16),R=C+(V^M^S)+k[6]+76029189&4294967295,C=V+(R<<23&4294967295|R>>>9),R=S+(C^V^M)+k[9]+3654602809&4294967295,S=C+(R<<4&4294967295|R>>>28),R=M+(S^C^V)+k[12]+3873151461&4294967295,M=S+(R<<11&4294967295|R>>>21),R=V+(M^S^C)+k[15]+530742520&4294967295,V=M+(R<<16&4294967295|R>>>16),R=C+(V^M^S)+k[2]+3299628645&4294967295,C=V+(R<<23&4294967295|R>>>9),R=S+(V^(C|~M))+k[0]+4096336452&4294967295,S=C+(R<<6&4294967295|R>>>26),R=M+(C^(S|~V))+k[7]+1126891415&4294967295,M=S+(R<<10&4294967295|R>>>22),R=V+(S^(M|~C))+k[14]+2878612391&4294967295,V=M+(R<<15&4294967295|R>>>17),R=C+(M^(V|~S))+k[5]+4237533241&4294967295,C=V+(R<<21&4294967295|R>>>11),R=S+(V^(C|~M))+k[12]+1700485571&4294967295,S=C+(R<<6&4294967295|R>>>26),R=M+(C^(S|~V))+k[3]+2399980690&4294967295,M=S+(R<<10&4294967295|R>>>22),R=V+(S^(M|~C))+k[10]+4293915773&4294967295,V=M+(R<<15&4294967295|R>>>17),R=C+(M^(V|~S))+k[1]+2240044497&4294967295,C=V+(R<<21&4294967295|R>>>11),R=S+(V^(C|~M))+k[8]+1873313359&4294967295,S=C+(R<<6&4294967295|R>>>26),R=M+(C^(S|~V))+k[15]+4264355552&4294967295,M=S+(R<<10&4294967295|R>>>22),R=V+(S^(M|~C))+k[6]+2734768916&4294967295,V=M+(R<<15&4294967295|R>>>17),R=C+(M^(V|~S))+k[13]+1309151649&4294967295,C=V+(R<<21&4294967295|R>>>11),R=S+(V^(C|~M))+k[4]+4149444226&4294967295,S=C+(R<<6&4294967295|R>>>26),R=M+(C^(S|~V))+k[11]+3174756917&4294967295,M=S+(R<<10&4294967295|R>>>22),R=V+(S^(M|~C))+k[2]+718787259&4294967295,V=M+(R<<15&4294967295|R>>>17),R=C+(M^(V|~S))+k[9]+3951481745&4294967295,x.g[0]=x.g[0]+S&4294967295,x.g[1]=x.g[1]+(V+(R<<21&4294967295|R>>>11))&4294967295,x.g[2]=x.g[2]+V&4294967295,x.g[3]=x.g[3]+M&4294967295}i.prototype.u=function(x,S){S===void 0&&(S=x.length);for(var C=S-this.blockSize,k=this.B,V=this.h,M=0;M<S;){if(V==0)for(;M<=C;)o(this,x,M),M+=this.blockSize;if(typeof x=="string"){for(;M<S;)if(k[V++]=x.charCodeAt(M++),V==this.blockSize){o(this,k),V=0;break}}else for(;M<S;)if(k[V++]=x[M++],V==this.blockSize){o(this,k),V=0;break}}this.h=V,this.o+=S},i.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var S=1;S<x.length-8;++S)x[S]=0;var C=8*this.o;for(S=x.length-8;S<x.length;++S)x[S]=C&255,C/=256;for(this.u(x),x=Array(16),S=C=0;4>S;++S)for(var k=0;32>k;k+=8)x[C++]=this.g[S]>>>k&255;return x};function l(x,S){var C=f;return Object.prototype.hasOwnProperty.call(C,x)?C[x]:C[x]=S(x)}function h(x,S){this.h=S;for(var C=[],k=!0,V=x.length-1;0<=V;V--){var M=x[V]|0;k&&M==S||(C[V]=M,k=!1)}this.g=C}var f={};function m(x){return-128<=x&&128>x?l(x,function(S){return new h([S|0],0>S?-1:0)}):new h([x|0],0>x?-1:0)}function y(x){if(isNaN(x)||!isFinite(x))return T;if(0>x)return D(y(-x));for(var S=[],C=1,k=0;x>=C;k++)S[k]=x/C|0,C*=4294967296;return new h(S,0)}function v(x,S){if(x.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(x.charAt(0)=="-")return D(v(x.substring(1),S));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=y(Math.pow(S,8)),k=T,V=0;V<x.length;V+=8){var M=Math.min(8,x.length-V),R=parseInt(x.substring(V,V+M),S);8>M?(M=y(Math.pow(S,M)),k=k.j(M).add(y(R))):(k=k.j(C),k=k.add(y(R)))}return k}var T=m(0),I=m(1),L=m(16777216);n=h.prototype,n.m=function(){if(q(this))return-D(this).m();for(var x=0,S=1,C=0;C<this.g.length;C++){var k=this.i(C);x+=(0<=k?k:4294967296+k)*S,S*=4294967296}return x},n.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(B(this))return"0";if(q(this))return"-"+D(this).toString(x);for(var S=y(Math.pow(x,6)),C=this,k="";;){var V=se(C,S).g;C=ie(C,V.j(S));var M=((0<C.g.length?C.g[0]:C.h)>>>0).toString(x);if(C=V,B(C))return M+k;for(;6>M.length;)M="0"+M;k=M+k}},n.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function B(x){if(x.h!=0)return!1;for(var S=0;S<x.g.length;S++)if(x.g[S]!=0)return!1;return!0}function q(x){return x.h==-1}n.l=function(x){return x=ie(this,x),q(x)?-1:B(x)?0:1};function D(x){for(var S=x.g.length,C=[],k=0;k<S;k++)C[k]=~x.g[k];return new h(C,~x.h).add(I)}n.abs=function(){return q(this)?D(this):this},n.add=function(x){for(var S=Math.max(this.g.length,x.g.length),C=[],k=0,V=0;V<=S;V++){var M=k+(this.i(V)&65535)+(x.i(V)&65535),R=(M>>>16)+(this.i(V)>>>16)+(x.i(V)>>>16);k=R>>>16,M&=65535,R&=65535,C[V]=R<<16|M}return new h(C,C[C.length-1]&-2147483648?-1:0)};function ie(x,S){return x.add(D(S))}n.j=function(x){if(B(this)||B(x))return T;if(q(this))return q(x)?D(this).j(D(x)):D(D(this).j(x));if(q(x))return D(this.j(D(x)));if(0>this.l(L)&&0>x.l(L))return y(this.m()*x.m());for(var S=this.g.length+x.g.length,C=[],k=0;k<2*S;k++)C[k]=0;for(k=0;k<this.g.length;k++)for(var V=0;V<x.g.length;V++){var M=this.i(k)>>>16,R=this.i(k)&65535,$e=x.i(V)>>>16,qe=x.i(V)&65535;C[2*k+2*V]+=R*qe,te(C,2*k+2*V),C[2*k+2*V+1]+=M*qe,te(C,2*k+2*V+1),C[2*k+2*V+1]+=R*$e,te(C,2*k+2*V+1),C[2*k+2*V+2]+=M*$e,te(C,2*k+2*V+2)}for(k=0;k<S;k++)C[k]=C[2*k+1]<<16|C[2*k];for(k=S;k<2*S;k++)C[k]=0;return new h(C,0)};function te(x,S){for(;(x[S]&65535)!=x[S];)x[S+1]+=x[S]>>>16,x[S]&=65535,S++}function J(x,S){this.g=x,this.h=S}function se(x,S){if(B(S))throw Error("division by zero");if(B(x))return new J(T,T);if(q(x))return S=se(D(x),S),new J(D(S.g),D(S.h));if(q(S))return S=se(x,D(S)),new J(D(S.g),S.h);if(30<x.g.length){if(q(x)||q(S))throw Error("slowDivide_ only works with positive integers.");for(var C=I,k=S;0>=k.l(x);)C=Ae(C),k=Ae(k);var V=he(C,1),M=he(k,1);for(k=he(k,2),C=he(C,2);!B(k);){var R=M.add(k);0>=R.l(x)&&(V=V.add(C),M=R),k=he(k,1),C=he(C,1)}return S=ie(x,V.j(S)),new J(V,S)}for(V=T;0<=x.l(S);){for(C=Math.max(1,Math.floor(x.m()/S.m())),k=Math.ceil(Math.log(C)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),M=y(C),R=M.j(S);q(R)||0<R.l(x);)C-=k,M=y(C),R=M.j(S);B(M)&&(M=I),V=V.add(M),x=ie(x,R)}return new J(V,x)}n.A=function(x){return se(this,x).h},n.and=function(x){for(var S=Math.max(this.g.length,x.g.length),C=[],k=0;k<S;k++)C[k]=this.i(k)&x.i(k);return new h(C,this.h&x.h)},n.or=function(x){for(var S=Math.max(this.g.length,x.g.length),C=[],k=0;k<S;k++)C[k]=this.i(k)|x.i(k);return new h(C,this.h|x.h)},n.xor=function(x){for(var S=Math.max(this.g.length,x.g.length),C=[],k=0;k<S;k++)C[k]=this.i(k)^x.i(k);return new h(C,this.h^x.h)};function Ae(x){for(var S=x.g.length+1,C=[],k=0;k<S;k++)C[k]=x.i(k)<<1|x.i(k-1)>>>31;return new h(C,x.h)}function he(x,S){var C=S>>5;S%=32;for(var k=x.g.length-C,V=[],M=0;M<k;M++)V[M]=0<S?x.i(M+C)>>>S|x.i(M+C+1)<<32-S:x.i(M+C);return new h(V,x.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,Ew=i,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=y,h.fromString=v,Oi=h}).apply(typeof n_<"u"?n_:typeof self<"u"?self:typeof window<"u"?window:{});var rc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tw,Za,Iw,mc,Sf,Sw,Aw,Rw;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,_){return u==Array.prototype||u==Object.prototype||(u[p]=_.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof rc=="object"&&rc];for(var p=0;p<u.length;++p){var _=u[p];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,p){if(p)e:{var _=i;u=u.split(".");for(var E=0;E<u.length-1;E++){var U=u[E];if(!(U in _))break e;_=_[U]}u=u[u.length-1],E=_[u],p=p(E),p!=E&&p!=null&&e(_,u,{configurable:!0,writable:!0,value:p})}}function l(u,p){u instanceof String&&(u+="");var _=0,E=!1,U={next:function(){if(!E&&_<u.length){var H=_++;return{value:p(H,u[H]),done:!1}}return E=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}o("Array.prototype.values",function(u){return u||function(){return l(this,function(p,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},f=this||self;function m(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function y(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function v(u,p,_){return u.call.apply(u.bind,arguments)}function T(u,p,_){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,E),u.apply(p,U)}}return function(){return u.apply(p,arguments)}}function I(u,p,_){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:T,I.apply(null,arguments)}function L(u,p){var _=Array.prototype.slice.call(arguments,1);return function(){var E=_.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function B(u,p){function _(){}_.prototype=p.prototype,u.aa=p.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(E,U,H){for(var ne=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)ne[Be-2]=arguments[Be];return p.prototype[U].apply(E,ne)}}function q(u){const p=u.length;if(0<p){const _=Array(p);for(let E=0;E<p;E++)_[E]=u[E];return _}return[]}function D(u,p){for(let _=1;_<arguments.length;_++){const E=arguments[_];if(m(E)){const U=u.length||0,H=E.length||0;u.length=U+H;for(let ne=0;ne<H;ne++)u[U+ne]=E[ne]}else u.push(E)}}class ie{constructor(p,_){this.i=p,this.j=_,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function te(u){return/^[\s\xa0]*$/.test(u)}function J(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function se(u){return se[" "](u),u}se[" "]=function(){};var Ae=J().indexOf("Gecko")!=-1&&!(J().toLowerCase().indexOf("webkit")!=-1&&J().indexOf("Edge")==-1)&&!(J().indexOf("Trident")!=-1||J().indexOf("MSIE")!=-1)&&J().indexOf("Edge")==-1;function he(u,p,_){for(const E in u)p.call(_,u[E],E,u)}function x(u,p){for(const _ in u)p.call(void 0,u[_],_,u)}function S(u){const p={};for(const _ in u)p[_]=u[_];return p}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(u,p){let _,E;for(let U=1;U<arguments.length;U++){E=arguments[U];for(_ in E)u[_]=E[_];for(let H=0;H<C.length;H++)_=C[H],Object.prototype.hasOwnProperty.call(E,_)&&(u[_]=E[_])}}function V(u){var p=1;u=u.split(":");const _=[];for(;0<p&&u.length;)_.push(u.shift()),p--;return u.length&&_.push(u.join(":")),_}function M(u){f.setTimeout(()=>{throw u},0)}function R(){var u=ge;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class $e{constructor(){this.h=this.g=null}add(p,_){const E=qe.get();E.set(p,_),this.h?this.h.next=E:this.g=E,this.h=E}}var qe=new ie(()=>new ze,u=>u.reset());class ze{constructor(){this.next=this.g=this.h=null}set(p,_){this.h=p,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let Pe,ee=!1,ge=new $e,ae=()=>{const u=f.Promise.resolve(void 0);Pe=()=>{u.then(P)}};var P=()=>{for(var u;u=R();){try{u.h.call(u.g)}catch(_){M(_)}var p=qe;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}ee=!1};function z(){this.s=this.s,this.C=this.C}z.prototype.s=!1,z.prototype.ma=function(){this.s||(this.s=!0,this.N())},z.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function re(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}re.prototype.h=function(){this.defaultPrevented=!0};var de=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};f.addEventListener("test",_,p),f.removeEventListener("test",_,p)}catch{}return u})();function we(u,p){if(re.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(Ae){e:{try{se(p.nodeName);var U=!0;break e}catch{}U=!1}U||(p=null)}}else _=="mouseover"?p=u.fromElement:_=="mouseout"&&(p=u.toElement);this.relatedTarget=p,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:ke[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&we.aa.h.call(this)}}B(we,re);var ke={2:"touch",3:"pen",4:"mouse"};we.prototype.h=function(){we.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var be="closure_listenable_"+(1e6*Math.random()|0),Fe=0;function We(u,p,_,E,U){this.listener=u,this.proxy=null,this.src=p,this.type=_,this.capture=!!E,this.ha=U,this.key=++Fe,this.da=this.fa=!1}function St(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Tr(u){this.src=u,this.g={},this.h=0}Tr.prototype.add=function(u,p,_,E,U){var H=u.toString();u=this.g[H],u||(u=this.g[H]=[],this.h++);var ne=Jr(u,p,E,U);return-1<ne?(p=u[ne],_||(p.fa=!1)):(p=new We(p,this.src,H,!!E,U),p.fa=_,u.push(p)),p};function Us(u,p){var _=p.type;if(_ in u.g){var E=u.g[_],U=Array.prototype.indexOf.call(E,p,void 0),H;(H=0<=U)&&Array.prototype.splice.call(E,U,1),H&&(St(p),u.g[_].length==0&&(delete u.g[_],u.h--))}}function Jr(u,p,_,E){for(var U=0;U<u.length;++U){var H=u[U];if(!H.da&&H.listener==p&&H.capture==!!_&&H.ha==E)return U}return-1}var Gi="closure_lm_"+(1e6*Math.random()|0),Fs={};function ra(u,p,_,E,U){if(Array.isArray(p)){for(var H=0;H<p.length;H++)ra(u,p[H],_,E,U);return null}return _=oa(_),u&&u[be]?u.K(p,_,y(E)?!!E.capture:!1,U):ia(u,p,_,!1,E,U)}function ia(u,p,_,E,U,H){if(!p)throw Error("Invalid event type");var ne=y(U)?!!U.capture:!!U,Be=Bs(u);if(Be||(u[Gi]=Be=new Tr(u)),_=Be.add(p,_,E,ne,H),_.proxy)return _;if(E=jl(),_.proxy=E,E.src=u,E.listener=_,u.addEventListener)de||(U=ne),U===void 0&&(U=!1),u.addEventListener(p.toString(),E,U);else if(u.attachEvent)u.attachEvent(Sr(p.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return _}function jl(){function u(_){return p.call(u.src,u.listener,_)}const p=sa;return u}function js(u,p,_,E,U){if(Array.isArray(p))for(var H=0;H<p.length;H++)js(u,p[H],_,E,U);else E=y(E)?!!E.capture:!!E,_=oa(_),u&&u[be]?(u=u.i,p=String(p).toString(),p in u.g&&(H=u.g[p],_=Jr(H,_,E,U),-1<_&&(St(H[_]),Array.prototype.splice.call(H,_,1),H.length==0&&(delete u.g[p],u.h--)))):u&&(u=Bs(u))&&(p=u.g[p.toString()],u=-1,p&&(u=Jr(p,_,E,U)),(_=-1<u?p[u]:null)&&Ir(_))}function Ir(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[be])Us(p.i,u);else{var _=u.type,E=u.proxy;p.removeEventListener?p.removeEventListener(_,E,u.capture):p.detachEvent?p.detachEvent(Sr(_),E):p.addListener&&p.removeListener&&p.removeListener(E),(_=Bs(p))?(Us(_,u),_.h==0&&(_.src=null,p[Gi]=null)):St(u)}}}function Sr(u){return u in Fs?Fs[u]:Fs[u]="on"+u}function sa(u,p){if(u.da)u=!0;else{p=new we(p,this);var _=u.listener,E=u.ha||u.src;u.fa&&Ir(u),u=_.call(E,p)}return u}function Bs(u){return u=u[Gi],u instanceof Tr?u:null}var zs="__closure_events_fn_"+(1e9*Math.random()>>>0);function oa(u){return typeof u=="function"?u:(u[zs]||(u[zs]=function(p){return u.handleEvent(p)}),u[zs])}function _t(){z.call(this),this.i=new Tr(this),this.M=this,this.F=null}B(_t,z),_t.prototype[be]=!0,_t.prototype.removeEventListener=function(u,p,_,E){js(this,u,p,_,E)};function vt(u,p){var _,E=u.F;if(E)for(_=[];E;E=E.F)_.push(E);if(u=u.M,E=p.type||p,typeof p=="string")p=new re(p,u);else if(p instanceof re)p.target=p.target||u;else{var U=p;p=new re(E,u),k(p,U)}if(U=!0,_)for(var H=_.length-1;0<=H;H--){var ne=p.g=_[H];U=Ar(ne,E,!0,p)&&U}if(ne=p.g=u,U=Ar(ne,E,!0,p)&&U,U=Ar(ne,E,!1,p)&&U,_)for(H=0;H<_.length;H++)ne=p.g=_[H],U=Ar(ne,E,!1,p)&&U}_t.prototype.N=function(){if(_t.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var _=u.g[p],E=0;E<_.length;E++)St(_[E]);delete u.g[p],u.h--}}this.F=null},_t.prototype.K=function(u,p,_,E){return this.i.add(String(u),p,!1,_,E)},_t.prototype.L=function(u,p,_,E){return this.i.add(String(u),p,!0,_,E)};function Ar(u,p,_,E){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var U=!0,H=0;H<p.length;++H){var ne=p[H];if(ne&&!ne.da&&ne.capture==_){var Be=ne.listener,wt=ne.ha||ne.src;ne.fa&&Us(u.i,ne),U=Be.call(wt,E)!==!1&&U}}return U&&!E.defaultPrevented}function aa(u,p,_){if(typeof u=="function")_&&(u=I(u,_));else if(u&&typeof u.handleEvent=="function")u=I(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:f.setTimeout(u,p||0)}function Yr(u){u.g=aa(()=>{u.g=null,u.i&&(u.i=!1,Yr(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class Ki extends z{constructor(p,_){super(),this.m=p,this.l=_,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Yr(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qi(u){z.call(this),this.h=u,this.g={}}B(Qi,z);var la=[];function ua(u){he(u.g,function(p,_){this.g.hasOwnProperty(_)&&Ir(p)},u),u.g={}}Qi.prototype.N=function(){Qi.aa.N.call(this),ua(this)},Qi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ca=f.JSON.stringify,ha=f.JSON.parse,da=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function Xi(){}Xi.prototype.h=null;function $s(u){return u.h||(u.h=u.i())}function qs(){}var vn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Zn(){re.call(this,"d")}B(Zn,re);function Hs(){re.call(this,"c")}B(Hs,re);var er={},fa=null;function Ji(){return fa=fa||new _t}er.La="serverreachability";function pa(u){re.call(this,er.La,u)}B(pa,re);function Rr(u){const p=Ji();vt(p,new pa(p))}er.STAT_EVENT="statevent";function ma(u,p){re.call(this,er.STAT_EVENT,u),this.stat=p}B(ma,re);function lt(u){const p=Ji();vt(p,new ma(p,u))}er.Ma="timingevent";function Ws(u,p){re.call(this,er.Ma,u),this.size=p}B(Ws,re);function On(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},p)}function Yi(){this.g=!0}Yi.prototype.xa=function(){this.g=!1};function Zi(u,p,_,E,U,H){u.info(function(){if(u.g)if(H)for(var ne="",Be=H.split("&"),wt=0;wt<Be.length;wt++){var Ve=Be[wt].split("=");if(1<Ve.length){var At=Ve[0];Ve=Ve[1];var ft=At.split("_");ne=2<=ft.length&&ft[1]=="type"?ne+(At+"="+Ve+"&"):ne+(At+"=redacted&")}}else ne=null;else ne=H;return"XMLHTTP REQ ("+E+") [attempt "+U+"]: "+p+`
`+_+`
`+ne})}function Gs(u,p,_,E,U,H,ne){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+U+"]: "+p+`
`+_+`
`+H+" "+ne})}function bn(u,p,_,E){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+wh(u,_)+(E?" "+E:"")})}function ga(u,p){u.info(function(){return"TIMEOUT: "+p})}Yi.prototype.info=function(){};function wh(u,p){if(!u.g)return p;if(!p)return null;try{var _=JSON.parse(p);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var E=_[u];if(!(2>E.length)){var U=E[1];if(Array.isArray(U)&&!(1>U.length)){var H=U[0];if(H!="noop"&&H!="stop"&&H!="close")for(var ne=1;ne<U.length;ne++)U[ne]=""}}}}return ca(_)}catch{return p}}var Ks={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Bl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Vn;function es(){}B(es,Xi),es.prototype.g=function(){return new XMLHttpRequest},es.prototype.i=function(){return{}},Vn=new es;function Ln(u,p,_,E){this.j=u,this.i=p,this.l=_,this.R=E||1,this.U=new Qi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new zl}function zl(){this.i=null,this.g="",this.h=!1}var ya={},Qs={};function Xs(u,p,_){u.L=1,u.v=ri(hn(p)),u.m=_,u.P=!0,_a(u,null)}function _a(u,p){u.F=Date.now(),Ge(u),u.A=hn(u.v);var _=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),si(_.i,"t",E),u.C=0,_=u.j.J,u.h=new zl,u.g=ou(u.j,_?p:null,!u.m),0<u.O&&(u.M=new Ki(I(u.Y,u,u.g),u.O)),p=u.U,_=u.g,E=u.ca;var U="readystatechange";Array.isArray(U)||(U&&(la[0]=U.toString()),U=la);for(var H=0;H<U.length;H++){var ne=ra(_,U[H],E||p.handleEvent,!1,p.h||p);if(!ne)break;p.g[ne.key]=ne}p=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),Rr(),Zi(u.i,u.u,u.A,u.l,u.R,u.m)}Ln.prototype.ca=function(u){u=u.target;const p=this.M;p&&Jt(u)==3?p.j():this.Y(u)},Ln.prototype.Y=function(u){try{if(u==this.g)e:{const ft=Jt(this.g);var p=this.g.Ba();const Tn=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||Sa(this.g)))){this.J||ft!=4||p==7||(p==8||0>=Tn?Rr(3):Rr(2)),ts(this);var _=this.g.Z();this.X=_;t:if($l(this)){var E=Sa(this.g);u="";var U=E.length,H=Jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){wn(this),Zr(this);var ne="";break t}this.h.i=new f.TextDecoder}for(p=0;p<U;p++)this.h.h=!0,u+=this.h.i.decode(E[p],{stream:!(H&&p==U-1)});E.length=0,this.h.g+=u,this.C=0,ne=this.h.g}else ne=this.g.oa();if(this.o=_==200,Gs(this.i,this.u,this.A,this.l,this.R,ft,_),this.o){if(this.T&&!this.K){t:{if(this.g){var Be,wt=this.g;if((Be=wt.g?wt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!te(Be)){var Ve=Be;break t}}Ve=null}if(_=Ve)bn(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,va(this,_);else{this.o=!1,this.s=3,lt(12),wn(this),Zr(this);break e}}if(this.P){_=!0;let fn;for(;!this.J&&this.C<ne.length;)if(fn=Eh(this,ne),fn==Qs){ft==4&&(this.s=4,lt(14),_=!1),bn(this.i,this.l,null,"[Incomplete Response]");break}else if(fn==ya){this.s=4,lt(15),bn(this.i,this.l,ne,"[Invalid Chunk]"),_=!1;break}else bn(this.i,this.l,fn,null),va(this,fn);if($l(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||ne.length!=0||this.h.h||(this.s=1,lt(16),_=!1),this.o=this.o&&_,!_)bn(this.i,this.l,ne,"[Invalid Chunked Response]"),wn(this),Zr(this);else if(0<ne.length&&!this.W){this.W=!0;var At=this.j;At.g==this&&At.ba&&!At.M&&(At.j.info("Great, no buffering proxy detected. Bytes received: "+ne.length),Ra(At),At.M=!0,lt(11))}}else bn(this.i,this.l,ne,null),va(this,ne);ft==4&&wn(this),this.o&&!this.J&&(ft==4?ao(this.j,this):(this.o=!1,Ge(this)))}else no(this.g),_==400&&0<ne.indexOf("Unknown SID")?(this.s=3,lt(12)):(this.s=0,lt(13)),wn(this),Zr(this)}}}catch{}finally{}};function $l(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Eh(u,p){var _=u.C,E=p.indexOf(`
`,_);return E==-1?Qs:(_=Number(p.substring(_,E)),isNaN(_)?ya:(E+=1,E+_>p.length?Qs:(p=p.slice(E,E+_),u.C=E+_,p)))}Ln.prototype.cancel=function(){this.J=!0,wn(this)};function Ge(u){u.S=Date.now()+u.I,ql(u,u.I)}function ql(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=On(I(u.ba,u),p)}function ts(u){u.B&&(f.clearTimeout(u.B),u.B=null)}Ln.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(ga(this.i,this.A),this.L!=2&&(Rr(),lt(17)),wn(this),this.s=2,Zr(this)):ql(this,this.S-u)};function Zr(u){u.j.G==0||u.J||ao(u.j,u)}function wn(u){ts(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,ua(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function va(u,p){try{var _=u.j;if(_.G!=0&&(_.g==u||Ht(_.h,u))){if(!u.K&&Ht(_.h,u)&&_.G==3){try{var E=_.Da.g.parse(p)}catch{E=null}if(Array.isArray(E)&&E.length==3){var U=E;if(U[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)oo(_),Bn(_);else break e;so(_),lt(18)}}else _.za=U[1],0<_.za-_.T&&37500>U[2]&&_.F&&_.v==0&&!_.C&&(_.C=On(I(_.Za,_),6e3));if(1>=Wl(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else xr(_,11)}else if((u.K||_.g==u)&&oo(_),!te(p))for(U=_.Da.g.parse(p),p=0;p<U.length;p++){let Ve=U[p];if(_.T=Ve[0],Ve=Ve[1],_.G==2)if(Ve[0]=="c"){_.K=Ve[1],_.ia=Ve[2];const At=Ve[3];At!=null&&(_.la=At,_.j.info("VER="+_.la));const ft=Ve[4];ft!=null&&(_.Aa=ft,_.j.info("SVER="+_.Aa));const Tn=Ve[5];Tn!=null&&typeof Tn=="number"&&0<Tn&&(E=1.5*Tn,_.L=E,_.j.info("backChannelRequestTimeoutMs_="+E)),E=_;const fn=u.g;if(fn){const ls=fn.g?fn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ls){var H=E.h;H.g||ls.indexOf("spdy")==-1&&ls.indexOf("quic")==-1&&ls.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(wa(H,H.h),H.h=null))}if(E.D){const uo=fn.g?fn.g.getResponseHeader("X-HTTP-Session-Id"):null;uo&&(E.ya=uo,He(E.I,E.D,uo))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),E=_;var ne=u;if(E.qa=su(E,E.J?E.ia:null,E.W),ne.K){Gl(E.h,ne);var Be=ne,wt=E.L;wt&&(Be.I=wt),Be.B&&(ts(Be),Ge(Be)),E.g=ne}else as(E);0<_.i.length&&ir(_)}else Ve[0]!="stop"&&Ve[0]!="close"||xr(_,7);else _.G==3&&(Ve[0]=="stop"||Ve[0]=="close"?Ve[0]=="stop"?xr(_,7):xt(_):Ve[0]!="noop"&&_.l&&_.l.ta(Ve),_.v=0)}}Rr(4)}catch{}}var Hl=class{constructor(u,p){this.g=u,this.map=p}};function ns(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function cn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Wl(u){return u.h?1:u.g?u.g.size:0}function Ht(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function wa(u,p){u.g?u.g.add(p):u.h=p}function Gl(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}ns.prototype.cancel=function(){if(this.i=Kl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Kl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const _ of u.g.values())p=p.concat(_.D);return p}return q(u.i)}function Js(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(m(u)){for(var p=[],_=u.length,E=0;E<_;E++)p.push(u[E]);return p}p=[],_=0;for(E in u)p[_++]=u[E];return p}function Ys(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(m(u)||typeof u=="string"){var p=[];u=u.length;for(var _=0;_<u;_++)p.push(_);return p}p=[],_=0;for(const E in u)p[_++]=E;return p}}}function ei(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(m(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var _=Ys(u),E=Js(u),U=E.length,H=0;H<U;H++)p.call(void 0,E[H],_&&_[H],u)}var rs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Th(u,p){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var E=u[_].indexOf("="),U=null;if(0<=E){var H=u[_].substring(0,E);U=u[_].substring(E+1)}else H=u[_];p(H,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function Cr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Cr){this.h=u.h,is(this,u.j),this.o=u.o,this.g=u.g,ti(this,u.s),this.l=u.l;var p=u.i,_=new tr;_.i=p.i,p.g&&(_.g=new Map(p.g),_.h=p.h),ni(this,_),this.m=u.m}else u&&(p=String(u).match(rs))?(this.h=!1,is(this,p[1]||"",!0),this.o=Oe(p[2]||""),this.g=Oe(p[3]||"",!0),ti(this,p[4]),this.l=Oe(p[5]||"",!0),ni(this,p[6]||"",!0),this.m=Oe(p[7]||"")):(this.h=!1,this.i=new tr(null,this.h))}Cr.prototype.toString=function(){var u=[],p=this.j;p&&u.push(ii(p,Zs,!0),":");var _=this.g;return(_||p=="file")&&(u.push("//"),(p=this.o)&&u.push(ii(p,Zs,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(ii(_,_.charAt(0)=="/"?Jl:Xl,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",ii(_,Ea)),u.join("")};function hn(u){return new Cr(u)}function is(u,p,_){u.j=_?Oe(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function ti(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function ni(u,p,_){p instanceof tr?(u.i=p,nr(u.i,u.h)):(_||(p=ii(p,Yl)),u.i=new tr(p,u.h))}function He(u,p,_){u.i.set(p,_)}function ri(u){return He(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Oe(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ii(u,p,_){return typeof u=="string"?(u=encodeURI(u).replace(p,Ql),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Ql(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Zs=/[#\/\?@]/g,Xl=/[#\?:]/g,Jl=/[#\?]/g,Yl=/[#\?@]/g,Ea=/#/g;function tr(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function Nt(u){u.g||(u.g=new Map,u.h=0,u.i&&Th(u.i,function(p,_){u.add(decodeURIComponent(p.replace(/\+/g," ")),_)}))}n=tr.prototype,n.add=function(u,p){Nt(this),this.i=null,u=En(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(p),this.h+=1,this};function Mn(u,p){Nt(u),p=En(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function Un(u,p){return Nt(u),p=En(u,p),u.g.has(p)}n.forEach=function(u,p){Nt(this),this.g.forEach(function(_,E){_.forEach(function(U){u.call(p,U,E,this)},this)},this)},n.na=function(){Nt(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),_=[];for(let E=0;E<p.length;E++){const U=u[E];for(let H=0;H<U.length;H++)_.push(p[E])}return _},n.V=function(u){Nt(this);let p=[];if(typeof u=="string")Un(this,u)&&(p=p.concat(this.g.get(En(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)p=p.concat(u[_])}return p},n.set=function(u,p){return Nt(this),this.i=null,u=En(this,u),Un(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},n.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function si(u,p,_){Mn(u,p),0<_.length&&(u.i=null,u.g.set(En(u,p),q(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var _=0;_<p.length;_++){var E=p[_];const H=encodeURIComponent(String(E)),ne=this.V(E);for(E=0;E<ne.length;E++){var U=H;ne[E]!==""&&(U+="="+encodeURIComponent(String(ne[E]))),u.push(U)}}return this.i=u.join("&")};function En(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function nr(u,p){p&&!u.j&&(Nt(u),u.i=null,u.g.forEach(function(_,E){var U=E.toLowerCase();E!=U&&(Mn(this,E),si(this,U,_))},u)),u.j=p}function Ih(u,p){const _=new Yi;if(f.Image){const E=new Image;E.onload=L(Xt,_,"TestLoadImage: loaded",!0,p,E),E.onerror=L(Xt,_,"TestLoadImage: error",!1,p,E),E.onabort=L(Xt,_,"TestLoadImage: abort",!1,p,E),E.ontimeout=L(Xt,_,"TestLoadImage: timeout",!1,p,E),f.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else p(!1)}function Zl(u,p){const _=new Yi,E=new AbortController,U=setTimeout(()=>{E.abort(),Xt(_,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:E.signal}).then(H=>{clearTimeout(U),H.ok?Xt(_,"TestPingServer: ok",!0,p):Xt(_,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(U),Xt(_,"TestPingServer: error",!1,p)})}function Xt(u,p,_,E,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),E(_)}catch{}}function Sh(){this.g=new da}function eu(u,p,_){const E=_||"";try{ei(u,function(U,H){let ne=U;y(U)&&(ne=ca(U)),p.push(E+H+"="+encodeURIComponent(ne))})}catch(U){throw p.push(E+"type="+encodeURIComponent("_badmap")),U}}function Pr(u){this.l=u.Ub||null,this.j=u.eb||!1}B(Pr,Xi),Pr.prototype.g=function(){return new ss(this.l,this.j)},Pr.prototype.i=(function(u){return function(){return u}})({});function ss(u,p){_t.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}B(ss,_t),n=ss.prototype,n.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,jn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||f).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fn(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,jn(this)),this.g&&(this.readyState=3,jn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;tu(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function tu(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?Fn(this):jn(this),this.readyState==3&&tu(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,Fn(this))},n.Qa=function(u){this.g&&(this.response=u,Fn(this))},n.ga=function(){this.g&&Fn(this)};function Fn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,jn(u)}n.setRequestHeader=function(u,p){this.u.append(u,p)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var _=p.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=p.next();return u.join(`\r
`)};function jn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(ss.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function kr(u){let p="";return he(u,function(_,E){p+=E,p+=":",p+=_,p+=`\r
`}),p}function oi(u,p,_){e:{for(E in _){var E=!1;break e}E=!0}E||(_=kr(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):He(u,p,_))}function Ze(u){_t.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}B(Ze,_t);var Ah=/^https?$/i,Ta=["POST","PUT"];n=Ze.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,p,_,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Vn.g(),this.v=this.o?$s(this.o):$s(Vn),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(H){os(this,H);return}if(u=_||"",_=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var U in E)_.set(U,E[U]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const H of E.keys())_.set(H,E.get(H));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(_.keys()).find(H=>H.toLowerCase()=="content-type"),U=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(Ta,p,void 0))||E||U||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,ne]of _)this.g.setRequestHeader(H,ne);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{to(this),this.u=!0,this.g.send(u),this.u=!1}catch(H){os(this,H)}};function os(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,eo(u),dn(u)}function eo(u){u.A||(u.A=!0,vt(u,"complete"),vt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,vt(this,"complete"),vt(this,"abort"),dn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),dn(this,!0)),Ze.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ia(this):this.bb())},n.bb=function(){Ia(this)};function Ia(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Jt(u)!=4||u.Z()!=2)){if(u.u&&Jt(u)==4)aa(u.Ea,0,u);else if(vt(u,"readystatechange"),Jt(u)==4){u.h=!1;try{const ne=u.Z();e:switch(ne){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var _;if(!(_=p)){var E;if(E=ne===0){var U=String(u.D).match(rs)[1]||null;!U&&f.self&&f.self.location&&(U=f.self.location.protocol.slice(0,-1)),E=!Ah.test(U?U.toLowerCase():"")}_=E}if(_)vt(u,"complete"),vt(u,"success");else{u.m=6;try{var H=2<Jt(u)?u.g.statusText:""}catch{H=""}u.l=H+" ["+u.Z()+"]",eo(u)}}finally{dn(u)}}}}function dn(u,p){if(u.g){to(u);const _=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||vt(u,"ready");try{_.onreadystatechange=E}catch{}}}function to(u){u.I&&(f.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Jt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Jt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),ha(p)}};function Sa(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function no(u){const p={};u=(u.g&&2<=Jt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(te(u[E]))continue;var _=V(u[E]);const U=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const H=p[U]||[];p[U]=H,H.push(_)}x(p,function(E){return E.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function rr(u,p,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||p}function Aa(u){this.Aa=0,this.i=[],this.j=new Yi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=rr("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=rr("baseRetryDelayMs",5e3,u),this.cb=rr("retryDelaySeedMs",1e4,u),this.Wa=rr("forwardChannelMaxRetries",2,u),this.wa=rr("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new ns(u&&u.concurrentRequestLimit),this.Da=new Sh,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Aa.prototype,n.la=8,n.G=1,n.connect=function(u,p,_,E){lt(0),this.W=u,this.H=p||{},_&&E!==void 0&&(this.H.OSID=_,this.H.OAID=E),this.F=this.X,this.I=su(this,null,this.W),ir(this)};function xt(u){if(ro(u),u.G==3){var p=u.U++,_=hn(u.I);if(He(_,"SID",u.K),He(_,"RID",p),He(_,"TYPE","terminate"),Nr(u,_),p=new Ln(u,u.j,p),p.L=2,p.v=ri(hn(_)),_=!1,f.navigator&&f.navigator.sendBeacon)try{_=f.navigator.sendBeacon(p.v.toString(),"")}catch{}!_&&f.Image&&(new Image().src=p.v,_=!0),_||(p.g=ou(p.j,null),p.g.ea(p.v)),p.F=Date.now(),Ge(p)}iu(u)}function Bn(u){u.g&&(Ra(u),u.g.cancel(),u.g=null)}function ro(u){Bn(u),u.u&&(f.clearTimeout(u.u),u.u=null),oo(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function ir(u){if(!cn(u.h)&&!u.s){u.s=!0;var p=u.Ga;Pe||ae(),ee||(Pe(),ee=!0),ge.add(p,u),u.B=0}}function Rh(u,p){return Wl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=On(I(u.Ga,u,p),ru(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const U=new Ln(this,this.j,u);let H=this.o;if(this.S&&(H?(H=S(H),k(H,this.S)):H=this.S),this.m!==null||this.O||(U.H=H,H=null),this.P)e:{for(var p=0,_=0;_<this.i.length;_++){t:{var E=this.i[_];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(p+=E,4096<p){p=_;break e}if(p===4096||_===this.i.length-1){p=_+1;break e}}p=1e3}else p=1e3;p=ai(this,U,p),_=hn(this.I),He(_,"RID",u),He(_,"CVER",22),this.D&&He(_,"X-HTTP-Session-Id",this.D),Nr(this,_),H&&(this.O?p="headers="+encodeURIComponent(String(kr(H)))+"&"+p:this.m&&oi(_,this.m,H)),wa(this.h,U),this.Ua&&He(_,"TYPE","init"),this.P?(He(_,"$req",p),He(_,"SID","null"),U.T=!0,Xs(U,_,null)):Xs(U,_,p),this.G=2}}else this.G==3&&(u?io(this,u):this.i.length==0||cn(this.h)||io(this))};function io(u,p){var _;p?_=p.l:_=u.U++;const E=hn(u.I);He(E,"SID",u.K),He(E,"RID",_),He(E,"AID",u.T),Nr(u,E),u.m&&u.o&&oi(E,u.m,u.o),_=new Ln(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),p&&(u.i=p.D.concat(u.i)),p=ai(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),wa(u.h,_),Xs(_,E,p)}function Nr(u,p){u.H&&he(u.H,function(_,E){He(p,E,_)}),u.l&&ei({},function(_,E){He(p,E,_)})}function ai(u,p,_){_=Math.min(u.i.length,_);var E=u.l?I(u.l.Na,u.l,u):null;e:{var U=u.i;let H=-1;for(;;){const ne=["count="+_];H==-1?0<_?(H=U[0].g,ne.push("ofs="+H)):H=0:ne.push("ofs="+H);let Be=!0;for(let wt=0;wt<_;wt++){let Ve=U[wt].g;const At=U[wt].map;if(Ve-=H,0>Ve)H=Math.max(0,U[wt].g-100),Be=!1;else try{eu(At,ne,"req"+Ve+"_")}catch{E&&E(At)}}if(Be){E=ne.join("&");break e}}}return u=u.i.splice(0,_),p.D=u,E}function as(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;Pe||ae(),ee||(Pe(),ee=!0),ge.add(p,u),u.v=0}}function so(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=On(I(u.Fa,u),ru(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,nu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=On(I(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,lt(10),Bn(this),nu(this))};function Ra(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function nu(u){u.g=new Ln(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=hn(u.qa);He(p,"RID","rpc"),He(p,"SID",u.K),He(p,"AID",u.T),He(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&He(p,"TO",u.ja),He(p,"TYPE","xmlhttp"),Nr(u,p),u.m&&u.o&&oi(p,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=ri(hn(p)),_.m=null,_.P=!0,_a(_,u)}n.Za=function(){this.C!=null&&(this.C=null,Bn(this),so(this),lt(19))};function oo(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function ao(u,p){var _=null;if(u.g==p){oo(u),Ra(u),u.g=null;var E=2}else if(Ht(u.h,p))_=p.D,Gl(u.h,p),E=1;else return;if(u.G!=0){if(p.o)if(E==1){_=p.m?p.m.length:0,p=Date.now()-p.F;var U=u.B;E=Ji(),vt(E,new Ws(E,_)),ir(u)}else as(u);else if(U=p.s,U==3||U==0&&0<p.X||!(E==1&&Rh(u,p)||E==2&&so(u)))switch(_&&0<_.length&&(p=u.h,p.i=p.i.concat(_)),U){case 1:xr(u,5);break;case 4:xr(u,10);break;case 3:xr(u,6);break;default:xr(u,2)}}}function ru(u,p){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*p}function xr(u,p){if(u.j.info("Error code "+p),p==2){var _=I(u.fb,u),E=u.Xa;const U=!E;E=new Cr(E||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||is(E,"https"),ri(E),U?Ih(E.toString(),_):Zl(E.toString(),_)}else lt(2);u.G=0,u.l&&u.l.sa(p),iu(u),ro(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function iu(u){if(u.G=0,u.ka=[],u.l){const p=Kl(u.h);(p.length!=0||u.i.length!=0)&&(D(u.ka,p),D(u.ka,u.i),u.h.i.length=0,q(u.i),u.i.length=0),u.l.ra()}}function su(u,p,_){var E=_ instanceof Cr?hn(_):new Cr(_);if(E.g!="")p&&(E.g=p+"."+E.g),ti(E,E.s);else{var U=f.location;E=U.protocol,p=p?p+"."+U.hostname:U.hostname,U=+U.port;var H=new Cr(null);E&&is(H,E),p&&(H.g=p),U&&ti(H,U),_&&(H.l=_),E=H}return _=u.D,p=u.ya,_&&p&&He(E,_,p),He(E,"VER",u.la),Nr(u,E),E}function ou(u,p,_){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new Ze(new Pr({eb:_})):new Ze(u.pa),p.Ha(u.J),p}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ca(){}n=Ca.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function lo(){}lo.prototype.g=function(u,p){return new Wt(u,p)};function Wt(u,p){_t.call(this),this.g=new Aa(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!te(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!te(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new sr(this)}B(Wt,_t),Wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Wt.prototype.close=function(){xt(this.g)},Wt.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=ca(u),u=_);p.i.push(new Hl(p.Ya++,u)),p.G==3&&ir(p)},Wt.prototype.N=function(){this.g.l=null,delete this.j,xt(this.g),delete this.g,Wt.aa.N.call(this)};function au(u){Zn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const _ in p){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}B(au,Zn);function lu(){Hs.call(this),this.status=1}B(lu,Hs);function sr(u){this.g=u}B(sr,Ca),sr.prototype.ua=function(){vt(this.g,"a")},sr.prototype.ta=function(u){vt(this.g,new au(u))},sr.prototype.sa=function(u){vt(this.g,new lu)},sr.prototype.ra=function(){vt(this.g,"b")},lo.prototype.createWebChannel=lo.prototype.g,Wt.prototype.send=Wt.prototype.o,Wt.prototype.open=Wt.prototype.m,Wt.prototype.close=Wt.prototype.close,Rw=function(){return new lo},Aw=function(){return Ji()},Sw=er,Sf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ks.NO_ERROR=0,Ks.TIMEOUT=8,Ks.HTTP_ERROR=6,mc=Ks,Bl.COMPLETE="complete",Iw=Bl,qs.EventType=vn,vn.OPEN="a",vn.CLOSE="b",vn.ERROR="c",vn.MESSAGE="d",_t.prototype.listen=_t.prototype.K,Za=qs,Ze.prototype.listenOnce=Ze.prototype.L,Ze.prototype.getLastError=Ze.prototype.Ka,Ze.prototype.getLastErrorCode=Ze.prototype.Ba,Ze.prototype.getStatus=Ze.prototype.Z,Ze.prototype.getResponseJson=Ze.prototype.Oa,Ze.prototype.getResponseText=Ze.prototype.oa,Ze.prototype.send=Ze.prototype.ea,Ze.prototype.setWithCredentials=Ze.prototype.Ha,Tw=Ze}).apply(typeof rc<"u"?rc:typeof self<"u"?self:typeof window<"u"?window:{});const r_="@firebase/firestore",i_="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}zt.UNAUTHENTICATED=new zt(null),zt.GOOGLE_CREDENTIALS=new zt("google-credentials-uid"),zt.FIRST_PARTY=new zt("first-party-uid"),zt.MOCK_USER=new zt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jo="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns=new tp("@firebase/firestore");function xo(){return Ns.logLevel}function ue(n,...e){if(Ns.logLevel<=xe.DEBUG){const t=e.map(pp);Ns.debug(`Firestore (${Jo}): ${n}`,...t)}}function Gr(n,...e){if(Ns.logLevel<=xe.ERROR){const t=e.map(pp);Ns.error(`Firestore (${Jo}): ${n}`,...t)}}function Li(n,...e){if(Ns.logLevel<=xe.WARN){const t=e.map(pp);Ns.warn(`Firestore (${Jo}): ${n}`,...t)}}function pp(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,Cw(n,i,t)}function Cw(n,e,t){let i=`FIRESTORE (${Jo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Gr(i),new Error(i)}function je(n,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,n||Cw(e,o,i)}function Re(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oe extends Yn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class P1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(zt.UNAUTHENTICATED)))}shutdown(){}}class k1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class N1{constructor(e){this.t=e,this.currentUser=zt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){je(this.o===void 0,42304);let i=this.i;const o=m=>this.i!==i?(i=this.i,t(m)):Promise.resolve();let l=new $r;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new $r,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const m=l;e.enqueueRetryable((async()=>{await m.promise,await o(this.currentUser)}))},f=m=>{ue("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((m=>f(m))),setTimeout((()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?f(m):(ue("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new $r)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(ue("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(je(typeof i.accessToken=="string",31837,{l:i}),new Pw(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return je(e===null||typeof e=="string",2055,{h:e}),new zt(e)}}class x1{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=zt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class D1{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new x1(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(zt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class s_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class O1{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,on(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){je(this.o===void 0,3512);const i=l=>{l.error!=null&&ue("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,ue("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const o=l=>{ue("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):ue("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new s_(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(je(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new s_(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b1(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */function kw(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=b1(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%62))}return i}}function Ce(n,e){return n<e?-1:n>e?1:0}function Af(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=n.codePointAt(t),o=e.codePointAt(t);if(i!==o){if(i<128&&o<128)return Ce(i,o);{const l=kw(),h=V1(l.encode(o_(n,t)),l.encode(o_(e,t)));return h!==0?h:Ce(i,o)}}t+=i>65535?2:1}return Ce(n.length,e.length)}function o_(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function V1(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Ce(n[t],e[t]);return Ce(n.length,e.length)}function Bo(n,e,t){return n.length===e.length&&n.every(((i,o)=>t(i,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_="__name__";class cr{constructor(e,t,i){t===void 0?t=0:t>e.length&&Ee(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&Ee(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return cr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof cr?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=cr.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Ce(e.length,t.length)}static compareSegments(e,t){const i=cr.isNumericId(e),o=cr.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?cr.extractNumericId(e).compare(cr.extractNumericId(t)):Af(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Oi.fromString(e.substring(4,e.length-2))}}class Qe extends cr{construct(e,t,i){return new Qe(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new oe(W.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new Qe(t)}static emptyPath(){return new Qe([])}}const L1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Vt extends cr{construct(e,t,i){return new Vt(e,t,i)}static isValidIdentifier(e){return L1.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Vt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===a_}static keyField(){return new Vt([a_])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new oe(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new oe(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[o+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new oe(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=m,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(i+=f,o++):(l(),o++)}if(l(),h)throw new oe(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Vt(t)}static emptyPath(){return new Vt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(Qe.fromString(e))}static fromName(e){return new ye(Qe.fromString(e).popFirst(5))}static empty(){return new ye(Qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Qe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new Qe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(n,e,t){if(!t)throw new oe(W.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function M1(n,e,t,i){if(e===!0&&i===!0)throw new oe(W.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function l_(n){if(!ye.isDocumentKey(n))throw new oe(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function u_(n){if(ye.isDocumentKey(n))throw new oe(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function xw(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Zc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ee(12329,{type:typeof n})}function Kr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new oe(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Zc(n);throw new oe(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function yt(n,e){const t={typeString:n};return e&&(t.value=e),t}function xl(n,e){if(!xw(n))throw new oe(W.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const h=n[i];if(o&&typeof h!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${i}' field to equal '${l.value}'`;break}}if(t)throw new oe(W.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_=-62135596800,h_=1e6;class Ye{static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*h_);return new Ye(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new oe(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new oe(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<c_)throw new oe(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oe(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/h_}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(xl(e,Ye._jsonSchema))return new Ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-c_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ye._jsonSchemaVersion="firestore/timestamp/1.0",Ye._jsonSchema={type:yt("string",Ye._jsonSchemaVersion),seconds:yt("number"),nanoseconds:yt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{static fromTimestamp(e){return new Se(e)}static min(){return new Se(new Ye(0,0))}static max(){return new Se(new Ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const pl=-1;function U1(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Se.fromTimestamp(i===1e9?new Ye(t+1,0):new Ye(t,i));return new Mi(o,ye.empty(),e)}function F1(n){return new Mi(n.readTime,n.key,pl)}class Mi{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Mi(Se.min(),ye.empty(),pl)}static max(){return new Mi(Se.max(),ye.empty(),pl)}}function j1(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ye.comparator(n.documentKey,e.documentKey),t!==0?t:Ce(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class z1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yo(n){if(n.code!==W.FAILED_PRECONDITION||n.message!==B1)throw n;ue("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new G(((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof G?t:G.resolve(t)}catch(t){return G.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):G.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):G.reject(t)}static resolve(e){return new G(((t,i)=>{t(e)}))}static reject(e){return new G(((t,i)=>{i(e)}))}static waitFor(e){return new G(((t,i)=>{let o=0,l=0,h=!1;e.forEach((f=>{++o,f.next((()=>{++l,h&&l===o&&t()}),(m=>i(m)))})),h=!0,l===o&&t()}))}static or(e){let t=G.resolve(!1);for(const i of e)t=t.next((o=>o?G.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,l)=>{i.push(t.call(this,o,l))})),this.waitFor(i)}static mapArray(e,t){return new G(((i,o)=>{const l=e.length,h=new Array(l);let f=0;for(let m=0;m<l;m++){const y=m;t(e[y]).next((v=>{h[y]=v,++f,f===l&&i(h)}),(v=>o(v)))}}))}static doWhile(e,t){return new G(((i,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):i()};l()}))}}function $1(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Zo(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class eh{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this._e(i),this.ae=i=>t.writeSequenceNumber(i))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}eh.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp=-1;function th(n){return n==null}function Nc(n){return n===0&&1/n==-1/0}function q1(n){return typeof n=="number"&&Number.isInteger(n)&&!Nc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw="";function H1(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=d_(e)),e=W1(n.get(t),e);return d_(e)}function W1(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case Dw:t+="";break;default:t+=l}}return t}function d_(n){return n+Dw+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f_(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Hi(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Ow(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,t){this.comparator=e,this.root=t||bt.EMPTY}insert(e,t){return new it(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,bt.BLACK,null,null))}remove(e){return new it(this.comparator,this.root.remove(e,this.comparator).copy(null,null,bt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ic(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ic(this.root,e,this.comparator,!1)}getReverseIterator(){return new ic(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ic(this.root,e,this.comparator,!0)}}class ic{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class bt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??bt.RED,this.left=o??bt.EMPTY,this.right=l??bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new bt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return bt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return bt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ee(27949);return e+(this.isRed()?0:1)}}bt.EMPTY=null,bt.RED=!0,bt.BLACK=!1;bt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ee(57766)}get value(){throw Ee(16141)}get color(){throw Ee(16727)}get left(){throw Ee(29726)}get right(){throw Ee(36894)}copy(e,t,i,o,l){return this}insert(e,t,i){return new bt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.comparator=e,this.data=new it(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new p_(this.data.getIterator())}getIteratorFrom(e){return new p_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof It)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new It(this.comparator);return t.data=e,t}}class p_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.fields=e,e.sort(Vt.comparator)}static empty(){return new yn([])}unionWith(e){let t=new It(Vt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new yn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Bo(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class bw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new bw("Invalid base64 string: "+l):l}})(e);return new Lt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new Lt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Lt.EMPTY_BYTE_STRING=new Lt("");const G1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ui(n){if(je(!!n,39018),typeof n=="string"){let e=0;const t=G1.exec(n);if(je(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ct(n.seconds),nanos:ct(n.nanos)}}function ct(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Fi(n){return typeof n=="string"?Lt.fromBase64String(n):Lt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw="server_timestamp",Lw="__type__",Mw="__previous_value__",Uw="__local_write_time__";function yp(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Lw])===null||t===void 0?void 0:t.stringValue)===Vw}function nh(n){const e=n.mapValue.fields[Mw];return yp(e)?nh(e):e}function ml(n){const e=Ui(n.mapValue.fields[Uw].timestampValue);return new Ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(e,t,i,o,l,h,f,m,y,v){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=m,this.useFetchStreams=y,this.isUsingEmulator=v}}const xc="(default)";class gl{constructor(e,t){this.projectId=e,this.database=t||xc}static empty(){return new gl("","")}get isDefaultDatabase(){return this.database===xc}isEqual(e){return e instanceof gl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw="__type__",Q1="__max__",sc={mapValue:{}},jw="__vector__",Dc="value";function ji(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?yp(n)?4:J1(n)?9007199254740991:X1(n)?10:11:Ee(28295,{value:n})}function wr(n,e){if(n===e)return!0;const t=ji(n);if(t!==ji(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ml(n).isEqual(ml(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Ui(o.timestampValue),f=Ui(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,l){return Fi(o.bytesValue).isEqual(Fi(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,l){return ct(o.geoPointValue.latitude)===ct(l.geoPointValue.latitude)&&ct(o.geoPointValue.longitude)===ct(l.geoPointValue.longitude)})(n,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return ct(o.integerValue)===ct(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=ct(o.doubleValue),f=ct(l.doubleValue);return h===f?Nc(h)===Nc(f):isNaN(h)&&isNaN(f)}return!1})(n,e);case 9:return Bo(n.arrayValue.values||[],e.arrayValue.values||[],wr);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(f_(h)!==f_(f))return!1;for(const m in h)if(h.hasOwnProperty(m)&&(f[m]===void 0||!wr(h[m],f[m])))return!1;return!0})(n,e);default:return Ee(52216,{left:n})}}function yl(n,e){return(n.values||[]).find((t=>wr(t,e)))!==void 0}function zo(n,e){if(n===e)return 0;const t=ji(n),i=ji(e);if(t!==i)return Ce(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ce(n.booleanValue,e.booleanValue);case 2:return(function(l,h){const f=ct(l.integerValue||l.doubleValue),m=ct(h.integerValue||h.doubleValue);return f<m?-1:f>m?1:f===m?0:isNaN(f)?isNaN(m)?0:-1:1})(n,e);case 3:return m_(n.timestampValue,e.timestampValue);case 4:return m_(ml(n),ml(e));case 5:return Af(n.stringValue,e.stringValue);case 6:return(function(l,h){const f=Fi(l),m=Fi(h);return f.compareTo(m)})(n.bytesValue,e.bytesValue);case 7:return(function(l,h){const f=l.split("/"),m=h.split("/");for(let y=0;y<f.length&&y<m.length;y++){const v=Ce(f[y],m[y]);if(v!==0)return v}return Ce(f.length,m.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,h){const f=Ce(ct(l.latitude),ct(h.latitude));return f!==0?f:Ce(ct(l.longitude),ct(h.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return g_(n.arrayValue,e.arrayValue);case 10:return(function(l,h){var f,m,y,v;const T=l.fields||{},I=h.fields||{},L=(f=T[Dc])===null||f===void 0?void 0:f.arrayValue,B=(m=I[Dc])===null||m===void 0?void 0:m.arrayValue,q=Ce(((y=L==null?void 0:L.values)===null||y===void 0?void 0:y.length)||0,((v=B==null?void 0:B.values)===null||v===void 0?void 0:v.length)||0);return q!==0?q:g_(L,B)})(n.mapValue,e.mapValue);case 11:return(function(l,h){if(l===sc.mapValue&&h===sc.mapValue)return 0;if(l===sc.mapValue)return 1;if(h===sc.mapValue)return-1;const f=l.fields||{},m=Object.keys(f),y=h.fields||{},v=Object.keys(y);m.sort(),v.sort();for(let T=0;T<m.length&&T<v.length;++T){const I=Af(m[T],v[T]);if(I!==0)return I;const L=zo(f[m[T]],y[v[T]]);if(L!==0)return L}return Ce(m.length,v.length)})(n.mapValue,e.mapValue);default:throw Ee(23264,{le:t})}}function m_(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ce(n,e);const t=Ui(n),i=Ui(e),o=Ce(t.seconds,i.seconds);return o!==0?o:Ce(t.nanos,i.nanos)}function g_(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=zo(t[o],i[o]);if(l)return l}return Ce(t.length,i.length)}function $o(n){return Rf(n)}function Rf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=Ui(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Fi(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return ye.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=Rf(l);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of i)l?l=!1:o+=",",o+=`${h}:${Rf(t.fields[h])}`;return o+"}"})(n.mapValue):Ee(61005,{value:n})}function gc(n){switch(ji(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=nh(n);return e?16+gc(e):16;case 5:return 2*n.stringValue.length;case 6:return Fi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,l)=>o+gc(l)),0)})(n.arrayValue);case 10:case 11:return(function(i){let o=0;return Hi(i.fields,((l,h)=>{o+=l.length+gc(h)})),o})(n.mapValue);default:throw Ee(13486,{value:n})}}function y_(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Cf(n){return!!n&&"integerValue"in n}function _p(n){return!!n&&"arrayValue"in n}function __(n){return!!n&&"nullValue"in n}function v_(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function yc(n){return!!n&&"mapValue"in n}function X1(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Fw])===null||t===void 0?void 0:t.stringValue)===jw}function sl(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Hi(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=sl(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=sl(n.arrayValue.values[t]);return e}return Object.assign({},n)}function J1(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Q1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.value=e}static empty(){return new an({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!yc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=sl(t)}setAll(e){let t=Vt.emptyPath(),i={},o=[];e.forEach(((h,f)=>{if(!t.isImmediateParentOf(f)){const m=this.getFieldsMap(t);this.applyChanges(m,i,o),i={},o=[],t=f.popLast()}h?i[f.lastSegment()]=sl(h):o.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());yc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return wr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];yc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Hi(t,((o,l)=>e[o]=l));for(const o of i)delete e[o]}clone(){return new an(sl(this.value))}}function Bw(n){const e=[];return Hi(n.fields,((t,i)=>{const o=new Vt([t]);if(yc(i)){const l=Bw(i.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new yn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,t,i,o,l,h,f){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new $t(e,0,Se.min(),Se.min(),Se.min(),an.empty(),0)}static newFoundDocument(e,t,i,o){return new $t(e,1,t,Se.min(),i,o,0)}static newNoDocument(e,t){return new $t(e,2,t,Se.min(),Se.min(),an.empty(),0)}static newUnknownDocument(e,t){return new $t(e,3,t,Se.min(),Se.min(),an.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=an.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=an.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Oc{constructor(e,t){this.position=e,this.inclusive=t}}function w_(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],h=n.position[o];if(l.field.isKeyField()?i=ye.comparator(ye.fromName(h.referenceValue),t.key):i=zo(h,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function E_(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!wr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class _l{constructor(e,t="asc"){this.field=e,this.dir=t}}function Y1(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class zw{}class gt extends zw{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new eC(e,t,i):t==="array-contains"?new rC(e,i):t==="in"?new iC(e,i):t==="not-in"?new sC(e,i):t==="array-contains-any"?new oC(e,i):new gt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new tC(e,i):new nC(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(zo(t,this.value)):t!==null&&ji(this.value)===ji(t)&&this.matchesComparison(zo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Jn extends zw{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Jn(e,t)}matches(e){return $w(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function $w(n){return n.op==="and"}function qw(n){return Z1(n)&&$w(n)}function Z1(n){for(const e of n.filters)if(e instanceof Jn)return!1;return!0}function Pf(n){if(n instanceof gt)return n.field.canonicalString()+n.op.toString()+$o(n.value);if(qw(n))return n.filters.map((e=>Pf(e))).join(",");{const e=n.filters.map((t=>Pf(t))).join(",");return`${n.op}(${e})`}}function Hw(n,e){return n instanceof gt?(function(i,o){return o instanceof gt&&i.op===o.op&&i.field.isEqual(o.field)&&wr(i.value,o.value)})(n,e):n instanceof Jn?(function(i,o){return o instanceof Jn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((l,h,f)=>l&&Hw(h,o.filters[f])),!0):!1})(n,e):void Ee(19439)}function Ww(n){return n instanceof gt?(function(t){return`${t.field.canonicalString()} ${t.op} ${$o(t.value)}`})(n):n instanceof Jn?(function(t){return t.op.toString()+" {"+t.getFilters().map(Ww).join(" ,")+"}"})(n):"Filter"}class eC extends gt{constructor(e,t,i){super(e,t,i),this.key=ye.fromName(i.referenceValue)}matches(e){const t=ye.comparator(e.key,this.key);return this.matchesComparison(t)}}class tC extends gt{constructor(e,t){super(e,"in",t),this.keys=Gw("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class nC extends gt{constructor(e,t){super(e,"not-in",t),this.keys=Gw("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Gw(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((i=>ye.fromName(i.referenceValue)))}class rC extends gt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return _p(t)&&yl(t.arrayValue,this.value)}}class iC extends gt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&yl(this.value.arrayValue,t)}}class sC extends gt{constructor(e,t){super(e,"not-in",t)}matches(e){if(yl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!yl(this.value.arrayValue,t)}}class oC extends gt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!_p(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>yl(this.value.arrayValue,i)))}}/**
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
 */class aC{constructor(e,t=null,i=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.Pe=null}}function T_(n,e=null,t=[],i=[],o=null,l=null,h=null){return new aC(n,e,t,i,o,l,h)}function vp(n){const e=Re(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>Pf(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),th(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>$o(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>$o(i))).join(",")),e.Pe=t}return e.Pe}function wp(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Y1(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Hw(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!E_(n.startAt,e.startAt)&&E_(n.endAt,e.endAt)}function kf(n){return ye.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,t=null,i=[],o=[],l=null,h="F",f=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=m,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function lC(n,e,t,i,o,l,h,f){return new ea(n,e,t,i,o,l,h,f)}function Ep(n){return new ea(n)}function I_(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Kw(n){return n.collectionGroup!==null}function ol(n){const e=Re(n);if(e.Te===null){e.Te=[];const t=new Set;for(const l of e.explicitOrderBy)e.Te.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new It(Vt.comparator);return h.filters.forEach((m=>{m.getFlattenedFilters().forEach((y=>{y.isInequality()&&(f=f.add(y.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Te.push(new _l(l,i))})),t.has(Vt.keyField().canonicalString())||e.Te.push(new _l(Vt.keyField(),i))}return e.Te}function pr(n){const e=Re(n);return e.Ie||(e.Ie=uC(e,ol(n))),e.Ie}function uC(n,e){if(n.limitType==="F")return T_(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new _l(o.field,l)}));const t=n.endAt?new Oc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Oc(n.startAt.position,n.startAt.inclusive):null;return T_(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Nf(n,e){const t=n.filters.concat([e]);return new ea(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function xf(n,e,t){return new ea(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function rh(n,e){return wp(pr(n),pr(e))&&n.limitType===e.limitType}function Qw(n){return`${vp(pr(n))}|lt:${n.limitType}`}function Do(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>Ww(o))).join(", ")}]`),th(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>$o(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>$o(o))).join(",")),`Target(${i})`})(pr(n))}; limitType=${n.limitType})`}function ih(n,e){return e.isFoundDocument()&&(function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):ye.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(n,e)&&(function(i,o){for(const l of ol(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0})(n,e)&&(function(i,o){return!(i.startAt&&!(function(h,f,m){const y=w_(h,f,m);return h.inclusive?y<=0:y<0})(i.startAt,ol(i),o)||i.endAt&&!(function(h,f,m){const y=w_(h,f,m);return h.inclusive?y>=0:y>0})(i.endAt,ol(i),o))})(n,e)}function cC(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Xw(n){return(e,t)=>{let i=!1;for(const o of ol(n)){const l=hC(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function hC(n,e,t){const i=n.field.isKeyField()?ye.comparator(e.key,t.key):(function(l,h,f){const m=h.data.field(l),y=f.data.field(l);return m!==null&&y!==null?zo(m,y):Ee(42886)})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Ee(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Hi(this.inner,((t,i)=>{for(const[o,l]of i)e(o,l)}))}isEmpty(){return Ow(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC=new it(ye.comparator);function Qr(){return dC}const Jw=new it(ye.comparator);function el(...n){let e=Jw;for(const t of n)e=e.insert(t.key,t);return e}function Yw(n){let e=Jw;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function As(){return al()}function Zw(){return al()}function al(){return new bs((n=>n.toString()),((n,e)=>n.isEqual(e)))}const fC=new it(ye.comparator),pC=new It(ye.comparator);function De(...n){let e=pC;for(const t of n)e=e.add(t);return e}const mC=new It(Ce);function gC(){return mC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Nc(e)?"-0":e}}function eE(n){return{integerValue:""+n}}function yC(n,e){return q1(e)?eE(e):Tp(n,e)}/**
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
 */class sh{constructor(){this._=void 0}}function _C(n,e,t){return n instanceof vl?(function(o,l){const h={fields:{[Lw]:{stringValue:Vw},[Uw]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&yp(l)&&(l=nh(l)),l&&(h.fields[Mw]=l),{mapValue:h}})(t,e):n instanceof wl?nE(n,e):n instanceof El?rE(n,e):(function(o,l){const h=tE(o,l),f=S_(h)+S_(o.Ee);return Cf(h)&&Cf(o.Ee)?eE(f):Tp(o.serializer,f)})(n,e)}function vC(n,e,t){return n instanceof wl?nE(n,e):n instanceof El?rE(n,e):t}function tE(n,e){return n instanceof bc?(function(i){return Cf(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class vl extends sh{}class wl extends sh{constructor(e){super(),this.elements=e}}function nE(n,e){const t=iE(e);for(const i of n.elements)t.some((o=>wr(o,i)))||t.push(i);return{arrayValue:{values:t}}}class El extends sh{constructor(e){super(),this.elements=e}}function rE(n,e){let t=iE(e);for(const i of n.elements)t=t.filter((o=>!wr(o,i)));return{arrayValue:{values:t}}}class bc extends sh{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function S_(n){return ct(n.integerValue||n.doubleValue)}function iE(n){return _p(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e,t){this.field=e,this.transform=t}}function EC(n,e){return n.field.isEqual(e.field)&&(function(i,o){return i instanceof wl&&o instanceof wl||i instanceof El&&o instanceof El?Bo(i.elements,o.elements,wr):i instanceof bc&&o instanceof bc?wr(i.Ee,o.Ee):i instanceof vl&&o instanceof vl})(n.transform,e.transform)}class TC{constructor(e,t){this.version=e,this.transformResults=t}}class mr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new mr}static exists(e){return new mr(void 0,e)}static updateTime(e){return new mr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _c(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class oh{}function sE(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new aE(n.key,mr.none()):new Dl(n.key,n.data,mr.none());{const t=n.data,i=an.empty();let o=new It(Vt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?i.delete(l):i.set(l,h),o=o.add(l)}return new Wi(n.key,i,new yn(o.toArray()),mr.none())}}function IC(n,e,t){n instanceof Dl?(function(o,l,h){const f=o.value.clone(),m=R_(o.fieldTransforms,l,h.transformResults);f.setAll(m),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()})(n,e,t):n instanceof Wi?(function(o,l,h){if(!_c(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=R_(o.fieldTransforms,l,h.transformResults),m=l.data;m.setAll(oE(o)),m.setAll(f),l.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(n,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function ll(n,e,t,i){return n instanceof Dl?(function(l,h,f,m){if(!_c(l.precondition,h))return f;const y=l.value.clone(),v=C_(l.fieldTransforms,m,h);return y.setAll(v),h.convertToFoundDocument(h.version,y).setHasLocalMutations(),null})(n,e,t,i):n instanceof Wi?(function(l,h,f,m){if(!_c(l.precondition,h))return f;const y=C_(l.fieldTransforms,m,h),v=h.data;return v.setAll(oE(l)),v.setAll(y),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(n,e,t,i):(function(l,h,f){return _c(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f})(n,e,t)}function SC(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=tE(i.transform,o||null);l!=null&&(t===null&&(t=an.empty()),t.set(i.field,l))}return t||null}function A_(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Bo(i,o,((l,h)=>EC(l,h)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Dl extends oh{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Wi extends oh{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function oE(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function R_(n,e,t){const i=new Map;je(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let o=0;o<t.length;o++){const l=n[o],h=l.transform,f=e.data.field(l.field);i.set(l.field,vC(h,f,t[o]))}return i}function C_(n,e,t){const i=new Map;for(const o of n){const l=o.transform,h=t.data.field(o.field);i.set(o.field,_C(l,h,e))}return i}class aE extends oh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class AC extends oh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&IC(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=ll(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=ll(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=Zw();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const m=sE(h,f);m!==null&&i.set(o.key,m),h.isValidDocument()||h.convertToNoDocument(Se.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),De())}isEqual(e){return this.batchId===e.batchId&&Bo(this.mutations,e.mutations,((t,i)=>A_(t,i)))&&Bo(this.baseMutations,e.baseMutations,((t,i)=>A_(t,i)))}}class Ip{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){je(e.mutations.length===i.length,58842,{Ve:e.mutations.length,me:i.length});let o=(function(){return fC})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,i[h].version);return new Ip(e,t,i,o)}}/**
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
 */class CC{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class PC{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mt,Le;function kC(n){switch(n){case W.OK:return Ee(64938);case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0;default:return Ee(15467,{code:n})}}function lE(n){if(n===void 0)return Gr("GRPC error has no .code"),W.UNKNOWN;switch(n){case mt.OK:return W.OK;case mt.CANCELLED:return W.CANCELLED;case mt.UNKNOWN:return W.UNKNOWN;case mt.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case mt.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case mt.INTERNAL:return W.INTERNAL;case mt.UNAVAILABLE:return W.UNAVAILABLE;case mt.UNAUTHENTICATED:return W.UNAUTHENTICATED;case mt.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case mt.NOT_FOUND:return W.NOT_FOUND;case mt.ALREADY_EXISTS:return W.ALREADY_EXISTS;case mt.PERMISSION_DENIED:return W.PERMISSION_DENIED;case mt.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case mt.ABORTED:return W.ABORTED;case mt.OUT_OF_RANGE:return W.OUT_OF_RANGE;case mt.UNIMPLEMENTED:return W.UNIMPLEMENTED;case mt.DATA_LOSS:return W.DATA_LOSS;default:return Ee(39323,{code:n})}}(Le=mt||(mt={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const NC=new Oi([4294967295,4294967295],0);function P_(n){const e=kw().encode(n),t=new Ew;return t.update(e),new Uint8Array(t.digest())}function k_(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Oi([t,i],0),new Oi([o,l],0)]}class Sp{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new tl(`Invalid padding: ${t}`);if(i<0)throw new tl(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new tl(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new tl(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Oi.fromNumber(this.fe)}pe(e,t,i){let o=e.add(t.multiply(Oi.fromNumber(i)));return o.compare(NC)===1&&(o=new Oi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=P_(e),[i,o]=k_(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(i,o,l);if(!this.ye(h))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new Sp(l,o,t);return i.forEach((f=>h.insert(f))),h}insert(e){if(this.fe===0)return;const t=P_(e),[i,o]=k_(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(i,o,l);this.we(h)}}we(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class tl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,Ol.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new ah(Se.min(),o,new it(Ce),Qr(),De())}}class Ol{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Ol(i,t,De(),De(),De())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,t,i,o){this.Se=e,this.removedTargetIds=t,this.key=i,this.be=o}}class uE{constructor(e,t){this.targetId=e,this.De=t}}class cE{constructor(e,t,i=Lt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class N_{constructor(){this.ve=0,this.Ce=x_(),this.Fe=Lt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=De(),t=De(),i=De();return this.Ce.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:Ee(38017,{changeType:l})}})),new Ol(this.Fe,this.Me,e,t,i)}ke(){this.xe=!1,this.Ce=x_()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,je(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class xC{constructor(e){this.We=e,this.Ge=new Map,this.ze=Qr(),this.je=oc(),this.Je=oc(),this.He=new it(Ce)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const i=this.tt(t);switch(e.state){case 0:this.nt(t)&&i.Be(e.resumeToken);break;case 1:i.Ue(),i.Oe||i.ke(),i.Be(e.resumeToken);break;case 2:i.Ue(),i.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(i.Ke(),i.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),i.Be(e.resumeToken));break;default:Ee(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((i,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,i=e.De.count,o=this.st(t);if(o){const l=o.target;if(kf(l))if(i===0){const h=new ye(l.path);this.Xe(t,h,$t.newNoDocument(h,Se.min()))}else je(i===1,20013,{expectedCount:i});else{const h=this.ot(t);if(h!==i){const f=this._t(e),m=f?this.ut(f,e,h):1;if(m!==0){this.rt(t);const y=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,y)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=Fi(i).toUint8Array()}catch(m){if(m instanceof bw)return Li("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{f=new Sp(h,o,l)}catch(m){return Li(m instanceof tl?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return f.fe===0?null:f}ut(e,t,i){return t.De.count===i-this.ht(e,t.targetId)?0:2}ht(e,t){const i=this.We.getRemoteKeysForTarget(t);let o=0;return i.forEach((l=>{const h=this.We.lt(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.Xe(t,l,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((l,h)=>{const f=this.st(h);if(f){if(l.current&&kf(f.target)){const m=new ye(f.target.path);this.Tt(m).has(h)||this.It(h,m)||this.Xe(h,m,$t.newNoDocument(m,e))}l.Ne&&(t.set(h,l.Le()),l.ke())}}));let i=De();this.Je.forEach(((l,h)=>{let f=!0;h.forEachWhile((m=>{const y=this.st(m);return!y||y.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(i=i.add(l))})),this.ze.forEach(((l,h)=>h.setReadTime(e)));const o=new ah(e,t,this.He,this.ze,i);return this.ze=Qr(),this.je=oc(),this.Je=oc(),this.He=new it(Ce),o}Ze(e,t){if(!this.nt(e))return;const i=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,i),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,i){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),i&&(this.ze=this.ze.insert(t,i))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new N_,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new It(Ce),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new It(Ce),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||ue("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new N_),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function oc(){return new it(ye.comparator)}function x_(){return new it(ye.comparator)}const DC={asc:"ASCENDING",desc:"DESCENDING"},OC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},bC={and:"AND",or:"OR"};class VC{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Df(n,e){return n.useProto3Json||th(e)?e:{value:e}}function Vc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hE(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function LC(n,e){return Vc(n,e.toTimestamp())}function gr(n){return je(!!n,49232),Se.fromTimestamp((function(t){const i=Ui(t);return new Ye(i.seconds,i.nanos)})(n))}function Ap(n,e){return Of(n,e).canonicalString()}function Of(n,e){const t=(function(o){return new Qe(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function dE(n){const e=Qe.fromString(n);return je(yE(e),10190,{key:e.toString()}),e}function bf(n,e){return Ap(n.databaseId,e.path)}function of(n,e){const t=dE(e);if(t.get(1)!==n.databaseId.projectId)throw new oe(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new oe(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ye(pE(t))}function fE(n,e){return Ap(n.databaseId,e)}function MC(n){const e=dE(n);return e.length===4?Qe.emptyPath():pE(e)}function Vf(n){return new Qe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function pE(n){return je(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function D_(n,e,t){return{name:bf(n,e),fields:t.value.mapValue.fields}}function UC(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Ee(39313,{state:y})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(y,v){return y.useProto3Json?(je(v===void 0||typeof v=="string",58123),Lt.fromBase64String(v||"")):(je(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),Lt.fromUint8Array(v||new Uint8Array))})(n,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&(function(y){const v=y.code===void 0?W.UNKNOWN:lE(y.code);return new oe(v,y.message||"")})(h);t=new cE(i,o,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=of(n,i.document.name),l=gr(i.document.updateTime),h=i.document.createTime?gr(i.document.createTime):Se.min(),f=new an({mapValue:{fields:i.document.fields}}),m=$t.newFoundDocument(o,l,h,f),y=i.targetIds||[],v=i.removedTargetIds||[];t=new vc(y,v,m.key,m)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=of(n,i.document),l=i.readTime?gr(i.readTime):Se.min(),h=$t.newNoDocument(o,l),f=i.removedTargetIds||[];t=new vc([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=of(n,i.document),l=i.removedTargetIds||[];t=new vc([],l,o,null)}else{if(!("filter"in e))return Ee(11601,{At:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,h=new PC(o,l),f=i.targetId;t=new uE(f,h)}}return t}function FC(n,e){let t;if(e instanceof Dl)t={update:D_(n,e.key,e.value)};else if(e instanceof aE)t={delete:bf(n,e.key)};else if(e instanceof Wi)t={update:D_(n,e.key,e.data),updateMask:KC(e.fieldMask)};else{if(!(e instanceof AC))return Ee(16599,{Rt:e.type});t={verify:bf(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,h){const f=h.transform;if(f instanceof vl)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof wl)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof El)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof bc)return{fieldPath:h.field.canonicalString(),increment:f.Ee};throw Ee(20930,{transform:h.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:LC(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Ee(27497)})(n,e.precondition)),t}function jC(n,e){return n&&n.length>0?(je(e!==void 0,14353),n.map((t=>(function(o,l){let h=o.updateTime?gr(o.updateTime):gr(l);return h.isEqual(Se.min())&&(h=gr(l)),new TC(h,o.transformResults||[])})(t,e)))):[]}function BC(n,e){return{documents:[fE(n,e.path)]}}function zC(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=fE(n,o);const l=(function(y){if(y.length!==0)return gE(Jn.create(y,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(y){if(y.length!==0)return y.map((v=>(function(I){return{field:Oo(I.field),direction:HC(I.dir)}})(v)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=Df(n,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{Vt:t,parent:o}}function $C(n){let e=MC(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){je(i===1,65062);const v=t.from[0];v.allDescendants?o=v.collectionId:e=e.child(v.collectionId)}let l=[];t.where&&(l=(function(T){const I=mE(T);return I instanceof Jn&&qw(I)?I.getFilters():[I]})(t.where));let h=[];t.orderBy&&(h=(function(T){return T.map((I=>(function(B){return new _l(bo(B.field),(function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(B.direction))})(I)))})(t.orderBy));let f=null;t.limit&&(f=(function(T){let I;return I=typeof T=="object"?T.value:T,th(I)?null:I})(t.limit));let m=null;t.startAt&&(m=(function(T){const I=!!T.before,L=T.values||[];return new Oc(L,I)})(t.startAt));let y=null;return t.endAt&&(y=(function(T){const I=!T.before,L=T.values||[];return new Oc(L,I)})(t.endAt)),lC(e,o,h,l,f,"F",m,y)}function qC(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ee(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function mE(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=bo(t.unaryFilter.field);return gt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=bo(t.unaryFilter.field);return gt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=bo(t.unaryFilter.field);return gt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=bo(t.unaryFilter.field);return gt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ee(61313);default:return Ee(60726)}})(n):n.fieldFilter!==void 0?(function(t){return gt.create(bo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ee(58110);default:return Ee(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Jn.create(t.compositeFilter.filters.map((i=>mE(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ee(1026)}})(t.compositeFilter.op))})(n):Ee(30097,{filter:n})}function HC(n){return DC[n]}function WC(n){return OC[n]}function GC(n){return bC[n]}function Oo(n){return{fieldPath:n.canonicalString()}}function bo(n){return Vt.fromServerFormat(n.fieldPath)}function gE(n){return n instanceof gt?(function(t){if(t.op==="=="){if(v_(t.value))return{unaryFilter:{field:Oo(t.field),op:"IS_NAN"}};if(__(t.value))return{unaryFilter:{field:Oo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(v_(t.value))return{unaryFilter:{field:Oo(t.field),op:"IS_NOT_NAN"}};if(__(t.value))return{unaryFilter:{field:Oo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Oo(t.field),op:WC(t.op),value:t.value}}})(n):n instanceof Jn?(function(t){const i=t.getFilters().map((o=>gE(o)));return i.length===1?i[0]:{compositeFilter:{op:GC(t.op),filters:i}}})(n):Ee(54877,{filter:n})}function KC(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function yE(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,t,i,o,l=Se.min(),h=Se.min(),f=Lt.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=m}withSequenceNumber(e){return new Pi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Pi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Pi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Pi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e){this.gt=e}}function XC(n){const e=$C({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?xf(e,e.limit,"L"):e}/**
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
 */class JC{constructor(){this.Dn=new YC}addToCollectionParentIndex(e,t){return this.Dn.add(t),G.resolve()}getCollectionParents(e,t){return G.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return G.resolve()}deleteFieldIndex(e,t){return G.resolve()}deleteAllFieldIndexes(e){return G.resolve()}createTargetIndexes(e,t){return G.resolve()}getDocumentsMatchingTarget(e,t){return G.resolve(null)}getIndexType(e,t){return G.resolve(0)}getFieldIndexes(e,t){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,t){return G.resolve(Mi.min())}getMinOffsetFromCollectionGroup(e,t){return G.resolve(Mi.min())}updateCollectionGroup(e,t,i){return G.resolve()}updateIndexEntries(e,t){return G.resolve()}}class YC{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new It(Qe.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new It(Qe.comparator)).toArray()}}/**
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
 */const O_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},_E=41943040;class sn{static withCacheSize(e){return new sn(e,sn.DEFAULT_COLLECTION_PERCENTILE,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn.DEFAULT_COLLECTION_PERCENTILE=10,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,sn.DEFAULT=new sn(_E,sn.DEFAULT_COLLECTION_PERCENTILE,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),sn.DISABLED=new sn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new qo(0)}static ur(){return new qo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_="LruGarbageCollector",ZC=1048576;function V_([n,e],[t,i]){const o=Ce(n,t);return o===0?Ce(e,i):o}class eP{constructor(e){this.Tr=e,this.buffer=new It(V_),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();V_(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class tP{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ue(b_,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Zo(t)?ue(b_,"Ignoring IndexedDB error during garbage collection: ",t):await Yo(t)}await this.Rr(3e5)}))}}class nP{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return G.resolve(eh.ue);const i=new eP(t);return this.Vr.forEachTarget(e,(o=>i.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>i.Er(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ue("LruGarbageCollector","Garbage collection skipped; disabled"),G.resolve(O_)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(ue("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),O_):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let i,o,l,h,f,m,y;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(ue("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,h=Date.now(),this.nthSequenceNumber(e,o)))).next((T=>(i=T,f=Date.now(),this.removeTargets(e,i,t)))).next((T=>(l=T,m=Date.now(),this.removeOrphanedDocuments(e,i)))).next((T=>(y=Date.now(),xo()<=xe.DEBUG&&ue("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-v}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${l} targets in `+(m-f)+`ms
	Removed ${T} documents in `+(y-m)+`ms
Total Duration: ${y-v}ms`),G.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T}))))}}function rP(n,e){return new nP(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(){this.changes=new bs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,$t.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?G.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class sP{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&ll(i.mutation,o,yn.empty(),Ye.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,De()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=De()){const o=As();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((l=>{let h=el();return l.forEach(((f,m)=>{h=h.insert(f,m.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const i=As();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,De())))}populateOverlays(e,t,i){const o=[];return i.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,f)=>{t.set(h,f)}))}))}computeViews(e,t,i,o){let l=Qr();const h=al(),f=(function(){return al()})();return t.forEach(((m,y)=>{const v=i.get(y.key);o.has(y.key)&&(v===void 0||v.mutation instanceof Wi)?l=l.insert(y.key,y):v!==void 0?(h.set(y.key,v.mutation.getFieldMask()),ll(v.mutation,y,v.mutation.getFieldMask(),Ye.now())):h.set(y.key,yn.empty())})),this.recalculateAndSaveOverlays(e,l).next((m=>(m.forEach(((y,v)=>h.set(y,v))),t.forEach(((y,v)=>{var T;return f.set(y,new sP(v,(T=h.get(y))!==null&&T!==void 0?T:null))})),f)))}recalculateAndSaveOverlays(e,t){const i=al();let o=new it(((h,f)=>h-f)),l=De();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const f of h)f.keys().forEach((m=>{const y=t.get(m);if(y===null)return;let v=i.get(m)||yn.empty();v=f.applyToLocalView(y,v),i.set(m,v);const T=(o.get(f.batchId)||De()).add(m);o=o.insert(f.batchId,T)}))})).next((()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const m=f.getNext(),y=m.key,v=m.value,T=Zw();v.forEach((I=>{if(!l.has(I)){const L=sE(t.get(I),i.get(I));L!==null&&T.set(I,L),l=l.add(I)}})),h.push(this.documentOverlayCache.saveOverlays(e,y,T))}return G.waitFor(h)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return(function(h){return ye.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Kw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):G.resolve(As());let f=pl,m=l;return h.next((y=>G.forEach(y,((v,T)=>(f<T.largestBatchId&&(f=T.largestBatchId),l.get(v)?G.resolve():this.remoteDocumentCache.getEntry(e,v).next((I=>{m=m.insert(v,I)}))))).next((()=>this.populateOverlays(e,y,l))).next((()=>this.computeViews(e,m,y,De()))).next((v=>({batchId:f,changes:Yw(v)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ye(t)).next((i=>{let o=el();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let h=el();return this.indexManager.getCollectionParents(e,l).next((f=>G.forEach(f,(m=>{const y=(function(T,I){return new ea(I,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,m.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next((v=>{v.forEach(((T,I)=>{h=h.insert(T,I)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o)))).next((h=>{l.forEach(((m,y)=>{const v=y.getKey();h.get(v)===null&&(h=h.insert(v,$t.newInvalidDocument(v)))}));let f=el();return h.forEach(((m,y)=>{const v=l.get(m);v!==void 0&&ll(v.mutation,y,yn.empty(),Ye.now()),ih(t,y)&&(f=f.insert(m,y))})),f}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return G.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:gr(o.createTime)}})(t)),G.resolve()}getNamedQuery(e,t){return G.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:XC(o.bundledQuery),readTime:gr(o.readTime)}})(t)),G.resolve()}}/**
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
 */class lP{constructor(){this.overlays=new it(ye.comparator),this.kr=new Map}getOverlay(e,t){return G.resolve(this.overlays.get(t))}getOverlays(e,t){const i=As();return G.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&i.set(o,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,l)=>{this.wt(e,t,l)})),G.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.kr.get(i);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.kr.delete(i)),G.resolve()}getOverlaysForCollection(e,t,i){const o=As(),l=t.length+1,h=new ye(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const m=f.getNext().value,y=m.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&m.largestBatchId>i&&o.set(m.getKey(),m)}return G.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new it(((y,v)=>y-v));const h=this.overlays.getIterator();for(;h.hasNext();){const y=h.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let v=l.get(y.largestBatchId);v===null&&(v=As(),l=l.insert(y.largestBatchId,v)),v.set(y.getKey(),y)}}const f=As(),m=l.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach(((y,v)=>f.set(y,v))),!(f.size()>=o)););return G.resolve(f)}wt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const h=this.kr.get(o.largestBatchId).delete(i.key);this.kr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(i.key,new CC(t,i));let l=this.kr.get(t);l===void 0&&(l=De(),this.kr.set(t,l)),this.kr.set(t,l.add(i.key))}}/**
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
 */class uP{constructor(){this.sessionToken=Lt.EMPTY_BYTE_STRING}getSessionToken(e){return G.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,G.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(){this.qr=new It(kt.Qr),this.$r=new It(kt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const i=new kt(e,t);this.qr=this.qr.add(i),this.$r=this.$r.add(i)}Kr(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new kt(e,t))}Gr(e,t){e.forEach((i=>this.removeReference(i,t)))}zr(e){const t=new ye(new Qe([])),i=new kt(t,e),o=new kt(t,e+1),l=[];return this.$r.forEachInRange([i,o],(h=>{this.Wr(h),l.push(h.key)})),l}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new ye(new Qe([])),i=new kt(t,e),o=new kt(t,e+1);let l=De();return this.$r.forEachInRange([i,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new kt(e,0),i=this.qr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class kt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return ye.comparator(e.key,t.key)||Ce(e.Hr,t.Hr)}static Ur(e,t){return Ce(e.Hr,t.Hr)||ye.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new It(kt.Qr)}checkEmpty(e){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new RC(l,t,i,o);this.mutationQueue.push(h);for(const f of o)this.Yr=this.Yr.add(new kt(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return G.resolve(h)}lookupMutationBatch(e,t){return G.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Xr(i),l=o<0?0:o;return G.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?gp:this.er-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new kt(t,0),o=new kt(t,Number.POSITIVE_INFINITY),l=[];return this.Yr.forEachInRange([i,o],(h=>{const f=this.Zr(h.Hr);l.push(f)})),G.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new It(Ce);return t.forEach((o=>{const l=new kt(o,0),h=new kt(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([l,h],(f=>{i=i.add(f.Hr)}))})),G.resolve(this.ei(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;ye.isDocumentKey(l)||(l=l.child(""));const h=new kt(new ye(l),0);let f=new It(Ce);return this.Yr.forEachWhile((m=>{const y=m.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(f=f.add(m.Hr)),!0)}),h),G.resolve(this.ei(f))}ei(e){const t=[];return e.forEach((i=>{const o=this.Zr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){je(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Yr;return G.forEach(t.mutations,(o=>{const l=new kt(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=i}))}rr(e){}containsKey(e,t){const i=new kt(t,0),o=this.Yr.firstAfterOrEqual(i);return G.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(e){this.ni=e,this.docs=(function(){return new it(ye.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,h=this.ni(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return G.resolve(i?i.document.mutableCopy():$t.newInvalidDocument(t))}getEntries(e,t){let i=Qr();return t.forEach((o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():$t.newInvalidDocument(o))})),G.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Qr();const h=t.path,f=new ye(h.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(f);for(;m.hasNext();){const{key:y,value:{document:v}}=m.getNext();if(!h.isPrefixOf(y.path))break;y.path.length>h.length+1||j1(F1(v),i)<=0||(o.has(v.key)||ih(t,v))&&(l=l.insert(v.key,v.mutableCopy()))}return G.resolve(l)}getAllFromCollectionGroup(e,t,i,o){Ee(9500)}ri(e,t){return G.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new dP(this)}getSize(e){return G.resolve(this.size)}}class dP extends iP{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(i)})),G.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(e){this.persistence=e,this.ii=new bs((t=>vp(t)),wp),this.lastRemoteSnapshotVersion=Se.min(),this.highestTargetId=0,this.si=0,this.oi=new Rp,this.targetCount=0,this._i=qo.ar()}forEachTarget(e,t){return this.ii.forEach(((i,o)=>t(o))),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.si&&(this.si=t),G.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new qo(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,G.resolve()}updateTargetData(e,t){return this.hr(t),G.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.ii.forEach(((h,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.ii.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),G.waitFor(l).next((()=>o))}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,t){const i=this.ii.get(t)||null;return G.resolve(i)}addMatchingKeys(e,t,i){return this.oi.Kr(t,i),G.resolve()}removeMatchingKeys(e,t,i){this.oi.Gr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),G.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),G.resolve()}getMatchingKeysForTargetId(e,t){const i=this.oi.Jr(t);return G.resolve(i)}containsKey(e,t){return G.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e,t){this.ai={},this.overlays={},this.ui=new eh(0),this.ci=!1,this.ci=!0,this.li=new uP,this.referenceDelegate=e(this),this.hi=new fP(this),this.indexManager=new JC,this.remoteDocumentCache=(function(o){return new hP(o)})((i=>this.referenceDelegate.Pi(i))),this.serializer=new QC(t),this.Ti=new aP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new lP,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ai[e.toKey()];return i||(i=new cP(t,this.referenceDelegate),this.ai[e.toKey()]=i),i}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,i){ue("MemoryPersistence","Starting transaction:",e);const o=new pP(this.ui.next());return this.referenceDelegate.Ii(),i(o).next((l=>this.referenceDelegate.di(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ei(e,t){return G.or(Object.values(this.ai).map((i=>()=>i.containsKey(e,t))))}}class pP extends z1{constructor(e){super(),this.currentSequenceNumber=e}}class Cp{constructor(e){this.persistence=e,this.Ai=new Rp,this.Ri=null}static Vi(e){return new Cp(e)}get mi(){if(this.Ri)return this.Ri;throw Ee(60996)}addReference(e,t,i){return this.Ai.addReference(i,t),this.mi.delete(i.toString()),G.resolve()}removeReference(e,t,i){return this.Ai.removeReference(i,t),this.mi.add(i.toString()),G.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),G.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.mi.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.mi,(i=>{const o=ye.fromPath(i);return this.fi(e,o).next((l=>{l||t.removeEntry(o,Se.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((i=>{i?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return G.or([()=>G.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Lc{constructor(e,t){this.persistence=e,this.gi=new bs((i=>H1(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=rP(this,t)}static Vi(e,t){return new Lc(e,t)}Ii(){}di(e){return G.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}yr(e){let t=0;return this.gr(e,(i=>{t++})).next((()=>t))}gr(e,t){return G.forEach(this.gi,((i,o)=>this.Sr(e,i,o).next((l=>l?G.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ri(e,(h=>this.Sr(e,h,t).next((f=>{f||(i++,l.removeEntry(h,Se.min()))})))).next((()=>l.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),G.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),G.resolve()}removeReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),G.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),G.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=gc(e.data.value)),t}Sr(e,t,i){return G.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return G.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Is=i,this.ds=o}static Es(e,t){let i=De(),o=De();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Pp(e,t.fromCache,i,o)}}/**
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
 */class mP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class gP{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return cS()?8:$1(qt())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.ps(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.ys(e,t,o,i).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new mP;return this.ws(e,t,h).next((f=>{if(l.result=f,this.Rs)return this.Ss(e,t,h,f.size)}))})).next((()=>l.result))}Ss(e,t,i,o){return i.documentReadCount<this.Vs?(xo()<=xe.DEBUG&&ue("QueryEngine","SDK will not create cache indexes for query:",Do(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),G.resolve()):(xo()<=xe.DEBUG&&ue("QueryEngine","Query:",Do(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.fs*o?(xo()<=xe.DEBUG&&ue("QueryEngine","The SDK decides to create cache indexes for query:",Do(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pr(t))):G.resolve())}ps(e,t){if(I_(t))return G.resolve(null);let i=pr(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=xf(t,null,"F"),i=pr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const h=De(...l);return this.gs.getDocuments(e,h).next((f=>this.indexManager.getMinOffset(e,i).next((m=>{const y=this.bs(t,f);return this.Ds(t,y,h,m.readTime)?this.ps(e,xf(t,null,"F")):this.vs(e,y,t,m)}))))})))))}ys(e,t,i,o){return I_(t)||o.isEqual(Se.min())?G.resolve(null):this.gs.getDocuments(e,i).next((l=>{const h=this.bs(t,l);return this.Ds(t,h,i,o)?G.resolve(null):(xo()<=xe.DEBUG&&ue("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Do(t)),this.vs(e,h,t,U1(o,pl)).next((f=>f)))}))}bs(e,t){let i=new It(Xw(e));return t.forEach(((o,l)=>{ih(e,l)&&(i=i.add(l))})),i}Ds(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ws(e,t,i){return xo()<=xe.DEBUG&&ue("QueryEngine","Using full collection scan to execute query:",Do(t)),this.gs.getDocumentsMatchingQuery(e,t,Mi.min(),i)}vs(e,t,i,o){return this.gs.getDocumentsMatchingQuery(e,i,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp="LocalStore",yP=3e8;class _P{constructor(e,t,i,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new it(Ce),this.Ms=new bs((l=>vp(l)),wp),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(i)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new oP(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function vP(n,e,t,i){return new _P(n,e,t,i)}async function wE(n,e){const t=Re(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((l=>(o=l,t.Ns(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const h=[],f=[];let m=De();for(const y of o){h.push(y.batchId);for(const v of y.mutations)m=m.add(v.key)}for(const y of l){f.push(y.batchId);for(const v of y.mutations)m=m.add(v.key)}return t.localDocuments.getDocuments(i,m).next((y=>({Bs:y,removedBatchIds:h,addedBatchIds:f})))}))}))}function wP(n,e){const t=Re(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),l=t.Os.newChangeBuffer({trackRemovals:!0});return(function(f,m,y,v){const T=y.batch,I=T.keys();let L=G.resolve();return I.forEach((B=>{L=L.next((()=>v.getEntry(m,B))).next((q=>{const D=y.docVersions.get(B);je(D!==null,48541),q.version.compareTo(D)<0&&(T.applyToRemoteDocument(q,y),q.isValidDocument()&&(q.setReadTime(y.commitVersion),v.addEntry(q)))}))})),L.next((()=>f.mutationQueue.removeMutationBatch(m,T)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(f){let m=De();for(let y=0;y<f.mutationResults.length;++y)f.mutationResults[y].transformResults.length>0&&(m=m.add(f.batch.mutations[y].key));return m})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function EE(n){const e=Re(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function EP(n,e){const t=Re(n),i=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const f=[];e.targetChanges.forEach(((v,T)=>{const I=o.get(T);if(!I)return;f.push(t.hi.removeMatchingKeys(l,v.removedDocuments,T).next((()=>t.hi.addMatchingKeys(l,v.addedDocuments,T))));let L=I.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?L=L.withResumeToken(Lt.EMPTY_BYTE_STRING,Se.min()).withLastLimboFreeSnapshotVersion(Se.min()):v.resumeToken.approximateByteSize()>0&&(L=L.withResumeToken(v.resumeToken,i)),o=o.insert(T,L),(function(q,D,ie){return q.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-q.snapshotVersion.toMicroseconds()>=yP?!0:ie.addedDocuments.size+ie.modifiedDocuments.size+ie.removedDocuments.size>0})(I,L,v)&&f.push(t.hi.updateTargetData(l,L))}));let m=Qr(),y=De();if(e.documentUpdates.forEach((v=>{e.resolvedLimboDocuments.has(v)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,v))})),f.push(TP(l,h,e.documentUpdates).next((v=>{m=v.Ls,y=v.ks}))),!i.isEqual(Se.min())){const v=t.hi.getLastRemoteSnapshotVersion(l).next((T=>t.hi.setTargetsMetadata(l,l.currentSequenceNumber,i)));f.push(v)}return G.waitFor(f).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,m,y))).next((()=>m))})).then((l=>(t.Fs=o,l)))}function TP(n,e,t){let i=De(),o=De();return t.forEach((l=>i=i.add(l))),e.getEntries(n,i).next((l=>{let h=Qr();return t.forEach(((f,m)=>{const y=l.get(f);m.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(f)),m.isNoDocument()&&m.version.isEqual(Se.min())?(e.removeEntry(f,m.readTime),h=h.insert(f,m)):!y.isValidDocument()||m.version.compareTo(y.version)>0||m.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(m),h=h.insert(f,m)):ue(kp,"Ignoring outdated watch update for ",f,". Current version:",y.version," Watch version:",m.version)})),{Ls:h,ks:o}}))}function IP(n,e){const t=Re(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=gp),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function SP(n,e){const t=Re(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.hi.getTargetData(i,e).next((l=>l?(o=l,G.resolve(o)):t.hi.allocateTargetId(i).next((h=>(o=new Pi(e,h,"TargetPurposeListen",i.currentSequenceNumber),t.hi.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.Fs.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(i.targetId,i),t.Ms.set(e,i.targetId)),i}))}async function Lf(n,e,t){const i=Re(n),o=i.Fs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(h=>i.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Zo(h))throw h;ue(kp,`Failed to update sequence numbers for target ${e}: ${h}`)}i.Fs=i.Fs.remove(e),i.Ms.delete(o.target)}function L_(n,e,t){const i=Re(n);let o=Se.min(),l=De();return i.persistence.runTransaction("Execute query","readwrite",(h=>(function(m,y,v){const T=Re(m),I=T.Ms.get(v);return I!==void 0?G.resolve(T.Fs.get(I)):T.hi.getTargetData(y,v)})(i,h,pr(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,i.hi.getMatchingKeysForTargetId(h,f.targetId).next((m=>{l=m}))})).next((()=>i.Cs.getDocumentsMatchingQuery(h,e,t?o:Se.min(),t?l:De()))).next((f=>(AP(i,cC(e),f),{documents:f,qs:l})))))}function AP(n,e,t){let i=n.xs.get(e)||Se.min();t.forEach(((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),n.xs.set(e,i)}class M_{constructor(){this.activeTargetIds=gC()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class RP{constructor(){this.Fo=new M_,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,i){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new M_,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class CP{xo(e){}shutdown(){}}/**
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
 */const U_="ConnectivityMonitor";class F_{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ue(U_,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ue(U_,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ac=null;function Mf(){return ac===null?ac=(function(){return 268435456+Math.round(2147483648*Math.random())})():ac++,"0x"+ac.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af="RestConnection",PP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class kP{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${i}/databases/${o}`,this.Ko=this.databaseId.database===xc?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Wo(e,t,i,o,l){const h=Mf(),f=this.Go(e,t.toUriEncodedString());ue(af,`Sending RPC '${e}' ${h}:`,f,i);const m={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(m,o,l);const{host:y}=new URL(f),v=Xr(y);return this.jo(e,f,m,i,v).then((T=>(ue(af,`Received RPC '${e}' ${h}: `,T),T)),(T=>{throw Li(af,`RPC '${e}' ${h} failed with error: `,T,"url: ",f,"request:",i),T}))}Jo(e,t,i,o,l,h){return this.Wo(e,t,i,o,l)}zo(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Jo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),i&&i.headers.forEach(((o,l)=>e[l]=o))}Go(e,t){const i=PP[e];return`${this.$o}/v1/${t}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt="WebChannelConnection";class xP extends kP{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,i,o,l){const h=Mf();return new Promise(((f,m)=>{const y=new Tw;y.setWithCredentials(!0),y.listenOnce(Iw.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case mc.NO_ERROR:const T=y.getResponseJson();ue(Bt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(T)),f(T);break;case mc.TIMEOUT:ue(Bt,`RPC '${e}' ${h} timed out`),m(new oe(W.DEADLINE_EXCEEDED,"Request time out"));break;case mc.HTTP_ERROR:const I=y.getStatus();if(ue(Bt,`RPC '${e}' ${h} failed with status:`,I,"response text:",y.getResponseText()),I>0){let L=y.getResponseJson();Array.isArray(L)&&(L=L[0]);const B=L==null?void 0:L.error;if(B&&B.status&&B.message){const q=(function(ie){const te=ie.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(te)>=0?te:W.UNKNOWN})(B.status);m(new oe(q,B.message))}else m(new oe(W.UNKNOWN,"Server responded with status "+y.getStatus()))}else m(new oe(W.UNAVAILABLE,"Connection failed."));break;default:Ee(9055,{c_:e,streamId:h,l_:y.getLastErrorCode(),h_:y.getLastError()})}}finally{ue(Bt,`RPC '${e}' ${h} completed.`)}}));const v=JSON.stringify(o);ue(Bt,`RPC '${e}' ${h} sending request:`,o),y.send(t,"POST",v,i,15)}))}P_(e,t,i){const o=Mf(),l=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Rw(),f=Aw(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(m.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(m.useFetchStreams=!0),this.zo(m.initMessageHeaders,t,i),m.encodeInitMessageHeaders=!0;const v=l.join("");ue(Bt,`Creating RPC '${e}' stream ${o}: ${v}`,m);const T=h.createWebChannel(v,m);this.T_(T);let I=!1,L=!1;const B=new NP({Ho:D=>{L?ue(Bt,`Not sending because RPC '${e}' stream ${o} is closed:`,D):(I||(ue(Bt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),I=!0),ue(Bt,`RPC '${e}' stream ${o} sending:`,D),T.send(D))},Yo:()=>T.close()}),q=(D,ie,te)=>{D.listen(ie,(J=>{try{te(J)}catch(se){setTimeout((()=>{throw se}),0)}}))};return q(T,Za.EventType.OPEN,(()=>{L||(ue(Bt,`RPC '${e}' stream ${o} transport opened.`),B.s_())})),q(T,Za.EventType.CLOSE,(()=>{L||(L=!0,ue(Bt,`RPC '${e}' stream ${o} transport closed`),B.__(),this.I_(T))})),q(T,Za.EventType.ERROR,(D=>{L||(L=!0,Li(Bt,`RPC '${e}' stream ${o} transport errored. Name:`,D.name,"Message:",D.message),B.__(new oe(W.UNAVAILABLE,"The operation could not be completed")))})),q(T,Za.EventType.MESSAGE,(D=>{var ie;if(!L){const te=D.data[0];je(!!te,16349);const J=te,se=(J==null?void 0:J.error)||((ie=J[0])===null||ie===void 0?void 0:ie.error);if(se){ue(Bt,`RPC '${e}' stream ${o} received error:`,se);const Ae=se.status;let he=(function(C){const k=mt[C];if(k!==void 0)return lE(k)})(Ae),x=se.message;he===void 0&&(he=W.INTERNAL,x="Unknown error status: "+Ae+" with message "+se.message),L=!0,B.__(new oe(he,x)),T.close()}else ue(Bt,`RPC '${e}' stream ${o} received:`,te),B.a_(te)}})),q(f,Sw.STAT_EVENT,(D=>{D.stat===Sf.PROXY?ue(Bt,`RPC '${e}' stream ${o} detected buffering proxy`):D.stat===Sf.NOPROXY&&ue(Bt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{B.o_()}),0),B}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function lf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(n){return new VC(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e,t,i=1e3,o=1.5,l=6e4){this.Fi=e,this.timerId=t,this.d_=i,this.E_=o,this.A_=l,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),i=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-i);o>0&&ue("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_="PersistentStream";class IE{constructor(e,t,i,o,l,h,f,m){this.Fi=e,this.w_=i,this.S_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=m,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new TE(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===W.RESOURCE_EXHAUSTED?(Gr(t.toString()),Gr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.b_===t&&this.W_(i,o)}),(i=>{e((()=>{const o=new oe(W.UNKNOWN,"Fetching auth token failed: "+i.message);return this.G_(o)}))}))}W_(e,t){const i=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.e_((()=>{i((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{i((()=>this.G_(o)))})),this.stream.onMessage((o=>{i((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return ue(j_,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(ue(j_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class DP extends IE{constructor(e,t,i,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=UC(this.serializer,e),i=(function(l){if(!("targetChange"in l))return Se.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?Se.min():h.readTime?gr(h.readTime):Se.min()})(e);return this.listener.J_(t,i)}H_(e){const t={};t.database=Vf(this.serializer),t.addTarget=(function(l,h){let f;const m=h.target;if(f=kf(m)?{documents:BC(l,m)}:{query:zC(l,m).Vt},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=hE(l,h.resumeToken);const y=Df(l,h.expectedCount);y!==null&&(f.expectedCount=y)}else if(h.snapshotVersion.compareTo(Se.min())>0){f.readTime=Vc(l,h.snapshotVersion.toTimestamp());const y=Df(l,h.expectedCount);y!==null&&(f.expectedCount=y)}return f})(this.serializer,e);const i=qC(this.serializer,e);i&&(t.labels=i),this.k_(t)}Y_(e){const t={};t.database=Vf(this.serializer),t.removeTarget=e,this.k_(t)}}class OP extends IE{constructor(e,t,i,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return je(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,je(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){je(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=jC(e.writeResults,e.commitTime),i=gr(e.commitTime);return this.listener.ta(i,t)}na(){const e={};e.database=Vf(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>FC(this.serializer,i)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bP{}class VP extends bP{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new oe(W.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Wo(e,Of(t,i),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new oe(W.UNKNOWN,l.toString())}))}Jo(e,t,i,o,l){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,f])=>this.connection.Jo(e,Of(t,i),o,h,f,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new oe(W.UNKNOWN,h.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class LP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Gr(t),this._a=!1):ue("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs="RemoteStore";class MP{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=l,this.Ea.xo((h=>{i.enqueueAndForget((async()=>{Vs(this)&&(ue(xs,"Restarting streams for network reachability change."),await(async function(m){const y=Re(m);y.Ia.add(4),await bl(y),y.Aa.set("Unknown"),y.Ia.delete(4),await uh(y)})(this))}))})),this.Aa=new LP(i,o)}}async function uh(n){if(Vs(n))for(const e of n.da)await e(!0)}async function bl(n){for(const e of n.da)await e(!1)}function SE(n,e){const t=Re(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Op(t)?Dp(t):ta(t).x_()&&xp(t,e))}function Np(n,e){const t=Re(n),i=ta(t);t.Ta.delete(e),i.x_()&&AE(t,e),t.Ta.size===0&&(i.x_()?i.B_():Vs(t)&&t.Aa.set("Unknown"))}function xp(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Se.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ta(n).H_(e)}function AE(n,e){n.Ra.$e(e),ta(n).Y_(e)}function Dp(n){n.Ra=new xC({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),ta(n).start(),n.Aa.aa()}function Op(n){return Vs(n)&&!ta(n).M_()&&n.Ta.size>0}function Vs(n){return Re(n).Ia.size===0}function RE(n){n.Ra=void 0}async function UP(n){n.Aa.set("Online")}async function FP(n){n.Ta.forEach(((e,t)=>{xp(n,e)}))}async function jP(n,e){RE(n),Op(n)?(n.Aa.la(e),Dp(n)):n.Aa.set("Unknown")}async function BP(n,e,t){if(n.Aa.set("Online"),e instanceof cE&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const f of l.targetIds)o.Ta.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.Ta.delete(f),o.Ra.removeTarget(f))})(n,e)}catch(i){ue(xs,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Mc(n,i)}else if(e instanceof vc?n.Ra.Ye(e):e instanceof uE?n.Ra.it(e):n.Ra.et(e),!t.isEqual(Se.min()))try{const i=await EE(n.localStore);t.compareTo(i)>=0&&await(function(l,h){const f=l.Ra.Pt(h);return f.targetChanges.forEach(((m,y)=>{if(m.resumeToken.approximateByteSize()>0){const v=l.Ta.get(y);v&&l.Ta.set(y,v.withResumeToken(m.resumeToken,h))}})),f.targetMismatches.forEach(((m,y)=>{const v=l.Ta.get(m);if(!v)return;l.Ta.set(m,v.withResumeToken(Lt.EMPTY_BYTE_STRING,v.snapshotVersion)),AE(l,m);const T=new Pi(v.target,m,y,v.sequenceNumber);xp(l,T)})),l.remoteSyncer.applyRemoteEvent(f)})(n,t)}catch(i){ue(xs,"Failed to raise snapshot:",i),await Mc(n,i)}}async function Mc(n,e,t){if(!Zo(e))throw e;n.Ia.add(1),await bl(n),n.Aa.set("Offline"),t||(t=()=>EE(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{ue(xs,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await uh(n)}))}function CE(n,e){return e().catch((t=>Mc(n,t,e)))}async function ch(n){const e=Re(n),t=Bi(e);let i=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:gp;for(;zP(e);)try{const o=await IP(e.localStore,i);if(o===null){e.Pa.length===0&&t.B_();break}i=o.batchId,$P(e,o)}catch(o){await Mc(e,o)}PE(e)&&kE(e)}function zP(n){return Vs(n)&&n.Pa.length<10}function $P(n,e){n.Pa.push(e);const t=Bi(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function PE(n){return Vs(n)&&!Bi(n).M_()&&n.Pa.length>0}function kE(n){Bi(n).start()}async function qP(n){Bi(n).na()}async function HP(n){const e=Bi(n);for(const t of n.Pa)e.X_(t.mutations)}async function WP(n,e,t){const i=n.Pa.shift(),o=Ip.from(i,e,t);await CE(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await ch(n)}async function GP(n,e){e&&Bi(n).Z_&&await(async function(i,o){if((function(h){return kC(h)&&h!==W.ABORTED})(o.code)){const l=i.Pa.shift();Bi(i).N_(),await CE(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o))),await ch(i)}})(n,e),PE(n)&&kE(n)}async function B_(n,e){const t=Re(n);t.asyncQueue.verifyOperationInProgress(),ue(xs,"RemoteStore received new credentials");const i=Vs(t);t.Ia.add(3),await bl(t),i&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await uh(t)}async function KP(n,e){const t=Re(n);e?(t.Ia.delete(2),await uh(t)):e||(t.Ia.add(2),await bl(t),t.Aa.set("Unknown"))}function ta(n){return n.Va||(n.Va=(function(t,i,o){const l=Re(t);return l.ia(),new DP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Zo:UP.bind(null,n),e_:FP.bind(null,n),n_:jP.bind(null,n),J_:BP.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),Op(n)?Dp(n):n.Aa.set("Unknown")):(await n.Va.stop(),RE(n))}))),n.Va}function Bi(n){return n.ma||(n.ma=(function(t,i,o){const l=Re(t);return l.ia(),new OP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:qP.bind(null,n),n_:GP.bind(null,n),ea:HP.bind(null,n),ta:WP.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await ch(n)):(await n.ma.stop(),n.Pa.length>0&&(ue(xs,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new $r,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const h=Date.now()+i,f=new bp(e,t,h,o,l);return f.start(i),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new oe(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vp(n,e){if(Gr("AsyncQueue",`${e}: ${n}`),Zo(n))return new oe(W.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{static emptySet(e){return new Uo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||ye.comparator(t.key,i.key):(t,i)=>ye.comparator(t.key,i.key),this.keyedMap=el(),this.sortedSet=new it(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Uo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Uo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(){this.fa=new it(ye.comparator)}track(e){const t=e.doc.key,i=this.fa.get(t);i?e.type!==0&&i.type===3?this.fa=this.fa.insert(t,e):e.type===3&&i.type!==1?this.fa=this.fa.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.fa=this.fa.remove(t):e.type===1&&i.type===2?this.fa=this.fa.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):Ee(63341,{At:e,ga:i}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Ho{constructor(e,t,i,o,l,h,f,m,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=m,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const h=[];return t.forEach((f=>{h.push({type:0,doc:f})})),new Ho(e,t,Uo.emptySet(t),h,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&rh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QP{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class XP{constructor(){this.queries=$_(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,i){const o=Re(t),l=o.queries;o.queries=$_(),l.forEach(((h,f)=>{for(const m of f.wa)m.onError(i)}))})(this,new oe(W.ABORTED,"Firestore shutting down"))}}function $_(){return new bs((n=>Qw(n)),rh)}async function NE(n,e){const t=Re(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Sa()&&e.ba()&&(i=2):(l=new QP,i=e.ba()?0:1);try{switch(i){case 0:l.ya=await t.onListen(o,!0);break;case 1:l.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=Vp(h,`Initialization of query '${Do(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.wa.push(e),e.va(t.onlineState),l.ya&&e.Ca(l.ya)&&Lp(t)}async function xE(n,e){const t=Re(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const h=l.wa.indexOf(e);h>=0&&(l.wa.splice(h,1),l.wa.length===0?o=e.ba()?0:1:!l.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function JP(n,e){const t=Re(n);let i=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.wa)f.Ca(o)&&(i=!0);h.ya=o}}i&&Lp(t)}function YP(n,e,t){const i=Re(n),o=i.queries.get(e);if(o)for(const l of o.wa)l.onError(t);i.queries.delete(e)}function Lp(n){n.Da.forEach((e=>{e.next()}))}var Uf,q_;(q_=Uf||(Uf={})).Fa="default",q_.Cache="cache";class DE{constructor(e,t,i){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=i||{}}Ca(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Ho(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const i=t!=="Offline";return(!this.options.ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Ho.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Uf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e){this.key=e}}class bE{constructor(e){this.key=e}}class ZP{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=De(),this.mutatedKeys=De(),this.Xa=Xw(e),this.eu=new Uo(this.Xa)}get tu(){return this.Ha}nu(e,t){const i=t?t.ru:new z_,o=t?t.eu:this.eu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const m=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((v,T)=>{const I=o.get(v),L=ih(this.query,T)?T:null,B=!!I&&this.mutatedKeys.has(I.key),q=!!L&&(L.hasLocalMutations||this.mutatedKeys.has(L.key)&&L.hasCommittedMutations);let D=!1;I&&L?I.data.isEqual(L.data)?B!==q&&(i.track({type:3,doc:L}),D=!0):this.iu(I,L)||(i.track({type:2,doc:L}),D=!0,(m&&this.Xa(L,m)>0||y&&this.Xa(L,y)<0)&&(f=!0)):!I&&L?(i.track({type:0,doc:L}),D=!0):I&&!L&&(i.track({type:1,doc:I}),D=!0,(m||y)&&(f=!0)),D&&(L?(h=h.add(L),l=q?l.add(v):l.delete(v)):(h=h.delete(v),l=l.delete(v)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const v=this.query.limitType==="F"?h.last():h.first();h=h.delete(v.key),l=l.delete(v.key),i.track({type:1,doc:v})}return{eu:h,ru:i,Ds:f,mutatedKeys:l}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const h=e.ru.pa();h.sort(((v,T)=>(function(L,B){const q=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ee(20277,{At:D})}};return q(L)-q(B)})(v.type,T.type)||this.Xa(v.doc,T.doc))),this.su(i),o=o!=null&&o;const f=t&&!o?this.ou():[],m=this.Za.size===0&&this.current&&!o?1:0,y=m!==this.Ya;return this.Ya=m,h.length!==0||y?{snapshot:new Ho(this.query,e.eu,l,h,e.mutatedKeys,m===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),_u:f}:{_u:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new z_,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=De(),this.eu.forEach((i=>{this.au(i.key)&&(this.Za=this.Za.add(i.key))}));const t=[];return e.forEach((i=>{this.Za.has(i)||t.push(new bE(i))})),this.Za.forEach((i=>{e.has(i)||t.push(new OE(i))})),t}uu(e){this.Ha=e.qs,this.Za=De();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Ho.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Mp="SyncEngine";class ek{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class tk{constructor(e){this.key=e,this.lu=!1}}class nk{constructor(e,t,i,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.hu={},this.Pu=new bs((f=>Qw(f)),rh),this.Tu=new Map,this.Iu=new Set,this.du=new it(ye.comparator),this.Eu=new Map,this.Au=new Rp,this.Ru={},this.Vu=new Map,this.mu=qo.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function rk(n,e,t=!0){const i=jE(n);let o;const l=i.Pu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.cu()):o=await VE(i,e,t,!0),o}async function ik(n,e){const t=jE(n);await VE(t,e,!0,!1)}async function VE(n,e,t,i){const o=await SP(n.localStore,pr(e)),l=o.targetId,h=n.sharedClientState.addLocalQueryTarget(l,t);let f;return i&&(f=await sk(n,e,l,h==="current",o.resumeToken)),n.isPrimaryClient&&t&&SE(n.remoteStore,o),f}async function sk(n,e,t,i,o){n.gu=(T,I,L)=>(async function(q,D,ie,te){let J=D.view.nu(ie);J.Ds&&(J=await L_(q.localStore,D.query,!1).then((({documents:x})=>D.view.nu(x,J))));const se=te&&te.targetChanges.get(D.targetId),Ae=te&&te.targetMismatches.get(D.targetId)!=null,he=D.view.applyChanges(J,q.isPrimaryClient,se,Ae);return W_(q,D.targetId,he._u),he.snapshot})(n,T,I,L);const l=await L_(n.localStore,e,!0),h=new ZP(e,l.qs),f=h.nu(l.documents),m=Ol.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=h.applyChanges(f,n.isPrimaryClient,m);W_(n,t,y._u);const v=new ek(e,t,h);return n.Pu.set(e,v),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),y.snapshot}async function ok(n,e,t){const i=Re(n),o=i.Pu.get(e),l=i.Tu.get(o.targetId);if(l.length>1)return i.Tu.set(o.targetId,l.filter((h=>!rh(h,e)))),void i.Pu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await Lf(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&Np(i.remoteStore,o.targetId),Ff(i,o.targetId)})).catch(Yo)):(Ff(i,o.targetId),await Lf(i.localStore,o.targetId,!0))}async function ak(n,e){const t=Re(n),i=t.Pu.get(e),o=t.Tu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Np(t.remoteStore,i.targetId))}async function lk(n,e,t){const i=mk(n);try{const o=await(function(h,f){const m=Re(h),y=Ye.now(),v=f.reduce(((L,B)=>L.add(B.key)),De());let T,I;return m.persistence.runTransaction("Locally write mutations","readwrite",(L=>{let B=Qr(),q=De();return m.Os.getEntries(L,v).next((D=>{B=D,B.forEach(((ie,te)=>{te.isValidDocument()||(q=q.add(ie))}))})).next((()=>m.localDocuments.getOverlayedDocuments(L,B))).next((D=>{T=D;const ie=[];for(const te of f){const J=SC(te,T.get(te.key).overlayedDocument);J!=null&&ie.push(new Wi(te.key,J,Bw(J.value.mapValue),mr.exists(!0)))}return m.mutationQueue.addMutationBatch(L,y,ie,f)})).next((D=>{I=D;const ie=D.applyToLocalDocumentSet(T,q);return m.documentOverlayCache.saveOverlays(L,D.batchId,ie)}))})).then((()=>({batchId:I.batchId,changes:Yw(T)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(h,f,m){let y=h.Ru[h.currentUser.toKey()];y||(y=new it(Ce)),y=y.insert(f,m),h.Ru[h.currentUser.toKey()]=y})(i,o.batchId,t),await Vl(i,o.changes),await ch(i.remoteStore)}catch(o){const l=Vp(o,"Failed to persist write");t.reject(l)}}async function LE(n,e){const t=Re(n);try{const i=await EP(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.Eu.get(l);h&&(je(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.lu=!0:o.modifiedDocuments.size>0?je(h.lu,14607):o.removedDocuments.size>0&&(je(h.lu,42227),h.lu=!1))})),await Vl(t,i,e)}catch(i){await Yo(i)}}function H_(n,e,t){const i=Re(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Pu.forEach(((l,h)=>{const f=h.view.va(e);f.snapshot&&o.push(f.snapshot)})),(function(h,f){const m=Re(h);m.onlineState=f;let y=!1;m.queries.forEach(((v,T)=>{for(const I of T.wa)I.va(f)&&(y=!0)})),y&&Lp(m)})(i.eventManager,e),o.length&&i.hu.J_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function uk(n,e,t){const i=Re(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Eu.get(e),l=o&&o.key;if(l){let h=new it(ye.comparator);h=h.insert(l,$t.newNoDocument(l,Se.min()));const f=De().add(l),m=new ah(Se.min(),new Map,new it(Ce),h,f);await LE(i,m),i.du=i.du.remove(l),i.Eu.delete(e),Up(i)}else await Lf(i.localStore,e,!1).then((()=>Ff(i,e,t))).catch(Yo)}async function ck(n,e){const t=Re(n),i=e.batch.batchId;try{const o=await wP(t.localStore,e);UE(t,i,null),ME(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Vl(t,o)}catch(o){await Yo(o)}}async function hk(n,e,t){const i=Re(n);try{const o=await(function(h,f){const m=Re(h);return m.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let v;return m.mutationQueue.lookupMutationBatch(y,f).next((T=>(je(T!==null,37113),v=T.keys(),m.mutationQueue.removeMutationBatch(y,T)))).next((()=>m.mutationQueue.performConsistencyCheck(y))).next((()=>m.documentOverlayCache.removeOverlaysForBatchId(y,v,f))).next((()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,v))).next((()=>m.localDocuments.getDocuments(y,v)))}))})(i.localStore,e);UE(i,e,t),ME(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Vl(i,o)}catch(o){await Yo(o)}}function ME(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function UE(n,e,t){const i=Re(n);let o=i.Ru[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.Ru[i.currentUser.toKey()]=o}}function Ff(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Tu.get(e))n.Pu.delete(i),t&&n.hu.pu(i,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((i=>{n.Au.containsKey(i)||FE(n,i)}))}function FE(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Np(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Up(n))}function W_(n,e,t){for(const i of t)i instanceof OE?(n.Au.addReference(i.key,e),dk(n,i)):i instanceof bE?(ue(Mp,"Document no longer in limbo: "+i.key),n.Au.removeReference(i.key,e),n.Au.containsKey(i.key)||FE(n,i.key)):Ee(19791,{yu:i})}function dk(n,e){const t=e.key,i=t.path.canonicalString();n.du.get(t)||n.Iu.has(i)||(ue(Mp,"New document in limbo: "+t),n.Iu.add(i),Up(n))}function Up(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new ye(Qe.fromString(e)),i=n.mu.next();n.Eu.set(i,new tk(t)),n.du=n.du.insert(t,i),SE(n.remoteStore,new Pi(pr(Ep(t.path)),i,"TargetPurposeLimboResolution",eh.ue))}}async function Vl(n,e,t){const i=Re(n),o=[],l=[],h=[];i.Pu.isEmpty()||(i.Pu.forEach(((f,m)=>{h.push(i.gu(m,e,t).then((y=>{var v;if((y||t)&&i.isPrimaryClient){const T=y?!y.fromCache:(v=t==null?void 0:t.targetChanges.get(m.targetId))===null||v===void 0?void 0:v.current;i.sharedClientState.updateQueryState(m.targetId,T?"current":"not-current")}if(y){o.push(y);const T=Pp.Es(m.targetId,y);l.push(T)}})))})),await Promise.all(h),i.hu.J_(o),await(async function(m,y){const v=Re(m);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>G.forEach(y,(I=>G.forEach(I.Is,(L=>v.persistence.referenceDelegate.addReference(T,I.targetId,L))).next((()=>G.forEach(I.ds,(L=>v.persistence.referenceDelegate.removeReference(T,I.targetId,L)))))))))}catch(T){if(!Zo(T))throw T;ue(kp,"Failed to update sequence numbers: "+T)}for(const T of y){const I=T.targetId;if(!T.fromCache){const L=v.Fs.get(I),B=L.snapshotVersion,q=L.withLastLimboFreeSnapshotVersion(B);v.Fs=v.Fs.insert(I,q)}}})(i.localStore,l))}async function fk(n,e){const t=Re(n);if(!t.currentUser.isEqual(e)){ue(Mp,"User change. New user:",e.toKey());const i=await wE(t.localStore,e);t.currentUser=e,(function(l,h){l.Vu.forEach((f=>{f.forEach((m=>{m.reject(new oe(W.CANCELLED,h))}))})),l.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Vl(t,i.Bs)}}function pk(n,e){const t=Re(n),i=t.Eu.get(e);if(i&&i.lu)return De().add(i.key);{let o=De();const l=t.Tu.get(e);if(!l)return o;for(const h of l){const f=t.Pu.get(h);o=o.unionWith(f.view.tu)}return o}}function jE(n){const e=Re(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=LE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=pk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=uk.bind(null,e),e.hu.J_=JP.bind(null,e.eventManager),e.hu.pu=YP.bind(null,e.eventManager),e}function mk(n){const e=Re(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ck.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=hk.bind(null,e),e}class Uc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=lh(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return vP(this.persistence,new gP,e.initialUser,this.serializer)}Du(e){return new vE(Cp.Vi,this.serializer)}bu(e){return new RP}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Uc.provider={build:()=>new Uc};class gk extends Uc{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){je(this.persistence.referenceDelegate instanceof Lc,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new tP(i,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?sn.withCacheSize(this.cacheSizeBytes):sn.DEFAULT;return new vE((i=>Lc.Vi(i,t)),this.serializer)}}class jf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>H_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=fk.bind(null,this.syncEngine),await KP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new XP})()}createDatastore(e){const t=lh(e.databaseInfo.databaseId),i=(function(l){return new xP(l)})(e.databaseInfo);return(function(l,h,f,m){return new VP(l,h,f,m)})(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,l,h,f){return new MP(i,o,l,h,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>H_(this.syncEngine,t,0)),(function(){return F_.C()?new F_:new CP})())}createSyncEngine(e,t){return(function(o,l,h,f,m,y,v){const T=new nk(o,l,h,f,m,y);return v&&(T.fu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Re(o);ue(xs,"RemoteStore shutting down."),l.Ia.add(5),await bl(l),l.Ea.shutdown(),l.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}jf.provider={build:()=>new jf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class BE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Gr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi="FirestoreClient";class yk{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=zt.UNAUTHENTICATED,this.clientId=mp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,(async h=>{ue(zi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(i,(h=>(ue(zi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $r;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Vp(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function uf(n,e){n.asyncQueue.verifyOperationInProgress(),ue(zi,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async o=>{i.isEqual(o)||(await wE(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>{Li("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{ue("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{Li("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),n._offlineComponents=e}async function G_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await _k(n);ue(zi,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>B_(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,o)=>B_(e.remoteStore,o))),n._onlineComponents=e}async function _k(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ue(zi,"Using user provided OfflineComponentProvider");try{await uf(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===W.FAILED_PRECONDITION||o.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Li("Error using user provided cache. Falling back to memory cache: "+t),await uf(n,new Uc)}}else ue(zi,"Using default OfflineComponentProvider"),await uf(n,new gk(void 0));return n._offlineComponents}async function zE(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ue(zi,"Using user provided OnlineComponentProvider"),await G_(n,n._uninitializedComponentsProvider._online)):(ue(zi,"Using default OnlineComponentProvider"),await G_(n,new jf))),n._onlineComponents}function vk(n){return zE(n).then((e=>e.syncEngine))}async function $E(n){const e=await zE(n),t=e.eventManager;return t.onListen=rk.bind(null,e.syncEngine),t.onUnlisten=ok.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=ik.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=ak.bind(null,e.syncEngine),t}function wk(n,e,t={}){const i=new $r;return n.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,m,y){const v=new BE({next:I=>{v.Ou(),h.enqueueAndForget((()=>xE(l,T)));const L=I.docs.has(f);!L&&I.fromCache?y.reject(new oe(W.UNAVAILABLE,"Failed to get document because the client is offline.")):L&&I.fromCache&&m&&m.source==="server"?y.reject(new oe(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(I)},error:I=>y.reject(I)}),T=new DE(Ep(f.path),v,{includeMetadataChanges:!0,ka:!0});return NE(l,T)})(await $E(n),n.asyncQueue,e,t,i))),i.promise}function Ek(n,e,t={}){const i=new $r;return n.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,m,y){const v=new BE({next:I=>{v.Ou(),h.enqueueAndForget((()=>xE(l,T))),I.fromCache&&m.source==="server"?y.reject(new oe(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(I)},error:I=>y.reject(I)}),T=new DE(f,v,{includeMetadataChanges:!0,ka:!0});return NE(l,T)})(await $E(n),n.asyncQueue,e,t,i))),i.promise}/**
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
 */function qE(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE="firestore.googleapis.com",Q_=!0;class X_{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new oe(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=HE,this.ssl=Q_}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Q_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=_E;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ZC)throw new oe(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}M1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qE((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),(function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new oe(W.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new oe(W.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new oe(W.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class hh{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new X_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new oe(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new oe(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new X_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new P1;switch(i.type){case"firstParty":return new D1(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new oe(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=K_.get(t);i&&(ue("ComponentProvider","Removing Datastore"),K_.delete(t),i.terminate())})(this),Promise.resolve()}}function Tk(n,e,t,i={}){var o;n=Kr(n,hh);const l=Xr(e),h=n._getSettings(),f=Object.assign(Object.assign({},h),{emulatorOptions:n._getEmulatorOptions()}),m=`${e}:${t}`;l&&(Wc(`https://${m}`),Gc("Firestore",!0)),h.host!==HE&&h.host!==m&&Li("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y=Object.assign(Object.assign({},h),{host:m,ssl:l,emulatorOptions:i});if(!Ps(y,f)&&(n._setSettings(y),i.mockUserToken)){let v,T;if(typeof i.mockUserToken=="string")v=i.mockUserToken,T=zt.MOCK_USER;else{v=bv(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const I=i.mockUserToken.sub||i.mockUserToken.user_id;if(!I)throw new oe(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new zt(I)}n._authCredentials=new k1(new Pw(v,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Ls(this.firestore,e,this._query)}}class ht{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ht(this.firestore,e,this._key)}toJSON(){return{type:ht._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(xl(t,ht._jsonSchema))return new ht(e,i||null,new ye(Qe.fromString(t.referencePath)))}}ht._jsonSchemaVersion="firestore/documentReference/1.0",ht._jsonSchema={type:yt("string",ht._jsonSchemaVersion),referencePath:yt("string")};class bi extends Ls{constructor(e,t,i){super(e,t,Ep(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ht(this.firestore,null,new ye(e))}withConverter(e){return new bi(this.firestore,e,this._path)}}function Ll(n,e,...t){if(n=tt(n),Nw("collection","path",e),n instanceof hh){const i=Qe.fromString(e,...t);return u_(i),new bi(n,null,i)}{if(!(n instanceof ht||n instanceof bi))throw new oe(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Qe.fromString(e,...t));return u_(i),new bi(n.firestore,null,i)}}function Ms(n,e,...t){if(n=tt(n),arguments.length===1&&(e=mp.newId()),Nw("doc","path",e),n instanceof hh){const i=Qe.fromString(e,...t);return l_(i),new ht(n,null,new ye(i))}{if(!(n instanceof ht||n instanceof bi))throw new oe(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Qe.fromString(e,...t));return l_(i),new ht(n.firestore,n instanceof bi?n.converter:null,new ye(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_="AsyncQueue";class Y_{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new TE(this,"async_queue_retry"),this.oc=()=>{const i=lf();i&&ue(J_,"Visibility state changed to "+i.visibilityState),this.F_.y_()},this._c=e;const t=lf();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=lf();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new $r;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Zo(e))throw e;ue(J_,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((i=>{throw this.tc=i,this.nc=!1,Gr("INTERNAL UNHANDLED ERROR: ",Z_(i)),i})).then((i=>(this.nc=!1,i))))));return this._c=t,t}enqueueAfterDelay(e,t,i){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=bp.createAndSchedule(this,e,t,i,(l=>this.lc(l)));return this.ec.push(o),o}ac(){this.tc&&Ee(47125,{hc:Z_(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Z_(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Ml extends hh{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new Y_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Y_(e),this._firestoreClient=void 0,await e}}}function Ik(n,e){const t=typeof n=="object"?n:Kc(),i=typeof n=="string"?n:xc,o=Cl(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=ep("firestore");l&&Tk(o,...l)}return o}function Fp(n){if(n._terminated)throw new oe(W.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Sk(n),n._firestoreClient}function Sk(n){var e,t,i;const o=n._freezeSettings(),l=(function(f,m,y,v){return new K1(f,m,y,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,qE(v.experimentalLongPollingOptions),v.useFetchStreams,v.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new yk(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&(function(f){const m=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(m),_online:m}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new kn(Lt.fromBase64String(e))}catch(t){throw new oe(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new kn(Lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:kn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(xl(e,kn._jsonSchema))return kn.fromBase64String(e.bytes)}}kn._jsonSchemaVersion="firestore/bytes/1.0",kn._jsonSchema={type:yt("string",kn._jsonSchemaVersion),bytes:yt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new oe(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Vt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new oe(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new oe(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:yr._jsonSchemaVersion}}static fromJSON(e){if(xl(e,yr._jsonSchema))return new yr(e.latitude,e.longitude)}}yr._jsonSchemaVersion="firestore/geoPoint/1.0",yr._jsonSchema={type:yt("string",yr._jsonSchemaVersion),latitude:yt("number"),longitude:yt("number")};/**
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
 */class _r{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:_r._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(xl(e,_r._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new _r(e.vectorValues);throw new oe(W.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}_r._jsonSchemaVersion="firestore/vectorValue/1.0",_r._jsonSchema={type:yt("string",_r._jsonSchemaVersion),vectorValues:yt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak=/^__.*__$/;class Rk{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Wi(e,this.data,this.fieldMask,t,this.fieldTransforms):new Dl(e,this.data,t,this.fieldTransforms)}}class WE{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Wi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function GE(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ee(40011,{Ec:n})}}class jp{constructor(e,t,i,o,l,h){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new jp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:i,mc:!1});return o.fc(e),o}gc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:i,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Fc(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(GE(this.Ec)&&Ak.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class Ck{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||lh(e)}Dc(e,t,i,o=!1){return new jp({Ec:e,methodName:t,bc:i,path:Vt.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Bp(n){const e=n._freezeSettings(),t=lh(n._databaseId);return new Ck(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Pk(n,e,t,i,o,l={}){const h=n.Dc(l.merge||l.mergeFields?2:0,e,t,o);$p("Data must be an object, but it was:",h,i);const f=KE(i,h);let m,y;if(l.merge)m=new yn(h.fieldMask),y=h.fieldTransforms;else if(l.mergeFields){const v=[];for(const T of l.mergeFields){const I=Bf(e,T,t);if(!h.contains(I))throw new oe(W.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);XE(v,I)||v.push(I)}m=new yn(v),y=h.fieldTransforms.filter((T=>m.covers(T.field)))}else m=null,y=h.fieldTransforms;return new Rk(new an(f),m,y)}class ph extends fh{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ph}}class zp extends fh{_toFieldTransform(e){return new wC(e.path,new vl)}isEqual(e){return e instanceof zp}}function kk(n,e,t,i){const o=n.Dc(1,e,t);$p("Data must be an object, but it was:",o,i);const l=[],h=an.empty();Hi(i,((m,y)=>{const v=qp(e,m,t);y=tt(y);const T=o.gc(v);if(y instanceof ph)l.push(v);else{const I=Ul(y,T);I!=null&&(l.push(v),h.set(v,I))}}));const f=new yn(l);return new WE(h,f,o.fieldTransforms)}function Nk(n,e,t,i,o,l){const h=n.Dc(1,e,t),f=[Bf(e,i,t)],m=[o];if(l.length%2!=0)throw new oe(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<l.length;I+=2)f.push(Bf(e,l[I])),m.push(l[I+1]);const y=[],v=an.empty();for(let I=f.length-1;I>=0;--I)if(!XE(y,f[I])){const L=f[I];let B=m[I];B=tt(B);const q=h.gc(L);if(B instanceof ph)y.push(L);else{const D=Ul(B,q);D!=null&&(y.push(L),v.set(L,D))}}const T=new yn(y);return new WE(v,T,h.fieldTransforms)}function xk(n,e,t,i=!1){return Ul(t,n.Dc(i?4:3,e))}function Ul(n,e){if(QE(n=tt(n)))return $p("Unsupported field value:",e,n),KE(n,e);if(n instanceof fh)return(function(i,o){if(!GE(o.Ec))throw o.wc(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(i,o){const l=[];let h=0;for(const f of i){let m=Ul(f,o.yc(h));m==null&&(m={nullValue:"NULL_VALUE"}),l.push(m),h++}return{arrayValue:{values:l}}})(n,e)}return(function(i,o){if((i=tt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return yC(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=Ye.fromDate(i);return{timestampValue:Vc(o.serializer,l)}}if(i instanceof Ye){const l=new Ye(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Vc(o.serializer,l)}}if(i instanceof yr)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof kn)return{bytesValue:hE(o.serializer,i._byteString)};if(i instanceof ht){const l=o.databaseId,h=i.firestore._databaseId;if(!h.isEqual(l))throw o.wc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Ap(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof _r)return(function(h,f){return{mapValue:{fields:{[Fw]:{stringValue:jw},[Dc]:{arrayValue:{values:h.toArray().map((y=>{if(typeof y!="number")throw f.wc("VectorValues must only contain numeric values.");return Tp(f.serializer,y)}))}}}}}})(i,o);throw o.wc(`Unsupported field value: ${Zc(i)}`)})(n,e)}function KE(n,e){const t={};return Ow(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Hi(n,((i,o)=>{const l=Ul(o,e.Vc(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function QE(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ye||n instanceof yr||n instanceof kn||n instanceof ht||n instanceof fh||n instanceof _r)}function $p(n,e,t){if(!QE(t)||!xw(t)){const i=Zc(t);throw i==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+i)}}function Bf(n,e,t){if((e=tt(e))instanceof dh)return e._internalPath;if(typeof e=="string")return qp(n,e);throw Fc("Field path arguments must be of type string or ",n,!1,void 0,t)}const Dk=new RegExp("[~\\*/\\[\\]]");function qp(n,e,t){if(e.search(Dk)>=0)throw Fc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new dh(...e.split("."))._internalPath}catch{throw Fc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Fc(n,e,t,i,o){const l=i&&!i.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let m="";return(l||h)&&(m+=" (found",l&&(m+=` in field ${i}`),h&&(m+=` in document ${o}`),m+=")"),new oe(W.INVALID_ARGUMENT,f+n+m)}function XE(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ok(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(mh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Ok extends JE{data(){return super.data()}}function mh(n,e){return typeof e=="string"?qp(n,e):e instanceof dh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bk(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new oe(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Hp{}class YE extends Hp{}function gh(n,e,...t){let i=[];e instanceof Hp&&i.push(e),i=i.concat(t),(function(l){const h=l.filter((m=>m instanceof Wp)).length,f=l.filter((m=>m instanceof yh)).length;if(h>1||h>0&&f>0)throw new oe(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const o of i)n=o._apply(n);return n}class yh extends YE{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new yh(e,t,i)}_apply(e){const t=this._parse(e);return ZE(e._query,t),new Ls(e.firestore,e.converter,Nf(e._query,t))}_parse(e){const t=Bp(e.firestore);return(function(l,h,f,m,y,v,T){let I;if(y.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new oe(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){tv(T,v);const B=[];for(const q of T)B.push(ev(m,l,q));I={arrayValue:{values:B}}}else I=ev(m,l,T)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||tv(T,v),I=xk(f,h,T,v==="in"||v==="not-in");return gt.create(y,v,I)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function _h(n,e,t){const i=e,o=mh("where",n);return yh._create(o,i,t)}class Wp extends Hp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Wp(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:Jn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let h=o;const f=l.getFlattenedFilters();for(const m of f)ZE(h,m),h=Nf(h,m)})(e._query,t),new Ls(e.firestore,e.converter,Nf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Gp extends YE{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Gp(e,t)}_apply(e){const t=(function(o,l,h){if(o.startAt!==null)throw new oe(W.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new oe(W.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new _l(l,h)})(e._query,this._field,this._direction);return new Ls(e.firestore,e.converter,(function(o,l){const h=o.explicitOrderBy.concat([l]);return new ea(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function Kp(n,e="asc"){const t=e,i=mh("orderBy",n);return Gp._create(i,t)}function ev(n,e,t){if(typeof(t=tt(t))=="string"){if(t==="")throw new oe(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Kw(e)&&t.indexOf("/")!==-1)throw new oe(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Qe.fromString(t));if(!ye.isDocumentKey(i))throw new oe(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return y_(n,new ye(i))}if(t instanceof ht)return y_(n,t._key);throw new oe(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Zc(t)}.`)}function tv(n,e){if(!Array.isArray(n)||n.length===0)throw new oe(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ZE(n,e){const t=(function(o,l){for(const h of o)for(const f of h.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new oe(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new oe(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Vk{convertValue(e,t="none"){switch(ji(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ct(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Fi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ee(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Hi(e,((o,l)=>{i[o]=this.convertValue(l,t)})),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t[Dc].arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map((h=>ct(h.doubleValue)));return new _r(l)}convertGeoPoint(e){return new yr(ct(e.latitude),ct(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=nh(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(ml(e));default:return null}}convertTimestamp(e){const t=Ui(e);return new Ye(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Qe.fromString(e);je(yE(i),9688,{name:e});const o=new gl(i.get(1),i.get(3)),l=new ye(i.popFirst(5));return o.isEqual(t)||Gr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lk(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}class nl{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Rs extends JE{constructor(e,t,i,o,l,h){super(e,t,i,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new wc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(mh("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new oe(W.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Rs._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Rs._jsonSchemaVersion="firestore/documentSnapshot/1.0",Rs._jsonSchema={type:yt("string",Rs._jsonSchemaVersion),bundleSource:yt("string","DocumentSnapshot"),bundleName:yt("string"),bundle:yt("string")};class wc extends Rs{data(e={}){return super.data(e)}}class Fo{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new nl(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new wc(this._firestore,this._userDataWriter,i.key,i,new nl(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new oe(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((f=>{const m=new wc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new nl(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:m,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const m=new wc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new nl(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,v=-1;return f.type!==0&&(y=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),v=h.indexOf(f.doc.key)),{type:Mk(f.type),doc:m,oldIndex:y,newIndex:v}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new oe(W.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Fo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=mp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Mk(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ee(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qp(n){n=Kr(n,ht);const e=Kr(n.firestore,Ml);return wk(Fp(e),n._key).then((t=>Fk(e,n,t)))}Fo._jsonSchemaVersion="firestore/querySnapshot/1.0",Fo._jsonSchema={type:yt("string",Fo._jsonSchemaVersion),bundleSource:yt("string","QuerySnapshot"),bundleName:yt("string"),bundle:yt("string")};class e0 extends Vk{constructor(e){super(),this.firestore=e}convertBytes(e){return new kn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ht(this.firestore,null,t)}}function Fl(n){n=Kr(n,Ls);const e=Kr(n.firestore,Ml),t=Fp(e),i=new e0(e);return bk(n._query),Ek(t,n._query).then((o=>new Fo(e,i,n,o)))}function Xp(n,e,t){n=Kr(n,ht);const i=Kr(n.firestore,Ml),o=Lk(n.converter,e,t);return t0(i,[Pk(Bp(i),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,mr.none())])}function Uk(n,e,t,...i){n=Kr(n,ht);const o=Kr(n.firestore,Ml),l=Bp(o);let h;return h=typeof(e=tt(e))=="string"||e instanceof dh?Nk(l,"updateDoc",n._key,e,t,i):kk(l,"updateDoc",n._key,e),t0(o,[h.toMutation(n._key,mr.exists(!0))])}function t0(n,e){return(function(i,o){const l=new $r;return i.asyncQueue.enqueueAndForget((async()=>lk(await vk(i),o,l))),l.promise})(Fp(n),e)}function Fk(n,e,t){const i=t.docs.get(e._key),o=new e0(n);return new Rs(n,o,e._key,i,new nl(t.hasPendingWrites,t.fromCache),e.converter)}function zf(){return new zp("serverTimestamp")}(function(e,t=!0){(function(o){Jo=o})(Os),Vi(new qr("firestore",((i,{instanceIdentifier:o,options:l})=>{const h=i.getProvider("app").getImmediate(),f=new Ml(new N1(i.getProvider("auth-internal")),new O1(h,i.getProvider("app-check-internal")),(function(y,v){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new oe(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gl(y.options.projectId,v)})(h,o),h);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),xn(r_,i_,e),xn(r_,i_,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jk="type.googleapis.com/google.protobuf.Int64Value",Bk="type.googleapis.com/google.protobuf.UInt64Value";function n0(n,e){const t={};for(const i in n)n.hasOwnProperty(i)&&(t[i]=e(n[i]));return t}function jc(n){if(n==null)return null;if(n instanceof Number&&(n=n.valueOf()),typeof n=="number"&&isFinite(n)||n===!0||n===!1||Object.prototype.toString.call(n)==="[object String]")return n;if(n instanceof Date)return n.toISOString();if(Array.isArray(n))return n.map(e=>jc(e));if(typeof n=="function"||typeof n=="object")return n0(n,e=>jc(e));throw new Error("Data cannot be encoded in JSON: "+n)}function Wo(n){if(n==null)return n;if(n["@type"])switch(n["@type"]){case jk:case Bk:{const e=Number(n.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+n);return e}default:throw new Error("Data cannot be decoded from JSON: "+n)}return Array.isArray(n)?n.map(e=>Wo(e)):typeof n=="function"||typeof n=="object"?n0(n,e=>Wo(e)):n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jp="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ln extends Yn{constructor(e,t,i){super(`${Jp}/${e}`,t||""),this.details=i,Object.setPrototypeOf(this,ln.prototype)}}function zk(n){if(n>=200&&n<300)return"ok";switch(n){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Bc(n,e){let t=zk(n),i=t,o;try{const l=e&&e.error;if(l){const h=l.status;if(typeof h=="string"){if(!nv[h])return new ln("internal","internal");t=nv[h],i=h}const f=l.message;typeof f=="string"&&(i=f),o=l.details,o!==void 0&&(o=Wo(o))}}catch{}return t==="ok"?null:new ln(t,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(e,t,i,o){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,on(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=t.getImmediate({optional:!0}),this.messaging=i.getImmediate({optional:!0}),this.auth||t.get().then(l=>this.auth=l,()=>{}),this.messaging||i.get().then(l=>this.messaging=l,()=>{}),this.appCheck||o==null||o.get().then(l=>this.appCheck=l,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),i=await this.getMessagingToken(),o=await this.getAppCheckToken(e);return{authToken:t,messagingToken:i,appCheckToken:o}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f="us-central1",qk=/^data: (.*?)(?:\n|$)/;function Hk(n){let e=null;return{promise:new Promise((t,i)=>{e=setTimeout(()=>{i(new ln("deadline-exceeded","deadline-exceeded"))},n)}),cancel:()=>{e&&clearTimeout(e)}}}class Wk{constructor(e,t,i,o,l=$f,h=(...f)=>fetch(...f)){this.app=e,this.fetchImpl=h,this.emulatorOrigin=null,this.contextProvider=new $k(e,t,i,o),this.cancelAllRequests=new Promise(f=>{this.deleteService=()=>Promise.resolve(f())});try{const f=new URL(l);this.customDomain=f.origin+(f.pathname==="/"?"":f.pathname),this.region=$f}catch{this.customDomain=null,this.region=l}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function Gk(n,e,t){const i=Xr(e);n.emulatorOrigin=`http${i?"s":""}://${e}:${t}`,i&&(Wc(n.emulatorOrigin),Gc("Functions",!0))}function Kk(n,e,t){const i=o=>Xk(n,e,o,{});return i.stream=(o,l)=>Yk(n,e,o,l),i}async function Qk(n,e,t,i){t["Content-Type"]="application/json";let o;try{o=await i(n,{method:"POST",body:JSON.stringify(e),headers:t})}catch{return{status:0,json:null}}let l=null;try{l=await o.json()}catch{}return{status:o.status,json:l}}async function r0(n,e){const t={},i=await n.contextProvider.getContext(e.limitedUseAppCheckTokens);return i.authToken&&(t.Authorization="Bearer "+i.authToken),i.messagingToken&&(t["Firebase-Instance-ID-Token"]=i.messagingToken),i.appCheckToken!==null&&(t["X-Firebase-AppCheck"]=i.appCheckToken),t}function Xk(n,e,t,i){const o=n._url(e);return Jk(n,o,t,i)}async function Jk(n,e,t,i){t=jc(t);const o={data:t},l=await r0(n,i),h=i.timeout||7e4,f=Hk(h),m=await Promise.race([Qk(e,o,l,n.fetchImpl),f.promise,n.cancelAllRequests]);if(f.cancel(),!m)throw new ln("cancelled","Firebase Functions instance was deleted.");const y=Bc(m.status,m.json);if(y)throw y;if(!m.json)throw new ln("internal","Response is not valid JSON object.");let v=m.json.data;if(typeof v>"u"&&(v=m.json.result),typeof v>"u")throw new ln("internal","Response is missing data field.");return{data:Wo(v)}}function Yk(n,e,t,i){const o=n._url(e);return Zk(n,o,t,i||{})}async function Zk(n,e,t,i){var o;t=jc(t);const l={data:t},h=await r0(n,i);h["Content-Type"]="application/json",h.Accept="text/event-stream";let f;try{f=await n.fetchImpl(e,{method:"POST",body:JSON.stringify(l),headers:h,signal:i==null?void 0:i.signal})}catch(L){if(L instanceof Error&&L.name==="AbortError"){const q=new ln("cancelled","Request was cancelled.");return{data:Promise.reject(q),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(q)}}}}}}const B=Bc(0,null);return{data:Promise.reject(B),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(B)}}}}}}let m,y;const v=new Promise((L,B)=>{m=L,y=B});(o=i==null?void 0:i.signal)===null||o===void 0||o.addEventListener("abort",()=>{const L=new ln("cancelled","Request was cancelled.");y(L)});const T=f.body.getReader(),I=eN(T,m,y,i==null?void 0:i.signal);return{stream:{[Symbol.asyncIterator](){const L=I.getReader();return{async next(){const{value:B,done:q}=await L.read();return{value:B,done:q}},async return(){return await L.cancel(),{done:!0,value:void 0}}}}},data:v}}function eN(n,e,t,i){const o=(h,f)=>{const m=h.match(qk);if(!m)return;const y=m[1];try{const v=JSON.parse(y);if("result"in v){e(Wo(v.result));return}if("message"in v){f.enqueue(Wo(v.message));return}if("error"in v){const T=Bc(0,v);f.error(T),t(T);return}}catch(v){if(v instanceof ln){f.error(v),t(v);return}}},l=new TextDecoder;return new ReadableStream({start(h){let f="";return m();async function m(){if(i!=null&&i.aborted){const y=new ln("cancelled","Request was cancelled");return h.error(y),t(y),Promise.resolve()}try{const{value:y,done:v}=await n.read();if(v){f.trim()&&o(f.trim(),h),h.close();return}if(i!=null&&i.aborted){const I=new ln("cancelled","Request was cancelled");h.error(I),t(I),await n.cancel();return}f+=l.decode(y,{stream:!0});const T=f.split(`
`);f=T.pop()||"";for(const I of T)I.trim()&&o(I.trim(),h);return m()}catch(y){const v=y instanceof ln?y:Bc(0,null);h.error(v),t(v)}}},cancel(){return n.cancel()}})}const rv="@firebase/functions",iv="0.12.9";/**
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
 */const tN="auth-internal",nN="app-check-internal",rN="messaging-internal";function iN(n){const e=(t,{instanceIdentifier:i})=>{const o=t.getProvider("app").getImmediate(),l=t.getProvider(tN),h=t.getProvider(rN),f=t.getProvider(nN);return new Wk(o,l,h,f,i)};Vi(new qr(Jp,e,"PUBLIC").setMultipleInstances(!0)),xn(rv,iv,n),xn(rv,iv,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sN(n=Kc(),e=$f){const i=Cl(tt(n),Jp).getImmediate({identifier:e}),o=ep("functions");return o&&oN(i,...o),i}function oN(n,e,t){Gk(tt(n),e,t)}function i0(n,e,t){return Kk(tt(n),e)}iN();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0="firebasestorage.googleapis.com",o0="storageBucket",aN=120*1e3,lN=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends Yn{constructor(e,t,i=0){super(cf(e),`Firebase Storage: ${t} (${cf(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,at.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return cf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ot;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ot||(ot={}));function cf(n){return"storage/"+n}function Yp(){const n="An unknown error occurred, please check the error payload for server response.";return new at(ot.UNKNOWN,n)}function uN(n){return new at(ot.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function cN(n){return new at(ot.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function hN(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new at(ot.UNAUTHENTICATED,n)}function dN(){return new at(ot.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function fN(n){return new at(ot.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function pN(){return new at(ot.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function mN(){return new at(ot.CANCELED,"User canceled the upload/download.")}function gN(n){return new at(ot.INVALID_URL,"Invalid URL '"+n+"'.")}function yN(n){return new at(ot.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function _N(){return new at(ot.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+o0+"' property when initializing the app?")}function vN(){return new at(ot.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function wN(){return new at(ot.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function EN(n){return new at(ot.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function qf(n){return new at(ot.INVALID_ARGUMENT,n)}function a0(){return new at(ot.APP_DELETED,"The Firebase app was deleted.")}function TN(n){return new at(ot.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ul(n,e){return new at(ot.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Ya(n){throw new at(ot.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=_n.makeFromUrl(e,t)}catch{return new _n(e,"")}if(i.path==="")return i;throw yN(e)}static makeFromUrl(e,t){let i=null;const o="([A-Za-z0-9.\\-_]+)";function l(se){se.path.charAt(se.path.length-1)==="/"&&(se.path_=se.path_.slice(0,-1))}const h="(/(.*))?$",f=new RegExp("^gs://"+o+h,"i"),m={bucket:1,path:3};function y(se){se.path_=decodeURIComponent(se.path)}const v="v[A-Za-z0-9_]+",T=t.replace(/[.]/g,"\\."),I="(/([^?#]*).*)?$",L=new RegExp(`^https?://${T}/${v}/b/${o}/o${I}`,"i"),B={bucket:1,path:3},q=t===s0?"(?:storage.googleapis.com|storage.cloud.google.com)":t,D="([^?#]*)",ie=new RegExp(`^https?://${q}/${o}/${D}`,"i"),J=[{regex:f,indices:m,postModify:l},{regex:L,indices:B,postModify:y},{regex:ie,indices:{bucket:1,path:2},postModify:y}];for(let se=0;se<J.length;se++){const Ae=J[se],he=Ae.regex.exec(e);if(he){const x=he[Ae.indices.bucket];let S=he[Ae.indices.path];S||(S=""),i=new _n(x,S),Ae.postModify(i);break}}if(i==null)throw gN(e);return i}}class IN{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SN(n,e,t){let i=1,o=null,l=null,h=!1,f=0;function m(){return f===2}let y=!1;function v(...D){y||(y=!0,e.apply(null,D))}function T(D){o=setTimeout(()=>{o=null,n(L,m())},D)}function I(){l&&clearTimeout(l)}function L(D,...ie){if(y){I();return}if(D){I(),v.call(null,D,...ie);return}if(m()||h){I(),v.call(null,D,...ie);return}i<64&&(i*=2);let J;f===1?(f=2,J=0):J=(i+Math.random())*1e3,T(J)}let B=!1;function q(D){B||(B=!0,I(),!y&&(o!==null?(D||(f=2),clearTimeout(o),T(0)):D||(f=1)))}return T(0),l=setTimeout(()=>{h=!0,q(!0)},t),q}function AN(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RN(n){return n!==void 0}function CN(n){return typeof n=="object"&&!Array.isArray(n)}function Zp(n){return typeof n=="string"||n instanceof String}function sv(n){return em()&&n instanceof Blob}function em(){return typeof Blob<"u"}function ov(n,e,t,i){if(i<e)throw qf(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw qf(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tm(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function l0(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const o=e(i)+"="+e(n[i]);t=t+o+"&"}return t=t.slice(0,-1),t}var Cs;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Cs||(Cs={}));/**
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
 */function PN(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||o||l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(e,t,i,o,l,h,f,m,y,v,T,I=!0,L=!1){this.url_=e,this.method_=t,this.headers_=i,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=h,this.callback_=f,this.errorCallback_=m,this.timeout_=y,this.progressCallback_=v,this.connectionFactory_=T,this.retry=I,this.isUsingEmulator=L,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((B,q)=>{this.resolve_=B,this.reject_=q,this.start_()})}start_(){const e=(i,o)=>{if(o){i(!1,new lc(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const h=f=>{const m=f.loaded,y=f.lengthComputable?f.total:-1;this.progressCallback_!==null&&this.progressCallback_(m,y)};this.progressCallback_!==null&&l.addUploadProgressListener(h),l.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(h),this.pendingConnection_=null;const f=l.getErrorCode()===Cs.NO_ERROR,m=l.getStatus();if(!f||PN(m,this.additionalRetryCodes_)&&this.retry){const v=l.getErrorCode()===Cs.ABORT;i(!1,new lc(!1,null,v));return}const y=this.successCodes_.indexOf(m)!==-1;i(!0,new lc(y,l))})},t=(i,o)=>{const l=this.resolve_,h=this.reject_,f=o.connection;if(o.wasSuccessCode)try{const m=this.callback_(f,f.getResponse());RN(m)?l(m):l()}catch(m){h(m)}else if(f!==null){const m=Yp();m.serverResponse=f.getErrorText(),this.errorCallback_?h(this.errorCallback_(f,m)):h(m)}else if(o.canceled){const m=this.appDelete_?a0():mN();h(m)}else{const m=pN();h(m)}};this.canceled_?t(!1,new lc(!1,null,!0)):this.backoffId_=SN(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&AN(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class lc{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function NN(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function xN(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function DN(n,e){e&&(n["X-Firebase-GMPID"]=e)}function ON(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function bN(n,e,t,i,o,l,h=!0,f=!1){const m=l0(n.urlParams),y=n.url+m,v=Object.assign({},n.headers);return DN(v,e),NN(v,t),xN(v,l),ON(v,i),new kN(y,n.method,v,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,h,f)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VN(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function LN(...n){const e=VN();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(em())return new Blob(n);throw new at(ot.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function MN(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function UN(n){if(typeof atob>"u")throw EN("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class hf{constructor(e,t){this.data=e,this.contentType=t||null}}function FN(n,e){switch(n){case hr.RAW:return new hf(u0(e));case hr.BASE64:case hr.BASE64URL:return new hf(c0(n,e));case hr.DATA_URL:return new hf(BN(e),zN(e))}throw Yp()}function u0(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const l=i,h=n.charCodeAt(++t);i=65536|(l&1023)<<10|h&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function jN(n){let e;try{e=decodeURIComponent(n)}catch{throw ul(hr.DATA_URL,"Malformed data URL.")}return u0(e)}function c0(n,e){switch(n){case hr.BASE64:{const o=e.indexOf("-")!==-1,l=e.indexOf("_")!==-1;if(o||l)throw ul(n,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case hr.BASE64URL:{const o=e.indexOf("+")!==-1,l=e.indexOf("/")!==-1;if(o||l)throw ul(n,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=UN(e)}catch(o){throw o.message.includes("polyfill")?o:ul(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}class h0{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw ul(hr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=$N(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function BN(n){const e=new h0(n);return e.base64?c0(hr.BASE64,e.rest):jN(e.rest)}function zN(n){return new h0(n).contentType}function $N(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,t){let i=0,o="";sv(e)?(this.data_=e,i=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if(sv(this.data_)){const i=this.data_,o=MN(i,e,t);return o===null?null:new Ri(o)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new Ri(i,!0)}}static getBlob(...e){if(em()){const t=e.map(i=>i instanceof Ri?i.data_:i);return new Ri(LN.apply(null,t))}else{const t=e.map(h=>Zp(h)?FN(hr.RAW,h).data:h.data_);let i=0;t.forEach(h=>{i+=h.byteLength});const o=new Uint8Array(i);let l=0;return t.forEach(h=>{for(let f=0;f<h.length;f++)o[l++]=h[f]}),new Ri(o,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d0(n){let e;try{e=JSON.parse(n)}catch{return null}return CN(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qN(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function HN(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function f0(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WN(n,e){return e}class Qt{constructor(e,t,i,o){this.server=e,this.local=t||e,this.writable=!!i,this.xform=o||WN}}let uc=null;function GN(n){return!Zp(n)||n.length<2?n:f0(n)}function p0(){if(uc)return uc;const n=[];n.push(new Qt("bucket")),n.push(new Qt("generation")),n.push(new Qt("metageneration")),n.push(new Qt("name","fullPath",!0));function e(l,h){return GN(h)}const t=new Qt("name");t.xform=e,n.push(t);function i(l,h){return h!==void 0?Number(h):h}const o=new Qt("size");return o.xform=i,n.push(o),n.push(new Qt("timeCreated")),n.push(new Qt("updated")),n.push(new Qt("md5Hash",null,!0)),n.push(new Qt("cacheControl",null,!0)),n.push(new Qt("contentDisposition",null,!0)),n.push(new Qt("contentEncoding",null,!0)),n.push(new Qt("contentLanguage",null,!0)),n.push(new Qt("contentType",null,!0)),n.push(new Qt("metadata","customMetadata",!0)),uc=n,uc}function KN(n,e){function t(){const i=n.bucket,o=n.fullPath,l=new _n(i,o);return e._makeStorageReference(l)}Object.defineProperty(n,"ref",{get:t})}function QN(n,e,t){const i={};i.type="file";const o=t.length;for(let l=0;l<o;l++){const h=t[l];i[h.local]=h.xform(i,e[h.server])}return KN(i,n),i}function m0(n,e,t){const i=d0(e);return i===null?null:QN(n,i,t)}function XN(n,e,t,i){const o=d0(e);if(o===null||!Zp(o.downloadTokens))return null;const l=o.downloadTokens;if(l.length===0)return null;const h=encodeURIComponent;return l.split(",").map(y=>{const v=n.bucket,T=n.fullPath,I="/b/"+h(v)+"/o/"+h(T),L=tm(I,t,i),B=l0({alt:"media",token:y});return L+B})[0]}function JN(n,e){const t={},i=e.length;for(let o=0;o<i;o++){const l=e[o];l.writable&&(t[l.server]=n[l.local])}return JSON.stringify(t)}class g0{constructor(e,t,i,o){this.url=e,this.method=t,this.handler=i,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y0(n){if(!n)throw Yp()}function YN(n,e){function t(i,o){const l=m0(n,o,e);return y0(l!==null),l}return t}function ZN(n,e){function t(i,o){const l=m0(n,o,e);return y0(l!==null),XN(l,o,n.host,n._protocol)}return t}function _0(n){function e(t,i){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=dN():o=hN():t.getStatus()===402?o=cN(n.bucket):t.getStatus()===403?o=fN(n.path):o=i,o.status=t.getStatus(),o.serverResponse=i.serverResponse,o}return e}function ex(n){const e=_0(n);function t(i,o){let l=e(i,o);return i.getStatus()===404&&(l=uN(n.path)),l.serverResponse=o.serverResponse,l}return t}function tx(n,e,t){const i=e.fullServerUrl(),o=tm(i,n.host,n._protocol),l="GET",h=n.maxOperationRetryTime,f=new g0(o,l,ZN(n,t),h);return f.errorHandler=ex(e),f}function nx(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function rx(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=nx(null,e)),i}function ix(n,e,t,i,o){const l=e.bucketOnlyServerUrl(),h={"X-Goog-Upload-Protocol":"multipart"};function f(){let J="";for(let se=0;se<2;se++)J=J+Math.random().toString().slice(2);return J}const m=f();h["Content-Type"]="multipart/related; boundary="+m;const y=rx(e,i,o),v=JN(y,t),T="--"+m+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+v+`\r
--`+m+`\r
Content-Type: `+y.contentType+`\r
\r
`,I=`\r
--`+m+"--",L=Ri.getBlob(T,i,I);if(L===null)throw vN();const B={name:y.fullPath},q=tm(l,n.host,n._protocol),D="POST",ie=n.maxUploadRetryTime,te=new g0(q,D,YN(n,t),ie);return te.urlParams=B,te.headers=h,te.body=L.uploadData(),te.errorHandler=_0(e),te}class sx{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Cs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Cs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Cs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,o,l){if(this.sent_)throw Ya("cannot .send() more than once");if(Xr(e)&&i&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),l!==void 0)for(const h in l)l.hasOwnProperty(h)&&this.xhr_.setRequestHeader(h,l[h].toString());return o!==void 0?this.xhr_.send(o):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ya("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ya("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ya("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ya("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class ox extends sx{initXhr(){this.xhr_.responseType="text"}}function v0(){return new ox}/**
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
 */class Ds{constructor(e,t){this._service=e,t instanceof _n?this._location=t:this._location=_n.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ds(e,t)}get root(){const e=new _n(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return f0(this._location.path)}get storage(){return this._service}get parent(){const e=qN(this._location.path);if(e===null)return null;const t=new _n(this._location.bucket,e);return new Ds(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw TN(e)}}function ax(n,e,t){n._throwIfRoot("uploadBytes");const i=ix(n.storage,n._location,p0(),new Ri(e,!0),t);return n.storage.makeRequestWithTokens(i,v0).then(o=>({metadata:o,ref:n}))}function lx(n){n._throwIfRoot("getDownloadURL");const e=tx(n.storage,n._location,p0());return n.storage.makeRequestWithTokens(e,v0).then(t=>{if(t===null)throw wN();return t})}function ux(n,e){const t=HN(n._location.path,e),i=new _n(n._location.bucket,t);return new Ds(n.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cx(n){return/^[A-Za-z]+:\/\//.test(n)}function hx(n,e){return new Ds(n,e)}function w0(n,e){if(n instanceof nm){const t=n;if(t._bucket==null)throw _N();const i=new Ds(t,t._bucket);return e!=null?w0(i,e):i}else return e!==void 0?ux(n,e):n}function dx(n,e){if(e&&cx(e)){if(n instanceof nm)return hx(n,e);throw qf("To use ref(service, url), the first argument must be a Storage instance.")}else return w0(n,e)}function av(n,e){const t=e==null?void 0:e[o0];return t==null?null:_n.makeFromBucketSpec(t,n)}function fx(n,e,t,i={}){n.host=`${e}:${t}`;const o=Xr(e);o&&(Wc(`https://${n.host}/b`),Gc("Storage",!0)),n._isUsingEmulator=!0,n._protocol=o?"https":"http";const{mockUserToken:l}=i;l&&(n._overrideAuthToken=typeof l=="string"?l:bv(l,n.app.options.projectId))}class nm{constructor(e,t,i,o,l,h=!1){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=o,this._firebaseVersion=l,this._isUsingEmulator=h,this._bucket=null,this._host=s0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=aN,this._maxUploadRetryTime=lN,this._requests=new Set,o!=null?this._bucket=_n.makeFromBucketSpec(o,this._host):this._bucket=av(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=_n.makeFromBucketSpec(this._url,e):this._bucket=av(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ov("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ov("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(on(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ds(this,e)}_makeRequest(e,t,i,o,l=!0){if(this._deleted)return new IN(a0());{const h=bN(e,this._appId,i,o,t,this._firebaseVersion,l,this._isUsingEmulator);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,t){const[i,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,o).getPromise()}}const lv="@firebase/storage",uv="0.13.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0="storage";function px(n,e,t){return n=tt(n),ax(n,e,t)}function mx(n){return n=tt(n),lx(n)}function gx(n,e){return n=tt(n),dx(n,e)}function yx(n=Kc(),e){n=tt(n);const i=Cl(n,E0).getImmediate({identifier:e}),o=ep("storage");return o&&_x(i,...o),i}function _x(n,e,t,i={}){fx(n,e,t,i)}function vx(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new nm(t,i,o,e,Os)}function wx(){Vi(new qr(E0,vx,"PUBLIC").setMultipleInstances(!0)),xn(lv,uv,""),xn(lv,uv,"esm2017")}wx();const Ex={apiKey:"AIzaSyBMwuPSGuAL3BC4KbmKv7BXwumOvQH4q_U",authDomain:"beastlyworkout-e05ac.firebaseapp.com",projectId:"beastlyworkout-e05ac",storageBucket:"beastlyworkout-e05ac.firebasestorage.app",messagingSenderId:"450850141428",appId:"1:450850141428:web:3cdba0ebf48acfa9f51aa1"},vh=Mv(Ex),un=R1(vh),Dn=Ik(vh),Tx=yx(vh),T0=sN(vh,"us-central1");pR(un,uw);i0(T0,"bootstrapFirstAdmin");const Ix=i0(T0,"setUserRole");async function Sx(n,e){return(await Ix({uid:n,role:e})).data}async function cv(){return un.currentUser?un.currentUser.getIdTokenResult(!0):null}async function Hf(n){const e=n??un.currentUser;if(!e)return null;try{const i=(await e.getIdTokenResult()).claims.role;return i==="admin"||i==="trainer"||i==="client"?i:null}catch(t){if((typeof t=="object"&&t&&"code"in t?String(t.code):"").includes("user-token-expired"))try{await e.getIdToken(!0);const l=(await e.getIdTokenResult()).claims.role;return l==="admin"||l==="trainer"||l==="client"?l:null}catch{return await Xc(un),null}throw t}}function I0(){return{createdAt:zf(),updatedAt:zf()}}function S0(){return{updatedAt:zf()}}function Er(){var e;const n=(e=un.currentUser)==null?void 0:e.uid;if(!n)throw new Error("unauthenticated");return n}async function zc(n={}){const e=Er(),t=Ms(Dn,"users",e);return await Xp(t,{uid:e,...I0(),...n},{merge:!0}),t}async function Wf(n){const e=n??Er();return Qp(Ms(Dn,"users",e))}async function Ax(n,e){const t=Er();await Xp(Ms(Dn,"users",t,"private",n),{...e,...S0()},{merge:!0})}async function Rx(){return Fl(Ll(Dn,"users"))}async function Cx(n,e){return Qp(Ms(Dn,"users",n,"private",e))}async function Px(n){const e=Er(),t=Ms(Dn,"plans",n.clientId);return await Xp(t,{trainerId:e,clientId:n.clientId,status:n.status,title:n.title,description:n.description??"",exercises:n.exercises,clientNotes:"",lastViewedAt:null,...I0()}),t}async function A0(n,e){const t=e??Er(),i=n==="client"?"clientId":"trainerId",o=gh(Ll(Dn,"plans"),_h(i,"==",t));return Fl(o)}async function kx(n){const e=n??Er();return Qp(Ms(Dn,"plans",e))}async function Nx(n,e){await Uk(Ms(Dn,"plans",n),{...e,...S0()})}async function xx(n,e){const t=Er(),i=e.name.replace(/[^a-zA-Z0-9._-]/g,"_"),o=`${Date.now()}-${i}`,l=Vx(t,n,o);return await px(l,e,{contentType:e.type||"application/octet-stream"}),mx(l)}async function Dx(n){const e=Er(),t=gh(Ll(Dn,"workoutLogs"),_h("clientId","==",e),Kp("sessionDate","desc"));return Fl(t)}async function Ox(n,e){const t=Er(),o=gh(Ll(Dn,"sessions"),_h("clientId","==",t),Kp("startsAt","desc"));return Fl(o)}async function bx(n){const e=Er(),t=gh(Ll(Dn,"metrics"),_h("clientId","==",e),Kp("measuredAt","desc"));return Fl(t)}function Vx(n,e,t){return gx(Tx,`workout-media/${n}/${e}/${t}`)}function na(){const[n,e]=K.useState(!0),[t,i]=K.useState(un.currentUser),[o,l]=K.useState(null);return K.useEffect(()=>ow(un,async h=>{try{if(e(!0),i(h),!h){l(null);return}await rm(h);const f=await Hf(h);l(f)}catch(f){(typeof f=="object"&&f&&"code"in f?String(f.code):"").includes("user-token-expired")&&(await Xc(un),i(null)),l(null)}finally{e(!1)}}),[]),K.useMemo(()=>({initializing:n,user:t,role:o,isAuthenticated:!!t}),[n,t,o])}const Gf=new jr;Gf.setCustomParameters({prompt:"select_account"});async function rm(n){(await Wf(n.uid)).exists()||await zc({email:n.email??"",displayName:n.displayName??"",role:"client"})}async function hv(){try{const n=await bR(un,Gf);return await rm(n.user),{redirected:!1,user:n.user}}catch(n){if(Mx(n))return await jR(un,Gf),{redirected:!0,user:null};throw n}}async function Lx(){try{const n=await zR(un);return n!=null&&n.user&&await rm(n.user),n}catch(n){if((typeof n=="object"&&n&&"code"in n?String(n.code):"").includes("user-token-expired"))return await Xc(un),null;throw n}}async function Tl(){return Xc(un)}function Mx(n){if(!(typeof n=="object"&&n&&"code"in n))return!1;const e=String(n.code);return e==="auth/popup-blocked"||e==="auth/operation-not-supported-in-this-environment"}const Ux=["lrnz.sga@gmail.com"];function R0(n){return n.trim().toLowerCase()}function Fx(n){const e=Ux.join(",");return new Set(e.split(",").map(R0).filter(Boolean))}const jx=Fx();function df(n){return n?jx.has(R0(n)):!1}function cc(n){return n.map(e=>({id:e.id,...e.data()}))}function dr(n){if(typeof n=="object"&&n&&"code"in n){const e=String(n.code);return e.includes("permission-denied")?"Non hai i permessi per questa azione.":e.includes("unauthenticated")?"La sessione è scaduta. Accedi di nuovo.":e.includes("invalid-argument")?"Alcuni dati non sono corretti. Controlla e riprova.":e.includes("failed-precondition")?"Manca una configurazione tecnica lato server. Riprova tra poco.":e.includes("internal")?"Qualcosa non ha funzionato. Riprova tra pochi secondi.":"Operazione non completata. Riprova."}if(n instanceof Error){const e=n.message.toLowerCase();return e.includes("token")||e.includes("credential")?"Sessione non valida. Esci e accedi di nuovo.":"Si è verificato un problema. Riprova."}return"Operazione non riuscita."}const Es="bw_login_intent";function Bx(){const{user:n,role:e}=na(),t=Sl(),{showError:i}=qc(),[o,l]=K.useState(!1),[h,f]=K.useState(""),[m,y]=K.useState(!1);if(K.useEffect(()=>{async function I(){try{await Lx()}catch(L){const B=dr(L);f(B),i(B)}}I()},[i]),K.useEffect(()=>{async function I(){if(!(!n||e||sessionStorage.getItem(Es)!=="coach"||!df(n.email))){y(!0),f("Sto preparando il tuo accesso coach...");try{await zc({email:n.email??"",displayName:n.displayName??"",coachAccessRequestedAt:new Date().toISOString()});for(let B=0;B<10;B+=1){await cv();const q=await Hf(n);if(q==="admin"||q==="trainer"){sessionStorage.removeItem(Es),t("/app/coach",{replace:!0});return}await new Promise(D=>setTimeout(D,700))}f("Sto ancora completando l’accesso. Riprova tra pochi secondi.")}catch(B){const q=dr(B);f(q),i(q)}finally{y(!1)}}}I()},[n,e,t]),n&&e)return sessionStorage.removeItem(Es),b.jsx(Nn,{to:e==="client"?"/app/client":"/app/coach",replace:!0});if(n&&!e)return sessionStorage.getItem(Es)==="coach"&&df(n.email)?b.jsx("main",{className:"page page-center",children:b.jsxs("section",{className:"card auth-card",children:[b.jsx("p",{className:"eyebrow",children:"Beastly Workout"}),b.jsx("h1",{children:"Accesso Coach"}),b.jsx("p",{className:"hero-sub",children:m?"Attendi un attimo...":"Sto verificando il tuo account."}),h?b.jsx("p",{className:"message",children:h}):null,b.jsx("button",{className:"btn btn-ghost",disabled:m,onClick:()=>void Tl(),type:"button",children:"Esci e cambia account"})]})}):b.jsx(Nn,{to:"/app/client",replace:!0});async function v(){l(!0),f("");try{if(sessionStorage.setItem(Es,"client"),(await hv()).redirected){f("Ti sto reindirizzando a Google...");return}t("/app/client",{replace:!0})}catch(I){const L=dr(I);f(L),i(L)}finally{l(!1)}}async function T(){l(!0),f("");try{sessionStorage.setItem(Es,"coach");const I=await hv();if(I.redirected){f("Ti sto reindirizzando a Google...");return}if(!I.user){f("Accesso non completato. Riprova.");return}if(!df(I.user.email)){await Tl(),f("Questo account non è abilitato per l’area coach. Usa accesso utente."),i("Questo account non è abilitato per l’area coach.");return}await zc({email:I.user.email??"",displayName:I.user.displayName??"",coachAccessRequestedAt:new Date().toISOString()});for(let L=0;L<8;L+=1){await cv();const B=await Hf(I.user);if(B==="admin"||B==="trainer"){sessionStorage.removeItem(Es),t("/app/coach",{replace:!0});return}await new Promise(q=>setTimeout(q,700))}f("Sto ancora completando l’accesso coach. Riprova tra qualche secondo.")}catch(I){const L=dr(I);f(L),i(L)}finally{l(!1)}}return b.jsx("main",{className:"page page-center",children:b.jsxs("section",{className:"card auth-card",children:[b.jsx("p",{className:"eyebrow",children:"Beastly Workout"}),b.jsx("h1",{children:"Accedi con Google"}),b.jsx("p",{className:"hero-sub",children:"Entra in pochi secondi e inizia subito il tuo percorso."}),b.jsx("button",{className:"btn",disabled:o,onClick:()=>void v(),type:"button",children:o?"Connessione...":"Continua con Google"}),b.jsx("div",{className:"divider"}),b.jsx("h2",{children:"Sei un Coach?"}),b.jsx("p",{className:"hint",children:"Usa il tuo account coach per entrare nell'area professionale."}),b.jsx("button",{className:"btn btn-ghost",disabled:o,onClick:()=>void T(),type:"button",children:"Continua come Coach"}),h?b.jsx("p",{className:"message",children:h}):null]})})}function C0({role:n,title:e,subtitle:t,children:i}){return b.jsxs("main",{className:"page",children:[b.jsxs("section",{className:"hero",children:[b.jsx("p",{className:"eyebrow",children:n==="client"?"Area Cliente":"Area Coach"}),b.jsx("h1",{children:e}),b.jsx("p",{className:"hero-sub",children:t}),b.jsx("button",{className:"btn btn-ghost",type:"button",onClick:()=>void Tl(),children:"Esci dal profilo"})]}),b.jsx("section",{className:"stack",children:i}),b.jsxs("nav",{className:"mobile-nav",children:[b.jsx(qI,{to:n==="client"?"/app/client":"/app/coach",children:"Home"}),b.jsx("button",{type:"button",onClick:()=>void Tl(),children:"Esci"})]})]})}function dv(n){try{const e=new URL(n);if(e.hostname.includes("youtu.be")){const t=e.pathname.replace("/","").trim();return t?`https://www.youtube.com/embed/${t}`:null}if(e.hostname.includes("youtube.com")){const t=e.searchParams.get("v");return t?`https://www.youtube.com/embed/${t}`:null}return null}catch{return null}}function zx(n){return/\.(jpg|jpeg|png|gif|webp|avif|svg)(\?.*)?$/i.test(n)}function $x(n){return/\.(mp4|webm|mov|m4v|ogg)(\?.*)?$/i.test(n)}function qx(n){return Array.isArray(n)?n.map(e=>{if(!e||typeof e!="object")return null;const t=e;return{name:typeof t.name=="string"?t.name:"",sets:typeof t.sets=="number"?t.sets:Number(t.sets??0)||0,reps:typeof t.reps=="string"?t.reps:"",weight:typeof t.weight=="string"?t.weight:"",mediaUrl:typeof t.mediaUrl=="string"?t.mediaUrl:""}}).filter(e=>!!e):[]}function Hx(){const{role:n,user:e}=na(),t=Sl(),{showError:i}=qc(),[o,l]=K.useState([]),[h,f]=K.useState([]),[m,y]=K.useState([]),[v,T]=K.useState([]),[I,L]=K.useState(!1),[B,q]=K.useState(!0),[D,ie]=K.useState(null);K.useEffect(()=>{async function he(){if(e)try{const S=(await Wf(e.uid)).data();if(!(S!=null&&S.onboardingCompleted)){t("/onboarding",{replace:!0});return}}catch{t("/onboarding",{replace:!0});return}finally{q(!1)}}he()},[e,t]);async function te(){L(!0);try{const he=(e==null?void 0:e.uid)??"",x=he?await Wf(he):null,S=(x==null?void 0:x.data())??{},C=Array.from(new Set([he,(S.uid??"").trim(),(S.clientId??"").trim()].filter(ze=>ze.length>0))),k=await Promise.allSettled(C.flatMap(ze=>[A0("client",ze),kx(ze)])),V=new Map;for(const ze of k){if(ze.status!=="fulfilled")continue;const Pe=ze.value;if("docs"in Pe)for(const ee of cc(Pe.docs))V.set(ee.id,ee);else if(Pe.exists()){const ee={id:Pe.id,...Pe.data()};V.set(ee.id,ee)}}const M=Array.from(V.values()).sort((ze,Pe)=>{const ee=C.includes(ze.id)?0:1,ge=C.includes(Pe.id)?0:1;return ee-ge});l(M);const[R,$e,qe]=await Promise.allSettled([Ox("client"),Dx(),bx()]);f(R.status==="fulfilled"?cc(R.value.docs):[]),y($e.status==="fulfilled"?cc($e.value.docs):[]),T(qe.status==="fulfilled"?cc(qe.value.docs):[]),(R.status==="rejected"||$e.status==="rejected"||qe.status==="rejected")&&i("Alcune sezioni non sono ancora pronte, ma la tua scheda tecnica è disponibile.")}catch(he){i(dr(he))}finally{L(!1)}}K.useEffect(()=>{e&&(n==="client"||n===null)&&te()},[n,e==null?void 0:e.uid]);const J=K.useMemo(()=>[...h].sort((he,x)=>new Date(he.startsAt).getTime()-new Date(x.startsAt).getTime()).find(he=>new Date(he.startsAt).getTime()>Date.now()),[h]),se=o[0],Ae=qx(se==null?void 0:se.exercises);return e?B?b.jsx("main",{className:"page page-center",children:b.jsxs("section",{className:"card auth-card",children:[b.jsx("p",{className:"eyebrow",children:"Beastly Workout"}),b.jsx("h1",{children:"Prepariamo la tua area"}),b.jsx("p",{className:"hero-sub",children:"Sto verificando le informazioni del tuo profilo..."})]})}):b.jsxs(C0,{role:"client",subtitle:"Tieni traccia di allenamenti e progressi in modo semplice.",title:"La tua area",children:[b.jsxs("article",{className:"card",children:[b.jsx("h2",{children:"Riepilogo"}),b.jsxs("p",{className:"hint",children:["Programmi ricevuti: ",o.length]}),b.jsxs("p",{className:"hint",children:["Sessioni prenotate: ",h.length]}),b.jsxs("p",{className:"hint",children:["Allenamenti registrati: ",m.length]}),b.jsxs("p",{className:"hint",children:["Progressi inseriti: ",v.length]}),J?b.jsxs("p",{className:"message success",children:["Prossima sessione: ",new Date(J.startsAt).toLocaleString("it-IT")]}):null]}),b.jsxs("article",{className:"card",children:[b.jsx("h2",{children:"La tua scheda tecnica"}),se?b.jsxs(b.Fragment,{children:[b.jsx("p",{className:"hint",children:b.jsx("strong",{children:se.title})}),b.jsx("ul",{className:"list",children:Ae.map((he,x)=>b.jsxs("li",{children:[b.jsx("strong",{children:he.name||`Esercizio ${x+1}`})," · ",he.sets??"-"," serie"," · ",he.reps||"-"," reps"," · ",he.weight||"-",he.mediaUrl?b.jsxs(b.Fragment,{children:[" · ",b.jsx("button",{className:"btn-link",type:"button",onClick:()=>ie({url:he.mediaUrl,label:he.name||`Esercizio ${x+1}`}),children:"Apri media"})]}):null]},`plan-ex-${x}`))})]}):b.jsx("p",{className:"hint",children:"La tua scheda non è ancora disponibile. Il coach la pubblicherà a breve."})]}),I?b.jsx("p",{className:"message",children:"Caricamento..."}):null,D?b.jsx("section",{className:"modal-overlay",role:"dialog","aria-modal":"true",children:b.jsxs("article",{className:"card modal-card",children:[b.jsx("h2",{children:D.label}),dv(D.url)?b.jsx("iframe",{title:D.label,src:dv(D.url)??void 0,className:"media-frame",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}):zx(D.url)?b.jsx("img",{src:D.url,alt:D.label,className:"media-frame media-image"}):$x(D.url)?b.jsx("video",{src:D.url,controls:!0,className:"media-frame"}):b.jsxs("p",{className:"hint",children:["Anteprima non disponibile."," ",b.jsx("a",{href:D.url,target:"_blank",rel:"noreferrer",children:"Apri il link"})]}),b.jsx("button",{className:"btn btn-ghost",type:"button",onClick:()=>ie(null),children:"Chiudi"})]})}):null]}):b.jsx(Nn,{to:"/auth",replace:!0})}function Kn(n){return typeof n=="string"?n:n==null?"":String(n)}function fv(n){return Kn(n.uid).trim()||n.id}function Wx(n){return Array.isArray(n)?n.map(e=>{if(!e||typeof e!="object")return null;const t=e;return{name:Kn(t.name),sets:Number(t.sets??3)||3,reps:Kn(t.reps)||"10",weight:Kn(t.weight),mediaUrl:Kn(t.mediaUrl)}}).filter(e=>!!e):[]}function Gx(){var ge,ae;const{role:n,user:e}=na(),{showError:t,showSuccess:i}=qc(),[o,l]=K.useState([]),[h,f]=K.useState([]),[m,y]=K.useState(!1),[v,T]=K.useState(null),[I,L]=K.useState(!1),[B,q]=K.useState(null),[D,ie]=K.useState(""),[te,J]=K.useState(""),[se,Ae]=K.useState([{name:"",sets:3,reps:"10",weight:"",mediaUrl:""}]),[he,x]=K.useState(""),[S,C]=K.useState("client"),k=h.find(P=>P.id===D)??h.find(P=>P.clientId===D);K.useEffect(()=>{async function P(){if(!D){T(null);return}try{const z=await Cx(D,"onboarding");T(z.data()??null)}catch{T(null)}}P()},[D]),K.useEffect(()=>{if(!D)return;if(!k){J(""),Ae([{name:"",sets:3,reps:"10",weight:"",mediaUrl:""}]);return}J(k.title??"");const P=Wx(k.exercises).filter(z=>z.name.trim().length>0);Ae(P.length>0?P:[{name:"",sets:3,reps:"10",weight:"",mediaUrl:""}])},[D,k==null?void 0:k.id]);async function V(){if(n){y(!0);try{const re=(await Rx()).docs.map(de=>({id:de.id,...de.data()})).filter(de=>de.id!==(e==null?void 0:e.uid)).filter(de=>{const we=Kn(de.role).toLowerCase(),ke=Kn(de.requestedRole).toLowerCase();return we==="client"||ke==="client"||de.onboardingCompleted===!0}).sort((de,we)=>{const ke=Kn(de.displayName||de.email||de.id).toLowerCase(),be=Kn(we.displayName||we.email||we.id).toLowerCase();return ke.localeCompare(be)});l(re),!D&&re[0]&&ie(fv(re[0]));try{const de=await A0(n);f(de.docs.map(we=>({id:we.id,...we.data()})))}catch(de){f([]),t(dr(de))}}catch(P){console.error("Coach action failed:",P),t(dr(P))}finally{y(!1)}}}K.useEffect(()=>{V()},[n,e==null?void 0:e.uid]);async function M(P,z){y(!0);try{await P(),i(z),await V()}catch(re){t(dr(re))}finally{y(!1)}}function R(){Ae(P=>[...P,{name:"",sets:3,reps:"10",weight:"",mediaUrl:""}])}function $e(P){Ae(z=>z.length<=1?z:z.filter((re,de)=>de!==P))}function qe(P,z){Ae(re=>re.map((de,we)=>we===P?{...de,...z}:de))}async function ze(){const P=se.map(z=>({name:z.name.trim(),sets:Number(z.sets)||0,reps:z.reps.trim(),weight:z.weight.trim(),mediaUrl:z.mediaUrl.trim()})).filter(z=>z.name.length>0);if(P.length===0){t("Aggiungi almeno un esercizio con nome.");return}k?await M(()=>Nx(k.id,{title:te,status:"active",exercises:P}),"Scheda aggiornata con successo."):await M(()=>Px({clientId:D,title:te,status:"active",exercises:P}),"Scheda creata e subito visibile al cliente."),L(!1)}function Pe(){if(!D){t("Seleziona prima un cliente.");return}if(!te.trim()){t("Inserisci un titolo per la scheda.");return}L(!0)}async function ee(P,z){if(z){if(!z.type.startsWith("image/")){t("Puoi caricare solo immagini. Per i video usa il campo URL.");return}if(!D){t("Seleziona prima un cliente.");return}q(P);try{const re=await xx(D,z);qe(P,{mediaUrl:re}),i("Media caricato con successo.")}catch(re){console.error("Media upload failed:",re),t(dr(re))}finally{q(null)}}}return b.jsxs(C0,{role:n==="trainer"?"trainer":"admin",subtitle:"Gestisci clienti, programmi e appuntamenti da un unico posto.",title:"Area Coach",children:[b.jsxs("article",{className:"card",children:[b.jsx("h2",{children:"Crea scheda cliente"}),b.jsxs("label",{children:["Clienti registrati",b.jsxs("select",{value:D,onChange:P=>ie(P.target.value),children:[o.length===0?b.jsx("option",{value:"",children:"Nessun cliente disponibile"}):null,o.map(P=>b.jsx("option",{value:fv(P),children:Kn(P.displayName).trim()||Kn(P.email)||P.id},P.id))]})]}),b.jsx("button",{className:"btn btn-ghost",type:"button",onClick:()=>void V(),children:"Aggiorna lista clienti"}),b.jsxs("label",{children:["Titolo programma",b.jsx("input",{value:te,onChange:P=>J(P.target.value),placeholder:"Forza 4 settimane"})]}),b.jsx("p",{className:"hint",children:k?"Questo cliente ha già una scheda: puoi modificarla.":"Questo cliente non ha ancora una scheda: ne creerai una nuova."}),b.jsxs("article",{className:"card",style:{boxShadow:"none",border:"1px dashed rgba(18,18,18,0.16)"},children:[b.jsx("h2",{children:"Informazioni del cliente"}),b.jsxs("p",{className:"hint",children:["Obiettivo: ",((ge=v==null?void 0:v.goal)==null?void 0:ge.trim())||"Non disponibile"]}),b.jsxs("p",{className:"hint",children:["Livello: ",(v==null?void 0:v.experienceLevel)||"Non disponibile"]}),b.jsxs("p",{className:"hint",children:["Allenamenti a settimana: ",(v==null?void 0:v.trainingDaysPerWeek)??"Non disponibile"]}),b.jsxs("p",{className:"hint",children:["Note: ",((ae=v==null?void 0:v.notes)==null?void 0:ae.trim())||"Nessuna nota inserita"]})]}),b.jsx("button",{className:"btn",disabled:!D||!te||m,onClick:Pe,type:"button",children:k?"Modifica scheda":"Crea scheda"})]}),I?b.jsx("section",{className:"modal-overlay",role:"dialog","aria-modal":"true",children:b.jsxs("article",{className:"card modal-card",children:[b.jsx("h2",{children:k?"Modifica scheda":"Compila la scheda"}),b.jsx("p",{className:"hint",children:"Aggiungi esercizi uno alla volta per completare il programma."}),se.map((P,z)=>b.jsxs("article",{className:"card",style:{boxShadow:"none",border:"1px solid rgba(18,18,18,0.10)"},children:[b.jsxs("h2",{children:["Esercizio ",z+1]}),b.jsxs("label",{children:["Nome esercizio",b.jsx("input",{value:P.name,onChange:re=>qe(z,{name:re.target.value}),placeholder:"Es. Squat bilanciere"})]}),b.jsxs("label",{children:["Numero serie",b.jsx("input",{type:"number",min:1,value:P.sets,onChange:re=>qe(z,{sets:Number(re.target.value)})})]}),b.jsxs("label",{children:["Ripetizioni",b.jsx("input",{value:P.reps,onChange:re=>qe(z,{reps:re.target.value}),placeholder:"Es. 8-10"})]}),b.jsxs("label",{children:["Peso",b.jsx("input",{value:P.weight,onChange:re=>qe(z,{weight:re.target.value}),placeholder:"Es. 40kg o corpo libero"})]}),b.jsxs("label",{children:["URL video (YouTube o link diretto)",b.jsx("input",{value:P.mediaUrl,onChange:re=>qe(z,{mediaUrl:re.target.value}),placeholder:"https://..."})]}),b.jsxs("label",{children:["Oppure carica un'immagine",b.jsx("input",{type:"file",accept:"image/*",onChange:re=>{var de;return void ee(z,((de=re.target.files)==null?void 0:de[0])??null)},disabled:B===z})]}),B===z?b.jsx("p",{className:"hint",children:"Caricamento media in corso..."}):null,b.jsx("button",{className:"btn btn-ghost",type:"button",onClick:()=>$e(z),children:"Rimuovi esercizio"})]},`exercise-${z}`)),b.jsx("button",{className:"btn btn-ghost",type:"button",onClick:R,children:"Aggiungi esercizio"}),b.jsx("button",{className:"btn",type:"button",disabled:m,onClick:()=>void ze(),children:k?"Salva modifiche":"Salva scheda tecnica"}),b.jsx("button",{className:"btn btn-ghost",type:"button",onClick:()=>L(!1),children:"Chiudi"})]})}):null,n==="admin"?b.jsxs("article",{className:"card",children:[b.jsx("h2",{children:"Gestione accessi"}),b.jsxs("label",{children:["Codice utente",b.jsx("input",{value:he,onChange:P=>x(P.target.value),placeholder:"Inserisci il codice utente"})]}),b.jsxs("label",{children:["Profilo accesso",b.jsxs("select",{value:S,onChange:P=>C(P.target.value),children:[b.jsx("option",{value:"admin",children:"Admin"}),b.jsx("option",{value:"trainer",children:"Coach"}),b.jsx("option",{value:"client",children:"Cliente"})]})]}),b.jsx("button",{className:"btn",disabled:!he||m,onClick:()=>void M(()=>Sx(he,S),"Accesso aggiornato."),type:"button",children:"Aggiorna accesso"})]}):null,b.jsxs("article",{className:"card",children:[b.jsx("h2",{children:"Panoramica"}),b.jsxs("p",{className:"hint",children:["Clienti registrati: ",o.length]}),b.jsxs("p",{className:"hint",children:["Programmi creati: ",h.length]}),b.jsx("ul",{className:"list",children:h.slice(0,5).map(P=>{var z;return b.jsxs("li",{children:[b.jsx("strong",{children:P.title})," · ",((z=P.exercises)==null?void 0:z.length)??0," esercizi · cliente ",P.clientId]},P.id)})})]}),m?b.jsx("p",{className:"message",children:"Caricamento..."}):null]})}function Kx(){const{user:n,role:e}=na(),t=Sl(),{showError:i,showSuccess:o}=qc(),[l,h]=K.useState((n==null?void 0:n.displayName)??""),[f,m]=K.useState(""),[y,v]=K.useState("beginner"),[T,I]=K.useState(3),[L,B]=K.useState(""),[q,D]=K.useState(!1);if(!n)return b.jsx(Nn,{to:"/auth",replace:!0});if(e==="admin"||e==="trainer")return b.jsx(Nn,{to:"/app/coach",replace:!0});const ie=n.email??"";async function te(){D(!0);try{await zc({displayName:l.trim(),email:ie,role:"client",requestedRole:"client",onboardingStatus:"completed",onboardingCompleted:!0,onboardingUpdatedAt:new Date().toISOString()}),await Ax("onboarding",{goal:f.trim(),experienceLevel:y,trainingDaysPerWeek:T,notes:L.trim()}),o("Perfetto, profilo salvato."),t("/app/client",{replace:!0})}catch(J){i(dr(J))}finally{D(!1)}}return b.jsx("main",{className:"page page-center",children:b.jsxs("section",{className:"card auth-card",children:[b.jsx("p",{className:"eyebrow",children:"Onboarding Cliente"}),b.jsx("h1",{children:"Partiamo con i tuoi obiettivi"}),b.jsxs("p",{className:"hero-sub",children:["Completa queste informazioni per iniziare al meglio. Account: ",b.jsx("strong",{children:ie})]}),b.jsxs("label",{children:["Come ti chiami?",b.jsx("input",{value:l,onChange:J=>h(J.target.value),placeholder:"Nome e cognome"})]}),b.jsxs("label",{children:["Qual è il tuo obiettivo?",b.jsx("input",{value:f,onChange:J=>m(J.target.value),placeholder:"Es. perdere peso, aumentare forza, tonificare"})]}),b.jsxs("label",{children:["Livello di allenamento",b.jsxs("select",{value:y,onChange:J=>v(J.target.value),children:[b.jsx("option",{value:"beginner",children:"Principiante"}),b.jsx("option",{value:"intermediate",children:"Intermedio"}),b.jsx("option",{value:"advanced",children:"Avanzato"})]})]}),b.jsxs("label",{children:["Quanti giorni ti alleni a settimana?",b.jsx("input",{value:T,onChange:J=>I(Number(J.target.value)),type:"number",min:1,max:7})]}),b.jsxs("label",{children:["Informazioni utili",b.jsx("textarea",{value:L,onChange:J=>B(J.target.value),placeholder:"Es. infortuni, orari preferiti, esigenze specifiche"})]}),b.jsx("button",{className:"btn",disabled:q||!l||!f,type:"button",onClick:()=>void te(),children:q?"Salvataggio...":"Continua"}),b.jsx("button",{className:"btn btn-ghost",type:"button",onClick:()=>void Tl(),children:"Esci e cambia account"})]})})}function P0(){return b.jsx("main",{className:"page page-center",children:b.jsxs("div",{className:"card",children:[b.jsx("p",{className:"eyebrow",children:"Gym PT"}),b.jsx("h1",{children:"Caricamento in corso"})]})})}class Qx extends K.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){console.error("App render error:",e)}render(){return this.state.hasError?b.jsx("main",{className:"page page-center",children:b.jsxs("section",{className:"card auth-card",children:[b.jsx("p",{className:"eyebrow",children:"Beastly Workout"}),b.jsx("h1",{children:"Qualcosa non ha funzionato"}),b.jsx("p",{className:"hero-sub",children:"Ricarica la pagina o esci e rientra nel tuo profilo."}),b.jsx("button",{className:"btn btn-ghost",type:"button",onClick:()=>window.location.assign("/auth"),children:"Torna all'accesso"})]})}):this.props.children}}function pv({allow:n,children:e}){const{user:t,role:i,initializing:o}=na();return o?b.jsx(P0,{}):t?i?n.includes(i)?e:b.jsx(Nn,{to:i==="client"?"/app/client":"/app/coach",replace:!0}):n.includes("client")?e:b.jsx(Nn,{to:"/onboarding",replace:!0}):b.jsx(Nn,{to:"/auth",replace:!0})}function Xx(){const{user:n,role:e,initializing:t}=na();return t?b.jsx(P0,{}):n?e?b.jsx(Nn,{to:e==="client"?"/app/client":"/app/coach",replace:!0}):b.jsx(Nn,{to:"/app/client",replace:!0}):b.jsx(Nn,{to:"/auth",replace:!0})}function Jx(){return b.jsx(Qx,{children:b.jsxs(bI,{children:[b.jsx(Ts,{path:"/",element:b.jsx(Xx,{})}),b.jsx(Ts,{path:"/auth",element:b.jsx(Bx,{})}),b.jsx(Ts,{path:"/onboarding",element:b.jsx(Kx,{})}),b.jsx(Ts,{path:"/app/coach",element:b.jsx(pv,{allow:["admin","trainer"],children:b.jsx(Gx,{})})}),b.jsx(Ts,{path:"/app/client",element:b.jsx(pv,{allow:["client"],children:b.jsx(Hx,{})})}),b.jsx(Ts,{path:"*",element:b.jsx(Nn,{to:"/",replace:!0})})]})})}zT.createRoot(document.getElementById("root")).render(b.jsx(gv.StrictMode,{children:b.jsx(WI,{children:b.jsx(BI,{children:b.jsx(Jx,{})})})}));
