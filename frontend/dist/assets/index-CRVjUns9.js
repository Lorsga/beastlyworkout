function sT(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in n)){const l=Object.getOwnPropertyDescriptor(i,o);l&&Object.defineProperty(n,o,l.get?l:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Y_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var zd={exports:{}},Ka={},Bd={exports:{}},Pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qg;function oT(){if(Qg)return Pe;Qg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),T=Symbol.iterator;function I(b){return b===null||typeof b!="object"?null:(b=T&&b[T]||b["@@iterator"],typeof b=="function"?b:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,$={};function L(b,H,de){this.props=b,this.context=H,this.refs=$,this.updater=de||V}L.prototype.isReactComponent={},L.prototype.setState=function(b,H){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,H,"setState")},L.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function oe(){}oe.prototype=L.prototype;function se(b,H,de){this.props=b,this.context=H,this.refs=$,this.updater=de||V}var Z=se.prototype=new oe;Z.constructor=se,j(Z,L.prototype),Z.isPureReactComponent=!0;var ne=Array.isArray,Te=Object.prototype.hasOwnProperty,_e={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function S(b,H,de){var Ae,Re={},De=null,Ue=null;if(H!=null)for(Ae in H.ref!==void 0&&(Ue=H.ref),H.key!==void 0&&(De=""+H.key),H)Te.call(H,Ae)&&!N.hasOwnProperty(Ae)&&(Re[Ae]=H[Ae]);var Fe=arguments.length-2;if(Fe===1)Re.children=de;else if(1<Fe){for(var $e=Array(Fe),Tt=0;Tt<Fe;Tt++)$e[Tt]=arguments[Tt+2];Re.children=$e}if(b&&b.defaultProps)for(Ae in Fe=b.defaultProps,Fe)Re[Ae]===void 0&&(Re[Ae]=Fe[Ae]);return{$$typeof:n,type:b,key:De,ref:Ue,props:Re,_owner:_e.current}}function C(b,H){return{$$typeof:n,type:b.type,key:H,ref:b.ref,props:b.props,_owner:b._owner}}function k(b){return typeof b=="object"&&b!==null&&b.$$typeof===n}function D(b){var H={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(de){return H[de]})}var M=/\/+/g;function R(b,H){return typeof b=="object"&&b!==null&&b.key!=null?D(""+b.key):H.toString(36)}function Ye(b,H,de,Ae,Re){var De=typeof b;(De==="undefined"||De==="boolean")&&(b=null);var Ue=!1;if(b===null)Ue=!0;else switch(De){case"string":case"number":Ue=!0;break;case"object":switch(b.$$typeof){case n:case e:Ue=!0}}if(Ue)return Ue=b,Re=Re(Ue),b=Ae===""?"."+R(Ue,0):Ae,ne(Re)?(de="",b!=null&&(de=b.replace(M,"$&/")+"/"),Ye(Re,H,de,"",function(Tt){return Tt})):Re!=null&&(k(Re)&&(Re=C(Re,de+(!Re.key||Ue&&Ue.key===Re.key?"":(""+Re.key).replace(M,"$&/")+"/")+b)),H.push(Re)),1;if(Ue=0,Ae=Ae===""?".":Ae+":",ne(b))for(var Fe=0;Fe<b.length;Fe++){De=b[Fe];var $e=Ae+R(De,Fe);Ue+=Ye(De,H,de,$e,Re)}else if($e=I(b),typeof $e=="function")for(b=$e.call(b),Fe=0;!(De=b.next()).done;)De=De.value,$e=Ae+R(De,Fe++),Ue+=Ye(De,H,de,$e,Re);else if(De==="object")throw H=String(b),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return Ue}function wt(b,H,de){if(b==null)return b;var Ae=[],Re=0;return Ye(b,Ae,"","",function(De){return H.call(de,De,Re++)}),Ae}function pt(b){if(b._status===-1){var H=b._result;H=H(),H.then(function(de){(b._status===0||b._status===-1)&&(b._status=1,b._result=de)},function(de){(b._status===0||b._status===-1)&&(b._status=2,b._result=de)}),b._status===-1&&(b._status=0,b._result=H)}if(b._status===1)return b._result.default;throw b._result}var Me={current:null},W={transition:null},te={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:W,ReactCurrentOwner:_e};function re(){throw Error("act(...) is not supported in production builds of React.")}return Pe.Children={map:wt,forEach:function(b,H,de){wt(b,function(){H.apply(this,arguments)},de)},count:function(b){var H=0;return wt(b,function(){H++}),H},toArray:function(b){return wt(b,function(H){return H})||[]},only:function(b){if(!k(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},Pe.Component=L,Pe.Fragment=t,Pe.Profiler=o,Pe.PureComponent=se,Pe.StrictMode=i,Pe.Suspense=m,Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,Pe.act=re,Pe.cloneElement=function(b,H,de){if(b==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+b+".");var Ae=j({},b.props),Re=b.key,De=b.ref,Ue=b._owner;if(H!=null){if(H.ref!==void 0&&(De=H.ref,Ue=_e.current),H.key!==void 0&&(Re=""+H.key),b.type&&b.type.defaultProps)var Fe=b.type.defaultProps;for($e in H)Te.call(H,$e)&&!N.hasOwnProperty($e)&&(Ae[$e]=H[$e]===void 0&&Fe!==void 0?Fe[$e]:H[$e])}var $e=arguments.length-2;if($e===1)Ae.children=de;else if(1<$e){Fe=Array($e);for(var Tt=0;Tt<$e;Tt++)Fe[Tt]=arguments[Tt+2];Ae.children=Fe}return{$$typeof:n,type:b.type,key:Re,ref:De,props:Ae,_owner:Ue}},Pe.createContext=function(b){return b={$$typeof:h,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},b.Provider={$$typeof:l,_context:b},b.Consumer=b},Pe.createElement=S,Pe.createFactory=function(b){var H=S.bind(null,b);return H.type=b,H},Pe.createRef=function(){return{current:null}},Pe.forwardRef=function(b){return{$$typeof:f,render:b}},Pe.isValidElement=k,Pe.lazy=function(b){return{$$typeof:v,_payload:{_status:-1,_result:b},_init:pt}},Pe.memo=function(b,H){return{$$typeof:y,type:b,compare:H===void 0?null:H}},Pe.startTransition=function(b){var H=W.transition;W.transition={};try{b()}finally{W.transition=H}},Pe.unstable_act=re,Pe.useCallback=function(b,H){return Me.current.useCallback(b,H)},Pe.useContext=function(b){return Me.current.useContext(b)},Pe.useDebugValue=function(){},Pe.useDeferredValue=function(b){return Me.current.useDeferredValue(b)},Pe.useEffect=function(b,H){return Me.current.useEffect(b,H)},Pe.useId=function(){return Me.current.useId()},Pe.useImperativeHandle=function(b,H,de){return Me.current.useImperativeHandle(b,H,de)},Pe.useInsertionEffect=function(b,H){return Me.current.useInsertionEffect(b,H)},Pe.useLayoutEffect=function(b,H){return Me.current.useLayoutEffect(b,H)},Pe.useMemo=function(b,H){return Me.current.useMemo(b,H)},Pe.useReducer=function(b,H,de){return Me.current.useReducer(b,H,de)},Pe.useRef=function(b){return Me.current.useRef(b)},Pe.useState=function(b){return Me.current.useState(b)},Pe.useSyncExternalStore=function(b,H,de){return Me.current.useSyncExternalStore(b,H,de)},Pe.useTransition=function(){return Me.current.useTransition()},Pe.version="18.3.1",Pe}var Xg;function jf(){return Xg||(Xg=1,Bd.exports=oT()),Bd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jg;function aT(){if(Jg)return Ka;Jg=1;var n=jf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,m,y){var v,T={},I=null,V=null;y!==void 0&&(I=""+y),m.key!==void 0&&(I=""+m.key),m.ref!==void 0&&(V=m.ref);for(v in m)i.call(m,v)&&!l.hasOwnProperty(v)&&(T[v]=m[v]);if(f&&f.defaultProps)for(v in m=f.defaultProps,m)T[v]===void 0&&(T[v]=m[v]);return{$$typeof:e,type:f,key:I,ref:V,props:T,_owner:o.current}}return Ka.Fragment=t,Ka.jsx=h,Ka.jsxs=h,Ka}var Yg;function lT(){return Yg||(Yg=1,zd.exports=aT()),zd.exports}var O=lT(),Q=jf();const Z_=Y_(Q),uT=sT({__proto__:null,default:Z_},[Q]);var Ku={},$d={exports:{}},en={},qd={exports:{}},Wd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zg;function cT(){return Zg||(Zg=1,(function(n){function e(W,te){var re=W.length;W.push(te);e:for(;0<re;){var b=re-1>>>1,H=W[b];if(0<o(H,te))W[b]=te,W[re]=H,re=b;else break e}}function t(W){return W.length===0?null:W[0]}function i(W){if(W.length===0)return null;var te=W[0],re=W.pop();if(re!==te){W[0]=re;e:for(var b=0,H=W.length,de=H>>>1;b<de;){var Ae=2*(b+1)-1,Re=W[Ae],De=Ae+1,Ue=W[De];if(0>o(Re,re))De<H&&0>o(Ue,Re)?(W[b]=Ue,W[De]=re,b=De):(W[b]=Re,W[Ae]=re,b=Ae);else if(De<H&&0>o(Ue,re))W[b]=Ue,W[De]=re,b=De;else break e}}return te}function o(W,te){var re=W.sortIndex-te.sortIndex;return re!==0?re:W.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();n.unstable_now=function(){return h.now()-f}}var m=[],y=[],v=1,T=null,I=3,V=!1,j=!1,$=!1,L=typeof setTimeout=="function"?setTimeout:null,oe=typeof clearTimeout=="function"?clearTimeout:null,se=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Z(W){for(var te=t(y);te!==null;){if(te.callback===null)i(y);else if(te.startTime<=W)i(y),te.sortIndex=te.expirationTime,e(m,te);else break;te=t(y)}}function ne(W){if($=!1,Z(W),!j)if(t(m)!==null)j=!0,pt(Te);else{var te=t(y);te!==null&&Me(ne,te.startTime-W)}}function Te(W,te){j=!1,$&&($=!1,oe(S),S=-1),V=!0;var re=I;try{for(Z(te),T=t(m);T!==null&&(!(T.expirationTime>te)||W&&!D());){var b=T.callback;if(typeof b=="function"){T.callback=null,I=T.priorityLevel;var H=b(T.expirationTime<=te);te=n.unstable_now(),typeof H=="function"?T.callback=H:T===t(m)&&i(m),Z(te)}else i(m);T=t(m)}if(T!==null)var de=!0;else{var Ae=t(y);Ae!==null&&Me(ne,Ae.startTime-te),de=!1}return de}finally{T=null,I=re,V=!1}}var _e=!1,N=null,S=-1,C=5,k=-1;function D(){return!(n.unstable_now()-k<C)}function M(){if(N!==null){var W=n.unstable_now();k=W;var te=!0;try{te=N(!0,W)}finally{te?R():(_e=!1,N=null)}}else _e=!1}var R;if(typeof se=="function")R=function(){se(M)};else if(typeof MessageChannel<"u"){var Ye=new MessageChannel,wt=Ye.port2;Ye.port1.onmessage=M,R=function(){wt.postMessage(null)}}else R=function(){L(M,0)};function pt(W){N=W,_e||(_e=!0,R())}function Me(W,te){S=L(function(){W(n.unstable_now())},te)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(W){W.callback=null},n.unstable_continueExecution=function(){j||V||(j=!0,pt(Te))},n.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<W?Math.floor(1e3/W):5},n.unstable_getCurrentPriorityLevel=function(){return I},n.unstable_getFirstCallbackNode=function(){return t(m)},n.unstable_next=function(W){switch(I){case 1:case 2:case 3:var te=3;break;default:te=I}var re=I;I=te;try{return W()}finally{I=re}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(W,te){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var re=I;I=W;try{return te()}finally{I=re}},n.unstable_scheduleCallback=function(W,te,re){var b=n.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?b+re:b):re=b,W){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=re+H,W={id:v++,callback:te,priorityLevel:W,startTime:re,expirationTime:H,sortIndex:-1},re>b?(W.sortIndex=re,e(y,W),t(m)===null&&W===t(y)&&($?(oe(S),S=-1):$=!0,Me(ne,re-b))):(W.sortIndex=H,e(m,W),j||V||(j=!0,pt(Te))),W},n.unstable_shouldYield=D,n.unstable_wrapCallback=function(W){var te=I;return function(){var re=I;I=te;try{return W.apply(this,arguments)}finally{I=re}}}})(Wd)),Wd}var ey;function hT(){return ey||(ey=1,qd.exports=cT()),qd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ty;function dT(){if(ty)return en;ty=1;var n=jf(),e=hT();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){h(r,s),h(r+"Capture",s)}function h(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},T={};function I(r){return m.call(T,r)?!0:m.call(v,r)?!1:y.test(r)?T[r]=!0:(v[r]=!0,!1)}function V(r,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function j(r,s,a,c){if(s===null||typeof s>"u"||V(r,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function $(r,s,a,c,d,g,E){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=E}var L={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){L[r]=new $(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];L[s]=new $(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){L[r]=new $(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){L[r]=new $(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){L[r]=new $(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){L[r]=new $(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){L[r]=new $(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){L[r]=new $(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){L[r]=new $(r,5,!1,r.toLowerCase(),null,!1,!1)});var oe=/[\-:]([a-z])/g;function se(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(oe,se);L[s]=new $(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(oe,se);L[s]=new $(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(oe,se);L[s]=new $(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){L[r]=new $(r,1,!1,r.toLowerCase(),null,!1,!1)}),L.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){L[r]=new $(r,1,!1,r.toLowerCase(),null,!0,!0)});function Z(r,s,a,c){var d=L.hasOwnProperty(s)?L[s]:null;(d!==null?d.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(j(s,a,d,c)&&(a=null),c||d===null?I(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):d.mustUseProperty?r[d.propertyName]=a===null?d.type===3?!1:"":a:(s=d.attributeName,c=d.attributeNamespace,a===null?r.removeAttribute(s):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?r.setAttributeNS(c,s,a):r.setAttribute(s,a))))}var ne=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Te=Symbol.for("react.element"),_e=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),D=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),Ye=Symbol.for("react.suspense_list"),wt=Symbol.for("react.memo"),pt=Symbol.for("react.lazy"),Me=Symbol.for("react.offscreen"),W=Symbol.iterator;function te(r){return r===null||typeof r!="object"?null:(r=W&&r[W]||r["@@iterator"],typeof r=="function"?r:null)}var re=Object.assign,b;function H(r){if(b===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);b=s&&s[1]||""}return`
`+b+r}var de=!1;function Ae(r,s){if(!r||de)return"";de=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(B){var c=B}Reflect.construct(r,[],s)}else{try{s.call()}catch(B){c=B}r.call(s.prototype)}else{try{throw Error()}catch(B){c=B}r()}}catch(B){if(B&&c&&typeof B.stack=="string"){for(var d=B.stack.split(`
`),g=c.stack.split(`
`),E=d.length-1,A=g.length-1;1<=E&&0<=A&&d[E]!==g[A];)A--;for(;1<=E&&0<=A;E--,A--)if(d[E]!==g[A]){if(E!==1||A!==1)do if(E--,A--,0>A||d[E]!==g[A]){var P=`
`+d[E].replace(" at new "," at ");return r.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",r.displayName)),P}while(1<=E&&0<=A);break}}}finally{de=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?H(r):""}function Re(r){switch(r.tag){case 5:return H(r.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return r=Ae(r.type,!1),r;case 11:return r=Ae(r.type.render,!1),r;case 1:return r=Ae(r.type,!0),r;default:return""}}function De(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case N:return"Fragment";case _e:return"Portal";case C:return"Profiler";case S:return"StrictMode";case R:return"Suspense";case Ye:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case D:return(r.displayName||"Context")+".Consumer";case k:return(r._context.displayName||"Context")+".Provider";case M:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case wt:return s=r.displayName||null,s!==null?s:De(r.type)||"Memo";case pt:s=r._payload,r=r._init;try{return De(r(s))}catch{}}return null}function Ue(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return De(s);case 8:return s===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Fe(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function $e(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Tt(r){var s=$e(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),c=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,g=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return d.call(this)},set:function(E){c=""+E,g.call(this,E)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function _r(r){r._valueTracker||(r._valueTracker=Tt(r))}function Ds(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return r&&(c=$e(r)?r.checked?"true":"false":r.value),r=c,r!==a?(s.setValue(r),!0):!1}function Hr(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function qi(r,s){var a=s.checked;return re({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function Os(r,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=Fe(s.value!=null?s.value:a),r._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function ea(r,s){s=s.checked,s!=null&&Z(r,"checked",s,!1)}function ta(r,s){ea(r,s);var a=Fe(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(c==="submit"||c==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Vs(r,s.type,a):s.hasOwnProperty("defaultValue")&&Vs(r,s.type,Fe(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Ol(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function Vs(r,s,a){(s!=="number"||Hr(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var vr=Array.isArray;function Er(r,s,a,c){if(r=r.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<r.length;a++)d=s.hasOwnProperty("$"+r[a].value),r[a].selected!==d&&(r[a].selected=d),d&&c&&(r[a].defaultSelected=!0)}else{for(a=""+Fe(a),s=null,d=0;d<r.length;d++){if(r[d].value===a){r[d].selected=!0,c&&(r[d].defaultSelected=!0);return}s!==null||r[d].disabled||(s=r[d])}s!==null&&(s.selected=!0)}}function na(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function bs(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(vr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:Fe(a)}}function Ls(r,s){var a=Fe(s.value),c=Fe(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),c!=null&&(r.defaultValue=""+c)}function ra(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function mt(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gt(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?mt(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var wr,ia=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,d){MSApp.execUnsafeLocalFunction(function(){return r(s,a,c,d)})}:r})(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(wr=wr||document.createElement("div"),wr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=wr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function Gr(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var Wi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hi=["Webkit","ms","Moz","O"];Object.keys(Wi).forEach(function(r){Hi.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Wi[s]=Wi[r]})});function sa(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Wi.hasOwnProperty(r)&&Wi[r]?(""+s).trim():s+"px"}function oa(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=sa(a,s[a],c);a==="float"&&(a="cssFloat"),c?r.setProperty(a,d):r[a]=d}}var aa=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function la(r,s){if(s){if(aa[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function ua(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gi=null;function Ms(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Us=null,mn=null,Xn=null;function Fs(r){if(r=Oa(r)){if(typeof Us!="function")throw Error(t(280));var s=r.stateNode;s&&(s=uu(s),Us(r.stateNode,r.type,s))}}function Jn(r){mn?Xn?Xn.push(r):Xn=[r]:mn=r}function ca(){if(mn){var r=mn,s=Xn;if(Xn=mn=null,Fs(r),s)for(r=0;r<s.length;r++)Fs(s[r])}}function Ki(r,s){return r(s)}function ha(){}var Tr=!1;function da(r,s,a){if(Tr)return r(s,a);Tr=!0;try{return Ki(r,s,a)}finally{Tr=!1,(mn!==null||Xn!==null)&&(ha(),ca())}}function rt(r,s){var a=r.stateNode;if(a===null)return null;var c=uu(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var js=!1;if(f)try{var Pn={};Object.defineProperty(Pn,"passive",{get:function(){js=!0}}),window.addEventListener("test",Pn,Pn),window.removeEventListener("test",Pn,Pn)}catch{js=!1}function Qi(r,s,a,c,d,g,E,A,P){var B=Array.prototype.slice.call(arguments,3);try{s.apply(a,B)}catch(J){this.onError(J)}}var Xi=!1,zs=null,kn=!1,fa=null,mh={onError:function(r){Xi=!0,zs=r}};function Bs(r,s,a,c,d,g,E,A,P){Xi=!1,zs=null,Qi.apply(mh,arguments)}function Vl(r,s,a,c,d,g,E,A,P){if(Bs.apply(this,arguments),Xi){if(Xi){var B=zs;Xi=!1,zs=null}else throw Error(t(198));kn||(kn=!0,fa=B)}}function Nn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function Ji(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function xn(r){if(Nn(r)!==r)throw Error(t(188))}function bl(r){var s=r.alternate;if(!s){if(s=Nn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,c=s;;){var d=a.return;if(d===null)break;var g=d.alternate;if(g===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===a)return xn(d),r;if(g===c)return xn(d),s;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=g;else{for(var E=!1,A=d.child;A;){if(A===a){E=!0,a=d,c=g;break}if(A===c){E=!0,c=d,a=g;break}A=A.sibling}if(!E){for(A=g.child;A;){if(A===a){E=!0,a=g,c=d;break}if(A===c){E=!0,c=g,a=d;break}A=A.sibling}if(!E)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function pa(r){return r=bl(r),r!==null?$s(r):null}function $s(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=$s(r);if(s!==null)return s;r=r.sibling}return null}var qs=e.unstable_scheduleCallback,ma=e.unstable_cancelCallback,Ll=e.unstable_shouldYield,gh=e.unstable_requestPaint,qe=e.unstable_now,Ml=e.unstable_getCurrentPriorityLevel,Yi=e.unstable_ImmediatePriority,Kr=e.unstable_UserBlockingPriority,gn=e.unstable_NormalPriority,ga=e.unstable_LowPriority,Ul=e.unstable_IdlePriority,Zi=null,an=null;function Fl(r){if(an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(Zi,r,void 0,(r.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:zl,ya=Math.log,jl=Math.LN2;function zl(r){return r>>>=0,r===0?32:31-(ya(r)/jl|0)|0}var Ws=64,Hs=4194304;function Qr(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function es(r,s){var a=r.pendingLanes;if(a===0)return 0;var c=0,d=r.suspendedLanes,g=r.pingedLanes,E=a&268435455;if(E!==0){var A=E&~d;A!==0?c=Qr(A):(g&=E,g!==0&&(c=Qr(g)))}else E=a&~d,E!==0?c=Qr(E):g!==0&&(c=Qr(g));if(c===0)return 0;if(s!==0&&s!==c&&(s&d)===0&&(d=c&-c,g=s&-s,d>=g||d===16&&(g&4194240)!==0))return s;if((c&4)!==0&&(c|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=c;0<s;)a=31-$t(s),d=1<<a,c|=r[a],s&=~d;return c}function yh(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ir(r,s){for(var a=r.suspendedLanes,c=r.pingedLanes,d=r.expirationTimes,g=r.pendingLanes;0<g;){var E=31-$t(g),A=1<<E,P=d[E];P===-1?((A&a)===0||(A&c)!==0)&&(d[E]=yh(A,s)):P<=s&&(r.expiredLanes|=A),g&=~A}}function ln(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function ts(){var r=Ws;return Ws<<=1,(Ws&4194240)===0&&(Ws=64),r}function Xr(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function Jr(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-$t(s),r[s]=a}function Be(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var c=r.eventTimes;for(r=r.expirationTimes;0<a;){var d=31-$t(a),g=1<<d;s[d]=0,c[d]=-1,r[d]=-1,a&=~g}}function Yr(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var c=31-$t(a),d=1<<c;d&s|r[c]&s&&(r[c]|=s),a&=~d}}var xe=0;function Zr(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Bl,Gs,$l,ql,Wl,_a=!1,Yn=[],Pt=null,Dn=null,On=null,ei=new Map,yn=new Map,Zn=[],_h="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hl(r,s){switch(r){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":Dn=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":ei.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":yn.delete(s.pointerId)}}function Gt(r,s,a,c,d,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[d]},s!==null&&(s=Oa(s),s!==null&&Gs(s)),r):(r.eventSystemFlags|=c,s=r.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),r)}function vh(r,s,a,c,d){switch(s){case"focusin":return Pt=Gt(Pt,r,s,a,c,d),!0;case"dragenter":return Dn=Gt(Dn,r,s,a,c,d),!0;case"mouseover":return On=Gt(On,r,s,a,c,d),!0;case"pointerover":var g=d.pointerId;return ei.set(g,Gt(ei.get(g)||null,r,s,a,c,d)),!0;case"gotpointercapture":return g=d.pointerId,yn.set(g,Gt(yn.get(g)||null,r,s,a,c,d)),!0}return!1}function Gl(r){var s=os(r.target);if(s!==null){var a=Nn(s);if(a!==null){if(s=a.tag,s===13){if(s=Ji(a),s!==null){r.blockedOn=s,Wl(r.priority,function(){$l(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Sr(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=Ks(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var c=new a.constructor(a.type,a);Gi=c,a.target.dispatchEvent(c),Gi=null}else return s=Oa(a),s!==null&&Gs(s),r.blockedOn=a,!1;s.shift()}return!0}function ns(r,s,a){Sr(r)&&a.delete(s)}function Kl(){_a=!1,Pt!==null&&Sr(Pt)&&(Pt=null),Dn!==null&&Sr(Dn)&&(Dn=null),On!==null&&Sr(On)&&(On=null),ei.forEach(ns),yn.forEach(ns)}function Vn(r,s){r.blockedOn===s&&(r.blockedOn=null,_a||(_a=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Kl)))}function bn(r){function s(d){return Vn(d,r)}if(0<Yn.length){Vn(Yn[0],r);for(var a=1;a<Yn.length;a++){var c=Yn[a];c.blockedOn===r&&(c.blockedOn=null)}}for(Pt!==null&&Vn(Pt,r),Dn!==null&&Vn(Dn,r),On!==null&&Vn(On,r),ei.forEach(s),yn.forEach(s),a=0;a<Zn.length;a++)c=Zn[a],c.blockedOn===r&&(c.blockedOn=null);for(;0<Zn.length&&(a=Zn[0],a.blockedOn===null);)Gl(a),a.blockedOn===null&&Zn.shift()}var Ar=ne.ReactCurrentBatchConfig,ti=!0;function Xe(r,s,a,c){var d=xe,g=Ar.transition;Ar.transition=null;try{xe=1,va(r,s,a,c)}finally{xe=d,Ar.transition=g}}function Eh(r,s,a,c){var d=xe,g=Ar.transition;Ar.transition=null;try{xe=4,va(r,s,a,c)}finally{xe=d,Ar.transition=g}}function va(r,s,a,c){if(ti){var d=Ks(r,s,a,c);if(d===null)xh(r,s,c,rs,a),Hl(r,c);else if(vh(d,r,s,a,c))c.stopPropagation();else if(Hl(r,c),s&4&&-1<_h.indexOf(r)){for(;d!==null;){var g=Oa(d);if(g!==null&&Bl(g),g=Ks(r,s,a,c),g===null&&xh(r,s,c,rs,a),g===d)break;d=g}d!==null&&c.stopPropagation()}else xh(r,s,c,null,a)}}var rs=null;function Ks(r,s,a,c){if(rs=null,r=Ms(c),r=os(r),r!==null)if(s=Nn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=Ji(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return rs=r,null}function Ea(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ml()){case Yi:return 1;case Kr:return 4;case gn:case ga:return 16;case Ul:return 536870912;default:return 16}default:return 16}}var un=null,Qs=null,Kt=null;function wa(){if(Kt)return Kt;var r,s=Qs,a=s.length,c,d="value"in un?un.value:un.textContent,g=d.length;for(r=0;r<a&&s[r]===d[r];r++);var E=a-r;for(c=1;c<=E&&s[a-c]===d[g-c];c++);return Kt=d.slice(r,1<c?1-c:void 0)}function Xs(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function er(){return!0}function Ta(){return!1}function kt(r){function s(a,c,d,g,E){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=g,this.target=E,this.currentTarget=null;for(var A in r)r.hasOwnProperty(A)&&(a=r[A],this[A]=a?a(g):g[A]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?er:Ta,this.isPropagationStopped=Ta,this}return re(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=er)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=er)},persist:function(){},isPersistent:er}),s}var Ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Js=kt(Ln),tr=re({},Ln,{view:0,detail:0}),wh=kt(tr),Ys,Rr,ni,is=re({},tr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nr,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ni&&(ni&&r.type==="mousemove"?(Ys=r.screenX-ni.screenX,Rr=r.screenY-ni.screenY):Rr=Ys=0,ni=r),Ys)},movementY:function(r){return"movementY"in r?r.movementY:Rr}}),Zs=kt(is),Ia=re({},is,{dataTransfer:0}),Ql=kt(Ia),eo=re({},tr,{relatedTarget:0}),to=kt(eo),Xl=re({},Ln,{animationName:0,elapsedTime:0,pseudoElement:0}),Cr=kt(Xl),Jl=re({},Ln,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Yl=kt(Jl),Zl=re({},Ln,{data:0}),Sa=kt(Zl),no={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tu(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=eu[r])?!!s[r]:!1}function nr(){return tu}var u=re({},tr,{key:function(r){if(r.key){var s=no[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Xs(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?qt[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nr,charCode:function(r){return r.type==="keypress"?Xs(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Xs(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),p=kt(u),_=re({},is,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=kt(_),U=re({},tr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nr}),q=kt(U),ie=re({},Ln,{propertyName:0,elapsedTime:0,pseudoElement:0}),ze=kt(ie),yt=re({},is,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Oe=kt(yt),It=[9,13,27,32],ut=f&&"CompositionEvent"in window,_n=null;f&&"documentMode"in document&&(_n=document.documentMode);var cn=f&&"TextEvent"in window&&!_n,ss=f&&(!ut||_n&&8<_n&&11>=_n),ro=" ",$p=!1;function qp(r,s){switch(r){case"keyup":return It.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wp(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var io=!1;function n0(r,s){switch(r){case"compositionend":return Wp(s);case"keypress":return s.which!==32?null:($p=!0,ro);case"textInput":return r=s.data,r===ro&&$p?null:r;default:return null}}function r0(r,s){if(io)return r==="compositionend"||!ut&&qp(r,s)?(r=wa(),Kt=Qs=un=null,io=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return ss&&s.locale!=="ko"?null:s.data;default:return null}}var i0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hp(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!i0[r.type]:s==="textarea"}function Gp(r,s,a,c){Jn(c),s=ou(s,"onChange"),0<s.length&&(a=new Js("onChange","change",null,a,c),r.push({event:a,listeners:s}))}var Aa=null,Ra=null;function s0(r){hm(r,0)}function nu(r){var s=uo(r);if(Ds(s))return r}function o0(r,s){if(r==="change")return s}var Kp=!1;if(f){var Th;if(f){var Ih="oninput"in document;if(!Ih){var Qp=document.createElement("div");Qp.setAttribute("oninput","return;"),Ih=typeof Qp.oninput=="function"}Th=Ih}else Th=!1;Kp=Th&&(!document.documentMode||9<document.documentMode)}function Xp(){Aa&&(Aa.detachEvent("onpropertychange",Jp),Ra=Aa=null)}function Jp(r){if(r.propertyName==="value"&&nu(Ra)){var s=[];Gp(s,Ra,r,Ms(r)),da(s0,s)}}function a0(r,s,a){r==="focusin"?(Xp(),Aa=s,Ra=a,Aa.attachEvent("onpropertychange",Jp)):r==="focusout"&&Xp()}function l0(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return nu(Ra)}function u0(r,s){if(r==="click")return nu(s)}function c0(r,s){if(r==="input"||r==="change")return nu(s)}function h0(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Mn=typeof Object.is=="function"?Object.is:h0;function Ca(r,s){if(Mn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!m.call(s,d)||!Mn(r[d],s[d]))return!1}return!0}function Yp(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Zp(r,s){var a=Yp(r);r=0;for(var c;a;){if(a.nodeType===3){if(c=r+a.textContent.length,r<=s&&c>=s)return{node:a,offset:s-r};r=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Yp(a)}}function em(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?em(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function tm(){for(var r=window,s=Hr();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=Hr(r.document)}return s}function Sh(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function d0(r){var s=tm(),a=r.focusedElem,c=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&em(a.ownerDocument.documentElement,a)){if(c!==null&&Sh(a)){if(s=c.start,r=c.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var d=a.textContent.length,g=Math.min(c.start,d);c=c.end===void 0?g:Math.min(c.end,d),!r.extend&&g>c&&(d=c,c=g,g=d),d=Zp(a,g);var E=Zp(a,c);d&&E&&(r.rangeCount!==1||r.anchorNode!==d.node||r.anchorOffset!==d.offset||r.focusNode!==E.node||r.focusOffset!==E.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),r.removeAllRanges(),g>c?(r.addRange(s),r.extend(E.node,E.offset)):(s.setEnd(E.node,E.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var f0=f&&"documentMode"in document&&11>=document.documentMode,so=null,Ah=null,Pa=null,Rh=!1;function nm(r,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Rh||so==null||so!==Hr(c)||(c=so,"selectionStart"in c&&Sh(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Pa&&Ca(Pa,c)||(Pa=c,c=ou(Ah,"onSelect"),0<c.length&&(s=new Js("onSelect","select",null,s,a),r.push({event:s,listeners:c}),s.target=so)))}function ru(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var oo={animationend:ru("Animation","AnimationEnd"),animationiteration:ru("Animation","AnimationIteration"),animationstart:ru("Animation","AnimationStart"),transitionend:ru("Transition","TransitionEnd")},Ch={},rm={};f&&(rm=document.createElement("div").style,"AnimationEvent"in window||(delete oo.animationend.animation,delete oo.animationiteration.animation,delete oo.animationstart.animation),"TransitionEvent"in window||delete oo.transitionend.transition);function iu(r){if(Ch[r])return Ch[r];if(!oo[r])return r;var s=oo[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in rm)return Ch[r]=s[a];return r}var im=iu("animationend"),sm=iu("animationiteration"),om=iu("animationstart"),am=iu("transitionend"),lm=new Map,um="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ri(r,s){lm.set(r,s),l(s,[r])}for(var Ph=0;Ph<um.length;Ph++){var kh=um[Ph],p0=kh.toLowerCase(),m0=kh[0].toUpperCase()+kh.slice(1);ri(p0,"on"+m0)}ri(im,"onAnimationEnd"),ri(sm,"onAnimationIteration"),ri(om,"onAnimationStart"),ri("dblclick","onDoubleClick"),ri("focusin","onFocus"),ri("focusout","onBlur"),ri(am,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ka="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),g0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ka));function cm(r,s,a){var c=r.type||"unknown-event";r.currentTarget=a,Vl(c,s,void 0,r),r.currentTarget=null}function hm(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var c=r[a],d=c.event;c=c.listeners;e:{var g=void 0;if(s)for(var E=c.length-1;0<=E;E--){var A=c[E],P=A.instance,B=A.currentTarget;if(A=A.listener,P!==g&&d.isPropagationStopped())break e;cm(d,A,B),g=P}else for(E=0;E<c.length;E++){if(A=c[E],P=A.instance,B=A.currentTarget,A=A.listener,P!==g&&d.isPropagationStopped())break e;cm(d,A,B),g=P}}}if(kn)throw r=fa,kn=!1,fa=null,r}function Ge(r,s){var a=s[Mh];a===void 0&&(a=s[Mh]=new Set);var c=r+"__bubble";a.has(c)||(dm(s,r,2,!1),a.add(c))}function Nh(r,s,a){var c=0;s&&(c|=4),dm(a,r,c,s)}var su="_reactListening"+Math.random().toString(36).slice(2);function Na(r){if(!r[su]){r[su]=!0,i.forEach(function(a){a!=="selectionchange"&&(g0.has(a)||Nh(a,!1,r),Nh(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[su]||(s[su]=!0,Nh("selectionchange",!1,s))}}function dm(r,s,a,c){switch(Ea(s)){case 1:var d=Xe;break;case 4:d=Eh;break;default:d=va}a=d.bind(null,s,a,r),d=void 0,!js||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?r.addEventListener(s,a,{capture:!0,passive:d}):r.addEventListener(s,a,!0):d!==void 0?r.addEventListener(s,a,{passive:d}):r.addEventListener(s,a,!1)}function xh(r,s,a,c,d){var g=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var A=c.stateNode.containerInfo;if(A===d||A.nodeType===8&&A.parentNode===d)break;if(E===4)for(E=c.return;E!==null;){var P=E.tag;if((P===3||P===4)&&(P=E.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;E=E.return}for(;A!==null;){if(E=os(A),E===null)return;if(P=E.tag,P===5||P===6){c=g=E;continue e}A=A.parentNode}}c=c.return}da(function(){var B=g,J=Ms(a),Y=[];e:{var X=lm.get(r);if(X!==void 0){var le=Js,he=r;switch(r){case"keypress":if(Xs(a)===0)break e;case"keydown":case"keyup":le=p;break;case"focusin":he="focus",le=to;break;case"focusout":he="blur",le=to;break;case"beforeblur":case"afterblur":le=to;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=Zs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=Ql;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=q;break;case im:case sm:case om:le=Cr;break;case am:le=ze;break;case"scroll":le=wh;break;case"wheel":le=Oe;break;case"copy":case"cut":case"paste":le=Yl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=w}var fe=(s&4)!==0,it=!fe&&r==="scroll",F=fe?X!==null?X+"Capture":null:X;fe=[];for(var x=B,z;x!==null;){z=x;var ee=z.stateNode;if(z.tag===5&&ee!==null&&(z=ee,F!==null&&(ee=rt(x,F),ee!=null&&fe.push(xa(x,ee,z)))),it)break;x=x.return}0<fe.length&&(X=new le(X,he,null,a,J),Y.push({event:X,listeners:fe}))}}if((s&7)===0){e:{if(X=r==="mouseover"||r==="pointerover",le=r==="mouseout"||r==="pointerout",X&&a!==Gi&&(he=a.relatedTarget||a.fromElement)&&(os(he)||he[Pr]))break e;if((le||X)&&(X=J.window===J?J:(X=J.ownerDocument)?X.defaultView||X.parentWindow:window,le?(he=a.relatedTarget||a.toElement,le=B,he=he?os(he):null,he!==null&&(it=Nn(he),he!==it||he.tag!==5&&he.tag!==6)&&(he=null)):(le=null,he=B),le!==he)){if(fe=Zs,ee="onMouseLeave",F="onMouseEnter",x="mouse",(r==="pointerout"||r==="pointerover")&&(fe=w,ee="onPointerLeave",F="onPointerEnter",x="pointer"),it=le==null?X:uo(le),z=he==null?X:uo(he),X=new fe(ee,x+"leave",le,a,J),X.target=it,X.relatedTarget=z,ee=null,os(J)===B&&(fe=new fe(F,x+"enter",he,a,J),fe.target=z,fe.relatedTarget=it,ee=fe),it=ee,le&&he)t:{for(fe=le,F=he,x=0,z=fe;z;z=ao(z))x++;for(z=0,ee=F;ee;ee=ao(ee))z++;for(;0<x-z;)fe=ao(fe),x--;for(;0<z-x;)F=ao(F),z--;for(;x--;){if(fe===F||F!==null&&fe===F.alternate)break t;fe=ao(fe),F=ao(F)}fe=null}else fe=null;le!==null&&fm(Y,X,le,fe,!1),he!==null&&it!==null&&fm(Y,it,he,fe,!0)}}e:{if(X=B?uo(B):window,le=X.nodeName&&X.nodeName.toLowerCase(),le==="select"||le==="input"&&X.type==="file")var pe=o0;else if(Hp(X))if(Kp)pe=c0;else{pe=l0;var ge=a0}else(le=X.nodeName)&&le.toLowerCase()==="input"&&(X.type==="checkbox"||X.type==="radio")&&(pe=u0);if(pe&&(pe=pe(r,B))){Gp(Y,pe,a,J);break e}ge&&ge(r,X,B),r==="focusout"&&(ge=X._wrapperState)&&ge.controlled&&X.type==="number"&&Vs(X,"number",X.value)}switch(ge=B?uo(B):window,r){case"focusin":(Hp(ge)||ge.contentEditable==="true")&&(so=ge,Ah=B,Pa=null);break;case"focusout":Pa=Ah=so=null;break;case"mousedown":Rh=!0;break;case"contextmenu":case"mouseup":case"dragend":Rh=!1,nm(Y,a,J);break;case"selectionchange":if(f0)break;case"keydown":case"keyup":nm(Y,a,J)}var ye;if(ut)e:{switch(r){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else io?qp(r,a)&&(Ee="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(ss&&a.locale!=="ko"&&(io||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&io&&(ye=wa()):(un=J,Qs="value"in un?un.value:un.textContent,io=!0)),ge=ou(B,Ee),0<ge.length&&(Ee=new Sa(Ee,r,null,a,J),Y.push({event:Ee,listeners:ge}),ye?Ee.data=ye:(ye=Wp(a),ye!==null&&(Ee.data=ye)))),(ye=cn?n0(r,a):r0(r,a))&&(B=ou(B,"onBeforeInput"),0<B.length&&(J=new Sa("onBeforeInput","beforeinput",null,a,J),Y.push({event:J,listeners:B}),J.data=ye))}hm(Y,s)})}function xa(r,s,a){return{instance:r,listener:s,currentTarget:a}}function ou(r,s){for(var a=s+"Capture",c=[];r!==null;){var d=r,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=rt(r,a),g!=null&&c.unshift(xa(r,g,d)),g=rt(r,s),g!=null&&c.push(xa(r,g,d))),r=r.return}return c}function ao(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function fm(r,s,a,c,d){for(var g=s._reactName,E=[];a!==null&&a!==c;){var A=a,P=A.alternate,B=A.stateNode;if(P!==null&&P===c)break;A.tag===5&&B!==null&&(A=B,d?(P=rt(a,g),P!=null&&E.unshift(xa(a,P,A))):d||(P=rt(a,g),P!=null&&E.push(xa(a,P,A)))),a=a.return}E.length!==0&&r.push({event:s,listeners:E})}var y0=/\r\n?/g,_0=/\u0000|\uFFFD/g;function pm(r){return(typeof r=="string"?r:""+r).replace(y0,`
`).replace(_0,"")}function au(r,s,a){if(s=pm(s),pm(r)!==s&&a)throw Error(t(425))}function lu(){}var Dh=null,Oh=null;function Vh(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var bh=typeof setTimeout=="function"?setTimeout:void 0,v0=typeof clearTimeout=="function"?clearTimeout:void 0,mm=typeof Promise=="function"?Promise:void 0,E0=typeof queueMicrotask=="function"?queueMicrotask:typeof mm<"u"?function(r){return mm.resolve(null).then(r).catch(w0)}:bh;function w0(r){setTimeout(function(){throw r})}function Lh(r,s){var a=s,c=0;do{var d=a.nextSibling;if(r.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){r.removeChild(d),bn(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);bn(s)}function ii(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function gm(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var lo=Math.random().toString(36).slice(2),rr="__reactFiber$"+lo,Da="__reactProps$"+lo,Pr="__reactContainer$"+lo,Mh="__reactEvents$"+lo,T0="__reactListeners$"+lo,I0="__reactHandles$"+lo;function os(r){var s=r[rr];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Pr]||a[rr]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=gm(r);r!==null;){if(a=r[rr])return a;r=gm(r)}return s}r=a,a=r.parentNode}return null}function Oa(r){return r=r[rr]||r[Pr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function uo(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function uu(r){return r[Da]||null}var Uh=[],co=-1;function si(r){return{current:r}}function Ke(r){0>co||(r.current=Uh[co],Uh[co]=null,co--)}function We(r,s){co++,Uh[co]=r.current,r.current=s}var oi={},bt=si(oi),Qt=si(!1),as=oi;function ho(r,s){var a=r.type.contextTypes;if(!a)return oi;var c=r.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in a)d[g]=s[g];return c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=d),d}function Xt(r){return r=r.childContextTypes,r!=null}function cu(){Ke(Qt),Ke(bt)}function ym(r,s,a){if(bt.current!==oi)throw Error(t(168));We(bt,s),We(Qt,a)}function _m(r,s,a){var c=r.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in s))throw Error(t(108,Ue(r)||"Unknown",d));return re({},a,c)}function hu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||oi,as=bt.current,We(bt,r),We(Qt,Qt.current),!0}function vm(r,s,a){var c=r.stateNode;if(!c)throw Error(t(169));a?(r=_m(r,s,as),c.__reactInternalMemoizedMergedChildContext=r,Ke(Qt),Ke(bt),We(bt,r)):Ke(Qt),We(Qt,a)}var kr=null,du=!1,Fh=!1;function Em(r){kr===null?kr=[r]:kr.push(r)}function S0(r){du=!0,Em(r)}function ai(){if(!Fh&&kr!==null){Fh=!0;var r=0,s=xe;try{var a=kr;for(xe=1;r<a.length;r++){var c=a[r];do c=c(!0);while(c!==null)}kr=null,du=!1}catch(d){throw kr!==null&&(kr=kr.slice(r+1)),qs(Yi,ai),d}finally{xe=s,Fh=!1}}return null}var fo=[],po=0,fu=null,pu=0,vn=[],En=0,ls=null,Nr=1,xr="";function us(r,s){fo[po++]=pu,fo[po++]=fu,fu=r,pu=s}function wm(r,s,a){vn[En++]=Nr,vn[En++]=xr,vn[En++]=ls,ls=r;var c=Nr;r=xr;var d=32-$t(c)-1;c&=~(1<<d),a+=1;var g=32-$t(s)+d;if(30<g){var E=d-d%5;g=(c&(1<<E)-1).toString(32),c>>=E,d-=E,Nr=1<<32-$t(s)+d|a<<d|c,xr=g+r}else Nr=1<<g|a<<d|c,xr=r}function jh(r){r.return!==null&&(us(r,1),wm(r,1,0))}function zh(r){for(;r===fu;)fu=fo[--po],fo[po]=null,pu=fo[--po],fo[po]=null;for(;r===ls;)ls=vn[--En],vn[En]=null,xr=vn[--En],vn[En]=null,Nr=vn[--En],vn[En]=null}var hn=null,dn=null,Je=!1,Un=null;function Tm(r,s){var a=Sn(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function Im(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,hn=r,dn=ii(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,hn=r,dn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=ls!==null?{id:Nr,overflow:xr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=Sn(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,hn=r,dn=null,!0):!1;default:return!1}}function Bh(r){return(r.mode&1)!==0&&(r.flags&128)===0}function $h(r){if(Je){var s=dn;if(s){var a=s;if(!Im(r,s)){if(Bh(r))throw Error(t(418));s=ii(a.nextSibling);var c=hn;s&&Im(r,s)?Tm(c,a):(r.flags=r.flags&-4097|2,Je=!1,hn=r)}}else{if(Bh(r))throw Error(t(418));r.flags=r.flags&-4097|2,Je=!1,hn=r}}}function Sm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;hn=r}function mu(r){if(r!==hn)return!1;if(!Je)return Sm(r),Je=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Vh(r.type,r.memoizedProps)),s&&(s=dn)){if(Bh(r))throw Am(),Error(t(418));for(;s;)Tm(r,s),s=ii(s.nextSibling)}if(Sm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){dn=ii(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}dn=null}}else dn=hn?ii(r.stateNode.nextSibling):null;return!0}function Am(){for(var r=dn;r;)r=ii(r.nextSibling)}function mo(){dn=hn=null,Je=!1}function qh(r){Un===null?Un=[r]:Un.push(r)}var A0=ne.ReactCurrentBatchConfig;function Va(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,r));var d=c,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(E){var A=d.refs;E===null?delete A[g]:A[g]=E},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function gu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function Rm(r){var s=r._init;return s(r._payload)}function Cm(r){function s(F,x){if(r){var z=F.deletions;z===null?(F.deletions=[x],F.flags|=16):z.push(x)}}function a(F,x){if(!r)return null;for(;x!==null;)s(F,x),x=x.sibling;return null}function c(F,x){for(F=new Map;x!==null;)x.key!==null?F.set(x.key,x):F.set(x.index,x),x=x.sibling;return F}function d(F,x){return F=mi(F,x),F.index=0,F.sibling=null,F}function g(F,x,z){return F.index=z,r?(z=F.alternate,z!==null?(z=z.index,z<x?(F.flags|=2,x):z):(F.flags|=2,x)):(F.flags|=1048576,x)}function E(F){return r&&F.alternate===null&&(F.flags|=2),F}function A(F,x,z,ee){return x===null||x.tag!==6?(x=bd(z,F.mode,ee),x.return=F,x):(x=d(x,z),x.return=F,x)}function P(F,x,z,ee){var pe=z.type;return pe===N?J(F,x,z.props.children,ee,z.key):x!==null&&(x.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===pt&&Rm(pe)===x.type)?(ee=d(x,z.props),ee.ref=Va(F,x,z),ee.return=F,ee):(ee=ju(z.type,z.key,z.props,null,F.mode,ee),ee.ref=Va(F,x,z),ee.return=F,ee)}function B(F,x,z,ee){return x===null||x.tag!==4||x.stateNode.containerInfo!==z.containerInfo||x.stateNode.implementation!==z.implementation?(x=Ld(z,F.mode,ee),x.return=F,x):(x=d(x,z.children||[]),x.return=F,x)}function J(F,x,z,ee,pe){return x===null||x.tag!==7?(x=ys(z,F.mode,ee,pe),x.return=F,x):(x=d(x,z),x.return=F,x)}function Y(F,x,z){if(typeof x=="string"&&x!==""||typeof x=="number")return x=bd(""+x,F.mode,z),x.return=F,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Te:return z=ju(x.type,x.key,x.props,null,F.mode,z),z.ref=Va(F,null,x),z.return=F,z;case _e:return x=Ld(x,F.mode,z),x.return=F,x;case pt:var ee=x._init;return Y(F,ee(x._payload),z)}if(vr(x)||te(x))return x=ys(x,F.mode,z,null),x.return=F,x;gu(F,x)}return null}function X(F,x,z,ee){var pe=x!==null?x.key:null;if(typeof z=="string"&&z!==""||typeof z=="number")return pe!==null?null:A(F,x,""+z,ee);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case Te:return z.key===pe?P(F,x,z,ee):null;case _e:return z.key===pe?B(F,x,z,ee):null;case pt:return pe=z._init,X(F,x,pe(z._payload),ee)}if(vr(z)||te(z))return pe!==null?null:J(F,x,z,ee,null);gu(F,z)}return null}function le(F,x,z,ee,pe){if(typeof ee=="string"&&ee!==""||typeof ee=="number")return F=F.get(z)||null,A(x,F,""+ee,pe);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case Te:return F=F.get(ee.key===null?z:ee.key)||null,P(x,F,ee,pe);case _e:return F=F.get(ee.key===null?z:ee.key)||null,B(x,F,ee,pe);case pt:var ge=ee._init;return le(F,x,z,ge(ee._payload),pe)}if(vr(ee)||te(ee))return F=F.get(z)||null,J(x,F,ee,pe,null);gu(x,ee)}return null}function he(F,x,z,ee){for(var pe=null,ge=null,ye=x,Ee=x=0,Rt=null;ye!==null&&Ee<z.length;Ee++){ye.index>Ee?(Rt=ye,ye=null):Rt=ye.sibling;var Le=X(F,ye,z[Ee],ee);if(Le===null){ye===null&&(ye=Rt);break}r&&ye&&Le.alternate===null&&s(F,ye),x=g(Le,x,Ee),ge===null?pe=Le:ge.sibling=Le,ge=Le,ye=Rt}if(Ee===z.length)return a(F,ye),Je&&us(F,Ee),pe;if(ye===null){for(;Ee<z.length;Ee++)ye=Y(F,z[Ee],ee),ye!==null&&(x=g(ye,x,Ee),ge===null?pe=ye:ge.sibling=ye,ge=ye);return Je&&us(F,Ee),pe}for(ye=c(F,ye);Ee<z.length;Ee++)Rt=le(ye,F,Ee,z[Ee],ee),Rt!==null&&(r&&Rt.alternate!==null&&ye.delete(Rt.key===null?Ee:Rt.key),x=g(Rt,x,Ee),ge===null?pe=Rt:ge.sibling=Rt,ge=Rt);return r&&ye.forEach(function(gi){return s(F,gi)}),Je&&us(F,Ee),pe}function fe(F,x,z,ee){var pe=te(z);if(typeof pe!="function")throw Error(t(150));if(z=pe.call(z),z==null)throw Error(t(151));for(var ge=pe=null,ye=x,Ee=x=0,Rt=null,Le=z.next();ye!==null&&!Le.done;Ee++,Le=z.next()){ye.index>Ee?(Rt=ye,ye=null):Rt=ye.sibling;var gi=X(F,ye,Le.value,ee);if(gi===null){ye===null&&(ye=Rt);break}r&&ye&&gi.alternate===null&&s(F,ye),x=g(gi,x,Ee),ge===null?pe=gi:ge.sibling=gi,ge=gi,ye=Rt}if(Le.done)return a(F,ye),Je&&us(F,Ee),pe;if(ye===null){for(;!Le.done;Ee++,Le=z.next())Le=Y(F,Le.value,ee),Le!==null&&(x=g(Le,x,Ee),ge===null?pe=Le:ge.sibling=Le,ge=Le);return Je&&us(F,Ee),pe}for(ye=c(F,ye);!Le.done;Ee++,Le=z.next())Le=le(ye,F,Ee,Le.value,ee),Le!==null&&(r&&Le.alternate!==null&&ye.delete(Le.key===null?Ee:Le.key),x=g(Le,x,Ee),ge===null?pe=Le:ge.sibling=Le,ge=Le);return r&&ye.forEach(function(iT){return s(F,iT)}),Je&&us(F,Ee),pe}function it(F,x,z,ee){if(typeof z=="object"&&z!==null&&z.type===N&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case Te:e:{for(var pe=z.key,ge=x;ge!==null;){if(ge.key===pe){if(pe=z.type,pe===N){if(ge.tag===7){a(F,ge.sibling),x=d(ge,z.props.children),x.return=F,F=x;break e}}else if(ge.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===pt&&Rm(pe)===ge.type){a(F,ge.sibling),x=d(ge,z.props),x.ref=Va(F,ge,z),x.return=F,F=x;break e}a(F,ge);break}else s(F,ge);ge=ge.sibling}z.type===N?(x=ys(z.props.children,F.mode,ee,z.key),x.return=F,F=x):(ee=ju(z.type,z.key,z.props,null,F.mode,ee),ee.ref=Va(F,x,z),ee.return=F,F=ee)}return E(F);case _e:e:{for(ge=z.key;x!==null;){if(x.key===ge)if(x.tag===4&&x.stateNode.containerInfo===z.containerInfo&&x.stateNode.implementation===z.implementation){a(F,x.sibling),x=d(x,z.children||[]),x.return=F,F=x;break e}else{a(F,x);break}else s(F,x);x=x.sibling}x=Ld(z,F.mode,ee),x.return=F,F=x}return E(F);case pt:return ge=z._init,it(F,x,ge(z._payload),ee)}if(vr(z))return he(F,x,z,ee);if(te(z))return fe(F,x,z,ee);gu(F,z)}return typeof z=="string"&&z!==""||typeof z=="number"?(z=""+z,x!==null&&x.tag===6?(a(F,x.sibling),x=d(x,z),x.return=F,F=x):(a(F,x),x=bd(z,F.mode,ee),x.return=F,F=x),E(F)):a(F,x)}return it}var go=Cm(!0),Pm=Cm(!1),yu=si(null),_u=null,yo=null,Wh=null;function Hh(){Wh=yo=_u=null}function Gh(r){var s=yu.current;Ke(yu),r._currentValue=s}function Kh(r,s,a){for(;r!==null;){var c=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),r===a)break;r=r.return}}function _o(r,s){_u=r,Wh=yo=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(Jt=!0),r.firstContext=null)}function wn(r){var s=r._currentValue;if(Wh!==r)if(r={context:r,memoizedValue:s,next:null},yo===null){if(_u===null)throw Error(t(308));yo=r,_u.dependencies={lanes:0,firstContext:r}}else yo=yo.next=r;return s}var cs=null;function Qh(r){cs===null?cs=[r]:cs.push(r)}function km(r,s,a,c){var d=s.interleaved;return d===null?(a.next=a,Qh(s)):(a.next=d.next,d.next=a),s.interleaved=a,Dr(r,c)}function Dr(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var li=!1;function Xh(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nm(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Or(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function ui(r,s,a){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,(be&2)!==0){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,Dr(r,a)}return d=c.interleaved,d===null?(s.next=s,Qh(c)):(s.next=d.next,d.next=s),c.interleaved=s,Dr(r,a)}function vu(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Yr(r,a)}}function xm(r,s){var a=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?d=g=E:g=g.next=E,a=a.next}while(a!==null);g===null?d=g=s:g=g.next=s}else d=g=s;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:c.shared,effects:c.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function Eu(r,s,a,c){var d=r.updateQueue;li=!1;var g=d.firstBaseUpdate,E=d.lastBaseUpdate,A=d.shared.pending;if(A!==null){d.shared.pending=null;var P=A,B=P.next;P.next=null,E===null?g=B:E.next=B,E=P;var J=r.alternate;J!==null&&(J=J.updateQueue,A=J.lastBaseUpdate,A!==E&&(A===null?J.firstBaseUpdate=B:A.next=B,J.lastBaseUpdate=P))}if(g!==null){var Y=d.baseState;E=0,J=B=P=null,A=g;do{var X=A.lane,le=A.eventTime;if((c&X)===X){J!==null&&(J=J.next={eventTime:le,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var he=r,fe=A;switch(X=s,le=a,fe.tag){case 1:if(he=fe.payload,typeof he=="function"){Y=he.call(le,Y,X);break e}Y=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=fe.payload,X=typeof he=="function"?he.call(le,Y,X):he,X==null)break e;Y=re({},Y,X);break e;case 2:li=!0}}A.callback!==null&&A.lane!==0&&(r.flags|=64,X=d.effects,X===null?d.effects=[A]:X.push(A))}else le={eventTime:le,lane:X,tag:A.tag,payload:A.payload,callback:A.callback,next:null},J===null?(B=J=le,P=Y):J=J.next=le,E|=X;if(A=A.next,A===null){if(A=d.shared.pending,A===null)break;X=A,A=X.next,X.next=null,d.lastBaseUpdate=X,d.shared.pending=null}}while(!0);if(J===null&&(P=Y),d.baseState=P,d.firstBaseUpdate=B,d.lastBaseUpdate=J,s=d.shared.interleaved,s!==null){d=s;do E|=d.lane,d=d.next;while(d!==s)}else g===null&&(d.shared.lanes=0);fs|=E,r.lanes=E,r.memoizedState=Y}}function Dm(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var c=r[s],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ba={},ir=si(ba),La=si(ba),Ma=si(ba);function hs(r){if(r===ba)throw Error(t(174));return r}function Jh(r,s){switch(We(Ma,s),We(La,r),We(ir,ba),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:gt(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=gt(s,r)}Ke(ir),We(ir,s)}function vo(){Ke(ir),Ke(La),Ke(Ma)}function Om(r){hs(Ma.current);var s=hs(ir.current),a=gt(s,r.type);s!==a&&(We(La,r),We(ir,a))}function Yh(r){La.current===r&&(Ke(ir),Ke(La))}var Ze=si(0);function wu(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Zh=[];function ed(){for(var r=0;r<Zh.length;r++)Zh[r]._workInProgressVersionPrimary=null;Zh.length=0}var Tu=ne.ReactCurrentDispatcher,td=ne.ReactCurrentBatchConfig,ds=0,et=null,_t=null,St=null,Iu=!1,Ua=!1,Fa=0,R0=0;function Lt(){throw Error(t(321))}function nd(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!Mn(r[a],s[a]))return!1;return!0}function rd(r,s,a,c,d,g){if(ds=g,et=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Tu.current=r===null||r.memoizedState===null?N0:x0,r=a(c,d),Ua){g=0;do{if(Ua=!1,Fa=0,25<=g)throw Error(t(301));g+=1,St=_t=null,s.updateQueue=null,Tu.current=D0,r=a(c,d)}while(Ua)}if(Tu.current=Ru,s=_t!==null&&_t.next!==null,ds=0,St=_t=et=null,Iu=!1,s)throw Error(t(300));return r}function id(){var r=Fa!==0;return Fa=0,r}function sr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return St===null?et.memoizedState=St=r:St=St.next=r,St}function Tn(){if(_t===null){var r=et.alternate;r=r!==null?r.memoizedState:null}else r=_t.next;var s=St===null?et.memoizedState:St.next;if(s!==null)St=s,_t=r;else{if(r===null)throw Error(t(310));_t=r,r={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},St===null?et.memoizedState=St=r:St=St.next=r}return St}function ja(r,s){return typeof s=="function"?s(r):s}function sd(r){var s=Tn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=_t,d=c.baseQueue,g=a.pending;if(g!==null){if(d!==null){var E=d.next;d.next=g.next,g.next=E}c.baseQueue=d=g,a.pending=null}if(d!==null){g=d.next,c=c.baseState;var A=E=null,P=null,B=g;do{var J=B.lane;if((ds&J)===J)P!==null&&(P=P.next={lane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),c=B.hasEagerState?B.eagerState:r(c,B.action);else{var Y={lane:J,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null};P===null?(A=P=Y,E=c):P=P.next=Y,et.lanes|=J,fs|=J}B=B.next}while(B!==null&&B!==g);P===null?E=c:P.next=A,Mn(c,s.memoizedState)||(Jt=!0),s.memoizedState=c,s.baseState=E,s.baseQueue=P,a.lastRenderedState=c}if(r=a.interleaved,r!==null){d=r;do g=d.lane,et.lanes|=g,fs|=g,d=d.next;while(d!==r)}else d===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function od(r){var s=Tn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=a.dispatch,d=a.pending,g=s.memoizedState;if(d!==null){a.pending=null;var E=d=d.next;do g=r(g,E.action),E=E.next;while(E!==d);Mn(g,s.memoizedState)||(Jt=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),a.lastRenderedState=g}return[g,c]}function Vm(){}function bm(r,s){var a=et,c=Tn(),d=s(),g=!Mn(c.memoizedState,d);if(g&&(c.memoizedState=d,Jt=!0),c=c.queue,ad(Um.bind(null,a,c,r),[r]),c.getSnapshot!==s||g||St!==null&&St.memoizedState.tag&1){if(a.flags|=2048,za(9,Mm.bind(null,a,c,d,s),void 0,null),At===null)throw Error(t(349));(ds&30)!==0||Lm(a,s,d)}return d}function Lm(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=et.updateQueue,s===null?(s={lastEffect:null,stores:null},et.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function Mm(r,s,a,c){s.value=a,s.getSnapshot=c,Fm(s)&&jm(r)}function Um(r,s,a){return a(function(){Fm(s)&&jm(r)})}function Fm(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!Mn(r,a)}catch{return!0}}function jm(r){var s=Dr(r,1);s!==null&&Bn(s,r,1,-1)}function zm(r){var s=sr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:r},s.queue=r,r=r.dispatch=k0.bind(null,et,r),[s.memoizedState,r]}function za(r,s,a,c){return r={tag:r,create:s,destroy:a,deps:c,next:null},s=et.updateQueue,s===null?(s={lastEffect:null,stores:null},et.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(c=a.next,a.next=r,r.next=c,s.lastEffect=r)),r}function Bm(){return Tn().memoizedState}function Su(r,s,a,c){var d=sr();et.flags|=r,d.memoizedState=za(1|s,a,void 0,c===void 0?null:c)}function Au(r,s,a,c){var d=Tn();c=c===void 0?null:c;var g=void 0;if(_t!==null){var E=_t.memoizedState;if(g=E.destroy,c!==null&&nd(c,E.deps)){d.memoizedState=za(s,a,g,c);return}}et.flags|=r,d.memoizedState=za(1|s,a,g,c)}function $m(r,s){return Su(8390656,8,r,s)}function ad(r,s){return Au(2048,8,r,s)}function qm(r,s){return Au(4,2,r,s)}function Wm(r,s){return Au(4,4,r,s)}function Hm(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Gm(r,s,a){return a=a!=null?a.concat([r]):null,Au(4,4,Hm.bind(null,s,r),a)}function ld(){}function Km(r,s){var a=Tn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&nd(s,c[1])?c[0]:(a.memoizedState=[r,s],r)}function Qm(r,s){var a=Tn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&nd(s,c[1])?c[0]:(r=r(),a.memoizedState=[r,s],r)}function Xm(r,s,a){return(ds&21)===0?(r.baseState&&(r.baseState=!1,Jt=!0),r.memoizedState=a):(Mn(a,s)||(a=ts(),et.lanes|=a,fs|=a,r.baseState=!0),s)}function C0(r,s){var a=xe;xe=a!==0&&4>a?a:4,r(!0);var c=td.transition;td.transition={};try{r(!1),s()}finally{xe=a,td.transition=c}}function Jm(){return Tn().memoizedState}function P0(r,s,a){var c=fi(r);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Ym(r))Zm(s,a);else if(a=km(r,s,a,c),a!==null){var d=Ht();Bn(a,r,c,d),eg(a,s,c)}}function k0(r,s,a){var c=fi(r),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ym(r))Zm(s,d);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var E=s.lastRenderedState,A=g(E,a);if(d.hasEagerState=!0,d.eagerState=A,Mn(A,E)){var P=s.interleaved;P===null?(d.next=d,Qh(s)):(d.next=P.next,P.next=d),s.interleaved=d;return}}catch{}finally{}a=km(r,s,d,c),a!==null&&(d=Ht(),Bn(a,r,c,d),eg(a,s,c))}}function Ym(r){var s=r.alternate;return r===et||s!==null&&s===et}function Zm(r,s){Ua=Iu=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function eg(r,s,a){if((a&4194240)!==0){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Yr(r,a)}}var Ru={readContext:wn,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useInsertionEffect:Lt,useLayoutEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useMutableSource:Lt,useSyncExternalStore:Lt,useId:Lt,unstable_isNewReconciler:!1},N0={readContext:wn,useCallback:function(r,s){return sr().memoizedState=[r,s===void 0?null:s],r},useContext:wn,useEffect:$m,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,Su(4194308,4,Hm.bind(null,s,r),a)},useLayoutEffect:function(r,s){return Su(4194308,4,r,s)},useInsertionEffect:function(r,s){return Su(4,2,r,s)},useMemo:function(r,s){var a=sr();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var c=sr();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},c.queue=r,r=r.dispatch=P0.bind(null,et,r),[c.memoizedState,r]},useRef:function(r){var s=sr();return r={current:r},s.memoizedState=r},useState:zm,useDebugValue:ld,useDeferredValue:function(r){return sr().memoizedState=r},useTransition:function(){var r=zm(!1),s=r[0];return r=C0.bind(null,r[1]),sr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var c=et,d=sr();if(Je){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),At===null)throw Error(t(349));(ds&30)!==0||Lm(c,s,a)}d.memoizedState=a;var g={value:a,getSnapshot:s};return d.queue=g,$m(Um.bind(null,c,g,r),[r]),c.flags|=2048,za(9,Mm.bind(null,c,g,a,s),void 0,null),a},useId:function(){var r=sr(),s=At.identifierPrefix;if(Je){var a=xr,c=Nr;a=(c&~(1<<32-$t(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=Fa++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=R0++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},x0={readContext:wn,useCallback:Km,useContext:wn,useEffect:ad,useImperativeHandle:Gm,useInsertionEffect:qm,useLayoutEffect:Wm,useMemo:Qm,useReducer:sd,useRef:Bm,useState:function(){return sd(ja)},useDebugValue:ld,useDeferredValue:function(r){var s=Tn();return Xm(s,_t.memoizedState,r)},useTransition:function(){var r=sd(ja)[0],s=Tn().memoizedState;return[r,s]},useMutableSource:Vm,useSyncExternalStore:bm,useId:Jm,unstable_isNewReconciler:!1},D0={readContext:wn,useCallback:Km,useContext:wn,useEffect:ad,useImperativeHandle:Gm,useInsertionEffect:qm,useLayoutEffect:Wm,useMemo:Qm,useReducer:od,useRef:Bm,useState:function(){return od(ja)},useDebugValue:ld,useDeferredValue:function(r){var s=Tn();return _t===null?s.memoizedState=r:Xm(s,_t.memoizedState,r)},useTransition:function(){var r=od(ja)[0],s=Tn().memoizedState;return[r,s]},useMutableSource:Vm,useSyncExternalStore:bm,useId:Jm,unstable_isNewReconciler:!1};function Fn(r,s){if(r&&r.defaultProps){s=re({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function ud(r,s,a,c){s=r.memoizedState,a=a(c,s),a=a==null?s:re({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var Cu={isMounted:function(r){return(r=r._reactInternals)?Nn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var c=Ht(),d=fi(r),g=Or(c,d);g.payload=s,a!=null&&(g.callback=a),s=ui(r,g,d),s!==null&&(Bn(s,r,d,c),vu(s,r,d))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var c=Ht(),d=fi(r),g=Or(c,d);g.tag=1,g.payload=s,a!=null&&(g.callback=a),s=ui(r,g,d),s!==null&&(Bn(s,r,d,c),vu(s,r,d))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Ht(),c=fi(r),d=Or(a,c);d.tag=2,s!=null&&(d.callback=s),s=ui(r,d,c),s!==null&&(Bn(s,r,c,a),vu(s,r,c))}};function tg(r,s,a,c,d,g,E){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,g,E):s.prototype&&s.prototype.isPureReactComponent?!Ca(a,c)||!Ca(d,g):!0}function ng(r,s,a){var c=!1,d=oi,g=s.contextType;return typeof g=="object"&&g!==null?g=wn(g):(d=Xt(s)?as:bt.current,c=s.contextTypes,g=(c=c!=null)?ho(r,d):oi),s=new s(a,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Cu,r.stateNode=s,s._reactInternals=r,c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=d,r.__reactInternalMemoizedMaskedChildContext=g),s}function rg(r,s,a,c){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==r&&Cu.enqueueReplaceState(s,s.state,null)}function cd(r,s,a,c){var d=r.stateNode;d.props=a,d.state=r.memoizedState,d.refs={},Xh(r);var g=s.contextType;typeof g=="object"&&g!==null?d.context=wn(g):(g=Xt(s)?as:bt.current,d.context=ho(r,g)),d.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(ud(r,s,g,a),d.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&Cu.enqueueReplaceState(d,d.state,null),Eu(r,a,d,c),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308)}function Eo(r,s){try{var a="",c=s;do a+=Re(c),c=c.return;while(c);var d=a}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:d,digest:null}}function hd(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function dd(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var O0=typeof WeakMap=="function"?WeakMap:Map;function ig(r,s,a){a=Or(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){Vu||(Vu=!0,Cd=c),dd(r,s)},a}function sg(r,s,a){a=Or(-1,a),a.tag=3;var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var d=s.value;a.payload=function(){return c(d)},a.callback=function(){dd(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){dd(r,s),typeof c!="function"&&(hi===null?hi=new Set([this]):hi.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})}),a}function og(r,s,a){var c=r.pingCache;if(c===null){c=r.pingCache=new O0;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(a)||(d.add(a),r=G0.bind(null,r,s,a),s.then(r,r))}function ag(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function lg(r,s,a,c,d){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Or(-1,1),s.tag=2,ui(a,s,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=d,r)}var V0=ne.ReactCurrentOwner,Jt=!1;function Wt(r,s,a,c){s.child=r===null?Pm(s,null,a,c):go(s,r.child,a,c)}function ug(r,s,a,c,d){a=a.render;var g=s.ref;return _o(s,d),c=rd(r,s,a,c,g,d),a=id(),r!==null&&!Jt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,Vr(r,s,d)):(Je&&a&&jh(s),s.flags|=1,Wt(r,s,c,d),s.child)}function cg(r,s,a,c,d){if(r===null){var g=a.type;return typeof g=="function"&&!Vd(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=g,hg(r,s,g,c,d)):(r=ju(a.type,null,c,s,s.mode,d),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,(r.lanes&d)===0){var E=g.memoizedProps;if(a=a.compare,a=a!==null?a:Ca,a(E,c)&&r.ref===s.ref)return Vr(r,s,d)}return s.flags|=1,r=mi(g,c),r.ref=s.ref,r.return=s,s.child=r}function hg(r,s,a,c,d){if(r!==null){var g=r.memoizedProps;if(Ca(g,c)&&r.ref===s.ref)if(Jt=!1,s.pendingProps=c=g,(r.lanes&d)!==0)(r.flags&131072)!==0&&(Jt=!0);else return s.lanes=r.lanes,Vr(r,s,d)}return fd(r,s,a,c,d)}function dg(r,s,a){var c=s.pendingProps,d=c.children,g=r!==null?r.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(To,fn),fn|=a;else{if((a&1073741824)===0)return r=g!==null?g.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,We(To,fn),fn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,We(To,fn),fn|=c}else g!==null?(c=g.baseLanes|a,s.memoizedState=null):c=a,We(To,fn),fn|=c;return Wt(r,s,d,a),s.child}function fg(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function fd(r,s,a,c,d){var g=Xt(a)?as:bt.current;return g=ho(s,g),_o(s,d),a=rd(r,s,a,c,g,d),c=id(),r!==null&&!Jt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,Vr(r,s,d)):(Je&&c&&jh(s),s.flags|=1,Wt(r,s,a,d),s.child)}function pg(r,s,a,c,d){if(Xt(a)){var g=!0;hu(s)}else g=!1;if(_o(s,d),s.stateNode===null)ku(r,s),ng(s,a,c),cd(s,a,c,d),c=!0;else if(r===null){var E=s.stateNode,A=s.memoizedProps;E.props=A;var P=E.context,B=a.contextType;typeof B=="object"&&B!==null?B=wn(B):(B=Xt(a)?as:bt.current,B=ho(s,B));var J=a.getDerivedStateFromProps,Y=typeof J=="function"||typeof E.getSnapshotBeforeUpdate=="function";Y||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(A!==c||P!==B)&&rg(s,E,c,B),li=!1;var X=s.memoizedState;E.state=X,Eu(s,c,E,d),P=s.memoizedState,A!==c||X!==P||Qt.current||li?(typeof J=="function"&&(ud(s,a,J,c),P=s.memoizedState),(A=li||tg(s,a,A,c,X,P,B))?(Y||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(s.flags|=4194308)):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=P),E.props=c,E.state=P,E.context=B,c=A):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{E=s.stateNode,Nm(r,s),A=s.memoizedProps,B=s.type===s.elementType?A:Fn(s.type,A),E.props=B,Y=s.pendingProps,X=E.context,P=a.contextType,typeof P=="object"&&P!==null?P=wn(P):(P=Xt(a)?as:bt.current,P=ho(s,P));var le=a.getDerivedStateFromProps;(J=typeof le=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(A!==Y||X!==P)&&rg(s,E,c,P),li=!1,X=s.memoizedState,E.state=X,Eu(s,c,E,d);var he=s.memoizedState;A!==Y||X!==he||Qt.current||li?(typeof le=="function"&&(ud(s,a,le,c),he=s.memoizedState),(B=li||tg(s,a,B,c,X,he,P)||!1)?(J||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(c,he,P),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(c,he,P)),typeof E.componentDidUpdate=="function"&&(s.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof E.componentDidUpdate!="function"||A===r.memoizedProps&&X===r.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&X===r.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=he),E.props=c,E.state=he,E.context=P,c=B):(typeof E.componentDidUpdate!="function"||A===r.memoizedProps&&X===r.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&X===r.memoizedState||(s.flags|=1024),c=!1)}return pd(r,s,a,c,g,d)}function pd(r,s,a,c,d,g){fg(r,s);var E=(s.flags&128)!==0;if(!c&&!E)return d&&vm(s,a,!1),Vr(r,s,g);c=s.stateNode,V0.current=s;var A=E&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,r!==null&&E?(s.child=go(s,r.child,null,g),s.child=go(s,null,A,g)):Wt(r,s,A,g),s.memoizedState=c.state,d&&vm(s,a,!0),s.child}function mg(r){var s=r.stateNode;s.pendingContext?ym(r,s.pendingContext,s.pendingContext!==s.context):s.context&&ym(r,s.context,!1),Jh(r,s.containerInfo)}function gg(r,s,a,c,d){return mo(),qh(d),s.flags|=256,Wt(r,s,a,c),s.child}var md={dehydrated:null,treeContext:null,retryLane:0};function gd(r){return{baseLanes:r,cachePool:null,transitions:null}}function yg(r,s,a){var c=s.pendingProps,d=Ze.current,g=!1,E=(s.flags&128)!==0,A;if((A=E)||(A=r!==null&&r.memoizedState===null?!1:(d&2)!==0),A?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(d|=1),We(Ze,d&1),r===null)return $h(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(E=c.children,r=c.fallback,g?(c=s.mode,g=s.child,E={mode:"hidden",children:E},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=E):g=zu(E,c,0,null),r=ys(r,c,a,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=gd(a),s.memoizedState=md,r):yd(s,E));if(d=r.memoizedState,d!==null&&(A=d.dehydrated,A!==null))return b0(r,s,E,c,A,d,a);if(g){g=c.fallback,E=s.mode,d=r.child,A=d.sibling;var P={mode:"hidden",children:c.children};return(E&1)===0&&s.child!==d?(c=s.child,c.childLanes=0,c.pendingProps=P,s.deletions=null):(c=mi(d,P),c.subtreeFlags=d.subtreeFlags&14680064),A!==null?g=mi(A,g):(g=ys(g,E,a,null),g.flags|=2),g.return=s,c.return=s,c.sibling=g,s.child=c,c=g,g=s.child,E=r.child.memoizedState,E=E===null?gd(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},g.memoizedState=E,g.childLanes=r.childLanes&~a,s.memoizedState=md,c}return g=r.child,r=g.sibling,c=mi(g,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=a),c.return=s,c.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=c,s.memoizedState=null,c}function yd(r,s){return s=zu({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Pu(r,s,a,c){return c!==null&&qh(c),go(s,r.child,null,a),r=yd(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function b0(r,s,a,c,d,g,E){if(a)return s.flags&256?(s.flags&=-257,c=hd(Error(t(422))),Pu(r,s,E,c)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=c.fallback,d=s.mode,c=zu({mode:"visible",children:c.children},d,0,null),g=ys(g,d,E,null),g.flags|=2,c.return=s,g.return=s,c.sibling=g,s.child=c,(s.mode&1)!==0&&go(s,r.child,null,E),s.child.memoizedState=gd(E),s.memoizedState=md,g);if((s.mode&1)===0)return Pu(r,s,E,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var A=c.dgst;return c=A,g=Error(t(419)),c=hd(g,c,void 0),Pu(r,s,E,c)}if(A=(E&r.childLanes)!==0,Jt||A){if(c=At,c!==null){switch(E&-E){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|E))!==0?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,Dr(r,d),Bn(c,r,d,-1))}return Od(),c=hd(Error(t(421))),Pu(r,s,E,c)}return d.data==="$?"?(s.flags|=128,s.child=r.child,s=K0.bind(null,r),d._reactRetry=s,null):(r=g.treeContext,dn=ii(d.nextSibling),hn=s,Je=!0,Un=null,r!==null&&(vn[En++]=Nr,vn[En++]=xr,vn[En++]=ls,Nr=r.id,xr=r.overflow,ls=s),s=yd(s,c.children),s.flags|=4096,s)}function _g(r,s,a){r.lanes|=s;var c=r.alternate;c!==null&&(c.lanes|=s),Kh(r.return,s,a)}function _d(r,s,a,c,d){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=d)}function vg(r,s,a){var c=s.pendingProps,d=c.revealOrder,g=c.tail;if(Wt(r,s,c.children,a),c=Ze.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&_g(r,a,s);else if(r.tag===19)_g(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}if(We(Ze,c),(s.mode&1)===0)s.memoizedState=null;else switch(d){case"forwards":for(a=s.child,d=null;a!==null;)r=a.alternate,r!==null&&wu(r)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),_d(s,!1,d,a,g);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(r=d.alternate,r!==null&&wu(r)===null){s.child=d;break}r=d.sibling,d.sibling=a,a=d,d=r}_d(s,!0,a,null,g);break;case"together":_d(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function ku(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Vr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),fs|=s.lanes,(a&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=mi(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=mi(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function L0(r,s,a){switch(s.tag){case 3:mg(s),mo();break;case 5:Om(s);break;case 1:Xt(s.type)&&hu(s);break;case 4:Jh(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,d=s.memoizedProps.value;We(yu,c._currentValue),c._currentValue=d;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(We(Ze,Ze.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?yg(r,s,a):(We(Ze,Ze.current&1),r=Vr(r,s,a),r!==null?r.sibling:null);We(Ze,Ze.current&1);break;case 19:if(c=(a&s.childLanes)!==0,(r.flags&128)!==0){if(c)return vg(r,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),We(Ze,Ze.current),c)break;return null;case 22:case 23:return s.lanes=0,dg(r,s,a)}return Vr(r,s,a)}var Eg,vd,wg,Tg;Eg=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},vd=function(){},wg=function(r,s,a,c){var d=r.memoizedProps;if(d!==c){r=s.stateNode,hs(ir.current);var g=null;switch(a){case"input":d=qi(r,d),c=qi(r,c),g=[];break;case"select":d=re({},d,{value:void 0}),c=re({},c,{value:void 0}),g=[];break;case"textarea":d=na(r,d),c=na(r,c),g=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(r.onclick=lu)}la(a,c);var E;a=null;for(B in d)if(!c.hasOwnProperty(B)&&d.hasOwnProperty(B)&&d[B]!=null)if(B==="style"){var A=d[B];for(E in A)A.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else B!=="dangerouslySetInnerHTML"&&B!=="children"&&B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&B!=="autoFocus"&&(o.hasOwnProperty(B)?g||(g=[]):(g=g||[]).push(B,null));for(B in c){var P=c[B];if(A=d!=null?d[B]:void 0,c.hasOwnProperty(B)&&P!==A&&(P!=null||A!=null))if(B==="style")if(A){for(E in A)!A.hasOwnProperty(E)||P&&P.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in P)P.hasOwnProperty(E)&&A[E]!==P[E]&&(a||(a={}),a[E]=P[E])}else a||(g||(g=[]),g.push(B,a)),a=P;else B==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,A=A?A.__html:void 0,P!=null&&A!==P&&(g=g||[]).push(B,P)):B==="children"?typeof P!="string"&&typeof P!="number"||(g=g||[]).push(B,""+P):B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&(o.hasOwnProperty(B)?(P!=null&&B==="onScroll"&&Ge("scroll",r),g||A===P||(g=[])):(g=g||[]).push(B,P))}a&&(g=g||[]).push("style",a);var B=g;(s.updateQueue=B)&&(s.flags|=4)}},Tg=function(r,s,a,c){a!==c&&(s.flags|=4)};function Ba(r,s){if(!Je)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function Mt(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,c=0;if(s)for(var d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=c,r.childLanes=a,s}function M0(r,s,a){var c=s.pendingProps;switch(zh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(s),null;case 1:return Xt(s.type)&&cu(),Mt(s),null;case 3:return c=s.stateNode,vo(),Ke(Qt),Ke(bt),ed(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(r===null||r.child===null)&&(mu(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Un!==null&&(Nd(Un),Un=null))),vd(r,s),Mt(s),null;case 5:Yh(s);var d=hs(Ma.current);if(a=s.type,r!==null&&s.stateNode!=null)wg(r,s,a,c,d),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Mt(s),null}if(r=hs(ir.current),mu(s)){c=s.stateNode,a=s.type;var g=s.memoizedProps;switch(c[rr]=s,c[Da]=g,r=(s.mode&1)!==0,a){case"dialog":Ge("cancel",c),Ge("close",c);break;case"iframe":case"object":case"embed":Ge("load",c);break;case"video":case"audio":for(d=0;d<ka.length;d++)Ge(ka[d],c);break;case"source":Ge("error",c);break;case"img":case"image":case"link":Ge("error",c),Ge("load",c);break;case"details":Ge("toggle",c);break;case"input":Os(c,g),Ge("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Ge("invalid",c);break;case"textarea":bs(c,g),Ge("invalid",c)}la(a,g),d=null;for(var E in g)if(g.hasOwnProperty(E)){var A=g[E];E==="children"?typeof A=="string"?c.textContent!==A&&(g.suppressHydrationWarning!==!0&&au(c.textContent,A,r),d=["children",A]):typeof A=="number"&&c.textContent!==""+A&&(g.suppressHydrationWarning!==!0&&au(c.textContent,A,r),d=["children",""+A]):o.hasOwnProperty(E)&&A!=null&&E==="onScroll"&&Ge("scroll",c)}switch(a){case"input":_r(c),Ol(c,g,!0);break;case"textarea":_r(c),ra(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=lu)}c=d,s.updateQueue=c,c!==null&&(s.flags|=4)}else{E=d.nodeType===9?d:d.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=mt(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=E.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof c.is=="string"?r=E.createElement(a,{is:c.is}):(r=E.createElement(a),a==="select"&&(E=r,c.multiple?E.multiple=!0:c.size&&(E.size=c.size))):r=E.createElementNS(r,a),r[rr]=s,r[Da]=c,Eg(r,s,!1,!1),s.stateNode=r;e:{switch(E=ua(a,c),a){case"dialog":Ge("cancel",r),Ge("close",r),d=c;break;case"iframe":case"object":case"embed":Ge("load",r),d=c;break;case"video":case"audio":for(d=0;d<ka.length;d++)Ge(ka[d],r);d=c;break;case"source":Ge("error",r),d=c;break;case"img":case"image":case"link":Ge("error",r),Ge("load",r),d=c;break;case"details":Ge("toggle",r),d=c;break;case"input":Os(r,c),d=qi(r,c),Ge("invalid",r);break;case"option":d=c;break;case"select":r._wrapperState={wasMultiple:!!c.multiple},d=re({},c,{value:void 0}),Ge("invalid",r);break;case"textarea":bs(r,c),d=na(r,c),Ge("invalid",r);break;default:d=c}la(a,d),A=d;for(g in A)if(A.hasOwnProperty(g)){var P=A[g];g==="style"?oa(r,P):g==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&ia(r,P)):g==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&Gr(r,P):typeof P=="number"&&Gr(r,""+P):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?P!=null&&g==="onScroll"&&Ge("scroll",r):P!=null&&Z(r,g,P,E))}switch(a){case"input":_r(r),Ol(r,c,!1);break;case"textarea":_r(r),ra(r);break;case"option":c.value!=null&&r.setAttribute("value",""+Fe(c.value));break;case"select":r.multiple=!!c.multiple,g=c.value,g!=null?Er(r,!!c.multiple,g,!1):c.defaultValue!=null&&Er(r,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(r.onclick=lu)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Mt(s),null;case 6:if(r&&s.stateNode!=null)Tg(r,s,r.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=hs(Ma.current),hs(ir.current),mu(s)){if(c=s.stateNode,a=s.memoizedProps,c[rr]=s,(g=c.nodeValue!==a)&&(r=hn,r!==null))switch(r.tag){case 3:au(c.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&au(c.nodeValue,a,(r.mode&1)!==0)}g&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[rr]=s,s.stateNode=c}return Mt(s),null;case 13:if(Ke(Ze),c=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Je&&dn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Am(),mo(),s.flags|=98560,g=!1;else if(g=mu(s),c!==null&&c.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[rr]=s}else mo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Mt(s),g=!1}else Un!==null&&(Nd(Un),Un=null),g=!0;if(!g)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(c=c!==null,c!==(r!==null&&r.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(Ze.current&1)!==0?vt===0&&(vt=3):Od())),s.updateQueue!==null&&(s.flags|=4),Mt(s),null);case 4:return vo(),vd(r,s),r===null&&Na(s.stateNode.containerInfo),Mt(s),null;case 10:return Gh(s.type._context),Mt(s),null;case 17:return Xt(s.type)&&cu(),Mt(s),null;case 19:if(Ke(Ze),g=s.memoizedState,g===null)return Mt(s),null;if(c=(s.flags&128)!==0,E=g.rendering,E===null)if(c)Ba(g,!1);else{if(vt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(E=wu(r),E!==null){for(s.flags|=128,Ba(g,!1),c=E.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)g=a,r=c,g.flags&=14680066,E=g.alternate,E===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=E.childLanes,g.lanes=E.lanes,g.child=E.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=E.memoizedProps,g.memoizedState=E.memoizedState,g.updateQueue=E.updateQueue,g.type=E.type,r=E.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return We(Ze,Ze.current&1|2),s.child}r=r.sibling}g.tail!==null&&qe()>Io&&(s.flags|=128,c=!0,Ba(g,!1),s.lanes=4194304)}else{if(!c)if(r=wu(E),r!==null){if(s.flags|=128,c=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Ba(g,!0),g.tail===null&&g.tailMode==="hidden"&&!E.alternate&&!Je)return Mt(s),null}else 2*qe()-g.renderingStartTime>Io&&a!==1073741824&&(s.flags|=128,c=!0,Ba(g,!1),s.lanes=4194304);g.isBackwards?(E.sibling=s.child,s.child=E):(a=g.last,a!==null?a.sibling=E:s.child=E,g.last=E)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=qe(),s.sibling=null,a=Ze.current,We(Ze,c?a&1|2:a&1),s):(Mt(s),null);case 22:case 23:return Dd(),c=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(fn&1073741824)!==0&&(Mt(s),s.subtreeFlags&6&&(s.flags|=8192)):Mt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function U0(r,s){switch(zh(s),s.tag){case 1:return Xt(s.type)&&cu(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return vo(),Ke(Qt),Ke(bt),ed(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return Yh(s),null;case 13:if(Ke(Ze),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));mo()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ke(Ze),null;case 4:return vo(),null;case 10:return Gh(s.type._context),null;case 22:case 23:return Dd(),null;case 24:return null;default:return null}}var Nu=!1,Ut=!1,F0=typeof WeakSet=="function"?WeakSet:Set,ce=null;function wo(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){nt(r,s,c)}else a.current=null}function Ed(r,s,a){try{a()}catch(c){nt(r,s,c)}}var Ig=!1;function j0(r,s){if(Dh=ti,r=tm(),Sh(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var E=0,A=-1,P=-1,B=0,J=0,Y=r,X=null;t:for(;;){for(var le;Y!==a||d!==0&&Y.nodeType!==3||(A=E+d),Y!==g||c!==0&&Y.nodeType!==3||(P=E+c),Y.nodeType===3&&(E+=Y.nodeValue.length),(le=Y.firstChild)!==null;)X=Y,Y=le;for(;;){if(Y===r)break t;if(X===a&&++B===d&&(A=E),X===g&&++J===c&&(P=E),(le=Y.nextSibling)!==null)break;Y=X,X=Y.parentNode}Y=le}a=A===-1||P===-1?null:{start:A,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Oh={focusedElem:r,selectionRange:a},ti=!1,ce=s;ce!==null;)if(s=ce,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,ce=r;else for(;ce!==null;){s=ce;try{var he=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(he!==null){var fe=he.memoizedProps,it=he.memoizedState,F=s.stateNode,x=F.getSnapshotBeforeUpdate(s.elementType===s.type?fe:Fn(s.type,fe),it);F.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var z=s.stateNode.containerInfo;z.nodeType===1?z.textContent="":z.nodeType===9&&z.documentElement&&z.removeChild(z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ee){nt(s,s.return,ee)}if(r=s.sibling,r!==null){r.return=s.return,ce=r;break}ce=s.return}return he=Ig,Ig=!1,he}function $a(r,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&r)===r){var g=d.destroy;d.destroy=void 0,g!==void 0&&Ed(s,a,g)}d=d.next}while(d!==c)}}function xu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function wd(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function Sg(r){var s=r.alternate;s!==null&&(r.alternate=null,Sg(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[rr],delete s[Da],delete s[Mh],delete s[T0],delete s[I0])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Ag(r){return r.tag===5||r.tag===3||r.tag===4}function Rg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Ag(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Td(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=lu));else if(c!==4&&(r=r.child,r!==null))for(Td(r,s,a),r=r.sibling;r!==null;)Td(r,s,a),r=r.sibling}function Id(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(c!==4&&(r=r.child,r!==null))for(Id(r,s,a),r=r.sibling;r!==null;)Id(r,s,a),r=r.sibling}var Nt=null,jn=!1;function ci(r,s,a){for(a=a.child;a!==null;)Cg(r,s,a),a=a.sibling}function Cg(r,s,a){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(Zi,a)}catch{}switch(a.tag){case 5:Ut||wo(a,s);case 6:var c=Nt,d=jn;Nt=null,ci(r,s,a),Nt=c,jn=d,Nt!==null&&(jn?(r=Nt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Nt.removeChild(a.stateNode));break;case 18:Nt!==null&&(jn?(r=Nt,a=a.stateNode,r.nodeType===8?Lh(r.parentNode,a):r.nodeType===1&&Lh(r,a),bn(r)):Lh(Nt,a.stateNode));break;case 4:c=Nt,d=jn,Nt=a.stateNode.containerInfo,jn=!0,ci(r,s,a),Nt=c,jn=d;break;case 0:case 11:case 14:case 15:if(!Ut&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var g=d,E=g.destroy;g=g.tag,E!==void 0&&((g&2)!==0||(g&4)!==0)&&Ed(a,s,E),d=d.next}while(d!==c)}ci(r,s,a);break;case 1:if(!Ut&&(wo(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(A){nt(a,s,A)}ci(r,s,a);break;case 21:ci(r,s,a);break;case 22:a.mode&1?(Ut=(c=Ut)||a.memoizedState!==null,ci(r,s,a),Ut=c):ci(r,s,a);break;default:ci(r,s,a)}}function Pg(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new F0),s.forEach(function(c){var d=Q0.bind(null,r,c);a.has(c)||(a.add(c),c.then(d,d))})}}function zn(r,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var g=r,E=s,A=E;e:for(;A!==null;){switch(A.tag){case 5:Nt=A.stateNode,jn=!1;break e;case 3:Nt=A.stateNode.containerInfo,jn=!0;break e;case 4:Nt=A.stateNode.containerInfo,jn=!0;break e}A=A.return}if(Nt===null)throw Error(t(160));Cg(g,E,d),Nt=null,jn=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(B){nt(d,s,B)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)kg(s,r),s=s.sibling}function kg(r,s){var a=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(zn(s,r),or(r),c&4){try{$a(3,r,r.return),xu(3,r)}catch(fe){nt(r,r.return,fe)}try{$a(5,r,r.return)}catch(fe){nt(r,r.return,fe)}}break;case 1:zn(s,r),or(r),c&512&&a!==null&&wo(a,a.return);break;case 5:if(zn(s,r),or(r),c&512&&a!==null&&wo(a,a.return),r.flags&32){var d=r.stateNode;try{Gr(d,"")}catch(fe){nt(r,r.return,fe)}}if(c&4&&(d=r.stateNode,d!=null)){var g=r.memoizedProps,E=a!==null?a.memoizedProps:g,A=r.type,P=r.updateQueue;if(r.updateQueue=null,P!==null)try{A==="input"&&g.type==="radio"&&g.name!=null&&ea(d,g),ua(A,E);var B=ua(A,g);for(E=0;E<P.length;E+=2){var J=P[E],Y=P[E+1];J==="style"?oa(d,Y):J==="dangerouslySetInnerHTML"?ia(d,Y):J==="children"?Gr(d,Y):Z(d,J,Y,B)}switch(A){case"input":ta(d,g);break;case"textarea":Ls(d,g);break;case"select":var X=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var le=g.value;le!=null?Er(d,!!g.multiple,le,!1):X!==!!g.multiple&&(g.defaultValue!=null?Er(d,!!g.multiple,g.defaultValue,!0):Er(d,!!g.multiple,g.multiple?[]:"",!1))}d[Da]=g}catch(fe){nt(r,r.return,fe)}}break;case 6:if(zn(s,r),or(r),c&4){if(r.stateNode===null)throw Error(t(162));d=r.stateNode,g=r.memoizedProps;try{d.nodeValue=g}catch(fe){nt(r,r.return,fe)}}break;case 3:if(zn(s,r),or(r),c&4&&a!==null&&a.memoizedState.isDehydrated)try{bn(s.containerInfo)}catch(fe){nt(r,r.return,fe)}break;case 4:zn(s,r),or(r);break;case 13:zn(s,r),or(r),d=r.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(Rd=qe())),c&4&&Pg(r);break;case 22:if(J=a!==null&&a.memoizedState!==null,r.mode&1?(Ut=(B=Ut)||J,zn(s,r),Ut=B):zn(s,r),or(r),c&8192){if(B=r.memoizedState!==null,(r.stateNode.isHidden=B)&&!J&&(r.mode&1)!==0)for(ce=r,J=r.child;J!==null;){for(Y=ce=J;ce!==null;){switch(X=ce,le=X.child,X.tag){case 0:case 11:case 14:case 15:$a(4,X,X.return);break;case 1:wo(X,X.return);var he=X.stateNode;if(typeof he.componentWillUnmount=="function"){c=X,a=X.return;try{s=c,he.props=s.memoizedProps,he.state=s.memoizedState,he.componentWillUnmount()}catch(fe){nt(c,a,fe)}}break;case 5:wo(X,X.return);break;case 22:if(X.memoizedState!==null){Dg(Y);continue}}le!==null?(le.return=X,ce=le):Dg(Y)}J=J.sibling}e:for(J=null,Y=r;;){if(Y.tag===5){if(J===null){J=Y;try{d=Y.stateNode,B?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(A=Y.stateNode,P=Y.memoizedProps.style,E=P!=null&&P.hasOwnProperty("display")?P.display:null,A.style.display=sa("display",E))}catch(fe){nt(r,r.return,fe)}}}else if(Y.tag===6){if(J===null)try{Y.stateNode.nodeValue=B?"":Y.memoizedProps}catch(fe){nt(r,r.return,fe)}}else if((Y.tag!==22&&Y.tag!==23||Y.memoizedState===null||Y===r)&&Y.child!==null){Y.child.return=Y,Y=Y.child;continue}if(Y===r)break e;for(;Y.sibling===null;){if(Y.return===null||Y.return===r)break e;J===Y&&(J=null),Y=Y.return}J===Y&&(J=null),Y.sibling.return=Y.return,Y=Y.sibling}}break;case 19:zn(s,r),or(r),c&4&&Pg(r);break;case 21:break;default:zn(s,r),or(r)}}function or(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(Ag(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Gr(d,""),c.flags&=-33);var g=Rg(r);Id(r,g,d);break;case 3:case 4:var E=c.stateNode.containerInfo,A=Rg(r);Td(r,A,E);break;default:throw Error(t(161))}}catch(P){nt(r,r.return,P)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function z0(r,s,a){ce=r,Ng(r)}function Ng(r,s,a){for(var c=(r.mode&1)!==0;ce!==null;){var d=ce,g=d.child;if(d.tag===22&&c){var E=d.memoizedState!==null||Nu;if(!E){var A=d.alternate,P=A!==null&&A.memoizedState!==null||Ut;A=Nu;var B=Ut;if(Nu=E,(Ut=P)&&!B)for(ce=d;ce!==null;)E=ce,P=E.child,E.tag===22&&E.memoizedState!==null?Og(d):P!==null?(P.return=E,ce=P):Og(d);for(;g!==null;)ce=g,Ng(g),g=g.sibling;ce=d,Nu=A,Ut=B}xg(r)}else(d.subtreeFlags&8772)!==0&&g!==null?(g.return=d,ce=g):xg(r)}}function xg(r){for(;ce!==null;){var s=ce;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Ut||xu(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!Ut)if(a===null)c.componentDidMount();else{var d=s.elementType===s.type?a.memoizedProps:Fn(s.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&Dm(s,g,c);break;case 3:var E=s.updateQueue;if(E!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Dm(s,E,a)}break;case 5:var A=s.stateNode;if(a===null&&s.flags&4){a=A;var P=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var B=s.alternate;if(B!==null){var J=B.memoizedState;if(J!==null){var Y=J.dehydrated;Y!==null&&bn(Y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ut||s.flags&512&&wd(s)}catch(X){nt(s,s.return,X)}}if(s===r){ce=null;break}if(a=s.sibling,a!==null){a.return=s.return,ce=a;break}ce=s.return}}function Dg(r){for(;ce!==null;){var s=ce;if(s===r){ce=null;break}var a=s.sibling;if(a!==null){a.return=s.return,ce=a;break}ce=s.return}}function Og(r){for(;ce!==null;){var s=ce;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{xu(4,s)}catch(P){nt(s,a,P)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var d=s.return;try{c.componentDidMount()}catch(P){nt(s,d,P)}}var g=s.return;try{wd(s)}catch(P){nt(s,g,P)}break;case 5:var E=s.return;try{wd(s)}catch(P){nt(s,E,P)}}}catch(P){nt(s,s.return,P)}if(s===r){ce=null;break}var A=s.sibling;if(A!==null){A.return=s.return,ce=A;break}ce=s.return}}var B0=Math.ceil,Du=ne.ReactCurrentDispatcher,Sd=ne.ReactCurrentOwner,In=ne.ReactCurrentBatchConfig,be=0,At=null,ct=null,xt=0,fn=0,To=si(0),vt=0,qa=null,fs=0,Ou=0,Ad=0,Wa=null,Yt=null,Rd=0,Io=1/0,br=null,Vu=!1,Cd=null,hi=null,bu=!1,di=null,Lu=0,Ha=0,Pd=null,Mu=-1,Uu=0;function Ht(){return(be&6)!==0?qe():Mu!==-1?Mu:Mu=qe()}function fi(r){return(r.mode&1)===0?1:(be&2)!==0&&xt!==0?xt&-xt:A0.transition!==null?(Uu===0&&(Uu=ts()),Uu):(r=xe,r!==0||(r=window.event,r=r===void 0?16:Ea(r.type)),r)}function Bn(r,s,a,c){if(50<Ha)throw Ha=0,Pd=null,Error(t(185));Jr(r,a,c),((be&2)===0||r!==At)&&(r===At&&((be&2)===0&&(Ou|=a),vt===4&&pi(r,xt)),Zt(r,c),a===1&&be===0&&(s.mode&1)===0&&(Io=qe()+500,du&&ai()))}function Zt(r,s){var a=r.callbackNode;Ir(r,s);var c=es(r,r===At?xt:0);if(c===0)a!==null&&ma(a),r.callbackNode=null,r.callbackPriority=0;else if(s=c&-c,r.callbackPriority!==s){if(a!=null&&ma(a),s===1)r.tag===0?S0(bg.bind(null,r)):Em(bg.bind(null,r)),E0(function(){(be&6)===0&&ai()}),a=null;else{switch(Zr(c)){case 1:a=Yi;break;case 4:a=Kr;break;case 16:a=gn;break;case 536870912:a=Ul;break;default:a=gn}a=$g(a,Vg.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function Vg(r,s){if(Mu=-1,Uu=0,(be&6)!==0)throw Error(t(327));var a=r.callbackNode;if(So()&&r.callbackNode!==a)return null;var c=es(r,r===At?xt:0);if(c===0)return null;if((c&30)!==0||(c&r.expiredLanes)!==0||s)s=Fu(r,c);else{s=c;var d=be;be|=2;var g=Mg();(At!==r||xt!==s)&&(br=null,Io=qe()+500,ms(r,s));do try{W0();break}catch(A){Lg(r,A)}while(!0);Hh(),Du.current=g,be=d,ct!==null?s=0:(At=null,xt=0,s=vt)}if(s!==0){if(s===2&&(d=ln(r),d!==0&&(c=d,s=kd(r,d))),s===1)throw a=qa,ms(r,0),pi(r,c),Zt(r,qe()),a;if(s===6)pi(r,c);else{if(d=r.current.alternate,(c&30)===0&&!$0(d)&&(s=Fu(r,c),s===2&&(g=ln(r),g!==0&&(c=g,s=kd(r,g))),s===1))throw a=qa,ms(r,0),pi(r,c),Zt(r,qe()),a;switch(r.finishedWork=d,r.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:gs(r,Yt,br);break;case 3:if(pi(r,c),(c&130023424)===c&&(s=Rd+500-qe(),10<s)){if(es(r,0)!==0)break;if(d=r.suspendedLanes,(d&c)!==c){Ht(),r.pingedLanes|=r.suspendedLanes&d;break}r.timeoutHandle=bh(gs.bind(null,r,Yt,br),s);break}gs(r,Yt,br);break;case 4:if(pi(r,c),(c&4194240)===c)break;for(s=r.eventTimes,d=-1;0<c;){var E=31-$t(c);g=1<<E,E=s[E],E>d&&(d=E),c&=~g}if(c=d,c=qe()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*B0(c/1960))-c,10<c){r.timeoutHandle=bh(gs.bind(null,r,Yt,br),c);break}gs(r,Yt,br);break;case 5:gs(r,Yt,br);break;default:throw Error(t(329))}}}return Zt(r,qe()),r.callbackNode===a?Vg.bind(null,r):null}function kd(r,s){var a=Wa;return r.current.memoizedState.isDehydrated&&(ms(r,s).flags|=256),r=Fu(r,s),r!==2&&(s=Yt,Yt=a,s!==null&&Nd(s)),r}function Nd(r){Yt===null?Yt=r:Yt.push.apply(Yt,r)}function $0(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],g=d.getSnapshot;d=d.value;try{if(!Mn(g(),d))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function pi(r,s){for(s&=~Ad,s&=~Ou,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-$t(s),c=1<<a;r[a]=-1,s&=~c}}function bg(r){if((be&6)!==0)throw Error(t(327));So();var s=es(r,0);if((s&1)===0)return Zt(r,qe()),null;var a=Fu(r,s);if(r.tag!==0&&a===2){var c=ln(r);c!==0&&(s=c,a=kd(r,c))}if(a===1)throw a=qa,ms(r,0),pi(r,s),Zt(r,qe()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,gs(r,Yt,br),Zt(r,qe()),null}function xd(r,s){var a=be;be|=1;try{return r(s)}finally{be=a,be===0&&(Io=qe()+500,du&&ai())}}function ps(r){di!==null&&di.tag===0&&(be&6)===0&&So();var s=be;be|=1;var a=In.transition,c=xe;try{if(In.transition=null,xe=1,r)return r()}finally{xe=c,In.transition=a,be=s,(be&6)===0&&ai()}}function Dd(){fn=To.current,Ke(To)}function ms(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,v0(a)),ct!==null)for(a=ct.return;a!==null;){var c=a;switch(zh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&cu();break;case 3:vo(),Ke(Qt),Ke(bt),ed();break;case 5:Yh(c);break;case 4:vo();break;case 13:Ke(Ze);break;case 19:Ke(Ze);break;case 10:Gh(c.type._context);break;case 22:case 23:Dd()}a=a.return}if(At=r,ct=r=mi(r.current,null),xt=fn=s,vt=0,qa=null,Ad=Ou=fs=0,Yt=Wa=null,cs!==null){for(s=0;s<cs.length;s++)if(a=cs[s],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,g=a.pending;if(g!==null){var E=g.next;g.next=d,c.next=E}a.pending=c}cs=null}return r}function Lg(r,s){do{var a=ct;try{if(Hh(),Tu.current=Ru,Iu){for(var c=et.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Iu=!1}if(ds=0,St=_t=et=null,Ua=!1,Fa=0,Sd.current=null,a===null||a.return===null){vt=1,qa=s,ct=null;break}e:{var g=r,E=a.return,A=a,P=s;if(s=xt,A.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var B=P,J=A,Y=J.tag;if((J.mode&1)===0&&(Y===0||Y===11||Y===15)){var X=J.alternate;X?(J.updateQueue=X.updateQueue,J.memoizedState=X.memoizedState,J.lanes=X.lanes):(J.updateQueue=null,J.memoizedState=null)}var le=ag(E);if(le!==null){le.flags&=-257,lg(le,E,A,g,s),le.mode&1&&og(g,B,s),s=le,P=B;var he=s.updateQueue;if(he===null){var fe=new Set;fe.add(P),s.updateQueue=fe}else he.add(P);break e}else{if((s&1)===0){og(g,B,s),Od();break e}P=Error(t(426))}}else if(Je&&A.mode&1){var it=ag(E);if(it!==null){(it.flags&65536)===0&&(it.flags|=256),lg(it,E,A,g,s),qh(Eo(P,A));break e}}g=P=Eo(P,A),vt!==4&&(vt=2),Wa===null?Wa=[g]:Wa.push(g),g=E;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var F=ig(g,P,s);xm(g,F);break e;case 1:A=P;var x=g.type,z=g.stateNode;if((g.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||z!==null&&typeof z.componentDidCatch=="function"&&(hi===null||!hi.has(z)))){g.flags|=65536,s&=-s,g.lanes|=s;var ee=sg(g,A,s);xm(g,ee);break e}}g=g.return}while(g!==null)}Fg(a)}catch(pe){s=pe,ct===a&&a!==null&&(ct=a=a.return);continue}break}while(!0)}function Mg(){var r=Du.current;return Du.current=Ru,r===null?Ru:r}function Od(){(vt===0||vt===3||vt===2)&&(vt=4),At===null||(fs&268435455)===0&&(Ou&268435455)===0||pi(At,xt)}function Fu(r,s){var a=be;be|=2;var c=Mg();(At!==r||xt!==s)&&(br=null,ms(r,s));do try{q0();break}catch(d){Lg(r,d)}while(!0);if(Hh(),be=a,Du.current=c,ct!==null)throw Error(t(261));return At=null,xt=0,vt}function q0(){for(;ct!==null;)Ug(ct)}function W0(){for(;ct!==null&&!Ll();)Ug(ct)}function Ug(r){var s=Bg(r.alternate,r,fn);r.memoizedProps=r.pendingProps,s===null?Fg(r):ct=s,Sd.current=null}function Fg(r){var s=r;do{var a=s.alternate;if(r=s.return,(s.flags&32768)===0){if(a=M0(a,s,fn),a!==null){ct=a;return}}else{if(a=U0(a,s),a!==null){a.flags&=32767,ct=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{vt=6,ct=null;return}}if(s=s.sibling,s!==null){ct=s;return}ct=s=r}while(s!==null);vt===0&&(vt=5)}function gs(r,s,a){var c=xe,d=In.transition;try{In.transition=null,xe=1,H0(r,s,a,c)}finally{In.transition=d,xe=c}return null}function H0(r,s,a,c){do So();while(di!==null);if((be&6)!==0)throw Error(t(327));a=r.finishedWork;var d=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if(Be(r,g),r===At&&(ct=At=null,xt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||bu||(bu=!0,$g(gn,function(){return So(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=In.transition,In.transition=null;var E=xe;xe=1;var A=be;be|=4,Sd.current=null,j0(r,a),kg(a,r),d0(Oh),ti=!!Dh,Oh=Dh=null,r.current=a,z0(a),gh(),be=A,xe=E,In.transition=g}else r.current=a;if(bu&&(bu=!1,di=r,Lu=d),g=r.pendingLanes,g===0&&(hi=null),Fl(a.stateNode),Zt(r,qe()),s!==null)for(c=r.onRecoverableError,a=0;a<s.length;a++)d=s[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Vu)throw Vu=!1,r=Cd,Cd=null,r;return(Lu&1)!==0&&r.tag!==0&&So(),g=r.pendingLanes,(g&1)!==0?r===Pd?Ha++:(Ha=0,Pd=r):Ha=0,ai(),null}function So(){if(di!==null){var r=Zr(Lu),s=In.transition,a=xe;try{if(In.transition=null,xe=16>r?16:r,di===null)var c=!1;else{if(r=di,di=null,Lu=0,(be&6)!==0)throw Error(t(331));var d=be;for(be|=4,ce=r.current;ce!==null;){var g=ce,E=g.child;if((ce.flags&16)!==0){var A=g.deletions;if(A!==null){for(var P=0;P<A.length;P++){var B=A[P];for(ce=B;ce!==null;){var J=ce;switch(J.tag){case 0:case 11:case 15:$a(8,J,g)}var Y=J.child;if(Y!==null)Y.return=J,ce=Y;else for(;ce!==null;){J=ce;var X=J.sibling,le=J.return;if(Sg(J),J===B){ce=null;break}if(X!==null){X.return=le,ce=X;break}ce=le}}}var he=g.alternate;if(he!==null){var fe=he.child;if(fe!==null){he.child=null;do{var it=fe.sibling;fe.sibling=null,fe=it}while(fe!==null)}}ce=g}}if((g.subtreeFlags&2064)!==0&&E!==null)E.return=g,ce=E;else e:for(;ce!==null;){if(g=ce,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:$a(9,g,g.return)}var F=g.sibling;if(F!==null){F.return=g.return,ce=F;break e}ce=g.return}}var x=r.current;for(ce=x;ce!==null;){E=ce;var z=E.child;if((E.subtreeFlags&2064)!==0&&z!==null)z.return=E,ce=z;else e:for(E=x;ce!==null;){if(A=ce,(A.flags&2048)!==0)try{switch(A.tag){case 0:case 11:case 15:xu(9,A)}}catch(pe){nt(A,A.return,pe)}if(A===E){ce=null;break e}var ee=A.sibling;if(ee!==null){ee.return=A.return,ce=ee;break e}ce=A.return}}if(be=d,ai(),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(Zi,r)}catch{}c=!0}return c}finally{xe=a,In.transition=s}}return!1}function jg(r,s,a){s=Eo(a,s),s=ig(r,s,1),r=ui(r,s,1),s=Ht(),r!==null&&(Jr(r,1,s),Zt(r,s))}function nt(r,s,a){if(r.tag===3)jg(r,r,a);else for(;s!==null;){if(s.tag===3){jg(s,r,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(hi===null||!hi.has(c))){r=Eo(a,r),r=sg(s,r,1),s=ui(s,r,1),r=Ht(),s!==null&&(Jr(s,1,r),Zt(s,r));break}}s=s.return}}function G0(r,s,a){var c=r.pingCache;c!==null&&c.delete(s),s=Ht(),r.pingedLanes|=r.suspendedLanes&a,At===r&&(xt&a)===a&&(vt===4||vt===3&&(xt&130023424)===xt&&500>qe()-Rd?ms(r,0):Ad|=a),Zt(r,s)}function zg(r,s){s===0&&((r.mode&1)===0?s=1:(s=Hs,Hs<<=1,(Hs&130023424)===0&&(Hs=4194304)));var a=Ht();r=Dr(r,s),r!==null&&(Jr(r,s,a),Zt(r,a))}function K0(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),zg(r,a)}function Q0(r,s){var a=0;switch(r.tag){case 13:var c=r.stateNode,d=r.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=r.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),zg(r,a)}var Bg;Bg=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||Qt.current)Jt=!0;else{if((r.lanes&a)===0&&(s.flags&128)===0)return Jt=!1,L0(r,s,a);Jt=(r.flags&131072)!==0}else Jt=!1,Je&&(s.flags&1048576)!==0&&wm(s,pu,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;ku(r,s),r=s.pendingProps;var d=ho(s,bt.current);_o(s,a),d=rd(null,s,c,r,d,a);var g=id();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Xt(c)?(g=!0,hu(s)):g=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Xh(s),d.updater=Cu,s.stateNode=d,d._reactInternals=s,cd(s,c,r,a),s=pd(null,s,c,!0,g,a)):(s.tag=0,Je&&g&&jh(s),Wt(null,s,d,a),s=s.child),s;case 16:c=s.elementType;e:{switch(ku(r,s),r=s.pendingProps,d=c._init,c=d(c._payload),s.type=c,d=s.tag=J0(c),r=Fn(c,r),d){case 0:s=fd(null,s,c,r,a);break e;case 1:s=pg(null,s,c,r,a);break e;case 11:s=ug(null,s,c,r,a);break e;case 14:s=cg(null,s,c,Fn(c.type,r),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Fn(c,d),fd(r,s,c,d,a);case 1:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Fn(c,d),pg(r,s,c,d,a);case 3:e:{if(mg(s),r===null)throw Error(t(387));c=s.pendingProps,g=s.memoizedState,d=g.element,Nm(r,s),Eu(s,c,null,a);var E=s.memoizedState;if(c=E.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){d=Eo(Error(t(423)),s),s=gg(r,s,c,a,d);break e}else if(c!==d){d=Eo(Error(t(424)),s),s=gg(r,s,c,a,d);break e}else for(dn=ii(s.stateNode.containerInfo.firstChild),hn=s,Je=!0,Un=null,a=Pm(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(mo(),c===d){s=Vr(r,s,a);break e}Wt(r,s,c,a)}s=s.child}return s;case 5:return Om(s),r===null&&$h(s),c=s.type,d=s.pendingProps,g=r!==null?r.memoizedProps:null,E=d.children,Vh(c,d)?E=null:g!==null&&Vh(c,g)&&(s.flags|=32),fg(r,s),Wt(r,s,E,a),s.child;case 6:return r===null&&$h(s),null;case 13:return yg(r,s,a);case 4:return Jh(s,s.stateNode.containerInfo),c=s.pendingProps,r===null?s.child=go(s,null,c,a):Wt(r,s,c,a),s.child;case 11:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Fn(c,d),ug(r,s,c,d,a);case 7:return Wt(r,s,s.pendingProps,a),s.child;case 8:return Wt(r,s,s.pendingProps.children,a),s.child;case 12:return Wt(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,d=s.pendingProps,g=s.memoizedProps,E=d.value,We(yu,c._currentValue),c._currentValue=E,g!==null)if(Mn(g.value,E)){if(g.children===d.children&&!Qt.current){s=Vr(r,s,a);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var A=g.dependencies;if(A!==null){E=g.child;for(var P=A.firstContext;P!==null;){if(P.context===c){if(g.tag===1){P=Or(-1,a&-a),P.tag=2;var B=g.updateQueue;if(B!==null){B=B.shared;var J=B.pending;J===null?P.next=P:(P.next=J.next,J.next=P),B.pending=P}}g.lanes|=a,P=g.alternate,P!==null&&(P.lanes|=a),Kh(g.return,a,s),A.lanes|=a;break}P=P.next}}else if(g.tag===10)E=g.type===s.type?null:g.child;else if(g.tag===18){if(E=g.return,E===null)throw Error(t(341));E.lanes|=a,A=E.alternate,A!==null&&(A.lanes|=a),Kh(E,a,s),E=g.sibling}else E=g.child;if(E!==null)E.return=g;else for(E=g;E!==null;){if(E===s){E=null;break}if(g=E.sibling,g!==null){g.return=E.return,E=g;break}E=E.return}g=E}Wt(r,s,d.children,a),s=s.child}return s;case 9:return d=s.type,c=s.pendingProps.children,_o(s,a),d=wn(d),c=c(d),s.flags|=1,Wt(r,s,c,a),s.child;case 14:return c=s.type,d=Fn(c,s.pendingProps),d=Fn(c.type,d),cg(r,s,c,d,a);case 15:return hg(r,s,s.type,s.pendingProps,a);case 17:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Fn(c,d),ku(r,s),s.tag=1,Xt(c)?(r=!0,hu(s)):r=!1,_o(s,a),ng(s,c,d),cd(s,c,d,a),pd(null,s,c,!0,r,a);case 19:return vg(r,s,a);case 22:return dg(r,s,a)}throw Error(t(156,s.tag))};function $g(r,s){return qs(r,s)}function X0(r,s,a,c){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sn(r,s,a,c){return new X0(r,s,a,c)}function Vd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function J0(r){if(typeof r=="function")return Vd(r)?1:0;if(r!=null){if(r=r.$$typeof,r===M)return 11;if(r===wt)return 14}return 2}function mi(r,s){var a=r.alternate;return a===null?(a=Sn(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function ju(r,s,a,c,d,g){var E=2;if(c=r,typeof r=="function")Vd(r)&&(E=1);else if(typeof r=="string")E=5;else e:switch(r){case N:return ys(a.children,d,g,s);case S:E=8,d|=8;break;case C:return r=Sn(12,a,s,d|2),r.elementType=C,r.lanes=g,r;case R:return r=Sn(13,a,s,d),r.elementType=R,r.lanes=g,r;case Ye:return r=Sn(19,a,s,d),r.elementType=Ye,r.lanes=g,r;case Me:return zu(a,d,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case k:E=10;break e;case D:E=9;break e;case M:E=11;break e;case wt:E=14;break e;case pt:E=16,c=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=Sn(E,a,s,d),s.elementType=r,s.type=c,s.lanes=g,s}function ys(r,s,a,c){return r=Sn(7,r,c,s),r.lanes=a,r}function zu(r,s,a,c){return r=Sn(22,r,c,s),r.elementType=Me,r.lanes=a,r.stateNode={isHidden:!1},r}function bd(r,s,a){return r=Sn(6,r,null,s),r.lanes=a,r}function Ld(r,s,a){return s=Sn(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function Y0(r,s,a,c,d){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xr(0),this.expirationTimes=Xr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Md(r,s,a,c,d,g,E,A,P){return r=new Y0(r,s,a,A,P),s===1?(s=1,g===!0&&(s|=8)):s=0,g=Sn(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xh(g),r}function Z0(r,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_e,key:c==null?null:""+c,children:r,containerInfo:s,implementation:a}}function qg(r){if(!r)return oi;r=r._reactInternals;e:{if(Nn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Xt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(Xt(a))return _m(r,a,s)}return s}function Wg(r,s,a,c,d,g,E,A,P){return r=Md(a,c,!0,r,d,g,E,A,P),r.context=qg(null),a=r.current,c=Ht(),d=fi(a),g=Or(c,d),g.callback=s??null,ui(a,g,d),r.current.lanes=d,Jr(r,d,c),Zt(r,c),r}function Bu(r,s,a,c){var d=s.current,g=Ht(),E=fi(d);return a=qg(a),s.context===null?s.context=a:s.pendingContext=a,s=Or(g,E),s.payload={element:r},c=c===void 0?null:c,c!==null&&(s.callback=c),r=ui(d,s,E),r!==null&&(Bn(r,d,E,g),vu(r,d,E)),E}function $u(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Hg(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function Ud(r,s){Hg(r,s),(r=r.alternate)&&Hg(r,s)}function eT(){return null}var Gg=typeof reportError=="function"?reportError:function(r){console.error(r)};function Fd(r){this._internalRoot=r}qu.prototype.render=Fd.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));Bu(r,s,null,null)},qu.prototype.unmount=Fd.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;ps(function(){Bu(null,r,null,null)}),s[Pr]=null}};function qu(r){this._internalRoot=r}qu.prototype.unstable_scheduleHydration=function(r){if(r){var s=ql();r={blockedOn:null,target:r,priority:s};for(var a=0;a<Zn.length&&s!==0&&s<Zn[a].priority;a++);Zn.splice(a,0,r),a===0&&Gl(r)}};function jd(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Wu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Kg(){}function tT(r,s,a,c,d){if(d){if(typeof c=="function"){var g=c;c=function(){var B=$u(E);g.call(B)}}var E=Wg(s,c,r,0,null,!1,!1,"",Kg);return r._reactRootContainer=E,r[Pr]=E.current,Na(r.nodeType===8?r.parentNode:r),ps(),E}for(;d=r.lastChild;)r.removeChild(d);if(typeof c=="function"){var A=c;c=function(){var B=$u(P);A.call(B)}}var P=Md(r,0,!1,null,null,!1,!1,"",Kg);return r._reactRootContainer=P,r[Pr]=P.current,Na(r.nodeType===8?r.parentNode:r),ps(function(){Bu(s,P,a,c)}),P}function Hu(r,s,a,c,d){var g=a._reactRootContainer;if(g){var E=g;if(typeof d=="function"){var A=d;d=function(){var P=$u(E);A.call(P)}}Bu(s,E,r,d)}else E=tT(a,s,r,d,c);return $u(E)}Bl=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=Qr(s.pendingLanes);a!==0&&(Yr(s,a|1),Zt(s,qe()),(be&6)===0&&(Io=qe()+500,ai()))}break;case 13:ps(function(){var c=Dr(r,1);if(c!==null){var d=Ht();Bn(c,r,1,d)}}),Ud(r,1)}},Gs=function(r){if(r.tag===13){var s=Dr(r,134217728);if(s!==null){var a=Ht();Bn(s,r,134217728,a)}Ud(r,134217728)}},$l=function(r){if(r.tag===13){var s=fi(r),a=Dr(r,s);if(a!==null){var c=Ht();Bn(a,r,s,c)}Ud(r,s)}},ql=function(){return xe},Wl=function(r,s){var a=xe;try{return xe=r,s()}finally{xe=a}},Us=function(r,s,a){switch(s){case"input":if(ta(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==r&&c.form===r.form){var d=uu(c);if(!d)throw Error(t(90));Ds(c),ta(c,d)}}}break;case"textarea":Ls(r,a);break;case"select":s=a.value,s!=null&&Er(r,!!a.multiple,s,!1)}},Ki=xd,ha=ps;var nT={usingClientEntryPoint:!1,Events:[Oa,uo,uu,Jn,ca,xd]},Ga={findFiberByHostInstance:os,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rT={bundleType:Ga.bundleType,version:Ga.version,rendererPackageName:Ga.rendererPackageName,rendererConfig:Ga.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ne.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=pa(r),r===null?null:r.stateNode},findFiberByHostInstance:Ga.findFiberByHostInstance||eT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gu.isDisabled&&Gu.supportsFiber)try{Zi=Gu.inject(rT),an=Gu}catch{}}return en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nT,en.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jd(s))throw Error(t(200));return Z0(r,s,null,a)},en.createRoot=function(r,s){if(!jd(r))throw Error(t(299));var a=!1,c="",d=Gg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=Md(r,1,!1,null,null,a,!1,c,d),r[Pr]=s.current,Na(r.nodeType===8?r.parentNode:r),new Fd(s)},en.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=pa(s),r=r===null?null:r.stateNode,r},en.flushSync=function(r){return ps(r)},en.hydrate=function(r,s,a){if(!Wu(s))throw Error(t(200));return Hu(null,r,s,!0,a)},en.hydrateRoot=function(r,s,a){if(!jd(r))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,g="",E=Gg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),s=Wg(s,null,r,1,a??null,d,!1,g,E),r[Pr]=s.current,Na(r),c)for(r=0;r<c.length;r++)a=c[r],d=a._getVersion,d=d(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,d]:s.mutableSourceEagerHydrationData.push(a,d);return new qu(s)},en.render=function(r,s,a){if(!Wu(s))throw Error(t(200));return Hu(null,r,s,!1,a)},en.unmountComponentAtNode=function(r){if(!Wu(r))throw Error(t(40));return r._reactRootContainer?(ps(function(){Hu(null,null,r,!1,function(){r._reactRootContainer=null,r[Pr]=null})}),!0):!1},en.unstable_batchedUpdates=xd,en.unstable_renderSubtreeIntoContainer=function(r,s,a,c){if(!Wu(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Hu(r,s,a,!1,c)},en.version="18.3.1-next-f1338f8080-20240426",en}var ny;function ev(){if(ny)return $d.exports;ny=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),$d.exports=dT(),$d.exports}var ry;function fT(){if(ry)return Ku;ry=1;var n=ev();return Ku.createRoot=n.createRoot,Ku.hydrateRoot=n.hydrateRoot,Ku}var pT=fT();const mT=Y_(pT);ev();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sl(){return sl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},sl.apply(this,arguments)}var wi;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(wi||(wi={}));const iy="popstate";function gT(n){n===void 0&&(n={});function e(i,o){let{pathname:l,search:h,hash:f}=i.location;return af("",{pathname:l,search:h,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:fc(o)}return _T(e,t,null,n)}function at(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function zf(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function yT(){return Math.random().toString(36).substr(2,8)}function sy(n,e){return{usr:n.state,key:n.key,idx:e}}function af(n,e,t,i){return t===void 0&&(t=null),sl({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?zo(e):e,{state:t,key:e&&e.key||i||yT()})}function fc(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function zo(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function _T(n,e,t,i){i===void 0&&(i={});let{window:o=document.defaultView,v5Compat:l=!1}=i,h=o.history,f=wi.Pop,m=null,y=v();y==null&&(y=0,h.replaceState(sl({},h.state,{idx:y}),""));function v(){return(h.state||{idx:null}).idx}function T(){f=wi.Pop;let L=v(),oe=L==null?null:L-y;y=L,m&&m({action:f,location:$.location,delta:oe})}function I(L,oe){f=wi.Push;let se=af($.location,L,oe);y=v()+1;let Z=sy(se,y),ne=$.createHref(se);try{h.pushState(Z,"",ne)}catch(Te){if(Te instanceof DOMException&&Te.name==="DataCloneError")throw Te;o.location.assign(ne)}l&&m&&m({action:f,location:$.location,delta:1})}function V(L,oe){f=wi.Replace;let se=af($.location,L,oe);y=v();let Z=sy(se,y),ne=$.createHref(se);h.replaceState(Z,"",ne),l&&m&&m({action:f,location:$.location,delta:0})}function j(L){let oe=o.location.origin!=="null"?o.location.origin:o.location.href,se=typeof L=="string"?L:fc(L);return se=se.replace(/ $/,"%20"),at(oe,"No window.location.(origin|href) available to create URL for href: "+se),new URL(se,oe)}let $={get action(){return f},get location(){return n(o,h)},listen(L){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(iy,T),m=L,()=>{o.removeEventListener(iy,T),m=null}},createHref(L){return e(o,L)},createURL:j,encodeLocation(L){let oe=j(L);return{pathname:oe.pathname,search:oe.search,hash:oe.hash}},push:I,replace:V,go(L){return h.go(L)}};return $}var oy;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(oy||(oy={}));function vT(n,e,t){return t===void 0&&(t="/"),ET(n,e,t)}function ET(n,e,t,i){let o=typeof e=="string"?zo(e):e,l=Bf(o.pathname||"/",t);if(l==null)return null;let h=tv(n);wT(h);let f=null;for(let m=0;f==null&&m<h.length;++m){let y=OT(l);f=NT(h[m],y)}return f}function tv(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let o=(l,h,f)=>{let m={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:h,route:l};m.relativePath.startsWith("/")&&(at(m.relativePath.startsWith(i),'Absolute route path "'+m.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),m.relativePath=m.relativePath.slice(i.length));let y=Si([i,m.relativePath]),v=t.concat(m);l.children&&l.children.length>0&&(at(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),tv(l.children,e,v,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:PT(y,l.index),routesMeta:v})};return n.forEach((l,h)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,h);else for(let m of nv(l.path))o(l,h,m)}),e}function nv(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let h=nv(i.join("/")),f=[];return f.push(...h.map(m=>m===""?l:[l,m].join("/"))),o&&f.push(...h),f.map(m=>n.startsWith("/")&&m===""?"/":m)}function wT(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:kT(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const TT=/^:[\w-]+$/,IT=3,ST=2,AT=1,RT=10,CT=-2,ay=n=>n==="*";function PT(n,e){let t=n.split("/"),i=t.length;return t.some(ay)&&(i+=CT),e&&(i+=ST),t.filter(o=>!ay(o)).reduce((o,l)=>o+(TT.test(l)?IT:l===""?AT:RT),i)}function kT(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function NT(n,e,t){let{routesMeta:i}=n,o={},l="/",h=[];for(let f=0;f<i.length;++f){let m=i[f],y=f===i.length-1,v=l==="/"?e:e.slice(l.length)||"/",T=xT({path:m.relativePath,caseSensitive:m.caseSensitive,end:y},v),I=m.route;if(!T)return null;Object.assign(o,T.params),h.push({params:o,pathname:Si([l,T.pathname]),pathnameBase:UT(Si([l,T.pathnameBase])),route:I}),T.pathnameBase!=="/"&&(l=Si([l,T.pathnameBase]))}return h}function xT(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=DT(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],h=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:i.reduce((y,v,T)=>{let{paramName:I,isOptional:V}=v;if(I==="*"){let $=f[T]||"";h=l.slice(0,l.length-$.length).replace(/(.)\/+$/,"$1")}const j=f[T];return V&&!j?y[I]=void 0:y[I]=(j||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:h,pattern:n}}function DT(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),zf(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,f,m)=>(i.push({paramName:f,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function OT(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return zf(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function Bf(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}const VT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,bT=n=>VT.test(n);function LT(n,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?zo(n):n,l;if(t)if(bT(t))l=t;else{if(t.includes("//")){let h=t;t=t.replace(/\/\/+/g,"/"),zf(!1,"Pathnames cannot have embedded double slashes - normalizing "+(h+" -> "+t))}t.startsWith("/")?l=ly(t.substring(1),"/"):l=ly(t,e)}else l=e;return{pathname:l,search:FT(i),hash:jT(o)}}function ly(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Hd(n,e,t,i){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function MT(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function $f(n,e){let t=MT(n);return e?t.map((i,o)=>o===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function qf(n,e,t,i){i===void 0&&(i=!1);let o;typeof n=="string"?o=zo(n):(o=sl({},n),at(!o.pathname||!o.pathname.includes("?"),Hd("?","pathname","search",o)),at(!o.pathname||!o.pathname.includes("#"),Hd("#","pathname","hash",o)),at(!o.search||!o.search.includes("#"),Hd("#","search","hash",o)));let l=n===""||o.pathname==="",h=l?"/":o.pathname,f;if(h==null)f=t;else{let T=e.length-1;if(!i&&h.startsWith("..")){let I=h.split("/");for(;I[0]==="..";)I.shift(),T-=1;o.pathname=I.join("/")}f=T>=0?e[T]:"/"}let m=LT(o,f),y=h&&h!=="/"&&h.endsWith("/"),v=(l||h===".")&&t.endsWith("/");return!m.pathname.endsWith("/")&&(y||v)&&(m.pathname+="/"),m}const Si=n=>n.join("/").replace(/\/\/+/g,"/"),UT=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),FT=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,jT=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function zT(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const rv=["post","put","patch","delete"];new Set(rv);const BT=["get",...rv];new Set(BT);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ol(){return ol=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},ol.apply(this,arguments)}const Wf=Q.createContext(null),$T=Q.createContext(null),Ui=Q.createContext(null),Mc=Q.createContext(null),Fi=Q.createContext({outlet:null,matches:[],isDataRoute:!1}),iv=Q.createContext(null);function qT(n,e){let{relative:t}=e===void 0?{}:e;Bo()||at(!1);let{basename:i,navigator:o}=Q.useContext(Ui),{hash:l,pathname:h,search:f}=ov(n,{relative:t}),m=h;return i!=="/"&&(m=h==="/"?i:Si([i,h])),o.createHref({pathname:m,search:f,hash:l})}function Bo(){return Q.useContext(Mc)!=null}function _l(){return Bo()||at(!1),Q.useContext(Mc).location}function sv(n){Q.useContext(Ui).static||Q.useLayoutEffect(n)}function vl(){let{isDataRoute:n}=Q.useContext(Fi);return n?rI():WT()}function WT(){Bo()||at(!1);let n=Q.useContext(Wf),{basename:e,future:t,navigator:i}=Q.useContext(Ui),{matches:o}=Q.useContext(Fi),{pathname:l}=_l(),h=JSON.stringify($f(o,t.v7_relativeSplatPath)),f=Q.useRef(!1);return sv(()=>{f.current=!0}),Q.useCallback(function(y,v){if(v===void 0&&(v={}),!f.current)return;if(typeof y=="number"){i.go(y);return}let T=qf(y,JSON.parse(h),l,v.relative==="path");n==null&&e!=="/"&&(T.pathname=T.pathname==="/"?e:Si([e,T.pathname])),(v.replace?i.replace:i.push)(T,v.state,v)},[e,i,h,l,n])}function ov(n,e){let{relative:t}=e===void 0?{}:e,{future:i}=Q.useContext(Ui),{matches:o}=Q.useContext(Fi),{pathname:l}=_l(),h=JSON.stringify($f(o,i.v7_relativeSplatPath));return Q.useMemo(()=>qf(n,JSON.parse(h),l,t==="path"),[n,h,l,t])}function HT(n,e){return GT(n,e)}function GT(n,e,t,i){Bo()||at(!1);let{navigator:o}=Q.useContext(Ui),{matches:l}=Q.useContext(Fi),h=l[l.length-1],f=h?h.params:{};h&&h.pathname;let m=h?h.pathnameBase:"/";h&&h.route;let y=_l(),v;if(e){var T;let L=typeof e=="string"?zo(e):e;m==="/"||(T=L.pathname)!=null&&T.startsWith(m)||at(!1),v=L}else v=y;let I=v.pathname||"/",V=I;if(m!=="/"){let L=m.replace(/^\//,"").split("/");V="/"+I.replace(/^\//,"").split("/").slice(L.length).join("/")}let j=vT(n,{pathname:V}),$=YT(j&&j.map(L=>Object.assign({},L,{params:Object.assign({},f,L.params),pathname:Si([m,o.encodeLocation?o.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?m:Si([m,o.encodeLocation?o.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),l,t,i);return e&&$?Q.createElement(Mc.Provider,{value:{location:ol({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:wi.Pop}},$):$}function KT(){let n=nI(),e=zT(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Q.createElement(Q.Fragment,null,Q.createElement("h2",null,"Unexpected Application Error!"),Q.createElement("h3",{style:{fontStyle:"italic"}},e),t?Q.createElement("pre",{style:o},t):null,null)}const QT=Q.createElement(KT,null);class XT extends Q.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?Q.createElement(Fi.Provider,{value:this.props.routeContext},Q.createElement(iv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function JT(n){let{routeContext:e,match:t,children:i}=n,o=Q.useContext(Wf);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),Q.createElement(Fi.Provider,{value:e},i)}function YT(n,e,t,i){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),n==null){var l;if(!t)return null;if(t.errors)n=t.matches;else if((l=i)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let h=n,f=(o=t)==null?void 0:o.errors;if(f!=null){let v=h.findIndex(T=>T.route.id&&(f==null?void 0:f[T.route.id])!==void 0);v>=0||at(!1),h=h.slice(0,Math.min(h.length,v+1))}let m=!1,y=-1;if(t&&i&&i.v7_partialHydration)for(let v=0;v<h.length;v++){let T=h[v];if((T.route.HydrateFallback||T.route.hydrateFallbackElement)&&(y=v),T.route.id){let{loaderData:I,errors:V}=t,j=T.route.loader&&I[T.route.id]===void 0&&(!V||V[T.route.id]===void 0);if(T.route.lazy||j){m=!0,y>=0?h=h.slice(0,y+1):h=[h[0]];break}}}return h.reduceRight((v,T,I)=>{let V,j=!1,$=null,L=null;t&&(V=f&&T.route.id?f[T.route.id]:void 0,$=T.route.errorElement||QT,m&&(y<0&&I===0?(iI("route-fallback"),j=!0,L=null):y===I&&(j=!0,L=T.route.hydrateFallbackElement||null)));let oe=e.concat(h.slice(0,I+1)),se=()=>{let Z;return V?Z=$:j?Z=L:T.route.Component?Z=Q.createElement(T.route.Component,null):T.route.element?Z=T.route.element:Z=v,Q.createElement(JT,{match:T,routeContext:{outlet:v,matches:oe,isDataRoute:t!=null},children:Z})};return t&&(T.route.ErrorBoundary||T.route.errorElement||I===0)?Q.createElement(XT,{location:t.location,revalidation:t.revalidation,component:$,error:V,children:se(),routeContext:{outlet:null,matches:oe,isDataRoute:!0}}):se()},null)}var av=(function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n})(av||{}),lv=(function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n})(lv||{});function ZT(n){let e=Q.useContext(Wf);return e||at(!1),e}function eI(n){let e=Q.useContext($T);return e||at(!1),e}function tI(n){let e=Q.useContext(Fi);return e||at(!1),e}function uv(n){let e=tI(),t=e.matches[e.matches.length-1];return t.route.id||at(!1),t.route.id}function nI(){var n;let e=Q.useContext(iv),t=eI(),i=uv();return e!==void 0?e:(n=t.errors)==null?void 0:n[i]}function rI(){let{router:n}=ZT(av.UseNavigateStable),e=uv(lv.UseNavigateStable),t=Q.useRef(!1);return sv(()=>{t.current=!0}),Q.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?n.navigate(o):n.navigate(o,ol({fromRouteId:e},l)))},[n,e])}const uy={};function iI(n,e,t){uy[n]||(uy[n]=!0)}function sI(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function Rn(n){let{to:e,replace:t,state:i,relative:o}=n;Bo()||at(!1);let{future:l,static:h}=Q.useContext(Ui),{matches:f}=Q.useContext(Fi),{pathname:m}=_l(),y=vl(),v=qf(e,$f(f,l.v7_relativeSplatPath),m,o==="path"),T=JSON.stringify(v);return Q.useEffect(()=>y(JSON.parse(T),{replace:t,state:i,relative:o}),[y,T,o,t,i]),null}function vs(n){at(!1)}function oI(n){let{basename:e="/",children:t=null,location:i,navigationType:o=wi.Pop,navigator:l,static:h=!1,future:f}=n;Bo()&&at(!1);let m=e.replace(/^\/*/,"/"),y=Q.useMemo(()=>({basename:m,navigator:l,static:h,future:ol({v7_relativeSplatPath:!1},f)}),[m,f,l,h]);typeof i=="string"&&(i=zo(i));let{pathname:v="/",search:T="",hash:I="",state:V=null,key:j="default"}=i,$=Q.useMemo(()=>{let L=Bf(v,m);return L==null?null:{location:{pathname:L,search:T,hash:I,state:V,key:j},navigationType:o}},[m,v,T,I,V,j,o]);return $==null?null:Q.createElement(Ui.Provider,{value:y},Q.createElement(Mc.Provider,{children:t,value:$}))}function aI(n){let{children:e,location:t}=n;return HT(lf(e),t)}new Promise(()=>{});function lf(n,e){e===void 0&&(e=[]);let t=[];return Q.Children.forEach(n,(i,o)=>{if(!Q.isValidElement(i))return;let l=[...e,o];if(i.type===Q.Fragment){t.push.apply(t,lf(i.props.children,l));return}i.type!==vs&&at(!1),!i.props.index||!i.props.children||at(!1);let h={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(h.children=lf(i.props.children,l)),t.push(h)}),t}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function uf(){return uf=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},uf.apply(this,arguments)}function lI(n,e){if(n==null)return{};var t={},i=Object.keys(n),o,l;for(l=0;l<i.length;l++)o=i[l],!(e.indexOf(o)>=0)&&(t[o]=n[o]);return t}function uI(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function cI(n,e){return n.button===0&&(!e||e==="_self")&&!uI(n)}const hI=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],dI="6";try{window.__reactRouterVersion=dI}catch{}const fI="startTransition",cy=uT[fI];function pI(n){let{basename:e,children:t,future:i,window:o}=n,l=Q.useRef();l.current==null&&(l.current=gT({window:o,v5Compat:!0}));let h=l.current,[f,m]=Q.useState({action:h.action,location:h.location}),{v7_startTransition:y}=i||{},v=Q.useCallback(T=>{y&&cy?cy(()=>m(T)):m(T)},[m,y]);return Q.useLayoutEffect(()=>h.listen(v),[h,v]),Q.useEffect(()=>sI(i),[i]),Q.createElement(oI,{basename:e,children:t,location:f.location,navigationType:f.action,navigator:h,future:i})}const mI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",gI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yI=Q.forwardRef(function(e,t){let{onClick:i,relative:o,reloadDocument:l,replace:h,state:f,target:m,to:y,preventScrollReset:v,viewTransition:T}=e,I=lI(e,hI),{basename:V}=Q.useContext(Ui),j,$=!1;if(typeof y=="string"&&gI.test(y)&&(j=y,mI))try{let Z=new URL(window.location.href),ne=y.startsWith("//")?new URL(Z.protocol+y):new URL(y),Te=Bf(ne.pathname,V);ne.origin===Z.origin&&Te!=null?y=Te+ne.search+ne.hash:$=!0}catch{}let L=qT(y,{relative:o}),oe=_I(y,{replace:h,state:f,target:m,preventScrollReset:v,relative:o,viewTransition:T});function se(Z){i&&i(Z),Z.defaultPrevented||oe(Z)}return Q.createElement("a",uf({},I,{href:j||L,onClick:$||l?i:se,ref:t,target:m}))});var hy;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(hy||(hy={}));var dy;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(dy||(dy={}));function _I(n,e){let{target:t,replace:i,state:o,preventScrollReset:l,relative:h,viewTransition:f}=e===void 0?{}:e,m=vl(),y=_l(),v=ov(n,{relative:h});return Q.useCallback(T=>{if(cI(T,t)){T.preventDefault();let I=i!==void 0?i:fc(y)===fc(v);m(n,{replace:I,state:o,preventScrollReset:l,relative:h,viewTransition:f})}},[y,m,v,i,o,t,n,l,h,f])}const cv=Q.createContext(null);function vI({children:n}){const[e,t]=Q.useState([]),i=Q.useCallback((l,h)=>{const f=Date.now()+Math.floor(Math.random()*1e3);t(m=>[...m,{id:f,type:l,message:h}]),window.setTimeout(()=>{t(m=>m.filter(y=>y.id!==f))},3200)},[]),o=Q.useMemo(()=>({showSuccess:l=>i("success",l),showError:l=>i("error",l)}),[i]);return O.jsxs(cv.Provider,{value:o,children:[n,O.jsx("div",{className:"toast-wrap","aria-live":"polite","aria-atomic":"true",children:e.map(l=>O.jsx("div",{className:`toast toast-${l.type}`,children:l.message},l.id))})]})}function Uc(){const n=Q.useContext(cv);if(!n)throw new Error("useToast must be used within ToastProvider");return n}const EI=()=>{};var fy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},wI=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],h=n[t++],f=n[t++],m=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(m>>10)),e[i++]=String.fromCharCode(56320+(m&1023))}else{const l=n[t++],h=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},dv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],h=o+1<n.length,f=h?n[o+1]:0,m=o+2<n.length,y=m?n[o+2]:0,v=l>>2,T=(l&3)<<4|f>>4;let I=(f&15)<<2|y>>6,V=y&63;m||(V=64,h||(I=64)),i.push(t[v],t[T],t[I],t[V])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(hv(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):wI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],f=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const T=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||f==null||y==null||T==null)throw new TI;const I=l<<2|f>>4;if(i.push(I),y!==64){const V=f<<4&240|y>>2;if(i.push(V),T!==64){const j=y<<6&192|T;i.push(j)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class TI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const II=function(n){const e=hv(n);return dv.encodeByteArray(e,!0)},pc=function(n){return II(n).replace(/\./g,"")},fv=function(n){try{return dv.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function SI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const AI=()=>SI().__FIREBASE_DEFAULTS__,RI=()=>{if(typeof process>"u"||typeof fy>"u")return;const n=fy.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},CI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&fv(n[1]);return e&&JSON.parse(e)},Fc=()=>{try{return EI()||AI()||RI()||CI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},pv=n=>{var e,t;return(t=(e=Fc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Hf=n=>{const e=pv(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},mv=()=>{var n;return(n=Fc())===null||n===void 0?void 0:n.config},gv=n=>{var e;return(e=Fc())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function ji(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function jc(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function yv(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[pc(JSON.stringify(t)),pc(JSON.stringify(h)),""].join(".")}const Za={};function kI(){const n={prod:[],emulator:[]};for(const e of Object.keys(Za))Za[e]?n.emulator.push(e):n.prod.push(e);return n}function NI(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let py=!1;function zc(n,e){if(typeof window>"u"||typeof document>"u"||!ji(window.location.host)||Za[n]===e||Za[n]||py)return;Za[n]=e;function t(I){return`__firebase__banner__${I}`}const i="__firebase__banner",l=kI().prod.length>0;function h(){const I=document.getElementById(i);I&&I.remove()}function f(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function m(I,V){I.setAttribute("width","24"),I.setAttribute("id",V),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function y(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{py=!0,h()},I}function v(I,V){I.setAttribute("id",V),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function T(){const I=NI(i),V=t("text"),j=document.getElementById(V)||document.createElement("span"),$=t("learnmore"),L=document.getElementById($)||document.createElement("a"),oe=t("preprendIcon"),se=document.getElementById(oe)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const Z=I.element;f(Z),v(L,$);const ne=y();m(se,oe),Z.append(se,j,L,ne),document.body.appendChild(Z)}l?(j.innerText="Preview backend disconnected.",se.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(se.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,j.innerText="Preview backend running in this workspace."),j.setAttribute("id",V)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Bt())}function DI(){var n;const e=(n=Fc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function OI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function VI(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function bI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function LI(){const n=Bt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function MI(){return!DI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function UI(){try{return typeof indexedDB=="object"}catch{return!1}}function FI(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI="FirebaseError";class Kn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=jI,Object.setPrototypeOf(this,Kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,El.prototype.create)}}class El{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?zI(l,i):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new Kn(o,f,i)}}function zI(n,e){return n.replace(BI,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const BI=/\{\$([^}]+)}/g;function $I(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ss(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],h=e[o];if(my(l)&&my(h)){if(!Ss(l,h))return!1}else if(l!==h)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function my(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function qI(n,e){const t=new WI(n,e);return t.subscribe.bind(t)}class WI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");HI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Gd),o.error===void 0&&(o.error=Gd),o.complete===void 0&&(o.complete=Gd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function HI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Gd(){}/**
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
 */function lt(n){return n&&n._delegate?n._delegate:n}class zr{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Es="[DEFAULT]";/**
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
 */class GI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new PI;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(QI(e))try{this.getOrInitializeService({instanceIdentifier:Es})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=Es){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Es){return this.instances.has(e)}getOptions(e=Es){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&h.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:KI(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Es){return this.component?this.component.multipleInstances?e:Es:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function KI(n){return n===Es?void 0:n}function QI(n){return n.instantiationMode==="EAGER"}/**
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
 */class XI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new GI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ke||(ke={}));const JI={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},YI=ke.INFO,ZI={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},eS=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=ZI[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gf{constructor(e){this.name=e,this._logLevel=YI,this._logHandler=eS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?JI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const tS=(n,e)=>e.some(t=>n instanceof t);let gy,yy;function nS(){return gy||(gy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rS(){return yy||(yy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _v=new WeakMap,cf=new WeakMap,vv=new WeakMap,Kd=new WeakMap,Kf=new WeakMap;function iS(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",h)},l=()=>{t(Ai(n.result)),o()},h=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&_v.set(t,n)}).catch(()=>{}),Kf.set(e,n),e}function sS(n){if(cf.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",h),n.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",h),n.addEventListener("abort",h)});cf.set(n,e)}let hf={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return cf.get(n);if(e==="objectStoreNames")return n.objectStoreNames||vv.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ai(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function oS(n){hf=n(hf)}function aS(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Qd(this),e,...t);return vv.set(i,e.sort?e.sort():[e]),Ai(i)}:rS().includes(n)?function(...e){return n.apply(Qd(this),e),Ai(_v.get(this))}:function(...e){return Ai(n.apply(Qd(this),e))}}function lS(n){return typeof n=="function"?aS(n):(n instanceof IDBTransaction&&sS(n),tS(n,nS())?new Proxy(n,hf):n)}function Ai(n){if(n instanceof IDBRequest)return iS(n);if(Kd.has(n))return Kd.get(n);const e=lS(n);return e!==n&&(Kd.set(n,e),Kf.set(e,n)),e}const Qd=n=>Kf.get(n);function uS(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const h=indexedDB.open(n,e),f=Ai(h);return i&&h.addEventListener("upgradeneeded",m=>{i(Ai(h.result),m.oldVersion,m.newVersion,Ai(h.transaction),m)}),t&&h.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),f.then(m=>{l&&m.addEventListener("close",()=>l()),o&&m.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),f}const cS=["get","getKey","getAll","getAllKeys","count"],hS=["put","add","delete","clear"],Xd=new Map;function _y(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Xd.get(e))return Xd.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=hS.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||cS.includes(t)))return;const l=async function(h,...f){const m=this.transaction(h,o?"readwrite":"readonly");let y=m.store;return i&&(y=y.index(f.shift())),(await Promise.all([y[t](...f),o&&m.done]))[0]};return Xd.set(e,l),l}oS(n=>({...n,get:(e,t,i)=>_y(e,t)||n.get(e,t,i),has:(e,t)=>!!_y(e,t)||n.has(e,t)}));/**
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
 */class dS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(fS(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function fS(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const df="@firebase/app",vy="0.13.2";/**
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
 */const Br=new Gf("@firebase/app"),pS="@firebase/app-compat",mS="@firebase/analytics-compat",gS="@firebase/analytics",yS="@firebase/app-check-compat",_S="@firebase/app-check",vS="@firebase/auth",ES="@firebase/auth-compat",wS="@firebase/database",TS="@firebase/data-connect",IS="@firebase/database-compat",SS="@firebase/functions",AS="@firebase/functions-compat",RS="@firebase/installations",CS="@firebase/installations-compat",PS="@firebase/messaging",kS="@firebase/messaging-compat",NS="@firebase/performance",xS="@firebase/performance-compat",DS="@firebase/remote-config",OS="@firebase/remote-config-compat",VS="@firebase/storage",bS="@firebase/storage-compat",LS="@firebase/firestore",MS="@firebase/ai",US="@firebase/firestore-compat",FS="firebase",jS="11.10.0";/**
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
 */const ff="[DEFAULT]",zS={[df]:"fire-core",[pS]:"fire-core-compat",[gS]:"fire-analytics",[mS]:"fire-analytics-compat",[_S]:"fire-app-check",[yS]:"fire-app-check-compat",[vS]:"fire-auth",[ES]:"fire-auth-compat",[wS]:"fire-rtdb",[TS]:"fire-data-connect",[IS]:"fire-rtdb-compat",[SS]:"fire-fn",[AS]:"fire-fn-compat",[RS]:"fire-iid",[CS]:"fire-iid-compat",[PS]:"fire-fcm",[kS]:"fire-fcm-compat",[NS]:"fire-perf",[xS]:"fire-perf-compat",[DS]:"fire-rc",[OS]:"fire-rc-compat",[VS]:"fire-gcs",[bS]:"fire-gcs-compat",[LS]:"fire-fst",[US]:"fire-fst-compat",[MS]:"fire-vertex","fire-js":"fire-js",[FS]:"fire-js-all"};/**
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
 */const mc=new Map,BS=new Map,pf=new Map;function Ey(n,e){try{n.container.addComponent(e)}catch(t){Br.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ni(n){const e=n.name;if(pf.has(e))return Br.debug(`There were multiple attempts to register component ${e}.`),!1;pf.set(e,n);for(const t of mc.values())Ey(t,n);for(const t of BS.values())Ey(t,n);return!0}function Tl(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function nn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const $S={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ri=new El("app","Firebase",$S);/**
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
 */class qS{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new zr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ri.create("app-deleted",{appName:this._name})}}/**
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
 */const Ps=jS;function Ev(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:ff,automaticDataCollectionEnabled:!0},e),o=i.name;if(typeof o!="string"||!o)throw Ri.create("bad-app-name",{appName:String(o)});if(t||(t=mv()),!t)throw Ri.create("no-options");const l=mc.get(o);if(l){if(Ss(t,l.options)&&Ss(i,l.config))return l;throw Ri.create("duplicate-app",{appName:o})}const h=new XI(o);for(const m of pf.values())h.addComponent(m);const f=new qS(t,i,h);return mc.set(o,f),f}function Bc(n=ff){const e=mc.get(n);if(!e&&n===ff&&mv())return Ev();if(!e)throw Ri.create("no-app",{appName:n});return e}function Cn(n,e,t){var i;let o=(i=zS[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&f.push("and"),h&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Br.warn(f.join(" "));return}Ni(new zr(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const WS="firebase-heartbeat-database",HS=1,al="firebase-heartbeat-store";let Jd=null;function wv(){return Jd||(Jd=uS(WS,HS,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(al)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ri.create("idb-open",{originalErrorMessage:n.message})})),Jd}async function GS(n){try{const t=(await wv()).transaction(al),i=await t.objectStore(al).get(Tv(n));return await t.done,i}catch(e){if(e instanceof Kn)Br.warn(e.message);else{const t=Ri.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Br.warn(t.message)}}}async function wy(n,e){try{const i=(await wv()).transaction(al,"readwrite");await i.objectStore(al).put(e,Tv(n)),await i.done}catch(t){if(t instanceof Kn)Br.warn(t.message);else{const i=Ri.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Br.warn(i.message)}}}function Tv(n){return`${n.name}!${n.options.appId}`}/**
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
 */const KS=1024,QS=30;class XS{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new YS(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Ty();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>QS){const h=ZS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Br.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ty(),{heartbeatsToSend:i,unsentEntries:o}=JS(this._heartbeatsCache.heartbeats),l=pc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Br.warn(t),""}}}function Ty(){return new Date().toISOString().substring(0,10)}function JS(n,e=KS){const t=[];let i=n.slice();for(const o of n){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),Iy(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Iy(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class YS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return UI()?FI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await GS(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return wy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return wy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Iy(n){return pc(JSON.stringify({version:2,heartbeats:n})).length}function ZS(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function eA(n){Ni(new zr("platform-logger",e=>new dS(e),"PRIVATE")),Ni(new zr("heartbeat",e=>new XS(e),"PRIVATE")),Cn(df,vy,n),Cn(df,vy,"esm2017"),Cn("fire-js","")}eA("");var tA="firebase",nA="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Cn(tA,nA,"app");function Qf(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function Iv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rA=Iv,Sv=new El("auth","Firebase",Iv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc=new Gf("@firebase/auth");function iA(n,...e){gc.logLevel<=ke.WARN&&gc.warn(`Auth (${Ps}): ${n}`,...e)}function rc(n,...e){gc.logLevel<=ke.ERROR&&gc.error(`Auth (${Ps}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(n,...e){throw Jf(n,...e)}function Wn(n,...e){return Jf(n,...e)}function Xf(n,e,t){const i=Object.assign(Object.assign({},rA()),{[e]:t});return new El("auth","Firebase",i).create(e,{appName:n.name})}function Ci(n){return Xf(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Av(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&fr(n,"argument-error"),Xf(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Jf(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Sv.create(n,...e)}function we(n,e,...t){if(!n)throw Jf(e,...t)}function Mr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw rc(e),new Error(e)}function $r(n,e){n||Mr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function sA(){return Sy()==="http:"||Sy()==="https:"}function Sy(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sA()||VI()||"connection"in navigator)?navigator.onLine:!0}function aA(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,t){this.shortDelay=e,this.longDelay=t,$r(t>e,"Short delay should be less than long delay!"),this.isMobile=xI()||bI()}get(){return oA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(n,e){$r(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],cA=new Il(3e4,6e4);function Zf(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function $o(n,e,t,i,o={}){return Cv(n,o,async()=>{let l={},h={};i&&(e==="GET"?h=i:l={body:JSON.stringify(i)});const f=wl(Object.assign({key:n.config.apiKey},h)).slice(1),m=await n._getAdditionalHeaders();m["Content-Type"]="application/json",n.languageCode&&(m["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:m},l);return OI()||(y.referrerPolicy="no-referrer"),n.emulatorConfig&&ji(n.emulatorConfig.host)&&(y.credentials="include"),Rv.fetch()(await Pv(n,n.config.apiHost,t,f),y)})}async function Cv(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},lA),e);try{const o=new dA(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Qu(n,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[m,y]=f.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qu(n,"credential-already-in-use",h);if(m==="EMAIL_EXISTS")throw Qu(n,"email-already-in-use",h);if(m==="USER_DISABLED")throw Qu(n,"user-disabled",h);const v=i[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw Xf(n,v,y);fr(n,v)}}catch(o){if(o instanceof Kn)throw o;fr(n,"network-request-failed",{message:String(o)})}}async function hA(n,e,t,i,o={}){const l=await $o(n,e,t,i,o);return"mfaPendingCredential"in l&&fr(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function Pv(n,e,t,i){const o=`${e}${t}?${i}`,l=n,h=l.config.emulator?Yf(n.config,o):`${n.config.apiScheme}://${o}`;return uA.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}class dA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Wn(this.auth,"network-request-failed")),cA.get())})}}function Qu(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=Wn(n,e,i);return o.customData._tokenResponse=t,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fA(n,e){return $o(n,"POST","/v1/accounts:delete",e)}async function yc(n,e){return $o(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pA(n,e=!1){const t=lt(n),i=await t.getIdToken(e),o=ep(i);we(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:el(Yd(o.auth_time)),issuedAtTime:el(Yd(o.iat)),expirationTime:el(Yd(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Yd(n){return Number(n)*1e3}function ep(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return rc("JWT malformed, contained fewer than 3 sections"),null;try{const o=fv(t);return o?JSON.parse(o):(rc("Failed to decode base64 JWT payload"),null)}catch(o){return rc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Ay(n){const e=ep(n);return we(e,"internal-error"),we(typeof e.exp<"u","internal-error"),we(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ll(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Kn&&mA(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function mA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=el(this.lastLoginAt),this.creationTime=el(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function _c(n){var e;const t=n.auth,i=await n.getIdToken(),o=await ll(n,yc(t,{idToken:i}));we(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?kv(l.providerUserInfo):[],f=_A(n.providerData,h),m=n.isAnonymous,y=!(n.email&&l.passwordHash)&&!(f!=null&&f.length),v=m?y:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new gf(l.createdAt,l.lastLoginAt),isAnonymous:v};Object.assign(n,T)}async function yA(n){const e=lt(n);await _c(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _A(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function kv(n){return n.map(e=>{var{providerId:t}=e,i=Qf(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vA(n,e){const t=await Cv(n,{},async()=>{const i=wl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,h=await Pv(n,o,"/v1/token",`key=${l}`),f=await n._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:f,body:i};return n.emulatorConfig&&ji(n.emulatorConfig.host)&&(m.credentials="include"),Rv.fetch()(h,m)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function EA(n,e){return $o(n,"POST","/v2/accounts:revokeToken",Zf(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){we(e.idToken,"internal-error"),we(typeof e.idToken<"u","internal-error"),we(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ay(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){we(e.length!==0,"internal-error");const t=Ay(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(we(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await vA(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,h=new ko;return i&&(we(typeof i=="string","internal-error",{appName:e}),h.refreshToken=i),o&&(we(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(we(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ko,this.toJSON())}_performRefresh(){return Mr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(n,e){we(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class $n{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=Qf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new gf(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await ll(this,this.stsTokenManager.getToken(this.auth,e));return we(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return pA(this,e)}reload(){return yA(this)}_assign(e){this!==e&&(we(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new $n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){we(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await _c(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(nn(this.auth.app))return Promise.reject(Ci(this.auth));const e=await this.getIdToken();return await ll(this,fA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,h,f,m,y,v;const T=(i=t.displayName)!==null&&i!==void 0?i:void 0,I=(o=t.email)!==null&&o!==void 0?o:void 0,V=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,j=(h=t.photoURL)!==null&&h!==void 0?h:void 0,$=(f=t.tenantId)!==null&&f!==void 0?f:void 0,L=(m=t._redirectEventId)!==null&&m!==void 0?m:void 0,oe=(y=t.createdAt)!==null&&y!==void 0?y:void 0,se=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:Z,emailVerified:ne,isAnonymous:Te,providerData:_e,stsTokenManager:N}=t;we(Z&&N,e,"internal-error");const S=ko.fromJSON(this.name,N);we(typeof Z=="string",e,"internal-error"),yi(T,e.name),yi(I,e.name),we(typeof ne=="boolean",e,"internal-error"),we(typeof Te=="boolean",e,"internal-error"),yi(V,e.name),yi(j,e.name),yi($,e.name),yi(L,e.name),yi(oe,e.name),yi(se,e.name);const C=new $n({uid:Z,auth:e,email:I,emailVerified:ne,displayName:T,isAnonymous:Te,photoURL:j,phoneNumber:V,tenantId:$,stsTokenManager:S,createdAt:oe,lastLoginAt:se});return _e&&Array.isArray(_e)&&(C.providerData=_e.map(k=>Object.assign({},k))),L&&(C._redirectEventId=L),C}static async _fromIdTokenResponse(e,t,i=!1){const o=new ko;o.updateFromServerResponse(t);const l=new $n({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await _c(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];we(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?kv(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new ko;f.updateFromIdToken(i);const m=new $n({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new gf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(m,y),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry=new Map;function Ur(n){$r(n instanceof Function,"Expected a class definition");let e=Ry.get(n);return e?($r(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ry.set(n,e),e)}/**
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
 */class Nv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Nv.type="NONE";const Cy=Nv;/**
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
 */function ic(n,e,t){return`firebase:${n}:${e}:${t}`}class No{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=ic(this.userKey,o.apiKey,l),this.fullPersistenceKey=ic("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await yc(this.auth,{idToken:e}).catch(()=>{});return t?$n._fromGetAccountInfoResponse(this.auth,t,e):null}return $n._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new No(Ur(Cy),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||Ur(Cy);const h=ic(i,e.config.apiKey,e.name);let f=null;for(const y of t)try{const v=await y._get(h);if(v){let T;if(typeof v=="string"){const I=await yc(e,{idToken:v}).catch(()=>{});if(!I)break;T=await $n._fromGetAccountInfoResponse(e,I,v)}else T=$n._fromJSON(e,v);y!==l&&(f=T),l=y;break}}catch{}const m=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!m.length?new No(l,e,i):(l=m[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(h)}catch{}})),new No(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Py(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Vv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Lv(e))return"Blackberry";if(Mv(e))return"Webos";if(Dv(e))return"Safari";if((e.includes("chrome/")||Ov(e))&&!e.includes("edge/"))return"Chrome";if(bv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function xv(n=Bt()){return/firefox\//i.test(n)}function Dv(n=Bt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ov(n=Bt()){return/crios\//i.test(n)}function Vv(n=Bt()){return/iemobile/i.test(n)}function bv(n=Bt()){return/android/i.test(n)}function Lv(n=Bt()){return/blackberry/i.test(n)}function Mv(n=Bt()){return/webos/i.test(n)}function tp(n=Bt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function wA(n=Bt()){var e;return tp(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function TA(){return LI()&&document.documentMode===10}function Uv(n=Bt()){return tp(n)||bv(n)||Mv(n)||Lv(n)||/windows phone/i.test(n)||Vv(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(n,e=[]){let t;switch(n){case"Browser":t=Py(Bt());break;case"Worker":t=`${Py(Bt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ps}/${i}`}/**
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
 */class IA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((h,f)=>{try{const m=e(l);h(m)}catch(m){f(m)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function SA(n,e={}){return $o(n,"GET","/v2/passwordPolicy",Zf(n,e))}/**
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
 */const AA=6;class RA{constructor(e){var t,i,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:AA,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,h,f;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,m),this.validatePasswordCharacterOptions(e,m),m.isValid&&(m.isValid=(t=m.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),m.isValid&&(m.isValid=(i=m.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),m.isValid&&(m.isValid=(o=m.containsLowercaseLetter)!==null&&o!==void 0?o:!0),m.isValid&&(m.isValid=(l=m.containsUppercaseLetter)!==null&&l!==void 0?l:!0),m.isValid&&(m.isValid=(h=m.containsNumericCharacter)!==null&&h!==void 0?h:!0),m.isValid&&(m.isValid=(f=m.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),m}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ky(this),this.idTokenSubscription=new ky(this),this.beforeStateQueue=new IA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ur(t)),this._initializationPromise=this.queue(async()=>{var i,o,l;if(!this._deleted&&(this.persistenceManager=await No.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await yc(this,{idToken:e}),i=await $n._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(nn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,m=await this.tryRedirectSignIn(e);(!h||h===f)&&(m!=null&&m.user)&&(o=m.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return we(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await _c(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(nn(this.app))return Promise.reject(Ci(this));const t=e?lt(e):null;return t&&we(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&we(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return nn(this.app)?Promise.reject(Ci(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return nn(this.app)?Promise.reject(Ci(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ur(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await SA(this),t=new RA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new El("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await EA(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ur(e)||this._popupRedirectResolver;we(t,this,"argument-error"),this.redirectPersistenceManager=await No.create(this,[Ur(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(we(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,i,o);return()=>{h=!0,m()}}else{const m=e.addObserver(t);return()=>{h=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return we(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(nn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&iA(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function qo(n){return lt(n)}class ky{constructor(e){this.auth=e,this.observer=null,this.addObserver=qI(t=>this.observer=t)}get next(){return we(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let np={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function PA(n){np=n}function kA(n){return np.loadJS(n)}function NA(){return np.gapiScript}function xA(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DA(n,e){const t=Tl(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Ss(l,e??{}))return o;fr(o,"already-initialized")}return t.initialize({options:e})}function OA(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Ur);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function VA(n,e,t){const i=qo(n);we(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=jv(e),{host:h,port:f}=bA(e),m=f===null?"":`:${f}`,y={url:`${l}//${h}${m}/`},v=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){we(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),we(Ss(y,i.config.emulator)&&Ss(v,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=y,i.emulatorConfig=v,i.settings.appVerificationDisabledForTesting=!0,ji(h)?(jc(`${l}//${h}${m}`),zc("Auth",!0)):LA()}function jv(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function bA(n){const e=jv(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:Ny(i.substr(l.length+1))}}else{const[l,h]=i.split(":");return{host:l,port:Ny(h)}}}function Ny(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function LA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Mr("not implemented")}_getIdTokenResponse(e){return Mr("not implemented")}_linkToIdToken(e,t){return Mr("not implemented")}_getReauthenticationResolver(e){return Mr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xo(n,e){return hA(n,"POST","/v1/accounts:signInWithIdp",Zf(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA="http://localhost";class As extends zv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new As(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):fr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=Qf(t,["providerId","signInMethod"]);if(!i||!o)return null;const h=new As(i,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return xo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,xo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,xo(e,t)}buildRequest(){const e={requestUri:MA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=wl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Sl extends $c{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i extends Sl{constructor(){super("facebook.com")}static credential(e){return As._fromParams({providerId:_i.PROVIDER_ID,signInMethod:_i.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _i.credentialFromTaggedObject(e)}static credentialFromError(e){return _i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _i.credential(e.oauthAccessToken)}catch{return null}}}_i.FACEBOOK_SIGN_IN_METHOD="facebook.com";_i.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr extends Sl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return As._fromParams({providerId:Lr.PROVIDER_ID,signInMethod:Lr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Lr.credentialFromTaggedObject(e)}static credentialFromError(e){return Lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Lr.credential(t,i)}catch{return null}}}Lr.GOOGLE_SIGN_IN_METHOD="google.com";Lr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi extends Sl{constructor(){super("github.com")}static credential(e){return As._fromParams({providerId:vi.PROVIDER_ID,signInMethod:vi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vi.credentialFromTaggedObject(e)}static credentialFromError(e){return vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vi.credential(e.oauthAccessToken)}catch{return null}}}vi.GITHUB_SIGN_IN_METHOD="github.com";vi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei extends Sl{constructor(){super("twitter.com")}static credential(e,t){return As._fromParams({providerId:Ei.PROVIDER_ID,signInMethod:Ei.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ei.credentialFromTaggedObject(e)}static credentialFromError(e){return Ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Ei.credential(t,i)}catch{return null}}}Ei.TWITTER_SIGN_IN_METHOD="twitter.com";Ei.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await $n._fromIdTokenResponse(e,i,o),h=xy(i);return new Vo({user:l,providerId:h,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=xy(i);return new Vo({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function xy(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc extends Kn{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,vc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new vc(e,t,i,o)}}function Bv(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?vc._fromErrorAndOperation(n,l,e,i):l})}async function UA(n,e,t=!1){const i=await ll(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Vo._forOperation(n,"link",i)}/**
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
 */async function FA(n,e,t=!1){const{auth:i}=n;if(nn(i.app))return Promise.reject(Ci(i));const o="reauthenticate";try{const l=await ll(n,Bv(i,o,e,n),t);we(l.idToken,i,"internal-error");const h=ep(l.idToken);we(h,i,"internal-error");const{sub:f}=h;return we(n.uid===f,i,"user-mismatch"),Vo._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&fr(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jA(n,e,t=!1){if(nn(n.app))return Promise.reject(Ci(n));const i="signIn",o=await Bv(n,i,e),l=await Vo._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zA(n,e){return lt(n).setPersistence(e)}function $v(n,e,t,i){return lt(n).onIdTokenChanged(e,t,i)}function BA(n,e,t){return lt(n).beforeAuthStateChanged(e,t)}function qc(n){return lt(n).signOut()}const Ec="__sak";/**
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
 */class qv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ec,"1"),this.storage.removeItem(Ec),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A=1e3,qA=10;class Wv extends qv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Uv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,m)=>{this.notifyListeners(h,m)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(i);!t&&this.localCache[i]===h||this.notifyListeners(i,h)},l=this.storage.getItem(i);TA()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,qA):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},$A)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Wv.type="LOCAL";const Hv=Wv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv extends qv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Gv.type="SESSION";const Kv=Gv;/**
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
 */function WA(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Wc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Wc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(h).map(async y=>y(t.origin,l)),m=await WA(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class HA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,m)=>{const y=rp("",20);o.port1.start();const v=setTimeout(()=>{m(new Error("unsupported_event"))},i);h={messageChannel:o,onMessage(T){const I=T;if(I.data.eventId===y)switch(I.data.status){case"ack":clearTimeout(v),l=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(I.data.response);break;default:clearTimeout(v),clearTimeout(l),m(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(){return window}function GA(n){lr().location.href=n}/**
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
 */function Qv(){return typeof lr().WorkerGlobalScope<"u"&&typeof lr().importScripts=="function"}async function KA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function QA(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function XA(){return Qv()?self:null}/**
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
 */const Xv="firebaseLocalStorageDb",JA=1,wc="firebaseLocalStorage",Jv="fbase_key";class Al{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Hc(n,e){return n.transaction([wc],e?"readwrite":"readonly").objectStore(wc)}function YA(){const n=indexedDB.deleteDatabase(Xv);return new Al(n).toPromise()}function yf(){const n=indexedDB.open(Xv,JA);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(wc,{keyPath:Jv})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(wc)?e(i):(i.close(),await YA(),e(await yf()))})})}async function Dy(n,e,t){const i=Hc(n,!0).put({[Jv]:e,value:t});return new Al(i).toPromise()}async function ZA(n,e){const t=Hc(n,!1).get(e),i=await new Al(t).toPromise();return i===void 0?null:i.value}function Oy(n,e){const t=Hc(n,!0).delete(e);return new Al(t).toPromise()}const e1=800,t1=3;class Yv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>t1)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wc._getInstance(XA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await KA(),!this.activeServiceWorker)return;this.sender=new HA(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||QA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yf();return await Dy(e,Ec,"1"),await Oy(e,Ec),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Dy(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>ZA(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Oy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Hc(o,!1).getAll();return new Al(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),e1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Yv.type="LOCAL";const n1=Yv;new Il(3e4,6e4);/**
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
 */function ip(n,e){return e?Ur(e):(we(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class sp extends zv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return xo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return xo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function r1(n){return jA(n.auth,new sp(n),n.bypassAuthState)}function i1(n){const{auth:e,user:t}=n;return we(t,e,"internal-error"),FA(t,new sp(n),n.bypassAuthState)}async function s1(n){const{auth:e,user:t}=n;return we(t,e,"internal-error"),UA(t,new sp(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const m={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(m))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return r1;case"linkViaPopup":case"linkViaRedirect":return s1;case"reauthViaPopup":case"reauthViaRedirect":return i1;default:fr(this.auth,"internal-error")}}resolve(e){$r(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$r(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o1=new Il(2e3,1e4);async function a1(n,e,t){if(nn(n.app))return Promise.reject(Wn(n,"operation-not-supported-in-this-environment"));const i=qo(n);Av(n,e,$c);const o=ip(i,t);return new ws(i,"signInViaPopup",e,o).executeNotNull()}class ws extends Zv{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,ws.currentPopupAction&&ws.currentPopupAction.cancel(),ws.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return we(e,this.auth,"internal-error"),e}async onExecution(){$r(this.filter.length===1,"Popup operations only handle one event");const e=rp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Wn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Wn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ws.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Wn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,o1.get())};e()}}ws.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l1="pendingRedirect",sc=new Map;class u1 extends Zv{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=sc.get(this.auth._key());if(!e){try{const i=await c1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}sc.set(this.auth._key(),e)}return this.bypassAuthState||sc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function c1(n,e){const t=tE(e),i=eE(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}async function h1(n,e){return eE(n)._set(tE(e),"true")}function d1(n,e){sc.set(n._key(),e)}function eE(n){return Ur(n._redirectPersistence)}function tE(n){return ic(l1,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f1(n,e,t){return p1(n,e,t)}async function p1(n,e,t){if(nn(n.app))return Promise.reject(Ci(n));const i=qo(n);Av(n,e,$c),await i._initializationPromise;const o=ip(i,t);return await h1(o,i),o._openRedirect(i,e,"signInViaRedirect")}async function m1(n,e){return await qo(n)._initializationPromise,nE(n,e,!1)}async function nE(n,e,t=!1){if(nn(n.app))return Promise.reject(Ci(n));const i=qo(n),o=ip(i,e),h=await new u1(i,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g1=600*1e3;class y1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_1(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!rE(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Wn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=g1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vy(e))}saveEventToCache(e){this.cachedEventUids.add(Vy(e)),this.lastProcessedEventTime=Date.now()}}function Vy(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function rE({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _1(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rE(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v1(n,e={}){return $o(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,w1=/^https?/;async function T1(n){if(n.config.emulator)return;const{authorizedDomains:e}=await v1(n);for(const t of e)try{if(I1(t))return}catch{}fr(n,"unauthorized-domain")}function I1(n){const e=mf(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const h=new URL(n);return h.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===i}if(!w1.test(t))return!1;if(E1.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const S1=new Il(3e4,6e4);function by(){const n=lr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function A1(n){return new Promise((e,t)=>{var i,o,l;function h(){by(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{by(),t(Wn(n,"network-request-failed"))},timeout:S1.get()})}if(!((o=(i=lr().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=lr().gapi)===null||l===void 0)&&l.load)h();else{const f=xA("iframefcb");return lr()[f]=()=>{gapi.load?h():t(Wn(n,"network-request-failed"))},kA(`${NA()}?onload=${f}`).catch(m=>t(m))}}).catch(e=>{throw oc=null,e})}let oc=null;function R1(n){return oc=oc||A1(n),oc}/**
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
 */const C1=new Il(5e3,15e3),P1="__/auth/iframe",k1="emulator/auth/iframe",N1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},x1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function D1(n){const e=n.config;we(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Yf(e,k1):`https://${n.config.authDomain}/${P1}`,i={apiKey:e.apiKey,appName:n.name,v:Ps},o=x1.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${wl(i).slice(1)}`}async function O1(n){const e=await R1(n),t=lr().gapi;return we(t,n,"internal-error"),e.open({where:document.body,url:D1(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:N1,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const h=Wn(n,"network-request-failed"),f=lr().setTimeout(()=>{l(h)},C1.get());function m(){lr().clearTimeout(f),o(i)}i.ping(m).then(m,()=>{l(h)})}))}/**
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
 */const V1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},b1=500,L1=600,M1="_blank",U1="http://localhost";class Ly{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function F1(n,e,t,i=b1,o=L1){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const m=Object.assign(Object.assign({},V1),{width:i.toString(),height:o.toString(),top:l,left:h}),y=Bt().toLowerCase();t&&(f=Ov(y)?M1:t),xv(y)&&(e=e||U1,m.scrollbars="yes");const v=Object.entries(m).reduce((I,[V,j])=>`${I}${V}=${j},`,"");if(wA(y)&&f!=="_self")return j1(e||"",f),new Ly(null);const T=window.open(e||"",f,v);we(T,n,"popup-blocked");try{T.focus()}catch{}return new Ly(T)}function j1(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const z1="__/auth/handler",B1="emulator/auth/handler",$1=encodeURIComponent("fac");async function My(n,e,t,i,o,l){we(n.config.authDomain,n,"auth-domain-config-required"),we(n.config.apiKey,n,"invalid-api-key");const h={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Ps,eventId:o};if(e instanceof $c){e.setDefaultLanguage(n.languageCode),h.providerId=e.providerId||"",$I(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,T]of Object.entries({}))h[v]=T}if(e instanceof Sl){const v=e.getScopes().filter(T=>T!=="");v.length>0&&(h.scopes=v.join(","))}n.tenantId&&(h.tid=n.tenantId);const f=h;for(const v of Object.keys(f))f[v]===void 0&&delete f[v];const m=await n._getAppCheckToken(),y=m?`#${$1}=${encodeURIComponent(m)}`:"";return`${q1(n)}?${wl(f).slice(1)}${y}`}function q1({config:n}){return n.emulator?Yf(n,B1):`https://${n.authDomain}/${z1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd="webStorageSupport";class W1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kv,this._completeRedirectFn=nE,this._overrideRedirectResult=d1}async _openPopup(e,t,i,o){var l;$r((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await My(e,t,i,mf(),o);return F1(e,h,rp())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await My(e,t,i,mf(),o);return GA(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):($r(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await O1(e),i=new y1(e);return t.register("authEvent",o=>(we(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Zd,{type:Zd},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[Zd];h!==void 0&&t(!!h),fr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=T1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Uv()||Dv()||tp()}}const H1=W1;var Uy="@firebase/auth",Fy="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){we(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K1(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Q1(n){Ni(new zr("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=i.options;we(h&&!h.includes(":"),"invalid-api-key",{appName:i.name});const m={apiKey:h,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fv(n)},y=new CA(i,o,l,m);return OA(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Ni(new zr("auth-internal",e=>{const t=qo(e.getProvider("auth").getImmediate());return(i=>new G1(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Cn(Uy,Fy,K1(n)),Cn(Uy,Fy,"esm2017")}/**
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
 */const X1=300,J1=gv("authIdTokenMaxAge")||X1;let jy=null;const Y1=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>J1)return;const o=t==null?void 0:t.token;jy!==o&&(jy=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Z1(n=Bc()){const e=Tl(n,"auth");if(e.isInitialized())return e.getImmediate();const t=DA(n,{popupRedirectResolver:H1,persistence:[n1,Hv,Kv]}),i=gv("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const h=Y1(l.toString());BA(t,h,()=>h(t.currentUser)),$v(t,f=>h(f))}}const o=pv("auth");return o&&VA(t,`http://${o}`),t}function eR(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}PA({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=Wn("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",eR().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Q1("Browser");var zy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pi,iE;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,S){function C(){}C.prototype=S.prototype,N.D=S.prototype,N.prototype=new C,N.prototype.constructor=N,N.C=function(k,D,M){for(var R=Array(arguments.length-2),Ye=2;Ye<arguments.length;Ye++)R[Ye-2]=arguments[Ye];return S.prototype[D].apply(k,R)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,S,C){C||(C=0);var k=Array(16);if(typeof S=="string")for(var D=0;16>D;++D)k[D]=S.charCodeAt(C++)|S.charCodeAt(C++)<<8|S.charCodeAt(C++)<<16|S.charCodeAt(C++)<<24;else for(D=0;16>D;++D)k[D]=S[C++]|S[C++]<<8|S[C++]<<16|S[C++]<<24;S=N.g[0],C=N.g[1],D=N.g[2];var M=N.g[3],R=S+(M^C&(D^M))+k[0]+3614090360&4294967295;S=C+(R<<7&4294967295|R>>>25),R=M+(D^S&(C^D))+k[1]+3905402710&4294967295,M=S+(R<<12&4294967295|R>>>20),R=D+(C^M&(S^C))+k[2]+606105819&4294967295,D=M+(R<<17&4294967295|R>>>15),R=C+(S^D&(M^S))+k[3]+3250441966&4294967295,C=D+(R<<22&4294967295|R>>>10),R=S+(M^C&(D^M))+k[4]+4118548399&4294967295,S=C+(R<<7&4294967295|R>>>25),R=M+(D^S&(C^D))+k[5]+1200080426&4294967295,M=S+(R<<12&4294967295|R>>>20),R=D+(C^M&(S^C))+k[6]+2821735955&4294967295,D=M+(R<<17&4294967295|R>>>15),R=C+(S^D&(M^S))+k[7]+4249261313&4294967295,C=D+(R<<22&4294967295|R>>>10),R=S+(M^C&(D^M))+k[8]+1770035416&4294967295,S=C+(R<<7&4294967295|R>>>25),R=M+(D^S&(C^D))+k[9]+2336552879&4294967295,M=S+(R<<12&4294967295|R>>>20),R=D+(C^M&(S^C))+k[10]+4294925233&4294967295,D=M+(R<<17&4294967295|R>>>15),R=C+(S^D&(M^S))+k[11]+2304563134&4294967295,C=D+(R<<22&4294967295|R>>>10),R=S+(M^C&(D^M))+k[12]+1804603682&4294967295,S=C+(R<<7&4294967295|R>>>25),R=M+(D^S&(C^D))+k[13]+4254626195&4294967295,M=S+(R<<12&4294967295|R>>>20),R=D+(C^M&(S^C))+k[14]+2792965006&4294967295,D=M+(R<<17&4294967295|R>>>15),R=C+(S^D&(M^S))+k[15]+1236535329&4294967295,C=D+(R<<22&4294967295|R>>>10),R=S+(D^M&(C^D))+k[1]+4129170786&4294967295,S=C+(R<<5&4294967295|R>>>27),R=M+(C^D&(S^C))+k[6]+3225465664&4294967295,M=S+(R<<9&4294967295|R>>>23),R=D+(S^C&(M^S))+k[11]+643717713&4294967295,D=M+(R<<14&4294967295|R>>>18),R=C+(M^S&(D^M))+k[0]+3921069994&4294967295,C=D+(R<<20&4294967295|R>>>12),R=S+(D^M&(C^D))+k[5]+3593408605&4294967295,S=C+(R<<5&4294967295|R>>>27),R=M+(C^D&(S^C))+k[10]+38016083&4294967295,M=S+(R<<9&4294967295|R>>>23),R=D+(S^C&(M^S))+k[15]+3634488961&4294967295,D=M+(R<<14&4294967295|R>>>18),R=C+(M^S&(D^M))+k[4]+3889429448&4294967295,C=D+(R<<20&4294967295|R>>>12),R=S+(D^M&(C^D))+k[9]+568446438&4294967295,S=C+(R<<5&4294967295|R>>>27),R=M+(C^D&(S^C))+k[14]+3275163606&4294967295,M=S+(R<<9&4294967295|R>>>23),R=D+(S^C&(M^S))+k[3]+4107603335&4294967295,D=M+(R<<14&4294967295|R>>>18),R=C+(M^S&(D^M))+k[8]+1163531501&4294967295,C=D+(R<<20&4294967295|R>>>12),R=S+(D^M&(C^D))+k[13]+2850285829&4294967295,S=C+(R<<5&4294967295|R>>>27),R=M+(C^D&(S^C))+k[2]+4243563512&4294967295,M=S+(R<<9&4294967295|R>>>23),R=D+(S^C&(M^S))+k[7]+1735328473&4294967295,D=M+(R<<14&4294967295|R>>>18),R=C+(M^S&(D^M))+k[12]+2368359562&4294967295,C=D+(R<<20&4294967295|R>>>12),R=S+(C^D^M)+k[5]+4294588738&4294967295,S=C+(R<<4&4294967295|R>>>28),R=M+(S^C^D)+k[8]+2272392833&4294967295,M=S+(R<<11&4294967295|R>>>21),R=D+(M^S^C)+k[11]+1839030562&4294967295,D=M+(R<<16&4294967295|R>>>16),R=C+(D^M^S)+k[14]+4259657740&4294967295,C=D+(R<<23&4294967295|R>>>9),R=S+(C^D^M)+k[1]+2763975236&4294967295,S=C+(R<<4&4294967295|R>>>28),R=M+(S^C^D)+k[4]+1272893353&4294967295,M=S+(R<<11&4294967295|R>>>21),R=D+(M^S^C)+k[7]+4139469664&4294967295,D=M+(R<<16&4294967295|R>>>16),R=C+(D^M^S)+k[10]+3200236656&4294967295,C=D+(R<<23&4294967295|R>>>9),R=S+(C^D^M)+k[13]+681279174&4294967295,S=C+(R<<4&4294967295|R>>>28),R=M+(S^C^D)+k[0]+3936430074&4294967295,M=S+(R<<11&4294967295|R>>>21),R=D+(M^S^C)+k[3]+3572445317&4294967295,D=M+(R<<16&4294967295|R>>>16),R=C+(D^M^S)+k[6]+76029189&4294967295,C=D+(R<<23&4294967295|R>>>9),R=S+(C^D^M)+k[9]+3654602809&4294967295,S=C+(R<<4&4294967295|R>>>28),R=M+(S^C^D)+k[12]+3873151461&4294967295,M=S+(R<<11&4294967295|R>>>21),R=D+(M^S^C)+k[15]+530742520&4294967295,D=M+(R<<16&4294967295|R>>>16),R=C+(D^M^S)+k[2]+3299628645&4294967295,C=D+(R<<23&4294967295|R>>>9),R=S+(D^(C|~M))+k[0]+4096336452&4294967295,S=C+(R<<6&4294967295|R>>>26),R=M+(C^(S|~D))+k[7]+1126891415&4294967295,M=S+(R<<10&4294967295|R>>>22),R=D+(S^(M|~C))+k[14]+2878612391&4294967295,D=M+(R<<15&4294967295|R>>>17),R=C+(M^(D|~S))+k[5]+4237533241&4294967295,C=D+(R<<21&4294967295|R>>>11),R=S+(D^(C|~M))+k[12]+1700485571&4294967295,S=C+(R<<6&4294967295|R>>>26),R=M+(C^(S|~D))+k[3]+2399980690&4294967295,M=S+(R<<10&4294967295|R>>>22),R=D+(S^(M|~C))+k[10]+4293915773&4294967295,D=M+(R<<15&4294967295|R>>>17),R=C+(M^(D|~S))+k[1]+2240044497&4294967295,C=D+(R<<21&4294967295|R>>>11),R=S+(D^(C|~M))+k[8]+1873313359&4294967295,S=C+(R<<6&4294967295|R>>>26),R=M+(C^(S|~D))+k[15]+4264355552&4294967295,M=S+(R<<10&4294967295|R>>>22),R=D+(S^(M|~C))+k[6]+2734768916&4294967295,D=M+(R<<15&4294967295|R>>>17),R=C+(M^(D|~S))+k[13]+1309151649&4294967295,C=D+(R<<21&4294967295|R>>>11),R=S+(D^(C|~M))+k[4]+4149444226&4294967295,S=C+(R<<6&4294967295|R>>>26),R=M+(C^(S|~D))+k[11]+3174756917&4294967295,M=S+(R<<10&4294967295|R>>>22),R=D+(S^(M|~C))+k[2]+718787259&4294967295,D=M+(R<<15&4294967295|R>>>17),R=C+(M^(D|~S))+k[9]+3951481745&4294967295,N.g[0]=N.g[0]+S&4294967295,N.g[1]=N.g[1]+(D+(R<<21&4294967295|R>>>11))&4294967295,N.g[2]=N.g[2]+D&4294967295,N.g[3]=N.g[3]+M&4294967295}i.prototype.u=function(N,S){S===void 0&&(S=N.length);for(var C=S-this.blockSize,k=this.B,D=this.h,M=0;M<S;){if(D==0)for(;M<=C;)o(this,N,M),M+=this.blockSize;if(typeof N=="string"){for(;M<S;)if(k[D++]=N.charCodeAt(M++),D==this.blockSize){o(this,k),D=0;break}}else for(;M<S;)if(k[D++]=N[M++],D==this.blockSize){o(this,k),D=0;break}}this.h=D,this.o+=S},i.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var S=1;S<N.length-8;++S)N[S]=0;var C=8*this.o;for(S=N.length-8;S<N.length;++S)N[S]=C&255,C/=256;for(this.u(N),N=Array(16),S=C=0;4>S;++S)for(var k=0;32>k;k+=8)N[C++]=this.g[S]>>>k&255;return N};function l(N,S){var C=f;return Object.prototype.hasOwnProperty.call(C,N)?C[N]:C[N]=S(N)}function h(N,S){this.h=S;for(var C=[],k=!0,D=N.length-1;0<=D;D--){var M=N[D]|0;k&&M==S||(C[D]=M,k=!1)}this.g=C}var f={};function m(N){return-128<=N&&128>N?l(N,function(S){return new h([S|0],0>S?-1:0)}):new h([N|0],0>N?-1:0)}function y(N){if(isNaN(N)||!isFinite(N))return T;if(0>N)return L(y(-N));for(var S=[],C=1,k=0;N>=C;k++)S[k]=N/C|0,C*=4294967296;return new h(S,0)}function v(N,S){if(N.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(N.charAt(0)=="-")return L(v(N.substring(1),S));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=y(Math.pow(S,8)),k=T,D=0;D<N.length;D+=8){var M=Math.min(8,N.length-D),R=parseInt(N.substring(D,D+M),S);8>M?(M=y(Math.pow(S,M)),k=k.j(M).add(y(R))):(k=k.j(C),k=k.add(y(R)))}return k}var T=m(0),I=m(1),V=m(16777216);n=h.prototype,n.m=function(){if($(this))return-L(this).m();for(var N=0,S=1,C=0;C<this.g.length;C++){var k=this.i(C);N+=(0<=k?k:4294967296+k)*S,S*=4294967296}return N},n.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(j(this))return"0";if($(this))return"-"+L(this).toString(N);for(var S=y(Math.pow(N,6)),C=this,k="";;){var D=ne(C,S).g;C=oe(C,D.j(S));var M=((0<C.g.length?C.g[0]:C.h)>>>0).toString(N);if(C=D,j(C))return M+k;for(;6>M.length;)M="0"+M;k=M+k}},n.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function j(N){if(N.h!=0)return!1;for(var S=0;S<N.g.length;S++)if(N.g[S]!=0)return!1;return!0}function $(N){return N.h==-1}n.l=function(N){return N=oe(this,N),$(N)?-1:j(N)?0:1};function L(N){for(var S=N.g.length,C=[],k=0;k<S;k++)C[k]=~N.g[k];return new h(C,~N.h).add(I)}n.abs=function(){return $(this)?L(this):this},n.add=function(N){for(var S=Math.max(this.g.length,N.g.length),C=[],k=0,D=0;D<=S;D++){var M=k+(this.i(D)&65535)+(N.i(D)&65535),R=(M>>>16)+(this.i(D)>>>16)+(N.i(D)>>>16);k=R>>>16,M&=65535,R&=65535,C[D]=R<<16|M}return new h(C,C[C.length-1]&-2147483648?-1:0)};function oe(N,S){return N.add(L(S))}n.j=function(N){if(j(this)||j(N))return T;if($(this))return $(N)?L(this).j(L(N)):L(L(this).j(N));if($(N))return L(this.j(L(N)));if(0>this.l(V)&&0>N.l(V))return y(this.m()*N.m());for(var S=this.g.length+N.g.length,C=[],k=0;k<2*S;k++)C[k]=0;for(k=0;k<this.g.length;k++)for(var D=0;D<N.g.length;D++){var M=this.i(k)>>>16,R=this.i(k)&65535,Ye=N.i(D)>>>16,wt=N.i(D)&65535;C[2*k+2*D]+=R*wt,se(C,2*k+2*D),C[2*k+2*D+1]+=M*wt,se(C,2*k+2*D+1),C[2*k+2*D+1]+=R*Ye,se(C,2*k+2*D+1),C[2*k+2*D+2]+=M*Ye,se(C,2*k+2*D+2)}for(k=0;k<S;k++)C[k]=C[2*k+1]<<16|C[2*k];for(k=S;k<2*S;k++)C[k]=0;return new h(C,0)};function se(N,S){for(;(N[S]&65535)!=N[S];)N[S+1]+=N[S]>>>16,N[S]&=65535,S++}function Z(N,S){this.g=N,this.h=S}function ne(N,S){if(j(S))throw Error("division by zero");if(j(N))return new Z(T,T);if($(N))return S=ne(L(N),S),new Z(L(S.g),L(S.h));if($(S))return S=ne(N,L(S)),new Z(L(S.g),S.h);if(30<N.g.length){if($(N)||$(S))throw Error("slowDivide_ only works with positive integers.");for(var C=I,k=S;0>=k.l(N);)C=Te(C),k=Te(k);var D=_e(C,1),M=_e(k,1);for(k=_e(k,2),C=_e(C,2);!j(k);){var R=M.add(k);0>=R.l(N)&&(D=D.add(C),M=R),k=_e(k,1),C=_e(C,1)}return S=oe(N,D.j(S)),new Z(D,S)}for(D=T;0<=N.l(S);){for(C=Math.max(1,Math.floor(N.m()/S.m())),k=Math.ceil(Math.log(C)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),M=y(C),R=M.j(S);$(R)||0<R.l(N);)C-=k,M=y(C),R=M.j(S);j(M)&&(M=I),D=D.add(M),N=oe(N,R)}return new Z(D,N)}n.A=function(N){return ne(this,N).h},n.and=function(N){for(var S=Math.max(this.g.length,N.g.length),C=[],k=0;k<S;k++)C[k]=this.i(k)&N.i(k);return new h(C,this.h&N.h)},n.or=function(N){for(var S=Math.max(this.g.length,N.g.length),C=[],k=0;k<S;k++)C[k]=this.i(k)|N.i(k);return new h(C,this.h|N.h)},n.xor=function(N){for(var S=Math.max(this.g.length,N.g.length),C=[],k=0;k<S;k++)C[k]=this.i(k)^N.i(k);return new h(C,this.h^N.h)};function Te(N){for(var S=N.g.length+1,C=[],k=0;k<S;k++)C[k]=N.i(k)<<1|N.i(k-1)>>>31;return new h(C,N.h)}function _e(N,S){var C=S>>5;S%=32;for(var k=N.g.length-C,D=[],M=0;M<k;M++)D[M]=0<S?N.i(M+C)>>>S|N.i(M+C+1)<<32-S:N.i(M+C);return new h(D,N.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,iE=i,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=y,h.fromString=v,Pi=h}).apply(typeof zy<"u"?zy:typeof self<"u"?self:typeof window<"u"?window:{});var Xu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sE,Qa,oE,ac,_f,aE,lE,uE;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,_){return u==Array.prototype||u==Object.prototype||(u[p]=_.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xu=="object"&&Xu];for(var p=0;p<u.length;++p){var _=u[p];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,p){if(p)e:{var _=i;u=u.split(".");for(var w=0;w<u.length-1;w++){var U=u[w];if(!(U in _))break e;_=_[U]}u=u[u.length-1],w=_[u],p=p(w),p!=w&&p!=null&&e(_,u,{configurable:!0,writable:!0,value:p})}}function l(u,p){u instanceof String&&(u+="");var _=0,w=!1,U={next:function(){if(!w&&_<u.length){var q=_++;return{value:p(q,u[q]),done:!1}}return w=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}o("Array.prototype.values",function(u){return u||function(){return l(this,function(p,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},f=this||self;function m(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function y(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function v(u,p,_){return u.call.apply(u.bind,arguments)}function T(u,p,_){if(!u)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,w),u.apply(p,U)}}return function(){return u.apply(p,arguments)}}function I(u,p,_){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:T,I.apply(null,arguments)}function V(u,p){var _=Array.prototype.slice.call(arguments,1);return function(){var w=_.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function j(u,p){function _(){}_.prototype=p.prototype,u.aa=p.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(w,U,q){for(var ie=Array(arguments.length-2),ze=2;ze<arguments.length;ze++)ie[ze-2]=arguments[ze];return p.prototype[U].apply(w,ie)}}function $(u){const p=u.length;if(0<p){const _=Array(p);for(let w=0;w<p;w++)_[w]=u[w];return _}return[]}function L(u,p){for(let _=1;_<arguments.length;_++){const w=arguments[_];if(m(w)){const U=u.length||0,q=w.length||0;u.length=U+q;for(let ie=0;ie<q;ie++)u[U+ie]=w[ie]}else u.push(w)}}class oe{constructor(p,_){this.i=p,this.j=_,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function se(u){return/^[\s\xa0]*$/.test(u)}function Z(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function ne(u){return ne[" "](u),u}ne[" "]=function(){};var Te=Z().indexOf("Gecko")!=-1&&!(Z().toLowerCase().indexOf("webkit")!=-1&&Z().indexOf("Edge")==-1)&&!(Z().indexOf("Trident")!=-1||Z().indexOf("MSIE")!=-1)&&Z().indexOf("Edge")==-1;function _e(u,p,_){for(const w in u)p.call(_,u[w],w,u)}function N(u,p){for(const _ in u)p.call(void 0,u[_],_,u)}function S(u){const p={};for(const _ in u)p[_]=u[_];return p}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(u,p){let _,w;for(let U=1;U<arguments.length;U++){w=arguments[U];for(_ in w)u[_]=w[_];for(let q=0;q<C.length;q++)_=C[q],Object.prototype.hasOwnProperty.call(w,_)&&(u[_]=w[_])}}function D(u){var p=1;u=u.split(":");const _=[];for(;0<p&&u.length;)_.push(u.shift()),p--;return u.length&&_.push(u.join(":")),_}function M(u){f.setTimeout(()=>{throw u},0)}function R(){var u=te;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class Ye{constructor(){this.h=this.g=null}add(p,_){const w=wt.get();w.set(p,_),this.h?this.h.next=w:this.g=w,this.h=w}}var wt=new oe(()=>new pt,u=>u.reset());class pt{constructor(){this.next=this.g=this.h=null}set(p,_){this.h=p,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let Me,W=!1,te=new Ye,re=()=>{const u=f.Promise.resolve(void 0);Me=()=>{u.then(b)}};var b=()=>{for(var u;u=R();){try{u.h.call(u.g)}catch(_){M(_)}var p=wt;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}W=!1};function H(){this.s=this.s,this.C=this.C}H.prototype.s=!1,H.prototype.ma=function(){this.s||(this.s=!0,this.N())},H.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function de(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}de.prototype.h=function(){this.defaultPrevented=!0};var Ae=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};f.addEventListener("test",_,p),f.removeEventListener("test",_,p)}catch{}return u})();function Re(u,p){if(de.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(Te){e:{try{ne(p.nodeName);var U=!0;break e}catch{}U=!1}U||(p=null)}}else _=="mouseover"?p=u.fromElement:_=="mouseout"&&(p=u.toElement);this.relatedTarget=p,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:De[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Re.aa.h.call(this)}}j(Re,de);var De={2:"touch",3:"pen",4:"mouse"};Re.prototype.h=function(){Re.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Ue="closure_listenable_"+(1e6*Math.random()|0),Fe=0;function $e(u,p,_,w,U){this.listener=u,this.proxy=null,this.src=p,this.type=_,this.capture=!!w,this.ha=U,this.key=++Fe,this.da=this.fa=!1}function Tt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function _r(u){this.src=u,this.g={},this.h=0}_r.prototype.add=function(u,p,_,w,U){var q=u.toString();u=this.g[q],u||(u=this.g[q]=[],this.h++);var ie=Hr(u,p,w,U);return-1<ie?(p=u[ie],_||(p.fa=!1)):(p=new $e(p,this.src,q,!!w,U),p.fa=_,u.push(p)),p};function Ds(u,p){var _=p.type;if(_ in u.g){var w=u.g[_],U=Array.prototype.indexOf.call(w,p,void 0),q;(q=0<=U)&&Array.prototype.splice.call(w,U,1),q&&(Tt(p),u.g[_].length==0&&(delete u.g[_],u.h--))}}function Hr(u,p,_,w){for(var U=0;U<u.length;++U){var q=u[U];if(!q.da&&q.listener==p&&q.capture==!!_&&q.ha==w)return U}return-1}var qi="closure_lm_"+(1e6*Math.random()|0),Os={};function ea(u,p,_,w,U){if(Array.isArray(p)){for(var q=0;q<p.length;q++)ea(u,p[q],_,w,U);return null}return _=ra(_),u&&u[Ue]?u.K(p,_,y(w)?!!w.capture:!1,U):ta(u,p,_,!1,w,U)}function ta(u,p,_,w,U,q){if(!p)throw Error("Invalid event type");var ie=y(U)?!!U.capture:!!U,ze=bs(u);if(ze||(u[qi]=ze=new _r(u)),_=ze.add(p,_,w,ie,q),_.proxy)return _;if(w=Ol(),_.proxy=w,w.src=u,w.listener=_,u.addEventListener)Ae||(U=ie),U===void 0&&(U=!1),u.addEventListener(p.toString(),w,U);else if(u.attachEvent)u.attachEvent(Er(p.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Ol(){function u(_){return p.call(u.src,u.listener,_)}const p=na;return u}function Vs(u,p,_,w,U){if(Array.isArray(p))for(var q=0;q<p.length;q++)Vs(u,p[q],_,w,U);else w=y(w)?!!w.capture:!!w,_=ra(_),u&&u[Ue]?(u=u.i,p=String(p).toString(),p in u.g&&(q=u.g[p],_=Hr(q,_,w,U),-1<_&&(Tt(q[_]),Array.prototype.splice.call(q,_,1),q.length==0&&(delete u.g[p],u.h--)))):u&&(u=bs(u))&&(p=u.g[p.toString()],u=-1,p&&(u=Hr(p,_,w,U)),(_=-1<u?p[u]:null)&&vr(_))}function vr(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[Ue])Ds(p.i,u);else{var _=u.type,w=u.proxy;p.removeEventListener?p.removeEventListener(_,w,u.capture):p.detachEvent?p.detachEvent(Er(_),w):p.addListener&&p.removeListener&&p.removeListener(w),(_=bs(p))?(Ds(_,u),_.h==0&&(_.src=null,p[qi]=null)):Tt(u)}}}function Er(u){return u in Os?Os[u]:Os[u]="on"+u}function na(u,p){if(u.da)u=!0;else{p=new Re(p,this);var _=u.listener,w=u.ha||u.src;u.fa&&vr(u),u=_.call(w,p)}return u}function bs(u){return u=u[qi],u instanceof _r?u:null}var Ls="__closure_events_fn_"+(1e9*Math.random()>>>0);function ra(u){return typeof u=="function"?u:(u[Ls]||(u[Ls]=function(p){return u.handleEvent(p)}),u[Ls])}function mt(){H.call(this),this.i=new _r(this),this.M=this,this.F=null}j(mt,H),mt.prototype[Ue]=!0,mt.prototype.removeEventListener=function(u,p,_,w){Vs(this,u,p,_,w)};function gt(u,p){var _,w=u.F;if(w)for(_=[];w;w=w.F)_.push(w);if(u=u.M,w=p.type||p,typeof p=="string")p=new de(p,u);else if(p instanceof de)p.target=p.target||u;else{var U=p;p=new de(w,u),k(p,U)}if(U=!0,_)for(var q=_.length-1;0<=q;q--){var ie=p.g=_[q];U=wr(ie,w,!0,p)&&U}if(ie=p.g=u,U=wr(ie,w,!0,p)&&U,U=wr(ie,w,!1,p)&&U,_)for(q=0;q<_.length;q++)ie=p.g=_[q],U=wr(ie,w,!1,p)&&U}mt.prototype.N=function(){if(mt.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var _=u.g[p],w=0;w<_.length;w++)Tt(_[w]);delete u.g[p],u.h--}}this.F=null},mt.prototype.K=function(u,p,_,w){return this.i.add(String(u),p,!1,_,w)},mt.prototype.L=function(u,p,_,w){return this.i.add(String(u),p,!0,_,w)};function wr(u,p,_,w){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var U=!0,q=0;q<p.length;++q){var ie=p[q];if(ie&&!ie.da&&ie.capture==_){var ze=ie.listener,yt=ie.ha||ie.src;ie.fa&&Ds(u.i,ie),U=ze.call(yt,w)!==!1&&U}}return U&&!w.defaultPrevented}function ia(u,p,_){if(typeof u=="function")_&&(u=I(u,_));else if(u&&typeof u.handleEvent=="function")u=I(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:f.setTimeout(u,p||0)}function Gr(u){u.g=ia(()=>{u.g=null,u.i&&(u.i=!1,Gr(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class Wi extends H{constructor(p,_){super(),this.m=p,this.l=_,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Gr(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Hi(u){H.call(this),this.h=u,this.g={}}j(Hi,H);var sa=[];function oa(u){_e(u.g,function(p,_){this.g.hasOwnProperty(_)&&vr(p)},u),u.g={}}Hi.prototype.N=function(){Hi.aa.N.call(this),oa(this)},Hi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var aa=f.JSON.stringify,la=f.JSON.parse,ua=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function Gi(){}Gi.prototype.h=null;function Ms(u){return u.h||(u.h=u.i())}function Us(){}var mn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Xn(){de.call(this,"d")}j(Xn,de);function Fs(){de.call(this,"c")}j(Fs,de);var Jn={},ca=null;function Ki(){return ca=ca||new mt}Jn.La="serverreachability";function ha(u){de.call(this,Jn.La,u)}j(ha,de);function Tr(u){const p=Ki();gt(p,new ha(p))}Jn.STAT_EVENT="statevent";function da(u,p){de.call(this,Jn.STAT_EVENT,u),this.stat=p}j(da,de);function rt(u){const p=Ki();gt(p,new da(p,u))}Jn.Ma="timingevent";function js(u,p){de.call(this,Jn.Ma,u),this.size=p}j(js,de);function Pn(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},p)}function Qi(){this.g=!0}Qi.prototype.xa=function(){this.g=!1};function Xi(u,p,_,w,U,q){u.info(function(){if(u.g)if(q)for(var ie="",ze=q.split("&"),yt=0;yt<ze.length;yt++){var Oe=ze[yt].split("=");if(1<Oe.length){var It=Oe[0];Oe=Oe[1];var ut=It.split("_");ie=2<=ut.length&&ut[1]=="type"?ie+(It+"="+Oe+"&"):ie+(It+"=redacted&")}}else ie=null;else ie=q;return"XMLHTTP REQ ("+w+") [attempt "+U+"]: "+p+`
`+_+`
`+ie})}function zs(u,p,_,w,U,q,ie){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+U+"]: "+p+`
`+_+`
`+q+" "+ie})}function kn(u,p,_,w){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+mh(u,_)+(w?" "+w:"")})}function fa(u,p){u.info(function(){return"TIMEOUT: "+p})}Qi.prototype.info=function(){};function mh(u,p){if(!u.g)return p;if(!p)return null;try{var _=JSON.parse(p);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var w=_[u];if(!(2>w.length)){var U=w[1];if(Array.isArray(U)&&!(1>U.length)){var q=U[0];if(q!="noop"&&q!="stop"&&q!="close")for(var ie=1;ie<U.length;ie++)U[ie]=""}}}}return aa(_)}catch{return p}}var Bs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Vl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Nn;function Ji(){}j(Ji,Gi),Ji.prototype.g=function(){return new XMLHttpRequest},Ji.prototype.i=function(){return{}},Nn=new Ji;function xn(u,p,_,w){this.j=u,this.i=p,this.l=_,this.R=w||1,this.U=new Hi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new bl}function bl(){this.i=null,this.g="",this.h=!1}var pa={},$s={};function qs(u,p,_){u.L=1,u.v=Yr(ln(p)),u.m=_,u.P=!0,ma(u,null)}function ma(u,p){u.F=Date.now(),qe(u),u.A=ln(u.v);var _=u.A,w=u.R;Array.isArray(w)||(w=[String(w)]),ei(_.i,"t",w),u.C=0,_=u.j.J,u.h=new bl,u.g=Zl(u.j,_?p:null,!u.m),0<u.O&&(u.M=new Wi(I(u.Y,u,u.g),u.O)),p=u.U,_=u.g,w=u.ca;var U="readystatechange";Array.isArray(U)||(U&&(sa[0]=U.toString()),U=sa);for(var q=0;q<U.length;q++){var ie=ea(_,U[q],w||p.handleEvent,!1,p.h||p);if(!ie)break;p.g[ie.key]=ie}p=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),Tr(),Xi(u.i,u.u,u.A,u.l,u.R,u.m)}xn.prototype.ca=function(u){u=u.target;const p=this.M;p&&Kt(u)==3?p.j():this.Y(u)},xn.prototype.Y=function(u){try{if(u==this.g)e:{const ut=Kt(this.g);var p=this.g.Ba();const _n=this.g.Z();if(!(3>ut)&&(ut!=3||this.g&&(this.h.h||this.g.oa()||wa(this.g)))){this.J||ut!=4||p==7||(p==8||0>=_n?Tr(3):Tr(2)),Yi(this);var _=this.g.Z();this.X=_;t:if(Ll(this)){var w=wa(this.g);u="";var U=w.length,q=Kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gn(this),Kr(this);var ie="";break t}this.h.i=new f.TextDecoder}for(p=0;p<U;p++)this.h.h=!0,u+=this.h.i.decode(w[p],{stream:!(q&&p==U-1)});w.length=0,this.h.g+=u,this.C=0,ie=this.h.g}else ie=this.g.oa();if(this.o=_==200,zs(this.i,this.u,this.A,this.l,this.R,ut,_),this.o){if(this.T&&!this.K){t:{if(this.g){var ze,yt=this.g;if((ze=yt.g?yt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!se(ze)){var Oe=ze;break t}}Oe=null}if(_=Oe)kn(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ga(this,_);else{this.o=!1,this.s=3,rt(12),gn(this),Kr(this);break e}}if(this.P){_=!0;let cn;for(;!this.J&&this.C<ie.length;)if(cn=gh(this,ie),cn==$s){ut==4&&(this.s=4,rt(14),_=!1),kn(this.i,this.l,null,"[Incomplete Response]");break}else if(cn==pa){this.s=4,rt(15),kn(this.i,this.l,ie,"[Invalid Chunk]"),_=!1;break}else kn(this.i,this.l,cn,null),ga(this,cn);if(Ll(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ut!=4||ie.length!=0||this.h.h||(this.s=1,rt(16),_=!1),this.o=this.o&&_,!_)kn(this.i,this.l,ie,"[Invalid Chunked Response]"),gn(this),Kr(this);else if(0<ie.length&&!this.W){this.W=!0;var It=this.j;It.g==this&&It.ba&&!It.M&&(It.j.info("Great, no buffering proxy detected. Bytes received: "+ie.length),Ia(It),It.M=!0,rt(11))}}else kn(this.i,this.l,ie,null),ga(this,ie);ut==4&&gn(this),this.o&&!this.J&&(ut==4?to(this.j,this):(this.o=!1,qe(this)))}else Xs(this.g),_==400&&0<ie.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),gn(this),Kr(this)}}}catch{}finally{}};function Ll(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function gh(u,p){var _=u.C,w=p.indexOf(`
`,_);return w==-1?$s:(_=Number(p.substring(_,w)),isNaN(_)?pa:(w+=1,w+_>p.length?$s:(p=p.slice(w,w+_),u.C=w+_,p)))}xn.prototype.cancel=function(){this.J=!0,gn(this)};function qe(u){u.S=Date.now()+u.I,Ml(u,u.I)}function Ml(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Pn(I(u.ba,u),p)}function Yi(u){u.B&&(f.clearTimeout(u.B),u.B=null)}xn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(fa(this.i,this.A),this.L!=2&&(Tr(),rt(17)),gn(this),this.s=2,Kr(this)):Ml(this,this.S-u)};function Kr(u){u.j.G==0||u.J||to(u.j,u)}function gn(u){Yi(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,oa(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function ga(u,p){try{var _=u.j;if(_.G!=0&&(_.g==u||$t(_.h,u))){if(!u.K&&$t(_.h,u)&&_.G==3){try{var w=_.Da.g.parse(p)}catch{w=null}if(Array.isArray(w)&&w.length==3){var U=w;if(U[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)eo(_),Ln(_);else break e;Zs(_),rt(18)}}else _.za=U[1],0<_.za-_.T&&37500>U[2]&&_.F&&_.v==0&&!_.C&&(_.C=Pn(I(_.Za,_),6e3));if(1>=Fl(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Cr(_,11)}else if((u.K||_.g==u)&&eo(_),!se(p))for(U=_.Da.g.parse(p),p=0;p<U.length;p++){let Oe=U[p];if(_.T=Oe[0],Oe=Oe[1],_.G==2)if(Oe[0]=="c"){_.K=Oe[1],_.ia=Oe[2];const It=Oe[3];It!=null&&(_.la=It,_.j.info("VER="+_.la));const ut=Oe[4];ut!=null&&(_.Aa=ut,_.j.info("SVER="+_.Aa));const _n=Oe[5];_n!=null&&typeof _n=="number"&&0<_n&&(w=1.5*_n,_.L=w,_.j.info("backChannelRequestTimeoutMs_="+w)),w=_;const cn=u.g;if(cn){const ss=cn.g?cn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ss){var q=w.h;q.g||ss.indexOf("spdy")==-1&&ss.indexOf("quic")==-1&&ss.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(ya(q,q.h),q.h=null))}if(w.D){const ro=cn.g?cn.g.getResponseHeader("X-HTTP-Session-Id"):null;ro&&(w.ya=ro,Be(w.I,w.D,ro))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),w=_;var ie=u;if(w.qa=Yl(w,w.J?w.ia:null,w.W),ie.K){jl(w.h,ie);var ze=ie,yt=w.L;yt&&(ze.I=yt),ze.B&&(Yi(ze),qe(ze)),w.g=ie}else is(w);0<_.i.length&&tr(_)}else Oe[0]!="stop"&&Oe[0]!="close"||Cr(_,7);else _.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?Cr(_,7):kt(_):Oe[0]!="noop"&&_.l&&_.l.ta(Oe),_.v=0)}}Tr(4)}catch{}}var Ul=class{constructor(u,p){this.g=u,this.map=p}};function Zi(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function an(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Fl(u){return u.h?1:u.g?u.g.size:0}function $t(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function ya(u,p){u.g?u.g.add(p):u.h=p}function jl(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}Zi.prototype.cancel=function(){if(this.i=zl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function zl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const _ of u.g.values())p=p.concat(_.D);return p}return $(u.i)}function Ws(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(m(u)){for(var p=[],_=u.length,w=0;w<_;w++)p.push(u[w]);return p}p=[],_=0;for(w in u)p[_++]=u[w];return p}function Hs(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(m(u)||typeof u=="string"){var p=[];u=u.length;for(var _=0;_<u;_++)p.push(_);return p}p=[],_=0;for(const w in u)p[_++]=w;return p}}}function Qr(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(m(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var _=Hs(u),w=Ws(u),U=w.length,q=0;q<U;q++)p.call(void 0,w[q],_&&_[q],u)}var es=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yh(u,p){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var w=u[_].indexOf("="),U=null;if(0<=w){var q=u[_].substring(0,w);U=u[_].substring(w+1)}else q=u[_];p(q,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function Ir(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Ir){this.h=u.h,ts(this,u.j),this.o=u.o,this.g=u.g,Xr(this,u.s),this.l=u.l;var p=u.i,_=new Yn;_.i=p.i,p.g&&(_.g=new Map(p.g),_.h=p.h),Jr(this,_),this.m=u.m}else u&&(p=String(u).match(es))?(this.h=!1,ts(this,p[1]||"",!0),this.o=xe(p[2]||""),this.g=xe(p[3]||"",!0),Xr(this,p[4]),this.l=xe(p[5]||"",!0),Jr(this,p[6]||"",!0),this.m=xe(p[7]||"")):(this.h=!1,this.i=new Yn(null,this.h))}Ir.prototype.toString=function(){var u=[],p=this.j;p&&u.push(Zr(p,Gs,!0),":");var _=this.g;return(_||p=="file")&&(u.push("//"),(p=this.o)&&u.push(Zr(p,Gs,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(Zr(_,_.charAt(0)=="/"?ql:$l,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",Zr(_,_a)),u.join("")};function ln(u){return new Ir(u)}function ts(u,p,_){u.j=_?xe(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function Xr(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function Jr(u,p,_){p instanceof Yn?(u.i=p,Zn(u.i,u.h)):(_||(p=Zr(p,Wl)),u.i=new Yn(p,u.h))}function Be(u,p,_){u.i.set(p,_)}function Yr(u){return Be(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function xe(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Zr(u,p,_){return typeof u=="string"?(u=encodeURI(u).replace(p,Bl),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Bl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Gs=/[#\/\?@]/g,$l=/[#\?:]/g,ql=/[#\?]/g,Wl=/[#\?@]/g,_a=/#/g;function Yn(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function Pt(u){u.g||(u.g=new Map,u.h=0,u.i&&yh(u.i,function(p,_){u.add(decodeURIComponent(p.replace(/\+/g," ")),_)}))}n=Yn.prototype,n.add=function(u,p){Pt(this),this.i=null,u=yn(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(p),this.h+=1,this};function Dn(u,p){Pt(u),p=yn(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function On(u,p){return Pt(u),p=yn(u,p),u.g.has(p)}n.forEach=function(u,p){Pt(this),this.g.forEach(function(_,w){_.forEach(function(U){u.call(p,U,w,this)},this)},this)},n.na=function(){Pt(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),_=[];for(let w=0;w<p.length;w++){const U=u[w];for(let q=0;q<U.length;q++)_.push(p[w])}return _},n.V=function(u){Pt(this);let p=[];if(typeof u=="string")On(this,u)&&(p=p.concat(this.g.get(yn(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)p=p.concat(u[_])}return p},n.set=function(u,p){return Pt(this),this.i=null,u=yn(this,u),On(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},n.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function ei(u,p,_){Dn(u,p),0<_.length&&(u.i=null,u.g.set(yn(u,p),$(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var _=0;_<p.length;_++){var w=p[_];const q=encodeURIComponent(String(w)),ie=this.V(w);for(w=0;w<ie.length;w++){var U=q;ie[w]!==""&&(U+="="+encodeURIComponent(String(ie[w]))),u.push(U)}}return this.i=u.join("&")};function yn(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function Zn(u,p){p&&!u.j&&(Pt(u),u.i=null,u.g.forEach(function(_,w){var U=w.toLowerCase();w!=U&&(Dn(this,w),ei(this,U,_))},u)),u.j=p}function _h(u,p){const _=new Qi;if(f.Image){const w=new Image;w.onload=V(Gt,_,"TestLoadImage: loaded",!0,p,w),w.onerror=V(Gt,_,"TestLoadImage: error",!1,p,w),w.onabort=V(Gt,_,"TestLoadImage: abort",!1,p,w),w.ontimeout=V(Gt,_,"TestLoadImage: timeout",!1,p,w),f.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else p(!1)}function Hl(u,p){const _=new Qi,w=new AbortController,U=setTimeout(()=>{w.abort(),Gt(_,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:w.signal}).then(q=>{clearTimeout(U),q.ok?Gt(_,"TestPingServer: ok",!0,p):Gt(_,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(U),Gt(_,"TestPingServer: error",!1,p)})}function Gt(u,p,_,w,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),w(_)}catch{}}function vh(){this.g=new ua}function Gl(u,p,_){const w=_||"";try{Qr(u,function(U,q){let ie=U;y(U)&&(ie=aa(U)),p.push(w+q+"="+encodeURIComponent(ie))})}catch(U){throw p.push(w+"type="+encodeURIComponent("_badmap")),U}}function Sr(u){this.l=u.Ub||null,this.j=u.eb||!1}j(Sr,Gi),Sr.prototype.g=function(){return new ns(this.l,this.j)},Sr.prototype.i=(function(u){return function(){return u}})({});function ns(u,p){mt.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}j(ns,mt),n=ns.prototype,n.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,bn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||f).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vn(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,bn(this)),this.g&&(this.readyState=3,bn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Kl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Kl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?Vn(this):bn(this),this.readyState==3&&Kl(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,Vn(this))},n.Qa=function(u){this.g&&(this.response=u,Vn(this))},n.ga=function(){this.g&&Vn(this)};function Vn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,bn(u)}n.setRequestHeader=function(u,p){this.u.append(u,p)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var _=p.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=p.next();return u.join(`\r
`)};function bn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(ns.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Ar(u){let p="";return _e(u,function(_,w){p+=w,p+=":",p+=_,p+=`\r
`}),p}function ti(u,p,_){e:{for(w in _){var w=!1;break e}w=!0}w||(_=Ar(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):Be(u,p,_))}function Xe(u){mt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}j(Xe,mt);var Eh=/^https?$/i,va=["POST","PUT"];n=Xe.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,p,_,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Nn.g(),this.v=this.o?Ms(this.o):Ms(Nn),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(q){rs(this,q);return}if(u=_||"",_=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var U in w)_.set(U,w[U]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const q of w.keys())_.set(q,w.get(q));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(_.keys()).find(q=>q.toLowerCase()=="content-type"),U=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(va,p,void 0))||w||U||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,ie]of _)this.g.setRequestHeader(q,ie);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Qs(this),this.u=!0,this.g.send(u),this.u=!1}catch(q){rs(this,q)}};function rs(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,Ks(u),un(u)}function Ks(u){u.A||(u.A=!0,gt(u,"complete"),gt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,gt(this,"complete"),gt(this,"abort"),un(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),un(this,!0)),Xe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ea(this):this.bb())},n.bb=function(){Ea(this)};function Ea(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Kt(u)!=4||u.Z()!=2)){if(u.u&&Kt(u)==4)ia(u.Ea,0,u);else if(gt(u,"readystatechange"),Kt(u)==4){u.h=!1;try{const ie=u.Z();e:switch(ie){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var _;if(!(_=p)){var w;if(w=ie===0){var U=String(u.D).match(es)[1]||null;!U&&f.self&&f.self.location&&(U=f.self.location.protocol.slice(0,-1)),w=!Eh.test(U?U.toLowerCase():"")}_=w}if(_)gt(u,"complete"),gt(u,"success");else{u.m=6;try{var q=2<Kt(u)?u.g.statusText:""}catch{q=""}u.l=q+" ["+u.Z()+"]",Ks(u)}}finally{un(u)}}}}function un(u,p){if(u.g){Qs(u);const _=u.g,w=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||gt(u,"ready");try{_.onreadystatechange=w}catch{}}}function Qs(u){u.I&&(f.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Kt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Kt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),la(p)}};function wa(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Xs(u){const p={};u=(u.g&&2<=Kt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(se(u[w]))continue;var _=D(u[w]);const U=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const q=p[U]||[];p[U]=q,q.push(_)}N(p,function(w){return w.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function er(u,p,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||p}function Ta(u){this.Aa=0,this.i=[],this.j=new Qi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=er("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=er("baseRetryDelayMs",5e3,u),this.cb=er("retryDelaySeedMs",1e4,u),this.Wa=er("forwardChannelMaxRetries",2,u),this.wa=er("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Zi(u&&u.concurrentRequestLimit),this.Da=new vh,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ta.prototype,n.la=8,n.G=1,n.connect=function(u,p,_,w){rt(0),this.W=u,this.H=p||{},_&&w!==void 0&&(this.H.OSID=_,this.H.OAID=w),this.F=this.X,this.I=Yl(this,null,this.W),tr(this)};function kt(u){if(Js(u),u.G==3){var p=u.U++,_=ln(u.I);if(Be(_,"SID",u.K),Be(_,"RID",p),Be(_,"TYPE","terminate"),Rr(u,_),p=new xn(u,u.j,p),p.L=2,p.v=Yr(ln(_)),_=!1,f.navigator&&f.navigator.sendBeacon)try{_=f.navigator.sendBeacon(p.v.toString(),"")}catch{}!_&&f.Image&&(new Image().src=p.v,_=!0),_||(p.g=Zl(p.j,null),p.g.ea(p.v)),p.F=Date.now(),qe(p)}Jl(u)}function Ln(u){u.g&&(Ia(u),u.g.cancel(),u.g=null)}function Js(u){Ln(u),u.u&&(f.clearTimeout(u.u),u.u=null),eo(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function tr(u){if(!an(u.h)&&!u.s){u.s=!0;var p=u.Ga;Me||re(),W||(Me(),W=!0),te.add(p,u),u.B=0}}function wh(u,p){return Fl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Pn(I(u.Ga,u,p),Xl(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const U=new xn(this,this.j,u);let q=this.o;if(this.S&&(q?(q=S(q),k(q,this.S)):q=this.S),this.m!==null||this.O||(U.H=q,q=null),this.P)e:{for(var p=0,_=0;_<this.i.length;_++){t:{var w=this.i[_];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(p+=w,4096<p){p=_;break e}if(p===4096||_===this.i.length-1){p=_+1;break e}}p=1e3}else p=1e3;p=ni(this,U,p),_=ln(this.I),Be(_,"RID",u),Be(_,"CVER",22),this.D&&Be(_,"X-HTTP-Session-Id",this.D),Rr(this,_),q&&(this.O?p="headers="+encodeURIComponent(String(Ar(q)))+"&"+p:this.m&&ti(_,this.m,q)),ya(this.h,U),this.Ua&&Be(_,"TYPE","init"),this.P?(Be(_,"$req",p),Be(_,"SID","null"),U.T=!0,qs(U,_,null)):qs(U,_,p),this.G=2}}else this.G==3&&(u?Ys(this,u):this.i.length==0||an(this.h)||Ys(this))};function Ys(u,p){var _;p?_=p.l:_=u.U++;const w=ln(u.I);Be(w,"SID",u.K),Be(w,"RID",_),Be(w,"AID",u.T),Rr(u,w),u.m&&u.o&&ti(w,u.m,u.o),_=new xn(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),p&&(u.i=p.D.concat(u.i)),p=ni(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),ya(u.h,_),qs(_,w,p)}function Rr(u,p){u.H&&_e(u.H,function(_,w){Be(p,w,_)}),u.l&&Qr({},function(_,w){Be(p,w,_)})}function ni(u,p,_){_=Math.min(u.i.length,_);var w=u.l?I(u.l.Na,u.l,u):null;e:{var U=u.i;let q=-1;for(;;){const ie=["count="+_];q==-1?0<_?(q=U[0].g,ie.push("ofs="+q)):q=0:ie.push("ofs="+q);let ze=!0;for(let yt=0;yt<_;yt++){let Oe=U[yt].g;const It=U[yt].map;if(Oe-=q,0>Oe)q=Math.max(0,U[yt].g-100),ze=!1;else try{Gl(It,ie,"req"+Oe+"_")}catch{w&&w(It)}}if(ze){w=ie.join("&");break e}}}return u=u.i.splice(0,_),p.D=u,w}function is(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;Me||re(),W||(Me(),W=!0),te.add(p,u),u.v=0}}function Zs(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Pn(I(u.Fa,u),Xl(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,Ql(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Pn(I(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,rt(10),Ln(this),Ql(this))};function Ia(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function Ql(u){u.g=new xn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=ln(u.qa);Be(p,"RID","rpc"),Be(p,"SID",u.K),Be(p,"AID",u.T),Be(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&Be(p,"TO",u.ja),Be(p,"TYPE","xmlhttp"),Rr(u,p),u.m&&u.o&&ti(p,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=Yr(ln(p)),_.m=null,_.P=!0,ma(_,u)}n.Za=function(){this.C!=null&&(this.C=null,Ln(this),Zs(this),rt(19))};function eo(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function to(u,p){var _=null;if(u.g==p){eo(u),Ia(u),u.g=null;var w=2}else if($t(u.h,p))_=p.D,jl(u.h,p),w=1;else return;if(u.G!=0){if(p.o)if(w==1){_=p.m?p.m.length:0,p=Date.now()-p.F;var U=u.B;w=Ki(),gt(w,new js(w,_)),tr(u)}else is(u);else if(U=p.s,U==3||U==0&&0<p.X||!(w==1&&wh(u,p)||w==2&&Zs(u)))switch(_&&0<_.length&&(p=u.h,p.i=p.i.concat(_)),U){case 1:Cr(u,5);break;case 4:Cr(u,10);break;case 3:Cr(u,6);break;default:Cr(u,2)}}}function Xl(u,p){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*p}function Cr(u,p){if(u.j.info("Error code "+p),p==2){var _=I(u.fb,u),w=u.Xa;const U=!w;w=new Ir(w||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||ts(w,"https"),Yr(w),U?_h(w.toString(),_):Hl(w.toString(),_)}else rt(2);u.G=0,u.l&&u.l.sa(p),Jl(u),Js(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function Jl(u){if(u.G=0,u.ka=[],u.l){const p=zl(u.h);(p.length!=0||u.i.length!=0)&&(L(u.ka,p),L(u.ka,u.i),u.h.i.length=0,$(u.i),u.i.length=0),u.l.ra()}}function Yl(u,p,_){var w=_ instanceof Ir?ln(_):new Ir(_);if(w.g!="")p&&(w.g=p+"."+w.g),Xr(w,w.s);else{var U=f.location;w=U.protocol,p=p?p+"."+U.hostname:U.hostname,U=+U.port;var q=new Ir(null);w&&ts(q,w),p&&(q.g=p),U&&Xr(q,U),_&&(q.l=_),w=q}return _=u.D,p=u.ya,_&&p&&Be(w,_,p),Be(w,"VER",u.la),Rr(u,w),w}function Zl(u,p,_){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new Xe(new Sr({eb:_})):new Xe(u.pa),p.Ha(u.J),p}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Sa(){}n=Sa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function no(){}no.prototype.g=function(u,p){return new qt(u,p)};function qt(u,p){mt.call(this),this.g=new Ta(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!se(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!se(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new nr(this)}j(qt,mt),qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qt.prototype.close=function(){kt(this.g)},qt.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=aa(u),u=_);p.i.push(new Ul(p.Ya++,u)),p.G==3&&tr(p)},qt.prototype.N=function(){this.g.l=null,delete this.j,kt(this.g),delete this.g,qt.aa.N.call(this)};function eu(u){Xn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const _ in p){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}j(eu,Xn);function tu(){Fs.call(this),this.status=1}j(tu,Fs);function nr(u){this.g=u}j(nr,Sa),nr.prototype.ua=function(){gt(this.g,"a")},nr.prototype.ta=function(u){gt(this.g,new eu(u))},nr.prototype.sa=function(u){gt(this.g,new tu)},nr.prototype.ra=function(){gt(this.g,"b")},no.prototype.createWebChannel=no.prototype.g,qt.prototype.send=qt.prototype.o,qt.prototype.open=qt.prototype.m,qt.prototype.close=qt.prototype.close,uE=function(){return new no},lE=function(){return Ki()},aE=Jn,_f={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Bs.NO_ERROR=0,Bs.TIMEOUT=8,Bs.HTTP_ERROR=6,ac=Bs,Vl.COMPLETE="complete",oE=Vl,Us.EventType=mn,mn.OPEN="a",mn.CLOSE="b",mn.ERROR="c",mn.MESSAGE="d",mt.prototype.listen=mt.prototype.K,Qa=Us,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,sE=Xe}).apply(typeof Xu<"u"?Xu:typeof self<"u"?self:typeof window<"u"?window:{});const By="@firebase/firestore",$y="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Wo="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs=new Gf("@firebase/firestore");function Ao(){return Rs.logLevel}function ue(n,...e){if(Rs.logLevel<=ke.DEBUG){const t=e.map(op);Rs.debug(`Firestore (${Wo}): ${n}`,...t)}}function qr(n,...e){if(Rs.logLevel<=ke.ERROR){const t=e.map(op);Rs.error(`Firestore (${Wo}): ${n}`,...t)}}function xi(n,...e){if(Rs.logLevel<=ke.WARN){const t=e.map(op);Rs.warn(`Firestore (${Wo}): ${n}`,...t)}}function op(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ve(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,cE(n,i,t)}function cE(n,e,t){let i=`FIRESTORE (${Wo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw qr(i),new Error(i)}function je(n,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,n||cE(e,o,i)}function Se(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ae extends Kn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(jt.UNAUTHENTICATED)))}shutdown(){}}class nR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class rR{constructor(e){this.t=e,this.currentUser=jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){je(this.o===void 0,42304);let i=this.i;const o=m=>this.i!==i?(i=this.i,t(m)):Promise.resolve();let l=new jr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new jr,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const m=l;e.enqueueRetryable((async()=>{await m.promise,await o(this.currentUser)}))},f=m=>{ue("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((m=>f(m))),setTimeout((()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?f(m):(ue("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new jr)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(ue("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(je(typeof i.accessToken=="string",31837,{l:i}),new hE(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return je(e===null||typeof e=="string",2055,{h:e}),new jt(e)}}class iR{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=jt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class sR{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new iR(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(jt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class qy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oR{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,nn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){je(this.o===void 0,3512);const i=l=>{l.error!=null&&ue("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,ue("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const o=l=>{ue("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):ue("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new qy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(je(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new qy(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aR(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */function dE(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=aR(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%62))}return i}}function Ce(n,e){return n<e?-1:n>e?1:0}function vf(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=n.codePointAt(t),o=e.codePointAt(t);if(i!==o){if(i<128&&o<128)return Ce(i,o);{const l=dE(),h=lR(l.encode(Wy(n,t)),l.encode(Wy(e,t)));return h!==0?h:Ce(i,o)}}t+=i>65535?2:1}return Ce(n.length,e.length)}function Wy(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function lR(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Ce(n[t],e[t]);return Ce(n.length,e.length)}function bo(n,e,t){return n.length===e.length&&n.every(((i,o)=>t(i,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy="__name__";class ar{constructor(e,t,i){t===void 0?t=0:t>e.length&&ve(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&ve(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return ar.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ar?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=ar.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Ce(e.length,t.length)}static compareSegments(e,t){const i=ar.isNumericId(e),o=ar.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?ar.extractNumericId(e).compare(ar.extractNumericId(t)):vf(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Pi.fromString(e.substring(4,e.length-2))}}class He extends ar{construct(e,t,i){return new He(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ae(G.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new He(t)}static emptyPath(){return new He([])}}const uR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ot extends ar{construct(e,t,i){return new Ot(e,t,i)}static isValidIdentifier(e){return uR.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ot.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Hy}static keyField(){return new Ot([Hy])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new ae(G.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new ae(G.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[o+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new ae(G.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=m,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(i+=f,o++):(l(),o++)}if(l(),h)throw new ae(G.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ot(t)}static emptyPath(){return new Ot([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.path=e}static fromPath(e){return new me(He.fromString(e))}static fromName(e){return new me(He.fromString(e).popFirst(5))}static empty(){return new me(He.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&He.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return He.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new me(new He(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(n,e,t){if(!t)throw new ae(G.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function cR(n,e,t,i){if(e===!0&&i===!0)throw new ae(G.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Gy(n){if(!me.isDocumentKey(n))throw new ae(G.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ky(n){if(me.isDocumentKey(n))throw new ae(G.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function pE(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Gc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ve(12329,{type:typeof n})}function pr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ae(G.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Gc(n);throw new ae(G.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function ft(n,e){const t={typeString:n};return e&&(t.value=e),t}function Rl(n,e){if(!pE(n))throw new ae(G.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const h=n[i];if(o&&typeof h!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${i}' field to equal '${l.value}'`;break}}if(t)throw new ae(G.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy=-62135596800,Xy=1e6;class Qe{static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*Xy);return new Qe(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ae(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ae(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Qy)throw new ae(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ae(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Xy}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Qe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Rl(e,Qe._jsonSchema))return new Qe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Qy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Qe._jsonSchemaVersion="firestore/timestamp/1.0",Qe._jsonSchema={type:ft("string",Qe._jsonSchemaVersion),seconds:ft("number"),nanoseconds:ft("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{static fromTimestamp(e){return new Ie(e)}static min(){return new Ie(new Qe(0,0))}static max(){return new Ie(new Qe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ul=-1;function hR(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Ie.fromTimestamp(i===1e9?new Qe(t+1,0):new Qe(t,i));return new Di(o,me.empty(),e)}function dR(n){return new Di(n.readTime,n.key,ul)}class Di{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Di(Ie.min(),me.empty(),ul)}static max(){return new Di(Ie.max(),me.empty(),ul)}}function fR(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=me.comparator(n.documentKey,e.documentKey),t!==0?t:Ce(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class mR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ho(n){if(n.code!==G.FAILED_PRECONDITION||n.message!==pR)throw n;ue("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ve(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new K(((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof K?t:K.resolve(t)}catch(t){return K.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):K.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):K.reject(t)}static resolve(e){return new K(((t,i)=>{t(e)}))}static reject(e){return new K(((t,i)=>{i(e)}))}static waitFor(e){return new K(((t,i)=>{let o=0,l=0,h=!1;e.forEach((f=>{++o,f.next((()=>{++l,h&&l===o&&t()}),(m=>i(m)))})),h=!0,l===o&&t()}))}static or(e){let t=K.resolve(!1);for(const i of e)t=t.next((o=>o?K.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,l)=>{i.push(t.call(this,o,l))})),this.waitFor(i)}static mapArray(e,t){return new K(((i,o)=>{const l=e.length,h=new Array(l);let f=0;for(let m=0;m<l;m++){const y=m;t(e[y]).next((v=>{h[y]=v,++f,f===l&&i(h)}),(v=>o(v)))}}))}static doWhile(e,t){return new K(((i,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):i()};l()}))}}function gR(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Go(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Kc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this._e(i),this.ae=i=>t.writeSequenceNumber(i))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Kc.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp=-1;function Qc(n){return n==null}function Tc(n){return n===0&&1/n==-1/0}function yR(n){return typeof n=="number"&&Number.isInteger(n)&&!Tc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE="";function _R(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Jy(e)),e=vR(n.get(t),e);return Jy(e)}function vR(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case mE:t+="";break;default:t+=l}}return t}function Jy(n){return n+mE+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yy(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function zi(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function gE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,t){this.comparator=e,this.root=t||Dt.EMPTY}insert(e,t){return new tt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Dt.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Dt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ju(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ju(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ju(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ju(this.root,e,this.comparator,!0)}}class Ju{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Dt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Dt.RED,this.left=o??Dt.EMPTY,this.right=l??Dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Dt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Dt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ve(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ve(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ve(27949);return e+(this.isRed()?0:1)}}Dt.EMPTY=null,Dt.RED=!0,Dt.BLACK=!1;Dt.EMPTY=new class{constructor(){this.size=0}get key(){throw ve(57766)}get value(){throw ve(16141)}get color(){throw ve(16727)}get left(){throw ve(29726)}get right(){throw ve(36894)}copy(e,t,i,o,l){return this}insert(e,t,i){return new Dt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Zy(this.data.getIterator())}getIteratorFrom(e){return new Zy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof Et)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Et(this.comparator);return t.data=e,t}}class Zy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.fields=e,e.sort(Ot.comparator)}static empty(){return new pn([])}unionWith(e){let t=new Et(Ot.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new pn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return bo(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class yE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new yE("Invalid base64 string: "+l):l}})(e);return new Vt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new Vt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Vt.EMPTY_BYTE_STRING=new Vt("");const ER=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Oi(n){if(je(!!n,39018),typeof n=="string"){let e=0;const t=ER.exec(n);if(je(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:st(n.seconds),nanos:st(n.nanos)}}function st(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Vi(n){return typeof n=="string"?Vt.fromBase64String(n):Vt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E="server_timestamp",vE="__type__",EE="__previous_value__",wE="__local_write_time__";function up(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[vE])===null||t===void 0?void 0:t.stringValue)===_E}function Xc(n){const e=n.mapValue.fields[EE];return up(e)?Xc(e):e}function cl(n){const e=Oi(n.mapValue.fields[wE].timestampValue);return new Qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e,t,i,o,l,h,f,m,y,v){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=m,this.useFetchStreams=y,this.isUsingEmulator=v}}const Ic="(default)";class hl{constructor(e,t){this.projectId=e,this.database=t||Ic}static empty(){return new hl("","")}get isDefaultDatabase(){return this.database===Ic}isEqual(e){return e instanceof hl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE="__type__",TR="__max__",Yu={mapValue:{}},IE="__vector__",Sc="value";function bi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?up(n)?4:SR(n)?9007199254740991:IR(n)?10:11:ve(28295,{value:n})}function mr(n,e){if(n===e)return!0;const t=bi(n);if(t!==bi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return cl(n).isEqual(cl(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Oi(o.timestampValue),f=Oi(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,l){return Vi(o.bytesValue).isEqual(Vi(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,l){return st(o.geoPointValue.latitude)===st(l.geoPointValue.latitude)&&st(o.geoPointValue.longitude)===st(l.geoPointValue.longitude)})(n,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return st(o.integerValue)===st(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=st(o.doubleValue),f=st(l.doubleValue);return h===f?Tc(h)===Tc(f):isNaN(h)&&isNaN(f)}return!1})(n,e);case 9:return bo(n.arrayValue.values||[],e.arrayValue.values||[],mr);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(Yy(h)!==Yy(f))return!1;for(const m in h)if(h.hasOwnProperty(m)&&(f[m]===void 0||!mr(h[m],f[m])))return!1;return!0})(n,e);default:return ve(52216,{left:n})}}function dl(n,e){return(n.values||[]).find((t=>mr(t,e)))!==void 0}function Lo(n,e){if(n===e)return 0;const t=bi(n),i=bi(e);if(t!==i)return Ce(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ce(n.booleanValue,e.booleanValue);case 2:return(function(l,h){const f=st(l.integerValue||l.doubleValue),m=st(h.integerValue||h.doubleValue);return f<m?-1:f>m?1:f===m?0:isNaN(f)?isNaN(m)?0:-1:1})(n,e);case 3:return e_(n.timestampValue,e.timestampValue);case 4:return e_(cl(n),cl(e));case 5:return vf(n.stringValue,e.stringValue);case 6:return(function(l,h){const f=Vi(l),m=Vi(h);return f.compareTo(m)})(n.bytesValue,e.bytesValue);case 7:return(function(l,h){const f=l.split("/"),m=h.split("/");for(let y=0;y<f.length&&y<m.length;y++){const v=Ce(f[y],m[y]);if(v!==0)return v}return Ce(f.length,m.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,h){const f=Ce(st(l.latitude),st(h.latitude));return f!==0?f:Ce(st(l.longitude),st(h.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return t_(n.arrayValue,e.arrayValue);case 10:return(function(l,h){var f,m,y,v;const T=l.fields||{},I=h.fields||{},V=(f=T[Sc])===null||f===void 0?void 0:f.arrayValue,j=(m=I[Sc])===null||m===void 0?void 0:m.arrayValue,$=Ce(((y=V==null?void 0:V.values)===null||y===void 0?void 0:y.length)||0,((v=j==null?void 0:j.values)===null||v===void 0?void 0:v.length)||0);return $!==0?$:t_(V,j)})(n.mapValue,e.mapValue);case 11:return(function(l,h){if(l===Yu.mapValue&&h===Yu.mapValue)return 0;if(l===Yu.mapValue)return 1;if(h===Yu.mapValue)return-1;const f=l.fields||{},m=Object.keys(f),y=h.fields||{},v=Object.keys(y);m.sort(),v.sort();for(let T=0;T<m.length&&T<v.length;++T){const I=vf(m[T],v[T]);if(I!==0)return I;const V=Lo(f[m[T]],y[v[T]]);if(V!==0)return V}return Ce(m.length,v.length)})(n.mapValue,e.mapValue);default:throw ve(23264,{le:t})}}function e_(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ce(n,e);const t=Oi(n),i=Oi(e),o=Ce(t.seconds,i.seconds);return o!==0?o:Ce(t.nanos,i.nanos)}function t_(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=Lo(t[o],i[o]);if(l)return l}return Ce(t.length,i.length)}function Mo(n){return Ef(n)}function Ef(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=Oi(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Vi(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return me.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=Ef(l);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of i)l?l=!1:o+=",",o+=`${h}:${Ef(t.fields[h])}`;return o+"}"})(n.mapValue):ve(61005,{value:n})}function lc(n){switch(bi(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Xc(n);return e?16+lc(e):16;case 5:return 2*n.stringValue.length;case 6:return Vi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,l)=>o+lc(l)),0)})(n.arrayValue);case 10:case 11:return(function(i){let o=0;return zi(i.fields,((l,h)=>{o+=l.length+lc(h)})),o})(n.mapValue);default:throw ve(13486,{value:n})}}function n_(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function wf(n){return!!n&&"integerValue"in n}function cp(n){return!!n&&"arrayValue"in n}function r_(n){return!!n&&"nullValue"in n}function i_(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function uc(n){return!!n&&"mapValue"in n}function IR(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[TE])===null||t===void 0?void 0:t.stringValue)===IE}function tl(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return zi(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=tl(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=tl(n.arrayValue.values[t]);return e}return Object.assign({},n)}function SR(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===TR}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.value=e}static empty(){return new rn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!uc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=tl(t)}setAll(e){let t=Ot.emptyPath(),i={},o=[];e.forEach(((h,f)=>{if(!t.isImmediateParentOf(f)){const m=this.getFieldsMap(t);this.applyChanges(m,i,o),i={},o=[],t=f.popLast()}h?i[f.lastSegment()]=tl(h):o.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());uc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return mr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];uc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){zi(t,((o,l)=>e[o]=l));for(const o of i)delete e[o]}clone(){return new rn(tl(this.value))}}function SE(n){const e=[];return zi(n.fields,((t,i)=>{const o=new Ot([t]);if(uc(i)){const l=SE(i.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new pn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t,i,o,l,h,f){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new zt(e,0,Ie.min(),Ie.min(),Ie.min(),rn.empty(),0)}static newFoundDocument(e,t,i,o){return new zt(e,1,t,Ie.min(),i,o,0)}static newNoDocument(e,t){return new zt(e,2,t,Ie.min(),Ie.min(),rn.empty(),0)}static newUnknownDocument(e,t){return new zt(e,3,t,Ie.min(),Ie.min(),rn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ac{constructor(e,t){this.position=e,this.inclusive=t}}function s_(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],h=n.position[o];if(l.field.isKeyField()?i=me.comparator(me.fromName(h.referenceValue),t.key):i=Lo(h,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function o_(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!mr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class fl{constructor(e,t="asc"){this.field=e,this.dir=t}}function AR(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class AE{}class dt extends AE{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new CR(e,t,i):t==="array-contains"?new NR(e,i):t==="in"?new xR(e,i):t==="not-in"?new DR(e,i):t==="array-contains-any"?new OR(e,i):new dt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new PR(e,i):new kR(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Lo(t,this.value)):t!==null&&bi(this.value)===bi(t)&&this.matchesComparison(Lo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ve(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Gn extends AE{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Gn(e,t)}matches(e){return RE(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function RE(n){return n.op==="and"}function CE(n){return RR(n)&&RE(n)}function RR(n){for(const e of n.filters)if(e instanceof Gn)return!1;return!0}function Tf(n){if(n instanceof dt)return n.field.canonicalString()+n.op.toString()+Mo(n.value);if(CE(n))return n.filters.map((e=>Tf(e))).join(",");{const e=n.filters.map((t=>Tf(t))).join(",");return`${n.op}(${e})`}}function PE(n,e){return n instanceof dt?(function(i,o){return o instanceof dt&&i.op===o.op&&i.field.isEqual(o.field)&&mr(i.value,o.value)})(n,e):n instanceof Gn?(function(i,o){return o instanceof Gn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((l,h,f)=>l&&PE(h,o.filters[f])),!0):!1})(n,e):void ve(19439)}function kE(n){return n instanceof dt?(function(t){return`${t.field.canonicalString()} ${t.op} ${Mo(t.value)}`})(n):n instanceof Gn?(function(t){return t.op.toString()+" {"+t.getFilters().map(kE).join(" ,")+"}"})(n):"Filter"}class CR extends dt{constructor(e,t,i){super(e,t,i),this.key=me.fromName(i.referenceValue)}matches(e){const t=me.comparator(e.key,this.key);return this.matchesComparison(t)}}class PR extends dt{constructor(e,t){super(e,"in",t),this.keys=NE("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class kR extends dt{constructor(e,t){super(e,"not-in",t),this.keys=NE("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function NE(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((i=>me.fromName(i.referenceValue)))}class NR extends dt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return cp(t)&&dl(t.arrayValue,this.value)}}class xR extends dt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&dl(this.value.arrayValue,t)}}class DR extends dt{constructor(e,t){super(e,"not-in",t)}matches(e){if(dl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!dl(this.value.arrayValue,t)}}class OR extends dt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!cp(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>dl(this.value.arrayValue,i)))}}/**
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
 */class VR{constructor(e,t=null,i=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.Pe=null}}function a_(n,e=null,t=[],i=[],o=null,l=null,h=null){return new VR(n,e,t,i,o,l,h)}function hp(n){const e=Se(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>Tf(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),Qc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>Mo(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>Mo(i))).join(",")),e.Pe=t}return e.Pe}function dp(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!AR(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!PE(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!o_(n.startAt,e.startAt)&&o_(n.endAt,e.endAt)}function If(n){return me.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,t=null,i=[],o=[],l=null,h="F",f=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=m,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function bR(n,e,t,i,o,l,h,f){return new Ko(n,e,t,i,o,l,h,f)}function fp(n){return new Ko(n)}function l_(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function xE(n){return n.collectionGroup!==null}function nl(n){const e=Se(n);if(e.Te===null){e.Te=[];const t=new Set;for(const l of e.explicitOrderBy)e.Te.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new Et(Ot.comparator);return h.filters.forEach((m=>{m.getFlattenedFilters().forEach((y=>{y.isInequality()&&(f=f.add(y.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Te.push(new fl(l,i))})),t.has(Ot.keyField().canonicalString())||e.Te.push(new fl(Ot.keyField(),i))}return e.Te}function ur(n){const e=Se(n);return e.Ie||(e.Ie=LR(e,nl(n))),e.Ie}function LR(n,e){if(n.limitType==="F")return a_(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new fl(o.field,l)}));const t=n.endAt?new Ac(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Ac(n.startAt.position,n.startAt.inclusive):null;return a_(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Sf(n,e){const t=n.filters.concat([e]);return new Ko(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Af(n,e,t){return new Ko(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Jc(n,e){return dp(ur(n),ur(e))&&n.limitType===e.limitType}function DE(n){return`${hp(ur(n))}|lt:${n.limitType}`}function Ro(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>kE(o))).join(", ")}]`),Qc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>Mo(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>Mo(o))).join(",")),`Target(${i})`})(ur(n))}; limitType=${n.limitType})`}function Yc(n,e){return e.isFoundDocument()&&(function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):me.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(n,e)&&(function(i,o){for(const l of nl(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0})(n,e)&&(function(i,o){return!(i.startAt&&!(function(h,f,m){const y=s_(h,f,m);return h.inclusive?y<=0:y<0})(i.startAt,nl(i),o)||i.endAt&&!(function(h,f,m){const y=s_(h,f,m);return h.inclusive?y>=0:y>0})(i.endAt,nl(i),o))})(n,e)}function MR(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function OE(n){return(e,t)=>{let i=!1;for(const o of nl(n)){const l=UR(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function UR(n,e,t){const i=n.field.isKeyField()?me.comparator(e.key,t.key):(function(l,h,f){const m=h.data.field(l),y=f.data.field(l);return m!==null&&y!==null?Lo(m,y):ve(42886)})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return ve(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){zi(this.inner,((t,i)=>{for(const[o,l]of i)e(o,l)}))}isEmpty(){return gE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR=new tt(me.comparator);function Wr(){return FR}const VE=new tt(me.comparator);function Xa(...n){let e=VE;for(const t of n)e=e.insert(t.key,t);return e}function bE(n){let e=VE;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function Ts(){return rl()}function LE(){return rl()}function rl(){return new ks((n=>n.toString()),((n,e)=>n.isEqual(e)))}const jR=new tt(me.comparator),zR=new Et(me.comparator);function Ne(...n){let e=zR;for(const t of n)e=e.add(t);return e}const BR=new Et(Ce);function $R(){return BR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Tc(e)?"-0":e}}function ME(n){return{integerValue:""+n}}function qR(n,e){return yR(e)?ME(e):pp(n,e)}/**
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
 */class Zc{constructor(){this._=void 0}}function WR(n,e,t){return n instanceof pl?(function(o,l){const h={fields:{[vE]:{stringValue:_E},[wE]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&up(l)&&(l=Xc(l)),l&&(h.fields[EE]=l),{mapValue:h}})(t,e):n instanceof ml?FE(n,e):n instanceof gl?jE(n,e):(function(o,l){const h=UE(o,l),f=u_(h)+u_(o.Ee);return wf(h)&&wf(o.Ee)?ME(f):pp(o.serializer,f)})(n,e)}function HR(n,e,t){return n instanceof ml?FE(n,e):n instanceof gl?jE(n,e):t}function UE(n,e){return n instanceof Rc?(function(i){return wf(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class pl extends Zc{}class ml extends Zc{constructor(e){super(),this.elements=e}}function FE(n,e){const t=zE(e);for(const i of n.elements)t.some((o=>mr(o,i)))||t.push(i);return{arrayValue:{values:t}}}class gl extends Zc{constructor(e){super(),this.elements=e}}function jE(n,e){let t=zE(e);for(const i of n.elements)t=t.filter((o=>!mr(o,i)));return{arrayValue:{values:t}}}class Rc extends Zc{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function u_(n){return st(n.integerValue||n.doubleValue)}function zE(n){return cp(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e,t){this.field=e,this.transform=t}}function KR(n,e){return n.field.isEqual(e.field)&&(function(i,o){return i instanceof ml&&o instanceof ml||i instanceof gl&&o instanceof gl?bo(i.elements,o.elements,mr):i instanceof Rc&&o instanceof Rc?mr(i.Ee,o.Ee):i instanceof pl&&o instanceof pl})(n.transform,e.transform)}class QR{constructor(e,t){this.version=e,this.transformResults=t}}class Hn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Hn}static exists(e){return new Hn(void 0,e)}static updateTime(e){return new Hn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function cc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class eh{}function BE(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new qE(n.key,Hn.none()):new Cl(n.key,n.data,Hn.none());{const t=n.data,i=rn.empty();let o=new Et(Ot.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?i.delete(l):i.set(l,h),o=o.add(l)}return new Bi(n.key,i,new pn(o.toArray()),Hn.none())}}function XR(n,e,t){n instanceof Cl?(function(o,l,h){const f=o.value.clone(),m=h_(o.fieldTransforms,l,h.transformResults);f.setAll(m),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()})(n,e,t):n instanceof Bi?(function(o,l,h){if(!cc(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=h_(o.fieldTransforms,l,h.transformResults),m=l.data;m.setAll($E(o)),m.setAll(f),l.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(n,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function il(n,e,t,i){return n instanceof Cl?(function(l,h,f,m){if(!cc(l.precondition,h))return f;const y=l.value.clone(),v=d_(l.fieldTransforms,m,h);return y.setAll(v),h.convertToFoundDocument(h.version,y).setHasLocalMutations(),null})(n,e,t,i):n instanceof Bi?(function(l,h,f,m){if(!cc(l.precondition,h))return f;const y=d_(l.fieldTransforms,m,h),v=h.data;return v.setAll($E(l)),v.setAll(y),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(n,e,t,i):(function(l,h,f){return cc(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f})(n,e,t)}function JR(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=UE(i.transform,o||null);l!=null&&(t===null&&(t=rn.empty()),t.set(i.field,l))}return t||null}function c_(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&bo(i,o,((l,h)=>KR(l,h)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Cl extends eh{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Bi extends eh{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function $E(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function h_(n,e,t){const i=new Map;je(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let o=0;o<t.length;o++){const l=n[o],h=l.transform,f=e.data.field(l.field);i.set(l.field,HR(h,f,t[o]))}return i}function d_(n,e,t){const i=new Map;for(const o of n){const l=o.transform,h=t.data.field(o.field);i.set(o.field,WR(l,h,e))}return i}class qE extends eh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class YR extends eh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&XR(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=il(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=il(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=LE();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const m=BE(h,f);m!==null&&i.set(o.key,m),h.isValidDocument()||h.convertToNoDocument(Ie.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ne())}isEqual(e){return this.batchId===e.batchId&&bo(this.mutations,e.mutations,((t,i)=>c_(t,i)))&&bo(this.baseMutations,e.baseMutations,((t,i)=>c_(t,i)))}}class mp{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){je(e.mutations.length===i.length,58842,{Ve:e.mutations.length,me:i.length});let o=(function(){return jR})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,i[h].version);return new mp(e,t,i,o)}}/**
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
 */class eC{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class tC{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht,Ve;function nC(n){switch(n){case G.OK:return ve(64938);case G.CANCELLED:case G.UNKNOWN:case G.DEADLINE_EXCEEDED:case G.RESOURCE_EXHAUSTED:case G.INTERNAL:case G.UNAVAILABLE:case G.UNAUTHENTICATED:return!1;case G.INVALID_ARGUMENT:case G.NOT_FOUND:case G.ALREADY_EXISTS:case G.PERMISSION_DENIED:case G.FAILED_PRECONDITION:case G.ABORTED:case G.OUT_OF_RANGE:case G.UNIMPLEMENTED:case G.DATA_LOSS:return!0;default:return ve(15467,{code:n})}}function WE(n){if(n===void 0)return qr("GRPC error has no .code"),G.UNKNOWN;switch(n){case ht.OK:return G.OK;case ht.CANCELLED:return G.CANCELLED;case ht.UNKNOWN:return G.UNKNOWN;case ht.DEADLINE_EXCEEDED:return G.DEADLINE_EXCEEDED;case ht.RESOURCE_EXHAUSTED:return G.RESOURCE_EXHAUSTED;case ht.INTERNAL:return G.INTERNAL;case ht.UNAVAILABLE:return G.UNAVAILABLE;case ht.UNAUTHENTICATED:return G.UNAUTHENTICATED;case ht.INVALID_ARGUMENT:return G.INVALID_ARGUMENT;case ht.NOT_FOUND:return G.NOT_FOUND;case ht.ALREADY_EXISTS:return G.ALREADY_EXISTS;case ht.PERMISSION_DENIED:return G.PERMISSION_DENIED;case ht.FAILED_PRECONDITION:return G.FAILED_PRECONDITION;case ht.ABORTED:return G.ABORTED;case ht.OUT_OF_RANGE:return G.OUT_OF_RANGE;case ht.UNIMPLEMENTED:return G.UNIMPLEMENTED;case ht.DATA_LOSS:return G.DATA_LOSS;default:return ve(39323,{code:n})}}(Ve=ht||(ht={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const rC=new Pi([4294967295,4294967295],0);function f_(n){const e=dE().encode(n),t=new iE;return t.update(e),new Uint8Array(t.digest())}function p_(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Pi([t,i],0),new Pi([o,l],0)]}class gp{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Ja(`Invalid padding: ${t}`);if(i<0)throw new Ja(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Ja(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Ja(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Pi.fromNumber(this.fe)}pe(e,t,i){let o=e.add(t.multiply(Pi.fromNumber(i)));return o.compare(rC)===1&&(o=new Pi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=f_(e),[i,o]=p_(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(i,o,l);if(!this.ye(h))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new gp(l,o,t);return i.forEach((f=>h.insert(f))),h}insert(e){if(this.fe===0)return;const t=f_(e),[i,o]=p_(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(i,o,l);this.we(h)}}we(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Ja extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,Pl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new th(Ie.min(),o,new tt(Ce),Wr(),Ne())}}class Pl{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Pl(i,t,Ne(),Ne(),Ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,t,i,o){this.Se=e,this.removedTargetIds=t,this.key=i,this.be=o}}class HE{constructor(e,t){this.targetId=e,this.De=t}}class GE{constructor(e,t,i=Vt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class m_{constructor(){this.ve=0,this.Ce=g_(),this.Fe=Vt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Ne(),t=Ne(),i=Ne();return this.Ce.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:ve(38017,{changeType:l})}})),new Pl(this.Fe,this.Me,e,t,i)}ke(){this.xe=!1,this.Ce=g_()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,je(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class iC{constructor(e){this.We=e,this.Ge=new Map,this.ze=Wr(),this.je=Zu(),this.Je=Zu(),this.He=new tt(Ce)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const i=this.tt(t);switch(e.state){case 0:this.nt(t)&&i.Be(e.resumeToken);break;case 1:i.Ue(),i.Oe||i.ke(),i.Be(e.resumeToken);break;case 2:i.Ue(),i.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(i.Ke(),i.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),i.Be(e.resumeToken));break;default:ve(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((i,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,i=e.De.count,o=this.st(t);if(o){const l=o.target;if(If(l))if(i===0){const h=new me(l.path);this.Xe(t,h,zt.newNoDocument(h,Ie.min()))}else je(i===1,20013,{expectedCount:i});else{const h=this.ot(t);if(h!==i){const f=this._t(e),m=f?this.ut(f,e,h):1;if(m!==0){this.rt(t);const y=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,y)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=Vi(i).toUint8Array()}catch(m){if(m instanceof yE)return xi("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{f=new gp(h,o,l)}catch(m){return xi(m instanceof Ja?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return f.fe===0?null:f}ut(e,t,i){return t.De.count===i-this.ht(e,t.targetId)?0:2}ht(e,t){const i=this.We.getRemoteKeysForTarget(t);let o=0;return i.forEach((l=>{const h=this.We.lt(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.Xe(t,l,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((l,h)=>{const f=this.st(h);if(f){if(l.current&&If(f.target)){const m=new me(f.target.path);this.Tt(m).has(h)||this.It(h,m)||this.Xe(h,m,zt.newNoDocument(m,e))}l.Ne&&(t.set(h,l.Le()),l.ke())}}));let i=Ne();this.Je.forEach(((l,h)=>{let f=!0;h.forEachWhile((m=>{const y=this.st(m);return!y||y.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(i=i.add(l))})),this.ze.forEach(((l,h)=>h.setReadTime(e)));const o=new th(e,t,this.He,this.ze,i);return this.ze=Wr(),this.je=Zu(),this.Je=Zu(),this.He=new tt(Ce),o}Ze(e,t){if(!this.nt(e))return;const i=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,i),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,i){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),i&&(this.ze=this.ze.insert(t,i))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new m_,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Et(Ce),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Et(Ce),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||ue("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new m_),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Zu(){return new tt(me.comparator)}function g_(){return new tt(me.comparator)}const sC={asc:"ASCENDING",desc:"DESCENDING"},oC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},aC={and:"AND",or:"OR"};class lC{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Rf(n,e){return n.useProto3Json||Qc(e)?e:{value:e}}function Cc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function KE(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function uC(n,e){return Cc(n,e.toTimestamp())}function cr(n){return je(!!n,49232),Ie.fromTimestamp((function(t){const i=Oi(t);return new Qe(i.seconds,i.nanos)})(n))}function yp(n,e){return Cf(n,e).canonicalString()}function Cf(n,e){const t=(function(o){return new He(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function QE(n){const e=He.fromString(n);return je(ew(e),10190,{key:e.toString()}),e}function Pf(n,e){return yp(n.databaseId,e.path)}function ef(n,e){const t=QE(e);if(t.get(1)!==n.databaseId.projectId)throw new ae(G.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ae(G.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new me(JE(t))}function XE(n,e){return yp(n.databaseId,e)}function cC(n){const e=QE(n);return e.length===4?He.emptyPath():JE(e)}function kf(n){return new He(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function JE(n){return je(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function y_(n,e,t){return{name:Pf(n,e),fields:t.value.mapValue.fields}}function hC(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:ve(39313,{state:y})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(y,v){return y.useProto3Json?(je(v===void 0||typeof v=="string",58123),Vt.fromBase64String(v||"")):(je(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),Vt.fromUint8Array(v||new Uint8Array))})(n,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&(function(y){const v=y.code===void 0?G.UNKNOWN:WE(y.code);return new ae(v,y.message||"")})(h);t=new GE(i,o,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=ef(n,i.document.name),l=cr(i.document.updateTime),h=i.document.createTime?cr(i.document.createTime):Ie.min(),f=new rn({mapValue:{fields:i.document.fields}}),m=zt.newFoundDocument(o,l,h,f),y=i.targetIds||[],v=i.removedTargetIds||[];t=new hc(y,v,m.key,m)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=ef(n,i.document),l=i.readTime?cr(i.readTime):Ie.min(),h=zt.newNoDocument(o,l),f=i.removedTargetIds||[];t=new hc([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=ef(n,i.document),l=i.removedTargetIds||[];t=new hc([],l,o,null)}else{if(!("filter"in e))return ve(11601,{At:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,h=new tC(o,l),f=i.targetId;t=new HE(f,h)}}return t}function dC(n,e){let t;if(e instanceof Cl)t={update:y_(n,e.key,e.value)};else if(e instanceof qE)t={delete:Pf(n,e.key)};else if(e instanceof Bi)t={update:y_(n,e.key,e.data),updateMask:wC(e.fieldMask)};else{if(!(e instanceof YR))return ve(16599,{Rt:e.type});t={verify:Pf(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,h){const f=h.transform;if(f instanceof pl)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof ml)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof gl)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof Rc)return{fieldPath:h.field.canonicalString(),increment:f.Ee};throw ve(20930,{transform:h.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:uC(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:ve(27497)})(n,e.precondition)),t}function fC(n,e){return n&&n.length>0?(je(e!==void 0,14353),n.map((t=>(function(o,l){let h=o.updateTime?cr(o.updateTime):cr(l);return h.isEqual(Ie.min())&&(h=cr(l)),new QR(h,o.transformResults||[])})(t,e)))):[]}function pC(n,e){return{documents:[XE(n,e.path)]}}function mC(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=XE(n,o);const l=(function(y){if(y.length!==0)return ZE(Gn.create(y,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(y){if(y.length!==0)return y.map((v=>(function(I){return{field:Co(I.field),direction:_C(I.dir)}})(v)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=Rf(n,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{Vt:t,parent:o}}function gC(n){let e=cC(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){je(i===1,65062);const v=t.from[0];v.allDescendants?o=v.collectionId:e=e.child(v.collectionId)}let l=[];t.where&&(l=(function(T){const I=YE(T);return I instanceof Gn&&CE(I)?I.getFilters():[I]})(t.where));let h=[];t.orderBy&&(h=(function(T){return T.map((I=>(function(j){return new fl(Po(j.field),(function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(j.direction))})(I)))})(t.orderBy));let f=null;t.limit&&(f=(function(T){let I;return I=typeof T=="object"?T.value:T,Qc(I)?null:I})(t.limit));let m=null;t.startAt&&(m=(function(T){const I=!!T.before,V=T.values||[];return new Ac(V,I)})(t.startAt));let y=null;return t.endAt&&(y=(function(T){const I=!T.before,V=T.values||[];return new Ac(V,I)})(t.endAt)),bR(e,o,h,l,f,"F",m,y)}function yC(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ve(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function YE(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Po(t.unaryFilter.field);return dt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=Po(t.unaryFilter.field);return dt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Po(t.unaryFilter.field);return dt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Po(t.unaryFilter.field);return dt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ve(61313);default:return ve(60726)}})(n):n.fieldFilter!==void 0?(function(t){return dt.create(Po(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ve(58110);default:return ve(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Gn.create(t.compositeFilter.filters.map((i=>YE(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ve(1026)}})(t.compositeFilter.op))})(n):ve(30097,{filter:n})}function _C(n){return sC[n]}function vC(n){return oC[n]}function EC(n){return aC[n]}function Co(n){return{fieldPath:n.canonicalString()}}function Po(n){return Ot.fromServerFormat(n.fieldPath)}function ZE(n){return n instanceof dt?(function(t){if(t.op==="=="){if(i_(t.value))return{unaryFilter:{field:Co(t.field),op:"IS_NAN"}};if(r_(t.value))return{unaryFilter:{field:Co(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(i_(t.value))return{unaryFilter:{field:Co(t.field),op:"IS_NOT_NAN"}};if(r_(t.value))return{unaryFilter:{field:Co(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Co(t.field),op:vC(t.op),value:t.value}}})(n):n instanceof Gn?(function(t){const i=t.getFilters().map((o=>ZE(o)));return i.length===1?i[0]:{compositeFilter:{op:EC(t.op),filters:i}}})(n):ve(54877,{filter:n})}function wC(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function ew(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,t,i,o,l=Ie.min(),h=Ie.min(),f=Vt.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=m}withSequenceNumber(e){return new Ti(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ti(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ti(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ti(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e){this.gt=e}}function IC(n){const e=gC({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Af(e,e.limit,"L"):e}/**
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
 */class SC{constructor(){this.Dn=new AC}addToCollectionParentIndex(e,t){return this.Dn.add(t),K.resolve()}getCollectionParents(e,t){return K.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return K.resolve()}deleteFieldIndex(e,t){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,t){return K.resolve()}getDocumentsMatchingTarget(e,t){return K.resolve(null)}getIndexType(e,t){return K.resolve(0)}getFieldIndexes(e,t){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,t){return K.resolve(Di.min())}getMinOffsetFromCollectionGroup(e,t){return K.resolve(Di.min())}updateCollectionGroup(e,t,i){return K.resolve()}updateIndexEntries(e,t){return K.resolve()}}class AC{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new Et(He.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new Et(He.comparator)).toArray()}}/**
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
 */const __={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},tw=41943040;class tn{static withCacheSize(e){return new tn(e,tn.DEFAULT_COLLECTION_PERCENTILE,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn.DEFAULT_COLLECTION_PERCENTILE=10,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,tn.DEFAULT=new tn(tw,tn.DEFAULT_COLLECTION_PERCENTILE,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),tn.DISABLED=new tn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Uo(0)}static ur(){return new Uo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_="LruGarbageCollector",RC=1048576;function E_([n,e],[t,i]){const o=Ce(n,t);return o===0?Ce(e,i):o}class CC{constructor(e){this.Tr=e,this.buffer=new Et(E_),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();E_(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class PC{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ue(v_,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Go(t)?ue(v_,"Ignoring IndexedDB error during garbage collection: ",t):await Ho(t)}await this.Rr(3e5)}))}}class kC{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return K.resolve(Kc.ue);const i=new CC(t);return this.Vr.forEachTarget(e,(o=>i.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>i.Er(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ue("LruGarbageCollector","Garbage collection skipped; disabled"),K.resolve(__)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(ue("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),__):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let i,o,l,h,f,m,y;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(ue("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,h=Date.now(),this.nthSequenceNumber(e,o)))).next((T=>(i=T,f=Date.now(),this.removeTargets(e,i,t)))).next((T=>(l=T,m=Date.now(),this.removeOrphanedDocuments(e,i)))).next((T=>(y=Date.now(),Ao()<=ke.DEBUG&&ue("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-v}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${l} targets in `+(m-f)+`ms
	Removed ${T} documents in `+(y-m)+`ms
Total Duration: ${y-v}ms`),K.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T}))))}}function NC(n,e){return new kC(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(){this.changes=new ks((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,zt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?K.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class DC{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&il(i.mutation,o,pn.empty(),Qe.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,Ne()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=Ne()){const o=Ts();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((l=>{let h=Xa();return l.forEach(((f,m)=>{h=h.insert(f,m.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const i=Ts();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,Ne())))}populateOverlays(e,t,i){const o=[];return i.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,f)=>{t.set(h,f)}))}))}computeViews(e,t,i,o){let l=Wr();const h=rl(),f=(function(){return rl()})();return t.forEach(((m,y)=>{const v=i.get(y.key);o.has(y.key)&&(v===void 0||v.mutation instanceof Bi)?l=l.insert(y.key,y):v!==void 0?(h.set(y.key,v.mutation.getFieldMask()),il(v.mutation,y,v.mutation.getFieldMask(),Qe.now())):h.set(y.key,pn.empty())})),this.recalculateAndSaveOverlays(e,l).next((m=>(m.forEach(((y,v)=>h.set(y,v))),t.forEach(((y,v)=>{var T;return f.set(y,new DC(v,(T=h.get(y))!==null&&T!==void 0?T:null))})),f)))}recalculateAndSaveOverlays(e,t){const i=rl();let o=new tt(((h,f)=>h-f)),l=Ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const f of h)f.keys().forEach((m=>{const y=t.get(m);if(y===null)return;let v=i.get(m)||pn.empty();v=f.applyToLocalView(y,v),i.set(m,v);const T=(o.get(f.batchId)||Ne()).add(m);o=o.insert(f.batchId,T)}))})).next((()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const m=f.getNext(),y=m.key,v=m.value,T=LE();v.forEach((I=>{if(!l.has(I)){const V=BE(t.get(I),i.get(I));V!==null&&T.set(I,V),l=l.add(I)}})),h.push(this.documentOverlayCache.saveOverlays(e,y,T))}return K.waitFor(h)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return(function(h){return me.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):xE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):K.resolve(Ts());let f=ul,m=l;return h.next((y=>K.forEach(y,((v,T)=>(f<T.largestBatchId&&(f=T.largestBatchId),l.get(v)?K.resolve():this.remoteDocumentCache.getEntry(e,v).next((I=>{m=m.insert(v,I)}))))).next((()=>this.populateOverlays(e,y,l))).next((()=>this.computeViews(e,m,y,Ne()))).next((v=>({batchId:f,changes:bE(v)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new me(t)).next((i=>{let o=Xa();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let h=Xa();return this.indexManager.getCollectionParents(e,l).next((f=>K.forEach(f,(m=>{const y=(function(T,I){return new Ko(I,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,m.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next((v=>{v.forEach(((T,I)=>{h=h.insert(T,I)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o)))).next((h=>{l.forEach(((m,y)=>{const v=y.getKey();h.get(v)===null&&(h=h.insert(v,zt.newInvalidDocument(v)))}));let f=Xa();return h.forEach(((m,y)=>{const v=l.get(m);v!==void 0&&il(v.mutation,y,pn.empty(),Qe.now()),Yc(t,y)&&(f=f.insert(m,y))})),f}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return K.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:cr(o.createTime)}})(t)),K.resolve()}getNamedQuery(e,t){return K.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:IC(o.bundledQuery),readTime:cr(o.readTime)}})(t)),K.resolve()}}/**
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
 */class bC{constructor(){this.overlays=new tt(me.comparator),this.kr=new Map}getOverlay(e,t){return K.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Ts();return K.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&i.set(o,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,l)=>{this.wt(e,t,l)})),K.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.kr.get(i);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.kr.delete(i)),K.resolve()}getOverlaysForCollection(e,t,i){const o=Ts(),l=t.length+1,h=new me(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const m=f.getNext().value,y=m.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&m.largestBatchId>i&&o.set(m.getKey(),m)}return K.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new tt(((y,v)=>y-v));const h=this.overlays.getIterator();for(;h.hasNext();){const y=h.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let v=l.get(y.largestBatchId);v===null&&(v=Ts(),l=l.insert(y.largestBatchId,v)),v.set(y.getKey(),y)}}const f=Ts(),m=l.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach(((y,v)=>f.set(y,v))),!(f.size()>=o)););return K.resolve(f)}wt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const h=this.kr.get(o.largestBatchId).delete(i.key);this.kr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(i.key,new eC(t,i));let l=this.kr.get(t);l===void 0&&(l=Ne(),this.kr.set(t,l)),this.kr.set(t,l.add(i.key))}}/**
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
 */class LC{constructor(){this.sessionToken=Vt.EMPTY_BYTE_STRING}getSessionToken(e){return K.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,K.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(){this.qr=new Et(Ct.Qr),this.$r=new Et(Ct.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const i=new Ct(e,t);this.qr=this.qr.add(i),this.$r=this.$r.add(i)}Kr(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new Ct(e,t))}Gr(e,t){e.forEach((i=>this.removeReference(i,t)))}zr(e){const t=new me(new He([])),i=new Ct(t,e),o=new Ct(t,e+1),l=[];return this.$r.forEachInRange([i,o],(h=>{this.Wr(h),l.push(h.key)})),l}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new me(new He([])),i=new Ct(t,e),o=new Ct(t,e+1);let l=Ne();return this.$r.forEachInRange([i,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new Ct(e,0),i=this.qr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Ct{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return me.comparator(e.key,t.key)||Ce(e.Hr,t.Hr)}static Ur(e,t){return Ce(e.Hr,t.Hr)||me.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Et(Ct.Qr)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new ZR(l,t,i,o);this.mutationQueue.push(h);for(const f of o)this.Yr=this.Yr.add(new Ct(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return K.resolve(h)}lookupMutationBatch(e,t){return K.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Xr(i),l=o<0?0:o;return K.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?lp:this.er-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Ct(t,0),o=new Ct(t,Number.POSITIVE_INFINITY),l=[];return this.Yr.forEachInRange([i,o],(h=>{const f=this.Zr(h.Hr);l.push(f)})),K.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Et(Ce);return t.forEach((o=>{const l=new Ct(o,0),h=new Ct(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([l,h],(f=>{i=i.add(f.Hr)}))})),K.resolve(this.ei(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;me.isDocumentKey(l)||(l=l.child(""));const h=new Ct(new me(l),0);let f=new Et(Ce);return this.Yr.forEachWhile((m=>{const y=m.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(f=f.add(m.Hr)),!0)}),h),K.resolve(this.ei(f))}ei(e){const t=[];return e.forEach((i=>{const o=this.Zr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){je(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Yr;return K.forEach(t.mutations,(o=>{const l=new Ct(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=i}))}rr(e){}containsKey(e,t){const i=new Ct(t,0),o=this.Yr.firstAfterOrEqual(i);return K.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e){this.ni=e,this.docs=(function(){return new tt(me.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,h=this.ni(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return K.resolve(i?i.document.mutableCopy():zt.newInvalidDocument(t))}getEntries(e,t){let i=Wr();return t.forEach((o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():zt.newInvalidDocument(o))})),K.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Wr();const h=t.path,f=new me(h.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(f);for(;m.hasNext();){const{key:y,value:{document:v}}=m.getNext();if(!h.isPrefixOf(y.path))break;y.path.length>h.length+1||fR(dR(v),i)<=0||(o.has(v.key)||Yc(t,v))&&(l=l.insert(v.key,v.mutableCopy()))}return K.resolve(l)}getAllFromCollectionGroup(e,t,i,o){ve(9500)}ri(e,t){return K.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new FC(this)}getSize(e){return K.resolve(this.size)}}class FC extends xC{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(i)})),K.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e){this.persistence=e,this.ii=new ks((t=>hp(t)),dp),this.lastRemoteSnapshotVersion=Ie.min(),this.highestTargetId=0,this.si=0,this.oi=new _p,this.targetCount=0,this._i=Uo.ar()}forEachTarget(e,t){return this.ii.forEach(((i,o)=>t(o))),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.si&&(this.si=t),K.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Uo(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,K.resolve()}updateTargetData(e,t){return this.hr(t),K.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.ii.forEach(((h,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.ii.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),K.waitFor(l).next((()=>o))}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,t){const i=this.ii.get(t)||null;return K.resolve(i)}addMatchingKeys(e,t,i){return this.oi.Kr(t,i),K.resolve()}removeMatchingKeys(e,t,i){this.oi.Gr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),K.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),K.resolve()}getMatchingKeysForTargetId(e,t){const i=this.oi.Jr(t);return K.resolve(i)}containsKey(e,t){return K.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e,t){this.ai={},this.overlays={},this.ui=new Kc(0),this.ci=!1,this.ci=!0,this.li=new LC,this.referenceDelegate=e(this),this.hi=new jC(this),this.indexManager=new SC,this.remoteDocumentCache=(function(o){return new UC(o)})((i=>this.referenceDelegate.Pi(i))),this.serializer=new TC(t),this.Ti=new VC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new bC,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ai[e.toKey()];return i||(i=new MC(t,this.referenceDelegate),this.ai[e.toKey()]=i),i}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,i){ue("MemoryPersistence","Starting transaction:",e);const o=new zC(this.ui.next());return this.referenceDelegate.Ii(),i(o).next((l=>this.referenceDelegate.di(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ei(e,t){return K.or(Object.values(this.ai).map((i=>()=>i.containsKey(e,t))))}}class zC extends mR{constructor(e){super(),this.currentSequenceNumber=e}}class vp{constructor(e){this.persistence=e,this.Ai=new _p,this.Ri=null}static Vi(e){return new vp(e)}get mi(){if(this.Ri)return this.Ri;throw ve(60996)}addReference(e,t,i){return this.Ai.addReference(i,t),this.mi.delete(i.toString()),K.resolve()}removeReference(e,t,i){return this.Ai.removeReference(i,t),this.mi.add(i.toString()),K.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),K.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.mi.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.mi,(i=>{const o=me.fromPath(i);return this.fi(e,o).next((l=>{l||t.removeEntry(o,Ie.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((i=>{i?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return K.or([()=>K.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Pc{constructor(e,t){this.persistence=e,this.gi=new ks((i=>_R(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=NC(this,t)}static Vi(e,t){return new Pc(e,t)}Ii(){}di(e){return K.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}yr(e){let t=0;return this.gr(e,(i=>{t++})).next((()=>t))}gr(e,t){return K.forEach(this.gi,((i,o)=>this.Sr(e,i,o).next((l=>l?K.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ri(e,(h=>this.Sr(e,h,t).next((f=>{f||(i++,l.removeEntry(h,Ie.min()))})))).next((()=>l.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),K.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),K.resolve()}removeReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),K.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),K.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=lc(e.data.value)),t}Sr(e,t,i){return K.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return K.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Is=i,this.ds=o}static Es(e,t){let i=Ne(),o=Ne();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Ep(e,t.fromCache,i,o)}}/**
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
 */class BC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class $C{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return MI()?8:gR(Bt())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.ps(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.ys(e,t,o,i).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new BC;return this.ws(e,t,h).next((f=>{if(l.result=f,this.Rs)return this.Ss(e,t,h,f.size)}))})).next((()=>l.result))}Ss(e,t,i,o){return i.documentReadCount<this.Vs?(Ao()<=ke.DEBUG&&ue("QueryEngine","SDK will not create cache indexes for query:",Ro(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),K.resolve()):(Ao()<=ke.DEBUG&&ue("QueryEngine","Query:",Ro(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.fs*o?(Ao()<=ke.DEBUG&&ue("QueryEngine","The SDK decides to create cache indexes for query:",Ro(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ur(t))):K.resolve())}ps(e,t){if(l_(t))return K.resolve(null);let i=ur(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Af(t,null,"F"),i=ur(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const h=Ne(...l);return this.gs.getDocuments(e,h).next((f=>this.indexManager.getMinOffset(e,i).next((m=>{const y=this.bs(t,f);return this.Ds(t,y,h,m.readTime)?this.ps(e,Af(t,null,"F")):this.vs(e,y,t,m)}))))})))))}ys(e,t,i,o){return l_(t)||o.isEqual(Ie.min())?K.resolve(null):this.gs.getDocuments(e,i).next((l=>{const h=this.bs(t,l);return this.Ds(t,h,i,o)?K.resolve(null):(Ao()<=ke.DEBUG&&ue("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ro(t)),this.vs(e,h,t,hR(o,ul)).next((f=>f)))}))}bs(e,t){let i=new Et(OE(e));return t.forEach(((o,l)=>{Yc(e,l)&&(i=i.add(l))})),i}Ds(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ws(e,t,i){return Ao()<=ke.DEBUG&&ue("QueryEngine","Using full collection scan to execute query:",Ro(t)),this.gs.getDocumentsMatchingQuery(e,t,Di.min(),i)}vs(e,t,i,o){return this.gs.getDocumentsMatchingQuery(e,i,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp="LocalStore",qC=3e8;class WC{constructor(e,t,i,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new tt(Ce),this.Ms=new ks((l=>hp(l)),dp),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(i)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new OC(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function HC(n,e,t,i){return new WC(n,e,t,i)}async function rw(n,e){const t=Se(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((l=>(o=l,t.Ns(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const h=[],f=[];let m=Ne();for(const y of o){h.push(y.batchId);for(const v of y.mutations)m=m.add(v.key)}for(const y of l){f.push(y.batchId);for(const v of y.mutations)m=m.add(v.key)}return t.localDocuments.getDocuments(i,m).next((y=>({Bs:y,removedBatchIds:h,addedBatchIds:f})))}))}))}function GC(n,e){const t=Se(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),l=t.Os.newChangeBuffer({trackRemovals:!0});return(function(f,m,y,v){const T=y.batch,I=T.keys();let V=K.resolve();return I.forEach((j=>{V=V.next((()=>v.getEntry(m,j))).next(($=>{const L=y.docVersions.get(j);je(L!==null,48541),$.version.compareTo(L)<0&&(T.applyToRemoteDocument($,y),$.isValidDocument()&&($.setReadTime(y.commitVersion),v.addEntry($)))}))})),V.next((()=>f.mutationQueue.removeMutationBatch(m,T)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(f){let m=Ne();for(let y=0;y<f.mutationResults.length;++y)f.mutationResults[y].transformResults.length>0&&(m=m.add(f.batch.mutations[y].key));return m})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function iw(n){const e=Se(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function KC(n,e){const t=Se(n),i=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const f=[];e.targetChanges.forEach(((v,T)=>{const I=o.get(T);if(!I)return;f.push(t.hi.removeMatchingKeys(l,v.removedDocuments,T).next((()=>t.hi.addMatchingKeys(l,v.addedDocuments,T))));let V=I.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?V=V.withResumeToken(Vt.EMPTY_BYTE_STRING,Ie.min()).withLastLimboFreeSnapshotVersion(Ie.min()):v.resumeToken.approximateByteSize()>0&&(V=V.withResumeToken(v.resumeToken,i)),o=o.insert(T,V),(function($,L,oe){return $.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=qC?!0:oe.addedDocuments.size+oe.modifiedDocuments.size+oe.removedDocuments.size>0})(I,V,v)&&f.push(t.hi.updateTargetData(l,V))}));let m=Wr(),y=Ne();if(e.documentUpdates.forEach((v=>{e.resolvedLimboDocuments.has(v)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,v))})),f.push(QC(l,h,e.documentUpdates).next((v=>{m=v.Ls,y=v.ks}))),!i.isEqual(Ie.min())){const v=t.hi.getLastRemoteSnapshotVersion(l).next((T=>t.hi.setTargetsMetadata(l,l.currentSequenceNumber,i)));f.push(v)}return K.waitFor(f).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,m,y))).next((()=>m))})).then((l=>(t.Fs=o,l)))}function QC(n,e,t){let i=Ne(),o=Ne();return t.forEach((l=>i=i.add(l))),e.getEntries(n,i).next((l=>{let h=Wr();return t.forEach(((f,m)=>{const y=l.get(f);m.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(f)),m.isNoDocument()&&m.version.isEqual(Ie.min())?(e.removeEntry(f,m.readTime),h=h.insert(f,m)):!y.isValidDocument()||m.version.compareTo(y.version)>0||m.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(m),h=h.insert(f,m)):ue(wp,"Ignoring outdated watch update for ",f,". Current version:",y.version," Watch version:",m.version)})),{Ls:h,ks:o}}))}function XC(n,e){const t=Se(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=lp),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function JC(n,e){const t=Se(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.hi.getTargetData(i,e).next((l=>l?(o=l,K.resolve(o)):t.hi.allocateTargetId(i).next((h=>(o=new Ti(e,h,"TargetPurposeListen",i.currentSequenceNumber),t.hi.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.Fs.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(i.targetId,i),t.Ms.set(e,i.targetId)),i}))}async function Nf(n,e,t){const i=Se(n),o=i.Fs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(h=>i.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Go(h))throw h;ue(wp,`Failed to update sequence numbers for target ${e}: ${h}`)}i.Fs=i.Fs.remove(e),i.Ms.delete(o.target)}function w_(n,e,t){const i=Se(n);let o=Ie.min(),l=Ne();return i.persistence.runTransaction("Execute query","readwrite",(h=>(function(m,y,v){const T=Se(m),I=T.Ms.get(v);return I!==void 0?K.resolve(T.Fs.get(I)):T.hi.getTargetData(y,v)})(i,h,ur(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,i.hi.getMatchingKeysForTargetId(h,f.targetId).next((m=>{l=m}))})).next((()=>i.Cs.getDocumentsMatchingQuery(h,e,t?o:Ie.min(),t?l:Ne()))).next((f=>(YC(i,MR(e),f),{documents:f,qs:l})))))}function YC(n,e,t){let i=n.xs.get(e)||Ie.min();t.forEach(((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),n.xs.set(e,i)}class T_{constructor(){this.activeTargetIds=$R()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ZC{constructor(){this.Fo=new T_,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,i){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new T_,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class eP{xo(e){}shutdown(){}}/**
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
 */const I_="ConnectivityMonitor";class S_{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ue(I_,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ue(I_,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ec=null;function xf(){return ec===null?ec=(function(){return 268435456+Math.round(2147483648*Math.random())})():ec++,"0x"+ec.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf="RestConnection",tP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class nP{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${i}/databases/${o}`,this.Ko=this.databaseId.database===Ic?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Wo(e,t,i,o,l){const h=xf(),f=this.Go(e,t.toUriEncodedString());ue(tf,`Sending RPC '${e}' ${h}:`,f,i);const m={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(m,o,l);const{host:y}=new URL(f),v=ji(y);return this.jo(e,f,m,i,v).then((T=>(ue(tf,`Received RPC '${e}' ${h}: `,T),T)),(T=>{throw xi(tf,`RPC '${e}' ${h} failed with error: `,T,"url: ",f,"request:",i),T}))}Jo(e,t,i,o,l,h){return this.Wo(e,t,i,o,l)}zo(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Wo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),i&&i.headers.forEach(((o,l)=>e[l]=o))}Go(e,t){const i=tP[e];return`${this.$o}/v1/${t}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="WebChannelConnection";class iP extends nP{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,i,o,l){const h=xf();return new Promise(((f,m)=>{const y=new sE;y.setWithCredentials(!0),y.listenOnce(oE.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case ac.NO_ERROR:const T=y.getResponseJson();ue(Ft,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(T)),f(T);break;case ac.TIMEOUT:ue(Ft,`RPC '${e}' ${h} timed out`),m(new ae(G.DEADLINE_EXCEEDED,"Request time out"));break;case ac.HTTP_ERROR:const I=y.getStatus();if(ue(Ft,`RPC '${e}' ${h} failed with status:`,I,"response text:",y.getResponseText()),I>0){let V=y.getResponseJson();Array.isArray(V)&&(V=V[0]);const j=V==null?void 0:V.error;if(j&&j.status&&j.message){const $=(function(oe){const se=oe.toLowerCase().replace(/_/g,"-");return Object.values(G).indexOf(se)>=0?se:G.UNKNOWN})(j.status);m(new ae($,j.message))}else m(new ae(G.UNKNOWN,"Server responded with status "+y.getStatus()))}else m(new ae(G.UNAVAILABLE,"Connection failed."));break;default:ve(9055,{c_:e,streamId:h,l_:y.getLastErrorCode(),h_:y.getLastError()})}}finally{ue(Ft,`RPC '${e}' ${h} completed.`)}}));const v=JSON.stringify(o);ue(Ft,`RPC '${e}' ${h} sending request:`,o),y.send(t,"POST",v,i,15)}))}P_(e,t,i){const o=xf(),l=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=uE(),f=lE(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(m.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(m.useFetchStreams=!0),this.zo(m.initMessageHeaders,t,i),m.encodeInitMessageHeaders=!0;const v=l.join("");ue(Ft,`Creating RPC '${e}' stream ${o}: ${v}`,m);const T=h.createWebChannel(v,m);this.T_(T);let I=!1,V=!1;const j=new rP({Ho:L=>{V?ue(Ft,`Not sending because RPC '${e}' stream ${o} is closed:`,L):(I||(ue(Ft,`Opening RPC '${e}' stream ${o} transport.`),T.open(),I=!0),ue(Ft,`RPC '${e}' stream ${o} sending:`,L),T.send(L))},Yo:()=>T.close()}),$=(L,oe,se)=>{L.listen(oe,(Z=>{try{se(Z)}catch(ne){setTimeout((()=>{throw ne}),0)}}))};return $(T,Qa.EventType.OPEN,(()=>{V||(ue(Ft,`RPC '${e}' stream ${o} transport opened.`),j.s_())})),$(T,Qa.EventType.CLOSE,(()=>{V||(V=!0,ue(Ft,`RPC '${e}' stream ${o} transport closed`),j.__(),this.I_(T))})),$(T,Qa.EventType.ERROR,(L=>{V||(V=!0,xi(Ft,`RPC '${e}' stream ${o} transport errored. Name:`,L.name,"Message:",L.message),j.__(new ae(G.UNAVAILABLE,"The operation could not be completed")))})),$(T,Qa.EventType.MESSAGE,(L=>{var oe;if(!V){const se=L.data[0];je(!!se,16349);const Z=se,ne=(Z==null?void 0:Z.error)||((oe=Z[0])===null||oe===void 0?void 0:oe.error);if(ne){ue(Ft,`RPC '${e}' stream ${o} received error:`,ne);const Te=ne.status;let _e=(function(C){const k=ht[C];if(k!==void 0)return WE(k)})(Te),N=ne.message;_e===void 0&&(_e=G.INTERNAL,N="Unknown error status: "+Te+" with message "+ne.message),V=!0,j.__(new ae(_e,N)),T.close()}else ue(Ft,`RPC '${e}' stream ${o} received:`,se),j.a_(se)}})),$(f,aE.STAT_EVENT,(L=>{L.stat===_f.PROXY?ue(Ft,`RPC '${e}' stream ${o} detected buffering proxy`):L.stat===_f.NOPROXY&&ue(Ft,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{j.o_()}),0),j}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function nf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(n){return new lC(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e,t,i=1e3,o=1.5,l=6e4){this.Fi=e,this.timerId=t,this.d_=i,this.E_=o,this.A_=l,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),i=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-i);o>0&&ue("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_="PersistentStream";class ow{constructor(e,t,i,o,l,h,f,m){this.Fi=e,this.w_=i,this.S_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=m,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new sw(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===G.RESOURCE_EXHAUSTED?(qr(t.toString()),qr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===G.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.b_===t&&this.W_(i,o)}),(i=>{e((()=>{const o=new ae(G.UNKNOWN,"Fetching auth token failed: "+i.message);return this.G_(o)}))}))}W_(e,t){const i=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.e_((()=>{i((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{i((()=>this.G_(o)))})),this.stream.onMessage((o=>{i((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return ue(A_,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(ue(A_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class sP extends ow{constructor(e,t,i,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=hC(this.serializer,e),i=(function(l){if(!("targetChange"in l))return Ie.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?Ie.min():h.readTime?cr(h.readTime):Ie.min()})(e);return this.listener.J_(t,i)}H_(e){const t={};t.database=kf(this.serializer),t.addTarget=(function(l,h){let f;const m=h.target;if(f=If(m)?{documents:pC(l,m)}:{query:mC(l,m).Vt},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=KE(l,h.resumeToken);const y=Rf(l,h.expectedCount);y!==null&&(f.expectedCount=y)}else if(h.snapshotVersion.compareTo(Ie.min())>0){f.readTime=Cc(l,h.snapshotVersion.toTimestamp());const y=Rf(l,h.expectedCount);y!==null&&(f.expectedCount=y)}return f})(this.serializer,e);const i=yC(this.serializer,e);i&&(t.labels=i),this.k_(t)}Y_(e){const t={};t.database=kf(this.serializer),t.removeTarget=e,this.k_(t)}}class oP extends ow{constructor(e,t,i,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return je(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,je(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){je(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=fC(e.writeResults,e.commitTime),i=cr(e.commitTime);return this.listener.ta(i,t)}na(){const e={};e.database=kf(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>dC(this.serializer,i)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{}class lP extends aP{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new ae(G.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Wo(e,Cf(t,i),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ae(G.UNKNOWN,l.toString())}))}Jo(e,t,i,o,l){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,f])=>this.connection.Jo(e,Cf(t,i),o,h,f,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ae(G.UNKNOWN,h.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class uP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(qr(t),this._a=!1):ue("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs="RemoteStore";class cP{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=l,this.Ea.xo((h=>{i.enqueueAndForget((async()=>{Ns(this)&&(ue(Cs,"Restarting streams for network reachability change."),await(async function(m){const y=Se(m);y.Ia.add(4),await kl(y),y.Aa.set("Unknown"),y.Ia.delete(4),await rh(y)})(this))}))})),this.Aa=new uP(i,o)}}async function rh(n){if(Ns(n))for(const e of n.da)await e(!0)}async function kl(n){for(const e of n.da)await e(!1)}function aw(n,e){const t=Se(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Ap(t)?Sp(t):Qo(t).x_()&&Ip(t,e))}function Tp(n,e){const t=Se(n),i=Qo(t);t.Ta.delete(e),i.x_()&&lw(t,e),t.Ta.size===0&&(i.x_()?i.B_():Ns(t)&&t.Aa.set("Unknown"))}function Ip(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ie.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Qo(n).H_(e)}function lw(n,e){n.Ra.$e(e),Qo(n).Y_(e)}function Sp(n){n.Ra=new iC({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Qo(n).start(),n.Aa.aa()}function Ap(n){return Ns(n)&&!Qo(n).M_()&&n.Ta.size>0}function Ns(n){return Se(n).Ia.size===0}function uw(n){n.Ra=void 0}async function hP(n){n.Aa.set("Online")}async function dP(n){n.Ta.forEach(((e,t)=>{Ip(n,e)}))}async function fP(n,e){uw(n),Ap(n)?(n.Aa.la(e),Sp(n)):n.Aa.set("Unknown")}async function pP(n,e,t){if(n.Aa.set("Online"),e instanceof GE&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const f of l.targetIds)o.Ta.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.Ta.delete(f),o.Ra.removeTarget(f))})(n,e)}catch(i){ue(Cs,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await kc(n,i)}else if(e instanceof hc?n.Ra.Ye(e):e instanceof HE?n.Ra.it(e):n.Ra.et(e),!t.isEqual(Ie.min()))try{const i=await iw(n.localStore);t.compareTo(i)>=0&&await(function(l,h){const f=l.Ra.Pt(h);return f.targetChanges.forEach(((m,y)=>{if(m.resumeToken.approximateByteSize()>0){const v=l.Ta.get(y);v&&l.Ta.set(y,v.withResumeToken(m.resumeToken,h))}})),f.targetMismatches.forEach(((m,y)=>{const v=l.Ta.get(m);if(!v)return;l.Ta.set(m,v.withResumeToken(Vt.EMPTY_BYTE_STRING,v.snapshotVersion)),lw(l,m);const T=new Ti(v.target,m,y,v.sequenceNumber);Ip(l,T)})),l.remoteSyncer.applyRemoteEvent(f)})(n,t)}catch(i){ue(Cs,"Failed to raise snapshot:",i),await kc(n,i)}}async function kc(n,e,t){if(!Go(e))throw e;n.Ia.add(1),await kl(n),n.Aa.set("Offline"),t||(t=()=>iw(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{ue(Cs,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await rh(n)}))}function cw(n,e){return e().catch((t=>kc(n,t,e)))}async function ih(n){const e=Se(n),t=Li(e);let i=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:lp;for(;mP(e);)try{const o=await XC(e.localStore,i);if(o===null){e.Pa.length===0&&t.B_();break}i=o.batchId,gP(e,o)}catch(o){await kc(e,o)}hw(e)&&dw(e)}function mP(n){return Ns(n)&&n.Pa.length<10}function gP(n,e){n.Pa.push(e);const t=Li(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function hw(n){return Ns(n)&&!Li(n).M_()&&n.Pa.length>0}function dw(n){Li(n).start()}async function yP(n){Li(n).na()}async function _P(n){const e=Li(n);for(const t of n.Pa)e.X_(t.mutations)}async function vP(n,e,t){const i=n.Pa.shift(),o=mp.from(i,e,t);await cw(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await ih(n)}async function EP(n,e){e&&Li(n).Z_&&await(async function(i,o){if((function(h){return nC(h)&&h!==G.ABORTED})(o.code)){const l=i.Pa.shift();Li(i).N_(),await cw(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o))),await ih(i)}})(n,e),hw(n)&&dw(n)}async function R_(n,e){const t=Se(n);t.asyncQueue.verifyOperationInProgress(),ue(Cs,"RemoteStore received new credentials");const i=Ns(t);t.Ia.add(3),await kl(t),i&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await rh(t)}async function wP(n,e){const t=Se(n);e?(t.Ia.delete(2),await rh(t)):e||(t.Ia.add(2),await kl(t),t.Aa.set("Unknown"))}function Qo(n){return n.Va||(n.Va=(function(t,i,o){const l=Se(t);return l.ia(),new sP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Zo:hP.bind(null,n),e_:dP.bind(null,n),n_:fP.bind(null,n),J_:pP.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),Ap(n)?Sp(n):n.Aa.set("Unknown")):(await n.Va.stop(),uw(n))}))),n.Va}function Li(n){return n.ma||(n.ma=(function(t,i,o){const l=Se(t);return l.ia(),new oP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:yP.bind(null,n),n_:EP.bind(null,n),ea:_P.bind(null,n),ta:vP.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await ih(n)):(await n.ma.stop(),n.Pa.length>0&&(ue(Cs,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new jr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const h=Date.now()+i,f=new Rp(e,t,h,o,l);return f.start(i),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ae(G.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cp(n,e){if(qr("AsyncQueue",`${e}: ${n}`),Go(n))return new ae(G.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{static emptySet(e){return new Do(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||me.comparator(t.key,i.key):(t,i)=>me.comparator(t.key,i.key),this.keyedMap=Xa(),this.sortedSet=new tt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Do)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Do;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(){this.fa=new tt(me.comparator)}track(e){const t=e.doc.key,i=this.fa.get(t);i?e.type!==0&&i.type===3?this.fa=this.fa.insert(t,e):e.type===3&&i.type!==1?this.fa=this.fa.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.fa=this.fa.remove(t):e.type===1&&i.type===2?this.fa=this.fa.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):ve(63341,{At:e,ga:i}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Fo{constructor(e,t,i,o,l,h,f,m,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=m,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const h=[];return t.forEach((f=>{h.push({type:0,doc:f})})),new Fo(e,t,Do.emptySet(t),h,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Jc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class IP{constructor(){this.queries=P_(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,i){const o=Se(t),l=o.queries;o.queries=P_(),l.forEach(((h,f)=>{for(const m of f.wa)m.onError(i)}))})(this,new ae(G.ABORTED,"Firestore shutting down"))}}function P_(){return new ks((n=>DE(n)),Jc)}async function fw(n,e){const t=Se(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Sa()&&e.ba()&&(i=2):(l=new TP,i=e.ba()?0:1);try{switch(i){case 0:l.ya=await t.onListen(o,!0);break;case 1:l.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=Cp(h,`Initialization of query '${Ro(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.wa.push(e),e.va(t.onlineState),l.ya&&e.Ca(l.ya)&&Pp(t)}async function pw(n,e){const t=Se(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const h=l.wa.indexOf(e);h>=0&&(l.wa.splice(h,1),l.wa.length===0?o=e.ba()?0:1:!l.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function SP(n,e){const t=Se(n);let i=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.wa)f.Ca(o)&&(i=!0);h.ya=o}}i&&Pp(t)}function AP(n,e,t){const i=Se(n),o=i.queries.get(e);if(o)for(const l of o.wa)l.onError(t);i.queries.delete(e)}function Pp(n){n.Da.forEach((e=>{e.next()}))}var Df,k_;(k_=Df||(Df={})).Fa="default",k_.Cache="cache";class mw{constructor(e,t,i){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=i||{}}Ca(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Fo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const i=t!=="Offline";return(!this.options.ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Fo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Df.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e){this.key=e}}class yw{constructor(e){this.key=e}}class RP{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Ne(),this.mutatedKeys=Ne(),this.Xa=OE(e),this.eu=new Do(this.Xa)}get tu(){return this.Ha}nu(e,t){const i=t?t.ru:new C_,o=t?t.eu:this.eu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const m=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((v,T)=>{const I=o.get(v),V=Yc(this.query,T)?T:null,j=!!I&&this.mutatedKeys.has(I.key),$=!!V&&(V.hasLocalMutations||this.mutatedKeys.has(V.key)&&V.hasCommittedMutations);let L=!1;I&&V?I.data.isEqual(V.data)?j!==$&&(i.track({type:3,doc:V}),L=!0):this.iu(I,V)||(i.track({type:2,doc:V}),L=!0,(m&&this.Xa(V,m)>0||y&&this.Xa(V,y)<0)&&(f=!0)):!I&&V?(i.track({type:0,doc:V}),L=!0):I&&!V&&(i.track({type:1,doc:I}),L=!0,(m||y)&&(f=!0)),L&&(V?(h=h.add(V),l=$?l.add(v):l.delete(v)):(h=h.delete(v),l=l.delete(v)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const v=this.query.limitType==="F"?h.last():h.first();h=h.delete(v.key),l=l.delete(v.key),i.track({type:1,doc:v})}return{eu:h,ru:i,Ds:f,mutatedKeys:l}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const h=e.ru.pa();h.sort(((v,T)=>(function(V,j){const $=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ve(20277,{At:L})}};return $(V)-$(j)})(v.type,T.type)||this.Xa(v.doc,T.doc))),this.su(i),o=o!=null&&o;const f=t&&!o?this.ou():[],m=this.Za.size===0&&this.current&&!o?1:0,y=m!==this.Ya;return this.Ya=m,h.length!==0||y?{snapshot:new Fo(this.query,e.eu,l,h,e.mutatedKeys,m===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),_u:f}:{_u:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new C_,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Ne(),this.eu.forEach((i=>{this.au(i.key)&&(this.Za=this.Za.add(i.key))}));const t=[];return e.forEach((i=>{this.Za.has(i)||t.push(new yw(i))})),this.Za.forEach((i=>{e.has(i)||t.push(new gw(i))})),t}uu(e){this.Ha=e.qs,this.Za=Ne();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Fo.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const kp="SyncEngine";class CP{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class PP{constructor(e){this.key=e,this.lu=!1}}class kP{constructor(e,t,i,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.hu={},this.Pu=new ks((f=>DE(f)),Jc),this.Tu=new Map,this.Iu=new Set,this.du=new tt(me.comparator),this.Eu=new Map,this.Au=new _p,this.Ru={},this.Vu=new Map,this.mu=Uo.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function NP(n,e,t=!0){const i=Iw(n);let o;const l=i.Pu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.cu()):o=await _w(i,e,t,!0),o}async function xP(n,e){const t=Iw(n);await _w(t,e,!0,!1)}async function _w(n,e,t,i){const o=await JC(n.localStore,ur(e)),l=o.targetId,h=n.sharedClientState.addLocalQueryTarget(l,t);let f;return i&&(f=await DP(n,e,l,h==="current",o.resumeToken)),n.isPrimaryClient&&t&&aw(n.remoteStore,o),f}async function DP(n,e,t,i,o){n.gu=(T,I,V)=>(async function($,L,oe,se){let Z=L.view.nu(oe);Z.Ds&&(Z=await w_($.localStore,L.query,!1).then((({documents:N})=>L.view.nu(N,Z))));const ne=se&&se.targetChanges.get(L.targetId),Te=se&&se.targetMismatches.get(L.targetId)!=null,_e=L.view.applyChanges(Z,$.isPrimaryClient,ne,Te);return x_($,L.targetId,_e._u),_e.snapshot})(n,T,I,V);const l=await w_(n.localStore,e,!0),h=new RP(e,l.qs),f=h.nu(l.documents),m=Pl.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=h.applyChanges(f,n.isPrimaryClient,m);x_(n,t,y._u);const v=new CP(e,t,h);return n.Pu.set(e,v),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),y.snapshot}async function OP(n,e,t){const i=Se(n),o=i.Pu.get(e),l=i.Tu.get(o.targetId);if(l.length>1)return i.Tu.set(o.targetId,l.filter((h=>!Jc(h,e)))),void i.Pu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await Nf(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&Tp(i.remoteStore,o.targetId),Of(i,o.targetId)})).catch(Ho)):(Of(i,o.targetId),await Nf(i.localStore,o.targetId,!0))}async function VP(n,e){const t=Se(n),i=t.Pu.get(e),o=t.Tu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Tp(t.remoteStore,i.targetId))}async function bP(n,e,t){const i=BP(n);try{const o=await(function(h,f){const m=Se(h),y=Qe.now(),v=f.reduce(((V,j)=>V.add(j.key)),Ne());let T,I;return m.persistence.runTransaction("Locally write mutations","readwrite",(V=>{let j=Wr(),$=Ne();return m.Os.getEntries(V,v).next((L=>{j=L,j.forEach(((oe,se)=>{se.isValidDocument()||($=$.add(oe))}))})).next((()=>m.localDocuments.getOverlayedDocuments(V,j))).next((L=>{T=L;const oe=[];for(const se of f){const Z=JR(se,T.get(se.key).overlayedDocument);Z!=null&&oe.push(new Bi(se.key,Z,SE(Z.value.mapValue),Hn.exists(!0)))}return m.mutationQueue.addMutationBatch(V,y,oe,f)})).next((L=>{I=L;const oe=L.applyToLocalDocumentSet(T,$);return m.documentOverlayCache.saveOverlays(V,L.batchId,oe)}))})).then((()=>({batchId:I.batchId,changes:bE(T)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(h,f,m){let y=h.Ru[h.currentUser.toKey()];y||(y=new tt(Ce)),y=y.insert(f,m),h.Ru[h.currentUser.toKey()]=y})(i,o.batchId,t),await Nl(i,o.changes),await ih(i.remoteStore)}catch(o){const l=Cp(o,"Failed to persist write");t.reject(l)}}async function vw(n,e){const t=Se(n);try{const i=await KC(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.Eu.get(l);h&&(je(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.lu=!0:o.modifiedDocuments.size>0?je(h.lu,14607):o.removedDocuments.size>0&&(je(h.lu,42227),h.lu=!1))})),await Nl(t,i,e)}catch(i){await Ho(i)}}function N_(n,e,t){const i=Se(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Pu.forEach(((l,h)=>{const f=h.view.va(e);f.snapshot&&o.push(f.snapshot)})),(function(h,f){const m=Se(h);m.onlineState=f;let y=!1;m.queries.forEach(((v,T)=>{for(const I of T.wa)I.va(f)&&(y=!0)})),y&&Pp(m)})(i.eventManager,e),o.length&&i.hu.J_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function LP(n,e,t){const i=Se(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Eu.get(e),l=o&&o.key;if(l){let h=new tt(me.comparator);h=h.insert(l,zt.newNoDocument(l,Ie.min()));const f=Ne().add(l),m=new th(Ie.min(),new Map,new tt(Ce),h,f);await vw(i,m),i.du=i.du.remove(l),i.Eu.delete(e),Np(i)}else await Nf(i.localStore,e,!1).then((()=>Of(i,e,t))).catch(Ho)}async function MP(n,e){const t=Se(n),i=e.batch.batchId;try{const o=await GC(t.localStore,e);ww(t,i,null),Ew(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Nl(t,o)}catch(o){await Ho(o)}}async function UP(n,e,t){const i=Se(n);try{const o=await(function(h,f){const m=Se(h);return m.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let v;return m.mutationQueue.lookupMutationBatch(y,f).next((T=>(je(T!==null,37113),v=T.keys(),m.mutationQueue.removeMutationBatch(y,T)))).next((()=>m.mutationQueue.performConsistencyCheck(y))).next((()=>m.documentOverlayCache.removeOverlaysForBatchId(y,v,f))).next((()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,v))).next((()=>m.localDocuments.getDocuments(y,v)))}))})(i.localStore,e);ww(i,e,t),Ew(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Nl(i,o)}catch(o){await Ho(o)}}function Ew(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function ww(n,e,t){const i=Se(n);let o=i.Ru[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.Ru[i.currentUser.toKey()]=o}}function Of(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Tu.get(e))n.Pu.delete(i),t&&n.hu.pu(i,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((i=>{n.Au.containsKey(i)||Tw(n,i)}))}function Tw(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Tp(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Np(n))}function x_(n,e,t){for(const i of t)i instanceof gw?(n.Au.addReference(i.key,e),FP(n,i)):i instanceof yw?(ue(kp,"Document no longer in limbo: "+i.key),n.Au.removeReference(i.key,e),n.Au.containsKey(i.key)||Tw(n,i.key)):ve(19791,{yu:i})}function FP(n,e){const t=e.key,i=t.path.canonicalString();n.du.get(t)||n.Iu.has(i)||(ue(kp,"New document in limbo: "+t),n.Iu.add(i),Np(n))}function Np(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new me(He.fromString(e)),i=n.mu.next();n.Eu.set(i,new PP(t)),n.du=n.du.insert(t,i),aw(n.remoteStore,new Ti(ur(fp(t.path)),i,"TargetPurposeLimboResolution",Kc.ue))}}async function Nl(n,e,t){const i=Se(n),o=[],l=[],h=[];i.Pu.isEmpty()||(i.Pu.forEach(((f,m)=>{h.push(i.gu(m,e,t).then((y=>{var v;if((y||t)&&i.isPrimaryClient){const T=y?!y.fromCache:(v=t==null?void 0:t.targetChanges.get(m.targetId))===null||v===void 0?void 0:v.current;i.sharedClientState.updateQueryState(m.targetId,T?"current":"not-current")}if(y){o.push(y);const T=Ep.Es(m.targetId,y);l.push(T)}})))})),await Promise.all(h),i.hu.J_(o),await(async function(m,y){const v=Se(m);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>K.forEach(y,(I=>K.forEach(I.Is,(V=>v.persistence.referenceDelegate.addReference(T,I.targetId,V))).next((()=>K.forEach(I.ds,(V=>v.persistence.referenceDelegate.removeReference(T,I.targetId,V)))))))))}catch(T){if(!Go(T))throw T;ue(wp,"Failed to update sequence numbers: "+T)}for(const T of y){const I=T.targetId;if(!T.fromCache){const V=v.Fs.get(I),j=V.snapshotVersion,$=V.withLastLimboFreeSnapshotVersion(j);v.Fs=v.Fs.insert(I,$)}}})(i.localStore,l))}async function jP(n,e){const t=Se(n);if(!t.currentUser.isEqual(e)){ue(kp,"User change. New user:",e.toKey());const i=await rw(t.localStore,e);t.currentUser=e,(function(l,h){l.Vu.forEach((f=>{f.forEach((m=>{m.reject(new ae(G.CANCELLED,h))}))})),l.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Nl(t,i.Bs)}}function zP(n,e){const t=Se(n),i=t.Eu.get(e);if(i&&i.lu)return Ne().add(i.key);{let o=Ne();const l=t.Tu.get(e);if(!l)return o;for(const h of l){const f=t.Pu.get(h);o=o.unionWith(f.view.tu)}return o}}function Iw(n){const e=Se(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=vw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=zP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=LP.bind(null,e),e.hu.J_=SP.bind(null,e.eventManager),e.hu.pu=AP.bind(null,e.eventManager),e}function BP(n){const e=Se(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=MP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=UP.bind(null,e),e}class Nc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=nh(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return HC(this.persistence,new $C,e.initialUser,this.serializer)}Du(e){return new nw(vp.Vi,this.serializer)}bu(e){return new ZC}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Nc.provider={build:()=>new Nc};class $P extends Nc{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){je(this.persistence.referenceDelegate instanceof Pc,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new PC(i,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?tn.withCacheSize(this.cacheSizeBytes):tn.DEFAULT;return new nw((i=>Pc.Vi(i,t)),this.serializer)}}class Vf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>N_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=jP.bind(null,this.syncEngine),await wP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new IP})()}createDatastore(e){const t=nh(e.databaseInfo.databaseId),i=(function(l){return new iP(l)})(e.databaseInfo);return(function(l,h,f,m){return new lP(l,h,f,m)})(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,l,h,f){return new cP(i,o,l,h,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>N_(this.syncEngine,t,0)),(function(){return S_.C()?new S_:new eP})())}createSyncEngine(e,t){return(function(o,l,h,f,m,y,v){const T=new kP(o,l,h,f,m,y);return v&&(T.fu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Se(o);ue(Cs,"RemoteStore shutting down."),l.Ia.add(5),await kl(l),l.Ea.shutdown(),l.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Vf.provider={build:()=>new Vf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Sw{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):qr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi="FirestoreClient";class qP{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=jt.UNAUTHENTICATED,this.clientId=ap.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,(async h=>{ue(Mi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(i,(h=>(ue(Mi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new jr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Cp(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function rf(n,e){n.asyncQueue.verifyOperationInProgress(),ue(Mi,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async o=>{i.isEqual(o)||(await rw(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>{xi("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{ue("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{xi("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),n._offlineComponents=e}async function D_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await WP(n);ue(Mi,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>R_(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,o)=>R_(e.remoteStore,o))),n._onlineComponents=e}async function WP(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ue(Mi,"Using user provided OfflineComponentProvider");try{await rf(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===G.FAILED_PRECONDITION||o.code===G.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;xi("Error using user provided cache. Falling back to memory cache: "+t),await rf(n,new Nc)}}else ue(Mi,"Using default OfflineComponentProvider"),await rf(n,new $P(void 0));return n._offlineComponents}async function Aw(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ue(Mi,"Using user provided OnlineComponentProvider"),await D_(n,n._uninitializedComponentsProvider._online)):(ue(Mi,"Using default OnlineComponentProvider"),await D_(n,new Vf))),n._onlineComponents}function HP(n){return Aw(n).then((e=>e.syncEngine))}async function Rw(n){const e=await Aw(n),t=e.eventManager;return t.onListen=NP.bind(null,e.syncEngine),t.onUnlisten=OP.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=xP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=VP.bind(null,e.syncEngine),t}function GP(n,e,t={}){const i=new jr;return n.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,m,y){const v=new Sw({next:I=>{v.Ou(),h.enqueueAndForget((()=>pw(l,T)));const V=I.docs.has(f);!V&&I.fromCache?y.reject(new ae(G.UNAVAILABLE,"Failed to get document because the client is offline.")):V&&I.fromCache&&m&&m.source==="server"?y.reject(new ae(G.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(I)},error:I=>y.reject(I)}),T=new mw(fp(f.path),v,{includeMetadataChanges:!0,ka:!0});return fw(l,T)})(await Rw(n),n.asyncQueue,e,t,i))),i.promise}function KP(n,e,t={}){const i=new jr;return n.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,m,y){const v=new Sw({next:I=>{v.Ou(),h.enqueueAndForget((()=>pw(l,T))),I.fromCache&&m.source==="server"?y.reject(new ae(G.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(I)},error:I=>y.reject(I)}),T=new mw(f,v,{includeMetadataChanges:!0,ka:!0});return fw(l,T)})(await Rw(n),n.asyncQueue,e,t,i))),i.promise}/**
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
 */function Cw(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw="firestore.googleapis.com",V_=!0;class b_{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new ae(G.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Pw,this.ssl=V_}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:V_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=tw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<RC)throw new ae(G.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}cR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Cw((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),(function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ae(G.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ae(G.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ae(G.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class sh{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new b_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ae(G.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ae(G.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new b_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new tR;switch(i.type){case"firstParty":return new sR(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ae(G.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=O_.get(t);i&&(ue("ComponentProvider","Removing Datastore"),O_.delete(t),i.terminate())})(this),Promise.resolve()}}function QP(n,e,t,i={}){var o;n=pr(n,sh);const l=ji(e),h=n._getSettings(),f=Object.assign(Object.assign({},h),{emulatorOptions:n._getEmulatorOptions()}),m=`${e}:${t}`;l&&(jc(`https://${m}`),zc("Firestore",!0)),h.host!==Pw&&h.host!==m&&xi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y=Object.assign(Object.assign({},h),{host:m,ssl:l,emulatorOptions:i});if(!Ss(y,f)&&(n._setSettings(y),i.mockUserToken)){let v,T;if(typeof i.mockUserToken=="string")v=i.mockUserToken,T=jt.MOCK_USER;else{v=yv(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const I=i.mockUserToken.sub||i.mockUserToken.user_id;if(!I)throw new ae(G.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new jt(I)}n._authCredentials=new nR(new hE(v,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new xs(this.firestore,e,this._query)}}class ot{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ki(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}toJSON(){return{type:ot._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(Rl(t,ot._jsonSchema))return new ot(e,i||null,new me(He.fromString(t.referencePath)))}}ot._jsonSchemaVersion="firestore/documentReference/1.0",ot._jsonSchema={type:ft("string",ot._jsonSchemaVersion),referencePath:ft("string")};class ki extends xs{constructor(e,t,i){super(e,t,fp(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new me(e))}withConverter(e){return new ki(this.firestore,e,this._path)}}function Xo(n,e,...t){if(n=lt(n),fE("collection","path",e),n instanceof sh){const i=He.fromString(e,...t);return Ky(i),new ki(n,null,i)}{if(!(n instanceof ot||n instanceof ki))throw new ae(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(He.fromString(e,...t));return Ky(i),new ki(n.firestore,null,i)}}function Jo(n,e,...t){if(n=lt(n),arguments.length===1&&(e=ap.newId()),fE("doc","path",e),n instanceof sh){const i=He.fromString(e,...t);return Gy(i),new ot(n,null,new me(i))}{if(!(n instanceof ot||n instanceof ki))throw new ae(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(He.fromString(e,...t));return Gy(i),new ot(n.firestore,n instanceof ki?n.converter:null,new me(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_="AsyncQueue";class M_{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new sw(this,"async_queue_retry"),this.oc=()=>{const i=nf();i&&ue(L_,"Visibility state changed to "+i.visibilityState),this.F_.y_()},this._c=e;const t=nf();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=nf();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new jr;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Go(e))throw e;ue(L_,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((i=>{throw this.tc=i,this.nc=!1,qr("INTERNAL UNHANDLED ERROR: ",U_(i)),i})).then((i=>(this.nc=!1,i))))));return this._c=t,t}enqueueAfterDelay(e,t,i){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=Rp.createAndSchedule(this,e,t,i,(l=>this.lc(l)));return this.ec.push(o),o}ac(){this.tc&&ve(47125,{hc:U_(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function U_(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Yo extends sh{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new M_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new M_(e),this._firestoreClient=void 0,await e}}}function XP(n,e){const t=typeof n=="object"?n:Bc(),i=typeof n=="string"?n:Ic,o=Tl(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=Hf("firestore");l&&QP(o,...l)}return o}function xp(n){if(n._terminated)throw new ae(G.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||JP(n),n._firestoreClient}function JP(n){var e,t,i;const o=n._freezeSettings(),l=(function(f,m,y,v){return new wR(f,m,y,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,Cw(v.experimentalLongPollingOptions),v.useFetchStreams,v.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new qP(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&(function(f){const m=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(m),_online:m}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this._byteString=e}static fromBase64String(e){try{return new An(Vt.fromBase64String(e))}catch(t){throw new ae(G.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new An(Vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:An._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Rl(e,An._jsonSchema))return An.fromBase64String(e.bytes)}}An._jsonSchemaVersion="firestore/bytes/1.0",An._jsonSchema={type:ft("string",An._jsonSchemaVersion),bytes:ft("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ae(G.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ae(G.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ae(G.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:hr._jsonSchemaVersion}}static fromJSON(e){if(Rl(e,hr._jsonSchema))return new hr(e.latitude,e.longitude)}}hr._jsonSchemaVersion="firestore/geoPoint/1.0",hr._jsonSchema={type:ft("string",hr._jsonSchemaVersion),latitude:ft("number"),longitude:ft("number")};/**
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
 */class dr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:dr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Rl(e,dr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new dr(e.vectorValues);throw new ae(G.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}dr._jsonSchemaVersion="firestore/vectorValue/1.0",dr._jsonSchema={type:ft("string",dr._jsonSchemaVersion),vectorValues:ft("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YP=/^__.*__$/;class ZP{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Bi(e,this.data,this.fieldMask,t,this.fieldTransforms):new Cl(e,this.data,t,this.fieldTransforms)}}class kw{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Bi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Nw(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ve(40011,{Ec:n})}}class Dp{constructor(e,t,i,o,l,h){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Dp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:i,mc:!1});return o.fc(e),o}gc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:i,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return xc(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Nw(this.Ec)&&YP.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class ek{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||nh(e)}Dc(e,t,i,o=!1){return new Dp({Ec:e,methodName:t,bc:i,path:Ot.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lh(n){const e=n._freezeSettings(),t=nh(n._databaseId);return new ek(n._databaseId,!!e.ignoreUndefinedProperties,t)}function xw(n,e,t,i,o,l={}){const h=n.Dc(l.merge||l.mergeFields?2:0,e,t,o);Vp("Data must be an object, but it was:",h,i);const f=Dw(i,h);let m,y;if(l.merge)m=new pn(h.fieldMask),y=h.fieldTransforms;else if(l.mergeFields){const v=[];for(const T of l.mergeFields){const I=bf(e,T,t);if(!h.contains(I))throw new ae(G.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);Vw(v,I)||v.push(I)}m=new pn(v),y=h.fieldTransforms.filter((T=>m.covers(T.field)))}else m=null,y=h.fieldTransforms;return new ZP(new rn(f),m,y)}class uh extends ah{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof uh}}class Op extends ah{_toFieldTransform(e){return new GR(e.path,new pl)}isEqual(e){return e instanceof Op}}function tk(n,e,t,i){const o=n.Dc(1,e,t);Vp("Data must be an object, but it was:",o,i);const l=[],h=rn.empty();zi(i,((m,y)=>{const v=bp(e,m,t);y=lt(y);const T=o.gc(v);if(y instanceof uh)l.push(v);else{const I=xl(y,T);I!=null&&(l.push(v),h.set(v,I))}}));const f=new pn(l);return new kw(h,f,o.fieldTransforms)}function nk(n,e,t,i,o,l){const h=n.Dc(1,e,t),f=[bf(e,i,t)],m=[o];if(l.length%2!=0)throw new ae(G.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<l.length;I+=2)f.push(bf(e,l[I])),m.push(l[I+1]);const y=[],v=rn.empty();for(let I=f.length-1;I>=0;--I)if(!Vw(y,f[I])){const V=f[I];let j=m[I];j=lt(j);const $=h.gc(V);if(j instanceof uh)y.push(V);else{const L=xl(j,$);L!=null&&(y.push(V),v.set(V,L))}}const T=new pn(y);return new kw(v,T,h.fieldTransforms)}function rk(n,e,t,i=!1){return xl(t,n.Dc(i?4:3,e))}function xl(n,e){if(Ow(n=lt(n)))return Vp("Unsupported field value:",e,n),Dw(n,e);if(n instanceof ah)return(function(i,o){if(!Nw(o.Ec))throw o.wc(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(i,o){const l=[];let h=0;for(const f of i){let m=xl(f,o.yc(h));m==null&&(m={nullValue:"NULL_VALUE"}),l.push(m),h++}return{arrayValue:{values:l}}})(n,e)}return(function(i,o){if((i=lt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return qR(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=Qe.fromDate(i);return{timestampValue:Cc(o.serializer,l)}}if(i instanceof Qe){const l=new Qe(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Cc(o.serializer,l)}}if(i instanceof hr)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof An)return{bytesValue:KE(o.serializer,i._byteString)};if(i instanceof ot){const l=o.databaseId,h=i.firestore._databaseId;if(!h.isEqual(l))throw o.wc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:yp(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof dr)return(function(h,f){return{mapValue:{fields:{[TE]:{stringValue:IE},[Sc]:{arrayValue:{values:h.toArray().map((y=>{if(typeof y!="number")throw f.wc("VectorValues must only contain numeric values.");return pp(f.serializer,y)}))}}}}}})(i,o);throw o.wc(`Unsupported field value: ${Gc(i)}`)})(n,e)}function Dw(n,e){const t={};return gE(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):zi(n,((i,o)=>{const l=xl(o,e.Vc(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function Ow(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Qe||n instanceof hr||n instanceof An||n instanceof ot||n instanceof ah||n instanceof dr)}function Vp(n,e,t){if(!Ow(t)||!pE(t)){const i=Gc(t);throw i==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+i)}}function bf(n,e,t){if((e=lt(e))instanceof oh)return e._internalPath;if(typeof e=="string")return bp(n,e);throw xc("Field path arguments must be of type string or ",n,!1,void 0,t)}const ik=new RegExp("[~\\*/\\[\\]]");function bp(n,e,t){if(e.search(ik)>=0)throw xc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new oh(...e.split("."))._internalPath}catch{throw xc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function xc(n,e,t,i,o){const l=i&&!i.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let m="";return(l||h)&&(m+=" (found",l&&(m+=` in field ${i}`),h&&(m+=` in document ${o}`),m+=")"),new ae(G.INVALID_ARGUMENT,f+n+m)}function Vw(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ch("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class sk extends bw{data(){return super.data()}}function ch(n,e){return typeof e=="string"?bp(n,e):e instanceof oh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ok(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ae(G.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Lp{}class Lw extends Lp{}function hh(n,e,...t){let i=[];e instanceof Lp&&i.push(e),i=i.concat(t),(function(l){const h=l.filter((m=>m instanceof Mp)).length,f=l.filter((m=>m instanceof dh)).length;if(h>1||h>0&&f>0)throw new ae(G.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const o of i)n=o._apply(n);return n}class dh extends Lw{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new dh(e,t,i)}_apply(e){const t=this._parse(e);return Mw(e._query,t),new xs(e.firestore,e.converter,Sf(e._query,t))}_parse(e){const t=lh(e.firestore);return(function(l,h,f,m,y,v,T){let I;if(y.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new ae(G.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){j_(T,v);const j=[];for(const $ of T)j.push(F_(m,l,$));I={arrayValue:{values:j}}}else I=F_(m,l,T)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||j_(T,v),I=rk(f,h,T,v==="in"||v==="not-in");return dt.create(y,v,I)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function fh(n,e,t){const i=e,o=ch("where",n);return dh._create(o,i,t)}class Mp extends Lp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Mp(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:Gn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let h=o;const f=l.getFlattenedFilters();for(const m of f)Mw(h,m),h=Sf(h,m)})(e._query,t),new xs(e.firestore,e.converter,Sf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Up extends Lw{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Up(e,t)}_apply(e){const t=(function(o,l,h){if(o.startAt!==null)throw new ae(G.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ae(G.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new fl(l,h)})(e._query,this._field,this._direction);return new xs(e.firestore,e.converter,(function(o,l){const h=o.explicitOrderBy.concat([l]);return new Ko(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function Fp(n,e="asc"){const t=e,i=ch("orderBy",n);return Up._create(i,t)}function F_(n,e,t){if(typeof(t=lt(t))=="string"){if(t==="")throw new ae(G.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!xE(e)&&t.indexOf("/")!==-1)throw new ae(G.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(He.fromString(t));if(!me.isDocumentKey(i))throw new ae(G.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return n_(n,new me(i))}if(t instanceof ot)return n_(n,t._key);throw new ae(G.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Gc(t)}.`)}function j_(n,e){if(!Array.isArray(n)||n.length===0)throw new ae(G.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Mw(n,e){const t=(function(o,l){for(const h of o)for(const f of h.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ae(G.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ae(G.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class ak{convertValue(e,t="none"){switch(bi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return st(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Vi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ve(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return zi(e,((o,l)=>{i[o]=this.convertValue(l,t)})),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t[Sc].arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map((h=>st(h.doubleValue)));return new dr(l)}convertGeoPoint(e){return new hr(st(e.latitude),st(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Xc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(cl(e));default:return null}}convertTimestamp(e){const t=Oi(e);return new Qe(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=He.fromString(e);je(ew(i),9688,{name:e});const o=new hl(i.get(1),i.get(3)),l=new me(i.popFirst(5));return o.isEqual(t)||qr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uw(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}class Ya{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Is extends bw{constructor(e,t,i,o,l,h){super(e,t,i,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new dc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(ch("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ae(G.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Is._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Is._jsonSchemaVersion="firestore/documentSnapshot/1.0",Is._jsonSchema={type:ft("string",Is._jsonSchemaVersion),bundleSource:ft("string","DocumentSnapshot"),bundleName:ft("string"),bundle:ft("string")};class dc extends Is{data(e={}){return super.data(e)}}class Oo{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Ya(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new dc(this._firestore,this._userDataWriter,i.key,i,new Ya(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ae(G.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((f=>{const m=new dc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ya(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:m,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const m=new dc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ya(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,v=-1;return f.type!==0&&(y=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),v=h.indexOf(f.doc.key)),{type:lk(f.type),doc:m,oldIndex:y,newIndex:v}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ae(G.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Oo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ap.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function lk(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ve(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fw(n){n=pr(n,ot);const e=pr(n.firestore,Yo);return GP(xp(e),n._key).then((t=>hk(e,n,t)))}Oo._jsonSchemaVersion="firestore/querySnapshot/1.0",Oo._jsonSchema={type:ft("string",Oo._jsonSchemaVersion),bundleSource:ft("string","QuerySnapshot"),bundleName:ft("string"),bundle:ft("string")};class jw extends ak{constructor(e){super(),this.firestore=e}convertBytes(e){return new An(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,t)}}function Dl(n){n=pr(n,xs);const e=pr(n.firestore,Yo),t=xp(e),i=new jw(e);return ok(n._query),KP(t,n._query).then((o=>new Oo(e,i,n,o)))}function zw(n,e,t){n=pr(n,ot);const i=pr(n.firestore,Yo),o=Uw(n.converter,e,t);return jp(i,[xw(lh(i),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,Hn.none())])}function uk(n,e,t,...i){n=pr(n,ot);const o=pr(n.firestore,Yo),l=lh(o);let h;return h=typeof(e=lt(e))=="string"||e instanceof oh?nk(l,"updateDoc",n._key,e,t,i):tk(l,"updateDoc",n._key,e),jp(o,[h.toMutation(n._key,Hn.exists(!0))])}function ck(n,e){const t=pr(n.firestore,Yo),i=Jo(n),o=Uw(n.converter,e);return jp(t,[xw(lh(n.firestore),"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,Hn.exists(!1))]).then((()=>i))}function jp(n,e){return(function(i,o){const l=new jr;return i.asyncQueue.enqueueAndForget((async()=>bP(await HP(i),o,l))),l.promise})(xp(n),e)}function hk(n,e,t){const i=t.docs.get(e._key),o=new jw(n);return new Is(n,o,e._key,i,new Ya(t.hasPendingWrites,t.fromCache),e.converter)}function Lf(){return new Op("serverTimestamp")}(function(e,t=!0){(function(o){Wo=o})(Ps),Ni(new zr("firestore",((i,{instanceIdentifier:o,options:l})=>{const h=i.getProvider("app").getImmediate(),f=new Yo(new rR(i.getProvider("auth-internal")),new oR(h,i.getProvider("app-check-internal")),(function(y,v){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ae(G.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hl(y.options.projectId,v)})(h,o),h);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),Cn(By,$y,e),Cn(By,$y,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dk="type.googleapis.com/google.protobuf.Int64Value",fk="type.googleapis.com/google.protobuf.UInt64Value";function Bw(n,e){const t={};for(const i in n)n.hasOwnProperty(i)&&(t[i]=e(n[i]));return t}function Dc(n){if(n==null)return null;if(n instanceof Number&&(n=n.valueOf()),typeof n=="number"&&isFinite(n)||n===!0||n===!1||Object.prototype.toString.call(n)==="[object String]")return n;if(n instanceof Date)return n.toISOString();if(Array.isArray(n))return n.map(e=>Dc(e));if(typeof n=="function"||typeof n=="object")return Bw(n,e=>Dc(e));throw new Error("Data cannot be encoded in JSON: "+n)}function jo(n){if(n==null)return n;if(n["@type"])switch(n["@type"]){case dk:case fk:{const e=Number(n.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+n);return e}default:throw new Error("Data cannot be decoded from JSON: "+n)}return Array.isArray(n)?n.map(e=>jo(e)):typeof n=="function"||typeof n=="object"?Bw(n,e=>jo(e)):n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class sn extends Kn{constructor(e,t,i){super(`${zp}/${e}`,t||""),this.details=i,Object.setPrototypeOf(this,sn.prototype)}}function pk(n){if(n>=200&&n<300)return"ok";switch(n){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Oc(n,e){let t=pk(n),i=t,o;try{const l=e&&e.error;if(l){const h=l.status;if(typeof h=="string"){if(!z_[h])return new sn("internal","internal");t=z_[h],i=h}const f=l.message;typeof f=="string"&&(i=f),o=l.details,o!==void 0&&(o=jo(o))}}catch{}return t==="ok"?null:new sn(t,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e,t,i,o){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,nn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=t.getImmediate({optional:!0}),this.messaging=i.getImmediate({optional:!0}),this.auth||t.get().then(l=>this.auth=l,()=>{}),this.messaging||i.get().then(l=>this.messaging=l,()=>{}),this.appCheck||o==null||o.get().then(l=>this.appCheck=l,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),i=await this.getMessagingToken(),o=await this.getAppCheckToken(e);return{authToken:t,messagingToken:i,appCheckToken:o}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf="us-central1",gk=/^data: (.*?)(?:\n|$)/;function yk(n){let e=null;return{promise:new Promise((t,i)=>{e=setTimeout(()=>{i(new sn("deadline-exceeded","deadline-exceeded"))},n)}),cancel:()=>{e&&clearTimeout(e)}}}class _k{constructor(e,t,i,o,l=Mf,h=(...f)=>fetch(...f)){this.app=e,this.fetchImpl=h,this.emulatorOrigin=null,this.contextProvider=new mk(e,t,i,o),this.cancelAllRequests=new Promise(f=>{this.deleteService=()=>Promise.resolve(f())});try{const f=new URL(l);this.customDomain=f.origin+(f.pathname==="/"?"":f.pathname),this.region=Mf}catch{this.customDomain=null,this.region=l}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function vk(n,e,t){const i=ji(e);n.emulatorOrigin=`http${i?"s":""}://${e}:${t}`,i&&(jc(n.emulatorOrigin),zc("Functions",!0))}function Ek(n,e,t){const i=o=>Tk(n,e,o,{});return i.stream=(o,l)=>Sk(n,e,o,l),i}async function wk(n,e,t,i){t["Content-Type"]="application/json";let o;try{o=await i(n,{method:"POST",body:JSON.stringify(e),headers:t})}catch{return{status:0,json:null}}let l=null;try{l=await o.json()}catch{}return{status:o.status,json:l}}async function $w(n,e){const t={},i=await n.contextProvider.getContext(e.limitedUseAppCheckTokens);return i.authToken&&(t.Authorization="Bearer "+i.authToken),i.messagingToken&&(t["Firebase-Instance-ID-Token"]=i.messagingToken),i.appCheckToken!==null&&(t["X-Firebase-AppCheck"]=i.appCheckToken),t}function Tk(n,e,t,i){const o=n._url(e);return Ik(n,o,t,i)}async function Ik(n,e,t,i){t=Dc(t);const o={data:t},l=await $w(n,i),h=i.timeout||7e4,f=yk(h),m=await Promise.race([wk(e,o,l,n.fetchImpl),f.promise,n.cancelAllRequests]);if(f.cancel(),!m)throw new sn("cancelled","Firebase Functions instance was deleted.");const y=Oc(m.status,m.json);if(y)throw y;if(!m.json)throw new sn("internal","Response is not valid JSON object.");let v=m.json.data;if(typeof v>"u"&&(v=m.json.result),typeof v>"u")throw new sn("internal","Response is missing data field.");return{data:jo(v)}}function Sk(n,e,t,i){const o=n._url(e);return Ak(n,o,t,i||{})}async function Ak(n,e,t,i){var o;t=Dc(t);const l={data:t},h=await $w(n,i);h["Content-Type"]="application/json",h.Accept="text/event-stream";let f;try{f=await n.fetchImpl(e,{method:"POST",body:JSON.stringify(l),headers:h,signal:i==null?void 0:i.signal})}catch(V){if(V instanceof Error&&V.name==="AbortError"){const $=new sn("cancelled","Request was cancelled.");return{data:Promise.reject($),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject($)}}}}}}const j=Oc(0,null);return{data:Promise.reject(j),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(j)}}}}}}let m,y;const v=new Promise((V,j)=>{m=V,y=j});(o=i==null?void 0:i.signal)===null||o===void 0||o.addEventListener("abort",()=>{const V=new sn("cancelled","Request was cancelled.");y(V)});const T=f.body.getReader(),I=Rk(T,m,y,i==null?void 0:i.signal);return{stream:{[Symbol.asyncIterator](){const V=I.getReader();return{async next(){const{value:j,done:$}=await V.read();return{value:j,done:$}},async return(){return await V.cancel(),{done:!0,value:void 0}}}}},data:v}}function Rk(n,e,t,i){const o=(h,f)=>{const m=h.match(gk);if(!m)return;const y=m[1];try{const v=JSON.parse(y);if("result"in v){e(jo(v.result));return}if("message"in v){f.enqueue(jo(v.message));return}if("error"in v){const T=Oc(0,v);f.error(T),t(T);return}}catch(v){if(v instanceof sn){f.error(v),t(v);return}}},l=new TextDecoder;return new ReadableStream({start(h){let f="";return m();async function m(){if(i!=null&&i.aborted){const y=new sn("cancelled","Request was cancelled");return h.error(y),t(y),Promise.resolve()}try{const{value:y,done:v}=await n.read();if(v){f.trim()&&o(f.trim(),h),h.close();return}if(i!=null&&i.aborted){const I=new sn("cancelled","Request was cancelled");h.error(I),t(I),await n.cancel();return}f+=l.decode(y,{stream:!0});const T=f.split(`
`);f=T.pop()||"";for(const I of T)I.trim()&&o(I.trim(),h);return m()}catch(y){const v=y instanceof sn?y:Oc(0,null);h.error(v),t(v)}}},cancel(){return n.cancel()}})}const B_="@firebase/functions",$_="0.12.9";/**
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
 */const Ck="auth-internal",Pk="app-check-internal",kk="messaging-internal";function Nk(n){const e=(t,{instanceIdentifier:i})=>{const o=t.getProvider("app").getImmediate(),l=t.getProvider(Ck),h=t.getProvider(kk),f=t.getProvider(Pk);return new _k(o,l,h,f,i)};Ni(new zr(zp,e,"PUBLIC").setMultipleInstances(!0)),Cn(B_,$_,n),Cn(B_,$_,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xk(n=Bc(),e=Mf){const i=Tl(lt(n),zp).getImmediate({identifier:e}),o=Hf("functions");return o&&Dk(i,...o),i}function Dk(n,e,t){vk(lt(n),e,t)}function qw(n,e,t){return Ek(lt(n),e)}Nk();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww="firebasestorage.googleapis.com",Ok="storageBucket",Vk=120*1e3,bk=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends Kn{constructor(e,t,i=0){super(sf(e),`Firebase Storage: ${t} (${sf(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,yr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return sf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var gr;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(gr||(gr={}));function sf(n){return"storage/"+n}function Lk(){const n="An unknown error occurred, please check the error payload for server response.";return new yr(gr.UNKNOWN,n)}function Mk(){return new yr(gr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Uk(){return new yr(gr.CANCELED,"User canceled the upload/download.")}function Fk(n){return new yr(gr.INVALID_URL,"Invalid URL '"+n+"'.")}function jk(n){return new yr(gr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function q_(n){return new yr(gr.INVALID_ARGUMENT,n)}function Hw(){return new yr(gr.APP_DELETED,"The Firebase app was deleted.")}function zk(n){return new yr(gr.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=qn.makeFromUrl(e,t)}catch{return new qn(e,"")}if(i.path==="")return i;throw jk(e)}static makeFromUrl(e,t){let i=null;const o="([A-Za-z0-9.\\-_]+)";function l(ne){ne.path.charAt(ne.path.length-1)==="/"&&(ne.path_=ne.path_.slice(0,-1))}const h="(/(.*))?$",f=new RegExp("^gs://"+o+h,"i"),m={bucket:1,path:3};function y(ne){ne.path_=decodeURIComponent(ne.path)}const v="v[A-Za-z0-9_]+",T=t.replace(/[.]/g,"\\."),I="(/([^?#]*).*)?$",V=new RegExp(`^https?://${T}/${v}/b/${o}/o${I}`,"i"),j={bucket:1,path:3},$=t===Ww?"(?:storage.googleapis.com|storage.cloud.google.com)":t,L="([^?#]*)",oe=new RegExp(`^https?://${$}/${o}/${L}`,"i"),Z=[{regex:f,indices:m,postModify:l},{regex:V,indices:j,postModify:y},{regex:oe,indices:{bucket:1,path:2},postModify:y}];for(let ne=0;ne<Z.length;ne++){const Te=Z[ne],_e=Te.regex.exec(e);if(_e){const N=_e[Te.indices.bucket];let S=_e[Te.indices.path];S||(S=""),i=new qn(N,S),Te.postModify(i);break}}if(i==null)throw Fk(e);return i}}class Bk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $k(n,e,t){let i=1,o=null,l=null,h=!1,f=0;function m(){return f===2}let y=!1;function v(...L){y||(y=!0,e.apply(null,L))}function T(L){o=setTimeout(()=>{o=null,n(V,m())},L)}function I(){l&&clearTimeout(l)}function V(L,...oe){if(y){I();return}if(L){I(),v.call(null,L,...oe);return}if(m()||h){I(),v.call(null,L,...oe);return}i<64&&(i*=2);let Z;f===1?(f=2,Z=0):Z=(i+Math.random())*1e3,T(Z)}let j=!1;function $(L){j||(j=!0,I(),!y&&(o!==null?(L||(f=2),clearTimeout(o),T(0)):L||(f=1)))}return T(0),l=setTimeout(()=>{h=!0,$(!0)},t),$}function qk(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wk(n){return n!==void 0}function W_(n,e,t,i){if(i<e)throw q_(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw q_(`Invalid value for '${n}'. Expected ${t} or less.`)}function Hk(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const o=e(i)+"="+e(n[i]);t=t+o+"&"}return t=t.slice(0,-1),t}var Vc;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Vc||(Vc={}));/**
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
 */function Gk(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||o||l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e,t,i,o,l,h,f,m,y,v,T,I=!0,V=!1){this.url_=e,this.method_=t,this.headers_=i,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=h,this.callback_=f,this.errorCallback_=m,this.timeout_=y,this.progressCallback_=v,this.connectionFactory_=T,this.retry=I,this.isUsingEmulator=V,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((j,$)=>{this.resolve_=j,this.reject_=$,this.start_()})}start_(){const e=(i,o)=>{if(o){i(!1,new tc(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const h=f=>{const m=f.loaded,y=f.lengthComputable?f.total:-1;this.progressCallback_!==null&&this.progressCallback_(m,y)};this.progressCallback_!==null&&l.addUploadProgressListener(h),l.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(h),this.pendingConnection_=null;const f=l.getErrorCode()===Vc.NO_ERROR,m=l.getStatus();if(!f||Gk(m,this.additionalRetryCodes_)&&this.retry){const v=l.getErrorCode()===Vc.ABORT;i(!1,new tc(!1,null,v));return}const y=this.successCodes_.indexOf(m)!==-1;i(!0,new tc(y,l))})},t=(i,o)=>{const l=this.resolve_,h=this.reject_,f=o.connection;if(o.wasSuccessCode)try{const m=this.callback_(f,f.getResponse());Wk(m)?l(m):l()}catch(m){h(m)}else if(f!==null){const m=Lk();m.serverResponse=f.getErrorText(),this.errorCallback_?h(this.errorCallback_(f,m)):h(m)}else if(o.canceled){const m=this.appDelete_?Hw():Uk();h(m)}else{const m=Mk();h(m)}};this.canceled_?t(!1,new tc(!1,null,!0)):this.backoffId_=$k(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&qk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class tc{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function Qk(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function Xk(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Jk(n,e){e&&(n["X-Firebase-GMPID"]=e)}function Yk(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function Zk(n,e,t,i,o,l,h=!0,f=!1){const m=Hk(n.urlParams),y=n.url+m,v=Object.assign({},n.headers);return Jk(v,e),Qk(v,t),Xk(v,l),Yk(v,i),new Kk(y,n.method,v,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,h,f)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eN(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function tN(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */class bc{constructor(e,t){this._service=e,t instanceof qn?this._location=t:this._location=qn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new bc(e,t)}get root(){const e=new qn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return tN(this._location.path)}get storage(){return this._service}get parent(){const e=eN(this._location.path);if(e===null)return null;const t=new qn(this._location.bucket,e);return new bc(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw zk(e)}}function H_(n,e){const t=e==null?void 0:e[Ok];return t==null?null:qn.makeFromBucketSpec(t,n)}function nN(n,e,t,i={}){n.host=`${e}:${t}`;const o=ji(e);o&&(jc(`https://${n.host}/b`),zc("Storage",!0)),n._isUsingEmulator=!0,n._protocol=o?"https":"http";const{mockUserToken:l}=i;l&&(n._overrideAuthToken=typeof l=="string"?l:yv(l,n.app.options.projectId))}class rN{constructor(e,t,i,o,l,h=!1){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=o,this._firebaseVersion=l,this._isUsingEmulator=h,this._bucket=null,this._host=Ww,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Vk,this._maxUploadRetryTime=bk,this._requests=new Set,o!=null?this._bucket=qn.makeFromBucketSpec(o,this._host):this._bucket=H_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=qn.makeFromBucketSpec(this._url,e):this._bucket=H_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){W_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){W_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(nn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new bc(this,e)}_makeRequest(e,t,i,o,l=!0){if(this._deleted)return new Bk(Hw());{const h=Zk(e,this._appId,i,o,t,this._firebaseVersion,l,this._isUsingEmulator);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,t){const[i,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,o).getPromise()}}const G_="@firebase/storage",K_="0.13.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw="storage";function iN(n=Bc(),e){n=lt(n);const i=Tl(n,Gw).getImmediate({identifier:e}),o=Hf("storage");return o&&sN(i,...o),i}function sN(n,e,t,i={}){nN(n,e,t,i)}function oN(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new rN(t,i,o,e,Ps)}function aN(){Ni(new zr(Gw,oN,"PUBLIC").setMultipleInstances(!0)),Cn(G_,K_,""),Cn(G_,K_,"esm2017")}aN();const lN={apiKey:"AIzaSyBMwuPSGuAL3BC4KbmKv7BXwumOvQH4q_U",authDomain:"beastlyworkout-e05ac.firebaseapp.com",projectId:"beastlyworkout-e05ac",storageBucket:"beastlyworkout-e05ac.firebasestorage.app",messagingSenderId:"450850141428",appId:"1:450850141428:web:3cdba0ebf48acfa9f51aa1"},ph=Ev(lN),on=Z1(ph),Qn=XP(ph);iN(ph);const Kw=xk(ph,"us-central1");zA(on,Hv);qw(Kw,"bootstrapFirstAdmin");const uN=qw(Kw,"setUserRole");async function cN(n,e){return(await uN({uid:n,role:e})).data}async function Q_(){return on.currentUser?on.currentUser.getIdTokenResult(!0):null}async function Uf(n){const e=n??on.currentUser;if(!e)return null;try{const i=(await e.getIdTokenResult()).claims.role;return i==="admin"||i==="trainer"||i==="client"?i:null}catch(t){if((typeof t=="object"&&t&&"code"in t?String(t.code):"").includes("user-token-expired"))try{await e.getIdToken(!0);const l=(await e.getIdTokenResult()).claims.role;return l==="admin"||l==="trainer"||l==="client"?l:null}catch{return await qc(on),null}throw t}}function Qw(){return{createdAt:Lf(),updatedAt:Lf()}}function Xw(){return{updatedAt:Lf()}}function $i(){var e;const n=(e=on.currentUser)==null?void 0:e.uid;if(!n)throw new Error("unauthenticated");return n}async function Lc(n={}){const e=$i(),t=Jo(Qn,"users",e);return await zw(t,{uid:e,...Qw(),...n},{merge:!0}),t}async function Jw(n){const e=n??$i();return Fw(Jo(Qn,"users",e))}async function hN(n,e){const t=$i();await zw(Jo(Qn,"users",t,"private",n),{...e,...Xw()},{merge:!0})}async function dN(){return Dl(Xo(Qn,"users"))}async function fN(n,e){return Fw(Jo(Qn,"users",n,"private",e))}async function pN(n){const e=$i();return ck(Xo(Qn,"plans"),{trainerId:e,clientId:n.clientId,status:n.status,title:n.title,description:n.description??"",exercises:n.exercises,clientNotes:"",lastViewedAt:null,...Qw()})}async function Yw(n,e){const t=$i(),i=n==="client"?"clientId":"trainerId",o=hh(Xo(Qn,"plans"),fh(i,"==",t));return Dl(o)}async function mN(n,e){await uk(Jo(Qn,"plans",n),{...e,...Xw()})}async function gN(n){const e=$i(),t=hh(Xo(Qn,"workoutLogs"),fh("clientId","==",e),Fp("sessionDate","desc"));return Dl(t)}async function yN(n,e){const t=$i(),o=hh(Xo(Qn,"sessions"),fh("clientId","==",t),Fp("startsAt","desc"));return Dl(o)}async function _N(n){const e=$i(),t=hh(Xo(Qn,"metrics"),fh("clientId","==",e),Fp("measuredAt","desc"));return Dl(t)}function Zo(){const[n,e]=Q.useState(!0),[t,i]=Q.useState(on.currentUser),[o,l]=Q.useState(null);return Q.useEffect(()=>$v(on,async h=>{try{if(e(!0),i(h),!h){l(null);return}await Bp(h);const f=await Uf(h);l(f)}catch(f){(typeof f=="object"&&f&&"code"in f?String(f.code):"").includes("user-token-expired")&&(await qc(on),i(null)),l(null)}finally{e(!1)}}),[]),Q.useMemo(()=>({initializing:n,user:t,role:o,isAuthenticated:!!t}),[n,t,o])}const Ff=new Lr;Ff.setCustomParameters({prompt:"select_account"});async function Bp(n){(await Jw(n.uid)).exists()||await Lc({email:n.email??"",displayName:n.displayName??"",role:"client"})}async function X_(){try{const n=await a1(on,Ff);return await Bp(n.user),{redirected:!1,user:n.user}}catch(n){if(EN(n))return await f1(on,Ff),{redirected:!0,user:null};throw n}}async function vN(){try{const n=await m1(on);return n!=null&&n.user&&await Bp(n.user),n}catch(n){if((typeof n=="object"&&n&&"code"in n?String(n.code):"").includes("user-token-expired"))return await qc(on),null;throw n}}async function yl(){return qc(on)}function EN(n){if(!(typeof n=="object"&&n&&"code"in n))return!1;const e=String(n.code);return e==="auth/popup-blocked"||e==="auth/operation-not-supported-in-this-environment"}const wN=["lrnz.sga@gmail.com"];function Zw(n){return n.trim().toLowerCase()}function TN(n){const e=wN.join(",");return new Set(e.split(",").map(Zw).filter(Boolean))}const IN=TN();function of(n){return n?IN.has(Zw(n)):!1}function nc(n){return n.map(e=>({id:e.id,...e.data()}))}function Fr(n){if(typeof n=="object"&&n&&"code"in n){const e=String(n.code);return e.includes("permission-denied")?"Non hai i permessi per questa azione.":e.includes("unauthenticated")?"La sessione è scaduta. Accedi di nuovo.":e.includes("invalid-argument")?"Alcuni dati non sono corretti. Controlla e riprova.":e.includes("failed-precondition")?"Manca una configurazione tecnica lato server. Riprova tra poco.":e.includes("internal")?"Qualcosa non ha funzionato. Riprova tra pochi secondi.":"Operazione non completata. Riprova."}if(n instanceof Error){const e=n.message.toLowerCase();return e.includes("token")||e.includes("credential")?"Sessione non valida. Esci e accedi di nuovo.":"Si è verificato un problema. Riprova."}return"Operazione non riuscita."}const _s="bw_login_intent";function SN(){const{user:n,role:e}=Zo(),t=vl(),{showError:i}=Uc(),[o,l]=Q.useState(!1),[h,f]=Q.useState(""),[m,y]=Q.useState(!1);if(Q.useEffect(()=>{async function I(){try{await vN()}catch(V){const j=Fr(V);f(j),i(j)}}I()},[i]),Q.useEffect(()=>{async function I(){if(!(!n||e||sessionStorage.getItem(_s)!=="coach"||!of(n.email))){y(!0),f("Sto preparando il tuo accesso coach...");try{await Lc({email:n.email??"",displayName:n.displayName??"",coachAccessRequestedAt:new Date().toISOString()});for(let j=0;j<10;j+=1){await Q_();const $=await Uf(n);if($==="admin"||$==="trainer"){sessionStorage.removeItem(_s),t("/app/coach",{replace:!0});return}await new Promise(L=>setTimeout(L,700))}f("Sto ancora completando l’accesso. Riprova tra pochi secondi.")}catch(j){const $=Fr(j);f($),i($)}finally{y(!1)}}}I()},[n,e,t]),n&&e)return sessionStorage.removeItem(_s),O.jsx(Rn,{to:e==="client"?"/app/client":"/app/coach",replace:!0});if(n&&!e)return sessionStorage.getItem(_s)==="coach"&&of(n.email)?O.jsx("main",{className:"page page-center",children:O.jsxs("section",{className:"card auth-card",children:[O.jsx("p",{className:"eyebrow",children:"Beastly Workout"}),O.jsx("h1",{children:"Accesso Coach"}),O.jsx("p",{className:"hero-sub",children:m?"Attendi un attimo...":"Sto verificando il tuo account."}),h?O.jsx("p",{className:"message",children:h}):null,O.jsx("button",{className:"btn btn-ghost",disabled:m,onClick:()=>void yl(),type:"button",children:"Esci e cambia account"})]})}):O.jsx(Rn,{to:"/app/client",replace:!0});async function v(){l(!0),f("");try{if(sessionStorage.setItem(_s,"client"),(await X_()).redirected){f("Ti sto reindirizzando a Google...");return}t("/app/client",{replace:!0})}catch(I){const V=Fr(I);f(V),i(V)}finally{l(!1)}}async function T(){l(!0),f("");try{sessionStorage.setItem(_s,"coach");const I=await X_();if(I.redirected){f("Ti sto reindirizzando a Google...");return}if(!I.user){f("Accesso non completato. Riprova.");return}if(!of(I.user.email)){await yl(),f("Questo account non è abilitato per l’area coach. Usa accesso utente."),i("Questo account non è abilitato per l’area coach.");return}await Lc({email:I.user.email??"",displayName:I.user.displayName??"",coachAccessRequestedAt:new Date().toISOString()});for(let V=0;V<8;V+=1){await Q_();const j=await Uf(I.user);if(j==="admin"||j==="trainer"){sessionStorage.removeItem(_s),t("/app/coach",{replace:!0});return}await new Promise($=>setTimeout($,700))}f("Sto ancora completando l’accesso coach. Riprova tra qualche secondo.")}catch(I){const V=Fr(I);f(V),i(V)}finally{l(!1)}}return O.jsx("main",{className:"page page-center",children:O.jsxs("section",{className:"card auth-card",children:[O.jsx("p",{className:"eyebrow",children:"Beastly Workout"}),O.jsx("h1",{children:"Accedi con Google"}),O.jsx("p",{className:"hero-sub",children:"Entra in pochi secondi e inizia subito il tuo percorso."}),O.jsx("button",{className:"btn",disabled:o,onClick:()=>void v(),type:"button",children:o?"Connessione...":"Continua con Google"}),O.jsx("div",{className:"divider"}),O.jsx("h2",{children:"Sei un Coach?"}),O.jsx("p",{className:"hint",children:"Usa il tuo account coach per entrare nell'area professionale."}),O.jsx("button",{className:"btn btn-ghost",disabled:o,onClick:()=>void T(),type:"button",children:"Continua come Coach"}),h?O.jsx("p",{className:"message",children:h}):null]})})}function e0({role:n,title:e,subtitle:t,children:i}){return O.jsxs("main",{className:"page",children:[O.jsxs("section",{className:"hero",children:[O.jsx("p",{className:"eyebrow",children:n==="client"?"Area Cliente":"Area Coach"}),O.jsx("h1",{children:e}),O.jsx("p",{className:"hero-sub",children:t}),O.jsx("button",{className:"btn btn-ghost",type:"button",onClick:()=>void yl(),children:"Esci dal profilo"})]}),O.jsx("section",{className:"stack",children:i}),O.jsxs("nav",{className:"mobile-nav",children:[O.jsx(yI,{to:n==="client"?"/app/client":"/app/coach",children:"Home"}),O.jsx("button",{type:"button",onClick:()=>void yl(),children:"Esci"})]})]})}function AN(n){return Array.isArray(n)?n.map(e=>{if(!e||typeof e!="object")return null;const t=e;return{name:typeof t.name=="string"?t.name:"",sets:typeof t.sets=="number"?t.sets:Number(t.sets??0)||0,reps:typeof t.reps=="string"?t.reps:"",weight:typeof t.weight=="string"?t.weight:"",mediaUrl:typeof t.mediaUrl=="string"?t.mediaUrl:""}}).filter(e=>!!e):[]}function RN(){const{role:n,user:e}=Zo(),t=vl(),{showError:i}=Uc(),[o,l]=Q.useState([]),[h,f]=Q.useState([]),[m,y]=Q.useState([]),[v,T]=Q.useState([]),[I,V]=Q.useState(!1),[j,$]=Q.useState(!0);Q.useEffect(()=>{async function ne(){if(e)try{const _e=(await Jw(e.uid)).data();if(!(_e!=null&&_e.onboardingCompleted)){t("/onboarding",{replace:!0});return}}catch{t("/onboarding",{replace:!0});return}finally{$(!1)}}ne()},[e,t]);async function L(){V(!0);try{const[ne,Te,_e,N]=await Promise.all([Yw("client"),yN("client"),gN(),_N()]),S=nc(ne.docs);l(S),f(nc(Te.docs)),y(nc(_e.docs)),T(nc(N.docs))}catch(ne){i(Fr(ne))}finally{V(!1)}}Q.useEffect(()=>{n==="client"&&L()},[n]);const oe=Q.useMemo(()=>[...h].sort((ne,Te)=>new Date(ne.startsAt).getTime()-new Date(Te.startsAt).getTime()).find(ne=>new Date(ne.startsAt).getTime()>Date.now()),[h]),se=o[0],Z=AN(se==null?void 0:se.exercises);return e?j?O.jsx("main",{className:"page page-center",children:O.jsxs("section",{className:"card auth-card",children:[O.jsx("p",{className:"eyebrow",children:"Beastly Workout"}),O.jsx("h1",{children:"Prepariamo la tua area"}),O.jsx("p",{className:"hero-sub",children:"Sto verificando le informazioni del tuo profilo..."})]})}):O.jsxs(e0,{role:"client",subtitle:"Tieni traccia di allenamenti e progressi in modo semplice.",title:"La tua area",children:[O.jsxs("article",{className:"card",children:[O.jsx("h2",{children:"Riepilogo"}),O.jsxs("p",{className:"hint",children:["Programmi ricevuti: ",o.length]}),O.jsxs("p",{className:"hint",children:["Sessioni prenotate: ",h.length]}),O.jsxs("p",{className:"hint",children:["Allenamenti registrati: ",m.length]}),O.jsxs("p",{className:"hint",children:["Progressi inseriti: ",v.length]}),oe?O.jsxs("p",{className:"message success",children:["Prossima sessione: ",new Date(oe.startsAt).toLocaleString("it-IT")]}):null]}),O.jsxs("article",{className:"card",children:[O.jsx("h2",{children:"La tua scheda tecnica"}),se?O.jsxs(O.Fragment,{children:[O.jsx("p",{className:"hint",children:O.jsx("strong",{children:se.title})}),O.jsx("ul",{className:"list",children:Z.map((ne,Te)=>O.jsxs("li",{children:[O.jsx("strong",{children:ne.name||`Esercizio ${Te+1}`})," · ",ne.sets??"-"," serie"," · ",ne.reps||"-"," reps"," · ",ne.weight||"-",ne.mediaUrl?O.jsxs(O.Fragment,{children:[" · ",O.jsx("a",{href:ne.mediaUrl,target:"_blank",rel:"noreferrer",children:"Video/Immagine"})]}):null]},`plan-ex-${Te}`))})]}):O.jsx("p",{className:"hint",children:"La tua scheda non è ancora disponibile. Il coach la pubblicherà a breve."})]}),O.jsxs("article",{className:"card",children:[O.jsx("h2",{children:"Ultimi allenamenti"}),O.jsx("ul",{className:"list",children:m.slice(0,5).map(ne=>O.jsxs("li",{children:[O.jsx("strong",{children:ne.sessionDate})," · ",ne.notes||"Nessuna nota"]},ne.id))})]}),I?O.jsx("p",{className:"message",children:"Caricamento..."}):null]}):O.jsx(Rn,{to:"/auth",replace:!0})}function Ii(n){return typeof n=="string"?n:n==null?"":String(n)}function CN(n){return Array.isArray(n)?n.map(e=>{if(!e||typeof e!="object")return null;const t=e;return{name:Ii(t.name),sets:Number(t.sets??3)||3,reps:Ii(t.reps)||"10",weight:Ii(t.weight),mediaUrl:Ii(t.mediaUrl)}}).filter(e=>!!e):[]}function PN(){var pt,Me;const{role:n,user:e}=Zo(),{showError:t,showSuccess:i}=Uc(),[o,l]=Q.useState([]),[h,f]=Q.useState([]),[m,y]=Q.useState(!1),[v,T]=Q.useState(null),[I,V]=Q.useState(!1),[j,$]=Q.useState(""),[L,oe]=Q.useState(""),[se,Z]=Q.useState([{name:"",sets:3,reps:"10",weight:"",mediaUrl:""}]),[ne,Te]=Q.useState(""),[_e,N]=Q.useState("client"),S=h.find(W=>W.clientId===j);Q.useEffect(()=>{async function W(){if(!j){T(null);return}try{const te=await fN(j,"onboarding");T(te.data()??null)}catch{T(null)}}W()},[j]),Q.useEffect(()=>{if(!j)return;if(!S){oe(""),Z([{name:"",sets:3,reps:"10",weight:"",mediaUrl:""}]);return}oe(S.title??"");const W=CN(S.exercises).filter(te=>te.name.trim().length>0);Z(W.length>0?W:[{name:"",sets:3,reps:"10",weight:"",mediaUrl:""}])},[j,S==null?void 0:S.id]);async function C(){var W;if(n){y(!0);try{const b=(await dN()).docs.map(H=>({id:H.id,...H.data()})).filter(H=>H.id!==(e==null?void 0:e.uid)).sort((H,de)=>{const Ae=Ii(H.displayName||H.email||H.id).toLowerCase(),Re=Ii(de.displayName||de.email||de.id).toLowerCase();return Ae.localeCompare(Re)});l(b),!j&&((W=b[0])!=null&&W.id)&&$(b[0].id);try{const H=await Yw(n);f(H.docs.map(de=>({id:de.id,...de.data()})))}catch(H){f([]),t(Fr(H))}}catch(te){t(Fr(te))}finally{y(!1)}}}Q.useEffect(()=>{C()},[n,e==null?void 0:e.uid]);async function k(W,te){y(!0);try{await W(),i(te),await C()}catch(re){t(Fr(re))}finally{y(!1)}}function D(){Z(W=>[...W,{name:"",sets:3,reps:"10",weight:"",mediaUrl:""}])}function M(W){Z(te=>te.length<=1?te:te.filter((re,b)=>b!==W))}function R(W,te){Z(re=>re.map((b,H)=>H===W?{...b,...te}:b))}async function Ye(){const W=se.map(te=>({name:te.name.trim(),sets:Number(te.sets)||0,reps:te.reps.trim(),weight:te.weight.trim(),mediaUrl:te.mediaUrl.trim()})).filter(te=>te.name.length>0);if(W.length===0){t("Aggiungi almeno un esercizio con nome.");return}S?await k(()=>mN(S.id,{title:L,status:"active",exercises:W}),"Scheda aggiornata con successo."):await k(()=>pN({clientId:j,title:L,status:"active",exercises:W}),"Scheda creata e subito visibile al cliente."),V(!1)}function wt(){if(!j){t("Seleziona prima un cliente.");return}if(!L.trim()){t("Inserisci un titolo per la scheda.");return}V(!0)}return O.jsxs(e0,{role:n==="trainer"?"trainer":"admin",subtitle:"Gestisci clienti, programmi e appuntamenti da un unico posto.",title:"Area Coach",children:[O.jsxs("article",{className:"card",children:[O.jsx("h2",{children:"Crea scheda cliente"}),O.jsxs("label",{children:["Clienti registrati",O.jsxs("select",{value:j,onChange:W=>$(W.target.value),children:[o.length===0?O.jsx("option",{value:"",children:"Nessun cliente disponibile"}):null,o.map(W=>O.jsx("option",{value:W.id,children:Ii(W.displayName).trim()||Ii(W.email)||W.id},W.id))]})]}),O.jsx("button",{className:"btn btn-ghost",type:"button",onClick:()=>void C(),children:"Aggiorna lista clienti"}),O.jsxs("label",{children:["Titolo programma",O.jsx("input",{value:L,onChange:W=>oe(W.target.value),placeholder:"Forza 4 settimane"})]}),O.jsx("p",{className:"hint",children:S?"Questo cliente ha già una scheda: puoi modificarla.":"Questo cliente non ha ancora una scheda: ne creerai una nuova."}),O.jsxs("article",{className:"card",style:{boxShadow:"none",border:"1px dashed rgba(18,18,18,0.16)"},children:[O.jsx("h2",{children:"Informazioni del cliente"}),O.jsxs("p",{className:"hint",children:["Obiettivo: ",((pt=v==null?void 0:v.goal)==null?void 0:pt.trim())||"Non disponibile"]}),O.jsxs("p",{className:"hint",children:["Livello: ",(v==null?void 0:v.experienceLevel)||"Non disponibile"]}),O.jsxs("p",{className:"hint",children:["Allenamenti a settimana: ",(v==null?void 0:v.trainingDaysPerWeek)??"Non disponibile"]}),O.jsxs("p",{className:"hint",children:["Note: ",((Me=v==null?void 0:v.notes)==null?void 0:Me.trim())||"Nessuna nota inserita"]})]}),O.jsx("button",{className:"btn",disabled:!j||!L||m,onClick:wt,type:"button",children:S?"Modifica scheda":"Crea scheda"})]}),I?O.jsx("section",{className:"modal-overlay",role:"dialog","aria-modal":"true",children:O.jsxs("article",{className:"card modal-card",children:[O.jsx("h2",{children:S?"Modifica scheda":"Compila la scheda"}),O.jsx("p",{className:"hint",children:"Aggiungi esercizi uno alla volta per completare il programma."}),se.map((W,te)=>O.jsxs("article",{className:"card",style:{boxShadow:"none",border:"1px solid rgba(18,18,18,0.10)"},children:[O.jsxs("h2",{children:["Esercizio ",te+1]}),O.jsxs("label",{children:["Nome esercizio",O.jsx("input",{value:W.name,onChange:re=>R(te,{name:re.target.value}),placeholder:"Es. Squat bilanciere"})]}),O.jsxs("label",{children:["Numero serie",O.jsx("input",{type:"number",min:1,value:W.sets,onChange:re=>R(te,{sets:Number(re.target.value)})})]}),O.jsxs("label",{children:["Ripetizioni",O.jsx("input",{value:W.reps,onChange:re=>R(te,{reps:re.target.value}),placeholder:"Es. 8-10"})]}),O.jsxs("label",{children:["Peso",O.jsx("input",{value:W.weight,onChange:re=>R(te,{weight:re.target.value}),placeholder:"Es. 40kg o corpo libero"})]}),O.jsxs("label",{children:["URL video o immagine",O.jsx("input",{value:W.mediaUrl,onChange:re=>R(te,{mediaUrl:re.target.value}),placeholder:"https://..."})]}),O.jsx("button",{className:"btn btn-ghost",type:"button",onClick:()=>M(te),children:"Rimuovi esercizio"})]},`exercise-${te}`)),O.jsx("button",{className:"btn btn-ghost",type:"button",onClick:D,children:"Aggiungi esercizio"}),O.jsx("button",{className:"btn",type:"button",disabled:m,onClick:()=>void Ye(),children:S?"Salva modifiche":"Salva scheda tecnica"}),O.jsx("button",{className:"btn btn-ghost",type:"button",onClick:()=>V(!1),children:"Chiudi"})]})}):null,n==="admin"?O.jsxs("article",{className:"card",children:[O.jsx("h2",{children:"Gestione accessi"}),O.jsxs("label",{children:["Codice utente",O.jsx("input",{value:ne,onChange:W=>Te(W.target.value),placeholder:"Inserisci il codice utente"})]}),O.jsxs("label",{children:["Profilo accesso",O.jsxs("select",{value:_e,onChange:W=>N(W.target.value),children:[O.jsx("option",{value:"admin",children:"Admin"}),O.jsx("option",{value:"trainer",children:"Coach"}),O.jsx("option",{value:"client",children:"Cliente"})]})]}),O.jsx("button",{className:"btn",disabled:!ne||m,onClick:()=>void k(()=>cN(ne,_e),"Accesso aggiornato."),type:"button",children:"Aggiorna accesso"})]}):null,O.jsxs("article",{className:"card",children:[O.jsx("h2",{children:"Panoramica"}),O.jsxs("p",{className:"hint",children:["Clienti registrati: ",o.length]}),O.jsxs("p",{className:"hint",children:["Programmi creati: ",h.length]}),O.jsx("ul",{className:"list",children:h.slice(0,5).map(W=>{var te;return O.jsxs("li",{children:[O.jsx("strong",{children:W.title})," · ",((te=W.exercises)==null?void 0:te.length)??0," esercizi · cliente ",W.clientId]},W.id)})})]}),m?O.jsx("p",{className:"message",children:"Caricamento..."}):null]})}function kN(){const{user:n,role:e}=Zo(),t=vl(),{showError:i,showSuccess:o}=Uc(),[l,h]=Q.useState((n==null?void 0:n.displayName)??""),[f,m]=Q.useState(""),[y,v]=Q.useState("beginner"),[T,I]=Q.useState(3),[V,j]=Q.useState(""),[$,L]=Q.useState(!1);if(!n)return O.jsx(Rn,{to:"/auth",replace:!0});if(e==="admin"||e==="trainer")return O.jsx(Rn,{to:"/app/coach",replace:!0});const oe=n.email??"";async function se(){L(!0);try{await Lc({displayName:l.trim(),email:oe,role:"client",requestedRole:"client",onboardingStatus:"completed",onboardingCompleted:!0,onboardingUpdatedAt:new Date().toISOString()}),await hN("onboarding",{goal:f.trim(),experienceLevel:y,trainingDaysPerWeek:T,notes:V.trim()}),o("Perfetto, profilo salvato."),t("/app/client",{replace:!0})}catch(Z){i(Fr(Z))}finally{L(!1)}}return O.jsx("main",{className:"page page-center",children:O.jsxs("section",{className:"card auth-card",children:[O.jsx("p",{className:"eyebrow",children:"Onboarding Cliente"}),O.jsx("h1",{children:"Partiamo con i tuoi obiettivi"}),O.jsxs("p",{className:"hero-sub",children:["Completa queste informazioni per iniziare al meglio. Account: ",O.jsx("strong",{children:oe})]}),O.jsxs("label",{children:["Come ti chiami?",O.jsx("input",{value:l,onChange:Z=>h(Z.target.value),placeholder:"Nome e cognome"})]}),O.jsxs("label",{children:["Qual è il tuo obiettivo?",O.jsx("input",{value:f,onChange:Z=>m(Z.target.value),placeholder:"Es. perdere peso, aumentare forza, tonificare"})]}),O.jsxs("label",{children:["Livello di allenamento",O.jsxs("select",{value:y,onChange:Z=>v(Z.target.value),children:[O.jsx("option",{value:"beginner",children:"Principiante"}),O.jsx("option",{value:"intermediate",children:"Intermedio"}),O.jsx("option",{value:"advanced",children:"Avanzato"})]})]}),O.jsxs("label",{children:["Quanti giorni ti alleni a settimana?",O.jsx("input",{value:T,onChange:Z=>I(Number(Z.target.value)),type:"number",min:1,max:7})]}),O.jsxs("label",{children:["Informazioni utili",O.jsx("textarea",{value:V,onChange:Z=>j(Z.target.value),placeholder:"Es. infortuni, orari preferiti, esigenze specifiche"})]}),O.jsx("button",{className:"btn",disabled:$||!l||!f,type:"button",onClick:()=>void se(),children:$?"Salvataggio...":"Continua"}),O.jsx("button",{className:"btn btn-ghost",type:"button",onClick:()=>void yl(),children:"Esci e cambia account"})]})})}function t0(){return O.jsx("main",{className:"page page-center",children:O.jsxs("div",{className:"card",children:[O.jsx("p",{className:"eyebrow",children:"Gym PT"}),O.jsx("h1",{children:"Caricamento in corso"})]})})}class NN extends Q.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){console.error("App render error:",e)}render(){return this.state.hasError?O.jsx("main",{className:"page page-center",children:O.jsxs("section",{className:"card auth-card",children:[O.jsx("p",{className:"eyebrow",children:"Beastly Workout"}),O.jsx("h1",{children:"Qualcosa non ha funzionato"}),O.jsx("p",{className:"hero-sub",children:"Ricarica la pagina o esci e rientra nel tuo profilo."}),O.jsx("button",{className:"btn btn-ghost",type:"button",onClick:()=>window.location.assign("/auth"),children:"Torna all'accesso"})]})}):this.props.children}}function J_({allow:n,children:e}){const{user:t,role:i,initializing:o}=Zo();return o?O.jsx(t0,{}):t?i?n.includes(i)?e:O.jsx(Rn,{to:i==="client"?"/app/client":"/app/coach",replace:!0}):n.includes("client")?e:O.jsx(Rn,{to:"/onboarding",replace:!0}):O.jsx(Rn,{to:"/auth",replace:!0})}function xN(){const{user:n,role:e,initializing:t}=Zo();return t?O.jsx(t0,{}):n?e?O.jsx(Rn,{to:e==="client"?"/app/client":"/app/coach",replace:!0}):O.jsx(Rn,{to:"/app/client",replace:!0}):O.jsx(Rn,{to:"/auth",replace:!0})}function DN(){return O.jsx(NN,{children:O.jsxs(aI,{children:[O.jsx(vs,{path:"/",element:O.jsx(xN,{})}),O.jsx(vs,{path:"/auth",element:O.jsx(SN,{})}),O.jsx(vs,{path:"/onboarding",element:O.jsx(kN,{})}),O.jsx(vs,{path:"/app/coach",element:O.jsx(J_,{allow:["admin","trainer"],children:O.jsx(PN,{})})}),O.jsx(vs,{path:"/app/client",element:O.jsx(J_,{allow:["client"],children:O.jsx(RN,{})})}),O.jsx(vs,{path:"*",element:O.jsx(Rn,{to:"/",replace:!0})})]})})}mT.createRoot(document.getElementById("root")).render(O.jsx(Z_.StrictMode,{children:O.jsx(vI,{children:O.jsx(pI,{children:O.jsx(DN,{})})})}));
