(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[91486],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},58215:function(e,t,n){"use strict";var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},41395:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(67294),r=n(80944),i=n(86010),o="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,d=39;var p=function(e){var t=e.lazy,n=e.block,p=e.defaultValue,u=e.values,c=e.groupId,m=e.className,h=(0,r.Z)(),g=h.tabGroupChoices,f=h.setTabGroupChoices,k=(0,a.useState)(p),b=k[0],v=k[1],y=a.Children.toArray(e.children),N=[];if(null!=c){var w=g[c];null!=w&&w!==b&&u.some((function(e){return e.value===w}))&&v(w)}var T=function(e){var t=e.currentTarget,n=N.indexOf(t),a=u[n].value;v(a),null!=c&&(f(c,a),setTimeout((function(){var e,n,a,r,i,o,s,d;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,s=o.innerHeight,d=o.innerWidth,n>=0&&i<=d&&r<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},E=function(e){var t,n;switch(e.keyCode){case d:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case s:var r=N.indexOf(e.target)-1;n=N[r]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},u.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":b===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:E,onFocus:T,onClick:T},n)}))),t?(0,a.cloneElement)(y.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},79443:function(e,t,n){"use strict";var a=(0,n(67294).createContext)(void 0);t.Z=a},80944:function(e,t,n){"use strict";var a=n(67294),r=n(79443);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},44582:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o=n(41395),l=n(58215),s={id:"upgrade-zeebe",title:"Upgrade Zeebe"},d={unversionedId:"product-manuals/zeebe/deployment-guide/operations/upgrade-zeebe",id:"version-0.26/product-manuals/zeebe/deployment-guide/operations/upgrade-zeebe",isDocsHomePage:!1,title:"Upgrade Zeebe",description:"This section describes how to upgrade Zeebe to a new version.",source:"@site/versioned_docs/version-0.26/product-manuals/zeebe/deployment-guide/operations/upgrade-zeebe.md",sourceDirName:"product-manuals/zeebe/deployment-guide/operations",slug:"/product-manuals/zeebe/deployment-guide/operations/upgrade-zeebe",permalink:"/docs/0.26/product-manuals/zeebe/deployment-guide/operations/upgrade-zeebe",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/product-manuals/zeebe/deployment-guide/operations/upgrade-zeebe.md",version:"0.26",frontMatter:{id:"upgrade-zeebe",title:"Upgrade Zeebe"},sidebar:"version-0.26/Product Manuals",previous:{title:"Disk space",permalink:"/docs/0.26/product-manuals/zeebe/deployment-guide/operations/disk-space"},next:{title:"Community contributions",permalink:"/docs/0.26/product-manuals/zeebe/open-source/community-contributions"}},p=[{value:"Rolling upgrade",id:"rolling-upgrade",children:[]},{value:"Upgrade procedure for Zeebe &lt; 0.24.4",id:"upgrade-procedure-for-zeebe--0244",children:[{value:"Experimental: Detect reprocessing inconsistency",id:"experimental-detect-reprocessing-inconsistency",children:[]},{value:"Preparing the upgrade",id:"preparing-the-upgrade",children:[]},{value:"Performing the upgrade",id:"performing-the-upgrade",children:[]},{value:"Verifying the upgrade",id:"verifying-the-upgrade",children:[]}]},{value:"Partitions admin endpoint",id:"partitions-admin-endpoint",children:[{value:"Query the partition status",id:"query-the-partition-status",children:[]}]}],u={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section describes how to upgrade Zeebe to a new version."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Currently, we are facing an ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe/issues/5581"},"issue")," that can corrupt the data when upgrading to a new version. The issue affects the reprocessing (i.e. rehydrating the data from the records on the log stream) and can be omitted by restoring the data from a snapshot. Please follow the recommended procedure to minimize the risk of losing data. ",(0,i.kt)("strong",{parentName:"p"},"This issue affects only users upgrading from a version lower than 0.24.4 to 0.24.4 or newer.")))),(0,i.kt)("h2",{id:"rolling-upgrade"},"Rolling upgrade"),(0,i.kt)("p",null,"Zeebe is designed to allow a rolling upgrade of a cluster. The brokers can be upgrade one after the other. The other brokers in the cluster continue processing until the whole upgrade is done."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Upgrade the first broker and wait until it is ready again"),(0,i.kt)("li",{parentName:"ol"},"Continue with the next broker until all brokers are upgraded"),(0,i.kt)("li",{parentName:"ol"},"Upgrade the standalone gateways")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Helm Charts")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you are using the Helm charts, simply update your values file and change the image tag to the new version you wish to upgrade to, then follow the ",(0,i.kt)("a",{parentName:"p",href:"https://helm.sh/docs/helm/helm_upgrade/"},"Helm upgrade guide"),"."))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you are upgrading from a Zeebe version lower than 0.24.4, it is not recommended to perform a rolling upgrade. Please follow the recommended upgrade procedure instead."))),(0,i.kt)("h2",{id:"upgrade-procedure-for-zeebe--0244"},"Upgrade procedure for Zeebe < 0.24.4"),(0,i.kt)("p",null,"The following procedure describes how to upgrade a Zeebe broker pre 0.24.4. If the cluster contains multiple brokers then these steps can be done for all brokers in parallel. Standalone gateways should be upgraded after all brokers in the cluster are upgraded to avoid mismatches in the protocol version."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This procedure results in a downtime of the whole cluster."))),(0,i.kt)("h3",{id:"experimental-detect-reprocessing-inconsistency"},"Experimental: Detect reprocessing inconsistency"),(0,i.kt)("p",null,"With Zeebe 0.24.5 and 0.25.1 a new exterimental feature was introduced which detects inconsistency of the logstream on upgrade to mitigate the following issue."),(0,i.kt)("p",null,"We recommend to enable it after upgrading Zeebe from a version lower than 0.24.4 to a version greater than or equal to 0.24.4 on the first run after the upgrade, as described in the update proceedure. You can enable it using the following environment variable:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'ZEEBE_BROKER_EXPERIMENTAL_DETECTREPROCESSINGINCONSISTENCY="true"')),(0,i.kt)("p",null,"After you verified that the upgrade was successful, we recommend to disable it again by removing the environment variable and restarting your brokers."),(0,i.kt)("h3",{id:"preparing-the-upgrade"},"Preparing the upgrade"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Stop the workflow processing",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Close all job workers"),(0,i.kt)("li",{parentName:"ul"},"Interrupt the incoming connections to avoid user commands"))),(0,i.kt)("li",{parentName:"ol"},"Wait until a snapshot is created for all partitions",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"By default, a snapshot is created every 15 minutes"),(0,i.kt)("li",{parentName:"ul"},"Verify that a snapshot is created by looking at the ",(0,i.kt)("a",{parentName:"li",href:"/docs/0.26/product-manuals/zeebe/deployment-guide/operations/metrics"},"Metric")," ",(0,i.kt)("inlineCode",{parentName:"li"},"zeebe_snapshot_count")," on the leader and the followers"),(0,i.kt)("li",{parentName:"ul"},"Note that no snapshot is created if no processing happened since the last snapshot"))),(0,i.kt)("li",{parentName:"ol"},"Make a backup of the ",(0,i.kt)("inlineCode",{parentName:"li"},"data")," folder")),(0,i.kt)("h3",{id:"performing-the-upgrade"},"Performing the upgrade"),(0,i.kt)(o.Z,{groupId:"in-zeebe-version",defaultValue:"inconsistency-detection-enabled",values:[{label:"With inconsistency detection",value:"inconsistency-detection-enabled"},{label:"Without inconsistency detection",value:"inconsistency-detection-disabled"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"inconsistency-detection-enabled",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Shut down the broker"),(0,i.kt)("li",{parentName:"ol"},"Replace the ",(0,i.kt)("inlineCode",{parentName:"li"},"/bin")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"/lib")," folders with the versions of the new distribution"),(0,i.kt)("li",{parentName:"ol"},"Start up the broker with the experimental inconsistency detection enabled"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#verifying-the-upgrade"},"Verify the upgrade")),(0,i.kt)("li",{parentName:"ol"},"Restart the broker with experimental inconsistency detection disabled"))),(0,i.kt)(l.Z,{value:"inconsistency-detection-disabled",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Shut down the broker"),(0,i.kt)("li",{parentName:"ol"},"Replace the ",(0,i.kt)("inlineCode",{parentName:"li"},"/bin")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"/lib")," folders with the versions of the new distribution"),(0,i.kt)("li",{parentName:"ol"},"Start up the broker"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#verifying-the-upgrade"},"Verify the upgrade"))))),(0,i.kt)("h3",{id:"verifying-the-upgrade"},"Verifying the upgrade"),(0,i.kt)("p",null,"The upgrade is successful if the following conditions are met:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the broker is ready (see ",(0,i.kt)("a",{parentName:"li",href:"/docs/0.26/product-manuals/zeebe/deployment-guide/operations/health#ready-check"},"Ready Check"),")"),(0,i.kt)("li",{parentName:"ul"},"the broker is healthy (see ",(0,i.kt)("a",{parentName:"li",href:"/docs/0.26/product-manuals/zeebe/deployment-guide/operations/health#health-check"},"Health Check"),")"),(0,i.kt)("li",{parentName:"ul"},"all partitions are healthy (see the ",(0,i.kt)("a",{parentName:"li",href:"/docs/0.26/product-manuals/zeebe/deployment-guide/operations/metrics#metrics-related-to-health"},"Metric")," ",(0,i.kt)("inlineCode",{parentName:"li"},"zeebe_health"),")"),(0,i.kt)("li",{parentName:"ul"},"the stream processors of the partition leaders are in the phase ",(0,i.kt)("inlineCode",{parentName:"li"},"PROCESSING")," (see ",(0,i.kt)("a",{parentName:"li",href:"#partitions-admin-endpoint"},"Partitions Admin Endpoint"),")")),(0,i.kt)("p",null,"If the upgrade failed because of a known issue then a partition change its status to unhealthy, and the log output may contain the following error message:"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Sample Upgrade Error Message"),(0,i.kt)("p",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Unexpected error on recovery happens.\nio.zeebe.engine.processor.InconsistentReprocessingException: Reprocessing issue detected!\n  Restore the data from a backup and follow the recommended upgrade procedure. [cause:\n  "The key of the record on the log stream doesn\'t match to the record from reprocessing.",\n  log-stream-record: {"partitionId":1,"value":{"version":1,"bpmnProcessId":"parallel-tasks",\n  "workflowKey":2251799813685249,"parentElementInstanceKey":-1,"parentWorkflowInstanceKey":-1,\n  "bpmnElementType":"PARALLEL_GATEWAY","flowScopeKey":2251799813685251,\n  "elementId":"ExclusiveGateway_0tkgnd5","workflowInstanceKey":2251799813685251},\n  "key":2251799813685256,"sourceRecordPosition":4294997784,"valueType":"WORKFLOW_INSTANCE",\n  "timestamp":1601025180728,"recordType":"EVENT","intent":"ELEMENT_ACTIVATING",\n  "rejectionType":"NULL_VAL","rejectionReason":"","position":4294998112},\n  reprocessing-record: {key=2251799813685255, sourceRecordPosition=4294997784,\n  intent=WorkflowInstanceIntent:ELEMENT_ACTIVATING, recordType=EVENT}]\n')))),(0,i.kt)("p",null,"In this case, the broker should be rolled back to the previous version and the backup should be restored. Ensure that the upgrade was prepared correctly. If it is still unclear why it was not successful then please contact the Zeebe team and ask for guidance."),(0,i.kt)("h2",{id:"partitions-admin-endpoint"},"Partitions admin endpoint"),(0,i.kt)("p",null,"This endpoint allows querying the status of the partitions and performing operations to prepare an upgrade."),(0,i.kt)(o.Z,{groupId:"in-zeebe-version",defaultValue:"since-0.24",values:[{label:"In version 0.23",value:"0.23"},{label:"In version >= 0.24",value:"since-0.24"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"0.23",mdxType:"TabItem"},(0,i.kt)("p",null,"The endpoint is available under ",(0,i.kt)("inlineCode",{parentName:"p"},"http://{zeebe-broker}:{zeebe.broker.network.monitoringApi.port}/partitions")," (default port: ",(0,i.kt)("inlineCode",{parentName:"p"},"9600"),"). "),(0,i.kt)("p",null,"It is enabled by default and cannot be disabled.")),(0,i.kt)(l.Z,{value:"since-0.24",mdxType:"TabItem"},(0,i.kt)("p",null,"The endpoint is available under ",(0,i.kt)("inlineCode",{parentName:"p"},"http://{zeebe-broker}:{zeebe.broker.network.monitoringApi.port}/actuator/partitions")," (default port: ",(0,i.kt)("inlineCode",{parentName:"p"},"9600"),")."),(0,i.kt)("p",null,"It is enabled by default. It can be disabled in the configuration by setting:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"management.endpoint.partitions.enabled=false\n")))),(0,i.kt)("h3",{id:"query-the-partition-status"},"Query the partition status"),(0,i.kt)("p",null,"The status of the partitions can be queried by a ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/actuator/partitions\n")),(0,i.kt)("p",null,"The response contains all partitions of the broker mapped to the partition-id."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Full Response"),(0,i.kt)("p",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "1":{\n        "role":"LEADER",\n        "snapshotId":"399-1-1601275126554-490-490",\n        "processedPosition":490,\n        "processedPositionInSnapshot":490,\n        "streamProcessorPhase":"PROCESSING"\n    }\n}\n')))))}c.isMDXComponent=!0},86010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);