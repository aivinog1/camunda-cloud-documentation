(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[62991],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:function(e,t,n){"use strict";var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},41395:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(67294),a=n(80944),o=n(86010),s="tabItem_1uMI",i="tabItemActive_2DSg";var c=37,l=39;var u=function(e){var t=e.lazy,n=e.block,u=e.defaultValue,d=e.values,p=e.groupId,m=e.className,f=(0,a.Z)(),g=f.tabGroupChoices,v=f.setTabGroupChoices,k=(0,r.useState)(u),b=k[0],y=k[1],h=r.Children.toArray(e.children),w=[];if(null!=p){var O=g[p];null!=O&&O!==b&&d.some((function(e){return e.value===O}))&&y(O)}var Z=function(e){var t=e.currentTarget,n=w.indexOf(t),r=d[n].value;y(r),null!=p&&(v(p,r),setTimeout((function(){var e,n,r,a,o,s,c,l;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,s=window,c=s.innerHeight,l=s.innerWidth,n>=0&&o<=l&&a<=c&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},N=function(e){var t,n;switch(e.keyCode){case l:var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case c:var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},m)},d.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,o.Z)("tabs__item",s,{"tabs__item--active":b===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:N,onFocus:Z,onClick:Z},n)}))),t?(0,r.cloneElement)(h.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},79443:function(e,t,n){"use strict";var r=(0,n(67294).createContext)(void 0);t.Z=r},80944:function(e,t,n){"use strict";var r=n(67294),a=n(79443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},713:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),s=n(41395),i=n(58215),c={id:"implement-service-task",title:"Implement a service task"},l={unversionedId:"guides/getting-started/implement-service-task",id:"version-1.0/guides/getting-started/implement-service-task",isDocsHomePage:!1,title:"Implement a service task",description:"Use this process model for the tutorial.",source:"@site/versioned_docs/version-1.0/guides/getting-started/implement-service-task.md",sourceDirName:"guides/getting-started",slug:"/guides/getting-started/implement-service-task",permalink:"/docs/1.0/guides/getting-started/implement-service-task",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-1.0/guides/getting-started/implement-service-task.md",version:"1.0",frontMatter:{id:"implement-service-task",title:"Implement a service task"},sidebar:"version-1.0/Guides",previous:{title:"Deploy and start your process instance",permalink:"/docs/1.0/guides/getting-started/deploy-your-process-and-start-process-instance"},next:{title:"Implement a decision gateway",permalink:"/docs/1.0/guides/getting-started/implement-decision-gateway"}},u=[],d={toc:u};function p(e){var t=e.components,c=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Use ",(0,o.kt)("a",{target:"_blank",href:n(61416).Z},"this process model")," for the tutorial."),(0,o.kt)(s.Z,{groupId:"modeler",defaultValue:"console",values:[{label:"Console Modeler",value:"console"},{label:"Camunda Modeler",value:"desktop"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"console",mdxType:"TabItem"},(0,o.kt)("p",null,"Click ",(0,o.kt)("strong",{parentName:"p"},"Import New Diagram")," in the context menu to inject the BPMN-model you just downloaded into the diagram."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"import",src:n(10755).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"processId-cloud",src:n(75843).Z})),(0,o.kt)("p",null,"This process includes a service task and an XOR gateway. Select the service task and fill in the properties. Set the ",(0,o.kt)("strong",{parentName:"p"},"Type")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"test-worker"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"process-cloud",src:n(60039).Z})),(0,o.kt)("p",null,"Deploy the new process using the ",(0,o.kt)("strong",{parentName:"p"},"Save & Deploy")," option in the ",(0,o.kt)("strong",{parentName:"p"},"Deployment")," menu."),(0,o.kt)("p",null,"Make sure you have ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.0/guides/getting-started/setup-client-connection-credentials"},"created a client")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.0/guides/getting-started/connect-to-your-cluster"},"connected a cluster"),".")),(0,o.kt)(i.Z,{value:"desktop",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"processId",src:n(63743).Z})),(0,o.kt)("p",null,"This process includes a service task and an XOR gateway. Select the service task and fill in the properties. Set the ",(0,o.kt)("strong",{parentName:"p"},"Type")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"test-worker"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"process",src:n(60718).Z})),(0,o.kt)("p",null,"Deploy the new process."))),(0,o.kt)("p",null,"Now you can connect a worker for the configured service task:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'zbctl create worker test-worker --handler "echo {\\"return\\":\\"Pong\\"}"\n')))}p.isMDXComponent=!0},86010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})},61416:function(e,t,n){"use strict";t.Z=n.p+"assets/files/gettingstarted_quickstart_advanced-7a135837ae0d1d31680feeea3013bc53.bpmn"},75843:function(e,t,n){"use strict";t.Z=n.p+"assets/images/cloud-modeler-advanced-process-id-15c56ff2b88ecc6722e5e246e03d4407.png"},60039:function(e,t,n){"use strict";t.Z=n.p+"assets/images/cloud-modeler-advanced-31ddc8eb308bc230863d6148aafbaf11.png"},63743:function(e,t,n){"use strict";t.Z=n.p+"assets/images/zeebe-modeler-advanced-process-id-5eb4153cdfac8cc641ba997d139c9b2a.png"},60718:function(e,t,n){"use strict";t.Z=n.p+"assets/images/zeebe-modeler-advanced-6b5bd0dd88f8aa9f4f2bf7e3955f5621.png"},10755:function(e,t,n){"use strict";t.Z=n.p+"assets/images/import-diagram-4dafc7d1ae0174ca27557e7dd1f96958.png"}}]);