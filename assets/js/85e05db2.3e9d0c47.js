(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[23763],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return n?i.createElement(m,l(l({ref:t},c),{},{components:n})):i.createElement(m,l({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var u=2;u<r;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5950:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return a},toc:function(){return s},default:function(){return c}});var i=n(22122),o=n(19756),r=(n(67294),n(3905)),l={id:"setting-up-a-cluster",title:"Setting up a Zeebe cluster"},a={unversionedId:"product-manuals/zeebe/deployment-guide/operations/setting-up-a-cluster",id:"version-0.26/product-manuals/zeebe/deployment-guide/operations/setting-up-a-cluster",isDocsHomePage:!1,title:"Setting up a Zeebe cluster",description:"To set up a cluster you need to adjust the cluster section",source:"@site/versioned_docs/version-0.26/product-manuals/zeebe/deployment-guide/operations/setting-up-a-cluster.md",sourceDirName:"product-manuals/zeebe/deployment-guide/operations",slug:"/product-manuals/zeebe/deployment-guide/operations/setting-up-a-cluster",permalink:"/docs/0.26/product-manuals/zeebe/deployment-guide/operations/setting-up-a-cluster",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/product-manuals/zeebe/deployment-guide/operations/setting-up-a-cluster.md",version:"0.26",frontMatter:{id:"setting-up-a-cluster",title:"Setting up a Zeebe cluster"},sidebar:"version-0.26/Product Manuals",previous:{title:"Network ports",permalink:"/docs/0.26/product-manuals/zeebe/deployment-guide/operations/network-ports"},next:{title:"Metrics",permalink:"/docs/0.26/product-manuals/zeebe/deployment-guide/operations/metrics"}},s=[{value:"Example",id:"example",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Partitions bootstrapping",id:"partitions-bootstrapping",children:[]},{value:"Keep alive intervals",id:"keep-alive-intervals",children:[]}],u={toc:s};function c(e){var t=e.components,l=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To set up a cluster you need to adjust the ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster")," section\nin the Zeebe configuration file. Below is a snippet\nof the default Zeebe configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"---\ncluster:\n  # This section contains all cluster related configurations, to setup a zeebe cluster\n\n  # Specifies the unique id of this broker node in a cluster.\n  # The id should be between 0 and number of nodes in the cluster (exclusive).\n  #\n  # This setting can also be overridden using the environment variable ZEEBE_BROKER_CLUSTER_NODEID.\n  nodeId: 0\n\n  # Controls the number of partitions, which should exist in the cluster.\n  #\n  # This can also be overridden using the environment variable ZEEBE_BROKER_CLUSTER_PARTITIONSCOUNT.\n  partitionsCount: 1\n\n  # Controls the replication factor, which defines the count of replicas per partition.\n  # The replication factor cannot be greater than the number of nodes in the cluster.\n  #\n  # This can also be overridden using the environment variable ZEEBE_BROKER_CLUSTER_REPLICATIONFACTOR.\n  replicationFactor: 1\n\n  # Specifies the zeebe cluster size. This value is used to determine which broker\n  # is responsible for which partition.\n  #\n  # This can also be overridden using the environment variable ZEEBE_BROKER_CLUSTER_CLUSTERSIZE.\n  clusterSize: 1\n\n  # Allows to specify a list of known other nodes to connect to on startup\n  # The contact points of the internal network configuration must be specified.\n  # The format is [HOST:PORT]\n  # Example:\n  # initialContactPoints : [ 192.168.1.22:26502, 192.168.1.32:26502 ]\n  #\n  # To guarantee the cluster can survive network partitions, all nodes must be specified\n  # as initial contact points.\n  #\n  # This setting can also be overridden using the environment variable ZEEBE_BROKER_CLUSTER_INITIALCONTACTPOINTS\n  # specifying a comma-separated list of contact points.\n  # Default is empty list:\n  initialContactPoints: []\n\n  # Allows to specify a name for the cluster\n  # This setting can also be overridden using the environment variable ZEEBE_BROKER_CLUSTER_CLUSTERNAME.\n  # Example:\n  clusterName: zeebe-cluster\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"In this example, we will set up a Zeebe cluster with\nfive brokers. Each broker needs to get a unique node id.\nTo scale well, we will bootstrap five partitions\nwith a replication factor of three. For more information about this,\nplease take a look into the ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.26/product-manuals/zeebe/technical-concepts/clustering"},"clustering")," section."),(0,r.kt)("p",null,"The clustering setup will look like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"cluster",src:n(80998).Z})),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"The configuration of the first broker could look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"---\ncluster:\n  nodeId: 0\n  partitionsCount: 5\n  replicationFactor: 3\n  clusterSize: 5\n  initialContactPoints:\n    [\n      ADDRESS_AND_PORT_OF_NODE_0,\n      ADDRESS_AND_PORT_OF_NODE_1,\n      ADDRESS_AND_PORT_OF_NODE_2,\n      ADDRESS_AND_PORT_OF_NODE_3,\n      ADDRESS_AND_PORT_OF_NODE_4,\n    ]\n")),(0,r.kt)("p",null,"For the other brokers the configuration will slightly change."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"---\ncluster:\n  nodeId: NODE_ID\n  partitionsCount: 5\n  replicationFactor: 3\n  clusterSize: 5\n  initialContactPoints:\n    [\n      ADDRESS_AND_PORT_OF_NODE_0,\n      ADDRESS_AND_PORT_OF_NODE_1,\n      ADDRESS_AND_PORT_OF_NODE_2,\n      ADDRESS_AND_PORT_OF_NODE_3,\n      ADDRESS_AND_PORT_OF_NODE_4,\n    ]\n")),(0,r.kt)("p",null,"Each broker needs a unique node id. The ids should be in the range of\nzero and ",(0,r.kt)("inlineCode",{parentName:"p"},"clusterSize - 1"),". You need to replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ID")," placeholder with an\nappropriate value. Furthermore, the\nbrokers need an initial contact point to start their gossip\nconversation. Make sure that you use the address and\n",(0,r.kt)("strong",{parentName:"p"},"management port")," of another broker. You need to replace the\n",(0,r.kt)("inlineCode",{parentName:"p"},"ADDRESS_AND_PORT_OF_NODE_0")," placeholder."),(0,r.kt)("p",null,"To guarantee that a cluster can properly recover from network partitions,\nit is currently required that all nodes be specified as initial contact points. It is not necessary\nfor a broker to list itself as initial contact point, but it is safe to do so, and probably simpler\nto maintain."),(0,r.kt)("h2",{id:"partitions-bootstrapping"},"Partitions bootstrapping"),(0,r.kt)("p",null,"On bootstrap, each node will create a partition matrix."),(0,r.kt)("p",null,"This matrix depends on the partitions count, replication factor and\nthe cluster size. If you did the configuration right and\nused the same values for ",(0,r.kt)("inlineCode",{parentName:"p"},"partitionsCount"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"replicationFactor"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"clusterSize")," on each node, then all nodes will generate\nthe same partition matrix."),(0,r.kt)("p",null,"For the current example the matrix will look like the following:"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null),(0,r.kt)("th",null,"Node 0"),(0,r.kt)("th",null,"Node 1"),(0,r.kt)("th",null,"Node 2"),(0,r.kt)("th",null,"Node 3"),(0,r.kt)("th",null,"Node 4")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Partition 0")),(0,r.kt)("td",null,"Leader"),(0,r.kt)("td",null,"Follower"),(0,r.kt)("td",null,"Follower"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"-")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Partition 1")),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"Leader"),(0,r.kt)("td",null,"Follower"),(0,r.kt)("td",null,"Follower"),(0,r.kt)("td",null,"-")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Partition 2")),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"Leader"),(0,r.kt)("td",null,"Follower"),(0,r.kt)("td",null,"Follower")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Partition 3")),(0,r.kt)("td",null,"Follower"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"Leader"),(0,r.kt)("td",null,"Follower")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Partition 4")),(0,r.kt)("td",null,"Follower"),(0,r.kt)("td",null,"Follower"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"Leader"))),(0,r.kt)("p",null,"The matrix ensures that the partitions are well distributed\nbetween the different nodes. Furthermore, it guarantees that\neach node knows exactly, which partitions it has\nto bootstrap and for which it will become the leader at first (this\ncould change later, if the node needs to step down for example)."),(0,r.kt)("h2",{id:"keep-alive-intervals"},"Keep alive intervals"),(0,r.kt)("p",null,"It's possible to specify how often Zeebe clients should send keep alive pings. By default, the official Zeebe clients (Java and Go) send keep alive pings every 45 seconds. This interval can be configured through the clients' APIs and through the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZEEBE_KEEP_ALIVE")," environment variable. When configuring the clients with the environment variable, the time interval must be expressed a positive amount of milliseconds (e.g., 45000)."),(0,r.kt)("p",null,"It's also possible to specify what is the minimum interval allowed by the gateway before it terminates the connection. By default, gateways terminate connections if they receive more than two pings with an interval less than 30 seconds. This minimum interval can be modified by editing the network section in the respective configuration file or by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZEEBE_GATEWAY_NETWORK_MINKEEPALIVEINTERVAL")," environment variable."))}c.isMDXComponent=!0},80998:function(e,t,n){"use strict";t.Z=n.p+"assets/images/example-setup-cluster-1d07984c6dc77e6268b1c82fd2ad4ab6.png"}}]);