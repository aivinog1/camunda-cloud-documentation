(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{171:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(661)),l={id:"cluster-topology-request",title:"Request cluster topology"},c={unversionedId:"product-manuals/clients/java-client-examples/cluster-topology-request",id:"version-0.26/product-manuals/clients/java-client-examples/cluster-topology-request",isDocsHomePage:!1,title:"Request cluster topology",description:"This example shows which broker is leader and follower for which partition. Particularly useful when you run a cluster with multiple Zeebe brokers.",source:"@site/versioned_docs/version-0.26/product-manuals/clients/java-client-examples/cluster-topology-request.md",slug:"/product-manuals/clients/java-client-examples/cluster-topology-request",permalink:"/docs/0.26/product-manuals/clients/java-client-examples/cluster-topology-request",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/product-manuals/clients/java-client-examples/cluster-topology-request.md",version:"0.26",sidebar:"version-0.26/Product Manuals",previous:{title:"Handle variables as POJO",permalink:"/docs/0.26/product-manuals/clients/java-client-examples/data-pojo"},next:{title:"Go client",permalink:"/docs/0.26/product-manuals/clients/go-client/index"}},i=[{value:"Related resources",id:"related-resources",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"TopologyViewer.java",id:"topologyviewerjava",children:[]}],s={rightToc:i};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This example shows which broker is leader and follower for which partition. Particularly useful when you run a cluster with multiple Zeebe brokers."),Object(a.b)("h2",{id:"related-resources"},"Related resources"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.26/product-manuals/zeebe/technical-concepts/clustering"}),"Clustering casics"))),Object(a.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Running Zeebe broker with endpoint ",Object(a.b)("inlineCode",{parentName:"li"},"localhost:26500")," (default)")),Object(a.b)("h2",{id:"topologyviewerjava"},"TopologyViewer.java"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/zeebe-io/zeebe/tree/develop/samples/src/main/java/io/zeebe/example/cluster/TopologyViewer.java"}),"Source on github")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'final Topology topology = client.newTopologyRequest().send().join();\n\nSystem.out.println("Topology:");\ntopology\n    .getBrokers()\n    .forEach(\n        b -> {\n        System.out.println("    " + b.getAddress());\n        b.getPartitions()\n            .forEach(\n                p ->\n                    System.out.println(\n                        "      " + p.getPartitionId() + " - " + p.getRole()));\n        });\n')))}u.isMDXComponent=!0},661:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,m=p["".concat(l,".").concat(b)]||p[b]||d[b]||a;return r?o.a.createElement(m,c(c({ref:t},s),{},{components:r})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var s=2;s<a;s++)l[s]=r[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);