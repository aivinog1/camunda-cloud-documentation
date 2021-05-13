(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[29745],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(k,i(i({ref:t},p),{},{components:r})):n.createElement(k,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},23835:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i={id:"network-ports",title:"Network Ports"},s={unversionedId:"product-manuals/zeebe/operations/network-ports",id:"version-0.25/product-manuals/zeebe/operations/network-ports",isDocsHomePage:!1,title:"Network Ports",description:"The broker cluster sits behind the gRPC Gateway, which handles all requests from clients/workers and forwards events to brokers.",source:"@site/versioned_docs/version-0.25/product-manuals/zeebe/operations/network-ports.md",sourceDirName:"product-manuals/zeebe/operations",slug:"/product-manuals/zeebe/operations/network-ports",permalink:"/docs/0.25/product-manuals/zeebe/operations/network-ports",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.25/product-manuals/zeebe/operations/network-ports.md",version:"0.25",frontMatter:{id:"network-ports",title:"Network Ports"},sidebar:"version-0.25/Product Manuals",previous:{title:"Resoure Planning",permalink:"/docs/0.25/product-manuals/zeebe/operations/resource-planning"},next:{title:"Setting up a Zeebe Cluster",permalink:"/docs/0.25/product-manuals/zeebe/operations/setting-up-a-cluster"}},l=[{value:"Gateway",id:"gateway",children:[]},{value:"Broker",id:"broker",children:[]}],c={toc:l};function p(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The broker cluster sits behind the gRPC Gateway, which handles all requests from clients/workers and forwards events to brokers."),(0,a.kt)("h2",{id:"gateway"},"Gateway"),(0,a.kt)("p",null,"The gateway needs to receive communication on "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"zeebe.gateway.network.port: 26500")," from clients/workers, and "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"zeebe.gateway.cluster.contactPoint: 127.0.0.1:26502")," from brokers ")),(0,a.kt)("p",null,"The relevant ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.25/product-manuals/zeebe/appendix/gateway-config-template"},"configuration")," settings are:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Config file\n    zeebe:\n      gateway:\n        network:\n          port: 26500\n        cluster:\n          contactPoint: 127.0.0.1:26502\n        \n\nEnvironment Variables\n  ZEEBE_GATEWAY_CLUSTER_NETWORK_PORT = 26500\n  ZEEBE_GATEWAY_CLUSTER_CONTACTPOINT = 127.0.0.1:26502  \n")),(0,a.kt)("h2",{id:"broker"},"Broker"),(0,a.kt)("p",null,"The broker needs to receive communication from the gateway and from other brokers. It also exposes a port for monitoring."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"zeebe.broker.network.commandApi.port: 26501"),": Gateway-to-broker communication, using an internal SBE (Simple Binary Encoding) protocol. This is the Command API port. This should be exposed to the gateway. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"zeebe.broker.network.internalApi.port: 26502"),": Inter-broker clustering using the Gossip and Raft protocols for partition replication, broker elections, topology sharing, and message subscriptions. This should be exposed to other brokers and the gateway."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"zeebe.broker.network.monitoringApi.port: 9600"),": Metrics and Readiness Probe. Prometheus metrics are exported on the route ",(0,a.kt)("inlineCode",{parentName:"li"},"/metrics"),". There is a readiness probe on ",(0,a.kt)("inlineCode",{parentName:"li"},"/ready"),".")),(0,a.kt)("p",null,"The relevant ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.25/product-manuals/zeebe/appendix/broker-config-template"},"configuration")," settings are:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Config file\n    zeebe:\n      broker:\n        network:\n          commandAPI:\n            port: 26501\n          internalAPI:\n            port: 26502\n          monitoringApi\n            port: 9600\n\nEnvironment Variables\n  ZEEBE_BROKER_NETWORK_COMMANDAPI_PORT = 26501\n  ZEEBE_BROKER_NETWORK_INTERNALAPI_PORT = 26501\n  ZEEBE_BROKER_NETWORK_MONITOIRNGAPI_PORT = 26501\n")))}p.isMDXComponent=!0}}]);