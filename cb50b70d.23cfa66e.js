(window.webpackJsonp=window.webpackJsonp||[]).push([[294],{365:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),a=(r(0),r(450)),l={id:"cluster-topology-request",title:"Request Cluster Topology"},i={unversionedId:"product-manuals/zeebe/clients/java-client-examples/cluster-topology-request",id:"version-0.25/product-manuals/zeebe/clients/java-client-examples/cluster-topology-request",isDocsHomePage:!1,title:"Request Cluster Topology",description:"Shows which broker is leader and follower for which partition. Particularly useful when you run a cluster with multiple Zeebe brokers.",source:"@site/versioned_docs/version-0.25/product-manuals/zeebe/clients/java-client-examples/cluster-topology-request.md",slug:"/product-manuals/zeebe/clients/java-client-examples/cluster-topology-request",permalink:"/docs/0.25/product-manuals/zeebe/clients/java-client-examples/cluster-topology-request",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.25/product-manuals/zeebe/clients/java-client-examples/cluster-topology-request.md",version:"0.25",sidebar:"version-0.25/Product Manuals",previous:{title:"Handle Variables as POJO",permalink:"/docs/0.25/product-manuals/zeebe/clients/java-client-examples/data-pojo"},next:{title:"Overview",permalink:"/docs/0.25/product-manuals/zeebe/clients/go-client/index"}},c=[{value:"Related Resources",id:"related-resources",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"TopologyViewer.java",id:"topologyviewerjava",children:[]}],u={rightToc:c};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Shows which broker is leader and follower for which partition. Particularly useful when you run a cluster with multiple Zeebe brokers."),Object(a.b)("h2",{id:"related-resources"},"Related Resources"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.25/product-manuals/zeebe/basics/clustering"}),"Clustering Basics")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.25/product-manuals/zeebe/operations/setting-up-a-cluster"}),"Setting up a Cluster"))),Object(a.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Running Zeebe broker with endpoint ",Object(a.b)("inlineCode",{parentName:"li"},"localhost:26500")," (default)")),Object(a.b)("h2",{id:"topologyviewerjava"},"TopologyViewer.java"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/zeebe-io/zeebe/tree/develop/samples/src/main/java/io/zeebe/example/cluster/TopologyViewer.java"}),"Source on github")))}s.isMDXComponent=!0},450:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,m=p["".concat(l,".").concat(d)]||p[d]||b[d]||a;return r?o.a.createElement(m,i(i({ref:t},u),{},{components:r})):o.a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);