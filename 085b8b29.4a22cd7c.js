(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{450:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=p(n),m=r,d=b["".concat(c,".").concat(m)]||b[m]||s[m]||o;return n?a.a.createElement(d,i(i({ref:t},u),{},{components:n})):a.a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(450)),c={id:"zeebe-overview",title:"Zeebe Engine",sidebar_label:"Introduction"},i={unversionedId:"product-manuals/zeebe/zeebe-overview",id:"product-manuals/zeebe/zeebe-overview",isDocsHomePage:!1,title:"Zeebe Engine",description:"With Zeebe you can:",source:"@site/docs/product-manuals/zeebe/zeebe-overview.md",slug:"/product-manuals/zeebe/zeebe-overview",permalink:"/docs/product-manuals/zeebe/zeebe-overview",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/product-manuals/zeebe/zeebe-overview.md",version:"current",sidebar_label:"Introduction",sidebar:"Product Manuals",previous:{title:"Start a new process instance",permalink:"/docs/product-manuals/modeler/zeebe-modeler/start-instance"},next:{title:"Technical concepts",permalink:"/docs/product-manuals/zeebe/technical-concepts/index"}},l=[{value:"Next Steps",id:"next-steps",children:[]}],u={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"With Zeebe you can:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Define workflows graphically in BPMN 2.0"),Object(o.b)("li",{parentName:"ul"},"Choose any gRPC-supported programming language to implement your workers"),Object(o.b)("li",{parentName:"ul"},"Build workflows that react to events from Apache Kafka and other messaging platforms"),Object(o.b)("li",{parentName:"ul"},"Use a SaaS offering or deploy with Docker and Kubernetes (in the cloud or on-premises)"),Object(o.b)("li",{parentName:"ul"},"Scale horizontally to handle very high throughput"),Object(o.b)("li",{parentName:"ul"},"Rely on fault tolerance and high availability for your workflows"),Object(o.b)("li",{parentName:"ul"},"Export workflow data for monitoring and analysis"),Object(o.b)("li",{parentName:"ul"},"Engage with an active community")),Object(o.b)("h2",{id:"next-steps"},"Next Steps"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Get familiar with ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/technical-concepts/index"}),"technical concepts")),Object(o.b)("li",{parentName:"ul"},"Learn more about alternative ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/deployment-guide/index"}),"deployment options")," (e.g. how to run Zeebe in a local Docker environment during development)"),Object(o.b)("li",{parentName:"ul"},"Explore ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/open-source/community-contributions"}),"Community Contributions"))))}p.isMDXComponent=!0}}]);