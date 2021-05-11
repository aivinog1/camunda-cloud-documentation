(window.webpackJsonp=window.webpackJsonp||[]).push([[510],{577:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),c=(n(0),n(661)),l={id:"index",title:"Java examples",sidebar_label:"Overview"},o={unversionedId:"product-manuals/clients/java-client-examples/index",id:"version-0.26/product-manuals/clients/java-client-examples/index",isDocsHomePage:!1,title:"Java examples",description:"These examples are accessible in the zeebe github repository on the develop branch.",source:"@site/versioned_docs/version-0.26/product-manuals/clients/java-client-examples/index.md",slug:"/product-manuals/clients/java-client-examples/index",permalink:"/docs/0.26/product-manuals/clients/java-client-examples/index",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/product-manuals/clients/java-client-examples/index.md",version:"0.26",sidebar_label:"Overview",sidebar:"version-0.26/Product Manuals",previous:{title:"Writing tests",permalink:"/docs/0.26/product-manuals/clients/java-client/testing"},next:{title:"Deploy a workflow",permalink:"/docs/0.26/product-manuals/clients/java-client-examples/workflow-deploy"}},i=[{value:"Workflow",id:"workflow",children:[]},{value:"Job",id:"job",children:[]},{value:"Data",id:"data",children:[]},{value:"Cluster",id:"cluster",children:[]}],s={rightToc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"These examples are accessible in the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/zeebe-io/zeebe/"}),"zeebe github repository")," on the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/zeebe-io/zeebe/tree/develop/samples"}),"develop branch"),"."),Object(c.b)("p",null,"Instructions to access code locally:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"git clone https://github.com/zeebe-io/zeebe.git\ngit checkout develop\ncd zeebe/samples\n")),Object(c.b)("p",null,"Import the Maven project in the ",Object(c.b)("inlineCode",{parentName:"p"},"samples")," directory into your IDE to start hacking."),Object(c.b)("h2",{id:"workflow"},"Workflow"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.26/product-manuals/clients/java-client-examples/workflow-deploy"}),"Deploy a workflow")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.26/product-manuals/clients/java-client-examples/workflow-instance-create"}),"Create a workflow instance")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.26/product-manuals/clients/java-client-examples/workflow-instance-create-nonblocking"}),"Create non-blocking workflow instances")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.26/product-manuals/clients/java-client-examples/workflow-instance-create-with-result"}),"Create a Workflow Instance with Results"))),Object(c.b)("h2",{id:"job"},"Job"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.26/product-manuals/clients/java-client-examples/job-worker-open"}),"Open a job worker"))),Object(c.b)("h2",{id:"data"},"Data"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.26/product-manuals/clients/java-client-examples/data-pojo"}),"Handle variables as POJO"))),Object(c.b)("h2",{id:"cluster"},"Cluster"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.26/product-manuals/clients/java-client-examples/cluster-topology-request"}),"Request cluster topology"))))}p.isMDXComponent=!0},661:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||b[d]||c;return n?r.a.createElement(m,o(o({ref:t},s),{},{components:n})):r.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<c;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);