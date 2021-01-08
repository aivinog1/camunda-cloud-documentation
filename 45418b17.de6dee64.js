(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(450)),c=(n(455),n(456),{id:"monitor-your-process-in-operate",title:"Monitor your Process in Operate"}),i={unversionedId:"guides/getting-started/monitor-your-process-in-operate",id:"version-0.25/guides/getting-started/monitor-your-process-in-operate",isDocsHomePage:!1,title:"Monitor your Process in Operate",description:"Camunda Cloud offers Operate to monitor your process instances. An entry point can be found in the Cluster details.",source:"@site/versioned_docs/version-0.25/guides/getting-started/monitor-your-process-in-operate.md",slug:"/guides/getting-started/monitor-your-process-in-operate",permalink:"/docs/0.25/guides/getting-started/monitor-your-process-in-operate",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.25/guides/getting-started/monitor-your-process-in-operate.md",version:"0.25",sidebar:"version-0.25/Guides",previous:{title:"Involve Humans",permalink:"/docs/0.25/guides/getting-started/involve-humans"},next:{title:"Setting up your first Development Project",permalink:"/docs/0.25/guides/setting-up-development-project"}},s=[],u={rightToc:s};function l(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Camunda Cloud offers Operate to monitor your process instances. An entry point can be found in the Cluster details."),Object(o.b)("p",null,Object(o.b)("img",{alt:"operate-dashboard",src:n(671).default})),Object(o.b)("p",null,"By selecting the deployed workflow you will see a list of instances that can be filtered:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"operate-instances",src:n(672).default})),Object(o.b)("p",null,"Because ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/0.25/guides/getting-started/implement-service-task"}),"the started worker")," returns"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "return": "Pong"\n}\n')),Object(o.b)("p",null,"the workflow ends in the upper end event."),Object(o.b)("p",null,"Changing the worker to"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'zbctl create worker test-worker --handler "echo {\\"return\\":\\"...\\"}"\n')),Object(o.b)("p",null,"and creating a new instance leads to a second instance in Operate, which you'll see ending in the second end event:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"operate-instance",src:n(673).default})),Object(o.b)("p",null,"As a next step you can now connect both workers in parallel and create more workflow instances:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"while true; do zbctl create instance camunda-cloud-quick-start-advanced; sleep 1; done\n")),Object(o.b)("p",null,"In Operate you will see instances ending in both end events depending on which worker picked up the job."),Object(o.b)("p",null,Object(o.b)("img",{alt:"operate-instances",src:n(674).default})))}l.isMDXComponent=!0},450:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,f=p["".concat(c,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(f,i(i({ref:t},u),{},{components:n})):a.a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},451:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},452:function(e,t,n){"use strict";var r=n(0),a=n(453);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},453:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},455:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(452),c=n(451),i=n(53),s=n.n(i),u=37,l=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.children,p=e.defaultValue,d=e.values,b=e.groupId,f=e.className,m=Object(o.a)(),g=m.tabGroupChoices,O=m.setTabGroupChoices,v=Object(r.useState)(p),y=v[0],j=v[1];if(null!=b){var h=g[b];null!=h&&h!==y&&d.some((function(e){return e.value===h}))&&j(h)}var w=function(e){j(e),null!=b&&O(b,e)},k=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},f)},d.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(r.cloneElement)(i.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},i.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},456:function(e,t,n){"use strict";var r=n(3),a=n(0),o=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return o.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:a}),t)}},671:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/operate-dashboard-955b350be289649f3882f848fe90fe01.png"},672:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/operate-advanced-instances-pong-8000ccad818303c9f1213cb4bf7c09b9.png"},673:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/operate-advanced-instances-other-256b79b61a5c9090674d8b789eea0e41.png"},674:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/operate-advanced-instances-cbb3fceba883216bbbde22333a23eeb9.png"}}]);