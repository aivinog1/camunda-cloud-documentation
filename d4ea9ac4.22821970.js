(window.webpackJsonp=window.webpackJsonp||[]).push([[309],{379:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),c=(n(0),n(450)),i={id:"overview",title:"Clients",sidebar_label:"Overview"},o={unversionedId:"product-manuals/clients/overview",id:"product-manuals/clients/overview",isDocsHomePage:!1,title:"Clients",description:"Clients allow applications to do the following things:",source:"@site/docs/product-manuals/clients/overview.md",slug:"/product-manuals/clients/overview",permalink:"/docs/product-manuals/clients/overview",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/product-manuals/clients/overview.md",version:"current",sidebar_label:"Overview",sidebar:"Product Manuals",previous:{title:"Expressions",permalink:"/docs/product-manuals/concepts/expressions"},next:{title:"Java client",permalink:"/docs/product-manuals/clients/java-client/index"}},l=[{value:"Official clients",id:"official-clients",children:[]},{value:"Community clients",id:"community-clients",children:[]},{value:"Interacting with other components",id:"interacting-with-other-components",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Clients allow applications to do the following things:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Deploy workflows"),Object(c.b)("li",{parentName:"ul"},"Start/cancel workflow instances"),Object(c.b)("li",{parentName:"ul"},"Activate jobs, work on those jobs and subsequently complete/fail jobs"),Object(c.b)("li",{parentName:"ul"},"Publish messages"),Object(c.b)("li",{parentName:"ul"},"Update workflow instance variables and resolve incidents")),Object(c.b)("p",null,"Clients connect to Camunda Cloud via ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://grpc.io"}),"gRPC"),", which is a high-performance, open source universal RPC protocol."),Object(c.b)("p",null,"Camunda Cloud provides several offical clients based on this API. Official clients have been developed and tested by Camunda. They also add convenience functions (e.g. thread handling for job workers) on top of the core API."),Object(c.b)("p",null,"Community clients supplement the official clients. These clients have not been tested by Camunda."),Object(c.b)("h2",{id:"official-clients"},"Official clients"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/product-manuals/clients/java-client/index"}),"Java")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/product-manuals/clients/go-client/get-started"}),"Go")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/product-manuals/clients/cli-client/index"}),"CLI"))),Object(c.b)("h2",{id:"community-clients"},"Community clients"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/product-manuals/clients/other-clients/c-sharp"}),"C#")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/product-manuals/clients/other-clients/javascript"}),"JavaScript/NodeJS")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/product-manuals/clients/other-clients/python"}),"Python")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/product-manuals/clients/other-clients/ruby"}),"Ruby")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/product-manuals/clients/other-clients/rust"}),"Rust"))),Object(c.b)("p",null,"Finally, it is possible to ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/product-manuals/clients/build-your-own-client"}),"build your own client")," in case none of the other options are suitable."),Object(c.b)("h2",{id:"interacting-with-other-components"},"Interacting with other components"),Object(c.b)("p",null,"The clients mentioned above interact with Zeebe, the workflow engine integrated into Camunda Cloud."),Object(c.b)("p",null,"Other components in Camunda Cloud provide language-agnostic APIs, but no clients, to interact with them:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/reference/cloud-console-api-reference"}),"Console API (REST)")," - enables you to create and manage clusters programmatically"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/reference/tasklist-api/schema"}),"Tasklist API (GraphQL)")," - enables you to query, claim and complete user tasks")))}u.isMDXComponent=!0},450:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||c;return n?r.a.createElement(m,o(o({ref:t},s),{},{components:n})):r.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<c;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);