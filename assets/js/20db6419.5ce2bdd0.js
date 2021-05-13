(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[97668],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},16196:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i={id:"zeebe-overview",title:"Zeebe: the Workflow engine for the Cloud Age"},l={unversionedId:"product-manuals/zeebe/zeebe-overview",id:"version-0.25/product-manuals/zeebe/zeebe-overview",isDocsHomePage:!1,title:"Zeebe: the Workflow engine for the Cloud Age",description:"Zeebe is a cloud-native workflow engine for microservices orchestration",source:"@site/versioned_docs/version-0.25/product-manuals/zeebe/zeebe-overview.md",sourceDirName:"product-manuals/zeebe",slug:"/product-manuals/zeebe/zeebe-overview",permalink:"/docs/0.25/product-manuals/zeebe/zeebe-overview",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.25/product-manuals/zeebe/zeebe-overview.md",version:"0.25",frontMatter:{id:"zeebe-overview",title:"Zeebe: the Workflow engine for the Cloud Age"},sidebar:"version-0.25/Product Manuals",previous:{title:"Install the Modeler",permalink:"/docs/0.25/product-manuals/modeler/install-the-modeler"},next:{title:"Introduction to Zeebe",permalink:"/docs/0.25/product-manuals/zeebe/introduction/index"}},c=[{value:"Zeebe is a cloud-native workflow engine for microservices orchestration",id:"zeebe-is-a-cloud-native-workflow-engine-for-microservices-orchestration",children:[]}],u={toc:c};function s(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("img",{src:"/img/zeebe-brand.svg",height:"100px"}),(0,a.kt)("h3",{id:"zeebe-is-a-cloud-native-workflow-engine-for-microservices-orchestration"},"Zeebe is a cloud-native workflow engine for microservices orchestration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Define workflows graphically in BPMN 2.0"),(0,a.kt)("li",{parentName:"ul"},"Choose any gRPC-supported programming language"),(0,a.kt)("li",{parentName:"ul"},"Deploy with Docker and Kubernetes (in the cloud or on-premises)"),(0,a.kt)("li",{parentName:"ul"},"Build workflows that react to events from Apache Kafka and other messaging platforms"),(0,a.kt)("li",{parentName:"ul"},"Scale horizontally to handle very high throughput"),(0,a.kt)("li",{parentName:"ul"},"Fault tolerance (no relational database required)"),(0,a.kt)("li",{parentName:"ul"},"Export workflow data for monitoring and analysis"),(0,a.kt)("li",{parentName:"ul"},"Engage with an active community")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"First Steps")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.25/product-manuals/zeebe/basics/index"},"Read up on Zeebe's core concepts")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.25/product-manuals/zeebe/introduction/install"},"Run Zeebe with Docker or download a distribution")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.25/product-manuals/zeebe/getting-started/index"},"Try the Getting Started tutorial"))))}s.isMDXComponent=!0}}]);