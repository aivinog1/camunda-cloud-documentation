(window.webpackJsonp=window.webpackJsonp||[]).push([[300],{370:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(450)),i={id:"network-ports",title:"Network Ports"},c={unversionedId:"product-manuals/zeebe/operations/network-ports",id:"version-0.25/product-manuals/zeebe/operations/network-ports",isDocsHomePage:!1,title:"Network Ports",description:"The broker cluster sits behind the gRPC Gateway, which handles all requests from clients/workers and forwards events to brokers.",source:"@site/versioned_docs/version-0.25/product-manuals/zeebe/operations/network-ports.md",slug:"/product-manuals/zeebe/operations/network-ports",permalink:"/docs/0.25/product-manuals/zeebe/operations/network-ports",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.25/product-manuals/zeebe/operations/network-ports.md",version:"0.25",sidebar:"version-0.25/Product Manuals",previous:{title:"Resoure Planning",permalink:"/docs/0.25/product-manuals/zeebe/operations/resource-planning"},next:{title:"Setting up a Zeebe Cluster",permalink:"/docs/0.25/product-manuals/zeebe/operations/setting-up-a-cluster"}},s=[{value:"Gateway",id:"gateway",children:[]},{value:"Broker",id:"broker",children:[]}],l={rightToc:s};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The broker cluster sits behind the gRPC Gateway, which handles all requests from clients/workers and forwards events to brokers."),Object(a.b)("h2",{id:"gateway"},"Gateway"),Object(a.b)("p",null,"The gateway needs to receive communication on "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"zeebe.gateway.network.port: 26500")," from clients/workers, and "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"zeebe.gateway.cluster.contactPoint: 127.0.0.1:26502")," from brokers ")),Object(a.b)("p",null,"The relevant ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/0.25/product-manuals/zeebe/appendix/gateway-config-template"}),"configuration")," settings are:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"Config file\n    zeebe:\n      gateway:\n        network:\n          port: 26500\n        cluster:\n          contactPoint: 127.0.0.1:26502\n        \n\nEnvironment Variables\n  ZEEBE_GATEWAY_CLUSTER_NETWORK_PORT = 26500\n  ZEEBE_GATEWAY_CLUSTER_CONTACTPOINT = 127.0.0.1:26502  \n")),Object(a.b)("h2",{id:"broker"},"Broker"),Object(a.b)("p",null,"The broker needs to receive communication from the gateway and from other brokers. It also exposes a port for monitoring."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"zeebe.broker.network.commandApi.port: 26501"),": Gateway-to-broker communication, using an internal SBE (Simple Binary Encoding) protocol. This is the Command API port. This should be exposed to the gateway. "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"zeebe.broker.network.internalApi.port: 26502"),": Inter-broker clustering using the Gossip and Raft protocols for partition replication, broker elections, topology sharing, and message subscriptions. This should be exposed to other brokers and the gateway."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"zeebe.broker.network.monitoringApi.port: 9600"),": Metrics and Readiness Probe. Prometheus metrics are exported on the route ",Object(a.b)("inlineCode",{parentName:"li"},"/metrics"),". There is a readiness probe on ",Object(a.b)("inlineCode",{parentName:"li"},"/ready"),".")),Object(a.b)("p",null,"The relevant ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/0.25/product-manuals/zeebe/appendix/broker-config-template"}),"configuration")," settings are:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"Config file\n    zeebe:\n      broker:\n        network:\n          commandAPI:\n            port: 26501\n          internalAPI:\n            port: 26502\n          monitoringApi\n            port: 9600\n\nEnvironment Variables\n  ZEEBE_BROKER_NETWORK_COMMANDAPI_PORT = 26501\n  ZEEBE_BROKER_NETWORK_INTERNALAPI_PORT = 26501\n  ZEEBE_BROKER_NETWORK_MONITOIRNGAPI_PORT = 26501\n")))}p.isMDXComponent=!0},450:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(r),d=n,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||a;return r?o.a.createElement(m,c(c({ref:t},l),{},{components:r})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);