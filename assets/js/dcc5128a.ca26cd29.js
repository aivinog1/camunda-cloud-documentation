(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[60412],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),f=a,w=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(w,s(s({ref:t},u),{},{components:n})):r.createElement(w,s({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},28167:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return c},default:function(){return u}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),s={id:"workflow-instance-creation",title:"Workflow Instance Creation"},i={unversionedId:"product-manuals/zeebe/reference/workflow-instance-creation",id:"version-0.25/product-manuals/zeebe/reference/workflow-instance-creation",isDocsHomePage:!1,title:"Workflow Instance Creation",description:"Depending on the workflow definition, an instance of it can be created in the following ways.",source:"@site/versioned_docs/version-0.25/product-manuals/zeebe/reference/workflow-instance-creation.md",sourceDirName:"product-manuals/zeebe/reference",slug:"/product-manuals/zeebe/reference/workflow-instance-creation",permalink:"/docs/0.25/product-manuals/zeebe/reference/workflow-instance-creation",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.25/product-manuals/zeebe/reference/workflow-instance-creation.md",version:"0.25",frontMatter:{id:"workflow-instance-creation",title:"Workflow Instance Creation"},sidebar:"version-0.25/Product Manuals",previous:{title:"Overview",permalink:"/docs/0.25/product-manuals/zeebe/reference/index"},next:{title:"Workflow Lifecycles",permalink:"/docs/0.25/product-manuals/zeebe/reference/workflow-lifecycles"}},c=[{value:"Create workflow instance command",id:"create-workflow-instance-command",children:[{value:"Create and Execute Asynchronously",id:"create-and-execute-asynchronously",children:[]},{value:"Create and Await Results",id:"create-and-await-results",children:[]}]},{value:"Workflow instance creation by events",id:"workflow-instance-creation-by-events",children:[{value:"By publishing a message",id:"by-publishing-a-message",children:[]},{value:"Using a timer",id:"using-a-timer",children:[]}]},{value:"Distribution over partitions",id:"distribution-over-partitions",children:[]}],l={toc:c};function u(e){var t=e.components,s=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Depending on the workflow definition, an instance of it can be created in the following ways."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"by a create workflow instance command"),(0,o.kt)("li",{parentName:"ul"},"by an occured event (eg:- timer, message)")),(0,o.kt)("h2",{id:"create-workflow-instance-command"},"Create workflow instance command"),(0,o.kt)("p",null,"A workflow instance can be created by sending a command specifying the BPMN process id or the unique key of the workflow.\nThere are two commands to create a workflow instance."),(0,o.kt)("h3",{id:"create-and-execute-asynchronously"},"Create and Execute Asynchronously"),(0,o.kt)("p",null," A workflow that has a ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.25/product-manuals/zeebe/bpmn-workflows/none-events/none-events#none-start-events"},"none start event")," can be started explicitly using the command ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.25/product-manuals/zeebe/reference/grpc#createworkflowinstance-rpc"},"CreateWorkflowInstance"),".\nWhen the broker receives this commands, it creates a new workflow instance and immediately respond with the workflow instance id.\nThe execution of the workflow happens after the response is send."),(0,o.kt)("p",null," ",(0,o.kt)("img",{alt:"create-workflow",src:n(21825).Z})),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Code example"),(0,o.kt)("p",null,"Create a workflow instance:",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'zbctl create instance "order-process"\n')),(0,o.kt)("p",null,"   Response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n "workflowKey": 2251799813685249,\n "bpmnProcessId": "order-process",\n "version": 1,\n "workflowInstanceKey": 2251799813686019\n}\n\n')))),(0,o.kt)("h3",{id:"create-and-await-results"},"Create and Await Results"),(0,o.kt)("p",null,"Typically, workflow creation and execution are decoupled.\nHowever, there are use-cases that need to collect the results of a workflow when it's execution is completed.\nThe ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.25/product-manuals/zeebe/reference/grpc#createworkflowinstancewithresult-rpc"},"CreateWorkflowInstanceWithResult")," command allows you to \u201csynchronously\u201d execute workflows and receive the results via a set of variables.\nThe response is send when the workflow execution is completed."),(0,o.kt)("p",null," ",(0,o.kt)("img",{alt:"create-workflow",src:n(9752).Z})),(0,o.kt)("p",null,"Failure scenarios that are applicable to other commands are applicable to this command. Clients may not get a response in the following cases even if the workflow execution is completed successfully."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Leader failover: When the broker that is processing this workflow crashed, another broker continues the processing. But it does not send the response because the request is registered on the other broker."),(0,o.kt)("li",{parentName:"ul"},"Gateway failure: If the gateway to which the client is connected failed, broker cannot send the response to the client."),(0,o.kt)("li",{parentName:"ul"},"gRPC timeout: If the gRPC deadlines are not configured for long request timeout, the connection may be closed before the workflow is completed.")),(0,o.kt)("p",null,"This command is typically useful for short running workflows and workflows that collect information.\nIf the workflow mutates system state, or further operations rely on the workflow outcome response to the client, take care to consider and design your system for failure states and retries.\nNote that, when the client resend the command, it creates a new workflow instance."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Code example"),(0,o.kt)("p",null,"Create a workflow instance and await results:",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'zbctl create instance "order-process" --withResult --variables \'{"orderId": "1234"}\'\n')),(0,o.kt)("p",null,"Response: (Note that the variables in the response depends on the workflow.)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "workflowKey": 2251799813685249,\n  "bpmnProcessId": "order-process",\n  "version": 1,\n  "workflowInstanceKey": 2251799813686045,\n  "variables": "{\\"orderId\\":\\"1234\\"}"\n}\n')))),(0,o.kt)("h2",{id:"workflow-instance-creation-by-events"},"Workflow instance creation by events"),(0,o.kt)("p",null,"Workflow instances are also created implicitly via various start events. Zeebe supports message start events and timer start events."),(0,o.kt)("h3",{id:"by-publishing-a-message"},"By publishing a message"),(0,o.kt)("p",null,"A workflow with a ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.25/product-manuals/zeebe/bpmn-workflows/message-events/message-events#message-start-events"},"message start event")," can be started by publishing a message with the  name that matches the message name of the start event.\nFor each new message a new instance is created."),(0,o.kt)("h3",{id:"using-a-timer"},"Using a timer"),(0,o.kt)("p",null,"A workflow can also have one or more ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.25/product-manuals/zeebe/bpmn-workflows/timer-events/timer-events#timer-start-events"},"timer start events"),". An instance of the workflow is created when the associated timer is triggered."),(0,o.kt)("h2",{id:"distribution-over-partitions"},"Distribution over partitions"),(0,o.kt)("p",null," When a workflow instance is created in a partition, its state is stored and managed by the same partition until its execution is terminated. The partition in which it is created is determined by various factors."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When a user sends a command ",(0,o.kt)("inlineCode",{parentName:"li"},"CreateWorkflowInstance")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"CreateWorkflowInstanceWithResult"),", gateway chooses a partition in a round-robin manner and forwards the requests to that partition. The workflow instance is created in that partition."),(0,o.kt)("li",{parentName:"ul"},"When a user publishes a message, the message is forwarded to a partition based on the correlation key of the message. The workflow instance is created on the same partition where the message is published."),(0,o.kt)("li",{parentName:"ul"},"Workflow instances created by timer start events are always created on partition 1.")))}u.isMDXComponent=!0},9752:function(e,t,n){"use strict";t.Z=n.p+"assets/images/create-workflow-with-result-a85699b136289b1303ffcd96a898943d.png"},21825:function(e,t,n){"use strict";t.Z=n.p+"assets/images/create-workflow-ee0ffa1a268d6040d11f13dbf7738671.png"}}]);