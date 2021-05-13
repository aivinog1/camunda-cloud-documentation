(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[31151],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),h=a,f=c["".concat(l,".").concat(h)]||c[h]||d[h]||r;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},58220:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var o=n(22122),a=n(19756),r=(n(67294),n(3905)),i={id:"resource-planning",title:"Resource planning"},s={unversionedId:"product-manuals/zeebe/deployment-guide/operations/resource-planning",id:"version-0.26/product-manuals/zeebe/deployment-guide/operations/resource-planning",isDocsHomePage:!1,title:"Resource planning",description:"The short answer to \u201cwhat resources and configuration will I need to take Zeebe to production?\u201d is: it depends.",source:"@site/versioned_docs/version-0.26/product-manuals/zeebe/deployment-guide/operations/resource-planning.md",sourceDirName:"product-manuals/zeebe/deployment-guide/operations",slug:"/product-manuals/zeebe/deployment-guide/operations/resource-planning",permalink:"/docs/0.26/product-manuals/zeebe/deployment-guide/operations/resource-planning",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/product-manuals/zeebe/deployment-guide/operations/resource-planning.md",version:"0.26",frontMatter:{id:"resource-planning",title:"Resource planning"},sidebar:"version-0.26/Product Manuals",previous:{title:"Operating Zeebe in Production",permalink:"/docs/0.26/product-manuals/zeebe/deployment-guide/operations/index"},next:{title:"Network ports",permalink:"/docs/0.26/product-manuals/zeebe/deployment-guide/operations/network-ports"}},l=[{value:"Disk space",id:"disk-space",children:[{value:"Event log",id:"event-log",children:[]},{value:"Snapshots",id:"snapshots",children:[]},{value:"RocksDB",id:"rocksdb",children:[]},{value:"Effect of exporters and external system failure",id:"effect-of-exporters-and-external-system-failure",children:[]},{value:"Effect on exporters of node failure",id:"effect-on-exporters-of-node-failure",children:[]},{value:"Effect of quorum loss",id:"effect-of-quorum-loss",children:[]}]}],u={toc:l};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The short answer to \u201c",(0,r.kt)("em",{parentName:"p"},"what resources and configuration will I need to take Zeebe to production?"),"\u201d is: it depends."),(0,r.kt)("p",null,"While we cannot tell you exactly what you need - beyond ",(0,r.kt)("em",{parentName:"p"},"it depends")," - we can explain what depends, what it depends on, and how it depends on it."),(0,r.kt)("h2",{id:"disk-space"},"Disk space"),(0,r.kt)("p",null,"All brokers in a partition use disk space to store:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The event log for each partition they participate in. By default, this is a minimum of ",(0,r.kt)("em",{parentName:"li"},"512MB")," for each partition, incrementing in 512MB segments. The event log is truncated on a given broker when data has been processed and successfully exported by all loaded exporters."),(0,r.kt)("li",{parentName:"ul"},"One periodic snapshots of the running state (in-flight data) of each partition (unbounded, based on in-flight work).")),(0,r.kt)("p",null,"Additionally, the leader of a partition also uses disk space to store:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A projection of the running state of the partition in RocksDB. (unbounded, based on in-flight work)")),(0,r.kt)("p",null,'To calculate the required amount of disk space, the following "back of the envelope" formula can be used as a starting point:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"neededDiskSpace = replicatedState + localState\n\nreplicatedState = totalEventLogSize + totalSnapshotSize\n\ntotalEventLogSize = followerPartitionsPerNode * eventLogSize * reserveForPartialSystemFailure\n\ntotalSnapshotSize = partitionsPerNode * singleSnapshotSize * 2\n// singleSnapshotSize * 2:\n//   the last snapshot (already replicated) +\n//   the next snapshot (in transit, while it is being replicated)\n\npartitionsPerNode = leaderPartitionsPerNde + followerPartitionsPerNode\n\nleaderPartitionsPerNode = partitionsCount / numberOfNodes\nfollowerPartitionsPerNode = partitionsCount * replicationFactor / numberOfNodes\n\nclusterSize = [number of broker nodes]\npartitionsCount = [number of partitions]\nreplicationFactor = [number of replicas per partition]\nreserveForPartialSystemFailure = [factor to account for partial system failure]\nsingleSnapshotSize = [size of a single rocks DB snapshot]\neventLogSize = [event log size for duration of snapshotPeriod]\n")),(0,r.kt)("p",null,"Some observations on the scaling of the factors above:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"eventLogSize"),": This factor scales with the throughput of your system"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"totalSnapshotSize"),": This factor scales with the number of in-flight workflows"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"reserveForPartialSystemFailure"),": This factor is supposed to be a reserve to account for partial system failure (e.g. loss of quorum inside Zeebe cluster, or loss of connection to external system). See the remainder of this document for a further discussion on the effects of partial system failure on Zeebe cluster and disk space provisioning.")),(0,r.kt)("p",null,"Many of the factors influencing above formula can be fine-tuned in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.26/product-manuals/zeebe/deployment-guide/configuration/configuration"},"configuration"),". The relevant configuration settings are:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Config file\n    zeebe:\n      broker:\n        data:\n          logSegmentSize: 512MB\n          snapshotPeriod: 15m\n        cluster:\n          partitionsCount: 1\n          replicationFactor: 1\n          clusterSize: 1\n\nEnvironment Variables\n  ZEEBE_BROKER_DATA_LOGSEGMENTSIZE = 512MB\n  ZEEBE_BROKER_DATA_SNAPSHOTPERIOD = 15m\n  ZEEBE_BROKER_CLUSTER_PARTITIONSCOUNT = 1\n  ZEEBE_BROKER_CLUSTER_REPLICATIONFACTOR = 1\n  ZEEBE_BROKER_CLUSTER_CLUSTERSIZE = 1\n")),(0,r.kt)("p",null,"Other factors can be observed in a production-like system with representative throughput."),(0,r.kt)("p",null,"If you want to know where to look, by default this data is stored in"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"segments")," - the data of the log split into segments. The log is only appended - its data can be deleted when it becomes part of a new snapshot."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"state")," - the active state. Deployed workflows, active workflow instances, etc. Completed workflow instances or jobs are removed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"snapshot")," - a state at a certain point in time")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Pitfalls")),(0,r.kt)("p",{parentName:"blockquote"},"If you want to avoid exploding your disk space usage, here are a few pitfalls to avoid:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Do not create a high number of snapshots with a long period between them."),(0,r.kt)("li",{parentName:"ul"},"Do not configure an exporter which does not not advance its record position (such as the Debug Exporter)"))),(0,r.kt)("p",null,"If you do configure an exporter, make sure to monitor its availability and health, as well as the availability and health the exporter depends on.\nThis is the Achilles' heel of the cluster. If data cannot be exported, it cannot be removed from the cluster and will accumulate on disk. See ",(0,r.kt)("em",{parentName:"p"},"Effect of exporters and external system failure")," further on in this document for an explanation and possible buffering strategies."),(0,r.kt)("h3",{id:"event-log"},"Event log"),(0,r.kt)("p",null,"The event log for each partition is segmented. By default, the segment size is 512MB."),(0,r.kt)("p",null,"The event log will grow over time, unless and until individual event log segments are deleted."),(0,r.kt)("p",null,"An event log segment can be deleted once:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"all the events it contains have been processed by exporters,"),(0,r.kt)("li",{parentName:"ul"},"all the events it contains have been replicated to other brokers,"),(0,r.kt)("li",{parentName:"ul"},"all the events it contains have been processed, and"),(0,r.kt)("li",{parentName:"ul"},"the maximum number of snapshots has been reached.")),(0,r.kt)("p",null,"The following conditions inhibit the automatic deletion of event log segments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A cluster loses its quorum. In this case events are queued but not processed. Once a quorum is reestablished, events will be replicated and eventually event log segments will be deleted."),(0,r.kt)("li",{parentName:"ul"},"The max number of snapshots has not been written. Log segment deletion will begin as soon as the max number of snapshots has been reached"),(0,r.kt)("li",{parentName:"ul"},"An exporter does not advance its read position in the event log. In this case the event log will grow ad infinitum.")),(0,r.kt)("p",null,"An event log segment is not deleted until all the events in it have been exported by all configured exporters. This means that exporters that rely on side-effects, perform intensive computation, or experience back pressure from external storage will cause disk usage to grow, as they delay the deletion of event log segments."),(0,r.kt)("p",null,"Exporting is only performed on the partition leader, but the followers of the partition do not delete segments in their replica of the partition until the leader marks all events in it as unneeded by exporters."),(0,r.kt)("p",null,"We make sure that event log segments are not deleted too early. No event log segment is deleted until a snapshot has been taken that includes that segment. When a snapshot has been taken, the event log is only deleted up to that point."),(0,r.kt)("h3",{id:"snapshots"},"Snapshots"),(0,r.kt)("p",null,"The running state of the partition is captured periodically on the leader in a snapshot. By default, this period is every 15 minutes. This can be changed in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.26/product-manuals/zeebe/deployment-guide/configuration/configuration"},"configuration"),"."),(0,r.kt)("p",null,"A snapshot is a projection of all events that represent the current running state of the workflows running on the partition. It contains all active data, for example, deployed workflows, active workflow instances, and not yet completed jobs."),(0,r.kt)("p",null,"When the broker has written a new snapshot, it deletes all data on the log which was written before the latest snapshot."),(0,r.kt)("h3",{id:"rocksdb"},"RocksDB"),(0,r.kt)("p",null,"On the lead broker of a partition, the current running state is kept in memory, and on disk in RocksDB. In our experience this grows to 2GB under a heavy load of long-running processes. The snapshots that are replicated to followers are snapshots of RocksDB."),(0,r.kt)("h3",{id:"effect-of-exporters-and-external-system-failure"},"Effect of exporters and external system failure"),(0,r.kt)("p",null,"If an external system relied on by an exporter fails - for example, if you are exporting data to ElasticSearch and the connection to the ElasticSearch cluster fails - then the exporter will not advance its position in the event log, and brokers cannot truncate their logs. The broker event log will grow until the exporter is able to re-establish the connection and export the data.\nTo ensure that your brokers are resilient in the event of external system failure, give them sufficient disk space to continue operating without truncating the event log until the connection to the external system is restored."),(0,r.kt)("h3",{id:"effect-on-exporters-of-node-failure"},"Effect on exporters of node failure"),(0,r.kt)("p",null,"Only the leader of a partition exports events. Only committed events (events that have been replicated) are passed to exporters. The exporter will then update its read position. The exporter read position is only replicated between brokers in the snapshot. It is not itself written to the event log. This means that ",(0,r.kt)("em",{parentName:"p"},"an exporter\u2019s current position cannot be reconstructed from the replicated event log, only from a snapshot"),"."),(0,r.kt)("p",null,"When a partition fails over to a new leader, the new leader is able to construct the current partition state by projecting the event log from the point of the last snapshot. The position of exporters cannot be reconstructed from the event log, so it is set to the last snapshot. This means that an exporter can see the same events twice in the event of a fail-over."),(0,r.kt)("p",null,"You should assign idempotent ids to events in your exporter if this is an issue for your system. The combination of record position and partition id is reliable as a unique id for an event."),(0,r.kt)("h3",{id:"effect-of-quorum-loss"},"Effect of quorum loss"),(0,r.kt)("p",null,"If a partition goes under quorum (for example: if two nodes in a three node cluster go down), then the leader of the partition will continue to accept requests, but these requests will not be replicated and will not be marked as committed. In this case, they cannot be truncated. This causes the event log to grow. The amount of disk space needed to continue operating in this scenario is a function of the broker throughput and the amount of time to quorum being restored. You should ensure that your nodes have sufficient disk space to handle this failure mode."))}p.isMDXComponent=!0}}]);