(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{217:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return i}));var n=r(3),a=r(7),o=(r(0),r(661)),c={id:"process-deploy",title:"Deploy a process"},s={unversionedId:"product-manuals/clients/java-client-examples/process-deploy",id:"product-manuals/clients/java-client-examples/process-deploy",isDocsHomePage:!1,title:"Deploy a process",description:"Related resources",source:"@site/docs/product-manuals/clients/java-client-examples/process-deploy.md",slug:"/product-manuals/clients/java-client-examples/process-deploy",permalink:"/docs/product-manuals/clients/java-client-examples/process-deploy",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/product-manuals/clients/java-client-examples/process-deploy.md",version:"current",sidebar:"Product Manuals",previous:{title:"Java examples",permalink:"/docs/product-manuals/clients/java-client-examples/index"},next:{title:"Create a process instance",permalink:"/docs/product-manuals/clients/java-client-examples/process-instance-create"}},l=[{value:"Related resources",id:"related-resources",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"ProcessDeployer.java",id:"processdeployerjava",children:[]},{value:"demoProcess.bpmn",id:"demoprocessbpmn",children:[]}],p={rightToc:l};function i(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"related-resources"},"Related resources"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/product-manuals/concepts/processes"}),"Process basics")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/reference/bpmn-processes/bpmn-primer"}),"BPMN introduction"))),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Running Zeebe broker with endpoint ",Object(o.b)("inlineCode",{parentName:"li"},"localhost:26500")," (default)")),Object(o.b)("h2",{id:"processdeployerjava"},"ProcessDeployer.java"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/zeebe-io/zeebe/tree/develop/samples/src/main/java/io/zeebe/example/process/ProcessDeployer.java"}),"Source on github")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'final DeploymentEvent deploymentEvent =\n        client.newDeployCommand()\n            .addResourceFromClasspath("demoProcess.bpmn")\n            .send()\n            .join();\n')),Object(o.b)("h2",{id:"demoprocessbpmn"},"demoProcess.bpmn"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/zeebe-io/zeebe/tree/develop/samples/src/main/resources/demoProcess.bpmn"}),"Source on github")),Object(o.b)("p",null,"Download the XML and save it in the Java classpath before running the example. Open the file with Camunda Modeler for a graphical representation."))}i.isMDXComponent=!0},661:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),i=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=i(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(r),m=n,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?a.a.createElement(b,s(s({ref:t},p),{},{components:r})):a.a.createElement(b,s({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);