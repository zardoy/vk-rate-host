/*! For license information please see 94.1ccf5a31.chunk.js.LICENSE.txt */
(this["webpackJsonpvk-rate-host"]=this["webpackJsonpvk-rate-host"]||[]).push([[94],{189:function(t,r,e){"use strict";e.r(r),e.d(r,"scopeCss",(function(){return C}));var n=function(){for(var t=0,r=0,e=arguments.length;r<e;r++)t+=arguments[r].length;var n=Array(t),s=0;for(r=0;r<e;r++)for(var o=arguments[r],c=0,a=o.length;c<a;c++,s++)n[s]=o[c];return n},s=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",o=new RegExp("(-shadowcsshost"+s,"gim"),c=new RegExp("(-shadowcsscontext"+s,"gim"),a=new RegExp("(-shadowcssslotted"+s,"gim"),i=/-shadowcsshost-no-combinator([^\s]*)/,u=[/::shadow/g,/::content/g],h=/-shadowcsshost/gim,l=/:host/gim,f=/::slotted/gim,p=/:host-context/gim,g=/\/\*\s*[\s\S]*?\*\//g,d=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,m=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,v=/([{}])/g,w=function(t,r){var e=x(t),n=0;return e.escapedString.replace(m,(function(){for(var t=[],s=0;s<arguments.length;s++)t[s]=arguments[s];var o=t[2],c="",a=t[4],i="";a&&a.startsWith("{%BLOCK%")&&(c=e.blocks[n++],a=a.substring("%BLOCK%".length+1),i="{");var u={selector:o,content:c},h=r(u);return""+t[1]+h.selector+t[3]+i+h.content+a}))},x=function(t){for(var r=t.split(v),e=[],n=[],s=0,o=[],c=0;c<r.length;c++){var a=r[c];"}"===a&&s--,s>0?o.push(a):(o.length>0&&(n.push(o.join("")),e.push("%BLOCK%"),o=[]),e.push(a)),"{"===a&&s++}return o.length>0&&(n.push(o.join("")),e.push("%BLOCK%")),{escapedString:e.join(""),blocks:n}},_=function(t,r,e){return t.replace(r,(function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];if(t[2]){for(var n=t[2].split(","),s=[],o=0;o<n.length;o++){var c=n[o].trim();if(!c)break;s.push(e("-shadowcsshost-no-combinator",c,t[3]))}return s.join(",")}return"-shadowcsshost-no-combinator"+t[3]}))},b=function(t,r,e){return t+r.replace("-shadowcsshost","")+e},O=function(t,r,e){return r.indexOf("-shadowcsshost")>-1?b(t,r,e):t+r+e+", "+r+" "+t+e},S=function(t,r){return!function(t){return t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")}(r).test(t)},W=function(t,r,e){for(var n,s="."+(r=r.replace(/\[is=([^\]]*)\]/g,(function(t){for(var r=[],e=1;e<arguments.length;e++)r[e-1]=arguments[e];return r[0]}))),o=function(t){var n=t.trim();if(!n)return"";if(t.indexOf("-shadowcsshost-no-combinator")>-1)n=function(t,r,e){if(h.lastIndex=0,h.test(t)){var n="."+e;return t.replace(i,(function(t,r){return r.replace(/([^:]*)(:*)(.*)/,(function(t,r,e,s){return r+n+e+s}))})).replace(h,n+" ")}return r+" "+t}(t,r,e);else{var o=t.replace(h,"");if(o.length>0){var c=o.match(/([^:]*)(:*)(.*)/);c&&(n=c[1]+s+c[2]+c[3])}}return n},c=function(t){var r=[],e=0;return{content:(t=t.replace(/(\[[^\]]*\])/g,(function(t,n){var s="__ph-"+e+"__";return r.push(n),e++,s}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(function(t,n,s){var o="__ph-"+e+"__";return r.push(s),e++,n+o})),placeholders:r}}(t),a="",u=0,l=/( |>|\+|~(?!=))\s*/g,f=!((t=c.content).indexOf("-shadowcsshost-no-combinator")>-1);null!==(n=l.exec(t));){var p=n[1],g=t.slice(u,n.index).trim();a+=((f=f||g.indexOf("-shadowcsshost-no-combinator")>-1)?o(g):g)+" "+p+" ",u=l.lastIndex}var d,m=t.substring(u);return a+=(f=f||m.indexOf("-shadowcsshost-no-combinator")>-1)?o(m):m,d=c.placeholders,a.replace(/__ph-(\d+)__/g,(function(t,r){return d[+r]}))},k=function t(r,e,n,s,o){return w(r,(function(r){var o=r.selector,c=r.content;return"@"!==r.selector[0]?o=function(t,r,e,n){return t.split(",").map((function(t){return n&&t.indexOf("."+n)>-1?t.trim():S(t,r)?W(t,r,e).trim():t.trim()})).join(", ")}(r.selector,e,n,s):(r.selector.startsWith("@media")||r.selector.startsWith("@supports")||r.selector.startsWith("@page")||r.selector.startsWith("@document"))&&(c=t(r.content,e,n,s)),{selector:o.replace(/\s{2,}/g," ").trim(),content:c}}))},j=function(t,r,e,n,s){var i=function(t,r){var e="."+r+" > ",n=[];return t=t.replace(a,(function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];if(t[2]){for(var s=t[2].trim(),o=t[3],c=e+s+o,a="",i=t[4]-1;i>=0;i--){var u=t[5][i];if("}"===u||","===u)break;a=u+a}var h=a+c,l=""+a.trimRight()+c.trim();if(h.trim()!==l.trim()){var f=l+", "+h;n.push({orgSelector:h,updatedSelector:f})}return c}return"-shadowcsshost-no-combinator"+t[3]})),{selectors:n,cssText:t}}(t=function(t){return _(t,c,O)}(t=function(t){return _(t,o,b)}(t=t.replace(p,"-shadowcsscontext").replace(l,"-shadowcsshost").replace(f,"-shadowcssslotted"))),n);return t=function(t){return u.reduce((function(t,r){return t.replace(r," ")}),t)}(t=i.cssText),r&&(t=k(t,r,e,n)),{cssText:(t=(t=t.replace(/-shadowcsshost-no-combinator/g,"."+e)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:i.selectors}},C=function(t,r,e){var s=r+"-h",o=r+"-s",c=t.match(d)||[];t=function(t){return t.replace(g,"")}(t);var a=[];if(e){var i=function(t){var r="/*!@___"+a.length+"___*/",e="/*!@"+t.selector+"*/";return a.push({placeholder:r,comment:e}),t.selector=r+t.selector,t};t=w(t,(function(t){return"@"!==t.selector[0]?i(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=w(t.content,i),t):t}))}var u=j(t,r,s,o);return t=n([u.cssText],c).join("\n"),e&&a.forEach((function(r){var e=r.placeholder,n=r.comment;t=t.replace(e,n)})),u.slottedSelectors.forEach((function(r){t=t.replace(r.orgSelector,r.updatedSelector)})),t}}}]);
//# sourceMappingURL=94.1ccf5a31.chunk.js.map