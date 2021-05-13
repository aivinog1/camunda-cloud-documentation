(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[3829],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},34435:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var n=a(22122),r=a(19756),i=(a(67294),a(3905)),o={id:"create-a-process",title:"Create a process"},l={unversionedId:"product-manuals/zeebe/deployment-guide/getting-started/create-a-process",id:"version-1.0/product-manuals/zeebe/deployment-guide/getting-started/create-a-process",isDocsHomePage:!1,title:"Create a process",description:"New to BPMN and want to learn more before moving forward? This blog post helps to explain the standard and why it's a good fit for microservices orchestration.",source:"@site/versioned_docs/version-1.0/product-manuals/zeebe/deployment-guide/getting-started/create-a-process.md",sourceDirName:"product-manuals/zeebe/deployment-guide/getting-started",slug:"/product-manuals/zeebe/deployment-guide/getting-started/create-a-process",permalink:"/docs/1.0/product-manuals/zeebe/deployment-guide/getting-started/create-a-process",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-1.0/product-manuals/zeebe/deployment-guide/getting-started/create-a-process.md",version:"1.0",frontMatter:{id:"create-a-process",title:"Create a process"},sidebar:"version-1.0/Product Manuals",previous:{title:"Tutorial setup",permalink:"/docs/1.0/product-manuals/zeebe/deployment-guide/getting-started/tutorial-setup"},next:{title:"Deploy a process",permalink:"/docs/1.0/product-manuals/zeebe/deployment-guide/getting-started/deploy-a-process"}},s=[],c={toc:s};function p(e){var t=e.components,o=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"New to BPMN and want to learn more before moving forward? ",(0,i.kt)("a",{parentName:"em",href:"https://zeebe.io/blog/2018/08/bpmn-for-microservices-orchestration-a-primer-part-1/"},"This blog post")," helps to explain the standard and why it's a good fit for microservices orchestration.")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"In case you're already familiar with BPMN and how to create a BPMN model in Camunda Modeler, you can find the finished model that we create during the tutorial here: ",(0,i.kt)("a",{target:"_blank",href:a(4273).Z},"Zeebe Getting Started Tutorial Process Model"),".")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"If you're using the finished model we provide rather than building your own, you can also move ahead to ",(0,i.kt)("a",{parentName:"em",href:"/docs/1.0/product-manuals/zeebe/deployment-guide/getting-started/deploy-a-process"},"deploy a process"),".")),(0,i.kt)("p",null,"Camunda Modeler is a desktop modeling tool that allows you to build and configure process models using BPMN 2.0. In this section, we'll create a process model and get it ready to be deployed to Zeebe."),(0,i.kt)("p",null,"We'll create an e-commerce order process as our example, and we'll model a process that consists of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Initiating a payment for an order"),(0,i.kt)("li",{parentName:"ul"},"Receiving a payment confirmation message from an external system"),(0,i.kt)("li",{parentName:"ul"},"Shipping the items in the order with or without insurance depending on order value")),(0,i.kt)("p",null,"This is what your process model will look like when we're finished:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Getting Started Process Model",src:a(34044).Z})),(0,i.kt)("p",null,"The payment task and shipping tasks are carried out by worker services that we'll connect to the workflow engine. The ",(0,i.kt)("em",{parentName:"p"},"Payment Received")," message will be published to Zeebe by an external system, and Zeebe will then correlate the message to a process instance."),(0,i.kt)("p",null,"To get started"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open the Camunda Modeler and create a new BPMN diagram."),(0,i.kt)("li",{parentName:"ul"},"Save the model as ",(0,i.kt)("inlineCode",{parentName:"li"},"order-process.bpmn")," in the top level of the Zeebe broker directory that you just downloaded. As a reminder, this directory is called ",(0,i.kt)("inlineCode",{parentName:"li"},"zeebe-broker-0.17.0"))),(0,i.kt)("p",null,"The first element in your model will be a start event, which should already be on the canvas when you open the Modeler."),(0,i.kt)("p",null,"It's a BPMN best practice to label all elements in our model, so:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Double-click on the start event"),(0,i.kt)("li",{parentName:"ul"},"Label it ",(0,i.kt)("inlineCode",{parentName:"li"},"Order Placed")," to signify that our process will be initiated whenever a customer places an order")),(0,i.kt)("p",null,"Next, we need to add a service task:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click on the start event and select task icon"),(0,i.kt)("li",{parentName:"ul"},"Label the newly created Task ",(0,i.kt)("inlineCode",{parentName:"li"},"Initiate Payment")),(0,i.kt)("li",{parentName:"ul"},"Click the wrench icon and change the task to a service task")),(0,i.kt)("p",null,"Next, we'll configure the ",(0,i.kt)("em",{parentName:"p"},"Initiate Payment")," service task so that an external microservice can work on it:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click on the ",(0,i.kt)("inlineCode",{parentName:"li"},"Initiate Payment")," task"),(0,i.kt)("li",{parentName:"ul"},"Expand the Properties panel on the right side of the screen if it's not already visible"),(0,i.kt)("li",{parentName:"ul"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Type")," field in the Properties panel, enter ",(0,i.kt)("inlineCode",{parentName:"li"},"initiate-payment"))),(0,i.kt)("p",null,"This is what you should see in your Modeler now."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Initiate Payment Service Task",src:a(59687).Z})),(0,i.kt)("p",null,"This ",(0,i.kt)("strong",{parentName:"p"},"Type")," field represents the ",(0,i.kt)("em",{parentName:"p"},"job type")," in Zeebe. A couple of concepts that are important to understand at this point:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("em",{parentName:"li"},"job")," is simply a work item in a process that needs to be completed before a process instance can proceed to the next step. (",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("a",{parentName:"em",href:"/docs/1.0/product-manuals/concepts/job-workers"},"See: Job Workers")),")"),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("em",{parentName:"li"},"process instance")," is one running instance of a process model--in our case, an individual order to be fulfilled. (",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("a",{parentName:"em",href:"/docs/1.0/product-manuals/concepts/processes"},"See: Processes")),")")),(0,i.kt)("p",null,"For every process instance that arrives at the ",(0,i.kt)("inlineCode",{parentName:"p"},"Initiate Payment")," service task, Zeebe will create a job with type ",(0,i.kt)("inlineCode",{parentName:"p"},"initiate-payment"),". The external worker service responsible for payment processing--the so-called job worker--will poll Zeebe intermittently to ask if any jobs of type ",(0,i.kt)("inlineCode",{parentName:"p"},"initiate-payment")," are available."),(0,i.kt)("p",null,"If a job is available for a given process instance, the worker will activate it, complete it, and notify Zeebe. Zeebe will then advance that process instance to the next step in the process."),(0,i.kt)("p",null,"Next, we'll add a message event to the process:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click on the ",(0,i.kt)("inlineCode",{parentName:"li"},"Initiate Payment")," task on the Modeler"),(0,i.kt)("li",{parentName:"ul"},"Select the circular icon with a double line border"),(0,i.kt)("li",{parentName:"ul"},"Click on the wrench icon next to the newly created event"),(0,i.kt)("li",{parentName:"ul"},"Select the ",(0,i.kt)("strong",{parentName:"li"},"Message Intermediate Catch Event")),(0,i.kt)("li",{parentName:"ul"},"Double-click on the message event and label it ",(0,i.kt)("inlineCode",{parentName:"li"},"Payment Received"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Message Event",src:a(11415).Z})),(0,i.kt)("p",null,"We use message catch events in Zeebe when the workflow engine needs to receive a message from an external system before the process instance can advance. (",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("a",{parentName:"em",href:"/docs/1.0/reference/bpmn-processes/message-events/message-events"},"See: Message Events")),")"),(0,i.kt)("p",null,"In the scenario we're modeling, we ",(0,i.kt)("em",{parentName:"p"},"initiate")," a payment with our service task, but we need to wait for some other external system to actually confirm that the payment was received. This confirmation comes in the form of a message that will be sent to Zeebe - asynchronously - by an external service."),(0,i.kt)("p",null,"Messages received by Zeebe need to be correlated to specific process instances. To make this possible, we have some more configuring to do:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Select the message event and make sure you're on the ",(0,i.kt)("inlineCode",{parentName:"li"},"General")," tab of the properties panel on the right side of the screen"),(0,i.kt)("li",{parentName:"ul"},"In the properties panel, click the ",(0,i.kt)("inlineCode",{parentName:"li"},"+")," icon to create a new message. You'll now see two fields in the Modeler that we'll use to correlate a message to a specific process instance: message name and subscription correlation key."),(0,i.kt)("li",{parentName:"ul"},"Let's give this message a self-explanatory name: ",(0,i.kt)("inlineCode",{parentName:"li"},"payment-received"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add Message Name",src:a(91382).Z})),(0,i.kt)("p",null,"When Zeebe receives a message, this name field lets us know ",(0,i.kt)("em",{parentName:"p"},"which message event in the process model")," the message is referring to."),(0,i.kt)("p",null,"But how do we know which ",(0,i.kt)("em",{parentName:"p"},"specific process instance"),"--that is, which customer order--a message refers to? That's where subscription correlation key comes in. The subscription correlation key is a unique ID present in both the process instance payload and the message sent to Zeebe."),(0,i.kt)("p",null,"We'll use ",(0,i.kt)("inlineCode",{parentName:"p"},"orderId")," for our correlation key."),(0,i.kt)("p",null,"Go ahead and add the expression ",(0,i.kt)("inlineCode",{parentName:"p"},"= orderId")," to the subscription correlation key field."),(0,i.kt)("p",null,"When we create a process instance, we need to be sure to include ",(0,i.kt)("inlineCode",{parentName:"p"},"orderId")," as a variable, and we also need to provide ",(0,i.kt)("inlineCode",{parentName:"p"},"orderId")," as a correlation key when we send a message."),(0,i.kt)("p",null,"Here's what you should see in the Modeler:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Message Correlation Key",src:a(18104).Z})),(0,i.kt)("p",null,"Next, we'll add an exclusive (XOR) gateway to our process model. The exclusive gateway is used to make a data-based decision about which path a process instance should follow. In this case, we want to ship items ",(0,i.kt)("em",{parentName:"p"},"with")," insurance if total order value is greater than or equal to $100 and ship ",(0,i.kt)("em",{parentName:"p"},"without")," insurance otherwise."),(0,i.kt)("p",null,"That means that when we create a process instance, we'll need to include order value as an instance variable. But we'll come to that later."),(0,i.kt)("p",null,"First, let's take the necessary steps to configure our process model to make this decision. To add the gateway:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click on the message event you just created"),(0,i.kt)("li",{parentName:"ul"},"Select the gateway (diamond-shaped) symbol - the exclusive gateway is the default when you add a new gateway to a model"),(0,i.kt)("li",{parentName:"ul"},"Double-click on the gateway and add a label ",(0,i.kt)("inlineCode",{parentName:"li"},"Order Value?")," so that it's clear what we're using as our decision criteria")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add Exclusive Gateway to Model",src:a(39968).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Label Exclusive Gateway in Model",src:a(82794).Z})),(0,i.kt)("p",null,"We'll add two outgoing sequence flows from this exclusive gateway that lead to two different service tasks. Each sequence flow will have a data-based condition that's evaluated in the context of the process instance payload."),(0,i.kt)("p",null,"Next, we need to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Select the gateway and add a new service task to the model."),(0,i.kt)("li",{parentName:"ul"},"Label the task ",(0,i.kt)("inlineCode",{parentName:"li"},"Ship Without Insurance")),(0,i.kt)("li",{parentName:"ul"},"Set the ",(0,i.kt)("strong",{parentName:"li"},"Type")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"ship-without-insurance"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add No Insurance Service Task",src:a(44794).Z})),(0,i.kt)("p",null,"Whenever we use an exclusive gateway, we want to be sure to set a default flow, which in this case will be shipping without insurance:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Select the sequence flow you just created from the gateway to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Ship Without Insurance")," service task"),(0,i.kt)("li",{parentName:"ul"},"Click on the wrench icon"),(0,i.kt)("li",{parentName:"ul"},"Choose ",(0,i.kt)("strong",{parentName:"li"},"Default Flow"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add No Insurance Service Task",src:a(62454).Z})),(0,i.kt)("p",null,"Now we're ready to add a ",(0,i.kt)("em",{parentName:"p"},"second")," outgoing sequence flow and service task from the gateway:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Select the gateway again"),(0,i.kt)("li",{parentName:"ul"},"Add another service task to the model"),(0,i.kt)("li",{parentName:"ul"},"Label it ",(0,i.kt)("inlineCode",{parentName:"li"},"Ship With Insurance")),(0,i.kt)("li",{parentName:"ul"},"Set the ",(0,i.kt)("strong",{parentName:"li"},"Type")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"ship-with-insurance"))),(0,i.kt)("p",null,"Next, we'll set a condition expression in the sequence flow leading to this ",(0,i.kt)("inlineCode",{parentName:"p"},"Ship With Insurance")," service task:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click on the sequence flow and open the properties panel"),(0,i.kt)("li",{parentName:"ul"},"Input the expression ",(0,i.kt)("inlineCode",{parentName:"li"},"= orderValue >= 100")," in the ",(0,i.kt)("strong",{parentName:"li"},"Condition expression")," field in the properties panel"),(0,i.kt)("li",{parentName:"ul"},'Double-click on the sequence flow to add a label "',(0,i.kt)("inlineCode",{parentName:"li"},'>= $100"'))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Condition Expression",src:a(62787).Z})),(0,i.kt)("p",null,"We're almost finished! To wrap things up, we'll:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Select the ",(0,i.kt)("inlineCode",{parentName:"li"},"Ship Without Insurance")," task"),(0,i.kt)("li",{parentName:"ul"},"Add another exclusive gateway to the model to merge the branches together again (a BPMN best practice in a model like this one)."),(0,i.kt)("li",{parentName:"ul"},"Select the ",(0,i.kt)("inlineCode",{parentName:"li"},"Ship With Insurance")," task"),(0,i.kt)("li",{parentName:"ul"},"Add an outgoing sequence flow that connects to the second exclusive gateway you just created")),(0,i.kt)("p",null,"The only BPMN element we need to add is an end event:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click on the second exclusive gateway"),(0,i.kt)("li",{parentName:"ul"},"Add an end event"),(0,i.kt)("li",{parentName:"ul"},"Double-click on it to label it ",(0,i.kt)("inlineCode",{parentName:"li"},"Order Fulfilled"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Condition Expression",src:a(44413).Z})),(0,i.kt)("p",null,"Lastly, we'll change the process ID to something more descriptive than the default ",(0,i.kt)("inlineCode",{parentName:"p"},"Process_1")," that you'll see in the Modeler:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click onto a blank part of the canvas"),(0,i.kt)("li",{parentName:"ul"},"Open the properties panel"),(0,i.kt)("li",{parentName:"ul"},"Change the ",(0,i.kt)("strong",{parentName:"li"},"Id")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"order-process"))),(0,i.kt)("p",null,"Here's what you should see in the Modeler after these last few updates:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Update Process ID",src:a(48685).Z})),(0,i.kt)("p",null,"That's all for our modeling step. Remember to save the file one more time to prepare to deploy the process to Zeebe, create process instances, and complete them."))}p.isMDXComponent=!0},4273:function(e,t,a){"use strict";t.Z=a.p+"assets/files/order-process-1dee0d51f028e9f707e0ddd85f71d437.bpmn"},34044:function(e,t,a){"use strict";t.Z=a.p+"assets/images/tutorial-3.0-complete-process-ccad27bdd9f510d4fd1314ae560ffff0.png"},59687:function(e,t,a){"use strict";t.Z=a.p+"assets/images/tutorial-3.1-initiate-payment-task-3d7a204208c6f2b42ba8a47c1c6ebdc3.png"},44413:function(e,t,a){"use strict";t.Z=a.p+"assets/images/tutorial-3.10-end-event-099e6b75d1c3be40891b09d36c7cb105.png"},48685:function(e,t,a){"use strict";t.Z=a.p+"assets/images/tutorial-3.11-process-id-bc6ac6cd55b428402175f3c704d966c3.png"},11415:function(e,t,a){"use strict";t.Z=a.p+"assets/images/tutorial-3.2-modeler-message-event-fff88a2499d8f93aac727305a8c50257.png"},91382:function(e,t,a){"use strict";t.Z=a.p+"assets/images/tutorial-3.3-add-message-name-14e574e6781e16189ef1ead6f64c254d.png"},18104:function(e,t,a){"use strict";t.Z=a.p+"assets/images/tutorial-3.4-add-correlation-key-e7f5299f09dd4651effd4017a49f575a.png"},39968:function(e,t,a){"use strict";t.Z=a.p+"assets/images/tutorial-3.5-add-xor-gateway-5cee946d82cde03e75b39b0dc66207bc.png"},82794:function(e,t,a){"use strict";t.Z=a.p+"assets/images/tutorial-3.6-label-xor-gateway-93abf0aa6c3f12efbc136d53c350a36f.png"},44794:function(e,t,a){"use strict";t.Z=a.p+"assets/images/tutorial-3.7-no-insurance-task-4e19ca325ba49fd7cb804faea0ea9301.png"},62454:function(e,t,a){"use strict";t.Z=a.p+"assets/images/tutorial-3.8-default-flow-51c9e64dde97df1d41494e256d885b2e.png"},62787:function(e,t,a){"use strict";t.Z=a.p+"assets/images/tutorial-3.9-condition-expression-3181825ba25f6cd91c4d25a013d5b964.png"}}]);