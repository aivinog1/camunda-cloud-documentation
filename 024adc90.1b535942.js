(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{661:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var r=o.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=p(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(t),d=n,m=u["".concat(l,".").concat(d)]||u[d]||b[d]||a;return t?o.a.createElement(m,c(c({ref:r},s),{},{components:t})):o.a.createElement(m,c({ref:r},s))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,l=new Array(a);l[0]=d;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var s=2;s<a;s++)l[s]=t[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},77:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return l})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return i})),t.d(r,"default",(function(){return p}));var n=t(3),o=t(7),a=(t(0),t(661)),l={id:"workflow-deploy",title:"Deploy a Workflow"},c={unversionedId:"product-manuals/zeebe/clients/java-client-examples/workflow-deploy",id:"version-0.25/product-manuals/zeebe/clients/java-client-examples/workflow-deploy",isDocsHomePage:!1,title:"Deploy a Workflow",description:"Related Resources",source:"@site/versioned_docs/version-0.25/product-manuals/zeebe/clients/java-client-examples/workflow-deploy.md",slug:"/product-manuals/zeebe/clients/java-client-examples/workflow-deploy",permalink:"/docs/0.25/product-manuals/zeebe/clients/java-client-examples/workflow-deploy",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.25/product-manuals/zeebe/clients/java-client-examples/workflow-deploy.md",version:"0.25",sidebar:"version-0.25/Product Manuals",previous:{title:"Overview",permalink:"/docs/0.25/product-manuals/zeebe/clients/java-client-examples/index"},next:{title:"Create a Workflow Instance",permalink:"/docs/0.25/product-manuals/zeebe/clients/java-client-examples/workflow-instance-create"}},i=[{value:"Related Resources",id:"related-resources",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"WorkflowDeployer.java",id:"workflowdeployerjava",children:[]},{value:"demoProcess.bpmn",id:"demoprocessbpmn",children:[]}],s={rightToc:i};function p(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"related-resources"},"Related Resources"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.25/product-manuals/zeebe/basics/workflows"}),"Workflow Basics")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.25/product-manuals/zeebe/bpmn-workflows/bpmn-primer"}),"BPMN Introduction"))),Object(a.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Running Zeebe broker with endpoint ",Object(a.b)("inlineCode",{parentName:"li"},"localhost:26500")," (default)")),Object(a.b)("h2",{id:"workflowdeployerjava"},"WorkflowDeployer.java"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/zeebe-io/zeebe/tree/develop/samples/src/main/java/io/zeebe/example/workflow/WorkflowDeployer.java"}),"Source on github")),Object(a.b)("h2",{id:"demoprocessbpmn"},"demoProcess.bpmn"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/zeebe-io/zeebe/tree/develop/samples/src/main/resources/demoProcess.bpmn"}),"Source on github")),Object(a.b)("p",null,"Download the XML and save it in the Java classpath before running the example. Open the file with Zeebe Modeler for a graphical representation."))}p.isMDXComponent=!0}}]);