(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[23956],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},49401:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={id:"get-started",title:"Go client - Getting started guide",sidebar_label:"Getting started guide"},l={unversionedId:"product-manuals/clients/go-client/get-started",id:"version-1.0/product-manuals/clients/go-client/get-started",isDocsHomePage:!1,title:"Go client - Getting started guide",description:"In this tutorial, you will learn how to use the Go client in a Go application to interact with Camunda Cloud.",source:"@site/versioned_docs/version-1.0/product-manuals/clients/go-client/get-started.md",sourceDirName:"product-manuals/clients/go-client",slug:"/product-manuals/clients/go-client/get-started",permalink:"/docs/1.0/product-manuals/clients/go-client/get-started",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-1.0/product-manuals/clients/go-client/get-started.md",version:"1.0",sidebar_label:"Getting started guide",frontMatter:{id:"get-started",title:"Go client - Getting started guide",sidebar_label:"Getting started guide"},sidebar:"version-1.0/Product Manuals",previous:{title:"Go client",permalink:"/docs/1.0/product-manuals/clients/go-client/index"},next:{title:"CLI client",permalink:"/docs/1.0/product-manuals/clients/cli-client/index"}},s=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Set up a project",id:"set-up-a-project",children:[]},{value:"Model a process",id:"model-a-process",children:[]},{value:"Deploy a process",id:"deploy-a-process",children:[]},{value:"Create a process instance",id:"create-a-process-instance",children:[]},{value:"See the process in action",id:"see-the-process-in-action",children:[]},{value:"Work on a task",id:"work-on-a-task",children:[]},{value:"What&#39;s next?",id:"whats-next",children:[]}],c={toc:s};function p(e){var t=e.components,i=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this tutorial, you will learn how to use the Go client in a Go application to interact with Camunda Cloud."),(0,a.kt)("p",null,"You can find the complete source code on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe-get-started-go-client"},"GitHub"),"."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.0/guides/getting-started/"},"Camunda Cloud account")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.0/guides/getting-started/"},"Cluster")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.0/guides/getting-started/setup-client-connection-credentials"},"Client credentials")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.0/guides/getting-started/model-your-first-process"},"Modeler")),(0,a.kt)("li",{parentName:"ul"},"Go v1.13+ environment installed")),(0,a.kt)("h2",{id:"set-up-a-project"},"Set up a project"),(0,a.kt)("p",null,"First, we need a new Go project.\nCreate a new project using your IDE, or create new Go module with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mkdir -p $GOPATH/src/github.com/zb-user/zb-example\ncd $GOPATH/src/github.com/zb-user/zb-example\ngo mod init\n")),(0,a.kt)("p",null,"To use the Zeebe Go client library, add the following dependency to your ",(0,a.kt)("inlineCode",{parentName:"p"},"go.mod"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"module github.com/zb-user/zb-example\n\ngo 1.13\n\nrequire github.com/zeebe-io/zeebe/clients/go v0.26.0\n")),(0,a.kt)("p",null,"Set the connection settings and client credentials as environment variables:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export ZEEBE_ADDRESS='[Zeebe API]'\nexport ZEEBE_CLIENT_ID='[Client ID]'\nexport ZEEBE_CLIENT_SECRET='[Client Secret]'\nexport ZEEBE_AUTHORIZATION_SERVER_URL='[OAuth API]'\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Hint:")," When you create client credentials in Camunda Cloud you have the option to download a file with the lines above filled out for you."),(0,a.kt)("p",null,"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"main.go")," file inside the module and add the following lines to bootstrap the Zeebe client:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "context"\n    "fmt"\n    "github.com/zeebe-io/zeebe/clients/go/pkg/zbc"\n    "github.com/zeebe-io/zeebe/clients/go/pkg/pb"\n    "os"\n)\n\nfunc main() {\n    client, err := zbc.NewClient(&zbc.ClientConfig{\n        GatewayAddress: os.Getenv("ZEEBE_ADDRESS"),\n    })\n\n    if err != nil {\n        panic(err)\n    }\n\n    ctx := context.Background()\n    topology, err := client.NewTopologyCommand().Send(ctx)\n    if err != nil {\n        panic(err)\n    }\n\n    for _, broker := range topology.Brokers {\n        fmt.Println("Broker", broker.Host, ":", broker.Port)\n        for _, partition := range broker.Partitions {\n            fmt.Println("  Partition", partition.PartitionId, ":", roleToString(partition.Role))\n        }\n    }\n}\n\nfunc roleToString(role pb.Partition_PartitionBrokerRole) string {\n    switch role {\n    case pb.Partition_LEADER:\n        return "Leader"\n    case pb.Partition_FOLLOWER:\n        return "Follower"\n    default:\n        return "Unknown"\n    }\n}\n')),(0,a.kt)("p",null,"Run the program."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go run main.go\n")),(0,a.kt)("p",null,"You should see similar output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Broker 0.0.0.0 : 26501\n  Partition 1 : Leader\n")),(0,a.kt)("h2",{id:"model-a-process"},"Model a process"),(0,a.kt)("p",null,"Now, we need a simple process we can deploy. Later, we will extend the process with more functionality."),(0,a.kt)("p",null,"Open the ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.0/guides/getting-started/model-your-first-process"},"modeler")," of your choice and create a new BPMN diagram."),(0,a.kt)("p",null,"Add a start event named ",(0,a.kt)("inlineCode",{parentName:"p"},"Order Placed")," and an end event named ",(0,a.kt)("inlineCode",{parentName:"p"},"Order Delivered")," to the diagram and connect the events."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"model-process-step-1",src:n(98099).Z})),(0,a.kt)("p",null,"Set the ",(0,a.kt)("strong",{parentName:"p"},"id")," (the BPMN process id), and mark the diagram as ",(0,a.kt)("strong",{parentName:"p"},"executable"),"."),(0,a.kt)("p",null,"Save the diagram as ",(0,a.kt)("inlineCode",{parentName:"p"},"src/main/resources/order-process.bpmn")," under the project's folder."),(0,a.kt)("h2",{id:"deploy-a-process"},"Deploy a process"),(0,a.kt)("p",null,"Next, we want to deploy the modeled process to the broker."),(0,a.kt)("p",null,"The broker stores the process under its BPMN process id and assigns a version."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'    // After the client is created\n    ctx := context.Background()\n    response, err := client.NewDeployProcessCommand().AddResourceFile("order-process.bpmn").Send(ctx)\n    if err != nil {\n        panic(err)\n    }\n    fmt.Println(response.String())\n')),(0,a.kt)("p",null,"Run the program and verify that the process is deployed successfully.\nYou should see similar the output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'key:2251799813686743 processes:<bpmnProcessId:"order-process" version:3 processKey:2251799813686742 resourceName:"order-process.bpmn" >\n')),(0,a.kt)("h2",{id:"create-a-process-instance"},"Create a process instance"),(0,a.kt)("p",null,"We are ready to create a first instance of the deployed process."),(0,a.kt)("p",null,"A process instance is created of a specific version of the process, which can\nbe set on creation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'    // After the process is deployed.\n    variables := make(map[string]interface{})\n    variables["orderId"] = "31243"\n\n    request, err := client.NewCreateInstanceCommand().BPMNProcessId("order-process").LatestVersion().VariablesFromMap(variables)\n    if err != nil {\n        panic(err)\n    }\n\n    ctx := context.Background()\n\n    msg, err := request.Send(ctx)\n    if err != nil {\n        panic(err)\n    }\n\n    fmt.Println(msg.String())\n')),(0,a.kt)("p",null,"Run the program and verify that the process instance is created. You should see the output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'processKey:2251799813686742 bpmnProcessId:"order-process" version:3 processInstanceKey:2251799813686744\n')),(0,a.kt)("p",null,"You did it!"),(0,a.kt)("h2",{id:"see-the-process-in-action"},"See the process in action"),(0,a.kt)("p",null,"You want to see how the process instance is executed?"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to the cluster in Camunda Cloud and select it"),(0,a.kt)("li",{parentName:"ol"},"Click on the link to ",(0,a.kt)("a",{parentName:"li",href:"/docs/1.0/product-manuals/operate/userguide/basic-operate-navigation"},"Operate")),(0,a.kt)("li",{parentName:"ol"},"Select the process ",(0,a.kt)("em",{parentName:"li"},"order process"))),(0,a.kt)("p",null,"As you can see, a process instance has been started and finished."),(0,a.kt)("h2",{id:"work-on-a-task"},"Work on a task"),(0,a.kt)("p",null,"Now we want to do some work within our process."),(0,a.kt)("p",null,"First, add a few service\ntasks to the BPMN diagram and set the required attributes. Then extend your\n",(0,a.kt)("inlineCode",{parentName:"p"},"main.go")," file and activate a job which are created when the process instance\nreaches a service task."),(0,a.kt)("p",null,"Open the BPMN diagram in the modeler. Insert three service tasks between the start and the end event."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Name the first task ",(0,a.kt)("inlineCode",{parentName:"li"},"Collect Money"),"."),(0,a.kt)("li",{parentName:"ul"},"Name the second task ",(0,a.kt)("inlineCode",{parentName:"li"},"Fetch Items"),"."),(0,a.kt)("li",{parentName:"ul"},"Name the third task ",(0,a.kt)("inlineCode",{parentName:"li"},"Ship Parcel"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"model-process-step-2",src:n(64751).Z})),(0,a.kt)("p",null,"You need to set the type of each task, which identifies the nature of the work to be performed."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Set the ",(0,a.kt)("strong",{parentName:"li"},"type")," of the first task to ",(0,a.kt)("inlineCode",{parentName:"li"},"payment-service"),"."),(0,a.kt)("li",{parentName:"ul"},"Set the ",(0,a.kt)("strong",{parentName:"li"},"type")," of the second task to ",(0,a.kt)("inlineCode",{parentName:"li"},"fetcher-service"),"."),(0,a.kt)("li",{parentName:"ul"},"Set the ",(0,a.kt)("strong",{parentName:"li"},"type")," of the third task to ",(0,a.kt)("inlineCode",{parentName:"li"},"shipping-service"),".")),(0,a.kt)("p",null,"The consolidated example looks as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "context"\n    "fmt"\n    "github.com/zeebe-io/zeebe/clients/go/pkg/entities"\n    "github.com/zeebe-io/zeebe/clients/go/pkg/worker"\n    "github.com/zeebe-io/zeebe/clients/go/pkg/zbc"\n    "log"\n    "os"\n)\n\nconst ZeebeAddr = "0.0.0.0:26500"\n\nvar readyClose = make(chan struct{})\n\nfunc main() {\n    gatewayAddr := os.Getenv("ZEEBE_ADDRESS")\n    plainText:= false\n\n    if (gatewayAddr == "") {\n        gatewayAddr = ZeebeAddr\n        plainText = true\n    }\n\n    zbClient, err := zbc.NewClient(&zbc.ClientConfig{\n        GatewayAddress:         gatewayAddr,\n        UsePlaintextConnection: plainText,\n    })\n\n    if err != nil {\n        panic(err)\n    }\n\n    // deploy process\n    ctx := context.Background()\n    response, err := zbClient.NewDeployProcessCommand().AddResourceFile("order-process-4.bpmn").Send(ctx)\n    if err != nil {\n        panic(err)\n    }\n\n    fmt.Println(response.String())\n\n    // create a new process instance\n    variables := make(map[string]interface{})\n    variables["orderId"] = "31243"\n\n    request, err := zbClient.NewCreateInstanceCommand().BPMNProcessId("order-process-4").LatestVersion().VariablesFromMap(variables)\n    if err != nil {\n        panic(err)\n    }\n\n    result, err := request.Send(ctx)\n    if err != nil {\n        panic(err)\n    }\n\n    fmt.Println(result.String())\n\n    jobWorker := zbClient.NewJobWorker().JobType("payment-service").Handler(handleJob).Open()\n\n    <-readyClose\n    jobWorker.Close()\n    jobWorker.AwaitClose()\n}\n\nfunc handleJob(client worker.JobClient, job entities.Job) {\n    jobKey := job.GetKey()\n\n    headers, err := job.GetCustomHeadersAsMap()\n    if err != nil {\n        // failed to handle job as we require the custom job headers\n        failJob(client, job)\n        return\n    }\n\n    variables, err := job.GetVariablesAsMap()\n    if err != nil {\n        // failed to handle job as we require the variables\n        failJob(client, job)\n        return\n    }\n\n    variables["totalPrice"] = 46.50\n    request, err := client.NewCompleteJobCommand().JobKey(jobKey).VariablesFromMap(variables)\n    if err != nil {\n        // failed to set the updated variables\n        failJob(client, job)\n        return\n    }\n\n    log.Println("Complete job", jobKey, "of type", job.Type)\n    log.Println("Processing order:", variables["orderId"])\n    log.Println("Collect money using payment method:", headers["method"])\n\n    ctx := context.Background()\n    _, err = request.Send(ctx)\n    if err != nil {\n        panic(err)\n    }\n\n    log.Println("Successfully completed job")\n    close(readyClose)\n}\n\nfunc failJob(client worker.JobClient, job entities.Job) {\n    log.Println("Failed to complete job", job.GetKey())\n\n    ctx := context.Background()\n    _, err := client.NewFailJobCommand().JobKey(job.GetKey()).Retries(job.Retries - 1).Send(ctx)\n    if err != nil {\n        panic(err)\n    }\n}\n')),(0,a.kt)("p",null,"In this example we open a ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.0/product-manuals/concepts/job-workers"},"job worker")," for jobs of type ",(0,a.kt)("inlineCode",{parentName:"p"},"payment-service"),".\nThe job worker will repeatedly poll for new jobs of the type ",(0,a.kt)("inlineCode",{parentName:"p"},"payment-service")," and activate them\nsubsequently. Each activated job will then be passed to the job handler which implements the business\nlogic of the job worker. The handler will then complete the job with its result or fail the job if\nit encounters a problem while processing the job."),(0,a.kt)("p",null,"When you have a look at the Zeebe Monitor, then you can see that the process instance moved from the first service task to the next one:"),(0,a.kt)("p",null,"When you run the above example you should see similar output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'key:2251799813686751 processes:<bpmnProcessId:"order-process" version:4 processKey:2251799813686750 resourceName:"order-process.bpmn" >\nprocessKey:2251799813686750 bpmnProcessId:"order-process" version:4 processInstanceKey:22517998136\n86752\n2019/06/06 20:59:50 Complete job 2251799813686760 of type payment-service\n2019/06/06 20:59:50 Processing order: 31243\n2019/06/06 20:59:50 Collect money using payment method: VISA\n2019/06/06 20:59:50 Successfully completed job\n')),(0,a.kt)("h2",{id:"whats-next"},"What's next?"),(0,a.kt)("p",null,"Yay! You finished this tutorial and learned the basic usage of the Go client."),(0,a.kt)("p",null,"Next steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Learn more about the ",(0,a.kt)("a",{parentName:"li",href:"/docs/1.0/product-manuals/concepts/what-is-camunda-cloud"},"concepts behind Zeebe")),(0,a.kt)("li",{parentName:"ul"},"Learn more about ",(0,a.kt)("a",{parentName:"li",href:"/docs/1.0/reference/bpmn-processes/bpmn-primer"},"BPMN processes"))))}p.isMDXComponent=!0},98099:function(e,t){"use strict";t.Z="data:image/png;base64,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"},64751:function(e,t){"use strict";t.Z="data:image/png;base64,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"}}]);