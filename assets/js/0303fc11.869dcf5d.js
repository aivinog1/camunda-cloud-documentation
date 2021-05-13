(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[57511],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},65487:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),a={id:"connect-to-your-cluster",title:"Connect to your cluster"},c={unversionedId:"guides/getting-started/connect-to-your-cluster",id:"version-0.26/guides/getting-started/connect-to-your-cluster",isDocsHomePage:!1,title:"Connect to your cluster",description:"Installation",source:"@site/versioned_docs/version-0.26/guides/getting-started/connect-to-your-cluster.md",sourceDirName:"guides/getting-started",slug:"/guides/getting-started/connect-to-your-cluster",permalink:"/docs/0.26/guides/getting-started/connect-to-your-cluster",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/guides/getting-started/connect-to-your-cluster.md",version:"0.26",frontMatter:{id:"connect-to-your-cluster",title:"Connect to your cluster"},sidebar:"version-0.26/Guides",previous:{title:"Setup client connection credentials",permalink:"/docs/0.26/guides/getting-started/setup-client-connection-credentials"},next:{title:"Model your first process",permalink:"/docs/0.26/guides/getting-started/model-your-first-process"}},u=[{value:"Installation",id:"installation",children:[]},{value:"First connection",id:"first-connection",children:[]}],l={toc:u};function s(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Install the appropriate package."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i -g zbctl\n")),(0,i.kt)("h2",{id:"first-connection"},"First connection"),(0,i.kt)("p",null,"After creating a client and downloading the connection file, you will now need to source it to make it available in your environment. If these are known to the system, a client can communicate directly with its own cluster in the cloud without further configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"source ~/Downloads/CamundaCloudMgmtAPI-Client-test-client.txt\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"zbctl status\n")),(0,i.kt)("p",null,"As a result you will get a similar response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Cluster size: 1\nPartitions count: 2\nReplication factor: 1\nGateway version: unavailable\nBrokers:\n  Broker 0 - zeebe-0.zeebe-broker-service.456637ef-8832-428b-a2a4-82b531b25635-zeebe.svc.cluster.local:26501\n    Version: unavailable\n    Partition 1 : Leader\n    Partition 2 : Leader\n")))}s.isMDXComponent=!0}}]);