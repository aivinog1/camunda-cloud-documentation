(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[68477],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),h=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=h(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=h(a),m=r,c=p["".concat(o,".").concat(m)]||p[m]||u[m]||i;return a?n.createElement(c,l(l({ref:t},d),{},{components:a})):n.createElement(c,l({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var h=2;h<i;h++)l[h]=a[h];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},80764:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return o},default:function(){return d}});var n=a(22122),r=a(19756),i=(a(67294),a(3905)),l={id:"gateway-health-probes",title:"Gateway health probes"},s={unversionedId:"product-manuals/zeebe/deployment-guide/configuration/gateway-health-probes",id:"product-manuals/zeebe/deployment-guide/configuration/gateway-health-probes",isDocsHomePage:!1,title:"Gateway health probes",description:"The health status for a standalone gateway is available at {zeebe-gateway}:8080/actuator/health",source:"@site/docs/product-manuals/zeebe/deployment-guide/configuration/gateway-health-probes.md",sourceDirName:"product-manuals/zeebe/deployment-guide/configuration",slug:"/product-manuals/zeebe/deployment-guide/configuration/gateway-health-probes",permalink:"/docs/product-manuals/zeebe/deployment-guide/configuration/gateway-health-probes",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/product-manuals/zeebe/deployment-guide/configuration/gateway-health-probes.md",version:"current",frontMatter:{id:"gateway-health-probes",title:"Gateway health probes"},sidebar:"Product Manuals",previous:{title:"Logging",permalink:"/docs/product-manuals/zeebe/deployment-guide/configuration/logging"},next:{title:"Environment variables",permalink:"/docs/product-manuals/zeebe/deployment-guide/configuration/environment-variables"}},o=[{value:"Startup probe",id:"startup-probe",children:[]},{value:"Liveness probe",id:"liveness-probe",children:[]},{value:"Customizing health probes",id:"customizing-health-probes",children:[{value:"Startup probe",id:"startup-probe-1",children:[]},{value:"Liveness probe",id:"liveness-probe-1",children:[]},{value:"Gateway started",id:"gateway-started",children:[]},{value:"Gateway responsive",id:"gateway-responsive",children:[]},{value:"Gateway cluster awareness",id:"gateway-cluster-awareness",children:[]},{value:"Gateway partition leader awareness",id:"gateway-partition-leader-awareness",children:[]},{value:"Disk space",id:"disk-space",children:[]},{value:"Memory",id:"memory",children:[]}]}],h={toc:o};function d(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The health status for a standalone gateway is available at ",(0,i.kt)("inlineCode",{parentName:"p"},"{zeebe-gateway}:8080/actuator/health")),(0,i.kt)("p",null,"The following health indicators are enabled by default"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Gateway Started")," - checks whether the gateway is running (i.e. not currently starting and not yet shut down)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Gateway Responsive")," - checks whether the gateway can handle a request within a given timeout"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Gateway Cluster Awareness")," - checks whether the gateway is aware of other nodes in the cluster"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Gateway Partition Leader Awareness")," - checks whether the gateway is aware of partition leaders in the cluster"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Disk Space")," - checks that the free disk space is greater than 10 MB"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Memory")," - checks that at least 10% of max memory (heap) are still available")),(0,i.kt)("p",null,"Health indicators are set to sensible defaults. For specific use cases, it might be necessary to customize health probes."),(0,i.kt)("h2",{id:"startup-probe"},"Startup probe"),(0,i.kt)("p",null,"The started probe is available at ",(0,i.kt)("inlineCode",{parentName:"p"},"{zeebe-gateway}:8080/actuator/health/startup")),(0,i.kt)("p",null,"In the default configuration this is merely an alias for the ",(0,i.kt)("strong",{parentName:"p"},"Gateway Started")," health indicator. Other configurations are possible (see below)."),(0,i.kt)("h2",{id:"liveness-probe"},"Liveness probe"),(0,i.kt)("p",null,"The liveness probe is available at ",(0,i.kt)("inlineCode",{parentName:"p"},"{zeebe-gateway}:8080/actuator/health/liveness")),(0,i.kt)("p",null,"It is based on the health indicators mentioned above."),(0,i.kt)("p",null,"In the default configuration, the liveness probe is comprised of the following health indiactors:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Gateway Started")," - checks whether the gateway is running (i.e. not currently starting and not yet shut down)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Liveness Gateway Responsive")," - checks whether the gateway can handle a request within an ample timeout, but will only report a ",(0,i.kt)("inlineCode",{parentName:"li"},"DOWN")," health status after the underlying health indicator is down for more than 10 minutes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Liveness Gateway Cluster Awareness")," - based on gateway cluster awareness, but will only report a ",(0,i.kt)("inlineCode",{parentName:"li"},"DOWN")," health status after the underlying health indicator is down for more than 5 minutes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Liveness Gateway Partition Leader Awareness")," - based on gateway partition leader awareness, but will only report a ",(0,i.kt)("inlineCode",{parentName:"li"},"DOWN")," health status after the underlying health indicator is down for more than 5 minutes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Liveness Disk Space")," - checks that the free disk space is greater than 1 MB"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Liveness Memory")," - checks that at least 1% of max memory (heap) are still available")),(0,i.kt)("p",null,"Note that health indicators with the ",(0,i.kt)("em",{parentName:"p"},"liveness")," prefix are intended to be customized for the liveness probe. This allows defining tighter thresholds (e.g. for free memory 1% for liveness vs. 10% for health), as well as adding tolerance for short downtimes (e.g. gateway has no awareness of other nodes in the cluster for more than 5 minutes)."),(0,i.kt)("h2",{id:"customizing-health-probes"},"Customizing health probes"),(0,i.kt)("p",null,"Global settings for all health indicators:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"management.health.defaults.enabled=true")," - enables (default) or disables all health indicators"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"management.endpoint.health.show-details=always/never")," - toggles whether a summary or details (default) of the health indicators will be returned")),(0,i.kt)("h3",{id:"startup-probe-1"},"Startup probe"),(0,i.kt)("p",null,"Settings for started probe:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"management.endpoint.health.group.startup.show-details=never")," - toggles whether a summary (default) or details of the startup probe will be returned"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"management.endpoint.health.group.startup.include=gatewayStarted")," - defines which health indicators are included in the startup probe")),(0,i.kt)("h3",{id:"liveness-probe-1"},"Liveness probe"),(0,i.kt)("p",null,"Settings for liveness probe:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"management.endpoint.health.group.liveness.show-details=never")," - toggles whether a summary (default) or details of the liveness probe will be returned"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"management.endpoint.health.group.liveness.include=gatewayStarted,livenessGatewayResponsive,livenessGatewayClusterAwareness,livenessGatewayPartitionLeaderAwareness,livenessDiskSpace,livenessMemory")," - defines which health indicators are included in the liveness probe")),(0,i.kt)("p",null,"Note that the individual contributing health indicators of the liveness probe can be configured as well (see below)."),(0,i.kt)("h3",{id:"gateway-started"},"Gateway started"),(0,i.kt)("p",null,"Settings for gateway started health indicator:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"management.health.gateway-started.enabled=true")," - enables (default) or disables this health indicator")),(0,i.kt)("h3",{id:"gateway-responsive"},"Gateway responsive"),(0,i.kt)("p",null,"Settings for gateway responsiveness health indicator:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"management.health.gateway-responsive.enabled=true")," - enables (default) or disables this health indicator"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"management.health.gateway-responsive.requestTimeout=500ms")," - defines the timeout for the request; if the test completes before the timeout, the health status is ",(0,i.kt)("inlineCode",{parentName:"li"},"UP"),", otherwise it is ",(0,i.kt)("inlineCode",{parentName:"li"},"DOWN")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"management.health.liveness.gateway-responsive.requestTimeout=5s")," - defines the timeout for the request for liveness probe; if the request completes before the timeout, the health status is ",(0,i.kt)("inlineCode",{parentName:"li"},"UP")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"management.health.liveness.gateway-responsive.maxdowntime=10m")," - - defines the maximum downtime before the liveness health indicator for responsiveness will flip")),(0,i.kt)("h3",{id:"gateway-cluster-awareness"},"Gateway cluster awareness"),(0,i.kt)("p",null,"Settings for gateway cluster awareness health indicator:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"management.health.gateway-clusterawareness.enabled=true")," - enables (default) or disables this health indicator (and its liveness counterpart)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"management.health.liveness.gateway-clusterawareness.maxdowntime=5m")," - defines the maximum downtime before the liveness health indicator for cluster awareness will flip. In other words: this health indicator will report ",(0,i.kt)("inlineCode",{parentName:"li"},"DOWN")," after the gateway was unaware of other members in the cluster for more than 5 minutes")),(0,i.kt)("h3",{id:"gateway-partition-leader-awareness"},"Gateway partition leader awareness"),(0,i.kt)("p",null,"Settings for gateway partition leader awareness health indicator:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"management.health.gateway-partitionleaderawareness.enabled=true")," - enables (default) or disables this health indicator (and its liveness counterpart)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"management.health.liveness.gateway-partitionleaderawareness.maxdowntime=5m")," - defines the maximum downtime before the liveness health indicator for partition leader awareness will flip. In other words: this health indicator will report ",(0,i.kt)("inlineCode",{parentName:"li"},"DOWN")," after the gateway was unaware of partition leaders for more than 5 minutes")),(0,i.kt)("h3",{id:"disk-space"},"Disk space"),(0,i.kt)("p",null,"This is arguably the least critical health indicator given that the standalone gateway does not write to disk. The only exception may be the writing of log files, which depend on the log configuration."),(0,i.kt)("p",null,"Settings for disk space health indicator:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"management.health.diskspace.enabled=true")," - enables (default) or disables this health indicator (and its liveness counterpart)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"management.health.diskspace.threshold=10MB")," - defines the threshold for the required free disk space"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"management.health.diskspace.path=.")," - defines the path for which the free disk space is examined"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"management.health.liveness.diskspace.threshold=1MB")," - defines the threshold for the required free disk space for liveness"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"management.health.liveness.diskspace.path=.")," - defines the path for which the free disk space for liveness is examined")),(0,i.kt)("h3",{id:"memory"},"Memory"),(0,i.kt)("p",null,"This health indicator examines free memory (heap)."),(0,i.kt)("p",null,"Settings for memory health indicator:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"management.health.memory.enabled=true")," - enables (default) or disables this health indicator (and its liveness counterpart)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"management.health.memory.threshold=0.1")," - defines the threshold for the required free memory. The default is 0.1 which is interpreted as 10% of max memory"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"management.health.liveness.memory.threshold=0.01")," - defines the threshold for the required free memory for liveness. The default is 0.01 which is interpreted as 10 of max memory")))}d.isMDXComponent=!0}}]);