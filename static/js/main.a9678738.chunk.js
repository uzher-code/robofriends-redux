(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{26:function(e,n,t){},28:function(e,n,t){},29:function(e,n,t){},30:function(e,n,t){"use strict";t.r(n);var r=t(1),o=t(0),i=t(7),c=t.n(i),a=t(8),s=t(6),l=t(14),u=(t(26),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function d(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var h=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,31)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,i=n.getLCP,c=n.getTTFB;t(e),r(e),o(e),i(e),c(e)}))},b=(t(27),t(2)),f=t(3),j=t(5),g=t(4),p=function(e){Object(j.a)(t,e);var n=Object(g.a)(t);function t(){return Object(b.a)(this,t),n.apply(this,arguments)}return Object(f.a)(t,[{key:"shouldComponentUpdate",value:function(e,n){return!1}},{key:"render",value:function(){return console.log("Header"),Object(r.jsx)("h1",{style:{fontSize:"2.75rem"},children:"RoboFriends"})}}]),t}(o.Component),v=function(e){var n=e.name,t=e.email,o=e.id;return Object(r.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(r.jsx)("img",{alt:"Robot",src:"https://robohash.org/".concat(o,"?size=200x200")}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:n}),Object(r.jsx)("p",{children:t})]})]})},O=function(e){var n=e.robots;return console.log("Card List"),Object(r.jsx)("div",{children:n.map((function(e,t){return Object(r.jsx)(v,{id:n[t].id,name:n[t].name,email:n[t].email},t)}))})},m=function(e){e.searchfield;var n=e.searchChange;return console.log("SearchBox"),Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("input",{"aria-label":"Search",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n})})},w=(t(28),function(e){return Object(r.jsx)("div",{className:"friends",children:e.children})}),y=function(e){Object(j.a)(t,e);var n=Object(g.a)(t);function t(e){var r;return Object(b.a)(this,t),(r=n.call(this,e)).state={hasError:!1},r}return Object(f.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)("h1",{children:"Oooops. We ran into an error. Please try again later "}):this.props.children}}]),t}(o.Component),x=(t(29),"CHANGE_SEARCH_FIELD"),C="REQUEST_ROBOTS_PENDING",S="REQUEST_ROBOTS_SUCCESS",R="REQUEST_ROBOTS_FAIL",k=function(e){Object(j.a)(t,e);var n=Object(g.a)(t);function t(){return Object(b.a)(this,t),n.apply(this,arguments)}return Object(f.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,n=e.searchField,t=e.onSearchChange,o=e.robots,i=e.isPending,c=o.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)(p,{}),Object(r.jsx)(m,{searchChange:t}),Object(r.jsx)(w,{children:i?Object(r.jsx)("h1",{children:"Loading"}):Object(r.jsx)(y,{children:Object(r.jsx)(O,{robots:c})})})]})}}]),t}(o.Component),E=Object(a.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(n){return e((t=n.target.value,{type:x,payload:t}));var t},onRequestRobots:function(){return e((function(e){e({type:C}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e({type:S,payload:n})})).catch((function(n){return e({type:R,payload:n})}))}))}}}))(k),P={searchField:""},F={isPending:!0,robots:[],error:""},L=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case x:return Object.assign({},e,{searchField:n.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case C:return Object.assign({},e,{isPending:!0});case S:return Object.assign({},e,{robots:n.payload,isPending:!1});case R:return Object.assign({},e,{error:n.payload,isPending:!1});default:return e}}}),N=Object(s.d)(L,Object(s.a)(l.a));c.a.render(Object(r.jsx)(a.a,{store:N,children:Object(r.jsx)(E,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends-redux",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/robofriends-redux","/service-worker.js");u?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):d(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):d(n,e)}))}}(),h()}},[[30,1,2]]]);
//# sourceMappingURL=main.a9678738.chunk.js.map