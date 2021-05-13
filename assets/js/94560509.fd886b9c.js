(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[92028],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44363:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return c},default:function(){return u}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),l={id:"workflow-instance-create-with-result",title:"Create a workflow instance with results"},i={unversionedId:"product-manuals/clients/java-client-examples/workflow-instance-create-with-result",id:"version-0.26/product-manuals/clients/java-client-examples/workflow-instance-create-with-result",isDocsHomePage:!1,title:"Create a workflow instance with results",description:"Prerequisites",source:"@site/versioned_docs/version-0.26/product-manuals/clients/java-client-examples/workflow-instance-create-with-result.md",sourceDirName:"product-manuals/clients/java-client-examples",slug:"/product-manuals/clients/java-client-examples/workflow-instance-create-with-result",permalink:"/docs/0.26/product-manuals/clients/java-client-examples/workflow-instance-create-with-result",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/product-manuals/clients/java-client-examples/workflow-instance-create-with-result.md",version:"0.26",frontMatter:{id:"workflow-instance-create-with-result",title:"Create a workflow instance with results"},sidebar:"version-0.26/Product Manuals",previous:{title:"Create non-blocking workflow instances",permalink:"/docs/0.26/product-manuals/clients/java-client-examples/workflow-instance-create-nonblocking"},next:{title:"Open a job worker",permalink:"/docs/0.26/product-manuals/clients/java-client-examples/job-worker-open"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"WorkflowInstanceWithResultCreator.java",id:"workflowinstancewithresultcreatorjava",children:[]}],s={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Running Zeebe broker with endpoint ",(0,o.kt)("inlineCode",{parentName:"li"},"localhost:26500")," (default)"),(0,o.kt)("li",{parentName:"ol"},"Run the ",(0,o.kt)("a",{parentName:"li",href:"/docs/0.26/product-manuals/clients/java-client-examples/workflow-deploy"},"deploy a workflow example"),". Deploy ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/zeebe-io/zeebe/tree/develop/samples/src/main/resources/demoProcessSingleTask.bpmn"},(0,o.kt)("inlineCode",{parentName:"a"},"demoProcessSingleTask.bpmn"))," instead of ",(0,o.kt)("inlineCode",{parentName:"li"},"demoProcess.bpmn"))),(0,o.kt)("h2",{id:"workflowinstancewithresultcreatorjava"},"WorkflowInstanceWithResultCreator.java"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe/tree/develop/samples/src/main/java/io/zeebe/example/workflow/WorkflowInstanceWithResultCreator.java"},"Source on github")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'final WorkflowInstanceResult workflowInstanceResult =\n    client\n        .newCreateInstanceCommand()\n        .bpmnProcessId(bpmnProcessId)\n        .latestVersion()\n        .withResult() // to await the completion of workflow execution and return result\n        .send()\n        .join();\n\nSystem.out.println(\n    "Workflow instance created with key: "\n        + workflowInstanceResult.getWorkflowInstanceKey()\n        + " and completed with results: "\n        + workflowInstanceResult.getVariables());\n')))}u.isMDXComponent=!0}}]);