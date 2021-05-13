(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[69292],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,b=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96327:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={id:"metrics",title:"Metrics"},s={unversionedId:"product-manuals/zeebe/deployment-guide/operations/metrics",id:"product-manuals/zeebe/deployment-guide/operations/metrics",isDocsHomePage:!1,title:"Metrics",description:"When operating a distributed system like Zeebe, it is important to put proper monitoring in place.",source:"@site/docs/product-manuals/zeebe/deployment-guide/operations/metrics.md",sourceDirName:"product-manuals/zeebe/deployment-guide/operations",slug:"/product-manuals/zeebe/deployment-guide/operations/metrics",permalink:"/docs/product-manuals/zeebe/deployment-guide/operations/metrics",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/product-manuals/zeebe/deployment-guide/operations/metrics.md",version:"current",frontMatter:{id:"metrics",title:"Metrics"},sidebar:"Product Manuals",previous:{title:"Setting up a Zeebe cluster",permalink:"/docs/product-manuals/zeebe/deployment-guide/operations/setting-up-a-cluster"},next:{title:"Health status",permalink:"/docs/product-manuals/zeebe/deployment-guide/operations/health"}},l=[{value:"Types of metrics",id:"types-of-metrics",children:[]},{value:"Metrics format",id:"metrics-format",children:[]},{value:"Configuring metrics",id:"configuring-metrics",children:[]},{value:"Connecting Prometheus",id:"connecting-prometheus",children:[]},{value:"Available metrics",id:"available-metrics",children:[]},{value:"Grafana",id:"grafana",children:[]}],c={toc:l};function p(e){var t=e.components,i=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When operating a distributed system like Zeebe, it is important to put proper monitoring in place.\nTo facilitate this, Zeebe exposes an extensive set of metrics."),(0,o.kt)("p",null,"Zeebe exposes metrics over an embedded HTTP server."),(0,o.kt)("h2",{id:"types-of-metrics"},"Types of metrics"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Counters"),": a time series that records a growing count of some unit. Examples: number of bytes transmitted over the network, number of process instances started"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Gauges"),": a time series that records the current size of some unit. Examples: number of currently open client connections, current number of partitions")),(0,o.kt)("h2",{id:"metrics-format"},"Metrics format"),(0,o.kt)("p",null,"Zeebe exposes metrics directly in Prometheus text format.\nThe details of the format can be read in the ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/instrumenting/exposition_formats/#text-format-details"},"Prometheus documentation"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# HELP zeebe_stream_processor_events_total Number of events processed by stream processor\n# TYPE zeebe_stream_processor_events_total counter\nzeebe_stream_processor_events_total{action="written",partition="1",} 20320.0\nzeebe_stream_processor_events_total{action="processed",partition="1",} 20320.0\nzeebe_stream_processor_events_total{action="skipped",partition="1",} 2153.0\n')),(0,o.kt)("h2",{id:"configuring-metrics"},"Configuring metrics"),(0,o.kt)("p",null,"The HTTP server to export the metrics can be configured in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/product-manuals/zeebe/deployment-guide/configuration/configuration"},"configuration file"),"."),(0,o.kt)("h2",{id:"connecting-prometheus"},"Connecting Prometheus"),(0,o.kt)("p",null,"As explained, Zeebe exposes the metrics over a HTTP server. The default port is ",(0,o.kt)("inlineCode",{parentName:"p"},"9600"),"."),(0,o.kt)("p",null,"Add the following entry to your ",(0,o.kt)("inlineCode",{parentName:"p"},"prometheus.yml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- job_name: zeebe\n  scrape_interval: 15s\n  metrics_path: /metrics\n  scheme: http\n  static_configs:\n  - targets:\n    - localhost: 9600\n")),(0,o.kt)("h2",{id:"available-metrics"},"Available metrics"),(0,o.kt)("p",null,"All Zeebe related metrics have a ",(0,o.kt)("inlineCode",{parentName:"p"},"zeebe_"),"-prefix."),(0,o.kt)("p",null,"Most metrics have the following common label:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"partition"),": cluster-unique id of the partition")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Metrics related to process processing:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"zeebe_stream_processor_events_total"),": The number of events processed by the stream processor.\nThe ",(0,o.kt)("inlineCode",{parentName:"li"},"action")," label separates processed, skipped and written events."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"zeebe_exporter_events_total"),": The number of events processed by the exporter processor.\nThe ",(0,o.kt)("inlineCode",{parentName:"li"},"action")," label separates exported and skipped events."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"zeebe_element_instance_events_total"),": The number of occurred process element instance events.\nThe ",(0,o.kt)("inlineCode",{parentName:"li"},"action")," label separates the number of activated, completed and terminated elements.\nThe ",(0,o.kt)("inlineCode",{parentName:"li"},"type")," label separates different BPMN element types."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"zeebe_running_process_instances_total"),": The number of currently running process instances, i.e.\nnot completed or terminated."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"zeebe_job_events_total"),": The number of job events. The ",(0,o.kt)("inlineCode",{parentName:"li"},"action")," label separates the number of\ncreated, activated, timed out, completed, failed and canceled jobs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"zeebe_pending_jobs_total"),": The number of currently pending jobs, i.e. not completed or terminated."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"zeebe_incident_events_total"),": The number of incident events. The ",(0,o.kt)("inlineCode",{parentName:"li"},"action")," label separates the number\nof created and resolved incident events."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"zeebe_pending_incidents_total"),": The number of currently pending incident, i.e. not resolved.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Metrics related to performance:")),(0,o.kt)("p",null,"Zeebe has a back-pressure mechanism by which it rejects requests, when it receives more requests than it can handle with out incurring high processing latency.\nThe following metrics can be used to monitor back-pressure and processing latency of the commands."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"zeebe_dropped_request_count_total"),": The number of user requests rejected by the broker due to backpressure."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"zeebe_backpressure_requests_limit"),": The limit for the number of inflight requests used for backpressure."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"zeebe_stream_processor_latency_bucket"),": The processing latency for commands and event.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Metrics related to health:")),(0,o.kt)("p",null,"The health of partitions in a broker can be monitored by the metric ",(0,o.kt)("inlineCode",{parentName:"p"},"zeebe_health"),"."),(0,o.kt)("h2",{id:"grafana"},"Grafana"),(0,o.kt)("p",null,"Zeebe comes with a pre-built dashboard, available in the repository:\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe/tree/develop/monitor/grafana/zeebe.json"},"monitor/grafana/zeebe.json")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/reference/export_import/#importing-a-dashboard"},"Import"),"\nit into your Grafana instance, then select the correct Prometheus data source (important if you have more than one), and\nyou should be greeted with the following dashboard:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"cluster",src:n(81697).Z})))}p.isMDXComponent=!0},81697:function(e,t,n){"use strict";t.Z=n.p+"assets/images/grafana-preview-b55d5882a8636cf3b0bae96bcfb29658.png"}}]);