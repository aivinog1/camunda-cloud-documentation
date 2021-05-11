(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{100:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return o})),i.d(t,"metadata",(function(){return A})),i.d(t,"rightToc",(function(){return s})),i.d(t,"default",(function(){return l}));var n=i(3),a=i(7),r=(i(0),i(661)),o={id:"partitions",title:"Partitions"},A={unversionedId:"product-manuals/zeebe/technical-concepts/partitions",id:"version-0.26/product-manuals/zeebe/technical-concepts/partitions",isDocsHomePage:!1,title:"Partitions",description:"Note: If you have worked with the Apache Kafka System before, the concepts presented on this page will sound very familiar to you.",source:"@site/versioned_docs/version-0.26/product-manuals/zeebe/technical-concepts/partitions.md",slug:"/product-manuals/zeebe/technical-concepts/partitions",permalink:"/docs/0.26/product-manuals/zeebe/technical-concepts/partitions",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/product-manuals/zeebe/technical-concepts/partitions.md",version:"0.26",sidebar:"version-0.26/Product Manuals",previous:{title:"Clustering",permalink:"/docs/0.26/product-manuals/zeebe/technical-concepts/clustering"},next:{title:"Internal processing",permalink:"/docs/0.26/product-manuals/zeebe/technical-concepts/internal-processing"}},s=[{value:"Usage examples",id:"usage-examples",children:[]},{value:"Distribution over partitions",id:"distribution-over-partitions",children:[]},{value:"Scalability",id:"scalability",children:[]},{value:"Partition data layout",id:"partition-data-layout",children:[]},{value:"Replication",id:"replication",children:[]},{value:"Recommendations",id:"recommendations",children:[]}],c={rightToc:s};function l(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: If you have worked with the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://kafka.apache.org/"}),"Apache Kafka System")," before, the concepts presented on this page will sound very familiar to you.")),Object(r.b)("p",null,"In Zeebe, all data is organized into ",Object(r.b)("em",{parentName:"p"},"partitions"),". A ",Object(r.b)("em",{parentName:"p"},"partition")," is a persistent stream of workflow-related events. In a cluster of brokers, partitions are distributed among the nodes so it can be thought of as a ",Object(r.b)("em",{parentName:"p"},"shard"),". When you bootstrap a Zeebe cluster you can configure how many partitions you need."),Object(r.b)("h2",{id:"usage-examples"},"Usage examples"),Object(r.b)("p",null,"Whenever you deploy a workflow, you deploy it to the first partition. The workflow is then distributed to all partitions. On all partitions, this workflow receives the same key and version such that it can be consistently identified."),Object(r.b)("p",null,"When you start an instance of a workflow, the client library will then route the request to one partition in which the workflow instance will be published. All subsequent processing of the workflow instance will happen in that partition."),Object(r.b)("h2",{id:"distribution-over-partitions"},"Distribution over partitions"),Object(r.b)("p",null,"When a workflow instance is created in a partition, its state is stored and managed by the same partition until its execution is terminated. The partition in which it is created is determined by various factors."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"When a client sends a command ",Object(r.b)("inlineCode",{parentName:"li"},"CreateWorkflowInstance")," or ",Object(r.b)("inlineCode",{parentName:"li"},"CreateWorkflowInstanceWithResult"),", gateway chooses a partition in a round-robin manner and forwards the requests to that partition. The workflow instance is created in that partition."),Object(r.b)("li",{parentName:"ul"},"When a client publishes a message to trigger a ",Object(r.b)("em",{parentName:"li"},"message start event"),", the message is forwarded to a partition based on the correlation key of the message. The workflow instance is created on the same partition where the message is published."),Object(r.b)("li",{parentName:"ul"},"Workflow instances created by ",Object(r.b)("em",{parentName:"li"},"timer start events")," are always created on partition 1.")),Object(r.b)("h2",{id:"scalability"},"Scalability"),Object(r.b)("p",null,"Use partitions to scale your workflow processing. Partitions are dynamically distributed in a Zeebe cluster and for each partition there is one leading broker at a time. This ",Object(r.b)("em",{parentName:"p"},"leader")," accepts requests and performs event processing for the partition. Let us assume you want to distribute workflow processing load over five machines. You can achieve that by bootstraping five partitions."),Object(r.b)("p",null,"Note that while each partition has one leading broker, ",Object(r.b)("em",{parentName:"p"},"not all brokers are guaranteed to be leading a partition"),". A broker can lead more than one partition, and, at times, a broker in a cluster may be acting only as a replication back-up for partitions. This broker will not be doing any active work on processes until a partition fail-over happens and the broker gets elected as the new leader for that partition."),Object(r.b)("h2",{id:"partition-data-layout"},"Partition data layout"),Object(r.b)("p",null,"A partition is a persistent append-only event stream. Initially, a partition is empty. As the first entry gets inserted, it takes the place of the first entry. As the second entry comes in and is inserted, it takes the place as the second entry and so on and so forth. Each entry has a position in the partition which uniquely identifies it."),Object(r.b)("p",null,Object(r.b)("img",{alt:"partition",src:i(805).default})),Object(r.b)("h2",{id:"replication"},"Replication"),Object(r.b)("p",null,"For fault tolerance, data in a partition is replicated from the ",Object(r.b)("em",{parentName:"p"},"leader")," of the partition to its ",Object(r.b)("em",{parentName:"p"},"followers"),". Followers are other Zeebe broker nodes that maintain a copy of the partition without performing event processing."),Object(r.b)("h2",{id:"recommendations"},"Recommendations"),Object(r.b)("p",null,"Choosing the number of partitions depends on the use case, workload, and cluster setup. Here are some rules of thumb:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"For testing and early development, start with a single partition. Note that Zeebe's workflow processing is highly optimized for efficiency, so a single partition can already handle high event loads."),Object(r.b)("li",{parentName:"ul"},"With a single Zeebe broker, a single partition is mostly enough. However, if the node has many cores and the broker is configured to use them, then more partitions can increase the total throughput (~ 2 threads per partition)."),Object(r.b)("li",{parentName:"ul"},"Base your decisions on data. Simulate the expected workload, measure, and compare the performance of different partition setups.")))}l.isMDXComponent=!0},661:function(e,t,i){"use strict";i.d(t,"a",(function(){return p})),i.d(t,"b",(function(){return d}));var n=i(0),a=i.n(n);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function A(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):A(A({},t),e)),i},p=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(i),u=n,d=p["".concat(o,".").concat(u)]||p[u]||b[u]||r;return i?a.a.createElement(d,A(A({ref:t},c),{},{components:i})):a.a.createElement(d,A({ref:t},c))}));function d(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=u;var A={};for(var s in t)hasOwnProperty.call(t,s)&&(A[s]=t[s]);A.originalType=e,A.mdxType="string"==typeof e?e:n,o[1]=A;for(var c=2;c<r;c++)o[c]=i[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},805:function(e,t,i){"use strict";i.r(t),t.default="data:image/png;base64,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"}}]);