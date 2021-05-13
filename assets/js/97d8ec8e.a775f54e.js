(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[50313],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,k=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65047:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={id:"grpc",title:"Zeebe API (gRPC)"},s={unversionedId:"reference/grpc",id:"version-0.26/reference/grpc",isDocsHomePage:!1,title:"Zeebe API (gRPC)",description:"Zeebe clients use gRPC to communicate with the cluster.",source:"@site/versioned_docs/version-0.26/reference/grpc.md",sourceDirName:"reference",slug:"/reference/grpc",permalink:"/docs/0.26/reference/grpc",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/reference/grpc.md",version:"0.26",frontMatter:{id:"grpc",title:"Zeebe API (gRPC)"},sidebar:"version-0.26/Reference",previous:{title:"Console API (REST)",permalink:"/docs/0.26/reference/cloud-console-api-reference"},next:{title:"GraphQL schema",permalink:"/docs/0.26/reference/tasklist-api/schema"}},l=[{value:"Gateway Service",id:"gateway-service",children:[{value:"<code>ActivateJobs</code> RPC",id:"activatejobs-rpc",children:[]},{value:"<code>CancelWorkflowInstance</code> RPC",id:"cancelworkflowinstance-rpc",children:[]},{value:"<code>CompleteJob</code> RPC",id:"completejob-rpc",children:[]},{value:"<code>CreateWorkflowInstance</code> RPC",id:"createworkflowinstance-rpc",children:[]},{value:"<code>CreateWorkflowInstanceWithResult</code> RPC",id:"createworkflowinstancewithresult-rpc",children:[]},{value:"<code>DeployWorkflow</code> RPC",id:"deployworkflow-rpc",children:[]},{value:"<code>FailJob</code> RPC",id:"failjob-rpc",children:[]},{value:"<code>PublishMessage</code> RPC",id:"publishmessage-rpc",children:[]},{value:"<code>ResolveIncident</code> RPC",id:"resolveincident-rpc",children:[]},{value:"<code>SetVariables</code> RPC",id:"setvariables-rpc",children:[]},{value:"<code>ThrowError</code> RPC",id:"throwerror-rpc",children:[]},{value:"<code>Topology</code> RPC",id:"topology-rpc",children:[]},{value:"<code>UpdateJobRetries</code> RPC",id:"updatejobretries-rpc",children:[]}]},{value:"Technical Error Handling",id:"technical-error-handling",children:[]}],u={toc:l};function c(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/0.26/product-manuals/zeebe/zeebe-overview"},"Zeebe")," clients use ",(0,a.kt)("a",{parentName:"p",href:"https://grpc.io/"},"gRPC")," to communicate with the cluster."),(0,a.kt)("h2",{id:"gateway-service"},"Gateway Service"),(0,a.kt)("p",null,"The Zeebe Client gRPC API is exposed through a single gateway service."),(0,a.kt)("h3",{id:"activatejobs-rpc"},(0,a.kt)("inlineCode",{parentName:"h3"},"ActivateJobs")," RPC"),(0,a.kt)("p",null,"Iterates through all known partitions round-robin and activates up to the requested\nmaximum and streams them back to the client as they are activated."),(0,a.kt)("h4",{id:"input-activatejobsrequest"},"Input: ",(0,a.kt)("inlineCode",{parentName:"h4"},"ActivateJobsRequest")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},'message ActivateJobsRequest {\n  // the job type, as defined in the BPMN process (e.g. <zeebe:taskDefinition\n  // type="payment-service" />)\n  string type = 1;\n  // the name of the worker activating the jobs, mostly used for logging purposes\n  string worker = 2;\n  // a job returned after this call will not be activated by another call until the\n  // timeout (in ms) has been reached\n  int64 timeout = 3;\n  // the maximum jobs to activate by this request\n  int32 maxJobsToActivate = 4;\n  // a list of variables to fetch as the job variables; if empty, all visible variables at\n  // the time of activation for the scope of the job will be returned\n  repeated string fetchVariable = 5;\n  // The request will be completed when at least one job is activated or after the requestTimeout (in ms).\n  // if the requestTimeout = 0, a default timeout is used.\n  // if the requestTimeout < 0, long polling is disabled and the request is completed immediately, even when no job is activated.\n  int64 requestTimeout = 6;\n}\n')),(0,a.kt)("h4",{id:"output-activatejobsresponse"},"Output: ",(0,a.kt)("inlineCode",{parentName:"h4"},"ActivateJobsResponse")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"message ActivateJobsResponse {\n  // list of activated jobs\n  repeated ActivatedJob jobs = 1;\n}\n\nmessage ActivatedJob {\n  // the key, a unique identifier for the job\n  int64 key = 1;\n  // the type of the job (should match what was requested)\n  string type = 2;\n  // the job's workflow instance key\n  int64 workflowInstanceKey = 3;\n  // the bpmn process ID of the job workflow definition\n  string bpmnProcessId = 4;\n  // the version of the job workflow definition\n  int32 workflowDefinitionVersion = 5;\n  // the key of the job workflow definition\n  int64 workflowKey = 6;\n  // the associated task element ID\n  string elementId = 7;\n  // the unique key identifying the associated task, unique within the scope of the\n  // workflow instance\n  int64 elementInstanceKey = 8;\n  // a set of custom headers defined during modelling; returned as a serialized\n  // JSON document\n  string customHeaders = 9;\n  // the name of the worker which activated this job\n  string worker = 10;\n  // the amount of retries left to this job (should always be positive)\n  int32 retries = 11;\n  // when the job can be activated again, sent as a UNIX epoch timestamp\n  int64 deadline = 12;\n  // JSON document, computed at activation time, consisting of all visible variables to\n  // the task scope\n  string variables = 13;\n}\n")),(0,a.kt)("h4",{id:"errors"},"Errors"),(0,a.kt)("h5",{id:"grpc_status_invalid_argument"},"GRPC_STATUS_INVALID_ARGUMENT"),(0,a.kt)("p",null,"Returned if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type is blank (empty string, null)"),(0,a.kt)("li",{parentName:"ul"},"worker is blank (empty string, null)"),(0,a.kt)("li",{parentName:"ul"},"timeout less than 1 (ms)"),(0,a.kt)("li",{parentName:"ul"},"amount is less than 1")),(0,a.kt)("h3",{id:"cancelworkflowinstance-rpc"},(0,a.kt)("inlineCode",{parentName:"h3"},"CancelWorkflowInstance")," RPC"),(0,a.kt)("p",null,"Cancels a running workflow instance"),(0,a.kt)("h4",{id:"input-cancelworkflowinstancerequest"},"Input: ",(0,a.kt)("inlineCode",{parentName:"h4"},"CancelWorkflowInstanceRequest")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"message CancelWorkflowInstanceRequest {\n  // the workflow instance key (as, for example, obtained from\n  // CreateWorkflowInstanceResponse)\n  int64 workflowInstanceKey = 1;\n}\n")),(0,a.kt)("h4",{id:"output-cancelworkflowinstanceresponse"},"Output: ",(0,a.kt)("inlineCode",{parentName:"h4"},"CancelWorkflowInstanceResponse")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"message CancelWorkflowInstanceResponse {\n}\n")),(0,a.kt)("h4",{id:"errors-1"},"Errors"),(0,a.kt)("h5",{id:"grpc_status_not_found"},"GRPC_STATUS_NOT_FOUND"),(0,a.kt)("p",null,"Returned if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"no workflow instance exists with the given key. Note that since workflow instances\nare removed once their are finished, it could mean the instance did exist at some point.")),(0,a.kt)("h3",{id:"completejob-rpc"},(0,a.kt)("inlineCode",{parentName:"h3"},"CompleteJob")," RPC"),(0,a.kt)("p",null,"Completes a job with the given payload, which allows completing the associated service task."),(0,a.kt)("h4",{id:"input-completejobrequest"},"Input: ",(0,a.kt)("inlineCode",{parentName:"h4"},"CompleteJobRequest")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"message CompleteJobRequest {\n  // the unique job identifier, as obtained from ActivateJobsResponse\n  int64 jobKey = 1;\n  // a JSON document representing the variables in the current task scope\n  string variables = 2;\n}\n")),(0,a.kt)("h4",{id:"output-completejobresponse"},"Output: ",(0,a.kt)("inlineCode",{parentName:"h4"},"CompleteJobResponse")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"message CompleteJobResponse {\n}\n")),(0,a.kt)("h4",{id:"errors-2"},"Errors"),(0,a.kt)("h5",{id:"grpc_status_not_found-1"},"GRPC_STATUS_NOT_FOUND"),(0,a.kt)("p",null,"Returned if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"no job exists with the given job key. Note that since jobs are removed once completed,\nit could be that this job did exist at some point.")),(0,a.kt)("h5",{id:"grpc_status_failed_precondition"},"GRPC_STATUS_FAILED_PRECONDITION"),(0,a.kt)("p",null,"Returned if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the job was marked as failed. In that case, the related incident must be resolved before\nthe job can be activated again and completed.")),(0,a.kt)("h3",{id:"createworkflowinstance-rpc"},(0,a.kt)("inlineCode",{parentName:"h3"},"CreateWorkflowInstance")," RPC"),(0,a.kt)("p",null,"Creates and starts an instance of the specified workflow. The workflow definition to use\nto create the instance can be specified either using its unique key (as returned by\nDeployWorkflow), or using the BPMN process ID and a version. Pass -1 as the version to\nuse the latest deployed version."),(0,a.kt)("p",null,"Note that only workflows with none start events can be started through this command."),(0,a.kt)("h4",{id:"input-createworkflowinstancerequest"},"Input: ",(0,a.kt)("inlineCode",{parentName:"h4"},"CreateWorkflowInstanceRequest")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},'message CreateWorkflowInstanceRequest {\n  // the unique key identifying the workflow definition (e.g. returned from a workflow\n  // in the DeployWorkflowResponse message)\n  int64 workflowKey = 1;\n  // the BPMN process ID of the workflow definition\n  string bpmnProcessId = 2;\n  // the version of the process; set to -1 to use the latest version\n  int32 version = 3;\n  // JSON document that will instantiate the variables for the root variable scope of the\n  // workflow instance; it must be a JSON object, as variables will be mapped in a\n  // key-value fashion. e.g. { "a": 1, "b": 2 } will create two variables, named "a" and\n  // "b" respectively, with their associated values. [{ "a": 1, "b": 2 }] would not be a\n  // valid argument, as the root of the JSON document is an array and not an object.\n  string variables = 4;\n}\n')),(0,a.kt)("h4",{id:"output-createworkflowinstanceresponse"},"Output: ",(0,a.kt)("inlineCode",{parentName:"h4"},"CreateWorkflowInstanceResponse")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"message CreateWorkflowInstanceResponse {\n  // the key of the workflow definition which was used to create the workflow instance\n  int64 workflowKey = 1;\n  // the BPMN process ID of the workflow definition which was used to create the workflow\n  // instance\n  string bpmnProcessId = 2;\n  // the version of the workflow definition which was used to create the workflow instance\n  int32 version = 3;\n  // the unique identifier of the created workflow instance; to be used wherever a request\n  // needs a workflow instance key (e.g. CancelWorkflowInstanceRequest)\n  int64 workflowInstanceKey = 4;\n}\n")),(0,a.kt)("h3",{id:"createworkflowinstancewithresult-rpc"},(0,a.kt)("inlineCode",{parentName:"h3"},"CreateWorkflowInstanceWithResult")," RPC"),(0,a.kt)("p",null,"Similar to ",(0,a.kt)("inlineCode",{parentName:"p"},"CreateWorkflowInstance")," RPC , creates and starts an instance of the specified workflow.\nUnlike ",(0,a.kt)("inlineCode",{parentName:"p"},"CreateWorkflowInstance")," RPC, the response is returned when the workflow is completed."),(0,a.kt)("p",null,"Note that only workflows with none start events can be started through this command."),(0,a.kt)("h4",{id:"input-createworkflowinstancewithresultrequest"},"Input: ",(0,a.kt)("inlineCode",{parentName:"h4"},"CreateWorkflowInstanceWithResultRequest")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"message CreateWorkflowInstanceRequest {\n   CreateWorkflowInstanceRequest request = 1;\n   // timeout (in ms). the request will be closed if the workflow is not completed before\n   // the requestTimeout.\n   // if requestTimeout = 0, uses the generic requestTimeout configured in the gateway.\n   int64 requestTimeout = 2;\n}\n")),(0,a.kt)("h4",{id:"output-createworkflowinstancewithresultresponse"},"Output: ",(0,a.kt)("inlineCode",{parentName:"h4"},"CreateWorkflowInstanceWithResultResponse")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"message CreateWorkflowInstanceResponse {\n  // the key of the workflow definition which was used to create the workflow instance\n  int64 workflowKey = 1;\n  // the BPMN process ID of the workflow definition which was used to create the workflow\n  // instance\n  string bpmnProcessId = 2;\n  // the version of the workflow definition which was used to create the workflow instance\n  int32 version = 3;\n  // the unique identifier of the created workflow instance; to be used wherever a request\n  // needs a workflow instance key (e.g. CancelWorkflowInstanceRequest)\n  int64 workflowInstanceKey = 4;\n  // consisting of all visible variables to the root scope\n  string variables = 5;\n}\n")),(0,a.kt)("h4",{id:"errors-3"},"Errors"),(0,a.kt)("h5",{id:"grpc_status_not_found-2"},"GRPC_STATUS_NOT_FOUND"),(0,a.kt)("p",null,"Returned if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"no workflow with the given key exists (if workflowKey was given)"),(0,a.kt)("li",{parentName:"ul"},"no workflow with the given process ID exists (if bpmnProcessId was given but version was -1)"),(0,a.kt)("li",{parentName:"ul"},"no workflow with the given process ID and version exists (if both bpmnProcessId and version were given)")),(0,a.kt)("h5",{id:"grpc_status_failed_precondition-1"},"GRPC_STATUS_FAILED_PRECONDITION"),(0,a.kt)("p",null,"Returned if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the workflow definition does not contain a none start event; only workflows with none\nstart event can be started manually.")),(0,a.kt)("h5",{id:"grpc_status_invalid_argument-1"},"GRPC_STATUS_INVALID_ARGUMENT"),(0,a.kt)("p",null,"Returned if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the given variables argument is not a valid JSON document; it is expected to be a valid\nJSON document where the root node is an object.")),(0,a.kt)("h3",{id:"deployworkflow-rpc"},(0,a.kt)("inlineCode",{parentName:"h3"},"DeployWorkflow")," RPC"),(0,a.kt)("p",null,"Deploys one or more workflows to Zeebe. Note that this is an atomic call,\ni.e. either all workflows are deployed, or none of them are."),(0,a.kt)("h4",{id:"input-deployworkflowrequest"},"Input: ",(0,a.kt)("inlineCode",{parentName:"h4"},"DeployWorkflowRequest")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"message DeployWorkflowRequest {\n  // List of workflow resources to deploy\n  repeated WorkflowRequestObject workflows = 1;\n}\n\nmessage WorkflowRequestObject {\n  enum ResourceType {\n    // FILE type means the gateway will try to detect the resource type\n    // using the file extension of the name field\n    FILE = 0;\n    BPMN = 1; // extension 'bpmn'\n    YAML = 2; // extension 'yaml'\n  }\n\n  // the resource basename, e.g. myProcess.bpmn\n  string name = 1;\n  // the resource type; if set to BPMN or YAML then the file extension\n  // is ignored\n  ResourceType type = 2;\n  // the process definition as a UTF8-encoded string\n  bytes definition = 3;\n}\n")),(0,a.kt)("h4",{id:"output-deployworkflowresponse"},"Output: ",(0,a.kt)("inlineCode",{parentName:"h4"},"DeployWorkflowResponse")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"message DeployWorkflowResponse {\n  // the unique key identifying the deployment\n  int64 key = 1;\n  // a list of deployed workflows\n  repeated WorkflowMetadata workflows = 2;\n}\n\nmessage WorkflowMetadata {\n  // the bpmn process ID, as parsed during deployment; together with the version forms a\n  // unique identifier for a specific workflow definition\n  string bpmnProcessId = 1;\n  // the assigned process version\n  int32 version = 2;\n  // the assigned key, which acts as a unique identifier for this workflow\n  int64 workflowKey = 3;\n  // the resource name (see: WorkflowRequestObject.name) from which this workflow was\n  // parsed\n  string resourceName = 4;\n}\n")),(0,a.kt)("h4",{id:"errors-4"},"Errors"),(0,a.kt)("h5",{id:"grpc_status_invalid_argument-2"},"GRPC_STATUS_INVALID_ARGUMENT"),(0,a.kt)("p",null,"Returned if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"no resources given."),(0,a.kt)("li",{parentName:"ul"},"if at least one resource is invalid. A resource is considered invalid if:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"it is not a BPMN or YAML file (currently detected through the file extension)"),(0,a.kt)("li",{parentName:"ul"},"the resource data is not deserializable (e.g. detected as BPMN, but it's broken XML)"),(0,a.kt)("li",{parentName:"ul"},"the workflow is invalid (e.g. an event-based gateway has an outgoing sequence flow to a task)")))),(0,a.kt)("h3",{id:"failjob-rpc"},(0,a.kt)("inlineCode",{parentName:"h3"},"FailJob")," RPC"),(0,a.kt)("p",null,"Marks the job as failed; if the retries argument is positive, then the job will be immediately\nactivatable again, and a worker could try again to process it. If it is zero or negative however,\nan incident will be raised, tagged with the given errorMessage, and the job will not be\nactivatable until the incident is resolved."),(0,a.kt)("h4",{id:"input-failjobrequest"},"Input: ",(0,a.kt)("inlineCode",{parentName:"h4"},"FailJobRequest")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"message FailJobRequest {\n  // the unique job identifier, as obtained when activating the job\n  int64 jobKey = 1;\n  // the amount of retries the job should have left\n  int32 retries = 2;\n  // an optional message describing why the job failed\n  // this is particularly useful if a job runs out of retries and an incident is raised,\n  // as it this message can help explain why an incident was raised\n  string errorMessage = 3;\n}\n")),(0,a.kt)("h4",{id:"output-failjobresponse"},"Output: ",(0,a.kt)("inlineCode",{parentName:"h4"},"FailJobResponse")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"message FailJobResponse {\n}\n")),(0,a.kt)("h4",{id:"errors-5"},"Errors"),(0,a.kt)("h5",{id:"grpc_status_not_found-3"},"GRPC_STATUS_NOT_FOUND"),(0,a.kt)("p",null,"Returned if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"no job was found with the given key")),(0,a.kt)("h5",{id:"grpc_status_failed_precondition-2"},"GRPC_STATUS_FAILED_PRECONDITION"),(0,a.kt)("p",null,"Returned if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the job was not activated"),(0,a.kt)("li",{parentName:"ul"},"the job is already in a failed state, i.e. ran out of retries")),(0,a.kt)("h3",{id:"publishmessage-rpc"},(0,a.kt)("inlineCode",{parentName:"h3"},"PublishMessage")," RPC"),(0,a.kt)("p",null,"Publishes a single message. Messages are published to specific partitions computed from their\ncorrelation keys."),(0,a.kt)("h4",{id:"input-publishmessagerequest"},"Input: ",(0,a.kt)("inlineCode",{parentName:"h4"},"PublishMessageRequest")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},'message PublishMessageRequest {\n  // the name of the message\n  string name = 1;\n  // the correlation key of the message\n  string correlationKey = 2;\n  // how long the message should be buffered on the broker, in milliseconds\n  int64 timeToLive = 3;\n  // the unique ID of the message; can be omitted. only useful to ensure only one message\n  // with the given ID will ever be published (during its lifetime)\n  string messageId = 4;\n  // the message variables as a JSON document; to be valid, the root of the document must be an\n  // object, e.g. { "a": "foo" }. [ "foo" ] would not be valid.\n  string variables = 5;\n}\n')),(0,a.kt)("h4",{id:"output-publishmessageresponse"},"Output: ",(0,a.kt)("inlineCode",{parentName:"h4"},"PublishMessageResponse")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"message PublishMessageResponse {\n  // the unique ID of the message that was published\n  int64 key = 1;\n}\n")),(0,a.kt)("h4",{id:"errors-6"},"Errors"),(0,a.kt)("h5",{id:"grpc_status_already_exists"},"GRPC_STATUS_ALREADY_EXISTS"),(0,a.kt)("p",null,"Returned if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a message with the same ID was previously published (and is still alive)")),(0,a.kt)("h3",{id:"resolveincident-rpc"},(0,a.kt)("inlineCode",{parentName:"h3"},"ResolveIncident")," RPC"),(0,a.kt)("p",null,"Resolves a given incident. This simply marks the incident as resolved; most likely a call to\nUpdateJobRetries or UpdateWorkflowInstancePayload will be necessary to actually resolve the\nproblem, following by this call."),(0,a.kt)("h4",{id:"input-resolveincidentrequest"},"Input: ",(0,a.kt)("inlineCode",{parentName:"h4"},"ResolveIncidentRequest")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"message ResolveIncidentRequest {\n  // the unique ID of the incident to resolve\n  int64 incidentKey = 1;\n}\n")),(0,a.kt)("h4",{id:"output-resolveincidentresponse"},"Output: ",(0,a.kt)("inlineCode",{parentName:"h4"},"ResolveIncidentResponse")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"message ResolveIncidentResponse {\n}\n")),(0,a.kt)("h4",{id:"errors-7"},"Errors"),(0,a.kt)("h5",{id:"grpc_status_not_found-4"},"GRPC_STATUS_NOT_FOUND"),(0,a.kt)("p",null,"Returned if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"no incident with the given key exists")),(0,a.kt)("h3",{id:"setvariables-rpc"},(0,a.kt)("inlineCode",{parentName:"h3"},"SetVariables")," RPC"),(0,a.kt)("p",null,"Updates all the variables of a particular scope (e.g. workflow instance, flow element instance) from the given JSON document."),(0,a.kt)("h4",{id:"input-setvariablesrequest"},"Input: ",(0,a.kt)("inlineCode",{parentName:"h4"},"SetVariablesRequest")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},'message SetVariablesRequest {\n  // the unique identifier of a particular element; can be the workflow instance key (as\n  // obtained during instance creation), or a given element, such as a service task (see\n  // elementInstanceKey on the job message)\n  int64 elementInstanceKey = 1;\n  // a JSON serialized document describing variables as key value pairs; the root of the document\n  // must be an object\n  string variables = 2;\n  // if true, the variables will be merged strictly into the local scope (as indicated by\n  // elementInstanceKey); this means the variables is not propagated to upper scopes.\n  // for example, let\'s say we have two scopes, \'1\' and \'2\', with each having effective variables as:\n  // 1 => `{ "foo" : 2 }`, and 2 => `{ "bar" : 1 }`. if we send an update request with\n  // elementInstanceKey = 2, variables `{ "foo" : 5 }`, and local is true, then scope 1 will\n  // be unchanged, and scope 2 will now be `{ "bar" : 1, "foo" 5 }`. if local was false, however,\n  // then scope 1 would be `{ "foo": 5 }`, and scope 2 would be `{ "bar" : 1 }`.\n  bool local = 3;\n}\n')),(0,a.kt)("h4",{id:"output-setvariablesresponse"},"Output: ",(0,a.kt)("inlineCode",{parentName:"h4"},"SetVariablesResponse")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"message SetVariablesResponse {\n  // the unique key of the set variables command\n  int64 key = 1;\n}\n")),(0,a.kt)("h4",{id:"errors-8"},"Errors"),(0,a.kt)("h5",{id:"grpc_status_not_found-5"},"GRPC_STATUS_NOT_FOUND"),(0,a.kt)("p",null,"Returned if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"no element with the given ",(0,a.kt)("inlineCode",{parentName:"li"},"elementInstanceKey")," was exists")),(0,a.kt)("h5",{id:"grpc_status_invalid_argument-3"},"GRPC_STATUS_INVALID_ARGUMENT"),(0,a.kt)("p",null,"Returned if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the given payload is not a valid JSON document; all payloads are expected to be\nvalid JSON documents where the root node is an object.")),(0,a.kt)("h3",{id:"throwerror-rpc"},(0,a.kt)("inlineCode",{parentName:"h3"},"ThrowError")," RPC"),(0,a.kt)("p",null,"Throw an error to indicate that a business error is occurred while processing the job. The error is identified by an error code and is handled by an error catch event in the workflow with the same error code."),(0,a.kt)("h4",{id:"input-throwerrorrequest"},"Input: ",(0,a.kt)("inlineCode",{parentName:"h4"},"ThrowErrorRequest")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"message ThrowErrorRequest {\n  // the unique job identifier, as obtained when activating the job\n  int64 jobKey = 1;\n  // the error code that will be matched with an error catch event\n  string errorCode = 2;\n  // an optional error message that provides additional context\n  string errorMessage = 3;\n}\n")),(0,a.kt)("h4",{id:"output-throwerrorresponse"},"Output: ",(0,a.kt)("inlineCode",{parentName:"h4"},"ThrowErrorResponse")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"message ThrowErrorResponse {\n}\n")),(0,a.kt)("h4",{id:"errors-9"},"Errors"),(0,a.kt)("h5",{id:"grpc_status_not_found-6"},"GRPC_STATUS_NOT_FOUND"),(0,a.kt)("p",null,"Returned if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"no job was found with the given key")),(0,a.kt)("h5",{id:"grpc_status_failed_precondition-3"},"GRPC_STATUS_FAILED_PRECONDITION"),(0,a.kt)("p",null,"Returned if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the job is already in a failed state, i.e. ran out of retries")),(0,a.kt)("h3",{id:"topology-rpc"},(0,a.kt)("inlineCode",{parentName:"h3"},"Topology")," RPC"),(0,a.kt)("p",null,"Obtains the current topology of the cluster the gateway is part of."),(0,a.kt)("h4",{id:"input-topologyrequest"},"Input: ",(0,a.kt)("inlineCode",{parentName:"h4"},"TopologyRequest")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"message TopologyRequest {\n}\n")),(0,a.kt)("h4",{id:"output-topologyresponse"},"Output: ",(0,a.kt)("inlineCode",{parentName:"h4"},"TopologyResponse")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"message TopologyResponse {\n  // list of brokers part of this cluster\n  repeated BrokerInfo brokers = 1;\n  // how many nodes are in the cluster\n  int32 clusterSize = 2;\n  // how many partitions are spread across the cluster\n  int32 partitionsCount = 3;\n  // configured replication factor for this cluster\n  int32 replicationFactor = 4;\n  // gateway version\n  string gatewayVersion = 5;\n}\n\nmessage BrokerInfo {\n  // unique (within a cluster) node ID for the broker\n  int32 nodeId = 1;\n  // hostname of the broker\n  string host = 2;\n  // port for the broker\n  int32 port = 3;\n  // list of partitions managed or replicated on this broker\n  repeated Partition partitions = 4;\n  // broker version\n  string version = 5;\n}\n\nmessage Partition {\n  // Describes the Raft role of the broker for a given partition\n  enum PartitionBrokerRole {\n    LEADER = 0;\n    FOLLOWER = 1;\n  }\n\n  // Describes the current health of the partition\n  enum PartitionBrokerHealth {\n    HEALTHY = 0;\n    UNHEALTHY = 1;\n  }\n\n  // the unique ID of this partition\n  int32 partitionId = 1;\n  // the role of the broker for this partition\n  PartitionBrokerRole role = 2;\n  // the health of this partition\n  PartitionBrokerHealth health = 3;\n}\n")),(0,a.kt)("h4",{id:"errors-10"},"Errors"),(0,a.kt)("p",null,"No specific errors"),(0,a.kt)("h3",{id:"updatejobretries-rpc"},(0,a.kt)("inlineCode",{parentName:"h3"},"UpdateJobRetries")," RPC"),(0,a.kt)("p",null,"Updates the number of retries a job has left. This is mostly useful for jobs that have run out of\nretries, should the underlying problem be solved."),(0,a.kt)("h4",{id:"input-updatejobretriesrequest"},"Input: ",(0,a.kt)("inlineCode",{parentName:"h4"},"UpdateJobRetriesRequest")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"message UpdateJobRetriesRequest {\n  // the unique job identifier, as obtained through ActivateJobs\n  int64 jobKey = 1;\n  // the new amount of retries for the job; must be positive\n  int32 retries = 2;\n}\n")),(0,a.kt)("h4",{id:"output-updatejobretriesresponse"},"Output: ",(0,a.kt)("inlineCode",{parentName:"h4"},"UpdateJobRetriesResponse")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"message UpdateJobRetriesResponse {\n}\n")),(0,a.kt)("h4",{id:"errors-11"},"Errors"),(0,a.kt)("h5",{id:"grpc_status_not_found-7"},"GRPC_STATUS_NOT_FOUND"),(0,a.kt)("p",null,"Returned if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"no job exists with the given key")),(0,a.kt)("h5",{id:"grpc_status_invalid_argument-4"},"GRPC_STATUS_INVALID_ARGUMENT"),(0,a.kt)("p",null,"Returned if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"retries is not greater than 0")),(0,a.kt)("h2",{id:"technical-error-handling"},"Technical Error Handling"),(0,a.kt)("p",null,"In the documentation above, the documented errors are business logic errors.\nThese are errors which are a result of request processing logic, and not serialization, network, or\nother more general errors. These error are described in this sections."),(0,a.kt)("p",null,"The gRPC API for Zeebe is exposed through an API gateway, which acts as a proxy\nfor the cluster. Generally, this means that the clients execute a remote call on the gateway,\nwhich is then translated to special binary protocol that the gateway uses to\ncommunicate with nodes in the cluster. The nodes in the cluster are called brokers."),(0,a.kt)("p",null,"Technical errors which occur between gateway and brokers (e.g. the gateway cannot deserialize the broker response,\nthe broker is unavailable, etc.) are reported to the client using the following error codes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GRPC_STATUS_RESOURCE_EXHAUSTED"),": when a broker receives more requests than it can handle, it signals back-pressure and rejects requests with this error code.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"In this case, it is possible to retry the requests with an appropriate retry strategy."),(0,a.kt)("li",{parentName:"ul"},"If you receive many such errors within a small time period, it indicates that the broker is constantly under high load."),(0,a.kt)("li",{parentName:"ul"},"It is recommended to reduce the rate of requests.\nWhen back-pressure is active, the broker may reject any request except ",(0,a.kt)("em",{parentName:"li"},"CompleteJob")," RPC and ",(0,a.kt)("em",{parentName:"li"},"FailJob")," RPC."),(0,a.kt)("li",{parentName:"ul"},"These requests are white-listed for back-pressure and are always accepted by the broker even if it is receiving requests above its limits."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GRPC_STATUS_UNAVAILABLE"),": if the gateway itself is in an invalid state (e.g. out of memory)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GRPC_STATUS_INTERNAL"),": for any other internal errors that occurred between the gateway and the broker.")),(0,a.kt)("p",null,"This behavior applies to every request. In these cases, the client should retry\nwith an appropriate retry policy (e.g. a combination of exponential backoff or jitter wrapped\nin a circuit breaker)."),(0,a.kt)("p",null,"As the gRPC server/client is based on generated code, keep in mind that\nany call made to the server can also return errors as described by the spec\n",(0,a.kt)("a",{parentName:"p",href:"https://grpc.io/docs/guides/error.html#error-status-codes"},"here"),"."))}c.isMDXComponent=!0}}]);