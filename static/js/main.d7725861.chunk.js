(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{26:function(e,n,t){},28:function(e,n,t){},29:function(e,n,t){},30:function(e,n,t){},31:function(e,n,t){"use strict";t.r(n);var o=t(1),r=t(0),c=t(7),i=t.n(c),s=t(8),a=t(6),l=t(14),u=(t(26),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function d(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var h=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,32)).then((function(n){var t=n.getCLS,o=n.getFID,r=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),o(e),r(e),c(e),i(e)}))},b=(t(27),t(2)),f=t(3),g=t(5),j=t(4),p=function(e){Object(g.a)(t,e);var n=Object(j.a)(t);function t(){return Object(b.a)(this,t),n.apply(this,arguments)}return Object(f.a)(t,[{key:"shouldComponentUpdate",value:function(e,n){return!1}},{key:"render",value:function(){return console.log("Header"),Object(o.jsx)("h1",{className:"f1",children:"RoboFriends"})}}]),t}(r.Component),v=function(e){var n=e.name,t=e.email,r=e.id;return Object(o.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(o.jsx)("img",{alt:"Robot",src:"https://robohash.org/".concat(r,"?200x200")}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:n}),Object(o.jsx)("p",{children:t})]})]})},O=function(e){var n=e.robots;return console.log("Card List"),Object(o.jsx)("div",{children:n.map((function(e,t){return Object(o.jsx)(v,{id:n[t].id,name:n[t].name,email:n[t].email},t)}))})},A=(t(28),function(e){e.searchfield;var n=e.searchChange;return console.log("SearchBox"),Object(o.jsx)("div",{className:"pa2",children:Object(o.jsxs)("label",{children:[Object(o.jsx)("img",{className:"box",alt:"Search",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADqklEQVRoge2Yy2tcVRzHP2fynEeTKNQmNkr6SEF8pEb8A5qFC+NGV66EKkqwC3FRFRehqKBxUbuSgEGJtFoUxEV9UeyAIsZV2qAWGnRCEzvxgTY2k4RM7u/rYm40xkkzd+7M3ID5wgznnnOG+/nMOfM7MwPb2c7/O67cF56UWgT9ZvRJ9ODoErQhEFyVmMJx3vM4V9fIR485d62S4KsJLDAqHXDwLOJhQUIq9Mt/ErDaZyq0BQsS7wJDA81uslLwEEDgPSm+BC8CTyHq14JuAo/kX0Ne4kQyzuBh55ZqJnBK6jb4QHDHetAA8P+0jTGL8dDTSZetusCodHcMPhPsrAi8f21ixnP0H025iaoJ+O/8V1WAX23PWIx7n0m52XIFYhsNvCU1G7xfNfhCf6etcOb4tOIVF6iDlwQ9VYPn78/DPQsJnitXoOgW8kvldyGqTanwWGHevGd0H7sp+FYqugJ+na8VPCZSOAaDwvus/85JqcVEVqUfUmHhV+fklmJ0vLoz2In9nxUQ9EcAj4lkg8f9QeCLCvjfbWoNjwk8oy+0gERPFPD+467QAjj2RASPib2hBQQtEcEj0RpaIEJ4TEHxi6/An1HBm5gLLyAyEcFjxo+hBXCcjwgeMy6EFvA8zkUCLzDH56EF8o2cEeRqDi9ybpFPQgsccW5e4nSN4THxzuu3u/nQAn6GVPgBXiv45bzxSlD4DQUGmt2kxIkaweOJ428ecIEr0IYCAMk4gzLGqg3/+x9z+a/Hxk+XA39dgcPOLdU7HjQxXS343OISE99PNlhz4tPes7/dVlEBgCMpN+s5HhDMVBx+YZHxCxehKUHTjtb2usb6s73puf0VFQA4mnITy45eE19UcNssfzP+LSv1TcRbb6AhngDc7pjj7c6R6UASmwoAPL/D/Zpo5T5PvGAiF6bamHj50g9Td9YnW6bibTfSkEgWbiJlsplrez3py443pkreToH/3D32i9pxDJrxiIlkifA5E6fyxtBqtTmYznY1xBJpoAspcyUzn7AV2+XfZhasL/t418WKC6wRSeWNfjMOGRz0jD0SbT7wVc/ImDFujnRskY+LHVK96bn9Mcfoz5n5fSsr3q51wyVJlC1QqXQOT3d7dUoDu4sMbyoRuQCEk9gSAlC+xJYRgPIkSiqjtcrMwC2TdZ47BPxUZLgdYh+u79xSAnBdCSFeWz9/S22htVm3nYR4MvvErcNRcwVK5/B0d8fI5Us3j1x+NGqW7Wxnq+YvXOll11y43d4AAAAASUVORK5CYII="}),Object(o.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n})]})})}),x=(t(29),function(e){return Object(o.jsx)("div",{className:"friends",children:e.children})}),w=function(e){Object(g.a)(t,e);var n=Object(j.a)(t);function t(e){var o;return Object(b.a)(this,t),(o=n.call(this,e)).state={hasError:!1},o}return Object(f.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(o.jsx)("h1",{children:"Oooops. We ran into an error. Please try again later "}):this.props.children}}]),t}(r.Component),m=(t(30),"CHANGE_SEARCH_FIELD"),E="REQUEST_ROBOTS_PENDING",y="REQUEST_ROBOTS_SUCCESS",C="REQUEST_ROBOTS_FAIL",S=function(e){Object(g.a)(t,e);var n=Object(j.a)(t);function t(){return Object(b.a)(this,t),n.apply(this,arguments)}return Object(f.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,n=e.searchField,t=e.onSearchChange,r=e.robots,c=e.isPending,i=r.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(o.jsxs)("div",{className:"tc",children:[Object(o.jsx)(p,{}),Object(o.jsx)(A,{searchChange:t}),Object(o.jsx)(x,{children:c?Object(o.jsx)("h1",{children:"Loading"}):Object(o.jsx)(w,{children:Object(o.jsx)(O,{robots:i})})})]})}}]),t}(r.Component),R=Object(s.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(n){return e((t=n.target.value,{type:m,payload:t}));var t},onRequestRobots:function(){return e((function(e){e({type:E}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e({type:y,payload:n})})).catch((function(n){return e({type:C,payload:n})}))}))}}}))(S),k={searchField:""},P={isPending:!0,robots:[],error:""},D=Object(a.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case m:return Object.assign({},e,{searchField:n.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case E:return Object.assign({},e,{isPending:!0});case y:return Object.assign({},e,{robots:n.payload,isPending:!1});case C:return Object.assign({},e,{error:n.payload,isPending:!1});default:return e}}}),F=Object(a.d)(D,Object(a.a)(l.a));i.a.render(Object(o.jsx)(s.a,{store:F,children:Object(o.jsx)(R,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends-redux",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/robofriends-redux","/service-worker.js");u?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):d(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):d(n,e)}))}}(),h()}},[[31,1,2]]]);
//# sourceMappingURL=main.d7725861.chunk.js.map