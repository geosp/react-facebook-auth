!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.FacebookAuth=t(require("react")):e.FacebookAuth=t(e.react)}(this,function(e){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(2)},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),s=o(4),u=n(s),p=o(3),l=n(p),f={callback:s.PropTypes.func.isRequired,appId:s.PropTypes.string.isRequired,xfbml:s.PropTypes.bool,cookie:s.PropTypes.bool,reAuthenticate:s.PropTypes.bool,scope:s.PropTypes.string,autoLoad:s.PropTypes.bool,fields:s.PropTypes.string,version:s.PropTypes.string,language:s.PropTypes.string,btnText:s.PropTypes.string,btnClassName:s.PropTypes.string},d={textButton:"Login with Facebook",typeButton:"button",scope:"public_profile,email",xfbml:!1,cookie:!1,reAuthenticate:!1,size:"metro",fields:"name",cssClass:"kep-login-facebook",version:"2.3",language:"en_US"},b=function(e){function t(e,o){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,o));return n.click=n.click.bind(n),n.checkLoginAfterRefresh=n.checkLoginAfterRefresh.bind(n),n.checkLoginState=n.checkLoginState.bind(n),n.responseApi=n.responseApi.bind(n),n}return c(t,e),a(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,o=t.appId,n=t.xfbml,r=t.cookie,i=t.version,c=t.autoLoad,a=t.language,s=document.getElementById("fb-root");s||(s=document.createElement("div"),s.id="fb-root",document.body.appendChild(s)),window.fbAsyncInit=function(){window.FB.init({version:"v"+i,appId:o,xfbml:n,cookie:r}),(c||window.location.search.includes("facebookdirect"))&&window.FB.getLoginStatus(e.checkLoginAfterRefresh)},function(e,t,o){var n=e.getElementsByTagName(t)[0],r=n,i=n;e.getElementById(o)||(i=e.createElement(t),i.id=o,i.src="//connect.facebook.net/"+a+"/all.js",r.parentNode.insertBefore(i,r))}(document,"script","facebook-jssdk")}},{key:"responseApi",value:function(e){var t=this;window.FB.api("/me",{fields:this.props.fields},function(o){Object.assign(o,e),t.props.callback(o)})}},{key:"checkLoginState",value:function(e){e.authResponse?this.responseApi(e.authResponse):this.props.callback&&this.props.callback({status:e.status})}},{key:"checkLoginAfterRefresh",value:function(e){var t=this;"unknown"===e.status?window.FB.login(function(e){return t.checkLoginState(e)},!0):this.checkLoginState(e)}},{key:"click",value:function(){var e=this.props,t=e.scope,o=e.appId,n=e.onClick,r=e.reAuthenticate;"function"==typeof n&&n();var i=!1;try{i=window.navigator&&window.navigator.standalone||navigator.userAgent.match("CriOS")||navigator.userAgent.match(/mobile/i)}catch(c){}var a={client_id:o,redirect_uri:window.location.href,state:"facebookdirect",scope:t};r&&(a.auth_type="reauthenticate"),i?window.location.href="//www.facebook.com/dialog/oauth?"+(0,l["default"])(a):window.FB.login(this.checkLoginState,{scope:t,auth_type:a.auth_type})}},{key:"render",value:function(){var e=this.props,t=e.component,o=e.btnClassName,n=e.btnText,r=e.btnType;return t?u["default"].createElement(t,{onClick:this.click}):u["default"].createElement("button",{type:r,className:o},n)}}]),t}(u["default"].Component);b.propTypes=f,b.defaultProps=d,t["default"]=b},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(1),i=n(r);t["default"]=i["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){var t="";for(var o in e)""!==t&&(t+="&"),t+=o+"="+encodeURIComponent(e[o]);return t}},function(t,o){t.exports=e}])});