(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{354:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(450)),c={id:"create-workflow-instance",title:"Create and complete workflow instances"},i={unversionedId:"product-manuals/zeebe/deployment-guide/getting-started/create-workflow-instance",id:"product-manuals/zeebe/deployment-guide/getting-started/create-workflow-instance",isDocsHomePage:!1,title:"Create and complete workflow instances",description:"We're going to create 2 workflow instances for this tutorial: one with an order value less than $100 and one with an order value greater than or equal to $100 so that we can see our XOR gateway in action.",source:"@site/docs/product-manuals/zeebe/deployment-guide/getting-started/create-workflow-instance.md",slug:"/product-manuals/zeebe/deployment-guide/getting-started/create-workflow-instance",permalink:"/docs/product-manuals/zeebe/deployment-guide/getting-started/create-workflow-instance",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/product-manuals/zeebe/deployment-guide/getting-started/create-workflow-instance.md",version:"current",sidebar:"Product Manuals",previous:{title:"Deploy a workflow",permalink:"/docs/product-manuals/zeebe/deployment-guide/getting-started/deploy-a-workflow"},next:{title:"Next steps and resources",permalink:"/docs/product-manuals/zeebe/deployment-guide/getting-started/next-steps-resources"}},l=[],s={rightToc:l};function b(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We're going to create 2 workflow instances for this tutorial: one with an order value less than $100 and one with an order value greater than or equal to $100 so that we can see our XOR gateway in action."),Object(o.b)("p",null,"Go back to the Terminal window where you deployed the workflow model and execute the following command."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")," Windows users who want to execute this command using cmd or Powershell\nhave to escape the variables differently."),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},"cmd: ",Object(o.b)("inlineCode",{parentName:"li"},'"{\\"orderId\\": 1234}"')),Object(o.b)("li",{parentName:"ul"},"Powershell: ",Object(o.b)("inlineCode",{parentName:"li"},'\'{"\\"orderId"\\": 1234}\'')))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Linux")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'./bin/zbctl --insecure create instance order-process --variables \'{"orderId": "1234", "orderValue":99}\'\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Mac")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'./bin/zbctl.darwin --insecure create instance order-process --variables \'{"orderId": "1234", "orderValue":99}\'\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Windows (Powershell)")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'./bin/zbctl.exe --insecure create instance order-process --variables \'{\\"orderId\\": \\"1234\\", \\\n"orderValue\\":99}\'\n')),Object(o.b)("p",null,"You'll see a response like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n  "workflowKey": 1,\n  "bpmnProcessId": "order-process",\n  "version": 1,\n  "workflowInstanceKey": 8\n}\n')),Object(o.b)("p",null,"This first workflow instance we just created represents a single customer order with ",Object(o.b)("inlineCode",{parentName:"p"},"orderId")," 1234 and ",Object(o.b)("inlineCode",{parentName:"p"},"orderValue")," 99 (or, $99)."),Object(o.b)("p",null,"In the same Terminal window, run the command:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Linux")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'./bin/zbctl --insecure create instance order-process --variables \'{"orderId": "2345", "orderValue":100}\'\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Mac")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'./bin/zbctl.darwin --insecure create instance order-process --variables \'{"orderId": "2345", "orderValue":100}\'\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Windows (Powershell)")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'./bin/zbctl.exe --insecure create instance order-process --variables \'{\\"orderId\\": \\"2345\\", \\\n"orderValue\\":100}\'\n')),Object(o.b)("p",null,"This second workflow instance we just created represents a single customer order with ",Object(o.b)("inlineCode",{parentName:"p"},"orderId")," 2345 and ",Object(o.b)("inlineCode",{parentName:"p"},"orderValue")," 100 (or, $100)."),Object(o.b)("p",null,"If you go back to the Operate UI and refresh the page, you should now see two workflow instances (the green badge) waiting at the ",Object(o.b)("inlineCode",{parentName:"p"},"Initiate Payment")," task."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Workflow Instances in Operate",src:n(811).default})),Object(o.b)("p",null,"Note that the workflow instance can't move past this first task until we create a job worker to complete ",Object(o.b)("inlineCode",{parentName:"p"},"initiate-payment")," jobs. So that's exactly what we'll do next."),Object(o.b)("p",null,"To make this point again: in a real-word use case, you probably won't manually create workflow instances using the Zeebe CLI. Rather, a workflow instance would be created programmatically in response to some business event, such as a message sent to Zeebe after a customer places an order. And instances might be created at very large scale if, for example, many customers were placing orders at the same time due to a sale. We're using the CLI here just for simplicity's sake."),Object(o.b)("p",null,"We have two instances currently waiting at our ",Object(o.b)("inlineCode",{parentName:"p"},"Initiate Payment")," task, which means that Zeebe has created two jobs with type ",Object(o.b)("inlineCode",{parentName:"p"},"initiate-payment"),"."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"zbctl")," provides a command to spawn simple job workers using an external command or script. The job worker will receive the payload for every job as a JSON object on ",Object(o.b)("inlineCode",{parentName:"p"},"stdin")," and must also return its result as JSON object on ",Object(o.b)("inlineCode",{parentName:"p"},"stdout")," if it handled the job successfully."),Object(o.b)("p",null,"In this example, we'll also use the unix command ",Object(o.b)("inlineCode",{parentName:"p"},"cat")," which just outputs what it receives on ",Object(o.b)("inlineCode",{parentName:"p"},"stdin"),"."),Object(o.b)("p",null,"Open a new Terminal tab or window, change into the Zeebe broker directory, and use the following command to create a job worker that will work on the ",Object(o.b)("inlineCode",{parentName:"p"},"initiate-payment")," job."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")," For Windows users, this command does not work with cmd as the ",Object(o.b)("inlineCode",{parentName:"p"},"cat"),"\ncommand does not exist. We recommend to use Powershell or a bash-like shell\nto execute this command.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Linux")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"./bin/zbctl --insecure create worker initiate-payment --handler cat\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Mac")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"./bin/zbctl.darwin --insecure create worker initiate-payment --handler cat\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Windows")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'./bin/zbctl.exe --insecure create worker initiate-payment --handler "findstr .*"\n')),Object(o.b)("p",null,"You should see a response along the lines of:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'Activated job 12 with payload {"orderId":"2345","orderValue":100}\nActivated job 7 with payload {"orderId":"1234","orderValue":99}\nHandler completed job 12 with payload {"orderId":"2345","orderValue":100}\nHandler completed job 7 with payload {"orderId":"1234","orderValue":99}\n')),Object(o.b)("p",null,"We can see that the job worker activated then completed the two available ",Object(o.b)("inlineCode",{parentName:"p"},"initiate-payment")," jobs. You can shut down the job worker if you'd like--you won't need it in the rest of the tutorial."),Object(o.b)("p",null,"Now go to the browser tab where you're running Operate. You should see that the workflow instances have advanced to the intermediate message catch event and are waiting there."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Waiting at Message Event",src:n(812).default})),Object(o.b)("p",null,"The workflow instances will wait at the intermediate message catch event until a message is received by Zeebe and correlated to the instances. Messages can be published using Zeebe clients, and it's also possible for Zeebe to connect to a message queue such as Apache Kafka and correlate messages published there to workflow instances."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"zbctl")," also supports message publishing, so we'll continue to use it in our demo. Below is the command we'll use to publish and correlate a message. You'll see that we provide the message \"Name\" that we assigned to this message event in the Zeebe Modeler as well as the ",Object(o.b)("inlineCode",{parentName:"p"},"orderId")," that we included in the payload of the instance when we created it."),Object(o.b)("p",null,"Remember, ",Object(o.b)("inlineCode",{parentName:"p"},"orderId")," is the correlation key we set in the Modeler when configuring the message event. Zeebe requires both of these fields to be able to correlate a message to a workflow instance. Because we have two workflow instances with two distinct ",Object(o.b)("inlineCode",{parentName:"p"},"orderId"),", we'll need to publish two messages. Run these two commands one after the other:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Linux")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'./bin/zbctl --insecure publish message "payment-received" --correlationKey="1234"\n./bin/zbctl --insecure publish message "payment-received" --correlationKey="2345"\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Mac")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'./bin/zbctl.darwin --insecure publish message "payment-received" --correlationKey="1234"\n./bin/zbctl.darwin --insecure publish message "payment-received" --correlationKey="2345"\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Windows")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'./bin/zbctl.exe --insecure publish message "payment-received" --correlationKey="1234"\n./bin/zbctl.exe --insecure publish message "payment-received" --correlationKey="2345"\n')),Object(o.b)("p",null,"You won't see a response in your Terminal window, but if you refresh Operate, you should see that the messages were correlated successfully and that one workflow instance has advanced to the ",Object(o.b)("inlineCode",{parentName:"p"},"Ship With Insurance")," task and the other has advanced to the ",Object(o.b)("inlineCode",{parentName:"p"},"Ship Without Insurance")," task."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Waiting at Shipping Service Tasks",src:n(813).default})),Object(o.b)("p",null,"The good news is that this visualization confirms that our decision logic worked as expected: our workflow instance with an ",Object(o.b)("inlineCode",{parentName:"p"},"orderValue")," of $100 will ship with insurance, and our workflow instance with an ",Object(o.b)("inlineCode",{parentName:"p"},"orderValue")," of $99 will ship without insurance."),Object(o.b)("p",null,"You probably know what you need to do next. Go ahead and open a Terminal window and create a job worker for the ",Object(o.b)("inlineCode",{parentName:"p"},"ship-without-insurance")," job type."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Linux")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"./bin/zbctl --insecure create worker ship-without-insurance --handler cat\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Mac")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"./bin/zbctl.darwin --insecure create worker ship-without-insurance --handler cat\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Windows")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'./bin/zbctl.exe --insecure create worker ship-without-insurance --handler "findstr .*"\n')),Object(o.b)("p",null,"You should see a response along the lines of:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'Activated job 529 with payload {"orderId":"1234","orderValue":99}\nHandler completed job 529 with payload {"orderId":"1234","orderValue":99}\n')),Object(o.b)("p",null,"You can shut down this worker now."),Object(o.b)("p",null,"Select the ",Object(o.b)("strong",{parentName:"p"},"Finished Instances")," checkbox in the bottom left of Operate, refresh the page, and voila! You'll see your first completed Zeebe workflow instance."),Object(o.b)("p",null,Object(o.b)("img",{alt:"First Workflow Instance Complete",src:n(814).default})),Object(o.b)("p",null,"Because the ",Object(o.b)("inlineCode",{parentName:"p"},"Ship With Insurance")," task has a different job type, we need to create a second worker that can take on this job."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Linux")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"./bin/zbctl --insecure create worker ship-with-insurance --handler cat\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Mac")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"./bin/zbctl.darwin --insecure create worker ship-with-insurance --handler cat\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Windows")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'./bin/zbctl.exe --insecure create worker ship-with-insurance --handler "findstr .*"\n')),Object(o.b)("p",null,"You should see a response along the lines of:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'Activated job 535 with payload {"orderId":"2345","orderValue":100}\nHandler completed job 535 with payload {"orderId":"2345","orderValue":100}\n')),Object(o.b)("p",null,"You can shut down this worker, too."),Object(o.b)("p",null,"Let's take one more look in Operate to confirm that both workflow instances have been completed."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Both Workflow Instances Complete",src:n(815).default})),Object(o.b)("p",null,"Hooray! You've completed the tutorial! Congratulations."),Object(o.b)("p",null,"In the next and final section, we'll point you to resources we think you'll find helpful as you continue working with Zeebe."))}b.isMDXComponent=!0},450:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(c,".").concat(u)]||p[u]||d[u]||o;return n?r.a.createElement(m,i(i({ref:t},s),{},{components:n})):r.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},811:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/tutorial-4.1-workflow-instances-first-task-841953c36c351b67571845b295834ccb.png"},812:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/tutorial-4.2-waiting-at-message-c6cd59ca77c0bb08b1d2e1e09e90333a.png"},813:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/tutorial-4.3-waiting-at-shipping-122de9a0ed4d37efcefaeb564e146ddd.png"},814:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/tutorial-4.4-no-insurance-complete-0854e12f195c8c914f952d7d139aac22.png"},815:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/tutorial-4.5-both-instances-complete-45628cee77108b5d8f39d611cf0ee01c.png"}}]);