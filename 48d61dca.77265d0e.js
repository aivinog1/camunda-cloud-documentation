(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{178:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),i=(n(0),n(450)),o=n(455),c=n(456),l={id:"upgrade-zeebe",title:"Upgrade Zeebe"},s={unversionedId:"product-manuals/zeebe/deployment-guide/operations/upgrade-zeebe",id:"product-manuals/zeebe/deployment-guide/operations/upgrade-zeebe",isDocsHomePage:!1,title:"Upgrade Zeebe",description:"This section describes how to upgrade Zeebe to a new version.",source:"@site/docs/product-manuals/zeebe/deployment-guide/operations/upgrade-zeebe.md",slug:"/product-manuals/zeebe/deployment-guide/operations/upgrade-zeebe",permalink:"/docs/product-manuals/zeebe/deployment-guide/operations/upgrade-zeebe",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/product-manuals/zeebe/deployment-guide/operations/upgrade-zeebe.md",version:"current",sidebar:"Product Manuals",previous:{title:"Disk space",permalink:"/docs/product-manuals/zeebe/deployment-guide/operations/disk-space"},next:{title:"Community contributions",permalink:"/docs/product-manuals/zeebe/open-source/community-contributions"}},b=[{value:"Rolling upgrade",id:"rolling-upgrade",children:[]},{value:"Upgrade procedure for Zeebe &lt; 0.24.4",id:"upgrade-procedure-for-zeebe--0244",children:[{value:"Experimental: Detect reprocessing inconsistency",id:"experimental-detect-reprocessing-inconsistency",children:[]},{value:"Preparing the upgrade",id:"preparing-the-upgrade",children:[]},{value:"Performing the upgrade",id:"performing-the-upgrade",children:[]},{value:"Verifying the upgrade",id:"verifying-the-upgrade",children:[]}]},{value:"Partitions admin endpoint",id:"partitions-admin-endpoint",children:[{value:"Query the partition status",id:"query-the-partition-status",children:[]}]}],p={rightToc:b};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This section describes how to upgrade Zeebe to a new version."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Currently, we are facing an ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/zeebe-io/zeebe/issues/5581"}),"issue")," that can corrupt the data when upgrading to a new version. The issue affects the reprocessing (i.e. rehydrating the data from the records on the log stream) and can be omitted by restoring the data from a snapshot. Please follow the recommended procedure to minimize the risk of losing data. ",Object(i.b)("strong",{parentName:"p"},"This issue affects only users upgrading from a version lower than 0.24.4 to 0.24.4 or newer.")))),Object(i.b)("h2",{id:"rolling-upgrade"},"Rolling upgrade"),Object(i.b)("p",null,"Zeebe is designed to allow a rolling upgrade of a cluster. The brokers can be upgrade one after the other. The other brokers in the cluster continue processing until the whole upgrade is done."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Upgrade the first broker and wait until it is ready again"),Object(i.b)("li",{parentName:"ol"},"Continue with the next broker until all brokers are upgraded"),Object(i.b)("li",{parentName:"ol"},"Upgrade the standalone gateways")),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Helm Charts")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If you are using the Helm charts, simply update your values file and change the image tag to the new version you wish to upgrade to, then follow the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://helm.sh/docs/helm/helm_upgrade/"}),"Helm upgrade guide"),"."))),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If you are upgrading from a Zeebe version lower than 0.24.4, it is not recommended to perform a rolling upgrade. Please follow the recommended upgrade procedure instead."))),Object(i.b)("h2",{id:"upgrade-procedure-for-zeebe--0244"},"Upgrade procedure for Zeebe < 0.24.4"),Object(i.b)("p",null,"The following procedure describes how to upgrade a Zeebe broker pre 0.24.4. If the cluster contains multiple brokers then these steps can be done for all brokers in parallel. Standalone gateways should be upgraded after all brokers in the cluster are upgraded to avoid mismatches in the protocol version."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"This procedure results in a downtime of the whole cluster."))),Object(i.b)("h3",{id:"experimental-detect-reprocessing-inconsistency"},"Experimental: Detect reprocessing inconsistency"),Object(i.b)("p",null,"With Zeebe 0.24.5 and 0.25.1 a new exterimental feature was introduced which detects inconsistency of the logstream on upgrade to mitigate the following issue."),Object(i.b)("p",null,"We recommend to enable it after upgrading Zeebe from a version lower than 0.24.4 to a version greater than or equal to 0.24.4 on the first run after the upgrade, as described in the update proceedure. You can enable it using the following environment variable:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},'ZEEBE_BROKER_EXPERIMENTAL_DETECTREPROCESSINGINCONSISTENCY="true"')),Object(i.b)("p",null,"After you verified that the upgrade was successful, we recommend to disable it again by removing the environment variable and restarting your brokers."),Object(i.b)("h3",{id:"preparing-the-upgrade"},"Preparing the upgrade"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Stop the workflow processing",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Close all job workers"),Object(i.b)("li",{parentName:"ul"},"Interrupt the incoming connections to avoid user commands"))),Object(i.b)("li",{parentName:"ol"},"Wait until a snapshot is created for all partitions",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"By default, a snapshot is created every 15 minutes"),Object(i.b)("li",{parentName:"ul"},"Verify that a snapshot is created by looking at the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/deployment-guide/operations/metrics"}),"Metric")," ",Object(i.b)("inlineCode",{parentName:"li"},"zeebe_snapshot_count")," on the leader and the followers"),Object(i.b)("li",{parentName:"ul"},"Note that no snapshot is created if no processing happened since the last snapshot"))),Object(i.b)("li",{parentName:"ol"},"Make a backup of the ",Object(i.b)("inlineCode",{parentName:"li"},"data")," folder")),Object(i.b)("h3",{id:"performing-the-upgrade"},"Performing the upgrade"),Object(i.b)(o.a,{groupId:"in-zeebe-version",defaultValue:"inconsistency-detection-enabled",values:[{label:"With inconsistency detection",value:"inconsistency-detection-enabled"},{label:"Without inconsistency detection",value:"inconsistency-detection-disabled"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"inconsistency-detection-enabled",mdxType:"TabItem"},Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Shut down the broker"),Object(i.b)("li",{parentName:"ol"},"Replace the ",Object(i.b)("inlineCode",{parentName:"li"},"/bin")," and ",Object(i.b)("inlineCode",{parentName:"li"},"/lib")," folders with the versions of the new distribution"),Object(i.b)("li",{parentName:"ol"},"Start up the broker with the experimental inconsistency detection enabled"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#verifying-the-upgrade"}),"Verify the upgrade")),Object(i.b)("li",{parentName:"ol"},"Restart the broker with experimental inconsistency detection disabled"))),Object(i.b)(c.a,{value:"inconsistency-detection-disabled",mdxType:"TabItem"},Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Shut down the broker"),Object(i.b)("li",{parentName:"ol"},"Replace the ",Object(i.b)("inlineCode",{parentName:"li"},"/bin")," and ",Object(i.b)("inlineCode",{parentName:"li"},"/lib")," folders with the versions of the new distribution"),Object(i.b)("li",{parentName:"ol"},"Start up the broker"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#verifying-the-upgrade"}),"Verify the upgrade"))))),Object(i.b)("h3",{id:"verifying-the-upgrade"},"Verifying the upgrade"),Object(i.b)("p",null,"The upgrade is successful if the following conditions are met:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"the broker is ready (see ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/deployment-guide/operations/health#ready-check"}),"Ready Check"),")"),Object(i.b)("li",{parentName:"ul"},"the broker is healthy (see ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/deployment-guide/operations/health#health-check"}),"Health Check"),")"),Object(i.b)("li",{parentName:"ul"},"all partitions are healthy (see the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/deployment-guide/operations/metrics#metrics-related-to-health"}),"Metric")," ",Object(i.b)("inlineCode",{parentName:"li"},"zeebe_health"),")"),Object(i.b)("li",{parentName:"ul"},"the stream processors of the partition leaders are in the phase ",Object(i.b)("inlineCode",{parentName:"li"},"PROCESSING")," (see ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#partitions-admin-endpoint"}),"Partitions Admin Endpoint"),")")),Object(i.b)("p",null,"If the upgrade failed because of a known issue then a partition change its status to unhealthy, and the log output may contain the following error message:"),Object(i.b)("details",null,Object(i.b)("summary",null,"Sample Upgrade Error Message"),Object(i.b)("p",null,Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'Unexpected error on recovery happens.\nio.zeebe.engine.processor.InconsistentReprocessingException: Reprocessing issue detected!\n  Restore the data from a backup and follow the recommended upgrade procedure. [cause:\n  "The key of the record on the log stream doesn\'t match to the record from reprocessing.",\n  log-stream-record: {"partitionId":1,"value":{"version":1,"bpmnProcessId":"parallel-tasks",\n  "workflowKey":2251799813685249,"parentElementInstanceKey":-1,"parentWorkflowInstanceKey":-1,\n  "bpmnElementType":"PARALLEL_GATEWAY","flowScopeKey":2251799813685251,\n  "elementId":"ExclusiveGateway_0tkgnd5","workflowInstanceKey":2251799813685251},\n  "key":2251799813685256,"sourceRecordPosition":4294997784,"valueType":"WORKFLOW_INSTANCE",\n  "timestamp":1601025180728,"recordType":"EVENT","intent":"ELEMENT_ACTIVATING",\n  "rejectionType":"NULL_VAL","rejectionReason":"","position":4294998112},\n  reprocessing-record: {key=2251799813685255, sourceRecordPosition=4294997784,\n  intent=WorkflowInstanceIntent:ELEMENT_ACTIVATING, recordType=EVENT}]\n')))),Object(i.b)("p",null,"In this case, the broker should be rolled back to the previous version and the backup should be restored. Ensure that the upgrade was prepared correctly. If it is still unclear why it was not successful then please contact the Zeebe team and ask for guidance."),Object(i.b)("h2",{id:"partitions-admin-endpoint"},"Partitions admin endpoint"),Object(i.b)("p",null,"This endpoint allows querying the status of the partitions and performing operations to prepare an upgrade."),Object(i.b)(o.a,{groupId:"in-zeebe-version",defaultValue:"since-0.24",values:[{label:"In version 0.23",value:"0.23"},{label:"In version >= 0.24",value:"since-0.24"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"0.23",mdxType:"TabItem"},Object(i.b)("p",null,"The endpoint is available under ",Object(i.b)("inlineCode",{parentName:"p"},"http://{zeebe-broker}:{zeebe.broker.network.monitoringApi.port}/partitions")," (default port: ",Object(i.b)("inlineCode",{parentName:"p"},"9600"),"). "),Object(i.b)("p",null,"It is enabled by default and cannot be disabled.")),Object(i.b)(c.a,{value:"since-0.24",mdxType:"TabItem"},Object(i.b)("p",null,"The endpoint is available under ",Object(i.b)("inlineCode",{parentName:"p"},"http://{zeebe-broker}:{zeebe.broker.network.monitoringApi.port}/actuator/partitions")," (default port: ",Object(i.b)("inlineCode",{parentName:"p"},"9600"),")."),Object(i.b)("p",null,"It is enabled by default. It can be disabled in the configuration by setting:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"management.endpoint.partitions.enabled=false\n")))),Object(i.b)("h3",{id:"query-the-partition-status"},"Query the partition status"),Object(i.b)("p",null,"The status of the partitions can be queried by a ",Object(i.b)("inlineCode",{parentName:"p"},"GET")," request:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"/actuator/partitions\n")),Object(i.b)("p",null,"The response contains all partitions of the broker mapped to the partition-id."),Object(i.b)("details",null,Object(i.b)("summary",null,"Full Response"),Object(i.b)("p",null,Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n    "1":{\n        "role":"LEADER",\n        "snapshotId":"399-1-1601275126554-490-490",\n        "processedPosition":490,\n        "processedPositionInSnapshot":490,\n        "streamProcessorPhase":"PROCESSING"\n    }\n}\n')))))}d.isMDXComponent=!0},450:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||i;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},451:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},452:function(e,t,n){"use strict";var a=n(0),r=n(453);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},453:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},455:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(452),o=n(451),c=n(53),l=n.n(c),s=37,b=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.children,p=e.defaultValue,d=e.values,u=e.groupId,m=e.className,h=Object(i.a)(),g=h.tabGroupChoices,O=h.setTabGroupChoices,f=Object(a.useState)(p),j=f[0],v=f[1];if(null!=u){var y=g[u];null!=y&&y!==j&&d.some((function(e){return e.value===y}))&&v(y)}var N=function(e){v(e),null!=u&&O(u,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},m)},d.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(a.cloneElement)(c.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},c.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},456:function(e,t,n){"use strict";var a=n(3),r=n(0),i=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return i.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}}}]);