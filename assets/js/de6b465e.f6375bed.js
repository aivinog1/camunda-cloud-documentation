(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[22970],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36985:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o={id:"health",title:"Health status"},s={unversionedId:"product-manuals/zeebe/deployment-guide/operations/health",id:"version-0.26/product-manuals/zeebe/deployment-guide/operations/health",isDocsHomePage:!1,title:"Health status",description:"Broker",source:"@site/versioned_docs/version-0.26/product-manuals/zeebe/deployment-guide/operations/health.md",sourceDirName:"product-manuals/zeebe/deployment-guide/operations",slug:"/product-manuals/zeebe/deployment-guide/operations/health",permalink:"/docs/0.26/product-manuals/zeebe/deployment-guide/operations/health",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/product-manuals/zeebe/deployment-guide/operations/health.md",version:"0.26",frontMatter:{id:"health",title:"Health status"},sidebar:"version-0.26/Product Manuals",previous:{title:"Metrics",permalink:"/docs/0.26/product-manuals/zeebe/deployment-guide/operations/metrics"},next:{title:"Backpressure",permalink:"/docs/0.26/product-manuals/zeebe/deployment-guide/operations/backpressure"}},l=[{value:"Broker",id:"broker",children:[{value:"Ready check",id:"ready-check",children:[]},{value:"Health check",id:"health-check",children:[]}]},{value:"Gateway",id:"gateway",children:[{value:"Health status",id:"health-status",children:[]},{value:"Startup probe",id:"startup-probe",children:[]},{value:"Liveness probe",id:"liveness-probe",children:[]},{value:"Status responses",id:"status-responses",children:[]},{value:"Customization",id:"customization",children:[]}]}],u={toc:l};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"broker"},"Broker"),(0,i.kt)("p",null,"Zeebe broker exposes two http endpoints to query its health status:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ready check"),(0,i.kt)("li",{parentName:"ul"},"Health check")),(0,i.kt)("h3",{id:"ready-check"},"Ready check"),(0,i.kt)("p",null,"Ready check endpoint is exposed via ",(0,i.kt)("inlineCode",{parentName:"p"},"http://{zeebe-broker}:{zeebe.broker.network.monitoringApi.port}/ready")," (by default port 9600).\nThis endpoint return an empty 204 response. If it is not ready, it will return a 503 error."),(0,i.kt)("p",null,"A broker is ready when it has installed all necessary services to start processing in all partitions.\nA broker is ready doesn't mean that it is the leader for the partitions.\nIt only means that it is participating in the replication and can be either a leader or a follower of all the partitions that is assigned to it.\nOnce it is ready it will never become unready again."),(0,i.kt)("p",null,"A ready check is useful, for example, to use as a ",(0,i.kt)("inlineCode",{parentName:"p"},"readinessProbe")," in a kubernetes configuration to control when a pod can be restarted for rolling upgrade.\nDepending on the cluster configuration, restarting one pod before the previous one is ready might make the system unavailable because the quorum of replicas is not available.\nBy configuring a ",(0,i.kt)("inlineCode",{parentName:"p"},"readinessProbe")," that uses the ready check endpoint we can inform Kubernetes when it is safe to proceed with rolling update."),(0,i.kt)("h3",{id:"health-check"},"Health check"),(0,i.kt)("p",null,"Health check endpoint is exposed via ",(0,i.kt)("inlineCode",{parentName:"p"},"http://{zeebe-broker}:{zeebe.broker.network.monitoringApi.port}/health")," (by default port 9600).\nThis endpoint return an empty 204 response if the broker is healthy. If it is not healthy, it will return a 503 error.\nA broker is never healthy before it is ready.\nUnlike ready check, a broker can become unhealthy after it is healthy.\nHence it gives a better status of a running broker."),(0,i.kt)("p",null,"A broker is healthy, when it can process workflows, accepts commands, and perform all its expected tasks.\nIf it is unhealthy, then it can mean three things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"it is only temporarily unhealthy"),", e.g. due to environmental circumstances such as temporary I/O issues"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"it is partially unhealthy"),", could mean that one or more partitions is unhealthy, while the rest of them are able to process workflows"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"it is completely dead"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/0.26/product-manuals/zeebe/deployment-guide/operations/metrics"},"Metrics")," give more insight into which partition is healthy or unhealthy.\nWhen a broker becomes unhealthy, it is recommended to check the logs to see what went wrong."),(0,i.kt)("h2",{id:"gateway"},"Gateway"),(0,i.kt)("p",null,"Zeebe gateway exposes three HTTP endpoints to query its health status:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Health status - ",(0,i.kt)("inlineCode",{parentName:"li"},"http://{zeebe-gateway}:9600/health")),(0,i.kt)("li",{parentName:"ul"},"Startup probe - ",(0,i.kt)("inlineCode",{parentName:"li"},"http://{zeebe-gateway}:9600/actuator/health/startup")),(0,i.kt)("li",{parentName:"ul"},"Liveness probe - ",(0,i.kt)("inlineCode",{parentName:"li"},"http://{zeebe-gateway}:9600/actuator/health/liveness"))),(0,i.kt)("p",null,"(The default port can be changed in the configuration: ",(0,i.kt)("inlineCode",{parentName:"p"},"{zeebe.gateway.monitoring.port}"),")"),(0,i.kt)("h3",{id:"health-status"},"Health status"),(0,i.kt)("p",null,"The gateway is healthy if it:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Started successfully"),(0,i.kt)("li",{parentName:"ul"},"Has sufficient free memory and disk space to work with"),(0,i.kt)("li",{parentName:"ul"},"Is able to respond to requests within a defined timeout"),(0,i.kt)("li",{parentName:"ul"},"Is aware of other nodes in the cluster"),(0,i.kt)("li",{parentName:"ul"},"Is aware of leaders for partitions")),(0,i.kt)("h3",{id:"startup-probe"},"Startup probe"),(0,i.kt)("p",null,"The gateway is started if it finished its boot sequence successfully and is ready to receive requests. It is no longer started when it initiated the shutdown sequence."),(0,i.kt)("p",null,"The started probe can be used as Kubernetes startup probe."),(0,i.kt)("h3",{id:"liveness-probe"},"Liveness probe"),(0,i.kt)("p",null,"The gateway is live if it:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Started successfully"),(0,i.kt)("li",{parentName:"ul"},"Has a minimal amount of free memory and disk space to work with"),(0,i.kt)("li",{parentName:"ul"},"Is able to respond to requests within a defined timeout, or misses the timeout for less than 10 minutes"),(0,i.kt)("li",{parentName:"ul"},"Is aware of other nodes in the cluster, or lost awareness of other nodes for less than 5 minutes"),(0,i.kt)("li",{parentName:"ul"},"Is aware of leaders for partitions, or lost awareness of partition leaders for less than 5 minutes")),(0,i.kt)("p",null,"The liveness probe can be used as Kubernetes liveness probe."),(0,i.kt)("h3",{id:"status-responses"},"Status responses"),(0,i.kt)("p",null,"Each endpoint returns a status which can be one of"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"UNKNWON")," (HTTP status code 200)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"UP")," (HTTP status code 200)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DOWN")," (HTTP status code 503)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"OUT_OF_SERVICE")," (HTTP status code 503)")),(0,i.kt)("p",null,"If details are enabled (default) the response will also contain additional details."),(0,i.kt)("h3",{id:"customization"},"Customization"),(0,i.kt)("p",null,"Health indicators are set to sensible defaults. For specific use cases, it might be necessary to ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.26/product-manuals/zeebe/deployment-guide/configuration/gateway-health-probes"},"customize health indicators"),"."))}p.isMDXComponent=!0}}]);