(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[903],{4184:function(t,e){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var i=typeof n;if("string"===i||"number"===i)t.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&t.push(a)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var c in n)r.call(n,c)&&n[c]&&t.push(c);else t.push(n.toString())}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(n=function(){return o}.apply(e,[]))||(t.exports=n)}()},8848:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/detail/[id]",function(){return n(1069)}])},1069:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return C},default:function(){return P}});var r=n(5893),o=(n(8210),n(9008)),i=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),a=function(t){function e(e){var n=t.call(this,e)||this;return n.name="AssertionError",n}return i(e,t),e}(Error);var c=n(7294),l=n(4184),u=n.n(l),s=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),f=function(){return f=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},f.apply(this,arguments)},p=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{l(r.next(t))}catch(e){i(e)}}function c(t){try{l(r.throw(t))}catch(e){i(e)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}l((r=r.apply(t,e||[])).next())}))},h=function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(c){i=[6,c],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},d=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n},w=function(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then},y=function(t,e){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-t/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-e/2}},b=function(t,e){return{top:(window.screen.height-e)/2,left:(window.screen.width-t)/2}};function v(t,e,n){var r=e.height,o=e.width,i=d(e,["height","width"]),a=f({height:r,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},i),c=window.open(t,"",Object.keys(a).map((function(t){return t+"="+a[t]})).join(", "));if(n)var l=window.setInterval((function(){try{(null===c||c.closed)&&(window.clearInterval(l),n(c))}catch(t){console.error(t)}}),1e3);return c}var g=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.openShareDialog=function(t){var n=e.props,r=n.onShareWindowClose,o=n.windowHeight,i=void 0===o?400:o,a=n.windowPosition,c=void 0===a?"windowCenter":a,l=n.windowWidth,u=void 0===l?550:l;v(t,f({height:i,width:u},"windowCenter"===c?y(u,i):b(u,i)),r)},e.handleClick=function(t){return p(e,void 0,void 0,(function(){var e,n,r,o,i,a,c,l,u,s;return h(this,(function(f){switch(f.label){case 0:return e=this.props,n=e.beforeOnClick,r=e.disabled,o=e.networkLink,i=e.onClick,a=e.url,c=e.openShareDialogOnClick,l=e.opts,u=o(a,l),r?[2]:(t.preventDefault(),n?(s=n(),w(s)?[4,s]:[3,2]):[3,2]);case 1:f.sent(),f.label=2;case 2:return c&&this.openShareDialog(u),i&&i(t,u),[2]}}))}))},e}return s(e,t),e.prototype.render=function(){var t=this.props,e=(t.beforeOnClick,t.children),n=t.className,r=t.disabled,o=t.disabledStyle,i=t.forwardedRef,a=(t.networkLink,t.networkName),l=(t.onShareWindowClose,t.openShareDialogOnClick,t.opts,t.resetButtonStyle),s=t.style,p=(t.url,t.windowHeight,t.windowPosition,t.windowWidth,d(t,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),h=u()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!r,disabled:!!r},n),w=f(f(l?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},s),r&&o);return c.createElement("button",f({},p,{"aria-label":p["aria-label"]||a,className:h,onClick:this.handleClick,ref:i,style:w}),e)},e.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},e}(c.Component),O=g,m=function(){return m=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},m.apply(this,arguments)};var j=function(t,e,n,r){function o(o,i){var a=n(o),l=m({},o);return Object.keys(a).forEach((function(t){delete l[t]})),c.createElement(O,m({},r,l,{forwardedRef:i,networkName:t,networkLink:e,opts:n(o)}))}return o.displayName="ShareButton-"+t,(0,c.forwardRef)(o)}("facebook",(function(t,e){var n=e.quote,r=e.hashtag;return function(t,e){if(!t)throw new a(e)}(t,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+function(t){var e=Object.entries(t).filter((function(t){var e=t[1];return void 0!==e&&null!==e})).map((function(t){var e=t[0],n=t[1];return encodeURIComponent(e)+"="+encodeURIComponent(String(n))}));return e.length>0?"?"+e.join("&"):""}({u:t,quote:n,hashtag:r})}),(function(t){return{quote:t.quote,hashtag:t.hashtag}}),{windowWidth:550,windowHeight:400}),k=function(){return k=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},k.apply(this,arguments)},_=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};var S=function(t){var e=function(e){var n=e.bgStyle,r=e.borderRadius,o=e.iconFillColor,i=e.round,a=e.size,l=_(e,["bgStyle","borderRadius","iconFillColor","round","size"]);return c.createElement("svg",k({viewBox:"0 0 64 64",width:a,height:a},l),i?c.createElement("circle",{cx:"32",cy:"32",r:"31",fill:t.color,style:n}):c.createElement("rect",{width:"64",height:"64",rx:r,ry:r,fill:t.color,style:n}),c.createElement("path",{d:t.path,fill:o}))};return e.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},e}({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"}),x="https://fighter-files-dev.s3.ap-southeast-1.amazonaws.com",C=!0;function P(t){var e=t.content;return(0,r.jsxs)("div",{children:[(0,r.jsxs)(o.default,{children:[(0,r.jsxs)("title",{children:["FighteR | ",e.title]}),(0,r.jsx)("meta",{name:"description",content:"List Content FighteR"}),(0,r.jsx)("meta",{name:"description",content:null===e||void 0===e?void 0:e.description}),(0,r.jsx)("meta",{name:"og:title",content:null===e||void 0===e?void 0:e.title}),(0,r.jsx)("meta",{name:"og:description",content:null===e||void 0===e?void 0:e.description}),"image"===e.contentType&&(0,r.jsx)("meta",{name:"og:image",content:"".concat(x,"/").concat(e.images[0].name)}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("div",{className:"p-2",children:[(0,r.jsx)("h1",{children:"Detail Content"}),(0,r.jsx)("h4",{children:e.title}),(0,r.jsx)("p",{children:e.description}),(0,r.jsxs)(j,{url:"https://fakhrulnugroho.github.id/detail/".concat(e.id),children:[(0,r.jsx)(S,{size:30})," Share To Facebook"]})]})]})}},8210:function(){},9008:function(t,e,n){t.exports=n(5443)}},function(t){t.O(0,[293,774,888,179],(function(){return e=8848,t(t.s=e);var e}));var e=t.O();_N_E=e}]);