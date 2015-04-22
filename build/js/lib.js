/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-flexbox-flexboxlegacy-draganddrop-hashchange-history-audio-video-input-inputtypes-localstorage-websockets-webworkers-geolocation-webgl-shiv-cssclasses-testprop-testallprops-hasevent-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(prefixes.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}function G(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)s[c[d]]=c[d]in k;return s.list&&(s.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),s}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),r[a[d]]=!!e;return r}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=B(e[d],"function"),B(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.flexbox=function(){return F("flexWrap")},q.flexboxlegacy=function(){return F("boxDirection")},q.webgl=function(){return!!a.WebGLRenderingContext},q.geolocation=function(){return"geolocation"in navigator},q.hashchange=function(){return w("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},q.history=function(){return!!a.history&&!!history.pushState},q.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},q.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},q.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},q.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},q.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},q.webworkers=function(){return!!a.Worker};for(var H in q)y(q,H)&&(v=H.toLowerCase(),e[v]=q[H](),t.push((e[v]?"":"no-")+v));return e.input||G(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._domPrefixes=p,e._cssomPrefixes=o,e.hasEvent=w,e.testProp=function(a){return D([a])},e.testAllProps=F,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
/*
 AngularJS v1.4.0-rc.0
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(P,X,u){'use strict';function J(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.4.0-rc.0/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Qa(b){if(null==b||Ra(b))return!1;var a=b.length;return b.nodeType===
ma&&a?!0:C(b)||K(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function n(b,a,c){var d,e;if(b)if(H(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(K(b)||Qa(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==n)b.forEach(a,c,b);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d,b);return b}function Od(b,a,c){for(var d=Object.keys(b).sort(),e=0;e<d.length;e++)a.call(c,
b[d[e]],d[e]);return d}function kc(b){return function(a,c){b(c,a)}}function Pd(){return++jb}function lc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function Kb(b,a,c){for(var d=b.$$hashKey,e=0,f=a.length;e<f;++e){var h=a[e];if(D(h)||H(h))for(var g=Object.keys(h),l=0,k=g.length;l<k;l++){var m=g[l],r=h[m];c&&D(r)?(D(b[m])||(b[m]=K(r)?[]:{}),Kb(b[m],[r],!0)):b[m]=r}}lc(b,d);return b}function Q(b){return Kb(b,pa.call(arguments,1),!1)}function Qd(b){return Kb(b,pa.call(arguments,1),!0)}function aa(b){return parseInt(b,
10)}function Lb(b,a){return Q(Object.create(b),a)}function s(){}function Sa(b){return b}function na(b){return function(){return b}}function E(b){return"undefined"===typeof b}function x(b){return"undefined"!==typeof b}function D(b){return null!==b&&"object"===typeof b}function C(b){return"string"===typeof b}function V(b){return"number"===typeof b}function da(b){return"[object Date]"===qa.call(b)}function H(b){return"function"===typeof b}function Ta(b){return"[object RegExp]"===qa.call(b)}function Ra(b){return b&&
b.window===b}function Ua(b){return b&&b.$evalAsync&&b.$watch}function Va(b){return"boolean"===typeof b}function mc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Rd(b){var a={};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function ra(b){return N(b.nodeName||b[0]&&b[0].nodeName)}function Wa(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return c}function sa(b,a,c,d){if(Ra(b)||Ua(b))throw Da("cpws");if(nc.test(qa.call(a)))throw Da("cpta");if(a){if(b===a)throw Da("cpi");
c=c||[];d=d||[];if(D(b)){var e=c.indexOf(b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(K(b))for(var f=a.length=0;f<b.length;f++)e=sa(b[f],null,c,d),D(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);else{var h=a.$$hashKey;K(a)?a.length=0:n(a,function(b,c){delete a[c]});for(f in b)b.hasOwnProperty(f)&&(e=sa(b[f],null,c,d),D(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e);lc(a,h)}}else if(a=b)K(b)?a=sa(b,[],c,d):nc.test(qa.call(b))?a=new b.constructor(b):da(b)?a=new Date(b.getTime()):Ta(b)?(a=new RegExp(b.source,
b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):D(b)&&(e=Object.create(Object.getPrototypeOf(b)),a=sa(b,e,c,d));return a}function ea(b,a){if(K(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(D(b))for(c in a=a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=b[c];return a||b}function ia(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(K(b)){if(!K(a))return!1;if((c=b.length)==a.length){for(d=0;d<
c;d++)if(!ia(b[d],a[d]))return!1;return!0}}else{if(da(b))return da(a)?ia(b.getTime(),a.getTime()):!1;if(Ta(b))return Ta(a)?b.toString()==a.toString():!1;if(Ua(b)||Ua(a)||Ra(b)||Ra(a)||K(a)||da(a)||Ta(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!H(b[d])){if(!ia(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==u&&!H(a[d]))return!1;return!0}return!1}function Xa(b,a,c){return b.concat(pa.call(a,c))}function oc(b,a){var c=2<arguments.length?pa.call(arguments,
2):[];return!H(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,Xa(c,arguments,0)):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Sd(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?c=u:Ra(a)?c="$WINDOW":a&&X===a?c="$DOCUMENT":Ua(a)&&(c="$SCOPE");return c}function Ya(b,a){if("undefined"===typeof b)return u;V(a)||(a=a?2:null);return JSON.stringify(b,Sd,a)}function pc(b){return C(b)?JSON.parse(b):b}function qc(b,
a){var c=Date.parse("Jan 01, 1970 00:00:00 "+b)/6E4;return isNaN(c)?a:c}function Mb(b,a,c){c=c?-1:1;var d=qc(a,b.getTimezoneOffset());a=b;b=c*(d-b.getTimezoneOffset());a=new Date(a.getTime());a.setMinutes(a.getMinutes()+b);return a}function ta(b){b=F(b).clone();try{b.empty()}catch(a){}var c=F("<div>").append(b).html();try{return b[0].nodeType===Za?N(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+N(b)})}catch(d){return N(c)}}function rc(b){try{return decodeURIComponent(b)}catch(a){}}
function sc(b){var a={},c,d;n((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=rc(c[0]),x(d)&&(b=x(c[1])?rc(c[1]):!0,tc.call(a,d)?K(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Nb(b){var a=[];n(b,function(b,d){K(b)?n(b,function(b){a.push(ua(d,!0)+(!0===b?"":"="+ua(b,!0)))}):a.push(ua(d,!0)+(!0===b?"":"="+ua(b,!0)))});return a.length?a.join("&"):""}function kb(b){return ua(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ua(b,a){return encodeURIComponent(b).replace(/%40/gi,
"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function Td(b,a){var c,d,e=Ka.length;for(d=0;d<e;++d)if(c=Ka[d]+a,C(c=b.getAttribute(c)))return c;return null}function Ud(b,a){var c,d,e={};n(Ka,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});n(Ka,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Td(c,"strict-di"),
a(c,d?[d]:[],e))}function uc(b,a,c){D(c)||(c={});c=Q({strictDi:!1},c);var d=function(){b=F(b);if(b.injector()){var d=b[0]===X?"document":ta(b);throw Da("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");d=$a(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",
d);c(b)(a)})}]);return d},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;P&&e.test(P.name)&&(c.debugInfoEnabled=!0,P.name=P.name.replace(e,""));if(P&&!f.test(P.name))return d();P.name=P.name.replace(f,"");ba.resumeBootstrap=function(b){n(b,function(b){a.push(b)});return d()};H(ba.resumeDeferredBootstrap)&&ba.resumeDeferredBootstrap()}function Vd(){P.name="NG_ENABLE_DEBUG_INFO!"+P.name;P.location.reload()}function Wd(b){b=ba.element(b).injector();if(!b)throw Da("test");return b.get("$$testability")}
function vc(b,a){a=a||"_";return b.replace(Xd,function(b,d){return(d?a:"")+b.toLowerCase()})}function Yd(){var b;if(!wc){var a=lb();ja=P.jQuery;x(a)&&(ja=null===a?u:P[a]);ja&&ja.fn.on?(F=ja,Q(ja.fn,{scope:La.scope,isolateScope:La.isolateScope,controller:La.controller,injector:La.injector,inheritedData:La.inheritedData}),b=ja.cleanData,ja.cleanData=function(a){var d;if(Ob)Ob=!1;else for(var e=0,f;null!=(f=a[e]);e++)(d=ja._data(f,"events"))&&d.$destroy&&ja(f).triggerHandler("$destroy");b(a)}):F=R;ba.element=
F;wc=!0}}function Pb(b,a,c){if(!b)throw Da("areq",a||"?",c||"required");return b}function Ma(b,a,c){c&&K(b)&&(b=b[b.length-1]);Pb(H(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Na(b,a){if("hasOwnProperty"===b)throw Da("badname",a);}function xc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,h=0;h<f;h++)d=a[h],b&&(b=(e=b)[d]);return!c&&H(b)?oc(e,b):b}function mb(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;
if(!a)break;c.push(a)}while(a!==b);return F(c)}function ka(){return Object.create(null)}function Zd(b){function a(a,b,c){return a[b]||(a[b]=c())}var c=J("$injector"),d=J("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||J;return a(b,"module",function(){var b={};return function(f,h,g){if("hasOwnProperty"===f)throw d("badname","module");h&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(c,d,e,f){f||(f=b);return function(){f[e||"push"]([c,d,arguments]);return y}}if(!h)throw c("nomod",
f);var b=[],d=[],e=[],t=a("$injector","invoke","push",d),y={_invokeQueue:b,_configBlocks:d,_runBlocks:e,requires:h,name:f,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:a("$provide","decorator"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),
config:t,run:function(a){e.push(a);return this}};g&&t(g);return y})}})}function $d(b){Q(b,{bootstrap:uc,copy:sa,extend:Q,merge:Qd,equals:ia,element:F,forEach:n,injector:$a,noop:s,bind:oc,toJson:Ya,fromJson:pc,identity:Sa,isUndefined:E,isDefined:x,isString:C,isFunction:H,isObject:D,isNumber:V,isElement:mc,isArray:K,version:ae,isDate:da,lowercase:N,uppercase:nb,callbacks:{counter:0},getTestability:Wd,$$minErr:J,$$csp:ab,reloadWithDebugInfo:Vd});bb=Zd(P);try{bb("ngLocale")}catch(a){bb("ngLocale",[]).provider("$locale",
be)}bb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:ce});a.provider("$compile",yc).directive({a:de,input:zc,textarea:zc,form:ee,script:fe,select:ge,style:he,option:ie,ngBind:je,ngBindHtml:ke,ngBindTemplate:le,ngClass:me,ngClassEven:ne,ngClassOdd:oe,ngCloak:pe,ngController:qe,ngForm:re,ngHide:se,ngIf:te,ngInclude:ue,ngInit:ve,ngNonBindable:we,ngPluralize:xe,ngRepeat:ye,ngShow:ze,ngStyle:Ae,ngSwitch:Be,ngSwitchWhen:Ce,ngSwitchDefault:De,ngOptions:Ee,ngTransclude:Fe,ngModel:Ge,
ngList:He,ngChange:Ie,pattern:Ac,ngPattern:Ac,required:Bc,ngRequired:Bc,minlength:Cc,ngMinlength:Cc,maxlength:Dc,ngMaxlength:Dc,ngValue:Je,ngModelOptions:Ke}).directive({ngInclude:Le}).directive(ob).directive(Ec);a.provider({$anchorScroll:Me,$animate:Ne,$$animateQueue:Oe,$$AnimateRunner:Pe,$browser:Qe,$cacheFactory:Re,$controller:Se,$document:Te,$exceptionHandler:Ue,$filter:Fc,$interpolate:Ve,$interval:We,$http:Xe,$httpParamSerializer:Ye,$httpParamSerializerJQLike:Ze,$httpBackend:$e,$location:af,
$log:bf,$parse:cf,$rootScope:df,$q:ef,$$q:ff,$sce:gf,$sceDelegate:hf,$sniffer:jf,$templateCache:kf,$templateRequest:lf,$$testability:mf,$timeout:nf,$window:of,$$rAF:pf,$$asyncCallback:qf,$$jqLite:rf,$$HashMap:sf,$$cookieReader:tf})}])}function cb(b){return b.replace(uf,function(a,b,d,e){return e?d.toUpperCase():d}).replace(vf,"Moz$1")}function Gc(b){b=b.nodeType;return b===ma||!b||9===b}function Hc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Qb.test(b)){c=c||e.appendChild(a.createElement("div"));
d=(wf.exec(b)||["",""])[1].toLowerCase();d=fa[d]||fa._default;c.innerHTML=d[1]+b.replace(xf,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=Xa(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";n(f,function(a){e.appendChild(a)});return e}function R(b){if(b instanceof R)return b;var a;C(b)&&(b=U(b),a=!0);if(!(this instanceof R)){if(a&&"<"!=b.charAt(0))throw Rb("nosel");return new R(b)}if(a){a=X;var c;b=(c=yf.exec(b))?[a.createElement(c[1])]:
(c=Hc(b,a))?c.childNodes:[]}Ic(this,b)}function Sb(b){return b.cloneNode(!0)}function pb(b,a){a||qb(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)qb(c[d])}function Jc(b,a,c,d){if(x(d))throw Rb("offargs");var e=(d=rb(b))&&d.events,f=d&&d.handle;if(f)if(a)n(a.split(" "),function(a){if(x(c)){var d=e[a];Wa(d||[],c);if(d&&0<d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,f,!1),delete e[a]}function qb(b,
a){var c=b.ng339,d=c&&sb[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Jc(b)),delete sb[c],b.ng339=u))}function rb(b,a){var c=b.ng339,c=c&&sb[c];a&&!c&&(b.ng339=c=++zf,c=sb[c]={events:{},data:{},handle:u});return c}function Tb(b,a,c){if(Gc(b)){var d=x(c),e=!d&&a&&!D(a),f=!a;b=(b=rb(b,!e))&&b.data;if(d)b[a]=c;else{if(f)return b;if(e)return b&&b[a];Q(b,a)}}}function tb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+
a+" "):!1}function ub(b,a){a&&b.setAttribute&&n(a.split(" "),function(a){b.setAttribute("class",U((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+U(a)+" "," ")))})}function vb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");n(a.split(" "),function(a){a=U(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",U(c))}}function Ic(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==
a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Kc(b,a){return wb(b,"$"+(a||"ngController")+"Controller")}function wb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=K(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=F.data(b,a[d]))!==u)return c;b=b.parentNode||11===b.nodeType&&b.host}}function Lc(b){for(pb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}function Ub(b,a){a||pb(b);var c=b.parentNode;c&&c.removeChild(b)}function Af(b,a){a=a||P;if("complete"===a.document.readyState)a.setTimeout(b);
else F(a).on("load",b)}function Mc(b,a){var c=xb[a.toLowerCase()];return c&&Nc[ra(b)]&&c}function Bf(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Oc[a]}function Cf(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=a[e||c.type],h=f?f.length:0;if(h){if(E(c.immediatePropagationStopped)){var g=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();g&&g.call(c)}}c.isImmediatePropagationStopped=
function(){return!0===c.immediatePropagationStopped};1<h&&(f=ea(f));for(var l=0;l<h;l++)c.isImmediatePropagationStopped()||f[l].call(b,c)}};c.elem=b;return c}function rf(){this.$get=function(){return Q(R,{hasClass:function(b,a){b.attr&&(b=b[0]);return tb(b,a)},addClass:function(b,a){b.attr&&(b=b[0]);return vb(b,a)},removeClass:function(b,a){b.attr&&(b=b[0]);return ub(b,a)}})}}function Ea(b,a){var c=b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==
c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||Pd)():c+":"+b}function Oa(b,a){if(a){var c=0;this.nextUid=function(){return++c}}n(b,this.put,this)}function Df(b){return(b=b.toString().replace(Pc,"").match(Qc))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function $a(b,a){function c(a){return function(b,c){if(D(b))n(b,kc(a));else return a(b,c)}}function d(a,b){Na(a,"service");if(H(b)||K(b))b=t.instantiate(b);if(!b.$get)throw Fa("pget",a);return r[a+"Provider"]=b}function e(a,b){return function(){var c=
G.invoke(b,this);if(E(c))throw Fa("undef",a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,b):b})}function h(a){var b=[],c;n(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=t.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{C(a)?(c=bb(a),b=b.concat(h(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):H(a)?b.push(t.invoke(a)):K(a)?b.push(t.invoke(a)):Ma(a,"module")}catch(e){throw K(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==
e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Fa("modulerr",a,e.stack||e.message||e);}}});return b}function g(b,c){function d(a,e){if(b.hasOwnProperty(a)){if(b[a]===l)throw Fa("cdep",a+" <- "+k.join(" <- "));return b[a]}try{return k.unshift(a),b[a]=l,b[a]=c(a,e)}catch(f){throw b[a]===l&&delete b[a],f;}finally{k.shift()}}function e(b,c,f,h){"string"===typeof f&&(h=f,f=null);var g=[],k=$a.$$annotate(b,a,h),l,t,m;t=0;for(l=k.length;t<l;t++){m=k[t];if("string"!==typeof m)throw Fa("itkn",m);g.push(f&&
f.hasOwnProperty(m)?f[m]:d(m,h))}K(b)&&(b=b[l]);return b.apply(c,g)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((K(a)?a[a.length-1]:a).prototype||null);a=e(a,d,b,c);return D(a)||H(a)?a:d},get:d,annotate:$a.$$annotate,has:function(a){return r.hasOwnProperty(a+"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var l={},k=[],m=new Oa([],!0),r={$provide:{provider:c(d),factory:c(f),service:c(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,
b){return f(a,na(b),!1)}),constant:c(function(a,b){Na(a,"constant");r[a]=b;y[a]=b}),decorator:function(a,b){var c=t.get(a+"Provider"),d=c.$get;c.$get=function(){var a=G.invoke(d,c);return G.invoke(b,null,{$delegate:a})}}}},t=r.$injector=g(r,function(a,b){ba.isString(b)&&k.push(b);throw Fa("unpr",k.join(" <- "));}),y={},G=y.$injector=g(y,function(a,b){var c=t.get(a+"Provider",b);return G.invoke(c.$get,c,u,a)});n(h(b),function(a){G.invoke(a||s)});return G}function Me(){var b=!0;this.disableAutoScrolling=
function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===ra(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;c=h.yOffset;H(c)?c=c():mc(c)?(c=c[0],c="fixed"!==a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):V(c)||(c=0);c&&(b=b.getBoundingClientRect().top,a.scrollBy(0,b-c))}else a.scrollTo(0,0)}function h(a){a=C(a)?a:c.hash();var b;a?(b=g.getElementById(a))?f(b):
(b=e(g.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var g=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||Af(function(){d.$evalAsync(h)})});return h}]}function db(b,a){if(!b&&!a)return"";if(!b)return a;if(!a)return b;K(b)&&(b=b.join(" "));K(a)&&(a=a.join(" "));return b+" "+a}function Ef(b){C(b)&&(b=b.split(" "));var a={};n(b,function(b){b.length&&(a[b]=!0)});return a}function qf(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:
function(b){return a(b,0,!1)}}]}function Ff(b,a,c,d){function e(a){try{a.apply(null,pa.call(arguments,1))}finally{if(G--,0===G)for(;O.length;)try{O.pop()()}catch(b){c.error(b)}}}function f(){h();g()}function h(){a:{try{v=m.state;break a}catch(a){}v=void 0}v=E(v)?null:v;ia(v,B)&&(v=B);B=v}function g(){if(w!==l.url()||p!==v)w=l.url(),p=v,n(A,function(a){a(l.url(),v)})}var l=this,k=b.location,m=b.history,r=b.setTimeout,t=b.clearTimeout,y={};l.isMock=!1;var G=0,O=[];l.$$completeOutstandingRequest=e;l.$$incOutstandingRequestCount=
function(){G++};l.notifyWhenNoOutstandingRequests=function(a){0===G?a():O.push(a)};var v,p,w=k.href,q=a.find("base"),z=null;h();p=v;l.url=function(a,c,e){E(e)&&(e=null);k!==b.location&&(k=b.location);m!==b.history&&(m=b.history);if(a){var f=p===e;if(w===a&&(!d.history||f))return l;var g=w&&Ga(w)===Ga(a);w=a;p=e;!d.history||g&&f?(g||(z=a),c?k.replace(a):g?(c=k,e=a.indexOf("#"),a=-1===e?"":a.substr(e+1),c.hash=a):k.href=a):(m[c?"replaceState":"pushState"](e,"",a),h(),p=v);return l}return z||k.href.replace(/%27/g,
"'")};l.state=function(){return v};var A=[],M=!1,B=null;l.onUrlChange=function(a){if(!M){if(d.history)F(b).on("popstate",f);F(b).on("hashchange",f);M=!0}A.push(a);return a};l.$$applicationDestroyed=function(){F(b).off("hashchange popstate",f)};l.$$checkUrlChange=g;l.baseHref=function(){var a=q.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};l.defer=function(a,b){var c;G++;c=r(function(){delete y[c];e(a)},b||0);y[c]=!0;return c};l.defer.cancel=function(a){return y[a]?(delete y[a],
t(a),e(s),!0):!1}}function Qe(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new Ff(b,d,a,c)}]}function Re(){this.$get=function(){function b(b,d){function e(a){a!=r&&(t?t==a&&(t=a.n):t=a,f(a.n,a.p),f(a,r),r=a,r.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw J("$cacheFactory")("iid",b);var h=0,g=Q({},d,{id:b}),l={},k=d&&d.capacity||Number.MAX_VALUE,m={},r=null,t=null;return a[b]={put:function(a,b){if(!E(b)){if(k<Number.MAX_VALUE){var c=m[a]||(m[a]=
{key:a});e(c)}a in l||h++;l[a]=b;h>k&&this.remove(t.key);return b}},get:function(a){if(k<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return l[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=m[a];if(!b)return;b==r&&(r=b.p);b==t&&(t=b.n);f(b.n,b.p);delete m[a]}delete l[a];h--},removeAll:function(){l={};h=0;m={};r=t=null},destroy:function(){m=g=l=null;delete a[b]},info:function(){return Q({},g,{size:h})}}}var a={};b.info=function(){var b={};n(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};
return b}}function kf(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function yc(b,a){function c(a,b,c){var d=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,e={};n(a,function(a,f){var h=a.match(d);if(!h)throw ga("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:h[1][0],collection:"*"===h[2],optional:"?"===h[3],attrName:h[4]||f}});return e}function d(a){var b=a.charAt(0);if(!b||b!==N(b))throw ga("baddir",a);}var e={},f=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
h=/(([\w\-]+)(?:\:([^;]+))?;?)/,g=Rd("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,k=/^(on[a-z]+|formaction)$/;this.directive=function t(a,f){Na(a,"directive");C(a)?(d(a),Pb(f,"directiveFactory"),e.hasOwnProperty(a)||(e[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,d){var f=[];n(e[a],function(e,h){try{var g=b.invoke(e);H(g)?g={compile:na(g)}:!g.compile&&g.link&&(g.compile=na(g.link));g.priority=g.priority||0;g.index=h;g.name=g.name||a;g.require=g.require||
g.controller&&g.name;g.restrict=g.restrict||"EA";var l=g,k=g,t=g.name,m={isolateScope:null,bindToController:null};D(k.scope)&&(!0===k.bindToController?(m.bindToController=c(k.scope,t,!0),m.isolateScope={}):m.isolateScope=c(k.scope,t,!1));D(k.bindToController)&&(m.bindToController=c(k.bindToController,t,!0));if(D(m.bindToController)){var G=k.controller,S=k.controllerAs;if(!G)throw ga("noctrl",t);var n;a:if(S&&C(S))n=S;else{if(C(G)){var oa=Rc.exec(G);if(oa){n=oa[3];break a}}n=void 0}if(!n)throw ga("noident",
t);}var q=l.$$bindings=m;D(q.isolateScope)&&(g.$$isolateBindings=q.isolateScope);f.push(g)}catch(u){d(u)}});return f}])),e[a].push(f)):n(a,kc(t));return this};this.aHrefSanitizationWhitelist=function(b){return x(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return x(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};var m=!0;this.debugInfoEnabled=function(a){return x(a)?(m=a,this):m};this.$get=["$injector",
"$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,d,v,p,w,q,z,A,M){function B(a,b){try{a.addClass(b)}catch(c){}}function T(a,b,c,d,e){a instanceof F||(a=F(a));n(a,function(b,c){b.nodeType==Za&&b.nodeValue.match(/\S+/)&&(a[c]=F(b).wrap("<span></span>").parent()[0])});var f=Y(a,b,a,c,d,e);T.$$addScopeClass(a);var g=null;return function(b,c,d){Pb(b,"scope");d=d||{};var e=d.parentBoundTranscludeFn,h=d.transcludeControllers;
d=d.futureParentElement;e&&e.$$boundTransclude&&(e=e.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==ra(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?F(Vb(g,F("<div>").append(a).html())):c?La.clone.call(a):a;if(h)for(var k in h)d.data("$"+k+"Controller",h[k].instance);T.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,e);return d}}function Y(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,t,A,y;if(p)for(y=Array(c.length),m=0;m<h.length;m+=3)f=h[m],y[f]=c[f];else y=c;m=0;for(t=h.length;m<
t;)if(k=y[h[m++]],c=h[m++],f=h[m++],c){if(c.scope){if(l=a.$new(),T.$$addScopeInfo(F(k),l),A=c.$$destroyBindings)c.$$destroyBindings=null,l.$on("$destroyed",A)}else l=a;A=c.transcludeOnThisElement?S(a,c.transclude,e,c.elementTranscludeOnThisElement):!c.templateOnThisElement&&e?e:!e&&b?S(a,b):null;c(f,l,k,d,A,c)}else f&&f(a,k.childNodes,u,e)}for(var h=[],k,l,m,t,p,A=0;A<a.length;A++){k=new ca;l=ya(a[A],[],k,0===A?d:u,e);(f=l.length?x(l,a[A],k,b,c,null,[],[],f):null)&&f.scope&&T.$$addScopeClass(k.$$element);
k=f&&f.terminal||!(m=a[A].childNodes)||!m.length?null:Y(m,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(A,f,k),t=!0,p=p||f;f=null}return t?g:null}function S(a,b,c,d){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function ya(a,b,c,d,e){var g=c.$attr,k;switch(a.nodeType){case ma:J(b,wa(ra(a)),"E",d,e);for(var l,m,t,p=a.attributes,A=0,y=p&&p.length;A<
y;A++){var M=!1,G=!1;l=p[A];k=l.name;m=U(l.value);l=wa(k);if(t=ha.test(l))k=k.replace(Tc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});var B=l.replace(/(Start|End)$/,"");P(B)&&l===B+"Start"&&(M=k,G=k.substr(0,k.length-5)+"end",k=k.substr(0,k.length-6));l=wa(k.toLowerCase());g[l]=k;if(t||!c.hasOwnProperty(l))c[l]=m,Mc(a,l)&&(c[l]=!0);W(a,b,m,l,t);J(b,l,"A",d,e,M,G)}a=a.className;D(a)&&(a=a.animVal);if(C(a)&&""!==a)for(;k=h.exec(a);)l=wa(k[2]),J(b,l,"C",d,e)&&(c[l]=U(k[3])),a=
a.substr(k.index+k[0].length);break;case Za:za(b,a.nodeValue);break;case 8:try{if(k=f.exec(a.nodeValue))l=wa(k[1]),J(b,l,"M",d,e)&&(c[l]=U(k[2]))}catch(O){}}b.sort(L);return b}function oa(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ga("uterdir",b,c);a.nodeType==ma&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return F(d)}function Sc(a,b,c){return function(d,e,f,g,h){e=oa(e[0],b,c);return a(d,e,f,g,h)}}function x(a,
b,d,e,f,g,h,k,m){function t(a,b,c,d){if(a){c&&(a=Sc(a,c,d));a.require=s.require;a.directiveName=va;if(S===s||s.$$isolateScope)a=$(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=Sc(b,c,d));b.require=s.require;b.directiveName=va;if(S===s||s.$$isolateScope)b=$(b,{isolateScope:!0});k.push(b)}}function A(a,b,c,d){var e;if(C(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;e||(d="$"+b+"Controller",e=g?c.inheritedData(d):c.data(d));
if(!e&&!f)throw ga("ctreq",b,a);}else if(K(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=A(a,b[g],c,d);return e||null}function y(a,b,c,d,e,f){var g=ka(),h;for(h in d){var k=d[h],l={$scope:k===S||k.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},m=k.controller;"@"==m&&(m=b[k.name]);l=p(m,l,!0,k.controllerAs);g[k.name]=l;q||a.data("$"+k.name+"Controller",l.instance)}return g}function M(a,c,e,f,g,l){function m(a,b,c){var d;Ua(a)||(c=b,b=a,a=u);q&&(d=n);c||(c=q?w.parent():w);return g(a,b,d,c,I)}var t,
p,B,G,n,eb,w;b===e?(f=d,w=d.$$element):(w=F(e),f=new ca(w,d));S&&(G=c.$new(!0));g&&(eb=m,eb.$$boundTransclude=g);v&&(n=y(w,f,eb,v,G,c));S&&(T.$$addScopeInfo(w,G,!0,!(Y&&(Y===S||Y===S.$$originalDirective))),T.$$addScopeClass(w,!0),G.$$isolateBindings=S.$$isolateBindings,ba(c,f,G,G.$$isolateBindings,S,G));if(n){var z=S||O,oa;z&&n[z.name]&&(p=z.$$bindings.bindToController,(B=n[z.name])&&B.identifier&&p&&(oa=B,l.$$destroyBindings=ba(c,f,B.instance,p,z)));for(t in n){B=n[t];var ya=B();ya!==B.instance&&
(B.instance=ya,w.data("$"+s.name+"Controller",ya),B===oa&&(l.$$destroyBindings(),l.$$destroyBindings=ba(c,f,ya,p,z)))}}t=0;for(l=h.length;t<l;t++)p=h[t],aa(p,p.isolateScope?G:c,w,f,p.require&&A(p.directiveName,p.require,w,n),eb);var I=c;S&&(S.template||null===S.templateUrl)&&(I=G);a&&a(I,e.childNodes,u,g);for(t=k.length-1;0<=t;t--)p=k[t],aa(p,p.isolateScope?G:c,w,f,p.require&&A(p.directiveName,p.require,w,n),eb)}m=m||{};for(var B=-Number.MAX_VALUE,O,v=m.controllerDirectives,S=m.newIsolateScopeDirective,
Y=m.templateDirective,n=m.nonTlbTranscludeDirective,w=!1,z=!1,q=m.hasElementTranscludeDirective,I=d.$$element=F(b),s,va,L,J=e,za,N=0,P=a.length;N<P;N++){s=a[N];var Q=s.$$start,Wb=s.$$end;Q&&(I=oa(b,Q,Wb));L=u;if(B>s.priority)break;if(L=s.scope)s.templateUrl||(D(L)?(R("new/isolated scope",S||O,s,I),S=s):R("new/isolated scope",S,s,I)),O=O||s;va=s.name;!s.templateUrl&&s.controller&&(L=s.controller,v=v||ka(),R("'"+va+"' controller",v[va],s,I),v[va]=s);if(L=s.transclude)w=!0,s.$$tlb||(R("transclusion",
n,s,I),n=s),"element"==L?(q=!0,B=s.priority,L=I,I=d.$$element=F(X.createComment(" "+va+": "+d[va]+" ")),b=I[0],Z(f,pa.call(L,0),b),J=T(L,e,B,g&&g.name,{nonTlbTranscludeDirective:n})):(L=F(Sb(b)).contents(),I.empty(),J=T(L,e));if(s.template)if(z=!0,R("template",Y,s,I),Y=s,L=H(s.template)?s.template(I,d):s.template,L=fa(L),s.replace){g=s;L=Qb.test(L)?Uc(Vb(s.templateNamespace,U(L))):[];b=L[0];if(1!=L.length||b.nodeType!==ma)throw ga("tplrt",va,"");Z(f,I,b);P={$attr:{}};L=ya(b,[],P);var V=a.splice(N+
1,a.length-(N+1));S&&E(L);a=a.concat(L).concat(V);Vc(d,P);P=a.length}else I.html(L);if(s.templateUrl)z=!0,R("template",Y,s,I),Y=s,s.replace&&(g=s),M=Gf(a.splice(N,a.length-N),I,d,f,w&&J,h,k,{controllerDirectives:v,newIsolateScopeDirective:S,templateDirective:Y,nonTlbTranscludeDirective:n}),P=a.length;else if(s.compile)try{za=s.compile(I,d,J),H(za)?t(null,za,Q,Wb):za&&t(za.pre,za.post,Q,Wb)}catch(W){c(W,ta(I))}s.terminal&&(M.terminal=!0,B=Math.max(B,s.priority))}M.scope=O&&!0===O.scope;M.transcludeOnThisElement=
w;M.elementTranscludeOnThisElement=q;M.templateOnThisElement=z;M.transclude=J;m.hasElementTranscludeDirective=q;return M}function E(a){for(var b=0,c=a.length;b<c;b++)a[b]=Lb(a[b],{$$isolateScope:!0})}function J(b,d,f,g,h,k,l){if(d===h)return null;h=null;if(e.hasOwnProperty(d)){var m;d=a.get(d+"Directive");for(var p=0,A=d.length;p<A;p++)try{m=d[p],(g===u||g>m.priority)&&-1!=m.restrict.indexOf(f)&&(k&&(m=Lb(m,{$$start:k,$$end:l})),b.push(m),h=m)}catch(y){c(y)}}return h}function P(b){if(e.hasOwnProperty(b))for(var c=
a.get(b+"Directive"),d=0,f=c.length;d<f;d++)if(b=c[d],b.multiElement)return!0;return!1}function Vc(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;n(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});n(b,function(b,f){"class"==f?(B(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function Gf(a,b,c,e,f,g,
h,k){var l=[],m,t,p=b[0],A=a.shift(),y=Lb(A,{templateUrl:null,transclude:null,replace:null,$$originalDirective:A}),M=H(A.templateUrl)?A.templateUrl(b,c):A.templateUrl,G=A.templateNamespace;b.empty();d(z.getTrustedResourceUrl(M)).then(function(d){var O,v;d=fa(d);if(A.replace){d=Qb.test(d)?Uc(Vb(G,U(d))):[];O=d[0];if(1!=d.length||O.nodeType!==ma)throw ga("tplrt",A.name,M);d={$attr:{}};Z(e,b,O);var w=ya(O,[],d);D(A.scope)&&E(w);a=w.concat(a);Vc(c,d)}else O=p,b.html(d);a.unshift(y);m=x(a,O,c,f,b,A,g,
h,k);n(e,function(a,c){a==O&&(e[c]=b[0])});for(t=Y(b[0].childNodes,f);l.length;){d=l.shift();v=l.shift();var z=l.shift(),T=l.shift(),w=b[0];if(!d.$$destroyed){if(v!==p){var oa=v.className;k.hasElementTranscludeDirective&&A.replace||(w=Sb(O));Z(z,F(v),w);B(F(w),oa)}v=m.transcludeOnThisElement?S(d,m.transclude,T):T;m(t,d,w,e,v,m)}}l=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(m.transcludeOnThisElement&&(a=S(b,m.transclude,e)),m(t,b,c,d,a,m)))}}function L(a,b){var c=b.priority-
a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function R(a,b,c,d){if(b)throw ga("multidir",b.name,c.name,a,ta(d));}function za(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&T.$$addBindingClass(a);return function(a,c){var e=c.parent();b||T.$$addBindingClass(e);T.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Vb(a,b){a=N(a||"html");switch(a){case "svg":case "math":var c=X.createElement("div");
c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function V(a,b){if("srcdoc"==b)return z.HTML;var c=ra(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return z.RESOURCE_URL}function W(a,c,d,e,f){var h=V(a,e);f=g[e]||f;var l=b(d,!0,h,f);if(l){if("multiple"===e&&"select"===ra(a))throw ga("selmulti",ta(a));c.push({priority:100,compile:function(){return{pre:function(a,c,g){c=g.$$observers||(g.$$observers={});if(k.test(e))throw ga("nodomevents");
var m=g[e];m!==d&&(l=m&&b(m,!0,h,f),d=m);l&&(g[e]=l(a),(c[e]||(c[e]=[])).$$inter=!0,(g.$$observers&&g.$$observers[e].$$scope||a).$watch(l,function(a,b){"class"===e&&a!=b?g.$updateClass(a,b):g.$set(e,a)}))}}}})}}function Z(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var l=a.length;g<l;g++,h++)h<l?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=X.createDocumentFragment();a.appendChild(d);
F(c).data(F(d).data());ja?(Ob=!0,ja.cleanData([d])):delete F.cache[d[F.expando]];d=1;for(e=b.length;d<e;d++)f=b[d],F(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function $(a,b){return Q(function(){return a.apply(null,arguments)},a,b)}function aa(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,ta(d))}}function ba(a,c,d,e,f,g){var h;n(e,function(e,g){var l=e.attrName,k=e.optional,m,t,p,A;switch(e.mode){case "@":c.$observe(l,function(a){d[g]=a});c.$$observers[l].$$scope=a;c[l]&&(d[g]=b(c[l])(a));
break;case "=":if(k&&!c[l])break;t=v(c[l]);A=t.literal?ia:function(a,b){return a===b||a!==a&&b!==b};p=t.assign||function(){m=d[g]=t(a);throw ga("nonassign",c[l],f.name);};m=d[g]=t(a);k=function(b){A(b,d[g])||(A(b,m)?p(a,b=d[g]):d[g]=b);return m=b};k.$stateful=!0;k=e.collection?a.$watchCollection(c[l],k):a.$watch(v(c[l],k),null,t.literal);h=h||[];h.push(k);break;case "&":if(!c.hasOwnProperty(l)&&k)break;t=v(c[l]);if(t===s&&k)break;d[g]=function(b){return t(a,b)}}});e=h?function(){for(var a=0,b=h.length;a<
b;++a)h[a]()}:s;return g&&e!==s?(g.$on("$destroy",e),s):e}var ca=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};ca.prototype={$normalize:wa,$addClass:function(a){a&&0<a.length&&A.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&A.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Wc(a,b);c&&c.length&&A.addClass(this.$$element,c);(c=Wc(b,a))&&c.length&&A.removeClass(this.$$element,c)},
$set:function(a,b,d,e){var f=this.$$element[0],g=Mc(f,a),h=Bf(f,a),f=a;g?(this.$$element.prop(a,b),e=g):h&&(this[h]=b,f=h);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=vc(a,"-"));g=ra(this.$$element);if("a"===g&&"href"===a||"img"===g&&"src"===a)this[a]=b=M(b,"src"===a);else if("img"===g&&"srcset"===a){for(var g="",h=U(b),l=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,l=/\s/.test(h)?l:/(,)/,h=h.split(l),l=Math.floor(h.length/2),k=0;k<l;k++)var m=2*k,g=g+M(U(h[m]),!0),g=g+(" "+U(h[m+1]));
h=U(h[2*k]).split(/\s/);g+=M(U(h[0]),!0);2===h.length&&(g+=" "+U(h[1]));this[a]=b=g}!1!==d&&(null===b||b===u?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&n(a[f],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=ka()),e=d[a]||(d[a]=[]);e.push(b);w.$evalAsync(function(){!e.$$inter&&c.hasOwnProperty(a)&&b(c[a])});return function(){Wa(e,b)}}};var da=b.startSymbol(),ea=b.endSymbol(),fa="{{"==da||"}}"==ea?Sa:function(a){return a.replace(/\{\{/g,
da).replace(/}}/g,ea)},ha=/^ngAttr[A-Z]/;T.$$addBindingInfo=m?function(a,b){var c=a.data("$binding")||[];K(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:s;T.$$addBindingClass=m?function(a){B(a,"ng-binding")}:s;T.$$addScopeInfo=m?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:s;T.$$addScopeClass=m?function(a,b){B(a,b?"ng-isolate-scope":"ng-scope")}:s;return T}]}function wa(b){return cb(b.replace(Tc,""))}function Wc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),
f=0;a:for(;f<d.length;f++){for(var h=d[f],g=0;g<e.length;g++)if(h==e[g])continue a;c+=(0<c.length?" ":"")+h}return c}function Uc(b){b=F(b);var a=b.length;if(1>=a)return b;for(;a--;)8===b[a].nodeType&&Hf.call(b,a,1);return b}function Se(){var b={},a=!1;this.register=function(a,d){Na(a,"controller");D(a)?Q(b,a):b[a]=d};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(c,d){function e(a,b,c,d){if(!a||!D(a.$scope))throw J("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,
h,g,l){var k,m,r;g=!0===g;l&&C(l)&&(r=l);if(C(f)){l=f.match(Rc);if(!l)throw If("ctrlfmt",f);m=l[1];r=r||l[3];f=b.hasOwnProperty(m)?b[m]:xc(h.$scope,m,!0)||(a?xc(d,m,!0):u);Ma(f,m,!0)}if(g)return g=(K(f)?f[f.length-1]:f).prototype,k=Object.create(g||null),r&&e(h,r,k,m||f.name),Q(function(){var a=c.invoke(f,k,h,m);a!==k&&(D(a)||H(a))&&(k=a,r&&e(h,r,k,m||f.name));return k},{instance:k,identifier:r});k=c.instantiate(f,h,m);r&&e(h,r,k,m||f.name);return k}}]}function Te(){this.$get=["$window",function(b){return F(b.document)}]}
function Ue(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Xc(b){function a(a){return D(a)?da(a)?a.toISOString():Ya(a):a}return function(c){if(!c)return"";var d=[];Od(c,function(c,f){null===c||E(c)||(K(c)||D(c)&&b?n(c,function(h,g){var l=b?"["+(K(c)?"":g)+"]":"";d.push(ua(f+l)+"="+ua(a(h)))}):d.push(ua(f)+"="+ua(a(c))))});return 0<d.length?d.join("&"):""}}function Ye(){this.$get=function(){return Xc(!1)}}function Ze(){this.$get=function(){return Xc(!0)}}
function Xb(b,a){if(C(b)){var c=b.replace(Jf,"").trim();if(c){var d=a("Content-Type");(d=d&&0===d.indexOf(Yc))||(d=(d=c.match(Kf))&&Lf[d[0]].test(c));d&&(b=pc(c))}}return b}function Zc(b){var a=ka(),c;C(b)?n(b.split("\n"),function(b){c=b.indexOf(":");var e=N(U(b.substr(0,c)));b=U(b.substr(c+1));e&&(a[e]=a[e]?a[e]+", "+b:b)}):D(b)&&n(b,function(b,c){var f=N(c),h=U(b);f&&(a[f]=a[f]?a[f]+", "+h:h)});return a}function $c(b){var a;return function(c){a||(a=Zc(b));return c?(c=a[N(c)],void 0===c&&(c=null),
c):a}}function ad(b,a,c,d){if(H(d))return d(b,a,c);n(d,function(d){b=d(b,a,c)});return b}function Xe(){var b=this.defaults={transformResponse:[Xb],transformRequest:[function(a){return D(a)&&"[object File]"!==qa.call(a)&&"[object Blob]"!==qa.call(a)&&"[object FormData]"!==qa.call(a)?Ya(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ea(Yb),put:ea(Yb),patch:ea(Yb)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},a=!1;this.useApplyAsync=
function(b){return x(b)?(a=!!b,this):a};var c=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",function(d,e,f,h,g,l){function k(a){function c(a){var b=Q({},a);b.data=a.data?ad(a.data,a.headers,a.status,e.transformResponse):a.data;a=a.status;return 200<=a&&300>a?b:g.reject(b)}function d(a,b){var c,e={};n(a,function(a,d){H(a)?(c=a(b),null!=c&&(e[d]=c)):e[d]=a});return e}if(!ba.isObject(a))throw J("$http")("badreq",a);var e=Q({method:"get",
transformRequest:b.transformRequest,transformResponse:b.transformResponse,paramSerializer:b.paramSerializer},a);e.headers=function(a){var c=b.headers,e=Q({},a.headers),f,g,h,c=Q({},c.common,c[N(a.method)]);a:for(f in c){g=N(f);for(h in e)if(N(h)===g)continue a;e[f]=c[f]}return d(e,ea(a))}(a);e.method=nb(e.method);e.paramSerializer=C(e.paramSerializer)?l.get(e.paramSerializer):e.paramSerializer;var f=[function(a){var d=a.headers,e=ad(a.data,$c(d),u,a.transformRequest);E(e)&&n(d,function(a,b){"content-type"===
N(b)&&delete d[b]});E(a.withCredentials)&&!E(b.withCredentials)&&(a.withCredentials=b.withCredentials);return m(a,e).then(c,c)},u],h=g.when(e);for(n(y,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var k=f.shift(),h=h.then(a,k)}h.success=function(a){Ma(a,"fn");h.then(function(b){a(b.data,b.status,b.headers,e)});return h};h.error=function(a){Ma(a,"fn");h.then(null,function(b){a(b.data,
b.status,b.headers,e)});return h};return h}function m(c,f){function l(b,c,d,e){function f(){m(c,b,d,e)}M&&(200<=b&&300>b?M.put(Y,[b,c,Zc(d),e]):M.remove(Y));a?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function m(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?z.resolve:z.reject)({data:a,status:b,headers:$c(d),config:c,statusText:e})}function y(a){m(a.data,a.status,ea(a.headers()),a.statusText)}function n(){var a=k.pendingRequests.indexOf(c);-1!==a&&k.pendingRequests.splice(a,1)}var z=g.defer(),A=z.promise,
M,B,T=c.headers,Y=r(c.url,c.paramSerializer(c.params));k.pendingRequests.push(c);A.then(n,n);!c.cache&&!b.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(M=D(c.cache)?c.cache:D(b.cache)?b.cache:t);M&&(B=M.get(Y),x(B)?B&&H(B.then)?B.then(y,y):K(B)?m(B[1],B[0],ea(B[2]),B[3]):m(B,200,{},"OK"):M.put(Y,A));E(B)&&((B=bd(c.url)?e()[c.xsrfCookieName||b.xsrfCookieName]:u)&&(T[c.xsrfHeaderName||b.xsrfHeaderName]=B),d(c.method,Y,f,l,T,c.timeout,c.withCredentials,c.responseType));return A}function r(a,
b){0<b.length&&(a+=(-1==a.indexOf("?")?"?":"&")+b);return a}var t=f("$http");b.paramSerializer=C(b.paramSerializer)?l.get(b.paramSerializer):b.paramSerializer;var y=[];n(c,function(a){y.unshift(C(a)?l.get(a):l.invoke(a))});k.pendingRequests=[];(function(a){n(arguments,function(a){k[a]=function(b,c){return k(Q(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){n(arguments,function(a){k[a]=function(b,c,d){return k(Q(d||{},{method:a,url:b,data:c}))}})})("post","put","patch");k.defaults=
b;return k}]}function Mf(){return new P.XMLHttpRequest}function $e(){this.$get=["$browser","$window","$document",function(b,a,c){return Nf(b,Mf,b.defer,a.angular.callbacks,c[0])}]}function Nf(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",m,!1);e.body.removeChild(f);f=null;var h=-1,y="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),y=a.type,
h="error"===a.type?404:200);c&&c(h,y)};f.addEventListener("load",m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,g,l,k,m,r,t,y){function G(){p&&p();w&&w.abort()}function O(a,d,e,f,g){z!==u&&c.cancel(z);p=w=null;a(d,e,f,g);b.$$completeOutstandingRequest(s)}b.$$incOutstandingRequestCount();g=g||b.url();if("jsonp"==N(e)){var v="_"+(d.counter++).toString(36);d[v]=function(a){d[v].data=a;d[v].called=!0};var p=f(g.replace("JSON_CALLBACK","angular.callbacks."+v),v,
function(a,b){O(k,a,d[v].data,"",b);d[v]=s})}else{var w=a();w.open(e,g,!0);n(m,function(a,b){x(a)&&w.setRequestHeader(b,a)});w.onload=function(){var a=w.statusText||"",b="response"in w?w.response:w.responseText,c=1223===w.status?204:w.status;0===c&&(c=b?200:"file"==Aa(g).protocol?404:0);O(k,c,b,w.getAllResponseHeaders(),a)};e=function(){O(k,-1,null,null,"")};w.onerror=e;w.onabort=e;t&&(w.withCredentials=!0);if(y)try{w.responseType=y}catch(q){if("json"!==y)throw q;}w.send(l||null)}if(0<r)var z=c(G,
r);else r&&H(r.then)&&r.then(G)}}function Ve(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function h(c){return c.replace(m,b).replace(r,a)}function g(f,g,m,r){function v(a){try{var b=a;a=m?e.getTrusted(m,b):e.valueOf(b);var c;if(r&&!x(a))c=a;else if(null==a)c="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;
default:a=Ya(a)}c=a}return c}catch(g){d(Ha.interr(f,g))}}r=!!r;for(var p,n,q=0,z=[],A=[],M=f.length,B=[],T=[];q<M;)if(-1!=(p=f.indexOf(b,q))&&-1!=(n=f.indexOf(a,p+l)))q!==p&&B.push(h(f.substring(q,p))),q=f.substring(p+l,n),z.push(q),A.push(c(q,v)),q=n+k,T.push(B.length),B.push("");else{q!==M&&B.push(h(f.substring(q)));break}m&&1<B.length&&Ha.throwNoconcat(f);if(!g||z.length){var Y=function(a){for(var b=0,c=z.length;b<c;b++){if(r&&E(a[b]))return;B[T[b]]=a[b]}return B.join("")};return Q(function(a){var b=
0,c=z.length,e=Array(c);try{for(;b<c;b++)e[b]=A[b](a);return Y(e)}catch(g){d(Ha.interr(f,g))}},{exp:f,expressions:z,$$watchDelegate:function(a,b){var c;return a.$watchGroup(A,function(d,e){var f=Y(d);H(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=b.length,k=a.length,m=new RegExp(b.replace(/./g,f),"g"),r=new RegExp(a.replace(/./g,f),"g");g.startSymbol=function(){return b};g.endSymbol=function(){return a};return g}]}function We(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,
g,l,k){var m=4<arguments.length,r=m?pa.call(arguments,4):[],t=a.setInterval,y=a.clearInterval,G=0,O=x(k)&&!k,v=(O?d:c).defer(),p=v.promise;l=x(l)?l:0;p.then(null,null,m?function(){e.apply(null,r)}:e);p.$$intervalId=t(function(){v.notify(G++);0<l&&G>=l&&(v.resolve(G),y(p.$$intervalId),delete f[p.$$intervalId]);O||b.$apply()},g);f[p.$$intervalId]=v;return p}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],
!0):!1};return e}]}function be(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a",ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"]},pluralCat:function(b){return 1===b?"one":"other"}}}}function Zb(b){b=b.split("/");for(var a=b.length;a--;)b[a]=kb(b[a]);
return b.join("/")}function cd(b,a){var c=Aa(b);a.$$protocol=c.protocol;a.$$host=c.hostname;a.$$port=aa(c.port)||Of[c.protocol]||null}function dd(b,a){var c="/"!==b.charAt(0);c&&(b="/"+b);var d=Aa(b);a.$$path=decodeURIComponent(c&&"/"===d.pathname.charAt(0)?d.pathname.substring(1):d.pathname);a.$$search=sc(d.search);a.$$hash=decodeURIComponent(d.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function xa(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ga(b){var a=b.indexOf("#");
return-1==a?b:b.substr(0,a)}function yb(b){return b.replace(/(#.+)|#$/,"$1")}function $b(b){return b.substr(0,Ga(b).lastIndexOf("/")+1)}function ac(b,a){this.$$html5=!0;a=a||"";var c=$b(b);cd(b,this);this.$$parse=function(a){var b=xa(c,a);if(!C(b))throw zb("ipthprfx",a,c);dd(b,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Nb(this.$$search),b=this.$$hash?"#"+kb(this.$$hash):"";this.$$url=Zb(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=
function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,h;(f=xa(b,d))!==u?(h=f,h=(f=xa(a,f))!==u?c+(xa("/",f)||f):b+h):(f=xa(c,d))!==u?h=c+f:c==d+"/"&&(h=c);h&&this.$$parse(h);return!!h}}function bc(b,a){var c=$b(b);cd(b,this);this.$$parse=function(d){d=xa(b,d)||xa(c,d);var e;"#"===d.charAt(0)?(e=xa(a,d),E(e)&&(e=d)):e=this.$$html5?d:"";dd(e,this);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};
this.$$compose=function(){var c=Nb(this.$$search),e=this.$$hash?"#"+kb(this.$$hash):"";this.$$url=Zb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Ga(b)==Ga(a)?(this.$$parse(a),!0):!1}}function ed(b,a){this.$$html5=!0;bc.apply(this,arguments);var c=$b(b);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,h;b==Ga(d)?f=d:(h=xa(c,d))?f=b+a+h:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=
function(){var c=Nb(this.$$search),e=this.$$hash?"#"+kb(this.$$hash):"";this.$$url=Zb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function Ab(b){return function(){return this[b]}}function fd(b,a){return function(c){if(E(c))return this[b];this[b]=a(c);this.$$compose();return this}}function af(){var b="",a={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(a){return x(a)?(b=a,this):b};this.html5Mode=function(b){return Va(b)?(a.enabled=b,this):D(b)?(Va(b.enabled)&&(a.enabled=
b.enabled),Va(b.requireBase)&&(a.requireBase=b.requireBase),Va(b.rewriteLinks)&&(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(c,d,e,f,h){function g(a,b,c){var e=k.url(),f=k.$$state;try{d.url(a,b,c),k.$$state=d.state()}catch(g){throw k.url(e),k.$$state=f,g;}}function l(a,b){c.$broadcast("$locationChangeSuccess",k.absUrl(),a,k.$$state,b)}var k,m;m=d.baseHref();var r=d.url(),t;if(a.enabled){if(!m&&a.requireBase)throw zb("nobase");
t=r.substring(0,r.indexOf("/",r.indexOf("//")+2))+(m||"/");m=e.history?ac:ed}else t=Ga(r),m=bc;k=new m(t,"#"+b);k.$$parseLinkUrl(r,r);k.$$state=d.state();var y=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&!b.metaKey&&!b.shiftKey&&2!=b.which&&2!=b.button){for(var e=F(b.target);"a"!==ra(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var g=e.prop("href"),l=e.attr("href")||e.attr("xlink:href");D(g)&&"[object SVGAnimatedString]"===g.toString()&&(g=Aa(g.animVal).href);
y.test(g)||!g||e.attr("target")||b.isDefaultPrevented()||!k.$$parseLinkUrl(g,l)||(b.preventDefault(),k.absUrl()!=d.url()&&(c.$apply(),h.angular["ff-684208-preventDefault"]=!0))}});yb(k.absUrl())!=yb(r)&&d.url(k.absUrl(),!0);var G=!0;d.onUrlChange(function(a,b){c.$evalAsync(function(){var d=k.absUrl(),e=k.$$state,f;k.$$parse(a);k.$$state=b;f=c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented;k.absUrl()===a&&(f?(k.$$parse(d),k.$$state=e,g(d,!1,e)):(G=!1,l(d,e)))});c.$$phase||c.$digest()});
c.$watch(function(){var a=yb(d.url()),b=yb(k.absUrl()),f=d.state(),h=k.$$replace,m=a!==b||k.$$html5&&e.history&&f!==k.$$state;if(G||m)G=!1,c.$evalAsync(function(){var b=k.absUrl(),d=c.$broadcast("$locationChangeStart",b,a,k.$$state,f).defaultPrevented;k.absUrl()===b&&(d?(k.$$parse(a),k.$$state=f):(m&&g(b,h,f===k.$$state?null:k.$$state),l(a,f)))});k.$$replace=!1});return k}]}function bf(){var b=!0,a=this;this.debugEnabled=function(a){return x(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof
Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||s;a=!1;try{a=!!e.apply}catch(l){}return a?function(){var a=[];n(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,
arguments)}}()}}]}function Ba(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw ca("isecfld",a);return b}function ha(b,a){if(b){if(b.constructor===b)throw ca("isecfn",a);if(b.window===b)throw ca("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw ca("isecdom",a);if(b===Object)throw ca("isecobj",a);}return b}function gd(b,a){if(b){if(b.constructor===b)throw ca("isecfn",a);if(b===Pf||b===Qf||b===Rf)throw ca("isecff",
a);}}function Sf(b,a){return"undefined"!==typeof b?b:a}function hd(b,a){return"undefined"===typeof b?a:"undefined"===typeof a?b:b+a}function W(b,a){var c,d;switch(b.type){case q.Program:c=!0;n(b.body,function(b){W(b.expression,a);c=c&&b.expression.constant});b.constant=c;break;case q.Literal:b.constant=!0;b.toWatch=[];break;case q.UnaryExpression:W(b.argument,a);b.constant=b.argument.constant;b.toWatch=b.argument.toWatch;break;case q.BinaryExpression:W(b.left,a);W(b.right,a);b.constant=b.left.constant&&
b.right.constant;b.toWatch=b.left.toWatch.concat(b.right.toWatch);break;case q.LogicalExpression:W(b.left,a);W(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=b.constant?[]:[b];break;case q.ConditionalExpression:W(b.test,a);W(b.alternate,a);W(b.consequent,a);b.constant=b.test.constant&&b.alternate.constant&&b.consequent.constant;b.toWatch=b.constant?[]:[b];break;case q.Identifier:b.constant=!1;b.toWatch=[b];break;case q.MemberExpression:W(b.object,a);b.computed&&W(b.property,a);
b.constant=b.object.constant&&(!b.computed||b.property.constant);b.toWatch=[b];break;case q.CallExpression:c=b.filter?!a(b.callee.name).$stateful:!1;d=[];n(b.arguments,function(b){W(b,a);c=c&&b.constant;b.constant||d.push.apply(d,b.toWatch)});b.constant=c;b.toWatch=b.filter&&!a(b.callee.name).$stateful?d:[b];break;case q.AssignmentExpression:W(b.left,a);W(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=[b];break;case q.ArrayExpression:c=!0;d=[];n(b.elements,function(b){W(b,a);c=
c&&b.constant;b.constant||d.push.apply(d,b.toWatch)});b.constant=c;b.toWatch=d;break;case q.ObjectExpression:c=!0;d=[];n(b.properties,function(b){W(b.value,a);c=c&&b.value.constant;b.value.constant||d.push.apply(d,b.value.toWatch)});b.constant=c;b.toWatch=d;break;case q.ThisExpression:b.constant=!1,b.toWatch=[]}}function id(b){if(1==b.length){b=b[0].expression;var a=b.toWatch;return 1!==a.length?a:a[0]!==b?a:u}}function jd(b){return b.type===q.Identifier||b.type===q.MemberExpression}function kd(b){if(1===
b.body.length&&jd(b.body[0].expression))return{type:q.AssignmentExpression,left:b.body[0].expression,right:{type:q.NGValueParameter},operator:"="}}function ld(b){return 0===b.body.length||1===b.body.length&&(b.body[0].expression.type===q.Literal||b.body[0].expression.type===q.ArrayExpression||b.body[0].expression.type===q.ObjectExpression)}function md(b,a){this.astBuilder=b;this.$filter=a}function nd(b,a){this.astBuilder=b;this.$filter=a}function Bb(b,a,c,d){ha(b,d);a=a.split(".");for(var e,f=0;1<
a.length;f++){e=Ba(a.shift(),d);var h=ha(b[e],d);h||(h={},b[e]=h);b=h}e=Ba(a.shift(),d);ha(b[e],d);return b[e]=c}function Cb(b){return"constructor"==b}function cc(b){return H(b.valueOf)?b.valueOf():Tf.call(b)}function cf(){var b=ka(),a=ka();this.$get=["$filter","$sniffer",function(c,d){function e(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=cc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function f(a,b,c,d,f){var g=d.inputs,h;if(1===g.length){var l=e,g=g[0];return a.$watch(function(a){var b=
g(a);e(b,l)||(h=d(a,u,u,[b]),l=b&&cc(b));return h},b,c,f)}for(var k=[],m=[],r=0,B=g.length;r<B;r++)k[r]=e,m[r]=null;return a.$watch(function(a){for(var b=!1,c=0,f=g.length;c<f;c++){var l=g[c](a);if(b||(b=!e(l,k[c])))m[c]=l,k[c]=l&&cc(l)}b&&(h=d(a,u,u,m));return h},b,c,f)}function h(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;H(b)&&b.apply(this,arguments);x(a)&&d.$$postDigest(function(){x(f)&&e()})},c)}function g(a,b,c,d){function e(a){var b=!0;n(a,function(a){x(a)||
(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;H(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function l(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){H(b)&&b.apply(this,arguments);e()},c)}function k(a,b){if(!b)return a;var c=a.$$watchDelegate,c=c!==g&&c!==h?function(c,d,e,f){e=a(c,d,e,f);return b(e,c,d)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return x(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==
f?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=f,c.inputs=a.inputs?a.inputs:[a]);return c}var m={csp:d.csp,expensiveChecks:!1},r={csp:d.csp,expensiveChecks:!0};return function(d,e,G){var n,v,p;switch(typeof d){case "string":p=d=d.trim();var q=G?a:b;n=q[p];n||(":"===d.charAt(0)&&":"===d.charAt(1)&&(v=!0,d=d.substring(2)),G=G?r:m,n=new dc(G),n=(new ec(n,c,G)).parse(d),n.constant?n.$$watchDelegate=l:v?n.$$watchDelegate=n.literal?g:h:n.inputs&&(n.$$watchDelegate=f),q[p]=n);return k(n,
e);case "function":return k(d,e);default:return s}}}]}function ef(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return od(function(a){b.$evalAsync(a)},a)}]}function ff(){this.$get=["$browser","$exceptionHandler",function(b,a){return od(function(a){b.defer(a)},a)}]}function od(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&
c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;c.processScheduled=!1;c.pending=u;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{H(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),a(h)}}}))}function h(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var g=J("$q",TypeError);d.prototype={then:function(a,b,c){var d=new h;this.$$state.pending=this.$$state.pending||
[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}};h.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(g("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,this.$$reject);try{if(D(b)||H(b))d=b&&b.then;H(d)?(this.promise.$$state.status=
-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(H(b)?
b(c):c)}catch(h){a(h)}}})}};var l=function(a,b){var c=new h;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{H(c)&&(d=c())}catch(e){return l(e,!1)}return d&&H(d.then)?d.then(function(){return l(a,b)},function(a){return l(a,!1)}):l(a,b)},m=function(a,b,c,d){var e=new h;e.resolve(a);return e.promise.then(b,c,d)},r=function y(a){if(!H(a))throw g("norslvr",a);if(!(this instanceof y))return new y(a);var b=new h;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};
r.defer=function(){return new h};r.reject=function(a){var b=new h;b.reject(a);return b.promise};r.when=m;r.all=function(a){var b=new h,c=0,d=K(a)?[]:{};n(a,function(a,e){c++;m(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return r}function pf(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||
b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function df(){function b(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++jb;this.$$ChildScope=null}b.prototype=a;return b}var a=10,c=J("$rootScope"),d=null,e=null;this.digestTtl=function(b){arguments.length&&
(a=b);return a};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(f,h,g,l){function k(a){a.currentScope.$$destroyed=!0}function m(){this.$id=++jb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function r(a){if(p.$$phase)throw c("inprog",p.$$phase);p.$$phase=a}function t(a,b){do a.$$watchersCount+=
b;while(a=a.$parent)}function y(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function q(){}function u(){for(;z.length;)try{z.shift()()}catch(a){h(a)}e=null}function v(){null===e&&(e=l.defer(function(){p.$apply(u)}))}m.prototype={constructor:m,$new:function(a,c){var d;c=c||this;a?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=b(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=
d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(a||c!=this)&&d.$on("$destroy",k);return d},$watch:function(a,b,c,e){var f=g(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,c,f,a);var h=this,l=h.$$watchers,k={fn:b,last:q,get:f,exp:e||a,eq:!!c};d=null;H(b)||(k.fn=s);l||(l=h.$$watchers=[]);l.unshift(k);t(this,1);return function(){0<=Wa(l,k)&&t(h,-1);d=null}},$watchGroup:function(a,b){function c(){h=!1;l?(l=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,l=!0;
if(!a.length){var k=!0;g.$evalAsync(function(){k&&b(e,e,g)});return function(){k=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});n(a,function(a,b){var l=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(l)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!E(e)){if(D(e))if(Qa(e))for(f!==r&&(f=r,n=f.length=0,k++),a=e.length,n!==a&&(k++,f.length=n=a),b=0;b<a;b++)h=f[b],
g=e[b],d=h!==h&&g!==g,d||h===g||(k++,f[b]=g);else{f!==t&&(f=t={},n=0,k++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(k++,f[b]=g)):(n++,f[b]=g,k++));if(n>a)for(b in k++,f)e.hasOwnProperty(b)||(n--,delete f[b])}else f!==e&&(f=e,k++);return k}}c.$stateful=!0;var d=this,e,f,h,l=1<b.length,k=0,m=g(a,c),r=[],t={},p=!0,n=0;return this.$watch(m,function(){p?(p=!1,b(e,e,d)):b(e,h,d);if(l)if(D(e))if(Qa(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h=
{},e)tc.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var b,f,g,k,m,t,n=a,y,z=[],s,v;r("$digest");l.$$checkUrlChange();this===p&&null!==e&&(l.defer.cancel(e),u());d=null;do{t=!1;for(y=this;w.length;){try{v=w.shift(),v.scope.$eval(v.expression,v.locals)}catch(F){h(F)}d=null}a:do{if(k=y.$$watchers)for(m=k.length;m--;)try{if(b=k[m])if((f=b.get(y))!==(g=b.last)&&!(b.eq?ia(f,g):"number"===typeof f&&"number"===typeof g&&isNaN(f)&&isNaN(g)))t=!0,d=b,b.last=b.eq?sa(f,null):f,b.fn(f,g===q?f:g,y),5>
n&&(s=4-n,z[s]||(z[s]=[]),z[s].push({msg:H(b.exp)?"fn: "+(b.exp.name||b.exp.toString()):b.exp,newVal:f,oldVal:g}));else if(b===d){t=!1;break a}}catch(E){h(E)}if(!(k=y.$$watchersCount&&y.$$childHead||y!==this&&y.$$nextSibling))for(;y!==this&&!(k=y.$$nextSibling);)y=y.$parent}while(y=k);if((t||w.length)&&!n--)throw p.$$phase=null,c("infdig",a,z);}while(t||w.length);for(p.$$phase=null;x.length;)try{x.shift()()}catch(D){h(D)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");
this.$$destroyed=!0;this===p&&l.$$applicationDestroyed();t(this,-this.$$watchersCount);for(var b in this.$$listenerCount)y(this,this.$$listenerCount[b],b);a&&a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=s;this.$on=
this.$watch=this.$watchGroup=function(){return s};this.$$listeners={};this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){p.$$phase||w.length||l.defer(function(){w.length&&p.$digest()});w.push({scope:this,expression:a,locals:b})},$$postDigest:function(a){x.push(a)},$apply:function(a){try{return r("$apply"),this.$eval(a)}catch(b){h(b)}finally{p.$$phase=null;try{p.$digest()}catch(c){throw h(c),
c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&z.push(b);v()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,y(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,f=!1,g={name:a,targetScope:e,stopPropagation:function(){f=!0},preventDefault:function(){g.defaultPrevented=!0},defaultPrevented:!1},
l=Xa([g],arguments,1),k,m;do{d=e.$$listeners[a]||c;g.currentScope=e;k=0;for(m=d.length;k<m;k++)if(d[k])try{d[k].apply(null,l)}catch(r){h(r)}else d.splice(k,1),k--,m--;if(f)return g.currentScope=null,g;e=e.$parent}while(e);g.currentScope=null;return g},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var f=Xa([e],arguments,1),g,l;c=d;){e.currentScope=c;d=c.$$listeners[a]||
[];g=0;for(l=d.length;g<l;g++)if(d[g])try{d[g].apply(null,f)}catch(k){h(k)}else d.splice(g,1),g--,l--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var p=new m,w=p.$$asyncQueue=[],x=p.$$postDigestQueue=[],z=p.$$applyAsyncQueue=[];return p}]}function ce(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return x(a)?
(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return x(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;f=Aa(c).href;return""===f||f.match(e)?c:"unsafe:"+f}}}function Uf(b){if("self"===b)return b;if(C(b)){if(-1<b.indexOf("***"))throw Ca("iwcard",b);b=pd(b).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(Ta(b))return new RegExp("^"+b.source+"$");throw Ca("imatcher");}function qd(b){var a=[];x(b)&&n(b,function(b){a.push(Uf(b))});
return a}function hf(){this.SCE_CONTEXTS=la;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=qd(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=qd(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?bd(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};
return b}var f=function(a){throw Ca("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var h=e(),g={};g[la.HTML]=e(h);g[la.CSS]=e(h);g[la.URL]=e(h);g[la.JS]=e(h);g[la.RESOURCE_URL]=e(g[la.URL]);return{trustAs:function(a,b){var c=g.hasOwnProperty(a)?g[a]:null;if(!c)throw Ca("icontext",a,b);if(null===b||b===u||""===b)return b;if("string"!==typeof b)throw Ca("itype",a);return new c(b)},getTrusted:function(c,e){if(null===e||e===u||""===e)return e;var h=g.hasOwnProperty(c)?g[c]:null;if(h&&e instanceof
h)return e.$$unwrapTrustedValue();if(c===la.RESOURCE_URL){var h=Aa(e.toString()),r,t,n=!1;r=0;for(t=b.length;r<t;r++)if(d(b[r],h)){n=!0;break}if(n)for(r=0,t=a.length;r<t;r++)if(d(a[r],h)){n=!1;break}if(n)return e;throw Ca("insecurl",e.toString());}if(c===la.HTML)return f(e);throw Ca("unsafe");},valueOf:function(a){return a instanceof h?a.$$unwrapTrustedValue():a}}}]}function gf(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sceDelegate",function(a,c){if(b&&
8>fb)throw Ca("iequirks");var d=ea(la);d.isEnabled=function(){return b};d.trustAs=c.trustAs;d.getTrusted=c.getTrusted;d.valueOf=c.valueOf;b||(d.trustAs=d.getTrusted=function(a,b){return b},d.valueOf=Sa);d.parseAs=function(b,c){var e=a(c);return e.literal&&e.constant?e:a(c,function(a){return d.getTrusted(b,a)})};var e=d.parseAs,f=d.getTrusted,h=d.trustAs;n(la,function(a,b){var c=N(b);d[cb("parse_as_"+c)]=function(b){return e(a,b)};d[cb("get_trusted_"+c)]=function(b){return f(a,b)};d[cb("trust_as_"+
c)]=function(b){return h(a,b)}});return d}]}function jf(){this.$get=["$window","$document",function(b,a){var c={},d=aa((/android (\d+)/.exec(N((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},h,g=/^(Moz|webkit|ms)(?=[A-Z])/,l=f.body&&f.body.style,k=!1,m=!1;if(l){for(var r in l)if(k=g.exec(r)){h=k[0];h=h.substr(0,1).toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in l&&"webkit");k=!!("transition"in l||h+"Transition"in l);m=!!("animation"in l||h+"Animation"in
l);!d||k&&m||(k=C(l.webkitTransition),m=C(l.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hasEvent:function(a){if("input"===a&&11>=fb)return!1;if(E(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:ab(),vendorPrefix:h,transitions:k,animations:m,android:d}}]}function lf(){this.$get=["$templateCache","$http","$q",function(b,a,c){function d(e,f){d.totalPendingRequests++;var h=a.defaults&&a.defaults.transformResponse;K(h)?h=h.filter(function(a){return a!==
Xb}):h===Xb&&(h=null);return a.get(e,{cache:b,transformResponse:h})["finally"](function(){d.totalPendingRequests--}).then(function(a){b.put(e,a.data);return a.data},function(a){if(!f)throw ga("tpload",e,a.status,a.statusText);return c.reject(a)})}d.totalPendingRequests=0;return d}]}function mf(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var h=[];n(a,function(a){var d=ba.element(a).data("$binding");d&&
n(d,function(d){c?(new RegExp("(^|\\s)"+pd(b)+"(\\s|\\||$)")).test(d)&&h.push(a):-1!=d.indexOf(b)&&h.push(a)})});return h},findModels:function(a,b,c){for(var h=["ng-","data-ng-","ng\\:"],g=0;g<h.length;++g){var l=a.querySelectorAll("["+h[g]+"model"+(c?"=":"*=")+'"'+b+'"]');if(l.length)return l}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function nf(){this.$get=["$rootScope","$browser",
"$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,l,k){H(f)||(k=l,l=f,f=s);var m=pa.call(arguments,3),r=x(k)&&!k,t=(r?d:c).defer(),n=t.promise,q;q=a.defer(function(){try{t.resolve(f.apply(null,m))}catch(a){t.reject(a),e(a)}finally{delete h[n.$$timeoutId]}r||b.$apply()},l);n.$$timeoutId=q;h[q]=t;return n}var h={};f.cancel=function(b){return b&&b.$$timeoutId in h?(h[b.$$timeoutId].reject("canceled"),delete h[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function Aa(b){fb&&
(Z.setAttribute("href",b),b=Z.href);Z.setAttribute("href",b);return{href:Z.href,protocol:Z.protocol?Z.protocol.replace(/:$/,""):"",host:Z.host,search:Z.search?Z.search.replace(/^\?/,""):"",hash:Z.hash?Z.hash.replace(/^#/,""):"",hostname:Z.hostname,port:Z.port,pathname:"/"===Z.pathname.charAt(0)?Z.pathname:"/"+Z.pathname}}function bd(b){b=C(b)?Aa(b):b;return b.protocol===rd.protocol&&b.host===rd.host}function of(){this.$get=na(P)}function sd(b){function a(a){try{return decodeURIComponent(a)}catch(b){return a}}
var c=b[0]||{},d={},e="";return function(){var b,h,g,l,k;b=c.cookie||"";if(b!==e)for(e=b,b=e.split("; "),d={},g=0;g<b.length;g++)h=b[g],l=h.indexOf("="),0<l&&(k=a(h.substring(0,l)),d[k]===u&&(d[k]=a(h.substring(l+1))));return d}}function tf(){this.$get=sd}function Fc(b){function a(c,d){if(D(c)){var e={};n(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];a("currency",td);a("date",
ud);a("filter",Vf);a("json",Wf);a("limitTo",Xf);a("lowercase",Yf);a("number",vd);a("orderBy",wd);a("uppercase",Zf)}function Vf(){return function(b,a,c){if(!K(b)){if(null==b)return b;throw J("filter")("notarray",b);}var d;switch(fc(a)){case "function":break;case "boolean":case "null":case "number":case "string":d=!0;case "object":a=$f(a,c,d);break;default:return b}return b.filter(a)}}function $f(b,a,c){var d=D(b)&&"$"in b;!0===a?a=ia:H(a)||(a=function(a,b){if(E(a))return!1;if(null===a||null===b)return a===
b;var c;!(c=D(b))&&(c=D(a))&&(c=a,c=!(H(c.toString)&&c.toString!==Object.prototype.toString));if(c)return!1;a=N(""+a);b=N(""+b);return-1!==a.indexOf(b)});return function(e){return d&&!D(e)?Ia(e,b.$,a,!1):Ia(e,b,a,c)}}function Ia(b,a,c,d,e){var f=fc(b),h=fc(a);if("string"===h&&"!"===a.charAt(0))return!Ia(b,a.substring(1),c,d);if(K(b))return b.some(function(b){return Ia(b,a,c,d)});switch(f){case "object":var g;if(d){for(g in b)if("$"!==g.charAt(0)&&Ia(b[g],a,c,!0))return!0;return e?!1:Ia(b,a,c,!1)}if("object"===
h){for(g in a)if(e=a[g],!H(e)&&!E(e)&&(f="$"===g,!Ia(f?b:b[g],e,c,f,f)))return!1;return!0}return c(b,a);case "function":return!1;default:return c(b,a)}}function fc(b){return null===b?"null":typeof b}function td(b){var a=b.NUMBER_FORMATS;return function(b,d,e){E(d)&&(d=a.CURRENCY_SYM);E(e)&&(e=a.PATTERNS[1].maxFrac);return null==b?b:xd(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function vd(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==b?b:xd(b,a.PATTERNS[0],a.GROUP_SEP,
a.DECIMAL_SEP,d)}}function xd(b,a,c,d,e){if(D(b))return"";var f=0>b;b=Math.abs(b);var h=Infinity===b;if(!h&&!isFinite(b))return"";var g=b+"",l="",k=!1,m=[];h&&(l="\u221e");if(!h&&-1!==g.indexOf("e")){var r=g.match(/([\d\.]+)e(-?)(\d+)/);r&&"-"==r[2]&&r[3]>e+1?b=0:(l=g,k=!0)}if(h||k)0<e&&1>b&&(l=b.toFixed(e),b=parseFloat(l));else{h=(g.split(yd)[1]||"").length;E(e)&&(e=Math.min(Math.max(a.minFrac,h),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);var h=(""+b).split(yd),g=h[0],h=
h[1]||"",r=0,t=a.lgSize,n=a.gSize;if(g.length>=t+n)for(r=g.length-t,k=0;k<r;k++)0===(r-k)%n&&0!==k&&(l+=c),l+=g.charAt(k);for(k=r;k<g.length;k++)0===(g.length-k)%t&&0!==k&&(l+=c),l+=g.charAt(k);for(;h.length<e;)h+="0";e&&"0"!==e&&(l+=d+h.substr(0,e))}0===b&&(f=!1);m.push(f?a.negPre:a.posPre,l,f?a.negSuf:a.posSuf);return m.join("")}function Db(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function $(b,a,c,d){c=c||0;return function(e){e=e["get"+
b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Db(e,a,d)}}function Eb(b,a){return function(c,d){var e=c["get"+b](),f=nb(a?"SHORT"+b:b);return d[f][e]}}function zd(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function Ad(b){return function(a){var c=zd(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Db(a,b)}}function gc(b,a){return 0>=b.getFullYear()?a.ERAS[0]:a.ERAS[1]}function ud(b){function a(a){var b;
if(b=a.match(c)){a=new Date(0);var f=0,h=0,g=b[8]?a.setUTCFullYear:a.setFullYear,l=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=aa(b[9]+b[10]),h=aa(b[9]+b[11]));g.call(a,aa(b[1]),aa(b[2])-1,aa(b[3]));f=aa(b[4]||0)-f;h=aa(b[5]||0)-h;g=aa(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));l.call(a,f,h,g,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e,f){var h="",g=[],l,k;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||
e;C(c)&&(c=ag.test(c)?aa(c):a(c));V(c)&&(c=new Date(c));if(!da(c)||!isFinite(c.getTime()))return c;for(;e;)(k=bg.exec(e))?(g=Xa(g,k,1),e=g.pop()):(g.push(e),e=null);var m=c.getTimezoneOffset();f&&(m=qc(f,c.getTimezoneOffset()),c=Mb(c,f,!0));n(g,function(a){l=cg[a];h+=l?l(c,b.DATETIME_FORMATS,m):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return h}}function Wf(){return function(b,a){E(a)&&(a=2);return Ya(b,a)}}function Xf(){return function(b,a,c){a=Infinity===Math.abs(Number(a))?Number(a):aa(a);
if(isNaN(a))return b;V(b)&&(b=b.toString());if(!K(b)&&!C(b))return b;c=!c||isNaN(c)?0:aa(c);c=0>c&&c>=-b.length?b.length+c:c;return 0<=a?b.slice(c,c+a):0===c?b.slice(a,b.length):b.slice(Math.max(0,c+a),c)}}function wd(b){return function(a,c,d){function e(a,b){return b?function(b,c){return a(c,b)}:a}function f(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function h(a){return null===a?"null":"function"===typeof a.valueOf&&(a=a.valueOf(),f(a))||"function"===
typeof a.toString&&(a=a.toString(),f(a))?a:""}function g(a,b){var c=typeof a,d=typeof b;c===d&&"object"===c&&(a=h(a),b=h(b));return c===d?("string"===c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Qa(a))return a;c=K(c)?c:[c];0===c.length&&(c=["+"]);c=c.map(function(a){var c=!1,d=a||Sa;if(C(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);if(""===a)return e(g,c);d=b(a);if(d.constant){var f=d();return e(function(a,b){return g(a[f],b[f])},c)}}return e(function(a,
b){return g(d(a),d(b))},c)});return pa.call(a).sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function Ja(b){H(b)&&(b={link:b});b.restrict=b.restrict||"AC";return na(b)}function Bd(b,a,c,d,e){var f=this,h=[],g=f.$$parentForm=b.parent().controller("form")||Fb;f.$error={};f.$$success={};f.$pending=u;f.$name=e(a.name||a.ngForm||"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;g.$addControl(f);f.$rollbackViewValue=function(){n(h,
function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){n(h,function(a){a.$commitViewValue()})};f.$addControl=function(a){Na(a.$name,"input");h.push(a);a.$name&&(f[a.$name]=a)};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];n(f.$pending,function(b,c){f.$setValidity(c,null,a)});n(f.$error,function(b,c){f.$setValidity(c,null,a)});n(f.$$success,function(b,c){f.$setValidity(c,null,
a)});Wa(h,a)};Cd({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(Wa(d,c),0===d.length&&delete a[b])},parentForm:g,$animate:d});f.$setDirty=function(){d.removeClass(b,Pa);d.addClass(b,Gb);f.$dirty=!0;f.$pristine=!1;g.$setDirty()};f.$setPristine=function(){d.setClass(b,Pa,Gb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;n(h,function(a){a.$setPristine()})};f.$setUntouched=function(){n(h,function(a){a.$setUntouched()})};
f.$setSubmitted=function(){d.addClass(b,"ng-submitted");f.$submitted=!0;g.$setSubmitted()}}function hc(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function gb(b,a,c,d,e,f){var h=N(a[0].type);if(!e.android){var g=!1;a.on("compositionstart",function(a){g=!0});a.on("compositionend",function(){g=!1;l()})}var l=function(b){k&&(f.defer.cancel(k),k=null);if(!g){var e=a.val();b=b&&b.type;"password"===h||c.ngTrim&&"false"===c.ngTrim||(e=U(e));(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&
d.$setViewValue(e,b)}};if(e.hasEvent("input"))a.on("input",l);else{var k,m=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))a.on("paste cut",m)}a.on("change",l);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)}}function Hb(b,a){return function(c,d){var e,f;if(da(c))return c;if(C(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,
c.length-1));if(dg.test(c))return new Date(c);b.lastIndex=0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},n(e,function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function hb(b,a,c,d){return function(e,f,h,g,l,k,m){function r(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}
function t(a){return x(a)?da(a)?a:c(a):u}Dd(e,f,h,g);gb(e,f,h,g,l,k);var n=g&&g.$options&&g.$options.timezone,q;g.$$parserName=b;g.$parsers.push(function(b){return g.$isEmpty(b)?null:a.test(b)?(b=c(b,q),n&&(b=Mb(b,n)),b):u});g.$formatters.push(function(a){if(a&&!da(a))throw Ib("datefmt",a);if(r(a))return(q=a)&&n&&(q=Mb(q,n,!0)),m("date")(a,d,n);q=null;return""});if(x(h.min)||h.ngMin){var s;g.$validators.min=function(a){return!r(a)||E(s)||c(a)>=s};h.$observe("min",function(a){s=t(a);g.$validate()})}if(x(h.max)||
h.ngMax){var v;g.$validators.max=function(a){return!r(a)||E(v)||c(a)<=v};h.$observe("max",function(a){v=t(a);g.$validate()})}}}function Dd(b,a,c,d){(d.$$hasNativeValidators=D(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput&&!c.typeMismatch?u:b})}function Ed(b,a,c,d,e){if(x(d)){b=b(d);if(!b.constant)throw J("ngModel")("constexpr",c,d);return b(a)}return e}function ic(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=
a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){var b=[];return K(a)?(n(a,function(a){b=b.concat(e(a))}),b):C(a)?a.split(" "):D(a)?(n(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",link:function(f,h,g){function l(a,b){var c=h.data("$classCounts")||{},d=[];n(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});h.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===a||f.$index%2===a){var k=e(b||[]);if(!m){var n=l(k,
1);g.$addClass(n)}else if(!ia(b,m)){var q=e(m),n=d(k,q),k=d(q,k),n=l(n,1),k=l(k,-1);n&&n.length&&c.addClass(h,n);k&&k.length&&c.removeClass(h,k)}}m=ea(b)}var m;f.$watch(g[b],k,!0);g.$observe("class",function(a){k(f.$eval(g[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var h=c&1;if(h!==(d&1)){var k=e(f.$eval(g[b]));h===a?(h=l(k,1),g.$addClass(h)):(h=l(k,-1),g.$removeClass(h))}})}}}]}function Cd(b){function a(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function c(b,
c){b=b?"-"+vc(b,"-"):"";a(ib+b,!0===c);a(Fd+b,!1===c)}var d=b.ctrl,e=b.$element,f={},h=b.set,g=b.unset,l=b.parentForm,k=b.$animate;f[Fd]=!(f[ib]=e.hasClass(ib));d.$setValidity=function(b,e,f){e===u?(d.$pending||(d.$pending={}),h(d.$pending,b,f)):(d.$pending&&g(d.$pending,b,f),Gd(d.$pending)&&(d.$pending=u));Va(e)?e?(g(d.$error,b,f),h(d.$$success,b,f)):(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),g(d.$$success,b,f));d.$pending?(a(Hd,!0),d.$valid=d.$invalid=u,c("",null)):(a(Hd,!1),d.$valid=
Gd(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?u:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);l.$setValidity(b,e,d)}}function Gd(b){if(b)for(var a in b)return!1;return!0}var eg=/^\/(.+)\/([a-z]*)$/,N=function(b){return C(b)?b.toLowerCase():b},tc=Object.prototype.hasOwnProperty,nb=function(b){return C(b)?b.toUpperCase():b},fb,F,ja,pa=[].slice,Hf=[].splice,fg=[].push,qa=Object.prototype.toString,Da=J("ng"),ba=P.angular||(P.angular={}),bb,jb=0;fb=X.documentMode;s.$inject=
[];Sa.$inject=[];var K=Array.isArray,nc=/^\[object (Uint8(Clamped)?)|(Uint16)|(Uint32)|(Int8)|(Int16)|(Int32)|(Float(32)|(64))Array\]$/,U=function(b){return C(b)?b.trim():b},pd=function(b){return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},ab=function(){if(x(ab.isActive_))return ab.isActive_;var b=!(!X.querySelector("[ng-csp]")&&!X.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return ab.isActive_=b},lb=function(){if(x(lb.name_))return lb.name_;
var b,a,c=Ka.length,d,e;for(a=0;a<c;++a)if(d=Ka[a],b=X.querySelector("["+d.replace(":","\\:")+"jq]")){e=b.getAttribute(d+"jq");break}return lb.name_=e},Ka=["ng-","data-ng-","ng:","x-ng-"],Xd=/[A-Z]/g,wc=!1,Ob,ma=1,Za=3,ae={full:"1.4.0-rc.0",major:1,minor:4,dot:0,codeName:"smooth-unwinding"};R.expando="ng339";var sb=R.cache={},zf=1;R._data=function(b){return this.cache[b[this.expando]]||{}};var uf=/([\:\-\_]+(.))/g,vf=/^moz([A-Z])/,gg={mouseleave:"mouseout",mouseenter:"mouseover"},Rb=J("jqLite"),yf=
/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Qb=/<|&#?\w+;/,wf=/<([\w:]+)/,xf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,fa={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};fa.optgroup=fa.option;fa.tbody=fa.tfoot=fa.colgroup=fa.caption=fa.thead;fa.th=fa.td;var La=R.prototype={ready:function(b){function a(){c||
(c=!0,b())}var c=!1;"complete"===X.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),R(P).on("load",a))},toString:function(){var b=[];n(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?F(this[b]):F(this[this.length+b])},length:0,push:fg,sort:[].sort,splice:[].splice},xb={};n("multiple selected checked disabled readOnly required open".split(" "),function(b){xb[N(b)]=b});var Nc={};n("input select option textarea button form details".split(" "),function(b){Nc[b]=
!0});var Oc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};n({data:Tb,removeData:qb},function(b,a){R[a]=b});n({data:Tb,inheritedData:wb,scope:function(b){return F.data(b,"$scope")||wb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return F.data(b,"$isolateScope")||F.data(b,"$isolateScopeNoTemplate")},controller:Kc,injector:function(b){return wb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:tb,css:function(b,
a,c){a=cb(a);if(x(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=b.nodeType;if(d!==Za&&2!==d&&8!==d)if(d=N(a),xb[d])if(x(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||s).specified?d:u;else if(x(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?u:b},prop:function(b,a,c){if(x(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(E(b)){var d=a.nodeType;return d===ma||d===
Za?a.textContent:""}a.textContent=b}b.$dv="";return b}(),val:function(b,a){if(E(a)){if(b.multiple&&"select"===ra(b)){var c=[];n(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(E(a))return b.innerHTML;pb(b,!0);b.innerHTML=a},empty:Lc},function(b,a){R.prototype[a]=function(a,d){var e,f,h=this.length;if(b!==Lc&&(2==b.length&&b!==tb&&b!==Kc?a:d)===u){if(D(a)){for(e=0;e<h;e++)if(b===Tb)b(this[e],a);else for(f in a)b(this[e],
f,a[f]);return this}e=b.$dv;h=e===u?Math.min(h,1):h;for(f=0;f<h;f++){var g=b(this[f],a,d);e=e?e+g:g}return e}for(e=0;e<h;e++)b(this[e],a,d);return this}});n({removeData:qb,on:function a(c,d,e,f){if(x(f))throw Rb("onargs");if(Gc(c)){var h=rb(c,!0);f=h.events;var g=h.handle;g||(g=h.handle=Cf(c,f));for(var h=0<=d.indexOf(" ")?d.split(" "):[d],l=h.length;l--;){d=h[l];var k=f[d];k||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,gg[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||
g(a,d)}):"$destroy"!==d&&c.addEventListener(d,g,!1),k=f[d]);k.push(e)}}},off:Jc,one:function(a,c,d){a=F(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;pb(a);n(new R(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];n(a.childNodes,function(a){a.nodeType===ma&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===
ma||11===d){c=new R(c);for(var d=0,e=c.length;d<e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===ma){var d=a.firstChild;n(new R(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=F(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:Ub,detach:function(a){Ub(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new R(c);for(var f=0,h=c.length;f<h;f++){var g=c[f];e.insertBefore(g,d.nextSibling);d=g}},addClass:vb,removeClass:ub,toggleClass:function(a,
c,d){c&&n(c.split(" "),function(c){var f=d;E(f)&&(f=!tb(a,c));(f?vb:ub)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Sb,triggerHandler:function(a,c,d){var e,f,h=c.type||c,g=rb(a);if(g=(g=g&&g.events)&&g[h])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=
!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:s,type:h,target:a},c.type&&(e=Q(e,c)),c=ea(g),f=d?[e].concat(d):[e],n(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,f)})}},function(a,c){R.prototype[c]=function(c,e,f){for(var h,g=0,l=this.length;g<l;g++)E(h)?(h=a(this[g],c,e,f),x(h)&&(h=F(h))):Ic(h,a(this[g],c,e,f));return x(h)?h:this};R.prototype.bind=R.prototype.on;R.prototype.unbind=R.prototype.off});Oa.prototype={put:function(a,
c){this[Ea(a,this.nextUid)]=c},get:function(a){return this[Ea(a,this.nextUid)]},remove:function(a){var c=this[a=Ea(a,this.nextUid)];delete this[a];return c}};var sf=[function(){this.$get=[function(){return Oa}]}],Qc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,hg=/,/,ig=/^\s*(_?)(\S+?)\1\s*$/,Pc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Fa=J("$injector");$a.$$annotate=function(a,c,d){var e;if("function"===typeof a){if(!(e=a.$inject)){e=[];if(a.length){if(c)throw C(d)&&d||(d=a.name||Df(a)),Fa("strictdi",d);c=a.toString().replace(Pc,
"");c=c.match(Qc);n(c[1].split(hg),function(a){a.replace(ig,function(a,c,d){e.push(d)})})}a.$inject=e}}else K(a)?(c=a.length-1,Ma(a[c],"fn"),e=a.slice(0,c)):Ma(a,"fn",!0);return e};var jg=J("$animate"),Pe=function(){this.$get=["$q","$$rAF",function(a,c){function d(){}d.all=s;d.chain=s;d.prototype={end:s,cancel:s,resume:s,pause:s,complete:s,then:function(d,f){return a(function(a){c(function(){a()})}).then(d,f)}};return d}]},Oe=function(){var a=new Oa,c=[];this.$get=["$$AnimateRunner","$rootScope",
function(d,e){function f(d,f,l){var k=a.get(d);k||(a.put(d,k={}),c.push(d));f&&n(f.split(" "),function(a){a&&(k[a]=!0)});l&&n(l.split(" "),function(a){a&&(k[a]=!1)});1<c.length||e.$$postDigest(function(){n(c,function(c){var d=a.get(c);if(d){var e=Ef(c.attr("class")),f="",g="";n(d,function(a,c){a!==!!e[c]&&(a?f+=(f.length?" ":"")+c:g+=(g.length?" ":"")+c)});n(c,function(a){f&&vb(a,f);g&&ub(a,g)});a.remove(c)}});c.length=0})}return{enabled:s,on:s,off:s,push:function(a,c,e,k){k&&k();e=e||{};e.from&&
a.css(e.from);e.to&&a.css(e.to);(e.addClass||e.removeClass)&&f(a,e.addClass,e.removeClass);return new d}}}]},Ne=["$provide",function(a){var c=this;this.$$registeredAnimations=[];this.register=function(d,e){if(d&&"."!==d.charAt(0))throw jg("notcsel",d);var f=d+"-animation";c.$$registeredAnimations[d.substr(1)]=f;a.factory(f,e)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function c(a,
d,e){if(e){var l;a:{for(l=0;l<e.length;l++){var k=e[l];if(1===k.nodeType){l=k;break a}}l=void 0}!l||l.parentNode||l.previousElementSibling||(e=null)}e?e.after(a):d.prepend(a)}return{on:a.on,off:a.off,enabled:a.enabled,cancel:function(a){a.cancel&&a.end()},enter:function(f,h,g,l){h=h||g.parent();c(f,h,g);return a.push(f,"enter",l)},move:function(f,h,g,l){h=h||g.parent();c(f,h,g);return a.push(f,"move",l)},leave:function(c,e){return a.push(c,"leave",e,function(){c.remove()})},addClass:function(c,e,
g){g=g||{};g.addClass=db(g.addclass,e);return a.push(c,"addClass",g)},removeClass:function(c,e,g){g=g||{};g.removeClass=db(g.removeClass,e);return a.push(c,"removeClass",g)},setClass:function(c,e,g,l){l=l||{};l.addClass=db(l.addClass,e);l.removeClass=db(l.removeClass,g);return a.push(c,"setClass",l)},animate:function(c,e,g,l,k){k=k||{};k.from=k.from?Q(k.from,e):e;k.to=k.to?Q(k.to,g):g;k.tempClasses=db(k.tempClasses,l||"ng-inline-animate");return a.push(c,"animate",k)}}}]}],ga=J("$compile");yc.$inject=
["$provide","$$sanitizeUriProvider"];var Tc=/^((?:x|data)[\:\-_])/i,If=J("$controller"),Rc=/^(\S+)(\s+as\s+(\w+))?$/,Yc="application/json",Yb={"Content-Type":Yc+";charset=utf-8"},Kf=/^\[|^\{(?!\{)/,Lf={"[":/]$/,"{":/}$/},Jf=/^\)\]\}',?\n/,Ha=ba.$interpolateMinErr=J("$interpolate");Ha.throwNoconcat=function(a){throw Ha("noconcat",a);};Ha.interr=function(a,c){return Ha("interr",a,c.toString())};var kg=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,Of={http:80,https:443,ftp:21},zb=J("$location"),lg={$$html5:!1,$$replace:!1,
absUrl:Ab("$$absUrl"),url:function(a){if(E(a))return this.$$url;var c=kg.exec(a);(c[1]||""===a)&&this.path(decodeURIComponent(c[1]));(c[2]||c[1]||""===a)&&this.search(c[3]||"");this.hash(c[5]||"");return this},protocol:Ab("$$protocol"),host:Ab("$$host"),port:Ab("$$port"),path:fd("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(C(a)||V(a))a=a.toString(),this.$$search=sc(a);else if(D(a))a=
sa(a,{}),n(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw zb("isrcharg");break;default:E(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:fd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};n([ed,bc,ac],function(a){a.prototype=Object.create(lg);a.prototype.state=function(c){if(!arguments.length)return this.$$state;if(a!==ac||!this.$$html5)throw zb("nostate");this.$$state=E(c)?null:
c;return this}});var ca=J("$parse"),Pf=Function.prototype.call,Qf=Function.prototype.apply,Rf=Function.prototype.bind,Jb=ka();n("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Jb[a]=!0});var mg={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},dc=function(a){this.options=a};dc.prototype={constructor:dc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||
"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var c=a+this.peek(),d=c+this.peek(2),e=Jb[c],f=Jb[d];Jb[a]||e||f?(a=f?d:e?c:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,c){return-1!==
c.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=x(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,
d)+"]":" "+d;throw ca("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=N(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:c,
text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var c=this.text.charAt(this.index);if(!this.isIdent(c)&&!this.isNumber(c))break;this.index++}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var h=this.text.charAt(this.index),e=e+h;if(f)"u"===h?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||
this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=mg[h]||h,f=!1;else if("\\"===h)f=!0;else{if(h===a){this.index++;this.tokens.push({index:c,text:e,constant:!0,value:d});return}d+=h}this.index++}this.throwError("Unterminated quote",c)}};var q=function(a,c){this.lexer=a;this.options=c};q.Program="Program";q.ExpressionStatement="ExpressionStatement";q.AssignmentExpression="AssignmentExpression";q.ConditionalExpression="ConditionalExpression";
q.LogicalExpression="LogicalExpression";q.BinaryExpression="BinaryExpression";q.UnaryExpression="UnaryExpression";q.CallExpression="CallExpression";q.MemberExpression="MemberExpression";q.Identifier="Identifier";q.Literal="Literal";q.ArrayExpression="ArrayExpression";q.Property="Property";q.ObjectExpression="ObjectExpression";q.ThisExpression="ThisExpression";q.NGValueParameter="NGValueParameter";q.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&
this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:q.Program,body:a}},expressionStatement:function(){return{type:q.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=
this.ternary();this.expect("=")&&(a={type:q.AssignmentExpression,left:a,right:this.assignment(),operator:"="});return a},ternary:function(){var a=this.logicalOR(),c,d;return this.expect("?")&&(c=this.expression(),this.consume(":"))?(d=this.expression(),{type:q.ConditionalExpression,test:a,alternate:c,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:q.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=
this.equality();this.expect("&&");)a={type:q.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),c;c=this.expect("==","!=","===","!==");)a={type:q.BinaryExpression,operator:c.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),c;c=this.expect("<",">","<=",">=");)a={type:q.BinaryExpression,operator:c.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),
c;c=this.expect("+","-");)a={type:q.BinaryExpression,operator:c.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a={type:q.BinaryExpression,operator:c.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:q.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):
this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.constants.hasOwnProperty(this.peek().text)?a=sa(this.constants[this.consume().text]):this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var c;c=this.expect("(","[",".");)"("===c.text?(a={type:q.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===c.text?(a={type:q.MemberExpression,object:a,property:this.expression(),
computed:!0},this.consume("]")):"."===c.text?a={type:q.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var c={type:q.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return c},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.expression());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||
this.throwError("is not a valid identifier",a);return{type:q.Identifier,name:a.text}},constant:function(){return{type:q.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:q.ArrayExpression,elements:a}},object:function(){var a=[],c;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;c={type:q.Property,kind:"init"};this.peek().constant?
c.key=this.constant():this.peek().identifier?c.key=this.identifier():this.throwError("invalid key",this.peek());this.consume(":");c.value=this.expression();a.push(c)}while(this.expect(","))}this.consume("}");return{type:q.ObjectExpression,properties:a}},throwError:function(a,c){throw ca("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},consume:function(a){if(0===this.tokens.length)throw ca("ueoe",this.text);var c=this.expect(a);c||this.throwError("is unexpected, expecting ["+a+
"]",this.peek());return c},peekToken:function(){if(0===this.tokens.length)throw ca("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){return this.peekAhead(0,a,c,d,e)},peekAhead:function(a,c,d,e,f){if(this.tokens.length>a){a=this.tokens[a];var h=a.text;if(h===c||h===d||h===e||h===f||!(c||d||e||f))return a}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},constants:{"true":{type:q.Literal,value:!0},"false":{type:q.Literal,value:!1},"null":{type:q.Literal,
value:null},undefined:{type:q.Literal,value:u},"this":{type:q.ThisExpression}}};md.prototype={compile:function(a,c){var d=this,e=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:c,fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};W(e,d.$filter);var f="",h;this.stage="assign";if(h=kd(e))this.state.computing="assign",f=this.nextId(),this.recurse(h,f),f="fn.assign="+this.generateFunction("assign","s,v,l");h=id(e.body);d.stage="inputs";n(h,function(a,c){var e=
"fn"+c;d.state[e]={vars:[],body:[],own:{}};d.state.computing=e;var f=d.nextId();d.recurse(a,f);d.return_(f);d.state.inputs.push(e);a.watchId=c});this.state.computing="fn";this.stage="main";this.recurse(e);f='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+f+this.watchFns()+"return fn;";f=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","ifDefined","plus","text",f))(this.$filter,Ba,ha,gd,Sf,hd,a);this.state=
this.stage=u;f.literal=ld(e);f.constant=e.constant;return f},USE:"use",STRICT:"strict",watchFns:function(){var a=[],c=this.state.inputs,d=this;n(c,function(c){a.push("var "+c+"="+d.generateFunction(c,"s"))});c.length&&a.push("fn.inputs=["+c.join(",")+"];");return a.join("")},generateFunction:function(a,c){return"function("+c+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],c=this;n(this.state.filters,function(d,e){a.push(d+"=$filter("+c.escape(e)+")")});return a.length?
"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,c,d,e,f,h){var g,l,k=this,m,r;e=e||s;if(!h&&x(a.watchId))c=c||this.nextId(),this.if_("i",this.lazyAssign(c,this.computedMember("i",a.watchId)),this.lazyRecurse(a,c,d,e,f,!0));else switch(a.type){case q.Program:n(a.body,function(c,d){k.recurse(c.expression,u,u,function(a){l=a});d!==a.body.length-1?k.current().body.push(l,
";"):k.return_(l)});break;case q.Literal:r=this.escape(a.value);this.assign(c,r);e(r);break;case q.UnaryExpression:this.recurse(a.argument,u,u,function(a){l=a});r=a.operator+"("+this.ifDefined(l,0)+")";this.assign(c,r);e(r);break;case q.BinaryExpression:this.recurse(a.left,u,u,function(a){g=a});this.recurse(a.right,u,u,function(a){l=a});r="+"===a.operator?this.plus(g,l):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(l,0):"("+g+")"+a.operator+"("+l+")";this.assign(c,r);e(r);break;case q.LogicalExpression:c=
c||this.nextId();k.recurse(a.left,c);k.if_("&&"===a.operator?c:k.not(c),k.lazyRecurse(a.right,c));e(c);break;case q.ConditionalExpression:c=c||this.nextId();k.recurse(a.test,c);k.if_(c,k.lazyRecurse(a.alternate,c),k.lazyRecurse(a.consequent,c));e(c);break;case q.Identifier:c=c||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);Ba(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),
function(){k.if_("inputs"===k.stage||"s",function(){f&&1!==f&&k.if_(k.not(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(c,k.nonComputedMember("s",a.name))})},c&&k.lazyAssign(c,k.nonComputedMember("l",a.name)));(k.state.expensiveChecks||Cb(a.name))&&k.addEnsureSafeObject(c);e(c);break;case q.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();c=c||this.nextId();k.recurse(a.object,g,u,function(){k.if_(k.notNull(g),function(){if(a.computed)l=
k.nextId(),k.recurse(a.property,l),k.addEnsureSafeMemberName(l),f&&1!==f&&k.if_(k.not(k.computedMember(g,l)),k.lazyAssign(k.computedMember(g,l),"{}")),r=k.ensureSafeObject(k.computedMember(g,l)),k.assign(c,r),d&&(d.computed=!0,d.name=l);else{Ba(a.property.name);f&&1!==f&&k.if_(k.not(k.nonComputedMember(g,a.property.name)),k.lazyAssign(k.nonComputedMember(g,a.property.name),"{}"));r=k.nonComputedMember(g,a.property.name);if(k.state.expensiveChecks||Cb(a.property.name))r=k.ensureSafeObject(r);k.assign(c,
r);d&&(d.computed=!1,d.name=a.property.name)}e(c)})},!!f);break;case q.CallExpression:c=c||this.nextId();a.filter?(l=k.filter(a.callee.name),m=[],n(a.arguments,function(a){var c=k.nextId();k.recurse(a,c);m.push(c)}),r=l+"("+m.join(",")+")",k.assign(c,r),e(c)):(l=k.nextId(),g={},m=[],k.recurse(a.callee,l,g,function(){k.if_(k.notNull(l),function(){k.addEnsureSafeFunction(l);n(a.arguments,function(a){k.recurse(a,k.nextId(),u,function(a){m.push(k.ensureSafeObject(a))})});g.name?(k.state.expensiveChecks||
k.addEnsureSafeObject(g.context),r=k.member(g.context,g.name,g.computed)+"("+m.join(",")+")"):r=l+"("+m.join(",")+")";r=k.ensureSafeObject(r);k.assign(c,r);e(c)})}));break;case q.AssignmentExpression:l=this.nextId();g={};if(!jd(a.left))throw ca("lval");this.recurse(a.left,u,g,function(){k.if_(k.notNull(g.context),function(){k.recurse(a.right,l);k.addEnsureSafeObject(k.member(g.context,g.name,g.computed));r=k.member(g.context,g.name,g.computed)+a.operator+l;k.assign(c,r);e(c||r)})},1);break;case q.ArrayExpression:m=
[];n(a.elements,function(a){k.recurse(a,k.nextId(),u,function(a){m.push(a)})});r="["+m.join(",")+"]";this.assign(c,r);e(r);break;case q.ObjectExpression:m=[];n(a.properties,function(a){k.recurse(a.value,k.nextId(),u,function(c){m.push(k.escape(a.key.type===q.Identifier?a.key.name:""+a.key.value)+":"+c)})});r="{"+m.join(",")+"}";this.assign(c,r);e(r);break;case q.ThisExpression:this.assign(c,"s");e("s");break;case q.NGValueParameter:this.assign(c,"v"),e("v")}},getHasOwnProperty:function(a,c){var d=
a+"."+c,e=this.current().own;e.hasOwnProperty(d)||(e[d]=this.nextId(!1,a+"&&("+this.escape(c)+" in "+a+")"));return e[d]},assign:function(a,c){if(a)return this.current().body.push(a,"=",c,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,c){return"ifDefined("+a+","+this.escape(c)+")"},plus:function(a,c){return"plus("+a+","+c+")"},return_:function(a){this.current().body.push("return ",a,";")},
if_:function(a,c,d){if(!0===a)c();else{var e=this.current().body;e.push("if(",a,"){");c();e.push("}");d&&(e.push("else{"),d(),e.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,c){return a+"."+c},computedMember:function(a,c){return a+"["+c+"]"},member:function(a,c,d){return d?this.computedMember(a,c):this.nonComputedMember(a,c)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),
";")},addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},lazyRecurse:function(a,c,d,e,f,h){var g=this;return function(){g.recurse(a,c,d,e,f,h)}},lazyAssign:function(a,c){var d=this;return function(){d.assign(a,c)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,
stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(C(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(V(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw ca("esc");},nextId:function(a,c){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(c?"="+c:""));return d},current:function(){return this.state[this.state.computing]}};
nd.prototype={compile:function(a,c){var d=this,e=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=c;W(e,d.$filter);var f,h;if(f=kd(e))h=this.recurse(f);f=id(e.body);var g;f&&(g=[],n(f,function(a,c){var e=d.recurse(a);a.input=e;g.push(e);a.watchId=c}));var l=[];n(e.body,function(a){l.push(d.recurse(a.expression))});f=0===e.body.length?function(){}:1===e.body.length?l[0]:function(a,c){var d;n(l,function(e){d=e(a,c)});return d};h&&(f.assign=function(a,c,d){return h(a,d,c)});g&&(f.inputs=
g);f.literal=ld(e);f.constant=e.constant;return f},recurse:function(a,c,d){var e,f,h=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case q.Literal:return this.value(a.value,c);case q.UnaryExpression:return f=this.recurse(a.argument),this["unary"+a.operator](f,c);case q.BinaryExpression:return e=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](e,f,c);case q.LogicalExpression:return e=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](e,
f,c);case q.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),c);case q.Identifier:return Ba(a.name,h.expression),h.identifier(a.name,h.expensiveChecks||Cb(a.name),c,d,h.expression);case q.MemberExpression:return e=this.recurse(a.object,!1,!!d),a.computed||(Ba(a.property.name,h.expression),f=a.property.name),a.computed&&(f=this.recurse(a.property)),a.computed?this.computedMember(e,f,c,d,h.expression):this.nonComputedMember(e,f,
h.expensiveChecks,c,d,h.expression);case q.CallExpression:return g=[],n(a.arguments,function(a){g.push(h.recurse(a))}),a.filter&&(f=this.$filter(a.callee.name)),a.filter||(f=this.recurse(a.callee,!0)),a.filter?function(a,d,e,h){for(var n=[],q=0;q<g.length;++q)n.push(g[q](a,d,e,h));a=f.apply(u,n,h);return c?{context:u,name:u,value:a}:a}:function(a,d,e,r){var n=f(a,d,e,r),q;if(null!=n.value){ha(n.context,h.expression);gd(n.value,h.expression);q=[];for(var s=0;s<g.length;++s)q.push(ha(g[s](a,d,e,r),
h.expression));q=ha(n.value.apply(n.context,q),h.expression)}return c?{value:q}:q};case q.AssignmentExpression:return e=this.recurse(a.left,!0,1),f=this.recurse(a.right),function(a,d,g,r){var n=e(a,d,g,r);a=f(a,d,g,r);ha(n.value,h.expression);n.context[n.name]=a;return c?{value:a}:a};case q.ArrayExpression:return g=[],n(a.elements,function(a){g.push(h.recurse(a))}),function(a,d,e,f){for(var h=[],n=0;n<g.length;++n)h.push(g[n](a,d,e,f));return c?{value:h}:h};case q.ObjectExpression:return g=[],n(a.properties,
function(a){g.push({key:a.key.type===q.Identifier?a.key.name:""+a.key.value,value:h.recurse(a.value)})}),function(a,d,e,f){for(var h={},n=0;n<g.length;++n)h[g[n].key]=g[n].value(a,d,e,f);return c?{value:h}:h};case q.ThisExpression:return function(a){return c?{value:a}:a};case q.NGValueParameter:return function(a,d,e,f){return c?{value:e}:e}}},"unary+":function(a,c){return function(d,e,f,h){d=a(d,e,f,h);d=x(d)?+d:0;return c?{value:d}:d}},"unary-":function(a,c){return function(d,e,f,h){d=a(d,e,f,h);
d=x(d)?-d:0;return c?{value:d}:d}},"unary!":function(a,c){return function(d,e,f,h){d=!a(d,e,f,h);return c?{value:d}:d}},"binary+":function(a,c,d){return function(e,f,h,g){var l=a(e,f,h,g);e=c(e,f,h,g);l=hd(l,e);return d?{value:l}:l}},"binary-":function(a,c,d){return function(e,f,h,g){var l=a(e,f,h,g);e=c(e,f,h,g);l=(x(l)?l:0)-(x(e)?e:0);return d?{value:l}:l}},"binary*":function(a,c,d){return function(e,f,h,g){e=a(e,f,h,g)*c(e,f,h,g);return d?{value:e}:e}},"binary/":function(a,c,d){return function(e,
f,h,g){e=a(e,f,h,g)/c(e,f,h,g);return d?{value:e}:e}},"binary%":function(a,c,d){return function(e,f,h,g){e=a(e,f,h,g)%c(e,f,h,g);return d?{value:e}:e}},"binary===":function(a,c,d){return function(e,f,h,g){e=a(e,f,h,g)===c(e,f,h,g);return d?{value:e}:e}},"binary!==":function(a,c,d){return function(e,f,h,g){e=a(e,f,h,g)!==c(e,f,h,g);return d?{value:e}:e}},"binary==":function(a,c,d){return function(e,f,h,g){e=a(e,f,h,g)==c(e,f,h,g);return d?{value:e}:e}},"binary!=":function(a,c,d){return function(e,
f,h,g){e=a(e,f,h,g)!=c(e,f,h,g);return d?{value:e}:e}},"binary<":function(a,c,d){return function(e,f,h,g){e=a(e,f,h,g)<c(e,f,h,g);return d?{value:e}:e}},"binary>":function(a,c,d){return function(e,f,h,g){e=a(e,f,h,g)>c(e,f,h,g);return d?{value:e}:e}},"binary<=":function(a,c,d){return function(e,f,h,g){e=a(e,f,h,g)<=c(e,f,h,g);return d?{value:e}:e}},"binary>=":function(a,c,d){return function(e,f,h,g){e=a(e,f,h,g)>=c(e,f,h,g);return d?{value:e}:e}},"binary&&":function(a,c,d){return function(e,f,h,g){e=
a(e,f,h,g)&&c(e,f,h,g);return d?{value:e}:e}},"binary||":function(a,c,d){return function(e,f,h,g){e=a(e,f,h,g)||c(e,f,h,g);return d?{value:e}:e}},"ternary?:":function(a,c,d,e){return function(f,h,g,l){f=a(f,h,g,l)?c(f,h,g,l):d(f,h,g,l);return e?{value:f}:f}},value:function(a,c){return function(){return c?{context:u,name:u,value:a}:a}},identifier:function(a,c,d,e,f){return function(h,g,l,k){h=g&&a in g?g:h;e&&1!==e&&h&&!h[a]&&(h[a]={});g=h?h[a]:u;c&&ha(g,f);return d?{context:h,name:a,value:g}:g}},
computedMember:function(a,c,d,e,f){return function(h,g,l,k){var m=a(h,g,l,k),n,t;null!=m&&(n=c(h,g,l,k),Ba(n,f),e&&1!==e&&m&&!m[n]&&(m[n]={}),t=m[n],ha(t,f));return d?{context:m,name:n,value:t}:t}},nonComputedMember:function(a,c,d,e,f,h){return function(g,l,k,m){g=a(g,l,k,m);f&&1!==f&&g&&!g[c]&&(g[c]={});l=null!=g?g[c]:u;(d||Cb(c))&&ha(l,h);return e?{context:g,name:c,value:l}:l}},inputs:function(a,c){return function(d,e,f,h){return h?h[c]:a(d,e,f)}}};var ec=function(a,c,d){this.lexer=a;this.$filter=
c;this.options=d;this.ast=new q(this.lexer);this.astCompiler=d.csp?new nd(this.ast,c):new md(this.ast,c)};ec.prototype={constructor:ec,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};ka();ka();var Tf=Object.prototype.valueOf,Ca=J("$sce"),la={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ga=J("$compile"),Z=X.createElement("a"),rd=Aa(P.location.href);sd.$inject=["$document"];Fc.$inject=["$provide"];td.$inject=["$locale"];vd.$inject=["$locale"];
var yd=".",cg={yyyy:$("FullYear",4),yy:$("FullYear",2,0,!0),y:$("FullYear",1),MMMM:Eb("Month"),MMM:Eb("Month",!0),MM:$("Month",2,1),M:$("Month",1,1),dd:$("Date",2),d:$("Date",1),HH:$("Hours",2),H:$("Hours",1),hh:$("Hours",2,-12),h:$("Hours",1,-12),mm:$("Minutes",2),m:$("Minutes",1),ss:$("Seconds",2),s:$("Seconds",1),sss:$("Milliseconds",3),EEEE:Eb("Day"),EEE:Eb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a,c,d){a=-1*d;return a=(0<=a?"+":"")+(Db(Math[0<a?"floor":
"ceil"](a/60),2)+Db(Math.abs(a%60),2))},ww:Ad(2),w:Ad(1),G:gc,GG:gc,GGG:gc,GGGG:function(a,c){return 0>=a.getFullYear()?c.ERANAMES[0]:c.ERANAMES[1]}},bg=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,ag=/^\-?\d+$/;ud.$inject=["$locale"];var Yf=na(N),Zf=na(nb);wd.$inject=["$parse"];var de=na({restrict:"E",compile:function(a,c){if(!c.href&&!c.xlinkHref)return function(a,c){if("a"===c[0].nodeName.toLowerCase()){var f="[object SVGAnimatedString]"===qa.call(c.prop("href"))?
"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}}),ob={};n(xb,function(a,c){function d(a,d,f){a.$watch(f[e],function(a){f.$set(c,!!a)})}if("multiple"!=a){var e=wa("ng-"+c),f=d;"checked"===a&&(f=function(a,c,f){f.ngModel!==f[e]&&d(a,c,f)});ob[e]=function(){return{restrict:"A",priority:100,link:f}}}});n(Oc,function(a,c){ob[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(eg))){f.$set("ngPattern",
new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});n(["src","srcset","href"],function(a){var c=wa("ng-"+a);ob[c]=function(){return{priority:99,link:function(d,e,f){var h=a,g=a;"href"===a&&"[object SVGAnimatedString]"===qa.call(e.prop("href"))&&(g="xlinkHref",f.$attr[g]="xlink:href",h=null);f.$observe(c,function(c){c?(f.$set(g,c),fb&&h&&e.prop(h,f[g])):"href"===a&&f.$set(g,null)})}}}});var Fb={$addControl:s,$$renameControl:function(a,c){a.$name=c},$removeControl:s,$setValidity:s,
$setDirty:s,$setPristine:s,$setSubmitted:s};Bd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Id=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:Bd,compile:function(d,e){d.addClass(Pa).addClass(ib);var f=e.name?"name":a&&e.ngForm?"ngForm":!1;return{pre:function(a,d,e,k){if(!("action"in e)){var m=function(c){a.$apply(function(){k.$commitViewValue();k.$setSubmitted()});c.preventDefault()};d[0].addEventListener("submit",m,!1);d.on("$destroy",
function(){c(function(){d[0].removeEventListener("submit",m,!1)},0,!1)})}var n=k.$$parentForm;f&&(Bb(a,k.$name,k,k.$name),e.$observe(f,function(c){k.$name!==c&&(Bb(a,k.$name,u,k.$name),n.$$renameControl(k,c),Bb(a,k.$name,k,k.$name))}));d.on("$destroy",function(){n.$removeControl(k);f&&Bb(a,e[f],u,k.$name);Q(k,Fb)})}}}}}]},ee=Id(),re=Id(!0),dg=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,ng=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
og=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,pg=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Jd=/^(\d{4})-(\d{2})-(\d{2})$/,Kd=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,jc=/^(\d{4})-W(\d\d)$/,Ld=/^(\d{4})-(\d\d)$/,Md=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Nd={text:function(a,c,d,e,f,h){gb(a,c,d,e,f,h);hc(e)},date:hb("date",Jd,Hb(Jd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":hb("datetimelocal",Kd,Hb(Kd,"yyyy MM dd HH mm ss sss".split(" ")),
"yyyy-MM-ddTHH:mm:ss.sss"),time:hb("time",Md,Hb(Md,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:hb("week",jc,function(a,c){if(da(a))return a;if(C(a)){jc.lastIndex=0;var d=jc.exec(a);if(d){var e=+d[1],f=+d[2],h=d=0,g=0,l=0,k=zd(e),f=7*(f-1);c&&(d=c.getHours(),h=c.getMinutes(),g=c.getSeconds(),l=c.getMilliseconds());return new Date(e,0,k.getDate()+f,d,h,g,l)}}return NaN},"yyyy-Www"),month:hb("month",Ld,Hb(Ld,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,h){Dd(a,c,d,e);gb(a,c,d,e,f,h);e.$$parserName=
"number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:pg.test(a)?parseFloat(a):u});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!V(a))throw Ib("numfmt",a);a=a.toString()}return a});if(x(d.min)||d.ngMin){var g;e.$validators.min=function(a){return e.$isEmpty(a)||E(g)||a>=g};d.$observe("min",function(a){x(a)&&!V(a)&&(a=parseFloat(a,10));g=V(a)&&!isNaN(a)?a:u;e.$validate()})}if(x(d.max)||d.ngMax){var l;e.$validators.max=function(a){return e.$isEmpty(a)||E(l)||a<=l};d.$observe("max",function(a){x(a)&&
!V(a)&&(a=parseFloat(a,10));l=V(a)&&!isNaN(a)?a:u;e.$validate()})}},url:function(a,c,d,e,f,h){gb(a,c,d,e,f,h);hc(e);e.$$parserName="url";e.$validators.url=function(a,c){var d=a||c;return e.$isEmpty(d)||ng.test(d)}},email:function(a,c,d,e,f,h){gb(a,c,d,e,f,h);hc(e);e.$$parserName="email";e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||og.test(d)}},radio:function(a,c,d,e){E(d.name)&&c.attr("name",++jb);c.on("click",function(a){c[0].checked&&e.$setViewValue(d.value,a&&a.type)});e.$render=
function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,h,g,l){var k=Ed(l,a,"ngTrueValue",d.ngTrueValue,!0),m=Ed(l,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return!1===a};e.$formatters.push(function(a){return ia(a,k)});e.$parsers.push(function(a){return a?k:m})},hidden:s,button:s,submit:s,reset:s,file:s},zc=["$browser",
"$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,h,g,l){l[0]&&(Nd[N(g.type)]||Nd.text)(f,h,g,l[0],c,a,d,e)}}}}],qg=/^(true|false|\d+)$/,Je=function(){return{restrict:"A",priority:100,compile:function(a,c){return qg.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},je=["$compile",function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);
return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=a===u?"":a})}}}}],le=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,h){d=a(f.attr(h.$attr.ngBindTemplate));c.$$addBindingInfo(f,d.expressions);f=f[0];h.$observe("ngBindTemplate",function(a){f.textContent=a===u?"":a})}}}}],ke=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",compile:function(e,f){var h=c(f.ngBindHtml),
g=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(g,function(){e.html(a.getTrustedHtml(h(c))||"")})}}}}],Ie=na({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),me=ic("",!0),oe=ic("Odd",0),ne=ic("Even",1),pe=Ja({compile:function(a,c){c.$set("ngCloak",u);a.removeClass("ng-cloak")}}),qe=[function(){return{restrict:"A",scope:!0,controller:"@",
priority:500}}],Ec={},rg={blur:!0,focus:!0};n("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=wa("ng-"+a);Ec[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,h){var g=d(h[c],null,!0);return function(c,d){d.on(a,function(d){var f=function(){g(c,{$event:d})};rg[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var te=["$animate",function(a){return{multiElement:!0,
transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,h){var g,l,k;c.$watch(e.ngIf,function(c){c?l||h(function(c,f){l=f;c[c.length++]=X.createComment(" end ngIf: "+e.ngIf+" ");g={clone:c};a.enter(c,d.parent(),d)}):(k&&(k.remove(),k=null),l&&(l.$destroy(),l=null),g&&(k=mb(g.clone),a.leave(k).then(function(){k=null}),g=null))})}}}],ue=["$templateRequest","$anchorScroll","$animate","$sce",function(a,c,d,e){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",
controller:ba.noop,compile:function(f,h){var g=h.ngInclude||h.src,l=h.onload||"",k=h.autoscroll;return function(f,h,n,q,s){var u=0,v,p,w,I=function(){p&&(p.remove(),p=null);v&&(v.$destroy(),v=null);w&&(d.leave(w).then(function(){p=null}),p=w,w=null)};f.$watch(e.parseAsResourceUrl(g),function(e){var g=function(){!x(k)||k&&!f.$eval(k)||c()},n=++u;e?(a(e,!0).then(function(a){if(n===u){var c=f.$new();q.template=a;a=s(c,function(a){I();d.enter(a,null,h).then(g)});v=c;w=a;v.$emit("$includeContentLoaded",
e);f.$eval(l)}},function(){n===u&&(I(),f.$emit("$includeContentError",e))}),f.$emit("$includeContentRequested",e)):(I(),q.template=null)})}}}}],Le=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Hc(f.template,X).childNodes)(c,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),a(d.contents())(c))}}}],ve=Ja({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),
He=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",h="false"!==d.ngTrim,g=h?U(f):f;e.$parsers.push(function(a){if(!E(a)){var c=[];a&&n(a.split(g),function(a){a&&c.push(h?U(a):a)});return c}});e.$formatters.push(function(a){return K(a)?a.join(f):u});e.$isEmpty=function(a){return!a||!a.length}}}},ib="ng-valid",Fd="ng-invalid",Pa="ng-pristine",Gb="ng-dirty",Hd="ng-pending",Ib=new J("ngModel"),sg=["$scope","$exceptionHandler","$attrs",
"$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,h,g,l,k,m){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=u;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=u;this.$name=m(d.name||"",!1)(a);var r=f(d.ngModel),t=r.assign,q=r,G=t,
O=null,v,p=this;this.$$setOptions=function(a){if((p.$options=a)&&a.getterSetter){var c=f(d.ngModel+"()"),g=f(d.ngModel+"($$$p)");q=function(a){var d=r(a);H(d)&&(d=c(a));return d};G=function(a,c){H(r(a))?g(a,{$$$p:p.$modelValue}):t(a,p.$modelValue)}}else if(!r.assign)throw Ib("nonassign",d.ngModel,ta(e));};this.$render=s;this.$isEmpty=function(a){return E(a)||""===a||null===a||a!==a};var w=e.inheritedData("$formController")||Fb,I=0;Cd({ctrl:this,$element:e,set:function(a,c){a[c]=!0},unset:function(a,
c){delete a[c]},parentForm:w,$animate:h});this.$setPristine=function(){p.$dirty=!1;p.$pristine=!0;h.removeClass(e,Gb);h.addClass(e,Pa)};this.$setDirty=function(){p.$dirty=!0;p.$pristine=!1;h.removeClass(e,Pa);h.addClass(e,Gb);w.$setDirty()};this.$setUntouched=function(){p.$touched=!1;p.$untouched=!0;h.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=function(){p.$touched=!0;p.$untouched=!1;h.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){g.cancel(O);p.$viewValue=
p.$$lastCommittedViewValue;p.$render()};this.$validate=function(){if(!V(p.$modelValue)||!isNaN(p.$modelValue)){var a=p.$$rawModelValue,c=p.$valid,d=p.$modelValue,e=p.$options&&p.$options.allowInvalid;p.$$runValidators(a,p.$$lastCommittedViewValue,function(f){e||c===f||(p.$modelValue=f?a:u,p.$modelValue!==d&&p.$$writeModelToScope())})}};this.$$runValidators=function(a,c,d){function e(){var d=!0;n(p.$validators,function(e,f){var h=e(a,c);d=d&&h;g(f,h)});return d?!0:(n(p.$asyncValidators,function(a,
c){g(c,null)}),!1)}function f(){var d=[],e=!0;n(p.$asyncValidators,function(f,h){var k=f(a,c);if(!k||!H(k.then))throw Ib("$asyncValidators",k);g(h,u);d.push(k.then(function(){g(h,!0)},function(a){e=!1;g(h,!1)}))});d.length?k.all(d).then(function(){h(e)},s):h(!0)}function g(a,c){l===I&&p.$setValidity(a,c)}function h(a){l===I&&d(a)}I++;var l=I;(function(){var a=p.$$parserName||"parse";if(v===u)g(a,null);else return v||(n(p.$validators,function(a,c){g(c,null)}),n(p.$asyncValidators,function(a,c){g(c,
null)})),g(a,v),v;return!0})()?e()?f():h(!1):h(!1)};this.$commitViewValue=function(){var a=p.$viewValue;g.cancel(O);if(p.$$lastCommittedViewValue!==a||""===a&&p.$$hasNativeValidators)p.$$lastCommittedViewValue=a,p.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var c=p.$$lastCommittedViewValue;if(v=E(c)?u:!0)for(var d=0;d<p.$parsers.length;d++)if(c=p.$parsers[d](c),E(c)){v=!1;break}V(p.$modelValue)&&isNaN(p.$modelValue)&&(p.$modelValue=q(a));var e=p.$modelValue,
f=p.$options&&p.$options.allowInvalid;p.$$rawModelValue=c;f&&(p.$modelValue=c,p.$modelValue!==e&&p.$$writeModelToScope());p.$$runValidators(c,p.$$lastCommittedViewValue,function(a){f||(p.$modelValue=a?c:u,p.$modelValue!==e&&p.$$writeModelToScope())})};this.$$writeModelToScope=function(){G(a,p.$modelValue);n(p.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};this.$setViewValue=function(a,c){p.$viewValue=a;p.$options&&!p.$options.updateOnDefault||p.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=
function(c){var d=0,e=p.$options;e&&x(e.debounce)&&(e=e.debounce,V(e)?d=e:V(e[c])?d=e[c]:V(e["default"])&&(d=e["default"]));g.cancel(O);d?O=g(function(){p.$commitViewValue()},d):l.$$phase?p.$commitViewValue():a.$apply(function(){p.$commitViewValue()})};a.$watch(function(){var c=q(a);if(c!==p.$modelValue&&(p.$modelValue===p.$modelValue||c===c)){p.$modelValue=p.$$rawModelValue=c;v=u;for(var d=p.$formatters,e=d.length,f=c;e--;)f=d[e](f);p.$viewValue!==f&&(p.$viewValue=p.$$lastCommittedViewValue=f,p.$render(),
p.$$runValidators(c,f,s))}return c})}],Ge=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:sg,priority:1,compile:function(c){c.addClass(Pa).addClass("ng-untouched").addClass(ib);return{pre:function(a,c,f,h){var g=h[0],l=h[1]||Fb;g.$$setOptions(h[2]&&h[2].$options);l.$addControl(g);f.$observe("name",function(a){g.$name!==a&&l.$$renameControl(g,a)});a.$on("$destroy",function(){l.$removeControl(g)})},post:function(c,e,f,h){var g=h[0];if(g.$options&&
g.$options.updateOn)e.on(g.$options.updateOn,function(a){g.$$debounceViewValueCommit(a&&a.type)});e.on("blur",function(e){g.$touched||(a.$$phase?c.$evalAsync(g.$setTouched):c.$apply(g.$setTouched))})}}}}}],tg=/(\s+|^)default(\s+|$)/,Ke=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=sa(a.$eval(c.ngModelOptions));this.$options.updateOn!==u?(this.$options.updateOnDefault=!1,this.$options.updateOn=U(this.$options.updateOn.replace(tg,function(){d.$options.updateOnDefault=
!0;return" "}))):this.$options.updateOnDefault=!0}]}},we=Ja({terminal:!0,priority:1E3}),ug=J("ngOptions"),vg=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,Ee=["$compile","$parse",function(a,c){function d(a,d,e){function f(a,c,d,e,g){this.selectValue=a;this.viewValue=c;this.label=d;this.group=e;this.disabled=g}
var m=a.match(vg);if(!m)throw ug("iexp",a,ta(d));var n=m[5]||m[7],q=m[6];a=/ as /.test(m[0])&&m[1];var s=m[9];d=c(m[2]?m[1]:n);var u=a&&c(a)||d,x=s&&c(s),v=s?function(a,c){return x(e,c)}:function(a){return Ea(a)},p=c(m[2]||m[1]),w=c(m[3]||""),I=c(m[4]||""),z=c(m[8]),A={},M=q?function(a,c){A[q]=c;A[n]=a;return A}:function(a){A[n]=a;return A};return{trackBy:s,getWatchables:c(z,function(a){var c=[];a=a||[];Object.keys(a).forEach(function(d){var f=M(a[d],d);d=v(a[d],f);c.push(d);m[2]&&(d=p(e,f),c.push(d));
m[4]&&(f=I(e,f),c.push(f))});return c}),getOptions:function(){var a=[],c={},d=z(e)||[];Object.keys(d).forEach(function(g){if("$"!==g.charAt(0)){var h=M(d[g],g),m=u(e,h);g=v(m,h);var n=p(e,h),r=w(e,h),h=I(e,h),m=new f(g,m,n,r,h);a.push(m);c[g]=m}});return{items:a,selectValueMap:c,getOptionFromViewValue:function(a){return c[v(a,M(a))]},getViewValueFromOption:function(a){return s?ba.copy(a.viewValue):a.viewValue}}}}}var e=X.createElement("option"),f=X.createElement("optgroup");return{restrict:"A",terminal:!0,
require:["select","?ngModel"],link:function(c,g,l,k){function m(a,c){a.element=c;c.disabled=a.disabled;a.value!==c.value&&(c.value=a.selectValue);a.label!==c.label&&(c.label=a.label,c.textContent=a.label)}function r(a,c,d,e){c&&N(c.nodeName)===d?d=c:(d=e.cloneNode(!1),c?a.insertBefore(d,c):a.appendChild(d));return d}function q(a){for(var c;a;)c=a.nextSibling,Ub(a),a=c}function s(a){var c=p&&p[0],d=I&&I[0];if(c||d)for(;a&&(a===c||a===d);)a=a.nextSibling;return a}function u(){var a=z&&v.readValue();
z=A.getOptions();var c={},d=g[0].firstChild;w&&g.prepend(p);d=s(d);z.items.forEach(function(a){var h,k;a.group?(h=c[a.group],h||(h=r(g[0],d,"optgroup",f),d=h.nextSibling,h.label=a.group,h=c[a.group]={groupElement:h,currentOptionElement:h.firstChild}),k=r(h.groupElement,h.currentOptionElement,"option",e),m(a,k),h.currentOptionElement=k.nextSibling):(k=r(g[0],d,"option",e),m(a,k),d=k.nextSibling)});Object.keys(c).forEach(function(a){q(c[a].currentOptionElement)});q(d);x.$render();if(!x.$isEmpty(a)){var h=
v.readValue();if(A.trackBy&&!ia(a,h)||a!==h)x.$setViewValue(h),x.$render()}}var x=k[1];if(x){var v=k[0];k=l.multiple;var p=v.emptyOption,w=!!p,I=F(e.cloneNode(!1));I.val("?");var z,A=d(l.ngOptions,g,c);v.writeValue=function(a){var c=z.getOptionFromViewValue(a);c&&!c.disabled?g[0].value!==c.selectValue&&(I.remove(),w||p.remove(),g[0].value=c.selectValue,c.element.selected=!0,c.element.setAttribute("selected","selected")):null===a||w?(I.remove(),w||g.prepend(p),g.val(""),p.prop("selected",!0),p.attr("selected",
!0)):(w||p.remove(),g.prepend(I),g.val("?"),I.prop("selected",!0),I.attr("selected",!0))};v.readValue=function(){var a=z.selectValueMap[g.val()];return a&&!a.disabled?(w||p.remove(),I.remove(),z.getViewValueFromOption(a)):null};k&&(x.$isEmpty=function(a){return!a||0===a.length},v.writeValue=function(a){z.items.forEach(function(a){a.element.selected=!1});a&&a.forEach(function(a){(a=z.getOptionFromViewValue(a))&&!a.disabled&&(a.element.selected=!0)})},v.readValue=function(){var a=g.val()||[],c=[];n(a,
function(a){a=z.selectValueMap[a];a.disabled||c.push(z.getViewValueFromOption(a))});return c});w?(p.remove(),a(p)(c),p.removeClass("ng-scope")):p=F(e.cloneNode(!1));u();c.$watchCollection(A.getWatchables,u);A.trackBy&&c.$watch(l.ngModel,function(){x.$render()},!0)}}}}],xe=["$locale","$interpolate","$log",function(a,c,d){var e=/{}/g,f=/^when(Minus)?(.+)$/;return{link:function(h,g,l){function k(a){g.text(a||"")}var m=l.count,r=l.$attr.when&&g.attr(l.$attr.when),q=l.offset||0,u=h.$eval(r)||{},x={},F=
c.startSymbol(),v=c.endSymbol(),p=F+m+"-"+q+v,w=ba.noop,I;n(l,function(a,c){var d=f.exec(c);d&&(d=(d[1]?"-":"")+N(d[2]),u[d]=g.attr(l.$attr[c]))});n(u,function(a,d){x[d]=c(a.replace(e,p))});h.$watch(m,function(c){var e=parseFloat(c),f=isNaN(e);f||e in u||(e=a.pluralCat(e-q));e===I||f&&V(I)&&isNaN(I)||(w(),f=x[e],E(f)?(null!=c&&d.debug("ngPluralize: no rule defined for '"+e+"' in "+r),w=s,k()):w=h.$watch(f,k),I=e)})}}}],ye=["$parse","$animate",function(a,c){var d=J("ngRepeat"),e=function(a,c,d,e,k,
m,n){a[d]=e;k&&(a[k]=m);a.$index=c;a.$first=0===c;a.$last=c===n-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,h){var g=h.ngRepeat,l=X.createComment(" end ngRepeat: "+g+" "),k=g.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!k)throw d("iexp",g);var m=k[1],r=k[2],q=k[3],s=k[4],k=m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);
if(!k)throw d("iidexp",m);var x=k[3]||k[1],E=k[2];if(q&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(q)))throw d("badident",q);var v,p,w,I,z={$id:Ea};s?v=a(s):(w=function(a,c){return Ea(c)},I=function(a){return a});return function(a,f,h,k,m){v&&(p=function(c,d,e){E&&(z[E]=c);z[x]=d;z.$index=e;return v(a,z)});var s=ka();a.$watchCollection(r,function(h){var k,r,v=f[0],y,z=ka(),B,D,H,L,J,C,K;q&&(a[q]=h);if(Qa(h))J=
h,r=p||w;else for(K in r=p||I,J=[],h)h.hasOwnProperty(K)&&"$"!==K.charAt(0)&&J.push(K);B=J.length;K=Array(B);for(k=0;k<B;k++)if(D=h===J?k:J[k],H=h[D],L=r(D,H,k),s[L])C=s[L],delete s[L],z[L]=C,K[k]=C;else{if(z[L])throw n(K,function(a){a&&a.scope&&(s[a.id]=a)}),d("dupes",g,L,H);K[k]={id:L,scope:u,clone:u};z[L]=!0}for(y in s){C=s[y];L=mb(C.clone);c.leave(L);if(L[0].parentNode)for(k=0,r=L.length;k<r;k++)L[k].$$NG_REMOVED=!0;C.scope.$destroy()}for(k=0;k<B;k++)if(D=h===J?k:J[k],H=h[D],C=K[k],C.scope){y=
v;do y=y.nextSibling;while(y&&y.$$NG_REMOVED);C.clone[0]!=y&&c.move(mb(C.clone),null,F(v));v=C.clone[C.clone.length-1];e(C.scope,k,x,H,E,D,B)}else m(function(a,d){C.scope=d;var f=l.cloneNode(!1);a[a.length++]=f;c.enter(a,null,F(v));v=f;C.clone=a;z[C.id]=C;e(C.scope,k,x,H,E,D,B)});s=z})}}}}],ze=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],se=["$animate",
function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Ae=Ja(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&n(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Be=["$animate",function(a){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var h=[],g=[],l=[],k=[],m=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||
e.on,function(c){var d,e;d=0;for(e=l.length;d<e;++d)a.cancel(l[d]);d=l.length=0;for(e=k.length;d<e;++d){var q=mb(g[d].clone);k[d].$destroy();(l[d]=a.leave(q)).then(m(l,d))}g.length=0;k.length=0;(h=f.cases["!"+c]||f.cases["?"])&&n(h,function(c){c.transclude(function(d,e){k.push(e);var f=c.element;d[d.length++]=X.createComment(" end ngSwitchWhen: ");g.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],Ce=Ja({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,
f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),De=Ja({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),Fe=Ja({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw J("ngTransclude")("orphan",ta(c));f(function(a){c.empty();c.append(a)})}}),fe=["$templateCache",function(a){return{restrict:"E",terminal:!0,
compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],wg={$setViewValue:s,$render:s},xg=["$element","$scope","$attrs",function(a,c,d){var e=this,f=new Oa;e.ngModelCtrl=wg;e.unknownOption=F(X.createElement("option"));e.renderUnknownOption=function(c){c="? "+Ea(c)+" ?";e.unknownOption.val(c);a.prepend(e.unknownOption);a.val(c)};c.$on("$destroy",function(){e.renderUnknownOption=s});e.removeUnknownOption=function(){e.unknownOption.parent()&&e.unknownOption.remove()};c=0;d=a.children();
for(var h=d.length;c<h;c++)if(""===d[c].value){e.emptyOption=d.eq(c);break}e.readValue=function(){e.removeUnknownOption();return a.val()};e.writeValue=function(c){e.hasOption(c)?(e.removeUnknownOption(),a.val(c),""===c&&e.emptyOption.prop("selected",!0)):E(c)&&e.emptyOption?(e.removeUnknownOption(),a.val("")):e.renderUnknownOption(c)};e.addOption=function(a){Na(a,'"option value"');var c=f.get(a)||0;f.put(a,c+1)};e.removeOption=function(a){var c=f.get(a);c&&(1===c?f.remove(a):f.put(a,c-1))};e.hasOption=
function(a){return!!f.get(a)}}],ge=function(){return{restrict:"E",require:["select","?ngModel"],controller:xg,link:function(a,c,d,e){var f=e[1];if(f){var h=e[0];h.ngModelCtrl=f;f.$render=function(){h.writeValue(f.$viewValue)};c.on("change",function(){a.$apply(function(){f.$setViewValue(h.readValue())})});if(d.multiple){h.readValue=function(){var a=[];n(c.find("option"),function(c){c.selected&&a.push(c.value)});return a};h.writeValue=function(a){var d=new Oa(a);n(c.find("option"),function(a){a.selected=
x(d.get(a.value))})};var g,l=NaN;a.$watch(function(){l!==f.$viewValue||ia(g,f.$viewValue)||(g=ea(f.$viewValue),f.$render());l=f.$viewValue});f.$isEmpty=function(a){return!a||0===a.length}}}}}},ie=["$interpolate",function(a){function c(a){a[0].hasAttribute("selected")&&(a[0].selected=!0)}return{restrict:"E",priority:100,compile:function(d,e){if(E(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),m=k.data("$selectController")||k.parent().data("$selectController");
m&&m.ngModelCtrl&&(f?a.$watch(f,function(a,f){e.$set("value",a);f!==a&&m.removeOption(f);m.addOption(a,d);m.ngModelCtrl.$render();c(d)}):(m.addOption(e.value,d),m.ngModelCtrl.$render(),c(d)),d.on("$destroy",function(){m.removeOption(e.value);m.ngModelCtrl.$render()}))}}}}],he=na({restrict:"E",terminal:!1}),Bc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},
Ac=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,h=d.ngPattern||d.pattern;d.$observe("pattern",function(a){C(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw J("ngPattern")("noregexp",h,a,ta(c));f=a||u;e.$validate()});e.$validators.pattern=function(a){return e.$isEmpty(a)||E(f)||f.test(a)}}}}},Dc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=-1;d.$observe("maxlength",function(a){a=aa(a);f=isNaN(a)?-1:a;e.$validate()});
e.$validators.maxlength=function(a,c){return 0>f||e.$isEmpty(c)||c.length<=f}}}}},Cc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=aa(a)||0;e.$validate()});e.$validators.minlength=function(a,c){return e.$isEmpty(c)||c.length>=f}}}}};P.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(Yd(),$d(ba),F(X).ready(function(){Ud(X,uc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-animate-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

/*
 AngularJS v1.4.0-rc.0
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
 */
(function(q,d,C){'use strict';function v(r,k,h){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,f,b,c,y){function z(){l&&(h.cancel(l),l=null);m&&(m.$destroy(),m=null);n&&(l=h.leave(n),l.then(function(){l=null}),n=null)}function x(){var b=r.current&&r.current.locals;if(d.isDefined(b&&b.$template)){var b=a.$new(),c=r.current;n=y(b,function(b){h.enter(b,null,n||f).then(function(){!d.isDefined(t)||t&&!a.$eval(t)||k()});z()});m=c.scope=b;m.$emit("$viewContentLoaded");
    m.$eval(w)}else z()}var m,n,l,t=b.autoscroll,w=b.onload||"";a.$on("$routeChangeSuccess",x);x()}}}function A(d,k,h){return{restrict:"ECA",priority:-400,link:function(a,f){var b=h.current,c=b.locals;f.html(c.$template);var y=d(f.contents());b.controller&&(c.$scope=a,c=k(b.controller,c),b.controllerAs&&(a[b.controllerAs]=c),f.data("$ngControllerController",c),f.children().data("$ngControllerController",c));y(a)}}}q=d.module("ngRoute",["ng"]).provider("$route",function(){function r(a,f){return d.extend(Object.create(a),
    f)}function k(a,d){var b=d.caseInsensitiveMatch,c={originalPath:a,regexp:a},h=c.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,d,b,c){a="?"===c?c:null;c="*"===c?c:null;h.push({name:b,optional:!!a});d=d||"";return""+(a?"":d)+"(?:"+(a?d:"")+(c&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");c.regexp=new RegExp("^"+a+"$",b?"i":"");return c}var h={};this.when=function(a,f){var b=d.copy(f);d.isUndefined(b.reloadOnSearch)&&(b.reloadOnSearch=!0);
    d.isUndefined(b.caseInsensitiveMatch)&&(b.caseInsensitiveMatch=this.caseInsensitiveMatch);h[a]=d.extend(b,a&&k(a,b));if(a){var c="/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";h[c]=d.extend({redirectTo:a},k(c,b))}return this};this.caseInsensitiveMatch=!1;this.otherwise=function(a){"string"===typeof a&&(a={redirectTo:a});this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(a,f,b,c,k,q,x){function m(b){var e=s.current;
    (v=(p=l())&&e&&p.$$route===e.$$route&&d.equals(p.pathParams,e.pathParams)&&!p.reloadOnSearch&&!w)||!e&&!p||a.$broadcast("$routeChangeStart",p,e).defaultPrevented&&b&&b.preventDefault()}function n(){var u=s.current,e=p;if(v)u.params=e.params,d.copy(u.params,b),a.$broadcast("$routeUpdate",u);else if(e||u)w=!1,(s.current=e)&&e.redirectTo&&(d.isString(e.redirectTo)?f.path(t(e.redirectTo,e.params)).search(e.params).replace():f.url(e.redirectTo(e.pathParams,f.path(),f.search())).replace()),c.when(e).then(function(){if(e){var a=
    d.extend({},e.resolve),b,g;d.forEach(a,function(b,e){a[e]=d.isString(b)?k.get(b):k.invoke(b,null,null,e)});d.isDefined(b=e.template)?d.isFunction(b)&&(b=b(e.params)):d.isDefined(g=e.templateUrl)&&(d.isFunction(g)&&(g=g(e.params)),g=x.getTrustedResourceUrl(g),d.isDefined(g)&&(e.loadedTemplateUrl=g,b=q(g)));d.isDefined(b)&&(a.$template=b);return c.all(a)}}).then(function(c){e==s.current&&(e&&(e.locals=c,d.copy(e.params,b)),a.$broadcast("$routeChangeSuccess",e,u))},function(b){e==s.current&&a.$broadcast("$routeChangeError",
    e,u,b)})}function l(){var a,b;d.forEach(h,function(c,h){var g;if(g=!b){var k=f.path();g=c.keys;var m={};if(c.regexp)if(k=c.regexp.exec(k)){for(var l=1,n=k.length;l<n;++l){var p=g[l-1],q=k[l];p&&q&&(m[p.name]=q)}g=m}else g=null;else g=null;g=a=g}g&&(b=r(c,{params:d.extend({},f.search(),a),pathParams:a}),b.$$route=c)});return b||h[null]&&r(h[null],{params:{},pathParams:{}})}function t(a,b){var c=[];d.forEach((a||"").split(":"),function(a,d){if(0===d)c.push(a);else{var f=a.match(/(\w+)(?:[?*])?(.*)/),
    h=f[1];c.push(b[h]);c.push(f[2]||"");delete b[h]}});return c.join("")}var w=!1,p,v,s={routes:h,reload:function(){w=!0;a.$evalAsync(function(){m();n()})},updateParams:function(a){if(this.current&&this.current.$$route)a=d.extend({},this.current.params,a),f.path(t(this.current.$$route.originalPath,a)),f.search(a);else throw B("norout");}};a.$on("$locationChangeStart",m);a.$on("$locationChangeSuccess",n);return s}]});var B=d.$$minErr("ngRoute");q.provider("$routeParams",function(){this.$get=function(){return{}}});
    q.directive("ngView",v);q.directive("ngView",A);v.$inject=["$route","$anchorScroll","$animate"];A.$inject=["$compile","$controller","$route"]})(window,window.angular);
/**
 * @license AngularJS v1.4.0-rc.0
 * (c) 2010-2015 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular, undefined) {'use strict';

    /* jshint ignore:start */
    var noop        = angular.noop;
    var extend      = angular.extend;
    var jqLite      = angular.element;
    var forEach     = angular.forEach;
    var isArray     = angular.isArray;
    var isString    = angular.isString;
    var isObject    = angular.isObject;
    var isUndefined = angular.isUndefined;
    var isDefined   = angular.isDefined;
    var isFunction  = angular.isFunction;
    var isElement   = angular.isElement;

    var ELEMENT_NODE = 1;
    var COMMENT_NODE = 8;

    var NG_ANIMATE_CHILDREN_DATA = '$$ngAnimateChildren';

    var isPromiseLike = function(p) {
        return p && p.then ? true : false;
    }

    function mergeClasses(a,b) {
        if (!a && !b) return '';
        if (!a) return b;
        if (!b) return a;
        if (isArray(a)) a = a.join(' ');
        if (isArray(b)) b = b.join(' ');
        return a + ' ' + b;
    }

    function packageStyles(options) {
        var styles = {};
        if (options && (options.to || options.from)) {
            styles.to = options.to;
            styles.from = options.from;
        }
        return styles;
    }

    function pendClasses(classes, fix, isPrefix) {
        var className = '';
        classes = isArray(classes)
            ? classes
            : classes && isString(classes) && classes.length
            ? classes.split(/\s+/)
            : [];
        forEach(classes, function(klass, i) {
            if (klass && klass.length > 0) {
                className += (i > 0) ? ' ' : '';
                className += isPrefix ? fix + klass
                    : klass + fix;
            }
        });
        return className;
    }

    function removeFromArray(arr, val) {
        var index = arr.indexOf(val);
        if (val >= 0) {
            arr.splice(index, 1);
        }
    }

    function stripCommentsFromElement(element) {
        if (element.nodeType === ELEMENT_NODE) {
            return jqLite(element);
        }
        if (element.length === 0) return [];

        // there is no point of stripping anything if the element
        // is the only element within the jqLite wrapper.
        // (it's important that we retain the element instance.)
        if (element.length === 1) {
            return element[0].nodeType === ELEMENT_NODE && element;
        } else {
            return jqLite(extractElementNode(element));
        }
    }

    function extractElementNode(element) {
        if (!element[0]) return element;
        for (var i = 0; i < element.length; i++) {
            var elm = element[i];
            if (elm.nodeType == ELEMENT_NODE) {
                return elm;
            }
        }
    }

    function $$addClass($$jqLite, element, className) {
        forEach(element, function(elm) {
            $$jqLite.addClass(elm, className);
        });
    }

    function $$removeClass($$jqLite, element, className) {
        forEach(element, function(elm) {
            $$jqLite.removeClass(elm, className);
        });
    }

    function applyAnimationClassesFactory($$jqLite) {
        return function(element, options) {
            if (options.addClass) {
                $$addClass($$jqLite, element, options.addClass);
                options.addClass = null;
            }
            if (options.removeClass) {
                $$removeClass($$jqLite, element, options.removeClass);
                element.removeClass(options.removeClass);
                options.removeClass = null;
            }
        }
    }

    function prepareAnimationOptions(options) {
        options = options || {};
        if (!options.$$prepared) {
            var domOperation = options.domOperation || noop;
            options.domOperation = function() {
                options.$$domOperationFired = true;
                domOperation();
                domOperation = noop;
            };
            options.$$prepared = true;
        }
        return options;
    }

    function applyAnimationStyles(element, options) {
        applyAnimationFromStyles(element, options);
        applyAnimationToStyles(element, options);
    }

    function applyAnimationFromStyles(element, options) {
        if (options.from) {
            element.css(options.from);
            options.from = null;
        }
    }

    function applyAnimationToStyles(element, options) {
        if (options.to) {
            element.css(options.to);
            options.to = null;
        }
    }

    function mergeAnimationOptions(element, target, newOptions) {
        var toAdd = (target.addClass || '') + ' ' + (newOptions.addClass || '');
        var toRemove = (target.removeClass || '') + ' ' + (newOptions.removeClass || '');
        var classes = resolveElementClasses(element.attr('class'), toAdd, toRemove);

        extend(target, newOptions);

        if (classes.addClass) {
            target.addClass = classes.addClass;
        } else {
            target.addClass = null;
        }

        if (classes.removeClass) {
            target.removeClass = classes.removeClass;
        } else {
            target.removeClass = null;
        }

        return target;
    }

    function resolveElementClasses(existing, toAdd, toRemove) {
        var ADD_CLASS = 1;
        var REMOVE_CLASS = -1;

        var flags = {};
        existing = splitClassesToLookup(existing);

        toAdd = splitClassesToLookup(toAdd);
        forEach(toAdd, function(value, key) {
            flags[key] = ADD_CLASS;
        });

        toRemove = splitClassesToLookup(toRemove);
        forEach(toRemove, function(value, key) {
            flags[key] = flags[key] === ADD_CLASS ? null : REMOVE_CLASS;
        });

        var classes = {
            addClass: '',
            removeClass: ''
        };

        forEach(flags, function(val, klass) {
            var prop, allow;
            if (val === ADD_CLASS) {
                prop = 'addClass';
                allow = !existing[klass];
            } else if (val === REMOVE_CLASS) {
                prop = 'removeClass';
                allow = existing[klass];
            }
            if (allow) {
                if (classes[prop].length) {
                    classes[prop] += ' ';
                }
                classes[prop] += klass;
            }
        });

        function splitClassesToLookup(classes) {
            if (isString(classes)) {
                classes = classes.split(' ');
            }

            var obj = {};
            forEach(classes, function(klass) {
                // sometimes the split leaves empty string values
                // incase extra spaces were applied to the options
                if (klass.length) {
                    obj[klass] = true;
                }
            });
            return obj;
        }

        return classes;
    }

    var $$AnimateChildrenDirective = [function() {
        return function(scope, element, attrs) {
            var val = attrs.ngAnimateChildren;
            if (angular.isString(val) && val.length === 0) { //empty attribute
                element.data(NG_ANIMATE_CHILDREN_DATA, true);
            } else {
                attrs.$observe('ngAnimateChildren', function(value) {
                    value = value === 'on' || value === 'true';
                    element.data(NG_ANIMATE_CHILDREN_DATA, value);
                });
            }
        };
    }];

    /**
     * @ngdoc service
     * @name $animateCss
     * @kind object
     *
     * @description
     * The `$animateCss` service is a useful utility to trigger customized CSS-based transitions/keyframes
     * from a JavaScript-based animation or directly from a directive. The purpose of `$animateCss` is NOT
     * to side-step how `$animate` and ngAnimate work, but the goal is to allow pre-existing animations or
     * directives to create more complex animations that can be purely driven using CSS code.
     *
     * Note that only browsers that support CSS transitions and/or keyframe animations are capable of
     * rendering animations triggered via `$animateCss` (bad news for IE9 and lower).
     *
     * ## Usage
     * Once again, `$animateCss` is designed to be used inside of a registered JavaScript animation that
     * is powered by ngAnimate. It is possible to use `$animateCss` directly inside of a directive, however,
     * any automatic control over cancelling animations and/or preventing animations from being run on
     * child elements will not be handled by Angular. For this to work as expected, please use `$animate` to
     * trigger the animation and then setup a JavaScript animation that injects `$animateCss` to trigger
     * the CSS animation.
     *
     * The example below shows how we can create a folding animation on an element using `ng-if`:
     *
     * ```html
     * <!-- notice the `fold-animation` CSS class -->
     * <div ng-if="onOff" class="fold-animation">
     *   This element will go BOOM
     * </div>
     * <button ng-click="onOff=true">Fold In</button>
     * ```
     *
     * Now we create the **JavaScript animation** that will trigger the CSS transition:
     *
     * ```js
     * ngModule.animation('.fold-animation', ['$animateCss', function($animateCss) {
 *   return {
 *     enter: function(element, doneFn) {
 *       var height = element[0].offsetHeight;
 *       var animation = $animateCss(element, {
 *         from: { height:'0px' },
 *         to: { height:height + 'px' },
 *         duration: 1 // one second
 *       });
 *
 *       // if no possible animation can be triggered due
 *       // to the combination of options then `animation`
 *       // will be returned as undefined
 *       animation.start().done(doneFn);
 *     }
 *   }
 * }]);
     * ```
     *
     * ## More Advanced Uses
     *
     * `$animateCss` is the underlying code that ngAnimate uses to power **CSS-based animations** behind the scenes. Therefore CSS hooks
     * like `.ng-EVENT`, `.ng-EVENT-active`, `.ng-EVENT-stagger` are all features that can be triggered using `$animateCss` via JavaScript code.
     *
     * This also means that just about any combination of adding classes, removing classes, setting styles, dynamically setting a keyframe animation,
     * applying a hardcoded duration or delay value, changing the animation easing or applying a stagger animation are all options that work with
     * `$animateCss`. The service itself is smart enough to figure out the combination of options and examine the element styling properties in order
     * to provide a working animation that will run in CSS.
     *
     * The example below showcases a more advanced version of the `.fold-animation` from the example above:
     *
     * ```js
     * ngModule.animation('.fold-animation', ['$animateCss', function($animateCss) {
 *   return {
 *     enter: function(element, doneFn) {
 *       var height = element[0].offsetHeight;
 *       var animation = $animateCss(element, {
 *         addClass: 'red large-text pulse-twice',
 *         easing: 'ease-out',
 *         from: { height:'0px' },
 *         to: { height:height + 'px' },
 *         duration: 1 // one second
 *       });
 *
 *       // if no possible animation can be triggered due
 *       // to the combination of options then `animation`
 *       // will be returned as undefined
 *       animation.start().done(doneFn);
 *     }
 *   }
 * }]);
     * ```
     *
     * Since we're adding/removing CSS classes then the CSS transition will also pick those up:
     *
     * ```css
     * /&#42; since a hardcoded duration value of 1 was provided in the JavaScript animation code,
     * the CSS classes below will be transitioned despite them being defined as regular CSS classes &#42;/
     * .red { background:red; }
     * .large-text { font-size:20px; }
     *
     * /&#42; we can also use a keyframe animation and $animateCss will make it work alongside the transition &#42;/
     * .pulse-twice {
 *   animation: 0.5s pulse linear 2;
 *   -webkit-animation: 0.5s pulse linear 2;
 * }
     *
     * @keyframes pulse {
 *   from { transform: scale(0.5); }
 *   to { transform: scale(1.5); }
 * }
     *
     * @-webkit-keyframes pulse {
 *   from { -webkit-transform: scale(0.5); }
 *   to { -webkit-transform: scale(1.5); }
 * }
     * ```
     *
     * Given this complex combination of CSS classes, styles and options, `$animateCss` will figure everything out and make the animation happen.
     *
     * ## How the Options are handled
     *
     * `$animateCss` is very versatile and intelligent when it comes to figuring out what configurations to apply to the element to ensure the animation
     * works with the options provided. Say for example we were adding a class that contained a keyframe value and we wanted to also animate some inline
     * styles using the `from` and `to` properties.
     *
     * ```js
     * var animation = $animateCss(element, {
 *   from: { background:'red' },
 *   to: { background:'blue' }
 * });
     * ```
     *
     * ```css
     * .rotating-animation {
 *   animation:0.5s rotate linear;
 *   -webkit-animation:0.5s rotate linear;
 * }
     *
     * @keyframes rotate {
 *   from { transform: rotate(0deg); }
 *   to { transform: rotate(360deg); }
 * }
     *
     * @-webkit-keyframes rotate {
 *   from { -webkit-transform: rotate(0deg); }
 *   to { -webkit-transform: rotate(360deg); }
 * }
     * ```
     *
     * The missing pieces here are that we do not have a transition set (within the CSS code nor within the `$animateCss` options) and the duration of the animation is
     * going to be detected from what the keyframe styles on the CSS class are. In this event, `$animateCss` will automatically create an inline transition
     * style matching the duration detected from the keyframe style (which is present in the CSS class that is being added) and then prepare both the transition
     * and keyframe animations to run in parallel on the element. Then when the animation is underway the provided `from` and `to` CSS styles will be applied
     * and spread across the transition and keyframe animation.
     *
     * ## What is returned
     *
     * `$animateCss` works in two stages: a preparation phase and an animation phase. Therefore when `$animateCss` is first called it will NOT actually
     * start the animation. All that is going on here is that the element is being prepared for the animation (which means that the generated CSS classes are
     * added and removed on the element). Once `$animateCss` is called it will return an object with the following properties:
     *
     * ```js
     * var animation = $animateCss(element, { ... });
     * ```
     *
     * Now what do the contents of our `animation` variable look like:
     *
     * ```js
     * {
 *   // starts the animation
 *   start: Function,
 *
 *   // ends (aborts) the animation
 *   end: Function,
 *
 *   // the total number of seconds that the animation will run for
 *   duration: Number,
 *
 *   // the total number of seconds that the animation will delay for before starting
 *   delay: Number,
 *
 *   // whether or not transitions were detected and will therefore be used for the animation
 *   transitions: Boolean,
 *
 *   // whether or not keyframe animations were detected and will therefore be used for the animation
 *   keyframes: Boolean
 * }
     * ```
     *
     * To actually start the animation we need to run `animation.start()` which will then return a promise that we can hook into to detect when the animation ends.
     * If we choose not to run the animation then we MUST run `animation.end()` to perform a cleanup on the element (since some CSS classes and stlyes may have been
     * applied to the element during the preparation phase). Note that all other properties such as duration, delay, transitions and keyframes are just properties
     * and that changing them will not reconfigure the parameters of the animation.
     *
     * By calling `animation.start()` we do get back a promise, however, due to the nature of animations we may not want to tap into the default behaviour of
     * animations (since they cause a digest to occur which may slow down the animation performance-wise). Therefore instead of calling `then` to capture when
     * the animation ends be sure to call `done(callback)` (this is the recommended way to use `$animateCss` within JavaScript-animations).
     *
     * The example below should put this into perspective:
     *
     * ```js
     * var animation = $animateCss(element, { ... });
     *
     * // remember that if there is no CSS animation detected on the element
     * // then the value returned from $animateCss will be null
     * if (animation) {
 *   animation.start().done(function() {
 *     // yaay the animation is over
 *     doneCallback();
 *   });
 * } else {
 *   doneCallback();
 * }
     * ```
     *
     * @param {DOMElement} element the element that will be animated
     * @param {object} options the animation-related options that will be applied during the animation
     *
     * * `event` - The DOM event (e.g. enter, leave, move). When used, a generated CSS class of `ng-EVENT` and `ng-EVENT-active` will be applied
     * to the element during the animation. Multiple events can be provided when spaces are used as a separator. (Note that this will not perform any DOM operation.)
     * * `easing` - The CSS easing value that will be applied to the transition or keyframe animation (or both).
     * * `transition` - The raw CSS transition style that will be used (e.g. `1s linear all`).
     * * `keyframe` - The raw CSS keyframe animation style that will be used (e.g. `1s my_animation linear`).
     * * `from` - The starting CSS styles (a key/value object) that will be applied at the start of the animation.
     * * `to` - The ending CSS styles (a key/value object) that will be applied across the animation via a CSS transition.
     * * `addClass` - A space separated list of CSS classes that will be added to the element and spread across the animation.
     * * `removeClass` - A space separated list of CSS classes that will be removed from the element and spread across the animation.
     * * `duration` - A number value representing the total duration of the transition and/or keyframe (note that a value of 1 is 1000ms). If a value of `0`
     * is provided then the animation will be skipped entirely.
     * * `delay` - A number value representing the total delay of the transition and/or keyframe (note that a value of 1 is 1000ms). If a value of `true` is
     * used then whatever delay value is detected from the CSS classes will be mirrored on the elements styles (e.g. by setting delay true then the style value
     * of the element will be `transition-delay: DETECTED_VALUE`). Using `true` is useful when you want the CSS classes and inline styles to all share the same
     * CSS delay value.
     * * `stagger` - A numeric time value representing the delay between successively animated elements
     * ({@link ngAnimate#css-staggering-animations Click here to learn how CSS-based staggering works in ngAnimate.})
     * * `staggerIndex` - The numeric index representing the stagger item (e.g. a value of 5 is equal to the sixth item in the stagger; therefore when a
     * `stagger` option value of `0.1` is used then there will be a stagger delay of `600ms`)
     *
     * @return {null|object} an object with a start method and details about the animation. If no animation is detected then a value of `null` will be returned.
     *
     * * `start` - The method to start the animation. This will return a `Promise` when called.
     * * `end` - This method will cancel the animation and remove all applied CSS classes and styles.
     */

// Detect proper transitionend/animationend event names.
    var CSS_PREFIX = '', TRANSITION_PROP, TRANSITIONEND_EVENT, ANIMATION_PROP, ANIMATIONEND_EVENT;

// If unprefixed events are not supported but webkit-prefixed are, use the latter.
// Otherwise, just use W3C names, browsers not supporting them at all will just ignore them.
// Note: Chrome implements `window.onwebkitanimationend` and doesn't implement `window.onanimationend`
// but at the same time dispatches the `animationend` event and not `webkitAnimationEnd`.
// Register both events in case `window.onanimationend` is not supported because of that,
// do the same for `transitionend` as Safari is likely to exhibit similar behavior.
// Also, the only modern browser that uses vendor prefixes for transitions/keyframes is webkit
// therefore there is no reason to test anymore for other vendor prefixes:
// http://caniuse.com/#search=transition
    if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
        CSS_PREFIX = '-webkit-';
        TRANSITION_PROP = 'WebkitTransition';
        TRANSITIONEND_EVENT = 'webkitTransitionEnd transitionend';
    } else {
        TRANSITION_PROP = 'transition';
        TRANSITIONEND_EVENT = 'transitionend';
    }

    if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
        CSS_PREFIX = '-webkit-';
        ANIMATION_PROP = 'WebkitAnimation';
        ANIMATIONEND_EVENT = 'webkitAnimationEnd animationend';
    } else {
        ANIMATION_PROP = 'animation';
        ANIMATIONEND_EVENT = 'animationend';
    }

    var DURATION_KEY = 'Duration';
    var PROPERTY_KEY = 'Property';
    var DELAY_KEY = 'Delay';
    var TIMING_KEY = 'TimingFunction';
    var ANIMATION_ITERATION_COUNT_KEY = 'IterationCount';
    var ANIMATION_PLAYSTATE_KEY = 'PlayState';
    var ELAPSED_TIME_MAX_DECIMAL_PLACES = 3;
    var CLOSING_TIME_BUFFER = 1.5;
    var ONE_SECOND = 1000;
    var BASE_TEN = 10;

    var SAFE_FAST_FORWARD_DURATION_VALUE = 9999;

    var ANIMATION_DELAY_PROP = ANIMATION_PROP + DELAY_KEY;
    var ANIMATION_DURATION_PROP = ANIMATION_PROP + DURATION_KEY;

    var TRANSITION_DELAY_PROP = TRANSITION_PROP + DELAY_KEY;
    var TRANSITION_DURATION_PROP = TRANSITION_PROP + DURATION_KEY;

    var DETECT_CSS_PROPERTIES = {
        transitionDuration:      TRANSITION_DURATION_PROP,
        transitionDelay:         TRANSITION_DELAY_PROP,
        transitionProperty:      TRANSITION_PROP + PROPERTY_KEY,
        animationDuration:       ANIMATION_DURATION_PROP,
        animationDelay:          ANIMATION_DELAY_PROP,
        animationIterationCount: ANIMATION_PROP + ANIMATION_ITERATION_COUNT_KEY
    };

    var DETECT_STAGGER_CSS_PROPERTIES = {
        transitionDuration:      TRANSITION_DURATION_PROP,
        transitionDelay:         TRANSITION_DELAY_PROP,
        animationDuration:       ANIMATION_DURATION_PROP,
        animationDelay:          ANIMATION_DELAY_PROP
    };

    function computeCssStyles($window, element, properties) {
        var styles = Object.create(null);
        var detectedStyles = $window.getComputedStyle(element) || {};
        forEach(properties, function(formalStyleName, actualStyleName) {
            var val = detectedStyles[formalStyleName];
            if (val) {
                var c = val.charAt(0);

                // only numerical-based values have a negative sign or digit as the first value
                if (c === '-' || c === '+' || c >= 0) {
                    val = parseMaxTime(val);
                }

                // by setting this to null in the event that the delay is not set or is set directly as 0
                // then we can still allow for zegative values to be used later on and not mistake this
                // value for being greater than any other negative value.
                if (val === 0) {
                    val = null;
                }
                styles[actualStyleName] = val;
            }
        });

        return styles;
    }

    function parseMaxTime(str) {
        var maxValue = 0;
        var values = str.split(/\s*,\s*/);
        forEach(values, function(value) {
            // it's always safe to consider only second values and omit `ms` values since
            // getComputedStyle will always handle the conversion for us
            if (value.charAt(value.length - 1) == 's') {
                value = value.substring(0, value.length - 1);
            }
            value = parseFloat(value) || 0;
            maxValue = maxValue ? Math.max(value, maxValue) : value;
        });
        return maxValue;
    }

    function truthyTimingValue(val) {
        return val === 0 || val != null;
    }

    function getCssTransitionDurationStyle(duration, applyOnlyDuration) {
        var style = TRANSITION_PROP;
        var value = duration + 's';
        if (applyOnlyDuration) {
            style += DURATION_KEY;
        } else {
            value += ' linear all';
        }
        return [style, value];
    }

    function getCssKeyframeDurationStyle(duration) {
        return [ANIMATION_DURATION_PROP, duration + 's'];
    }

    function getCssDelayStyle(delay, isKeyframeAnimation) {
        var prop = isKeyframeAnimation ? ANIMATION_DELAY_PROP : TRANSITION_DELAY_PROP;
        return [prop, delay + 's'];
    }

    function blockTransitions(node, duration) {
        // we use a negative delay value since it performs blocking
        // yet it doesn't kill any existing transitions running on the
        // same element which makes this safe for class-based animations
        var value = duration ? '-' + duration + 's' : '';
        applyInlineStyle(node, [TRANSITION_DELAY_PROP, value]);
        return [TRANSITION_DELAY_PROP, value];
    }

    function blockKeyframeAnimations(node, applyBlock) {
        var value = applyBlock ? 'paused' : '';
        var key = ANIMATION_PROP + ANIMATION_PLAYSTATE_KEY;
        applyInlineStyle(node, [key, value]);
        return [key, value];
    }

    function applyInlineStyle(node, styleTuple) {
        var prop = styleTuple[0];
        var value = styleTuple[1];
        node.style[prop] = value;
    }

    function createLocalCacheLookup() {
        var cache = Object.create(null);
        return {
            flush: function() {
                cache = Object.create(null);
            },

            count: function(key) {
                var entry = cache[key];
                return entry ? entry.total : 0;
            },

            get: function(key) {
                var entry = cache[key];
                return entry && entry.value;
            },

            put: function(key, value) {
                if (!cache[key]) {
                    cache[key] = { total: 1, value: value };
                } else {
                    cache[key].total++;
                }
            }
        };
    }

    var $AnimateCssProvider = ['$animateProvider', function($animateProvider) {
        var gcsLookup = createLocalCacheLookup();
        var gcsStaggerLookup = createLocalCacheLookup();

        this.$get = ['$window', '$$jqLite', '$$AnimateRunner', '$timeout',
            '$document', '$sniffer', '$$rAF',
            function($window,   $$jqLite,   $$AnimateRunner,   $timeout,
                     $document,   $sniffer,   $$rAF) {

                var applyAnimationClasses = applyAnimationClassesFactory($$jqLite);

                var parentCounter = 0;
                function gcsHashFn(node, extraClasses) {
                    var KEY = "$$ngAnimateParentKey";
                    var parentNode = node.parentNode;
                    var parentID = parentNode[KEY] || (parentNode[KEY] = ++parentCounter);
                    return parentID + '-' + node.getAttribute('class') + '-' + extraClasses;
                }

                function computeCachedCssStyles(node, className, cacheKey, properties) {
                    var timings = gcsLookup.get(cacheKey);

                    if (!timings) {
                        timings = computeCssStyles($window, node, properties);
                        if (timings.animationIterationCount === 'infinite') {
                            timings.animationIterationCount = 1;
                        }
                    }

                    // we keep putting this in multiple times even though the value and the cacheKey are the same
                    // because we're keeping an interal tally of how many duplicate animations are detected.
                    gcsLookup.put(cacheKey, timings);
                    return timings;
                }

                function computeCachedCssStaggerStyles(node, className, cacheKey, properties) {
                    var stagger;

                    // if we have one or more existing matches of matching elements
                    // containing the same parent + CSS styles (which is how cacheKey works)
                    // then staggering is possible
                    if (gcsLookup.count(cacheKey) > 0) {
                        stagger = gcsStaggerLookup.get(cacheKey);

                        if (!stagger) {
                            var staggerClassName = pendClasses(className, '-stagger');

                            $$jqLite.addClass(node, staggerClassName);

                            stagger = computeCssStyles($window, node, properties);

                            // force the conversion of a null value to zero incase not set
                            stagger.animationDuration = Math.max(stagger.animationDuration, 0);
                            stagger.transitionDuration = Math.max(stagger.transitionDuration, 0);

                            $$jqLite.removeClass(node, staggerClassName);

                            gcsStaggerLookup.put(cacheKey, stagger);
                        }
                    }

                    return stagger || {};
                }

                var bod = $document[0].body;
                var cancelLastRAFRequest;
                var rafWaitQueue = [];
                function waitUntilQuiet(callback) {
                    if (cancelLastRAFRequest) {
                        cancelLastRAFRequest(); //cancels the request
                    }
                    rafWaitQueue.push(callback);
                    cancelLastRAFRequest = $$rAF(function() {
                        cancelLastRAFRequest = null;
                        gcsLookup.flush();
                        gcsStaggerLookup.flush();

                        //the line below will force the browser to perform a repaint so
                        //that all the animated elements within the animation frame will
                        //be properly updated and drawn on screen. This is required to
                        //ensure that the preparation animation is properly flushed so that
                        //the active state picks up from there. DO NOT REMOVE THIS LINE.
                        //DO NOT OPTIMIZE THIS LINE. THE MINIFIER WILL REMOVE IT OTHERWISE WHICH
                        //WILL RESULT IN AN UNPREDICTABLE BUG THAT IS VERY HARD TO TRACK DOWN AND
                        //WILL TAKE YEARS AWAY FROM YOUR LIFE.
                        var width = bod.offsetWidth + 1;
                        forEach(rafWaitQueue, function(cb) {
                            cb(width);
                        });
                        rafWaitQueue.length = 0;
                    });
                }

                return init;

                function computeTimings(node, className, cacheKey) {
                    var timings = computeCachedCssStyles(node, className, cacheKey, DETECT_CSS_PROPERTIES);
                    var aD = timings.animationDelay;
                    var tD = timings.transitionDelay;
                    timings.maxDelay = aD && tD
                        ? Math.max(aD, tD)
                        : (aD || tD);
                    timings.maxDuration = Math.max(
                        timings.animationDuration * timings.animationIterationCount,
                        timings.transitionDuration);

                    return timings;
                }

                function init(element, options) {
                    var node = element[0];
                    options = prepareAnimationOptions(options);

                    var temporaryStyles = [];
                    var classes = element.attr('class');
                    var styles = packageStyles(options);
                    var animationClosed;
                    var animationPaused;
                    var animationCompleted;
                    var runner;
                    var runnerHost;
                    var maxDelay;
                    var maxDelayTime;
                    var maxDuration;
                    var maxDurationTime;

                    if (options.duration === 0 || (!$sniffer.animations && !$sniffer.transitions)) {
                        close();
                        return;
                    }

                    var method = options.event && isArray(options.event)
                        ? options.event.join(' ')
                        : options.event;

                    var isStructural = method && options.structural;
                    var structuralClassName = '';
                    var addRemoveClassName = '';

                    if (isStructural) {
                        structuralClassName = pendClasses(method, 'ng-', true);
                    } else if (method) {
                        structuralClassName = method;
                    }

                    if (options.addClass) {
                        addRemoveClassName += pendClasses(options.addClass, '-add');
                    }

                    if (options.removeClass) {
                        if (addRemoveClassName.length) {
                            addRemoveClassName += ' ';
                        }
                        addRemoveClassName += pendClasses(options.removeClass, '-remove');
                    }

                    var setupClasses = [structuralClassName, addRemoveClassName].join(' ').trim();
                    var fullClassName = classes + ' ' + setupClasses;
                    var activeClasses = pendClasses(setupClasses, '-active');
                    var hasToStyles = styles.to && Object.keys(styles.to).length > 0;

                    // there is no way we can trigger an animation since no styles and
                    // no classes are being applied which would then trigger a transition
                    if (!hasToStyles && !setupClasses) {
                        close();
                        return false;
                    }

                    var cacheKey, stagger;
                    if (options.stagger > 0) {
                        var staggerVal = parseFloat(options.stagger);
                        stagger = {
                            transitionDelay: staggerVal,
                            animationDelay: staggerVal,
                            transitionDuration: 0,
                            animationDuration: 0
                        };
                    } else {
                        cacheKey = gcsHashFn(node, fullClassName);
                        stagger = computeCachedCssStaggerStyles(node, setupClasses, cacheKey, DETECT_STAGGER_CSS_PROPERTIES);
                    }

                    $$jqLite.addClass(element, setupClasses);

                    var applyOnlyDuration;

                    if (options.transitionStyle) {
                        var transitionStyle = [TRANSITION_PROP, options.transitionStyle];
                        applyInlineStyle(node, transitionStyle);
                        temporaryStyles.push(transitionStyle);
                    }

                    if (options.duration >= 0) {
                        applyOnlyDuration = node.style[TRANSITION_PROP].length > 0;
                        var durationStyle = getCssTransitionDurationStyle(options.duration, applyOnlyDuration);

                        // we set the duration so that it will be picked up by getComputedStyle later
                        applyInlineStyle(node, durationStyle);
                        temporaryStyles.push(durationStyle);
                    }

                    if (options.keyframeStyle) {
                        var keyframeStyle = [ANIMATION_PROP, options.keyframeStyle];
                        applyInlineStyle(node, keyframeStyle);
                        temporaryStyles.push(keyframeStyle);
                    }

                    var itemIndex = stagger
                        ? options.staggerIndex >= 0
                        ? options.staggerIndex
                        : gcsLookup.count(cacheKey)
                        : 0;

                    var isFirst = itemIndex === 0;

                    // this is a pre-emptive way of forcing the setup classes to be added and applied INSTANTLY
                    // without causing any combination of transitions to kick in. By adding a negative delay value
                    // it forces the setup class' transition to end immediately. We later then remove the negative
                    // transition delay to allow for the transition to naturally do it's thing. The beauty here is
                    // that if there is no transition defined then nothing will happen and this will also allow
                    // other transitions to be stacked on top of each other without any chopping them out.
                    if (isFirst) {
                        blockTransitions(node, SAFE_FAST_FORWARD_DURATION_VALUE);
                    }

                    var timings = computeTimings(node, fullClassName, cacheKey);
                    var relativeDelay = timings.maxDelay;
                    maxDelay = Math.max(relativeDelay, 0);
                    maxDuration = timings.maxDuration;

                    var flags = {};
                    flags.hasTransitions          = timings.transitionDuration > 0;
                    flags.hasAnimations           = timings.animationDuration > 0;
                    flags.hasTransitionAll        = flags.hasTransitions && timings.transitionProperty == 'all';
                    flags.applyTransitionDuration = hasToStyles && (
                        (flags.hasTransitions && !flags.hasTransitionAll)
                        || (flags.hasAnimations && !flags.hasTransitions));
                    flags.applyAnimationDuration   = options.duration && flags.hasAnimations;
                    flags.applyTransitionDelay     = truthyTimingValue(options.delay) && (flags.applyTransitionDuration || flags.hasTransitions);
                    flags.applyAnimationDelay      = truthyTimingValue(options.delay) && flags.hasAnimations;
                    flags.recalculateTimingStyles  = addRemoveClassName.length > 0;

                    if (flags.applyTransitionDuration || flags.applyAnimationDuration) {
                        maxDuration = options.duration ? parseFloat(options.duration) : maxDuration;

                        if (flags.applyTransitionDuration) {
                            flags.hasTransitions = true;
                            timings.transitionDuration = maxDuration;
                            applyOnlyDuration = node.style[TRANSITION_PROP + PROPERTY_KEY].length > 0;
                            temporaryStyles.push(getCssTransitionDurationStyle(maxDuration, applyOnlyDuration));
                        }

                        if (flags.applyAnimationDuration) {
                            flags.hasAnimations = true;
                            timings.animationDuration = maxDuration;
                            temporaryStyles.push(getCssKeyframeDurationStyle(maxDuration));
                        }
                    }

                    flags.transitionClassBlock = timings.transitionProperty === 'none' &&
                        timings.transitionDuration === 0;

                    // there may be a situation where a structural animation is combined together
                    // with CSS classes that need to resolve before the animation is computed.
                    // However this means that there is no explicit CSS code to block the animation
                    // from happening (by setting 0s none in the class name). If this is the case
                    // we need to apply the classes before the first rAF so we know to continue if
                    // there actually is a detected transition or keyframe animation
                    var applyClassesEarly = maxDuration === 0
                        && isStructural
                        && addRemoveClassName.length > 0
                        && !flags.transitionClassBlock;

                    // this is an early check to avoid having to do another call to getComputedStyle
                    // call which is expensive. GCS calls are cached to speed things up.
                    if (!applyClassesEarly && maxDuration === 0 && !flags.recalculateTimingStyles) {
                        close();
                        return false;
                    }

                    if (applyClassesEarly) {
                        applyAnimationClasses(element, options);

                        // no need to calculate this anymore
                        flags.recalculateTimingStyles = false;

                        fullClassName = node.className + ' ' + setupClasses;
                        cacheKey = gcsHashFn(node, fullClassName);

                        timings = computeTimings(node, fullClassName, cacheKey);
                        relativeDelay = timings.maxDelay;
                        maxDelay = Math.max(relativeDelay, 0);
                        maxDuration = timings.maxDuration;
                    }

                    if (maxDuration === 0 && !flags.recalculateTimingStyles) {
                        close();
                        return false;
                    }

                    // we need to recalculate the delay value since we used a pre-emptive negative
                    // delay value and the delay value is required for the final event checking. This
                    // property will ensure that this will happen after the RAF phase has passed.
                    if (timings.transitionDuration > 0) {
                        flags.recalculateTimingStyles = flags.recalculateTimingStyles || isFirst;
                    }

                    maxDelayTime = maxDelay * ONE_SECOND;
                    maxDurationTime = maxDuration * ONE_SECOND;
                    if (!options.skipBlocking) {
                        flags.blockTransition = timings.transitionDuration > 0;
                        flags.blockKeyframeAnimation = timings.animationDuration > 0 &&
                            stagger.animationDelay > 0 &&
                            stagger.animationDuration === 0;
                    }

                    if (flags.blockTransition) {
                        applyAnimationFromStyles(element, options);
                    } else {
                        blockTransitions(node, false);
                    }

                    applyBlocking(maxDuration);

                    // TODO(matsko): for 1.5 change this code to have an animator object for better debugging
                    return {
                        end: endFn,
                        start: function() {
                            if (animationClosed) return;

                            runnerHost = {
                                end: endFn,
                                cancel: cancelFn,
                                resume: null, //this will be set during the start() phase
                                pause: null
                            };

                            runner = new $$AnimateRunner(runnerHost);

                            waitUntilQuiet(start);

                            // we don't have access to pause/resume the animation
                            // since it hasn't run yet. AnimateRunner will therefore
                            // set noop functions for resume and pause and they will
                            // later be overridden once the animation is triggered
                            return runner;
                        }
                    };

                    function endFn() {
                        close();
                    }

                    function cancelFn() {
                        close(true);
                    }

                    function close(rejected) { // jshint ignore:line
                        // if the promise has been called already then we shouldn't close
                        // the animation again
                        if (animationClosed || (animationCompleted && animationPaused)) return;
                        animationClosed = true;
                        animationPaused = false;

                        $$jqLite.removeClass(element, setupClasses);
                        $$jqLite.removeClass(element, activeClasses);

                        blockKeyframeAnimations(node, false);
                        blockTransitions(node, false);

                        forEach(temporaryStyles, function(entry) {
                            // There is only one way to remove inline style properties entirely from elements.
                            // By using `removeProperty` this works, but we need to convert camel-cased CSS
                            // styles down to hyphenated values.
                            node.style[entry[0]] = '';
                        });

                        applyAnimationClasses(element, options);
                        applyAnimationStyles(element, options);

                        // the reason why we have this option is to allow a synchronous closing callback
                        // that is fired as SOON as the animation ends (when the CSS is removed) or if
                        // the animation never takes off at all. A good example is a leave animation since
                        // the element must be removed just after the animation is over or else the element
                        // will appear on screen for one animation frame causing an overbearing flicker.
                        if (options.onDone) {
                            options.onDone();
                        }

                        // if the preparation function fails then the promise is not setup
                        if (runner) {
                            runner.complete(!rejected);
                        }
                    }

                    function applyBlocking(duration) {
                        if (flags.blockTransition) {
                            blockTransitions(node, duration);
                        }

                        if (flags.blockKeyframeAnimation) {
                            blockKeyframeAnimations(node, !!duration);
                        }
                    }

                    function start() {
                        if (animationClosed) return;

                        var startTime, events = [];

                        // even though we only pause keyframe animations here the pause flag
                        // will still happen when transitions are used. Only the transition will
                        // not be paused since that is not possible. If the animation ends when
                        // paused then it will not complete until unpaused or cancelled.
                        var playPause = function(playAnimation) {
                            if (!animationCompleted) {
                                animationPaused = !playAnimation;
                                if (timings.animationDuration) {
                                    var value = blockKeyframeAnimations(node, animationPaused);
                                    animationPaused
                                        ? temporaryStyles.push(value)
                                        : removeFromArray(temporaryStyles, value);
                                }
                            } else if (animationPaused && playAnimation) {
                                animationPaused = false;
                                close();
                            }
                        };

                        // checking the stagger duration prevents an accidently cascade of the CSS delay style
                        // being inherited from the parent. If the transition duration is zero then we can safely
                        // rely that the delay value is an intential stagger delay style.
                        var maxStagger = itemIndex > 0
                            && ((timings.transitionDuration && stagger.transitionDuration === 0) ||
                            (timings.animationDuration && stagger.animationDuration === 0))
                            && Math.max(stagger.animationDelay, stagger.transitionDelay);
                        if (maxStagger) {
                            $timeout(triggerAnimationStart,
                                Math.floor(maxStagger * itemIndex * ONE_SECOND),
                                false);
                        } else {
                            triggerAnimationStart();
                        }

                        // this will decorate the existing promise runner with pause/resume methods
                        runnerHost.resume = function() {
                            playPause(true);
                        };

                        runnerHost.pause = function() {
                            playPause(false);
                        };

                        function triggerAnimationStart() {
                            // just incase a stagger animation kicks in when the animation
                            // itself was cancelled entirely
                            if (animationClosed) return;

                            applyBlocking(false);

                            forEach(temporaryStyles, function(entry) {
                                var key = entry[0];
                                var value = entry[1];
                                node.style[key] = value;
                            });

                            applyAnimationClasses(element, options);
                            $$jqLite.addClass(element, activeClasses);

                            if (flags.recalculateTimingStyles) {
                                fullClassName = node.className + ' ' + setupClasses;
                                cacheKey = gcsHashFn(node, fullClassName);

                                timings = computeTimings(node, fullClassName, cacheKey);
                                relativeDelay = timings.maxDelay;
                                maxDelay = Math.max(relativeDelay, 0);
                                maxDuration = timings.maxDuration;

                                if (maxDuration === 0) {
                                    close();
                                    return;
                                }

                                flags.hasTransitions = timings.transitionDuration > 0;
                                flags.hasAnimations = timings.animationDuration > 0;
                            }

                            if (flags.applyTransitionDelay || flags.applyAnimationDelay) {
                                relativeDelay = typeof options.delay !== "boolean" && truthyTimingValue(options.delay)
                                    ? parseFloat(options.delay)
                                    : relativeDelay;

                                maxDelay = Math.max(relativeDelay, 0);

                                var delayStyle;
                                if (flags.applyTransitionDelay) {
                                    timings.transitionDelay = relativeDelay;
                                    delayStyle = getCssDelayStyle(relativeDelay);
                                    temporaryStyles.push(delayStyle);
                                    node.style[delayStyle[0]] = delayStyle[1];
                                }

                                if (flags.applyAnimationDelay) {
                                    timings.animationDelay = relativeDelay;
                                    delayStyle = getCssDelayStyle(relativeDelay, true);
                                    temporaryStyles.push(delayStyle);
                                    node.style[delayStyle[0]] = delayStyle[1];
                                }
                            }

                            maxDelayTime = maxDelay * ONE_SECOND;
                            maxDurationTime = maxDuration * ONE_SECOND;

                            if (options.easing) {
                                var easeProp, easeVal = options.easing;
                                if (flags.hasTransitions) {
                                    easeProp = TRANSITION_PROP + TIMING_KEY;
                                    temporaryStyles.push([easeProp, easeVal]);
                                    node.style[easeProp] = easeVal;
                                }
                                if (flags.hasAnimations) {
                                    easeProp = ANIMATION_PROP + TIMING_KEY;
                                    temporaryStyles.push([easeProp, easeVal]);
                                    node.style[easeProp] = easeVal;
                                }
                            }

                            if (timings.transitionDuration) {
                                events.push(TRANSITIONEND_EVENT);
                            }

                            if (timings.animationDuration) {
                                events.push(ANIMATIONEND_EVENT);
                            }

                            startTime = Date.now();
                            element.on(events.join(' '), onAnimationProgress);
                            $timeout(onAnimationExpired, maxDelayTime + CLOSING_TIME_BUFFER * maxDurationTime);

                            applyAnimationToStyles(element, options);
                        }

                        function onAnimationExpired() {
                            // although an expired animation is a failed animation, getting to
                            // this outcome is very easy if the CSS code screws up. Therefore we
                            // should still continue normally as if the animation completed correctly.
                            close();
                        }

                        function onAnimationProgress(event) {
                            event.stopPropagation();
                            var ev = event.originalEvent || event;
                            var timeStamp = ev.$manualTimeStamp || ev.timeStamp || Date.now();

                            /* Firefox (or possibly just Gecko) likes to not round values up
                             * when a ms measurement is used for the animation */
                            var elapsedTime = parseFloat(ev.elapsedTime.toFixed(ELAPSED_TIME_MAX_DECIMAL_PLACES));

                            /* $manualTimeStamp is a mocked timeStamp value which is set
                             * within browserTrigger(). This is only here so that tests can
                             * mock animations properly. Real events fallback to event.timeStamp,
                             * or, if they don't, then a timeStamp is automatically created for them.
                             * We're checking to see if the timeStamp surpasses the expected delay,
                             * but we're using elapsedTime instead of the timeStamp on the 2nd
                             * pre-condition since animations sometimes close off early */
                            if (Math.max(timeStamp - startTime, 0) >= maxDelayTime && elapsedTime >= maxDuration) {
                                // we set this flag to ensure that if the transition is paused then, when resumed,
                                // the animation will automatically close itself since transitions cannot be paused.
                                animationCompleted = true;
                                close();
                            }
                        }
                    }
                }
            }];
    }];

    var $$AnimateCssDriverProvider = ['$$animationProvider', function($$animationProvider) {
        $$animationProvider.drivers.push('$$animateCssDriver');

        var NG_ANIMATE_SHIM_CLASS_NAME = 'ng-animate-shim';
        var NG_ANIMATE_ANCHOR_CLASS_NAME = 'ng-animate-anchor';
        var NG_ANIMATE_ANCHOR_SUFFIX = '-anchor';

        var NG_OUT_ANCHOR_CLASS_NAME = 'ng-anchor-out';
        var NG_IN_ANCHOR_CLASS_NAME = 'ng-anchor-in';

        this.$get = ['$animateCss', '$rootScope', '$$AnimateRunner', '$rootElement', '$document', '$sniffer',
            function($animateCss,   $rootScope,   $$AnimateRunner,   $rootElement,   $document,   $sniffer) {

                // only browsers that support these properties can render animations
                if (!$sniffer.animations && !$sniffer.transitions) return noop;

                var bodyNode = $document[0].body;
                var rootNode = $rootElement[0];

                var rootBodyElement = jqLite(bodyNode.parentNode === rootNode ? bodyNode : rootNode);

                return function initDriverFn(animationDetails) {
                    return animationDetails.from && animationDetails.to
                        ? prepareFromToAnchorAnimation(animationDetails.from,
                        animationDetails.to,
                        animationDetails.classes,
                        animationDetails.anchors)
                        : prepareRegularAnimation(animationDetails);
                };

                function filterCssClasses(classes) {
                    //remove all the `ng-` stuff
                    return classes.replace(/\bng-\S+\b/g, '');
                }

                function getUniqueValues(a, b) {
                    if (isString(a)) a = a.split(' ');
                    if (isString(b)) b = b.split(' ');
                    return a.filter(function(val) {
                        return b.indexOf(val) === -1;
                    }).join(' ');
                }

                function prepareAnchoredAnimation(classes, outAnchor, inAnchor) {
                    var clone = jqLite(outAnchor[0].cloneNode(true));
                    var startingClasses = filterCssClasses(clone.attr('class') || '');
                    var anchorClasses = pendClasses(classes, NG_ANIMATE_ANCHOR_SUFFIX);

                    outAnchor.addClass(NG_ANIMATE_SHIM_CLASS_NAME);
                    inAnchor.addClass(NG_ANIMATE_SHIM_CLASS_NAME);

                    clone.addClass(NG_ANIMATE_ANCHOR_CLASS_NAME);
                    clone.addClass(anchorClasses);

                    rootBodyElement.append(clone);

                    var animatorOut = prepareOutAnimation();
                    if (!animatorOut) {
                        return end();
                    }

                    return {
                        start: function() {
                            var runner;

                            var currentAnimation = animatorOut.start();
                            currentAnimation.done(function() {
                                currentAnimation = null;
                                var animatorIn = prepareInAnimation();
                                if (animatorIn) {
                                    currentAnimation = animatorIn.start();
                                    currentAnimation.done(function() {
                                        currentAnimation = null;
                                        end();
                                        runner.complete();
                                    });
                                    return currentAnimation;
                                }
                                // in the event that there is no `in` animation
                                end();
                                runner.complete();
                            });

                            runner = new $$AnimateRunner({
                                end: endFn,
                                cancel: endFn
                            });

                            return runner;

                            function endFn() {
                                if (currentAnimation) {
                                    currentAnimation.end();
                                }
                            }
                        }
                    };

                    function calculateAnchorStyles(anchor) {
                        var styles = {};

                        var coords = anchor[0].getBoundingClientRect();

                        // we iterate directly since safari messes up and doesn't return
                        // all the keys for the coods object when iterated
                        forEach(['width','height','top','left'], function(key) {
                            var value = coords[key];
                            switch (key) {
                                case 'top':
                                    value += bodyNode.scrollTop;
                                    break;
                                case 'left':
                                    value += bodyNode.scrollLeft;
                                    break;
                            }
                            styles[key] = Math.floor(value) + 'px';
                        });
                        return styles;
                    }

                    function prepareOutAnimation() {
                        return $animateCss(clone, {
                            addClass: NG_OUT_ANCHOR_CLASS_NAME,
                            delay: true,
                            from: calculateAnchorStyles(outAnchor)
                        });
                    }

                    function prepareInAnimation() {
                        var endingClasses = filterCssClasses(inAnchor.attr('class'));
                        var classes = getUniqueValues(endingClasses, startingClasses);
                        return $animateCss(clone, {
                            to: calculateAnchorStyles(inAnchor),
                            addClass: NG_IN_ANCHOR_CLASS_NAME + ' ' + classes,
                            removeClass: NG_OUT_ANCHOR_CLASS_NAME + ' ' + startingClasses,
                            delay: true
                        });
                    }

                    function end() {
                        clone.remove();
                        outAnchor.removeClass(NG_ANIMATE_SHIM_CLASS_NAME);
                        inAnchor.removeClass(NG_ANIMATE_SHIM_CLASS_NAME);
                    }
                }

                function prepareFromToAnchorAnimation(from, to, classes, anchors) {
                    var fromAnimation = prepareRegularAnimation(from);
                    var toAnimation = prepareRegularAnimation(to);

                    var anchorAnimations = [];
                    forEach(anchors, function(anchor) {
                        var outElement = anchor['out'];
                        var inElement = anchor['in'];
                        var animator = prepareAnchoredAnimation(classes, outElement, inElement);
                        if (animator) {
                            anchorAnimations.push(animator);
                        }
                    });

                    // no point in doing anything when there are no elements to animate
                    if (!fromAnimation && !toAnimation && anchorAnimations.length === 0) return;

                    return {
                        start: function() {
                            var animationRunners = [];

                            if (fromAnimation) {
                                animationRunners.push(fromAnimation.start());
                            }

                            if (toAnimation) {
                                animationRunners.push(toAnimation.start());
                            }

                            forEach(anchorAnimations, function(animation) {
                                animationRunners.push(animation.start());
                            });

                            var runner = new $$AnimateRunner({
                                end: endFn,
                                cancel: endFn // CSS-driven animations cannot be cancelled, only ended
                            });

                            $$AnimateRunner.all(animationRunners, function(status) {
                                runner.complete(status);
                            });

                            return runner;

                            function endFn() {
                                forEach(animationRunners, function(runner) {
                                    runner.end();
                                });
                            }
                        }
                    };
                }

                function prepareRegularAnimation(animationDetails) {
                    var element = animationDetails.element;
                    var options = animationDetails.options || {};
                    options.structural = animationDetails.structural;

                    // we special case the leave animation since we want to ensure that
                    // the element is removed as soon as the animation is over. Otherwise
                    // a flicker might appear or the element may not be removed at all
                    options.event = animationDetails.event;
                    if (options.event === 'leave' && animationDetails.domOperation) {
                        options.onDone = animationDetails.domOperation;
                    }

                    return $animateCss(element, options);
                }
            }];
    }];

// TODO(matsko): use caching here to speed things up for detection
// TODO(matsko): add documentation
//  by the time...

    var $$AnimateJsProvider = ['$animateProvider', function($animateProvider) {
        this.$get = ['$injector', '$$AnimateRunner', '$$rAFMutex', '$$jqLite',
            function($injector,   $$AnimateRunner,   $$rAFMutex,   $$jqLite) {

                var applyAnimationClasses = applyAnimationClassesFactory($$jqLite);
                // $animateJs(element, 'enter');
                return function(element, event, classes, options) {
                    // the `classes` argument is optional and if it is not used
                    // then the classes will be resolved from the element's className
                    // property as well as options.addClass/options.removeClass.
                    if (arguments.length === 3 && isObject(classes)) {
                        options = classes;
                        classes = null;
                    }

                    options = prepareAnimationOptions(options);
                    if (!classes) {
                        classes = element.attr('class') || '';
                        if (options.addClass) {
                            classes += ' ' + options.addClass;
                        }
                        if (options.removeClass) {
                            classes += ' ' + options.removeClass;
                        }
                    }

                    var classesToAdd = options.addClass;
                    var classesToRemove = options.removeClass;

                    // the lookupAnimations function returns a series of animation objects that are
                    // matched up with one or more of the CSS classes. These animation objects are
                    // defined via the module.animation factory function. If nothing is detected then
                    // we don't return anything which then makes $animation query the next driver.
                    var animations = lookupAnimations(classes);
                    var before, after;
                    if (animations.length) {
                        var afterFn, beforeFn;
                        if (event == 'leave') {
                            beforeFn = 'leave';
                            afterFn = 'afterLeave'; // TODO(matsko): get rid of this
                        } else {
                            beforeFn = 'before' + event.charAt(0).toUpperCase() + event.substr(1);
                            afterFn = event;
                        }

                        if (event !== 'enter' && event !== 'move') {
                            before = packageAnimations(element, event, options, animations, beforeFn);
                        }
                        after  = packageAnimations(element, event, options, animations, afterFn);
                    }

                    // no matching animations
                    if (!before && !after) return;

                    function applyOptions() {
                        options.domOperation();
                        applyAnimationClasses(element, options);
                    }

                    return {
                        start: function() {
                            var closeActiveAnimations;
                            var chain = [];

                            if (before) {
                                chain.push(function(fn) {
                                    closeActiveAnimations = before(fn);
                                });
                            }

                            if (chain.length) {
                                chain.push(function(fn) {
                                    applyOptions();
                                    fn(true);
                                });
                            } else {
                                applyOptions();
                            }

                            if (after) {
                                chain.push(function(fn) {
                                    closeActiveAnimations = after(fn);
                                });
                            }

                            var animationClosed = false;
                            var runner = new $$AnimateRunner({
                                end: function() {
                                    endAnimations();
                                },
                                cancel: function() {
                                    endAnimations(true);
                                }
                            });

                            $$AnimateRunner.chain(chain, onComplete);
                            return runner;

                            function onComplete(success) {
                                animationClosed = true;
                                applyOptions();
                                applyAnimationStyles(element, options);
                                runner.complete(success);
                            }

                            function endAnimations(cancelled) {
                                if (!animationClosed) {
                                    (closeActiveAnimations || noop)(cancelled);
                                    onComplete(cancelled);
                                }
                            }
                        }
                    };

                    function executeAnimationFn(fn, element, event, options, onDone) {
                        var args;
                        switch (event) {
                            case 'animate':
                                args = [element, options.from, options.to, onDone];
                                break;

                            case 'setClass':
                                args = [element, classesToAdd, classesToRemove, onDone];
                                break;

                            case 'addClass':
                                args = [element, classesToAdd, onDone];
                                break;

                            case 'removeClass':
                                args = [element, classesToRemove, onDone];
                                break;

                            default:
                                args = [element, onDone];
                                break;
                        }

                        args.push(options);

                        var value = fn.apply(fn, args);

                        // optional onEnd / onCancel callback
                        return isFunction(value) ? value : noop;
                    }

                    function groupEventedAnimations(element, event, options, animations, fnName) {
                        var operations = [];
                        forEach(animations, function(ani) {
                            var animation = ani[fnName];
                            if (!animation) return;

                            // note that all of these animations will run in parallel
                            operations.push(function() {
                                var runner;
                                var endProgressCb;

                                var resolved = false;
                                var onAnimationComplete = function(rejected) {
                                    if (!resolved) {
                                        resolved = true;
                                        (endProgressCb || noop)(rejected);
                                        runner.complete(!rejected);
                                    }
                                };

                                runner = new $$AnimateRunner({
                                    end: function() {
                                        onAnimationComplete();
                                    },
                                    cancel: function() {
                                        onAnimationComplete(true);
                                    }
                                });

                                endProgressCb = executeAnimationFn(animation, element, event, options, function(result) {
                                    var cancelled = result === false;
                                    onAnimationComplete(cancelled);
                                });

                                return runner;
                            });
                        });

                        return operations;
                    }

                    function packageAnimations(element, event, options, animations, fnName) {
                        var operations = groupEventedAnimations(element, event, options, animations, fnName);
                        if (operations.length === 0) {
                            var a,b;
                            if (fnName === 'beforeSetClass') {
                                a = groupEventedAnimations(element, 'removeClass', options, animations, 'beforeRemoveClass');
                                b = groupEventedAnimations(element, 'addClass', options, animations, 'beforeAddClass');
                            } else if (fnName === 'setClass') {
                                a = groupEventedAnimations(element, 'removeClass', options, animations, 'removeClass');
                                b = groupEventedAnimations(element, 'addClass', options, animations, 'addClass');
                            }

                            if (a) {
                                operations = operations.concat(a);
                            }
                            if (b) {
                                operations = operations.concat(b);
                            }
                        }

                        if (operations.length === 0) return;

                        // TODO(matsko): add documentation
                        return function startAnimation(callback) {
                            var runners = [];
                            if (operations.length) {
                                forEach(operations, function(animateFn) {
                                    runners.push(animateFn());
                                });
                            }

                            runners.length ? $$AnimateRunner.all(runners, callback) : callback();

                            return function endFn(reject) {
                                forEach(runners, function(runner) {
                                    reject ? runner.cancel() : runner.end();
                                });
                            };
                        };
                    }
                };

                function lookupAnimations(classes) {
                    classes = isArray(classes) ? classes : classes.split(' ');
                    var matches = [], flagMap = {};
                    for (var i=0; i < classes.length; i++) {
                        var klass = classes[i],
                            animationFactory = $animateProvider.$$registeredAnimations[klass];
                        if (animationFactory && !flagMap[klass]) {
                            matches.push($injector.get(animationFactory));
                            flagMap[klass] = true;
                        }
                    }
                    return matches;
                }
            }];
    }];

    var $$AnimateJsDriverProvider = ['$$animationProvider', function($$animationProvider) {
        $$animationProvider.drivers.push('$$animateJsDriver');
        this.$get = ['$$animateJs', '$$AnimateRunner', function($$animateJs, $$AnimateRunner) {
            return function initDriverFn(animationDetails) {
                if (animationDetails.from && animationDetails.to) {
                    var fromAnimation = prepareAnimation(animationDetails.from);
                    var toAnimation = prepareAnimation(animationDetails.to);
                    if (!fromAnimation && !toAnimation) return;

                    return {
                        start: function() {
                            var animationRunners = [];

                            if (fromAnimation) {
                                animationRunners.push(fromAnimation.start());
                            }

                            if (toAnimation) {
                                animationRunners.push(toAnimation.start());
                            }

                            $$AnimateRunner.all(animationRunners, done);

                            var runner = new $$AnimateRunner({
                                end: endFnFactory(),
                                cancel: endFnFactory()
                            });

                            return runner;

                            function endFnFactory() {
                                return function() {
                                    forEach(animationRunners, function(runner) {
                                        // at this point we cannot cancel animations for groups just yet. 1.5+
                                        runner.end();
                                    });
                                };
                            }

                            function done(status) {
                                runner.complete(status);
                            }
                        }
                    };
                } else {
                    return prepareAnimation(animationDetails);
                }
            };

            function prepareAnimation(animationDetails) {
                // TODO(matsko): make sure to check for grouped animations and delegate down to normal animations
                var element = animationDetails.element;
                var event = animationDetails.event;
                var options = animationDetails.options;
                var classes = animationDetails.classes;
                return $$animateJs(element, event, classes, options);
            }
        }];
    }];

    var NG_ANIMATE_ATTR_NAME = 'data-ng-animate';
    var $$AnimateQueueProvider = ['$animateProvider', function($animateProvider) {
        var PRE_DIGEST_STATE = 1;
        var RUNNING_STATE = 2;

        var rules = this.rules = {
            skip: [],
            cancel: [],
            join: []
        };

        function isAllowed(ruleType, element, currentAnimation, previousAnimation) {
            return rules[ruleType].some(function(fn) {
                return fn(element, currentAnimation, previousAnimation);
            });
        }

        function hasAnimationClasses(options, and) {
            options = options || {};
            var a = (options.addClass || '').length > 0;
            var b = (options.removeClass || '').length > 0;
            return and ? a && b : a || b;
        }

        rules.join.push(function(element, newAnimation, currentAnimation) {
            // if the new animation is class-based then we can just tack that on
            return !newAnimation.structural && hasAnimationClasses(newAnimation.options);
        });

        rules.skip.push(function(element, newAnimation, currentAnimation) {
            // there is no need to animate anything if no classes are being added and
            // there is no structural animation that will be triggered
            return !newAnimation.structural && !hasAnimationClasses(newAnimation.options);
        });

        rules.skip.push(function(element, newAnimation, currentAnimation) {
            // why should we trigger a new structural animation if the element will
            // be removed from the DOM anyway?
            return currentAnimation.event == 'leave' && newAnimation.structural;
        });

        rules.skip.push(function(element, newAnimation, currentAnimation) {
            // if there is a current animation then skip the class-based animation
            return currentAnimation.structural && !newAnimation.structural;
        });

        rules.cancel.push(function(element, newAnimation, currentAnimation) {
            // there can never be two structural animations running at the same time
            return currentAnimation.structural && newAnimation.structural;
        });

        rules.cancel.push(function(element, newAnimation, currentAnimation) {
            // if the previous animation is already running, but the new animation will
            // be triggered, but the new animation is structural
            return currentAnimation.state === RUNNING_STATE && newAnimation.structural;
        });

        this.$get = ['$$rAF', '$rootScope', '$rootElement', '$document', '$$HashMap',
            '$$animation', '$$AnimateRunner', '$templateRequest', '$$jqLite',
            function($$rAF,   $rootScope,   $rootElement,   $document,   $$HashMap,
                     $$animation,   $$AnimateRunner,   $templateRequest,   $$jqLite) {

                var activeAnimationsLookup = new $$HashMap();
                var disabledElementsLookup = new $$HashMap();

                var animationsEnabled = null;

                // Wait until all directive and route-related templates are downloaded and
                // compiled. The $templateRequest.totalPendingRequests variable keeps track of
                // all of the remote templates being currently downloaded. If there are no
                // templates currently downloading then the watcher will still fire anyway.
                var deregisterWatch = $rootScope.$watch(
                    function() { return $templateRequest.totalPendingRequests === 0; },
                    function(isEmpty) {
                        if (!isEmpty) return;
                        deregisterWatch();

                        // Now that all templates have been downloaded, $animate will wait until
                        // the post digest queue is empty before enabling animations. By having two
                        // calls to $postDigest calls we can ensure that the flag is enabled at the
                        // very end of the post digest queue. Since all of the animations in $animate
                        // use $postDigest, it's important that the code below executes at the end.
                        // This basically means that the page is fully downloaded and compiled before
                        // any animations are triggered.
                        $rootScope.$$postDigest(function() {
                            $rootScope.$$postDigest(function() {
                                // we check for null directly in the event that the application already called
                                // .enabled() with whatever arguments that it provided it with
                                if (animationsEnabled === null) {
                                    animationsEnabled = true;
                                }
                            });
                        });
                    }
                );

                var bodyElement = jqLite($document[0].body);

                var callbackRegistry = {};

                // remember that the classNameFilter is set during the provider/config
                // stage therefore we can optimize here and setup a helper function
                var classNameFilter = $animateProvider.classNameFilter();
                var isAnimatableClassName = !classNameFilter
                    ? function() { return true; }
                    : function(className) {
                    return classNameFilter.test(className);
                };

                var applyAnimationClasses = applyAnimationClassesFactory($$jqLite);

                function normalizeAnimationOptions(element, options) {
                    return mergeAnimationOptions(element, options, {});
                }

                function findCallbacks(element, event) {
                    var targetNode = element[0];

                    var matches = [];
                    var entries = callbackRegistry[event];
                    if (entries) {
                        forEach(entries, function(entry) {
                            if (entry.node.contains(targetNode)) {
                                matches.push(entry.callback);
                            }
                        });
                    }

                    return matches;
                }

                function triggerCallback(event, element, phase, data) {
                    $$rAF(function() {
                        forEach(findCallbacks(element, event), function(callback) {
                            callback(element, phase, data);
                        });
                    });
                }

                return {
                    on: function(event, container, callback) {
                        var node = extractElementNode(container);
                        callbackRegistry[event] = callbackRegistry[event] || [];
                        callbackRegistry[event].push({
                            node: node,
                            callback: callback
                        });
                    },

                    off: function(event, container, callback) {
                        var entries = callbackRegistry[event];
                        if (!entries) return;

                        callbackRegistry[event] = arguments.length === 1
                            ? null
                            : filterFromRegistry(entries, container, callback);

                        function filterFromRegistry(list, matchContainer, matchCallback) {
                            var containerNode = extractElementNode(matchContainer);
                            return list.filter(function(entry) {
                                var isMatch = entry.node === containerNode &&
                                    (!matchCallback || entry.callback === matchCallback);
                                return !isMatch;
                            });
                        }
                    },

                    push: function(element, event, options, domOperation) {
                        options = options || {};
                        options.domOperation = domOperation;
                        return queueAnimation(element, event, options);
                    },

                    // this method has four signatures:
                    //  () - global getter
                    //  (bool) - global setter
                    //  (element) - element getter
                    //  (element, bool) - element setter<F37>
                    enabled: function(element, bool) {
                        var argCount = arguments.length;

                        if (argCount === 0) {
                            // () - Global getter
                            bool = !!animationsEnabled;
                        } else {
                            var hasElement = isElement(element);

                            if (!hasElement) {
                                // (bool) - Global setter
                                bool = animationsEnabled = !!element;
                            } else {
                                var node = element.length ? element[0] : element;
                                var recordExists = disabledElementsLookup.get(node);

                                if (argCount === 1) {
                                    // (element) - Element getter
                                    bool = !recordExists;
                                } else {
                                    // (element, bool) - Element setter
                                    bool = !!bool;
                                    if (!bool) {
                                        disabledElementsLookup.put(node, true);
                                    } else if (recordExists) {
                                        disabledElementsLookup.remove(node);
                                    }
                                }
                            }
                        }

                        return bool;
                    }
                };

                function queueAnimation(element, event, options) {
                    element = stripCommentsFromElement(element);
                    var node = element[0];

                    options = prepareAnimationOptions(options);
                    var parent = element.parent();

                    // we create a fake runner with a working promise.
                    // These methods will become available after the digest has passed
                    var runner = new $$AnimateRunner();

                    // there are situations where a directive issues an animation for
                    // a jqLite wrapper that contains only comment nodes... If this
                    // happens then there is no way we can perform an animation
                    if (!node) {
                        runner.end();
                        return runner;
                    }

                    if (isArray(options.addClass)) {
                        options.addClass = options.addClass.join(' ');
                    }

                    if (isArray(options.removeClass)) {
                        options.removeClass = options.removeClass.join(' ');
                    }

                    if (options.from && !isObject(options.from)) {
                        options.from = null;
                    }

                    if (options.to && !isObject(options.to)) {
                        options.to = null;
                    }

                    var className = [node.className, options.addClass, options.removeClass].join(' ');
                    if (!isAnimatableClassName(className)) {
                        runner.end();
                        return runner;
                    }

                    var isStructural = ['enter', 'move', 'leave'].indexOf(event) >= 0;

                    // this is a hard disable of all animations for the application or on
                    // the element itself, therefore  there is no need to continue further
                    // past this point if not enabled
                    var skipAnimations = !animationsEnabled || disabledElementsLookup.get(node);
                    var existingAnimation = (!skipAnimations && activeAnimationsLookup.get(node)) || {};
                    var hasExistingAnimation = !!existingAnimation.state;

                    // there is no point in traversing the same collection of parent ancestors if a followup
                    // animation will be run on the same element that already did all that checking work
                    if (!skipAnimations && (!hasExistingAnimation || existingAnimation.state != PRE_DIGEST_STATE)) {
                        skipAnimations = !areAnimationsAllowed(element, parent, event);
                    }

                    if (skipAnimations) {
                        close();
                        return runner;
                    }

                    if (isStructural) {
                        closeChildAnimations(element);
                    }

                    var newAnimation = {
                        structural: isStructural,
                        element: element,
                        event: event,
                        options: options,
                        runner: runner
                    };

                    if (hasExistingAnimation) {
                        var skipAnimationFlag = isAllowed('skip', element, newAnimation, existingAnimation);
                        if (skipAnimationFlag) {
                            if (existingAnimation.state === RUNNING_STATE) {
                                close();
                                return runner;
                            } else {
                                mergeAnimationOptions(element, existingAnimation.options, options);
                                return existingAnimation.runner;
                            }
                        }

                        var cancelAnimationFlag = isAllowed('cancel', element, newAnimation, existingAnimation);
                        if (cancelAnimationFlag) {
                            if (existingAnimation.state === RUNNING_STATE) {
                                existingAnimation.runner.end();
                            } else {
                                mergeAnimationOptions(element, newAnimation.options, existingAnimation.options);
                            }
                        } else {
                            // a joined animation means that this animation will take over the existing one
                            // so an example would involve a leave animation taking over an enter. Then when
                            // the postDigest kicks in the enter will be ignored.
                            var joinAnimationFlag = isAllowed('join', element, newAnimation, existingAnimation);
                            if (joinAnimationFlag) {
                                if (existingAnimation.state === RUNNING_STATE) {
                                    normalizeAnimationOptions(element, options);
                                } else {
                                    event = newAnimation.event = existingAnimation.event;
                                    options = mergeAnimationOptions(element, existingAnimation.options, newAnimation.options);
                                    return runner;
                                }
                            }
                        }
                    } else {
                        // normalization in this case means that it removes redundant CSS classes that
                        // already exist (addClass) or do not exist (removeClass) on the element
                        normalizeAnimationOptions(element, options);
                    }

                    // when the options are merged and cleaned up we may end up not having to do
                    // an animation at all, therefore we should check this before issuing a post
                    // digest callback. Structural animations will always run no matter what.
                    var isValidAnimation = newAnimation.structural;
                    if (!isValidAnimation) {
                        // animate (from/to) can be quickly checked first, otherwise we check if any classes are present
                        isValidAnimation = (newAnimation.event === 'animate' && Object.keys(newAnimation.options.to || {}).length > 0)
                            || hasAnimationClasses(newAnimation.options);
                    }

                    if (!isValidAnimation) {
                        close();
                        return runner;
                    }

                    closeParentClassBasedAnimations(parent);

                    // the counter keeps track of cancelled animations
                    var counter = (existingAnimation.counter || 0) + 1;
                    newAnimation.counter = counter;

                    markElementAnimationState(element, PRE_DIGEST_STATE, newAnimation);

                    $rootScope.$$postDigest(function() {
                        var animationDetails = activeAnimationsLookup.get(node);
                        var animationCancelled = !animationDetails;
                        animationDetails = animationDetails || {};

                        // if addClass/removeClass is called before something like enter then the
                        // registered parent element may not be present. The code below will ensure
                        // that a final value for parent element is obtained
                        var parentElement = element.parent() || [];

                        // animate/structural/class-based animations all have requirements. Otherwise there
                        // is no point in performing an animation. The parent node must also be set.
                        var isValidAnimation = parentElement.length > 0
                            && (animationDetails.event === 'animate'
                            || animationDetails.structural
                            || hasAnimationClasses(animationDetails.options));

                        // this means that the previous animation was cancelled
                        // even if the follow-up animation is the same event
                        if (animationCancelled || animationDetails.counter !== counter || !isValidAnimation) {
                            // if another animation did not take over then we need
                            // to make sure that the domOperation and options are
                            // handled accordingly
                            if (animationCancelled) {
                                applyAnimationClasses(element, options);
                                applyAnimationStyles(element, options);
                            }

                            // if the event changed from something like enter to leave then we do
                            // it, otherwise if it's the same then the end result will be the same too
                            if (animationCancelled || (isStructural && animationDetails.event !== event)) {
                                options.domOperation();
                            }

                            return;
                        }

                        // this combined multiple class to addClass / removeClass into a setClass event
                        // so long as a structural event did not take over the animation
                        event = !animationDetails.structural && hasAnimationClasses(animationDetails.options, true)
                            ? 'setClass'
                            : animationDetails.event;

                        closeParentClassBasedAnimations(parentElement);

                        markElementAnimationState(element, RUNNING_STATE);
                        var realRunner = $$animation(element, event, animationDetails.options);
                        realRunner.done(function(status) {
                            close(!status);
                            var animationDetails = activeAnimationsLookup.get(node);
                            if (animationDetails && animationDetails.counter === counter) {
                                clearElementAnimationState(element);
                            }
                            notifyProgress(runner, event, 'close', {});
                        });

                        // this will update the runner's flow-control events based on
                        // the `realRunner` object.
                        runner.setHost(realRunner);
                        notifyProgress(runner, event, 'start', {});
                    });

                    return runner;

                    function notifyProgress(runner, event, phase, data) {
                        triggerCallback(event, element, phase, data);
                        runner.progress(event, phase, data);
                    }

                    function close(reject) { // jshint ignore:line
                        applyAnimationClasses(element, options);
                        applyAnimationStyles(element, options);
                        options.domOperation();
                        runner.complete(!reject);
                    }
                }

                function closeChildAnimations(element) {
                    var node = element[0];
                    var children = node.querySelectorAll('[' + NG_ANIMATE_ATTR_NAME + ']');
                    forEach(children, function(child) {
                        var state = parseInt(child.getAttribute(NG_ANIMATE_ATTR_NAME));
                        var animationDetails = activeAnimationsLookup.get(child);
                        switch (state) {
                            case RUNNING_STATE:
                                animationDetails.runner.end();
                            /* falls through */
                            case PRE_DIGEST_STATE:
                                if (animationDetails) {
                                    activeAnimationsLookup.remove(child);
                                }
                                break;
                        }
                    });
                }

                function clearElementAnimationState(element) {
                    element = element.length ? element[0] : element;
                    element.removeAttribute(NG_ANIMATE_ATTR_NAME);
                    activeAnimationsLookup.remove(element);
                }

                function isMatchingElement(a,b) {
                    a = a.length ? a[0] : a;
                    b = b.length ? b[0] : b;
                    return a === b;
                }

                function closeParentClassBasedAnimations(startingElement) {
                    var parentNode = startingElement[0];
                    do {
                        if (!parentNode || parentNode.nodeType !== ELEMENT_NODE) break;

                        var animationDetails = activeAnimationsLookup.get(parentNode);
                        if (animationDetails) {
                            examineParentAnimation(parentNode, animationDetails);
                        }

                        parentNode = parentNode.parentNode;
                    } while (true);

                    // since animations are detected from CSS classes, we need to flush all parent
                    // class-based animations so that the parent classes are all present for child
                    // animations to properly function (otherwise any CSS selectors may not work)
                    function examineParentAnimation(node, animationDetails) {
                        // enter/leave/move always have priority
                        if (animationDetails.structural) return;

                        if (animationDetails.state === RUNNING_STATE) {
                            animationDetails.runner.end();
                        }
                        clearElementAnimationState(node);
                    }
                }

                function areAnimationsAllowed(element, parent, event) {
                    var bodyElementDetected = false;
                    var rootElementDetected = false;
                    var parentAnimationDetected = false;
                    var animateChildren;

                    while (parent && parent.length) {
                        var parentNode = parent[0];
                        if (parentNode.nodeType !== ELEMENT_NODE) {
                            // no point in inspecting the #document element
                            break;
                        }

                        var details = activeAnimationsLookup.get(parentNode) || {};
                        // either an enter, leave or move animation will commence
                        // therefore we can't allow any animations to take place
                        // but if a parent animation is class-based then that's ok
                        if (!parentAnimationDetected) {
                            parentAnimationDetected = details.structural || disabledElementsLookup.get(parentNode);
                        }

                        if (isUndefined(animateChildren) || animateChildren === true) {
                            var value = parent.data(NG_ANIMATE_CHILDREN_DATA);
                            if (isDefined(value)) {
                                animateChildren = value;
                            }
                        }

                        // there is no need to continue traversing at this point
                        if (parentAnimationDetected && animateChildren === false) break;

                        if (!rootElementDetected) {
                            // angular doesn't want to attempt to animate elements outside of the application
                            // therefore we need to ensure that the rootElement is an ancestor of the current element
                            rootElementDetected = isMatchingElement(parent, $rootElement);
                        }

                        if (!bodyElementDetected) {
                            // we also need to ensure that the element is or will be apart of the body element
                            // otherwise it is pointless to even issue an animation to be rendered
                            bodyElementDetected = isMatchingElement(parent, bodyElement);
                        }

                        parent = parent.parent();
                    }

                    var allowAnimation = !parentAnimationDetected || animateChildren;
                    return allowAnimation && rootElementDetected && bodyElementDetected;
                }

                function markElementAnimationState(element, state, details) {
                    details = details || {};
                    details.state = state;

                    element = element.length ? element[0] : element;
                    element.setAttribute(NG_ANIMATE_ATTR_NAME, state);

                    var oldValue = activeAnimationsLookup.get(element);
                    var newValue = oldValue
                        ? extend(oldValue, details)
                        : details;
                    activeAnimationsLookup.put(element, newValue);
                }
            }];
    }];

    var $$rAFMutexFactory = ['$$rAF', function($$rAF) {
        return function() {
            var passed = false;
            $$rAF(function() {
                passed = true;
            });
            return function(fn) {
                passed ? fn() : $$rAF(fn);
            };
        };
    }];

    var $$AnimateRunnerFactory = ['$q', '$$rAFMutex', function($q, $$rAFMutex) {
        var INITIAL_STATE = 0;
        var DONE_PENDING_STATE = 1;
        var DONE_COMPLETE_STATE = 2;

        AnimateRunner.chain = function(chain, callback) {
            var index = 0;

            next();
            function next() {
                if (index === chain.length) {
                    callback(true);
                    return;
                }

                chain[index](function(response) {
                    if (response === false) {
                        callback(false);
                        return;
                    }
                    index++;
                    next();
                });
            }
        };

        AnimateRunner.all = function(runners, callback) {
            var count = 0;
            var status = true;
            forEach(runners, function(runner) {
                runner.done(onProgress);
            });

            function onProgress(response) {
                status = status && response;
                if (++count === runners.length) {
                    callback(status);
                }
            }
        };

        function AnimateRunner(host) {
            this.setHost(host);

            this._doneCallbacks = [];
            this._runInAnimationFrame = $$rAFMutex();
            this._state = 0;
        }

        AnimateRunner.prototype = {
            setHost: function(host) {
                this.host = host || {};
            },

            done: function(fn) {
                if (this._state === DONE_COMPLETE_STATE) {
                    fn();
                } else {
                    this._doneCallbacks.push(fn);
                }
            },

            progress: noop,

            getPromise: function() {
                if (!this.promise) {
                    var self = this;
                    this.promise = $q(function(resolve, reject) {
                        self.done(function(status) {
                            status === false ? reject() : resolve();
                        });
                    });
                }
                return this.promise;
            },

            then: function(resolveHandler, rejectHandler) {
                return this.getPromise().then(resolveHandler, rejectHandler);
            },

            'catch': function(handler) {
                return this.getPromise()['catch'](handler);
            },

            'finally': function(handler) {
                return this.getPromise()['finally'](handler);
            },

            pause: function() {
                if (this.host.pause) {
                    this.host.pause();
                }
            },

            resume: function() {
                if (this.host.resume) {
                    this.host.resume();
                }
            },

            end: function() {
                if (this.host.end) {
                    this.host.end();
                }
                this._resolve(true);
            },

            cancel: function() {
                if (this.host.cancel) {
                    this.host.cancel();
                }
                this._resolve(false);
            },

            complete: function(response) {
                var self = this;
                if (self._state === INITIAL_STATE) {
                    self._state = DONE_PENDING_STATE;
                    self._runInAnimationFrame(function() {
                        self._resolve(response);
                    });
                }
            },

            _resolve: function(response) {
                if (this._state !== DONE_COMPLETE_STATE) {
                    forEach(this._doneCallbacks, function(fn) {
                        fn(response);
                    });
                    this._doneCallbacks.length = 0;
                    this._state = DONE_COMPLETE_STATE;
                }
            }
        };

        return AnimateRunner;
    }];

    var $$AnimationProvider = ['$animateProvider', function($animateProvider) {
        var NG_ANIMATE_CLASSNAME = 'ng-animate';
        var NG_ANIMATE_REF_ATTR = 'ng-animate-ref';

        var drivers = this.drivers = [];

        var RUNNER_STORAGE_KEY = '$$animationRunner';

        function setRunner(element, runner) {
            element.data(RUNNER_STORAGE_KEY, runner);
        }

        function removeRunner(element) {
            element.removeData(RUNNER_STORAGE_KEY);
        }

        function getRunner(element) {
            return element.data(RUNNER_STORAGE_KEY);
        }

        this.$get = ['$$jqLite', '$rootScope', '$injector', '$$AnimateRunner',
            function($$jqLite,   $rootScope,   $injector,   $$AnimateRunner) {

                var animationQueue = [];
                var applyAnimationClasses = applyAnimationClassesFactory($$jqLite);

                // TODO(matsko): document the signature in a better way
                return function(element, event, options) {
                    options = prepareAnimationOptions(options);
                    var isStructural = ['enter', 'move', 'leave'].indexOf(event) >= 0;

                    // there is no animation at the current moment, however
                    // these runner methods will get later updated with the
                    // methods leading into the driver's end/cancel methods
                    // for now they just stop the animation from starting
                    var runner = new $$AnimateRunner({
                        end: function() { close(); },
                        cancel: function() { close(true); }
                    });

                    if (!drivers.length) {
                        close();
                        return runner;
                    }

                    setRunner(element, runner);

                    var classes = mergeClasses(element.attr('class'), mergeClasses(options.addClass, options.removeClass));
                    var tempClasses = options.tempClasses;
                    if (tempClasses) {
                        classes += ' ' + tempClasses;
                        options.tempClasses = null;
                    }

                    animationQueue.push({
                        // this data is used by the postDigest code and passed into
                        // the driver step function
                        element: element,
                        classes: classes,
                        event: event,
                        structural: isStructural,
                        options: options,
                        start: start,
                        close: close
                    });

                    element.on('$destroy', handleDestroyedElement);

                    // we only want there to be one function called within the post digest
                    // block. This way we can group animations for all the animations that
                    // were apart of the same postDigest flush call.
                    if (animationQueue.length > 1) return runner;

                    $rootScope.$$postDigest(function() {
                        var animations = [];
                        forEach(animationQueue, function(entry) {
                            // the element was destroyed early on which removed the runner
                            // form its storage. This means we can't animate this element
                            // at all and it already has been closed due to destruction.
                            if (getRunner(entry.element)) {
                                animations.push(entry);
                            }
                        });

                        // now any future animations will be in another postDigest
                        animationQueue.length = 0;

                        forEach(groupAnimations(animations), function(animationEntry) {
                            var startFn = animationEntry.start;
                            var closeFn = animationEntry.close;
                            var operation = invokeFirstDriver(animationEntry);
                            var startAnimation = operation && operation.start; /// TODO(matsko): only recognize operation.start()
                            if (!startAnimation) {
                                closeFn();
                            } else {
                                startFn();
                                var animationRunner = startAnimation();
                                animationRunner.done(function(status) {
                                    closeFn(!status);
                                });
                                updateAnimationRunners(animationEntry, animationRunner);
                            }
                        });
                    });

                    return runner;

                    // TODO(matsko): change to reference nodes
                    function getAnchorNodes(node) {
                        var SELECTOR = '[' + NG_ANIMATE_REF_ATTR + ']';
                        var items = node.hasAttribute(NG_ANIMATE_REF_ATTR)
                            ? [node]
                            : node.querySelectorAll(SELECTOR);
                        var anchors = [];
                        forEach(items, function(node) {
                            var attr = node.getAttribute(NG_ANIMATE_REF_ATTR);
                            if (attr && attr.length) {
                                anchors.push(node);
                            }
                        });
                        return anchors;
                    }

                    function groupAnimations(animations) {
                        var preparedAnimations = [];
                        var refLookup = {};
                        forEach(animations, function(animation, index) {
                            var element = animation.element;
                            var node = element[0];
                            var event = animation.event;
                            var enterOrMove = ['enter', 'move'].indexOf(event) >= 0;
                            var anchorNodes = animation.structural ? getAnchorNodes(node) : [];

                            if (anchorNodes.length) {
                                var direction = enterOrMove ? 'to' : 'from';

                                forEach(anchorNodes, function(anchor) {
                                    var key = anchor.getAttribute(NG_ANIMATE_REF_ATTR);
                                    refLookup[key] = refLookup[key] || {};
                                    refLookup[key][direction] = {
                                        animationID: index,
                                        element: jqLite(anchor)
                                    };
                                });
                            } else {
                                preparedAnimations.push(animation);
                            }
                        });

                        var usedIndicesLookup = {};
                        var anchorGroups = {};
                        forEach(refLookup, function(operations, key) {
                            var from = operations.from;
                            var to = operations.to;

                            if (!from || !to) {
                                // only one of these is set therefore we can't have an
                                // anchor animation since all three pieces are required
                                var index = from ? from.animationID : to.animationID;
                                var indexKey = index.toString();
                                if (!usedIndicesLookup[indexKey]) {
                                    usedIndicesLookup[indexKey] = true;
                                    preparedAnimations.push(animations[index]);
                                }
                                return;
                            }

                            var fromAnimation = animations[from.animationID];
                            var toAnimation = animations[to.animationID];
                            var lookupKey = from.animationID.toString();
                            if (!anchorGroups[lookupKey]) {
                                var group = anchorGroups[lookupKey] = {
                                    // TODO(matsko): double-check this code
                                    start: function() {
                                        fromAnimation.start();
                                        toAnimation.start();
                                    },
                                    close: function() {
                                        fromAnimation.close();
                                        toAnimation.close();
                                    },
                                    classes: cssClassesIntersection(fromAnimation.classes, toAnimation.classes),
                                    from: fromAnimation,
                                    to: toAnimation,
                                    anchors: [] // TODO(matsko): change to reference nodes
                                };

                                // the anchor animations require that the from and to elements both have at least
                                // one shared CSS class which effictively marries the two elements together to use
                                // the same animation driver and to properly sequence the anchor animation.
                                if (group.classes.length) {
                                    preparedAnimations.push(group);
                                } else {
                                    preparedAnimations.push(fromAnimation);
                                    preparedAnimations.push(toAnimation);
                                }
                            }

                            anchorGroups[lookupKey].anchors.push({
                                'out': from.element, 'in': to.element
                            });
                        });

                        return preparedAnimations;
                    }

                    function cssClassesIntersection(a,b) {
                        a = a.split(' ');
                        b = b.split(' ');
                        var matches = [];

                        for (var i = 0; i < a.length; i++) {
                            var aa = a[i];
                            if (aa.substring(0,3) === 'ng-') continue;

                            for (var j = 0; j < b.length; j++) {
                                if (aa === b[j]) {
                                    matches.push(aa);
                                    break;
                                }
                            }
                        }

                        return matches.join(' ');
                    }

                    function invokeFirstDriver(animationDetails) {
                        // we loop in reverse order since the more general drivers (like CSS and JS)
                        // may attempt more elements, but custom drivers are more particular
                        for (var i = drivers.length - 1; i >= 0; i--) {
                            var driverName = drivers[i];
                            if (!$injector.has(driverName)) continue; // TODO(matsko): remove this check

                            var factory = $injector.get(driverName);
                            var driver = factory(animationDetails);
                            if (driver) {
                                return driver;
                            }
                        }
                    }

                    function start() {
                        element.addClass(NG_ANIMATE_CLASSNAME);
                        if (tempClasses) {
                            $$jqLite.addClass(element, tempClasses);
                        }
                    }

                    function updateAnimationRunners(animation, newRunner) {
                        if (animation.from && animation.to) {
                            update(animation.from.element);
                            update(animation.to.element);
                        } else {
                            update(animation.element);
                        }

                        function update(element) {
                            getRunner(element).setHost(newRunner);
                        }
                    }

                    function handleDestroyedElement() {
                        var runner = getRunner(element);
                        if (runner && (event !== 'leave' || !options.$$domOperationFired)) {
                            runner.end();
                        }
                    }

                    function close(rejected) { // jshint ignore:line
                        element.off('$destroy', handleDestroyedElement);
                        removeRunner(element);

                        applyAnimationClasses(element, options);
                        applyAnimationStyles(element, options);
                        options.domOperation();

                        if (tempClasses) {
                            $$jqLite.removeClass(element, tempClasses);
                        }

                        element.removeClass(NG_ANIMATE_CLASSNAME);
                        runner.complete(!rejected);
                    }
                };
            }];
    }];

    /* global angularAnimateModule: true,

     $$rAFMutexFactory,
     $$AnimateChildrenDirective,
     $$AnimateRunnerFactory,
     $$AnimateQueueProvider,
     $$AnimationProvider,
     $AnimateCssProvider,
     $$AnimateCssDriverProvider,
     $$AnimateJsProvider,
     $$AnimateJsDriverProvider,
     */

    /**
     * @ngdoc module
     * @name ngAnimate
     * @description
     *
     * The `ngAnimate` module provides support for CSS-based animations (keyframes and transitions) as well as JavaScript-based animations via
     * callback hooks. Animations are not enabled by default, however, by including `ngAnimate` then the animation hooks are enabled for an Angular app.
     *
     * <div doc-module-components="ngAnimate"></div>
     *
     * # Usage
     * Simply put, there are two ways to make use of animations when ngAnimate is used: by using **CSS** and **JavaScript**. The former works purely based
     * using CSS (by using matching CSS selectors/styles) and the latter triggers animations that are registered via `module.animation()`. For
     * both CSS and JS animations the sole requirement is to have a matching `CSS class` that exists both in the registered animation and within
     * the HTML element that the animation will be triggered on.
     *
     * ## Directive Support
     * The following directives are "animation aware":
     *
     * | Directive                                                                                                | Supported Animations                                                     |
     * |----------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
     * | {@link ng.directive:ngRepeat#animations ngRepeat}                                                        | enter, leave and move                                                    |
     * | {@link ngRoute.directive:ngView#animations ngView}                                                       | enter and leave                                                          |
     * | {@link ng.directive:ngInclude#animations ngInclude}                                                      | enter and leave                                                          |
     * | {@link ng.directive:ngSwitch#animations ngSwitch}                                                        | enter and leave                                                          |
     * | {@link ng.directive:ngIf#animations ngIf}                                                                | enter and leave                                                          |
     * | {@link ng.directive:ngClass#animations ngClass}                                                          | add and remove (the CSS class(es) present)                               |
     * | {@link ng.directive:ngShow#animations ngShow} & {@link ng.directive:ngHide#animations ngHide}            | add and remove (the ng-hide class value)                                 |
     * | {@link ng.directive:form#animation-hooks form} & {@link ng.directive:ngModel#animation-hooks ngModel}    | add and remove (dirty, pristine, valid, invalid & all other validations) |
     * | {@link module:ngMessages#animations ngMessages}                                                          | add and remove (ng-active & ng-inactive)                                 |
     * | {@link module:ngMessages#animations ngMessage}                                                           | enter and leave                                                          |
     *
     * (More information can be found by visiting each the documentation associated with each directive.)
     *
     * ## CSS-based Animations
     *
     * CSS-based animations with ngAnimate are unique since they require no JavaScript code at all. By using a CSS class that we reference between our HTML
     * and CSS code we can create an animation that will be picked up by Angular when an the underlying directive performs an operation.
     *
     * The example below shows how an `enter` animation can be made possible on a element using `ng-if`:
     *
     * ```html
     * <div ng-if="bool" class="fade">
     *    Fade me in out
     * </div>
     * <button ng-click="bool=true">Fade In!</button>
     * <button ng-click="bool=false">Fade Out!</button>
     * ```
     *
     * Notice the CSS class **fade**? We can now create the CSS transition code that references this class:
     *
     * ```css
     * /&#42; The starting CSS styles for the enter animation &#42;/
     * .fade.ng-enter {
 *   transition:0.5s linear all;
 *   opacity:0;
 * }
     *
     * /&#42; The starting CSS styles for the enter animation &#42;/
     * .fade.ng-enter.ng-enter-active {
 *   opacity:1;
 * }
     * ```
     *
     * The key thing to remember here is that, depending on the animation event (which each of the directives above trigger depending on what's going on) two
     * generated CSS classes will be applied to the element; in the example above we have `.ng-enter` and `.ng-enter-active`. For CSS transitions, the transition
     * code **must** be defined within the starting CSS class (in this case `.ng-enter`). The destination class is what the transition will animate towards.
     *
     * If for example we wanted to create animations for `leave` and `move` (ngRepeat triggers move) then we can do so using the same CSS naming conventions:
     *
     * ```css
     * /&#42; now the element will fade out before it is removed from the DOM &#42;/
     * .fade.ng-leave {
 *   transition:0.5s linear all;
 *   opacity:1;
 * }
     * .fade.ng-leave.ng-leave-active {
 *   opacity:0;
 * }
     * ```
     *
     * We can also make use of **CSS Keyframes** by referencing the keyframe animation within the starting CSS class:
     *
     * ```css
     * /&#42; there is no need to define anything inside of the destination
     * CSS class since the keyframe will take charge of the animation &#42;/
     * .fade.ng-leave {
 *   animation: my_fade_animation 0.5s linear;
 *   -webkit-animation: my_fade_animation 0.5s linear;
 * }
     *
     * @keyframes my_fade_animation {
 *   from { opacity:1; }
 *   to { opacity:0; }
 * }
     *
     * @-webkit-keyframes my_fade_animation {
 *   from { opacity:1; }
 *   to { opacity:0; }
 * }
     * ```
     *
     * Feel free also mix transitions and keyframes together as well as any other CSS classes on the same element.
     *
     * ### CSS Class-based Animations
     *
     * Class-based animations (animations that are triggered via `ngClass`, `ngShow`, `ngHide` and some other directives) have a slightly different
     * naming convention. Class-based animations are basic enough that a standard transition or keyframe can be referenced on the class being added
     * and removed.
     *
     * For example if we wanted to do a CSS animation for `ngHide` then we place an animation on the `.ng-hide` CSS class:
     *
     * ```html
     * <div ng-show="bool" class="fade">
     *   Show and hide me
     * </div>
     * <button ng-click="bool=true">Toggle</button>
     *
     * <style>
     * .fade.ng-hide {
 *   transition:0.5s linear all;
 *   opacity:0;
 * }
     * </style>
     * ```
     *
     * All that is going on here with ngShow/ngHide behind the scenes is the `.ng-hide` class is added/removed (when the hidden state is valid). Since
     * ngShow and ngHide are animation aware then we can match up a transition and ngAnimate handles the rest.
     *
     * In addition the addition and removal of the CSS class, ngAnimate also provides two helper methods that we can use to further decorate the animation
     * with CSS styles.
     *
     * ```html
     * <div ng-class="{on:onOff}" class="highlight">
     *   Highlight this box
     * </div>
     * <button ng-click="onOff=!onOff">Toggle</button>
     *
     * <style>
     * .highlight {
 *   transition:0.5s linear all;
 * }
     * .highlight.on-add {
 *   background:white;
 * }
     * .highlight.on {
 *   background:yellow;
 * }
     * .highlight.on-remove {
 *   background:black;
 * }
     * </style>
     * ```
     *
     * We can also make use of CSS keyframes by placing them within the CSS classes.
     *
     *
     * ### CSS Staggering Animations
     * A Staggering animation is a collection of animations that are issued with a slight delay in between each successive operation resulting in a
     * curtain-like effect. The ngAnimate module (versions >=1.2) supports staggering animations and the stagger effect can be
     * performed by creating a **ng-EVENT-stagger** CSS class and attaching that class to the base CSS class used for
     * the animation. The style property expected within the stagger class can either be a **transition-delay** or an
     * **animation-delay** property (or both if your animation contains both transitions and keyframe animations).
     *
     * ```css
     * .my-animation.ng-enter {
 *   /&#42; standard transition code &#42;/
 *   transition: 1s linear all;
 *   opacity:0;
 * }
     * .my-animation.ng-enter-stagger {
 *   /&#42; this will have a 100ms delay between each successive leave animation &#42;/
 *   transition-delay: 0.1s;
 *
 *   /&#42; in case the stagger doesn't work then the duration value
 *    must be set to 0 to avoid an accidental CSS inheritance &#42;/
 *   transition-duration: 0s;
 * }
     * .my-animation.ng-enter.ng-enter-active {
 *   /&#42; standard transition styles &#42;/
 *   opacity:1;
 * }
     * ```
     *
     * Staggering animations work by default in ngRepeat (so long as the CSS class is defined). Outside of ngRepeat, to use staggering animations
     * on your own, they can be triggered by firing multiple calls to the same event on $animate. However, the restrictions surrounding this
     * are that each of the elements must have the same CSS className value as well as the same parent element. A stagger operation
     * will also be reset if one or more animation frames have passed since the multiple calls to `$animate` were fired.
     *
     * The following code will issue the **ng-leave-stagger** event on the element provided:
     *
     * ```js
     * var kids = parent.children();
     *
     * $animate.leave(kids[0]); //stagger index=0
     * $animate.leave(kids[1]); //stagger index=1
     * $animate.leave(kids[2]); //stagger index=2
     * $animate.leave(kids[3]); //stagger index=3
     * $animate.leave(kids[4]); //stagger index=4
     *
     * window.requestAnimationFrame(function() {
 *   //stagger has reset itself
 *   $animate.leave(kids[5]); //stagger index=0
 *   $animate.leave(kids[6]); //stagger index=1
 *
 *   $scope.$digest();
 * });
     * ```
     *
     * Stagger animations are currently only supported within CSS-defined animations.
     *
     * ## JavaScript-based Animations
     *
     * ngAnimate also allows for animations to be consumed by JavaScript code. The approach is similar to CSS-based animations (where there is a shared
     * CSS class that is referenced in our HTML code) but in addition we need to register the JavaScript animation on the module. By making use of the
     * `module.animation()` module function we can register the ainmation.
     *
     * Let's see an example of a enter/leave animation using `ngRepeat`:
     *
     * ```html
     * <div ng-repeat="item in items" class="slide">
     *   {{ item }}
     * </div>
     * ```
     *
     * See the **slide** CSS class? Let's use that class to define an animation that we'll structure in our module code by using `module.animation`:
     *
     * ```js
     * myModule.animation('.slide', [function() {
 *   return {
 *     // make note that other events (like addClass/removeClass)
 *     // have different function input parameters
 *     enter: function(element, doneFn) {
 *       jQuery(element).fadeIn(1000, doneFn);
 *
 *       // remember to call doneFn so that angular
 *       // knows that the animation has concluded
 *     },
 *
 *     move: function(element, doneFn) {
 *       jQuery(element).fadeIn(1000, doneFn);
 *     },
 *
 *     leave: function(element, doneFn) {
 *       jQuery(element).fadeOut(1000, doneFn);
 *     }
 *   }
 * }]
     * ```
     *
     * The nice thing about JS-based animations is that we can inject other services and make use of advanced animation libraries such as
     * greensock.js and velocity.js.
     *
     * If our animation code class-based (meaning that something like `ngClass`, `ngHide` and `ngShow` triggers it) then we can still define
     * our animations inside of the same registered animation, however, the function input arguments are a bit different:
     *
     * ```html
     * <div ng-class="color" class="colorful">
     *   this box is moody
     * </div>
     * <button ng-click="color='red'">Change to red</button>
     * <button ng-click="color='blue'">Change to blue</button>
     * <button ng-click="color='green'">Change to green</button>
     * ```
     *
     * ```js
     * myModule.animation('.colorful', [function() {
 *   return {
 *     addClass: function(element, className, doneFn) {
 *       // do some cool animation and call the doneFn
 *     },
 *     removeClass: function(element, className, doneFn) {
 *       // do some cool animation and call the doneFn
 *     },
 *     setClass: function(element, addedClass, removedClass, doneFn) {
 *       // do some cool animation and call the doneFn
 *     }
 *   }
 * }]
     * ```
     *
     * ## CSS + JS Animations Together
     *
     * AngularJS 1.4 and higher has taken steps to make the amalgamation of CSS and JS animations more flexible. However, unlike earlier versions of Angular,
     * defining CSS and JS animations to work off of the same CSS class will not work anymore. Therefore example below will only result in **JS animations taking
     * charge of the animation**:
     *
     * ```html
     * <div ng-if="bool" class="slide">
     *   Slide in and out
     * </div>
     * ```
     *
     * ```js
     * myModule.animation('.slide', [function() {
 *   return {
 *     enter: function(element, doneFn) {
 *       jQuery(element).slideIn(1000, doneFn);
 *     }
 *   }
 * }]
     * ```
     *
     * ```css
     * .slide.ng-enter {
 *   transition:0.5s linear all;
 *   transform:translateY(-100px);
 * }
     * .slide.ng-enter.ng-enter-active {
 *   transform:translateY(0);
 * }
     * ```
     *
     * Does this mean that CSS and JS animations cannot be used together? Do JS-based animations always have higher priority? We can suppliment for the
     * lack of CSS animations by making use of the `$animateCss` service to trigger our own tweaked-out, CSS-based animations directly from
     * our own JS-based animation code:
     *
     * ```js
     * myModule.animation('.slide', ['$animateCss', function($animateCss) {
 *   return {
 *     enter: function(element, doneFn) {
 *       var animation = $animateCss(element, {
 *         event: 'enter'
 *       });
 *
 *       if (animation) {
 *         // this will trigger `.slide.ng-enter` and `.slide.ng-enter-active`.
 *         var runner = animation.start();
 *         runner.done(doneFn);
 *       } else { //no CSS animation was detected
 *         doneFn();
 *       }
 *     }
 *   }
 * }]
     * ```
     *
     * The nice thing here is that we can save bandwidth by sticking to our CSS-based animation code and we don't need to rely on a 3rd-party animation framework.
     *
     * The `$animateCss` service is very powerful since we can feed in all kinds of extra properties that will be evaluated and fed into a CSS transition or
     * keyframe animation. For example if we wanted to animate the height of an element while adding and removing classes then we can do so by providing that
     * data into `$animateCss` directly:
     *
     * ```js
     * myModule.animation('.slide', ['$animateCss', function($animateCss) {
 *   return {
 *     enter: function(element, doneFn) {
 *       var animation = $animateCss(element, {
 *         event: 'enter',
 *         addClass: 'maroon-setting',
 *         from: { height:0 },
 *         to: { height: 200 }
 *       });
 *
 *       if (animation) {
 *         animation.start().done(doneFn);
 *       } else {
 *         doneFn();
 *       }
 *     }
 *   }
 * }]
     * ```
     *
     * Now we can fill in the rest via our transition CSS code:
     *
     * ```css
     * /&#42; the transition tells ngAnimate to make the animation happen &#42;/
     * .slide.ng-enter { transition:0.5s linear all; }
     *
     * /&#42; this extra CSS class will be absorbed into the transition
     * since the $animateCss code is adding the class &#42;/
     * .maroon-setting { background:red; }
     * ```
     *
     * And `$animateCss` will figure out the rest. Just make sure to have the `done()` callback fire the `doneFn` function to signal when the animation is over.
     *
     * To learn more about what's possible be sure to visit the {@link ngAnimate.$animateCss $animateCss service}.
     *
     *
     * ## Using $animate in your directive code
     *
     * So far we've explored how to feed in animations into an Angular application, but how do we trigger animations within our own directives in our application?
     * By injecting the `$animate` service into our directive code, we can trigger structural and class-based hooks which can then be consumed by animations. Let's
     * imagine we have a greeting box that shows and hides itself when the data changes
     *
     * ```html
     * <greeing-box active="onOrOff">Hi there</greeting-box>
     * ```
     *
     * ```js
     * ngModule.directive('greetingBox', ['$animate', function($animate) {
 *   return function(scope, element, attrs) {
 *     attrs.$observe('active', function(value) {
 *       value ? $animate.addClass(element, 'on') ? $animate.removeClass(element, 'on');
 *     });
 *   });
 * }]);
     * ```
     *
     * Now the `on` CSS class is added and removed on the greeting box component. Now if we add a CSS class on top of the greeting box element
     * in our HTML code then we can trigger a CSS or JS animation to happen.
     *
     * ```css
     * /&#42; normally we would create a CSS class to reference on the element &#42;/
     * [greeting-box].on { transition:0.5s linear all; background:green; color:white; }
     * ```
     *
     * The `$animate` service contains a variety of other methods like `enter`, `leave`, `animate` and `setClass`. To learn more about what's
     * possible be sure to visit the {@link ng.$animate $animate service API page}.
     *
     *
     * ### Preventing Collisions With Third Party Libraries
     *
     * Some third-party frameworks place animation duration defaults across many element or className
     * selectors in order to make their code small and reuseable. This can lead to issues with ngAnimate, which
     * is expecting actual animations on these elements and has to wait for their completion.
     *
     * You can prevent this unwanted behavior by using a prefix on all your animation classes:
     *
     * ```css
     * /&#42; prefixed with animate- &#42;/
     * .animate-fade-add.animate-fade-add-active {
 *   transition:1s linear all;
 *   opacity:0;
 * }
     * ```
     *
     * You then configure `$animate` to enforce this prefix:
     *
     * ```js
     * $animateProvider.classNameFilter(/animate-/);
     * ```
     *
     * This also may provide your application with a speed boost since only specific elements containing CSS class prefix
     * will be evaluated for animation when any DOM changes occur in the application.
     *
     * ## Callbacks and Promises
     *
     * When `$animate` is called it returns a promise that can be used to capture when the animation has ended. Therefore if we were to trigger
     * an animation (within our directive code) then we can continue performing directive and scope related activities after the animation has
     * ended by chaining onto the returned promise that animation method returns.
     *
     * ```js
     * // somewhere within the depths of the directive
     * $animate.enter(element, parent).then(function() {
 *   //the animation has completed
 * });
     * ```
     *
     * (Note that earlier versions of Angular prior to v1.4 required the promise code to be wrapped using `$scope.$apply(...)`. This is not the case
     * anymore.)
     *
     * In addition to the animation promise, we can also make use of animation-related callbacks within our directives and controller code by registering
     * an event listener using the `$animate` service. Let's say for example that an animation was triggered on our `ng-view` element and we wanted our
     * routing controller to hook into that:
     *
     * ```js
     * ngModule.controller('HomePageController', ['$animate', function($animate) {
 *   $animate.on('enter', '[ng-view]', function(element) {
 *     // the animation for this route has completed
 *   }]);
 * }])
     * ```
     *
     * (Note that you will need to trigger a digest within the callback to get angular to notice any scope-related changes.)
     */

    /**
     * @ngdoc service
     * @name $animate
     * @kind object
     *
     * @description
     * The ngAnimate `$animate` service documentation is the same for the core `$animate` service.
     *
     * Click here {@link ng.$animate $animate to learn more about animations with `$animate`}.
     */
    angular.module('ngAnimate', [])
        .directive('ngAnimateChildren', $$AnimateChildrenDirective)

        .factory('$$rAFMutex', $$rAFMutexFactory)

        .factory('$$AnimateRunner', $$AnimateRunnerFactory)

        .provider('$$animateQueue', $$AnimateQueueProvider)
        .provider('$$animation', $$AnimationProvider)

        .provider('$animateCss', $AnimateCssProvider)
        .provider('$$animateCssDriver', $$AnimateCssDriverProvider)

        .provider('$$animateJs', $$AnimateJsProvider)
        .provider('$$animateJsDriver', $$AnimateJsDriverProvider);


})(window, window.angular);
/*
 AngularJS v1.4.0-rc.0
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
 */
(function(y,u,z){'use strict';function s(f,k,p){n.directive(f,["$parse","$swipe",function(d,e){return function(l,m,g){function h(a){if(!b)return!1;var c=Math.abs(a.y-b.y);a=(a.x-b.x)*k;return q&&75>c&&0<a&&30<a&&.3>c/a}var c=d(g[f]),b,q,a=["touch"];u.isDefined(g.ngSwipeDisableMouse)||a.push("mouse");e.bind(m,{start:function(a,c){b=a;q=!0},cancel:function(a){q=!1},end:function(a,b){h(a)&&l.$apply(function(){m.triggerHandler(p);c(l,{$event:b})})}},a)}}])}var n=u.module("ngTouch",[]);n.factory("$swipe",
    [function(){function f(d){d=d.originalEvent||d;var e=d.touches&&d.touches.length?d.touches:[d];d=d.changedTouches&&d.changedTouches[0]||e[0];return{x:d.clientX,y:d.clientY}}function k(d,e){var l=[];u.forEach(d,function(d){(d=p[d][e])&&l.push(d)});return l.join(" ")}var p={mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},touch:{start:"touchstart",move:"touchmove",end:"touchend",cancel:"touchcancel"}};return{bind:function(d,e,l){var m,g,h,c,b=!1;l=l||["mouse","touch"];d.on(k(l,"start"),function(a){h=
        f(a);b=!0;g=m=0;c=h;e.start&&e.start(h,a)});var q=k(l,"cancel");if(q)d.on(q,function(a){b=!1;e.cancel&&e.cancel(a)});d.on(k(l,"move"),function(a){if(b&&h){var d=f(a);m+=Math.abs(d.x-c.x);g+=Math.abs(d.y-c.y);c=d;10>m&&10>g||(g>m?(b=!1,e.cancel&&e.cancel(a)):(a.preventDefault(),e.move&&e.move(d,a)))}});d.on(k(l,"end"),function(a){b&&(b=!1,e.end&&e.end(f(a),a))})}}}]);n.config(["$provide",function(f){f.decorator("ngClickDirective",["$delegate",function(k){k.shift();return k}])}]);n.directive("ngClick",
    ["$parse","$timeout","$rootElement",function(f,k,p){function d(c,b,d){for(var a=0;a<c.length;a+=2){var e=c[a+1],g=d;if(25>Math.abs(c[a]-b)&&25>Math.abs(e-g))return c.splice(a,a+2),!0}return!1}function e(c){if(!(2500<Date.now()-m)){var b=c.touches&&c.touches.length?c.touches:[c],e=b[0].clientX,b=b[0].clientY;1>e&&1>b||h&&h[0]===e&&h[1]===b||(h&&(h=null),"label"===c.target.tagName.toLowerCase()&&(h=[e,b]),d(g,e,b)||(c.stopPropagation(),c.preventDefault(),c.target&&c.target.blur()))}}function l(c){c=
        c.touches&&c.touches.length?c.touches:[c];var b=c[0].clientX,d=c[0].clientY;g.push(b,d);k(function(){for(var a=0;a<g.length;a+=2)if(g[a]==b&&g[a+1]==d){g.splice(a,a+2);break}},2500,!1)}var m,g,h;return function(c,b,h){function a(){n=!1;b.removeClass("ng-click-active")}var k=f(h.ngClick),n=!1,r,s,v,w;b.on("touchstart",function(a){n=!0;r=a.target?a.target:a.srcElement;3==r.nodeType&&(r=r.parentNode);b.addClass("ng-click-active");s=Date.now();a=a.originalEvent||a;a=(a.touches&&a.touches.length?a.touches:
        [a])[0];v=a.clientX;w=a.clientY});b.on("touchmove",function(b){a()});b.on("touchcancel",function(b){a()});b.on("touchend",function(c){var k=Date.now()-s,f=c.originalEvent||c,t=(f.changedTouches&&f.changedTouches.length?f.changedTouches:f.touches&&f.touches.length?f.touches:[f])[0],f=t.clientX,t=t.clientY,x=Math.sqrt(Math.pow(f-v,2)+Math.pow(t-w,2));n&&750>k&&12>x&&(g||(p[0].addEventListener("click",e,!0),p[0].addEventListener("touchstart",l,!0),g=[]),m=Date.now(),d(g,f,t),r&&r.blur(),u.isDefined(h.disabled)&&
    !1!==h.disabled||b.triggerHandler("click",[c]));a()});b.onclick=function(a){};b.on("click",function(a,b){c.$apply(function(){k(c,{$event:b||a})})});b.on("mousedown",function(a){b.addClass("ng-click-active")});b.on("mousemove mouseup",function(a){b.removeClass("ng-click-active")})}}]);s("ngSwipeLeft",-1,"swipeleft");s("ngSwipeRight",1,"swiperight")})(window,window.angular);

/*! @license Firebase v2.2.3
    License: https://www.firebase.com/terms/terms-of-service.html */
(function() {var h,aa=this;function n(a){return void 0!==a}function ba(){}function ca(a){a.Wb=function(){return a.qf?a.qf:a.qf=new a}}
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ea(a){return"array"==da(a)}function fa(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}function p(a){return"string"==typeof a}function ga(a){return"number"==typeof a}function ha(a){return"function"==da(a)}function ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ja(a,b,c){return a.call.apply(a.bind,arguments)}
function ka(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function q(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ja:ka;return q.apply(null,arguments)}var la=Date.now||function(){return+new Date};
function ma(a,b){function c(){}c.prototype=b.prototype;a.Wg=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Sg=function(a,c,f){for(var g=Array(arguments.length-2),k=2;k<arguments.length;k++)g[k-2]=arguments[k];return b.prototype[c].apply(a,g)}};function r(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function na(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}function oa(a,b){for(var c in a)if(!b.call(void 0,a[c],c,a))return!1;return!0}function pa(a){var b=0,c;for(c in a)b++;return b}function qa(a){for(var b in a)return b}function ra(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function sa(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function ta(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
function ua(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d}function va(a,b){var c=ua(a,b,void 0);return c&&a[c]}function wa(a){for(var b in a)return!1;return!0}function xa(a){var b={},c;for(c in a)b[c]=a[c];return b}var ya="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function za(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ya.length;f++)c=ya[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function Aa(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function Ba(){this.Rd=void 0}
function Ca(a,b,c){switch(typeof b){case "string":Da(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(ea(b)){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),e=b[f],Ca(a,a.Rd?a.Rd.call(b,String(f),e):e,c),e=",";c.push("]");break}c.push("{");d="";for(f in b)Object.prototype.hasOwnProperty.call(b,f)&&(e=b[f],"function"!=typeof e&&(c.push(d),Da(f,c),
c.push(":"),Ca(a,a.Rd?a.Rd.call(b,f,e):e,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var Ea={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Fa=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
function Da(a,b){b.push('"',a.replace(Fa,function(a){if(a in Ea)return Ea[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return Ea[a]=e+b.toString(16)}),'"')};function Ga(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^la()).toString(36)};var Ha;a:{var Ia=aa.navigator;if(Ia){var Ja=Ia.userAgent;if(Ja){Ha=Ja;break a}}Ha=""};function Ka(){this.Wa=-1};function La(){this.Wa=-1;this.Wa=64;this.R=[];this.me=[];this.Qf=[];this.Kd=[];this.Kd[0]=128;for(var a=1;a<this.Wa;++a)this.Kd[a]=0;this.ce=this.ac=0;this.reset()}ma(La,Ka);La.prototype.reset=function(){this.R[0]=1732584193;this.R[1]=4023233417;this.R[2]=2562383102;this.R[3]=271733878;this.R[4]=3285377520;this.ce=this.ac=0};
function Ma(a,b,c){c||(c=0);var d=a.Qf;if(p(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.R[0];c=a.R[1];for(var g=a.R[2],k=a.R[3],l=a.R[4],m,e=0;80>e;e++)40>e?20>e?(f=k^c&(g^k),m=1518500249):(f=c^g^k,m=1859775393):60>e?(f=c&g|k&(c|g),m=2400959708):(f=c^g^k,m=3395469782),f=(b<<
5|b>>>27)+f+l+m+d[e]&4294967295,l=k,k=g,g=(c<<30|c>>>2)&4294967295,c=b,b=f;a.R[0]=a.R[0]+b&4294967295;a.R[1]=a.R[1]+c&4294967295;a.R[2]=a.R[2]+g&4294967295;a.R[3]=a.R[3]+k&4294967295;a.R[4]=a.R[4]+l&4294967295}
La.prototype.update=function(a,b){if(null!=a){n(b)||(b=a.length);for(var c=b-this.Wa,d=0,e=this.me,f=this.ac;d<b;){if(0==f)for(;d<=c;)Ma(this,a,d),d+=this.Wa;if(p(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.Wa){Ma(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.Wa){Ma(this,e);f=0;break}}this.ac=f;this.ce+=b}};var t=Array.prototype,Na=t.indexOf?function(a,b,c){return t.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Oa=t.forEach?function(a,b,c){t.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Pa=t.filter?function(a,b,c){return t.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=p(a)?
a.split(""):a,k=0;k<d;k++)if(k in g){var l=g[k];b.call(c,l,k,a)&&(e[f++]=l)}return e},Qa=t.map?function(a,b,c){return t.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=p(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},Ra=t.reduce?function(a,b,c,d){for(var e=[],f=1,g=arguments.length;f<g;f++)e.push(arguments[f]);d&&(e[0]=q(b,d));return t.reduce.apply(a,e)}:function(a,b,c,d){var e=c;Oa(a,function(c,g){e=b.call(d,e,c,g,a)});return e},Sa=t.every?function(a,b,
c){return t.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0};function Ta(a,b){var c=Ua(a,b,void 0);return 0>c?null:p(a)?a.charAt(c):a[c]}function Ua(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}function Va(a,b){var c=Na(a,b);0<=c&&t.splice.call(a,c,1)}function Wa(a,b,c){return 2>=arguments.length?t.slice.call(a,b):t.slice.call(a,b,c)}
function Xa(a,b){a.sort(b||Ya)}function Ya(a,b){return a>b?1:a<b?-1:0};var Za=-1!=Ha.indexOf("Opera")||-1!=Ha.indexOf("OPR"),$a=-1!=Ha.indexOf("Trident")||-1!=Ha.indexOf("MSIE"),ab=-1!=Ha.indexOf("Gecko")&&-1==Ha.toLowerCase().indexOf("webkit")&&!(-1!=Ha.indexOf("Trident")||-1!=Ha.indexOf("MSIE")),bb=-1!=Ha.toLowerCase().indexOf("webkit");
(function(){var a="",b;if(Za&&aa.opera)return a=aa.opera.version,ha(a)?a():a;ab?b=/rv\:([^\);]+)(\)|;)/:$a?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:bb&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(Ha))?a[1]:"");return $a&&(b=(b=aa.document)?b.documentMode:void 0,b>parseFloat(a))?String(b):a})();var cb=null,db=null,eb=null;function fb(a,b){if(!fa(a))throw Error("encodeByteArray takes an array as a parameter");gb();for(var c=b?db:cb,d=[],e=0;e<a.length;e+=3){var f=a[e],g=e+1<a.length,k=g?a[e+1]:0,l=e+2<a.length,m=l?a[e+2]:0,v=f>>2,f=(f&3)<<4|k>>4,k=(k&15)<<2|m>>6,m=m&63;l||(m=64,g||(k=64));d.push(c[v],c[f],c[k],c[m])}return d.join("")}
function gb(){if(!cb){cb={};db={};eb={};for(var a=0;65>a;a++)cb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),db[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),eb[db[a]]=a,62<=a&&(eb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a)]=a)}};function u(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function w(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]}function hb(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])}function ib(a){var b={};hb(a,function(a,d){b[a]=d});return b};function jb(a){var b=[];hb(a,function(a,d){ea(d)?Oa(d,function(d){b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))}):b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))});return b.length?"&"+b.join("&"):""}function kb(a){var b={};a=a.replace(/^\?/,"").split("&");Oa(a,function(a){a&&(a=a.split("="),b[a[0]]=a[1])});return b};function x(a,b,c,d){var e;d<b?e="at least "+b:d>c&&(e=0===c?"none":"no more than "+c);if(e)throw Error(a+" failed: Was called with "+d+(1===d?" argument.":" arguments.")+" Expects "+e+".");}function z(a,b,c){var d="";switch(b){case 1:d=c?"first":"First";break;case 2:d=c?"second":"Second";break;case 3:d=c?"third":"Third";break;case 4:d=c?"fourth":"Fourth";break;default:throw Error("errorPrefix called with argumentNumber > 4.  Need to update it?");}return a=a+" failed: "+(d+" argument ")}
function A(a,b,c,d){if((!d||n(c))&&!ha(c))throw Error(z(a,b,d)+"must be a valid function.");}function lb(a,b,c){if(n(c)&&(!ia(c)||null===c))throw Error(z(a,b,!0)+"must be a valid context object.");};function mb(a){return"undefined"!==typeof JSON&&n(JSON.parse)?JSON.parse(a):Aa(a)}function B(a){if("undefined"!==typeof JSON&&n(JSON.stringify))a=JSON.stringify(a);else{var b=[];Ca(new Ba,a,b);a=b.join("")}return a};function nb(){this.Td=C}nb.prototype.j=function(a){return this.Td.oa(a)};nb.prototype.toString=function(){return this.Td.toString()};function ob(){}ob.prototype.mf=function(){return null};ob.prototype.ye=function(){return null};var pb=new ob;function qb(a,b,c){this.Nf=a;this.Ka=b;this.Jd=c}qb.prototype.mf=function(a){var b=this.Ka.D;if(rb(b,a))return b.j().M(a);b=null!=this.Jd?new sb(this.Jd,!0,!1):this.Ka.u();return this.Nf.Xa(a,b)};qb.prototype.ye=function(a,b,c){var d=null!=this.Jd?this.Jd:tb(this.Ka);a=this.Nf.ne(d,b,1,c,a);return 0===a.length?null:a[0]};function ub(){this.tb=[]}function vb(a,b){for(var c=null,d=0;d<b.length;d++){var e=b[d],f=e.Zb();null===c||f.Z(c.Zb())||(a.tb.push(c),c=null);null===c&&(c=new wb(f));c.add(e)}c&&a.tb.push(c)}function xb(a,b,c){vb(a,c);yb(a,function(a){return a.Z(b)})}function zb(a,b,c){vb(a,c);yb(a,function(a){return a.contains(b)||b.contains(a)})}
function yb(a,b){for(var c=!0,d=0;d<a.tb.length;d++){var e=a.tb[d];if(e)if(e=e.Zb(),b(e)){for(var e=a.tb[d],f=0;f<e.ud.length;f++){var g=e.ud[f];if(null!==g){e.ud[f]=null;var k=g.Ub();Ab&&Bb("event: "+g.toString());Cb(k)}}a.tb[d]=null}else c=!1}c&&(a.tb=[])}function wb(a){this.qa=a;this.ud=[]}wb.prototype.add=function(a){this.ud.push(a)};wb.prototype.Zb=function(){return this.qa};function D(a,b,c,d){this.type=a;this.Ja=b;this.Ya=c;this.Je=d;this.Pd=void 0}function Db(a){return new D(Eb,a)}var Eb="value";function Fb(a,b,c,d){this.ue=b;this.Xd=c;this.Pd=d;this.td=a}Fb.prototype.Zb=function(){var a=this.Xd.lc();return"value"===this.td?a.path:a.parent().path};Fb.prototype.ze=function(){return this.td};Fb.prototype.Ub=function(){return this.ue.Ub(this)};Fb.prototype.toString=function(){return this.Zb().toString()+":"+this.td+":"+B(this.Xd.jf())};function Gb(a,b,c){this.ue=a;this.error=b;this.path=c}Gb.prototype.Zb=function(){return this.path};Gb.prototype.ze=function(){return"cancel"};
Gb.prototype.Ub=function(){return this.ue.Ub(this)};Gb.prototype.toString=function(){return this.path.toString()+":cancel"};function sb(a,b,c){this.B=a;this.$=b;this.Tb=c}function Hb(a){return a.$}function rb(a,b){return a.$&&!a.Tb||a.B.Ha(b)}sb.prototype.j=function(){return this.B};function Ib(a){this.ag=a;this.Cd=null}Ib.prototype.get=function(){var a=this.ag.get(),b=xa(a);if(this.Cd)for(var c in this.Cd)b[c]-=this.Cd[c];this.Cd=a;return b};function Jb(a,b){this.Jf={};this.Zd=new Ib(a);this.ca=b;var c=1E4+2E4*Math.random();setTimeout(q(this.Ef,this),Math.floor(c))}Jb.prototype.Ef=function(){var a=this.Zd.get(),b={},c=!1,d;for(d in a)0<a[d]&&u(this.Jf,d)&&(b[d]=a[d],c=!0);c&&this.ca.Df(b);setTimeout(q(this.Ef,this),Math.floor(6E5*Math.random()))};function Kb(){this.Dc={}}function Lb(a,b,c){n(c)||(c=1);u(a.Dc,b)||(a.Dc[b]=0);a.Dc[b]+=c}Kb.prototype.get=function(){return xa(this.Dc)};var Mb={},Nb={};function Ob(a){a=a.toString();Mb[a]||(Mb[a]=new Kb);return Mb[a]}function Pb(a,b){var c=a.toString();Nb[c]||(Nb[c]=b());return Nb[c]};function E(a,b){this.name=a;this.S=b}function Qb(a,b){return new E(a,b)};function Rb(a,b){return Sb(a.name,b.name)}function Tb(a,b){return Sb(a,b)};function Ub(a,b,c){this.type=Vb;this.source=a;this.path=b;this.Ia=c}Ub.prototype.Xc=function(a){return this.path.e()?new Ub(this.source,F,this.Ia.M(a)):new Ub(this.source,G(this.path),this.Ia)};Ub.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" overwrite: "+this.Ia.toString()+")"};function Wb(a,b){this.type=Xb;this.source=Yb;this.path=a;this.Te=b}Wb.prototype.Xc=function(){return this.path.e()?this:new Wb(G(this.path),this.Te)};Wb.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" ack write revert="+this.Te+")"};function Zb(a,b){this.type=$b;this.source=a;this.path=b}Zb.prototype.Xc=function(){return this.path.e()?new Zb(this.source,F):new Zb(this.source,G(this.path))};Zb.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" listen_complete)"};function ac(a,b){this.La=a;this.xa=b?b:bc}h=ac.prototype;h.Na=function(a,b){return new ac(this.La,this.xa.Na(a,b,this.La).X(null,null,!1,null,null))};h.remove=function(a){return new ac(this.La,this.xa.remove(a,this.La).X(null,null,!1,null,null))};h.get=function(a){for(var b,c=this.xa;!c.e();){b=this.La(a,c.key);if(0===b)return c.value;0>b?c=c.left:0<b&&(c=c.right)}return null};
function cc(a,b){for(var c,d=a.xa,e=null;!d.e();){c=a.La(b,d.key);if(0===c){if(d.left.e())return e?e.key:null;for(d=d.left;!d.right.e();)d=d.right;return d.key}0>c?d=d.left:0<c&&(e=d,d=d.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?");}h.e=function(){return this.xa.e()};h.count=function(){return this.xa.count()};h.Rc=function(){return this.xa.Rc()};h.fc=function(){return this.xa.fc()};h.ha=function(a){return this.xa.ha(a)};
h.Xb=function(a){return new dc(this.xa,null,this.La,!1,a)};h.Yb=function(a,b){return new dc(this.xa,a,this.La,!1,b)};h.$b=function(a,b){return new dc(this.xa,a,this.La,!0,b)};h.of=function(a){return new dc(this.xa,null,this.La,!0,a)};function dc(a,b,c,d,e){this.Sd=e||null;this.Ee=d;this.Pa=[];for(e=1;!a.e();)if(e=b?c(a.key,b):1,d&&(e*=-1),0>e)a=this.Ee?a.left:a.right;else if(0===e){this.Pa.push(a);break}else this.Pa.push(a),a=this.Ee?a.right:a.left}
function H(a){if(0===a.Pa.length)return null;var b=a.Pa.pop(),c;c=a.Sd?a.Sd(b.key,b.value):{key:b.key,value:b.value};if(a.Ee)for(b=b.left;!b.e();)a.Pa.push(b),b=b.right;else for(b=b.right;!b.e();)a.Pa.push(b),b=b.left;return c}function ec(a){if(0===a.Pa.length)return null;var b;b=a.Pa;b=b[b.length-1];return a.Sd?a.Sd(b.key,b.value):{key:b.key,value:b.value}}function fc(a,b,c,d,e){this.key=a;this.value=b;this.color=null!=c?c:!0;this.left=null!=d?d:bc;this.right=null!=e?e:bc}h=fc.prototype;
h.X=function(a,b,c,d,e){return new fc(null!=a?a:this.key,null!=b?b:this.value,null!=c?c:this.color,null!=d?d:this.left,null!=e?e:this.right)};h.count=function(){return this.left.count()+1+this.right.count()};h.e=function(){return!1};h.ha=function(a){return this.left.ha(a)||a(this.key,this.value)||this.right.ha(a)};function gc(a){return a.left.e()?a:gc(a.left)}h.Rc=function(){return gc(this).key};h.fc=function(){return this.right.e()?this.key:this.right.fc()};
h.Na=function(a,b,c){var d,e;e=this;d=c(a,e.key);e=0>d?e.X(null,null,null,e.left.Na(a,b,c),null):0===d?e.X(null,b,null,null,null):e.X(null,null,null,null,e.right.Na(a,b,c));return hc(e)};function ic(a){if(a.left.e())return bc;a.left.fa()||a.left.left.fa()||(a=jc(a));a=a.X(null,null,null,ic(a.left),null);return hc(a)}
h.remove=function(a,b){var c,d;c=this;if(0>b(a,c.key))c.left.e()||c.left.fa()||c.left.left.fa()||(c=jc(c)),c=c.X(null,null,null,c.left.remove(a,b),null);else{c.left.fa()&&(c=kc(c));c.right.e()||c.right.fa()||c.right.left.fa()||(c=lc(c),c.left.left.fa()&&(c=kc(c),c=lc(c)));if(0===b(a,c.key)){if(c.right.e())return bc;d=gc(c.right);c=c.X(d.key,d.value,null,null,ic(c.right))}c=c.X(null,null,null,null,c.right.remove(a,b))}return hc(c)};h.fa=function(){return this.color};
function hc(a){a.right.fa()&&!a.left.fa()&&(a=mc(a));a.left.fa()&&a.left.left.fa()&&(a=kc(a));a.left.fa()&&a.right.fa()&&(a=lc(a));return a}function jc(a){a=lc(a);a.right.left.fa()&&(a=a.X(null,null,null,null,kc(a.right)),a=mc(a),a=lc(a));return a}function mc(a){return a.right.X(null,null,a.color,a.X(null,null,!0,null,a.right.left),null)}function kc(a){return a.left.X(null,null,a.color,null,a.X(null,null,!0,a.left.right,null))}
function lc(a){return a.X(null,null,!a.color,a.left.X(null,null,!a.left.color,null,null),a.right.X(null,null,!a.right.color,null,null))}function nc(){}h=nc.prototype;h.X=function(){return this};h.Na=function(a,b){return new fc(a,b,null)};h.remove=function(){return this};h.count=function(){return 0};h.e=function(){return!0};h.ha=function(){return!1};h.Rc=function(){return null};h.fc=function(){return null};h.fa=function(){return!1};var bc=new nc;function oc(a,b){return a&&"object"===typeof a?(J(".sv"in a,"Unexpected leaf node or priority contents"),b[a[".sv"]]):a}function pc(a,b){var c=new qc;rc(a,new K(""),function(a,e){c.mc(a,sc(e,b))});return c}function sc(a,b){var c=a.A().K(),c=oc(c,b),d;if(a.N()){var e=oc(a.Ba(),b);return e!==a.Ba()||c!==a.A().K()?new tc(e,L(c)):a}d=a;c!==a.A().K()&&(d=d.da(new tc(c)));a.U(M,function(a,c){var e=sc(c,b);e!==c&&(d=d.Q(a,e))});return d};function K(a,b){if(1==arguments.length){this.o=a.split("/");for(var c=0,d=0;d<this.o.length;d++)0<this.o[d].length&&(this.o[c]=this.o[d],c++);this.o.length=c;this.Y=0}else this.o=a,this.Y=b}function N(a,b){var c=O(a);if(null===c)return b;if(c===O(b))return N(G(a),G(b));throw Error("INTERNAL ERROR: innerPath ("+b+") is not within outerPath ("+a+")");}function O(a){return a.Y>=a.o.length?null:a.o[a.Y]}function uc(a){return a.o.length-a.Y}
function G(a){var b=a.Y;b<a.o.length&&b++;return new K(a.o,b)}function vc(a){return a.Y<a.o.length?a.o[a.o.length-1]:null}h=K.prototype;h.toString=function(){for(var a="",b=this.Y;b<this.o.length;b++)""!==this.o[b]&&(a+="/"+this.o[b]);return a||"/"};h.slice=function(a){return this.o.slice(this.Y+(a||0))};h.parent=function(){if(this.Y>=this.o.length)return null;for(var a=[],b=this.Y;b<this.o.length-1;b++)a.push(this.o[b]);return new K(a,0)};
h.w=function(a){for(var b=[],c=this.Y;c<this.o.length;c++)b.push(this.o[c]);if(a instanceof K)for(c=a.Y;c<a.o.length;c++)b.push(a.o[c]);else for(a=a.split("/"),c=0;c<a.length;c++)0<a[c].length&&b.push(a[c]);return new K(b,0)};h.e=function(){return this.Y>=this.o.length};h.Z=function(a){if(uc(this)!==uc(a))return!1;for(var b=this.Y,c=a.Y;b<=this.o.length;b++,c++)if(this.o[b]!==a.o[c])return!1;return!0};
h.contains=function(a){var b=this.Y,c=a.Y;if(uc(this)>uc(a))return!1;for(;b<this.o.length;){if(this.o[b]!==a.o[c])return!1;++b;++c}return!0};var F=new K("");function wc(a,b){this.Qa=a.slice();this.Ea=Math.max(1,this.Qa.length);this.hf=b;for(var c=0;c<this.Qa.length;c++)this.Ea+=xc(this.Qa[c]);yc(this)}wc.prototype.push=function(a){0<this.Qa.length&&(this.Ea+=1);this.Qa.push(a);this.Ea+=xc(a);yc(this)};wc.prototype.pop=function(){var a=this.Qa.pop();this.Ea-=xc(a);0<this.Qa.length&&--this.Ea};
function yc(a){if(768<a.Ea)throw Error(a.hf+"has a key path longer than 768 bytes ("+a.Ea+").");if(32<a.Qa.length)throw Error(a.hf+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+zc(a));}function zc(a){return 0==a.Qa.length?"":"in property '"+a.Qa.join(".")+"'"};function Ac(){this.wc={}}Ac.prototype.set=function(a,b){null==b?delete this.wc[a]:this.wc[a]=b};Ac.prototype.get=function(a){return u(this.wc,a)?this.wc[a]:null};Ac.prototype.remove=function(a){delete this.wc[a]};Ac.prototype.rf=!0;function Bc(a){this.Ec=a;this.Od="firebase:"}h=Bc.prototype;h.set=function(a,b){null==b?this.Ec.removeItem(this.Od+a):this.Ec.setItem(this.Od+a,B(b))};h.get=function(a){a=this.Ec.getItem(this.Od+a);return null==a?null:mb(a)};h.remove=function(a){this.Ec.removeItem(this.Od+a)};h.rf=!1;h.toString=function(){return this.Ec.toString()};function Cc(a){try{if("undefined"!==typeof window&&"undefined"!==typeof window[a]){var b=window[a];b.setItem("firebase:sentinel","cache");b.removeItem("firebase:sentinel");return new Bc(b)}}catch(c){}return new Ac}var Dc=Cc("localStorage"),P=Cc("sessionStorage");function Ec(a,b,c,d,e){this.host=a.toLowerCase();this.domain=this.host.substr(this.host.indexOf(".")+1);this.lb=b;this.Bb=c;this.Qg=d;this.Nd=e||"";this.Oa=Dc.get("host:"+a)||this.host}function Fc(a,b){b!==a.Oa&&(a.Oa=b,"s-"===a.Oa.substr(0,2)&&Dc.set("host:"+a.host,a.Oa))}Ec.prototype.toString=function(){var a=(this.lb?"https://":"http://")+this.host;this.Nd&&(a+="<"+this.Nd+">");return a};var Gc=function(){var a=1;return function(){return a++}}();function J(a,b){if(!a)throw Hc(b);}function Hc(a){return Error("Firebase (2.2.3) INTERNAL ASSERT FAILED: "+a)}
function Ic(a){try{var b;if("undefined"!==typeof atob)b=atob(a);else{gb();for(var c=eb,d=[],e=0;e<a.length;){var f=c[a.charAt(e++)],g=e<a.length?c[a.charAt(e)]:0;++e;var k=e<a.length?c[a.charAt(e)]:64;++e;var l=e<a.length?c[a.charAt(e)]:64;++e;if(null==f||null==g||null==k||null==l)throw Error();d.push(f<<2|g>>4);64!=k&&(d.push(g<<4&240|k>>2),64!=l&&d.push(k<<6&192|l))}if(8192>d.length)b=String.fromCharCode.apply(null,d);else{a="";for(c=0;c<d.length;c+=8192)a+=String.fromCharCode.apply(null,Wa(d,c,
c+8192));b=a}}return b}catch(m){Bb("base64Decode failed: ",m)}return null}function Jc(a){var b=Kc(a);a=new La;a.update(b);var b=[],c=8*a.ce;56>a.ac?a.update(a.Kd,56-a.ac):a.update(a.Kd,a.Wa-(a.ac-56));for(var d=a.Wa-1;56<=d;d--)a.me[d]=c&255,c/=256;Ma(a,a.me);for(d=c=0;5>d;d++)for(var e=24;0<=e;e-=8)b[c]=a.R[d]>>e&255,++c;return fb(b)}
function Lc(a){for(var b="",c=0;c<arguments.length;c++)b=fa(arguments[c])?b+Lc.apply(null,arguments[c]):"object"===typeof arguments[c]?b+B(arguments[c]):b+arguments[c],b+=" ";return b}var Ab=null,Mc=!0;function Bb(a){!0===Mc&&(Mc=!1,null===Ab&&!0===P.get("logging_enabled")&&Nc(!0));if(Ab){var b=Lc.apply(null,arguments);Ab(b)}}function Oc(a){return function(){Bb(a,arguments)}}
function Pc(a){if("undefined"!==typeof console){var b="FIREBASE INTERNAL ERROR: "+Lc.apply(null,arguments);"undefined"!==typeof console.error?console.error(b):console.log(b)}}function Qc(a){var b=Lc.apply(null,arguments);throw Error("FIREBASE FATAL ERROR: "+b);}function Q(a){if("undefined"!==typeof console){var b="FIREBASE WARNING: "+Lc.apply(null,arguments);"undefined"!==typeof console.warn?console.warn(b):console.log(b)}}
function Rc(a){var b="",c="",d="",e="",f=!0,g="https",k=443;if(p(a)){var l=a.indexOf("//");0<=l&&(g=a.substring(0,l-1),a=a.substring(l+2));l=a.indexOf("/");-1===l&&(l=a.length);b=a.substring(0,l);e="";a=a.substring(l).split("/");for(l=0;l<a.length;l++)if(0<a[l].length){var m=a[l];try{m=decodeURIComponent(m.replace(/\+/g," "))}catch(v){}e+="/"+m}a=b.split(".");3===a.length?(c=a[1],d=a[0].toLowerCase()):2===a.length&&(c=a[0]);l=b.indexOf(":");0<=l&&(f="https"===g||"wss"===g,k=b.substring(l+1),isFinite(k)&&
(k=String(k)),k=p(k)?/^\s*-?0x/i.test(k)?parseInt(k,16):parseInt(k,10):NaN)}return{host:b,port:k,domain:c,Ng:d,lb:f,scheme:g,$c:e}}function Sc(a){return ga(a)&&(a!=a||a==Number.POSITIVE_INFINITY||a==Number.NEGATIVE_INFINITY)}
function Tc(a){if("complete"===document.readyState)a();else{var b=!1,c=function(){document.body?b||(b=!0,a()):setTimeout(c,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",c,!1),window.addEventListener("load",c,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&c()}),window.attachEvent("onload",c))}}
function Sb(a,b){if(a===b)return 0;if("[MIN_NAME]"===a||"[MAX_NAME]"===b)return-1;if("[MIN_NAME]"===b||"[MAX_NAME]"===a)return 1;var c=Uc(a),d=Uc(b);return null!==c?null!==d?0==c-d?a.length-b.length:c-d:-1:null!==d?1:a<b?-1:1}function Vc(a,b){if(b&&a in b)return b[a];throw Error("Missing required key ("+a+") in object: "+B(b));}
function Wc(a){if("object"!==typeof a||null===a)return B(a);var b=[],c;for(c in a)b.push(c);b.sort();c="{";for(var d=0;d<b.length;d++)0!==d&&(c+=","),c+=B(b[d]),c+=":",c+=Wc(a[b[d]]);return c+"}"}function Xc(a,b){if(a.length<=b)return[a];for(var c=[],d=0;d<a.length;d+=b)d+b>a?c.push(a.substring(d,a.length)):c.push(a.substring(d,d+b));return c}function Yc(a,b){if(ea(a))for(var c=0;c<a.length;++c)b(c,a[c]);else r(a,b)}
function Zc(a){J(!Sc(a),"Invalid JSON number");var b,c,d,e;0===a?(d=c=0,b=-Infinity===1/a?1:0):(b=0>a,a=Math.abs(a),a>=Math.pow(2,-1022)?(d=Math.min(Math.floor(Math.log(a)/Math.LN2),1023),c=d+1023,d=Math.round(a*Math.pow(2,52-d)-Math.pow(2,52))):(c=0,d=Math.round(a/Math.pow(2,-1074))));e=[];for(a=52;a;--a)e.push(d%2?1:0),d=Math.floor(d/2);for(a=11;a;--a)e.push(c%2?1:0),c=Math.floor(c/2);e.push(b?1:0);e.reverse();b=e.join("");c="";for(a=0;64>a;a+=8)d=parseInt(b.substr(a,8),2).toString(16),1===d.length&&
(d="0"+d),c+=d;return c.toLowerCase()}var $c=/^-?\d{1,10}$/;function Uc(a){return $c.test(a)&&(a=Number(a),-2147483648<=a&&2147483647>=a)?a:null}function Cb(a){try{a()}catch(b){setTimeout(function(){Q("Exception was thrown by user callback.",b.stack||"");throw b;},Math.floor(0))}}function R(a,b){if(ha(a)){var c=Array.prototype.slice.call(arguments,1).slice();Cb(function(){a.apply(null,c)})}};function Kc(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);55296<=e&&56319>=e&&(e-=55296,d++,J(d<a.length,"Surrogate pair missing trail surrogate."),e=65536+(e<<10)+(a.charCodeAt(d)-56320));128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(65536>e?b[c++]=e>>12|224:(b[c++]=e>>18|240,b[c++]=e>>12&63|128),b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}function xc(a){for(var b=0,c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b++:2048>d?b+=2:55296<=d&&56319>=d?(b+=4,c++):b+=3}return b};function ad(a){var b={},c={},d={},e="";try{var f=a.split("."),b=mb(Ic(f[0])||""),c=mb(Ic(f[1])||""),e=f[2],d=c.d||{};delete c.d}catch(g){}return{Tg:b,Ac:c,data:d,Kg:e}}function bd(a){a=ad(a).Ac;return"object"===typeof a&&a.hasOwnProperty("iat")?w(a,"iat"):null}function cd(a){a=ad(a);var b=a.Ac;return!!a.Kg&&!!b&&"object"===typeof b&&b.hasOwnProperty("iat")};function dd(a){this.V=a;this.g=a.n.g}function ed(a,b,c,d){var e=[],f=[];Oa(b,function(b){"child_changed"===b.type&&a.g.zd(b.Je,b.Ja)&&f.push(new D("child_moved",b.Ja,b.Ya))});fd(a,e,"child_removed",b,d,c);fd(a,e,"child_added",b,d,c);fd(a,e,"child_moved",f,d,c);fd(a,e,"child_changed",b,d,c);fd(a,e,Eb,b,d,c);return e}function fd(a,b,c,d,e,f){d=Pa(d,function(a){return a.type===c});Xa(d,q(a.bg,a));Oa(d,function(c){var d=gd(a,c,f);Oa(e,function(e){e.Gf(c.type)&&b.push(e.createEvent(d,a.V))})})}
function gd(a,b,c){"value"!==b.type&&"child_removed"!==b.type&&(b.Pd=c.nf(b.Ya,b.Ja,a.g));return b}dd.prototype.bg=function(a,b){if(null==a.Ya||null==b.Ya)throw Hc("Should only compare child_ events.");return this.g.compare(new E(a.Ya,a.Ja),new E(b.Ya,b.Ja))};function hd(){this.eb={}}
function id(a,b){var c=b.type,d=b.Ya;J("child_added"==c||"child_changed"==c||"child_removed"==c,"Only child changes supported for tracking");J(".priority"!==d,"Only non-priority child changes can be tracked.");var e=w(a.eb,d);if(e){var f=e.type;if("child_added"==c&&"child_removed"==f)a.eb[d]=new D("child_changed",b.Ja,d,e.Ja);else if("child_removed"==c&&"child_added"==f)delete a.eb[d];else if("child_removed"==c&&"child_changed"==f)a.eb[d]=new D("child_removed",e.Je,d);else if("child_changed"==c&&
"child_added"==f)a.eb[d]=new D("child_added",b.Ja,d);else if("child_changed"==c&&"child_changed"==f)a.eb[d]=new D("child_changed",b.Ja,d,e.Je);else throw Hc("Illegal combination of changes: "+b+" occurred after "+e);}else a.eb[d]=b};function jd(a,b,c){this.Pb=a;this.qb=b;this.sb=c||null}h=jd.prototype;h.Gf=function(a){return"value"===a};h.createEvent=function(a,b){var c=b.n.g;return new Fb("value",this,new S(a.Ja,b.lc(),c))};h.Ub=function(a){var b=this.sb;if("cancel"===a.ze()){J(this.qb,"Raising a cancel event on a listener with no cancel callback");var c=this.qb;return function(){c.call(b,a.error)}}var d=this.Pb;return function(){d.call(b,a.Xd)}};h.df=function(a,b){return this.qb?new Gb(this,a,b):null};
h.matches=function(a){return a instanceof jd?a.Pb&&this.Pb?a.Pb===this.Pb&&a.sb===this.sb:!0:!1};h.pf=function(){return null!==this.Pb};function kd(a,b,c){this.ga=a;this.qb=b;this.sb=c}h=kd.prototype;h.Gf=function(a){a="children_added"===a?"child_added":a;return("children_removed"===a?"child_removed":a)in this.ga};h.df=function(a,b){return this.qb?new Gb(this,a,b):null};
h.createEvent=function(a,b){J(null!=a.Ya,"Child events should have a childName.");var c=b.lc().w(a.Ya);return new Fb(a.type,this,new S(a.Ja,c,b.n.g),a.Pd)};h.Ub=function(a){var b=this.sb;if("cancel"===a.ze()){J(this.qb,"Raising a cancel event on a listener with no cancel callback");var c=this.qb;return function(){c.call(b,a.error)}}var d=this.ga[a.td];return function(){d.call(b,a.Xd,a.Pd)}};
h.matches=function(a){if(a instanceof kd){if(!this.ga||!a.ga)return!0;if(this.sb===a.sb){var b=pa(a.ga);if(b===pa(this.ga)){if(1===b){var b=qa(a.ga),c=qa(this.ga);return c===b&&(!a.ga[b]||!this.ga[c]||a.ga[b]===this.ga[c])}return oa(this.ga,function(b,c){return a.ga[c]===b})}}}return!1};h.pf=function(){return null!==this.ga};function ld(a){this.g=a}h=ld.prototype;h.G=function(a,b,c,d,e){J(a.Ic(this.g),"A node must be indexed if only a child is updated");d=a.M(b);if(d.Z(c))return a;null!=e&&(c.e()?a.Ha(b)?id(e,new D("child_removed",d,b)):J(a.N(),"A child remove without an old child only makes sense on a leaf node"):d.e()?id(e,new D("child_added",c,b)):id(e,new D("child_changed",c,b,d)));return a.N()&&c.e()?a:a.Q(b,c).mb(this.g)};
h.ta=function(a,b,c){null!=c&&(a.N()||a.U(M,function(a,e){b.Ha(a)||id(c,new D("child_removed",e,a))}),b.N()||b.U(M,function(b,e){if(a.Ha(b)){var f=a.M(b);f.Z(e)||id(c,new D("child_changed",e,b,f))}else id(c,new D("child_added",e,b))}));return b.mb(this.g)};h.da=function(a,b){return a.e()?C:a.da(b)};h.Ga=function(){return!1};h.Vb=function(){return this};function md(a){this.Be=new ld(a.g);this.g=a.g;var b;a.la?(b=nd(a),b=a.g.Oc(od(a),b)):b=a.g.Sc();this.fd=b;a.na?(b=pd(a),a=a.g.Oc(qd(a),b)):a=a.g.Pc();this.Fc=a}h=md.prototype;h.matches=function(a){return 0>=this.g.compare(this.fd,a)&&0>=this.g.compare(a,this.Fc)};h.G=function(a,b,c,d,e){this.matches(new E(b,c))||(c=C);return this.Be.G(a,b,c,d,e)};h.ta=function(a,b,c){b.N()&&(b=C);var d=b.mb(this.g),d=d.da(C),e=this;b.U(M,function(a,b){e.matches(new E(a,b))||(d=d.Q(a,C))});return this.Be.ta(a,d,c)};
h.da=function(a){return a};h.Ga=function(){return!0};h.Vb=function(){return this.Be};function rd(a){this.ra=new md(a);this.g=a.g;J(a.ia,"Only valid if limit has been set");this.ja=a.ja;this.Ib=!sd(a)}h=rd.prototype;h.G=function(a,b,c,d,e){this.ra.matches(new E(b,c))||(c=C);return a.M(b).Z(c)?a:a.Cb()<this.ja?this.ra.Vb().G(a,b,c,d,e):td(this,a,b,c,d,e)};
h.ta=function(a,b,c){var d;if(b.N()||b.e())d=C.mb(this.g);else if(2*this.ja<b.Cb()&&b.Ic(this.g)){d=C.mb(this.g);b=this.Ib?b.$b(this.ra.Fc,this.g):b.Yb(this.ra.fd,this.g);for(var e=0;0<b.Pa.length&&e<this.ja;){var f=H(b),g;if(g=this.Ib?0>=this.g.compare(this.ra.fd,f):0>=this.g.compare(f,this.ra.Fc))d=d.Q(f.name,f.S),e++;else break}}else{d=b.mb(this.g);d=d.da(C);var k,l,m;if(this.Ib){b=d.of(this.g);k=this.ra.Fc;l=this.ra.fd;var v=vd(this.g);m=function(a,b){return v(b,a)}}else b=d.Xb(this.g),k=this.ra.fd,
l=this.ra.Fc,m=vd(this.g);for(var e=0,y=!1;0<b.Pa.length;)f=H(b),!y&&0>=m(k,f)&&(y=!0),(g=y&&e<this.ja&&0>=m(f,l))?e++:d=d.Q(f.name,C)}return this.ra.Vb().ta(a,d,c)};h.da=function(a){return a};h.Ga=function(){return!0};h.Vb=function(){return this.ra.Vb()};
function td(a,b,c,d,e,f){var g;if(a.Ib){var k=vd(a.g);g=function(a,b){return k(b,a)}}else g=vd(a.g);J(b.Cb()==a.ja,"");var l=new E(c,d),m=a.Ib?wd(b,a.g):xd(b,a.g),v=a.ra.matches(l);if(b.Ha(c)){var y=b.M(c),m=e.ye(a.g,m,a.Ib);null!=m&&m.name==c&&(m=e.ye(a.g,m,a.Ib));e=null==m?1:g(m,l);if(v&&!d.e()&&0<=e)return null!=f&&id(f,new D("child_changed",d,c,y)),b.Q(c,d);null!=f&&id(f,new D("child_removed",y,c));b=b.Q(c,C);return null!=m&&a.ra.matches(m)?(null!=f&&id(f,new D("child_added",m.S,m.name)),b.Q(m.name,
m.S)):b}return d.e()?b:v&&0<=g(m,l)?(null!=f&&(id(f,new D("child_removed",m.S,m.name)),id(f,new D("child_added",d,c))),b.Q(c,d).Q(m.name,C)):b};function yd(a,b){this.ie=a;this.$f=b}function zd(a){this.I=a}
zd.prototype.bb=function(a,b,c,d){var e=new hd,f;if(b.type===Vb)b.source.we?c=Ad(this,a,b.path,b.Ia,c,d,e):(J(b.source.lf,"Unknown source."),f=b.source.Ze,c=Bd(this,a,b.path,b.Ia,c,d,f,e));else if(b.type===Cd)b.source.we?c=Dd(this,a,b.path,b.children,c,d,e):(J(b.source.lf,"Unknown source."),f=b.source.Ze,c=Ed(this,a,b.path,b.children,c,d,f,e));else if(b.type===Xb)if(b.Te)if(f=b.path,null!=c.sc(f))c=a;else{b=new qb(c,a,d);d=a.D.j();if(f.e()||".priority"===O(f))Hb(a.u())?b=c.ua(tb(a)):(b=a.u().j(),
J(b instanceof T,"serverChildren would be complete if leaf node"),b=c.xc(b)),b=this.I.ta(d,b,e);else{f=O(f);var g=c.Xa(f,a.u());null==g&&rb(a.u(),f)&&(g=d.M(f));b=null!=g?this.I.G(d,f,g,b,e):a.D.j().Ha(f)?this.I.G(d,f,C,b,e):d;b.e()&&Hb(a.u())&&(d=c.ua(tb(a)),d.N()&&(b=this.I.ta(b,d,e)))}d=Hb(a.u())||null!=c.sc(F);c=Fd(a,b,d,this.I.Ga())}else c=Gd(this,a,b.path,c,d,e);else if(b.type===$b)d=b.path,b=a.u(),f=b.j(),g=b.$||d.e(),c=Hd(this,new Id(a.D,new sb(f,g,b.Tb)),d,c,pb,e);else throw Hc("Unknown operation type: "+
b.type);e=ra(e.eb);d=c;b=d.D;b.$&&(f=b.j().N()||b.j().e(),g=Jd(a),(0<e.length||!a.D.$||f&&!b.j().Z(g)||!b.j().A().Z(g.A()))&&e.push(Db(Jd(d))));return new yd(c,e)};
function Hd(a,b,c,d,e,f){var g=b.D;if(null!=d.sc(c))return b;var k;if(c.e())J(Hb(b.u()),"If change path is empty, we must have complete server data"),b.u().Tb?(e=tb(b),d=d.xc(e instanceof T?e:C)):d=d.ua(tb(b)),f=a.I.ta(b.D.j(),d,f);else{var l=O(c);if(".priority"==l)J(1==uc(c),"Can't have a priority with additional path components"),f=g.j(),k=b.u().j(),d=d.kd(c,f,k),f=null!=d?a.I.da(f,d):g.j();else{var m=G(c);rb(g,l)?(k=b.u().j(),d=d.kd(c,g.j(),k),d=null!=d?g.j().M(l).G(m,d):g.j().M(l)):d=d.Xa(l,b.u());
f=null!=d?a.I.G(g.j(),l,d,e,f):g.j()}}return Fd(b,f,g.$||c.e(),a.I.Ga())}function Bd(a,b,c,d,e,f,g,k){var l=b.u();g=g?a.I:a.I.Vb();if(c.e())d=g.ta(l.j(),d,null);else if(g.Ga()&&!l.Tb)d=l.j().G(c,d),d=g.ta(l.j(),d,null);else{var m=O(c);if((c.e()?!l.$||l.Tb:!rb(l,O(c)))&&1<uc(c))return b;d=l.j().M(m).G(G(c),d);d=".priority"==m?g.da(l.j(),d):g.G(l.j(),m,d,pb,null)}l=l.$||c.e();b=new Id(b.D,new sb(d,l,g.Ga()));return Hd(a,b,c,e,new qb(e,b,f),k)}
function Ad(a,b,c,d,e,f,g){var k=b.D;e=new qb(e,b,f);if(c.e())g=a.I.ta(b.D.j(),d,g),a=Fd(b,g,!0,a.I.Ga());else if(f=O(c),".priority"===f)g=a.I.da(b.D.j(),d),a=Fd(b,g,k.$,k.Tb);else{var l=G(c);c=k.j().M(f);if(!l.e()){var m=e.mf(f);d=null!=m?".priority"===vc(l)&&m.oa(l.parent()).e()?m:m.G(l,d):C}c.Z(d)?a=b:(g=a.I.G(k.j(),f,d,e,g),a=Fd(b,g,k.$,a.I.Ga()))}return a}
function Dd(a,b,c,d,e,f,g){var k=b;Kd(d,function(d,m){var v=c.w(d);rb(b.D,O(v))&&(k=Ad(a,k,v,m,e,f,g))});Kd(d,function(d,m){var v=c.w(d);rb(b.D,O(v))||(k=Ad(a,k,v,m,e,f,g))});return k}function Ld(a,b){Kd(b,function(b,d){a=a.G(b,d)});return a}
function Ed(a,b,c,d,e,f,g,k){if(b.u().j().e()&&!Hb(b.u()))return b;var l=b;c=c.e()?d:Md(Nd,c,d);var m=b.u().j();c.children.ha(function(c,d){if(m.Ha(c)){var I=b.u().j().M(c),I=Ld(I,d);l=Bd(a,l,new K(c),I,e,f,g,k)}});c.children.ha(function(c,d){var I=!Hb(b.u())&&null==d.value;m.Ha(c)||I||(I=b.u().j().M(c),I=Ld(I,d),l=Bd(a,l,new K(c),I,e,f,g,k))});return l}
function Gd(a,b,c,d,e,f){if(null!=d.sc(c))return b;var g=new qb(d,b,e),k=e=b.D.j();if(Hb(b.u())){if(c.e())e=d.ua(tb(b)),k=a.I.ta(b.D.j(),e,f);else if(".priority"===O(c)){var l=d.Xa(O(c),b.u());null==l||e.e()||e.A().Z(l)||(k=a.I.da(e,l))}else l=O(c),e=d.Xa(l,b.u()),null!=e&&(k=a.I.G(b.D.j(),l,e,g,f));e=!0}else if(b.D.$||c.e())k=e,e=b.D.j(),e.N()||e.U(M,function(c){var e=d.Xa(c,b.u());null!=e&&(k=a.I.G(k,c,e,g,f))}),e=b.D.$;else{l=O(c);if(1==uc(c)||rb(b.D,l))c=d.Xa(l,b.u()),null!=c&&(k=a.I.G(e,l,c,
g,f));e=!1}return Fd(b,k,e,a.I.Ga())};function Od(){}var Pd={};function vd(a){return q(a.compare,a)}Od.prototype.zd=function(a,b){return 0!==this.compare(new E("[MIN_NAME]",a),new E("[MIN_NAME]",b))};Od.prototype.Sc=function(){return Qd};function Rd(a){this.cc=a}ma(Rd,Od);h=Rd.prototype;h.Hc=function(a){return!a.M(this.cc).e()};h.compare=function(a,b){var c=a.S.M(this.cc),d=b.S.M(this.cc),c=c.Cc(d);return 0===c?Sb(a.name,b.name):c};h.Oc=function(a,b){var c=L(a),c=C.Q(this.cc,c);return new E(b,c)};
h.Pc=function(){var a=C.Q(this.cc,Sd);return new E("[MAX_NAME]",a)};h.toString=function(){return this.cc};function Td(){}ma(Td,Od);h=Td.prototype;h.compare=function(a,b){var c=a.S.A(),d=b.S.A(),c=c.Cc(d);return 0===c?Sb(a.name,b.name):c};h.Hc=function(a){return!a.A().e()};h.zd=function(a,b){return!a.A().Z(b.A())};h.Sc=function(){return Qd};h.Pc=function(){return new E("[MAX_NAME]",new tc("[PRIORITY-POST]",Sd))};h.Oc=function(a,b){var c=L(a);return new E(b,new tc("[PRIORITY-POST]",c))};
h.toString=function(){return".priority"};var M=new Td;function Ud(){}ma(Ud,Od);h=Ud.prototype;h.compare=function(a,b){return Sb(a.name,b.name)};h.Hc=function(){throw Hc("KeyIndex.isDefinedOn not expected to be called.");};h.zd=function(){return!1};h.Sc=function(){return Qd};h.Pc=function(){return new E("[MAX_NAME]",C)};h.Oc=function(a){J(p(a),"KeyIndex indexValue must always be a string.");return new E(a,C)};h.toString=function(){return".key"};var Vd=new Ud;function Wd(){}ma(Wd,Od);h=Wd.prototype;
h.compare=function(a,b){var c=a.S.Cc(b.S);return 0===c?Sb(a.name,b.name):c};h.Hc=function(){return!0};h.zd=function(a,b){return!a.Z(b)};h.Sc=function(){return Qd};h.Pc=function(){return Xd};h.Oc=function(a,b){var c=L(a);return new E(b,c)};h.toString=function(){return".value"};var Yd=new Wd;function Zd(){this.Rb=this.na=this.Lb=this.la=this.ia=!1;this.ja=0;this.Nb="";this.ec=null;this.wb="";this.bc=null;this.ub="";this.g=M}var $d=new Zd;function sd(a){return""===a.Nb?a.la:"l"===a.Nb}function od(a){J(a.la,"Only valid if start has been set");return a.ec}function nd(a){J(a.la,"Only valid if start has been set");return a.Lb?a.wb:"[MIN_NAME]"}function qd(a){J(a.na,"Only valid if end has been set");return a.bc}
function pd(a){J(a.na,"Only valid if end has been set");return a.Rb?a.ub:"[MAX_NAME]"}function ae(a){var b=new Zd;b.ia=a.ia;b.ja=a.ja;b.la=a.la;b.ec=a.ec;b.Lb=a.Lb;b.wb=a.wb;b.na=a.na;b.bc=a.bc;b.Rb=a.Rb;b.ub=a.ub;b.g=a.g;return b}h=Zd.prototype;h.Ge=function(a){var b=ae(this);b.ia=!0;b.ja=a;b.Nb="";return b};h.He=function(a){var b=ae(this);b.ia=!0;b.ja=a;b.Nb="l";return b};h.Ie=function(a){var b=ae(this);b.ia=!0;b.ja=a;b.Nb="r";return b};
h.Yd=function(a,b){var c=ae(this);c.la=!0;n(a)||(a=null);c.ec=a;null!=b?(c.Lb=!0,c.wb=b):(c.Lb=!1,c.wb="");return c};h.sd=function(a,b){var c=ae(this);c.na=!0;n(a)||(a=null);c.bc=a;n(b)?(c.Rb=!0,c.ub=b):(c.Vg=!1,c.ub="");return c};function be(a,b){var c=ae(a);c.g=b;return c}function ce(a){var b={};a.la&&(b.sp=a.ec,a.Lb&&(b.sn=a.wb));a.na&&(b.ep=a.bc,a.Rb&&(b.en=a.ub));if(a.ia){b.l=a.ja;var c=a.Nb;""===c&&(c=sd(a)?"l":"r");b.vf=c}a.g!==M&&(b.i=a.g.toString());return b}
function de(a){return!(a.la||a.na||a.ia)}function ee(a){var b={};if(de(a)&&a.g==M)return b;var c;a.g===M?c="$priority":a.g===Yd?c="$value":(J(a.g instanceof Rd,"Unrecognized index type!"),c=a.g.toString());b.orderBy=B(c);a.la&&(b.startAt=B(a.ec),a.Lb&&(b.startAt+=","+B(a.wb)));a.na&&(b.endAt=B(a.bc),a.Rb&&(b.endAt+=","+B(a.ub)));a.ia&&(sd(a)?b.limitToFirst=a.ja:b.limitToLast=a.ja);return b}h.toString=function(){return B(ce(this))};function fe(a,b){this.Ad=a;this.dc=b}fe.prototype.get=function(a){var b=w(this.Ad,a);if(!b)throw Error("No index defined for "+a);return b===Pd?null:b};function ge(a,b,c){var d=na(a.Ad,function(d,f){var g=w(a.dc,f);J(g,"Missing index implementation for "+f);if(d===Pd){if(g.Hc(b.S)){for(var k=[],l=c.Xb(Qb),m=H(l);m;)m.name!=b.name&&k.push(m),m=H(l);k.push(b);return he(k,vd(g))}return Pd}g=c.get(b.name);k=d;g&&(k=k.remove(new E(b.name,g)));return k.Na(b,b.S)});return new fe(d,a.dc)}
function ie(a,b,c){var d=na(a.Ad,function(a){if(a===Pd)return a;var d=c.get(b.name);return d?a.remove(new E(b.name,d)):a});return new fe(d,a.dc)}var je=new fe({".priority":Pd},{".priority":M});function tc(a,b){this.C=a;J(n(this.C)&&null!==this.C,"LeafNode shouldn't be created with null/undefined value.");this.ba=b||C;ke(this.ba);this.Ab=null}h=tc.prototype;h.N=function(){return!0};h.A=function(){return this.ba};h.da=function(a){return new tc(this.C,a)};h.M=function(a){return".priority"===a?this.ba:C};h.oa=function(a){return a.e()?this:".priority"===O(a)?this.ba:C};h.Ha=function(){return!1};h.nf=function(){return null};
h.Q=function(a,b){return".priority"===a?this.da(b):b.e()&&".priority"!==a?this:C.Q(a,b).da(this.ba)};h.G=function(a,b){var c=O(a);if(null===c)return b;if(b.e()&&".priority"!==c)return this;J(".priority"!==c||1===uc(a),".priority must be the last token in a path");return this.Q(c,C.G(G(a),b))};h.e=function(){return!1};h.Cb=function(){return 0};h.K=function(a){return a&&!this.A().e()?{".value":this.Ba(),".priority":this.A().K()}:this.Ba()};
h.hash=function(){if(null===this.Ab){var a="";this.ba.e()||(a+="priority:"+le(this.ba.K())+":");var b=typeof this.C,a=a+(b+":"),a="number"===b?a+Zc(this.C):a+this.C;this.Ab=Jc(a)}return this.Ab};h.Ba=function(){return this.C};h.Cc=function(a){if(a===C)return 1;if(a instanceof T)return-1;J(a.N(),"Unknown node type");var b=typeof a.C,c=typeof this.C,d=Na(me,b),e=Na(me,c);J(0<=d,"Unknown leaf type: "+b);J(0<=e,"Unknown leaf type: "+c);return d===e?"object"===c?0:this.C<a.C?-1:this.C===a.C?0:1:e-d};
var me=["object","boolean","number","string"];tc.prototype.mb=function(){return this};tc.prototype.Ic=function(){return!0};tc.prototype.Z=function(a){return a===this?!0:a.N()?this.C===a.C&&this.ba.Z(a.ba):!1};tc.prototype.toString=function(){return B(this.K(!0))};function T(a,b,c){this.m=a;(this.ba=b)&&ke(this.ba);a.e()&&J(!this.ba||this.ba.e(),"An empty node cannot have a priority");this.vb=c;this.Ab=null}h=T.prototype;h.N=function(){return!1};h.A=function(){return this.ba||C};h.da=function(a){return this.m.e()?this:new T(this.m,a,this.vb)};h.M=function(a){if(".priority"===a)return this.A();a=this.m.get(a);return null===a?C:a};h.oa=function(a){var b=O(a);return null===b?this:this.M(b).oa(G(a))};h.Ha=function(a){return null!==this.m.get(a)};
h.Q=function(a,b){J(b,"We should always be passing snapshot nodes");if(".priority"===a)return this.da(b);var c=new E(a,b),d,e;b.e()?(d=this.m.remove(a),c=ie(this.vb,c,this.m)):(d=this.m.Na(a,b),c=ge(this.vb,c,this.m));e=d.e()?C:this.ba;return new T(d,e,c)};h.G=function(a,b){var c=O(a);if(null===c)return b;J(".priority"!==O(a)||1===uc(a),".priority must be the last token in a path");var d=this.M(c).G(G(a),b);return this.Q(c,d)};h.e=function(){return this.m.e()};h.Cb=function(){return this.m.count()};
var ne=/^(0|[1-9]\d*)$/;h=T.prototype;h.K=function(a){if(this.e())return null;var b={},c=0,d=0,e=!0;this.U(M,function(f,g){b[f]=g.K(a);c++;e&&ne.test(f)?d=Math.max(d,Number(f)):e=!1});if(!a&&e&&d<2*c){var f=[],g;for(g in b)f[g]=b[g];return f}a&&!this.A().e()&&(b[".priority"]=this.A().K());return b};h.hash=function(){if(null===this.Ab){var a="";this.A().e()||(a+="priority:"+le(this.A().K())+":");this.U(M,function(b,c){var d=c.hash();""!==d&&(a+=":"+b+":"+d)});this.Ab=""===a?"":Jc(a)}return this.Ab};
h.nf=function(a,b,c){return(c=oe(this,c))?(a=cc(c,new E(a,b)))?a.name:null:cc(this.m,a)};function wd(a,b){var c;c=(c=oe(a,b))?(c=c.Rc())&&c.name:a.m.Rc();return c?new E(c,a.m.get(c)):null}function xd(a,b){var c;c=(c=oe(a,b))?(c=c.fc())&&c.name:a.m.fc();return c?new E(c,a.m.get(c)):null}h.U=function(a,b){var c=oe(this,a);return c?c.ha(function(a){return b(a.name,a.S)}):this.m.ha(b)};h.Xb=function(a){return this.Yb(a.Sc(),a)};
h.Yb=function(a,b){var c=oe(this,b);if(c)return c.Yb(a,function(a){return a});for(var c=this.m.Yb(a.name,Qb),d=ec(c);null!=d&&0>b.compare(d,a);)H(c),d=ec(c);return c};h.of=function(a){return this.$b(a.Pc(),a)};h.$b=function(a,b){var c=oe(this,b);if(c)return c.$b(a,function(a){return a});for(var c=this.m.$b(a.name,Qb),d=ec(c);null!=d&&0<b.compare(d,a);)H(c),d=ec(c);return c};h.Cc=function(a){return this.e()?a.e()?0:-1:a.N()||a.e()?1:a===Sd?-1:0};
h.mb=function(a){if(a===Vd||ta(this.vb.dc,a.toString()))return this;var b=this.vb,c=this.m;J(a!==Vd,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var d=[],e=!1,c=c.Xb(Qb),f=H(c);f;)e=e||a.Hc(f.S),d.push(f),f=H(c);d=e?he(d,vd(a)):Pd;e=a.toString();c=xa(b.dc);c[e]=a;a=xa(b.Ad);a[e]=d;return new T(this.m,this.ba,new fe(a,c))};h.Ic=function(a){return a===Vd||ta(this.vb.dc,a.toString())};
h.Z=function(a){if(a===this)return!0;if(a.N())return!1;if(this.A().Z(a.A())&&this.m.count()===a.m.count()){var b=this.Xb(M);a=a.Xb(M);for(var c=H(b),d=H(a);c&&d;){if(c.name!==d.name||!c.S.Z(d.S))return!1;c=H(b);d=H(a)}return null===c&&null===d}return!1};function oe(a,b){return b===Vd?null:a.vb.get(b.toString())}h.toString=function(){return B(this.K(!0))};function L(a,b){if(null===a)return C;var c=null;"object"===typeof a&&".priority"in a?c=a[".priority"]:"undefined"!==typeof b&&(c=b);J(null===c||"string"===typeof c||"number"===typeof c||"object"===typeof c&&".sv"in c,"Invalid priority type found: "+typeof c);"object"===typeof a&&".value"in a&&null!==a[".value"]&&(a=a[".value"]);if("object"!==typeof a||".sv"in a)return new tc(a,L(c));if(a instanceof Array){var d=C,e=a;r(e,function(a,b){if(u(e,b)&&"."!==b.substring(0,1)){var c=L(a);if(c.N()||!c.e())d=
d.Q(b,c)}});return d.da(L(c))}var f=[],g=!1,k=a;hb(k,function(a){if("string"!==typeof a||"."!==a.substring(0,1)){var b=L(k[a]);b.e()||(g=g||!b.A().e(),f.push(new E(a,b)))}});if(0==f.length)return C;var l=he(f,Rb,function(a){return a.name},Tb);if(g){var m=he(f,vd(M));return new T(l,L(c),new fe({".priority":m},{".priority":M}))}return new T(l,L(c),je)}var pe=Math.log(2);
function qe(a){this.count=parseInt(Math.log(a+1)/pe,10);this.ff=this.count-1;this.Zf=a+1&parseInt(Array(this.count+1).join("1"),2)}function re(a){var b=!(a.Zf&1<<a.ff);a.ff--;return b}
function he(a,b,c,d){function e(b,d){var f=d-b;if(0==f)return null;if(1==f){var m=a[b],v=c?c(m):m;return new fc(v,m.S,!1,null,null)}var m=parseInt(f/2,10)+b,f=e(b,m),y=e(m+1,d),m=a[m],v=c?c(m):m;return new fc(v,m.S,!1,f,y)}a.sort(b);var f=function(b){function d(b,g){var k=v-b,y=v;v-=b;var y=e(k+1,y),k=a[k],I=c?c(k):k,y=new fc(I,k.S,g,null,y);f?f.left=y:m=y;f=y}for(var f=null,m=null,v=a.length,y=0;y<b.count;++y){var I=re(b),ud=Math.pow(2,b.count-(y+1));I?d(ud,!1):(d(ud,!1),d(ud,!0))}return m}(new qe(a.length));
return null!==f?new ac(d||b,f):new ac(d||b)}function le(a){return"number"===typeof a?"number:"+Zc(a):"string:"+a}function ke(a){if(a.N()){var b=a.K();J("string"===typeof b||"number"===typeof b||"object"===typeof b&&u(b,".sv"),"Priority must be a string or number.")}else J(a===Sd||a.e(),"priority of unexpected type.");J(a===Sd||a.A().e(),"Priority nodes can't have a priority of their own.")}var C=new T(new ac(Tb),null,je);function se(){T.call(this,new ac(Tb),C,je)}ma(se,T);h=se.prototype;
h.Cc=function(a){return a===this?0:1};h.Z=function(a){return a===this};h.A=function(){return this};h.M=function(){return C};h.e=function(){return!1};var Sd=new se,Qd=new E("[MIN_NAME]",C),Xd=new E("[MAX_NAME]",Sd);function Id(a,b){this.D=a;this.Vd=b}function Fd(a,b,c,d){return new Id(new sb(b,c,d),a.Vd)}function Jd(a){return a.D.$?a.D.j():null}Id.prototype.u=function(){return this.Vd};function tb(a){return a.Vd.$?a.Vd.j():null};function te(a,b){this.V=a;var c=a.n,d=new ld(c.g),c=de(c)?new ld(c.g):c.ia?new rd(c):new md(c);this.Cf=new zd(c);var e=b.u(),f=b.D,g=d.ta(C,e.j(),null),k=c.ta(C,f.j(),null);this.Ka=new Id(new sb(k,f.$,c.Ga()),new sb(g,e.$,d.Ga()));this.Za=[];this.fg=new dd(a)}function ue(a){return a.V}h=te.prototype;h.u=function(){return this.Ka.u().j()};h.hb=function(a){var b=tb(this.Ka);return b&&(de(this.V.n)||!a.e()&&!b.M(O(a)).e())?b.oa(a):null};h.e=function(){return 0===this.Za.length};h.Ob=function(a){this.Za.push(a)};
h.kb=function(a,b){var c=[];if(b){J(null==a,"A cancel should cancel all event registrations.");var d=this.V.path;Oa(this.Za,function(a){(a=a.df(b,d))&&c.push(a)})}if(a){for(var e=[],f=0;f<this.Za.length;++f){var g=this.Za[f];if(!g.matches(a))e.push(g);else if(a.pf()){e=e.concat(this.Za.slice(f+1));break}}this.Za=e}else this.Za=[];return c};
h.bb=function(a,b,c){a.type===Cd&&null!==a.source.Hb&&(J(tb(this.Ka),"We should always have a full cache before handling merges"),J(Jd(this.Ka),"Missing event cache, even though we have a server cache"));var d=this.Ka;a=this.Cf.bb(d,a,b,c);b=this.Cf;c=a.ie;J(c.D.j().Ic(b.I.g),"Event snap not indexed");J(c.u().j().Ic(b.I.g),"Server snap not indexed");J(Hb(a.ie.u())||!Hb(d.u()),"Once a server snap is complete, it should never go back");this.Ka=a.ie;return ve(this,a.$f,a.ie.D.j(),null)};
function we(a,b){var c=a.Ka.D,d=[];c.j().N()||c.j().U(M,function(a,b){d.push(new D("child_added",b,a))});c.$&&d.push(Db(c.j()));return ve(a,d,c.j(),b)}function ve(a,b,c,d){return ed(a.fg,b,c,d?[d]:a.Za)};function xe(a,b,c){this.type=Cd;this.source=a;this.path=b;this.children=c}xe.prototype.Xc=function(a){if(this.path.e())return a=this.children.subtree(new K(a)),a.e()?null:a.value?new Ub(this.source,F,a.value):new xe(this.source,F,a);J(O(this.path)===a,"Can't get a merge for a child not on the path of the operation");return new xe(this.source,G(this.path),this.children)};xe.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"};var Vb=0,Cd=1,Xb=2,$b=3;function ye(a,b,c,d){this.we=a;this.lf=b;this.Hb=c;this.Ze=d;J(!d||b,"Tagged queries must be from server.")}var Yb=new ye(!0,!1,null,!1),ze=new ye(!1,!0,null,!1);ye.prototype.toString=function(){return this.we?"user":this.Ze?"server(queryID="+this.Hb+")":"server"};function Ae(a,b){this.f=Oc("p:rest:");this.H=a;this.Fb=b;this.Fa=null;this.aa={}}function Be(a,b){if(n(b))return"tag$"+b;var c=a.n;J(de(c)&&c.g==M,"should have a tag if it's not a default query.");return a.path.toString()}h=Ae.prototype;
h.sf=function(a,b,c,d){var e=a.path.toString();this.f("Listen called for "+e+" "+a.wa());var f=Be(a,c),g={};this.aa[f]=g;a=ee(a.n);var k=this;Ce(this,e+".json",a,function(a,b){var v=b;404===a&&(a=v=null);null===a&&k.Fb(e,v,!1,c);w(k.aa,f)===g&&d(a?401==a?"permission_denied":"rest_error:"+a:"ok",null)})};h.Lf=function(a,b){var c=Be(a,b);delete this.aa[c]};h.P=function(a,b){this.Fa=a;var c=ad(a),d=c.data,c=c.Ac&&c.Ac.exp;b&&b("ok",{auth:d,expires:c})};h.fe=function(a){this.Fa=null;a("ok",null)};
h.Le=function(){};h.xf=function(){};h.Id=function(){};h.put=function(){};h.tf=function(){};h.Df=function(){};
function Ce(a,b,c,d){c=c||{};c.format="export";a.Fa&&(c.auth=a.Fa);var e=(a.H.lb?"https://":"http://")+a.H.host+b+"?"+jb(c);a.f("Sending REST request for "+e);var f=new XMLHttpRequest;f.onreadystatechange=function(){if(d&&4===f.readyState){a.f("REST Response for "+e+" received. status:",f.status,"response:",f.responseText);var b=null;if(200<=f.status&&300>f.status){try{b=mb(f.responseText)}catch(c){Q("Failed to parse JSON response for "+e+": "+f.responseText)}d(null,b)}else 401!==f.status&&404!==
f.status&&Q("Got unsuccessful REST response for "+e+" Status: "+f.status),d(f.status);d=null}};f.open("GET",e,!0);f.send()};function De(a,b){this.value=a;this.children=b||Ee}var Ee=new ac(function(a,b){return a===b?0:a<b?-1:1});function Fe(a){var b=Nd;r(a,function(a,d){b=b.set(new K(d),a)});return b}h=De.prototype;h.e=function(){return null===this.value&&this.children.e()};function Ge(a,b,c){if(null!=a.value&&c(a.value))return{path:F,value:a.value};if(b.e())return null;var d=O(b);a=a.children.get(d);return null!==a?(b=Ge(a,G(b),c),null!=b?{path:(new K(d)).w(b.path),value:b.value}:null):null}
function He(a,b){return Ge(a,b,function(){return!0})}h.subtree=function(a){if(a.e())return this;var b=this.children.get(O(a));return null!==b?b.subtree(G(a)):Nd};h.set=function(a,b){if(a.e())return new De(b,this.children);var c=O(a),d=(this.children.get(c)||Nd).set(G(a),b),c=this.children.Na(c,d);return new De(this.value,c)};
h.remove=function(a){if(a.e())return this.children.e()?Nd:new De(null,this.children);var b=O(a),c=this.children.get(b);return c?(a=c.remove(G(a)),b=a.e()?this.children.remove(b):this.children.Na(b,a),null===this.value&&b.e()?Nd:new De(this.value,b)):this};h.get=function(a){if(a.e())return this.value;var b=this.children.get(O(a));return b?b.get(G(a)):null};
function Md(a,b,c){if(b.e())return c;var d=O(b);b=Md(a.children.get(d)||Nd,G(b),c);d=b.e()?a.children.remove(d):a.children.Na(d,b);return new De(a.value,d)}function Ie(a,b){return Je(a,F,b)}function Je(a,b,c){var d={};a.children.ha(function(a,f){d[a]=Je(f,b.w(a),c)});return c(b,a.value,d)}function Ke(a,b,c){return Le(a,b,F,c)}function Le(a,b,c,d){var e=a.value?d(c,a.value):!1;if(e)return e;if(b.e())return null;e=O(b);return(a=a.children.get(e))?Le(a,G(b),c.w(e),d):null}
function Me(a,b,c){var d=F;if(!b.e()){var e=!0;a.value&&(e=c(d,a.value));!0===e&&(e=O(b),(a=a.children.get(e))&&Ne(a,G(b),d.w(e),c))}}function Ne(a,b,c,d){if(b.e())return a;a.value&&d(c,a.value);var e=O(b);return(a=a.children.get(e))?Ne(a,G(b),c.w(e),d):Nd}function Kd(a,b){Oe(a,F,b)}function Oe(a,b,c){a.children.ha(function(a,e){Oe(e,b.w(a),c)});a.value&&c(b,a.value)}function Pe(a,b){a.children.ha(function(a,d){d.value&&b(a,d.value)})}var Nd=new De(null);
De.prototype.toString=function(){var a={};Kd(this,function(b,c){a[b.toString()]=c.toString()});return B(a)};function Qe(a){this.W=a}var Re=new Qe(new De(null));function Se(a,b,c){if(b.e())return new Qe(new De(c));var d=He(a.W,b);if(null!=d){var e=d.path,d=d.value;b=N(e,b);d=d.G(b,c);return new Qe(a.W.set(e,d))}a=Md(a.W,b,new De(c));return new Qe(a)}function Te(a,b,c){var d=a;hb(c,function(a,c){d=Se(d,b.w(a),c)});return d}Qe.prototype.Qd=function(a){if(a.e())return Re;a=Md(this.W,a,Nd);return new Qe(a)};function Ue(a,b){var c=He(a.W,b);return null!=c?a.W.get(c.path).oa(N(c.path,b)):null}
function Ve(a){var b=[],c=a.W.value;null!=c?c.N()||c.U(M,function(a,c){b.push(new E(a,c))}):a.W.children.ha(function(a,c){null!=c.value&&b.push(new E(a,c.value))});return b}function We(a,b){if(b.e())return a;var c=Ue(a,b);return null!=c?new Qe(new De(c)):new Qe(a.W.subtree(b))}Qe.prototype.e=function(){return this.W.e()};Qe.prototype.apply=function(a){return Xe(F,this.W,a)};
function Xe(a,b,c){if(null!=b.value)return c.G(a,b.value);var d=null;b.children.ha(function(b,f){".priority"===b?(J(null!==f.value,"Priority writes must always be leaf nodes"),d=f.value):c=Xe(a.w(b),f,c)});c.oa(a).e()||null===d||(c=c.G(a.w(".priority"),d));return c};function Ye(){this.T=Re;this.za=[];this.Lc=-1}h=Ye.prototype;
h.Qd=function(a){var b=Ua(this.za,function(b){return b.je===a});J(0<=b,"removeWrite called with nonexistent writeId.");var c=this.za[b];this.za.splice(b,1);for(var d=c.visible,e=!1,f=this.za.length-1;d&&0<=f;){var g=this.za[f];g.visible&&(f>=b&&Ze(g,c.path)?d=!1:c.path.contains(g.path)&&(e=!0));f--}if(d){if(e)this.T=$e(this.za,af,F),this.Lc=0<this.za.length?this.za[this.za.length-1].je:-1;else if(c.Ia)this.T=this.T.Qd(c.path);else{var k=this;r(c.children,function(a,b){k.T=k.T.Qd(c.path.w(b))})}return c.path}return null};
h.ua=function(a,b,c,d){if(c||d){var e=We(this.T,a);return!d&&e.e()?b:d||null!=b||null!=Ue(e,F)?(e=$e(this.za,function(b){return(b.visible||d)&&(!c||!(0<=Na(c,b.je)))&&(b.path.contains(a)||a.contains(b.path))},a),b=b||C,e.apply(b)):null}e=Ue(this.T,a);if(null!=e)return e;e=We(this.T,a);return e.e()?b:null!=b||null!=Ue(e,F)?(b=b||C,e.apply(b)):null};
h.xc=function(a,b){var c=C,d=Ue(this.T,a);if(d)d.N()||d.U(M,function(a,b){c=c.Q(a,b)});else if(b){var e=We(this.T,a);b.U(M,function(a,b){var d=We(e,new K(a)).apply(b);c=c.Q(a,d)});Oa(Ve(e),function(a){c=c.Q(a.name,a.S)})}else e=We(this.T,a),Oa(Ve(e),function(a){c=c.Q(a.name,a.S)});return c};h.kd=function(a,b,c,d){J(c||d,"Either existingEventSnap or existingServerSnap must exist");a=a.w(b);if(null!=Ue(this.T,a))return null;a=We(this.T,a);return a.e()?d.oa(b):a.apply(d.oa(b))};
h.Xa=function(a,b,c){a=a.w(b);var d=Ue(this.T,a);return null!=d?d:rb(c,b)?We(this.T,a).apply(c.j().M(b)):null};h.sc=function(a){return Ue(this.T,a)};h.ne=function(a,b,c,d,e,f){var g;a=We(this.T,a);g=Ue(a,F);if(null==g)if(null!=b)g=a.apply(b);else return[];g=g.mb(f);if(g.e()||g.N())return[];b=[];a=vd(f);e=e?g.$b(c,f):g.Yb(c,f);for(f=H(e);f&&b.length<d;)0!==a(f,c)&&b.push(f),f=H(e);return b};
function Ze(a,b){return a.Ia?a.path.contains(b):!!ua(a.children,function(c,d){return a.path.w(d).contains(b)})}function af(a){return a.visible}
function $e(a,b,c){for(var d=Re,e=0;e<a.length;++e){var f=a[e];if(b(f)){var g=f.path;if(f.Ia)c.contains(g)?(g=N(c,g),d=Se(d,g,f.Ia)):g.contains(c)&&(g=N(g,c),d=Se(d,F,f.Ia.oa(g)));else if(f.children)if(c.contains(g))g=N(c,g),d=Te(d,g,f.children);else{if(g.contains(c))if(g=N(g,c),g.e())d=Te(d,F,f.children);else if(f=w(f.children,O(g)))f=f.oa(G(g)),d=Se(d,F,f)}else throw Hc("WriteRecord should have .snap or .children");}}return d}function bf(a,b){this.Mb=a;this.W=b}h=bf.prototype;
h.ua=function(a,b,c){return this.W.ua(this.Mb,a,b,c)};h.xc=function(a){return this.W.xc(this.Mb,a)};h.kd=function(a,b,c){return this.W.kd(this.Mb,a,b,c)};h.sc=function(a){return this.W.sc(this.Mb.w(a))};h.ne=function(a,b,c,d,e){return this.W.ne(this.Mb,a,b,c,d,e)};h.Xa=function(a,b){return this.W.Xa(this.Mb,a,b)};h.w=function(a){return new bf(this.Mb.w(a),this.W)};function cf(){this.ya={}}h=cf.prototype;h.e=function(){return wa(this.ya)};h.bb=function(a,b,c){var d=a.source.Hb;if(null!==d)return d=w(this.ya,d),J(null!=d,"SyncTree gave us an op for an invalid query."),d.bb(a,b,c);var e=[];r(this.ya,function(d){e=e.concat(d.bb(a,b,c))});return e};h.Ob=function(a,b,c,d,e){var f=a.wa(),g=w(this.ya,f);if(!g){var g=c.ua(e?d:null),k=!1;g?k=!0:(g=d instanceof T?c.xc(d):C,k=!1);g=new te(a,new Id(new sb(g,k,!1),new sb(d,e,!1)));this.ya[f]=g}g.Ob(b);return we(g,b)};
h.kb=function(a,b,c){var d=a.wa(),e=[],f=[],g=null!=df(this);if("default"===d){var k=this;r(this.ya,function(a,d){f=f.concat(a.kb(b,c));a.e()&&(delete k.ya[d],de(a.V.n)||e.push(a.V))})}else{var l=w(this.ya,d);l&&(f=f.concat(l.kb(b,c)),l.e()&&(delete this.ya[d],de(l.V.n)||e.push(l.V)))}g&&null==df(this)&&e.push(new U(a.k,a.path));return{Eg:e,gg:f}};function ef(a){return Pa(ra(a.ya),function(a){return!de(a.V.n)})}h.hb=function(a){var b=null;r(this.ya,function(c){b=b||c.hb(a)});return b};
function ff(a,b){if(de(b.n))return df(a);var c=b.wa();return w(a.ya,c)}function df(a){return va(a.ya,function(a){return de(a.V.n)})||null};function gf(a){this.sa=Nd;this.Gb=new Ye;this.Ye={};this.kc={};this.Mc=a}function hf(a,b,c,d,e){var f=a.Gb,g=e;J(d>f.Lc,"Stacking an older write on top of newer ones");n(g)||(g=!0);f.za.push({path:b,Ia:c,je:d,visible:g});g&&(f.T=Se(f.T,b,c));f.Lc=d;return e?jf(a,new Ub(Yb,b,c)):[]}function kf(a,b,c,d){var e=a.Gb;J(d>e.Lc,"Stacking an older merge on top of newer ones");e.za.push({path:b,children:c,je:d,visible:!0});e.T=Te(e.T,b,c);e.Lc=d;c=Fe(c);return jf(a,new xe(Yb,b,c))}
function lf(a,b,c){c=c||!1;b=a.Gb.Qd(b);return null==b?[]:jf(a,new Wb(b,c))}function mf(a,b,c){c=Fe(c);return jf(a,new xe(ze,b,c))}function nf(a,b,c,d){d=of(a,d);if(null!=d){var e=pf(d);d=e.path;e=e.Hb;b=N(d,b);c=new Ub(new ye(!1,!0,e,!0),b,c);return qf(a,d,c)}return[]}function rf(a,b,c,d){if(d=of(a,d)){var e=pf(d);d=e.path;e=e.Hb;b=N(d,b);c=Fe(c);c=new xe(new ye(!1,!0,e,!0),b,c);return qf(a,d,c)}return[]}
gf.prototype.Ob=function(a,b){var c=a.path,d=null,e=!1;Me(this.sa,c,function(a,b){var f=N(a,c);d=b.hb(f);e=e||null!=df(b);return!d});var f=this.sa.get(c);f?(e=e||null!=df(f),d=d||f.hb(F)):(f=new cf,this.sa=this.sa.set(c,f));var g;null!=d?g=!0:(g=!1,d=C,Pe(this.sa.subtree(c),function(a,b){var c=b.hb(F);c&&(d=d.Q(a,c))}));var k=null!=ff(f,a);if(!k&&!de(a.n)){var l=sf(a);J(!(l in this.kc),"View does not exist, but we have a tag");var m=tf++;this.kc[l]=m;this.Ye["_"+m]=l}g=f.Ob(a,b,new bf(c,this.Gb),
d,g);k||e||(f=ff(f,a),g=g.concat(uf(this,a,f)));return g};
gf.prototype.kb=function(a,b,c){var d=a.path,e=this.sa.get(d),f=[];if(e&&("default"===a.wa()||null!=ff(e,a))){f=e.kb(a,b,c);e.e()&&(this.sa=this.sa.remove(d));e=f.Eg;f=f.gg;b=-1!==Ua(e,function(a){return de(a.n)});var g=Ke(this.sa,d,function(a,b){return null!=df(b)});if(b&&!g&&(d=this.sa.subtree(d),!d.e()))for(var d=vf(d),k=0;k<d.length;++k){var l=d[k],m=l.V,l=wf(this,l);this.Mc.Ve(m,xf(this,m),l.wd,l.J)}if(!g&&0<e.length&&!c)if(b)this.Mc.$d(a,null);else{var v=this;Oa(e,function(a){a.wa();var b=v.kc[sf(a)];
v.Mc.$d(a,b)})}yf(this,e)}return f};gf.prototype.ua=function(a,b){var c=this.Gb,d=Ke(this.sa,a,function(b,c){var d=N(b,a);if(d=c.hb(d))return d});return c.ua(a,d,b,!0)};function vf(a){return Ie(a,function(a,c,d){if(c&&null!=df(c))return[df(c)];var e=[];c&&(e=ef(c));r(d,function(a){e=e.concat(a)});return e})}function yf(a,b){for(var c=0;c<b.length;++c){var d=b[c];if(!de(d.n)){var d=sf(d),e=a.kc[d];delete a.kc[d];delete a.Ye["_"+e]}}}
function uf(a,b,c){var d=b.path,e=xf(a,b);c=wf(a,c);b=a.Mc.Ve(b,e,c.wd,c.J);d=a.sa.subtree(d);if(e)J(null==df(d.value),"If we're adding a query, it shouldn't be shadowed");else for(e=Ie(d,function(a,b,c){if(!a.e()&&b&&null!=df(b))return[ue(df(b))];var d=[];b&&(d=d.concat(Qa(ef(b),function(a){return a.V})));r(c,function(a){d=d.concat(a)});return d}),d=0;d<e.length;++d)c=e[d],a.Mc.$d(c,xf(a,c));return b}
function wf(a,b){var c=b.V,d=xf(a,c);return{wd:function(){return(b.u()||C).hash()},J:function(b){if("ok"===b){if(d){var f=c.path;if(b=of(a,d)){var g=pf(b);b=g.path;g=g.Hb;f=N(b,f);f=new Zb(new ye(!1,!0,g,!0),f);b=qf(a,b,f)}else b=[]}else b=jf(a,new Zb(ze,c.path));return b}f="Unknown Error";"too_big"===b?f="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"==b?f="Client doesn't have permission to access the desired data.":"unavailable"==b&&
(f="The service is unavailable");f=Error(b+": "+f);f.code=b.toUpperCase();return a.kb(c,null,f)}}}function sf(a){return a.path.toString()+"$"+a.wa()}function pf(a){var b=a.indexOf("$");J(-1!==b&&b<a.length-1,"Bad queryKey.");return{Hb:a.substr(b+1),path:new K(a.substr(0,b))}}function of(a,b){var c=a.Ye,d="_"+b;return d in c?c[d]:void 0}function xf(a,b){var c=sf(b);return w(a.kc,c)}var tf=1;
function qf(a,b,c){var d=a.sa.get(b);J(d,"Missing sync point for query tag that we're tracking");return d.bb(c,new bf(b,a.Gb),null)}function jf(a,b){return zf(a,b,a.sa,null,new bf(F,a.Gb))}function zf(a,b,c,d,e){if(b.path.e())return Af(a,b,c,d,e);var f=c.get(F);null==d&&null!=f&&(d=f.hb(F));var g=[],k=O(b.path),l=b.Xc(k);if((c=c.children.get(k))&&l)var m=d?d.M(k):null,k=e.w(k),g=g.concat(zf(a,l,c,m,k));f&&(g=g.concat(f.bb(b,e,d)));return g}
function Af(a,b,c,d,e){var f=c.get(F);null==d&&null!=f&&(d=f.hb(F));var g=[];c.children.ha(function(c,f){var m=d?d.M(c):null,v=e.w(c),y=b.Xc(c);y&&(g=g.concat(Af(a,y,f,m,v)))});f&&(g=g.concat(f.bb(b,e,d)));return g};function Bf(){this.children={};this.md=0;this.value=null}function Cf(a,b,c){this.Fd=a?a:"";this.Zc=b?b:null;this.B=c?c:new Bf}function Df(a,b){for(var c=b instanceof K?b:new K(b),d=a,e;null!==(e=O(c));)d=new Cf(e,d,w(d.B.children,e)||new Bf),c=G(c);return d}h=Cf.prototype;h.Ba=function(){return this.B.value};function Ef(a,b){J("undefined"!==typeof b,"Cannot set value to undefined");a.B.value=b;Ff(a)}h.clear=function(){this.B.value=null;this.B.children={};this.B.md=0;Ff(this)};
h.vd=function(){return 0<this.B.md};h.e=function(){return null===this.Ba()&&!this.vd()};h.U=function(a){var b=this;r(this.B.children,function(c,d){a(new Cf(d,b,c))})};function Gf(a,b,c,d){c&&!d&&b(a);a.U(function(a){Gf(a,b,!0,d)});c&&d&&b(a)}function Hf(a,b){for(var c=a.parent();null!==c&&!b(c);)c=c.parent()}h.path=function(){return new K(null===this.Zc?this.Fd:this.Zc.path()+"/"+this.Fd)};h.name=function(){return this.Fd};h.parent=function(){return this.Zc};
function Ff(a){if(null!==a.Zc){var b=a.Zc,c=a.Fd,d=a.e(),e=u(b.B.children,c);d&&e?(delete b.B.children[c],b.B.md--,Ff(b)):d||e||(b.B.children[c]=a.B,b.B.md++,Ff(b))}};function If(a){J(ea(a)&&0<a.length,"Requires a non-empty array");this.Rf=a;this.Nc={}}If.prototype.ee=function(a,b){for(var c=this.Nc[a]||[],d=0;d<c.length;d++)c[d].yc.apply(c[d].Ma,Array.prototype.slice.call(arguments,1))};If.prototype.Db=function(a,b,c){Jf(this,a);this.Nc[a]=this.Nc[a]||[];this.Nc[a].push({yc:b,Ma:c});(a=this.Ae(a))&&b.apply(c,a)};If.prototype.hc=function(a,b,c){Jf(this,a);a=this.Nc[a]||[];for(var d=0;d<a.length;d++)if(a[d].yc===b&&(!c||c===a[d].Ma)){a.splice(d,1);break}};
function Jf(a,b){J(Ta(a.Rf,function(a){return a===b}),"Unknown event: "+b)};var Kf=function(){var a=0,b=[];return function(c){var d=c===a;a=c;for(var e=Array(8),f=7;0<=f;f--)e[f]="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c%64),c=Math.floor(c/64);J(0===c,"Cannot push at time == 0");c=e.join("");if(d){for(f=11;0<=f&&63===b[f];f--)b[f]=0;b[f]++}else for(f=0;12>f;f++)b[f]=Math.floor(64*Math.random());for(f=0;12>f;f++)c+="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f]);J(20===c.length,"nextPushId: Length should be 20.");
return c}}();function Lf(){If.call(this,["online"]);this.Wc=!0;if("undefined"!==typeof window&&"undefined"!==typeof window.addEventListener){var a=this;window.addEventListener("online",function(){a.Wc||a.ee("online",!0);a.Wc=!0},!1);window.addEventListener("offline",function(){a.Wc&&a.ee("online",!1);a.Wc=!1},!1)}}ma(Lf,If);Lf.prototype.Ae=function(a){J("online"===a,"Unknown event type: "+a);return[this.Wc]};ca(Lf);function Mf(){If.call(this,["visible"]);var a,b;"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document.hidden?(b="visibilitychange",a="hidden"):"undefined"!==typeof document.mozHidden?(b="mozvisibilitychange",a="mozHidden"):"undefined"!==typeof document.msHidden?(b="msvisibilitychange",a="msHidden"):"undefined"!==typeof document.webkitHidden&&(b="webkitvisibilitychange",a="webkitHidden"));this.uc=!0;if(b){var c=this;document.addEventListener(b,
function(){var b=!document[a];b!==c.uc&&(c.uc=b,c.ee("visible",b))},!1)}}ma(Mf,If);Mf.prototype.Ae=function(a){J("visible"===a,"Unknown event type: "+a);return[this.uc]};ca(Mf);var Nf=/[\[\].#$\/\u0000-\u001F\u007F]/,Of=/[\[\].#$\u0000-\u001F\u007F]/;function Pf(a){return p(a)&&0!==a.length&&!Nf.test(a)}function Qf(a){return null===a||p(a)||ga(a)&&!Sc(a)||ia(a)&&u(a,".sv")}function Rf(a,b,c,d){d&&!n(b)||Sf(z(a,1,d),b,c)}
function Sf(a,b,c){c instanceof K&&(c=new wc(c,a));if(!n(b))throw Error(a+"contains undefined "+zc(c));if(ha(b))throw Error(a+"contains a function "+zc(c)+" with contents: "+b.toString());if(Sc(b))throw Error(a+"contains "+b.toString()+" "+zc(c));if(p(b)&&b.length>10485760/3&&10485760<xc(b))throw Error(a+"contains a string greater than 10485760 utf8 bytes "+zc(c)+" ('"+b.substring(0,50)+"...')");if(ia(b)){var d=!1,e=!1;hb(b,function(b,g){if(".value"===b)d=!0;else if(".priority"!==b&&".sv"!==b&&(e=
!0,!Pf(b)))throw Error(a+" contains an invalid key ("+b+") "+zc(c)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');c.push(b);Sf(a,g,c);c.pop()});if(d&&e)throw Error(a+' contains ".value" child '+zc(c)+" in addition to actual children.");}}
function Tf(a,b,c){if(!ia(b)||ea(b))throw Error(z(a,1,!1)+" must be an Object containing the children to replace.");if(u(b,".value"))throw Error(z(a,1,!1)+' must not contain ".value".  To overwrite with a leaf value, just use .set() instead.');Rf(a,b,c,!1)}
function Uf(a,b,c){if(Sc(c))throw Error(z(a,b,!1)+"is "+c.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Qf(c))throw Error(z(a,b,!1)+"must be a valid Firebase priority (a string, finite number, server value, or null).");}
function Vf(a,b,c){if(!c||n(b))switch(b){case "value":case "child_added":case "child_removed":case "child_changed":case "child_moved":break;default:throw Error(z(a,1,c)+'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".');}}function Wf(a,b,c,d){if((!d||n(c))&&!Pf(c))throw Error(z(a,b,d)+'was an invalid key: "'+c+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');}
function Xf(a,b){if(!p(b)||0===b.length||Of.test(b))throw Error(z(a,1,!1)+'was an invalid path: "'+b+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');}function Yf(a,b){if(".info"===O(b))throw Error(a+" failed: Can't modify data under /.info/");}function Zf(a,b){if(!p(b))throw Error(z(a,1,!1)+"must be a valid credential (a string).");}function $f(a,b,c){if(!p(c))throw Error(z(a,b,!1)+"must be a valid string.");}
function ag(a,b,c,d){if(!d||n(c))if(!ia(c)||null===c)throw Error(z(a,b,d)+"must be a valid object.");}function bg(a,b,c){if(!ia(b)||null===b||!u(b,c))throw Error(z(a,1,!1)+'must contain the key "'+c+'"');if(!p(w(b,c)))throw Error(z(a,1,!1)+'must contain the key "'+c+'" with type "string"');};function cg(){this.set={}}h=cg.prototype;h.add=function(a,b){this.set[a]=null!==b?b:!0};h.contains=function(a){return u(this.set,a)};h.get=function(a){return this.contains(a)?this.set[a]:void 0};h.remove=function(a){delete this.set[a]};h.clear=function(){this.set={}};h.e=function(){return wa(this.set)};h.count=function(){return pa(this.set)};function dg(a,b){r(a.set,function(a,d){b(d,a)})}h.keys=function(){var a=[];r(this.set,function(b,c){a.push(c)});return a};function qc(){this.m=this.C=null}qc.prototype.find=function(a){if(null!=this.C)return this.C.oa(a);if(a.e()||null==this.m)return null;var b=O(a);a=G(a);return this.m.contains(b)?this.m.get(b).find(a):null};qc.prototype.mc=function(a,b){if(a.e())this.C=b,this.m=null;else if(null!==this.C)this.C=this.C.G(a,b);else{null==this.m&&(this.m=new cg);var c=O(a);this.m.contains(c)||this.m.add(c,new qc);c=this.m.get(c);a=G(a);c.mc(a,b)}};
function eg(a,b){if(b.e())return a.C=null,a.m=null,!0;if(null!==a.C){if(a.C.N())return!1;var c=a.C;a.C=null;c.U(M,function(b,c){a.mc(new K(b),c)});return eg(a,b)}return null!==a.m?(c=O(b),b=G(b),a.m.contains(c)&&eg(a.m.get(c),b)&&a.m.remove(c),a.m.e()?(a.m=null,!0):!1):!0}function rc(a,b,c){null!==a.C?c(b,a.C):a.U(function(a,e){var f=new K(b.toString()+"/"+a);rc(e,f,c)})}qc.prototype.U=function(a){null!==this.m&&dg(this.m,function(b,c){a(b,c)})};var fg="auth.firebase.com";function gg(a,b,c){this.nd=a||{};this.de=b||{};this.ab=c||{};this.nd.remember||(this.nd.remember="default")}var hg=["remember","redirectTo"];function ig(a){var b={},c={};hb(a||{},function(a,e){0<=Na(hg,a)?b[a]=e:c[a]=e});return new gg(b,{},c)};function jg(a,b){this.Pe=["session",a.Nd,a.Bb].join(":");this.ae=b}jg.prototype.set=function(a,b){if(!b)if(this.ae.length)b=this.ae[0];else throw Error("fb.login.SessionManager : No storage options available!");b.set(this.Pe,a)};jg.prototype.get=function(){var a=Qa(this.ae,q(this.kg,this)),a=Pa(a,function(a){return null!==a});Xa(a,function(a,c){return bd(c.token)-bd(a.token)});return 0<a.length?a.shift():null};jg.prototype.kg=function(a){try{var b=a.get(this.Pe);if(b&&b.token)return b}catch(c){}return null};
jg.prototype.clear=function(){var a=this;Oa(this.ae,function(b){b.remove(a.Pe)})};function kg(){return!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(navigator.userAgent)}function lg(){var a=navigator.userAgent;if("Microsoft Internet Explorer"===navigator.appName){if((a=a.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/))&&1<a.length)return 8<=parseFloat(a[1])}else if(-1<a.indexOf("Trident")&&(a=a.match(/rv:([0-9]{2,2}[\.0-9]{0,})/))&&1<a.length)return 8<=parseFloat(a[1]);return!1};function mg(){var a=window.opener.frames,b;for(b=a.length-1;0<=b;b--)try{if(a[b].location.protocol===window.location.protocol&&a[b].location.host===window.location.host&&"__winchan_relay_frame"===a[b].name)return a[b]}catch(c){}return null}function ng(a,b,c){a.attachEvent?a.attachEvent("on"+b,c):a.addEventListener&&a.addEventListener(b,c,!1)}function og(a,b,c){a.detachEvent?a.detachEvent("on"+b,c):a.removeEventListener&&a.removeEventListener(b,c,!1)}
function pg(a){/^https?:\/\//.test(a)||(a=window.location.href);var b=/^(https?:\/\/[\-_a-zA-Z\.0-9:]+)/.exec(a);return b?b[1]:a}function qg(a){var b="";try{a=a.replace("#","");var c=kb(a);c&&u(c,"__firebase_request_key")&&(b=w(c,"__firebase_request_key"))}catch(d){}return b}function rg(){var a=Rc(fg);return a.scheme+"://"+a.host+"/v2"}function sg(a){return rg()+"/"+a+"/auth/channel"};function tg(a){var b=this;this.zc=a;this.be="*";lg()?this.Qc=this.yd=mg():(this.Qc=window.opener,this.yd=window);if(!b.Qc)throw"Unable to find relay frame";ng(this.yd,"message",q(this.ic,this));ng(this.yd,"message",q(this.wf,this));try{ug(this,{a:"ready"})}catch(c){ng(this.Qc,"load",function(){ug(b,{a:"ready"})})}ng(window,"unload",q(this.vg,this))}function ug(a,b){b=B(b);lg()?a.Qc.doPost(b,a.be):a.Qc.postMessage(b,a.be)}
tg.prototype.ic=function(a){var b=this,c;try{c=mb(a.data)}catch(d){}c&&"request"===c.a&&(og(window,"message",this.ic),this.be=a.origin,this.zc&&setTimeout(function(){b.zc(b.be,c.d,function(a,c){b.Yf=!c;b.zc=void 0;ug(b,{a:"response",d:a,forceKeepWindowOpen:c})})},0))};tg.prototype.vg=function(){try{og(this.yd,"message",this.wf)}catch(a){}this.zc&&(ug(this,{a:"error",d:"unknown closed window"}),this.zc=void 0);try{window.close()}catch(b){}};tg.prototype.wf=function(a){if(this.Yf&&"die"===a.data)try{window.close()}catch(b){}};function vg(a){this.oc=Ga()+Ga()+Ga();this.zf=a}vg.prototype.open=function(a,b){P.set("redirect_request_id",this.oc);P.set("redirect_request_id",this.oc);b.requestId=this.oc;b.redirectTo=b.redirectTo||window.location.href;a+=(/\?/.test(a)?"":"?")+jb(b);window.location=a};vg.isAvailable=function(){return!/^file:\//.test(location.href)&&!kg()};vg.prototype.Bc=function(){return"redirect"};var wg={NETWORK_ERROR:"Unable to contact the Firebase server.",SERVER_ERROR:"An unknown server error occurred.",TRANSPORT_UNAVAILABLE:"There are no login transports available for the requested method.",REQUEST_INTERRUPTED:"The browser redirected the page before the login request could complete.",USER_CANCELLED:"The user cancelled authentication."};function xg(a){var b=Error(w(wg,a),a);b.code=a;return b};function yg(a){if(!a.window_features||-1!==navigator.userAgent.indexOf("Fennec/")||-1!==navigator.userAgent.indexOf("Firefox/")&&-1!==navigator.userAgent.indexOf("Android"))a.window_features=void 0;a.window_name||(a.window_name="_blank");this.options=a}
yg.prototype.open=function(a,b,c){function d(a){g&&(document.body.removeChild(g),g=void 0);v&&(v=clearInterval(v));og(window,"message",e);og(window,"unload",d);if(m&&!a)try{m.close()}catch(b){k.postMessage("die",l)}m=k=void 0}function e(a){if(a.origin===l)try{var b=mb(a.data);"ready"===b.a?k.postMessage(y,l):"error"===b.a?(d(!1),c&&(c(b.d),c=null)):"response"===b.a&&(d(b.forceKeepWindowOpen),c&&(c(null,b.d),c=null))}catch(e){}}var f=lg(),g,k;if(!this.options.relay_url)return c(Error("invalid arguments: origin of url and relay_url must match"));
var l=pg(a);if(l!==pg(this.options.relay_url))c&&setTimeout(function(){c(Error("invalid arguments: origin of url and relay_url must match"))},0);else{f&&(g=document.createElement("iframe"),g.setAttribute("src",this.options.relay_url),g.style.display="none",g.setAttribute("name","__winchan_relay_frame"),document.body.appendChild(g),k=g.contentWindow);a+=(/\?/.test(a)?"":"?")+jb(b);var m=window.open(a,this.options.window_name,this.options.window_features);k||(k=m);var v=setInterval(function(){m&&m.closed&&
(d(!1),c&&(c(xg("USER_CANCELLED")),c=null))},500),y=B({a:"request",d:b});ng(window,"unload",d);ng(window,"message",e)}};
yg.isAvailable=function(){return"postMessage"in window&&!/^file:\//.test(location.href)&&!(kg()||navigator.userAgent.match(/Windows Phone/)||window.Windows&&/^ms-appx:/.test(location.href)||navigator.userAgent.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i)||navigator.userAgent.match(/CriOS/)||navigator.userAgent.match(/Twitter for iPhone/)||navigator.userAgent.match(/FBAN\/FBIOS/)||window.navigator.standalone)&&!navigator.userAgent.match(/PhantomJS/)};yg.prototype.Bc=function(){return"popup"};function zg(a){a.method||(a.method="GET");a.headers||(a.headers={});a.headers.content_type||(a.headers.content_type="application/json");a.headers.content_type=a.headers.content_type.toLowerCase();this.options=a}
zg.prototype.open=function(a,b,c){function d(){c&&(c(xg("REQUEST_INTERRUPTED")),c=null)}var e=new XMLHttpRequest,f=this.options.method.toUpperCase(),g;ng(window,"beforeunload",d);e.onreadystatechange=function(){if(c&&4===e.readyState){var a;if(200<=e.status&&300>e.status){try{a=mb(e.responseText)}catch(b){}c(null,a)}else 500<=e.status&&600>e.status?c(xg("SERVER_ERROR")):c(xg("NETWORK_ERROR"));c=null;og(window,"beforeunload",d)}};if("GET"===f)a+=(/\?/.test(a)?"":"?")+jb(b),g=null;else{var k=this.options.headers.content_type;
"application/json"===k&&(g=B(b));"application/x-www-form-urlencoded"===k&&(g=jb(b))}e.open(f,a,!0);a={"X-Requested-With":"XMLHttpRequest",Accept:"application/json;text/plain"};za(a,this.options.headers);for(var l in a)e.setRequestHeader(l,a[l]);e.send(g)};zg.isAvailable=function(){return!!window.XMLHttpRequest&&"string"===typeof(new XMLHttpRequest).responseType&&(!(navigator.userAgent.match(/MSIE/)||navigator.userAgent.match(/Trident/))||lg())};zg.prototype.Bc=function(){return"json"};function Ag(a){this.oc=Ga()+Ga()+Ga();this.zf=a}
Ag.prototype.open=function(a,b,c){function d(){c&&(c(xg("USER_CANCELLED")),c=null)}var e=this,f=Rc(fg),g;b.requestId=this.oc;b.redirectTo=f.scheme+"://"+f.host+"/blank/page.html";a+=/\?/.test(a)?"":"?";a+=jb(b);(g=window.open(a,"_blank","location=no"))&&ha(g.addEventListener)?(g.addEventListener("loadstart",function(a){var b;if(b=a&&a.url)a:{try{var m=document.createElement("a");m.href=a.url;b=m.host===f.host&&"/blank/page.html"===m.pathname;break a}catch(v){}b=!1}b&&(a=qg(a.url),g.removeEventListener("exit",
d),g.close(),a=new gg(null,null,{requestId:e.oc,requestKey:a}),e.zf.requestWithCredential("/auth/session",a,c),c=null)}),g.addEventListener("exit",d)):c(xg("TRANSPORT_UNAVAILABLE"))};Ag.isAvailable=function(){return kg()};Ag.prototype.Bc=function(){return"redirect"};function Bg(a){a.callback_parameter||(a.callback_parameter="callback");this.options=a;window.__firebase_auth_jsonp=window.__firebase_auth_jsonp||{}}
Bg.prototype.open=function(a,b,c){function d(){c&&(c(xg("REQUEST_INTERRUPTED")),c=null)}function e(){setTimeout(function(){window.__firebase_auth_jsonp[f]=void 0;wa(window.__firebase_auth_jsonp)&&(window.__firebase_auth_jsonp=void 0);try{var a=document.getElementById(f);a&&a.parentNode.removeChild(a)}catch(b){}},1);og(window,"beforeunload",d)}var f="fn"+(new Date).getTime()+Math.floor(99999*Math.random());b[this.options.callback_parameter]="__firebase_auth_jsonp."+f;a+=(/\?/.test(a)?"":"?")+jb(b);
ng(window,"beforeunload",d);window.__firebase_auth_jsonp[f]=function(a){c&&(c(null,a),c=null);e()};Cg(f,a,c)};
function Cg(a,b,c){setTimeout(function(){try{var d=document.createElement("script");d.type="text/javascript";d.id=a;d.async=!0;d.src=b;d.onerror=function(){var b=document.getElementById(a);null!==b&&b.parentNode.removeChild(b);c&&c(xg("NETWORK_ERROR"))};var e=document.getElementsByTagName("head");(e&&0!=e.length?e[0]:document.documentElement).appendChild(d)}catch(f){c&&c(xg("NETWORK_ERROR"))}},0)}Bg.isAvailable=function(){return!0};Bg.prototype.Bc=function(){return"json"};function Dg(a,b,c,d){If.call(this,["auth_status"]);this.H=a;this.bf=b;this.Pg=c;this.Ke=d;this.rc=new jg(a,[Dc,P]);this.nb=null;Eg(this)}ma(Dg,If);h=Dg.prototype;h.xe=function(){return this.nb||null};function Eg(a){P.get("redirect_request_id")&&Fg(a);var b=a.rc.get();b&&b.token?(Gg(a,b),a.bf(b.token,function(c,d){Hg(a,c,d,!1,b.token,b)},function(b,d){Ig(a,"resumeSession()",b,d)})):Gg(a,null)}
function Jg(a,b,c,d,e,f){"firebaseio-demo.com"===a.H.domain&&Q("Firebase authentication is not supported on demo Firebases (*.firebaseio-demo.com). To secure your Firebase, create a production Firebase at https://www.firebase.com.");a.bf(b,function(f,k){Hg(a,f,k,!0,b,c,d||{},e)},function(b,c){Ig(a,"auth()",b,c,f)})}function Kg(a,b){a.rc.clear();Gg(a,null);a.Pg(function(a,d){if("ok"===a)R(b,null);else{var e=(a||"error").toUpperCase(),f=e;d&&(f+=": "+d);f=Error(f);f.code=e;R(b,f)}})}
function Hg(a,b,c,d,e,f,g,k){"ok"===b?(d&&(b=c.auth,f.auth=b,f.expires=c.expires,f.token=cd(e)?e:"",c=null,b&&u(b,"uid")?c=w(b,"uid"):u(f,"uid")&&(c=w(f,"uid")),f.uid=c,c="custom",b&&u(b,"provider")?c=w(b,"provider"):u(f,"provider")&&(c=w(f,"provider")),f.provider=c,a.rc.clear(),cd(e)&&(g=g||{},c=Dc,"sessionOnly"===g.remember&&(c=P),"none"!==g.remember&&a.rc.set(f,c)),Gg(a,f)),R(k,null,f)):(a.rc.clear(),Gg(a,null),f=a=(b||"error").toUpperCase(),c&&(f+=": "+c),f=Error(f),f.code=a,R(k,f))}
function Ig(a,b,c,d,e){Q(b+" was canceled: "+d);a.rc.clear();Gg(a,null);a=Error(d);a.code=c.toUpperCase();R(e,a)}function Lg(a,b,c,d,e){Mg(a);c=new gg(d||{},{},c||{});Ng(a,[zg,Bg],"/auth/"+b,c,e)}
function Og(a,b,c,d){Mg(a);var e=[yg,Ag];c=ig(c);"anonymous"===b||"password"===b?setTimeout(function(){R(d,xg("TRANSPORT_UNAVAILABLE"))},0):(c.de.window_features="menubar=yes,modal=yes,alwaysRaised=yeslocation=yes,resizable=yes,scrollbars=yes,status=yes,height=625,width=625,top="+("object"===typeof screen?.5*(screen.height-625):0)+",left="+("object"===typeof screen?.5*(screen.width-625):0),c.de.relay_url=sg(a.H.Bb),c.de.requestWithCredential=q(a.pc,a),Ng(a,e,"/auth/"+b,c,d))}
function Fg(a){var b=P.get("redirect_request_id");if(b){var c=P.get("redirect_client_options");P.remove("redirect_request_id");P.remove("redirect_client_options");var d=[zg,Bg],b={requestId:b,requestKey:qg(document.location.hash)},c=new gg(c,{},b);try{document.location.hash=document.location.hash.replace(/&__firebase_request_key=([a-zA-z0-9]*)/,"")}catch(e){}Ng(a,d,"/auth/session",c)}}h.se=function(a,b){Mg(this);var c=ig(a);c.ab._method="POST";this.pc("/users",c,function(a,c){a?R(b,a):R(b,a,c)})};
h.Re=function(a,b){var c=this;Mg(this);var d="/users/"+encodeURIComponent(a.email),e=ig(a);e.ab._method="DELETE";this.pc(d,e,function(a,d){!a&&d&&d.uid&&c.nb&&c.nb.uid&&c.nb.uid===d.uid&&Kg(c);R(b,a)})};h.pe=function(a,b){Mg(this);var c="/users/"+encodeURIComponent(a.email)+"/password",d=ig(a);d.ab._method="PUT";d.ab.password=a.newPassword;this.pc(c,d,function(a){R(b,a)})};
h.oe=function(a,b){Mg(this);var c="/users/"+encodeURIComponent(a.oldEmail)+"/email",d=ig(a);d.ab._method="PUT";d.ab.email=a.newEmail;d.ab.password=a.password;this.pc(c,d,function(a){R(b,a)})};h.Se=function(a,b){Mg(this);var c="/users/"+encodeURIComponent(a.email)+"/password",d=ig(a);d.ab._method="POST";this.pc(c,d,function(a){R(b,a)})};h.pc=function(a,b,c){Pg(this,[zg,Bg],a,b,c)};
function Ng(a,b,c,d,e){Pg(a,b,c,d,function(b,c){!b&&c&&c.token&&c.uid?Jg(a,c.token,c,d.nd,function(a,b){a?R(e,a):R(e,null,b)}):R(e,b||xg("UNKNOWN_ERROR"))})}
function Pg(a,b,c,d,e){b=Pa(b,function(a){return"function"===typeof a.isAvailable&&a.isAvailable()});0===b.length?setTimeout(function(){R(e,xg("TRANSPORT_UNAVAILABLE"))},0):(b=new (b.shift())(d.de),d=ib(d.ab),d.v="js-2.2.3",d.transport=b.Bc(),d.suppress_status_codes=!0,a=rg()+"/"+a.H.Bb+c,b.open(a,d,function(a,b){if(a)R(e,a);else if(b&&b.error){var c=Error(b.error.message);c.code=b.error.code;c.details=b.error.details;R(e,c)}else R(e,null,b)}))}
function Gg(a,b){var c=null!==a.nb||null!==b;a.nb=b;c&&a.ee("auth_status",b);a.Ke(null!==b)}h.Ae=function(a){J("auth_status"===a,'initial event must be of type "auth_status"');return[this.nb]};function Mg(a){var b=a.H;if("firebaseio.com"!==b.domain&&"firebaseio-demo.com"!==b.domain&&"auth.firebase.com"===fg)throw Error("This custom Firebase server ('"+a.H.domain+"') does not support delegated login.");};function Qg(a){this.ic=a;this.Md=[];this.Qb=0;this.qe=-1;this.Eb=null}function Rg(a,b,c){a.qe=b;a.Eb=c;a.qe<a.Qb&&(a.Eb(),a.Eb=null)}function Sg(a,b,c){for(a.Md[b]=c;a.Md[a.Qb];){var d=a.Md[a.Qb];delete a.Md[a.Qb];for(var e=0;e<d.length;++e)if(d[e]){var f=a;Cb(function(){f.ic(d[e])})}if(a.Qb===a.qe){a.Eb&&(clearTimeout(a.Eb),a.Eb(),a.Eb=null);break}a.Qb++}};function Tg(a,b,c){this.re=a;this.f=Oc(a);this.ob=this.pb=0;this.Va=Ob(b);this.Wd=c;this.Gc=!1;this.jd=function(a){b.host!==b.Oa&&(a.ns=b.Bb);var c=[],f;for(f in a)a.hasOwnProperty(f)&&c.push(f+"="+a[f]);return(b.lb?"https://":"http://")+b.Oa+"/.lp?"+c.join("&")}}var Ug,Vg;
Tg.prototype.open=function(a,b){this.ef=0;this.ka=b;this.uf=new Qg(a);this.yb=!1;var c=this;this.rb=setTimeout(function(){c.f("Timed out trying to connect.");c.ib();c.rb=null},Math.floor(3E4));Tc(function(){if(!c.yb){c.Ta=new Wg(function(a,b,d,k,l){Xg(c,arguments);if(c.Ta)if(c.rb&&(clearTimeout(c.rb),c.rb=null),c.Gc=!0,"start"==a)c.id=b,c.Bf=d;else if("close"===a)b?(c.Ta.Ud=!1,Rg(c.uf,b,function(){c.ib()})):c.ib();else throw Error("Unrecognized command received: "+a);},function(a,b){Xg(c,arguments);
Sg(c.uf,a,b)},function(){c.ib()},c.jd);var a={start:"t"};a.ser=Math.floor(1E8*Math.random());c.Ta.ge&&(a.cb=c.Ta.ge);a.v="5";c.Wd&&(a.s=c.Wd);"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");a=c.jd(a);c.f("Connecting via long-poll to "+a);Yg(c.Ta,a,function(){})}})};
Tg.prototype.start=function(){var a=this.Ta,b=this.Bf;a.og=this.id;a.pg=b;for(a.le=!0;Zg(a););a=this.id;b=this.Bf;this.gc=document.createElement("iframe");var c={dframe:"t"};c.id=a;c.pw=b;this.gc.src=this.jd(c);this.gc.style.display="none";document.body.appendChild(this.gc)};Tg.isAvailable=function(){return!Vg&&!("object"===typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"===typeof Windows&&"object"===typeof Windows.Rg)&&(Ug||!0)};h=Tg.prototype;
h.Dd=function(){};h.ed=function(){this.yb=!0;this.Ta&&(this.Ta.close(),this.Ta=null);this.gc&&(document.body.removeChild(this.gc),this.gc=null);this.rb&&(clearTimeout(this.rb),this.rb=null)};h.ib=function(){this.yb||(this.f("Longpoll is closing itself"),this.ed(),this.ka&&(this.ka(this.Gc),this.ka=null))};h.close=function(){this.yb||(this.f("Longpoll is being closed."),this.ed())};
h.send=function(a){a=B(a);this.pb+=a.length;Lb(this.Va,"bytes_sent",a.length);a=Kc(a);a=fb(a,!0);a=Xc(a,1840);for(var b=0;b<a.length;b++){var c=this.Ta;c.ad.push({Gg:this.ef,Og:a.length,gf:a[b]});c.le&&Zg(c);this.ef++}};function Xg(a,b){var c=B(b).length;a.ob+=c;Lb(a.Va,"bytes_received",c)}
function Wg(a,b,c,d){this.jd=d;this.jb=c;this.Oe=new cg;this.ad=[];this.te=Math.floor(1E8*Math.random());this.Ud=!0;this.ge=Gc();window["pLPCommand"+this.ge]=a;window["pRTLPCB"+this.ge]=b;a=document.createElement("iframe");a.style.display="none";if(document.body){document.body.appendChild(a);try{a.contentWindow.document||Bb("No IE domain setting required")}catch(e){a.src="javascript:void((function(){document.open();document.domain='"+document.domain+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
a.contentDocument?a.gb=a.contentDocument:a.contentWindow?a.gb=a.contentWindow.document:a.document&&(a.gb=a.document);this.Ca=a;a="";this.Ca.src&&"javascript:"===this.Ca.src.substr(0,11)&&(a='<script>document.domain="'+document.domain+'";\x3c/script>');a="<html><body>"+a+"</body></html>";try{this.Ca.gb.open(),this.Ca.gb.write(a),this.Ca.gb.close()}catch(f){Bb("frame writing exception"),f.stack&&Bb(f.stack),Bb(f)}}
Wg.prototype.close=function(){this.le=!1;if(this.Ca){this.Ca.gb.body.innerHTML="";var a=this;setTimeout(function(){null!==a.Ca&&(document.body.removeChild(a.Ca),a.Ca=null)},Math.floor(0))}var b=this.jb;b&&(this.jb=null,b())};
function Zg(a){if(a.le&&a.Ud&&a.Oe.count()<(0<a.ad.length?2:1)){a.te++;var b={};b.id=a.og;b.pw=a.pg;b.ser=a.te;for(var b=a.jd(b),c="",d=0;0<a.ad.length;)if(1870>=a.ad[0].gf.length+30+c.length){var e=a.ad.shift(),c=c+"&seg"+d+"="+e.Gg+"&ts"+d+"="+e.Og+"&d"+d+"="+e.gf;d++}else break;$g(a,b+c,a.te);return!0}return!1}function $g(a,b,c){function d(){a.Oe.remove(c);Zg(a)}a.Oe.add(c,1);var e=setTimeout(d,Math.floor(25E3));Yg(a,b,function(){clearTimeout(e);d()})}
function Yg(a,b,c){setTimeout(function(){try{if(a.Ud){var d=a.Ca.gb.createElement("script");d.type="text/javascript";d.async=!0;d.src=b;d.onload=d.onreadystatechange=function(){var a=d.readyState;a&&"loaded"!==a&&"complete"!==a||(d.onload=d.onreadystatechange=null,d.parentNode&&d.parentNode.removeChild(d),c())};d.onerror=function(){Bb("Long-poll script failed to load: "+b);a.Ud=!1;a.close()};a.Ca.gb.body.appendChild(d)}}catch(e){}},Math.floor(1))};var ah=null;"undefined"!==typeof MozWebSocket?ah=MozWebSocket:"undefined"!==typeof WebSocket&&(ah=WebSocket);function bh(a,b,c){this.re=a;this.f=Oc(this.re);this.frames=this.Jc=null;this.ob=this.pb=this.$e=0;this.Va=Ob(b);this.fb=(b.lb?"wss://":"ws://")+b.Oa+"/.ws?v=5";"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(this.fb+="&r=f");b.host!==b.Oa&&(this.fb=this.fb+"&ns="+b.Bb);c&&(this.fb=this.fb+"&s="+c)}var ch;
bh.prototype.open=function(a,b){this.jb=b;this.tg=a;this.f("Websocket connecting to "+this.fb);this.Gc=!1;Dc.set("previous_websocket_failure",!0);try{this.va=new ah(this.fb)}catch(c){this.f("Error instantiating WebSocket.");var d=c.message||c.data;d&&this.f(d);this.ib();return}var e=this;this.va.onopen=function(){e.f("Websocket connected.");e.Gc=!0};this.va.onclose=function(){e.f("Websocket connection was disconnected.");e.va=null;e.ib()};this.va.onmessage=function(a){if(null!==e.va)if(a=a.data,e.ob+=
a.length,Lb(e.Va,"bytes_received",a.length),dh(e),null!==e.frames)eh(e,a);else{a:{J(null===e.frames,"We already have a frame buffer");if(6>=a.length){var b=Number(a);if(!isNaN(b)){e.$e=b;e.frames=[];a=null;break a}}e.$e=1;e.frames=[]}null!==a&&eh(e,a)}};this.va.onerror=function(a){e.f("WebSocket error.  Closing connection.");(a=a.message||a.data)&&e.f(a);e.ib()}};bh.prototype.start=function(){};
bh.isAvailable=function(){var a=!1;if("undefined"!==typeof navigator&&navigator.userAgent){var b=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);b&&1<b.length&&4.4>parseFloat(b[1])&&(a=!0)}return!a&&null!==ah&&!ch};bh.responsesRequiredToBeHealthy=2;bh.healthyTimeout=3E4;h=bh.prototype;h.Dd=function(){Dc.remove("previous_websocket_failure")};function eh(a,b){a.frames.push(b);if(a.frames.length==a.$e){var c=a.frames.join("");a.frames=null;c=mb(c);a.tg(c)}}
h.send=function(a){dh(this);a=B(a);this.pb+=a.length;Lb(this.Va,"bytes_sent",a.length);a=Xc(a,16384);1<a.length&&this.va.send(String(a.length));for(var b=0;b<a.length;b++)this.va.send(a[b])};h.ed=function(){this.yb=!0;this.Jc&&(clearInterval(this.Jc),this.Jc=null);this.va&&(this.va.close(),this.va=null)};h.ib=function(){this.yb||(this.f("WebSocket is closing itself"),this.ed(),this.jb&&(this.jb(this.Gc),this.jb=null))};h.close=function(){this.yb||(this.f("WebSocket is being closed"),this.ed())};
function dh(a){clearInterval(a.Jc);a.Jc=setInterval(function(){a.va&&a.va.send("0");dh(a)},Math.floor(45E3))};function fh(a){gh(this,a)}var hh=[Tg,bh];function gh(a,b){var c=bh&&bh.isAvailable(),d=c&&!(Dc.rf||!0===Dc.get("previous_websocket_failure"));b.Qg&&(c||Q("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),d=!0);if(d)a.gd=[bh];else{var e=a.gd=[];Yc(hh,function(a,b){b&&b.isAvailable()&&e.push(b)})}}function ih(a){if(0<a.gd.length)return a.gd[0];throw Error("No transports available");};function jh(a,b,c,d,e,f){this.id=a;this.f=Oc("c:"+this.id+":");this.ic=c;this.Vc=d;this.ka=e;this.Me=f;this.H=b;this.Ld=[];this.cf=0;this.Kf=new fh(b);this.Ua=0;this.f("Connection created");kh(this)}
function kh(a){var b=ih(a.Kf);a.L=new b("c:"+a.id+":"+a.cf++,a.H);a.Qe=b.responsesRequiredToBeHealthy||0;var c=lh(a,a.L),d=mh(a,a.L);a.hd=a.L;a.dd=a.L;a.F=null;a.zb=!1;setTimeout(function(){a.L&&a.L.open(c,d)},Math.floor(0));b=b.healthyTimeout||0;0<b&&(a.xd=setTimeout(function(){a.xd=null;a.zb||(a.L&&102400<a.L.ob?(a.f("Connection exceeded healthy timeout but has received "+a.L.ob+" bytes.  Marking connection healthy."),a.zb=!0,a.L.Dd()):a.L&&10240<a.L.pb?a.f("Connection exceeded healthy timeout but has sent "+
a.L.pb+" bytes.  Leaving connection alive."):(a.f("Closing unhealthy connection after timeout."),a.close()))},Math.floor(b)))}function mh(a,b){return function(c){b===a.L?(a.L=null,c||0!==a.Ua?1===a.Ua&&a.f("Realtime connection lost."):(a.f("Realtime connection failed."),"s-"===a.H.Oa.substr(0,2)&&(Dc.remove("host:"+a.H.host),a.H.Oa=a.H.host)),a.close()):b===a.F?(a.f("Secondary connection lost."),c=a.F,a.F=null,a.hd!==c&&a.dd!==c||a.close()):a.f("closing an old connection")}}
function lh(a,b){return function(c){if(2!=a.Ua)if(b===a.dd){var d=Vc("t",c);c=Vc("d",c);if("c"==d){if(d=Vc("t",c),"d"in c)if(c=c.d,"h"===d){var d=c.ts,e=c.v,f=c.h;a.Wd=c.s;Fc(a.H,f);0==a.Ua&&(a.L.start(),nh(a,a.L,d),"5"!==e&&Q("Protocol version mismatch detected"),c=a.Kf,(c=1<c.gd.length?c.gd[1]:null)&&oh(a,c))}else if("n"===d){a.f("recvd end transmission on primary");a.dd=a.F;for(c=0;c<a.Ld.length;++c)a.Hd(a.Ld[c]);a.Ld=[];ph(a)}else"s"===d?(a.f("Connection shutdown command received. Shutting down..."),
a.Me&&(a.Me(c),a.Me=null),a.ka=null,a.close()):"r"===d?(a.f("Reset packet received.  New host: "+c),Fc(a.H,c),1===a.Ua?a.close():(qh(a),kh(a))):"e"===d?Pc("Server Error: "+c):"o"===d?(a.f("got pong on primary."),rh(a),sh(a)):Pc("Unknown control packet command: "+d)}else"d"==d&&a.Hd(c)}else if(b===a.F)if(d=Vc("t",c),c=Vc("d",c),"c"==d)"t"in c&&(c=c.t,"a"===c?th(a):"r"===c?(a.f("Got a reset on secondary, closing it"),a.F.close(),a.hd!==a.F&&a.dd!==a.F||a.close()):"o"===c&&(a.f("got pong on secondary."),
a.If--,th(a)));else if("d"==d)a.Ld.push(c);else throw Error("Unknown protocol layer: "+d);else a.f("message on old connection")}}jh.prototype.Da=function(a){uh(this,{t:"d",d:a})};function ph(a){a.hd===a.F&&a.dd===a.F&&(a.f("cleaning up and promoting a connection: "+a.F.re),a.L=a.F,a.F=null)}
function th(a){0>=a.If?(a.f("Secondary connection is healthy."),a.zb=!0,a.F.Dd(),a.F.start(),a.f("sending client ack on secondary"),a.F.send({t:"c",d:{t:"a",d:{}}}),a.f("Ending transmission on primary"),a.L.send({t:"c",d:{t:"n",d:{}}}),a.hd=a.F,ph(a)):(a.f("sending ping on secondary."),a.F.send({t:"c",d:{t:"p",d:{}}}))}jh.prototype.Hd=function(a){rh(this);this.ic(a)};function rh(a){a.zb||(a.Qe--,0>=a.Qe&&(a.f("Primary connection is healthy."),a.zb=!0,a.L.Dd()))}
function oh(a,b){a.F=new b("c:"+a.id+":"+a.cf++,a.H,a.Wd);a.If=b.responsesRequiredToBeHealthy||0;a.F.open(lh(a,a.F),mh(a,a.F));setTimeout(function(){a.F&&(a.f("Timed out trying to upgrade."),a.F.close())},Math.floor(6E4))}function nh(a,b,c){a.f("Realtime connection established.");a.L=b;a.Ua=1;a.Vc&&(a.Vc(c),a.Vc=null);0===a.Qe?(a.f("Primary connection is healthy."),a.zb=!0):setTimeout(function(){sh(a)},Math.floor(5E3))}
function sh(a){a.zb||1!==a.Ua||(a.f("sending ping on primary."),uh(a,{t:"c",d:{t:"p",d:{}}}))}function uh(a,b){if(1!==a.Ua)throw"Connection is not connected";a.hd.send(b)}jh.prototype.close=function(){2!==this.Ua&&(this.f("Closing realtime connection."),this.Ua=2,qh(this),this.ka&&(this.ka(),this.ka=null))};function qh(a){a.f("Shutting down all connections");a.L&&(a.L.close(),a.L=null);a.F&&(a.F.close(),a.F=null);a.xd&&(clearTimeout(a.xd),a.xd=null)};function vh(a,b,c,d){this.id=wh++;this.f=Oc("p:"+this.id+":");this.Kb=!0;this.aa={};this.pa=[];this.Yc=0;this.Uc=[];this.ma=!1;this.$a=1E3;this.Ed=3E5;this.Fb=b;this.Tc=c;this.Ne=d;this.H=a;this.Ue=null;this.cd={};this.Fg=0;this.Kc=this.Fe=null;xh(this,0);Mf.Wb().Db("visible",this.wg,this);-1===a.host.indexOf("fblocal")&&Lf.Wb().Db("online",this.ug,this)}var wh=0,yh=0;h=vh.prototype;
h.Da=function(a,b,c){var d=++this.Fg;a={r:d,a:a,b:b};this.f(B(a));J(this.ma,"sendRequest call when we're not connected not allowed.");this.Sa.Da(a);c&&(this.cd[d]=c)};h.sf=function(a,b,c,d){var e=a.wa(),f=a.path.toString();this.f("Listen called for "+f+" "+e);this.aa[f]=this.aa[f]||{};J(!this.aa[f][e],"listen() called twice for same path/queryId.");a={J:d,wd:b,Cg:a,tag:c};this.aa[f][e]=a;this.ma&&zh(this,a)};
function zh(a,b){var c=b.Cg,d=c.path.toString(),e=c.wa();a.f("Listen on "+d+" for "+e);var f={p:d};b.tag&&(f.q=ce(c.n),f.t=b.tag);f.h=b.wd();a.Da("q",f,function(f){var k=f.d,l=f.s;if(k&&"object"===typeof k&&u(k,"w")){var m=w(k,"w");ea(m)&&0<=Na(m,"no_index")&&Q("Using an unspecified index. Consider adding "+('".indexOn": "'+c.n.g.toString()+'"')+" at "+c.path.toString()+" to your security rules for better performance")}(a.aa[d]&&a.aa[d][e])===b&&(a.f("listen response",f),"ok"!==l&&Ah(a,d,e),b.J&&
b.J(l,k))})}h.P=function(a,b,c){this.Fa={cg:a,kf:!1,yc:b,ld:c};this.f("Authenticating using credential: "+a);Bh(this);(b=40==a.length)||(a=ad(a).Ac,b="object"===typeof a&&!0===w(a,"admin"));b&&(this.f("Admin auth credential detected.  Reducing max reconnect time."),this.Ed=3E4)};h.fe=function(a){delete this.Fa;this.ma&&this.Da("unauth",{},function(b){a(b.s,b.d)})};
function Bh(a){var b=a.Fa;a.ma&&b&&a.Da("auth",{cred:b.cg},function(c){var d=c.s;c=c.d||"error";"ok"!==d&&a.Fa===b&&delete a.Fa;b.kf?"ok"!==d&&b.ld&&b.ld(d,c):(b.kf=!0,b.yc&&b.yc(d,c))})}h.Lf=function(a,b){var c=a.path.toString(),d=a.wa();this.f("Unlisten called for "+c+" "+d);if(Ah(this,c,d)&&this.ma){var e=ce(a.n);this.f("Unlisten on "+c+" for "+d);c={p:c};b&&(c.q=e,c.t=b);this.Da("n",c)}};h.Le=function(a,b,c){this.ma?Ch(this,"o",a,b,c):this.Uc.push({$c:a,action:"o",data:b,J:c})};
h.xf=function(a,b,c){this.ma?Ch(this,"om",a,b,c):this.Uc.push({$c:a,action:"om",data:b,J:c})};h.Id=function(a,b){this.ma?Ch(this,"oc",a,null,b):this.Uc.push({$c:a,action:"oc",data:null,J:b})};function Ch(a,b,c,d,e){c={p:c,d:d};a.f("onDisconnect "+b,c);a.Da(b,c,function(a){e&&setTimeout(function(){e(a.s,a.d)},Math.floor(0))})}h.put=function(a,b,c,d){Dh(this,"p",a,b,c,d)};h.tf=function(a,b,c,d){Dh(this,"m",a,b,c,d)};
function Dh(a,b,c,d,e,f){d={p:c,d:d};n(f)&&(d.h=f);a.pa.push({action:b,Ff:d,J:e});a.Yc++;b=a.pa.length-1;a.ma?Eh(a,b):a.f("Buffering put: "+c)}function Eh(a,b){var c=a.pa[b].action,d=a.pa[b].Ff,e=a.pa[b].J;a.pa[b].Dg=a.ma;a.Da(c,d,function(d){a.f(c+" response",d);delete a.pa[b];a.Yc--;0===a.Yc&&(a.pa=[]);e&&e(d.s,d.d)})}h.Df=function(a){this.ma&&(a={c:a},this.f("reportStats",a),this.Da("s",a))};
h.Hd=function(a){if("r"in a){this.f("from server: "+B(a));var b=a.r,c=this.cd[b];c&&(delete this.cd[b],c(a.b))}else{if("error"in a)throw"A server-side error has occurred: "+a.error;"a"in a&&(b=a.a,c=a.b,this.f("handleServerMessage",b,c),"d"===b?this.Fb(c.p,c.d,!1,c.t):"m"===b?this.Fb(c.p,c.d,!0,c.t):"c"===b?Fh(this,c.p,c.q):"ac"===b?(a=c.s,b=c.d,c=this.Fa,delete this.Fa,c&&c.ld&&c.ld(a,b)):"sd"===b?this.Ue?this.Ue(c):"msg"in c&&"undefined"!==typeof console&&console.log("FIREBASE: "+c.msg.replace("\n",
"\nFIREBASE: ")):Pc("Unrecognized action received from server: "+B(b)+"\nAre you using the latest client?"))}};h.Vc=function(a){this.f("connection ready");this.ma=!0;this.Kc=(new Date).getTime();this.Ne({serverTimeOffset:a-(new Date).getTime()});Gh(this);this.Tc(!0)};function xh(a,b){J(!a.Sa,"Scheduling a connect when we're already connected/ing?");a.Sb&&clearTimeout(a.Sb);a.Sb=setTimeout(function(){a.Sb=null;Hh(a)},Math.floor(b))}
h.wg=function(a){a&&!this.uc&&this.$a===this.Ed&&(this.f("Window became visible.  Reducing delay."),this.$a=1E3,this.Sa||xh(this,0));this.uc=a};h.ug=function(a){a?(this.f("Browser went online.  Reconnecting."),this.$a=1E3,this.Kb=!0,this.Sa||xh(this,0)):(this.f("Browser went offline.  Killing connection; don't reconnect."),this.Kb=!1,this.Sa&&this.Sa.close())};
h.yf=function(){this.f("data client disconnected");this.ma=!1;this.Sa=null;for(var a=0;a<this.pa.length;a++){var b=this.pa[a];b&&"h"in b.Ff&&b.Dg&&(b.J&&b.J("disconnect"),delete this.pa[a],this.Yc--)}0===this.Yc&&(this.pa=[]);if(this.Kb)this.uc?this.Kc&&(3E4<(new Date).getTime()-this.Kc&&(this.$a=1E3),this.Kc=null):(this.f("Window isn't visible.  Delaying reconnect."),this.$a=this.Ed,this.Fe=(new Date).getTime()),a=Math.max(0,this.$a-((new Date).getTime()-this.Fe)),a*=Math.random(),this.f("Trying to reconnect in "+
a+"ms"),xh(this,a),this.$a=Math.min(this.Ed,1.3*this.$a);else for(var c in this.cd)delete this.cd[c];this.Tc(!1)};function Hh(a){if(a.Kb){a.f("Making a connection attempt");a.Fe=(new Date).getTime();a.Kc=null;var b=q(a.Hd,a),c=q(a.Vc,a),d=q(a.yf,a),e=a.id+":"+yh++;a.Sa=new jh(e,a.H,b,c,d,function(b){Q(b+" ("+a.H.toString()+")");a.Kb=!1})}}h.xb=function(){this.Kb=!1;this.Sa?this.Sa.close():(this.Sb&&(clearTimeout(this.Sb),this.Sb=null),this.ma&&this.yf())};
h.qc=function(){this.Kb=!0;this.$a=1E3;this.Sa||xh(this,0)};function Fh(a,b,c){c=c?Qa(c,function(a){return Wc(a)}).join("$"):"default";(a=Ah(a,b,c))&&a.J&&a.J("permission_denied")}function Ah(a,b,c){b=(new K(b)).toString();var d;n(a.aa[b])?(d=a.aa[b][c],delete a.aa[b][c],0===pa(a.aa[b])&&delete a.aa[b]):d=void 0;return d}
function Gh(a){Bh(a);r(a.aa,function(b){r(b,function(b){zh(a,b)})});for(var b=0;b<a.pa.length;b++)a.pa[b]&&Eh(a,b);for(;a.Uc.length;)b=a.Uc.shift(),Ch(a,b.action,b.$c,b.data,b.J)};var V={ig:function(){Ug=ch=!0}};V.forceLongPolling=V.ig;V.jg=function(){Vg=!0};V.forceWebSockets=V.jg;V.Jg=function(a,b){a.k.Ra.Ue=b};V.setSecurityDebugCallback=V.Jg;V.We=function(a,b){a.k.We(b)};V.stats=V.We;V.Xe=function(a,b){a.k.Xe(b)};V.statsIncrementCounter=V.Xe;V.rd=function(a){return a.k.rd};V.dataUpdateCount=V.rd;V.mg=function(a,b){a.k.De=b};V.interceptServerData=V.mg;V.sg=function(a){new tg(a)};V.onPopupOpen=V.sg;V.Hg=function(a){fg=a};V.setAuthenticationServer=V.Hg;function S(a,b,c){this.B=a;this.V=b;this.g=c}S.prototype.K=function(){x("Firebase.DataSnapshot.val",0,0,arguments.length);return this.B.K()};S.prototype.val=S.prototype.K;S.prototype.jf=function(){x("Firebase.DataSnapshot.exportVal",0,0,arguments.length);return this.B.K(!0)};S.prototype.exportVal=S.prototype.jf;S.prototype.hg=function(){x("Firebase.DataSnapshot.exists",0,0,arguments.length);return!this.B.e()};S.prototype.exists=S.prototype.hg;
S.prototype.w=function(a){x("Firebase.DataSnapshot.child",0,1,arguments.length);ga(a)&&(a=String(a));Xf("Firebase.DataSnapshot.child",a);var b=new K(a),c=this.V.w(b);return new S(this.B.oa(b),c,M)};S.prototype.child=S.prototype.w;S.prototype.Ha=function(a){x("Firebase.DataSnapshot.hasChild",1,1,arguments.length);Xf("Firebase.DataSnapshot.hasChild",a);var b=new K(a);return!this.B.oa(b).e()};S.prototype.hasChild=S.prototype.Ha;
S.prototype.A=function(){x("Firebase.DataSnapshot.getPriority",0,0,arguments.length);return this.B.A().K()};S.prototype.getPriority=S.prototype.A;S.prototype.forEach=function(a){x("Firebase.DataSnapshot.forEach",1,1,arguments.length);A("Firebase.DataSnapshot.forEach",1,a,!1);if(this.B.N())return!1;var b=this;return!!this.B.U(this.g,function(c,d){return a(new S(d,b.V.w(c),M))})};S.prototype.forEach=S.prototype.forEach;
S.prototype.vd=function(){x("Firebase.DataSnapshot.hasChildren",0,0,arguments.length);return this.B.N()?!1:!this.B.e()};S.prototype.hasChildren=S.prototype.vd;S.prototype.name=function(){Q("Firebase.DataSnapshot.name() being deprecated. Please use Firebase.DataSnapshot.key() instead.");x("Firebase.DataSnapshot.name",0,0,arguments.length);return this.key()};S.prototype.name=S.prototype.name;S.prototype.key=function(){x("Firebase.DataSnapshot.key",0,0,arguments.length);return this.V.key()};
S.prototype.key=S.prototype.key;S.prototype.Cb=function(){x("Firebase.DataSnapshot.numChildren",0,0,arguments.length);return this.B.Cb()};S.prototype.numChildren=S.prototype.Cb;S.prototype.lc=function(){x("Firebase.DataSnapshot.ref",0,0,arguments.length);return this.V};S.prototype.ref=S.prototype.lc;function Ih(a,b){this.H=a;this.Va=Ob(a);this.ea=new ub;this.Gd=1;this.Ra=null;b||0<=("object"===typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)?(this.ca=new Ae(this.H,q(this.Fb,this)),setTimeout(q(this.Tc,this,!0),0)):this.ca=this.Ra=new vh(this.H,q(this.Fb,this),q(this.Tc,this),q(this.Ne,this));this.Mg=Pb(a,q(function(){return new Jb(this.Va,this.ca)},this));this.tc=new Cf;this.Ce=
new nb;var c=this;this.Bd=new gf({Ve:function(a,b,f,g){b=[];f=c.Ce.j(a.path);f.e()||(b=jf(c.Bd,new Ub(ze,a.path,f)),setTimeout(function(){g("ok")},0));return b},$d:ba});Jh(this,"connected",!1);this.ka=new qc;this.P=new Dg(a,q(this.ca.P,this.ca),q(this.ca.fe,this.ca),q(this.Ke,this));this.rd=0;this.De=null;this.O=new gf({Ve:function(a,b,f,g){c.ca.sf(a,f,b,function(b,e){var f=g(b,e);zb(c.ea,a.path,f)});return[]},$d:function(a,b){c.ca.Lf(a,b)}})}h=Ih.prototype;
h.toString=function(){return(this.H.lb?"https://":"http://")+this.H.host};h.name=function(){return this.H.Bb};function Kh(a){a=a.Ce.j(new K(".info/serverTimeOffset")).K()||0;return(new Date).getTime()+a}function Lh(a){a=a={timestamp:Kh(a)};a.timestamp=a.timestamp||(new Date).getTime();return a}
h.Fb=function(a,b,c,d){this.rd++;var e=new K(a);b=this.De?this.De(a,b):b;a=[];d?c?(b=na(b,function(a){return L(a)}),a=rf(this.O,e,b,d)):(b=L(b),a=nf(this.O,e,b,d)):c?(d=na(b,function(a){return L(a)}),a=mf(this.O,e,d)):(d=L(b),a=jf(this.O,new Ub(ze,e,d)));d=e;0<a.length&&(d=Mh(this,e));zb(this.ea,d,a)};h.Tc=function(a){Jh(this,"connected",a);!1===a&&Nh(this)};h.Ne=function(a){var b=this;Yc(a,function(a,d){Jh(b,d,a)})};h.Ke=function(a){Jh(this,"authenticated",a)};
function Jh(a,b,c){b=new K("/.info/"+b);c=L(c);var d=a.Ce;d.Td=d.Td.G(b,c);c=jf(a.Bd,new Ub(ze,b,c));zb(a.ea,b,c)}h.Jb=function(a,b,c,d){this.f("set",{path:a.toString(),value:b,Ug:c});var e=Lh(this);b=L(b,c);var e=sc(b,e),f=this.Gd++,e=hf(this.O,a,e,f,!0);vb(this.ea,e);var g=this;this.ca.put(a.toString(),b.K(!0),function(b,c){var e="ok"===b;e||Q("set at "+a+" failed: "+b);e=lf(g.O,f,!e);zb(g.ea,a,e);Oh(d,b,c)});e=Ph(this,a);Mh(this,e);zb(this.ea,e,[])};
h.update=function(a,b,c){this.f("update",{path:a.toString(),value:b});var d=!0,e=Lh(this),f={};r(b,function(a,b){d=!1;var c=L(a);f[b]=sc(c,e)});if(d)Bb("update() called with empty data.  Don't do anything."),Oh(c,"ok");else{var g=this.Gd++,k=kf(this.O,a,f,g);vb(this.ea,k);var l=this;this.ca.tf(a.toString(),b,function(b,d){var e="ok"===b;e||Q("update at "+a+" failed: "+b);var e=lf(l.O,g,!e),f=a;0<e.length&&(f=Mh(l,a));zb(l.ea,f,e);Oh(c,b,d)});b=Ph(this,a);Mh(this,b);zb(this.ea,a,[])}};
function Nh(a){a.f("onDisconnectEvents");var b=Lh(a),c=[];rc(pc(a.ka,b),F,function(b,e){c=c.concat(jf(a.O,new Ub(ze,b,e)));var f=Ph(a,b);Mh(a,f)});a.ka=new qc;zb(a.ea,F,c)}h.Id=function(a,b){var c=this;this.ca.Id(a.toString(),function(d,e){"ok"===d&&eg(c.ka,a);Oh(b,d,e)})};function Qh(a,b,c,d){var e=L(c);a.ca.Le(b.toString(),e.K(!0),function(c,g){"ok"===c&&a.ka.mc(b,e);Oh(d,c,g)})}function Rh(a,b,c,d,e){var f=L(c,d);a.ca.Le(b.toString(),f.K(!0),function(c,d){"ok"===c&&a.ka.mc(b,f);Oh(e,c,d)})}
function Sh(a,b,c,d){var e=!0,f;for(f in c)e=!1;e?(Bb("onDisconnect().update() called with empty data.  Don't do anything."),Oh(d,"ok")):a.ca.xf(b.toString(),c,function(e,f){if("ok"===e)for(var l in c){var m=L(c[l]);a.ka.mc(b.w(l),m)}Oh(d,e,f)})}function Th(a,b,c){c=".info"===O(b.path)?a.Bd.Ob(b,c):a.O.Ob(b,c);xb(a.ea,b.path,c)}h.xb=function(){this.Ra&&this.Ra.xb()};h.qc=function(){this.Ra&&this.Ra.qc()};
h.We=function(a){if("undefined"!==typeof console){a?(this.Zd||(this.Zd=new Ib(this.Va)),a=this.Zd.get()):a=this.Va.get();var b=Ra(sa(a),function(a,b){return Math.max(b.length,a)},0),c;for(c in a){for(var d=a[c],e=c.length;e<b+2;e++)c+=" ";console.log(c+d)}}};h.Xe=function(a){Lb(this.Va,a);this.Mg.Jf[a]=!0};h.f=function(a){var b="";this.Ra&&(b=this.Ra.id+":");Bb(b,arguments)};
function Oh(a,b,c){a&&Cb(function(){if("ok"==b)a(null);else{var d=(b||"error").toUpperCase(),e=d;c&&(e+=": "+c);e=Error(e);e.code=d;a(e)}})};function Uh(a,b,c,d,e){function f(){}a.f("transaction on "+b);var g=new U(a,b);g.Db("value",f);c={path:b,update:c,J:d,status:null,Af:Gc(),af:e,Hf:0,he:function(){g.hc("value",f)},ke:null,Aa:null,od:null,pd:null,qd:null};d=a.O.ua(b,void 0)||C;c.od=d;d=c.update(d.K());if(n(d)){Sf("transaction failed: Data returned ",d,c.path);c.status=1;e=Df(a.tc,b);var k=e.Ba()||[];k.push(c);Ef(e,k);"object"===typeof d&&null!==d&&u(d,".priority")?(k=w(d,".priority"),J(Qf(k),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):
k=(a.O.ua(b)||C).A().K();e=Lh(a);d=L(d,k);e=sc(d,e);c.pd=d;c.qd=e;c.Aa=a.Gd++;c=hf(a.O,b,e,c.Aa,c.af);zb(a.ea,b,c);Vh(a)}else c.he(),c.pd=null,c.qd=null,c.J&&(a=new S(c.od,new U(a,c.path),M),c.J(null,!1,a))}function Vh(a,b){var c=b||a.tc;b||Wh(a,c);if(null!==c.Ba()){var d=Xh(a,c);J(0<d.length,"Sending zero length transaction queue");Sa(d,function(a){return 1===a.status})&&Yh(a,c.path(),d)}else c.vd()&&c.U(function(b){Vh(a,b)})}
function Yh(a,b,c){for(var d=Qa(c,function(a){return a.Aa}),e=a.O.ua(b,d)||C,d=e,e=e.hash(),f=0;f<c.length;f++){var g=c[f];J(1===g.status,"tryToSendTransactionQueue_: items in queue should all be run.");g.status=2;g.Hf++;var k=N(b,g.path),d=d.G(k,g.pd)}d=d.K(!0);a.ca.put(b.toString(),d,function(d){a.f("transaction put response",{path:b.toString(),status:d});var e=[];if("ok"===d){d=[];for(f=0;f<c.length;f++){c[f].status=3;e=e.concat(lf(a.O,c[f].Aa));if(c[f].J){var g=c[f].qd,k=new U(a,c[f].path);d.push(q(c[f].J,
null,null,!0,new S(g,k,M)))}c[f].he()}Wh(a,Df(a.tc,b));Vh(a);zb(a.ea,b,e);for(f=0;f<d.length;f++)Cb(d[f])}else{if("datastale"===d)for(f=0;f<c.length;f++)c[f].status=4===c[f].status?5:1;else for(Q("transaction at "+b.toString()+" failed: "+d),f=0;f<c.length;f++)c[f].status=5,c[f].ke=d;Mh(a,b)}},e)}function Mh(a,b){var c=Zh(a,b),d=c.path(),c=Xh(a,c);$h(a,c,d);return d}
function $h(a,b,c){if(0!==b.length){for(var d=[],e=[],f=Qa(b,function(a){return a.Aa}),g=0;g<b.length;g++){var k=b[g],l=N(c,k.path),m=!1,v;J(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null.");if(5===k.status)m=!0,v=k.ke,e=e.concat(lf(a.O,k.Aa,!0));else if(1===k.status)if(25<=k.Hf)m=!0,v="maxretry",e=e.concat(lf(a.O,k.Aa,!0));else{var y=a.O.ua(k.path,f)||C;k.od=y;var I=b[g].update(y.K());n(I)?(Sf("transaction failed: Data returned ",I,k.path),l=L(I),"object"===typeof I&&null!=
I&&u(I,".priority")||(l=l.da(y.A())),y=k.Aa,I=Lh(a),I=sc(l,I),k.pd=l,k.qd=I,k.Aa=a.Gd++,Va(f,y),e=e.concat(hf(a.O,k.path,I,k.Aa,k.af)),e=e.concat(lf(a.O,y,!0))):(m=!0,v="nodata",e=e.concat(lf(a.O,k.Aa,!0)))}zb(a.ea,c,e);e=[];m&&(b[g].status=3,setTimeout(b[g].he,Math.floor(0)),b[g].J&&("nodata"===v?(k=new U(a,b[g].path),d.push(q(b[g].J,null,null,!1,new S(b[g].od,k,M)))):d.push(q(b[g].J,null,Error(v),!1,null))))}Wh(a,a.tc);for(g=0;g<d.length;g++)Cb(d[g]);Vh(a)}}
function Zh(a,b){for(var c,d=a.tc;null!==(c=O(b))&&null===d.Ba();)d=Df(d,c),b=G(b);return d}function Xh(a,b){var c=[];ai(a,b,c);c.sort(function(a,b){return a.Af-b.Af});return c}function ai(a,b,c){var d=b.Ba();if(null!==d)for(var e=0;e<d.length;e++)c.push(d[e]);b.U(function(b){ai(a,b,c)})}function Wh(a,b){var c=b.Ba();if(c){for(var d=0,e=0;e<c.length;e++)3!==c[e].status&&(c[d]=c[e],d++);c.length=d;Ef(b,0<c.length?c:null)}b.U(function(b){Wh(a,b)})}
function Ph(a,b){var c=Zh(a,b).path(),d=Df(a.tc,b);Hf(d,function(b){bi(a,b)});bi(a,d);Gf(d,function(b){bi(a,b)});return c}
function bi(a,b){var c=b.Ba();if(null!==c){for(var d=[],e=[],f=-1,g=0;g<c.length;g++)4!==c[g].status&&(2===c[g].status?(J(f===g-1,"All SENT items should be at beginning of queue."),f=g,c[g].status=4,c[g].ke="set"):(J(1===c[g].status,"Unexpected transaction status in abort"),c[g].he(),e=e.concat(lf(a.O,c[g].Aa,!0)),c[g].J&&d.push(q(c[g].J,null,Error("set"),!1,null))));-1===f?Ef(b,null):c.length=f+1;zb(a.ea,b.path(),e);for(g=0;g<d.length;g++)Cb(d[g])}};function W(){this.nc={};this.Mf=!1}ca(W);W.prototype.xb=function(){for(var a in this.nc)this.nc[a].xb()};W.prototype.interrupt=W.prototype.xb;W.prototype.qc=function(){for(var a in this.nc)this.nc[a].qc()};W.prototype.resume=W.prototype.qc;W.prototype.ve=function(){this.Mf=!0};function X(a,b){this.bd=a;this.qa=b}X.prototype.cancel=function(a){x("Firebase.onDisconnect().cancel",0,1,arguments.length);A("Firebase.onDisconnect().cancel",1,a,!0);this.bd.Id(this.qa,a||null)};X.prototype.cancel=X.prototype.cancel;X.prototype.remove=function(a){x("Firebase.onDisconnect().remove",0,1,arguments.length);Yf("Firebase.onDisconnect().remove",this.qa);A("Firebase.onDisconnect().remove",1,a,!0);Qh(this.bd,this.qa,null,a)};X.prototype.remove=X.prototype.remove;
X.prototype.set=function(a,b){x("Firebase.onDisconnect().set",1,2,arguments.length);Yf("Firebase.onDisconnect().set",this.qa);Rf("Firebase.onDisconnect().set",a,this.qa,!1);A("Firebase.onDisconnect().set",2,b,!0);Qh(this.bd,this.qa,a,b)};X.prototype.set=X.prototype.set;
X.prototype.Jb=function(a,b,c){x("Firebase.onDisconnect().setWithPriority",2,3,arguments.length);Yf("Firebase.onDisconnect().setWithPriority",this.qa);Rf("Firebase.onDisconnect().setWithPriority",a,this.qa,!1);Uf("Firebase.onDisconnect().setWithPriority",2,b);A("Firebase.onDisconnect().setWithPriority",3,c,!0);Rh(this.bd,this.qa,a,b,c)};X.prototype.setWithPriority=X.prototype.Jb;
X.prototype.update=function(a,b){x("Firebase.onDisconnect().update",1,2,arguments.length);Yf("Firebase.onDisconnect().update",this.qa);if(ea(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;Q("Passing an Array to Firebase.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Tf("Firebase.onDisconnect().update",a,this.qa);A("Firebase.onDisconnect().update",2,b,!0);
Sh(this.bd,this.qa,a,b)};X.prototype.update=X.prototype.update;function Y(a,b,c,d){this.k=a;this.path=b;this.n=c;this.jc=d}
function ci(a){var b=null,c=null;a.la&&(b=od(a));a.na&&(c=qd(a));if(a.g===Vd){if(a.la){if("[MIN_NAME]"!=nd(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==typeof b)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}if(a.na){if("[MAX_NAME]"!=pd(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==
typeof c)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}}else if(a.g===M){if(null!=b&&!Qf(b)||null!=c&&!Qf(c))throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).");}else if(J(a.g instanceof Rd||a.g===Yd,"unknown index type."),null!=b&&"object"===typeof b||null!=c&&"object"===typeof c)throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.");
}function di(a){if(a.la&&a.na&&a.ia&&(!a.ia||""===a.Nb))throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.");}function ei(a,b){if(!0===a.jc)throw Error(b+": You can't combine multiple orderBy calls.");}Y.prototype.lc=function(){x("Query.ref",0,0,arguments.length);return new U(this.k,this.path)};Y.prototype.ref=Y.prototype.lc;
Y.prototype.Db=function(a,b,c,d){x("Query.on",2,4,arguments.length);Vf("Query.on",a,!1);A("Query.on",2,b,!1);var e=fi("Query.on",c,d);if("value"===a)Th(this.k,this,new jd(b,e.cancel||null,e.Ma||null));else{var f={};f[a]=b;Th(this.k,this,new kd(f,e.cancel,e.Ma))}return b};Y.prototype.on=Y.prototype.Db;
Y.prototype.hc=function(a,b,c){x("Query.off",0,3,arguments.length);Vf("Query.off",a,!0);A("Query.off",2,b,!0);lb("Query.off",3,c);var d=null,e=null;"value"===a?d=new jd(b||null,null,c||null):a&&(b&&(e={},e[a]=b),d=new kd(e,null,c||null));e=this.k;d=".info"===O(this.path)?e.Bd.kb(this,d):e.O.kb(this,d);xb(e.ea,this.path,d)};Y.prototype.off=Y.prototype.hc;
Y.prototype.xg=function(a,b){function c(g){f&&(f=!1,e.hc(a,c),b.call(d.Ma,g))}x("Query.once",2,4,arguments.length);Vf("Query.once",a,!1);A("Query.once",2,b,!1);var d=fi("Query.once",arguments[2],arguments[3]),e=this,f=!0;this.Db(a,c,function(b){e.hc(a,c);d.cancel&&d.cancel.call(d.Ma,b)})};Y.prototype.once=Y.prototype.xg;
Y.prototype.Ge=function(a){Q("Query.limit() being deprecated. Please use Query.limitToFirst() or Query.limitToLast() instead.");x("Query.limit",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limit: First argument must be a positive integer.");if(this.n.ia)throw Error("Query.limit: Limit was already set (by another call to limit, limitToFirst, orlimitToLast.");var b=this.n.Ge(a);di(b);return new Y(this.k,this.path,b,this.jc)};Y.prototype.limit=Y.prototype.Ge;
Y.prototype.He=function(a){x("Query.limitToFirst",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToFirst: First argument must be a positive integer.");if(this.n.ia)throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new Y(this.k,this.path,this.n.He(a),this.jc)};Y.prototype.limitToFirst=Y.prototype.He;
Y.prototype.Ie=function(a){x("Query.limitToLast",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToLast: First argument must be a positive integer.");if(this.n.ia)throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new Y(this.k,this.path,this.n.Ie(a),this.jc)};Y.prototype.limitToLast=Y.prototype.Ie;
Y.prototype.yg=function(a){x("Query.orderByChild",1,1,arguments.length);if("$key"===a)throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');if("$priority"===a)throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');if("$value"===a)throw Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');Wf("Query.orderByChild",1,a,!1);ei(this,"Query.orderByChild");var b=be(this.n,new Rd(a));ci(b);return new Y(this.k,
this.path,b,!0)};Y.prototype.orderByChild=Y.prototype.yg;Y.prototype.zg=function(){x("Query.orderByKey",0,0,arguments.length);ei(this,"Query.orderByKey");var a=be(this.n,Vd);ci(a);return new Y(this.k,this.path,a,!0)};Y.prototype.orderByKey=Y.prototype.zg;Y.prototype.Ag=function(){x("Query.orderByPriority",0,0,arguments.length);ei(this,"Query.orderByPriority");var a=be(this.n,M);ci(a);return new Y(this.k,this.path,a,!0)};Y.prototype.orderByPriority=Y.prototype.Ag;
Y.prototype.Bg=function(){x("Query.orderByValue",0,0,arguments.length);ei(this,"Query.orderByValue");var a=be(this.n,Yd);ci(a);return new Y(this.k,this.path,a,!0)};Y.prototype.orderByValue=Y.prototype.Bg;
Y.prototype.Yd=function(a,b){x("Query.startAt",0,2,arguments.length);Rf("Query.startAt",a,this.path,!0);Wf("Query.startAt",2,b,!0);var c=this.n.Yd(a,b);di(c);ci(c);if(this.n.la)throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");n(a)||(b=a=null);return new Y(this.k,this.path,c,this.jc)};Y.prototype.startAt=Y.prototype.Yd;
Y.prototype.sd=function(a,b){x("Query.endAt",0,2,arguments.length);Rf("Query.endAt",a,this.path,!0);Wf("Query.endAt",2,b,!0);var c=this.n.sd(a,b);di(c);ci(c);if(this.n.na)throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");return new Y(this.k,this.path,c,this.jc)};Y.prototype.endAt=Y.prototype.sd;
Y.prototype.eg=function(a,b){x("Query.equalTo",1,2,arguments.length);Rf("Query.equalTo",a,this.path,!1);Wf("Query.equalTo",2,b,!0);if(this.n.la)throw Error("Query.equalTo: Starting point was already set (by another call to endAt or equalTo).");if(this.n.na)throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");return this.Yd(a,b).sd(a,b)};Y.prototype.equalTo=Y.prototype.eg;
Y.prototype.toString=function(){x("Query.toString",0,0,arguments.length);for(var a=this.path,b="",c=a.Y;c<a.o.length;c++)""!==a.o[c]&&(b+="/"+encodeURIComponent(String(a.o[c])));a=this.k.toString()+(b||"/");b=jb(ee(this.n));return a+=b.replace(/^&/,"")};Y.prototype.toString=Y.prototype.toString;Y.prototype.wa=function(){var a=Wc(ce(this.n));return"{}"===a?"default":a};
function fi(a,b,c){var d={cancel:null,Ma:null};if(b&&c)d.cancel=b,A(a,3,d.cancel,!0),d.Ma=c,lb(a,4,d.Ma);else if(b)if("object"===typeof b&&null!==b)d.Ma=b;else if("function"===typeof b)d.cancel=b;else throw Error(z(a,3,!0)+" must either be a cancel callback or a context object.");return d};var Z={};Z.vc=vh;Z.DataConnection=Z.vc;vh.prototype.Lg=function(a,b){this.Da("q",{p:a},b)};Z.vc.prototype.simpleListen=Z.vc.prototype.Lg;vh.prototype.dg=function(a,b){this.Da("echo",{d:a},b)};Z.vc.prototype.echo=Z.vc.prototype.dg;vh.prototype.interrupt=vh.prototype.xb;Z.Pf=jh;Z.RealTimeConnection=Z.Pf;jh.prototype.sendRequest=jh.prototype.Da;jh.prototype.close=jh.prototype.close;
Z.lg=function(a){var b=vh.prototype.put;vh.prototype.put=function(c,d,e,f){n(f)&&(f=a());b.call(this,c,d,e,f)};return function(){vh.prototype.put=b}};Z.hijackHash=Z.lg;Z.Of=Ec;Z.ConnectionTarget=Z.Of;Z.wa=function(a){return a.wa()};Z.queryIdentifier=Z.wa;Z.ng=function(a){return a.k.Ra.aa};Z.listens=Z.ng;Z.ve=function(a){a.ve()};Z.forceRestClient=Z.ve;function U(a,b){var c,d,e;if(a instanceof Ih)c=a,d=b;else{x("new Firebase",1,2,arguments.length);d=Rc(arguments[0]);c=d.Ng;"firebase"===d.domain&&Qc(d.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");c||Qc("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com");d.lb||"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Q("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
c=new Ec(d.host,d.lb,c,"ws"===d.scheme||"wss"===d.scheme);d=new K(d.$c);e=d.toString();var f;!(f=!p(c.host)||0===c.host.length||!Pf(c.Bb))&&(f=0!==e.length)&&(e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),f=!(p(e)&&0!==e.length&&!Of.test(e)));if(f)throw Error(z("new Firebase",1,!1)+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');if(b)if(b instanceof W)e=b;else if(p(b))e=W.Wb(),c.Nd=b;else throw Error("Expected a valid Firebase.Context for second argument to new Firebase()");
else e=W.Wb();f=c.toString();var g=w(e.nc,f);g||(g=new Ih(c,e.Mf),e.nc[f]=g);c=g}Y.call(this,c,d,$d,!1)}ma(U,Y);var gi=U,hi=["Firebase"],ii=aa;hi[0]in ii||!ii.execScript||ii.execScript("var "+hi[0]);for(var ji;hi.length&&(ji=hi.shift());)!hi.length&&n(gi)?ii[ji]=gi:ii=ii[ji]?ii[ji]:ii[ji]={};U.prototype.name=function(){Q("Firebase.name() being deprecated. Please use Firebase.key() instead.");x("Firebase.name",0,0,arguments.length);return this.key()};U.prototype.name=U.prototype.name;
U.prototype.key=function(){x("Firebase.key",0,0,arguments.length);return this.path.e()?null:vc(this.path)};U.prototype.key=U.prototype.key;U.prototype.w=function(a){x("Firebase.child",1,1,arguments.length);if(ga(a))a=String(a);else if(!(a instanceof K))if(null===O(this.path)){var b=a;b&&(b=b.replace(/^\/*\.info(\/|$)/,"/"));Xf("Firebase.child",b)}else Xf("Firebase.child",a);return new U(this.k,this.path.w(a))};U.prototype.child=U.prototype.w;
U.prototype.parent=function(){x("Firebase.parent",0,0,arguments.length);var a=this.path.parent();return null===a?null:new U(this.k,a)};U.prototype.parent=U.prototype.parent;U.prototype.root=function(){x("Firebase.ref",0,0,arguments.length);for(var a=this;null!==a.parent();)a=a.parent();return a};U.prototype.root=U.prototype.root;
U.prototype.set=function(a,b){x("Firebase.set",1,2,arguments.length);Yf("Firebase.set",this.path);Rf("Firebase.set",a,this.path,!1);A("Firebase.set",2,b,!0);this.k.Jb(this.path,a,null,b||null)};U.prototype.set=U.prototype.set;
U.prototype.update=function(a,b){x("Firebase.update",1,2,arguments.length);Yf("Firebase.update",this.path);if(ea(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;Q("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Tf("Firebase.update",a,this.path);A("Firebase.update",2,b,!0);this.k.update(this.path,a,b||null)};U.prototype.update=U.prototype.update;
U.prototype.Jb=function(a,b,c){x("Firebase.setWithPriority",2,3,arguments.length);Yf("Firebase.setWithPriority",this.path);Rf("Firebase.setWithPriority",a,this.path,!1);Uf("Firebase.setWithPriority",2,b);A("Firebase.setWithPriority",3,c,!0);if(".length"===this.key()||".keys"===this.key())throw"Firebase.setWithPriority failed: "+this.key()+" is a read-only object.";this.k.Jb(this.path,a,b,c||null)};U.prototype.setWithPriority=U.prototype.Jb;
U.prototype.remove=function(a){x("Firebase.remove",0,1,arguments.length);Yf("Firebase.remove",this.path);A("Firebase.remove",1,a,!0);this.set(null,a)};U.prototype.remove=U.prototype.remove;
U.prototype.transaction=function(a,b,c){x("Firebase.transaction",1,3,arguments.length);Yf("Firebase.transaction",this.path);A("Firebase.transaction",1,a,!1);A("Firebase.transaction",2,b,!0);if(n(c)&&"boolean"!=typeof c)throw Error(z("Firebase.transaction",3,!0)+"must be a boolean.");if(".length"===this.key()||".keys"===this.key())throw"Firebase.transaction failed: "+this.key()+" is a read-only object.";"undefined"===typeof c&&(c=!0);Uh(this.k,this.path,a,b||null,c)};U.prototype.transaction=U.prototype.transaction;
U.prototype.Ig=function(a,b){x("Firebase.setPriority",1,2,arguments.length);Yf("Firebase.setPriority",this.path);Uf("Firebase.setPriority",1,a);A("Firebase.setPriority",2,b,!0);this.k.Jb(this.path.w(".priority"),a,null,b)};U.prototype.setPriority=U.prototype.Ig;
U.prototype.push=function(a,b){x("Firebase.push",0,2,arguments.length);Yf("Firebase.push",this.path);Rf("Firebase.push",a,this.path,!0);A("Firebase.push",2,b,!0);var c=Kh(this.k),c=Kf(c),c=this.w(c);"undefined"!==typeof a&&null!==a&&c.set(a,b);return c};U.prototype.push=U.prototype.push;U.prototype.jb=function(){Yf("Firebase.onDisconnect",this.path);return new X(this.k,this.path)};U.prototype.onDisconnect=U.prototype.jb;
U.prototype.P=function(a,b,c){Q("FirebaseRef.auth() being deprecated. Please use FirebaseRef.authWithCustomToken() instead.");x("Firebase.auth",1,3,arguments.length);Zf("Firebase.auth",a);A("Firebase.auth",2,b,!0);A("Firebase.auth",3,b,!0);Jg(this.k.P,a,{},{remember:"none"},b,c)};U.prototype.auth=U.prototype.P;U.prototype.fe=function(a){x("Firebase.unauth",0,1,arguments.length);A("Firebase.unauth",1,a,!0);Kg(this.k.P,a)};U.prototype.unauth=U.prototype.fe;
U.prototype.xe=function(){x("Firebase.getAuth",0,0,arguments.length);return this.k.P.xe()};U.prototype.getAuth=U.prototype.xe;U.prototype.rg=function(a,b){x("Firebase.onAuth",1,2,arguments.length);A("Firebase.onAuth",1,a,!1);lb("Firebase.onAuth",2,b);this.k.P.Db("auth_status",a,b)};U.prototype.onAuth=U.prototype.rg;U.prototype.qg=function(a,b){x("Firebase.offAuth",1,2,arguments.length);A("Firebase.offAuth",1,a,!1);lb("Firebase.offAuth",2,b);this.k.P.hc("auth_status",a,b)};U.prototype.offAuth=U.prototype.qg;
U.prototype.Tf=function(a,b,c){x("Firebase.authWithCustomToken",2,3,arguments.length);Zf("Firebase.authWithCustomToken",a);A("Firebase.authWithCustomToken",2,b,!1);ag("Firebase.authWithCustomToken",3,c,!0);Jg(this.k.P,a,{},c||{},b)};U.prototype.authWithCustomToken=U.prototype.Tf;U.prototype.Uf=function(a,b,c){x("Firebase.authWithOAuthPopup",2,3,arguments.length);$f("Firebase.authWithOAuthPopup",1,a);A("Firebase.authWithOAuthPopup",2,b,!1);ag("Firebase.authWithOAuthPopup",3,c,!0);Og(this.k.P,a,c,b)};
U.prototype.authWithOAuthPopup=U.prototype.Uf;U.prototype.Vf=function(a,b,c){x("Firebase.authWithOAuthRedirect",2,3,arguments.length);$f("Firebase.authWithOAuthRedirect",1,a);A("Firebase.authWithOAuthRedirect",2,b,!1);ag("Firebase.authWithOAuthRedirect",3,c,!0);var d=this.k.P;Mg(d);var e=[vg],f=ig(c);"anonymous"===a||"firebase"===a?R(b,xg("TRANSPORT_UNAVAILABLE")):(P.set("redirect_client_options",f.nd),Ng(d,e,"/auth/"+a,f,b))};U.prototype.authWithOAuthRedirect=U.prototype.Vf;
U.prototype.Wf=function(a,b,c,d){x("Firebase.authWithOAuthToken",3,4,arguments.length);$f("Firebase.authWithOAuthToken",1,a);A("Firebase.authWithOAuthToken",3,c,!1);ag("Firebase.authWithOAuthToken",4,d,!0);p(b)?($f("Firebase.authWithOAuthToken",2,b),Lg(this.k.P,a+"/token",{access_token:b},d,c)):(ag("Firebase.authWithOAuthToken",2,b,!1),Lg(this.k.P,a+"/token",b,d,c))};U.prototype.authWithOAuthToken=U.prototype.Wf;
U.prototype.Sf=function(a,b){x("Firebase.authAnonymously",1,2,arguments.length);A("Firebase.authAnonymously",1,a,!1);ag("Firebase.authAnonymously",2,b,!0);Lg(this.k.P,"anonymous",{},b,a)};U.prototype.authAnonymously=U.prototype.Sf;
U.prototype.Xf=function(a,b,c){x("Firebase.authWithPassword",2,3,arguments.length);ag("Firebase.authWithPassword",1,a,!1);bg("Firebase.authWithPassword",a,"email");bg("Firebase.authWithPassword",a,"password");A("Firebase.authAnonymously",2,b,!1);ag("Firebase.authAnonymously",3,c,!0);Lg(this.k.P,"password",a,c,b)};U.prototype.authWithPassword=U.prototype.Xf;
U.prototype.se=function(a,b){x("Firebase.createUser",2,2,arguments.length);ag("Firebase.createUser",1,a,!1);bg("Firebase.createUser",a,"email");bg("Firebase.createUser",a,"password");A("Firebase.createUser",2,b,!1);this.k.P.se(a,b)};U.prototype.createUser=U.prototype.se;U.prototype.Re=function(a,b){x("Firebase.removeUser",2,2,arguments.length);ag("Firebase.removeUser",1,a,!1);bg("Firebase.removeUser",a,"email");bg("Firebase.removeUser",a,"password");A("Firebase.removeUser",2,b,!1);this.k.P.Re(a,b)};
U.prototype.removeUser=U.prototype.Re;U.prototype.pe=function(a,b){x("Firebase.changePassword",2,2,arguments.length);ag("Firebase.changePassword",1,a,!1);bg("Firebase.changePassword",a,"email");bg("Firebase.changePassword",a,"oldPassword");bg("Firebase.changePassword",a,"newPassword");A("Firebase.changePassword",2,b,!1);this.k.P.pe(a,b)};U.prototype.changePassword=U.prototype.pe;
U.prototype.oe=function(a,b){x("Firebase.changeEmail",2,2,arguments.length);ag("Firebase.changeEmail",1,a,!1);bg("Firebase.changeEmail",a,"oldEmail");bg("Firebase.changeEmail",a,"newEmail");bg("Firebase.changeEmail",a,"password");A("Firebase.changeEmail",2,b,!1);this.k.P.oe(a,b)};U.prototype.changeEmail=U.prototype.oe;
U.prototype.Se=function(a,b){x("Firebase.resetPassword",2,2,arguments.length);ag("Firebase.resetPassword",1,a,!1);bg("Firebase.resetPassword",a,"email");A("Firebase.resetPassword",2,b,!1);this.k.P.Se(a,b)};U.prototype.resetPassword=U.prototype.Se;U.goOffline=function(){x("Firebase.goOffline",0,0,arguments.length);W.Wb().xb()};U.goOnline=function(){x("Firebase.goOnline",0,0,arguments.length);W.Wb().qc()};
function Nc(a,b){J(!b||!0===a||!1===a,"Can't turn on custom loggers persistently.");!0===a?("undefined"!==typeof console&&("function"===typeof console.log?Ab=q(console.log,console):"object"===typeof console.log&&(Ab=function(a){console.log(a)})),b&&P.set("logging_enabled",!0)):a?Ab=a:(Ab=null,P.remove("logging_enabled"))}U.enableLogging=Nc;U.ServerValue={TIMESTAMP:{".sv":"timestamp"}};U.SDK_VERSION="2.2.3";U.INTERNAL=V;U.Context=W;U.TEST_ACCESS=Z;})();


/*!
 * AngularFire is the officially supported AngularJS binding for Firebase. Firebase
 * is a full backend so you don't need servers to build your Angular app. AngularFire
 * provides you with the $firebase service which allows you to easily keep your $scope
 * variables in sync with your Firebase backend.
 *
 * AngularFire 1.0.0
 * https://github.com/firebase/angularfire/
 * Date: 03/04/2015
 * License: MIT
 */
!function(a){"use strict";angular.module("firebase",[]).value("Firebase",a.Firebase).value("firebaseBatchDelay",50)}(window),function(){"use strict";angular.module("firebase").factory("$firebaseArray",["$log","$firebaseUtils",function(a,b){function c(a){if(!(this instanceof c))return new c(a);var e=this;return this._observers=[],this.$list=[],this._ref=a,this._sync=new d(this),b.assertValidRef(a,"Must pass a valid Firebase reference to $firebaseArray (not a string or URL)"),this._indexCache={},b.getPublicMethods(e,function(a,b){e.$list[b]=a.bind(e)}),this._sync.init(this.$list),this.$list}function d(c){function d(a){if(!p.isDestroyed){p.isDestroyed=!0;var b=c.$ref();b.off("child_added",i),b.off("child_moved",k),b.off("child_changed",j),b.off("child_removed",l),c=null,o(a||"destroyed")}}function e(b){var d=c.$ref();d.on("child_added",i,n),d.on("child_moved",k,n),d.on("child_changed",j,n),d.on("child_removed",l,n),d.once("value",function(c){angular.isArray(c.val())&&a.warn("Storing data using array indices in Firebase can result in unexpected behavior. See https://www.firebase.com/docs/web/guide/understanding-data.html#section-arrays-in-firebase for more information."),o(null,b)},o)}function f(a,b){m||(m=!0,a?g.reject(a):g.resolve(b))}var g=b.defer(),h=b.batch(),i=h(function(a,b){var d=c.$$added(a,b);d&&c.$$process("child_added",d,b)}),j=h(function(a){var d=c.$getRecord(b.getKey(a));if(d){var e=c.$$updated(a);e&&c.$$process("child_changed",d)}}),k=h(function(a,d){var e=c.$getRecord(b.getKey(a));if(e){var f=c.$$moved(a,d);f&&c.$$process("child_moved",e,d)}}),l=h(function(a){var d=c.$getRecord(b.getKey(a));if(d){var e=c.$$removed(a);e&&c.$$process("child_removed",d)}}),m=!1,n=h(function(a){f(a),c.$$error(a)}),o=h(f),p={destroy:d,isDestroyed:!1,init:e,ready:function(){return g.promise}};return p}return c.prototype={$add:function(a){this._assertNotDestroyed("$add");var c=b.defer(),d=this.$ref().ref().push();return d.set(b.toJSON(a),b.makeNodeResolver(c)),c.promise.then(function(){return d})},$save:function(a){this._assertNotDestroyed("$save");var c=this,d=c._resolveItem(a),e=c.$keyAt(d);if(null!==e){var f=c.$ref().ref().child(e),g=b.toJSON(d);return b.doSet(f,g).then(function(){return c.$$notify("child_changed",e),f})}return b.reject("Invalid record; could determine key for "+a)},$remove:function(a){this._assertNotDestroyed("$remove");var c=this.$keyAt(a);if(null!==c){var d=this.$ref().ref().child(c);return b.doRemove(d).then(function(){return d})}return b.reject("Invalid record; could not determine key for "+a)},$keyAt:function(a){var b=this._resolveItem(a);return this.$$getKey(b)},$indexFor:function(a){var b=this,c=b._indexCache;if(!c.hasOwnProperty(a)||b.$keyAt(c[a])!==a){var d=b.$list.findIndex(function(c){return b.$$getKey(c)===a});-1!==d&&(c[a]=d)}return c.hasOwnProperty(a)?c[a]:-1},$loaded:function(a,b){var c=this._sync.ready();return arguments.length&&(c=c.then.call(c,a,b)),c},$ref:function(){return this._ref},$watch:function(a,b){var c=this._observers;return c.push([a,b]),function(){var d=c.findIndex(function(c){return c[0]===a&&c[1]===b});d>-1&&c.splice(d,1)}},$destroy:function(b){this._isDestroyed||(this._isDestroyed=!0,this._sync.destroy(b),this.$list.length=0,a.debug("destroy called for FirebaseArray: "+this.$ref().ref().toString()))},$getRecord:function(a){var b=this.$indexFor(a);return b>-1?this.$list[b]:null},$$added:function(a){var c=this.$indexFor(b.getKey(a));if(-1===c){var d=a.val();return angular.isObject(d)||(d={$value:d}),d.$id=b.getKey(a),d.$priority=a.getPriority(),b.applyDefaults(d,this.$$defaults),d}return!1},$$removed:function(a){return this.$indexFor(b.getKey(a))>-1},$$updated:function(a){var c=!1,d=this.$getRecord(b.getKey(a));return angular.isObject(d)&&(c=b.updateRec(d,a),b.applyDefaults(d,this.$$defaults)),c},$$moved:function(a){var c=this.$getRecord(b.getKey(a));return angular.isObject(c)?(c.$priority=a.getPriority(),!0):!1},$$error:function(b){a.error(b),this.$destroy(b)},$$getKey:function(a){return angular.isObject(a)?a.$id:null},$$process:function(a,b,c){var d,e=this.$$getKey(b),f=!1;switch(a){case"child_added":d=this.$indexFor(e);break;case"child_moved":d=this.$indexFor(e),this._spliceOut(e);break;case"child_removed":f=null!==this._spliceOut(e);break;case"child_changed":f=!0;break;default:throw new Error("Invalid event type: "+a)}return angular.isDefined(d)&&(f=this._addAfter(b,c)!==d),f&&this.$$notify(a,e,c),f},$$notify:function(a,b,c){var d={event:a,key:b};angular.isDefined(c)&&(d.prevChild=c),angular.forEach(this._observers,function(a){a[0].call(a[1],d)})},_addAfter:function(a,b){var c;return null===b?c=0:(c=this.$indexFor(b)+1,0===c&&(c=this.$list.length)),this.$list.splice(c,0,a),this._indexCache[this.$$getKey(a)]=c,c},_spliceOut:function(a){var b=this.$indexFor(a);return b>-1?(delete this._indexCache[a],this.$list.splice(b,1)[0]):null},_resolveItem:function(a){var b=this.$list;if(angular.isNumber(a)&&a>=0&&b.length>=a)return b[a];if(angular.isObject(a)){var c=this.$$getKey(a),d=this.$getRecord(c);return d===a?d:null}return null},_assertNotDestroyed:function(a){if(this._isDestroyed)throw new Error("Cannot call "+a+" method on a destroyed $firebaseArray object")}},c.$extend=function(a,d){return 1===arguments.length&&angular.isObject(a)&&(d=a,a=function(){return c.apply(this,arguments)}),b.inherit(a,c,d)},c}]),angular.module("firebase").factory("$FirebaseArray",["$log","$firebaseArray",function(a,b){return function(){return a.warn("$FirebaseArray has been renamed. Use $firebaseArray instead."),b.apply(null,arguments)}}])}(),function(){"use strict";var a;angular.module("firebase").factory("$firebaseAuth",["$q","$firebaseUtils","$log",function(b,c,d){return function(e){var f=new a(b,c,d,e);return f.construct()}}]),a=function(a,b,c,d){if(this._q=a,this._utils=b,this._log=c,"string"==typeof d)throw new Error("Please provide a Firebase reference instead of a URL when creating a `$firebaseAuth` object.");this._ref=d},a.prototype={construct:function(){return this._object={$authWithCustomToken:this.authWithCustomToken.bind(this),$authAnonymously:this.authAnonymously.bind(this),$authWithPassword:this.authWithPassword.bind(this),$authWithOAuthPopup:this.authWithOAuthPopup.bind(this),$authWithOAuthRedirect:this.authWithOAuthRedirect.bind(this),$authWithOAuthToken:this.authWithOAuthToken.bind(this),$unauth:this.unauth.bind(this),$onAuth:this.onAuth.bind(this),$getAuth:this.getAuth.bind(this),$requireAuth:this.requireAuth.bind(this),$waitForAuth:this.waitForAuth.bind(this),$createUser:this.createUser.bind(this),$changePassword:this.changePassword.bind(this),$changeEmail:this.changeEmail.bind(this),$removeUser:this.removeUser.bind(this),$resetPassword:this.resetPassword.bind(this)},this._object},authWithCustomToken:function(a,b){var c=this._q.defer();try{this._ref.authWithCustomToken(a,this._utils.makeNodeResolver(c),b)}catch(d){c.reject(d)}return c.promise},authAnonymously:function(a){var b=this._q.defer();try{this._ref.authAnonymously(this._utils.makeNodeResolver(b),a)}catch(c){b.reject(c)}return b.promise},authWithPassword:function(a,b){var c=this._q.defer();try{this._ref.authWithPassword(a,this._utils.makeNodeResolver(c),b)}catch(d){c.reject(d)}return c.promise},authWithOAuthPopup:function(a,b){var c=this._q.defer();try{this._ref.authWithOAuthPopup(a,this._utils.makeNodeResolver(c),b)}catch(d){c.reject(d)}return c.promise},authWithOAuthRedirect:function(a,b){var c=this._q.defer();try{this._ref.authWithOAuthRedirect(a,this._utils.makeNodeResolver(c),b)}catch(d){c.reject(d)}return c.promise},authWithOAuthToken:function(a,b,c){var d=this._q.defer();try{this._ref.authWithOAuthToken(a,b,this._utils.makeNodeResolver(d),c)}catch(e){d.reject(e)}return d.promise},unauth:function(){null!==this.getAuth()&&this._ref.unauth()},onAuth:function(a,b){var c=this,d=this._utils.debounce(a,b,0);return this._ref.onAuth(d),function(){c._ref.offAuth(d)}},getAuth:function(){return this._ref.getAuth()},_routerMethodOnAuthPromise:function(a){var b=this._ref;return this._utils.promise(function(c,d){function e(f){return b.offAuth(e),null!==f?void c(f):a?void d("AUTH_REQUIRED"):void c(null)}b.onAuth(e)})},requireAuth:function(){return this._routerMethodOnAuthPromise(!0)},waitForAuth:function(){return this._routerMethodOnAuthPromise(!1)},createUser:function(a){var b=this._q.defer();if("string"==typeof a)throw new Error("$createUser() expects an object containing 'email' and 'password', but got a string.");try{this._ref.createUser(a,this._utils.makeNodeResolver(b))}catch(c){b.reject(c)}return b.promise},changePassword:function(a){var b=this._q.defer();if("string"==typeof a)throw new Error("$changePassword() expects an object containing 'email', 'oldPassword', and 'newPassword', but got a string.");try{this._ref.changePassword(a,this._utils.makeNodeResolver(b))}catch(c){b.reject(c)}return b.promise},changeEmail:function(a){if("function"!=typeof this._ref.changeEmail)throw new Error("$changeEmail() expects an object containing 'oldEmail', 'newEmail', and 'password', but got a string.");var b=this._q.defer();try{this._ref.changeEmail(a,this._utils.makeNodeResolver(b))}catch(c){b.reject(c)}return b.promise},removeUser:function(a){var b=this._q.defer();if("string"==typeof a)throw new Error("$removeUser() expects an object containing 'email' and 'password', but got a string.");try{this._ref.removeUser(a,this._utils.makeNodeResolver(b))}catch(c){b.reject(c)}return b.promise},resetPassword:function(a){var b=this._q.defer();if("string"==typeof a)throw new Error("$resetPassword() expects an object containing 'email', but got a string.");try{this._ref.resetPassword(a,this._utils.makeNodeResolver(b))}catch(c){b.reject(c)}return b.promise}}}(),function(){"use strict";angular.module("firebase").factory("$firebaseObject",["$parse","$firebaseUtils","$log",function(a,b,c){function d(a){return this instanceof d?(this.$$conf={sync:new f(this,a),ref:a,binding:new e(this),listeners:[]},Object.defineProperty(this,"$$conf",{value:this.$$conf}),this.$id=b.getKey(a.ref()),this.$priority=null,b.applyDefaults(this,this.$$defaults),void this.$$conf.sync.init()):new d(a)}function e(a){this.subs=[],this.scope=null,this.key=null,this.rec=a}function f(a,d){function e(b){n.isDestroyed||(n.isDestroyed=!0,d.off("value",k),a=null,m(b||"destroyed"))}function f(){d.on("value",k,l),d.once("value",function(a){angular.isArray(a.val())&&c.warn("Storing data using array indices in Firebase can result in unexpected behavior. See https://www.firebase.com/docs/web/guide/understanding-data.html#section-arrays-in-firebase for more information. Also note that you probably wanted $firebaseArray and not $firebaseObject."),m(null)},m)}function g(b){h||(h=!0,b?i.reject(b):i.resolve(a))}var h=!1,i=b.defer(),j=b.batch(),k=j(function(b){var c=a.$$updated(b);c&&a.$$notify()}),l=j(a.$$error,a),m=j(g),n={isDestroyed:!1,destroy:e,init:f,ready:function(){return i.promise}};return n}return d.prototype={$save:function(){var a=this,c=a.$ref(),d=b.toJSON(a);return b.doSet(c,d).then(function(){return a.$$notify(),a.$ref()})},$remove:function(){var a=this;return b.trimKeys(a,{}),a.$value=null,b.doRemove(a.$ref()).then(function(){return a.$$notify(),a.$ref()})},$loaded:function(a,b){var c=this.$$conf.sync.ready();return arguments.length&&(c=c.then.call(c,a,b)),c},$ref:function(){return this.$$conf.ref},$bindTo:function(a,b){var c=this;return c.$loaded().then(function(){return c.$$conf.binding.bindTo(a,b)})},$watch:function(a,b){var c=this.$$conf.listeners;return c.push([a,b]),function(){var d=c.findIndex(function(c){return c[0]===a&&c[1]===b});d>-1&&c.splice(d,1)}},$destroy:function(a){var c=this;c.$isDestroyed||(c.$isDestroyed=!0,c.$$conf.sync.destroy(a),c.$$conf.binding.destroy(),b.each(c,function(a,b){delete c[b]}))},$$updated:function(a){var c=b.updateRec(this,a);return b.applyDefaults(this,this.$$defaults),c},$$error:function(a){c.error(a),this.$destroy(a)},$$scopeUpdated:function(a){var c=b.defer();return this.$ref().set(b.toJSON(a),b.makeNodeResolver(c)),c.promise},$$notify:function(){var a=this,b=this.$$conf.listeners.slice();angular.forEach(b,function(b){b[0].call(b[1],{event:"value",key:a.$id})})},forEach:function(a,c){return b.each(this,a,c)}},d.$extend=function(a,c){return 1===arguments.length&&angular.isObject(a)&&(c=a,a=function(){d.apply(this,arguments)}),b.inherit(a,d,c)},e.prototype={assertNotBound:function(a){if(this.scope){var d="Cannot bind to "+a+" because this instance is already bound to "+this.key+"; one binding per instance (call unbind method or create another FirebaseObject instance)";return c.error(d),b.reject(d)}},bindTo:function(c,d){function e(e){function f(a){return angular.equals(a,k)&&a.$priority===k.$priority&&a.$value===k.$value}function g(a){j.assign(c,b.scopeData(a))}function h(){var a=j(c);return[a,a.$priority,a.$value]}var i=!1,j=a(d),k=e.rec;e.scope=c,e.varName=d;var l=b.debounce(function(a){var d=b.scopeData(a);k.$$scopeUpdated(d)["finally"](function(){i=!1,d.hasOwnProperty("$value")||(delete k.$value,delete j(c).$value)})},50,500),m=function(a){a=a[0],f(a)||(i=!0,l(a))},n=function(){i||f(j(c))||g(k)};return g(k),e.subs.push(c.$on("$destroy",e.unbind.bind(e))),e.subs.push(c.$watch(h,m,!0)),e.subs.push(k.$watch(n)),e.unbind.bind(e)}return this.assertNotBound(d)||e(this)},unbind:function(){this.scope&&(angular.forEach(this.subs,function(a){a()}),this.subs=[],this.scope=null,this.key=null)},destroy:function(){this.unbind(),this.rec=null}},d}]),angular.module("firebase").factory("$FirebaseObject",["$log","$firebaseObject",function(a,b){return function(){return a.warn("$FirebaseObject has been renamed. Use $firebaseObject instead."),b.apply(null,arguments)}}])}(),function(){"use strict";angular.module("firebase").factory("$firebase",function(){return function(){throw new Error("$firebase has been removed. You may instantiate $firebaseArray and $firebaseObject directly now. For simple write operations, just use the Firebase ref directly. See the AngularFire 1.0.0 changelog for details: https://www.firebase.com/docs/web/libraries/angular/changelog.html")}})}(),Array.prototype.indexOf||(Array.prototype.indexOf=function(a,b){if(void 0===this||null===this)throw new TypeError("'this' is null or not defined");var c=this.length>>>0;for(b=+b||0,1/0===Math.abs(b)&&(b=0),0>b&&(b+=c,0>b&&(b=0));c>b;b++)if(this[b]===a)return b;return-1}),Function.prototype.bind||(Function.prototype.bind=function(a){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var b=Array.prototype.slice.call(arguments,1),c=this,d=function(){},e=function(){return c.apply(this instanceof d&&a?this:a,b.concat(Array.prototype.slice.call(arguments)))};return d.prototype=this.prototype,e.prototype=new d,e}),Array.prototype.findIndex||Object.defineProperty(Array.prototype,"findIndex",{enumerable:!1,configurable:!0,writable:!0,value:function(a){if(null==this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof a)throw new TypeError("predicate must be a function");for(var b,c=Object(this),d=c.length>>>0,e=arguments[1],f=0;d>f;f++)if(f in c&&(b=c[f],a.call(e,b,f,c)))return f;return-1}}),"function"!=typeof Object.create&&!function(){var a=function(){};Object.create=function(b){if(arguments.length>1)throw new Error("Second argument not supported");if(null===b)throw new Error("Cannot set a null [[Prototype]]");if("object"!=typeof b)throw new TypeError("Argument must be an object");return a.prototype=b,new a}}(),Object.keys||(Object.keys=function(){"use strict";var a=Object.prototype.hasOwnProperty,b=!{toString:null}.propertyIsEnumerable("toString"),c=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],d=c.length;return function(e){if("object"!=typeof e&&("function"!=typeof e||null===e))throw new TypeError("Object.keys called on non-object");var f,g,h=[];for(f in e)a.call(e,f)&&h.push(f);if(b)for(g=0;d>g;g++)a.call(e,c[g])&&h.push(c[g]);return h}}()),"function"!=typeof Object.getPrototypeOf&&(Object.getPrototypeOf="object"==typeof"test".__proto__?function(a){return a.__proto__}:function(a){return a.constructor.prototype}),function(){"use strict";function a(b){if(!angular.isObject(b))return b;var c=angular.isArray(b)?[]:{};return angular.forEach(b,function(b,d){("string"!=typeof d||"$"!==d.charAt(0))&&(c[d]=a(b))}),c}angular.module("firebase").factory("$firebaseConfig",["$firebaseArray","$firebaseObject","$injector",function(a,b,c){return function(d){var e=angular.extend({},d);return"string"==typeof e.objectFactory&&(e.objectFactory=c.get(e.objectFactory)),"string"==typeof e.arrayFactory&&(e.arrayFactory=c.get(e.arrayFactory)),angular.extend({arrayFactory:a,objectFactory:b},e)}}]).factory("$firebaseUtils",["$q","$timeout","firebaseBatchDelay",function(b,c,d){function e(a){function c(a){e.resolve(a)}function d(a){e.reject(a)}if(!angular.isFunction(a))throw new Error("missing resolver function");var e=b.defer();return a(c,d),e.promise}var f={batch:function(a,b){function c(a,b){if("function"!=typeof a)throw new Error("Must provide a function to be batched. Got "+a);return function(){var c=Array.prototype.slice.call(arguments,0);k.push([a,b,c]),e()}}function e(){i&&(i(),i=null),h&&Date.now()-h>b?j||(j=!0,f.compile(g)):(h||(h=Date.now()),i=f.wait(g,a))}function g(){i=null,h=null,j=!1;var a=k.slice(0);k=[],angular.forEach(a,function(a){a[0].apply(a[1],a[2])})}a=d,b||(b=10*a||100);var h,i,j,k=[];return c},debounce:function(a,b,c,d){function e(){j&&(j(),j=null),i&&Date.now()-i>d?l||(l=!0,f.compile(g)):(i||(i=Date.now()),j=f.wait(g,c))}function g(){j=null,i=null,l=!1,a.apply(b,k)}function h(){k=Array.prototype.slice.call(arguments,0),e()}var i,j,k,l;if("number"==typeof b&&(d=c,c=b,b=null),"number"!=typeof c)throw new Error("Must provide a valid integer for wait. Try 0 for a default");if("function"!=typeof a)throw new Error("Must provide a valid function to debounce");return d||(d=10*c||100),h.running=function(){return i>0},h},assertValidRef:function(a,b){if(!angular.isObject(a)||"function"!=typeof a.ref||"function"!=typeof a.ref().transaction)throw new Error(b||"Invalid Firebase reference")},inherit:function(a,b,c){var d=a.prototype;return a.prototype=Object.create(b.prototype),a.prototype.constructor=a,angular.forEach(Object.keys(d),function(b){a.prototype[b]=d[b]}),angular.isObject(c)&&angular.extend(a.prototype,c),a},getPrototypeMethods:function(a,b,c){for(var d={},e=Object.getPrototypeOf({}),f=angular.isFunction(a)&&angular.isObject(a.prototype)?a.prototype:Object.getPrototypeOf(a);f&&f!==e;){for(var g in f)f.hasOwnProperty(g)&&!d.hasOwnProperty(g)&&(d[g]=!0,b.call(c,f[g],g,f));f=Object.getPrototypeOf(f)}},getPublicMethods:function(a,b,c){f.getPrototypeMethods(a,function(a,d){"function"==typeof a&&"_"!==d.charAt(0)&&b.call(c,a,d)})},defer:b.defer,reject:b.reject,resolve:b.when,promise:angular.isFunction(b)?b:e,makeNodeResolver:function(a){return function(b,c){null===b?(arguments.length>2&&(c=Array.prototype.slice.call(arguments,1)),a.resolve(c)):a.reject(b)}},wait:function(a,b){var d=c(a,b||0);return function(){d&&(c.cancel(d),d=null)}},compile:function(a){return c(a||function(){})},deepCopy:function(a){if(!angular.isObject(a))return a;var b=angular.isArray(a)?a.slice():angular.extend({},a);for(var c in b)b.hasOwnProperty(c)&&angular.isObject(b[c])&&(b[c]=f.deepCopy(b[c]));return b},trimKeys:function(a,b){f.each(a,function(c,d){b.hasOwnProperty(d)||delete a[d]})},scopeData:function(a){var b={$id:a.$id,$priority:a.$priority},c=!1;return f.each(a,function(a,d){c=!0,b[d]=f.deepCopy(a)}),!c&&a.hasOwnProperty("$value")&&(b.$value=a.$value),b},updateRec:function(a,b){var c=b.val(),d=angular.extend({},a);return angular.isObject(c)?delete a.$value:(a.$value=c,c={}),f.trimKeys(a,c),angular.extend(a,c),a.$priority=b.getPriority(),!angular.equals(d,a)||d.$value!==a.$value||d.$priority!==a.$priority},applyDefaults:function(a,b){return angular.isObject(b)&&angular.forEach(b,function(b,c){a.hasOwnProperty(c)||(a[c]=b)}),a},dataKeys:function(a){var b=[];return f.each(a,function(a,c){b.push(c)}),b},each:function(a,b,c){if(angular.isObject(a)){for(var d in a)if(a.hasOwnProperty(d)){var e=d.charAt(0);"_"!==e&&"$"!==e&&"."!==e&&b.call(c,a[d],d,a)}}else if(angular.isArray(a))for(var f=0,g=a.length;g>f;f++)b.call(c,a[f],f,a);return a},getKey:function(a){return"function"==typeof a.key?a.key():a.name()},toJSON:function(b){var c;return angular.isObject(b)||(b={$value:b}),angular.isFunction(b.toJSON)?c=b.toJSON():(c={},f.each(b,function(b,d){c[d]=a(b)})),angular.isDefined(b.$value)&&0===Object.keys(c).length&&null!==b.$value&&(c[".value"]=b.$value),angular.isDefined(b.$priority)&&Object.keys(c).length>0&&null!==b.$priority&&(c[".priority"]=b.$priority),angular.forEach(c,function(a,b){if(b.match(/[.$\[\]#\/]/)&&".value"!==b&&".priority"!==b)throw new Error("Invalid key "+b+" (cannot contain .$[]#)");if(angular.isUndefined(a))throw new Error("Key "+b+" was undefined. Cannot pass undefined in JSON. Use null instead.")}),c},doSet:function(a,b){var c=f.defer();if(angular.isFunction(a.set)||!angular.isObject(b))a.set(b,f.makeNodeResolver(c));else{var d=angular.extend({},b);a.once("value",function(b){b.forEach(function(a){d.hasOwnProperty(f.getKey(a))||(d[f.getKey(a)]=null)}),a.ref().update(d,f.makeNodeResolver(c))},function(a){c.reject(a)})}return c.promise},doRemove:function(a){var b=f.defer();return angular.isFunction(a.remove)?a.remove(f.makeNodeResolver(b)):a.once("value",function(c){var d=[];c.forEach(function(a){var c=f.defer();d.push(c.promise),a.ref().remove(f.makeNodeResolver(b))}),f.allPromises(d).then(function(){b.resolve(a)},function(a){b.reject(a)})},function(a){b.reject(a)}),b.promise},VERSION:"1.0.0",batchDelay:d,allPromises:b.all.bind(b)};return f}])}();