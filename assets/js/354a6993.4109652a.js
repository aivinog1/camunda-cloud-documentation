(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[20493],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},A=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),A=c(r),d=o,h=A["".concat(l,".").concat(d)]||A[d]||u[d]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=A;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}A.displayName="MDXCreateElement"},56159:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i={id:"exporters",title:"Exporters"},s={unversionedId:"product-manuals/zeebe/open-source/exporters",id:"version-0.26/product-manuals/zeebe/open-source/exporters",isDocsHomePage:!1,title:"Exporters",description:"As Zeebe processes jobs and workflows, or performs internal maintenance (e.g.",source:"@site/versioned_docs/version-0.26/product-manuals/zeebe/open-source/exporters.md",sourceDirName:"product-manuals/zeebe/open-source",slug:"/product-manuals/zeebe/open-source/exporters",permalink:"/docs/0.26/product-manuals/zeebe/open-source/exporters",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/product-manuals/zeebe/open-source/exporters.md",version:"0.26",frontMatter:{id:"exporters",title:"Exporters"}},l=[{value:"Loading",id:"loading",children:[]},{value:"Processing",id:"processing",children:[{value:"Error handling",id:"error-handling",children:[]},{value:"Performance impact",id:"performance-impact",children:[]}]}],c={toc:l};function p(e){var t=e.components,i=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"As Zeebe processes jobs and workflows, or performs internal maintenance (e.g.\nraft failover), it will generate an ordered stream of records:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"record-stream",src:r(77305).Z})),(0,a.kt)("p",null,"While the clients provide no way to inspect this stream directly, Zeebe can load\nand configure user code that can process each and every one of those records, in the form of an exporter."),(0,a.kt)("p",null,"An ",(0,a.kt)("strong",{parentName:"p"},"exporter")," provides a single entry point to process every record that is\nwritten on a stream."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Persist historical data by pushing it to an external data warehouse"),(0,a.kt)("li",{parentName:"ul"},"Export records to a visualization tool (e.g. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/zeebe-io/zeebe-simple-monitor/"},"zeebe-simple-monitor"),")")),(0,a.kt)("p",null,"Zeebe will only load exporters which are configured through the main Zeebe YAML\nconfiguration file."),(0,a.kt)("p",null,"Once an exporter is configured, the next time Zeebe is started, the exporter\nwill start receiving records. Note that it is only guaranteed to see records\nproduced from that point on."),(0,a.kt)("p",null,"You can find a reference implementation in the form of the Zeebe-maintained\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe/tree/develop/exporters/elasticsearch-exporter"},"ElasticSearch exporter"),"."),(0,a.kt)("p",null,"The main impact exporters have on a Zeebe cluster is that they remove the burden\nof persisting data indefinitely."),(0,a.kt)("p",null,"Once data is not needed by Zeebe itself anymore, it will query its exporters to\nknow if it can be safely deleted, and if so, will permanently erase it, thereby\nreducing disk usage."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:"),", if no exporters are configured at all, then Zeebe will automatically\nerase data when it is not necessary anymore. If you need historical data,\nthen you ",(0,a.kt)("strong",{parentName:"p"},"need")," to configure an exporter to stream records into your external\ndata warehouse.")),(0,a.kt)("p",null,"Regardless of how an exporter is loaded (whether through an external JAR or not),\nall exporters interact in the same way with the broker, which is defined by the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe/tree/develop/exporter-api/src/main/java/io/zeebe/exporter/api/Exporter.java"},"Exporter interface"),"."),(0,a.kt)("h2",{id:"loading"},"Loading"),(0,a.kt)("p",null,"Once configured, exporters are loaded as part of the broker startup phase, before\nany processing is done."),(0,a.kt)("p",null,"During the loading phase, the configuration for each exporter is validated, such that\nthe broker will not start if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An exporter ID is not unique"),(0,a.kt)("li",{parentName:"ul"},"An exporter points to a non-existent/non-accessible JAR"),(0,a.kt)("li",{parentName:"ul"},"An exporter points to a non-existent/non-instantiable class"),(0,a.kt)("li",{parentName:"ul"},"An exporter instance throws an exception in its ",(0,a.kt)("inlineCode",{parentName:"li"},"Exporter#configure")," method.")),(0,a.kt)("p",null,"The last point is there to provide individual exporters to perform lightweight\nvalidation of their configuration (e.g. fail if missing arguments)."),(0,a.kt)("p",null,"One of the caveat of the last point is that an instance of an exporter is created and\nimmediately thrown away; therefore, exporters should not perform any computationally\nheavy work during instantiation/configuration."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," Zeebe will create an isolated class loader for every JAR referenced by\nexporter configurations - that is, only once per JAR; if the same JAR is reused to\ndefine different exporters, then these will share the same class loader."),(0,a.kt)("p",{parentName:"blockquote"},"This has some nice properties, primarily that different exporters can depend on\nthe same third party libraries without having to worry about versions, or class\nname collisions."),(0,a.kt)("p",{parentName:"blockquote"},"Additionally, exporters use the system class loader for system classes, or\nclasses packaged as part of the Zeebe JAR.")),(0,a.kt)("p",null,"Exporter specific configuration is handled through the exporter's ",(0,a.kt)("inlineCode",{parentName:"p"},"[exporters.args]"),"\nnested map. This provides a simple ",(0,a.kt)("inlineCode",{parentName:"p"},"Map<String, Object>")," which is passed directly\nin form of a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe/tree/develop/exporter-api/src/main/java/io/zeebe/exporter/api/context/Configuration.java"},"Configuration"),"\nobject when the broker calls the ",(0,a.kt)("inlineCode",{parentName:"p"},"Exporter#configure(Configuration)")," method."),(0,a.kt)("p",null,"Configuration occurs at two different phases: during the broker startup phase, and\nonce every time a leader is elected for a partition."),(0,a.kt)("h2",{id:"processing"},"Processing"),(0,a.kt)("p",null,"At any given point, there is exactly one leader\nnode for a given partition. Whenever a node becomes the leader for a partition, one\nof the things it will do is run an instance of an\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe/tree/develop/broker/src/main/java/io/zeebe/broker/exporter/stream/ExporterDirector.java"},"exporter stream processor"),"."),(0,a.kt)("p",null,"This stream processor will create exactly one instance of each configured exporter,\nand forward every record written on the stream to each of these in turn."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," this implies that there will be exactly one instance of every exporter for\nevery partition: if you have 4 partitions, and at least 4 threads for processing,\nthen there are potentially 4 instances of your exporter exporting simultaneously.")),(0,a.kt)("p",null,"Note that Zeebe only guarantees at-least-once semantics, that is, a record will be\nseen at least once by an exporter, and maybe more. Cases where this may happen\ninclude:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"During reprocessing after raft failover (i.e. new leader election)"),(0,a.kt)("li",{parentName:"ul"},"On error if the position has not been updated yet")),(0,a.kt)("p",null,"To reduce the amount of duplicate records an exporter will process, the stream\nprocessor will keep track of the position of the last successfully exported record\nfor every single exporter; the position is sufficient since a stream is an ordered\nsequence of records whose position is monotonically increasing. This position is\nset by the exporter itself once it can guarantee a record has been successfully\nupdated."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," although Zeebe tries to reduce the amount of duplicate records an\nexporter has to handle, it is likely that it will have to; therefore, it is\nnecessary that export operations be idempotent."),(0,a.kt)("p",{parentName:"blockquote"},"This can be implemented either in the exporter itself, but if it exports to an\nexternal system, it is recommended that you perform deduplication there to reduce\nthe load on Zeebe itself. Refer to the exporter specific documentation for how\nthis is meant to be achieved.")),(0,a.kt)("h3",{id:"error-handling"},"Error handling"),(0,a.kt)("p",null,"If an error occurs during the ",(0,a.kt)("inlineCode",{parentName:"p"},"Exporter#open(Context)")," phase, the stream\nprocessor will fail and be restarted, potentially fixing the error; worst case\nscenario, this means no exporter is running at all until these errors stop."),(0,a.kt)("p",null,"If an error occurs during the ",(0,a.kt)("inlineCode",{parentName:"p"},"Exporter#close")," phase, it will be logged, but will\nstill allow other exporters to gracefully finish their work."),(0,a.kt)("p",null,"If an error occurs during processing, we will retry infinitely the same record until\nno error is produced. Worst case scenario, this means a failing exporter could bring\nall exporters to a halt. Currently, exporter implementations are expected to\nimplement their own retry/error handling strategies, though this may change in the\nfuture."),(0,a.kt)("h3",{id:"performance-impact"},"Performance impact"),(0,a.kt)("p",null,"Zeebe naturally incurs a performance impact for each loaded exporter. A slow\nexporter will slow down all other exporters for a given partition, and, in the\nworst case, could completely block a thread."),(0,a.kt)("p",null,"It's therefore recommended to keep exporters as simple as possible, and perform\nany data enrichment or transformation through the external system."))}p.isMDXComponent=!0},77305:function(e,t){"use strict";t.Z="data:image/png;base64,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"}}]);