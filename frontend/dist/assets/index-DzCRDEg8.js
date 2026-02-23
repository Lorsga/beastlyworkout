const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AuthPage-DG-QBuSj.js","assets/firestore-CSdz_xXz.js","assets/ClientDashboardPage-CKgj4U7I.js","assets/AppShell-COEDIaKj.js","assets/CoachDashboardPage-CSUfAqYk.js","assets/OnboardingPage-JOAR5esd.js"])))=>i.map(i=>d[i]);
function F0(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in n)){const l=Object.getOwnPropertyDescriptor(i,o);l&&Object.defineProperty(n,o,l.get?l:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function F_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Nd={exports:{}},$a={},Dd={exports:{}},Re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mg;function U0(){if(Mg)return Re;Mg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),T=Symbol.iterator;function I(V){return V===null||typeof V!="object"?null:(V=T&&V[T]||V["@@iterator"],typeof V=="function"?V:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,$={};function b(V,W,de){this.props=V,this.context=W,this.refs=$,this.updater=de||U}b.prototype.isReactComponent={},b.prototype.setState=function(V,W){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,W,"setState")},b.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function oe(){}oe.prototype=b.prototype;function re(V,W,de){this.props=V,this.context=W,this.refs=$,this.updater=de||U}var ee=re.prototype=new oe;ee.constructor=re,z(ee,b.prototype),ee.isPureReactComponent=!0;var ue=Array.isArray,Ce=Object.prototype.hasOwnProperty,Te={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function A(V,W,de){var Ie,Ae={},De=null,be=null;if(W!=null)for(Ie in W.ref!==void 0&&(be=W.ref),W.key!==void 0&&(De=""+W.key),W)Ce.call(W,Ie)&&!D.hasOwnProperty(Ie)&&(Ae[Ie]=W[Ie]);var Fe=arguments.length-2;if(Fe===1)Ae.children=de;else if(1<Fe){for(var $e=Array(Fe),Et=0;Et<Fe;Et++)$e[Et]=arguments[Et+2];Ae.children=$e}if(V&&V.defaultProps)for(Ie in Fe=V.defaultProps,Fe)Ae[Ie]===void 0&&(Ae[Ie]=Fe[Ie]);return{$$typeof:n,type:V,key:De,ref:be,props:Ae,_owner:Te.current}}function C(V,W){return{$$typeof:n,type:V.type,key:W,ref:V.ref,props:V.props,_owner:V._owner}}function k(V){return typeof V=="object"&&V!==null&&V.$$typeof===n}function O(V){var W={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(de){return W[de]})}var x=/\/+/g;function R(V,W){return typeof V=="object"&&V!==null&&V.key!=null?O(""+V.key):W.toString(36)}function nt(V,W,de,Ie,Ae){var De=typeof V;(De==="undefined"||De==="boolean")&&(V=null);var be=!1;if(V===null)be=!0;else switch(De){case"string":case"number":be=!0;break;case"object":switch(V.$$typeof){case n:case e:be=!0}}if(be)return be=V,Ae=Ae(be),V=Ie===""?"."+R(be,0):Ie,ue(Ae)?(de="",V!=null&&(de=V.replace(x,"$&/")+"/"),nt(Ae,W,de,"",function(Et){return Et})):Ae!=null&&(k(Ae)&&(Ae=C(Ae,de+(!Ae.key||be&&be.key===Ae.key?"":(""+Ae.key).replace(x,"$&/")+"/")+V)),W.push(Ae)),1;if(be=0,Ie=Ie===""?".":Ie+":",ue(V))for(var Fe=0;Fe<V.length;Fe++){De=V[Fe];var $e=Ie+R(De,Fe);be+=nt(De,W,de,$e,Ae)}else if($e=I(V),typeof $e=="function")for(V=$e.call(V),Fe=0;!(De=V.next()).done;)De=De.value,$e=Ie+R(De,Fe++),be+=nt(De,W,de,$e,Ae);else if(De==="object")throw W=String(V),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.");return be}function Vt(V,W,de){if(V==null)return V;var Ie=[],Ae=0;return nt(V,Ie,"","",function(De){return W.call(de,De,Ae++)}),Ie}function xt(V){if(V._status===-1){var W=V._result;W=W(),W.then(function(de){(V._status===0||V._status===-1)&&(V._status=1,V._result=de)},function(de){(V._status===0||V._status===-1)&&(V._status=2,V._result=de)}),V._status===-1&&(V._status=0,V._result=W)}if(V._status===1)return V._result.default;throw V._result}var Be={current:null},Y={transition:null},pe={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:Y,ReactCurrentOwner:Te};function se(){throw Error("act(...) is not supported in production builds of React.")}return Re.Children={map:Vt,forEach:function(V,W,de){Vt(V,function(){W.apply(this,arguments)},de)},count:function(V){var W=0;return Vt(V,function(){W++}),W},toArray:function(V){return Vt(V,function(W){return W})||[]},only:function(V){if(!k(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Re.Component=b,Re.Fragment=t,Re.Profiler=o,Re.PureComponent=re,Re.StrictMode=i,Re.Suspense=g,Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pe,Re.act=se,Re.cloneElement=function(V,W,de){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Ie=z({},V.props),Ae=V.key,De=V.ref,be=V._owner;if(W!=null){if(W.ref!==void 0&&(De=W.ref,be=Te.current),W.key!==void 0&&(Ae=""+W.key),V.type&&V.type.defaultProps)var Fe=V.type.defaultProps;for($e in W)Ce.call(W,$e)&&!D.hasOwnProperty($e)&&(Ie[$e]=W[$e]===void 0&&Fe!==void 0?Fe[$e]:W[$e])}var $e=arguments.length-2;if($e===1)Ie.children=de;else if(1<$e){Fe=Array($e);for(var Et=0;Et<$e;Et++)Fe[Et]=arguments[Et+2];Ie.children=Fe}return{$$typeof:n,type:V.type,key:Ae,ref:De,props:Ie,_owner:be}},Re.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:l,_context:V},V.Consumer=V},Re.createElement=A,Re.createFactory=function(V){var W=A.bind(null,V);return W.type=V,W},Re.createRef=function(){return{current:null}},Re.forwardRef=function(V){return{$$typeof:f,render:V}},Re.isValidElement=k,Re.lazy=function(V){return{$$typeof:E,_payload:{_status:-1,_result:V},_init:xt}},Re.memo=function(V,W){return{$$typeof:_,type:V,compare:W===void 0?null:W}},Re.startTransition=function(V){var W=Y.transition;Y.transition={};try{V()}finally{Y.transition=W}},Re.unstable_act=se,Re.useCallback=function(V,W){return Be.current.useCallback(V,W)},Re.useContext=function(V){return Be.current.useContext(V)},Re.useDebugValue=function(){},Re.useDeferredValue=function(V){return Be.current.useDeferredValue(V)},Re.useEffect=function(V,W){return Be.current.useEffect(V,W)},Re.useId=function(){return Be.current.useId()},Re.useImperativeHandle=function(V,W,de){return Be.current.useImperativeHandle(V,W,de)},Re.useInsertionEffect=function(V,W){return Be.current.useInsertionEffect(V,W)},Re.useLayoutEffect=function(V,W){return Be.current.useLayoutEffect(V,W)},Re.useMemo=function(V,W){return Be.current.useMemo(V,W)},Re.useReducer=function(V,W,de){return Be.current.useReducer(V,W,de)},Re.useRef=function(V){return Be.current.useRef(V)},Re.useState=function(V){return Be.current.useState(V)},Re.useSyncExternalStore=function(V,W,de){return Be.current.useSyncExternalStore(V,W,de)},Re.useTransition=function(){return Be.current.useTransition()},Re.version="18.3.1",Re}var bg;function Rf(){return bg||(bg=1,Dd.exports=U0()),Dd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fg;function j0(){if(Fg)return $a;Fg=1;var n=Rf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,g,_){var E,T={},I=null,U=null;_!==void 0&&(I=""+_),g.key!==void 0&&(I=""+g.key),g.ref!==void 0&&(U=g.ref);for(E in g)i.call(g,E)&&!l.hasOwnProperty(E)&&(T[E]=g[E]);if(f&&f.defaultProps)for(E in g=f.defaultProps,g)T[E]===void 0&&(T[E]=g[E]);return{$$typeof:e,type:f,key:I,ref:U,props:T,_owner:o.current}}return $a.Fragment=t,$a.jsx=h,$a.jsxs=h,$a}var Ug;function B0(){return Ug||(Ug=1,Nd.exports=j0()),Nd.exports}var Me=B0(),Z=Rf();const U_=F_(Z),z0=F0({__proto__:null,default:U_},[Z]);var Hu={},Od={exports:{}},en={},Vd={exports:{}},xd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jg;function $0(){return jg||(jg=1,(function(n){function e(Y,pe){var se=Y.length;Y.push(pe);e:for(;0<se;){var V=se-1>>>1,W=Y[V];if(0<o(W,pe))Y[V]=pe,Y[se]=W,se=V;else break e}}function t(Y){return Y.length===0?null:Y[0]}function i(Y){if(Y.length===0)return null;var pe=Y[0],se=Y.pop();if(se!==pe){Y[0]=se;e:for(var V=0,W=Y.length,de=W>>>1;V<de;){var Ie=2*(V+1)-1,Ae=Y[Ie],De=Ie+1,be=Y[De];if(0>o(Ae,se))De<W&&0>o(be,Ae)?(Y[V]=be,Y[De]=se,V=De):(Y[V]=Ae,Y[Ie]=se,V=Ie);else if(De<W&&0>o(be,se))Y[V]=be,Y[De]=se,V=De;else break e}}return pe}function o(Y,pe){var se=Y.sortIndex-pe.sortIndex;return se!==0?se:Y.id-pe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();n.unstable_now=function(){return h.now()-f}}var g=[],_=[],E=1,T=null,I=3,U=!1,z=!1,$=!1,b=typeof setTimeout=="function"?setTimeout:null,oe=typeof clearTimeout=="function"?clearTimeout:null,re=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ee(Y){for(var pe=t(_);pe!==null;){if(pe.callback===null)i(_);else if(pe.startTime<=Y)i(_),pe.sortIndex=pe.expirationTime,e(g,pe);else break;pe=t(_)}}function ue(Y){if($=!1,ee(Y),!z)if(t(g)!==null)z=!0,xt(Ce);else{var pe=t(_);pe!==null&&Be(ue,pe.startTime-Y)}}function Ce(Y,pe){z=!1,$&&($=!1,oe(A),A=-1),U=!0;var se=I;try{for(ee(pe),T=t(g);T!==null&&(!(T.expirationTime>pe)||Y&&!O());){var V=T.callback;if(typeof V=="function"){T.callback=null,I=T.priorityLevel;var W=V(T.expirationTime<=pe);pe=n.unstable_now(),typeof W=="function"?T.callback=W:T===t(g)&&i(g),ee(pe)}else i(g);T=t(g)}if(T!==null)var de=!0;else{var Ie=t(_);Ie!==null&&Be(ue,Ie.startTime-pe),de=!1}return de}finally{T=null,I=se,U=!1}}var Te=!1,D=null,A=-1,C=5,k=-1;function O(){return!(n.unstable_now()-k<C)}function x(){if(D!==null){var Y=n.unstable_now();k=Y;var pe=!0;try{pe=D(!0,Y)}finally{pe?R():(Te=!1,D=null)}}else Te=!1}var R;if(typeof re=="function")R=function(){re(x)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,Vt=nt.port2;nt.port1.onmessage=x,R=function(){Vt.postMessage(null)}}else R=function(){b(x,0)};function xt(Y){D=Y,Te||(Te=!0,R())}function Be(Y,pe){A=b(function(){Y(n.unstable_now())},pe)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(Y){Y.callback=null},n.unstable_continueExecution=function(){z||U||(z=!0,xt(Ce))},n.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<Y?Math.floor(1e3/Y):5},n.unstable_getCurrentPriorityLevel=function(){return I},n.unstable_getFirstCallbackNode=function(){return t(g)},n.unstable_next=function(Y){switch(I){case 1:case 2:case 3:var pe=3;break;default:pe=I}var se=I;I=pe;try{return Y()}finally{I=se}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(Y,pe){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var se=I;I=Y;try{return pe()}finally{I=se}},n.unstable_scheduleCallback=function(Y,pe,se){var V=n.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?V+se:V):se=V,Y){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=se+W,Y={id:E++,callback:pe,priorityLevel:Y,startTime:se,expirationTime:W,sortIndex:-1},se>V?(Y.sortIndex=se,e(_,Y),t(g)===null&&Y===t(_)&&($?(oe(A),A=-1):$=!0,Be(ue,se-V))):(Y.sortIndex=W,e(g,Y),z||U||(z=!0,xt(Ce))),Y},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(Y){var pe=I;return function(){var se=I;I=pe;try{return Y.apply(this,arguments)}finally{I=se}}}})(xd)),xd}var Bg;function q0(){return Bg||(Bg=1,Vd.exports=$0()),Vd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zg;function H0(){if(zg)return en;zg=1;var n=Rf(),e=q0();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){h(r,s),h(r+"Capture",s)}function h(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},T={};function I(r){return g.call(T,r)?!0:g.call(E,r)?!1:_.test(r)?T[r]=!0:(E[r]=!0,!1)}function U(r,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function z(r,s,a,c){if(s===null||typeof s>"u"||U(r,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function $(r,s,a,c,d,m,v){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=m,this.removeEmptyString=v}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){b[r]=new $(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];b[s]=new $(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){b[r]=new $(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){b[r]=new $(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){b[r]=new $(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){b[r]=new $(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){b[r]=new $(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){b[r]=new $(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){b[r]=new $(r,5,!1,r.toLowerCase(),null,!1,!1)});var oe=/[\-:]([a-z])/g;function re(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(oe,re);b[s]=new $(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(oe,re);b[s]=new $(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(oe,re);b[s]=new $(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){b[r]=new $(r,1,!1,r.toLowerCase(),null,!1,!1)}),b.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){b[r]=new $(r,1,!1,r.toLowerCase(),null,!0,!0)});function ee(r,s,a,c){var d=b.hasOwnProperty(s)?b[s]:null;(d!==null?d.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(z(s,a,d,c)&&(a=null),c||d===null?I(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):d.mustUseProperty?r[d.propertyName]=a===null?d.type===3?!1:"":a:(s=d.attributeName,c=d.attributeNamespace,a===null?r.removeAttribute(s):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?r.setAttributeNS(c,s,a):r.setAttribute(s,a))))}var ue=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ce=Symbol.for("react.element"),Te=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),O=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),nt=Symbol.for("react.suspense_list"),Vt=Symbol.for("react.memo"),xt=Symbol.for("react.lazy"),Be=Symbol.for("react.offscreen"),Y=Symbol.iterator;function pe(r){return r===null||typeof r!="object"?null:(r=Y&&r[Y]||r["@@iterator"],typeof r=="function"?r:null)}var se=Object.assign,V;function W(r){if(V===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);V=s&&s[1]||""}return`
`+V+r}var de=!1;function Ie(r,s){if(!r||de)return"";de=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(j){var c=j}Reflect.construct(r,[],s)}else{try{s.call()}catch(j){c=j}r.call(s.prototype)}else{try{throw Error()}catch(j){c=j}r()}}catch(j){if(j&&c&&typeof j.stack=="string"){for(var d=j.stack.split(`
`),m=c.stack.split(`
`),v=d.length-1,S=m.length-1;1<=v&&0<=S&&d[v]!==m[S];)S--;for(;1<=v&&0<=S;v--,S--)if(d[v]!==m[S]){if(v!==1||S!==1)do if(v--,S--,0>S||d[v]!==m[S]){var P=`
`+d[v].replace(" at new "," at ");return r.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",r.displayName)),P}while(1<=v&&0<=S);break}}}finally{de=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?W(r):""}function Ae(r){switch(r.tag){case 5:return W(r.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return r=Ie(r.type,!1),r;case 11:return r=Ie(r.type.render,!1),r;case 1:return r=Ie(r.type,!0),r;default:return""}}function De(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case D:return"Fragment";case Te:return"Portal";case C:return"Profiler";case A:return"StrictMode";case R:return"Suspense";case nt:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case O:return(r.displayName||"Context")+".Consumer";case k:return(r._context.displayName||"Context")+".Provider";case x:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Vt:return s=r.displayName||null,s!==null?s:De(r.type)||"Memo";case xt:s=r._payload,r=r._init;try{return De(r(s))}catch{}}return null}function be(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return De(s);case 8:return s===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Fe(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function $e(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Et(r){var s=$e(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),c=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,m.call(this,v)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function _r(r){r._valueTracker||(r._valueTracker=Et(r))}function Ns(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return r&&(c=$e(r)?r.checked?"true":"false":r.value),r=c,r!==a?(s.setValue(r),!0):!1}function Hr(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function ji(r,s){var a=s.checked;return se({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function Ds(r,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=Fe(s.value!=null?s.value:a),r._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Qo(r,s){s=s.checked,s!=null&&ee(r,"checked",s,!1)}function Xo(r,s){Qo(r,s);var a=Fe(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(c==="submit"||c==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Os(r,s.type,a):s.hasOwnProperty("defaultValue")&&Os(r,s.type,Fe(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Nl(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function Os(r,s,a){(s!=="number"||Hr(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var vr=Array.isArray;function Er(r,s,a,c){if(r=r.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<r.length;a++)d=s.hasOwnProperty("$"+r[a].value),r[a].selected!==d&&(r[a].selected=d),d&&c&&(r[a].defaultSelected=!0)}else{for(a=""+Fe(a),s=null,d=0;d<r.length;d++){if(r[d].value===a){r[d].selected=!0,c&&(r[d].defaultSelected=!0);return}s!==null||r[d].disabled||(s=r[d])}s!==null&&(s.selected=!0)}}function Jo(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Vs(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(vr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:Fe(a)}}function xs(r,s){var a=Fe(s.value),c=Fe(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),c!=null&&(r.defaultValue=""+c)}function Yo(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function ft(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pt(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?ft(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var wr,Zo=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,d){MSApp.execUnsafeLocalFunction(function(){return r(s,a,c,d)})}:r})(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(wr=wr||document.createElement("div"),wr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=wr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function Wr(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var Bi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zi=["Webkit","ms","Moz","O"];Object.keys(Bi).forEach(function(r){zi.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Bi[s]=Bi[r]})});function ea(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Bi.hasOwnProperty(r)&&Bi[r]?(""+s).trim():s+"px"}function ta(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=ea(a,s[a],c);a==="float"&&(a="cssFloat"),c?r.setProperty(a,d):r[a]=d}}var na=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ra(r,s){if(s){if(na[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function ia(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $i=null;function Ls(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Ms=null,pn=null,Qn=null;function bs(r){if(r=Pa(r)){if(typeof Ms!="function")throw Error(t(280));var s=r.stateNode;s&&(s=ou(s),Ms(r.stateNode,r.type,s))}}function Xn(r){pn?Qn?Qn.push(r):Qn=[r]:pn=r}function sa(){if(pn){var r=pn,s=Qn;if(Qn=pn=null,bs(r),s)for(r=0;r<s.length;r++)bs(s[r])}}function qi(r,s){return r(s)}function oa(){}var Tr=!1;function aa(r,s,a){if(Tr)return r(s,a);Tr=!0;try{return qi(r,s,a)}finally{Tr=!1,(pn!==null||Qn!==null)&&(oa(),sa())}}function rt(r,s){var a=r.stateNode;if(a===null)return null;var c=ou(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Fs=!1;if(f)try{var Cn={};Object.defineProperty(Cn,"passive",{get:function(){Fs=!0}}),window.addEventListener("test",Cn,Cn),window.removeEventListener("test",Cn,Cn)}catch{Fs=!1}function Hi(r,s,a,c,d,m,v,S,P){var j=Array.prototype.slice.call(arguments,3);try{s.apply(a,j)}catch(K){this.onError(K)}}var Wi=!1,Us=null,Pn=!1,la=null,ih={onError:function(r){Wi=!0,Us=r}};function js(r,s,a,c,d,m,v,S,P){Wi=!1,Us=null,Hi.apply(ih,arguments)}function Dl(r,s,a,c,d,m,v,S,P){if(js.apply(this,arguments),Wi){if(Wi){var j=Us;Wi=!1,Us=null}else throw Error(t(198));Pn||(Pn=!0,la=j)}}function kn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function Gi(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function Nn(r){if(kn(r)!==r)throw Error(t(188))}function Ol(r){var s=r.alternate;if(!s){if(s=kn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,c=s;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return Nn(d),r;if(m===c)return Nn(d),s;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var v=!1,S=d.child;S;){if(S===a){v=!0,a=d,c=m;break}if(S===c){v=!0,c=d,a=m;break}S=S.sibling}if(!v){for(S=m.child;S;){if(S===a){v=!0,a=m,c=d;break}if(S===c){v=!0,c=m,a=d;break}S=S.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function ua(r){return r=Ol(r),r!==null?Bs(r):null}function Bs(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Bs(r);if(s!==null)return s;r=r.sibling}return null}var zs=e.unstable_scheduleCallback,ca=e.unstable_cancelCallback,Vl=e.unstable_shouldYield,sh=e.unstable_requestPaint,qe=e.unstable_now,xl=e.unstable_getCurrentPriorityLevel,Ki=e.unstable_ImmediatePriority,Gr=e.unstable_UserBlockingPriority,mn=e.unstable_NormalPriority,ha=e.unstable_LowPriority,Ll=e.unstable_IdlePriority,Qi=null,sn=null;function Ml(r){if(sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(Qi,r,void 0,(r.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:Fl,da=Math.log,bl=Math.LN2;function Fl(r){return r>>>=0,r===0?32:31-(da(r)/bl|0)|0}var $s=64,qs=4194304;function Kr(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Xi(r,s){var a=r.pendingLanes;if(a===0)return 0;var c=0,d=r.suspendedLanes,m=r.pingedLanes,v=a&268435455;if(v!==0){var S=v&~d;S!==0?c=Kr(S):(m&=v,m!==0&&(c=Kr(m)))}else v=a&~d,v!==0?c=Kr(v):m!==0&&(c=Kr(m));if(c===0)return 0;if(s!==0&&s!==c&&(s&d)===0&&(d=c&-c,m=s&-s,d>=m||d===16&&(m&4194240)!==0))return s;if((c&4)!==0&&(c|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=c;0<s;)a=31-$t(s),d=1<<a,c|=r[a],s&=~d;return c}function oh(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ir(r,s){for(var a=r.suspendedLanes,c=r.pingedLanes,d=r.expirationTimes,m=r.pendingLanes;0<m;){var v=31-$t(m),S=1<<v,P=d[v];P===-1?((S&a)===0||(S&c)!==0)&&(d[v]=oh(S,s)):P<=s&&(r.expiredLanes|=S),m&=~S}}function on(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Ji(){var r=$s;return $s<<=1,($s&4194240)===0&&($s=64),r}function Qr(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function Xr(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-$t(s),r[s]=a}function ze(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var c=r.eventTimes;for(r=r.expirationTimes;0<a;){var d=31-$t(a),m=1<<d;s[d]=0,c[d]=-1,r[d]=-1,a&=~m}}function Jr(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var c=31-$t(a),d=1<<c;d&s|r[c]&s&&(r[c]|=s),a&=~d}}var Ne=0;function Yr(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Ul,Hs,jl,Bl,zl,fa=!1,Jn=[],Rt=null,Dn=null,On=null,Zr=new Map,gn=new Map,Yn=[],ah="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $l(r,s){switch(r){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":Dn=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":Zr.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":gn.delete(s.pointerId)}}function Gt(r,s,a,c,d,m){return r===null||r.nativeEvent!==m?(r={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},s!==null&&(s=Pa(s),s!==null&&Hs(s)),r):(r.eventSystemFlags|=c,s=r.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),r)}function lh(r,s,a,c,d){switch(s){case"focusin":return Rt=Gt(Rt,r,s,a,c,d),!0;case"dragenter":return Dn=Gt(Dn,r,s,a,c,d),!0;case"mouseover":return On=Gt(On,r,s,a,c,d),!0;case"pointerover":var m=d.pointerId;return Zr.set(m,Gt(Zr.get(m)||null,r,s,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,gn.set(m,Gt(gn.get(m)||null,r,s,a,c,d)),!0}return!1}function ql(r){var s=ns(r.target);if(s!==null){var a=kn(s);if(a!==null){if(s=a.tag,s===13){if(s=Gi(a),s!==null){r.blockedOn=s,zl(r.priority,function(){jl(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Sr(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=Ws(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var c=new a.constructor(a.type,a);$i=c,a.target.dispatchEvent(c),$i=null}else return s=Pa(a),s!==null&&Hs(s),r.blockedOn=a,!1;s.shift()}return!0}function Yi(r,s,a){Sr(r)&&a.delete(s)}function Hl(){fa=!1,Rt!==null&&Sr(Rt)&&(Rt=null),Dn!==null&&Sr(Dn)&&(Dn=null),On!==null&&Sr(On)&&(On=null),Zr.forEach(Yi),gn.forEach(Yi)}function Vn(r,s){r.blockedOn===s&&(r.blockedOn=null,fa||(fa=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Hl)))}function xn(r){function s(d){return Vn(d,r)}if(0<Jn.length){Vn(Jn[0],r);for(var a=1;a<Jn.length;a++){var c=Jn[a];c.blockedOn===r&&(c.blockedOn=null)}}for(Rt!==null&&Vn(Rt,r),Dn!==null&&Vn(Dn,r),On!==null&&Vn(On,r),Zr.forEach(s),gn.forEach(s),a=0;a<Yn.length;a++)c=Yn[a],c.blockedOn===r&&(c.blockedOn=null);for(;0<Yn.length&&(a=Yn[0],a.blockedOn===null);)ql(a),a.blockedOn===null&&Yn.shift()}var Ar=ue.ReactCurrentBatchConfig,ei=!0;function Xe(r,s,a,c){var d=Ne,m=Ar.transition;Ar.transition=null;try{Ne=1,pa(r,s,a,c)}finally{Ne=d,Ar.transition=m}}function uh(r,s,a,c){var d=Ne,m=Ar.transition;Ar.transition=null;try{Ne=4,pa(r,s,a,c)}finally{Ne=d,Ar.transition=m}}function pa(r,s,a,c){if(ei){var d=Ws(r,s,a,c);if(d===null)Eh(r,s,c,Zi,a),$l(r,c);else if(lh(d,r,s,a,c))c.stopPropagation();else if($l(r,c),s&4&&-1<ah.indexOf(r)){for(;d!==null;){var m=Pa(d);if(m!==null&&Ul(m),m=Ws(r,s,a,c),m===null&&Eh(r,s,c,Zi,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Eh(r,s,c,null,a)}}var Zi=null;function Ws(r,s,a,c){if(Zi=null,r=Ls(c),r=ns(r),r!==null)if(s=kn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=Gi(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return Zi=r,null}function ma(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xl()){case Ki:return 1;case Gr:return 4;case mn:case ha:return 16;case Ll:return 536870912;default:return 16}default:return 16}}var an=null,Gs=null,Kt=null;function ga(){if(Kt)return Kt;var r,s=Gs,a=s.length,c,d="value"in an?an.value:an.textContent,m=d.length;for(r=0;r<a&&s[r]===d[r];r++);var v=a-r;for(c=1;c<=v&&s[a-c]===d[m-c];c++);return Kt=d.slice(r,1<c?1-c:void 0)}function Ks(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Zn(){return!0}function ya(){return!1}function Ct(r){function s(a,c,d,m,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var S in r)r.hasOwnProperty(S)&&(a=r[S],this[S]=a?a(m):m[S]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Zn:ya,this.isPropagationStopped=ya,this}return se(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Zn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Zn)},persist:function(){},isPersistent:Zn}),s}var Ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qs=Ct(Ln),er=se({},Ln,{view:0,detail:0}),ch=Ct(er),Xs,Rr,ti,es=se({},er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tr,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ti&&(ti&&r.type==="mousemove"?(Xs=r.screenX-ti.screenX,Rr=r.screenY-ti.screenY):Rr=Xs=0,ti=r),Xs)},movementY:function(r){return"movementY"in r?r.movementY:Rr}}),Js=Ct(es),_a=se({},es,{dataTransfer:0}),Wl=Ct(_a),Ys=se({},er,{relatedTarget:0}),Zs=Ct(Ys),Gl=se({},Ln,{animationName:0,elapsedTime:0,pseudoElement:0}),Cr=Ct(Gl),Kl=se({},Ln,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Ql=Ct(Kl),Xl=se({},Ln,{data:0}),va=Ct(Xl),eo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yl(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=Jl[r])?!!s[r]:!1}function tr(){return Yl}var u=se({},er,{key:function(r){if(r.key){var s=eo[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Ks(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?qt[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tr,charCode:function(r){return r.type==="keypress"?Ks(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Ks(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),p=Ct(u),y=se({},es,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=Ct(y),L=se({},er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tr}),B=Ct(L),J=se({},Ln,{propertyName:0,elapsedTime:0,pseudoElement:0}),je=Ct(J),mt=se({},es,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Oe=Ct(mt),wt=[9,13,27,32],at=f&&"CompositionEvent"in window,yn=null;f&&"documentMode"in document&&(yn=document.documentMode);var ln=f&&"TextEvent"in window&&!yn,ts=f&&(!at||yn&&8<yn&&11>=yn),to=" ",Np=!1;function Dp(r,s){switch(r){case"keyup":return wt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Op(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var no=!1;function Lw(r,s){switch(r){case"compositionend":return Op(s);case"keypress":return s.which!==32?null:(Np=!0,to);case"textInput":return r=s.data,r===to&&Np?null:r;default:return null}}function Mw(r,s){if(no)return r==="compositionend"||!at&&Dp(r,s)?(r=ga(),Kt=Gs=an=null,no=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return ts&&s.locale!=="ko"?null:s.data;default:return null}}var bw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vp(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!bw[r.type]:s==="textarea"}function xp(r,s,a,c){Xn(c),s=ru(s,"onChange"),0<s.length&&(a=new Qs("onChange","change",null,a,c),r.push({event:a,listeners:s}))}var Ea=null,wa=null;function Fw(r){Yp(r,0)}function Zl(r){var s=ao(r);if(Ns(s))return r}function Uw(r,s){if(r==="change")return s}var Lp=!1;if(f){var hh;if(f){var dh="oninput"in document;if(!dh){var Mp=document.createElement("div");Mp.setAttribute("oninput","return;"),dh=typeof Mp.oninput=="function"}hh=dh}else hh=!1;Lp=hh&&(!document.documentMode||9<document.documentMode)}function bp(){Ea&&(Ea.detachEvent("onpropertychange",Fp),wa=Ea=null)}function Fp(r){if(r.propertyName==="value"&&Zl(wa)){var s=[];xp(s,wa,r,Ls(r)),aa(Fw,s)}}function jw(r,s,a){r==="focusin"?(bp(),Ea=s,wa=a,Ea.attachEvent("onpropertychange",Fp)):r==="focusout"&&bp()}function Bw(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Zl(wa)}function zw(r,s){if(r==="click")return Zl(s)}function $w(r,s){if(r==="input"||r==="change")return Zl(s)}function qw(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Mn=typeof Object.is=="function"?Object.is:qw;function Ta(r,s){if(Mn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(s,d)||!Mn(r[d],s[d]))return!1}return!0}function Up(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function jp(r,s){var a=Up(r);r=0;for(var c;a;){if(a.nodeType===3){if(c=r+a.textContent.length,r<=s&&c>=s)return{node:a,offset:s-r};r=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Up(a)}}function Bp(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Bp(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function zp(){for(var r=window,s=Hr();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=Hr(r.document)}return s}function fh(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function Hw(r){var s=zp(),a=r.focusedElem,c=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&Bp(a.ownerDocument.documentElement,a)){if(c!==null&&fh(a)){if(s=c.start,r=c.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!r.extend&&m>c&&(d=c,c=m,m=d),d=jp(a,m);var v=jp(a,c);d&&v&&(r.rangeCount!==1||r.anchorNode!==d.node||r.anchorOffset!==d.offset||r.focusNode!==v.node||r.focusOffset!==v.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),r.removeAllRanges(),m>c?(r.addRange(s),r.extend(v.node,v.offset)):(s.setEnd(v.node,v.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var Ww=f&&"documentMode"in document&&11>=document.documentMode,ro=null,ph=null,Ia=null,mh=!1;function $p(r,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;mh||ro==null||ro!==Hr(c)||(c=ro,"selectionStart"in c&&fh(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ia&&Ta(Ia,c)||(Ia=c,c=ru(ph,"onSelect"),0<c.length&&(s=new Qs("onSelect","select",null,s,a),r.push({event:s,listeners:c}),s.target=ro)))}function eu(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var io={animationend:eu("Animation","AnimationEnd"),animationiteration:eu("Animation","AnimationIteration"),animationstart:eu("Animation","AnimationStart"),transitionend:eu("Transition","TransitionEnd")},gh={},qp={};f&&(qp=document.createElement("div").style,"AnimationEvent"in window||(delete io.animationend.animation,delete io.animationiteration.animation,delete io.animationstart.animation),"TransitionEvent"in window||delete io.transitionend.transition);function tu(r){if(gh[r])return gh[r];if(!io[r])return r;var s=io[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in qp)return gh[r]=s[a];return r}var Hp=tu("animationend"),Wp=tu("animationiteration"),Gp=tu("animationstart"),Kp=tu("transitionend"),Qp=new Map,Xp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ni(r,s){Qp.set(r,s),l(s,[r])}for(var yh=0;yh<Xp.length;yh++){var _h=Xp[yh],Gw=_h.toLowerCase(),Kw=_h[0].toUpperCase()+_h.slice(1);ni(Gw,"on"+Kw)}ni(Hp,"onAnimationEnd"),ni(Wp,"onAnimationIteration"),ni(Gp,"onAnimationStart"),ni("dblclick","onDoubleClick"),ni("focusin","onFocus"),ni("focusout","onBlur"),ni(Kp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sa));function Jp(r,s,a){var c=r.type||"unknown-event";r.currentTarget=a,Dl(c,s,void 0,r),r.currentTarget=null}function Yp(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var c=r[a],d=c.event;c=c.listeners;e:{var m=void 0;if(s)for(var v=c.length-1;0<=v;v--){var S=c[v],P=S.instance,j=S.currentTarget;if(S=S.listener,P!==m&&d.isPropagationStopped())break e;Jp(d,S,j),m=P}else for(v=0;v<c.length;v++){if(S=c[v],P=S.instance,j=S.currentTarget,S=S.listener,P!==m&&d.isPropagationStopped())break e;Jp(d,S,j),m=P}}}if(Pn)throw r=la,Pn=!1,la=null,r}function Ge(r,s){var a=s[Rh];a===void 0&&(a=s[Rh]=new Set);var c=r+"__bubble";a.has(c)||(Zp(s,r,2,!1),a.add(c))}function vh(r,s,a){var c=0;s&&(c|=4),Zp(a,r,c,s)}var nu="_reactListening"+Math.random().toString(36).slice(2);function Aa(r){if(!r[nu]){r[nu]=!0,i.forEach(function(a){a!=="selectionchange"&&(Qw.has(a)||vh(a,!1,r),vh(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[nu]||(s[nu]=!0,vh("selectionchange",!1,s))}}function Zp(r,s,a,c){switch(ma(s)){case 1:var d=Xe;break;case 4:d=uh;break;default:d=pa}a=d.bind(null,s,a,r),d=void 0,!Fs||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?r.addEventListener(s,a,{capture:!0,passive:d}):r.addEventListener(s,a,!0):d!==void 0?r.addEventListener(s,a,{passive:d}):r.addEventListener(s,a,!1)}function Eh(r,s,a,c,d){var m=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var S=c.stateNode.containerInfo;if(S===d||S.nodeType===8&&S.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var P=v.tag;if((P===3||P===4)&&(P=v.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;v=v.return}for(;S!==null;){if(v=ns(S),v===null)return;if(P=v.tag,P===5||P===6){c=m=v;continue e}S=S.parentNode}}c=c.return}aa(function(){var j=m,K=Ls(a),Q=[];e:{var G=Qp.get(r);if(G!==void 0){var ne=Qs,le=r;switch(r){case"keypress":if(Ks(a)===0)break e;case"keydown":case"keyup":ne=p;break;case"focusin":le="focus",ne=Zs;break;case"focusout":le="blur",ne=Zs;break;case"beforeblur":case"afterblur":ne=Zs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=Js;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=Wl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=B;break;case Hp:case Wp:case Gp:ne=Cr;break;case Kp:ne=je;break;case"scroll":ne=ch;break;case"wheel":ne=Oe;break;case"copy":case"cut":case"paste":ne=Ql;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=w}var ce=(s&4)!==0,it=!ce&&r==="scroll",M=ce?G!==null?G+"Capture":null:G;ce=[];for(var N=j,F;N!==null;){F=N;var X=F.stateNode;if(F.tag===5&&X!==null&&(F=X,M!==null&&(X=rt(N,M),X!=null&&ce.push(Ra(N,X,F)))),it)break;N=N.return}0<ce.length&&(G=new ne(G,le,null,a,K),Q.push({event:G,listeners:ce}))}}if((s&7)===0){e:{if(G=r==="mouseover"||r==="pointerover",ne=r==="mouseout"||r==="pointerout",G&&a!==$i&&(le=a.relatedTarget||a.fromElement)&&(ns(le)||le[Pr]))break e;if((ne||G)&&(G=K.window===K?K:(G=K.ownerDocument)?G.defaultView||G.parentWindow:window,ne?(le=a.relatedTarget||a.toElement,ne=j,le=le?ns(le):null,le!==null&&(it=kn(le),le!==it||le.tag!==5&&le.tag!==6)&&(le=null)):(ne=null,le=j),ne!==le)){if(ce=Js,X="onMouseLeave",M="onMouseEnter",N="mouse",(r==="pointerout"||r==="pointerover")&&(ce=w,X="onPointerLeave",M="onPointerEnter",N="pointer"),it=ne==null?G:ao(ne),F=le==null?G:ao(le),G=new ce(X,N+"leave",ne,a,K),G.target=it,G.relatedTarget=F,X=null,ns(K)===j&&(ce=new ce(M,N+"enter",le,a,K),ce.target=F,ce.relatedTarget=it,X=ce),it=X,ne&&le)t:{for(ce=ne,M=le,N=0,F=ce;F;F=so(F))N++;for(F=0,X=M;X;X=so(X))F++;for(;0<N-F;)ce=so(ce),N--;for(;0<F-N;)M=so(M),F--;for(;N--;){if(ce===M||M!==null&&ce===M.alternate)break t;ce=so(ce),M=so(M)}ce=null}else ce=null;ne!==null&&em(Q,G,ne,ce,!1),le!==null&&it!==null&&em(Q,it,le,ce,!0)}}e:{if(G=j?ao(j):window,ne=G.nodeName&&G.nodeName.toLowerCase(),ne==="select"||ne==="input"&&G.type==="file")var he=Uw;else if(Vp(G))if(Lp)he=$w;else{he=Bw;var me=jw}else(ne=G.nodeName)&&ne.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(he=zw);if(he&&(he=he(r,j))){xp(Q,he,a,K);break e}me&&me(r,G,j),r==="focusout"&&(me=G._wrapperState)&&me.controlled&&G.type==="number"&&Os(G,"number",G.value)}switch(me=j?ao(j):window,r){case"focusin":(Vp(me)||me.contentEditable==="true")&&(ro=me,ph=j,Ia=null);break;case"focusout":Ia=ph=ro=null;break;case"mousedown":mh=!0;break;case"contextmenu":case"mouseup":case"dragend":mh=!1,$p(Q,a,K);break;case"selectionchange":if(Ww)break;case"keydown":case"keyup":$p(Q,a,K)}var ge;if(at)e:{switch(r){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else no?Dp(r,a)&&(_e="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(ts&&a.locale!=="ko"&&(no||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&no&&(ge=ga()):(an=K,Gs="value"in an?an.value:an.textContent,no=!0)),me=ru(j,_e),0<me.length&&(_e=new va(_e,r,null,a,K),Q.push({event:_e,listeners:me}),ge?_e.data=ge:(ge=Op(a),ge!==null&&(_e.data=ge)))),(ge=ln?Lw(r,a):Mw(r,a))&&(j=ru(j,"onBeforeInput"),0<j.length&&(K=new va("onBeforeInput","beforeinput",null,a,K),Q.push({event:K,listeners:j}),K.data=ge))}Yp(Q,s)})}function Ra(r,s,a){return{instance:r,listener:s,currentTarget:a}}function ru(r,s){for(var a=s+"Capture",c=[];r!==null;){var d=r,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=rt(r,a),m!=null&&c.unshift(Ra(r,m,d)),m=rt(r,s),m!=null&&c.push(Ra(r,m,d))),r=r.return}return c}function so(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function em(r,s,a,c,d){for(var m=s._reactName,v=[];a!==null&&a!==c;){var S=a,P=S.alternate,j=S.stateNode;if(P!==null&&P===c)break;S.tag===5&&j!==null&&(S=j,d?(P=rt(a,m),P!=null&&v.unshift(Ra(a,P,S))):d||(P=rt(a,m),P!=null&&v.push(Ra(a,P,S)))),a=a.return}v.length!==0&&r.push({event:s,listeners:v})}var Xw=/\r\n?/g,Jw=/\u0000|\uFFFD/g;function tm(r){return(typeof r=="string"?r:""+r).replace(Xw,`
`).replace(Jw,"")}function iu(r,s,a){if(s=tm(s),tm(r)!==s&&a)throw Error(t(425))}function su(){}var wh=null,Th=null;function Ih(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Sh=typeof setTimeout=="function"?setTimeout:void 0,Yw=typeof clearTimeout=="function"?clearTimeout:void 0,nm=typeof Promise=="function"?Promise:void 0,Zw=typeof queueMicrotask=="function"?queueMicrotask:typeof nm<"u"?function(r){return nm.resolve(null).then(r).catch(e0)}:Sh;function e0(r){setTimeout(function(){throw r})}function Ah(r,s){var a=s,c=0;do{var d=a.nextSibling;if(r.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){r.removeChild(d),xn(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);xn(s)}function ri(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function rm(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var oo=Math.random().toString(36).slice(2),nr="__reactFiber$"+oo,Ca="__reactProps$"+oo,Pr="__reactContainer$"+oo,Rh="__reactEvents$"+oo,t0="__reactListeners$"+oo,n0="__reactHandles$"+oo;function ns(r){var s=r[nr];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Pr]||a[nr]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=rm(r);r!==null;){if(a=r[nr])return a;r=rm(r)}return s}r=a,a=r.parentNode}return null}function Pa(r){return r=r[nr]||r[Pr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function ao(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function ou(r){return r[Ca]||null}var Ch=[],lo=-1;function ii(r){return{current:r}}function Ke(r){0>lo||(r.current=Ch[lo],Ch[lo]=null,lo--)}function He(r,s){lo++,Ch[lo]=r.current,r.current=s}var si={},Lt=ii(si),Qt=ii(!1),rs=si;function uo(r,s){var a=r.type.contextTypes;if(!a)return si;var c=r.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=s[m];return c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=d),d}function Xt(r){return r=r.childContextTypes,r!=null}function au(){Ke(Qt),Ke(Lt)}function im(r,s,a){if(Lt.current!==si)throw Error(t(168));He(Lt,s),He(Qt,a)}function sm(r,s,a){var c=r.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in s))throw Error(t(108,be(r)||"Unknown",d));return se({},a,c)}function lu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||si,rs=Lt.current,He(Lt,r),He(Qt,Qt.current),!0}function om(r,s,a){var c=r.stateNode;if(!c)throw Error(t(169));a?(r=sm(r,s,rs),c.__reactInternalMemoizedMergedChildContext=r,Ke(Qt),Ke(Lt),He(Lt,r)):Ke(Qt),He(Qt,a)}var kr=null,uu=!1,Ph=!1;function am(r){kr===null?kr=[r]:kr.push(r)}function r0(r){uu=!0,am(r)}function oi(){if(!Ph&&kr!==null){Ph=!0;var r=0,s=Ne;try{var a=kr;for(Ne=1;r<a.length;r++){var c=a[r];do c=c(!0);while(c!==null)}kr=null,uu=!1}catch(d){throw kr!==null&&(kr=kr.slice(r+1)),zs(Ki,oi),d}finally{Ne=s,Ph=!1}}return null}var co=[],ho=0,cu=null,hu=0,_n=[],vn=0,is=null,Nr=1,Dr="";function ss(r,s){co[ho++]=hu,co[ho++]=cu,cu=r,hu=s}function lm(r,s,a){_n[vn++]=Nr,_n[vn++]=Dr,_n[vn++]=is,is=r;var c=Nr;r=Dr;var d=32-$t(c)-1;c&=~(1<<d),a+=1;var m=32-$t(s)+d;if(30<m){var v=d-d%5;m=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Nr=1<<32-$t(s)+d|a<<d|c,Dr=m+r}else Nr=1<<m|a<<d|c,Dr=r}function kh(r){r.return!==null&&(ss(r,1),lm(r,1,0))}function Nh(r){for(;r===cu;)cu=co[--ho],co[ho]=null,hu=co[--ho],co[ho]=null;for(;r===is;)is=_n[--vn],_n[vn]=null,Dr=_n[--vn],_n[vn]=null,Nr=_n[--vn],_n[vn]=null}var un=null,cn=null,Je=!1,bn=null;function um(r,s){var a=In(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function cm(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,un=r,cn=ri(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,un=r,cn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=is!==null?{id:Nr,overflow:Dr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=In(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,un=r,cn=null,!0):!1;default:return!1}}function Dh(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Oh(r){if(Je){var s=cn;if(s){var a=s;if(!cm(r,s)){if(Dh(r))throw Error(t(418));s=ri(a.nextSibling);var c=un;s&&cm(r,s)?um(c,a):(r.flags=r.flags&-4097|2,Je=!1,un=r)}}else{if(Dh(r))throw Error(t(418));r.flags=r.flags&-4097|2,Je=!1,un=r}}}function hm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;un=r}function du(r){if(r!==un)return!1;if(!Je)return hm(r),Je=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Ih(r.type,r.memoizedProps)),s&&(s=cn)){if(Dh(r))throw dm(),Error(t(418));for(;s;)um(r,s),s=ri(s.nextSibling)}if(hm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){cn=ri(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}cn=null}}else cn=un?ri(r.stateNode.nextSibling):null;return!0}function dm(){for(var r=cn;r;)r=ri(r.nextSibling)}function fo(){cn=un=null,Je=!1}function Vh(r){bn===null?bn=[r]:bn.push(r)}var i0=ue.ReactCurrentBatchConfig;function ka(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,r));var d=c,m=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===m?s.ref:(s=function(v){var S=d.refs;v===null?delete S[m]:S[m]=v},s._stringRef=m,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function fu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function fm(r){var s=r._init;return s(r._payload)}function pm(r){function s(M,N){if(r){var F=M.deletions;F===null?(M.deletions=[N],M.flags|=16):F.push(N)}}function a(M,N){if(!r)return null;for(;N!==null;)s(M,N),N=N.sibling;return null}function c(M,N){for(M=new Map;N!==null;)N.key!==null?M.set(N.key,N):M.set(N.index,N),N=N.sibling;return M}function d(M,N){return M=pi(M,N),M.index=0,M.sibling=null,M}function m(M,N,F){return M.index=F,r?(F=M.alternate,F!==null?(F=F.index,F<N?(M.flags|=2,N):F):(M.flags|=2,N)):(M.flags|=1048576,N)}function v(M){return r&&M.alternate===null&&(M.flags|=2),M}function S(M,N,F,X){return N===null||N.tag!==6?(N=Sd(F,M.mode,X),N.return=M,N):(N=d(N,F),N.return=M,N)}function P(M,N,F,X){var he=F.type;return he===D?K(M,N,F.props.children,X,F.key):N!==null&&(N.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===xt&&fm(he)===N.type)?(X=d(N,F.props),X.ref=ka(M,N,F),X.return=M,X):(X=bu(F.type,F.key,F.props,null,M.mode,X),X.ref=ka(M,N,F),X.return=M,X)}function j(M,N,F,X){return N===null||N.tag!==4||N.stateNode.containerInfo!==F.containerInfo||N.stateNode.implementation!==F.implementation?(N=Ad(F,M.mode,X),N.return=M,N):(N=d(N,F.children||[]),N.return=M,N)}function K(M,N,F,X,he){return N===null||N.tag!==7?(N=fs(F,M.mode,X,he),N.return=M,N):(N=d(N,F),N.return=M,N)}function Q(M,N,F){if(typeof N=="string"&&N!==""||typeof N=="number")return N=Sd(""+N,M.mode,F),N.return=M,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Ce:return F=bu(N.type,N.key,N.props,null,M.mode,F),F.ref=ka(M,null,N),F.return=M,F;case Te:return N=Ad(N,M.mode,F),N.return=M,N;case xt:var X=N._init;return Q(M,X(N._payload),F)}if(vr(N)||pe(N))return N=fs(N,M.mode,F,null),N.return=M,N;fu(M,N)}return null}function G(M,N,F,X){var he=N!==null?N.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return he!==null?null:S(M,N,""+F,X);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case Ce:return F.key===he?P(M,N,F,X):null;case Te:return F.key===he?j(M,N,F,X):null;case xt:return he=F._init,G(M,N,he(F._payload),X)}if(vr(F)||pe(F))return he!==null?null:K(M,N,F,X,null);fu(M,F)}return null}function ne(M,N,F,X,he){if(typeof X=="string"&&X!==""||typeof X=="number")return M=M.get(F)||null,S(N,M,""+X,he);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case Ce:return M=M.get(X.key===null?F:X.key)||null,P(N,M,X,he);case Te:return M=M.get(X.key===null?F:X.key)||null,j(N,M,X,he);case xt:var me=X._init;return ne(M,N,F,me(X._payload),he)}if(vr(X)||pe(X))return M=M.get(F)||null,K(N,M,X,he,null);fu(N,X)}return null}function le(M,N,F,X){for(var he=null,me=null,ge=N,_e=N=0,St=null;ge!==null&&_e<F.length;_e++){ge.index>_e?(St=ge,ge=null):St=ge.sibling;var Le=G(M,ge,F[_e],X);if(Le===null){ge===null&&(ge=St);break}r&&ge&&Le.alternate===null&&s(M,ge),N=m(Le,N,_e),me===null?he=Le:me.sibling=Le,me=Le,ge=St}if(_e===F.length)return a(M,ge),Je&&ss(M,_e),he;if(ge===null){for(;_e<F.length;_e++)ge=Q(M,F[_e],X),ge!==null&&(N=m(ge,N,_e),me===null?he=ge:me.sibling=ge,me=ge);return Je&&ss(M,_e),he}for(ge=c(M,ge);_e<F.length;_e++)St=ne(ge,M,_e,F[_e],X),St!==null&&(r&&St.alternate!==null&&ge.delete(St.key===null?_e:St.key),N=m(St,N,_e),me===null?he=St:me.sibling=St,me=St);return r&&ge.forEach(function(mi){return s(M,mi)}),Je&&ss(M,_e),he}function ce(M,N,F,X){var he=pe(F);if(typeof he!="function")throw Error(t(150));if(F=he.call(F),F==null)throw Error(t(151));for(var me=he=null,ge=N,_e=N=0,St=null,Le=F.next();ge!==null&&!Le.done;_e++,Le=F.next()){ge.index>_e?(St=ge,ge=null):St=ge.sibling;var mi=G(M,ge,Le.value,X);if(mi===null){ge===null&&(ge=St);break}r&&ge&&mi.alternate===null&&s(M,ge),N=m(mi,N,_e),me===null?he=mi:me.sibling=mi,me=mi,ge=St}if(Le.done)return a(M,ge),Je&&ss(M,_e),he;if(ge===null){for(;!Le.done;_e++,Le=F.next())Le=Q(M,Le.value,X),Le!==null&&(N=m(Le,N,_e),me===null?he=Le:me.sibling=Le,me=Le);return Je&&ss(M,_e),he}for(ge=c(M,ge);!Le.done;_e++,Le=F.next())Le=ne(ge,M,_e,Le.value,X),Le!==null&&(r&&Le.alternate!==null&&ge.delete(Le.key===null?_e:Le.key),N=m(Le,N,_e),me===null?he=Le:me.sibling=Le,me=Le);return r&&ge.forEach(function(b0){return s(M,b0)}),Je&&ss(M,_e),he}function it(M,N,F,X){if(typeof F=="object"&&F!==null&&F.type===D&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case Ce:e:{for(var he=F.key,me=N;me!==null;){if(me.key===he){if(he=F.type,he===D){if(me.tag===7){a(M,me.sibling),N=d(me,F.props.children),N.return=M,M=N;break e}}else if(me.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===xt&&fm(he)===me.type){a(M,me.sibling),N=d(me,F.props),N.ref=ka(M,me,F),N.return=M,M=N;break e}a(M,me);break}else s(M,me);me=me.sibling}F.type===D?(N=fs(F.props.children,M.mode,X,F.key),N.return=M,M=N):(X=bu(F.type,F.key,F.props,null,M.mode,X),X.ref=ka(M,N,F),X.return=M,M=X)}return v(M);case Te:e:{for(me=F.key;N!==null;){if(N.key===me)if(N.tag===4&&N.stateNode.containerInfo===F.containerInfo&&N.stateNode.implementation===F.implementation){a(M,N.sibling),N=d(N,F.children||[]),N.return=M,M=N;break e}else{a(M,N);break}else s(M,N);N=N.sibling}N=Ad(F,M.mode,X),N.return=M,M=N}return v(M);case xt:return me=F._init,it(M,N,me(F._payload),X)}if(vr(F))return le(M,N,F,X);if(pe(F))return ce(M,N,F,X);fu(M,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,N!==null&&N.tag===6?(a(M,N.sibling),N=d(N,F),N.return=M,M=N):(a(M,N),N=Sd(F,M.mode,X),N.return=M,M=N),v(M)):a(M,N)}return it}var po=pm(!0),mm=pm(!1),pu=ii(null),mu=null,mo=null,xh=null;function Lh(){xh=mo=mu=null}function Mh(r){var s=pu.current;Ke(pu),r._currentValue=s}function bh(r,s,a){for(;r!==null;){var c=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),r===a)break;r=r.return}}function go(r,s){mu=r,xh=mo=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(Jt=!0),r.firstContext=null)}function En(r){var s=r._currentValue;if(xh!==r)if(r={context:r,memoizedValue:s,next:null},mo===null){if(mu===null)throw Error(t(308));mo=r,mu.dependencies={lanes:0,firstContext:r}}else mo=mo.next=r;return s}var os=null;function Fh(r){os===null?os=[r]:os.push(r)}function gm(r,s,a,c){var d=s.interleaved;return d===null?(a.next=a,Fh(s)):(a.next=d.next,d.next=a),s.interleaved=a,Or(r,c)}function Or(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var ai=!1;function Uh(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ym(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Vr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function li(r,s,a){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,(xe&2)!==0){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,Or(r,a)}return d=c.interleaved,d===null?(s.next=s,Fh(c)):(s.next=d.next,d.next=s),c.interleaved=s,Or(r,a)}function gu(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Jr(r,a)}}function _m(r,s){var a=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=v:m=m.next=v,a=a.next}while(a!==null);m===null?d=m=s:m=m.next=s}else d=m=s;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function yu(r,s,a,c){var d=r.updateQueue;ai=!1;var m=d.firstBaseUpdate,v=d.lastBaseUpdate,S=d.shared.pending;if(S!==null){d.shared.pending=null;var P=S,j=P.next;P.next=null,v===null?m=j:v.next=j,v=P;var K=r.alternate;K!==null&&(K=K.updateQueue,S=K.lastBaseUpdate,S!==v&&(S===null?K.firstBaseUpdate=j:S.next=j,K.lastBaseUpdate=P))}if(m!==null){var Q=d.baseState;v=0,K=j=P=null,S=m;do{var G=S.lane,ne=S.eventTime;if((c&G)===G){K!==null&&(K=K.next={eventTime:ne,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var le=r,ce=S;switch(G=s,ne=a,ce.tag){case 1:if(le=ce.payload,typeof le=="function"){Q=le.call(ne,Q,G);break e}Q=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=ce.payload,G=typeof le=="function"?le.call(ne,Q,G):le,G==null)break e;Q=se({},Q,G);break e;case 2:ai=!0}}S.callback!==null&&S.lane!==0&&(r.flags|=64,G=d.effects,G===null?d.effects=[S]:G.push(S))}else ne={eventTime:ne,lane:G,tag:S.tag,payload:S.payload,callback:S.callback,next:null},K===null?(j=K=ne,P=Q):K=K.next=ne,v|=G;if(S=S.next,S===null){if(S=d.shared.pending,S===null)break;G=S,S=G.next,G.next=null,d.lastBaseUpdate=G,d.shared.pending=null}}while(!0);if(K===null&&(P=Q),d.baseState=P,d.firstBaseUpdate=j,d.lastBaseUpdate=K,s=d.shared.interleaved,s!==null){d=s;do v|=d.lane,d=d.next;while(d!==s)}else m===null&&(d.shared.lanes=0);us|=v,r.lanes=v,r.memoizedState=Q}}function vm(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var c=r[s],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Na={},rr=ii(Na),Da=ii(Na),Oa=ii(Na);function as(r){if(r===Na)throw Error(t(174));return r}function jh(r,s){switch(He(Oa,s),He(Da,r),He(rr,Na),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:pt(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=pt(s,r)}Ke(rr),He(rr,s)}function yo(){Ke(rr),Ke(Da),Ke(Oa)}function Em(r){as(Oa.current);var s=as(rr.current),a=pt(s,r.type);s!==a&&(He(Da,r),He(rr,a))}function Bh(r){Da.current===r&&(Ke(rr),Ke(Da))}var Ye=ii(0);function _u(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var zh=[];function $h(){for(var r=0;r<zh.length;r++)zh[r]._workInProgressVersionPrimary=null;zh.length=0}var vu=ue.ReactCurrentDispatcher,qh=ue.ReactCurrentBatchConfig,ls=0,Ze=null,gt=null,Tt=null,Eu=!1,Va=!1,xa=0,s0=0;function Mt(){throw Error(t(321))}function Hh(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!Mn(r[a],s[a]))return!1;return!0}function Wh(r,s,a,c,d,m){if(ls=m,Ze=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,vu.current=r===null||r.memoizedState===null?u0:c0,r=a(c,d),Va){m=0;do{if(Va=!1,xa=0,25<=m)throw Error(t(301));m+=1,Tt=gt=null,s.updateQueue=null,vu.current=h0,r=a(c,d)}while(Va)}if(vu.current=Iu,s=gt!==null&&gt.next!==null,ls=0,Tt=gt=Ze=null,Eu=!1,s)throw Error(t(300));return r}function Gh(){var r=xa!==0;return xa=0,r}function ir(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?Ze.memoizedState=Tt=r:Tt=Tt.next=r,Tt}function wn(){if(gt===null){var r=Ze.alternate;r=r!==null?r.memoizedState:null}else r=gt.next;var s=Tt===null?Ze.memoizedState:Tt.next;if(s!==null)Tt=s,gt=r;else{if(r===null)throw Error(t(310));gt=r,r={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},Tt===null?Ze.memoizedState=Tt=r:Tt=Tt.next=r}return Tt}function La(r,s){return typeof s=="function"?s(r):s}function Kh(r){var s=wn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=gt,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var v=d.next;d.next=m.next,m.next=v}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var S=v=null,P=null,j=m;do{var K=j.lane;if((ls&K)===K)P!==null&&(P=P.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),c=j.hasEagerState?j.eagerState:r(c,j.action);else{var Q={lane:K,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};P===null?(S=P=Q,v=c):P=P.next=Q,Ze.lanes|=K,us|=K}j=j.next}while(j!==null&&j!==m);P===null?v=c:P.next=S,Mn(c,s.memoizedState)||(Jt=!0),s.memoizedState=c,s.baseState=v,s.baseQueue=P,a.lastRenderedState=c}if(r=a.interleaved,r!==null){d=r;do m=d.lane,Ze.lanes|=m,us|=m,d=d.next;while(d!==r)}else d===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Qh(r){var s=wn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=a.dispatch,d=a.pending,m=s.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do m=r(m,v.action),v=v.next;while(v!==d);Mn(m,s.memoizedState)||(Jt=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),a.lastRenderedState=m}return[m,c]}function wm(){}function Tm(r,s){var a=Ze,c=wn(),d=s(),m=!Mn(c.memoizedState,d);if(m&&(c.memoizedState=d,Jt=!0),c=c.queue,Xh(Am.bind(null,a,c,r),[r]),c.getSnapshot!==s||m||Tt!==null&&Tt.memoizedState.tag&1){if(a.flags|=2048,Ma(9,Sm.bind(null,a,c,d,s),void 0,null),It===null)throw Error(t(349));(ls&30)!==0||Im(a,s,d)}return d}function Im(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=Ze.updateQueue,s===null?(s={lastEffect:null,stores:null},Ze.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function Sm(r,s,a,c){s.value=a,s.getSnapshot=c,Rm(s)&&Cm(r)}function Am(r,s,a){return a(function(){Rm(s)&&Cm(r)})}function Rm(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!Mn(r,a)}catch{return!0}}function Cm(r){var s=Or(r,1);s!==null&&Bn(s,r,1,-1)}function Pm(r){var s=ir();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:r},s.queue=r,r=r.dispatch=l0.bind(null,Ze,r),[s.memoizedState,r]}function Ma(r,s,a,c){return r={tag:r,create:s,destroy:a,deps:c,next:null},s=Ze.updateQueue,s===null?(s={lastEffect:null,stores:null},Ze.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(c=a.next,a.next=r,r.next=c,s.lastEffect=r)),r}function km(){return wn().memoizedState}function wu(r,s,a,c){var d=ir();Ze.flags|=r,d.memoizedState=Ma(1|s,a,void 0,c===void 0?null:c)}function Tu(r,s,a,c){var d=wn();c=c===void 0?null:c;var m=void 0;if(gt!==null){var v=gt.memoizedState;if(m=v.destroy,c!==null&&Hh(c,v.deps)){d.memoizedState=Ma(s,a,m,c);return}}Ze.flags|=r,d.memoizedState=Ma(1|s,a,m,c)}function Nm(r,s){return wu(8390656,8,r,s)}function Xh(r,s){return Tu(2048,8,r,s)}function Dm(r,s){return Tu(4,2,r,s)}function Om(r,s){return Tu(4,4,r,s)}function Vm(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function xm(r,s,a){return a=a!=null?a.concat([r]):null,Tu(4,4,Vm.bind(null,s,r),a)}function Jh(){}function Lm(r,s){var a=wn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Hh(s,c[1])?c[0]:(a.memoizedState=[r,s],r)}function Mm(r,s){var a=wn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Hh(s,c[1])?c[0]:(r=r(),a.memoizedState=[r,s],r)}function bm(r,s,a){return(ls&21)===0?(r.baseState&&(r.baseState=!1,Jt=!0),r.memoizedState=a):(Mn(a,s)||(a=Ji(),Ze.lanes|=a,us|=a,r.baseState=!0),s)}function o0(r,s){var a=Ne;Ne=a!==0&&4>a?a:4,r(!0);var c=qh.transition;qh.transition={};try{r(!1),s()}finally{Ne=a,qh.transition=c}}function Fm(){return wn().memoizedState}function a0(r,s,a){var c=di(r);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Um(r))jm(s,a);else if(a=gm(r,s,a,c),a!==null){var d=Wt();Bn(a,r,c,d),Bm(a,s,c)}}function l0(r,s,a){var c=di(r),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Um(r))jm(s,d);else{var m=r.alternate;if(r.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var v=s.lastRenderedState,S=m(v,a);if(d.hasEagerState=!0,d.eagerState=S,Mn(S,v)){var P=s.interleaved;P===null?(d.next=d,Fh(s)):(d.next=P.next,P.next=d),s.interleaved=d;return}}catch{}finally{}a=gm(r,s,d,c),a!==null&&(d=Wt(),Bn(a,r,c,d),Bm(a,s,c))}}function Um(r){var s=r.alternate;return r===Ze||s!==null&&s===Ze}function jm(r,s){Va=Eu=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function Bm(r,s,a){if((a&4194240)!==0){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Jr(r,a)}}var Iu={readContext:En,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useInsertionEffect:Mt,useLayoutEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useMutableSource:Mt,useSyncExternalStore:Mt,useId:Mt,unstable_isNewReconciler:!1},u0={readContext:En,useCallback:function(r,s){return ir().memoizedState=[r,s===void 0?null:s],r},useContext:En,useEffect:Nm,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,wu(4194308,4,Vm.bind(null,s,r),a)},useLayoutEffect:function(r,s){return wu(4194308,4,r,s)},useInsertionEffect:function(r,s){return wu(4,2,r,s)},useMemo:function(r,s){var a=ir();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var c=ir();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},c.queue=r,r=r.dispatch=a0.bind(null,Ze,r),[c.memoizedState,r]},useRef:function(r){var s=ir();return r={current:r},s.memoizedState=r},useState:Pm,useDebugValue:Jh,useDeferredValue:function(r){return ir().memoizedState=r},useTransition:function(){var r=Pm(!1),s=r[0];return r=o0.bind(null,r[1]),ir().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var c=Ze,d=ir();if(Je){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),It===null)throw Error(t(349));(ls&30)!==0||Im(c,s,a)}d.memoizedState=a;var m={value:a,getSnapshot:s};return d.queue=m,Nm(Am.bind(null,c,m,r),[r]),c.flags|=2048,Ma(9,Sm.bind(null,c,m,a,s),void 0,null),a},useId:function(){var r=ir(),s=It.identifierPrefix;if(Je){var a=Dr,c=Nr;a=(c&~(1<<32-$t(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=xa++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=s0++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},c0={readContext:En,useCallback:Lm,useContext:En,useEffect:Xh,useImperativeHandle:xm,useInsertionEffect:Dm,useLayoutEffect:Om,useMemo:Mm,useReducer:Kh,useRef:km,useState:function(){return Kh(La)},useDebugValue:Jh,useDeferredValue:function(r){var s=wn();return bm(s,gt.memoizedState,r)},useTransition:function(){var r=Kh(La)[0],s=wn().memoizedState;return[r,s]},useMutableSource:wm,useSyncExternalStore:Tm,useId:Fm,unstable_isNewReconciler:!1},h0={readContext:En,useCallback:Lm,useContext:En,useEffect:Xh,useImperativeHandle:xm,useInsertionEffect:Dm,useLayoutEffect:Om,useMemo:Mm,useReducer:Qh,useRef:km,useState:function(){return Qh(La)},useDebugValue:Jh,useDeferredValue:function(r){var s=wn();return gt===null?s.memoizedState=r:bm(s,gt.memoizedState,r)},useTransition:function(){var r=Qh(La)[0],s=wn().memoizedState;return[r,s]},useMutableSource:wm,useSyncExternalStore:Tm,useId:Fm,unstable_isNewReconciler:!1};function Fn(r,s){if(r&&r.defaultProps){s=se({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function Yh(r,s,a,c){s=r.memoizedState,a=a(c,s),a=a==null?s:se({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var Su={isMounted:function(r){return(r=r._reactInternals)?kn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var c=Wt(),d=di(r),m=Vr(c,d);m.payload=s,a!=null&&(m.callback=a),s=li(r,m,d),s!==null&&(Bn(s,r,d,c),gu(s,r,d))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var c=Wt(),d=di(r),m=Vr(c,d);m.tag=1,m.payload=s,a!=null&&(m.callback=a),s=li(r,m,d),s!==null&&(Bn(s,r,d,c),gu(s,r,d))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Wt(),c=di(r),d=Vr(a,c);d.tag=2,s!=null&&(d.callback=s),s=li(r,d,c),s!==null&&(Bn(s,r,c,a),gu(s,r,c))}};function zm(r,s,a,c,d,m,v){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,m,v):s.prototype&&s.prototype.isPureReactComponent?!Ta(a,c)||!Ta(d,m):!0}function $m(r,s,a){var c=!1,d=si,m=s.contextType;return typeof m=="object"&&m!==null?m=En(m):(d=Xt(s)?rs:Lt.current,c=s.contextTypes,m=(c=c!=null)?uo(r,d):si),s=new s(a,m),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Su,r.stateNode=s,s._reactInternals=r,c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=d,r.__reactInternalMemoizedMaskedChildContext=m),s}function qm(r,s,a,c){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==r&&Su.enqueueReplaceState(s,s.state,null)}function Zh(r,s,a,c){var d=r.stateNode;d.props=a,d.state=r.memoizedState,d.refs={},Uh(r);var m=s.contextType;typeof m=="object"&&m!==null?d.context=En(m):(m=Xt(s)?rs:Lt.current,d.context=uo(r,m)),d.state=r.memoizedState,m=s.getDerivedStateFromProps,typeof m=="function"&&(Yh(r,s,m,a),d.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&Su.enqueueReplaceState(d,d.state,null),yu(r,a,d,c),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308)}function _o(r,s){try{var a="",c=s;do a+=Ae(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:r,source:s,stack:d,digest:null}}function ed(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function td(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var d0=typeof WeakMap=="function"?WeakMap:Map;function Hm(r,s,a){a=Vr(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){Du||(Du=!0,gd=c),td(r,s)},a}function Wm(r,s,a){a=Vr(-1,a),a.tag=3;var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var d=s.value;a.payload=function(){return c(d)},a.callback=function(){td(r,s)}}var m=r.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){td(r,s),typeof c!="function"&&(ci===null?ci=new Set([this]):ci.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})}),a}function Gm(r,s,a){var c=r.pingCache;if(c===null){c=r.pingCache=new d0;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(a)||(d.add(a),r=R0.bind(null,r,s,a),s.then(r,r))}function Km(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function Qm(r,s,a,c,d){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Vr(-1,1),s.tag=2,li(a,s,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=d,r)}var f0=ue.ReactCurrentOwner,Jt=!1;function Ht(r,s,a,c){s.child=r===null?mm(s,null,a,c):po(s,r.child,a,c)}function Xm(r,s,a,c,d){a=a.render;var m=s.ref;return go(s,d),c=Wh(r,s,a,c,m,d),a=Gh(),r!==null&&!Jt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,xr(r,s,d)):(Je&&a&&kh(s),s.flags|=1,Ht(r,s,c,d),s.child)}function Jm(r,s,a,c,d){if(r===null){var m=a.type;return typeof m=="function"&&!Id(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=m,Ym(r,s,m,c,d)):(r=bu(a.type,null,c,s,s.mode,d),r.ref=s.ref,r.return=s,s.child=r)}if(m=r.child,(r.lanes&d)===0){var v=m.memoizedProps;if(a=a.compare,a=a!==null?a:Ta,a(v,c)&&r.ref===s.ref)return xr(r,s,d)}return s.flags|=1,r=pi(m,c),r.ref=s.ref,r.return=s,s.child=r}function Ym(r,s,a,c,d){if(r!==null){var m=r.memoizedProps;if(Ta(m,c)&&r.ref===s.ref)if(Jt=!1,s.pendingProps=c=m,(r.lanes&d)!==0)(r.flags&131072)!==0&&(Jt=!0);else return s.lanes=r.lanes,xr(r,s,d)}return nd(r,s,a,c,d)}function Zm(r,s,a){var c=s.pendingProps,d=c.children,m=r!==null?r.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(Eo,hn),hn|=a;else{if((a&1073741824)===0)return r=m!==null?m.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,He(Eo,hn),hn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,He(Eo,hn),hn|=c}else m!==null?(c=m.baseLanes|a,s.memoizedState=null):c=a,He(Eo,hn),hn|=c;return Ht(r,s,d,a),s.child}function eg(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function nd(r,s,a,c,d){var m=Xt(a)?rs:Lt.current;return m=uo(s,m),go(s,d),a=Wh(r,s,a,c,m,d),c=Gh(),r!==null&&!Jt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,xr(r,s,d)):(Je&&c&&kh(s),s.flags|=1,Ht(r,s,a,d),s.child)}function tg(r,s,a,c,d){if(Xt(a)){var m=!0;lu(s)}else m=!1;if(go(s,d),s.stateNode===null)Ru(r,s),$m(s,a,c),Zh(s,a,c,d),c=!0;else if(r===null){var v=s.stateNode,S=s.memoizedProps;v.props=S;var P=v.context,j=a.contextType;typeof j=="object"&&j!==null?j=En(j):(j=Xt(a)?rs:Lt.current,j=uo(s,j));var K=a.getDerivedStateFromProps,Q=typeof K=="function"||typeof v.getSnapshotBeforeUpdate=="function";Q||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==c||P!==j)&&qm(s,v,c,j),ai=!1;var G=s.memoizedState;v.state=G,yu(s,c,v,d),P=s.memoizedState,S!==c||G!==P||Qt.current||ai?(typeof K=="function"&&(Yh(s,a,K,c),P=s.memoizedState),(S=ai||zm(s,a,S,c,G,P,j))?(Q||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(s.flags|=4194308)):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=P),v.props=c,v.state=P,v.context=j,c=S):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{v=s.stateNode,ym(r,s),S=s.memoizedProps,j=s.type===s.elementType?S:Fn(s.type,S),v.props=j,Q=s.pendingProps,G=v.context,P=a.contextType,typeof P=="object"&&P!==null?P=En(P):(P=Xt(a)?rs:Lt.current,P=uo(s,P));var ne=a.getDerivedStateFromProps;(K=typeof ne=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==Q||G!==P)&&qm(s,v,c,P),ai=!1,G=s.memoizedState,v.state=G,yu(s,c,v,d);var le=s.memoizedState;S!==Q||G!==le||Qt.current||ai?(typeof ne=="function"&&(Yh(s,a,ne,c),le=s.memoizedState),(j=ai||zm(s,a,j,c,G,le,P)||!1)?(K||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,le,P),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,le,P)),typeof v.componentDidUpdate=="function"&&(s.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof v.componentDidUpdate!="function"||S===r.memoizedProps&&G===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&G===r.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=le),v.props=c,v.state=le,v.context=P,c=j):(typeof v.componentDidUpdate!="function"||S===r.memoizedProps&&G===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&G===r.memoizedState||(s.flags|=1024),c=!1)}return rd(r,s,a,c,m,d)}function rd(r,s,a,c,d,m){eg(r,s);var v=(s.flags&128)!==0;if(!c&&!v)return d&&om(s,a,!1),xr(r,s,m);c=s.stateNode,f0.current=s;var S=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,r!==null&&v?(s.child=po(s,r.child,null,m),s.child=po(s,null,S,m)):Ht(r,s,S,m),s.memoizedState=c.state,d&&om(s,a,!0),s.child}function ng(r){var s=r.stateNode;s.pendingContext?im(r,s.pendingContext,s.pendingContext!==s.context):s.context&&im(r,s.context,!1),jh(r,s.containerInfo)}function rg(r,s,a,c,d){return fo(),Vh(d),s.flags|=256,Ht(r,s,a,c),s.child}var id={dehydrated:null,treeContext:null,retryLane:0};function sd(r){return{baseLanes:r,cachePool:null,transitions:null}}function ig(r,s,a){var c=s.pendingProps,d=Ye.current,m=!1,v=(s.flags&128)!==0,S;if((S=v)||(S=r!==null&&r.memoizedState===null?!1:(d&2)!==0),S?(m=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(d|=1),He(Ye,d&1),r===null)return Oh(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(v=c.children,r=c.fallback,m?(c=s.mode,m=s.child,v={mode:"hidden",children:v},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=v):m=Fu(v,c,0,null),r=fs(r,c,a,null),m.return=s,r.return=s,m.sibling=r,s.child=m,s.child.memoizedState=sd(a),s.memoizedState=id,r):od(s,v));if(d=r.memoizedState,d!==null&&(S=d.dehydrated,S!==null))return p0(r,s,v,c,S,d,a);if(m){m=c.fallback,v=s.mode,d=r.child,S=d.sibling;var P={mode:"hidden",children:c.children};return(v&1)===0&&s.child!==d?(c=s.child,c.childLanes=0,c.pendingProps=P,s.deletions=null):(c=pi(d,P),c.subtreeFlags=d.subtreeFlags&14680064),S!==null?m=pi(S,m):(m=fs(m,v,a,null),m.flags|=2),m.return=s,c.return=s,c.sibling=m,s.child=c,c=m,m=s.child,v=r.child.memoizedState,v=v===null?sd(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},m.memoizedState=v,m.childLanes=r.childLanes&~a,s.memoizedState=id,c}return m=r.child,r=m.sibling,c=pi(m,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=a),c.return=s,c.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=c,s.memoizedState=null,c}function od(r,s){return s=Fu({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Au(r,s,a,c){return c!==null&&Vh(c),po(s,r.child,null,a),r=od(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function p0(r,s,a,c,d,m,v){if(a)return s.flags&256?(s.flags&=-257,c=ed(Error(t(422))),Au(r,s,v,c)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(m=c.fallback,d=s.mode,c=Fu({mode:"visible",children:c.children},d,0,null),m=fs(m,d,v,null),m.flags|=2,c.return=s,m.return=s,c.sibling=m,s.child=c,(s.mode&1)!==0&&po(s,r.child,null,v),s.child.memoizedState=sd(v),s.memoizedState=id,m);if((s.mode&1)===0)return Au(r,s,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var S=c.dgst;return c=S,m=Error(t(419)),c=ed(m,c,void 0),Au(r,s,v,c)}if(S=(v&r.childLanes)!==0,Jt||S){if(c=It,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Or(r,d),Bn(c,r,d,-1))}return Td(),c=ed(Error(t(421))),Au(r,s,v,c)}return d.data==="$?"?(s.flags|=128,s.child=r.child,s=C0.bind(null,r),d._reactRetry=s,null):(r=m.treeContext,cn=ri(d.nextSibling),un=s,Je=!0,bn=null,r!==null&&(_n[vn++]=Nr,_n[vn++]=Dr,_n[vn++]=is,Nr=r.id,Dr=r.overflow,is=s),s=od(s,c.children),s.flags|=4096,s)}function sg(r,s,a){r.lanes|=s;var c=r.alternate;c!==null&&(c.lanes|=s),bh(r.return,s,a)}function ad(r,s,a,c,d){var m=r.memoizedState;m===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function og(r,s,a){var c=s.pendingProps,d=c.revealOrder,m=c.tail;if(Ht(r,s,c.children,a),c=Ye.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&sg(r,a,s);else if(r.tag===19)sg(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}if(He(Ye,c),(s.mode&1)===0)s.memoizedState=null;else switch(d){case"forwards":for(a=s.child,d=null;a!==null;)r=a.alternate,r!==null&&_u(r)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),ad(s,!1,d,a,m);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(r=d.alternate,r!==null&&_u(r)===null){s.child=d;break}r=d.sibling,d.sibling=a,a=d,d=r}ad(s,!0,a,null,m);break;case"together":ad(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Ru(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function xr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),us|=s.lanes,(a&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=pi(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=pi(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function m0(r,s,a){switch(s.tag){case 3:ng(s),fo();break;case 5:Em(s);break;case 1:Xt(s.type)&&lu(s);break;case 4:jh(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,d=s.memoizedProps.value;He(pu,c._currentValue),c._currentValue=d;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(He(Ye,Ye.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?ig(r,s,a):(He(Ye,Ye.current&1),r=xr(r,s,a),r!==null?r.sibling:null);He(Ye,Ye.current&1);break;case 19:if(c=(a&s.childLanes)!==0,(r.flags&128)!==0){if(c)return og(r,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),He(Ye,Ye.current),c)break;return null;case 22:case 23:return s.lanes=0,Zm(r,s,a)}return xr(r,s,a)}var ag,ld,lg,ug;ag=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},ld=function(){},lg=function(r,s,a,c){var d=r.memoizedProps;if(d!==c){r=s.stateNode,as(rr.current);var m=null;switch(a){case"input":d=ji(r,d),c=ji(r,c),m=[];break;case"select":d=se({},d,{value:void 0}),c=se({},c,{value:void 0}),m=[];break;case"textarea":d=Jo(r,d),c=Jo(r,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(r.onclick=su)}ra(a,c);var v;a=null;for(j in d)if(!c.hasOwnProperty(j)&&d.hasOwnProperty(j)&&d[j]!=null)if(j==="style"){var S=d[j];for(v in S)S.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(o.hasOwnProperty(j)?m||(m=[]):(m=m||[]).push(j,null));for(j in c){var P=c[j];if(S=d!=null?d[j]:void 0,c.hasOwnProperty(j)&&P!==S&&(P!=null||S!=null))if(j==="style")if(S){for(v in S)!S.hasOwnProperty(v)||P&&P.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in P)P.hasOwnProperty(v)&&S[v]!==P[v]&&(a||(a={}),a[v]=P[v])}else a||(m||(m=[]),m.push(j,a)),a=P;else j==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,S=S?S.__html:void 0,P!=null&&S!==P&&(m=m||[]).push(j,P)):j==="children"?typeof P!="string"&&typeof P!="number"||(m=m||[]).push(j,""+P):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(o.hasOwnProperty(j)?(P!=null&&j==="onScroll"&&Ge("scroll",r),m||S===P||(m=[])):(m=m||[]).push(j,P))}a&&(m=m||[]).push("style",a);var j=m;(s.updateQueue=j)&&(s.flags|=4)}},ug=function(r,s,a,c){a!==c&&(s.flags|=4)};function ba(r,s){if(!Je)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function bt(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,c=0;if(s)for(var d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=c,r.childLanes=a,s}function g0(r,s,a){var c=s.pendingProps;switch(Nh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bt(s),null;case 1:return Xt(s.type)&&au(),bt(s),null;case 3:return c=s.stateNode,yo(),Ke(Qt),Ke(Lt),$h(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(r===null||r.child===null)&&(du(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,bn!==null&&(vd(bn),bn=null))),ld(r,s),bt(s),null;case 5:Bh(s);var d=as(Oa.current);if(a=s.type,r!==null&&s.stateNode!=null)lg(r,s,a,c,d),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return bt(s),null}if(r=as(rr.current),du(s)){c=s.stateNode,a=s.type;var m=s.memoizedProps;switch(c[nr]=s,c[Ca]=m,r=(s.mode&1)!==0,a){case"dialog":Ge("cancel",c),Ge("close",c);break;case"iframe":case"object":case"embed":Ge("load",c);break;case"video":case"audio":for(d=0;d<Sa.length;d++)Ge(Sa[d],c);break;case"source":Ge("error",c);break;case"img":case"image":case"link":Ge("error",c),Ge("load",c);break;case"details":Ge("toggle",c);break;case"input":Ds(c,m),Ge("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Ge("invalid",c);break;case"textarea":Vs(c,m),Ge("invalid",c)}ra(a,m),d=null;for(var v in m)if(m.hasOwnProperty(v)){var S=m[v];v==="children"?typeof S=="string"?c.textContent!==S&&(m.suppressHydrationWarning!==!0&&iu(c.textContent,S,r),d=["children",S]):typeof S=="number"&&c.textContent!==""+S&&(m.suppressHydrationWarning!==!0&&iu(c.textContent,S,r),d=["children",""+S]):o.hasOwnProperty(v)&&S!=null&&v==="onScroll"&&Ge("scroll",c)}switch(a){case"input":_r(c),Nl(c,m,!0);break;case"textarea":_r(c),Yo(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=su)}c=d,s.updateQueue=c,c!==null&&(s.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=ft(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=v.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof c.is=="string"?r=v.createElement(a,{is:c.is}):(r=v.createElement(a),a==="select"&&(v=r,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):r=v.createElementNS(r,a),r[nr]=s,r[Ca]=c,ag(r,s,!1,!1),s.stateNode=r;e:{switch(v=ia(a,c),a){case"dialog":Ge("cancel",r),Ge("close",r),d=c;break;case"iframe":case"object":case"embed":Ge("load",r),d=c;break;case"video":case"audio":for(d=0;d<Sa.length;d++)Ge(Sa[d],r);d=c;break;case"source":Ge("error",r),d=c;break;case"img":case"image":case"link":Ge("error",r),Ge("load",r),d=c;break;case"details":Ge("toggle",r),d=c;break;case"input":Ds(r,c),d=ji(r,c),Ge("invalid",r);break;case"option":d=c;break;case"select":r._wrapperState={wasMultiple:!!c.multiple},d=se({},c,{value:void 0}),Ge("invalid",r);break;case"textarea":Vs(r,c),d=Jo(r,c),Ge("invalid",r);break;default:d=c}ra(a,d),S=d;for(m in S)if(S.hasOwnProperty(m)){var P=S[m];m==="style"?ta(r,P):m==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&Zo(r,P)):m==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&Wr(r,P):typeof P=="number"&&Wr(r,""+P):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?P!=null&&m==="onScroll"&&Ge("scroll",r):P!=null&&ee(r,m,P,v))}switch(a){case"input":_r(r),Nl(r,c,!1);break;case"textarea":_r(r),Yo(r);break;case"option":c.value!=null&&r.setAttribute("value",""+Fe(c.value));break;case"select":r.multiple=!!c.multiple,m=c.value,m!=null?Er(r,!!c.multiple,m,!1):c.defaultValue!=null&&Er(r,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(r.onclick=su)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return bt(s),null;case 6:if(r&&s.stateNode!=null)ug(r,s,r.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=as(Oa.current),as(rr.current),du(s)){if(c=s.stateNode,a=s.memoizedProps,c[nr]=s,(m=c.nodeValue!==a)&&(r=un,r!==null))switch(r.tag){case 3:iu(c.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&iu(c.nodeValue,a,(r.mode&1)!==0)}m&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[nr]=s,s.stateNode=c}return bt(s),null;case 13:if(Ke(Ye),c=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Je&&cn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)dm(),fo(),s.flags|=98560,m=!1;else if(m=du(s),c!==null&&c.dehydrated!==null){if(r===null){if(!m)throw Error(t(318));if(m=s.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[nr]=s}else fo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;bt(s),m=!1}else bn!==null&&(vd(bn),bn=null),m=!0;if(!m)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(c=c!==null,c!==(r!==null&&r.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(Ye.current&1)!==0?yt===0&&(yt=3):Td())),s.updateQueue!==null&&(s.flags|=4),bt(s),null);case 4:return yo(),ld(r,s),r===null&&Aa(s.stateNode.containerInfo),bt(s),null;case 10:return Mh(s.type._context),bt(s),null;case 17:return Xt(s.type)&&au(),bt(s),null;case 19:if(Ke(Ye),m=s.memoizedState,m===null)return bt(s),null;if(c=(s.flags&128)!==0,v=m.rendering,v===null)if(c)ba(m,!1);else{if(yt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(v=_u(r),v!==null){for(s.flags|=128,ba(m,!1),c=v.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)m=a,r=c,m.flags&=14680066,v=m.alternate,v===null?(m.childLanes=0,m.lanes=r,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=v.childLanes,m.lanes=v.lanes,m.child=v.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=v.memoizedProps,m.memoizedState=v.memoizedState,m.updateQueue=v.updateQueue,m.type=v.type,r=v.dependencies,m.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return He(Ye,Ye.current&1|2),s.child}r=r.sibling}m.tail!==null&&qe()>wo&&(s.flags|=128,c=!0,ba(m,!1),s.lanes=4194304)}else{if(!c)if(r=_u(v),r!==null){if(s.flags|=128,c=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),ba(m,!0),m.tail===null&&m.tailMode==="hidden"&&!v.alternate&&!Je)return bt(s),null}else 2*qe()-m.renderingStartTime>wo&&a!==1073741824&&(s.flags|=128,c=!0,ba(m,!1),s.lanes=4194304);m.isBackwards?(v.sibling=s.child,s.child=v):(a=m.last,a!==null?a.sibling=v:s.child=v,m.last=v)}return m.tail!==null?(s=m.tail,m.rendering=s,m.tail=s.sibling,m.renderingStartTime=qe(),s.sibling=null,a=Ye.current,He(Ye,c?a&1|2:a&1),s):(bt(s),null);case 22:case 23:return wd(),c=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(hn&1073741824)!==0&&(bt(s),s.subtreeFlags&6&&(s.flags|=8192)):bt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function y0(r,s){switch(Nh(s),s.tag){case 1:return Xt(s.type)&&au(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return yo(),Ke(Qt),Ke(Lt),$h(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return Bh(s),null;case 13:if(Ke(Ye),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));fo()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ke(Ye),null;case 4:return yo(),null;case 10:return Mh(s.type._context),null;case 22:case 23:return wd(),null;case 24:return null;default:return null}}var Cu=!1,Ft=!1,_0=typeof WeakSet=="function"?WeakSet:Set,ae=null;function vo(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){tt(r,s,c)}else a.current=null}function ud(r,s,a){try{a()}catch(c){tt(r,s,c)}}var cg=!1;function v0(r,s){if(wh=ei,r=zp(),fh(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var v=0,S=-1,P=-1,j=0,K=0,Q=r,G=null;t:for(;;){for(var ne;Q!==a||d!==0&&Q.nodeType!==3||(S=v+d),Q!==m||c!==0&&Q.nodeType!==3||(P=v+c),Q.nodeType===3&&(v+=Q.nodeValue.length),(ne=Q.firstChild)!==null;)G=Q,Q=ne;for(;;){if(Q===r)break t;if(G===a&&++j===d&&(S=v),G===m&&++K===c&&(P=v),(ne=Q.nextSibling)!==null)break;Q=G,G=Q.parentNode}Q=ne}a=S===-1||P===-1?null:{start:S,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Th={focusedElem:r,selectionRange:a},ei=!1,ae=s;ae!==null;)if(s=ae,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,ae=r;else for(;ae!==null;){s=ae;try{var le=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(le!==null){var ce=le.memoizedProps,it=le.memoizedState,M=s.stateNode,N=M.getSnapshotBeforeUpdate(s.elementType===s.type?ce:Fn(s.type,ce),it);M.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var F=s.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(X){tt(s,s.return,X)}if(r=s.sibling,r!==null){r.return=s.return,ae=r;break}ae=s.return}return le=cg,cg=!1,le}function Fa(r,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&r)===r){var m=d.destroy;d.destroy=void 0,m!==void 0&&ud(s,a,m)}d=d.next}while(d!==c)}}function Pu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function cd(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function hg(r){var s=r.alternate;s!==null&&(r.alternate=null,hg(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[nr],delete s[Ca],delete s[Rh],delete s[t0],delete s[n0])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function dg(r){return r.tag===5||r.tag===3||r.tag===4}function fg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||dg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function hd(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=su));else if(c!==4&&(r=r.child,r!==null))for(hd(r,s,a),r=r.sibling;r!==null;)hd(r,s,a),r=r.sibling}function dd(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(c!==4&&(r=r.child,r!==null))for(dd(r,s,a),r=r.sibling;r!==null;)dd(r,s,a),r=r.sibling}var Pt=null,Un=!1;function ui(r,s,a){for(a=a.child;a!==null;)pg(r,s,a),a=a.sibling}function pg(r,s,a){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(Qi,a)}catch{}switch(a.tag){case 5:Ft||vo(a,s);case 6:var c=Pt,d=Un;Pt=null,ui(r,s,a),Pt=c,Un=d,Pt!==null&&(Un?(r=Pt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Pt.removeChild(a.stateNode));break;case 18:Pt!==null&&(Un?(r=Pt,a=a.stateNode,r.nodeType===8?Ah(r.parentNode,a):r.nodeType===1&&Ah(r,a),xn(r)):Ah(Pt,a.stateNode));break;case 4:c=Pt,d=Un,Pt=a.stateNode.containerInfo,Un=!0,ui(r,s,a),Pt=c,Un=d;break;case 0:case 11:case 14:case 15:if(!Ft&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,v=m.destroy;m=m.tag,v!==void 0&&((m&2)!==0||(m&4)!==0)&&ud(a,s,v),d=d.next}while(d!==c)}ui(r,s,a);break;case 1:if(!Ft&&(vo(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(S){tt(a,s,S)}ui(r,s,a);break;case 21:ui(r,s,a);break;case 22:a.mode&1?(Ft=(c=Ft)||a.memoizedState!==null,ui(r,s,a),Ft=c):ui(r,s,a);break;default:ui(r,s,a)}}function mg(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new _0),s.forEach(function(c){var d=P0.bind(null,r,c);a.has(c)||(a.add(c),c.then(d,d))})}}function jn(r,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=r,v=s,S=v;e:for(;S!==null;){switch(S.tag){case 5:Pt=S.stateNode,Un=!1;break e;case 3:Pt=S.stateNode.containerInfo,Un=!0;break e;case 4:Pt=S.stateNode.containerInfo,Un=!0;break e}S=S.return}if(Pt===null)throw Error(t(160));pg(m,v,d),Pt=null,Un=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(j){tt(d,s,j)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)gg(s,r),s=s.sibling}function gg(r,s){var a=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(jn(s,r),sr(r),c&4){try{Fa(3,r,r.return),Pu(3,r)}catch(ce){tt(r,r.return,ce)}try{Fa(5,r,r.return)}catch(ce){tt(r,r.return,ce)}}break;case 1:jn(s,r),sr(r),c&512&&a!==null&&vo(a,a.return);break;case 5:if(jn(s,r),sr(r),c&512&&a!==null&&vo(a,a.return),r.flags&32){var d=r.stateNode;try{Wr(d,"")}catch(ce){tt(r,r.return,ce)}}if(c&4&&(d=r.stateNode,d!=null)){var m=r.memoizedProps,v=a!==null?a.memoizedProps:m,S=r.type,P=r.updateQueue;if(r.updateQueue=null,P!==null)try{S==="input"&&m.type==="radio"&&m.name!=null&&Qo(d,m),ia(S,v);var j=ia(S,m);for(v=0;v<P.length;v+=2){var K=P[v],Q=P[v+1];K==="style"?ta(d,Q):K==="dangerouslySetInnerHTML"?Zo(d,Q):K==="children"?Wr(d,Q):ee(d,K,Q,j)}switch(S){case"input":Xo(d,m);break;case"textarea":xs(d,m);break;case"select":var G=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var ne=m.value;ne!=null?Er(d,!!m.multiple,ne,!1):G!==!!m.multiple&&(m.defaultValue!=null?Er(d,!!m.multiple,m.defaultValue,!0):Er(d,!!m.multiple,m.multiple?[]:"",!1))}d[Ca]=m}catch(ce){tt(r,r.return,ce)}}break;case 6:if(jn(s,r),sr(r),c&4){if(r.stateNode===null)throw Error(t(162));d=r.stateNode,m=r.memoizedProps;try{d.nodeValue=m}catch(ce){tt(r,r.return,ce)}}break;case 3:if(jn(s,r),sr(r),c&4&&a!==null&&a.memoizedState.isDehydrated)try{xn(s.containerInfo)}catch(ce){tt(r,r.return,ce)}break;case 4:jn(s,r),sr(r);break;case 13:jn(s,r),sr(r),d=r.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(md=qe())),c&4&&mg(r);break;case 22:if(K=a!==null&&a.memoizedState!==null,r.mode&1?(Ft=(j=Ft)||K,jn(s,r),Ft=j):jn(s,r),sr(r),c&8192){if(j=r.memoizedState!==null,(r.stateNode.isHidden=j)&&!K&&(r.mode&1)!==0)for(ae=r,K=r.child;K!==null;){for(Q=ae=K;ae!==null;){switch(G=ae,ne=G.child,G.tag){case 0:case 11:case 14:case 15:Fa(4,G,G.return);break;case 1:vo(G,G.return);var le=G.stateNode;if(typeof le.componentWillUnmount=="function"){c=G,a=G.return;try{s=c,le.props=s.memoizedProps,le.state=s.memoizedState,le.componentWillUnmount()}catch(ce){tt(c,a,ce)}}break;case 5:vo(G,G.return);break;case 22:if(G.memoizedState!==null){vg(Q);continue}}ne!==null?(ne.return=G,ae=ne):vg(Q)}K=K.sibling}e:for(K=null,Q=r;;){if(Q.tag===5){if(K===null){K=Q;try{d=Q.stateNode,j?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(S=Q.stateNode,P=Q.memoizedProps.style,v=P!=null&&P.hasOwnProperty("display")?P.display:null,S.style.display=ea("display",v))}catch(ce){tt(r,r.return,ce)}}}else if(Q.tag===6){if(K===null)try{Q.stateNode.nodeValue=j?"":Q.memoizedProps}catch(ce){tt(r,r.return,ce)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===r)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===r)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===r)break e;K===Q&&(K=null),Q=Q.return}K===Q&&(K=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:jn(s,r),sr(r),c&4&&mg(r);break;case 21:break;default:jn(s,r),sr(r)}}function sr(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(dg(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Wr(d,""),c.flags&=-33);var m=fg(r);dd(r,m,d);break;case 3:case 4:var v=c.stateNode.containerInfo,S=fg(r);hd(r,S,v);break;default:throw Error(t(161))}}catch(P){tt(r,r.return,P)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function E0(r,s,a){ae=r,yg(r)}function yg(r,s,a){for(var c=(r.mode&1)!==0;ae!==null;){var d=ae,m=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||Cu;if(!v){var S=d.alternate,P=S!==null&&S.memoizedState!==null||Ft;S=Cu;var j=Ft;if(Cu=v,(Ft=P)&&!j)for(ae=d;ae!==null;)v=ae,P=v.child,v.tag===22&&v.memoizedState!==null?Eg(d):P!==null?(P.return=v,ae=P):Eg(d);for(;m!==null;)ae=m,yg(m),m=m.sibling;ae=d,Cu=S,Ft=j}_g(r)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,ae=m):_g(r)}}function _g(r){for(;ae!==null;){var s=ae;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Ft||Pu(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!Ft)if(a===null)c.componentDidMount();else{var d=s.elementType===s.type?a.memoizedProps:Fn(s.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=s.updateQueue;m!==null&&vm(s,m,c);break;case 3:var v=s.updateQueue;if(v!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}vm(s,v,a)}break;case 5:var S=s.stateNode;if(a===null&&s.flags&4){a=S;var P=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var j=s.alternate;if(j!==null){var K=j.memoizedState;if(K!==null){var Q=K.dehydrated;Q!==null&&xn(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ft||s.flags&512&&cd(s)}catch(G){tt(s,s.return,G)}}if(s===r){ae=null;break}if(a=s.sibling,a!==null){a.return=s.return,ae=a;break}ae=s.return}}function vg(r){for(;ae!==null;){var s=ae;if(s===r){ae=null;break}var a=s.sibling;if(a!==null){a.return=s.return,ae=a;break}ae=s.return}}function Eg(r){for(;ae!==null;){var s=ae;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Pu(4,s)}catch(P){tt(s,a,P)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var d=s.return;try{c.componentDidMount()}catch(P){tt(s,d,P)}}var m=s.return;try{cd(s)}catch(P){tt(s,m,P)}break;case 5:var v=s.return;try{cd(s)}catch(P){tt(s,v,P)}}}catch(P){tt(s,s.return,P)}if(s===r){ae=null;break}var S=s.sibling;if(S!==null){S.return=s.return,ae=S;break}ae=s.return}}var w0=Math.ceil,ku=ue.ReactCurrentDispatcher,fd=ue.ReactCurrentOwner,Tn=ue.ReactCurrentBatchConfig,xe=0,It=null,lt=null,kt=0,hn=0,Eo=ii(0),yt=0,Ua=null,us=0,Nu=0,pd=0,ja=null,Yt=null,md=0,wo=1/0,Lr=null,Du=!1,gd=null,ci=null,Ou=!1,hi=null,Vu=0,Ba=0,yd=null,xu=-1,Lu=0;function Wt(){return(xe&6)!==0?qe():xu!==-1?xu:xu=qe()}function di(r){return(r.mode&1)===0?1:(xe&2)!==0&&kt!==0?kt&-kt:i0.transition!==null?(Lu===0&&(Lu=Ji()),Lu):(r=Ne,r!==0||(r=window.event,r=r===void 0?16:ma(r.type)),r)}function Bn(r,s,a,c){if(50<Ba)throw Ba=0,yd=null,Error(t(185));Xr(r,a,c),((xe&2)===0||r!==It)&&(r===It&&((xe&2)===0&&(Nu|=a),yt===4&&fi(r,kt)),Zt(r,c),a===1&&xe===0&&(s.mode&1)===0&&(wo=qe()+500,uu&&oi()))}function Zt(r,s){var a=r.callbackNode;Ir(r,s);var c=Xi(r,r===It?kt:0);if(c===0)a!==null&&ca(a),r.callbackNode=null,r.callbackPriority=0;else if(s=c&-c,r.callbackPriority!==s){if(a!=null&&ca(a),s===1)r.tag===0?r0(Tg.bind(null,r)):am(Tg.bind(null,r)),Zw(function(){(xe&6)===0&&oi()}),a=null;else{switch(Yr(c)){case 1:a=Ki;break;case 4:a=Gr;break;case 16:a=mn;break;case 536870912:a=Ll;break;default:a=mn}a=Ng(a,wg.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function wg(r,s){if(xu=-1,Lu=0,(xe&6)!==0)throw Error(t(327));var a=r.callbackNode;if(To()&&r.callbackNode!==a)return null;var c=Xi(r,r===It?kt:0);if(c===0)return null;if((c&30)!==0||(c&r.expiredLanes)!==0||s)s=Mu(r,c);else{s=c;var d=xe;xe|=2;var m=Sg();(It!==r||kt!==s)&&(Lr=null,wo=qe()+500,hs(r,s));do try{S0();break}catch(S){Ig(r,S)}while(!0);Lh(),ku.current=m,xe=d,lt!==null?s=0:(It=null,kt=0,s=yt)}if(s!==0){if(s===2&&(d=on(r),d!==0&&(c=d,s=_d(r,d))),s===1)throw a=Ua,hs(r,0),fi(r,c),Zt(r,qe()),a;if(s===6)fi(r,c);else{if(d=r.current.alternate,(c&30)===0&&!T0(d)&&(s=Mu(r,c),s===2&&(m=on(r),m!==0&&(c=m,s=_d(r,m))),s===1))throw a=Ua,hs(r,0),fi(r,c),Zt(r,qe()),a;switch(r.finishedWork=d,r.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:ds(r,Yt,Lr);break;case 3:if(fi(r,c),(c&130023424)===c&&(s=md+500-qe(),10<s)){if(Xi(r,0)!==0)break;if(d=r.suspendedLanes,(d&c)!==c){Wt(),r.pingedLanes|=r.suspendedLanes&d;break}r.timeoutHandle=Sh(ds.bind(null,r,Yt,Lr),s);break}ds(r,Yt,Lr);break;case 4:if(fi(r,c),(c&4194240)===c)break;for(s=r.eventTimes,d=-1;0<c;){var v=31-$t(c);m=1<<v,v=s[v],v>d&&(d=v),c&=~m}if(c=d,c=qe()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*w0(c/1960))-c,10<c){r.timeoutHandle=Sh(ds.bind(null,r,Yt,Lr),c);break}ds(r,Yt,Lr);break;case 5:ds(r,Yt,Lr);break;default:throw Error(t(329))}}}return Zt(r,qe()),r.callbackNode===a?wg.bind(null,r):null}function _d(r,s){var a=ja;return r.current.memoizedState.isDehydrated&&(hs(r,s).flags|=256),r=Mu(r,s),r!==2&&(s=Yt,Yt=a,s!==null&&vd(s)),r}function vd(r){Yt===null?Yt=r:Yt.push.apply(Yt,r)}function T0(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!Mn(m(),d))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function fi(r,s){for(s&=~pd,s&=~Nu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-$t(s),c=1<<a;r[a]=-1,s&=~c}}function Tg(r){if((xe&6)!==0)throw Error(t(327));To();var s=Xi(r,0);if((s&1)===0)return Zt(r,qe()),null;var a=Mu(r,s);if(r.tag!==0&&a===2){var c=on(r);c!==0&&(s=c,a=_d(r,c))}if(a===1)throw a=Ua,hs(r,0),fi(r,s),Zt(r,qe()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,ds(r,Yt,Lr),Zt(r,qe()),null}function Ed(r,s){var a=xe;xe|=1;try{return r(s)}finally{xe=a,xe===0&&(wo=qe()+500,uu&&oi())}}function cs(r){hi!==null&&hi.tag===0&&(xe&6)===0&&To();var s=xe;xe|=1;var a=Tn.transition,c=Ne;try{if(Tn.transition=null,Ne=1,r)return r()}finally{Ne=c,Tn.transition=a,xe=s,(xe&6)===0&&oi()}}function wd(){hn=Eo.current,Ke(Eo)}function hs(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,Yw(a)),lt!==null)for(a=lt.return;a!==null;){var c=a;switch(Nh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&au();break;case 3:yo(),Ke(Qt),Ke(Lt),$h();break;case 5:Bh(c);break;case 4:yo();break;case 13:Ke(Ye);break;case 19:Ke(Ye);break;case 10:Mh(c.type._context);break;case 22:case 23:wd()}a=a.return}if(It=r,lt=r=pi(r.current,null),kt=hn=s,yt=0,Ua=null,pd=Nu=us=0,Yt=ja=null,os!==null){for(s=0;s<os.length;s++)if(a=os[s],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var v=m.next;m.next=d,c.next=v}a.pending=c}os=null}return r}function Ig(r,s){do{var a=lt;try{if(Lh(),vu.current=Iu,Eu){for(var c=Ze.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Eu=!1}if(ls=0,Tt=gt=Ze=null,Va=!1,xa=0,fd.current=null,a===null||a.return===null){yt=1,Ua=s,lt=null;break}e:{var m=r,v=a.return,S=a,P=s;if(s=kt,S.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var j=P,K=S,Q=K.tag;if((K.mode&1)===0&&(Q===0||Q===11||Q===15)){var G=K.alternate;G?(K.updateQueue=G.updateQueue,K.memoizedState=G.memoizedState,K.lanes=G.lanes):(K.updateQueue=null,K.memoizedState=null)}var ne=Km(v);if(ne!==null){ne.flags&=-257,Qm(ne,v,S,m,s),ne.mode&1&&Gm(m,j,s),s=ne,P=j;var le=s.updateQueue;if(le===null){var ce=new Set;ce.add(P),s.updateQueue=ce}else le.add(P);break e}else{if((s&1)===0){Gm(m,j,s),Td();break e}P=Error(t(426))}}else if(Je&&S.mode&1){var it=Km(v);if(it!==null){(it.flags&65536)===0&&(it.flags|=256),Qm(it,v,S,m,s),Vh(_o(P,S));break e}}m=P=_o(P,S),yt!==4&&(yt=2),ja===null?ja=[m]:ja.push(m),m=v;do{switch(m.tag){case 3:m.flags|=65536,s&=-s,m.lanes|=s;var M=Hm(m,P,s);_m(m,M);break e;case 1:S=P;var N=m.type,F=m.stateNode;if((m.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(ci===null||!ci.has(F)))){m.flags|=65536,s&=-s,m.lanes|=s;var X=Wm(m,S,s);_m(m,X);break e}}m=m.return}while(m!==null)}Rg(a)}catch(he){s=he,lt===a&&a!==null&&(lt=a=a.return);continue}break}while(!0)}function Sg(){var r=ku.current;return ku.current=Iu,r===null?Iu:r}function Td(){(yt===0||yt===3||yt===2)&&(yt=4),It===null||(us&268435455)===0&&(Nu&268435455)===0||fi(It,kt)}function Mu(r,s){var a=xe;xe|=2;var c=Sg();(It!==r||kt!==s)&&(Lr=null,hs(r,s));do try{I0();break}catch(d){Ig(r,d)}while(!0);if(Lh(),xe=a,ku.current=c,lt!==null)throw Error(t(261));return It=null,kt=0,yt}function I0(){for(;lt!==null;)Ag(lt)}function S0(){for(;lt!==null&&!Vl();)Ag(lt)}function Ag(r){var s=kg(r.alternate,r,hn);r.memoizedProps=r.pendingProps,s===null?Rg(r):lt=s,fd.current=null}function Rg(r){var s=r;do{var a=s.alternate;if(r=s.return,(s.flags&32768)===0){if(a=g0(a,s,hn),a!==null){lt=a;return}}else{if(a=y0(a,s),a!==null){a.flags&=32767,lt=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{yt=6,lt=null;return}}if(s=s.sibling,s!==null){lt=s;return}lt=s=r}while(s!==null);yt===0&&(yt=5)}function ds(r,s,a){var c=Ne,d=Tn.transition;try{Tn.transition=null,Ne=1,A0(r,s,a,c)}finally{Tn.transition=d,Ne=c}return null}function A0(r,s,a,c){do To();while(hi!==null);if((xe&6)!==0)throw Error(t(327));a=r.finishedWork;var d=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var m=a.lanes|a.childLanes;if(ze(r,m),r===It&&(lt=It=null,kt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Ou||(Ou=!0,Ng(mn,function(){return To(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Tn.transition,Tn.transition=null;var v=Ne;Ne=1;var S=xe;xe|=4,fd.current=null,v0(r,a),gg(a,r),Hw(Th),ei=!!wh,Th=wh=null,r.current=a,E0(a),sh(),xe=S,Ne=v,Tn.transition=m}else r.current=a;if(Ou&&(Ou=!1,hi=r,Vu=d),m=r.pendingLanes,m===0&&(ci=null),Ml(a.stateNode),Zt(r,qe()),s!==null)for(c=r.onRecoverableError,a=0;a<s.length;a++)d=s[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Du)throw Du=!1,r=gd,gd=null,r;return(Vu&1)!==0&&r.tag!==0&&To(),m=r.pendingLanes,(m&1)!==0?r===yd?Ba++:(Ba=0,yd=r):Ba=0,oi(),null}function To(){if(hi!==null){var r=Yr(Vu),s=Tn.transition,a=Ne;try{if(Tn.transition=null,Ne=16>r?16:r,hi===null)var c=!1;else{if(r=hi,hi=null,Vu=0,(xe&6)!==0)throw Error(t(331));var d=xe;for(xe|=4,ae=r.current;ae!==null;){var m=ae,v=m.child;if((ae.flags&16)!==0){var S=m.deletions;if(S!==null){for(var P=0;P<S.length;P++){var j=S[P];for(ae=j;ae!==null;){var K=ae;switch(K.tag){case 0:case 11:case 15:Fa(8,K,m)}var Q=K.child;if(Q!==null)Q.return=K,ae=Q;else for(;ae!==null;){K=ae;var G=K.sibling,ne=K.return;if(hg(K),K===j){ae=null;break}if(G!==null){G.return=ne,ae=G;break}ae=ne}}}var le=m.alternate;if(le!==null){var ce=le.child;if(ce!==null){le.child=null;do{var it=ce.sibling;ce.sibling=null,ce=it}while(ce!==null)}}ae=m}}if((m.subtreeFlags&2064)!==0&&v!==null)v.return=m,ae=v;else e:for(;ae!==null;){if(m=ae,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Fa(9,m,m.return)}var M=m.sibling;if(M!==null){M.return=m.return,ae=M;break e}ae=m.return}}var N=r.current;for(ae=N;ae!==null;){v=ae;var F=v.child;if((v.subtreeFlags&2064)!==0&&F!==null)F.return=v,ae=F;else e:for(v=N;ae!==null;){if(S=ae,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:Pu(9,S)}}catch(he){tt(S,S.return,he)}if(S===v){ae=null;break e}var X=S.sibling;if(X!==null){X.return=S.return,ae=X;break e}ae=S.return}}if(xe=d,oi(),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(Qi,r)}catch{}c=!0}return c}finally{Ne=a,Tn.transition=s}}return!1}function Cg(r,s,a){s=_o(a,s),s=Hm(r,s,1),r=li(r,s,1),s=Wt(),r!==null&&(Xr(r,1,s),Zt(r,s))}function tt(r,s,a){if(r.tag===3)Cg(r,r,a);else for(;s!==null;){if(s.tag===3){Cg(s,r,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ci===null||!ci.has(c))){r=_o(a,r),r=Wm(s,r,1),s=li(s,r,1),r=Wt(),s!==null&&(Xr(s,1,r),Zt(s,r));break}}s=s.return}}function R0(r,s,a){var c=r.pingCache;c!==null&&c.delete(s),s=Wt(),r.pingedLanes|=r.suspendedLanes&a,It===r&&(kt&a)===a&&(yt===4||yt===3&&(kt&130023424)===kt&&500>qe()-md?hs(r,0):pd|=a),Zt(r,s)}function Pg(r,s){s===0&&((r.mode&1)===0?s=1:(s=qs,qs<<=1,(qs&130023424)===0&&(qs=4194304)));var a=Wt();r=Or(r,s),r!==null&&(Xr(r,s,a),Zt(r,a))}function C0(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),Pg(r,a)}function P0(r,s){var a=0;switch(r.tag){case 13:var c=r.stateNode,d=r.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=r.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),Pg(r,a)}var kg;kg=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||Qt.current)Jt=!0;else{if((r.lanes&a)===0&&(s.flags&128)===0)return Jt=!1,m0(r,s,a);Jt=(r.flags&131072)!==0}else Jt=!1,Je&&(s.flags&1048576)!==0&&lm(s,hu,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;Ru(r,s),r=s.pendingProps;var d=uo(s,Lt.current);go(s,a),d=Wh(null,s,c,r,d,a);var m=Gh();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Xt(c)?(m=!0,lu(s)):m=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Uh(s),d.updater=Su,s.stateNode=d,d._reactInternals=s,Zh(s,c,r,a),s=rd(null,s,c,!0,m,a)):(s.tag=0,Je&&m&&kh(s),Ht(null,s,d,a),s=s.child),s;case 16:c=s.elementType;e:{switch(Ru(r,s),r=s.pendingProps,d=c._init,c=d(c._payload),s.type=c,d=s.tag=N0(c),r=Fn(c,r),d){case 0:s=nd(null,s,c,r,a);break e;case 1:s=tg(null,s,c,r,a);break e;case 11:s=Xm(null,s,c,r,a);break e;case 14:s=Jm(null,s,c,Fn(c.type,r),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Fn(c,d),nd(r,s,c,d,a);case 1:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Fn(c,d),tg(r,s,c,d,a);case 3:e:{if(ng(s),r===null)throw Error(t(387));c=s.pendingProps,m=s.memoizedState,d=m.element,ym(r,s),yu(s,c,null,a);var v=s.memoizedState;if(c=v.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){d=_o(Error(t(423)),s),s=rg(r,s,c,a,d);break e}else if(c!==d){d=_o(Error(t(424)),s),s=rg(r,s,c,a,d);break e}else for(cn=ri(s.stateNode.containerInfo.firstChild),un=s,Je=!0,bn=null,a=mm(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(fo(),c===d){s=xr(r,s,a);break e}Ht(r,s,c,a)}s=s.child}return s;case 5:return Em(s),r===null&&Oh(s),c=s.type,d=s.pendingProps,m=r!==null?r.memoizedProps:null,v=d.children,Ih(c,d)?v=null:m!==null&&Ih(c,m)&&(s.flags|=32),eg(r,s),Ht(r,s,v,a),s.child;case 6:return r===null&&Oh(s),null;case 13:return ig(r,s,a);case 4:return jh(s,s.stateNode.containerInfo),c=s.pendingProps,r===null?s.child=po(s,null,c,a):Ht(r,s,c,a),s.child;case 11:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Fn(c,d),Xm(r,s,c,d,a);case 7:return Ht(r,s,s.pendingProps,a),s.child;case 8:return Ht(r,s,s.pendingProps.children,a),s.child;case 12:return Ht(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,d=s.pendingProps,m=s.memoizedProps,v=d.value,He(pu,c._currentValue),c._currentValue=v,m!==null)if(Mn(m.value,v)){if(m.children===d.children&&!Qt.current){s=xr(r,s,a);break e}}else for(m=s.child,m!==null&&(m.return=s);m!==null;){var S=m.dependencies;if(S!==null){v=m.child;for(var P=S.firstContext;P!==null;){if(P.context===c){if(m.tag===1){P=Vr(-1,a&-a),P.tag=2;var j=m.updateQueue;if(j!==null){j=j.shared;var K=j.pending;K===null?P.next=P:(P.next=K.next,K.next=P),j.pending=P}}m.lanes|=a,P=m.alternate,P!==null&&(P.lanes|=a),bh(m.return,a,s),S.lanes|=a;break}P=P.next}}else if(m.tag===10)v=m.type===s.type?null:m.child;else if(m.tag===18){if(v=m.return,v===null)throw Error(t(341));v.lanes|=a,S=v.alternate,S!==null&&(S.lanes|=a),bh(v,a,s),v=m.sibling}else v=m.child;if(v!==null)v.return=m;else for(v=m;v!==null;){if(v===s){v=null;break}if(m=v.sibling,m!==null){m.return=v.return,v=m;break}v=v.return}m=v}Ht(r,s,d.children,a),s=s.child}return s;case 9:return d=s.type,c=s.pendingProps.children,go(s,a),d=En(d),c=c(d),s.flags|=1,Ht(r,s,c,a),s.child;case 14:return c=s.type,d=Fn(c,s.pendingProps),d=Fn(c.type,d),Jm(r,s,c,d,a);case 15:return Ym(r,s,s.type,s.pendingProps,a);case 17:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Fn(c,d),Ru(r,s),s.tag=1,Xt(c)?(r=!0,lu(s)):r=!1,go(s,a),$m(s,c,d),Zh(s,c,d,a),rd(null,s,c,!0,r,a);case 19:return og(r,s,a);case 22:return Zm(r,s,a)}throw Error(t(156,s.tag))};function Ng(r,s){return zs(r,s)}function k0(r,s,a,c){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(r,s,a,c){return new k0(r,s,a,c)}function Id(r){return r=r.prototype,!(!r||!r.isReactComponent)}function N0(r){if(typeof r=="function")return Id(r)?1:0;if(r!=null){if(r=r.$$typeof,r===x)return 11;if(r===Vt)return 14}return 2}function pi(r,s){var a=r.alternate;return a===null?(a=In(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function bu(r,s,a,c,d,m){var v=2;if(c=r,typeof r=="function")Id(r)&&(v=1);else if(typeof r=="string")v=5;else e:switch(r){case D:return fs(a.children,d,m,s);case A:v=8,d|=8;break;case C:return r=In(12,a,s,d|2),r.elementType=C,r.lanes=m,r;case R:return r=In(13,a,s,d),r.elementType=R,r.lanes=m,r;case nt:return r=In(19,a,s,d),r.elementType=nt,r.lanes=m,r;case Be:return Fu(a,d,m,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case k:v=10;break e;case O:v=9;break e;case x:v=11;break e;case Vt:v=14;break e;case xt:v=16,c=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=In(v,a,s,d),s.elementType=r,s.type=c,s.lanes=m,s}function fs(r,s,a,c){return r=In(7,r,c,s),r.lanes=a,r}function Fu(r,s,a,c){return r=In(22,r,c,s),r.elementType=Be,r.lanes=a,r.stateNode={isHidden:!1},r}function Sd(r,s,a){return r=In(6,r,null,s),r.lanes=a,r}function Ad(r,s,a){return s=In(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function D0(r,s,a,c,d){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qr(0),this.expirationTimes=Qr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Rd(r,s,a,c,d,m,v,S,P){return r=new D0(r,s,a,S,P),s===1?(s=1,m===!0&&(s|=8)):s=0,m=In(3,null,null,s),r.current=m,m.stateNode=r,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uh(m),r}function O0(r,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Te,key:c==null?null:""+c,children:r,containerInfo:s,implementation:a}}function Dg(r){if(!r)return si;r=r._reactInternals;e:{if(kn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Xt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(Xt(a))return sm(r,a,s)}return s}function Og(r,s,a,c,d,m,v,S,P){return r=Rd(a,c,!0,r,d,m,v,S,P),r.context=Dg(null),a=r.current,c=Wt(),d=di(a),m=Vr(c,d),m.callback=s??null,li(a,m,d),r.current.lanes=d,Xr(r,d,c),Zt(r,c),r}function Uu(r,s,a,c){var d=s.current,m=Wt(),v=di(d);return a=Dg(a),s.context===null?s.context=a:s.pendingContext=a,s=Vr(m,v),s.payload={element:r},c=c===void 0?null:c,c!==null&&(s.callback=c),r=li(d,s,v),r!==null&&(Bn(r,d,v,m),gu(r,d,v)),v}function ju(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Vg(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function Cd(r,s){Vg(r,s),(r=r.alternate)&&Vg(r,s)}function V0(){return null}var xg=typeof reportError=="function"?reportError:function(r){console.error(r)};function Pd(r){this._internalRoot=r}Bu.prototype.render=Pd.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));Uu(r,s,null,null)},Bu.prototype.unmount=Pd.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;cs(function(){Uu(null,r,null,null)}),s[Pr]=null}};function Bu(r){this._internalRoot=r}Bu.prototype.unstable_scheduleHydration=function(r){if(r){var s=Bl();r={blockedOn:null,target:r,priority:s};for(var a=0;a<Yn.length&&s!==0&&s<Yn[a].priority;a++);Yn.splice(a,0,r),a===0&&ql(r)}};function kd(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function zu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Lg(){}function x0(r,s,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var j=ju(v);m.call(j)}}var v=Og(s,c,r,0,null,!1,!1,"",Lg);return r._reactRootContainer=v,r[Pr]=v.current,Aa(r.nodeType===8?r.parentNode:r),cs(),v}for(;d=r.lastChild;)r.removeChild(d);if(typeof c=="function"){var S=c;c=function(){var j=ju(P);S.call(j)}}var P=Rd(r,0,!1,null,null,!1,!1,"",Lg);return r._reactRootContainer=P,r[Pr]=P.current,Aa(r.nodeType===8?r.parentNode:r),cs(function(){Uu(s,P,a,c)}),P}function $u(r,s,a,c,d){var m=a._reactRootContainer;if(m){var v=m;if(typeof d=="function"){var S=d;d=function(){var P=ju(v);S.call(P)}}Uu(s,v,r,d)}else v=x0(a,s,r,d,c);return ju(v)}Ul=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=Kr(s.pendingLanes);a!==0&&(Jr(s,a|1),Zt(s,qe()),(xe&6)===0&&(wo=qe()+500,oi()))}break;case 13:cs(function(){var c=Or(r,1);if(c!==null){var d=Wt();Bn(c,r,1,d)}}),Cd(r,1)}},Hs=function(r){if(r.tag===13){var s=Or(r,134217728);if(s!==null){var a=Wt();Bn(s,r,134217728,a)}Cd(r,134217728)}},jl=function(r){if(r.tag===13){var s=di(r),a=Or(r,s);if(a!==null){var c=Wt();Bn(a,r,s,c)}Cd(r,s)}},Bl=function(){return Ne},zl=function(r,s){var a=Ne;try{return Ne=r,s()}finally{Ne=a}},Ms=function(r,s,a){switch(s){case"input":if(Xo(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==r&&c.form===r.form){var d=ou(c);if(!d)throw Error(t(90));Ns(c),Xo(c,d)}}}break;case"textarea":xs(r,a);break;case"select":s=a.value,s!=null&&Er(r,!!a.multiple,s,!1)}},qi=Ed,oa=cs;var L0={usingClientEntryPoint:!1,Events:[Pa,ao,ou,Xn,sa,Ed]},za={findFiberByHostInstance:ns,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},M0={bundleType:za.bundleType,version:za.version,rendererPackageName:za.rendererPackageName,rendererConfig:za.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ue.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=ua(r),r===null?null:r.stateNode},findFiberByHostInstance:za.findFiberByHostInstance||V0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qu.isDisabled&&qu.supportsFiber)try{Qi=qu.inject(M0),sn=qu}catch{}}return en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L0,en.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kd(s))throw Error(t(200));return O0(r,s,null,a)},en.createRoot=function(r,s){if(!kd(r))throw Error(t(299));var a=!1,c="",d=xg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=Rd(r,1,!1,null,null,a,!1,c,d),r[Pr]=s.current,Aa(r.nodeType===8?r.parentNode:r),new Pd(s)},en.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=ua(s),r=r===null?null:r.stateNode,r},en.flushSync=function(r){return cs(r)},en.hydrate=function(r,s,a){if(!zu(s))throw Error(t(200));return $u(null,r,s,!0,a)},en.hydrateRoot=function(r,s,a){if(!kd(r))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",v=xg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),s=Og(s,null,r,1,a??null,d,!1,m,v),r[Pr]=s.current,Aa(r),c)for(r=0;r<c.length;r++)a=c[r],d=a._getVersion,d=d(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,d]:s.mutableSourceEagerHydrationData.push(a,d);return new Bu(s)},en.render=function(r,s,a){if(!zu(s))throw Error(t(200));return $u(null,r,s,!1,a)},en.unmountComponentAtNode=function(r){if(!zu(r))throw Error(t(40));return r._reactRootContainer?(cs(function(){$u(null,null,r,!1,function(){r._reactRootContainer=null,r[Pr]=null})}),!0):!1},en.unstable_batchedUpdates=Ed,en.unstable_renderSubtreeIntoContainer=function(r,s,a,c){if(!zu(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return $u(r,s,a,!1,c)},en.version="18.3.1-next-f1338f8080-20240426",en}var $g;function j_(){if($g)return Od.exports;$g=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Od.exports=H0(),Od.exports}var qg;function W0(){if(qg)return Hu;qg=1;var n=j_();return Hu.createRoot=n.createRoot,Hu.hydrateRoot=n.hydrateRoot,Hu}var G0=W0();const K0=F_(G0);j_();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function el(){return el=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},el.apply(this,arguments)}var Ei;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Ei||(Ei={}));const Hg="popstate";function Q0(n){n===void 0&&(n={});function e(i,o){let{pathname:l,search:h,hash:f}=i.location;return Kd("",{pathname:l,search:h,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:uc(o)}return J0(e,t,null,n)}function ot(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Cf(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function X0(){return Math.random().toString(36).substr(2,8)}function Wg(n,e){return{usr:n.state,key:n.key,idx:e}}function Kd(n,e,t,i){return t===void 0&&(t=null),el({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?Uo(e):e,{state:t,key:e&&e.key||i||X0()})}function uc(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Uo(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function J0(n,e,t,i){i===void 0&&(i={});let{window:o=document.defaultView,v5Compat:l=!1}=i,h=o.history,f=Ei.Pop,g=null,_=E();_==null&&(_=0,h.replaceState(el({},h.state,{idx:_}),""));function E(){return(h.state||{idx:null}).idx}function T(){f=Ei.Pop;let b=E(),oe=b==null?null:b-_;_=b,g&&g({action:f,location:$.location,delta:oe})}function I(b,oe){f=Ei.Push;let re=Kd($.location,b,oe);_=E()+1;let ee=Wg(re,_),ue=$.createHref(re);try{h.pushState(ee,"",ue)}catch(Ce){if(Ce instanceof DOMException&&Ce.name==="DataCloneError")throw Ce;o.location.assign(ue)}l&&g&&g({action:f,location:$.location,delta:1})}function U(b,oe){f=Ei.Replace;let re=Kd($.location,b,oe);_=E();let ee=Wg(re,_),ue=$.createHref(re);h.replaceState(ee,"",ue),l&&g&&g({action:f,location:$.location,delta:0})}function z(b){let oe=o.location.origin!=="null"?o.location.origin:o.location.href,re=typeof b=="string"?b:uc(b);return re=re.replace(/ $/,"%20"),ot(oe,"No window.location.(origin|href) available to create URL for href: "+re),new URL(re,oe)}let $={get action(){return f},get location(){return n(o,h)},listen(b){if(g)throw new Error("A history only accepts one active listener");return o.addEventListener(Hg,T),g=b,()=>{o.removeEventListener(Hg,T),g=null}},createHref(b){return e(o,b)},createURL:z,encodeLocation(b){let oe=z(b);return{pathname:oe.pathname,search:oe.search,hash:oe.hash}},push:I,replace:U,go(b){return h.go(b)}};return $}var Gg;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Gg||(Gg={}));function Y0(n,e,t){return t===void 0&&(t="/"),Z0(n,e,t)}function Z0(n,e,t,i){let o=typeof e=="string"?Uo(e):e,l=Pf(o.pathname||"/",t);if(l==null)return null;let h=B_(n);eT(h);let f=null;for(let g=0;f==null&&g<h.length;++g){let _=dT(l);f=uT(h[g],_)}return f}function B_(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let o=(l,h,f)=>{let g={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:h,route:l};g.relativePath.startsWith("/")&&(ot(g.relativePath.startsWith(i),'Absolute route path "'+g.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),g.relativePath=g.relativePath.slice(i.length));let _=Ti([i,g.relativePath]),E=t.concat(g);l.children&&l.children.length>0&&(ot(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+_+'".')),B_(l.children,e,E,_)),!(l.path==null&&!l.index)&&e.push({path:_,score:aT(_,l.index),routesMeta:E})};return n.forEach((l,h)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,h);else for(let g of z_(l.path))o(l,h,g)}),e}function z_(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let h=z_(i.join("/")),f=[];return f.push(...h.map(g=>g===""?l:[l,g].join("/"))),o&&f.push(...h),f.map(g=>n.startsWith("/")&&g===""?"/":g)}function eT(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:lT(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const tT=/^:[\w-]+$/,nT=3,rT=2,iT=1,sT=10,oT=-2,Kg=n=>n==="*";function aT(n,e){let t=n.split("/"),i=t.length;return t.some(Kg)&&(i+=oT),e&&(i+=rT),t.filter(o=>!Kg(o)).reduce((o,l)=>o+(tT.test(l)?nT:l===""?iT:sT),i)}function lT(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function uT(n,e,t){let{routesMeta:i}=n,o={},l="/",h=[];for(let f=0;f<i.length;++f){let g=i[f],_=f===i.length-1,E=l==="/"?e:e.slice(l.length)||"/",T=cT({path:g.relativePath,caseSensitive:g.caseSensitive,end:_},E),I=g.route;if(!T)return null;Object.assign(o,T.params),h.push({params:o,pathname:Ti([l,T.pathname]),pathnameBase:yT(Ti([l,T.pathnameBase])),route:I}),T.pathnameBase!=="/"&&(l=Ti([l,T.pathnameBase]))}return h}function cT(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=hT(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],h=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:i.reduce((_,E,T)=>{let{paramName:I,isOptional:U}=E;if(I==="*"){let $=f[T]||"";h=l.slice(0,l.length-$.length).replace(/(.)\/+$/,"$1")}const z=f[T];return U&&!z?_[I]=void 0:_[I]=(z||"").replace(/%2F/g,"/"),_},{}),pathname:l,pathnameBase:h,pattern:n}}function hT(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Cf(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,f,g)=>(i.push({paramName:f,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function dT(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Cf(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function Pf(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}const fT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pT=n=>fT.test(n);function mT(n,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?Uo(n):n,l;if(t)if(pT(t))l=t;else{if(t.includes("//")){let h=t;t=t.replace(/\/\/+/g,"/"),Cf(!1,"Pathnames cannot have embedded double slashes - normalizing "+(h+" -> "+t))}t.startsWith("/")?l=Qg(t.substring(1),"/"):l=Qg(t,e)}else l=e;return{pathname:l,search:_T(i),hash:vT(o)}}function Qg(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Ld(n,e,t,i){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function gT(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function kf(n,e){let t=gT(n);return e?t.map((i,o)=>o===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function Nf(n,e,t,i){i===void 0&&(i=!1);let o;typeof n=="string"?o=Uo(n):(o=el({},n),ot(!o.pathname||!o.pathname.includes("?"),Ld("?","pathname","search",o)),ot(!o.pathname||!o.pathname.includes("#"),Ld("#","pathname","hash",o)),ot(!o.search||!o.search.includes("#"),Ld("#","search","hash",o)));let l=n===""||o.pathname==="",h=l?"/":o.pathname,f;if(h==null)f=t;else{let T=e.length-1;if(!i&&h.startsWith("..")){let I=h.split("/");for(;I[0]==="..";)I.shift(),T-=1;o.pathname=I.join("/")}f=T>=0?e[T]:"/"}let g=mT(o,f),_=h&&h!=="/"&&h.endsWith("/"),E=(l||h===".")&&t.endsWith("/");return!g.pathname.endsWith("/")&&(_||E)&&(g.pathname+="/"),g}const Ti=n=>n.join("/").replace(/\/\/+/g,"/"),yT=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),_T=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,vT=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function ET(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const $_=["post","put","patch","delete"];new Set($_);const wT=["get",...$_];new Set(wT);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tl(){return tl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},tl.apply(this,arguments)}const Df=Z.createContext(null),TT=Z.createContext(null),bi=Z.createContext(null),Oc=Z.createContext(null),Fi=Z.createContext({outlet:null,matches:[],isDataRoute:!1}),q_=Z.createContext(null);function IT(n,e){let{relative:t}=e===void 0?{}:e;jo()||ot(!1);let{basename:i,navigator:o}=Z.useContext(bi),{hash:l,pathname:h,search:f}=G_(n,{relative:t}),g=h;return i!=="/"&&(g=h==="/"?i:Ti([i,h])),o.createHref({pathname:g,search:f,hash:l})}function jo(){return Z.useContext(Oc)!=null}function dl(){return jo()||ot(!1),Z.useContext(Oc).location}function H_(n){Z.useContext(bi).static||Z.useLayoutEffect(n)}function W_(){let{isDataRoute:n}=Z.useContext(Fi);return n?MT():ST()}function ST(){jo()||ot(!1);let n=Z.useContext(Df),{basename:e,future:t,navigator:i}=Z.useContext(bi),{matches:o}=Z.useContext(Fi),{pathname:l}=dl(),h=JSON.stringify(kf(o,t.v7_relativeSplatPath)),f=Z.useRef(!1);return H_(()=>{f.current=!0}),Z.useCallback(function(_,E){if(E===void 0&&(E={}),!f.current)return;if(typeof _=="number"){i.go(_);return}let T=Nf(_,JSON.parse(h),l,E.relative==="path");n==null&&e!=="/"&&(T.pathname=T.pathname==="/"?e:Ti([e,T.pathname])),(E.replace?i.replace:i.push)(T,E.state,E)},[e,i,h,l,n])}function G_(n,e){let{relative:t}=e===void 0?{}:e,{future:i}=Z.useContext(bi),{matches:o}=Z.useContext(Fi),{pathname:l}=dl(),h=JSON.stringify(kf(o,i.v7_relativeSplatPath));return Z.useMemo(()=>Nf(n,JSON.parse(h),l,t==="path"),[n,h,l,t])}function AT(n,e){return RT(n,e)}function RT(n,e,t,i){jo()||ot(!1);let{navigator:o}=Z.useContext(bi),{matches:l}=Z.useContext(Fi),h=l[l.length-1],f=h?h.params:{};h&&h.pathname;let g=h?h.pathnameBase:"/";h&&h.route;let _=dl(),E;if(e){var T;let b=typeof e=="string"?Uo(e):e;g==="/"||(T=b.pathname)!=null&&T.startsWith(g)||ot(!1),E=b}else E=_;let I=E.pathname||"/",U=I;if(g!=="/"){let b=g.replace(/^\//,"").split("/");U="/"+I.replace(/^\//,"").split("/").slice(b.length).join("/")}let z=Y0(n,{pathname:U}),$=DT(z&&z.map(b=>Object.assign({},b,{params:Object.assign({},f,b.params),pathname:Ti([g,o.encodeLocation?o.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?g:Ti([g,o.encodeLocation?o.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),l,t,i);return e&&$?Z.createElement(Oc.Provider,{value:{location:tl({pathname:"/",search:"",hash:"",state:null,key:"default"},E),navigationType:Ei.Pop}},$):$}function CT(){let n=LT(),e=ET(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Z.createElement(Z.Fragment,null,Z.createElement("h2",null,"Unexpected Application Error!"),Z.createElement("h3",{style:{fontStyle:"italic"}},e),t?Z.createElement("pre",{style:o},t):null,null)}const PT=Z.createElement(CT,null);class kT extends Z.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?Z.createElement(Fi.Provider,{value:this.props.routeContext},Z.createElement(q_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function NT(n){let{routeContext:e,match:t,children:i}=n,o=Z.useContext(Df);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),Z.createElement(Fi.Provider,{value:e},i)}function DT(n,e,t,i){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),n==null){var l;if(!t)return null;if(t.errors)n=t.matches;else if((l=i)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let h=n,f=(o=t)==null?void 0:o.errors;if(f!=null){let E=h.findIndex(T=>T.route.id&&(f==null?void 0:f[T.route.id])!==void 0);E>=0||ot(!1),h=h.slice(0,Math.min(h.length,E+1))}let g=!1,_=-1;if(t&&i&&i.v7_partialHydration)for(let E=0;E<h.length;E++){let T=h[E];if((T.route.HydrateFallback||T.route.hydrateFallbackElement)&&(_=E),T.route.id){let{loaderData:I,errors:U}=t,z=T.route.loader&&I[T.route.id]===void 0&&(!U||U[T.route.id]===void 0);if(T.route.lazy||z){g=!0,_>=0?h=h.slice(0,_+1):h=[h[0]];break}}}return h.reduceRight((E,T,I)=>{let U,z=!1,$=null,b=null;t&&(U=f&&T.route.id?f[T.route.id]:void 0,$=T.route.errorElement||PT,g&&(_<0&&I===0?(bT("route-fallback"),z=!0,b=null):_===I&&(z=!0,b=T.route.hydrateFallbackElement||null)));let oe=e.concat(h.slice(0,I+1)),re=()=>{let ee;return U?ee=$:z?ee=b:T.route.Component?ee=Z.createElement(T.route.Component,null):T.route.element?ee=T.route.element:ee=E,Z.createElement(NT,{match:T,routeContext:{outlet:E,matches:oe,isDataRoute:t!=null},children:ee})};return t&&(T.route.ErrorBoundary||T.route.errorElement||I===0)?Z.createElement(kT,{location:t.location,revalidation:t.revalidation,component:$,error:U,children:re(),routeContext:{outlet:null,matches:oe,isDataRoute:!0}}):re()},null)}var K_=(function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n})(K_||{}),Q_=(function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n})(Q_||{});function OT(n){let e=Z.useContext(Df);return e||ot(!1),e}function VT(n){let e=Z.useContext(TT);return e||ot(!1),e}function xT(n){let e=Z.useContext(Fi);return e||ot(!1),e}function X_(n){let e=xT(),t=e.matches[e.matches.length-1];return t.route.id||ot(!1),t.route.id}function LT(){var n;let e=Z.useContext(q_),t=VT(),i=X_();return e!==void 0?e:(n=t.errors)==null?void 0:n[i]}function MT(){let{router:n}=OT(K_.UseNavigateStable),e=X_(Q_.UseNavigateStable),t=Z.useRef(!1);return H_(()=>{t.current=!0}),Z.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?n.navigate(o):n.navigate(o,tl({fromRouteId:e},l)))},[n,e])}const Xg={};function bT(n,e,t){Xg[n]||(Xg[n]=!0)}function FT(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function _s(n){let{to:e,replace:t,state:i,relative:o}=n;jo()||ot(!1);let{future:l,static:h}=Z.useContext(bi),{matches:f}=Z.useContext(Fi),{pathname:g}=dl(),_=W_(),E=Nf(e,kf(f,l.v7_relativeSplatPath),g,o==="path"),T=JSON.stringify(E);return Z.useEffect(()=>_(JSON.parse(T),{replace:t,state:i,relative:o}),[_,T,o,t,i]),null}function ps(n){ot(!1)}function UT(n){let{basename:e="/",children:t=null,location:i,navigationType:o=Ei.Pop,navigator:l,static:h=!1,future:f}=n;jo()&&ot(!1);let g=e.replace(/^\/*/,"/"),_=Z.useMemo(()=>({basename:g,navigator:l,static:h,future:tl({v7_relativeSplatPath:!1},f)}),[g,f,l,h]);typeof i=="string"&&(i=Uo(i));let{pathname:E="/",search:T="",hash:I="",state:U=null,key:z="default"}=i,$=Z.useMemo(()=>{let b=Pf(E,g);return b==null?null:{location:{pathname:b,search:T,hash:I,state:U,key:z},navigationType:o}},[g,E,T,I,U,z,o]);return $==null?null:Z.createElement(bi.Provider,{value:_},Z.createElement(Oc.Provider,{children:t,value:$}))}function jT(n){let{children:e,location:t}=n;return AT(Qd(e),t)}new Promise(()=>{});function Qd(n,e){e===void 0&&(e=[]);let t=[];return Z.Children.forEach(n,(i,o)=>{if(!Z.isValidElement(i))return;let l=[...e,o];if(i.type===Z.Fragment){t.push.apply(t,Qd(i.props.children,l));return}i.type!==ps&&ot(!1),!i.props.index||!i.props.children||ot(!1);let h={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(h.children=Qd(i.props.children,l)),t.push(h)}),t}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xd(){return Xd=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Xd.apply(this,arguments)}function BT(n,e){if(n==null)return{};var t={},i=Object.keys(n),o,l;for(l=0;l<i.length;l++)o=i[l],!(e.indexOf(o)>=0)&&(t[o]=n[o]);return t}function zT(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function $T(n,e){return n.button===0&&(!e||e==="_self")&&!zT(n)}const qT=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],HT="6";try{window.__reactRouterVersion=HT}catch{}const WT="startTransition",Jg=z0[WT];function GT(n){let{basename:e,children:t,future:i,window:o}=n,l=Z.useRef();l.current==null&&(l.current=Q0({window:o,v5Compat:!0}));let h=l.current,[f,g]=Z.useState({action:h.action,location:h.location}),{v7_startTransition:_}=i||{},E=Z.useCallback(T=>{_&&Jg?Jg(()=>g(T)):g(T)},[g,_]);return Z.useLayoutEffect(()=>h.listen(E),[h,E]),Z.useEffect(()=>FT(i),[i]),Z.createElement(UT,{basename:e,children:t,location:f.location,navigationType:f.action,navigator:h,future:i})}const KT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",QT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,nN=Z.forwardRef(function(e,t){let{onClick:i,relative:o,reloadDocument:l,replace:h,state:f,target:g,to:_,preventScrollReset:E,viewTransition:T}=e,I=BT(e,qT),{basename:U}=Z.useContext(bi),z,$=!1;if(typeof _=="string"&&QT.test(_)&&(z=_,KT))try{let ee=new URL(window.location.href),ue=_.startsWith("//")?new URL(ee.protocol+_):new URL(_),Ce=Pf(ue.pathname,U);ue.origin===ee.origin&&Ce!=null?_=Ce+ue.search+ue.hash:$=!0}catch{}let b=IT(_,{relative:o}),oe=XT(_,{replace:h,state:f,target:g,preventScrollReset:E,relative:o,viewTransition:T});function re(ee){i&&i(ee),ee.defaultPrevented||oe(ee)}return Z.createElement("a",Xd({},I,{href:z||b,onClick:$||l?i:re,ref:t,target:g}))});var Yg;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(Yg||(Yg={}));var Zg;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(Zg||(Zg={}));function XT(n,e){let{target:t,replace:i,state:o,preventScrollReset:l,relative:h,viewTransition:f}=e===void 0?{}:e,g=W_(),_=dl(),E=G_(n,{relative:h});return Z.useCallback(T=>{if($T(T,t)){T.preventDefault();let I=i!==void 0?i:uc(_)===uc(E);g(n,{replace:I,state:o,preventScrollReset:l,relative:h,viewTransition:f})}},[_,g,E,i,o,t,n,l,h,f])}const JT="modulepreload",YT=function(n){return"/"+n},ey={},Vc=function(e,t,i){let o=Promise.resolve();if(t&&t.length>0){let h=function(_){return Promise.all(_.map(E=>Promise.resolve(E).then(T=>({status:"fulfilled",value:T}),T=>({status:"rejected",reason:T}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),g=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));o=h(t.map(_=>{if(_=YT(_),_ in ey)return;ey[_]=!0;const E=_.endsWith(".css"),T=E?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${_}"]${T}`))return;const I=document.createElement("link");if(I.rel=E?"stylesheet":JT,E||(I.as="script"),I.crossOrigin="",I.href=_,g&&I.setAttribute("nonce",g),document.head.appendChild(I),E)return new Promise((U,z)=>{I.addEventListener("load",U),I.addEventListener("error",()=>z(new Error(`Unable to preload CSS for ${_}`)))})}))}function l(h){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=h,window.dispatchEvent(f),!f.defaultPrevented)throw h}return o.then(h=>{for(const f of h||[])f.status==="rejected"&&l(f.reason);return e().catch(l)})},ZT=()=>{};var ty={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},eI=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],h=n[t++],f=n[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(g>>10)),e[i++]=String.fromCharCode(56320+(g&1023))}else{const l=n[t++],h=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},Y_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],h=o+1<n.length,f=h?n[o+1]:0,g=o+2<n.length,_=g?n[o+2]:0,E=l>>2,T=(l&3)<<4|f>>4;let I=(f&15)<<2|_>>6,U=_&63;g||(U=64,h||(I=64)),i.push(t[E],t[T],t[I],t[U])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(J_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):eI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],f=o<n.length?t[n.charAt(o)]:0;++o;const _=o<n.length?t[n.charAt(o)]:64;++o;const T=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||f==null||_==null||T==null)throw new tI;const I=l<<2|f>>4;if(i.push(I),_!==64){const U=f<<4&240|_>>2;if(i.push(U),T!==64){const z=_<<6&192|T;i.push(z)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class tI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nI=function(n){const e=J_(n);return Y_.encodeByteArray(e,!0)},cc=function(n){return nI(n).replace(/\./g,"")},Z_=function(n){try{return Y_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function rI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const iI=()=>rI().__FIREBASE_DEFAULTS__,sI=()=>{if(typeof process>"u"||typeof ty>"u")return;const n=ty.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},oI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Z_(n[1]);return e&&JSON.parse(e)},xc=()=>{try{return ZT()||iI()||sI()||oI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ev=n=>{var e,t;return(t=(e=xc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Of=n=>{const e=ev(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},tv=()=>{var n;return(n=xc())===null||n===void 0?void 0:n.config},nv=n=>{var e;return(e=xc())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Ui(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Lc(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function rv(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[cc(JSON.stringify(t)),cc(JSON.stringify(h)),""].join(".")}const Ka={};function lI(){const n={prod:[],emulator:[]};for(const e of Object.keys(Ka))Ka[e]?n.emulator.push(e):n.prod.push(e);return n}function uI(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let ny=!1;function Mc(n,e){if(typeof window>"u"||typeof document>"u"||!Ui(window.location.host)||Ka[n]===e||Ka[n]||ny)return;Ka[n]=e;function t(I){return`__firebase__banner__${I}`}const i="__firebase__banner",l=lI().prod.length>0;function h(){const I=document.getElementById(i);I&&I.remove()}function f(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function g(I,U){I.setAttribute("width","24"),I.setAttribute("id",U),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function _(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{ny=!0,h()},I}function E(I,U){I.setAttribute("id",U),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function T(){const I=uI(i),U=t("text"),z=document.getElementById(U)||document.createElement("span"),$=t("learnmore"),b=document.getElementById($)||document.createElement("a"),oe=t("preprendIcon"),re=document.getElementById(oe)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const ee=I.element;f(ee),E(b,$);const ue=_();g(re,oe),ee.append(re,z,b,ue),document.body.appendChild(ee)}l?(z.innerText="Preview backend disconnected.",re.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(re.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,z.innerText="Preview backend running in this workspace."),z.setAttribute("id",U)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zt())}function hI(){var n;const e=(n=xc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function dI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function fI(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function pI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mI(){const n=zt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function gI(){return!hI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yI(){try{return typeof indexedDB=="object"}catch{return!1}}function _I(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI="FirebaseError";class Kn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=vI,Object.setPrototypeOf(this,Kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fl.prototype.create)}}class fl{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?EI(l,i):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new Kn(o,f,i)}}function EI(n,e){return n.replace(wI,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const wI=/\{\$([^}]+)}/g;function TI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Es(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],h=e[o];if(ry(l)&&ry(h)){if(!Es(l,h))return!1}else if(l!==h)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function ry(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function II(n,e){const t=new SI(n,e);return t.subscribe.bind(t)}class SI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");AI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Md),o.error===void 0&&(o.error=Md),o.complete===void 0&&(o.complete=Md);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Md(){}/**
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
 */function vt(n){return n&&n._delegate?n._delegate:n}class jr{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ms="[DEFAULT]";/**
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
 */class RI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new aI;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(PI(e))try{this.getOrInitializeService({instanceIdentifier:ms})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=ms){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ms){return this.instances.has(e)}getOptions(e=ms){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&h.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:CI(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ms){return this.component?this.component.multipleInstances?e:ms:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function CI(n){return n===ms?void 0:n}function PI(n){return n.instantiationMode==="EAGER"}/**
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
 */class kI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new RI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Pe||(Pe={}));const NI={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},DI=Pe.INFO,OI={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},VI=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=OI[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vf{constructor(e){this.name=e,this._logLevel=DI,this._logHandler=VI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?NI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const xI=(n,e)=>e.some(t=>n instanceof t);let iy,sy;function LI(){return iy||(iy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function MI(){return sy||(sy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const iv=new WeakMap,Jd=new WeakMap,sv=new WeakMap,bd=new WeakMap,xf=new WeakMap;function bI(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",h)},l=()=>{t(Ii(n.result)),o()},h=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&iv.set(t,n)}).catch(()=>{}),xf.set(e,n),e}function FI(n){if(Jd.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",h),n.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",h),n.addEventListener("abort",h)});Jd.set(n,e)}let Yd={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Jd.get(n);if(e==="objectStoreNames")return n.objectStoreNames||sv.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ii(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function UI(n){Yd=n(Yd)}function jI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Fd(this),e,...t);return sv.set(i,e.sort?e.sort():[e]),Ii(i)}:MI().includes(n)?function(...e){return n.apply(Fd(this),e),Ii(iv.get(this))}:function(...e){return Ii(n.apply(Fd(this),e))}}function BI(n){return typeof n=="function"?jI(n):(n instanceof IDBTransaction&&FI(n),xI(n,LI())?new Proxy(n,Yd):n)}function Ii(n){if(n instanceof IDBRequest)return bI(n);if(bd.has(n))return bd.get(n);const e=BI(n);return e!==n&&(bd.set(n,e),xf.set(e,n)),e}const Fd=n=>xf.get(n);function zI(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const h=indexedDB.open(n,e),f=Ii(h);return i&&h.addEventListener("upgradeneeded",g=>{i(Ii(h.result),g.oldVersion,g.newVersion,Ii(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),f.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),f}const $I=["get","getKey","getAll","getAllKeys","count"],qI=["put","add","delete","clear"],Ud=new Map;function oy(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ud.get(e))return Ud.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=qI.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||$I.includes(t)))return;const l=async function(h,...f){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return i&&(_=_.index(f.shift())),(await Promise.all([_[t](...f),o&&g.done]))[0]};return Ud.set(e,l),l}UI(n=>({...n,get:(e,t,i)=>oy(e,t)||n.get(e,t,i),has:(e,t)=>!!oy(e,t)||n.has(e,t)}));/**
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
 */class HI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(WI(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function WI(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zd="@firebase/app",ay="0.13.2";/**
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
 */const Br=new Vf("@firebase/app"),GI="@firebase/app-compat",KI="@firebase/analytics-compat",QI="@firebase/analytics",XI="@firebase/app-check-compat",JI="@firebase/app-check",YI="@firebase/auth",ZI="@firebase/auth-compat",eS="@firebase/database",tS="@firebase/data-connect",nS="@firebase/database-compat",rS="@firebase/functions",iS="@firebase/functions-compat",sS="@firebase/installations",oS="@firebase/installations-compat",aS="@firebase/messaging",lS="@firebase/messaging-compat",uS="@firebase/performance",cS="@firebase/performance-compat",hS="@firebase/remote-config",dS="@firebase/remote-config-compat",fS="@firebase/storage",pS="@firebase/storage-compat",mS="@firebase/firestore",gS="@firebase/ai",yS="@firebase/firestore-compat",_S="firebase",vS="11.10.0";/**
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
 */const ef="[DEFAULT]",ES={[Zd]:"fire-core",[GI]:"fire-core-compat",[QI]:"fire-analytics",[KI]:"fire-analytics-compat",[JI]:"fire-app-check",[XI]:"fire-app-check-compat",[YI]:"fire-auth",[ZI]:"fire-auth-compat",[eS]:"fire-rtdb",[tS]:"fire-data-connect",[nS]:"fire-rtdb-compat",[rS]:"fire-fn",[iS]:"fire-fn-compat",[sS]:"fire-iid",[oS]:"fire-iid-compat",[aS]:"fire-fcm",[lS]:"fire-fcm-compat",[uS]:"fire-perf",[cS]:"fire-perf-compat",[hS]:"fire-rc",[dS]:"fire-rc-compat",[fS]:"fire-gcs",[pS]:"fire-gcs-compat",[mS]:"fire-fst",[yS]:"fire-fst-compat",[gS]:"fire-vertex","fire-js":"fire-js",[_S]:"fire-js-all"};/**
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
 */const hc=new Map,wS=new Map,tf=new Map;function ly(n,e){try{n.container.addComponent(e)}catch(t){Br.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Pi(n){const e=n.name;if(tf.has(e))return Br.debug(`There were multiple attempts to register component ${e}.`),!1;tf.set(e,n);for(const t of hc.values())ly(t,n);for(const t of wS.values())ly(t,n);return!0}function ml(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function nn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const TS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Si=new fl("app","Firebase",TS);/**
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
 */class IS{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new jr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Si.create("app-deleted",{appName:this._name})}}/**
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
 */const Ss=vS;function ov(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:ef,automaticDataCollectionEnabled:!0},e),o=i.name;if(typeof o!="string"||!o)throw Si.create("bad-app-name",{appName:String(o)});if(t||(t=tv()),!t)throw Si.create("no-options");const l=hc.get(o);if(l){if(Es(t,l.options)&&Es(i,l.config))return l;throw Si.create("duplicate-app",{appName:o})}const h=new kI(o);for(const g of tf.values())h.addComponent(g);const f=new IS(t,i,h);return hc.set(o,f),f}function bc(n=ef){const e=hc.get(n);if(!e&&n===ef&&tv())return ov();if(!e)throw Si.create("no-app",{appName:n});return e}function Rn(n,e,t){var i;let o=(i=ES[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&f.push("and"),h&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Br.warn(f.join(" "));return}Pi(new jr(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const SS="firebase-heartbeat-database",AS=1,nl="firebase-heartbeat-store";let jd=null;function av(){return jd||(jd=zI(SS,AS,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(nl)}catch(t){console.warn(t)}}}}).catch(n=>{throw Si.create("idb-open",{originalErrorMessage:n.message})})),jd}async function RS(n){try{const t=(await av()).transaction(nl),i=await t.objectStore(nl).get(lv(n));return await t.done,i}catch(e){if(e instanceof Kn)Br.warn(e.message);else{const t=Si.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Br.warn(t.message)}}}async function uy(n,e){try{const i=(await av()).transaction(nl,"readwrite");await i.objectStore(nl).put(e,lv(n)),await i.done}catch(t){if(t instanceof Kn)Br.warn(t.message);else{const i=Si.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Br.warn(i.message)}}}function lv(n){return`${n.name}!${n.options.appId}`}/**
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
 */const CS=1024,PS=30;class kS{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new DS(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=cy();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>PS){const h=OS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Br.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=cy(),{heartbeatsToSend:i,unsentEntries:o}=NS(this._heartbeatsCache.heartbeats),l=cc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Br.warn(t),""}}}function cy(){return new Date().toISOString().substring(0,10)}function NS(n,e=CS){const t=[];let i=n.slice();for(const o of n){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),hy(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),hy(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class DS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yI()?_I().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await RS(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return uy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return uy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function hy(n){return cc(JSON.stringify({version:2,heartbeats:n})).length}function OS(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function VS(n){Pi(new jr("platform-logger",e=>new HI(e),"PRIVATE")),Pi(new jr("heartbeat",e=>new kS(e),"PRIVATE")),Rn(Zd,ay,n),Rn(Zd,ay,"esm2017"),Rn("fire-js","")}VS("");var xS="firebase",LS="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rn(xS,LS,"app");function Lf(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function uv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const MS=uv,cv=new fl("auth","Firebase",uv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc=new Vf("@firebase/auth");function bS(n,...e){dc.logLevel<=Pe.WARN&&dc.warn(`Auth (${Ss}): ${n}`,...e)}function Zu(n,...e){dc.logLevel<=Pe.ERROR&&dc.error(`Auth (${Ss}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(n,...e){throw bf(n,...e)}function Hn(n,...e){return bf(n,...e)}function Mf(n,e,t){const i=Object.assign(Object.assign({},MS()),{[e]:t});return new fl("auth","Firebase",i).create(e,{appName:n.name})}function Ai(n){return Mf(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hv(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&fr(n,"argument-error"),Mf(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function bf(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return cv.create(n,...e)}function ve(n,e,...t){if(!n)throw bf(e,...t)}function br(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Zu(e),new Error(e)}function zr(n,e){n||br(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function FS(){return dy()==="http:"||dy()==="https:"}function dy(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function US(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(FS()||fI()||"connection"in navigator)?navigator.onLine:!0}function jS(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,t){this.shortDelay=e,this.longDelay=t,zr(t>e,"Short delay should be less than long delay!"),this.isMobile=cI()||pI()}get(){return US()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(n,e){zr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;br("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;br("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;br("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],$S=new gl(3e4,6e4);function Uf(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Bo(n,e,t,i,o={}){return fv(n,o,async()=>{let l={},h={};i&&(e==="GET"?h=i:l={body:JSON.stringify(i)});const f=pl(Object.assign({key:n.config.apiKey},h)).slice(1),g=await n._getAdditionalHeaders();g["Content-Type"]="application/json",n.languageCode&&(g["X-Firebase-Locale"]=n.languageCode);const _=Object.assign({method:e,headers:g},l);return dI()||(_.referrerPolicy="no-referrer"),n.emulatorConfig&&Ui(n.emulatorConfig.host)&&(_.credentials="include"),dv.fetch()(await pv(n,n.config.apiHost,t,f),_)})}async function fv(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},BS),e);try{const o=new HS(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Wu(n,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[g,_]=f.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wu(n,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Wu(n,"email-already-in-use",h);if(g==="USER_DISABLED")throw Wu(n,"user-disabled",h);const E=i[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw Mf(n,E,_);fr(n,E)}}catch(o){if(o instanceof Kn)throw o;fr(n,"network-request-failed",{message:String(o)})}}async function qS(n,e,t,i,o={}){const l=await Bo(n,e,t,i,o);return"mfaPendingCredential"in l&&fr(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function pv(n,e,t,i){const o=`${e}${t}?${i}`,l=n,h=l.config.emulator?Ff(n.config,o):`${n.config.apiScheme}://${o}`;return zS.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}class HS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Hn(this.auth,"network-request-failed")),$S.get())})}}function Wu(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=Hn(n,e,i);return o.customData._tokenResponse=t,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WS(n,e){return Bo(n,"POST","/v1/accounts:delete",e)}async function fc(n,e){return Bo(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function GS(n,e=!1){const t=vt(n),i=await t.getIdToken(e),o=jf(i);ve(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:Qa(Bd(o.auth_time)),issuedAtTime:Qa(Bd(o.iat)),expirationTime:Qa(Bd(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Bd(n){return Number(n)*1e3}function jf(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Zu("JWT malformed, contained fewer than 3 sections"),null;try{const o=Z_(t);return o?JSON.parse(o):(Zu("Failed to decode base64 JWT payload"),null)}catch(o){return Zu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function fy(n){const e=jf(n);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rl(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Kn&&KS(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function KS({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qa(this.lastLoginAt),this.creationTime=Qa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function pc(n){var e;const t=n.auth,i=await n.getIdToken(),o=await rl(n,fc(t,{idToken:i}));ve(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?mv(l.providerUserInfo):[],f=JS(n.providerData,h),g=n.isAnonymous,_=!(n.email&&l.passwordHash)&&!(f!=null&&f.length),E=g?_:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new rf(l.createdAt,l.lastLoginAt),isAnonymous:E};Object.assign(n,T)}async function XS(n){const e=vt(n);await pc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function JS(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function mv(n){return n.map(e=>{var{providerId:t}=e,i=Lf(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YS(n,e){const t=await fv(n,{},async()=>{const i=pl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,h=await pv(n,o,"/v1/token",`key=${l}`),f=await n._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:f,body:i};return n.emulatorConfig&&Ui(n.emulatorConfig.host)&&(g.credentials="include"),dv.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ZS(n,e){return Bo(n,"POST","/v2/accounts:revokeToken",Uf(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const t=fy(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await YS(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,h=new Co;return i&&(ve(typeof i=="string","internal-error",{appName:e}),h.refreshToken=i),o&&(ve(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(ve(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Co,this.toJSON())}_performRefresh(){return br("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(n,e){ve(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class zn{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=Lf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new QS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new rf(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await rl(this,this.stsTokenManager.getToken(this.auth,e));return ve(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return GS(this,e)}reload(){return XS(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new zn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await pc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(nn(this.auth.app))return Promise.reject(Ai(this.auth));const e=await this.getIdToken();return await rl(this,WS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,h,f,g,_,E;const T=(i=t.displayName)!==null&&i!==void 0?i:void 0,I=(o=t.email)!==null&&o!==void 0?o:void 0,U=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,z=(h=t.photoURL)!==null&&h!==void 0?h:void 0,$=(f=t.tenantId)!==null&&f!==void 0?f:void 0,b=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,oe=(_=t.createdAt)!==null&&_!==void 0?_:void 0,re=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:ee,emailVerified:ue,isAnonymous:Ce,providerData:Te,stsTokenManager:D}=t;ve(ee&&D,e,"internal-error");const A=Co.fromJSON(this.name,D);ve(typeof ee=="string",e,"internal-error"),gi(T,e.name),gi(I,e.name),ve(typeof ue=="boolean",e,"internal-error"),ve(typeof Ce=="boolean",e,"internal-error"),gi(U,e.name),gi(z,e.name),gi($,e.name),gi(b,e.name),gi(oe,e.name),gi(re,e.name);const C=new zn({uid:ee,auth:e,email:I,emailVerified:ue,displayName:T,isAnonymous:Ce,photoURL:z,phoneNumber:U,tenantId:$,stsTokenManager:A,createdAt:oe,lastLoginAt:re});return Te&&Array.isArray(Te)&&(C.providerData=Te.map(k=>Object.assign({},k))),b&&(C._redirectEventId=b),C}static async _fromIdTokenResponse(e,t,i=!1){const o=new Co;o.updateFromServerResponse(t);const l=new zn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await pc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];ve(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?mv(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new Co;f.updateFromIdToken(i);const g=new zn({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new rf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(g,_),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py=new Map;function Fr(n){zr(n instanceof Function,"Expected a class definition");let e=py.get(n);return e?(zr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,py.set(n,e),e)}/**
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
 */class gv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}gv.type="NONE";const my=gv;/**
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
 */function ec(n,e,t){return`firebase:${n}:${e}:${t}`}class Po{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=ec(this.userKey,o.apiKey,l),this.fullPersistenceKey=ec("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await fc(this.auth,{idToken:e}).catch(()=>{});return t?zn._fromGetAccountInfoResponse(this.auth,t,e):null}return zn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Po(Fr(my),e,i);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let l=o[0]||Fr(my);const h=ec(i,e.config.apiKey,e.name);let f=null;for(const _ of t)try{const E=await _._get(h);if(E){let T;if(typeof E=="string"){const I=await fc(e,{idToken:E}).catch(()=>{});if(!I)break;T=await zn._fromGetAccountInfoResponse(e,I,E)}else T=zn._fromJSON(e,E);_!==l&&(f=T),l=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new Po(l,e,i):(l=g[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async _=>{if(_!==l)try{await _._remove(h)}catch{}})),new Po(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gy(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ev(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Tv(e))return"Blackberry";if(Iv(e))return"Webos";if(_v(e))return"Safari";if((e.includes("chrome/")||vv(e))&&!e.includes("edge/"))return"Chrome";if(wv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function yv(n=zt()){return/firefox\//i.test(n)}function _v(n=zt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vv(n=zt()){return/crios\//i.test(n)}function Ev(n=zt()){return/iemobile/i.test(n)}function wv(n=zt()){return/android/i.test(n)}function Tv(n=zt()){return/blackberry/i.test(n)}function Iv(n=zt()){return/webos/i.test(n)}function Bf(n=zt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function eA(n=zt()){var e;return Bf(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tA(){return mI()&&document.documentMode===10}function Sv(n=zt()){return Bf(n)||wv(n)||Iv(n)||Tv(n)||/windows phone/i.test(n)||Ev(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(n,e=[]){let t;switch(n){case"Browser":t=gy(zt());break;case"Worker":t=`${gy(zt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ss}/${i}`}/**
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
 */class nA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((h,f)=>{try{const g=e(l);h(g)}catch(g){f(g)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function rA(n,e={}){return Bo(n,"GET","/v2/passwordPolicy",Uf(n,e))}/**
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
 */const iA=6;class sA{constructor(e){var t,i,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:iA,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,h,f;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(i=g.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(l=g.containsUppercaseLetter)!==null&&l!==void 0?l:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(f=g.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),g}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yy(this),this.idTokenSubscription=new yy(this),this.beforeStateQueue=new nA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Fr(t)),this._initializationPromise=this.queue(async()=>{var i,o,l;if(!this._deleted&&(this.persistenceManager=await Po.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await fc(this,{idToken:e}),i=await zn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(nn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===f)&&(g!=null&&g.user)&&(o=g.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await pc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(nn(this.app))return Promise.reject(Ai(this));const t=e?vt(e):null;return t&&ve(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return nn(this.app)?Promise.reject(Ai(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return nn(this.app)?Promise.reject(Ai(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rA(this),t=new sA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new fl("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await ZS(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Fr(e)||this._popupRedirectResolver;ve(t,this,"argument-error"),this.redirectPersistenceManager=await Po.create(this,[Fr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,i,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Av(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(nn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&bS(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function zo(n){return vt(n)}class yy{constructor(e){this.auth=e,this.observer=null,this.addObserver=II(t=>this.observer=t)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function aA(n){zf=n}function lA(n){return zf.loadJS(n)}function uA(){return zf.gapiScript}function cA(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hA(n,e){const t=ml(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Es(l,e??{}))return o;fr(o,"already-initialized")}return t.initialize({options:e})}function dA(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Fr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function fA(n,e,t){const i=zo(n);ve(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=Rv(e),{host:h,port:f}=pA(e),g=f===null?"":`:${f}`,_={url:`${l}//${h}${g}/`},E=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){ve(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),ve(Es(_,i.config.emulator)&&Es(E,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=_,i.emulatorConfig=E,i.settings.appVerificationDisabledForTesting=!0,Ui(h)?(Lc(`${l}//${h}${g}`),Mc("Auth",!0)):mA()}function Rv(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function pA(n){const e=Rv(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:_y(i.substr(l.length+1))}}else{const[l,h]=i.split(":");return{host:l,port:_y(h)}}}function _y(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function mA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return br("not implemented")}_getIdTokenResponse(e){return br("not implemented")}_linkToIdToken(e,t){return br("not implemented")}_getReauthenticationResolver(e){return br("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ko(n,e){return qS(n,"POST","/v1/accounts:signInWithIdp",Uf(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA="http://localhost";class ws extends Cv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ws(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):fr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=Lf(t,["providerId","signInMethod"]);if(!i||!o)return null;const h=new ws(i,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return ko(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,ko(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ko(e,t)}buildRequest(){const e={requestUri:gA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=pl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class yl extends Fc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi extends yl{constructor(){super("facebook.com")}static credential(e){return ws._fromParams({providerId:yi.PROVIDER_ID,signInMethod:yi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yi.credentialFromTaggedObject(e)}static credentialFromError(e){return yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yi.credential(e.oauthAccessToken)}catch{return null}}}yi.FACEBOOK_SIGN_IN_METHOD="facebook.com";yi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr extends yl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ws._fromParams({providerId:Mr.PROVIDER_ID,signInMethod:Mr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Mr.credentialFromTaggedObject(e)}static credentialFromError(e){return Mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Mr.credential(t,i)}catch{return null}}}Mr.GOOGLE_SIGN_IN_METHOD="google.com";Mr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i extends yl{constructor(){super("github.com")}static credential(e){return ws._fromParams({providerId:_i.PROVIDER_ID,signInMethod:_i.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _i.credentialFromTaggedObject(e)}static credentialFromError(e){return _i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _i.credential(e.oauthAccessToken)}catch{return null}}}_i.GITHUB_SIGN_IN_METHOD="github.com";_i.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi extends yl{constructor(){super("twitter.com")}static credential(e,t){return ws._fromParams({providerId:vi.PROVIDER_ID,signInMethod:vi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return vi.credentialFromTaggedObject(e)}static credentialFromError(e){return vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return vi.credential(t,i)}catch{return null}}}vi.TWITTER_SIGN_IN_METHOD="twitter.com";vi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await zn._fromIdTokenResponse(e,i,o),h=vy(i);return new Oo({user:l,providerId:h,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=vy(i);return new Oo({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function vy(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc extends Kn{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,mc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new mc(e,t,i,o)}}function Pv(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?mc._fromErrorAndOperation(n,l,e,i):l})}async function yA(n,e,t=!1){const i=await rl(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Oo._forOperation(n,"link",i)}/**
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
 */async function _A(n,e,t=!1){const{auth:i}=n;if(nn(i.app))return Promise.reject(Ai(i));const o="reauthenticate";try{const l=await rl(n,Pv(i,o,e,n),t);ve(l.idToken,i,"internal-error");const h=jf(l.idToken);ve(h,i,"internal-error");const{sub:f}=h;return ve(n.uid===f,i,"user-mismatch"),Oo._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&fr(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vA(n,e,t=!1){if(nn(n.app))return Promise.reject(Ai(n));const i="signIn",o=await Pv(n,i,e),l=await Oo._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EA(n,e){return vt(n).setPersistence(e)}function wA(n,e,t,i){return vt(n).onIdTokenChanged(e,t,i)}function TA(n,e,t){return vt(n).beforeAuthStateChanged(e,t)}function IA(n,e,t,i){return vt(n).onAuthStateChanged(e,t,i)}function SA(n){return vt(n).signOut()}const gc="__sak";/**
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
 */class kv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(gc,"1"),this.storage.removeItem(gc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA=1e3,RA=10;class Nv extends kv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Sv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,g)=>{this.notifyListeners(h,g)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(i);!t&&this.localCache[i]===h||this.notifyListeners(i,h)},l=this.storage.getItem(i);tA()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,RA):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},AA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Nv.type="LOCAL";const Dv=Nv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov extends kv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ov.type="SESSION";const Vv=Ov;/**
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
 */function CA(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Uc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Uc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(h).map(async _=>_(t.origin,l)),g=await CA(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Uc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class PA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,g)=>{const _=$f("",20);o.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},i);h={messageChannel:o,onMessage(T){const I=T;if(I.data.eventId===_)switch(I.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(I.data.response);break;default:clearTimeout(E),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(){return window}function kA(n){ar().location.href=n}/**
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
 */function xv(){return typeof ar().WorkerGlobalScope<"u"&&typeof ar().importScripts=="function"}async function NA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function DA(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function OA(){return xv()?self:null}/**
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
 */const Lv="firebaseLocalStorageDb",VA=1,yc="firebaseLocalStorage",Mv="fbase_key";class _l{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function jc(n,e){return n.transaction([yc],e?"readwrite":"readonly").objectStore(yc)}function xA(){const n=indexedDB.deleteDatabase(Lv);return new _l(n).toPromise()}function sf(){const n=indexedDB.open(Lv,VA);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(yc,{keyPath:Mv})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(yc)?e(i):(i.close(),await xA(),e(await sf()))})})}async function Ey(n,e,t){const i=jc(n,!0).put({[Mv]:e,value:t});return new _l(i).toPromise()}async function LA(n,e){const t=jc(n,!1).get(e),i=await new _l(t).toPromise();return i===void 0?null:i.value}function wy(n,e){const t=jc(n,!0).delete(e);return new _l(t).toPromise()}const MA=800,bA=3;class bv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>bA)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Uc._getInstance(OA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await NA(),!this.activeServiceWorker)return;this.sender=new PA(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||DA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sf();return await Ey(e,gc,"1"),await wy(e,gc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Ey(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>LA(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>wy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=jc(o,!1).getAll();return new _l(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),MA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bv.type="LOCAL";const FA=bv;new gl(3e4,6e4);/**
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
 */function qf(n,e){return e?Fr(e):(ve(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Hf extends Cv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ko(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ko(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ko(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function UA(n){return vA(n.auth,new Hf(n),n.bypassAuthState)}function jA(n){const{auth:e,user:t}=n;return ve(t,e,"internal-error"),_A(t,new Hf(n),n.bypassAuthState)}async function BA(n){const{auth:e,user:t}=n;return ve(t,e,"internal-error"),yA(t,new Hf(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return UA;case"linkViaPopup":case"linkViaRedirect":return BA;case"reauthViaPopup":case"reauthViaRedirect":return jA;default:fr(this.auth,"internal-error")}}resolve(e){zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA=new gl(2e3,1e4);async function $A(n,e,t){if(nn(n.app))return Promise.reject(Hn(n,"operation-not-supported-in-this-environment"));const i=zo(n);hv(n,e,Fc);const o=qf(i,t);return new gs(i,"signInViaPopup",e,o).executeNotNull()}class gs extends Fv{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,gs.currentPopupAction&&gs.currentPopupAction.cancel(),gs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){zr(this.filter.length===1,"Popup operations only handle one event");const e=$f();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Hn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Hn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Hn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zA.get())};e()}}gs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qA="pendingRedirect",tc=new Map;class HA extends Fv{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=tc.get(this.auth._key());if(!e){try{const i=await WA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}tc.set(this.auth._key(),e)}return this.bypassAuthState||tc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function WA(n,e){const t=jv(e),i=Uv(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}async function GA(n,e){return Uv(n)._set(jv(e),"true")}function KA(n,e){tc.set(n._key(),e)}function Uv(n){return Fr(n._redirectPersistence)}function jv(n){return ec(qA,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QA(n,e,t){return XA(n,e,t)}async function XA(n,e,t){if(nn(n.app))return Promise.reject(Ai(n));const i=zo(n);hv(n,e,Fc),await i._initializationPromise;const o=qf(i,t);return await GA(o,i),o._openRedirect(i,e,"signInViaRedirect")}async function JA(n,e){return await zo(n)._initializationPromise,Bv(n,e,!1)}async function Bv(n,e,t=!1){if(nn(n.app))return Promise.reject(Ai(n));const i=zo(n),o=qf(i,e),h=await new HA(i,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA=600*1e3;class ZA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!eR(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!zv(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Hn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=YA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ty(e))}saveEventToCache(e){this.cachedEventUids.add(Ty(e)),this.lastProcessedEventTime=Date.now()}}function Ty(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function zv({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function eR(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zv(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tR(n,e={}){return Bo(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rR=/^https?/;async function iR(n){if(n.config.emulator)return;const{authorizedDomains:e}=await tR(n);for(const t of e)try{if(sR(t))return}catch{}fr(n,"unauthorized-domain")}function sR(n){const e=nf(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const h=new URL(n);return h.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===i}if(!rR.test(t))return!1;if(nR.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const oR=new gl(3e4,6e4);function Iy(){const n=ar().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function aR(n){return new Promise((e,t)=>{var i,o,l;function h(){Iy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Iy(),t(Hn(n,"network-request-failed"))},timeout:oR.get()})}if(!((o=(i=ar().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=ar().gapi)===null||l===void 0)&&l.load)h();else{const f=cA("iframefcb");return ar()[f]=()=>{gapi.load?h():t(Hn(n,"network-request-failed"))},lA(`${uA()}?onload=${f}`).catch(g=>t(g))}}).catch(e=>{throw nc=null,e})}let nc=null;function lR(n){return nc=nc||aR(n),nc}/**
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
 */const uR=new gl(5e3,15e3),cR="__/auth/iframe",hR="emulator/auth/iframe",dR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pR(n){const e=n.config;ve(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ff(e,hR):`https://${n.config.authDomain}/${cR}`,i={apiKey:e.apiKey,appName:n.name,v:Ss},o=fR.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${pl(i).slice(1)}`}async function mR(n){const e=await lR(n),t=ar().gapi;return ve(t,n,"internal-error"),e.open({where:document.body,url:pR(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dR,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const h=Hn(n,"network-request-failed"),f=ar().setTimeout(()=>{l(h)},uR.get());function g(){ar().clearTimeout(f),o(i)}i.ping(g).then(g,()=>{l(h)})}))}/**
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
 */const gR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yR=500,_R=600,vR="_blank",ER="http://localhost";class Sy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wR(n,e,t,i=yR,o=_R){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const g=Object.assign(Object.assign({},gR),{width:i.toString(),height:o.toString(),top:l,left:h}),_=zt().toLowerCase();t&&(f=vv(_)?vR:t),yv(_)&&(e=e||ER,g.scrollbars="yes");const E=Object.entries(g).reduce((I,[U,z])=>`${I}${U}=${z},`,"");if(eA(_)&&f!=="_self")return TR(e||"",f),new Sy(null);const T=window.open(e||"",f,E);ve(T,n,"popup-blocked");try{T.focus()}catch{}return new Sy(T)}function TR(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const IR="__/auth/handler",SR="emulator/auth/handler",AR=encodeURIComponent("fac");async function Ay(n,e,t,i,o,l){ve(n.config.authDomain,n,"auth-domain-config-required"),ve(n.config.apiKey,n,"invalid-api-key");const h={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Ss,eventId:o};if(e instanceof Fc){e.setDefaultLanguage(n.languageCode),h.providerId=e.providerId||"",TI(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,T]of Object.entries({}))h[E]=T}if(e instanceof yl){const E=e.getScopes().filter(T=>T!=="");E.length>0&&(h.scopes=E.join(","))}n.tenantId&&(h.tid=n.tenantId);const f=h;for(const E of Object.keys(f))f[E]===void 0&&delete f[E];const g=await n._getAppCheckToken(),_=g?`#${AR}=${encodeURIComponent(g)}`:"";return`${RR(n)}?${pl(f).slice(1)}${_}`}function RR({config:n}){return n.emulator?Ff(n,SR):`https://${n.authDomain}/${IR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd="webStorageSupport";class CR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vv,this._completeRedirectFn=Bv,this._overrideRedirectResult=KA}async _openPopup(e,t,i,o){var l;zr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await Ay(e,t,i,nf(),o);return wR(e,h,$f())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await Ay(e,t,i,nf(),o);return kA(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(zr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await mR(e),i=new ZA(e);return t.register("authEvent",o=>(ve(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(zd,{type:zd},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[zd];h!==void 0&&t(!!h),fr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=iR(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Sv()||_v()||Bf()}}const PR=CR;var Ry="@firebase/auth",Cy="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NR(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function DR(n){Pi(new jr("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=i.options;ve(h&&!h.includes(":"),"invalid-api-key",{appName:i.name});const g={apiKey:h,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Av(n)},_=new oA(i,o,l,g);return dA(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Pi(new jr("auth-internal",e=>{const t=zo(e.getProvider("auth").getImmediate());return(i=>new kR(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rn(Ry,Cy,NR(n)),Rn(Ry,Cy,"esm2017")}/**
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
 */const OR=300,VR=nv("authIdTokenMaxAge")||OR;let Py=null;const xR=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>VR)return;const o=t==null?void 0:t.token;Py!==o&&(Py=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function LR(n=bc()){const e=ml(n,"auth");if(e.isInitialized())return e.getImmediate();const t=hA(n,{popupRedirectResolver:PR,persistence:[FA,Dv,Vv]}),i=nv("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const h=xR(l.toString());TA(t,h,()=>h(t.currentUser)),wA(t,f=>h(f))}}const o=ev("auth");return o&&fA(t,`http://${o}`),t}function MR(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}aA({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=Hn("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",MR().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});DR("Browser");var ky=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ri,$v;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,A){function C(){}C.prototype=A.prototype,D.D=A.prototype,D.prototype=new C,D.prototype.constructor=D,D.C=function(k,O,x){for(var R=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)R[nt-2]=arguments[nt];return A.prototype[O].apply(k,R)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(D,A,C){C||(C=0);var k=Array(16);if(typeof A=="string")for(var O=0;16>O;++O)k[O]=A.charCodeAt(C++)|A.charCodeAt(C++)<<8|A.charCodeAt(C++)<<16|A.charCodeAt(C++)<<24;else for(O=0;16>O;++O)k[O]=A[C++]|A[C++]<<8|A[C++]<<16|A[C++]<<24;A=D.g[0],C=D.g[1],O=D.g[2];var x=D.g[3],R=A+(x^C&(O^x))+k[0]+3614090360&4294967295;A=C+(R<<7&4294967295|R>>>25),R=x+(O^A&(C^O))+k[1]+3905402710&4294967295,x=A+(R<<12&4294967295|R>>>20),R=O+(C^x&(A^C))+k[2]+606105819&4294967295,O=x+(R<<17&4294967295|R>>>15),R=C+(A^O&(x^A))+k[3]+3250441966&4294967295,C=O+(R<<22&4294967295|R>>>10),R=A+(x^C&(O^x))+k[4]+4118548399&4294967295,A=C+(R<<7&4294967295|R>>>25),R=x+(O^A&(C^O))+k[5]+1200080426&4294967295,x=A+(R<<12&4294967295|R>>>20),R=O+(C^x&(A^C))+k[6]+2821735955&4294967295,O=x+(R<<17&4294967295|R>>>15),R=C+(A^O&(x^A))+k[7]+4249261313&4294967295,C=O+(R<<22&4294967295|R>>>10),R=A+(x^C&(O^x))+k[8]+1770035416&4294967295,A=C+(R<<7&4294967295|R>>>25),R=x+(O^A&(C^O))+k[9]+2336552879&4294967295,x=A+(R<<12&4294967295|R>>>20),R=O+(C^x&(A^C))+k[10]+4294925233&4294967295,O=x+(R<<17&4294967295|R>>>15),R=C+(A^O&(x^A))+k[11]+2304563134&4294967295,C=O+(R<<22&4294967295|R>>>10),R=A+(x^C&(O^x))+k[12]+1804603682&4294967295,A=C+(R<<7&4294967295|R>>>25),R=x+(O^A&(C^O))+k[13]+4254626195&4294967295,x=A+(R<<12&4294967295|R>>>20),R=O+(C^x&(A^C))+k[14]+2792965006&4294967295,O=x+(R<<17&4294967295|R>>>15),R=C+(A^O&(x^A))+k[15]+1236535329&4294967295,C=O+(R<<22&4294967295|R>>>10),R=A+(O^x&(C^O))+k[1]+4129170786&4294967295,A=C+(R<<5&4294967295|R>>>27),R=x+(C^O&(A^C))+k[6]+3225465664&4294967295,x=A+(R<<9&4294967295|R>>>23),R=O+(A^C&(x^A))+k[11]+643717713&4294967295,O=x+(R<<14&4294967295|R>>>18),R=C+(x^A&(O^x))+k[0]+3921069994&4294967295,C=O+(R<<20&4294967295|R>>>12),R=A+(O^x&(C^O))+k[5]+3593408605&4294967295,A=C+(R<<5&4294967295|R>>>27),R=x+(C^O&(A^C))+k[10]+38016083&4294967295,x=A+(R<<9&4294967295|R>>>23),R=O+(A^C&(x^A))+k[15]+3634488961&4294967295,O=x+(R<<14&4294967295|R>>>18),R=C+(x^A&(O^x))+k[4]+3889429448&4294967295,C=O+(R<<20&4294967295|R>>>12),R=A+(O^x&(C^O))+k[9]+568446438&4294967295,A=C+(R<<5&4294967295|R>>>27),R=x+(C^O&(A^C))+k[14]+3275163606&4294967295,x=A+(R<<9&4294967295|R>>>23),R=O+(A^C&(x^A))+k[3]+4107603335&4294967295,O=x+(R<<14&4294967295|R>>>18),R=C+(x^A&(O^x))+k[8]+1163531501&4294967295,C=O+(R<<20&4294967295|R>>>12),R=A+(O^x&(C^O))+k[13]+2850285829&4294967295,A=C+(R<<5&4294967295|R>>>27),R=x+(C^O&(A^C))+k[2]+4243563512&4294967295,x=A+(R<<9&4294967295|R>>>23),R=O+(A^C&(x^A))+k[7]+1735328473&4294967295,O=x+(R<<14&4294967295|R>>>18),R=C+(x^A&(O^x))+k[12]+2368359562&4294967295,C=O+(R<<20&4294967295|R>>>12),R=A+(C^O^x)+k[5]+4294588738&4294967295,A=C+(R<<4&4294967295|R>>>28),R=x+(A^C^O)+k[8]+2272392833&4294967295,x=A+(R<<11&4294967295|R>>>21),R=O+(x^A^C)+k[11]+1839030562&4294967295,O=x+(R<<16&4294967295|R>>>16),R=C+(O^x^A)+k[14]+4259657740&4294967295,C=O+(R<<23&4294967295|R>>>9),R=A+(C^O^x)+k[1]+2763975236&4294967295,A=C+(R<<4&4294967295|R>>>28),R=x+(A^C^O)+k[4]+1272893353&4294967295,x=A+(R<<11&4294967295|R>>>21),R=O+(x^A^C)+k[7]+4139469664&4294967295,O=x+(R<<16&4294967295|R>>>16),R=C+(O^x^A)+k[10]+3200236656&4294967295,C=O+(R<<23&4294967295|R>>>9),R=A+(C^O^x)+k[13]+681279174&4294967295,A=C+(R<<4&4294967295|R>>>28),R=x+(A^C^O)+k[0]+3936430074&4294967295,x=A+(R<<11&4294967295|R>>>21),R=O+(x^A^C)+k[3]+3572445317&4294967295,O=x+(R<<16&4294967295|R>>>16),R=C+(O^x^A)+k[6]+76029189&4294967295,C=O+(R<<23&4294967295|R>>>9),R=A+(C^O^x)+k[9]+3654602809&4294967295,A=C+(R<<4&4294967295|R>>>28),R=x+(A^C^O)+k[12]+3873151461&4294967295,x=A+(R<<11&4294967295|R>>>21),R=O+(x^A^C)+k[15]+530742520&4294967295,O=x+(R<<16&4294967295|R>>>16),R=C+(O^x^A)+k[2]+3299628645&4294967295,C=O+(R<<23&4294967295|R>>>9),R=A+(O^(C|~x))+k[0]+4096336452&4294967295,A=C+(R<<6&4294967295|R>>>26),R=x+(C^(A|~O))+k[7]+1126891415&4294967295,x=A+(R<<10&4294967295|R>>>22),R=O+(A^(x|~C))+k[14]+2878612391&4294967295,O=x+(R<<15&4294967295|R>>>17),R=C+(x^(O|~A))+k[5]+4237533241&4294967295,C=O+(R<<21&4294967295|R>>>11),R=A+(O^(C|~x))+k[12]+1700485571&4294967295,A=C+(R<<6&4294967295|R>>>26),R=x+(C^(A|~O))+k[3]+2399980690&4294967295,x=A+(R<<10&4294967295|R>>>22),R=O+(A^(x|~C))+k[10]+4293915773&4294967295,O=x+(R<<15&4294967295|R>>>17),R=C+(x^(O|~A))+k[1]+2240044497&4294967295,C=O+(R<<21&4294967295|R>>>11),R=A+(O^(C|~x))+k[8]+1873313359&4294967295,A=C+(R<<6&4294967295|R>>>26),R=x+(C^(A|~O))+k[15]+4264355552&4294967295,x=A+(R<<10&4294967295|R>>>22),R=O+(A^(x|~C))+k[6]+2734768916&4294967295,O=x+(R<<15&4294967295|R>>>17),R=C+(x^(O|~A))+k[13]+1309151649&4294967295,C=O+(R<<21&4294967295|R>>>11),R=A+(O^(C|~x))+k[4]+4149444226&4294967295,A=C+(R<<6&4294967295|R>>>26),R=x+(C^(A|~O))+k[11]+3174756917&4294967295,x=A+(R<<10&4294967295|R>>>22),R=O+(A^(x|~C))+k[2]+718787259&4294967295,O=x+(R<<15&4294967295|R>>>17),R=C+(x^(O|~A))+k[9]+3951481745&4294967295,D.g[0]=D.g[0]+A&4294967295,D.g[1]=D.g[1]+(O+(R<<21&4294967295|R>>>11))&4294967295,D.g[2]=D.g[2]+O&4294967295,D.g[3]=D.g[3]+x&4294967295}i.prototype.u=function(D,A){A===void 0&&(A=D.length);for(var C=A-this.blockSize,k=this.B,O=this.h,x=0;x<A;){if(O==0)for(;x<=C;)o(this,D,x),x+=this.blockSize;if(typeof D=="string"){for(;x<A;)if(k[O++]=D.charCodeAt(x++),O==this.blockSize){o(this,k),O=0;break}}else for(;x<A;)if(k[O++]=D[x++],O==this.blockSize){o(this,k),O=0;break}}this.h=O,this.o+=A},i.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var A=1;A<D.length-8;++A)D[A]=0;var C=8*this.o;for(A=D.length-8;A<D.length;++A)D[A]=C&255,C/=256;for(this.u(D),D=Array(16),A=C=0;4>A;++A)for(var k=0;32>k;k+=8)D[C++]=this.g[A]>>>k&255;return D};function l(D,A){var C=f;return Object.prototype.hasOwnProperty.call(C,D)?C[D]:C[D]=A(D)}function h(D,A){this.h=A;for(var C=[],k=!0,O=D.length-1;0<=O;O--){var x=D[O]|0;k&&x==A||(C[O]=x,k=!1)}this.g=C}var f={};function g(D){return-128<=D&&128>D?l(D,function(A){return new h([A|0],0>A?-1:0)}):new h([D|0],0>D?-1:0)}function _(D){if(isNaN(D)||!isFinite(D))return T;if(0>D)return b(_(-D));for(var A=[],C=1,k=0;D>=C;k++)A[k]=D/C|0,C*=4294967296;return new h(A,0)}function E(D,A){if(D.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(D.charAt(0)=="-")return b(E(D.substring(1),A));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=_(Math.pow(A,8)),k=T,O=0;O<D.length;O+=8){var x=Math.min(8,D.length-O),R=parseInt(D.substring(O,O+x),A);8>x?(x=_(Math.pow(A,x)),k=k.j(x).add(_(R))):(k=k.j(C),k=k.add(_(R)))}return k}var T=g(0),I=g(1),U=g(16777216);n=h.prototype,n.m=function(){if($(this))return-b(this).m();for(var D=0,A=1,C=0;C<this.g.length;C++){var k=this.i(C);D+=(0<=k?k:4294967296+k)*A,A*=4294967296}return D},n.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(z(this))return"0";if($(this))return"-"+b(this).toString(D);for(var A=_(Math.pow(D,6)),C=this,k="";;){var O=ue(C,A).g;C=oe(C,O.j(A));var x=((0<C.g.length?C.g[0]:C.h)>>>0).toString(D);if(C=O,z(C))return x+k;for(;6>x.length;)x="0"+x;k=x+k}},n.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function z(D){if(D.h!=0)return!1;for(var A=0;A<D.g.length;A++)if(D.g[A]!=0)return!1;return!0}function $(D){return D.h==-1}n.l=function(D){return D=oe(this,D),$(D)?-1:z(D)?0:1};function b(D){for(var A=D.g.length,C=[],k=0;k<A;k++)C[k]=~D.g[k];return new h(C,~D.h).add(I)}n.abs=function(){return $(this)?b(this):this},n.add=function(D){for(var A=Math.max(this.g.length,D.g.length),C=[],k=0,O=0;O<=A;O++){var x=k+(this.i(O)&65535)+(D.i(O)&65535),R=(x>>>16)+(this.i(O)>>>16)+(D.i(O)>>>16);k=R>>>16,x&=65535,R&=65535,C[O]=R<<16|x}return new h(C,C[C.length-1]&-2147483648?-1:0)};function oe(D,A){return D.add(b(A))}n.j=function(D){if(z(this)||z(D))return T;if($(this))return $(D)?b(this).j(b(D)):b(b(this).j(D));if($(D))return b(this.j(b(D)));if(0>this.l(U)&&0>D.l(U))return _(this.m()*D.m());for(var A=this.g.length+D.g.length,C=[],k=0;k<2*A;k++)C[k]=0;for(k=0;k<this.g.length;k++)for(var O=0;O<D.g.length;O++){var x=this.i(k)>>>16,R=this.i(k)&65535,nt=D.i(O)>>>16,Vt=D.i(O)&65535;C[2*k+2*O]+=R*Vt,re(C,2*k+2*O),C[2*k+2*O+1]+=x*Vt,re(C,2*k+2*O+1),C[2*k+2*O+1]+=R*nt,re(C,2*k+2*O+1),C[2*k+2*O+2]+=x*nt,re(C,2*k+2*O+2)}for(k=0;k<A;k++)C[k]=C[2*k+1]<<16|C[2*k];for(k=A;k<2*A;k++)C[k]=0;return new h(C,0)};function re(D,A){for(;(D[A]&65535)!=D[A];)D[A+1]+=D[A]>>>16,D[A]&=65535,A++}function ee(D,A){this.g=D,this.h=A}function ue(D,A){if(z(A))throw Error("division by zero");if(z(D))return new ee(T,T);if($(D))return A=ue(b(D),A),new ee(b(A.g),b(A.h));if($(A))return A=ue(D,b(A)),new ee(b(A.g),A.h);if(30<D.g.length){if($(D)||$(A))throw Error("slowDivide_ only works with positive integers.");for(var C=I,k=A;0>=k.l(D);)C=Ce(C),k=Ce(k);var O=Te(C,1),x=Te(k,1);for(k=Te(k,2),C=Te(C,2);!z(k);){var R=x.add(k);0>=R.l(D)&&(O=O.add(C),x=R),k=Te(k,1),C=Te(C,1)}return A=oe(D,O.j(A)),new ee(O,A)}for(O=T;0<=D.l(A);){for(C=Math.max(1,Math.floor(D.m()/A.m())),k=Math.ceil(Math.log(C)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),x=_(C),R=x.j(A);$(R)||0<R.l(D);)C-=k,x=_(C),R=x.j(A);z(x)&&(x=I),O=O.add(x),D=oe(D,R)}return new ee(O,D)}n.A=function(D){return ue(this,D).h},n.and=function(D){for(var A=Math.max(this.g.length,D.g.length),C=[],k=0;k<A;k++)C[k]=this.i(k)&D.i(k);return new h(C,this.h&D.h)},n.or=function(D){for(var A=Math.max(this.g.length,D.g.length),C=[],k=0;k<A;k++)C[k]=this.i(k)|D.i(k);return new h(C,this.h|D.h)},n.xor=function(D){for(var A=Math.max(this.g.length,D.g.length),C=[],k=0;k<A;k++)C[k]=this.i(k)^D.i(k);return new h(C,this.h^D.h)};function Ce(D){for(var A=D.g.length+1,C=[],k=0;k<A;k++)C[k]=D.i(k)<<1|D.i(k-1)>>>31;return new h(C,D.h)}function Te(D,A){var C=A>>5;A%=32;for(var k=D.g.length-C,O=[],x=0;x<k;x++)O[x]=0<A?D.i(x+C)>>>A|D.i(x+C+1)<<32-A:D.i(x+C);return new h(O,D.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,$v=i,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=E,Ri=h}).apply(typeof ky<"u"?ky:typeof self<"u"?self:typeof window<"u"?window:{});var Gu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qv,qa,Hv,rc,of,Wv,Gv,Kv;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,y){return u==Array.prototype||u==Object.prototype||(u[p]=y.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Gu=="object"&&Gu];for(var p=0;p<u.length;++p){var y=u[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var i=t(this);function o(u,p){if(p)e:{var y=i;u=u.split(".");for(var w=0;w<u.length-1;w++){var L=u[w];if(!(L in y))break e;y=y[L]}u=u[u.length-1],w=y[u],p=p(w),p!=w&&p!=null&&e(y,u,{configurable:!0,writable:!0,value:p})}}function l(u,p){u instanceof String&&(u+="");var y=0,w=!1,L={next:function(){if(!w&&y<u.length){var B=y++;return{value:p(B,u[B]),done:!1}}return w=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(u){return u||function(){return l(this,function(p,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},f=this||self;function g(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function _(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function E(u,p,y){return u.call.apply(u.bind,arguments)}function T(u,p,y){if(!u)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,w),u.apply(p,L)}}return function(){return u.apply(p,arguments)}}function I(u,p,y){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:T,I.apply(null,arguments)}function U(u,p){var y=Array.prototype.slice.call(arguments,1);return function(){var w=y.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function z(u,p){function y(){}y.prototype=p.prototype,u.aa=p.prototype,u.prototype=new y,u.prototype.constructor=u,u.Qb=function(w,L,B){for(var J=Array(arguments.length-2),je=2;je<arguments.length;je++)J[je-2]=arguments[je];return p.prototype[L].apply(w,J)}}function $(u){const p=u.length;if(0<p){const y=Array(p);for(let w=0;w<p;w++)y[w]=u[w];return y}return[]}function b(u,p){for(let y=1;y<arguments.length;y++){const w=arguments[y];if(g(w)){const L=u.length||0,B=w.length||0;u.length=L+B;for(let J=0;J<B;J++)u[L+J]=w[J]}else u.push(w)}}class oe{constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function re(u){return/^[\s\xa0]*$/.test(u)}function ee(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function ue(u){return ue[" "](u),u}ue[" "]=function(){};var Ce=ee().indexOf("Gecko")!=-1&&!(ee().toLowerCase().indexOf("webkit")!=-1&&ee().indexOf("Edge")==-1)&&!(ee().indexOf("Trident")!=-1||ee().indexOf("MSIE")!=-1)&&ee().indexOf("Edge")==-1;function Te(u,p,y){for(const w in u)p.call(y,u[w],w,u)}function D(u,p){for(const y in u)p.call(void 0,u[y],y,u)}function A(u){const p={};for(const y in u)p[y]=u[y];return p}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(u,p){let y,w;for(let L=1;L<arguments.length;L++){w=arguments[L];for(y in w)u[y]=w[y];for(let B=0;B<C.length;B++)y=C[B],Object.prototype.hasOwnProperty.call(w,y)&&(u[y]=w[y])}}function O(u){var p=1;u=u.split(":");const y=[];for(;0<p&&u.length;)y.push(u.shift()),p--;return u.length&&y.push(u.join(":")),y}function x(u){f.setTimeout(()=>{throw u},0)}function R(){var u=pe;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class nt{constructor(){this.h=this.g=null}add(p,y){const w=Vt.get();w.set(p,y),this.h?this.h.next=w:this.g=w,this.h=w}}var Vt=new oe(()=>new xt,u=>u.reset());class xt{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Be,Y=!1,pe=new nt,se=()=>{const u=f.Promise.resolve(void 0);Be=()=>{u.then(V)}};var V=()=>{for(var u;u=R();){try{u.h.call(u.g)}catch(y){x(y)}var p=Vt;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}Y=!1};function W(){this.s=this.s,this.C=this.C}W.prototype.s=!1,W.prototype.ma=function(){this.s||(this.s=!0,this.N())},W.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function de(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}de.prototype.h=function(){this.defaultPrevented=!0};var Ie=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};f.addEventListener("test",y,p),f.removeEventListener("test",y,p)}catch{}return u})();function Ae(u,p){if(de.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var y=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(Ce){e:{try{ue(p.nodeName);var L=!0;break e}catch{}L=!1}L||(p=null)}}else y=="mouseover"?p=u.fromElement:y=="mouseout"&&(p=u.toElement);this.relatedTarget=p,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:De[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ae.aa.h.call(this)}}z(Ae,de);var De={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var be="closure_listenable_"+(1e6*Math.random()|0),Fe=0;function $e(u,p,y,w,L){this.listener=u,this.proxy=null,this.src=p,this.type=y,this.capture=!!w,this.ha=L,this.key=++Fe,this.da=this.fa=!1}function Et(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function _r(u){this.src=u,this.g={},this.h=0}_r.prototype.add=function(u,p,y,w,L){var B=u.toString();u=this.g[B],u||(u=this.g[B]=[],this.h++);var J=Hr(u,p,w,L);return-1<J?(p=u[J],y||(p.fa=!1)):(p=new $e(p,this.src,B,!!w,L),p.fa=y,u.push(p)),p};function Ns(u,p){var y=p.type;if(y in u.g){var w=u.g[y],L=Array.prototype.indexOf.call(w,p,void 0),B;(B=0<=L)&&Array.prototype.splice.call(w,L,1),B&&(Et(p),u.g[y].length==0&&(delete u.g[y],u.h--))}}function Hr(u,p,y,w){for(var L=0;L<u.length;++L){var B=u[L];if(!B.da&&B.listener==p&&B.capture==!!y&&B.ha==w)return L}return-1}var ji="closure_lm_"+(1e6*Math.random()|0),Ds={};function Qo(u,p,y,w,L){if(Array.isArray(p)){for(var B=0;B<p.length;B++)Qo(u,p[B],y,w,L);return null}return y=Yo(y),u&&u[be]?u.K(p,y,_(w)?!!w.capture:!1,L):Xo(u,p,y,!1,w,L)}function Xo(u,p,y,w,L,B){if(!p)throw Error("Invalid event type");var J=_(L)?!!L.capture:!!L,je=Vs(u);if(je||(u[ji]=je=new _r(u)),y=je.add(p,y,w,J,B),y.proxy)return y;if(w=Nl(),y.proxy=w,w.src=u,w.listener=y,u.addEventListener)Ie||(L=J),L===void 0&&(L=!1),u.addEventListener(p.toString(),w,L);else if(u.attachEvent)u.attachEvent(Er(p.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Nl(){function u(y){return p.call(u.src,u.listener,y)}const p=Jo;return u}function Os(u,p,y,w,L){if(Array.isArray(p))for(var B=0;B<p.length;B++)Os(u,p[B],y,w,L);else w=_(w)?!!w.capture:!!w,y=Yo(y),u&&u[be]?(u=u.i,p=String(p).toString(),p in u.g&&(B=u.g[p],y=Hr(B,y,w,L),-1<y&&(Et(B[y]),Array.prototype.splice.call(B,y,1),B.length==0&&(delete u.g[p],u.h--)))):u&&(u=Vs(u))&&(p=u.g[p.toString()],u=-1,p&&(u=Hr(p,y,w,L)),(y=-1<u?p[u]:null)&&vr(y))}function vr(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[be])Ns(p.i,u);else{var y=u.type,w=u.proxy;p.removeEventListener?p.removeEventListener(y,w,u.capture):p.detachEvent?p.detachEvent(Er(y),w):p.addListener&&p.removeListener&&p.removeListener(w),(y=Vs(p))?(Ns(y,u),y.h==0&&(y.src=null,p[ji]=null)):Et(u)}}}function Er(u){return u in Ds?Ds[u]:Ds[u]="on"+u}function Jo(u,p){if(u.da)u=!0;else{p=new Ae(p,this);var y=u.listener,w=u.ha||u.src;u.fa&&vr(u),u=y.call(w,p)}return u}function Vs(u){return u=u[ji],u instanceof _r?u:null}var xs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Yo(u){return typeof u=="function"?u:(u[xs]||(u[xs]=function(p){return u.handleEvent(p)}),u[xs])}function ft(){W.call(this),this.i=new _r(this),this.M=this,this.F=null}z(ft,W),ft.prototype[be]=!0,ft.prototype.removeEventListener=function(u,p,y,w){Os(this,u,p,y,w)};function pt(u,p){var y,w=u.F;if(w)for(y=[];w;w=w.F)y.push(w);if(u=u.M,w=p.type||p,typeof p=="string")p=new de(p,u);else if(p instanceof de)p.target=p.target||u;else{var L=p;p=new de(w,u),k(p,L)}if(L=!0,y)for(var B=y.length-1;0<=B;B--){var J=p.g=y[B];L=wr(J,w,!0,p)&&L}if(J=p.g=u,L=wr(J,w,!0,p)&&L,L=wr(J,w,!1,p)&&L,y)for(B=0;B<y.length;B++)J=p.g=y[B],L=wr(J,w,!1,p)&&L}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var y=u.g[p],w=0;w<y.length;w++)Et(y[w]);delete u.g[p],u.h--}}this.F=null},ft.prototype.K=function(u,p,y,w){return this.i.add(String(u),p,!1,y,w)},ft.prototype.L=function(u,p,y,w){return this.i.add(String(u),p,!0,y,w)};function wr(u,p,y,w){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var L=!0,B=0;B<p.length;++B){var J=p[B];if(J&&!J.da&&J.capture==y){var je=J.listener,mt=J.ha||J.src;J.fa&&Ns(u.i,J),L=je.call(mt,w)!==!1&&L}}return L&&!w.defaultPrevented}function Zo(u,p,y){if(typeof u=="function")y&&(u=I(u,y));else if(u&&typeof u.handleEvent=="function")u=I(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:f.setTimeout(u,p||0)}function Wr(u){u.g=Zo(()=>{u.g=null,u.i&&(u.i=!1,Wr(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class Bi extends W{constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Wr(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zi(u){W.call(this),this.h=u,this.g={}}z(zi,W);var ea=[];function ta(u){Te(u.g,function(p,y){this.g.hasOwnProperty(y)&&vr(p)},u),u.g={}}zi.prototype.N=function(){zi.aa.N.call(this),ta(this)},zi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var na=f.JSON.stringify,ra=f.JSON.parse,ia=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function $i(){}$i.prototype.h=null;function Ls(u){return u.h||(u.h=u.i())}function Ms(){}var pn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Qn(){de.call(this,"d")}z(Qn,de);function bs(){de.call(this,"c")}z(bs,de);var Xn={},sa=null;function qi(){return sa=sa||new ft}Xn.La="serverreachability";function oa(u){de.call(this,Xn.La,u)}z(oa,de);function Tr(u){const p=qi();pt(p,new oa(p))}Xn.STAT_EVENT="statevent";function aa(u,p){de.call(this,Xn.STAT_EVENT,u),this.stat=p}z(aa,de);function rt(u){const p=qi();pt(p,new aa(p,u))}Xn.Ma="timingevent";function Fs(u,p){de.call(this,Xn.Ma,u),this.size=p}z(Fs,de);function Cn(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},p)}function Hi(){this.g=!0}Hi.prototype.xa=function(){this.g=!1};function Wi(u,p,y,w,L,B){u.info(function(){if(u.g)if(B)for(var J="",je=B.split("&"),mt=0;mt<je.length;mt++){var Oe=je[mt].split("=");if(1<Oe.length){var wt=Oe[0];Oe=Oe[1];var at=wt.split("_");J=2<=at.length&&at[1]=="type"?J+(wt+"="+Oe+"&"):J+(wt+"=redacted&")}}else J=null;else J=B;return"XMLHTTP REQ ("+w+") [attempt "+L+"]: "+p+`
`+y+`
`+J})}function Us(u,p,y,w,L,B,J){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+L+"]: "+p+`
`+y+`
`+B+" "+J})}function Pn(u,p,y,w){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+ih(u,y)+(w?" "+w:"")})}function la(u,p){u.info(function(){return"TIMEOUT: "+p})}Hi.prototype.info=function(){};function ih(u,p){if(!u.g)return p;if(!p)return null;try{var y=JSON.parse(p);if(y){for(u=0;u<y.length;u++)if(Array.isArray(y[u])){var w=y[u];if(!(2>w.length)){var L=w[1];if(Array.isArray(L)&&!(1>L.length)){var B=L[0];if(B!="noop"&&B!="stop"&&B!="close")for(var J=1;J<L.length;J++)L[J]=""}}}}return na(y)}catch{return p}}var js={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Dl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},kn;function Gi(){}z(Gi,$i),Gi.prototype.g=function(){return new XMLHttpRequest},Gi.prototype.i=function(){return{}},kn=new Gi;function Nn(u,p,y,w){this.j=u,this.i=p,this.l=y,this.R=w||1,this.U=new zi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ol}function Ol(){this.i=null,this.g="",this.h=!1}var ua={},Bs={};function zs(u,p,y){u.L=1,u.v=Jr(on(p)),u.m=y,u.P=!0,ca(u,null)}function ca(u,p){u.F=Date.now(),qe(u),u.A=on(u.v);var y=u.A,w=u.R;Array.isArray(w)||(w=[String(w)]),Zr(y.i,"t",w),u.C=0,y=u.j.J,u.h=new Ol,u.g=Xl(u.j,y?p:null,!u.m),0<u.O&&(u.M=new Bi(I(u.Y,u,u.g),u.O)),p=u.U,y=u.g,w=u.ca;var L="readystatechange";Array.isArray(L)||(L&&(ea[0]=L.toString()),L=ea);for(var B=0;B<L.length;B++){var J=Qo(y,L[B],w||p.handleEvent,!1,p.h||p);if(!J)break;p.g[J.key]=J}p=u.H?A(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),Tr(),Wi(u.i,u.u,u.A,u.l,u.R,u.m)}Nn.prototype.ca=function(u){u=u.target;const p=this.M;p&&Kt(u)==3?p.j():this.Y(u)},Nn.prototype.Y=function(u){try{if(u==this.g)e:{const at=Kt(this.g);var p=this.g.Ba();const yn=this.g.Z();if(!(3>at)&&(at!=3||this.g&&(this.h.h||this.g.oa()||ga(this.g)))){this.J||at!=4||p==7||(p==8||0>=yn?Tr(3):Tr(2)),Ki(this);var y=this.g.Z();this.X=y;t:if(Vl(this)){var w=ga(this.g);u="";var L=w.length,B=Kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mn(this),Gr(this);var J="";break t}this.h.i=new f.TextDecoder}for(p=0;p<L;p++)this.h.h=!0,u+=this.h.i.decode(w[p],{stream:!(B&&p==L-1)});w.length=0,this.h.g+=u,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=y==200,Us(this.i,this.u,this.A,this.l,this.R,at,y),this.o){if(this.T&&!this.K){t:{if(this.g){var je,mt=this.g;if((je=mt.g?mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!re(je)){var Oe=je;break t}}Oe=null}if(y=Oe)Pn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ha(this,y);else{this.o=!1,this.s=3,rt(12),mn(this),Gr(this);break e}}if(this.P){y=!0;let ln;for(;!this.J&&this.C<J.length;)if(ln=sh(this,J),ln==Bs){at==4&&(this.s=4,rt(14),y=!1),Pn(this.i,this.l,null,"[Incomplete Response]");break}else if(ln==ua){this.s=4,rt(15),Pn(this.i,this.l,J,"[Invalid Chunk]"),y=!1;break}else Pn(this.i,this.l,ln,null),ha(this,ln);if(Vl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),at!=4||J.length!=0||this.h.h||(this.s=1,rt(16),y=!1),this.o=this.o&&y,!y)Pn(this.i,this.l,J,"[Invalid Chunked Response]"),mn(this),Gr(this);else if(0<J.length&&!this.W){this.W=!0;var wt=this.j;wt.g==this&&wt.ba&&!wt.M&&(wt.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),_a(wt),wt.M=!0,rt(11))}}else Pn(this.i,this.l,J,null),ha(this,J);at==4&&mn(this),this.o&&!this.J&&(at==4?Zs(this.j,this):(this.o=!1,qe(this)))}else Ks(this.g),y==400&&0<J.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),mn(this),Gr(this)}}}catch{}finally{}};function Vl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function sh(u,p){var y=u.C,w=p.indexOf(`
`,y);return w==-1?Bs:(y=Number(p.substring(y,w)),isNaN(y)?ua:(w+=1,w+y>p.length?Bs:(p=p.slice(w,w+y),u.C=w+y,p)))}Nn.prototype.cancel=function(){this.J=!0,mn(this)};function qe(u){u.S=Date.now()+u.I,xl(u,u.I)}function xl(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Cn(I(u.ba,u),p)}function Ki(u){u.B&&(f.clearTimeout(u.B),u.B=null)}Nn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(la(this.i,this.A),this.L!=2&&(Tr(),rt(17)),mn(this),this.s=2,Gr(this)):xl(this,this.S-u)};function Gr(u){u.j.G==0||u.J||Zs(u.j,u)}function mn(u){Ki(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,ta(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function ha(u,p){try{var y=u.j;if(y.G!=0&&(y.g==u||$t(y.h,u))){if(!u.K&&$t(y.h,u)&&y.G==3){try{var w=y.Da.g.parse(p)}catch{w=null}if(Array.isArray(w)&&w.length==3){var L=w;if(L[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<u.F)Ys(y),Ln(y);else break e;Js(y),rt(18)}}else y.za=L[1],0<y.za-y.T&&37500>L[2]&&y.F&&y.v==0&&!y.C&&(y.C=Cn(I(y.Za,y),6e3));if(1>=Ml(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Cr(y,11)}else if((u.K||y.g==u)&&Ys(y),!re(p))for(L=y.Da.g.parse(p),p=0;p<L.length;p++){let Oe=L[p];if(y.T=Oe[0],Oe=Oe[1],y.G==2)if(Oe[0]=="c"){y.K=Oe[1],y.ia=Oe[2];const wt=Oe[3];wt!=null&&(y.la=wt,y.j.info("VER="+y.la));const at=Oe[4];at!=null&&(y.Aa=at,y.j.info("SVER="+y.Aa));const yn=Oe[5];yn!=null&&typeof yn=="number"&&0<yn&&(w=1.5*yn,y.L=w,y.j.info("backChannelRequestTimeoutMs_="+w)),w=y;const ln=u.g;if(ln){const ts=ln.g?ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ts){var B=w.h;B.g||ts.indexOf("spdy")==-1&&ts.indexOf("quic")==-1&&ts.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(da(B,B.h),B.h=null))}if(w.D){const to=ln.g?ln.g.getResponseHeader("X-HTTP-Session-Id"):null;to&&(w.ya=to,ze(w.I,w.D,to))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-u.F,y.j.info("Handshake RTT: "+y.R+"ms")),w=y;var J=u;if(w.qa=Ql(w,w.J?w.ia:null,w.W),J.K){bl(w.h,J);var je=J,mt=w.L;mt&&(je.I=mt),je.B&&(Ki(je),qe(je)),w.g=J}else es(w);0<y.i.length&&er(y)}else Oe[0]!="stop"&&Oe[0]!="close"||Cr(y,7);else y.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?Cr(y,7):Ct(y):Oe[0]!="noop"&&y.l&&y.l.ta(Oe),y.v=0)}}Tr(4)}catch{}}var Ll=class{constructor(u,p){this.g=u,this.map=p}};function Qi(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function sn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Ml(u){return u.h?1:u.g?u.g.size:0}function $t(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function da(u,p){u.g?u.g.add(p):u.h=p}function bl(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}Qi.prototype.cancel=function(){if(this.i=Fl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Fl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const y of u.g.values())p=p.concat(y.D);return p}return $(u.i)}function $s(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(g(u)){for(var p=[],y=u.length,w=0;w<y;w++)p.push(u[w]);return p}p=[],y=0;for(w in u)p[y++]=u[w];return p}function qs(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(g(u)||typeof u=="string"){var p=[];u=u.length;for(var y=0;y<u;y++)p.push(y);return p}p=[],y=0;for(const w in u)p[y++]=w;return p}}}function Kr(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(g(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var y=qs(u),w=$s(u),L=w.length,B=0;B<L;B++)p.call(void 0,w[B],y&&y[B],u)}var Xi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function oh(u,p){if(u){u=u.split("&");for(var y=0;y<u.length;y++){var w=u[y].indexOf("="),L=null;if(0<=w){var B=u[y].substring(0,w);L=u[y].substring(w+1)}else B=u[y];p(B,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Ir(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Ir){this.h=u.h,Ji(this,u.j),this.o=u.o,this.g=u.g,Qr(this,u.s),this.l=u.l;var p=u.i,y=new Jn;y.i=p.i,p.g&&(y.g=new Map(p.g),y.h=p.h),Xr(this,y),this.m=u.m}else u&&(p=String(u).match(Xi))?(this.h=!1,Ji(this,p[1]||"",!0),this.o=Ne(p[2]||""),this.g=Ne(p[3]||"",!0),Qr(this,p[4]),this.l=Ne(p[5]||"",!0),Xr(this,p[6]||"",!0),this.m=Ne(p[7]||"")):(this.h=!1,this.i=new Jn(null,this.h))}Ir.prototype.toString=function(){var u=[],p=this.j;p&&u.push(Yr(p,Hs,!0),":");var y=this.g;return(y||p=="file")&&(u.push("//"),(p=this.o)&&u.push(Yr(p,Hs,!0),"@"),u.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&u.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(Yr(y,y.charAt(0)=="/"?Bl:jl,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",Yr(y,fa)),u.join("")};function on(u){return new Ir(u)}function Ji(u,p,y){u.j=y?Ne(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function Qr(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function Xr(u,p,y){p instanceof Jn?(u.i=p,Yn(u.i,u.h)):(y||(p=Yr(p,zl)),u.i=new Jn(p,u.h))}function ze(u,p,y){u.i.set(p,y)}function Jr(u){return ze(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ne(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Yr(u,p,y){return typeof u=="string"?(u=encodeURI(u).replace(p,Ul),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Ul(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Hs=/[#\/\?@]/g,jl=/[#\?:]/g,Bl=/[#\?]/g,zl=/[#\?@]/g,fa=/#/g;function Jn(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function Rt(u){u.g||(u.g=new Map,u.h=0,u.i&&oh(u.i,function(p,y){u.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}n=Jn.prototype,n.add=function(u,p){Rt(this),this.i=null,u=gn(this,u);var y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(p),this.h+=1,this};function Dn(u,p){Rt(u),p=gn(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function On(u,p){return Rt(u),p=gn(u,p),u.g.has(p)}n.forEach=function(u,p){Rt(this),this.g.forEach(function(y,w){y.forEach(function(L){u.call(p,L,w,this)},this)},this)},n.na=function(){Rt(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),y=[];for(let w=0;w<p.length;w++){const L=u[w];for(let B=0;B<L.length;B++)y.push(p[w])}return y},n.V=function(u){Rt(this);let p=[];if(typeof u=="string")On(this,u)&&(p=p.concat(this.g.get(gn(this,u))));else{u=Array.from(this.g.values());for(let y=0;y<u.length;y++)p=p.concat(u[y])}return p},n.set=function(u,p){return Rt(this),this.i=null,u=gn(this,u),On(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},n.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function Zr(u,p,y){Dn(u,p),0<y.length&&(u.i=null,u.g.set(gn(u,p),$(y)),u.h+=y.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var y=0;y<p.length;y++){var w=p[y];const B=encodeURIComponent(String(w)),J=this.V(w);for(w=0;w<J.length;w++){var L=B;J[w]!==""&&(L+="="+encodeURIComponent(String(J[w]))),u.push(L)}}return this.i=u.join("&")};function gn(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function Yn(u,p){p&&!u.j&&(Rt(u),u.i=null,u.g.forEach(function(y,w){var L=w.toLowerCase();w!=L&&(Dn(this,w),Zr(this,L,y))},u)),u.j=p}function ah(u,p){const y=new Hi;if(f.Image){const w=new Image;w.onload=U(Gt,y,"TestLoadImage: loaded",!0,p,w),w.onerror=U(Gt,y,"TestLoadImage: error",!1,p,w),w.onabort=U(Gt,y,"TestLoadImage: abort",!1,p,w),w.ontimeout=U(Gt,y,"TestLoadImage: timeout",!1,p,w),f.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else p(!1)}function $l(u,p){const y=new Hi,w=new AbortController,L=setTimeout(()=>{w.abort(),Gt(y,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:w.signal}).then(B=>{clearTimeout(L),B.ok?Gt(y,"TestPingServer: ok",!0,p):Gt(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(L),Gt(y,"TestPingServer: error",!1,p)})}function Gt(u,p,y,w,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),w(y)}catch{}}function lh(){this.g=new ia}function ql(u,p,y){const w=y||"";try{Kr(u,function(L,B){let J=L;_(L)&&(J=na(L)),p.push(w+B+"="+encodeURIComponent(J))})}catch(L){throw p.push(w+"type="+encodeURIComponent("_badmap")),L}}function Sr(u){this.l=u.Ub||null,this.j=u.eb||!1}z(Sr,$i),Sr.prototype.g=function(){return new Yi(this.l,this.j)},Sr.prototype.i=(function(u){return function(){return u}})({});function Yi(u,p){ft.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}z(Yi,ft),n=Yi.prototype,n.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,xn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||f).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vn(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,xn(this)),this.g&&(this.readyState=3,xn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Hl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Hl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?Vn(this):xn(this),this.readyState==3&&Hl(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,Vn(this))},n.Qa=function(u){this.g&&(this.response=u,Vn(this))},n.ga=function(){this.g&&Vn(this)};function Vn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,xn(u)}n.setRequestHeader=function(u,p){this.u.append(u,p)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=p.next();return u.join(`\r
`)};function xn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Yi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Ar(u){let p="";return Te(u,function(y,w){p+=w,p+=":",p+=y,p+=`\r
`}),p}function ei(u,p,y){e:{for(w in y){var w=!1;break e}w=!0}w||(y=Ar(y),typeof u=="string"?y!=null&&encodeURIComponent(String(y)):ze(u,p,y))}function Xe(u){ft.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}z(Xe,ft);var uh=/^https?$/i,pa=["POST","PUT"];n=Xe.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,p,y,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():kn.g(),this.v=this.o?Ls(this.o):Ls(kn),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(B){Zi(this,B);return}if(u=y||"",y=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var L in w)y.set(L,w[L]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const B of w.keys())y.set(B,w.get(B));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(y.keys()).find(B=>B.toLowerCase()=="content-type"),L=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(pa,p,void 0))||w||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,J]of y)this.g.setRequestHeader(B,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Gs(this),this.u=!0,this.g.send(u),this.u=!1}catch(B){Zi(this,B)}};function Zi(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,Ws(u),an(u)}function Ws(u){u.A||(u.A=!0,pt(u,"complete"),pt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,pt(this,"complete"),pt(this,"abort"),an(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),an(this,!0)),Xe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ma(this):this.bb())},n.bb=function(){ma(this)};function ma(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Kt(u)!=4||u.Z()!=2)){if(u.u&&Kt(u)==4)Zo(u.Ea,0,u);else if(pt(u,"readystatechange"),Kt(u)==4){u.h=!1;try{const J=u.Z();e:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var y;if(!(y=p)){var w;if(w=J===0){var L=String(u.D).match(Xi)[1]||null;!L&&f.self&&f.self.location&&(L=f.self.location.protocol.slice(0,-1)),w=!uh.test(L?L.toLowerCase():"")}y=w}if(y)pt(u,"complete"),pt(u,"success");else{u.m=6;try{var B=2<Kt(u)?u.g.statusText:""}catch{B=""}u.l=B+" ["+u.Z()+"]",Ws(u)}}finally{an(u)}}}}function an(u,p){if(u.g){Gs(u);const y=u.g,w=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||pt(u,"ready");try{y.onreadystatechange=w}catch{}}}function Gs(u){u.I&&(f.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Kt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Kt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),ra(p)}};function ga(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Ks(u){const p={};u=(u.g&&2<=Kt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(re(u[w]))continue;var y=O(u[w]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const B=p[L]||[];p[L]=B,B.push(y)}D(p,function(w){return w.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zn(u,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||p}function ya(u){this.Aa=0,this.i=[],this.j=new Hi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Zn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Zn("baseRetryDelayMs",5e3,u),this.cb=Zn("retryDelaySeedMs",1e4,u),this.Wa=Zn("forwardChannelMaxRetries",2,u),this.wa=Zn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Qi(u&&u.concurrentRequestLimit),this.Da=new lh,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ya.prototype,n.la=8,n.G=1,n.connect=function(u,p,y,w){rt(0),this.W=u,this.H=p||{},y&&w!==void 0&&(this.H.OSID=y,this.H.OAID=w),this.F=this.X,this.I=Ql(this,null,this.W),er(this)};function Ct(u){if(Qs(u),u.G==3){var p=u.U++,y=on(u.I);if(ze(y,"SID",u.K),ze(y,"RID",p),ze(y,"TYPE","terminate"),Rr(u,y),p=new Nn(u,u.j,p),p.L=2,p.v=Jr(on(y)),y=!1,f.navigator&&f.navigator.sendBeacon)try{y=f.navigator.sendBeacon(p.v.toString(),"")}catch{}!y&&f.Image&&(new Image().src=p.v,y=!0),y||(p.g=Xl(p.j,null),p.g.ea(p.v)),p.F=Date.now(),qe(p)}Kl(u)}function Ln(u){u.g&&(_a(u),u.g.cancel(),u.g=null)}function Qs(u){Ln(u),u.u&&(f.clearTimeout(u.u),u.u=null),Ys(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function er(u){if(!sn(u.h)&&!u.s){u.s=!0;var p=u.Ga;Be||se(),Y||(Be(),Y=!0),pe.add(p,u),u.B=0}}function ch(u,p){return Ml(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Cn(I(u.Ga,u,p),Gl(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const L=new Nn(this,this.j,u);let B=this.o;if(this.S&&(B?(B=A(B),k(B,this.S)):B=this.S),this.m!==null||this.O||(L.H=B,B=null),this.P)e:{for(var p=0,y=0;y<this.i.length;y++){t:{var w=this.i[y];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(p+=w,4096<p){p=y;break e}if(p===4096||y===this.i.length-1){p=y+1;break e}}p=1e3}else p=1e3;p=ti(this,L,p),y=on(this.I),ze(y,"RID",u),ze(y,"CVER",22),this.D&&ze(y,"X-HTTP-Session-Id",this.D),Rr(this,y),B&&(this.O?p="headers="+encodeURIComponent(String(Ar(B)))+"&"+p:this.m&&ei(y,this.m,B)),da(this.h,L),this.Ua&&ze(y,"TYPE","init"),this.P?(ze(y,"$req",p),ze(y,"SID","null"),L.T=!0,zs(L,y,null)):zs(L,y,p),this.G=2}}else this.G==3&&(u?Xs(this,u):this.i.length==0||sn(this.h)||Xs(this))};function Xs(u,p){var y;p?y=p.l:y=u.U++;const w=on(u.I);ze(w,"SID",u.K),ze(w,"RID",y),ze(w,"AID",u.T),Rr(u,w),u.m&&u.o&&ei(w,u.m,u.o),y=new Nn(u,u.j,y,u.B+1),u.m===null&&(y.H=u.o),p&&(u.i=p.D.concat(u.i)),p=ti(u,y,1e3),y.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),da(u.h,y),zs(y,w,p)}function Rr(u,p){u.H&&Te(u.H,function(y,w){ze(p,w,y)}),u.l&&Kr({},function(y,w){ze(p,w,y)})}function ti(u,p,y){y=Math.min(u.i.length,y);var w=u.l?I(u.l.Na,u.l,u):null;e:{var L=u.i;let B=-1;for(;;){const J=["count="+y];B==-1?0<y?(B=L[0].g,J.push("ofs="+B)):B=0:J.push("ofs="+B);let je=!0;for(let mt=0;mt<y;mt++){let Oe=L[mt].g;const wt=L[mt].map;if(Oe-=B,0>Oe)B=Math.max(0,L[mt].g-100),je=!1;else try{ql(wt,J,"req"+Oe+"_")}catch{w&&w(wt)}}if(je){w=J.join("&");break e}}}return u=u.i.splice(0,y),p.D=u,w}function es(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;Be||se(),Y||(Be(),Y=!0),pe.add(p,u),u.v=0}}function Js(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Cn(I(u.Fa,u),Gl(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,Wl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Cn(I(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,rt(10),Ln(this),Wl(this))};function _a(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function Wl(u){u.g=new Nn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=on(u.qa);ze(p,"RID","rpc"),ze(p,"SID",u.K),ze(p,"AID",u.T),ze(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&ze(p,"TO",u.ja),ze(p,"TYPE","xmlhttp"),Rr(u,p),u.m&&u.o&&ei(p,u.m,u.o),u.L&&(u.g.I=u.L);var y=u.g;u=u.ia,y.L=1,y.v=Jr(on(p)),y.m=null,y.P=!0,ca(y,u)}n.Za=function(){this.C!=null&&(this.C=null,Ln(this),Js(this),rt(19))};function Ys(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function Zs(u,p){var y=null;if(u.g==p){Ys(u),_a(u),u.g=null;var w=2}else if($t(u.h,p))y=p.D,bl(u.h,p),w=1;else return;if(u.G!=0){if(p.o)if(w==1){y=p.m?p.m.length:0,p=Date.now()-p.F;var L=u.B;w=qi(),pt(w,new Fs(w,y)),er(u)}else es(u);else if(L=p.s,L==3||L==0&&0<p.X||!(w==1&&ch(u,p)||w==2&&Js(u)))switch(y&&0<y.length&&(p=u.h,p.i=p.i.concat(y)),L){case 1:Cr(u,5);break;case 4:Cr(u,10);break;case 3:Cr(u,6);break;default:Cr(u,2)}}}function Gl(u,p){let y=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(y*=2),y*p}function Cr(u,p){if(u.j.info("Error code "+p),p==2){var y=I(u.fb,u),w=u.Xa;const L=!w;w=new Ir(w||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Ji(w,"https"),Jr(w),L?ah(w.toString(),y):$l(w.toString(),y)}else rt(2);u.G=0,u.l&&u.l.sa(p),Kl(u),Qs(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function Kl(u){if(u.G=0,u.ka=[],u.l){const p=Fl(u.h);(p.length!=0||u.i.length!=0)&&(b(u.ka,p),b(u.ka,u.i),u.h.i.length=0,$(u.i),u.i.length=0),u.l.ra()}}function Ql(u,p,y){var w=y instanceof Ir?on(y):new Ir(y);if(w.g!="")p&&(w.g=p+"."+w.g),Qr(w,w.s);else{var L=f.location;w=L.protocol,p=p?p+"."+L.hostname:L.hostname,L=+L.port;var B=new Ir(null);w&&Ji(B,w),p&&(B.g=p),L&&Qr(B,L),y&&(B.l=y),w=B}return y=u.D,p=u.ya,y&&p&&ze(w,y,p),ze(w,"VER",u.la),Rr(u,w),w}function Xl(u,p,y){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new Xe(new Sr({eb:y})):new Xe(u.pa),p.Ha(u.J),p}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function va(){}n=va.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function eo(){}eo.prototype.g=function(u,p){return new qt(u,p)};function qt(u,p){ft.call(this),this.g=new ya(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!re(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!re(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new tr(this)}z(qt,ft),qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qt.prototype.close=function(){Ct(this.g)},qt.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.u&&(y={},y.__data__=na(u),u=y);p.i.push(new Ll(p.Ya++,u)),p.G==3&&er(p)},qt.prototype.N=function(){this.g.l=null,delete this.j,Ct(this.g),delete this.g,qt.aa.N.call(this)};function Jl(u){Qn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const y in p){u=y;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}z(Jl,Qn);function Yl(){bs.call(this),this.status=1}z(Yl,bs);function tr(u){this.g=u}z(tr,va),tr.prototype.ua=function(){pt(this.g,"a")},tr.prototype.ta=function(u){pt(this.g,new Jl(u))},tr.prototype.sa=function(u){pt(this.g,new Yl)},tr.prototype.ra=function(){pt(this.g,"b")},eo.prototype.createWebChannel=eo.prototype.g,qt.prototype.send=qt.prototype.o,qt.prototype.open=qt.prototype.m,qt.prototype.close=qt.prototype.close,Kv=function(){return new eo},Gv=function(){return qi()},Wv=Xn,of={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},js.NO_ERROR=0,js.TIMEOUT=8,js.HTTP_ERROR=6,rc=js,Dl.COMPLETE="complete",Hv=Dl,Ms.EventType=pn,pn.OPEN="a",pn.CLOSE="b",pn.ERROR="c",pn.MESSAGE="d",ft.prototype.listen=ft.prototype.K,qa=Ms,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,qv=Xe}).apply(typeof Gu<"u"?Gu:typeof self<"u"?self:typeof window<"u"?window:{});const Ny="@firebase/firestore",Dy="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}jt.UNAUTHENTICATED=new jt(null),jt.GOOGLE_CREDENTIALS=new jt("google-credentials-uid"),jt.FIRST_PARTY=new jt("first-party-uid"),jt.MOCK_USER=new jt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $o="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts=new Vf("@firebase/firestore");function Io(){return Ts.logLevel}function ie(n,...e){if(Ts.logLevel<=Pe.DEBUG){const t=e.map(Wf);Ts.debug(`Firestore (${$o}): ${n}`,...t)}}function $r(n,...e){if(Ts.logLevel<=Pe.ERROR){const t=e.map(Wf);Ts.error(`Firestore (${$o}): ${n}`,...t)}}function ki(n,...e){if(Ts.logLevel<=Pe.WARN){const t=e.map(Wf);Ts.warn(`Firestore (${$o}): ${n}`,...t)}}function Wf(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ye(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,Qv(n,i,t)}function Qv(n,e,t){let i=`FIRESTORE (${$o}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw $r(i),new Error(i)}function Ue(n,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,n||Qv(e,o,i)}function we(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends Kn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(jt.UNAUTHENTICATED)))}shutdown(){}}class FR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class UR{constructor(e){this.t=e,this.currentUser=jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ue(this.o===void 0,42304);let i=this.i;const o=g=>this.i!==i?(i=this.i,t(g)):Promise.resolve();let l=new Ur;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Ur,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=l;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},f=g=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>f(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?f(g):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Ur)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Ue(typeof i.accessToken=="string",31837,{l:i}),new Xv(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string",2055,{h:e}),new jt(e)}}class jR{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=jt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class BR{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new jR(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(jt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Oy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zR{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,nn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ue(this.o===void 0,3512);const i=l=>{l.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,ie("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const o=l=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Oy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ue(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Oy(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $R(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */function Jv(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=$R(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%62))}return i}}function Se(n,e){return n<e?-1:n>e?1:0}function af(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=n.codePointAt(t),o=e.codePointAt(t);if(i!==o){if(i<128&&o<128)return Se(i,o);{const l=Jv(),h=qR(l.encode(Vy(n,t)),l.encode(Vy(e,t)));return h!==0?h:Se(i,o)}}t+=i>65535?2:1}return Se(n.length,e.length)}function Vy(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function qR(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Se(n[t],e[t]);return Se(n.length,e.length)}function Vo(n,e,t){return n.length===e.length&&n.every(((i,o)=>t(i,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy="__name__";class or{constructor(e,t,i){t===void 0?t=0:t>e.length&&ye(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&ye(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return or.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof or?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=or.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Se(e.length,t.length)}static compareSegments(e,t){const i=or.isNumericId(e),o=or.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?or.extractNumericId(e).compare(or.extractNumericId(t)):af(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ri.fromString(e.substring(4,e.length-2))}}class We extends or{construct(e,t,i){return new We(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new te(q.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new We(t)}static emptyPath(){return new We([])}}const HR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dt extends or{construct(e,t,i){return new Dt(e,t,i)}static isValidIdentifier(e){return HR.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===xy}static keyField(){return new Dt([xy])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new te(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new te(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new te(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=g,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(i+=f,o++):(l(),o++)}if(l(),h)throw new te(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Dt(t)}static emptyPath(){return new Dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.path=e}static fromPath(e){return new fe(We.fromString(e))}static fromName(e){return new fe(We.fromString(e).popFirst(5))}static empty(){return new fe(We.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&We.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return We.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new fe(new We(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yv(n,e,t){if(!t)throw new te(q.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function WR(n,e,t,i){if(e===!0&&i===!0)throw new te(q.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ly(n){if(!fe.isDocumentKey(n))throw new te(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function My(n){if(fe.isDocumentKey(n))throw new te(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Zv(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Bc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ye(12329,{type:typeof n})}function Ni(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new te(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Bc(n);throw new te(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function ht(n,e){const t={typeString:n};return e&&(t.value=e),t}function vl(n,e){if(!Zv(n))throw new te(q.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const h=n[i];if(o&&typeof h!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${i}' field to equal '${l.value}'`;break}}if(t)throw new te(q.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by=-62135596800,Fy=1e6;class Qe{static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*Fy);return new Qe(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new te(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new te(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<by)throw new te(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Fy}_compareTo(e){return this.seconds===e.seconds?Se(this.nanoseconds,e.nanoseconds):Se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Qe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(vl(e,Qe._jsonSchema))return new Qe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-by;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Qe._jsonSchemaVersion="firestore/timestamp/1.0",Qe._jsonSchema={type:ht("string",Qe._jsonSchemaVersion),seconds:ht("number"),nanoseconds:ht("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new Qe(0,0))}static max(){return new Ee(new Qe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const il=-1;function GR(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Ee.fromTimestamp(i===1e9?new Qe(t+1,0):new Qe(t,i));return new Di(o,fe.empty(),e)}function KR(n){return new Di(n.readTime,n.key,il)}class Di{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Di(Ee.min(),fe.empty(),il)}static max(){return new Di(Ee.max(),fe.empty(),il)}}function QR(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=fe.comparator(n.documentKey,e.documentKey),t!==0?t:Se(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class JR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qo(n){if(n.code!==q.FAILED_PRECONDITION||n.message!==XR)throw n;ie("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ye(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new H(((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof H?t:H.resolve(t)}catch(t){return H.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):H.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):H.reject(t)}static resolve(e){return new H(((t,i)=>{t(e)}))}static reject(e){return new H(((t,i)=>{i(e)}))}static waitFor(e){return new H(((t,i)=>{let o=0,l=0,h=!1;e.forEach((f=>{++o,f.next((()=>{++l,h&&l===o&&t()}),(g=>i(g)))})),h=!0,l===o&&t()}))}static or(e){let t=H.resolve(!1);for(const i of e)t=t.next((o=>o?H.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,l)=>{i.push(t.call(this,o,l))})),this.waitFor(i)}static mapArray(e,t){return new H(((i,o)=>{const l=e.length,h=new Array(l);let f=0;for(let g=0;g<l;g++){const _=g;t(e[_]).next((E=>{h[_]=E,++f,f===l&&i(h)}),(E=>o(E)))}}))}static doWhile(e,t){return new H(((i,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):i()};l()}))}}function YR(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ho(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class zc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this._e(i),this.ae=i=>t.writeSequenceNumber(i))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}zc.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf=-1;function $c(n){return n==null}function _c(n){return n===0&&1/n==-1/0}function ZR(n){return typeof n=="number"&&Number.isInteger(n)&&!_c(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE="";function e1(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Uy(e)),e=t1(n.get(t),e);return Uy(e)}function t1(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case eE:t+="";break;default:t+=l}}return t}function Uy(n){return n+eE+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jy(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function As(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function tE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t){this.comparator=e,this.root=t||Nt.EMPTY}insert(e,t){return new et(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Nt.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Nt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ku(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ku(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ku(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ku(this.root,e,this.comparator,!0)}}class Ku{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Nt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Nt.RED,this.left=o??Nt.EMPTY,this.right=l??Nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Nt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Nt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ye(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ye(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ye(27949);return e+(this.isRed()?0:1)}}Nt.EMPTY=null,Nt.RED=!0,Nt.BLACK=!1;Nt.EMPTY=new class{constructor(){this.size=0}get key(){throw ye(57766)}get value(){throw ye(16141)}get color(){throw ye(16727)}get left(){throw ye(29726)}get right(){throw ye(36894)}copy(e,t,i,o,l){return this}insert(e,t,i){return new Nt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new By(this.data.getIterator())}getIteratorFrom(e){return new By(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof _t)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new _t(this.comparator);return t.data=e,t}}class By{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e){this.fields=e,e.sort(Dt.comparator)}static empty(){return new $n([])}unionWith(e){let t=new _t(Dt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new $n(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Vo(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class nE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new nE("Invalid base64 string: "+l):l}})(e);return new Ot(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new Ot(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ot.EMPTY_BYTE_STRING=new Ot("");const n1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Oi(n){if(Ue(!!n,39018),typeof n=="string"){let e=0;const t=n1.exec(n);if(Ue(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:st(n.seconds),nanos:st(n.nanos)}}function st(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Vi(n){return typeof n=="string"?Ot.fromBase64String(n):Ot.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE="server_timestamp",iE="__type__",sE="__previous_value__",oE="__local_write_time__";function Qf(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[iE])===null||t===void 0?void 0:t.stringValue)===rE}function qc(n){const e=n.mapValue.fields[sE];return Qf(e)?qc(e):e}function sl(n){const e=Oi(n.mapValue.fields[oE].timestampValue);return new Qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e,t,i,o,l,h,f,g,_,E){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=E}}const vc="(default)";class ol{constructor(e,t){this.projectId=e,this.database=t||vc}static empty(){return new ol("","")}get isDefaultDatabase(){return this.database===vc}isEqual(e){return e instanceof ol&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE="__type__",i1="__max__",Qu={mapValue:{}},lE="__vector__",Ec="value";function xi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Qf(n)?4:o1(n)?9007199254740991:s1(n)?10:11:ye(28295,{value:n})}function pr(n,e){if(n===e)return!0;const t=xi(n);if(t!==xi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return sl(n).isEqual(sl(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Oi(o.timestampValue),f=Oi(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,l){return Vi(o.bytesValue).isEqual(Vi(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,l){return st(o.geoPointValue.latitude)===st(l.geoPointValue.latitude)&&st(o.geoPointValue.longitude)===st(l.geoPointValue.longitude)})(n,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return st(o.integerValue)===st(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=st(o.doubleValue),f=st(l.doubleValue);return h===f?_c(h)===_c(f):isNaN(h)&&isNaN(f)}return!1})(n,e);case 9:return Vo(n.arrayValue.values||[],e.arrayValue.values||[],pr);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(jy(h)!==jy(f))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(f[g]===void 0||!pr(h[g],f[g])))return!1;return!0})(n,e);default:return ye(52216,{left:n})}}function al(n,e){return(n.values||[]).find((t=>pr(t,e)))!==void 0}function xo(n,e){if(n===e)return 0;const t=xi(n),i=xi(e);if(t!==i)return Se(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Se(n.booleanValue,e.booleanValue);case 2:return(function(l,h){const f=st(l.integerValue||l.doubleValue),g=st(h.integerValue||h.doubleValue);return f<g?-1:f>g?1:f===g?0:isNaN(f)?isNaN(g)?0:-1:1})(n,e);case 3:return zy(n.timestampValue,e.timestampValue);case 4:return zy(sl(n),sl(e));case 5:return af(n.stringValue,e.stringValue);case 6:return(function(l,h){const f=Vi(l),g=Vi(h);return f.compareTo(g)})(n.bytesValue,e.bytesValue);case 7:return(function(l,h){const f=l.split("/"),g=h.split("/");for(let _=0;_<f.length&&_<g.length;_++){const E=Se(f[_],g[_]);if(E!==0)return E}return Se(f.length,g.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,h){const f=Se(st(l.latitude),st(h.latitude));return f!==0?f:Se(st(l.longitude),st(h.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return $y(n.arrayValue,e.arrayValue);case 10:return(function(l,h){var f,g,_,E;const T=l.fields||{},I=h.fields||{},U=(f=T[Ec])===null||f===void 0?void 0:f.arrayValue,z=(g=I[Ec])===null||g===void 0?void 0:g.arrayValue,$=Se(((_=U==null?void 0:U.values)===null||_===void 0?void 0:_.length)||0,((E=z==null?void 0:z.values)===null||E===void 0?void 0:E.length)||0);return $!==0?$:$y(U,z)})(n.mapValue,e.mapValue);case 11:return(function(l,h){if(l===Qu.mapValue&&h===Qu.mapValue)return 0;if(l===Qu.mapValue)return 1;if(h===Qu.mapValue)return-1;const f=l.fields||{},g=Object.keys(f),_=h.fields||{},E=Object.keys(_);g.sort(),E.sort();for(let T=0;T<g.length&&T<E.length;++T){const I=af(g[T],E[T]);if(I!==0)return I;const U=xo(f[g[T]],_[E[T]]);if(U!==0)return U}return Se(g.length,E.length)})(n.mapValue,e.mapValue);default:throw ye(23264,{le:t})}}function zy(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Se(n,e);const t=Oi(n),i=Oi(e),o=Se(t.seconds,i.seconds);return o!==0?o:Se(t.nanos,i.nanos)}function $y(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=xo(t[o],i[o]);if(l)return l}return Se(t.length,i.length)}function Lo(n){return lf(n)}function lf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=Oi(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Vi(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return fe.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=lf(l);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of i)l?l=!1:o+=",",o+=`${h}:${lf(t.fields[h])}`;return o+"}"})(n.mapValue):ye(61005,{value:n})}function ic(n){switch(xi(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=qc(n);return e?16+ic(e):16;case 5:return 2*n.stringValue.length;case 6:return Vi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,l)=>o+ic(l)),0)})(n.arrayValue);case 10:case 11:return(function(i){let o=0;return As(i.fields,((l,h)=>{o+=l.length+ic(h)})),o})(n.mapValue);default:throw ye(13486,{value:n})}}function qy(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function uf(n){return!!n&&"integerValue"in n}function Xf(n){return!!n&&"arrayValue"in n}function Hy(n){return!!n&&"nullValue"in n}function Wy(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function sc(n){return!!n&&"mapValue"in n}function s1(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[aE])===null||t===void 0?void 0:t.stringValue)===lE}function Xa(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return As(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=Xa(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Xa(n.arrayValue.values[t]);return e}return Object.assign({},n)}function o1(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===i1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this.value=e}static empty(){return new Sn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!sc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xa(t)}setAll(e){let t=Dt.emptyPath(),i={},o=[];e.forEach(((h,f)=>{if(!t.isImmediateParentOf(f)){const g=this.getFieldsMap(t);this.applyChanges(g,i,o),i={},o=[],t=f.popLast()}h?i[f.lastSegment()]=Xa(h):o.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());sc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return pr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];sc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){As(t,((o,l)=>e[o]=l));for(const o of i)delete e[o]}clone(){return new Sn(Xa(this.value))}}function uE(n){const e=[];return As(n.fields,((t,i)=>{const o=new Dt([t]);if(sc(i)){const l=uE(i.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new $n(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t,i,o,l,h,f){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new Bt(e,0,Ee.min(),Ee.min(),Ee.min(),Sn.empty(),0)}static newFoundDocument(e,t,i,o){return new Bt(e,1,t,Ee.min(),i,o,0)}static newNoDocument(e,t){return new Bt(e,2,t,Ee.min(),Ee.min(),Sn.empty(),0)}static newUnknownDocument(e,t){return new Bt(e,3,t,Ee.min(),Ee.min(),Sn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Sn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Sn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class wc{constructor(e,t){this.position=e,this.inclusive=t}}function Gy(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],h=n.position[o];if(l.field.isKeyField()?i=fe.comparator(fe.fromName(h.referenceValue),t.key):i=xo(h,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function Ky(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!pr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ll{constructor(e,t="asc"){this.field=e,this.dir=t}}function a1(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class cE{}class ct extends cE{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new u1(e,t,i):t==="array-contains"?new d1(e,i):t==="in"?new f1(e,i):t==="not-in"?new p1(e,i):t==="array-contains-any"?new m1(e,i):new ct(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new c1(e,i):new h1(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(xo(t,this.value)):t!==null&&xi(this.value)===xi(t)&&this.matchesComparison(xo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ye(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Wn extends cE{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Wn(e,t)}matches(e){return hE(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function hE(n){return n.op==="and"}function dE(n){return l1(n)&&hE(n)}function l1(n){for(const e of n.filters)if(e instanceof Wn)return!1;return!0}function cf(n){if(n instanceof ct)return n.field.canonicalString()+n.op.toString()+Lo(n.value);if(dE(n))return n.filters.map((e=>cf(e))).join(",");{const e=n.filters.map((t=>cf(t))).join(",");return`${n.op}(${e})`}}function fE(n,e){return n instanceof ct?(function(i,o){return o instanceof ct&&i.op===o.op&&i.field.isEqual(o.field)&&pr(i.value,o.value)})(n,e):n instanceof Wn?(function(i,o){return o instanceof Wn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((l,h,f)=>l&&fE(h,o.filters[f])),!0):!1})(n,e):void ye(19439)}function pE(n){return n instanceof ct?(function(t){return`${t.field.canonicalString()} ${t.op} ${Lo(t.value)}`})(n):n instanceof Wn?(function(t){return t.op.toString()+" {"+t.getFilters().map(pE).join(" ,")+"}"})(n):"Filter"}class u1 extends ct{constructor(e,t,i){super(e,t,i),this.key=fe.fromName(i.referenceValue)}matches(e){const t=fe.comparator(e.key,this.key);return this.matchesComparison(t)}}class c1 extends ct{constructor(e,t){super(e,"in",t),this.keys=mE("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class h1 extends ct{constructor(e,t){super(e,"not-in",t),this.keys=mE("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function mE(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((i=>fe.fromName(i.referenceValue)))}class d1 extends ct{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Xf(t)&&al(t.arrayValue,this.value)}}class f1 extends ct{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&al(this.value.arrayValue,t)}}class p1 extends ct{constructor(e,t){super(e,"not-in",t)}matches(e){if(al(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!al(this.value.arrayValue,t)}}class m1 extends ct{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Xf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>al(this.value.arrayValue,i)))}}/**
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
 */class g1{constructor(e,t=null,i=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.Pe=null}}function Qy(n,e=null,t=[],i=[],o=null,l=null,h=null){return new g1(n,e,t,i,o,l,h)}function Jf(n){const e=we(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>cf(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),$c(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>Lo(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>Lo(i))).join(",")),e.Pe=t}return e.Pe}function Yf(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!a1(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!fE(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ky(n.startAt,e.startAt)&&Ky(n.endAt,e.endAt)}function hf(n){return fe.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,t=null,i=[],o=[],l=null,h="F",f=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=g,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function y1(n,e,t,i,o,l,h,f){return new Wo(n,e,t,i,o,l,h,f)}function Zf(n){return new Wo(n)}function Xy(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function gE(n){return n.collectionGroup!==null}function Ja(n){const e=we(n);if(e.Te===null){e.Te=[];const t=new Set;for(const l of e.explicitOrderBy)e.Te.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new _t(Dt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((_=>{_.isInequality()&&(f=f.add(_.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Te.push(new ll(l,i))})),t.has(Dt.keyField().canonicalString())||e.Te.push(new ll(Dt.keyField(),i))}return e.Te}function lr(n){const e=we(n);return e.Ie||(e.Ie=_1(e,Ja(n))),e.Ie}function _1(n,e){if(n.limitType==="F")return Qy(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new ll(o.field,l)}));const t=n.endAt?new wc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new wc(n.startAt.position,n.startAt.inclusive):null;return Qy(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function df(n,e){const t=n.filters.concat([e]);return new Wo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ff(n,e,t){return new Wo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Hc(n,e){return Yf(lr(n),lr(e))&&n.limitType===e.limitType}function yE(n){return`${Jf(lr(n))}|lt:${n.limitType}`}function So(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>pE(o))).join(", ")}]`),$c(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>Lo(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>Lo(o))).join(",")),`Target(${i})`})(lr(n))}; limitType=${n.limitType})`}function Wc(n,e){return e.isFoundDocument()&&(function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):fe.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(n,e)&&(function(i,o){for(const l of Ja(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0})(n,e)&&(function(i,o){return!(i.startAt&&!(function(h,f,g){const _=Gy(h,f,g);return h.inclusive?_<=0:_<0})(i.startAt,Ja(i),o)||i.endAt&&!(function(h,f,g){const _=Gy(h,f,g);return h.inclusive?_>=0:_>0})(i.endAt,Ja(i),o))})(n,e)}function v1(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function _E(n){return(e,t)=>{let i=!1;for(const o of Ja(n)){const l=E1(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function E1(n,e,t){const i=n.field.isKeyField()?fe.comparator(e.key,t.key):(function(l,h,f){const g=h.data.field(l),_=f.data.field(l);return g!==null&&_!==null?xo(g,_):ye(42886)})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return ye(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){As(this.inner,((t,i)=>{for(const[o,l]of i)e(o,l)}))}isEmpty(){return tE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1=new et(fe.comparator);function qr(){return w1}const vE=new et(fe.comparator);function Ha(...n){let e=vE;for(const t of n)e=e.insert(t.key,t);return e}function EE(n){let e=vE;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function ys(){return Ya()}function wE(){return Ya()}function Ya(){return new Rs((n=>n.toString()),((n,e)=>n.isEqual(e)))}const T1=new et(fe.comparator),I1=new _t(fe.comparator);function ke(...n){let e=I1;for(const t of n)e=e.add(t);return e}const S1=new _t(Se);function A1(){return S1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_c(e)?"-0":e}}function TE(n){return{integerValue:""+n}}function R1(n,e){return ZR(e)?TE(e):ep(n,e)}/**
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
 */class Gc{constructor(){this._=void 0}}function C1(n,e,t){return n instanceof ul?(function(o,l){const h={fields:{[iE]:{stringValue:rE},[oE]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Qf(l)&&(l=qc(l)),l&&(h.fields[sE]=l),{mapValue:h}})(t,e):n instanceof cl?SE(n,e):n instanceof hl?AE(n,e):(function(o,l){const h=IE(o,l),f=Jy(h)+Jy(o.Ee);return uf(h)&&uf(o.Ee)?TE(f):ep(o.serializer,f)})(n,e)}function P1(n,e,t){return n instanceof cl?SE(n,e):n instanceof hl?AE(n,e):t}function IE(n,e){return n instanceof Tc?(function(i){return uf(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class ul extends Gc{}class cl extends Gc{constructor(e){super(),this.elements=e}}function SE(n,e){const t=RE(e);for(const i of n.elements)t.some((o=>pr(o,i)))||t.push(i);return{arrayValue:{values:t}}}class hl extends Gc{constructor(e){super(),this.elements=e}}function AE(n,e){let t=RE(e);for(const i of n.elements)t=t.filter((o=>!pr(o,i)));return{arrayValue:{values:t}}}class Tc extends Gc{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Jy(n){return st(n.integerValue||n.doubleValue)}function RE(n){return Xf(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(e,t){this.field=e,this.transform=t}}function N1(n,e){return n.field.isEqual(e.field)&&(function(i,o){return i instanceof cl&&o instanceof cl||i instanceof hl&&o instanceof hl?Vo(i.elements,o.elements,pr):i instanceof Tc&&o instanceof Tc?pr(i.Ee,o.Ee):i instanceof ul&&o instanceof ul})(n.transform,e.transform)}class D1{constructor(e,t){this.version=e,this.transformResults=t}}class ur{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ur}static exists(e){return new ur(void 0,e)}static updateTime(e){return new ur(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function oc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Kc{}function CE(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new kE(n.key,ur.none()):new El(n.key,n.data,ur.none());{const t=n.data,i=Sn.empty();let o=new _t(Dt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?i.delete(l):i.set(l,h),o=o.add(l)}return new Cs(n.key,i,new $n(o.toArray()),ur.none())}}function O1(n,e,t){n instanceof El?(function(o,l,h){const f=o.value.clone(),g=Zy(o.fieldTransforms,l,h.transformResults);f.setAll(g),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()})(n,e,t):n instanceof Cs?(function(o,l,h){if(!oc(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=Zy(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(PE(o)),g.setAll(f),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(n,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Za(n,e,t,i){return n instanceof El?(function(l,h,f,g){if(!oc(l.precondition,h))return f;const _=l.value.clone(),E=e_(l.fieldTransforms,g,h);return _.setAll(E),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(n,e,t,i):n instanceof Cs?(function(l,h,f,g){if(!oc(l.precondition,h))return f;const _=e_(l.fieldTransforms,g,h),E=h.data;return E.setAll(PE(l)),E.setAll(_),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(n,e,t,i):(function(l,h,f){return oc(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f})(n,e,t)}function V1(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=IE(i.transform,o||null);l!=null&&(t===null&&(t=Sn.empty()),t.set(i.field,l))}return t||null}function Yy(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Vo(i,o,((l,h)=>N1(l,h)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class El extends Kc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Cs extends Kc{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function PE(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function Zy(n,e,t){const i=new Map;Ue(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let o=0;o<t.length;o++){const l=n[o],h=l.transform,f=e.data.field(l.field);i.set(l.field,P1(h,f,t[o]))}return i}function e_(n,e,t){const i=new Map;for(const o of n){const l=o.transform,h=t.data.field(o.field);i.set(o.field,C1(l,h,e))}return i}class kE extends Kc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class x1 extends Kc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&O1(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Za(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Za(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=wE();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const g=CE(h,f);g!==null&&i.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(Ee.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ke())}isEqual(e){return this.batchId===e.batchId&&Vo(this.mutations,e.mutations,((t,i)=>Yy(t,i)))&&Vo(this.baseMutations,e.baseMutations,((t,i)=>Yy(t,i)))}}class tp{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Ue(e.mutations.length===i.length,58842,{Ve:e.mutations.length,me:i.length});let o=(function(){return T1})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,i[h].version);return new tp(e,t,i,o)}}/**
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
 */class M1{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class b1{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ut,Ve;function F1(n){switch(n){case q.OK:return ye(64938);case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0;default:return ye(15467,{code:n})}}function NE(n){if(n===void 0)return $r("GRPC error has no .code"),q.UNKNOWN;switch(n){case ut.OK:return q.OK;case ut.CANCELLED:return q.CANCELLED;case ut.UNKNOWN:return q.UNKNOWN;case ut.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case ut.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case ut.INTERNAL:return q.INTERNAL;case ut.UNAVAILABLE:return q.UNAVAILABLE;case ut.UNAUTHENTICATED:return q.UNAUTHENTICATED;case ut.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case ut.NOT_FOUND:return q.NOT_FOUND;case ut.ALREADY_EXISTS:return q.ALREADY_EXISTS;case ut.PERMISSION_DENIED:return q.PERMISSION_DENIED;case ut.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case ut.ABORTED:return q.ABORTED;case ut.OUT_OF_RANGE:return q.OUT_OF_RANGE;case ut.UNIMPLEMENTED:return q.UNIMPLEMENTED;case ut.DATA_LOSS:return q.DATA_LOSS;default:return ye(39323,{code:n})}}(Ve=ut||(ut={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const U1=new Ri([4294967295,4294967295],0);function t_(n){const e=Jv().encode(n),t=new $v;return t.update(e),new Uint8Array(t.digest())}function n_(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Ri([t,i],0),new Ri([o,l],0)]}class np{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Wa(`Invalid padding: ${t}`);if(i<0)throw new Wa(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Wa(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Wa(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Ri.fromNumber(this.fe)}pe(e,t,i){let o=e.add(t.multiply(Ri.fromNumber(i)));return o.compare(U1)===1&&(o=new Ri([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=t_(e),[i,o]=n_(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(i,o,l);if(!this.ye(h))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new np(l,o,t);return i.forEach((f=>h.insert(f))),h}insert(e){if(this.fe===0)return;const t=t_(e),[i,o]=n_(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(i,o,l);this.we(h)}}we(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Wa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,wl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Qc(Ee.min(),o,new et(Se),qr(),ke())}}class wl{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new wl(i,t,ke(),ke(),ke())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,t,i,o){this.Se=e,this.removedTargetIds=t,this.key=i,this.be=o}}class DE{constructor(e,t){this.targetId=e,this.De=t}}class OE{constructor(e,t,i=Ot.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class r_{constructor(){this.ve=0,this.Ce=i_(),this.Fe=Ot.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=ke(),t=ke(),i=ke();return this.Ce.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:ye(38017,{changeType:l})}})),new wl(this.Fe,this.Me,e,t,i)}ke(){this.xe=!1,this.Ce=i_()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Ue(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class j1{constructor(e){this.We=e,this.Ge=new Map,this.ze=qr(),this.je=Xu(),this.Je=Xu(),this.He=new et(Se)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const i=this.tt(t);switch(e.state){case 0:this.nt(t)&&i.Be(e.resumeToken);break;case 1:i.Ue(),i.Oe||i.ke(),i.Be(e.resumeToken);break;case 2:i.Ue(),i.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(i.Ke(),i.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),i.Be(e.resumeToken));break;default:ye(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((i,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,i=e.De.count,o=this.st(t);if(o){const l=o.target;if(hf(l))if(i===0){const h=new fe(l.path);this.Xe(t,h,Bt.newNoDocument(h,Ee.min()))}else Ue(i===1,20013,{expectedCount:i});else{const h=this.ot(t);if(h!==i){const f=this._t(e),g=f?this.ut(f,e,h):1;if(g!==0){this.rt(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,_)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=Vi(i).toUint8Array()}catch(g){if(g instanceof nE)return ki("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{f=new np(h,o,l)}catch(g){return ki(g instanceof Wa?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return f.fe===0?null:f}ut(e,t,i){return t.De.count===i-this.ht(e,t.targetId)?0:2}ht(e,t){const i=this.We.getRemoteKeysForTarget(t);let o=0;return i.forEach((l=>{const h=this.We.lt(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.Xe(t,l,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((l,h)=>{const f=this.st(h);if(f){if(l.current&&hf(f.target)){const g=new fe(f.target.path);this.Tt(g).has(h)||this.It(h,g)||this.Xe(h,g,Bt.newNoDocument(g,e))}l.Ne&&(t.set(h,l.Le()),l.ke())}}));let i=ke();this.Je.forEach(((l,h)=>{let f=!0;h.forEachWhile((g=>{const _=this.st(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(i=i.add(l))})),this.ze.forEach(((l,h)=>h.setReadTime(e)));const o=new Qc(e,t,this.He,this.ze,i);return this.ze=qr(),this.je=Xu(),this.Je=Xu(),this.He=new et(Se),o}Ze(e,t){if(!this.nt(e))return;const i=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,i),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,i){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),i&&(this.ze=this.ze.insert(t,i))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new r_,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new _t(Se),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new _t(Se),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||ie("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new r_),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Xu(){return new et(fe.comparator)}function i_(){return new et(fe.comparator)}const B1={asc:"ASCENDING",desc:"DESCENDING"},z1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$1={and:"AND",or:"OR"};class q1{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function pf(n,e){return n.useProto3Json||$c(e)?e:{value:e}}function Ic(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function VE(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function H1(n,e){return Ic(n,e.toTimestamp())}function cr(n){return Ue(!!n,49232),Ee.fromTimestamp((function(t){const i=Oi(t);return new Qe(i.seconds,i.nanos)})(n))}function rp(n,e){return mf(n,e).canonicalString()}function mf(n,e){const t=(function(o){return new We(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function xE(n){const e=We.fromString(n);return Ue(UE(e),10190,{key:e.toString()}),e}function gf(n,e){return rp(n.databaseId,e.path)}function $d(n,e){const t=xE(e);if(t.get(1)!==n.databaseId.projectId)throw new te(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new te(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new fe(ME(t))}function LE(n,e){return rp(n.databaseId,e)}function W1(n){const e=xE(n);return e.length===4?We.emptyPath():ME(e)}function yf(n){return new We(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ME(n){return Ue(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function s_(n,e,t){return{name:gf(n,e),fields:t.value.mapValue.fields}}function G1(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:ye(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(_,E){return _.useProto3Json?(Ue(E===void 0||typeof E=="string",58123),Ot.fromBase64String(E||"")):(Ue(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Ot.fromUint8Array(E||new Uint8Array))})(n,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&(function(_){const E=_.code===void 0?q.UNKNOWN:NE(_.code);return new te(E,_.message||"")})(h);t=new OE(i,o,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=$d(n,i.document.name),l=cr(i.document.updateTime),h=i.document.createTime?cr(i.document.createTime):Ee.min(),f=new Sn({mapValue:{fields:i.document.fields}}),g=Bt.newFoundDocument(o,l,h,f),_=i.targetIds||[],E=i.removedTargetIds||[];t=new ac(_,E,g.key,g)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=$d(n,i.document),l=i.readTime?cr(i.readTime):Ee.min(),h=Bt.newNoDocument(o,l),f=i.removedTargetIds||[];t=new ac([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=$d(n,i.document),l=i.removedTargetIds||[];t=new ac([],l,o,null)}else{if(!("filter"in e))return ye(11601,{At:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,h=new b1(o,l),f=i.targetId;t=new DE(f,h)}}return t}function K1(n,e){let t;if(e instanceof El)t={update:s_(n,e.key,e.value)};else if(e instanceof kE)t={delete:gf(n,e.key)};else if(e instanceof Cs)t={update:s_(n,e.key,e.data),updateMask:rC(e.fieldMask)};else{if(!(e instanceof x1))return ye(16599,{Rt:e.type});t={verify:gf(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,h){const f=h.transform;if(f instanceof ul)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof cl)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof hl)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof Tc)return{fieldPath:h.field.canonicalString(),increment:f.Ee};throw ye(20930,{transform:h.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:H1(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:ye(27497)})(n,e.precondition)),t}function Q1(n,e){return n&&n.length>0?(Ue(e!==void 0,14353),n.map((t=>(function(o,l){let h=o.updateTime?cr(o.updateTime):cr(l);return h.isEqual(Ee.min())&&(h=cr(l)),new D1(h,o.transformResults||[])})(t,e)))):[]}function X1(n,e){return{documents:[LE(n,e.path)]}}function J1(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=LE(n,o);const l=(function(_){if(_.length!==0)return FE(Wn.create(_,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(_){if(_.length!==0)return _.map((E=>(function(I){return{field:Ao(I.field),direction:eC(I.dir)}})(E)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=pf(n,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{Vt:t,parent:o}}function Y1(n){let e=W1(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Ue(i===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=(function(T){const I=bE(T);return I instanceof Wn&&dE(I)?I.getFilters():[I]})(t.where));let h=[];t.orderBy&&(h=(function(T){return T.map((I=>(function(z){return new ll(Ro(z.field),(function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(z.direction))})(I)))})(t.orderBy));let f=null;t.limit&&(f=(function(T){let I;return I=typeof T=="object"?T.value:T,$c(I)?null:I})(t.limit));let g=null;t.startAt&&(g=(function(T){const I=!!T.before,U=T.values||[];return new wc(U,I)})(t.startAt));let _=null;return t.endAt&&(_=(function(T){const I=!T.before,U=T.values||[];return new wc(U,I)})(t.endAt)),y1(e,o,h,l,f,"F",g,_)}function Z1(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ye(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function bE(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Ro(t.unaryFilter.field);return ct.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=Ro(t.unaryFilter.field);return ct.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Ro(t.unaryFilter.field);return ct.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Ro(t.unaryFilter.field);return ct.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ye(61313);default:return ye(60726)}})(n):n.fieldFilter!==void 0?(function(t){return ct.create(Ro(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ye(58110);default:return ye(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Wn.create(t.compositeFilter.filters.map((i=>bE(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ye(1026)}})(t.compositeFilter.op))})(n):ye(30097,{filter:n})}function eC(n){return B1[n]}function tC(n){return z1[n]}function nC(n){return $1[n]}function Ao(n){return{fieldPath:n.canonicalString()}}function Ro(n){return Dt.fromServerFormat(n.fieldPath)}function FE(n){return n instanceof ct?(function(t){if(t.op==="=="){if(Wy(t.value))return{unaryFilter:{field:Ao(t.field),op:"IS_NAN"}};if(Hy(t.value))return{unaryFilter:{field:Ao(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Wy(t.value))return{unaryFilter:{field:Ao(t.field),op:"IS_NOT_NAN"}};if(Hy(t.value))return{unaryFilter:{field:Ao(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ao(t.field),op:tC(t.op),value:t.value}}})(n):n instanceof Wn?(function(t){const i=t.getFilters().map((o=>FE(o)));return i.length===1?i[0]:{compositeFilter:{op:nC(t.op),filters:i}}})(n):ye(54877,{filter:n})}function rC(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function UE(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,t,i,o,l=Ee.min(),h=Ee.min(),f=Ot.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=g}withSequenceNumber(e){return new wi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new wi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e){this.gt=e}}function sC(n){const e=Y1({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ff(e,e.limit,"L"):e}/**
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
 */class oC{constructor(){this.Dn=new aC}addToCollectionParentIndex(e,t){return this.Dn.add(t),H.resolve()}getCollectionParents(e,t){return H.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return H.resolve()}deleteFieldIndex(e,t){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,t){return H.resolve()}getDocumentsMatchingTarget(e,t){return H.resolve(null)}getIndexType(e,t){return H.resolve(0)}getFieldIndexes(e,t){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,t){return H.resolve(Di.min())}getMinOffsetFromCollectionGroup(e,t){return H.resolve(Di.min())}updateCollectionGroup(e,t,i){return H.resolve()}updateIndexEntries(e,t){return H.resolve()}}class aC{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new _t(We.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new _t(We.comparator)).toArray()}}/**
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
 */const o_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},jE=41943040;class tn{static withCacheSize(e){return new tn(e,tn.DEFAULT_COLLECTION_PERCENTILE,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn.DEFAULT_COLLECTION_PERCENTILE=10,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,tn.DEFAULT=new tn(jE,tn.DEFAULT_COLLECTION_PERCENTILE,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),tn.DISABLED=new tn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Mo(0)}static ur(){return new Mo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_="LruGarbageCollector",lC=1048576;function l_([n,e],[t,i]){const o=Se(n,t);return o===0?Se(e,i):o}class uC{constructor(e){this.Tr=e,this.buffer=new _t(l_),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();l_(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class cC{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ie(a_,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ho(t)?ie(a_,"Ignoring IndexedDB error during garbage collection: ",t):await qo(t)}await this.Rr(3e5)}))}}class hC{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return H.resolve(zc.ue);const i=new uC(t);return this.Vr.forEachTarget(e,(o=>i.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>i.Er(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ie("LruGarbageCollector","Garbage collection skipped; disabled"),H.resolve(o_)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),o_):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let i,o,l,h,f,g,_;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(ie("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,h=Date.now(),this.nthSequenceNumber(e,o)))).next((T=>(i=T,f=Date.now(),this.removeTargets(e,i,t)))).next((T=>(l=T,g=Date.now(),this.removeOrphanedDocuments(e,i)))).next((T=>(_=Date.now(),Io()<=Pe.DEBUG&&ie("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${l} targets in `+(g-f)+`ms
	Removed ${T} documents in `+(_-g)+`ms
Total Duration: ${_-E}ms`),H.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T}))))}}function dC(n,e){return new hC(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(){this.changes=new Rs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Bt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?H.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class pC{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&Za(i.mutation,o,$n.empty(),Qe.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,ke()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=ke()){const o=ys();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((l=>{let h=Ha();return l.forEach(((f,g)=>{h=h.insert(f,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const i=ys();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,ke())))}populateOverlays(e,t,i){const o=[];return i.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,f)=>{t.set(h,f)}))}))}computeViews(e,t,i,o){let l=qr();const h=Ya(),f=(function(){return Ya()})();return t.forEach(((g,_)=>{const E=i.get(_.key);o.has(_.key)&&(E===void 0||E.mutation instanceof Cs)?l=l.insert(_.key,_):E!==void 0?(h.set(_.key,E.mutation.getFieldMask()),Za(E.mutation,_,E.mutation.getFieldMask(),Qe.now())):h.set(_.key,$n.empty())})),this.recalculateAndSaveOverlays(e,l).next((g=>(g.forEach(((_,E)=>h.set(_,E))),t.forEach(((_,E)=>{var T;return f.set(_,new pC(E,(T=h.get(_))!==null&&T!==void 0?T:null))})),f)))}recalculateAndSaveOverlays(e,t){const i=Ya();let o=new et(((h,f)=>h-f)),l=ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const f of h)f.keys().forEach((g=>{const _=t.get(g);if(_===null)return;let E=i.get(g)||$n.empty();E=f.applyToLocalView(_,E),i.set(g,E);const T=(o.get(f.batchId)||ke()).add(g);o=o.insert(f.batchId,T)}))})).next((()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const g=f.getNext(),_=g.key,E=g.value,T=wE();E.forEach((I=>{if(!l.has(I)){const U=CE(t.get(I),i.get(I));U!==null&&T.set(I,U),l=l.add(I)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,T))}return H.waitFor(h)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return(function(h){return fe.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):gE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):H.resolve(ys());let f=il,g=l;return h.next((_=>H.forEach(_,((E,T)=>(f<T.largestBatchId&&(f=T.largestBatchId),l.get(E)?H.resolve():this.remoteDocumentCache.getEntry(e,E).next((I=>{g=g.insert(E,I)}))))).next((()=>this.populateOverlays(e,_,l))).next((()=>this.computeViews(e,g,_,ke()))).next((E=>({batchId:f,changes:EE(E)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new fe(t)).next((i=>{let o=Ha();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let h=Ha();return this.indexManager.getCollectionParents(e,l).next((f=>H.forEach(f,(g=>{const _=(function(T,I){return new Wo(I,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,_,i,o).next((E=>{E.forEach(((T,I)=>{h=h.insert(T,I)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o)))).next((h=>{l.forEach(((g,_)=>{const E=_.getKey();h.get(E)===null&&(h=h.insert(E,Bt.newInvalidDocument(E)))}));let f=Ha();return h.forEach(((g,_)=>{const E=l.get(g);E!==void 0&&Za(E.mutation,_,$n.empty(),Qe.now()),Wc(t,_)&&(f=f.insert(g,_))})),f}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return H.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:cr(o.createTime)}})(t)),H.resolve()}getNamedQuery(e,t){return H.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:sC(o.bundledQuery),readTime:cr(o.readTime)}})(t)),H.resolve()}}/**
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
 */class yC{constructor(){this.overlays=new et(fe.comparator),this.kr=new Map}getOverlay(e,t){return H.resolve(this.overlays.get(t))}getOverlays(e,t){const i=ys();return H.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&i.set(o,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,l)=>{this.wt(e,t,l)})),H.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.kr.get(i);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.kr.delete(i)),H.resolve()}getOverlaysForCollection(e,t,i){const o=ys(),l=t.length+1,h=new fe(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const g=f.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===l&&g.largestBatchId>i&&o.set(g.getKey(),g)}return H.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new et(((_,E)=>_-E));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>i){let E=l.get(_.largestBatchId);E===null&&(E=ys(),l=l.insert(_.largestBatchId,E)),E.set(_.getKey(),_)}}const f=ys(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((_,E)=>f.set(_,E))),!(f.size()>=o)););return H.resolve(f)}wt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const h=this.kr.get(o.largestBatchId).delete(i.key);this.kr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(i.key,new M1(t,i));let l=this.kr.get(t);l===void 0&&(l=ke(),this.kr.set(t,l)),this.kr.set(t,l.add(i.key))}}/**
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
 */class _C{constructor(){this.sessionToken=Ot.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,H.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(){this.qr=new _t(At.Qr),this.$r=new _t(At.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const i=new At(e,t);this.qr=this.qr.add(i),this.$r=this.$r.add(i)}Kr(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new At(e,t))}Gr(e,t){e.forEach((i=>this.removeReference(i,t)))}zr(e){const t=new fe(new We([])),i=new At(t,e),o=new At(t,e+1),l=[];return this.$r.forEachInRange([i,o],(h=>{this.Wr(h),l.push(h.key)})),l}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new fe(new We([])),i=new At(t,e),o=new At(t,e+1);let l=ke();return this.$r.forEachInRange([i,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new At(e,0),i=this.qr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class At{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return fe.comparator(e.key,t.key)||Se(e.Hr,t.Hr)}static Ur(e,t){return Se(e.Hr,t.Hr)||fe.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new _t(At.Qr)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new L1(l,t,i,o);this.mutationQueue.push(h);for(const f of o)this.Yr=this.Yr.add(new At(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return H.resolve(h)}lookupMutationBatch(e,t){return H.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Xr(i),l=o<0?0:o;return H.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?Kf:this.er-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new At(t,0),o=new At(t,Number.POSITIVE_INFINITY),l=[];return this.Yr.forEachInRange([i,o],(h=>{const f=this.Zr(h.Hr);l.push(f)})),H.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new _t(Se);return t.forEach((o=>{const l=new At(o,0),h=new At(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([l,h],(f=>{i=i.add(f.Hr)}))})),H.resolve(this.ei(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;fe.isDocumentKey(l)||(l=l.child(""));const h=new At(new fe(l),0);let f=new _t(Se);return this.Yr.forEachWhile((g=>{const _=g.key.path;return!!i.isPrefixOf(_)&&(_.length===o&&(f=f.add(g.Hr)),!0)}),h),H.resolve(this.ei(f))}ei(e){const t=[];return e.forEach((i=>{const o=this.Zr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Ue(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Yr;return H.forEach(t.mutations,(o=>{const l=new At(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=i}))}rr(e){}containsKey(e,t){const i=new At(t,0),o=this.Yr.firstAfterOrEqual(i);return H.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e){this.ni=e,this.docs=(function(){return new et(fe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,h=this.ni(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return H.resolve(i?i.document.mutableCopy():Bt.newInvalidDocument(t))}getEntries(e,t){let i=qr();return t.forEach((o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():Bt.newInvalidDocument(o))})),H.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=qr();const h=t.path,f=new fe(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(f);for(;g.hasNext();){const{key:_,value:{document:E}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||QR(KR(E),i)<=0||(o.has(E.key)||Wc(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return H.resolve(l)}getAllFromCollectionGroup(e,t,i,o){ye(9500)}ri(e,t){return H.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new wC(this)}getSize(e){return H.resolve(this.size)}}class wC extends fC{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(i)})),H.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e){this.persistence=e,this.ii=new Rs((t=>Jf(t)),Yf),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.si=0,this.oi=new ip,this.targetCount=0,this._i=Mo.ar()}forEachTarget(e,t){return this.ii.forEach(((i,o)=>t(o))),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.si&&(this.si=t),H.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Mo(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,H.resolve()}updateTargetData(e,t){return this.hr(t),H.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.ii.forEach(((h,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.ii.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),H.waitFor(l).next((()=>o))}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,t){const i=this.ii.get(t)||null;return H.resolve(i)}addMatchingKeys(e,t,i){return this.oi.Kr(t,i),H.resolve()}removeMatchingKeys(e,t,i){this.oi.Gr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),H.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),H.resolve()}getMatchingKeysForTargetId(e,t){const i=this.oi.Jr(t);return H.resolve(i)}containsKey(e,t){return H.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(e,t){this.ai={},this.overlays={},this.ui=new zc(0),this.ci=!1,this.ci=!0,this.li=new _C,this.referenceDelegate=e(this),this.hi=new TC(this),this.indexManager=new oC,this.remoteDocumentCache=(function(o){return new EC(o)})((i=>this.referenceDelegate.Pi(i))),this.serializer=new iC(t),this.Ti=new gC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new yC,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ai[e.toKey()];return i||(i=new vC(t,this.referenceDelegate),this.ai[e.toKey()]=i),i}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,i){ie("MemoryPersistence","Starting transaction:",e);const o=new IC(this.ui.next());return this.referenceDelegate.Ii(),i(o).next((l=>this.referenceDelegate.di(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ei(e,t){return H.or(Object.values(this.ai).map((i=>()=>i.containsKey(e,t))))}}class IC extends JR{constructor(e){super(),this.currentSequenceNumber=e}}class sp{constructor(e){this.persistence=e,this.Ai=new ip,this.Ri=null}static Vi(e){return new sp(e)}get mi(){if(this.Ri)return this.Ri;throw ye(60996)}addReference(e,t,i){return this.Ai.addReference(i,t),this.mi.delete(i.toString()),H.resolve()}removeReference(e,t,i){return this.Ai.removeReference(i,t),this.mi.add(i.toString()),H.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),H.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.mi.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.mi,(i=>{const o=fe.fromPath(i);return this.fi(e,o).next((l=>{l||t.removeEntry(o,Ee.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((i=>{i?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return H.or([()=>H.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Sc{constructor(e,t){this.persistence=e,this.gi=new Rs((i=>e1(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=dC(this,t)}static Vi(e,t){return new Sc(e,t)}Ii(){}di(e){return H.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}yr(e){let t=0;return this.gr(e,(i=>{t++})).next((()=>t))}gr(e,t){return H.forEach(this.gi,((i,o)=>this.Sr(e,i,o).next((l=>l?H.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ri(e,(h=>this.Sr(e,h,t).next((f=>{f||(i++,l.removeEntry(h,Ee.min()))})))).next((()=>l.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),H.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),H.resolve()}removeReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),H.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),H.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ic(e.data.value)),t}Sr(e,t,i){return H.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return H.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Is=i,this.ds=o}static Es(e,t){let i=ke(),o=ke();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new op(e,t.fromCache,i,o)}}/**
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
 */class SC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class AC{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return gI()?8:YR(zt())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.ps(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.ys(e,t,o,i).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new SC;return this.ws(e,t,h).next((f=>{if(l.result=f,this.Rs)return this.Ss(e,t,h,f.size)}))})).next((()=>l.result))}Ss(e,t,i,o){return i.documentReadCount<this.Vs?(Io()<=Pe.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",So(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),H.resolve()):(Io()<=Pe.DEBUG&&ie("QueryEngine","Query:",So(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.fs*o?(Io()<=Pe.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",So(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,lr(t))):H.resolve())}ps(e,t){if(Xy(t))return H.resolve(null);let i=lr(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=ff(t,null,"F"),i=lr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const h=ke(...l);return this.gs.getDocuments(e,h).next((f=>this.indexManager.getMinOffset(e,i).next((g=>{const _=this.bs(t,f);return this.Ds(t,_,h,g.readTime)?this.ps(e,ff(t,null,"F")):this.vs(e,_,t,g)}))))})))))}ys(e,t,i,o){return Xy(t)||o.isEqual(Ee.min())?H.resolve(null):this.gs.getDocuments(e,i).next((l=>{const h=this.bs(t,l);return this.Ds(t,h,i,o)?H.resolve(null):(Io()<=Pe.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),So(t)),this.vs(e,h,t,GR(o,il)).next((f=>f)))}))}bs(e,t){let i=new _t(_E(e));return t.forEach(((o,l)=>{Wc(e,l)&&(i=i.add(l))})),i}Ds(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ws(e,t,i){return Io()<=Pe.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",So(t)),this.gs.getDocumentsMatchingQuery(e,t,Di.min(),i)}vs(e,t,i,o){return this.gs.getDocumentsMatchingQuery(e,i,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap="LocalStore",RC=3e8;class CC{constructor(e,t,i,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new et(Se),this.Ms=new Rs((l=>Jf(l)),Yf),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(i)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new mC(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function PC(n,e,t,i){return new CC(n,e,t,i)}async function zE(n,e){const t=we(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((l=>(o=l,t.Ns(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const h=[],f=[];let g=ke();for(const _ of o){h.push(_.batchId);for(const E of _.mutations)g=g.add(E.key)}for(const _ of l){f.push(_.batchId);for(const E of _.mutations)g=g.add(E.key)}return t.localDocuments.getDocuments(i,g).next((_=>({Bs:_,removedBatchIds:h,addedBatchIds:f})))}))}))}function kC(n,e){const t=we(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),l=t.Os.newChangeBuffer({trackRemovals:!0});return(function(f,g,_,E){const T=_.batch,I=T.keys();let U=H.resolve();return I.forEach((z=>{U=U.next((()=>E.getEntry(g,z))).next(($=>{const b=_.docVersions.get(z);Ue(b!==null,48541),$.version.compareTo(b)<0&&(T.applyToRemoteDocument($,_),$.isValidDocument()&&($.setReadTime(_.commitVersion),E.addEntry($)))}))})),U.next((()=>f.mutationQueue.removeMutationBatch(g,T)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(f){let g=ke();for(let _=0;_<f.mutationResults.length;++_)f.mutationResults[_].transformResults.length>0&&(g=g.add(f.batch.mutations[_].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function $E(n){const e=we(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function NC(n,e){const t=we(n),i=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const f=[];e.targetChanges.forEach(((E,T)=>{const I=o.get(T);if(!I)return;f.push(t.hi.removeMatchingKeys(l,E.removedDocuments,T).next((()=>t.hi.addMatchingKeys(l,E.addedDocuments,T))));let U=I.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?U=U.withResumeToken(Ot.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):E.resumeToken.approximateByteSize()>0&&(U=U.withResumeToken(E.resumeToken,i)),o=o.insert(T,U),(function($,b,oe){return $.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=RC?!0:oe.addedDocuments.size+oe.modifiedDocuments.size+oe.removedDocuments.size>0})(I,U,E)&&f.push(t.hi.updateTargetData(l,U))}));let g=qr(),_=ke();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))})),f.push(DC(l,h,e.documentUpdates).next((E=>{g=E.Ls,_=E.ks}))),!i.isEqual(Ee.min())){const E=t.hi.getLastRemoteSnapshotVersion(l).next((T=>t.hi.setTargetsMetadata(l,l.currentSequenceNumber,i)));f.push(E)}return H.waitFor(f).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,g,_))).next((()=>g))})).then((l=>(t.Fs=o,l)))}function DC(n,e,t){let i=ke(),o=ke();return t.forEach((l=>i=i.add(l))),e.getEntries(n,i).next((l=>{let h=qr();return t.forEach(((f,g)=>{const _=l.get(f);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(f)),g.isNoDocument()&&g.version.isEqual(Ee.min())?(e.removeEntry(f,g.readTime),h=h.insert(f,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(f,g)):ie(ap,"Ignoring outdated watch update for ",f,". Current version:",_.version," Watch version:",g.version)})),{Ls:h,ks:o}}))}function OC(n,e){const t=we(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=Kf),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function VC(n,e){const t=we(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.hi.getTargetData(i,e).next((l=>l?(o=l,H.resolve(o)):t.hi.allocateTargetId(i).next((h=>(o=new wi(e,h,"TargetPurposeListen",i.currentSequenceNumber),t.hi.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.Fs.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(i.targetId,i),t.Ms.set(e,i.targetId)),i}))}async function _f(n,e,t){const i=we(n),o=i.Fs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(h=>i.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Ho(h))throw h;ie(ap,`Failed to update sequence numbers for target ${e}: ${h}`)}i.Fs=i.Fs.remove(e),i.Ms.delete(o.target)}function u_(n,e,t){const i=we(n);let o=Ee.min(),l=ke();return i.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,_,E){const T=we(g),I=T.Ms.get(E);return I!==void 0?H.resolve(T.Fs.get(I)):T.hi.getTargetData(_,E)})(i,h,lr(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,i.hi.getMatchingKeysForTargetId(h,f.targetId).next((g=>{l=g}))})).next((()=>i.Cs.getDocumentsMatchingQuery(h,e,t?o:Ee.min(),t?l:ke()))).next((f=>(xC(i,v1(e),f),{documents:f,qs:l})))))}function xC(n,e,t){let i=n.xs.get(e)||Ee.min();t.forEach(((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),n.xs.set(e,i)}class c_{constructor(){this.activeTargetIds=A1()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class LC{constructor(){this.Fo=new c_,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,i){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new c_,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class MC{xo(e){}shutdown(){}}/**
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
 */const h_="ConnectivityMonitor";class d_{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ie(h_,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ie(h_,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ju=null;function vf(){return Ju===null?Ju=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ju++,"0x"+Ju.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd="RestConnection",bC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class FC{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${i}/databases/${o}`,this.Ko=this.databaseId.database===vc?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Wo(e,t,i,o,l){const h=vf(),f=this.Go(e,t.toUriEncodedString());ie(qd,`Sending RPC '${e}' ${h}:`,f,i);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(g,o,l);const{host:_}=new URL(f),E=Ui(_);return this.jo(e,f,g,i,E).then((T=>(ie(qd,`Received RPC '${e}' ${h}: `,T),T)),(T=>{throw ki(qd,`RPC '${e}' ${h} failed with error: `,T,"url: ",f,"request:",i),T}))}Jo(e,t,i,o,l,h){return this.Wo(e,t,i,o,l)}zo(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+$o})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),i&&i.headers.forEach(((o,l)=>e[l]=o))}Go(e,t){const i=bC[e];return`${this.$o}/v1/${t}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut="WebChannelConnection";class jC extends FC{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,i,o,l){const h=vf();return new Promise(((f,g)=>{const _=new qv;_.setWithCredentials(!0),_.listenOnce(Hv.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case rc.NO_ERROR:const T=_.getResponseJson();ie(Ut,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(T)),f(T);break;case rc.TIMEOUT:ie(Ut,`RPC '${e}' ${h} timed out`),g(new te(q.DEADLINE_EXCEEDED,"Request time out"));break;case rc.HTTP_ERROR:const I=_.getStatus();if(ie(Ut,`RPC '${e}' ${h} failed with status:`,I,"response text:",_.getResponseText()),I>0){let U=_.getResponseJson();Array.isArray(U)&&(U=U[0]);const z=U==null?void 0:U.error;if(z&&z.status&&z.message){const $=(function(oe){const re=oe.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(re)>=0?re:q.UNKNOWN})(z.status);g(new te($,z.message))}else g(new te(q.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new te(q.UNAVAILABLE,"Connection failed."));break;default:ye(9055,{c_:e,streamId:h,l_:_.getLastErrorCode(),h_:_.getLastError()})}}finally{ie(Ut,`RPC '${e}' ${h} completed.`)}}));const E=JSON.stringify(o);ie(Ut,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",E,i,15)}))}P_(e,t,i){const o=vf(),l=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Kv(),f=Gv(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.zo(g.initMessageHeaders,t,i),g.encodeInitMessageHeaders=!0;const E=l.join("");ie(Ut,`Creating RPC '${e}' stream ${o}: ${E}`,g);const T=h.createWebChannel(E,g);this.T_(T);let I=!1,U=!1;const z=new UC({Ho:b=>{U?ie(Ut,`Not sending because RPC '${e}' stream ${o} is closed:`,b):(I||(ie(Ut,`Opening RPC '${e}' stream ${o} transport.`),T.open(),I=!0),ie(Ut,`RPC '${e}' stream ${o} sending:`,b),T.send(b))},Yo:()=>T.close()}),$=(b,oe,re)=>{b.listen(oe,(ee=>{try{re(ee)}catch(ue){setTimeout((()=>{throw ue}),0)}}))};return $(T,qa.EventType.OPEN,(()=>{U||(ie(Ut,`RPC '${e}' stream ${o} transport opened.`),z.s_())})),$(T,qa.EventType.CLOSE,(()=>{U||(U=!0,ie(Ut,`RPC '${e}' stream ${o} transport closed`),z.__(),this.I_(T))})),$(T,qa.EventType.ERROR,(b=>{U||(U=!0,ki(Ut,`RPC '${e}' stream ${o} transport errored. Name:`,b.name,"Message:",b.message),z.__(new te(q.UNAVAILABLE,"The operation could not be completed")))})),$(T,qa.EventType.MESSAGE,(b=>{var oe;if(!U){const re=b.data[0];Ue(!!re,16349);const ee=re,ue=(ee==null?void 0:ee.error)||((oe=ee[0])===null||oe===void 0?void 0:oe.error);if(ue){ie(Ut,`RPC '${e}' stream ${o} received error:`,ue);const Ce=ue.status;let Te=(function(C){const k=ut[C];if(k!==void 0)return NE(k)})(Ce),D=ue.message;Te===void 0&&(Te=q.INTERNAL,D="Unknown error status: "+Ce+" with message "+ue.message),U=!0,z.__(new te(Te,D)),T.close()}else ie(Ut,`RPC '${e}' stream ${o} received:`,re),z.a_(re)}})),$(f,Wv.STAT_EVENT,(b=>{b.stat===of.PROXY?ie(Ut,`RPC '${e}' stream ${o} detected buffering proxy`):b.stat===of.NOPROXY&&ie(Ut,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{z.o_()}),0),z}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function Hd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(n){return new q1(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(e,t,i=1e3,o=1.5,l=6e4){this.Fi=e,this.timerId=t,this.d_=i,this.E_=o,this.A_=l,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),i=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-i);o>0&&ie("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_="PersistentStream";class HE{constructor(e,t,i,o,l,h,f,g){this.Fi=e,this.w_=i,this.S_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=g,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new qE(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===q.RESOURCE_EXHAUSTED?($r(t.toString()),$r("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.b_===t&&this.W_(i,o)}),(i=>{e((()=>{const o=new te(q.UNKNOWN,"Fetching auth token failed: "+i.message);return this.G_(o)}))}))}W_(e,t){const i=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.e_((()=>{i((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{i((()=>this.G_(o)))})),this.stream.onMessage((o=>{i((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return ie(f_,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(ie(f_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class BC extends HE{constructor(e,t,i,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=G1(this.serializer,e),i=(function(l){if(!("targetChange"in l))return Ee.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?Ee.min():h.readTime?cr(h.readTime):Ee.min()})(e);return this.listener.J_(t,i)}H_(e){const t={};t.database=yf(this.serializer),t.addTarget=(function(l,h){let f;const g=h.target;if(f=hf(g)?{documents:X1(l,g)}:{query:J1(l,g).Vt},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=VE(l,h.resumeToken);const _=pf(l,h.expectedCount);_!==null&&(f.expectedCount=_)}else if(h.snapshotVersion.compareTo(Ee.min())>0){f.readTime=Ic(l,h.snapshotVersion.toTimestamp());const _=pf(l,h.expectedCount);_!==null&&(f.expectedCount=_)}return f})(this.serializer,e);const i=Z1(this.serializer,e);i&&(t.labels=i),this.k_(t)}Y_(e){const t={};t.database=yf(this.serializer),t.removeTarget=e,this.k_(t)}}class zC extends HE{constructor(e,t,i,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Ue(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ue(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Ue(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=Q1(e.writeResults,e.commitTime),i=cr(e.commitTime);return this.listener.ta(i,t)}na(){const e={};e.database=yf(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>K1(this.serializer,i)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{}class qC extends $C{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new te(q.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Wo(e,mf(t,i),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new te(q.UNKNOWN,l.toString())}))}Jo(e,t,i,o,l){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,f])=>this.connection.Jo(e,mf(t,i),o,h,f,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new te(q.UNKNOWN,h.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class HC{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?($r(t),this._a=!1):ie("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is="RemoteStore";class WC{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=l,this.Ea.xo((h=>{i.enqueueAndForget((async()=>{Ps(this)&&(ie(Is,"Restarting streams for network reachability change."),await(async function(g){const _=we(g);_.Ia.add(4),await Tl(_),_.Aa.set("Unknown"),_.Ia.delete(4),await Jc(_)})(this))}))})),this.Aa=new HC(i,o)}}async function Jc(n){if(Ps(n))for(const e of n.da)await e(!0)}async function Tl(n){for(const e of n.da)await e(!1)}function WE(n,e){const t=we(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),hp(t)?cp(t):Go(t).x_()&&up(t,e))}function lp(n,e){const t=we(n),i=Go(t);t.Ta.delete(e),i.x_()&&GE(t,e),t.Ta.size===0&&(i.x_()?i.B_():Ps(t)&&t.Aa.set("Unknown"))}function up(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ee.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Go(n).H_(e)}function GE(n,e){n.Ra.$e(e),Go(n).Y_(e)}function cp(n){n.Ra=new j1({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Go(n).start(),n.Aa.aa()}function hp(n){return Ps(n)&&!Go(n).M_()&&n.Ta.size>0}function Ps(n){return we(n).Ia.size===0}function KE(n){n.Ra=void 0}async function GC(n){n.Aa.set("Online")}async function KC(n){n.Ta.forEach(((e,t)=>{up(n,e)}))}async function QC(n,e){KE(n),hp(n)?(n.Aa.la(e),cp(n)):n.Aa.set("Unknown")}async function XC(n,e,t){if(n.Aa.set("Online"),e instanceof OE&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const f of l.targetIds)o.Ta.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.Ta.delete(f),o.Ra.removeTarget(f))})(n,e)}catch(i){ie(Is,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Ac(n,i)}else if(e instanceof ac?n.Ra.Ye(e):e instanceof DE?n.Ra.it(e):n.Ra.et(e),!t.isEqual(Ee.min()))try{const i=await $E(n.localStore);t.compareTo(i)>=0&&await(function(l,h){const f=l.Ra.Pt(h);return f.targetChanges.forEach(((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const E=l.Ta.get(_);E&&l.Ta.set(_,E.withResumeToken(g.resumeToken,h))}})),f.targetMismatches.forEach(((g,_)=>{const E=l.Ta.get(g);if(!E)return;l.Ta.set(g,E.withResumeToken(Ot.EMPTY_BYTE_STRING,E.snapshotVersion)),GE(l,g);const T=new wi(E.target,g,_,E.sequenceNumber);up(l,T)})),l.remoteSyncer.applyRemoteEvent(f)})(n,t)}catch(i){ie(Is,"Failed to raise snapshot:",i),await Ac(n,i)}}async function Ac(n,e,t){if(!Ho(e))throw e;n.Ia.add(1),await Tl(n),n.Aa.set("Offline"),t||(t=()=>$E(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{ie(Is,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Jc(n)}))}function QE(n,e){return e().catch((t=>Ac(n,t,e)))}async function Yc(n){const e=we(n),t=Li(e);let i=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Kf;for(;JC(e);)try{const o=await OC(e.localStore,i);if(o===null){e.Pa.length===0&&t.B_();break}i=o.batchId,YC(e,o)}catch(o){await Ac(e,o)}XE(e)&&JE(e)}function JC(n){return Ps(n)&&n.Pa.length<10}function YC(n,e){n.Pa.push(e);const t=Li(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function XE(n){return Ps(n)&&!Li(n).M_()&&n.Pa.length>0}function JE(n){Li(n).start()}async function ZC(n){Li(n).na()}async function eP(n){const e=Li(n);for(const t of n.Pa)e.X_(t.mutations)}async function tP(n,e,t){const i=n.Pa.shift(),o=tp.from(i,e,t);await QE(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await Yc(n)}async function nP(n,e){e&&Li(n).Z_&&await(async function(i,o){if((function(h){return F1(h)&&h!==q.ABORTED})(o.code)){const l=i.Pa.shift();Li(i).N_(),await QE(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o))),await Yc(i)}})(n,e),XE(n)&&JE(n)}async function p_(n,e){const t=we(n);t.asyncQueue.verifyOperationInProgress(),ie(Is,"RemoteStore received new credentials");const i=Ps(t);t.Ia.add(3),await Tl(t),i&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Jc(t)}async function rP(n,e){const t=we(n);e?(t.Ia.delete(2),await Jc(t)):e||(t.Ia.add(2),await Tl(t),t.Aa.set("Unknown"))}function Go(n){return n.Va||(n.Va=(function(t,i,o){const l=we(t);return l.ia(),new BC(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Zo:GC.bind(null,n),e_:KC.bind(null,n),n_:QC.bind(null,n),J_:XC.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),hp(n)?cp(n):n.Aa.set("Unknown")):(await n.Va.stop(),KE(n))}))),n.Va}function Li(n){return n.ma||(n.ma=(function(t,i,o){const l=we(t);return l.ia(),new zC(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:ZC.bind(null,n),n_:nP.bind(null,n),ea:eP.bind(null,n),ta:tP.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await Yc(n)):(await n.ma.stop(),n.Pa.length>0&&(ie(Is,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new Ur,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const h=Date.now()+i,f=new dp(e,t,h,o,l);return f.start(i),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fp(n,e){if($r("AsyncQueue",`${e}: ${n}`),Ho(n))return new te(q.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{static emptySet(e){return new No(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||fe.comparator(t.key,i.key):(t,i)=>fe.comparator(t.key,i.key),this.keyedMap=Ha(),this.sortedSet=new et(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof No)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new No;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(){this.fa=new et(fe.comparator)}track(e){const t=e.doc.key,i=this.fa.get(t);i?e.type!==0&&i.type===3?this.fa=this.fa.insert(t,e):e.type===3&&i.type!==1?this.fa=this.fa.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.fa=this.fa.remove(t):e.type===1&&i.type===2?this.fa=this.fa.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):ye(63341,{At:e,ga:i}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,i)=>{e.push(i)})),e}}class bo{constructor(e,t,i,o,l,h,f,g,_){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,i,o,l){const h=[];return t.forEach((f=>{h.push({type:0,doc:f})})),new bo(e,t,No.emptySet(t),h,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Hc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class sP{constructor(){this.queries=g_(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,i){const o=we(t),l=o.queries;o.queries=g_(),l.forEach(((h,f)=>{for(const g of f.wa)g.onError(i)}))})(this,new te(q.ABORTED,"Firestore shutting down"))}}function g_(){return new Rs((n=>yE(n)),Hc)}async function YE(n,e){const t=we(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Sa()&&e.ba()&&(i=2):(l=new iP,i=e.ba()?0:1);try{switch(i){case 0:l.ya=await t.onListen(o,!0);break;case 1:l.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=fp(h,`Initialization of query '${So(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.wa.push(e),e.va(t.onlineState),l.ya&&e.Ca(l.ya)&&pp(t)}async function ZE(n,e){const t=we(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const h=l.wa.indexOf(e);h>=0&&(l.wa.splice(h,1),l.wa.length===0?o=e.ba()?0:1:!l.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function oP(n,e){const t=we(n);let i=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.wa)f.Ca(o)&&(i=!0);h.ya=o}}i&&pp(t)}function aP(n,e,t){const i=we(n),o=i.queries.get(e);if(o)for(const l of o.wa)l.onError(t);i.queries.delete(e)}function pp(n){n.Da.forEach((e=>{e.next()}))}var Ef,y_;(y_=Ef||(Ef={})).Fa="default",y_.Cache="cache";class ew{constructor(e,t,i){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=i||{}}Ca(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new bo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const i=t!=="Offline";return(!this.options.ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=bo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Ef.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e){this.key=e}}class nw{constructor(e){this.key=e}}class lP{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=ke(),this.mutatedKeys=ke(),this.Xa=_E(e),this.eu=new No(this.Xa)}get tu(){return this.Ha}nu(e,t){const i=t?t.ru:new m_,o=t?t.eu:this.eu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((E,T)=>{const I=o.get(E),U=Wc(this.query,T)?T:null,z=!!I&&this.mutatedKeys.has(I.key),$=!!U&&(U.hasLocalMutations||this.mutatedKeys.has(U.key)&&U.hasCommittedMutations);let b=!1;I&&U?I.data.isEqual(U.data)?z!==$&&(i.track({type:3,doc:U}),b=!0):this.iu(I,U)||(i.track({type:2,doc:U}),b=!0,(g&&this.Xa(U,g)>0||_&&this.Xa(U,_)<0)&&(f=!0)):!I&&U?(i.track({type:0,doc:U}),b=!0):I&&!U&&(i.track({type:1,doc:I}),b=!0,(g||_)&&(f=!0)),b&&(U?(h=h.add(U),l=$?l.add(E):l.delete(E)):(h=h.delete(E),l=l.delete(E)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),l=l.delete(E.key),i.track({type:1,doc:E})}return{eu:h,ru:i,Ds:f,mutatedKeys:l}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const h=e.ru.pa();h.sort(((E,T)=>(function(U,z){const $=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ye(20277,{At:b})}};return $(U)-$(z)})(E.type,T.type)||this.Xa(E.doc,T.doc))),this.su(i),o=o!=null&&o;const f=t&&!o?this.ou():[],g=this.Za.size===0&&this.current&&!o?1:0,_=g!==this.Ya;return this.Ya=g,h.length!==0||_?{snapshot:new bo(this.query,e.eu,l,h,e.mutatedKeys,g===0,_,!1,!!i&&i.resumeToken.approximateByteSize()>0),_u:f}:{_u:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new m_,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=ke(),this.eu.forEach((i=>{this.au(i.key)&&(this.Za=this.Za.add(i.key))}));const t=[];return e.forEach((i=>{this.Za.has(i)||t.push(new nw(i))})),this.Za.forEach((i=>{e.has(i)||t.push(new tw(i))})),t}uu(e){this.Ha=e.qs,this.Za=ke();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return bo.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const mp="SyncEngine";class uP{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class cP{constructor(e){this.key=e,this.lu=!1}}class hP{constructor(e,t,i,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.hu={},this.Pu=new Rs((f=>yE(f)),Hc),this.Tu=new Map,this.Iu=new Set,this.du=new et(fe.comparator),this.Eu=new Map,this.Au=new ip,this.Ru={},this.Vu=new Map,this.mu=Mo.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function dP(n,e,t=!0){const i=lw(n);let o;const l=i.Pu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.cu()):o=await rw(i,e,t,!0),o}async function fP(n,e){const t=lw(n);await rw(t,e,!0,!1)}async function rw(n,e,t,i){const o=await VC(n.localStore,lr(e)),l=o.targetId,h=n.sharedClientState.addLocalQueryTarget(l,t);let f;return i&&(f=await pP(n,e,l,h==="current",o.resumeToken)),n.isPrimaryClient&&t&&WE(n.remoteStore,o),f}async function pP(n,e,t,i,o){n.gu=(T,I,U)=>(async function($,b,oe,re){let ee=b.view.nu(oe);ee.Ds&&(ee=await u_($.localStore,b.query,!1).then((({documents:D})=>b.view.nu(D,ee))));const ue=re&&re.targetChanges.get(b.targetId),Ce=re&&re.targetMismatches.get(b.targetId)!=null,Te=b.view.applyChanges(ee,$.isPrimaryClient,ue,Ce);return v_($,b.targetId,Te._u),Te.snapshot})(n,T,I,U);const l=await u_(n.localStore,e,!0),h=new lP(e,l.qs),f=h.nu(l.documents),g=wl.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),_=h.applyChanges(f,n.isPrimaryClient,g);v_(n,t,_._u);const E=new uP(e,t,h);return n.Pu.set(e,E),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),_.snapshot}async function mP(n,e,t){const i=we(n),o=i.Pu.get(e),l=i.Tu.get(o.targetId);if(l.length>1)return i.Tu.set(o.targetId,l.filter((h=>!Hc(h,e)))),void i.Pu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await _f(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&lp(i.remoteStore,o.targetId),wf(i,o.targetId)})).catch(qo)):(wf(i,o.targetId),await _f(i.localStore,o.targetId,!0))}async function gP(n,e){const t=we(n),i=t.Pu.get(e),o=t.Tu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),lp(t.remoteStore,i.targetId))}async function yP(n,e,t){const i=SP(n);try{const o=await(function(h,f){const g=we(h),_=Qe.now(),E=f.reduce(((U,z)=>U.add(z.key)),ke());let T,I;return g.persistence.runTransaction("Locally write mutations","readwrite",(U=>{let z=qr(),$=ke();return g.Os.getEntries(U,E).next((b=>{z=b,z.forEach(((oe,re)=>{re.isValidDocument()||($=$.add(oe))}))})).next((()=>g.localDocuments.getOverlayedDocuments(U,z))).next((b=>{T=b;const oe=[];for(const re of f){const ee=V1(re,T.get(re.key).overlayedDocument);ee!=null&&oe.push(new Cs(re.key,ee,uE(ee.value.mapValue),ur.exists(!0)))}return g.mutationQueue.addMutationBatch(U,_,oe,f)})).next((b=>{I=b;const oe=b.applyToLocalDocumentSet(T,$);return g.documentOverlayCache.saveOverlays(U,b.batchId,oe)}))})).then((()=>({batchId:I.batchId,changes:EE(T)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(h,f,g){let _=h.Ru[h.currentUser.toKey()];_||(_=new et(Se)),_=_.insert(f,g),h.Ru[h.currentUser.toKey()]=_})(i,o.batchId,t),await Il(i,o.changes),await Yc(i.remoteStore)}catch(o){const l=fp(o,"Failed to persist write");t.reject(l)}}async function iw(n,e){const t=we(n);try{const i=await NC(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.Eu.get(l);h&&(Ue(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.lu=!0:o.modifiedDocuments.size>0?Ue(h.lu,14607):o.removedDocuments.size>0&&(Ue(h.lu,42227),h.lu=!1))})),await Il(t,i,e)}catch(i){await qo(i)}}function __(n,e,t){const i=we(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Pu.forEach(((l,h)=>{const f=h.view.va(e);f.snapshot&&o.push(f.snapshot)})),(function(h,f){const g=we(h);g.onlineState=f;let _=!1;g.queries.forEach(((E,T)=>{for(const I of T.wa)I.va(f)&&(_=!0)})),_&&pp(g)})(i.eventManager,e),o.length&&i.hu.J_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function _P(n,e,t){const i=we(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Eu.get(e),l=o&&o.key;if(l){let h=new et(fe.comparator);h=h.insert(l,Bt.newNoDocument(l,Ee.min()));const f=ke().add(l),g=new Qc(Ee.min(),new Map,new et(Se),h,f);await iw(i,g),i.du=i.du.remove(l),i.Eu.delete(e),gp(i)}else await _f(i.localStore,e,!1).then((()=>wf(i,e,t))).catch(qo)}async function vP(n,e){const t=we(n),i=e.batch.batchId;try{const o=await kC(t.localStore,e);ow(t,i,null),sw(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Il(t,o)}catch(o){await qo(o)}}async function EP(n,e,t){const i=we(n);try{const o=await(function(h,f){const g=we(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let E;return g.mutationQueue.lookupMutationBatch(_,f).next((T=>(Ue(T!==null,37113),E=T.keys(),g.mutationQueue.removeMutationBatch(_,T)))).next((()=>g.mutationQueue.performConsistencyCheck(_))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(_,E,f))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,E))).next((()=>g.localDocuments.getDocuments(_,E)))}))})(i.localStore,e);ow(i,e,t),sw(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Il(i,o)}catch(o){await qo(o)}}function sw(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function ow(n,e,t){const i=we(n);let o=i.Ru[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.Ru[i.currentUser.toKey()]=o}}function wf(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Tu.get(e))n.Pu.delete(i),t&&n.hu.pu(i,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((i=>{n.Au.containsKey(i)||aw(n,i)}))}function aw(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(lp(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),gp(n))}function v_(n,e,t){for(const i of t)i instanceof tw?(n.Au.addReference(i.key,e),wP(n,i)):i instanceof nw?(ie(mp,"Document no longer in limbo: "+i.key),n.Au.removeReference(i.key,e),n.Au.containsKey(i.key)||aw(n,i.key)):ye(19791,{yu:i})}function wP(n,e){const t=e.key,i=t.path.canonicalString();n.du.get(t)||n.Iu.has(i)||(ie(mp,"New document in limbo: "+t),n.Iu.add(i),gp(n))}function gp(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new fe(We.fromString(e)),i=n.mu.next();n.Eu.set(i,new cP(t)),n.du=n.du.insert(t,i),WE(n.remoteStore,new wi(lr(Zf(t.path)),i,"TargetPurposeLimboResolution",zc.ue))}}async function Il(n,e,t){const i=we(n),o=[],l=[],h=[];i.Pu.isEmpty()||(i.Pu.forEach(((f,g)=>{h.push(i.gu(g,e,t).then((_=>{var E;if((_||t)&&i.isPrimaryClient){const T=_?!_.fromCache:(E=t==null?void 0:t.targetChanges.get(g.targetId))===null||E===void 0?void 0:E.current;i.sharedClientState.updateQueryState(g.targetId,T?"current":"not-current")}if(_){o.push(_);const T=op.Es(g.targetId,_);l.push(T)}})))})),await Promise.all(h),i.hu.J_(o),await(async function(g,_){const E=we(g);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>H.forEach(_,(I=>H.forEach(I.Is,(U=>E.persistence.referenceDelegate.addReference(T,I.targetId,U))).next((()=>H.forEach(I.ds,(U=>E.persistence.referenceDelegate.removeReference(T,I.targetId,U)))))))))}catch(T){if(!Ho(T))throw T;ie(ap,"Failed to update sequence numbers: "+T)}for(const T of _){const I=T.targetId;if(!T.fromCache){const U=E.Fs.get(I),z=U.snapshotVersion,$=U.withLastLimboFreeSnapshotVersion(z);E.Fs=E.Fs.insert(I,$)}}})(i.localStore,l))}async function TP(n,e){const t=we(n);if(!t.currentUser.isEqual(e)){ie(mp,"User change. New user:",e.toKey());const i=await zE(t.localStore,e);t.currentUser=e,(function(l,h){l.Vu.forEach((f=>{f.forEach((g=>{g.reject(new te(q.CANCELLED,h))}))})),l.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Il(t,i.Bs)}}function IP(n,e){const t=we(n),i=t.Eu.get(e);if(i&&i.lu)return ke().add(i.key);{let o=ke();const l=t.Tu.get(e);if(!l)return o;for(const h of l){const f=t.Pu.get(h);o=o.unionWith(f.view.tu)}return o}}function lw(n){const e=we(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=iw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=IP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_P.bind(null,e),e.hu.J_=oP.bind(null,e.eventManager),e.hu.pu=aP.bind(null,e.eventManager),e}function SP(n){const e=we(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=EP.bind(null,e),e}class Rc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Xc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return PC(this.persistence,new AC,e.initialUser,this.serializer)}Du(e){return new BE(sp.Vi,this.serializer)}bu(e){return new LC}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Rc.provider={build:()=>new Rc};class AP extends Rc{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Ue(this.persistence.referenceDelegate instanceof Sc,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new cC(i,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?tn.withCacheSize(this.cacheSizeBytes):tn.DEFAULT;return new BE((i=>Sc.Vi(i,t)),this.serializer)}}class Tf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>__(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=TP.bind(null,this.syncEngine),await rP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new sP})()}createDatastore(e){const t=Xc(e.databaseInfo.databaseId),i=(function(l){return new jC(l)})(e.databaseInfo);return(function(l,h,f,g){return new qC(l,h,f,g)})(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,l,h,f){return new WC(i,o,l,h,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>__(this.syncEngine,t,0)),(function(){return d_.C()?new d_:new MC})())}createSyncEngine(e,t){return(function(o,l,h,f,g,_,E){const T=new hP(o,l,h,f,g,_);return E&&(T.fu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=we(o);ie(Is,"RemoteStore shutting down."),l.Ia.add(5),await Tl(l),l.Ea.shutdown(),l.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Tf.provider={build:()=>new Tf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class uw{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):$r("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi="FirestoreClient";class RP{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=jt.UNAUTHENTICATED,this.clientId=Gf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,(async h=>{ie(Mi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(i,(h=>(ie(Mi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ur;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=fp(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function Wd(n,e){n.asyncQueue.verifyOperationInProgress(),ie(Mi,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async o=>{i.isEqual(o)||(await zE(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>{ki("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{ie("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{ki("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),n._offlineComponents=e}async function E_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await CP(n);ie(Mi,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>p_(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,o)=>p_(e.remoteStore,o))),n._onlineComponents=e}async function CP(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ie(Mi,"Using user provided OfflineComponentProvider");try{await Wd(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===q.FAILED_PRECONDITION||o.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;ki("Error using user provided cache. Falling back to memory cache: "+t),await Wd(n,new Rc)}}else ie(Mi,"Using default OfflineComponentProvider"),await Wd(n,new AP(void 0));return n._offlineComponents}async function cw(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ie(Mi,"Using user provided OnlineComponentProvider"),await E_(n,n._uninitializedComponentsProvider._online)):(ie(Mi,"Using default OnlineComponentProvider"),await E_(n,new Tf))),n._onlineComponents}function PP(n){return cw(n).then((e=>e.syncEngine))}async function hw(n){const e=await cw(n),t=e.eventManager;return t.onListen=dP.bind(null,e.syncEngine),t.onUnlisten=mP.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=fP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=gP.bind(null,e.syncEngine),t}function kP(n,e,t={}){const i=new Ur;return n.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,g,_){const E=new uw({next:I=>{E.Ou(),h.enqueueAndForget((()=>ZE(l,T)));const U=I.docs.has(f);!U&&I.fromCache?_.reject(new te(q.UNAVAILABLE,"Failed to get document because the client is offline.")):U&&I.fromCache&&g&&g.source==="server"?_.reject(new te(q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(I)},error:I=>_.reject(I)}),T=new ew(Zf(f.path),E,{includeMetadataChanges:!0,ka:!0});return YE(l,T)})(await hw(n),n.asyncQueue,e,t,i))),i.promise}function NP(n,e,t={}){const i=new Ur;return n.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,g,_){const E=new uw({next:I=>{E.Ou(),h.enqueueAndForget((()=>ZE(l,T))),I.fromCache&&g.source==="server"?_.reject(new te(q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(I)},error:I=>_.reject(I)}),T=new ew(f,E,{includeMetadataChanges:!0,ka:!0});return YE(l,T)})(await hw(n),n.asyncQueue,e,t,i))),i.promise}/**
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
 */function dw(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw="firestore.googleapis.com",T_=!0;class I_{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new te(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=fw,this.ssl=T_}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:T_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=jE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<lC)throw new te(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}WR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dw((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),(function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new te(q.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new te(q.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new te(q.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Zc{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new I_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new I_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new bR;switch(i.type){case"firstParty":return new BR(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new te(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=w_.get(t);i&&(ie("ComponentProvider","Removing Datastore"),w_.delete(t),i.terminate())})(this),Promise.resolve()}}function DP(n,e,t,i={}){var o;n=Ni(n,Zc);const l=Ui(e),h=n._getSettings(),f=Object.assign(Object.assign({},h),{emulatorOptions:n._getEmulatorOptions()}),g=`${e}:${t}`;l&&(Lc(`https://${g}`),Mc("Firestore",!0)),h.host!==fw&&h.host!==g&&ki("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _=Object.assign(Object.assign({},h),{host:g,ssl:l,emulatorOptions:i});if(!Es(_,f)&&(n._setSettings(_),i.mockUserToken)){let E,T;if(typeof i.mockUserToken=="string")E=i.mockUserToken,T=jt.MOCK_USER;else{E=rv(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const I=i.mockUserToken.sub||i.mockUserToken.user_id;if(!I)throw new te(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new jt(I)}n._authCredentials=new FR(new Xv(E,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new ks(this.firestore,e,this._query)}}class dt{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ci(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new dt(this.firestore,e,this._key)}toJSON(){return{type:dt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(vl(t,dt._jsonSchema))return new dt(e,i||null,new fe(We.fromString(t.referencePath)))}}dt._jsonSchemaVersion="firestore/documentReference/1.0",dt._jsonSchema={type:ht("string",dt._jsonSchemaVersion),referencePath:ht("string")};class Ci extends ks{constructor(e,t,i){super(e,t,Zf(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new dt(this.firestore,null,new fe(e))}withConverter(e){return new Ci(this.firestore,e,this._path)}}function gr(n,e,...t){if(n=vt(n),Yv("collection","path",e),n instanceof Zc){const i=We.fromString(e,...t);return My(i),new Ci(n,null,i)}{if(!(n instanceof dt||n instanceof Ci))throw new te(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(We.fromString(e,...t));return My(i),new Ci(n.firestore,null,i)}}function eh(n,e,...t){if(n=vt(n),arguments.length===1&&(e=Gf.newId()),Yv("doc","path",e),n instanceof Zc){const i=We.fromString(e,...t);return Ly(i),new dt(n,null,new fe(i))}{if(!(n instanceof dt||n instanceof Ci))throw new te(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(We.fromString(e,...t));return Ly(i),new dt(n.firestore,n instanceof Ci?n.converter:null,new fe(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_="AsyncQueue";class A_{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new qE(this,"async_queue_retry"),this.oc=()=>{const i=Hd();i&&ie(S_,"Visibility state changed to "+i.visibilityState),this.F_.y_()},this._c=e;const t=Hd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Hd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Ur;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Ho(e))throw e;ie(S_,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((i=>{throw this.tc=i,this.nc=!1,$r("INTERNAL UNHANDLED ERROR: ",R_(i)),i})).then((i=>(this.nc=!1,i))))));return this._c=t,t}enqueueAfterDelay(e,t,i){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=dp.createAndSchedule(this,e,t,i,(l=>this.lc(l)));return this.ec.push(o),o}ac(){this.tc&&ye(47125,{hc:R_(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function R_(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Sl extends Zc{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new A_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new A_(e),this._firestoreClient=void 0,await e}}}function OP(n,e){const t=typeof n=="object"?n:bc(),i=typeof n=="string"?n:vc,o=ml(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=Of("firestore");l&&DP(o,...l)}return o}function yp(n){if(n._terminated)throw new te(q.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||VP(n),n._firestoreClient}function VP(n){var e,t,i;const o=n._freezeSettings(),l=(function(f,g,_,E){return new r1(f,g,_,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,dw(E.experimentalLongPollingOptions),E.useFetchStreams,E.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new RP(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&(function(f){const g=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(g),_online:g}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this._byteString=e}static fromBase64String(e){try{return new An(Ot.fromBase64String(e))}catch(t){throw new te(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new An(Ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:An._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(vl(e,An._jsonSchema))return An.fromBase64String(e.bytes)}}An._jsonSchemaVersion="firestore/bytes/1.0",An._jsonSchema={type:ht("string",An._jsonSchemaVersion),bytes:ht("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new te(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new te(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new te(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:hr._jsonSchemaVersion}}static fromJSON(e){if(vl(e,hr._jsonSchema))return new hr(e.latitude,e.longitude)}}hr._jsonSchemaVersion="firestore/geoPoint/1.0",hr._jsonSchema={type:ht("string",hr._jsonSchemaVersion),latitude:ht("number"),longitude:ht("number")};/**
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
 */class dr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:dr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(vl(e,dr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new dr(e.vectorValues);throw new te(q.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}dr._jsonSchemaVersion="firestore/vectorValue/1.0",dr._jsonSchema={type:ht("string",dr._jsonSchemaVersion),vectorValues:ht("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xP=/^__.*__$/;class LP{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Cs(e,this.data,this.fieldMask,t,this.fieldTransforms):new El(e,this.data,t,this.fieldTransforms)}}function pw(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ye(40011,{Ec:n})}}class Ep{constructor(e,t,i,o,l,h){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Ep(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:i,mc:!1});return o.fc(e),o}gc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:i,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Cc(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(pw(this.Ec)&&xP.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class MP{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Xc(e)}Dc(e,t,i,o=!1){return new Ep({Ec:e,methodName:t,bc:i,path:Dt.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wp(n){const e=n._freezeSettings(),t=Xc(n._databaseId);return new MP(n._databaseId,!!e.ignoreUndefinedProperties,t)}function mw(n,e,t,i,o,l={}){const h=n.Dc(l.merge||l.mergeFields?2:0,e,t,o);_w("Data must be an object, but it was:",h,i);const f=gw(i,h);let g,_;if(l.merge)g=new $n(h.fieldMask),_=h.fieldTransforms;else if(l.mergeFields){const E=[];for(const T of l.mergeFields){const I=FP(e,T,t);if(!h.contains(I))throw new te(q.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);jP(E,I)||E.push(I)}g=new $n(E),_=h.fieldTransforms.filter((T=>g.covers(T.field)))}else g=null,_=h.fieldTransforms;return new LP(new Sn(f),g,_)}class Tp extends vp{_toFieldTransform(e){return new k1(e.path,new ul)}isEqual(e){return e instanceof Tp}}function bP(n,e,t,i=!1){return Ip(t,n.Dc(i?4:3,e))}function Ip(n,e){if(yw(n=vt(n)))return _w("Unsupported field value:",e,n),gw(n,e);if(n instanceof vp)return(function(i,o){if(!pw(o.Ec))throw o.wc(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(i,o){const l=[];let h=0;for(const f of i){let g=Ip(f,o.yc(h));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),h++}return{arrayValue:{values:l}}})(n,e)}return(function(i,o){if((i=vt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return R1(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=Qe.fromDate(i);return{timestampValue:Ic(o.serializer,l)}}if(i instanceof Qe){const l=new Qe(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Ic(o.serializer,l)}}if(i instanceof hr)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof An)return{bytesValue:VE(o.serializer,i._byteString)};if(i instanceof dt){const l=o.databaseId,h=i.firestore._databaseId;if(!h.isEqual(l))throw o.wc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:rp(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof dr)return(function(h,f){return{mapValue:{fields:{[aE]:{stringValue:lE},[Ec]:{arrayValue:{values:h.toArray().map((_=>{if(typeof _!="number")throw f.wc("VectorValues must only contain numeric values.");return ep(f.serializer,_)}))}}}}}})(i,o);throw o.wc(`Unsupported field value: ${Bc(i)}`)})(n,e)}function gw(n,e){const t={};return tE(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):As(n,((i,o)=>{const l=Ip(o,e.Vc(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function yw(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Qe||n instanceof hr||n instanceof An||n instanceof dt||n instanceof vp||n instanceof dr)}function _w(n,e,t){if(!yw(t)||!Zv(t)){const i=Bc(t);throw i==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+i)}}function FP(n,e,t){if((e=vt(e))instanceof _p)return e._internalPath;if(typeof e=="string")return vw(n,e);throw Cc("Field path arguments must be of type string or ",n,!1,void 0,t)}const UP=new RegExp("[~\\*/\\[\\]]");function vw(n,e,t){if(e.search(UP)>=0)throw Cc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new _p(...e.split("."))._internalPath}catch{throw Cc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Cc(n,e,t,i,o){const l=i&&!i.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let g="";return(l||h)&&(g+=" (found",l&&(g+=` in field ${i}`),h&&(g+=` in document ${o}`),g+=")"),new te(q.INVALID_ARGUMENT,f+n+g)}function jP(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new BP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(th("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class BP extends Ew{data(){return super.data()}}function th(n,e){return typeof e=="string"?vw(n,e):e instanceof _p?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zP(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new te(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Sp{}class ww extends Sp{}function Al(n,e,...t){let i=[];e instanceof Sp&&i.push(e),i=i.concat(t),(function(l){const h=l.filter((g=>g instanceof Ap)).length,f=l.filter((g=>g instanceof nh)).length;if(h>1||h>0&&f>0)throw new te(q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const o of i)n=o._apply(n);return n}class nh extends ww{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new nh(e,t,i)}_apply(e){const t=this._parse(e);return Tw(e._query,t),new ks(e.firestore,e.converter,df(e._query,t))}_parse(e){const t=wp(e.firestore);return(function(l,h,f,g,_,E,T){let I;if(_.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new te(q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){P_(T,E);const z=[];for(const $ of T)z.push(C_(g,l,$));I={arrayValue:{values:z}}}else I=C_(g,l,T)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||P_(T,E),I=bP(f,h,T,E==="in"||E==="not-in");return ct.create(_,E,I)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Rl(n,e,t){const i=e,o=th("where",n);return nh._create(o,i,t)}class Ap extends Sp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ap(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:Wn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let h=o;const f=l.getFlattenedFilters();for(const g of f)Tw(h,g),h=df(h,g)})(e._query,t),new ks(e.firestore,e.converter,df(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Rp extends ww{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Rp(e,t)}_apply(e){const t=(function(o,l,h){if(o.startAt!==null)throw new te(q.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new te(q.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ll(l,h)})(e._query,this._field,this._direction);return new ks(e.firestore,e.converter,(function(o,l){const h=o.explicitOrderBy.concat([l]);return new Wo(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function Cl(n,e="asc"){const t=e,i=th("orderBy",n);return Rp._create(i,t)}function C_(n,e,t){if(typeof(t=vt(t))=="string"){if(t==="")throw new te(q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!gE(e)&&t.indexOf("/")!==-1)throw new te(q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(We.fromString(t));if(!fe.isDocumentKey(i))throw new te(q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return qy(n,new fe(i))}if(t instanceof dt)return qy(n,t._key);throw new te(q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Bc(t)}.`)}function P_(n,e){if(!Array.isArray(n)||n.length===0)throw new te(q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Tw(n,e){const t=(function(o,l){for(const h of o)for(const f of h.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new te(q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new te(q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class $P{convertValue(e,t="none"){switch(xi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return st(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Vi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ye(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return As(e,((o,l)=>{i[o]=this.convertValue(l,t)})),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t[Ec].arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map((h=>st(h.doubleValue)));return new dr(l)}convertGeoPoint(e){return new hr(st(e.latitude),st(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=qc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(sl(e));default:return null}}convertTimestamp(e){const t=Oi(e);return new Qe(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=We.fromString(e);Ue(UE(i),9688,{name:e});const o=new ol(i.get(1),i.get(3)),l=new fe(i.popFirst(5));return o.isEqual(t)||$r(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iw(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}class Ga{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vs extends Ew{constructor(e,t,i,o,l,h){super(e,t,i,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new lc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(th("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new te(q.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=vs._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}vs._jsonSchemaVersion="firestore/documentSnapshot/1.0",vs._jsonSchema={type:ht("string",vs._jsonSchemaVersion),bundleSource:ht("string","DocumentSnapshot"),bundleName:ht("string"),bundle:ht("string")};class lc extends vs{data(e={}){return super.data(e)}}class Do{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Ga(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new lc(this._firestore,this._userDataWriter,i.key,i,new Ga(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new te(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((f=>{const g=new lc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ga(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const g=new lc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ga(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,E=-1;return f.type!==0&&(_=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),E=h.indexOf(f.doc.key)),{type:qP(f.type),doc:g,oldIndex:_,newIndex:E}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new te(q.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Do._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Gf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function qP(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ye(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HP(n){n=Ni(n,dt);const e=Ni(n.firestore,Sl);return kP(yp(e),n._key).then((t=>WP(e,n,t)))}Do._jsonSchemaVersion="firestore/querySnapshot/1.0",Do._jsonSchema={type:ht("string",Do._jsonSchemaVersion),bundleSource:ht("string","QuerySnapshot"),bundleName:ht("string"),bundle:ht("string")};class Sw extends $P{constructor(e){super(),this.firestore=e}convertBytes(e){return new An(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new dt(this.firestore,null,t)}}function Pl(n){n=Ni(n,ks);const e=Ni(n.firestore,Sl),t=yp(e),i=new Sw(e);return zP(n._query),NP(t,n._query).then((o=>new Do(e,i,n,o)))}function Aw(n,e,t){n=Ni(n,dt);const i=Ni(n.firestore,Sl),o=Iw(n.converter,e,t);return Rw(i,[mw(wp(i),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,ur.none())])}function kl(n,e){const t=Ni(n.firestore,Sl),i=eh(n),o=Iw(n.converter,e);return Rw(t,[mw(wp(n.firestore),"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,ur.exists(!1))]).then((()=>i))}function Rw(n,e){return(function(i,o){const l=new Ur;return i.asyncQueue.enqueueAndForget((async()=>yP(await PP(i),o,l))),l.promise})(yp(n),e)}function WP(n,e,t){const i=t.docs.get(e._key),o=new Sw(n);return new vs(n,o,e._key,i,new Ga(t.hasPendingWrites,t.fromCache),e.converter)}function If(){return new Tp("serverTimestamp")}(function(e,t=!0){(function(o){$o=o})(Ss),Pi(new jr("firestore",((i,{instanceIdentifier:o,options:l})=>{const h=i.getProvider("app").getImmediate(),f=new Sl(new UR(i.getProvider("auth-internal")),new zR(h,i.getProvider("app-check-internal")),(function(_,E){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new te(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ol(_.options.projectId,E)})(h,o),h);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),Rn(Ny,Dy,e),Rn(Ny,Dy,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP="type.googleapis.com/google.protobuf.Int64Value",KP="type.googleapis.com/google.protobuf.UInt64Value";function Cw(n,e){const t={};for(const i in n)n.hasOwnProperty(i)&&(t[i]=e(n[i]));return t}function Pc(n){if(n==null)return null;if(n instanceof Number&&(n=n.valueOf()),typeof n=="number"&&isFinite(n)||n===!0||n===!1||Object.prototype.toString.call(n)==="[object String]")return n;if(n instanceof Date)return n.toISOString();if(Array.isArray(n))return n.map(e=>Pc(e));if(typeof n=="function"||typeof n=="object")return Cw(n,e=>Pc(e));throw new Error("Data cannot be encoded in JSON: "+n)}function Fo(n){if(n==null)return n;if(n["@type"])switch(n["@type"]){case GP:case KP:{const e=Number(n.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+n);return e}default:throw new Error("Data cannot be decoded from JSON: "+n)}return Array.isArray(n)?n.map(e=>Fo(e)):typeof n=="function"||typeof n=="object"?Cw(n,e=>Fo(e)):n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class rn extends Kn{constructor(e,t,i){super(`${Cp}/${e}`,t||""),this.details=i,Object.setPrototypeOf(this,rn.prototype)}}function QP(n){if(n>=200&&n<300)return"ok";switch(n){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function kc(n,e){let t=QP(n),i=t,o;try{const l=e&&e.error;if(l){const h=l.status;if(typeof h=="string"){if(!k_[h])return new rn("internal","internal");t=k_[h],i=h}const f=l.message;typeof f=="string"&&(i=f),o=l.details,o!==void 0&&(o=Fo(o))}}catch{}return t==="ok"?null:new rn(t,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XP{constructor(e,t,i,o){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,nn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=t.getImmediate({optional:!0}),this.messaging=i.getImmediate({optional:!0}),this.auth||t.get().then(l=>this.auth=l,()=>{}),this.messaging||i.get().then(l=>this.messaging=l,()=>{}),this.appCheck||o==null||o.get().then(l=>this.appCheck=l,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),i=await this.getMessagingToken(),o=await this.getAppCheckToken(e);return{authToken:t,messagingToken:i,appCheckToken:o}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf="us-central1",JP=/^data: (.*?)(?:\n|$)/;function YP(n){let e=null;return{promise:new Promise((t,i)=>{e=setTimeout(()=>{i(new rn("deadline-exceeded","deadline-exceeded"))},n)}),cancel:()=>{e&&clearTimeout(e)}}}class ZP{constructor(e,t,i,o,l=Sf,h=(...f)=>fetch(...f)){this.app=e,this.fetchImpl=h,this.emulatorOrigin=null,this.contextProvider=new XP(e,t,i,o),this.cancelAllRequests=new Promise(f=>{this.deleteService=()=>Promise.resolve(f())});try{const f=new URL(l);this.customDomain=f.origin+(f.pathname==="/"?"":f.pathname),this.region=Sf}catch{this.customDomain=null,this.region=l}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function ek(n,e,t){const i=Ui(e);n.emulatorOrigin=`http${i?"s":""}://${e}:${t}`,i&&(Lc(n.emulatorOrigin),Mc("Functions",!0))}function tk(n,e,t){const i=o=>rk(n,e,o,{});return i.stream=(o,l)=>sk(n,e,o,l),i}async function nk(n,e,t,i){t["Content-Type"]="application/json";let o;try{o=await i(n,{method:"POST",body:JSON.stringify(e),headers:t})}catch{return{status:0,json:null}}let l=null;try{l=await o.json()}catch{}return{status:o.status,json:l}}async function Pw(n,e){const t={},i=await n.contextProvider.getContext(e.limitedUseAppCheckTokens);return i.authToken&&(t.Authorization="Bearer "+i.authToken),i.messagingToken&&(t["Firebase-Instance-ID-Token"]=i.messagingToken),i.appCheckToken!==null&&(t["X-Firebase-AppCheck"]=i.appCheckToken),t}function rk(n,e,t,i){const o=n._url(e);return ik(n,o,t,i)}async function ik(n,e,t,i){t=Pc(t);const o={data:t},l=await Pw(n,i),h=i.timeout||7e4,f=YP(h),g=await Promise.race([nk(e,o,l,n.fetchImpl),f.promise,n.cancelAllRequests]);if(f.cancel(),!g)throw new rn("cancelled","Firebase Functions instance was deleted.");const _=kc(g.status,g.json);if(_)throw _;if(!g.json)throw new rn("internal","Response is not valid JSON object.");let E=g.json.data;if(typeof E>"u"&&(E=g.json.result),typeof E>"u")throw new rn("internal","Response is missing data field.");return{data:Fo(E)}}function sk(n,e,t,i){const o=n._url(e);return ok(n,o,t,i||{})}async function ok(n,e,t,i){var o;t=Pc(t);const l={data:t},h=await Pw(n,i);h["Content-Type"]="application/json",h.Accept="text/event-stream";let f;try{f=await n.fetchImpl(e,{method:"POST",body:JSON.stringify(l),headers:h,signal:i==null?void 0:i.signal})}catch(U){if(U instanceof Error&&U.name==="AbortError"){const $=new rn("cancelled","Request was cancelled.");return{data:Promise.reject($),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject($)}}}}}}const z=kc(0,null);return{data:Promise.reject(z),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(z)}}}}}}let g,_;const E=new Promise((U,z)=>{g=U,_=z});(o=i==null?void 0:i.signal)===null||o===void 0||o.addEventListener("abort",()=>{const U=new rn("cancelled","Request was cancelled.");_(U)});const T=f.body.getReader(),I=ak(T,g,_,i==null?void 0:i.signal);return{stream:{[Symbol.asyncIterator](){const U=I.getReader();return{async next(){const{value:z,done:$}=await U.read();return{value:z,done:$}},async return(){return await U.cancel(),{done:!0,value:void 0}}}}},data:E}}function ak(n,e,t,i){const o=(h,f)=>{const g=h.match(JP);if(!g)return;const _=g[1];try{const E=JSON.parse(_);if("result"in E){e(Fo(E.result));return}if("message"in E){f.enqueue(Fo(E.message));return}if("error"in E){const T=kc(0,E);f.error(T),t(T);return}}catch(E){if(E instanceof rn){f.error(E),t(E);return}}},l=new TextDecoder;return new ReadableStream({start(h){let f="";return g();async function g(){if(i!=null&&i.aborted){const _=new rn("cancelled","Request was cancelled");return h.error(_),t(_),Promise.resolve()}try{const{value:_,done:E}=await n.read();if(E){f.trim()&&o(f.trim(),h),h.close();return}if(i!=null&&i.aborted){const I=new rn("cancelled","Request was cancelled");h.error(I),t(I),await n.cancel();return}f+=l.decode(_,{stream:!0});const T=f.split(`
`);f=T.pop()||"";for(const I of T)I.trim()&&o(I.trim(),h);return g()}catch(_){const E=_ instanceof rn?_:kc(0,null);h.error(E),t(E)}}},cancel(){return n.cancel()}})}const N_="@firebase/functions",D_="0.12.9";/**
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
 */const lk="auth-internal",uk="app-check-internal",ck="messaging-internal";function hk(n){const e=(t,{instanceIdentifier:i})=>{const o=t.getProvider("app").getImmediate(),l=t.getProvider(lk),h=t.getProvider(ck),f=t.getProvider(uk);return new ZP(o,l,h,f,i)};Pi(new jr(Cp,e,"PUBLIC").setMultipleInstances(!0)),Rn(N_,D_,n),Rn(N_,D_,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dk(n=bc(),e=Sf){const i=ml(vt(n),Cp).getImmediate({identifier:e}),o=Of("functions");return o&&fk(i,...o),i}function fk(n,e,t){ek(vt(n),e,t)}function kw(n,e,t){return tk(vt(n),e)}hk();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw="firebasestorage.googleapis.com",pk="storageBucket",mk=120*1e3,gk=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends Kn{constructor(e,t,i=0){super(Gd(e),`Firebase Storage: ${t} (${Gd(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,yr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Gd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var mr;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(mr||(mr={}));function Gd(n){return"storage/"+n}function yk(){const n="An unknown error occurred, please check the error payload for server response.";return new yr(mr.UNKNOWN,n)}function _k(){return new yr(mr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function vk(){return new yr(mr.CANCELED,"User canceled the upload/download.")}function Ek(n){return new yr(mr.INVALID_URL,"Invalid URL '"+n+"'.")}function wk(n){return new yr(mr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function O_(n){return new yr(mr.INVALID_ARGUMENT,n)}function Dw(){return new yr(mr.APP_DELETED,"The Firebase app was deleted.")}function Tk(n){return new yr(mr.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=qn.makeFromUrl(e,t)}catch{return new qn(e,"")}if(i.path==="")return i;throw wk(e)}static makeFromUrl(e,t){let i=null;const o="([A-Za-z0-9.\\-_]+)";function l(ue){ue.path.charAt(ue.path.length-1)==="/"&&(ue.path_=ue.path_.slice(0,-1))}const h="(/(.*))?$",f=new RegExp("^gs://"+o+h,"i"),g={bucket:1,path:3};function _(ue){ue.path_=decodeURIComponent(ue.path)}const E="v[A-Za-z0-9_]+",T=t.replace(/[.]/g,"\\."),I="(/([^?#]*).*)?$",U=new RegExp(`^https?://${T}/${E}/b/${o}/o${I}`,"i"),z={bucket:1,path:3},$=t===Nw?"(?:storage.googleapis.com|storage.cloud.google.com)":t,b="([^?#]*)",oe=new RegExp(`^https?://${$}/${o}/${b}`,"i"),ee=[{regex:f,indices:g,postModify:l},{regex:U,indices:z,postModify:_},{regex:oe,indices:{bucket:1,path:2},postModify:_}];for(let ue=0;ue<ee.length;ue++){const Ce=ee[ue],Te=Ce.regex.exec(e);if(Te){const D=Te[Ce.indices.bucket];let A=Te[Ce.indices.path];A||(A=""),i=new qn(D,A),Ce.postModify(i);break}}if(i==null)throw Ek(e);return i}}class Ik{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sk(n,e,t){let i=1,o=null,l=null,h=!1,f=0;function g(){return f===2}let _=!1;function E(...b){_||(_=!0,e.apply(null,b))}function T(b){o=setTimeout(()=>{o=null,n(U,g())},b)}function I(){l&&clearTimeout(l)}function U(b,...oe){if(_){I();return}if(b){I(),E.call(null,b,...oe);return}if(g()||h){I(),E.call(null,b,...oe);return}i<64&&(i*=2);let ee;f===1?(f=2,ee=0):ee=(i+Math.random())*1e3,T(ee)}let z=!1;function $(b){z||(z=!0,I(),!_&&(o!==null?(b||(f=2),clearTimeout(o),T(0)):b||(f=1)))}return T(0),l=setTimeout(()=>{h=!0,$(!0)},t),$}function Ak(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rk(n){return n!==void 0}function V_(n,e,t,i){if(i<e)throw O_(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw O_(`Invalid value for '${n}'. Expected ${t} or less.`)}function Ck(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const o=e(i)+"="+e(n[i]);t=t+o+"&"}return t=t.slice(0,-1),t}var Nc;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Nc||(Nc={}));/**
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
 */function Pk(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||o||l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(e,t,i,o,l,h,f,g,_,E,T,I=!0,U=!1){this.url_=e,this.method_=t,this.headers_=i,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=h,this.callback_=f,this.errorCallback_=g,this.timeout_=_,this.progressCallback_=E,this.connectionFactory_=T,this.retry=I,this.isUsingEmulator=U,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((z,$)=>{this.resolve_=z,this.reject_=$,this.start_()})}start_(){const e=(i,o)=>{if(o){i(!1,new Yu(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const h=f=>{const g=f.loaded,_=f.lengthComputable?f.total:-1;this.progressCallback_!==null&&this.progressCallback_(g,_)};this.progressCallback_!==null&&l.addUploadProgressListener(h),l.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(h),this.pendingConnection_=null;const f=l.getErrorCode()===Nc.NO_ERROR,g=l.getStatus();if(!f||Pk(g,this.additionalRetryCodes_)&&this.retry){const E=l.getErrorCode()===Nc.ABORT;i(!1,new Yu(!1,null,E));return}const _=this.successCodes_.indexOf(g)!==-1;i(!0,new Yu(_,l))})},t=(i,o)=>{const l=this.resolve_,h=this.reject_,f=o.connection;if(o.wasSuccessCode)try{const g=this.callback_(f,f.getResponse());Rk(g)?l(g):l()}catch(g){h(g)}else if(f!==null){const g=yk();g.serverResponse=f.getErrorText(),this.errorCallback_?h(this.errorCallback_(f,g)):h(g)}else if(o.canceled){const g=this.appDelete_?Dw():vk();h(g)}else{const g=_k();h(g)}};this.canceled_?t(!1,new Yu(!1,null,!0)):this.backoffId_=Sk(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Ak(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Yu{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function Nk(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function Dk(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Ok(n,e){e&&(n["X-Firebase-GMPID"]=e)}function Vk(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function xk(n,e,t,i,o,l,h=!0,f=!1){const g=Ck(n.urlParams),_=n.url+g,E=Object.assign({},n.headers);return Ok(E,e),Nk(E,t),Dk(E,l),Vk(E,i),new kk(_,n.method,E,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,h,f)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lk(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function Mk(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */class Dc{constructor(e,t){this._service=e,t instanceof qn?this._location=t:this._location=qn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Dc(e,t)}get root(){const e=new qn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Mk(this._location.path)}get storage(){return this._service}get parent(){const e=Lk(this._location.path);if(e===null)return null;const t=new qn(this._location.bucket,e);return new Dc(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Tk(e)}}function x_(n,e){const t=e==null?void 0:e[pk];return t==null?null:qn.makeFromBucketSpec(t,n)}function bk(n,e,t,i={}){n.host=`${e}:${t}`;const o=Ui(e);o&&(Lc(`https://${n.host}/b`),Mc("Storage",!0)),n._isUsingEmulator=!0,n._protocol=o?"https":"http";const{mockUserToken:l}=i;l&&(n._overrideAuthToken=typeof l=="string"?l:rv(l,n.app.options.projectId))}class Fk{constructor(e,t,i,o,l,h=!1){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=o,this._firebaseVersion=l,this._isUsingEmulator=h,this._bucket=null,this._host=Nw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=mk,this._maxUploadRetryTime=gk,this._requests=new Set,o!=null?this._bucket=qn.makeFromBucketSpec(o,this._host):this._bucket=x_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=qn.makeFromBucketSpec(this._url,e):this._bucket=x_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){V_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){V_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(nn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Dc(this,e)}_makeRequest(e,t,i,o,l=!0){if(this._deleted)return new Ik(Dw());{const h=xk(e,this._appId,i,o,t,this._firebaseVersion,l,this._isUsingEmulator);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,t){const[i,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,o).getPromise()}}const L_="@firebase/storage",M_="0.13.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow="storage";function Uk(n=bc(),e){n=vt(n);const i=ml(n,Ow).getImmediate({identifier:e}),o=Of("storage");return o&&jk(i,...o),i}function jk(n,e,t,i={}){bk(n,e,t,i)}function Bk(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new Fk(t,i,o,e,Ss)}function zk(){Pi(new jr(Ow,Bk,"PUBLIC").setMultipleInstances(!0)),Rn(L_,M_,""),Rn(L_,M_,"esm2017")}zk();const $k={apiKey:"AIzaSyBMwuPSGuAL3BC4KbmKv7BXwumOvQH4q_U",authDomain:"beastlyworkout-e05ac.firebaseapp.com",projectId:"beastlyworkout-e05ac",storageBucket:"beastlyworkout-e05ac.firebasestorage.app",messagingSenderId:"450850141428",appId:"1:450850141428:web:3cdba0ebf48acfa9f51aa1"},rh=ov($k),Gn=LR(rh),dn=OP(rh);Uk(rh);const Vw=dk(rh,"us-central1");EA(Gn,Dv);kw(Vw,"bootstrapFirstAdmin");const qk=kw(Vw,"setUserRole");async function iN(n,e){return(await qk({uid:n,role:e})).data}async function sN(){return Gn.currentUser?Gn.currentUser.getIdTokenResult(!0):null}async function Hk(n){const e=n??Gn.currentUser;if(!e)return null;const i=(await e.getIdTokenResult()).claims.role;return i==="admin"||i==="trainer"||i==="client"?i:null}function Ko(){return{createdAt:If(),updatedAt:If()}}function Wk(){return{updatedAt:If()}}function fn(){var e;const n=(e=Gn.currentUser)==null?void 0:e.uid;if(!n)throw new Error("unauthenticated");return n}async function Gk(n={}){const e=fn(),t=eh(dn,"users",e);return await Aw(t,{uid:e,...Ko(),...n},{merge:!0}),t}async function Kk(n){const e=n??fn();return HP(eh(dn,"users",e))}async function oN(n,e){const t=fn();await Aw(eh(dn,"users",t,"private",n),{...e,...Wk()},{merge:!0})}async function aN(n,e={}){const t=fn();return kl(gr(dn,"trainerClients"),{trainerId:t,clientId:n,...Ko(),...e})}async function lN(n){const e=fn(),t=Al(gr(dn,"trainerClients"),Rl("trainerId","==",e),Cl("createdAt","desc"));return Pl(t)}async function uN(n){const e=fn();return kl(gr(dn,"plans"),{trainerId:e,clientId:n.clientId,status:n.status,title:n.title,description:n.description??"",clientNotes:"",lastViewedAt:null,...Ko()})}async function cN(n,e){const t=fn(),i=n==="client"?"clientId":"trainerId",o=Al(gr(dn,"plans"),Rl(i,"==",t),Cl("createdAt","desc"));return Pl(o)}async function hN(n){const e=fn();return kl(gr(dn,"workoutLogs"),{trainerId:n.trainerId,clientId:e,sessionDate:n.sessionDate,notes:n.notes??"",durationMinutes:n.durationMinutes??null,trainerFeedback:"",...Ko()})}async function dN(n){const e=fn(),t=Al(gr(dn,"workoutLogs"),Rl("clientId","==",e),Cl("sessionDate","desc"));return Pl(t)}async function fN(n){const e=fn();return kl(gr(dn,"sessions"),{trainerId:e,clientId:n.clientId,startsAt:n.startsAt,endsAt:n.endsAt,type:n.type??"workout",notes:n.notes??"",...Ko()})}async function pN(n,e){const t=fn(),i=n==="client"?"clientId":"trainerId",o=Al(gr(dn,"sessions"),Rl(i,"==",t),Cl("startsAt","desc"));return Pl(o)}async function mN(n){const e=fn();return kl(gr(dn,"metrics"),{trainerId:n.trainerId,clientId:e,metricType:n.metricType,value:n.value,unit:n.unit,measuredAt:n.measuredAt,...Ko()})}async function gN(n){const e=fn(),t=Al(gr(dn,"metrics"),Rl("clientId","==",e),Cl("measuredAt","desc"));return Pl(t)}function xw(){const[n,e]=Z.useState(!0),[t,i]=Z.useState(Gn.currentUser),[o,l]=Z.useState(null);return Z.useEffect(()=>IA(Gn,async h=>{try{if(i(h),!h){l(null);return}await Pp(h);const f=await Hk(h);l(f)}catch{l(null)}finally{e(!1)}}),[]),Z.useMemo(()=>({initializing:n,user:t,role:o,isAuthenticated:!!t}),[n,t,o])}const Af=new Mr;Af.setCustomParameters({prompt:"select_account"});async function Pp(n){(await Kk(n.uid)).exists()||await Gk({email:n.email??"",displayName:n.displayName??"",role:"client"})}async function yN(){try{const n=await $A(Gn,Af);return await Pp(n.user),{redirected:!1,user:n.user}}catch(n){if(Qk(n))return await QA(Gn,Af),{redirected:!0,user:null};throw n}}async function _N(){const n=await JA(Gn);return n!=null&&n.user&&await Pp(n.user),n}async function vN(){return SA(Gn)}function Qk(n){if(!(typeof n=="object"&&n&&"code"in n))return!1;const e=String(n.code);return e==="auth/popup-blocked"||e==="auth/operation-not-supported-in-this-environment"}const Xk=Z.lazy(()=>Vc(()=>import("./AuthPage-DG-QBuSj.js"),__vite__mapDeps([0,1])).then(n=>({default:n.AuthPage}))),Jk=Z.lazy(()=>Vc(()=>import("./ClientDashboardPage-CKgj4U7I.js"),__vite__mapDeps([2,3,1])).then(n=>({default:n.ClientDashboardPage}))),Yk=Z.lazy(()=>Vc(()=>import("./CoachDashboardPage-CSUfAqYk.js"),__vite__mapDeps([4,3,1])).then(n=>({default:n.CoachDashboardPage}))),Zk=Z.lazy(()=>Vc(()=>import("./OnboardingPage-JOAR5esd.js"),__vite__mapDeps([5,1])).then(n=>({default:n.OnboardingPage})));function kp(){return Me.jsx("main",{className:"page page-center",children:Me.jsxs("div",{className:"card",children:[Me.jsx("p",{className:"eyebrow",children:"Gym PT"}),Me.jsx("h1",{children:"Caricamento sessione"})]})})}function b_({allow:n,children:e}){const{user:t,role:i,initializing:o}=xw();return o?Me.jsx(kp,{}):t?i?n.includes(i)?e:Me.jsx(_s,{to:i==="client"?"/app/client":"/app/coach",replace:!0}):n.includes("client")?e:Me.jsx(_s,{to:"/auth",replace:!0}):Me.jsx(_s,{to:"/auth",replace:!0})}function eN(){const{user:n,role:e,initializing:t}=xw();return t?Me.jsx(kp,{}):n?e?Me.jsx(_s,{to:e==="client"?"/app/client":"/app/coach",replace:!0}):Me.jsx(_s,{to:"/app/client",replace:!0}):Me.jsx(_s,{to:"/auth",replace:!0})}function tN(){return Me.jsx(Z.Suspense,{fallback:Me.jsx(kp,{}),children:Me.jsxs(jT,{children:[Me.jsx(ps,{path:"/",element:Me.jsx(eN,{})}),Me.jsx(ps,{path:"/auth",element:Me.jsx(Xk,{})}),Me.jsx(ps,{path:"/onboarding",element:Me.jsx(Zk,{})}),Me.jsx(ps,{path:"/app/coach",element:Me.jsx(b_,{allow:["admin","trainer"],children:Me.jsx(Yk,{})})}),Me.jsx(ps,{path:"/app/client",element:Me.jsx(b_,{allow:["client"],children:Me.jsx(Jk,{})})}),Me.jsx(ps,{path:"*",element:Me.jsx(_s,{to:"/",replace:!0})})]})})}K0.createRoot(document.getElementById("root")).render(Me.jsx(U_.StrictMode,{children:Me.jsx(GT,{children:Me.jsx(tN,{})})}));export{nN as L,_s as N,W_ as a,Gk as b,_N as c,sN as d,yN as e,cN as f,Hk as g,pN as h,dN as i,Me as j,gN as k,vN as l,hN as m,mN as n,lN as o,aN as p,uN as q,Z as r,fN as s,iN as t,xw as u,oN as v};
