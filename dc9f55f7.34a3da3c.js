(window.webpackJsonp=window.webpackJsonp||[]).push([[515],{1254:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Operate-Login-Page-f4587333d50c6ea689a11533eeb01bf1.png"},1255:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/tutorial-4.0-workflow-in-operate-47c5450a43469ad75d1aa756dd216124.png"},582:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return b}));var o=n(3),r=n(7),a=(n(0),n(661)),c={id:"deploy-a-workflow",title:"Deploy a workflow"},l={unversionedId:"product-manuals/zeebe/deployment-guide/getting-started/deploy-a-workflow",id:"version-0.26/product-manuals/zeebe/deployment-guide/getting-started/deploy-a-workflow",isDocsHomePage:!1,title:"Deploy a workflow",description:"In this section, we're going to start up the Zeebe broker as well as Camunda Operate, a tool that gives you visibility into deployed workflows and running workflow instances and contains tooling for fixing problems in those workflow instances.",source:"@site/versioned_docs/version-0.26/product-manuals/zeebe/deployment-guide/getting-started/deploy-a-workflow.md",slug:"/product-manuals/zeebe/deployment-guide/getting-started/deploy-a-workflow",permalink:"/docs/0.26/product-manuals/zeebe/deployment-guide/getting-started/deploy-a-workflow",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/product-manuals/zeebe/deployment-guide/getting-started/deploy-a-workflow.md",version:"0.26",sidebar:"version-0.26/Product Manuals",previous:{title:"Create a workflow",permalink:"/docs/0.26/product-manuals/zeebe/deployment-guide/getting-started/create-a-workflow"},next:{title:"Create and complete workflow instances",permalink:"/docs/0.26/product-manuals/zeebe/deployment-guide/getting-started/create-workflow-instance"}},i=[{value:"Docker compose",id:"docker-compose",children:[]},{value:"Manually configure and start Zeebe and Operate",id:"manually-configure-and-start-zeebe-and-operate",children:[]},{value:"Check the status of the broker",id:"check-the-status-of-the-broker",children:[]},{value:"Deploy the worklfow",id:"deploy-the-worklfow",children:[]}],s={rightToc:i};function b(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,c,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"In this section, we're going to start up the Zeebe broker as well as Camunda Operate, a tool that gives you visibility into deployed workflows and running workflow instances and contains tooling for fixing problems in those workflow instances.")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"We offer Operate free of charge for unrestricted ",Object(a.b)("strong",{parentName:"em"},"non-production")," use because we think it's a great tool for getting familiar with Zeebe and building initial proofs-of-concept. And at this time, Operate is available for non-production use only. In the future, we'll offer an Operate enterprise license that allows for production use, too.")),Object(a.b)("p",null,"Before we run the Zeebe broker, we need to configure an Elasticsearch exporter in the Zeebe configuration file. Which leads to the question: what's an exporter, and why is Elasticsearch a part of this tutorial?"),Object(a.b)("p",null,"The answer is that Zeebe itself doesn't store historic data related to your workflow instances. If you want to keep this data for auditing or for analysis, you need to export to another storage system. Zeebe ",Object(a.b)("em",{parentName:"p"},"does")," provide an easy-to-use exporter interface, and it also offers an Elasticsearch exporter out of the box. (",Object(a.b)("em",{parentName:"p"},Object(a.b)("a",Object(o.a)({parentName:"em"},{href:"/docs/0.26/product-manuals/zeebe/open-source/exporters"}),"See: Exporters")),")"),Object(a.b)("p",null,"Elasticsearch is also what Camunda Operate uses to store data, so to run Operate, you need to enable the Elasticsearch exporter in Zeebe and run an instance of Elasticsearch. In this section and the next section of the tutorial, we'll use Operate to visualize what's going on in Zeebe with each step we take."),Object(a.b)("h2",{id:"docker-compose"},"Docker compose"),Object(a.b)("p",null,"If you are using Docker and ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/zeebe-io/zeebe-docker-compose"}),"zeebe-docker-compose")," then follow the instructions in the README file in the ",Object(a.b)("inlineCode",{parentName:"p"},"operate")," directory of that repository to start Zeebe and Operate. Once you have done that, skip the following section, and continue from ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"#check-the-status-of-the-broker"}),"check the status of the broker"),"."),Object(a.b)("p",null,"If you are using individual components, then you will need to manually configure and start components."),Object(a.b)("h2",{id:"manually-configure-and-start-zeebe-and-operate"},"Manually configure and start Zeebe and Operate"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"These instructions are for using separate components, and are not necessary when using Docker.")),Object(a.b)("p",null,"First, copy the following lines into a new file ",Object(a.b)("inlineCode",{parentName:"p"},"getting-started.yaml")," file (in the ",Object(a.b)("inlineCode",{parentName:"p"},"config")," directory of the Zeebe broker)."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"zeebe:\n  broker:\n    exporters:\n      elasticsearch:\n        className: io.zeebe.exporter.ElasticsearchExporter\n")),Object(a.b)("p",null,"These settings enable the Zeebe Elasticsearch exporter."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," Some command examples might not work on Windows if you use cmd or\nPowershell. For Windows users we recommend to use a bash-like shell, i.e. Git\nBash, Cygwin or MinGW for this guide.")),Object(a.b)("p",null,"Next, open Terminal or another command line tool and start up Elasticsearch."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"cd elasticsearch-6.7.0\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Linux / Mac")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"bin/elasticsearch\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Windows")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"bin\\elasticsearch.bat\n")),Object(a.b)("p",null,"You'll know that startup was successful when you see something like:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"[2019-04-05T10:26:22,288][INFO ][o.e.n.Node ] [oy0juRR] started\n")),Object(a.b)("p",null,"Then start the Zeebe broker in another Terminal window."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"./bin/broker --spring.config.location=file:./config/getting-started.yaml\n")),Object(a.b)("p",null,"And finally, start Operate in yet another Terminal window. Note that you'll need port 8080 in order to run Operate and access the UI, so be sure to check that it's available."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"cd camunda-operate-distro-1.0.0-RC2\nbin/operate\n")),Object(a.b)("p",null,"To confirm that Operate was started, go to ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"http://localhost:8080"}),"http://localhost:8080"),". You should see the following:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"Zeebe Configuration File",src:n(1254).default})),Object(a.b)("p",null,"You can leave this tab open as we'll be returning to it shortly."),Object(a.b)("h2",{id:"check-the-status-of-the-broker"},"Check the status of the broker"),Object(a.b)("p",null,"You can use the Zeebe CLI to check the status of your broker. Open a new Terminal window to run it."),Object(a.b)("p",null,"If you are using Docker, change into the ",Object(a.b)("inlineCode",{parentName:"p"},"zeebe-docker-compose")," directory."),Object(a.b)("p",null,"If you are using separate components, then change into the Zeebe broker directory."),Object(a.b)("p",null,"Run the following:"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Linux")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"./bin/zbctl --insecure status\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Mac")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"./bin/zbctl.darwin --insecure status\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Windows")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"./bin/zbctl.exe --insecure status\n")),Object(a.b)("p",null,"You should see a response like this one:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"Cluster size: 1\nPartitions count: 1\nReplication factor: 1\nBrokers:\n  Broker 0 - 0.0.0.0:26501\n    Partition 0 : Leader\n")),Object(a.b)("p",null,"For all Zeebe-related operations moving forward, we'll be using Zeebe's command-line interface (CLI). In a real-world deployment, you likely wouldn't rely on the CLI to send messages or create job workers. Rather, you would embed Zeebe clients in worker microservices that connect to the Zeebe engine."),Object(a.b)("p",null,"But for the sake of keeping this guide simple (and language agnostic), we're going to use the CLI."),Object(a.b)("h2",{id:"deploy-the-worklfow"},"Deploy the worklfow"),Object(a.b)("p",null,"Next, we'll deploy our workflow model via the CLI. We'll deploy the workflow model we created in the previous section."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Linux")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"./bin/zbctl --insecure deploy order-process.bpmn\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Mac")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"./bin/zbctl.darwin --insecure deploy order-process.bpmn\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Windows")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"./bin/zbctl.exe --insecure deploy order-process.bpmn\n")),Object(a.b)("p",null,"You should see a response like this one:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),'{\n  "key": 2,\n  "workflows": [\n    {\n      "bpmnProcessId": "order-process",\n      "version": 1,\n      "workflowKey": 1,\n      "resourceName": "order-process.bpmn"\n    }\n  ]\n}\n')),Object(a.b)("p",null,"Now we'll take a look at the Operate user interface:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Go to ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"http://localhost:8080"}),"http://localhost:8080")," and use the credentials ",Object(a.b)("inlineCode",{parentName:"li"},"demo")," / ",Object(a.b)("inlineCode",{parentName:"li"},"demo")," to access Operate"),Object(a.b)("li",{parentName:"ul"},"Click on the ",Object(a.b)("inlineCode",{parentName:"li"},"Running Instances")," option in the navigation bar at the top of the interface"),Object(a.b)("li",{parentName:"ul"},"Select the ",Object(a.b)("inlineCode",{parentName:"li"},"order-process")," workflow from the ",Object(a.b)("strong",{parentName:"li"},"Workflows")," selector on the left side of the screen")),Object(a.b)("p",null,"You should see the workflow model we just deployed \u2013 the same model we built in the previous section. You won't see any workflow instances because we haven't created them yet, and that's exactly what we'll do in the next section."),Object(a.b)("p",null,Object(a.b)("img",{alt:"Workflow in Operate",src:n(1255).default})))}b.isMDXComponent=!0},661:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=b(n),d=o,h=p["".concat(c,".").concat(d)]||p[d]||u[d]||a;return n?r.a.createElement(h,l(l({ref:t},s),{},{components:n})):r.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var s=2;s<a;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);